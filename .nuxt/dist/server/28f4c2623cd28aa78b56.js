exports.ids=[11],exports.modules={109:function(t,e,n){"use strict";n.r(e);var o={name:"BangumiTrial",data:()=>({loading:!1}),computed:{query(){return{...this.$route.query,$axios:this.$axios,status:0}}},methods:{handleDelete(t){this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.loading||(this.loading=!0,this.$axios.$post("v1/join/delete",{id:t}).then(()=>{this.$toast.success("删除成功"),this.$refs.loader.delete(t)}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.loading=!1}))}).catch(()=>{})},handlePass(t){this.loading||(this.loading=!0,this.$axios.$post("v1/join/recommend",{id:t}).then(()=>{this.$toast.success("入库成功"),this.$refs.loader.delete(t)}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.loading=!1}))},checkIsSelected(t,e,n){const o=t.answers||{};let r=!1;return Object.keys(o).forEach(t=>{t.toString()!==n.toString()||r||(r=o[t]===e)}),r}},head:{title:"审核题目"}},r=n(1);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bangumi-trial"}},[n("FlowLoader",{ref:"loader",attrs:{func:"getBangumiQuestionTrials",type:"page",query:t.query},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow,r=e.extra;return n("div",{},t._l(o,(function(e){return n("div",{key:e.id,staticClass:"trial-item"},[n("p",{staticClass:"question",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("ol",{staticClass:"answers"},t._l(e.answers,(function(o,l){return n("li",{key:l,class:{"is-selected":t.checkIsSelected(r,l,e.id)}},[n("span",{domProps:{innerHTML:t._s(o)}})])})),0),t._v(" "),n("div",{staticClass:"controls"},[n("div",[n("span",[t._v("用户：")]),t._v(" "),n("span",{domProps:{textContent:t._s(e.user.nickname)}})]),t._v(" "),n("div",[n("button",{on:{click:function(n){return t.handleDelete(e.id)}}},[t._v("\n              拒绝\n            ")]),t._v(" "),n("button",{on:{click:function(n){return t.handlePass(e.id)}}},[t._v("\n              通过\n            ")])])])])})),0)}},{key:"error",fn:function(e){var n=e.error;return[t._v("\n      "+t._s(n.message)+"\n    ")]}}])})],1)}),[],!1,(function(t){var e=n(84);e.__inject__&&e.__inject__(t)}),null,"c690d528");e.default=component.exports},59:function(t,e,n){var content=n(85);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var o=n(9).default;t.exports.__inject__=function(t){o("5be0c0c2",content,!0,t)}},84:function(t,e,n){"use strict";n.r(e);var o=n(59),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,(function(){return o[t]}))}(l);e.default=r.a},85:function(t,e,n){(e=n(8)(!1)).push([t.i,"@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}#bangumi-trial{padding:15px}#bangumi-trial .trial-item{border-bottom:1px solid #e7e7e7}#bangumi-trial .trial-item .question{font-weight:500;font-size:18px;margin-bottom:5px;margin-top:10px}#bangumi-trial .trial-item .answers{list-style-type:upper-alpha;margin-left:1.3em;margin-bottom:10px}#bangumi-trial .trial-item .answers .is-selected{background-color:#ff6881}#bangumi-trial .trial-item .controls{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;margin-bottom:10px}",""]),t.exports=e}};