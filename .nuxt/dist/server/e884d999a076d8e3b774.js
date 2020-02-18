/*! For license information please see LICENSES */
exports.ids=[22],exports.modules={112:function(t,e){t.exports={}},113:function(t,e){t.exports={}},114:function(t,e){t.exports={}},115:function(t,e){t.exports={}},116:function(t,e,n){"use strict";"undefined"!=typeof window&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(s){let t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(s))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},117:function(t,e){t.exports={}},118:function(t,e){t.exports={}},119:function(t){t.exports=JSON.parse('{"name":"smile","version":"1.0.0","description":"My breathtaking Nuxt.js project","author":"falstack","private":true,"scripts":{"lint":"eslint --fix --ext .js,.vue --ignore-path .gitignore .","precommit":"yarn lint","dev":"cross-env NODE_ENV=development nodemon server/index.js --watch server","build":"nuxt build","start":"cross-env NODE_ENV=production node server/index.js","analyze":"nuxt build --analyze","generate":"nuxt generate"},"dependencies":{"@calibur/sakura":"^1.6.5","@codexteam/ajax":"^4.1.0","@editorjs/checklist":"^1.1.0","@editorjs/delimiter":"^1.1.0","@editorjs/editorjs":"^2.16.1","@editorjs/embed":"^2.2.1","@editorjs/header":"^2.4.0","@editorjs/image":"^2.3.3","@editorjs/link":"^2.1.3","@editorjs/list":"^1.4.0","@nuxtjs/axios":"5.9.5","cross-env":"7.0.0","js-cookie":"^2.2.1","koa":"^2.11.0","nuxt":"2.11.0","url-polyfill":"^1.1.8","v-copy":"^0.1.0","vue-mixin-store":"^1.2.0"},"devDependencies":{"@nuxtjs/eslint-config":"2.0.2","@nuxtjs/eslint-module":"1.1.0","@nuxtjs/style-resources":"^1.0.0","babel-eslint":"10.0.3","babel-plugin-component":"^1.1.1","core-js":"^3.6.4","eslint":"6.8.0","eslint-config-standard":"14.1.0","eslint-plugin-import":"2.20.1","eslint-plugin-jest":"23.7.0","eslint-plugin-node":"11.0.0","eslint-plugin-nuxt":"0.5.1","eslint-plugin-promise":"4.2.1","eslint-plugin-standard":"4.0.1","eslint-plugin-vue":"6.2.0","node-sass":"^4.13.1","nodemon":"2.0.2","qiniu-qupload":"^1.0.6","sass-loader":"^8.0.2"}}')},120:function(t,e,n){"use strict";n.r(e);var r=n(73),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},121:function(t,e,n){"use strict";n.r(e);var r=n(74),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},122:function(t,e,n){"use strict";n.r(e);var r=n(75),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},123:function(t,e,n){"use strict";n.r(e);var r=n(76),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},150:function(t,e,n){"use strict";n.r(e);n(72),n(17);var r=n(35),o=n.n(r),l=(n(47),n(29)),c=n.n(l),d=(n(48),n(30)),h=n.n(d),m=n(50),_=n(51);n(112);class v{constructor({data:data,config:t,api:e}){this.api=e,this._CSS={block:this.api.styles.block,settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"ce-header"},this._settings=t,this._data=this.normalizeData(data),this.settingsButtons=[],this._element=this.getTag()}normalizeData(data){const t={};return"object"!=typeof data&&(data={}),t.text=data.text||"",t.level=parseInt(data.level)||this.defaultLevel.number,t}render(){return this._element}renderSettings(){const t=document.createElement("DIV");return this.levels.forEach(e=>{const n=document.createElement("SPAN");n.classList.add(this._CSS.settingsButton),this.currentLevel.number===e.number&&n.classList.add(this._CSS.settingsButtonActive),n.innerHTML=e.svg,n.dataset.level=e.number,n.addEventListener("click",()=>{this.setLevel(e.number)}),t.appendChild(n),this.settingsButtons.push(n)}),t}setLevel(t){this.data={level:t,text:this.data.text},this.settingsButtons.forEach(button=>{button.classList.toggle(this._CSS.settingsButtonActive,parseInt(button.dataset.level)===t)})}merge(data){const t={text:this.data.text+data.text,level:this.data.level};this.data=t}validate(t){return""!==t.text.trim()}save(t){return{text:t.innerHTML,level:this.currentLevel.number}}static get conversionConfig(){return{export:"text",import:"text"}}static get sanitize(){return{level:{}}}get data(){return this._data.text=this._element.innerHTML,this._data.level=this.currentLevel.number,this._data}set data(data){if(this._data=this.normalizeData(data),void 0!==data.level&&this._element.parentNode){const t=this.getTag();t.innerHTML=this._element.innerHTML,this._element.parentNode.replaceChild(t,this._element),this._element=t}void 0!==data.text&&(this._element.innerHTML=this._data.text||"")}getTag(){const t=document.createElement(this.currentLevel.tag);return t.innerHTML=this._data.text||"",t.classList.add(this._CSS.wrapper),t.contentEditable="true",t.dataset.placeholder=this._settings.placeholder||"",t}get currentLevel(){let t=this.levels.find(t=>t.number===this._data.level);return t||(t=this.defaultLevel),t}get defaultLevel(){return{number:2,tag:"H2"}}get levels(){return[]}onPaste(t){const content=t.detail.data;let e=2;switch(content.tagName){case"H1":e=1;break;case"H3":e=3;break;case"H4":e=4;break;case"H5":e=5;break;case"H6":e=6}this.data={level:e,text:content.innerHTML}}static get pasteConfig(){return{tags:["H1","H2","H3","H4","H5","H6"]}}static get toolbox(){return{icon:'<svg width="11" height="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M7.6 8.15H2.25v4.525a1.125 1.125 0 0 1-2.25 0V1.125a1.125 1.125 0 1 1 2.25 0V5.9H7.6V1.125a1.125 1.125 0 0 1 2.25 0v11.55a1.125 1.125 0 0 1-2.25 0V8.15z"/></svg>',title:"标题"}}}n(113);class f{constructor({data:data}){this.data=data}static get toolbox(){return{title:"百度云",icon:'<svg version="1" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 298 298" preserveAspectRatio="xMidYMid meet"><g stroke="none"><path d="M135.2 75.6c-11 2.9-20.1 9.5-26.5 19.1-5.1 7.6-7.4 14.6-8.4 24.5-.6 7.4.2 6.7-9.8 8.4-15.2 2.6-30.5 16.1-35.6 31.2-1.8 5.4-2 8.1-1.7 17.5.4 10.6.6 11.6 4.2 18.6 6.5 12.8 17.1 20.9 31.9 24.8 12.1 3.1 26.8.2 37.9-7.5 2.4-1.6 12.2-11.9 21.8-22.8 32.9-37.3 35.7-39.7 46.5-39.7 12.9.1 21.4 8.4 24 23.6.3 2.2 1.1 4.9 1.6 6.1 2.3 5.1 11.4 7.3 16.4 4 12.6-8.3-.4-41.6-19.8-50.8-5.8-2.7-16.1-5.6-20.1-5.6-2.4 0-2.6-.3-2.6-4.4 0-21.7-15.1-41.8-35.4-47.2-6.5-1.7-17.6-1.7-24.4.2zm19.4 21.9c5.7 1.7 12.8 8 15.2 13.5 1.9 4.5 1.8 14.5-.2 19.1-3.7 8.7-12.1 13.9-22.4 13.9-6.2 0-7.5-.4-11.8-3.3-7.4-4.9-10.7-10.4-11.2-18.3-.6-8.7 1.5-14.1 7.8-19.7 7.3-6.6 13.4-8 22.6-5.2zm-44.7 54.4c5 2.6 10.7 9.1 12 13.8 4.6 16.4-5.9 31.5-21.8 31.5-13.6.1-24.1-10-24.1-23.2 0-9.3 5.7-18.6 13.5-22.1 5.5-2.5 15.4-2.5 20.4 0zM225 200.7c-3.9 2.7-4.9 4.5-5 9 0 3.3.6 5 2.9 7.5 2.6 2.9 3.5 3.3 8.1 3.3s5.5-.4 8.1-3.3c6.4-7.2 2.1-18.2-7.3-18.2-2.5 0-5.4.7-6.8 1.7z"/></g></svg>'}}render(){const t=document.createElement("div");t.classList.add("baidu-resource");const e=document.createElement("div");e.classList.add("baidu-resource-wrap"),t.appendChild(e);const n=document.createElement("input");n.classList.add("baidu-resource-url"),n.placeholder="仅支持百度云盘：pan.baidu.com",n.type="text",n.value=this.data&&this.data.url?this.data.url:"",e.appendChild(n);const r=document.createElement("input");r.classList.add("baidu-resource-password"),r.placeholder="填写资源的密码（4~6位）",r.type="text",r.value=this.data&&this.data.password?this.data.password:"",e.appendChild(r);const o=document.createElement("div");o.classList.add("baidu-resource-role-wrap");const l=`${Math.random().toString(36).substring(3,6)}`,c=this.data&&this.data.visit_type?this.data.visit_type:0,d=document.createElement("span");d.textContent="是否需要投食才能看到密码：",o.appendChild(d);const h=document.createElement("input");h.classList.add("baidu-resource-role-public"),h.id=`baidu-resource-role-public-${l}`,h.name=l,h.type="radio",h.value=0,h.checked=0===c,o.appendChild(h);const m=document.createElement("label");m.setAttribute("for",`baidu-resource-role-public-${l}`),m.textContent="否",m.classList.add("baidu-resource-label"),o.appendChild(m);const _=document.createElement("input");_.classList.add("baidu-resource-role-private"),_.id=`baidu-resource-role-private-${l}`,_.type="radio",_.name=l,_.value=1,_.checked=1===c,o.appendChild(_);const v=document.createElement("label");return v.setAttribute("for",`baidu-resource-role-private-${l}`),v.textContent="是",v.classList.add("baidu-resource-label"),o.appendChild(v),e.appendChild(o),t}save(t){const e=t.querySelector(".baidu-resource-url"),n=t.querySelector(".baidu-resource-password"),r=t.querySelector(".baidu-resource-role-public");let o=e.value.trim();return/^https?:\/\//.test(o)||(o="https://"+o),{url:o,password:n.value.trim(),visit_type:r.checked?0:1}}validate(t){return!(!t.url||!t.password)&&!(!/https?:\/\/pan\.baidu\.com\/s\/([\w\W]+)/.test(t.url)||!/^[\w|\W]{4,6}$/.test(t.password))}}n(114);class x{static get contentless(){return!0}constructor({data:data,config:t,api:e}){this.api=e,this._CSS={block:this.api.styles.block,wrapper:"ce-delimiter"},this._data={},this._element=this.drawView(),this.data=data}drawView(){const div=document.createElement("DIV");return div.classList.add(this._CSS.wrapper,this._CSS.block),div}render(){return this._element}save(t){return{}}static get toolbox(){return{icon:'<svg width="19" height="4" viewBox="0 0 19 4" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 0H7a1.25 1.25 0 1 1 0 2.5H1.25a1.25 1.25 0 1 1 0-2.5zM11 0h5.75a1.25 1.25 0 0 1 0 2.5H11A1.25 1.25 0 0 1 11 0z"/></svg>',title:"分割线"}}}n(115),n(116);class w{static get enableLineBreaks(){return!0}static get toolbox(){return{icon:'<svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zm0-2.394a5.106 5.106 0 1 0 0-10.212 5.106 5.106 0 0 0 0 10.212zm-.675-4.665l2.708-2.708 1.392 1.392-2.708 2.708-1.392 1.391-2.971-2.971L5.245 6.36l1.58 1.58z"/></svg>',title:"进度表"}}constructor({data:data,config:t,api:e}){this._elements={wrapper:null,items:[]},this._data={items:[]},this.api=e,this.data=data}render(){if(this._elements.wrapper=this._make("div",[this.CSS.baseBlock,this.CSS.wrapper]),this._data.items.length)this._data.items.forEach(t=>{const e=this.createChecklistItem(t);this._elements.items.push(e),this._elements.wrapper.appendChild(e)});else{const t=this.createChecklistItem();this._elements.items.push(t),this._elements.wrapper.appendChild(t)}return this._elements.wrapper.addEventListener("keydown",t=>{const[e,n]=[13,8];switch(t.keyCode){case e:this.appendNewElement(t);break;case n:this.backspace(t)}},!1),this._elements.wrapper.addEventListener("click",t=>{this.toggleCheckbox(t)}),this._elements.wrapper}validate(t){return!!t.items.length}toggleCheckbox(t){const e=t.target.closest(`.${this.CSS.item}`);e.querySelector(`.${this.CSS.checkbox}`).contains(t.target)&&e.classList.toggle(this.CSS.itemChecked)}createChecklistItem(t={}){const e=this._make("div",this.CSS.item),n=this._make("span",this.CSS.checkbox),r=this._make("div",this.CSS.textField,{innerHTML:t.text?t.text:"",contentEditable:!0});return t.checked&&e.classList.add(this.CSS.itemChecked),e.appendChild(n),e.appendChild(r),e}appendNewElement(t){t.preventDefault();const e=window.getSelection().anchorNode,n=this._elements.items[this._elements.items.length-1].querySelector(`.${this.CSS.textField}`),r=n.innerHTML.replace("<br>"," ").trim();if(e===n&&!r)return this.api.blocks.insertNewBlock(),void t.stopPropagation();const o=this.createChecklistItem(),l=e.parentNode.closest(`.${this.CSS.item}`);this._elements.wrapper.insertBefore(o,l.nextSibling);const c=this._elements.items.indexOf(l)+1;this._elements.items.splice(c,0,o),this.moveCaretToEnd(o.querySelector(`.${this.CSS.textField}`))}backspace(t){const e=t.target.closest(`.${this.CSS.item}`),n=this._elements.items.indexOf(e),r=e.querySelector(`.${this.CSS.textField}`).innerHTML.replace("<br>"," ").trim();this._elements.items[0].querySelector(`.${this.CSS.textField}`).innerHTML.replace("<br>"," ").trim()&&n&&!r&&(t.preventDefault(),e.remove(),this._elements.items.splice(n,1),"undefined"!==this._elements.items[n-1]&&this.moveCaretToEnd(this._elements.items[n-1].querySelector(`.${this.CSS.textField}`)))}save(){return this.data}get CSS(){return{baseBlock:this.api.styles.block,wrapper:"cdx-checklist",item:"cdx-checklist__item",itemChecked:"cdx-checklist__item--checked",checkbox:"cdx-checklist__item-checkbox",textField:"cdx-checklist__item-text"}}set data(t){this._data.items=t.items||[];const e=this._elements.wrapper;e&&e.parentNode.replaceChild(this.render(),e)}get data(){this._data.items=[];for(let i=0;i<this._elements.items.length;i++){const t=this._elements.items[i].querySelector(`.${this.CSS.textField}`).innerHTML.replace("<br>"," ").trim();t&&this._data.items.push({text:t,checked:this._elements.items[i].classList.contains(this.CSS.itemChecked)})}return this._data}_make(t,e=null,n={}){const r=document.createElement(t);Array.isArray(e)?r.classList.add(...e):e&&r.classList.add(e);for(const t in n)r[t]=n[t];return r}moveCaretToEnd(element){const t=document.createRange(),e=window.getSelection();t.selectNodeContents(element),t.collapse(!1),e.removeAllRanges(),e.addRange(t)}}n(117);class y{static get DEFAULT_PLACEHOLDER(){return""}constructor({data:data,config:t,api:e}){this.api=e,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.onKeyUp=this.onKeyUp.bind(this),this._placeholder=t.placeholder?t.placeholder:y.DEFAULT_PLACEHOLDER,this._data={},this._element=this.drawView(),/^<input /gi.test(data.text)&&(data={}),this.data=data}onKeyUp(t){if("Backspace"!==t.code&&"Delete"!==t.code)return;const{textContent:e}=this._element;""===e&&(this._element.innerHTML="")}drawView(){const div=document.createElement("DIV");return div.classList.add(this._CSS.wrapper,this._CSS.block),div.contentEditable=!0,div.dataset.placeholder=this._placeholder,div.addEventListener("keyup",this.onKeyUp),div}render(){return this._element}merge(data){this.data={text:this.data.text+data.text}}validate(t){return!(""===t.text.trim()||/vanced issues found/.test(t.text))}save(t){return{text:t.innerHTML}}onPaste(t){this.data={text:t.detail.data.innerHTML}}static get conversionConfig(){return{export:"text",import:"text"}}static get sanitize(){return{text:{br:!0}}}get data(){return this._data.text=this._element.innerHTML,this._data}set data(data){this._data=data||{},this._element.innerHTML=this._data.text||""}static get pasteConfig(){return{tags:["P"]}}}n(118);class k{constructor({data:data,api:t}){this.data=data,this.api=t,this.i=0}static get toolbox(){return{title:"投票",icon:'<svg version="1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 300 298" preserveAspectRatio="xMidYMid meet"><g stroke="none"><path d="M109.5 62.4l-2.5 2.5v140.2l2.5 2.4c2.3 2.4 3 2.5 14.7 2.5 6.8 0 13.3-.3 14.6-.6 5.2-1.4 5.2-.8 5.2-75.1 0-66.3-.1-68.9-2-71.3-1.8-2.4-2.3-2.5-15.9-2.8-13.9-.3-14.1-.3-16.6 2.2zM50.2 100l-2.2 2.1v103.8l2.6 2c2.4 1.9 4 2.1 15 2.1 13.8 0 16.8-.9 18.4-5.3 1.4-4.2 1.4-97.3-.1-101.6-.6-1.7-1.9-3.6-2.9-4.1-1-.6-7.9-1-15.2-1-12.1 0-13.6.2-15.6 2zM230.4 109.4c-1.7.8-3.4 2.1-3.8 3.1-.3.9-.6 22.1-.6 47.1v45.5l2.5 2.4c2.3 2.4 3 2.5 14.9 2.5 14 0 17-.9 18.6-5.3 1.5-4.3 1.4-86.3-.1-90.7-.8-2.2-2.2-3.7-4.5-4.6-4.4-1.8-22.7-1.8-27 0zM170.3 158.2c-1.2.6-2.7 2.4-3.2 4.1-1.4 3.9-1.4 38.5-.1 42.4 1.6 4.4 4.6 5.3 18.6 5.3 11.9 0 12.6-.1 14.9-2.5 2.5-2.4 2.5-2.4 2.5-24s0-21.6-2.5-24c-2.3-2.4-2.9-2.5-15.2-2.4-7 0-13.8.5-15 1.1zM49.2 223.2c-1.9 1.9-1.5 6.6.7 7.8 1.3.7 36 1 105.3 1 84.4 0 103.8-.2 105.2-1.3 2.2-1.6 2.5-6.5.5-7.8-2.3-1.4-210.3-1.1-211.7.3z"/></g></svg>'}}render(){if(document.querySelectorAll(".vote-wrap").length>0)return void this.api.notifier.show({message:"一篇文章只能包含一个投票",style:"error"});const t=document.createElement("div");t.classList.add("vote-wrap");const e=document.createElement("p");e.textContent="投票（文章发表后无法再修改）";const n=document.createElement("ul"),r=document.createElement("div");r.classList.add("vote-append","bili-font","ic_add");const o=text=>{const e=document.createElement("li"),label=document.createElement("span");label.textContent=`${++this.i}. `;const input=document.createElement("input");if(input.type="text",input.placeholder="请输入选项（20字以内）",text&&(input.value=("string"==typeof text?text:text.text)||""),input.maxLength=20,input.classList.add("vote-answer"),e.classList.add("vote-wrap-item"),e.appendChild(label),e.appendChild(input),this.i>2){const o=document.createElement("div");o.classList.add("bili-font","ic_input_close"),o.addEventListener("click",()=>{n.removeChild(e),this.i--,this.i<100&&(r.style.display="block");const o=t.querySelector(".vote-wrap-select-count");o&&(o.max=this.i,o.value-this.i>0&&(o.value=this.i))}),e.appendChild(o)}n.appendChild(e),input.focus()};r.addEventListener("click",()=>{o(),this.i>=100&&(r.style.display="none");const e=t.querySelector(".vote-wrap-select-count");e&&(e.max=this.i)});t.appendChild(e),t.appendChild(n);const l=document.createElement("div");return l.classList.add("append-btn-wrap"),l.appendChild(r),t.appendChild(l),this.data&&this.data.items?this.data.items.forEach(o):(o(),o()),(()=>{const footer=document.createElement("footer"),e=document.createElement("span");e.textContent="可选个数";const n=document.createElement("input");n.type="number",n.classList.add("vote-wrap-select-count"),n.min=1,this.data&&this.data.max_select?n.value=this.data.max_select:n.value=1,n.max=this.i;const r=document.createElement("div");r.classList.add("footer-item-wrap"),r.appendChild(e),r.appendChild(n),footer.appendChild(r);const o=document.createElement("span");o.textContent="截止时间（可选）";const l=document.createElement("input");l.type="date",l.min=new Date(Date.now()+864e5).toISOString().split("T")[0],l.classList.add("vote-expire-input"),this.data&&this.data.expired_at&&(l.value=new Date(1e3*this.data.expired_at).toISOString().split("T")[0]);const c=document.createElement("div");c.classList.add("footer-item-wrap"),c.appendChild(o),c.appendChild(l),footer.appendChild(c),t.appendChild(footer)})(),t}save(t){const e=t.querySelectorAll(".vote-answer"),n=[];[].forEach.call(e,(function(t){n.push(t.value)}));const r=t.querySelector(".vote-expire-input");return{items:n.map(t=>t.trim()).filter(t=>t),right_ids:[],max_select:+t.querySelector(".vote-wrap-select-count").value,expired_at:r&&r.value?parseInt(new Date(r.value).getTime()/1e3):0}}validate(t){return t.items.length>1}}var $=n(119),S={name:"JsonEditor",mixins:[m.a],props:{value:{required:!0,type:Array},slug:{type:String,default:""}},data:()=>({editor:null}),mounted(){this.initEditor()},methods:{initEditor(){Promise.all([Promise.resolve().then(n.t.bind(null,46,7)),n.e(23).then(n.bind(null,171)),n.e(24).then(n.bind(null,148))]).then(t=>{const e=this;let data;e.slug?data={blocks:e.value,time:Date.now(),version:e.$cache.get("editor_version",$.dependencies["@editorjs/editorjs"].replace("^",""))}:(data=e.$cache.get("editor_local_draft"),data&&e.$emit("input",data.blocks));const[n,r,o]=t.map(t=>t.default),l=new n({data:e.decodeData(data||{}),holder:"codex-editor",placeholder:"请输入正文（建议在15000字以内）",autofocus:!1,tools:{header:{class:v,inlineToolbar:!0},image:{class:r,types:"image/jpeg, image/png, image/jpg",config:{uploader:{uploadByFile:t=>new Promise((n,r)=>{const o=new FormData;o.append("file",t),o.append("token",e.imageUploadToken),Object(_.b)(e,o).then(data=>{data.url=`https://m1.calibur.tv/${data.url}`,n({success:1,file:data})}).catch(r)})}}},link:{class:o,config:{endpoint:"https://api.calibur.tv/v1/pin/editor/fetch_site"}},delimiter:{class:x},checklist:{class:w,inlineToolbar:!0},baidu:{class:f},paragraph:{class:y},vote:{class:k}},onChange:()=>{e.handleSave()}});l.isReady.then(()=>{this.editor=l,this.bindSaveEvent(),this.handleSave()}).catch(t=>{this.$toast.error(`编辑器初始化失败：${t}`)})})},bindSaveEvent(){document.addEventListener("keydown",t=>{83===t.keyCode&&(t.ctrlKey||t.metaKey)&&(t.stopPropagation(),t.preventDefault(),this.handleSave())},!1)},handleSave(){this.editor&&this.editor.save().then(t=>{const e=this.encodeData(t);this.slug||(this.$cache.set("editor_local_draft",e),this.$cache.set("editor_version",e.version)),this.value&&this.$emit("input",e.blocks),this.$emit("save")}).catch(()=>{this.$toast.error("保存失败")})},decodeData:({version:t,blocks:e,time:time})=>e?{version:t,blocks:e,time:time}:null,encodeData:({version:t,blocks:e,time:time})=>({version:t,blocks:e,time:time})}},C=n(1);var E=Object(C.a)(S,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"editor-wrap"},[this._ssrNode('<div id="codex-editor" class="mousetrap"></div>')])}),[],!1,(function(t){var e=n(120);e.__inject__&&e.__inject__(t)}),null,"67049c40").exports,L=n(54),D={name:"PinDraftItem",props:{item:{type:Object,required:!0}},computed:{noPoster(){return!this.item.title.banner}},methods:{handleClick(){this.$emit("click")}}};var B=Object(C.a)(D,(function(){var t,e=this,n=e.$createElement;return(e._self._c||n)("div",{class:e.$style.pinDraft,on:{click:e.handleClick}},[e._ssrNode("<img"+e._ssrAttr("src",e.$resize(e.noPoster?"default-poster":e.item.title.banner.url,{width:200,height:150}))+e._ssrClass(null,[e.$style.poster,(t={},t[e.$style.defaultPoster]=e.noPoster,t)])+"> <div"+e._ssrClass(null,e.$style.body)+"><div"+e._ssrClass("oneline",e.$style.title)+">"+e._ssrEscape(e._s(e.item.title.text))+"</div> <p"+e._ssrClass(null,e.$style.time)+">"+e._ssrEscape(e._s(e.$utils.timeAgo(e.item.last_edit_at)))+"</p></div>")])}),[],!1,(function(t){var e=n(121);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"166da30f").exports,T=(n(52),n(32)),j={name:"BangumiOptionItem",components:{VRadio:n.n(T).a},props:{item:{type:Object,required:!0},type:{type:String,default:"follow"},selectedSlug:{type:String,default:""}},data(){return{isSelected:this.item.slug===this.selectedSlug}},methods:{handleClick(){"select"===this.type&&this.$emit("click")}}};var U=Object(C.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.bangumiOption,on:{click:t.handleClick}},[t._ssrNode("<img"+t._ssrAttr("src",t.$resize(t.item.avatar,{width:120,height:120}))+t._ssrClass(null,t.$style.poster)+"> "),t._ssrNode("<div"+t._ssrClass(null,t.$style.body)+">","</div>",[t._ssrNode("<div"+t._ssrClass(null,t.$style.content)+"><div"+t._ssrClass("oneline",t.$style.title)+">"+t._ssrEscape(t._s(t.item.name))+"</div></div> "),t._ssrNode("<div"+t._ssrClass(null,t.$style.extra)+">","</div>",["select"===t.type?n("VRadio",{attrs:{label:"",circle:"",readonly:""},model:{value:t.isSelected,callback:function(e){t.isSelected=e},expression:"isSelected"}}):t._e()],1)],2)],2)}),[],!1,(function(t){var e=n(122);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"36e9d501").exports,M={name:"WritePin",components:{VField:h.a,VButton:c.a,Editor:E,VDrawer:o.a,PinDraftItem:B,BangumiOptionItem:U},mixins:[L.a,m.a],asyncData({app:t,error:e,query:n}){const r=n.slug;if(r)return t.$axios.$get("v1/pin/update/content",{params:{slug:r}}).then(data=>({...data})).catch(e)},data:()=>({slug:"",title:{banner:null,text:""},content:[],bangumi_slug:"",last_edit_at:"",published_at:"",selectedBangumi:null,loading:!1,renderEditor:!0,toggleDraftDrawer:!1,toggleBangumiDrawer:!1}),computed:{draftSource(){return this.$store.getters["flow/getFlow"]({func:"getUserDrafts",type:"page"})||{}},bangumiSource(){return this.$store.getters["flow/getFlow"]({func:"getUserBangumi",type:"page",query:{slug:this.currentUser.slug}})||{}}},mounted(){this.initCache(),this.initUserDraft(),this.initUserBangumi()},methods:{initCache(){this.slug||(this.$cache.has("editor_local_draft_title")&&(this.title=this.$cache.get("editor_local_draft_title")),this.$cache.has("editor_local_draft_bangumi")&&(this.selectedBangumi=this.$cache.get("editor_local_draft_bangumi"),this.selectedBangumi&&(this.bangumi_slug=this.selectedBangumi.slug)))},initUserDraft(){this.$refs.draftLoader&&this.$refs.draftLoader.initData()},initUserBangumi(){this.$channel.$when("user-signed",async()=>{this.$refs.areaLoader&&(await this.$refs.areaLoader.initData(),this.bangumi_slug?this.selectedBangumi=this.bangumiSource.result.find(t=>t.slug===this.bangumi_slug):this.selectedBangumi=this.bangumiSource.result[0],this.bangumi_slug=this.selectedBangumi.slug)})},onEditorSave(){this.saveTitle(),this.saveBangumi()},saveTitle(){this.slug||this.$cache.set("editor_local_draft_title",this.title)},preValidate(){return!!this.loading||(this.title.text?this.content.length?(this.loading=!0,!1):(this.$toast.info("内容不能为空"),!0):(this.$toast.info("标题不能为空"),!0))},actionCreate(t){this.preValidate()||this.$axios.$post("v1/pin/create/story",{bangumi_slug:this.bangumi_slug,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(e=>{this.removeCache(),t?this.$bridge.redirectTo({url:`/pages/pin/show/index?slug=${e}`}):this.switchDraft(e),this.loading=!1}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},actionUpdate(t){this.preValidate()||this.$axios.$post("v1/pin/update/story",{slug:this.slug,bangumi_slug:this.bangumi_slug,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(e=>{t&&this.$bridge.redirectTo({url:`/pages/pin/show/index?slug=${e}`}),this.loading=!1}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},removeCache(){this.$cache.del("editor_local_draft_title"),this.$cache.del("editor_local_draft_bangumi"),this.$cache.del("editor_local_draft")},clearPageData(){this.renderEditor=!1,this.slug="",this.title={banner:null,text:""},this.bangumi_slug="",this.last_edit_at="",this.published_at="",this.content=[],this.toggleDraftDrawer=!1,this.selectedBangumi=this.bangumiSource.result[0],this.$nextTick(()=>{this.renderEditor=!0})},updatePageData(data){this.renderEditor=!1,this.slug=data.slug,this.title=data.title,this.last_edit_at=data.last_edit_at,this.published_at=data.published_at,this.bangumi_slug=data.bangumi_slug,this.content=data.content,this.toggleDraftDrawer=!1,this.bangumi_slug?this.selectedBangumi=this.bangumiSource.find(t=>t.slug===this.bangumi_slug):this.selectedBangumi=this.bangumiSource.result[0],this.$nextTick(()=>{this.renderEditor=!0})},switchBangumi(t){this.toggleBangumiDrawer=!1,this.selectedBangumi=t,this.bangumi_slug=t.slug,this.saveBangumi()},saveBangumi(){this.$cache.set("editor_local_draft_bangumi",this.selectedBangumi)},switchDraft(t,e=!1){if(this.slug)if(this.published_at){if(!e)return void this.$alert({title:"未对本次更改做保存",message:"切换后会丢失更新的内容，确认吗？",buttons:["取消","确认"],callback:e=>{e&&this.switchDraft(t,!0)}})}else this.actionUpdate(!1);this.$router.replace({name:this.$route.name,query:{...this.$route.query,slug:t}}),t?this.$axios.$get("v1/pin/update/content",{params:{slug:t}}).then(data=>{this.updatePageData(data)}).catch(t=>{this.$toast.info(t.message)}):this.clearPageData()}},head:()=>({title:"投稿"})};var N=Object(C.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"write-pin"}},[t._ssrNode('<div class="title">',"</div>",[n("VField",{attrs:{"min-row":1,"max-row":2,"max-len":40,counter:"",placeholder:"标题（建议30字以内）"},model:{value:t.title.text,callback:function(e){t.$set(t.title,"text",e)},expression:"title.text"}})],1),t._ssrNode(" "),t.renderEditor?n("Editor",{attrs:{slug:t.slug},on:{save:t.onEditorSave},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}):t._e(),t._ssrNode(" "),t.selectedBangumi?t._ssrNode('<div class="info-wrap">',"</div>",[t._ssrNode('<p class="info-title">\n      请选择投稿分区\n    </p> '),n("VButton",{attrs:{plain:""},domProps:{textContent:t._s(t.selectedBangumi.name)},on:{click:function(e){t.toggleBangumiDrawer=!0}}})],2):t._e(),t._ssrNode(" "),t._ssrNode('<div class="footer">',"</div>",[t.published_at?[n("VButton",{attrs:{loading:t.loading},on:{click:function(e){return t.actionUpdate(!0)}}},[t._v("\n        更新文章\n      ")])]:[n("VButton",{attrs:{loading:t.loading},on:{click:function(e){return t.actionCreate(!0)}}},[t._v("\n        发布文章\n      ")]),t._ssrNode(" "),t.slug?n("VButton",{attrs:{loading:t.loading,theme:"info",plain:""},on:{click:function(e){return t.actionUpdate(!1)}}},[t._v("\n        存草稿\n      ")]):n("VButton",{attrs:{loading:t.loading,theme:"info",plain:""},on:{click:function(e){return t.actionCreate(!1)}}},[t._v("\n        存草稿\n      ")])],t._ssrNode(" "),t.draftSource.total?n("VButton",{attrs:{plain:""},on:{click:function(e){t.toggleDraftDrawer=!0}}},[t._v("\n      草稿箱("+t._s(t.draftSource.total)+")\n    ")]):t._e()],2),t._ssrNode(" "),t._ssrNode('<div class="preload-wrap">',"</div>",[n("FlowLoader",{ref:"draftLoader",attrs:{func:"getUserDrafts",type:"page",auto:0,query:{$axios:t.$axios}}}),t._ssrNode(" "),t.isAuth?n("FlowLoader",{ref:"areaLoader",attrs:{func:"getUserBangumi",type:"page",auto:0,query:{$axios:t.$axios,slug:t.currentUser.slug}}}):t._e()],2),t._ssrNode(" "),n("VDrawer",{model:{value:t.toggleDraftDrawer,callback:function(e){t.toggleDraftDrawer=e},expression:"toggleDraftDrawer"}},[n("FlowLoader",{attrs:{func:"getUserDrafts",type:"page",query:{$axios:t.$axios}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return n("div",{},t._l(r,(function(e){return n("PinDraftItem",{key:e.slug,attrs:{item:e},on:{click:function(n){return t.switchDraft(e.slug)}}})})),1)}}])})],1),t._ssrNode(" "),n("VDrawer",{model:{value:t.toggleBangumiDrawer,callback:function(e){t.toggleBangumiDrawer=e},expression:"toggleBangumiDrawer"}},[n("FlowLoader",{attrs:{func:"getUserBangumi",type:"page",auto:0,query:{$axios:t.$axios,slug:t.currentUser.slug}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return n("div",{},t._l(r,(function(e){return n("BangumiOptionItem",{key:e.slug,attrs:{item:e,"selected-slug":t.bangumi_slug,type:"select"},on:{click:function(n){return t.switchBangumi(e)}}})})),1)}}])})],1)],2)}),[],!1,(function(t){var e=n(123);e.__inject__&&e.__inject__(t)}),null,"5148599e");e.default=N.exports},47:function(t,e){t.exports={}},48:function(t,e){t.exports={}},50:function(t,e,n){"use strict";var r=n(51);e.a={data:()=>({imageUploadToken:"",imageUploadAccept:["jpeg","png","jpg"],imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/"}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){this.imageUploadToken=await Object(r.a)(this)},imageUploadRequest(data){return data.key=(({slug:t,file:e})=>`${t}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${e.type.split("/").pop()}`)({slug:this.currentUser.slug,file:data.file}),data.token=this.imageUploadToken,data},imageUploadResponse(t){try{return{...t.data,url:`${this.imagePrefix}${t.data.url}`}}catch(t){return{}}}}}},51:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));const r=t=>t.$axios.$get("v1/image/uptoken"),o=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})},52:function(t,e){t.exports={}},54:function(t,e,n){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{this.$bridge.redirectTo({url:`/pages/user/login/index?from=${encodeURIComponent(window.location.href)}`})})})}}},72:function(t,e){t.exports={}},73:function(t,e){t.exports={}},74:function(t,e){t.exports={"pin-draft":"pin-draft_3apaf",pinDraft:"pin-draft_3apaf",poster:"poster_3ME69","default-poster":"default-poster_2JmY1",defaultPoster:"default-poster_2JmY1",body:"body_uaEmQ",title:"title_y3UjG"}},75:function(t,e){t.exports={"bangumi-option":"bangumi-option_1VN2B",bangumiOption:"bangumi-option_1VN2B",body:"body_3llvZ",poster:"poster_3Wjvi",content:"content_1f3Yk",extra:"extra_1R6jg"}},76:function(t,e){t.exports={}}};
//# sourceMappingURL=e884d999a076d8e3b774.js.map