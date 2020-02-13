(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{226:function(t,e,n){},227:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=28)}({0:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,c){var u,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId="data-v-"+o),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):i&&(u=c?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,e){return u.call(e),l(t,e)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:s}}n.d(e,"a",(function(){return r}))},14:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{class:t.classList,attrs:{disabled:t.disabled||t.loading},on:{click:t.handle}},[t.loading?n("em",{staticClass:"loading"}):t._e(),t._v(" "),t._t("default")],2)};function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r._withStripped=!0,n(22);var o={name:"VButton",props:{text:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},block:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},theme:{type:String,default:"primary",validator:function(t){return~["primary","success","info","warning","danger"].indexOf(t)}},size:{type:String,default:"medium",validator:function(t){return~["small","medium","large"].indexOf(t)}}},computed:{classList:function(){var t,e="v-button";return i(t={},e,!0),i(t,"".concat(e,"--text"),!!this.text),i(t,"".concat(e,"--icon"),!!this.icon),i(t,"".concat(e,"--plain"),!!this.plain),i(t,"".concat(e,"--block"),!!this.block),i(t,"".concat(e,"--loading"),!!this.loading),i(t,"".concat(e,"--disabled"),!!this.disabled),i(t,"".concat(e,"--").concat(this.theme),!!this.theme),i(t,"".concat(e,"--").concat(this.size),!!this.size),t}},methods:{handle:function(){this.loading||this.disabled||this.$emit("click")}}},a=n(0),c=Object(a.a)(o,r,[],!1,null,null,null);c.options.__file="src/components/button/button.vue",e.a=c.exports},22:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var r=n(14);e.default=r.a}})},230:function(t,e,n){"use strict";n(36),n(44),n(35),n(25),n(109),n(110),n(57),n(9),n(37),n(58),n(111),n(28),n(80);var r=n(59),o=(n(29),n(6)),c=n(231);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={data:function(){return{imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){t.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){t.getUpToken()}),18e5)},getUpToken:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(t);case 2:t.imageUploadToken=e.sent;case 3:case"end":return e.stop()}}),e)})))()},imageUploadRequest:function(data){var t,e,n;return data.key=(t={slug:this.currentUser.slug,file:data.file},e=t.slug,n=t.file,"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())),data.token=this.imageUploadToken,data},imageUploadResponse:function(t){try{return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t.data,{url:"".concat(this.imagePrefix).concat(t.data.url)})}catch(t){return{}}}}}},231:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(44),n(9),n(58);var r=function(t){return t.$axios.$get("v1/image/uptoken")},o=function(t,e){return t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}},236:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return r}))},246:function(t,e,n){},291:function(t,e,n){"use strict";var r=n(246);n.n(r).a},367:function(t,e,n){"use strict";n.r(e);n(36),n(44),n(35),n(25),n(61),n(161),n(113),n(112),n(60),n(109),n(110),n(57),n(81),n(28);var r=n(236),o=n(59),c=(n(241),n(56),n(242)),l=n.n(c),f=(n(226),n(227)),d=n.n(f),m=(n(228),n(229)),h=n.n(m),v=(n(239),n(240)),y=n.n(v),O=n(230);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={name:"CreateIdol",components:{VForm:y.a,VField:h.a,VButton:d.a,VUploader:l.a},mixins:[O.a],data:function(){return{tag:{id:"",avatar:"",name:"",alias:[],intro:""},rule:{alias:{type:"array",validator:function(t,e,n){e&&e.length||n(new Error("别名不能为空")),e.some((function(t){return/,/.test(t)}))&&n(new Error("别名不能包含英文逗号")),e.join("").length>100&&n(new Error("别名最多100个字符")),n()}}},alias:"",loading:!1}},methods:{removeAlias:function(t){this.tag.alias.splice(t,1)},addAlias:function(){this.alias&&(this.tag.alias.includes(this.alias)||(this.tag.alias.push(this.alias),this.alias=""))},fetch:function(){var t=this;this.tag.id&&this.$axios.$get("v1/bangumi/fetch",{params:{source_id:this.tag.id}}).then((function(e){e&&e.name&&(t.tag=j({},t.tag,{},e))})).catch((function(e){400===e.statusCode?(t.$toast.stop(),t.$alert({title:"角色已存在",message:"是否跳转到相应页面？",buttons:["取消","确定"],callback:function(n){n&&t.$bridge.navigateTo({url:"/pages/idol/show/index?slug=".concat(e.message)})}})):t.$toast.error(e.message)}))},handleSubmit:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.loading=!0,t.$axios.$post("v1/idol/create",j({},t.tag,{alias:[t.tag.name].concat(Object(r.a)(t.tag.alias)),bangumi_slug:t.$route.query.slug})).then((function(e){t.$toast.info("创建成功"),t.$bridge.navigateTo({url:"/pages/idol/show/index?slug=".concat(e)})})).catch((function(e){t.$toast.error(e.message),t.loading=!1})))}))}},head:function(){return{title:"创建角色"}}},w=(n(291),n(24)),component=Object(w.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VForm",{attrs:{id:"create-idol",form:t.tag,rule:t.rule,loading:t.loading},on:{submit:t.handleSubmit}},[n("VField",{attrs:{placeholder:"bgm.tv 的角色 id",label:"来源"},model:{value:t.tag.id,callback:function(e){t.$set(t.tag,"id",e)},expression:"tag.id"}},[n("VButton",{attrs:{slot:"after",loading:t.loading,type:"success",round:""},on:{click:t.fetch},slot:"after"},[t._v("\n      抓取资源\n    ")])],1),t._v(" "),n("VField",{attrs:{label:"名称"},model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}}),t._v(" "),n("VField",{attrs:{label:"头像"}},[n("VUploader",{attrs:{cookie:!1,required:"",url:t.imageUploadAction,accept:t.imageUploadAccept,"transform-request":t.imageUploadRequest,"transform-response":t.imageUploadResponse},model:{value:t.tag.avatar,callback:function(e){t.$set(t.tag,"avatar",e)},expression:"tag.avatar"}})],1),t._v(" "),n("VField",{attrs:{label:"别名"}},[n("div",{staticClass:"alias"},t._l(t.tag.alias,(function(e,r){return n("VButton",{key:e,attrs:{size:"small",plain:""}},[n("span",{domProps:{textContent:t._s(e)}}),t._v(" "),n("i",{staticClass:"bili-font ic_input_close",on:{click:function(e){return t.removeAlias(r)}}})])})),1),t._v(" "),n("VField",{attrs:{close:!1},scopedSlots:t._u([{key:"after",fn:function(){return[n("VButton",{on:{click:t.addAlias}},[t._v("\n          添加\n        ")])]},proxy:!0}]),model:{value:t.alias,callback:function(e){t.alias=e},expression:"alias"}})],1),t._v(" "),n("VField",{attrs:{label:"简介","min-row":4,"max-row":10,"max-len":500,counter:""},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);