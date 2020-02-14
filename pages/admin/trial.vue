<style lang="scss">
#admin-qa-trial {
  padding: $page-padding;
}
</style>

<template>
  <div id="admin-qa-trial">
    <FlowLoader ref="loader" func="getBangumiQuestionTrials" type="page" :query="{ $axios, status: 0 }">
      <div slot-scope="{ flow, extra }">
        <QaItem
          v-for="(item, index) in flow"
          :key="item.id"
          :item="item"
          is-trial
          :extra="extra"
          :order="index + 1"
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
import QaItem from '~/components/QaItem'

export default {
  name: 'AdminQaTrial',
  components: {
    QaItem
  },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    handleDelete(id) {
      this.$refs.loader.delete(id)
    }
  },
  head() {
    return {
      title: '审核题目'
    }
  }
}
</script>
