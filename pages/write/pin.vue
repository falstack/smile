<style lang="scss">
#write-pin {
  padding-bottom: 50px;

  .banner {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56%;

    .uploader {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #fafbfd;
      border-radius: 4px;
      z-index: 0;
    }

    .image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      border-radius: 4px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .tool {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50px;
      height: 50px;
      z-index: 2;
      border-radius: 0 0 4px;
      overflow: hidden;
      @include pc() {
        opacity: 0;
      }

      i {
        display: block;
        width: 50px;
        height: 50px;
        font-size: 24px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        color: #fff;
        background-color: rgba(#000, 0.5);

        &:hover {
          background-color: rgba(#000, 0.8);
        }
      }
    }

    &:hover {
      .tool {
        opacity: 1;
      }
    }
  }

  .title {
    border-bottom: 1px solid $color-gray-3;
  }

  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    background-color: #fff;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>

<template>
  <div id="write-pin">
    <div class="banner">
      <VUploader
        class="uploader"
        :action="imageUploadAction"
        :accept="imageUploadAccept"
        :data="uploadHeaders"
        :before-upload="handleImageUploadBefore"
        :on-success="customImageUploadSuccess"
        :on-error="handleImageUploadError"
      />
      <template v-if="title && title.banner">
        <div class="image" :style="{ backgroundImage: `url(${$resize(title.banner.url, { width: 660 })}` }" />
        <div class="tool">
          <i class="el-icon-delete" @click="deleteBanner" />
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
  asyncData ({ app, error, query }) {
    const slug = query.slug
    if (!slug) {
      return
    }
    return app.$axios
      .$get('v1/pin/update/content', {
        params: { slug }
      })
      .then((res) => {
        const data = { ...res }
        data.area = data.area ? data.area.slug : ''
        data.topic = data.topic ? data.topic.slug : ''
        data.notebook = data.notebook ? data.notebook.slug : ''
        return data
      })
      .catch(error)
  },
  data () {
    return {
      slug: '',
      title: {
        banner: null,
        text: ''
      },
      content: [],
      notebook: '',
      area: '',
      topic: '',
      last_edit_at: '',
      published_at: '',
      loading: false
    }
  },
  mounted () {
    if (this.$cache.has(`editor_local_draft_title-${this.slug}`)) {
      this.title = this.$cache.get(`editor_local_draft_title-${this.slug}`)
    }
  },
  methods: {
    customImageUploadSuccess (res, file) {
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
    onEditorSave () {
      this.saveTitle()
    },
    saveTitle () {
      this.$cache.set(`editor_local_draft_title-${this.slug}`, this.title)
    },
    deleteBanner () {
      this.title.banner = null
      this.saveTitle()
    },
    preValidate () {
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
    actionCreate (publish) {
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
    actionUpdate (publish) {
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
    actionRedo () {
      if (this.content.length || this.title.text.length || this.title.banner) {
        this.removeCache()
        this.$toast.success(this.slug ? '撤销成功' : '删除成功').then(() => {
          window.location.reload()
        })
      }
    },
    removeCache () {
      this.$cache.del(`editor_local_draft_title-${this.slug}`)
      this.$cache.del(`editor_local_draft-${this.slug}`)
    }
  },
  head: {
    title: '创作中心'
  }
}
</script>
