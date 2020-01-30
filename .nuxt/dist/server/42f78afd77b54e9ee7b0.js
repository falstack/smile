exports.ids=[9],exports.modules={111:function(o,t,n){"use strict";n.r(t);n(48),n(18);var e=n(36),r=n.n(e),l=(n(40),n(33)),d=n.n(l),c=(n(42),n(34)),f={name:"CreateBangumiQuestion",components:{VField:n.n(c).a,VButton:d.a,VRadio:r.a},data:()=>({bangumi:null,submitting:!1,title:"",answers:[{value:"",key:0},{value:"",key:1},{value:"",key:2},{value:"",key:3}],rightOpt:-1,rule:null}),computed:{slug(){return this.$route.query.slug},rightAnswerOpts(){return this.answers.map(o=>({label:`答案${o.key+1}`,value:o.key}))}},mounted(){this.getBangumi(),this.getRule()},methods:{getBangumi(){this.$axios.$get("v1/bangumi/show",{params:{slug:this.slug}}).then(o=>{this.bangumi=o}).catch(()=>{})},getRule(){this.$axios.$get("v1/join/rule/show",{params:{slug:this.slug}}).then(data=>{this.rule=data}).catch()},submit(){this.title.trim()?this.answers.map(o=>o.value).filter(o=>o).length<2?this.$toast.info("至少要有2个选项"):-1!==this.rightOpt?this.answers.filter(o=>o.key===this.rightOpt)[0].value.trim()?(this.submitting=!0,this.$axios.$post("v1/join/create",{title:this.title,answers:this.answers.map(o=>o.value).filter(o=>o),right_index:this.rightOpt,bangumi_slug:this.slug}).then(()=>{this.$toast.success("提交成功").then(()=>{window.location.reload()})}).catch(o=>{this.$toast.error(o.message),this.submitting=!1})):this.$toast.info("正确选项不能为空"):this.$toast.info("请选择正确选项"):this.$toast.info("题目不能为空")}},head:{title:"添加题目"}},v=n(1);var component=Object(v.a)(f,(function(){var o=this,t=o.$createElement,n=o._self._c||t;return o.bangumi?n("div",{ref:"form",attrs:{id:"create-bangumi-question",disabled:o.submitting,"label-position":"top"}},[o._ssrNode("<div><h1>"+o._ssrEscape("为《"+o._s(o.bangumi.name)+"》出题")+'</h1> <br> <p class="form-tip">\n      题目提交完，需要审核通过之后才会入库\n    </p></div> '),o._ssrNode('<div label="题目">',"</div>",[n("VField",{attrs:{rows:2,type:"textarea",placeholder:"请输入题目",resize:"none",maxlength:"50","show-word-limit":""},model:{value:o.title,callback:function(t){o.title=t},expression:"title"}})],1),o._ssrNode(' <div><p class="form-tip">\n      提示：选项至少提供两个，至多四个\n    </p></div> '),o._l(o.answers,(function(t,e){return o._ssrNode("<div"+o._ssrAttr("label","选项"+(e+1))+">","</div>",[n("VField",{attrs:{placeholder:"请输入答案（20字以内）",maxlength:"20"},model:{value:t.value,callback:function(n){o.$set(t,"value",n)},expression:"item.value"}})],1)})),o._ssrNode(' <div><p class="form-tip">\n      提示：题目为单选题，正确选项不能为空\n    </p></div> '),o._ssrNode('<div label="答案">',"</div>",[n("VRadio",{attrs:{text:o.rightAnswerOpts},model:{value:o.rightOpt,callback:function(t){o.rightOpt=t},expression:"rightOpt"}})],1),o._ssrNode(" "),o._ssrNode("<div>","</div>",[n("VButton",{attrs:{loading:o.submitting,type:"success",round:""},on:{click:o.submit}},[o._v("\n      提交\n    ")])],1)],2):o._e()}),[],!1,(function(o){var t=n(83);t.__inject__&&t.__inject__(o)}),null,"675e3fac");t.default=component.exports},40:function(o,t,n){var content=n(41);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals),n(3).default("2e3b382e",content,!0)},41:function(o,t,n){(t=n(2)(!1)).push([o.i,'.v-button{outline:none;-webkit-appearance:none;-webkit-tap-highlight-color:transparent;position:relative;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;cursor:default;border-radius:4px;border:1px solid;text-align:center}.v-button:not(:disabled):active{opacity:.8}.v-button--disabled{opacity:.4}.v-button .loading{position:absolute;left:50%;top:50%;display:block;border-radius:50%;-webkit-animation:rolling 1.4s linear infinite;animation:rolling 1.4s linear infinite;will-change:transform}.v-button .loading:before{content:"";position:absolute;top:0;left:0;width:50%;height:50%;border-radius:100% 0 0 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transform-origin:right bottom;transform-origin:right bottom}.v-button .loading:after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;width:75%;height:75%;border-radius:50%;margin:auto}.v-button--primary{background-color:#fb7299;border-color:#fb7299;color:#fff}.v-button--primary .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--primary .loading:before{background-color:#fff}.v-button--primary .loading:after{background-color:#fb7299}body.night-mode .v-button--primary .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--primary .loading:before{background-color:#fff}body.night-mode .v-button--primary .loading:after{background-color:#eb7093}body.night-mode .v-button--primary{background-color:#eb7093;border-color:#eb7093}.v-button--primary.v-button--plain{background-color:transparent;border-color:#fb7299;color:#fb7299}body.night-mode .v-button--primary.v-button--plain{background-color:transparent;border-color:#eb7093;color:#eb7093}.v-button--primary.v-button--text{background-color:transparent;border-color:transparent;color:#fb7299}body.night-mode .v-button--primary.v-button--text{background-color:transparent;border-color:transparent;color:#eb7093}.v-button--primary.v-button--loading{color:transparent!important}.v-button--primary.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}.v-button--primary.v-button--loading.v-button--plain .loading:before{background-color:#fb7299}.v-button--primary.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--primary.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--primary.v-button--loading.v-button--plain .loading:before{background-color:#fb7299}body.night-mode .v-button--primary.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--primary.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}.v-button--primary.v-button--loading.v-button--text .loading:before{background-color:#fb7299}.v-button--primary.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--primary.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fb7299),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fb7299 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--primary.v-button--loading.v-button--text .loading:before{background-color:#fb7299}body.night-mode .v-button--primary.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--warning{background-color:#faab4b;border-color:#faab4b;color:#fff}.v-button--warning .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--warning .loading:before{background-color:#fff}.v-button--warning .loading:after{background-color:#faab4b}body.night-mode .v-button--warning .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--warning .loading:before{background-color:#fff}body.night-mode .v-button--warning .loading:after{background-color:#e7a24e}body.night-mode .v-button--warning{background-color:#e7a24e;border-color:#e7a24e}.v-button--warning.v-button--plain{background-color:transparent;border-color:#faab4b;color:#faab4b}body.night-mode .v-button--warning.v-button--plain{background-color:transparent;border-color:#e7a24e;color:#e7a24e}.v-button--warning.v-button--text{background-color:transparent;border-color:transparent;color:#faab4b}body.night-mode .v-button--warning.v-button--text{background-color:transparent;border-color:transparent;color:#e7a24e}.v-button--warning.v-button--loading{color:transparent!important}.v-button--warning.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}.v-button--warning.v-button--loading.v-button--plain .loading:before{background-color:#faab4b}.v-button--warning.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--warning.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--warning.v-button--loading.v-button--plain .loading:before{background-color:#faab4b}body.night-mode .v-button--warning.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--warning.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}.v-button--warning.v-button--loading.v-button--text .loading:before{background-color:#faab4b}.v-button--warning.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--warning.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#faab4b),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#faab4b 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--warning.v-button--loading.v-button--text .loading:before{background-color:#faab4b}body.night-mode .v-button--warning.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--danger{background-color:#fa5a57;border-color:#fa5a57;color:#fff}.v-button--danger .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--danger .loading:before{background-color:#fff}.v-button--danger .loading:after{background-color:#fa5a57}body.night-mode .v-button--danger .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--danger .loading:before{background-color:#fff}body.night-mode .v-button--danger .loading:after{background-color:#e85b59}body.night-mode .v-button--danger{background-color:#e85b59;border-color:#e85b59}.v-button--danger.v-button--plain{background-color:transparent;border-color:#fa5a57;color:#fa5a57}body.night-mode .v-button--danger.v-button--plain{background-color:transparent;border-color:#e85b59;color:#e85b59}.v-button--danger.v-button--text{background-color:transparent;border-color:transparent;color:#fa5a57}body.night-mode .v-button--danger.v-button--text{background-color:transparent;border-color:transparent;color:#e85b59}.v-button--danger.v-button--loading{color:transparent!important}.v-button--danger.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}.v-button--danger.v-button--loading.v-button--plain .loading:before{background-color:#fa5a57}.v-button--danger.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--danger.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--danger.v-button--loading.v-button--plain .loading:before{background-color:#fa5a57}body.night-mode .v-button--danger.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--danger.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}.v-button--danger.v-button--loading.v-button--text .loading:before{background-color:#fa5a57}.v-button--danger.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--danger.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fa5a57),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fa5a57 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--danger.v-button--loading.v-button--text .loading:before{background-color:#fa5a57}body.night-mode .v-button--danger.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--success{background-color:#6dc781;border-color:#6dc781;color:#fff}.v-button--success .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}.v-button--success .loading:before{background-color:#fff}.v-button--success .loading:after{background-color:#6dc781}body.night-mode .v-button--success .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#fff),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#fff 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--success .loading:before{background-color:#fff}body.night-mode .v-button--success .loading:after{background-color:#6cb97d}body.night-mode .v-button--success{background-color:#6cb97d;border-color:#6cb97d}.v-button--success.v-button--plain{background-color:transparent;border-color:#6dc781;color:#6dc781}body.night-mode .v-button--success.v-button--plain{background-color:transparent;border-color:#6cb97d;color:#6cb97d}.v-button--success.v-button--text{background-color:transparent;border-color:transparent;color:#6dc781}body.night-mode .v-button--success.v-button--text{background-color:transparent;border-color:transparent;color:#6cb97d}.v-button--success.v-button--loading{color:transparent!important}.v-button--success.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}.v-button--success.v-button--loading.v-button--plain .loading:before{background-color:#6dc781}.v-button--success.v-button--loading.v-button--plain .loading:after{background-color:#fff}body.night-mode .v-button--success.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--success.v-button--loading.v-button--plain .loading:before{background-color:#6dc781}body.night-mode .v-button--success.v-button--loading.v-button--plain .loading:after{background-color:#141414}.v-button--success.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}.v-button--success.v-button--loading.v-button--text .loading:before{background-color:#6dc781}.v-button--success.v-button--loading.v-button--text .loading:after{background-color:#fff}body.night-mode .v-button--success.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#6dc781),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#6dc781 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--success.v-button--loading.v-button--text .loading:before{background-color:#6dc781}body.night-mode .v-button--success.v-button--loading.v-button--text .loading:after{background-color:#141414}.v-button--info{background-color:#e7e7e7;border-color:#e7e7e7;color:#999}.v-button--info .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#999),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#999 20%,hsla(0,0%,100%,0) 70%)}.v-button--info .loading:before{background-color:#999}.v-button--info .loading:after{background-color:#e7e7e7}body.night-mode .v-button--info .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#999),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#999 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--info .loading:before{background-color:#999}body.night-mode .v-button--info .loading:after{background-color:#2a2a2a}body.night-mode .v-button--info{background-color:#2a2a2a;border-color:#2a2a2a}.v-button--info.v-button--plain{background-color:transparent;border-color:silver;color:#999}body.night-mode .v-button--info.v-button--plain{background-color:transparent;border-color:#4e4e4e;color:#727272}.v-button--info.v-button--text{background-color:transparent;border-color:transparent;color:#999}body.night-mode .v-button--info.v-button--text{background-color:transparent;border-color:transparent;color:#727272}.v-button--info.v-button--loading{color:transparent!important}.v-button--info.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}.v-button--info.v-button--loading.v-button--plain .loading:before{background-color:#e7e7e7}.v-button--info.v-button--loading.v-button--plain .loading:after{background-color:#999}body.night-mode .v-button--info.v-button--loading.v-button--plain .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--info.v-button--loading.v-button--plain .loading:before{background-color:#e7e7e7}body.night-mode .v-button--info.v-button--loading.v-button--plain .loading:after{background-color:#727272}.v-button--info.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}.v-button--info.v-button--loading.v-button--text .loading:before{background-color:#e7e7e7}.v-button--info.v-button--loading.v-button--text .loading:after{background-color:#999}body.night-mode .v-button--info.v-button--loading.v-button--text .loading{background:-webkit-gradient(linear,left top,right top,color-stop(20%,#e7e7e7),color-stop(70%,hsla(0,0%,100%,0)));background:linear-gradient(90deg,#e7e7e7 20%,hsla(0,0%,100%,0) 70%)}body.night-mode .v-button--info.v-button--loading.v-button--text .loading:before{background-color:#e7e7e7}body.night-mode .v-button--info.v-button--loading.v-button--text .loading:after{background-color:#727272}.v-button--small{padding:2px 12px;font-size:13px}.v-button--small .loading{width:13px;height:13px;margin-left:-6.5px;margin-top:-6.5px}.v-button--medium{padding:4px 11px;font-size:14px}.v-button--medium .loading{width:14px;height:14px;margin-left:-7px;margin-top:-7px}.v-button--large{padding:10px 38px;font-size:16px}.v-button--large .loading{width:16px;height:16px;margin-left:-8px;margin-top:-8px}.v-button--block{display:block;width:100%}',""]),o.exports=t},42:function(o,t,n){var content=n(43);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals),n(3).default("4bdd0704",content,!0)},43:function(o,t,n){(t=n(2)(!1)).push([o.i,'.v-field__input input,.v-field__input textarea{border:none;outline:none;-webkit-appearance:none;-webkit-tap-highlight-color:transparent}.v-field{min-height:44px;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:end;align-items:flex-end;overflow:hidden;background-color:#fff}body.night-mode .v-field{background-color:#141414}.v-field__before--line{padding-right:12px}.v-field__before--line:before{right:0}.v-field__after--line,.v-field__before--has{padding-left:12px}.v-field__after--line:before{left:0}.v-field__after--has{padding-right:12px}.v-field__after,.v-field__before{font-size:14px;height:100%;line-height:44px;flex-shrink:0;color:#212121}body.night-mode .v-field__after,body.night-mode .v-field__before{color:#e1e1e1}.v-field__after--line,.v-field__before--line{position:relative}.v-field__after--line:before,.v-field__before--line:before{content:"";position:absolute;top:9px;width:1px;height:26px;-webkit-transform:scaleX(.5);transform:scaleX(.5);background-color:#e7e7e7}body.night-mode .v-field__after--line:before,body.night-mode .v-field__before--line:before{background-color:#2a2a2a}.v-field__main{-webkit-box-flex:1;flex:1;height:100%}.v-field__cancel{float:right;height:100%}.v-field__cancel i{display:block;height:100%;line-height:44px;margin-left:12px;margin-right:12px;font-size:16px;color:#999}body.night-mode .v-field__cancel i{color:#727272}.v-field__input{overflow:hidden;height:100%}.v-field__input input,.v-field__input textarea{display:block;width:100%;line-height:20px;font-size:14px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;background-color:transparent;color:#212121;caret-color:#fb7299}body.night-mode .v-field__input input,body.night-mode .v-field__input textarea{color:#e1e1e1;caret-color:#eb7093}.v-field__input input::-webkit-input-placeholder,.v-field__input textarea::-webkit-input-placeholder{color:silver}.v-field__input input::-moz-placeholder,.v-field__input textarea::-moz-placeholder{color:silver}.v-field__input input:-ms-input-placeholder,.v-field__input textarea:-ms-input-placeholder{color:silver}.v-field__input input::-ms-input-placeholder,.v-field__input textarea::-ms-input-placeholder{color:silver}.v-field__input input::placeholder,.v-field__input textarea::placeholder{color:silver}body.night-mode .v-field__input input::-webkit-input-placeholder,body.night-mode .v-field__input textarea::-webkit-input-placeholder{color:#4e4e4e}body.night-mode .v-field__input input::-moz-placeholder,body.night-mode .v-field__input textarea::-moz-placeholder{color:#4e4e4e}body.night-mode .v-field__input input:-ms-input-placeholder,body.night-mode .v-field__input textarea:-ms-input-placeholder{color:#4e4e4e}body.night-mode .v-field__input input::-ms-input-placeholder,body.night-mode .v-field__input textarea::-ms-input-placeholder{color:#4e4e4e}body.night-mode .v-field__input input::placeholder,body.night-mode .v-field__input textarea::placeholder{color:#4e4e4e}.v-field__input input{padding:12px;height:44px}.v-field__input textarea{resize:none;min-height:44px;padding:0 12px}.v-field__input--close input{padding-right:0}.v-field__input--error input,.v-field__input--error textarea{color:#fa5a57}body.night-mode .v-field__input--error input,body.night-mode .v-field__input--error textarea{color:#e85b59}.v-field__textarea{padding:12px 0}.v-field__textarea--auto{position:relative}.v-field__textarea--auto pre{width:100%;height:100%;padding:0 12px;line-height:20px;min-height:20px;opacity:0;word-break:break-all;white-space:pre-wrap;word-wrap:break-word;letter-spacing:normal;word-spacing:normal;pointer-events:none;font-size:14px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}.v-field__textarea--auto textarea{position:absolute;top:0;left:0;right:0;bottom:0}.v-field__counter{text-align:right;padding-right:12px;font-size:13px;line-height:13px;margin-top:4px;margin-bottom:-8px;color:#999}body.night-mode .v-field__counter{color:#727272}',""]),o.exports=t},48:function(o,t,n){var content=n(49);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals),n(3).default("b01fa900",content,!0)},49:function(o,t,n){(t=n(2)(!1)).push([o.i,'.v-radio--circle .v-radio__label{border-radius:50%}.v-radio--normal .v-radio__label{width:22px;height:22px;margin-right:12px}.v-radio--normal .v-radio__label:after{left:7px;top:3px;height:9px;width:4px;border-width:2px}.v-radio--normal .v-radio__text{line-height:22px;font-size:14px}.v-radio--small .v-radio__label{width:16px;height:16px;margin-right:8px}.v-radio--small .v-radio__label:after{left:5px;top:2px;height:7px;width:3px;border-width:1px}.v-radio--small .v-radio__text{line-height:16px;font-size:14px}.v-radio--ver.v-radio--normal .v-radio__item:not(:last-child){margin-bottom:12px}.v-radio--ver.v-radio--small .v-radio__item:not(:last-child){margin-bottom:8px}.v-radio--hoz .v-radio__item{display:inline-block;margin-right:20px}.v-radio__item.is-selected .v-radio__label{background-color:#fb7299;border-color:#fb7299}body.night-mode .v-radio__item.is-selected .v-radio__label{background-color:#eb7093;border-color:#eb7093}.v-radio__item.is-selected .v-radio__label:after{-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1)}.v-radio__item.is-selected.is-disabled .v-radio__label{background-color:#999;border-color:#999}body.night-mode .v-radio__item.is-selected.is-disabled .v-radio__label{background-color:#727272;border-color:#727272}.v-radio__item.is-disabled .v-radio__label{background-color:#f4f4f4}body.night-mode .v-radio__item.is-disabled .v-radio__label{background-color:#1f1f1f}.v-radio__label{float:left;position:relative;border-radius:3px;background-color:#fff;border:1px solid #e7e7e7}body.night-mode .v-radio__label{background-color:#141414;border-color:#2a2a2a}.v-radio__label:after{content:"";position:absolute;box-sizing:content-box;border-style:solid;border-left:0;border-top:0;-webkit-transform:rotate(45deg) scaleY(0);transform:rotate(45deg) scaleY(0);-webkit-transition:-webkit-transform .15s ease-in .05s;transition:-webkit-transform .15s ease-in .05s;transition:transform .15s ease-in .05s;transition:transform .15s ease-in .05s,-webkit-transform .15s ease-in .05s;-webkit-transform-origin:center;transform-origin:center;border-color:#fff}body.night-mode .v-radio__label:after{border-color:#141414}.v-radio__text{overflow:hidden;color:#212121}body.night-mode .v-radio__text{color:#e1e1e1}',""]),o.exports=t},60:function(o,t,n){var content=n(84);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);var e=n(3).default;o.exports.__inject__=function(o){e("51849cf2",content,!0,o)}},83:function(o,t,n){"use strict";n.r(t);var e=n(60),r=n.n(e);for(var l in e)"default"!==l&&function(o){n.d(t,o,(function(){return e[o]}))}(l);t.default=r.a},84:function(o,t,n){(t=n(2)(!1)).push([o.i,"@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}#create-bangumi-question{padding:15px}#create-bangumi-question .form-tip{font-size:12px;color:#ff9427}",""]),o.exports=t}};