<template>
  <VButton
    v-if="state"
    :loading="state.is_following_loading"
    :plain="btnStyle.plain"
    :theme="btnStyle.theme"
    size="small"
    @click="handleFollowClick"
    v-text="btnStyle.text"
  />
</template>

<script>
import { VButton } from '@calibur/sakura'

export default {
  name: 'UserFollowBtn',
  components: {
    VButton
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    state() {
      return this.$store.getters['social/get']('user-follow', this.slug)
    },
    isAuth() {
      return this.$store.state.isAuth
    },
    isMine() {
      return this.$store.getters.isMine(this.slug)
    },
    btnStyle() {
      if (!this.isAuth || !this.state) {
        return {
          text: '关注',
          plain: false,
          theme: 'primary',
          icon: 'ic_add'
        }
      }
      if (this.isMine) {
        return {
          text: '自己',
          theme: 'info',
          plain: true
        }
      }
      if (this.state.is_following && this.state.is_followed_by) {
        return {
          text: '互相关注',
          theme: 'info',
          plain: true,
          icon: 'ic_more'
        }
      } else if (this.state.is_following) {
        return {
          text: '已关注',
          theme: 'info',
          plain: true,
          icon: 'ic_more'
        }
      } else if (this.state.is_followed_by) {
        return {
          text: '关注了我',
          theme: 'primary',
          plain: false,
          icon: 'ic_add'
        }
      }
      return {
        text: '关注',
        theme: 'primary',
        plain: false,
        icon: 'ic_add'
      }
    }
  },
  methods: {
    handleFollowClick() {
      if (!this.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        this.$toast.info('不能关注自己')
        return
      }
      if (!this.state || this.state.is_following_loading) {
        return
      }
      if (this.btnStyle.text === '关注了我' || this.btnStyle.text === '关注') {
        this.submit()
        return
      }
      this.$alert({
        title: '提示',
        message: '确定要取消关注吗？',
        buttons: ['取消', '确定'],
        maskClose: true,
        callback: (index) => {
          if (!index) {
            return
          }
          this.submit()
        }
      })
    },
    async submit() {
      const data = await this.$store.dispatch('social/toggle', {
        type: 'user-follow',
        action: 'is_following',
        slug: this.slug,
        params: {
          target_slug: this.slug,
          target_type: 'user',
          method_type: 'follow'
        }
      })
      if (data.success) {
        this.$emit('change', data.result)
      }
    }
  }
}
</script>
