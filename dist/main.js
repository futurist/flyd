!function(n){var t={};function e(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return n[r].call(u.exports,u,u.exports,e),u.l=!0,u.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var u in n)e.d(r,u,function(t){return n[t]}.bind(null,u));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=4)}([function(n,t){n.exports=function(n){return null!=n&&"object"==typeof n&&!0===n["@@functional/placeholder"]}},function(n,t){n.exports=function(n,t){switch(n){case 0:return function(){return t.apply(this,arguments)};case 1:return function(n){return t.apply(this,arguments)};case 2:return function(n,e){return t.apply(this,arguments)};case 3:return function(n,e,r){return t.apply(this,arguments)};case 4:return function(n,e,r,u){return t.apply(this,arguments)};case 5:return function(n,e,r,u,o){return t.apply(this,arguments)};case 6:return function(n,e,r,u,o,i){return t.apply(this,arguments)};case 7:return function(n,e,r,u,o,i,a){return t.apply(this,arguments)};case 8:return function(n,e,r,u,o,i,a,s){return t.apply(this,arguments)};case 9:return function(n,e,r,u,o,i,a,s,c){return t.apply(this,arguments)};case 10:return function(n,e,r,u,o,i,a,s,c,f){return t.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}},function(n,t,e){var r=e(0);n.exports=function(n){return function t(e){return 0===arguments.length||r(e)?t:n.apply(this,arguments)}}},function(n,t,e){"use strict";var r=e(5);function u(){return!0}console.log(7777);var o,i=[],a=[],s=-1,c=!1,f=!1;var d={};function l(n,t){var e,r,o,i,a=M([],u);for(o=[],i=[],e=0;e<t.length;++e)void 0!==t[e]&&(o.push(t[e]),void 0!==t[e].end&&i.push(t[e].end));return(r=M(o,n)).depsChanged=[],r.fnArgs=r.deps.concat([r,r.depsChanged]),r.end=a,a.listeners.push(r),V(i,a),a.deps=i,U(r),r}function p(n,t){return l(function(t,e){e(n(t.val))},[t])}function h(n){return p(n,this)}function v(n){return n(this)}function g(n){return y(n,this)}function y(n,t){var e=d.stream(1),r=d.on(function(){var n=e()-1;e(n),n<=0&&e.end(!0)});r(t.end);var u=d.stream(),o=d.combine(function(t,o){u.end(!0);var i=n(t());e(e()+1),r(i.end),u=p(o,i)},[t]);return d.endsOn(e.end,o),o}function m(n,t){return l(function(n,t,e){e(n.val(t.val))},[t,n])}function b(n){return m(n,this)}function x(n){return m(this,n)}function O(){return"stream("+this.val+")"}function C(){function n(t){return 0===arguments.length?n.val:(function n(t,e){e.val=t;e.hasVal=!0;void 0===o?(f=!0,function(n){var t,e,r,u=n.listeners;for(t=0;t<u.length;++t)(r=u[t]).end===n?A(r):(void 0!==r.depsChanged&&r.depsChanged.push(n),r.shouldUpdate=!0,j(r));for(;s>=0;--s)!0===(e=a[s]).shouldUpdate&&U(e),e.queued=!1}(e),i.length>0&&P(),f=!1):o===e?function(n,t){var e,r;for(e=0;e<t.length;++e)(r=t[e]).end!==n?(void 0!==r.depsChanged&&r.depsChanged.push(n),r.shouldUpdate=!0):A(r)}(e,e.listeners):S(function(e){n(t,e)},e)}(t,n),n)}return n.hasVal=!1,n.val=void 0,n.updaters=[],n.listeners=[],n.queued=!1,n.end=void 0,n.ap=b,n["fantasy-land/map"]=n.map=h,n["fantasy-land/ap"]=x,n["fantasy-land/of"]=n.of=d.stream,n["fantasy-land/chain"]=n.chain=g,n.pipe=v,n.constructor=d.stream,n.toJSON=function(){return n.val},n.toString=O,n}function M(n,t){var e=C();return e.fn=t,e.deps=n,e.depsMet=!1,e.depsChanged=n.length>0?[]:void 0,e.shouldUpdate=!1,V(n,e),e}function U(n){if(!function(n){return n.end&&!0===n.end.val}(n)&&function(n){return!0===n.depsMet||function(n){return n.depsMet=n.deps.every(function(n){return n.hasVal}),n.depsMet}(n)}(n))if(void 0===o){o=n,n.depsChanged&&(n.fnArgs[n.fnArgs.length-1]=n.depsChanged);var t=n.fn.apply(n.fn,n.fnArgs);void 0!==t&&n(t),o=void 0,void 0!==n.depsChanged&&(n.depsChanged=[]),n.shouldUpdate=!1,!1===(c||f)&&P(),function(n){return n.listeners.some(function(n){return n.shouldUpdate})}(n)&&(f?n.listeners.forEach(function(n){n.shouldUpdate&&S(U,n)}):n(n.val))}else S(U,n)}function j(n){var t,e=n.listeners;if(!1===n.queued){for(n.queued=!0,t=0;t<e.length;++t)j(e[t]);a[++s]=n}}function S(n,t){i.push(t),t.updaters.push(n),t.shouldUpdate=!0}function P(){for(c=!0;i.length>0;){var n=i.shift(),t=n.updaters.shift();t&&n.shouldUpdate&&t(n)}c=!1}function V(n,t){for(var e=0;e<n.length;++e)n[e].listeners.push(t)}function _(n,t){t[t.indexOf(n)]=t[t.length-1],t.length--}function w(n){for(var t=0;t<n.deps.length;++t)_(n,n.deps[t].listeners);n.deps.length=0}function A(n){void 0!==n.deps&&w(n),void 0!==n.end&&w(n.end)}function q(){}d.stream=function(n){var t=M([],u),e=C();return e.end=t,e.fnArgs=[],t.listeners.push(e),arguments.length>0&&e(n),e},d.stream["fantasy-land/of"]=d.stream.of=d.stream,d.combine=r(2,l),d.isStream=function(n){return function(n){return!!(n&&n.constructor&&n.call&&n.apply)}(n)&&"hasVal"in n},d.immediate=function(n){return!1===n.depsMet&&(n.depsMet=!0,U(n)),n},d.endsOn=function(n,t){return w(t.end),n.listeners.push(t.end),t.end.deps.push(n),t},d.map=r(2,p),d.chain=r(2,y),d.ap=r(2,m),d.on=r(2,function(n,t){return l(function(t){n(t.val)},[t])}),d.scan=r(3,function(n,t,e){var r=l(function(e,r){r(t=n(t,e.val))},[e]);return r.hasVal||r(t),r}),d.merge=r(2,function(n,t){var e=d.immediate(l(function(n,t,e,r){r[0]?e(r[0]()):n.hasVal?e(n.val):t.hasVal&&e(t.val)},[n,t]));return d.endsOn(l(function(){return!0},[n.end,t.end]),e),e}),d.transduce=r(2,function(n,t){return n=n(new q),l(function(t,e){var r=n["@@transducer/step"](void 0,t.val);return r&&!0===r["@@transducer/reduced"]?(e.end(!0),r["@@transducer/value"]):r},[t])}),d.curryN=r,d.fromPromise=function(n){var t=d.stream();return n.then(function(n){t(n),t.end(!0)}),t},d.flattenPromise=function(n){return l(function(n,t){n().then(t)},[n])},q.prototype["@@transducer/init"]=function(){},q.prototype["@@transducer/result"]=function(){},q.prototype["@@transducer/step"]=function(n,t){return t},n.exports=d},function(n,t,e){"use strict";e.r(t);var r=e(3);const u=e.n(r).a.stream(10);console.log(u())},function(n,t,e){var r=e(1),u=e(2),o=e(6),i=e(7),a=o(function(n,t){return 1===n?u(t):r(n,i(n,[],t))});n.exports=a},function(n,t,e){var r=e(2),u=e(0);n.exports=function(n){return function t(e,o){switch(arguments.length){case 0:return t;case 1:return u(e)?t:r(function(t){return n(e,t)});default:return u(e)&&u(o)?t:u(e)?r(function(t){return n(t,o)}):u(o)?r(function(t){return n(e,t)}):n(e,o)}}}},function(n,t,e){var r=e(1),u=e(0);n.exports=function n(t,e,o){return function(){for(var i=[],a=0,s=t,c=0;c<e.length||a<arguments.length;){var f;c<e.length&&(!u(e[c])||a>=arguments.length)?f=e[c]:(f=arguments[a],a+=1),i[c]=f,u(f)||(s-=1),c+=1}return s<=0?o.apply(this,i):r(s,n(t,i,o))}}}]);