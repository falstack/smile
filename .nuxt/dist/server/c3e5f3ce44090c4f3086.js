exports.ids=[2],exports.modules={151:function(t,e,r){"use strict";r.r(e);r(50),r(18);var o=r(33),n=r.n(o),d=(r(47),r(32)),l=r.n(d),c=(r(46),r(31)),h=r.n(c),m=r(48),v={name:"CreateIdol",components:{VButton:h.a,VField:l.a,VUploader:n.a},mixins:[m.a],data(){return{tag:{id:"",avatar:"",name:"",alias:[],intro:""},rules:{alias:[{validator:(t,e,r)=>{e&&e.length||r(new Error("别名不能为空")),~e.indexOf(this.tag.name)||r(new Error("别名中必须包含名称")),e.some(t=>/,/.test(t))&&r(new Error("别名不能包含英文逗号")),e.join("").length>100&&r(new Error("别名最多100个字符")),r()},trigger:"submit"}]},submitting:!1}},methods:{avatarUploadSuccess(t,e){this.handleImageUploadSuccess(t,e),this.tag.avatar=t.data.url},fetch(){this.tag.id&&this.$axios.$get("v1/bangumi/fetch",{params:{source_id:this.tag.id}}).then(t=>{t&&t.name&&(this.tag={...this.tag,...t})}).catch(t=>400===t.statusCode?(this.$toast.stop(),void this.$confirm("该角色已存在，是否跳转？").then(()=>{this.$bridge.navigateTo({url:`/pages/idol/show/index?slug=${t.message}`})}).catch(()=>{})):this.$toast.error(t.message))},submit(){this.$refs.form.validate(t=>{t&&(this.submitting=!0,this.$axios.$post("v1/idol/create",{...this.tag,alias:[this.tag.name,...this.tag.alias],bangumi_slug:this.$route.query.slug}).then(t=>{this.$toast.info("创建成功"),this.$bridge.navigateTo({url:`/pages/idol/show/index?slug=${t}`})}).catch(t=>{this.$toast.error(t.message),this.submitting=!1}))})}},head:()=>({title:"创建角色"})},f=r(1);var component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"create-idol"}},[t._ssrNode("<div"+t._ssrAttr("model",t.tag)+t._ssrAttr("rules",t.rules)+t._ssrAttr("disabled",t.submitting)+' label-position="top" class="edit-tag-info-form">',"</div>",[t._ssrNode('<div label="来源" required="required">',"</div>",[r("VField",{attrs:{placeholder:"去 bgm.tv 寻找那个偶像吧！"},model:{value:t.tag.id,callback:function(e){t.$set(t.tag,"id",e)},expression:"tag.id"}})],1),t._ssrNode(" "),t._ssrNode("<div>","</div>",[r("VButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.fetch}},[t._v("\n        抓取资源\n      ")])],1),t._ssrNode(" "),t._ssrNode('<div label="头像" required="required">',"</div>",[t._ssrNode('<div class="avatar-field">',"</div>",[t._ssrNode((t.tag.avatar?"<img"+t._ssrAttr("src",t.$resize(t.tag.avatar,{width:100}))+' class="avatar">':"\x3c!----\x3e")+" "),r("VUploader",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[r("VButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传封面")+"\n          ")])],1)],2)]),t._ssrNode(" "),t._ssrNode('<div label="名称" required="required">',"</div>",[r("VField",{model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),t._ssrNode(' <div label="别名" prop="alias" required="required"><p class="form-tip">\n        提示：按回车键生效\n      </p>'+t._ssrEscape("\n      "+t._s(t.tag.alias)+"\n    ")+"</div> "),t._ssrNode('<div label="简介" required="required">',"</div>",[r("VField",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"500",resize:"none",placeholder:"请输入板块介绍"},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1),t._ssrNode(" "),t._ssrNode("<div>","</div>",[r("VButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n        保存更改\n      ")])],1)],2)])}),[],!1,(function(t){var e=r(93);e.__inject__&&e.__inject__(t)}),null,"bdb4c516");e.default=component.exports},46:function(t,e){t.exports={}},47:function(t,e){t.exports={}},48:function(t,e,r){"use strict";var o=r(49);e.a={data:()=>({imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){this.imageUploadToken=await Object(o.a)(this)},imageUploadRequest(data){return data.key=(({slug:t,file:e})=>`${t}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${e.type.split("/").pop()}`)({slug:this.currentUser.slug,file:data.file}),data.token=this.imageUploadToken,data},imageUploadResponse(t){try{return{...t.data,url:`${this.imagePrefix}${t.data.url}`}}catch(t){return{}}}}}},49:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n}));const o=t=>t.$axios.$get("v1/image/uptoken"),n=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})},50:function(t,e){t.exports={}},55:function(t,e){t.exports={}},93:function(t,e,r){"use strict";r.r(e);var o=r(55),n=r.n(o);for(var d in o)"default"!==d&&function(t){r.d(e,t,(function(){return o[t]}))}(d);e.default=n.a}};