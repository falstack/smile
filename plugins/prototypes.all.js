import Vue from 'vue'
import * as utils from '~/assets/js/utils'
import imageResize from '~/assets/js/imageResize'

export default ({ store }) => {
  Vue.use({
    install(Vue) {
      Vue.prototype.$utils = utils

      Vue.prototype.$resizeImage = imageResize

      Vue.prototype.$hasRole = store.getters.hasRole

      Vue.prototype.$isMine = store.getters.isMine
    }
  })
}
