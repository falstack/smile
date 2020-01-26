<template>
  <nuxt />
</template>

<script>
import useSignMixin from '~/mixins/useSign'

export default {
  name: 'Layout',
  mixins: [useSignMixin],
  beforeMounted() {
    document.addEventListener('touchstart', function() {}, false)
  }
}
</script>
