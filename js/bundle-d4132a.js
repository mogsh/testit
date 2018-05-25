webpackJsonp([32],{304:function(e,t,a){"use strict";function n(e){o||a(635)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(413),l=a.n(s);for(var i in s)"default"!==i&&function(e){a.d(t,e,function(){return s[e]})}(i);var r=a(637),o=!1,c=a(21),u=n,p=c(l.a,r.a,!1,u,"data-v-538cc00c",null);p.options.__file="src\\component\\admin\\shop\\ShopCarousel.vue",t.default=p.exports},413:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={filters:{changeIsUp:function(e){return 1==e?"上线":"下线"}},data:function(){return{total:0,pages:0,query:{pageNum:1,pageSize:20,title:"",isUp:"",beginUseTime:"",endUseTime:""},multipleSelection:[],val1:"",val2:"",val3:"",options:[{value:"1",label:"上线"},{value:"0",label:"下线"}],value8:"",tableData:[]}},methods:{checkcarousel:function(e){this.$router.push({path:"/shop/shopcheckcarsouel",query:{adImageId:e}})},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.query.pageSize=e,this.getImageList()},handleCurrentChange:function(e){this.query.pageNum=e,this.getImageList()},addCarousel:function(){this.$router.push("/wxapp/addcarousel")},searchVal1:function(){this.query.title=this.val1,this.getImageList()},selectVal2:function(){this.query.isUp=this.val2,this.getImageList()},selectVal3:function(){this.val3?(this.query.beginUseTime=this.val3[0],this.query.endUseTime=this.val3[1].substring(0,10)+" 23:59:59"):this.query.beginUseTime=this.query.endUseTime="",this.getImageList()},toggle:function(e,t){var a=this;"1"==e.isUp?this.$confirm("是否下线轮播图？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$http.get(a.$api.updateStoreAdImageStauts,{params:{adImageId:e.adImageId,status:0}}).then(function(e){}),a.$message({type:"warning",message:"轮播图下线成功!"}),e.isUp="0"}).catch(function(){a.$message({type:"info",message:"已取消下线操作"})}):(this.$http.get(this.$api.updateStoreAdImageStauts,{params:{adImageId:e.adImageId,status:1}}).then(function(e){}),this.$message({type:"success",message:"轮播图上线成功！"}),e.isUp="1")},getImageList:function(){var e=this;this.$http.get(this.$api.findStoreAdImageListPage,{params:this.query}).then(function(t){e.tableData=t.data.data.list,e.total=t.data.data.total,t.data.data.list.forEach(function(e,t){e.keepTime=e.beginUseTime+" 至 "+e.endUseTime})})}},created:function(){this.getImageList()}}},635:function(e,t,a){var n=a(636);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(20)("93b5ffda",n,!1)},636:function(e,t,a){t=e.exports=a(7)(!1),t.push([e.i,"\n.btn-group[data-v-538cc00c],\n.search-group[data-v-538cc00c] {\n  margin-bottom: 20px;\n}\n.pagination[data-v-538cc00c] {\n  float: right;\n}\n",""])},637:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-head"},[e._v("店铺管理")]),e._v(" "),a("el-breadcrumb",e._l(e.$route.meta.bread,function(t,n){return a("el-breadcrumb-item",{key:n},[e._v(e._s(t))])}))],1),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"search-group"},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"搜索轮播图名称","prefix-icon":"el-icon-search",clearable:""},on:{blur:e.searchVal1},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchVal1(t)}},model:{value:e.val1,callback:function(t){e.val1="string"==typeof t?t.trim():t},expression:"val1"}}),e._v(" "),a("el-select",{attrs:{clearable:"",filterable:"",placeholder:"选择轮播图状态"},on:{change:e.selectVal2},model:{value:e.val2,callback:function(t){e.val2=t},expression:"val2"}},e._l(e.options,function(e){return a("el-option",{key:e.value,staticClass:"search-select",attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-date-picker",{attrs:{clearable:"",type:"daterange","range-separator":"至","start-placeholder":"选择开始日期","end-placeholder":"选择结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.selectVal3},model:{value:e.val3,callback:function(t){e.val3=t},expression:"val3"}})],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark","default-sort":{prop:"sort_no",order:"descending"}},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{prop:"title",label:"轮播图名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"storeName",label:"所属店铺"}}),e._v(" "),a("el-table-column",{attrs:{prop:"imgUrl",label:"图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.imgUrl,width:"200"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"keepTime",label:"轮播图持续时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isUp",label:"轮播图状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("changeIsUp")(t.row.isUp))+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"isUp",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"purple-txt",attrs:{type:"text",size:"small"},on:{click:function(a){e.checkcarousel(t.row.adImageId)}}},[e._v("查看\n          ")]),e._v(" "),"0"==t.row.isUp?a("el-button",{ref:"",staticClass:"purple-txt",attrs:{type:"text",size:"small"},on:{click:function(a){e.toggle(t.row,a)}}},[e._v("上线\n          ")]):e._e(),e._v(" "),"1"==t.row.isUp?a("el-button",{ref:"",staticClass:"orange-txt",attrs:{type:"text",size:"small"},on:{click:function(a){e.toggle(t.row,a)}}},[e._v("下线\n          ")]):e._e()]}}])})],1),e._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{type:"text",disabled:""}}),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.query.pageNum,"page-sizes":[20,50,100,200],"page-size":e.query.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)])},s=[];n._withStripped=!0;var l={render:n,staticRenderFns:s};t.a=l}});