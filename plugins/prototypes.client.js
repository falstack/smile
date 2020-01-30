import Vue from 'vue'
import { VToast, VAlert, VCache } from '@calibur/sakura'
import channel from '~/assets/js/channel'
import bridge from '~/assets/js/bridge'

Vue.use({
  install(Vue) {
    Vue.prototype.$channel = new Vue(channel)

    Vue.prototype.$alert = VAlert()

    Vue.prototype.$toast = VToast()

    Vue.prototype.$cache = VCache

    Vue.prototype.$bridge = bridge()
  }
})
