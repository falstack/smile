<template>
  <nuxt />
</template>

<script>
import useSignMixin from '~/mixins/useSign'

export default {
  name: 'Layout',
  mixins: [useSignMixin]
}
</script>
