<template>
  <VForm
    v-if="isAuth"
    id="user-edit"
    full
    :form="user"
    :rule="rule"
    :loading="loading"
    @submit="handleSubmit"
  >
    <VField label="头像">
      <VUploader
        v-model="user.avatar"
        :cookie="false"
        required
        :url="imageUploadAction"
        :accept="imageUploadAccept"
        :transform-request="imageUploadRequest"
        :transform-response="imageUploadResponse"
      />
    </VField>
    <VField label="背景">
      <VUploader
        v-model="user.banner"
        :cookie="false"
        required
        :url="imageUploadAction"
        :accept="imageUploadAccept"
        :transform-request="imageUploadRequest"
        :transform-response="imageUploadResponse"
      />
    </VField>
    <VField v-model="nickname" label="昵称" />
    <VField label="生日" align="center" placeholder="选择生日">
      <VDatetime v-model="birthday" type="date" />
      <template slot="after">
        <span>{{ birthSecret ? '私密' : '公开' }}</span>
        <VToggle v-model="birthSecret" />
      </template>
    </VField>
    <VField label="性别" align="center">
      <VRadio
        v-model="sex"
        inline
        :label="[
          { label: '男', value: 1 },
          { label: '女', value: 2 }
        ]"
      />
      <template slot="after">
        <span>{{ sexSecret ? '私密' : '公开' }}</span>
        <VToggle v-model="sexSecret" active-text="私密" inactive-text="公开" />
      </template>
    </VField>
    <VField
      v-model="signature"
      label="签名"
      placeholder="留下自己想说的话"
      :min-row="4"
      :max-len="20"
      counter
    />
  </VForm>
</template>

<script>
import { VField, VDatetime, VUploader, VToggle, VRadio, VForm } from '@calibur/sakura'
import { settingProfile } from '~/api/userApi'
import upload from '~/mixins/upload'
import mustSign from '~/mixins/mustSign'

export default {
  name: 'UserEdit',
  components: {
    VForm,
    VField,
    VDatetime,
    VUploader,
    VToggle,
    VRadio
  },
  mixins: [upload, mustSign],
  data() {
    const validateNickname = (rule, value, callback) => {
      const length = value.replace(/([\u4E00-\u9FA5])/g, 'aa').trim().length
      if (!length) {
        callback(new Error('昵称不能为空'))
      } else if (length < 2) {
        callback(new Error('昵称至少为2个字符'))
      } else if (length > 14) {
        callback(new Error('昵称不能超过14个字符'))
      }
      callback()
    }
    const validateSignature = (rule, value, callback) => {
      if (value.length > 150) {
        callback(new Error('签名最多 150 个字'))
      }
      callback()
    }
    const validateBirthday = (rule, value, callback) => {
      if (!value) {
        return callback()
      }
      const setTs = new Date(value).getTime()
      const curTs = Date.now()
      if (setTs >= curTs) {
        callback(new Error('。。。'))
      } else if (curTs - setTs < 315360000000) {
        callback(new Error('你应该大于10岁了吧...?'))
      } else if (curTs - setTs > 1261440000000) {
        callback(new Error('你应该小于40岁的吧...?'))
      }
      callback()
    }
    return {
      loading: false,
      rule: {
        nickname: [{ validator: validateNickname, trigger: 'submit' }],
        signature: [{ validator: validateSignature, trigger: 'submit' }],
        birthday: [{ validator: validateBirthday, trigger: 'submit' }]
      }
    }
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth
    },
    user() {
      return this.$store.state.user
    },
    nickname: {
      get() {
        return this.user.nickname
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'nickname',
          value
        })
      }
    },
    birthday: {
      get() {
        return this.user.birthday
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'birthday',
          value
        })
      }
    },
    birthSecret: {
      get() {
        return this.user.birth_secret
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'birth_secret',
          value
        })
      }
    },
    sex: {
      get() {
        return this.user.sex
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'sex',
          value
        })
      }
    },
    sexSecret: {
      get() {
        return this.user.sex_secret
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'sex_secret',
          value
        })
      }
    },
    signature: {
      get() {
        return this.user.signature
      },
      set(value) {
        this.$store.commit('UPDATE_USER_INFO', {
          key: 'signature',
          value: value.trim()
        })
      }
    }
  },
  methods: {
    handleSubmit() {
      if (this.loading) {
        return
      }
      this.loading = true
      settingProfile(this, {
        nickname: this.nickname,
        signature: this.signature,
        birthday: new Date(this.$utils.adjustDate(this.birthday)).getTime() / 1000,
        birth_secret: this.birthSecret,
        sex_secret: this.sexSecret,
        sex: this.sex,
        avatar: this.user.avatar,
        banner: this.user.banner
      })
        .then(() => {
          this.$toast.success('设置成功')
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
      title: '个人简介'
    }
  }
}
</script>
