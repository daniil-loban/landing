(window.webpackJsonpapp=window.webpackJsonpapp||[]).push([[6],{25:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"sub-caption"},[e._v(e._s(e.description))]),e._v(" "),n("KeepAlive",[n(e.taskComponentLoader,{tag:"Component",attrs:{id:"task-component","component-info":e.componentInfo,description:e.description},on:{"set-description":function(t){e.setDescription(t)}}})],1)],1)};o._withStripped=!0;const i=n(61);var s={data:()=>({task:"Aнглийский",description:null,componentName:null,componentData:null,componentInfo:null,taskList:null}),computed:{taskComponentLoader(){return this.getTask(),()=>n(31)(`./${this.componentName}/index.vue`)}},mounted(){this.$parent.setCaption(this.task)},methods:{getDescription(){return this.description},setDescription(e){this.description=e},getTask(){this.taskList=i.taskList;const e=Math.floor(Math.random()*this.taskList.length);this.description=this.taskList[e].description,this.componentInfo=this.taskList[e].componentInfo,this.componentData=this.componentInfo.data,this.componentName=this.componentInfo.name},setResult(e){this.$parent.setResult(e)}}},r=(n(62),n(0)),a=Object(r.a)(s,o,[],!1,null,null,null);a.options.__file="components/tasks/english/index.vue";t.default=a.exports},31:function(e,t,n){var o={"./color-selector/index.vue":[45,3],"./phrase-builder/index.vue":[46,1],"./player/index.vue":[47,11],"./simple-image/index.vue":[48,10],"./simple-math/index.vue":[44,12],"./words-pairs/index.vue":[49,2]};function i(e){var t=o[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}i.keys=function(){return Object.keys(o)},i.id=31,e.exports=i},50:function(e,t,n){},61:function(e){e.exports={name:"Aнглийский",type:"english",taskList:[{id:0,description:"Listen the word",mark:3,componentInfo:{name:"player",data:{path:"./audio/",prefix:"em",zeros:3,ext:".wav",placeholder:"Enter that you heard",separator:"|",words:["cup|кружка","summer|лето","redundant|избыточный","industrial|промышленный","pencil|ручка","forget|забывать","senator|сенатор","contention|столкновение","map|карта","habit|привычка","gravity|гравитация","compatible|совместимый","set|набор","lemon|лимон","confess|признаваться","indefinite|бесконечный","pit|яма","ribbon|лента","forbid|запрещать","consistent|последовательный","mop|швабра","locker|ячейка, шкафчик","response|отклик","impossible|невозможный","bush|куст","could|мог бы","butcher|мясник","input|входные данные","army|армия","father|отец","depart|отправляться","garage|гараж","seed|зерно","reader|читатель","receive|получать","convenience|удобство","raw|сырой","lawn|газон","flawless|безупречный","install|устанавливать","border|граница","inform|информировать","do|делать","crew|экипаж","looser|пораженец","balloon|шарик","my|мой","silent|тихий","inside|внутри","excitement|возбуждение","now|сейчас","power|власть","downtown|центр города","encounter|сталкиваться","eight|восемь","face|лицо","payment|платеж","maintain|поддерживать","go|идти","owner|владелец","enroll|зачислять","component|компонент","bear|медведь","dairy|молочный","compare|сравнивать","chairman|председатель","beer|пиво","tier|звено","fearless|бесстрашный","appearance|внешний вид","oil|масло","moisture|влага","enjoy|кайфовать","employment|трудоустройство","pure|чистый","tourist|турист","contour|контур","endurance|выносливость","face|лицо","state|состояние","seed|зерно","brave|храбрый","bag|сумка","bubble|пузырь","bribe|взятка","cabob|шашлык","duck|утка","drain|дренаж","riddle|загадка","descend|спускаться","fox|лиса","frame|рама","muffin|кекс","enough|достаточно","gift|подарок","grape|виноград","giggle|хихикать","dialogue|диалог","home|дом","health|здоровье","mishap|неудача","inhabitant|обитатель","yes|да","few|мало","pure|чистый","beauty|красота","clock|часы","creek|ручей","psychic|психический","mechanic|механик","list|список","jelly|желе","problem|проблема","barrel|бочка","milk|молоко","dumb|тупой","common|общий","inform|информировать","neck|шея","corn|кукуруза","canyon|каньон","nanny|няня","long|длинный","ring|кольцо","bringing|приносящий","strength|сила","pop|газированый напиток","pride|гордость","upper|верхний","strap|ремешок","rock|камень","rare|редкий","carrot|морковка","terror|террор","sun|солнце","mess|беспорядок","success|успех","assessment|оценка","top|верхушка","trust|доверие","state|состояние","tasty|вкусный","van|микроавтобус","brave|храбрый","vendor|торговец","revenue|доход","wet|мокрый","lower|нижний","borrow|занимать","following|следующий","zip|замок-молния","beans|бобы","puzzle|головоломка","magazine|журнал","pleasure|удовольствие","massage|массаж","jeans|джинсы","region|регион","ranger|рейнджер","fridge|холодильник","shell|ракушка","session|сессия","finish|заканчивать","mushroom|гриб","chip|щепка","lunch|обед","culture|культура","challenge|вызов","thick|толстый","cloth|тряпка","nothing|ничто","thunder|гром","that|тот","those|те","father|отец","breathe|дышать"]}}},{id:1,description:"Write the sentence correctly",mark:3,componentInfo:{name:"phrase-builder",data:{ru_en:[["Лондон — столица Великобритании","London is the capital of Great Britain"],["Это один из крупнейших городов мира","It is one of the largest cities in the world"],["Лондон состоит из четырех частей: Вест-Энд, Ист-Энд, Сити и Вестминстер","There are four parts in London: the West End, the East End, the City and Westminster"],["Сити — это старейшая часть Лондона, ее финансовый и деловой центр","The City is the oldest part of London, its financial and business centre"],["Вестминстер — это тоже важный район столицы","Westminster is also an important part of the capital"],["Это административный центр Лондона","It is the administrative centre of London"],["К западу от Вестминстера находится Вест-Энд, самый богатый район Лондона","To the west of Westminster is West End, the richest part of London"],["К востоку от Вестминстера находится Ист-Энд, промышленный район столицы","To the east of Westminster is the East End, an industrial district of the capital"],["Официальная лондонская резиденция королевы — Бакингемский Дворец","The official London residence of the Queen is Buckingham Palace"],["В его внутреннем дворе каждый день проходит церемония смены караула","The daily ceremony of the Changing of the Guard takes place in its courtyard"]]}}}]}},62:function(e,t,n){"use strict";var o=n(50);n.n(o).a}}]);
//# sourceMappingURL=6.77ef25dfb3df0270f626.js.map