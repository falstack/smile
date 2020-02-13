<template>
  <VForm id="create-bangumi-question" full :loading="loading" @submit="handleSubmit">
    <VField
      v-model="title"
      :min-row="2"
      :max-len="50"
      placeholder="请输入题目"
      label="题目（需要审核通过之后才会加入题库）"
    />
    <VField
      v-for="(item, index) in answers"
      :key="item.key"
      v-model="item.value"
      :label="`选项${index + 1}`"
      placeholder="请输入答案（20字以内）"
      :max-len="20"
    />
    <VField label="答案（题目为单选题，正确选项不能为空）">
      <VRadio v-model="rightOpt" inline :label="rightAnswerOpts" />
    </VField>
  </VForm>
</template>

<script>
import { VForm, VField, VRadio } from '@calibur/sakura'

export default {
  name: 'CreateBangumiQuestion',
  components: {
    VForm,
    VField,
    VRadio
  },
  data() {
    return {
      loading: false,
      title: '',
      answers: [
        {
          value: '',
          key: 0
        },
        {
          value: '',
          key: 1
        },
        {
          value: '',
          key: 2
        },
        {
          value: '',
          key: 3
        }
      ],
      rightOpt: -1,
      rule: null
    }
  },
  computed: {
    slug() {
      return this.$route.query.slug
    },
    rightAnswerOpts() {
      const numbers = ['A', 'B', 'C', 'D']
      return this.answers.map((_, index) => {
        return { label: numbers[index], value: _.key }
      })
    }
  },
  mounted() {
    this.getRule()
  },
  methods: {
    getRule() {
      this.$axios
        .$get('v1/join/rule/show', {
          params: {
            slug: this.slug
          }
        })
        .then((data) => {
          this.rule = data
        })
        .catch()
    },
    handleSubmit() {
      if (!this.title.trim()) {
        this.$toast.info('题目不能为空')
        return
      }
      if (this.answers.map(_ => _.value).filter(_ => _).length < 2) {
        this.$toast.info('至少要有2个选项')
        return
      }
      if (this.rightOpt === -1) {
        this.$toast.info('请选择正确选项')
        return
      }
      if (!this.answers.filter(_ => _.key === this.rightOpt)[0].value.trim()) {
        this.$toast.info('正确选项不能为空')
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/join/create', {
          title: this.title,
          answers: this.answers.map(_ => _.value).filter(_ => _),
          right_index: this.rightOpt,
          bangumi_slug: this.slug
        })
        .then(() => {
          this.$toast.success('提交成功')
          this.title = ''
          this.answers = [
            {
              value: '',
              key: 0
            },
            {
              value: '',
              key: 1
            },
            {
              value: '',
              key: 2
            },
            {
              value: '',
              key: 3
            }
          ]
          this.rightOpt = -1
        })
        .catch((err) => {
          this.$toast.error(err.message)
          this.loading = false
        })
    }
  },
  head() {
    return {
      title: '添加题目'
    }
  }
}
</script>
