(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{236:function(t,e,n){t.exports={"bangumi-option":"bangumi-option_1VN2B",bangumiOption:"bangumi-option_1VN2B",body:"body_3llvZ",poster:"poster_3Wjvi",content:"content_1f3Yk",extra:"extra_1R6jg"}},249:function(t,e,n){"use strict";var l=n(236),o=n.n(l);e.default=o.a},250:function(t,e,n){"use strict";n(228),n(49);var l=n(229),o={name:"BangumiOptionItem",components:{VRadio:n.n(l).a},props:{item:{type:Object,required:!0},type:{type:String,default:"follow"},selectedSlug:{type:String,default:""}},data:function(){return{isSelected:this.item.slug===this.selectedSlug}},watch:{selectedSlug:function(t){this.isSelected=t===this.item.slug}},methods:{handleClick:function(){this.$emit("click")}}},c=n(249),r=n(37);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.bangumiOption,on:{click:t.handleClick}},[n("img",{class:t.$style.poster,attrs:{src:t.$resizeImage(t.item.avatar,{width:120})}}),t._v(" "),n("div",{class:t.$style.body},[n("div",{class:t.$style.content},[n("div",{staticClass:"oneline",class:t.$style.title,domProps:{textContent:t._s(t.item.name)}})]),t._v(" "),n("div",{class:t.$style.extra},["select"===t.type?n("VRadio",{attrs:{label:"",circle:"",readonly:""},model:{value:t.isSelected,callback:function(e){t.isSelected=e},expression:"isSelected"}}):t._e()],1)])])}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.a=component.exports},281:function(t,e,n){},334:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},335:function(t,e,n){"use strict";var l=n(281);n.n(l).a},399:function(t,e,n){"use strict";n.r(e);n(270),n(49);var l=n(271),o=n.n(l),c=n(250),r={name:"BangumiRelease",components:{VSwitcher:o.a,BangumiOptionItem:c.a},computed:{headers:function(){return["周一","周二","周三","周四","周五","周六","周日"]},defaultIndex:function(){return((new Date).getDay()||7)-1}},methods:{handleClick:function(t){this.$bridge.navigateTo({url:"/pages/bangumi/show/index?slug=".concat(t.slug)})}}},d=(n(335),n(37)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{attrs:{id:"bangumi-release"}},[l("FlowLoader",{attrs:{func:"getBangumiRelease",type:"page",query:{$axios:t.$axios}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow;return[l("VSwitcher",{attrs:{"default-index":t.defaultIndex,headers:t.headers}},t._l(t.headers,(function(e,c){return l("div",{key:c,attrs:{slot:c},slot:c},[o[c]&&o[c].length?t._l(o[c],(function(e){return l("BangumiOptionItem",{key:e.slug,attrs:{item:e},on:{click:function(n){return t.handleClick(e)}}})})):l("div",{staticClass:"no-content"},[l("img",{attrs:{src:n(334)}})])],2)})),0)]}}])})],1)}),[],!1,null,null,null);e.default=component.exports}}]);