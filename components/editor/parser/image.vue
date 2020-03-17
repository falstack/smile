<style lang="scss" module>
.image {
  padding: 0.7em 0;
  text-align: center;

  .wrap {
    position: relative;
    width: 100%;
    height: 0;

    :global(.v-img) {
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  p {
    min-width: 115px;
    max-width: 80%;
    min-height: 22px;
    padding: 10px;
    border-bottom: 1px solid $color-gray-line;
    font-size: 14px;
    color: #969696;
    line-height: 1.7;
    text-align: center;
    display: inline-block;
    @extend %breakWord;
  }
}
</style>

<template>
  <div v-if="item.data" :class="$style.image">
    <div v-if="item.data.file" :class="$style.wrap" :style="{ paddingTop: `${parseFloat(item.data.file.height / item.data.file.width * 100).toFixed(2)}%` }">
      <VImg
        :src="item.data.file.url"
        :width="400"
        :height="parseFloat(item.data.file.height / item.data.file.width * 400).toFixed(2)"
        lazy
      />
    </div>
    <p v-if="item.data.caption" v-text="item.data.caption" />
  </div>
</template>

<script>
import { VImg } from '@calibur/sakura'

export default {
  name: 'JsonImage',
  components: {
    VImg
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
