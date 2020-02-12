(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{249:function(t,e,n){},250:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=39)}({0:function(t,e,n){"use strict";function o(t,e,n,o,i,r,s,l){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=a):i&&(a=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),a)if(c.functional){c._injectStyles=a;var u=c.render;c.render=function(t,e){return a.call(e),u(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,a):[a]}return{exports:t,options:c}}n.d(e,"a",(function(){return o}))},39:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"v-toggle",class:[{"v-toggle--disabled":this.disabled,"v-toggle--loading":this.loading},[this.isAndroid?"v-toggle--md":"v-toggle--ios"],[this.selected?"v-toggle--on":"v-toggle--off"]],on:{click:this.handle}},[e("span",{staticClass:"v-toggle__core"},[this.loading?e("svg",{attrs:{viewBox:"25 25 50 50"}},[e("circle",{attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]):this._e()])])};o._withStripped=!0,n(57);var i={name:"VToggle",props:{value:{type:Boolean,required:!0},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},confirm:{type:Function,default:null}},data:function(){return{selected:this.value}},computed:{isAndroid:function(){return!!this.$sakura&&this.$sakura.md}},watch:{value:function(t){this.selected=t},selected:function(t){this.$emit("input",t)}},methods:{handle:function(){var t=this;if(!this.disabled&&!this.loading)if(this.confirm){var e=this.confirm();e?e.then((function(){t.change()})):this.change()}else this.change()},change:function(){this.selected=!this.selected,this.$emit("change",this.selected)}}},r=n(0),s=Object(r.a)(i,o,[],!1,null,null,null);s.options.__file="src/components/toggle/toggle.vue";var l=s.exports;e.default=l},57:function(t,e,n){}})},251:function(t,e,n){},294:function(t,e,n){"use strict";var o=n(251);n.n(o).a},370:function(t,e,n){"use strict";n.r(e);n(226),n(56);var o=n(227),r=n.n(o),l=(n(232),n(233)),c=n.n(l),d=(n(249),n(250)),f={name:"EditBangumi",components:{VToggle:n.n(d).a,VField:c.a,VButton:r.a},asyncData:function(t){var e=t.app,n=t.error,o=t.query.slug;if(o)return e.$axios.$get("v1/bangumi/show",{params:{slug:o}}).then((function(t){return{bangumi:t}})).catch(n)},data:function(){return{bangumi:null}},methods:{handleParentChange:function(t){this.$axios.$post("v1/bangumi/update/set_parent",{bangumi_slug:this.bangumi.slug,result:t})},handleSetParent:function(){var t=this;this.$axios.$post("v1/bangumi/update/set_parent",{child_slug:this.bangumi.slug,parent_slug:this.bangumi.parent_slug}).then((function(){t.$toast.info("设置成功")})).catch((function(e){t.$toast.error(e.message)}))}},head:function(){return{title:"番剧关系"}}},h=(n(294),n(24)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bangumi?n("div",{attrs:{id:"relation-bangumi"}},[n("p",[n("span",[t._v("作为父节点：")]),t._v(" "),n("VToggle",{on:{change:t.handleParentChange},model:{value:t.bangumi.is_parent,callback:function(e){t.$set(t.bangumi,"is_parent",e)},expression:"bangumi.is_parent"}})],1),t._v(" "),n("p",[n("span",[t._v("设置父节点：")]),t._v(" "),n("VField",{model:{value:t.bangumi.parent_slug,callback:function(e){t.$set(t.bangumi,"parent_slug",e)},expression:"bangumi.parent_slug"}}),t._v(" "),n("VButton",{on:{click:t.handleSetParent}},[t._v("\n      确认\n    ")])],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);