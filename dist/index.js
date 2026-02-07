"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=t(function(C,l){
function _(e,r,s,u,i,n,R){var a,q,v;if(e<=0)return i;if(a=R,e===1)return u?i[a]=s:i[a]=r,i;for(i[a]=r,a+=n,u&&(e-=1),q=(s-r)/e,v=1;v<e;v++)i[a]=r+q*v,a+=n;return u&&(i[a]=s),i}l.exports=_
});var p=t(function(D,o){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=f();function b(e,r,s,u,i,n){return O(e,r,s,u,i,n,E(e,n))}o.exports=b
});var j=t(function(F,d){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),h=f();g(y,"ndarray",h);d.exports=y
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=j(),c,m=w(k(__dirname,"./native.js"));z(m)?c=A:c=m;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
