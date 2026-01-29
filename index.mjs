// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n,s,d,i){var o,a,f;if(r<=0)return s;if(o=i,1===r)return s[o]=n?t:e,s;for(s[o]=e,o+=d,n&&(r-=1),a=(t-e)/r,f=1;f<r;f++)s[o]=e+a*f,o+=d;return n&&(s[o]=t),s}function n(r,n,s,d,i,o){return t(r,n,s,d,i,o,e(r,o))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
