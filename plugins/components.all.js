import Vue from 'vue'
import VueMixinStore from 'vue-mixin-store'
import { VLazyload } from '@calibur/sakura'

Vue.use(VLazyload)
Vue.component(VueMixinStore.FlowLoader.name, VueMixinStore.FlowLoader)
