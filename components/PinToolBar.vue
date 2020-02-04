<style lang="scss">
.pin-tool-bar {

  .pin-tool-wrap,
  .pin-tool-shim {
    height: 50px;
    box-sizing: content-box;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }

  .pin-tool-wrap {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 10;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: $color-gray-border;
      transform: scaleY(0.5);
    }
  }

  .pin-tool-core {
    padding: $page-padding;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .comment {
      flex: 1;
      background-color: #F4F4F4;
      height: 30px;
      border-radius: 15px;
      color: #999999;
      font-size: 13px;
      padding-left: 15px;
      line-height: 30px;
    }

    .tool-item {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 30px;
      margin-left: $page-padding;
      padding-left: $page-padding / 2;
      padding-right: $page-padding / 2;
      font-size: 12px;
    }
  }
}
</style>

<template>
  <div class="pin-tool-bar">
    <div class="pin-tool-shim" />
    <div class="pin-tool-wrap">
      <div class="pin-tool-core">
        <div class="comment" @click="handleCommentClick">
          <span>说点什么</span>
        </div>
        <div class="tool-item" @click="pageScroll">
          <i class="iconfont ic-message" />
          <p v-text="commentCount || '评论'" />
        </div>
        <div class="tool-item">
          <i class="iconfont ic-message" />
          <p v-text="rewardCount || '投食'" />
        </div>
        <div class="tool-item">
          <i class="iconfont ic-message" />
          <p v-text="markCount || '收藏'" />
        </div>
        <div class="tool-item">
          <i class="iconfont ic-good" />
          <p v-text="likeCount || '点赞'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VScrolly } from '@calibur/sakura'

export default {
  name: 'PinToolBar',
  components: {},
  props: {
    commentCount: {
      type: Number,
      default: 0
    },
    likeCount: {
      type: Number,
      default: 0
    },
    markCount: {
      type: Number,
      default: 0
    },
    rewardCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleCommentClick() {
      this.$emit('comment')
    },
    pageScroll() {
      VScrolly(document.querySelector('.comment-main').offsetTop - 40, window, 2000)
    }
  }
}
</script>
