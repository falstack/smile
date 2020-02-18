exports.ids=[2],exports.modules={154:function(t,e,n){"use strict";n.r(e);n(52),n(17);var o=n(33),r=n.n(o),l=(n(47),n(30)),c=n.n(l),d=(n(46),n(29)),h=n.n(d),m=(n(48),n(31)),f=n.n(m),v=n(49),$={name:"CreateIdol",components:{VForm:f.a,VField:h.a,VButton:c.a,VUploader:r.a},mixins:[v.a],data:()=>({tag:{id:"",avatar:"",name:"",alias:[],intro:""},rule:{alias:{type:"array",validator:(t,e,n)=>{e&&e.length||n(new Error("别名不能为空")),e.some(t=>/,/.test(t))&&n(new Error("别名不能包含英文逗号")),e.join("").length>100&&n(new Error("别名最多100个字符")),n()}}},alias:"",loading:!1}),methods:{removeAlias(t){this.tag.alias.splice(t,1)},addAlias(){this.alias&&(this.tag.alias.includes(this.alias)||(this.tag.alias.push(this.alias),this.alias=""))},fetch(){this.tag.id&&(this.$toast.loading("抓取中..."),this.$axios.$get("v1/bangumi/fetch",{params:{source_id:this.tag.id}}).then(t=>{t&&t.name&&(this.tag={...this.tag,...t},this.$refs.uploader.set(t.avatar),this.$toast.stop())}).catch(t=>{400===t.statusCode?(this.$toast.stop(),this.$alert({title:"角色已存在",message:"是否跳转到相应页面？",buttons:["取消","确定"],callback:e=>{e&&this.$bridge.navigateTo({url:`/pages/idol/show/index?slug=${t.message}`})}})):this.$toast.error(t.message)}))},handleSubmit(){this.loading=!0,this.$axios.$post("v1/idol/create",{...this.tag,alias:[this.tag.name,...this.tag.alias],bangumi_slug:this.$route.query.slug}).then(t=>{this.$toast.info("创建成功"),this.$bridge.navigateTo({url:`/pages/idol/show/index?slug=${t}`})}).catch(t=>{this.$toast.error(t.message),this.loading=!1})}},head:()=>({title:"创建角色"})},k=n(1);var component=Object(k.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VForm",{attrs:{id:"create-idol",full:"",form:t.tag,rule:t.rule,loading:t.loading},on:{submit:t.handleSubmit}},[n("VField",{attrs:{placeholder:"bgm.tv 的角色 id",label:"来源"},model:{value:t.tag.id,callback:function(e){t.$set(t.tag,"id",e)},expression:"tag.id"}},[n("VButton",{attrs:{slot:"after",loading:t.loading,type:"success",round:""},on:{click:t.fetch},slot:"after"},[t._v("\n      抓取资源\n    ")])],1),t._v(" "),n("VField",{attrs:{label:"名称"},model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}}),t._v(" "),n("VField",{attrs:{label:"头像"}},[n("VUploader",{ref:"uploader",attrs:{cookie:!1,required:"",url:t.imageUploadAction,accept:t.imageUploadAccept,"transform-request":t.imageUploadRequest,"transform-response":t.imageUploadResponse},model:{value:t.tag.avatar,callback:function(e){t.$set(t.tag,"avatar",e)},expression:"tag.avatar"}})],1),t._v(" "),n("VField",{attrs:{label:"别名"}},[n("div",{staticClass:"alias"},t._l(t.tag.alias,(function(e,o){return n("VButton",{key:e,attrs:{size:"small",plain:""}},[n("span",{domProps:{textContent:t._s(e)}}),t._v(" "),n("i",{staticClass:"bili-font ic_input_close",on:{click:function(e){return t.removeAlias(o)}}})])})),1),t._v(" "),n("VField",{attrs:{close:!1},scopedSlots:t._u([{key:"after",fn:function(){return[n("VButton",{on:{click:t.addAlias}},[t._v("\n          添加\n        ")])]},proxy:!0}]),model:{value:t.alias,callback:function(e){t.alias=e},expression:"alias"}})],1),t._v(" "),n("VField",{attrs:{label:"简介","min-row":4,"max-row":10,"max-len":500,counter:""},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1)}),[],!1,(function(t){var e=n(96);e.__inject__&&e.__inject__(t)}),null,"bdb4c516");e.default=component.exports},46:function(t,e){t.exports={}},47:function(t,e){t.exports={}},48:function(t,e){t.exports={}},49:function(t,e,n){"use strict";var o=n(50);e.a={data:()=>({imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){this.imageUploadToken=await Object(o.a)(this)},imageUploadRequest(data){return data.key=(({slug:t,file:e})=>`${t}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${e.type.split("/").pop()}`)({slug:this.currentUser.slug,file:data.file}),data.token=this.imageUploadToken,data},imageUploadResponse(t){try{return{...t.data,url:`${this.imagePrefix}${t.data.url}`}}catch(t){return{}}}}}},50:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));const o=t=>t.$axios.$get("v1/image/uptoken"),r=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})},52:function(t,e){t.exports={}},57:function(t,e){t.exports={}},96:function(t,e,n){"use strict";n.r(e);var o=n(57),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a}};