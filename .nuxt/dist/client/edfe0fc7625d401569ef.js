(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{228:function(t,e,r){var content=r(229);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("7c8f9b2e",content,!0,{sourceMap:!1})},229:function(t,e,r){(e=r(23)(!1)).push([t.i,'.v-uploader{font-size:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-uploader--custom{font-size:inherit}.v-uploader__action{display:inline-block;position:relative;overflow:hidden}.v-uploader__action input[type=file]{position:absolute;top:0;left:0;right:0;bottom:0;opacity:0}.v-uploader__action__wrap{pointer-events:none;display:inline}.v-uploader__btn{position:relative;display:inline-block;width:80px;height:80px;border-radius:4px;background-color:#fff;border:1px dashed #e5e5e5}body.night-mode .v-uploader__btn{background-color:#141414;border-color:#2c2c2c}.v-uploader__btn .ic_add{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:24px;color:#969799}body.night-mode .v-uploader__btn .ic_add{color:#8f8f91}.v-uploader__files+.v-uploader__action,.v-uploader__item{margin:0 8px 8px 0}.v-uploader__item{position:relative;display:inline-block;width:80px;height:80px;background-color:#f4f4f4}body.night-mode .v-uploader__item{background-color:#1f1f1f}.v-uploader__item__poster{display:block;-o-object-fit:cover;object-fit:cover;width:100%;height:100%;border-radius:4px}.v-uploader__item__cancel{position:absolute;top:-8px;right:-8px;display:block;width:18px;height:18px;font-size:18px;line-height:18px;text-align:center;border-radius:50%;z-index:1;color:#969799;background-color:#fff}body.night-mode .v-uploader__item__cancel{color:#8f8f91;background-color:#141414}.v-uploader__item__mask{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);border-radius:4px}.v-uploader__item__mask span{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-size:12px;text-align:center;width:100%}.v-uploader__item__loading div{position:absolute;left:50%;top:50%;margin-left:-10px;margin-top:-10px;width:20px;height:20px;border-radius:50%;-webkit-animation:skr 1.5s linear infinite;animation:skr 1.5s linear infinite;border:2px solid #fff;box-shadow:0 0 5px #fff}@keyframes skr{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes skr{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}.v-uploader__item__status{position:absolute;right:0;bottom:0;width:40px;height:40px;border-radius:4px;overflow:hidden}.v-uploader__item__status:before{content:"";position:absolute;left:20px;top:20px;width:100%;height:100%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.v-uploader__item__status.is-success:before{background-color:#6dc781}body.night-mode .v-uploader__item__status.is-success:before{background-color:#6cb97d}.v-uploader__item__status.is-error:before{background-color:#fa5a57}body.night-mode .v-uploader__item__status.is-error:before{background-color:#e85b59}.v-uploader__item__status .bili-font{position:absolute;display:block;font-size:14px;width:14px;height:14px;right:2px;bottom:2px;color:#fff;text-align:center}',""]),t.exports=e},230:function(t,e,r){t.exports=function(t){var e={};function r(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=29)}({0:function(t,e,r){"use strict";function o(t,e,r,o,i,s,n,a){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),o&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),n?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}r.d(e,"a",(function(){return o}))},29:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"v-uploader",class:{"v-uploader--custom":t.hasSlot}},[t._t("list",[t.fileList.length?r("span",{staticClass:"v-uploader__files"},t._l(t.fileList,(function(e,o){return r("div",{key:o+e.id,staticClass:"v-uploader__item"},[e.url?r("img",{staticClass:"v-uploader__item__poster",attrs:{src:e.url}}):t._e(),t._v(" "),"loading"!==e.status&&1!==t.limit?r("i",{staticClass:"bili-font ic_input_close v-uploader__item__cancel",on:{click:function(e){return t.remove(o)}}}):t._e(),t._v(" "),"loading"===e.status?r("div",{staticClass:"v-uploader__item__loading v-uploader__item__mask"},[r("div")]):t._e(),t._v(" "),"success"===e.status?r("div",{staticClass:"v-uploader__item__status is-success"},[r("i",{staticClass:"bili-font ic_success"})]):t._e(),t._v(" "),"error"===e.status?r("div",{staticClass:"v-uploader__item__mask"},[r("span",{domProps:{textContent:t._s(e.message)}}),t._v(" "),t._m(0,!0)]):t._e()])})),0):t._e()],{list:t.fileList}),t._v(" "),r("div",{staticClass:"v-uploader__action",on:{click:t._emitActionClick}},[r("input",{ref:"input",attrs:{multiple:1!==t.limit,disabled:t.isDisabled,accept:t.fileAccept,type:"file",name:"file"},on:{change:t._handleInputSelect}}),t._v(" "),r("div",{staticClass:"v-uploader__action__wrap"},[t._t("action",[t._m(1)])],2)])],2)};o._withStripped=!0;var i=r(3);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){if(!t)return[];var e=function(t){var e={};return"string"==typeof t?(e.url=t,e.status="success"):(t.id&&(e.id=t.id),t.url&&(e.url=t.url),t.url&&t.url.startsWith("http")?(e.status="success",e.data=t):e=n({},e,{},t)),n({},{id:Math.random().toString(36).substring(3,6),url:"",status:"",message:"",data:null,file:null},{},e)};return Object(i.a)(t)?t.map(e):e(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r(56);var p={name:"VUploader",props:{value:{type:[Array,Object,String],default:""},url:{type:String,default:"//api.bilibili.com/x/upload/web/image"},bucket:{type:String,default:""},disabled:{type:Boolean,default:!1},accept:{type:[String,Array],default:"image/*"},limit:{type:Number,default:1,validator:function(t){return t>=1}},oversize:{type:[String,Number],default:0,validator:function(t){return t>=0}},cookie:{type:Boolean,default:!0},auto:{type:Boolean,default:!0},http:{type:Function,default:function(t){if("undefined"!=typeof XMLHttpRequest){var e=new XMLHttpRequest,r=t.action;e.onerror=function(e){t.onError(e)},e.onload=function(){if(e.status<200||e.status>=400)return t.onError(function(t,e,r){var o;o=r.response?"".concat(r.response.error||r.response):r.responseText?"".concat(r.responseText):"fail to post ".concat(t," ").concat(r.status);var i=new Error(o);return i.status=r.status,i.method="post",i.url=t,i}(r,0,e));t.onSuccess(function(t){var e=t.responseText||t.response;if(!e)return e;try{return JSON.parse(e)}catch(t){return e}}(e))},e.open("POST",r,!0),t.withCredentials&&"withCredentials"in e&&(e.withCredentials=!0);var o={Accept:"application/json, text/plain, */*"};return"setRequestHeader"in e&&Object.keys(o).forEach((function(t){e.setRequestHeader(t,o[t])})),e.send(t.data),e}}},transformRequest:{type:Function,default:function(t){return t.csrf=function(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),r=document.cookie.match(e);return r?unescape(r[2]):null}("bili_jct"),t}},transformResponse:{type:Function,default:function(t){return t&&0===t.code?{url:t.data.location,data:t.data}:t}}},data:function(){return{fileList:Object(i.a)(this.value)?l(this.value.slice(0,this.limit)):l(this.value)}},computed:{hasSlot:function(){return this.$slots.action||this.$slots.list},isDisabled:function(){return this.disabled||this.fileList.length>this.limit},fileAccept:function(){return"string"==typeof this.accept?this.accept:this.accept.map((function(t){return t.startsWith("image/")?t:"image/".concat(t)})).join(", ")}},watch:{value:function(t){this.fileList=t},fileList:function(t){this.$emit("input",t)}},methods:{upload:function(){this._updateToServer(this.fileList)},images:function(){return this.fileList.filter((function(t){return"success"===t.status}))},remove:function(t){this.fileList.splice(t,1),this.$refs.input.value="",this.$emit("change")},_readImage:function(t){var e=this;Promise.all(t.map((function(t){return function(t){return new Promise((function(e){var r=new FileReader;r.onload=function(t){e(t.target.result)},r.readAsDataURL(t)}))}(t)}))).then((function(r){!function(t){1===e.limit?e.fileList=t.filter((function(t){return t})):e.fileList=e.fileList.concat(t.filter((function(t){return t}))),e.auto&&e._updateToServer(t)}(t.map((function(t,o){var i={file:t};return r[o]?(i.url=r[o],e.oversize&&e.oversize<t.size?(i.status="error",i.message="图片体积过大"):i.status="preview"):(i.status="error",i.message="图片读取失败"),l(i)})))}))},_emitActionClick:function(){this.$emit("click")},_updateImage:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.fileList.forEach((function(o){o.id===t&&(o.status=e,r&&Object.keys(r).forEach((function(t){o[t]=r[t]})))}))},_updateToServer:function(t){var e=this,r=t.filter((function(t){return"preview"===t.status}));r.length&&r.map((function(t){var r={file:t.file};return e.bucket&&(r.bucket=e.bucket),{id:t.id,form:e.transformRequest?e.transformRequest(r):r}})).map((function(t){var e=new FormData;return Object.keys(t.form).forEach((function(r){e.append(r,t.form[r])})),function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t,{form:e})})).forEach((function(t){e._updateImage(t.id,"loading");var r={withCredentials:e.cookie,data:t.form,action:e.url,onSuccess:function(r){e._handleUploadSuccess(t,r)},onError:function(){e._handleUploadError(t)}};e.http(r)}))},_handleInputSelect:function(t){var e=t.target.files,r=this.limit-this.fileList.length;if(!(this.disabled||!e.length||r<=0)){var o=[].slice.call(e);o=o.slice(0,r),this._readImage(o)}},_handleUploadError:function(t){this._updateImage(t.id,"error",{message:"上传失败"}),this.$emit("change")},_handleUploadSuccess:function(t,e){var r=this.transformResponse?this.transformResponse(e):e,o=t.id;r.url?this._updateImage(o,"success",{url:r.url,data:r.data}):this._updateImage(o,"error",{message:r.message}),this.$emit("change")}}},f=r(0),m=Object(f.a)(p,o,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-uploader__item__status is-error"},[e("i",{staticClass:"bili-font ic_error"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-uploader__btn"},[e("i",{staticClass:"bili-font ic_add"})])}],!1,null,null,null);m.options.__file="src/components/uploader/uploader.vue";var h=m.exports;e.default=h},3:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var o=function(t){return"[object Array]"===Object.prototype.toString.call(t)}},56:function(t,e,r){}})},231:function(t,e,r){"use strict";var o=r(2),n=r(104),l=r(42),c=r(14),d=r(21),f=r(105),m=r(76),h=r(57),_=r(19),v=h("splice"),x=_("splice",{ACCESSORS:!0,0:0,1:2}),y=Math.max,k=Math.min;o({target:"Array",proto:!0,forced:!v||!x},{splice:function(t,e){var r,o,h,_,v,x,w=d(this),O=c(w.length),j=n(t,O),S=arguments.length;if(0===S?r=o=0:1===S?(r=0,o=O-j):(r=S-2,o=k(y(l(e),0),O-j)),O+r-o>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=f(w,o),_=0;_<o;_++)(v=j+_)in w&&m(h,_,w[v]);if(h.length=o,r<o){for(_=j;_<O-o;_++)x=_+r,(v=_+o)in w?w[x]=w[v]:delete w[x];for(_=O;_>O-o+r;_--)delete w[_-1]}else if(r>o)for(_=O-o;_>j;_--)x=_+r-1,(v=_+o-1)in w?w[x]=w[v]:delete w[x];for(_=0;_<r;_++)w[_+j]=arguments[_+2];return w.length=O-o+r,h}})},232:function(t,e,r){"use strict";r(54),r(32),r(77),r(158),r(231),r(55),r(10),r(35),r(75),r(106),r(56),r(107),r(33),r(79),r(34);var o,n=r(6);e.a={data:function(){return{uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){t.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){t.getUpToken()}),18e5)},getUpToken:(o=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.$cache.get("UPLOAD-TOKEN"))){t.next=4;break}return this.uploadHeaders.token=this.$cache.get("UPLOAD-TOKEN"),t.abrupt("return");case 4:return t.next=6,this.$axios.$get("v1/image/uptoken");case 6:e=t.sent,this.uploadHeaders.token=e,this.$cache.set("UPLOAD-TOKEN",e,3e3);case 9:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),handleImageUploadError:function(t,e){var r=this;this.uploadImageList.forEach((function(o,n){o.uid===e.uid&&(r.uploadPending--,r.uploadImageList.splice(n,1),console.log(t))})),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove:function(t){var e=this;this.uploadImageList.forEach((function(r,o){r.uid===t.uid&&(e.uploadImageList.splice(o,1),e.uploadImageTotal--)}))},handleImageUploadSuccess:function(t,e){var r=this;this.uploadImageList.forEach((function(o,n){o.uid===e.uid&&(r.uploadImageList[n]=Object.assign(o,{data:t.data,status:"success",url:r.$resize("".concat(r.imagePrefix).concat(t.data.url),{width:100})}))})),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed:function(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore:function(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=function(t){var e=t.slug,r=t.file;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(r.type.split("/").pop())}({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus:function(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},236:function(t,e,r){var content=r(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("b01fa900",content,!0,{sourceMap:!1})},237:function(t,e,r){(e=r(23)(!1)).push([t.i,'.v-radio--circle .v-radio__label{border-radius:50%}.v-radio--normal .v-radio__label{width:22px;height:22px;margin-right:12px}.v-radio--normal .v-radio__label:after{left:7px;top:3px;height:9px;width:4px;border-width:2px}.v-radio--normal .v-radio__text{line-height:22px;font-size:14px}.v-radio--small .v-radio__label{width:16px;height:16px;margin-right:8px}.v-radio--small .v-radio__label:after{left:5px;top:2px;height:7px;width:3px;border-width:1px}.v-radio--small .v-radio__text{line-height:16px;font-size:14px}.v-radio--ver.v-radio--normal .v-radio__item:not(:last-child){margin-bottom:12px}.v-radio--ver.v-radio--small .v-radio__item:not(:last-child){margin-bottom:8px}.v-radio--hoz .v-radio__item{display:inline-block;margin-right:20px}.v-radio__item.is-selected .v-radio__label{background-color:#fb7299;border-color:#fb7299}body.night-mode .v-radio__item.is-selected .v-radio__label{background-color:#eb7093;border-color:#eb7093}.v-radio__item.is-selected .v-radio__label:after{-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1)}.v-radio__item.is-selected.is-disabled .v-radio__label{background-color:#999;border-color:#999}body.night-mode .v-radio__item.is-selected.is-disabled .v-radio__label{background-color:#727272;border-color:#727272}.v-radio__item.is-disabled .v-radio__label{background-color:#f4f4f4}body.night-mode .v-radio__item.is-disabled .v-radio__label{background-color:#1f1f1f}.v-radio__label{float:left;position:relative;border-radius:3px;background-color:#fff;border:1px solid #e7e7e7}body.night-mode .v-radio__label{background-color:#141414;border-color:#2a2a2a}.v-radio__label:after{content:"";position:absolute;box-sizing:content-box;border-style:solid;border-left:0;border-top:0;-webkit-transform:rotate(45deg) scaleY(0);transform:rotate(45deg) scaleY(0);-webkit-transition:-webkit-transform .15s ease-in .05s;transition:-webkit-transform .15s ease-in .05s;transition:transform .15s ease-in .05s;transition:transform .15s ease-in .05s,-webkit-transform .15s ease-in .05s;-webkit-transform-origin:center;transform-origin:center;border-color:#fff}body.night-mode .v-radio__label:after{border-color:#141414}.v-radio__text{overflow:hidden;color:#212121}body.night-mode .v-radio__text{color:#e1e1e1}',""]),t.exports=e},238:function(t,e,r){t.exports=function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=41)}({0:function(t,e,i){"use strict";function r(t,e,i,r,s,o,n,l){var a,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),r&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),n?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=a):s&&(a=l?function(){s.call(this,this.$root.$options.shadowRoot)}:s),a)if(c.functional){c._injectStyles=a;var d=c.render;c.render=function(t,e){return a.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,a):[a]}return{exports:t,options:c}}i.d(e,"a",(function(){return r}))},41:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-radio",class:["v-radio--"+t.size,{"v-radio--circle":t.circle},t.inline?"v-radio--hoz":"v-radio--ver"]},[t.isSingle?i("div",{staticClass:"v-radio__item",class:{"is-disabled":t.disabled,"is-selected":t.selected},on:{click:t._singleToggle}},[i("div",{staticClass:"v-radio__label"}),t._v(" "),i("div",{staticClass:"v-radio__text",domProps:{textContent:t._s(t.text)}})]):i("div",{staticClass:"v-radio__list"},t._l(t.text,(function(e){return i("div",{key:t.pureText?e:e.value,staticClass:"v-radio__item",class:[{"is-disabled":t.disabled||!t.pureText&&e.disabled||t.max&&t.selected.length>=t.max&&-1===t.selected.indexOf(t.pureText?e:e.value)},{"is-selected":-1!==t.selected.indexOf(t.pureText?e:e.value)}],on:{click:function(i){return t._multiToggle(e)}}},[i("div",{staticClass:"v-radio__label"}),t._v(" "),i("div",{staticClass:"v-radio__text",domProps:{textContent:t._s(t.pureText?e:e.label)}})])})),0)])};r._withStripped=!0,i(61);var s={name:"VRadio",props:{value:{type:[Boolean,Array],required:!0},text:{type:[String,Array],required:!0},size:{type:String,default:"normal",validator:function(t){return~["normal","small"].indexOf(t)}},max:{type:Number,default:0},min:{type:Number,default:0},disabled:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},inline:{type:Boolean,default:!1}},data:function(){var t="[object Boolean]"===Object.prototype.toString.call(this.value);return{selected:this.value,pureText:!!t||"string"==typeof this.text[0],isSingle:t}},watch:{value:function(t){this.selected=t},selected:function(t){this.$emit("input",t)}},methods:{_singleToggle:function(){this.disabled||(this.selected=!this.selected)},_multiToggle:function(t){if(!(this.disabled||!this.pureText&&t.disabled)){var e=this.selected.indexOf(this.pureText?t:t.value);if(-1===e)this.max&&this.selected.length>=this.max||this.selected.push(this.pureText?t:t.value);else{if(this.min&&this.selected.length<=this.min)return;this.selected.splice(e,1)}}},checkAll:function(t){var e=this;this.isSingle?this.selected=t:t?(this.selected=[],this.text.forEach((function(t){e.selected.push(e.pureText?t:t.value)}))):this.selected=[]},toggleAll:function(){this.isSingle?this.selected=!this.selected:this.checkAll(!this.selected.length)}}},o=i(0),n=Object(o.a)(s,r,[],!1,null,null,null);n.options.__file="src/components/radio/radio.vue";var l=n.exports;e.default=l},61:function(t,e,i){}})},242:function(t,e,r){var content=r(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(24).default)("57970c91",content,!0,{sourceMap:!1})},262:function(t,e,r){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(e,"a",(function(){return o}))},266:function(t,e,r){"use strict";var o=r(242);r.n(o).a},267:function(t,e,r){(e=r(23)(!1)).push([t.i,"@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}#create-bangumi{padding:15px}",""]),t.exports=e},303:function(t,e,r){"use strict";r.r(e);r(36),r(54),r(58),r(32),r(80),r(158),r(110),r(55),r(108),r(109),r(78),r(33);var o=r(262),n=r(59),l=(r(233),r(53),r(234)),c=r.n(l),d=(r(236),r(238)),f=r.n(d),m=(r(228),r(230)),h=r.n(m),_=(r(226),r(227)),v=r.n(_),x=r(232);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={name:"CreateBangumi",components:{VButton:v.a,VUploader:h.a,VRadio:f.a,VField:c.a},mixins:[x.a],data:function(){var t=this;return{radio:0,tag:{id:"",avatar:"",name:"",alias:[],intro:""},rules:{alias:[{validator:function(e,r,o){r&&r.length||o(new Error("别名不能为空")),~r.indexOf(t.tag.name)||o(new Error("别名中必须包含名称")),r.some((function(t){return/,/.test(t)}))&&o(new Error("别名不能包含英文逗号")),r.join("").length>100&&o(new Error("别名最多100个字符")),o()},trigger:"submit"}]},submitting:!1}},methods:{avatarUploadSuccess:function(t,e){this.handleImageUploadSuccess(t,e),this.tag.avatar=t.data.url},fetch:function(){var t=this;this.tag.id&&(this.$toast.loading("抓取中..."),this.$axios.$get("v1/bangumi/fetch",{params:{source_id:this.tag.id}}).then((function(e){e&&e.name&&(t.tag=k({},t.tag,{},e),t.$toast.stop())})).catch((function(e){return 400===e.statusCode?(t.$toast.stop(),void t.$confirm("该番剧已存在，是否跳转？").then((function(){t.$bridge.navigateTo({url:"/pages/bangumi/show/index?slug=".concat(e.message)})})).catch((function(){}))):t.$toast.error(e.message)})))},submit:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.submitting=!0,t.$axios.$post("v1/bangumi/create",k({},t.tag,{alias:[t.tag.name].concat(Object(o.a)(t.tag.alias))})).then((function(e){t.$toast.info("创建成功"),t.$bridge.navigateTo({url:"/pages/bangumi/show/index?slug=".concat(e)})})).catch((function(e){t.$toast.error(e.message),t.submitting=!1})))}))}},head:{title:"创建分区"}},O=(r(266),r(31)),component=Object(O.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"create-bangumi"}},[r("div",{ref:"form",staticClass:"edit-tag-info-form",attrs:{model:t.tag,rules:t.rules,disabled:t.submitting,"label-position":"top"}},[r("div",{attrs:{label:"类型"}},[r("VRadio",{attrs:{text:[{label:"动漫",value:0},{label:"游戏",value:1},{label:"其它",value:9}]},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}})],1),t._v(" "),r("div",{attrs:{label:"来源",required:""}},[r("VField",{attrs:{placeholder:"去 bgm.tv 寻找那个番剧吧！"},model:{value:t.tag.id,callback:function(e){t.$set(t.tag,"id",e)},expression:"tag.id"}})],1),t._v(" "),r("div",[r("VButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.fetch}},[t._v("\n        抓取资源\n      ")])],1),t._v(" "),r("div",{attrs:{label:"头像",required:""}},[r("div",{staticClass:"avatar-field"},[t.tag.avatar?r("img",{staticClass:"avatar",attrs:{src:t.$resize(t.tag.avatar,{width:100})}}):t._e(),t._v(" "),r("VUploader",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[r("VButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传封面")+"\n          ")])],1)],1)]),t._v(" "),r("div",{attrs:{label:"名称",required:""}},[r("VField",{model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),t._v(" "),r("div",{attrs:{label:"别名",prop:"alias",required:""}},[r("p",{staticClass:"form-tip"},[t._v("\n        提示：按回车键生效\n      ")]),t._v("\n      "+t._s(t.tag.alias)+"\n    ")]),t._v(" "),r("div",{attrs:{label:"简介",required:""}},[r("VField",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"500",resize:"none",placeholder:"请输入板块介绍"},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1),t._v(" "),r("div",[r("VButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n        保存更改\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);