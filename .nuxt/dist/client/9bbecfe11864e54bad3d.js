(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{254:function(t,e,n){var content=n(281);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("df915856",content,!0,{sourceMap:!1})},280:function(t,e,n){"use strict";var o=n(254);n.n(o).a},281:function(t,e,n){(e=n(32)(!1)).push([t.i,"@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}.bangumi-rank-item{padding:15px}.bangumi-rank-item:not(:last-child){border-bottom:10px solid #f4f4f4}.bangumi-rank-item .head{margin-bottom:10px}.bangumi-rank-item .head .rank{display:inline-block;padding:5px;border-radius:5px;background-color:#ff869a;font-size:12px;color:#fff}.bangumi-rank-item .body{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-pack:start;justify-content:flex-start;-webkit-box-align:start;align-items:flex-start;height:120px}.bangumi-rank-item .body .poster{width:90px;height:100%;border-radius:5px;margin-right:10px;border:1px solid silver}.bangumi-rank-item .body .poster img{width:100%;height:100%}.bangumi-rank-item .body .content{-webkit-box-flex:1;flex:1;overflow:hidden}.bangumi-rank-item .body .content .title{font-weight:700;margin-bottom:5px}.bangumi-rank-item .body .content .tags{height:20px;font-size:0;overflow:hidden}.bangumi-rank-item .body .content .tags .tag{display:inline-block;font-size:12px;height:20px;line-height:20px;padding:0 2px;background-color:rgba(255,134,154,.5);border-radius:5px;color:#fff;margin-right:2px}.bangumi-rank-item .body .star{height:100%;line-height:120px;padding-left:10px;margin-left:10px;border-left:1px dashed silver}",""]),t.exports=e},298:function(t,e,n){"use strict";n.r(e);n(35);var o,r=n(6),d={name:"BangumiRankItem",props:{item:{type:Object,required:!0}},methods:{handleClick:function(){this.$bridge.navigateTo({url:"/pages/bangumi/show/index?slug=".concat(this.item.slug)})}}},l=(n(280),n(34)),c={name:"BangumiTop250",components:{BangumiRankItem:Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bangumi-rank-item",on:{click:t.handleClick}},[n("div",{staticClass:"head"},[n("span",{staticClass:"rank",domProps:{textContent:t._s("No."+t.item.rank)}})]),t._v(" "),n("div",{staticClass:"body"},[n("div",{staticClass:"poster"},[n("img",{attrs:{src:t.$resize(t.item.avatar,{width:180,height:240})}})]),t._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"title oneline",domProps:{textContent:t._s(t.item.name)}}),t._v(" "),n("div",{staticClass:"tags"},t._l(t.item.tags,(function(e){return n("span",{key:e.slug,staticClass:"tag",domProps:{textContent:t._s(e.name)}})})),0)]),t._v(" "),n("div",{staticClass:"star"},[t._v("\n      star\n    ")])])])}),[],!1,null,null,null).exports},props:{},asyncData:(o=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,o=e.app,t.next=3,n.dispatch("flow/initData",{func:"getBangumiRank",type:"page",query:{$axios:o.$axios}});case 3:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},m=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bangumi-top-250"}},[n("FlowLoader",{attrs:{func:"getBangumiRank",type:"page",query:{$axios:t.$axios}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow;return n("div",{},t._l(o,(function(t){return n("BangumiRankItem",{key:t.slug,attrs:{item:t}})})),1)}}])})],1)}),[],!1,null,null,null);e.default=m.exports}}]);