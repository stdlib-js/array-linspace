// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-dtype@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-float-ctors@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dtype@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";var T=function(e,t,r,n){var i,s,o,m;if(0===r)return[];if(1===r)return n?[t]:[e];for(i=[e],o=(t-e)/(s=n?r-1:r),m=1;m<s;m++)i.push(e+o*m);return n&&i.push(t),i},E=p,V=d,P=u,k=f,F=c,O=h;var S=function(e,t,r,n,i,s){var o,m,a,l,p,d,u,f,c,h,j,g,b;if(0===i)return[];if(m=0,"float64"===e?(l=t,d=0):"complex64"===e?(m+=1,l=F(t),d=O(t)):(l=P(t),d=k(t)),"float64"===r?(p=n,u=0):"complex64"===r?(m+=1,p=F(n),u=O(n)):(p=P(n),u=k(n)),o=2===m?E:V,1===i)return s?[new o(p,u)]:[new o(l,d)];for(a=[new o(l,d)],h=(p-l)/(g=s?i-1:i),j=(u-d)/g,b=1;b<g;b++)f=l+h*b,c=d+j*b,a.push(new o(f,c));return s&&a.push(new o(p,u)),a};var I=function(e,t,r,n,i){var s,o,m;if(0===n)return e;if(1===n)return e[0]=i?r:t,e;for(e[0]=t,o=(r-t)/(s=i?n-1:n),m=1;m<s;m++)e[m]=t+o*m;return i&&(e[s]=r),e},q=u,z=f,A=c,B=h;var C=function(e,t,r,n,i,s,o){var m,a,l,p,d,u,f,c,h;if(0===s)return e;if("float64"===t?(m=r,l=0):"complex64"===t?(m=A(r),l=B(r)):(m=q(r),l=z(r)),"float64"===n?(a=i,p=0):"complex64"===n?(a=A(i),p=B(i)):(a=q(i),p=z(i)),1===s)return o?(e[0]=a,e[1]=p):(e[0]=m,e[1]=l),e;for(e[0]=m,e[1]=l,d=(a-m)/(f=o?s-1:s),u=(p-l)/f,h=2,c=1;c<f;c++)e[h]=m+d*c,e[h+1]=l+u*c,h+=2;return o&&(e[h]=a,e[h+1]=p),e},D=j,G=g,H=b.isPrimitive,J=v.isPrimitive,K=l;var L=function(e,t){return D(t)?G(t,"dtype")&&(e.dtype=t.dtype,!H(e.dtype))?new TypeError(K("invalid option. `%s` option must be a string. Option: `%s`.","dtype",e.dtype)):G(t,"endpoint")&&(e.endpoint=t.endpoint,!J(e.endpoint))?new TypeError(K("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",e.endpoint)):null:new TypeError(K("invalid argument. Options argument must be an object. Value: `%s`.",t))},M={endpoint:!0},N=t,Q=r.isPrimitive,R=n.isPrimitive,U=i,W=s,X=o,Y=m,Z=a,$=l,_=T,ee=S,te=I,re=C,ne=L,ie=M;var se=function(e,t,r){var n,i,s,o,m,a,l;if("object"==typeof e){if(null===(m=W(e))){if(!N(e))throw new TypeError($("invalid argument. First argument must be either a real or complex number. Value: `%s`.",e));m="complex128"}l=!0}else{if(!Q(e)||U(e))throw new TypeError($("invalid argument. First argument must be either a real or complex number. Value: `%s`.",e));m="float64"}if("object"==typeof t){if(null===(a=W(t))){if(!N(t))throw new TypeError($("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",t));a="complex128"}l=!0}else{if(!Q(t)||U(t))throw new TypeError($("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",t));a="float64"}if(!R(r))throw new TypeError($("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",r));if((n={endpoint:ie.endpoint}).dtype=m===a?m:"complex128",arguments.length>3&&(s=ne(n,arguments[3])))throw s;if("generic"===n.dtype)return l?ee(m,e,a,t,r,n.endpoint):_(e,t,r,n.endpoint);if(null===(i=X(n.dtype)))throw new TypeError($('invalid argument. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",n.dtype));if(o=new i(r),"complex64"===n.dtype)return re(Y(o,0),m,e,a,t,r,n.endpoint),o;if("complex128"===n.dtype)return re(Z(o,0),m,e,a,t,r,n.endpoint),o;if(l)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return te(o,e,t,r,n.endpoint)},oe=p,me=d,ae=u,le=f,pe=c,de=h;var ue=function(e,t,r,n,i,s,o){var m,a,l,p,d,u,f,c,h,j,g,b;if(0===s)return e;if(a=0,"float64"===t?(l=r,d=0):"complex64"===t?(a+=1,l=pe(r),d=de(r)):(l=ae(r),d=le(r)),"float64"===n?(p=i,u=0):"complex64"===n?(a+=1,p=pe(i),u=de(i)):(p=ae(i),u=le(i)),m=2===a?oe:me,c=e.data,f=e.setter,1===s)return f(c,0,o?new m(p,u):new m(l,d)),e;for(f(c,0,new m(l,d)),h=(p-l)/(g=o?s-1:s),j=(u-d)/g,b=1;b<g;b++)f(c,b,new m(l+h*b,d+j*b));return o&&f(c,g,new m(p,u)),e};var fe=function(e,t,r,n,i){var s,o,m,a,l;if(0===n)return e;if(s=e.data,o=e.setter,1===n)return o(s,0,i?r:t),e;for(o(s,0,t),a=(r-t)/(m=i?n-1:n),l=1;l<m;l++)o(s,l,t+a*l);return i&&o(s,m,r),e},ce=t,he=r.isPrimitive,je=x,ge=l,be=i,ve=s,xe=y,ye=m,we=a,Te=w,Ee=ue,Ve=fe,Pe=C,ke=I,Fe=L,Oe=M;var Se=se,Ie=function(e,t,r){var n,i,s,o,m,a,l;if("object"==typeof e){if(null===(s=ve(e))){if(!ce(e))throw new TypeError(ge("invalid argument. First argument must be either a real or complex number. Value: `%s`.",e));s="complex128"}m=!0}else{if(!he(e)||be(e))throw new TypeError(ge("invalid argument. First argument must be either a real or complex number. Value: `%s`.",e));s="float64"}if("object"==typeof t){if(null===(o=ve(t))){if(!ce(t))throw new TypeError(ge("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",t));o="complex128"}m=!0}else{if(!he(t)||be(t))throw new TypeError(ge("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",t));o="float64"}if(!je(r))throw new TypeError(ge("invalid argument. Third argument must be an array-like object. Value: `%s`.",r));if(n={endpoint:Oe.endpoint},arguments.length>3&&(i=Fe(n,arguments[3])))throw i;if(null===(a=xe(r))&&(a="generic"),"complex64"===a)return Pe(ye(r,0),s,e,o,t,r.length,n.endpoint),r;if("complex128"===a)return Pe(we(r,0),s,e,o,t,r.length,n.endpoint),r;if(m){if("generic"===a)return l=Te(r),Ee(l,s,e,o,t,r.length,n.endpoint),r;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return(l=Te(r)).accessors?(Ve(l,e,t,r.length,n.endpoint),r):(ke(r,e,t,r.length,n.endpoint),r)};e(Se,"assign",Ie);var qe=Se;export{Ie as assign,qe as default};
//# sourceMappingURL=index.mjs.map
