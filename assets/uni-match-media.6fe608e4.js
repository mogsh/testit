import{aw as t,ax as e,ay as i,o as a,c as h,w as d,m as n,i as s}from"./index.8a89d12b.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";let m;var o=r({name:"UniMatchMedia",props:{width:{type:[Number,String],default:""},minWidth:{type:[Number,String],default:""},maxWidth:{type:[Number,String],default:""},height:{type:[Number,String],default:""},minHeight:{type:[Number,String],default:""},maxHeight:{type:[Number,String],default:""},orientation:{type:String,default:""}},data:()=>({matches:!0}),mounted(){m=t(this),m.observe({width:this.width,maxWidth:this.maxWidth,minWidth:this.minWidth,height:this.height,minHeight:this.minHeight,maxHeight:this.maxHeight,orientation:this.orientation},(t=>{this.matches=t}))},destroyed(){m.disconnect()}},[["render",function(t,r,m,o,u,g){const p=s;return e((a(),h(p,null,{default:d((()=>[n(t.$slots,"default",{},void 0,!0)])),_:3},512)),[[i,u.matches]])}],["__scopeId","data-v-56c28188"]]);export{o as _};
