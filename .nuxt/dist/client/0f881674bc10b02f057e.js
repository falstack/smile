(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{247:function(t,n,o){var content=o(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("3a85e80d",content,!0,{sourceMap:!1})},274:function(t,n,o){"use strict";var e=o(247);o.n(e).a},275:function(t,n,o){(n=o(23)(!1)).push([t.i,"@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}#app-admin a{display:block;width:100%;padding:10px 20px}#app-admin a:not(:first-child){border-top:1px solid #e7e7e7}",""]),t.exports=n},359:function(t,n,o){"use strict";o.r(n);var e={name:"AppAdmin",components:{},props:{},data:function(){return{trialInfo:null}},computed:{},watch:{},created:function(){},mounted:function(){this.getTrialInfo()},methods:{getTrialInfo:function(){var t=this;this.$axios.$get("v1/bangumi/atfield").then((function(data){t.trialInfo=data})).catch()}},head:{title:"控制台"}},r=(o(274),o(33)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{attrs:{id:"app-admin"}},[o("NLink",{attrs:{to:"/admin/trial"}},[o("i",{staticClass:"el-icon-edit"}),t._v(" "),o("span",[t._v("审核题目")]),t._v(" "),t.trialInfo?o("span",[t._v("（待审："+t._s(t.trialInfo.trial)+"，库存："+t._s(t.trialInfo.pass)+"）")]):t._e()]),t._v(" "),o("NLink",{attrs:{to:"/admin/create-bangumi"}},[o("i",{staticClass:"el-icon-plus"}),t._v(" "),o("span",[t._v("创建分区")])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);