(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function p(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
p("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
p("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function fa(a){return a.raw=a}
function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ja(a){if(!(a instanceof Array)){a=r(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||la});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},pa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),qa;
if("function"==typeof Object.setPrototypeOf)qa=Object.setPrototypeOf;else{var ra;a:{var sa={a:!0},ta={};try{ta.__proto__=sa;ra=ta.a;break a}catch(a){}ra=!1}qa=ra?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=qa;
function v(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ta=b.prototype}
function va(){this.v=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.ma=this.j=null}
function wa(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
va.prototype.V=function(a){this.i=a};
function xa(a,b){a.j={kd:b,ud:!0};a.h=a.s||a.m}
va.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
va.prototype.A=function(a){this.h=a};
function ya(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.s=0}
function Ba(a){a.s=0;var b=a.j.kd;a.j=null;return b}
function Ca(a){a.ma=[a.j];a.s=0;a.m=0}
function Ea(a){var b=a.ma.splice(0)[0];(b=a.j=a.j||b)?b.ud?a.h=a.s||a.m:void 0!=b.A&&a.m<b.A?(a.h=b.A,a.j=null):a.h=a.m:a.h=0}
function Fa(a){this.h=new va;this.i=a}
function Ga(a,b){wa(a.h);var c=a.h.l;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ha(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.l=null,xa(a.h,g),Ia(a)}a.h.l=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,xa(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ud)throw b.kd;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){wa(a.h);a.h.l?b=Ha(a,a.h.l.next,b,a.h.V):(a.h.V(b),b=Ia(a));return b};
this.throw=function(b){wa(a.h);a.h.l?b=Ha(a,a.h.l["throw"],b,a.h.V):(xa(a.h,b),b=Ia(a));return b};
this.return=function(b){return Ga(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ka(new Ja(new Fa(a)))}
function La(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
p("Reflect",function(a){return a?a:{}});
p("Reflect.construct",function(){return pa});
p("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
p("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(n){l||(l=!0,m.call(h,n))}}
var h=this,l=!1;return{resolve:g(this.R),reject:g(this.m)}};
b.prototype.R=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Y(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.L(g):this.s(g)}};
b.prototype.L=function(g){var h=void 0;try{h=g.then}catch(l){this.m(l);return}"function"==typeof h?this.aa(h,g):this.s(g)};
b.prototype.m=function(g){this.V(2,g)};
b.prototype.s=function(g){this.V(1,g)};
b.prototype.V=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.X();this.ma()};
b.prototype.X=function(){var g=this;e(function(){if(g.G()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.G=function(){if(this.v)return!1;var g=da.CustomEvent,h=da.Event,l=da.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return l(g)};
b.prototype.ma=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.Y=function(g){var h=this.l();g.cc(h.resolve,h.reject)};
b.prototype.aa=function(g,h){var l=this.l();try{g.call(h,l.resolve,l.reject)}catch(m){l.reject(m)}};
b.prototype.then=function(g,h){function l(u,t){return"function"==typeof u?function(z){try{m(u(z))}catch(C){n(C)}}:t}
var m,n,q=new b(function(u,t){m=u;n=t});
this.cc(l(g,m),l(h,n));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.cc=function(g,h){function l(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(l):this.i.push(l);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var m=r(g),n=m.next();!n.done;n=m.next())d(n.value).cc(h,l)})};
b.all=function(g){var h=r(g),l=h.next();return l.done?d([]):new b(function(m,n){function q(z){return function(C){u[z]=C;t--;0==t&&m(u)}}
var u=[],t=0;do u.push(void 0),t++,d(l.value).cc(q(u.length-1),n),l=h.next();while(!l.done)})};
return b});
p("WeakMap",function(a){function b(l){this.h=(h+=Math.random()+1).toString();if(l){l=r(l);for(var m;!(m=l.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(l){var m=typeof l;return"object"===m&&null!==l||"function"===m}
function e(l){if(!ka(l,g)){var m=new c;ba(l,g,{value:m})}}
function f(l){var m=Object[l];m&&(Object[l]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),m=Object.seal({}),n=new a([[l,2],[m,3]]);if(2!=n.get(l)||3!=n.get(m))return!1;n.delete(l);n.set(m,4);return!n.has(l)&&4==n.get(m)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,m){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ka(l,g))throw Error("WeakMap key fail: "+l);l[g][this.h]=m;return this};
b.prototype.get=function(l){return d(l)&&ka(l,g)?l[g][this.h]:void 0};
b.prototype.has=function(l){return d(l)&&ka(l,g)&&ka(l[g],this.h)};
b.prototype.delete=function(l){return d(l)&&ka(l,g)&&ka(l[g],this.h)?delete l[g][this.h]:!1};
return b});
p("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var m=h.h;return ea(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:l(m)};m=null}return{done:!0,value:void 0}})}
function d(h,l){var m=l&&typeof l;"object"==m||"function"==m?f.has(l)?m=f.get(l):(m=""+ ++g,f.set(l,m)):m="p_"+l;var n=h.data_[m];if(n&&ka(h.data_,m))for(h=0;h<n.length;h++){var q=n[h];if(l!==l&&q.key!==q.key||l===q.key)return{id:m,list:n,index:h,entry:q}}return{id:m,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=r(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(r([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var m=l.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=l:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:l},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(l,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
p("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
p("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
p("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
p("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
p("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
p("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Na(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
p("Array.prototype.entries",function(a){return a?a:function(){return Na(this,function(b,c){return[b,c]})}});
p("Array.prototype.keys",function(a){return a?a:function(){return Na(this,function(b){return b})}});
p("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
p("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
p("Array.prototype.values",function(a){return a?a:function(){return Na(this,function(b,c){return c})}});
p("Object.setPrototypeOf",function(a){return a||ua});
p("Set",function(a){function b(c){this.h=new Map;if(c){c=r(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(r([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
p("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
p("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ma(this,b,"includes").indexOf(b,c||0)}});
p("globalThis",function(a){return a||da});
p("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Oa=Oa||{},y=this||self;function A(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Pa(a,b){var c=B("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function B(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Qa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ra(a){var b=Qa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ta(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ua(a){return Object.prototype.hasOwnProperty.call(a,Va)&&a[Va]||(a[Va]=++Wa)}
var Va="closure_uid_"+(1E9*Math.random()>>>0),Wa=0;function Xa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ya(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Za=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa:Ya;return Za.apply(null,arguments)}
function $a(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function ab(a,b){function c(){}
c.prototype=b.prototype;a.ta=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.qg=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
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
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:bb,createScript:bb,createScriptURL:bb})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.j=a===Cb&&b||""}
Bb.prototype.i=!0;Bb.prototype.h=function(){return this.j};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a,b){this.j=b===Eb?a:"";this.i=!0}
Fb.prototype.toString=function(){return this.j.toString()};
Fb.prototype.h=function(){return this.j.toString()};
function Gb(a){var b=Ab();a=b?b.createScript(a):a;return new Fb(a,Eb)}
var Hb=Gb("");function Ib(a,b){this.j=b===Jb?a:""}
Ib.prototype.toString=function(){return this.j+""};
Ib.prototype.i=!0;Ib.prototype.h=function(){return this.j.toString()};
function Kb(a){if(a instanceof Ib&&a.constructor===Ib)return a.j;Qa(a);return"type_error:TrustedResourceUrl"}
var Jb={};function Lb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Ib(a,Jb)}
;var Mb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Nb(a,b){return a<b?-1:a>b?1:0}
;function Ob(a,b){this.j=b===Pb?a:""}
Ob.prototype.toString=function(){return this.j.toString()};
Ob.prototype.i=!0;Ob.prototype.h=function(){return this.j.toString()};
function Qb(a){if(a instanceof Ob&&a.constructor===Ob)return a.j;Qa(a);return"type_error:SafeUrl"}
var Rb;try{new URL("s://g"),Rb=!0}catch(a){Rb=!1}var Sb=Rb,Pb={},Vb=new Ob("about:invalid#zClosurez",Pb);var Wb=Pa(610401301,!1),Xb=Pa(516931134,Pa(1,!0));function Yb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
var Zb,$b=y.navigator;Zb=$b?$b.userAgentData||null:null;function ac(a){return Wb?Zb?Zb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function D(a){return-1!=Yb().indexOf(a)}
;function bc(){return Wb?!!Zb&&0<Zb.brands.length:!1}
function cc(){return bc()?!1:D("Opera")}
function dc(){return bc()?!1:D("Trident")||D("MSIE")}
function ec(){return bc()?!1:D("Edge")}
function fc(){return bc()?ac("Microsoft Edge"):D("Edg/")}
function gc(){return D("Firefox")||D("FxiOS")}
function hc(){return D("Safari")&&!(ic()||(bc()?0:D("Coast"))||cc()||ec()||fc()||(bc()?ac("Opera"):D("OPR"))||gc()||D("Silk")||D("Android"))}
function ic(){return bc()?ac("Chromium"):(D("Chrome")||D("CriOS"))&&!ec()||D("Silk")}
function jc(){return D("Android")&&!(ic()||gc()||cc()||D("Silk"))}
function kc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function lc(a){var b=Yb();if("Internet Explorer"===a){if(dc())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=kc(c);
switch(a){case "Opera":if(cc())return b(["Version","Opera"]);if(bc()?ac("Opera"):D("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(ec())return b(["Edge"]);if(fc())return b(["Edg"]);break;case "Chromium":if(ic())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&gc()||"Safari"===a&&hc()||"Android Browser"===a&&jc()||"Silk"===a&&D("Silk")?(b=c[2])&&b[1]||"":""}
function mc(a){if(bc()&&"Silk"!==a){var b=Zb.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=lc(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])}
;var nc={};function oc(a){this.j=nc===nc?a:"";this.i=!0}
oc.prototype.h=function(){return this.j.toString()};
oc.prototype.toString=function(){return this.j.toString()};function pc(a,b){if(!(b instanceof Ob||b instanceof Ob)){b="object"==typeof b&&b.i?b.h():String(b);b:{var c=b;if(Sb){try{var d=new URL(c)}catch(e){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(e){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"!==c||(b="about:invalid#zClosurez");b=new Ob(b,Pb)}a.href=Qb(b)}
function rc(a,b){a.rel="stylesheet";a.href=Kb(b).toString();(b=sc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function tc(){return sc("script[nonce]")}
var uc=/^[\w+/_-]+[=]{0,2}$/;function sc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&uc.test(a)?a:"":""}
;function vc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var wc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xc(a){return a?decodeURI(a):a}
function yc(a,b){return b.match(wc)[a]||null}
function zc(a){return xc(yc(3,a))}
function Ac(a){var b=a.match(wc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Bc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function Cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Dc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)Cc(a[b],a[b+1],c);return c.join("&")}
function Ec(a){var b=[],c;for(c in a)Cc(c,a[c],b);return b.join("&")}
function Fc(a,b){var c=2==arguments.length?Dc(arguments[1],0):Dc(arguments,1);return Bc(a,c)}
function Gc(a,b){b=Ec(b);return Bc(a,b)}
function Hc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return Bc(a,b+c)}
function Ic(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Jc=/#|$/,Kc=/[?&]($|#)/;function Lc(a,b){for(var c=a.search(Jc),d=0,e,f=[];0<=(e=Ic(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Kc,"$1")}
;function Mc(a){y.setTimeout(function(){throw a;},0)}
;function Nc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;function Oc(){return Wb?!!Zb&&!!Zb.platform:!1}
function Pc(){return Oc()?"Android"===Zb.platform:D("Android")}
function Qc(){return D("iPhone")&&!D("iPod")&&!D("iPad")}
function Rc(){var a=Yb(),b="";if(Oc()?"Windows"===Zb.platform:D("Windows"))b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0";else if(Qc()||D("iPad")||D("iPod"))b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".");else if(Oc()?"macOS"===Zb.platform:D("Macintosh"))b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10";else if(-1!=Yb().toLowerCase().indexOf("kaios"))b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1];else if(Pc())b=/Android\s+([^\);]+)(\)|;)/,
b=(a=b.exec(a))&&a[1];else if(Oc()?"Chrome OS"===Zb.platform:D("CrOS"))b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1];a=0;b=Mb(String(b||"")).split(".");for(var c=Mb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Nb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Nb(0==f[2].length,0==
g[2].length)||Nb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Yc(a){Yc[" "](a);return a}
Yc[" "]=function(){};var Zc=cc(),$c=dc(),ad=D("Edge"),bd=D("Gecko")&&!(-1!=Yb().toLowerCase().indexOf("webkit")&&!D("Edge"))&&!(D("Trident")||D("MSIE"))&&!D("Edge"),cd=-1!=Yb().toLowerCase().indexOf("webkit")&&!D("Edge"),dd=Pc();function ed(){var a=y.document;return a?a.documentMode:void 0}
var fd;a:{var gd="",hd=function(){var a=Yb();if(bd)return/rv:([^\);]+)(\)|;)/.exec(a);if(ad)return/Edge\/([\d\.]+)/.exec(a);if($c)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(cd)return/WebKit\/(\S+)/.exec(a);if(Zc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
hd&&(gd=hd?hd[1]:"");if($c){var id=ed();if(null!=id&&id>parseFloat(gd)){fd=String(id);break a}}fd=gd}var jd=fd,kd;if(y.document&&$c){var ld=ed();kd=ld?ld:parseInt(jd,10)||void 0}else kd=void 0;var md=kd;var nd=Qc()||D("iPod"),od=D("iPad");jc();ic();var pd=hc()&&!(Qc()||D("iPad")||D("iPod"));var qd={},rd=null;function sd(a,b){Ra(a);void 0===b&&(b=0);td();b=qd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],l=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|l>>6];l=b[l&63];c[f++]=""+m+g+h+l}m=0;l=d;switch(a.length-e){case 2:m=a[e+1],l=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+l+d}return c.join("")}
function ud(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;vd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function vd(a,b){function c(l){for(;d<a.length;){var m=a.charAt(d++),n=rd[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}
td();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function td(){if(!rd){rd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));qd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===rd[f]&&(rd[f]=e)}}}}
;var wd="undefined"!==typeof Uint8Array,xd=!$c&&"function"===typeof btoa;function yd(a){if(!xd)return sd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var zd=/[-_.]/g,Ad={"-":"+",_:"/",".":"="};function Bd(a){return Ad[a]||""}
function Cd(a){return wd&&null!=a&&a instanceof Uint8Array}
var Dd={};var Ed;function Fd(a){if(a!==Dd)throw Error("illegal external caller");}
function Gd(a,b){Fd(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Gd.prototype.sizeBytes=function(){Fd(Dd);var a=this.h;if(null!=a&&!Cd(a))if("string"===typeof a)if(xd){zd.test(a)&&(a=a.replace(zd,Bd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=ud(a);else Qa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};var Hd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Id(a,b){if(Hd)return a[Hd]|=b;if(void 0!==a.Da)return a.Da|=b;Object.defineProperties(a,{Da:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Jd(a,b){var c=F(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Kd(a,c|b));return a}
function Ld(a,b){Hd?a[Hd]&&(a[Hd]&=~b):void 0!==a.Da&&(a.Da&=~b)}
function F(a){var b;Hd?b=a[Hd]:b=a.Da;return null==b?0:b}
function Kd(a,b){Hd?a[Hd]=b:void 0!==a.Da?a.Da=b:Object.defineProperties(a,{Da:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Md(a){Id(a,1);return a}
function Nd(a,b){Kd(b,(a|0)&-51)}
function Od(a,b){Kd(b,(a|18)&-41)}
;var Sd={};function Td(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Ud,Vd=Object.freeze(Kd([],23));function Wd(a){if(F(a.P)&2)throw Error();}
function Xd(a){var b=a.length;(b=b?a[b-1]:void 0)&&Td(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;var G=!Xb;function Yd(a){if(null!=a&&"number"!==typeof a)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof a+": "+a);return a}
function Zd(a){return a.displayName||a.name||"unknown type name"}
function $d(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Zd(b)+" but got "+(a&&Zd(a.constructor)));return a}
function ae(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Jc===Sd)return a;if(d)return be(a,c),new b(a)}
function be(a,b){var c=F(a),d=c;0===d&&(d|=b&16);d|=b&2;d!==c&&Kd(a,d)}
;function ce(a){var b=a.j+a.cb;return a.xa||(a.xa=a.P[b]={})}
function de(a,b,c){return-1===b?null:b>=a.j?a.xa?a.xa[b]:void 0:c&&a.xa&&(c=a.xa[b],null!=c)?c:a.P[b+a.cb]}
function H(a,b,c,d){Wd(a);return ee(a,b,c,d)}
function ee(a,b,c,d){a.m&&(a.m=void 0);if(b>=a.j||d)return ce(a)[b]=c,a;a.P[b+a.cb]=c;(c=a.xa)&&b in c&&delete c[b];return a}
function fe(a){return void 0!==ge(a,he,11,!1)}
function ie(a,b,c,d,e){var f=de(a,b,d);Array.isArray(f)||(f=Vd);var g=F(f);g&1||Md(f);if(e)g&2||Id(f,18),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&Ld(f,16):(f=Md(Array.prototype.slice.call(f)),ee(a,b,f,d))}return f}
function je(a,b,c,d){Wd(a);(c=ke(a,c))&&c!==b&&null!=d&&ee(a,c,void 0,!1);return ee(a,b,d)}
function ke(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=de(a,e)&&(0!==c&&ee(a,c,void 0,!1),c=e)}return c}
function ge(a,b,c,d){var e=de(a,c,d);b=ae(e,b,F(a.P));b!==e&&null!=b&&ee(a,c,b,d);return b}
function le(a,b,c,d){d=void 0===d?!1:d;b=ge(a,b,c,d);if(null==b)return b;if(!(F(a.P)&2)){var e=me(b);e!==b&&(b=e,ee(a,c,b,d))}return b}
function ne(a,b,c,d,e){var f=!!(e&2);G&&!a.i&&(a.i={});var g=G?a.i[c]:void 0,h=ie(a,c,1|(G?2:0),void 0,f);if(G?!g:h===Vd||!(F(h)&4)){var l=h;g=G?[]:void 0;h=!!(e&2);f=!!(F(l)&2);var m=l;!h&&f&&(l=Array.prototype.slice.call(l));var n=e|(f?2:0);e=f;for(var q=0,u=0;q<l.length;q++){var t=l[q];if(G){var z=b;Array.isArray(t)?(be(t,n),t=new z(t)):t=void 0}else t=ae(t,b,n);void 0!==t&&(e=e||!!(2&F(t.P)),G?g.push(t):l[u++]=t)}G?a.i[c]=g:u<q&&(l.length=u);b=l;e=!e;n=F(b);l=n|1;l=G?l|32:l|4;l=e?l|8:l&-9;n!=
l&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Kd(b,l));l=b;m!==l&&ee(a,c,l);G&&(h||1===d&&f)&&Id(g,18);(h||1===d)&&Object.freeze(G?g:l);return G?g:l}if(3===d)return G?g:h;f||(G?(f=Object.isFrozen(g),1!==d||f)?2===d&&f&&(g=Array.prototype.slice.call(g),a.i[c]=g):Object.freeze(g):(f=Object.isFrozen(h),1===d?f||Object.freeze(h):(d=F(h),m=d&-19,f&&(h=Array.prototype.slice.call(h),d=0,ee(a,c,h)),d!==m&&Kd(h,m))));return G?g:h}
function I(a,b,c,d){Wd(a);null!=d?$d(d,b):d=void 0;return ee(a,c,d)}
function oe(a,b,c,d,e){Wd(a);null!=e?$d(e,b):e=void 0;je(a,c,d,e)}
function pe(a,b,c,d,e){Wd(a);var f=null==d?Vd:G?Md([]):d;if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var l=d[h];$d(l,b);g=g&&!(F(l.P)&2);G&&(f[h]=l.P)}f=Jd(f,1|(g?8:0)|(G?0:4));G&&(a.i||(a.i={}),a.i[c]=d)}else G&&a.i&&(a.i[c]=void 0);return ee(a,c,f,e)}
function qe(a,b,c,d){var e=F(a.P);if(e&2)throw Error();e=ne(a,c,b,2,e);c=null!=d?$d(d,c):new c;a=G?ie(a,b,2,void 0,!1):void 0;e.push(c);G&&a.push(c.P);F(c.P)&2&&Ld(G?a:e,8)}
function re(a,b,c){Qa(c);return H(a,b,c)}
function se(){var a=new te;return H(a,1,1)}
function ue(a,b){return null==a?b:a}
function ve(a,b){return ue(de(a,b),"")}
;var we;function xe(a,b){return ye(b)}
function ye(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(F(a)&128))return a=Array.prototype.slice.call(a),Xd(a),a}else{if(Cd(a))return yd(a);if(a instanceof Gd){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=yd(b)}}}return a}
;function ze(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&F(a)&1?void 0:f&&F(a)&2?a:Ae(a,b,c,void 0!==d,e,f);else if(Td(a)){var g={},h;for(h in a)g[h]=ze(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Ae(a,b,c,d,e,f){var g=F(a);d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(var h=0;h<a.length;h++)a[h]=ze(a[h],b,c,d,e,f);c(g,a);return a}
function Be(a){return a.Jc===Sd?a.toJSON():ye(a)}
function Ce(a,b){a&128&&Xd(b)}
;function De(a,b,c){c=void 0===c?Od:c;if(null!=a){if(wd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=F(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Kd(a,d|18),a;a=Ae(a,De,d&4?Od:c,!0,!1,!0);b=F(a);b&4&&b&2&&Object.freeze(a);return a}return a.Jc===Sd?Ee(a):a}}
function Fe(a,b,c,d,e,f,g){(a=G?a.i&&a.i[c]:void 0)?(d=0<a.length?a[0].constructor:void 0,f=F(a),f&2||(a=jb(a,Ee),Od(f,a),Object.freeze(a)),pe(b,d,c,a,e)):H(b,c,De(d,f,g),e)}
function Ee(a){if(F(a.P)&2)return a;a=Ge(a,!0);Id(a.P,18);return a}
function Ge(a,b){var c=a.P,d=[];Id(d,16);var e=a.constructor.h;e&&d.push(e);e=a.xa;if(e){d.length=c.length;var f={};d[d.length-1]=f}0!==(F(c)&128)&&Xd(d);b=b||F(a.P)&2?Od:Nd;f=a.constructor;F(d);we=d;d=new f(d);we=void 0;a.td&&(d.td=a.td.slice());f=!!(F(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)Fe(a,d,h-a.cb,c[h],!1,f,b);if(e)for(var l in e)c=e[l],g=+l,Number.isNaN(g),Fe(a,d,g,c,!0,f,b);return d}
function me(a){if(!(F(a.P)&2))return a;var b=Ge(a,!1);b.m=a;return b}
;function K(a,b,c,d){null==a&&(a=we);we=void 0;var e=this.constructor.h;if(null==a){a=e?[e]:[];var f=48;var g=!0;d&&(f|=128);Kd(a,f)}else{if(!Array.isArray(a))throw Error();if(e&&e!==a[0])throw Error();f=Id(a,0)|32;g=0!==(16&f);if(d){if(f|=128,0<a.length){var h=a[a.length-1];if(Td(h)&&"g"in h){delete h.g;var l=!0,m;for(m in h){l=!1;break}l&&a.pop()}}}else if(128&f)throw Error();Kd(a,f)}this.cb=e?0:-1;this.i=void 0;this.P=a;a:{f=this.P.length;e=f-1;if(f&&(f=this.P[e],Td(f))){this.xa=f;this.j=e-this.cb;
break a}void 0!==b&&-1<b?(this.j=Math.max(b,e+1-this.cb),this.xa=void 0):this.j=Number.MAX_VALUE}if(!d&&this.xa&&"g"in this.xa)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=g&&!0;d=this.j;var n;for(g=0;g<c.length;g++)e=c[g],e<d?(e+=this.cb,(f=a[e])?He(f,b):a[e]=Vd):(n||(n=ce(this)),(f=n[e])?He(f,b):n[e]=Vd)}F(this.P)}
K.prototype.toJSON=function(){var a=this.P,b;Ud?b=a:b=Ae(a,Be,Ce,void 0,!1,!1);return b};
function Ie(a){Ud=!0;try{return JSON.stringify(a.toJSON(),xe)}finally{Ud=!1}}
K.prototype.clone=function(){return Ge(this,!1)};
function He(a,b){if(Array.isArray(a)){var c=F(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Kd(a,c|d)}}
K.prototype.Jc=Sd;K.prototype.toString=function(){return this.P.toString()};function Je(a){this.dd=a}
;function Ke(a,b,c){this.i=a;this.l=b;this.h=c||[];this.rb=new Map}
k=Ke.prototype;k.Zd=function(a){var b=La.apply(1,arguments),c=this.yc(b);c?c.push(new Je(a)):this.Hd(a,b)};
k.Hd=function(a){this.rb.set(this.md(La.apply(1,arguments)),[new Je(a)])};
k.yc=function(){var a=this.md(La.apply(0,arguments));return this.rb.has(a)?this.rb.get(a):void 0};
k.qe=function(){var a=this.yc(La.apply(0,arguments));return a&&a.length?a[0]:void 0};
k.clear=function(){this.rb.clear()};
k.md=function(){var a=La.apply(0,arguments);return a?a.join(","):"key"};function Le(a,b){Ke.call(this,a,3,b)}
v(Le,Ke);Le.prototype.j=function(a){var b=La.apply(1,arguments),c=0,d=this.qe(b);d&&(c=d.dd);this.Hd(c+a,b)};function Me(a,b){Ke.call(this,a,2,b)}
v(Me,Ke);Me.prototype.j=function(a){this.Zd(a,La.apply(1,arguments))};function Ne(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Oe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ra(d)?Oe.apply(null,d):Ne(d)}}
;function L(){this.ma=this.ma;this.V=this.V}
L.prototype.ma=!1;L.prototype.h=function(){return this.ma};
L.prototype.dispose=function(){this.ma||(this.ma=!0,this.M())};
function Pe(a,b){Qe(a,$a(Ne,b))}
function Qe(a,b){a.ma?b():(a.V||(a.V=[]),a.V.push(b))}
L.prototype.M=function(){if(this.V)for(;this.V.length;)this.V.shift()()};function Re(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Re.prototype.stopPropagation=function(){this.j=!0};
Re.prototype.preventDefault=function(){this.defaultPrevented=!0};function Se(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Te(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ue[c])c=Ue[c];else{c=String(c);if(!Ue[c]){var f=/function\s+([^\(]+)/m.exec(c);Ue[c]=f?f[1]:"[Anonymous]"}c=Ue[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Te(a,b){b||(b={});b[Ve(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Ve(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Te(a,b));return c}
function Ve(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ue={};var We=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function Xe(a,b){Re.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ab(Xe,Re);var Ye={2:"touch",3:"pen",4:"mouse"};
Xe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(bd){a:{try{Yc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ye[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Xe.ta.preventDefault.call(this)};
Xe.prototype.stopPropagation=function(){Xe.ta.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Xe.prototype.preventDefault=function(){Xe.ta.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ze="closure_listenable_"+(1E6*Math.random()|0);var $e=0;function af(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.hc=e;this.key=++$e;this.Pb=this.ac=!1}
function bf(a){a.Pb=!0;a.listener=null;a.proxy=null;a.src=null;a.hc=null}
;function cf(a){this.src=a;this.listeners={};this.h=0}
cf.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=df(a,b,d,e);-1<g?(b=a[g],c||(b.ac=!1)):(b=new af(b,this.src,f,!!d,e),b.ac=c,a.push(b));return b};
cf.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=df(e,b,c,d);return-1<b?(bf(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function ef(a,b){var c=b.type;c in a.listeners&&mb(a.listeners[c],b)&&(bf(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function df(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Pb&&f.listener==b&&f.capture==!!c&&f.hc==d)return e}return-1}
;var ff="closure_lm_"+(1E6*Math.random()|0),gf={},hf=0;function nf(a,b,c,d,e){if(d&&d.once)of(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)nf(a,b[f],c,d,e);else c=pf(c),a&&a[Ze]?a.Ma(b,c,Ta(d)?!!d.capture:!!d,e):qf(a,b,c,!1,d,e)}
function qf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ta(e)?!!e.capture:!!e,h=rf(a);h||(a[ff]=h=new cf(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=sf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)We||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(tf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");hf++}}
function sf(){function a(c){return b.call(a.src,a.listener,c)}
var b=uf;return a}
function of(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)of(a,b[f],c,d,e);else c=pf(c),a&&a[Ze]?a.l.add(String(b),c,!0,Ta(d)?!!d.capture:!!d,e):qf(a,b,c,!0,d,e)}
function vf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)vf(a,b[f],c,d,e);else(d=Ta(d)?!!d.capture:!!d,c=pf(c),a&&a[Ze])?a.l.remove(String(b),c,d,e):a&&(a=rf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=df(b,c,d,e)),(c=-1<a?b[a]:null)&&wf(c))}
function wf(a){if("number"!==typeof a&&a&&!a.Pb){var b=a.src;if(b&&b[Ze])ef(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(tf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);hf--;(c=rf(b))?(ef(c,a),0==c.h&&(c.src=null,b[ff]=null)):bf(a)}}}
function tf(a){return a in gf?gf[a]:gf[a]="on"+a}
function uf(a,b){if(a.Pb)a=!0;else{b=new Xe(b,this);var c=a.listener,d=a.hc||a.src;a.ac&&wf(a);a=c.call(d,b)}return a}
function rf(a){a=a[ff];return a instanceof cf?a:null}
var xf="__closure_events_fn_"+(1E9*Math.random()>>>0);function pf(a){if("function"===typeof a)return a;a[xf]||(a[xf]=function(b){return a.handleEvent(b)});
return a[xf]}
;function yf(){L.call(this);this.l=new cf(this);this.Ud=this;this.Aa=null}
ab(yf,L);yf.prototype[Ze]=!0;yf.prototype.addEventListener=function(a,b,c,d){nf(this,a,b,c,d)};
yf.prototype.removeEventListener=function(a,b,c,d){vf(this,a,b,c,d)};
function zf(a,b){var c=a.Aa;if(c){var d=[];for(var e=1;c;c=c.Aa)d.push(c),++e}a=a.Ud;c=b.type||b;"string"===typeof b?b=new Re(b,a):b instanceof Re?b.target=b.target||a:(e=b,b=new Re(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Af(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Af(g,c,!0,b)&&e,b.j||(e=Af(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Af(g,c,!1,b)&&e}
yf.prototype.M=function(){yf.ta.M.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,bf(d[e]);delete a.listeners[c];a.h--}}this.Aa=null};
yf.prototype.Ma=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function Af(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Pb&&g.capture==c){var h=g.listener,l=g.hc||g.src;g.ac&&ef(a.l,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function Bf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Bf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Cf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function Df(a,b){return a+Math.random()*(b-a)}
;function Ef(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
k=Ef.prototype;k.clone=function(){return new Ef(this.x,this.y)};
k.equals=function(a){return a instanceof Ef&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
k.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Ff(a,b){this.width=a;this.height=b}
k=Ff.prototype;k.clone=function(){return new Ff(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
k.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Gf(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Hf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function If(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Jf;function Kf(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!D("Presto")&&(a=function(){var e=Hf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Za(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!dc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.cd;c.cd=null;e()}};
return function(e){d.next={cd:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Lf(){this.i=this.h=null}
Lf.prototype.add=function(a,b){var c=Mf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Lf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Mf=new Bf(function(){return new Nf},function(a){return a.reset()});
function Nf(){this.next=this.scope=this.h=null}
Nf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Nf.prototype.reset=function(){this.next=this.scope=this.h=null};var Of,Pf=!1,Qf=new Lf;function Rf(a,b){Of||Sf();Pf||(Of(),Pf=!0);Qf.add(a,b)}
function Sf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);Of=function(){a.then(Tf)}}else Of=function(){var b=Tf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!ec()&&y.Window.prototype.setImmediate==y.setImmediate?(Jf||(Jf=Kf()),Jf(b)):y.setImmediate(b)}}
function Tf(){for(var a;a=Qf.remove();){try{a.h.call(a.scope)}catch(b){Mc(b)}Cf(Mf,a)}Pf=!1}
;function Uf(a){this.h=0;this.v=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=eb)try{var b=this;a.call(void 0,function(c){Vf(b,2,c)},function(c){Vf(b,3,c)})}catch(c){Vf(this,3,c)}}
function Wf(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
Wf.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var Xf=new Bf(function(){return new Wf},function(a){a.reset()});
function Yf(a,b,c){var d=Xf.get();d.j=a;d.i=b;d.context=c;return d}
function Zf(a){return new Uf(function(b,c){c(a)})}
Uf.prototype.then=function(a,b,c){return $f(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Uf.prototype.$goog_Thenable=!0;k=Uf.prototype;k.sc=function(a,b){return $f(this,null,a,b)};
k.catch=Uf.prototype.sc;k.cancel=function(a){if(0==this.h){var b=new ag(a);Rf(function(){bg(this,b)},this)}};
function bg(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?bg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):cg(c),dg(c,e,3,b)))}a.j=null}else Vf(a,3,b)}
function eg(a,b){a.i||2!=a.h&&3!=a.h||fg(a);a.l?a.l.next=b:a.i=b;a.l=b}
function $f(a,b,c,d){var e=Yf(null,null,null);e.h=new Uf(function(f,g){e.j=b?function(h){try{var l=b.call(d,h);f(l)}catch(m){g(m)}}:f;
e.i=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof ag?g(h):f(l)}catch(m){g(m)}}:g});
e.h.j=a;eg(a,e);return e.h}
k.hf=function(a){this.h=0;Vf(this,2,a)};
k.jf=function(a){this.h=0;Vf(this,3,a)};
function Vf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.hf,f=a.jf;if(d instanceof Uf){eg(d,Yf(e||eb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ta(d))try{var l=d.then;if("function"===typeof l){gg(d,l,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,fg(a),3!=b||c instanceof ag||hg(a,c))}}
function gg(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function fg(a){a.s||(a.s=!0,Rf(a.le,a))}
function cg(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
k.le=function(){for(var a;a=cg(this);)dg(this,a,this.h,this.v);this.s=!1};
function dg(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,ig(b,c,d);else try{b.l?b.j.call(b.context):ig(b,c,d)}catch(e){jg.call(null,e)}Cf(Xf,b)}
function ig(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function hg(a,b){a.m=!0;Rf(function(){a.m&&jg.call(null,b)})}
var jg=Mc;function ag(a){cb.call(this,a)}
ab(ag,cb);ag.prototype.name="cancel";function kg(a,b){yf.call(this);this.j=a||1;this.i=b||y;this.m=Za(this.gf,this);this.s=Date.now()}
ab(kg,yf);k=kg.prototype;k.enabled=!1;k.za=null;function lg(a,b){a.j=b;a.za&&a.enabled?(a.stop(),a.start()):a.za&&a.stop()}
k.gf=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.za=this.i.setTimeout(this.m,this.j-a):(this.za&&(this.i.clearTimeout(this.za),this.za=null),zf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
k.start=function(){this.enabled=!0;this.za||(this.za=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
k.stop=function(){this.enabled=!1;this.za&&(this.i.clearTimeout(this.za),this.za=null)};
k.M=function(){kg.ta.M.call(this);this.stop();delete this.i};
function mg(a,b,c){if("function"===typeof a)c&&(a=Za(a,c));else if(a&&"function"==typeof a.handleEvent)a=Za(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function ng(a){L.call(this);this.G=a;this.j=new Map;this.v=new Set;this.l=0;this.m=100;this.flushInterval=3E4;this.i=new kg(this.flushInterval);this.i.Ma("tick",this.ob,!1,this);Pe(this,this.i);this.s=!1}
v(ng,L);k=ng.prototype;k.sendIsolatedPayload=function(a){this.s=a;this.m=1};
function og(a){a.i.enabled||a.i.start();a.l++;a.l>=a.m&&a.ob()}
k.ob=function(){var a=this.j.values();a=[].concat(ja(a)).filter(function(b){return b.rb.size});
a.length&&this.G.flush(a,this.s);pg(a);this.l=0;this.i.enabled&&this.i.stop()};
k.Xc=function(a){var b=La.apply(1,arguments);this.j.has(a)||this.j.set(a,new Le(a,b))};
k.Yc=function(a){var b=La.apply(1,arguments);this.j.has(a)||this.j.set(a,new Me(a,b))};
function qg(a,b){return a.v.has(b)?void 0:a.j.get(b)}
k.uc=function(a){this.Td.apply(this,[a,1].concat(ja(La.apply(1,arguments))))};
k.Td=function(a,b){var c=La.apply(2,arguments),d=qg(this,a);d&&d instanceof Le&&(d.j(b,c),og(this))};
k.vc=function(a,b){var c=La.apply(2,arguments),d=qg(this,a);d&&d instanceof Me&&(d.j(b,c),og(this))};
function pg(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function rg(a){this.h=a;this.h.Xc("/client_streamz/bg/fiec",{Lb:3,Kb:"rk"},{Lb:2,Kb:"ec"})}
function sg(a,b,c){a.h.uc("/client_streamz/bg/fiec",b,c)}
function tg(a){this.h=a;this.h.Yc("/client_streamz/bg/fil",{Lb:3,Kb:"rk"})}
function ug(a){this.h=a;this.h.Xc("/client_streamz/bg/fsc",{Lb:3,Kb:"rk"})}
function vg(a){this.h=a;this.h.Yc("/client_streamz/bg/fsl",{Lb:3,Kb:"rk"})}
;var wg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function xg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=yg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=zg(a,h),d+=zg(a,h+4),e+=zg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return wg.toString(e)}
function yg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function zg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function Ag(a){K.call(this,a)}
v(Ag,K);var Bg=[1,2,3];function Cg(a){K.call(this,a)}
v(Cg,K);var Dg=[1,2,3];function Eg(a){K.call(this,a,-1,Fg)}
v(Eg,K);var Fg=[1];function Gg(a){K.call(this,a,-1,Hg)}
v(Gg,K);var Hg=[3,6,4];function Ig(a){K.call(this,a,-1,Jg)}
v(Ig,K);var Jg=[1];function Kg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Lg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(q){for(var u=g,t=0;64>t;t+=4)u[t/4]=q[t]<<24|q[t+1]<<16|q[t+2]<<8|q[t+3];for(t=16;80>t;t++)q=u[t-3]^u[t-8]^u[t-14]^u[t-16],u[t]=(q<<1|q>>>31)&4294967295;q=e[0];var z=e[1],C=e[2],E=e[3],M=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var S=E^z&(C^E);var Q=1518500249}else S=z^C^E,Q=1859775393;else 60>t?(S=z&C|E&(z|C),Q=2400959708):(S=z^C^E,Q=3395469782);S=((q<<5|q>>>27)&4294967295)+S+M+Q+u[t]&4294967295;M=E;E=C;C=(z<<30|z>>>2)&4294967295;z=q;q=S}e[0]=e[0]+q&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+C&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+M&4294967295}
function c(q,u){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var t=[],z=0,C=q.length;z<C;++z)t.push(q.charCodeAt(z));q=t}u||(u=q.length);t=0;if(0==m)for(;t+64<u;)b(q.slice(t,t+64)),t+=64,n+=64;for(;t<u;)if(f[m++]=q[t++],n++,64==m)for(m=0,b(f);t+64<u;)b(q.slice(t,t+64)),t+=64,n+=64}
function d(){var q=[],u=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var t=63;56<=t;t--)f[t]=u&255,u>>>=8;b(f);for(t=u=0;5>t;t++)for(var z=24;0<=z;z-=8)q[u++]=e[t]>>z&255;return q}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,n;a();return{reset:a,update:c,digest:d,he:function(){for(var q=d(),u="",t=0;t<q.length;t++)u+="0123456789ABCDEF".charAt(Math.floor(q[t]/16))+"0123456789ABCDEF".charAt(q[t]%16);return u}}}
;function Mg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Ng(Kg(d),a,c||null)].join(" "):null}
function Ng(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],hb(d,function(h){e.push(h)}),Og(e.join(" "));
var f=[],g=[];hb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];hb(d,function(h){e.push(h)});
a=Og(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Og(a){var b=Lg();b.update(a);return b.he().toLowerCase()}
;var Pg={};function Qg(a){this.h=a||{cookie:""}}
k=Qg.prototype;k.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{kc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
k.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Jg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.kc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
k.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Mb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{kc:0,path:b,domain:c});return d};
k.Bc=function(){return Rg(this).keys};
k.clear=function(){for(var a=Rg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Rg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Mb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Sg=new Qg("undefined"==typeof document?null:document);function Tg(a){return!!Pg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Ug(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Tg(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new Qg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Tg(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Vg(a,b,c,d){(a=y[a])||(a=(new Qg(document)).get(b));return a?Mg(a,c,d):null}
function Wg(a,b){b=void 0===b?!1:b;var c=Kg(String(y.location.href)),d=[];if(Ug(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new Qg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Mg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Tg(b)&&((b=Vg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Vg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Xg(a){K.call(this,a,-1,Yg)}
v(Xg,K);var Yg=[2];function Zg(a){this.h=this.i=this.j=a}
Zg.prototype.reset=function(){this.h=this.i=this.j};
Zg.prototype.getValue=function(){return this.i};function $g(a){var b=[];ah(new bh,a,b);return b.join("")}
function bh(){}
function ah(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ah(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ch(d,c),c.push(":"),ah(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ch(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var dh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},eh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ch(a,b){b.push('"',a.replace(eh,function(c){var d=dh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),dh[c]=d);return d}),'"')}
;function fh(){}
fh.prototype.h=null;fh.prototype.getOptions=function(){var a;(a=this.h)||(a={},gh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var hh;function ih(){}
ab(ih,fh);function jh(a){return(a=gh(a))?new ActiveXObject(a):new XMLHttpRequest}
function gh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
hh=new ih;function kh(a){yf.call(this);this.headers=new Map;this.R=a||null;this.i=!1;this.L=this.F=null;this.m=this.aa="";this.j=this.Y=this.v=this.X=!1;this.s=0;this.G=null;this.va="";this.ha=this.ia=!1}
ab(kh,yf);var lh=/^https?$/i,mh=["POST","PUT"],nh=[];function oh(a,b,c,d,e,f,g){var h=new kh;nh.push(h);b&&h.Ma("complete",b);h.l.add("ready",h.ee,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.ia=g);h.send(a,c,d,e)}
k=kh.prototype;k.ee=function(){this.dispose();mb(nh,this)};
k.send=function(a,b,c,d){if(this.F)throw Error("[goog.net.XhrIo] Object is active with another request="+this.aa+"; newUri="+a);b=b?b.toUpperCase():"GET";this.aa=a;this.m="";this.X=!1;this.i=!0;this.F=this.R?jh(this.R):jh(hh);this.L=this.R?this.R.getOptions():hh.getOptions();this.F.onreadystatechange=Za(this.yd,this);try{this.getStatus(),this.Y=!0,this.F.open(b,String(a),!0),this.Y=!1}catch(g){this.getStatus();ph(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=r(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=gb(mh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=r(c);for(d=b.next();!d.done;d=b.next())c=r(d.value),d=c.next().value,c=c.next().value,this.F.setRequestHeader(d,c);this.va&&(this.F.responseType=this.va);"withCredentials"in this.F&&this.F.withCredentials!==this.ia&&(this.F.withCredentials=this.ia);try{qh(this),0<this.s&&(this.ha=rh(this.F),this.getStatus(),this.ha?(this.F.timeout=this.s,this.F.ontimeout=Za(this.Md,
this)):this.G=mg(this.Md,this.s,this)),this.getStatus(),this.v=!0,this.F.send(a),this.v=!1}catch(g){this.getStatus(),ph(this,g)}};
function rh(a){return $c&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
k.Md=function(){"undefined"!=typeof Oa&&this.F&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),zf(this,"timeout"),this.abort(8))};
function ph(a,b){a.i=!1;a.F&&(a.j=!0,a.F.abort(),a.j=!1);a.m=b;sh(a);th(a)}
function sh(a){a.X||(a.X=!0,zf(a,"complete"),zf(a,"error"))}
k.abort=function(){this.F&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.F.abort(),this.j=!1,zf(this,"complete"),zf(this,"abort"),th(this))};
k.M=function(){this.F&&(this.i&&(this.i=!1,this.j=!0,this.F.abort(),this.j=!1),th(this,!0));kh.ta.M.call(this)};
k.yd=function(){this.h()||(this.Y||this.v||this.j?uh(this):this.Ie())};
k.Ie=function(){uh(this)};
function uh(a){if(a.i&&"undefined"!=typeof Oa)if(a.L[1]&&4==vh(a)&&2==a.getStatus())a.getStatus();else if(a.v&&4==vh(a))mg(a.yd,0,a);else if(zf(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(wh(a))zf(a,"complete"),zf(a,"success");else{try{var b=2<vh(a)?a.F.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";sh(a)}}finally{th(a)}}}
function th(a,b){if(a.F){qh(a);var c=a.F,d=a.L[0]?function(){}:null;
a.F=null;a.L=null;b||zf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function qh(a){a.F&&a.ha&&(a.F.ontimeout=null);a.G&&(y.clearTimeout(a.G),a.G=null)}
k.isActive=function(){return!!this.F};
k.isComplete=function(){return 4==vh(this)};
function wh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=yc(1,String(a.aa)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!lh.test(a?a.toLowerCase():"");c=b}return c}
function vh(a){return a.F?a.F.readyState:0}
k.getStatus=function(){try{return 2<vh(this)?this.F.status:-1}catch(a){return-1}};
k.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function xh(a){K.call(this,a)}
v(xh,K);function yh(a){K.call(this,a,-1,zh)}
v(yh,K);var zh=[1];function he(a){K.call(this,a)}
v(he,K);var Ah=["platform","platformVersion","architecture","model","uaFullVersion"];new yh;function te(a){K.call(this,a)}
v(te,K);function Bh(a){K.call(this,a,33,Ch)}
v(Bh,K);var Ch=[3,20,27];function Hh(a){K.call(this,a,17,Ih)}
v(Hh,K);var Ih=[3,5];function Jh(a){K.call(this,a,6,Kh)}
v(Jh,K);var Kh=[5];function Lh(a){K.call(this,a)}
v(Lh,K);var Mh;Mh=new function(a,b,c){this.h=a;this.fieldName=b;this.j=c;this.isRepeated=0;this.i=le;this.defaultValue=void 0}(175237375,{yg:0},Lh);function Nh(a,b,c,d,e,f,g,h,l,m,n){yf.call(this);var q=this;this.componentId="";this.j=[];this.Wb="";this.Xb=this.va=-1;this.Fb=!1;this.R=this.m=null;this.G=this.L=0;this.Xd=1;this.timeoutMillis=0;this.ia=!1;yf.call(this);this.logSource=a;this.Vb=b||function(){};
this.s=new Oh(a,f);this.Vd=d;this.network=n;this.Yd=$a(Df,0,1);this.Y=e||null;this.sessionIndex=c||null;this.aa=g||!1;this.pageId=l||null;this.logger=null;this.withCredentials=!h;this.pb=f||!1;!this.pb&&(65<=mc("Chromium")||45<=mc("Firefox")||12<=mc("Safari")||(Qc()||D("iPad")||D("iPod"))&&Rc());a=se();Ph(this.s,a);this.v=new Zg(1E4);this.i=new kg(this.v.getValue());Pe(this,this.i);m=Qh(this,m);nf(this.i,"tick",m,!1,this);this.X=new kg(6E5);Pe(this,this.X);nf(this.X,"tick",m,!1,this);this.aa||this.X.start();
this.pb||(nf(document,"visibilitychange",function(){"hidden"===document.visibilityState&&q.ha()}),nf(document,"pagehide",this.ha,!1,this))}
v(Nh,yf);function Qh(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
Nh.prototype.M=function(){this.ha();yf.prototype.M.call(this)};
function Rh(a){a.Y||(a.Y=.01>a.Yd()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.Y}
function Sh(a,b){a.v=new Zg(1>b?1:b);lg(a.i,a.v.getValue())}
Nh.prototype.log=function(a){a=a.clone();var b=this.Xd++;H(a,21,b);this.componentId&&H(a,26,this.componentId);if(!de(a,1)){b=a;var c=Date.now().toString();H(b,1,c)}null==de(a,15)&&H(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),I(a,Xg,16,b));for(;1E3<=this.j.length;)this.j.shift(),++this.L;this.j.push(a);zf(this,new Th(a));this.aa||this.i.enabled||this.i.start()};
Nh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.ia)Uh(this.s,3),Vh(this);else{var d=Date.now();if(this.Xb>d&&this.va<d)b&&b("throttled");else{Uh(this.s,1);var e=Wh(this.s,this.j,this.L,this.G);d={};var f=this.Vb();f&&(d.Authorization=f);var g=Rh(this);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g=Hc(g,"authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=Hc(g,"pageId",this.pageId));if(f&&this.Wb===f)b&&b("stale-auth-token");
else{this.j=[];this.i.enabled&&this.i.stop();this.L=0;var h=Ie(e),l;this.R&&this.R.isSupported(h.length)&&(l=this.R.compress(h));var m={url:g,body:h,ce:1,Oc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(t){c.v.reset();lg(c.i,c.v.getValue());if(t){var z=null;try{var C=JSON.parse(t.replace(")]}'\n",""));z=new Jh(C)}catch(E){}z&&(t=Number(ue(de(z,1),"-1")),0<t&&(c.va=Date.now(),c.Xb=c.va+t),z=Mh.j?Mh.i(z,Mh.j,Mh.h,!0):Mh.isRepeated?Mh.i(z,Mh.h,
!0):Mh.i(z,Mh.h,Mh.defaultValue,!0))&&(z=ue(de(z,1),-1),-1!=z&&(c.Fb||Sh(c,z)))}a&&a();c.G=0},q=function(t,z){var C=F(e.P),E=!!(C&2);
C=ne(e,Bh,3,E?1:2,C);var M=G?ie(e,3,3,void 0,E):C;if(!(E||F(M)&8)){for(E=0;E<C.length;E++){var S=C[E],Q=me(S);S!==Q&&(C[E]=Q,G&&(M[E]=Q.P))}Id(M,8)}M=c.v;M.h=Math.min(3E5,2*M.h);M.i=Math.min(3E5,M.h+Math.round(.2*(Math.random()-.5)*M.h));lg(c.i,c.v.getValue());401===t&&f&&(c.Wb=f);void 0===z&&(z=500<=t&&600>t||401===t||0===t);z&&(c.j=C.concat(c.j),c.aa||c.i.enabled||c.i.start());b&&b("net-send-failed",t);++c.G},u=function(){c.network?c.network.send(m,n,q):c.Vd(m,n,q)};
l?l.then(function(t){m.Oc["Content-Encoding"]="gzip";m.Oc["Content-Type"]="application/binary";m.body=t;m.ce=2;u()},function(){u()}):u()}}}};
Nh.prototype.ha=function(){Xh(this.s,!0);this.flush();Xh(this.s,!1)};
function Vh(a){Yh(a,function(b,c){b=Hc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,Ie(c))}catch(e){}a.ia&&!d&&(a.ia=!1);return d})}
function Yh(a,b){if(0!==a.j.length){var c=Lc(Rh(a),"format");c=Fc(c,"auth",a.Vb(),"authuser",a.sessionIndex||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=Wh(a.s,e,a.L,a.G);if(!b(c,f)){++a.G;break}a.L=0;a.G=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function Th(){Re.call(this,"event-logged",void 0)}
v(Th,Re);function Oh(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Hh;H(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));Ph(this,new te)}
function Ph(a,b){I(a.h,te,1,b);de(b,1)||H(b,1,1);a.i||(b=Zh(a),de(b,5)||H(b,5,a.locale));a.uach&&(b=Zh(a),le(b,yh,9)||I(b,yh,9,a.uach))}
function Uh(a,b){fe(le(a.h,te,1))&&(a=$h(a),H(a,1,b))}
function Xh(a,b){fe(le(a.h,te,1))&&(a=$h(a),H(a,2,b))}
function ai(a,b){var c=void 0===c?Ah:c;b(window,c).then(function(d){a.uach=d;d=Zh(a);I(d,yh,9,a.uach);return!0}).catch(function(){return!1})}
function Zh(a){a=le(a.h,te,1);var b=le(a,he,11);b||(b=new he,I(a,he,11,b));return b}
function $h(a){a=Zh(a);var b=le(a,xh,10);b||(b=new xh,H(b,2,!1),I(a,xh,10,b));return b}
function Wh(a,b,c,d){c=void 0===c?0:c;d=void 0===d?0:d;if(fe(le(a.h,te,1))){var e=$h(a);re(e,3,d)}a=a.h.clone();d=Date.now().toString();a=H(a,4,d);b=pe(a,Bh,3,b);c&&H(b,14,c);return b}
;function bi(a,b,c){oh(a.url,function(d){d=d.target;if(wh(d)){try{var e=d.F?d.F.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Oc,a.timeoutMillis,a.withCredentials)}
;function ci(a,b){L.call(this);this.s=a;this.Aa=b;this.l="https://play.google.com/log?format=json&hasfast=true";this.m=!1;this.Y=bi;this.i=""}
ab(ci,L);function di(a,b,c,d,e,f){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;L.call(this);f?a=f:(a=new ci(a,"0"),a.i=b,Pe(this,a),""!=c&&(a.l=c),d&&(a.m=!0),e&&(a.j=e),b=new Nh(a.s,a.R?a.R:Wg,a.Aa,a.Y,a.l,a.m,!1,a.va,void 0,void 0,a.aa?a.aa:void 0),Pe(a,b),a.G&&Ph(b.s,a.G),a.j&&(c=a.j,d=Zh(b.s),H(d,7,c)),a.X&&(b.R=a.X),a.i&&(b.componentId=a.i),a.v&&((c=a.v)?(b.m||(b.m=new Xg),c=Ie(c),H(b.m,4,c)):b.m&&H(b.m,4,void 0,!1)),a.ha&&(d=a.ha,b.m||(b.m=new Xg),c=b.m,d=
null==d?Vd:Jd(d,1),H(c,2,d)),a.L&&(c=a.L,b.Fb=!0,Sh(b,c)),a.ia&&ai(b.s,a.ia),a=b);this.i=a}
v(di,L);
di.prototype.flush=function(a){var b=a||[];if(b.length){a=new Ig;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new Gg;var h=H(g,1,f.i);var l=f;g=[];for(var m=0;m<l.h.length;m++)g.push(l.h[m].Kb);if(null==g)g=H(h,3,Vd);else{l=F(g);if(!(l&4)){if(l&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];Kd(g,l|5)}g=H(h,3,g)}h=[];l=[];m=r(f.rb.keys());for(var n=m.next();!n.done;n=m.next())l.push(n.value.split(","));for(m=0;m<l.length;m++){n=l[m];var q=f.l;for(var u=f.yc(n)||
[],t=[],z=0;z<u.length;z++){var C=u[z];C=C&&C.dd;var E=new Cg;switch(q){case 3:je(E,1,Dg,Number(C));break;case 2:je(E,2,Dg,Yd(Number(C)))}t.push(E)}q=t;for(u=0;u<q.length;u++){t=q[u];z=new Eg;t=I(z,Cg,2,t);z=n;C=[];E=f;for(var M=[],S=0;S<E.h.length;S++)M.push(E.h[S].Lb);E=M;for(M=0;M<E.length;M++){var Q=E[M],W=z[M];S=new Ag;switch(Q){case 3:je(S,1,Bg,String(W));break;case 2:Q=S;W=Number(W);Qa(W);je(Q,2,Bg,W);break;case 1:je(S,3,Bg,"true"==W)}C.push(S)}pe(t,Ag,1,C);h.push(t)}}pe(g,Eg,4,h);c.push(g);
e.clear()}pe(a,Gg,1,c);b=this.i;a instanceof Bh?b.log(a):(c=new Bh,a=Ie(a),a=H(c,8,a),b.log(a));this.i.flush()}};function ei(a){this.v=fi();this.m=new di(1828);this.h=new ng(this.m);this.s=new tg(this.h);this.j=new ug(this.h);this.l=new vg(this.h);this.i=new rg(this.h);this.Fa=xg(a)}
function fi(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function gi(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function hi(a){function b(z,C){Promise.resolve().then(function(){var E;if(null!=(E=c.ja)){var M=fi()-E.v;E.s.h.vc("/client_streamz/bg/fil",M,E.Fa)}g.resolve({ae:z,cf:C})})}
var c=this;this.i=!1;var d=a.program;var e=a.se;if(a.Me){var f;this.ja=null!=(f=a.ja)?f:new ei(e)}var g=new gi;this.j=g.promise;if(y[e])if(y[e].a){var h;null!=(h=this.ja)&&sg(h.i,h.Fa,3)}else{var l;null!=(l=this.ja)&&sg(l.i,l.Fa,2);var m;null!=(m=this.ja)&&m.h.ob()}else{var n;null!=(n=this.ja)&&sg(n.i,n.Fa,1);var q;null!=(q=this.ja)&&q.h.ob()}try{this.l=r((0,y[e].a)(d,b,!0)).next().value,this.bf=g.promise.then(function(){})}catch(z){var u;
null!=(u=this.ja)&&sg(u.i,u.Fa,4);var t;null!=(t=this.ja)&&t.h.ob();throw z;}}
hi.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=fi(),d;null!=(d=this.ja)&&d.j.h.uc("/client_streamz/bg/fsc",d.Fa);return this.j.then(function(e){var f=e.ae;return new Promise(function(g){f(function(h){var l;if(null!=(l=b.ja)){var m=fi()-c;l.l.h.vc("/client_streamz/bg/fsl",m,l.Fa)}g(h)},[a.fd,
a.df])})})};
hi.prototype.Jd=function(a){if(this.i)throw Error("Already disposed");var b=fi(),c;null!=(c=this.ja)&&c.j.h.uc("/client_streamz/bg/fsc",c.Fa);a=this.l([a.fd,a.df]);null!=(c=this.ja)&&(b=fi()-b,c.l.h.vc("/client_streamz/bg/fsl",b,c.Fa));return a};
hi.prototype.dispose=function(){var a;null!=(a=this.ja)&&a.h.ob();this.i=!0;this.j.then(function(b){(b=b.cf)&&b()})};
hi.prototype.h=function(){return this.i};var ii=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var ji;try{new URL("s://g"),ji=!0}catch(a){ji=!1}var ki=ji;var li={};function mi(){}
function ni(a){this.h=a}
v(ni,mi);ni.prototype.toString=function(){return this.h};function oi(a){var b="true".toString(),c=[new ni(pi[0].toLowerCase(),li)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ni)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var qi={};qi.Wd=Fb;qi.createScript=function(a){return Gb(a)};
qi.Gf=Hb;qi.isScript=function(a){return a instanceof Fb};
qi.kf=function(a){a instanceof Fb&&a.constructor===Fb?a=a.j:(Qa(a),a="type_error:SafeScript");return a};function ri(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function si(a,b){a.src=Kb(b);ri(a)}
;function ti(a){this.Ae=a}
function ui(a){return new ti(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var vi=[ui("data"),ui("http"),ui("https"),ui("mailto"),ui("ftp"),new ti(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function wi(a){var b=xi;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function yi(){var a=[];wi(function(b){a.push(b)});
return a}
var xi={mf:"allow-forms",nf:"allow-modals",pf:"allow-orientation-lock",qf:"allow-pointer-lock",rf:"allow-popups",sf:"allow-popups-to-escape-sandbox",tf:"allow-presentation",uf:"allow-same-origin",vf:"allow-scripts",wf:"allow-top-navigation",xf:"allow-top-navigation-by-user-activation"},zi=fb(function(){return yi()});
function Ai(){var a=Bi(),b={};hb(zi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Bi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Ci=qi.Wd;function Di(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Ei=(new Date).getTime();var Fi="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ja(Fi);"undefined"!==typeof TextDecoder&&new TextDecoder;var Gi="undefined"!==typeof TextEncoder?new TextEncoder:null,Hi=Gi?function(a){return Gi.encode(a)}:function(a){a=Nc(a);
for(var b=new Uint8Array(a.length),c=0;c<b.length;c++)b[c]=a[c];return b};function Ii(a){yf.call(this);var b=this;this.v=this.j=0;this.ya=null!=a?a:{ea:function(e,f){return setTimeout(e,f)},
Ca:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return w(e,Ji(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.v||Ki(this)}
v(Ii,yf);function Li(){var a=Mi;Ii.h||(Ii.h=new Ii(a));return Ii.h}
Ii.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.ya.Ca(this.v);delete Ii.h};
Ii.prototype.oa=function(){return this.i};
function Ki(a){a.v=a.ya.ea(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.A(3):w(c,Ji(a),3):w(c,Ji(a),3);Ki(a);c.h=0})},3E4)}
function Ji(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,ya(h,2,3),d&&(a.j=a.ya.ea(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.s=void 0;a.j&&(a.ya.Ca(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?zf(a,"networkstatus-online"):zf(a,"networkstatus-offline"));c(g);Ea(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function Ni(){this.data_=[];this.h=-1}
Ni.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
Ni.prototype.get=function(a){return!!this.data_[a]};
function Oi(a){-1===a.h&&(a.h=kb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Pi(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
Pi.prototype[Symbol.iterator]=function(){return this};
Pi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Qi(a,b){return new Pi(a,b)}
;function Ri(){this.blockSize=-1}
;function Si(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
ab(Si,Ri);Si.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Ti(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],l=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+l&4294967295}
Si.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Ti(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Ti(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Ti(this,e);f=0;break}}this.i=f;this.l+=b}};
Si.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Ti(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ui(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Vi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Wi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ui(a).match(/\S+/g)||[],b=0<=gb(a,b));return b}
function Xi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Wi(a,"inverted-hdpi")&&Vi(a,Array.prototype.filter.call(a.classList?a.classList:Ui(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Yi(){}
Yi.prototype.next=function(){return Zi};
var Zi={done:!0,value:void 0};function $i(a){return{value:a,done:!1}}
Yi.prototype.Ba=function(){return this};function aj(a){if(a instanceof bj||a instanceof cj||a instanceof dj)return a;if("function"==typeof a.next)return new bj(function(){return a});
if("function"==typeof a[Symbol.iterator])return new bj(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ba)return new bj(function(){return a.Ba()});
throw Error("Not an iterator or iterable.");}
function bj(a){this.i=a}
bj.prototype.Ba=function(){return new cj(this.i())};
bj.prototype[Symbol.iterator]=function(){return new dj(this.i())};
bj.prototype.h=function(){return new dj(this.i())};
function cj(a){this.i=a}
v(cj,Yi);cj.prototype.next=function(){return this.i.next()};
cj.prototype[Symbol.iterator]=function(){return new dj(this.i)};
cj.prototype.h=function(){return new dj(this.i)};
function dj(a){bj.call(this,function(){return a});
this.j=a}
v(dj,bj);dj.prototype.next=function(){return this.j.next()};function ej(a,b){this.i={};this.h=[];this.Va=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof ej)for(c=a.Bc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
k=ej.prototype;k.Bc=function(){fj(this);return this.h.concat()};
k.has=function(a){return gj(this.i,a)};
k.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||hj;fj(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function hj(a,b){return a===b}
k.clear=function(){this.i={};this.Va=this.size=this.h.length=0};
k.remove=function(a){return this.delete(a)};
k.delete=function(a){return gj(this.i,a)?(delete this.i[a],--this.size,this.Va++,this.h.length>2*this.size&&fj(this),!0):!1};
function fj(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];gj(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],gj(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
k.get=function(a,b){return gj(this.i,a)?this.i[a]:b};
k.set=function(a,b){gj(this.i,a)||(this.size+=1,this.h.push(a),this.Va++);this.i[a]=b};
k.forEach=function(a,b){for(var c=this.Bc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new ej(this)};
k.keys=function(){return aj(this.Ba(!0)).h()};
k.values=function(){return aj(this.Ba(!1)).h()};
k.entries=function(){var a=this;return Qi(this.keys(),function(b){return[b,a.get(b)]})};
k.Ba=function(a){fj(this);var b=0,c=this.Va,d=this,e=new Yi;e.next=function(){if(c!=d.Va)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Zi;var f=d.h[b++];return $i(a?f:d.i[f])};
return e};
function gj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function ij(a){L.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.v=!!a}
ab(ij,L);k=ij.prototype;k.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function jj(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Eb(b)}}
k.Eb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&mb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
k.bb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];kj(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Eb(c)}}return 0!=e}return!1};
function kj(a,b,c){Rf(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Eb,this),delete this.j[a])}else this.i.length=0,this.j={}};
k.M=function(){ij.ta.M.call(this);this.clear();this.l.length=0};function lj(a){this.h=a}
lj.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,$g(b))};
lj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
lj.prototype.remove=function(a){this.h.remove(a)};function mj(a){this.h=a}
ab(mj,lj);function nj(a){this.data=a}
function oj(a){return void 0===a||a instanceof nj?a:new nj(a)}
mj.prototype.set=function(a,b){mj.ta.set.call(this,a,oj(b))};
mj.prototype.i=function(a){a=mj.ta.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
mj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function pj(a){this.h=a}
ab(pj,mj);pj.prototype.set=function(a,b,c){if(b=oj(b)){if(c){if(c<Date.now()){pj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}pj.ta.set.call(this,a,b)};
pj.prototype.i=function(a){var b=pj.ta.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())pj.prototype.remove.call(this,a);else return b}};function qj(){}
;function rj(){}
ab(rj,qj);rj.prototype[Symbol.iterator]=function(){return aj(this.Ba(!0)).h()};
rj.prototype.clear=function(){var a=Array.from(this);a=r(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function sj(a){this.h=a}
ab(sj,rj);k=sj.prototype;k.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeItem(a)};
k.Ba=function(a){var b=0,c=this.h,d=new Yi;d.next=function(){if(b>=c.length)return Zi;var e=c.key(b++);if(a)return $i(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return $i(e)};
return d};
k.clear=function(){this.h.clear()};
k.key=function(a){return this.h.key(a)};function tj(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
ab(tj,sj);function uj(a,b){this.i=a;this.h=null;var c;if(c=$c)c=!(9<=Number(md));if(c){vj||(vj=new ej);this.h=vj.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),vj.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
ab(uj,rj);var wj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},vj=null;function xj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return wj[b]})}
k=uj.prototype;k.isAvailable=function(){return!!this.h};
k.set=function(a,b){this.h.setAttribute(xj(a),b);yj(this)};
k.get=function(a){a=this.h.getAttribute(xj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.h.removeAttribute(xj(a));yj(this)};
k.Ba=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Yi;d.next=function(){if(b>=c.length)return Zi;var e=c[b++];if(a)return $i(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return $i(e)};
return d};
k.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);yj(this)};
function yj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function zj(a,b){this.i=a;this.h=b+"::"}
ab(zj,rj);zj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
zj.prototype.get=function(a){return this.i.get(this.h+a)};
zj.prototype.remove=function(a){this.i.remove(this.h+a)};
zj.prototype.Ba=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Yi;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return $i(a?e.slice(c.h.length):c.i.get(e))};
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
var N={},Aj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Bj={qb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ld:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Cj={qb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ld:function(a){return[].concat.apply([],a)}};
N.af=function(){Aj?(N.nb=Uint8Array,N.Ga=Uint16Array,N.Sd=Int32Array,N.assign(N,Bj)):(N.nb=Array,N.Ga=Array,N.Sd=Array,N.assign(N,Cj))};
N.af();var Dj=!0;try{new Uint8Array(1)}catch(a){Dj=!1}
function Ej(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.nb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Fj={};Fj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Gj={},Hj,Ij=[],Jj=0;256>Jj;Jj++){Hj=Jj;for(var Kj=0;8>Kj;Kj++)Hj=Hj&1?3988292384^Hj>>>1:Hj>>>1;Ij[Jj]=Hj}Gj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Ij[(a^b[d])&255];return a^-1};var Lj={};Lj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Mj(a){for(var b=a.length;0<=--b;)a[b]=0}
var Nj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Oj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Pj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Qj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Rj=Array(576);Mj(Rj);var Sj=Array(60);Mj(Sj);var Tj=Array(512);Mj(Tj);var Uj=Array(256);Mj(Uj);var Vj=Array(29);Mj(Vj);var Wj=Array(30);Mj(Wj);function Xj(a,b,c,d,e){this.Kd=a;this.ne=b;this.me=c;this.ie=d;this.Ee=e;this.pd=a&&a.length}
var Yj,Zj,ak;function bk(a,b){this.jd=a;this.xb=0;this.Ua=b}
function ck(a,b){a.S[a.pending++]=b&255;a.S[a.pending++]=b>>>8&255}
function dk(a,b,c){a.Z>16-c?(a.ga|=b<<a.Z&65535,ck(a,a.ga),a.ga=b>>16-a.Z,a.Z+=c-16):(a.ga|=b<<a.Z&65535,a.Z+=c)}
function ek(a,b,c){dk(a,c[2*b],c[2*b+1])}
function fk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function gk(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=fk(d[e]++,e))}
function hk(a){var b;for(b=0;286>b;b++)a.ka[2*b]=0;for(b=0;30>b;b++)a.eb[2*b]=0;for(b=0;19>b;b++)a.ba[2*b]=0;a.ka[512]=1;a.Na=a.Ab=0;a.ra=a.matches=0}
function ik(a){8<a.Z?ck(a,a.ga):0<a.Z&&(a.S[a.pending++]=a.ga);a.ga=0;a.Z=0}
function jk(a,b,c){ik(a);ck(a,c);ck(a,~c);N.qb(a.S,a.window,b,c,a.pending);a.pending+=c}
function kk(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function lk(a,b,c){for(var d=a.T[c],e=c<<1;e<=a.Ka;){e<a.Ka&&kk(b,a.T[e+1],a.T[e],a.depth)&&e++;if(kk(b,d,a.T[e],a.depth))break;a.T[c]=a.T[e];c=e;e<<=1}a.T[c]=d}
function mk(a,b,c){var d=0;if(0!==a.ra){do{var e=a.S[a.Hb+2*d]<<8|a.S[a.Hb+2*d+1];var f=a.S[a.Gc+d];d++;if(0===e)ek(a,f,b);else{var g=Uj[f];ek(a,g+256+1,b);var h=Nj[g];0!==h&&(f-=Vj[g],dk(a,f,h));e--;g=256>e?Tj[e]:Tj[256+(e>>>7)];ek(a,g,c);h=Oj[g];0!==h&&(e-=Wj[g],dk(a,e,h))}}while(d<a.ra)}ek(a,256,b)}
function nk(a,b){var c=b.jd,d=b.Ua.Kd,e=b.Ua.pd,f=b.Ua.ie,g,h=-1;a.Ka=0;a.ub=573;for(g=0;g<f;g++)0!==c[2*g]?(a.T[++a.Ka]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ka;){var l=a.T[++a.Ka]=2>h?++h:0;c[2*l]=1;a.depth[l]=0;a.Na--;e&&(a.Ab-=d[2*l+1])}b.xb=h;for(g=a.Ka>>1;1<=g;g--)lk(a,c,g);l=f;do g=a.T[1],a.T[1]=a.T[a.Ka--],lk(a,c,1),d=a.T[1],a.T[--a.ub]=g,a.T[--a.ub]=d,c[2*l]=c[2*g]+c[2*d],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=l,a.T[1]=l++,lk(a,c,1);while(2<=a.Ka);a.T[--a.ub]=
a.T[1];g=b.jd;l=b.xb;d=b.Ua.Kd;e=b.Ua.pd;f=b.Ua.ne;var m=b.Ua.me,n=b.Ua.Ee,q,u=0;for(q=0;15>=q;q++)a.Ha[q]=0;g[2*a.T[a.ub]+1]=0;for(b=a.ub+1;573>b;b++){var t=a.T[b];q=g[2*g[2*t+1]+1]+1;q>n&&(q=n,u++);g[2*t+1]=q;if(!(t>l)){a.Ha[q]++;var z=0;t>=m&&(z=f[t-m]);var C=g[2*t];a.Na+=C*(q+z);e&&(a.Ab+=C*(d[2*t+1]+z))}}if(0!==u){do{for(q=n-1;0===a.Ha[q];)q--;a.Ha[q]--;a.Ha[q+1]+=2;a.Ha[n]--;u-=2}while(0<u);for(q=n;0!==q;q--)for(t=a.Ha[q];0!==t;)d=a.T[--b],d>l||(g[2*d+1]!==q&&(a.Na+=(q-g[2*d+1])*g[2*d],g[2*
d+1]=q),t--)}gk(c,h,a.Ha)}
function ok(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];++g<h&&m===f||(g<l?a.ba[2*m]+=g:0!==m?(m!==e&&a.ba[2*m]++,a.ba[32]++):10>=g?a.ba[34]++:a.ba[36]++,g=0,e=m,0===f?(h=138,l=3):m===f?(h=6,l=3):(h=7,l=4))}}
function pk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];if(!(++g<h&&m===f)){if(g<l){do ek(a,m,a.ba);while(0!==--g)}else 0!==m?(m!==e&&(ek(a,m,a.ba),g--),ek(a,16,a.ba),dk(a,g-3,2)):10>=g?(ek(a,17,a.ba),dk(a,g-3,3)):(ek(a,18,a.ba),dk(a,g-11,7));g=0;e=m;0===f?(h=138,l=3):m===f?(h=6,l=3):(h=7,l=4)}}}
function qk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ka[2*c])return 0;if(0!==a.ka[18]||0!==a.ka[20]||0!==a.ka[26])return 1;for(c=32;256>c;c++)if(0!==a.ka[2*c])return 1;return 0}
var rk=!1;function sk(a,b,c){a.S[a.Hb+2*a.ra]=b>>>8&255;a.S[a.Hb+2*a.ra+1]=b&255;a.S[a.Gc+a.ra]=c&255;a.ra++;0===b?a.ka[2*c]++:(a.matches++,b--,a.ka[2*(Uj[c]+256+1)]++,a.eb[2*(256>b?Tj[b]:Tj[256+(b>>>7)])]++);return a.ra===a.Mb-1}
;function tk(a,b){a.msg=Lj[b];return b}
function uk(a){for(var b=a.length;0<=--b;)a[b]=0}
function vk(a){var b=a.state,c=b.pending;c>a.I&&(c=a.I);0!==c&&(N.qb(a.Nb,b.S,b.Ob,c,a.yb),a.yb+=c,b.Ob+=c,a.Sc+=c,a.I-=c,b.pending-=c,0===b.pending&&(b.Ob=0))}
function wk(a,b){var c=0<=a.na?a.na:-1,d=a.o-a.na,e=0;if(0<a.level){2===a.D.wc&&(a.D.wc=qk(a));nk(a,a.jc);nk(a,a.ec);ok(a,a.ka,a.jc.xb);ok(a,a.eb,a.ec.xb);nk(a,a.Zc);for(e=18;3<=e&&0===a.ba[2*Qj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.Ab+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)dk(a,b?1:0,3),jk(a,c,d);else if(4===a.strategy||g===f)dk(a,2+(b?1:0),3),mk(a,Rj,Sj);else{dk(a,4+(b?1:0),3);c=a.jc.xb+1;d=a.ec.xb+1;e+=1;dk(a,c-257,5);dk(a,d-1,5);dk(a,e-4,4);for(f=0;f<e;f++)dk(a,a.ba[2*
Qj[f]+1],3);pk(a,a.ka,c-1);pk(a,a.eb,d-1);mk(a,a.ka,a.eb)}hk(a);b&&ik(a);a.na=a.o;vk(a.D)}
function O(a,b){a.S[a.pending++]=b}
function xk(a,b){a.S[a.pending++]=b>>>8&255;a.S[a.pending++]=b&255}
function yk(a,b){var c=a.vd,d=a.o,e=a.qa,f=a.xd,g=a.o>a.da-262?a.o-(a.da-262):0,h=a.window,l=a.Wa,m=a.Ea,n=a.o+258,q=h[d+e-1],u=h[d+e];a.qa>=a.od&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===u&&h[t+e-1]===q&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.wb=b;e=t;if(t>=f)break;q=h[d+e-1];u=h[d+e]}}}while((b=m[b&l])>g&&0!==--c);return e<=
a.u?e:a.u}
function zk(a){var b=a.da,c;do{var d=a.Qd-a.u-a.o;if(a.o>=b+(b-262)){N.qb(a.window,a.window,b,b,0);a.wb-=b;a.o-=b;a.na-=b;var e=c=a.ic;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ea[--e],a.Ea[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.D.fa)break;e=a.D;c=a.window;f=a.o+a.u;var g=e.fa;g>d&&(g=d);0===g?c=0:(e.fa-=g,N.qb(c,e.input,e.hb,g,f),1===e.state.wrap?e.C=Fj(e.C,c,g,f):2===e.state.wrap&&(e.C=Gj(e.C,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.la)for(d=a.o-a.la,a.H=a.window[d],
a.H=(a.H<<a.Ja^a.window[d+1])&a.Ia;a.la&&!(a.H=(a.H<<a.Ja^a.window[d+3-1])&a.Ia,a.Ea[d&a.Wa]=a.head[a.H],a.head[a.H]=d,d++,a.la--,3>a.u+a.la););}while(262>a.u&&0!==a.D.fa)}
function Ak(a,b){for(var c;;){if(262>a.u){zk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Ea[a.o&a.Wa]=a.head[a.H],a.head[a.H]=a.o);0!==c&&a.o-c<=a.da-262&&(a.J=yk(a,c));if(3<=a.J)if(c=sk(a,a.o-a.wb,a.J-3),a.u-=a.J,a.J<=a.Hc&&3<=a.u){a.J--;do a.o++,a.H=(a.H<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Ea[a.o&a.Wa]=a.head[a.H],a.head[a.H]=a.o;while(0!==--a.J);a.o++}else a.o+=a.J,a.J=0,a.H=a.window[a.o],a.H=(a.H<<a.Ja^a.window[a.o+1])&a.Ia;else c=sk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(wk(a,!1),0===a.D.I))return 1}a.la=2>a.o?a.o:2;return 4===b?(wk(a,!0),0===a.D.I?3:4):a.ra&&(wk(a,!1),0===a.D.I)?1:2}
function Bk(a,b){for(var c,d;;){if(262>a.u){zk(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.H=(a.H<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Ea[a.o&a.Wa]=a.head[a.H],a.head[a.H]=a.o);a.qa=a.J;a.Ad=a.wb;a.J=2;0!==c&&a.qa<a.Hc&&a.o-c<=a.da-262&&(a.J=yk(a,c),5>=a.J&&(1===a.strategy||3===a.J&&4096<a.o-a.wb)&&(a.J=2));if(3<=a.qa&&a.J<=a.qa){d=a.o+a.u-3;c=sk(a,a.o-1-a.Ad,a.qa-3);a.u-=a.qa-1;a.qa-=2;do++a.o<=d&&(a.H=(a.H<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Ea[a.o&a.Wa]=a.head[a.H],a.head[a.H]=a.o);
while(0!==--a.qa);a.fb=0;a.J=2;a.o++;if(c&&(wk(a,!1),0===a.D.I))return 1}else if(a.fb){if((c=sk(a,0,a.window[a.o-1]))&&wk(a,!1),a.o++,a.u--,0===a.D.I)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(sk(a,0,a.window[a.o-1]),a.fb=0);a.la=2>a.o?a.o:2;return 4===b?(wk(a,!0),0===a.D.I?3:4):a.ra&&(wk(a,!1),0===a.D.I)?1:2}
function Ck(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){zk(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.J=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.J=258-(e-d);a.J>a.u&&(a.J=a.u)}3<=a.J?(c=sk(a,1,a.J-3),a.u-=a.J,a.o+=a.J,a.J=0):(c=sk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(wk(a,!1),0===a.D.I))return 1}a.la=0;return 4===b?(wk(a,!0),0===a.D.I?3:4):
a.ra&&(wk(a,!1),0===a.D.I)?1:2}
function Dk(a,b){for(var c;;){if(0===a.u&&(zk(a),0===a.u)){if(0===b)return 1;break}a.J=0;c=sk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(wk(a,!1),0===a.D.I))return 1}a.la=0;return 4===b?(wk(a,!0),0===a.D.I?3:4):a.ra&&(wk(a,!1),0===a.D.I)?1:2}
function Ek(a,b,c,d,e){this.te=a;this.De=b;this.He=c;this.Ce=d;this.pe=e}
var Fk;Fk=[new Ek(0,0,0,0,function(a,b){var c=65535;for(c>a.sa-5&&(c=a.sa-5);;){if(1>=a.u){zk(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.na+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,wk(a,!1),0===a.D.I)return 1;if(a.o-a.na>=a.da-262&&(wk(a,!1),0===a.D.I))return 1}a.la=0;if(4===b)return wk(a,!0),0===a.D.I?3:4;a.o>a.na&&wk(a,!1);return 1}),
new Ek(4,4,8,4,Ak),new Ek(4,5,16,8,Ak),new Ek(4,6,32,32,Ak),new Ek(4,4,16,16,Bk),new Ek(8,16,32,32,Bk),new Ek(8,16,128,128,Bk),new Ek(8,32,128,256,Bk),new Ek(32,128,258,1024,Bk),new Ek(32,258,258,4096,Bk)];
function Gk(){this.D=null;this.status=0;this.S=null;this.wrap=this.pending=this.Ob=this.sa=0;this.B=null;this.wa=0;this.method=8;this.vb=-1;this.Wa=this.Uc=this.da=0;this.window=null;this.Qd=0;this.head=this.Ea=null;this.xd=this.od=this.strategy=this.level=this.Hc=this.vd=this.qa=this.u=this.wb=this.o=this.fb=this.Ad=this.J=this.na=this.Ja=this.Ia=this.Cc=this.ic=this.H=0;this.ka=new N.Ga(1146);this.eb=new N.Ga(122);this.ba=new N.Ga(78);uk(this.ka);uk(this.eb);uk(this.ba);this.Zc=this.ec=this.jc=
null;this.Ha=new N.Ga(16);this.T=new N.Ga(573);uk(this.T);this.ub=this.Ka=0;this.depth=new N.Ga(573);uk(this.depth);this.Z=this.ga=this.la=this.matches=this.Ab=this.Na=this.Hb=this.ra=this.Mb=this.Gc=0}
function Hk(a,b){if(!a||!a.state||5<b||0>b)return a?tk(a,-2):-2;var c=a.state;if(!a.Nb||!a.input&&0!==a.fa||666===c.status&&4!==b)return tk(a,0===a.I?-5:-2);c.D=a;var d=c.vb;c.vb=b;if(42===c.status)if(2===c.wrap)a.C=0,O(c,31),O(c,139),O(c,8),c.B?(O(c,(c.B.text?1:0)+(c.B.Ra?2:0)+(c.B.Qa?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),O(c,c.B.time&255),O(c,c.B.time>>8&255),O(c,c.B.time>>16&255),O(c,c.B.time>>24&255),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,c.B.os&255),c.B.Qa&&c.B.Qa.length&&(O(c,
c.B.Qa.length&255),O(c,c.B.Qa.length>>8&255)),c.B.Ra&&(a.C=Gj(a.C,c.S,c.pending,0)),c.wa=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;xk(c,e+(31-e%31));0!==c.o&&(xk(c,a.C>>>16),xk(c,a.C&65535));a.C=1}if(69===c.status)if(c.B.Qa){for(e=c.pending;c.wa<(c.B.Qa.length&65535)&&(c.pending!==c.sa||(c.B.Ra&&c.pending>
e&&(a.C=Gj(a.C,c.S,c.pending-e,e)),vk(a),e=c.pending,c.pending!==c.sa));)O(c,c.B.Qa[c.wa]&255),c.wa++;c.B.Ra&&c.pending>e&&(a.C=Gj(a.C,c.S,c.pending-e,e));c.wa===c.B.Qa.length&&(c.wa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.sa&&(c.B.Ra&&c.pending>e&&(a.C=Gj(a.C,c.S,c.pending-e,e)),vk(a),e=c.pending,c.pending===c.sa)){var f=1;break}f=c.wa<c.B.name.length?c.B.name.charCodeAt(c.wa++)&255:0;O(c,f)}while(0!==f);c.B.Ra&&c.pending>e&&(a.C=Gj(a.C,c.S,c.pending-
e,e));0===f&&(c.wa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.sa&&(c.B.Ra&&c.pending>e&&(a.C=Gj(a.C,c.S,c.pending-e,e)),vk(a),e=c.pending,c.pending===c.sa)){f=1;break}f=c.wa<c.B.comment.length?c.B.comment.charCodeAt(c.wa++)&255:0;O(c,f)}while(0!==f);c.B.Ra&&c.pending>e&&(a.C=Gj(a.C,c.S,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ra?(c.pending+2>c.sa&&vk(a),c.pending+2<=c.sa&&(O(c,a.C&255),O(c,a.C>>8&255),a.C=0,
c.status=113)):c.status=113);if(0!==c.pending){if(vk(a),0===a.I)return c.vb=-1,0}else if(0===a.fa&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return tk(a,-5);if(666===c.status&&0!==a.fa)return tk(a,-5);if(0!==a.fa||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?Dk(c,b):3===c.strategy?Ck(c,b):Fk[c.level].pe(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.I&&(c.vb=-1),0;if(2===d&&(1===b?(dk(c,2,3),ek(c,256,Rj),16===c.Z?(ck(c,c.ga),c.ga=0,c.Z=0):8<=c.Z&&(c.S[c.pending++]=c.ga&255,c.ga>>=
8,c.Z-=8)):5!==b&&(dk(c,0,3),jk(c,0,0),3===b&&(uk(c.head),0===c.u&&(c.o=0,c.na=0,c.la=0))),vk(a),0===a.I))return c.vb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(O(c,a.C&255),O(c,a.C>>8&255),O(c,a.C>>16&255),O(c,a.C>>24&255),O(c,a.kb&255),O(c,a.kb>>8&255),O(c,a.kb>>16&255),O(c,a.kb>>24&255)):(xk(c,a.C>>>16),xk(c,a.C&65535));vk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Ik={};Ik=function(){this.input=null;this.kb=this.fa=this.hb=0;this.Nb=null;this.Sc=this.I=this.yb=0;this.msg="";this.state=null;this.wc=2;this.C=0};var Jk=Object.prototype.toString;
function Kk(a){if(!(this instanceof Kk))return new Kk(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,Xa:15,Fe:8,strategy:0,K:""},a||{});a.raw&&0<a.Xa?a.Xa=-a.Xa:a.ue&&0<a.Xa&&16>a.Xa&&(a.Xa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.D=new Ik;this.D.I=0;var b=this.D;var c=a.level,d=a.method,e=a.Xa,f=a.Fe,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=tk(b,-2);else{8===e&&(e=9);var l=new Gk;
b.state=l;l.D=b;l.wrap=h;l.B=null;l.Uc=e;l.da=1<<l.Uc;l.Wa=l.da-1;l.Cc=f+7;l.ic=1<<l.Cc;l.Ia=l.ic-1;l.Ja=~~((l.Cc+3-1)/3);l.window=new N.nb(2*l.da);l.head=new N.Ga(l.ic);l.Ea=new N.Ga(l.da);l.Mb=1<<f+6;l.sa=4*l.Mb;l.S=new N.nb(l.sa);l.Hb=1*l.Mb;l.Gc=3*l.Mb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.kb=b.Sc=0;b.wc=2;c=b.state;c.pending=0;c.Ob=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.C=2===c.wrap?0:1;c.vb=0;if(!rk){d=Array(16);for(f=g=0;28>f;f++)for(Vj[f]=g,e=0;e<1<<Nj[f];e++)Uj[g++]=
f;Uj[g-1]=f;for(f=g=0;16>f;f++)for(Wj[f]=g,e=0;e<1<<Oj[f];e++)Tj[g++]=f;for(g>>=7;30>f;f++)for(Wj[f]=g<<7,e=0;e<1<<Oj[f]-7;e++)Tj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Rj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Rj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Rj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Rj[2*e+1]=8,e++,d[8]++;gk(Rj,287,d);for(e=0;30>e;e++)Sj[2*e+1]=5,Sj[2*e]=fk(e,5);Yj=new Xj(Rj,Nj,257,286,15);Zj=new Xj(Sj,Oj,0,30,15);ak=new Xj([],Pj,0,19,7);rk=!0}c.jc=new bk(c.ka,Yj);c.ec=new bk(c.eb,Zj);c.Zc=
new bk(c.ba,ak);c.ga=0;c.Z=0;hk(c);c=0}else c=tk(b,-2);0===c&&(b=b.state,b.Qd=2*b.da,uk(b.head),b.Hc=Fk[b.level].De,b.od=Fk[b.level].te,b.xd=Fk[b.level].He,b.vd=Fk[b.level].Ce,b.o=0,b.na=0,b.u=0,b.la=0,b.J=b.qa=2,b.fb=0,b.H=0);b=c}}else b=-2;if(0!==b)throw Error(Lj[b]);a.header&&(b=this.D)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.Ib){var m;"string"===typeof a.Ib?m=Ej(a.Ib):"[object ArrayBuffer]"===Jk.call(a.Ib)?m=new Uint8Array(a.Ib):m=a.Ib;a=this.D;f=m;g=f.length;if(a&&a.state)if(m=
a.state,b=m.wrap,2===b||1===b&&42!==m.status||m.u)b=-2;else{1===b&&(a.C=Fj(a.C,f,g,0));m.wrap=0;g>=m.da&&(0===b&&(uk(m.head),m.o=0,m.na=0,m.la=0),c=new N.nb(m.da),N.qb(c,f,g-m.da,m.da,0),f=c,g=m.da);c=a.fa;d=a.hb;e=a.input;a.fa=g;a.hb=0;a.input=f;for(zk(m);3<=m.u;){f=m.o;g=m.u-2;do m.H=(m.H<<m.Ja^m.window[f+3-1])&m.Ia,m.Ea[f&m.Wa]=m.head[m.H],m.head[m.H]=f,f++;while(--g);m.o=f;m.u=2;zk(m)}m.o+=m.u;m.na=m.o;m.la=m.u;m.u=0;m.J=m.qa=2;m.fb=0;a.hb=d;a.input=e;a.fa=c;m.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Lj[b]);
this.ng=!0}}
Kk.prototype.push=function(a,b){var c=this.D,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Ej(a):"[object ArrayBuffer]"===Jk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.fa=c.input.length;do{0===c.I&&(c.Nb=new N.nb(d),c.yb=0,c.I=d);a=Hk(c,e);if(1!==a&&0!==a)return Lk(this,a),this.ended=!0,!1;if(0===c.I||0===c.fa&&(4===e||2===e))if("string"===this.options.K){var f=N.Rc(c.Nb,c.yb);b=f;f=f.length;if(65537>f&&(b.subarray&&Dj||!b.subarray))b=
String.fromCharCode.apply(null,N.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Rc(c.Nb,c.yb),this.chunks.push(b)}while((0<c.fa||0===c.I)&&1!==a);if(4===e)return(c=this.D)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=tk(c,-2):(c.state=null,a=113===d?tk(c,-3):0)):a=-2,Lk(this,a),this.ended=!0,0===a;2===e&&(Lk(this,0),c.I=0);return!0};
function Lk(a,b){0===b&&(a.result="string"===a.options.K?a.chunks.join(""):N.ld(a.chunks));a.chunks=[];a.err=b;a.msg=a.D.msg}
function Mk(a){var b=b||{};b.ue=!0;b=new Kk(b);b.push(a,!0);if(b.err)throw b.msg||Lj[b.err];return b.result}
;function Nk(a){return Lb(null===a?"null":void 0===a?"undefined":a)}
;function Ok(a){this.name=a}
;var Pk=new Ok("rawColdConfigGroup");var Qk=new Ok("rawHotConfigGroup");function Rk(a){K.call(this,a)}
v(Rk,K);function Sk(a,b){return re(a,1,b)}
;function Tk(a){K.call(this,a,-1,Uk)}
v(Tk,K);var Uk=[1];function Vk(a){K.call(this,a)}
v(Vk,K);function Wk(a){K.call(this,a)}
v(Wk,K);function Xk(a){K.call(this,a)}
v(Xk,K);function Yk(a){K.call(this,a,-1,Zk)}
v(Yk,K);var Zk=[2];function $k(a){K.call(this,a,-1,al)}
v($k,K);$k.prototype.getPlayerType=function(){return ue(de(this,36),0)};
$k.prototype.setHomeGroupInfo=function(a){return I(this,Yk,81,a)};
$k.prototype.clearLocationPlayabilityToken=function(){return H(this,89,void 0,!1)};
var al=[9,66,24,32,86,100,101];function bl(a){K.call(this,a)}
v(bl,K);bl.prototype.getKey=function(){return ve(this,1)};
bl.prototype.getValue=function(){return ve(this,2===ke(this,cl)?2:-1)};
var cl=[2,3,4,5,6];function dl(a){K.call(this,a,-1,el)}
v(dl,K);var el=[15,26,28];function fl(a){K.call(this,a,-1,gl)}
v(fl,K);var gl=[5];function hl(a){K.call(this,a)}
v(hl,K);function il(a){K.call(this,a,-1,jl)}
v(il,K);il.prototype.setSafetyMode=function(a){return H(this,5,a)};
var jl=[12];function kl(a){K.call(this,a,-1,ll)}
v(kl,K);kl.prototype.l=function(a){return I(this,$k,1,a)};
var ll=[12];var ml=new Ok("continuationCommand");var nl=new Ok("webCommandMetadata");var ol=new Ok("signalServiceEndpoint");var pl={Ff:"EMBEDDED_PLAYER_MODE_UNKNOWN",Cf:"EMBEDDED_PLAYER_MODE_DEFAULT",Ef:"EMBEDDED_PLAYER_MODE_PFP",Df:"EMBEDDED_PLAYER_MODE_PFL"};var Gl=new Ok("feedbackEndpoint");var Hl={mg:"WEB_DISPLAY_MODE_UNKNOWN",ig:"WEB_DISPLAY_MODE_BROWSER",kg:"WEB_DISPLAY_MODE_MINIMAL_UI",lg:"WEB_DISPLAY_MODE_STANDALONE",jg:"WEB_DISPLAY_MODE_FULLSCREEN"};function Il(a){K.call(this,a)}
v(Il,K);Il.prototype.getKey=function(){return ve(this,1)};
Il.prototype.getValue=function(){return ve(this,2)};function Jl(a){K.call(this,a,-1,Kl)}
v(Jl,K);var Kl=[4,5];function Ll(a){K.call(this,a)}
v(Ll,K);function Ml(a){K.call(this,a)}
v(Ml,K);var Nl=[2,3,4,5];function Ol(a){K.call(this,a)}
v(Ol,K);Ol.prototype.getMessage=function(){return ve(this,1)};function Pl(a){K.call(this,a)}
v(Pl,K);function Ql(a){K.call(this,a)}
v(Ql,K);function Rl(a){K.call(this,a,-1,Sl)}
v(Rl,K);var Sl=[10,17];function Tl(a){K.call(this,a)}
v(Tl,K);function Ul(a){K.call(this,a)}
v(Ul,K);function Vl(a){K.call(this,a)}
v(Vl,K);function Wl(a){K.call(this,a)}
v(Wl,K);function Xl(a){K.call(this,a)}
v(Xl,K);function Yl(a){K.call(this,a,-1,Zl)}
v(Yl,K);Yl.prototype.getVideoData=function(){return le(this,Xl,15)};
var Zl=[4];function $l(a){K.call(this,a)}
v($l,K);function am(a,b){I(a,Vl,1,b)}
;function bm(a){K.call(this,a)}
v(bm,K);function cm(a,b){return I(a,Vl,1,b)}
bm.prototype.h=function(a){return H(this,2,a)};function dm(a){K.call(this,a,-1,em)}
v(dm,K);dm.prototype.h=function(a){return H(this,1,a)};
function fm(a,b){return I(a,Vl,2,b)}
var em=[3];function gm(a){K.call(this,a)}
v(gm,K);gm.prototype.h=function(a){return H(this,1,a)};function hm(a){K.call(this,a)}
v(hm,K);hm.prototype.h=function(a){return H(this,1,a)};function im(a){K.call(this,a)}
v(im,K);im.prototype.h=function(a){return H(this,1,a)};function jm(a){K.call(this,a)}
v(jm,K);jm.prototype.h=function(a){return H(this,1,a)};function km(a){K.call(this,a)}
v(km,K);function lm(a){K.call(this,a)}
v(lm,K);function mm(a){var b=new lm;return H(b,1,a)}
lm.prototype.getId=function(){return ve(this,2)};
function nm(a,b){return H(a,2,b)}
;function om(a){K.call(this,a)}
v(om,K);function pm(a){K.call(this,a,-1,qm)}
v(pm,K);pm.prototype.getPlayerType=function(){return ue(de(this,7),0)};
pm.prototype.setVideoId=function(a){return H(this,19,a)};
function rm(a,b){qe(a,68,lm,b)}
var qm=[112,83,68];function sm(a){K.call(this,a)}
v(sm,K);function tm(a){K.call(this,a)}
v(tm,K);function um(a){K.call(this,a)}
v(um,K);function vm(a){K.call(this,a,475)}
v(vm,K);
var wm=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474];var xm={ag:0,Hf:1,Nf:2,Of:4,Uf:8,Pf:16,Qf:32,Zf:64,Yf:128,Jf:256,Lf:512,Sf:1024,Kf:2048,Mf:4096,If:8192,Rf:16384,Vf:32768,Tf:65536,Wf:131072,Xf:262144};function ym(a){K.call(this,a)}
v(ym,K);function zm(a){K.call(this,a)}
v(zm,K);zm.prototype.setVideoId=function(a){return je(this,1,Am,a)};
zm.prototype.getPlaylistId=function(){var a=2===ke(this,Am)?2:-1;return de(this,a)};
var Am=[1,2];function Bm(a){K.call(this,a,-1,Cm)}
v(Bm,K);var Cm=[3];var Dm=new Ok("webPlayerShareEntityServiceEndpoint");var Em=new Ok("playlistEditEndpoint");var Fm=new Ok("modifyChannelNotificationPreferenceEndpoint");var Gm=new Ok("unsubscribeEndpoint");var Hm=new Ok("subscribeEndpoint");function Im(){var a=Jm;B("yt.ads.biscotti.getId_")||A("yt.ads.biscotti.getId_",a)}
function Km(a){A("yt.ads.biscotti.lastId_",a)}
;function Lm(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Mm=y.window,Nm,Om,Pm=(null==Mm?void 0:null==(Nm=Mm.yt)?void 0:Nm.config_)||(null==Mm?void 0:null==(Om=Mm.ytcfg)?void 0:Om.data_)||{};A("yt.config_",Pm);function Qm(){Lm(Pm,arguments)}
function P(a,b){return a in Pm?Pm[a]:b}
function Rm(){var a=Pm.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Sm=[];function Tm(a){Sm.forEach(function(b){return b(a)})}
function Um(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Vm(b)}}:a}
function Vm(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Qm("ERRORS",b));Tm(a)}
function Wm(a,b,c,d,e){var f=B("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Qm("ERRORS",f))}
;var Xm=/^[\w.]*$/,Ym={q:!0,search_query:!0};function Zm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=$m(f[0]||""),h=$m(f[1]||"");g in c?Array.isArray(c[g])?nb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var l=q,m=f[0],n=String(Zm);l.args=[{key:m,value:f[1],query:a,method:an==n?"unchanged":n}];Ym.hasOwnProperty(m)||Wm(l)}}return c}
var an=String(Zm);function bn(a){var b=[];ob(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];hb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function cn(a){"?"==a.charAt(0)&&(a=a.substr(1));return Zm(a,"&")}
function dn(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),cn(1<a.length?a[1]:a[0])):{}}
function en(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=cn(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Gc(a,e)+d}
function fn(a){if(!b)var b=window.location.href;var c=yc(1,a),d=zc(a);c&&d?(a=a.match(wc),b=b.match(wc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?zc(b)==d&&(Number(yc(4,b))||null)==(Number(yc(4,a))||null):!0;return a}
function $m(a){return a&&a.match(Xm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function gn(a){var b=hn;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ei;e.flash="0";a:{try{var f=b.h.top.location.href}catch(J){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?ii:g;try{var h=g.history.length}catch(J){h=0}e.u_his=h;var l;e.u_h=null==(l=ii.screen)?void 0:l.height;var m;e.u_w=null==(m=ii.screen)?void 0:m.width;var n;e.u_ah=null==(n=ii.screen)?void 0:n.availHeight;var q;e.u_aw=null==
(q=ii.screen)?void 0:q.availWidth;var u;e.u_cd=null==(u=ii.screen)?void 0:u.colorDepth}catch(J){}h=b.h;try{var t=h.screenX;var z=h.screenY}catch(J){}try{var C=h.outerWidth;var E=h.outerHeight}catch(J){}try{var M=h.innerWidth;var S=h.innerHeight}catch(J){}try{var Q=h.screenLeft;var W=h.screenTop}catch(J){}try{M=h.innerWidth,S=h.innerHeight}catch(J){}try{var ha=h.screen.availWidth;var na=h.screen.availTop}catch(J){}t=[Q,W,t,z,ha,na,C,E,M,S];try{var Sa=(b.h.top||window).document,Da="CSS1Compat"==Sa.compatMode?
Sa.documentElement:Sa.body;var za=(new Ff(Da.clientWidth,Da.clientHeight)).round()}catch(J){za=new Ff(-12245933,-12245933)}Sa=za;za={};var oa=void 0===oa?y:oa;Da=new Ni;"SVGElement"in oa&&"createElementNS"in oa.document&&Da.set(0);z=Ai();z["allow-top-navigation-by-user-activation"]&&Da.set(1);z["allow-popups-to-escape-sandbox"]&&Da.set(2);oa.crypto&&oa.crypto.subtle&&Da.set(3);"TextDecoder"in oa&&"TextEncoder"in oa&&Da.set(4);oa=Oi(Da);za.bc=oa;za.bih=Sa.height;za.biw=Sa.width;za.brdim=t.join();b=
b.i;b=(za.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,za.wgl=!!ii.WebGLRenderingContext,za);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var hn=new function(){var a=window.document;this.h=window;this.i=a};
A("yt.ads_.signals_.getAdSignalsString",function(a){return bn(gn(a))});Date.now();function R(a){a=jn(a);return"string"===typeof a&&"false"===a?!1:!!a}
function kn(a,b){a=jn(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ln(){return P("EXPERIMENTS_TOKEN","")}
function jn(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
function mn(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});var e=r(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var nn="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function on(){if(!nn)return null;var a=nn();return"open"in a?a:null}
function pn(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function qn(a,b){"function"===typeof a&&(a=Um(a));return window.setTimeout(a,b)}
;var rn={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},sn="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ja(Fi)),tn=!1;
function un(a,b){b=void 0===b?{}:b;var c=fn(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in rn){var f=P(rn[e]);"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&zc(a)||d&&void 0!==b[e]||!(R("move_vss_away_from_login_info_cookie")||"X-Goog-AuthUser"!==e&&"X-Goog-PageId"!==e)||(b[e]=f)}R("move_vss_away_from_login_info_cookie")&&c&&P("SESSION_INDEX")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!zc(a))b["X-YouTube-Utc-Offset"]=
String(-(new Date).getTimezoneOffset());if(c||!zc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&zc(a)||(b["X-YouTube-Ad-Signals"]=bn(gn()));return b}
function vn(a){var b=window.location.search,c=zc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&fn(a)&&(c=document.location.hostname);var d=xc(yc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=cn(b),f={};hb(sn,function(g){e[g]&&(f[g]=e[g])});
return en(a,f||{},!1)}
function wn(a,b){var c=b.format||"JSON";a=xn(a,b);var d=yn(a,b),e=!1,f=zn(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);var m=pn(l),n=null,q=400<=l.status&&500>l.status,u=500<=l.status&&600>l.status;if(m||q||u)n=An(a,c,l,b.convertToSafeHtml);if(m)a:if(l&&204==l.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};q=b.context||y;m?b.onSuccess&&b.onSuccess.call(q,l,n):b.onError&&b.onError.call(q,l,n);b.onFinish&&b.onFinish.call(q,
l,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=qn(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},d)}return f}
function xn(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=en(a,b||{},!0);return a}
function yn(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||zc(a)&&!b.withCredentials&&zc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=cn(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Ec(e));f=e||f&&!rb(f);!tn&&f&&"POST"!=b.method&&(tn=!0,Vm(Error("AJAX request with postData should use POST")));return e}
function An(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Wm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Bn(a):null)e={},hb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Cn(g)})}d&&Dn(e);
return e}
function Dn(a){if(Ta(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new oc(d)}else Dn(a[b])}}
function Bn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Cn(a){var b="";hb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function En(a,b){b.method="POST";b.postParams||(b.postParams={});return wn(a,b)}
function zn(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Um(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=on();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=vn(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=un(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var Fn=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
lc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
lc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
lc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Hn={Ta:[],Pa:[{callback:Gn,weight:500}]};function Gn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function In(){this.Pa=[];this.Ta=[]}
var Jn;function Kn(){if(!Jn){var a=Jn=new In;a.Ta.length=0;a.Pa.length=0;Hn.Ta&&a.Ta.push.apply(a.Ta,Hn.Ta);Hn.Pa&&a.Pa.push.apply(a.Pa,Hn.Pa)}return Jn}
;var Ln=new ij;function Mn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Nn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Nn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Nn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Nn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function On(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Pn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Mn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Pn(e+".ve",f,g,h):0;d+=g;d+=Pn(e,a[e],b,c);if(500<d)break}}else c[b]=Qn(a),d+=c[b].length;else c[b]=Qn(a),d+=c[b].length;return d}
function Pn(a,b,c,d){c+="."+a;a=Qn(b);d[c]=a;return c.length+a.length}
function Qn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Rn(){this.ef=!0}
function Sn(){Rn.h||(Rn.h=new Rn);return Rn.h}
function Tn(a,b){a={};var c=Wg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Pm||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Pm&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return a}
;var Un={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Vn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Wn(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Xn(a,b,c,d,e){Sg.set(""+a,b,{kc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Yn(a,b,c){Sg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Zn(){if(!Sg.isEnabled())return!1;if(Sg.h.cookie)return!0;Sg.set("TESTCOOKIESENABLED","1",{kc:60});if("1"!==Sg.get("TESTCOOKIESENABLED"))return!1;Sg.remove("TESTCOOKIESENABLED");return!0}
;var $n=B("ytglobal.prefsUserPrefsPrefs_")||{};A("ytglobal.prefsUserPrefsPrefs_",$n);function ao(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Sg.get(""+this.h,void 0);a&&this.parse(a)}
var bo;function co(){bo||(bo=new ao);return bo}
k=ao.prototype;k.get=function(a,b){eo(a);fo(a);a=void 0!==$n[a]?$n[a].toString():null;return null!=a?a:b?b:""};
k.set=function(a,b){eo(a);fo(a);if(null==b)throw Error("ExpectedNotNull");$n[a]=b.toString()};
function go(a){return!!((ho("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
k.remove=function(a){eo(a);fo(a);delete $n[a]};
k.clear=function(){for(var a in $n)delete $n[a]};
function fo(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function eo(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function ho(a){a=void 0!==$n[a]?$n[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
k.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&($n[d]=c.toString())}};var io={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},jo={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},ko={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},lo={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function mo(){var a=y.navigator;return a?a.connection:void 0}
function no(){var a=mo();if(a){var b=io[a.type||"unknown"]||"CONN_UNKNOWN";a=io[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function oo(){var a=mo();if(null!=a&&a.effectiveType)return lo.hasOwnProperty(a.effectiveType)?lo[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function po(a){var b=La.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ja(b))}
v(po,Error);function qo(){try{return ro(),!0}catch(a){return!1}}
function ro(a){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new po("Datasync ID not set",void 0===a?"unknown":a);}
;function so(){}
function to(a,b){return uo(a,0,b)}
so.prototype.ea=function(a,b){return uo(a,1,b)};
function vo(a){var b=B("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function wo(){so.apply(this,arguments)}
v(wo,so);function xo(){wo.h||(wo.h=new wo);return wo.h}
function uo(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):qn(a,c||0)}
wo.prototype.Ca=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
wo.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
wo.prototype.pause=function(){var a=B("yt.scheduler.instance.pause");a&&a()};
var Mi=xo();function yo(a){var b=new tj;(b=b.isAvailable()?a?new zj(b,a):b:null)||(a=new uj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new pj(a):null;this.i=document.domain||window.location.hostname}
yo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape($g(b))}catch(f){return}else e=escape(b);Xn(a,e,c,this.i)};
yo.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Sg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
yo.prototype.remove=function(a){this.h&&this.h.remove(a);Yn(a,"/",this.i)};var zo=function(){var a;return function(){a||(a=new yo("ytidb"));return a}}();
function Ao(){var a;return null==(a=zo())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Bo=[],Co,Do=!1;function Eo(){var a={};for(Co=new Fo(void 0===a.handleError?Go:a.handleError,void 0===a.logEvent?Ho:a.logEvent);0<Bo.length;)switch(a=Bo.shift(),a.type){case "ERROR":Co.handleError(a.payload);break;case "EVENT":Co.logEvent(a.eventType,a.payload)}}
function Io(a){Do||(Co?Co.handleError(a):(Bo.push({type:"ERROR",payload:a}),10<Bo.length&&Bo.shift()))}
function Jo(a,b){Do||(Co?Co.logEvent(a,b):(Bo.push({type:"EVENT",eventType:a,payload:b}),10<Bo.length&&Bo.shift()))}
;function Ko(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Lo(a){return a.substr(0,a.indexOf(":"))||a}
;var Mo=nd||od;function No(a){var b=Yb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Oo={},Po=(Oo.AUTH_INVALID="No user identifier specified.",Oo.EXPLICIT_ABORT="Transaction was explicitly aborted.",Oo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Oo.MISSING_INDEX="Index not created.",Oo.MISSING_OBJECT_STORES="Object stores not created.",Oo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Oo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Oo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Oo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Oo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Oo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Oo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Oo),Qo={},Ro=(Qo.AUTH_INVALID="ERROR",Qo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Qo.EXPLICIT_ABORT="IGNORED",Qo.IDB_NOT_SUPPORTED="ERROR",Qo.MISSING_INDEX=
"WARNING",Qo.MISSING_OBJECT_STORES="ERROR",Qo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Qo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Qo.QUOTA_EXCEEDED="WARNING",Qo.QUOTA_MAYBE_EXCEEDED="WARNING",Qo.UNKNOWN_ABORT="WARNING",Qo.INCOMPATIBLE_DB_VERSION="WARNING",Qo),So={},To=(So.AUTH_INVALID=!1,So.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,So.EXPLICIT_ABORT=!1,So.IDB_NOT_SUPPORTED=!1,So.MISSING_INDEX=!1,So.MISSING_OBJECT_STORES=!1,So.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,So.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,So.QUOTA_EXCEEDED=!1,So.QUOTA_MAYBE_EXCEEDED=!0,So.UNKNOWN_ABORT=!0,So.INCOMPATIBLE_DB_VERSION=!1,So);function Uo(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Po[a]:c;d=void 0===d?Ro[a]:d;e=void 0===e?To[a]:e;po.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Uo.prototype)}
v(Uo,po);function Vo(a,b){Uo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Po.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Vo.prototype)}
v(Vo,Uo);function Wo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Wo.prototype)}
v(Wo,Error);var Xo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Yo(a,b,c,d){b=Lo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Uo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Uo("QUOTA_EXCEEDED",a);if(pd&&"UnknownError"===e.name)return new Uo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Wo)return new Uo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Xo.some(function(f){return e.message.includes(f)}))return new Uo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Uo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",zd:e.name})];e.level="WARNING";return e}
function Zo(a,b,c){var d=Ao();return new Uo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function $o(a){if(!a)throw Error();throw a;}
function ap(a){return a}
function bp(a){this.h=a}
function cp(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=r(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=r(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
cp.all=function(a){return new cp(new bp(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={lb:0};f.lb<a.length;f={lb:f.lb},++f.lb)cp.resolve(a[f.lb]).then(function(g){return function(h){d[g.lb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
cp.resolve=function(a){return new cp(new bp(function(b,c){a instanceof cp?a.then(b,c):b(a)}))};
cp.reject=function(a){return new cp(new bp(function(b,c){c(a)}))};
cp.prototype.then=function(a,b){var c=this,d=null!=a?a:ap,e=null!=b?b:$o;return new cp(new bp(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){dp(c,c,d,f,g)}),c.i.push(function(){ep(c,c,e,f,g)})):"FULFILLED"===c.state.status?dp(c,c,d,f,g):"REJECTED"===c.state.status&&ep(c,c,e,f,g)}))};
cp.prototype.catch=function(a){return this.then(void 0,a)};
function dp(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof cp?fp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ep(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof cp?fp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function fp(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof cp?fp(a,b,f,d,e):d(f)},function(f){e(f)})}
;function gp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function hp(a){return new Promise(function(b,c){gp(a,b,c)})}
function ip(a){return new cp(new bp(function(b,c){gp(a,b,c)}))}
;function jp(a,b){return new cp(new bp(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var kp=window,T=kp.ytcsi&&kp.ytcsi.now?kp.ytcsi.now:kp.performance&&kp.performance.timing&&kp.performance.now&&kp.performance.timing.navigationStart?function(){return kp.performance.timing.navigationStart+kp.performance.now()}:function(){return(new Date).getTime()};function lp(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
k=lp.prototype;k.add=function(a,b,c){return mp(this,[a],{mode:"readwrite",ca:!0},function(d){return d.objectStore(a).add(b,c)})};
k.clear=function(a){return mp(this,[a],{mode:"readwrite",ca:!0},function(b){return b.objectStore(a).clear()})};
k.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
k.count=function(a,b){return mp(this,[a],{mode:"readonly",ca:!0},function(c){return c.objectStore(a).count(b)})};
function np(a,b,c){a=a.h.createObjectStore(b,c);return new op(a)}
k.delete=function(a,b){return mp(this,[a],{mode:"readwrite",ca:!0},function(c){return c.objectStore(a).delete(b)})};
k.get=function(a,b){return mp(this,[a],{mode:"readonly",ca:!0},function(c){return c.objectStore(a).get(b)})};
function pp(a,b,c){return mp(a,[b],{mode:"readwrite",ca:!0},function(d){d=d.objectStore(b);return ip(d.h.put(c,void 0))})}
k.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function mp(a,b,c,d){var e,f,g,h,l,m,n,q,u,t,z,C;return x(function(E){switch(E.h){case 1:var M={mode:"readonly",ca:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);e=M;a.transactionCount++;f=e.ca?3:1;g=0;case 2:if(h){E.A(3);break}g++;l=Math.round(T());ya(E,4);m=a.h.transaction(b,e.mode);M=new qp(m);M=rp(M,d);return w(E,M,6);case 6:return n=E.i,q=Math.round(T()),sp(a,l,q,g,void 0,b.join(),e),E.return(n);case 4:u=Ba(E);t=Math.round(T());z=Yo(u,a.h.name,b.join(),
a.h.version);if((C=z instanceof Uo&&!z.h)||g>=f)sp(a,l,t,g,z,b.join(),e),h=z;E.A(2);break;case 3:return E.return(Promise.reject(h))}})}
function sp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Uo&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Jo("QUOTA_EXCEEDED",{dbName:Lo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Uo&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Jo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),tp(a,!1,d,f,b,g.tag),Io(e)):tp(a,!0,d,f,b,g.tag)}
function tp(a,b,c,d,e,f){Jo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
k.getName=function(){return this.h.name};
function op(a){this.h=a}
k=op.prototype;k.add=function(a,b){return ip(this.h.add(a,b))};
k.autoIncrement=function(){return this.h.autoIncrement};
k.clear=function(){return ip(this.h.clear()).then(function(){})};
function up(a,b,c){a.h.createIndex(b,c,{unique:!1})}
k.count=function(a){return ip(this.h.count(a))};
function vp(a,b){return wp(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
k.delete=function(a){return a instanceof IDBKeyRange?vp(this,a):ip(this.h.delete(a))};
k.get=function(a){return ip(this.h.get(a))};
k.index=function(a){try{return new xp(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Wo(a,this.h.name);throw b;}};
k.getName=function(){return this.h.name};
k.keyPath=function(){return this.h.keyPath};
function wp(a,b,c){a=a.h.openCursor(b.query,b.direction);return yp(a).then(function(d){return jp(d,c)})}
function qp(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Uo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(null===l)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function rp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return r(d).next().value})}
qp.prototype.abort=function(){this.h.abort();this.i=!0;throw new Uo("EXPLICIT_ABORT");};
qp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new op(a),this.j.set(a,b));return b};
function xp(a){this.h=a}
k=xp.prototype;k.count=function(a){return ip(this.h.count(a))};
k.delete=function(a){return zp(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
k.get=function(a){return ip(this.h.get(a))};
k.getKey=function(a){return ip(this.h.getKey(a))};
k.keyPath=function(){return this.h.keyPath};
k.unique=function(){return this.h.unique};
function zp(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return yp(a).then(function(d){return jp(d,c)})}
function Ap(a,b){this.request=a;this.cursor=b}
function yp(a){return ip(a).then(function(b){return b?new Ap(a,b):null})}
k=Ap.prototype;k.advance=function(a){this.cursor.advance(a);return yp(this.request)};
k.continue=function(a){this.cursor.continue(a);return yp(this.request)};
k.delete=function(){return ip(this.cursor.delete()).then(function(){})};
k.getKey=function(){return this.cursor.key};
k.getValue=function(){return this.cursor.value};
k.update=function(a){return ip(this.cursor.update(a))};function Bp(a,b,c){return new Promise(function(d,e){function f(){u||(u=new lp(g.result,{closed:q}));return u}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.be,l=c.blocking,m=c.ff,n=c.upgrade,q=c.closed,u;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&Jo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Lo(a)});var z=f(),C=new qp(g.transaction);
n&&n(z,function(E){return t.oldVersion<E&&t.newVersion>=E},C);
C.done.catch(function(E){e(E)})}catch(E){e(E)}});
g.addEventListener("success",function(){var t=g.result;l&&t.addEventListener("versionchange",function(){l(f())});
t.addEventListener("close",function(){Jo("IDB_UNEXPECTEDLY_CLOSED",{dbName:Lo(a),dbVersion:t.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Cp(a,b,c){c=void 0===c?{}:c;return Bp(a,b,c)}
function Dp(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return ya(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.be)&&c.addEventListener("blocked",function(){e()}),w(g,hp(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw Yo(f,a,"",-1);})}
;function Ep(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
Ep.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Cp(a,b,c)};
Ep.prototype.delete=function(a){a=void 0===a?{}:a;return Dp(this.name,a)};
function Fp(a,b){return new Uo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Gp(a,b){if(!b)throw Zo("openWithToken",Lo(a.name));return Hp(a)}
function Hp(a){function b(){var f,g,h,l,m,n,q,u,t,z;return x(function(C){switch(C.h){case 1:return g=null!=(f=Error().stack)?f:"",ya(C,2),w(C,a.i(a.name,a.options.version,d),4);case 4:h=C.i;for(var E=a.options,M=[],S=r(Object.keys(E.zb)),Q=S.next();!Q.done;Q=S.next()){Q=Q.value;var W=E.zb[Q],ha=void 0===W.Ne?Number.MAX_VALUE:W.Ne;!(h.h.version>=W.Gb)||h.h.version>=ha||h.h.objectStoreNames.contains(Q)||M.push(Q)}l=M;if(0===l.length){C.A(5);break}m=Object.keys(a.options.zb);n=h.objectStoreNames();if(a.m<
kn("ytidb_reopen_db_retries",0))return a.m++,h.close(),Io(new Uo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:n})),C.return(b());if(!(a.l<kn("ytidb_remake_db_retries",1))){C.A(6);break}a.l++;return w(C,a.delete(),7);case 7:return Io(new Uo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:n})),C.return(b());case 6:throw new Vo(n,m);case 5:return C.return(h);case 2:q=Ba(C);if(q instanceof DOMException?"VersionError"!==
q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){C.A(8);break}return w(C,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:u=C.i;t=u.h.version;if(void 0!==a.options.version&&t>a.options.version+1)throw u.close(),a.j=!1,Fp(a,t);return C.return(u);case 8:throw c(),q instanceof Error&&!R("ytidb_async_stack_killswitch")&&(q.stack=
q.stack+"\n"+g.substring(g.indexOf("\n")+1)),Yo(q,a.name,"",null!=(z=a.options.version)?z:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.j)throw Fp(a);if(a.h)return a.h;var d={blocking:function(f){f.close()},
closed:c,ff:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var Ip=new Ep("YtIdbMeta",{zb:{databases:{Gb:1}},upgrade:function(a,b){b(1)&&np(a,"databases",{keyPath:"actualName"})}});
function Jp(a,b){var c;return x(function(d){if(1==d.h)return w(d,Gp(Ip,b),2);c=d.i;return d.return(mp(c,["databases"],{ca:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return ip(f.h.put(a,void 0)).then(function(){})})}))})}
function Kp(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,Gp(Ip,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Lp(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,Gp(Ip,b),2)):3!=e.h?(d=e.i,w(e,mp(d,["databases"],{ca:!0,mode:"readonly"},function(f){c.length=0;return wp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Mp(a){return Lp(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Np(a,b,c){return Lp(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Op(a){var b,c;return x(function(d){if(1==d.h)return b=ro("YtIdbMeta hasAnyMeta other"),w(d,Lp(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Pp,Qp=new function(){}(new function(){});
function Rp(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=Ao();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Mo)f=/WebKit\/([0-9]+)/.exec(Yb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Yb()),f=!(f&&602<=parseInt(f[1],10)));if(f||ad)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
ya(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,Jp(d,Qp),4);case 4:return w(e,Kp("yt-idb-test-do-not-use",Qp),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Sp(){if(void 0!==Pp)return Pp;Do=!0;return Pp=Rp().then(function(a){Do=!1;var b;if(null!=(b=zo())&&b.h){var c;b={hasSucceededOnce:(null==(c=Ao())?void 0:c.hasSucceededOnce)||a};var d;null==(d=zo())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Tp(){return B("ytglobal.idbToken_")||void 0}
function Up(){var a=Tp();return a?Promise.resolve(a):Sp().then(function(b){(b=b?Qp:void 0)&&A("ytglobal.idbToken_",b);return b})}
;var Vp=0;function Wp(a,b){Vp||(Vp=Mi.ea(function(){var c,d,e,f,g;return x(function(h){switch(h.h){case 1:return w(h,Up(),2);case 2:c=h.i;if(!c)return h.return();d=!0;ya(h,3);return w(h,Np(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return w(h,Dp(f.actualName),7);case 7:return w(h,Kp(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),Io(g),d=!1;case 4:Mi.Ca(Vp),Vp=0,d&&Wp(a,b),h.h=0}})}))}
function Xp(){var a;return x(function(b){return 1==b.h?w(b,Up(),2):(a=b.i)?b.return(Op(a)):b.return(!1)})}
new gi;function Yp(a){if(!qo())throw a=new Uo("AUTH_INVALID",{dbName:a}),Io(a),a;var b=ro();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Zp(a,b,c,d){var e,f,g,h,l,m;return x(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",w(n,Up(),2);case 2:g=n.i;if(!g)throw h=Zo("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Io(h),h;Ko(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Yp(a);ya(n,3);return w(n,Jp(l,g),5);case 5:return w(n,Cp(l.actualName,b,d),6);case 6:return n.return(n.i);case 3:return m=Ba(n),ya(n,7),w(n,Kp(l.actualName,g),9);case 9:Aa(n,
8);break;case 7:Ba(n);case 8:throw m;}})}
function $p(a,b,c){c=void 0===c?{}:c;return Zp(a,b,!1,c)}
function aq(a,b,c){c=void 0===c?{}:c;return Zp(a,b,!0,c)}
function bq(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,Up(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Ko(a);d=Yp(a);return w(e,Dp(d.actualName,b),3)}return w(e,Kp(d.actualName,c),0)})}
function cq(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,Dp(d.actualName,b),2):w(e,Kp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function dq(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,Up(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Ko("LogsDatabaseV2");return w(d,Mp(b),3)}c=d.i;return w(d,cq(c,a,b),0)})}
function eq(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,Up(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Ko(a);return w(d,Dp(a,b),3)}return w(d,Kp(a,c),0)})}
;function fq(a,b){Ep.call(this,a,b);this.options=b;Ko(a)}
v(fq,Ep);function gq(a,b){var c;return function(){c||(c=new fq(a,b));return c}}
fq.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.qc?aq:$p)(a,b,Object.assign({},c))};
fq.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.qc?eq:bq)(this.name,a)};
function hq(a,b){return gq(a,b)}
;var iq={},jq=hq("ytGcfConfig",{zb:(iq.coldConfigStore={Gb:1},iq.hotConfigStore={Gb:1},iq),qc:!1,upgrade:function(a,b){b(1)&&(up(np(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),up(np(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function kq(a){return Gp(jq(),a)}
function lq(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:T()},w(g,kq(c),2);case 2:return e=g.i,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,pp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function mq(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:T()},w(h,kq(d),2);case 2:return f=h.i,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,pp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function nq(a){var b,c;return x(function(d){return 1==d.h?w(d,kq(a),2):3!=d.h?(b=d.i,c=void 0,w(d,mp(b,["coldConfigStore"],{mode:"readwrite",ca:!0},function(e){return zp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function oq(a){var b,c;return x(function(d){return 1==d.h?w(d,kq(a),2):3!=d.h?(b=d.i,c=void 0,w(d,mp(b,["hotConfigStore"],{mode:"readwrite",ca:!0},function(e){return zp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function pq(){this.h=0}
function qq(a,b,c){var d,e,f;return x(function(g){if(1==g.h){if(!R("update_log_event_config"))return g.A(0);c&&(a.i=c,A("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;A("yt.gcf.config.hotHashData",a.hotHashData);return(d=Tp())?c?g.A(4):w(g,oq(d),5):g.A(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return w(g,lq(c,b,d),0)})}
function rq(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!R("update_log_event_config"))return h.A(0);a.coldHashData=b;A("yt.gcf.config.coldHashData",a.coldHashData);return(d=Tp())?c?h.A(4):w(h,nq(d),5):h.A(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.A(0);g=c.configData;return w(h,mq(c,b,g,d),0)})}
;function sq(){return"INNERTUBE_API_KEY"in Pm&&"INNERTUBE_API_VERSION"in Pm}
function tq(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Dc:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),qd:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),we:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),sd:P("INNERTUBE_CONTEXT_HL"),rd:P("INNERTUBE_CONTEXT_GL"),xe:P("INNERTUBE_HOST_OVERRIDE")||"",ze:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ye:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function uq(a){var b={client:{hl:a.sd,gl:a.rd,clientName:a.qd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Dc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=ln();""!==c&&(b.client.experimentsToken=c);c=mn();0<c.length&&(b.request={internalExperimentFlags:c});vq(a,void 0,b);wq(void 0,b);xq(void 0,b);yq(a,void 0,b);zq(void 0,b);R("start_sending_config_hash")&&Aq(void 0,b);P("DELEGATED_SESSION_ID")&&
!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=r(Object.entries(cn(P("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=r(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Bq(a){var b=new kl,c=new $k;H(c,1,a.sd);H(c,2,a.rd);H(c,16,a.we);H(c,17,a.innertubeContextClientVersion);if(a.Dc){var d=a.Dc,e=new Wk;d.coldConfigData&&H(e,1,d.coldConfigData);d.appInstallData&&H(e,6,d.appInstallData);d.coldHashData&&H(e,3,d.coldHashData);d.hotHashData&&H(e,5,d.hotHashData);I(c,Wk,62,e)}(d=y.devicePixelRatio)&&1!=d&&H(c,65,Yd(d));d=ln();""!==d&&H(c,54,d);d=mn();if(0<d.length){e=new dl;for(var f=0;f<d.length;f++){var g=new bl;H(g,1,d[f].key);je(g,2,cl,d[f].value);qe(e,15,
bl,g)}I(b,dl,5,e)}vq(a,c);wq(b);xq(c);yq(a,c);zq(c);R("start_sending_config_hash")&&Aq(c);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a=new il,H(a,3,P("DELEGATED_SESSION_ID")));a=r(Object.entries(cn(P("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=r(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?H(c,12,e):"cmodel"===d?H(c,13,e):"cbr"===d?H(c,87,e):"cbrver"===d?H(c,88,e):"cos"===d?H(c,18,e):"cosver"===d?H(c,19,e):"cplatform"===d&&H(c,42,e);b.l(c);return b}
function vq(a,b,c){a=a.qd;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=le(b,Xk,96)||new Xk;var d=Wn();d=Object.keys(Hl).indexOf(d);d=-1===d?null:d;null!==d&&H(c,3,d);I(b,Xk,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Wn())}
function wq(a,b){var c=B("yt.embedded_player.embed_url");c&&(a?(b=le(a,fl,7)||new fl,H(b,4,c),I(a,fl,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function xq(a,b){var c;if(R("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?H(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function yq(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=le(b,Wk,62))?d:new Wk;H(c,6,a.appInstallData);I(b,Wk,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function zq(a,b){var c=no();c&&(a?H(a,61,jo[c]):b&&(b.client.connectionType=c));R("web_log_effective_connection_type")&&(c=oo())&&(a?H(a,94,ko[c]):b&&(b.client.effectiveConnectionType=c))}
function Cq(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.pg||P("AUTHORIZATION");b||(a?b="Bearer "+B("gapi.auth.getToken")().og:(a=Tn(Sn()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function Aq(a,b){pq.h||(pq.h=new pq);var c=pq.h;var d=T()-c.h;if(0!==c.h&&d<kn("send_config_hash_timer"))c=void 0;else{d=B("yt.gcf.config.coldConfigData");var e=B("yt.gcf.config.hotHashData"),f=B("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=T());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=le(a,Wk,62))?g:new Wk;H(b,1,c);H(b,3,d);H(b,5,e);I(a,Wk,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function Dq(a,b){this.version=a;this.args=b}
;function Eq(a,b){this.topic=a;this.h=b}
Eq.prototype.toString=function(){return this.topic};var Fq=B("ytPubsub2Pubsub2Instance")||new ij;ij.prototype.subscribe=ij.prototype.subscribe;ij.prototype.unsubscribeByKey=ij.prototype.Eb;ij.prototype.publish=ij.prototype.bb;ij.prototype.clear=ij.prototype.clear;A("ytPubsub2Pubsub2Instance",Fq);var Gq=B("ytPubsub2Pubsub2SubscribedKeys")||{};A("ytPubsub2Pubsub2SubscribedKeys",Gq);var Hq=B("ytPubsub2Pubsub2TopicToKeys")||{};A("ytPubsub2Pubsub2TopicToKeys",Hq);var Iq=B("ytPubsub2Pubsub2IsAsync")||{};A("ytPubsub2Pubsub2IsAsync",Iq);
A("ytPubsub2Pubsub2SkipSubKey",null);function Jq(a,b){var c=Kq();c&&c.publish.call(c,a.toString(),a,b)}
function Lq(a){var b=Mq,c=Kq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=B("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Gq[d])try{if(f&&b instanceof Eq&&b!=e)try{var h=b.h,l=f;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Va){var m=new h;h.Va=m.version}var n=h.Va}catch(E){}if(!n||l.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var q=n.construct;
var u=l.args,t=u.length;if(0<t){var z=Array(t);for(l=0;l<t;l++)z[l]=u[l];var C=z}else C=[];f=q.call(n,h,C)}catch(E){throw E.message="yt.pubsub2.Data.deserialize(): "+E.message,E;}}catch(E){throw E.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+E.message,E;}a.call(window,f)}catch(E){Vm(E)}},Iq[b.toString()]?B("yt.scheduler.instance")?Mi.ea(g):qn(g,0):g())});
Gq[d]=!0;Hq[b.toString()]||(Hq[b.toString()]=[]);Hq[b.toString()].push(d);return d}
function Nq(){var a=Oq,b=Lq(function(c){a.apply(void 0,arguments);Pq(b)});
return b}
function Pq(a){var b=Kq();b&&("number"===typeof a&&(a=[a]),hb(a,function(c){b.unsubscribeByKey(c);delete Gq[c]}))}
function Kq(){return B("ytPubsub2Pubsub2Instance")}
;function Qq(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Jq("meta_logging_csi_event",{timerName:a,Pg:b})}
;var Rq=kn("max_body_size_to_compress",5E5),Sq=kn("min_body_size_to_compress",500),Tq=!0,Uq=0,Vq=0,Wq=kn("compression_performance_threshold",250),Xq=kn("slow_compressions_before_abandon_count",10);
function Yq(a,b,c,d){var e=T(),f={startTime:e,ticks:{},infos:{}};if(Tq)try{var g=Zq(b);if(!(g>Rq||g<Sq)){var h=Mk(Hi(b)),l=T();f.ticks.gelc=l;Vq++;R("disable_compression_due_to_performance_degredation")&&l-e>=Wq&&(Uq++,R("abandon_compression_after_N_slow_zips")?Vq===kn("compression_disable_point")&&Uq>Xq&&(Tq=!1):Tq=!1);$q(f);if(ar(h,b)||!R("only_compress_gel_if_smaller"))c.headers||(c.headers={}),c.headers["Content-Encoding"]="gzip",c.postBody=h,c.postParams=void 0}d(a,c)}catch(m){Wm(m),d(a,c)}else d(a,
c)}
function br(a){var b=void 0===b?!1:b;var c={startTime:T(),ticks:{},infos:{}};if(!a.body)return a;try{var d="string"===typeof a.body?a.body:JSON.stringify(a.body),e=Zq(d);if(e>Rq||e<Sq)return a;var f=Mk(Hi(d)),g=T();c.ticks.gelc=g;if(!ar(f,d)&&R("only_compress_gel_if_smaller"))return a;b&&$q(c);a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(h){return Wm(h),a}}
function ar(a,b){if(!window.Blob)return!0;var c=a.length<Zq(b);c||Wm(new po("Compressed req body is larger than uncompressed","original size: "+Zq(b),"compressed size: "+a.length));return c}
function Zq(a){return(new Blob(a.split(""))).size}
function $q(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||Qq("gel_compression",a,{sampleRate:.1})}
;function cr(a){a=Object.assign({},a);delete a.Authorization;var b=Wg();if(b){var c=new Si;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=sd(c.digest(),3)}return a}
;var dr;function er(){dr||(dr=new yo("yt.innertube"));return dr}
function fr(a,b,c,d){if(d)return null;d=er().get("nextId",!0)||1;var e=er().get("requests",!0)||{};e[d]={method:a,request:b,authState:cr(c),requestTime:Math.round(T())};er().set("nextId",d+1,86400,!0);er().set("requests",e,86400,!0);return d}
function gr(a){var b=er().get("requests",!0)||{};delete b[a];er().set("requests",b,86400,!0)}
function hr(a){var b=er().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=cr(Cq(!1));ub(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),ir(a,d.method,e,{}));delete b[c]}}er().set("requests",b,86400,!0)}}
;function jr(a){this.Zb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.tb=function(){};
this.now=Date.now;this.Jb=!1;var b;this.Ld=null!=(b=a.Ld)?b:100;var c;this.Fd=null!=(c=a.Fd)?c:1;var d;this.Dd=null!=(d=a.Dd)?d:2592E6;var e;this.Bd=null!=(e=a.Bd)?e:12E4;var f;this.Ed=null!=(f=a.Ed)?f:5E3;var g;this.N=null!=(g=a.N)?g:void 0;this.fc=!!a.fc;var h;this.dc=null!=(h=a.dc)?h:.1;var l;this.mc=null!=(l=a.mc)?l:10;a.handleError&&(this.handleError=a.handleError);a.tb&&(this.tb=a.tb);a.Jb&&(this.Jb=a.Jb);a.Zb&&(this.Zb=a.Zb);this.O=a.O;this.ya=a.ya;this.W=a.W;this.U=a.U;this.Oa=a.Oa;this.Lc=
a.Lc;this.Kc=a.Kc;kr(this)&&(!this.O||this.O("networkless_logging"))&&lr(this)}
function lr(a){kr(a)&&!a.Jb&&(a.h=!0,a.fc&&Math.random()<=a.dc&&a.W.de(a.N),mr(a),a.U.oa()&&a.Rb(),a.U.Ma(a.Lc,a.Rb.bind(a)),a.U.Ma(a.Kc,a.bd.bind(a)))}
k=jr.prototype;k.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(kr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W.set(d,this.N).then(function(e){d.id=e;c.U.oa()&&nr(c,d)}).catch(function(e){nr(c,d);
or(c,e)})}else this.Oa(a,b)};
k.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(kr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.O&&this.O("nwl_skip_retry")&&(e.skipRetry=c);if(this.U.oa()||this.O&&this.O("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(l){if(1==l.h)return w(l,d.W.set(e,d.N).catch(function(m){or(d,m)}),2);
f(g,h);l.h=0})}}this.Oa(a,b,e.skipRetry)}else this.W.set(e,this.N).catch(function(g){d.Oa(a,b,e.skipRetry);
or(d,g)})}else this.Oa(a,b,this.O&&this.O("nwl_skip_retry")&&c)};
k.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(kr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.W.sb(d.id,c.N):e=!0;c.U.gb&&c.O&&c.O("vss_network_hint")&&c.U.gb(!0);f(g,h)};
this.Oa(d.url,d.options);this.W.set(d,this.N).then(function(g){d.id=g;e&&c.W.sb(d.id,c.N)}).catch(function(g){or(c,g)})}else this.Oa(a,b)};
k.Rb=function(){var a=this;if(!kr(this))throw Zo("throttleSend");this.i||(this.i=this.ya.ea(function(){var b;return x(function(c){if(1==c.h)return w(c,a.W.nd("NEW",a.N),2);if(3!=c.h)return b=c.i,b?w(c,nr(a,b),3):(a.bd(),c.return());a.i&&(a.i=0,a.Rb());c.h=0})},this.Ld))};
k.bd=function(){this.ya.Ca(this.i);this.i=0};
function nr(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!kr(a))throw c=Zo("immediateSend"),c;if(void 0===b.id){e.A(2);break}return w(e,a.W.Be(b.id,a.N),3);case 3:(d=e.i)||a.tb(Error("The request cannot be found in the database."));case 2:if(pr(a,b,a.Dd)){e.A(4);break}a.tb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.A(5);break}return w(e,a.W.sb(b.id,a.N),5);case 5:return e.return();case 4:b.skipRetry||(b=qr(a,b));if(!b){e.A(0);break}if(!b.skipRetry||
void 0===b.id){e.A(8);break}return w(e,a.W.sb(b.id,a.N),8);case 8:a.Oa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function qr(a,b){if(!kr(a))throw Zo("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,m;return x(function(n){switch(n.h){case 1:g=rr(f);(h=sr(f))&&a.O&&a.O("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.O&&a.O("nwl_consider_error_code")&&g||a.O&&!a.O("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.mc)){n.A(2);break}if(!a.U.pc){n.A(3);break}return w(n,a.U.pc(),3);case 3:if(a.U.oa()){n.A(2);break}c(e,f);if(!a.O||!a.O("nwl_consider_error_code")||void 0===(null==(l=b)?void 0:l.id)){n.A(6);
break}return w(n,a.W.Pc(b.id,a.N,!1),6);case 6:return n.return();case 2:if(a.O&&a.O("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.mc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(m=b)?void 0:m.id)){n.A(8);break}return b.sendCount<a.Fd?w(n,a.W.Pc(b.id,a.N,!0,h?!1:void 0),12):w(n,a.W.sb(b.id,a.N),8);case 12:a.ya.ea(function(){a.U.oa()&&a.Rb()},a.Ed);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.A(2):w(h,a.W.sb(b.id,a.N),2);a.U.gb&&a.O&&a.O("vss_network_hint")&&a.U.gb(!0);d(e,f);h.h=0})};
return b}
function pr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function mr(a){if(!kr(a))throw Zo("retryQueuedRequests");a.W.nd("QUEUED",a.N).then(function(b){b&&!pr(a,b,a.Bd)?a.ya.ea(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.A(2):w(c,a.W.Pc(b.id,a.N),2);mr(a);c.h=0})}):a.U.oa()&&a.Rb()})}
function or(a,b){a.Rd&&!a.U.oa()?a.Rd(b):a.handleError(b)}
function kr(a){return!!a.N||a.Zb}
function rr(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function sr(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var tr;
function ur(){if(tr)return tr();var a={};tr=hq("LogsDatabaseV2",{zb:(a.LogsRequestsStore={Gb:2},a),qc:!1,upgrade:function(b,c,d){c(2)&&np(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),up(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return tr()}
;function vr(a){return Gp(ur(),a)}
function Cr(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},w(g,vr(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,pp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=T();Gr(c);return g.return(f)})}
function Zr(a,b){var c,d,e,f,g,h,l;return x(function(m){if(1==m.h)return c={startTime:T(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},w(m,vr(b),2);if(3!=m.h)return d=m.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),l=void 0,w(m,mp(d,["LogsRequestsStore"],{mode:"readwrite",ca:!0},function(n){return zp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.getValue()&&(l=q.getValue(),"NEW"===a&&
(l.status="QUEUED",q.update(l)))})}),3);
c.ticks.tc=T();Gr(c);return m.return(l)})}
function $r(a,b){var c;return x(function(d){if(1==d.h)return w(d,vr(b),2);c=d.i;return d.return(mp(c,["LogsRequestsStore"],{mode:"readwrite",ca:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",ip(f.h.put(g,void 0)).then(function(){return g})})}))})}
function as(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.h)return w(f,vr(b),2);e=f.i;return f.return(mp(e,["LogsRequestsStore"],{mode:"readwrite",ca:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),void 0!==d&&(l.options.compress=d),ip(h.h.put(l,void 0)).then(function(){return l})):cp.resolve(void 0)})}))})}
function bs(a,b){var c;return x(function(d){if(1==d.h)return w(d,vr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function cs(a){var b,c;return x(function(d){if(1==d.h)return w(d,vr(a),2);b=d.i;c=T()-2592E6;return w(d,mp(b,["LogsRequestsStore"],{mode:"readwrite",ca:!0},function(e){return wp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function ds(){x(function(a){return w(a,dq(),0)})}
function Gr(a){R("nwl_csi_killswitch")||Qq("networkless_performance",a,{sampleRate:1})}
;var es={},fs=hq("ServiceWorkerLogsDatabase",{zb:(es.SWHealthLog={Gb:1},es),qc:!0,upgrade:function(a,b){b(1)&&up(np(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function gs(a){return Gp(fs(),a)}
function hs(a){var b,c;x(function(d){if(1==d.h)return w(d,gs(a),2);b=d.i;c=T()-2592E6;return w(d,mp(b,["SWHealthLog"],{mode:"readwrite",ca:!0},function(e){return wp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function is(a){var b;return x(function(c){if(1==c.h)return w(c,gs(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var js={},ks=0;function ls(a){var b=new Image,c=""+ks++;js[c]=b;b.onload=b.onerror=function(){delete js[c]};
b.src=a}
;function ms(){this.h=new Map;this.i=!1}
function ns(){if(!ms.h){var a=B("yt.networkRequestMonitor.instance")||new ms;A("yt.networkRequestMonitor.instance",a);ms.h=a}return ms.h}
ms.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
ms.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
ms.prototype.removeParams=function(a){return a.split("?")[0]};
ms.prototype.removeParams=ms.prototype.removeParams;ms.prototype.isEndpointCFR=ms.prototype.isEndpointCFR;ms.prototype.requestComplete=ms.prototype.requestComplete;ms.getInstance=ns;var os;function ps(){os||(os=new yo("yt.offline"));return os}
function qs(a){if(R("offline_error_handling")){var b=ps().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);ps().set("errors",b,2592E3,!0)}}
;function rs(){yf.call(this);var a=this;this.j=!1;this.i=Li();this.i.Ma("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=ps().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new po(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Vm(d)}ps().set("errors",{},2592E3,!0)}}})}
v(rs,yf);function ss(){if(!rs.h){var a=B("yt.networkStatusManager.instance")||new rs;A("yt.networkStatusManager.instance",a);rs.h=a}return rs.h}
k=rs.prototype;k.oa=function(){return this.i.oa()};
k.gb=function(a){this.i.i=a};
k.re=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
k.je=function(){this.j=!0};
k.Ma=function(a,b){return this.i.Ma(a,b)};
k.pc=function(a){a=Ji(this.i,a);a.then(function(b){R("use_cfr_monitor")&&ns().requestComplete("generate_204",b)});
return a};
rs.prototype.sendNetworkCheckRequest=rs.prototype.pc;rs.prototype.listen=rs.prototype.Ma;rs.prototype.enableErrorFlushing=rs.prototype.je;rs.prototype.getWindowStatus=rs.prototype.re;rs.prototype.networkStatusHint=rs.prototype.gb;rs.prototype.isNetworkAvailable=rs.prototype.oa;rs.getInstance=ss;function ts(a){a=void 0===a?{}:a;yf.call(this);var b=this;this.i=this.s=0;this.j=ss();var c=B("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.oc?(this.oc=a.oc,c("networkstatus-online",function(){us(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){us(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){zf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){zf(b,"publicytnetworkstatus-offline")})))}
v(ts,yf);ts.prototype.oa=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
ts.prototype.gb=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
ts.prototype.pc=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&ns().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.oa())})):c?d.return(c(a)):d.return(!0)})};
function us(a,b){a.oc?a.i?(Mi.Ca(a.s),a.s=Mi.ea(function(){a.m!==b&&(zf(a,b),a.m=b,a.i=T())},a.oc-(T()-a.i))):(zf(a,b),a.m=b,a.i=T()):zf(a,b)}
;var vs;function ws(){var a=jr.call;vs||(vs=new ts({Bg:!0,vg:!0}));a.call(jr,this,{W:{de:cs,sb:bs,nd:Zr,Be:$r,Pc:as,set:Cr},U:vs,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Wm(new po(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Vm(b)},
tb:Wm,Oa:xs,now:T,Rd:qs,ya:xo(),Lc:"publicytnetworkstatus-online",Kc:"publicytnetworkstatus-offline",fc:!0,dc:.1,mc:kn("potential_esf_error_limit",10),O:R,Jb:!(qo()&&ys())});this.j=new gi;R("networkless_immediately_drop_all_requests")&&ds();eq("LogsDatabaseV2")}
v(ws,jr);function zs(){var a=B("yt.networklessRequestController.instance");a||(a=new ws,A("yt.networklessRequestController.instance",a),R("networkless_logging")&&Up().then(function(b){a.N=b;lr(a);a.j.resolve();a.fc&&Math.random()<=a.dc&&a.N&&hs(a.N);R("networkless_immediately_drop_sw_health_store")&&As(a)}));
return a}
ws.prototype.writeThenSend=function(a,b){b||(b={});qo()||(this.h=!1);jr.prototype.writeThenSend.call(this,a,b)};
ws.prototype.sendThenWrite=function(a,b,c){b||(b={});qo()||(this.h=!1);jr.prototype.sendThenWrite.call(this,a,b,c)};
ws.prototype.sendAndWrite=function(a,b){b||(b={});qo()||(this.h=!1);jr.prototype.sendAndWrite.call(this,a,b)};
ws.prototype.awaitInitialization=function(){return this.j.promise};
function As(a){var b;x(function(c){if(!a.N)throw b=Zo("clearSWHealthLogsDb"),b;return c.return(is(a.N).catch(function(d){a.handleError(d)}))})}
function xs(a,b,c){R("use_cfr_monitor")&&Bs(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)zn(a,void 0,"POST",e);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))zn(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new db({url:a});if(g.j&&g.i||
g.l){var h=xc(yc(5,a)),l;if(!(l=!h||!h.endsWith("/aclk"))){var m=a.search(Jc),n=Ic(a,0,"ri",m);if(0>n)var q=null;else{var u=a.indexOf("&",n);if(0>u||u>m)u=m;q=decodeURIComponent(a.slice(n+3,-1!==u?u:0).replace(/\+/g," "))}l="1"!==q}var t=!l;break b}}catch(C){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(C){}z=!1}c=z?!0:!1}else c=!1;c||ls(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),
Yq(a,b.postBody,b,wn)):Yq(a,JSON.stringify(b.postParams),b,En):wn(a,b)}
function Bs(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){ns().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){ns().requestComplete(a,!0);d(e,f)}}
function ys(){return"www.youtube-nocookie.com"!==zc(document.location.toString())}
;var Cs=!1,Ds=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Cs};A("ytNetworklessLoggingInitializationOptions",Ds);function Es(){var a;x(function(b){if(1==b.h)return w(b,Up(),2);a=b.i;if(!a||!qo()&&!R("nwl_init_require_datasync_id_killswitch")||!ys())return b.A(0);Cs=!0;Ds.isNwlInitialized=Cs;return w(b,zs().awaitInitialization(),0)})}
;function Fs(a){var b=this;this.config_=null;a?this.config_=a:sq()&&(this.config_=tq());to(function(){hr(b)},5E3)}
Fs.prototype.isReady=function(){!this.config_&&sq()&&(this.config_=tq());return!!this.config_};
function ir(a,b,c,d){function e(z){z=void 0===z?!1:z;var C;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(C=fr(b,c,m,l)),C)){var E=g.onSuccess,M=g.onFetchSuccess;g.onSuccess=function(Q,W){gr(C);E(Q,W)};
c.onFetchSuccess=function(Q,W){gr(C);M(Q,W)}}try{if(z&&d.retry&&!d.wd.bypassNetworkless)g.method="POST",d.wd.writeThenSend?zs().writeThenSend(t,g):zs().sendAndWrite(t,g);
else if(d.compress)if(g.postBody){var S=g.postBody;"string"!==typeof S&&(S=JSON.stringify(g.postBody));Yq(t,S,g,wn)}else Yq(t,JSON.stringify(g.postParams),g,En);else R("web_all_payloads_via_jspb")?wn(t,g):En(t,g)}catch(Q){if("InvalidAccessError"==Q.name)C&&(gr(C),C=0),Wm(Error("An extension is blocking network request."));else throw Q;}C&&to(function(){hr(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Wm(new po("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new po("innertube xhrclient not ready",b,c,d);Vm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,C){if(d.onSuccess)d.onSuccess(C)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,C){if(d.onError)d.onError(C)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.xe)&&(h=f);var l=a.config_.ze||!1,m=Cq(l,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},u=a.config_.ye&&f;u=u&&f.startsWith("Bearer");u||(q.key=a.config_.innertubeApiKey);var t=en(""+h+n,q||{},!0);(B("ytNetworklessLoggingInitializationOptions")?
Ds.isNwlInitialized:Cs)?Sp().then(function(z){e(z)}):e(!1)}
;var Gs=0,Hs=cd?"webkit":bd?"moz":$c?"ms":Zc?"o":"";A("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Gs});var Is={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Js(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Is||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Ks(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Js.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Js.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Js.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var qb=y.ytEventsEventsListeners||{};A("ytEventsEventsListeners",qb);var Ls=y.ytEventsEventsCounter||{count:0};A("ytEventsEventsCounter",Ls);
function Ms(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return pb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ta(e[4])&&Ta(d)&&ub(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Ns=fb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Os(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ms(a,b,c,d);if(e)return e;e=++Ls.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Js(h);if(!If(h.relatedTarget,function(l){return l==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Js(h);
h.currentTarget=a;return c.call(a,h)};
g=Um(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ns()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);qb[e]=[a,b,c,g,d];return e}
function Ps(a){a&&("string"==typeof a&&(a=[a]),hb(a,function(b){if(b in qb){var c=qb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ns()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete qb[b]}}))}
;function Qs(a){this.G=a;this.i=null;this.m=0;this.v=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.R=Os(window,"mousemove",Za(this.X,this));a=Za(this.L,this);"function"===typeof a&&(a=Um(a));this.Y=window.setInterval(a,25)}
ab(Qs,L);Qs.prototype.X=function(a){void 0===a.h&&Ks(a);var b=a.h;void 0===a.i&&Ks(a);this.i=new Ef(b,a.i)};
Qs.prototype.L=function(){if(this.i){var a=T();if(0!=this.m){var b=this.v,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.G();this.s=d}this.m=a;this.v=this.i;this.l=(this.l+1)%4}};
Qs.prototype.M=function(){window.clearInterval(this.Y);Ps(this.R)};var Rs={};
function Ss(a){var b=void 0===a?{}:a;a=void 0===b.Ke?!1:b.Ke;b=void 0===b.ke?!0:b.ke;if(null==B("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;A("_lact",c,window);A("_fact",c,window);-1==c&&Ts();Os(document,"keydown",Ts);Os(document,"keyup",Ts);Os(document,"mousedown",Ts);Os(document,"mouseup",Ts);a?Os(window,"touchmove",function(){Us("touchmove",200)},{passive:!0}):(Os(window,"resize",function(){Us("resize",200)}),b&&Os(window,"scroll",function(){Us("scroll",200)}));
new Qs(function(){Us("mouse",100)});
Os(document,"touchstart",Ts,{passive:!0});Os(document,"touchend",Ts,{passive:!0})}}
function Us(a,b){Rs[a]||(Rs[a]=!0,Mi.ea(function(){Ts();Rs[a]=!1},b))}
function Ts(){null==B("_lact",window)&&Ss();var a=Date.now();A("_lact",a,window);-1==B("_fact",window)&&A("_fact",a,window);(a=B("ytglobal.ytUtilActivityCallback_"))&&a()}
function Vs(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Ws=y.ytPubsubPubsubInstance||new ij,Xs=y.ytPubsubPubsubSubscribedKeys||{},Ys=y.ytPubsubPubsubTopicToKeys||{},Zs=y.ytPubsubPubsubIsSynchronous||{};function $s(a,b){var c=at();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Xs[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Zs[a]?f():qn(f,0)}catch(g){Vm(g)}},void 0);
Xs[d]=!0;Ys[a]||(Ys[a]=[]);Ys[a].push(d);return d}return 0}
function bt(a){var b=at();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),hb(a,function(c){b.unsubscribeByKey(c);delete Xs[c]}))}
function ct(a,b){var c=at();c&&c.publish.apply(c,arguments)}
function dt(a){var b=at();if(b)if(b.clear(a),a)et(a);else for(var c in Ys)et(c)}
function at(){return y.ytPubsubPubsubInstance}
function et(a){Ys[a]&&(a=Ys[a],hb(a,function(b){Xs[b]&&delete Xs[b]}),a.length=0)}
ij.prototype.subscribe=ij.prototype.subscribe;ij.prototype.unsubscribeByKey=ij.prototype.Eb;ij.prototype.publish=ij.prototype.bb;ij.prototype.clear=ij.prototype.clear;A("ytPubsubPubsubInstance",Ws);A("ytPubsubPubsubTopicToKeys",Ys);A("ytPubsubPubsubIsSynchronous",Zs);A("ytPubsubPubsubSubscribedKeys",Xs);var ft=Symbol("injectionDeps");function gt(a){this.name=a}
gt.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function ht(a){this.key=a}
function jt(){this.h=new Map;this.i=new Map}
jt.prototype.resolve=function(a){return a instanceof ht?kt(this,a.key,[],!0):kt(this,a,[])};
function kt(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Od)var e=d.Od;else if(d.lf)e=d[ft]?lt(a,d[ft],c):[],e=d.lf.apply(d,ja(e));else if(d.Nd){e=d.Nd;var f=e[ft]?lt(a,e[ft],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ja(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ng||a.i.set(b,e);return e}
function lt(a,b,c){return b?b.map(function(d){return d instanceof ht?kt(a,d.key,c,!0):kt(a,d,c)}):[]}
;var mt;function nt(){mt||(mt=new jt);return mt}
;function ot(){this.store={};this.h={}}
ot.prototype.storePayload=function(a,b){a=pt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
ot.prototype.extractMatchingEntries=function(a){a=qt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ja(this.store[a[c]])),delete this.store[a[c]]);return b};
ot.prototype.getSequenceCount=function(a){a=qt(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function qt(a,b){var c=pt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&pt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(rt(b.auth,g[0])){var h=b.isJspb;rt(void 0===h?"undefined":h?"true":"false",g[1])&&rt(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function rt(a,b){return void 0===a||"undefined"===a?!0:a===b}
ot.prototype.getSequenceCount=ot.prototype.getSequenceCount;ot.prototype.extractMatchingEntries=ot.prototype.extractMatchingEntries;ot.prototype.storePayload=ot.prototype.storePayload;function pt(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;function st(a,b){if(a)return a[b.name]}
;var tt=kn("initial_gel_batch_timeout",2E3),ut=kn("gel_queue_timeout_max_ms",6E4),vt=Math.pow(2,16)-1,wt=void 0;function xt(){this.j=this.h=this.i=0}
var zt=new xt,At=new xt,Bt,Ct=!0,Dt=y.ytLoggingTransportTokensToCttTargetIds_||{};A("ytLoggingTransportTokensToCttTargetIds_",Dt);var Et=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};A("ytLoggingTransportTokensToJspbCttTargetIds_",Et);var Ft={};function Gt(){var a=B("yt.logging.ims");a||(a=new ot,A("yt.logging.ims",a));return a}
function Ht(a,b){if("log_event"===a.endpoint){It(a);var c=Jt(a);Ft[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Gt().storePayload(d,a.payload);Kt(b,c,!1,d)}}
function Lt(a,b){if("log_event"===a.endpoint){It(void 0,a);var c=Jt(a,!0);Ft[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Gt().storePayload(d,a.payload.toJSON());Kt(b,c,!0,d)}}
function Kt(a,b,c,d){c=void 0===c?!1:c;a&&(wt=new a);a=kn("tvhtml5_logging_max_batch_ads_fork")||kn("web_logging_max_batch")||100;var e=T(),f=c?At.j:zt.j,g=0;d&&(g=Gt().getSequenceCount(d));g>=a?Bt||(Bt=Mt(function(){Nt({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,c);Bt=void 0},0)):10<=e-f&&(Ot(c),c?At.j=e:zt.j=e)}
function Pt(a,b){if("log_event"===a.endpoint){It(a);var c=Jt(a),d=new Map;d.set(c,[a.payload]);b&&(wt=new b);return new Uf(function(e,f){wt&&wt.isReady()?Qt(d,wt,e,f,{bypassNetworkless:!0},!0):e()})}}
function Rt(a,b){if("log_event"===a.endpoint){It(void 0,a);var c=Jt(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(wt=new b);return new Uf(function(e){wt&&wt.isReady()?St(d,wt,e,{bypassNetworkless:!0},!0):e()})}}
function Jt(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new zm;c.videoId?d.setVideoId(c.videoId):c.playlistId&&je(d,2,Am,c.playlistId);Et[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Dt[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Nt(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Uf(function(d,e){c?(Tt(At.i),Tt(At.h),At.h=0):(Tt(zt.i),Tt(zt.h),zt.h=0);if(wt&&wt.isReady()){var f=a,g=c,h=wt;f=void 0===f?{}:f;g=void 0===g?!1:g;var l=new Map,m=new Map;if(void 0!==b)g?(e=Gt().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,e),St(l,h,d,f)):(l=Gt().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),m.set(b,l),Qt(m,h,d,e,f));else if(g){e=r(Object.keys(Ft));for(g=e.next();!g.done;g=e.next())m=g.value,g=Gt().extractMatchingEntries({isJspb:!0,
cttAuthInfo:m}),0<g.length&&l.set(m,g),delete Ft[m];St(l,h,d,f)}else{l=r(Object.keys(Ft));for(g=l.next();!g.done;g=l.next()){g=g.value;var n=Gt().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<n.length&&m.set(g,n);delete Ft[g]}Qt(m,h,d,e,f)}}else Ot(c),d()})}
function Ot(a){a=void 0===a?!1:a;if(R("web_gel_timeout_cap")&&(!a&&!zt.h||a&&!At.h)){var b=Mt(function(){Nt({writeThenSend:!0},void 0,a)},ut);
a?At.h=b:zt.h=b}Tt(a?At.i:zt.i);b=P("LOGGING_BATCH_TIMEOUT",kn("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Ct&&(b=tt);b=Mt(function(){Nt({writeThenSend:!0},void 0,a)},b);
a?At.i=b:zt.i=b}
function Qt(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(T()),h=a.size,l={};a=r(a);for(var m=a.next();!m.done;l={Sb:l.Sb,Ya:l.Ya,Cb:l.Cb,Ub:l.Ub,Tb:l.Tb},m=a.next()){var n=r(m.value);m=n.next().value;n=n.next().value;l.Ya=wb({context:uq(b.config_||tq())});if(!Ra(n)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}l.Ya.events=n;(n=Dt[m])&&Ut(l.Ya,m,n);delete Dt[m];l.Cb="visitorOnlyApprovedKey"===m;Vt(l.Ya,g,l.Cb);Wt(e);l.Ub=function(q){R("update_log_event_config")&&Mi.ea(function(){return x(function(u){return w(u,
Xt(q),0)})});
h--;h||c()};
l.Sb=0;l.Tb=function(q){return function(){q.Sb++;if(e.bypassNetworkless&&1===q.Sb)try{ir(b,"log_event",q.Ya,Yt({writeThenSend:!0},q.Cb,q.Ub,q.Tb,f)),Ct=!1}catch(u){Vm(u),d()}h--;h||c()}}(l);
try{ir(b,"log_event",l.Ya,Yt(e,l.Cb,l.Ub,l.Tb,f)),Ct=!1}catch(q){Vm(q),d()}}}
function St(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(T()),g=a.size,h=new Map([].concat(ja(a)));h=r(h);for(var l=h.next();!l.done;l=h.next()){var m=r(l.value).next().value,n=a.get(m);l=new Bm;var q=Bq(b.config_||tq());I(l,kl,1,q);n=n?Zt(n):[];n=r(n);for(q=n.next();!q.done;q=n.next())qe(l,3,vm,q.value);(n=Et[m])&&$t(l,m,n);delete Et[m];m="visitorOnlyApprovedKey"===m;au(l,f,m);Wt(d);n={startTime:T(),ticks:{},infos:{}};l=Ie(l);n.ticks.geljspc=T();R("log_jspb_serialize_latency")&&Qq("gel_jspb_serialize",
n,{sampleRate:.1});m=Yt(d,m,function(u){R("update_log_event_config")&&Mi.ea(function(){return x(function(t){return w(t,Xt(u),0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=l;ir(b,"log_event","",m);Ct=!1}}
function Wt(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function Yt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,wd:a,dangerousLogToVisitorSession:b,rg:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};bu()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function Vt(a,b,c){bu()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&(c=cu(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function au(a,b,c){bu()||H(a,2,b);if(!c&&(b=P("EVENT_ID"))){c=cu();var d=new ym;H(d,1,b);H(d,2,c);I(a,ym,5,d)}}
function cu(){var a=P("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*vt/2));a++;a>vt&&(a=1);Qm("BATCH_CLIENT_COUNTER",a);return a}
function Ut(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function $t(a,b,c){var d=1===ke(c,Am)?1:-1;if(de(c,d))d=1;else if(c.getPlaylistId())d=2;else return;I(a,zm,4,c);a=le(a,kl,1)||new kl;c=le(a,il,3)||new il;var e=new hl;H(e,2,b);H(e,1,d);qe(c,12,hl,e);I(a,il,3,c)}
function Zt(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new vm(a[c]))}catch(d){Vm(new po("Transport failed to deserialize "+String(a[c])))}return b}
function It(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}A("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function bu(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Mt(a,b){return R("transport_use_scheduler")?to(a,b):qn(a,b)}
function Tt(a){R("transport_use_scheduler")?Mi.Ca(a):window.clearTimeout(a)}
function Xt(a){var b,c,d,e,f,g,h,l,m,n;return x(function(q){return 1==q.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=st(d,Qk),g=null==(f=d)?void 0:f.hotHashData,h=st(d,Pk),m=null==(l=d)?void 0:l.coldHashData,(n=nt().resolve(new ht(pq)))?g?e?w(q,qq(n,g,e),2):w(q,qq(n,g),2):q.A(2):q.return()):m?h?w(q,rq(n,m,h),0):w(q,rq(n,m),0):q.A(0)})}
;var du=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",du);
function eu(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;R("enable_unknown_lact_fix_on_html5")&&Ss();a=Vs();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:fu(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete du[d.sequenceGroup]);(d.sendIsolatedPayload?Pt:Ht)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function gu(a){Nt(void 0,void 0,void 0===a?!1:a)}
function fu(a){du[a]=a in du?du[a]+1:0;return du[a]}
;var hu=[];function Ho(a,b,c){c=void 0===c?{}:c;var d=Fs;P("ytLoggingEventsDefaultDisabled",!1)&&Fs===Fs&&(d=null);R("web_all_payloads_via_jspb")?(c.timestamp||(c.timestamp=T()),hu.push({Mc:a,payload:b,options:c})):eu(a,b,d,c)}
;var iu=y.ytLoggingGelSequenceIdObj_||{};A("ytLoggingGelSequenceIdObj_",iu);
function ju(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||T());H(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Vs();d=new um;H(d,1,c.timestamp||!isFinite(e)?-1:e);if(R("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;var f=fu(e),g=new tm;H(g,2,f);H(g,1,e);I(d,tm,3,g);c.endOfSequence&&delete iu[c.sequenceGroup]}I(a,um,33,d);(c.sendIsolatedPayload?Rt:Lt)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function ku(a,b){b=void 0===b?{}:b;var c=!1;P("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);ju(a,c?null:Fs,b)}
;function lu(a,b,c){var d=new vm;oe(d,im,72,wm,a);c?ju(d,c,b):ku(d,b)}
function mu(a,b,c){var d=new vm;oe(d,hm,73,wm,a);c?ju(d,c,b):ku(d,b)}
function nu(a,b,c){var d=new vm;oe(d,gm,78,wm,a);c?ju(d,c,b):ku(d,b)}
function ou(a,b,c){var d=new vm;oe(d,jm,208,wm,a);c?ju(d,c,b):ku(d,b)}
function pu(a,b,c){var d=new vm;oe(d,bm,156,wm,a);c?ju(d,c,b):ku(d,b)}
function qu(a,b,c){var d=new vm;oe(d,dm,215,wm,a);c?ju(d,c,b):ku(d,b)}
;var ru=new Set,su=0,tu=0,uu=0,vu=[],wu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Go(a){xu(a)}
function yu(a){xu(a,"WARNING")}
function xu(a,b,c,d,e,f,g){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");var h=f,l=void 0===b?"ERROR":b,m=void 0===g?!1:g;l=void 0===l?"ERROR":l;m=void 0===m?!1:m;if(a){a.hasOwnProperty("level")&&a.level&&(l=a.level);if(R("console_log_js_exceptions")){var n=[];n.push("Name: "+a.name);n.push("Message: "+a.message);a.hasOwnProperty("params")&&n.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&n.push("Error args: "+
JSON.stringify(a.args));n.push("File name: "+a.fileName);n.push("Stacktrace: "+a.stack);window.console.log(n.join("\n"),a)}if(!(5<=su)){var q=vu,u=Se(a),t=u.message||"Unknown Error",z=u.name||"UnknownError",C=u.stack||a.i||"Not available";if(C.startsWith(z+": "+t)){var E=C.split("\n");E.shift();C=E.join("\n")}var M=u.lineNumber||"Not available",S=u.fileName||"Not available",Q=C,W=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var ha=0;ha<a.args.length&&!(W=On(a.args[ha],"params."+ha,h,W),
500<=W);ha++);else if(a.hasOwnProperty("params")&&a.params){var na=a.params;if("object"===typeof a.params)for(var Sa in na){if(na[Sa]){var Da="params."+Sa,za=Qn(na[Sa]);h[Da]=za;W+=Da.length+za.length;if(500<W)break}}else h.params=Qn(na)}if(q.length)for(var oa=0;oa<q.length&&!(W=On(q[oa],"params.context."+oa,h,W),500<=W);oa++);navigator.vendor&&!h.hasOwnProperty("vendor")&&(h["device.vendor"]=navigator.vendor);var J={message:t,name:z,lineNumber:M,fileName:S,stack:Q,params:h,sampleWeight:1},Sc=Number(a.columnNumber);
isNaN(Sc)||(J.lineNumber=J.lineNumber+":"+Sc);if("IGNORED"===a.level)var Tc=0;else a:{for(var jf=Kn(),kf=r(jf.Ta),ia=kf.next();!ia.done;ia=kf.next()){var Dh=ia.value;if(J.message&&J.message.match(Dh.Cg)){Tc=Dh.weight;break a}}for(var Eh=r(jf.Pa),ql=Eh.next();!ql.done;ql=Eh.next()){var wr=ql.value;if(wr.callback(J)){Tc=wr.weight;break a}}Tc=1}J.sampleWeight=Tc;for(var xr=r(Fn),rl=xr.next();!rl.done;rl=xr.next()){var sl=rl.value;if(sl.lc[J.name])for(var yr=r(sl.lc[J.name]),tl=yr.next();!tl.done;tl=
yr.next()){var zr=tl.value,Fh=J.message.match(zr.regexp);if(Fh){J.params["params.error.original"]=Fh[0];for(var ul=zr.groups,Ar={},Pd=0;Pd<ul.length;Pd++)Ar[ul[Pd]]=Fh[Pd+1],J.params["params.error."+ul[Pd]]=Fh[Pd+1];J.message=sl.Ic(Ar);break}}}J.params||(J.params={});var Br=Kn();J.params["params.errorServiceSignature"]="msg="+Br.Ta.length+"&cb="+Br.Pa.length;J.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(J.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));
Db("sample").constructor!==Bb&&(J.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(J);if(0!==J.sampleWeight&&!ru.has(J.message)){if(m&&R("web_enable_error_204"))zu(void 0===l?"ERROR":l,J);else{var Uc=l;Uc=void 0===Uc?"ERROR":Uc;if("ERROR"===Uc){Ln.bb("handleError",J);if(R("record_app_crashed_web")&&0===uu&&1===J.sampleWeight)if(uu++,R("errors_via_jspb")){var xy=new Tl;var Dr=H(xy,1,1);if(!R("report_client_error_with_app_crash_ks")){var yy=new Rl,zy=new Ql,
Ay=new Pl,By=new Ol;var Cy=H(By,1,J.message);var Dy=I(Ay,Ol,3,Cy);var Ey=I(zy,Pl,5,Dy);var Fy=I(yy,Ql,9,Ey);I(Dr,Rl,4,Fy)}var Er=new vm;oe(Er,Tl,20,wm,Dr);ku(Er)}else{var Fr={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(Fr.systemHealth={crashData:{clientError:{logMessage:{message:J.message}}}});Ho("appCrashed",Fr)}tu++}else"WARNING"===Uc&&Ln.bb("handleWarning",J);if(R("kevlar_gel_error_routing"))a:{var lf=Uc;if(R("errors_via_jspb")){if(Au())var Hr=void 0;else{var Qd=
new Ll;H(Qd,1,J.stack);J.fileName&&H(Qd,4,J.fileName);var Tb=J.lineNumber&&J.lineNumber.split?J.lineNumber.split(":"):[];0!==Tb.length&&(1!==Tb.length||isNaN(Number(Tb[0]))?2!==Tb.length||isNaN(Number(Tb[0]))||isNaN(Number(Tb[1]))||(re(Qd,2,Number(Tb[0])),re(Qd,3,Number(Tb[1]))):re(Qd,2,Number(Tb[0])));var Vc=new Ol;H(Vc,1,J.message);H(Vc,3,J.name);re(Vc,6,J.sampleWeight);"ERROR"===lf?H(Vc,2,2):"WARNING"===lf?H(Vc,2,1):H(Vc,2,0);var vl=new Ml;H(vl,1,!0);oe(vl,Ll,3,Nl,Qd);var qc=new Jl;H(qc,3,window.location.href);
for(var Ir=P("FEXP_EXPERIMENTS",[]),wl=0;wl<Ir.length;wl++){var Gy=Ir[wl];Wd(qc);ie(qc,5,2,!1,!1).push(Gy)}var xl=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Rm()&&xl)for(var Jr=r(Object.keys(xl)),Wc=Jr.next();!Wc.done;Wc=Jr.next()){var Kr=Wc.value,yl=new Il;H(yl,1,Kr);H(yl,2,String(xl[Kr]));qe(qc,4,Il,yl)}var zl=J.params;if(zl){var Lr=r(Object.keys(zl));for(Wc=Lr.next();!Wc.done;Wc=Lr.next()){var Mr=Wc.value,Al=new Il;H(Al,1,"client."+Mr);H(Al,2,String(zl[Mr]));qe(qc,4,Il,Al)}}var Nr=P("SERVER_NAME"),
Or=P("SERVER_VERSION");if(Nr&&Or){var Bl=new Il;H(Bl,1,"server.name");H(Bl,2,Nr);qe(qc,4,Il,Bl);var Cl=new Il;H(Cl,1,"server.version");H(Cl,2,Or);qe(qc,4,Il,Cl)}var Gh=new Pl;I(Gh,Jl,1,qc);I(Gh,Ml,2,vl);I(Gh,Ol,3,Vc);Hr=Gh}var Pr=Hr;if(!Pr)break a;var Qr=new vm;oe(Qr,Pl,163,wm,Pr);ku(Qr)}else{if(Au())var Rr=void 0;else{var mf={stackTrace:J.stack};J.fileName&&(mf.filename=J.fileName);var Ub=J.lineNumber&&J.lineNumber.split?J.lineNumber.split(":"):[];0!==Ub.length&&(1!==Ub.length||isNaN(Number(Ub[0]))?
2!==Ub.length||isNaN(Number(Ub[0]))||isNaN(Number(Ub[1]))||(mf.lineNumber=Number(Ub[0]),mf.columnNumber=Number(Ub[1])):mf.lineNumber=Number(Ub[0]));var Dl={level:"ERROR_LEVEL_UNKNOWN",message:J.message,errorClassName:J.name,sampleWeight:J.sampleWeight};"ERROR"===lf?Dl.level="ERROR_LEVEL_ERROR":"WARNING"===lf&&(Dl.level="ERROR_LEVEL_WARNNING");var Hy={isObfuscated:!0,browserStackInfo:mf},Rd={pageUrl:window.location.href,kvPairs:[]};P("FEXP_EXPERIMENTS")&&(Rd.experimentIds=P("FEXP_EXPERIMENTS"));var El=
P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Rm()&&El)for(var Sr=r(Object.keys(El)),Xc=Sr.next();!Xc.done;Xc=Sr.next()){var Tr=Xc.value;Rd.kvPairs.push({key:Tr,value:String(El[Tr])})}var Fl=J.params;if(Fl){var Ur=r(Object.keys(Fl));for(Xc=Ur.next();!Xc.done;Xc=Ur.next()){var Vr=Xc.value;Rd.kvPairs.push({key:"client."+Vr,value:String(Fl[Vr])})}}var Wr=P("SERVER_NAME"),Xr=P("SERVER_VERSION");Wr&&Xr&&(Rd.kvPairs.push({key:"server.name",value:Wr}),Rd.kvPairs.push({key:"server.version",value:Xr}));
Rr={errorMetadata:Rd,stackTrace:Hy,logMessage:Dl}}var Yr=Rr;if(!Yr)break a;Ho("clientError",Yr)}if("ERROR"===lf||R("errors_flush_gel_always_killswitch"))b:{if(R("web_fp_via_jspb")&&(gu(!0),!R("web_fp_via_jspb_and_json")))break b;gu()}}R("suppress_error_204_logging")||zu(Uc,J)}try{ru.add(J.message)}catch(tA){}su++}}}}
function Au(){for(var a=r(wu),b=a.next();!b.done;b=a.next())if(No(b.value.toLowerCase()))return!0;return!1}
function zu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=r(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=r(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}wn(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function Bu(a){var b=La.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ja(b))}
;function Cu(){this.register=new Map}
function Du(a){a=r(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Hg("ABORTED")}
Cu.prototype.clear=function(){Du(this);this.register.clear()};
var Eu=new Cu;var Fu=Date.now().toString();function Gu(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(Fu)for(b=1,c=0;c<Fu.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^Fu.charCodeAt(c),b++;return a}
function Hu(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}return Gu()}
function Iu(){for(var a=Hu(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;var Ju=y.ytLoggingDocDocumentNonce_;Ju||(Ju=Iu(),A("ytLoggingDocDocumentNonce_",Ju));var Ku=Ju;var Lu={Af:0,yf:1,zf:2,cg:3,Bf:4,hg:5,dg:6,gg:7,eg:8,fg:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Mu(a){this.h=a}
function Nu(a){return new Mu({trackingParams:a})}
Mu.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
Mu.prototype.getAsJspb=function(){var a=new Vl;if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Gd(b,Dd):Ed||(Ed=new Gd(null,Dd));else if(b.constructor!==Gd)if(Cd(b))b instanceof Uint8Array||Array.isArray(b),b=b.length?new Gd(new Uint8Array(b),Dd):Ed||(Ed=new Gd(null,Dd));else throw Error();H(a,1,b)}else void 0!==this.h.veType&&re(a,2,this.h.veType),void 0!==this.h.veCounter&&re(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&re(a,3,this.h.elementIndex),
this.h.isCounterfactual&&H(a,5,!0);void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),I(a,Vl,7,b));void 0!==this.h.youtubeData&&I(a,Vk,8,this.h.jspbYoutubeData);return a};
Mu.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Mu.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Ou(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Pu(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Qu(a){return P(Pu(void 0===a?0:a))}
A("yt_logging_screen.getRootVeType",Qu);function Ru(a){return(a=Qu(void 0===a?0:a))?new Mu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Su(){var a=P("csn-to-ctt-auth-info");a||(a={},Qm("csn-to-ctt-auth-info",a));return a}
function Tu(a){a=P(Ou(void 0===a?0:a));if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
A("yt_logging_screen.getCurrentCsn",Tu);function Uu(a){for(var b=r(Object.values(Lu)),c=b.next();!c.done;c=b.next())if(Tu(c.value)===a)return!0;return!1}
function Vu(a,b,c){var d=Su();(c=Tu(c))&&delete d[c];b&&(d[a]=b)}
function Wu(a){return Su()[a]}
A("yt_logging_screen.getCttAuthInfo",Wu);function Xu(a,b,c,d){c=void 0===c?0:c;if(a!==P(Ou(c))||b!==P(Pu(c)))if(Vu(a,d,c),Qm(Ou(c),a),Qm(Pu(c),b),b=function(){setTimeout(function(){if(a)if(R("web_time_via_jspb")){var e=new Wl;H(e,1,Ku);H(e,2,a);var f=new vm;oe(f,Wl,111,wm,e);ku(f)}else Ho("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ku,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
A("yt_logging_screen.setCurrentScreen",Xu);var Yu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};A("yt.msgs_",Yu);function Zu(a){Lm(Yu,arguments)}
;var $u=[3611,27686,85013,23462,157557,42016,26926,51236,79148,50160,77504,153587,87907,18630,177018,177023,54445,80935,152172,105675,150723,37521,147285,47786,98349,168271,168954,168277,168273,168270,123695,6827,29434,171388,7282,124448,32276,76278,147868,147869,93911,106531,177843,27259,27262,27263,21759,160866,177957,171243,160789,171244,171241,171245,171242,177958,177565,175492,175493,175494,175495,175496,175497,38408,175498,175503,175504,175505,175506,175507,175508,80637,68727,68728,80353,80356,
74610,45707,83962,83970,46713,166591,89711,74612,155792,93265,74611,131380,128979,139311,128978,131391,105350,139312,134800,131392,113533,93252,99357,94521,114252,113532,94522,94583,88E3,139580,93253,93254,94387,94388,93255,97424,72502,110111,76019,117092,117093,89431,110466,77240,60508,148123,148124,137401,137402,137046,73393,113534,92098,131381,84517,83759,162711,162712,80357,86113,72598,168413,72733,107349,124275,118203,133275,160157,152569,156651,133274,160159,160158,133272,133273,133276,144507,
143247,175994,156652,143248,143249,143250,143251,156653,144401,117431,133797,153964,128572,133405,117429,117430,177950,174734,177951,117432,173996,173995,174953,173994,173997,120080,117259,178546,156655,156654,121692,145656,156656,145655,145653,145654,145657,132972,133051,133658,132971,97615,143359,143356,143361,143358,143360,143357,142303,143353,172859,143354,144479,143355,31402,133624,146477,133623,133622,133621,84774,160801,95117,172721,150497,98930,98931,98932,153320,153321,43347,129889,149123,
45474,100352,98443,117985,74613,155911,74614,64502,136032,74615,74616,122224,74617,77820,74618,93278,93274,93275,93276,22110,29433,133798,132295,120541,82047,113550,75836,75837,42352,84512,76065,75989,51879,16623,32594,27240,32633,74858,156999,3945,16989,45520,25488,25492,25494,55760,14057,18451,57204,57203,17897,18198,17898,17909,43980,46220,11721,147994,49954,96369,3854,151633,56251,159108,25624,152036,16906,99999,68172,47973,72773,26970,26971,96805,17752,73233,109512,22256,14115,22696,89278,89277,
109513,43278,43459,43464,89279,43717,55764,22255,147912,89281,40963,43277,43442,91824,120137,96367,36850,72694,37414,36851,124863,121343,73491,54473,166861,43375,46674,143815,139095,144402,149968,149969,32473,72901,72906,50612,50613,50942,84938,84943,84939,84941,84944,84940,84942,35585,51926,79983,18921,57893,41182,135732,33424,22207,36229,22206,22205,44763,33427,67793,22182,37091,34650,50617,22287,25144,97917,62397,150871,150874,125598,137935,36961,108035,27426,27857,27846,27854,69692,61411,39299,
38696,62520,36382,108701,50663,36387,14908,37533,105443,61635,62274,161670,133818,65702,65703,65701,76256,166382,37671,49953,36216,28237,173718,39553,29222,26107,38050,26108,120745,26109,26110,66881,28236,14586,160598,57929,74723,44098,173689,44099,23528,61699,134104,134103,59149,173191,173192,173193,101951,171502,97346,118051,95102,64882,119505,63595,63349,95101,75240,27039,68823,21537,83464,75707,170215,83113,101952,101953,79610,125755,24402,24400,32925,57173,156421,122502,145268,138480,64423,64424,
33986,100828,129089,21409,135155,135156,135157,135158,158225,135159,135160,167651,135161,135162,135163,158226,158227,135164,135165,135166,11070,11074,17880,30709,30707,30711,30710,30708,146143,63648,63649,111059,5754,20445,151308,151152,130975,130976,167637,110386,113746,66557,17310,28631,21589,164817,168011,154946,68012,162617,60480,138664,141121,164502,31571,141978,150105,150106,150107,150108,76980,41577,45469,38669,13768,13777,141842,62985,4724,59369,43927,43928,12924,100355,56219,27669,10337,
47896,122629,139723,139722,121258,107598,127991,96639,107536,130169,96661,145188,96658,116646,159428,168611,168612,121122,96660,127738,127083,155281,162959,163566,147842,104443,96659,147595,106442,162776,134840,63667,63668,63669,130686,147036,78314,147799,174049,148649,55761,127098,134841,96368,67374,48992,146176,176105,49956,31961,26388,23811,5E4,126250,96370,47355,47356,37935,45521,21760,83769,49977,49974,93497,93498,34325,140759,115803,123707,100081,35309,68314,25602,100339,170873,143516,59018,
18248,50625,9729,37168,37169,21667,16749,18635,39305,18046,53969,8213,93926,102852,110099,22678,69076,137575,139224,100856,154430,17736,3832,147111,55759,64031,93044,93045,170701,170702,34388,167841,170419,17657,17655,39579,39578,170412,77448,8196,11357,69877,8197,168501,156512,161613,156509,161612,161614,82039];function av(){var a=vb(bv),b;return(new Uf(function(c,d){a.onSuccess=function(e){pn(e)?c(new cv(e)):d(new dv("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new dv("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new dv("Request timed out","net.timeout",e))};
b=wn("//googleads.g.doubleclick.net/pagead/id",a)})).sc(function(c){c instanceof ag&&b.abort();
return Zf(c)})}
function dv(a,b,c){cb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(dv,cb);function cv(a){this.xhr=a}
;function ev(){this.i=0;this.h=null}
ev.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h))&&"function"===typeof a.then?a:fv(a):2===this.i&&b?(a=b.call(c,this.h))&&"function"===typeof a.then?a:gv(a):this};
ev.prototype.getValue=function(){return this.h};
ev.prototype.$goog_Thenable=!0;function gv(a){var b=new ev;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function fv(a){var b=new ev;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function hv(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:fn(a)?"same-origin":"cors",credentials:fn(a)?"same-origin":"include"};b={};for(var d=r(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function iv(){return Ug()||(nd||od)&&No("applewebkit")&&!No("version")&&(!No("safari")||No("gsa/"))||dd&&No("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function jv(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in pl)if(pl[c]==b.embeddedPlayerMode){b=pl[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function kv(a){cb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof lv;this.isTimeout=a instanceof dv&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ag}
v(kv,cb);kv.prototype.name="BiscottiError";function lv(){cb.call(this,"Biscotti ID is missing from server")}
v(lv,cb);lv.prototype.name="BiscottiMissingError";var bv={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},mv=null;function nv(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!iv())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if("1"==tb(a))return Error("Biscotti ID is not available in private embed mode");if(jv(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Jm(){var a=nv();if(void 0!==a)return Zf(a);mv||(mv=av().then(ov).sc(function(b){return pv(2,b)}));
return mv}
function ov(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new lv;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new lv;a=a.id;Km(a);mv=fv(a);qv(18E5,2);return a}
function pv(a,b){b=new kv(b);Km("");mv=gv(b);0<a&&qv(12E4,a-1);throw b;}
function qv(a,b){qn(function(){av().then(ov,function(c){return pv(b,c)}).sc(eb)},a)}
function rv(){try{var a=B("yt.ads.biscotti.getId_");return a?a():Jm()}catch(b){return Zf(b)}}
;function sv(a){if("1"!=tb(P("PLAYER_VARS",{}))){a&&Im();try{rv().then(function(){},function(){}),qn(sv,18E5)}catch(b){Vm(b)}}}
;function tv(){var a=co(),b=go(119),c=1<window.devicePixelRatio;if(document.body&&Wi(document.body,"exp-invert-logo"))if(c&&!Wi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Wi(d,"inverted-hdpi")){var e=Ui(d);Vi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Wi(document.body,"inverted-hdpi")&&Xi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=ho(b)||0;d=c?d|67108864:d&-67108865;0===d?delete $n[b]:(c=d.toString(16),$n[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in $n)$n.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String($n[f])));Xn(b,d.join("&"),63072E3,a.i,c)}}
;var uv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function vv(){var a=void 0===a?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;xc(yc(5,a));try{var b=dn(a).theme;return uv.get(b)||null}catch(c){}return null}
;function wv(){this.h={};if(this.i=Zn()){var a=Sg.get("CONSISTENCY",void 0);a&&xv(this,{encryptedTokenJarContents:a})}}
wv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.La.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=r(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];xv(this,a)}};
function xv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Xn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var yv=window.location.hostname.split(".").slice(-2).join(".");function zv(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.h=Av(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Bv;function Cv(){Bv=B("yt.clientLocationService.instance");Bv||(Bv=new zv,A("yt.clientLocationService.instance",Bv));return Bv}
k=zv.prototype;k.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
k.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===P("INNERTUBE_CLIENT_NAME")?(this.h=Av(this))&&this.h.set("yt-location-playability-token",a,15552E3):Xn("YT_CL",JSON.stringify({loctok:a}),15552E3,yv,!0))};
function Av(a){return void 0===a.h?new yo("yt-client-location"):a.h}
k.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=Av(this))&&this.h.remove("yt-location-playability-token"):Yn("YT_CL")};
k.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===P("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
k.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Dv(a,b){var c,d=null==(c=st(a,ol))?void 0:c.signal;if(d&&b.Qb&&(c=b.Qb[d]))return c();var e;if((c=null==(e=st(a,ml))?void 0:e.request)&&b.ge&&(e=b.ge[c]))return e();for(var f in a)if(b.ed[f]&&(a=b.ed[f]))return a()}
;function Ev(a){return function(){return new a}}
;var Fv={},Gv=(Fv.WEB_UNPLUGGED="^unplugged/",Fv.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Fv.WEB_UNPLUGGED_OPS="^unplugged/",Fv.WEB_UNPLUGGED_PUBLIC="^unplugged/",Fv.WEB_CREATOR="^creator/",Fv.WEB_KIDS="^kids/",Fv.WEB_EXPERIMENTS="^experiments/",Fv.WEB_MUSIC="^music/",Fv.WEB_REMIX="^music/",Fv.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Fv.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Fv);
function Hv(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Gv[b];if(c){var d=new RegExp(c),e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Gv).forEach(function(g){var h=r(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Iv(){}
Iv.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Un:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=wb(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var l=void 0===l?!1:l;co();var m="USER_INTERFACE_THEME_LIGHT";go(165)?m="USER_INTERFACE_THEME_DARK":go(174)?m="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");l=l?m:vv()||m;h.userInterfaceTheme=l;if(!f){if(l=no())h.connectionType=
l;R("web_log_effective_connection_type")&&(l=oo())&&(g.client.effectiveConnectionType=l)}var n;if(R("web_log_memory_total_kbytes")&&(null==(n=y.navigator)?0:n.deviceMemory)){var q;n=null==(q=y.navigator)?void 0:q.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}q=dn(y.location.href);!R("web_populate_internal_geo_killswitch")&&q.internalcountrycode&&(h.internalGeo=q.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},R("kevlar_woffle")&&Vn.h&&
(q=Vn.h,h.mainAppWebInfo.pwaInstallabilityStatus=!q.h&&q.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Wn(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!R("web_lr_app_quality_killswitch")&&(q=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:q})),q=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:q}));
if(!R("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var u=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(na){}u=void 0}u&&(h.timeZone=u)}(u=ln())?h.experimentsToken=u:delete h.experimentsToken;u=mn();wv.h||(wv.h=new wv);h=wv.h.h;q=[];n=0;for(var t in h)q[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:u,consistencyTokenJars:q});!R("web_prequest_context_killswitch")&&(t=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
t);u=co();t=go(58);u=u.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);u&&(g.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?e&&(f=Tu())&&(g.clientScreenNonce=f):!f&&(f=Tu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=B("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Cv().setLocationOnInnerTubeContext(g);try{var z=gn(),C=z.bid;delete z.bid;g.adSignalsInfo={params:[],bid:C};var E=r(Object.entries(z));for(var M=E.next();!M.done;M=E.next()){var S=
r(M.value),Q=S.next().value,W=S.next().value;z=Q;C=W;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:z,value:""+C})}}catch(na){xu(na)}E=g}else xu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),E={};E={context:E};if(M=this.h(a)){this.i(E,M,b);var ha;b="/youtubei/v1/"+Hv(this.j());(M=null==(ha=st(a.commandMetadata,nl))?void 0:ha.apiUrl)&&(b=M);ha=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&(ha=String(b)+String(Ac(ha)));b={};b.key=P("INNERTUBE_API_KEY");R("json_condensed_response")&&
(b.prettyPrint="false");ha=en(ha,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:ha,ib:hv(ha),La:E,config:a};a.config.Yb?a.config.Yb.identity=c:a.config.Yb={identity:c};return a}xu(new po("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Iv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Jv(){}
v(Jv,Iv);Jv.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",ib:hv("/getDatasyncIdsEndpoint","GET"),La:{}}};
Jv.prototype.j=function(){return[]};
Jv.prototype.h=function(){};
Jv.prototype.i=function(){};var Kv={},Lv=(Kv.GET_DATASYNC_IDS=Ev(Jv),Kv);function Mv(a){var b=La.apply(1,arguments);if(!Nv(a)||b.some(function(d){return!Nv(d)}))throw Error("Only objects may be merged.");
b=r(b);for(var c=b.next();!c.done;c=b.next())Ov(a,c.value);return a}
function Ov(a,b){for(var c in b)if(Nv(b[c])){if(c in a&&!Nv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Ov(a[c],b[c])}else if(Pv(b[c])){if(c in a&&!Pv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Qv(a[c],b[c])}else a[c]=b[c];return a}
function Qv(a,b){b=r(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Nv(c)?a.push(Ov({},c)):Pv(c)?a.push(Qv([],c)):a.push(c);return a}
function Nv(a){return"object"===typeof a&&!Array.isArray(a)}
function Pv(a){return"object"===typeof a&&Array.isArray(a)}
;function Rv(a){var b;(b=B("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},A("ytcsi."+(a||"")+"data_",b));return b}
function Sv(){var a=Rv();a.info||(a.info={});return a.info}
function Tv(a){a=Rv(a);a.metadata||(a.metadata={});return a.metadata}
function Uv(a){a=Rv(a);a.tick||(a.tick={});return a.tick}
function Vv(a){a=Rv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Wv(a){a=Vv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Xv(a){var b=Rv(a).nonce;b||(b=Iu(),Rv(a).nonce=b);return b}
;function Yv(){var a=B("ytcsi.debug");a||(a=[],A("ytcsi.debug",a),A("ytcsi.reference",{}));return a}
function Zv(a){a=a||"";var b=B("ytcsi.reference");b||(Yv(),b=B("ytcsi.reference"));if(b[a])return b[a];var c=Yv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},$v=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
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
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",U.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",U),V={},aw=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",
V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",
V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",
V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs=
"tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",
V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),bw="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),cw={},dw=(cw.ccs="CANARY_STATE_",
cw.mver="MEASUREMENT_VERSION_",cw.pis="PLAYER_INITIALIZED_STATE_",cw.yt_pt="LATENCY_PLAYER_",cw.pa="LATENCY_ACTION_",cw.ctop="TOP_ENTITY_TYPE_",cw.yt_vst="VIDEO_STREAM_TYPE_",cw),ew="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function fw(a){return $v[a]||"LATENCY_ACTION_UNKNOWN"}
function gw(a,b,c){c=Vv(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in aw){c=aw[a];0<=gb(bw,c)&&(b=!!b);a in dw&&"string"===typeof b&&(b=dw[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Mv({},d)}0<=gb(ew,a)||yu(new po("Unknown label logged with GEL CSI",a))}
;var X={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_GEL_JSPB_SERIALIZE:243,LATENCY_ACTION_GEL_COMPRESSION:215,LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE:204,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,
LATENCY_ACTION_COMMERCE_TRANSACTION:184,LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,
LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,
LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN:244,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,
LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,
LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,
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
LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};X[X.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";X[X.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";X[X.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";
X[X.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";X[X.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";X[X.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";X[X.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";X[X.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";X[X.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";X[X.LATENCY_ACTION_GEL_JSPB_SERIALIZE]="LATENCY_ACTION_GEL_JSPB_SERIALIZE";
X[X.LATENCY_ACTION_GEL_COMPRESSION]="LATENCY_ACTION_GEL_COMPRESSION";X[X.LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE]="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE";X[X.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";X[X.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";X[X.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";X[X.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";
X[X.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";X[X.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";X[X.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";X[X.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";X[X.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";X[X.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";
X[X.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";X[X.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";X[X.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";X[X.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";X[X.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";
X[X.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";X[X.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";X[X.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";X[X.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";X[X.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";X[X.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";X[X.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
X[X.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";X[X.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";X[X.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";X[X.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";X[X.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";X[X.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";X[X.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";
X[X.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";X[X.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";X[X.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";X[X.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";X[X.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";X[X.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
X[X.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN";X[X.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";X[X.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";X[X.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";X[X.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";X[X.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";
X[X.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";X[X.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";X[X.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";X[X.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";X[X.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";X[X.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";
X[X.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";X[X.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";X[X.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";X[X.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";X[X.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";X[X.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";
X[X.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";X[X.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";X[X.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";X[X.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";X[X.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";X[X.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";X[X.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";
X[X.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";X[X.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";X[X.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";X[X.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";X[X.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";X[X.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";X[X.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";
X[X.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";X[X.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";X[X.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";X[X.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";X[X.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";X[X.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";X[X.LATENCY_ACTION_MOBILE_LIVE_NAV_MDE]="LATENCY_ACTION_MOBILE_LIVE_NAV_MDE";
X[X.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";X[X.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";X[X.LATENCY_ACTION_SHORTS_LOAD_PROJECT]="LATENCY_ACTION_SHORTS_LOAD_PROJECT";X[X.LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING]="LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING";X[X.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";X[X.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";
X[X.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";X[X.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";X[X.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";X[X.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";X[X.LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD]="LATENCY_ACTION_SHORTS_CAMERA_AUDIO_DOWNLOAD";
X[X.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";X[X.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";X[X.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";X[X.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";X[X.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";X[X.LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_NON_CREATION_MODES_GLOBAL_ENTRYPOINT";X[X.LATENCY_ACTION_CREATION_MODES_MODE_SWITCH]="LATENCY_ACTION_CREATION_MODES_MODE_SWITCH";
X[X.LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT";X[X.LATENCY_ACTION_SWITCH_CAMERA]="LATENCY_ACTION_SWITCH_CAMERA";X[X.LATENCY_ACTION_OPEN_CAMERA]="LATENCY_ACTION_OPEN_CAMERA";X[X.LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME]="LATENCY_ACTION_MEDIA_ENGINE_DISPLAY_FIRST_FRAME";X[X.LATENCY_ACTION_MEDIA_ENGINE_EXPORT]="LATENCY_ACTION_MEDIA_ENGINE_EXPORT";X[X.LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA]="LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA";
X[X.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";X[X.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";X[X.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";X[X.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";X[X.LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_PLAYLIST_DETAIL";X[X.LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_OFFLINE_ALBUM_DETAIL";
X[X.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";X[X.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";X[X.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";X[X.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";X[X.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";X[X.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";X[X.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
X[X.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";X[X.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";X[X.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";X[X.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";X[X.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";X[X.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";X[X.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";X[X.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
X[X.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";X[X.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";X[X.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";X[X.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";X[X.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";X[X.LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT";
X[X.LATENCY_ACTION_CREATOR_VIDEO_POLICY]="LATENCY_ACTION_CREATOR_VIDEO_POLICY";X[X.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";X[X.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";X[X.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";X[X.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";X[X.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";
X[X.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";X[X.LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT";X[X.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";X[X.LATENCY_ACTION_CREATOR_VIDEO_CLAIMS]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS";X[X.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";
X[X.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";X[X.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";X[X.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";X[X.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";X[X.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";X[X.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";
X[X.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";X[X.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";X[X.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";X[X.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";X[X.LATENCY_ACTION_CREATOR_CMS_RELEASES]="LATENCY_ACTION_CREATOR_CMS_RELEASES";
X[X.LATENCY_ACTION_CREATOR_CMS_POLICIES]="LATENCY_ACTION_CREATOR_CMS_POLICIES";X[X.LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC";X[X.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";X[X.LATENCY_ACTION_CREATOR_CMS_LICENSES]="LATENCY_ACTION_CREATOR_CMS_LICENSES";X[X.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";X[X.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";
X[X.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";X[X.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";X[X.LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS";
X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES";
X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION";X[X.LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";
X[X.LATENCY_ACTION_CREATOR_CMS_ART_TRACKS]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS";X[X.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_CMS_ALLOWLIST]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST";X[X.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";
X[X.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";X[X.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";X[X.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";X[X.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";X[X.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";X[X.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";
X[X.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";X[X.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";X[X.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";X[X.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";X[X.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";
X[X.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";X[X.LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS]="LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS";X[X.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";X[X.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";X[X.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";X[X.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";
X[X.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";X[X.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";X[X.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";X[X.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";X[X.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";X[X.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";X[X.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";X[X.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";
X[X.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";X[X.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";X[X.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";X[X.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";X[X.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";X[X.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";X[X.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";X[X.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";
X[X.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";X[X.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";X[X.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";X[X.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";X[X.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";X[X.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";X[X.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";X[X.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";
X[X.LATENCY_ACTION_INLINE_TO_WATCH]="LATENCY_ACTION_INLINE_TO_WATCH";X[X.LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH]="LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH";X[X.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";X[X.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";X[X.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";X[X.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";X[X.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";X[X.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";X[X.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";
X[X.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";X[X.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";X[X.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";X[X.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";X[X.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var hw={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};hw[hw.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";hw[hw.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";
hw[hw.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";var Y={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};Y[Y.CONN_INVALID]="CONN_INVALID";Y[Y.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";Y[Y.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";Y[Y.CONN_WIFI_METERED]="CONN_WIFI_METERED";
Y[Y.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";Y[Y.CONN_DISCO]="CONN_DISCO";Y[Y.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";Y[Y.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";Y[Y.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";Y[Y.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";Y[Y.CONN_WIFI]="CONN_WIFI";Y[Y.CONN_NONE]="CONN_NONE";Y[Y.CONN_UNKNOWN]="CONN_UNKNOWN";Y[Y.CONN_DEFAULT]="CONN_DEFAULT";
var Z={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Z[Z.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Z[Z.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Z[Z.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Z[Z.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Z[Z.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Z[Z.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Z[Z.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Z[Z.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Z[Z.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Z[Z.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Z[Z.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Z[Z.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Z[Z.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Z[Z.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Z[Z.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Z[Z.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Z[Z.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Z[Z.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Z[Z.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Z[Z.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Z[Z.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Z[Z.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Z[Z.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Z[Z.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Z[Z.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Z[Z.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Z[Z.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var iw={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};iw[iw.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
iw[iw.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";iw[iw.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";iw[iw.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";iw[iw.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";iw[iw.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";iw[iw.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";iw[iw.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var jw={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};jw[jw.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";jw[jw.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";jw[jw.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";jw[jw.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var kw={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
kw[kw.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";kw[kw.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var lw={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};lw[lw.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";lw[lw.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";lw[lw.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
lw[lw.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";lw[lw.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";lw[lw.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var mw={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};mw[mw.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";mw[mw.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";mw[mw.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";mw[mw.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var nw={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};nw[nw.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";nw[nw.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";nw[nw.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var ow={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};ow[ow.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
ow[ow.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";ow[ow.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var pw="actionVisualElement spinnerInfo cacheAttempts resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo inlineToWatchInfo mediaEngineMetadata webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext creationModesContext cameraMetadata producerMediaAssetMetadata".split(" ");function qw(a,b){Dq.call(this,1,arguments);this.timer=b}
v(qw,Dq);var rw=new Eq("aft-recorded",qw);var sw=y.ytLoggingLatencyUsageStats_||{};A("ytLoggingLatencyUsageStats_",sw);function tw(){this.h=0}
function uw(){tw.h||(tw.h=new tw);return tw.h}
tw.prototype.tick=function(a,b,c,d){vw(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},R("web_csi_via_jspb")?(d=new sm,H(d,1,a),H(d,2,b),a=new vm,oe(a,sm,5,wm,d),ku(a,c)):Ho("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
tw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");vw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Ho("latencyActionInfo",a,{cttAuthInfo:c}))};
tw.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));vw(this,"info_"+d+"_"+b)||(H(a,2,b),b={cttAuthInfo:c},c=new vm,oe(c,pm,7,wm,a),ku(c,b))};
tw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");vw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Ho("latencyActionSpan",a,{cttAuthInfo:c}))};
function vw(a,b){sw[b]=sw[b]||{count:0};var c=sw[b];c.count++;c.time=T();a.h||(a.h=to(function(){var d=T(),e;for(e in sw)sw[e]&&6E4<d-sw[e].time&&delete sw[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new po("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||yu(c)),!0):!1}
;var ww=window;function xw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function yw(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==zw?void 0:null==(a=zw.getEntriesByType)?void 0:null==(b=a.call(zw,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Aw(e.requestStart),e.responseEnd=Aw(e.responseEnd),e.redirectStart=Aw(e.redirectStart),e.redirectEnd=Aw(e.redirectEnd),e.domainLookupEnd=Aw(e.domainLookupEnd),e.connectStart=Aw(e.connectStart),e.connectEnd=
Aw(e.connectEnd),e.responseStart=Aw(e.responseStart),e.secureConnectionStart=Aw(e.secureConnectionStart),e.domainLookupStart=Aw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=zw.timing}else a=zw.timing;return a}
function Aw(a){return Math.round(Bw()+a)}
function Bw(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&zw.timeOrigin?Math.floor(zw.timeOrigin):zw.timing.navigationStart}
var zw=ww.performance||ww.mozPerformance||ww.msPerformance||ww.webkitPerformance||new xw;var Cw=!1,Dw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Za(zw.clearResourceTimings||zw.webkitClearResourceTimings||zw.mozClearResourceTimings||zw.msClearResourceTimings||zw.oClearResourceTimings||eb,zw);function Ew(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;Tv(c).loadType=e}(a=gw(a,b,c))&&Fw(a,c,d)}}
function Fw(a,b,c){if(!R("web_csi_via_jspb")||(void 0===c?0:c))c=Zv(b||""),Mv(c.info,a),a.loadType&&(c=a.loadType,Tv(b).loadType=c),Mv(Wv(b),a),c=Xv(b),b=Rv(b).cttAuthInfo,uw().info(a,c,b);else{c=new pm;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":H(c,1,X[a[e]]);break;case "clientActionNonce":H(c,2,a[e]);break;case "clientScreenNonce":H(c,4,a[e]);break;case "loadType":H(c,3,a[e]);break;case "isPrewarmedLaunch":H(c,92,a[e]);break;case "isFirstInstall":H(c,
55,a[e]);break;case "networkType":H(c,5,hw[a[e]]);break;case "connectionType":H(c,26,Y[a[e]]);break;case "detailedConnectionType":H(c,27,Z[a[e]]);break;case "isVisible":H(c,6,a[e]);break;case "playerType":H(c,7,iw[a[e]]);break;case "clientPlaybackNonce":H(c,8,a[e]);break;case "adClientPlaybackNonce":H(c,28,a[e]);break;case "previousCpn":H(c,77,a[e]);break;case "targetCpn":H(c,76,a[e]);break;case "isMonetized":H(c,9,a[e]);break;case "isPrerollAllowed":H(c,16,a[e]);break;case "isPrerollShown":H(c,17,
a[e]);break;case "adType":H(c,12,a[e]);break;case "adTypesAllowed":H(c,36,a[e]);break;case "adNetworks":H(c,37,a[e]);break;case "previousAction":H(c,13,X[a[e]]);break;case "isRedSubscriber":H(c,14,a[e]);break;case "serverTimeMs":re(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":H(c,20,a[e]);break;case "targetVideoId":H(c,78,a[e]);break;case "adBreakType":H(c,21,jw[a[e]]);break;case "isNavigation":H(c,25,a[e]);break;case "viewportHeight":re(c,29,a[e]);break;case "viewportWidth":re(c,
30,a[e]);break;case "screenHeight":re(c,84,a[e]);break;case "screenWidth":re(c,85,a[e]);break;case "browseId":H(c,31,a[e]);break;case "isCacheHit":H(c,32,a[e]);break;case "httpProtocol":H(c,33,a[e]);break;case "transportProtocol":H(c,34,a[e]);break;case "searchQuery":H(c,41,a[e]);break;case "isContinuation":H(c,42,a[e]);break;case "availableProcessors":re(c,43,a[e]);break;case "sdk":H(c,44,a[e]);break;case "isLocalStream":H(c,45,a[e]);break;case "navigationRequestedSameUrl":H(c,64,a[e]);break;case "shellStartupDurationMs":re(c,
70,a[e]);break;case "appInstallDataAgeMs":re(c,73,a[e]);break;case "latencyActionError":H(c,71,kw[a[e]]);break;case "actionStep":re(c,79,a[e]);break;case "jsHeapSizeLimit":H(c,80,a[e]);break;case "totalJsHeapSize":H(c,81,a[e]);break;case "usedJsHeapSize":H(c,82,a[e]);break;case "sourceVideoDurationMs":H(c,90,a[e]);break;case "videoOutputFrames":H(c,93,a[e]);break;case "isResume":H(c,104,a[e]);break;case "debugTicksExcluded":H(c,105,a[e]);break;case "abandonedPing":H(c,113,a[e]);break;case "adPrebufferedTimeSecs":re(c,
39,a[e]);break;case "isLivestream":H(c,47,a[e]);break;case "liveStreamMode":H(c,91,lw[a[e]]);break;case "adCpn2":H(c,48,a[e]);break;case "adDaiDriftMillis":H(c,49,a[e]);break;case "videoStreamType":H(c,53,mw[a[e]]);break;case "playbackRequiresTap":H(c,56,a[e]);break;case "performanceNavigationTiming":H(c,67,a[e]);break;case "transactionType":H(c,74,nw[a[e]]);break;case "playerRotationType":H(c,101,ow[a[e]]);break;case "allowedPreroll":H(c,10,a[e]);break;case "shownPreroll":H(c,11,a[e]);break;case "getHomeRequestId":H(c,
57,a[e]);break;case "getSearchRequestId":H(c,60,a[e]);break;case "getPlayerRequestId":H(c,61,a[e]);break;case "getWatchNextRequestId":H(c,62,a[e]);break;case "getBrowseRequestId":H(c,63,a[e]);break;case "getLibraryRequestId":H(c,66,a[e]);break;case "isTransformerEnabledForFeature":H(c,106,a[e]);break;case "sourceVideoFrameCount":H(c,109,a[e]);break;default:pw.includes(f)&&Vm(new po("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Vm(Error("Codegen laipb translator failed to set "+
f))}}Gw(c,b)}}
function Gw(a,b){var c=ve(a,3);c&&(Tv(b).loadType=c);Zv(b||"").jspbInfo.push(a);c=Xv(b);b=Rv(b).cttAuthInfo;uw().jspbInfo(a,c,b)}
function Hw(a,b,c){if(!b&&"_"!==a[0]){var d=a;zw.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),zw.mark(d))}d=Zv(c||"");d.tick[a]=b||T();if(d.callback&&d.callback[a]){d=r(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Vv(c);d.gelTicks&&(d.gelTicks[a]=!0);e=Uv(c);d=b||T();R("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=Xv(c);var f=Rv(c).cttAuthInfo;"_start"===a?(a=uw(),vw(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},R("web_csi_via_jspb")?(a=new km,
H(a,1,e),e=new vm,oe(e,km,6,wm,a),ku(e,b)):Ho("latencyActionBaselined",{clientActionNonce:e},b))):uw().tick(a,e,b,f);Iw(c);return d}
function Jw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Hs+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Kw(a){var b=yw(),c=Bw(),d=P("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!R("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Hw("srt",b.responseStart),1!==a.prerender&&Hw("_start",c,void 0));a=Lw();0<a&&Hw("fpt",a);a=yw();a.isPerformanceNavigationTiming&&Fw({performanceNavigationTiming:!0},void 0);Hw("nreqs",a.requestStart,void 0);Hw("nress",a.responseStart,void 0);Hw("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Hw("nrs",a.redirectStart,void 0),Hw("nre",a.redirectEnd,
void 0));0<a.domainLookupEnd-a.domainLookupStart&&(Hw("ndnss",a.domainLookupStart,void 0),Hw("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Hw("ntcps",a.connectStart,void 0),Hw("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=Bw()&&0<a.connectEnd-a.secureConnectionStart&&(Hw("nstcps",a.secureConnectionStart,void 0),Hw("ntcpe",a.connectEnd,void 0));zw&&"getEntriesByType"in zw&&Mw()}
function Nw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);tc()&&a.setAttribute("nonce",tc());return c?(a=zw.getEntriesByName(c))&&a[0]&&(a=a[0],c=Bw(),Hw("rsf_"+b,c+Math.round(a.fetchStart)),Hw("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Ow(){var a=[];if(document.querySelector&&zw&&zw.getEntriesByName)for(var b in Dw)if(Dw.hasOwnProperty(b)){var c=Dw[b];Nw(b,c)&&a.push(c)}return a}
function Mw(){var a=window.location.protocol,b=zw.getEntriesByType("resource");b=ib(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=kb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Hw("wffs",Aw(b.startTime)),Hw("wffe",Aw(b.responseEnd)))}
function Pw(a){var b=Qw("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Qw(b[d],a);if(e)return e}return NaN}
function Qw(a,b){if(a=Uv(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Iw(a){var b=Qw("_start",a),c=Pw(a);b&&c&&!Cw&&(Jq(rw,new qw(Math.round(c-b),a)),Cw=!0)}
function Rw(a,b){for(var c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Rw(a[d],b[d]))return!1;return!0}
function Lw(){if(zw.getEntriesByType){var a=zw.getEntriesByType("paint");if(a=lb(a,function(b){return"first-paint"===b.name}))return Aw(a.startTime)}a=zw.timing;
return a.Ge?Math.max(0,a.Ge):0}
;function Sw(a,b){Um(function(){Zv("").info.actionType=a;b&&Qm("TIMING_AFT_KEYS",b);Qm("TIMING_ACTION",a);if(R("web_csi_via_jspb")){var c=P("TIMING_INFO",{}),d=new pm;c=r(Object.entries(c));for(var e=c.next();!e.done;e=c.next()){var f=r(e.value);e=f.next().value;f=f.next().value;switch(e){case "GetBrowse_rid":rm(d,nm(mm(e),String(f)));break;case "GetGuide_rid":rm(d,nm(mm(e),String(f)));break;case "GetHome_rid":rm(d,nm(mm(e),String(f)));break;case "GetPlayer_rid":rm(d,nm(mm(e),String(f)));break;case "GetSearch_rid":rm(d,
nm(mm(e),String(f)));break;case "GetSettings_rid":rm(d,nm(mm(e),String(f)));break;case "GetTrending_rid":rm(d,nm(mm(e),String(f)));break;case "GetWatchNext_rid":rm(d,nm(mm(e),String(f)));break;case "yt_red":H(d,14,!!f);break;case "yt_ad":H(d,9,!!f)}}Gw(d);d=new pm;d=H(d,25,!0);d=H(d,1,X[fw(P("TIMING_ACTION"))]);(c=P("PREVIOUS_ACTION"))&&H(d,13,X[fw(c)]);(c=P("CLIENT_PROTOCOL"))&&H(d,33,c);(c=P("CLIENT_TRANSPORT"))&&H(d,34,c);(c=Tu())&&"UNDEFINED_CSN"!==c&&H(d,4,c);c=Jw();1!==c&&-1!==c||H(d,6,!0);
c=Sv();Tv();H(d,3,"cold");Kw(c);c=Ow();if(0<c.length)for(c=r(c),e=c.next();!e.done;e=c.next())e=e.value,f=new om,H(f,1,e),qe(d,83,om,f);Gw(d)}else{d=P("TIMING_INFO",{});for(c in d)d.hasOwnProperty(c)&&Ew(c,d[c]);d={isNavigation:!0,actionType:fw(P("TIMING_ACTION"))};if(c=P("PREVIOUS_ACTION"))d.previousAction=fw(c);if(c=P("CLIENT_PROTOCOL"))d.httpProtocol=c;if(c=P("CLIENT_TRANSPORT"))d.transportProtocol=c;(c=Tu())&&"UNDEFINED_CSN"!==c&&(d.clientScreenNonce=c);c=Jw();if(1===c||-1===c)d.isVisible=!0;
Tv();Sv();d.loadType="cold";Kw(Sv());c=Ow();if(0<c.length)for(d.resourceInfo=[],c=r(c),e=c.next();!e.done;e=c.next())d.resourceInfo.push({resourceCache:e.value});Fw(d)}d=Sv();c=Wv();if("cold"===Tv().loadType&&("cold"===d.yt_lt||"cold"===c.loadType)){e=Uv();f=Vv();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var g in e)if(!(g in f))if("number"===typeof e[g])Hw(g,Qw(g));else if(R("log_repeated_ytcsi_ticks"))for(var h=r(e[g]),l=h.next();!l.done;l=h.next())Hw(g.slice(1),l.value);g={};e=!1;f=r(Object.keys(d));
for(h=f.next();!h.done;h=f.next())h=h.value,(h=gw(h,d[h]))&&!Rw(Wv(),h)&&(Mv(c,h),Mv(g,h),e=!0);e&&Fw(g)}A("ytglobal.timingready_",!0);g=P("TIMING_ACTION");B("ytglobal.timingready_")&&g&&Tw()&&Pw()&&Iw()})()}
function Uw(a,b,c,d){Um(Ew)(a,b,c,d)}
function Vw(a,b,c){return Um(Hw)(a,b,c)}
function Tw(){return Um(function(){return"_start"in Uv()})()}
function Ww(){Um(function(){var a=Xv();requestAnimationFrame(function(){setTimeout(function(){a===Xv()&&Vw("ol",void 0,void 0)},0)})})()}
var Xw=window;Xw.ytcsi&&(Xw.ytcsi.info=Uw,Xw.ytcsi.tick=Vw);var Yw="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Zw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function $w(a,b,c,d){this.m=a;this.U=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Qb||(a.Qb={});a.Qb=Object.assign({},Lv,a.Qb)}
function ax(a,b,c,d){if(void 0!==$w.h){if(d=$w.h,a=[a!==d.m,b!==d.U,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new po("InnerTubeTransportService is already initialized",a);
}else $w.h=new $w(a,b,c,d)}
function bx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Un:c;var d=Dv(b,a.m);if(!d)return Zf(new po("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Uf(function(f){var g,h,l;return x(function(m){if(1==m.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.ef){var n=e.config,q;n=null==n?void 0:null==(q=n.Yb)?void 0:q.sessionIndex;q=Tn(0,{sessionIndex:n});l=Object.assign({},cx(h),q);return m.A(2)}return w(m,dx(e.config,
h),3)}2!=m.h&&(l=m.i);f(ex(a,e,l));m.h=0})}):Zf(new po("Error: Failed to build request for command.",b))}
function fx(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Kg)?0:d.Og)&&a.j){d=r(Yw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function ex(a,b,c){var d,e,f,g,h,l,m,n,q,u,t,z,C,E,M,S,Q,W,ha,na,Sa,Da,za,oa,J,Sc,Tc,jf,kf;return x(function(ia){switch(ia.h){case 1:ia.A(2);break;case 3:if((d=ia.i)&&!d.isExpired())return ia.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.La)?0:f.context)){ia.A(4);break}g=b.La.context;if(!R("web_async_context_processor")){h=r([]);for(l=h.next();!l.done;l=h.next())m=l.value,m.Gg(g);ia.A(4);break}return w(ia,[].reduce(function(Dh,Eh){return Dh.then(function(){return Eh.Fg(g)})},
Promise.resolve()),4);
case 4:if(null==(n=a.i)||!n.Lg(b.input,b.La)){ia.A(7);break}return w(ia,a.i.Ag(b.input,b.La),8);case 8:return q=ia.i,R("kevlar_process_local_innertube_responses_killswitch")||fx(a,q,b),ia.return(q);case 7:return(z=null==(t=b.config)?void 0:t.Fa)&&a.h.has(z)&&R("web_memoize_inflight_requests")?u=a.h.get(z):(C=JSON.stringify(b.La),S=null!=(M=null==(E=b.ib)?void 0:E.headers)?M:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},S,c)}),Q=Object.assign({},b.ib),"POST"===b.ib.method&&(Q=Object.assign({},
Q,{body:C})),(null==(W=b.config)?0:W.Oe)&&Vw(b.config.Oe),ha=function(){return a.U.fetch(b.input,Q,b.config)},u=ha(),z&&a.h.set(z,u)),w(ia,u,9);
case 9:if((na=ia.i)&&"error"in na&&(null==(Sa=na)?0:null==(Da=Sa.error)?0:Da.details))for(za=na.error.details,oa=r(za),J=oa.next();!J.done;J=oa.next())Sc=J.value,(Tc=Sc["@type"])&&-1<Zw.indexOf(Tc)&&(delete Sc["@type"],na=Sc);z&&a.h.has(z)&&a.h.delete(z);(null==(jf=b.config)?0:jf.Pe)&&Vw(b.config.Pe);if(na||null==(kf=a.i)||!kf.sg(b.input,b.La)){ia.A(10);break}return w(ia,a.i.zg(b.input,b.La),11);case 11:na=ia.i;case 10:return fx(a,na,b),ia.return(na||void 0)}})}
function dx(a,b){var c,d,e,f;return x(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Yb)?void 0:d.sessionIndex;var h=Tn(0,{sessionIndex:e});if(!(h instanceof Uf)){var l=new Uf(eb);Vf(l,2,h);h=l}return w(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},cx(b),f)))})}
function cx(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);"cors"!==a&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var gx=new gt("INNERTUBE_TRANSPORT_TOKEN");var hx=["share/get_web_player_share_panel"],ix=["feedback"],jx=["notification/modify_channel_preference"],kx=["browse/edit_playlist"],lx=["subscription/subscribe"],mx=["subscription/unsubscribe"];function nx(){}
v(nx,Iv);nx.prototype.j=function(){return lx};
nx.prototype.h=function(a){return st(a,Hm)||void 0};
nx.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(nx.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ox(){}
v(ox,Iv);ox.prototype.j=function(){return mx};
ox.prototype.h=function(a){return st(a,Gm)||void 0};
ox.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(ox.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function px(){}
v(px,Iv);px.prototype.j=function(){return ix};
px.prototype.h=function(a){return st(a,Gl)||void 0};
px.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(px.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function qx(){}
v(qx,Iv);qx.prototype.j=function(){return jx};
qx.prototype.h=function(a){return st(a,Fm)||void 0};
qx.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function rx(){}
v(rx,Iv);rx.prototype.j=function(){return kx};
rx.prototype.h=function(a){return st(a,Em)||void 0};
rx.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function sx(){}
v(sx,Iv);sx.prototype.j=function(){return hx};
sx.prototype.h=function(a){return st(a,Dm)};
sx.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var tx=new gt("NETWORK_SLI_TOKEN");function ux(a){this.h=a}
ux.prototype.fetch=function(a,b){var c=this,d,e,f;return x(function(g){c.h&&(d=xc(yc(5,Lc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;R("wug_networking_gzip_request")&&(e=br(b));f=new window.Request(a,e);return R("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){yu(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){yu(h)}))})};
ux.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.wg(),b=b.then(function(c){yu(new po("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
ux[ft]=[new ht(tx)];var vx=new gt("NETWORK_MANAGER_TOKEN");var wx;function xx(a){a=void 0===a||a?Hu():Gu();for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;function yx(a){Dq.call(this,1,arguments);this.csn=a}
v(yx,Dq);var Mq=new Eq("screen-created",yx),zx=[],Bx=Ax,Cx=0;function Dx(a,b,c,d,e,f,g,h){function l(){yu(new po("newScreen() parent element does not have a VE - rootVe",b))}
var m=Bx(),n=new Mu({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:m};e&&(f.cttAuthInfo=e);if(R("il_via_jspb")){e=cm((new bm).h(m),n.getAsJspb());c&&c.visualElement?(n=new $l,c.clientScreenNonce&&H(n,2,c.clientScreenNonce),am(n,c.visualElement.getAsJspb()),g&&H(n,4,xm[g]),I(e,$l,5,n)):c&&l();d&&H(e,3,d);if(R("expectation_logging")&&h&&h.screenCreatedLoggingExpectations){c=new Tk;h=r(h.screenCreatedLoggingExpectations.expectedParentScreens||[]);for(d=h.next();!d.done;d=h.next())d=
d.value,d.screenVeType&&(d=Sk(new Rk,d.screenVeType),qe(c,1,Rk,d));I(e,Tk,7,c)}pu(e,f,a)}else e={csn:m,pageVe:n.getAsJson()},R("expectation_logging")&&h&&h.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations),c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):c&&l(),d&&(e.cloneCsn=d),a?eu("screenCreated",e,a,f):Ho("screenCreated",e,f);Jq(Mq,new yx(m));
return m}
function Ex(a,b,c,d){var e=d.filter(function(l){l.csn!==b?(l.csn=b,l=!0):l=!1;return l}),f={cttAuthInfo:Wu(b)||void 0,
sequenceGroup:b};d=r(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(rb(g)||!g.trackingParams&&!g.veType)&&yu(Error("Child VE logged with no data"));if(R("il_via_jspb")){var h=fm((new dm).h(b),c.getAsJspb());jb(e,function(l){l=l.getAsJspb();qe(h,3,Vl,l)});
"UNDEFINED_CSN"===b?Fx("visualElementAttached",f,void 0,h):qu(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:jb(e,function(l){return l.getAsJson()})},"UNDEFINED_CSN"===b?Fx("visualElementAttached",f,c):a?eu("visualElementAttached",c,a,f):Ho("visualElementAttached",c,f)}
function Gx(a,b,c,d,e,f){d={cttAuthInfo:Wu(b)||void 0,sequenceGroup:b};R("il_via_jspb")?(e=(new im).h(b),c=c.getAsJspb(),c=I(e,Vl,2,c),c=H(c,4,1),f&&I(c,Yl,3,f),"UNDEFINED_CSN"===b?Fx("visualElementShown",d,void 0,c):lu(c,d,a)):(f={csn:b,ve:c.getAsJson(),eventType:1},e&&(f.clientData=e),"UNDEFINED_CSN"===b?Fx("visualElementShown",d,f):a?eu("visualElementShown",f,a,d):Ho("visualElementShown",f,d))}
function Hx(a,b,c){var d=!0,e=(d=void 0===d?!1:d)?16:8,f={cttAuthInfo:Wu(b)||void 0,sequenceGroup:b,endOfSequence:d};R("il_via_jspb")?(e=(new hm).h(b),c=c.getAsJspb(),c=I(e,Vl,2,c),H(c,4,d?16:8),"UNDEFINED_CSN"===b?Fx("visualElementHidden",f,void 0,c):mu(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?Fx("visualElementHidden",f,d):a?eu("visualElementHidden",d,a,f):Ho("visualElementHidden",d,f))}
function Ax(){var a;R("enable_web_96_bit_csn")?a=xx():R("enable_web_96_bit_csn_no_crypto")?a=xx(!1):a=sd(Nc(Math.random()+""),3);return a}
function Fx(a,b,c,d){zx.push({Mc:a,payload:c,Sa:d,options:b});Cx||(Cx=Nq())}
function Oq(a){if(zx){for(var b=r(zx),c=b.next();!c.done;c=b.next())if(c=c.value,R("il_via_jspb")&&c.Sa)switch(c.Sa.h(a.csn),c.Mc){case "screenCreated":pu(c.Sa,c.options);break;case "visualElementAttached":qu(c.Sa,c.options);break;case "visualElementShown":lu(c.Sa,c.options);break;case "visualElementHidden":mu(c.Sa,c.options);break;case "visualElementGestured":nu(c.Sa,c.options);break;case "visualElementStateChanged":ou(c.Sa,c.options);break;default:yu(new po("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,Ho(c.Mc,c.payload,c.options));zx.length=0}Cx=0}
;function Ix(){this.j=new Set;this.i=new Set;this.m=new Map;this.client=void 0;this.csn=null}
function Jx(){Ix.h||(Ix.h=new Ix);return Ix.h}
Ix.prototype.l=function(a){this.client=a};
Ix.prototype.h=function(){this.clear();this.csn=Tu()};
Ix.prototype.clear=function(){this.j.clear();this.i.clear();this.m.clear();this.csn=null};function Kx(){}
Kx.prototype.l=function(a){Um(Jx().l).bind(Jx())(a)};
Kx.prototype.clear=function(){Um(Jx().clear).bind(Jx())()};function Lx(){this.v=[];this.V=[];this.h=[];this.L=[];this.s=[];this.ma=[];this.j=new Map;this.i=new Set;this.R=new Map}
Lx.prototype.l=function(a){this.client=a};
function Mx(){Lx.h||(Lx.h=new Lx);var a=Lx.h;var b=16623;var c=void 0===c?{}:c;Um(function(){$u.includes(b)||(yu(new po("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||(a.L=[],a.h.push({rootVe:b,key:c.key||""}));a.v=[];a.V=[];c.hd?Nx(a,b,c):Ox(a,b,c)})()}
function Px(a,b,c){c=void 0===c?0:c;Um(function(){b.then(function(d){a.i.has(c)&&a.m&&a.m();var e=Tu(c),f=Ru(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Ex(a.client,e,f,[Nu(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Ex(a.client,e,f,[Nu(d.playerResponse.trackingParams)])}})})()}
function Qx(a,b,c,d){d=void 0===d?0:d;Um(function(){if(a.i.has(d))return a.v.push([b,c]),!0;var e=Tu(d),f=c||Ru(d);if(e&&f){if(R("combine_ve_grafts")){var g=a.j.get(f);g?g.push(b):a.j.set(f,[b]);a.G||(a.G=to(function(){Rx(a,e)},1200))}else Ex(a.client,e,f,[b]);
return!0}return!1})()}
Lx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Tu(void 0===c?0:c)){a=this.client;var e=Nu(d);d={cttAuthInfo:Wu(c)||void 0,sequenceGroup:c};R("il_via_jspb")?(b=(new gm).h(c),e=e.getAsJspb(),b=I(b,Vl,2,e),H(b,4,xm.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?Fx("visualElementGestured",d,void 0,b):nu(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===
c?Fx("visualElementGestured",d,e):a?eu("visualElementGestured",e,a,d):Ho("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
Lx.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.i.has(c)?this.V.push([a,b]):Sx(this,a,b,c)};
function Sx(a,b,c,d){d=void 0===d?0:d;var e=Tu(d);d=b||Ru(d);e&&d&&(a=a.client,b={cttAuthInfo:Wu(e)||void 0,sequenceGroup:e},R("il_via_jspb")?(c=new jm,c.h(e),d=d.getAsJspb(),I(c,Vl,2,d),"UNDEFINED_CSN"===e?Fx("visualElementStateChanged",b,void 0,c):ou(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?Fx("visualElementStateChanged",b,c):a?eu("visualElementStateChanged",c,a,b):Ho("visualElementStateChanged",c,b)))}
function Nx(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.m=function(){Ox(a,b,c);var f=Ru(c.layer);if(f){for(var g=r(a.v),h=g.next();!h.done;h=g.next())h=h.value,Qx(a,h[0],h[1]||f,c.layer);f=r(a.V);for(g=f.next();!g.done;g=f.next())g=g.value,Sx(a,g[0],g[1])}};
Tu(c.layer)||a.m();if(c.hd)for(var d=r(c.hd),e=d.next();!e.done;e=d.next())Px(a,e.value,c.layer);else xu(Error("Delayed screen needs a data promise."))}
function Ox(a,b,c){c=void 0===c?{}:c;var d=void 0;c.layer||(c.layer=0);d=void 0!==c.Je?c.Je:c.layer;var e=Tu(d);d=Ru(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=P("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});R("combine_ve_grafts")&&e&&Rx(a,e);try{var l=Dx(a.client,b,f,c.gd,c.cttAuthInfo,g,c.xg,c.loggingExpectations)}catch(q){Bu(q,{Ig:b,rootVe:d,Eg:void 0,
tg:e,Dg:f,gd:c.gd});xu(q);return}Xu(l,b,c.layer,c.cttAuthInfo);e&&"UNDEFINED_CSN"!==e&&d&&!Uu(e)&&Hx(a.client,e,d);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=l||"");Um(Fw)({clientScreenNonce:l},void 0,!1);Kx.h||(Kx.h=new Kx);Um(Jx().h).bind(Jx())();var m=Ru(c.layer);e&&"UNDEFINED_CSN"!==e&&m&&(R("web_mark_root_visible")||R("music_web_mark_root_visible"))&&Um(Gx)(void 0,l,m,void 0,void 0,void 0);a.i.delete(c.layer||0);a.m=void 0;var n;null==(n=a.R.get(c.layer))||n.forEach(function(q,
u){q?Qx(a,u,q,c.layer):m&&Qx(a,u,m,c.layer)});
Tx(a)}
function Tx(a){for(var b=0;b<a.s.length;b++){var c=a.s[b];try{c()}catch(d){xu(d)}}for(b=a.s.length=0;b<a.ma.length;b++){c=a.ma[b];try{c()}catch(d){xu(d)}}}
function Rx(a,b){a.j.forEach(function(c,d){Ex(a.client,b,d,c)});
a.j.clear();a.G=void 0}
;function Ux(){var a,b,c;return x(function(d){if(1==d.h)return a=nt().resolve(gx),a?w(d,bx(a),2):(yu(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return yu(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.ug;return d.return(c)}yu(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Vx=y.caches,Wx;function Xx(a){var b=a.indexOf(":");return-1===b?{zd:a}:{zd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Yx(){return x(function(a){if(void 0!==Wx)return a.return(Wx);Wx=new Promise(function(b){var c;return x(function(d){switch(d.h){case 1:return ya(d,2),w(d,Vx.open("test-only"),4);case 4:return w(d,Vx.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Wx)})}
function Zx(a){var b,c,d,e,f,g,h;x(function(l){if(1==l.h)return w(l,Yx(),2);if(3!=l.h){if(!l.i)return l.return(!1);b=[];return w(l,Vx.keys(),3)}c=l.i;d=r(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Xx(f),h=g.datasyncId,!h||a.includes(h)||b.push(Vx.delete(f));return l.return(Promise.all(b).then(function(m){return m.some(function(n){return n})}))})}
function $x(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.h)return w(h,Yx(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=ro("cache contains other");return w(h,Vx.keys(),3)}b=h.i;c=r(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Xx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function ay(){try{return!!self.localStorage}catch(a){return!1}}
;function by(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function cy(a){if(ay()){var b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=by(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function dy(){if(!ay())return!1;var a=ro(),b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next())if(c=by(c.value),void 0!==c&&c!==a)return!0;return!1}
;function ey(){Ux().then(function(a){a&&(Wp(a),Zx(a),cy(a))})}
function fy(){var a=new ts;Mi.ea(function(){var b,c,d,e;return x(function(f){switch(f.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){f.A(2);break}b=ro("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Wp(g);Zx(g);cy(g);return f.return()}c=dy();return w(f,$x(),3);case 3:return d=f.i,w(f,Xp(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.oa()?ey():a.l.add("publicytnetworkstatus-online",ey,!0,void 0,void 0),f.h=0}})})}
;var pi=fa(["data-"]);function gy(a){a&&(a.dataset?a.dataset[hy("loaded")]="true":oi(a))}
function iy(a,b){return a?a.dataset?a.dataset[hy(b)]:a.getAttribute("data-"+b):null}
var jy={};function hy(a){return jy[a]||(jy[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var ky=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,ly=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function my(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ky,""),c=c.replace(ly,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ny(a,b,c)}
function ny(a,b,c){c=void 0===c?null:c;var d=oy(a),e=document.getElementById(d),f=e&&iy(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=$s(d,b),b=""+Ua(b),py[b]=f),g||(e=qy(a,d,function(){iy(e,"loaded")||(gy(e),ct(d),qn($a(dt,d),0))},c)))}
function qy(a,b,c,d){d=void 0===d?null:d;var e=Hf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);si(e,Nk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function ry(a){a=oy(a);var b=document.getElementById(a);b&&(dt(a),b.parentNode.removeChild(b))}
function sy(a,b){a&&b&&(a=""+Ua(b),(a=py[a])&&bt(a))}
function oy(a){var b=document.createElement("a");pc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+vc(a)}
var py={};var ty=[],uy=!1;function vy(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&iv()){var a=P("PLAYER_VARS",{});if("1"!=tb(a)&&!jv(a)){var b=function(){uy=!0;"google_ad_status"in window?Qm("DCLKSTAT",1):Qm("DCLKSTAT",2)};
try{my("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ty.push(Mi.ea(function(){if(!(uy||"google_ad_status"in window)){try{sy("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}uy=!0;Qm("DCLKSTAT",3)}},5E3))}}}
function wy(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;var Iy=window,Jy,Ky=R("web_enable_lifecycle_monitoring")&&(null==(Jy=Iy.performance)?void 0:Jy.measure);function Ly(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?xo():d;this.l=c;this.i=d;this.j=new gi;this.h=a;for(a={Za:0};a.Za<this.h.length;a={Db:a.Db,Za:a.Za},a.Za++)a.Db=this.h[a.Za],c=function(e){return function(){e.Db.Fc();b.h[e.Za].nc=!0;b.h.every(function(f){return!0===f.nc})&&b.j.resolve()}}(a),d=uo(c,My(this,a.Db)),this.h[a.Za]=Object.assign({},a.Db,{Fc:c,
jobId:d})}
function Ny(a){var b=Array.from(a.h.keys()).sort(function(d,e){return My(a,a.h[e])-My(a,a.h[d])});
b=r(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.nc||(a.i.Ca(c.jobId),uo(c.Fc,10))}
Ly.prototype.cancel=function(){for(var a=r(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.nc||this.i.Ca(b.jobId),b.nc=!0;this.j.resolve()};
function My(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function Oy(a){this.state=a;this.plugins=[];this.s=void 0;this.v={};Ky&&window.performance.mark(this.state+"-start")}
k=Oy.prototype;k.install=function(a){this.plugins.push(a);return this};
k.uninstall=function(){var a=this;La.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
k.transition=function(a,b){var c=this;Py(this);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.K===a}):f.from===c.state&&f.K===a});
if(d){this.j&&(Ny(this.j),this.j=void 0);Qy(this,a,b);this.state=a;Ky&&window.performance.mark(this.state+"-start");d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Ry(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Ry(a,b){var c=b.filter(function(e){return 10===Sy(a,e)}),d=b.filter(function(e){return 10!==Sy(a,e)});
return a.v.Mg?function(){var e=La.apply(0,arguments);return x(function(f){if(1==f.h)return w(f,a.Qe.apply(a,[c].concat(ja(e))),2);a.Id.apply(a,[d].concat(ja(e)));f.h=0})}:function(){var e=La.apply(0,arguments);
a.Re.apply(a,[c].concat(ja(e)));a.Id.apply(a,[d].concat(ja(e)))}}
k.Re=function(a){var b=La.apply(1,arguments);xo();for(var c={},d=r(a),e=d.next();!e.done;c={mb:c.mb},e=d.next())c.mb=e.value,vo(function(f){return function(){Ty(f.mb.name);f.mb.callback.apply(f.mb,ja(b));Uy(f.mb.name)}}(c))};
k.Qe=function(a){var b=La.apply(1,arguments),c,d,e,f;return x(function(g){1==g.h&&(xo(),c={},d=r(a),e=d.next());if(3!=g.h){if(e.done)return g.A(0);c.ab=e.value;c.Bb=void 0;f=function(h){return function(){Ty(h.ab.name);var l=h.ab.callback.apply(h.ab,ja(b));"function"===typeof(null==l?void 0:l.then)?h.Bb=l.then(function(){Uy(h.ab.name)}):Uy(h.ab.name)}}(c);
vo(f);return c.Bb?w(g,c.Bb,3):g.A(3)}c={ab:c.ab,Bb:c.Bb};e=d.next();return g.A(2)})};
k.Id=function(a){var b=La.apply(1,arguments),c=this,d=a.map(function(e){return{Fc:function(){Ty(e.name);e.callback.apply(e,ja(b));Uy(e.name)},
priority:Sy(c,e)}});
d.length&&(this.j=new Ly(d))};
function Sy(a,b){var c,d;return null!=(d=null!=(c=a.s)?c:b.priority)?d:0}
function Py(a){if(Ky){var b=a.state+"-start",c=a.state+"-end";window.performance.mark(c);window.performance.measure(a.state,b,c)}}
function Ty(a){Ky&&a&&window.performance.mark(a+"-start")}
function Uy(a){if(Ky&&a){var b=a+"-start",c=a+"-end";window.performance.mark(c);window.performance.measure(a,b,c)}}
function Qy(a,b,c){Ky&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
da.Object.defineProperties(Oy.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Vy(a){Oy.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.h=new Map;this.transitions=[{from:"document_active",K:"document_disposed_preventable",action:this.V},{from:"document_active",K:"document_disposed",action:this.l},{from:"document_disposed_preventable",K:"document_disposed",action:this.l},{from:"document_disposed_preventable",K:"flush_logs",action:this.m},{from:"document_disposed_preventable",K:"document_active",action:this.i},{from:"document_disposed",K:"flush_logs",
action:this.m},{from:"document_disposed",K:"document_active",action:this.i},{from:"document_disposed",K:"document_disposed",action:function(){}},
{from:"flush_logs",K:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(Vy,Oy);Vy.prototype.V=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Vy.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Vy.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Vy.prototype.i=function(){this.h=new Map};function Wy(a){Oy.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",K:"document_visible",action:this.i},{from:"document_visibility_unknown",K:"document_hidden",action:this.h},{from:"document_visibility_unknown",K:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",K:"document_backgrounded",action:this.l},{from:"document_visible",K:"document_hidden",action:this.h},{from:"document_visible",K:"document_foregrounded",
action:this.m},{from:"document_visible",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_hidden",action:this.h},{from:"document_foregrounded",K:"document_foregrounded",action:this.m},{from:"document_hidden",K:"document_visible",action:this.i},{from:"document_hidden",K:"document_backgrounded",action:this.l},{from:"document_hidden",K:"document_hidden",action:this.h},{from:"document_backgrounded",K:"document_hidden",
action:this.h},{from:"document_backgrounded",K:"document_backgrounded",action:this.l},{from:"document_backgrounded",K:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(Wy,Oy);Wy.prototype.i=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Wy.prototype.h=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Wy.prototype.l=function(a,b){a(null==b?void 0:b.event)};
Wy.prototype.m=function(a,b){a(null==b?void 0:b.event)};function Xy(){this.j=new Vy;this.l=new Wy}
Xy.prototype.install=function(){var a=La.apply(0,arguments),b=this;a.forEach(function(c){b.j.install(c)});
a.forEach(function(c){b.l.install(c)})};function Yy(){Xy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));a={};this.install((a.flush_logs={callback:this.i},a))}
v(Yy,Xy);Yy.prototype.i=function(){if(R("web_fp_via_jspb")){var a=new Ul,b=Tu();b&&H(a,1,b);b=new vm;oe(b,Ul,380,wm,a);ku(b);R("web_fp_via_jspb_and_json")&&Ho("finalPayload",{csn:Tu()})}else Ho("finalPayload",{csn:Tu()})};
Yy.prototype.h=function(){Du(Eu)};function Zy(){}
function $y(){var a=B("ytglobal.storage_");a||(a=new Zy,A("ytglobal.storage_",a));return a}
Zy.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(az()):d.return()})};
function az(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
A("ytglobal.storageClass_",Zy);function Fo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=kn("ytidb_transaction_ended_event_rate_limit_session",.2)}
Fo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":bz(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=kn("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function bz(a,b){$y().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:cz(null==c?void 0:c.usage),deviceStorageQuotaMbytes:cz(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function cz(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function dz(a,b,c){L.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.i="widget";this.L=!!a;this.G=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.L&&(d.sessionId&&d.sessionId!=f.id||d.i&&d.i!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.s&&(!d.v||0<=gb(d.v,f.func))&&d.s(f.func,f.args,e.origin)}}};
this.v=this.j=this.s=null;window.addEventListener("message",this.G)}
v(dz,L);dz.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.i&&(a.channel=this.i);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Wm(d)}}};
dz.prototype.M=function(){window.removeEventListener("message",this.G);L.prototype.M.call(this)};function ez(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new dz(!!P("WIDGET_ID_ENFORCE")),b=this.Le.bind(this);a.s=b;a.v=null;this.h.i="widget";if(a=P("WIDGET_ID"))this.h.sessionId=a}
k=ez.prototype;k.Le=function(a,b,c){"addEventListener"===a&&b?this.Ec(b[0],c):this.Vc(a,b,c)};
k.Vc=function(){};
k.xc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
k.Ec=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.xc(a,b)),this.j[a]=!0)};
k.addEventListener=function(){};
k.oe=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ac());this.sendMessage("onReady");hb(this.i,this.Gd,this);this.i=[]};
k.Ac=function(){return null};
function fz(a,b){a.sendMessage("infoDelivery",b)}
k.Gd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
k.sendMessage=function(a,b){this.Gd({event:a,info:void 0===b?null:b})};
k.dispose=function(){this.h=null};var gz={},hz=(gz["api.invalidparam"]=2,gz.auth=150,gz["drm.auth"]=150,gz["heartbeat.net"]=150,gz["heartbeat.servererror"]=150,gz["heartbeat.stop"]=150,gz["html5.unsupportedads"]=5,gz["fmt.noneavailable"]=5,gz["fmt.decode"]=5,gz["fmt.unplayable"]=5,gz["html5.missingapi"]=5,gz["html5.unsupportedlive"]=5,gz["drm.unavailable"]=5,gz["mrm.blocked"]=151,gz);var iz=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function jz(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function kz(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=r(iz);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function lz(a,b,c,d){if(Ta(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function mz(a){ez.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Xe.bind(this));this.addEventListener("onVolumeChange",this.Ye.bind(this));this.addEventListener("onApiChange",this.Se.bind(this));this.addEventListener("onPlaybackQualityChange",this.Ue.bind(this));this.addEventListener("onPlaybackRateChange",this.Ve.bind(this));this.addEventListener("onStateChange",this.We.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ze.bind(this))}
v(mz,ez);k=mz.prototype;
k.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&jz(a)){var d=b;if(Ta(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=kz(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=kz(e);break;case "loadPlaylist":case "cuePlaylist":e=lz(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);jz(a)&&fz(this,this.Ac())}};
k.Ec=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);ez.prototype.Ec.call(this,a,b)};
k.xc=function(a,b){var c=this,d=ez.prototype.xc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
k.onReady=function(){var a=this.oe.bind(this);this.h.j=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.errorCode=a?hz[a]||b:b;this.sendMessage("onError",this.errorCode.toString())}};
k.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
k.Ac=function(){if(!this.api)return null;var a=this.api.getApiInterface();mb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
k.We=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());fz(this,a)};
k.Ue=function(a){fz(this,{playbackQuality:a})};
k.Ve=function(a){fz(this,{playbackRate:a})};
k.Se=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.api.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Ye=function(){fz(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
k.Xe=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());fz(this,a)};
k.Ze=function(){var a={sphericalProperties:this.api.getSphericalProperties()};fz(this,a)};
k.dispose=function(){ez.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function nz(a){L.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Cd,this)}
v(nz,L);k=nz.prototype;k.start=function(){this.started||this.h()||(this.started=!0,this.connection.jb("RECEIVING"))};
k.jb=function(a,b){this.started&&!this.h()&&this.connection.jb(a,b)};
k.Cd=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=oz(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=pz(a,c))&&this.jb(a,c))}}};
k.addListener=function(a){if(!(a in this.i)){var b=this.Te.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
k.Te=function(a,b){this.started&&!this.h()&&this.connection.jb(a,this.zc(a,b))};
k.zc=function(a,b){if(null!=b)return{value:b}};
k.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
k.M=function(){var a=this.connection;a.h()||jj(a.i,"command",this.Cd,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);L.prototype.M.call(this)};function qz(a,b){nz.call(this,b);this.api=a;this.start()}
v(qz,nz);qz.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
qz.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function oz(a,b){switch(a){case "loadVideoById":return a=kz(b),[a];case "cueVideoById":return a=kz(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=lz(b),[a];case "cuePlaylist":return a=lz(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function pz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
qz.prototype.zc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return nz.prototype.zc.call(this,a,b)};
qz.prototype.M=function(){nz.prototype.M.call(this);delete this.api};function rz(a){a=void 0===a?!1:a;L.call(this);this.i=new ij(a);Pe(this,this.i)}
ab(rz,L);rz.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
rz.prototype.m=function(a,b){this.h()||this.i.bb.apply(this.i,arguments)};function sz(a,b,c){rz.call(this);this.l=a;this.j=b;this.id=c}
v(sz,rz);sz.prototype.jb=function(a,b){this.h()||this.l.jb(this.j,this.id,a,b)};
sz.prototype.M=function(){this.j=this.l=null;rz.prototype.M.call(this)};function tz(a,b,c){L.call(this);this.i=a;this.origin=c;this.j=Os(window,"message",this.l.bind(this));this.connection=new sz(this,a,b);Pe(this,this.connection)}
v(tz,L);tz.prototype.jb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
tz.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
tz.prototype.M=function(){Ps(this.j);this.i=null;L.prototype.M.call(this)};function uz(){this.state=1;this.h=null}
k=uz.prototype;k.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript)d=(0,qi.createScript)(a.interpreterSafeScript.privateDoNotAccessOrElseSafeScriptWrappedValue||"");else{var f;d=null!=(f=a.interpreterScript)?f:null}a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Db("From proto message. b/166824318"),e=Lb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());vz(this,d,e,a.program,b,c)}else yu(Error("Cannot initialize botguard without program"))};
function vz(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,my(c,function(){window[g]?wz(a,d,g,e):(a.state=3,ry(c),yu(new po("Unable to load Botguard","from "+c)))},f)):b?(f=Hf("SCRIPT"),b instanceof Ci?(f.textContent=(0,qi.kf)(b),ri(f)):f.textContent=b,f.nonce=tc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?wz(a,d,g,e):(a.state=4,yu(new po("Unable to load Botguard from JS")))):yu(new po("Unable to load VM; no url or JS provided"))}
function wz(a,b,c,d){a.state=5;try{var e=new hi({program:b,se:c,Me:R("att_web_record_metrics")});e.bf.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&yu(f)}}
k.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Pd({fd:a}):null};
k.dispose=function(){this.Wc()};
k.Wc=function(){this.Qc(null);this.state=8};
k.Tc=function(){return!!this.h};
k.Pd=function(a){return this.h.Jd(a)};
k.Qc=function(a){Ne(this.h);this.h=a};function xz(){var a=B("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function yz(){uz.apply(this,arguments)}
v(yz,uz);yz.prototype.Wc=function(){this.state=8};
yz.prototype.Qc=function(a){var b;null==(b=xz())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Jd.bind(a)},A("yt.abuse.playerAttLoader",b),A("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(A("yt.abuse.playerAttLoader",null),A("yt.abuse.playerAttLoaderRun",null))};
yz.prototype.Tc=function(){return!!xz()};
yz.prototype.Pd=function(a){return xz().bgvmc(a)};var zz=new yz;function Az(){return zz.Tc()}
function Bz(a){a=void 0===a?{}:a;return zz.invoke(a)}
;function Cz(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||vb(b);this.assets=a.assets||{};this.attrs=a.attrs||vb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Cz.prototype.clone=function(){var a=new Cz,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Qa(c)?a[b]=vb(c):a[b]=c}return a};var Dz=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Ez(a){a=a||"";if(window.spf){var b=a.match(Dz);spf.style.load(a,b?b[1]:"",void 0)}else Fz(a)}
function Fz(a){var b=Gz(a),c=document.getElementById(b),d=c&&iy(c,"loaded");d||c&&!d||(c=Hz(a,b,function(){iy(c,"loaded")||(gy(c),ct(b),qn($a(dt,b),0))}))}
function Hz(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Nk(a);rc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Gz(a){var b=Hf("A");pc(b,new Ob(a,Pb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+vc(a)}
;function Iz(){L.call(this);this.i=[]}
v(Iz,L);Iz.prototype.M=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}L.prototype.M.call(this)};function Jz(){Iz.apply(this,arguments)}
v(Jz,Iz);function Kz(a,b,c,d,e){L.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.Vb=e;this.va=!1;this.api={};this.ha=this.s=null;this.R=new ij;this.i={};this.Y=this.Aa=this.elementId=this.pb=this.config=null;this.X=!1;this.l=this.G=null;this.ia={};this.Wb=["onReady"];this.lastError=null;this.Fb=NaN;this.L={};this.Xb=new Jz(this);this.aa=0;this.j=this.m=a;Pe(this,this.R);Lz(this);Mz(this);Pe(this,this.Xb);c?this.aa=qn(function(){f.loadNewVideoConfig(c)},0):d&&(Nz(this),Oz(this))}
v(Kz,L);k=Kz.prototype;k.getId=function(){return this.v};
k.loadNewVideoConfig=function(a){if(!this.h()){this.aa&&(window.clearTimeout(this.aa),this.aa=0);var b=a||{};b instanceof Cz||(b=new Cz(b));this.config=b;this.setConfig(a);Oz(this);this.isReady()&&Pz(this)}};
function Nz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
k.setConfig=function(a){this.pb=a;this.config=Qz(a);Nz(this);if(!this.Aa){var b;this.Aa=Rz(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=Di(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=Di(Number(a)||a))};
function Pz(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Sz(a){var b=!0,c=Tz(a);c&&a.config&&(a=Uz(a),b=iy(c,"version")===a);return b&&!!B("yt.player.Application.create")}
function Oz(a){if(!a.h()&&!a.X){var b=Sz(a);if(b&&"html5"===(Tz(a)?"html5":null))a.Y="html5",a.isReady()||Vz(a);else if(Wz(a),a.Y="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Vz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Xz(a,"player_bootstrap_method")?B("yt.player.Application.createAlternate")||B("yt.player.Application.create"):B("yt.player.Application.create");var e=a.config?Qz(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Vb);Vz(a)};
a.X=!0;b?a.G():(my(Uz(a),a.G),(b=Yz(a))&&Ez(b),Zz(a)&&!c&&A("yt.player.Application.create",null))}}}
function Tz(a){var b=Gf(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Vz(a){if(!a.h()){var b=Tz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!Xz(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}$z(a)}else a.Fb=qn(function(){Vz(a)},50)}}
function $z(a){Lz(a);a.va=!0;var b=Tz(a);if(b){a.s=aA(a,b,"addEventListener");a.ha=aA(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=aA(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);Pz(a);a.Aa&&a.Aa(a.api);a.R.bb("onReady",a.api)}
function aA(a,b,c){var d=b[c];return function(){var e=La.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,yu(f))}}}
function Lz(a){a.va=!1;if(a.ha)for(var b in a.i)a.i.hasOwnProperty(b)&&a.ha(b,a.i[b]);for(var c in a.L)a.L.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.L={};a.s=null;a.ha=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.pb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
k.isReady=function(){return this.va};
function Mz(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){ct("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){ct("WATCH_LATER_VIDEO_REMOVED",b)})}
k.addEventListener=function(a,b){var c=this,d=Rz(this,b);d&&(0<=gb(this.Wb,a)||this.i[a]||(b=bA(this,a),this.s&&this.s(a,b)),this.R.subscribe(a,d),"onReady"===a&&this.isReady()&&qn(function(){d(c.api)},0))};
k.removeEventListener=function(a,b){this.h()||(b=Rz(this,b))&&jj(this.R,a,b)};
function Rz(a,b){var c=b;if("string"===typeof b){if(a.ia[b])return a.ia[b];c=function(){var d=La.apply(0,arguments),e=B(b);if(e)try{e.apply(y,d)}catch(f){xu(f)}};
a.ia[b]=c}return c?c:null}
function bA(a,b){var c="ytPlayer"+b+a.v;a.i[b]=c;y[c]=function(d){var e=qn(function(){if(!a.h()){try{a.R.bb(b,null!=d?d:void 0)}catch(h){yu(new po("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.v,data:d}))}var f=a.L,g=String(e);g in f&&delete f[g]}},0);
sb(a.L,String(e))};
return c}
k.getPlayerType=function(){return this.Y||(Tz(this)?"html5":null)};
k.getLastError=function(){return this.lastError};
function Wz(a){a.cancel();Lz(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=Tz(a);b&&(Sz(a)||!Zz(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.G&&sy(Uz(this),this.G);window.clearTimeout(this.Fb);this.X=!1};
k.M=function(){Wz(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){xu(b)}this.ia=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.pb=this.config=this.api=null;delete this.m;delete this.j;L.prototype.M.call(this)};
function Zz(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Uz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Yz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Xz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Zm(c||"","&")[b]}
function Qz(a){for(var b={},c=r(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?vb(e):e}return b}
;var cA={},dA="player_uid_"+(1E9*Math.random()>>>0);function eA(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Gf(c):c;var e=dA+"_"+Ua(c),f=cA[e];if(f&&d)return fA(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Kz(c,e,a,b,void 0);cA[e]=f;ct("player-added",f.api);Qe(f,function(){delete cA[f.getId()]});
return f.api}
function fA(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var gA=null,hA=null,iA=null;function jA(){kA()}
function lA(){kA()}
function kA(){var a=gA.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function mA(){gA&&gA.sendAbandonmentPing&&gA.sendAbandonmentPing();P("PL_ATT")&&zz.dispose();for(var a=Mi,b=0,c=ty.length;b<c;b++)a.Ca(ty[b]);ty.length=0;ry("//static.doubleclick.net/instream/ad_status.js");uy=!1;Qm("DCLKSTAT",0);Oe(iA,hA);gA&&(gA.removeEventListener("onVideoDataChange",jA),gA.destroy())}
;function nA(a,b,c){a="ST-"+vc(a).toString(36);b=b?Ec(b):"";c=c||5;iv()&&Xn(a,b,c)}
;function oA(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=zc(window.location.href);g&&f.push(g);g=zc(d);if(0<=gb(f,g)||!g&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(f=document.createElement("a"),pc(f,d),d=f.href),d&&(d=Ac(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Tu()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
nA(d,b,h)}else nA(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var n=void 0===n?window:n;c=n.location;a=Gc(a,l)+m;var q=void 0===q?vi:q;a:{q=void 0===q?vi:q;for(l=0;l<q.length;++l)if(m=q[l],m instanceof ti&&m.Ae(a)){q=new Ob(a,Pb);break a}q=void 0}q=q||Vb;if(q instanceof Ob)var u=Qb(q);else{b:if(ki){try{u=new URL(q)}catch(t){u="https:";break b}u=u.protocol}else c:{u=document.createElement("a");try{u.href=q}catch(t){u=void 0;break c}u=
u.protocol;u=":"===u||""===u?"https:":u}u="javascript:"!==u?q:void 0}void 0!==u&&(c.href=u)}return!0}
;A("yt.setConfig",Qm);A("yt.config.set",Qm);A("yt.setMsg",Zu);A("yt.msgs.set",Zu);A("yt.logging.errors.log",xu);
A("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}sv(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Sw("embed",["ol"]);c=P("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=dn(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&Sw("watch",["pbs","pbu","pbp"]);gA=eA(a,c);gA.addEventListener("onVideoDataChange",jA);gA.addEventListener("onReady",lA);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?iA=new mz(gA):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(hA=new tz(window.parent,a,b),iA=new qz(gA,hA.connection));vy();R("ytidb_create_logger_embed_killswitch")||Eo();a={};Yy.h||(Yy.h=new Yy);
Yy.h.install((a.flush_logs={callback:function(){Nt()}},a));
Es();R("ytidb_clear_embedded_player")&&Mi.ea(function(){var f,g;if(!wx){var h=nt(),l={Nc:vx,Nd:ux};h.h.set(l.Nc,l);l={ed:{feedbackEndpoint:Ev(px),modifyChannelNotificationPreferenceEndpoint:Ev(qx),playlistEditEndpoint:Ev(rx),subscribeEndpoint:Ev(nx),unsubscribeEndpoint:Ev(ox),webPlayerShareEntityServiceEndpoint:Ev(sx)}};var m=Cv(),n={};m&&(n.client_location=m);void 0===f&&(f=Sn());void 0===g&&(g=h.resolve(vx));ax(l,g,f,n);f={Nc:gx,Od:$w.h};h.h.set(f.Nc,f);wx=h.resolve(gx)}fy()})});
var pA=Um(function(){Ww();tv();R("embeds_web_enable_ve_logging_unification")||Mx()}),qA=Um(function(a){a.persisted||(Ww(),tv())}),rA=Um(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?mA():a.persisted||mA()}),sA=Um(mA);
window.addEventListener?(window.addEventListener("load",pA),window.addEventListener("pageshow",qA),window.addEventListener("pagehide",rA)):window.attachEvent&&(window.attachEvent("onload",pA),window.attachEvent("onunload",sA));A("yt.abuse.player.botguardInitialized",B("yt.abuse.player.botguardInitialized")||Az);A("yt.abuse.player.invokeBotguard",B("yt.abuse.player.invokeBotguard")||Bz);A("yt.abuse.dclkstatus.checkDclkStatus",B("yt.abuse.dclkstatus.checkDclkStatus")||wy);
A("yt.player.exports.navigate",B("yt.player.exports.navigate")||oA);A("yt.util.activity.init",B("yt.util.activity.init")||Ss);A("yt.util.activity.getTimeSinceActive",B("yt.util.activity.getTimeSinceActive")||Vs);A("yt.util.activity.setTimestamp",B("yt.util.activity.setTimestamp")||Ts);}).call(this);
