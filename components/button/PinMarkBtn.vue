<template>
  <div>
    <div class="pin-mark-btn" @click="mark">
      <slot />
    </div>
    <VDialog v-model="showDialog" title="采集到专栏" width="420px" @submit="submit">
      <ul class="notebooks">
        <li v-for="item in options" :key="item.slug" class="oneline" @click="handleClick(item.slug)">
          <i :class="{ 'is-selected': selected === item.slug }" />
          <span v-text="item.name" />
        </li>
      </ul>
      <div class="create-btn">
        <CreateTagBtn title="新建专栏" parent="uh4f" @create="handleCreate" />
      </div>
    </VDialog>
  </div>
</template>

<script>
import VDialog from '~/components/common/Dialog'
import CreateTagBtn from '~/components/button/CreateTagBtn'

export default {
  name: 'PinMarkBtn',
  components: {
    VDialog,
    CreateTagBtn
  },
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    pinSlug: {
      type: String,
      required: true
    },
    userSlug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      count: +this.value,
      showDialog: false,
      newTags: [],
      selected: ''
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
    },
    options() {
      return this.newTags.concat(this.$store.state.global.myTags.filter(_ => _.slug === 'notebook')[0].children)
    }
  },
  watch: {
    value(val) {
      this.count = +val
    },
    count(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    mark() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        this.$toast.info('不能收藏自己的文章')
        return
      }
      if (this.state.mark_status_loading) {
        return
      }
      if (this.state.mark_status && !this.selected) {
        this.getMarkedTag()
      }
      this.$store.dispatch('global/getMyTags')
      this.showDialog = true
    },
    handleClick(slug) {
      this.selected = this.selected === slug ? '' : slug
    },
    handleCreate(data) {
      this.newTags.unshift(data)
      this.selected = data.slug
    },
    getMarkedTag() {
      this.$axios
        .$get('v1/pin/marked_tag', {
          params: {
            pin_slug: this.pinSlug,
            user_slug: this.user.slug
          }
        })
        .then((slug) => {
          this.selected = slug
        })
        .catch(() => {})
    },
    async submit() {
      const data = await this.$store.dispatch('social/toggle', {
        type: 'pin',
        slug: this.pinSlug,
        action: 'mark_status',
        params: {
          target_type: 'pin',
          target_slug: this.pinSlug,
          action_slug: this.selected,
          method_type: 'bookmark'
        }
      })
      if (data.success) {
        this.count += data.result
        this.showDialog = false
      } else {
        this.$toast.error('服务器休息中')
      }
    }
  }
}
</script>
