import{K as o,p as e,X as a,o as t,c as s,w as i,b as n,h as m,j as r,i as l,k as c,r as u,ae as p}from"./index.8a89d12b.js";import{_ as f}from"./uni-match-media.6fe608e4.js";import{r as d}from"./uni-app.es.42fcfc95.js";import{_ as b}from"./uni-easyinput.64e4af28.js";import{_ as h}from"./uni-id-pages-sms-form.eb559907.js";import{_ as g}from"./uni-popup-captcha.d98a8542.js";import{m as D}from"./store.e01ffa37.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./uni-icons.41c57c15.js";import"./uni-captcha.cd5060ee.js";import"./uni-popup.344f4fa2.js";var _=j({data:()=>({formData:{mobile:"",code:"",captcha:""},focusMobile:!0,logo:"/static/logo.png"}),computed:{tipText(){return`验证码已通过短信发送至 ${this.formData.mobile}。密码为6 - 20位`}},onLoad(o){},onReady(){},methods:{submit(){if(!/^1\d{10}$/.test(this.formData.mobile))return this.focusMobile=!0,o({title:"手机号码格式不正确",icon:"none"});if(!/^\d{6}$/.test(this.formData.code))return this.$refs.smsForm.focusSmsCodeInput=!0,o({title:"验证码格式不正确",icon:"none"});console.log(this.formData);e.importObject("uni-id-co").bindMobileBySms(this.formData).then((e=>{console.log(e),o({title:e.errMsg,icon:"none"}),this.getOpenerEventChannel(),D.setUserInfo(this.formData),a()})).catch((o=>{console.log(o),"uni-id-captcha-required"==o.errCode&&this.$refs.popup.open()})).finally((o=>{this.formData.captcha=""}))}}},[["render",function(o,e,a,D,j,_){const y=r,V=l,x=c,C=d(u("uni-match-media"),f),M=d(u("uni-easyinput"),b),$=d(u("uni-id-pages-sms-form"),h),v=p,U=d(u("uni-popup-captcha"),g);return t(),s(V,{class:"uni-content"},{default:i((()=>[n(C,{"min-width":690},{default:i((()=>[n(V,{class:"login-logo"},{default:i((()=>[n(y,{src:j.logo},null,8,["src"])])),_:1}),n(x,{class:"title title-box"},{default:i((()=>[m("绑定手机号")])),_:1})])),_:1}),n(M,{clearable:"",focus:j.focusMobile,onBlur:e[0]||(e[0]=o=>j.focusMobile=!1),type:"number",class:"input-box",inputBorder:!1,modelValue:j.formData.mobile,"onUpdate:modelValue":e[1]||(e[1]=o=>j.formData.mobile=o),maxlength:"11",placeholder:"请输入手机号"},null,8,["focus","modelValue"]),n($,{ref:"smsForm",type:"bind-mobile-by-sms",modelValue:j.formData.code,"onUpdate:modelValue":e[2]||(e[2]=o=>j.formData.code=o),phone:j.formData.mobile},null,8,["modelValue","phone"]),n(v,{class:"uni-btn send-btn-box",type:"primary",onClick:_.submit},{default:i((()=>[m("提交")])),_:1},8,["onClick"]),n(U,{onConfirm:_.submit,modelValue:j.formData.captcha,"onUpdate:modelValue":e[3]||(e[3]=o=>j.formData.captcha=o),scene:"bind-mobile-by-sms",ref:"popup"},null,8,["onConfirm","modelValue"])])),_:1})}],["__scopeId","data-v-23166667"]]);export{_ as default};