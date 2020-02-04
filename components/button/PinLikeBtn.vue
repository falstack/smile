<template>
  <div class="pin-like-btn" @click="upvote">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PinLikeBtn',
  props: {
    pinSlug: {
      type: String,
      required: true
    },
    userSlug: {
      type: String,
      required: true
    }
  },
  computed: {
    state() {
      return this.$store.getters['social/get']('pin', this.pinSlug)
    },
    isMine() {
      return this.$store.getters.isMine(this.userSlug)
    }
  },
  methods: {
    async upvote() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        this.$toast.info('不能给自己点赞')
        return
      }
      if (this.state.up_vote_status_loading) {
        return
      }
      const data = await this.$store.dispatch('social/toggle', {
        type: 'pin',
        slug: this.pinSlug,
        action: 'up_vote_status',
        params: {
          target_type: 'pin',
          target_slug: this.pinSlug,
          method_type: 'up_vote'
        }
      })
      if (data.success) {
        this.$channel.$emit('pin-toggle', {
          type: 'like',
          result: data.result
        })
      } else {
        this.$toast.error('服务器休息中')
      }
    }
  }
}
</script>
