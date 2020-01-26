<template>
  <VButton @click="handleClick">
    CALIBUR.TV
  </VButton>
</template>

<script>
import { VButton } from '@calibur/sakura'

export default {
  components: {
    VButton
  },
  beforeMounted() {
    document.body.addEventListener('touchstart', () => {})
  },
  methods: {
    handleClick() {
      this.$toast.info('2333')
    }
  }
}
</script>
