(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6562662c"],{"034c":function(t,s,a){},"08bb":function(t,s,a){"use strict";var e=a("034c"),i=a.n(e);i.a},4649:function(t,s,a){"use strict";var e=a("e5d5"),i=a.n(e);i.a},a838:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"infoshow"},[a("div",{staticClass:"users"},[a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"box-card"},[a("div",{staticClass:"el-card mgb20 is-hover-shadow",staticStyle:{height:"252px"}},[a("div",{staticClass:"user-info"},[a("img",{staticClass:"avatar",attrs:{src:t.users.avatar,alt:""}}),a("div",{staticClass:"user-info-cont"},[a("span",{staticClass:"user-name"},[t._v(t._s(t.users.name))]),a("span",[t._v(t._s("manager"==t.users.identity?"管理员":"普通员工"))])])]),a("div",{staticClass:"user-info-list"},[a("span",[t._v("登录地址:")]),a("span",{staticClass:"address"},[t._v("郑州")])])])]),a("div",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"el-card is-hover-shadow",staticStyle:{height:"252px"}},[a("div",{staticClass:"el-card__header"},[a("span",[t._v("语言描述")])]),a("div",{staticClass:"el-card__body"},[a("div",{staticClass:"card-body-list"},[a("div",{staticClass:"title"},[t._v("JavaScript:")]),a("div",{staticClass:"progress"},[a("el-progress",{attrs:{percentage:70}})],1)]),a("div",{staticClass:"card-body-list"},[a("div",{staticClass:"title"},[t._v("Html:")]),a("el-progress",{staticClass:"progress",attrs:{percentage:80,color:"#8e71c7"}})],1),a("div",{staticClass:"card-body-list"},[a("div",{staticClass:"title"},[t._v("Css:")]),a("el-progress",{staticClass:"progress",attrs:{percentage:80,color:"#8e71c7"}})],1),a("div",{staticClass:"card-body-list"},[a("div",{staticClass:"title"},[t._v("Vue:")]),a("el-progress",{staticClass:"progress",attrs:{percentage:60,color:"#67c23a"}})],1),a("div",{staticClass:"card-body-list"},[a("div",{staticClass:"title"},[t._v("Node.js:")]),a("el-progress",{staticClass:"progress",attrs:{percentage:20,color:"#f56c6c"}})],1)])])])]),a("el-col",{attrs:{span:16}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-1"},[a("i",{staticClass:"el-icon-view grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("1234")]),a("div",[t._v("用户访问量")])])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-2 grid-con-1"},[a("i",{staticClass:"el-icon-message grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("321")]),a("div",[t._v("系统消息")])])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-3"},[a("i",{staticClass:"el-icon-goods grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("5000")]),a("div",[t._v("数量")])])])])],1)],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("2019年目标")])]),a("el-table",{attrs:{data:t.todoList}},[a("el-table-column",{attrs:{width:"40"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("el-checkbox",{model:{value:s.row.status,callback:function(a){t.$set(s.row,"status",a)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(s){return[a("div",{staticClass:"todo-item",class:{"todo-item-del":s.row.status}},[t._v(t._s(s.row.title))])]}}])})],1)],1),a("div",{staticClass:"box-card",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"el-card is-hover-shadow",staticStyle:{height:"400px"}},[a("div",{staticClass:"el-card__header"},[a("span",[t._v("时钟")])]),a("div",{staticClass:"el-card__body"},[a("Clock")],1)])])],1)],1)],1)])},i=[],r=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("canvas",{attrs:{id:"myCanvas",width:"500",height:"500"}})])}],c={name:"Clock",mounted:function(){this.myCanvas()},methods:{myCanvas:function(){var t=document.getElementById("myCanvas"),s=t.getContext("2d");function a(){var t=new Date,a=t.toDateString(),i=(t.toLocaleDateString(),t.getHours()),r=t.getMinutes(),l=t.getSeconds(),c=t.getMilliseconds(),o=l+c/1e3,n=r+o/60;this.gradient=s.createRadialGradient(150,150,5,150,150,200),gradient.addColorStop(0,"#fff"),gradient.addColorStop(1,"#fff"),s.fillStyle=gradient,s.fillRect(0,0,300,300),s.beginPath(),s.arc(150,150,120,e(270),e(30*i-90)),s.stroke(),s.beginPath(),s.arc(150,150,100,e(270),e(6*n-90)),s.stroke(),s.beginPath(),s.arc(150,150,80,e(270),e(6*o-90)),s.stroke(),s.font="15px Helvetica",s.fillStyle="rgba(0, 0, 0, 1)",s.fillText(a,100,150),s.font="15px Helvetica Bold",s.fillStyle="rgba(0, 0, 0, 1)";i=("0"+i).slice(-2),r=("0"+r).slice(-2),l=("0"+l).slice(-2);s.fillText(i+":"+r+":"+l+":"+c,175,280)}function e(t){var s=Math.PI/180;return t*s}s.strokeStyle="#00ffff",s.lineWidth=10,s.shadowBlur=9,s.shadowColor="#ffffff",setInterval(a,40)}}},o=c,n=(a("4649"),a("2877")),d=Object(n["a"])(o,r,l,!1,null,"24f985a6",null);d.options.__file="Clock.vue";var v=d.exports,u={name:"infoshow",data:function(){return{todoList:[{status:!0,title:"学会Vue"},{status:!1,title:"2019要学会React"}]}},computed:{users:function(){return this.$store.getters.user}},components:{Clock:v}},g=u,f=(a("08bb"),Object(n["a"])(g,e,i,!1,null,"3a537f30",null));f.options.__file="InfoShow.vue";s["default"]=f.exports},e5d5:function(t,s,a){}}]);
//# sourceMappingURL=chunk-6562662c.8b5c6107.js.map