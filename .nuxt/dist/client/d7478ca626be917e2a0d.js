(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{230:function(t,e,r){"use strict";r(35),r(54),r(55),r(31),r(104),r(105),r(76),r(10),r(34),r(75),r(106),r(32),r(77);var n,o=r(56),c=(r(36),r(6)),l=r(231);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={data:function(){return{imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){t.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){t.getUpToken()}),18e5)},getUpToken:(n=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)(this);case 2:this.imageUploadToken=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),imageUploadRequest:function(data){var t,e,r;return data.key=(t={slug:this.currentUser.slug,file:data.file},e=t.slug,r=t.file,"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(r.type.split("/").pop())),data.token=this.imageUploadToken,data},imageUploadResponse:function(t){try{return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t.data,{url:"".concat(this.imagePrefix).concat(t.data.url)})}catch(t){return{}}}}}},231:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));r(54),r(10),r(75);var n=function(t){return t.$axios.$get("v1/image/uptoken")},o=function(t,e){return t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}},232:function(t,e,r){var content=r(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("7c8f9b2e",content,!0,{sourceMap:!1})},233:function(t,e,r){(e=r(23)(!1)).push([t.i,'.v-uploader{font-size:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-uploader--custom{font-size:inherit}.v-uploader__action{display:inline-block;position:relative;overflow:hidden}.v-uploader__action input[type=file]{position:absolute;top:0;left:0;right:0;bottom:0;opacity:0}.v-uploader__action__wrap{pointer-events:none;display:inline}.v-uploader__btn{position:relative;display:inline-block;width:80px;height:80px;border-radius:4px;background-color:#fff;border:1px dashed #e5e5e5}body.night-mode .v-uploader__btn{background-color:#141414;border-color:#2c2c2c}.v-uploader__btn .ic_add{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:24px;color:#969799}body.night-mode .v-uploader__btn .ic_add{color:#8f8f91}.v-uploader__files+.v-uploader__action,.v-uploader__item{margin:0 8px 8px 0}.v-uploader__item{position:relative;display:inline-block;width:80px;height:80px;background-color:#f4f4f4}body.night-mode .v-uploader__item{background-color:#1f1f1f}.v-uploader__item__poster{display:block;-o-object-fit:cover;object-fit:cover;width:100%;height:100%;border-radius:4px}.v-uploader__item__cancel{position:absolute;top:-8px;right:-8px;display:block;width:18px;height:18px;font-size:18px;line-height:18px;text-align:center;border-radius:50%;z-index:1;color:#969799;background-color:#fff}body.night-mode .v-uploader__item__cancel{color:#8f8f91;background-color:#141414}.v-uploader__item__mask{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);border-radius:4px}.v-uploader__item__mask span{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-size:12px;text-align:center;width:100%}.v-uploader__item__loading div{position:absolute;left:50%;top:50%;margin-left:-10px;margin-top:-10px;width:20px;height:20px;border-radius:50%;-webkit-animation:skr 1.5s linear infinite;animation:skr 1.5s linear infinite;border:2px solid #fff;box-shadow:0 0 5px #fff}@keyframes skr{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes skr{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}.v-uploader__item__status{position:absolute;right:0;bottom:0;width:40px;height:40px;border-radius:4px;overflow:hidden}.v-uploader__item__status:before{content:"";position:absolute;left:20px;top:20px;width:100%;height:100%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.v-uploader__item__status.is-success:before{background-color:#6dc781}body.night-mode .v-uploader__item__status.is-success:before{background-color:#6cb97d}.v-uploader__item__status.is-error:before{background-color:#fa5a57}body.night-mode .v-uploader__item__status.is-error:before{background-color:#e85b59}.v-uploader__item__status .bili-font{position:absolute;display:block;font-size:14px;width:14px;height:14px;right:2px;bottom:2px;color:#fff;text-align:center}',""]),t.exports=e},234:function(t,e,r){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=29)}({0:function(t,e,r){"use strict";function n(t,e,r,n,i,s,o,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:c}}r.d(e,"a",(function(){return n}))},29:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-uploader",class:{"v-uploader--custom":t.hasSlot}},[t._t("list",[t.fileList.length?r("span",{staticClass:"v-uploader__files"},t._l(t.fileList,(function(e,n){return r("div",{key:n+e.id,staticClass:"v-uploader__item"},[e.url?r("img",{staticClass:"v-uploader__item__poster",attrs:{src:e.url}}):t._e(),t._v(" "),"loading"!==e.status?r("i",{staticClass:"bili-font ic_input_close v-uploader__item__cancel",on:{click:function(e){return t.remove(n)}}}):t._e(),t._v(" "),"loading"===e.status?r("div",{staticClass:"v-uploader__item__loading v-uploader__item__mask"},[r("div")]):t._e(),t._v(" "),"success"===e.status?r("div",{staticClass:"v-uploader__item__status is-success"},[r("i",{staticClass:"bili-font ic_success"})]):t._e(),t._v(" "),"error"===e.status?r("div",{staticClass:"v-uploader__item__mask"},[r("span",{domProps:{textContent:t._s(e.message)}}),t._v(" "),t._m(0,!0)]):t._e()])})),0):t._e()],{list:t.fileList}),t._v(" "),r("div",{staticClass:"v-uploader__action",on:{click:t._emitActionClick}},[r("input",{ref:"input",attrs:{multiple:1!==t.limit,disabled:t.isDisabled,accept:t.fileAccept,type:"file",name:"file"},on:{change:t._handleInputSelect}}),t._v(" "),r("div",{staticClass:"v-uploader__action__wrap"},[t._t("action",[t._m(1)])],2)])],2)};n._withStripped=!0;var i=r(3);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t){if(!t)return[];var e=function(t){var e={};return"string"==typeof t?(e.url=t,e.status="success"):(t.id&&(e.id=t.id),t.url&&(e.url=t.url),t.url&&t.url.startsWith("http")?(e.status="success",e.data=t):e=o({},e,{},t)),o({},{id:Math.random().toString(36).substring(3,6),url:"",status:"",message:"",data:null,file:null},{},e)};return Object(i.a)(t)?t.map(e):e(t)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r(56);var p={name:"VUploader",props:{value:{type:[Array,Object,String],default:""},url:{type:String,default:"//api.bilibili.com/x/upload/web/image"},bucket:{type:String,default:""},disabled:{type:Boolean,default:!1},accept:{type:[String,Array],default:"image/*"},limit:{type:Number,default:1,validator:function(t){return t>=1}},oversize:{type:[String,Number],default:0,validator:function(t){return t>=0}},cookie:{type:Boolean,default:!0},auto:{type:Boolean,default:!0},http:{type:Function,default:function(t){if("undefined"!=typeof XMLHttpRequest){var e=new XMLHttpRequest,r=t.action;e.onerror=function(e){t.onError(e)},e.onload=function(){if(e.status<200||e.status>=400)return t.onError(function(t,e,r){var n;n=r.response?"".concat(r.response.error||r.response):r.responseText?"".concat(r.responseText):"fail to post ".concat(t," ").concat(r.status);var i=new Error(n);return i.status=r.status,i.method="post",i.url=t,i}(r,0,e));t.onSuccess(function(t){var e=t.responseText||t.response;if(!e)return e;try{return JSON.parse(e)}catch(t){return e}}(e))},e.open("POST",r,!0),t.withCredentials&&"withCredentials"in e&&(e.withCredentials=!0);var n={Accept:"application/json, text/plain, */*"};return"setRequestHeader"in e&&Object.keys(n).forEach((function(t){e.setRequestHeader(t,n[t])})),e.send(t.data),e}}},transformRequest:{type:Function,default:function(t){return t.csrf=function(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),r=document.cookie.match(e);return r?unescape(r[2]):null}("bili_jct"),t}},transformResponse:{type:Function,default:function(t){return t&&0===t.code?{url:t.data.location,data:t.data}:t}}},data:function(){return{fileList:Object(i.a)(this.value)?c(this.value.slice(0,this.limit)):c(this.value)}},computed:{hasSlot:function(){return this.$slots.action||this.$slots.list},isDisabled:function(){return this.disabled||this.fileList.length>this.limit},fileAccept:function(){return"string"==typeof this.accept?this.accept:this.accept.map((function(t){return t.startsWith("image/")?t:"image/".concat(t)})).join(", ")}},watch:{value:function(t){this.fileList=t},fileList:function(t){this.$emit("input",t)}},methods:{upload:function(){this._updateToServer(this.fileList)},images:function(){return this.fileList.filter((function(t){return"success"===t.status}))},remove:function(t){this.fileList.splice(t,1),this.$refs.input.value="",this.$emit("change")},_readImage:function(t){var e=this;Promise.all(t.map((function(t){return function(t){return new Promise((function(e){var r=new FileReader;r.onload=function(t){e(t.target.result)},r.readAsDataURL(t)}))}(t)}))).then((function(r){!function(t){1===e.limit?e.fileList=t.filter((function(t){return t})):e.fileList=e.fileList.concat(t.filter((function(t){return t}))),e.auto&&e._updateToServer(t)}(t.map((function(t,n){var i={file:t};return r[n]?(i.url=r[n],e.oversize&&e.oversize<t.size?(i.status="error",i.message="图片体积过大"):i.status="preview"):(i.status="error",i.message="图片读取失败"),c(i)})))}))},_emitActionClick:function(){this.$emit("click")},_updateImage:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.fileList.forEach((function(n){n.id===t&&(n.status=e,r&&Object.keys(r).forEach((function(t){n[t]=r[t]})))}))},_updateToServer:function(t){var e=this,r=t.filter((function(t){return"preview"===t.status}));r.length&&r.map((function(t){var r={file:t.file};return e.bucket&&(r.bucket=e.bucket),{id:t.id,form:e.transformRequest?e.transformRequest(r):r}})).map((function(t){var e=new FormData;return Object.keys(t.form).forEach((function(r){e.append(r,t.form[r])})),function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t,{form:e})})).forEach((function(t){e._updateImage(t.id,"loading");var r={withCredentials:e.cookie,data:t.form,action:e.url,onSuccess:function(r){e._handleUploadSuccess(t,r)},onError:function(){e._handleUploadError(t)}};e.http(r)}))},_handleInputSelect:function(t){var e=t.target.files,r=this.limit-this.fileList.length;if(!(this.disabled||!e.length||r<=0)){var n=[].slice.call(e);n=n.slice(0,r),this._readImage(n)}},_handleUploadError:function(t){this._updateImage(t.id,"error",{message:"上传失败"}),this.$emit("change")},_handleUploadSuccess:function(t,e){var r=this.transformResponse?this.transformResponse(e):e,n=t.id;r.url?this._updateImage(n,"success",r):this._updateImage(n,"error",{message:r.message}),this.$emit("change")}}},f=r(0),m=Object(f.a)(p,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-uploader__item__status is-error"},[e("i",{staticClass:"bili-font ic_error"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-uploader__btn"},[e("i",{staticClass:"bili-font ic_add"})])}],!1,null,null,null);m.options.__file="src/components/uploader/uploader.vue";var h=m.exports;e.default=h},3:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){return"[object Array]"===Object.prototype.toString.call(t)}},56:function(t,e,r){}})},236:function(t,e,r){"use strict";e.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",(function(){t.$toast.error("继续操作前请先登录").then((function(){t.$bridge.redirectTo({url:"/pages/user/login/index?from=".concat(encodeURIComponent(window.location.href))})}))}))}}},261:function(t,e,r){var content=r(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("05aeb66c",content,!0,{sourceMap:!1})},297:function(t,e,r){"use strict";var n=r(261);r.n(n).a},298:function(t,e,r){(e=r(23)(!1)).push([t.i,"@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}#edit-idol{padding:15px}#edit-idol .avatar-field{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center}#edit-idol .avatar-field .avatar{width:100px;height:100px;border-radius:10%;margin-right:15px}",""]),t.exports=e},369:function(t,e,r){"use strict";r.r(e);r(10),r(237),r(53);var n=r(238),o=r.n(n),c=(r(232),r(234)),l=r.n(c),d=(r(228),r(229)),f=r.n(d),m=r(236),h=r(230),_={name:"EditBangumi",components:{VButton:f.a,VUploader:l.a,VField:o.a},mixins:[m.a,h.a],asyncData:function(t){var e=t.app,r=t.error,n=t.query.slug;if(n)return e.$axios.$get("v1/idol/show",{params:{slug:n}}).then((function(t){return{idol:t}})).catch(r)},data:function(){return{idol:null,loading:!1}},methods:{avatarUploadSuccess:function(t,e){this.handleImageUploadSuccess(t,e),this.idol.avatar=t.data.url},handleSubmit:function(){var t=this;this.loading||(this.loading=!0,this.$axios.$post("v1/idol/update",this.idol).then((function(){t.$toast.success("修改成功")})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.loading=!1})))}},head:{title:"编辑偶像"}},v=(r(297),r(33)),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.idol?r("div",{attrs:{id:"edit-idol"}},[r("div",{ref:"form",attrs:{"label-position":"top","label-width":"80px"}},[r("div",{attrs:{label:"名称"}},[r("VField",{attrs:{disabled:""},model:{value:t.idol.name,callback:function(e){t.$set(t.idol,"name",e)},expression:"idol.name"}})],1),t._v(" "),r("div",{attrs:{label:"头像"}},[r("div",{staticClass:"avatar-field"},[r("img",{staticClass:"avatar",attrs:{src:t.$resize(t.idol.avatar,{width:100})}}),t._v(" "),r("VUploader",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[r("VButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传头像")+"\n          ")])],1)],1)]),t._v(" "),r("div",{attrs:{label:"别名"}},[t._v("\n      "+t._s(t.idol.alias)+"\n    ")]),t._v(" "),r("div",{attrs:{label:"简介"}},[r("VField",{attrs:{type:"textarea",rows:"4",resize:"vertical"},model:{value:t.idol.intro,callback:function(e){t.$set(t.idol,"intro",e)},expression:"idol.intro"}})],1),t._v(" "),r("div",[r("VButton",{on:{click:t.handleSubmit}},[t._v("\n        提交\n      ")])],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);