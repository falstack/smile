exports.ids=[21],exports.modules={169:function(e,t,o){"use strict";o.r(t);o(48),o(17);var c=o(30),r=o.n(c),n=(o(49),o(31)),l=o.n(n),d=o(41),h=o.n(d),m=o(11),f={name:"UserSign",components:{VForm:l.a,VField:r.a},data:()=>({loading:!1,access:"",secret:""}),methods:{handleSubmit(){this.access&&this.secret&&(this.loading||(this.loading=!0,Object(m.b)(this,{access:this.access,secret:this.secret,remember:!0}).then(e=>{h.a.set("JWT-TOKEN",e,{expires:365}),this.$route.query.from?window.location=decodeURIComponent(this.$route.query.from):this.$toast.info("登录成功")}).catch(e=>{this.$toast.error(e.message),this.loading=!1})))}}},x=o(1);var component=Object(x.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VForm",{attrs:{id:"user-sign",loading:e.loading,full:""},on:{submit:e.handleSubmit}},[o("VField",{attrs:{label:"账号"},model:{value:e.access,callback:function(t){e.access=t},expression:"access"}}),e._v(" "),o("VField",{attrs:{label:"密码",attr:{type:"password"}},model:{value:e.secret,callback:function(t){e.secret=t},expression:"secret"}})],1)}),[],!1,(function(e){}),null,"bce62166");t.default=component.exports},48:function(e,t){e.exports={}},49:function(e,t){e.exports={}}};