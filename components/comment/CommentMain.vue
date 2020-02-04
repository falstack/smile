<style lang="scss">
.comment-main {
  padding-top: $page-padding;

  .hr {
    height: $page-padding;
    margin-left: -$page-padding;
    margin-right: -$page-padding;
    background-color: $color-gray-bg;
    margin-bottom: $page-padding;
  }

  .comment-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $page-padding;

    .total {
      font-size: 16px;
      color: #222;
      font-weight: normal;
    }

    .sort {
      font-size: 14px;
      color: $color-text-3;
    }
  }

  .flow-loader-state {
    &-nothing {
      margin: 50px 0;

      p {
        font-size: 12px;
        margin-top: 10px;
        color: $color-text-3;
      }
    }

    &-loading {
      img {
        display: block;
        margin: 50px auto;
        width: 150px;
        height: auto;
      }
    }
  }

  .v-dialog {
    border-radius: 5px;

    .footer {
      padding: 0 $page-padding $page-padding;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>

<template>
  <div class="comment-main">
    <div class="hr" />
    <FlowLoader
      ref="loader"
      func="getPinComments"
      type="page"
      :query="query"
      :callback="handlePatch"
      use-first-loading
    >
      <header slot="header" slot-scope="{ source }" class="comment-header">
        <h2 class="total" v-text="`评论 ${source.total}`" />
        <span v-if="sortable" class="sort" v-text="sorts.find(_ => _.value === sort).label" />
      </header>
      <ul slot-scope="{ flow }">
        <CommentItem
          v-for="item in flow"
          :key="item.id"
          :item="item"
          @create="showForm"
          @delete="handleDelete"
          @agree="handleAgree"
        />
      </ul>
      <template slot="nothing">
        <img src="~assets/img/error/no-comment.png" @click="showForm({})">
        <p>还没有评论，快来抢沙发吧！</p>
      </template>
      <template slot="first-loading">
        <img src="~assets/img/loading.gif">
      </template>
    </FlowLoader>
    <VDialog
      v-model="showCreateForm"
      height="auto"
    >
      <VField
        v-model="replyForm.content"
        :placeholder="replyUser ? `回复：${replyUser.nickname}` : '发布评论'"
        :max-len="1500"
        :max-row="6"
        :min-row="3"
      />
      <div class="footer">
        <span />
        <VButton size="small" @click="createComment">
          发送
        </VButton>
      </div>
    </VDialog>
  </div>
</template>

<script>
import { VDialog, VField, VButton } from '@calibur/sakura'
import CommentItem from '~/components/comment/CommentItem'

export default {
  name: 'CommentMain',
  components: {
    VField,
    VDialog,
    VButton,
    CommentItem
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    sortable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sort: 'time_asc',
      replyForm: {
        images: [],
        content: '',
        comment_id: '',
        pin_slug: this.slug
      },
      replyUser: null,
      creating: false,
      showCreateForm: false
    }
  },
  computed: {
    query() {
      return {
        $axios: this.$axios,
        slug: this.slug,
        sort: this.sort,
        count: 10,
        mode: 'jump'
      }
    },
    sorts() {
      return [
        {
          label: '按热度排序',
          value: 'hottest'
        },
        {
          label: '按时间升序',
          value: 'time_asc'
        },
        {
          label: '按时间降序',
          value: 'time_desc'
        }
      ]
    }
  },
  methods: {
    showForm(params = {}) {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      const commentId = params.comment_id || ''
      if (commentId !== this.replyForm.comment_id) {
        this.replyForm.content = ''
        this.replyForm.images = []
      }
      this.replyForm.comment_id = commentId
      this.replyUser = params.target || null
      this.showCreateForm = true
    },
    createComment() {
      if (!this.replyForm.content || this.creating) {
        return
      }
      this.creating = true
      this.$axios
        .$post('v1/comment/create', this.replyForm)
        .then((value) => {
          if (this.replyUser) {
            this.$refs.loader.insertAfter({
              id: this.replyForm.comment_id,
              value
            })
          } else {
            this.$refs.loader.append(value)
          }
          this.replyForm.content = ''
          this.replyForm.images = []
          this.creating = false
          this.showCreateForm = false
        })
        .catch((err) => {
          this.$toast.error(err.message)
          this.creating = false
          this.showCreateForm = false
        })
    },
    handleAgree({ id, result, count }) {
      this.$refs.loader.update({
        id,
        value: result,
        key: 'up_vote_status'
      })
      this.$refs.loader.update({
        id,
        value: count,
        key: 'like_count'
      })
    },
    changeCommentSort(sort) {
      this.sort = sort
      this.$nextTick(() => {
        this.$refs.loader.refresh()
      })
    },
    handleDelete(id) {
      this.$refs.loader.delete(id)
    },
    handlePatch({ data }) {
      const { result } = data
      if (!result.length) {
        return
      }
      this.$axios
        .$get('v1/comment/patch', {
          params: {
            comment_ids: result.map(_ => _.id).join(',')
          }
        })
        .then((data) => {
          this.$refs.loader.patch(data)
        })
        .catch(() => {})
    }
  }
}
</script>
