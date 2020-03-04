<style lang="scss">
#write-pin {
  .title-wrap {
    position: relative;

    &:after {
      content: '';
      position: absolute;
      left: 12px;
      right: 12px;
      height: 1px;
      background-color: $color-gray-border;
    }
  }

  .editor-wrap {
    border-bottom: 1px solid $color-gray-border;
  }

  .info-wrap {
    position: relative;
    padding: 0 $page-padding;
    z-index: 1;

    .info-title {
      padding: $page-padding 0;
    }
  }

  .footer-wrap {
    height: 50px + $page-padding;
    box-sizing: content-box;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);

    .footer {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      height: 50px;
      border-top: 1px solid $color-gray-3;
      background-color: #fff;
      z-index: 1;
      box-sizing: content-box;
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);

      .v-button {
        flex: 1;
        margin: 0 $page-padding / 2;

        &:first-child {
          margin-left: $page-padding;
        }

        &:last-child {
          margin-right: $page-padding;
        }
      }
    }
  }

  .preload-wrap {
    display: none;
  }
}
</style>

<template>
  <div id="write-pin">
    <div class="title-wrap">
      <VField
        v-model="title.text"
        :min-row="1"
        :max-row="2"
        :max-len="40"
        counter
        placeholder="标题（建议30字以内）"
      />
    </div>
    <Editor v-if="renderEditor" v-model="content" :slug="slug" @save="onEditorSave" />
    <div v-if="selectedBangumi" class="info-wrap">
      <p class="info-title">
        请选择投稿分区
      </p>
      <VButton plain @click="toggleBangumiDrawer = true" v-text="selectedBangumi.name" />
    </div>
    <div class="footer-wrap">
      <div class="footer">
        <template v-if="published_at">
          <VButton :loading="loading" @click="actionUpdate(true)">
            更新文章
          </VButton>
        </template>
        <template v-else>
          <VButton :loading="loading" @click="actionCreate(true)">
            发布文章
          </VButton>
          <VButton v-if="slug" :loading="loading" theme="info" plain @click="actionUpdate(false)">
            存草稿
          </VButton>
          <VButton v-else :loading="loading" theme="info" plain @click="actionCreate(false)">
            存草稿
          </VButton>
        </template>
        <VButton v-if="draftSource.total" plain @click="toggleDraftDrawer = true">
          草稿箱({{ draftSource.total }})
        </VButton>
      </div>
    </div>
    <div class="preload-wrap">
      <FlowLoader
        ref="draftLoader"
        func="getUserDrafts"
        type="page"
        :auto="0"
        :query="{ $axios: $axios }"
      />
      <FlowLoader
        v-if="isAuth"
        ref="areaLoader"
        func="getUserBangumi"
        type="page"
        :auto="0"
        :query="{ $axios: $axios, slug: currentUser.slug }"
      />
    </div>
    <VDrawer v-model="toggleDraftDrawer">
      <FlowLoader
        func="getUserDrafts"
        type="page"
        :query="{ $axios: $axios }"
      >
        <div slot-scope="{ flow }">
          <PinDraftItem
            v-for="item in flow"
            :key="item.slug"
            :item="item"
            @click="switchDraft(item.slug)"
          />
        </div>
      </FlowLoader>
    </VDrawer>
    <VDrawer v-model="toggleBangumiDrawer">
      <FlowLoader
        func="getUserBangumi"
        type="page"
        :auto="0"
        :query="{ $axios: $axios, slug: currentUser.slug, from: 'create' }"
      >
        <div slot-scope="{ flow }">
          <BangumiOptionItem
            v-for="item in flow"
            :key="item.slug"
            :item="item"
            :selected-slug="bangumi_slug"
            type="select"
            @click="switchBangumi(item)"
          />
        </div>
      </FlowLoader>
    </VDrawer>
  </div>
</template>

<script>
import { VField, VButton, VDrawer } from '@calibur/sakura'
import Editor from '~/components/editor'
import upload from '~/mixins/upload'
import mustSign from '~/mixins/mustSign'
import PinDraftItem from '~/components/PinDraftItem'
import BangumiOptionItem from '~/components/BangumiOptionItem'

