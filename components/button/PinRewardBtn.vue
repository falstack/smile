<template>
  <div class="pin-reward-btn" @click="reward">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PinRewardBtn',
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
    },
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    reward() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        this.$toast.info('不能给自己投食')
        return
      }
      if (this.state.reward_status) {
        this.$toast.info('已经投过食了')
        return
      }
      if (!this.user.wallet_coin && !this.user.wallet_money) {
        this.$toast.info('没有足够的团子')
        return
      }
      if (this.state.reward_status_loading) {
        return
      }
      const hasVirtualCoin = !!this.user.wallet_coin
      this.$alert({
        title: '投食',
        message: hasVirtualCoin ? '向TA投食需要消耗你一个团子，是否继续?' : '向TA投食需要消耗你一个光玉，是否继续?',
        buttons: ['取消', '确定'],
        callback: async(index) => {
          if (!index) {
            return
          }
          const data = await this.$store.dispatch('social/toggle', {
            type: 'pin',
            slug: this.pinSlug,
            action: 'reward_status',
            params: {
              target_type: 'pin',
              target_slug: this.pinSlug,
              method_type: 'favorite'
            }
          })
          if (data.success) {
            this.$channel.$emit('pin-toggle', {
              type: 'reward',
              result: data.result
            })
            if (hasVirtualCoin) {
              this.$store.commit('UPDATE_USER_INFO', {
                key: 'wallet_coin',
                value: this.user.wallet_coin - 1
              })
            } else {
              this.$store.commit('UPDATE_USER_INFO', {
                key: 'wallet_money',
                value: this.user.wallet_money - 1
              })
            }
          } else {
            this.$toast.error('服务器休息中')
          }
        }
      })
    }
  }
}
</script>
