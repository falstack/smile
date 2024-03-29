<style lang="scss">
#write-pin {
  .v-uploader {
    position: relative;
    width: 100vw;
    height: 56vw;
    overflow: hidden;

    &__action {
      width: 100%;
      height: 100%;
      background-color: #fafbfd;

      &__wrap {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #99a2aa;
        user-select: none;
      }
    }

    .banner {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
      z-index: 1;
    }

    .delete {
      position: absolute;
      right: $page-padding;
      bottom: $page-padding;
      z-index: 2;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      padding: 4px 6px;
      font-size: 12px;
      border-radius: 5px;
    }
  }

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

      .v-btn {
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
    <VUploader
      ref="uploader"
      v-model="title.banner"
      :cookie="false"
      :url="imageUploadAction"
      :accept="imageUploadAccept"
      :transform-request="imageUploadRequest"
      :transform-response="imageUploadResponse"
      @change="saveTitle"
    >
      <template slot="list" slot-scope="{ list }">
        <img v-if="list.length" class="banner" :src="$resizeImage(list[0].url, { width: 400, height: 244 })">
        <div v-if="list.length" class="delete" @click="handleDeleteBanner">
          删除封面
        </div>
      </template>
      <template slot="action">
        <div>请添加封面图（选填）</div>
        <p>支持8MB内的JPG／JPEG／PNG格式的高清图片</p>
        <p>（建议大于960*540像素）</p>
      </template>
    </VUploader>
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
        :query="{ $axios: $axios, slug: currentUser.slug, from: 'create' }"
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
import { VField, VButton, VDrawer, VUploader } from '@calibur/sakura'
import qs from 'qs'
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
    VUploader,
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
          slug: this.currentUser.slug,
          from: 'create'
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
        this.title.banner = this.title.banner && this.title.banner.url ? this.title.banner : null
        if (this.title.banner) {
          this.$refs.uploader && this.$refs.uploader.set(this.title.banner)
        }
      }
      if (this.$cache.has('editor_local_draft_bangumi')) {
        this.selectedBangumi = this.$cache.get('editor_local_draft_bangumi')
        if (this.selectedBangumi) {
          this.bangumi_slug = this.selectedBangumi.slug
        }
      }
    },
    handleDeleteBanner() {
      this.title.banner = null
      this.$refs.uploader && this.$refs.uploader.set(this.title.banner)
      this.saveTitle()
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
            if (this.$bridge.__IN_APP__) {
              this.$bridge.redirectTo({
                url: `/pages/pin/show/index?slug=${slug}`
              })
            } else {
              window.location = `/pin/${slug}`
            }
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
            if (this.$bridge.__IN_APP__) {
              this.$bridge.redirectTo({
                url: `/pages/pin/show/index?slug=${slug}`
              })
            } else {
              window.location = `/pin/${slug}`
            }
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
        } else if (this.preValidate()) {
          // 未发布的文章，自动存草稿
          this.actionUpdate(false)
        }
      }
      if (!slug) {
        this.clearPageData()
        return
      }
      window.location.href = window.location.pathname + '?' + qs.stringify({
        ...this.$route.query,
        slug
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
