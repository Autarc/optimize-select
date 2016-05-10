!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.OptimalSelect=e():t.OptimalSelect=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return t[r].call(u.exports,u,u.exports,e),u.loaded=!0,u.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.optimize=e.select=void 0;var u=n(4),o=r(u),i=n(2),a=r(i);e.select=o.default,e.optimize=a.default,e.default=o.default},function(t,e){(function(n){"use strict";function r(t){return Array.isArray(t)?t:Array.from(t)}function u(t,e){if(n.document)return!1;var u=e.context;n.document=u||function(){for(var e=t;e.parent;)e=e.parent;return e}();var a=Object.getPrototypeOf(n.document);return Object.getOwnPropertyDescriptor(a,"childTags")||Object.defineProperty(a,"childTags",{enumerable:!0,get:function(){return this.children.filter(function(t){return"tag"===t.type||"script"===t.type||"style"===t.type})}}),Object.getOwnPropertyDescriptor(a,"attributes")||Object.defineProperty(a,"attributes",{enumerable:!0,get:function(){var t=this.attribs,e=Object.keys(t),n=e.reduce(function(e,n,r){return e[r]={name:n,value:t[n]},e},{});return Object.defineProperty(n,"length",{enumerable:!1,configurable:!1,value:e.length}),n}}),a.getAttribute||(a.getAttribute=function(t){return this.attribs[t]||null}),a.getElementsByTagName||(a.getElementsByTagName=function(t){var e=[];return i(this.childTags,function(n){n.name!==t&&"*"!==t||e.push(n)}),e}),a.getElementsByClassName||(a.getElementsByClassName=function(t){var e=t.trim().replace(/\s+/g," ").split(" "),n=[];return i([this],function(t){var r=t.attribs.class;r&&e.every(function(t){return r.indexOf(t)>-1})&&n.push(t)}),n}),a.querySelectorAll||(a.querySelectorAll=function(t){var e=this;t=t.replace(/(>)(\S)/g,"$1 $2").trim();var n=o(t),u=r(n),i=u[0],a=u.slice(1),c=a.length;return i(this).filter(function(t){for(var n=0;c>n;){if(t=a[n](t,e),!t)return!1;n+=1}return!0})}),a.contains||(a.contains=function(t){var e=!1;return i([this],function(n,r){n===t&&(e=!0,r())}),e}),!0}function o(t){return t.split(" ").reverse().map(function(t,e){var n=0===e,r=t.split(":"),u=f(r,2),o=u[0],l=u[1],s=null,d=null;switch(!0){case/>/.test(o):d=function(t){return function(e){return e(t.parent)&&t.parent}};break;case/^\./.test(o):var p=o.substr(1).split(".");s=function(t){var e=t.attribs.class;return e&&p.every(function(t){return e.indexOf(t)>-1})},d=function(t,e){return n?t.getElementsByClassName(p.join(" ")):"function"==typeof t?t(s):a(t,e,s)};break;case/^\[/.test(o):var v=o.replace(/\[|\]|"/g,"").split("="),h=f(v,2),y=h[0],g=h[1];s=function(t){var e=Object.keys(t.attribs).indexOf(y)>-1;return e&&(!g||t.attribs[y]===g)},d=function(t,e){if(n){var r=function(){var e=[];return i([t],function(t){s(t)&&e.push(t)}),{v:e}}();if("object"===("undefined"==typeof r?"undefined":c(r)))return r.v}return"function"==typeof t?t(s):a(t,e,s)};break;case/^#/.test(o):var m=o.substr(1);s=function(t){return t.attribs.id===m},d=function(t,e){if(n){var r=function(){var e=[];return i([t],function(t,n){s(t)&&(e.push(t),n())}),{v:e}}();if("object"===("undefined"==typeof r?"undefined":c(r)))return r.v}return"function"==typeof t?t(s):a(t,e,s)};break;case/\*/.test(o):s=function(t){return!0},d=function(t,e){if(n){var r=function(){var e=[];return i([t],function(t){return e.push(t)}),{v:e}}();if("object"===("undefined"==typeof r?"undefined":c(r)))return r.v}return"function"==typeof t?t(s):a(t,e,s)};break;default:s=function(t){return t.name===o},d=function(t,e){if(n){var r=function(){var e=[];return i([t],function(t){s(t)&&e.push(t)}),{v:e}}();if("object"===("undefined"==typeof r?"undefined":c(r)))return r.v}return"function"==typeof t?t(s):a(t,e,s)}}if(!l)return d;var b=l.match(/-(child|type)\((\d+)\)$/),j=b[1],S=parseInt(b[2],10)-1,N=function(t){if(t){var e=t.parent.childTags;"type"===j&&(e=e.filter(s));var n=e.findIndex(function(e){return e===t});if(n===S)return!0}return!1};return function(t){var e=d(t);return n?e.reduce(function(t,e){return N(e)&&t.push(e),t},[]):N(e)&&e}})}function i(t,e){t.forEach(function(t){var n=!0;e(t,function(){return n=!1}),t.childTags&&n&&i(t.childTags,e)})}function a(t,e,n){for(;t.parent;){if(t=t.parent,n(t))return t;if(t===e)break}return null}Object.defineProperty(e,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},f=function(){function t(t,e){var n=[],r=!0,u=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(c){u=!0,o=c}finally{try{!r&&a.return&&a.return()}finally{if(u)throw o}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.default=u,t.exports=e.default}).call(e,function(){return this}())},function(t,e,n){(function(r){"use strict";function u(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){var n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],u=(0,c.default)(e,n),o=t.replace(/> /g,">").split(/\s+(?=(?:(?:[^"]*"){2})*[^"]*$)/);if(o.length<3)return t;for(var a=[o.pop()];o.length>1;){var f=o.pop(),l=o.join(" "),s=a.join(" "),d=l+" "+s,p=document.querySelectorAll(d);1!==p.length&&a.unshift(i(l,f,s,e))}return a.unshift(o[0]),o=a,o[0]=i("",o[0],o.slice(1).join(" "),e),o[o.length-1]=i(o.slice(0,-1).join(" "),o[o.length-1],"",e),u&&delete r.document,o.join(" ").replace(/>/g,"> ").trim()}function i(t,e,n,r){if(t.length&&(t+=" "),n.length&&(n=" "+n),/\[*\]/.test(e)){var u=e.replace(/=.*$/,"]"),o=""+t+u+n,i=document.querySelectorAll(o);if(1===i.length&&i[0]===r)e=u;else for(var a=document.querySelectorAll(""+t+u),c=0,f=a.length;f>c;c++)if(a[c].contains(r)){var l=a[c].tagName.toLowerCase(),o=""+t+l+n,i=document.querySelectorAll(o);1===i.length&&i[0]===r&&(e=l);break}}if(/>/.test(e)){var s=e.replace(/>/,""),o=""+t+s+n,i=document.querySelectorAll(o);1===i.length&&i[0]===r&&(e=s)}if(/:nth-child/.test(e)){var d=e.replace(/nth-child/g,"nth-of-type"),o=""+t+d+n,i=document.querySelectorAll(o);1===i.length&&i[0]===r&&(e=d)}if(/\.\S+\.\S+/.test(e)){for(var p=e.trim().split(".").slice(1).map(function(t){return"."+t}).sort(function(t,e){return t.length-e.length});p.length;){var v=e.replace(p.shift(),""),o=""+t+v+n,i=document.querySelectorAll(o);1===i.length&&i[0]===r&&(e=v)}if(e&&e.match(/\./g).length>2)for(var h=document.querySelectorAll(""+t+e),c=0,f=h.length;f>c;c++)if(h[c].contains(r)){var y=h[c].tagName.toLowerCase(),o=""+t+y+n,i=document.querySelectorAll(o);1===i.length&&i[0]===r&&(e=y);break}}return e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var a=n(1),c=u(a);t.exports=e.default}).call(e,function(){return this}())},function(t,e){"use strict";function n(t,e){var n=[],p=t,v=n.length,h=e.ignore,y=void 0===h?{}:h,g=!1;for(Object.keys(y).forEach(function(t){"class"===t&&(g=!0);var e=y[t];"function"!=typeof e&&("number"==typeof e&&(e=e.toString()),"string"==typeof e&&(e=new RegExp(e)),y[t]=e.test.bind(e))}),g&&!function(){var t=y.attribute;y.attribute=function(e,n,r){return y.class(n)||t&&t(e,n,r)}}();!(p===document||d(p,n,y)||r(p,n,y)||i(p,n,y)||f(p,n,y));)u(p,n,y),n.length===v&&a(p,n,y),n.length===v&&l(p,n,y),n.length===v&&o(p,n,y),n.length===v&&c(p,n,y),n.length===v&&s(p,n,y),p=p.parentNode,v=n.length;return p===document&&n.unshift("*"),n.join(" ")}function r(t,e,n){return p(t,e,n,document)}function u(t,e,n){return p(t,e,n,t.parentNode)}function o(t,e,n){var r=t.getAttribute("class");return g(n.class,r)?!1:y(t,e,"."+r.trim().replace(/\s+/g,"."))}function i(t,e,n){return v(t,e,n,document)}function a(t,e,n){return v(t,e,n,t.parentNode)}function c(t,e,n){var r=t.attributes;return Object.keys(r).some(function(u){var o=r[u],i=o.name,a=o.value;if(g(n.attribute,i,a,m.attribute))return!1;var c="["+i+'="'+a+'"]';return y(t,e,c)})}function f(t,e,n){return h(t,e,n,document)}function l(t,e,n){return h(t,e,n,t.parentNode)}function s(t,e,n){var r=t.tagName.toLowerCase();return g(n.tag,r)?!1:y(t,e,r)}function d(t,e,n){var r=t.getAttribute("id");return g(n.id,r)?!1:(e.unshift("#"+r),!0)}function p(t,e,n,r){var u=t.getAttribute("class");if(g(n.class,u))return!1;var o=r.getElementsByClassName(u);return 1===o.length?(e.unshift("."+u.trim().replace(/\s+/g,".")),!0):!1}function v(t,e,n,r){var u=t.attributes;return Object.keys(u).some(function(t){var o=u[t],i=o.name,a=o.value;if(g(n.attribute,i,a,m.attribute))return!1;var c="["+i+'="'+a+'"]',f=r.querySelectorAll(c);return 1===f.length?(e.unshift(c),!0):void 0})}function h(t,e,n,r){var u=t.tagName.toLowerCase();if(g(n.tag,u))return!1;var o=r.getElementsByTagName(u);return 1===o.length?(e.unshift(u),!0):!1}function y(t,e,n){for(var r=t.parentNode,u=r.childTags||r.children,o=0,i=u.length;i>o;o++)if(u[o]===t)return e.unshift("> "+n+":nth-child("+(o+1)+")"),!0;return!1}function g(t,e,n,r){if(!e)return!0;var u=t||r;return u?u(e,n,r):!1}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var m={attribute:function(t){return["style","data-reactid","data-react-checksum"].indexOf(t)>-1}};t.exports=e.default},function(t,e,n){(function(t){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function u(t){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return Array.isArray(t)?i(t,e):o(t,e)}function o(e,n){if(3===e.nodeType)return o(e.parentNode);if(1!==e.nodeType)throw new Error('Invalid input - only HTMLElements or representations of them are supported! (not "'+("undefined"==typeof e?"undefined":a(e))+'")');var r=(0,f.default)(e,n),u=(0,s.default)(e,n),i=(0,p.default)(u,e,n);return r&&delete t.document,i}function i(t,e){for(var n=t[0],r=n.className,u=n.tagName,i=function(t){for(var e=[];t.parentNode&&t.parentNode!==document.body;)t=t.parentNode,e.push(t);return e},a=i(n),c=1;c<t.length;c++){var f=t[c];a=i(f),console.log(a),f.className!==r&&!function(){var t=[],e=void 0,n=void 0;f.className.length>r.length?(e=f.className,n=r):(e=r,n=f.className),n.split(" ").forEach(function(n){e.indexOf(n)>-1&&t.push(n)}),r=t.join(" ")}(),f.tagName!==u&&(u=null)}var l=[];if(a){var s=a.map(function(t){var e=t.tagName;return""!==t.id?e+="#"+t.id:""!==t.className&&(e+="."+t.className),e+" "});s.reverse();for(var d=document.querySelectorAll(s.join(" ")).length;s.length>2;){var p=s.shift(),v=document.querySelectorAll(s.join(" ")).length;if(v!==d){s.unshift(p);break}}l.push(s.join(" ")+" ")}return u&&l.push(""+u.toLowerCase()),r&&l.push("."+r.replace(/ /g,".")),0===l.length?(l=t.map(function(t){return o(t,e)}),console.log(l.join(","),r,u),l.join(",")):(console.log(l.join(""),r,u),l.join(""))}Object.defineProperty(e,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};e.default=u,e.getSingleSelector=o,e.getMultiSelector=i;var c=n(1),f=r(c),l=n(3),s=r(l),d=n(2),p=r(d)}).call(e,function(){return this}())}])});
//# sourceMappingURL=optimal-select.js.map