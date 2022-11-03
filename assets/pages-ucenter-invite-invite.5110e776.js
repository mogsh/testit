import{T as a,an as A,ao as e,P as s,o as t,c as o,w as i,b as l,h as d,t as n,d as r,j as w,k,i as c}from"./index.8a89d12b.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";var g=m({computed:{uniStarterConfig:()=>a().globalData.config},data:()=>({about:{},code:"",isIos:"",showMask:!1,downloadUrl:{ios:"",android:""}}),created(){this.about=this.uniStarterConfig.about,this.downloadUrl=this.uniStarterConfig.download,this.year=(new Date).getFullYear();var a=navigator.userAgent,A=a.toLowerCase();this.isWeixin=-1!=A.indexOf("micromessenger"),this.isIos=!!a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},onLoad({code:a}){this.code=a,document.getElementById("openApp").style.display="none",document.getElementsByTagName("body")[0].style=""},methods:{download(){this.code&&A({data:this.code,complete:a=>{console.log(a),e(),document.getElementById("#clipboard").style.top="-999px",s()}}),this.isIos?window.location.href=this.downloadUrl.ios:this.isWeixin?this.showMask=!0:window.location.href=this.downloadUrl.android}}},[["render",function(a,A,e,s,m,g){const u=w,B=k,S=c;return t(),o(S,{class:"about"},{default:i((()=>[l(S,{class:"box"},{default:i((()=>[l(u,{class:"logoImg",src:m.about.logo},null,8,["src"]),l(B,{class:"tip appName"},{default:i((()=>[d(n(m.about.appName),1)])),_:1}),l(B,{class:"tip"},{default:i((()=>[d(n(m.about.slogan),1)])),_:1}),l(S,{onClick:g.download,id:"download"},{default:i((()=>[m.isIos?(t(),o(u,{key:0,class:"icon",src:"data:image/png;base64,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",mode:"widthFix"})):(t(),o(u,{key:1,class:"icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABQCAYAAACK5CKQAAAFmUlEQVR4Xu2cW+hmUxjGn+fCldxIzskFOUw5C+PGUCOUHJoh5JBBIowazSQZN+M0mByKIVwYLkZONSaEaRiHmomEMkbJKYQLxpSiR+/816f9/2Z9e61tv3v/5/taq76bb7/7We/67Xetvfda691EKS4E6KJSRFBAOgVBAVlAOhFwkuklIiWdAmAZydlOfidlJN0LYCvJO5LGDga9gDQ/JT0F4COSDzr4XSsh6UgAa0nu23VdA/3eQAaYvwM4iOTPXTZQ0usAHie5ust6qtp9g7wcwKkkL+2qgZJM+wKSZ3VVR0y3V5AhKl8E8ATJNcMOSdoDwH6VX7Vr/gHg+8rvB5J/RTR+AjCH5OeTDvLAMH4dFsAeCuAyABatezds/LsAXgbwEsktku4DsI3kbQ11Wpv3HpEB3nUALPquAbBP61ZMCWwF8A3JWU56jWR6BylpCYAbAezVyNN84zcAPEzylfxT2lv2BjI8SxrEue3dzlJ4EsA9JL/Ism5p1AtISbcDuBXALi39bXr6LwAWkLRxtNPSOUhJNwOwm8BMlW0Azib5ZpcOdApS0lUAVg414CsAnwD4G8BJAPZ3aOB3AN4POjHNHwGcQ/JDh7qiEp2BlHQRgFWRWmdVn/EkqW3jSE5rh6RfAew+pLsZwHkkP2tbX+z8TkBKOhzAO5HGrCM5p+pIGD+XtmjcFpIHD2k+A+DiiOazJGP/t6h+6tSuQI5qiNU5m+T2bijJuuF7rVsB2Dj8WtA5HcD9NZrzSD7vUOc0CXeQkuyKG8i6YmOaFY/xsSkTGydPJvlP0xPr7F1BSrJxaT2AGXm7aABmMcm7G9gnTb1BXmkTEslaZ95gM8lDPN3wBmkQDeY4lNNIvuXlqDfIT8egWw/Y3UXSXlldihtIxzuwS8MyRDaSPD7DLsvEE+RCexXLqnXnMVpC8gMPd9xAejgzzhpJkJLsAfdEALakatP39nayw6JSmCYbOxYk1w07LWleaK+9odm85nqSm/73c6SkL23VLyLwG4BjSX49OCbp7VD5OMFcWl33lmRzpcusbZFGrCRpM/rRMjIiJd0E4IEaKk+TvGJSQEraDYCtAR1R0+brST4SO14HclQ0VnWOJvmx/THuESnpQgDPJbqTbXA4JhukpKNsV0RGH11IcsWEgFwM4M5Em22FctcmIO3GYmNeqvw3xkxARNpySHI6b3jucwAo2rXDHbiAjIRRARnvW9UeVSIyNf7UHC8gW8CrnlpAFpBOBJxkSkQWkE4EnGRKRBaQTgScZEpEFpBOBJxkSkQWkE4EnGRKRBaQTgScZDqPyDJDHr9SzWbITaNmBbFaRVmzCTTqFr8WWGJkTRd6iOQNg+PjvtQQgie1pDx/VKJo7QYBSS8AODcCcxPJ46r/TwLIAHPjiHXtRSSXjwosz50WqavpdH9wlZm2QaDSu3x3WjRxeVIiskmbq7bJiMwVLiBzSSXsJNkuBdutME7lWpKPejjsGZFZy5keTjtqzCVp2bStixvIcMfbYHk0rb3qR2A5yUVeVXmDtCT2qwHYXW9nTRGxZCnbSTecI9mKqSvIoedK26S555B3OdtgbONn3bd6bAixvUmpMi1VLxhbut0gWSp1fqPjnYGMeZGZwLlDvuLQBcp6Xh21R6cRnQbGBWQDWHWmBWQBWU+gdO2prInYjWI7udw3qAKygEwPNuWunWaUZVFAZmFKGxWQaUZZFpIsgfKEhPEKkpYgGi2SLInKkqnqyrckD8hyysmo7+fInBmiM0murQF5BoBXE+1fTXK+E6MsmV5BhseXuu/8rCJ5ScpzSfaJRPvUbLT0/ehjTvQOMsB8zL50EmaI/gxZt2uafFhY0i0Azg9Jp/ZREvsw0oa6xMvUBWpzfEZAtnF4Zz23gHS6MgVkAelEwEmmRKQTyH8BrR3pb6LI9PYAAAAASUVORK5CYII=",mode:"widthFix"})),l(B,{class:"download-text"},{default:i((()=>[d(n(a.$t("invite.download")),1)])),_:1})])),_:1},8,["onClick"]),l(B,{class:"tip"},{default:i((()=>[d("version "+n(m.about.version),1)])),_:1})])),_:1}),l(S,{class:"copyright"},{default:i((()=>[l(B,{class:"hint"},{default:i((()=>[d(n(m.about.company),1)])),_:1})])),_:1}),m.showMask?(t(),o(S,{key:0,class:"mask"},{default:i((()=>[l(u,{src:"./assets/openImg.63ef9d70.png",mode:"widthFix"})])),_:1})):r("",!0)])),_:1})}],["__scopeId","data-v-d9606ae6"]]);export{g as default};
