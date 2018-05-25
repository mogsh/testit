webpackJsonp([100],{309:function(e,t,a){"use strict";function l(e){o||a(650)}Object.defineProperty(t,"__esModule",{value:!0});var n=a(418),s=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);var i=a(652),o=!1,u=a(21),c=l,p=u(s.a,i.a,!1,c,"data-v-fa65454e",null);p.options.__file="src\\component\\admin\\backstage\\Staff.vue",t.default=p.exports},418:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={filters:{changeEmployeeStatus:function(e){return 1==e?"在职":"离职"},changeUserStatus:function(e){return 1==e?"启用":"禁用"}},data:function(){return{total:0,pages:0,val1:"",val2:"",val3:"",options1:[{value:"1",label:"在职"},{value:"0",label:"离职"}],options2:[{value:"1",label:"启用"},{value:"0",label:"禁用"}],query:{pageNum:1,pageSize:10,name:"",employeeStatus:"",userStatus:""},tableData:[]}},methods:{getStaff:function(){var e=this;this.$http.get(this.$api.findPlatformEmployeeListPage,{params:this.query}).then(function(t){e.tableData=t.data.data.list,e.total=t.data.data.total})},checkStaff:function(e){this.$router.push({name:"bes",params:{id:e.platformEmployeeId}})},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.query.pageSize=e,this.getStaff()},handleCurrentChange:function(e){this.query.pageNum=e,this.getStaff()},addStaff:function(){this.$router.push("/backstage/addStaff")},searchVal1:function(){this.getStaff()},selectVal2:function(){this.query.employeeStatus=this.val2,this.getStaff()},selectVal3:function(){this.query.userStatus=this.val3,this.getStaff()}},created:function(){this.getStaff()}}},650:function(e,t,a){var l=a(651);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(20)("2fcdb1a8",l,!1)},651:function(e,t,a){t=e.exports=a(7)(!1),t.push([e.i,"\n.btn-group[data-v-fa65454e],\n.search-group[data-v-fa65454e] {\n  margin-bottom: 20px;\n}\n.pagination[data-v-fa65454e] {\n  float: right;\n}\n",""])},652:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"breadcrumb"},[a("div",{staticClass:"breadcrumb-head"},[e._v("后台管理")]),e._v(" "),a("el-breadcrumb",e._l(e.$route.meta.bread,function(t,l){return a("el-breadcrumb-item",{key:l},[e._v(e._s(t))])}))],1),e._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"btn-group"},[a("el-button",{staticClass:"purple-bg",attrs:{icon:"el-icon-plus"},on:{click:e.addStaff}},[e._v("新增职员")])],1),e._v(" "),a("div",{staticClass:"search-group"},[a("el-input",{staticClass:"search-input",attrs:{placeholder:"搜索职员名称/编号/账号/职位","prefix-icon":"el-icon-search"},on:{blur:e.searchVal1},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchVal1(t)}},model:{value:e.query.name,callback:function(t){e.$set(e.query,"name","string"==typeof t?t.trim():t)},expression:"query.name"}}),e._v(" "),a("el-select",{attrs:{filterable:"",placeholder:"选择工作状态"},on:{change:e.selectVal2},model:{value:e.val2,callback:function(t){e.val2=t},expression:"val2"}},e._l(e.options1,function(e){return a("el-option",{key:e.value,staticClass:"search-select",attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-select",{attrs:{filterable:"",placeholder:"选择账号状态"},on:{change:e.selectVal3},model:{value:e.val3,callback:function(t){e.val3=t},expression:"val3"}},e._l(e.options2,function(e){return a("el-option",{key:e.value,staticClass:"search-select",attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"employeeName",label:"职员名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"employeeCode",label:"职员编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"职员账号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"position",label:"职位"}}),e._v(" "),a("el-table-column",{attrs:{prop:"employeeStatus",label:"工作状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e._f("changeEmployeeStatus")(t.row.employeeStatus))+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"userStatus",label:"账号状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(e._f("changeUserStatus")(t.row.userStatus))+"\n                ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"purple-txt",attrs:{type:"text",size:"small"},on:{click:function(a){e.checkStaff(t.row)}}},[e._v("查看")])]}}])})],1),e._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{type:"text",disabled:""}}),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":e.query.pageNum,"page-sizes":[10,20,50,100],"page-size":e.query.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)])},n=[];l._withStripped=!0;var s={render:l,staticRenderFns:n};t.a=s}});