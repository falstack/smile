(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{225:function(t,e,n){},226:function(t,e,n){t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=46)}({0:function(t,e,i){"use strict";function n(t,e,i,n,o,s,r,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),r?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=l):o&&(l=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:u}}i.d(e,"a",(function(){return n}))},2:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n=function(t){return"[object Array]"===Object.prototype.toString.call(t)}},46:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-radio",class:["v-radio--"+t.size,{"v-radio--circle":t.circle},t.inline?"v-radio--hoz":"v-radio--ver"]},[t.isSingleLabel?i("div",{staticClass:"v-radio__item",class:{"is-disabled":t.disabled,"is-selected":t.selected},on:{click:t._singleToggle}},[i("div",{staticClass:"v-radio__label"}),t._v(" "),t.label?i("div",{staticClass:"v-radio__text",domProps:{textContent:t._s(t.label)}}):t._e()]):i("div",{staticClass:"v-radio__list"},t._l(t.label,(function(e){return i("div",{key:t.pureText?e:e.value,staticClass:"v-radio__item",class:[{"is-disabled":t.disabled||!t.pureText&&e.disabled||t.max&&t.selected.length>=t.max&&(t.isSingleValue?t.selected===(t.pureText?e:e.value):-1===t.selected.indexOf(t.pureText?e:e.value))},{"is-selected":t.isSingleValue?t.selected===(t.pureText?e:e.value):-1!==t.selected.indexOf(t.pureText?e:e.value)}],on:{click:function(i){return t._multiToggle(e)}}},[i("div",{staticClass:"v-radio__label"}),t._v(" "),i("div",{staticClass:"v-radio__text",domProps:{textContent:t._s(t.pureText?e:e.label)}})])})),0)])};n._withStripped=!0,i(61);var o=i(2),s={name:"VRadio",props:{value:{type:[Boolean,Array,Number,String],default:!1},label:{type:[String,Array],default:""},size:{type:String,default:"normal",validator:function(t){return~["normal","small"].indexOf(t)}},max:{type:Number,default:0},min:{type:Number,default:0},disabled:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},data:function(){var t=!Object(o.a)(this.label);return{selected:this.value,pureText:!!t||"string"==typeof this.label[0],isSingleValue:!Object(o.a)(this.value),isSingleLabel:t}},watch:{value:function(t){this.selected=t},selected:function(t){this.$emit("input",t),this.$emit("change",t)}},methods:{_singleToggle:function(){this.disabled||this.readonly||(this.selected=!this.selected)},_multiToggle:function(t){if(!(this.disabled||this.readonly||!this.pureText&&t.disabled))if(this.isSingleValue)this.selected=this.pureText?t:t.value;else{var e=this.selected.indexOf(this.pureText?t:t.value);if(-1===e)this.max&&this.selected.length>=this.max||this.selected.push(this.pureText?t:t.value);else{if(this.min&&this.selected.length<=this.min)return;this.selected.splice(e,1)}}},checkAll:function(t){var e=this;this.isSingleLabel?this.selected=t:t?(this.selected=[],this.label.forEach((function(t){e.selected.push(e.pureText?t:t.value)}))):this.selected=[]},toggleAll:function(){this.isSingleLabel?this.selected=!this.selected:this.checkAll(!this.selected.length)}}},r=i(0),a=Object(r.a)(s,n,[],!1,null,null,null);a.options.__file="src/components/radio/radio.vue";var l=a.exports;e.default=l},61:function(t,e,i){}})},267:function(t,e,n){},268:function(t,e,n){t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=50)}({0:function(t,e,i){"use strict";function n(t,e,i,n,s,a,o,r){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):s&&(l=r?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(c.functional){c._injectStyles=l;var h=c.render;c.render=function(t,e){return l.call(e),h(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}i.d(e,"a",(function(){return n}))},1:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"g",(function(){return s})),i.d(e,"c",(function(){return r})),i.d(e,"e",(function(){return l})),i.d(e,"d",(function(){return c})),i.d(e,"f",(function(){return h})),i.d(e,"b",(function(){return u}));var n=function(t,e){if(t){for(var i=t.className,n=(e||"").split(" "),s=0,a=n.length;s<a;s++){var r=n[s];r&&(t.classList?t.classList.add(r):o(t,r)||(i+=" "+r))}t.classList||(t.className=i)}},s=function(t,e){if(t&&e){for(var i=e.split(" "),n=" "+t.className+" ",s=0,r=i.length;s<r;s++){var l=i[s];l&&(t.classList?t.classList.remove(l):o(t,l)&&(n=n.replace(" "+l+" "," ")))}t.classList||(t.className=a(n))}},a=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},o=function(t,e){if(!t||!e)return!1;if(e.includes(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").includes(" "+e+" ")},r=function t(e,i){var n=-1;if(!i)return n;var s=i.endsWith("/")?i:"".concat(i,"/");if(e.map((function(t){return t.route})).forEach((function(t,e){if(t){var i=t.endsWith("/")?t:"".concat(t,"/");s===i&&(n=e)}})),-1!==n)return n;var a=s.split("/").filter((function(t){return t}));return a.length?(a.pop(),t(e,"/".concat(a.join("/"),"/"))):-1},l=function(t,e){var i=e?"scrollTop":"scrollLeft",n=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof n&&(n=window.document.documentElement[i]),n},c=function(t){var e=t.getBoundingClientRect(),i=l(window,!0),n=l(window),s=window.document.body,a=s.clientTop||0,o=s.clientLeft||0;return{top:e.top+i-a,left:e.left+n-o}},h=function(t){var e=t;if(!e)return null;for(;e&&"HTML"!==e.tagName&&"BOYD"!==e.tagName&&1===e.nodeType;){var i=window.getComputedStyle(e).overflowY;if("scroll"===i||"auto"===i)return"HTML"===e.tagName||"BODY"===e.tagName?document:e;e=e.parentNode}return document},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!t)return!1;var i=t.getBoundingClientRect();return i.top<window.innerHeight+e&&i.bottom+e>0&&i.left<window.innerWidth+e&&i.right+e>0}},11:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i(4);function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(){function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e.el,this.vertical=e.vertical||!1,this.disabled=e.disabled||!1,this.maxOffset=Math.abs(e.maxOffset||0),this.minOffset=-Math.abs(e.minOffset||0),this.startCallback=e.startCallback||null,this.moveCallback=e.moveCallback||null,this.endCallback=e.endCallback||null,this.lastOffset=0,this.offset=0,this.delta=0,this.prefix=Object(n.c)(),this.events={},this._bind(),this}var e,i;return e=t,(i=[{key:"disable",value:function(t){this.disabled=t}},{key:"scroll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=t;t>this.maxOffset?i=this.maxOffset:t<this.minOffset&&(i=this.minOffset),this.el.style["".concat(this.prefix,"transition-duration")]=e?"".concat(e,"ms"):"",this.el.style["".concat(this.prefix,"transform")]=this.vertical?"translateY(".concat(i,"px)"):"translateX(".concat(i,"px)"),this.offset=i,e&&(this.lastOffset=i)}},{key:"destroy",value:function(){var t=this.el,e=this.events;t&&(t.removeEventListener("touchstart",e.touchstart),t.removeEventListener("touchmove",e.touchmove),t.removeEventListener("touchend",e.touchend))}},{key:"_bind",value:function(){var t=this.el,e=this.events;t&&(e.touchstart=this._start.bind(this),e.touchmove=this._move.bind(this),e.touchend=this._end.bind(this),t.addEventListener("touchstart",e.touchstart),t.addEventListener("touchmove",e.touchmove),t.addEventListener("touchend",e.touchend))}},{key:"_start",value:function(t){if(t.stopPropagation(),!this.disabled){var e=t.touches[0];this.delta=this.vertical?e.pageY:e.pageX,this.startCallback&&this.startCallback()}}},{key:"_move",value:function(t){if(t.stopPropagation(),!this.disabled){var e=t.touches[0],i=(this.vertical?e.pageY:e.pageX)-this.delta,n=this.lastOffset+i;this.scroll(n),this.moveCallback&&this.moveCallback(this.offset)}}},{key:"_end",value:function(t){t.stopPropagation(),this.disabled||(this.lastOffset=this.offset,this.endCallback&&this.endCallback(this.offset))}}])&&s(e.prototype,i),t}()},12:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i(4);function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(e){var i=this;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.wrap=e.wrap,this.loop=e.loop,this.index=e.index,this.animated=e.animated,this.duration=e.duration,this.callback=e.callback,this._calcCssPrefix(),this._setupConst(),this.loop?setTimeout((function(){i._useAnimate(),i._cloneShadow(),i._bindEvents()}),0):(this._useAnimate(),this._cloneShadow(),this._bindEvents()),this}var e,i;return e=t,(i=[{key:"slide",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t===this.index||this.move||(this._lockEvent(1.2),this._animateSlide(t,this.index,e))}},{key:"next",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this.slides.length;1===e||this.touching||this.move||this.index===e-1&&!this.loop||t&&Date.now()-this.lastNextAt<t||this.slide(this.index+1,!0)}},{key:"destroy",value:function(){var t=this.el,e=this.events;t&&(t.removeEventListener("touchstart",e.touchstart,{passive:!0}),t.removeEventListener("touchmove",e.touchmove,{passive:!0}),t.removeEventListener("touchend",e.touchend,{passive:!0}))}},{key:"_updateEvents",value:function(t){this.destroy(),this.el=this.slides[t],this.index=t,this.events={},this._bindEvents()}},{key:"_setupConst",value:function(){this.slides=function(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(this.wrap.children),this.startAt=0,this.lastNextAt=0,this.move=!1,this.touching=!1,this.isMoveSlide=!1,this.maxDeltaPoint={x:0,y:0},this.deltaPoint={x:0,y:0},this.el=this.slides[this.index],this.events={}}},{key:"_cloneShadow",value:function(){var t=this.slides,e=this.index,i=this.offsetWidth;if(this.loop&&1!==t.length){var n=t[t.length-1].cloneNode(!0),s=t[0].cloneNode(!0);this.wrap.appendChild(n),this.wrap.appendChild(s),n.style.transform="translateX(".concat((-1-e)*i,"px)"),s.style.transform="translateX(".concat((t.length-e)*i,"px)"),this.beforeShadow=n,this.afterShadow=s}}},{key:"_useAnimate",value:function(){var t=this,e=this.wrap,i=e.offsetWidth;if(i||setTimeout((function(){t._useAnimate()}),100),this.offsetWidth=i,this.animated){var n=this.slides,s=this.index,a=n.length;if(a<=1)return e.style.visibility="visible",void[].forEach.call(n,(function(t){t.style.transform="translateX(0px)"}));e.style.width="".concat(100*a,"%");var o="".concat(100/a,"%");[].forEach.call(n,(function(t,e){t.style.width=o,t.style.transform="translateX(".concat((e-s)*i,"px)")})),e.style.visibility="visible"}else e.style.visibility="visible"}},{key:"_bindEvents",value:function(){var t=this.el,e=this.events;t&&(e.touchstart=this._start.bind(this),e.touchmove=this._move.bind(this),e.touchend=this._end.bind(this),t.addEventListener("touchstart",e.touchstart,{passive:!0}),t.addEventListener("touchmove",e.touchmove,{passive:!0}),t.addEventListener("touchend",e.touchend,{passive:!0}))}},{key:"_start",value:function(t){this.touching=!0;var e=t.touches[0];this.startPoint={x:e.pageX,y:e.pageY},this.startAt=+new Date}},{key:"_move",value:function(t){var e=t.touches[0],i=this.startPoint,n=this.maxDeltaPoint,s={x:e.pageX-i.x,y:e.pageY-i.y};if(this.maxDeltaPoint={x:Math.max(n.x,Math.abs(s.x)),y:Math.max(n.y,Math.abs(s.y))},this.deltaPoint=s,this.isMoveSlide=!0,this._lockedSwipeEvents(),!this._isVerticalScroll(this.maxDeltaPoint)&&this.animated&&!this._isEnded(s)){var a=s.x,o=a>0,r=this.slides,l=this.index,c=this.offsetWidth;this._translate(r[l],a),o?this._translate(r[l-1],a-c):this._translate(r[l+1],c+a),this._loopAdjust(o,l,a)}}},{key:"_end",value:function(){if(this.touching=!1,this.startAt&&this.isMoveSlide){this.isMoveSlide=!1,this._unlockSwipeEvents();var t=this.maxDeltaPoint,e=this.deltaPoint,i=this.offsetWidth,n=e.x>0;if(this.maxDeltaPoint={x:0,y:0},this._isVerticalScroll(t)||this._isEnded(e)||!this._isValidSlide(e)){if(!this.animated)return;var s=this.slides,a=this.index,o=this.duration;return this._translate(s[a],0,o),n?(this._translate(s[a-1],-i,o),this._translate(s[a+1],i)):(this._translate(s[a+1],i,o),this._translate(s[a-1],-i)),this.loop&&(n&&0===a?this._translate(this.beforeShadow,-i,o):n||a!==s.length-1||this._translate(this.afterShadow,i,o)),void this._lockEvent()}var r=n?this.index-1:this.index+1;if(this.animated){var l=this.slides,c=this.index,h=this.duration;this._translate(l[c],n?i:-i,h),this._translate(l[c-1],n?0:-i,n?h:0),this._translate(l[c+1],n?i:0,n?0:h),this.loop&&(r=this._loopJump(n,c,r))}this.callback&&this.callback(r),this._updateEvents(r),this._lockEvent()}}},{key:"_animateSlide",value:function(t,e,i){var n=this;if(this.animated){var s=this.offsetWidth,a=this.slides,o=this.duration,r=t<e;this._loopAdjust(r,t),this._translate(a[t],r?-s:s);var l=t;setTimeout((function(){n._translate(a[t],0,o),n._translate(a[e],r?s:-s,o),e!==t+1&&n._translate(a[t+1],s),e!==t-1&&n._translate(a[t-1],-s),n.loop&&(l=n._loopJump(r,e,t)),n._updateEvents(l),i&&setTimeout((function(){n.callback&&n.callback(l)}),n.duration)}),0)}}},{key:"_loopJump",value:function(t,e,i){var n,s=this.slides,a=this.duration,o=this.offsetWidth;return t&&0===e?(n=s.length-1,this._translate(this.beforeShadow,0,a),this._translate(this.afterShadow,o),this._loopReset(!0)):t||e!==s.length-1?n=i:(n=0,this._translate(this.afterShadow,0,a),this._translate(this.beforeShadow,-o),this._loopReset(!1)),n}},{key:"_loopAdjust",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(this.loop){var n=this.offsetWidth,s=this.slides;t&&0===e?this._translate(this.beforeShadow,i-n):t||e!==s.length-1||this._translate(this.afterShadow,n+i)}}},{key:"_loopReset",value:function(t){var e=this,i=this.offsetWidth,n=this.slides;setTimeout((function(){t?(e._translate(n[n.length-1],0,0),e._translate(n[n.length-2],-i,0),e._translate(e.beforeShadow,i,0)):(e._translate(n[0],0,0),e._translate(n[1],i,0),e._translate(e.afterShadow,-i,0))}),this.duration)}},{key:"_lockEvent",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.lastNextAt=Date.now(),this.move=!0,setTimeout((function(){t.move=!1}),this.duration*e)}},{key:"_lockedSwipeEvents",value:function(){this.animated&&(this.el.style["touch-action"]="none")}},{key:"_unlockSwipeEvents",value:function(){this.animated&&(this.el.style["touch-action"]="auto")}},{key:"_isVerticalScroll",value:function(t){return Math.abs(t.x)<1.5*Math.abs(t.y)}},{key:"_isValidSlide",value:function(t){var e=Math.abs(t.x),i=Number(+new Date-this.startAt)<250&&e>20||e>this.offsetWidth/2;return this.startAt=0,i}},{key:"_translate",value:function(t,e){var i=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;t&&(t.style["".concat(this.cssPrefix,"transition-duration")]=n?"".concat(n,"ms"):"",requestAnimationFrame((function(){t.style["".concat(i.cssPrefix,"transform")]="translateX(".concat(e,"px)")})))}},{key:"_isEnded",value:function(t){if(this.loop)return!1;var e=t.x>0;return e&&0===this.index||!e&&this.index===this.slides.length-1}},{key:"_calcCssPrefix",value:function(){this.animated&&(this.cssPrefix=Object(n.c)())}}])&&a(e.prototype,i),t}()},13:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"v-affix"},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.showFixedShim,expression:"showFixedShim"}],style:this.fixedShimStyle}),this._v(" "),e("div",{ref:"wrap",class:{"v-affix--fixed":!this.disabled&&this.isFixed},style:this.fixedSlotStyle},[this._t("default")],2)])};n._withStripped=!0,i(20);var s=i(4),a=i(1),o={name:"VAffix",props:{fixedTop:{type:Number},disabled:{type:Boolean,default:!1}},data:function(){return{isFixed:!1,showFixedShim:!1,fixedShimStyle:{},fixedSlotStyle:{}}},mounted:function(){var t=this;if(void 0!==this.fixedTop){var e=Object(a.f)(this.$el);Object(s.b)(e,"scroll",this.handleScroll),Object(s.b)(e,"resize",this.handleScroll),this.$nextTick((function(){t.handleScroll()}))}},beforeDestroy:function(){if(void 0!==this.fixedTop){var t=Object(a.f)(this.$el);Object(s.a)(t,"scroll",this.handleScroll),Object(s.a)(t,"resize",this.handleScroll)}},methods:{handleScroll:function(){var t=this.isFixed,e=Object(a.e)(window,!0),i=Object(a.d)(this.$el);if(i.top-this.fixedTop<=e&&!t){this.isFixed=!0;var n=this.$refs.wrap;this.fixedShimStyle={width:"".concat(n.clientWidth,"px"),height:"".concat(n.clientHeight,"px")},this.showFixedShim=!0,this.fixedSlotStyle={top:"".concat(this.fixedTop,"px"),left:"".concat(i.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-fixed",!0)}else i.top-this.fixedTop>e&&t&&(this.showFixedShim=!1,this.fixedShimStyle={},this.isFixed=!1,this.fixedSlotStyle=null,this.$emit("on-fixed",!1))}}},r=i(0),l=Object(r.a)(o,n,[],!1,null,null,null);l.options.__file="src/components/affix/affix.vue",e.a=l.exports},20:function(t,e,i){},4:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"a",(function(){return s})),i.d(e,"c",(function(){return a}));var n=function(){if("undefined"!=typeof window)return document.addEventListener?function(t,e,i){t&&e&&i&&t.addEventListener(e,i,!1)}:function(t,e,i){t&&e&&i&&t.attachEvent("on"+e,i)}}(),s=function(){if("undefined"!=typeof window)return document.removeEventListener?function(t,e,i){t&&e&&t.removeEventListener(e,i,!1)}:function(t,e,i){t&&e&&t.detachEvent("on"+e,i)}}(),a=function(){var t="",e=/^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,i=document.getElementsByTagName("script")[0].style;for(var n in i)e.test(n)&&(t="-"+n.match(e)[0].toLowerCase()+"-");return!t&&"WebkitOpacity"in i&&(t="-webkit-"),!t&&"KhtmlOpacity"in i&&(t="-khtml-"),t}},50:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-switcher"},[i("VAffix",{directives:[{name:"show",rawName:"v-show",value:t.headerCount>1,expression:"headerCount > 1"}],attrs:{"fixed-top":t.fixedTop,disabled:void 0===t.fixedTop||t.headerCount<=1}},[i("div",{ref:"headerWrap",staticClass:"v-switcher__header"},[i("div",{staticClass:"v-switcher__header__before"},[t._t("header-before")],2),t._v(" "),i("div",{staticClass:"v-switcher__header__after"},[t._t("header-after")],2),t._v(" "),i("div",{ref:"tabWrap",staticClass:"v-switcher__header__tabs__wrap"},[i("ul",{ref:"header",staticClass:"v-switcher__header__tabs__list",class:"v-switcher__header--"+t.align},[t._l(t.formatHeaders,(function(e,n){return i(t._computeItemName(e),t._b({key:n,ref:"tab",refInFor:!0,tag:"component",staticClass:"v-switcher__header__tabs__item",class:{"is-active":n===t.focusIndex},on:{click:function(e){return t._handleTabSwitch(n)}}},"component",t.routeName?"a"===t._computeItemName(e)?{href:e.path}:{to:e.path}:"",!1),[t._t("tab-"+n,[e.icon?i("i",{class:e.icon}):t._e(),t._v(" "),i("span",{domProps:{textContent:t._s(e.text)}})])],2)})),t._v(" "),i("div",{staticClass:"v-switcher__header__anchor",style:t.anchorStyle},[t._t("anchor")],2)],2)])])]),t._v(" "),!t.routeName&&t.headerCount>0?i("div",{ref:"content",staticClass:"v-switcher__content",class:"v-switcher__content--"+t.contentMode},[i("div",{ref:"contentWrap",staticClass:"v-switcher__content__wrap"},t._l(t.headers,(function(e,n){return i("div",{key:n,staticClass:"v-switcher__content__item",class:{"is-active":~t.displayContent.indexOf(n)}},[t._t(n)],2)})),0)]):t._e()],1)};n._withStripped=!0,i(68);var s=i(4),a=i(1),o=i(13),r=i(12),l=i(11),c={name:"VSwitcher",components:{VAffix:o.a},props:{headers:{type:Array,required:!0},defaultIndex:{type:Number,default:0},routeName:{type:String,default:""},align:{type:String,default:"start",validator:function(t){return~["around","start","center","end"].indexOf(t)}},anchorPadding:{type:Number,default:16,validator:function(t){return t>=0}},fixedTop:{type:Number},swipe:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},duration:{type:Number,default:300,validator:function(t){return t>=0}}},data:function(){return{focusIndex:this.routeName?Object(a.c)(this.headers,this.$route.path):this.defaultIndex,oldFocusIndex:-1,anchorStyle:{},slider:null,scroller:null,sizeCache:{tabs:[],header:null,tabsWrapWidth:0,headerWrapWidth:0,headerScrollMaxSize:0}}},computed:{displayContent:function(){var t=this.focusIndex;return"swipe"===this.contentMode?[this.oldFocusIndex,t-1,t,t+1]:[t]},formatHeaders:function(){var t=this,e=[];return this.headers.forEach((function(i,n){e.push({text:t._computeItemText(i,n),icon:t._computeItemIcon(i,n),path:t._computeItemPath(i)})})),e},headerCount:function(){return this.headers.length},contentMode:function(){return this.routeName?"click":this.sticky&&this.duration&&this.swipe?"swipe":!this.swipe||this.sticky&&this.duration?"click":"slide"}},mounted:function(){var t=this;this.$nextTick((function(){t._setComponentSize(),t._initSwipe(),t._initScroller(),t._computeAnchorStyle(t.focusIndex),t._computeHeaderStyle(0),t.$watch("headers",(function(e){t.$nextTick((function(){var i=t.focusIndex;t._setComponentSize(),t.routeName&&t._handleTabSwitch(Object(a.c)(e,t.$route.path)),i!==t.focusIndex&&(t._computeAnchorStyle(t.focusIndex),t._computeHeaderStyle(i))}))})),t.$watch("focusIndex",(function(e,i){t._computeAnchorStyle(e),t._computeHeaderStyle(i),t.$emit("change",e)})),t.routeName&&t.$watch("$route",(function(e){t._handleTabSwitch(Object(a.c)(t.headers,e.path))})),t.$emit("change",t.focusIndex),Object(s.b)(window,"resize",t._setComponentSize)}))},beforeDestroy:function(){Object(s.a)(window,"resize",this._setComponentSize),this.slider&&this.slider.destroy(),this.scroller&&this.scroller.destroy()},methods:{slide:function(t){t<0||t>this.headerCount-1||this._handleTabSwitch(t)},_initSwipe:function(){var t=this;"click"!==this.contentMode&&(this.slider=new r.a({wrap:this.$refs.contentWrap,loop:!1,index:this.focusIndex,animated:"swipe"===this.contentMode,duration:this.duration,callback:function(e){t.focusIndex=e}}))},_initScroller:function(){"start"===this.align&&(this.scroller=new l.a({el:this.$refs.header,minOffset:this.sizeCache.headerScrollMaxSize}))},_computeItemName:function(t){return this.routeName?t.path&&t.path.startsWith("http")?"a":this.routeName||"li":"li"},_handleTabSwitch:function(t){if(this.slider){if(this.slider.move)return;this.oldFocusIndex=this.focusIndex,this.slider.slide(t)}this.focusIndex=t,t<0&&(this.anchorStyle.transform="translateX(-100%)")},_computeHeaderStyle:function(t){var e=this;if(0!==this.sizeCache.headerScrollMaxSize){var i=this.focusIndex;if(!(i<0)){var n=this.scroller?this.scroller.offset:0,s=this.sizeCache.headerScrollMaxSize;if(i)if(i===this.headerCount-1)n=s;else{var a=this._getComponentSize("tabs",0).left,o=this._getComponentSize("tabs",i),r=function(){var t=e._getComponentSize("tabs",i+1).right-a-e.sizeCache.tabsWrapWidth;t>0&&(n=-t);var s=o.left-a;n+s<0&&(n=-s)};if(t>i){var l=this._getComponentSize("tabs",i-1);if(l.left+n<a){n=a-l.left;var c=o.right-a-this.sizeCache.tabsWrapWidth;c>n>0&&(n=-c)}else r()}else r()}else n=0;n<s?n=s:n>0&&(n=0),this.scroller&&this.scroller.scroll(n,this.duration)}}},_computeAnchorStyle:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!(t<0)){var n=this._getComponentSize("tabs",t);if(n){var s=+this.anchorPadding,a=this._getComponentSize("header"),o="around"===this.align;this.anchorStyle={width:"".concat(o?n.width:n.width-2*s,"px"),transform:"translateX(".concat(o?n.left-a.left:n.left-a.left+s,"px)"),transitionDuration:"".concat(this.duration,"ms")}}else i<5&&setTimeout((function(){e._computeAnchorStyle(e.focusIndex,i+1)}),200)}},_computeItemText:function(t,e){var i;if("string"==typeof t||"number"==typeof t)i=t;else if(i=t.label||t.name||t.text,this.focusIndex===e){var n=t["label-active"]||t["name-active"]||t["text-active"];n&&(i=n)}return i},_computeItemIcon:function(t,e){var i;return"string"!=typeof t&&"number"!=typeof t&&t.icon?(i=t.icon,this.focusIndex===e&&t["icon-active"]&&(i=t["icon-active"])):i="",i},_computeItemPath:function(t){return"string"==typeof t||"number"==typeof t?"":t.route||""},_setComponentSize:function(){var t=this.$refs.tab;if(t){var e=[];t.forEach((function(t){var i=t instanceof Element?t.getBoundingClientRect():t.$el.getBoundingClientRect();e.push({top:i.top,left:i.left,right:i.right,bottom:i.bottom,width:i.width,height:i.height})})),this.sizeCache.tabs=e}var i=this.$refs.headerWrap;i&&(this.sizeCache.headerWrapWidth=i.clientWidth);var n=this.$refs.tabWrap;n&&(this.sizeCache.tabsWrapWidth=n.clientWidth);var s=this.$refs.header;if(s){var a=s.getBoundingClientRect();this.sizeCache.header={top:a.top,left:a.left,right:a.right,bottom:a.bottom}}var o=this.sizeCache.tabs[this.headerCount-1].right-this.sizeCache.tabs[0].left;this.sizeCache.headerScrollMaxSize=o<this.sizeCache.tabsWrapWidth?0:this.sizeCache.tabsWrapWidth-o},_getComponentSize:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,i=this.sizeCache[t];return i?e>=0?i[e]?i[e]:null:i:null}}},h=i(0),u=Object(h.a)(c,n,[],!1,null,null,null);u.options.__file="src/components/switcher/switcher.vue";var d=u.exports;e.default=d},68:function(t,e,i){}})}}]);