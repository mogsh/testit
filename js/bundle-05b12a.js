webpackJsonp([65],{345:function(t,e,a){"use strict";function n(t){i||a(758)}Object.defineProperty(e,"__esModule",{value:!0});var l=a(454),o=a.n(l);for(var s in l)"default"!==s&&function(t){a.d(e,t,function(){return l[t]})}(s);var r=a(760),i=!1,c=a(21),u=n,d=c(o.a,r.a,!1,u,"data-v-5b690558",null);d.options.__file="src\\component\\admin\\recommendation\\asort\\manageOfSort.vue",e.default=d.exports},454:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={filters:{changeIsUp:function(t){return 1==t?"显示":"隐藏"}},data:function(){return{Num:"",asortName:"",showState:"",sortNum:"",val1:"",val2:"",options1:[],options2:[{label:"显示",value:1},{label:"隐藏",value:0}],tableData:[{Num:"1"}],query:{pageNum:1,pageSize:20},total:0,currentPage:1}},methods:{getAssortManage:function(){var t=this;this.$http.get(this.$api.findChannelCategoryList,{params:this.query}).then(function(e){t.tableData=e.data.data.list;var a=[];for(var n in e.data.data.list){var l={label:e.data.data.list[n].channelCategoryName,value:e.data.data.list[n].channelCategoryId};a.push(l)}t.total=e.data.data.total,t.options1=a})},selectVal1:function(){this.query.channelCategoryId=this.val1,this.getAssortManage()},selectVal2:function(){this.query.isUp=this.val2,this.getAssortManage()},handleSelectionChange:function(t){this.multipleSelection=t},handleSizeChange:function(t){this.query.pageSize=t,this.getGoodsData()},handleCurrentChange:function(t){this.query.pageNum=t,this.getGoodsData()},changeSort:function(t){var e=this;this.$http.get(this.$api.updateChannelCategory,{params:{channelCategoryId:t.channelCategoryId,sort:t.sort}}).then(function(t){1==t.data.flag?e.$message({type:"success",message:"修改成功"}):e.$message({type:"error",message:"修改失败"})})},change:function(t){this.$router.push({name:"ram",params:{channelCategoryId:t.channelCategoryId}})},addGoods:function(){this.$router.push("/recommendation/asort/addASort")}},created:function(){this.getAssortManage()}}},758:function(t,e,a){var n=a(759);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(20)("236167d8",n,!1)},759:function(t,e,a){e=t.exports=a(7)(!1),e.push([t.i,"\n.btn-group[data-v-5b690558],\n.search-group[data-v-5b690558] {\n  margin-bottom: 20px;\n}\n.pagination[data-v-5b690558] {\n  float: right;\n}\n.up-btn[data-v-5b690558] {\n  position: relative;\n}\n.file-upload[data-v-5b690558] {\n  position: absolute;\n  background: red;\n  color: #fff;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.select_width .el-cascader[data-v-5b690558] {\n  width: 240px;\n}\n",""])},760:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-head"},[t._v("推荐管理")]),t._v(" "),a("el-breadcrumb",t._l(t.$route.meta.bread,function(e,n){return a("el-breadcrumb-item",{key:n},[t._v(t._s(e))])}))],1),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"purple-bg",attrs:{icon:"el-icon-plus"},on:{click:t.addGoods}},[t._v("新增分类")])],1),t._v(" "),a("div",{staticClass:"search-group select_width"},[a("el-select",{staticClass:"search-select mb10",attrs:{clearable:"",filterable:"",placeholder:"选择分类"},on:{change:t.selectVal1},model:{value:t.val1,callback:function(e){t.val1=e},expression:"val1"}},t._l(t.options1,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),a("el-select",{staticClass:"search-select mb10",attrs:{clearable:"",filterable:"",placeholder:"选择显示状态"},on:{change:t.selectVal2},model:{value:t.val2,callback:function(e){t.val2=e},expression:"val2"}},t._l(t.options2,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"280"}}),t._v(" "),a("el-table-column",{attrs:{prop:"channelCategoryName",label:"分类名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"isUp",label:"显示状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t._f("changeIsUp")(e.row.isUp))+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"sort",sortable:"",label:"排序号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{staticStyle:{width:"80px"},attrs:{placeholder:"999"},on:{blur:function(a){t.changeSort(e.row)}},nativeOn:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13,a.key))return null;t.changeSort(e.row)}},model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"purple-txt",attrs:{type:"text",size:"small"},on:{click:function(a){t.change(e.row)}}},[t._v("修改")])]}}])})],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px",height:"40px"}},[a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1)])},l=[];n._withStripped=!0;var o={render:n,staticRenderFns:l};e.a=o}});