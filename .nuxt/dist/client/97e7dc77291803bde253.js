(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{228:function(e,t,n){},229:function(e,t,n){e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,i),l.l=!0,l.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(n,l,function(t){return e[t]}.bind(null,l));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=43)}({0:function(e,t,i){"use strict";function n(e,t,i,n,l,s,r,a){var o,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),r?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),l&&l.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},u._ssrRegister=o):l&&(o=a?function(){l.call(this,this.$root.$options.shadowRoot)}:l),o)if(u.functional){u._injectStyles=o;var c=u.render;u.render=function(e,t){return o.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,o):[o]}return{exports:e,options:u}}i.d(t,"a",(function(){return n}))},2:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var n=function(e){return"[object Array]"===Object.prototype.toString.call(e)}},43:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"v-radio",class:["v-radio--"+e.size,{"v-radio--circle":e.circle},e.inline?"v-radio--hoz":"v-radio--ver"]},[e.isSingleLabel?i("div",{staticClass:"v-radio__item",class:{"is-disabled":e.disabled,"is-selected":e.selected},on:{click:e._singleToggle}},[i("div",{staticClass:"v-radio__label"}),e._v(" "),e.label?i("div",{staticClass:"v-radio__text",domProps:{textContent:e._s(e.label)}}):e._e()]):i("div",{staticClass:"v-radio__list"},e._l(e.label,(function(t){return i("div",{key:e.pureText?t:t.value,staticClass:"v-radio__item",class:[{"is-disabled":e.disabled||!e.pureText&&t.disabled||e.max&&e.selected.length>=e.max&&(e.isSingleValue?e.selected===(e.pureText?t:t.value):-1===e.selected.indexOf(e.pureText?t:t.value))},{"is-selected":e.isSingleValue?e.selected===(e.pureText?t:t.value):-1!==e.selected.indexOf(e.pureText?t:t.value)}],on:{click:function(i){return e._multiToggle(t)}}},[i("div",{staticClass:"v-radio__label"}),e._v(" "),i("div",{staticClass:"v-radio__text",domProps:{textContent:e._s(e.pureText?t:t.label)}})])})),0)])};n._withStripped=!0,i(61);var l=i(2),s={name:"VRadio",props:{value:{type:[Boolean,Array,Number,String],default:!1},label:{type:[String,Array],default:""},size:{type:String,default:"normal",validator:function(e){return~["normal","small"].indexOf(e)}},max:{type:Number,default:0},min:{type:Number,default:0},disabled:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:function(){var e=!Object(l.a)(this.label);return{selected:this.value,pureText:!!e||"string"==typeof this.label[0],isSingleValue:!Object(l.a)(this.value),isSingleLabel:e}},watch:{value:function(e){this.selected=e},selected:function(e){this.$emit("input",e),this.$emit("change",e)}},methods:{_singleToggle:function(){this.disabled||this.readonly||(this.selected=!this.selected)},_multiToggle:function(e){if(!(this.disabled||this.readonly||!this.pureText&&e.disabled))if(this.isSingleValue)this.selected=this.pureText?e:e.value;else{var t=this.selected.indexOf(this.pureText?e:e.value);if(-1===t)this.max&&this.selected.length>=this.max||this.selected.push(this.pureText?e:e.value);else{if(this.min&&this.selected.length<=this.min)return;this.selected.splice(t,1)}}},checkAll:function(e){var t=this;this.isSingleLabel?this.selected=e:e?(this.selected=[],this.label.forEach((function(e){t.selected.push(t.pureText?e:e.value)}))):this.selected=[]},toggleAll:function(){this.isSingleLabel?this.selected=!this.selected:this.checkAll(!this.selected.length)}}},r=i(0),a=Object(r.a)(s,n,[],!1,null,null,null);a.options.__file="src/components/radio/radio.vue";var o=a.exports;t.default=o},61:function(e,t,i){}})},238:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},242:function(e,t,n){"use strict";var l=n(2),r=n(243).trim;l({target:"String",proto:!0,forced:n(248)("trim")},{trim:function(){return r(this)}})},243:function(e,t,n){var l=n(15),r="["+n(238)+"]",o=RegExp("^"+r+r+"*"),c=RegExp(r+r+"*$"),d=function(e){return function(t){var n=String(l(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:d(1),end:d(2),trim:d(3)}},248:function(e,t,n){var l=n(6),r=n(238);e.exports=function(e){return l((function(){return!!r[e]()||"​᠎"!="​᠎"[e]()||r[e].name!==e}))}},392:function(e,t,n){"use strict";n.r(t);n(51),n(38),n(242),n(228),n(49);var l=n(229),r=n.n(l),o=(n(226),n(227)),c=n.n(o),d=(n(239),n(240)),f={name:"CreateBangumiQuestion",components:{VForm:n.n(d).a,VField:c.a,VRadio:r.a},data:function(){return{loading:!1,title:"",answers:[{value:"",key:0},{value:"",key:1},{value:"",key:2},{value:"",key:3}],rightOpt:-1,rule:null}},computed:{slug:function(){return this.$route.query.slug},rightAnswerOpts:function(){var e=["A","B","C","D"];return this.answers.map((function(t,n){return{label:e[n],value:t.key}}))}},mounted:function(){this.getRule()},methods:{getRule:function(){var e=this;this.$axios.$get("v1/join/rule/show",{params:{slug:this.slug}}).then((function(data){e.rule=data})).catch()},handleSubmit:function(){var e=this;this.title.trim()?this.answers.map((function(e){return e.value})).filter((function(e){return e})).length<2?this.$toast.info("至少要有2个选项"):-1!==this.rightOpt?this.answers.filter((function(t){return t.key===e.rightOpt}))[0].value.trim()?(this.loading=!0,this.$axios.$post("v1/join/create",{title:this.title,answers:this.answers.map((function(e){return e.value})).filter((function(e){return e})),right_index:this.rightOpt,bangumi_slug:this.slug}).then((function(){e.$toast.success("提交成功"),e.title="",e.answers=[{value:"",key:0},{value:"",key:1},{value:"",key:2},{value:"",key:3}],e.rightOpt=-1})).catch((function(t){e.$toast.error(t.message),e.loading=!1}))):this.$toast.info("正确选项不能为空"):this.$toast.info("请选择正确选项"):this.$toast.info("题目不能为空")}},head:function(){return{title:"添加题目"}}},h=n(37),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VForm",{attrs:{id:"create-bangumi-question",full:"",loading:e.loading},on:{submit:e.handleSubmit}},[n("VField",{attrs:{"min-row":2,"max-len":50,placeholder:"请输入题目",label:"题目（需要审核通过之后才会加入题库）"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),e._l(e.answers,(function(t,l){return n("VField",{key:t.key,attrs:{label:"选项"+(l+1),placeholder:"请输入答案（20字以内）","max-len":20},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"item.value"}})})),e._v(" "),n("VField",{attrs:{label:"答案（题目为单选题，正确选项不能为空）"}},[n("VRadio",{attrs:{inline:"",label:e.rightAnswerOpts},model:{value:e.rightOpt,callback:function(t){e.rightOpt=t},expression:"rightOpt"}})],1)],2)}),[],!1,null,null,null);t.default=component.exports}}]);