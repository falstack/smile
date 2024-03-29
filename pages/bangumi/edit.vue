<style lang="scss">
#edit-bangumi {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .avatar {
    width: 75px;
    height: 75px;
    display: block;
    border-radius: 10px;
    object-fit: cover;
    margin: 10px 0;
  }

  .title {
    display: block;
    width: 100%;
    font-weight: 500;
    padding: 0 20px;
    text-align: center;
    margin-bottom: 10px;
  }

  .intro {
    display: block;
    width: 100%;
    color: $color-text-2;
    padding: 0 10px;
    margin-bottom: 10px;
  }

  hr {
    display: block;
    width: 100%;
    height: 10px;
    background-color: #e7ecf2;
    border: none;
    outline: none;
  }

  .controls {
    width: 100%;

    > * {
      display: block;
      width: 100%;
      padding: 10px 20px;

      &:not(:first-child) {
        border-top: 1px solid $color-gray-line;
      }
    }
  }
}
</style>

<template>
  <div v-if="bangumi" id="edit-bangumi">
    <img class="avatar" :src="$resizeImage(bangumi.avatar, { width: 150 })">
    <p class="title oneline" v-text="bangumi.name" />
    <p class="intro" v-html="bangumi.intro" />
    <template v-if="isAdmin">
      <hr>
      <div class="controls">
        <div>
          <span>番剧ID：</span>
          <span v-text="bangumi.slug" />
        </div>
      </div>
    </template>
    <hr>
    <div class="controls">
      <NLink v-if="showEdit" :to="`/bangumi/profile?slug=${bangumi.slug}`">
        <i class="el-icon-setting" />
        <span>编辑番剧</span>
      </NLink>
      <NLink v-if="showRelation" :to="`/bangumi/relation?slug=${bangumi.slug}`">
        <i class="el-icon-connection" />
        <span>相关番剧</span>
      </NLink>
      <NLink v-if="changeTagRule" :to="`/bangumi/rule?slug=${bangumi.slug}`">
        <i class="el-icon-s-operation" />
        <span>入圈规则</span>
      </NLink>
      <NLink :to="`/admin/create-idol?slug=${bangumi.slug}`">
        <i class="el-icon-plus" />
        <span>添加偶像</span>
      </NLink>
      <NLink :to="`/bangumi/test?slug=${bangumi.slug}`">
        <i class="el-icon-edit" />
        <span>添加题目</span>
      </NLink>
      <NLink v-if="trialQuestion" :to="`/admin/trial-qa?bangumi_slug=${bangumi.slug}`">
        <i class="el-icon-edit" />
        <span>题目审核</span>
        <span v-if="trialInfo">（待审：{{ trialInfo.qa_wait }}，库存：{{ trialInfo.qa_pass }}）</span>
      </NLink>
      <NLink v-if="trialPin" :to="`/admin/trial-pin?from=bangumi&slug=${bangumi.slug}`">
        <i class="el-icon-edit" />
        <span>帖子审核</span>
        <span v-if="trialInfo">（待审：{{ trialInfo.pin_wait }}）</span>
      </NLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditBangumi',
  asyncData({ app, error, query }) {
    const slug = query.slug
    if (!slug) {
      return
    }
    return app.$axios
      .$get('v1/bangumi/show', {
        params: { slug }
      })
      .then((bangumi) => {
        return { bangumi }
      })
      .catch(error)
  },
  data() {
    return {
      bangumi: null,
      trialInfo: null
    }
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin
    },
    showEdit() {
      return this.$hasRole('update_bangumi')
    },
    showRelation() {
      return this.$hasRole('update_bangumi')
    },
    changeTagRule() {
      return this.$hasRole('change_tag_rule')
    },
    trialQuestion() {
      return this.$hasRole('trial_qa')
    },
    trialPin() {
      return this.$hasRole('trial_pin')
    }
  },
  mounted() {
    this.getTrialInfo()
  },
  methods: {
    getTrialInfo() {
      this.$axios
        .$get('v1/console/trial/stat', {
          params: {
            slug: this.bangumi.slug,
            from: 'bangumi'
          }
        })
        .then((data) => {
          this.trialInfo = data
        })
        .catch()
    }
  },
  head() {
    return {
      title: '番剧介绍'
    }
  }
}
</script>
