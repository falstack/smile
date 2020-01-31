<style lang="scss" module>
.pin-draft {
  padding: $page-padding;

  &:not(:first-child) {
    border-top: 1px solid $color-gray-border;
  }

  .poster {
    height: 75px;
    width: 100px;
    border-radius: 5px;
    margin-right: $page-padding;
    float: left;
  }

  .default-poster {
    filter: grayscale(100%);
    opacity: 0.3;
  }

  .body {
    height: 75px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .title {
    color: $color-text-2;
  }
}
</style>

<template>
  <div :class="$style.pinDraft" @click="handleClick">
    <img :class="[$style.poster, { [$style.defaultPoster]: noPoster }]" :src="$resize(noPoster ? 'default-poster' : item.title.banner.url, { width: 200, height: 150 })">
    <div :class="$style.body">
      <p :class="$style.title" class="oneline" v-text="item.title.text" />
      <p :class="$style.time" v-text="$utils.timeAgo(item.last_edit_at)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PinDraftItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    noPoster() {
      return !this.item.title.banner
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
