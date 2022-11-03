import{X as e,R as t,K as s,L as o,aa as a,ab as l,V as i,W as n,o as d,c as r,w as c,b as u,h,t as p,e as f,F as g,d as k,ac as m,k as _,j as w,i as S,ad as b,ae as y,af as P}from"./index.8a89d12b.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";const x="UNI_ADMIN_UPGRADE_CENTER_LOCAL_FILE_PATH";let v,L=null;var T=F({data:()=>({installForBeforeFilePath:"",installed:!1,installing:!1,downloadSuccess:!1,downloading:!1,downLoadPercent:0,downloadedSize:0,packageFileSize:0,tempFilePath:"",title:"更新日志",contents:"",is_mandatory:!1,subTitle:"发现新版本",downLoadBtnTextiOS:"立即跳转更新",downLoadBtnText:"立即下载更新",downLoadingText:"安装包下载中，请稍后"}),onLoad({local_storage_key:s}){if(!s)return console.error("local_storage_key为空，请检查后重试"),void e();const o=t(s);if(!o)return console.error("安装包信息为空，请检查后重试"),void e();const a=["version","url","type"];for(let t in o)if(-1!==a.indexOf(t)&&!o[t])return console.error(`参数 ${t} 必填，请检查后重试`),void e();Object.assign(this,o),this.checkLocalStoragePackage()},onBackPress(){if(this.is_mandatory)return!0;L&&L.abort()},onHide(){v=null},computed:{isWGT(){return"wgt"===this.type},isiOS(){return!this.isWGT&&this.platform.includes("iOS")},isAppStore(){return this.isiOS||!this.isiOS&&!this.isWGT&&-1===this.url.indexOf(".apk")}},methods:{checkLocalStoragePackage(){const e=t(x);if(e){const{version:t,savedFilePath:s,installed:o}=e;o||0!==function(e="0",t="0"){e=String(e).split("."),t=String(t).split(".");const s=Math.min(e.length,t.length);let o=0;for(let a=0;a<s;a++){const s=Number(e[a]),l=Number(t[a]);if(s>l){o=1;break}if(s<l){o=-1;break}}if(0===o&&e.length!==t.length){const a=e.length>t.length,l=a?e:t;for(let e=s;e<l.length;e++)if(Number(l[e])>0){o=a?1:-1;break}}return o}(t,this.version)?this.deleteSavedFile(s):(this.downloadSuccess=!0,this.installForBeforeFilePath=s,this.tempFilePath=s)}},async closeUpdate(){return this.downloading?this.is_mandatory?s({title:"下载中，请稍后……",icon:"none",duration:500}):void o({title:"是否取消下载？",cancelText:"否",confirmText:"是",success:t=>{t.confirm&&(L&&L.abort(),e())}}):this.downloadSuccess&&this.tempFilePath?(await this.saveFile(this.tempFilePath,this.version),void e()):void e()},updateApp(){this.checkStoreScheme().catch((()=>{this.downloadPackage()}))},checkStoreScheme(){const e=(this.store_list||[]).filter((e=>e.enable));return e&&e.length?(e.sort(((e,t)=>t.priority-e.priority)).map((e=>e.scheme)).reduce(((e,t,s)=>(v=(e||(e=Promise.reject())).catch((()=>new Promise(((e,s)=>{plus.runtime.openURL(t,(e=>{s(e)}))})))),v)),v),v):Promise.reject()},downloadPackage(){this.downloading=!0,L=a({url:this.url,success:e=>{200==e.statusCode&&(this.downloadSuccess=!0,this.tempFilePath=e.tempFilePath,this.is_mandatory&&this.installPackage())},complete:()=>{this.downloading=!1,this.downLoadPercent=0,this.downloadedSize=0,this.packageFileSize=0,L=null}}),L.onProgressUpdate((e=>{this.downLoadPercent=e.progress,this.downloadedSize=(e.totalBytesWritten/Math.pow(1024,2)).toFixed(2),this.packageFileSize=(e.totalBytesExpectedToWrite/Math.pow(1024,2)).toFixed(2)}))},installPackage(){},restart(){this.installed=!1},saveFile:(e,t)=>new Promise(((s,o)=>{l({tempFilePath:e,success({savedFilePath:e}){i(x,{version:t,savedFilePath:e})},complete(){s()}})})),deleteSavedFile:e=>(n(x),uni.removeSavedFile({filePath:e})),jumpToAppStore(){plus.runtime.openURL(this.url)}}},[["render",function(e,t,s,o,a,l){const i=_,n=w,F=S,x=b,v=y,L=P;return d(),r(F,{class:"mask flex-center"},{default:c((()=>[u(F,{class:"content botton-radius"},{default:c((()=>[u(F,{class:"content-top"},{default:c((()=>[u(i,{class:"content-top-text"},{default:c((()=>[h(p(a.title),1)])),_:1}),u(n,{class:"content-top",style:{top:"0"},width:"100%",height:"100%",src:"./assets/bg_top.84172c45.png"})])),_:1}),u(F,{class:"content-header"}),u(F,{class:"content-body"},{default:c((()=>[u(F,{class:"title"},{default:c((()=>[u(i,null,{default:c((()=>[h(p(a.subTitle),1)])),_:1})])),_:1}),u(F,{class:"body"},{default:c((()=>[u(x,{class:"box-des-scroll","scroll-y":"true"},{default:c((()=>[u(i,{class:"box-des"},{default:c((()=>[h(p(a.contents),1)])),_:1})])),_:1})])),_:1}),u(F,{class:"footer flex-center"},{default:c((()=>[l.isAppStore?(d(),r(v,{key:0,class:"content-button",style:{border:"none",color:"#fff"},plain:"",onClick:l.jumpToAppStore},{default:c((()=>[h(p(a.downLoadBtnTextiOS),1)])),_:1},8,["onClick"])):(d(),f(g,{key:1},[a.downloadSuccess?a.downloadSuccess&&!a.installed?(d(),r(v,{key:1,class:"content-button",style:{border:"none",color:"#fff"},plain:"",loading:a.installing,disabled:a.installing,onClick:l.installPackage},{default:c((()=>[h(p(a.installing?"正在安装……":"下载完成，立即安装"),1)])),_:1},8,["loading","disabled","onClick"])):k("",!0):(d(),f(g,{key:0},[a.downloading?(d(),r(F,{key:0,class:"progress-box flex-column"},{default:c((()=>[u(L,{class:"progress","border-radius":"35",percent:a.downLoadPercent,activeColor:"#3DA7FF","show-info":"","stroke-width":"10"},null,8,["percent"]),u(F,{style:{width:"100%","font-size":"28rpx",display:"flex","justify-content":"space-around"}},{default:c((()=>[u(i,null,{default:c((()=>[h(p(a.downLoadingText),1)])),_:1}),u(i,null,{default:c((()=>[h("("+p(a.downloadedSize)+"/"+p(a.packageFileSize)+"M)",1)])),_:1})])),_:1})])),_:1})):(d(),r(v,{key:1,class:"content-button",style:{border:"none",color:"#fff"},plain:"",onClick:l.updateApp},{default:c((()=>[h(p(a.downLoadBtnText),1)])),_:1},8,["onClick"]))],64)),a.installed&&l.isWGT?(d(),r(v,{key:2,class:"content-button",style:{border:"none",color:"#fff"},plain:"",onClick:l.restart},{default:c((()=>[h(" 安装完毕，点击重启 ")])),_:1},8,["onClick"])):k("",!0)],64))])),_:1})])),_:1}),a.is_mandatory?k("",!0):(d(),r(n,{key:0,class:"close-img",src:"./assets/app_update_close.91137466.png",onClick:m(l.closeUpdate,["stop"])},null,8,["onClick"]))])),_:1})])),_:1})}],["__scopeId","data-v-3d0b982d"]]);export{T as default};