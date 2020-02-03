<style lang="scss">
.user-nickname {
  max-width: 100%;

  .name {
    overflow: hidden;
    vertical-align: middle;
    line-height: 16px;
  }
}
</style>

<style lang="scss" module>
.ic-sex {
  display: block;
  margin-left: 5px;
  float: right;

  i {
    width: 16px;
    height: 16px;
    display: block;
    font-size: 12px;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 16px;
    font-weight: bold;
  }
}

.ic-level {
  float: right;
  display: block;
  background-color: $color-orange;
  color: #fff;
  padding: 0 5px;
  border-radius: 4px;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  margin-left: 5px;
}

.ic-title {
  float: right;
  display: block;
  background-color: $color-main;
  color: #fff;
  padding: 0 5px;
  border-radius: 4px;
  font-size: 12px;
  height: 16px;
  line-height: 16px;
  margin-left: 5px;
}
</style>

<template>
  <div class="user-nickname" @click="handleClick">
    <template v-if="showTitle">
      <span v-for="(item, index) in user.title" :key="index" :class="[$style.title, $style['ic-title']]" v-text="item" />
    </template>
    <span :class="[$style.title, $style['ic-level']]" v-text="`Lv${user.level2}`" />
    <span v-if="showSex" :class="$style['ic-sex']">
      <i class="iconfont" :class="`ic-${sexClass.name}`" :style="{ backgroundColor: sexClass.color }" />
    </span>
    <div class="name">
      <p class="oneline" v-html="user.nickname" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserNickname',
  props: {
    user: {
      type: Object,
      required: true
    },
    showSex: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sexClass() {
      switch (this.user.sex) {
        case -1:
          return {
            name: 'simi',
            color: 'limegreen'
          }
        case 0:
          return {
            name: 'unknown',
            color: 'gold'
          }
        case 1:
          return {
            name: 'nan',
            color: 'deepskyblue'
          }
        case 2:
          return {
            name: 'nv',
            color: 'hotpink'
          }
        default:
          return {
            name: 'unknown',
            color: 'gold'
          }
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
