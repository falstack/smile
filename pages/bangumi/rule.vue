<style lang="scss">
#bangumi-rule {
  .form-tip {
    font-size: 12px;
    color: $color-orange;
  }
}
</style>

<template>
  <VForm v-if="rule" id="bangumi-rule" full :loading="loading" @submit="handleSubmit">
    <VField label="加入方式">
      <p class="form-tip">
        加入方式更改之后不会影响「正在答题」和「已经加入」的人
      </p>
      <br>
      <VRadio
        v-model="rule.rule_type"
        :label="[
          { label: '无需答题和确认', value: 0 },
          { label: '需要答题或管理邀请', value: 1 },
          { label: '只能答题加入', value: 2 },
          { label: '只能管理邀请', value: 3 }
        ]"
      />
    </VField>
    <template v-if="rule.rule_type === 1 || rule.rule_type === 2">
      <VField :label="`出题数（${rule.question_count}个）`">
        <p class="form-tip">
          如果题库数量不足，则能出几题出几题，如果题库数量超过设定值，则随机出指定题目数
        </p>
        <VRange v-model="rule.question_count" :min="5" :max="100" />
      </VField>
      <VField :label="`正确率（${rule.right_rate}%）`">
        <p class="form-tip">
          答题的正确率不低于该值才能通过
        </p>
        <VRange v-model="rule.right_rate" :min="50" :max="100" />
      </VField>
    </template>
    <!--
    <ElFormItem label="答题时长">
      <p class="form-tip">
        答题超过该时长之后就自动设为失败
      </p>
      <ElSlider
        v-model="rule.qa_minutes"
        :min="30"
        :max="120"
        :format-tooltip="formatQAMinutes"
      />
    </ElFormItem>
    <ElFormItem label="考核方式">
      <ElRadioGroup v-model="rule.result_type">
        <ElRadio :label="0">
          答完所有题目之后只告知是否通过
        </ElRadio>
        <ElRadio :label="1">
          每答一道题就得知对错（该模式下正确率强制为100%）
        </ElRadio>
      </ElRadioGroup>
    </ElFormItem>
    -->
  </VForm>
</template>

<script>
import { VForm, VRange, VField, VRadio } from '@calibur/sakura'

export default {
  name: 'EditTagRuleForm',
  layout: 'app',
  components: {
    VForm,
    VField,
    VRange,
    VRadio
  },
  data() {
    return {
      rule: null,
      loading: false
    }
  },
  computed: {
    slug() {
      return this.$route.query.slug
    }
  },
  mounted() {
    this.getRule()
  },
  methods: {
    handleSubmit() {
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/join/rule/update', {
          ...this.rule,
          bangumi_slug: this.slug
        })
        .then(() => {
          this.$toast.success('更新成功')
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
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
        .catch((err) => {
          this.$toast.error(err.message)
        })
    }
  },
  head() {
    return {
      title: '入圈规则'
    }
  }
}
</script>
