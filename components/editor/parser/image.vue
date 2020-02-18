<style lang="scss" module>
.image {
  padding: 0.7em 0;
  text-align: center;

  picture {
    margin: 0 auto;
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
  <div :class="$style.image">
    <VImg :src="item.data.file.url" :stretched="item.data.stretched" :width="item.data.file.width" :height="item.data.file.height" />
    <p v-if="item.data.caption" v-text="item.data.caption" />
  </div>
</template>

<script>
import VImg from '~/components/Image'

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
