<style lang="scss">
</style>

<template>
  <div id="bangumi-top-250">
    <FlowLoader
      func="getBangumiRank"
      type="page"
      :query="{ $axios }"
    >
      <div slot-scope="{ flow }">
        <BangumiRankItem v-for="item in flow" :key="item.slug" :item="item" />
      </div>
    </FlowLoader>
  </div>
</template>

<script>
import BangumiRankItem from '~/components/BangumiRankItem'

export default {
  name: 'BangumiTop250',
  components: {
    BangumiRankItem
  },
  props: {},
  async asyncData({ store, app }) {
    await store.dispatch('flow/initData', {
      func: 'getBangumiRank',
      type: 'page',
      query: {
        $axios: app.$axios
      }
    })
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
  head: {
    title: '动漫排行榜'
  }
}
</script>
