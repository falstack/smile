<template>
  <nuxt />
</template>

<script>
import useSignMixin from '~/mixins/useSign'

export default {
  name: 'Layout',
  mixins: [useSignMixin],
  mounted() {
    this.activeIOSClick()
    this.handleUserLogin()
  },
  methods: {
    activeIOSClick() {
      document.addEventListener('touchstart', function() {}, false)
    },
    handleUserLogin() {
      this.$channel.$on('sign-in', () => {
        if (this.$bridge.__IN_APP__) {
          this.$bridge.switchTab({
            url: '/pages/user/home/index'
          })
        } else {
          this.$router.replace({
            name: 'user-sign',
            query: {
              from: encodeURIComponent(window.location.origin + window.location.pathname)
            }
          })
        }
      })
    }
  }
}
</script>
