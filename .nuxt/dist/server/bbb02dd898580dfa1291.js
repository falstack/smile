exports.ids=[2],exports.modules={105:function(o,t,e){"use strict";e.r(t);e(44),e(18);var n=e(35),r=e.n(n),l=(e(42),e(34)),d=e.n(l),c=(e(40),e(33)),f=e.n(c),v=e(46),h={name:"CreateIdol",components:{VButton:f.a,VField:d.a,VUploader:r.a},mixins:[v.a],data(){return{tag:{id:"",avatar:"",name:"",alias:[],intro:""},rules:{alias:[{validator:(o,t,e)=>{t&&t.length||e(new Error("别名不能为空")),~t.indexOf(this.tag.name)||e(new Error("别名中必须包含名称")),t.some(o=>/,/.test(o))&&e(new Error("别名不能包含英文逗号")),t.join("").length>100&&e(new Error("别名最多100个字符")),e()},trigger:"submit"}]},submitting:!1}},methods:{avatarUploadSuccess(o,t){this.handleImageUploadSuccess(o,t),this.tag.avatar=o.data.url},fetch(){this.tag.id&&this.$axios.$get("v1/bangumi/fetch",{params:{source_id:this.tag.id}}).then(o=>{o&&o.name&&(this.tag={...this.tag,...o})}).catch(o=>400===o.statusCode?(this.$toast.stop(),void this.$confirm("该角色已存在，是否跳转？").then(()=>{this.$bridge.navigateTo({url:`/pages/idol/show/index?slug=${o.message}`})}).catch(()=>{})):this.$toast.error(o.message))},submit(){this.$refs.form.validate(o=>{o&&(this.submitting=!0,this.$axios.$post("v1/idol/create",{...this.tag,alias:[this.tag.name,...this.tag.alias],bangumi_slug:this.$route.query.slug}).then(o=>{this.$toast.info("创建成功"),this.$bridge.navigateTo({url:`/pages/idol/show/index?slug=${o}`})}).catch(o=>{this.$toast.error(o.message),this.submitting=!1}))})}},head:{title:"创建角色"}},m=e(1);var component=Object(m.a)(h,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{attrs:{id:"create-idol"}},[o._ssrNode("<div"+o._ssrAttr("model",o.tag)+o._ssrAttr("rules",o.rules)+o._ssrAttr("disabled",o.submitting)+' label-position="top" class="edit-tag-info-form">',"</div>",[o._ssrNode('<div label="来源" required="required">',"</div>",[e("VField",{attrs:{placeholder:"去 bgm.tv 寻找那个偶像吧！"},model:{value:o.tag.id,callback:function(t){o.$set(o.tag,"id",t)},expression:"tag.id"}})],1),o._ssrNode(" "),o._ssrNode("<div>","</div>",[e("VButton",{attrs:{loading:o.submitting,type:"success",round:""},on:{click:o.fetch}},[o._v("\n        抓取资源\n      ")])],1),o._ssrNode(" "),o._ssrNode('<div label="头像" required="required">',"</div>",[o._ssrNode('<div class="avatar-field">',"</div>",[o._ssrNode((o.tag.avatar?"<img"+o._ssrAttr("src",o.$resize(o.tag.avatar,{width:100}))+' class="avatar">':"\x3c!----\x3e")+" "),e("VUploader",{attrs:{"show-file-list":!1,action:o.imageUploadAction,limit:o.uploadImageLimit,data:o.uploadHeaders,accept:o.imageUploadAccept,"before-upload":o.handleImageUploadBefore,"on-success":o.avatarUploadSuccess,"on-error":o.handleImageUploadError}},[e("VButton",{attrs:{loading:!!o.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[o._v("\n            "+o._s(o.uploadPending?"图片上传中...":"点击上传封面")+"\n          ")])],1)],2)]),o._ssrNode(" "),o._ssrNode('<div label="名称" required="required">',"</div>",[e("VField",{model:{value:o.tag.name,callback:function(t){o.$set(o.tag,"name",t)},expression:"tag.name"}})],1),o._ssrNode(' <div label="别名" prop="alias" required="required"><p class="form-tip">\n        提示：按回车键生效\n      </p>'+o._ssrEscape("\n      "+o._s(o.tag.alias)+"\n    ")+"</div> "),o._ssrNode('<div label="简介" required="required">',"</div>",[e("VField",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"500",resize:"none",placeholder:"请输入板块介绍"},model:{value:o.tag.intro,callback:function(t){o.$set(o.tag,"intro",t)},expression:"tag.intro"}})],1),o._ssrNode(" "),o._ssrNode("<div>","</div>",[e("VButton",{attrs:{loading:o.submitting,type:"success",round:""},on:{click:o.submit}},[o._v("\n        保存更改\n      ")])],1)],2)])}),[],!1,(function(o){var t=e(71);t.__inject__&&t.__inject__(o)}),null,"bdb4c516");t.default=component.exports},40:function(o,t,e){var content=e(41);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals),e(3).default("2e3b382e",content,!0)},41:function(o,t,e){(t=e(2)(!1)).push([o.i,'.v-button{outline:none;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;position:relative;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;cursor:default;border-radius:4px;border:1px solid;text-align:center}.v-button:not(:disabled):active{opacity:.8}.v-button--disabled{opacity:.4}.v-button .loading{position:absolute;left:50%;top:50%;display:block;border-radius:50%;-webkit-animation:rolling 1.4s linear infinite;animation:rolling 1.4s linear infinite;will-change:transform}.v-button .loading:before{content:"";position:absolute;top:0;left:0;width:50%;height:50%;border-radius:100% 0 0 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:right bottom;transform-origin:right bottom}.v-button .loading:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;width:75%;height:75%;border-radius:50%;margin:auto}.v-button--primary{background-color:#fb7299;border-color:#fb7299;color:#fff}.v-button--primary .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--primary .loading:before{background-color:#fff}.v-button--primary .loading:after{background-color:#fb7299}body.night-mode .v-button--primary .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--primary .loading:before{background-color:#fff}body.night-mode .v-button--primary .loading:after{background-color:#eb7093}body.night-mode .v-button--primary{background-color:#eb7093;border-color:#eb7093}.v-button--primary.v-button--plain{background-color:transparent;border-color:#fb7299;color:#fb7299}body.night-mode .v-button--primary.v-button--plain{background-color:transparent;border-color:#eb7093;color:#eb7093}.v-button--primary.v-button--text{background-color:transparent;border-color:transparent;color:#fb7299}body.night-mode .v-button--primary.v-button--text{background-color:transparent;border-color:transparent;color:#eb7093}.v-button--primary.v-button--loading{color:transparent!important}.v-button--primary.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}.v-button--primary.v-button--loading.v-button--plain .loading:before{background-color:#fb7299}.v-button--primary.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--primary.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--primary.v-button--loading.v-button--plain .loading:before{background-color:#fb7299}body.night-mode .v-button--primary.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--primary.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}.v-button--primary.v-button--loading.v-button--text .loading:before{background-color:#fb7299}.v-button--primary.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--primary.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--primary.v-button--loading.v-button--text .loading:before{background-color:#fb7299}body.night-mode .v-button--primary.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--warning{background-color:#faab4b;border-color:#faab4b;color:#fff}.v-button--warning .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--warning .loading:before{background-color:#fff}.v-button--warning .loading:after{background-color:#faab4b}body.night-mode .v-button--warning .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--warning .loading:before{background-color:#fff}body.night-mode .v-button--warning .loading:after{background-color:#e7a24e}body.night-mode .v-button--warning{background-color:#e7a24e;border-color:#e7a24e}.v-button--warning.v-button--plain{background-color:transparent;border-color:#faab4b;color:#faab4b}body.night-mode .v-button--warning.v-button--plain{background-color:transparent;border-color:#e7a24e;color:#e7a24e}.v-button--warning.v-button--text{background-color:transparent;border-color:transparent;color:#faab4b}body.night-mode .v-button--warning.v-button--text{background-color:transparent;border-color:transparent;color:#e7a24e}.v-button--warning.v-button--loading{color:transparent!important}.v-button--warning.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}.v-button--warning.v-button--loading.v-button--plain .loading:before{background-color:#faab4b}.v-button--warning.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--warning.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--warning.v-button--loading.v-button--plain .loading:before{background-color:#faab4b}body.night-mode .v-button--warning.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--warning.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}.v-button--warning.v-button--loading.v-button--text .loading:before{background-color:#faab4b}.v-button--warning.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--warning.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--warning.v-button--loading.v-button--text .loading:before{background-color:#faab4b}body.night-mode .v-button--warning.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--danger{background-color:#fa5a57;border-color:#fa5a57;color:#fff}.v-button--danger .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--danger .loading:before{background-color:#fff}.v-button--danger .loading:after{background-color:#fa5a57}body.night-mode .v-button--danger .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--danger .loading:before{background-color:#fff}body.night-mode .v-button--danger .loading:after{background-color:#e85b59}body.night-mode .v-button--danger{background-color:#e85b59;border-color:#e85b59}.v-button--danger.v-button--plain{background-color:transparent;border-color:#fa5a57;color:#fa5a57}body.night-mode .v-button--danger.v-button--plain{background-color:transparent;border-color:#e85b59;color:#e85b59}.v-button--danger.v-button--text{background-color:transparent;border-color:transparent;color:#fa5a57}body.night-mode .v-button--danger.v-button--text{background-color:transparent;border-color:transparent;color:#e85b59}.v-button--danger.v-button--loading{color:transparent!important}.v-button--danger.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}.v-button--danger.v-button--loading.v-button--plain .loading:before{background-color:#fa5a57}.v-button--danger.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--danger.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--danger.v-button--loading.v-button--plain .loading:before{background-color:#fa5a57}body.night-mode .v-button--danger.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--danger.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}.v-button--danger.v-button--loading.v-button--text .loading:before{background-color:#fa5a57}.v-button--danger.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--danger.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--danger.v-button--loading.v-button--text .loading:before{background-color:#fa5a57}body.night-mode .v-button--danger.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--success{background-color:#6dc781;border-color:#6dc781;color:#fff}.v-button--success .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--success .loading:before{background-color:#fff}.v-button--success .loading:after{background-color:#6dc781}body.night-mode .v-button--success .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--success .loading:before{background-color:#fff}body.night-mode .v-button--success .loading:after{background-color:#6cb97d}body.night-mode .v-button--success{background-color:#6cb97d;border-color:#6cb97d}.v-button--success.v-button--plain{background-color:transparent;border-color:#6dc781;color:#6dc781}body.night-mode .v-button--success.v-button--plain{background-color:transparent;border-color:#6cb97d;color:#6cb97d}.v-button--success.v-button--text{background-color:transparent;border-color:transparent;color:#6dc781}body.night-mode .v-button--success.v-button--text{background-color:transparent;border-color:transparent;color:#6cb97d}.v-button--success.v-button--loading{color:transparent!important}.v-button--success.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}.v-button--success.v-button--loading.v-button--plain .loading:before{background-color:#6dc781}.v-button--success.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--success.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--success.v-button--loading.v-button--plain .loading:before{background-color:#6dc781}body.night-mode .v-button--success.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--success.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}.v-button--success.v-button--loading.v-button--text .loading:before{background-color:#6dc781}.v-button--success.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--success.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--success.v-button--loading.v-button--text .loading:before{background-color:#6dc781}body.night-mode .v-button--success.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--info{background-color:#e7e7e7;border-color:#e7e7e7;color:#999}.v-button--info .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#999),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#999 20%,hsla(0,0%,100%,0) 70%)}.v-button--info .loading:before{background-color:#999}.v-button--info .loading:after{background-color:#e7e7e7}body.night-mode .v-button--info .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#999),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#999 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--info .loading:before{background-color:#999}body.night-mode .v-button--info .loading:after{background-color:#2a2a2a}body.night-mode .v-button--info{background-color:#2a2a2a;border-color:#2a2a2a}.v-button--info.v-button--plain{background-color:transparent;border-color:silver;color:#999}body.night-mode .v-button--info.v-button--plain{background-color:transparent;border-color:#4e4e4e;color:#727272}.v-button--info.v-button--text{background-color:transparent;border-color:transparent;color:#999}body.night-mode .v-button--info.v-button--text{background-color:transparent;border-color:transparent;color:#727272}.v-button--info.v-button--loading{color:transparent!important}.v-button--info.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}.v-button--info.v-button--loading.v-button--plain .loading:before{background-color:#e7e7e7}.v-button--info.v-button--loading.v-button--plain .loading:after{background-color:#999}body.night-mode .v-button--info.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--info.v-button--loading.v-button--plain .loading:before{background-color:#e7e7e7}body.night-mode .v-button--info.v-button--loading.v-button--plain .loading:after{background-color:#727272}.v-button--info.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}.v-button--info.v-button--loading.v-button--text .loading:before{background-color:#e7e7e7}.v-button--info.v-button--loading.v-button--text .loading:after{background-color:#999}body.night-mode .v-button--info.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--info.v-button--loading.v-button--text .loading:before{background-color:#e7e7e7}body.night-mode .v-button--info.v-button--loading.v-button--text .loading:after{background-color:#727272}.v-button--small{padding:2px 12px;font-size:13px}.v-button--small .loading{width:13px;height:13px;margin-left:-6.5px;margin-top:-6.5px}.v-button--medium{padding:4px 11px;font-size:14px}.v-button--medium .loading{width:14px;height:14px;margin-left:-7px;margin-top:-7px}.v-button--large{padding:10px 38px;font-size:16px}.v-button--large .loading{width:16px;height:16px;margin-left:-8px;margin-top:-8px}.v-button--block{display:block;width:100%}',""]),o.exports=t},42:function(o,t,e){var content=e(43);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals),e(3).default("4bdd0704",content,!0)},43:function(o,t,e){(t=e(2)(!1)).push([o.i,'.v-field__input input,.v-field__input textarea{border:none;outline:none;-webkit-appearance:none;-webkit-tap-highlight-color:transparent}.v-field{min-height:44px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:end;align-items:flex-end;overflow:hidden;background-color:#fff}body.night-mode .v-field{background-color:#141414}.v-field__before--line{padding-right:12px}.v-field__before--line:before{right:0}.v-field__after--line,.v-field__before--has{padding-left:12px}.v-field__after--line:before{left:0}.v-field__after--has{padding-right:12px}.v-field__after,.v-field__before{font-size:14px;height:100%;line-height:44px;flex-shrink:0;color:#212121}body.night-mode .v-field__after,body.night-mode .v-field__before{color:#e1e1e1}.v-field__after--line,.v-field__before--line{position:relative}.v-field__after--line:before,.v-field__before--line:before{content:"";position:absolute;top:9px;width:1px;height:26px;-webkit-transform:scaleX(.5);transform:scaleX(.5);background-color:#e7e7e7}body.night-mode .v-field__after--line:before,body.night-mode .v-field__before--line:before{background-color:#2a2a2a}.v-field__main{-webkit-box-flex:1;flex:1;height:100%}.v-field__cancel{float:right;height:100%}.v-field__cancel i{display:block;height:100%;line-height:44px;margin-left:12px;margin-right:12px;font-size:16px;color:#999}body.night-mode .v-field__cancel i{color:#727272}.v-field__input{overflow:hidden;height:100%}.v-field__input input,.v-field__input textarea{display:block;width:100%;line-height:20px;font-size:14px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;background-color:transparent;color:#212121;caret-color:#fb7299}body.night-mode .v-field__input input,body.night-mode .v-field__input textarea{color:#e1e1e1;caret-color:#eb7093}.v-field__input input::-webkit-input-placeholder,.v-field__input textarea::-webkit-input-placeholder{color:silver}.v-field__input input::-moz-placeholder,.v-field__input textarea::-moz-placeholder{color:silver}.v-field__input input:-ms-input-placeholder,.v-field__input textarea:-ms-input-placeholder{color:silver}.v-field__input input::-ms-input-placeholder,.v-field__input textarea::-ms-input-placeholder{color:silver}.v-field__input input::placeholder,.v-field__input textarea::placeholder{color:silver}body.night-mode .v-field__input input::-webkit-input-placeholder,body.night-mode .v-field__input textarea::-webkit-input-placeholder{color:#4e4e4e}body.night-mode .v-field__input input::-moz-placeholder,body.night-mode .v-field__input textarea::-moz-placeholder{color:#4e4e4e}body.night-mode .v-field__input input:-ms-input-placeholder,body.night-mode .v-field__input textarea:-ms-input-placeholder{color:#4e4e4e}body.night-mode .v-field__input input::-ms-input-placeholder,body.night-mode .v-field__input textarea::-ms-input-placeholder{color:#4e4e4e}body.night-mode .v-field__input input::placeholder,body.night-mode .v-field__input textarea::placeholder{color:#4e4e4e}.v-field__input input{padding:12px;height:44px}.v-field__input textarea{resize:none;min-height:44px;padding:0 12px}.v-field__input--close input{padding-right:0}.v-field__input--error input,.v-field__input--error textarea{color:#fa5a57}body.night-mode .v-field__input--error input,body.night-mode .v-field__input--error textarea{color:#e85b59}.v-field__textarea{padding:12px 0}.v-field__textarea--auto{position:relative}.v-field__textarea--auto pre{width:100%;height:100%;padding:0 12px;line-height:20px;min-height:20px;opacity:0;word-break:break-all;white-space:pre-wrap;word-wrap:break-word;letter-spacing:normal;word-spacing:normal;pointer-events:none;font-size:14px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.v-field__textarea--auto textarea{position:absolute;top:0;left:0;right:0;bottom:0}.v-field__counter{text-align:right;padding-right:12px;font-size:13px;line-height:13px;margin-top:4px;margin-bottom:-8px;color:#999}body.night-mode .v-field__counter{color:#727272}',""]),o.exports=t},44:function(o,t,e){var content=e(45);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals),e(3).default("7c8f9b2e",content,!0)},45:function(o,t,e){(t=e(2)(!1)).push([o.i,'.v-uploader{font-size:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-uploader--custom{font-size:inherit}.v-uploader__action{display:inline-block;position:relative;overflow:hidden}.v-uploader__action input[type=file]{position:absolute;top:0;left:0;right:0;bottom:0;opacity:0}.v-uploader__action__wrap{pointer-events:none;display:inline}.v-uploader__btn{position:relative;display:inline-block;width:80px;height:80px;border-radius:4px;background-color:#fff;border:1px dashed #e5e5e5}body.night-mode .v-uploader__btn{background-color:#141414;border-color:#2c2c2c}.v-uploader__btn .ic_add{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:24px;color:#969799}body.night-mode .v-uploader__btn .ic_add{color:#8f8f91}.v-uploader__files+.v-uploader__action,.v-uploader__item{margin:0 8px 8px 0}.v-uploader__item{position:relative;display:inline-block;width:80px;height:80px;background-color:#f4f4f4}body.night-mode .v-uploader__item{background-color:#1f1f1f}.v-uploader__item__poster{display:block;-o-object-fit:cover;object-fit:cover;width:100%;height:100%;border-radius:4px}.v-uploader__item__cancel{position:absolute;top:-8px;right:-8px;display:block;width:18px;height:18px;font-size:18px;line-height:18px;text-align:center;border-radius:50%;z-index:1;color:#969799;background-color:#fff}body.night-mode .v-uploader__item__cancel{color:#8f8f91;background-color:#141414}.v-uploader__item__mask{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);border-radius:4px}.v-uploader__item__mask span{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-size:12px;text-align:center;width:100%}.v-uploader__item__loading div{position:absolute;left:50%;top:50%;margin-left:-10px;margin-top:-10px;width:20px;height:20px;border-radius:50%;-webkit-animation:skr 1.5s linear infinite;animation:skr 1.5s linear infinite;border:2px solid #fff;box-shadow:0 0 5px #fff}@keyframes skr{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes skr{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}.v-uploader__item__status{position:absolute;right:0;bottom:0;width:40px;height:40px;border-radius:4px;overflow:hidden}.v-uploader__item__status:before{content:"";position:absolute;left:20px;top:20px;width:100%;height:100%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.v-uploader__item__status.is-success:before{background-color:#6dc781}body.night-mode .v-uploader__item__status.is-success:before{background-color:#6cb97d}.v-uploader__item__status.is-error:before{background-color:#fa5a57}body.night-mode .v-uploader__item__status.is-error:before{background-color:#e85b59}.v-uploader__item__status .bili-font{position:absolute;display:block;font-size:14px;width:14px;height:14px;right:2px;bottom:2px;color:#fff;text-align:center}',""]),o.exports=t},46:function(o,t,e){"use strict";t.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){let o=this.$cache.get("UPLOAD-TOKEN");var t;o?this.uploadHeaders.token=this.$cache.get("UPLOAD-TOKEN"):(o=await(t=this,t.$axios.$get("v1/image/uptoken")),this.uploadHeaders.token=o,this.$cache.set("UPLOAD-TOKEN",o,3e3))},handleImageUploadError(o,t){this.uploadImageList.forEach((e,n)=>{e.uid===t.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(o))}),this.$toast.error(`图片：${t.name} 上传失败`)},handleImageUploadRemove(o){this.uploadImageList.forEach((t,e)=>{t.uid===o.uid&&(this.uploadImageList.splice(e,1),this.uploadImageTotal--)})},handleImageUploadSuccess(o,t){this.uploadImageList.forEach((e,n)=>{e.uid===t.uid&&(this.uploadImageList[n]=Object.assign(e,{data:o.data,status:"success",url:this.$resize(`${this.imagePrefix}${o.data.url}`,{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(o){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(o.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<o.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:o,file:t})=>`${o}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${t.type.split("/").pop()}`)({slug:this.currentUser.slug,file:o}),this.uploadImageList.push({name:o.name,percentage:0,raw:o,size:o.size,status:"uploading",errMsg:"",uid:o.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},52:function(o,t,e){var content=e(72);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);var n=e(3).default;o.exports.__inject__=function(o){n("0814e2bb",content,!0,o)}},71:function(o,t,e){"use strict";e.r(t);var n=e(52),r=e.n(n);for(var l in n)"default"!==l&&function(o){e.d(t,o,(function(){return n[o]}))}(l);t.default=r.a},72:function(o,t,e){(t=e(2)(!1)).push([o.i,"@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}#create-idol{padding:15px}",""]),o.exports=t}};