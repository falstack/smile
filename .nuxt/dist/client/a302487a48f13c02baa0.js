(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{220:function(t,e,n){},221:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=28)}({0:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,l){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId="data-v-"+o),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):i&&(u=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(s.functional){s._injectStyles=u;var c=s.render;s.render=function(t,e){return u.call(e),c(t,e)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:s}}n.d(e,"a",(function(){return r}))},14:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.classList,attrs:{disabled:t.disabled||t.loading},on:{click:t.handle}},[t.loading?n("em",{staticClass:"loading"}):t._e(),t._v(" "),t._t("default")],2)};function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r._withStripped=!0,n(22);var o={name:"VButton",props:{text:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},block:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},theme:{type:String,default:"primary",validator:function(t){return~["primary","success","info","warning","danger"].indexOf(t)}},size:{type:String,default:"medium",validator:function(t){return~["small","medium","large"].indexOf(t)}}},computed:{classList:function(){var t,e="v-button";return i(t={},e,!0),i(t,"".concat(e,"--text"),!!this.text),i(t,"".concat(e,"--icon"),!!this.icon),i(t,"".concat(e,"--plain"),!!this.plain),i(t,"".concat(e,"--block"),!!this.block),i(t,"".concat(e,"--loading"),!!this.loading),i(t,"".concat(e,"--disabled"),!!this.disabled),i(t,"".concat(e,"--").concat(this.theme),!!this.theme),i(t,"".concat(e,"--").concat(this.size),!!this.size),t}},methods:{handle:function(){this.loading||this.disabled||this.$emit("click")}}},a=n(0),l=Object(a.a)(o,r,[],!1,null,null,null);l.options.__file="src/components/button/button.vue",e.a=l.exports},22:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var r=n(14);e.default=r.a}})},228:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},237:function(t,e,n){var r=n(15),o="["+n(228)+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(l,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},239:function(t,e,n){"use strict";var r=n(8),o=n(4),l=n(81),c=n(16),d=n(11),f=n(23),h=n(161),m=n(60),_=n(5),v=n(79),y=n(61).f,$=n(29).f,w=n(13).f,x=n(237).trim,N=o.Number,k=N.prototype,C="Number"==f(v(k)),I=function(t){var e,n,r,o,l,c,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=x(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(c=(l=f.slice(2)).length,d=0;d<c;d++)if((code=l.charCodeAt(d))<48||code>o)return NaN;return parseInt(l,r)}return+f};if(l("Number",!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var A,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(C?_((function(){k.valueOf.call(n)})):"Number"!=f(n))?h(new N(I(e)),n,S):I(e)},T=r?y(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;T.length>E;E++)d(N,A=T[E])&&!d(S,A)&&w(S,A,$(N,A));S.prototype=k,k.constructor=S,c(o,"Number",S)}},244:function(t,e,n){t.exports={"qa-item":"qa-item_3N5Xs",qaItem:"qa-item_3N5Xs",header:"header_AMObU",order:"order_2Lrmw",main:"main_2bbkH",answer:"answer_12nXM","is-right":"is-right_2Bjlo",isRight:"is-right_2Bjlo","is-selected":"is-selected_1s5R_",isSelected:"is-selected_1s5R_",footer:"footer_3zt4D",intro:"intro_1Z2UY",control:"control_3tb4E"}},286:function(t,e,n){"use strict";n(239),n(56),n(10),n(76),n(220),n(55);var r=n(221),o={name:"QaItem",components:{VButton:n.n(r).a},props:{item:{type:Object,required:!0},order:{type:Number,required:!0},isTrial:{type:Boolean,default:!1},extra:{type:Object,default:function(){}}},data:function(){var t=this;return{rightAnswer:function(){for(var e=t.item.id.toString(),n=t.extra.answers||{},r="",o=Object.keys(n),i=0;i<o.length;i++)if(o[i].toString()===e){r=n[o[i]];break}return r}(),loading:!1}},methods:{changeRightAnswer:function(t){this.isTrial&&(this.rightAnswer=t)},answerNumber:function(t){return["A","B","C","D"][t]},handleAnswerClick:function(t){this.isTrial||(this.rightAnswer=t,this.$emit("select",{questionId:this.item.id,answerId:t}))},handleUserClick:function(){this.$bridge.navigateTo({url:"/pages/user/show/index?slug=".concat(this.item.user.slug)})},handleBangumiClick:function(){this.$bridge.navigateTo({url:"/pages/bangumi/show/index?slug=".concat(this.item.bangumi.slug)})},handleDelete:function(){var t=this;this.loading||this.$alert({title:"提示",message:"删除后不可恢复，确认要删除吗？",buttons:["取消","确定"],callback:function(e){e&&(t.loading=!0,t.$axios.$post("v1/join/delete",{id:t.item.id}).then((function(){t.$toast.success("删除成功"),t.$emit("delete",t.item.id)})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.loading=!1})))}})},handlePass:function(){var t=this;this.loading||(this.loading=!0,this.$axios.$post("v1/join/recommend",{id:this.item.id,right_id:this.rightAnswer}).then((function(){t.$toast.success("入库成功"),t.$emit("delete",t.item.id)})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.loading=!1})))}}},l=n(290),c=n(35);var component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.qaItem},[n("div",{class:t.$style.header},[n("div",{class:t.$style.order,domProps:{textContent:t._s(t.order)}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.item.title)}})]),t._v(" "),n("div",{class:t.$style.main},t._l(t.item.answers,(function(e,r,o){var l,c;return n("div",{key:r,class:[t.$style.answer,(l={},l[t.$style.isSelected]=!t.isTrial&&r===t.rightAnswer,l)],on:{click:function(e){return t.handleAnswerClick(r)}}},[n("div",{class:[t.$style.order,(c={},c[t.$style.isRight]=t.isTrial&&r===t.rightAnswer,c)],domProps:{textContent:t._s(t.answerNumber(o))},on:{click:function(e){return t.changeRightAnswer(r)}}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(e)}})])})),0),t._v(" "),n("div",{class:t.$style.footer},[n("div",{class:t.$style.intro},[n("div",{staticClass:"oneline"},[n("span",[t._v("出题人：")]),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.user.nickname)},on:{click:t.handleUserClick}})]),t._v(" "),t.isTrial?n("div",{staticClass:"oneline"},[n("span",[t._v("番の剧：")]),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.bangumi.name)},on:{click:t.handleBangumiClick}})]):t._e()]),t._v(" "),t.isTrial?n("div",{class:t.$style.control},[n("VButton",{attrs:{size:"small",theme:"danger",text:""},on:{click:t.handleDelete}},[t._v("\n        拒绝\n      ")]),t._v(" "),n("VButton",{attrs:{size:"small",theme:"success"},on:{click:t.handlePass}},[t._v("\n        通过\n      ")])],1):t._e()])])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.a=component.exports},290:function(t,e,n){"use strict";var r=n(244),o=n.n(r);e.default=o.a}}]);