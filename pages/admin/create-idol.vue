<style lang="scss">
#create-idol {
  padding: 15px;
}
</style>

<template>
  <div id="create-idol">
    <div
      ref="form"
      :model="tag"
      :rules="rules"
      :disabled="submitting"
      label-position="top"
      class="edit-tag-info-form"
    >
      <div label="来源" required>
        <VField v-model="tag.id" placeholder="去 bgm.tv 寻找那个偶像吧！" />
      </div>
      <div>
        <VButton :loading="submitting" type="success" round @click="fetch">
          抓取资源
        </VButton>
      </div>
      <div label="头像" required>
        <div class="avatar-field">
          <img v-if="tag.avatar" :src="$resize(tag.avatar, { width: 100 })" class="avatar">
          <VUploader
            :show-file-list="false"
            :action="imageUploadAction"
            :limit="uploadImageLimit"
            :data="uploadHeaders"
            :accept="imageUploadAccept"
            :before-upload="handleImageUploadBefore"
            :on-success="avatarUploadSuccess"
            :on-error="handleImageUploadError"
          >
            <VButton :loading="!!uploadPending" type="success" plain round size="mini">
              {{ uploadPending ? '图片上传中...' : '点击上传封面' }}
            </VButton>
          </VUploader>
        </div>
      </div>
      <div label="名称" required>
        <VField v-model="tag.name" />
      </div>
      <div label="别名" prop="alias" required>
        <p class="form-tip">
          提示：按回车键生效
        </p>
        {{ tag.alias }}
      </div>
      <div label="简介" required>
        <VField
          v-model="tag.intro"
          type="textarea"
          :show-word-limit="true"
          :rows="8"
          maxlength="500"
          resize="none"
          placeholder="请输入板块介绍"
        />
      </div>
      <div>
        <VButton :loading="submitting" type="success" round @click="submit">
          保存更改
        </VButton>
      </div>
    </div>
  </div>
</template>

<script>
import { VButton, VField, VUploader } from '@calibur/sakura'
import upload from '~/mixins/upload'

export default {
  name: 'CreateIdol',
  components: {
    VButton,
    VField,
    VUploader
  },
  mixins: [upload],
  data () {
    const validateAlias = (rule, value, callback) => {
      if (!value || !value.length) {
        callback(new Error('别名不能为空'))
      }
      if (!~value.indexOf(this.tag.name)) {
        callback(new Error('别名中必须包含名称'))
      }
      if (value.some(_ => /,/.test(_))) {
        callback(new Error('别名不能包含英文逗号'))
      }
      if (value.join('').length > 100) {
        callback(new Error('别名最多100个字符'))
      }
      callback()
    }
    return {
      tag: {
        id: '',
        avatar: '',
        name: '',
        alias: [],
        intro: ''
      },
      rules: {
        alias: [{ validator: validateAlias, trigger: 'submit' }]
      },
      submitting: false
    }
  },
  methods: {
    avatarUploadSuccess (res, file) {
      this.handleImageUploadSuccess(res, file)
      this.tag.avatar = res.data.url
    },
    fetch () {
      if (!this.tag.id) {
        return
      }
      this.$axios
        .$get('v1/bangumi/fetch', {
          params: {
            source_id: this.tag.id
          }
        })
        .then((info) => {
          if (!info || !info.name) {
            return
          }
          this.tag = {
            ...this.tag,
            ...info
          }
        })
        .catch((err) => {
          if (err.statusCode === 400) {
            this.$toast.stop()
            this.$confirm('该角色已存在，是否跳转？')
              .then(() => {
                this.$bridge.navigateTo({
                  url: `/pages/idol/show/index?slug=${err.message}`
                })
              })
              .catch(() => {})
            return
          }
          return this.$toast.error(err.message)
        })
    },
    submit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.submitting = true
          this.$axios
            .$post('v1/idol/create', {
              ...this.tag,
              alias: [this.tag.name, ...this.tag.alias],
              bangumi_slug: this.$route.query.slug
            })
            .then((slug) => {
              this.$toast.info('创建成功')
              this.$bridge.navigateTo({
                url: `/pages/idol/show/index?slug=${slug}`
              })
            })
            .catch((err) => {
              this.$toast.error(err.message)
              this.submitting = false
            })
        }
      })
    }
  },
  head: {
    title: '创建角色'
  }
}
</script>
