<style lang="scss">
#public-rank {
  padding: 15px;

  .panel-item {
    display: block;
    width: 100%;
    height: 100px;
    border-radius: 5px;
    line-height: 100px;
    text-align: center;
    background-color: $color-main-light;
    color: #fff;
  }
}
</style>

<template>
  <div id="public-rank">
    <a href="/bangumi/top250" class="panel-item">
      全年代日本动画Top250
    </a>
  </div>
</template>

<script>
export default {
  name: 'PublicRank',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {},
  head: {
    title: '榜单'
  }
}
</script>
