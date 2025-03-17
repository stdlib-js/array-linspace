// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@v0.2.2-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-dtype@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-float-ctors@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-defaults@v0.3.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@v0.0.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-ctor@v0.0.3-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import{isPrimitive as y}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import{isPrimitive as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@v0.3.0-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";function T(e,t,r,n,s){var i,o,d;if(0===n)return e;if(1===n)return e[0]=s?r:t,e;for(e[0]=t,o=(r-t)/(i=s?n-1:n),d=1;d<i;d++)e[d]=t+o*d;return s&&(e[i]=r),e}function k(e,t,r,n,s,i,o){var d,p,l,m,f,j,u,x,y;if(0===i)return e;if("float64"===t?(d=r,l=0):"complex64"===t?(d=h(r),l=v(r)):(d=c(r),l=a(r)),"float64"===n?(p=s,m=0):"complex64"===n?(p=h(s),m=v(s)):(p=c(s),m=a(s)),1===i)return o?(e[0]=p,e[1]=m):(e[0]=d,e[1]=l),e;for(e[0]=d,e[1]=l,f=(p-d)/(u=o?i-1:i),j=(m-l)/u,y=2,x=1;x<u;x++)e[y]=d+f*x,e[y+1]=l+j*x,y+=2;return o&&(e[y]=p,e[y+1]=m),e}function P(e,t){return u(t)?x(t,"dtype")&&(e.dtype=t.dtype,!y(e.dtype))?new TypeError(m("0132W","dtype",e.dtype)):x(t,"endpoint")&&(e.endpoint=t.endpoint,!g(e.endpoint))?new TypeError(m("0132o","endpoint",e.endpoint)):null:new TypeError(m("0132V",t))}var _=!0,V=l.get("dtypes.complex_floating_point");function W(e,l,u){var x,y,g,w,b,E,W;if("object"==typeof e){if(null===(b=i(e))){if(!t(e))throw new TypeError(m("0132j",e));b="complex128"}W=!0}else{if(!r(e)||s(e))throw new TypeError(m("0132j",e));b="float64"}if("object"==typeof l){if(null===(E=i(l))){if(!t(l))throw new TypeError(m("0132k",l));E="complex128"}W=!0}else{if(!r(l)||s(l))throw new TypeError(m("0132k",l));E="float64"}if(!n(u))throw new TypeError(m("0132m",u));if((x={endpoint:_}).dtype=b===E?b:V,arguments.length>3&&(g=P(x,arguments[3])))throw g;if("generic"===x.dtype)return W?function(e,t,r,n,s,i){var o,d,p,l,m,u,x,y,g,w,b,E,T;if(0===s)return[];if(d=0,"float64"===e?(l=t,u=0):"complex64"===e?(d+=1,l=h(t),u=v(t)):(l=c(t),u=a(t)),"float64"===r?(m=n,x=0):"complex64"===r?(d+=1,m=h(n),x=v(n)):(m=c(n),x=a(n)),o=2===d?f:j,1===s)return i?[new o(m,x)]:[new o(l,u)];for(p=[new o(l,u)],w=(m-l)/(E=i?s-1:s),b=(x-u)/E,T=1;T<E;T++)y=l+w*T,g=u+b*T,p.push(new o(y,g));return i&&p.push(new o(m,x)),p}(b,e,E,l,u,x.endpoint):function(e,t,r,n){var s,i,o,d;if(0===r)return[];if(1===r)return n?[t]:[e];for(s=[e],o=(t-e)/(i=n?r-1:r),d=1;d<i;d++)s.push(e+o*d);return n&&s.push(t),s}(e,l,u,x.endpoint);if(null===(y=o(x.dtype)))throw new TypeError(m("0132n","dtype",x.dtype));if(w=new y(u),"complex64"===x.dtype)return k(d(w,0),b,e,E,l,u,x.endpoint),w;if("complex128"===x.dtype)return k(p(w,0),b,e,E,l,u,x.endpoint),w;if(W)throw new TypeError(m("01308"));return T(w,e,l,u,x.endpoint)}function q(e,n,o){var l,u,x,y,g,V,W;if("object"==typeof e){if(null===(x=i(e))){if(!t(e))throw new TypeError(m("0132j",e));x="complex128"}g=!0}else{if(!r(e)||s(e))throw new TypeError(m("0132j",e));x="float64"}if("object"==typeof n){if(null===(y=i(n))){if(!t(n))throw new TypeError(m("0132k",n));y="complex128"}g=!0}else{if(!r(n)||s(n))throw new TypeError(m("0132k",n));y="float64"}if(!w(o))throw new TypeError(m("0132l",o));if(l={endpoint:_},arguments.length>3&&(u=P(l,arguments[3])))throw u;if(null===(V=b(o))&&(V="generic"),"complex64"===V)return k(d(o,0),x,e,y,n,o.length,l.endpoint),o;if("complex128"===V)return k(p(o,0),x,e,y,n,o.length,l.endpoint),o;if(g){if("generic"===V)return function(e,t,r,n,s,i,o){var d,p,l,m,u,x,y,g,w,b,E,T;if(0===i)return e;if(p=0,"float64"===t?(l=r,u=0):"complex64"===t?(p+=1,l=h(r),u=v(r)):(l=c(r),u=a(r)),"float64"===n?(m=s,x=0):"complex64"===n?(p+=1,m=h(s),x=v(s)):(m=c(s),x=a(s)),d=2===p?f:j,g=e.data,y=e.accessors[1],1===i)return y(g,0,o?new d(m,x):new d(l,u)),e;for(y(g,0,new d(l,u)),w=(m-l)/(E=o?i-1:i),b=(x-u)/E,T=1;T<E;T++)y(g,T,new d(l+w*T,u+b*T));o&&y(g,E,new d(m,x))}(W=E(o),x,e,y,n,o.length,l.endpoint),o;throw new TypeError(m("01307"))}return(W=E(o)).accessorProtocol?(function(e,t,r,n,s){var i,o,d,p,l;if(0===n)return e;if(i=e.data,o=e.accessors[1],1===n)return o(i,0,s?r:t),e;for(o(i,0,t),p=(r-t)/(d=s?n-1:n),l=1;l<d;l++)o(i,l,t+p*l);s&&o(i,d,r)}(W,e,n,o.length,l.endpoint),o):(T(o,e,n,o.length,l.endpoint),o)}e(W,"assign",q);export{q as assign,W as default};
//# sourceMappingURL=index.mjs.map
