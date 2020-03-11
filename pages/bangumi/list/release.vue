<style lang="scss">
#bangumi-release {
  .flow-loader,
  .v-switcher {
    height: 100%;
  }

  .no-content {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

<template>
  <div id="bangumi-release">
    <FlowLoader
      func="getBangumiRelease"
      type="page"
      :query="{ $axios }"
    >
      <template slot-scope="{ flow }">
        <VSwitcher :default-index="defaultIndex" :headers="headers">
          <div v-for="(item, index) in headers" :key="index" :slot="index">
            <template v-if="flow[index] && flow[index].length">
              <BangumiOptionItem
                v-for="bangumi in flow[index]"
                :key="bangumi.slug"
                :item="bangumi"
                @click="handleClick(bangumi)"
              />
            </template>
            <div v-else class="no-content">
              <img src="~/assets/img/error/no-content.png">
            </div>
          </div>
        </VSwitcher>
      </template>
    </FlowLoader>
  </div>
</template>

<script>
import { VSwitcher } from '@calibur/sakura'
import BangumiOptionItem from '~/components/BangumiOptionItem'

export default {
  name: 'BangumiRelease',
  components: {
    VSwitcher,
    BangumiOptionItem
  },
  computed: {
    headers() {
      return ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    defaultIndex() {
      const week = new Date().getDay()
      return (week || 7) - 1
    }
  },
  methods: {
    handleClick(bangumi) {
      this.$bridge.navigateTo({
        url: `/pages/bangumi/show/index?slug=${bangumi.slug}`
      })
    }
  }
}
</script>
