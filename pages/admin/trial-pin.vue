<style lang="scss">
</style>

<template>
  <div id="trial-pin">
    <FlowLoader ref="loader" func="getTrialPinList" type="page" :query="query">
      <div slot-scope="{ flow, extra }">
        <TrialPinItem
          v-for="item in flow"
          :key="item.slug"
          :item="item"
          :extra="extra[item.slug]"
          @delete="handleDelete"
        />
      </div>
      <template slot="error" slot-scope="{ error }">
        {{ error.message }}
      </template>
    </FlowLoader>
  </div>
</template>

<script>
import TrialPinItem from '~/components/TrialPinItem'

export default {
  name: 'TrialPin',
  components: {
    TrialPinItem
  },
  computed: {
    query() {
      const query = this.$route.query

      return {
        ...query,
        $axios: this.$axios,
        status: 0,
        changing: 'slug'
      }
    },
    source() {
      return this.$store.getters['flow/getFlow']({
        func: 'getTrialPinList',
        type: 'page',
        query: this.query
      })
    }
  },
  methods: {
    handleDelete(slug) {
      this.$refs.loader.delete(slug)
      if (this.source.result.length === 0) {
        this.$refs.loader.refresh()
      }
    }
  }
}
</script>
