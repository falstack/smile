<style lang="scss">
#edit-idol {
  padding: $page-padding;

  .alias {
    line-height: 44px;

    button {
      margin-right: 5px;
    }
  }
}
</style>

<template>
  <div v-if="idol" id="edit-idol">
    <VField v-model="idol.name" disabled label="名称" />
    <VField v-model="idol.avatar" disabled label="头像">
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
    <VField v-model="alias" disabled label="别名">
      <div class="alias">
        <VButton v-for="name in idol.alias" :key="name" size="small" plain>
          {{ name }}
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
    <VField v-model="idol.intro" label="简介" :min-row="4" :max-row="10" />
    <div>
      <VButton block @click="handleSubmit">
        提交
      </VButton>
    </div>
  </div>
</template>

<script>
import { VButton, VUploader, VField } from '@calibur/sakura'
import mustSign from '~/mixins/mustSign'
import upload from '~/mixins/upload'

export default {
  name: 'EditIdol',
  components: {
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
    return {
      idol: null,
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
