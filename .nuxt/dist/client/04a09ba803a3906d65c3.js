(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{226:function(t,e,n){var content=n(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("7c8f9b2e",content,!0,{sourceMap:!1})},227:function(t,e,n){(e=n(32)(!1)).push([t.i,'.v-uploader{font-size:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-uploader--custom{font-size:inherit}.v-uploader__action{display:inline-block;position:relative;overflow:hidden}.v-uploader__action input[type=file]{position:absolute;top:0;left:0;right:0;bottom:0;opacity:0}.v-uploader__action__wrap{pointer-events:none;display:inline}.v-uploader__btn{position:relative;display:inline-block;width:80px;height:80px;border-radius:4px;background-color:#fff;border:1px dashed #e5e5e5}body.night-mode .v-uploader__btn{background-color:#141414;border-color:#2c2c2c}.v-uploader__btn .ic_add{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:24px;color:#969799}body.night-mode .v-uploader__btn .ic_add{color:#8f8f91}.v-uploader__files+.v-uploader__action,.v-uploader__item{margin:0 8px 8px 0}.v-uploader__item{position:relative;display:inline-block;width:80px;height:80px;background-color:#f4f4f4}body.night-mode .v-uploader__item{background-color:#1f1f1f}.v-uploader__item__poster{display:block;-o-object-fit:cover;object-fit:cover;width:100%;height:100%;border-radius:4px}.v-uploader__item__cancel{position:absolute;top:-8px;right:-8px;display:block;width:18px;height:18px;font-size:18px;line-height:18px;text-align:center;border-radius:50%;z-index:1;color:#969799;background-color:#fff}body.night-mode .v-uploader__item__cancel{color:#8f8f91;background-color:#141414}.v-uploader__item__mask{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);border-radius:4px}.v-uploader__item__mask span{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-size:12px;text-align:center;width:100%}.v-uploader__item__loading div{position:absolute;left:50%;top:50%;margin-left:-10px;margin-top:-10px;width:20px;height:20px;border-radius:50%;-webkit-animation:skr 1.5s linear infinite;animation:skr 1.5s linear infinite;border:2px solid #fff;box-shadow:0 0 5px #fff}@keyframes skr{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes skr{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}.v-uploader__item__status{position:absolute;right:0;bottom:0;width:40px;height:40px;border-radius:4px;overflow:hidden}.v-uploader__item__status:before{content:"";position:absolute;left:20px;top:20px;width:100%;height:100%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.v-uploader__item__status.is-success:before{background-color:#6dc781}body.night-mode .v-uploader__item__status.is-success:before{background-color:#6cb97d}.v-uploader__item__status.is-error:before{background-color:#fa5a57}body.night-mode .v-uploader__item__status.is-error:before{background-color:#e85b59}.v-uploader__item__status .bili-font{position:absolute;display:block;font-size:14px;width:14px;height:14px;right:2px;bottom:2px;color:#fff;text-align:center}',""]),t.exports=e},228:function(t,e,n){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=29)}({0:function(t,e,n){"use strict";function r(t,e,n,r,i,s,o,a){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}n.d(e,"a",(function(){return r}))},29:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-uploader",class:{"v-uploader--custom":t.hasSlot}},[t._t("list",[t.fileList.length?n("span",{staticClass:"v-uploader__files"},t._l(t.fileList,(function(e,r){return n("div",{key:r+e.id,staticClass:"v-uploader__item"},[e.url?n("img",{staticClass:"v-uploader__item__poster",attrs:{src:e.url}}):t._e(),t._v(" "),"loading"!==e.status&&1!==t.limit?n("i",{staticClass:"bili-font ic_input_close v-uploader__item__cancel",on:{click:function(e){return t.remove(r)}}}):t._e(),t._v(" "),"loading"===e.status?n("div",{staticClass:"v-uploader__item__loading v-uploader__item__mask"},[n("div")]):t._e(),t._v(" "),"success"===e.status?n("div",{staticClass:"v-uploader__item__status is-success"},[n("i",{staticClass:"bili-font ic_success"})]):t._e(),t._v(" "),"error"===e.status?n("div",{staticClass:"v-uploader__item__mask"},[n("span",{domProps:{textContent:t._s(e.message)}}),t._v(" "),t._m(0,!0)]):t._e()])})),0):t._e()],{list:t.fileList}),t._v(" "),n("div",{staticClass:"v-uploader__action",on:{click:t._emitActionClick}},[n("input",{ref:"input",attrs:{multiple:1!==t.limit,disabled:t.isDisabled,accept:t.fileAccept,type:"file",name:"file"},on:{change:t._handleInputSelect}}),t._v(" "),n("div",{staticClass:"v-uploader__action__wrap"},[t._t("action",[t._m(1)])],2)])],2)};r._withStripped=!0;var i=n(3);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(n,!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){if(!t)return[];var e=function(t){var e={};return"string"==typeof t?(e.url=t,e.status="success"):(t.id&&(e.id=t.id),t.url&&(e.url=t.url),t.url&&t.url.startsWith("http")?(e.status="success",e.data=t):e=o({},e,{},t)),o({},{id:Math.random().toString(36).substring(3,6),url:"",status:"",message:"",data:null,file:null},{},e)};return Object(i.a)(t)?t.map(e):e(t)}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n(55);var p={name:"VUploader",props:{value:{type:[Array,Object,String],default:""},url:{type:String,default:"//api.bilibili.com/x/upload/web/image"},bucket:{type:String,default:""},disabled:{type:Boolean,default:!1},accept:{type:[String,Array],default:"image/*"},limit:{type:Number,default:1,validator:function(t){return t>=1}},oversize:{type:[String,Number],default:0,validator:function(t){return t>=0}},cookie:{type:Boolean,default:!0},auto:{type:Boolean,default:!0},http:{type:Function,default:function(t){if("undefined"!=typeof XMLHttpRequest){var e=new XMLHttpRequest,n=t.action;e.onerror=function(e){t.onError(e)},e.onload=function(){if(e.status<200||e.status>=400)return t.onError(function(t,e,n){var r;r=n.response?"".concat(n.response.error||n.response):n.responseText?"".concat(n.responseText):"fail to post ".concat(t," ").concat(n.status);var i=new Error(r);return i.status=n.status,i.method="post",i.url=t,i}(n,0,e));t.onSuccess(function(t){var e=t.responseText||t.response;if(!e)return e;try{return JSON.parse(e)}catch(t){return e}}(e))},e.open("POST",n,!0),t.withCredentials&&"withCredentials"in e&&(e.withCredentials=!0);var r={Accept:"application/json, text/plain, */*"};return"setRequestHeader"in e&&Object.keys(r).forEach((function(t){e.setRequestHeader(t,r[t])})),e.send(t.data),e}}},transformRequest:{type:Function,default:function(t){return t.csrf=function(t){var e=new RegExp("(^| )"+t+"=([^;]*)(;|$)"),n=document.cookie.match(e);return n?unescape(n[2]):null}("bili_jct"),t}},transformResponse:{type:Function,default:function(t){return t&&0===t.code?{url:t.data.location,data:t.data}:t}}},data:function(){return{fileList:Object(i.a)(this.value)?l(this.value.slice(0,this.limit)):l(this.value)}},computed:{hasSlot:function(){return this.$slots.action||this.$slots.list},isDisabled:function(){return this.disabled||this.fileList.length>this.limit},fileAccept:function(){return"string"==typeof this.accept?this.accept:this.accept.map((function(t){return t.startsWith("image/")?t:"image/".concat(t)})).join(", ")}},watch:{value:function(t){this.fileList=t},fileList:function(t){this.$emit("input",t)}},methods:{upload:function(){this._updateToServer(this.fileList)},images:function(){return this.fileList.filter((function(t){return"success"===t.status}))},remove:function(t){this.fileList.splice(t,1),this.$refs.input.value="",this.$emit("change")},_readImage:function(t){var e=this;Promise.all(t.map((function(t){return function(t){return new Promise((function(e){var n=new FileReader;n.onload=function(t){e(t.target.result)},n.readAsDataURL(t)}))}(t)}))).then((function(n){!function(t){1===e.limit?e.fileList=t.filter((function(t){return t})):e.fileList=e.fileList.concat(t.filter((function(t){return t}))),e.auto&&e._updateToServer(t)}(t.map((function(t,r){var i={file:t};return n[r]?(i.url=n[r],e.oversize&&e.oversize<t.size?(i.status="error",i.message="图片体积过大"):i.status="preview"):(i.status="error",i.message="图片读取失败"),l(i)})))}))},_emitActionClick:function(){this.$emit("click")},_updateImage:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.fileList.forEach((function(r){r.id===t&&(r.status=e,n&&Object.keys(n).forEach((function(t){r[t]=n[t]})))}))},_updateToServer:function(t){var e=this,n=t.filter((function(t){return"preview"===t.status}));n.length&&n.map((function(t){var n={file:t.file};return e.bucket&&(n.bucket=e.bucket),{id:t.id,form:e.transformRequest?e.transformRequest(n):n}})).map((function(t){var e=new FormData;return Object.keys(t.form).forEach((function(n){e.append(n,t.form[n])})),function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(n,!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t,{form:e})})).forEach((function(t){e._updateImage(t.id,"loading");var n={withCredentials:e.cookie,data:t.form,action:e.url,onSuccess:function(n){e._handleUploadSuccess(t,n)},onError:function(){e._handleUploadError(t)}};e.http(n)}))},_handleInputSelect:function(t){var e=t.target.files,n=this.limit-this.fileList.length;if(!(this.disabled||!e.length||n<=0)){var r=[].slice.call(e);r=r.slice(0,n),this._readImage(r)}},_handleUploadError:function(t){this._updateImage(t.id,"error",{message:"上传失败"}),this.$emit("change")},_handleUploadSuccess:function(t,e){var n=this.transformResponse?this.transformResponse(e):e,r=t.id;n.url?this._updateImage(r,"success",{url:n.url,data:n.data}):this._updateImage(r,"error",{message:n.message}),this.$emit("change")}}},f=n(0),m=Object(f.a)(p,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-uploader__item__status is-error"},[e("i",{staticClass:"bili-font ic_error"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-uploader__btn"},[e("i",{staticClass:"bili-font ic_add"})])}],!1,null,null,null);m.options.__file="src/components/uploader/uploader.vue";var h=m.exports;e.default=h},3:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return"[object Array]"===Object.prototype.toString.call(t)}},55:function(t,e,n){}})},229:function(t,e,n){"use strict";var r=n(2),o=n(105),l=n(42),c=n(14),d=n(21),f=n(106),m=n(75),h=n(55),_=n(19),v=h("splice"),y=_("splice",{ACCESSORS:!0,0:0,1:2}),k=Math.max,w=Math.min;r({target:"Array",proto:!0,forced:!v||!y},{splice:function(t,e){var n,r,h,_,v,y,x=d(this),O=c(x.length),j=o(t,O),$=arguments.length;if(0===$?n=r=0:1===$?(n=0,r=O-j):(n=$-2,r=w(k(l(e),0),O-j)),O+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(h=f(x,r),_=0;_<r;_++)(v=j+_)in x&&m(h,_,x[v]);if(h.length=r,n<r){for(_=j;_<O-r;_++)y=_+n,(v=_+r)in x?x[y]=x[v]:delete x[y];for(_=O;_>O-r+n;_--)delete x[_-1]}else if(n>r)for(_=O-r;_>j;_--)y=_+n-1,(v=_+r-1)in x?x[y]=x[v]:delete x[y];for(_=0;_<n;_++)x[_+j]=arguments[_+2];return x.length=O-r+n,h}})},230:function(t,e,n){"use strict";n(52),n(23),n(76),n(157),n(229),n(53),n(10),n(25),n(74),n(107),n(54),n(78),n(24),n(79),n(35);var r,o=n(6);e.a={data:function(){return{uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){t.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){t.getUpToken()}),18e5)},getUpToken:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.$cookie.get("UPLOAD-TOKEN"))){t.next=4;break}return this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"),t.abrupt("return");case 4:return t.next=6,this.$axios.$get("v1/image/uptoken");case 6:e=t.sent,this.uploadHeaders.token=e,this.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)});case 9:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),handleImageUploadError:function(t,e){var n=this;this.uploadImageList.forEach((function(r,o){r.uid===e.uid&&(n.uploadPending--,n.uploadImageList.splice(o,1),console.log(t))})),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove:function(t){var e=this;this.uploadImageList.forEach((function(n,r){n.uid===t.uid&&(e.uploadImageList.splice(r,1),e.uploadImageTotal--)}))},handleImageUploadSuccess:function(t,e){var n=this;this.uploadImageList.forEach((function(r,o){r.uid===e.uid&&(n.uploadImageList[o]=Object.assign(r,{data:t.data,status:"success",url:n.$resize("".concat(n.imagePrefix).concat(t.data.url),{width:100})}))})),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed:function(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore:function(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=function(t){var e=t.slug,n=t.file;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())}({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus:function(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},233:function(t,e,n){"use strict";e.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",(function(){t.$toast.error("继续操作前请先登录").then((function(){window.location.href=t.$alias.sign()}))}))}}},245:function(t,e,n){var content=n(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("684cfb85",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";var r=n(245);n.n(r).a},274:function(t,e,n){(e=n(32)(!1)).push([t.i,"@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}#profile-bangumi{padding:15px}#profile-bangumi .avatar-field{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center}#profile-bangumi .avatar-field .avatar{width:100px;height:100px;border-radius:10%;margin-right:15px}",""]),t.exports=e},302:function(t,e,n){"use strict";n.r(e);n(10),n(226),n(104);var r=n(228),o=n.n(r),l=(n(231),n(232)),c=n.n(l),d=(n(224),n(225)),f=n.n(d),m=n(233),h=n(230),_={name:"ProfileBangumi",components:{VButton:f.a,VField:c.a,VUploader:o.a},mixins:[m.a,h.a],asyncData:function(t){var e=t.app,n=t.error,r=t.query.slug;if(r)return e.$axios.$get("v1/bangumi/show",{params:{slug:r}}).then((function(t){return{bangumi:t}})).catch(n)},data:function(){return{bangumi:null,loading:!1}},methods:{avatarUploadSuccess:function(t,e){this.handleImageUploadSuccess(t,e),this.bangumi.avatar=t.data.url},handleSubmit:function(){var t=this;this.loading||(this.loading=!0,this.$axios.$post("v1/bangumi/update/profile",this.bangumi).then((function(){t.$toast.success("修改成功")})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.loading=!1})))}},head:{title:"编辑番剧"}},v=(n(273),n(34)),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bangumi?n("div",{attrs:{id:"profile-bangumi"}},[n("div",{ref:"form",attrs:{"label-position":"top","label-width":"80px"}},[n("div",{attrs:{label:"名称"}},[n("VField",{attrs:{disabled:""},model:{value:t.bangumi.name,callback:function(e){t.$set(t.bangumi,"name",e)},expression:"bangumi.name"}})],1),t._v(" "),n("div",{attrs:{label:"头像"}},[n("div",{staticClass:"avatar-field"},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.bangumi.avatar,{width:100})}}),t._v(" "),n("VUploader",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[n("VButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传头像")+"\n          ")])],1)],1)]),t._v(" "),n("div",{attrs:{label:"别名"}},[t._v("\n      "+t._s(t.bangumi.alias)+"\n    ")]),t._v(" "),n("div",{attrs:{label:"简介"}},[n("VField",{attrs:{type:"textarea",rows:"4",resize:"vertical"},model:{value:t.bangumi.intro,callback:function(e){t.$set(t.bangumi,"intro",e)},expression:"bangumi.intro"}})],1),t._v(" "),n("div",[n("VButton",{attrs:{type:"success",round:""},on:{click:t.handleSubmit}},[t._v("\n        提交\n      ")])],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);