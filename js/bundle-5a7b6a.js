webpackJsonp([81],{267:function(t,a,e){"use strict";function i(t){r||e(524)}Object.defineProperty(a,"__esModule",{value:!0});var o=e(376),n=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(a,t,function(){return o[t]})}(s);var l=e(526),r=!1,c=e(21),u=i,d=c(n.a,l.a,!1,u,"data-v-037208b6",null);d.options.__file="src\\component\\admin\\group\\groupManage.vue",a.default=d.exports},376:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{tableData:[],goodsDetail:"",attrName:[{attributeName:""},{attributeName:""},{attributeName:""}],attrLength:1,activityBuyGroupId:""}},methods:{getGoodsDetail:function(){var t=this,a={};a.activityBuyGroupId=this.$route.params.activityBuyGroupId,this.activityBuyGroupId=this.$route.params.activityBuyGroupId,this.$http.get(this.$api.findActivityBuyGroup,{params:a}).then(function(a){t.goodsDetail=a.data.data,t.attrName=t.goodsDetail.goodsAttributeDtos,t.attrLength=t.goodsDetail.goodsAttributeDtos.length,t.tableData=t.goodsDetail.activityBuyGroupGoodsDetailDtos})},toggleAppStatus:function(t){var a=this;if(3==t)this.$confirm("是否驳回该商品？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={};t.activityBuyGroupIds=a.activityBuyGroupId,t.status=3,a.$http.get(a.$api.updateActivityBuyGroupAuditStatus,{params:t}).then(function(t){t.data.flag&&(a.getGoodsDetail(),a.$message({type:"warning",message:"驳回商品成功!"}))})}).catch(function(){a.$message({type:"info",message:"已退出[驳回]操作"})});else if(2==t){var e={};e.activityBuyGroupIds=this.activityBuyGroupId,e.status=2,this.$http.get(this.$api.updateActivityBuyGroupAuditStatus,{params:e}).then(function(t){t.data.flag&&(a.getGoodsDetail(),a.$message({type:"warning",message:"通过商品成功!"}))})}},goBack:function(){this.$router.go(-1)}},created:function(){this.getGoodsDetail()}}},524:function(t,a,e){var i=e(525);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(20)("26a53a54",i,!1)},525:function(t,a,e){a=t.exports=e(7)(!1),a.push([t.i,"\n.content .content-title[data-v-037208b6] {\n  font-size: 18px;\n  font-family: MicrosoftYaHei-Bold;\n  color: #606266;\n  font-weight: bold;\n  margin: 0 10px 20px;\n}\n.content1[data-v-037208b6] {\n  margin-bottom: 20px;\n}\n.content-detail .content-info[data-v-037208b6] {\n  font-size: 16px;\n  font-family: MicrosoftYaHei-Bold;\n  color: #303133;\n  padding-bottom: 20px;\n  margin-left: 10px;\n}\n",""])},526:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"breadcrumb"},[e("div",{staticClass:"breadcrumb-head"},[t._v("拼团管理")]),t._v(" "),e("el-breadcrumb",t._l(t.$route.meta.bread,function(a,i){return e("el-breadcrumb-item",{key:i},[t._v(t._s(a))])}))],1),t._v(" "),e("div",{staticClass:"content content1"},[e("div",{staticClass:"content-title"},[t._v("拼团商品信息")]),t._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:11}},[e("div",{staticClass:"content-detail"},[e("div",{staticClass:"content-info"},[t._v("商品名称："+t._s(t.goodsDetail.goodsName))]),t._v(" "),e("div",{staticClass:"content-info"},[t._v("商品编号："+t._s(t.goodsDetail.goodsCode))]),t._v(" "),e("div",{staticClass:"content-info"},[t._v("所属店铺："+t._s(t.goodsDetail.storeName))]),t._v(" "),e("div",{staticClass:"content-info"},[t._v("商品品牌："+t._s(t.goodsDetail.brandName))]),t._v(" "),e("div",{staticClass:"content-info"},[t._v("商品分类："+t._s(t.goodsDetail.goodsCategoryName))]),t._v(" "),e("div",{staticClass:"content-info"},[t._v("商品销售价(元)："+t._s(t.goodsDetail.sellingPrice))])])]),t._v(" "),e("el-col",{attrs:{span:13}},[e("div",{staticClass:"content-detail"},[e("div",{staticClass:"content-info"},[t._v("销售状态："+t._s(t._f("changeSalesStatus")(t.goodsDetail.goodsIsUp)))]),t._v(" "),e("div",{staticClass:"content-info"},[t._v("拼团人数："+t._s(t.goodsDetail.userNum))]),t._v(" "),e("div",{staticClass:"content-info"},[t._v("持续时间："+t._s(t.goodsDetail.startTime)+"至"+t._s(t.goodsDetail.endTime))]),t._v(" "),e("div",{staticClass:"content-info"},[t._v("拼团有效时长："+t._s(t.goodsDetail.durationTime))]),t._v(" "),e("div",{staticClass:"content-info"},[t._v("是否包邮："+t._s(t._f("changeIsOrNot")(t.goodsDetail.freeShipping)))]),t._v(" "),e("div",{staticClass:"content-info"},[t._v("拼团审核状态："+t._s(t._f("changeAuditStatus")(t.goodsDetail.auditStatus)))])])])],1),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[e("el-table-column",{attrs:{align:"center",prop:"spec1Name",label:t.attrName[0].attributeName}}),t._v(" "),2==t.attrLength?e("el-table-column",{attrs:{align:"center",prop:"spec2Name",label:t.attrName[1].attributeName}}):t._e(),t._v(" "),3==t.attrLength?e("el-table-column",{attrs:{align:"center",prop:"spec3Name",label:t.attrName[2].attributeName}}):t._e(),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"originalPrice",label:"原价"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"sellingPrice",label:"销售价(元)"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"inventory",label:"库存量(件)"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"groupPrice",label:"团购价(元)"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",prop:"limitNum",label:"团购限制次数"}}),t._v(" "),e("el-table-column",{attrs:{align:"center",label:"商品图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[e("img",{attrs:{src:t.row.imageUrl,width:"50",height:"50"}})]}}])})],1)],1),t._v(" "),e("div",{staticClass:"mt20"},["2"!=t.goodsDetail.auditStatus?e("el-button",{staticClass:"purple-bg mt20",on:{click:function(a){t.toggleAppStatus(t.flag=2)}}},[t._v("通过")]):t._e(),t._v(" "),"3"!=t.goodsDetail.auditStatus?e("el-button",{staticClass:"orange-bg mt20",on:{click:function(a){t.toggleAppStatus(t.flag=3)}}},[t._v("驳回")]):t._e(),t._v(" "),e("el-button",{staticClass:"orange-bg mt20",on:{click:t.goBack}},[t._v("返回")])],1)])},o=[];i._withStripped=!0;var n={render:i,staticRenderFns:o};a.a=n}});