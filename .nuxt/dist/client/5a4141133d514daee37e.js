(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{255:function(t,n,e){},304:function(t,n,e){"use strict";var o=e(255);e.n(o).a},383:function(t,n,e){"use strict";e.r(n);var o={name:"AppAdmin",data:function(){return{trialInfo:null}},mounted:function(){this.getTrialInfo()},methods:{getTrialInfo:function(){var t=this;this.$axios.$get("v1/console/trial/stat").then((function(data){t.trialInfo=data})).catch()}},head:function(){return{title:"控制台"}}},l=(e(304),e(37)),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app-admin"}},[e("NLink",{attrs:{to:"/admin/trial-qa"}},[e("i",{staticClass:"el-icon-edit"}),t._v(" "),e("span",[t._v("题目审核")]),t._v(" "),t.trialInfo?e("span",[t._v("（待审："+t._s(t.trialInfo.qa_wait)+"，库存："+t._s(t.trialInfo.qa_pass)+"）")]):t._e()]),t._v(" "),e("NLink",{attrs:{to:"/admin/trial-pin"}},[e("i",{staticClass:"el-icon-edit"}),t._v(" "),e("span",[t._v("帖子审核")]),t._v(" "),t.trialInfo?e("span",[t._v("（待审："+t._s(t.trialInfo.pin_wait)+"）")]):t._e()]),t._v(" "),e("NLink",{attrs:{to:"/admin/create-bangumi"}},[e("i",{staticClass:"el-icon-plus"}),t._v(" "),e("span",[t._v("创建分区")])])],1)}),[],!1,null,null,null);n.default=component.exports}}]);