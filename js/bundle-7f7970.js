webpackJsonp([4],{300:function(t,e,a){"use strict";function o(t){r||a(623)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(409),n=a.n(s);for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);var l=a(625),r=!1,c=a(21),d=o,v=c(n.a,l.a,!1,d,"data-v-6e8c25f9",null);v.options.__file="src\\component\\admin\\youCoin\\goodsDetail.vue",e.default=v.exports},409:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={filters:{changeIsUp:function(t){return 1==t?"上架":"下架"},changeGoodsAudit:function(t){return 2==t?"审核通过":3==t?"审核驳回":"未审核"}},data:function(){return{goodsDetail:"",carouselItem:[],attrName:[],tableData:[],attrLength:1}},methods:{getGoodsDetail:function(){var t=this,e={};e.goodsId=this.$route.params.goodsId,e.storeId=this.$route.params.storeId,this.$http.get(this.$api.findGoods,{params:e}).then(function(e){t.goodsDetail=e.data.data,t.carouselItem=t.goodsDetail.goodsCarouselImages,t.attrName=t.goodsDetail.goodsAttributeDtos,t.attrLength=t.goodsDetail.goodsAttributeDtos.length,t.tableData=t.goodsDetail.goodsSkuDtoList})},goBack:function(){"ycc"==this.$route.params.formWhere?this.$router.push({name:"ycc",params:{query:this.$route.params.query}}):this.$router.go(-1)}},created:function(){this.getGoodsDetail()}}},623:function(t,e,a){var o=a(624);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(20)("33af48bd",o,!1)},624:function(t,e,a){e=t.exports=a(7)(!1),e.push([t.i,"\n.content .content-title[data-v-6e8c25f9] {\n  font-size: 18px;\n  font-family: MicrosoftYaHei-Bold;\n  color: #606266;\n  font-weight: bold;\n  margin: 0 10px 20px;\n}\n.content1[data-v-6e8c25f9] {\n  margin-bottom: 20px;\n}\n.box-border[data-v-6e8c25f9] {\n  border: 1px solid #dcdfe6;\n  padding: 30px;\n  border-radius: 4px;\n}\n.carousel[data-v-6e8c25f9] {\n  width: 380px;\n}\n.content-detail .content-info[data-v-6e8c25f9] {\n  font-size: 16px;\n  font-family: MicrosoftYaHei-Bold;\n  color: #303133;\n  font-weight: bold;\n  padding-bottom: 30px;\n}\n",""])},625:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-head"},[t._v("商品管理")]),t._v(" "),a("el-breadcrumb",t._l(t.$route.meta.bread,function(e,o){return a("el-breadcrumb-item",{key:o},[t._v(t._s(e))])}))],1),t._v(" "),a("div",{staticClass:"content content1"},[a("div",{staticClass:"content-title"},[t._v("商品信息")]),t._v(" "),a("el-row",{attrs:{gutter:20,type:"flex",justify:"space-between"}},[a("el-col",{attrs:{span:10}},[a("div",{staticClass:"content-content"},[a("div",{staticClass:"check_goods carousel"},[[a("el-carousel",{attrs:{"indicator-position":"outside"}},t._l(t.carouselItem,function(t){return a("el-carousel-item",{key:t},[a("img",{attrs:{src:t,width:"380",height:"380"}})])}))]],2)])]),t._v(" "),a("el-col",[a("div",{staticClass:"content-detail"},[a("div",{staticClass:"content-info"},[t._v("所属店铺："+t._s(t.goodsDetail.storeName))]),t._v(" "),a("div",{staticClass:"content-info"},[t._v("商品名称："+t._s(t.goodsDetail.goodsName))]),t._v(" "),a("div",{staticClass:"content-info"},[t._v("商品编号："+t._s(t.goodsDetail.goodsCode))]),t._v(" "),a("div",{staticClass:"content-info"},[t._v("商品货号："+t._s(t.goodsDetail.itemCode))]),t._v(" "),a("div",{staticClass:"content-info"},[t._v("商品分类："+t._s(t.goodsDetail.goodsCategoryName))]),t._v(" "),a("div",{staticClass:"content-info"},[t._v("商品品牌："+t._s(t.goodsDetail.brandName))]),t._v(" "),a("div",{staticClass:"content-info"},[t._v("原价(元)：\n                        "),a("span",{staticClass:"orange-txt"},[t._v(t._s(t.goodsDetail.originalPrice))])]),t._v(" "),a("div",{staticClass:"content-info"},[t._v("销售价(元)：\n                        "),a("span",{staticClass:"orange-txt"},[t._v(t._s(t.goodsDetail.sellingPrice))])]),t._v(" "),a("div",{staticClass:"content-info"},[t._v("库存(件)：\n                        "),a("span",{staticClass:"orange-txt"},[t._v(t._s(t.goodsDetail.inventory))])]),t._v(" "),a("div",{staticClass:"content-info"},[t._v("销售状态："+t._s(t._f("changeIsUp")(t.goodsDetail.isUp)))]),t._v(" "),a("div",{staticClass:"content-info"},[t._v("审核状态："+t._s(t._f("changeGoodsAudit")(t.goodsDetail.goodsAudit)))])])])],1)],1),t._v(" "),a("div",{staticClass:"content content1"},[a("div",{staticClass:"content-title"},[t._v("商品属性")]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"specName1",label:t.attrName[0].attributeName}}),t._v(" "),2==t.attrLength?a("el-table-column",{attrs:{prop:"specName2",label:t.attrName[1].attributeName}}):t._e(),t._v(" "),3==t.attrLength?a("el-table-column",{attrs:{prop:"specName3",label:t.attrName[2].attributeName}}):t._e(),t._v(" "),a("el-table-column",{attrs:{prop:"originalPrice",label:"原价"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sellingPrice",label:"销售价"}}),t._v(" "),a("el-table-column",{attrs:{prop:"inventory",label:"库存"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品图片"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.imageUrl,width:"50",height:"50"}})]}}])})],1)],1),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[t._v("商品详情")]),t._v(" "),a("div",{staticClass:"box-border",domProps:{innerHTML:t._s(t.goodsDetail.detail)}})]),t._v(" "),a("div",{staticClass:"mt20"},[a("el-button",{staticClass:"orange-bg mt20",staticStyle:{width:"100px"},on:{click:t.goBack}},[t._v("返回")])],1)])},s=[];o._withStripped=!0;var n={render:o,staticRenderFns:s};e.a=n}});