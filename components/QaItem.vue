<style lang="scss" module>
$answer-height: 40px;
$answer-padding: 10px;
.qa-item {
  padding: $answer-padding 0;

  &:not(:last-child) {
    border-bottom: 1px solid $color-gray-border;
  }

  .header {
    font-weight: bold;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    .order {
      padding: 0 $answer-padding;
    }
  }

  .main {
    margin-bottom: $answer-padding;

    .answer {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: $answer-padding $answer-padding $answer-padding 0;
      min-height: $answer-height;
      line-height: $answer-height - $answer-padding * 2;
      border-radius: $answer-height / 2;
      border: 1px solid $color-gray-border;
      margin-top: $answer-height / 2;

      .is-right {
        color: #fff;
        position: relative;

        &:before {
          content: '';
          position: absolute;
          left: $answer-padding / 2;
          top: 0;
          width: $answer-height - $answer-padding * 2;
          height: $answer-height - $answer-padding * 2;
          border-radius: 50%;
          background-color: $color-main;
          z-index: -1;
        }
      }

      &.is-selected {
        background-color: $color-blue;
        border-color: $color-blue;
        color: #fff;
      }

      .order {
        padding: 0 $answer-padding;
      }
    }
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: $answer-padding;

    .intro {
      color: $color-text-3;
      font-size: 12px;
      overflow: hidden;
    }

    .control {
      flex-shrink: 0;
    }
  }
}
</style>

<template>
  <div :class="$style.qaItem">
    <div :class="$style.header">
      <div :class="$style.order" v-text="order" />
      <p v-html="item.title" />
    </div>
    <div :class="$style.main">
      <div v-for="(val, key, index) in item.answers" :key="key" :class="[$style.answer, { [$style.isSelected]: !isTrial && key === rightAnswer }]" @click="handleAnswerClick(key)">
        <div :class="[$style.order, { [$style.isRight]: isTrial && key === rightAnswer }]" @click="changeRightAnswer(key)" v-text="answerNumber(index)" />
        <p v-html="val" />
      </div>
    </div>
    <div :class="$style.footer">
      <div :class="$style.intro">
        <div class="oneline">
          <span>出题人：</span>
          <span @click="handleUserClick" v-text="item.user.nickname" />
        </div>
        <div v-if="isTrial" class="oneline">
          <span>番の剧：</span>
          <span @click="handleBangumiClick" v-text="item.bangumi.name" />
        </div>
      </div>
      <div v-if="isTrial" :class="$style.control">
        <VButton size="small" theme="danger" text @click="handleDelete">
          拒绝
        </VButton>
        <VButton size="small" theme="success" @click="handlePass">
          通过
        </VButton>
      </div>
    </div>
  </div>
</template>

<script>
import { VButton } from '@calibur/sakura'

export default {
  name: 'QaItem',
  components: {
    VButton
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    order: {
      type: Number,
      required: true
    },
    isTrial: {
      type: Boolean,
      default: false
    },
    extra: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    const getRightAnswer = () => {
      const id = this.item.id.toString()
      const answers = this.extra.answers || {}
      let result = ''
      const answerIds = Object.keys(answers)
      for (let i = 0; i < answerIds.length; i++) {
        if (answerIds[i].toString() === id) {
          result = answers[answerIds[i]]
          break
        }
      }
      return result
    }
    return {
      rightAnswer: getRightAnswer(),
      loading: false
    }
  },
  methods: {
    changeRightAnswer(key) {
      if (!this.isTrial) {
        return
      }
      this.rightAnswer = key
    },
    answerNumber(index) {
      return ['A', 'B', 'C', 'D'][index]
    },
    handleAnswerClick(key) {
      if (this.isTrial) {
        return
      }
      this.rightAnswer = key
      this.$emit('select', {
        questionId: this.item.id,
        answerId: key
      })
    },
    handleUserClick() {
      this.$bridge.navigateTo({
        url: `/pages/user/show/index?slug=${this.item.user.slug}`
      })
    },
    handleBangumiClick() {
      this.$bridge.navigateTo({
        url: `/pages/bangumi/show/index?slug=${this.item.bangumi.slug}`
      })
    },
    handleDelete() {
      if (this.loading) {
        return
      }
      this.$alert({
        title: '提示',
        message: '删除后不可恢复，确认要删除吗？',
        buttons: ['取消', '确定'],
        callback: (index) => {
          if (!index) {
            return
          }
          this.loading = true
          this.$axios
            .$post('v1/join/delete', { id: this.item.id })
            .then(() => {
              this.$toast.success('删除成功')
              this.$emit('delete', this.item.id)
            })
            .catch((err) => {
              this.$toast.error(err.message)
            })
            .finally(() => {
              this.loading = false
            })
        }
      })
    },
    handlePass() {
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/join/recommend', {
          id: this.item.id,
          right_id: this.rightAnswer
        })
        .then(() => {
          this.$toast.success('入库成功')
          this.$emit('delete', this.item.id)
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
