webpackJsonp([46],{319:function(t,e,a){"use strict";function l(t){s||a(680)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(428),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a(682),s=!1,c=a(21),u=l,p=c(o.a,i.a,!1,u,"data-v-1db8f073",null);p.options.__file="src\\component\\admin\\recommendation\\role\\Commander.vue",e.default=p.exports},428:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={filters:{changeOrganization:function(t){return null==t?"无":t},changeIsUp:function(t){return 1==t?"启用":"停用"}},data:function(){return{formOfEdit:{v1:!0,v2:2},showDialog:!1,val1:"",val2:"",val3:"",val4:"",val5:[],levels:[],options2:[],options3:[],options4:[],total:0,pages:0,query:{pageNum:1,pageSize:20,searchName:"",channelOrganizationId:"",storeId:"",commissionRateConfId:"",beginTime:"",endTime:"",orderByGoodsClickCount:"",orderByGrossDealCount:"",orderByPreDealAmount:"",orderByPreSettleAmount:"",orderByCommisionRate:"",orderByCreateTime:""},tableData:[{v1:12,v2:22}]}},methods:{getRecommendationData:function(){},getShopData:function(){},getChannelOrganization:function(){},getChannelCommissionRateConf:function(){},searchVal1:function(){this.query.searchName=this.val1},selectVal2:function(){this.query.channelOrganizationId=this.val2},selectVal3:function(){this.query.storeId=this.val3},selectVal4:function(){},selectVal5:function(){},check:function(t,e){this.$router.push({name:"rcd",params:{}})},edit:function(){this.showDialog=!0},save:function(){this.showDialog=!1},cancel:function(){this.showDialog=!1},handleSizeChange:function(t){this.query.pageSize=t},handleCurrentChange:function(t){this.query.pageNum=t}},created:function(){}}},680:function(t,e,a){var l=a(681);"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);a(20)("0e9fead7",l,!1)},681:function(t,e,a){e=t.exports=a(7)(!1),e.push([t.i,"\n.search-input250[data-v-1db8f073] {\n  width: 250px !important;\n}\n.search-input160[data-v-1db8f073] {\n  width: 160px !important;\n}\n.btn-group[data-v-1db8f073],\n.search-group[data-v-1db8f073] {\n  margin-bottom: 20px;\n}\n.pagination[data-v-1db8f073] {\n  float: right;\n}\n.up-btn[data-v-1db8f073] {\n  position: relative;\n}\n.file-upload[data-v-1db8f073] {\n  position: absolute;\n  background: red;\n  color: #fff;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n.table-gray-text[data-v-1db8f073] {\n  color: #999999;\n  font-size: 14px;\n}\n",""])},682:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-head"},[t._v("推荐管理")]),t._v(" "),a("el-breadcrumb",t._l(t.$route.meta.bread,function(e,l){return a("el-breadcrumb-item",{key:l},[t._v(t._s(e))])}))],1),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"search-group"},[a("el-input",{staticClass:"search-input250 mb10",staticStyle:{width:"400px"},attrs:{clearable:"",placeholder:"搜索用户昵称/编号","prefix-icon":"el-icon-search"},on:{blur:t.searchVal1},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchVal1(e)}},model:{value:t.val1,callback:function(e){t.val1=e},expression:"val1"}}),t._v(" "),a("el-select",{staticClass:"search-select mb10",attrs:{clearable:"",filterable:"",placeholder:"选择团长状态"},on:{change:t.selectVal2},model:{value:t.val2,callback:function(e){t.val2=e},expression:"val2"}},t._l(t.options2,function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"用户名称"}}),t._v(">\n      "),a("el-table-column",{attrs:{prop:"v1",label:"用户编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"绑定账号数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"推荐团长数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"推荐人编号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"总推荐数",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"总点击数",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"总结算数",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"总成交额(元)",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"总收入(元)",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"可提现额(元)",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"已提现额(元)",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"v1",label:"团长状态"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"purple-txt",attrs:{type:"text",size:"small"},on:{click:function(a){t.check(e.row,e.$index)}}},[t._v("查看")]),t._v(" "),a("el-button",{staticClass:"orange-txt",attrs:{type:"text",size:"small"},on:{click:function(a){t.edit(e.row,e.$index)}}},[t._v("编辑")])]}}])})],1),t._v(" "),a("div",{staticClass:"mt20"},[a("el-button",{attrs:{type:"text"}}),t._v(" "),a("div",{staticClass:"fr"},[a("el-pagination",{attrs:{"current-page":t.query.pageNum,"page-sizes":[20,50,100,200],"page-size":t.query.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)],1),t._v(" "),a("el-dialog",{staticClass:"content",attrs:{title:"编辑团长信息",visible:t.showDialog},on:{"update:visible":function(e){t.showDialog=e}}},[a("el-form",{ref:"formOfEdit",attrs:{model:t.formOfEdit,"label-position":"left","label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"用户名称",prop:"v1"}},[t._v("\n            "+t._s(t.formOfEdit.v1)+"\n          ")])],1)],1),t._v(" "),a("el-row",[a("el-form-item",{attrs:{prop:"v1",label:"团长状态"}},[a("el-switch",{model:{value:t.formOfEdit.v1,callback:function(e){t.$set(t.formOfEdit,"v1",e)},expression:"formOfEdit.v1"}})],1)],1)],1),t._v(" "),a("el-button",{staticClass:"purple-bg",on:{click:t.save}},[t._v("保存")]),t._v(" "),a("el-button",{staticClass:"orange-bg",on:{click:t.cancel}},[t._v("关闭")])],1)],1)},n=[];l._withStripped=!0;var o={render:l,staticRenderFns:n};e.a=o}});