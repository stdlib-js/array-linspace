"use strict";var g=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var O=g(function(rr,C){"use strict";function de(e,r,i,n){var f,u,l,a;if(i===0)return[];if(i===1)return n?[r]:[e];for(f=[e],n?u=i-1:u=i,l=(r-e)/u,a=1;a<u;a++)f.push(e+l*a);return n&&f.push(r),f}C.exports=de});var D=g(function(ir,_){"use strict";var ge=require("@stdlib/complex-float32-ctor"),qe=require("@stdlib/complex-float64-ctor"),F=require("@stdlib/complex-real"),S=require("@stdlib/complex-imag"),k=require("@stdlib/complex-realf"),L=require("@stdlib/complex-imagf");function ye(e,r,i,n,f,u){var l,a,m,v,t,c,o,p,s,d,b,q,y;if(f===0)return[];if(a=0,e==="float64"?(v=r,c=0):e==="complex64"?(a+=1,v=k(r),c=L(r)):(v=F(r),c=S(r)),i==="float64"?(t=n,o=0):i==="complex64"?(a+=1,t=k(n),o=L(n)):(t=F(n),o=S(n)),a===2?l=ge:l=qe,f===1)return u?[new l(t,o)]:[new l(v,c)];for(m=[new l(v,c)],u?q=f-1:q=f,d=(t-v)/q,b=(o-c)/q,y=1;y<q;y++)p=v+d*y,s=c+b*y,m.push(new l(p,s));return u&&m.push(new l(t,o)),m}_.exports=ye});var E=g(function(ar,I){"use strict";function xe(e,r,i,n,f){var u,l,a;if(n===0)return e;if(n===1)return f?e[0]=i:e[0]=r,e;for(e[0]=r,f?u=n-1:u=n,l=(i-r)/u,a=1;a<u;a++)e[a]=r+l*a;return f&&(e[u]=i),e}I.exports=xe});var V=g(function(nr,R){"use strict";var A=require("@stdlib/complex-real"),U=require("@stdlib/complex-imag"),B=require("@stdlib/complex-realf"),M=require("@stdlib/complex-imagf");function we(e,r,i,n,f,u,l){var a,m,v,t,c,o,p,s,d;if(u===0)return e;if(r==="float64"?(a=i,v=0):r==="complex64"?(a=B(i),v=M(i)):(a=A(i),v=U(i)),n==="float64"?(m=f,t=0):n==="complex64"?(m=B(f),t=M(f)):(m=A(f),t=U(f)),u===1)return l?(e[0]=m,e[1]=t):(e[0]=a,e[1]=v),e;for(e[0]=a,e[1]=v,l?p=u-1:p=u,c=(m-a)/p,o=(t-v)/p,d=2,s=1;s<p;s++)e[d]=a+c*s,e[d+1]=v+o*s,d+=2;return l&&(e[d]=m,e[d+1]=t),e}R.exports=we});var N=g(function(ur,Y){"use strict";var he=require("@stdlib/assert-is-plain-object"),X=require("@stdlib/assert-has-own-property"),be=require("@stdlib/assert-is-string").isPrimitive,Te=require("@stdlib/assert-is-boolean").isPrimitive,j=require("@stdlib/string-format");function Ee(e,r){return he(r)?X(r,"dtype")&&(e.dtype=r.dtype,!be(e.dtype))?new TypeError(j("invalid option. `%s` option must be a string. Option: `%s`.","dtype",e.dtype)):X(r,"endpoint")&&(e.endpoint=r.endpoint,!Te(e.endpoint))?new TypeError(j("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",e.endpoint)):null:new TypeError(j("invalid argument. Options argument must be an object. Value: `%s`.",r))}Y.exports=Ee});var P=g(function(lr,Ve){Ve.exports={endpoint:!0}});var W=g(function(vr,Q){"use strict";var z=require("@stdlib/assert-is-complex-like"),G=require("@stdlib/assert-is-number").isPrimitive,je=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,H=require("@stdlib/math-base-assert-is-nan"),J=require("@stdlib/complex-dtype"),Ne=require("@stdlib/array-typed-float-ctors"),Pe=require("@stdlib/strided-base-reinterpret-complex64"),Ce=require("@stdlib/strided-base-reinterpret-complex128"),Oe=require("@stdlib/array-defaults"),h=require("@stdlib/string-format"),Fe=O(),Se=D(),ke=E(),K=V(),Le=N(),_e=P(),De=Oe.get("dtypes.complex_floating_point");function Ie(e,r,i){var n,f,u,l,a,m,v;if(typeof e=="object"){if(a=J(e),a===null){if(!z(e))throw new TypeError(h("invalid argument. First argument must be either a real or complex number. Value: `%s`.",e));a="complex128"}v=!0}else{if(!G(e)||H(e))throw new TypeError(h("invalid argument. First argument must be either a real or complex number. Value: `%s`.",e));a="float64"}if(typeof r=="object"){if(m=J(r),m===null){if(!z(r))throw new TypeError(h("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",r));m="complex128"}v=!0}else{if(!G(r)||H(r))throw new TypeError(h("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",r));m="float64"}if(!je(i))throw new TypeError(h("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",i));if(n={endpoint:_e.endpoint},a===m?n.dtype=a:n.dtype=De,arguments.length>3&&(u=Le(n,arguments[3]),u))throw u;if(n.dtype==="generic")return v?Se(a,e,m,r,i,n.endpoint):Fe(e,r,i,n.endpoint);if(f=Ne(n.dtype),f===null)throw new TypeError(h('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",n.dtype));if(l=new f(i),n.dtype==="complex64")return K(Pe(l,0),a,e,m,r,i,n.endpoint),l;if(n.dtype==="complex128")return K(Ce(l,0),a,e,m,r,i,n.endpoint),l;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return ke(l,e,r,i,n.endpoint)}Q.exports=Ie});var ae=g(function(fr,ie){"use strict";var Ae=require("@stdlib/complex-float32-ctor"),Ue=require("@stdlib/complex-float64-ctor"),Z=require("@stdlib/complex-real"),$=require("@stdlib/complex-imag"),ee=require("@stdlib/complex-realf"),re=require("@stdlib/complex-imagf");function Be(e,r,i,n,f,u,l){var a,m,v,t,c,o,p,s,d,b,q,y,x,w;if(u===0)return e;if(m=0,r==="float64"?(v=i,c=0):r==="complex64"?(m+=1,v=ee(i),c=re(i)):(v=Z(i),c=$(i)),n==="float64"?(t=f,o=0):n==="complex64"?(m+=1,t=ee(f),o=re(f)):(t=Z(f),o=$(f)),m===2?a=Ae:a=Ue,s=e.data,p=e.accessors[1],u===1)return l?p(s,0,new a(t,o)):p(s,0,new a(v,c)),e;for(p(s,0,new a(v,c)),l?x=u-1:x=u,q=(t-v)/x,y=(o-c)/x,w=1;w<x;w++)d=v+q*w,b=c+y*w,p(s,w,new a(d,b));return l&&p(s,x,new a(t,o)),e}ie.exports=Be});var ue=g(function(mr,ne){"use strict";function Me(e,r,i,n,f){var u,l,a,m,v;if(n===0)return e;if(u=e.data,l=e.accessors[1],n===1)return f?l(u,0,i):l(u,0,r),e;for(l(u,0,r),f?a=n-1:a=n,m=(i-r)/a,v=1;v<a;v++)l(u,v,r+m*v);return f&&l(u,a,i),e}ne.exports=Me});var pe=g(function(tr,oe){"use strict";var le=require("@stdlib/assert-is-complex-like"),ve=require("@stdlib/assert-is-number").isPrimitive,Re=require("@stdlib/assert-is-collection"),T=require("@stdlib/string-format"),fe=require("@stdlib/math-base-assert-is-nan"),me=require("@stdlib/complex-dtype"),Xe=require("@stdlib/array-dtype"),Ye=require("@stdlib/strided-base-reinterpret-complex64"),ze=require("@stdlib/strided-base-reinterpret-complex128"),te=require("@stdlib/array-base-arraylike2object"),Ge=ae(),He=ue(),ce=V(),Je=E(),Ke=N(),Qe=P();function We(e,r,i){var n,f,u,l,a,m,v;if(typeof e=="object"){if(u=me(e),u===null){if(!le(e))throw new TypeError(T("invalid argument. First argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}a=!0}else{if(!ve(e)||fe(e))throw new TypeError(T("invalid argument. First argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(typeof r=="object"){if(l=me(r),l===null){if(!le(r))throw new TypeError(T("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",r));l="complex128"}a=!0}else{if(!ve(r)||fe(r))throw new TypeError(T("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",r));l="float64"}if(!Re(i))throw new TypeError(T("invalid argument. Third argument must be an array-like object. Value: `%s`.",i));if(n={endpoint:Qe.endpoint},arguments.length>3&&(f=Ke(n,arguments[3]),f))throw f;if(m=Xe(i),m===null&&(m="generic"),m==="complex64")return ce(Ye(i,0),u,e,l,r,i.length,n.endpoint),i;if(m==="complex128")return ce(ze(i,0),u,e,l,r,i.length,n.endpoint),i;if(a){if(m==="generic")return v=te(i),Ge(v,u,e,l,r,i.length,n.endpoint),i;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=te(i),v.accessorProtocol?(He(v,e,r,i.length,n.endpoint),i):(Je(i,e,r,i.length,n.endpoint),i)}oe.exports=We});var Ze=require("@stdlib/utils-define-nonenumerable-read-only-property"),se=W(),$e=pe();Ze(se,"assign",$e);module.exports=se;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
