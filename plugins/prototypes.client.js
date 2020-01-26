import Vue from 'vue'
import { VToast, VAlert } from '@calibur/sakura'
import channel from '~/assets/js/channel'

Vue.use({
  install(Vue) {
    Vue.prototype.$channel = new Vue(channel)

    Vue.prototype.$alert = VAlert()

    Vue.prototype.$toast = VToast()
  }
})
