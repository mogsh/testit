webpackJsonp([10],{297:function(t,e,a){"use strict";function r(t){l||a(614)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(406),o=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);var i=a(616),l=!1,u=a(21),c=r,p=u(o.a,i.a,!1,c,"data-v-6fbfeae2",null);p.options.__file="src\\component\\admin\\youCoin\\ShareGroupSetting.vue",e.default=p.exports},406:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(92),n=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default={data:function(){return{image:[],shareGroup:null,shareGroupArr:[],shareGroupAll:[]}},methods:{makeshareGroupArr:function(){for(var t=[],e=[],a={num:null,count:null},r=0;r<this.shareGroup;r++)t[r]=r,e[r]=JSON.parse((0,n.default)(a));this.shareGroupArr=t,this.shareGroupAll=e},getSetting:function(){var t=this;this.$http.get(this.$api.getGroupConfig,{params:this.query}).then(function(e){if(e.data.flag&&e.data.data!=[]){var a=e.data.data;t.shareGroup=a.length;for(var r=[],o=0;o<t.shareGroup;o++)r[o]=o;t.shareGroupArr=r,t.shareGroupAll=JSON.parse((0,n.default)(a))}})},save:function(){var t=this,e={},a=[];this.shareGroupAll.forEach(function(t,e){var r={};r.completeCondition=Number(t.completeCondition),r.awardNum=Number(t.awardNum),a.push(r)}),e={jsonObjects:a};var r=(0,n.default)(e);this.$http.post(this.$api.setGroupConfig,r).then(function(e){e.data.flag?(t.$message.success("保存成功！"),t.getSetting()):t.$message.error(e.data.msg)})},cancel:function(){var t=this;this.$confirm("取消后将放弃保存，，请确认是否取消？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message({type:"success",message:"取消成功!"}),t.getSetting()}).catch(function(){t.$message({type:"info",message:"放弃 [取消] 操作!"})})}},created:function(){this.getSetting()}}},614:function(t,e,a){var r=a(615);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a(20)("35b036f2",r,!1)},615:function(t,e,a){e=t.exports=a(7)(!1),e.push([t.i,"\n.content .content-title[data-v-6fbfeae2] {\n  font-size: 18px;\n  font-family: MicrosoftYaHei-Bold;\n  color: #606266;\n  font-weight: bold;\n  margin: 0 10px 20px;\n}\n.input160[data-v-6fbfeae2] {\n  width: 160px;\n}\n.input130[data-v-6fbfeae2] {\n  width: 130px;\n}\n.block[data-v-6fbfeae2] {\n  border: 1px solid #dcdfe6;\n  border-radius: 4px;\n  padding: 20px 20px 0;\n  width: 100%;\n  margin-bottom: 20px;\n}\n",""])},616:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-head"},[t._v("柚豆管理")]),t._v(" "),a("el-breadcrumb",t._l(t.$route.meta.bread,function(e,r){return a("el-breadcrumb-item",{key:r},[t._v(t._s(e))])}))],1),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[t._v("发群设置")]),t._v(" "),a("el-form",{attrs:{"label-width":"100px","label-position":"left"}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"发群获得柚豆",prop:""}},[a("el-input",{staticClass:"input130",attrs:{type:"number",placeholder:"填写任务数量"},on:{blur:t.makeshareGroupArr},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.makeshareGroupArr(e)}},model:{value:t.shareGroup,callback:function(e){t.shareGroup=e},expression:"shareGroup"}})],1)],1)],1),t._v(" "),Number(t.shareGroup)>0?a("el-row",{attrs:{gutter:18}},[a("el-col",{attrs:{span:22,offset:1}},[a("div",{staticClass:"block"},t._l(t.shareGroupArr,function(e,r){return a("el-form-item",{key:r,attrs:{label:"任务"+(r+1),prop:""}},[a("el-input",{staticClass:"input130",attrs:{type:"number",placeholder:"分享群数量"},model:{value:t.shareGroupAll[r].completeCondition,callback:function(e){t.$set(t.shareGroupAll[r],"completeCondition",e)},expression:"shareGroupAll[index].completeCondition"}}),t._v(" "),a("el-input",{staticClass:"input130",attrs:{type:"number",placeholder:"柚豆奖励"},model:{value:t.shareGroupAll[r].awardNum,callback:function(e){t.$set(t.shareGroupAll[r],"awardNum",e)},expression:"shareGroupAll[index].awardNum"}})],1)}))])],1):t._e()],1)],1),t._v(" "),a("el-button",{staticClass:"purple-bg mt20",staticStyle:{width:"100px"},on:{click:t.save}},[t._v("保存")]),t._v(" "),a("el-button",{staticClass:"orange-bg mt20",staticStyle:{width:"100px"},on:{click:t.cancel}},[t._v("取消")])],1)},n=[];r._withStripped=!0;var o={render:r,staticRenderFns:n};e.a=o}});