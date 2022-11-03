import{a9 as e,az as i,aA as o,K as s,l as n,o as t,c as a,w as l,b as r,h as p,e as u,F as c,j as d,i as g,k as m,ae as h,r as f}from"./index.8a89d12b.js";import{_ as y}from"./uni-id-pages-agreements.cd3ccb07.js";import{r as b}from"./uni-app.es.42fcfc95.js";import{_}from"./uni-easyinput.64e4af28.js";import{_ as k}from"./uni-id-pages-fab-login.3d93798e.js";import{m as x}from"./login-page.mixin.eb2ba011.js";import{_ as P}from"./plugin-vue_export-helper.21dcd24c.js";import"./uni-popup-dialog.07617231.js";import"./uni-popup.344f4fa2.js";import"./uni-icons.41c57c15.js";import"./store.e01ffa37.js";var w=P({mixins:[x],data:()=>({type:"",phone:"",focusPhone:!1,logo:"/static/logo.png"}),computed:{loginTypes:async()=>e.loginTypes,isPhone(){return/^1\d{10}$/.test(this.phone)},imgSrc(){return"/uni_modules/uni-id-pages/static/login/"+this.type+".png"}},async onLoad(o){console.log(o);let s=o.type||e.loginTypes[0];this.type=s,"univerify"!=s&&(this.focusPhone=!0),this.$nextTick((()=>{["weixin","apple"].includes(s)&&(this.$refs.uniFabLogin.servicesList=this.$refs.uniFabLogin.servicesList.filter((e=>e.id!=s)))})),i("uni-id-pages-set-login-type",(e=>{this.type=e}))},onShow(){document.onkeydown=e=>{var i=e||window.event;i&&13==i.keyCode&&this.toSmsPage()}},onUnload(){o("uni-id-pages-set-login-type")},onReady(){},methods:{quickLogin(e){var i,o;let s={};(null==(i=e.detail)?void 0:i.code)&&(s.phoneNumberCode=e.detail.code),("weixinMobile"!==this.type||(null==(o=e.detail)?void 0:o.code))&&this.$refs.uniFabLogin.login_before(this.type,!0,s)},toSmsPage(){return console.log("toSmsPage",this.agree),this.isPhone?this.needAgreements&&!this.agree?this.$refs.agreements.popup(this.toSmsPage):void n({url:"/uni_modules/uni-id-pages/pages/login/login-smscode?phoneNumber="+this.phone}):(this.focusPhone=!0,s({title:"手机号码格式不正确",icon:"none"}))},toPwdLogin(){n({url:"../login/password"})},chooseArea(){s({title:"暂不支持其他国家",icon:"none"})}}},[["render",function(e,i,o,s,n,x){const P=d,w=g,L=m,j=h,v=b(f("uni-id-pages-agreements"),y),C=b(f("uni-easyinput"),_),S=b(f("uni-id-pages-fab-login"),k);return t(),a(w,{class:"uni-content"},{default:l((()=>[r(w,{class:"login-logo"},{default:l((()=>[r(P,{src:n.logo},null,8,["src"])])),_:1}),r(L,{class:"title"},{default:l((()=>[p("请选择登录方式")])),_:1}),["apple","weixin","weixinMobile"].includes(n.type)?(t(),u(c,{key:0},[r(L,{class:"tip"},{default:l((()=>[p("将根据第三方账号服务平台的授权范围获取你的信息")])),_:1}),r(w,{class:"quickLogin"},{default:l((()=>["weixinMobile"!==n.type?(t(),a(P,{key:0,onClick:x.quickLogin,src:x.imgSrc,mode:"widthFix",class:"quickLoginBtn"},null,8,["onClick","src"])):(t(),a(j,{key:1,type:"primary","open-type":"getPhoneNumber",onGetphonenumber:x.quickLogin},{default:l((()=>[p("微信授权手机号登录")])),_:1},8,["onGetphonenumber"])),r(v,{scope:"register",ref:"agreements"},null,512)])),_:1})],64)):(t(),u(c,{key:1},[r(L,{class:"tip"},{default:l((()=>[p("未注册的账号验证通过后将自动注册")])),_:1}),r(w,{class:"phone-box"},{default:l((()=>[r(w,{onClick:x.chooseArea,class:"area"},{default:l((()=>[p("+86")])),_:1},8,["onClick"]),r(C,{focus:n.focusPhone,onBlur:i[0]||(i[0]=e=>n.focusPhone=!1),class:"input-box",type:"number",inputBorder:!1,modelValue:n.phone,"onUpdate:modelValue":i[1]||(i[1]=e=>n.phone=e),maxlength:"11",placeholder:"请输入手机号"},null,8,["focus","modelValue"])])),_:1}),r(v,{scope:"register",ref:"agreements"},null,512),r(j,{class:"uni-btn",type:"primary",onClick:x.toSmsPage},{default:l((()=>[p("获取验证码")])),_:1},8,["onClick"])],64)),r(S,{ref:"uniFabLogin"},null,512)])),_:1})}],["__scopeId","data-v-bc7ce1ec"]]);export{w as default};