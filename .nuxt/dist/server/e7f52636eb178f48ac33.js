/*! For license information please see LICENSES */
exports.ids=[21],exports.modules={120:function(t,e){t.exports={}},143:function(t,e,o){"use strict";o.r(e);o(120);class n{constructor({api:t,config:e,onSelectFile:o}){this.api=t,this.config=e,this.onSelectFile=o,this.nodes={wrapper:l("div",[this.CSS.baseClass,this.CSS.wrapper]),imageContainer:l("div",[this.CSS.imageContainer]),fileButton:this.createFileButton(),imageEl:void 0,imagePreloader:l("div",this.CSS.imagePreloader),caption:l("div",[this.CSS.input,this.CSS.caption],{contentEditable:!0})},this.nodes.caption.dataset.placeholder=this.config.captionPlaceholder,this.nodes.imageContainer.appendChild(this.nodes.imagePreloader),this.nodes.wrapper.appendChild(this.nodes.imageContainer),this.nodes.wrapper.appendChild(this.nodes.caption),this.nodes.wrapper.appendChild(this.nodes.fileButton)}get CSS(){return{baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,button:this.api.styles.button,wrapper:"image-tool",imageContainer:"image-tool__image",imagePreloader:"image-tool__image-preloader",imageEl:"image-tool__image-picture",caption:"image-tool__caption"}}static get status(){return{EMPTY:"empty",UPLOADING:"loading",FILLED:"filled"}}render(t){return t.file&&0!==Object.keys(t.file).length?this.toggleStatus(n.status.UPLOADING):this.toggleStatus(n.status.EMPTY),this.nodes.wrapper}createFileButton(){const button=l("div",[this.CSS.button]),input=document.createElement("input");return input.setAttribute("type","file"),input.setAttribute("accept","image/jpeg, image/png, image/jpg"),input.classList.add("image-tool__input"),button.innerHTML='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n    <path d="M3.15 13.628A7.749 7.749 0 0 0 10 17.75a7.74 7.74 0 0 0 6.305-3.242l-2.387-2.127-2.765 2.244-4.389-4.496-3.614 3.5zm-.787-2.303l4.446-4.371 4.52 4.63 2.534-2.057 3.533 2.797c.23-.734.354-1.514.354-2.324a7.75 7.75 0 1 0-15.387 1.325zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"/>\n</svg> 选择一张图片',button.appendChild(input),input.addEventListener("change",this.onSelectFile),button}showPreloader(t){this.nodes.imagePreloader.style.backgroundImage=`url(${t})`,this.toggleStatus(n.status.UPLOADING)}hidePreloader(){this.nodes.imagePreloader.style.backgroundImage="",this.toggleStatus(n.status.EMPTY)}fillImage(t){const e=/\.mp4$/.test(t)?"VIDEO":"IMG",o={src:t};let r="load";"VIDEO"===e&&(o.autoplay=!0,o.loop=!0,o.muted=!0,o.playsinline=!0,r="loadeddata"),this.nodes.imageEl=l(e,this.CSS.imageEl,o),this.nodes.imageEl.addEventListener(r,()=>{this.toggleStatus(n.status.FILLED),this.nodes.imagePreloader&&(this.nodes.imagePreloader.style.backgroundImage="")}),this.nodes.imageContainer.appendChild(this.nodes.imageEl)}fillCaption(text){this.nodes.caption&&(this.nodes.caption.innerHTML=text)}toggleStatus(t){for(const e in n.status)n.status.hasOwnProperty(e)&&this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${n.status[e]}`,t===n.status[e])}applyTune(t,e){this.nodes.wrapper.classList.toggle(`${this.CSS.wrapper}--${t}`,e)}}const l=function(t,e=null,o={}){const n=document.createElement(t);Array.isArray(e)?n.classList.add(...e):e&&n.classList.add(e);for(const t in o)n[t]=o[t];return n};class r{constructor({api:t,onChange:e}){this.api=t,this.onChange=e,this.buttons=[]}static get tunes(){return[]}get CSS(){return{wrapper:"",buttonBase:this.api.styles.settingsButton,button:"image-tool__tune",buttonActive:this.api.styles.settingsButtonActive}}render(t){const e=l("div",this.CSS.wrapper);return this.buttons=[],r.tunes.forEach(o=>{const n=l("div",[this.CSS.buttonBase,this.CSS.button],{innerHTML:o.icon,title:o.title});n.addEventListener("click",()=>{this.tuneClicked(o.name)}),n.dataset.tune=o.name,n.classList.toggle(this.CSS.buttonActive,t[o.name]),this.buttons.push(n),e.appendChild(n)}),e}tuneClicked(t){const button=this.buttons.find(e=>e.dataset.tune===t);button.classList.toggle(this.CSS.buttonActive,!button.classList.contains(this.CSS.buttonActive)),this.onChange(t)}}var d=o(34),h=o.n(d);class c{constructor({config:t,onUpload:e,onError:o}){this.config=t,this.onUpload=e,this.onError=o}uploadSelectedFile({onPreview:t}){const e=function(e){const o=new FileReader;o.readAsDataURL(e),o.onload=e=>{t(e.target.result)}};let o;o=this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile?h.a.selectFiles().then(t=>{e(t[0]);const o=this.config.uploader.uploadByFile(t[0]);return f(o)||console.warn("Custom uploader method uploadByFile should return a Promise"),o}):h.a.transport({url:this.config.endpoints.byFile,data:this.config.additionalRequestData,accept:this.config.types,headers:this.config.additionalRequestHeaders,beforeSend:t=>{e(t[0])},fieldName:this.config.field}).then(t=>t.body),o.then(t=>{this.onUpload(t)}).catch(t=>{this.onError(t)})}uploadByUrl(t){let e;this.config.uploader&&"function"==typeof this.config.uploader.uploadByUrl?(e=this.config.uploader.uploadByUrl(t),f(e)||console.warn("Custom uploader method uploadByUrl should return a Promise")):e=h.a.post({url:this.config.endpoints.byUrl,data:Object.assign({url:t},this.config.additionalRequestData),type:h.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then(t=>t.body),e.then(t=>{this.onUpload(t)}).catch(t=>{this.onError(t)})}uploadByFile(t,{onPreview:e}){const o=new FileReader;let n;if(o.readAsDataURL(t),o.onload=t=>{e(t.target.result)},this.config.uploader&&"function"==typeof this.config.uploader.uploadByFile)n=this.config.uploader.uploadByFile(t),f(n)||console.warn("Custom uploader method uploadByFile should return a Promise");else{const e=new FormData;e.append(this.config.field,t),this.config.additionalRequestData&&Object.keys(this.config.additionalRequestData).length&&Object.entries(this.config.additionalRequestData).forEach(([t,o])=>{e.append(t,o)}),n=h.a.post({url:this.config.endpoints.byFile,data:e,type:h.a.contentType.JSON,headers:this.config.additionalRequestHeaders}).then(t=>t.body)}n.then(t=>{this.onUpload(t)}).catch(t=>{this.onError(t)})}}function f(object){return Promise.resolve(object)===object}o.d(e,"default",(function(){return m}));class m{static get toolbox(){return{icon:'<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150.242V79c0-18.778-15.222-34-34-34H79c-18.778 0-34 15.222-34 34v42.264l67.179-44.192 80.398 71.614 56.686-29.14L291 150.242zm-.345 51.622l-42.3-30.246-56.3 29.884-80.773-66.925L45 174.187V197c0 18.778 15.222 34 34 34h178c17.126 0 31.295-12.663 33.655-29.136zM79 0h178c43.63 0 79 35.37 79 79v118c0 43.63-35.37 79-79 79H79c-43.63 0-79-35.37-79-79V79C0 35.37 35.37 0 79 0z"/></svg>',title:"图片"}}constructor({data:data,config:t,api:e}){this.api=e,this.config={endpoints:t.endpoints||"",additionalRequestData:t.additionalRequestData||{},additionalRequestHeaders:t.additionalRequestHeaders||{},field:t.field||"image",types:t.types||"image/*",captionPlaceholder:t.captionPlaceholder||"Caption",buttonContent:t.buttonContent||"",uploader:t.uploader||void 0},this.uploader=new c({config:this.config,onUpload:t=>this.onUpload(t),onError:t=>this.uploadingFailed(t)}),this.ui=new n({api:e,config:this.config,onSelectFile:t=>{const{files:e}=t.target;this.uploader.uploadByFile(e[0],{onPreview:t=>{this.ui.showPreloader(t)}})}}),this.tunes=new r({api:e,onChange:t=>this.tuneToggled(t)}),this._data={},this.data=data}render(){return this.ui.render(this.data)}save(){const caption=this.ui.nodes.caption;return this._data.caption=caption.innerHTML,this.data}renderSettings(){return this.tunes.render(this.data)}appendCallback(){this.ui.nodes.fileButton.click()}static get pasteConfig(){return{tags:["img"],patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png)$/i},files:{mimeTypes:["image/*"]}}}async onPaste(t){switch(t.type){case"tag":const image=t.detail.data;if(image.src.startsWith("blob:")){const t=await fetch(image.src),e=await t.blob();this.uploadFile(e);break}this.uploadUrl(image.src);break;case"pattern":const e=t.detail.data;this.uploadUrl(e);break;case"file":const o=t.detail.file;this.uploadFile(o)}}set data(data){this.image=data.file,this._data.caption=data.caption||"",this.ui.fillCaption(this._data.caption),r.tunes.forEach(({name:t})=>{const e=void 0!==data[t]&&data[t];this.setTune(t,e)})}get data(){return this._data}set image(t){this._data.file=t||{},t&&t.url&&this.ui.fillImage(t.url)}onUpload(t){t.success&&t.file?this.image=t.file:this.uploadingFailed("incorrect response: "+JSON.stringify(t))}uploadingFailed(t){console.log("Image Tool: uploading failed because of",t),this.api.notifier.show({message:"图片上传失败",style:"error"}),this.ui.hidePreloader()}tuneToggled(t){this.setTune(t,!this._data[t])}setTune(t,e){if(this._data[t]=e,this.ui.applyTune(t,e),"stretched"===t){const t=this.api.blocks.getCurrentBlockIndex();setTimeout(()=>{this.api.blocks.stretchBlock(t,e)},0)}}uploadFile(t){this.uploader.uploadByFile(t,{onPreview:t=>{this.ui.showPreloader(t)}})}uploadUrl(t){this.ui.showPreloader(t),this.uploader.uploadByUrl(t)}validate(t){return!(!t.file||!t.file.url)}}}};
//# sourceMappingURL=e7f52636eb178f48ac33.js.map