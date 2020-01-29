import Vue from 'vue'
import Cookies from 'js-cookie'
import { VToast, VAlert } from '@calibur/sakura'
import channel from '~/assets/js/channel'
import bridge from '~/assets/js/bridge'

Vue.use({
  install (Vue) {
    Vue.prototype.$cookie = Cookies

    Vue.prototype.$channel = new Vue(channel)

    Vue.prototype.$alert = VAlert()

    Vue.prototype.$toast = VToast()

    Vue.prototype.$bridge = bridge()
  }
})
