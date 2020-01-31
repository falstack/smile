<style lang="scss">
#write-pin {
  position: relative;
  min-height: 100vh;
  padding-bottom: 50px + $page-padding;
  @include iPhoneX() {
    padding-bottom: 70px + $page-padding;
  }

  .banner {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56%;

    .v-uploader {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #fafbfd;
      z-index: 0;

      &__action {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: $color-text-4;
        font-size: 20px;
      }
    }

    .image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .delete {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: 2;
      padding: 5px 8px;
      background-color: rgba(#000, 0.5);
      color: #fff;
      font-size: 12px;
    }
  }

  .title {
    border-bottom: 1px solid $color-gray-3;
  }

  .footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 50px;
    border-top: 1px solid $color-gray-3;
    z-index: 1;

    @include iPhoneX() {
      height: 70px;
      padding-bottom: 20px;
    }

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

  .draft-preload {
    display: none;
  }
}
</style>

<template>
  <div id="write-pin">
    <div class="banner">
      <VUploader
        ref="uploader"
        :cookie="false"
        :url="imageUploadAction"
        :accept="imageUploadAccept"
        :transform-request="imageUploadRequest"
        :transform-response="imageUploadResponse"
        @change="handleUploaderChange"
      >
        <template #action>
          点击上传封面
        </template>
        <template #list>
          <span />
        </template>
      </VUploader>
      <template v-if="title && title.banner">
        <div class="image" :style="{ backgroundImage: `url(${$resize(title.banner.url, { width: 660 })}` }" />
        <div class="delete" @click="deleteBanner">
          删除
        </div>
      </template>
    </div>
    <div class="title">
      <VField
        v-model="title.text"
        :min-row="1"
        :max-row="2"
        :max-len="40"
        counter
        placeholder="标题（建议30字以内）"
      />
    </div>
    <Editor v-if="renderEditor" v-model="content" :slug="slug" :time="last_edit_at" @save="onEditorSave" />
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
      <VButton v-if="draftSource.total" plain @click="toggleDraftDrawer = !toggleDraftDrawer">
        草稿箱({{ draftSource.total }})
      </VButton>
      <VDrawer v-model="toggleDraftDrawer">
        <FlowLoader
          func="getUserDrafts"
          type="page"
          :query="{
            $axios: $axios
          }"
        >
          <template slot-scope="{ flow }">
            <PinDraftItem v-for="item in flow" :key="item.slug" :item="item" @click="switchDraft(item.slug)" />
          </template>
        </FlowLoader>
      </VDrawer>
    </div>
    <FlowLoader
      ref="draftLoader"
      class="draft-preload"
      func="getUserDrafts"
      type="page"
      :auto="0"
      :query="{
        $axios: $axios
      }"
    />
  </div>
</template>

<script>
import { VField, VUploader, VButton, VDrawer } from '@calibur/sakura'
import Editor from '~/components/editor'
import upload from '~/mixins/upload'
import mustSign from '~/mixins/mustSign'
import PinDraftItem from '~/components/PinDraftItem'

export default {
  name: 'WritePin',
  components: {
    VUploader,
    VField,
    VButton,
    Editor,
    VDrawer,
    PinDraftItem
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
      last_edit_at: '',
      published_at: '',
      loading: false,
      renderEditor: true,
      toggleDraftDrawer: false
    }
  },
  computed: {
    draftSource() {
      return this.$store.getters['flow/getFlow']({
        func: 'getUserDrafts',
        type: 'page'
      }) || {}
    }
  },
  mounted() {
    this.initCache()
    this.initUserDraft()
  },
  methods: {
    initCache() {
      if (this.slug) {
        return
      }
      if (this.$cache.has('editor_local_draft_title')) {
        this.title = this.$cache.get('editor_local_draft_title')
      }
    },
    initUserDraft() {
      if (!this.$refs.draftLoader) {
        return
      }
      this.$refs.draftLoader.initData()
    },
    onEditorSave() {
      this.saveTitle()
    },
    saveTitle() {
      if (this.slug) {
        return
      }
      this.$cache.set('editor_local_draft_title', this.title)
    },
    deleteBanner() {
      this.$refs.uploader.remove(0)
      this.saveTitle()
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
          notebook: this.notebook,
          content: [
            {
              type: 'title',
              data: this.title
            }
          ].concat(this.content),
          publish
        })
        .then((slug) => {
          this.removeCache()
          if (publish) {
            // TODO：redirect pin page
          } else {
            this.loading = false
            this.switchDraft(slug)
          }
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

      const { slug } = this
      this.$axios
        .$post('v1/pin/update/story', {
          slug,
          notebook: this.notebook,
          content: [
            {
              type: 'title',
              data: this.title
            }
          ].concat(this.content),
          publish
        })
        .then((slug) => {
          if (publish) {
            // TODO：redirect pin page
          }
        })
        .catch((err) => {
          this.$toast.error(err.message)
          this.loading = false
        })
    },
    removeCache() {
      this.$cache.del('editor_local_draft_title')
      this.$cache.del('editor_local_draft')
    },
    handleUploaderChange() {
      const images = this.$refs.uploader.images()
      this.title.banner = images.length ? images[0] : null
      this.saveTitle()
    },
    clearPageData() {
      this.renderEditor = false
      this.slug = ''
      this.title = {
        banner: null,
        text: ''
      }
      this.last_edit_at = ''
      this.published_at = ''
      this.content = []
      this.toggleDraftDrawer = false
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
      this.content = data.content
      this.toggleDraftDrawer = false
      this.$nextTick(() => {
        this.renderEditor = true
      })
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
  head: {
    title: '投稿'
  }
}
</script>
