"use strict";var t=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var q=t(function(D,p){
var v=require('@stdlib/number-float64-base-to-float32/dist');function M(e,r,u,s,i,n,E){var a,l,o,f;if(e<=0)return i;if(a=E,e===1)return s?i[a]=u:i[a]=r,i;for(i[a]=r,a+=n,s&&(e-=1),l=v(e),o=v(v(u-r)/l),f=1;f<e;f++)i[a]=v(r+v(o*f)),a+=n;return s&&(i[a]=u),i}p.exports=M
});var d=t(function(F,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),b=q();function g(e,r,u,s,i,n){return b(e,r,u,s,i,n,O(e,n))}y.exports=g
});var R=t(function(G,m){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=d(),k=q();h(j,"ndarray",k);m.exports=j
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=R(),c,_=z(w(__dirname,"./native.js"));A(_)?c=B:c=_;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
