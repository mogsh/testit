import{p as t,o as e,c as i,w as s,a as c,d as r,j as d,i as a}from"./index.8a89d12b.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var h=l({name:"cloud-image",emits:["click"],props:{mode:{type:String,default:()=>"widthFix"},src:{default:()=>""},width:{type:String,default:()=>"100rpx"},height:{type:String,default:()=>"100rpx"}},watch:{src:{handler(e){e&&"cloud://"==e.substring(0,8)?t.getTempFileURL({fileList:[e]}).then((t=>{this.cSrc=t.fileList[0].tempFileURL})):this.cSrc=e},immediate:!0}},async mounted(){},methods:{onClick(){this.$emit("click")}},data:()=>({cSrc:!1})},[["render",function(t,l,h,o,n,m){const p=d,u=a;return e(),i(u,{onClick:m.onClick,style:c({width:h.width,height:h.height})},{default:s((()=>[n.cSrc?(e(),i(p,{key:0,style:c({width:h.width,height:h.height}),src:n.cSrc,mode:h.mode},null,8,["style","src","mode"])):r("",!0)])),_:1},8,["onClick","style"])}]]);export{h as _};
