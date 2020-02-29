<style lang="scss">
.move-pin-drawer {
  .v-drawer__wrap {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .header,
  .footer {
    width: 100%;
    flex-shrink: 0;
  }

  .main {
    flex: 1;
    width: 100%;
    overflow: hidden;

    .flow-loader {
      height: 100%;
      overflow: auto;
    }
  }

  .footer {
    border-top: 1px solid $color-gray-3;
    padding: $page-padding;

    @include iPhoneX() {
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
    }
  }
}
</style>

<template>
  <VDrawer
    v-model="showDrawer"
    :lock="false"
    from="right"
    size="100%"
    class="move-pin-drawer"
  >
    <VSearch
      v-model="searchKeyword"
      class="header"
      show-border
      placeholder="请输入番剧名称"
      @submit="handleSearch"
      @cancel="handleCancel"
    />
    <div class="main">
      <FlowLoader
        v-if="showFlowList"
        func="getMixinSearch"
        type="page"
        :query="{
          $axios,
          type: 'bangumi',
          q: flowKeyword
        }"
      >
        <div slot-scope="{ flow }">
          <BangumiOptionItem
            v-for="item in flow"
            :key="item.slug"
            :item="item"
            :selected-slug="selectedBangumi"
            type="select"
            @click="handleSelect(item)"
          />
        </div>
      </FlowLoader>
    </div>
    <div class="footer">
      <VButton :loading="loading" block @click="handleSubmit">
        提交
      </VButton>
    </div>
  </VDrawer>
</template>

<script>
import { VSearch, VDrawer, VButton } from '@calibur/sakura'
import BangumiOptionItem from '~/components/BangumiOptionItem'

export default {
  name: 'MovePinBangumiDrawer',
  components: {
    VButton,
    VDrawer,
    VSearch,
    BangumiOptionItem
  },
  props: {
    value: {
      type: Boolean,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    bangumi: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showDrawer: this.value,
      searchKeyword: '',
      flowKeyword: '',
      showFlowList: false,
      selectedBangumi: this.bangumi,
      loading: false
    }
  },
  watch: {
    showDrawer(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.showDrawer = val
    }
  },
  methods: {
    handleSearch() {
      this.showFlowList = false
      this.$nextTick(() => {
        this.flowKeyword = this.searchKeyword
        this.showFlowList = true
      })
    },
    handleSelect(bangumi) {
      this.selectedBangumi = bangumi.slug
    },
    handleCancel() {
      this.showDrawer = false
      this.showFlowList = false
      this.searchKeyword = ''
      this.flowKeyword = ''
    },
    handleSubmit() {
      if (!this.selectedBangumi || this.selectedBangumi === this.bangumi) {
        return
      }
      this.$alert({
        title: '确认要移动吗？',
        message: '建议不要频繁进行该操作',
        buttons: ['取消', '确认'],
        callback: (index) => {
          if (!index) {
            return
          }
          if (this.loading) {
            return
          }
          this.loading = false
          this.$axios.$post('v1/pin/move', {
            slug: this.slug,
            bangumi: this.selectedBangumi
          })
            .then(() => {
              this.$toast.info('移动成功')
              window.location.reload()
            })
            .catch((err) => {
              this.$toast.error(err.message)
              this.loading = false
            })
        }
      })
    }
  }
}
</script>
