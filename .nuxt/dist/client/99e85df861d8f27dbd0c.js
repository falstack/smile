(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{226:function(t,n,e){},227:function(t,n,e){t.exports=function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=28)}({0:function(t,n,e){"use strict";function o(t,n,e,o,i,r,a,c){var u,s="function"==typeof t?t.options:t;if(n&&(s.render=n,s.staticRenderFns=e,s._compiled=!0),o&&(s.functional=!0),r&&(s._scopeId="data-v-"+r),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):i&&(u=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,n){return u.call(n),l(t,n)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:s}}e.d(n,"a",(function(){return o}))},14:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{class:t.classList,attrs:{disabled:t.disabled||t.loading},on:{click:t.handle}},[t.loading?e("em",{staticClass:"loading"}):t._e(),t._v(" "),t._t("default")],2)};function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}o._withStripped=!0,e(22);var r={name:"VButton",props:{text:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},block:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},theme:{type:String,default:"primary",validator:function(t){return~["primary","success","info","warning","danger"].indexOf(t)}},size:{type:String,default:"medium",validator:function(t){return~["small","medium","large"].indexOf(t)}}},computed:{classList:function(){var t,n="v-button";return i(t={},n,!0),i(t,"".concat(n,"--text"),!!this.text),i(t,"".concat(n,"--icon"),!!this.icon),i(t,"".concat(n,"--plain"),!!this.plain),i(t,"".concat(n,"--block"),!!this.block),i(t,"".concat(n,"--loading"),!!this.loading),i(t,"".concat(n,"--disabled"),!!this.disabled),i(t,"".concat(n,"--").concat(this.theme),!!this.theme),i(t,"".concat(n,"--").concat(this.size),!!this.size),t}},methods:{handle:function(){this.loading||this.disabled||this.$emit("click")}}},a=e(0),c=Object(a.a)(r,o,[],!1,null,null,null);c.options.__file="src/components/button/button.vue",n.a=c.exports},22:function(t,n,e){},28:function(t,n,e){"use strict";e.r(n);var o=e(14);n.default=o.a}})},236:function(t,n,e){"use strict";n.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",(function(){t.$toast.error("继续操作前请先登录").then((function(){t.$bridge.redirectTo({url:"/pages/user/login/index?from=".concat(encodeURIComponent(window.location.href))})}))}))}}},249:function(t,n,e){},292:function(t,n,e){"use strict";var o=e(249);e.n(o).a},366:function(t,n,e){"use strict";e.r(n);e(57),e(9),e(226),e(56);var o=e(227),r=e.n(o),c=e(236),l={name:"BangumiJoin",components:{VButton:r.a},mixins:[c.a],data:function(){return{showLaunch:!0,showCreate:!1,rule:null,sheet:null,bangumi:null,questions:[],selected:{},loading:!1}},computed:{slug:function(){return this.$route.query.slug}},mounted:function(){this.getBangumiInfo(),this.getBangumiRule()},methods:{getBangumiRule:function(){var t=this;this.$axios.$get("v1/join/rule/show",{params:{slug:this.slug}}).then((function(data){t.rule=data})).catch((function(n){t.$toast.error(n.message)}))},getBangumiInfo:function(){var t=this;this.$axios.$get("v1/bangumi/show",{params:{slug:this.slug}}).then((function(data){t.bangumi=data})).catch((function(n){t.$toast.error(n.message)}))},handleBegin:function(){var t=this;this.$axios.$post("v1/join/begin",{slug:this.slug}).then((function(n){"reject"===n?t.$toast.info("该分区还未开放"):"resolve"===n?t.$toast.info("你已加入该分区"):"no_rule"===n?t.$toast.info("还没有答题规则"):"no_question"===n?(t.$toast.info("分区题目数量不足"),t.showCreate=!0):"pending"===n&&t.getQuestions()})).catch((function(n){t.$toast.error(n.message)}))},getQuestions:function(){var t=this;this.$axios.$get("v1/join/list",{params:{slug:this.slug}}).then((function(data){t.selected=data.extra.answers||{},t.questions=data.result,t.showLaunch=!1})).catch((function(n){t.$toast.error(n.message)}))},handleSelect:function(t,n){var e=this;this.$axios.$post("v1/join/vote",{question_id:t,answer_id:n}).then((function(){e.selected[t]=n})).catch((function(t){e.$toast.error(t.message)}))},submit:function(){var t=this;Object.keys(this.selected).length<this.questions.length?this.$toast.info("请先做完所有题目"):this.loading||(this.loading=!0,this.$axios.$post("v1/join/submit",{slug:this.slug}).then((function(n){t.$toast.info(n).then((function(){t.$bridge.redirectTo({url:"/pages/bangumi/show/index?slug=".concat(t.slug)})}))})).catch((function(n){t.$toast.error(n.message)})).finally((function(){t.loading=!1})))}},head:function(){return{title:"答题"}}},d=(e(292),e(24)),component=Object(d.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"bangumi-join"}},[t.showLaunch?e("div",{staticClass:"launch"},[t.bangumi?[e("img",{staticClass:"avatar",attrs:{src:t.$resize(t.bangumi.avatar,{width:150}),alt:""}}),t._v(" "),e("p",[t._v("加入《"+t._s(t.bangumi.name)+"》")])]:t._e(),t._v(" "),t.rule?[e("ul",[e("li",[t._v("该番剧出题："+t._s(t.rule.question_count)+"道")]),t._v(" "),e("li",[t._v("正确率需要："+t._s(t.rule.right_rate)+"%")])])]:t._e(),t._v(" "),e("VButton",{attrs:{type:"success",round:""},on:{click:t.handleBegin}},[t._v("\n      开始答题\n    ")]),t._v(" "),t.showCreate?e("NLink",{attrs:{to:"/bangumi/test?slug="+t.slug}},[t._v("\n      出题\n    ")]):t._e()],2):[e("ol",{staticClass:"question-list"},t._l(t.questions,(function(n){return e("li",{key:n.id,staticClass:"question-item"},[e("p",{staticClass:"question",domProps:{innerHTML:t._s(n.title)}}),t._v(" "),e("ol",{staticClass:"answers"},t._l(n.answers,(function(o,r){return e("li",{key:r,class:{"is-selected":t.selected[n.id]&&t.selected[n.id]===r},on:{click:function(e){return t.handleSelect(n.id,r)}}},[e("span",{domProps:{innerHTML:t._s(o)}})])})),0),t._v(" "),e("div",{staticClass:"controls"},[e("div",[e("span",[t._v("出题人：")]),t._v(" "),e("span",{domProps:{textContent:t._s(n.user.nickname)}})])])])})),0),t._v(" "),t.questions.length?e("footer",{staticClass:"qa-footer",attrs:{slot:"footer"},slot:"footer"},[e("VButton",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"success",round:""},on:{click:t.submit}},[t._v("\n        交卷\n      ")])],1):t._e()]],2)}),[],!1,null,null,null);n.default=component.exports}}]);