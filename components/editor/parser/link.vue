<style lang="scss" module>
.link {
  padding: 0.7em 0;

  .a {
    display: block;
    background-color: #fff;
    border: 1px solid rgba(201, 201, 204, 0.48);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 25px;

    &:hover {
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
    }
  }

  .content {
    overflow: hidden;

    h3 {
      font-size: 17px;
      font-weight: 600;
      line-height: 1.5em;
      margin: 0 0 10px 0;
    }

    p {
      margin: 0 0 20px 0;
      font-size: 15px;
      @include multi-line(23px, 3);
    }

    span {
      font-size: 15px;
      line-height: 1em;
      color: $color-text-3;
    }
  }

  .logo {
    float: right;
    width: 65px;
    height: 65px;
    border-radius: 3px;
    margin-left: 30px;
    object-fit: cover;
  }
}
</style>

<template>
  <div :class="$style.link">
    <div v-copy="item.data.link" v-copy:callback="handleCopySuccess" :class="$style.a">
      <img v-if="item.data.meta.image && item.data.meta.image.url" :class="$style.logo" :src="item.data.meta.image.url" width="65" height="65">
      <div :class="$style.content">
        <h3 v-text="item.data.meta.title" />
        <p v-text="item.data.meta.description" />
        <span v-text="item.data.link.replace(/https?:\/\//, '')" />
      </div>
    </div>
  </div>
</template>

<script>
import { copy } from 'v-copy'

export default {
  name: 'JsonLink',
  directives: {
    copy
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleCopySuccess() {
      this.$toast.info('链接已复制到剪切板')
    }
  }
}
</script>
