/*! For license information please see LICENSES */
exports.ids=[20],exports.modules={134:function(t,e,o){var content=o(135);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),o(3).default("6a52202c",content,!0)},135:function(t,e,o){(e=o(2)(!1)).push([t.i,'@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}@-webkit-keyframes skeleton{0%{width:60%}50%{width:100%}to{width:60%}}.image-tool{--bg-color:#cdd1e0;--border-color:#e8e8eb}.image-tool__image{overflow:hidden}.image-tool__image-picture{max-width:100%;vertical-align:bottom;display:block;margin:0 auto!important}.image-tool__image-preloader{width:50px;height:50px;border-radius:50%;background-size:cover;margin:auto;position:relative;background-color:var(--bg-color);background-position:50%}.image-tool__image-preloader:after{content:"";position:absolute;z-index:3;width:60px;height:60px;border-radius:50%;border:2px solid var(--bg-color);border-top:2px solid var(#ff6881);left:50%;top:50%;margin-top:-30px;margin-left:-30px;-webkit-animation:image-preloader-spin 2s linear infinite;animation:image-preloader-spin 2s linear infinite;box-sizing:border-box}.image-tool__caption{display:inline-block;position:relative;width:auto!important;left:50%!important;-webkit-transform:translateX(-50%)!important;transform:translateX(-50%)!important;text-align:center!important;box-shadow:none!important;border-top-width:0!important;border-left-width:0!important;border-right-width:0!important;border-radius:0!important;min-width:115px!important;border-color:#e7e7e7}.image-tool__caption:before{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.image-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute!important;content:"图片描述";color:#707684;font-weight:400;opacity:0;width:auto}.image-tool__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.image-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.image-tool--empty .image-tool__caption,.image-tool--empty .image-tool__image,.image-tool--filled .cdx-button,.image-tool--filled .image-tool__image-preloader,.image-tool--loading .image-tool__caption{display:none}.image-tool--loading .image-tool__image{min-height:200px;display:-webkit-box;display:flex;border:1px solid var(--border-color);background-color:#fff}.image-tool--loading .cdx-button,.image-tool--loading .image-tool__image-picture{display:none}.image-tool--withBorder .image-tool__image{border:1px solid var(silver)}.image-tool--withBackground .image-tool__image{padding:15px;background:var(#f4f4f4)}.image-tool--withBackground .image-tool__image-picture{max-width:60%;margin:0 auto}.image-tool--stretched .image-tool__image-picture{width:100%}@-webkit-keyframes image-preloader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes image-preloader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""]),t.exports=e},158:function(t,e,o){"use strict";o.r(e);o(134);class n{constructor({api:t,config:e,onSelectFile:o}){this.api=t,this.config=e,this.onSelectFile=o,this.nodes={wrapper:r("div",[this.CSS.baseClass,this.CSS.wrapper]),imageContainer:r("div",[this.CSS.imageContainer]),fileButton:this.createFileButton(),imageEl:void 0,imagePreloader:r("div",this.CSS.imagePreloader),caption:r("div",[this.CSS.input,this.CSS.caption],{contentEditable:!0})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),this.nodes.wrapper.appendChild(this.nodes.imageContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)}get CSS(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"image-tool",imageContainer:"image-tool__image",imagePreloader:"image-tool__image-preloader",imageEl:"image-tool__image-picture",caption:"image-tool__caption"}}static get status(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}render(t){return t.file&&0!==Object.keys(t.file).length?this.toggleStatus(n.status.UPLOADING):this.toggleStatus(n.status.EMPTY),this.nodes.wrapper}createFileButton(){const button=r("div",[this.CSS.button]);return button.innerHTML=this.config.buttonContent||'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n    <path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/>\n</svg> 选择一张图片',button.addEventListener("click",()=>{this.onSelectFile()}),button}showPreloader(t){this.nodes.imagePreloader.style.backgroundImage=`url(${t})`,this.toggleStatus(n.status.UPLOADING)}hidePreloader(){this.nodes.imagePreloader.style.backgroundImage="",this.toggleStatus(n.status.EMPTY)}fillImage(t){const e=/\.mp4$/.test(t)?"VIDEO":"IMG",o={src:t};let l="load";"VIDEO"===e&&(o.autoplay=!0,o.loop=!0,o.muted=!0,o.playsinline=!0,l="loadeddata"),this.nodes.imageEl=r(e,this.CSS.imageEl,o),this.nodes.imageEl.addEventListener(l,()=>{this.toggleStatus(n.status.FILLED),this.nodes.imagePreloader&&(this.nodes.imagePreloader.style.backgroundImage="")}),this.nodes.imageContainer.appendChild(this.nodes.imageEl)}fillCaption(text){this.nodes.caption&&(this.nodes.caption.innerHTML=text)}toggleStatus(t){for(const e in n.status)n.status.hasOwnProperty(e)&&this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${n.status[e]}`,t===n.status[e])}applyTune(t,e){this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${t}`,e)}}const r=function(t,e=null,o={}){const n=document.createElement(t);Array.isArray(e)?n.classList.add(...e):e&&n.classList.add(e);for(const t in o)n[t]=o[t];return n};class l{constructor({api:t,onChange:e}){this.api=t,this.onChange=e,this.buttons=[]}static get tunes(){return[]}get CSS(){return{wrapper:"",buttonBase:this.api.styles.settingsButton,button:"image-tool__tune",buttonActive:this.api.styles.settingsButtonActive}}render(t){const e=r("div",this.CSS.wrapper);return this.buttons=[],l.tunes.forEach(o=>{const n=r("div",[this.CSS.buttonBase,this.CSS.button],{innerHTML:o.icon,title:o.title});n.addEventListener("click",()=>{this.tuneClicked(o.name)}),n.dataset.tune=o.name,n.classList.toggle(this.CSS.buttonActive,t[o.name]),this.buttons.push(n),e.appendChild(n)}),e}tuneClicked(t){const button=this.buttons.find(e=>e.dataset.tune===t);button.classList.toggle(this.CSS.buttonActive,!button.classList.contains(this.CSS.buttonActive)),this.onChange(t)}}var d=o(38),c=o.n(d);class h{constructor({config:t,onUpload:e,onError:o}){this.config=t,this.onUpload=e,this.onError=o}uploadSelectedFile({onPreview:t}){const e=function(e){const o=new FileReader;o.readAsDataURL(e),o.onload=e=>{t(e.target.result)}};let o;o=this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile?c.a.selectFiles().then(t=>{e(t[0]);const o=this.config.uploader.uploadByFile(t[0]);return m(o)||console.warn("Custom uploader method uploadByFile should return a Promise"),o}):c.a.transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types,headers:this.config.additionalRequestHeaders,beforeSend:t=>{e(t[0])},fieldName:this.config.field}).then(t=>t.body),o.then(t=>{this.onUpload(t)}).catch(t=>{this.onError(t)})}uploadByUrl(t){let e;this.config.uploader&&"function"==typeof this.config.uploader.uploadByUrl?(e=this.config.uploader.uploadByUrl(t),m(e)||console.warn("Custom uploader method uploadByUrl should return a Promise")):e=c.a.post({url:this.config.endpoints.byUrl,data:Object.assign({url:t},this.config.additionalRequestData),type:c.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then(t=>t.body),e.then(t=>{this.onUpload(t)}).catch(t=>{this.onError(t)})}uploadByFile(t,{onPreview:e}){const o=new FileReader;let n;if(o.readAsDataURL(t),o.onload=t=>{e(t.target.result)},this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile)n=this.config.uploader.uploadByFile(t),m(n)||console.warn("Custom uploader method uploadByFile should return a Promise");else{const e=new FormData;e.append(this.config.field,t),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach(([t,o])=>{e.append(t,o)}),n=c.a.post({url:this.config.endpoints.byFile,data:e,type:c.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then(t=>t.body)}n.then(t=>{this.onUpload(t)}).catch(t=>{this.onError(t)})}}function m(object){return Promise.resolve(object)===object}o.d(e,"default",(function(){return f}));class f{static get toolbox(){return{icon:'<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"/></svg>',title:"图片"}}constructor({data:data,config:t,api:e}){this.api=e,this.config={endpoints:t.endpoints||"",additionalRequestData:t.additionalRequestData||{},additionalRequestHeaders:t.additionalRequestHeaders||{},field:t.field||"image",types:t.types||"image/*",captionPlaceholder:t.captionPlaceholder||"Caption",buttonContent:t.buttonContent||"",uploader:t.uploader||void 0},this.uploader=new h({config:this.config,onUpload:t=>this.onUpload(t),onError:t=>this.uploadingFailed(t)}),this.ui=new n({api:e,config:this.config,onSelectFile:()=>{this.uploader.uploadSelectedFile({onPreview:t=>{this.ui.showPreloader(t)}})}}),this.tunes=new l({api:e,onChange:t=>this.tuneToggled(t)}),this._data={},this.data=data}render(){return this.ui.render(this.data)}save(){const caption=this.ui.nodes.caption;return this._data.caption=caption.innerHTML,this.data}renderSettings(){return this.tunes.render(this.data)}appendCallback(){this.ui.nodes.fileButton.click()}static get pasteConfig(){return{tags:["img"],patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i},files:{mimeTypes:["image/*"]}}}async onPaste(t){switch(t.type){case"tag":const image=t.detail.data;if(image.src.startsWith("blob:")){const t=await fetch(image.src),e=await t.blob();this.uploadFile(e);break}this.uploadUrl(image.src);break;case"pattern":const e=t.detail.data;this.uploadUrl(e);break;case"file":const o=t.detail.file;this.uploadFile(o)}}set data(data){this.image=data.file,this._data.caption=data.caption||"",this.ui.fillCaption(this._data.caption),l.tunes.forEach(({name:t})=>{const e=void 0!==data[t]&&data[t];this.setTune(t,e)})}get data(){return this._data}set image(t){this._data.file=t||{},t&&t.url&&this.ui.fillImage(t.url)}onUpload(t){t.success&&t.file?this.image=t.file:this.uploadingFailed("incorrect response: "+JSON.stringify(t))}uploadingFailed(t){console.log("Image Tool: uploading failed because of",t),this.api.notifier.show({message:"图片上传失败，请刷新网页重试",style:"error"}),this.ui.hidePreloader()}tuneToggled(t){this.setTune(t,!this._data[t])}setTune(t,e){if(this._data[t]=e,this.ui.applyTune(t,e),"stretched"===t){const t=this.api.blocks.getCurrentBlockIndex();setTimeout(()=>{this.api.blocks.stretchBlock(t,e)},0)}}uploadFile(t){this.uploader.uploadByFile(t,{onPreview:t=>{this.ui.showPreloader(t)}})}uploadUrl(t){this.ui.showPreloader(t),this.uploader.uploadByUrl(t)}validate(t){return!(!t.file||!t.file.url)}}}};
//# sourceMappingURL=ab47bebd079ab94d1bf4.js.map