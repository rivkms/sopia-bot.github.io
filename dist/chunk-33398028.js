(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33398028"],{"1f4f":function(t,e,a){"use strict";a("8b37");var r=a("80d2"),i=a("7560"),s=a("58df");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e["a"]=Object(s["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return o({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"5e56":function(t,e,a){t.exports=a.p+"img/bot.b906bd01.png"},"631a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"mt-6"},[a("v-col",{attrs:{cols:"0",sm:"1",md:"1"}}),a("v-col",[a("h1",{staticClass:"display-1 purple--text text--darken-4"},[t._v("Sopia 객체")]),a("h2",{staticClass:"subtitle-1 grey--text mt-2"},[t._v("모든 API의 집합소")]),a("v-divider",{staticClass:"my-6"}),a("v-row",{staticClass:"mt-6"},[a("v-col",[a("v-sheet",{staticClass:"mx-auto pa-6 sheet-card",attrs:{elevation:"4"}},[t._v(" 모든 API 는 "),a("code",[t._v("sopia")]),t._v(" 객체에서 지원합니다. 해당 객체는 "),a("a",{staticClass:"blue-grey--text",attrs:{href:"https://nodejs.org/api/events.html",target:"_blink"}},[t._v("EventEmitter")]),t._v(" 입니다. ")])],1)],1),a("v-row",[a("v-col",[a("p",[a("code",{staticClass:"teal--text text--darken-4"},[a("span",{staticClass:"title font-weight-bold py-0"},[t._v(" sopia :"),a("span",{staticClass:"font-weight-regular"},[t._v("EventEmitter")])])])]),t._l(t.objs,(function(e,r){return a("div",{key:r},[a("v-divider",{staticClass:"my-12"}),a("v-chip",{staticClass:"ma-2 text-capitalize",attrs:{color:t.typeColor(e.type),small:"",outlined:""}},[t._v(" "+t._s(e.type)+" ")]),a("code",{staticClass:"black--text mr-3"},[a("span",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(e.name))])]),a("span",[t._v(" "+t._s(e.desc)+" ")]),a("h3",{staticClass:"subheader-1 my-3 pl-3"},[t._v(t._s(e.sub))]),a("v-simple-table",{attrs:{"fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Name")]),a("th",{staticClass:"text-left"},[t._v("Type")]),a("th",{staticClass:"text-left"},[t._v("Description")])])]),a("tbody",t._l(e.params,(function(r,i){return a("tr",{key:e+""+i},[a("td",{staticClass:"text-capitalize"},[t._v(" "+t._s(r.name)+" ")]),a("td",{staticClass:"text-capitalize"},[a("code",{class:t.typeColor(r.type,!0)},[t._v(t._s(r.type))])]),a("td",{staticClass:"text-capitalize"},[t._v(" "+t._s(r.desc)+" ")])])})),0)]},proxy:!0}],null,!0)})],1)}))],2)],1),a("v-divider",{staticClass:"mt-12 mb-3"}),a("v-row",{staticClass:"my-6"},[a("v-col",{attrs:{align:"center"}},[a("p",{staticClass:"blue-grey--text text--lighten-3"},[t._v("작성자 - 개발자 윤군")])])],1)],1),a("v-col",{attrs:{cols:"0",sm:"1",md:"4"}})],1)],1)},i=[],s=a("87a1"),n=a("44ad"),o=a.n(n),c={metaInfo:{title:o()("meta.docs.api.sopia"),htmlAttrs:{lang:navigator.language,dir:"ltr"},meta:[{charset:"utf-8"},{meta:"description",content:o()("meta.docs.api.sopia.desc"),vmid:"description"},{name:"keywords",content:Object(s["b"])(["봇 사용법","스푼 라디오 매니저 사용법","api","sopia","이벤트","입장","좋아요","선물"])},{name:"author",content:o()("author")},{property:"og:title",content:o()("meta.docs.api.sopia"),vmid:"og:title"},{property:"og:description",content:o()("meta.docs.api.sopia.desc"),vmid:"og:description"},{property:"og:image",content:a("5e56"),vmid:"og:image"},{name:"viewport",content:"width=device-width, initial-scale=1"}]},name:"api.sopia",methods:{typeColor:function(t,e){var a="",r="";switch(t){case"event":a="yellow",r="darken-3";break;case"object":a="green",r="darken-4";break;case"function":a="cyan",r="darken-4";break}return e&&(a+="--text",r="text--"+r),"".concat(a," ").concat(r)}},components:{},created:function(){},mounted:function(){},computed:{small_:function(){return this.$store.getters.small}},watch:{small_:function(t){this.small=t}},data:function(){return{small:!1,objs:[{type:"event",name:"all",desc:"모든 라이브 이벤트 발생시",sub:"파라미터",params:[{name:"live event",type:"object",desc:"라이브 이벤트 발생시 정보"}]},{type:"event",name:"message",desc:"청취자가 채팅을 쳤을 때",sub:"파라미터",params:[{name:"live event",type:"object",desc:"라이브 이벤트 발생시 정보"}]},{type:"event",name:"join",desc:"청취자가 라이브에 입장했을 때",sub:"파라미터",params:[{name:"live event",type:"object",desc:"라이브 이벤트 발생시 정보"}]},{type:"event",name:"like",desc:"청취자가 좋아요를 눌렀을 때",sub:"파라미터",params:[{name:"live event",type:"object",desc:"라이브 이벤트 발생시 정보"}]},{type:"event",name:"present",desc:"청취자가 스푼을 후원했을 때",sub:"파라미터",params:[{name:"live event",type:"object",desc:"라이브 이벤트 발생시 정보"}]},{type:"event",name:"shadowjoin",desc:"청취자가 유령 상태로 라이브에 참여했을 때",sub:"파라미터",params:[{name:"live event",type:"object",desc:"라이브 이벤트 발생시 정보"}]},{type:"event",name:"update",desc:"라이브 정보가 업데이트 되었을 때",sub:"파라미터",params:[{name:"live event",type:"object",desc:"라이브 이벤트 발생시 정보"}]},{type:"function",name:"log",desc:"Console 에 기록하는 함수",sub:"파라미터",params:[{name:"args",type:"varargs",desc:"가변인자로, 전부 문자열화 되어 기록됩니다"}]}]}}},l=c,p=a("2877"),u=a("6544"),d=a.n(u),h=a("cc20"),v=a("62ad"),b=a("a523"),f=a("ce7e"),m=a("0fd9"),y=a("8dd9"),g=a("1f4f"),O=Object(p["a"])(l,r,i,!1,null,null,null);e["default"]=O.exports;d()(O,{VChip:h["a"],VCol:v["a"],VContainer:b["a"],VDivider:f["a"],VRow:m["a"],VSheet:y["a"],VSimpleTable:g["a"]})},"8adc":function(t,e,a){},"8b37":function(t,e,a){},"8ce9":function(t,e,a){},cc20:function(t,e,a){"use strict";a("8adc");var r=a("58df"),i=a("0789"),s=a("9d26"),n=a("a9ad"),o=a("4e82"),c=a("7560"),l=a("f2e7"),p=a("1c87"),u=a("af2b"),d=a("d9bd");function h(t,e){return y(t)||m(t,e)||b(t,e)||v()}function v(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(t,e){if(t){if("string"===typeof t)return f(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function m(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var a=[],r=!0,i=!1,s=void 0;try{for(var n,o=t[Symbol.iterator]();!(r=(n=o.next()).done);r=!0)if(a.push(n.value),e&&a.length===e)break}catch(c){i=!0,s=c}finally{try{r||null==o["return"]||o["return"]()}finally{if(i)throw s}}return a}}function y(t){if(Array.isArray(t))return t}function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){j(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function j(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e["a"]=Object(r["a"])(n["a"],u["a"],p["a"],c["a"],Object(o["a"])("chipGroup"),Object(l["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return O(O(O(O({"v-chip":!0},p["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(p["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=h(e,2),r=a[0],i=a[1];t.$attrs.hasOwnProperty(r)&&Object(d["a"])(r,i,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(s["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(i["b"],t)},genClose:function(){var t=this;return this.$createElement(s["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),r=a.tag,i=a.data;i.attrs=O(O({},i.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex}),i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);var s=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(s,i),e)}})},ce7e:function(t,e,a){"use strict";a("8ce9");var r=a("7560");function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e["a"]=r["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:s({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:s({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-33398028.js.map