<style lang="scss">
#app-admin {
  a {
    display: block;
    width: 100%;
    padding: 10px 20px;

    &:not(:first-child) {
      border-top: 1px solid $color-gray-line;
    }
  }
}
</style>

<template>
  <div id="app-admin">
    <NLink to="/admin/trial-qa">
      <i class="el-icon-edit" />
      <span>题目审核</span>
      <span v-if="trialInfo">（待审：{{ trialInfo.qa_wait }}，库存：{{ trialInfo.qa_pass }}）</span>
    </NLink>
    <NLink to="/admin/trial-pin">
      <i class="el-icon-edit" />
      <span>帖子审核</span>
      <span v-if="trialInfo">（待审：{{ trialInfo.pin_wait }}）</span>
    </NLink>
    <NLink to="/admin/create-bangumi">
      <i class="el-icon-plus" />
      <span>创建分区</span>
    </NLink>
  </div>
</template>

<script>
export default {
  name: 'AppAdmin',
  data() {
    return {
      trialInfo: null
    }
  },
  mounted() {
    this.getTrialInfo()
  },
  methods: {
    getTrialInfo() {
      this.$axios
        .$get('v1/console/trial/stat')
        .then((data) => {
          this.trialInfo = data
        })
        .catch()
    }
  },
  head() {
    return {
      title: '控制台'
    }
  }
}
</script>
