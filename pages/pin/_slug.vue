<style lang="scss">
#pin-show {
  padding: 0 $page-padding;

  .title {
    color: $color-text-1;
    font-weight: 600;
    font-synthesis: style;
    font-size: 24px;
    line-height: 1.22;
    margin-top: $page-padding;
    margin-bottom: $page-padding;
    @extend %breakWord;
  }

  .state {
    font-size: 12px;
    color: $color-text-3;
  }

  .author {
    padding-bottom: $page-padding;
    padding-top: $page-padding;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .intro {
      flex: 1;
      margin-left: $page-padding;
      margin-right: $page-padding;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      overflow: hidden;
    }
  }

  .v-affix--fixed {
    left: 0 !important;
    right: 0 !important;
    width: auto !important;
    padding: 0 $page-padding;
    background-color: #fff;
  }
}

.drawer-item {
  text-align: center;
}
</style>

<template>
  <div id="pin-show">
    <p v-if="title" class="title" v-text="title.text" />
    <div class="state">
      <template v-if="bangumi">
        <span @click="handleBangumiClick" v-text="bangumi.name" />
        <span class="dot">&nbsp;·&nbsp;</span>
      </template>
      <span v-text="$utils.timeAgo(published_at)" />
      <template v-if="visit_count">
        <span class="dot">&nbsp;·&nbsp;</span>
        <span v-text="`${$utils.shortenNumber(visit_count)}阅读`" />
      </template>
      <template v-if="isAdmin">
        <span style="float:right" @click="openAdminDrawer = true">···</span>
        <VDrawer
          v-model="openAdminDrawer"
          :count="2"
          strict
          cancel="取消"
        >
          <div slot="0" class="drawer-item" @click="handleAction('recommend')">
            {{ recommended_at ? '取消推荐' : '推荐' }}
          </div>
          <div slot="1" class="drawer-item" @click="handleAction('delete')">
            删除
          </div>
        </VDrawer>
      </template>
    </div>
    <VAffix v-if="author" :fixed-top="0">
      <div class="author">
        <UserAvatar :user="author" @click="handleUserClick" />
        <div class="intro">
          <UserNickname :user="author" show-level @click="handleUserClick" />
        </div>
        <template v-if="isMine">
          <VButton size="small" theme="warning" plain @click="openEditDrawer = true">
            编辑
          </VButton>
          <VDrawer
            v-model="openEditDrawer"
            :count="2"
            strict
            cancel="取消"
          >
            <div slot="0" class="drawer-item" @click="handleAction('edit')">
              编辑
            </div>
            <div slot="1" class="drawer-item" @click="handleAction('delete')">
              删除
            </div>
          </VDrawer>
        </template>
        <UserFollowBtn v-else :slug="author.slug" />
      </div>
    </VAffix>
    <JsonContent :slug="slug" :content="content" :reward="reward_status" :vote="vote_hash" />
    <CommentMain ref="comment" :slug="slug" />
    <PinToolBar
      v-if="author"
      :slug="slug"
      :comment-count="comment_count"
      :like-count="like_count"
      :mark-count="mark_count"
      :reward-count="reward_count"
      :like-status="up_vote_status"
      :mark-status="mark_status"
      :author-slug="author.slug"
      :reward-status="reward_status"
      @comment="handleCreateComment"
    />
  </div>
</template>

<script>
import { VButton, VDrawer, VAffix } from '@calibur/sakura'
import JsonContent from '~/components/editor/JsonContent'
import UserFollowBtn from '~/components/button/UserFollowBtn'
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'
import CommentMain from '~/components/comment/CommentMain'
import PinToolBar from '~/components/PinToolBar'

