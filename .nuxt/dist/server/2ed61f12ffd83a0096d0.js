exports.ids=[3],exports.modules={47:function(t,n,e){var content=e(64);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=e(9).default;t.exports.__inject__=function(t){o("3a85e80d",content,!0,t)}},63:function(t,n,e){"use strict";e.r(n);var o=e(47),r=e.n(o);for(var d in o)"default"!==d&&function(t){e.d(n,t,(function(){return o[t]}))}(d);n.default=r.a},64:function(t,n,e){(n=e(8)(!1)).push([t.i,"@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}#app-admin a{display:block;width:100%;padding:10px 20px}#app-admin a:not(:first-child){border-top:1px solid #e7e7e7}",""]),t.exports=n},96:function(t,n,e){"use strict";e.r(n);var o={name:"AppAdmin",components:{},props:{},data:()=>({trialInfo:null}),computed:{},watch:{},created(){},mounted(){this.getTrialInfo()},methods:{getTrialInfo(){this.$axios.$get("v1/bangumi/atfield").then(data=>{this.trialInfo=data}).catch()}},head:{title:"控制台"}},r=e(1);var component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app-admin"}},[e("NLink",{attrs:{to:"/admin/trial"}},[e("i",{staticClass:"el-icon-edit"}),t._v(" "),e("span",[t._v("审核题目")]),t._v(" "),t.trialInfo?e("span",[t._v("（待审："+t._s(t.trialInfo.trial)+"，库存："+t._s(t.trialInfo.pass)+"）")]):t._e()]),t._ssrNode(" "),e("NLink",{attrs:{to:"/admin/create-bangumi"}},[e("i",{staticClass:"el-icon-plus"}),t._v(" "),e("span",[t._v("创建分区")])])],2)}),[],!1,(function(t){var n=e(63);n.__inject__&&n.__inject__(t)}),null,"448b325e");n.default=component.exports}};