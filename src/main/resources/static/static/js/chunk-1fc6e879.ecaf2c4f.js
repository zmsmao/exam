(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fc6e879"],{"0465":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("data-table",{ref:"pagingTable",attrs:{options:t.options,"list-query":t.listQuery}},[n("template",{slot:"filter-content"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"搜索考试名称"},model:{value:t.listQuery.params.title,callback:function(e){t.$set(t.listQuery.params,"title",e)},expression:"listQuery.params.title"}})],1),n("template",{slot:"data-columns"},[n("el-table-column",{attrs:{label:"考试名称",prop:"title","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"考试次数",prop:"tryCount",align:"center"}}),n("el-table-column",{attrs:{label:"最高分",prop:"maxScore",align:"center"}}),n("el-table-column",{attrs:{label:"是否通过",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.passed?n("span",{staticStyle:{color:"#00ff00"}},[t._v("通过")]):n("span",{staticStyle:{color:"#ff0000"}},[t._v("未通过")])]}}])}),n("el-table-column",{attrs:{label:"最后考试时间",prop:"updateTime",align:"center"}}),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-view"},on:{click:function(n){return t.handleExamDetail(e.row.examId)}}},[t._v("详情")]),n("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-close"},on:{click:function(n){return t.handlerExamBook(e.row.examId)}}},[t._v("错题")])]}}])})],1)],2),n("el-dialog",{attrs:{title:"考试明细",visible:t.dialogVisible,width:"60%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"el-dialog-div"},[n("my-paper-list",{attrs:{"exam-id":t.examId,"user-id":t.userId}})],1)])],1)},i=[],r=n("5530"),o=n("7845"),l=n("0c00"),s=n("2f62"),u={name:"MyExamList",components:{MyPaperList:l["a"],DataTable:o["a"]},data:function(){return{dialogVisible:!1,examId:"",listQuery:{current:1,size:10,params:{title:""}},options:{multi:!1,listUrl:"/exam/api/user/exam/my-paging"}}},computed:Object(r["a"])({},Object(s["b"])(["userId"])),methods:{handleExamDetail:function(t){this.examId=t,this.dialogVisible=!0},handlerExamBook:function(t){this.$router.push({name:"BookList",params:{examId:t}})}}},c=u,d=(n("2bbf"),n("2877")),p=Object(d["a"])(c,a,i,!1,null,"66c99450",null);e["default"]=p.exports},"09f4":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var a=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function i(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(t,e,n){var o=r(),l=t-o,s=20,u=0;e="undefined"===typeof e?500:e;var c=function t(){u+=s;var r=Math.easeInOutQuad(u,o,l,e);i(r),u<e?a(t):n&&"function"===typeof n&&n()};c()}},"0c00":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.paperList,(function(e){return n("el-card",{staticStyle:{"margin-bottom":"10px","line-height":"30px"}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:12}},[t._v(" 考试时间："+t._s(e.createTime)+" ")]),n("el-col",{attrs:{span:12}},[t._v(" 考试用时："+t._s(e.userTime)+"分钟 ")]),n("el-col",{attrs:{span:12}},[t._v(" 考试得分："+t._s(e.userScore)+" ")]),n("el-col",{attrs:{span:12}},[t._v(" 是否合格："+t._s(e.userScore>e.qualifyScore?"是":"否")+" ")]),n("el-col",{attrs:{span:12}},[t._v(" 考试状态："+t._s(t._f("paperStateFilter")(e.state))+" ")])],1)],1)})),1)},i=[],r=n("6066"),o={name:"UserPaperList",props:{examId:{type:String,defaultValue:""},userId:{type:String,defaultValue:""}},data:function(){return{value1:null,paperList:[]}},watch:{examId:{handler:function(){this.fetchPaperList()},deep:!0},userId:{handler:function(){this.fetchPaperList()},deep:!0}},created:function(){this.fetchPaperList()},methods:{fetchPaperList:function(){var t=this;Object(r["b"])(this.userId,this.examId).then((function(e){t.paperList=e.data.records}))}}},l=o,s=n("2877"),u=Object(s["a"])(l,a,i,!1,null,null,null);e["a"]=u.exports},2934:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var a=n("b775");function i(t,e){return Object(a["b"])(t,e)}function r(t,e){return Object(a["b"])(t,{ids:e})}function o(t,e,n){return Object(a["b"])(t,{ids:e,state:n})}},"2bbf":function(t,e,n){"use strict";n("8f9d")},6066:function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));var a=n("b775");function i(t,e){return Object(a["b"])("/exam/api/paper/paper/paging",{current:1,size:5,params:{userId:t,examId:e}})}},"8f9d":function(t,e,n){}}]);