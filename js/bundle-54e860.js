webpackJsonp([53],{344:function(t,a,o){"use strict";function n(t){c||o(755)}Object.defineProperty(a,"__esModule",{value:!0});var e=o(453),s=o.n(e);for(var l in e)"default"!==l&&function(t){o.d(a,t,function(){return e[t]})}(l);var i=o(757),c=!1,r=o(21),d=n,v=r(s.a,i.a,!1,d,"data-v-3d86369f",null);v.options.__file="src\\component\\admin\\recommendation\\operation\\goodsDetailOfOperation.vue",a.default=v.exports},453:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{allCommission:"",data:{},channelGoodsInfo:{},attrName:[{attributeName:"test1"}],attrLength:1,tableData:[],inverseStr:""}},methods:{getChannelEntranceGoodsDto:function(){var t=this;this.$http.get(this.$api.findChannelEntranceGoodsDto,{params:{channelGoodsId:this.$route.params.channelGoodsId,channelEntranceGoodsId:this.$route.params.channelEntranceGoodsId}}).then(function(a){var o=a.data.data;t.data=o,t.channelGoodsInfo=a.data.data.channelGoodsInfo,t.attrLength=t.channelGoodsInfo.goodsAttributeDtos.length,t.attrName=t.channelGoodsInfo.goodsAttributeDtos;var n=t.channelGoodsInfo.channelGoodsDetailDto.channelGoodsSkuDetailDtos;for(var e in n){var s=t.channelGoodsInfo.channelGoodsDetailDto.channelGoodsSkuDetailDtos[0].channelGoodsCommissionDtos,l="";for(var i in s)l=l+s[i].levelName+"："+s[i].commissionRate+"%（￥"+(s[i].commissionRate*n[e].sellingPrice/100).toFixed(2)+"）";n[e].skuCommission=l}t.tableData=n;var c=t.channelGoodsInfo.channelGoodsDetailDto.channelGoodsCommissionDtos,r="";for(var d in c)r=r+c[d].commissionRate+"%（"+c[d].levelName+"）；";t.inverseStr=r})},goBack:function(){this.$router.go(-1)},add:function(){},objectSpanMethod:function(t){var a=(t.row,t.column,t.rowIndex),o=t.columnIndex;if(0===o)return a%2==0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}}},created:function(){this.getChannelEntranceGoodsDto()}}},755:function(t,a,o){var n=o(756);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(20)("185dbb0c",n,!1)},756:function(t,a,o){a=t.exports=o(7)(!1),a.push([t.i,"\n.content .content-title[data-v-3d86369f] {\n  font-size: 18px;\n  font-family: MicrosoftYaHei-Bold;\n  color: #606266;\n  font-weight: bold;\n  margin: 0 10px 20px;\n}\n",""])},757:function(t,a,o){"use strict";var n=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",[o("div",{staticClass:"breadcrumb"},[o("div",{staticClass:"breadcrumb-head"},[t._v("推荐管理")]),t._v(" "),o("el-breadcrumb",t._l(t.$route.meta.bread,function(a,n){return o("el-breadcrumb-item",{key:n},[t._v(t._s(a))])}))],1),t._v(" "),o("div",{staticClass:"content  mb20"},[o("div",{staticClass:"content-title"},[t._v("模块信息")]),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:11}},[o("div",{staticClass:"p10"},[t._v("所属模块："+t._s(t.data.channelEntranceName))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("排序："+t._s(t.data.sort))])])],1)],1),t._v(" "),o("div",{staticClass:"content  mb20"},[o("div",{staticClass:"content-title"},[t._v("推荐商品信息")]),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:11}},[o("div",{staticClass:"p10"},[t._v("商品名称："+t._s(t.channelGoodsInfo.goodsName))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("用户编号："+t._s(t.channelGoodsInfo.goodsCode))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("所属店铺："+t._s(t.channelGoodsInfo.storeName))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("商品品牌："+t._s(t.channelGoodsInfo.goodsBrandName))])]),t._v(" "),o("el-col",{attrs:{span:13}},[o("div",{staticClass:"p10"},[t._v("商品分类："+t._s(t.channelGoodsInfo.goodsCategoryName))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("商品价格（元）："+t._s(t.channelGoodsInfo.sellingPrice))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("库存量（件）："+t._s(t.channelGoodsInfo.inventory))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("佣金比例："+t._s(t.inverseStr))])])],1)],1),t._v(" "),o("div",{staticClass:"content  mb20"},[o("div",{staticClass:"content-title"},[t._v("商品属性")]),t._v(" "),o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"}},[o("el-table-column",{attrs:{prop:"specName1",label:t.attrName[0].attributeName}}),t._v(" "),2==t.attrLength?o("el-table-column",{attrs:{prop:"specName2",label:t.attrName[1].attributeName}}):t._e(),t._v(" "),3==t.attrLength?o("el-table-column",{attrs:{prop:"specName3",label:t.attrName[2].attributeName}}):t._e(),t._v(" "),o("el-table-column",{attrs:{prop:"sellingPrice",label:"销售价(元)"}}),t._v(" "),o("el-table-column",{attrs:{prop:"inventory",label:"库存量(件)"}}),t._v(" "),o("el-table-column",{attrs:{prop:"skuCommission",label:"*佣金比例"}})],1)],1),t._v(" "),o("div",{staticClass:"content"},[o("div",{staticClass:"content-title"},[t._v("推荐信息")]),t._v(" "),o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:11}},[o("div",{staticClass:"p10"},[t._v("总推荐数："+t._s(t.channelGoodsInfo.goodsRecommendCount))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("总点击数："+t._s(t.channelGoodsInfo.goodsClickCount))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("总结算数："+t._s(t.channelGoodsInfo.goodsSettleCount))])]),t._v(" "),o("el-col",{attrs:{span:13}},[o("div",{staticClass:"p10"},[t._v("总销售额（元）："+t._s(t.channelGoodsInfo.grossDealAmount))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("总产生佣金（元）："+t._s(t.channelGoodsInfo.grossCommisionAmount))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("新增时间："+t._s(t.channelGoodsInfo.createTime))]),t._v(" "),o("div",{staticClass:"p10"},[t._v("推荐截止时间："+t._s(t.channelGoodsInfo.endUseTime))])])],1)],1),t._v(" "),o("el-button",{staticClass:"orange-bg mt20",on:{click:t.goBack}},[t._v("返  回")])],1)},e=[];n._withStripped=!0;var s={render:n,staticRenderFns:e};a.a=s}});