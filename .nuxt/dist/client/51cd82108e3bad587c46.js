(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{236:function(t,e,n){t.exports={"bangumi-option":"bangumi-option_1VN2B",bangumiOption:"bangumi-option_1VN2B",body:"body_3llvZ",poster:"poster_3Wjvi",content:"content_1f3Yk",extra:"extra_1R6jg"}},245:function(t,e,n){},246:function(t,e,n){t.exports={"ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},247:function(t,e,n){},249:function(t,e,n){"use strict";var o=n(236),r=n.n(o);e.default=r.a},250:function(t,e,n){"use strict";n(228),n(49);var o=n(229),r={name:"BangumiOptionItem",components:{VRadio:n.n(o).a},props:{item:{type:Object,required:!0},type:{type:String,default:"follow"},selectedSlug:{type:String,default:""}},data:function(){return{isSelected:this.item.slug===this.selectedSlug}},watch:{selectedSlug:function(t){this.isSelected=t===this.item.slug}},methods:{handleClick:function(){this.$emit("click")}}},l=n(249),c=n(37);var component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.bangumiOption,on:{click:t.handleClick}},[n("img",{class:t.$style.poster,attrs:{src:t.$resizeImage(t.item.avatar,{width:120})}}),t._v(" "),n("div",{class:t.$style.body},[n("div",{class:t.$style.content},[n("div",{staticClass:"oneline",class:t.$style.title,domProps:{textContent:t._s(t.item.name)}})]),t._v(" "),n("div",{class:t.$style.extra},["select"===t.type?n("VRadio",{attrs:{label:"",circle:"",readonly:""},model:{value:t.isSelected,callback:function(e){t.isSelected=e},expression:"isSelected"}}):t._e()],1)])])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.a=component.exports},253:function(t,e,n){"use strict";var o={name:"UserNickname",props:{user:{type:Object,required:!0},showSex:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!1},showLevel:{type:Boolean,default:!1}},computed:{sexClass:function(){switch(this.user.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"unknown",color:"gold"}}}},methods:{handleClick:function(){this.$emit("click")}}},r=(n(272),n(273)),l=n(37);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"user-nickname",on:{click:t.handleClick}},[t.showTitle?t._l(t.user.title,(function(e,o){return n("span",{key:o,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})):t._e(),t._v(" "),t.showLevel?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t.showSex?n("span",{class:t.$style["ic-sex"]},[n("i",{staticClass:"iconfont",class:"ic-"+t.sexClass.name,style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),n("div",{staticClass:"name"},[n("p",{staticClass:"oneline",domProps:{innerHTML:t._s(t.user.nickname)}})])],2)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.a=component.exports},254:function(t,e,n){"use strict";var o={name:"UserAvatar",props:{user:{type:Object,required:!0}},methods:{handleClick:function(){this.$emit("click")}}},r=(n(274),n(37)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-avatar",on:{click:this.handleClick}},[e("img",{staticClass:"avatar",attrs:{src:this.$resizeImage(this.user.avatar,{width:30})}})])}),[],!1,null,null,null);e.a=component.exports},272:function(t,e,n){"use strict";var o=n(245);n.n(o).a},273:function(t,e,n){"use strict";var o=n(246),r=n.n(o);e.default=r.a},274:function(t,e,n){"use strict";var o=n(247);n.n(o).a},282:function(t,e,n){t.exports={h2:"h2_29h8C"}},283:function(t,e,n){t.exports={image:"image_2HoYb",wrap:"wrap_ocjMR"}},284:function(t,e,n){t.exports={paragraph:"paragraph_1OWG2"}},285:function(t,e,n){t.exports={list:"list_rxwoA"}},286:function(t,e,n){t.exports={delimiter:"delimiter_3ksS5"}},287:function(t,e,n){t.exports={checklist:"checklist_35Trq"}},288:function(t,e,n){t.exports={link:"link_1cdqF",a:"a_ekjVU",content:"content_31mUQ",logo:"logo_3t3p1"}},289:function(t,e,n){t.exports={baidu:"baidu_3yD19",a:"a_15D0z",logo:"logo_3fZIb",content:"content_2vYlq",link:"link_2GrbH"}},291:function(t,e,n){t.exports={vote:"vote_1AMl_",selected:"selected_1h5XP",count:"count_3bLzQ",active:"active_2YTSY"}},292:function(t,e,n){},293:function(t,e,n){},294:function(t,e,n){},295:function(t,e,n){},296:function(t,e,n){},299:function(t,e,n){"use strict";n(23);var o=n(5),r=(n(224),n(49),n(225)),l={name:"UserFollowBtn",components:{VButton:n.n(r).a},props:{slug:{type:String,required:!0}},computed:{state:function(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth:function(){return this.$store.state.isAuth},isMine:function(){return this.$store.getters.isMine(this.slug)},btnStyle:function(){return this.isAuth&&this.state?this.isMine?{text:"自己",theme:"info",plain:!0}:this.state.is_following&&this.state.is_followed_by?{text:"已互粉",theme:"info",plain:!0,icon:"ic_more"}:this.state.is_following?{text:"已关注",theme:"info",plain:!0,icon:"ic_more"}:this.state.is_followed_by?{text:"关注我",theme:"primary",plain:!1,icon:"ic_add"}:{text:"关注",theme:"primary",plain:!1,icon:"ic_add"}:{text:"关注",plain:!1,theme:"primary",icon:"ic_add"}}},methods:{handleFollowClick:function(){var t=this;this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnStyle.text&&"关注"!==this.btnStyle.text?this.$alert({title:"提示",message:"确定要取消关注吗？",buttons:["取消","确定"],maskClose:!0,callback:function(e){e&&t.submit()}}):this.submit()):this.$channel.$emit("sign-in")},submit:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("social/toggle",{type:"user-follow",action:"is_following",slug:t.slug,params:{target_slug:t.slug,target_type:"user",method_type:"follow"}});case 2:(data=e.sent).success&&t.$emit("change",data.result);case 4:case"end":return e.stop()}}),e)})))()}}},c=n(37),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.state?n("VButton",{attrs:{loading:t.state.is_following_loading,plain:t.btnStyle.plain,theme:t.btnStyle.theme,size:"small"},domProps:{textContent:t._s(t.btnStyle.text)},on:{click:t.handleFollowClick}}):t._e()}),[],!1,null,null,null);e.a=component.exports},334:function(t,e,n){"use strict";var o=n(282),r=n.n(o);e.default=r.a},337:function(t,e,n){"use strict";var o=n(283),r=n.n(o);e.default=r.a},338:function(t,e,n){"use strict";var o=n(284),r=n.n(o);e.default=r.a},339:function(t,e,n){"use strict";var o=n(285),r=n.n(o);e.default=r.a},340:function(t,e,n){"use strict";var o=n(286),r=n.n(o);e.default=r.a},341:function(t,e,n){"use strict";var o=n(287),r=n.n(o);e.default=r.a},343:function(t,e,n){"use strict";var o=n(288),r=n.n(o);e.default=r.a},344:function(t,e,n){"use strict";var o=n(289),r=n.n(o);e.default=r.a},346:function(t,e,n){"use strict";var o=n(291),r=n.n(o);e.default=r.a},347:function(t,e,n){t.exports=n.p+"img/e82d3e7.png"},348:function(t,e,n){t.exports=n.p+"img/2b562f5.gif"},351:function(t,e,n){"use strict";var o=n(292);n.n(o).a},352:function(t,e,n){"use strict";var o=n(293);n.n(o).a},355:function(t,e,n){"use strict";var o=n(294);n.n(o).a},358:function(t,e,n){"use strict";var o=n(295);n.n(o).a},359:function(t,e,n){"use strict";var o=n(296);n.n(o).a},373:function(t,e,n){"use strict";n.r(e);n(29),n(51),n(27),n(106),n(107),n(64),n(28);var o=n(65),r=(n(251),n(49),n(252)),l=n.n(r),c=(n(224),n(225)),d=n.n(c),m=(n(332),n(333)),h=n.n(m),f={name:"JsonHeader",props:{item:{type:Object,required:!0}},render:function(t){return t("h2",{class:this.$style.h2,domProps:{innerHTML:this.item.data.text}})}},v=n(334),_=n(37);var header=Object(_.a)(f,void 0,void 0,!1,(function(t){this.$style=v.default.locals||v.default}),null,null).exports,y=(n(335),n(336)),w={name:"JsonImage",components:{VImg:n.n(y).a},props:{item:{type:Object,required:!0}}},$=n(337);var k=Object(_.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item.data?n("div",{class:t.$style.image},[t.item.data.file?n("div",{class:t.$style.wrap,style:{paddingTop:parseFloat(t.item.data.file.height/t.item.data.file.width*100).toFixed(2)+"%"}},[n("VImg",{attrs:{src:t.item.data.file.url,width:400,height:parseFloat(t.item.data.file.height/t.item.data.file.width*400).toFixed(2),lazy:""}})],1):t._e(),t._v(" "),t.item.data.caption?n("p",{domProps:{textContent:t._s(t.item.data.caption)}}):t._e()]):t._e()}),[],!1,(function(t){this.$style=$.default.locals||$.default}),null,null).exports,C={name:"JsonParagraph",props:{item:{type:Object,required:!0}}},x=n(338);var S=Object(_.a)(C,(function(){var t=this.$createElement;return(this._self._c||t)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text.replace(/\n/g,"<br>"))}})}),[],!1,(function(t){this.$style=x.default.locals||x.default}),null,null).exports,O={name:"JsonList",props:{item:{type:Object,required:!0}}},P=n(339);var j=Object(_.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.list},["ordered"===t.item.data.style?n("ol",t._l(t.item.data.items,(function(li,e){return n("li",{key:e,domProps:{innerHTML:t._s(li)}})})),0):n("ul",t._l(t.item.data.items,(function(li,e){return n("li",{key:e,domProps:{innerHTML:t._s(li)}})})),0)])}),[],!1,(function(t){this.$style=P.default.locals||P.default}),null,null).exports,A={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}},D=n(340);var B=Object(_.a)(A,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.delimiter})}),[],!1,(function(t){this.$style=D.default.locals||D.default}),null,null).exports,F={name:"JsonChecklist",props:{item:{type:Object,required:!0}}},M=n(341);var E=Object(_.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.checklist},t._l(t.item.data.items,(function(option,e){return n("li",{key:e},[option.checked?n("i"):n("em"),t._v(" "),n("div",{domProps:{innerHTML:t._s(option.text)}})])})),0)}),[],!1,(function(t){this.$style=M.default.locals||M.default}),null,null).exports,U=n(300),V={name:"JsonLink",directives:{copy:U.copy},props:{item:{type:Object,required:!0}},methods:{handleCopySuccess:function(){this.$toast.info("链接已复制到剪切板")}}},T=n(343);var L=Object(_.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.link},[n("div",{directives:[{name:"copy",rawName:"v-copy",value:t.item.data.link,expression:"item.data.link"},{name:"copy",rawName:"v-copy:callback",value:t.handleCopySuccess,expression:"handleCopySuccess",arg:"callback"}],class:t.$style.a},[t.item.data.meta.image&&t.item.data.meta.image.url?n("img",{class:t.$style.logo,attrs:{src:t.item.data.meta.image.url,width:"65",height:"65"}}):t._e(),t._v(" "),n("div",{class:t.$style.content},[n("h3",{domProps:{textContent:t._s(t.item.data.meta.title)}}),t._v(" "),n("p",{domProps:{textContent:t._s(t.item.data.meta.description)}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.data.link.replace(/https?:\/\//,""))}})])])])}),[],!1,(function(t){this.$style=T.default.locals||T.default}),null,null).exports,R={name:"JsonBaidu",directives:{copy:U.copy},props:{item:{type:Object,required:!0},reward:{type:Boolean,required:!0}},methods:{handleCopySuccess:function(){this.$toast.info("链接已复制到剪切板")}}},N=n(344);var I=Object(_.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.baidu},[n("div",{class:t.$style.a},[n("i",{staticClass:"iconfont ic-baidu-cloud",class:t.$style.logo}),t._v(" "),n("div",{directives:[{name:"copy",rawName:"v-copy",value:t.item.data.url,expression:"item.data.url"},{name:"copy",rawName:"v-copy:callback",value:t.handleCopySuccess,expression:"handleCopySuccess",arg:"callback"}],class:t.$style.content},[n("p",{staticClass:"oneline",class:t.$style.link,domProps:{textContent:t._s(t.item.data.url)}}),t._v(" "),n("p",{class:t.$style.password},[0===t.item.data.visit_type||t.reward?[t._v("\n          密码："+t._s(t.item.data.password)+"\n        ")]:[t._v("\n          密码投食后可见\n        ")]],2)])])])}),[],!1,(function(t){this.$style=N.default.locals||N.default}),null,null).exports,J=(n(111),n(38),n(164),n(8),n(345),n(237)),H={name:"JsonVote",props:{item:{type:Object,required:!0},vote:{type:Array,required:!0},slug:{type:String,required:!0}},data:function(){return{selected:[],submitting:!1,voted:!1,stat:[],maxCount:0}},watch:{vote:function(t){this.selected=t.map((function(t){return t})),t.length&&(this.voted=!0,this.getVoteStat())}},methods:{getVoteStat:function(){var t=this;this.$axios.$get("v1/pin/vote_stat",{params:{slug:this.slug}}).then((function(data){t.stat=data,t.maxCount=Math.max.apply(Math,Object(J.a)(Object.values(t.stat)))})).catch((function(){}))},handleSelect:function(option){var t=this.selected;if(!this.voted){var e=t.indexOf(option.id);if(~e)t.splice(e,1);else{var n=this.item.data.max_select;n<=t.length?1===n&&t.splice(e,1,option.id):t.push(option.id)}}},checkSelected:function(option){return~this.selected.indexOf(option.id)},submit:function(){var t=this;this.submitting||this.voted||(this.selected.length?this.item.data.expired_at&&1e3*this.item.data.expired_at<Date.now()?this.$toast.info("投票已截止"):(this.submitting=!0,this.$axios.$post("v1/social/vote",{pin_slug:this.slug,answer_hash:this.selected}).then((function(){t.$toast.success("投票成功"),t.voted=!0,t.getVoteStat()})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.submitting=!1}))):this.$toast.info("至少选择一项"))},computeItemStyle:function(option,t){var e=this.stat[option.id]||0;return{width:e?"".concat(75*e/this.maxCount,"%"):"0%",backgroundColor:this.getRandomColor(t)}},getRandomColor:function(t){return["rgba(255,170,170,.5)","rgba(255,148,39,.5)","rgba(252,196,25,.5)","rgba(32,201,151,.5)","rgba(18,183,245,.5)","rgba(173,181,189,.5)"][t%6]}}},K=n(346);var z={name:"JsonContent",components:{"v-header":header,"v-image":k,"v-paragraph":S,"v-list":j,"v-delimiter":B,"v-checklist":E,"v-link":L,"v-baidu":I,"v-vote":Object(_.a)(H,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{class:e.$style.vote},[o("div",[o("header",[e._v("投票（"+e._s(1===e.item.data.max_select?"单选":"最多选"+e.item.data.max_select+"个")+"）")]),e._v(" "),o("ul",e._l(e.item.data.items,(function(option,t){var n;return o("li",{key:option.id,staticClass:"oneline",class:(n={},n[e.$style.selected]=e.checkSelected(option),n),on:{click:function(t){return e.handleSelect(option)}}},[o("span",{class:e.$style.count,style:e.computeItemStyle(option,t),domProps:{innerHTML:e._s(e.stat[option.id]?e.stat[option.id]+"票&nbsp;&nbsp;":"")}}),e._v(" "),o("span",{domProps:{innerHTML:e._s(t+1+". "+option.text)}}),e._v(" "),o("i")])})),0),e._v(" "),o("footer",[o("span",[e._v("截止时间："+e._s(e.item.data.expired_at?e.$utils.timeAgo(e.item.data.expired_at):"无限期"))]),e._v(" "),o("button",{class:(t={},t[e.$style.active]=e.selected.length&&!e.voted,t),on:{click:e.submit}},[e._v("\n        "+e._s(e.submitting?"提交中":e.voted?"已投过票":"确认")+"\n      ")])])])])}),[],!1,(function(t){this.$style=K.default.locals||K.default}),null,null).exports},props:{content:{required:!0,type:Array},reward:{type:Boolean,default:!1},vote:{type:Array,default:function(){return[]}},slug:{type:String,default:""}}},Y=Object(_.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"json-content"},t._l(t.content,(function(e,o){return n("v-"+e.type,t._b({key:o,tag:"component",attrs:{item:e,reward:t.reward}},"component","vote"===e.type?{vote:t.vote,slug:t.slug}:"",!1))})),1)}),[],!1,null,null,null).exports,G=n(299),Q=n(254),W=n(253),Z=(n(165),n(349),n(350)),X=n.n(Z),tt=(n(226),n(227)),et=n.n(tt),nt=(n(22),{name:"CommentItem",components:{UserAvatar:Q.a,UserNickname:W.a,JsonContent:Y},props:{item:{type:Object,required:!0}},data:function(){return{deleting:!1,loading:!1}},computed:{isMine:function(){return this.$store.getters.isMine(this.item.author.slug)},isAdmin:function(){return this.$store.getters.isAdmin}},methods:{commentClick:function(){this.isMine?this.$emit("create"):this.$emit("create",{comment_id:this.item.id,target:this.item.author})},clickAgree:function(){var t=this;this.$store.state.isAuth?this.isMine?this.$toast.info("不能给自己点赞"):this.loading||(this.loading=!0,this.$axios.$post("v1/social/toggle",{target_slug:this.item.id.toString(),target_type:"comment",action_slug:this.$store.state.user.slug,method_type:"up_vote"}).then((function(e){t.loading=!1,t.$emit("agree",{id:t.item.id,count:e?t.item.like_count- -1:t.item.like_count-1,result:e})})).catch((function(e){t.$toast.error(e.message),t.loading=!1}))):this.$channel.$emit("sign-in")},deleteComment:function(){var t=this;this.deleting||this.$alert({title:"删除评论",message:"删除后不可恢复，确认要删除吗？",buttons:["取消","确定"],maskClose:!0,callback:function(e){e&&(t.deleting=!0,t.$axios.$post("v1/comment/delete",{comment_id:t.item.id}).then((function(){t.$toast.success("删除成功"),t.$emit("delete",t.item.id)})).catch((function(e){t.$toast.error(e.message),t.deleting=!1})))}})},clickGetter:function(){this.$bridge.navigateTo({url:"/pages/user/show/index?slug=".concat(this.item.getter.slug)})}}}),st=(n(351),Object(_.a)(nt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"comment-item",attrs:{id:"comment-"+t.item.id}},[n("aside",[n("UserAvatar",{attrs:{user:t.item.author}})],1),t._v(" "),n("main",[n("header",[n("div",{staticClass:"intro"},[n("UserNickname",{attrs:{user:t.item.author}}),t._v(" "),n("div",{staticClass:"desc"},[n("span",{domProps:{textContent:t._s(t.$utils.timeAgo(t.item.created_at))}}),t._v(" "),t.item.getter?[n("span",{staticClass:"cc"},[t._v("回复")]),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.item.getter.nickname)},on:{click:t.clickGetter}})]:t._e()],2)],1),t._v(" "),n("span")]),t._v(" "),n("JsonContent",{attrs:{content:t.item.content},nativeOn:{click:function(e){return t.commentClick(e)}}}),t._v(" "),n("footer",[t.isMine||t.isAdmin?n("div",{on:{click:t.deleteComment}},[n("i",{staticClass:"iconfont ic-trash"})]):t._e(),t._v(" "),n("div",{on:{click:t.clickAgree}},[n("i",{staticClass:"iconfont ic-good"}),t._v(" "),t.item.like_count?n("span",{domProps:{textContent:t._s(t.item.like_count)}}):t._e()])])],1)])}),[],!1,null,null,null).exports),it={name:"CommentMain",components:{VField:et.a,VDialog:X.a,VButton:d.a,CommentItem:st},props:{slug:{type:String,required:!0},sortable:{type:Boolean,default:!1}},data:function(){return{sort:"time_asc",replyForm:{images:[],content:"",comment_id:"",pin_slug:this.slug},replyUser:null,creating:!1,showCreateForm:!1}},computed:{query:function(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,count:10,mode:"jump"}},sorts:function(){return[{label:"按热度排序",value:"hottest"},{label:"按时间升序",value:"time_asc"},{label:"按时间降序",value:"time_desc"}]}},methods:{showForm:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.$store.state.isAuth){var e=t.comment_id||"";e!==this.replyForm.comment_id&&(this.replyForm.content="",this.replyForm.images=[]),this.replyForm.comment_id=e,this.replyUser=t.target||null,this.showCreateForm=!0}else this.$channel.$emit("sign-in")},createComment:function(){var t=this;this.replyForm.content&&!this.creating&&(this.creating=!0,this.$axios.$post("v1/comment/create",this.replyForm).then((function(e){t.replyUser?t.$refs.loader.insertAfter({id:t.replyForm.comment_id,value:e}):t.$refs.loader.append(e),t.replyForm.content="",t.replyForm.images=[],t.creating=!1,t.showCreateForm=!1})).catch((function(e){t.$toast.error(e.message),t.creating=!1,t.showCreateForm=!1})))},handleAgree:function(t){var e=t.id,n=t.result,o=t.count;this.$refs.loader.update({id:e,value:n,key:"up_vote_status"}),this.$refs.loader.update({id:e,value:o,key:"like_count"})},changeCommentSort:function(t){var e=this;this.sort=t,this.$nextTick((function(){e.$refs.loader.refresh()}))},handleDelete:function(t){this.$refs.loader.delete(t)},handlePatch:function(t){var e=this,n=t.data.result;n.length&&this.$axios.$get("v1/comment/patch",{params:{comment_ids:n.map((function(t){return t.id})).join(",")}}).then((function(data){e.$refs.loader.patch(data)})).catch((function(){}))}}},at=(n(352),Object(_.a)(it,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comment-main"},[o("div",{staticClass:"hr"}),t._v(" "),o("FlowLoader",{ref:"loader",attrs:{func:"getPinComments",type:"page",query:t.query,callback:t.handlePatch,"use-first-loading":""},scopedSlots:t._u([{key:"header",fn:function(e){var source=e.source;return o("header",{staticClass:"comment-header"},[o("h2",{staticClass:"total",domProps:{textContent:t._s("评论 "+source.total)}}),t._v(" "),t.sortable?o("span",{staticClass:"sort",domProps:{textContent:t._s(t.sorts.find((function(e){return e.value===t.sort})).label)}}):t._e()])}},{key:"default",fn:function(e){var n=e.flow;return o("ul",{},t._l(n,(function(e){return o("CommentItem",{key:e.id,attrs:{item:e},on:{create:t.showForm,delete:t.handleDelete,agree:t.handleAgree}})})),1)}}])},[t._v(" "),t._v(" "),o("template",{slot:"nothing"},[o("img",{attrs:{src:n(347)},on:{click:function(e){return t.showForm({})}}}),t._v(" "),o("p",[t._v("还没有评论，快来抢沙发吧！")])]),t._v(" "),o("template",{slot:"first-loading"},[o("img",{attrs:{src:n(348)}})])],2),t._v(" "),o("VDialog",{attrs:{height:"auto"},model:{value:t.showCreateForm,callback:function(e){t.showCreateForm=e},expression:"showCreateForm"}},[o("VField",{attrs:{placeholder:t.replyUser?"回复："+t.replyUser.nickname:"发布评论","max-len":1500,"max-row":6,"min-row":3},model:{value:t.replyForm.content,callback:function(e){t.$set(t.replyForm,"content",e)},expression:"replyForm.content"}}),t._v(" "),o("div",{staticClass:"footer"},[o("span"),t._v(" "),o("VButton",{attrs:{size:"small"},on:{click:t.createComment}},[t._v("\n        发送\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports),ot=(n(259),n(353),n(354)),lt=n.n(ot),ct=(n(23),n(5)),ut={name:"PinRewardBtn",props:{pinSlug:{type:String,required:!0},userSlug:{type:String,required:!0}},computed:{state:function(){return this.$store.getters["social/get"]("pin",this.pinSlug)},isMine:function(){return this.$store.getters.isMine(this.userSlug)},user:function(){return this.$store.state.user}},methods:{reward:function(){var t=this;if(this.$store.state.isAuth)if(this.isMine)this.$toast.info("不能给自己投食");else if(this.state.reward_status)this.$toast.info("已经投过食了");else if(this.user.wallet_coin||this.user.wallet_money){if(!this.state.reward_status_loading){var e,n=!!this.user.wallet_coin;this.$alert({title:"投食",message:n?"向TA投食需要消耗你一个团子，是否继续?":"向TA投食需要消耗你一个光玉，是否继续?",buttons:["取消","确定"],callback:(e=Object(ct.a)(regeneratorRuntime.mark((function e(o){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.$store.dispatch("social/toggle",{type:"pin",slug:t.pinSlug,action:"reward_status",params:{target_type:"pin",target_slug:t.pinSlug,method_type:"favorite"}});case 4:(data=e.sent).success?(t.$channel.$emit("pin-toggle",{type:"reward",result:data.result}),n?t.$store.commit("UPDATE_USER_INFO",{key:"wallet_coin",value:t.user.wallet_coin-1}):t.$store.commit("UPDATE_USER_INFO",{key:"wallet_money",value:t.user.wallet_money-1})):t.$toast.error("服务器休息中");case 6:case"end":return e.stop()}}),e)}))),function(t){return e.apply(this,arguments)})})}}else this.$toast.info("没有足够的团子");else this.$channel.$emit("sign-in")}}},mt=Object(_.a)(ut,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"pin-reward-btn",on:{click:this.reward}},[this._t("default")],2)}),[],!1,null,null,null).exports,ht={name:"PinLikeBtn",props:{pinSlug:{type:String,required:!0},userSlug:{type:String,required:!0}},computed:{state:function(){return this.$store.getters["social/get"]("pin",this.pinSlug)},isMine:function(){return this.$store.getters.isMine(this.userSlug)}},methods:{upvote:function(){var t=this;return Object(ct.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.state.isAuth){e.next=3;break}return t.$channel.$emit("sign-in"),e.abrupt("return");case 3:if(!t.isMine){e.next=6;break}return t.$toast.info("不能给自己点赞"),e.abrupt("return");case 6:if(!t.state.up_vote_status_loading){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,t.$store.dispatch("social/toggle",{type:"pin",slug:t.pinSlug,action:"up_vote_status",params:{target_type:"pin",target_slug:t.pinSlug,method_type:"up_vote"}});case 10:(data=e.sent).success?t.$channel.$emit("pin-toggle",{type:"like",result:data.result}):t.$toast.error("服务器休息中");case 12:case"end":return e.stop()}}),e)})))()}}},pt={name:"PinToolBar",components:{PinLikeBtn:Object(_.a)(ht,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"pin-like-btn",on:{click:this.upvote}},[this._t("default")],2)}),[],!1,null,null,null).exports,PinRewardBtn:mt},props:{slug:{type:String,default:""},commentCount:{type:Number,default:0},likeCount:{type:Number,default:0},markCount:{type:Number,default:0},rewardCount:{type:Number,default:0},likeStatus:{type:Boolean,default:!1},markStatus:{type:Boolean,default:!1},rewardStatus:{type:Boolean,default:!1},authorSlug:{type:String,default:""}},methods:{handleCommentClick:function(){this.$emit("comment")},pageScroll:function(){lt()(document.querySelector(".comment-main").offsetTop-40)}}},ft=(n(355),Object(_.a)(pt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pin-tool-bar"},[n("div",{staticClass:"pin-tool-shim"}),t._v(" "),n("div",{staticClass:"pin-tool-wrap"},[n("div",{staticClass:"pin-tool-core"},[n("div",{staticClass:"comment",on:{click:t.handleCommentClick}},[t._v("\n        说点什么\n      ")]),t._v(" "),n("div",{staticClass:"tool-item",on:{click:t.pageScroll}},[n("i",{staticClass:"iconfont ic-talk"}),t._v(" "),n("p",{domProps:{textContent:t._s(t.commentCount)}})]),t._v(" "),n("PinRewardBtn",{staticClass:"tool-item",class:{active:t.rewardStatus},attrs:{"pin-slug":t.slug,"user-slug":t.authorSlug}},[n("i",{staticClass:"iconfont ic-reward"}),t._v(" "),n("p",{domProps:{textContent:t._s(t.rewardCount)}})]),t._v(" "),n("PinLikeBtn",{staticClass:"tool-item",class:{active:t.likeStatus},attrs:{"pin-slug":t.slug,"user-slug":t.authorSlug}},[n("i",{staticClass:"iconfont ic-good"}),t._v(" "),n("p",{domProps:{textContent:t._s(t.likeCount)}})])],1)])])}),[],!1,null,null,null).exports),vt=(n(356),n(357)),gt=n.n(vt),_t=n(250),yt={name:"MovePinBangumiDrawer",components:{VButton:d.a,VDrawer:l.a,VSearch:gt.a,BangumiOptionItem:_t.a},props:{value:{type:Boolean,required:!0},slug:{type:String,required:!0},bangumi:{type:String,required:!0}},data:function(){return{showDrawer:this.value,searchKeyword:"",flowKeyword:"",showFlowList:!1,selectedBangumi:this.bangumi,loading:!1}},watch:{showDrawer:function(t){this.$emit("input",t)},value:function(t){this.showDrawer=t}},methods:{handleSearch:function(){var t=this;this.showFlowList=!1,this.$nextTick((function(){t.flowKeyword=t.searchKeyword,t.showFlowList=!0}))},handleSelect:function(t){this.selectedBangumi=t.slug},handleCancel:function(){this.showDrawer=!1,this.showFlowList=!1,this.searchKeyword="",this.flowKeyword=""},handleSubmit:function(){var t=this;this.selectedBangumi&&this.selectedBangumi!==this.bangumi&&this.$alert({title:"确认要移动吗？",message:"建议不要频繁进行该操作",buttons:["取消","确认"],callback:function(e){e&&(t.loading||(t.loading=!1,t.$axios.$post("v1/pin/move",{slug:t.slug,bangumi:t.selectedBangumi}).then((function(){t.$toast.info("移动成功"),window.location.reload()})).catch((function(e){t.$toast.error(e.message),t.loading=!1}))))}})}}},wt=(n(358),Object(_.a)(yt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VDrawer",{staticClass:"move-pin-drawer",attrs:{lock:!1,from:"right",size:"100%"},model:{value:t.showDrawer,callback:function(e){t.showDrawer=e},expression:"showDrawer"}},[n("VSearch",{staticClass:"header",attrs:{"show-border":"",placeholder:"请输入番剧名称"},on:{submit:t.handleSearch,cancel:t.handleCancel},model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}}),t._v(" "),n("div",{staticClass:"main"},[t.showFlowList?n("FlowLoader",{attrs:{func:"getMixinSearch",type:"page",query:{$axios:t.$axios,type:"bangumi",q:t.flowKeyword}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow;return n("div",{},t._l(o,(function(e){return n("BangumiOptionItem",{key:e.slug,attrs:{item:e,"selected-slug":t.selectedBangumi,type:"select"},on:{click:function(n){return t.handleSelect(e)}}})})),1)}}],null,!1,2973822878)}):t._e()],1),t._v(" "),n("div",{staticClass:"footer"},[n("VButton",{attrs:{loading:t.loading,block:""},on:{click:t.handleSubmit}},[t._v("\n      提交\n    ")])],1)],1)}),[],!1,null,null,null).exports);function $t(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function bt(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$t(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$t(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var kt={name:"PinShow",components:{VAffix:h.a,VButton:d.a,VDrawer:l.a,UserFollowBtn:G.a,UserAvatar:Q.a,UserNickname:W.a,JsonContent:Y,CommentMain:at,PinToolBar:ft,MovePinBangumiDrawer:wt},asyncData:function(t){var e=t.app,n=t.error,o=t.params;return e.$axios.$get("v1/pin/show",{params:{slug:o.slug}}).then((function(data){return data})).catch(n)},data:function(){return{slug:"",intro:"",title:null,author:null,bangumi:null,content:[],trial_type:0,comment_type:0,recommended_at:0,published_at:"",last_edit_at:"",visit_count:0,comment_count:0,mark_count:0,reward_count:0,like_count:0,vote_hash:[],up_vote_status:!1,down_vote_status:!1,mark_status:!1,reward_status:!1,openEditDrawer:!1,openAdminDrawer:!1,showMoveDrawer:!1}},computed:{isMine:function(){return this.$store.getters.isMine(this.author.slug)},isAdmin:function(){return this.$store.getters.isAdmin}},beforeMount:function(){this.patchPin(),this.patchUser(),this.watchPinToggle()},methods:{watchPinToggle:function(){var t=this;this.$channel.$on("pin-toggle",(function(e){var n=e.type,o=e.result;t["".concat(n,"_count")]+=o,"like"===n?t.up_vote_status=o>0:t["".concat(n,"_status")]=o>0}))},handleCreateComment:function(){this.$refs.comment.showForm()},handleBangumiClick:function(){this.$bridge.navigateTo({url:"/pages/bangumi/show/index?slug=".concat(this.bangumi.slug)})},handleUserClick:function(){this.$bridge.navigateTo({url:"/pages/user/show/index?slug=".concat(this.author.slug)})},handleEditClick:function(){this.$bridge.__IN_APP__?this.$bridge.navigateTo({url:"/pages/webview/index?url=".concat(encodeURIComponent("/write/pin?slug=".concat(this.slug)))}):this.$router.push({name:"write-pin",query:bt({},this.$route.query,{slug:this.slug})})},handleDeletePin:function(){var t=this;this.$alert({title:"删除文章",message:"删除后不可恢复，确认要删除吗？",buttons:["取消","确认"],maskClose:!0,callback:function(e){e&&t.$axios.$post("v1/pin/delete",{slug:t.slug}).then((function(){t.$bridge.navigateBack()})).catch((function(e){t.$toast.error(e.message)}))}})},handleRecommendPin:function(){var t=this,e=!this.recommended_at,n=function(){t.$axios.$post("v1/pin/recommend",{slug:t.slug,result:e}).then((function(){t.$toast.info(e?"推荐成功":"取消推荐成功"),t.recommended_at=e})).catch((function(e){t.$toast.error(e.message)}))};e?n():this.$alert({title:"取消文章推荐",message:"确认要取消吗？",buttons:["取消","确认"],maskClose:!0,callback:function(t){t&&n()}})},handleAction:function(t){this.openAdminDrawer=!1,this.openEditDrawer=!1,"edit"===t?this.handleEditClick():"delete"===t?this.handleDeletePin():"recommend"===t?this.handleRecommendPin():"move"===t&&(this.showMoveDrawer=!0)},patchPin:function(){var t=this;this.$axios.$get("v1/pin/patch",{params:{slug:this.slug}}).then((function(data){Object.keys(data).forEach((function(e){t[e]=data[e]})),t.$store.commit("social/set",{type:"pin",slug:t.slug,data:{down_vote_status:data.down_vote_status,up_vote_status:data.up_vote_status,mark_status:data.mark_status,reward_status:data.reward_status}}),t.vote_hash=data.vote_hash})).catch((function(){}))},patchUser:function(){var t=this;this.$axios.$get("v1/user/patch",{params:{slug:this.author.slug}}).then((function(data){t.$set(t,"author",Object.assign(t.author,data)),t.$store.commit("social/set",{type:"user-follow",slug:t.author.slug,data:{is_following:data.is_following,is_followed_by:data.is_followed_by}})})).catch((function(){}))}}},Ct=(n(359),Object(_.a)(kt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pin-show"}},[t.title?n("p",{staticClass:"title",domProps:{textContent:t._s(t.title.text)}}):t._e(),t._v(" "),n("div",{staticClass:"state"},[t.bangumi?[n("span",{domProps:{textContent:t._s(t.bangumi.name)},on:{click:t.handleBangumiClick}}),t._v(" "),n("span",{staticClass:"dot"},[t._v(" · ")])]:t._e(),t._v(" "),n("span",{domProps:{textContent:t._s(t.$utils.timeAgo(t.published_at))}}),t._v(" "),t.visit_count?[n("span",{staticClass:"dot"},[t._v(" · ")]),t._v(" "),n("span",{domProps:{textContent:t._s(t.$utils.shortenNumber(t.visit_count)+"阅读")}})]:t._e(),t._v(" "),t.isAdmin?[n("span",{staticStyle:{float:"right"},on:{click:function(e){t.openAdminDrawer=!0}}},[t._v("···")]),t._v(" "),n("VDrawer",{attrs:{count:3,strict:"",cancel:"取消"},model:{value:t.openAdminDrawer,callback:function(e){t.openAdminDrawer=e},expression:"openAdminDrawer"}},[n("div",{staticClass:"drawer-item",attrs:{slot:"0"},on:{click:function(e){return t.handleAction("recommend")}},slot:"0"},[t._v("\n          "+t._s(t.recommended_at?"取消推荐":"推荐")+"\n        ")]),t._v(" "),n("div",{staticClass:"drawer-item",attrs:{slot:"1"},on:{click:function(e){return t.handleAction("move")}},slot:"1"},[t._v("\n          移动\n        ")]),t._v(" "),n("div",{staticClass:"drawer-item",attrs:{slot:"2"},on:{click:function(e){return t.handleAction("delete")}},slot:"2"},[t._v("\n          删除\n        ")])]),t._v(" "),n("MovePinBangumiDrawer",{attrs:{bangumi:t.bangumi.slug,slug:t.slug},model:{value:t.showMoveDrawer,callback:function(e){t.showMoveDrawer=e},expression:"showMoveDrawer"}})]:t._e()],2),t._v(" "),t.author?n("VAffix",{attrs:{"fixed-top":0}},[n("div",{staticClass:"author"},[n("UserAvatar",{attrs:{user:t.author},on:{click:t.handleUserClick}}),t._v(" "),n("div",{staticClass:"intro"},[n("UserNickname",{attrs:{user:t.author,"show-level":""},on:{click:t.handleUserClick}})],1),t._v(" "),t.isMine?[n("VButton",{attrs:{size:"small",theme:"warning",plain:""},on:{click:function(e){t.openEditDrawer=!0}}},[t._v("\n          编辑\n        ")]),t._v(" "),n("VDrawer",{attrs:{count:2,strict:"",cancel:"取消"},model:{value:t.openEditDrawer,callback:function(e){t.openEditDrawer=e},expression:"openEditDrawer"}},[n("div",{staticClass:"drawer-item",attrs:{slot:"0"},on:{click:function(e){return t.handleAction("edit")}},slot:"0"},[t._v("\n            编辑\n          ")]),t._v(" "),n("div",{staticClass:"drawer-item",attrs:{slot:"1"},on:{click:function(e){return t.handleAction("delete")}},slot:"1"},[t._v("\n            删除\n          ")])])]:n("UserFollowBtn",{attrs:{slug:t.author.slug}})],2)]):t._e(),t._v(" "),n("JsonContent",{attrs:{slug:t.slug,content:t.content,reward:t.reward_status,vote:t.vote_hash}}),t._v(" "),n("CommentMain",{ref:"comment",attrs:{slug:t.slug}}),t._v(" "),t.author?n("PinToolBar",{attrs:{slug:t.slug,"comment-count":t.comment_count,"like-count":t.like_count,"mark-count":t.mark_count,"reward-count":t.reward_count,"like-status":t.up_vote_status,"mark-status":t.mark_status,"author-slug":t.author.slug,"reward-status":t.reward_status},on:{comment:t.handleCreateComment}}):t._e()],1)}),[],!1,null,null,null));e.default=Ct.exports}}]);