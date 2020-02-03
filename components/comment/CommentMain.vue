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
      p {
        font-size: 12px;
        margin-top: 10px;
        color: $color-text-3;
      }
    }
  }
}
</style>

<template>
  <div class="comment-main">
    <div class="hr" />
    <FlowLoader ref="loader" func="getPinComments" type="page" :query="query" :callback="handlePatch">
      <header slot="header" slot-scope="{ source }" class="comment-header">
        <h2 class="total" v-text="`评论 ${source.total}`" />
        <span v-if="sortable" class="sort" v-text="sorts.find(_ => _.value === sort).label" />
      </header>
      <ul slot-scope="{ flow }">
        <CommentItem
          v-for="item in flow"
          :key="item.id"
          :item="item"
          @create="createInner"
          @delete="handleDelete"
          @agree="handleAgree"
        />
      </ul>
      <template slot="nothing">
        <img src="~assets/img/error/no-comment.png">
        <p>还没有评论，快来抢沙发吧！</p>
      </template>
    </FlowLoader>
  </div>
</template>

<script>
import CommentItem from '~/components/comment/CommentItem'

export default {
  name: 'CommentMain',
  components: {
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
      sort: 'time_asc'
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
    createInner(data) {
      this.$refs.loader.insertAfter(data)
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
