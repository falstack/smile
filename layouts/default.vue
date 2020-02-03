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
        this.$bridge.switchTab({
          url: '/pages/user/home/index'
        })
      })
    }
  }
}
</script>
