(window.webpackJsonpapp=window.webpackJsonpapp||[]).push([[8],{28:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"sub-caption"},[t._v(t._s(t.description))]),t._v(" "),n("KeepAlive",[n(t.taskComponentLoader,{tag:"Component",attrs:{id:"task-component","component-info":t.componentInfo,description:t.description},on:{"set-description":function(e){t.setDescription(e)}}})],1)],1)};i._withStripped=!0;const o=n(68);var s={data:()=>({task:"Рисование",componentName:null,componentData:null,description:null,taskList:null}),computed:{taskComponentLoader(){return this.getTask(),()=>n(31)(`./${this.componentInfo.name}/index.vue`)}},mounted(){this.$parent.setCaption(this.task)},methods:{getDescription(){return this.description},setDescription(t){this.description=t},getTask(){this.taskList=o.taskList;const t=Math.floor(Math.random()*this.taskList.length);this.description=this.taskList[t].description,this.componentInfo=this.taskList[t].componentInfo},setResult(t){this.$parent.setResult(t)}}},a=(n(69),n(0)),r=Object(a.a)(s,i,[],!1,null,null,null);r.options.__file="components/tasks/painting/index.vue";e.default=r.exports},31:function(t,e,n){var i={"./color-selector/index.vue":[45,3],"./phrase-builder/index.vue":[46,1],"./player/index.vue":[47,11],"./simple-image/index.vue":[48,10],"./simple-math/index.vue":[44,12],"./words-pairs/index.vue":[49,2]};function o(t){var e=i[t];return e?n.e(e[1]).then(function(){var t=e[0];return n(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}o.keys=function(){return Object.keys(i)},o.id=31,t.exports=o},53:function(t,e,n){},68:function(t){t.exports={name:"Рисование",type:"painting",taskList:[{id:0,description:"Выбери $ цвет",mark:3,componentInfo:{name:"color-selector",data:[{name:"красный",value:"red"},{name:"синий",value:"blue"},{name:"желтый",value:"yellow"},{name:"коричневый",value:"brown"},{name:"лиловый",value:"magenta"}]}}]}},69:function(t,e,n){"use strict";var i=n(53);n.n(i).a}}]);
//# sourceMappingURL=8.09a087fd980a4ceb4ed0.js.map