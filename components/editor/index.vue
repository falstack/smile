<style lang="scss">
.editor-wrap {
  padding: 0 $page-padding;

  .cdx-button {
    position: relative;
  }

  .image-tool__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .ce-block {
    font-weight: normal;
    font-style: normal;

    a {
      display: none;
    }

    &__content {
      max-width: 100%;
    }
  }

  .ce-toolbar {
    .ce-toolbox {
      visibility: visible;
      opacity: 1;
    }

    .ce-toolbar__plus {
      display: none !important;
    }
  }

  .ce-paragraph {
    @extend %breakWord;

    &::before {
      color: #C0C0C0 !important;
    }
  }
}

.ct--shown {
  display: none !important;
}
</style>

<template>
  <div class="editor-wrap">
    <div id="codex-editor" class="mousetrap" />
  </div>
</template>

<script>
import upload from '~/mixins/upload'
import { uploadToQiniu } from '~/api/imageApi'
import HeaderPlugin from '~/components/editor/plugin/header'
import BaiduPlugin from '~/components/editor/plugin/baidu'
import DelimiterPlugin from '~/components/editor/plugin/delimiter'
import ChecklistPlugin from '~/components/editor/plugin/checklist'
import ParagraphPlugin from '~/components/editor/plugin/paragraph'
import VotePlugin from '~/components/editor/plugin/vote'
import pkg from '~/package.json'

export default {
  name: 'JsonEditor',
  mixins: [upload],
  props: {
    value: {
      required: true,
      type: Array
    },
    slug: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor() {
      Promise.all([import('@editorjs/editorjs'), import('~/components/editor/plugin/image'), import('~/components/editor/plugin/link')]).then((modules) => {
        const self = this
        let data
        if (self.slug) {
          data = {
            blocks: self.value,
            time: Date.now(),
            version: self.$cache.get('editor_version', pkg.dependencies['@editorjs/editorjs'].replace('^', ''))
          }
        } else {
          data = self.$cache.get('editor_local_draft')
          if (data) {
            self.$emit('input', data.blocks)
          }
        }
        const [EditorJS, ImagePlugin, LinkPlugin] = modules.map(_ => _.default)
        const editor = new EditorJS({
          data: self.decodeData(data || {}),
          holder: 'codex-editor',
          placeholder: '请输入正文（建议在15000字以内）',
          autofocus: false,
          tools: {
            header: {
              class: HeaderPlugin,
              inlineToolbar: true
            },
            image: {
              class: ImagePlugin,
              types: 'image/jpeg, image/png, image/jpg',
              config: {
                uploader: {
                  uploadByFile(file) {
                    return new Promise((resolve, reject) => {
                      const formData = new FormData()
                      formData.append('file', file)
                      formData.append('token', self.imageUploadToken)
                      uploadToQiniu(self, formData)
                        .then((data) => {
                          data.url = `https://m1.calibur.tv/${data.url}`
                          resolve({
                            success: 1,
                            file: data
                          })
                        })
                        .catch(reject)
                    })
                  }
                }
              }
            },
            link: {
              class: LinkPlugin,
              config: {
                endpoint: `${process.env.API_URL_BROWSER}v1/pin/editor/fetch_site`
              }
            },
            delimiter: {
              class: DelimiterPlugin
            },
            checklist: {
              class: ChecklistPlugin,
              inlineToolbar: true
            },
            baidu: {
              class: BaiduPlugin
            },
            paragraph: {
              class: ParagraphPlugin
            },
            vote: {
              class: VotePlugin
            }
          },
          onChange: () => {
            self.handleSave()
          }
        })

        editor.isReady
          .then(() => {
            this.editor = editor
            this.bindSaveEvent()
            this.handleSave()
          })
          .catch((reason) => {
            this.$toast.error(`编辑器初始化失败：${reason}`)
          })
      })
    },
    bindSaveEvent() {
      document.addEventListener(
        'keydown',
        (e) => {
          if (e.keyCode === 83 && (e.ctrlKey || e.metaKey)) {
            e.stopPropagation()
            e.preventDefault()
            this.handleSave()
          }
        },
        false
      )
    },
    handleSave() {
      if (!this.editor) {
        return
      }
      this.editor
        .save()
        .then((outputData) => {
          const value = this.encodeData(outputData)
          if (!this.slug) {
            this.$cache.set('editor_local_draft', value)
            this.$cache.set('editor_version', value.version)
          }
          if (this.value) {
            this.$emit('input', value.blocks)
          }
          this.$emit('save')
        })
        .catch(() => {
          this.$toast.error('保存失败')
        })
    },
    decodeData({ version, blocks, time }) {
      if (!blocks) {
        return null
      }
      return {
        version,
        blocks,
        time
      }
    },
    encodeData({ version, blocks, time }) {
      return {
        version,
        blocks,
        time
      }
    }
  }
}
</script>
