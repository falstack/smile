<style lang="scss">
.trial-pin-item {
  border-bottom: 1px solid $color-gray-border;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: $page-padding;

    .user {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex: 1;
      overflow: hidden;

      img {
        width: 40px;
        height: 40px;
        margin-right: $page-padding;
      }

      .name {
        flex: 1;
        overflow: hidden;
      }
    }

    .bangumi,
    .time {
      color: $color-text-3;
      font-size: 12px;
    }

    .time {
      margin-left: $page-padding;
    }
  }

  .content {
    padding: 0 $page-padding $page-padding;
  }

  .images {
    position: relative;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    margin-right: $page-padding;
    padding-bottom: $page-padding;
    font-size: 0;

    img {
      height: 150px;
      width: auto;
      margin-left: $page-padding;
    }

    .total {
      position: absolute;
      left: $page-padding;
      bottom: $page-padding;
      padding: 3px 6px;
      color: #fff;
      font-size: 12px;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .footer {
    padding: 0 $page-padding $page-padding;

    .sub_title {
      color: $color-text-3;
      font-size: 14px;
    }

    .v-btn {
      margin: 5px 5px 5px 0;
    }
  }

  .control {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-left: $page-padding;
    margin-bottom: $page-padding;

    .v-btn {
      margin-right: $page-padding;
    }
  }
}
</style>

<template>
  <div class="trial-pin-item">
    <div class="header">
      <div class="user">
        <img :src="$resizeImage(item.author.avatar, { width: 40 })" @click="clickUser">
        <div class="name">
          <p class="nickname oneline" @click="clickUser" v-html="item.author.nickname" />
          <p class="bangumi oneline" @click="clickBangumi" v-html="item.bangumi.name" />
        </div>
      </div>
      <span class="time" v-text="$utils.timeAgo(item.published_at)" />
    </div>
    <div class="content" v-html="extra.filter.text" />
    <div v-if="extra.images.length" class="images">
      <img
        v-for="(image, index) in extra.images"
        :key="index"
        :src="$resizeImage(image, { height: 150, rule: 0 })"
      >
      <div class="total">
        {{ extra.images.length }} 张
      </div>
    </div>
    <div class="footer">
      <div v-if="words_1.length">
        <span class="sub_title">一级敏感词命中：</span>
        <VButton
          v-for="words in words_1"
          :key="words"
          size="small"
          plain
          theme="warning"
          @click="deleteWords(words, 1)"
          v-text="words"
        />
      </div>
      <div v-if="words_2.length">
        <span class="sub_title">二级敏感词命中：</span>
        <VButton
          v-for="words in words_2"
          :key="words"
          size="small"
          plain
          theme="danger"
          @click="deleteWords(words, 2)"
          v-text="words"
        />
      </div>
    </div>
    <div class="control">
      <VButton :loading="loading" block size="small" theme="info" @click="handleDelete">
        删除
      </VButton>
      <VButton :loading="loading" block size="small" @click="handlePass">
        通过
      </VButton>
    </div>
  </div>
</template>

<script>
import { VButton } from '@calibur/sakura'

export default {
  name: 'TrialPinItem',
  components: {
    VButton
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    extra: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      words_1: [...this.extra.filter.words_1],
      words_2: [...this.extra.filter.words_2],
      loading: false
    }
  },
  mounted() {
    this.$channel.$on('delete-words', (data) => {
      this[`words_${data.level}`].forEach((words, index) => {
        if (words === data.words) {
          this[`words_${data.level}`].splice(index, 1)
        }
      })
    })
  },
  methods: {
    deleteWords(words, level) {
      this.$alert({
        title: '确认要删除吗？',
        message: `${level}级敏感词：${words}`,
        buttons: ['取消', '确认'],
        callback: (index) => {
          if (!index) {
            return
          }
          this.$axios.$post('v1/console/trial/words/delete', {
            filename: `words_level_${level}`,
            words: [words]
          })
            .then(() => {
              this.$channel.$emit('delete-words', { level, words })
            })
            .catch((err) => {
              this.$toast.info(err.message)
            })
        }
      })
    },
    clickUser() {
      this.$bridge.navigateTo({
        url: `/pages/user/show/index?slug=${this.item.author.slug}`
      })
    },
    clickBangumi() {
      this.$bridge.navigateTo({
        url: `/pages/bangumi/show/index?slug=${this.item.bangumi.slug}`
      })
    },
    handleDelete() {
      if (this.loading) {
        return
      }
      this.$alert({
        title: '确认要删帖吗？',
        buttons: ['取消', '确认'],
        callback: (index) => {
          if (!index) {
            return
          }
          this.loading = true
          this.$axios.$post('v1/pin/delete', {
            slug: this.item.slug
          })
            .then(() => {
              this.$emit('delete', this.item.slug)
              this.$toast.info('删除成功')
            })
            .catch((err) => {
              this.loading = false
              this.$toast.error(err.message)
            })
        }
      })
    },
    handlePass() {
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios.$post('v1/pin/pass', {
        slug: this.item.slug
      })
        .then(() => {
          this.$emit('delete', this.item.slug)
          this.$toast.info('通过成功')
        })
        .catch((err) => {
          this.loading = false
          this.$toast.error(err.message)
        })
    }
  }
}
</script>
