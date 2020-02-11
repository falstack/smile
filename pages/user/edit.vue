<style lang="scss">
#user-edit {
  padding: 20px;

  .avatar-field {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 15px;
    }
  }

  .banner-field {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .banner-wrap {
      margin-right: 15px;
    }

    .banner {
      width: auto;
      height: 100px;
      border-radius: 12px;
    }
  }
}
</style>

<template>
  <div id="user-edit">
    <div
      v-if="isAuth"
      ref="form"
      :disabled="submitting"
      :model="user"
      :rules="rule"
      label-position="top"
    >
      <div label="头像">
        <div class="avatar-field">
          <img :src="$resize(user.avatar, { width: 100 })" class="avatar">
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
              {{ uploadPending ? '图片上传中...' : '点击更换头像' }}
            </VButton>
          </VUploader>
        </div>
      </div>
      <div label="背景">
        <div class="banner-field">
          <div class="banner-wrap">
            <img :src="$resize(user.banner, { height: 100, mode: 2 })" class="banner">
          </div>
          <VUploader
            :show-file-list="false"
            :action="imageUploadAction"
            :limit="uploadImageLimit"
            :data="uploadHeaders"
            :accept="imageUploadAccept"
            :before-upload="handleImageUploadBefore"
            :on-success="bannerUploadSuccess"
            :on-error="handleImageUploadError"
          >
            <VButton :loading="!!uploadPending" type="success" plain round size="mini">
              {{ uploadPending ? '图片上传中...' : '点击更换背景' }}
            </VButton>
          </VUploader>
        </div>
      </div>
      <div label="昵称" prop="nickname">
        <VField v-model.trim="nickname" />
      </div>
      <div label="生日" prop="birthday">
        <VDatetime
          v-model="birthday"
          :editable="false"
          :clearable="false"
          type="date"
          format="yyyy 年 M 月 d 日"
          value-format="yyyy-MM-dd"
          placeholder="选择生日"
        />
        <VToggle v-model="birthSecret" active-text="私密" inactive-text="公开" />
      </div>
      <div label="性别">
        <VRadio
          v-model="sex"
          :text="[
            { label: '男', value: 1 },
            { label: '女', value: 2 }
          ]"
        />
        <VToggle v-model="sexSecret" active-text="私密" inactive-text="公开" />
      </div>
      <div label="签名" prop="signature">
        <VField v-model="signature" :rows="5" type="textarea" placeholder="留下自己想说的话" maxlength="60" />
      </div>
      <div>
        <VButton :loading="submitting" type="primary" @click="submit">
          提交
        </VButton>
      </div>
    </div>
  </div>
</template>

<script>
import { VButton, VField, VDatetime, VUploader, VToggle, VRadio } from '@calibur/sakura'
import { settingProfile } from '~/api/userApi'
import upload from '~/mixins/upload'
import mustSign from '~/mixins/mustSign'

export default {
  name: 'UserEdit',
  components: {
    VField,
    VButton,
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
      submitting: false,
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
    avatarUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      this.$store.commit('UPDATE_USER_INFO', {
        key: 'avatar',
        value: res.data.url
      })
    },
    bannerUploadSuccess(res, file) {
      this.handleImageUploadSuccess(res, file)
      this.$store.commit('UPDATE_USER_INFO', {
        key: 'banner',
        value: res.data.url
      })
    },
    submit() {
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          if (this.submitting) {
            return
          }
          this.submitting = true
          try {
            await settingProfile(this, {
              nickname: this.nickname,
              signature: this.signature,
              birthday: new Date(this.$utils.adjustDate(this.birthday)).getTime() / 1000,
              birth_secret: this.birthSecret,
              sex_secret: this.sexSecret,
              sex: this.sex,
              avatar: this.user.avatar,
              banner: this.user.banner
            })
            this.$toast.success('设置成功')
          } catch (err) {
            this.$toast.error(err.message)
          } finally {
            this.submitting = false
          }
        } else {
          return false
        }
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
