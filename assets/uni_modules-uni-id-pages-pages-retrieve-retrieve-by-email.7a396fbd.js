var e=Object.defineProperty,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(o,a,s)=>a in o?e(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,t=(e,t)=>{for(var l in t||(t={}))a.call(t,l)&&r(e,l,t[l]);if(o)for(var l of o(t))s.call(t,l)&&r(e,l,t[l]);return e};import{p as l,l as i,v as u,o as m,c as n,w as d,b as c,h as p,j as f,i as h,k as w,r as b,ae as g}from"./index.8a89d12b.js";import{_}from"./uni-match-media.6fe608e4.js";import{r as y}from"./uni-app.es.42fcfc95.js";import{_ as D}from"./uni-easyinput.64e4af28.js";import{_ as j}from"./uni-forms-item.cb4a0bc6.js";import{_ as k}from"./uni-id-pages-email-form.56102835.js";import{_ as v}from"./uni-forms.c148bd57.js";import{_ as C}from"./uni-popup-captcha.d98a8542.js";import{m as V}from"./login-page.mixin.eb2ba011.js";import{p as P}from"./password.08b98a18.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";import"./uni-icons.41c57c15.js";import"./uni-captcha.cd5060ee.js";import"./uni-popup.344f4fa2.js";import"./store.e01ffa37.js";const B=l.importObject("uni-id-co",{errorOptions:{type:"toast"}});var $=x({mixins:[V],data:()=>({lock:!1,focusEmail:!0,focusPassword:!1,focusPassword2:!1,formData:{email:"",code:"",password:"",password2:"",captcha:""},rules:t({email:{rules:[{required:!0,errorMessage:"请输入邮箱"},{format:"email",errorMessage:"邮箱格式不正确"}]},code:{rules:[{required:!0,errorMessage:"请输入邮箱验证码"},{pattern:/^.{6}$/,errorMessage:"请输入6位验证码"}]}},P.getPwdRules()),logo:"/static/logo.png"}),computed:{isEmail(){return/@/.test(this.formData.email)},isPwd(){return/^.{6,20}$/.test(this.formData.password)},isCode(){return/^\d{6}$/.test(this.formData.code)}},onLoad(e){e&&e.emailNumber&&(this.formData.email=e.emailNumber,e.lock&&(this.lock=e.lock,this.focusEmail=!0))},onReady(){this.formData.email&&this.$refs.shortCode.start(),this.$refs.form.setRules(this.rules)},onShow(){document.onkeydown=e=>{var o=e||window.event;o&&13==o.keyCode&&this.submit()}},methods:{submit(){console.log("formData",this.formData),console.log("rules",this.rules),this.$refs.form.validate().then((e=>{let{email:o,password:a,captcha:s,code:r}=this.formData;B.resetPwdByEmail({email:o,code:r,password:a,captcha:s}).then((e=>{console.log(e),i({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd",complete:e=>{console.log(e)}})})).catch((e=>{"uni-id-captcha-required"==e.errCode&&this.$refs.popup.open()})).finally((e=>{this.formData.captcha=""}))})).catch((e=>{let o=e[0].key;if("code"==o)return console.log(this.$refs.shortCode),this.$refs.shortCode.focusSmsCodeInput=!0;o=o.replace(o[0],o[0].toUpperCase()),console.log(o,"focus"+o),this["focus"+o]=!0}))},retrieveByPhone(){i({url:"/uni_modules/uni-id-pages/pages/retrieve/retrieve"})},backLogin(){u({url:"/uni_modules/uni-id-pages/pages/login/login-withpwd"})}}},[["render",function(e,o,a,s,r,t){const l=f,i=h,u=w,V=y(b("uni-match-media"),_),P=y(b("uni-easyinput"),D),x=y(b("uni-forms-item"),j),B=y(b("uni-id-pages-email-form"),k),$=g,O=y(b("uni-forms"),v),E=y(b("uni-popup-captcha"),C);return m(),n(i,{class:"uni-content"},{default:d((()=>[c(V,{"min-width":690},{default:d((()=>[c(i,{class:"login-logo"},{default:d((()=>[c(l,{src:r.logo},null,8,["src"])])),_:1}),c(u,{class:"title title-box"},{default:d((()=>[p("通过邮箱验证码找回密码")])),_:1})])),_:1}),c(O,{ref:"form",value:r.formData,"err-show-type":"toast"},{default:d((()=>[c(x,{name:"email"},{default:d((()=>[c(P,{focus:r.focusEmail,onBlur:o[0]||(o[0]=e=>r.focusEmail=!1),class:"input-box",disabled:r.lock,inputBorder:!1,modelValue:r.formData.email,"onUpdate:modelValue":o[1]||(o[1]=e=>r.formData.email=e),placeholder:"请输入邮箱"},null,8,["focus","disabled","modelValue"])])),_:1}),c(x,{name:"code"},{default:d((()=>[c(B,{ref:"shortCode",email:r.formData.email,type:"reset-pwd-by-email",modelValue:r.formData.code,"onUpdate:modelValue":o[2]||(o[2]=e=>r.formData.code=e)},null,8,["email","modelValue"])])),_:1}),c(x,{name:"password"},{default:d((()=>[c(P,{focus:r.focusPassword,onBlur:o[3]||(o[3]=e=>r.focusPassword=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.password,"onUpdate:modelValue":o[4]||(o[4]=e=>r.formData.password=e),placeholder:"请输入新密码"},null,8,["focus","modelValue"])])),_:1}),c(x,{name:"password2"},{default:d((()=>[c(P,{focus:r.focusPassword2,onBlur:o[5]||(o[5]=e=>r.focusPassword2=!1),class:"input-box",type:"password",inputBorder:!1,modelValue:r.formData.password2,"onUpdate:modelValue":o[6]||(o[6]=e=>r.formData.password2=e),placeholder:"请再次输入新密码"},null,8,["focus","modelValue"])])),_:1}),c($,{class:"uni-btn send-btn-box",type:"primary",onClick:t.submit},{default:d((()=>[p("提交")])),_:1},8,["onClick"]),c(V,{"min-width":690},{default:d((()=>[c(i,{class:"link-box"},{default:d((()=>[c(u,{class:"link",onClick:t.retrieveByPhone},{default:d((()=>[p("通过手机验证码找回密码")])),_:1},8,["onClick"]),c(i),c(u,{class:"link",onClick:t.backLogin},{default:d((()=>[p("返回登录")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["value"]),c(E,{onConfirm:t.submit,modelValue:r.formData.captcha,"onUpdate:modelValue":o[7]||(o[7]=e=>r.formData.captcha=e),scene:"reset-pwd-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-62fc7cb5"]]);export{$ as default};