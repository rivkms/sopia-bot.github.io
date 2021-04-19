(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-496c92fc"],{"0d27":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"mt-6"},[r("v-col",{attrs:{cols:"0",sm:"1",md:"1"}}),r("v-col",[r("h1",{staticClass:"display-1 purple--text text--darken-4"},[t._v("Itv 객체")]),r("h2",{staticClass:"subtitle-1 grey--text mt-2"},[t._v("일정 시간마다 반복 작업 수행")]),r("v-divider",{staticClass:"my-6"}),r("v-row",[r("v-col",[r("p",[r("code",{staticClass:"teal--text text--darken-4"},[r("span",{staticClass:"title font-weight-bold py-0"},[t._v(" sopia.itv : "),r("span",{staticClass:"font-weight-regular"},[t._v("Object")])])])]),t._l(t.objs,(function(e,i){return r("div",{key:i},[r("v-divider",{staticClass:"my-12"}),r("v-chip",{staticClass:"ma-2 text-capitalize",attrs:{color:t.typeColor(e.type),small:"",outlined:""}},[t._v(" "+t._s(e.type)+" ")]),r("code",{staticClass:"black--text mr-3"},[r("span",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(e.name))])]),r("span",[t._v(" "+t._s(e.desc)+" ")]),e.sub?r("div",[r("h3",{staticClass:"subheader-1 my-3 pl-3"},[t._v(t._s(e.sub))]),r("v-simple-table",{attrs:{"fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",{staticClass:"text-left"},[t._v("Name")]),r("th",{staticClass:"text-left"},[t._v("Type")]),r("th",{staticClass:"text-left"},[t._v("Description")])])]),r("tbody",t._l(e.params,(function(i,a){return r("tr",{key:e+""+a},[r("td",{staticClass:"text-capitalize"},[t._v(" "+t._s(i.name)+" ")]),r("td",{staticClass:"text-capitalize"},[r("code",{class:t.typeColor(i.type,!0)},[t._v(t._s(i.type))])]),r("td",{staticClass:"text-capitalize"},[t._v(" "+t._s(i.desc)+" ")])])})),0)]},proxy:!0}],null,!0)})],1):t._e()],1)}))],2)],1),r("v-divider",{staticClass:"mt-12 mb-3"}),r("v-row",{staticClass:"my-6"},[r("v-col",{attrs:{align:"center"}},[r("p",{staticClass:"blue-grey--text text--lighten-3"},[t._v("작성자 - 개발자 윤군")])])],1)],1),r("v-col",{attrs:{cols:"0",sm:"1",md:"4"}})],1)],1)},a=[],n=r("87a1"),s=r("44ad"),o=r.n(s),c={metaInfo:{title:o()("meta.docs.api.itv"),htmlAttrs:{lang:navigator.language,dir:"ltr"},meta:[{charset:"utf-8"},{meta:"description",content:o()("meta.docs.api.itv.desc"),vmid:"description"},{name:"keywords",content:Object(n["b"])(["봇 사용법","스푼 라디오 매니저 사용법","api","sopia","반복","itv","interval","인터벌"])},{name:"author",content:o()("author")},{property:"og:title",content:o()("meta.docs.api.itv"),vmid:"og:title"},{property:"og:description",content:o()("meta.docs.api.itv.desc"),vmid:"og:description"},{property:"og:image",content:r("5e56"),vmid:"og:image"},{name:"viewport",content:"width=device-width, initial-scale=1"}]},name:"api.itv",methods:{typeColor:function(t,e){var r="",i="";switch(t){case"event":r="yellow",i="darken-3";break;case"object":r="green",i="darken-4";break;case"function":r="cyan",i="darken-4";break;case"boolean":r="pink",i="darken-4";break;case"string":r="lime",i="darken-2";break}return e&&(r+="--text",i="text--"+i),"".concat(r," ").concat(i)}},components:{},created:function(){},mounted:function(){},computed:{small_:function(){return this.$store.getters.small}},watch:{small_:function(t){this.small=t}},data:function(){return{small:!1,objs:[{type:"function",name:"add",desc:"반복 작업 추가",sub:"파라미터",params:[{name:"key",type:"string",desc:"반복 작업 이름"},{name:"func",type:"function",desc:"반복 작업을 수행할 함수"},{name:"time",type:"number",desc:"반복 시간 ( ms 단위 )"}]},{type:"function",name:"clear",desc:"반복 작업 제거",sub:"파라미터",params:[{name:"key",type:"string",desc:"반복 작업 이름"}]},{type:"function",name:"clear",desc:"반복 작업 다시 시작",sub:"파라미터",params:[{name:"key",type:"string",desc:"반복 작업 이름"}]}]}}},l=c,p=r("2877"),u=r("6544"),d=r.n(u),h=r("cc20"),f=r("62ad"),b=r("a523"),v=r("ce7e"),m=r("0fd9"),y=r("1f4f"),g=Object(p["a"])(l,i,a,!1,null,null,null);e["default"]=g.exports;d()(g,{VChip:h["a"],VCol:f["a"],VContainer:b["a"],VDivider:v["a"],VRow:m["a"],VSimpleTable:y["a"]})},"1f4f":function(t,e,r){"use strict";r("8b37");var i=r("80d2"),a=r("7560"),n=r("58df");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e["a"]=Object(n["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return o({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(i["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"5e56":function(t,e,r){t.exports=r.p+"img/bot.b906bd01.png"},"8adc":function(t,e,r){},"8b37":function(t,e,r){},"8ce9":function(t,e,r){},cc20:function(t,e,r){"use strict";r("8adc");var i=r("58df"),a=r("0789"),n=r("9d26"),s=r("a9ad"),o=r("4e82"),c=r("7560"),l=r("f2e7"),p=r("1c87"),u=r("af2b"),d=r("d9bd");function h(t,e){return y(t)||m(t,e)||b(t,e)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(t,e){if(t){if("string"===typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}function m(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],i=!0,a=!1,n=void 0;try{for(var s,o=t[Symbol.iterator]();!(i=(s=o.next()).done);i=!0)if(r.push(s.value),e&&r.length===e)break}catch(c){a=!0,n=c}finally{try{i||null==o["return"]||o["return"]()}finally{if(a)throw n}}return r}}function y(t){if(Array.isArray(t))return t}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function C(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e["a"]=Object(i["a"])(s["a"],u["a"],p["a"],c["a"],Object(o["a"])("chipGroup"),Object(l["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return O(O(O(O({"v-chip":!0},p["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(p["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var r=h(e,2),i=r[0],a=r[1];t.$attrs.hasOwnProperty(i)&&Object(d["a"])(i,a,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(n["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["b"],t)},genClose:function(){var t=this;return this.$createElement(n["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),i=r.tag,a=r.data;a.attrs=O(O({},a.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex}),a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);var n=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(n,a),e)}})},ce7e:function(t,e,r){"use strict";r("8ce9");var i=r("7560");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:n({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:n({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-496c92fc.js.map