export default {
  name: 'PinShow',
  components: {
    VAffix,
    VButton,
    VDrawer,
    UserFollowBtn,
    UserAvatar,
    UserNickname,
    JsonContent,
    CommentMain,
    PinToolBar
  },
  asyncData({ app, error, params }) {
    return app.$axios
      .$get('v1/pin/show', {
        params: {
          slug: params.slug
        }
      })
      .then((data) => {
        return data
      })
      .catch(error)
  },
  data() {
    return {
      slug: '',
      intro: '',
      title: null,
      author: null,
      bangumi: null,
      content: [],
      trial_type: 0,
      comment_type: 0,
      recommended_at: 0,
      published_at: '',
      last_edit_at: '',
      visit_count: 0,
      comment_count: 0,
      mark_count: 0,
      reward_count: 0,
      like_count: 0,
      vote_hash: [],
      up_vote_status: false,
      down_vote_status: false,
      mark_status: false,
      reward_status: false,
      openEditDrawer: false,
      openAdminDrawer: false
    }
  },
  computed: {
    isMine() {
      return this.$store.getters.isMine(this.author.slug)
    },
    isAdmin() {
      return this.$store.getters.isAdmin
    }
  },
  beforeMount() {
    this.patchPin()
    this.patchUser()
    this.watchPinToggle()
  },
  methods: {
    watchPinToggle() {
      this.$channel.$on('pin-toggle', ({ type, result }) => {
        this[`${type}_count`] += result
        if (type === 'like') {
          this.up_vote_status = result > 0
        } else {
          this[`${type}_status`] = result > 0
        }
      })
    },
    handleCreateComment() {
      this.$refs.comment.showForm()
    },
    handleBangumiClick() {
      this.$bridge.navigateTo({
        url: `/pages/bangumi/show/index?slug=${this.bangumi.slug}`
      })
    },
    handleUserClick() {
      this.$bridge.navigateTo({
        url: `/pages/user/show/index?slug=${this.author.slug}`
      })
    },
    handleEditClick() {
      this.$bridge.navigateTo({
        url: `/pages/webview/index?url=${encodeURIComponent(`/write/pin?slug=${this.slug}`)}`
      })
    },
    handleDeletePin() {
      this.$alert({
        title: '删除文章',
        message: '删除后不可恢复，确认要删除吗？',
        buttons: ['取消', '确认'],
        maskClose: true,
        callback: (index) => {
          if (!index) {
            return
          }
          this.$axios
            .$post('v1/pin/delete', {
              slug: this.slug
            })
            .then(() => {
              this.$bridge.navigateBack()
            })
            .catch((err) => {
              this.$toast.error(err.message)
            })
        }
      })
    },
    handleRecommendPin() {
      const result = !this.recommended_at
      const request = () => {
        this.$axios.$post('v1/pin/recommend', {
          slug: this.slug,
          result
        })
          .then(() => {
            this.$toast.info(result ? '推荐成功' : '取消推荐成功')
            this.recommended_at = result
          })
          .catch((err) => {
            this.$toast.error(err.message)
          })
      }
      if (result) {
        request()
      } else {
        this.$alert({
          title: '取消文章推荐',
          message: '确认要取消吗？',
          buttons: ['取消', '确认'],
          maskClose: true,
          callback: (index) => {
            if (!index) {
              return
            }
            request()
          }
        })
      }
    },
    handleAction(type) {
      this.openAdminDrawer = false
      this.openEditDrawer = false
      if (type === 'edit') {
        this.handleEditClick()
      } else if (type === 'delete') {
        this.handleDeletePin()
      } else if (type === 'recommend') {
        this.handleRecommendPin()
      }
    },
    patchPin() {
      this.$axios
        .$get('v1/pin/patch', {
          params: {
            slug: this.slug
          }
        })
        .then((data) => {
          Object.keys(data).forEach((key) => {
            this[key] = data[key]
          })
          this.$store.commit('social/set', {
            type: 'pin',
            slug: this.slug,
            data: {
              down_vote_status: data.down_vote_status,
              up_vote_status: data.up_vote_status,
              mark_status: data.mark_status,
              reward_status: data.reward_status
            }
          })
          this.vote_hash = data.vote_hash
        })
        .catch(() => {})
    },
    patchUser() {
      this.$axios
        .$get('v1/user/patch', {
          params: {
            slug: this.author.slug
          }
        })
        .then((data) => {
          this.$set(this, 'author', Object.assign(this.author, data))
          this.$store.commit('social/set', {
            type: 'user-follow',
            slug: this.author.slug,
            data: {
              is_following: data.is_following,
              is_followed_by: data.is_followed_by
            }
          })
        })
        .catch(() => {})
    }
  }
}
</script>
