module.exports=function(t){var e={},r={0:0};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.e=function(e){if(0!==r[e]){var n=require("./"+{1:"4da182389ed54cd8edb8"}[e]+".js"),o=n.modules,c=n.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)r[c[i]]=0}return Promise.all([])},n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="https://file.calibur.tv/smile/",n.oe=function(t){process.nextTick((function(){throw t}))},n(n.s=15)}([function(t,e){t.exports=require("vue")},function(t,e,r){"use strict";function n(t,e,r,n,o,c,l,d){var h,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=r,f._compiled=!0),n&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},f._ssrRegister=h):o&&(h=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(t,e){return h.call(e),m(t,e)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,h):[h]}return{exports:t,options:f}}r.d(e,"a",(function(){return n}))},function(t,e){t.exports=require("vue-router")},function(t,e){t.exports=require("axios")},function(t,e,r){var content=r(17);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(9).default;t.exports.__inject__=function(t){n("72daabed",content,!0,t)}},function(t,e,r){var content=r(19);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(9).default;t.exports.__inject__=function(t){n("3191d5ad",content,!0,t)}},function(t,e,r){var content=r(21);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=r(9).default;t.exports.__inject__=function(t){n("932a8f60",content,!0,t)}},function(t,e){t.exports=require("vue-no-ssr")},function(t,e,r){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var content=function(t,e){var content=t[1]||"",r=t[3];if(!r)return content;if(e&&"function"==typeof btoa){var n=(c=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(data," */")),o=r.sources.map((function(source){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(source," */")}));return[content].concat(o).concat([n]).join("\n")}var c,l,data;return[content].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(content,"}"):content})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);n&&o[d[0]]||(r&&(d[2]?d[2]="".concat(r," and ").concat(d[2]):d[2]=r),e.push(d))}},e}},function(t,e,r){"use strict";function n(t,e,r,n){if(n||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),n){n.hasOwnProperty("styles")||(Object.defineProperty(n,"styles",{enumerable:!0,get:function(){return o(n._styles)}}),n._renderStyles=o);var c=n._styles||(n._styles={});e=function(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[c]?n[c].parts.push(l):r.push(n[c]={id:c,parts:[l]})}return r}(t,e),r?function(t,e){for(var i=0;i<e.length;i++)for(var r=e[i].parts,n=0;n<r.length;n++){var o=r[n],c=o.media||"default",style=t[c];style?style.ids.indexOf(o.id)<0&&(style.ids.push(o.id),style.css+="\n"+o.css):t[c]={ids:[o.id],css:o.css,media:o.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var r=e[i].parts,n=0;n<r.length;n++){var o=r[n];t[o.id]={ids:[o.id],css:o.css,media:o.media}}}(c,e)}}function o(t){var e="";for(var r in t){var style=t[r];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}r.r(e),r.d(e,"default",(function(){return n}))},function(t,e){t.exports=require("vue-client-only")},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e){t.exports=require("defu")},function(t,e,r){t.exports=r(22)},function(t,e,r){"use strict";r.r(e);var n=r(4),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},function(t,e,r){(e=r(8)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""]),t.exports=e},function(t,e,r){"use strict";r.r(e);var n=r(5),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},function(t,e,r){(e=r(8)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}",""]),t.exports=e},function(t,e,r){"use strict";r.r(e);var n=r(6),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,(function(){return n[t]}))}(c);e.default=o.a},function(t,e,r){(e=r(8)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""]),t.exports=e},function(t,e,r){"use strict";r.r(e);var n=r(11),o=r(0),c=r.n(o),l=r(12),d=r.n(l);var h={};function f(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function m(t,e=!1,r="components"){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t[r]).map(o=>(e&&e.push(n),t[r][o]))))}function x(t,e){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,r)=>Object.keys(t.components).reduce((n,o)=>(t.components[o]?n.push(e(t.components[o],t.instances[o],t,o,r)):delete t.components[o],n),[])))}(t,async(t,r,n,o)=>("function"!=typeof t||t.options||(t=await t()),n.components[o]=t=f(t),"function"==typeof e?e(t,r,n,o):t)))}async function y(t){if(t)return await x(t),{...t,meta:m(t).map((e,r)=>({...e.options.meta,...(t.matched[r]||{}).meta}))}}async function v(t,e){t.context||(t.context={isStatic:!1,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,r)=>{if(!e)return;t.context._redirected=!0;let n=typeof path;"number"==typeof e||"undefined"!==n&&"object"!==n||(r=path||{},n=typeof(path=e),e=302),"object"===n&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:r,status:e}):(path=function(t,e){let r;const n=t.indexOf("://");-1!==n?(r=t.substring(0,n),t=t.substring(n+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(r?r+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");c=path.split("#"),2===c.length&&([path,o]=c);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const r=t[e];return null==r?"":Array.isArray(r)?r.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+r}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:"",l}(path,r),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[r,n]=await Promise.all([y(e.route),y(e.from)]);e.route&&(t.context.route=r),e.from&&(t.context.from=n),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function _(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():w(t[0],e).then(()=>_(t.slice(1),e))}function w(t,e){let r;return r=2===t.length?new Promise(r=>{t(e,(function(t,data){t&&e.error(t),r(data=data||{})}))}):t(e),r&&r instanceof Promise&&"function"==typeof r.then?r:Promise.resolve(r)}function C(t,e){return function(t,e){const r=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(r[i]=new RegExp("^(?:"+t[i].pattern+")$",E(e)));return function(e,n){let path="";const data=e||{},o=(n||{}).pretty?$:encodeURIComponent;for(let i=0;i<t.length;i++){const e=t[i];if("string"==typeof e){path+=e;continue}const n=data[e.name||"pathMatch"];let c;if(null==n){if(e.optional){e.partial&&(path+=e.prefix);continue}throw new TypeError('Expected "'+e.name+'" to be defined')}if(Array.isArray(n)){if(!e.repeat)throw new TypeError('Expected "'+e.name+'" to not repeat, but received `'+JSON.stringify(n)+"`");if(0===n.length){if(e.optional)continue;throw new TypeError('Expected "'+e.name+'" to not be empty')}for(let t=0;t<n.length;t++){if(c=o(n[t]),!r[i].test(c))throw new TypeError('Expected all "'+e.name+'" to match "'+e.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===t?e.prefix:e.delimiter)+c}}else{if(c=e.asterisk?$(n,!0):o(n),!r[i].test(c))throw new TypeError('Expected "'+e.name+'" to match "'+e.pattern+'", but received "'+c+'"');path+=e.prefix+c}}return path}}(function(t,e){const r=[];let n=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=k.exec(t));){const e=l[0],d=l[1],h=l.index;if(path+=t.slice(o,h),o=h+e.length,d){path+=d[1];continue}const f=t[o],m=l[2],x=l[3],y=l[4],v=l[5],_=l[6],w=l[7];path&&(r.push(path),path="");const C=null!=m&&null!=f&&f!==m,k="+"===_||"*"===_,$="?"===_||"*"===_,E=l[2]||c,pattern=y||v;r.push({name:x||n++,prefix:m||"",delimiter:E,optional:$,repeat:k,partial:C,asterisk:Boolean(w),pattern:pattern?S(pattern):w?".*":"[^"+j(E)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&r.push(path);return r}(t,e),e)}const k=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function $(t,e){const r=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(r,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function j(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$/()])/g,"\\$1")}function E(t){return t&&t.sensitive?"":"i"}var T=r(13),N=r.n(T),O=r(10),R=r.n(O),P=r(7),A=r.n(P),L=r(2),M=r.n(L);const U=()=>{},D=M.a.prototype.push;M.a.prototype.push=function(t,e=U,r){return D.call(this,t,e,r)},c.a.use(M.a);const z={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,r){let n=!1;const o=m(t);o.length<2&&o.every(t=>!1!==t.options.scrollToTop)?n={x:0,y:0}:o.some(t=>t.options.scrollToTop)&&(n={x:0,y:0}),r&&(n=r);const c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick(()=>c.$emit("triggerScroll")),new Promise(e=>{c.$once("triggerScroll",()=>{if(t.hash){let e=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(e="#"+window.CSS.escape(e.substr(1)));try{document.querySelector(e)&&(n={selector:e})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(n)})})},routes:[{path:"/",component:()=>r.e(1).then(r.bind(null,29)).then(t=>t.default||t),name:"index"}],fallback:!1};var B={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:r}){data.nuxtChild=!0;const n=e,o=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const d=o[l]||c,h={};F.forEach(t=>{void 0!==d[t]&&(h[t]=d[t])});const f={};I.forEach(t=>{"function"==typeof d[t]&&(f[t]=d[t].bind(n))});const m=f.beforeEnter;if(f.beforeEnter=t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(n,t)},!1===d.css){const t=f.leave;(!t||t.length<2)&&(f.leave=(e,r)=>{t&&t.call(n,e),n.$nextTick(r)})}let x=t("routerView",data);return r.keepAlive&&(x=t("keep-alive",{props:r.keepAliveProps},[x])),t("transition",{props:h,on:f},[x])}};const F=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],I=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var H={name:"NuxtError",props:{error:{type:Object,default:null}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}}},K=r(1);var V=Object(K.a)(H,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[r("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])}),[],!1,(function(t){var e=r(16);e.__inject__&&e.__inject__(t)}),null,"296d3250").exports,J={name:"Nuxt",components:{NuxtChild:B,NuxtError:V},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||C(this.$route.matched[0].path)(this.$route.params);const[t]=this.$route.matched;if(!t)return this.$route.path;const e=t.components.default;if(e&&e.options){const{options:t}=e;if(t.key)return"function"==typeof t.key?t.key(this.$route):t.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick(()=>this.errorFromNuxtError=!1),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p",`Error details: ${this.errorFromNuxtError.toString()}`),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick(()=>this.displayingNuxtError=!1),t(V,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},X={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var W=Object(K.a)(X,void 0,void 0,!1,(function(t){var e=r(18);e.__inject__&&e.__inject__(t)}),null,"0d7e48f8").exports;const G={_default:Object(K.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)}),[],!1,(function(t){var e=r(20);e.__inject__&&e.__inject__(t)}),null,"b2929edc").exports};var Q={head:{title:"smile",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My breathtaking Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render(t,e){const r=t("NuxtLoading",{ref:"loading"}),n=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[n]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[r,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error,this.context=this.$options.context},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},async refresh(){const t=function(t,e=!1){return m(t,e,"instances")}(this.$route);if(!t.length)return;this.$loading.start();const e=t.map(t=>{const p=[];return t.$options.fetch&&p.push(w(t.$options.fetch,this.context)),t.$options.asyncData&&p.push(w(t.$options.asyncData,this.context).then(e=>{for(const r in e)c.a.set(t.$data,r,e[r])})),Promise.all(p)});try{await Promise.all(e)}catch(t){this.$loading.fail(),function(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}(t),this.error(t)}this.$loading.finish()},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&G["_"+t]||(t="default"),this.layoutName=t,this.layout=G["_"+t],this.layout},loadLayout:t=>(t&&G["_"+t]||(t="default"),Promise.resolve(G["_"+t]))},components:{NuxtLoading:W}},Y=r(3),Z=r.n(Y),tt=r(14),et=r.n(tt);const nt={setBaseURL(t){this.defaults.baseURL=t},setHeader(t,e,r="common"){for(let n of Array.isArray(r)?r:[r]){if(!e)return void delete this.defaults.headers[n][t];this.defaults.headers[n][t]=e}},setToken(t,e,r="common"){const n=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",n,r)},onRequest(t){this.interceptors.request.use(e=>t(e)||e)},onResponse(t){this.interceptors.response.use(e=>t(e)||e)},onRequestError(t){this.interceptors.request.use(void 0,e=>t(e)||Promise.reject(e))},onResponseError(t){this.interceptors.response.use(void 0,e=>t(e)||Promise.reject(e))},onError(t){this.onRequestError(t),this.onResponseError(t)},create(t){return ot(et()(t,this.defaults))}};for(let t of["request","delete","get","head","options","post","put","patch"])nt["$"+t]=function(){return this[t].apply(this,arguments).then(t=>t&&t.data)};const ot=t=>{const e=Z.a.create(t);return e.CancelToken=Z.a.CancelToken,e.isCancel=Z.a.isCancel,(t=>{for(let e in nt)t[e]=nt[e].bind(t)})(e),it(e),e},it=t=>{};var st=(t,e)=>{const r={baseURL:process.env._AXIOS_BASE_URL_||"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};r.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete r.headers.common.accept,delete r.headers.common.host,delete r.headers.common["cf-ray"],delete r.headers.common["cf-connecting-ip"],delete r.headers.common["content-length"],delete r.headers.common["content-md5"],delete r.headers.common["content-type"],r.headers.common["accept-encoding"]="gzip, deflate";const n=ot(r);t.$axios=n,e("axios",n)};c.a.component(R.a.name,R.a),c.a.component(A.a.name,{...A.a,render:(t,e)=>A.a.render(t,e)}),c.a.component(B.name,B),c.a.component("NChild",B),c.a.component(J.name,J),c.a.use(N.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const at={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function ct(t){const e=await new M.a(z),r={router:e,nuxt:{defaultTransition:at,transitions:[at],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},at,{name:t}):Object.assign({},at,t):at),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,r.context._errored=Boolean(e),e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(r){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=e,t&&(t.nuxt.error=e),e}},...Q},n=t?t.next:t=>r.router.push(t);let o;if(t)o=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base,e.options.mode);o=e.resolve(path).route}await v(r,{route:o,next:n,error:r.nuxt.error.bind(r),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});const l=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;const n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use(()=>{Object.prototype.hasOwnProperty.call(c.a,t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))};return await st(r.context,l),t&&t.url&&await new Promise((n,o)=>{e.push(t.url,n,()=>{const o=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,r.context.route=await y(e),r.context.params=e.params||{},r.context.query=e.query||{},o(),n()})})}),{app:r,router:e}}var ut={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}}};c.a.component(ut.name,ut),c.a.component("NLink",ut),global.fetch||(global.fetch=d.a);const lt=()=>new c.a({render:t=>t("div")});const pt=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(n.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http"),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=pt(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,serverRendered:!0};const{app:e,router:r}=await ct(t),n=new c.a(e);t.meta=n.$meta(),t.asyncData={};const o=async()=>{await Promise.all(t.beforeRenderFns.map(e=>w(e,{Components:x,nuxtState:t.nuxt})))},l=async()=>{const r=(V.options||V).layout,c="function"==typeof r?r.call(V,e.context):r;return t.nuxt.layout=c||"default",await n.loadLayout(c),n.setLayout(c),await o(),n},d=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),l()),x=m(r.match(t.url));let y=[];if(y=y.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await _(y,e.context),t.redirected)return lt();if(t.nuxt.error)return l();let v=x.length?x[0].options.layout:V.layout;if("function"==typeof v&&(v=v(e.context)),await n.loadLayout(v),t.nuxt.error)return l();if(v=n.setLayout(v),t.nuxt.layout=n.layoutName,y=[],v=f(v),v.options.middleware&&(y=y.concat(v.options.middleware)),x.forEach(t=>{t.options.middleware&&(y=y.concat(t.options.middleware))}),y=y.map(t=>"function"==typeof t?t:("function"!=typeof h[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),h[t])),await _(y,e.context),t.redirected)return lt();if(t.nuxt.error)return l();let C=!0;try{for(const t of x)if("function"==typeof t.options.validate&&(C=await t.options.validate(e.context),!C))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),l()}if(!C)return t._generate&&(t.nuxt.serverRendered=!1),d();if(!x.length)return d();const k=await Promise.all(x.map(r=>{const n=[];if(r.options.asyncData&&"function"==typeof r.options.asyncData){const o=w(r.options.asyncData,e.context);o.then(e=>(t.asyncData[r.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const r=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=r,t.options.data=function(){const data=r.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(r),e)),n.push(o)}else n.push(null);return r.options.fetch?n.push(r.options.fetch(e.context)):n.push(null),Promise.all(n)}));return t.nuxt.data=k.map(t=>t[0]||{}),t.redirected?lt():t.nuxt.error?l():(await o(),n)}}]);