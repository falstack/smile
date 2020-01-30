export default {
  beforeMount() {
    this.$channel.$when('user-not-sign', () => {
      this.$toast.error('继续操作前请先登录').then(() => {
        this.$bridge.redirectTo({
          url: `/pages/user/login/index?from=${encodeURIComponent(window.location.href)}`
        })
      })
    })
  }
}
