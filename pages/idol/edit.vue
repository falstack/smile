<style lang="scss">
#edit-idol {
  padding: $page-padding 0;

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
    v-if="idol"
    id="edit-idol"
    :form="idol"
    :rule="rule"
    :loading="loading"
    @submit="handleSubmit"
  >
    <VField v-model="idol.name" disabled label="名称" />
    <VField label="头像">
      <VUploader
        v-model="idol.avatar"
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
        <VButton v-for="(name, index) in idol.alias" :key="name" size="small" plain>
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
      v-model="idol.intro"
      label="简介"
      :min-row="4"
      :max-row="10"
      :max-len="500"
      counter
    />
  </VForm>
</template>

<script>
import { VButton, VUploader, VField, VForm } from '@calibur/sakura'
import mustSign from '~/mixins/mustSign'
import upload from '~/mixins/upload'

export default {
  name: 'EditIdol',
  components: {
    VForm,
    VButton,
    VUploader,
    VField
  },
  mixins: [mustSign, upload],
  asyncData({ app, error, query }) {
    const slug = query.slug
    if (!slug) {
      return
    }
    return app.$axios
      .$get('v1/idol/show', {
        params: { slug }
      })
      .then((idol) => {
        return { idol }
      })
      .catch(error)
  },
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
      idol: null,
      rule: {
        alias: {
          type: 'array',
          validator: validateAlias
        }
      },
      loading: false,
      alias: ''
    }
  },
  methods: {
    handleSubmit() {
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/idol/update', this.idol)
        .then(() => {
          this.$toast.success('修改成功')
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.loading = false
        })
    },
    removeAlias(index) {
      this.idol.alias.splice(index, 1)
    },
    addAlias() {
      if (!this.alias) {
        return
      }
      if (this.idol.alias.includes(this.alias)) {
        return
      }
      this.idol.alias.push(this.alias)
      this.alias = ''
    }
  },
  head() {
    return {
      title: '编辑偶像'
    }
  }
}
</script>
