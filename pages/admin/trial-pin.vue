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
  props: {},
  data() {
    return {}
  },
  computed: {
    query() {
      const query = this.$route.query

      return {
        ...query,
        $axios: this.$axios,
        status: 0
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
