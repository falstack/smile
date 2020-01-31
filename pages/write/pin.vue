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
    <Editor v-model="content" :slug="slug" :time="last_edit_at" @save="onEditorSave" />
    <div class="footer">
      <VButton>提交文章</VButton>
      <VButton theme="info">
        存草稿
      </VButton>
    </div>
  </div>
</template>

<script>
import { VField, VUploader, VButton } from '@calibur/sakura'
import Editor from '~/components/editor'
import upload from '~/mixins/upload'
import mustSign from '~/mixins/mustSign'

export default {
  name: 'WritePin',
  components: {
    VUploader,
    VField,
    VButton,
    Editor
  },
  mixins: [mustSign, upload],
  props: {},
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
      loading: false
    }
  },
  mounted() {
    if (this.$cache.has(`editor_local_draft_title-${this.slug}`)) {
      this.title = this.$cache.get(`editor_local_draft_title-${this.slug}`)
    }
  },
  methods: {
    customImageUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      const banner = res.data
      if (banner.width < 960 || banner.height < 540) {
        this.handleImageUploadRemove(file)
        this.$toast.info('图片尺寸不符合要求')
        return
      }
      this.title.banner = banner
      this.saveTitle()
    },
    onEditorSave() {
      this.saveTitle()
    },
    saveTitle() {
      this.$cache.set(`editor_local_draft_title-${this.slug}`, this.title)
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
          window.location = this.$alias.pin(slug)
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
        .then((result) => {
          this.removeCache()
          window.location = this.$alias.pin(result)
        })
        .catch((err) => {
          this.$toast.error(err.message)
          this.loading = false
        })
    },
    actionRedo() {
      if (this.content.length || this.title.text.length || this.title.banner) {
        this.removeCache()
        this.$toast.success(this.slug ? '撤销成功' : '删除成功').then(() => {
          window.location.reload()
        })
      }
    },
    removeCache() {
      this.$cache.del(`editor_local_draft_title-${this.slug}`)
      this.$cache.del(`editor_local_draft-${this.slug}`)
    },
    handleUploaderChange() {
      const images = this.$refs.uploader.images()
      this.title.banner = images.length ? images[0] : null
      this.saveTitle()
    }
  },
  head: {
    title: '投稿'
  }
}
</script>
