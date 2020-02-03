<style lang="scss">
.user-avatar {
  .avatar {
    display: block;
    box-shadow: 0 0 0 1px #edf2f9;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>

<template>
  <div :style="{ width: `${size}px`, height: `${size}px` }" class="user-avatar" @click="handleClick">
    <img class="avatar" :src="$resize(user.avatar, { width: size })">
  </div>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    user: {
      type: Object,
      required: true
    },
    size: {
      type: Number,
      default: 30
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
