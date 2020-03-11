exports.ids=[21],exports.modules={104:function(e,t,n){"use strict";n(48),n(17);var r=n(29),l={name:"UserFollowBtn",components:{VButton:n.n(r).a},props:{slug:{type:String,required:!0}},computed:{state(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)},btnStyle(){return this.isAuth&&this.state?this.isMine?{text:"自己",theme:"info",plain:!0}:this.state.is_following&&this.state.is_followed_by?{text:"互相关注",theme:"info",plain:!0,icon:"ic_more"}:this.state.is_following?{text:"已关注",theme:"info",plain:!0,icon:"ic_more"}:this.state.is_followed_by?{text:"关注了我",theme:"primary",plain:!1,icon:"ic_add"}:{text:"关注",theme:"primary",plain:!1,icon:"ic_add"}:{text:"关注",plain:!1,theme:"primary",icon:"ic_add"}}},methods:{handleFollowClick(){this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnStyle.text&&"关注"!==this.btnStyle.text?this.$alert({title:"提示",message:"确定要取消关注吗？",buttons:["取消","确定"],maskClose:!0,callback:e=>{e&&this.submit()}}):this.submit()):this.$channel.$emit("sign-in")},async submit(){const data=await this.$store.dispatch("social/toggle",{type:"user-follow",action:"is_following",slug:this.slug,params:{target_slug:this.slug,target_type:"user",method_type:"follow"}});data.success&&this.$emit("change",data.result)}}},o=n(1),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.state?n("VButton",{attrs:{loading:e.state.is_following_loading,plain:e.btnStyle.plain,theme:e.btnStyle.theme,size:"small"},domProps:{textContent:e._s(e.btnStyle.text)},on:{click:e.handleFollowClick}}):e._e()}),[],!1,null,null,"0412b85a");t.a=component.exports},118:function(e,t,n){"use strict";n.r(t);var r=n(82),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},159:function(e,t,n){"use strict";n.r(t);n(78),n(17);var r=n(36),l=n.n(r),o=n(104),c=n(63),h={name:"UserItem",components:{UserAvatar:n(64).a,UserNickname:c.a,UserFollowBtn:o.a},props:{user:{type:Object,required:!0},score:{type:String,default:""}},methods:{goUser(){this.$bridge.navigateTo({url:`/pages/user/show/index?slug=${this.user.slug}`})}}},d=n(1);var f=Object(d.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"user-item",on:{click:e.goUser}},[n("UserAvatar",{attrs:{user:e.user}}),e._ssrNode(" "),e._ssrNode('<div class="content">',"</div>",[n("UserNickname",{attrs:{user:e.user}}),e._ssrNode(' <p class="intro oneline">'+e._ssrEscape(e._s(e.score||e.user.signature))+"</p>")],2),e._ssrNode(" "),n("UserFollowBtn",{attrs:{slug:e.user.slug}})],2)}),[],!1,(function(e){var t=n(118);t.__inject__&&t.__inject__(e)}),null,"c54f2264").exports,_={name:"UserList",components:{VSwitcher:l.a,UserItem:f},data(){const{query:e}=this.$route;return{activeIndex:"user_followers"===e.type?1:0}},computed:{query(){return this.$route.query},headers(){const{query:e}=this;return"idol_fans"===e.type?[{name:"最近入股",func:"getIdolFans",type:"page",query:{$axios:this.$axios,take:20,slug:e.slug,sort:"news"}},{name:"最多入股",func:"getIdolFans",type:"page",query:{$axios:this.$axios,take:20,slug:e.slug,sort:"hots"}}]:"user_following"===e.type||"user_followers"===e.type?[{name:"关注",func:"getUserRelation",type:"seenIds",query:{$axios:this.$axios,slug:e.slug,relation:"following",changing:"slug"}},{name:"粉丝",func:"getUserRelation",type:"seenIds",query:{$axios:this.$axios,slug:e.slug,relation:"follower",changing:"slug"}}]:[]}},methods:{handleChange(e){this.activeIndex=e,this.$refs.loader[e].initData()},computedUserScore(e,t){const{query:n}=this;return"idol_fans"===n.type?"news"===t?this.$utils.timeAgo(e.list_score):`${e.list_score}股`:""},detectUserRelation({data:data}){const{result:e}=data;e.length&&this.$axios.$get("v1/user/detect_relation",{params:{type:"user",targets:e.map(e=>e.slug).join(",")}}).then(data=>{this.$store.commit("social/set",{type:"user-follow",data:data}),this.$refs.loader[this.activeIndex].patch(data)}).catch(()=>{})}},head:()=>({title:"用户列表"})},m=Object(d.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"user-list"}},[e.headers.length?[n("VSwitcher",{attrs:{"default-index":e.activeIndex,headers:e.headers,align:"around"},on:{change:e.handleChange}},e._l(e.headers,(function(t,r){return n("FlowLoader",{key:r,ref:"loader",refInFor:!0,attrs:{slot:""+r,func:t.func,type:t.type,query:t.query,callback:e.detectUserRelation},slot:""+r,scopedSlots:e._u([{key:"default",fn:function(r){var l=r.flow;return n("ul",{},e._l(l,(function(r){return n("UserItem",{key:r.slug,attrs:{user:r,score:e.computedUserScore(r,t.query.sort)}})})),1)}}],null,!0)})})),1)]:n("FlowLoader",{attrs:{func:e.query.func,type:e.query.type,query:Object.assign({},{$axios:e.$axios},e.query),callback:e.detectUserRelation},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.flow;return n("ul",{},e._l(r,(function(t){return n("UserItem",{key:t.slug,attrs:{user:t,score:e.computedUserScore(t)}})})),1)}}])})],2)}),[],!1,null,null,"41992ca4");t.default=m.exports},48:function(e,t){e.exports={}},57:function(e,t){e.exports={}},58:function(e,t){e.exports={"ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},59:function(e,t){e.exports={}},63:function(e,t,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},showSex:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!1},showLevel:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.user.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"unknown",color:"gold"}}}},methods:{handleClick(){this.$emit("click")}}},l=n(1);var component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"user-nickname",on:{click:e.handleClick}},[e._ssrNode((e.showTitle?e._ssrList(e.user.title,(function(t,n){return"<span"+e._ssrClass(null,[e.$style.title,e.$style["ic-title"]])+">"+e._ssrEscape(e._s(t))+"</span>"})):"\x3c!----\x3e")+" "+(e.showLevel?"<span"+e._ssrClass(null,[e.$style.title,e.$style["ic-level"]])+">"+e._ssrEscape(e._s("Lv"+e.user.level))+"</span>":"\x3c!----\x3e")+" "+(e.showSex?"<span"+e._ssrClass(null,e.$style["ic-sex"])+"><i"+e._ssrClass("iconfont","ic-"+e.sexClass.name)+e._ssrStyle(null,{backgroundColor:e.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+' <div class="name"><p class="oneline">'+e._s(e.user.nickname)+"</p></div>")])}),[],!1,(function(e){var t=n(79);t.__inject__&&t.__inject__(e);var r=n(80);r.__inject__&&r.__inject__(e),this.$style=r.locals||r}),null,"c4bdd286");t.a=component.exports},64:function(e,t,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0}},methods:{handleClick(){this.$emit("click")}}},l=n(1);var component=Object(l.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"user-avatar",on:{click:this.handleClick}},[this._ssrNode("<img"+this._ssrAttr("src",this.$resize(this.user.avatar,{width:30}))+' class="avatar">')])}),[],!1,(function(e){var t=n(81);t.__inject__&&t.__inject__(e)}),null,"236803e8");t.a=component.exports},78:function(e,t){e.exports={}},79:function(e,t,n){"use strict";n.r(t);var r=n(57),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},80:function(e,t,n){"use strict";n.r(t);var r=n(58),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},81:function(e,t,n){"use strict";n.r(t);var r=n(59),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},82:function(e,t){e.exports={}}};