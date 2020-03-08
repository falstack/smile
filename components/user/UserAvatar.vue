<style lang="scss">
.user-avatar {
  width: 30px;
  height: 30px;

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
  <div class="user-avatar" @click="handleClick">
    <img class="avatar" :src="$resize(user.avatar, { width: 30 })">
  </div>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
