<style lang="scss" module>
.bangumi-option {
  padding: $page-padding $page-padding 0;

  &:not(:last-child) {
    .body {
      border-bottom: 1px solid $color-gray-border;
    }
  }

  .poster {
    float: left;
    width: 60px;
    height: 60px;
    margin-right: $page-padding;
    border-radius: 5px;
  }

  .body {
    overflow: hidden;
    height: 60px + $page-padding;
    padding-bottom: $page-padding;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .content {
      flex: 1;
      overflow: hidden;
    }

    .extra {
      margin-left: $page-padding;
    }
  }
}
</style>

<template>
  <div :class="$style.bangumiOption" @click="handleClick">
    <img :class="$style.poster" :src="$resize(item.avatar, { width: 120, height: 120 })">
    <div :class="$style.body">
      <div :class="$style.content">
        <div :class="$style.title" class="oneline" v-text="item.name" />
      </div>
      <div :class="$style.extra">
        <VRadio v-if="type === 'select'" v-model="isSelected" text="" circle readonly />
      </div>
    </div>
  </div>
</template>

<script>
import { VRadio } from '@calibur/sakura'

export default {
  name: 'BangumiOptionItem',
  components: {
    VRadio
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: 'follow'
    },
    selectedSlug: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isSelected: this.item.slug === this.selectedSlug
    }
  },
  methods: {
    handleClick() {
      if (this.type === 'select') {
        this.$emit('click')
      }
    }
  }
}
</script>
