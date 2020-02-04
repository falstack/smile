exports.ids=[12],exports.modules={100:function(e,t,o){"use strict";o.r(t);var n=o(63),r=o.n(n);for(var d in n)"default"!==d&&function(e){o.d(t,e,(function(){return n[e]}))}(d);t.default=r.a},154:function(e,t,o){"use strict";o.r(t);o(45),o(18);var n=o(32),r=o.n(n),d=(o(48),o(33)),l=o.n(d),c=(o(44),o(31)),h=o.n(c),m=o(49),v=o(46),f={name:"EditBangumi",components:{VButton:h.a,VUploader:l.a,VField:r.a},mixins:[m.a,v.a],asyncData({app:e,error:t,query:o}){const n=o.slug;if(n)return e.$axios.$get("v1/idol/show",{params:{slug:n}}).then(e=>({idol:e})).catch(t)},data:()=>({idol:null,loading:!1}),methods:{avatarUploadSuccess(e,t){this.handleImageUploadSuccess(e,t),this.idol.avatar=e.data.url},handleSubmit(){this.loading||(this.loading=!0,this.$axios.$post("v1/idol/update",this.idol).then(()=>{this.$toast.success("修改成功")}).catch(e=>{this.$toast.error(e.message)}).finally(()=>{this.loading=!1}))}},head:{title:"编辑偶像"}},$=o(1);var component=Object($.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.idol?o("div",{attrs:{id:"edit-idol"}},[e._ssrNode('<div label-position="top" label-width="80px">',"</div>",[e._ssrNode('<div label="名称">',"</div>",[o("VField",{attrs:{disabled:""},model:{value:e.idol.name,callback:function(t){e.$set(e.idol,"name",t)},expression:"idol.name"}})],1),e._ssrNode(" "),e._ssrNode('<div label="头像">',"</div>",[e._ssrNode('<div class="avatar-field">',"</div>",[e._ssrNode("<img"+e._ssrAttr("src",e.$resize(e.idol.avatar,{width:100}))+' class="avatar"> '),o("VUploader",{attrs:{"show-file-list":!1,action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.avatarUploadSuccess,"on-error":e.handleImageUploadError}},[o("VButton",{attrs:{loading:!!e.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[e._v("\n            "+e._s(e.uploadPending?"图片上传中...":"点击上传头像")+"\n          ")])],1)],2)]),e._ssrNode(' <div label="别名">'+e._ssrEscape("\n      "+e._s(e.idol.alias)+"\n    ")+"</div> "),e._ssrNode('<div label="简介">',"</div>",[o("VField",{attrs:{type:"textarea",rows:"4",resize:"vertical"},model:{value:e.idol.intro,callback:function(t){e.$set(e.idol,"intro",t)},expression:"idol.intro"}})],1),e._ssrNode(" "),e._ssrNode("<div>","</div>",[o("VButton",{on:{click:e.handleSubmit}},[e._v("\n        提交\n      ")])],1)],2)]):e._e()}),[],!1,(function(e){var t=o(100);t.__inject__&&t.__inject__(e)}),null,"6424e74d");t.default=component.exports},44:function(e,t){e.exports={}},45:function(e,t){e.exports={}},46:function(e,t,o){"use strict";var n=o(47);t.a={data:()=>({imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){this.imageUploadToken=await Object(n.a)(this)},imageUploadRequest(data){return data.key=(({slug:e,file:t})=>`${e}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${t.type.split("/").pop()}`)({slug:this.currentUser.slug,file:data.file}),data.token=this.imageUploadToken,data},imageUploadResponse(e){try{return{...e.data,url:`${this.imagePrefix}${e.data.url}`}}catch(e){return{}}}}}},47:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return r}));const n=e=>e.$axios.$get("v1/image/uptoken"),r=(e,t)=>e.$axios.$post("https://up.qbox.me",t,{"Content-Type":"multipart/form-data"})},48:function(e,t){e.exports={}},49:function(e,t,o){"use strict";t.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{this.$bridge.redirectTo({url:`/pages/user/login/index?from=${encodeURIComponent(window.location.href)}`})})})}}},63:function(e,t){e.exports={}}};