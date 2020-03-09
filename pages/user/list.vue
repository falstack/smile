<template>
  <div id="user-list">
    <template v-if="headers.length">
      <VSwitcher :default-index="activeIndex" :headers="headers" align="around" @change="handleChange">
        <FlowLoader
          v-for="(item, index) in headers"
          ref="loader"
          :key="index"
          :slot="`${index}`"
          :func="item.func"
          :type="item.type"
          :query="item.query"
          :callback="detectUserRelation"
        >
          <ul slot-scope="{ flow }">
            <UserItem v-for="user in flow" :key="user.slug" :user="user" :score="computedUserScore(user, item.query.sort)" />
          </ul>
        </FlowLoader>
      </VSwitcher>
    </template>
    <FlowLoader
      v-else
      :func="query.func"
      :type="query.type"
      :query="{
        $axios,
        ...query
      }"
    >
      <ul slot-scope="{ flow }">
        <UserItem v-for="user in flow" :key="user.slug" :user="user" :score="computedUserScore(user)" />
      </ul>
    </FlowLoader>
  </div>
</template>

<script>
import { VSwitcher } from '@calibur/sakura'
import UserItem from '~/components/UserItem'

export default {
  name: 'UserList',
  components: {
    VSwitcher,
    UserItem
  },
  data() {
    const { query } = this.$route
    return {
      activeIndex: query.type === 'user_followers' ? 1 : 0
    }
  },
  computed: {
    query() {
      return this.$route.query
    },
    headers() {
      const { query } = this
      if (query.type === 'idol_fans') {
        return [
          {
            name: '最近入股',
            func: 'getIdolFans',
            type: 'page',
            query: {
              $axios: this.$axios,
              take: 20,
              slug: query.slug,
              sort: 'news'
            }
          },
          {
            name: '最多入股',
            func: 'getIdolFans',
            type: 'page',
            query: {
              $axios: this.$axios,
              take: 20,
              slug: query.slug,
              sort: 'hots'
            }
          }
        ]
      }
      if (query.type === 'user_following' || query.type === 'user_followers') {
        return [
          {
            name: '关注',
            func: 'getUserRelation',
            type: 'seenIds',
            query: {
              $axios: this.$axios,
              slug: query.slug,
              relation: 'following',
              changing: 'slug'
            }
          },
          {
            name: '粉丝',
            func: 'getUserRelation',
            type: 'seenIds',
            query: {
              $axios: this.$axios,
              slug: query.slug,
              relation: 'follower',
              changing: 'slug'
            }
          }
        ]
      }
      return []
    }
  },
  methods: {
    handleChange(index) {
      this.activeIndex = index
      this.$refs.loader[index].initData()
    },
    computedUserScore(user, sort) {
      const { query } = this
      if (query.type === 'idol_fans') {
        if (sort === 'news') {
          return this.$utils.timeAgo(user.list_score)
        }
        return `${user.list_score}股`
      }
      return ''
    },
    detectUserRelation({ data }) {
      if (this.query.type !== 'user_following' && this.query.type !== 'user_followers') {
        return
      }
      const { result } = data
      if (!result.length) {
        return
      }
      this.$axios
        .$get('v1/user/detect_relation', {
          params: {
            type: 'user',
            targets: result.map(_ => _.slug).join(',')
          }
        })
        .then((data) => {
          this.$store.commit('social/set', {
            type: 'user-follow',
            data
          })
          this.$refs.loader[this.activeIndex].patch(data)
        })
        .catch(() => {})
    }
  },
  head() {
    return {
      title: '用户列表'
    }
  }
}
</script>
