(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e1260df"],{2284:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-content",[e("pre",[t._v(t._s(t.sitemap)+"\n\t\t")])])},o=[],i=(e("4160"),e("a15b"),e("b0c0"),e("159b"),e("df7c")),a=e.n(i),s={name:"sitemap",mounted:function(){console.log(this),console.log(this.$route);var t="https://sopia-bot.github.io",n='<?xml version="1.0" encoding="UTF-8"?>\n';if(n+='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n',localStorage.routes){var e=JSON.parse(localStorage.routes);e.forEach((function(e){if("Sitemap"!==e.name){n+="\t<url>\n",n+="\t\t<loc>",n+=t+e.path,n+="</loc>\n",n+="\t</url>\n";var r=e.children;r&&r.forEach((function(r){var o=a.a.join(e.path,r.path);n+="\t<url>\n",n+="\t\t<loc>",n+=t+o,n+="</loc>\n",n+="\t</url>\n"}))}}))}n+="</urlset>",this.sitemap=n},data:function(){return{sitemap:"test"}}},u=s,c=e("2877"),l=e("6544"),f=e.n(l),p=e("a75b"),h=Object(c["a"])(u,r,o,!1,null,null,null);n["default"]=h.exports;f()(h,{VContent:p["a"]})},4362:function(t,n,e){n.nextTick=function(t){var n=Array.prototype.slice.call(arguments);n.shift(),setTimeout((function(){t.apply(null,n)}),0)},n.platform=n.arch=n.execPath=n.title="browser",n.pid=1,n.browser=!0,n.env={},n.argv=[],n.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";n.cwd=function(){return r},n.chdir=function(n){t||(t=e("df7c")),r=t.resolve(n,r)}}(),n.exit=n.kill=n.umask=n.dlopen=n.uptime=n.memoryUsage=n.uvCounters=function(){},n.features={}},a75b:function(t,n,e){"use strict";e("daaf");var r=e("d10f");n["a"]=r["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,e=t.top,r=t.right,o=t.footer,i=t.insetFooter,a=t.bottom,s=t.left;return{paddingTop:"".concat(e+n,"px"),paddingRight:"".concat(r,"px"),paddingBottom:"".concat(o+i+a,"px"),paddingLeft:"".concat(s,"px")}}},render:function(t){var n={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,n,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}})},daaf:function(t,n,e){},df7c:function(t,n,e){(function(t){function e(t,n){for(var e=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),e++):e&&(t.splice(r,1),e--)}if(n)for(;e--;e)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var n,e=0,r=-1,o=!0;for(n=t.length-1;n>=0;--n)if(47===t.charCodeAt(n)){if(!o){e=n+1;break}}else-1===r&&(o=!1,r=n+1);return-1===r?"":t.slice(e,r)}function o(t,n){if(t.filter)return t.filter(n);for(var e=[],r=0;r<t.length;r++)n(t[r],r,t)&&e.push(t[r]);return e}n.resolve=function(){for(var n="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(n=a+"/"+n,r="/"===a.charAt(0))}return n=e(o(n.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+n||"."},n.normalize=function(t){var r=n.isAbsolute(t),a="/"===i(t,-1);return t=e(o(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&a&&(t+="/"),(r?"/":"")+t},n.isAbsolute=function(t){return"/"===t.charAt(0)},n.join=function(){var t=Array.prototype.slice.call(arguments,0);return n.normalize(o(t,(function(t,n){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},n.relative=function(t,e){function r(t){for(var n=0;n<t.length;n++)if(""!==t[n])break;for(var e=t.length-1;e>=0;e--)if(""!==t[e])break;return n>e?[]:t.slice(n,e-n+1)}t=n.resolve(t).substr(1),e=n.resolve(e).substr(1);for(var o=r(t.split("/")),i=r(e.split("/")),a=Math.min(o.length,i.length),s=a,u=0;u<a;u++)if(o[u]!==i[u]){s=u;break}var c=[];for(u=s;u<o.length;u++)c.push("..");return c=c.concat(i.slice(s)),c.join("/")},n.sep="/",n.delimiter=":",n.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var n=t.charCodeAt(0),e=47===n,r=-1,o=!0,i=t.length-1;i>=1;--i)if(n=t.charCodeAt(i),47===n){if(!o){r=i;break}}else o=!1;return-1===r?e?"/":".":e&&1===r?"/":t.slice(0,r)},n.basename=function(t,n){var e=r(t);return n&&e.substr(-1*n.length)===n&&(e=e.substr(0,e.length-n.length)),e},n.extname=function(t){"string"!==typeof t&&(t+="");for(var n=-1,e=0,r=-1,o=!0,i=0,a=t.length-1;a>=0;--a){var s=t.charCodeAt(a);if(47!==s)-1===r&&(o=!1,r=a+1),46===s?-1===n?n=a:1!==i&&(i=1):-1!==n&&(i=-1);else if(!o){e=a+1;break}}return-1===n||-1===r||0===i||1===i&&n===r-1&&n===e+1?"":t.slice(n,r)};var i="b"==="ab".substr(-1)?function(t,n,e){return t.substr(n,e)}:function(t,n,e){return n<0&&(n=t.length+n),t.substr(n,e)}}).call(this,e("4362"))}}]);
//# sourceMappingURL=chunk-0e1260df.js.map