(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{267:function(t,e,n){t.exports={h2:"h2_29h8C"}},268:function(t,e,n){t.exports={image:"image_2HoYb"}},269:function(t,e,n){t.exports={paragraph:"paragraph_1OWG2"}},270:function(t,e,n){t.exports={list:"list_rxwoA"}},271:function(t,e,n){t.exports={delimiter:"delimiter_3ksS5"}},272:function(t,e,n){t.exports={checklist:"checklist_35Trq"}},273:function(t,e,n){t.exports={link:"link_1cdqF",a:"a_ekjVU",content:"content_31mUQ",logo:"logo_3t3p1"}},274:function(t,e,n){t.exports={baidu:"baidu_3yD19",a:"a_15D0z",logo:"logo_3fZIb",content:"content_2vYlq",link:"link_2GrbH"}},276:function(t,e,n){t.exports={vote:"vote_1AMl_",selected:"selected_1h5XP",count:"count_3bLzQ",active:"active_2YTSY"}},280:function(t,e,n){},281:function(t,e,n){},282:function(t,e,n){t.exports={"ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},283:function(t,e,n){},319:function(t,e,n){"use strict";var o=n(267),r=n.n(o);e.default=r.a},320:function(t,e,n){"use strict";var o=n(268),r=n.n(o);e.default=r.a},321:function(t,e,n){"use strict";var o=n(269),r=n.n(o);e.default=r.a},322:function(t,e,n){"use strict";var o=n(270),r=n.n(o);e.default=r.a},323:function(t,e,n){"use strict";var o=n(271),r=n.n(o);e.default=r.a},324:function(t,e,n){"use strict";var o=n(272),r=n.n(o);e.default=r.a},326:function(t,e,n){"use strict";var o=n(273),r=n.n(o);e.default=r.a},327:function(t,e,n){"use strict";var o=n(274),r=n.n(o);e.default=r.a},329:function(t,e,n){"use strict";var o=n(276),r=n.n(o);e.default=r.a},330:function(t,e,n){"use strict";var o=n(280);n.n(o).a},331:function(t,e,n){"use strict";var o=n(281);n.n(o).a},332:function(t,e,n){"use strict";var o=n(282),r=n.n(o);e.default=r.a},333:function(t,e,n){"use strict";var o=n(283);n.n(o).a},345:function(t,e,n){"use strict";n.r(e);n(25),n(57),n(28),n(261),n(56);var o=n(262),r=n.n(o),l=(n(226),n(227)),c=n.n(l),d={name:"JsonHeader",props:{item:{type:Object,required:!0}},render:function(t){return t("h2",{class:this.$style.h2,domProps:{innerHTML:this.item.data.text}})}},h=n(319),m=n(24);var header=Object(m.a)(d,void 0,void 0,!1,(function(t){this.$style=h.default.locals||h.default}),null,null).exports,f={name:"JsonImage",props:{item:{type:Object,required:!0}}},v=n(320);var _=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.image},[n("VImg",{attrs:{src:t.item.data.file.url,stretched:t.item.data.stretched,width:t.item.data.file.width,height:t.item.data.file.height}}),t._v(" "),t.item.data.caption?n("p",{domProps:{textContent:t._s(t.item.data.caption)}}):t._e()],1)}),[],!1,(function(t){this.$style=v.default.locals||v.default}),null,null).exports,y={name:"JsonParagraph",props:{item:{type:Object,required:!0}}},x=n(321);var w=Object(m.a)(y,(function(){var t=this.$createElement;return(this._self._c||t)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text.replace(/\n/g,"<br>"))}})}),[],!1,(function(t){this.$style=x.default.locals||x.default}),null,null).exports,k={name:"JsonList",props:{item:{type:Object,required:!0}}},$=n(322);var C=Object(m.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.list},["ordered"===t.item.data.style?n("ol",t._l(t.item.data.items,(function(li,e){return n("li",{key:e,domProps:{innerHTML:t._s(li)}})})),0):n("ul",t._l(t.item.data.items,(function(li,e){return n("li",{key:e,domProps:{innerHTML:t._s(li)}})})),0)])}),[],!1,(function(t){this.$style=$.default.locals||$.default}),null,null).exports,S={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}},j=n(323);var O=Object(m.a)(S,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.delimiter})}),[],!1,(function(t){this.$style=j.default.locals||j.default}),null,null).exports,A={name:"JsonChecklist",props:{item:{type:Object,required:!0}}},D=n(324);var L=Object(m.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.checklist},t._l(t.item.data.items,(function(option,e){return n("li",{key:e},[option.checked?n("i"):n("em"),t._v(" "),n("div",{domProps:{innerHTML:t._s(option.text)}})])})),0)}),[],!1,(function(t){this.$style=D.default.locals||D.default}),null,null).exports,P=n(285),E={name:"JsonLink",directives:{copy:P.copy},props:{item:{type:Object,required:!0}},methods:{handleCopySuccess:function(){this.$toast.info("链接已复制到剪切板")}}},M=n(326);var T=Object(m.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.link},[n("div",{directives:[{name:"copy",rawName:"v-copy",value:t.item.data.link,expression:"item.data.link"},{name:"copy",rawName:"v-copy:callback",value:t.handleCopySuccess,expression:"handleCopySuccess",arg:"callback"}],class:t.$style.a},[t.item.data.meta.image&&t.item.data.meta.image.url?n("img",{class:t.$style.logo,attrs:{src:t.item.data.meta.image.url,width:"65",height:"65"}}):t._e(),t._v(" "),n("div",{class:t.$style.content},[n("h3",{domProps:{textContent:t._s(t.item.data.meta.title)}}),t._v(" "),n("p",{domProps:{textContent:t._s(t.item.data.meta.description)}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.data.link.replace(/https?:\/\//,""))}})])])])}),[],!1,(function(t){this.$style=M.default.locals||M.default}),null,null).exports,H={name:"JsonBaidu",directives:{copy:P.copy},props:{item:{type:Object,required:!0},reward:{type:Boolean,required:!0}},methods:{handleCopySuccess:function(){this.$toast.info("链接已复制到剪切板")}}},U=n(327);var B=Object(m.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.baidu},[n("div",{class:t.$style.a},[n("i",{staticClass:"iconfont ic-baidu-cloud",class:t.$style.logo}),t._v(" "),n("div",{directives:[{name:"copy",rawName:"v-copy",value:t.item.data.url,expression:"item.data.url"},{name:"copy",rawName:"v-copy:callback",value:t.handleCopySuccess,expression:"handleCopySuccess",arg:"callback"}],class:t.$style.content},[n("p",{staticClass:"oneline",class:t.$style.link,domProps:{textContent:t._s(t.item.data.url)}}),t._v(" "),n("p",{class:t.$style.password},[0===t.item.data.visit_type||t.reward?[t._v("\n          密码："+t._s(t.item.data.password)+"\n        ")]:[t._v("\n          密码投食后可见\n        ")]],2)])])])}),[],!1,(function(t){this.$style=U.default.locals||U.default}),null,null).exports,J=(n(81),n(30),n(113),n(9),n(328),n(236)),V={name:"JsonVote",props:{item:{type:Object,required:!0},vote:{type:Array,required:!0},slug:{type:String,required:!0}},data:function(){return{selected:[],submitting:!1,voted:!1,stat:[],maxCount:0}},watch:{vote:function(t){this.selected=t.map((function(t){return t})),t.length&&(this.voted=!0,this.getVoteStat())}},methods:{getVoteStat:function(){var t=this;this.$axios.$get("v1/pin/vote_stat",{params:{slug:this.slug}}).then((function(data){t.stat=data,t.maxCount=Math.max.apply(Math,Object(J.a)(Object.values(t.stat)))})).catch((function(){}))},handleSelect:function(option){var t=this.selected;if(!this.voted){var e=t.indexOf(option.id);if(~e)t.splice(e,1);else{var n=this.item.data.max_select;n<=t.length?1===n&&t.splice(e,1,option.id):t.push(option.id)}}},checkSelected:function(option){return~this.selected.indexOf(option.id)},submit:function(){var t=this;this.submitting||this.voted||(this.selected.length?this.item.data.expired_at&&1e3*this.item.data.expired_at<Date.now()?this.$toast.info("投票已截止"):(this.submitting=!0,this.$axios.$post("v1/social/vote",{pin_slug:this.slug,answer_hash:this.selected}).then((function(){t.$toast.success("投票成功"),t.voted=!0,t.getVoteStat()})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.submitting=!1}))):this.$toast.info("至少选择一项"))},computeItemStyle:function(option,t){var e=this.stat[option.id]||0;return{width:e?"".concat(75*e/this.maxCount,"%"):"0%",backgroundColor:this.getRandomColor(t)}},getRandomColor:function(t){return["rgba(255,170,170,.5)","rgba(255,148,39,.5)","rgba(252,196,25,.5)","rgba(32,201,151,.5)","rgba(18,183,245,.5)","rgba(173,181,189,.5)"][t%6]}}},N=n(329);var R=Object(m.a)(V,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{class:e.$style.vote},[o("div",[o("header",[e._v("投票（"+e._s(1===e.item.data.max_select?"单选":"最多选"+e.item.data.max_select+"个")+"）")]),e._v(" "),o("ul",e._l(e.item.data.items,(function(option,t){var n;return o("li",{key:option.id,staticClass:"oneline",class:(n={},n[e.$style.selected]=e.checkSelected(option),n),on:{click:function(t){return e.handleSelect(option)}}},[o("span",{class:e.$style.count,style:e.computeItemStyle(option,t),domProps:{innerHTML:e._s(e.stat[option.id]?e.stat[option.id]+"票&nbsp;&nbsp;":"")}}),e._v(" "),o("span",{domProps:{innerHTML:e._s(t+1+". "+option.text)}}),e._v(" "),o("i")])})),0),e._v(" "),o("footer",[o("span",[e._v("截止时间："+e._s(e.item.data.expired_at?e.$utils.timeAgo(e.item.data.expired_at):"无限期"))]),e._v(" "),o("button",{class:(t={},t[e.$style.active]=e.selected.length&&!e.voted,t),on:{click:e.submit}},[e._v("\n        "+e._s(e.submitting?"提交中":e.voted?"已投过票":"确认")+"\n      ")])])])])}),[],!1,(function(t){this.$style=N.default.locals||N.default}),null,null).exports,z=(n(44),n(164),n(36),n(58),n(111),n(232),n(277),n(80),n(228)),F=n(229),I=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.minLength,o=e.shareLink;Object(z.a)(this,t),this.config={org:"calibur.tv",appendStr:"文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。",minLength:n||140,shareLink:o||window.location.href.split("?")[0]},this.prefix={org:"来源",link:"链接",author:"作者"}}return Object(F.a)(t,[{key:"bind",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.minLength,r=n.authorNickname,l=n.shareLink,c=n.appendStr;t.addEventListener("copy",(function(t){var n=o||e.config.minLength,d=l||e.config.shareLink,h=c||e.config.appendStr,m=window.getSelection().getRangeAt(0),f=e.getHTMLParser("");f&&f.appendChild(m.cloneContents());var v=m.toString().trim(),_=f?f.innerHTML:e.getRangeHtml(m);if(document.createElement("div").innerHTML=_,v.length>=n){var y=e.getCopyHtml(_,d,r,h),x=e.getCopyText(v,d,r,h);void 0===t.clipboardData&&e.hack(y,m);try{t.clipboardData.setData("text/plain",x),t.clipboardData.setData("text/html",y),t.preventDefault()}catch(t){e.hack(y,m)}}}))}},{key:"abort",value:function(t){t.addEventListener("copy",(function(t){return t.stopPropagation(),t.preventDefault(),t.cancelBubble=!1,!1}))}},{key:"hack",value:function(text,t){var e=document.createElement("div");e.innerHTML=text,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),window.getSelection().selectAllChildren(e),setTimeout((function(){try{window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}catch(t){}document.body.removeChild(e)}),0)}},{key:"getCopyHtml",value:function(html,t,e,n){var o=this.getExtraCopyright(t,e,n).join("<br>");return"<div><div>".concat(html,"</div>").concat(o,"</div>")}},{key:"getCopyText",value:function(text,t,e,n){return text+this.getExtraCopyright(t,e,n).join("\n")}},{key:"getExtraCopyright",value:function(t,e,n){return e?["","","".concat(this.prefix.author,"：").concat(e),"".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]:["","","".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]}},{key:"getRangeHtml",value:function(text){var div=document.createElement("div");return div.appendChild(text.cloneContents()),div.outerHTML}},{key:"getHTMLParser",value:function(t){try{return(new window.DOMParser).parseFromString(t,"text/html").body}catch(n){var e=document.implementation.createHTMLDocument("");return e.body.innerHTML=t,e.body}}}]),t}(),Y={name:"JsonContent",components:{"v-header":header,"v-image":_,"v-paragraph":w,"v-list":C,"v-delimiter":O,"v-checklist":L,"v-link":T,"v-baidu":B,"v-vote":R},props:{content:{required:!0,type:Array},reward:{type:Boolean,default:!1},vote:{type:Array,default:function(){return[]}},slug:{type:String,default:""}},mounted:function(){(new I).bind(this.$el)}},G=Object(m.a)(Y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"json-content"},t._l(t.content,(function(e,o){return n("v-"+e.type,{key:o,tag:"component",attrs:{item:e,reward:t.reward,vote:t.vote,slug:t.slug}})})),1)}),[],!1,null,null,null).exports,K=(n(29),n(6)),Q={name:"UserFollowBtn",components:{VButton:c.a},props:{slug:{type:String,required:!0}},computed:{state:function(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth:function(){return this.$store.state.isAuth},isMine:function(){return this.$store.getters.isMine(this.slug)},btnStyle:function(){return this.isAuth&&this.state?this.isMine?{text:"自己",theme:"info",plain:!0}:this.state.is_following&&this.state.is_followed_by?{text:"互相关注",theme:"info",plain:!0,icon:"ic_more"}:this.state.is_following?{text:"已关注",theme:"info",plain:!0,icon:"ic_more"}:this.state.is_followed_by?{text:"关注了我",theme:"primary",plain:!1,icon:"ic_add"}:{text:"关注",theme:"primary",plain:!1,icon:"ic_add"}:{text:"关注",plain:!1,theme:"primary",icon:"ic_add"}}},methods:{handleFollowClick:function(){var t=this;this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnStyle.text&&"关注"!==this.btnStyle.text?this.$alert({title:"提示",message:"确定要取消关注吗？",buttons:["取消","确定"],callback:function(e){e&&t.submit()}}):this.submit()):this.$channel.$emit("sign-in")},submit:function(){var t=this;return Object(K.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("social/toggle",{type:"user-follow",action:"is_following",slug:t.slug,params:{target_slug:t.slug,target_type:"user",method_type:"follow"}});case 2:(data=e.sent).success&&t.$emit("change",data.result);case 4:case"end":return e.stop()}}),e)})))()}}},W=Object(m.a)(Q,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.state?n("VButton",{attrs:{loading:t.state.is_following_loading,plain:t.btnStyle.plain,theme:t.btnStyle.theme,size:"small"},on:{click:t.handleFollowClick}},[n("i",{staticClass:"bili-font",class:t.btnStyle.icon}),t._v(" "),n("span",{domProps:{textContent:t._s(t.btnStyle.text)}})]):t._e()}),[],!1,null,null,null).exports,X=(n(172),{name:"UserAvatar",props:{user:{type:Object,required:!0},size:{type:Number,default:30}},methods:{handleClick:function(){this.$emit("click")}}}),Z=(n(330),Object(m.a)(X,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-avatar",style:{width:this.size+"px",height:this.size+"px"},on:{click:this.handleClick}},[e("img",{staticClass:"avatar",attrs:{src:this.$resize(this.user.avatar,{width:this.size})}})])}),[],!1,null,null,null).exports),tt={name:"UserNickname",props:{user:{type:Object,required:!0},showSex:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!1}},computed:{sexClass:function(){switch(this.user.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"unknown",color:"gold"}}}},methods:{handleClick:function(){this.$emit("click")}}},et=(n(331),n(332));var nt=Object(m.a)(tt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-nickname",on:{click:t.handleClick}},[t.showTitle?t._l(t.user.title,(function(e,o){return n("span",{key:o,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})):t._e(),t._v(" "),n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level2)}}),t._v(" "),t.showSex?n("span",{class:t.$style["ic-sex"]},[n("i",{staticClass:"iconfont",class:"ic-"+t.sexClass.name,style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),n("div",{staticClass:"name"},[n("p",{staticClass:"oneline",domProps:{innerHTML:t._s(t.user.nickname)}})])],2)}),[],!1,(function(t){this.$style=et.default.locals||et.default}),null,null).exports,it={name:"PinShow",components:{VButton:c.a,VDrawer:r.a,UserFollowBtn:W,UserAvatar:Z,UserNickname:nt,JsonContent:G},asyncData:function(t){var e=t.app,n=t.error,o=t.params;return e.$axios.$get("v1/pin/show",{params:{slug:o.slug}}).then((function(data){return data})).catch(n)},data:function(){return{slug:"",intro:"",title:null,author:null,bangumi:null,content:[],trial_type:0,comment_type:0,recommended_at:0,published_at:"",last_edit_at:"",reward_status:!1,like_count:0,visit_count:0,mark_count:0,comment_count:0,reward_count:0,vote_hash:[],openEditDrawer:!1,openAdminDrawer:!1}},computed:{isMine:function(){return this.$store.getters.isMine(this.author.slug)},isAdmin:function(){return this.$store.getters.isAdmin}},beforeMount:function(){this.patchPin(),this.patchUser()},methods:{handleBangumiClick:function(){this.$bridge.navigateTo({url:"/pages/bangumi/show/index?slug=".concat(this.bangumi.slug)})},handleUserClick:function(){this.$bridge.navigateTo({url:"/pages/user/show/index?slug=".concat(this.author.slug)})},handleEditClick:function(){this.$bridge.navigateTo({url:"/pages/webview/index?url=".concat(encodeURIComponent("/write/pin?slug=".concat(this.slug)))})},handleDeletePin:function(){var t=this;this.$alert({title:"删除文章",message:"删除后不可恢复，确认要删除吗？",buttons:["取消","确认"],callback:function(e){e&&t.$axios.$post("v1/pin/delete",{slug:t.slug}).then((function(){t.$bridge.navigateBack()})).catch((function(e){t.$toast.error(e.message)}))}})},handleAction:function(t){this.openAdminDrawer=!1,this.openEditDrawer=!1,"edit"===t?this.handleEditClick():"delete"===t&&this.handleDeletePin()},patchPin:function(){var t=this;this.$axios.$get("v1/pin/patch",{params:{slug:this.slug}}).then((function(data){Object.keys(data).forEach((function(e){t[e]=data[e]})),t.$store.commit("social/set",{type:"pin",slug:t.slug,data:{down_vote_status:data.down_vote_status,up_vote_status:data.up_vote_status,mark_status:data.mark_status,reward_status:data.reward_status}}),t.vote_hash=data.vote_hash})).catch((function(){}))},patchUser:function(){var t=this;this.$axios.$get("v1/user/patch",{params:{slug:this.author.slug}}).then((function(data){t.$set(t,"author",Object.assign(t.author,data)),t.$store.commit("social/set",{type:"user-follow",slug:t.author.slug,data:{is_following:data.is_following,is_followed_by:data.is_followed_by}})})).catch((function(){}))}}},st=(n(333),Object(m.a)(it,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pin-show"}},[t.title?n("p",{staticClass:"title",domProps:{textContent:t._s(t.title.text)}}):t._e(),t._v(" "),n("div",{staticClass:"state"},[t.bangumi?[n("span",{domProps:{textContent:t._s(t.bangumi.name)},on:{click:t.handleBangumiClick}}),t._v(" "),n("span",{staticClass:"dot"},[t._v(" · ")])]:t._e(),t._v(" "),n("span",{domProps:{textContent:t._s(t.$utils.timeAgo(t.published_at))}}),t._v(" "),t.visit_count?[n("span",{staticClass:"dot"},[t._v(" · ")]),t._v(" "),n("span",{domProps:{textContent:t._s(t.$utils.shortenNumber(t.visit_count)+"阅读")}})]:t._e(),t._v(" "),t.isAdmin?[n("span",{staticStyle:{float:"right"},on:{click:function(e){t.openAdminDrawer=!0}}},[t._v("···")]),t._v(" "),n("VDrawer",{attrs:{count:2,strict:"",cancel:"取消"},model:{value:t.openAdminDrawer,callback:function(e){t.openAdminDrawer=e},expression:"openAdminDrawer"}},[n("div",{staticClass:"drawer-item",attrs:{slot:"0"},on:{click:function(e){return t.handleAction("recommend")}},slot:"0"},[t._v("\n          "+t._s(t.recommended_at?"取消推荐":"推荐")+"\n        ")]),t._v(" "),n("div",{staticClass:"drawer-item",attrs:{slot:"1"},on:{click:function(e){return t.handleAction("delete")}},slot:"1"},[t._v("\n          删除\n        ")])])]:t._e()],2),t._v(" "),t.author?n("div",{staticClass:"author"},[n("UserAvatar",{attrs:{user:t.author},on:{click:t.handleUserClick}}),t._v(" "),n("div",{staticClass:"intro"},[n("UserNickname",{attrs:{user:t.author},on:{click:t.handleUserClick}})],1),t._v(" "),t.isMine?[n("VButton",{attrs:{size:"small",theme:"warning",plain:""},on:{click:function(e){t.openEditDrawer=!0}}},[t._v("\n        编辑\n      ")]),t._v(" "),n("VDrawer",{attrs:{count:2,strict:"",cancel:"取消"},model:{value:t.openEditDrawer,callback:function(e){t.openEditDrawer=e},expression:"openEditDrawer"}},[n("div",{staticClass:"drawer-item",attrs:{slot:"0"},on:{click:function(e){return t.handleAction("edit")}},slot:"0"},[t._v("\n          编辑\n        ")]),t._v(" "),n("div",{staticClass:"drawer-item",attrs:{slot:"1"},on:{click:function(e){return t.handleAction("delete")}},slot:"1"},[t._v("\n          删除\n        ")])])]:n("UserFollowBtn",{attrs:{slug:t.author.slug}})],2):t._e(),t._v(" "),n("JsonContent",{attrs:{slug:t.slug,content:t.content,reward:t.reward_status,vote:t.vote_hash}})],1)}),[],!1,null,null,null));e.default=st.exports}}]);