<style lang="scss">
#bangumi-join {
  padding: $page-padding;

  .launch {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .avatar {
      width: 75px;
      height: 75px;
      border-radius: 10%;
      margin-bottom: 15px;
    }
  }
}
</style>

<template>
  <div id="bangumi-join">
    <div v-if="showLaunch" class="launch">
      <template v-if="bangumi">
        <img class="avatar" :src="$resize(bangumi.avatar, { width: 150 })" alt="">
        <p>加入《{{ bangumi.name }}》</p>
      </template>
      <template v-if="rule">
        <ul>
          <li>该番剧出题：{{ rule.question_count }}道</li>
          <li>正确率需要：{{ rule.right_rate }}%</li>
        </ul>
      </template>
      <VButton type="success" round @click="handleBegin">
        开始答题
      </VButton>
      <NLink v-if="showCreate" :to="`/bangumi/test?slug=${slug}`">
        出题
      </NLink>
    </div>
    <template v-else>
      <QaItem
        v-for="(item, index) in questions"
        :key="item.id"
        :order="index"
        :extra="extra"
        :item="item"
        @select="handleSelect"
      />
      <VButton
        block
        :loading="loading"
        size="large"
        @click="handleSubmit"
      >
        交卷
      </VButton>
    </template>
  </div>
</template>

<script>
import { VButton } from '@calibur/sakura'
import mustSign from '~/mixins/mustSign'
import QaItem from '~/components/QaItem'

export default {
  name: 'BangumiJoin',
  components: {
    QaItem,
    VButton
  },
  mixins: [mustSign],
  data() {
    return {
      showLaunch: true,
      showCreate: false,
      rule: null,
      sheet: null,
      bangumi: null,
      questions: [],
      selected: {},
      extra: null,
      loading: false
    }
  },
  computed: {
    slug() {
      return this.$route.query.slug
    }
  },
  mounted() {
    this.getBangumiInfo()
    this.getBangumiRule()
  },
  methods: {
    getBangumiRule() {
      this.$axios
        .$get('v1/join/rule/show', {
          params: {
            slug: this.slug
          }
        })
        .then((data) => {
          this.rule = data
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
    },
    getBangumiInfo() {
      this.$axios
        .$get('v1/bangumi/show', {
          params: {
            slug: this.slug
          }
        })
        .then((data) => {
          this.bangumi = data
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
    },
    handleBegin() {
      this.$axios
        .$post('v1/join/begin', {
          slug: this.slug
        })
        .then((result) => {
          if (result === 'reject') {
            this.$toast.info('该分区还未开放')
          } else if (result === 'resolve') {
            this.$toast.info('你已加入该分区')
          } else if (result === 'no_rule') {
            this.$toast.info('还没有答题规则')
          } else if (result === 'no_question') {
            this.$toast.info('分区题目数量不足')
            this.showCreate = true
          } else if (result === 'pending') {
            this.getQuestions()
          }
          this.getQuestions()
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
    },
    getQuestions() {
      this.$axios
        .$get('v1/join/list', {
          params: {
            slug: this.slug
          }
        })
        .then((data) => {
          this.extra = data.extra
          this.selected = data.extra.answers || {}
          this.questions = data.result
          this.showLaunch = false
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
    },
    handleSelect({ questionId, answerId }) {
      this.$axios
        .$post('v1/join/vote', {
          question_id: questionId,
          answer_id: answerId
        })
        .then(() => {
          this.selected[questionId] = answerId
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
    },
    handleSubmit() {
      if (Object.keys(this.selected).length < this.questions.length) {
        this.$toast.info('请先做完所有题目')
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/join/submit', {
          slug: this.slug
        })
        .then((result) => {
          this.$toast.info(result).then(() => {
            this.$bridge.redirectTo({
              url: `/pages/bangumi/show/index?slug=${this.slug}`
            })
          })
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  head() {
    return {
      title: '答题'
    }
  }
}
</script>
