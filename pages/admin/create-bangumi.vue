<style lang="scss">
#create-bangumi {
  .alias {
    line-height: 44px;

    button {
      margin-right: 5px;
    }
  }
}
</style>

<template>
  <VForm
    id="create-bangumi"
    full
    :form="tag"
    :rule="rule"
    :loading="loading"
    @submit="handleSubmit"
  >
    <VField label="类型" align="center">
      <VRadio
        v-model="tag.type"
        inline
        :label="[
          { label: '动漫', value: 0 },
          { label: '游戏', value: 1 },
          { label: '其它', value: 9 }
        ]"
      />
    </VField>
    <VField v-model="tag.id" placeholder="bgm.tv 的番剧 id" label="来源">
      <template #after>
        <VButton :loading="loading" size="small" @click="fetch">
          抓取资源
        </VButton>
      </template>
    </VField>
    <VField v-model="tag.name" label="名称" />
    <VField label="头像">
      <VUploader
        v-model="tag.avatar"
        :cookie="false"
        required
        :url="imageUploadAction"
        :accept="imageUploadAccept"
        :transform-request="imageUploadRequest"
        :transform-response="imageUploadResponse"
      />
    </VField>
    <VField label="别名">
      <div class="alias">
        <VButton v-for="(name, index) in tag.alias" :key="name" size="small" plain>
          <span v-text="name" />
          <i class="bili-font ic_input_close" @click="removeAlias(index)" />
        </VButton>
      </div>
      <VField v-model="alias" :close="false">
        <template #after>
          <VButton @click="addAlias">
            添加
          </VButton>
        </template>
      </VField>
    </VField>
    <VField
      v-model="tag.intro"
      label="简介"
      :min-row="4"
      :max-row="10"
      :max-len="500"
      counter
    />
  </VForm>
</template>

<script>
import { VButton, VUploader, VRadio, VField, VForm } from '@calibur/sakura'
import upload from '~/mixins/upload'

export default {
  name: 'CreateBangumi',
  components: {
    VButton,
    VUploader,
    VRadio,
    VField,
    VForm
  },
  mixins: [upload],
  data() {
    const validateAlias = (rule, value, callback) => {
      if (!value || !value.length) {
        callback(new Error('别名不能为空'))
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
        intro: '',
        type: 0
      },
      rule: {
        alias: {
          type: 'array',
          validator: validateAlias
        }
      },
      alias: '',
      loading: false
    }
  },
  methods: {
    removeAlias(index) {
      this.tag.alias.splice(index, 1)
    },
    addAlias() {
      if (!this.alias) {
        return
      }
      if (this.tag.alias.includes(this.alias)) {
        return
      }
      this.tag.alias.push(this.alias)
      this.alias = ''
    },
    fetch() {
      if (!this.tag.id) {
        return
      }
      this.$toast.loading('抓取中...')
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
          this.$toast.stop()
        })
        .catch((err) => {
          if (err.statusCode !== 400) {
            this.$toast.error(err.message)
            return
          }
          this.$toast.stop()
          this.$alert({
            title: '番剧已存在',
            message: '是否跳转到相应页面？',
            buttons: ['取消', '确定'],
            callback: (index) => {
              if (!index) {
                return
              }
              this.$bridge.navigateTo({
                url: `/pages/bangumi/show/index?slug=${err.message}`
              })
            }
          })
        })
    },
    handleSubmit() {
      this.loading = true
      this.$axios
        .$post('v1/bangumi/create', {
          ...this.tag,
          alias: [this.tag.name, ...this.tag.alias]
        })
        .then((slug) => {
          this.$toast.info('创建成功')
          this.$bridge.navigateTo({
            url: `/pages/bangumi/show/index?slug=${slug}`
          })
        })
        .catch((err) => {
          this.$toast.error(err.message)
          this.loading = false
        })
    }
  },
  head() {
    return {
      title: '创建分区'
    }
  }
}
</script>
