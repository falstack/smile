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
        <img :src="$resizeImage(item.author.avatar, { width: 40 })">
        <div class="name">
          <p class="nickname oneline" v-html="item.author.nickname" />
          <p class="bangumi oneline" v-html="item.bangumi.name" />
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
      <div v-if="extra.filter.words_1.length">
        <span class="sub_title">一级敏感词命中：</span>
        <VButton
          v-for="words in extra.filter.words_1"
          :key="words"
          size="small"
          plain
          theme="warning"
          v-text="words"
        />
      </div>
      <div v-if="extra.filter.words_2.length">
        <span class="sub_title">二级敏感词命中：</span>
        <VButton
          v-for="words in extra.filter.words_2"
          :key="words"
          size="small"
          plain
          theme="danger"
          v-text="words"
        />
      </div>
    </div>
    <div class="control">
      <VButton block size="small" theme="info">
        删除
      </VButton>
      <VButton block size="small">
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
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
