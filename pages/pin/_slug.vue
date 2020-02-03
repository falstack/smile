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
    margin-bottom: $page-padding;
    color: $color-text-3;
  }

  .author {
    margin-bottom: $page-padding;
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
      <template v-if="isMine || isAdmin">
        <span style="float:right" @click="openEditDrawer = true">···</span>
        <VDrawer
          v-model="openEditDrawer"
          :count="controlMenu.length"
          strict
          cancel="取消"
        >
          <div
            v-for="(item, index) in controlMenu"
            :key="index"
            :slot="`${index}`"
            class="drawer-item"
            v-text="item"
          />
        </VDrawer>
      </template>
    </div>
    <div v-if="author" class="author">
      <UserAvatar :user="author" @click="handleUserClick" />
      <div class="intro">
        <UserNickname :user="author" @click="handleUserClick" />
      </div>
      <UserFollowBtn v-if="!isMine" :slug="author.slug" />
    </div>
    <JsonContent :slug="slug" :content="content" :reward="reward_status" :vote="vote_hash" />
  </div>
</template>

<script>
import { VDrawer } from '@calibur/sakura'
import JsonContent from '~/components/editor/JsonContent'
import UserFollowBtn from '~/components/button/UserFollowBtn'
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'

export default {
  name: 'PinShow',
  components: {
    VDrawer,
    UserFollowBtn,
    UserAvatar,
    UserNickname,
    JsonContent
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
      reward_status: false,
      like_count: 0,
      visit_count: 0,
      mark_count: 0,
      comment_count: 0,
      reward_count: 0,
      vote_hash: [],
      openEditDrawer: false
    }
  },
  computed: {
    isMine() {
      return this.$store.getters.isMine(this.author.slug)
    },
    isAdmin() {
      return this.$store.getters.isAdmin
    },
    controlMenu() {
      const result = ['删除']
      if (this.isMine) {
        result.unshift('编辑')
      }
      if (this.isAdmin) {
        result.unshift(this.recommended_at ? '取消推荐' : '推荐')
      }
      return result
    }
  },
  beforeMount() {
    this.patchPin()
    this.patchUser()
  },
  methods: {
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
