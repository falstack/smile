<template>
  <VForm v-if="bangumi" id="relation-bangumi" full>
    <VField disabled placeholder="开启后，可作为其他版块的父节点">
      <span slot="before">作为父节点</span>
      <VToggle slot="after" v-model="bangumi.is_parent" @change="handleParentChange" />
    </VField>
    <VField v-model="bangumi.parent_slug" label="设置父节点" placeholder="填写父节点的 ID">
      <VButton slot="after" size="small" @click="handleSetParent">
        确认
      </VButton>
    </VField>
    <span slot="submit" />
  </VForm>
</template>

<script>
import { VToggle, VField, VButton, VForm } from '@calibur/sakura'

export default {
  name: 'EditBangumi',
  components: {
    VForm,
    VToggle,
    VField,
    VButton
  },
  asyncData({ app, error, query }) {
    const slug = query.slug
    if (!slug) {
      return
    }
    return app.$axios
      .$get('v1/bangumi/show', {
        params: { slug }
      })
      .then((bangumi) => {
        return { bangumi }
      })
      .catch(error)
  },
  data() {
    return {
      bangumi: null
    }
  },
  methods: {
    handleParentChange(result) {
      this.$axios.$post('v1/bangumi/update/set_parent', {
        bangumi_slug: this.bangumi.slug,
        result
      })
    },
    handleSetParent() {
      this.$axios
        .$post('v1/bangumi/update/set_parent', {
          child_slug: this.bangumi.slug,
          parent_slug: this.bangumi.parent_slug
        })
        .then(() => {
          this.$toast.info('设置成功')
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
    }
  },
  head() {
    return {
      title: '番剧关系'
    }
  }
}
</script>
