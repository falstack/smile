(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{228:function(t,e,r){"use strict";r(36),r(44),r(35),r(25),r(109),r(110),r(57),r(9),r(37),r(58),r(111),r(28),r(80);var n=r(59),o=(r(29),r(6)),c=r(229);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a={data:function(){return{imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){t.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){t.getUpToken()}),18e5)},getUpToken:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(t);case 2:t.imageUploadToken=e.sent;case 3:case"end":return e.stop()}}),e)})))()},imageUploadRequest:function(data){var t,e,r;return data.key=(t={slug:this.currentUser.slug,file:data.file},e=t.slug,r=t.file,"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(r.type.split("/").pop())),data.token=this.imageUploadToken,data},imageUploadResponse:function(t){try{return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t.data,{url:"".concat(this.imagePrefix).concat(t.data.url)})}catch(t){return{}}}}}},229:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));r(44),r(9),r(58);var n=function(t){return t.$axios.$get("v1/image/uptoken")},o=function(t,e){return t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}},236:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",(function(){return n}))},237:function(t,e,r){},238:function(t,e,r){t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=35)}({0:function(t,e,r){"use strict";function n(t,e,r,n,i,s,o,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}r.d(e,"a",(function(){return n}))},2:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){return"[object Array]"===Object.prototype.toString.call(t)}},35:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-uploader",class:{"v-uploader--custom":t.hasSlot,"v-uploader--single":1===t.limit}},[t._t("list",[t.fileList.length?r("div",{staticClass:"v-uploader__files"},t._l(t.fileList,(function(e,n){return r("div",{key:n+e.id,staticClass:"v-uploader__item"},[e.url?r("img",{staticClass:"v-uploader__item__poster",attrs:{src:e.url}}):t._e(),t._v(" "),"loading"!==e.status&&t.showClose?r("i",{staticClass:"bili-font ic_input_close v-uploader__item__cancel",on:{click:function(e){return t.remove(n)}}}):t._e(),t._v(" "),"loading"===e.status?r("div",{staticClass:"v-uploader__item__loading v-uploader__item__mask"},[r("div")]):t._e(),t._v(" "),"success"===e.status?r("div",{staticClass:"v-uploader__item__status is-success"},[r("i",{staticClass:"bili-font ic_success"})]):t._e(),t._v(" "),"error"===e.status?r("div",{staticClass:"v-uploader__item__mask"},[r("span",{domProps:{textContent:t._s(e.message)}}),t._v(" "),t._m(0,!0)]):t._e()])})),0):t._e()],{list:t.fileList}),t._v(" "),r("div",{staticClass:"v-uploader__action",on:{click:t._emitActionClick}},[r("input",{ref:"input",attrs:{multiple:1!==t.limit,disabled:t.isDisabled,accept:t.fileAccept,type:"file",name:"file"},on:{change:t._handleInputSelect}}),t._v(" "),r("div",{staticClass:"v-uploader__action__wrap"},[t._t("action",[t._m(1)])],2)])],2)};n._withStripped=!0;var i=r(2);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t){if(!t)return[];var e=function(t){var e={};return"string"==typeof t?(e.url=t,e.status="success"):(t.id&&(e.id=t.id),t.url&&(e.url=t.url),t.url&&t.url.startsWith("http")?(e.status="success",e.data=t):e=o({},e,{},t)),o({},{id:Math.random().toString(36).substring(3,6),url:"",status:"",message:"",data:null,file:null},{},e)};return Object(i.a)(t)?t.map(e):e(t)}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r(64);var d={name:"VUploader",props:{value:{type:[Array,Object,String],default:""},url:{type:String,default:"//api.bilibili.com/x/upload/web/image"},bucket:{type:String,default:""},disabled:{type:Boolean,default:!1},accept:{type:[String,Array],default:"image/*"},limit:{type:Number,default:1,validator:function(t){return t>=1}},oversize:{type:[String,Number],default:0,validator:function(t){return t>=0}},cookie:{type:Boolean,default:!0},auto:{type:Boolean,default:!0},http:{type:Function,default:function(t){if("undefined"!=typeof XMLHttpRequest){var e=new XMLHttpRequest,r=t.action;e.onerror=function(e){t.onError(e)},e.onload=function(){if(e.status<200||e.status>=400)return t.onError(function(t,e,r){var n;n=r.response?"".concat(r.response.error||r.response):r.responseText?"".concat(r.responseText):"fail to post ".concat(t," ").concat(r.status);var i=new Error(n);return i.status=r.status,i.method="post",i.url=t,i}(r,0,e));t.onSuccess(function(t){var e=t.responseText||t.response;if(!e)return e;try{return JSON.parse(e)}catch(t){return e}}(e))},e.open("POST",r,!0),t.withCredentials&&"withCredentials"in e&&(e.withCredentials=!0);var n={Accept:"application/json, text/plain, */*"};return"setRequestHeader"in e&&Object.keys(n).forEach((function(t){e.setRequestHeader(t,n[t])})),e.send(t.data),e}}},required:{type:Boolean,default:!1},transformRequest:{type:Function,default:function(t){return t.csrf=function(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),r=document.cookie.match(e);return r?unescape(r[2]):null}("bili_jct"),t}},transformResponse:{type:Function,default:function(t){return t&&0===t.code?{url:t.data.location,data:t.data}:t}}},data:function(){return f({},(t=this.value,e=this.limit,t?e>1?(n="array",r=Object(i.a)(t)?c(t.slice(0,e)):[c(t)]):"string"==typeof t?(n="string",r=t?[c(t)]:[]):t.url?(n="object",r=[c(t)]):(n="object",r=[]):(r=[],n=e>1?"array":"string"==typeof t?"string":"object"),{fileType:n,fileList:r}));var t,e,r,n},computed:{hasSlot:function(){return this.$slots.action||this.$slots.list},isDisabled:function(){return this.disabled||this.fileList.length>this.limit},showClose:function(){return!(this.required&&1===this.fileList.length)},fileAccept:function(){return"string"==typeof this.accept?this.accept:this.accept.map((function(t){return t.startsWith("image/")?t:"image/".concat(t)})).join(", ")}},watch:{fileList:{handler:function(t){var e=t.filter((function(t){return"success"===t.status}));if(e.length||!this.required)if("array"!==this.fileType){if("object"!==this.fileType)return this.$emit("input",e[0]?e[0].url:"");this.$emit("input",e[0]||{})}else this.$emit("input",e)},immediate:!0,deep:!0}},methods:{upload:function(){this._updateToServer(this.fileList)},images:function(){return this.fileList.filter((function(t){return"success"===t.status}))},remove:function(t){this.fileList.splice(t,1),this.$refs.input.value="",this.$emit("change")},_readImage:function(t){var e=this;Promise.all(t.map((function(t){return function(t){return new Promise((function(e){var r=new FileReader;r.onload=function(t){e(t.target.result)},r.readAsDataURL(t)}))}(t)}))).then((function(r){!function(t){1===e.limit?e.fileList=t.filter((function(t){return t})):e.fileList=e.fileList.concat(t.filter((function(t){return t}))),e.auto&&e._updateToServer(t)}(t.map((function(t,n){var i={file:t};return r[n]?(i.url=r[n],e.oversize&&e.oversize<t.size?(i.status="error",i.message="图片体积过大"):i.status="preview"):(i.status="error",i.message="图片读取失败"),c(i)})))}))},_emitActionClick:function(){this.$emit("click")},_updateImage:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.fileList.forEach((function(n){n.id===t&&(n.status=e,r&&Object.keys(r).forEach((function(t){n[t]=r[t]})))}))},_updateToServer:function(t){var e=this,r=t.filter((function(t){return"preview"===t.status}));r.length&&r.map((function(t){var r={file:t.file};return e.bucket&&(r.bucket=e.bucket),{id:t.id,form:e.transformRequest?e.transformRequest(r):r}})).map((function(t){var e=new FormData;return Object.keys(t.form).forEach((function(r){e.append(r,t.form[r])})),f({},t,{form:e})})).forEach((function(t){e._updateImage(t.id,"loading");var r={withCredentials:e.cookie,data:t.form,action:e.url,onSuccess:function(r){e._handleUploadSuccess(t,r)},onError:function(){e._handleUploadError(t)}};e.http(r)}))},_handleInputSelect:function(t){var e=t.target.files;if(!this.disabled&&e.length){var r=[].slice.call(e);r=r.slice(0,Math.max(this.limit-this.fileList.length,1)),this._readImage(r)}},_handleUploadError:function(t){this._updateImage(t.id,"error",{message:"上传失败"}),this.$emit("change")},_handleUploadSuccess:function(t,e){var r=this.transformResponse?this.transformResponse(e):e,n=t.id;r.url?this._updateImage(n,"success",r):this._updateImage(n,"error",{message:r.message}),this.$emit("change")}}},m=r(0),h=Object(m.a)(d,n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-uploader__item__status is-error"},[e("i",{staticClass:"bili-font ic_error"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-uploader__btn"},[e("i",{staticClass:"bili-font ic_add"})])}],!1,null,null,null);h.options.__file="src/components/uploader/uploader.vue";var v=h.exports;e.default=v},64:function(t,e,r){}})},244:function(t,e,r){},291:function(t,e,r){"use strict";var n=r(244);r.n(n).a},367:function(t,e,r){"use strict";r.r(e);r(36),r(44),r(35),r(25),r(82),r(161),r(113),r(60),r(109),r(110),r(57),r(28);var n=r(236),o=r(59),c=(r(237),r(56),r(238)),l=r.n(c),f=(r(232),r(233)),d=r.n(f),m=(r(226),r(227)),h=r.n(m),v=r(228);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={name:"CreateIdol",components:{VButton:h.a,VField:d.a,VUploader:l.a},mixins:[v.a],data:function(){var t=this;return{tag:{id:"",avatar:"",name:"",alias:[],intro:""},rules:{alias:[{validator:function(e,r,n){r&&r.length||n(new Error("别名不能为空")),~r.indexOf(t.tag.name)||n(new Error("别名中必须包含名称")),r.some((function(t){return/,/.test(t)}))&&n(new Error("别名不能包含英文逗号")),r.join("").length>100&&n(new Error("别名最多100个字符")),n()},trigger:"submit"}]},submitting:!1}},methods:{avatarUploadSuccess:function(t,e){this.handleImageUploadSuccess(t,e),this.tag.avatar=t.data.url},fetch:function(){var t=this;this.tag.id&&this.$axios.$get("v1/bangumi/fetch",{params:{source_id:this.tag.id}}).then((function(e){e&&e.name&&(t.tag=y({},t.tag,{},e))})).catch((function(e){400===e.statusCode?(t.$toast.stop(),t.$alert({title:"角色已存在",message:"是否跳转到相应页面？",buttons:["取消","确定"],callback:function(r){r&&t.$bridge.navigateTo({url:"/pages/idol/show/index?slug=".concat(e.message)})}})):t.$toast.error(e.message)}))},submit:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.submitting=!0,t.$axios.$post("v1/idol/create",y({},t.tag,{alias:[t.tag.name].concat(Object(n.a)(t.tag.alias)),bangumi_slug:t.$route.query.slug})).then((function(e){t.$toast.info("创建成功"),t.$bridge.navigateTo({url:"/pages/idol/show/index?slug=".concat(e)})})).catch((function(e){t.$toast.error(e.message),t.submitting=!1})))}))}},head:function(){return{title:"创建角色"}}},j=(r(291),r(24)),component=Object(j.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"create-idol"}},[r("div",{ref:"form",staticClass:"edit-tag-info-form",attrs:{model:t.tag,rules:t.rules,disabled:t.submitting,"label-position":"top"}},[r("div",{attrs:{label:"来源",required:""}},[r("VField",{attrs:{placeholder:"去 bgm.tv 寻找那个偶像吧！"},model:{value:t.tag.id,callback:function(e){t.$set(t.tag,"id",e)},expression:"tag.id"}})],1),t._v(" "),r("div",[r("VButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.fetch}},[t._v("\n        抓取资源\n      ")])],1),t._v(" "),r("div",{attrs:{label:"头像",required:""}},[r("div",{staticClass:"avatar-field"},[t.tag.avatar?r("img",{staticClass:"avatar",attrs:{src:t.$resize(t.tag.avatar,{width:100})}}):t._e(),t._v(" "),r("VUploader",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[r("VButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传封面")+"\n          ")])],1)],1)]),t._v(" "),r("div",{attrs:{label:"名称",required:""}},[r("VField",{model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),t._v(" "),r("div",{attrs:{label:"别名",prop:"alias",required:""}},[r("p",{staticClass:"form-tip"},[t._v("\n        提示：按回车键生效\n      ")]),t._v("\n      "+t._s(t.tag.alias)+"\n    ")]),t._v(" "),r("div",{attrs:{label:"简介",required:""}},[r("VField",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"500",resize:"none",placeholder:"请输入板块介绍"},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1),t._v(" "),r("div",[r("VButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n        保存更改\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);