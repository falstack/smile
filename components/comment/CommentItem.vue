<style lang="scss">
.comment-item {
  &:not(:last-child) {
    main {
      &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: $color-gray-border;
        transform: scaleY(0.5);
      }
    }
  }

  aside {
    float: left;
    margin-right: $page-padding;
    margin-top: $page-padding;
  }

  main {
    position: relative;
    overflow: hidden;
    padding: $page-padding 0;

    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .intro {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
        overflow: hidden;
      }

      .desc {
        font-size: 12px;
        color: $color-text-3;

        .cc {
          margin-right: 5px;
        }
      }
    }

    footer {
      div {
        display: inline-block;
        margin-right: 18px;
      }

      .ic-good_fill {
        color: $color-main;
      }
    }
  }
}
</style>

<template>
  <li class="comment-item">
    <aside>
      <UserAvatar :user="item.author" />
    </aside>
    <main>
      <header>
        <div class="intro">
          <UserNickname :user="item.author" />
          <div class="desc">
            <time v-text="$utils.timeAgo(item.created_at)" />
            <template v-if="item.getter">
              <span class="cc">回复</span>
              <span class="fade-link" @click="clickGetter" v-html="item.getter.nickname" />
            </template>
          </div>
        </div>
        <span />
      </header>
      <JsonContent :content="item.content" />
      <footer>
        <div @click="showCreate = !showCreate">
          <i class="iconfont ic-talk" />
        </div>
        <div v-if="isMine || isAdmin" @click="deleteComment">
          <i class="iconfont ic-trash" />
        </div>
        <div @click="clickAgree">
          <i class="iconfont ic-good" />
          <span v-if="item.like_count" v-text="item.like_count" />
        </div>
      </footer>
    </main>
  </li>
</template>

<script>
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'
import JsonContent from '~/components/editor/JsonContent'

export default {
  name: 'CommentItem',
  components: {
    UserAvatar,
    UserNickname,
    JsonContent
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showCreate: false,
      deleting: false,
      loading: false
    }
  },
  computed: {
    isMine() {
      return this.$store.getters.isMine(this.item.author.slug)
    },
    isAdmin() {
      return this.$store.getters.isAdmin
    }
  },
  methods: {
    handleCreate(value) {
      this.$emit('create', {
        id: this.item.id,
        value
      })
      this.showCreate = false
    },
    clickAgree() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        this.$toast.info('不能给自己点赞')
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/social/toggle', {
          target_slug: this.item.id.toString(),
          target_type: 'comment',
          action_slug: this.$store.state.user.slug,
          method_type: 'up_vote'
        })
        .then((result) => {
          this.loading = false
          this.$emit('agree', {
            id: this.item.id,
            count: result ? this.item.like_count - -1 : this.item.like_count - 1,
            result
          })
        })
        .catch((err) => {
          this.$toast.error(err.message)
          this.loading = false
        })
    },
    deleteComment() {
      if (this.deleting) {
        return
      }
      this.$alert({
        title: '删除评论',
        message: '删除后不可恢复，确认要删除吗？',
        buttons: ['取消', '确定'],
        maskClose: true,
        callback: (index) => {
          if (!index) {
            return
          }
          this.deleting = true
          this.$axios
            .$post('v1/comment/delete', {
              comment_id: this.item.id
            })
            .then(() => {
              this.$toast.success('删除成功')
              this.$emit('delete', this.item.id)
            })
            .catch((err) => {
              this.$toast.error(err.message)
              this.deleting = false
            })
        }
      })
    },
    clickGetter() {
      this.$bridge.navigateTo({
        url: `/pages/user/show/index?slug=${this.item.getter.slug}`
      })
    }
  }
}
</script>
