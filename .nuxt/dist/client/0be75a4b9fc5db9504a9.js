(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{234:function(t,e,r){var content=r(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("b01fa900",content,!0,{sourceMap:!1})},235:function(t,e,r){(e=r(32)(!1)).push([t.i,'.v-radio--circle .v-radio__label{border-radius:50%}.v-radio--normal .v-radio__label{width:22px;height:22px;margin-right:12px}.v-radio--normal .v-radio__label:after{left:7px;top:3px;height:9px;width:4px;border-width:2px}.v-radio--normal .v-radio__text{line-height:22px;font-size:14px}.v-radio--small .v-radio__label{width:16px;height:16px;margin-right:8px}.v-radio--small .v-radio__label:after{left:5px;top:2px;height:7px;width:3px;border-width:1px}.v-radio--small .v-radio__text{line-height:16px;font-size:14px}.v-radio--ver.v-radio--normal .v-radio__item:not(:last-child){margin-bottom:12px}.v-radio--ver.v-radio--small .v-radio__item:not(:last-child){margin-bottom:8px}.v-radio--hoz .v-radio__item{display:inline-block;margin-right:20px}.v-radio__item.is-selected .v-radio__label{background-color:#fb7299;border-color:#fb7299}body.night-mode .v-radio__item.is-selected .v-radio__label{background-color:#eb7093;border-color:#eb7093}.v-radio__item.is-selected .v-radio__label:after{-webkit-transform:rotate(45deg) scaleY(1);transform:rotate(45deg) scaleY(1)}.v-radio__item.is-selected.is-disabled .v-radio__label{background-color:#999;border-color:#999}body.night-mode .v-radio__item.is-selected.is-disabled .v-radio__label{background-color:#727272;border-color:#727272}.v-radio__item.is-disabled .v-radio__label{background-color:#f4f4f4}body.night-mode .v-radio__item.is-disabled .v-radio__label{background-color:#1f1f1f}.v-radio__label{float:left;position:relative;border-radius:3px;background-color:#fff;border:1px solid #e7e7e7}body.night-mode .v-radio__label{background-color:#141414;border-color:#2a2a2a}.v-radio__label:after{content:"";position:absolute;box-sizing:content-box;border-style:solid;border-left:0;border-top:0;-webkit-transform:rotate(45deg) scaleY(0);transform:rotate(45deg) scaleY(0);-webkit-transition:-webkit-transform .15s ease-in .05s;transition:-webkit-transform .15s ease-in .05s;transition:transform .15s ease-in .05s;transition:transform .15s ease-in .05s,-webkit-transform .15s ease-in .05s;-webkit-transform-origin:center;transform-origin:center;border-color:#fff}body.night-mode .v-radio__label:after{border-color:#141414}.v-radio__text{overflow:hidden;color:#212121}body.night-mode .v-radio__text{color:#e1e1e1}',""]),t.exports=e},236:function(t,e,r){t.exports=function(t){var e={};function i(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=42)}({0:function(t,e,i){"use strict";function r(t,e,i,r,s,o,n,l){var a,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=i,d._compiled=!0),r&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),n?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=a):s&&(a=l?function(){s.call(this,this.$root.$options.shadowRoot)}:s),a)if(d.functional){d._injectStyles=a;var c=d.render;d.render=function(t,e){return a.call(e),c(t,e)}}else{var u=d.beforeCreate;d.beforeCreate=u?[].concat(u,a):[a]}return{exports:t,options:d}}i.d(e,"a",(function(){return r}))},42:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-radio",class:["v-radio--"+t.size,{"v-radio--circle":t.circle},t.inline?"v-radio--hoz":"v-radio--ver"]},[t.isSingle?i("div",{staticClass:"v-radio__item",class:{"is-disabled":t.disabled,"is-selected":t.selected},on:{click:t._singleToggle}},[i("div",{staticClass:"v-radio__label"}),t._v(" "),i("div",{staticClass:"v-radio__text",domProps:{textContent:t._s(t.text)}})]):i("div",{staticClass:"v-radio__list"},t._l(t.text,(function(e){return i("div",{key:t.pureText?e:e.value,staticClass:"v-radio__item",class:[{"is-disabled":t.disabled||!t.pureText&&e.disabled||t.max&&t.selected.length>=t.max&&-1===t.selected.indexOf(t.pureText?e:e.value)},{"is-selected":-1!==t.selected.indexOf(t.pureText?e:e.value)}],on:{click:function(i){return t._multiToggle(e)}}},[i("div",{staticClass:"v-radio__label"}),t._v(" "),i("div",{staticClass:"v-radio__text",domProps:{textContent:t._s(t.pureText?e:e.label)}})])})),0)])};r._withStripped=!0,i(60);var s={name:"VRadio",props:{value:{type:[Boolean,Array],required:!0},text:{type:[String,Array],required:!0},size:{type:String,default:"normal",validator:function(t){return~["normal","small"].indexOf(t)}},max:{type:Number,default:0},min:{type:Number,default:0},disabled:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},inline:{type:Boolean,default:!1}},data:function(){var t="[object Boolean]"===Object.prototype.toString.call(this.value);return{selected:this.value,pureText:!!t||"string"==typeof this.text[0],isSingle:t}},watch:{value:function(t){this.selected=t},selected:function(t){this.$emit("input",t)}},methods:{_singleToggle:function(){this.disabled||(this.selected=!this.selected)},_multiToggle:function(t){if(!(this.disabled||!this.pureText&&t.disabled)){var e=this.selected.indexOf(this.pureText?t:t.value);if(-1===e)this.max&&this.selected.length>=this.max||this.selected.push(this.pureText?t:t.value);else{if(this.min&&this.selected.length<=this.min)return;this.selected.splice(e,1)}}},checkAll:function(t){var e=this;this.isSingle?this.selected=t:t?(this.selected=[],this.text.forEach((function(t){e.selected.push(e.pureText?t:t.value)}))):this.selected=[]},toggleAll:function(){this.isSingle?this.selected=!this.selected:this.checkAll(!this.selected.length)}}},o=i(0),n=Object(o.a)(s,r,[],!1,null,null,null);n.options.__file="src/components/radio/radio.vue";var l=n.exports;e.default=l},60:function(t,e,i){}})},238:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},250:function(t,e,r){"use strict";var o=r(2),n=r(251).trim;o({target:"String",proto:!0,forced:r(252)("trim")},{trim:function(){return n(this)}})},251:function(t,e,r){var o=r(15),n="["+r(238)+"]",l=RegExp("^"+n+n+"*"),d=RegExp(n+n+"*$"),c=function(t){return function(e){var r=String(o(e));return 1&t&&(r=r.replace(l,"")),2&t&&(r=r.replace(d,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},252:function(t,e,r){var o=r(5),n=r(238);t.exports=function(t){return o((function(){return!!n[t]()||"​᠎"!="​᠎"[t]()||n[t].name!==t}))}},253:function(t,e,r){var content=r(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(33).default)("51849cf2",content,!0,{sourceMap:!1})},277:function(t,e,r){"use strict";var o=r(253);r.n(o).a},278:function(t,e,r){(e=r(32)(!1)).push([t.i,"@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}#create-bangumi-question{padding:15px}#create-bangumi-question .form-tip{font-size:12px;color:#ff9427}",""]),t.exports=e},304:function(t,e,r){"use strict";r.r(e);r(56),r(43),r(250),r(234),r(104);var o=r(236),n=r.n(o),l=(r(224),r(225)),d=r.n(l),c=(r(231),r(232)),f={name:"CreateBangumiQuestion",components:{VField:r.n(c).a,VButton:d.a,VRadio:n.a},data:function(){return{bangumi:null,submitting:!1,title:"",answers:[{value:"",key:0},{value:"",key:1},{value:"",key:2},{value:"",key:3}],rightOpt:-1,rule:null}},computed:{slug:function(){return this.$route.query.slug},rightAnswerOpts:function(){return this.answers.map((function(t){return{label:"答案".concat(t.key+1),value:t.key}}))}},mounted:function(){this.getBangumi(),this.getRule()},methods:{getBangumi:function(){var t=this;this.$axios.$get("v1/bangumi/show",{params:{slug:this.slug}}).then((function(e){t.bangumi=e})).catch((function(){}))},getRule:function(){var t=this;this.$axios.$get("v1/join/rule/show",{params:{slug:this.slug}}).then((function(data){t.rule=data})).catch()},submit:function(){var t=this;this.title.trim()?this.answers.map((function(t){return t.value})).filter((function(t){return t})).length<2?this.$toast.info("至少要有2个选项"):-1!==this.rightOpt?this.answers.filter((function(e){return e.key===t.rightOpt}))[0].value.trim()?(this.submitting=!0,this.$axios.$post("v1/join/create",{title:this.title,answers:this.answers.map((function(t){return t.value})).filter((function(t){return t})),right_index:this.rightOpt,bangumi_slug:this.slug}).then((function(){t.$toast.success("提交成功").then((function(){window.location.reload()}))})).catch((function(e){t.$toast.error(e.message),t.submitting=!1}))):this.$toast.info("正确选项不能为空"):this.$toast.info("请选择正确选项"):this.$toast.info("题目不能为空")}},head:{title:"添加题目"}},h=(r(277),r(34)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.bangumi?r("div",{ref:"form",attrs:{id:"create-bangumi-question",disabled:t.submitting,"label-position":"top"}},[r("div",[r("h1",[t._v("为《"+t._s(t.bangumi.name)+"》出题")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"form-tip"},[t._v("\n      题目提交完，需要审核通过之后才会入库\n    ")])]),t._v(" "),r("div",{attrs:{label:"题目"}},[r("VField",{attrs:{rows:2,type:"textarea",placeholder:"请输入题目",resize:"none",maxlength:"50","show-word-limit":""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),t._m(0),t._v(" "),t._l(t.answers,(function(e,o){return r("div",{key:e.key,attrs:{label:"选项"+(o+1)}},[r("VField",{attrs:{placeholder:"请输入答案（20字以内）",maxlength:"20"},model:{value:e.value,callback:function(r){t.$set(e,"value",r)},expression:"item.value"}})],1)})),t._v(" "),t._m(1),t._v(" "),r("div",{attrs:{label:"答案"}},[r("VRadio",{attrs:{text:t.rightAnswerOpts},model:{value:t.rightOpt,callback:function(e){t.rightOpt=e},expression:"rightOpt"}})],1),t._v(" "),r("div",[r("VButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n      提交\n    ")])],1)],2):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"form-tip"},[this._v("\n      提示：选项至少提供两个，至多四个\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",{staticClass:"form-tip"},[this._v("\n      提示：题目为单选题，正确选项不能为空\n    ")])])}],!1,null,null,null);e.default=component.exports}}]);