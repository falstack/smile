exports.ids=[15],exports.modules=Array(47).concat([function(t,e){t.exports={}},function(t,e){t.exports={}},,,,function(t,e){t.exports={}},,,,function(t,e){t.exports={}},function(t,e){t.exports={"ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},function(t,e){t.exports={}},function(t,e){t.exports={"bangumi-option":"bangumi-option_1VN2B",bangumiOption:"bangumi-option_1VN2B",body:"body_3llvZ",poster:"poster_3Wjvi",content:"content_1f3Yk",extra:"extra_1R6jg"}},function(t,e){t.exports={}},function(t,e,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},showSex:{type:Boolean,default:!1},showTitle:{type:Boolean,default:!1},showLevel:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.user.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"unknown",color:"gold"}}}},methods:{handleClick(){this.$emit("click")}}},o=n(1);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"user-nickname",on:{click:t.handleClick}},[t._ssrNode((t.showTitle?t._ssrList(t.user.title,(function(e,n){return"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-title"]])+">"+t._ssrEscape(t._s(e))+"</span>"})):"\x3c!----\x3e")+" "+(t.showLevel?"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-level"]])+">"+t._ssrEscape(t._s("Lv"+t.user.level))+"</span>":"\x3c!----\x3e")+" "+(t.showSex?"<span"+t._ssrClass(null,t.$style["ic-sex"])+"><i"+t._ssrClass("iconfont","ic-"+t.sexClass.name)+t._ssrStyle(null,{backgroundColor:t.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+' <div class="name"><p class="oneline">'+t._s(t.user.nickname)+"</p></div>")])}),[],!1,(function(t){var e=n(76);e.__inject__&&e.__inject__(t);var r=n(77);r.__inject__&&r.__inject__(t),this.$style=r.locals||r}),null,"c4bdd286");e.a=component.exports},function(t,e,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0}},methods:{handleClick(){this.$emit("click")}}},o=n(1);var component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"user-avatar",on:{click:this.handleClick}},[this._ssrNode("<img"+this._ssrAttr("src",this.$resize(this.user.avatar,{width:30}))+' class="avatar">')])}),[],!1,(function(t){var e=n(78);e.__inject__&&e.__inject__(t)}),null,"236803e8");e.a=component.exports},,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r=n(56),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(57),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(58),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},,,,function(t,e,n){"use strict";n.r(e);var r=n(59),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},,,function(t,e){t.exports={h2:"h2_29h8C"}},function(t,e){t.exports={}},function(t,e){t.exports={image:"image_2HoYb"}},function(t,e){t.exports={paragraph:"paragraph_1OWG2"}},function(t,e){t.exports={list:"list_rxwoA"}},function(t,e){t.exports={delimiter:"delimiter_3ksS5"}},function(t,e){t.exports={checklist:"checklist_35Trq"}},function(t,e){t.exports={link:"link_1cdqF",a:"a_ekjVU",content:"content_31mUQ",logo:"logo_3t3p1"}},function(t,e){t.exports={baidu:"baidu_3yD19",a:"a_15D0z",logo:"logo_3fZIb",content:"content_2vYlq",link:"link_2GrbH"}},function(t,e){t.exports={vote:"vote_1AMl_",selected:"selected_1h5XP",count:"count_3bLzQ",active:"active_2YTSY"}},function(t,e){t.exports={}},function(t,e){t.exports={}},function(t,e){t.exports={}},function(t,e){t.exports={}},function(t,e){t.exports={}},,function(t,e,n){"use strict";n(48),n(17);var r=n(29),o={name:"UserFollowBtn",components:{VButton:n.n(r).a},props:{slug:{type:String,required:!0}},computed:{state(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)},btnStyle(){return this.isAuth&&this.state?this.isMine?{text:"自己",theme:"info",plain:!0}:this.state.is_following&&this.state.is_followed_by?{text:"互相关注",theme:"info",plain:!0,icon:"ic_more"}:this.state.is_following?{text:"已关注",theme:"info",plain:!0,icon:"ic_more"}:this.state.is_followed_by?{text:"关注了我",theme:"primary",plain:!1,icon:"ic_add"}:{text:"关注",theme:"primary",plain:!1,icon:"ic_add"}:{text:"关注",plain:!1,theme:"primary",icon:"ic_add"}}},methods:{handleFollowClick(){this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnStyle.text&&"关注"!==this.btnStyle.text?this.$alert({title:"提示",message:"确定要取消关注吗？",buttons:["取消","确定"],maskClose:!0,callback:t=>{t&&this.submit()}}):this.submit()):this.$channel.$emit("sign-in")},async submit(){const data=await this.$store.dispatch("social/toggle",{type:"user-follow",action:"is_following",slug:this.slug,params:{target_slug:this.slug,target_type:"user",method_type:"follow"}});data.success&&this.$emit("change",data.result)}}},l=n(1),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.state?n("VButton",{attrs:{loading:t.state.is_following_loading,plain:t.btnStyle.plain,theme:t.btnStyle.theme,size:"small"},domProps:{textContent:t._s(t.btnStyle.text)},on:{click:t.handleFollowClick}}):t._e()}),[],!1,null,null,"0412b85a");e.a=component.exports},function(t,e,n){"use strict";n(52),n(17);var r=n(32),o={name:"BangumiOptionItem",components:{VRadio:n.n(r).a},props:{item:{type:Object,required:!0},type:{type:String,default:"follow"},selectedSlug:{type:String,default:""}},data(){return{isSelected:this.item.slug===this.selectedSlug}},watch:{selectedSlug(t){this.isSelected=t===this.item.slug}},methods:{handleClick(){"select"===this.type&&this.$emit("click")}}},l=n(1);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.bangumiOption,on:{click:t.handleClick}},[t._ssrNode("<img"+t._ssrAttr("src",t.$resize(t.item.avatar,{width:120,height:120}))+t._ssrClass(null,t.$style.poster)+"> "),t._ssrNode("<div"+t._ssrClass(null,t.$style.body)+">","</div>",[t._ssrNode("<div"+t._ssrClass(null,t.$style.content)+"><div"+t._ssrClass("oneline",t.$style.title)+">"+t._ssrEscape(t._s(t.item.name))+"</div></div> "),t._ssrNode("<div"+t._ssrClass(null,t.$style.extra)+">","</div>",["select"===t.type?n("VRadio",{attrs:{label:"",circle:"",readonly:""},model:{value:t.isSelected,callback:function(e){t.isSelected=e},expression:"isSelected"}}):t._e()],1)],2)],2)}),[],!1,(function(t){var e=n(82);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"36e9d501");e.a=component.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){t.exports={}},function(t,e,n){"use strict";n.r(e);var r=n(85),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(86),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(87),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(88),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(89),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(90),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(91),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(92),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(93),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(94),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){t.exports=n.p+"img/e82d3e7.png"},function(t,e,n){t.exports=n.p+"img/2b562f5.gif"},function(t,e){t.exports={}},function(t,e,n){"use strict";n.r(e);var r=n(95),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(96),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e){t.exports={}},function(t,e,n){"use strict";n.r(e);var r=n(97),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e){t.exports={}},function(t,e,n){"use strict";n.r(e);var r=n(98),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},function(t,e,n){"use strict";n.r(e);var r=n(99),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},,,,function(t,e,n){"use strict";n.r(e);n(60),n(17);var r=n(34),o=n.n(r),l=(n(48),n(29)),c=n.n(l),d=(n(130),n(41)),h=n.n(d),m={name:"JsonHeader",props:{item:{type:Object,required:!0}},render(t){return t("h2",{class:this.$style.h2,domProps:{innerHTML:this.item.data.text}})}},_=n(1);var header=Object(_.a)(m,void 0,void 0,!1,(function(t){var e=n(131);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"6dc15c0b").exports,f={name:"VImg",props:{src:{type:String,required:!0},def:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:""},height:{type:[String,Number],default:""},radius:{type:String,default:""},blur:{type:Boolean,default:!1}},data(){const{def:t,width:e}=this,n=t?t.startsWith("http")?t:`https://m1.calibur.tv/${t}`:"",r="number"==typeof e&&"number"==typeof this.height&&!this.radius;return{show:n,source:n,isFull:r,useBlur:!!r||this.blur,isLarge:e.toString().endsWith("%"),extraStyle:{},animate:!1}},computed:{style(){const style={},{width:t,height:e,radius:n,isFull:r,isLarge:o}=this;return r?(style.paddingTop=`${e/t*100}%`,style):(t&&!o&&(style.width=`${t}px`),e&&(style.height=`${e}px`),n&&(style.borderRadius=n),style)}},methods:{handle(){const{src:t,isFull:e,isLarge:n}=this,r=n?2:1;let{width:o,height:l}=this;if(e){const t=500;o>t&&(l=parseInt(t/o*l,10),o=t),l>9999&&(o=parseInt(9999/l*o,10),l=9999),o<this.$el.clientWidth&&(this.extraStyle={width:`${o}px`,height:`${l}px`,paddingTop:"0px"})}n&&(o=parseInt(o.slice(0,-1)/100*this.$el.clientWidth,10)),o=parseInt(o,10),l=parseInt(l,10),this.show=this.$resize(t,{width:o,height:l,mode:r,webP:!1}),this.source=this.$resize(t,{width:o,height:l,mode:r})},loaded(){this.useBlur&&(this.animate=!0)}}};var v={name:"JsonImage",components:{VImg:Object(_.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("picture",{directives:[{name:"lazyload",rawName:"v-lazyload",value:t.handle,expression:"handle"}],staticClass:"img",class:{"is-full":t.isFull,"is-blur":t.useBlur,"show-animate":t.animate},style:[t.style,t.extraStyle]},[t._ssrNode("<source"+t._ssrAttr("srcset",t.source)+' type="image/webp"> <img'+t._ssrAttr("src",t.show)+t._ssrAttr("alt",t.alt)+t._ssrAttr("origin-src",t.src)+">")])}),[],!1,(function(t){var e=n(132);e.__inject__&&e.__inject__(t)}),null,"0555b88a").exports},props:{item:{type:Object,required:!0}}};var y=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.image},[n("VImg",{attrs:{src:t.item.data.file.url,stretched:t.item.data.stretched,width:t.item.data.file.width,height:t.item.data.file.height}}),t._ssrNode(" "+(t.item.data.caption?"<p>"+t._ssrEscape(t._s(t.item.data.caption))+"</p>":"\x3c!----\x3e"))],2)}),[],!1,(function(t){var e=n(133);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"78c01c4d").exports,w={name:"JsonParagraph",props:{item:{type:Object,required:!0}}};var $=Object(_.a)(w,(function(){var t=this.$createElement;return(this._self._c||t)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text.replace(/\n/g,"<br>"))}},[])}),[],!1,(function(t){var e=n(134);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"5b767de0").exports,x={name:"JsonList",props:{item:{type:Object,required:!0}}};var k=Object(_.a)(x,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.list},[t._ssrNode("ordered"===t.item.data.style?"<ol>"+t._ssrList(t.item.data.items,(function(li,e){return"<li>"+t._s(li)+"</li>"}))+"</ol>":"<ul>"+t._ssrList(t.item.data.items,(function(li,e){return"<li>"+t._s(li)+"</li>"}))+"</ul>")])}),[],!1,(function(t){var e=n(135);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"55b9db1c").exports,C={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}};var S=Object(_.a)(C,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.delimiter},[])}),[],!1,(function(t){var e=n(136);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"1e9625f9").exports,j={name:"JsonChecklist",props:{item:{type:Object,required:!0}}};var N=Object(_.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{class:t.$style.checklist},[t._ssrNode(t._ssrList(t.item.data.items,(function(option,e){return"<li>"+(option.checked?"<i></i>":"<em></em>")+" <div>"+t._s(option.text)+"</div></li>"})))])}),[],!1,(function(t){var e=n(137);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"5c64aa18").exports,A=n(36),E={name:"JsonLink",directives:{copy:A.copy},props:{item:{type:Object,required:!0}},methods:{handleCopySuccess(){this.$toast.info("链接已复制到剪切板")}}};var B=Object(_.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.link},[n("div",{directives:[{name:"copy",rawName:"v-copy",value:t.item.data.link,expression:"item.data.link"},{name:"copy",rawName:"v-copy:callback",value:t.handleCopySuccess,expression:"handleCopySuccess",arg:"callback"}],class:t.$style.a},[t._ssrNode((t.item.data.meta.image&&t.item.data.meta.image.url?"<img"+t._ssrAttr("src",t.item.data.meta.image.url)+' width="65" height="65"'+t._ssrClass(null,t.$style.logo)+">":"\x3c!----\x3e")+" <div"+t._ssrClass(null,t.$style.content)+"><h3>"+t._ssrEscape(t._s(t.item.data.meta.title))+"</h3> <p>"+t._ssrEscape(t._s(t.item.data.meta.description))+"</p> <span>"+t._ssrEscape(t._s(t.item.data.link.replace(/https?:\/\//,"")))+"</span></div>")])])}),[],!1,(function(t){var e=n(138);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"4cb2cc78").exports,O={name:"JsonBaidu",directives:{copy:A.copy},props:{item:{type:Object,required:!0},reward:{type:Boolean,required:!0}},methods:{handleCopySuccess(){this.$toast.info("链接已复制到剪切板")}}};var F=Object(_.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.baidu},[t._ssrNode("<div"+t._ssrClass(null,t.$style.a)+">","</div>",[t._ssrNode("<i"+t._ssrClass("iconfont ic-baidu-cloud",t.$style.logo)+"></i> "),n("div",{directives:[{name:"copy",rawName:"v-copy",value:t.item.data.url,expression:"item.data.url"},{name:"copy",rawName:"v-copy:callback",value:t.handleCopySuccess,expression:"handleCopySuccess",arg:"callback"}],class:t.$style.content},[t._ssrNode("<p"+t._ssrClass("oneline",t.$style.link)+">"+t._ssrEscape(t._s(t.item.data.url))+"</p> <p"+t._ssrClass(null,t.$style.password)+">"+(0===t.item.data.visit_type||t.reward?t._ssrEscape("\n          密码："+t._s(t.item.data.password)+"\n        "):"\n          密码投食后可见\n        ")+"</p>")])],2)])}),[],!1,(function(t){var e=n(139);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"2f47c10d").exports,D={name:"JsonVote",props:{item:{type:Object,required:!0},vote:{type:Array,required:!0},slug:{type:String,required:!0}},data:()=>({selected:[],submitting:!1,voted:!1,stat:[],maxCount:0}),watch:{vote(t){this.selected=t.map(t=>t),t.length&&(this.voted=!0,this.getVoteStat())}},methods:{getVoteStat(){this.$axios.$get("v1/pin/vote_stat",{params:{slug:this.slug}}).then(data=>{this.stat=data,this.maxCount=Math.max(...Object.values(this.stat))}).catch(()=>{})},handleSelect(option){const{selected:t,voted:e}=this;if(e)return;const n=t.indexOf(option.id);if(~n)return void t.splice(n,1);const r=this.item.data.max_select;r<=t.length?1===r&&t.splice(n,1,option.id):t.push(option.id)},checkSelected(option){return~this.selected.indexOf(option.id)},submit(){this.submitting||this.voted||(this.selected.length?this.item.data.expired_at&&1e3*this.item.data.expired_at<Date.now()?this.$toast.info("投票已截止"):(this.submitting=!0,this.$axios.$post("v1/social/vote",{pin_slug:this.slug,answer_hash:this.selected}).then(()=>{this.$toast.success("投票成功"),this.voted=!0,this.getVoteStat()}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.submitting=!1})):this.$toast.info("至少选择一项"))},computeItemStyle(option,t){const e=this.stat[option.id]||0;return{width:e?`${75*e/this.maxCount}%`:"0%",backgroundColor:this.getRandomColor(t)}},getRandomColor:t=>["rgba(255,170,170,.5)","rgba(255,148,39,.5)","rgba(252,196,25,.5)","rgba(32,201,151,.5)","rgba(18,183,245,.5)","rgba(173,181,189,.5)"][t%6]}};var P={name:"JsonContent",components:{"v-header":header,"v-image":y,"v-paragraph":$,"v-list":k,"v-delimiter":S,"v-checklist":N,"v-link":B,"v-baidu":F,"v-vote":Object(_.a)(D,(function(){var t,e=this,n=e.$createElement;return(e._self._c||n)("div",{class:e.$style.vote},[e._ssrNode("<div><header>"+e._ssrEscape("投票（"+e._s(1===e.item.data.max_select?"单选":"最多选"+e.item.data.max_select+"个")+"）")+"</header> <ul>"+e._ssrList(e.item.data.items,(function(option,t){var n;return"<li"+e._ssrClass("oneline",((n={})[e.$style.selected]=e.checkSelected(option),n))+"><span"+e._ssrClass(null,e.$style.count)+e._ssrStyle(null,e.computeItemStyle(option,t),null)+">"+e._s(e.stat[option.id]?e.stat[option.id]+"票&nbsp;&nbsp;":"")+"</span> <span>"+e._s(t+1+". "+option.text)+"</span> <i></i></li>"}))+"</ul> <footer><span>"+e._ssrEscape("截止时间："+e._s(e.item.data.expired_at?e.$utils.timeAgo(e.item.data.expired_at):"无限期"))+"</span> <button"+e._ssrClass(null,(t={},t[e.$style.active]=e.selected.length&&!e.voted,t))+">"+e._ssrEscape("\n        "+e._s(e.submitting?"提交中":e.voted?"已投过票":"确认")+"\n      ")+"</button></footer></div>")])}),[],!1,(function(t){var e=n(140);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"ba671130").exports},props:{content:{required:!0,type:Array},reward:{type:Boolean,default:!1},vote:{type:Array,default:()=>[]},slug:{type:String,default:""}}},M=Object(_.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"json-content"},t._l(t.content,(function(e,r){return n("v-"+e.type,{key:r,tag:"component",attrs:{item:e,reward:t.reward,vote:t.vote,slug:t.slug}})})),1)}),[],!1,null,null,"2b42735f").exports,V=n(101),U=n(62),L=n(61),T=(n(143),n(42)),I=n.n(T),J=(n(47),n(30)),R=n.n(J),z={name:"CommentItem",components:{UserAvatar:U.a,UserNickname:L.a,JsonContent:M},props:{item:{type:Object,required:!0}},data:()=>({deleting:!1,loading:!1}),computed:{isMine(){return this.$store.getters.isMine(this.item.author.slug)},isAdmin(){return this.$store.getters.isAdmin}},methods:{commentClick(){this.isMine?this.$emit("create"):this.$emit("create",{comment_id:this.item.id,target:this.item.author})},clickAgree(){this.$store.state.isAuth?this.isMine?this.$toast.info("不能给自己点赞"):this.loading||(this.loading=!0,this.$axios.$post("v1/social/toggle",{target_slug:this.item.id.toString(),target_type:"comment",action_slug:this.$store.state.user.slug,method_type:"up_vote"}).then(t=>{this.loading=!1,this.$emit("agree",{id:this.item.id,count:t?this.item.like_count- -1:this.item.like_count-1,result:t})}).catch(t=>{this.$toast.error(t.message),this.loading=!1})):this.$channel.$emit("sign-in")},deleteComment(){this.deleting||this.$alert({title:"删除评论",message:"删除后不可恢复，确认要删除吗？",buttons:["取消","确定"],maskClose:!0,callback:t=>{t&&(this.deleting=!0,this.$axios.$post("v1/comment/delete",{comment_id:this.item.id}).then(()=>{this.$toast.success("删除成功"),this.$emit("delete",this.item.id)}).catch(t=>{this.$toast.error(t.message),this.deleting=!1}))}})},clickGetter(){this.$bridge.navigateTo({url:`/pages/user/show/index?slug=${this.item.getter.slug}`})}}};var K=Object(_.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"comment-item",attrs:{id:"comment-"+t.item.id}},[t._ssrNode("<aside>","</aside>",[n("UserAvatar",{attrs:{user:t.item.author}})],1),t._ssrNode(" "),t._ssrNode("<main>","</main>",[t._ssrNode("<header>","</header>",[t._ssrNode('<div class="intro">',"</div>",[n("UserNickname",{attrs:{user:t.item.author}}),t._ssrNode(' <div class="desc"><span>'+t._ssrEscape(t._s(t.$utils.timeAgo(t.item.created_at)))+"</span> "+(t.item.getter?'<span class="cc">回复</span> <span>'+t._s(t.item.getter.nickname)+"</span>":"\x3c!----\x3e")+"</div>")],2),t._ssrNode(" <span></span>")],2),t._ssrNode(" "),n("JsonContent",{attrs:{content:t.item.content},nativeOn:{click:function(e){return t.commentClick(e)}}}),t._ssrNode(" <footer>"+(t.isMine||t.isAdmin?'<div><i class="iconfont ic-trash"></i></div>':"\x3c!----\x3e")+' <div><i class="iconfont ic-good"></i> '+(t.item.like_count?"<span>"+t._ssrEscape(t._s(t.item.like_count))+"</span>":"\x3c!----\x3e")+"</div></footer>")],2)],2)}),[],!1,(function(t){var e=n(144);e.__inject__&&e.__inject__(t)}),null,"ca30297c").exports,W={name:"CommentMain",components:{VField:R.a,VDialog:I.a,VButton:c.a,CommentItem:K},props:{slug:{type:String,required:!0},sortable:{type:Boolean,default:!1}},data(){return{sort:"time_asc",replyForm:{images:[],content:"",comment_id:"",pin_slug:this.slug},replyUser:null,creating:!1,showCreateForm:!1}},computed:{query(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,count:10,mode:"jump"}},sorts:()=>[{label:"按热度排序",value:"hottest"},{label:"按时间升序",value:"time_asc"},{label:"按时间降序",value:"time_desc"}]},methods:{showForm(t={}){if(!this.$store.state.isAuth)return void this.$channel.$emit("sign-in");const e=t.comment_id||"";e!==this.replyForm.comment_id&&(this.replyForm.content="",this.replyForm.images=[]),this.replyForm.comment_id=e,this.replyUser=t.target||null,this.showCreateForm=!0},createComment(){this.replyForm.content&&!this.creating&&(this.creating=!0,this.$axios.$post("v1/comment/create",this.replyForm).then(t=>{this.replyUser?this.$refs.loader.insertAfter({id:this.replyForm.comment_id,value:t}):this.$refs.loader.append(t),this.replyForm.content="",this.replyForm.images=[],this.creating=!1,this.showCreateForm=!1}).catch(t=>{this.$toast.error(t.message),this.creating=!1,this.showCreateForm=!1}))},handleAgree({id:t,result:e,count:n}){this.$refs.loader.update({id:t,value:e,key:"up_vote_status"}),this.$refs.loader.update({id:t,value:n,key:"like_count"})},changeCommentSort(t){this.sort=t,this.$nextTick(()=>{this.$refs.loader.refresh()})},handleDelete(t){this.$refs.loader.delete(t)},handlePatch({data:data}){const{result:t}=data;t.length&&this.$axios.$get("v1/comment/patch",{params:{comment_ids:t.map(t=>t.id).join(",")}}).then(data=>{this.$refs.loader.patch(data)}).catch(()=>{})}}};var H=Object(_.a)(W,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"comment-main"},[t._ssrNode('<div class="hr"></div> '),r("FlowLoader",{ref:"loader",attrs:{func:"getPinComments",type:"page",query:t.query,callback:t.handlePatch,"use-first-loading":""},scopedSlots:t._u([{key:"header",fn:function(e){var source=e.source;return r("header",{staticClass:"comment-header"},[r("h2",{staticClass:"total",domProps:{textContent:t._s("评论 "+source.total)}}),t._v(" "),t.sortable?r("span",{staticClass:"sort",domProps:{textContent:t._s(t.sorts.find((function(e){return e.value===t.sort})).label)}}):t._e()])}},{key:"default",fn:function(e){var n=e.flow;return r("ul",{},t._l(n,(function(e){return r("CommentItem",{key:e.id,attrs:{item:e},on:{create:t.showForm,delete:t.handleDelete,agree:t.handleAgree}})})),1)}}])},[t._v(" "),t._v(" "),r("template",{slot:"nothing"},[r("img",{attrs:{src:n(141)},on:{click:function(e){return t.showForm({})}}}),t._v(" "),r("p",[t._v("还没有评论，快来抢沙发吧！")])]),t._v(" "),r("template",{slot:"first-loading"},[r("img",{attrs:{src:n(142)}})])],2),t._ssrNode(" "),r("VDialog",{attrs:{height:"auto"},model:{value:t.showCreateForm,callback:function(e){t.showCreateForm=e},expression:"showCreateForm"}},[r("VField",{attrs:{placeholder:t.replyUser?"回复："+t.replyUser.nickname:"发布评论","max-len":1500,"max-row":6,"min-row":3},model:{value:t.replyForm.content,callback:function(e){t.$set(t.replyForm,"content",e)},expression:"replyForm.content"}}),t._v(" "),r("div",{staticClass:"footer"},[r("span"),t._v(" "),r("VButton",{attrs:{size:"small"},on:{click:t.createComment}},[t._v("\n        发送\n      ")])],1)],1)],2)}),[],!1,(function(t){var e=n(145);e.__inject__&&e.__inject__(t)}),null,"5437b2e8").exports,Y=(n(146),n(43)),G=n.n(Y),Q={name:"PinRewardBtn",props:{pinSlug:{type:String,required:!0},userSlug:{type:String,required:!0}},computed:{state(){return this.$store.getters["social/get"]("pin",this.pinSlug)},isMine(){return this.$store.getters.isMine(this.userSlug)},user(){return this.$store.state.user}},methods:{reward(){if(!this.$store.state.isAuth)return void this.$channel.$emit("sign-in");if(this.isMine)return void this.$toast.info("不能给自己投食");if(this.state.reward_status)return void this.$toast.info("已经投过食了");if(!this.user.wallet_coin&&!this.user.wallet_money)return void this.$toast.info("没有足够的团子");if(this.state.reward_status_loading)return;const t=!!this.user.wallet_coin;this.$alert({title:"投食",message:t?"向TA投食需要消耗你一个团子，是否继续?":"向TA投食需要消耗你一个光玉，是否继续?",buttons:["取消","确定"],callback:async e=>{if(!e)return;const data=await this.$store.dispatch("social/toggle",{type:"pin",slug:this.pinSlug,action:"reward_status",params:{target_type:"pin",target_slug:this.pinSlug,method_type:"favorite"}});data.success?(this.$channel.$emit("pin-toggle",{type:"reward",result:data.result}),t?this.$store.commit("UPDATE_USER_INFO",{key:"wallet_coin",value:this.user.wallet_coin-1}):this.$store.commit("UPDATE_USER_INFO",{key:"wallet_money",value:this.user.wallet_money-1})):this.$toast.error("服务器休息中")}})}}},Z=Object(_.a)(Q,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"pin-reward-btn",on:{click:this.reward}},[this._t("default")],2)}),[],!1,null,null,"34b5e1f5").exports,X={name:"PinLikeBtn",props:{pinSlug:{type:String,required:!0},userSlug:{type:String,required:!0}},computed:{state(){return this.$store.getters["social/get"]("pin",this.pinSlug)},isMine(){return this.$store.getters.isMine(this.userSlug)}},methods:{async upvote(){if(!this.$store.state.isAuth)return void this.$channel.$emit("sign-in");if(this.isMine)return void this.$toast.info("不能给自己点赞");if(this.state.up_vote_status_loading)return;const data=await this.$store.dispatch("social/toggle",{type:"pin",slug:this.pinSlug,action:"up_vote_status",params:{target_type:"pin",target_slug:this.pinSlug,method_type:"up_vote"}});data.success?this.$channel.$emit("pin-toggle",{type:"like",result:data.result}):this.$toast.error("服务器休息中")}}},tt={name:"PinToolBar",components:{PinLikeBtn:Object(_.a)(X,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"pin-like-btn",on:{click:this.upvote}},[this._t("default")],2)}),[],!1,null,null,"4cf5488d").exports,PinRewardBtn:Z},props:{slug:{type:String,default:""},commentCount:{type:Number,default:0},likeCount:{type:Number,default:0},markCount:{type:Number,default:0},rewardCount:{type:Number,default:0},likeStatus:{type:Boolean,default:!1},markStatus:{type:Boolean,default:!1},rewardStatus:{type:Boolean,default:!1},authorSlug:{type:String,default:""}},methods:{handleCommentClick(){this.$emit("comment")},pageScroll(){G()(document.querySelector(".comment-main").offsetTop-40)}}};var et=Object(_.a)(tt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pin-tool-bar"},[t._ssrNode('<div class="pin-tool-shim"></div> '),t._ssrNode('<div class="pin-tool-wrap">',"</div>",[t._ssrNode('<div class="pin-tool-core">',"</div>",[t._ssrNode('<div class="comment">\n        说点什么\n      </div> <div class="tool-item"><i class="iconfont ic-talk"></i> <p>'+t._ssrEscape(t._s(t.commentCount))+"</p></div> "),n("PinRewardBtn",{staticClass:"tool-item",class:{active:t.rewardStatus},attrs:{"pin-slug":t.slug,"user-slug":t.authorSlug}},[n("i",{staticClass:"iconfont ic-reward"}),t._v(" "),n("p",{domProps:{textContent:t._s(t.rewardCount)}})]),t._ssrNode(" "),n("PinLikeBtn",{staticClass:"tool-item",class:{active:t.likeStatus},attrs:{"pin-slug":t.slug,"user-slug":t.authorSlug}},[n("i",{staticClass:"iconfont ic-good"}),t._v(" "),n("p",{domProps:{textContent:t._s(t.likeCount)}})])],2)])],2)}),[],!1,(function(t){var e=n(147);e.__inject__&&e.__inject__(t)}),null,"69b25756").exports,st=(n(148),n(44)),it=n.n(st),nt=n(102),at={name:"MovePinBangumiDrawer",components:{VButton:c.a,VDrawer:o.a,VSearch:it.a,BangumiOptionItem:nt.a},props:{value:{type:Boolean,required:!0},slug:{type:String,required:!0},bangumi:{type:String,required:!0}},data(){return{showDrawer:this.value,searchKeyword:"",flowKeyword:"",showFlowList:!1,selectedBangumi:this.bangumi,loading:!1}},watch:{showDrawer(t){this.$emit("input",t)},value(t){this.showDrawer=t}},methods:{handleSearch(){this.showFlowList=!1,this.$nextTick(()=>{this.flowKeyword=this.searchKeyword,this.showFlowList=!0})},handleSelect(t){this.selectedBangumi=t.slug},handleCancel(){this.showDrawer=!1,this.showFlowList=!1,this.searchKeyword="",this.flowKeyword=""},handleSubmit(){this.selectedBangumi&&this.selectedBangumi!==this.bangumi&&this.$alert({title:"确认要移动吗？",message:"建议不要频繁进行该操作",buttons:["取消","确认"],callback:t=>{t&&(this.loading||(this.loading=!1,this.$axios.$post("v1/pin/move",{slug:this.slug,bangumi:this.selectedBangumi}).then(()=>{this.$toast.info("移动成功"),window.location.reload()}).catch(t=>{this.$toast.error(t.message),this.loading=!1})))}})}}};var ot=Object(_.a)(at,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("VDrawer",{staticClass:"move-pin-drawer",attrs:{lock:!1,from:"right",size:"100%"},model:{value:t.showDrawer,callback:function(e){t.showDrawer=e},expression:"showDrawer"}},[n("VSearch",{staticClass:"header",attrs:{"show-border":"",placeholder:"请输入番剧名称"},on:{submit:t.handleSearch,cancel:t.handleCancel},model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}}),t._v(" "),n("div",{staticClass:"main"},[t.showFlowList?n("FlowLoader",{attrs:{func:"getMixinSearch",type:"page",query:{$axios:t.$axios,type:"bangumi",q:t.flowKeyword}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return n("div",{},t._l(r,(function(e){return n("BangumiOptionItem",{key:e.slug,attrs:{item:e,"selected-slug":t.selectedBangumi,type:"select"},on:{click:function(n){return t.handleSelect(e)}}})})),1)}}],null,!1,2973822878)}):t._e()],1),t._v(" "),n("div",{staticClass:"footer"},[n("VButton",{attrs:{loading:t.loading,block:""},on:{click:t.handleSubmit}},[t._v("\n      提交\n    ")])],1)],1)}),[],!1,(function(t){var e=n(149);e.__inject__&&e.__inject__(t)}),null,"494db196").exports,lt={name:"PinShow",components:{VAffix:h.a,VButton:c.a,VDrawer:o.a,UserFollowBtn:V.a,UserAvatar:U.a,UserNickname:L.a,JsonContent:M,CommentMain:H,PinToolBar:et,MovePinBangumiDrawer:ot},asyncData:({app:t,error:e,params:n})=>t.$axios.$get("v1/pin/show",{params:{slug:n.slug}}).then(data=>data).catch(e),data:()=>({slug:"",intro:"",title:null,author:null,bangumi:null,content:[],trial_type:0,comment_type:0,recommended_at:0,published_at:"",last_edit_at:"",visit_count:0,comment_count:0,mark_count:0,reward_count:0,like_count:0,vote_hash:[],up_vote_status:!1,down_vote_status:!1,mark_status:!1,reward_status:!1,openEditDrawer:!1,openAdminDrawer:!1,showMoveDrawer:!1}),computed:{isMine(){return this.$store.getters.isMine(this.author.slug)},isAdmin(){return this.$store.getters.isAdmin}},beforeMount(){this.patchPin(),this.patchUser(),this.watchPinToggle()},methods:{watchPinToggle(){this.$channel.$on("pin-toggle",({type:t,result:e})=>{this[`${t}_count`]+=e,"like"===t?this.up_vote_status=e>0:this[`${t}_status`]=e>0})},handleCreateComment(){this.$refs.comment.showForm()},handleBangumiClick(){this.$bridge.navigateTo({url:`/pages/bangumi/show/index?slug=${this.bangumi.slug}`})},handleUserClick(){this.$bridge.navigateTo({url:`/pages/user/show/index?slug=${this.author.slug}`})},handleEditClick(){this.$bridge.__IN_APP__?this.$bridge.navigateTo({url:`/pages/webview/index?url=${encodeURIComponent(`/write/pin?slug=${this.slug}`)}`}):this.$router.push({name:"write-pin",query:{...this.$route.query,slug:this.slug}})},handleDeletePin(){this.$alert({title:"删除文章",message:"删除后不可恢复，确认要删除吗？",buttons:["取消","确认"],maskClose:!0,callback:t=>{t&&this.$axios.$post("v1/pin/delete",{slug:this.slug}).then(()=>{this.$bridge.navigateBack()}).catch(t=>{this.$toast.error(t.message)})}})},handleRecommendPin(){const t=!this.recommended_at,e=()=>{this.$axios.$post("v1/pin/recommend",{slug:this.slug,result:t}).then(()=>{this.$toast.info(t?"推荐成功":"取消推荐成功"),this.recommended_at=t}).catch(t=>{this.$toast.error(t.message)})};t?e():this.$alert({title:"取消文章推荐",message:"确认要取消吗？",buttons:["取消","确认"],maskClose:!0,callback:t=>{t&&e()}})},handleAction(t){this.openAdminDrawer=!1,this.openEditDrawer=!1,"edit"===t?this.handleEditClick():"delete"===t?this.handleDeletePin():"recommend"===t?this.handleRecommendPin():"move"===t&&(this.showMoveDrawer=!0)},patchPin(){this.$axios.$get("v1/pin/patch",{params:{slug:this.slug}}).then(data=>{Object.keys(data).forEach(t=>{this[t]=data[t]}),this.$store.commit("social/set",{type:"pin",slug:this.slug,data:{down_vote_status:data.down_vote_status,up_vote_status:data.up_vote_status,mark_status:data.mark_status,reward_status:data.reward_status}}),this.vote_hash=data.vote_hash}).catch(()=>{})},patchUser(){this.$axios.$get("v1/user/patch",{params:{slug:this.author.slug}}).then(data=>{this.$set(this,"author",Object.assign(this.author,data)),this.$store.commit("social/set",{type:"user-follow",slug:this.author.slug,data:{is_following:data.is_following,is_followed_by:data.is_followed_by}})}).catch(()=>{})}}};var ct=Object(_.a)(lt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pin-show"}},[t._ssrNode((t.title?'<p class="title">'+t._ssrEscape(t._s(t.title.text))+"</p>":"\x3c!----\x3e")+" "),t._ssrNode('<div class="state">',"</div>",[t._ssrNode((t.bangumi?"<span>"+t._ssrEscape(t._s(t.bangumi.name))+'</span> <span class="dot"> · </span>':"\x3c!----\x3e")+" <span>"+t._ssrEscape(t._s(t.$utils.timeAgo(t.published_at)))+"</span> "+(t.visit_count?'<span class="dot"> · </span> <span>'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.visit_count)+"阅读"))+"</span>":"\x3c!----\x3e")+" "),t.isAdmin?[t._ssrNode('<span style="float:right">···</span> '),n("VDrawer",{attrs:{count:3,strict:"",cancel:"取消"},model:{value:t.openAdminDrawer,callback:function(e){t.openAdminDrawer=e},expression:"openAdminDrawer"}},[n("div",{staticClass:"drawer-item",attrs:{slot:"0"},on:{click:function(e){return t.handleAction("recommend")}},slot:"0"},[t._v("\n          "+t._s(t.recommended_at?"取消推荐":"推荐")+"\n        ")]),t._v(" "),n("div",{staticClass:"drawer-item",attrs:{slot:"1"},on:{click:function(e){return t.handleAction("move")}},slot:"1"},[t._v("\n          移动\n        ")]),t._v(" "),n("div",{staticClass:"drawer-item",attrs:{slot:"2"},on:{click:function(e){return t.handleAction("delete")}},slot:"2"},[t._v("\n          删除\n        ")])]),t._ssrNode(" "),n("MovePinBangumiDrawer",{attrs:{bangumi:t.bangumi.slug,slug:t.slug},model:{value:t.showMoveDrawer,callback:function(e){t.showMoveDrawer=e},expression:"showMoveDrawer"}})]:t._e()],2),t._ssrNode(" "),t.author?n("VAffix",{attrs:{"fixed-top":0}},[n("div",{staticClass:"author"},[n("UserAvatar",{attrs:{user:t.author},on:{click:t.handleUserClick}}),t._v(" "),n("div",{staticClass:"intro"},[n("UserNickname",{attrs:{user:t.author,"show-level":""},on:{click:t.handleUserClick}})],1),t._v(" "),t.isMine?[n("VButton",{attrs:{size:"small",theme:"warning",plain:""},on:{click:function(e){t.openEditDrawer=!0}}},[t._v("\n          编辑\n        ")]),t._v(" "),n("VDrawer",{attrs:{count:2,strict:"",cancel:"取消"},model:{value:t.openEditDrawer,callback:function(e){t.openEditDrawer=e},expression:"openEditDrawer"}},[n("div",{staticClass:"drawer-item",attrs:{slot:"0"},on:{click:function(e){return t.handleAction("edit")}},slot:"0"},[t._v("\n            编辑\n          ")]),t._v(" "),n("div",{staticClass:"drawer-item",attrs:{slot:"1"},on:{click:function(e){return t.handleAction("delete")}},slot:"1"},[t._v("\n            删除\n          ")])])]:n("UserFollowBtn",{attrs:{slug:t.author.slug}})],2)]):t._e(),t._ssrNode(" "),n("JsonContent",{attrs:{slug:t.slug,content:t.content,reward:t.reward_status,vote:t.vote_hash}}),t._ssrNode(" "),n("CommentMain",{ref:"comment",attrs:{slug:t.slug}}),t._ssrNode(" "),t.author?n("PinToolBar",{attrs:{slug:t.slug,"comment-count":t.comment_count,"like-count":t.like_count,"mark-count":t.mark_count,"reward-count":t.reward_count,"like-status":t.up_vote_status,"mark-status":t.mark_status,"author-slug":t.author.slug,"reward-status":t.reward_status},on:{comment:t.handleCreateComment}}):t._e()],2)}),[],!1,(function(t){var e=n(150);e.__inject__&&e.__inject__(t)}),null,"7be7bcdc");e.default=ct.exports}]);