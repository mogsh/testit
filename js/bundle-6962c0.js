webpackJsonp([103],{314:function(t,e,i){"use strict";function s(t){n||i(665)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(423),r=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);var l=i(667),n=!1,c=i(21),u=s,f=c(r.a,l.a,!1,u,"data-v-391bf842",null);f.options.__file="src\\component\\admin\\backstage\\CheckLogistics.vue",e.default=f.exports},423:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{ruleForm:{logisticsName:"",tel:"",officialUrl:"",isUp:!1},rules:{logisticsName:[{required:!0,message:"请输入内容",trigger:"blur"}],tel:[{required:!0,message:"请输入内容",trigger:"blur"}],officialUrl:[{required:!0,message:"请输入内容",trigger:"blur"}],isUp:[{required:!0,message:"请输入内容",trigger:"change"}]}}},methods:{getLogisticsData:function(){var t=this,e=this.$route.params.id;this.$http.get(this.$api.findLogisticsConf,{params:{logisticsConfId:e}}).then(function(e){e.data.data.isUp=Boolean(e.data.data.isUp),t.ruleForm=e.data.data})},save:function(){var t=this,e=this,i=this.ruleForm;i.isUp?i.isUp=1:i.isUp=0,this.$http.get(this.$api.updateLogisticsConf,{params:i}).then(function(i){i.data.flag&&(t.$message.success("保存成功！"),e.$router.go(-1))})},cancel:function(){var t=this;this.$confirm("取消后将放弃修改直接返回上一页，是否取消修改？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$message.success("取消成功！"),t.$router.go(-1)}).catch(function(){t.$message.info("放弃 [取消] 操作！")})},del:function(){var t=this;this.$confirm("是否确认删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var e=t.$route.params.id;t.$http.get(t.$api.delLogisticsConf,{params:{logisticsConfId:e}}).then(function(e){e.data.flag&&(t.$message.success("删除成功！"),t.$router.go(-1))})}).catch(function(){t.$message.info("放弃 [删除] 操作！")})}},created:function(){this.getLogisticsData()}}},665:function(t,e,i){var s=i(666);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(20)("214c2b48",s,!1)},666:function(t,e,i){e=t.exports=i(7)(!1),e.push([t.i,"\n.content-title[data-v-391bf842] {\n  font-size: 18px;\n  font-family: MicrosoftYaHei-Bold;\n  color: #606266;\n  font-weight: bold;\n  margin: 0 10px 20px;\n}\n",""])},667:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"breadcrumb"},[i("div",{staticClass:"breadcrumb-head"},[t._v("后台管理")]),t._v(" "),i("el-breadcrumb",t._l(t.$route.meta.bread,function(e,s){return i("el-breadcrumb-item",{key:s},[t._v(t._s(e))])}))],1),t._v(" "),i("div",{staticClass:"content"},[i("el-row",[i("el-col",{attrs:{span:6}},[i("div",{staticClass:"content-title"},[t._v("填写物流信息")])])],1),t._v(" "),i("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"120px"}},[i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"物流名称",prop:"name"}},[i("el-input",{model:{value:t.ruleForm.logisticsName,callback:function(e){t.$set(t.ruleForm,"logisticsName",e)},expression:"ruleForm.logisticsName"}})],1)],1)],1),t._v(" "),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"查询电话",prop:"phone"}},[i("el-input",{model:{value:t.ruleForm.tel,callback:function(e){t.$set(t.ruleForm,"tel",e)},expression:"ruleForm.tel"}})],1)],1)],1),t._v(" "),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"官方网址",prop:"website"}},[i("el-input",{model:{value:t.ruleForm.officialUrl,callback:function(e){t.$set(t.ruleForm,"officialUrl",e)},expression:"ruleForm.officialUrl"}})],1)],1)],1),t._v(" "),i("el-row",[i("el-col",{attrs:{span:6}},[i("el-form-item",{attrs:{label:"物流状态",prop:"logisticsStatus"}},[i("el-switch",{attrs:{"active-text":"启用"},model:{value:t.ruleForm.isUp,callback:function(e){t.$set(t.ruleForm,"isUp",e)},expression:"ruleForm.isUp"}})],1)],1)],1)],1)],1),t._v(" "),i("el-button",{staticClass:"purple-bg",staticStyle:{"margin-top":"20px"},on:{click:t.save}},[t._v("保存")]),t._v(" "),i("el-button",{staticClass:"orange-bg",staticStyle:{"margin-top":"20px"},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),i("el-button",{staticClass:"orange-bg",staticStyle:{"margin-top":"20px"},on:{click:t.del}},[t._v("删除")])],1)},a=[];s._withStripped=!0;var r={render:s,staticRenderFns:a};e.a=r}});