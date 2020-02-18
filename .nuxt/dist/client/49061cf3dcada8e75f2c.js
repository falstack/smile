(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{224:function(t,e,n){"use strict";n(37),n(44),n(36),n(22),n(105),n(106),n(56),n(10),n(27),n(76),n(107),n(25),n(77);var r=n(57),o=(n(26),n(6)),c=n(225);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a={data:function(){return{imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){t.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){t.getUpToken()}),18e5)},getUpToken:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.a)(t);case 2:t.imageUploadToken=e.sent;case 3:case"end":return e.stop()}}),e)})))()},imageUploadRequest:function(data){var t,e,n;return data.key=(t={slug:this.currentUser.slug,file:data.file},e=t.slug,n=t.file,"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())),data.token=this.imageUploadToken,data},imageUploadResponse:function(t){try{return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t.data,{url:"".concat(this.imagePrefix).concat(t.data.url)})}catch(t){return{}}}}}},225:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(44),n(10),n(76);var r=function(t){return t.$axios.$get("v1/image/uptoken")},o=function(t,e){return t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}},235:function(t,e,n){"use strict";e.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",(function(){t.$toast.error("继续操作前请先登录").then((function(){t.$bridge.redirectTo({url:"/pages/user/login/index?from=".concat(encodeURIComponent(window.location.href))})}))}))}}},248:function(t,e,n){},294:function(t,e,n){"use strict";var r=n(248);n.n(r).a},373:function(t,e,n){"use strict";n.r(e);n(59),n(158),n(109),n(108),n(10),n(78),n(233),n(55);var r=n(234),o=n.n(r),c=(n(220),n(221)),l=n.n(c),m=(n(222),n(223)),f=n.n(m),d=(n(229),n(230)),h=n.n(d),v=n(235),k=n(224),w={name:"ProfileBangumi",components:{VForm:h.a,VField:f.a,VButton:l.a,VUploader:o.a},mixins:[v.a,k.a],asyncData:function(t){var e=t.app,n=t.error,r=t.query.slug;if(r)return e.$axios.$get("v1/bangumi/show",{params:{slug:r}}).then((function(t){return{bangumi:t}})).catch(n)},data:function(){return{bangumi:null,rule:{alias:{type:"array",validator:function(t,e,n){e&&e.length||n(new Error("别名不能为空")),e.some((function(t){return/,/.test(t)}))&&n(new Error("别名不能包含英文逗号")),e.join("").length>100&&n(new Error("别名最多100个字符")),n()}}},alias:"",loading:!1}},methods:{removeAlias:function(t){this.bangumi.alias.splice(t,1)},addAlias:function(){this.alias&&(this.bangumi.alias.includes(this.alias)||(this.bangumi.alias.push(this.alias),this.alias=""))},handleSubmit:function(){var t=this;this.loading||(this.loading=!0,this.$axios.$post("v1/bangumi/update/profile",this.bangumi).then((function(){t.$toast.success("修改成功")})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.loading=!1})))}},head:function(){return{title:"编辑番剧"}}},U=(n(294),n(35)),component=Object(U.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.bangumi?n("VForm",{attrs:{id:"profile-bangumi",full:"",form:t.bangumi,rule:t.rule},on:{submit:t.handleSubmit}},[n("VField",{attrs:{disabled:"",label:"名称"},model:{value:t.bangumi.name,callback:function(e){t.$set(t.bangumi,"name",e)},expression:"bangumi.name"}}),t._v(" "),n("VField",{attrs:{label:"头像"}},[n("VUploader",{attrs:{cookie:!1,required:"",url:t.imageUploadAction,accept:t.imageUploadAccept,"transform-request":t.imageUploadRequest,"transform-response":t.imageUploadResponse},model:{value:t.bangumi.avatar,callback:function(e){t.$set(t.bangumi,"avatar",e)},expression:"bangumi.avatar"}})],1),t._v(" "),n("VField",{attrs:{label:"别名"}},[n("div",{staticClass:"alias"},t._l(t.bangumi.alias,(function(e,r){return n("VButton",{key:e,attrs:{size:"small",plain:""}},[n("span",{domProps:{textContent:t._s(e)}}),t._v(" "),n("i",{staticClass:"bili-font ic_input_close",on:{click:function(e){return t.removeAlias(r)}}})])})),1),t._v(" "),n("VField",{attrs:{close:!1},scopedSlots:t._u([{key:"after",fn:function(){return[n("VButton",{on:{click:t.addAlias}},[t._v("\n          添加\n        ")])]},proxy:!0}],null,!1,172051393),model:{value:t.alias,callback:function(e){t.alias=e},expression:"alias"}})],1),t._v(" "),n("VField",{attrs:{label:"简介","min-row":4,"max-row":10,"max-len":500,counter:""},model:{value:t.bangumi.intro,callback:function(e){t.$set(t.bangumi,"intro",e)},expression:"bangumi.intro"}})],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);