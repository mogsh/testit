webpackJsonp([17],{285:function(e,t,a){"use strict";function r(e){i||a(578)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(394),l=a.n(s);for(var o in s)"default"!==o&&function(e){a.d(t,e,function(){return s[e]})}(o);var n=a(580),i=!1,u=a(21),c=r,d=u(l.a,n.a,!1,c,"data-v-79b692e9",null);d.options.__file="src\\component\\admin\\wxapp\\checkNav.vue",t.default=d.exports},394:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{imgApi:this.$imgApi,marketingTypeId:"",pageNum:1,pageSize:20,total:0,isShow:!0,multipleSelection:[],imgList:[{name:"navlImg",url:""}],val1:"",val2:"",val3:"",val4:[],val5:"",val6:2,options3:[],options4:[],options5:[],options6:[{label:"未添加",value:1},{label:"已添加",value:2}],ruleForm:{isUp:!1},rules:{name:[{required:!0,message:"请输入内容",trigger:"blur"},{min:1,max:4,message:"长度在 1 到 4 个字",trigger:"blur"}],value6:"",or_price:[{required:!0,message:"请输入内容",trigger:"blur"}],art_no:[{required:!0,message:"请输入内容",trigger:"blur"}],pretium:[{required:!0,message:"请输入内容",trigger:"blur"}],sort:[{required:!0,message:"请选择内容",trigger:"change"}],stock:[{required:!0,message:"请输入内容",trigger:"blur"}],brand:[{required:!0,message:"请选择内容",trigger:"change"}],attr:[{required:!0,message:"请选择内容",trigger:"change"}],type:[{required:!0,message:"请选择内容",trigger:"change"}],color:[{required:!0,message:"请输入内容",trigger:"blur"}],size:[{required:!0,message:"请输入内容",trigger:"blur"}],content:[{required:!0,message:"请输入内容",trigger:"blur"}]},dialogImageUrl:"",dialogVisible:!1,options:[],value8:"",tableData:[],currentPage:1}},methods:{addBtn:function(){this.$router.push({path:"/wxapp/muladdnavgoods",query:{marketingTypeId:this.ruleForm.marketingTypeId}})},checkGoods:function(e){this.$router.push({name:"gcg",params:{goodsId:e.goodsId,storeId:e.storeId}})},delGoods:function(e){var t=this;this.$confirm("是否删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.get(t.$api.deleteMarketingTypeGoodsByIds,{params:{marketingTypeId:t.ruleForm.marketingTypeId,goodsIds:e.goodsId}}).then(function(e){t.$message({type:"warning",message:"删除成功!"}),t.getNavDetail()})}).catch(function(){t.$message({type:"info",message:"已取消删除操作"})})},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.pageSize=e,this.getNavDetail()},handleCurrentChange:function(e){this.pageNum=e,this.getNavDetail()},handleRemove:function(e,t){},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0},handleImgSuccess:function(e,t){this.ruleForm.imgUrl=e.data[0].fileUrl},save:function(){var e={};e.marketingTypeId=this.ruleForm.marketingTypeId,e.imgUrl=this.ruleForm.imgUrl,e.sort=this.ruleForm.sort,e.name=this.ruleForm.name,e.jumpType=this.ruleForm.jumpType,e.url=this.ruleForm.url,e.isUp=1==this.ruleForm.isUp?1:0,this.$http.get(this.$api.updateMarketingType,{params:e}).then(function(e){}),this.$message({type:"success",message:"保存成功!"})},cancle:function(){var e=this;this.$confirm("取消后将放弃修改，返回上一页面，请确认是否取消？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"取消成功!"}),e.$router.go(-1)}).catch(function(){e.$message({type:"info",message:"放弃 [取消] 操作!"})})},addGoods:function(){var e=this,t=this;this.$http.get(this.$api.findGoodsIdByGoodsCode,{params:{goodsCode:this.val1}}).then(function(a){if(a.data.flag){var r=a.data.data;e.$http.get(e.$api.addMarketingTypeGoodsByIds,{params:{marketingTypeId:e.ruleForm.marketingTypeId,goodsIds:r}}).then(function(a){a.data.flag?e.$http.get(e.$api.findGoods,{params:{goodsId:r,storeId:0}}).then(function(a){var r={},s=a.data.data;r.goodsName=s.goodsName,r.goodsCode=s.goodsCode,r.brandName=s.brandName,r.goodsCategoryName=s.goodsCategoryName,r.sellingPrice=s.sellingPrice,r.inventory=s.inventory,r.isUp=s.isUp,r.sort=s.sort,r.goodsId=s.goodsId,e.tableData.push(r),t.ruleForm.jumpTypeParam="",e.tableData.forEach(function(e,a){t.ruleForm.jumpTypeParam=e.goodsId+","+t.ruleForm.jumpTypeParam})}):e.$message({type:"error",message:a.data.msg})})}else e.$message({type:"warning",message:a.data.msg})})},searchVal2:function(){},selectVal3:function(){},selectVal4:function(){},selectVal5:function(){},selectVal6:function(){},delSelected:function(){var e=this;0!=this.multipleSelection.length?this.$confirm("是否批量删除？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t="";e.multipleSelection.forEach(function(e,a){t=e.goodsId+","+t}),e.$http.get(e.$api.deleteMarketingTypeGoodsByIds,{params:{marketingTypeId:e.marketingTypeId,goodsIds:t}}).then(function(t){e.$message({type:"warning",message:"删除成功!"}),e.getNavDetail()})}).catch(function(){e.$message({type:"info",message:"已取消删除操作"})}):this.$message({type:"error",message:"当前未选中任何行！"})},getNavDetail:function(){var e=this;this.$http.get(this.$api.findMarketingType,{params:{marketingTypeId:this.marketingTypeId,pageNum:this.pageNum,pageSize:this.pageSize}}).then(function(t){e.ruleForm.name=t.data.data.name,e.ruleForm.url=t.data.data.url,e.ruleForm.imgUrl=t.data.data.imgUrl,e.ruleForm.isUp=0!=t.data.data.isUp,e.ruleForm.sort=t.data.data.sort,e.ruleForm.marketingTypeId=t.data.data.marketingTypeId,e.ruleForm.jumpType=t.data.data.jumpType,e.tableData=t.data.data.page.list,e.total=t.data.data.page.total,e.imgList[0].url=t.data.data.imgUrl})}},created:function(){this.marketingTypeId=this.$route.query.marketingTypeId,this.getNavDetail()}}},578:function(e,t,a){var r=a(579);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a(20)("1bc422a8",r,!1)},579:function(e,t,a){t=e.exports=a(7)(!1),t.push([e.i,"\n.btn-group[data-v-79b692e9],\n.search-group[data-v-79b692e9] {\n  margin-bottom: 20px;\n}\n.pagination[data-v-79b692e9] {\n  float: right;\n}\n.content .content-title[data-v-79b692e9] {\n  font-size: 18px;\n  font-family: MicrosoftYaHei-Bold;\n  color: #606266;\n  font-weight: bold;\n  margin: 0 10px 20px;\n}\n",""])},580:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-head"},[e._v("小程序管理")]),e._v(" "),a("el-breadcrumb",e._l(e.$route.meta.bread,function(t,r){return a("el-breadcrumb-item",{key:r},[e._v(e._s(t))])}))],1),e._v(" "),a("div",{staticClass:"content content1"},[a("div",{staticClass:"content-title"},[e._v("填写导航信息")]),e._v(" "),a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"导航名称",prop:"name"}},[a("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name","string"==typeof t?t.trim():t)},expression:"ruleForm.name"}})],1)],1)],1),e._v(" "),a("el-row",{staticStyle:{height:"200px"}},[a("el-col",[a("el-form-item",{attrs:{label:"导航图片"}},[a("el-upload",{attrs:{action:e.imgApi,"list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,"on-success":e.handleImgSuccess,"file-list":e.imgList}},[a("i",{staticClass:"el-icon-plus"}),e._v(" "),a("div",{staticClass:"el-upload__tip orange-txt",attrs:{slot:"tip"},slot:"tip"},[e._v("**图片尺寸：80*80px；格式:png；大小：10KB以内")])]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"显示状态"}},[a("el-switch",{attrs:{"active-text":"显示"},model:{value:e.ruleForm.isUp,callback:function(t){e.$set(e.ruleForm,"isUp",t)},expression:"ruleForm.isUp"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"排序号"}},[a("el-input",{attrs:{type:"number"},model:{value:e.ruleForm.sort,callback:function(t){e.$set(e.ruleForm,"sort",t)},expression:"ruleForm.sort"}})],1)],1)],1),e._v(" "),2==e.ruleForm.jumpType?a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"跳转链接",prop:"jumpUrl"}},[a("el-input",{model:{value:e.ruleForm.url,callback:function(t){e.$set(e.ruleForm,"url",t)},expression:"ruleForm.url"}})],1)],1)],1):e._e()],1),e._v(" "),a("el-button",{staticClass:"purple-bg",on:{click:e.save}},[e._v("保存")]),e._v(" "),a("el-button",{staticClass:"orange-bg",on:{click:e.cancle}},[e._v("取消")])],1),e._v(" "),2!=e.ruleForm.jumpType?a("div",{staticClass:"content content1"},[a("div",{staticClass:"content-title"},[e._v("编辑导航跳转商品列表")]),e._v(" "),a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"purple-bg",attrs:{icon:"el-icon-plus"},on:{click:e.addBtn}},[e._v("添加")])],1),e._v(" "),a("div",{staticClass:"search-group"},[a("el-input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"搜索商品名称/编号/品牌","prefix-icon":"el-icon-search"},on:{blur:e.searchVal2},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchVal2(t)}},model:{value:e.val2,callback:function(t){e.val2="string"==typeof t?t.trim():t},expression:"val2"}}),e._v(" "),a("el-cascader",{staticClass:"mb10",attrs:{clearable:"",placeholder:"选择分类","expand-trigger":"click",options:e.options4,"change-on-select":""},on:{change:e.selectVal4},model:{value:e.val4,callback:function(t){e.val4=t},expression:"val4"}})],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark","default-sort":{prop:"brand",order:"descending"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsName",label:"名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsCode",label:"编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"brandName",label:"品牌"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsCategoryName",label:"分类"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sellingPrice",label:"销售价(元)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"inventory",label:"库存量(件)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isUp",label:"销售状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.sort?a("span",[e._v("上线")]):a("span",[e._v("下线")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"排序号",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{disabled:"",placeholder:"999"},model:{value:t.row.sort,callback:function(a){e.$set(t.row,"sort",a)},expression:"scope.row.sort"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"purple-txt",attrs:{type:"text",size:"small"},on:{click:function(a){e.checkGoods(t.row)}}},[e._v("查看商品\n          ")]),e._v(" "),a("el-button",{staticClass:"orange-txt",attrs:{type:"text",size:"small"},on:{click:function(a){e.delGoods(t.row)}}},[e._v("删除\n          ")])]}}])})],1),e._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{staticClass:"orange-bg",on:{click:e.delSelected}},[e._v("批量删除")]),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[20,30,50,100],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1):e._e()])},s=[];r._withStripped=!0;var l={render:r,staticRenderFns:s};t.a=l}});