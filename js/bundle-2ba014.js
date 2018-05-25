webpackJsonp([39],{334:function(t,e,a){"use strict";function n(t){r||a(725)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(443),o=a.n(i);for(var l in i)"default"!==l&&function(t){a.d(e,t,function(){return i[t]})}(l);var s=a(727),r=!1,c=a(21),u=n,p=c(o.a,s.a,!1,u,"data-v-3c954b8f",null);p.options.__file="src\\component\\admin\\recommendation\\setting\\detailedWriting.vue",e.default=p.exports},443:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={filters:{changeIsUp:function(t){return 1==t?"显示":"隐藏"}},data:function(){return{Num:"",asortName:"",showState:"",sortNum:"",val1:"",val2:"",query1:{pageNum:1,pageSize:20},query2:{pageNum:1,pageSize:20},options1:[{label:"显示",value:"1"},{label:"隐藏",value:"0"}],options2:[{label:"显示",value:"1"},{label:"隐藏",value:"0"}],tableData_1:[],tableData_2:[],total1:0,total2:0}},methods:{getWriting:function(){var t=this;this.query1.documentType=1,this.$http.get(this.$api.findDocumentConfListPage,{params:this.query1}).then(function(e){t.tableData_1=e.data.data.list,t.total1=e.data.data.total})},getCopyWriting:function(){var t=this;this.query2.documentType=3,this.$http.get(this.$api.findDocumentConfListPage,{params:this.query2}).then(function(e){t.tableData_2=e.data.data.list,t.total2=e.data.data.total})},selectVal1:function(){this.query1.isUp=this.val1,this.getWriting()},selectVal2:function(){this.query2.isUp=this.val2,this.getCopyWriting()},handleSizeChange:function(t){this.query1.pageSize=t,this.getWriting()},handleCurrentChange:function(t){this.query1.pageNum=t,this.getWriting()},handleSizeChange2:function(t){this.query2.pageSize=t,this.getCopyWriting()},handleCurrentChange2:function(t){this.query2.pageNum=t,this.getCopyWriting()},addWriting:function(){this.$router.push("/recommendation/setting/newWriting")},addCopyWriting:function(){this.$router.push("/recommendation/setting/newCopyWriting")},change:function(t,e){this.$router.push({name:"rscw",params:{documentConfId:t.documentConfId}})},changeCopy:function(t,e){this.$router.push({name:"rsccw",params:{documentConfId:t.documentConfId}})},changeSort1:function(t){var e=this;this.$http.get(this.$api.updateDocumentConfSort,{params:{documentConfId:t.documentConfId,sort:t.sort}}).then(function(t){1==t.data.flag?e.$message({message:"修改成功。",type:"success"}):e.$message({message:"修改失败，请联系管理员。",type:"error"})})},changeSort2:function(t){var e=this;this.$http.get(this.$api.updateDocumentConfSort,{params:{documentConfId:t.documentConfId,sort:t.sort}}).then(function(t){1==t.data.flag?e.$message({message:"修改成功。",type:"success"}):e.$message({message:"修改失败，请联系管理员。",type:"error"})})}},created:function(){this.getWriting(),this.getCopyWriting()}}},725:function(t,e,a){var n=a(726);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(20)("6922140a",n,!1)},726:function(t,e,a){e=t.exports=a(7)(!1),e.push([t.i,"\n.btn-group[data-v-3c954b8f],\n.search-group[data-v-3c954b8f] {\n  margin-bottom: 20px;\n}\n.pagination[data-v-3c954b8f] {\n  float: right;\n}\n.up-btn[data-v-3c954b8f] {\n  position: relative;\n}\n.file-upload[data-v-3c954b8f] {\n  position: absolute;\n  background: red;\n  color: #fff;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.select_width .el-cascader[data-v-3c954b8f] {\n  width: 240px;\n}\n.content .content-title[data-v-3c954b8f] {\n  font-size: 18px;\n  font-family: MicrosoftYaHei-Bold;\n  color: #606266;\n  font-weight: bold;\n  margin: 0 10px 20px;\n}\n",""])},727:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-head"},[t._v("推荐管理")]),t._v(" "),a("el-breadcrumb",t._l(t.$route.meta.bread,function(e,n){return a("el-breadcrumb-item",{key:n},[t._v(t._s(e))])}))],1),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[t._v("通用文案")]),t._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"purple-bg",attrs:{icon:"el-icon-plus"},on:{click:t.addWriting}},[t._v("新增文案")])],1),t._v(" "),a("div",{staticClass:"search-group select_width"},[a("el-select",{staticClass:"search-select mb10",attrs:{clearable:"",filterable:"",placeholder:"选择显示状态"},on:{change:t.selectVal1},model:{value:t.val1,callback:function(e){t.val1=e},expression:"val1"}},t._l(t.options1,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData_1,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"documentName",label:"文案标题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"isUp",label:"显示状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t._f("changeIsUp")(e.row.isUp))+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticStyle:{width:"80px"},attrs:{placeholder:"999"},on:{blur:function(a){t.changeSort1(e.row)}},nativeOn:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.changeSort1(e.row)}},model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"purple-txt",attrs:{type:"text",size:"small"},on:{click:function(a){t.change(e.row,e.$index)}}},[t._v("修改")])]}}])})],1),t._v(" "),a("div",{staticClass:"mt20",staticStyle:{height:"40px"}},[a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.query1.pageNum,"page-sizes":[20,50,100,200],"page-size":t.query1.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total1},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[t._v("通用可复制文案")]),t._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"purple-bg",attrs:{icon:"el-icon-plus"},on:{click:t.addCopyWriting}},[t._v("新增文案")])],1),t._v(" "),a("div",{staticClass:"search-group select_width"},[a("el-select",{staticClass:"search-select mb10",attrs:{clearable:"",filterable:"",placeholder:"选择显示状态"},on:{change:t.selectVal2},model:{value:t.val2,callback:function(e){t.val2=e},expression:"val2"}},t._l(t.options2,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData_2,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"documentContent",label:"文案内容"}}),t._v(" "),a("el-table-column",{attrs:{prop:"isUp",label:"显示状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t._f("changeIsUp")(e.row.isUp))+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticStyle:{width:"80px"},attrs:{placeholder:"999"},on:{blur:function(a){t.changeSort2(e.row)}},nativeOn:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.changeSort2(e.row)}},model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"purple-txt",attrs:{type:"text",size:"small"},on:{click:function(a){t.changeCopy(e.row,e.$index)}}},[t._v("修改")])]}}])})],1),t._v(" "),a("div",{staticClass:"mt20",staticStyle:{height:"40px"}},[a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.query2.pageNum,"page-sizes":[20,50,100,200],"page-size":t.query2.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total2},on:{"size-change":t.handleSizeChange2,"current-change":t.handleCurrentChange2}})],1)])],1)])},i=[];n._withStripped=!0;var o={render:n,staticRenderFns:i};e.a=o}});