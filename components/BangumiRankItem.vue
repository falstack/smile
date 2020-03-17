<style lang="scss">
.bangumi-rank-item {
  padding: $page-padding;

  &:not(:last-child) {
    border-bottom: $page-padding solid $color-gray-bg;
  }

  .head {
    margin-bottom: 10px;

    .rank {
      display: inline-block;
      padding: 5px;
      border-radius: 5px;
      background-color: $color-main-light;
      font-size: 12px;
      color: #fff;
    }
  }

  .body {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 120px;

    .poster {
      width: 90px;
      height: 100%;
      border-radius: 5px;
      margin-right: 10px;
      border: 1px solid $color-gray-border;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      flex: 1;
      overflow: hidden;

      .title {
        font-weight: bold;
        margin-bottom: 5px;
      }

      .tags {
        height: 20px;
        font-size: 0;
        overflow: hidden;

        .tag {
          display: inline-block;
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          padding: 0 2px;
          background-color: rgba($color-main-light, 0.5);
          border-radius: 5px;
          color: #fff;
          margin-right: 2px;
        }
      }
    }

    .star {
      height: 100%;
      line-height: 120px;
      padding-left: 10px;
      margin-left: 10px;
      border-left: 1px dashed $color-gray-border;
    }
  }
}
</style>

<template>
  <div class="bangumi-rank-item" @click="handleClick">
    <div class="head">
      <span class="rank" v-text="`No.${item.rank}`" />
    </div>
    <div class="body">
      <div class="poster">
        <img :src="$resizeImage(item.avatar, { width: 180, height: 240 })">
      </div>
      <div class="content">
        <p class="title oneline" v-text="item.name" />
        <div class="tags">
          <span v-for="tag in item.tags" :key="tag.slug" class="tag" v-text="tag.name" />
        </div>
      </div>
      <div class="star">
        star
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BangumiRankItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$bridge.navigateTo({
        url: `/pages/bangumi/show/index?slug=${this.item.slug}`
      })
    }
  }
}
</script>
