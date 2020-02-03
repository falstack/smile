import Vue from 'vue'
import VueMixinStore from 'vue-mixin-store'
import lazyload from '~/directives/lazyload'
import Image from '~/components/Image'

Vue.use(lazyload)
Vue.component(VueMixinStore.FlowLoader.name, VueMixinStore.FlowLoader)
Vue.component(Image.name, Image)
