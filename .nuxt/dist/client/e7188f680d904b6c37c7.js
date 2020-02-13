(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{226:function(e,t,n){},227:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=28)}({0:function(e,t,n){"use strict";function r(e,t,n,r,i,o,a,l){var u,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId="data-v-"+o),a?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},s._ssrRegister=u):i&&(u=l?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(s.functional){s._injectStyles=u;var c=s.render;s.render=function(e,t){return u.call(t),c(e,t)}}else{var d=s.beforeCreate;s.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:s}}n.d(t,"a",(function(){return r}))},14:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.classList,attrs:{disabled:e.disabled||e.loading},on:{click:e.handle}},[e.loading?n("em",{staticClass:"loading"}):e._e(),e._v(" "),e._t("default")],2)};function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r._withStripped=!0,n(22);var o={name:"VButton",props:{text:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},block:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},theme:{type:String,default:"primary",validator:function(e){return~["primary","success","info","warning","danger"].indexOf(e)}},size:{type:String,default:"medium",validator:function(e){return~["small","medium","large"].indexOf(e)}}},computed:{classList:function(){var e,t="v-button";return i(e={},t,!0),i(e,"".concat(t,"--text"),!!this.text),i(e,"".concat(t,"--icon"),!!this.icon),i(e,"".concat(t,"--plain"),!!this.plain),i(e,"".concat(t,"--block"),!!this.block),i(e,"".concat(t,"--loading"),!!this.loading),i(e,"".concat(t,"--disabled"),!!this.disabled),i(e,"".concat(t,"--").concat(this.theme),!!this.theme),i(e,"".concat(t,"--").concat(this.size),!!this.size),e}},methods:{handle:function(){this.loading||this.disabled||this.$emit("click")}}},a=n(0),l=Object(a.a)(o,r,[],!1,null,null,null);l.options.__file="src/components/button/button.vue",t.a=l.exports},22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(14);t.default=r.a}})},230:function(e,t,n){"use strict";n(36),n(44),n(35),n(25),n(109),n(110),n(57),n(9),n(37),n(58),n(111),n(28),n(80);var r=n(59),o=(n(29),n(6)),l=n(231);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a={data:function(){return{imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var e=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){e.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var e=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){e.getUpToken()}),18e5)},getUpToken:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)(e);case 2:e.imageUploadToken=t.sent;case 3:case"end":return t.stop()}}),t)})))()},imageUploadRequest:function(data){var e,t,n;return data.key=(e={slug:this.currentUser.slug,file:data.file},t=e.slug,n=e.file,"".concat(t,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())),data.token=this.imageUploadToken,data},imageUploadResponse:function(e){try{return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},e.data,{url:"".concat(this.imagePrefix).concat(e.data.url)})}catch(e){return{}}}}}},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n(44),n(9),n(58);var r=function(e){return e.$axios.$get("v1/image/uptoken")},o=function(e,t){return e.$axios.$post("https://up.qbox.me",t,{"Content-Type":"multipart/form-data"})}},236:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var i=0,t=new Array(e.length);i<e.length;i++)t[i]=e[i];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return r}))},237:function(e,t,n){},238:function(e,t,n){e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=48)}({0:function(e,t,i){"use strict";function n(e,t,i,n,r,s,o,a){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):r&&(l=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:u}}i.d(t,"a",(function(){return n}))},2:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var n=function(e){return"[object Array]"===Object.prototype.toString.call(e)}},48:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"v-radio",class:["v-radio--"+e.size,{"v-radio--circle":e.circle},e.inline?"v-radio--hoz":"v-radio--ver"]},[e.isSingleLabel?i("div",{staticClass:"v-radio__item",class:{"is-disabled":e.disabled,"is-selected":e.selected},on:{click:e._singleToggle}},[i("div",{staticClass:"v-radio__label"}),e._v(" "),e.label?i("div",{staticClass:"v-radio__text",domProps:{textContent:e._s(e.label)}}):e._e()]):i("div",{staticClass:"v-radio__list"},e._l(e.label,(function(t){return i("div",{key:e.pureText?t:t.value,staticClass:"v-radio__item",class:[{"is-disabled":e.disabled||!e.pureText&&t.disabled||e.max&&e.selected.length>=e.max&&(e.isSingleValue?e.selected===(e.pureText?t:t.value):-1===e.selected.indexOf(e.pureText?t:t.value))},{"is-selected":e.isSingleValue?e.selected===(e.pureText?t:t.value):-1!==e.selected.indexOf(e.pureText?t:t.value)}],on:{click:function(i){return e._multiToggle(t)}}},[i("div",{staticClass:"v-radio__label"}),e._v(" "),i("div",{staticClass:"v-radio__text",domProps:{textContent:e._s(e.pureText?t:t.label)}})])})),0)])};n._withStripped=!0,i(70);var r=i(2),s={name:"VRadio",props:{value:{type:[Boolean,Array,Number,String],required:!0},label:{type:[String,Array],required:!0},size:{type:String,default:"normal",validator:function(e){return~["normal","small"].indexOf(e)}},max:{type:Number,default:0},min:{type:Number,default:0},disabled:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:function(){var e=!Object(r.a)(this.label);return{selected:this.value,pureText:!!e||"string"==typeof this.label[0],isSingleValue:!Object(r.a)(this.value),isSingleLabel:e}},watch:{value:function(e){this.selected=e},selected:function(e){this.$emit("input",e)}},methods:{_singleToggle:function(){this.disabled||this.readonly||(this.selected=!this.selected)},_multiToggle:function(e){if(!(this.disabled||this.readonly||!this.pureText&&e.disabled))if(this.isSingleValue)this.selected=this.pureText?e:e.value;else{var t=this.selected.indexOf(this.pureText?e:e.value);if(-1===t)this.max&&this.selected.length>=this.max||this.selected.push(this.pureText?e:e.value);else{if(this.min&&this.selected.length<=this.min)return;this.selected.splice(t,1)}}},checkAll:function(e){var t=this;this.isSingleValue||(this.isSingleLabel?this.selected=e:e?(this.selected=[],this.label.forEach((function(e){t.selected.push(t.pureText?e:e.value)}))):this.selected=[])},toggleAll:function(){this.isSingleValue||(this.isSingleLabel?this.selected=!this.selected:this.checkAll(!this.selected.length))}}},o=i(0),a=Object(o.a)(s,n,[],!1,null,null,null);a.options.__file="src/components/radio/radio.vue";var l=a.exports;t.default=l},70:function(e,t,i){}})},245:function(e,t,n){},290:function(e,t,n){"use strict";var r=n(245);n.n(r).a},366:function(e,t,n){"use strict";n.r(t);n(36),n(44),n(35),n(25),n(61),n(161),n(113),n(112),n(60),n(109),n(110),n(57),n(81),n(28);var r=n(236),o=n(59),l=(n(239),n(56),n(240)),c=n.n(l),d=(n(228),n(229)),f=n.n(d),h=(n(237),n(238)),m=n.n(h),v=(n(241),n(242)),y=n.n(v),_=(n(226),n(227)),x=n.n(_),O=n(230);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var T={name:"CreateBangumi",components:{VButton:x.a,VUploader:y.a,VRadio:m.a,VField:f.a,VForm:c.a},mixins:[O.a],data:function(){return{tag:{id:"",avatar:"",name:"",alias:[],intro:"",type:0},rule:{alias:{type:"array",validator:function(e,t,n){t&&t.length||n(new Error("别名不能为空")),t.some((function(e){return/,/.test(e)}))&&n(new Error("别名不能包含英文逗号")),t.join("").length>100&&n(new Error("别名最多100个字符")),n()}}},alias:"",loading:!1}},methods:{removeAlias:function(e){this.tag.alias.splice(e,1)},addAlias:function(){this.alias&&(this.tag.alias.includes(this.alias)||(this.tag.alias.push(this.alias),this.alias=""))},fetch:function(){var e=this;this.tag.id&&(this.$toast.loading("抓取中..."),this.$axios.$get("v1/bangumi/fetch",{params:{source_id:this.tag.id}}).then((function(t){t&&t.name&&(e.tag=S({},e.tag,{},t),e.$toast.stop())})).catch((function(t){400===t.statusCode?(e.$toast.stop(),e.$alert({title:"番剧已存在",message:"是否跳转到相应页面？",buttons:["取消","确定"],callback:function(n){n&&e.$bridge.navigateTo({url:"/pages/bangumi/show/index?slug=".concat(t.message)})}})):e.$toast.error(t.message)})))},handleSubmit:function(){var e=this;this.loading=!0,this.$axios.$post("v1/bangumi/create",S({},this.tag,{alias:[this.tag.name].concat(Object(r.a)(this.tag.alias))})).then((function(t){e.$toast.info("创建成功"),e.$bridge.navigateTo({url:"/pages/bangumi/show/index?slug=".concat(t)})})).catch((function(t){e.$toast.error(t.message),e.loading=!1}))}},head:function(){return{title:"创建分区"}}},k=(n(290),n(24)),component=Object(k.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VForm",{attrs:{id:"create-bangumi",form:e.tag,rule:e.rule,loading:e.loading},on:{submit:e.handleSubmit}},[n("VField",{attrs:{label:"类型",align:"center"}},[n("VRadio",{attrs:{inline:"",label:[{label:"动漫",value:0},{label:"游戏",value:1},{label:"其它",value:9}]},model:{value:e.tag.type,callback:function(t){e.$set(e.tag,"type",t)},expression:"tag.type"}})],1),e._v(" "),n("VField",{attrs:{placeholder:"bgm.tv 的番剧 id",label:"来源"},scopedSlots:e._u([{key:"after",fn:function(){return[n("VButton",{attrs:{loading:e.loading,size:"small"},on:{click:e.fetch}},[e._v("\n        抓取资源\n      ")])]},proxy:!0}]),model:{value:e.tag.id,callback:function(t){e.$set(e.tag,"id",t)},expression:"tag.id"}}),e._v(" "),n("VField",{attrs:{label:"名称"},model:{value:e.tag.name,callback:function(t){e.$set(e.tag,"name",t)},expression:"tag.name"}}),e._v(" "),n("VField",{attrs:{label:"头像"}},[n("VUploader",{attrs:{cookie:!1,required:"",url:e.imageUploadAction,accept:e.imageUploadAccept,"transform-request":e.imageUploadRequest,"transform-response":e.imageUploadResponse},model:{value:e.tag.avatar,callback:function(t){e.$set(e.tag,"avatar",t)},expression:"tag.avatar"}})],1),e._v(" "),n("VField",{attrs:{label:"别名"}},[n("div",{staticClass:"alias"},e._l(e.tag.alias,(function(t,r){return n("VButton",{key:t,attrs:{size:"small",plain:""}},[n("span",{domProps:{textContent:e._s(t)}}),e._v(" "),n("i",{staticClass:"bili-font ic_input_close",on:{click:function(t){return e.removeAlias(r)}}})])})),1),e._v(" "),n("VField",{attrs:{close:!1},scopedSlots:e._u([{key:"after",fn:function(){return[n("VButton",{on:{click:e.addAlias}},[e._v("\n          添加\n        ")])]},proxy:!0}]),model:{value:e.alias,callback:function(t){e.alias=t},expression:"alias"}})],1),e._v(" "),n("VField",{attrs:{label:"简介","min-row":4,"max-row":10,"max-len":500,counter:""},model:{value:e.tag.intro,callback:function(t){e.$set(e.tag,"intro",t)},expression:"tag.intro"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);