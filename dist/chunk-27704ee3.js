(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27704ee3"],{"5b46":function(t,e,r){t.exports=r.p+"img/present.bde7b819.png"},"8ce9":function(t,e,r){},a1c0:function(t,e,r){t.exports=r.p+"img/sticker.ac4c4b12.png"},a1ec:function(t,e,r){t.exports=r.p+"img/command.6eaf96c4.png"},a3bc:function(t,e,r){t.exports=r.p+"img/join_like.0314f30f.png"},b30b:function(t,e,r){t.exports=r.p+"img/loop-1.1b07e6b2.gif"},ce7e:function(t,e,r){"use strict";r("8ce9");var n=r("7560");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:i({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:i({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},f44f:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"mt-6"},[r("v-col",{attrs:{cols:"0",sm:"1",md:"1"}}),r("v-col",[r("h1",{staticClass:"display-1 purple--text text--darken-4"},[t._v("쉬운 명령어 추가")]),r("h2",{staticClass:"subtitle-1 grey--text mt-2"},[t._v("이걸 준비하게 될 줄은 몰랐어")]),r("v-divider",{staticClass:"my-6"}),r("v-row",{staticClass:"mt-6"},[r("v-col",[r("v-sheet",{staticClass:"mx-auto pa-6 sheet-card",attrs:{elevation:"4"}},[t._v(" 해당 번들은 소피아 버전 "),r("code",[t._v("1.6.0")]),t._v(" 이상부터 지원합니다. ")])],1)],1),r("v-row",{staticClass:"mt-6"},[r("v-col",[r("v-sheet",{staticClass:"mx-auto pa-6 sheet-card",attrs:{elevation:"4"}},[t._v(" 해당 번들과 동시에 "),r("router-link",{staticClass:"blue-grey--text",attrs:{to:"/docs/bundle/onoff/"}},[t._v("OnOff")]),t._v(" 번들을 사용중이라면, 소피아에 오동작이 일어날 수 있습니다. ")],1)],1)],1),r("Picture",{attrs:{src:t.imgs.viewMenu}}),r("v-row",[r("v-col",[t._v(" 해당 번들을 사용기로 하면, OTHER 메뉴에 "),r("code",[t._v("EZ-CMD")]),t._v(" 메뉴가 추가됩니다."),r("br"),t._v(" 만약 추가되지 않았거나 페이지가 정상 이동하지 않을 경우 소피아 프로그램을 재시작 해야 합니다. ")])],1),r("Picture",{attrs:{src:t.imgs.joinLike}}),r("v-row",[r("v-col",[t._v(" 입장 & 하트에 대한 반응을 쉽게 설정할 수 있습니다."),r("br"),t._v(" 설명에 존재하듯, 예약어 목록을 그대로 사용하면 정보가 변경되어 출력됩니다. ")])],1),r("Picture",{attrs:{src:t.imgs.present}}),r("v-row",[r("v-col",[t._v(" 스푼을 선물받았을 때에 반응을 쉽게 설정할 수 있습니다."),r("br"),t._v(" 설명에 존재하듯, 예약어 목록을 그대로 사용하면 정보가 변경되어 출력됩니다."),r("br"),r("br"),r("code",[t._v("추가")]),t._v(" 버튼을 누르면 빈 아이템이 생성됩니다."),r("br")])],1),r("Picture",{attrs:{src:t.imgs.sticker}}),r("v-row",[r("v-col",[r("p",[r("code",[t._v("스티커")]),t._v(" 버튼을 누르면 반응할 스푼 스티커를 선택할 수 있습니다.")]),r("p",[r("code",[t._v("기본")]),t._v(" 의 값은, 설정되지 않은 스티커에 대해 반응합니다.")])])],1),r("Picture",{attrs:{src:t.imgs.command}}),r("v-row",[r("v-col",[t._v(" 일정한 문장을 답변하는 명령어를 쉽게 등록합니다."),r("br"),t._v(" 설명에 존재하듯, 예약어 목록을 그대로 사용하면 정보가 변경되어 출력됩니다."),r("br"),r("code",[t._v("\\n")]),t._v(" 문자를 추가하여 개행을 삽입할 수 있습니다."),r("br"),t._v(" 왼쪽에는 반응할 문장을 추가합니다. 띄어쓰기는 올 수 없습니다. 위 사진으로 예를 들면 "),r("code",[t._v("!AA")]),t._v(" 명령어는 "),r("code",[t._v("aaa")]),t._v(" 란 문장을 답변합니다. ")])],1),r("h3",{staticClass:"red--text text--darken-3"},[t._v("모든 설정은 아래 적용 버튼을 눌러야 적용됩니다.")]),r("v-divider",{staticClass:"mt-12 mb-3"}),r("v-row",{staticClass:"my-6"},[r("v-col",{attrs:{align:"center"}},[r("p",{staticClass:"blue-grey--text text--lighten-3"},[t._v("작성자 - 개발자 윤군")])])],1)],1),r("v-col",{attrs:{cols:"0",sm:"1",md:"4"}})],1)],1)},c=[],i=r("87a1"),s=r("44ad"),o=r.n(s),a={name:"bundle.ez-cmd",metaInfo:{title:o()("meta.docs.bundle.ez-cmd"),htmlAttrs:{lang:navigator.language,dir:"ltr"},meta:[{charset:"utf-8"},{meta:"description",content:o()("meta.docs.bundle.ez-cmd.desc"),vmid:"description"},{name:"keywords",content:Object(i["b"])(["봇 사용법","스푼 라디오 매니저 사용법","명령어","추가","입장","좋아요","반응","멘트"])},{name:"author",content:o()("author")},{property:"og:title",content:o()("meta.docs.bundle.ez-cmd"),vmid:"og:title"},{property:"og:description",content:o()("meta.docs.bundle.ez-cmd.desc"),vmid:"og:description"},{property:"og:image",content:r("b30b"),vmid:"og:image"},{name:"viewport",content:"width=device-width, initial-scale=1"}]},components:{},created:function(){},mounted:function(){},computed:{small_:function(){return this.$store.getters.small}},watch:{small_:function(t){this.small=t}},data:function(){return{small:!1,imgs:{viewMenu:r("fc75"),joinLike:r("a3bc"),present:r("5b46"),sticker:r("a1c0"),command:r("a1ec")}}}},l=a,v=r("2877"),d=r("6544"),m=r.n(d),u=r("62ad"),p=r("a523"),b=r("ce7e"),f=r("0fd9"),g=r("8dd9"),_=Object(v["a"])(l,n,c,!1,null,null,null);e["default"]=_.exports;m()(_,{VCol:u["a"],VContainer:p["a"],VDivider:b["a"],VRow:f["a"],VSheet:g["a"]})},fc75:function(t,e,r){t.exports=r.p+"img/view-menu.f14114f0.png"}}]);
//# sourceMappingURL=chunk-27704ee3.js.map