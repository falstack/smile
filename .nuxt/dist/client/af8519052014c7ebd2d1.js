(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{228:function(t,e,n){"use strict";n(36),n(44),n(35),n(25),n(109),n(110),n(57),n(9),n(37),n(58),n(111),n(28),n(80);var r=n(59),o=(n(29),n(6)),c=n(229);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={data:function(){return{imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){t.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){t.getUpToken()}),18e5)},getUpToken:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(t);case 2:t.imageUploadToken=e.sent;case 3:case"end":return e.stop()}}),e)})))()},imageUploadRequest:function(data){var t,e,n;return data.key=(t={slug:this.currentUser.slug,file:data.file},e=t.slug,n=t.file,"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())),data.token=this.imageUploadToken,data},imageUploadResponse:function(t){try{return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t.data,{url:"".concat(this.imagePrefix).concat(t.data.url)})}catch(t){return{}}}}}},229:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(44),n(9),n(58);var r=function(t){return t.$axios.$get("v1/image/uptoken")},o=function(t,e){return t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}},234:function(t,e,n){"use strict";e.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",(function(){t.$toast.error("继续操作前请先登录").then((function(){t.$bridge.redirectTo({url:"/pages/user/login/index?from=".concat(encodeURIComponent(window.location.href))})}))}))}}},237:function(t,e,n){},238:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=35)}({0:function(t,e,n){"use strict";function r(t,e,n,r,i,s,o,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},2:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return"[object Array]"===Object.prototype.toString.call(t)}},35:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-uploader",class:{"v-uploader--custom":t.hasSlot,"v-uploader--single":1===t.limit}},[t._t("list",[t.fileList.length?n("div",{staticClass:"v-uploader__files"},t._l(t.fileList,(function(e,r){return n("div",{key:r+e.id,staticClass:"v-uploader__item"},[e.url?n("img",{staticClass:"v-uploader__item__poster",attrs:{src:e.url}}):t._e(),t._v(" "),"loading"!==e.status&&t.showClose?n("i",{staticClass:"bili-font ic_input_close v-uploader__item__cancel",on:{click:function(e){return t.remove(r)}}}):t._e(),t._v(" "),"loading"===e.status?n("div",{staticClass:"v-uploader__item__loading v-uploader__item__mask"},[n("div")]):t._e(),t._v(" "),"success"===e.status?n("div",{staticClass:"v-uploader__item__status is-success"},[n("i",{staticClass:"bili-font ic_success"})]):t._e(),t._v(" "),"error"===e.status?n("div",{staticClass:"v-uploader__item__mask"},[n("span",{domProps:{textContent:t._s(e.message)}}),t._v(" "),t._m(0,!0)]):t._e()])})),0):t._e()],{list:t.fileList}),t._v(" "),n("div",{staticClass:"v-uploader__action",on:{click:t._emitActionClick}},[n("input",{ref:"input",attrs:{multiple:1!==t.limit,disabled:t.isDisabled,accept:t.fileAccept,type:"file",name:"file"},on:{change:t._handleInputSelect}}),t._v(" "),n("div",{staticClass:"v-uploader__action__wrap"},[t._t("action",[t._m(1)])],2)])],2)};r._withStripped=!0;var i=n(2);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){if(!t)return[];var e=function(t){var e={};return"string"==typeof t?(e.url=t,e.status="success"):(t.id&&(e.id=t.id),t.url&&(e.url=t.url),t.url&&t.url.startsWith("http")?(e.status="success",e.data=t):e=o({},e,{},t)),o({},{id:Math.random().toString(36).substring(3,6),url:"",status:"",message:"",data:null,file:null},{},e)};return Object(i.a)(t)?t.map(e):e(t)}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(64);var d={name:"VUploader",props:{value:{type:[Array,Object,String],default:""},url:{type:String,default:"//api.bilibili.com/x/upload/web/image"},bucket:{type:String,default:""},disabled:{type:Boolean,default:!1},accept:{type:[String,Array],default:"image/*"},limit:{type:Number,default:1,validator:function(t){return t>=1}},oversize:{type:[String,Number],default:0,validator:function(t){return t>=0}},cookie:{type:Boolean,default:!0},auto:{type:Boolean,default:!0},http:{type:Function,default:function(t){if("undefined"!=typeof XMLHttpRequest){var e=new XMLHttpRequest,n=t.action;e.onerror=function(e){t.onError(e)},e.onload=function(){if(e.status<200||e.status>=400)return t.onError(function(t,e,n){var r;r=n.response?"".concat(n.response.error||n.response):n.responseText?"".concat(n.responseText):"fail to post ".concat(t," ").concat(n.status);var i=new Error(r);return i.status=n.status,i.method="post",i.url=t,i}(n,0,e));t.onSuccess(function(t){var e=t.responseText||t.response;if(!e)return e;try{return JSON.parse(e)}catch(t){return e}}(e))},e.open("POST",n,!0),t.withCredentials&&"withCredentials"in e&&(e.withCredentials=!0);var r={Accept:"application/json, text/plain, */*"};return"setRequestHeader"in e&&Object.keys(r).forEach((function(t){e.setRequestHeader(t,r[t])})),e.send(t.data),e}}},required:{type:Boolean,default:!1},transformRequest:{type:Function,default:function(t){return t.csrf=function(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),n=document.cookie.match(e);return n?unescape(n[2]):null}("bili_jct"),t}},transformResponse:{type:Function,default:function(t){return t&&0===t.code?{url:t.data.location,data:t.data}:t}}},data:function(){return f({},(t=this.value,e=this.limit,t?e>1?(r="array",n=Object(i.a)(t)?c(t.slice(0,e)):[c(t)]):"string"==typeof t?(r="string",n=t?[c(t)]:[]):t.url?(r="object",n=[c(t)]):(r="object",n=[]):(n=[],r=e>1?"array":"string"==typeof t?"string":"object"),{fileType:r,fileList:n}));var t,e,n,r},computed:{hasSlot:function(){return this.$slots.action||this.$slots.list},isDisabled:function(){return this.disabled||this.fileList.length>this.limit},showClose:function(){return!(this.required&&1===this.fileList.length)},fileAccept:function(){return"string"==typeof this.accept?this.accept:this.accept.map((function(t){return t.startsWith("image/")?t:"image/".concat(t)})).join(", ")}},watch:{fileList:{handler:function(t){var e=t.filter((function(t){return"success"===t.status}));if(e.length||!this.required)if("array"!==this.fileType){if("object"!==this.fileType)return this.$emit("input",e[0]?e[0].url:"");this.$emit("input",e[0]||{})}else this.$emit("input",e)},immediate:!0,deep:!0}},methods:{upload:function(){this._updateToServer(this.fileList)},images:function(){return this.fileList.filter((function(t){return"success"===t.status}))},remove:function(t){this.fileList.splice(t,1),this.$refs.input.value="",this.$emit("change")},_readImage:function(t){var e=this;Promise.all(t.map((function(t){return function(t){return new Promise((function(e){var n=new FileReader;n.onload=function(t){e(t.target.result)},n.readAsDataURL(t)}))}(t)}))).then((function(n){!function(t){1===e.limit?e.fileList=t.filter((function(t){return t})):e.fileList=e.fileList.concat(t.filter((function(t){return t}))),e.auto&&e._updateToServer(t)}(t.map((function(t,r){var i={file:t};return n[r]?(i.url=n[r],e.oversize&&e.oversize<t.size?(i.status="error",i.message="图片体积过大"):i.status="preview"):(i.status="error",i.message="图片读取失败"),c(i)})))}))},_emitActionClick:function(){this.$emit("click")},_updateImage:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.fileList.forEach((function(r){r.id===t&&(r.status=e,n&&Object.keys(n).forEach((function(t){r[t]=n[t]})))}))},_updateToServer:function(t){var e=this,n=t.filter((function(t){return"preview"===t.status}));n.length&&n.map((function(t){var n={file:t.file};return e.bucket&&(n.bucket=e.bucket),{id:t.id,form:e.transformRequest?e.transformRequest(n):n}})).map((function(t){var e=new FormData;return Object.keys(t.form).forEach((function(n){e.append(n,t.form[n])})),f({},t,{form:e})})).forEach((function(t){e._updateImage(t.id,"loading");var n={withCredentials:e.cookie,data:t.form,action:e.url,onSuccess:function(n){e._handleUploadSuccess(t,n)},onError:function(){e._handleUploadError(t)}};e.http(n)}))},_handleInputSelect:function(t){var e=t.target.files;if(!this.disabled&&e.length){var n=[].slice.call(e);n=n.slice(0,Math.max(this.limit-this.fileList.length,1)),this._readImage(n)}},_handleUploadError:function(t){this._updateImage(t.id,"error",{message:"上传失败"}),this.$emit("change")},_handleUploadSuccess:function(t,e){var n=this.transformResponse?this.transformResponse(e):e,r=t.id;n.url?this._updateImage(r,"success",n):this._updateImage(r,"error",{message:n.message}),this.$emit("change")}}},m=n(0),h=Object(m.a)(d,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-uploader__item__status is-error"},[e("i",{staticClass:"bili-font ic_error"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-uploader__btn"},[e("i",{staticClass:"bili-font ic_add"})])}],!1,null,null,null);h.options.__file="src/components/uploader/uploader.vue";var v=h.exports;e.default=v},64:function(t,e,n){}})},248:function(t,e,n){},295:function(t,e,n){"use strict";var r=n(248);n.n(r).a},371:function(t,e,n){"use strict";n.r(e);n(9),n(237),n(56);var r=n(238),o=n.n(r),c=(n(232),n(233)),l=n.n(c),f=(n(226),n(227)),d=n.n(f),m=n(234),h=n(228),v={name:"ProfileBangumi",components:{VButton:d.a,VField:l.a,VUploader:o.a},mixins:[m.a,h.a],asyncData:function(t){var e=t.app,n=t.error,r=t.query.slug;if(r)return e.$axios.$get("v1/bangumi/show",{params:{slug:r}}).then((function(t){return{bangumi:t}})).catch(n)},data:function(){return{bangumi:null,loading:!1}},methods:{avatarUploadSuccess:function(t,e){this.handleImageUploadSuccess(t,e),this.bangumi.avatar=t.data.url},handleSubmit:function(){var t=this;this.loading||(this.loading=!0,this.$axios.$post("v1/bangumi/update/profile",this.bangumi).then((function(){t.$toast.success("修改成功")})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.loading=!1})))}},head:function(){return{title:"编辑番剧"}}},_=(n(295),n(24)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bangumi?n("div",{attrs:{id:"profile-bangumi"}},[n("div",{ref:"form",attrs:{"label-position":"top","label-width":"80px"}},[n("div",{attrs:{label:"名称"}},[n("VField",{attrs:{disabled:""},model:{value:t.bangumi.name,callback:function(e){t.$set(t.bangumi,"name",e)},expression:"bangumi.name"}})],1),t._v(" "),n("div",{attrs:{label:"头像"}},[n("div",{staticClass:"avatar-field"},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.bangumi.avatar,{width:100})}}),t._v(" "),n("VUploader",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[n("VButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传头像")+"\n          ")])],1)],1)]),t._v(" "),n("div",{attrs:{label:"别名"}},[t._v("\n      "+t._s(t.bangumi.alias)+"\n    ")]),t._v(" "),n("div",{attrs:{label:"简介"}},[n("VField",{attrs:{type:"textarea",rows:"4",resize:"vertical"},model:{value:t.bangumi.intro,callback:function(e){t.$set(t.bangumi,"intro",e)},expression:"bangumi.intro"}})],1),t._v(" "),n("div",[n("VButton",{attrs:{type:"success",round:""},on:{click:t.handleSubmit}},[t._v("\n        提交\n      ")])],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);