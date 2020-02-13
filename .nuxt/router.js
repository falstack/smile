import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4529324a = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _7f3bf50f = () => interopDefault(import('../pages/admin/create-bangumi.vue' /* webpackChunkName: "pages/admin/create-bangumi" */))
const _ab0c7f9c = () => interopDefault(import('../pages/admin/create-idol.vue' /* webpackChunkName: "pages/admin/create-idol" */))
const _4638e9c2 = () => interopDefault(import('../pages/admin/trial.vue' /* webpackChunkName: "pages/admin/trial" */))
const _e3476f72 = () => interopDefault(import('../pages/bangumi/edit.vue' /* webpackChunkName: "pages/bangumi/edit" */))
const _495bb132 = () => interopDefault(import('../pages/bangumi/join.vue' /* webpackChunkName: "pages/bangumi/join" */))
const _512784fc = () => interopDefault(import('../pages/bangumi/profile.vue' /* webpackChunkName: "pages/bangumi/profile" */))
const _7dccb0b9 = () => interopDefault(import('../pages/bangumi/relation.vue' /* webpackChunkName: "pages/bangumi/relation" */))
const _5c60a839 = () => interopDefault(import('../pages/bangumi/rule.vue' /* webpackChunkName: "pages/bangumi/rule" */))
const _2af6ca62 = () => interopDefault(import('../pages/bangumi/test.vue' /* webpackChunkName: "pages/bangumi/test" */))
const _536e32d5 = () => interopDefault(import('../pages/bangumi/top250.vue' /* webpackChunkName: "pages/bangumi/top250" */))
const _7e5c9ea9 = () => interopDefault(import('../pages/bangumi/trial.vue' /* webpackChunkName: "pages/bangumi/trial" */))
const _2392170a = () => interopDefault(import('../pages/idol/edit.vue' /* webpackChunkName: "pages/idol/edit" */))
const _6abe0402 = () => interopDefault(import('../pages/public/news.vue' /* webpackChunkName: "pages/public/news" */))
const _26dd70db = () => interopDefault(import('../pages/public/rank.vue' /* webpackChunkName: "pages/public/rank" */))
const _451bd3ab = () => interopDefault(import('../pages/public/rule.vue' /* webpackChunkName: "pages/public/rule" */))
const _a42e7e52 = () => interopDefault(import('../pages/user/edit.vue' /* webpackChunkName: "pages/user/edit" */))
const _c2becd2a = () => interopDefault(import('../pages/user/list.vue' /* webpackChunkName: "pages/user/list" */))
const _d26dfa24 = () => interopDefault(import('../pages/write/pin.vue' /* webpackChunkName: "pages/write/pin" */))
const _3b54ec99 = () => interopDefault(import('../pages/pin/_slug.vue' /* webpackChunkName: "pages/pin/_slug" */))
const _6f94ae5b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _4529324a,
    props: false,
    name: "admin"
  }, {
    path: "/admin/create-bangumi",
    component: _7f3bf50f,
    props: false,
    name: "admin-create-bangumi"
  }, {
    path: "/admin/create-idol",
    component: _ab0c7f9c,
    props: false,
    name: "admin-create-idol"
  }, {
    path: "/admin/trial",
    component: _4638e9c2,
    props: false,
    name: "admin-trial"
  }, {
    path: "/bangumi/edit",
    component: _e3476f72,
    props: false,
    name: "bangumi-edit"
  }, {
    path: "/bangumi/join",
    component: _495bb132,
    props: false,
    name: "bangumi-join"
  }, {
    path: "/bangumi/profile",
    component: _512784fc,
    props: false,
    name: "bangumi-profile"
  }, {
    path: "/bangumi/relation",
    component: _7dccb0b9,
    props: false,
    name: "bangumi-relation"
  }, {
    path: "/bangumi/rule",
    component: _5c60a839,
    props: false,
    name: "bangumi-rule"
  }, {
    path: "/bangumi/test",
    component: _2af6ca62,
    props: false,
    name: "bangumi-test"
  }, {
    path: "/bangumi/top250",
    component: _536e32d5,
    props: false,
    name: "bangumi-top250"
  }, {
    path: "/bangumi/trial",
    component: _7e5c9ea9,
    props: false,
    name: "bangumi-trial"
  }, {
    path: "/idol/edit",
    component: _2392170a,
    props: false,
    name: "idol-edit"
  }, {
    path: "/public/news",
    component: _6abe0402,
    props: false,
    name: "public-news"
  }, {
    path: "/public/rank",
    component: _26dd70db,
    props: false,
    name: "public-rank"
  }, {
    path: "/public/rule",
    component: _451bd3ab,
    props: false,
    name: "public-rule"
  }, {
    path: "/user/edit",
    component: _a42e7e52,
    props: false,
    name: "user-edit"
  }, {
    path: "/user/list",
    component: _c2becd2a,
    props: false,
    name: "user-list"
  }, {
    path: "/write/pin",
    component: _d26dfa24,
    props: false,
    name: "write-pin"
  }, {
    path: "/pin/:slug?",
    component: _3b54ec99,
    props: true,
    name: "pin-slug"
  }, {
    path: "/",
    component: _6f94ae5b,
    props: false,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
