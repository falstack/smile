<style lang="scss" module>
.h2 {
  padding-bottom: 10px;
  padding-top: 1.5em;
}
</style>

<script>
export default {
  name: 'JsonHeader',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  render(h) {
    return h('h2', {
      class: this.$style.h2,
      domProps: {
        innerHTML: this.item.data.text
      }
    })
  }
}
</script>
