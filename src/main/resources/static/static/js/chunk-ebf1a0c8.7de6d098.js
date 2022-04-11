(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebf1a0c8"],{4272:function(e,t,o){},a012:function(e,t,o){"use strict";o("4272")},a819:function(e,t,o){},b953:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,autocomplete:"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v(e._s(e.siteData.siteName))])]),o("el-form-item",{attrs:{prop:"userName"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),o("el-input",{ref:"userName",attrs:{placeholder:"用户名",name:"userName",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),o("el-form-item",{attrs:{prop:"realName"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),o("el-input",{ref:"realName",attrs:{placeholder:"姓名",name:"realName",type:"text",tabindex:"1",autocomplete:"on"},model:{value:e.loginForm.realName,callback:function(t){e.$set(e.loginForm,"realName",t)},expression:"loginForm.realName"}})],1),o("el-tooltip",{attrs:{content:"Caps lock is On",placement:"right",manual:""},model:{value:e.capsTooltip,callback:function(t){e.capsTooltip=t},expression:"capsTooltip"}},[o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"密码",name:"password",tabindex:"2",autocomplete:"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1)],1),o("div",{staticStyle:{position:"relative"}},[o("el-row",{attrs:{gutter:24}},[o("el-col",{attrs:{span:16}},[o("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{type:"warning",icon:"el-icon-user-solid"},nativeOn:{click:function(t){return t.preventDefault(),e.handleReg(t)}}},[e._v("注册")])],1),o("el-col",{attrs:{span:8}},[o("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{icon:"el-icon-s-promotion"},nativeOn:{click:function(t){return t.preventDefault(),e.toLogin(t)}}},[e._v("去登录")])],1)],1)],1)],1)],1)},s=[],r=o("5530"),n=o("2f62"),i={computed:Object(r["a"])({},Object(n["b"])(["siteData"])),data:function(){var e=function(e,t,o){t.length<5?o(new Error("用户名不能小于5个字符")):o()},t=function(e,t,o){t.length<5?o(new Error("密码不能小于5个字符")):o()},o=function(e,t,o){t.length<2?o(new Error("用户姓名不能为空！")):o()};return{loginForm:{userName:"",realName:"",password:""},loginRules:{userName:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}],realName:[{required:!0,trigger:"blur",validator:o}]},passwordType:"password",capsTooltip:!1,loading:!1,redirect:void 0,otherQuery:{}}},methods:{toLogin:function(){this.$router.push({name:"Login"})},showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleReg:function(){var e=this;this.$refs.loginForm.validate((function(t){if(!t)return console.log("提交错误！"),!1;e.loading=!0,e.$store.dispatch("user/reg",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/",query:e.otherQuery}),e.loading=!1})).catch((function(){e.loading=!1}))}))}}},l=i,c=(o("f28e"),o("a012"),o("2877")),p=Object(c["a"])(l,a,s,!1,null,"680ac3bc",null);t["default"]=p.exports},f28e:function(e,t,o){"use strict";o("a819")}}]);