exports.ids=[12],exports.modules={100:function(o,t,n){"use strict";n.r(t);var e=n(69),r=n.n(e);for(var l in e)"default"!==l&&function(o){n.d(t,o,(function(){return e[o]}))}(l);t.default=r.a},101:function(o,t,n){(t=n(2)(!1)).push([o.i,"@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}#edit-idol{padding:15px}#edit-idol .avatar-field{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:center;align-items:center}#edit-idol .avatar-field .avatar{width:100px;height:100px;border-radius:10%;margin-right:15px}",""]),o.exports=t},160:function(o,t,n){"use strict";n.r(t);n(47),n(18);var e=n(34),r=n.n(e),l=(n(51),n(35)),d=n.n(l),c=(n(45),n(33)),f=n.n(c),v=n(53),h=n(49),k={name:"EditBangumi",components:{VButton:f.a,VUploader:d.a,VField:r.a},mixins:[v.a,h.a],asyncData({app:o,error:t,query:n}){const e=n.slug;if(e)return o.$axios.$get("v1/idol/show",{params:{slug:e}}).then(o=>({idol:o})).catch(t)},data:()=>({idol:null,loading:!1}),methods:{avatarUploadSuccess(o,t){this.handleImageUploadSuccess(o,t),this.idol.avatar=o.data.url},handleSubmit(){this.loading||(this.loading=!0,this.$axios.$post("v1/idol/update",this.idol).then(()=>{this.$toast.success("修改成功")}).catch(o=>{this.$toast.error(o.message)}).finally(()=>{this.loading=!1}))}},head:{title:"编辑偶像"}},m=n(1);var component=Object(m.a)(k,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return o.idol?n("div",{attrs:{id:"edit-idol"}},[o._ssrNode('<div label-position="top" label-width="80px">',"</div>",[o._ssrNode('<div label="名称">',"</div>",[n("VField",{attrs:{disabled:""},model:{value:o.idol.name,callback:function(t){o.$set(o.idol,"name",t)},expression:"idol.name"}})],1),o._ssrNode(" "),o._ssrNode('<div label="头像">',"</div>",[o._ssrNode('<div class="avatar-field">',"</div>",[o._ssrNode("<img"+o._ssrAttr("src",o.$resize(o.idol.avatar,{width:100}))+' class="avatar"> '),n("VUploader",{attrs:{"show-file-list":!1,action:o.imageUploadAction,limit:o.uploadImageLimit,data:o.uploadHeaders,accept:o.imageUploadAccept,"before-upload":o.handleImageUploadBefore,"on-success":o.avatarUploadSuccess,"on-error":o.handleImageUploadError}},[n("VButton",{attrs:{loading:!!o.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[o._v("\n            "+o._s(o.uploadPending?"图片上传中...":"点击上传头像")+"\n          ")])],1)],2)]),o._ssrNode(' <div label="别名">'+o._ssrEscape("\n      "+o._s(o.idol.alias)+"\n    ")+"</div> "),o._ssrNode('<div label="简介">',"</div>",[n("VField",{attrs:{type:"textarea",rows:"4",resize:"vertical"},model:{value:o.idol.intro,callback:function(t){o.$set(o.idol,"intro",t)},expression:"idol.intro"}})],1),o._ssrNode(" "),o._ssrNode("<div>","</div>",[n("VButton",{on:{click:o.handleSubmit}},[o._v("\n        提交\n      ")])],1)],2)]):o._e()}),[],!1,(function(o){var t=n(100);t.__inject__&&t.__inject__(o)}),null,"6424e74d");t.default=component.exports},45:function(o,t,n){var content=n(46);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals),n(3).default("2e3b382e",content,!0)},46:function(o,t,n){(t=n(2)(!1)).push([o.i,'.v-button{outline:none;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;position:relative;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;cursor:default;border-radius:4px;border:1px solid;text-align:center}.v-button:not(:disabled):active{opacity:.8}.v-button--disabled{opacity:.4}.v-button .loading{position:absolute;left:50%;top:50%;display:block;border-radius:50%;-webkit-animation:rolling 1.4s linear infinite;animation:rolling 1.4s linear infinite;will-change:transform}.v-button .loading:before{content:"";position:absolute;top:0;left:0;width:50%;height:50%;border-radius:100% 0 0 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:right bottom;transform-origin:right bottom}.v-button .loading:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;width:75%;height:75%;border-radius:50%;margin:auto}.v-button--primary{background-color:#fb7299;border-color:#fb7299;color:#fff}.v-button--primary .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--primary .loading:before{background-color:#fff}.v-button--primary .loading:after{background-color:#fb7299}body.night-mode .v-button--primary .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--primary .loading:before{background-color:#fff}body.night-mode .v-button--primary .loading:after{background-color:#eb7093}body.night-mode .v-button--primary{background-color:#eb7093;border-color:#eb7093}.v-button--primary.v-button--plain{background-color:transparent;border-color:#fb7299;color:#fb7299}body.night-mode .v-button--primary.v-button--plain{background-color:transparent;border-color:#eb7093;color:#eb7093}.v-button--primary.v-button--text{background-color:transparent;border-color:transparent;color:#fb7299}body.night-mode .v-button--primary.v-button--text{background-color:transparent;border-color:transparent;color:#eb7093}.v-button--primary.v-button--loading{color:transparent!important}.v-button--primary.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}.v-button--primary.v-button--loading.v-button--plain .loading:before{background-color:#fb7299}.v-button--primary.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--primary.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--primary.v-button--loading.v-button--plain .loading:before{background-color:#fb7299}body.night-mode .v-button--primary.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--primary.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}.v-button--primary.v-button--loading.v-button--text .loading:before{background-color:#fb7299}.v-button--primary.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--primary.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--primary.v-button--loading.v-button--text .loading:before{background-color:#fb7299}body.night-mode .v-button--primary.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--warning{background-color:#faab4b;border-color:#faab4b;color:#fff}.v-button--warning .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--warning .loading:before{background-color:#fff}.v-button--warning .loading:after{background-color:#faab4b}body.night-mode .v-button--warning .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--warning .loading:before{background-color:#fff}body.night-mode .v-button--warning .loading:after{background-color:#e7a24e}body.night-mode .v-button--warning{background-color:#e7a24e;border-color:#e7a24e}.v-button--warning.v-button--plain{background-color:transparent;border-color:#faab4b;color:#faab4b}body.night-mode .v-button--warning.v-button--plain{background-color:transparent;border-color:#e7a24e;color:#e7a24e}.v-button--warning.v-button--text{background-color:transparent;border-color:transparent;color:#faab4b}body.night-mode .v-button--warning.v-button--text{background-color:transparent;border-color:transparent;color:#e7a24e}.v-button--warning.v-button--loading{color:transparent!important}.v-button--warning.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}.v-button--warning.v-button--loading.v-button--plain .loading:before{background-color:#faab4b}.v-button--warning.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--warning.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--warning.v-button--loading.v-button--plain .loading:before{background-color:#faab4b}body.night-mode .v-button--warning.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--warning.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}.v-button--warning.v-button--loading.v-button--text .loading:before{background-color:#faab4b}.v-button--warning.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--warning.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--warning.v-button--loading.v-button--text .loading:before{background-color:#faab4b}body.night-mode .v-button--warning.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--danger{background-color:#fa5a57;border-color:#fa5a57;color:#fff}.v-button--danger .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--danger .loading:before{background-color:#fff}.v-button--danger .loading:after{background-color:#fa5a57}body.night-mode .v-button--danger .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--danger .loading:before{background-color:#fff}body.night-mode .v-button--danger .loading:after{background-color:#e85b59}body.night-mode .v-button--danger{background-color:#e85b59;border-color:#e85b59}.v-button--danger.v-button--plain{background-color:transparent;border-color:#fa5a57;color:#fa5a57}body.night-mode .v-button--danger.v-button--plain{background-color:transparent;border-color:#e85b59;color:#e85b59}.v-button--danger.v-button--text{background-color:transparent;border-color:transparent;color:#fa5a57}body.night-mode .v-button--danger.v-button--text{background-color:transparent;border-color:transparent;color:#e85b59}.v-button--danger.v-button--loading{color:transparent!important}.v-button--danger.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}.v-button--danger.v-button--loading.v-button--plain .loading:before{background-color:#fa5a57}.v-button--danger.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--danger.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--danger.v-button--loading.v-button--plain .loading:before{background-color:#fa5a57}body.night-mode .v-button--danger.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--danger.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}.v-button--danger.v-button--loading.v-button--text .loading:before{background-color:#fa5a57}.v-button--danger.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--danger.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--danger.v-button--loading.v-button--text .loading:before{background-color:#fa5a57}body.night-mode .v-button--danger.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--success{background-color:#6dc781;border-color:#6dc781;color:#fff}.v-button--success .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--success .loading:before{background-color:#fff}.v-button--success .loading:after{background-color:#6dc781}body.night-mode .v-button--success .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--success .loading:before{background-color:#fff}body.night-mode .v-button--success .loading:after{background-color:#6cb97d}body.night-mode .v-button--success{background-color:#6cb97d;border-color:#6cb97d}.v-button--success.v-button--plain{background-color:transparent;border-color:#6dc781;color:#6dc781}body.night-mode .v-button--success.v-button--plain{background-color:transparent;border-color:#6cb97d;color:#6cb97d}.v-button--success.v-button--text{background-color:transparent;border-color:transparent;color:#6dc781}body.night-mode .v-button--success.v-button--text{background-color:transparent;border-color:transparent;color:#6cb97d}.v-button--success.v-button--loading{color:transparent!important}.v-button--success.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}.v-button--success.v-button--loading.v-button--plain .loading:before{background-color:#6dc781}.v-button--success.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--success.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--success.v-button--loading.v-button--plain .loading:before{background-color:#6dc781}body.night-mode .v-button--success.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--success.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}.v-button--success.v-button--loading.v-button--text .loading:before{background-color:#6dc781}.v-button--success.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--success.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--success.v-button--loading.v-button--text .loading:before{background-color:#6dc781}body.night-mode .v-button--success.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--info{background-color:#e7e7e7;border-color:#e7e7e7;color:#999}.v-button--info .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#999),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#999 20%,hsla(0,0%,100%,0) 70%)}.v-button--info .loading:before{background-color:#999}.v-button--info .loading:after{background-color:#e7e7e7}body.night-mode .v-button--info .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#999),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#999 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--info .loading:before{background-color:#999}body.night-mode .v-button--info .loading:after{background-color:#2a2a2a}body.night-mode .v-button--info{background-color:#2a2a2a;border-color:#2a2a2a}.v-button--info.v-button--plain{background-color:transparent;border-color:silver;color:#999}body.night-mode .v-button--info.v-button--plain{background-color:transparent;border-color:#4e4e4e;color:#727272}.v-button--info.v-button--text{background-color:transparent;border-color:transparent;color:#999}body.night-mode .v-button--info.v-button--text{background-color:transparent;border-color:transparent;color:#727272}.v-button--info.v-button--loading{color:transparent!important}.v-button--info.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}.v-button--info.v-button--loading.v-button--plain .loading:before{background-color:#e7e7e7}.v-button--info.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--info.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--info.v-button--loading.v-button--plain .loading:before{background-color:#e7e7e7}body.night-mode .v-button--info.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--info.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}.v-button--info.v-button--loading.v-button--text .loading:before{background-color:#e7e7e7}.v-button--info.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--info.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--info.v-button--loading.v-button--text .loading:before{background-color:#e7e7e7}body.night-mode .v-button--info.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--small{padding:2px 12px;font-size:13px}.v-button--small .loading{width:13px;height:13px;margin-left:-6.5px;margin-top:-6.5px}.v-button--medium{padding:4px 11px;font-size:14px}.v-button--medium .loading{width:14px;height:14px;margin-left:-7px;margin-top:-7px}.v-button--large{padding:10px 38px;font-size:16px}.v-button--large .loading{width:16px;height:16px;margin-left:-8px;margin-top:-8px}.v-button--block{display:block;width:100%}',""]),o.exports=t},47:function(o,t,n){var content=n(48);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals),n(3).default("4bdd0704",content,!0)},48:function(o,t,n){(t=n(2)(!1)).push([o.i,'.v-field__input input,.v-field__input textarea{border:none;outline:none;-webkit-appearance:none;-webkit-tap-highlight-color:transparent}.v-field{min-height:44px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:end;align-items:flex-end;overflow:hidden;background-color:#fff}body.night-mode .v-field{background-color:#141414}.v-field__before--line{padding-right:12px}.v-field__before--line:before{right:0}.v-field__after--line,.v-field__before--has{padding-left:12px}.v-field__after--line:before{left:0}.v-field__after--has{padding-right:12px}.v-field__after,.v-field__before{font-size:14px;height:100%;line-height:44px;flex-shrink:0;color:#212121}body.night-mode .v-field__after,body.night-mode .v-field__before{color:#e1e1e1}.v-field__after--line,.v-field__before--line{position:relative}.v-field__after--line:before,.v-field__before--line:before{content:"";position:absolute;top:9px;width:1px;height:26px;-webkit-transform:scaleX(.5);transform:scaleX(.5);background-color:#e7e7e7}body.night-mode .v-field__after--line:before,body.night-mode .v-field__before--line:before{background-color:#2a2a2a}.v-field__main{-webkit-box-flex:1;flex:1;height:100%}.v-field__cancel{float:right;height:100%}.v-field__cancel i{display:block;height:100%;line-height:44px;margin-left:12px;margin-right:12px;font-size:16px;color:#999}body.night-mode .v-field__cancel i{color:#727272}.v-field__input{overflow:hidden;height:100%}.v-field__input input,.v-field__input textarea{display:block;width:100%;line-height:20px;font-size:14px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;background-color:transparent;color:#212121;caret-color:#fb7299}body.night-mode .v-field__input input,body.night-mode .v-field__input textarea{color:#e1e1e1;caret-color:#eb7093}.v-field__input input::-webkit-input-placeholder,.v-field__input textarea::-webkit-input-placeholder{color:silver}.v-field__input input::-moz-placeholder,.v-field__input textarea::-moz-placeholder{color:silver}.v-field__input input:-ms-input-placeholder,.v-field__input textarea:-ms-input-placeholder{color:silver}.v-field__input input::-ms-input-placeholder,.v-field__input textarea::-ms-input-placeholder{color:silver}.v-field__input input::placeholder,.v-field__input textarea::placeholder{color:silver}body.night-mode .v-field__input input::-webkit-input-placeholder,body.night-mode .v-field__input textarea::-webkit-input-placeholder{color:#4e4e4e}body.night-mode .v-field__input input::-moz-placeholder,body.night-mode .v-field__input textarea::-moz-placeholder{color:#4e4e4e}body.night-mode .v-field__input input:-ms-input-placeholder,body.night-mode .v-field__input textarea:-ms-input-placeholder{color:#4e4e4e}body.night-mode .v-field__input input::-ms-input-placeholder,body.night-mode .v-field__input textarea::-ms-input-placeholder{color:#4e4e4e}body.night-mode .v-field__input input::placeholder,body.night-mode .v-field__input textarea::placeholder{color:#4e4e4e}.v-field__input input{padding:12px;height:44px}.v-field__input textarea{resize:none;min-height:44px;padding:0 12px}.v-field__input--close input{padding-right:0}.v-field__input--error input,.v-field__input--error textarea{color:#fa5a57}body.night-mode .v-field__input--error input,body.night-mode .v-field__input--error textarea{color:#e85b59}.v-field__textarea{padding:12px 0}.v-field__textarea--auto{position:relative}.v-field__textarea--auto pre{width:100%;height:100%;padding:0 12px;line-height:20px;min-height:20px;opacity:0;word-break:break-all;white-space:pre-wrap;word-wrap:break-word;letter-spacing:normal;word-spacing:normal;pointer-events:none;font-size:14px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.v-field__textarea--auto textarea{position:absolute;top:0;left:0;right:0;bottom:0}.v-field__counter{text-align:right;padding-right:12px;font-size:13px;line-height:13px;margin-top:4px;margin-bottom:-8px;color:#999}body.night-mode .v-field__counter{color:#727272}',""]),o.exports=t},49:function(o,t,n){"use strict";var e=n(50);t.a={data:()=>({imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){this.imageUploadToken=await Object(e.a)(this)},imageUploadRequest(data){return data.key=(({slug:o,file:t})=>`${o}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${t.type.split("/").pop()}`)({slug:this.currentUser.slug,file:data.file}),data.token=this.imageUploadToken,data},imageUploadResponse(o){try{return{...o.data,url:`${this.imagePrefix}${o.data.url}`}}catch(o){return{}}}}}},50:function(o,t,n){"use strict";n.d(t,"a",(function(){return e})),n.d(t,"b",(function(){return r}));const e=o=>o.$axios.$get("v1/image/uptoken"),r=(o,t)=>o.$axios.$post("https://up.qbox.me",t,{"Content-Type":"multipart/form-data"})},51:function(o,t,n){var content=n(52);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals),n(3).default("7c8f9b2e",content,!0)},52:function(o,t,n){(t=n(2)(!1)).push([o.i,'.v-uploader{font-size:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-uploader--custom{font-size:inherit}.v-uploader__action{display:inline-block;position:relative;overflow:hidden}.v-uploader__action input[type=file]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0}.v-uploader__action__wrap{pointer-events:none;display:inline}.v-uploader__btn{position:relative;display:inline-block;width:80px;height:80px;border-radius:4px;background-color:#fff;border:1px dashed #e5e5e5}body.night-mode .v-uploader__btn{background-color:#141414;border-color:#2c2c2c}.v-uploader__btn .ic_add{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:24px;color:#969799}body.night-mode .v-uploader__btn .ic_add{color:#8f8f91}.v-uploader__files+.v-uploader__action,.v-uploader__item{margin:0 8px 8px 0}.v-uploader__item{position:relative;display:inline-block;width:80px;height:80px;background-color:#f4f4f4}body.night-mode .v-uploader__item{background-color:#1f1f1f}.v-uploader__item__poster{display:block;-o-object-fit:cover;object-fit:cover;width:100%;height:100%;border-radius:4px}.v-uploader__item__cancel{position:absolute;top:-8px;right:-8px;display:block;width:18px;height:18px;font-size:18px;line-height:18px;text-align:center;border-radius:50%;z-index:1;color:#969799;background-color:#fff}body.night-mode .v-uploader__item__cancel{color:#8f8f91;background-color:#141414}.v-uploader__item__mask{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);border-radius:4px}.v-uploader__item__mask span{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:#fff;font-size:12px;text-align:center;width:100%}.v-uploader__item__loading div{position:absolute;left:50%;top:50%;margin-left:-10px;margin-top:-10px;width:20px;height:20px;border-radius:50%;-webkit-animation:skr 1.5s linear infinite;animation:skr 1.5s linear infinite;border:2px solid #fff;box-shadow:0 0 5px #fff}@keyframes skr{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes skr{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.2);transform:scale(1.2)}to{-webkit-transform:scale(1);transform:scale(1)}}.v-uploader__item__status{position:absolute;right:0;bottom:0;width:40px;height:40px;border-radius:4px;overflow:hidden}.v-uploader__item__status:before{content:"";position:absolute;left:20px;top:20px;width:100%;height:100%;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.v-uploader__item__status.is-success:before{background-color:#6dc781}body.night-mode .v-uploader__item__status.is-success:before{background-color:#6cb97d}.v-uploader__item__status.is-error:before{background-color:#fa5a57}body.night-mode .v-uploader__item__status.is-error:before{background-color:#e85b59}.v-uploader__item__status .bili-font{position:absolute;display:block;font-size:14px;width:14px;height:14px;right:2px;bottom:2px;color:#fff;text-align:center}',""]),o.exports=t},53:function(o,t,n){"use strict";t.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{this.$bridge.redirectTo({url:`/pages/user/login/index?from=${encodeURIComponent(window.location.href)}`})})})}}},69:function(o,t,n){var content=n(101);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);var e=n(3).default;o.exports.__inject__=function(o){e("05aeb66c",content,!0,o)}}};