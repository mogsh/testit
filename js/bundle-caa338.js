webpackJsonp([73],{259:function(e,t,a){"use strict";function l(e){i||a(500)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(368),s=a.n(r);for(var o in r)"default"!==o&&function(e){a.d(t,e,function(){return r[e]})}(o);var n=a(502),i=!1,c=a(21),u=l,d=c(s.a,n.a,!1,u,"data-v-22056370",null);d.options.__file="src\\component\\admin\\orders\\ToBeShipped.vue",t.default=d.exports},368:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(31),r=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default={data:function(){return{val1:"",val2:"",val3:"",val4:"",val5:"",val6:"",val7:"",val8:"",val9:"",val10:"",options:this.$globalData.orderStatus,options7:[],options4:this.$globalData.orderType,options5:this.$globalData.groupStatus,options6:this.$globalData.buyGroupUserRole,value8:"",total:0,pages:0,multipleSelection:[],query:{pageNum:1,pageSize:20,name:"",orderStatus:2,beginDate:"",endDate:"",beginPayTime:"",endPayTime:"",beginDeliveryDate:"",endDeliveryDate:"",beginReceiveDate:"",endReceiveDate:"",orderType:"",groupStatus:"",buyGroupUserRole:""},tableData:[]}},methods:{getOrderList:function(){var e=this;this.$http.get(this.$api.findOrdersListPage,{params:this.$tools.formatParams(this.query)}).then(function(t){e.tableData=t.data.data.list,e.total=t.data.data.total})},getShopData:function(){if(0!=this.options7.length)return 0;this.options7=this.$getShopOptions()},checkOrder:function(e){var t=0;switch(e.orderStatus){case 1:t=1,this.$router.push({name:"ood",params:{no:e.orderId,flag:t,type:"待付款",storeName:e.storeName}});break;case 2:t=2,this.$router.push({name:"ood",params:{no:e.orderId,flag:t,type:"待发货",storeName:e.storeName}});break;case 3:t=3,this.$router.push({name:"ood",params:{no:e.orderId,flag:t,type:"待收货",storeName:e.storeName}});break;case 4:t=4,this.$router.push({name:"ood",params:{no:e.orderId,flag:t,type:"已完成",storeName:e.storeName}});break;case 5:t=5,this.$router.push({name:"ood",params:{no:e.orderId,flag:t,type:"已取消",storeName:e.storeName}});case 6:t=6,this.$router.push({name:"ood",params:{no:e.orderId,flag:t,type:"已删除",storeName:e.storeName}})}},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.query.pageSize=e,this.getOrderList()},handleCurrentChange:function(e){this.query.pageNum=e,this.getOrderList()},searchVal1:function(){this.query.name=this.val1,this.getOrderList()},selectVal2:function(){this.query.orderStatus=this.val2,this.getOrderList()},selectVal4:function(){this.query.orderType=this.val4,this.getOrderList()},selectVal5:function(){this.query.groupStatus=this.val5,this.getOrderList()},selectVal6:function(){this.query.buyGroupUserRole=this.val6,this.getOrderList()},selectVal7:function(){this.query.storeId=this.val7,this.getOrderList()},selectVal3:function(){var e=this.$tools.formatDate(this.val3);this.query.beginDate=e.date0,this.query.endDate=e.date1,this.getOrderList()},selectVal8:function(){var e=this.$tools.formatDate(this.val8);this.query.beginDeliveryDate=e.date0,this.query.endDeliveryDate=e.date1,this.getOrderList()},selectVal9:function(){var e=this.$tools.formatDate(this.val9);this.query.beginReceiveDate=e.date0,this.query.endReceiveDate=e.date1,this.getOrderList()},selectVal10:function(){var e=this.$tools.formatDate(this.val10);this.query.beginPayTime=e.date0,this.query.endPayTime=e.date1,this.getOrderList()},exportOrder:function(){var e=this,t="";(0,r.default)(this.query).forEach(function(a){"name"!=a&&"orderStatus"!=a&&"beginDate"!=a&&"endDate"!=a&&"beginPayTime"!=a&&"endPayTime"!=a&&"beginDeliveryDate"!=a&&"endDeliveryDate"!=a&&"beginReceiveDate"!=a&&"endReceiveDate"!=a||""!=e.query[a]&&(t+="&"+a+"="+e.query[a])}),window.location.assign(this.$apiDomain+"/admin/orders/exportOrderList?"+t)}},created:function(){this.getOrderList()}}},500:function(e,t,a){var l=a(501);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(20)("fcc19978",l,!1)},501:function(e,t,a){t=e.exports=a(7)(!1),t.push([e.i,"\n.pagination[data-v-22056370] {\n  float: right;\n}\n",""])},502:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-head"},[e._v("订单管理")]),e._v(" "),a("el-breadcrumb",e._l(e.$route.meta.bread,function(t,l){return a("el-breadcrumb-item",{key:l},[e._v(e._s(t))])}))],1),e._v(" "),a("div",{staticClass:"content"},[a("div",[a("el-button",{staticClass:"purple-bg mb10",attrs:{icon:"el-icon-download"},on:{click:e.exportOrder}},[e._v("导出订单")])],1),e._v(" "),a("div",{staticClass:"search-group"},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"搜索购买用户/订单号","prefix-icon":"el-icon-search",clearable:""},on:{blur:e.searchVal1},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchVal1(t)}},model:{value:e.val1,callback:function(t){e.val1="string"==typeof t?t.trim():t},expression:"val1"}}),e._v(" "),a("el-select",{staticClass:"search-select mb10",attrs:{clearable:"",filterable:"",placeholder:"选择店铺"},on:{change:e.selectVal7,focus:e.getShopData},model:{value:e.val7,callback:function(t){e.val7=t},expression:"val7"}},e._l(e.options7,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-select",{staticClass:"search-select mb10",attrs:{clearable:"",filterable:"",placeholder:"选择订单类型"},on:{change:e.selectVal4},model:{value:e.val4,callback:function(t){e.val4=t},expression:"val4"}},e._l(e.options4,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-select",{staticClass:"search-select mb10",attrs:{clearable:"",filterable:"",placeholder:"选择团状态"},on:{change:e.selectVal5},model:{value:e.val5,callback:function(t){e.val5=t},expression:"val5"}},e._l(e.options5,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-select",{staticClass:"search-select mb10",attrs:{clearable:"",filterable:"",placeholder:"选择团角色"},on:{change:e.selectVal6},model:{value:e.val6,callback:function(t){e.val6=t},expression:"val6"}},e._l(e.options6,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-date-picker",{staticClass:"mb10",attrs:{type:"daterange","range-separator":"至","start-placeholder":"下单开始日期","end-placeholder":"下单结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.selectVal3},model:{value:e.val3,callback:function(t){e.val3=t},expression:"val3"}}),e._v(" "),a("el-date-picker",{staticClass:"mb10",attrs:{type:"daterange","range-separator":"至","start-placeholder":"付款开始日期","end-placeholder":"付款收货结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.selectVal10},model:{value:e.val10,callback:function(t){e.val10=t},expression:"val10"}}),e._v(" "),a("el-date-picker",{staticClass:"mb10",attrs:{type:"daterange","range-separator":"至","start-placeholder":"发货开始日期","end-placeholder":"发货结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.selectVal8},model:{value:e.val8,callback:function(t){e.val8=t},expression:"val8"}}),e._v(" "),a("el-date-picker",{staticClass:"mb10",attrs:{type:"daterange","range-separator":"至","start-placeholder":"收货开始日期","end-placeholder":"收货结束日期","value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:e.selectVal9},model:{value:e.val9,callback:function(t){e.val9=t},expression:"val9"}})],1),e._v(" "),a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark","default-sort":{prop:"time",order:"descending"}}},[a("el-table-column",{attrs:{type:"index",label:"序号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderSn",label:"订单号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"storeName",label:"所属店铺"}}),e._v(" "),a("el-table-column",{attrs:{prop:"nickName",label:"购买用户"}}),e._v(" "),a("el-table-column",{attrs:{prop:"payableAmount",label:"订单金额(元)"}}),e._v(" "),a("el-table-column",{attrs:{prop:"orderType",label:"订单类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("changeOrderType")(t.row.orderType))+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"团状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1!=t.row.orderType?a("div",[e._v("\n            "+e._s(e._f("changeGroupStatus")(t.row.status))+"\n          ")]):a("div")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"buyGroupUserRole",label:"团角色"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("changeBuyGroupUserRole")(t.row.buyGroupUserRole))+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"orderStatus",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("changeOrderStatus")(t.row.orderStatus))+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createDate",label:"下单时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"payTime",label:"付款时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"deliveryDate",label:"发货时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"receiveDate",label:"收货时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"detail",label:"商品详情"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"purple-txt",attrs:{type:"text",size:"small"},on:{click:function(a){e.checkOrder(t.row)}}},[e._v("查看")])]}}])})],1),e._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{type:"text",disabled:""}}),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.query.pageNum,"page-sizes":[20,50,100,200],"page-size":e.query.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)])},r=[];l._withStripped=!0;var s={render:l,staticRenderFns:r};t.a=s}});