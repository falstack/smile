(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{230:function(e,t,n){"use strict";n(29),n(50),n(51),n(27),n(106),n(107),n(64),n(8),n(30),n(22),n(108),n(28),n(66);var r=n(65),o=(n(23),n(5)),l=n(231);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a={data:function(){return{imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var e=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){e.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var e=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){e.getUpToken()}),18e5)},getUpToken:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.a)(e);case 2:e.imageUploadToken=t.sent;case 3:case"end":return t.stop()}}),t)})))()},imageUploadRequest:function(data){var e,t,n;return data.key=(e={slug:this.currentUser.slug,file:data.file},t=e.slug,n=e.file,"".concat(t,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())),data.token=this.imageUploadToken,data},imageUploadResponse:function(e){try{return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},e.data,{url:"".concat(this.imagePrefix).concat(e.data.url)})}catch(e){return{}}}}}},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n(50),n(8),n(22);var r=function(e){return e.$axios.$get("v1/image/uptoken")},o=function(e,t){return e.$axios.$post("https://up.qbox.me",t,{"Content-Type":"multipart/form-data"})}},236:function(e,t,n){e.exports={"bangumi-option":"bangumi-option_1VN2B",bangumiOption:"bangumi-option_1VN2B",body:"body_3llvZ",poster:"poster_3Wjvi",content:"content_1f3Yk",extra:"extra_1R6jg"}},241:function(e,t,n){"use strict";t.a={beforeMount:function(){var e=this;this.$channel.$when("user-not-sign",(function(){e.$toast.error("继续操作前请先登录").then((function(){e.$bridge.redirectTo({url:"/pages/user/login/index?from=".concat(encodeURIComponent(window.location.href))})}))}))}}},249:function(e,t,n){"use strict";var r=n(236),o=n.n(r);t.default=o.a},250:function(e,t,n){"use strict";n(228),n(49);var r=n(229),o={name:"BangumiOptionItem",components:{VRadio:n.n(r).a},props:{item:{type:Object,required:!0},type:{type:String,default:"follow"},selectedSlug:{type:String,default:""}},data:function(){return{isSelected:this.item.slug===this.selectedSlug}},watch:{selectedSlug:function(e){this.isSelected=e===this.item.slug}},methods:{handleClick:function(){this.$emit("click")}}},l=n(249),c=n(37);var component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.bangumiOption,on:{click:e.handleClick}},[n("img",{class:e.$style.poster,attrs:{src:e.$resizeImage(e.item.avatar,{width:120})}}),e._v(" "),n("div",{class:e.$style.body},[n("div",{class:e.$style.content},[n("div",{staticClass:"oneline",class:e.$style.title,domProps:{textContent:e._s(e.item.name)}})]),e._v(" "),n("div",{class:e.$style.extra},["select"===e.type?n("VRadio",{attrs:{label:"",circle:"",readonly:""},model:{value:e.isSelected,callback:function(t){e.isSelected=t},expression:"isSelected"}}):e._e()],1)])])}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.a=component.exports},278:function(e,t,n){},279:function(e,t,n){e.exports={"pin-draft":"pin-draft_3apaf",pinDraft:"pin-draft_3apaf",poster:"poster_3ME69","default-poster":"default-poster_2JmY1",defaultPoster:"default-poster_2JmY1",body:"body_uaEmQ",title:"title_y3UjG"}},280:function(e,t,n){},323:function(e,t,n){},324:function(e,t,n){},325:function(e,t,n){},326:function(e,t,n){},327:function(e,t,n){"use strict";"undefined"!=typeof window&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(s){var e=this;if(!document.documentElement.contains(e))return null;do{if(e.matches(s))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}))},328:function(e,t,n){},329:function(e,t,n){},330:function(e){e.exports=JSON.parse('{"name":"smile","version":"1.0.0","description":"My breathtaking Nuxt.js project","author":"falstack","private":true,"scripts":{"lint":"eslint --fix --ext .js,.vue --ignore-path .gitignore .","precommit":"yarn lint","dev":"cross-env NODE_ENV=development nodemon server/index.js --watch server","build":"nuxt build","start":"cross-env NODE_ENV=production node server/index.js","analyze":"nuxt build --analyze","generate":"nuxt generate"},"dependencies":{"@calibur/sakura":"^2.5.0","@codexteam/ajax":"^4.1.0","@editorjs/checklist":"^1.1.0","@editorjs/delimiter":"^1.1.0","@editorjs/editorjs":"2.16.1","@editorjs/embed":"^2.2.1","@editorjs/header":"^2.4.0","@editorjs/image":"^2.3.3","@editorjs/link":"^2.1.3","@editorjs/list":"^1.4.0","@nuxtjs/axios":"5.9.7","cross-env":"7.0.2","koa":"^2.11.0","nuxt":"2.12.2","qs":"^6.9.3","url-polyfill":"^1.1.8","v-copy":"^0.1.0","vue-mixin-store":"^1.3.6"},"devDependencies":{"@nuxtjs/eslint-config":"2.0.2","@nuxtjs/eslint-module":"1.1.0","@nuxtjs/style-resources":"^1.0.0","babel-eslint":"10.1.0","babel-plugin-component":"^1.1.1","core-js":"^3.6.4","eslint":"6.8.0","eslint-config-standard":"14.1.1","eslint-plugin-import":"2.20.2","eslint-plugin-jest":"23.8.2","eslint-plugin-node":"11.1.0","eslint-plugin-nuxt":"0.5.2","eslint-plugin-promise":"4.2.1","eslint-plugin-standard":"4.0.1","eslint-plugin-vue":"6.2.2","node-sass":"^4.13.1","nodemon":"2.0.3","postcss-px-to-viewport":"^1.1.1","qiniu-qupload":"^1.0.6","sass-loader":"^8.0.2"}}')},331:function(e,t,n){"use strict";var r=n(278);n.n(r).a},332:function(e,t,n){"use strict";var r=n(279),o=n.n(r);t.default=o.a},333:function(e,t,n){"use strict";var r=n(280);n.n(r).a},379:function(e,t,n){"use strict";n.r(t);n(29),n(50),n(51),n(276),n(27),n(106),n(107),n(64),n(28),n(23);var r=n(5),o=n(65),l=(n(232),n(49),n(233)),c=n.n(l),d=(n(251),n(252)),h=n.n(d),m=(n(224),n(225)),f=n.n(m),v=(n(226),n(227)),_=n.n(v),y=n(320),k=n.n(y),w=(n(38),n(8),n(30),n(31),n(53),n(32),n(60)),x=n(230),S=n(231),C=(n(242),n(26)),E=n(234),$=n(235),L=(n(323),function(){function e(t){var data=t.data,n=t.config,r=t.api;Object(E.a)(this,e),this.api=r,this._CSS={block:this.api.styles.block,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"ce-header"},this._settings=n,this._data=this.normalizeData(data),this.settingsButtons=[],this._element=this.getTag()}return Object($.a)(e,[{key:"normalizeData",value:function(data){var e={};return"object"!==Object(C.a)(data)&&(data={}),e.text=data.text||"",e.level=parseInt(data.level)||this.defaultLevel.number,e}},{key:"render",value:function(){return this._element}},{key:"renderSettings",value:function(){var e=this,t=document.createElement("DIV");return this.levels.forEach((function(n){var r=document.createElement("SPAN");r.classList.add(e._CSS.settingsButton),e.currentLevel.number===n.number&&r.classList.add(e._CSS.settingsButtonActive),r.innerHTML=n.svg,r.dataset.level=n.number,r.addEventListener("click",(function(){e.setLevel(n.number)})),t.appendChild(r),e.settingsButtons.push(r)})),t}},{key:"setLevel",value:function(e){var t=this;this.data={level:e,text:this.data.text},this.settingsButtons.forEach((function(button){button.classList.toggle(t._CSS.settingsButtonActive,parseInt(button.dataset.level)===e)}))}},{key:"merge",value:function(data){var e={text:this.data.text+data.text,level:this.data.level};this.data=e}},{key:"validate",value:function(e){return""!==e.text.trim()}},{key:"save",value:function(e){return{text:e.innerHTML,level:this.currentLevel.number}}},{key:"getTag",value:function(){var e=document.createElement(this.currentLevel.tag);return e.innerHTML=this._data.text||"",e.classList.add(this._CSS.wrapper),e.contentEditable="true",e.dataset.placeholder=this._settings.placeholder||"",e}},{key:"onPaste",value:function(e){var content=e.detail.data,t=2;switch(content.tagName){case"H1":t=1;break;case"H3":t=3;break;case"H4":t=4;break;case"H5":t=5;break;case"H6":t=6}this.data={level:t,text:content.innerHTML}}},{key:"data",get:function(){return this._data.text=this._element.innerHTML,this._data.level=this.currentLevel.number,this._data},set:function(data){if(this._data=this.normalizeData(data),void 0!==data.level&&this._element.parentNode){var e=this.getTag();e.innerHTML=this._element.innerHTML,this._element.parentNode.replaceChild(e,this._element),this._element=e}void 0!==data.text&&(this._element.innerHTML=this._data.text||"")}},{key:"currentLevel",get:function(){var e=this,t=this.levels.find((function(t){return t.number===e._data.level}));return t||(t=this.defaultLevel),t}},{key:"defaultLevel",get:function(){return{number:2,tag:"H2"}}},{key:"levels",get:function(){return[]}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{level:{}}}},{key:"pasteConfig",get:function(){return{tags:["H1","H2","H3","H4","H5","H6"]}}},{key:"toolbox",get:function(){return{icon:'<svg width="11" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/></svg>',title:"标题"}}}]),e}()),j=(n(24),n(22),n(324),function(){function e(t){var data=t.data;Object(E.a)(this,e),this.data=data}return Object($.a)(e,[{key:"render",value:function(){var e=document.createElement("div");e.classList.add("baidu-resource");var t=document.createElement("div");t.classList.add("baidu-resource-wrap"),e.appendChild(t);var n=document.createElement("input");n.classList.add("baidu-resource-url"),n.placeholder="仅支持百度云盘：pan.baidu.com",n.type="text",n.value=this.data&&this.data.url?this.data.url:"",t.appendChild(n);var r=document.createElement("input");r.classList.add("baidu-resource-password"),r.placeholder="填写资源的密码（4~6位）",r.type="text",r.value=this.data&&this.data.password?this.data.password:"",t.appendChild(r);var o=document.createElement("div");o.classList.add("baidu-resource-role-wrap");var l="".concat(Math.random().toString(36).substring(3,6)),c=this.data&&this.data.visit_type?this.data.visit_type:0,d=document.createElement("span");d.textContent="是否需要投食才能看到密码：",o.appendChild(d);var h=document.createElement("input");h.classList.add("baidu-resource-role-public"),h.id="baidu-resource-role-public-".concat(l),h.name=l,h.type="radio",h.value=0,h.checked=0===c,o.appendChild(h);var m=document.createElement("label");m.setAttribute("for","baidu-resource-role-public-".concat(l)),m.textContent="否",m.classList.add("baidu-resource-label"),o.appendChild(m);var f=document.createElement("input");f.classList.add("baidu-resource-role-private"),f.id="baidu-resource-role-private-".concat(l),f.type="radio",f.name=l,f.value=1,f.checked=1===c,o.appendChild(f);var v=document.createElement("label");return v.setAttribute("for","baidu-resource-role-private-".concat(l)),v.textContent="是",v.classList.add("baidu-resource-label"),o.appendChild(v),t.appendChild(o),e}},{key:"save",value:function(e){var t=e.querySelector(".baidu-resource-url"),n=e.querySelector(".baidu-resource-password"),r=e.querySelector(".baidu-resource-role-public"),o=t.value.trim();return/^https?:\/\//.test(o)||(o="https://"+o),{url:o,password:n.value.trim(),visit_type:r.checked?0:1}}},{key:"validate",value:function(e){return!(!e.url||!e.password)&&!(!/https?:\/\/pan\.baidu\.com\/s\/([\w\W]+)/.test(e.url)||!/^[\w|\W]{4,6}$/.test(e.password))}}],[{key:"toolbox",get:function(){return{title:"百度云",icon:'<svg version="1" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 298 298" preserveAspectRatio="xMidYMid meet"><g stroke="none"><path d="M135.2 75.6c-11 2.9-20.1 9.5-26.5 19.1-5.1 7.6-7.4 14.6-8.4 24.5-.6 7.4.2 6.7-9.8 8.4-15.2 2.6-30.5 16.1-35.6 31.2-1.8 5.4-2 8.1-1.7 17.5.4 10.6.6 11.6 4.2 18.6 6.5 12.8 17.1 20.9 31.9 24.8 12.1 3.1 26.8.2 37.9-7.5 2.4-1.6 12.2-11.9 21.8-22.8 32.9-37.3 35.7-39.7 46.5-39.7 12.9.1 21.4 8.4 24 23.6.3 2.2 1.1 4.9 1.6 6.1 2.3 5.1 11.4 7.3 16.4 4 12.6-8.3-.4-41.6-19.8-50.8-5.8-2.7-16.1-5.6-20.1-5.6-2.4 0-2.6-.3-2.6-4.4 0-21.7-15.1-41.8-35.4-47.2-6.5-1.7-17.6-1.7-24.4.2zm19.4 21.9c5.7 1.7 12.8 8 15.2 13.5 1.9 4.5 1.8 14.5-.2 19.1-3.7 8.7-12.1 13.9-22.4 13.9-6.2 0-7.5-.4-11.8-3.3-7.4-4.9-10.7-10.4-11.2-18.3-.6-8.7 1.5-14.1 7.8-19.7 7.3-6.6 13.4-8 22.6-5.2zm-44.7 54.4c5 2.6 10.7 9.1 12 13.8 4.6 16.4-5.9 31.5-21.8 31.5-13.6.1-24.1-10-24.1-23.2 0-9.3 5.7-18.6 13.5-22.1 5.5-2.5 15.4-2.5 20.4 0zM225 200.7c-3.9 2.7-4.9 4.5-5 9 0 3.3.6 5 2.9 7.5 2.6 2.9 3.5 3.3 8.1 3.3s5.5-.4 8.1-3.3c6.4-7.2 2.1-18.2-7.3-18.2-2.5 0-5.4.7-6.8 1.7z"/></g></svg>'}}}]),e}()),D=(n(325),function(){function e(t){var data=t.data,n=(t.config,t.api);Object(E.a)(this,e),this.api=n,this._CSS={block:this.api.styles.block,wrapper:"ce-delimiter"},this._data={},this._element=this.drawView(),this.data=data}return Object($.a)(e,null,[{key:"contentless",get:function(){return!0}}]),Object($.a)(e,[{key:"drawView",value:function(){var div=document.createElement("DIV");return div.classList.add(this._CSS.wrapper,this._CSS.block),div}},{key:"render",value:function(){return this._element}},{key:"save",value:function(e){return{}}}],[{key:"toolbox",get:function(){return{icon:'<svg width="19" height="4" viewBox="0 0 19 4" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 0H7a1.25 1.25 0 1 1 0 2.5H1.25a1.25 1.25 0 1 1 0-2.5zM11 0h5.75a1.25 1.25 0 0 1 0 2.5H11A1.25 1.25 0 0 1 11 0z"/></svg>',title:"分割线"}}}]),e}()),O=(n(111),n(164),n(237)),B=(n(326),n(327),function(){function e(t){var data=t.data,n=(t.config,t.api);Object(E.a)(this,e),this._elements={wrapper:null,items:[]},this._data={items:[]},this.api=n,this.data=data}return Object($.a)(e,null,[{key:"enableLineBreaks",get:function(){return!0}},{key:"toolbox",get:function(){return{icon:'<svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm0-2.394a5.106 5.106 0 1 0 0-10.212 5.106 5.106 0 0 0 0 10.212zm-.675-4.665l2.708-2.708 1.392 1.392-2.708 2.708-1.392 1.391-2.971-2.971L5.245 6.36l1.58 1.58z"/></svg>',title:"进度表"}}}]),Object($.a)(e,[{key:"render",value:function(){var e=this;if(this._elements.wrapper=this._make("div",[this.CSS.baseBlock,this.CSS.wrapper]),this._data.items.length)this._data.items.forEach((function(t){var n=e.createChecklistItem(t);e._elements.items.push(n),e._elements.wrapper.appendChild(n)}));else{var t=this.createChecklistItem();this._elements.items.push(t),this._elements.wrapper.appendChild(t)}return this._elements.wrapper.addEventListener("keydown",(function(t){switch(t.keyCode){case 13:e.appendNewElement(t);break;case 8:e.backspace(t)}}),!1),this._elements.wrapper.addEventListener("click",(function(t){e.toggleCheckbox(t)})),this._elements.wrapper}},{key:"validate",value:function(e){return!!e.items.length}},{key:"toggleCheckbox",value:function(e){var t=e.target.closest(".".concat(this.CSS.item));t.querySelector(".".concat(this.CSS.checkbox)).contains(e.target)&&t.classList.toggle(this.CSS.itemChecked)}},{key:"createChecklistItem",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._make("div",this.CSS.item),n=this._make("span",this.CSS.checkbox),r=this._make("div",this.CSS.textField,{innerHTML:e.text?e.text:"",contentEditable:!0});return e.checked&&t.classList.add(this.CSS.itemChecked),t.appendChild(n),t.appendChild(r),t}},{key:"appendNewElement",value:function(e){e.preventDefault();var t=window.getSelection().anchorNode,n=this._elements.items[this._elements.items.length-1].querySelector(".".concat(this.CSS.textField)),r=n.innerHTML.replace("<br>"," ").trim();if(t===n&&!r)return this.api.blocks.insertNewBlock(),void e.stopPropagation();var o=this.createChecklistItem(),l=t.parentNode.closest(".".concat(this.CSS.item));this._elements.wrapper.insertBefore(o,l.nextSibling);var c=this._elements.items.indexOf(l)+1;this._elements.items.splice(c,0,o),this.moveCaretToEnd(o.querySelector(".".concat(this.CSS.textField)))}},{key:"backspace",value:function(e){var t=e.target.closest(".".concat(this.CSS.item)),n=this._elements.items.indexOf(t),r=t.querySelector(".".concat(this.CSS.textField)).innerHTML.replace("<br>"," ").trim();this._elements.items[0].querySelector(".".concat(this.CSS.textField)).innerHTML.replace("<br>"," ").trim()&&n&&!r&&(e.preventDefault(),t.remove(),this._elements.items.splice(n,1),"undefined"!==this._elements.items[n-1]&&this.moveCaretToEnd(this._elements.items[n-1].querySelector(".".concat(this.CSS.textField))))}},{key:"save",value:function(){return this.data}},{key:"_make",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);Array.isArray(n)?(t=o.classList).add.apply(t,Object(O.a)(n)):n&&o.classList.add(n);for(var l in r)o[l]=r[l];return o}},{key:"moveCaretToEnd",value:function(element){var e=document.createRange(),t=window.getSelection();e.selectNodeContents(element),e.collapse(!1),t.removeAllRanges(),t.addRange(e)}},{key:"CSS",get:function(){return{baseBlock:this.api.styles.block,wrapper:"cdx-checklist",item:"cdx-checklist__item",itemChecked:"cdx-checklist__item--checked",checkbox:"cdx-checklist__item-checkbox",textField:"cdx-checklist__item-text"}}},{key:"data",set:function(e){this._data.items=e.items||[];var t=this._elements.wrapper;t&&t.parentNode.replaceChild(this.render(),t)},get:function(){this._data.items=[];for(var i=0;i<this._elements.items.length;i++){var e=this._elements.items[i].querySelector(".".concat(this.CSS.textField)).innerHTML.replace("<br>"," ").trim();e&&this._data.items.push({text:e,checked:this._elements.items[i].classList.contains(this.CSS.itemChecked)})}return this._data}}]),e}()),T=(n(328),function(){function e(t){var data=t.data,n=t.config,r=t.api;Object(E.a)(this,e),this.api=r,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.onKeyUp=this.onKeyUp.bind(this),this._placeholder=n.placeholder?n.placeholder:e.DEFAULT_PLACEHOLDER,this._data={},this._element=this.drawView(),/^<input /gi.test(data.text)&&(data={}),this.data=data}return Object($.a)(e,null,[{key:"DEFAULT_PLACEHOLDER",get:function(){return""}}]),Object($.a)(e,[{key:"onKeyUp",value:function(e){"Backspace"!==e.code&&"Delete"!==e.code||""===this._element.textContent&&(this._element.innerHTML="")}},{key:"drawView",value:function(){var div=document.createElement("DIV");return div.classList.add(this._CSS.wrapper,this._CSS.block),div.contentEditable=!0,div.dataset.placeholder=this._placeholder,div.addEventListener("keyup",this.onKeyUp),div}},{key:"render",value:function(){return this._element}},{key:"merge",value:function(data){this.data={text:this.data.text+data.text}}},{key:"validate",value:function(e){return!(""===e.text.trim()||/vanced issues found/.test(e.text))}},{key:"save",value:function(e){return{text:e.innerHTML}}},{key:"onPaste",value:function(e){this.data={text:e.detail.data.innerHTML}}},{key:"data",get:function(){return this._data.text=this._element.innerHTML,this._data},set:function(data){this._data=data||{},this._element.innerHTML=this._data.text||""}}],[{key:"conversionConfig",get:function(){return{export:"text",import:"text"}}},{key:"sanitize",get:function(){return{text:{br:!0}}}},{key:"pasteConfig",get:function(){return{tags:["P"]}}}]),e}()),P=(n(108),n(329),function(){function e(t){var data=t.data,n=t.api;Object(E.a)(this,e),this.data=data,this.api=n,this.i=0}return Object($.a)(e,[{key:"render",value:function(){var e=this;if(!(document.querySelectorAll(".vote-wrap").length>0)){var t=document.createElement("div");t.classList.add("vote-wrap");var n=document.createElement("p");n.textContent="投票（文章发表后无法再修改）";var r=document.createElement("ul"),o=document.createElement("div");o.classList.add("vote-append","bili-font","ic_add");var l=function(text){var n=document.createElement("li"),label=document.createElement("span");label.textContent="".concat(++e.i,". ");var input=document.createElement("input");if(input.type="text",input.placeholder="请输入选项（20字以内）",text&&(input.value=("string"==typeof text?text:text.text)||""),input.maxLength=20,input.classList.add("vote-answer"),n.classList.add("vote-wrap-item"),n.appendChild(label),n.appendChild(input),e.i>2){var l=document.createElement("div");l.classList.add("bili-font","ic_input_close"),l.addEventListener("click",(function(){r.removeChild(n),e.i--,e.i<100&&(o.style.display="block");var l=t.querySelector(".vote-wrap-select-count");l&&(l.max=e.i,l.value-e.i>0&&(l.value=e.i))})),n.appendChild(l)}r.appendChild(n),input.focus()};o.addEventListener("click",(function(){l(),e.i>=100&&(o.style.display="none");var n=t.querySelector(".vote-wrap-select-count");n&&(n.max=e.i)}));t.appendChild(n),t.appendChild(r);var c=document.createElement("div");return c.classList.add("append-btn-wrap"),c.appendChild(o),t.appendChild(c),this.data&&this.data.items?this.data.items.forEach(l):(l(),l()),function(){var footer=document.createElement("footer"),n=document.createElement("span");n.textContent="可选个数";var r=document.createElement("input");r.type="number",r.classList.add("vote-wrap-select-count"),r.min=1,e.data&&e.data.max_select?r.value=e.data.max_select:r.value=1,r.max=e.i;var o=document.createElement("div");o.classList.add("footer-item-wrap"),o.appendChild(n),o.appendChild(r),footer.appendChild(o);var l=document.createElement("span");l.textContent="截止时间（可选）";var c=document.createElement("input");c.type="date",c.min=new Date(Date.now()+864e5).toISOString().split("T")[0],c.classList.add("vote-expire-input"),e.data&&e.data.expired_at&&(c.value=new Date(1e3*e.data.expired_at).toISOString().split("T")[0]);var d=document.createElement("div");d.classList.add("footer-item-wrap"),d.appendChild(l),d.appendChild(c),footer.appendChild(d),t.appendChild(footer)}(),t}this.api.notifier.show({message:"一篇文章只能包含一个投票",style:"error"})}},{key:"save",value:function(e){var t=e.querySelectorAll(".vote-answer"),n=[];[].forEach.call(t,(function(e){n.push(e.value)}));var r=e.querySelector(".vote-expire-input");return{items:n.map((function(e){return e.trim()})).filter((function(e){return e})),right_ids:[],max_select:+e.querySelector(".vote-wrap-select-count").value,expired_at:r&&r.value?parseInt(new Date(r.value).getTime()/1e3):0}}},{key:"validate",value:function(e){return e.items.length>1}}],[{key:"toolbox",get:function(){return{title:"投票",icon:'<svg version="1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 300 298" preserveAspectRatio="xMidYMid meet"><g stroke="none"><path d="M109.5 62.4l-2.5 2.5v140.2l2.5 2.4c2.3 2.4 3 2.5 14.7 2.5 6.8 0 13.3-.3 14.6-.6 5.2-1.4 5.2-.8 5.2-75.1 0-66.3-.1-68.9-2-71.3-1.8-2.4-2.3-2.5-15.9-2.8-13.9-.3-14.1-.3-16.6 2.2zM50.2 100l-2.2 2.1v103.8l2.6 2c2.4 1.9 4 2.1 15 2.1 13.8 0 16.8-.9 18.4-5.3 1.4-4.2 1.4-97.3-.1-101.6-.6-1.7-1.9-3.6-2.9-4.1-1-.6-7.9-1-15.2-1-12.1 0-13.6.2-15.6 2zM230.4 109.4c-1.7.8-3.4 2.1-3.8 3.1-.3.9-.6 22.1-.6 47.1v45.5l2.5 2.4c2.3 2.4 3 2.5 14.9 2.5 14 0 17-.9 18.6-5.3 1.5-4.3 1.4-86.3-.1-90.7-.8-2.2-2.2-3.7-4.5-4.6-4.4-1.8-22.7-1.8-27 0zM170.3 158.2c-1.2.6-2.7 2.4-3.2 4.1-1.4 3.9-1.4 38.5-.1 42.4 1.6 4.4 4.6 5.3 18.6 5.3 11.9 0 12.6-.1 14.9-2.5 2.5-2.4 2.5-2.4 2.5-24s0-21.6-2.5-24c-2.3-2.4-2.9-2.5-15.2-2.4-7 0-13.8.5-15 1.1zM49.2 223.2c-1.9 1.9-1.5 6.6.7 7.8 1.3.7 36 1 105.3 1 84.4 0 103.8-.2 105.2-1.3 2.2-1.6 2.5-6.5.5-7.8-2.3-1.4-210.3-1.1-211.7.3z"/></g></svg>'}}}]),e}()),U=n(330),M={name:"JsonEditor",mixins:[x.a],props:{value:{required:!0,type:Array},slug:{type:String,default:""}},data:function(){return{editor:null}},mounted:function(){this.initEditor()},methods:{initEditor:function(){var e=this;Promise.all([n.e(41).then(n.t.bind(null,376,7)),n.e(39).then(n.bind(null,401)),Promise.all([n.e(38),n.e(40)]).then(n.bind(null,377))]).then((function(t){var data,n=e;n.slug?data={blocks:n.value,time:Date.now(),version:n.$cache.get("editor_version",U.dependencies["@editorjs/editorjs"].replace("^",""))}:(data=n.$cache.get("editor_local_draft"))&&n.$emit("input",data.blocks);var r=t.map((function(e){return e.default})),o=Object(w.a)(r,3),l=o[0],c=o[1],d=o[2],h=new l({data:n.decodeData(data||{}),holder:"codex-editor",placeholder:"请输入正文（建议在15000字以内）",autofocus:!1,tools:{header:{class:L,inlineToolbar:!0},image:{class:c,types:"image/jpeg, image/png, image/jpg",config:{uploader:{uploadByFile:function(e){return new Promise((function(t,r){var o=new FormData;o.append("file",e),o.append("token",n.imageUploadToken),Object(S.b)(n,o).then((function(data){data.url="https://m1.calibur.tv/".concat(data.url),t({success:1,file:data})})).catch(r)}))}}}},link:{class:d,config:{endpoint:"".concat("https://api.calibur.tv/","v1/pin/editor/fetch_site")}},delimiter:{class:D},checklist:{class:B,inlineToolbar:!0},baidu:{class:j},paragraph:{class:T},vote:{class:P}},onChange:function(){n.handleSave()}});h.isReady.then((function(){e.editor=h,e.bindSaveEvent(),e.handleSave()})).catch((function(t){e.$toast.error("编辑器初始化失败：".concat(t))}))}))},bindSaveEvent:function(){var e=this;document.addEventListener("keydown",(function(t){83===t.keyCode&&(t.ctrlKey||t.metaKey)&&(t.stopPropagation(),t.preventDefault(),e.handleSave())}),!1)},handleSave:function(){var e=this;this.editor&&this.editor.save().then((function(t){var n=e.encodeData(t);e.slug||(e.$cache.set("editor_local_draft",n),e.$cache.set("editor_version",n.version)),e.value&&e.$emit("input",n.blocks),e.$emit("save")})).catch((function(){e.$toast.error("保存失败")}))},decodeData:function(e){var t=e.version,n=e.blocks,time=e.time;return n?{version:t,blocks:n,time:time}:null},encodeData:function(e){return{version:e.version,blocks:e.blocks,time:e.time}}}},H=(n(331),n(37)),V=Object(H.a)(M,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"editor-wrap"},[t("div",{staticClass:"mousetrap",attrs:{id:"codex-editor"}})])}],!1,null,null,null).exports,A=n(241),I={name:"PinDraftItem",props:{item:{type:Object,required:!0}},computed:{noPoster:function(){return!this.item.title.banner}},methods:{handleClick:function(){this.$emit("click")}}},z=n(332);var N=Object(H.a)(I,(function(){var e,t=this,n=t.$createElement,r=t._self._c||n;return r("div",{class:t.$style.pinDraft,on:{click:t.handleClick}},[r("img",{class:[t.$style.poster,(e={},e[t.$style.defaultPoster]=t.noPoster,e)],attrs:{src:t.$resizeImage(t.noPoster?"default-poster":t.item.title.banner.url,{width:200,height:150})}}),t._v(" "),r("div",{class:t.$style.body},[r("div",{staticClass:"oneline",class:t.$style.title,domProps:{textContent:t._s(t.item.title.text)}}),t._v(" "),r("p",{class:t.$style.time,domProps:{textContent:t._s(t.$utils.timeAgo(t.item.last_edit_at))}})])])}),[],!1,(function(e){this.$style=z.default.locals||z.default}),null,null).exports,F=n(250);function R(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function J(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var K={name:"WritePin",components:{VField:_.a,VButton:f.a,Editor:V,VDrawer:h.a,VUploader:c.a,PinDraftItem:N,BangumiOptionItem:F.a},mixins:[A.a,x.a],asyncData:function(e){var t=e.app,n=e.error,r=e.query.slug;if(r)return t.$axios.$get("v1/pin/update/content",{params:{slug:r}}).then((function(data){return J({},data)})).catch(n)},data:function(){return{slug:"",title:{banner:null,text:""},content:[],bangumi_slug:"",last_edit_at:"",published_at:"",selectedBangumi:null,loading:!1,renderEditor:!0,toggleDraftDrawer:!1,toggleBangumiDrawer:!1}},computed:{draftSource:function(){return this.$store.getters["flow/getFlow"]({func:"getUserDrafts",type:"page"})||{}},bangumiSource:function(){return this.$store.getters["flow/getFlow"]({func:"getUserBangumi",type:"page",query:{slug:this.currentUser.slug,from:"create"}})||{}}},mounted:function(){this.initCache(),this.initUserDraft(),this.initUserBangumi()},methods:{initCache:function(){this.slug||(this.$cache.has("editor_local_draft_title")&&(this.title=this.$cache.get("editor_local_draft_title"),this.title.banner=this.title.banner&&this.title.banner.url?this.title.banner:null,this.title.banner&&this.$refs.uploader&&this.$refs.uploader.set(this.title.banner)),this.$cache.has("editor_local_draft_bangumi")&&(this.selectedBangumi=this.$cache.get("editor_local_draft_bangumi"),this.selectedBangumi&&(this.bangumi_slug=this.selectedBangumi.slug)))},handleDeleteBanner:function(){this.title.banner=null,this.$refs.uploader&&this.$refs.uploader.set(this.title.banner),this.saveTitle()},initUserDraft:function(){this.$refs.draftLoader&&this.$refs.draftLoader.initData()},initUserBangumi:function(){var e=this;this.$channel.$when("user-signed",Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$refs.areaLoader){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$refs.areaLoader.initData();case 4:e.bangumi_slug?e.selectedBangumi=e.bangumiSource.result.find((function(t){return t.slug===e.bangumi_slug})):e.selectedBangumi=e.bangumiSource.result[0],e.bangumi_slug=e.selectedBangumi.slug;case 6:case"end":return t.stop()}}),t)}))))},onEditorSave:function(){this.saveTitle(),this.saveBangumi()},saveTitle:function(){this.slug||this.$cache.set("editor_local_draft_title",this.title)},preValidate:function(){return!!this.loading||(this.title.text?this.content.length?(this.loading=!0,!1):(this.$toast.info("内容不能为空"),!0):(this.$toast.info("标题不能为空"),!0))},actionCreate:function(e){var t=this;this.preValidate()||this.$axios.$post("v1/pin/create/story",{bangumi_slug:this.bangumi_slug,content:[{type:"title",data:this.title}].concat(this.content),publish:e}).then((function(n){t.removeCache(),e?t.$bridge.__IN_APP__?t.$bridge.redirectTo({url:"/pages/pin/show/index?slug=".concat(n)}):window.location="/pin/".concat(n):t.switchDraft(n),t.loading=!1})).catch((function(e){t.$toast.error(e.message),t.loading=!1}))},actionUpdate:function(e){var t=this;this.preValidate()||this.$axios.$post("v1/pin/update/story",{slug:this.slug,bangumi_slug:this.bangumi_slug,content:[{type:"title",data:this.title}].concat(this.content),publish:e}).then((function(n){e&&(t.$bridge.__IN_APP__?t.$bridge.redirectTo({url:"/pages/pin/show/index?slug=".concat(n)}):window.location="/pin/".concat(n)),t.loading=!1})).catch((function(e){t.$toast.error(e.message),t.loading=!1}))},removeCache:function(){this.$cache.del("editor_local_draft_title"),this.$cache.del("editor_local_draft_bangumi"),this.$cache.del("editor_local_draft")},clearPageData:function(){var e=this;this.renderEditor=!1,this.slug="",this.title={banner:null,text:""},this.bangumi_slug="",this.last_edit_at="",this.published_at="",this.content=[],this.toggleDraftDrawer=!1,this.selectedBangumi=this.bangumiSource.result[0],this.$nextTick((function(){e.renderEditor=!0}))},updatePageData:function(data){var e=this;this.renderEditor=!1,this.slug=data.slug,this.title=data.title,this.last_edit_at=data.last_edit_at,this.published_at=data.published_at,this.bangumi_slug=data.bangumi_slug,this.content=data.content,this.toggleDraftDrawer=!1,this.bangumi_slug?this.selectedBangumi=this.bangumiSource.find((function(t){return t.slug===e.bangumi_slug})):this.selectedBangumi=this.bangumiSource.result[0],this.$nextTick((function(){e.renderEditor=!0}))},switchBangumi:function(e){this.toggleBangumiDrawer=!1,this.selectedBangumi=e,this.bangumi_slug=e.slug,this.saveBangumi()},saveBangumi:function(){this.$cache.set("editor_local_draft_bangumi",this.selectedBangumi)},switchDraft:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.slug)if(this.published_at){if(!n)return void this.$alert({title:"未对本次更改做保存",message:"切换后会丢失更新的内容，确认吗？",buttons:["取消","确认"],callback:function(n){n&&t.switchDraft(e,!0)}})}else this.preValidate()&&this.actionUpdate(!1);e?window.location.href=window.location.pathname+"?"+k.a.stringify(J({},this.$route.query,{slug:e})):this.clearPageData()}},head:function(){return{title:"投稿"}}},Y=(n(333),Object(H.a)(K,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"write-pin"}},[n("VUploader",{ref:"uploader",attrs:{cookie:!1,url:e.imageUploadAction,accept:e.imageUploadAccept,"transform-request":e.imageUploadRequest,"transform-response":e.imageUploadResponse},on:{change:e.saveTitle},scopedSlots:e._u([{key:"list",fn:function(t){var r=t.list;return[r.length?n("img",{staticClass:"banner",attrs:{src:e.$resizeImage(r[0].url,{width:400,height:244})}}):e._e(),e._v(" "),r.length?n("div",{staticClass:"delete",on:{click:e.handleDeleteBanner}},[e._v("\n        删除封面\n      ")]):e._e()]}}]),model:{value:e.title.banner,callback:function(t){e.$set(e.title,"banner",t)},expression:"title.banner"}},[e._v(" "),n("template",{slot:"action"},[n("div",[e._v("请添加封面图（选填）")]),e._v(" "),n("p",[e._v("支持8MB内的JPG／JPEG／PNG格式的高清图片")]),e._v(" "),n("p",[e._v("（建议大于960*540像素）")])])],2),e._v(" "),n("div",{staticClass:"title-wrap"},[n("VField",{attrs:{"min-row":1,"max-row":2,"max-len":40,counter:"",placeholder:"标题（建议30字以内）"},model:{value:e.title.text,callback:function(t){e.$set(e.title,"text",t)},expression:"title.text"}})],1),e._v(" "),e.renderEditor?n("Editor",{attrs:{slug:e.slug},on:{save:e.onEditorSave},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}}):e._e(),e._v(" "),e.selectedBangumi?n("div",{staticClass:"info-wrap"},[n("p",{staticClass:"info-title"},[e._v("\n      请选择投稿分区\n    ")]),e._v(" "),n("VButton",{attrs:{plain:""},domProps:{textContent:e._s(e.selectedBangumi.name)},on:{click:function(t){e.toggleBangumiDrawer=!0}}})],1):e._e(),e._v(" "),n("div",{staticClass:"footer-wrap"},[n("div",{staticClass:"footer"},[e.published_at?[n("VButton",{attrs:{loading:e.loading},on:{click:function(t){return e.actionUpdate(!0)}}},[e._v("\n          更新文章\n        ")])]:[n("VButton",{attrs:{loading:e.loading},on:{click:function(t){return e.actionCreate(!0)}}},[e._v("\n          发布文章\n        ")]),e._v(" "),e.slug?n("VButton",{attrs:{loading:e.loading,theme:"info",plain:""},on:{click:function(t){return e.actionUpdate(!1)}}},[e._v("\n          存草稿\n        ")]):n("VButton",{attrs:{loading:e.loading,theme:"info",plain:""},on:{click:function(t){return e.actionCreate(!1)}}},[e._v("\n          存草稿\n        ")])],e._v(" "),e.draftSource.total?n("VButton",{attrs:{plain:""},on:{click:function(t){e.toggleDraftDrawer=!0}}},[e._v("\n        草稿箱("+e._s(e.draftSource.total)+")\n      ")]):e._e()],2)]),e._v(" "),n("div",{staticClass:"preload-wrap"},[n("FlowLoader",{ref:"draftLoader",attrs:{func:"getUserDrafts",type:"page",auto:0,query:{$axios:e.$axios}}}),e._v(" "),e.isAuth?n("FlowLoader",{ref:"areaLoader",attrs:{func:"getUserBangumi",type:"page",auto:0,query:{$axios:e.$axios,slug:e.currentUser.slug,from:"create"}}}):e._e()],1),e._v(" "),n("VDrawer",{model:{value:e.toggleDraftDrawer,callback:function(t){e.toggleDraftDrawer=t},expression:"toggleDraftDrawer"}},[n("FlowLoader",{attrs:{func:"getUserDrafts",type:"page",query:{$axios:e.$axios}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.flow;return n("div",{},e._l(r,(function(t){return n("PinDraftItem",{key:t.slug,attrs:{item:t},on:{click:function(n){return e.switchDraft(t.slug)}}})})),1)}}])})],1),e._v(" "),n("VDrawer",{model:{value:e.toggleBangumiDrawer,callback:function(t){e.toggleBangumiDrawer=t},expression:"toggleBangumiDrawer"}},[n("FlowLoader",{attrs:{func:"getUserBangumi",type:"page",auto:0,query:{$axios:e.$axios,slug:e.currentUser.slug,from:"create"}},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.flow;return n("div",{},e._l(r,(function(t){return n("BangumiOptionItem",{key:t.slug,attrs:{item:t,"selected-slug":e.bangumi_slug,type:"select"},on:{click:function(n){return e.switchBangumi(t)}}})})),1)}}])})],1)],1)}),[],!1,null,null,null));t.default=Y.exports}}]);