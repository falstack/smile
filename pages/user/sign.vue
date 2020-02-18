<template>
  <VForm id="user-sign" :loading="loading" full @submit="handleSubmit">
    <VField v-model="access" label="账号" />
    <VField
      v-model="secret"
      label="密码"
      :attr="{
        type: 'password',
      }"
    />
  </VForm>
</template>

<script>
import { VForm, VField } from '@calibur/sakura'
import { login } from '~/api/userApi'

export default {
  name: 'UserSign',
  components: {
    VForm,
    VField
  },
  data() {
    return {
      loading: false,
      access: '',
      secret: ''
    }
  },
  methods: {
    handleSubmit() {
      if (!this.access || !this.secret) {
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      login(this, {
        access: this.access,
        secret: this.secret,
        remember: true
      })
        .then((token) => {
          if (this.$route.query.from) {
            window.location = decodeURIComponent(`${this.$route.query.from}?token=${token}`)
          } else {
            this.$cache.set('JWT-TOKEN', token)
            this.$toast.info('登录成功')
          }
        })
        .catch((err) => {
          this.$toast.error(err.message)
          this.loading = false
        })
    }
  }
}
</script>
