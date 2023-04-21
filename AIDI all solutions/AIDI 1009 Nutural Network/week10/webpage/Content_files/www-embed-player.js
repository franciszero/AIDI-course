(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function n(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ia(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ka});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function v(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ya=b.prototype}
function va(){this.v=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.la=this.j=null}
function wa(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
va.prototype.Z=function(a){this.i=a};
function xa(a,b){a.j={exception:b,ud:!0};a.h=a.s||a.m}
va.prototype.return=function(a){this.j={return:a};this.h=this.m};
va.prototype.yield=function(a,b){this.h=b;return{value:a}};
va.prototype.A=function(a){this.h=a};
function za(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.s=0}
function Ba(a){a.s=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){a.la=[a.j];a.s=0;a.m=0}
function Fa(a){var b=a.la.splice(0)[0];(b=a.j=a.j||b)?b.ud?a.h=a.s||a.m:void 0!=b.A&&a.m<b.A?(a.h=b.A,a.j=null):a.h=a.m:a.h=0}
function Ga(a){this.h=new va;this.i=a}
function Ha(a,b){wa(a.h);var c=a.h.l;if(c)return Ia(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ja(a)}
function Ia(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.l=null,xa(a.h,g),Ja(a)}a.h.l=null;d.call(a.h,f);return Ja(a)}
function Ja(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ud)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ka(a){this.next=function(b){wa(a.h);a.h.l?b=Ia(a,a.h.l.next,b,a.h.Z):(a.h.Z(b),b=Ja(a));return b};
this.throw=function(b){wa(a.h);a.h.l?b=Ia(a,a.h.l["throw"],b,a.h.Z):(xa(a.h,b),b=Ja(a));return b};
this.return=function(b){return Ha(a,b)};
this[Symbol.iterator]=function(){return this}}
function La(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return La(new Ka(new Ga(a)))}
function Ma(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return na});
n("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(p){l||(l=!0,m.call(h,p))}}
var h=this,l=!1;return{resolve:g(this.T),reject:g(this.m)}};
b.prototype.T=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ba(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.s(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(l){this.m(l);return}"function"==typeof h?this.ea(h,g):this.s(g)};
b.prototype.m=function(g){this.Z(2,g)};
b.prototype.s=function(g){this.Z(1,g)};
b.prototype.Z=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.X();this.la()};
b.prototype.X=function(){var g=this;e(function(){if(g.I()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.I=function(){if(this.v)return!1;var g=da.CustomEvent,h=da.Event,l=da.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return l(g)};
b.prototype.la=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ba=function(g){var h=this.l();g.cc(h.resolve,h.reject)};
b.prototype.ea=function(g,h){var l=this.l();try{g.call(h,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,h){function l(z,u){return"function"==typeof z?function(A){try{m(z(A))}catch(C){p(C)}}:u}
var m,p,r=new b(function(z,u){m=z;p=u});
this.cc(l(g,m),l(h,p));return r};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.cc=function(g,h){function l(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(l):this.i.push(l);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var m=t(g),p=m.next();!p.done;p=m.next())d(p.value).cc(h,l)})};
b.all=function(g){var h=t(g),l=h.next();return l.done?d([]):new b(function(m,p){function r(A){return function(C){z[A]=C;u--;0==u&&m(z)}}
var z=[],u=0;do z.push(void 0),u++,d(l.value).cc(r(z.length-1),p),l=h.next();while(!l.done)})};
return b});
n("WeakMap",function(a){function b(l){this.h=(h+=Math.random()+1).toString();if(l){l=t(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!ja(l,g)){var m=new c;ba(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(p){if(p instanceof c)return p;Object.isExtensible(p)&&e(p);return m(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),p=new a([[l,2],[m,3]]);if(2!=p.get(l)||3!=p.get(m))return!1;p.delete(l);p.set(m,4);return!p.has(l)&&4==p.get(m)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ja(l,g))throw Error("WeakMap key fail: "+l);l[g][this.h]=m;return this};
b.prototype.get=function(l){return d(l)&&ja(l,g)?l[g][this.h]:void 0};
b.prototype.has=function(l){return d(l)&&ja(l,g)&&ja(l[g],this.h)};
b.prototype.delete=function(l){return d(l)&&ja(l,g)&&ja(l[g],this.h)?delete l[g][this.h]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var m=h.h;return fa(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(h,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var p=h.data_[m];if(p&&ja(h.data_,m))for(h=0;h<p.length;h++){var r=p[h];if(l!==l&&r.key!==r.key||l===r.key)return{id:m,list:p,index:h,entry:r}}return{id:m,list:p,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(t([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),p=m.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=m.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!m.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=l:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:l},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var m=this.entries(),p;!(p=m.next()).done;)p=p.value,h.call(l,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Na(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Na(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Oa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return Oa(this,function(b,c){return[b,c]})}});
n("Array.prototype.keys",function(a){return a?a:function(){return Oa(this,function(b){return b})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Array.prototype.values",function(a){return a?a:function(){return Oa(this,function(b,c){return c})}});
n("Object.setPrototypeOf",function(a){return a||ua});
n("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Na(this,b,"includes").indexOf(b,c||0)}});
n("globalThis",function(a){return a||da});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
var Pa=Pa||{},x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function B(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Qa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ra(a){var b=Qa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ta(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ua(a){return Object.prototype.hasOwnProperty.call(a,Va)&&a[Va]||(a[Va]=++Wa)}
var Va="closure_uid_"+(1E9*Math.random()>>>0),Wa=0;function Xa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ya(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Za=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa:Ya;return Za.apply(null,arguments)}
function $a(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function ab(a,b){function c(){}
c.prototype=b.prototype;a.ya=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function bb(a){return a}
;function cb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,cb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
ab(cb,Error);cb.prototype.name="CustomError";function db(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function eb(){}
function fb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var gb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},hb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ib=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},jb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},kb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
hb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function lb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function mb(a,b){b=gb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function nb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ra(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ob(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function pb(a){var b=qb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function rb(a){for(var b in a)return!1;return!0}
function sb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function tb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function ub(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function vb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function wb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=wb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:bb,createScript:bb,createScriptURL:bb})}catch(c){x.console&&x.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.j=a===Cb&&b||""}
Bb.prototype.i=!0;Bb.prototype.h=function(){return this.j};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a,b){this.j=b===Eb?a:"";this.i=!0}
Fb.prototype.toString=function(){return this.j.toString()};
Fb.prototype.h=function(){return this.j.toString()};function Gb(a,b){this.j=b===Hb?a:""}
Gb.prototype.toString=function(){return this.j+""};
Gb.prototype.i=!0;Gb.prototype.h=function(){return this.j.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.j;Qa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Lb(a,b){return-1!=a.toLowerCase().indexOf(b.toLowerCase())}
function Mb(a,b){return a<b?-1:a>b?1:0}
;function Nb(a,b){this.j=b===Ob?a:""}
Nb.prototype.toString=function(){return this.j.toString()};
Nb.prototype.i=!0;Nb.prototype.h=function(){return this.j.toString()};
function Pb(a){if(a instanceof Nb&&a.constructor===Nb)return a.j;Qa(a);return"type_error:SafeUrl"}
var Qb;try{new URL("s://g"),Qb=!0}catch(a){Qb=!1}var Rb=Qb;function Sb(a){if(a instanceof Nb)return a;a="object"==typeof a&&a.i?a.h():String(a);a:{var b=a;if(Rb){try{var c=new URL(b)}catch(d){b="https:";break a}b=c.protocol}else b:{c=document.createElement("a");try{c.href=b}catch(d){b=void 0;break b}b=c.protocol;b=":"===b||""===b?"https:":b}}"javascript:"!==b||(a="about:invalid#zClosurez");return new Nb(a,Ob)}
var Ob={},Tb=new Nb("about:invalid#zClosurez",Ob);var Wb,Xb=B("CLOSURE_FLAGS"),Yb=Xb&&Xb[610401301];Wb=null!=Yb?Yb:!1;function Zb(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
var $b,ac=x.navigator;$b=ac?ac.userAgentData||null:null;function bc(a){return Wb?$b?$b.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function E(a){return-1!=Zb().indexOf(a)}
;function cc(){return Wb?!!$b&&0<$b.brands.length:!1}
function dc(){return cc()?!1:E("Opera")}
function ec(){return cc()?!1:E("Trident")||E("MSIE")}
function fc(){return cc()?!1:E("Edge")}
function hc(){return cc()?bc("Microsoft Edge"):E("Edg/")}
function ic(){return E("Firefox")||E("FxiOS")}
function jc(){return E("Safari")&&!(kc()||(cc()?0:E("Coast"))||dc()||fc()||hc()||(cc()?bc("Opera"):E("OPR"))||ic()||E("Silk")||E("Android"))}
function kc(){return cc()?bc("Chromium"):(E("Chrome")||E("CriOS"))&&!fc()||E("Silk")}
function lc(){return E("Android")&&!(kc()||ic()||dc()||E("Silk"))}
function mc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function nc(a){var b=Zb();if("Internet Explorer"===a){if(ec())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=mc(c);
switch(a){case "Opera":if(dc())return b(["Version","Opera"]);if(cc()?bc("Opera"):E("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(fc())return b(["Edge"]);if(hc())return b(["Edg"]);break;case "Chromium":if(kc())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&ic()||"Safari"===a&&jc()||"Android Browser"===a&&lc()||"Silk"===a&&E("Silk")?(b=c[2])&&b[1]||"":""}
function oc(a){if(cc()&&"Silk"!==a){var b=$b.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=nc(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])}
;var pc={};function qc(a){this.j=pc===pc?a:"";this.i=!0}
qc.prototype.h=function(){return this.j.toString()};
qc.prototype.toString=function(){return this.j.toString()};function rc(a,b){b=b instanceof Nb?b:Sb(b);a.href=Pb(b)}
function sc(a,b){a.rel="stylesheet";Lb("stylesheet","stylesheet")?(a.href=Ib(b).toString(),(b=uc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)):a.href=b instanceof Gb?Ib(b).toString():b instanceof Nb?Pb(b):Pb(Sb(b))}
function vc(){return uc("script[nonce]")}
var wc=/^[\w+/_-]+[=]{0,2}$/;function uc(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&wc.test(a)?a:"":""}
;function xc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zc(a){return a?decodeURI(a):a}
function Ac(a,b){return b.match(yc)[a]||null}
function Bc(a){return zc(Ac(3,a))}
function Cc(a){var b=a.match(yc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Dc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function Ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Fc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)Ec(a[b],a[b+1],c);return c.join("&")}
function Gc(a){var b=[],c;for(c in a)Ec(c,a[c],b);return b.join("&")}
function Hc(a,b){var c=2==arguments.length?Fc(arguments[1],0):Fc(arguments,1);return Dc(a,c)}
function Ic(a,b){b=Gc(b);return Dc(a,b)}
function Jc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return Dc(a,b+c)}
function Kc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Lc=/#|$/,Mc=/[?&]($|#)/;function Nc(a,b){for(var c=a.search(Lc),d=0,e,f=[];0<=(e=Kc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Mc,"$1")}
;function Oc(a){x.setTimeout(function(){throw a;},0)}
;function Pc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;function Qc(){return Wb?!!$b&&!!$b.platform:!1}
function Rc(){return Qc()?"Android"===$b.platform:E("Android")}
function Sc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
function Tc(){return Sc()||E("iPad")||E("iPod")}
function Uc(){return Qc()?"macOS"===$b.platform:E("Macintosh")}
function $c(){return Qc()?"Windows"===$b.platform:E("Windows")}
function ad(){return Qc()?"Chrome OS"===$b.platform:E("CrOS")}
function bd(){var a=Zb(),b="";$c()?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Tc()?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):Uc()?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):Lb(Zb(),"KaiOS")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):Rc()?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):ad()&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1]);a=0;b=Kb(String(b||"")).split(".");for(var c=
Kb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Mb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Mb(0==f[2].length,0==g[2].length)||Mb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function cd(a){cd[" "](a);return a}
cd[" "]=function(){};var dd=dc(),ed=ec(),fd=E("Edge"),gd=E("Gecko")&&!(Lb(Zb(),"WebKit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),hd=Lb(Zb(),"WebKit")&&!E("Edge");hd&&E("Mobile");Uc();$c();(Qc()?"Linux"===$b.platform:E("Linux"))||ad();var id=x.navigator||null;id&&(id.appVersion||"").indexOf("X11");var jd=Rc();Sc();E("iPad");E("iPod");Tc();Lb(Zb(),"KaiOS");function kd(){var a=x.document;return a?a.documentMode:void 0}
var ld;a:{var md="",nd=function(){var a=Zb();if(gd)return/rv:([^\);]+)(\)|;)/.exec(a);if(fd)return/Edge\/([\d\.]+)/.exec(a);if(ed)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hd)return/WebKit\/(\S+)/.exec(a);if(dd)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nd&&(md=nd?nd[1]:"");if(ed){var od=kd();if(null!=od&&od>parseFloat(md)){ld=String(od);break a}}ld=md}var pd=ld,qd;if(x.document&&ed){var rd=kd();qd=rd?rd:parseInt(pd,10)||void 0}else qd=void 0;var sd=qd;ic();var td=Sc()||E("iPod"),ud=E("iPad");lc();kc();var vd=jc()&&!Tc();var wd={},xd=null;function yd(a,b){Ra(a);void 0===b&&(b=0);zd();b=wd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],l=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|l>>6];l=b[l&63];c[f++]=""+m+g+h+l}m=0;l=d;switch(a.length-e){case 2:m=a[e+1],l=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+l+d}return c.join("")}
function Ad(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Bd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Bd(a,b){function c(l){for(;d<a.length;){var m=a.charAt(d++),p=xd[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}
zd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function zd(){if(!xd){xd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));wd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===xd[f]&&(xd[f]=e)}}}}
;var Cd="undefined"!==typeof Uint8Array,Dd=!ed&&"function"===typeof btoa;function Ed(a){if(!Dd)return yd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Fd=/[-_.]/g,Gd={"-":"+",_:"/",".":"="};function Hd(a){return Gd[a]||""}
function Id(a){return Cd&&null!=a&&a instanceof Uint8Array}
var Jd={};var Kd;function Ld(a){if(a!==Jd)throw Error("illegal external caller");}
function Md(a,b){Ld(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Md.prototype.isEmpty=function(){return null==this.h};
Md.prototype.sizeBytes=function(){Ld(Jd);var a=this.h;if(null!=a&&!Id(a))if("string"===typeof a)if(Dd){Fd.test(a)&&(a=a.replace(Fd,Hd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Ad(a);else Qa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};var Nd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Od(a,b){if(Nd)return a[Nd]|=b;if(void 0!==a.Ha)return a.Ha|=b;Object.defineProperties(a,{Ha:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Pd(a,b){var c=F(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Qd(a,c|b));return a}
function Rd(a,b){Nd?a[Nd]&&(a[Nd]&=~b):void 0!==a.Ha&&(a.Ha&=~b)}
function F(a){var b;Nd?b=a[Nd]:b=a.Ha;return null==b?0:b}
function Qd(a,b){Nd?a[Nd]=b:void 0!==a.Ha?a.Ha=b:Object.defineProperties(a,{Ha:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Vd(a){Od(a,1);return a}
function Wd(a,b){Qd(b,(a|0)&-51)}
function Xd(a,b){Qd(b,(a|18)&-41)}
;var Yd={};function Zd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var $d,ae=Object.freeze(Qd([],23));function be(a){if(F(a.W)&2)throw Error();}
function ce(a){var b=a.length;(b=b?a[b-1]:void 0)&&Zd(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function de(a){if(null!=a&&"number"!==typeof a)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof a+": "+a);return a}
function ee(a){return a.displayName||a.name||"unknown type name"}
function fe(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ee(b)+" but got "+(a&&ee(a.constructor)));return a}
function ge(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Lc===Yd)return a;if(d){var e=d=F(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Qd(a,e);return new b(a)}}
;function he(a){var b=a.i+a.fb;return a.Ba||(a.Ba=a.W[b]={})}
function ie(a,b,c){return-1===b?null:b>=a.i?a.Ba?a.Ba[b]:void 0:c&&a.Ba&&(c=a.Ba[b],null!=c)?c:a.W[b+a.fb]}
function G(a,b,c,d){be(a);return je(a,b,c,d)}
function je(a,b,c,d){a.l&&(a.l=void 0);if(b>=a.i||d)return he(a)[b]=c,a;a.W[b+a.fb]=c;(c=a.Ba)&&b in c&&delete c[b];return a}
function ke(a){return void 0!==le(a,me,11,!1)}
function ne(a,b,c,d,e){var f=ie(a,b,d);Array.isArray(f)||(f=ae);var g=F(f);g&1||Vd(f);if(e)g&2||Od(f,18),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&Rd(f,16):(f=Vd(Array.prototype.slice.call(f)),je(a,b,f,d))}return f}
function oe(a,b,c,d){be(a);(c=pe(a,c))&&c!==b&&null!=d&&je(a,c,void 0,!1);return je(a,b,d)}
function pe(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=ie(a,e)&&(0!==c&&je(a,c,void 0,!1),c=e)}return c}
function le(a,b,c,d){var e=ie(a,c,d);b=ge(e,b,F(a.W));b!==e&&null!=b&&je(a,c,b,d);return b}
function qe(a,b,c,d){d=void 0===d?!1:d;b=le(a,b,c,d);if(null==b)return b;if(!(F(a.W)&2)){var e=re(b);e!==b&&(b=e,je(a,c,b,d))}return b}
function se(a,b,c,d,e){var f=!!(e&2),g=ne(a,c,1,void 0,f);if(g===ae||!(F(g)&4)){var h=g;g=!!(e&2);var l=!!(F(h)&2);f=h;!g&&l&&(h=Array.prototype.slice.call(h));e|=l?2:0;for(var m=0,p=0;m<h.length;m++){var r=ge(h[m],b,e);void 0!==r&&(l=l||!!(2&F(r.W)),h[p++]=r)}p<m&&(h.length=p);b=h;e=!l;l=F(b);h=l|5;h=e?h|8:h&-9;l!=h&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Qd(b,h));h=b;f!==h&&je(a,c,h);(g||1===d)&&Object.freeze(h);return h}if(3===d)return g;f||(f=Object.isFrozen(g),1===d?f||Object.freeze(g):
(d=F(g),b=d&-19,f&&(g=Array.prototype.slice.call(g),d=0,je(a,c,g)),d!==b&&Qd(g,b)));return g}
function H(a,b,c,d){be(a);null!=d?fe(d,b):d=void 0;return je(a,c,d)}
function te(a,b,c,d,e){be(a);null!=e?fe(e,b):e=void 0;oe(a,c,d,e)}
function ue(a,b,c,d){be(a);var e=null==d?ae:d;if(null!=d){for(var f=!!d.length,g=0;g<d.length;g++){var h=d[g];fe(h,b);f=f&&!(F(h.W)&2)}e=Pd(e,(f?8:0)|5)}return je(a,c,e)}
function ve(a,b,c,d){var e=F(a.W);if(e&2)throw Error();a=se(a,c,b,2,e);c=null!=d?fe(d,c):new c;a.push(c);F(c.W)&2&&Rd(a,8)}
function we(a,b,c){Qa(c);return G(a,b,c)}
function xe(){var a=new ye;return G(a,1,1)}
function ze(a,b){return null==a?b:a}
function Ae(a,b){return ze(ie(a,b),"")}
;var Be;function Ce(a,b){return De(b)}
function De(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(F(a)&128))return a=Array.prototype.slice.call(a),ce(a),a}else{if(Id(a))return Ed(a);if(a instanceof Md){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=Ed(b)}}}return a}
;function Ee(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&F(a)&1?void 0:f&&F(a)&2?a:Fe(a,b,c,void 0!==d,e,f);else if(Zd(a)){var g={},h;for(h in a)g[h]=Ee(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Fe(a,b,c,d,e,f){var g=F(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=Ee(a[h],b,c,d,e,f);c(g,a);return a}
function Ge(a){return a.Lc===Yd?a.toJSON():De(a)}
function He(a,b){a&128&&ce(b)}
;function Ie(a,b,c){c=void 0===c?Xd:c;if(null!=a){if(Cd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=F(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Qd(a,d|18),a;a=Fe(a,Ie,d&4?Xd:c,!0,!1,!0);b=F(a);b&4&&b&2&&Object.freeze(a);return a}a.Lc===Yd&&(F(a.W)&2||(a=Je(a,!0),Od(a.W,18)));return a}}
function Je(a,b){var c=a.W,d=[];Od(d,16);var e=a.constructor.h;e&&d.push(e);e=a.Ba;if(e){d.length=c.length;var f={};d[d.length-1]=f}0!==(F(c)&128)&&ce(d);b=b||F(a.W)&2?Xd:Wd;f=a.constructor;F(d);Be=d;d=new f(d);Be=void 0;a.td&&(d.td=a.td.slice());f=!!(F(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)G(d,h-a.fb,Ie(c[h],f,b),!1);if(e)for(var l in e)a=e[l],c=+l,Number.isNaN(c),G(d,c,Ie(a,f,b),!0);return d}
function re(a){if(!(F(a.W)&2))return a;var b=Je(a,!1);b.l=a;return b}
;function I(a,b,c,d){null==a&&(a=Be);Be=void 0;var e=this.constructor.h;if(null==a){a=e?[e]:[];var f=48;var g=!0;d&&(f|=128);Qd(a,f)}else{if(!Array.isArray(a))throw Error();if(e&&e!==a[0])throw Error();f=Od(a,0)|32;g=0!==(16&f);if(d){if(f|=128,0<a.length){var h=a[a.length-1];if(Zd(h)&&"g"in h){delete h.g;var l=!0,m;for(m in h){l=!1;break}l&&a.pop()}}}else if(128&f)throw Error();Qd(a,f)}this.fb=e?0:-1;this.W=a;a:{f=this.W.length;e=f-1;if(f&&(f=this.W[e],Zd(f))){this.Ba=f;this.i=e-this.fb;break a}void 0!==
b&&-1<b?(this.i=Math.max(b,e+1-this.fb),this.Ba=void 0):this.i=Number.MAX_VALUE}if(!d&&this.Ba&&"g"in this.Ba)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=g&&!0;d=this.i;var p;for(g=0;g<c.length;g++)e=c[g],e<d?(e+=this.fb,(f=a[e])?Ke(f,b):a[e]=ae):(p||(p=he(this)),(f=p[e])?Ke(f,b):p[e]=ae)}F(this.W)}
k=I.prototype;k.toJSON=function(){var a=this.W,b;$d?b=a:b=Fe(a,Ge,He,void 0,!1,!1);return b};
k.serialize=function(){$d=!0;try{return JSON.stringify(this.toJSON(),Ce)}finally{$d=!1}};
k.clone=function(){return Je(this,!1)};
function Ke(a,b){if(Array.isArray(a)){var c=F(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Qd(a,c|d)}}
k.Lc=Yd;k.toString=function(){return this.W.toString()};function Le(a){this.ed=a}
;function Me(a,b,c){this.i=a;this.l=b;this.h=c||[];this.ub=new Map}
k=Me.prototype;k.Yd=function(a){var b=Ma.apply(1,arguments),c=this.Ac(b);c?c.push(new Le(a)):this.Hd(a,b)};
k.Hd=function(a){var b=this.md(Ma.apply(1,arguments));this.ub.set(b,[new Le(a)])};
k.Ac=function(){var a=this.md(Ma.apply(0,arguments));return this.ub.has(a)?this.ub.get(a):void 0};
k.pe=function(){var a=this.Ac(Ma.apply(0,arguments));return a&&a.length?a[0]:void 0};
k.clear=function(){this.ub.clear()};
k.md=function(){var a=Ma.apply(0,arguments);return a?a.join(","):"key"};function Ne(a,b){Me.call(this,a,3,b)}
v(Ne,Me);Ne.prototype.j=function(a){var b=Ma.apply(1,arguments),c=0,d=this.pe(b);d&&(c=d.ed);this.Hd(c+a,b)};function Oe(a,b){Me.call(this,a,2,b)}
v(Oe,Me);Oe.prototype.record=function(a){this.Yd(a,Ma.apply(1,arguments))};function Pe(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Qe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ra(d)?Qe.apply(null,d):Pe(d)}}
;function J(){this.la=this.la;this.Z=this.Z}
J.prototype.la=!1;J.prototype.h=function(){return this.la};
J.prototype.dispose=function(){this.la||(this.la=!0,this.M())};
function Re(a,b){Se(a,$a(Pe,b))}
function Se(a,b){a.la?b():(a.Z||(a.Z=[]),a.Z.push(b))}
J.prototype.M=function(){if(this.Z)for(;this.Z.length;)this.Z.shift()()};function Te(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Te.prototype.stopPropagation=function(){this.j=!0};
Te.prototype.preventDefault=function(){this.defaultPrevented=!0};function Ue(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Ve(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,We[c])c=We[c];else{c=String(c);if(!We[c]){var f=/function\s+([^\(]+)/m.exec(c);We[c]=f?f[1]:"[Anonymous]"}c=We[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Ve(a,b){b||(b={});b[Xe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Xe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Ve(a,b));return c}
function Xe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var We={};var Ye=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
x.addEventListener("test",c,b);x.removeEventListener("test",c,b)}catch(d){}return a}();function Ze(a,b){Te.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ab(Ze,Te);var $e={2:"touch",3:"pen",4:"mouse"};
Ze.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(gd){a:{try{cd(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:$e[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Ze.ya.preventDefault.call(this)};
Ze.prototype.stopPropagation=function(){Ze.ya.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Ze.prototype.preventDefault=function(){Ze.ya.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var af="closure_listenable_"+(1E6*Math.random()|0);var bf=0;function cf(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.hc=e;this.key=++bf;this.Qb=this.ac=!1}
function df(a){a.Qb=!0;a.listener=null;a.proxy=null;a.src=null;a.hc=null}
;function ef(a){this.src=a;this.listeners={};this.h=0}
ef.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ff(a,b,d,e);-1<g?(b=a[g],c||(b.ac=!1)):(b=new cf(b,this.src,f,!!d,e),b.ac=c,a.push(b));return b};
ef.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ff(e,b,c,d);return-1<b?(df(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function gf(a,b){var c=b.type;c in a.listeners&&mb(a.listeners[c],b)&&(df(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ff(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Qb&&f.listener==b&&f.capture==!!c&&f.hc==d)return e}return-1}
;var hf="closure_lm_"+(1E6*Math.random()|0),jf={},kf=0;function lf(a,b,c,d,e){if(d&&d.once)mf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)lf(a,b[f],c,d,e);else c=nf(c),a&&a[af]?a.listen(b,c,Ta(d)?!!d.capture:!!d,e):of(a,b,c,!1,d,e)}
function of(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ta(e)?!!e.capture:!!e,h=pf(a);h||(a[hf]=h=new ef(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=vf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ye||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(wf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");kf++}}
function vf(){function a(c){return b.call(a.src,a.listener,c)}
var b=xf;return a}
function mf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)mf(a,b[f],c,d,e);else c=nf(c),a&&a[af]?a.l.add(String(b),c,!0,Ta(d)?!!d.capture:!!d,e):of(a,b,c,!0,d,e)}
function yf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)yf(a,b[f],c,d,e);else(d=Ta(d)?!!d.capture:!!d,c=nf(c),a&&a[af])?a.l.remove(String(b),c,d,e):a&&(a=pf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ff(b,c,d,e)),(c=-1<a?b[a]:null)&&zf(c))}
function zf(a){if("number"!==typeof a&&a&&!a.Qb){var b=a.src;if(b&&b[af])gf(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(wf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);kf--;(c=pf(b))?(gf(c,a),0==c.h&&(c.src=null,b[hf]=null)):df(a)}}}
function wf(a){return a in jf?jf[a]:jf[a]="on"+a}
function xf(a,b){if(a.Qb)a=!0;else{b=new Ze(b,this);var c=a.listener,d=a.hc||a.src;a.ac&&zf(a);a=c.call(d,b)}return a}
function pf(a){a=a[hf];return a instanceof ef?a:null}
var Af="__closure_events_fn_"+(1E9*Math.random()>>>0);function nf(a){if("function"===typeof a)return a;a[Af]||(a[Af]=function(b){return a.handleEvent(b)});
return a[Af]}
;function Bf(){J.call(this);this.l=new ef(this);this.Ud=this;this.Ea=null}
ab(Bf,J);Bf.prototype[af]=!0;k=Bf.prototype;k.addEventListener=function(a,b,c,d){lf(this,a,b,c,d)};
k.removeEventListener=function(a,b,c,d){yf(this,a,b,c,d)};
function Cf(a,b){var c=a.Ea;if(c){var d=[];for(var e=1;c;c=c.Ea)d.push(c),++e}a=a.Ud;c=b.type||b;"string"===typeof b?b=new Te(b,a):b instanceof Te?b.target=b.target||a:(e=b,b=new Te(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Df(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Df(g,c,!0,b)&&e,b.j||(e=Df(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Df(g,c,!1,b)&&e}
k.M=function(){Bf.ya.M.call(this);this.removeAllListeners();this.Ea=null};
k.listen=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
k.removeAllListeners=function(a){if(this.l){var b=this.l;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,df(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Df(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Qb&&g.capture==c){var h=g.listener,l=g.hc||g.src;g.ac&&gf(a.l,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function Ef(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Ef.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Ff(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Gf(a,b){return a+Math.random()*(b-a)}
;function Hf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
k=Hf.prototype;k.clone=function(){return new Hf(this.x,this.y)};
k.equals=function(a){return a instanceof Hf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
k.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function If(a,b){this.width=a;this.height=b}
k=If.prototype;k.clone=function(){return new If(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
k.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Jf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Kf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Lf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Mf;function Nf(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Kf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Za(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!ec()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.dd;c.dd=null;e()}};
return function(e){d.next={dd:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Of(){this.i=this.h=null}
Of.prototype.add=function(a,b){var c=Pf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Of.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Pf=new Ef(function(){return new Qf},function(a){return a.reset()});
function Qf(){this.next=this.scope=this.fn=null}
Qf.prototype.set=function(a,b){this.fn=a;this.scope=b;this.next=null};
Qf.prototype.reset=function(){this.next=this.scope=this.fn=null};var Rf,Sf=!1,Tf=new Of;function Uf(a,b){Rf||Vf();Sf||(Rf(),Sf=!0);Tf.add(a,b)}
function Vf(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);Rf=function(){a.then(Wf)}}else Rf=function(){var b=Wf;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!fc()&&x.Window.prototype.setImmediate==x.setImmediate?(Mf||(Mf=Nf()),Mf(b)):x.setImmediate(b)}}
function Wf(){for(var a;a=Tf.remove();){try{a.fn.call(a.scope)}catch(b){Oc(b)}Ff(Pf,a)}Sf=!1}
;function Xf(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=eb)try{var b=this;a.call(void 0,function(c){Yf(b,2,c)},function(c){Yf(b,3,c)})}catch(c){Yf(this,3,c)}}
function Zf(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Zf.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var $f=new Ef(function(){return new Zf},function(a){a.reset()});
function ag(a,b,c){var d=$f.get();d.i=a;d.h=b;d.context=c;return d}
function bg(a){if(a instanceof Xf)return a;var b=new Xf(eb);Yf(b,2,a);return b}
function cg(a){return new Xf(function(b,c){c(a)})}
function dg(a,b,c){eg(a,b,c,null)||Uf($a(b,a))}
function fg(a){return new Xf(function(b){var c=a.length,d=[];if(c)for(var e=function(h,l,m){c--;d[h]=l?{fulfilled:!0,value:m}:{fulfilled:!1,reason:m};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],dg(g,$a(e,f,!0),$a(e,f,!1));
else b(d)})}
Xf.prototype.then=function(a,b,c){return gg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Xf.prototype.$goog_Thenable=!0;k=Xf.prototype;k.sc=function(a,b){return gg(this,null,a,b)};
k.catch=Xf.prototype.sc;k.cancel=function(a){if(0==this.h){var b=new hg(a);Uf(function(){ig(this,b)},this)}};
function ig(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?ig(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):jg(c),kg(c,e,3,b)))}a.j=null}else Yf(a,3,b)}
function lg(a,b){a.i||2!=a.h&&3!=a.h||mg(a);a.l?a.l.next=b:a.i=b;a.l=b}
function gg(a,b,c,d){var e=ag(null,null,null);e.child=new Xf(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(m){g(m)}}:f;
e.h=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof hg?g(h):f(l)}catch(m){g(m)}}:g});
e.child.j=a;lg(a,e);return e.child}
k.ef=function(a){this.h=0;Yf(this,2,a)};
k.ff=function(a){this.h=0;Yf(this,3,a)};
function Yf(a,b,c){0==a.h&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.h=1,eg(c,a.ef,a.ff,a)||(a.v=c,a.h=b,a.j=null,mg(a),3!=b||c instanceof hg||ng(a,c)))}
function eg(a,b,c,d){if(a instanceof Xf)return lg(a,ag(b||eb,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Ta(a))try{var f=a.then;if("function"===typeof f)return og(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function og(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function mg(a){a.s||(a.s=!0,Uf(a.ke,a))}
function jg(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
k.ke=function(){for(var a;a=jg(this);)kg(this,a,this.h,this.v);this.s=!1};
function kg(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.child)b.child.j=null,pg(b,c,d);else try{b.j?b.i.call(b.context):pg(b,c,d)}catch(e){qg.call(null,e)}Ff($f,b)}
function pg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ng(a,b){a.m=!0;Uf(function(){a.m&&qg.call(null,b)})}
var qg=Oc;function hg(a){cb.call(this,a)}
ab(hg,cb);hg.prototype.name="cancel";function rg(a,b){Bf.call(this);this.j=a||1;this.i=b||x;this.m=Za(this.df,this);this.s=Date.now()}
ab(rg,Bf);k=rg.prototype;k.enabled=!1;k.Da=null;k.setInterval=function(a){this.j=a;this.Da&&this.enabled?(this.stop(),this.start()):this.Da&&this.stop()};
k.df=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.Da=this.i.setTimeout(this.m,this.j-a):(this.Da&&(this.i.clearTimeout(this.Da),this.Da=null),Cf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
k.start=function(){this.enabled=!0;this.Da||(this.Da=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
k.stop=function(){this.enabled=!1;this.Da&&(this.i.clearTimeout(this.Da),this.Da=null)};
k.M=function(){rg.ya.M.call(this);this.stop();delete this.i};
function sg(a,b,c){if("function"===typeof a)c&&(a=Za(a,c));else if(a&&"function"==typeof a.handleEvent)a=Za(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:x.setTimeout(a,b||0)}
;function tg(a){J.call(this);this.I=a;this.j=new Map;this.v=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.i=new rg(this.flushInterval);this.i.listen("tick",this.rb,!1,this);Re(this,this.i);this.s=!1}
v(tg,J);k=tg.prototype;k.sendIsolatedPayload=function(a){this.s=a;this.m=1};
function ug(a){a.i.enabled||a.i.start();a.l++;a.l>=a.m&&a.rb()}
k.rb=function(){var a=this.j.values();a=[].concat(ia(a)).filter(function(b){return b.ub.size});
a.length&&this.I.flush(a,this.s);vg(a);this.l=0;this.i.enabled&&this.i.stop()};
k.Yc=function(a){var b=Ma.apply(1,arguments);this.j.has(a)||this.j.set(a,new Ne(a,b))};
k.Zc=function(a){var b=Ma.apply(1,arguments);this.j.has(a)||this.j.set(a,new Oe(a,b))};
function wg(a,b){return a.v.has(b)?void 0:a.j.get(b)}
k.uc=function(a){this.Td.apply(this,[a,1].concat(ia(Ma.apply(1,arguments))))};
k.Td=function(a,b){var c=Ma.apply(2,arguments),d=wg(this,a);d&&d instanceof Ne&&(d.j(b,c),ug(this))};
k.record=function(a,b){var c=Ma.apply(2,arguments),d=wg(this,a);d&&d instanceof Oe&&(d.record(b,c),ug(this))};
function vg(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function xg(a){this.h=a;this.h.Yc("/client_streamz/bg/fiec",{Nb:3,Mb:"rk"},{Nb:2,Mb:"ec"})}
function yg(a,b,c){a.h.uc("/client_streamz/bg/fiec",b,c)}
function zg(a){this.h=a;this.h.Zc("/client_streamz/bg/fil",{Nb:3,Mb:"rk"})}
zg.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fil",a,b)};
function Ag(a){this.h=a;this.h.Yc("/client_streamz/bg/fsc",{Nb:3,Mb:"rk"})}
function Bg(a){this.h=a;this.h.Zc("/client_streamz/bg/fsl",{Nb:3,Mb:"rk"})}
Bg.prototype.record=function(a,b){this.h.record("/client_streamz/bg/fsl",a,b)};var Cg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function Dg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=Eg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=Fg(a,h),d+=Fg(a,h+4),e+=Fg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return Cg.toString(e)}
function Eg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function Fg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function Gg(a){I.call(this,a)}
v(Gg,I);var Hg=[1,2,3];function Ig(a){I.call(this,a)}
v(Ig,I);var Jg=[1,2,3];function Kg(a){I.call(this,a,-1,Lg)}
v(Kg,I);var Lg=[1];function Mg(a){I.call(this,a,-1,Ng)}
v(Mg,I);var Ng=[3,6,4];function Og(a){I.call(this,a,-1,Pg)}
v(Og,I);var Pg=[1];function Qg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Rg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=m=0}
function b(r){for(var z=g,u=0;64>u;u+=4)z[u/4]=r[u]<<24|r[u+1]<<16|r[u+2]<<8|r[u+3];for(u=16;80>u;u++)r=z[u-3]^z[u-8]^z[u-14]^z[u-16],z[u]=(r<<1|r>>>31)&4294967295;r=e[0];var A=e[1],C=e[2],D=e[3],N=e[4];for(u=0;80>u;u++){if(40>u)if(20>u){var R=D^A&(C^D);var T=1518500249}else R=A^C^D,T=1859775393;else 60>u?(R=A&C|D&(A|C),T=2400959708):(R=A^C^D,T=3395469782);R=((r<<5|r>>>27)&4294967295)+R+N+T+z[u]&4294967295;N=D;D=C;C=(A<<30|A>>>2)&4294967295;A=r;r=R}e[0]=e[0]+r&4294967295;e[1]=e[1]+A&4294967295;e[2]=
e[2]+C&4294967295;e[3]=e[3]+D&4294967295;e[4]=e[4]+N&4294967295}
function c(r,z){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var u=[],A=0,C=r.length;A<C;++A)u.push(r.charCodeAt(A));r=u}z||(z=r.length);u=0;if(0==m)for(;u+64<z;)b(r.slice(u,u+64)),u+=64,p+=64;for(;u<z;)if(f[m++]=r[u++],p++,64==m)for(m=0,b(f);u+64<z;)b(r.slice(u,u+64)),u+=64,p+=64}
function d(){var r=[],z=8*p;56>m?c(h,56-m):c(h,64-(m-56));for(var u=63;56<=u;u--)f[u]=z&255,z>>>=8;b(f);for(u=z=0;5>u;u++)for(var A=24;0<=A;A-=8)r[z++]=e[u]>>A&255;return r}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,p;a();return{reset:a,update:c,digest:d,ee:function(){for(var r=d(),z="",u=0;u<r.length;u++)z+="0123456789ABCDEF".charAt(Math.floor(r[u]/16))+"0123456789ABCDEF".charAt(r[u]%16);return z}}}
;function Sg(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,Tg(Qg(d),a,c||null)].join(" "):null}
function Tg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],hb(d,function(h){e.push(h)}),Ug(e.join(" "));
var f=[],g=[];hb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];hb(d,function(h){e.push(h)});
a=Ug(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ug(a){var b=Rg();b.update(a);return b.ee().toLowerCase()}
;var Vg={};function Wg(a){this.h=a||{cookie:""}}
k=Wg.prototype;k.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{kc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
k.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Cg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.kc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
k.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Kb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{kc:0,path:b,domain:c});return d};
k.Dc=function(){return Xg(this).keys};
k.isEmpty=function(){return!this.h.cookie};
k.clear=function(){for(var a=Xg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Xg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Yg=new Wg("undefined"==typeof document?null:document);function Zg(a){return!!Vg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function $g(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;Zg(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new Wg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Zg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function ah(a,b,c,d){(a=x[a])||(a=(new Wg(document)).get(b));return a?Sg(a,c,d):null}
function bh(a,b){b=void 0===b?!1:b;var c=Qg(String(x.location.href)),d=[];if($g(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new Wg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Sg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Zg(b)&&((b=ah("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ah("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function ch(a){I.call(this,a,-1,dh)}
v(ch,I);var dh=[2];function eh(a){this.h=this.i=this.j=a}
eh.prototype.reset=function(){this.h=this.i=this.j};
eh.prototype.getValue=function(){return this.i};function fh(){}
fh.prototype.serialize=function(a){var b=[];gh(this,a,b);return b.join("")};
function gh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),gh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),hh(d,c),c.push(":"),gh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":hh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ih={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},jh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function hh(a,b){b.push('"',a.replace(jh,function(c){var d=ih[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),ih[c]=d);return d}),'"')}
;function kh(){}
kh.prototype.h=null;kh.prototype.getOptions=function(){var a;(a=this.h)||(a={},lh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var mh;function nh(){}
ab(nh,kh);function oh(a){return(a=lh(a))?new ActiveXObject(a):new XMLHttpRequest}
function lh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
mh=new nh;function ph(a){Bf.call(this);this.headers=new Map;this.T=a||null;this.i=!1;this.P=this.G=null;this.m=this.ea="";this.j=this.ba=this.v=this.X=!1;this.s=0;this.I=null;this.za="";this.ma=this.na=!1}
ab(ph,Bf);var qh=/^https?$/i,rh=["POST","PUT"],sh=[];function th(a,b,c,d,e,f,g){var h=new ph;sh.push(h);b&&h.listen("complete",b);h.l.add("ready",h.de,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.na=g);h.send(a,c,d,e)}
k=ph.prototype;k.de=function(){this.dispose();mb(sh,this)};
k.send=function(a,b,c,d){if(this.G)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.m="";this.X=!1;this.i=!0;this.G=this.T?oh(this.T):oh(mh);this.P=this.T?this.T.getOptions():mh.getOptions();this.G.onreadystatechange=Za(this.yd,this);try{this.getStatus(),this.ba=!0,this.G.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();uh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=t(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=x.FormData&&a instanceof x.FormData;!(0<=gb(rh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=t(c);for(d=b.next();!d.done;d=b.next())c=t(d.value),d=c.next().value,c=c.next().value,this.G.setRequestHeader(d,c);this.za&&(this.G.responseType=this.za);"withCredentials"in this.G&&this.G.withCredentials!==this.na&&(this.G.withCredentials=this.na);try{vh(this),0<this.s&&(this.ma=wh(this.G),this.getStatus(),this.ma?(this.G.timeout=this.s,this.G.ontimeout=Za(this.Md,
this)):this.I=sg(this.Md,this.s,this)),this.getStatus(),this.v=!0,this.G.send(a),this.v=!1}catch(g){this.getStatus(),uh(this,g)}};
function wh(a){return ed&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
k.Md=function(){"undefined"!=typeof Pa&&this.G&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),Cf(this,"timeout"),this.abort(8))};
function uh(a,b){a.i=!1;a.G&&(a.j=!0,a.G.abort(),a.j=!1);a.m=b;xh(a);yh(a)}
function xh(a){a.X||(a.X=!0,Cf(a,"complete"),Cf(a,"error"))}
k.abort=function(){this.G&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.G.abort(),this.j=!1,Cf(this,"complete"),Cf(this,"abort"),yh(this))};
k.M=function(){this.G&&(this.i&&(this.i=!1,this.j=!0,this.G.abort(),this.j=!1),yh(this,!0));ph.ya.M.call(this)};
k.yd=function(){this.h()||(this.ba||this.v||this.j?zh(this):this.Fe())};
k.Fe=function(){zh(this)};
function zh(a){if(a.i&&"undefined"!=typeof Pa)if(a.P[1]&&4==Ah(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==Ah(a))sg(a.yd,0,a);else if(Cf(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Bh(a))Cf(a,"complete"),Cf(a,"success");else{try{var b=2<Ah(a)?a.G.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";xh(a)}}finally{yh(a)}}}
function yh(a,b){if(a.G){vh(a);var c=a.G,d=a.P[0]?function(){}:null;
a.G=null;a.P=null;b||Cf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function vh(a){a.G&&a.ma&&(a.G.ontimeout=null);a.I&&(x.clearTimeout(a.I),a.I=null)}
k.isActive=function(){return!!this.G};
k.isComplete=function(){return 4==Ah(this)};
function Bh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=Ac(1,String(a.ea)),!a&&x.self&&x.self.location&&(a=x.self.location.protocol.slice(0,-1)),b=!qh.test(a?a.toLowerCase():"");c=b}return c}
function Ah(a){return a.G?a.G.readyState:0}
k.getStatus=function(){try{return 2<Ah(this)?this.G.status:-1}catch(a){return-1}};
k.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function Ch(a){I.call(this,a)}
v(Ch,I);function Dh(a){I.call(this,a,-1,Eh)}
v(Dh,I);var Eh=[1];function me(a){I.call(this,a)}
v(me,I);var Fh=["platform","platformVersion","architecture","model","uaFullVersion"];new Dh;function ye(a){I.call(this,a)}
v(ye,I);function Gh(a){I.call(this,a,33,Hh)}
v(Gh,I);var Hh=[3,20,27];function Ih(a){I.call(this,a,19,Jh)}
v(Ih,I);var Jh=[3,5];function Nh(a){I.call(this,a,6,Oh)}
v(Nh,I);var Oh=[5];function Ph(a){I.call(this,a)}
v(Ph,I);var Qh;Qh=new function(a,b,c){this.h=a;this.fieldName=b;this.ctor=c;this.isRepeated=0;this.i=qe;this.defaultValue=void 0}(175237375,{rg:0},Ph);function Rh(a,b,c,d,e,f,g,h,l,m,p){Bf.call(this);var r=this;this.componentId="";this.j=[];this.Wb="";this.Xb=this.za=-1;this.Ib=!1;this.T=this.m=null;this.I=this.P=0;this.Wd=1;this.timeoutMillis=0;this.na=!1;Bf.call(this);this.logSource=a;this.Vb=b||function(){};
this.s=new Sh(a,f);this.Vd=d;this.network=p;this.bufferSize=1E3;this.Xd=$a(Gf,0,1);this.ba=e||null;this.sessionIndex=c||null;this.ea=g||!1;this.pageId=l||null;this.logger=null;this.withCredentials=!h;this.sb=f||!1;!this.sb&&(65<=oc("Chromium")||45<=oc("Firefox")||12<=oc("Safari")||Tc()&&bd());a=xe();Th(this.s,a);this.v=new eh(1E4);this.i=new rg(this.v.getValue());Re(this,this.i);m=Uh(this,m);lf(this.i,"tick",m,!1,this);this.X=new rg(6E5);Re(this,this.X);lf(this.X,"tick",m,!1,this);this.ea||this.X.start();
this.sb||(lf(document,"visibilitychange",function(){"hidden"===document.visibilityState&&r.ma()}),lf(document,"pagehide",this.ma,!1,this))}
v(Rh,Bf);function Uh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
Rh.prototype.M=function(){this.ma();Bf.prototype.M.call(this)};
function Vh(a){a.ba||(a.ba=.01>a.Xd()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.ba}
function Wh(a,b){a.v=new eh(1>b?1:b);a.i.setInterval(a.v.getValue())}
Rh.prototype.log=function(a){a=a.clone();var b=this.Wd++;G(a,21,b);this.componentId&&G(a,26,this.componentId);if(!ie(a,1)){b=a;var c=Date.now().toString();G(b,1,c)}null==ie(a,15)&&G(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),H(a,ch,16,b));for(;this.j.length>=this.bufferSize;)this.j.shift(),++this.P;this.j.push(a);Cf(this,new Xh(a));this.ea||this.i.enabled||this.i.start()};
Rh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.na)Yh(this.s,3),Zh(this);else{var d=Date.now();if(this.Xb>d&&this.za<d)b&&b("throttled");else{Yh(this.s,1);var e=$h(this.s,this.j,this.P,this.I);d={};var f=this.Vb();f&&(d.Authorization=f);var g=Vh(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=Jc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=Jc(g,"pageId",this.pageId));if(f&&this.Wb===f)b&&b("stale-auth-token");
else{this.j=[];this.i.enabled&&this.i.stop();this.P=0;var h=e.serialize(),l;this.T&&this.T.isSupported(h.length)&&(l=this.T.compress(h));var m={url:g,body:h,be:1,Pc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},p=function(u){c.v.reset();c.i.setInterval(c.v.getValue());if(u){var A=null;try{var C=JSON.parse(u.replace(")]}'\n",""));A=new Nh(C)}catch(D){}A&&(u=Number(ze(ie(A,1),"-1")),0<u&&(c.za=Date.now(),c.Xb=c.za+u),A=Qh.ctor?Qh.i(A,Qh.ctor,Qh.h,!0):Qh.isRepeated?
Qh.i(A,Qh.h,!0):Qh.i(A,Qh.h,Qh.defaultValue,!0))&&(A=ze(ie(A,1),-1),-1!=A&&(c.Ib||Wh(c,A)))}a&&a();c.I=0},r=function(u,A){var C=F(e.W),D=!!(C&2);
C=se(e,Gh,3,D?1:2,C);if(!(D||F(C)&8)){for(D=0;D<C.length;D++){var N=C[D],R=re(N);N!==R&&(C[D]=R)}Od(C,8)}D=c.v;D.h=Math.min(3E5,2*D.h);D.i=Math.min(3E5,D.h+Math.round(.2*(Math.random()-.5)*D.h));c.i.setInterval(c.v.getValue());401===u&&f&&(c.Wb=f);void 0===A&&(A=500<=u&&600>u||401===u||0===u);A&&(c.j=C.concat(c.j),c.ea||c.i.enabled||c.i.start());b&&b("net-send-failed",u);++c.I},z=function(){c.network?c.network.send(m,p,r):c.Vd(m,p,r)};
l?l.then(function(u){m.Pc["Content-Encoding"]="gzip";m.Pc["Content-Type"]="application/binary";m.body=u;m.be=2;z()},function(){z()}):z()}}}};
Rh.prototype.ma=function(){ai(this.s,!0);this.flush();ai(this.s,!1)};
function Zh(a){bi(a,function(b,c){b=Jc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,c.serialize())}catch(e){}a.na&&!d&&(a.na=!1);return d})}
function bi(a,b){if(0!==a.j.length){var c=Nc(Vh(a),"format");c=Hc(c,"auth",a.Vb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=$h(a.s,e,a.P,a.I);if(!b(c,f)){++a.I;break}a.P=0;a.I=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function Xh(){Te.call(this,"event-logged",void 0)}
v(Xh,Te);function Sh(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Ih;G(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));Th(this,new ye)}
function Th(a,b){H(a.h,ye,1,b);ie(b,1)||G(b,1,1);a.i||(b=ci(a),ie(b,5)||G(b,5,a.locale));a.uach&&(b=ci(a),qe(b,Dh,9)||H(b,Dh,9,a.uach))}
function Yh(a,b){ke(qe(a.h,ye,1))&&(a=di(a),G(a,1,b))}
function ai(a,b){ke(qe(a.h,ye,1))&&(a=di(a),G(a,2,b))}
function ei(a,b){var c=void 0===c?Fh:c;b(window,c).then(function(d){a.uach=d;d=ci(a);H(d,Dh,9,a.uach);return!0}).catch(function(){return!1})}
function ci(a){a=qe(a.h,ye,1);var b=qe(a,me,11);b||(b=new me,H(a,me,11,b));return b}
function di(a){a=ci(a);var b=qe(a,Ch,10);b||(b=new Ch,G(b,2,!1),H(a,Ch,10,b));return b}
function $h(a,b,c,d){c=void 0===c?0:c;d=void 0===d?0:d;if(ke(qe(a.h,ye,1))){var e=di(a);we(e,3,d)}a=a.h.clone();d=Date.now().toString();a=G(a,4,d);b=ue(a,Gh,3,b);c&&G(b,14,c);return b}
;function fi(a,b,c){th(a.url,function(d){d=d.target;if(Bh(d)){try{var e=d.G?d.G.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Pc,a.timeoutMillis,a.withCredentials)}
;function gi(a,b){J.call(this);this.s=a;this.Ea=b;this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.ba=fi;this.i=""}
ab(gi,J);function hi(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;J.call(this);f?a=f:(a=new gi(a,"0"),a.i=b,Re(this,a),""!=c&&(a.l=c),d&&(a.m=!0),e&&(a.j=e),b=new Rh(a.s,a.T?a.T:bh,a.Ea,a.ba,a.l,a.m,!1,a.za,void 0,void 0,a.ea?a.ea:void 0),Re(a,b),a.I&&Th(b.s,a.I),a.j&&(c=a.j,d=ci(b.s),G(d,7,c)),a.X&&(b.T=a.X),a.i&&(b.componentId=a.i),a.v&&((c=a.v)?(b.m||(b.m=new ch),c=c.serialize(),G(b.m,4,c)):b.m&&G(b.m,4,void 0,!1)),a.ma&&(d=a.ma,b.m||(b.m=new ch),
c=b.m,d=null==d?ae:Pd(d,1),G(c,2,d)),a.P&&(c=a.P,b.Ib=!0,Wh(b,c)),a.na&&ei(b.s,a.na),a=b);this.i=a}
v(hi,J);
hi.prototype.flush=function(a){var b=a||[];if(b.length){a=new Og;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new Mg;var h=G(g,1,f.i);var l=f;g=[];for(var m=0;m<l.h.length;m++)g.push(l.h[m].Mb);if(null==g)g=G(h,3,ae);else{l=F(g);if(!(l&4)){if(l&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];Qd(g,l|5)}g=G(h,3,g)}h=[];l=[];m=t(f.ub.keys());for(var p=m.next();!p.done;p=m.next())l.push(p.value.split(","));for(m=0;m<l.length;m++){p=l[m];var r=f.l;for(var z=f.Ac(p)||
[],u=[],A=0;A<z.length;A++){var C=z[A];C=C&&C.ed;var D=new Ig;switch(r){case 3:oe(D,1,Jg,Number(C));break;case 2:oe(D,2,Jg,de(Number(C)))}u.push(D)}r=u;for(z=0;z<r.length;z++){u=r[z];A=new Kg;u=H(A,Ig,2,u);A=p;C=[];D=f;for(var N=[],R=0;R<D.h.length;R++)N.push(D.h[R].Nb);D=N;for(N=0;N<D.length;N++){var T=D[N],ea=A[N];R=new Gg;switch(T){case 3:oe(R,1,Hg,String(ea));break;case 2:T=R;ea=Number(ea);Qa(ea);oe(T,2,Hg,ea);break;case 1:oe(R,3,Hg,"true"==ea)}C.push(R)}ue(u,Gg,1,C);h.push(u)}}ue(g,Kg,4,h);c.push(g);
e.clear()}ue(a,Mg,1,c);b=this.i;a instanceof Gh?b.log(a):(c=new Gh,a=a.serialize(),a=G(c,8,a),b.log(a));this.i.flush()}};function ii(a){this.v=ji();this.m=new hi(1828);this.h=new tg(this.m);this.s=new zg(this.h);this.j=new Ag(this.h);this.l=new Bg(this.h);this.i=new xg(this.h);this.Ja=Dg(a)}
function ji(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function ki(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function li(a){function b(A,C){Promise.resolve().then(function(){var D;null!=(D=c.oa)&&D.s.record(ji()-D.v,D.Ja);g.resolve({Zd:A,Ze:C})})}
var c=this;this.i=!1;var d=a.program;var e=a.re;if(a.Je){var f;this.oa=null!=(f=a.oa)?f:new ii(e)}var g=new ki;this.j=g.promise;if(x[e])if(x[e].a){var h;null!=(h=this.oa)&&yg(h.i,h.Ja,3)}else{var l;null!=(l=this.oa)&&yg(l.i,l.Ja,2);var m;null!=(m=this.oa)&&m.h.rb()}else{var p;null!=(p=this.oa)&&yg(p.i,p.Ja,1);var r;null!=(r=this.oa)&&r.h.rb()}try{this.l=t((0,x[e].a)(d,b,!0)).next().value,this.Ye=g.promise.then(function(){})}catch(A){var z;
null!=(z=this.oa)&&yg(z.i,z.Ja,4);var u;null!=(u=this.oa)&&u.h.rb();throw A;}}
li.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=ji(),d;null!=(d=this.oa)&&d.j.h.uc("/client_streamz/bg/fsc",d.Ja);return this.j.then(function(e){var f=e.Zd;return new Promise(function(g){f(function(h){var l;null!=(l=b.oa)&&l.l.record(ji()-c,l.Ja);g(h)},[a.gd,
a.af])})})};
li.prototype.Jd=function(a){if(this.i)throw Error("Already disposed");var b=ji(),c;null!=(c=this.oa)&&c.j.h.uc("/client_streamz/bg/fsc",c.Ja);a=this.l([a.gd,a.af]);var d;null!=(d=this.oa)&&d.l.record(ji()-b,d.Ja);return a};
li.prototype.dispose=function(){var a;null!=(a=this.oa)&&a.h.rb();this.i=!0;this.j.then(function(b){(b=b.Ze)&&b()})};
li.prototype.h=function(){return this.i};var mi=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var ni;try{new URL("s://g"),ni=!0}catch(a){ni=!1}var oi=ni;function pi(a){if(a instanceof Nb)a=Pb(a);else{b:if(oi){try{var b=new URL(a)}catch(c){b="https:";break b}b=b.protocol}else c:{b=document.createElement("a");try{b.href=a}catch(c){b=void 0;break c}b=b.protocol;b=":"===b||""===b?"https:":b}a="javascript:"!==b?a:void 0}return a}
;var qi={};function ri(){}
function si(a){this.h=a}
v(si,ri);si.prototype.toString=function(){return this.h};function ti(a){var b="true".toString(),c=[new si(ui[0].toLowerCase(),qi)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof si)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function vi(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function wi(a,b){a.src=Ib(b);vi(a)}
;function xi(a){this.ye=a}
function yi(a){return new xi(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var zi=[yi("data"),yi("http"),yi("https"),yi("mailto"),yi("ftp"),new xi(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Ai(a){var b=Bi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ci(){var a=[];Ai(function(b){a.push(b)});
return a}
var Bi={hf:"allow-forms",jf:"allow-modals",kf:"allow-orientation-lock",lf:"allow-pointer-lock",mf:"allow-popups",nf:"allow-popups-to-escape-sandbox",pf:"allow-presentation",qf:"allow-same-origin",rf:"allow-scripts",sf:"allow-top-navigation",tf:"allow-top-navigation-by-user-activation"},Di=fb(function(){return Ci()});
function Ei(){var a=Fi(),b={};hb(Di(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Fi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Gi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Hi=(new Date).getTime();var Ii="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ia(Ii),["client_dev_set_cookie"]);"undefined"!==typeof TextDecoder&&new TextDecoder;var Ji="undefined"!==typeof TextEncoder?new TextEncoder:null,Ki=Ji?function(a){return Ji.encode(a)}:function(a){a=Pc(a);
for(var b=new Uint8Array(a.length),c=0;c<b.length;c++)b[c]=a[c];return b};function Li(a){Bf.call(this);var b=this;this.v=this.j=0;this.Ca=null!=a?a:{ia:function(e,f){return setTimeout(e,f)},
Ga:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return w(function(e){return e.yield(Mi(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.v||Ni(this)}
v(Li,Bf);function Oi(){var a=Pi;Li.h||(Li.h=new Li(a));return Li.h}
Li.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Ca.Ga(this.v);delete Li.h};
Li.prototype.ta=function(){return this.i};
function Ni(a){a.v=a.Ca.ia(function(){var b;return w(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.A(3):c.yield(Mi(a),3):c.yield(Mi(a),3);Ni(a);c.h=0})},3E4)}
function Mi(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ca.ia(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.s=void 0;a.j&&(a.Ca.Ga(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Cf(a,"networkstatus-online"):Cf(a,"networkstatus-offline"));c(g);Fa(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function Qi(){this.data_=[];this.h=-1}
Qi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
Qi.prototype.get=function(a){return!!this.data_[a]};
function Ri(a){-1===a.h&&(a.h=kb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Si(a,b){this.h=a[x.Symbol.iterator]();this.i=b}
Si.prototype[Symbol.iterator]=function(){return this};
Si.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ti(a,b){return new Si(a,b)}
;function Ui(){this.blockSize=-1}
;function Vi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
ab(Vi,Ui);Vi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Wi(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],l=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+l&4294967295}
Vi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Wi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Wi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Wi(this,e);f=0;break}}this.i=f;this.l+=b}};
Vi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Wi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Xi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Yi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Zi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Xi(a).match(/\S+/g)||[],b=0<=gb(a,b));return b}
function $i(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Zi(a,"inverted-hdpi")&&Yi(a,Array.prototype.filter.call(a.classList?a.classList:Xi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function aj(){}
aj.prototype.next=function(){return bj};
var bj={done:!0,value:void 0};function cj(a){return{value:a,done:!1}}
aj.prototype.Fa=function(){return this};function dj(a){if(a instanceof ej||a instanceof fj||a instanceof gj)return a;if("function"==typeof a.next)return new ej(function(){return a});
if("function"==typeof a[Symbol.iterator])return new ej(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Fa)return new ej(function(){return a.Fa()});
throw Error("Not an iterator or iterable.");}
function ej(a){this.i=a}
ej.prototype.Fa=function(){return new fj(this.i())};
ej.prototype[Symbol.iterator]=function(){return new gj(this.i())};
ej.prototype.h=function(){return new gj(this.i())};
function fj(a){this.i=a}
v(fj,aj);fj.prototype.next=function(){return this.i.next()};
fj.prototype[Symbol.iterator]=function(){return new gj(this.i)};
fj.prototype.h=function(){return new gj(this.i)};
function gj(a){ej.call(this,function(){return a});
this.j=a}
v(gj,ej);gj.prototype.next=function(){return this.j.next()};function hj(a,b){this.i={};this.h=[];this.Ya=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof hj)for(c=a.Dc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
k=hj.prototype;k.Dc=function(){ij(this);return this.h.concat()};
k.has=function(a){return jj(this.i,a)};
k.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||kj;ij(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function kj(a,b){return a===b}
k.isEmpty=function(){return 0==this.size};
k.clear=function(){this.i={};this.Ya=this.size=this.h.length=0};
k.remove=function(a){return this.delete(a)};
k.delete=function(a){return jj(this.i,a)?(delete this.i[a],--this.size,this.Ya++,this.h.length>2*this.size&&ij(this),!0):!1};
function ij(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];jj(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],jj(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
k.get=function(a,b){return jj(this.i,a)?this.i[a]:b};
k.set=function(a,b){jj(this.i,a)||(this.size+=1,this.h.push(a),this.Ya++);this.i[a]=b};
k.forEach=function(a,b){for(var c=this.Dc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new hj(this)};
k.keys=function(){return dj(this.Fa(!0)).h()};
k.values=function(){return dj(this.Fa(!1)).h()};
k.entries=function(){var a=this;return Ti(this.keys(),function(b){return[b,a.get(b)]})};
k.Fa=function(a){ij(this);var b=0,c=this.Ya,d=this,e=new aj;e.next=function(){if(c!=d.Ya)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return bj;var f=d.h[b++];return cj(a?f:d.i[f])};
return e};
function jj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function lj(a){J.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.v=!!a}
ab(lj,J);k=lj.prototype;k.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function mj(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Hb(b)}}
k.Hb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&mb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
k.eb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];nj(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Hb(c)}}return 0!=e}return!1};
function nj(a,b,c){Uf(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Hb,this),delete this.j[a])}else this.i.length=0,this.j={}};
k.M=function(){lj.ya.M.call(this);this.clear();this.l.length=0};function oj(a){this.h=a}
oj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new fh).serialize(b))};
oj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
oj.prototype.remove=function(a){this.h.remove(a)};function pj(a){this.h=a}
ab(pj,oj);function qj(a){this.data=a}
function rj(a){return void 0===a||a instanceof qj?a:new qj(a)}
pj.prototype.set=function(a,b){pj.ya.set.call(this,a,rj(b))};
pj.prototype.i=function(a){a=pj.ya.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
pj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function sj(a){this.h=a}
ab(sj,pj);sj.prototype.set=function(a,b,c){if(b=rj(b)){if(c){if(c<Date.now()){sj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}sj.ya.set.call(this,a,b)};
sj.prototype.i=function(a){var b=sj.ya.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())sj.prototype.remove.call(this,a);else return b}};function tj(){}
;function uj(){}
ab(uj,tj);uj.prototype[Symbol.iterator]=function(){return dj(this.Fa(!0)).h()};
uj.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function vj(a){this.h=a}
ab(vj,uj);k=vj.prototype;k.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeItem(a)};
k.Fa=function(a){var b=0,c=this.h,d=new aj;d.next=function(){if(b>=c.length)return bj;var e=c.key(b++);if(a)return cj(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return cj(e)};
return d};
k.clear=function(){this.h.clear()};
k.key=function(a){return this.h.key(a)};function wj(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
ab(wj,vj);function xj(a,b){this.i=a;this.h=null;var c;if(c=ed)c=!(9<=Number(sd));if(c){yj||(yj=new hj);this.h=yj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),yj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
ab(xj,uj);var zj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},yj=null;function Aj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return zj[b]})}
k=xj.prototype;k.isAvailable=function(){return!!this.h};
k.set=function(a,b){this.h.setAttribute(Aj(a),b);Bj(this)};
k.get=function(a){a=this.h.getAttribute(Aj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeAttribute(Aj(a));Bj(this)};
k.Fa=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new aj;d.next=function(){if(b>=c.length)return bj;var e=c[b++];if(a)return cj(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return cj(e)};
return d};
k.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Bj(this)};
function Bj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Cj(a,b){this.i=a;this.h=b+"::"}
ab(Cj,uj);Cj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Cj.prototype.get=function(a){return this.i.get(this.h+a)};
Cj.prototype.remove=function(a){this.i.remove(this.h+a)};
Cj.prototype.Fa=function(a){var b=this.i[Symbol.iterator](),c=this,d=new aj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return cj(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var K={},Dj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;K.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
K.Sc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Ej={tb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ld:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Fj={tb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ld:function(a){return[].concat.apply([],a)}};
K.Xe=function(){Dj?(K.qb=Uint8Array,K.Ka=Uint16Array,K.Sd=Int32Array,K.assign(K,Ej)):(K.qb=Array,K.Ka=Array,K.Sd=Array,K.assign(K,Fj))};
K.Xe();var Gj=!0;try{new Uint8Array(1)}catch(a){Gj=!1}
function Hj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new K.qb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Ij={};Ij=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Jj={},Kj,Lj=[],Mj=0;256>Mj;Mj++){Kj=Mj;for(var Nj=0;8>Nj;Nj++)Kj=Kj&1?3988292384^Kj>>>1:Kj>>>1;Lj[Mj]=Kj}Jj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Lj[(a^b[d])&255];return a^-1};var Oj={};Oj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Pj(a){for(var b=a.length;0<=--b;)a[b]=0}
var Qj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Rj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Sj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Tj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Uj=Array(576);Pj(Uj);var Vj=Array(60);Pj(Vj);var Wj=Array(512);Pj(Wj);var Xj=Array(256);Pj(Xj);var Yj=Array(29);Pj(Yj);var Zj=Array(30);Pj(Zj);function ak(a,b,c,d,e){this.Kd=a;this.me=b;this.le=c;this.ge=d;this.Ce=e;this.pd=a&&a.length}
var bk,ck,dk;function ek(a,b){this.kd=a;this.Ab=0;this.Xa=b}
function fk(a,b){a.U[a.pending++]=b&255;a.U[a.pending++]=b>>>8&255}
function gk(a,b,c){a.da>16-c?(a.ka|=b<<a.da&65535,fk(a,a.ka),a.ka=b>>16-a.da,a.da+=c-16):(a.ka|=b<<a.da&65535,a.da+=c)}
function hk(a,b,c){gk(a,c[2*b],c[2*b+1])}
function ik(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function jk(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=ik(d[e]++,e))}
function kk(a){var b;for(b=0;286>b;b++)a.qa[2*b]=0;for(b=0;30>b;b++)a.gb[2*b]=0;for(b=0;19>b;b++)a.fa[2*b]=0;a.qa[512]=1;a.Qa=a.Db=0;a.wa=a.matches=0}
function lk(a){8<a.da?fk(a,a.ka):0<a.da&&(a.U[a.pending++]=a.ka);a.ka=0;a.da=0}
function mk(a,b,c){lk(a);fk(a,c);fk(a,~c);K.tb(a.U,a.window,b,c,a.pending);a.pending+=c}
function nk(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ok(a,b,c){for(var d=a.V[c],e=c<<1;e<=a.Oa;){e<a.Oa&&nk(b,a.V[e+1],a.V[e],a.depth)&&e++;if(nk(b,d,a.V[e],a.depth))break;a.V[c]=a.V[e];c=e;e<<=1}a.V[c]=d}
function pk(a,b,c){var d=0;if(0!==a.wa){do{var e=a.U[a.Kb+2*d]<<8|a.U[a.Kb+2*d+1];var f=a.U[a.Ic+d];d++;if(0===e)hk(a,f,b);else{var g=Xj[f];hk(a,g+256+1,b);var h=Qj[g];0!==h&&(f-=Yj[g],gk(a,f,h));e--;g=256>e?Wj[e]:Wj[256+(e>>>7)];hk(a,g,c);h=Rj[g];0!==h&&(e-=Zj[g],gk(a,e,h))}}while(d<a.wa)}hk(a,256,b)}
function qk(a,b){var c=b.kd,d=b.Xa.Kd,e=b.Xa.pd,f=b.Xa.ge,g,h=-1;a.Oa=0;a.xb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.V[++a.Oa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Oa;){var l=a.V[++a.Oa]=2>h?++h:0;c[2*l]=1;a.depth[l]=0;a.Qa--;e&&(a.Db-=d[2*l+1])}b.Ab=h;for(g=a.Oa>>1;1<=g;g--)ok(a,c,g);l=f;do g=a.V[1],a.V[1]=a.V[a.Oa--],ok(a,c,1),d=a.V[1],a.V[--a.xb]=g,a.V[--a.xb]=d,c[2*l]=c[2*g]+c[2*d],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=l,a.V[1]=l++,ok(a,c,1);while(2<=a.Oa);a.V[--a.xb]=
a.V[1];g=b.kd;l=b.Ab;d=b.Xa.Kd;e=b.Xa.pd;f=b.Xa.me;var m=b.Xa.le,p=b.Xa.Ce,r,z=0;for(r=0;15>=r;r++)a.La[r]=0;g[2*a.V[a.xb]+1]=0;for(b=a.xb+1;573>b;b++){var u=a.V[b];r=g[2*g[2*u+1]+1]+1;r>p&&(r=p,z++);g[2*u+1]=r;if(!(u>l)){a.La[r]++;var A=0;u>=m&&(A=f[u-m]);var C=g[2*u];a.Qa+=C*(r+A);e&&(a.Db+=C*(d[2*u+1]+A))}}if(0!==z){do{for(r=p-1;0===a.La[r];)r--;a.La[r]--;a.La[r+1]+=2;a.La[p]--;z-=2}while(0<z);for(r=p;0!==r;r--)for(u=a.La[r];0!==u;)d=a.V[--b],d>l||(g[2*d+1]!==r&&(a.Qa+=(r-g[2*d+1])*g[2*d],g[2*
d+1]=r),u--)}jk(c,h,a.La)}
function rk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];++g<h&&m===f||(g<l?a.fa[2*m]+=g:0!==m?(m!==e&&a.fa[2*m]++,a.fa[32]++):10>=g?a.fa[34]++:a.fa[36]++,g=0,e=m,0===f?(h=138,l=3):m===f?(h=6,l=3):(h=7,l=4))}}
function sk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];if(!(++g<h&&m===f)){if(g<l){do hk(a,m,a.fa);while(0!==--g)}else 0!==m?(m!==e&&(hk(a,m,a.fa),g--),hk(a,16,a.fa),gk(a,g-3,2)):10>=g?(hk(a,17,a.fa),gk(a,g-3,3)):(hk(a,18,a.fa),gk(a,g-11,7));g=0;e=m;0===f?(h=138,l=3):m===f?(h=6,l=3):(h=7,l=4)}}}
function tk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.qa[2*c])return 0;if(0!==a.qa[18]||0!==a.qa[20]||0!==a.qa[26])return 1;for(c=32;256>c;c++)if(0!==a.qa[2*c])return 1;return 0}
var uk=!1;function vk(a,b,c){a.U[a.Kb+2*a.wa]=b>>>8&255;a.U[a.Kb+2*a.wa+1]=b&255;a.U[a.Ic+a.wa]=c&255;a.wa++;0===b?a.qa[2*c]++:(a.matches++,b--,a.qa[2*(Xj[c]+256+1)]++,a.gb[2*(256>b?Wj[b]:Wj[256+(b>>>7)])]++);return a.wa===a.Ob-1}
;function wk(a,b){a.msg=Oj[b];return b}
function xk(a){for(var b=a.length;0<=--b;)a[b]=0}
function yk(a){var b=a.state,c=b.pending;c>a.J&&(c=a.J);0!==c&&(K.tb(a.output,b.U,b.Pb,c,a.Bb),a.Bb+=c,b.Pb+=c,a.Tc+=c,a.J-=c,b.pending-=c,0===b.pending&&(b.Pb=0))}
function zk(a,b){var c=0<=a.sa?a.sa:-1,d=a.o-a.sa,e=0;if(0<a.level){2===a.F.yc&&(a.F.yc=tk(a));qk(a,a.jc);qk(a,a.ec);rk(a,a.qa,a.jc.Ab);rk(a,a.gb,a.ec.Ab);qk(a,a.bd);for(e=18;3<=e&&0===a.fa[2*Tj[e]+1];e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.Db+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)gk(a,b?1:0,3),mk(a,c,d);else if(4===a.strategy||g===f)gk(a,2+(b?1:0),3),pk(a,Uj,Vj);else{gk(a,4+(b?1:0),3);c=a.jc.Ab+1;d=a.ec.Ab+1;e+=1;gk(a,c-257,5);gk(a,d-1,5);gk(a,e-4,4);for(f=0;f<e;f++)gk(a,a.fa[2*
Tj[f]+1],3);sk(a,a.qa,c-1);sk(a,a.gb,d-1);pk(a,a.qa,a.gb)}kk(a);b&&lk(a);a.sa=a.o;yk(a.F)}
function M(a,b){a.U[a.pending++]=b}
function Ak(a,b){a.U[a.pending++]=b>>>8&255;a.U[a.pending++]=b&255}
function Bk(a,b){var c=a.vd,d=a.o,e=a.va,f=a.xd,g=a.o>a.ha-262?a.o-(a.ha-262):0,h=a.window,l=a.Za,m=a.Ia,p=a.o+258,r=h[d+e-1],z=h[d+e];a.va>=a.od&&(c>>=2);f>a.u&&(f=a.u);do{var u=b;if(h[u+e]===z&&h[u+e-1]===r&&h[u]===h[d]&&h[++u]===h[d+1]){d+=2;for(u++;h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&h[++d]===h[++u]&&d<p;);u=258-(p-d);d=p-258;if(u>e){a.zb=b;e=u;if(u>=f)break;r=h[d+e-1];z=h[d+e]}}}while((b=m[b&l])>g&&0!==--c);return e<=
a.u?e:a.u}
function Ck(a){var b=a.ha,c;do{var d=a.Qd-a.u-a.o;if(a.o>=b+(b-262)){K.tb(a.window,a.window,b,b,0);a.zb-=b;a.o-=b;a.sa-=b;var e=c=a.ic;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.F.ja)break;e=a.F;c=a.window;f=a.o+a.u;var g=e.ja;g>d&&(g=d);0===g?c=0:(e.ja-=g,K.tb(c,e.input,e.jb,g,f),1===e.state.wrap?e.D=Ij(e.D,c,g,f):2===e.state.wrap&&(e.D=Jj(e.D,c,g,f)),e.jb+=g,e.nb+=g,c=g);a.u+=c;if(3<=a.u+a.ra)for(d=a.o-a.ra,a.H=a.window[d],
a.H=(a.H<<a.Na^a.window[d+1])&a.Ma;a.ra&&!(a.H=(a.H<<a.Na^a.window[d+3-1])&a.Ma,a.Ia[d&a.Za]=a.head[a.H],a.head[a.H]=d,d++,a.ra--,3>a.u+a.ra););}while(262>a.u&&0!==a.F.ja)}
function Dk(a,b){for(var c;;){if(262>a.u){Ck(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.Na^a.window[a.o+3-1])&a.Ma,c=a.Ia[a.o&a.Za]=a.head[a.H],a.head[a.H]=a.o);0!==c&&a.o-c<=a.ha-262&&(a.K=Bk(a,c));if(3<=a.K)if(c=vk(a,a.o-a.zb,a.K-3),a.u-=a.K,a.K<=a.Jc&&3<=a.u){a.K--;do a.o++,a.H=(a.H<<a.Na^a.window[a.o+3-1])&a.Ma,a.Ia[a.o&a.Za]=a.head[a.H],a.head[a.H]=a.o;while(0!==--a.K);a.o++}else a.o+=a.K,a.K=0,a.H=a.window[a.o],a.H=(a.H<<a.Na^a.window[a.o+1])&a.Ma;else c=vk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(zk(a,!1),0===a.F.J))return 1}a.ra=2>a.o?a.o:2;return 4===b?(zk(a,!0),0===a.F.J?3:4):a.wa&&(zk(a,!1),0===a.F.J)?1:2}
function Ek(a,b){for(var c,d;;){if(262>a.u){Ck(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.Na^a.window[a.o+3-1])&a.Ma,c=a.Ia[a.o&a.Za]=a.head[a.H],a.head[a.H]=a.o);a.va=a.K;a.Ad=a.zb;a.K=2;0!==c&&a.va<a.Jc&&a.o-c<=a.ha-262&&(a.K=Bk(a,c),5>=a.K&&(1===a.strategy||3===a.K&&4096<a.o-a.zb)&&(a.K=2));if(3<=a.va&&a.K<=a.va){d=a.o+a.u-3;c=vk(a,a.o-1-a.Ad,a.va-3);a.u-=a.va-1;a.va-=2;do++a.o<=d&&(a.H=(a.H<<a.Na^a.window[a.o+3-1])&a.Ma,a.Ia[a.o&a.Za]=a.head[a.H],a.head[a.H]=a.o);
while(0!==--a.va);a.hb=0;a.K=2;a.o++;if(c&&(zk(a,!1),0===a.F.J))return 1}else if(a.hb){if((c=vk(a,0,a.window[a.o-1]))&&zk(a,!1),a.o++,a.u--,0===a.F.J)return 1}else a.hb=1,a.o++,a.u--}a.hb&&(vk(a,0,a.window[a.o-1]),a.hb=0);a.ra=2>a.o?a.o:2;return 4===b?(zk(a,!0),0===a.F.J?3:4):a.wa&&(zk(a,!1),0===a.F.J)?1:2}
function Fk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){Ck(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.K=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.K=258-(e-d);a.K>a.u&&(a.K=a.u)}3<=a.K?(c=vk(a,1,a.K-3),a.u-=a.K,a.o+=a.K,a.K=0):(c=vk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(zk(a,!1),0===a.F.J))return 1}a.ra=0;return 4===b?(zk(a,!0),0===a.F.J?3:4):
a.wa&&(zk(a,!1),0===a.F.J)?1:2}
function Gk(a,b){for(var c;;){if(0===a.u&&(Ck(a),0===a.u)){if(0===b)return 1;break}a.K=0;c=vk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(zk(a,!1),0===a.F.J))return 1}a.ra=0;return 4===b?(zk(a,!0),0===a.F.J?3:4):a.wa&&(zk(a,!1),0===a.F.J)?1:2}
function Hk(a,b,c,d,e){this.se=a;this.Be=b;this.Ee=c;this.Ae=d;this.oe=e}
var Ik;Ik=[new Hk(0,0,0,0,function(a,b){var c=65535;for(c>a.xa-5&&(c=a.xa-5);;){if(1>=a.u){Ck(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.sa+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,zk(a,!1),0===a.F.J)return 1;if(a.o-a.sa>=a.ha-262&&(zk(a,!1),0===a.F.J))return 1}a.ra=0;if(4===b)return zk(a,!0),0===a.F.J?3:4;a.o>a.sa&&zk(a,!1);return 1}),
new Hk(4,4,8,4,Dk),new Hk(4,5,16,8,Dk),new Hk(4,6,32,32,Dk),new Hk(4,4,16,16,Ek),new Hk(8,16,32,32,Ek),new Hk(8,16,128,128,Ek),new Hk(8,32,128,256,Ek),new Hk(32,128,258,1024,Ek),new Hk(32,258,258,4096,Ek)];
function Jk(){this.F=null;this.status=0;this.U=null;this.wrap=this.pending=this.Pb=this.xa=0;this.B=null;this.Aa=0;this.method=8;this.yb=-1;this.Za=this.Vc=this.ha=0;this.window=null;this.Qd=0;this.head=this.Ia=null;this.xd=this.od=this.strategy=this.level=this.Jc=this.vd=this.va=this.u=this.zb=this.o=this.hb=this.Ad=this.K=this.sa=this.Na=this.Ma=this.Ec=this.ic=this.H=0;this.qa=new K.Ka(1146);this.gb=new K.Ka(122);this.fa=new K.Ka(78);xk(this.qa);xk(this.gb);xk(this.fa);this.bd=this.ec=this.jc=
null;this.La=new K.Ka(16);this.V=new K.Ka(573);xk(this.V);this.xb=this.Oa=0;this.depth=new K.Ka(573);xk(this.depth);this.da=this.ka=this.ra=this.matches=this.Db=this.Qa=this.Kb=this.wa=this.Ob=this.Ic=0}
function Kk(a,b){if(!a||!a.state||5<b||0>b)return a?wk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.ja||666===c.status&&4!==b)return wk(a,0===a.J?-5:-2);c.F=a;var d=c.yb;c.yb=b;if(42===c.status)if(2===c.wrap)a.D=0,M(c,31),M(c,139),M(c,8),c.B?(M(c,(c.B.text?1:0)+(c.B.Ua?2:0)+(c.B.Ta?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),M(c,c.B.time&255),M(c,c.B.time>>8&255),M(c,c.B.time>>16&255),M(c,c.B.time>>24&255),M(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),M(c,c.B.os&255),c.B.Ta&&c.B.Ta.length&&
(M(c,c.B.Ta.length&255),M(c,c.B.Ta.length>>8&255)),c.B.Ua&&(a.D=Jj(a.D,c.U,c.pending,0)),c.Aa=0,c.status=69):(M(c,0),M(c,0),M(c,0),M(c,0),M(c,0),M(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),M(c,3),c.status=113);else{var e=8+(c.Vc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;Ak(c,e+(31-e%31));0!==c.o&&(Ak(c,a.D>>>16),Ak(c,a.D&65535));a.D=1}if(69===c.status)if(c.B.Ta){for(e=c.pending;c.Aa<(c.B.Ta.length&65535)&&(c.pending!==c.xa||(c.B.Ua&&
c.pending>e&&(a.D=Jj(a.D,c.U,c.pending-e,e)),yk(a),e=c.pending,c.pending!==c.xa));)M(c,c.B.Ta[c.Aa]&255),c.Aa++;c.B.Ua&&c.pending>e&&(a.D=Jj(a.D,c.U,c.pending-e,e));c.Aa===c.B.Ta.length&&(c.Aa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.xa&&(c.B.Ua&&c.pending>e&&(a.D=Jj(a.D,c.U,c.pending-e,e)),yk(a),e=c.pending,c.pending===c.xa)){var f=1;break}f=c.Aa<c.B.name.length?c.B.name.charCodeAt(c.Aa++)&255:0;M(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.D=Jj(a.D,
c.U,c.pending-e,e));0===f&&(c.Aa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.xa&&(c.B.Ua&&c.pending>e&&(a.D=Jj(a.D,c.U,c.pending-e,e)),yk(a),e=c.pending,c.pending===c.xa)){f=1;break}f=c.Aa<c.B.comment.length?c.B.comment.charCodeAt(c.Aa++)&255:0;M(c,f)}while(0!==f);c.B.Ua&&c.pending>e&&(a.D=Jj(a.D,c.U,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ua?(c.pending+2>c.xa&&yk(a),c.pending+2<=c.xa&&(M(c,a.D&255),M(c,a.D>>
8&255),a.D=0,c.status=113)):c.status=113);if(0!==c.pending){if(yk(a),0===a.J)return c.yb=-1,0}else if(0===a.ja&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return wk(a,-5);if(666===c.status&&0!==a.ja)return wk(a,-5);if(0!==a.ja||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?Gk(c,b):3===c.strategy?Fk(c,b):Ik[c.level].oe(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.J&&(c.yb=-1),0;if(2===d&&(1===b?(gk(c,2,3),hk(c,256,Uj),16===c.da?(fk(c,c.ka),c.ka=0,c.da=0):8<=c.da&&(c.U[c.pending++]=
c.ka&255,c.ka>>=8,c.da-=8)):5!==b&&(gk(c,0,3),mk(c,0,0),3===b&&(xk(c.head),0===c.u&&(c.o=0,c.sa=0,c.ra=0))),yk(a),0===a.J))return c.yb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(M(c,a.D&255),M(c,a.D>>8&255),M(c,a.D>>16&255),M(c,a.D>>24&255),M(c,a.nb&255),M(c,a.nb>>8&255),M(c,a.nb>>16&255),M(c,a.nb>>24&255)):(Ak(c,a.D>>>16),Ak(c,a.D&65535));yk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Lk={};Lk=function(){this.input=null;this.nb=this.ja=this.jb=0;this.output=null;this.Tc=this.J=this.Bb=0;this.msg="";this.state=null;this.yc=2;this.D=0};var Mk=Object.prototype.toString;
function Nk(a){if(!(this instanceof Nk))return new Nk(a);a=this.options=K.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.F=new Lk;this.F.J=0;var b=this.F;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=wk(b,-2);else{8===e&&(e=9);var l=new Jk;b.state=l;l.F=b;l.wrap=h;l.B=null;l.Vc=e;l.ha=1<<l.Vc;l.Za=l.ha-1;l.Ec=f+7;l.ic=1<<l.Ec;l.Ma=l.ic-1;l.Na=~~((l.Ec+3-1)/3);l.window=new K.qb(2*l.ha);l.head=new K.Ka(l.ic);l.Ia=new K.Ka(l.ha);l.Ob=1<<f+6;l.xa=4*l.Ob;l.U=new K.qb(l.xa);l.Kb=1*l.Ob;l.Ic=3*l.Ob;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.nb=b.Tc=0;b.yc=2;c=b.state;c.pending=0;c.Pb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.D=2===c.wrap?
0:1;c.yb=0;if(!uk){d=Array(16);for(f=g=0;28>f;f++)for(Yj[f]=g,e=0;e<1<<Qj[f];e++)Xj[g++]=f;Xj[g-1]=f;for(f=g=0;16>f;f++)for(Zj[f]=g,e=0;e<1<<Rj[f];e++)Wj[g++]=f;for(g>>=7;30>f;f++)for(Zj[f]=g<<7,e=0;e<1<<Rj[f]-7;e++)Wj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Uj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Uj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Uj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Uj[2*e+1]=8,e++,d[8]++;jk(Uj,287,d);for(e=0;30>e;e++)Vj[2*e+1]=5,Vj[2*e]=ik(e,5);bk=new ak(Uj,Qj,257,286,15);ck=new ak(Vj,
Rj,0,30,15);dk=new ak([],Sj,0,19,7);uk=!0}c.jc=new ek(c.qa,bk);c.ec=new ek(c.gb,ck);c.bd=new ek(c.fa,dk);c.ka=0;c.da=0;kk(c);c=0}else c=wk(b,-2);0===c&&(b=b.state,b.Qd=2*b.ha,xk(b.head),b.Jc=Ik[b.level].Be,b.od=Ik[b.level].se,b.xd=Ik[b.level].Ee,b.vd=Ik[b.level].Ae,b.o=0,b.sa=0,b.u=0,b.ra=0,b.K=b.va=2,b.hb=0,b.H=0);b=c}}else b=-2;if(0!==b)throw Error(Oj[b]);a.header&&(b=this.F)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.dictionary){var m;"string"===typeof a.dictionary?m=Hj(a.dictionary):
"[object ArrayBuffer]"===Mk.call(a.dictionary)?m=new Uint8Array(a.dictionary):m=a.dictionary;a=this.F;f=m;g=f.length;if(a&&a.state)if(m=a.state,b=m.wrap,2===b||1===b&&42!==m.status||m.u)b=-2;else{1===b&&(a.D=Ij(a.D,f,g,0));m.wrap=0;g>=m.ha&&(0===b&&(xk(m.head),m.o=0,m.sa=0,m.ra=0),c=new K.qb(m.ha),K.tb(c,f,g-m.ha,m.ha,0),f=c,g=m.ha);c=a.ja;d=a.jb;e=a.input;a.ja=g;a.jb=0;a.input=f;for(Ck(m);3<=m.u;){f=m.o;g=m.u-2;do m.H=(m.H<<m.Na^m.window[f+3-1])&m.Ma,m.Ia[f&m.Za]=m.head[m.H],m.head[m.H]=f,f++;while(--g);
m.o=f;m.u=2;Ck(m)}m.o+=m.u;m.sa=m.o;m.ra=m.u;m.u=0;m.K=m.va=2;m.hb=0;a.jb=d;a.input=e;a.ja=c;m.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Oj[b]);this.ig=!0}}
Nk.prototype.push=function(a,b){var c=this.F,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Hj(a):"[object ArrayBuffer]"===Mk.call(a)?c.input=new Uint8Array(a):c.input=a;c.jb=0;c.ja=c.input.length;do{0===c.J&&(c.output=new K.qb(d),c.Bb=0,c.J=d);a=Kk(c,e);if(1!==a&&0!==a)return Ok(this,a),this.ended=!0,!1;if(0===c.J||0===c.ja&&(4===e||2===e))if("string"===this.options.to){var f=K.Sc(c.output,c.Bb);b=f;f=f.length;if(65537>f&&(b.subarray&&Gj||!b.subarray))b=
String.fromCharCode.apply(null,K.Sc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=K.Sc(c.output,c.Bb),this.chunks.push(b)}while((0<c.ja||0===c.J)&&1!==a);if(4===e)return(c=this.F)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=wk(c,-2):(c.state=null,a=113===d?wk(c,-3):0)):a=-2,Ok(this,a),this.ended=!0,0===a;2===e&&(Ok(this,0),c.J=0);return!0};
function Ok(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):K.ld(a.chunks));a.chunks=[];a.err=b;a.msg=a.F.msg}
function Pk(a){var b=b||{};b.gzip=!0;b=new Nk(b);b.push(a,!0);if(b.err)throw b.msg||Oj[b.err];return b.result}
;function Qk(a){return Jb(null===a?"null":void 0===a?"undefined":a)}
;function Rk(a){this.name=a}
;var Sk=new Rk("rawColdConfigGroup");var Tk=new Rk("rawHotConfigGroup");var Uk=new Rk("commandExecutorCommand");function Vk(a){I.call(this,a)}
v(Vk,I);function Wk(a,b){return we(a,1,b)}
;function Xk(a){I.call(this,a,-1,Yk)}
v(Xk,I);var Yk=[1];function Zk(a){I.call(this,a)}
v(Zk,I);function $k(a){I.call(this,a)}
v($k,I);function al(a){I.call(this,a)}
v(al,I);function bl(a){I.call(this,a,-1,cl)}
v(bl,I);var cl=[2];function dl(a){I.call(this,a,-1,el)}
v(dl,I);dl.prototype.getPlayerType=function(){return ze(ie(this,36),0)};
dl.prototype.setHomeGroupInfo=function(a){return H(this,bl,81,a)};
dl.prototype.clearLocationPlayabilityToken=function(){return G(this,89,void 0,!1)};
var el=[9,66,24,32,86,100,101];function fl(a){I.call(this,a)}
v(fl,I);fl.prototype.getKey=function(){return Ae(this,1)};
fl.prototype.getValue=function(){return Ae(this,2===pe(this,gl)?2:-1)};
var gl=[2,3,4,5,6];function hl(a){I.call(this,a,-1,il)}
v(hl,I);var il=[15,26,28];function jl(a){I.call(this,a,-1,kl)}
v(jl,I);var kl=[5];function ll(a){I.call(this,a)}
v(ll,I);function ml(a){I.call(this,a,-1,nl)}
v(ml,I);ml.prototype.setSafetyMode=function(a){return G(this,5,a)};
var nl=[12];function ol(a){I.call(this,a,-1,pl)}
v(ol,I);ol.prototype.j=function(a){return H(this,dl,1,a)};
var pl=[12];var ql=new Rk("continuationCommand");var rl=new Rk("signalAction");var sl=new Rk("webCommandMetadata");var tl=new Rk("signalServiceEndpoint");var ul={Bf:"EMBEDDED_PLAYER_MODE_UNKNOWN",yf:"EMBEDDED_PLAYER_MODE_DEFAULT",Af:"EMBEDDED_PLAYER_MODE_PFP",zf:"EMBEDDED_PLAYER_MODE_PFL"};var vl=new Rk("feedbackEndpoint");var wl={hg:"WEB_DISPLAY_MODE_UNKNOWN",dg:"WEB_DISPLAY_MODE_BROWSER",fg:"WEB_DISPLAY_MODE_MINIMAL_UI",gg:"WEB_DISPLAY_MODE_STANDALONE",eg:"WEB_DISPLAY_MODE_FULLSCREEN"};function Nl(a){I.call(this,a)}
v(Nl,I);Nl.prototype.getKey=function(){return Ae(this,1)};
Nl.prototype.getValue=function(){return Ae(this,2)};function Ol(a){I.call(this,a,-1,Pl)}
v(Ol,I);var Pl=[4,5];function Ql(a){I.call(this,a)}
v(Ql,I);Ql.prototype.getLineNumber=function(){return ze(ie(this,2),0)};
Ql.prototype.getColumnNumber=function(){return ze(ie(this,3),0)};function Rl(a){I.call(this,a)}
v(Rl,I);var Sl=[2,3,4,5];function Tl(a){I.call(this,a)}
v(Tl,I);Tl.prototype.getMessage=function(){return Ae(this,1)};
Tl.prototype.getLevel=function(){return ze(ie(this,2),0)};function Ul(a){I.call(this,a)}
v(Ul,I);function Vl(a){I.call(this,a)}
v(Vl,I);function Wl(a){I.call(this,a,-1,Xl)}
v(Wl,I);var Xl=[10,17];function Yl(a){I.call(this,a)}
v(Yl,I);function Zl(a){I.call(this,a)}
v(Zl,I);function $l(a){I.call(this,a)}
v($l,I);function am(a){I.call(this,a)}
v(am,I);function bm(a){I.call(this,a)}
v(bm,I);function cm(a){I.call(this,a,-1,dm)}
v(cm,I);cm.prototype.getVideoData=function(){return qe(this,bm,15)};
var dm=[4];function em(a){I.call(this,a)}
v(em,I);function fm(a,b){H(a,$l,1,b)}
;function gm(a){I.call(this,a)}
v(gm,I);function hm(a,b){return H(a,$l,1,b)}
gm.prototype.h=function(a){return G(this,2,a)};function im(a){I.call(this,a,-1,jm)}
v(im,I);im.prototype.h=function(a){return G(this,1,a)};
function km(a,b){return H(a,$l,2,b)}
var jm=[3];function lm(a){I.call(this,a)}
v(lm,I);lm.prototype.h=function(a){return G(this,1,a)};function mm(a){I.call(this,a)}
v(mm,I);mm.prototype.h=function(a){return G(this,1,a)};function nm(a){I.call(this,a)}
v(nm,I);nm.prototype.h=function(a){return G(this,1,a)};function om(a){I.call(this,a)}
v(om,I);om.prototype.h=function(a){return G(this,1,a)};function pm(a){I.call(this,a)}
v(pm,I);function qm(a){I.call(this,a)}
v(qm,I);function rm(a){var b=new qm;return G(b,1,a)}
qm.prototype.getId=function(){return Ae(this,2)};
function sm(a,b){return G(a,2,b)}
;function tm(a){I.call(this,a)}
v(tm,I);function um(a){I.call(this,a,-1,wm)}
v(um,I);um.prototype.getPlayerType=function(){return ze(ie(this,7),0)};
um.prototype.setVideoId=function(a){return G(this,19,a)};
function xm(a,b){ve(a,68,qm,b)}
var wm=[112,83,68];function ym(a){I.call(this,a)}
v(ym,I);function zm(a){I.call(this,a)}
v(zm,I);function Am(a){I.call(this,a)}
v(Am,I);function Bm(a){I.call(this,a,475)}
v(Bm,I);
var Cm=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474];var Dm={Vf:0,Cf:1,If:2,Jf:4,Pf:8,Kf:16,Lf:32,Uf:64,Tf:128,Ef:256,Gf:512,Nf:1024,Ff:2048,Hf:4096,Df:8192,Mf:16384,Qf:32768,Of:65536,Rf:131072,Sf:262144};function Em(a){I.call(this,a)}
v(Em,I);function Fm(a){I.call(this,a)}
v(Fm,I);Fm.prototype.setVideoId=function(a){return oe(this,1,Gm,a)};
Fm.prototype.getPlaylistId=function(){var a=2===pe(this,Gm)?2:-1;return ie(this,a)};
var Gm=[1,2];function Hm(a){I.call(this,a,-1,Im)}
v(Hm,I);var Im=[3];var Jm=new Rk("webPlayerShareEntityServiceEndpoint");var Km=new Rk("playlistEditEndpoint");var Lm=new Rk("modifyChannelNotificationPreferenceEndpoint");var Mm=new Rk("unsubscribeEndpoint");var Nm=new Rk("subscribeEndpoint");function Om(){var a=Pm;B("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a)}
function Qm(a){y("yt.ads.biscotti.lastId_",a)}
;function Rm(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Sm=x.window,Tm,Um,Vm=(null==Sm?void 0:null==(Tm=Sm.yt)?void 0:Tm.config_)||(null==Sm?void 0:null==(Um=Sm.ytcfg)?void 0:Um.data_)||{};y("yt.config_",Vm);function Wm(){Rm(Vm,arguments)}
function O(a,b){return a in Vm?Vm[a]:b}
function Xm(){var a=Vm.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Ym=[];function Zm(a){Ym.forEach(function(b){return b(a)})}
function $m(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){an(b)}}:a}
function an(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Wm("ERRORS",b));Zm(a)}
function bn(a,b,c,d,e){var f=B("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=O("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Wm("ERRORS",f))}
;var cn=/^[\w.]*$/,dn={q:!0,search_query:!0};function en(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=fn(f[0]||""),h=fn(f[1]||"");g in c?Array.isArray(c[g])?nb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(r){var l=r,m=f[0],p=String(en);l.args=[{key:m,value:f[1],query:a,method:gn==p?"unchanged":p}];dn.hasOwnProperty(m)||bn(l)}}return c}
var gn=String(en);function hn(a){var b=[];ob(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];hb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function jn(a){"?"==a.charAt(0)&&(a=a.substr(1));return en(a,"&")}
function kn(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),jn(1<a.length?a[1]:a[0])):{}}
function ln(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=jn(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Ic(a,e)+d}
function mn(a){if(!b)var b=window.location.href;var c=Ac(1,a),d=Bc(a);c&&d?(a=a.match(yc),b=b.match(yc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Bc(b)==d&&(Number(Ac(4,b))||null)==(Number(Ac(4,a))||null):!0;return a}
function fn(a){return a&&a.match(cn)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function nn(a){var b=on;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Hi;e.flash="0";a:{try{var f=b.h.top.location.href}catch(oa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?mi:g;try{var h=g.history.length}catch(oa){h=0}e.u_his=h;var l;e.u_h=null==(l=mi.screen)?void 0:l.height;var m;e.u_w=null==(m=mi.screen)?void 0:m.width;var p;e.u_ah=null==(p=mi.screen)?void 0:p.availHeight;var r;e.u_aw=
null==(r=mi.screen)?void 0:r.availWidth;var z;e.u_cd=null==(z=mi.screen)?void 0:z.colorDepth}catch(oa){}h=b.h;try{var u=h.screenX;var A=h.screenY}catch(oa){}try{var C=h.outerWidth;var D=h.outerHeight}catch(oa){}try{var N=h.innerWidth;var R=h.innerHeight}catch(oa){}try{var T=h.screenLeft;var ea=h.screenTop}catch(oa){}try{N=h.innerWidth,R=h.innerHeight}catch(oa){}try{var Z=h.screen.availWidth;var pa=h.screen.availTop}catch(oa){}u=[T,ea,u,A,Z,pa,C,D,N,R];try{var Sa=(b.h.top||window).document,Da="CSS1Compat"==
Sa.compatMode?Sa.documentElement:Sa.body;var Ea=(new If(Da.clientWidth,Da.clientHeight)).round()}catch(oa){Ea=new If(-12245933,-12245933)}Sa=Ea;Ea={};var ya=void 0===ya?x:ya;Da=new Qi;"SVGElement"in ya&&"createElementNS"in ya.document&&Da.set(0);A=Ei();A["allow-top-navigation-by-user-activation"]&&Da.set(1);A["allow-popups-to-escape-sandbox"]&&Da.set(2);ya.crypto&&ya.crypto.subtle&&Da.set(3);"TextDecoder"in ya&&"TextEncoder"in ya&&Da.set(4);ya=Ri(Da);Ea.bc=ya;Ea.bih=Sa.height;Ea.biw=Sa.width;Ea.brdim=
u.join();b=b.i;b=(Ea.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ea.wgl=!!mi.WebGLRenderingContext,Ea);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var on=new function(){var a=window.document;this.h=window;this.i=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return hn(nn(a))});Date.now();navigator.userAgent.indexOf(" (CrKey ");function P(a){a=pn(a);return"string"===typeof a&&"false"===a?!1:!!a}
function qn(a,b){a=pn(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function rn(){return O("EXPERIMENTS_TOKEN","")}
function pn(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
function sn(){for(var a=[],b=O("EXPERIMENTS_FORCED_FLAGS",{}),c=t(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=O("EXPERIMENT_FLAGS",{});var e=t(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var tn="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function un(){if(!tn)return null;var a=tn();return"open"in a?a:null}
function vn(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function wn(a,b){"function"===typeof a&&(a=$m(a));return window.setTimeout(a,b)}
;var xn={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},yn="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Ii)),zn=!1;
function An(a,b){b=void 0===b?{}:b;var c=mn(a),d=P("web_ajax_ignore_global_headers_if_set"),e;for(e in xn){var f=O(xn[e]);"X-Goog-Visitor-Id"!==e||f||(f=O("VISITOR_DATA"));!f||!c&&Bc(a)||d&&void 0!==b[e]||!(P("move_vss_away_from_login_info_cookie")||"X-Goog-AuthUser"!==e&&"X-Goog-PageId"!==e)||(b[e]=f)}P("move_vss_away_from_login_info_cookie")&&c&&O("SESSION_INDEX")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Bc(a))b["X-YouTube-Utc-Offset"]=
String(-(new Date).getTimezoneOffset());if(c||!Bc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Bc(a)||(b["X-YouTube-Ad-Signals"]=hn(nn()));return b}
function Bn(a){var b=window.location.search,c=Bc(a);P("debug_handle_relative_url_for_query_forward_killswitch")||!c&&mn(a)&&(c=document.location.hostname);var d=zc(Ac(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=jn(b),f={};hb(yn,function(g){e[g]&&(f[g]=e[g])});
return ln(a,f||{},!1)}
function Cn(a,b){var c=b.format||"JSON";a=Dn(a,b);var d=En(a,b),e=!1,f=Fn(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);var m=vn(l),p=null,r=400<=l.status&&500>l.status,z=500<=l.status&&600>l.status;if(m||r||z)p=Gn(a,c,l,b.convertToSafeHtml);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(p&&p.return_code,10);break a;case "RAW":m=!0;break a}m=!!p}p=p||{};r=b.context||x;m?b.onSuccess&&b.onSuccess.call(r,l,p):b.onError&&b.onError.call(r,l,p);b.onFinish&&b.onFinish.call(r,
l,p)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=wn(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||x,f))},d)}return f}
function Dn(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=O("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ln(a,b||{},!0);return a}
function En(a,b){var c=O("XSRF_FIELD_NAME"),d=O("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=O("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Bc(a)&&!b.withCredentials&&Bc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(P("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=jn(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Gc(e));f=e||f&&!rb(f);!zn&&f&&"POST"!=b.method&&(zn=!0,an(Error("AJAX request with postData should use POST")));return e}
function Gn(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,bn(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Hn(a):null)e={},hb(a.getElementsByTagName("*"),function(g){e[g.tagName]=In(g)})}d&&Jn(e);
return e}
function Jn(a){if(Ta(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new qc(d)}else Jn(a[b])}}
function Hn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function In(a){var b="";hb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Kn(a,b){b.method="POST";b.postParams||(b.postParams={});return Cn(a,b)}
function Fn(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&$m(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=un();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;P("debug_forward_web_query_parameters")&&(a=Bn(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=An(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var Ln=[{Kc:function(a){return"Cannot read property '"+a.key+"'"},
lc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Kc:function(a){return"Cannot call '"+a.key+"'"},
lc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Kc:function(a){return a.key+" is not defined"},
lc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Nn={Wa:[],Sa:[{callback:Mn,weight:500}]};function Mn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function On(){this.Sa=[];this.Wa=[]}
var Pn;function Qn(){if(!Pn){var a=Pn=new On;a.Wa.length=0;a.Sa.length=0;Nn.Wa&&a.Wa.push.apply(a.Wa,Nn.Wa);Nn.Sa&&a.Sa.push.apply(a.Sa,Nn.Sa)}return Pn}
;var Rn=new lj;function Sn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Tn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Tn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Tn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Tn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Un(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Vn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Sn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Vn(e+".ve",f,g,h):0;d+=g;d+=Vn(e,a[e],b,c);if(500<d)break}}else c[b]=Wn(a),d+=c[b].length;else c[b]=Wn(a),d+=c[b].length;return d}
function Vn(a,b,c,d){c+="."+a;a=Wn(b);d[c]=a;return c.length+a.length}
function Wn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Xn(){this.bf=!0}
function Yn(){Xn.h||(Xn.h=new Xn);return Xn.h}
function Zn(a,b){a={};var c=bh([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(O("SESSION_INDEX",0)),c=isNaN(c)?0:c),P("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Vm||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Vm&&(a["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return a}
;var $n={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function ao(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function bo(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function co(a,b,c,d,e){Yg.set(""+a,b,{kc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function eo(a,b,c){Yg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function fo(){if(!Yg.isEnabled())return!1;if(!Yg.isEmpty())return!0;Yg.set("TESTCOOKIESENABLED","1",{kc:60});if("1"!==Yg.get("TESTCOOKIESENABLED"))return!1;Yg.remove("TESTCOOKIESENABLED");return!0}
;var go=B("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",go);function ho(){this.h=O("ALT_PREF_COOKIE_NAME","PREF");this.i=O("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Yg.get(""+this.h,void 0);a&&this.parse(a)}
var io;function jo(){io||(io=new ho);return io}
k=ho.prototype;k.get=function(a,b){ko(a);lo(a);a=void 0!==go[a]?go[a].toString():null;return null!=a?a:b?b:""};
k.set=function(a,b){ko(a);lo(a);if(null==b)throw Error("ExpectedNotNull");go[a]=b.toString()};
function mo(a){return!!((no("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
k.remove=function(a){ko(a);lo(a);delete go[a]};
k.clear=function(){for(var a in go)delete go[a]};
function lo(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function ko(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function no(a){a=void 0!==go[a]?go[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
k.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(go[d]=c.toString())}};var oo={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},po={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},qo={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},ro={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function so(){var a=x.navigator;return a?a.connection:void 0}
function to(){var a=so();if(a){var b=oo[a.type||"unknown"]||"CONN_UNKNOWN";a=oo[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function uo(){var a=so();if(null!=a&&a.effectiveType)return ro.hasOwnProperty(a.effectiveType)?ro[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function vo(a){var b=Ma.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(vo,Error);function wo(){try{return xo(),!0}catch(a){return!1}}
function xo(a){if(void 0!==O("DATASYNC_ID"))return O("DATASYNC_ID");throw new vo("Datasync ID not set",void 0===a?"unknown":a);}
;function yo(){}
function zo(a,b){return Ao(a,0,b)}
yo.prototype.ia=function(a,b){return Ao(a,1,b)};
function Bo(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Co(){yo.apply(this,arguments)}
v(Co,yo);function Do(){Co.h||(Co.h=new Co);return Co.h}
function Ao(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):wn(a,c||0)}
Co.prototype.Ga=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Co.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Co.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var Pi=Do();function Eo(a){var b=new wj;(b=b.isAvailable()?a?new Cj(b,a):b:null)||(a=new xj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new sj(a):null;this.i=document.domain||window.location.hostname}
Eo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new fh).serialize(b))}catch(f){return}else e=escape(b);co(a,e,c,this.i)};
Eo.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Yg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Eo.prototype.remove=function(a){this.h&&this.h.remove(a);eo(a,"/",this.i)};var Fo=function(){var a;return function(){a||(a=new Eo("ytidb"));return a}}();
function Go(){var a;return null==(a=Fo())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Ho=[],Io,Jo=!1;function Ko(){var a={};for(Io=new Lo(void 0===a.handleError?Mo:a.handleError,void 0===a.logEvent?No:a.logEvent);0<Ho.length;)switch(a=Ho.shift(),a.type){case "ERROR":Io.handleError(a.payload);break;case "EVENT":Io.logEvent(a.eventType,a.payload)}}
function Oo(a){Jo||(Io?Io.handleError(a):(Ho.push({type:"ERROR",payload:a}),10<Ho.length&&Ho.shift()))}
function Po(a,b){Jo||(Io?Io.logEvent(a,b):(Ho.push({type:"EVENT",eventType:a,payload:b}),10<Ho.length&&Ho.shift()))}
;function Qo(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Ro(a){return a.substr(0,a.indexOf(":"))||a}
;var So=td||ud;function To(a){var b=Zb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Uo={},Vo=(Uo.AUTH_INVALID="No user identifier specified.",Uo.EXPLICIT_ABORT="Transaction was explicitly aborted.",Uo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Uo.MISSING_INDEX="Index not created.",Uo.MISSING_OBJECT_STORES="Object stores not created.",Uo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Uo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Uo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Uo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Uo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Uo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Uo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Uo),Wo={},Xo=(Wo.AUTH_INVALID="ERROR",Wo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Wo.EXPLICIT_ABORT="IGNORED",Wo.IDB_NOT_SUPPORTED="ERROR",Wo.MISSING_INDEX=
"WARNING",Wo.MISSING_OBJECT_STORES="ERROR",Wo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Wo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Wo.QUOTA_EXCEEDED="WARNING",Wo.QUOTA_MAYBE_EXCEEDED="WARNING",Wo.UNKNOWN_ABORT="WARNING",Wo.INCOMPATIBLE_DB_VERSION="WARNING",Wo),Yo={},Zo=(Yo.AUTH_INVALID=!1,Yo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Yo.EXPLICIT_ABORT=!1,Yo.IDB_NOT_SUPPORTED=!1,Yo.MISSING_INDEX=!1,Yo.MISSING_OBJECT_STORES=!1,Yo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Yo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Yo.QUOTA_EXCEEDED=!1,Yo.QUOTA_MAYBE_EXCEEDED=!0,Yo.UNKNOWN_ABORT=!0,Yo.INCOMPATIBLE_DB_VERSION=!1,Yo);function $o(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Vo[a]:c;d=void 0===d?Xo[a]:d;e=void 0===e?Zo[a]:e;vo.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,$o.prototype)}
v($o,vo);function ap(a,b){$o.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Vo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,ap.prototype)}
v(ap,$o);function bp(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,bp.prototype)}
v(bp,Error);var cp=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function dp(a,b,c,d){b=Ro(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof $o)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new $o("QUOTA_EXCEEDED",a);if(vd&&"UnknownError"===e.name)return new $o("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof bp)return new $o("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&cp.some(function(f){return e.message.includes(f)}))return new $o("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new $o("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",zd:e.name})];e.level="WARNING";return e}
function ep(a,b,c){var d=Go();return new $o("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function fp(a){if(!a)throw Error();throw a;}
function gp(a){return a}
function hp(a){this.h=a}
function ip(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
ip.all=function(a){return new ip(new hp(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ob:0};f.ob<a.length;f={ob:f.ob},++f.ob)ip.resolve(a[f.ob]).then(function(g){return function(h){d[g.ob]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
ip.resolve=function(a){return new ip(new hp(function(b,c){a instanceof ip?a.then(b,c):b(a)}))};
ip.reject=function(a){return new ip(new hp(function(b,c){c(a)}))};
ip.prototype.then=function(a,b){var c=this,d=null!=a?a:gp,e=null!=b?b:fp;return new ip(new hp(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){jp(c,c,d,f,g)}),c.i.push(function(){kp(c,c,e,f,g)})):"FULFILLED"===c.state.status?jp(c,c,d,f,g):"REJECTED"===c.state.status&&kp(c,c,e,f,g)}))};
ip.prototype.catch=function(a){return this.then(void 0,a)};
function jp(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof ip?lp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function kp(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof ip?lp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function lp(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof ip?lp(a,b,f,d,e):d(f)},function(f){e(f)})}
;function mp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function np(a){return new Promise(function(b,c){mp(a,b,c)})}
function op(a){return new ip(new hp(function(b,c){mp(a,b,c)}))}
;function pp(a,b){return new ip(new hp(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var qp=window,S=qp.ytcsi&&qp.ytcsi.now?qp.ytcsi.now:qp.performance&&qp.performance.timing&&qp.performance.now&&qp.performance.timing.navigationStart?function(){return qp.performance.timing.navigationStart+qp.performance.now()}:function(){return(new Date).getTime()};function rp(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(S());this.i=!1}
k=rp.prototype;k.add=function(a,b,c){return sp(this,[a],{mode:"readwrite",ga:!0},function(d){return d.objectStore(a).add(b,c)})};
k.clear=function(a){return sp(this,[a],{mode:"readwrite",ga:!0},function(b){return b.objectStore(a).clear()})};
k.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
k.count=function(a,b){return sp(this,[a],{mode:"readonly",ga:!0},function(c){return c.objectStore(a).count(b)})};
function tp(a,b,c){a=a.h.createObjectStore(b,c);return new up(a)}
k.delete=function(a,b){return sp(this,[a],{mode:"readwrite",ga:!0},function(c){return c.objectStore(a).delete(b)})};
k.get=function(a,b){return sp(this,[a],{mode:"readonly",ga:!0},function(c){return c.objectStore(a).get(b)})};
function vp(a,b,c){return sp(a,[b],{mode:"readwrite",ga:!0},function(d){d=d.objectStore(b);return op(d.h.put(c,void 0))})}
k.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function sp(a,b,c,d){var e,f,g,h,l,m,p,r,z,u,A,C;return w(function(D){switch(D.h){case 1:var N={mode:"readonly",ga:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?N.mode=c:Object.assign(N,c);e=N;a.transactionCount++;f=e.ga?3:1;g=0;case 2:if(h){D.A(3);break}g++;l=Math.round(S());za(D,4);m=a.h.transaction(b,e.mode);N=D.yield;var R=new wp(m);R=xp(R,d);return N.call(D,R,6);case 6:return p=D.i,r=Math.round(S()),yp(a,l,r,g,void 0,b.join(),e),D.return(p);case 4:z=Ba(D);u=Math.round(S());A=dp(z,
a.h.name,b.join(),a.h.version);if((C=A instanceof $o&&!A.h)||g>=f)yp(a,l,u,g,A,b.join(),e),h=A;D.A(2);break;case 3:return D.return(Promise.reject(h))}})}
function yp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof $o&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Po("QUOTA_EXCEEDED",{dbName:Ro(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof $o&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Po("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),zp(a,!1,d,f,b,g.tag),Oo(e)):zp(a,!0,d,f,b,g.tag)}
function zp(a,b,c,d,e,f){Po("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
k.getName=function(){return this.h.name};
function up(a){this.h=a}
k=up.prototype;k.add=function(a,b){return op(this.h.add(a,b))};
k.autoIncrement=function(){return this.h.autoIncrement};
k.clear=function(){return op(this.h.clear()).then(function(){})};
function Ap(a,b,c){a.h.createIndex(b,c,{unique:!1})}
k.count=function(a){return op(this.h.count(a))};
function Bp(a,b){return Cp(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
k.delete=function(a){return a instanceof IDBKeyRange?Bp(this,a):op(this.h.delete(a))};
k.get=function(a){return op(this.h.get(a))};
k.index=function(a){try{return new Dp(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new bp(a,this.h.name);throw b;}};
k.getName=function(){return this.h.name};
k.keyPath=function(){return this.h.keyPath};
function Cp(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ep(a).then(function(d){return pp(d,c)})}
function wp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=$o;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(null===l)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function xp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
wp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new $o("EXPLICIT_ABORT");};
wp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new up(a),this.i.set(a,b));return b};
function Dp(a){this.h=a}
k=Dp.prototype;k.count=function(a){return op(this.h.count(a))};
k.delete=function(a){return Fp(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
k.get=function(a){return op(this.h.get(a))};
k.getKey=function(a){return op(this.h.getKey(a))};
k.keyPath=function(){return this.h.keyPath};
k.unique=function(){return this.h.unique};
function Fp(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Ep(a).then(function(d){return pp(d,c)})}
function Gp(a,b){this.request=a;this.cursor=b}
function Ep(a){return op(a).then(function(b){return b?new Gp(a,b):null})}
k=Gp.prototype;k.advance=function(a){this.cursor.advance(a);return Ep(this.request)};
k.continue=function(a){this.cursor.continue(a);return Ep(this.request)};
k.delete=function(){return op(this.cursor.delete()).then(function(){})};
k.getKey=function(){return this.cursor.key};
k.getValue=function(){return this.cursor.value};
k.update=function(a){return op(this.cursor.update(a))};function Hp(a,b,c){return new Promise(function(d,e){function f(){z||(z=new rp(g.result,{closed:r}));return z}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.ae,l=c.blocking,m=c.cf,p=c.upgrade,r=c.closed,z;g.addEventListener("upgradeneeded",function(u){try{if(null===u.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");u.dataLoss&&"none"!==u.dataLoss&&Po("IDB_DATA_CORRUPTED",{reason:u.dataLossMessage||"unknown reason",dbName:Ro(a)});var A=f(),C=new wp(g.transaction);
p&&p(A,function(D){return u.oldVersion<D&&u.newVersion>=D},C);
C.done.catch(function(D){e(D)})}catch(D){e(D)}});
g.addEventListener("success",function(){var u=g.result;l&&u.addEventListener("versionchange",function(){l(f())});
u.addEventListener("close",function(){Po("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ro(a),dbVersion:u.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Ip(a,b,c){c=void 0===c?{}:c;return Hp(a,b,c)}
function Jp(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.ae)&&c.addEventListener("blocked",function(){e()}),g.yield(np(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw dp(f,a,"",-1);})}
;function Kp(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
Kp.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Ip(a,b,c)};
Kp.prototype.delete=function(a){a=void 0===a?{}:a;return Jp(this.name,a)};
function Lp(a,b){return new $o("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Mp(a,b){if(!b)throw ep("openWithToken",Ro(a.name));return a.open()}
Kp.prototype.open=function(){function a(){var f,g,h,l,m,p,r,z,u,A;return w(function(C){switch(C.h){case 1:return g=null!=(f=Error().stack)?f:"",za(C,2),C.yield(c.i(c.name,c.options.version,e),4);case 4:h=C.i;for(var D=c.options,N=[],R=t(Object.keys(D.Cb)),T=R.next();!T.done;T=R.next()){T=T.value;var ea=D.Cb[T],Z=void 0===ea.Ke?Number.MAX_VALUE:ea.Ke;!(h.h.version>=ea.Jb)||h.h.version>=Z||h.h.objectStoreNames.contains(T)||N.push(T)}l=N;if(0===l.length){C.A(5);break}m=Object.keys(c.options.Cb);p=h.objectStoreNames();
if(c.m<qn("ytidb_reopen_db_retries",0))return c.m++,h.close(),Oo(new $o("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:p})),C.return(a());if(!(c.l<qn("ytidb_remake_db_retries",1))){C.A(6);break}c.l++;return C.yield(c.delete(),7);case 7:return Oo(new $o("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:m,foundObjectStores:p})),C.return(a());case 6:throw new ap(p,m);case 5:return C.return(h);case 2:r=Ba(C);if(r instanceof DOMException?
"VersionError"!==r.name:"DOMError"in self&&r instanceof DOMError?"VersionError"!==r.name:!(r instanceof Object&&"message"in r)||"An attempt was made to open a database using a lower version than the existing version."!==r.message){C.A(8);break}return C.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:z=C.i;u=z.h.version;if(void 0!==c.options.version&&u>c.options.version+1)throw z.close(),c.j=!1,Lp(c,u);return C.return(z);case 8:throw b(),r instanceof Error&&!P("ytidb_async_stack_killswitch")&&
(r.stack=r.stack+"\n"+g.substring(g.indexOf("\n")+1)),dp(r,c.name,"",null!=(A=c.options.version)?A:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Lp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,cf:b,upgrade:this.options.upgrade};return this.h=d=a()};var Np=new Kp("YtIdbMeta",{Cb:{databases:{Jb:1}},upgrade:function(a,b){b(1)&&tp(a,"databases",{keyPath:"actualName"})}});
function Op(a,b){var c;return w(function(d){if(1==d.h)return d.yield(Mp(Np,b),2);c=d.i;return d.return(sp(c,["databases"],{ga:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return op(f.h.put(a,void 0)).then(function(){})})}))})}
function Pp(a,b){var c;return w(function(d){if(1==d.h)return a?d.yield(Mp(Np,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Qp(a,b){var c,d;return w(function(e){return 1==e.h?(c=[],e.yield(Mp(Np,b),2)):3!=e.h?(d=e.i,e.yield(sp(d,["databases"],{ga:!0,mode:"readonly"},function(f){c.length=0;return Cp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Rp(a){return Qp(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Sp(a,b,c){return Qp(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Tp(a){var b,c;return w(function(d){if(1==d.h)return b=xo("YtIdbMeta hasAnyMeta other"),d.yield(Qp(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Up,Vp=new function(){}(new function(){});
function Wp(){var a,b,c,d;return w(function(e){switch(e.h){case 1:a=Go();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=So)f=/WebKit\/([0-9]+)/.exec(Zb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Zb()),f=!(f&&602<=parseInt(f[1],10)));if(f||fd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Op(d,Vp),4);case 4:return e.yield(Pp("yt-idb-test-do-not-use",Vp),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Xp(){if(void 0!==Up)return Up;Jo=!0;return Up=Wp().then(function(a){Jo=!1;var b;if(null!=(b=Fo())&&b.h){var c;b={hasSucceededOnce:(null==(c=Go())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Fo())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Yp(){return B("ytglobal.idbToken_")||void 0}
function Zp(){var a=Yp();return a?Promise.resolve(a):Xp().then(function(b){(b=b?Vp:void 0)&&y("ytglobal.idbToken_",b);return b})}
;var $p=0;function aq(a,b){$p||($p=Pi.ia(function(){var c,d,e,f,g;return w(function(h){switch(h.h){case 1:return h.yield(Zp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(Sp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(Jp(f.actualName),7);case 7:return h.yield(Pp(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),Oo(g),d=!1;case 4:Pi.Ga($p),$p=0,d&&aq(a,b),h.h=0}})}))}
function bq(){var a;return w(function(b){return 1==b.h?b.yield(Zp(),2):(a=b.i)?b.return(Tp(a)):b.return(!1)})}
new ki;function cq(a){if(!wo())throw a=new $o("AUTH_INVALID",{dbName:a}),Oo(a),a;var b=xo();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function dq(a,b,c,d){var e,f,g,h,l,m;return w(function(p){switch(p.h){case 1:return f=null!=(e=Error().stack)?e:"",p.yield(Zp(),2);case 2:g=p.i;if(!g)throw h=ep("openDbImpl",a,b),P("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Oo(h),h;Qo(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:cq(a);za(p,3);return p.yield(Op(l,g),5);case 5:return p.yield(Ip(l.actualName,b,d),6);case 6:return p.return(p.i);case 3:return m=Ba(p),za(p,7),p.yield(Pp(l.actualName,
g),9);case 9:Aa(p,8);break;case 7:Ba(p);case 8:throw m;}})}
function eq(a,b,c){c=void 0===c?{}:c;return dq(a,b,!1,c)}
function fq(a,b,c){c=void 0===c?{}:c;return dq(a,b,!0,c)}
function gq(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.h)return e.yield(Zp(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Qo(a);d=cq(a);return e.yield(Jp(d.actualName,b),3)}return e.yield(Pp(d.actualName,c),0)})}
function hq(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.h?e.yield(Jp(d.actualName,b),2):e.yield(Pp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function iq(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.h)return d.yield(Zp(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Qo("LogsDatabaseV2");return d.yield(Rp(b),3)}c=d.i;return d.yield(hq(c,a,b),0)})}
function jq(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.h)return d.yield(Zp(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Qo(a);return d.yield(Jp(a,b),3)}return d.yield(Pp(a,c),0)})}
;function kq(a,b){Kp.call(this,a,b);this.options=b;Qo(a)}
v(kq,Kp);function lq(a,b){var c;return function(){c||(c=new kq(a,b));return c}}
kq.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.qc?fq:eq)(a,b,Object.assign({},c))};
kq.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.qc?jq:gq)(this.name,a)};
function mq(a,b){return lq(a,b)}
;var nq={},oq=mq("ytGcfConfig",{Cb:(nq.coldConfigStore={Jb:1},nq.hotConfigStore={Jb:1},nq),qc:!1,upgrade:function(a,b){b(1)&&(Ap(tp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Ap(tp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function pq(a){return Mp(oq(),a)}
function qq(a,b,c){var d,e,f;return w(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:S()},g.yield(pq(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(vp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function rq(a,b,c,d){var e,f,g;return w(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:S()},h.yield(pq(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(vp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function sq(a){var b,c;return w(function(d){return 1==d.h?d.yield(pq(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(sp(b,["coldConfigStore"],{mode:"readwrite",ga:!0},function(e){return Fp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function tq(a){var b,c;return w(function(d){return 1==d.h?d.yield(pq(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(sp(b,["hotConfigStore"],{mode:"readwrite",ga:!0},function(e){return Fp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function uq(){this.h=0}
function vq(a,b,c){var d,e,f;return w(function(g){if(1==g.h){if(!P("update_log_event_config"))return g.A(0);c&&(a.i=c,y("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;y("yt.gcf.config.hotHashData",a.hotHashData);return(d=Yp())?c?g.A(4):g.yield(tq(d),5):g.A(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return g.yield(qq(c,b,d),0)})}
function wq(a,b,c){var d,e,f,g;return w(function(h){if(1==h.h){if(!P("update_log_event_config"))return h.A(0);a.coldHashData=b;y("yt.gcf.config.coldHashData",a.coldHashData);return(d=Yp())?c?h.A(4):h.yield(sq(d),5):h.A(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(rq(c,b,g,d),0)})}
;function xq(){return"INNERTUBE_API_KEY"in Vm&&"INNERTUBE_API_VERSION"in Vm}
function yq(){return{innertubeApiKey:O("INNERTUBE_API_KEY"),innertubeApiVersion:O("INNERTUBE_API_VERSION"),Fc:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),qd:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),te:O("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION"),sd:O("INNERTUBE_CONTEXT_HL"),rd:O("INNERTUBE_CONTEXT_GL"),ue:O("INNERTUBE_HOST_OVERRIDE")||"",xe:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),we:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA")}}
function zq(a){var b={client:{hl:a.sd,gl:a.rd,clientName:a.qd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Fc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=rn();""!==c&&(b.client.experimentsToken=c);c=sn();0<c.length&&(b.request={internalExperimentFlags:c});Aq(a,void 0,b);Bq(void 0,b);Cq(void 0,b);Dq(a,void 0,b);Eq(void 0,b);P("start_sending_config_hash")&&Fq(void 0,b);O("DELEGATED_SESSION_ID")&&
!P("pageid_as_header_web")&&(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(jn(O("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Gq(a){var b=new ol,c=new dl;G(c,1,a.sd);G(c,2,a.rd);G(c,16,a.te);G(c,17,a.innertubeContextClientVersion);if(a.Fc){var d=a.Fc,e=new $k;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);H(c,$k,62,e)}(d=x.devicePixelRatio)&&1!=d&&G(c,65,de(d));d=rn();""!==d&&G(c,54,d);d=sn();if(0<d.length){e=new hl;for(var f=0;f<d.length;f++){var g=new fl;G(g,1,d[f].key);oe(g,2,gl,d[f].value);ve(e,15,
fl,g)}H(b,hl,5,e)}Aq(a,c);Bq(b);Cq(c);Dq(a,c);Eq(c);P("start_sending_config_hash")&&Fq(c);O("DELEGATED_SESSION_ID")&&!P("pageid_as_header_web")&&(a=new ml,G(a,3,O("DELEGATED_SESSION_ID")));a=t(Object.entries(jn(O("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);b.j(c);return b}
function Aq(a,b,c){a=a.qd;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=qe(b,al,96)||new al;var d=bo();d=Object.keys(wl).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);H(b,al,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=bo())}
function Bq(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=qe(a,jl,7)||new jl,G(b,4,c),H(a,jl,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Cq(a,b){var c;if(P("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Dq(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=qe(b,$k,62))?d:new $k;G(c,6,a.appInstallData);H(b,$k,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Eq(a,b){var c=to();c&&(a?G(a,61,po[c]):b&&(b.client.connectionType=c));P("web_log_effective_connection_type")&&(c=uo())&&(a?G(a,94,qo[c]):b&&(b.client.effectiveConnectionType=c))}
function Hq(a,b,c){c=void 0===c?{}:c;var d={};O("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":O("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||O("AUTHORIZATION");b||(a?b="Bearer "+B("gapi.auth.getToken")().jg:(a=Zn(Yn()),P("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function Fq(a,b){uq.h||(uq.h=new uq);var c=uq.h;var d=S()-c.h;if(0!==c.h&&d<qn("send_config_hash_timer"))c=void 0;else{d=B("yt.gcf.config.coldConfigData");var e=B("yt.gcf.config.hotHashData"),f=B("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=S());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=qe(a,$k,62))?g:new $k;G(b,1,c);G(b,3,d);G(b,5,e);H(a,$k,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function Iq(a,b){this.version=a;this.args=b}
Iq.prototype.serialize=function(){return{version:this.version,args:this.args}};function Jq(a,b){this.topic=a;this.h=b}
Jq.prototype.toString=function(){return this.topic};var Kq=B("ytPubsub2Pubsub2Instance")||new lj;lj.prototype.subscribe=lj.prototype.subscribe;lj.prototype.unsubscribeByKey=lj.prototype.Hb;lj.prototype.publish=lj.prototype.eb;lj.prototype.clear=lj.prototype.clear;y("ytPubsub2Pubsub2Instance",Kq);var Lq=B("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",Lq);var Mq=B("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",Mq);var Nq=B("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",Nq);
y("ytPubsub2Pubsub2SkipSubKey",null);function Oq(a,b){var c=Pq();c&&c.publish.call(c,a.toString(),a,b)}
function Qq(a){var b=Rq,c=Pq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Lq[d])try{if(f&&b instanceof Jq&&b!=e)try{var h=b.h,l=f;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ya){var m=new h;h.Ya=m.version}var p=h.Ya}catch(D){}if(!p||l.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{p=Reflect;var r=p.construct;
var z=l.args,u=z.length;if(0<u){var A=Array(u);for(l=0;l<u;l++)A[l]=z[l];var C=A}else C=[];f=r.call(p,h,C)}catch(D){throw D.message="yt.pubsub2.Data.deserialize(): "+D.message,D;}}catch(D){throw D.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+D.message,D;}a.call(window,f)}catch(D){an(D)}},Nq[b.toString()]?B("yt.scheduler.instance")?Pi.ia(g):wn(g,0):g())});
Lq[d]=!0;Mq[b.toString()]||(Mq[b.toString()]=[]);Mq[b.toString()].push(d);return d}
function Sq(){var a=Tq,b=Qq(function(c){a.apply(void 0,arguments);Uq(b)});
return b}
function Uq(a){var b=Pq();b&&("number"===typeof a&&(a=[a]),hb(a,function(c){b.unsubscribeByKey(c);delete Lq[c]}))}
function Pq(){return B("ytPubsub2Pubsub2Instance")}
;function Vq(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Oq("meta_logging_csi_event",{timerName:a,Ig:b})}
;var Wq=qn("max_body_size_to_compress",5E5),Xq=qn("min_body_size_to_compress",500),Yq=!0,Zq=0,$q=0,ar=qn("compression_performance_threshold",250),br=qn("slow_compressions_before_abandon_count",10);
function cr(a,b,c,d){var e=S(),f={startTime:e,ticks:{},infos:{}};if(Yq)try{var g=dr(b);if(!(g>Wq||g<Xq)){var h=Pk(Ki(b)),l=S();f.ticks.gelc=l;$q++;P("disable_compression_due_to_performance_degredation")&&l-e>=ar&&(Zq++,P("abandon_compression_after_N_slow_zips")?$q===qn("compression_disable_point")&&Zq>br&&(Yq=!1):Yq=!1);er(f);if(fr(h,b)||!P("only_compress_gel_if_smaller"))c.headers||(c.headers={}),c.headers["Content-Encoding"]="gzip",c.postBody=h,c.postParams=void 0}d(a,c)}catch(m){bn(m),d(a,c)}else d(a,
c)}
function gr(a){var b=void 0===b?!1:b;var c={startTime:S(),ticks:{},infos:{}};if(!a.body)return a;try{var d="string"===typeof a.body?a.body:JSON.stringify(a.body),e=dr(d);if(e>Wq||e<Xq)return a;var f=Pk(Ki(d)),g=S();c.ticks.gelc=g;if(!fr(f,d)&&P("only_compress_gel_if_smaller"))return a;b&&er(c);a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(h){return bn(h),a}}
function fr(a,b){if(!window.Blob)return!0;var c=a.length<dr(b);c||bn(new vo("Compressed req body is larger than uncompressed","original size: "+dr(b),"compressed size: "+a.length));return c}
function dr(a){return(new Blob(a.split(""))).size}
function er(a){P("gel_compression_csi_killswitch")||!P("log_gel_compression_latency")&&!P("log_gel_compression_latency_lr")||Vq("gel_compression",a,{sampleRate:.1})}
;function hr(a){a=Object.assign({},a);delete a.Authorization;var b=bh();if(b){var c=new Vi;c.update(O("INNERTUBE_API_KEY"));c.update(b);a.hash=yd(c.digest(),3)}return a}
;var ir;function jr(){ir||(ir=new Eo("yt.innertube"));return ir}
function kr(a,b,c,d){if(d)return null;d=jr().get("nextId",!0)||1;var e=jr().get("requests",!0)||{};e[d]={method:a,request:b,authState:hr(c),requestTime:Math.round(S())};jr().set("nextId",d+1,86400,!0);jr().set("requests",e,86400,!0);return d}
function lr(a){var b=jr().get("requests",!0)||{};delete b[a];jr().set("requests",b,86400,!0)}
function mr(a){var b=jr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(S())-d.requestTime)){var e=d.authState,f=hr(Hq(!1));ub(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(S())),nr(a,d.method,e,{}));delete b[c]}}jr().set("requests",b,86400,!0)}}
;function or(a){this.Zb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.wb=function(){};
this.now=Date.now;this.Lb=!1;var b;this.Ld=null!=(b=a.Ld)?b:100;var c;this.Fd=null!=(c=a.Fd)?c:1;var d;this.Dd=null!=(d=a.Dd)?d:2592E6;var e;this.Bd=null!=(e=a.Bd)?e:12E4;var f;this.Ed=null!=(f=a.Ed)?f:5E3;var g;this.R=null!=(g=a.R)?g:void 0;this.fc=!!a.fc;var h;this.dc=null!=(h=a.dc)?h:.1;var l;this.mc=null!=(l=a.mc)?l:10;a.handleError&&(this.handleError=a.handleError);a.wb&&(this.wb=a.wb);a.Lb&&(this.Lb=a.Lb);a.Zb&&(this.Zb=a.Zb);this.S=a.S;this.Ca=a.Ca;this.aa=a.aa;this.Y=a.Y;this.Ra=a.Ra;this.Nc=
a.Nc;this.Mc=a.Mc;pr(this)&&(!this.S||this.S("networkless_logging"))&&qr(this)}
function qr(a){pr(a)&&!a.Lb&&(a.h=!0,a.fc&&Math.random()<=a.dc&&a.aa.ce(a.R),rr(a),a.Y.ta()&&a.Rb(),a.Y.listen(a.Nc,a.Rb.bind(a)),a.Y.listen(a.Mc,a.cd.bind(a)))}
k=or.prototype;k.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(pr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa.set(d,this.R).then(function(e){d.id=e;c.Y.ta()&&sr(c,d)}).catch(function(e){sr(c,d);
tr(c,e)})}else this.Ra(a,b)};
k.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(pr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.S&&this.S("nwl_skip_retry")&&(e.skipRetry=c);if(this.Y.ta()||this.S&&this.S("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(l){if(1==l.h)return l.yield(d.aa.set(e,d.R).catch(function(m){tr(d,m)}),2);
f(g,h);l.h=0})}}this.Ra(a,b,e.skipRetry)}else this.aa.set(e,this.R).catch(function(g){d.Ra(a,b,e.skipRetry);
tr(d,g)})}else this.Ra(a,b,this.S&&this.S("nwl_skip_retry")&&c)};
k.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(pr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.aa.vb(d.id,c.R):e=!0;c.Y.ib&&c.S&&c.S("vss_network_hint")&&c.Y.ib(!0);f(g,h)};
this.Ra(d.url,d.options);this.aa.set(d,this.R).then(function(g){d.id=g;e&&c.aa.vb(d.id,c.R)}).catch(function(g){tr(c,g)})}else this.Ra(a,b)};
k.Rb=function(){var a=this;if(!pr(this))throw ep("throttleSend");this.i||(this.i=this.Ca.ia(function(){var b;return w(function(c){if(1==c.h)return c.yield(a.aa.nd("NEW",a.R),2);if(3!=c.h)return b=c.i,b?c.yield(sr(a,b),3):(a.cd(),c.return());a.i&&(a.i=0,a.Rb());c.h=0})},this.Ld))};
k.cd=function(){this.Ca.Ga(this.i);this.i=0};
function sr(a,b){var c,d;return w(function(e){switch(e.h){case 1:if(!pr(a))throw c=ep("immediateSend"),c;if(void 0===b.id){e.A(2);break}return e.yield(a.aa.ze(b.id,a.R),3);case 3:(d=e.i)||a.wb(Error("The request cannot be found in the database."));case 2:if(ur(a,b,a.Dd)){e.A(4);break}a.wb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.A(5);break}return e.yield(a.aa.vb(b.id,a.R),5);case 5:return e.return();case 4:b.skipRetry||(b=vr(a,b));if(!b){e.A(0);break}if(!b.skipRetry||
void 0===b.id){e.A(8);break}return e.yield(a.aa.vb(b.id,a.R),8);case 8:a.Ra(b.url,b.options,!!b.skipRetry),e.h=0}})}
function vr(a,b){if(!pr(a))throw ep("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,m;return w(function(p){switch(p.h){case 1:g=wr(f);(h=xr(f))&&a.S&&a.S("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.S&&a.S("nwl_consider_error_code")&&g||a.S&&!a.S("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.mc)){p.A(2);break}if(!a.Y.pc){p.A(3);break}return p.yield(a.Y.pc(),3);case 3:if(a.Y.ta()){p.A(2);break}c(e,f);if(!a.S||!a.S("nwl_consider_error_code")||void 0===(null==(l=b)?void 0:l.id)){p.A(6);
break}return p.yield(a.aa.Qc(b.id,a.R,!1),6);case 6:return p.return();case 2:if(a.S&&a.S("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.mc)return p.return();a.potentialEsfErrorCounter++;if(void 0===(null==(m=b)?void 0:m.id)){p.A(8);break}return b.sendCount<a.Fd?p.yield(a.aa.Qc(b.id,a.R,!0,h?!1:void 0),12):p.yield(a.aa.vb(b.id,a.R),8);case 12:a.Ca.ia(function(){a.Y.ta()&&a.Rb()},a.Ed);
case 8:c(e,f),p.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.A(2):h.yield(a.aa.vb(b.id,a.R),2);a.Y.ib&&a.S&&a.S("vss_network_hint")&&a.Y.ib(!0);d(e,f);h.h=0})};
return b}
function ur(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function rr(a){if(!pr(a))throw ep("retryQueuedRequests");a.aa.nd("QUEUED",a.R).then(function(b){b&&!ur(a,b,a.Bd)?a.Ca.ia(function(){return w(function(c){if(1==c.h)return void 0===b.id?c.A(2):c.yield(a.aa.Qc(b.id,a.R),2);rr(a);c.h=0})}):a.Y.ta()&&a.Rb()})}
function tr(a,b){a.Rd&&!a.Y.ta()?a.Rd(b):a.handleError(b)}
function pr(a){return!!a.R||a.Zb}
function wr(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function xr(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var yr;
function zr(){if(yr)return yr();var a={};yr=mq("LogsDatabaseV2",{Cb:(a.LogsRequestsStore={Jb:2},a),qc:!1,upgrade:function(b,c,d){c(2)&&tp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),Ap(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return yr()}
;function Ar(a){return Mp(zr(),a)}
function Br(a,b){var c,d,e,f;return w(function(g){if(1==g.h)return c={startTime:S(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Ar(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:O("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(vp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=S();Cr(c);return g.return(f)})}
function Dr(a,b){var c,d,e,f,g,h,l;return w(function(m){if(1==m.h)return c={startTime:S(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(Ar(b),2);if(3!=m.h)return d=m.i,e=O("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,S()],h=IDBKeyRange.bound(f,g),l=void 0,m.yield(sp(d,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(p){return Fp(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(r){r.getValue()&&(l=r.getValue(),"NEW"===
a&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=S();Cr(c);return m.return(l)})}
function Er(a,b){var c;return w(function(d){if(1==d.h)return d.yield(Ar(b),2);c=d.i;return d.return(sp(c,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",op(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Fr(a,b,c,d){c=void 0===c?!0:c;var e;return w(function(f){if(1==f.h)return f.yield(Ar(b),2);e=f.i;return f.return(sp(e,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),void 0!==d&&(l.options.compress=d),op(h.h.put(l,void 0)).then(function(){return l})):ip.resolve(void 0)})}))})}
function Gr(a,b){var c;return w(function(d){if(1==d.h)return d.yield(Ar(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Hr(a){var b,c;return w(function(d){if(1==d.h)return d.yield(Ar(a),2);b=d.i;c=S()-2592E6;return d.yield(sp(b,["LogsRequestsStore"],{mode:"readwrite",ga:!0},function(e){return Cp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ir(){w(function(a){return a.yield(iq(),0)})}
function Cr(a){P("nwl_csi_killswitch")||Vq("networkless_performance",a,{sampleRate:1})}
;var Jr={},Kr=mq("ServiceWorkerLogsDatabase",{Cb:(Jr.SWHealthLog={Jb:1},Jr),qc:!0,upgrade:function(a,b){b(1)&&Ap(tp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Lr(a){return Mp(Kr(),a)}
function Mr(a){var b,c;w(function(d){if(1==d.h)return d.yield(Lr(a),2);b=d.i;c=S()-2592E6;return d.yield(sp(b,["SWHealthLog"],{mode:"readwrite",ga:!0},function(e){return Cp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Nr(a){var b;return w(function(c){if(1==c.h)return c.yield(Lr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Vr={},Zr=0;function ts(a){var b=new Image,c=""+Zr++;Vr[c]=b;b.onload=b.onerror=function(){delete Vr[c]};
b.src=a}
;function us(){this.h=new Map;this.i=!1}
function vs(){if(!us.h){var a=B("yt.networkRequestMonitor.instance")||new us;y("yt.networkRequestMonitor.instance",a);us.h=a}return us.h}
us.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
us.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
us.prototype.removeParams=function(a){return a.split("?")[0]};
us.prototype.removeParams=us.prototype.removeParams;us.prototype.isEndpointCFR=us.prototype.isEndpointCFR;us.prototype.requestComplete=us.prototype.requestComplete;us.getInstance=vs;var ws;function xs(){ws||(ws=new Eo("yt.offline"));return ws}
function ys(a){if(P("offline_error_handling")){var b=xs().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);xs().set("errors",b,2592E3,!0)}}
;function zs(){Bf.call(this);var a=this;this.j=!1;this.i=Oi();this.i.listen("networkstatus-online",function(){if(a.j&&P("offline_error_handling")){var b=xs().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new vo(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;an(d)}xs().set("errors",{},2592E3,!0)}}})}
v(zs,Bf);function As(){if(!zs.h){var a=B("yt.networkStatusManager.instance")||new zs;y("yt.networkStatusManager.instance",a);zs.h=a}return zs.h}
k=zs.prototype;k.ta=function(){return this.i.ta()};
k.ib=function(a){this.i.i=a};
k.qe=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
k.he=function(){this.j=!0};
k.listen=function(a,b){return this.i.listen(a,b)};
k.pc=function(a){a=Mi(this.i,a);a.then(function(b){P("use_cfr_monitor")&&vs().requestComplete("generate_204",b)});
return a};
zs.prototype.sendNetworkCheckRequest=zs.prototype.pc;zs.prototype.listen=zs.prototype.listen;zs.prototype.enableErrorFlushing=zs.prototype.he;zs.prototype.getWindowStatus=zs.prototype.qe;zs.prototype.networkStatusHint=zs.prototype.ib;zs.prototype.isNetworkAvailable=zs.prototype.ta;zs.getInstance=As;function Bs(a){a=void 0===a?{}:a;Bf.call(this);var b=this;this.i=this.s=0;this.j=As();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.oc?(this.oc=a.oc,c("networkstatus-online",function(){Cs(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Cs(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Cf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Cf(b,"publicytnetworkstatus-offline")})))}
v(Bs,Bf);Bs.prototype.ta=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Bs.prototype.ib=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Bs.prototype.pc=function(a){var b=this,c;return w(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return P("skip_network_check_if_cfr")&&vs().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.ib((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Cs(a,b){a.oc?a.i?(Pi.Ga(a.s),a.s=Pi.ia(function(){a.m!==b&&(Cf(a,b),a.m=b,a.i=S())},a.oc-(S()-a.i))):(Cf(a,b),a.m=b,a.i=S()):Cf(a,b)}
;var Ds;function Es(){var a=or.call;Ds||(Ds=new Bs({ug:!0,og:!0}));a.call(or,this,{aa:{ce:Hr,vb:Gr,nd:Dr,ze:Er,Qc:Fr,set:Br},Y:Ds,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;bn(new vo(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else an(b)},
wb:bn,Ra:Fs,now:S,Rd:ys,Ca:Do(),Nc:"publicytnetworkstatus-online",Mc:"publicytnetworkstatus-offline",fc:!0,dc:.1,mc:qn("potential_esf_error_limit",10),S:P,Lb:!(wo()&&Gs())});this.j=new ki;P("networkless_immediately_drop_all_requests")&&Ir();jq("LogsDatabaseV2")}
v(Es,or);function Hs(){var a=B("yt.networklessRequestController.instance");a||(a=new Es,y("yt.networklessRequestController.instance",a),P("networkless_logging")&&Zp().then(function(b){a.R=b;qr(a);a.j.resolve();a.fc&&Math.random()<=a.dc&&a.R&&Mr(a.R);P("networkless_immediately_drop_sw_health_store")&&Is(a)}));
return a}
Es.prototype.writeThenSend=function(a,b){b||(b={});wo()||(this.h=!1);or.prototype.writeThenSend.call(this,a,b)};
Es.prototype.sendThenWrite=function(a,b,c){b||(b={});wo()||(this.h=!1);or.prototype.sendThenWrite.call(this,a,b,c)};
Es.prototype.sendAndWrite=function(a,b){b||(b={});wo()||(this.h=!1);or.prototype.sendAndWrite.call(this,a,b)};
Es.prototype.awaitInitialization=function(){return this.j.promise};
function Is(a){var b;w(function(c){if(!a.R)throw b=ep("clearSWHealthLogsDb"),b;return c.return(Nr(a.R).catch(function(d){a.handleError(d)}))})}
function Fs(a,b,c){P("use_cfr_monitor")&&Js(a,b);if(P("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(S())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(S())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)Fn(a,void 0,"POST",e);else if(O("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Fn(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new db({url:a});if(g.j&&g.i||
g.l){var h=zc(Ac(5,a)),l;if(!(l=!h||!h.endsWith("/aclk"))){var m=a.search(Lc),p=Kc(a,0,"ri",m);if(0>p)var r=null;else{var z=a.indexOf("&",p);if(0>z||z>m)z=m;r=decodeURIComponent(a.slice(p+3,-1!==z?z:0).replace(/\+/g," "))}l="1"!==r}var u=!l;break b}}catch(C){}u=!1}if(u){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var A=!0;break b}}catch(C){}A=!1}c=A?!0:!1}else c=!1;c||ts(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),
cr(a,b.postBody,b,Cn)):cr(a,JSON.stringify(b.postParams),b,Kn):Cn(a,b)}
function Js(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){vs().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){vs().requestComplete(a,!0);d(e,f)}}
function Gs(){return"www.youtube-nocookie.com"!==Bc(document.location.toString())}
;var Ks=!1,Ls=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Ks};y("ytNetworklessLoggingInitializationOptions",Ls);function Ms(){var a;w(function(b){if(1==b.h)return b.yield(Zp(),2);a=b.i;if(!a||!wo()&&!P("nwl_init_require_datasync_id_killswitch")||!Gs())return b.A(0);Ks=!0;Ls.isNwlInitialized=Ks;return b.yield(Hs().awaitInitialization(),0)})}
;function Ns(a){var b=this;this.config_=null;a?this.config_=a:xq()&&(this.config_=yq());zo(function(){mr(b)},5E3)}
Ns.prototype.isReady=function(){!this.config_&&xq()&&(this.config_=yq());return!!this.config_};
function nr(a,b,c,d){function e(A){A=void 0===A?!1:A;var C;if(d.retry&&"www.youtube-nocookie.com"!=h&&(A||P("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(C=kr(b,c,m,l)),C)){var D=g.onSuccess,N=g.onFetchSuccess;g.onSuccess=function(T,ea){lr(C);D(T,ea)};
c.onFetchSuccess=function(T,ea){lr(C);N(T,ea)}}try{if(A&&d.retry&&!d.wd.bypassNetworkless)g.method="POST",d.wd.writeThenSend?Hs().writeThenSend(u,g):Hs().sendAndWrite(u,g);
else if(d.compress)if(g.postBody){var R=g.postBody;"string"!==typeof R&&(R=JSON.stringify(g.postBody));cr(u,R,g,Cn)}else cr(u,JSON.stringify(g.postParams),g,Kn);else P("web_all_payloads_via_jspb")?Cn(u,g):Kn(u,g)}catch(T){if("InvalidAccessError"==T.name)C&&(lr(C),C=0),bn(Error("An extension is blocking network request."));else throw T;}C&&zo(function(){mr(a)},5E3)}
!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&bn(new vo("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new vo("innertube xhrclient not ready",b,c,d);an(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(A,C){if(d.onSuccess)d.onSuccess(C)},
onFetchSuccess:function(A){if(d.onSuccess)d.onSuccess(A)},
onError:function(A,C){if(d.onError)d.onError(C)},
onFetchError:function(A){if(d.onError)d.onError(A)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ue)&&(h=f);var l=a.config_.xe||!1,m=Hq(l,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var p="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,r={alt:"json"},z=a.config_.we&&f;z=z&&f.startsWith("Bearer");z||(r.key=a.config_.innertubeApiKey);var u=ln(""+h+p,r||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
Ls.isNwlInitialized:Ks)?Xp().then(function(A){e(A)}):e(!1)}
;var Os=0,Ps=hd?"webkit":gd?"moz":ed?"ms":dd?"o":"";y("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Os});var Qs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Rs(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Qs||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Ss(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Rs.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Rs.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Rs.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var qb=x.ytEventsEventsListeners||{};y("ytEventsEventsListeners",qb);var Ts=x.ytEventsEventsCounter||{count:0};y("ytEventsEventsCounter",Ts);
function Us(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return pb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ta(e[4])&&Ta(d)&&ub(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Vs=fb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ws(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Us(a,b,c,d);if(e)return e;e=++Ts.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Rs(h);if(!Lf(h.relatedTarget,function(l){return l==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Rs(h);
h.currentTarget=a;return c.call(a,h)};
g=$m(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Vs()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);qb[e]=[a,b,c,g,d];return e}
function Xs(a){a&&("string"==typeof a&&(a=[a]),hb(a,function(b){if(b in qb){var c=qb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Vs()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete qb[b]}}))}
;function Ys(a){this.I=a;this.i=null;this.m=0;this.v=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.T=Ws(window,"mousemove",Za(this.X,this));a=Za(this.P,this);"function"===typeof a&&(a=$m(a));this.ba=window.setInterval(a,25)}
ab(Ys,J);Ys.prototype.X=function(a){void 0===a.h&&Ss(a);var b=a.h;void 0===a.i&&Ss(a);this.i=new Hf(b,a.i)};
Ys.prototype.P=function(){if(this.i){var a=S();if(0!=this.m){var b=this.v,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.I();this.s=d}this.m=a;this.v=this.i;this.l=(this.l+1)%4}};
Ys.prototype.M=function(){window.clearInterval(this.ba);Xs(this.T)};var Zs=new Set([174,173,175]),$s={};
function at(a){var b=void 0===a?{}:a;a=void 0===b.He?!1:b.He;b=void 0===b.je?!0:b.je;if(null==B("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&bt();Ws(document,"keydown",bt);Ws(document,"keyup",bt);Ws(document,"mousedown",bt);Ws(document,"mouseup",bt);a?Ws(window,"touchmove",function(){ct("touchmove",200)},{passive:!0}):(Ws(window,"resize",function(){ct("resize",200)}),b&&Ws(window,"scroll",function(){ct("scroll",
200)}));
new Ys(function(){ct("mouse",100)});
Ws(document,"touchstart",bt,{passive:!0});Ws(document,"touchend",bt,{passive:!0})}}
function ct(a,b){$s[a]||($s[a]=!0,Pi.ia(function(){bt();$s[a]=!1},b))}
function bt(a){var b;if(null!=(b=B("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!Zs.has(null==a?void 0:a.keyCode))null==B("_lact",window)&&at(),a=Date.now(),y("_lact",a,window),-1==B("_fact",window)&&y("_fact",a,window),(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function dt(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var et=x.ytPubsubPubsubInstance||new lj,ft=x.ytPubsubPubsubSubscribedKeys||{},gt=x.ytPubsubPubsubTopicToKeys||{},ht=x.ytPubsubPubsubIsSynchronous||{};function jt(a,b){var c=kt();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){ft[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{ht[a]?f():wn(f,0)}catch(g){an(g)}},void 0);
ft[d]=!0;gt[a]||(gt[a]=[]);gt[a].push(d);return d}return 0}
function lt(a){var b=kt();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),hb(a,function(c){b.unsubscribeByKey(c);delete ft[c]}))}
function mt(a,b){var c=kt();c&&c.publish.apply(c,arguments)}
function nt(a){var b=kt();if(b)if(b.clear(a),a)ot(a);else for(var c in gt)ot(c)}
function kt(){return x.ytPubsubPubsubInstance}
function ot(a){gt[a]&&(a=gt[a],hb(a,function(b){ft[b]&&delete ft[b]}),a.length=0)}
lj.prototype.subscribe=lj.prototype.subscribe;lj.prototype.unsubscribeByKey=lj.prototype.Hb;lj.prototype.publish=lj.prototype.eb;lj.prototype.clear=lj.prototype.clear;y("ytPubsubPubsubInstance",et);y("ytPubsubPubsubTopicToKeys",gt);y("ytPubsubPubsubIsSynchronous",ht);y("ytPubsubPubsubSubscribedKeys",ft);var pt=Symbol("injectionDeps");function qt(a){this.name=a}
qt.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function rt(a){this.key=a}
function st(){this.h=new Map;this.i=new Map}
st.prototype.resolve=function(a){return a instanceof rt?tt(this,a.key,[],!0):tt(this,a,[])};
function tt(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Od)var e=d.Od;else if(d.gf)e=d[pt]?ut(a,d[pt],c):[],e=d.gf.apply(d,ia(e));else if(d.Nd){e=d.Nd;var f=e[pt]?ut(a,e[pt],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Gg||a.i.set(b,e);return e}
function ut(a,b,c){return b?b.map(function(d){return d instanceof rt?tt(a,d.key,c,!0):tt(a,d,c)}):[]}
;var vt;function wt(){vt||(vt=new st);return vt}
;function xt(){this.store={};this.h={}}
xt.prototype.storePayload=function(a,b){a=zt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
xt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=At(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ia(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ia(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ia(this.smartExtractMatchingEntries(a))));return c};
xt.prototype.extractMatchingEntries=function(a){a=At(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]]);return b};
xt.prototype.getSequenceCount=function(a){a=At(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function At(a,b){var c=zt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&zt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Bt(b.auth,g[0])){var h=b.isJspb;Bt(void 0===h?"undefined":h?"true":"false",g[1])&&Bt(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),Bt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Bt(a,b){return void 0===a||"undefined"===a?!0:a===b}
xt.prototype.getSequenceCount=xt.prototype.getSequenceCount;xt.prototype.extractMatchingEntries=xt.prototype.extractMatchingEntries;xt.prototype.smartExtractMatchingEntries=xt.prototype.smartExtractMatchingEntries;xt.prototype.storePayload=xt.prototype.storePayload;function zt(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function Ct(a,b){if(a)return a[b.name]}
;var Dt=qn("initial_gel_batch_timeout",2E3),Et=qn("gel_queue_timeout_max_ms",6E4),Ft=Math.pow(2,16)-1,Gt=void 0;function Ht(){this.j=this.h=this.i=0}
var It=new Ht,Jt=new Ht,Kt,Lt=!0,Mt=x.ytLoggingTransportTokensToCttTargetIds_||{};y("ytLoggingTransportTokensToCttTargetIds_",Mt);var Nt=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};y("ytLoggingTransportTokensToJspbCttTargetIds_",Nt);var Ot={};function Pt(){var a=B("yt.logging.ims");a||(a=new xt,y("yt.logging.ims",a));return a}
function Qt(a,b){if("log_event"===a.endpoint){Rt(a);var c=St(a);Ot[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Pt().storePayload(d,a.payload);Tt(b,c,!1,d)}}
function Ut(a,b){if("log_event"===a.endpoint){Rt(void 0,a);var c=St(a,!0);Ot[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Pt().storePayload(d,a.payload.toJSON());Tt(b,c,!0,d)}}
function Tt(a,b,c,d){c=void 0===c?!1:c;a&&(Gt=new a);a=qn("tvhtml5_logging_max_batch_ads_fork")||qn("web_logging_max_batch")||100;var e=S(),f=c?Jt.j:It.j,g=0;d&&(g=Pt().getSequenceCount(d));g>=a?Kt||(Kt=Vt(function(){Wt({writeThenSend:!0},P("flush_only_full_queue")?b:void 0,c);Kt=void 0},0)):10<=e-f&&(Xt(c),c?Jt.j=e:It.j=e)}
function Yt(a,b){if("log_event"===a.endpoint){Rt(a);var c=St(a),d=new Map;d.set(c,[a.payload]);b&&(Gt=new b);return new Xf(function(e,f){Gt&&Gt.isReady()?Zt(d,Gt,e,f,{bypassNetworkless:!0},!0):e()})}}
function $t(a,b){if("log_event"===a.endpoint){Rt(void 0,a);var c=St(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(Gt=new b);return new Xf(function(e){Gt&&Gt.isReady()?au(d,Gt,e,{bypassNetworkless:!0},!0):e()})}}
function St(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Fm;c.videoId?d.setVideoId(c.videoId):c.playlistId&&oe(d,2,Gm,c.playlistId);Nt[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Mt[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Wt(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Xf(function(d,e){c?(bu(Jt.i),bu(Jt.h),Jt.h=0):(bu(It.i),bu(It.h),It.h=0);if(Gt&&Gt.isReady()){var f=a,g=c,h=Gt;f=void 0===f?{}:f;g=void 0===g?!1:g;var l=new Map,m=new Map;if(void 0!==b)g?(e=Pt().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,e),au(l,h,d,f)):(l=Pt().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),m.set(b,l),Zt(m,h,d,e,f));else if(g){e=t(Object.keys(Ot));for(g=e.next();!g.done;g=e.next())m=g.value,g=Pt().extractMatchingEntries({isJspb:!0,
cttAuthInfo:m}),0<g.length&&l.set(m,g),delete Ot[m];au(l,h,d,f)}else{l=t(Object.keys(Ot));for(g=l.next();!g.done;g=l.next()){g=g.value;var p=Pt().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<p.length&&m.set(g,p);delete Ot[g]}Zt(m,h,d,e,f)}}else Xt(c),d()})}
function Xt(a){a=void 0===a?!1:a;if(P("web_gel_timeout_cap")&&(!a&&!It.h||a&&!Jt.h)){var b=Vt(function(){Wt({writeThenSend:!0},void 0,a)},Et);
a?Jt.h=b:It.h=b}bu(a?Jt.i:It.i);b=O("LOGGING_BATCH_TIMEOUT",qn("web_gel_debounce_ms",1E4));P("shorten_initial_gel_batch_timeout")&&Lt&&(b=Dt);b=Vt(function(){Wt({writeThenSend:!0},void 0,a)},b);
a?Jt.i=b:It.i=b}
function Zt(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(S()),h=a.size,l={};a=t(a);for(var m=a.next();!m.done;l={Sb:l.Sb,ab:l.ab,Fb:l.Fb,Ub:l.Ub,Tb:l.Tb},m=a.next()){var p=t(m.value);m=p.next().value;p=p.next().value;l.ab=wb({context:zq(b.config_||yq())});if(!Ra(p)&&!P("throw_err_when_logevent_malformed_killswitch")){d();break}l.ab.events=p;(p=Mt[m])&&cu(l.ab,m,p);delete Mt[m];l.Fb="visitorOnlyApprovedKey"===m;du(l.ab,g,l.Fb);eu(e);l.Ub=function(r){P("update_log_event_config")&&Pi.ia(function(){return w(function(z){return z.yield(fu(r),
0)})});
h--;h||c()};
l.Sb=0;l.Tb=function(r){return function(){r.Sb++;if(e.bypassNetworkless&&1===r.Sb)try{nr(b,"log_event",r.ab,gu({writeThenSend:!0},r.Fb,r.Ub,r.Tb,f)),Lt=!1}catch(z){an(z),d()}h--;h||c()}}(l);
try{nr(b,"log_event",l.ab,gu(e,l.Fb,l.Ub,l.Tb,f)),Lt=!1}catch(r){an(r),d()}}}
function au(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(S()),g=a.size,h=new Map([].concat(ia(a)));h=t(h);for(var l=h.next();!l.done;l=h.next()){var m=t(l.value).next().value,p=a.get(m);l=new Hm;var r=Gq(b.config_||yq());H(l,ol,1,r);p=p?hu(p):[];p=t(p);for(r=p.next();!r.done;r=p.next())ve(l,3,Bm,r.value);(p=Nt[m])&&iu(l,m,p);delete Nt[m];m="visitorOnlyApprovedKey"===m;ju(l,f,m);eu(d);p={startTime:S(),ticks:{},infos:{}};l=l.serialize();p.ticks.geljspc=S();P("log_jspb_serialize_latency")&&Vq("gel_jspb_serialize",
p,{sampleRate:.1});m=gu(d,m,function(z){P("update_log_event_config")&&Pi.ia(function(){return w(function(u){return u.yield(fu(z),0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=l;nr(b,"log_event","",m);Lt=!1}}
function eu(a){P("always_send_and_write")&&(a.writeThenSend=!1)}
function gu(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,wd:a,dangerousLogToVisitorSession:b,kg:!!e,headers:{},postBodyFormat:"",postBody:"",compress:P("compress_gel")||P("compress_gel_lr")};ku()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(S())));return a}
function du(a,b,c){ku()||(a.requestTimeMs=String(b));P("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=O("EVENT_ID"))&&(c=lu(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function ju(a,b,c){ku()||G(a,2,b);if(!c&&(b=O("EVENT_ID"))){c=lu();var d=new Em;G(d,1,b);G(d,2,c);H(a,Em,5,d)}}
function lu(){var a=O("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Ft/2));a++;a>Ft&&(a=1);Wm("BATCH_CLIENT_COUNTER",a);return a}
function cu(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function iu(a,b,c){var d=1===pe(c,Gm)?1:-1;if(ie(c,d))d=1;else if(c.getPlaylistId())d=2;else return;H(a,Fm,4,c);a=qe(a,ol,1)||new ol;c=qe(a,ml,3)||new ml;var e=new ll;G(e,2,b);G(e,1,d);ve(c,12,ll,e);H(a,ml,3,c)}
function hu(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new Bm(a[c]))}catch(d){an(new vo("Transport failed to deserialize "+String(a[c])))}return b}
function Rt(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}y("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function ku(){return P("use_request_time_ms_header")||P("lr_use_request_time_ms_header")}
function Vt(a,b){return P("transport_use_scheduler")?zo(a,b):wn(a,b)}
function bu(a){P("transport_use_scheduler")?Pi.Ga(a):window.clearTimeout(a)}
function fu(a){var b,c,d,e,f,g,h,l,m,p;return w(function(r){return 1==r.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=Ct(d,Tk),g=null==(f=d)?void 0:f.hotHashData,h=Ct(d,Sk),m=null==(l=d)?void 0:l.coldHashData,(p=wt().resolve(new rt(uq)))?g?e?r.yield(vq(p,g,e),2):r.yield(vq(p,g),2):r.A(2):r.return()):m?h?r.yield(wq(p,m,h),0):r.yield(wq(p,m),0):r.A(0)})}
;var mu=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",mu);
function nu(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||S());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;P("enable_unknown_lact_fix_on_html5")&&at();a=dt();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};P("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:ou(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete mu[d.sequenceGroup]);(d.sendIsolatedPayload?Yt:Qt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function pu(a){Wt(void 0,void 0,void 0===a?!1:a)}
function ou(a){mu[a]=a in mu?mu[a]+1:0;return mu[a]}
;var qu=[];function No(a,b,c){c=void 0===c?{}:c;var d=Ns;O("ytLoggingEventsDefaultDisabled",!1)&&Ns===Ns&&(d=null);P("web_all_payloads_via_jspb")?(c.timestamp||(c.timestamp=S()),qu.push({payloadName:a,payload:b,options:c})):nu(a,b,d,c)}
;var ru=x.ytLoggingGelSequenceIdObj_||{};y("ytLoggingGelSequenceIdObj_",ru);
function su(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||S());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=dt();d=new Am;G(d,1,c.timestamp||!isFinite(e)?-1:e);if(P("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;var f=ou(e),g=new zm;G(g,2,f);G(g,1,e);H(d,zm,3,g);c.endOfSequence&&delete ru[c.sequenceGroup]}H(a,Am,33,d);(c.sendIsolatedPayload?$t:Ut)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function tu(a,b){b=void 0===b?{}:b;var c=!1;O("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);su(a,c?null:Ns,b)}
;function uu(a,b,c){var d=new Bm;te(d,nm,72,Cm,a);c?su(d,c,b):tu(d,b)}
function vu(a,b,c){var d=new Bm;te(d,mm,73,Cm,a);c?su(d,c,b):tu(d,b)}
function wu(a,b,c){var d=new Bm;te(d,lm,78,Cm,a);c?su(d,c,b):tu(d,b)}
function xu(a,b,c){var d=new Bm;te(d,om,208,Cm,a);c?su(d,c,b):tu(d,b)}
function yu(a,b,c){var d=new Bm;te(d,gm,156,Cm,a);c?su(d,c,b):tu(d,b)}
function zu(a,b,c){var d=new Bm;te(d,im,215,Cm,a);c?su(d,c,b):tu(d,b)}
;var Au=new Set,Bu=0,Cu=0,Du=0,Eu=[],Fu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Mo(a){Gu(a)}
function Hu(a){Gu(a,"WARNING")}
function Gu(a,b,c,d,e,f,g){f=void 0===f?{}:f;f.name=c||O("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||O("INNERTUBE_CONTEXT_CLIENT_VERSION");var h=f,l=void 0===b?"ERROR":b,m=void 0===g?!1:g;l=void 0===l?"ERROR":l;m=void 0===m?!1:m;if(a){a.hasOwnProperty("level")&&a.level&&(l=a.level);if(P("console_log_js_exceptions")){var p=[];p.push("Name: "+a.name);p.push("Message: "+a.message);a.hasOwnProperty("params")&&p.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&p.push("Error args: "+
JSON.stringify(a.args));p.push("File name: "+a.fileName);p.push("Stacktrace: "+a.stack);var r=p.join("\n");window.console.log(r,a)}if(!(5<=Bu)){var z=Eu,u=Ue(a),A=u.message||"Unknown Error",C=u.name||"UnknownError",D=u.stack||a.i||"Not available";if(D.startsWith(C+": "+A)){var N=D.split("\n");N.shift();D=N.join("\n")}var R=u.lineNumber||"Not available",T=u.fileName||"Not available",ea=D,Z=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var pa=0;pa<a.args.length&&!(Z=Un(a.args[pa],"params."+
pa,h,Z),500<=Z);pa++);else if(a.hasOwnProperty("params")&&a.params){var Sa=a.params;if("object"===typeof a.params)for(var Da in Sa){if(Sa[Da]){var Ea="params."+Da,ya=Wn(Sa[Da]);h[Ea]=ya;Z+=Ea.length+ya.length;if(500<Z)break}}else h.params=Wn(Sa)}if(z.length)for(var oa=0;oa<z.length&&!(Z=Un(z[oa],"params.context."+oa,h,Z),500<=Z);oa++);navigator.vendor&&!h.hasOwnProperty("vendor")&&(h["device.vendor"]=navigator.vendor);var L={message:A,name:C,lineNumber:R,fileName:T,stack:ea,params:h,sampleWeight:1},
qf=Number(a.columnNumber);isNaN(qf)||(L.lineNumber=L.lineNumber+":"+qf);if("IGNORED"===a.level)var Vc=0;else a:{for(var rf=Qn(),la=t(rf.Wa),sf=la.next();!sf.done;sf=la.next()){var Kh=sf.value;if(L.message&&L.message.match(Kh.vg)){Vc=Kh.weight;break a}}for(var Or=t(rf.Sa),xl=Or.next();!xl.done;xl=Or.next()){var Pr=xl.value;if(Pr.callback(L)){Vc=Pr.weight;break a}}Vc=1}L.sampleWeight=Vc;for(var Qr=t(Ln),yl=Qr.next();!yl.done;yl=Qr.next()){var zl=yl.value;if(zl.lc[L.name])for(var Rr=t(zl.lc[L.name]),
Al=Rr.next();!Al.done;Al=Rr.next()){var Sr=Al.value,Lh=L.message.match(Sr.regexp);if(Lh){L.params["params.error.original"]=Lh[0];for(var Bl=Sr.groups,Tr={},Sd=0;Sd<Bl.length;Sd++)Tr[Bl[Sd]]=Lh[Sd+1],L.params["params.error."+Bl[Sd]]=Lh[Sd+1];L.message=zl.Kc(Tr);break}}}L.params||(L.params={});var Ur=Qn();L.params["params.errorServiceSignature"]="msg="+Ur.Wa.length+"&cb="+Ur.Sa.length;L.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(L.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));
Db("sample").constructor!==Bb&&(L.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(L);if(0!==L.sampleWeight&&!Au.has(L.message)){if(m&&P("web_enable_error_204"))Iu(void 0===l?"ERROR":l,L);else{var Wc=l;Wc=void 0===Wc?"ERROR":Wc;if("ERROR"===Wc){Rn.eb("handleError",L);if(P("record_app_crashed_web")&&0===Du&&1===L.sampleWeight)if(Du++,P("errors_via_jspb")){var Ny=new Yl;var Wr=G(Ny,1,1);if(!P("report_client_error_with_app_crash_ks")){var Oy=new Wl,Py=new Vl,
Qy=new Ul,Ry=new Tl;var Sy=G(Ry,1,L.message);var Ty=H(Qy,Tl,3,Sy);var Uy=H(Py,Ul,5,Ty);var Vy=H(Oy,Vl,9,Uy);H(Wr,Wl,4,Vy)}var Xr=new Bm;te(Xr,Yl,20,Cm,Wr);tu(Xr)}else{var Yr={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};P("report_client_error_with_app_crash_ks")||(Yr.systemHealth={crashData:{clientError:{logMessage:{message:L.message}}}});No("appCrashed",Yr)}Cu++}else"WARNING"===Wc&&Rn.eb("handleWarning",L);if(P("kevlar_gel_error_routing"))a:{var tf=Wc;if(P("errors_via_jspb")){if(Ju())var $r=void 0;else{var Td=
new Ql;G(Td,1,L.stack);L.fileName&&G(Td,4,L.fileName);var Ub=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];0!==Ub.length&&(1!==Ub.length||isNaN(Number(Ub[0]))?2!==Ub.length||isNaN(Number(Ub[0]))||isNaN(Number(Ub[1]))||(we(Td,2,Number(Ub[0])),we(Td,3,Number(Ub[1]))):we(Td,2,Number(Ub[0])));var Xc=new Tl;G(Xc,1,L.message);G(Xc,3,L.name);we(Xc,6,L.sampleWeight);"ERROR"===tf?G(Xc,2,2):"WARNING"===tf?G(Xc,2,1):G(Xc,2,0);var Cl=new Rl;G(Cl,1,!0);te(Cl,Ql,3,Sl,Td);var tc=new Ol;G(tc,3,window.location.href);
for(var as=O("FEXP_EXPERIMENTS",[]),Dl=0;Dl<as.length;Dl++){var Wy=as[Dl];be(tc);ne(tc,5,2,!1,!1).push(Wy)}var El=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Xm()&&El)for(var bs=t(Object.keys(El)),Yc=bs.next();!Yc.done;Yc=bs.next()){var cs=Yc.value,Fl=new Nl;G(Fl,1,cs);G(Fl,2,String(El[cs]));ve(tc,4,Nl,Fl)}var Gl=L.params;if(Gl){var ds=t(Object.keys(Gl));for(Yc=ds.next();!Yc.done;Yc=ds.next()){var es=Yc.value,Hl=new Nl;G(Hl,1,"client."+es);G(Hl,2,String(Gl[es]));ve(tc,4,Nl,Hl)}}var gs=O("SERVER_NAME"),
hs=O("SERVER_VERSION");if(gs&&hs){var Il=new Nl;G(Il,1,"server.name");G(Il,2,gs);ve(tc,4,Nl,Il);var Jl=new Nl;G(Jl,1,"server.version");G(Jl,2,hs);ve(tc,4,Nl,Jl)}var Mh=new Ul;H(Mh,Ol,1,tc);H(Mh,Rl,2,Cl);H(Mh,Tl,3,Xc);$r=Mh}var is=$r;if(!is)break a;var js=new Bm;te(js,Ul,163,Cm,is);tu(js)}else{if(Ju())var ks=void 0;else{var uf={stackTrace:L.stack};L.fileName&&(uf.filename=L.fileName);var Vb=L.lineNumber&&L.lineNumber.split?L.lineNumber.split(":"):[];0!==Vb.length&&(1!==Vb.length||isNaN(Number(Vb[0]))?
2!==Vb.length||isNaN(Number(Vb[0]))||isNaN(Number(Vb[1]))||(uf.lineNumber=Number(Vb[0]),uf.columnNumber=Number(Vb[1])):uf.lineNumber=Number(Vb[0]));var Kl={level:"ERROR_LEVEL_UNKNOWN",message:L.message,errorClassName:L.name,sampleWeight:L.sampleWeight};"ERROR"===tf?Kl.level="ERROR_LEVEL_ERROR":"WARNING"===tf&&(Kl.level="ERROR_LEVEL_WARNNING");var Xy={isObfuscated:!0,browserStackInfo:uf},Ud={pageUrl:window.location.href,kvPairs:[]};O("FEXP_EXPERIMENTS")&&(Ud.experimentIds=O("FEXP_EXPERIMENTS"));var Ll=
O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Xm()&&Ll)for(var ls=t(Object.keys(Ll)),Zc=ls.next();!Zc.done;Zc=ls.next()){var ms=Zc.value;Ud.kvPairs.push({key:ms,value:String(Ll[ms])})}var Ml=L.params;if(Ml){var ns=t(Object.keys(Ml));for(Zc=ns.next();!Zc.done;Zc=ns.next()){var ps=Zc.value;Ud.kvPairs.push({key:"client."+ps,value:String(Ml[ps])})}}var qs=O("SERVER_NAME"),rs=O("SERVER_VERSION");qs&&rs&&(Ud.kvPairs.push({key:"server.name",value:qs}),Ud.kvPairs.push({key:"server.version",value:rs}));
ks={errorMetadata:Ud,stackTrace:Xy,logMessage:Kl}}var ss=ks;if(!ss)break a;No("clientError",ss)}if("ERROR"===tf||P("errors_flush_gel_always_killswitch"))b:{if(P("web_fp_via_jspb")&&(pu(!0),!P("web_fp_via_jspb_and_json")))break b;pu()}}P("suppress_error_204_logging")||Iu(Wc,L)}try{Au.add(L.message)}catch(TA){}Bu++}}}}
function Ju(){for(var a=t(Fu),b=a.next();!b.done;b=a.next())if(To(b.value.toLowerCase()))return!0;return!1}
function Iu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:O("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=t(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=t(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=O("SERVER_NAME");b=O("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Cn(O("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function Ku(a){var b=Ma.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ia(b))}
;function Lu(){this.register=new Map}
function Mu(a){a=t(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Ag("ABORTED")}
Lu.prototype.clear=function(){Mu(this);this.register.clear()};
var Nu=new Lu;var Ou=Date.now().toString();function Pu(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(Ou)for(b=1,c=0;c<Ou.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^Ou.charCodeAt(c),b++;return a}
function Qu(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}return Pu()}
function Ru(){for(var a=Qu(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;var Su=x.ytLoggingDocDocumentNonce_;Su||(Su=Ru(),y("ytLoggingDocDocumentNonce_",Su));var Tu=Su;var Uu={wf:0,uf:1,vf:2,Wf:3,xf:4,cg:5,Xf:6,ag:7,Yf:8,Zf:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Vu(a){this.h=a}
function Wu(a){return new Vu({trackingParams:a})}
Vu.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
Vu.prototype.getAsJspb=function(){var a=new $l;if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Md(b,Jd):Kd||(Kd=new Md(null,Jd));else if(b.constructor!==Md)if(Id(b))b instanceof Uint8Array||Array.isArray(b),b=b.length?new Md(new Uint8Array(b),Jd):Kd||(Kd=new Md(null,Jd));else throw Error();G(a,1,b)}else void 0!==this.h.veType&&we(a,2,this.h.veType),void 0!==this.h.veCounter&&we(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&we(a,3,this.h.elementIndex),
this.h.isCounterfactual&&G(a,5,!0);void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),H(a,$l,7,b));void 0!==this.h.youtubeData&&H(a,Zk,8,this.h.jspbYoutubeData);return a};
Vu.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Vu.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Xu(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Yu(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Zu(a){return O(Yu(void 0===a?0:a))}
y("yt_logging_screen.getRootVeType",Zu);function $u(a){return(a=Zu(void 0===a?0:a))?new Vu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function av(){var a=O("csn-to-ctt-auth-info");a||(a={},Wm("csn-to-ctt-auth-info",a));return a}
function bv(a){a=O(Xu(void 0===a?0:a));if(!a&&!O("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
y("yt_logging_screen.getCurrentCsn",bv);function cv(a){for(var b=t(Object.values(Uu)),c=b.next();!c.done;c=b.next())if(bv(c.value)===a)return!0;return!1}
function dv(a,b,c){var d=av();(c=bv(c))&&delete d[c];b&&(d[a]=b)}
function ev(a){return av()[a]}
y("yt_logging_screen.getCttAuthInfo",ev);function fv(a,b,c,d){c=void 0===c?0:c;if(a!==O(Xu(c))||b!==O(Yu(c)))if(dv(a,d,c),Wm(Xu(c),a),Wm(Yu(c),b),b=function(){setTimeout(function(){if(a)if(P("web_time_via_jspb")){var e=new am;G(e,1,Tu);G(e,2,a);var f=new Bm;te(f,am,111,Cm,e);tu(f)}else No("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Tu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
y("yt_logging_screen.setCurrentScreen",fv);var gv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",gv);function hv(a){Rm(gv,arguments)}
;var iv=[3611,27686,85013,23462,157557,42016,26926,51236,79148,50160,77504,153587,87907,18630,177018,177023,54445,80935,152172,105675,150723,37521,147285,47786,98349,168271,168954,168277,168273,168270,123695,6827,29434,171388,7282,124448,32276,76278,147868,147869,93911,106531,177843,27259,27262,27263,21759,160866,177957,171243,160789,171244,171241,171245,171242,177958,177565,175492,175493,175494,175495,175496,175497,38408,175498,175503,175504,175505,175506,175507,175508,80637,68727,68728,80353,80356,
74610,45707,83962,83970,46713,166591,89711,74612,179607,155792,93265,74611,131380,128979,139311,128978,131391,105350,139312,134800,131392,113533,93252,99357,94521,114252,113532,94522,94583,88E3,139580,93253,93254,94387,94388,93255,97424,72502,110111,76019,117092,117093,89431,110466,77240,60508,148123,148124,137401,137402,137046,73393,113534,92098,131381,84517,83759,162711,162712,80357,86113,72598,168413,72733,107349,124275,118203,133275,160157,152569,156651,133274,160159,160158,133272,133273,133276,
144507,143247,175994,156652,143248,143249,143250,143251,156653,144401,117431,133797,153964,128572,133405,117429,117430,177950,174734,177951,117432,173996,173995,174953,173994,173997,120080,117259,178546,156655,156654,121692,145656,156656,145655,145653,145654,145657,132972,133051,133658,132971,97615,143359,143356,143361,143358,143360,143357,142303,143353,172859,143354,144479,143355,31402,133624,146477,133623,133622,133621,84774,160801,95117,172721,150497,98930,98931,98932,153320,153321,43347,129889,
149123,45474,100352,98443,117985,74613,155911,74614,64502,136032,74615,74616,122224,74617,77820,74618,93278,93274,93275,93276,22110,29433,133798,132295,120541,82047,113550,75836,75837,42352,84512,76065,75989,51879,16623,32594,27240,32633,74858,156999,3945,16989,45520,25488,25492,25494,55760,14057,18451,57204,57203,17897,18198,17898,17909,43980,46220,11721,147994,49954,96369,3854,151633,56251,159108,25624,152036,16906,99999,68172,47973,72773,26970,26971,96805,17752,73233,109512,22256,14115,22696,89278,
89277,109513,43278,43459,43464,89279,43717,55764,22255,147912,89281,40963,43277,43442,91824,120137,96367,36850,72694,37414,36851,124863,121343,73491,54473,166861,43375,46674,143815,139095,144402,149968,149969,32473,72901,72906,50612,50613,50942,84938,84943,84939,84941,84944,84940,84942,35585,51926,79983,18921,57893,41182,135732,33424,22207,36229,22206,22205,44763,33427,67793,22182,37091,34650,50617,22287,25144,97917,62397,150871,150874,125598,137935,36961,108035,27426,27857,27846,27854,69692,61411,
39299,38696,62520,36382,108701,50663,36387,14908,37533,105443,61635,62274,161670,133818,65702,65703,65701,76256,166382,37671,49953,36216,28237,173718,39553,29222,26107,38050,26108,120745,26109,26110,66881,28236,14586,160598,57929,74723,44098,173689,44099,23528,61699,134104,134103,59149,173191,173192,173193,101951,171502,97346,118051,95102,64882,119505,63595,63349,95101,75240,27039,68823,21537,83464,75707,170215,83113,101952,101953,79610,125755,24402,24400,32925,57173,156421,122502,145268,138480,64423,
64424,33986,100828,129089,21409,135155,135156,135157,135158,158225,135159,135160,167651,135161,135162,135163,158226,158227,135164,135165,135166,11070,11074,17880,30709,30707,30711,30710,30708,146143,63648,63649,111059,5754,20445,151308,151152,130975,130976,167637,110386,113746,66557,17310,28631,21589,164817,168011,154946,68012,162617,60480,138664,141121,164502,31571,141978,150105,150106,150107,150108,76980,41577,45469,38669,13768,13777,141842,62985,4724,59369,43927,43928,12924,100355,56219,27669,
10337,47896,122629,139723,139722,121258,107598,127991,96639,107536,130169,96661,145188,96658,116646,159428,168611,168612,121122,96660,127738,127083,155281,162959,163566,147842,104443,96659,147595,106442,162776,134840,63667,63668,63669,130686,147036,78314,147799,174049,148649,55761,127098,134841,96368,67374,48992,146176,176105,49956,31961,26388,23811,5E4,126250,96370,47355,47356,37935,45521,21760,83769,49977,49974,93497,93498,34325,140759,115803,123707,100081,35309,68314,25602,100339,170873,143516,
178921,59018,18248,50625,9729,37168,37169,21667,16749,18635,39305,18046,53969,8213,93926,102852,110099,22678,69076,137575,139224,100856,154430,17736,3832,147111,55759,64031,93044,93045,170701,170702,34388,167841,170419,17657,17655,39579,39578,170412,77448,8196,11357,69877,8197,168501,156512,161613,156509,161612,161614,82039];function jv(){var a=vb(kv),b;return(new Xf(function(c,d){a.onSuccess=function(e){vn(e)?c(new lv(e)):d(new mv("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new mv("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new mv("Request timed out","net.timeout",e))};
b=Cn("//googleads.g.doubleclick.net/pagead/id",a)})).sc(function(c){c instanceof hg&&b.abort();
return cg(c)})}
function mv(a,b,c){cb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(mv,cb);function lv(a){this.xhr=a}
;function nv(){this.h=0;this.i=null}
nv.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:ov(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:pv(a):this};
nv.prototype.getValue=function(){return this.i};
nv.prototype.isRejected=function(){return 2==this.h};
nv.prototype.$goog_Thenable=!0;function pv(a){var b=new nv;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function ov(a){var b=new nv;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function qv(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:mn(a)?"same-origin":"cors",credentials:mn(a)?"same-origin":"include"};b={};for(var d=t(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function rv(){return $g()||(td||ud)&&To("applewebkit")&&!To("version")&&(!To("safari")||To("gsa/"))||jd&&To("version/")?!0:O("EOM_VISITOR_DATA")?!1:!0}
;function sv(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in ul)if(ul[d]==c.embeddedPlayerMode){b=ul[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function tv(a){cb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof uv;this.isTimeout=a instanceof mv&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof hg}
v(tv,cb);tv.prototype.name="BiscottiError";function uv(){cb.call(this,"Biscotti ID is missing from server")}
v(uv,cb);uv.prototype.name="BiscottiMissingError";var kv={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},vv=null;function wv(){if(P("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!rv())return Error("User has not consented - not fetching biscotti id.");var a=O("PLAYER_VARS",{});if("1"==tb(a))return Error("Biscotti ID is not available in private embed mode");if(sv(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Pm(){var a=wv();if(void 0!==a)return cg(a);vv||(vv=jv().then(xv).sc(function(b){return yv(2,b)}));
return vv}
function xv(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new uv;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new uv;a=a.id;Qm(a);vv=ov(a);zv(18E5,2);return a}
function yv(a,b){b=new tv(b);Qm("");vv=pv(b);0<a&&zv(12E4,a-1);throw b;}
function zv(a,b){wn(function(){jv().then(xv,function(c){return yv(b,c)}).sc(eb)},a)}
function Av(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Pm()}catch(b){return cg(b)}}
;function Bv(a){if("1"!=tb(O("PLAYER_VARS",{}))){a&&Om();try{Av().then(function(){},function(){}),wn(Bv,18E5)}catch(b){an(b)}}}
;function Cv(){var a=jo(),b=mo(119),c=1<window.devicePixelRatio;if(document.body&&Zi(document.body,"exp-invert-logo"))if(c&&!Zi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Zi(d,"inverted-hdpi")){var e=Xi(d);Yi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Zi(document.body,"inverted-hdpi")&&$i();if(b!=c){b="f"+(Math.floor(119/31)+1);d=no(b)||0;d=c?d|67108864:d&-67108865;0===d?delete go[b]:(c=d.toString(16),go[b]=c.toString());
c=!0;P("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in go)go.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(go[f])));var f=d.join("&");co(b,f,63072E3,a.i,c)}}
;var Dv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Ev(){var a=void 0===a?window.location.href:a;if(P("kevlar_disable_theme_param"))return null;zc(Ac(5,a));try{var b=kn(a).theme;return Dv.get(b)||null}catch(c){}return null}
;function Fv(){this.h={};if(this.i=fo()){var a=Yg.get("CONSISTENCY",void 0);a&&Gv(this,{encryptedTokenJarContents:a})}}
Fv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Pa.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=t(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Gv(this,a)}};
function Gv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&co("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Hv=window.location.hostname.split(".").slice(-2).join(".");function Iv(){var a=O("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===O("INNERTUBE_CLIENT_NAME")&&(this.h=Jv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Kv;function Lv(){Kv=B("yt.clientLocationService.instance");Kv||(Kv=new Iv,y("yt.clientLocationService.instance",Kv));return Kv}
k=Iv.prototype;k.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
k.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===O("INNERTUBE_CLIENT_NAME")?(this.h=Jv(this))&&this.h.set("yt-location-playability-token",a,15552E3):co("YT_CL",JSON.stringify({loctok:a}),15552E3,Hv,!0))};
function Jv(a){return void 0===a.h?new Eo("yt-client-location"):a.h}
k.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Jv(this))&&this.h.remove("yt-location-playability-token"):eo("YT_CL")};
k.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===O("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
k.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Mv(a,b){if(!a)return!1;var c,d=null==(c=Ct(a,tl))?void 0:c.signal;if(d&&b.mb)return!!b.mb[d];var e;if((c=null==(e=Ct(a,ql))?void 0:e.request)&&b.xc)return!!b.xc[c];for(var f in a)if(b.wc[f])return!0;return!1}
function Nv(a,b){var c,d=null==(c=Ct(a,tl))?void 0:c.signal;if(d&&b.mb&&(c=b.mb[d]))return c();var e;if((c=null==(e=Ct(a,ql))?void 0:e.request)&&b.xc&&(e=b.xc[c]))return e();for(var f in a)if(b.wc[f]&&(a=b.wc[f]))return a()}
;function Ov(a){return function(){return new a}}
;var Pv={},Qv=(Pv.WEB_UNPLUGGED="^unplugged/",Pv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Pv.WEB_UNPLUGGED_OPS="^unplugged/",Pv.WEB_UNPLUGGED_PUBLIC="^unplugged/",Pv.WEB_CREATOR="^creator/",Pv.WEB_KIDS="^kids/",Pv.WEB_EXPERIMENTS="^experiments/",Pv.WEB_MUSIC="^music/",Pv.WEB_REMIX="^music/",Pv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Pv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Pv);
function Rv(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Qv[b];if(c){var d=new RegExp(c),e=t(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Qv).forEach(function(g){var h=t(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=t(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Sv(){}
Sv.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?$n:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=O("INNERTUBE_CONTEXT");if(g){g=wb(g);P("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=O("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var l=void 0===l?!1:l;jo();var m="USER_INTERFACE_THEME_LIGHT";mo(165)?m="USER_INTERFACE_THEME_DARK":mo(174)?m="USER_INTERFACE_THEME_LIGHT":!P("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");l=l?m:Ev()||m;h.userInterfaceTheme=l;if(!f){if(l=to())h.connectionType=
l;P("web_log_effective_connection_type")&&(l=uo())&&(g.client.effectiveConnectionType=l)}var p;if(P("web_log_memory_total_kbytes")&&(null==(p=x.navigator)?0:p.deviceMemory)){var r;p=null==(r=x.navigator)?void 0:r.deviceMemory;g.client.memoryTotalKbytes=""+1E6*p}r=kn(x.location.href);!P("web_populate_internal_geo_killswitch")&&r.internalcountrycode&&(h.internalGeo=r.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:x.location.href},P("kevlar_woffle")&&ao.h&&
(r=ao.h,h.mainAppWebInfo.pwaInstallabilityStatus=!r.h&&r.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=bo(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!P("web_lr_app_quality_killswitch")&&(r=O("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:r})),r=O("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:r}));
if(!P("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var z=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(pa){}z=void 0}z&&(h.timeZone=z)}(z=rn())?h.experimentsToken=z:delete h.experimentsToken;z=sn();Fv.h||(Fv.h=new Fv);h=Fv.h.h;r=[];p=0;for(var u in h)r[p++]=h[u];g.request=Object.assign({},g.request,{internalExperimentFlags:z,consistencyTokenJars:r});!P("web_prequest_context_killswitch")&&(u=O("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
u);z=jo();u=mo(58);z=z.get("gsml","");g.user=Object.assign({},g.user);u&&(g.user.enableSafetyMode=u);z&&(g.user.lockedSafetyMode=!0);P("warm_op_csn_cleanup")?e&&(f=bv())&&(g.clientScreenNonce=f):!f&&(f=bv())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Lv().setLocationOnInnerTubeContext(g);try{var A=nn(),C=A.bid;delete A.bid;g.adSignalsInfo={params:[],bid:C};var D=t(Object.entries(A));for(var N=D.next();!N.done;N=D.next()){var R=
t(N.value),T=R.next().value,ea=R.next().value;A=T;C=ea;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:A,value:""+C})}}catch(pa){Gu(pa)}D=g}else Gu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),D={};D={context:D};if(N=this.h(a)){this.i(D,N,b);var Z;b="/youtubei/v1/"+Rv(this.j());(N=null==(Z=Ct(a.commandMetadata,sl))?void 0:Z.apiUrl)&&(b=N);Z=b;(b=O("INNERTUBE_HOST_OVERRIDE"))&&(Z=String(b)+String(Cc(Z)));b={};b.key=O("INNERTUBE_API_KEY");P("json_condensed_response")&&(b.prettyPrint=
"false");Z=ln(Z,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:Z,kb:qv(Z),Pa:D,config:a};a.config.Yb?a.config.Yb.identity=c:a.config.Yb={identity:c};return a}Gu(new vo("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Sv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Tv(){}
v(Tv,Sv);Tv.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",kb:qv("/getDatasyncIdsEndpoint","GET"),Pa:{}}};
Tv.prototype.j=function(){return[]};
Tv.prototype.h=function(){};
Tv.prototype.i=function(){};var Uv={},Vv=(Uv.GET_DATASYNC_IDS=Ov(Tv),Uv);function Wv(a){var b=Ma.apply(1,arguments);if(!Xv(a)||b.some(function(d){return!Xv(d)}))throw Error("Only objects may be merged.");
b=t(b);for(var c=b.next();!c.done;c=b.next())Yv(a,c.value);return a}
function Yv(a,b){for(var c in b)if(Xv(b[c])){if(c in a&&!Xv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Yv(a[c],b[c])}else if(Zv(b[c])){if(c in a&&!Zv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);$v(a[c],b[c])}else a[c]=b[c];return a}
function $v(a,b){b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Xv(c)?a.push(Yv({},c)):Zv(c)?a.push($v([],c)):a.push(c);return a}
function Xv(a){return"object"===typeof a&&!Array.isArray(a)}
function Zv(a){return"object"===typeof a&&Array.isArray(a)}
;function aw(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},y("ytcsi."+(a||"")+"data_",b));return b}
function bw(){var a=aw();a.info||(a.info={});return a.info}
function cw(a){a=aw(a);a.metadata||(a.metadata={});return a.metadata}
function dw(a){a=aw(a);a.tick||(a.tick={});return a.tick}
function ew(a){a=aw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function fw(a){a=ew(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function gw(a){var b=aw(a).nonce;b||(b=Ru(),aw(a).nonce=b);return b}
;function hw(){var a=B("ytcsi.debug");a||(a=[],y("ytcsi.debug",a),y("ytcsi.reference",{}));return a}
function iw(a){a=a||"";var b=B("ytcsi.reference");b||(hw(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=hw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},jw=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
U["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",U["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",U["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",U["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",U["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",U["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",U["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",U["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
U["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",U["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",U.browse="LATENCY_ACTION_BROWSE",U.cast_splash="LATENCY_ACTION_CAST_SPLASH",U.channels="LATENCY_ACTION_CHANNELS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
U["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U.chips="LATENCY_ACTION_CHIPS",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",U["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",U.embed="LATENCY_ACTION_EMBED",
U.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",U.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",U.explore="LATENCY_ACTION_EXPLORE",U.home="LATENCY_ACTION_HOME",U.library="LATENCY_ACTION_LIBRARY",U.live="LATENCY_ACTION_LIVE",U.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",U.onboarding="LATENCY_ACTION_ONBOARDING",U.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",U["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",U["owner.analytics"]=
"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",U["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",U["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",U["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",U["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",U["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",U["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",U["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",U["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
U["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",U["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",U["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",U["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",U["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",U["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",U["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",U["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",U.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
U.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",U.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",U.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U.prebuffer="LATENCY_ACTION_PREBUFFER",U.prefetch="LATENCY_ACTION_PREFETCH",U.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",U.profile_switcher="LATENCY_ACTION_LOGIN",U.reel_watch="LATENCY_ACTION_REEL_WATCH",
U.results="LATENCY_ACTION_RESULTS",U["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",U.search_ui="LATENCY_ACTION_SEARCH_UI",U.search_suggest="LATENCY_ACTION_SUGGEST",U.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",U.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",U.seek="LATENCY_ACTION_PLAYER_SEEK",U.settings="LATENCY_ACTION_SETTINGS",U.store="LATENCY_ACTION_STORE",U.tenx="LATENCY_ACTION_TENX",U.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",U.watch="LATENCY_ACTION_WATCH",U.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",U["watch,watch7"]="LATENCY_ACTION_WATCH",U["watch,watch7_html5"]="LATENCY_ACTION_WATCH",U["watch,watch7ad"]="LATENCY_ACTION_WATCH",U["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",U.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",U.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",U["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",U.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",U),V={},kw=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",
V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",
V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",
V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs=
"tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",
V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),lw="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),mw={},nw=(mw.ccs="CANARY_STATE_",
mw.mver="MEASUREMENT_VERSION_",mw.pis="PLAYER_INITIALIZED_STATE_",mw.yt_pt="LATENCY_PLAYER_",mw.pa="LATENCY_ACTION_",mw.ctop="TOP_ENTITY_TYPE_",mw.yt_vst="VIDEO_STREAM_TYPE_",mw),ow="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function pw(a){return jw[a]||"LATENCY_ACTION_UNKNOWN"}
function qw(a,b,c){c=ew(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in kw){c=kw[a];0<=gb(lw,c)&&(b=!!b);a in nw&&"string"===typeof b&&(b=nw[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Wv({},d)}0<=gb(ow,a)||Hu(new vo("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_DMA_CONSENT_FLOW:247,LATENCY_ACTION_GEL_FETCH:248,LATENCY_ACTION_GEL_JSPB_SERIALIZE:243,LATENCY_ACTION_GEL_COMPRESSION:215,
LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE:204,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,
LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,
LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN:244,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,
LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,
LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,
LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_MOBILE_LIVE_NAV_MDE:231,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_SHORTS_LOAD_PROJECT:234,LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING:229,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,
LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD:240,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT:239,LATENCY_ACTION_CREATION_MODES_MODE_SWITCH:236,
LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT:235,LATENCY_ACTION_SWITCH_CAMERA:246,LATENCY_ACTION_OPEN_CAMERA:245,LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME:242,LATENCY_ACTION_MEDIA_ENGINE_EXPORT:241,LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA:233,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL:238,LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL:237,
LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,
LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT:219,LATENCY_ACTION_CREATOR_VIDEO_POLICY:217,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,
LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT:218,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_CLAIMS:216,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,
LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,LATENCY_ACTION_CREATOR_CMS_REPORTS:201,LATENCY_ACTION_CREATOR_CMS_RELEASES:226,LATENCY_ACTION_CREATOR_CMS_POLICIES:225,LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC:224,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_LICENSES:223,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,
LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS:222,LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS:214,LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES:209,LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY:208,LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP:207,LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA:205,LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES:212,LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES:206,LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS:221,LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS:210,
LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION:213,LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS:211,LATENCY_ACTION_CREATOR_CMS_ASSETS:195,LATENCY_ACTION_CREATOR_CMS_ART_TRACKS:220,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CMS_ALLOWLIST:227,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,
LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS:228,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,
LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,
LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_INLINE_TO_WATCH:232,LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH:230,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,
LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";
W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_DMA_CONSENT_FLOW]="LATENCY_ACTION_DMA_CONSENT_FLOW";
W[W.LATENCY_ACTION_GEL_FETCH]="LATENCY_ACTION_GEL_FETCH";W[W.LATENCY_ACTION_GEL_JSPB_SERIALIZE]="LATENCY_ACTION_GEL_JSPB_SERIALIZE";W[W.LATENCY_ACTION_GEL_COMPRESSION]="LATENCY_ACTION_GEL_COMPRESSION";W[W.LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE]="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE";W[W.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";W[W.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";
W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";
W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";
W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";
W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";
W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";
W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";
W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";
W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";
W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";
W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_MOBILE_LIVE_NAV_MDE]="LATENCY_ACTION_MOBILE_LIVE_NAV_MDE";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_SHORTS_LOAD_PROJECT]="LATENCY_ACTION_SHORTS_LOAD_PROJECT";W[W.LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING]="LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING";
W[W.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
W[W.LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD]="LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT";
W[W.LATENCY_ACTION_CREATION_MODES_MODE_SWITCH]="LATENCY_ACTION_CREATION_MODES_MODE_SWITCH";W[W.LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT";W[W.LATENCY_ACTION_SWITCH_CAMERA]="LATENCY_ACTION_SWITCH_CAMERA";W[W.LATENCY_ACTION_OPEN_CAMERA]="LATENCY_ACTION_OPEN_CAMERA";W[W.LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME]="LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME";W[W.LATENCY_ACTION_MEDIA_ENGINE_EXPORT]="LATENCY_ACTION_MEDIA_ENGINE_EXPORT";
W[W.LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA]="LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA";W[W.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";W[W.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";W[W.LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL";
W[W.LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";
W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";
W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";
W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT";W[W.LATENCY_ACTION_CREATOR_VIDEO_POLICY]="LATENCY_ACTION_CREATOR_VIDEO_POLICY";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";
W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
W[W.LATENCY_ACTION_CREATOR_VIDEO_CLAIMS]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";W[W.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";
W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";
W[W.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";W[W.LATENCY_ACTION_CREATOR_CMS_RELEASES]="LATENCY_ACTION_CREATOR_CMS_RELEASES";W[W.LATENCY_ACTION_CREATOR_CMS_POLICIES]="LATENCY_ACTION_CREATOR_CMS_POLICIES";W[W.LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC";W[W.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";
W[W.LATENCY_ACTION_CREATOR_CMS_LICENSES]="LATENCY_ACTION_CREATOR_CMS_LICENSES";W[W.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";W[W.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";W[W.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";
W[W.LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP";
W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION";
W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";W[W.LATENCY_ACTION_CREATOR_CMS_ART_TRACKS]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS";W[W.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_CMS_ALLOWLIST]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST";W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";W[W.LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS]="LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";
W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";
W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";
W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";
W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_INLINE_TO_WATCH]="LATENCY_ACTION_INLINE_TO_WATCH";W[W.LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH]="LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";
W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";W[W.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";W[W.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";
W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var rw={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};rw[rw.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";rw[rw.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";rw[rw.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var sw={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};sw[sw.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
sw[sw.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";sw[sw.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";sw[sw.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";sw[sw.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";sw[sw.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";sw[sw.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";sw[sw.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var tw={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};tw[tw.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";tw[tw.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";tw[tw.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";tw[tw.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var uw={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
uw[uw.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";uw[uw.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var vw={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};vw[vw.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";vw[vw.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";vw[vw.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
vw[vw.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";vw[vw.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";vw[vw.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var ww={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};ww[ww.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";ww[ww.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";ww[ww.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";ww[ww.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var xw={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};xw[xw.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";xw[xw.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";xw[xw.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var yw={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};yw[yw.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
yw[yw.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";yw[yw.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var zw="actionVisualElement spinnerInfo cacheAttempts resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo inlineToWatchInfo mediaEngineMetadata webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext creationModesContext cameraMetadata producerMediaAssetMetadata".split(" ");function Aw(a,b){Iq.call(this,1,arguments);this.timer=b}
v(Aw,Iq);var Bw=new Jq("aft-recorded",Aw);var Cw=x.ytLoggingLatencyUsageStats_||{};y("ytLoggingLatencyUsageStats_",Cw);function Dw(){this.h=0}
function Ew(){Dw.h||(Dw.h=new Dw);return Dw.h}
Dw.prototype.tick=function(a,b,c,d){Fw(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},P("web_csi_via_jspb")?(d=new ym,G(d,1,a),G(d,2,b),a=new Bm,te(a,ym,5,Cm,d),tu(a,c)):No("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Dw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Fw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,No("latencyActionInfo",a,{cttAuthInfo:c}))};
Dw.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Fw(this,"info_"+d+"_"+b)||(G(a,2,b),b={cttAuthInfo:c},c=new Bm,te(c,um,7,Cm,a),tu(c,b))};
Dw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Fw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,No("latencyActionSpan",a,{cttAuthInfo:c}))};
function Fw(a,b){Cw[b]=Cw[b]||{count:0};var c=Cw[b];c.count++;c.time=S();a.h||(a.h=zo(function(){var d=S(),e;for(e in Cw)Cw[e]&&6E4<d-Cw[e].time&&delete Cw[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new vo("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Hu(c)),!0):!1}
;var Gw=window;function Hw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Iw(){var a;if(P("csi_use_performance_navigation_timing")||P("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Jw?void 0:null==(a=Jw.getEntriesByType)?void 0:null==(b=a.call(Jw,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Kw(e.requestStart),e.responseEnd=Kw(e.responseEnd),e.redirectStart=Kw(e.redirectStart),e.redirectEnd=Kw(e.redirectEnd),e.domainLookupEnd=Kw(e.domainLookupEnd),e.connectStart=Kw(e.connectStart),e.connectEnd=
Kw(e.connectEnd),e.responseStart=Kw(e.responseStart),e.secureConnectionStart=Kw(e.secureConnectionStart),e.domainLookupStart=Kw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Jw.timing}else a=Jw.timing;return a}
function Kw(a){return Math.round(Lw()+a)}
function Lw(){return(P("csi_use_time_origin")||P("csi_use_time_origin_tvhtml5"))&&Jw.timeOrigin?Math.floor(Jw.timeOrigin):Jw.timing.navigationStart}
var Jw=Gw.performance||Gw.mozPerformance||Gw.msPerformance||Gw.webkitPerformance||new Hw;var Mw=!1,Nw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Za(Jw.clearResourceTimings||Jw.webkitClearResourceTimings||Jw.mozClearResourceTimings||Jw.msClearResourceTimings||Jw.oClearResourceTimings||eb,Jw);function Ow(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;cw(c).loadType=e}(a=qw(a,b,c))&&Pw(a,c,d)}}
function Pw(a,b,c){if(!P("web_csi_via_jspb")||(void 0===c?0:c))c=iw(b||""),Wv(c.info,a),a.loadType&&(c=a.loadType,cw(b).loadType=c),Wv(fw(b),a),c=gw(b),b=aw(b).cttAuthInfo,Ew().info(a,c,b);else{c=new um;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":G(c,1,W[a[e]]);break;case "clientActionNonce":G(c,2,a[e]);break;case "clientScreenNonce":G(c,4,a[e]);break;case "loadType":G(c,3,a[e]);break;case "isPrewarmedLaunch":G(c,92,a[e]);break;case "isFirstInstall":G(c,
55,a[e]);break;case "networkType":G(c,5,rw[a[e]]);break;case "connectionType":G(c,26,X[a[e]]);break;case "detailedConnectionType":G(c,27,Y[a[e]]);break;case "isVisible":G(c,6,a[e]);break;case "playerType":G(c,7,sw[a[e]]);break;case "clientPlaybackNonce":G(c,8,a[e]);break;case "adClientPlaybackNonce":G(c,28,a[e]);break;case "previousCpn":G(c,77,a[e]);break;case "targetCpn":G(c,76,a[e]);break;case "isMonetized":G(c,9,a[e]);break;case "isPrerollAllowed":G(c,16,a[e]);break;case "isPrerollShown":G(c,17,
a[e]);break;case "adType":G(c,12,a[e]);break;case "adTypesAllowed":G(c,36,a[e]);break;case "adNetworks":G(c,37,a[e]);break;case "previousAction":G(c,13,W[a[e]]);break;case "isRedSubscriber":G(c,14,a[e]);break;case "serverTimeMs":we(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":G(c,20,a[e]);break;case "targetVideoId":G(c,78,a[e]);break;case "adBreakType":G(c,21,tw[a[e]]);break;case "isNavigation":G(c,25,a[e]);break;case "viewportHeight":we(c,29,a[e]);break;case "viewportWidth":we(c,
30,a[e]);break;case "screenHeight":we(c,84,a[e]);break;case "screenWidth":we(c,85,a[e]);break;case "browseId":G(c,31,a[e]);break;case "isCacheHit":G(c,32,a[e]);break;case "httpProtocol":G(c,33,a[e]);break;case "transportProtocol":G(c,34,a[e]);break;case "searchQuery":G(c,41,a[e]);break;case "isContinuation":G(c,42,a[e]);break;case "availableProcessors":we(c,43,a[e]);break;case "sdk":G(c,44,a[e]);break;case "isLocalStream":G(c,45,a[e]);break;case "navigationRequestedSameUrl":G(c,64,a[e]);break;case "shellStartupDurationMs":we(c,
70,a[e]);break;case "appInstallDataAgeMs":we(c,73,a[e]);break;case "latencyActionError":G(c,71,uw[a[e]]);break;case "actionStep":we(c,79,a[e]);break;case "jsHeapSizeLimit":G(c,80,a[e]);break;case "totalJsHeapSize":G(c,81,a[e]);break;case "usedJsHeapSize":G(c,82,a[e]);break;case "sourceVideoDurationMs":G(c,90,a[e]);break;case "videoOutputFrames":G(c,93,a[e]);break;case "isResume":G(c,104,a[e]);break;case "debugTicksExcluded":G(c,105,a[e]);break;case "abandonedPing":G(c,113,a[e]);break;case "adPrebufferedTimeSecs":we(c,
39,a[e]);break;case "isLivestream":G(c,47,a[e]);break;case "liveStreamMode":G(c,91,vw[a[e]]);break;case "adCpn2":G(c,48,a[e]);break;case "adDaiDriftMillis":G(c,49,a[e]);break;case "videoStreamType":G(c,53,ww[a[e]]);break;case "playbackRequiresTap":G(c,56,a[e]);break;case "performanceNavigationTiming":G(c,67,a[e]);break;case "transactionType":G(c,74,xw[a[e]]);break;case "playerRotationType":G(c,101,yw[a[e]]);break;case "allowedPreroll":G(c,10,a[e]);break;case "shownPreroll":G(c,11,a[e]);break;case "getHomeRequestId":G(c,
57,a[e]);break;case "getSearchRequestId":G(c,60,a[e]);break;case "getPlayerRequestId":G(c,61,a[e]);break;case "getWatchNextRequestId":G(c,62,a[e]);break;case "getBrowseRequestId":G(c,63,a[e]);break;case "getLibraryRequestId":G(c,66,a[e]);break;case "isTransformerEnabledForFeature":G(c,106,a[e]);break;case "sourceVideoFrameCount":G(c,109,a[e]);break;default:zw.includes(f)&&an(new vo("Codegen laipb translator asked to translate message field",""+f))}}catch(g){an(Error("Codegen laipb translator failed to set "+
f))}}Qw(c,b)}}
function Qw(a,b){var c=Ae(a,3);c&&(cw(b).loadType=c);iw(b||"").jspbInfo.push(a);c=gw(b);b=aw(b).cttAuthInfo;Ew().jspbInfo(a,c,b)}
function Rw(a,b,c){if(!b&&"_"!==a[0]){var d=a;Jw.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),Jw.mark(d))}d=iw(c||"");d.tick[a]=b||S();if(d.callback&&d.callback[a]){d=t(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=ew(c);d.gelTicks&&(d.gelTicks[a]=!0);e=dw(c);d=b||S();P("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=gw(c);var f=aw(c).cttAuthInfo;"_start"===a?(a=Ew(),Fw(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},P("web_csi_via_jspb")?(a=new pm,
G(a,1,e),e=new Bm,te(e,pm,6,Cm,a),tu(e,b)):No("latencyActionBaselined",{clientActionNonce:e},b))):Ew().tick(a,e,b,f);Sw(c);return d}
function Tw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Ps+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Uw(a){var b=Iw(),c=Lw(),d=O("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!P("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Rw("srt",b.responseStart),1!==a.prerender&&Rw("_start",c,void 0));a=Vw();0<a&&Rw("fpt",a);a=Iw();a.isPerformanceNavigationTiming&&Pw({performanceNavigationTiming:!0},void 0);Rw("nreqs",a.requestStart,void 0);Rw("nress",a.responseStart,void 0);Rw("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Rw("nrs",a.redirectStart,void 0),Rw("nre",a.redirectEnd,
void 0));0<a.domainLookupEnd-a.domainLookupStart&&(Rw("ndnss",a.domainLookupStart,void 0),Rw("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Rw("ntcps",a.connectStart,void 0),Rw("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=Lw()&&0<a.connectEnd-a.secureConnectionStart&&(Rw("nstcps",a.secureConnectionStart,void 0),Rw("ntcpe",a.connectEnd,void 0));Jw&&"getEntriesByType"in Jw&&Ww()}
function Xw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);vc()&&a.setAttribute("nonce",vc());return c?(a=Jw.getEntriesByName(c))&&a[0]&&(a=a[0],c=Lw(),Rw("rsf_"+b,c+Math.round(a.fetchStart)),Rw("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Yw(){var a=[];if(document.querySelector&&Jw&&Jw.getEntriesByName)for(var b in Nw)if(Nw.hasOwnProperty(b)){var c=Nw[b];Xw(b,c)&&a.push(c)}return a}
function Ww(){var a=window.location.protocol,b=Jw.getEntriesByType("resource");b=ib(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=kb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Rw("wffs",Kw(b.startTime)),Rw("wffe",Kw(b.responseEnd)))}
function Zw(a){var b=$w("aft",a);if(b)return b;b=O((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=$w(b[d],a);if(e)return e}return NaN}
function $w(a,b){if(a=dw(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Sw(a){var b=$w("_start",a),c=Zw(a);b&&c&&!Mw&&(Oq(Bw,new Aw(Math.round(c-b),a)),Mw=!0)}
function ax(a,b){for(var c=t(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!ax(a[d],b[d]))return!1;return!0}
function Vw(){if(Jw.getEntriesByType){var a=Jw.getEntriesByType("paint");if(a=lb(a,function(b){return"first-paint"===b.name}))return Kw(a.startTime)}a=Jw.timing;
return a.De?Math.max(0,a.De):0}
;function bx(a,b){$m(function(){iw("").info.actionType=a;b&&Wm("TIMING_AFT_KEYS",b);Wm("TIMING_ACTION",a);if(P("web_csi_via_jspb")){var c=O("TIMING_INFO",{}),d=new um;c=t(Object.entries(c));for(var e=c.next();!e.done;e=c.next()){var f=t(e.value);e=f.next().value;f=f.next().value;switch(e){case "GetBrowse_rid":xm(d,sm(rm(e),String(f)));break;case "GetGuide_rid":xm(d,sm(rm(e),String(f)));break;case "GetHome_rid":xm(d,sm(rm(e),String(f)));break;case "GetPlayer_rid":xm(d,sm(rm(e),String(f)));break;case "GetSearch_rid":xm(d,
sm(rm(e),String(f)));break;case "GetSettings_rid":xm(d,sm(rm(e),String(f)));break;case "GetTrending_rid":xm(d,sm(rm(e),String(f)));break;case "GetWatchNext_rid":xm(d,sm(rm(e),String(f)));break;case "yt_red":G(d,14,!!f);break;case "yt_ad":G(d,9,!!f)}}Qw(d);d=new um;d=G(d,25,!0);d=G(d,1,W[pw(O("TIMING_ACTION"))]);(c=O("PREVIOUS_ACTION"))&&G(d,13,W[pw(c)]);(c=O("CLIENT_PROTOCOL"))&&G(d,33,c);(c=O("CLIENT_TRANSPORT"))&&G(d,34,c);(c=bv())&&"UNDEFINED_CSN"!==c&&G(d,4,c);c=Tw();1!==c&&-1!==c||G(d,6,!0);
c=bw();cw();G(d,3,"cold");Uw(c);c=Yw();if(0<c.length)for(c=t(c),e=c.next();!e.done;e=c.next())e=e.value,f=new tm,G(f,1,e),ve(d,83,tm,f);Qw(d)}else{d=O("TIMING_INFO",{});for(c in d)d.hasOwnProperty(c)&&Ow(c,d[c]);d={isNavigation:!0,actionType:pw(O("TIMING_ACTION"))};if(c=O("PREVIOUS_ACTION"))d.previousAction=pw(c);if(c=O("CLIENT_PROTOCOL"))d.httpProtocol=c;if(c=O("CLIENT_TRANSPORT"))d.transportProtocol=c;(c=bv())&&"UNDEFINED_CSN"!==c&&(d.clientScreenNonce=c);c=Tw();if(1===c||-1===c)d.isVisible=!0;
cw();bw();d.loadType="cold";Uw(bw());c=Yw();if(0<c.length)for(d.resourceInfo=[],c=t(c),e=c.next();!e.done;e=c.next())d.resourceInfo.push({resourceCache:e.value});Pw(d)}d=bw();c=fw();if("cold"===cw().loadType&&("cold"===d.yt_lt||"cold"===c.loadType)){e=dw();f=ew();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var g in e)if(!(g in f))if("number"===typeof e[g])Rw(g,$w(g));else if(P("log_repeated_ytcsi_ticks"))for(var h=t(e[g]),l=h.next();!l.done;l=h.next())l=l.value,Rw(g.slice(1),l);g={};e=!1;f=t(Object.keys(d));
for(h=f.next();!h.done;h=f.next())h=h.value,(h=qw(h,d[h]))&&!ax(fw(),h)&&(Wv(c,h),Wv(g,h),e=!0);e&&Pw(g)}y("ytglobal.timingready_",!0);g=O("TIMING_ACTION");B("ytglobal.timingready_")&&g&&cx()&&Zw()&&Sw()})()}
function dx(a,b,c,d){$m(Ow)(a,b,c,d)}
function ex(a,b,c){return $m(Rw)(a,b,c)}
function cx(){return $m(function(){return"_start"in dw()})()}
function fx(){$m(function(){var a=gw();requestAnimationFrame(function(){setTimeout(function(){a===gw()&&ex("ol",void 0,void 0)},0)})})()}
var gx=window;gx.ytcsi&&(gx.ytcsi.info=dx,gx.ytcsi.tick=ex);var hx="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),ix=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function jx(a,b,c,d){this.j=a;this.Y=b;this.m=c;this.l=d;this.i=void 0;this.h=new Map;a.mb||(a.mb={});a.mb=Object.assign({},Vv,a.mb)}
function kx(a,b,c,d){if(void 0!==jx.h){if(d=jx.h,a=[a!==d.j,b!==d.Y,c!==d.m,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new vo("InnerTubeTransportService is already initialized",a);
}else jx.h=new jx(a,b,c,d)}
function lx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?$n:c;var d=Nv(b,a.j);if(!d)return cg(new vo("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Xf(function(f){var g,h,l;return w(function(m){if(1==m.h){h="cors"===(null==(g=e.kb)?void 0:g.mode)?"cors":void 0;if(a.m.bf){var p=e.config,r;p=null==p?void 0:null==(r=p.Yb)?void 0:r.sessionIndex;r=Zn(0,{sessionIndex:p});l=Object.assign({},mx(h),r);return m.A(2)}return m.yield(nx(e.config,
h),3)}2!=m.h&&(l=m.i);f(ox(a,e,l));m.h=0})}):cg(new vo("Error: Failed to build request for command.",b))}
function px(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Dg)?0:d.Hg)&&a.l){d=t(hx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.l[e]&&a.l[e].handleResponse(b,c)}}
function ox(a,b,c){var d,e,f,g,h,l,m,p,r,z,u,A,C,D,N,R,T,ea,Z,pa,Sa,Da,Ea,ya,oa,L,qf,Vc,rf;return w(function(la){switch(la.h){case 1:la.A(2);break;case 3:if((d=la.i)&&!d.isExpired())return la.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Pa)?0:f.context)){la.A(4);break}g=b.Pa.context;if(!P("web_async_context_processor")){h=t([]);for(l=h.next();!l.done;l=h.next())m=l.value,m.zg(g);la.A(4);break}return la.yield([].reduce(function(sf,Kh){return sf.then(function(){return Kh.yg(g)})},
Promise.resolve()),4);
case 4:if(null==(p=a.i)||!p.Eg(b.input,b.Pa)){la.A(7);break}return la.yield(a.i.tg(b.input,b.Pa),8);case 8:return r=la.i,P("kevlar_process_local_innertube_responses_killswitch")||px(a,r,b),la.return(r);case 7:return(A=null==(u=b.config)?void 0:u.Ja)&&a.h.has(A)&&P("web_memoize_inflight_requests")?z=a.h.get(A):(C=JSON.stringify(b.Pa),R=null!=(N=null==(D=b.kb)?void 0:D.headers)?N:{},b.kb=Object.assign({},b.kb,{headers:Object.assign({},R,c)}),T=Object.assign({},b.kb),"POST"===b.kb.method&&(T=Object.assign({},
T,{body:C})),(null==(ea=b.config)?0:ea.Le)&&ex(b.config.Le),Z=function(){return a.Y.fetch(b.input,T,b.config)},z=Z(),A&&a.h.set(A,z)),la.yield(z,9);
case 9:if((pa=la.i)&&"error"in pa&&(null==(Sa=pa)?0:null==(Da=Sa.error)?0:Da.details))for(Ea=pa.error.details,ya=t(Ea),oa=ya.next();!oa.done;oa=ya.next())L=oa.value,(qf=L["@type"])&&-1<ix.indexOf(qf)&&(delete L["@type"],pa=L);A&&a.h.has(A)&&a.h.delete(A);(null==(Vc=b.config)?0:Vc.Me)&&ex(b.config.Me);if(pa||null==(rf=a.i)||!rf.lg(b.input,b.Pa)){la.A(10);break}return la.yield(a.i.sg(b.input,b.Pa),11);case 11:pa=la.i;case 10:return px(a,pa,b),la.return(pa||void 0)}})}
function nx(a,b){var c,d,e,f;return w(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Yb)?void 0:d.sessionIndex;var h=g.yield;var l=bg(Zn(0,{sessionIndex:e}));return h.call(g,l,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},mx(b),f)))})}
function mx(a){var b={"Content-Type":"application/json"};O("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=O("EOM_VISITOR_DATA"):O("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=O("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=O("LOGGED_IN",!1);"cors"!==a&&((a=O("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=O("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=O("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=O("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var qx=new qt("INNERTUBE_TRANSPORT_TOKEN");var rx=["share/get_web_player_share_panel"],sx=["feedback"],tx=["notification/modify_channel_preference"],ux=["browse/edit_playlist"],vx=["subscription/subscribe"],wx=["subscription/unsubscribe"];function xx(){}
v(xx,Sv);xx.prototype.j=function(){return vx};
xx.prototype.h=function(a){return Ct(a,Nm)||void 0};
xx.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(xx.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function yx(){}
v(yx,Sv);yx.prototype.j=function(){return wx};
yx.prototype.h=function(a){return Ct(a,Mm)||void 0};
yx.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(yx.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function zx(){}
v(zx,Sv);zx.prototype.j=function(){return sx};
zx.prototype.h=function(a){return Ct(a,vl)||void 0};
zx.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(zx.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ax(){}
v(Ax,Sv);Ax.prototype.j=function(){return tx};
Ax.prototype.h=function(a){return Ct(a,Lm)||void 0};
Ax.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Bx(){}
v(Bx,Sv);Bx.prototype.j=function(){return ux};
Bx.prototype.h=function(a){return Ct(a,Km)||void 0};
Bx.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Cx(){}
v(Cx,Sv);Cx.prototype.j=function(){return rx};
Cx.prototype.h=function(a){return Ct(a,Jm)};
Cx.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Dx=new qt("NETWORK_SLI_TOKEN");function Ex(a){this.h=a}
Ex.prototype.fetch=function(a,b){var c=this,d,e,f;return w(function(g){c.h&&(d=zc(Ac(5,Nc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;P("wug_networking_gzip_request")&&(e=gr(b));f=new window.Request(a,e);return P("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Hu(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){Hu(h)}))})};
Ex.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.pg(),b=b.then(function(c){Hu(new vo("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
Ex[pt]=[new rt(Dx)];var Fx=new qt("NETWORK_MANAGER_TOKEN");var Gx;function Hx(){var a=Ix,b=Jx,c=Kx;this.l=Lx;this.navigate=a;this.i=b;this.j=c;this.h=new Set}
function Mx(a,b,c){if(Nx(b))Ox(a,b,c);else{var d=a.l(b,c);if(null==c?0:c.vc)d.vc=c.vc;0===d.type?a.navigate?Px(d.command)?Qx(a,d.command)||(b=a.navigate(d)||[],fg(b).then(function(){a.h.delete(d.command)})):Gu(Error("Error: Command handler page requests need to specify a url.")):Gu(Error("Error: Command handler navigate function was called but not set.")):1===d.type?a.i?Qx(a,d.command)||(b=a.i(d),fg(b).then(function(){a.h.delete(d.command)})):Gu(Error("Error: Command handler handle service request function was called but not set.")):
2===d.type&&(a.j?a.j(d):Gu(Error("Error: Command handler send action was called but not set.")))}}
function Qx(a,b){if(a.h.has(b))return!0;a.h.add(b);return!1}
function Nx(a){var b=!!Ct(a,Uk),c;a="CLIENT_SIGNAL"===(null==(c=Ct(a,tl))?void 0:c.signal);return b||a}
function Ox(a,b,c){var d=Ct(b,Uk);if(d)var e=(null==d?void 0:d.commands)||[];else{var f;if("CLIENT_SIGNAL"===(null==(f=Ct(b,tl))?void 0:f.signal)){var g;e=(null==(g=Ct(b,tl))?void 0:g.actions)||[]}}if(e)for(b=t(e),e=b.next();!e.done;e=b.next()){e=e.value;try{Mx(a,e,c)}catch(h){h instanceof Error&&Gu(h)}}else Gu(Error("Could not handle the meta command."))}
function Px(a){var b;return!(null==(b=Ct(null==a?void 0:a.commandMetadata,sl))||!b.url)}
;function Rx(a){a=void 0===a||a?Qu():Pu();for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;function Sx(a){Iq.call(this,1,arguments);this.csn=a}
v(Sx,Iq);var Rq=new Jq("screen-created",Sx),Tx=[],Vx=Ux,Wx=0;function Xx(a,b,c,d,e,f,g,h){function l(){Hu(new vo("newScreen() parent element does not have a VE - rootVe",b))}
var m=Vx(),p=new Vu({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:m};e&&(f.cttAuthInfo=e);if(P("il_via_jspb")){e=hm((new gm).h(m),p.getAsJspb());c&&c.visualElement?(p=new em,c.clientScreenNonce&&G(p,2,c.clientScreenNonce),fm(p,c.visualElement.getAsJspb()),g&&G(p,4,Dm[g]),H(e,em,5,p)):c&&l();d&&G(e,3,d);if(P("expectation_logging")&&h&&h.screenCreatedLoggingExpectations){c=new Xk;h=t(h.screenCreatedLoggingExpectations.expectedParentScreens||[]);for(d=h.next();!d.done;d=h.next())d=
d.value,d.screenVeType&&(d=Wk(new Vk,d.screenVeType),ve(c,1,Vk,d));H(e,Xk,7,c)}yu(e,f,a)}else e={csn:m,pageVe:p.getAsJson()},P("expectation_logging")&&h&&h.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations),c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):c&&l(),d&&(e.cloneCsn=d),a?nu("screenCreated",e,a,f):No("screenCreated",e,f);Oq(Rq,new Sx(m));
return m}
function Yx(a,b,c,d){var e=d.filter(function(l){l.csn!==b?(l.csn=b,l=!0):l=!1;return l}),f={cttAuthInfo:ev(b)||void 0,
sequenceGroup:b};d=t(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(rb(g)||!g.trackingParams&&!g.veType)&&Hu(Error("Child VE logged with no data"));if(P("il_via_jspb")){var h=km((new im).h(b),c.getAsJspb());jb(e,function(l){l=l.getAsJspb();ve(h,3,$l,l)});
"UNDEFINED_CSN"===b?Zx("visualElementAttached",f,void 0,h):zu(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:jb(e,function(l){return l.getAsJson()})},"UNDEFINED_CSN"===b?Zx("visualElementAttached",f,c):a?nu("visualElementAttached",c,a,f):No("visualElementAttached",c,f)}
function $x(a,b,c,d,e,f){d={cttAuthInfo:ev(b)||void 0,sequenceGroup:b};P("il_via_jspb")?(e=(new nm).h(b),c=c.getAsJspb(),c=H(e,$l,2,c),c=G(c,4,1),f&&H(c,cm,3,f),"UNDEFINED_CSN"===b?Zx("visualElementShown",d,void 0,c):uu(c,d,a)):(f={csn:b,ve:c.getAsJson(),eventType:1},e&&(f.clientData=e),"UNDEFINED_CSN"===b?Zx("visualElementShown",d,f):a?nu("visualElementShown",f,a,d):No("visualElementShown",f,d))}
function ay(a,b,c){var d=!0,e=(d=void 0===d?!1:d)?16:8,f={cttAuthInfo:ev(b)||void 0,sequenceGroup:b,endOfSequence:d};P("il_via_jspb")?(e=(new mm).h(b),c=c.getAsJspb(),c=H(e,$l,2,c),G(c,4,d?16:8),"UNDEFINED_CSN"===b?Zx("visualElementHidden",f,void 0,c):vu(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?Zx("visualElementHidden",f,d):a?nu("visualElementHidden",d,a,f):No("visualElementHidden",d,f))}
function Ux(){var a;P("enable_web_96_bit_csn")?a=Rx():P("enable_web_96_bit_csn_no_crypto")?a=Rx(!1):a=yd(Pc(Math.random()+""),3);return a}
function Zx(a,b,c,d){Tx.push({payloadName:a,payload:c,Va:d,options:b});Wx||(Wx=Sq())}
function Tq(a){if(Tx){for(var b=t(Tx),c=b.next();!c.done;c=b.next())if(c=c.value,P("il_via_jspb")&&c.Va)switch(c.Va.h(a.csn),c.payloadName){case "screenCreated":yu(c.Va,c.options);break;case "visualElementAttached":zu(c.Va,c.options);break;case "visualElementShown":uu(c.Va,c.options);break;case "visualElementHidden":vu(c.Va,c.options);break;case "visualElementGestured":wu(c.Va,c.options);break;case "visualElementStateChanged":xu(c.Va,c.options);break;default:Hu(new vo("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,No(c.payloadName,c.payload,c.options));Tx.length=0}Wx=0}
;function by(){this.l=new Set;this.i=new Set;this.m=new Map;this.client=void 0;this.csn=null}
function cy(){by.h||(by.h=new by);return by.h}
by.prototype.j=function(a){this.client=a};
by.prototype.h=function(){this.clear();this.csn=bv()};
by.prototype.clear=function(){this.l.clear();this.i.clear();this.m.clear();this.csn=null};function dy(){}
dy.prototype.j=function(a){$m(cy().j).bind(cy())(a)};
dy.prototype.clear=function(){$m(cy().clear).bind(cy())()};function ey(){this.Z=[];this.la=[];this.h=[];this.T=[];this.s=[];this.I=[];this.l=new Map;this.v=new Map;this.i=new Set;this.X=new Map}
ey.prototype.j=function(a){this.client=a};
function fy(){var a=ey.h,b=16623;var c=void 0===c?{}:c;$m(function(){iv.includes(b)||(Hu(new vo("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||(a.T=[],a.h.push({rootVe:b,key:c.key||""}));a.Z=[];a.la=[];c.jd?gy(a,b,c):hy(a,b,c)})()}
function iy(a,b,c){c=void 0===c?0:c;$m(function(){b.then(function(d){a.i.has(c)&&a.m&&a.m();var e=bv(c),f=$u(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Yx(a.client,e,f,[Wu(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Yx(a.client,e,f,[Wu(d.playerResponse.trackingParams)])}})})()}
function jy(a,b,c,d){d=void 0===d?0:d;$m(function(){if(a.i.has(d))return a.Z.push([b,c]),!0;var e=bv(d),f=c||$u(d);if(e&&f){if(P("combine_ve_grafts")){var g=a.l.get(f.toString());g?g.push(b):(a.v.set(f.toString(),f),a.l.set(f.toString(),[b]));a.P||(a.P=zo(function(){ky(a,e)},1200))}else Yx(a.client,e,f,[b]);
return!0}return!1})()}
ey.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=bv(void 0===c?0:c)){a=this.client;var e=Wu(d);d={cttAuthInfo:ev(c)||void 0,sequenceGroup:c};P("il_via_jspb")?(b=(new lm).h(c),e=e.getAsJspb(),b=H(b,$l,2,e),G(b,4,Dm.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?Zx("visualElementGestured",d,void 0,b):wu(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===
c?Zx("visualElementGestured",d,e):a?nu("visualElementGestured",e,a,d):No("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
ey.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.i.has(c)?this.la.push([a,b]):ly(this,a,b,c)};
function ly(a,b,c,d){d=void 0===d?0:d;var e=bv(d);d=b||$u(d);e&&d&&(a=a.client,b={cttAuthInfo:ev(e)||void 0,sequenceGroup:e},P("il_via_jspb")?(c=new om,c.h(e),d=d.getAsJspb(),H(c,$l,2,d),"UNDEFINED_CSN"===e?Zx("visualElementStateChanged",b,void 0,c):xu(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?Zx("visualElementStateChanged",b,c):a?nu("visualElementStateChanged",c,a,b):No("visualElementStateChanged",c,b)))}
function gy(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.m=function(){hy(a,b,c);var f=$u(c.layer);if(f){for(var g=t(a.Z),h=g.next();!h.done;h=g.next())h=h.value,jy(a,h[0],h[1]||f,c.layer);f=t(a.la);for(g=f.next();!g.done;g=f.next())g=g.value,ly(a,g[0],g[1])}};
bv(c.layer)||a.m();if(c.jd)for(var d=t(c.jd),e=d.next();!e.done;e=d.next())iy(a,e.value,c.layer);else Gu(Error("Delayed screen needs a data promise."))}
function hy(a,b,c){c=void 0===c?{}:c;var d=void 0;c.layer||(c.layer=0);d=void 0!==c.Ge?c.Ge:c.layer;var e=bv(d),f=d=$u(d),g;f&&(void 0!==c.parentCsn?g={clientScreenNonce:c.parentCsn,visualElement:f}:e&&"UNDEFINED_CSN"!==e&&(g={clientScreenNonce:e,visualElement:f}));var h;f=O("EVENT_ID");"UNDEFINED_CSN"===e&&f&&(h={servletData:{serializedServletEventId:f}});P("combine_ve_grafts")&&e&&ky(a,e);try{var l=Xx(a.client,b,g,c.hd,c.cttAuthInfo,h,c.qg,c.loggingExpectations)}catch(r){Ku(r,{Bg:b,rootVe:d,xg:void 0,
mg:e,wg:g,hd:c.hd});Gu(r);return}fv(l,b,c.layer,c.cttAuthInfo);e&&"UNDEFINED_CSN"!==e&&d&&!cv(e)&&ay(a.client,e,d);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=l||"");$m(Pw)({clientScreenNonce:l},void 0,!1);dy.h||(dy.h=new dy);$m(cy().h).bind(cy())();var m=$u(c.layer);e&&"UNDEFINED_CSN"!==e&&m&&(P("web_mark_root_visible")||P("music_web_mark_root_visible"))&&$m($x)(void 0,l,m,void 0,void 0,void 0);a.i.delete(c.layer||0);a.m=void 0;var p;null==(p=a.X.get(c.layer))||p.forEach(function(r,
z){r?jy(a,z,r,c.layer):m&&jy(a,z,m,c.layer)});
my(a)}
function my(a){for(var b=0;b<a.s.length;b++){var c=a.s[b];try{c()}catch(d){Gu(d)}}for(b=a.s.length=0;b<a.I.length;b++){c=a.I[b];try{c()}catch(d){Gu(d)}}}
function ky(a,b){a.l.forEach(function(c,d){(d=a.v.get(d))&&Yx(a.client,b,d,c)});
a.l.clear();a.v.clear();a.P=void 0}
;function ny(){var a,b,c;return w(function(d){if(1==d.h)return a=wt().resolve(qx),a?d.yield(lx(a),2):(Hu(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Hu(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.ng;return d.return(c)}Hu(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var oy=x.caches,py;function qy(a){var b=a.indexOf(":");return-1===b?{zd:a}:{zd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function ry(){return w(function(a){if(void 0!==py)return a.return(py);py=new Promise(function(b){var c;return w(function(d){switch(d.h){case 1:return za(d,2),d.yield(oy.open("test-only"),4);case 4:return d.yield(oy.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(py)})}
function sy(a){var b,c,d,e,f,g,h;w(function(l){if(1==l.h)return l.yield(ry(),2);if(3!=l.h){if(!l.i)return l.return(!1);b=[];return l.yield(oy.keys(),3)}c=l.i;d=t(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=qy(f),h=g.datasyncId,!h||a.includes(h)||b.push(oy.delete(f));return l.return(Promise.all(b).then(function(m){return m.some(function(p){return p})}))})}
function ty(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.h)return h.yield(ry(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=xo("cache contains other");return h.yield(oy.keys(),3)}b=h.i;c=t(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=qy(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function uy(){try{return!!self.localStorage}catch(a){return!1}}
;function vy(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function wy(a){if(uy()){var b=Object.keys(window.localStorage);b=t(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=vy(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function xy(){if(!uy())return!1;var a=xo(),b=Object.keys(window.localStorage);b=t(b);for(var c=b.next();!c.done;c=b.next())if(c=vy(c.value),void 0!==c&&c!==a)return!0;return!1}
;function yy(){ny().then(function(a){a&&(aq(a),sy(a),wy(a))})}
function zy(){var a=new Bs;Pi.ia(function(){var b,c,d,e;return w(function(f){switch(f.h){case 1:if(P("ytidb_clear_optimizations_killswitch")){f.A(2);break}b=xo("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];aq(g);sy(g);wy(g);return f.return()}c=xy();return f.yield(ty(),3);case 3:return d=f.i,f.yield(bq(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.ta()?yy():a.l.add("publicytnetworkstatus-online",yy,!0,void 0,void 0),f.h=0}})})}
;var ui=ha(["data-"]);function Ay(a){a&&(a.dataset?a.dataset[By("loaded")]="true":ti(a))}
function Cy(a,b){return a?a.dataset?a.dataset[By(b)]:a.getAttribute("data-"+b):null}
var Dy={};function By(a){return Dy[a]||(Dy[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Ey=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,Fy=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function Gy(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(Ey,""),c=c.replace(Fy,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else Hy(a,b,c)}
function Hy(a,b,c){c=void 0===c?null:c;var d=Iy(a),e=document.getElementById(d),f=e&&Cy(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=jt(d,b),b=""+Ua(b),Jy[b]=f),g||(e=Ky(a,d,function(){if(!Cy(e,"loaded")){Ay(e);mt(d);var h=$a(nt,d);wn(h,0)}},c)))}
function Ky(a,b,c,d){d=void 0===d?null:d;var e=Kf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);wi(e,Qk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Ly(a){a=Iy(a);var b=document.getElementById(a);b&&(nt(a),b.parentNode.removeChild(b))}
function My(a,b){a&&b&&(a=""+Ua(b),(a=Jy[a])&&lt(a))}
function Iy(a){var b=document.createElement("a");rc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+xc(a)}
var Jy={};var Yy=[],Zy=!1;function $y(){if(!P("disable_biscotti_fetch_for_ad_blocker_detection")&&!P("disable_biscotti_fetch_entirely_for_all_web_clients")&&rv()){var a=O("PLAYER_VARS",{});if("1"!=tb(a)&&!sv(a)){var b=function(){Zy=!0;"google_ad_status"in window?Wm("DCLKSTAT",1):Wm("DCLKSTAT",2)};
try{Gy("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Yy.push(Pi.ia(function(){if(!(Zy||"google_ad_status"in window)){try{My("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Zy=!0;Wm("DCLKSTAT",3)}},5E3))}}}
function az(){var a=Number(O("DCLKSTAT",0));return isNaN(a)?0:a}
;var bz=window,cz,dz=P("web_enable_lifecycle_monitoring")&&(null==(cz=bz.performance)?void 0:cz.measure);function ez(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Do():d;this.j=c;this.scheduler=d;this.i=new ki;this.h=a;for(a={bb:0};a.bb<this.h.length;a={Gb:a.Gb,bb:a.bb},a.bb++)a.Gb=this.h[a.bb],c=function(e){return function(){e.Gb.Hc();b.h[e.bb].nc=!0;b.h.every(function(f){return!0===f.nc})&&b.i.resolve()}}(a),d=this.getPriority(a.Gb),d=Ao(c,d),this.h[a.bb]=Object.assign({},a.Gb,{Hc:c,
jobId:d})}
function fz(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=t(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.nc||(a.scheduler.Ga(c.jobId),Ao(c.Hc,10))}
ez.prototype.cancel=function(){for(var a=t(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.nc||this.scheduler.Ga(b.jobId),b.nc=!0;this.i.resolve()};
ez.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function gz(a){this.state=a;this.plugins=[];this.s=void 0;this.v={};dz&&window.performance.mark(this.state+"-start")}
k=gz.prototype;k.install=function(a){this.plugins.push(a);return this};
k.uninstall=function(){var a=this;Ma.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
k.transition=function(a,b){var c=this;hz(this);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(fz(this.j),this.j=void 0);iz(this,a,b);this.state=a;dz&&window.performance.mark(this.state+"-start");d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(jz(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function jz(a,b){var c=b.filter(function(e){return 10===kz(a,e)}),d=b.filter(function(e){return 10!==kz(a,e)});
return a.v.Fg?function(){var e=Ma.apply(0,arguments);return w(function(f){if(1==f.h)return f.yield(a.Ne.apply(a,[c].concat(ia(e))),2);a.Id.apply(a,[d].concat(ia(e)));f.h=0})}:function(){var e=Ma.apply(0,arguments);
a.Oe.apply(a,[c].concat(ia(e)));a.Id.apply(a,[d].concat(ia(e)))}}
k.Oe=function(a){var b=Ma.apply(1,arguments);Do();for(var c={},d=t(a),e=d.next();!e.done;c={pb:c.pb},e=d.next())c.pb=e.value,Bo(function(f){return function(){lz(f.pb.name);f.pb.callback.apply(f.pb,ia(b));mz(f.pb.name)}}(c))};
k.Ne=function(a){var b=Ma.apply(1,arguments),c,d,e,f;return w(function(g){1==g.h&&(Do(),c={},d=t(a),e=d.next());if(3!=g.h){if(e.done)return g.A(0);c.cb=e.value;c.Eb=void 0;f=function(h){return function(){lz(h.cb.name);var l=h.cb.callback.apply(h.cb,ia(b));"function"===typeof(null==l?void 0:l.then)?h.Eb=l.then(function(){mz(h.cb.name)}):mz(h.cb.name)}}(c);
Bo(f);return c.Eb?g.yield(c.Eb,3):g.A(3)}c={cb:c.cb,Eb:c.Eb};e=d.next();return g.A(2)})};
k.Id=function(a){var b=Ma.apply(1,arguments),c=this,d=a.map(function(e){return{Hc:function(){lz(e.name);e.callback.apply(e,ia(b));mz(e.name)},
priority:kz(c,e)}});
d.length&&(this.j=new ez(d))};
function kz(a,b){var c,d;return null!=(d=null!=(c=a.s)?c:b.priority)?d:0}
function hz(a){if(dz){var b=a.state+"-start",c=a.state+"-end";window.performance.mark(c);window.performance.measure(a.state,b,c)}}
function lz(a){dz&&a&&window.performance.mark(a+"-start")}
function mz(a){if(dz&&a){var b=a+"-start",c=a+"-end";window.performance.mark(c);window.performance.measure(a,b,c)}}
function iz(a,b,c){dz&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(gz.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function nz(a){gz.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.Z},{from:"document_active",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"document_disposed",action:this.l},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(nz,gz);nz.prototype.Z=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
nz.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
nz.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
nz.prototype.i=function(){this.h=new Map};function oz(a){gz.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.l},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.l},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.l},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
P("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(oz,gz);oz.prototype.i=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
oz.prototype.h=function(a,b){a(null==b?void 0:b.event);P("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
oz.prototype.l=function(a,b){a(null==b?void 0:b.event)};
oz.prototype.m=function(a,b){a(null==b?void 0:b.event)};function pz(){this.j=new nz;this.l=new oz}
pz.prototype.install=function(){var a=Ma.apply(0,arguments),b=this;a.forEach(function(c){b.j.install(c)});
a.forEach(function(c){b.l.install(c)})};function qz(){pz.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));a={};this.install((a.flush_logs={callback:this.i},a))}
v(qz,pz);qz.prototype.i=function(){if(P("web_fp_via_jspb")){var a=new Zl,b=bv();b&&G(a,1,b);b=new Bm;te(b,Zl,380,Cm,a);tu(b);P("web_fp_via_jspb_and_json")&&No("finalPayload",{csn:bv()})}else No("finalPayload",{csn:bv()})};
qz.prototype.h=function(){Mu(Nu)};function rz(){}
function sz(){var a=B("ytglobal.storage_");a||(a=new rz,y("ytglobal.storage_",a));return a}
rz.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(tz()):d.return()})};
function tz(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
y("ytglobal.storageClass_",rz);function Lo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=qn("ytidb_transaction_ended_event_rate_limit_session",.2)}
Lo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":P("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":P("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":uz(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=qn("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function uz(a,b){sz().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:vz(null==c?void 0:c.usage),deviceStorageQuotaMbytes:vz(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function vz(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function wz(a){this.args=void 0===a?null:a;this.returnValue=[]}
;var xz=new Map;function yz(a,b){if(!a)return null;a=Object.keys(a);a=t(a);for(var c=a.next();!c.done;c=a.next()){c=c.value;var d=c.toLowerCase();if(-1<d.indexOf(b,d.length-b.length))return c}return null}
;function zz(a,b,c){var d;d||(d={bubbles:!0,cancelable:!1,composed:!0});null!==c&&void 0!==c&&(d.detail=c);b=new CustomEvent(b,d);a.dispatchEvent(b)}
;function Az(a,b){b=new wz(b);zz(a,"yt-action",b);return b.returnValue}
function Bz(a,b,c,d){b&&b.length&&b.forEach(function(e){var f=yz(e,"action")||yz(e,"command")||yz(e,"endpoint");if(f){var g="yt"+f;var h=xz.get(g);h?g=h:(f="yt-"+f.replace(/([A-Z])/g,"-$1").toLowerCase(),xz.set(g,f),g=f);Ct(e,rl)&&(g+="-"+Ct(e,rl).signal.toLowerCase().replace(/_/g,"-"))}else g=null;g&&(P("handle_service_request_actions")&&e.commandMetadata&&e.commandMetadata.webCommandMetadata&&e.commandMetadata.webCommandMetadata.sendPost?c&&P("use_source_element_if_present_for_actions")?Cz(c,[e]):
Cz(a,[e]):Az(a,[e,c,d]))})}
function Cz(a,b){var c=[a];b&&c.push.apply(c,b);b=Az(a,c);return 0<b.length&&(b=b[0],zz(a,"yt-service-request-sent",b),b&&b.ajaxPromise)?(b.ajaxPromise.then(function(d){zz(a,"yt-service-request-completed",d)},function(d){zz(a,"yt-service-request-error",{error:d,
params:c})},a),b.ajaxPromise):bg()}
;function Lx(a,b,c){b=void 0===b?{}:b;var d,e=null==(d=Ct(a.commandMetadata,sl))?void 0:d.url;d=b.form||{};!c||d.element||d.skipDefaultElement||(b.form=b.form||{},b.form.element=c);if(e&&"/service_ajax"!==e)return{type:0,command:a,form:b.form};if(P("kevlar_service_command_check")){if(c=wt().resolve(qx),Mv(a,c.j))return Object.assign({},{type:1,command:a},b)}else{var f;if(null==(f=Ct(a.commandMetadata,sl))?0:f.apiUrl)return Object.assign({},{type:1,command:a},b)}return{type:2,command:a,form:b.form}}
function Jx(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);if(b)return[Cz(b,[a.command,c,a.vc])]}return[]}
function Kx(a){if(a.form){var b=a.form,c=Object.assign({},b);b=b.element;c=(delete c.element,c);b&&Bz(b,[a.command],b,c)}}
;function Dz(a,b,c){J.call(this);var d=this;c=c||O("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.targetOrigin="*";this.l=c;this.sessionId=null;this.channel="widget";this.I=!!a;this.v=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.I&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.targetOrigin=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.s||0<=gb(d.s,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.s=this.i=this.m=null;window.addEventListener("message",this.v)}
v(Dz,J);Dz.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){bn(d)}}};
Dz.prototype.M=function(){window.removeEventListener("message",this.v);J.prototype.M.call(this)};function Ez(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Dz(!!O("WIDGET_ID_ENFORCE")),b=this.Ie.bind(this);a.m=b;a.s=null;this.h.channel="widget";if(a=O("WIDGET_ID"))this.h.sessionId=a}
k=Ez.prototype;k.Ie=function(a,b,c){"addEventListener"===a&&b?this.Gc(b[0],c):this.Wc(a,b,c)};
k.Wc=function(){};
k.zc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
k.Gc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.zc(a,b)),this.j[a]=!0)};
k.addEventListener=function(){};
k.ne=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Cc());this.sendMessage("onReady");hb(this.i,this.Gd,this);this.i=[]};
k.Cc=function(){return null};
function Fz(a,b){a.sendMessage("infoDelivery",b)}
k.Gd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
k.sendMessage=function(a,b){this.Gd({event:a,info:void 0===b?null:b})};
k.dispose=function(){this.h=null};var Gz={},Hz=(Gz["api.invalidparam"]=2,Gz.auth=150,Gz["drm.auth"]=150,Gz["heartbeat.net"]=150,Gz["heartbeat.servererror"]=150,Gz["heartbeat.stop"]=150,Gz["html5.unsupportedads"]=5,Gz["fmt.noneavailable"]=5,Gz["fmt.decode"]=5,Gz["fmt.unplayable"]=5,Gz["html5.missingapi"]=5,Gz["html5.unsupportedlive"]=5,Gz["drm.unavailable"]=5,Gz["mrm.blocked"]=151,Gz);var Iz=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Jz(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Kz(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=t(Iz);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Lz(a,b,c,d){if(Ta(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Mz(a){Ez.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Ue.bind(this));this.addEventListener("onVolumeChange",this.Ve.bind(this));this.addEventListener("onApiChange",this.Pe.bind(this));this.addEventListener("onPlaybackQualityChange",this.Re.bind(this));this.addEventListener("onPlaybackRateChange",this.Se.bind(this));this.addEventListener("onStateChange",this.Te.bind(this));this.addEventListener("onWebglSettingsChanged",
this.We.bind(this))}
v(Mz,Ez);k=Mz.prototype;
k.Wc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Jz(a)){var d=b;if(Ta(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Kz(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Kz(e);break;case "loadPlaylist":case "cuePlaylist":e=Lz(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Jz(a)&&Fz(this,this.Cc())}};
k.Gc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Ez.prototype.Gc.call(this,a,b)};
k.zc=function(a,b){var c=this,d=Ez.prototype.zc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
k.onReady=function(){var a=this.ne.bind(this);this.h.i=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?Hz[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
k.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
k.Cc=function(){if(!this.api)return null;var a=this.api.getApiInterface();mb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
k.Te=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Fz(this,a)};
k.Re=function(a){Fz(this,{playbackQuality:a})};
k.Se=function(a){Fz(this,{playbackRate:a})};
k.Pe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.api.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Ve=function(){Fz(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
k.Ue=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Fz(this,a)};
k.We=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Fz(this,a)};
k.dispose=function(){Ez.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Nz(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Cd,this)}
v(Nz,J);k=Nz.prototype;k.start=function(){this.started||this.h()||(this.started=!0,this.connection.lb("RECEIVING"))};
k.lb=function(a,b){this.started&&!this.h()&&this.connection.lb(a,b)};
k.Cd=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Oz(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Pz(a,c))&&this.lb(a,c))}}};
k.addListener=function(a){if(!(a in this.i)){var b=this.Qe.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
k.Qe=function(a,b){this.started&&!this.h()&&this.connection.lb(a,this.Bc(a,b))};
k.Bc=function(a,b){if(null!=b)return{value:b}};
k.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
k.M=function(){var a=this.connection;a.h()||mj(a.i,"command",this.Cd,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.M.call(this)};function Qz(a,b){Nz.call(this,b);this.api=a;this.start()}
v(Qz,Nz);Qz.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Qz.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Oz(a,b){switch(a){case "loadVideoById":return a=Kz(b),[a];case "cueVideoById":return a=Kz(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Lz(b),[a];case "cuePlaylist":return a=Lz(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Pz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Qz.prototype.Bc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Nz.prototype.Bc.call(this,a,b)};
Qz.prototype.M=function(){Nz.prototype.M.call(this);delete this.api};function Rz(a){a=void 0===a?!1:a;J.call(this);this.i=new lj(a);Re(this,this.i)}
ab(Rz,J);Rz.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Rz.prototype.m=function(a,b){this.h()||this.i.eb.apply(this.i,arguments)};function Sz(a,b,c){Rz.call(this);this.l=a;this.j=b;this.id=c}
v(Sz,Rz);Sz.prototype.lb=function(a,b){this.h()||this.l.lb(this.j,this.id,a,b)};
Sz.prototype.M=function(){this.j=this.l=null;Rz.prototype.M.call(this)};function Tz(a,b,c){J.call(this);this.i=a;this.origin=c;this.j=Ws(window,"message",this.l.bind(this));this.connection=new Sz(this,a,b);Re(this,this.connection)}
v(Tz,J);Tz.prototype.lb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
Tz.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
Tz.prototype.M=function(){Xs(this.j);this.i=null;J.prototype.M.call(this)};function Uz(){this.state=1;this.h=null}
k=Uz.prototype;k.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=Ab();d=f?f.createScript(d):d;d=new Fb(d,Eb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Db("From proto message. b/166824318"),e=Jb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());Vz(this,d,e,a.program,b,c)}else Hu(Error("Cannot initialize botguard without program"))};
function Vz(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,Gy(c,function(){window[g]?Wz(a,d,g,e):(a.state=3,Ly(c),Hu(new vo("Unable to load Botguard","from "+c)))},f)):b?(f=Kf("SCRIPT"),b instanceof Fb?(b instanceof Fb&&b.constructor===Fb?b=b.j:(Qa(b),b="type_error:SafeScript"),f.textContent=b,vi(f)):f.textContent=b,f.nonce=vc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?Wz(a,d,g,e):(a.state=4,Hu(new vo("Unable to load Botguard from JS")))):Hu(new vo("Unable to load VM; no url or JS provided"))}
function Wz(a,b,c,d){a.state=5;try{var e=new li({program:b,re:c,Je:P("att_web_record_metrics")});e.Ye.then(function(){a.state=6;d&&d(b)});
a.Rc(e)}catch(f){a.state=7,f instanceof Error&&Hu(f)}}
k.invoke=function(a){a=void 0===a?{}:a;return this.Uc()?this.Pd({gd:a}):null};
k.dispose=function(){this.Xc()};
k.Xc=function(){this.Rc(null);this.state=8};
k.Uc=function(){return!!this.h};
k.Pd=function(a){return this.h.Jd(a)};
k.Rc=function(a){Pe(this.h);this.h=a};function Xz(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Yz(){Uz.apply(this,arguments)}
v(Yz,Uz);Yz.prototype.Xc=function(){this.state=8};
Yz.prototype.Rc=function(a){var b;null==(b=Xz())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Jd.bind(a)},y("yt.abuse.playerAttLoader",b),y("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(y("yt.abuse.playerAttLoader",null),y("yt.abuse.playerAttLoaderRun",null))};
Yz.prototype.Uc=function(){return!!Xz()};
Yz.prototype.Pd=function(a){return Xz().bgvmc(a)};var Zz=new Yz;function $z(){return Zz.Uc()}
function aA(a){a=void 0===a?{}:a;return Zz.invoke(a)}
;function bA(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||vb(b);this.assets=a.assets||{};this.attrs=a.attrs||vb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
bA.prototype.clone=function(){var a=new bA,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Qa(c)?a[b]=vb(c):a[b]=c}return a};var cA=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function dA(a){a=a||"";if(window.spf){var b=a.match(cA);spf.style.load(a,b?b[1]:"",void 0)}else eA(a)}
function eA(a){var b=fA(a),c=document.getElementById(b),d=c&&Cy(c,"loaded");d||c&&!d||(c=gA(a,b,function(){if(!Cy(c,"loaded")){Ay(c);mt(b);var e=$a(nt,b);wn(e,0)}}))}
function gA(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Qk(a);sc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function fA(a){var b=Kf("A");rc(b,new Nb(a,Ob));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+xc(a)}
;function hA(){J.call(this);this.i=[]}
v(hA,J);hA.prototype.M=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}J.prototype.M.call(this)};function iA(){hA.apply(this,arguments)}
v(iA,hA);function jA(a,b,c,d,e){J.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.Vb=e;this.za=!1;this.api={};this.ma=this.s=null;this.T=new lj;this.i={};this.ba=this.Ea=this.elementId=this.sb=this.config=null;this.X=!1;this.l=this.I=null;this.na={};this.Wb=["onReady"];this.lastError=null;this.Ib=NaN;this.P={};this.Xb=new iA(this);this.ea=0;this.j=this.m=a;Re(this,this.T);kA(this);lA(this);Re(this,this.Xb);c?this.ea=wn(function(){f.loadNewVideoConfig(c)},0):d&&(mA(this),nA(this))}
v(jA,J);k=jA.prototype;k.getId=function(){return this.v};
k.loadNewVideoConfig=function(a){if(!this.h()){this.ea&&(window.clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof bA||(b=new bA(b));this.config=b;this.setConfig(a);nA(this);this.isReady()&&oA(this)}};
function mA(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
k.setConfig=function(a){this.sb=a;this.config=pA(a);mA(this);if(!this.Ea){var b;this.Ea=qA(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Gi(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Gi(Number(a)||a))};
function oA(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function rA(a){var b=!0,c=sA(a);c&&a.config&&(a=tA(a),b=Cy(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function nA(a){if(!a.h()&&!a.X){var b=rA(a);if(b&&"html5"===(sA(a)?"html5":null))a.ba="html5",a.isReady()||uA(a);else if(vA(a),a.ba="html5",b&&a.l&&a.m)a.m.appendChild(a.l),uA(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.I=function(){c=!0;var d=wA(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?pA(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Vb);uA(a)};
a.X=!0;b?a.I():(Gy(tA(a),a.I),(b=xA(a))&&dA(b),yA(a)&&!c&&y("yt.player.Application.create",null))}}}
function sA(a){var b=Jf(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function uA(a){if(!a.h()){var b=sA(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!wA(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}zA(a)}else a.Ib=wn(function(){uA(a)},50)}}
function zA(a){kA(a);a.za=!0;var b=sA(a);if(b){a.s=AA(a,b,"addEventListener");a.ma=AA(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=AA(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);oA(a);a.Ea&&a.Ea(a.api);a.T.eb("onReady",a.api)}
function AA(a,b,c){var d=b[c];return function(){var e=Ma.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Hu(f))}}}
function kA(a){a.za=!1;if(a.ma)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ma(b,a.i[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.P={};a.s=null;a.ma=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.sb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
k.isReady=function(){return this.za};
function lA(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){mt("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){mt("WATCH_LATER_VIDEO_REMOVED",b)})}
k.addEventListener=function(a,b){var c=this,d=qA(this,b);d&&(0<=gb(this.Wb,a)||this.i[a]||(b=BA(this,a),this.s&&this.s(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&wn(function(){d(c.api)},0))};
k.removeEventListener=function(a,b){this.h()||(b=qA(this,b))&&mj(this.T,a,b)};
function qA(a,b){var c=b;if("string"===typeof b){if(a.na[b])return a.na[b];c=function(){var d=Ma.apply(0,arguments),e=B(b);if(e)try{e.apply(x,d)}catch(f){Gu(f)}};
a.na[b]=c}return c?c:null}
function BA(a,b){var c="ytPlayer"+b+a.v;a.i[b]=c;x[c]=function(d){var e=wn(function(){if(!a.h()){try{a.T.eb(b,null!=d?d:void 0)}catch(h){Hu(new vo("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.P,g=String(e);g in f&&delete f[g]}},0);
sb(a.P,String(e))};
return c}
k.getPlayerType=function(){return this.ba||(sA(this)?"html5":null)};
k.getLastError=function(){return this.lastError};
function vA(a){a.cancel();kA(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=sA(a);b&&(rA(a)||!yA(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.I&&My(tA(this),this.I);window.clearTimeout(this.Ib);this.X=!1};
k.M=function(){vA(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){Gu(b)}this.na=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(x[this.i[a]]=null);this.sb=this.config=this.api=null;delete this.m;delete this.j;J.prototype.M.call(this)};
function yA(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function tA(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function xA(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function wA(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===en(c||"","&")[b]}
function pA(a){for(var b={},c=t(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?vb(e):e}return b}
;var CA={},DA="player_uid_"+(1E9*Math.random()>>>0);function EA(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Jf(c):c;var e=DA+"_"+Ua(c),f=CA[e];if(f&&d)return FA(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new jA(c,e,a,b,void 0);CA[e]=f;mt("player-added",f.api);Se(f,function(){delete CA[f.getId()]});
return f.api}
function FA(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var GA=null,HA=null,IA=null;function JA(){KA()}
function LA(){KA()}
function KA(){var a=GA.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Ix(a){var b,c;if(a=null==(b=a.command)?void 0:null==(c=b.urlEndpoint)?void 0:c.url)b=window,c=pi(a),void 0!==c&&b.open(c,void 0,void 0);return[]}
function MA(){GA&&GA.sendAbandonmentPing&&GA.sendAbandonmentPing();O("PL_ATT")&&Zz.dispose();for(var a=Pi,b=0,c=Yy.length;b<c;b++)a.Ga(Yy[b]);Yy.length=0;Ly("//static.doubleclick.net/instream/ad_status.js");Zy=!1;Wm("DCLKSTAT",0);Qe(IA,HA);GA&&(GA.removeEventListener("onVideoDataChange",JA),GA.destroy())}
;function NA(a,b,c){a="ST-"+xc(a).toString(36);b=b?Gc(b):"";c=c||5;rv()&&co(a,b,c)}
;function OA(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=O("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=O("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=Bc(window.location.href);g&&f.push(g);g=Bc(d);if(0<=gb(f,g)||!g&&0==d.lastIndexOf("/",0))if(P("autoescape_tempdata_url")&&(f=document.createElement("a"),rc(f,d),d=f.href),d&&(d=Cc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:bv()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
NA(d,b,h)}else NA(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var p=void 0===p?window:p;c=p.location;a=Ic(a,l)+m;var r=void 0===r?zi:r;a:{r=void 0===r?zi:r;for(l=0;l<r.length;++l)if(m=r[l],m instanceof xi&&m.ye(a)){r=new Nb(a,Ob);break a}r=void 0}r=pi(r||Tb);void 0!==r&&(c.href=r)}return!0}
;y("yt.setConfig",Wm);y("yt.config.set",Wm);y("yt.setMsg",hv);y("yt.msgs.set",hv);y("yt.logging.errors.log",Gu);
y("writeEmbed",function(){var a=O("PLAYER_CONFIG");if(!a){var b=O("PLAYER_VARS");b&&(a={args:b})}Bv(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=O("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);bx("embed",["ol"]);c=O("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=kn(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&bx("watch",["pbs","pbu","pbp"]);GA=EA(a,c);P("embeds_enable_server_driven_watch_again_on_youtube")&&!Hx.h&&(Hx.h=new Hx);GA.addEventListener("onVideoDataChange",JA);GA.addEventListener("onReady",LA);P("embeds_enable_server_driven_watch_again_on_youtube")&&GA.addEventListener("innertubeCommand",function(f){Mx(Hx.h,f)});
a=O("POST_MESSAGE_ID","player");O("ENABLE_JS_API")?IA=new Mz(GA):O("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(HA=new Tz(window.parent,a,b),IA=new Qz(GA,HA.connection));$y();P("ytidb_create_logger_embed_killswitch")||Ko();a={};qz.h||(qz.h=new qz);qz.h.install((a.flush_logs={callback:function(){Wt()}},a));
Ms();P("ytidb_clear_embedded_player")&&Pi.ia(function(){var f,g;if(!Gx){var h=wt(),l={Oc:Fx,Nd:Ex};h.h.set(l.Oc,l);l={wc:{feedbackEndpoint:Ov(zx),modifyChannelNotificationPreferenceEndpoint:Ov(Ax),playlistEditEndpoint:Ov(Bx),subscribeEndpoint:Ov(xx),unsubscribeEndpoint:Ov(yx),webPlayerShareEntityServiceEndpoint:Ov(Cx)}};var m=Lv(),p={};m&&(p.client_location=m);void 0===f&&(f=Yn());void 0===g&&(g=h.resolve(Fx));kx(l,g,f,p);f={Oc:qx,Od:jx.h};h.h.set(f.Oc,f);Gx=h.resolve(qx)}zy()})});
var PA=$m(function(){fx();Cv();P("embeds_web_enable_ve_logging_unification")||(ey.h||(ey.h=new ey),fy())}),QA=$m(function(a){a.persisted||(fx(),Cv())}),RA=$m(function(a){P("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?MA():a.persisted||MA()}),SA=$m(MA);
window.addEventListener?(window.addEventListener("load",PA),window.addEventListener("pageshow",QA),window.addEventListener("pagehide",RA)):window.attachEvent&&(window.attachEvent("onload",PA),window.attachEvent("onunload",SA));y("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||$z);y("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||aA);y("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||az);
y("yt.player.exports.navigate",B("yt.player.exports.navigate")||OA);y("yt.util.activity.init",B("yt.util.activity.init")||at);y("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||dt);y("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||bt);}).call(this);
