webpackJsonp([26],{287:function(e,t,a){"use strict";function o(e){r||a(584)}Object.defineProperty(t,"__esModule",{value:!0});var l=a(396),s=a.n(l);for(var n in l)"default"!==n&&function(e){a.d(t,e,function(){return l[e]})}(n);var i=a(586),r=!1,c=a(21),d=o,u=c(s.a,i.a,!1,d,"data-v-26414ffc",null);u.options.__file="src\\component\\admin\\wxapp\\AdImg.vue",t.default=u.exports},396:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(94),l=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={data:function(){var e;return e={pageNum:1,pageSize:20,total:0,imgApi:this.$imgApi,multipleSelection:[],val1:"",val2:"",val3:"",ruleForm:{title:"新品广告图"},fileList:[{name:"img",url:""}],rules:{},dialogImageUrl:"",dialogVisible:!1,options:[],value8:"",tableData:[]},(0,l.default)(e,"options",[]),(0,l.default)(e,"currentPage",1),e},methods:{addBtn:function(){this.$router.push({path:"/wxapp/muladdcarouselgoods",query:{adImageId:this.ruleForm.adImageId}})},searchVal2:function(){},selectVal3:function(){},editSortNo:function(e){},checkGoods:function(e){this.$router.push({name:"gcg",params:{goodsId:e.goodsId,storeId:e.storeId}})},delGoods:function(e){var t=this;this.$confirm("是否删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.get(t.$api.deleteNewImageGoodsByGoodsId,{params:{adImageId:t.ruleForm.adImageId,goodsIds:e.goodsId}}).then(function(e){e.data.flag&&(t.$message({type:"warning",message:"删除成功!"}),t.getAdImgInfo())})}).catch(function(){t.$message({type:"info",message:"已取消删除操作"})})},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.pageSize=e,this.getAdImgInfo()},handleCurrentChange:function(e){this.pageNum=e,this.getAdImgInfo()},handleRemove:function(e,t){},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},uploadImgHandler:function(e){this.ruleForm.imgUrl=e.data[0].fileUrl},save:function(){var e=this;this.$http.get(this.$api.newgoodsInsertAdImage,{params:this.ruleForm}).then(function(t){"success"==t.data.msg?e.$message({type:"success",message:"保存成功!"}):e.$message({type:"error",message:"保存成功!"})})},cancel:function(){var e=this;this.$confirm("取消后将放弃修改，返回上一页面，请确认是否取消？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"取消成功!"}),e.$router.go(-1)}).catch(function(){e.$message({type:"info",message:"放弃 [取消] 操作!"})})},addGoods:function(){var e=this;this.$http.get(this.$api.findGoodsIdByGoodsCode,{params:{goodsCode:this.val1}}).then(function(t){if(t.data.flag){var a=t.data.data;e.$http.get(e.$api.findGoods,{params:{goodsId:a,storeId:0}}).then(function(t){var a={},o=t.data.data;a.goodsName=o.goodsName,a.storeName=o.storeName,a.goodsCode=o.goodsCode,a.brandName=o.brandName,a.goodsCategoryName=o.goodsCategoryName,a.sellingPrice=o.sellingPrice,a.inventory=o.inventory,a.isUp=o.isUp,a.sort=o.sort,a.goodsId=o.goodsId,e.$http.get(e.$api.insertAdImageGoods,{params:{adImageId:e.ruleForm.adImageId,goodsId:o.goodsId}}).then(function(t){t.data.flag?(e.tableData.push(a),e.$message({type:"success",message:t.data.msg})):"E10041"==t.data.stateCode&&e.$message({type:"error",message:"已存在该商品"})})})}else e.$message({type:"warning",message:t.data.msg})})},delSelected:function(){var e=this;0!=this.multipleSelection.length?this.$confirm("是否批量删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"warning",message:"删除成功!"})}).catch(function(){e.$message({type:"info",message:"已取消删除操作"})}):this.$message({type:"error",message:"当前未选中任何行！"})},getAdImgInfo:function(){var e=this;this.$http.get(this.$api.selectNewGoodsAdImage,{params:{pageSize:this.pageSize,pageNum:this.pageNum}}).then(function(t){e.ruleForm=t.data.data,e.fileList[0].url=t.data.data.imgUrl,t.data.data.pagex&&(e.tableData=t.data.data.pagex.list,e.total=t.data.data.pagex.total)})}},created:function(){this.getAdImgInfo()}}},584:function(e,t,a){var o=a(585);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a(20)("74cc2be4",o,!1)},585:function(e,t,a){t=e.exports=a(7)(!1),t.push([e.i,"\n.btn-group[data-v-26414ffc],\n.search-group[data-v-26414ffc] {\n  margin-bottom: 20px;\n}\n.pagination[data-v-26414ffc] {\n  float: right;\n}\n.content .content-title[data-v-26414ffc] {\n  font-size: 18px;\n  font-family: MicrosoftYaHei-Bold;\n  color: #606266;\n  font-weight: bold;\n  margin: 0 10px 20px;\n}\n",""])},586:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-head"},[e._v("小程序管理")]),e._v(" "),a("el-breadcrumb",e._l(e.$route.meta.bread,function(t,o){return a("el-breadcrumb-item",{key:o},[e._v(e._s(t))])}))],1),e._v(" "),a("div",{staticClass:"content content1 addcarousel"},[a("div",{staticClass:"content-title"},[e._v("新品广告图")]),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-row",{staticClass:"addcarousel-pic-input",staticStyle:{height:"200px"}},[a("el-col",[a("el-form-item",{attrs:{label:"广告图图片"}},[a("el-upload",{attrs:{action:e.imgApi,"list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"on-success":e.uploadImgHandler,"file-list":e.fileList,limit:1}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("div",{staticClass:"el-upload__tip orange-txt",attrs:{slot:"tip"},slot:"tip"},[e._v("**图片尺寸：750*320px；格式:jpg、png；大小：200KB以内")])]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"跳转方式"}},[a("el-radio-group",{model:{value:e.ruleForm.jumpType,callback:function(t){e.$set(e.ruleForm,"jumpType",t)},expression:"ruleForm.jumpType"}},[a("el-radio",{attrs:{label:2}},[e._v("链接")]),e._v(" "),a("el-radio",{attrs:{label:1}},[e._v("商品")])],1)],1)],1)],1),e._v(" "),2==e.ruleForm.jumpType?a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"跳转链接"}},[a("el-input",{model:{value:e.ruleForm.jumpUrl,callback:function(t){e.$set(e.ruleForm,"jumpUrl",t)},expression:"ruleForm.jumpUrl"}})],1)],1)],1):e._e(),e._v(" "),a("el-row",[a("el-col",{attrs:{span:16}},[a("el-button",{staticClass:"purple-bg",on:{click:e.save}},[e._v("保存")]),e._v(" "),a("el-button",{staticClass:"orange-bg",on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)],1),e._v(" "),1==e.ruleForm.jumpType?a("div",{staticClass:"content content1"},[a("div",{staticClass:"content-title"},[e._v("编辑轮播图跳转商品列表")]),e._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"purple-bg",attrs:{icon:"el-icon-plus"},on:{click:e.addBtn}},[e._v("添加")])],1),e._v(" "),a("div",{staticClass:"search-group"},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"搜索商品名称/编号/品牌"},on:{blur:e.searchVal2},model:{value:e.val2,callback:function(t){e.val2="string"==typeof t?t.trim():t},expression:"val2"}}),e._v(" "),a("el-select",{attrs:{filterable:"",placeholder:"选择销售状态"},on:{change:e.selectVal3},model:{value:e.val3,callback:function(t){e.val3=t},expression:"val3"}},e._l(e.options,function(e){return a("el-option",{key:e.value,staticClass:"search-select",attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark","default-sort":{prop:"brand",order:"descending"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"storeName",label:"所属店铺"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsCode",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"brandName",label:"品牌"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsCategoryName",label:"分类"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sellingPrice",label:"销售价(元)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"inventory",label:"库存量(件)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isUp",label:"销售状态"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序号",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"999"},on:{blur:function(a){e.editSortNo(t.row)}},model:{value:t.row.sort_no,callback:function(a){e.$set(t.row,"sort_no",a)},expression:"scope.row.sort_no"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"purple-txt",attrs:{type:"text",size:"small"},on:{click:function(a){e.checkGoods(t.row)}}},[e._v("查看商品")]),e._v(" "),a("el-button",{staticClass:"orange-txt",attrs:{type:"text",size:"small"},on:{click:function(a){e.delGoods(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{staticClass:"orange-bg",on:{click:e.delSelected}},[e._v("批量删除")]),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[10,20,50,100],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1):e._e()])},l=[];o._withStripped=!0;var s={render:o,staticRenderFns:l};t.a=s}});