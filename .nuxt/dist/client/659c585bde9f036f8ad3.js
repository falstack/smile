(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{235:function(t,e,n){"use strict";e.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",(function(){t.$toast.error("继续操作前请先登录").then((function(){t.$bridge.redirectTo({url:"/pages/user/login/index?from=".concat(encodeURIComponent(window.location.href))})}))}))}}},239:function(t,e,n){t.exports={"qa-item":"qa-item_3N5Xs",qaItem:"qa-item_3N5Xs",header:"header_AMObU",order:"order_2Lrmw",title:"title_-CJOD",main:"main_2bbkH",answer:"answer_12nXM","is-right":"is-right_2Bjlo",isRight:"is-right_2Bjlo","is-selected":"is-selected_1s5R_",isSelected:"is-selected_1s5R_",footer:"footer_3zt4D",intro:"intro_1Z2UY",control:"control_3tb4E"}},245:function(t,e,n){"use strict";var o=n(239),r=n.n(o);e.default=r.a},248:function(t,e,n){},285:function(t,e,n){"use strict";n(240),n(56),n(10),n(76),n(222),n(55);var o=n(223),r=n.n(o),l=(n(220),n(221)),c={name:"QaItem",components:{VButton:n.n(l).a,VField:r.a},props:{item:{type:Object,required:!0},order:{type:Number,required:!0},isTrial:{type:Boolean,default:!1},extra:{type:Object,default:function(){}}},data:function(){var t=this;return{rightAnswer:function(){for(var e=t.item.id.toString(),n=t.extra.answers||{},o="",r=Object.keys(n),i=0;i<r.length;i++)if(r[i].toString()===e){o=n[r[i]];break}return o}(),title:this.item.title,loading:!1}},methods:{changeRightAnswer:function(t){this.isTrial&&(this.rightAnswer=t)},answerNumber:function(t){return["A","B","C","D"][t]},handleAnswerClick:function(t){this.isTrial||(this.rightAnswer=t,this.$emit("select",{questionId:this.item.id,answerId:t}))},handleUserClick:function(){this.$bridge.navigateTo({url:"/pages/user/show/index?slug=".concat(this.item.user.slug)})},handleBangumiClick:function(){this.$bridge.navigateTo({url:"/pages/bangumi/show/index?slug=".concat(this.item.bangumi.slug)})},handleDelete:function(){var t=this;this.loading||this.$alert({title:"提示",message:"删除后不可恢复，确认要删除吗？",buttons:["取消","确定"],callback:function(e){e&&(t.loading=!0,t.$axios.$post("v1/join/delete",{id:t.item.id}).then((function(){t.$toast.success("删除成功"),t.$emit("delete",t.item.id)})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.loading=!1})))}})},handlePass:function(){var t=this;!this.loading&&this.title&&(this.loading=!0,this.$axios.$post("v1/join/recommend",{id:this.item.id,right_id:this.rightAnswer,title:this.title}).then((function(){t.$toast.success("入库成功"),t.$emit("delete",t.item.id)})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.loading=!1})))}}},h=n(245),d=n(35);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.qaItem},[n("div",{class:t.$style.header},[t.isTrial?n("VField",{class:t.$style.title,attrs:{"min-row":1,"max-row":3,"max-len":50,close:!1,label:""+t.order},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}):[n("div",{class:t.$style.order,domProps:{textContent:t._s(t.order)}}),t._v(" "),n("p",{class:t.$style.title,domProps:{innerHTML:t._s(t.title)}})]],2),t._v(" "),n("div",{class:t.$style.main},t._l(t.item.answers,(function(e,o,r){var l,c;return n("div",{key:o,class:[t.$style.answer,(l={},l[t.$style.isSelected]=!t.isTrial&&o===t.rightAnswer,l)],on:{click:function(e){return t.handleAnswerClick(o)}}},[n("div",{class:[t.$style.order,(c={},c[t.$style.isRight]=t.isTrial&&o===t.rightAnswer,c)],domProps:{textContent:t._s(t.answerNumber(r))},on:{click:function(e){return t.changeRightAnswer(o)}}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(e)}})])})),0),t._v(" "),n("div",{class:t.$style.footer},[n("div",{class:t.$style.intro},[n("div",{staticClass:"oneline"},[n("span",[t._v("出题人：")]),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.user.nickname)},on:{click:t.handleUserClick}})]),t._v(" "),t.isTrial?n("div",{staticClass:"oneline"},[n("span",[t._v("番の剧：")]),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.bangumi.name)},on:{click:t.handleBangumiClick}})]):t._e()]),t._v(" "),t.isTrial?n("div",{class:t.$style.control},[n("VButton",{attrs:{size:"small",theme:"danger",text:""},on:{click:t.handleDelete}},[t._v("\n        拒绝\n      ")]),t._v(" "),n("VButton",{attrs:{size:"small",theme:"success"},on:{click:t.handlePass}},[t._v("\n        通过\n      ")])],1):t._e()])])}),[],!1,(function(t){this.$style=h.default.locals||h.default}),null,null);e.a=component.exports},293:function(t,e,n){"use strict";var o=n(248);n.n(o).a},371:function(t,e,n){"use strict";n.r(e);n(56),n(10),n(220),n(55);var o=n(221),r=n.n(o),l=n(235),c={name:"BangumiJoin",components:{QaItem:n(285).a,VButton:r.a},mixins:[l.a],data:function(){return{showLaunch:!0,showCreate:!1,rule:null,sheet:null,bangumi:null,questions:[],selected:{},extra:null,loading:!1}},computed:{slug:function(){return this.$route.query.slug}},mounted:function(){this.getBangumiInfo(),this.getBangumiRule()},methods:{getBangumiRule:function(){var t=this;this.$axios.$get("v1/join/rule/show",{params:{slug:this.slug}}).then((function(data){t.rule=data})).catch((function(e){t.$toast.error(e.message)}))},getBangumiInfo:function(){var t=this;this.$axios.$get("v1/bangumi/show",{params:{slug:this.slug}}).then((function(data){t.bangumi=data})).catch((function(e){t.$toast.error(e.message)}))},handleBegin:function(){var t=this;this.$axios.$post("v1/join/begin",{slug:this.slug}).then((function(e){"reject"===e?t.$toast.info("该分区还未开放"):"resolve"===e?t.$toast.info("你已加入该分区"):"no_rule"===e?t.$toast.info("还没有答题规则"):"no_question"===e?(t.$toast.info("分区题目数量不足"),t.showCreate=!0):"pending"===e&&t.getQuestions(),t.getQuestions()})).catch((function(e){t.$toast.error(e.message)}))},getQuestions:function(){var t=this;this.$axios.$get("v1/join/list",{params:{slug:this.slug}}).then((function(data){t.extra=data.extra,t.selected=data.extra.answers||{},t.questions=data.result,t.showLaunch=!1})).catch((function(e){t.$toast.error(e.message)}))},handleSelect:function(t){var e=this,n=t.questionId,o=t.answerId;this.$axios.$post("v1/join/vote",{question_id:n,answer_id:o}).then((function(){e.selected[n]=o})).catch((function(t){e.$toast.error(t.message)}))},handleSubmit:function(){var t=this;Object.keys(this.selected).length<this.questions.length?this.$toast.info("请先做完所有题目"):this.loading||(this.loading=!0,this.$axios.$post("v1/join/submit",{slug:this.slug}).then((function(e){t.$toast.info(e).then((function(){t.$bridge.redirectTo({url:"/pages/bangumi/show/index?slug=".concat(t.slug)})}))})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.loading=!1})))}},head:function(){return{title:"答题"}}},h=(n(293),n(35)),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bangumi-join"}},[t.showLaunch?n("div",{staticClass:"launch"},[t.bangumi?[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.bangumi.avatar,{width:150}),alt:""}}),t._v(" "),n("p",[t._v("加入《"+t._s(t.bangumi.name)+"》")])]:t._e(),t._v(" "),t.rule?[n("ul",[n("li",[t._v("该番剧出题："+t._s(t.rule.question_count)+"道")]),t._v(" "),n("li",[t._v("正确率需要："+t._s(t.rule.right_rate)+"%")])])]:t._e(),t._v(" "),n("VButton",{attrs:{type:"success",round:""},on:{click:t.handleBegin}},[t._v("\n      开始答题\n    ")]),t._v(" "),t.showCreate?n("NLink",{attrs:{to:"/bangumi/test?slug="+t.slug}},[t._v("\n      出题\n    ")]):t._e()],2):[t._l(t.questions,(function(e,o){return n("QaItem",{key:e.id,attrs:{order:o,extra:t.extra,item:e},on:{select:t.handleSelect}})})),t._v(" "),n("VButton",{attrs:{block:"",loading:t.loading,size:"large"},on:{click:t.handleSubmit}},[t._v("\n      交卷\n    ")])]],2)}),[],!1,null,null,null);e.default=component.exports}}]);