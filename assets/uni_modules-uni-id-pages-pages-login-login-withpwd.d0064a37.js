import{p as e,l as s,K as a,o as t,c as i,w as o,b as n,h as r,d as u,t as l,j as c,i as p,k as d,r as m,ae as f}from"./index.8a89d12b.js";import{_ as h}from"./uni-easyinput.64e4af28.js";import{r as g}from"./uni-app.es.42fcfc95.js";import{_}from"./uni-forms-item.cb4a0bc6.js";import{_ as w}from"./uni-forms.c148bd57.js";import{_ as b}from"./uni-captcha.cd5060ee.js";import{_ as j}from"./uni-id-pages-agreements.cd3ccb07.js";import{_ as C}from"./uni-id-pages-fab-login.3d93798e.js";import{m as k}from"./login-page.mixin.eb2ba011.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import"./uni-icons.41c57c15.js";import"./uni-popup-dialog.07617231.js";import"./uni-popup.344f4fa2.js";import"./store.e01ffa37.js";const v=e.importObject("uni-id-co",{errorOptions:{type:"toast"}});var x=y({mixins:[k],data:()=>({password:"",username:"",captcha:"",needCaptcha:!1,focusUsername:!1,focusPassword:!1,logo:"/static/logo.png"}),onShow(){document.onkeydown=e=>{var s=e||window.event;s&&13==s.keyCode&&this.pwdLogin()}},methods:{toRetrievePwd(){let e="/uni_modules/uni-id-pages/pages/retrieve/retrieve";/^1\d{10}$/.test(this.username)&&(e+=`?phoneNumber=${this.username}`),s({url:e})},pwdLogin(){if(!this.password.length)return this.focusPassword=!0,a({title:"请输入密码",icon:"none"});if(!this.username.length)return this.focusUsername=!0,a({title:"请输入手机号/用户名/邮箱",icon:"none"});if(this.needCaptcha&&4!=this.captcha.length)return this.$refs.captcha.getImageCaptcha(),a({title:"请输入验证码",icon:"none"});if(this.needAgreements&&!this.agree)return this.$refs.agreements.popup(this.pwdLogin);let e={password:this.password,captcha:this.captcha};/^1\d{10}$/.test(this.username)?e.mobile=this.username:/@/.test(this.username)?e.email=this.username:e.username=this.username,v.login(e).then((e=>{this.loginSuccess(e)})).catch((e=>{"uni-id-captcha-required"==e.errCode?this.needCaptcha=!0:this.needCaptcha&&this.$refs.captcha.getImageCaptcha()}))},toRegister(){s({url:this.config.isAdmin?"/uni_modules/uni-id-pages/pages/register/register-admin":"/uni_modules/uni-id-pages/pages/register/register",fail(e){console.error(e)}})}}},[["render",function(e,s,a,k,y,v){const x=c,V=p,U=d,P=g(m("uni-easyinput"),h),$=g(m("uni-forms-item"),_),L=g(m("uni-forms"),w),A=g(m("uni-captcha"),b),B=g(m("uni-id-pages-agreements"),j),R=f,I=g(m("uni-id-pages-fab-login"),C);return t(),i(V,{class:"uni-content"},{default:o((()=>[n(V,{class:"login-logo"},{default:o((()=>[n(x,{src:y.logo},null,8,["src"])])),_:1}),n(U,{class:"title title-box"},{default:o((()=>[r("账号密码登录")])),_:1}),n(L,null,{default:o((()=>[n($,{name:"username"},{default:o((()=>[n(P,{focus:y.focusUsername,onBlur:s[0]||(s[0]=e=>y.focusUsername=!1),class:"input-box",inputBorder:!1,modelValue:y.username,"onUpdate:modelValue":s[1]||(s[1]=e=>y.username=e),placeholder:"请输入手机号/用户名/邮箱"},null,8,["focus","modelValue"])])),_:1}),n($,{name:"password"},{default:o((()=>[n(P,{focus:y.focusPassword,onBlur:s[2]||(s[2]=e=>y.focusPassword=!1),class:"input-box",clearable:"",type:"password",inputBorder:!1,modelValue:y.password,"onUpdate:modelValue":s[3]||(s[3]=e=>y.password=e),placeholder:"请输入密码"},null,8,["focus","modelValue"])])),_:1})])),_:1}),y.needCaptcha?(t(),i(A,{key:0,focus:"",ref:"captcha",scene:"login-by-pwd",modelValue:y.captcha,"onUpdate:modelValue":s[4]||(s[4]=e=>y.captcha=e)},null,8,["modelValue"])):u("",!0),n(B,{scope:"login",ref:"agreements"},null,512),n(R,{class:"uni-btn",type:"primary",onClick:v.pwdLogin},{default:o((()=>[r("登录")])),_:1},8,["onClick"]),n(V,{class:"link-box"},{default:o((()=>[e.config.isAdmin?u("",!0):(t(),i(V,{key:0},{default:o((()=>[n(U,{class:"forget"},{default:o((()=>[r("忘记了？")])),_:1}),n(U,{class:"link",onClick:v.toRetrievePwd},{default:o((()=>[r("找回密码")])),_:1},8,["onClick"])])),_:1})),n(U,{class:"link",onClick:v.toRegister},{default:o((()=>[r(l(e.config.isAdmin?"注册管理员账号":"注册账号"),1)])),_:1},8,["onClick"])])),_:1}),n(I,{ref:"uniFabLogin"},null,512)])),_:1})}],["__scopeId","data-v-648e4a98"]]);export{x as default};