export default {
  name: 'WritePin',
  components: {
    VField,
    VButton,
    Editor,
    VDrawer,
    PinDraftItem,
    BangumiOptionItem
  },
  mixins: [mustSign, upload],
  asyncData({ app, error, query }) {
    const slug = query.slug
    if (!slug) {
      return
    }
    return app.$axios
      .$get('v1/pin/update/content', {
        params: { slug }
      })
      .then((data) => {
        return {
          ...data
        }
      })
      .catch(error)
  },
  data() {
    return {
      slug: '',
      title: {
        banner: null,
        text: ''
      },
      content: [],
      bangumi_slug: '',
      last_edit_at: '',
      published_at: '',
      selectedBangumi: null,
      loading: false,
      renderEditor: true,
      toggleDraftDrawer: false,
      toggleBangumiDrawer: false
    }
  },
  computed: {
    draftSource() {
      return this.$store.getters['flow/getFlow']({
        func: 'getUserDrafts',
        type: 'page'
      }) || {}
    },
    bangumiSource() {
      return this.$store.getters['flow/getFlow']({
        func: 'getUserBangumi',
        type: 'page',
        query: {
          slug: this.currentUser.slug
        }
      }) || {}
    }
  },
  mounted() {
    this.initCache()
    this.initUserDraft()
    this.initUserBangumi()
  },
  methods: {
    initCache() {
      if (this.slug) {
        return
      }
      if (this.$cache.has('editor_local_draft_title')) {
        this.title = this.$cache.get('editor_local_draft_title')
      }
      if (this.$cache.has('editor_local_draft_bangumi')) {
        this.selectedBangumi = this.$cache.get('editor_local_draft_bangumi')
        if (this.selectedBangumi) {
          this.bangumi_slug = this.selectedBangumi.slug
        }
      }
    },
    initUserDraft() {
      if (!this.$refs.draftLoader) {
        return
      }
      this.$refs.draftLoader.initData()
    },
    initUserBangumi() {
      this.$channel.$when('user-signed', async() => {
        if (!this.$refs.areaLoader) {
          return
        }
        await this.$refs.areaLoader.initData()
        if (this.bangumi_slug) {
          this.selectedBangumi = this.bangumiSource.result.find(_ => _.slug === this.bangumi_slug)
        } else {
          this.selectedBangumi = this.bangumiSource.result[0]
        }
        this.bangumi_slug = this.selectedBangumi.slug
      })
    },
    onEditorSave() {
      this.saveTitle()
      this.saveBangumi()
    },
    saveTitle() {
      if (this.slug) {
        return
      }
      this.$cache.set('editor_local_draft_title', this.title)
    },
    preValidate() {
      if (this.loading) {
        return true
      }
      if (!this.title.text) {
        this.$toast.info('标题不能为空')
        return true
      }
      if (!this.content.length) {
        this.$toast.info('内容不能为空')
        return true
      }
      this.loading = true
      return false
    },
    actionCreate(publish) {
      if (this.preValidate()) {
        return
      }

      this.$axios
        .$post('v1/pin/create/story', {
          bangumi_slug: this.bangumi_slug,
          content: [{ type: 'title', data: this.title }].concat(this.content),
          publish
        })
        .then((slug) => {
          this.removeCache()
          if (publish) {
            this.$bridge.redirectTo({
              url: `/pages/pin/show/index?slug=${slug}`
            })
          } else {
            this.switchDraft(slug)
          }
          this.loading = false
        })
        .catch((err) => {
          this.$toast.error(err.message)
          this.loading = false
        })
    },
    actionUpdate(publish) {
      if (this.preValidate()) {
        return
      }

      this.$axios
        .$post('v1/pin/update/story', {
          slug: this.slug,
          bangumi_slug: this.bangumi_slug,
          content: [{ type: 'title', data: this.title }].concat(this.content),
          publish
        })
        .then((slug) => {
          if (publish) {
            this.$bridge.redirectTo({
              url: `/pages/pin/show/index?slug=${slug}`
            })
          }
          this.loading = false
        })
        .catch((err) => {
          this.$toast.error(err.message)
          this.loading = false
        })
    },
    removeCache() {
      this.$cache.del('editor_local_draft_title')
      this.$cache.del('editor_local_draft_bangumi')
      this.$cache.del('editor_local_draft')
    },
    clearPageData() {
      this.renderEditor = false
      this.slug = ''
      this.title = {
        banner: null,
        text: ''
      }
      this.bangumi_slug = ''
      this.last_edit_at = ''
      this.published_at = ''
      this.content = []
      this.toggleDraftDrawer = false
      this.selectedBangumi = this.bangumiSource.result[0]
      this.$nextTick(() => {
        this.renderEditor = true
      })
    },
    updatePageData(data) {
      this.renderEditor = false
      this.slug = data.slug
      this.title = data.title
      this.last_edit_at = data.last_edit_at
      this.published_at = data.published_at
      this.bangumi_slug = data.bangumi_slug
      this.content = data.content
      this.toggleDraftDrawer = false
      if (this.bangumi_slug) {
        this.selectedBangumi = this.bangumiSource.find(_ => _.slug === this.bangumi_slug)
      } else {
        this.selectedBangumi = this.bangumiSource.result[0]
      }
      this.$nextTick(() => {
        this.renderEditor = true
      })
    },
    switchBangumi(item) {
      this.toggleBangumiDrawer = false
      this.selectedBangumi = item
      this.bangumi_slug = item.slug
      this.saveBangumi()
    },
    saveBangumi() {
      this.$cache.set('editor_local_draft_bangumi', this.selectedBangumi)
    },
    switchDraft(slug, conformed = false) {
      if (this.slug) {
        // 已发布的文章提醒更新
        if (this.published_at) {
          // 如果已确认过了，就跳过
          if (!conformed) {
            this.$alert({
              title: '未对本次更改做保存',
              message: '切换后会丢失更新的内容，确认吗？',
              buttons: ['取消', '确认'],
              callback: (index) => {
                if (index) {
                  this.switchDraft(slug, true)
                }
              }
            })
            return
          }
        } else {
          // 未发布的文章，自动存草稿
          this.actionUpdate(false)
        }
      }
      // 路由切换
      this.$router.replace({
        name: this.$route.name,
        query: {
          ...this.$route.query,
          slug
        }
      })
      if (!slug) {
        this.clearPageData()
        return
      }
      this.$axios
        .$get('v1/pin/update/content', {
          params: { slug }
        })
        .then((data) => {
          this.updatePageData(data)
        })
        .catch((err) => {
          this.$toast.info(err.message)
        })
    }
  },
  head() {
    return {
      title: '投稿'
    }
  }
}
</script>
