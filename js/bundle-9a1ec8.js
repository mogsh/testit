webpackJsonp([11],{298:function(e,t,a){"use strict";function r(e){c||a(617)}Object.defineProperty(t,"__esModule",{value:!0});var n=a(407),i=a.n(n);for(var l in n)"default"!==l&&function(e){a.d(t,e,function(){return n[e]})}(l);var s=a(619),c=!1,o=a(21),u=r,d=o(i.a,s.a,!1,u,"data-v-08a0cb1f",null);d.options.__file="src\\component\\admin\\youCoin\\ShareCircleSetting.vue",t.default=d.exports},407:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(92),n=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={data:function(){return{image:[],shareCircle:null,shareCircleArr:[],shareCircleAll:[]}},methods:{makeshareCircleArr:function(){for(var e=[],t=[],a={num:null,count:null},r=0;r<this.shareCircle;r++)e[r]=r,t[r]=JSON.parse((0,n.default)(a));this.shareCircleArr=e,this.shareCircleAll=t},getSetting:function(){var e=this;this.$http.get(this.$api.getScopeConfig,{params:this.query}).then(function(t){if(t.data.flag&&t.data.data!=[]){var a=t.data.data;e.shareCircle=a.length;for(var r=[],i=0;i<e.shareCircle;i++)r[i]=i;e.shareCircleArr=r,e.shareCircleAll=JSON.parse((0,n.default)(a))}})},save:function(){var e=this,t={},a=[];this.shareCircleAll.forEach(function(e,t){var r={};r.completeCondition=Number(e.completeCondition),r.awardNum=Number(e.awardNum),a.push(r)}),t={jsonObjects:a};var r=(0,n.default)(t);this.$http.post(this.$api.setScopeConfig,r).then(function(t){t.data.flag?(e.$message.success("保存成功！"),e.getSetting()):e.$message.error(t.data.msg)})},cancel:function(){var e=this;this.$confirm("取消后将放弃保存，，请确认是否取消？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"取消成功!"}),e.getSetting()}).catch(function(){e.$message({type:"info",message:"放弃 [取消] 操作!"})})}},created:function(){this.getSetting()}}},617:function(e,t,a){var r=a(618);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(20)("83426a2c",r,!1)},618:function(e,t,a){t=e.exports=a(7)(!1),t.push([e.i,"\n.content .content-title[data-v-08a0cb1f] {\n  font-size: 18px;\n  font-family: MicrosoftYaHei-Bold;\n  color: #606266;\n  font-weight: bold;\n  margin: 0 10px 20px;\n}\n.input160[data-v-08a0cb1f] {\n  width: 160px;\n}\n.input130[data-v-08a0cb1f] {\n  width: 130px;\n}\n.block[data-v-08a0cb1f] {\n  border: 1px solid #dcdfe6;\n  border-radius: 4px;\n  padding: 20px 20px 0;\n  width: 100%;\n  margin-bottom: 20px;\n}\n",""])},619:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-head"},[e._v("柚豆管理")]),e._v(" "),a("el-breadcrumb",e._l(e.$route.meta.bread,function(t,r){return a("el-breadcrumb-item",{key:r},[e._v(e._s(t))])}))],1),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[e._v("发圈设置")]),e._v(" "),a("el-form",{attrs:{"label-width":"100px","label-position":"left"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"发圈获得柚豆",prop:""}},[a("el-input",{staticClass:"input130",attrs:{type:"number",placeholder:"填写任务数量"},on:{blur:e.makeshareCircleArr},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.makeshareCircleArr(t)}},model:{value:e.shareCircle,callback:function(t){e.shareCircle=t},expression:"shareCircle"}})],1)],1)],1),e._v(" "),Number(e.shareCircle)>0?a("el-row",{attrs:{gutter:18}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"block"},e._l(e.shareCircleArr,function(t,r){return a("el-form-item",{key:r,attrs:{label:"任务"+(r+1),prop:""}},[a("el-input",{staticClass:"input130",attrs:{type:"number",placeholder:"访问用户量"},model:{value:e.shareCircleAll[r].completeCondition,callback:function(t){e.$set(e.shareCircleAll[r],"completeCondition",t)},expression:"shareCircleAll[index].completeCondition"}}),e._v(" "),a("el-input",{staticClass:"input130",attrs:{type:"number",placeholder:"柚豆奖励"},model:{value:e.shareCircleAll[r].awardNum,callback:function(t){e.$set(e.shareCircleAll[r],"awardNum",t)},expression:"shareCircleAll[index].awardNum"}})],1)}))])],1):e._e()],1)],1),e._v(" "),a("el-button",{staticClass:"purple-bg mt20",staticStyle:{width:"100px"},on:{click:e.save}},[e._v("保存")]),e._v(" "),a("el-button",{staticClass:"orange-bg mt20",staticStyle:{width:"100px"},on:{click:e.cancel}},[e._v("取消")])],1)},n=[];r._withStripped=!0;var i={render:r,staticRenderFns:n};t.a=i}});