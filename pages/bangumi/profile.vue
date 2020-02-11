<style lang="scss">
#profile-bangumi {
  padding: 15px;

  .avatar-field {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 10%;
      margin-right: 15px;
    }
  }
}
</style>

<template>
  <div v-if="bangumi" id="profile-bangumi">
    <div ref="form" label-position="top" label-width="80px">
      <div label="名称">
        <VField v-model="bangumi.name" disabled />
      </div>
      <div label="头像">
        <div class="avatar-field">
          <img :src="$resize(bangumi.avatar, { width: 100 })" class="avatar">
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
              {{ uploadPending ? '图片上传中...' : '点击上传头像' }}
            </VButton>
          </VUploader>
        </div>
      </div>
      <div label="别名">
        {{ bangumi.alias }}
      </div>
      <div label="简介">
        <VField v-model="bangumi.intro" type="textarea" rows="4" resize="vertical" />
      </div>
      <div>
        <VButton type="success" round @click="handleSubmit">
          提交
        </VButton>
      </div>
    </div>
  </div>
</template>

<script>
import { VButton, VField, VUploader } from '@calibur/sakura'
import mustSign from '~/mixins/mustSign'
import upload from '~/mixins/upload'

export default {
  name: 'ProfileBangumi',
  components: {
    VButton,
    VField,
    VUploader
  },
  mixins: [mustSign, upload],
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
      bangumi: null,
      loading: false
    }
  },
  methods: {
    avatarUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      this.bangumi.avatar = res.data.url
    },
    handleSubmit() {
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/bangumi/update/profile', this.bangumi)
        .then(() => {
          this.$toast.success('修改成功')
        })
        .catch((err) => {
          this.$toast.error(err.message)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  head() {
    return {
      title: '编辑番剧'
    }
  }
}
</script>
