exports.ids=[8],exports.modules={154:function(n,t,e){"use strict";e.r(t);e(47),e(18);var r=e(31),o=e.n(r),l=(e(48),e(32)),c=e.n(l),d=(e(62),e(36)),_={name:"EditBangumi",components:{VToggle:e.n(d).a,VField:c.a,VButton:o.a},asyncData({app:n,error:t,query:e}){const r=e.slug;if(r)return n.$axios.$get("v1/bangumi/show",{params:{slug:r}}).then(n=>({bangumi:n})).catch(t)},data:()=>({bangumi:null}),methods:{handleParentChange(n){this.$axios.$post("v1/bangumi/update/set_parent",{bangumi_slug:this.bangumi.slug,result:n})},handleSetParent(){this.$axios.$post("v1/bangumi/update/set_parent",{child_slug:this.bangumi.slug,parent_slug:this.bangumi.parent_slug}).then(()=>{this.$toast.info("设置成功")}).catch(n=>{this.$toast.error(n.message)})}},head:()=>({title:"番剧关系"})},m=e(1);var component=Object(m.a)(_,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.bangumi?e("div",{attrs:{id:"relation-bangumi"}},[n._ssrNode("<p>","</p>",[n._ssrNode("<span>作为父节点：</span> "),e("VToggle",{on:{change:n.handleParentChange},model:{value:n.bangumi.is_parent,callback:function(t){n.$set(n.bangumi,"is_parent",t)},expression:"bangumi.is_parent"}})],2),n._ssrNode(" "),n._ssrNode("<p>","</p>",[n._ssrNode("<span>设置父节点：</span> "),e("VField",{model:{value:n.bangumi.parent_slug,callback:function(t){n.$set(n.bangumi,"parent_slug",t)},expression:"bangumi.parent_slug"}}),n._ssrNode(" "),e("VButton",{on:{click:n.handleSetParent}},[n._v("\n      确认\n    ")])],2)],2):n._e()}),[],!1,(function(n){var t=e(98);t.__inject__&&t.__inject__(n)}),null,"0d42c1d4");t.default=component.exports},47:function(n,t){n.exports={}},48:function(n,t){n.exports={}},62:function(n,t){n.exports={}},63:function(n,t){n.exports={}},98:function(n,t,e){"use strict";e.r(t);var r=e(63),o=e.n(r);for(var l in r)"default"!==l&&function(n){e.d(t,n,(function(){return r[n]}))}(l);t.default=o.a}};