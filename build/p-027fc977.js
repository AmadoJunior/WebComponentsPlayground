const e="test";var t=Object.defineProperty;var n=(e,n)=>{for(var r in n)t(e,r,{get:n[r],enumerable:true})};var r={};var l=e=>e!=null;var s=e=>{e=typeof e;return e==="object"||e==="function"};function i(e){var t,n,r;return(r=(n=(t=e.head)==null?void 0:t.querySelector('meta[name="csp-nonce"]'))==null?void 0:n.getAttribute("content"))!=null?r:void 0}var o={};n(o,{err:()=>f,map:()=>c,ok:()=>a,unwrap:()=>u,unwrapErr:()=>v});var a=e=>({isOk:true,isErr:false,value:e});var f=e=>({isOk:false,isErr:true,value:e});function c(e,t){if(e.isOk){const n=t(e.value);if(n instanceof Promise){return n.then((e=>a(e)))}else{return a(n)}}if(e.isErr){const t=e.value;return f(t)}throw"should never get here"}var u=e=>{if(e.isOk){return e.value}else{throw e.value}};var v=e=>{if(e.isErr){return e.value}else{throw e.value}};var d=(e,t="")=>{{return()=>{}}};var h=(e,t)=>{{return()=>{}}};var p="{visibility:hidden}.hydrated{visibility:inherit}";var y="slot-fb{display:contents}slot-fb[hidden]{display:none}";var m=(e,t,...n)=>{let r=null;let l=null;let i=false;let o=false;const a=[];const f=t=>{for(let n=0;n<t.length;n++){r=t[n];if(Array.isArray(r)){f(r)}else if(r!=null&&typeof r!=="boolean"){if(i=typeof e!=="function"&&!s(r)){r=String(r)}if(i&&o){a[a.length-1].t+=r}else{a.push(i?$(null,r):r)}o=i}}};f(n);if(t){if(t.key){l=t.key}}const c=$(e,null);c.l=t;if(a.length>0){c.i=a}{c.o=l}return c};var $=(e,t)=>{const n={u:0,v:e,t,h:null,i:null};{n.l=null}{n.o=null}return n};var b={};var w=e=>e&&e.v===b;var S=(e,t)=>{if(e!=null&&!s(e)){if(t&1){return String(e)}return e}return e};var g=(e,t,n)=>{const r=ye.ce(t,n);e.dispatchEvent(r);return r};var j=new WeakMap;var k=(e,t,n)=>{let r=de.get(e);if($e&&n){r=r||new CSSStyleSheet;if(typeof r==="string"){r=t}else{r.replaceSync(t)}}else{r=t}de.set(e,r)};var O=(e,t,n)=>{var r;const l=C(t);const s=de.get(l);e=e.nodeType===11?e:pe;if(s){if(typeof s==="string"){e=e.head||e;let n=j.get(e);let o;if(!n){j.set(e,n=new Set)}if(!n.has(l)){{o=pe.createElement("style");o.innerHTML=s;const t=(r=ye.p)!=null?r:i(pe);if(t!=null){o.setAttribute("nonce",t)}e.insertBefore(o,e.querySelector("link"))}if(t.u&4){o.innerHTML+=y}if(n){n.add(l)}}}else if(!e.adoptedStyleSheets.includes(s)){e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]}}return l};var M=e=>{const t=e.m;const n=e.$hostElement$;const r=t.u;const l=d("attachStyles",t.$);const s=O(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);if(r&10){n["s-sc"]=s;n.classList.add(s+"-h")}l()};var C=(e,t)=>"sc-"+e.$;var E=(e,t,n,r,l,s)=>{if(n!==r){t.toLowerCase()}};var P=(e,t,n)=>{const l=t.h.nodeType===11&&t.h.host?t.h.host:t.h;const s=e&&e.l||r;const i=t.l||r;{for(const e of U(Object.keys(s))){if(!(e in i)){E(l,e,s[e],void 0)}}}for(const e of U(Object.keys(i))){E(l,e,s[e],i[e])}};function U(e){return e.includes("ref")?[...e.filter((e=>e!=="ref")),"ref"]:e}var x;var A;var N=(e,t,n,r)=>{const s=t.i[n];let i=0;let o;let a;if(s.t!==null){o=s.h=pe.createTextNode(s.t)}else{o=s.h=pe.createElement(s.v);{P(null,s)}if(l(x)&&o["s-si"]!==x){o.classList.add(o["s-si"]=x)}if(s.i){for(i=0;i<s.i.length;++i){a=N(e,s,i);if(a){o.appendChild(a)}}}}o["s-hn"]=A;return o};var T=(e,t,n,r,l,s)=>{let i=e;let o;if(i.shadowRoot&&i.tagName===A){i=i.shadowRoot}for(;l<=s;++l){if(r[l]){o=N(null,n,l);if(o){r[l].h=o;i.insertBefore(o,t)}}}};var L=(e,t,n)=>{for(let r=t;r<=n;++r){const t=e[r];if(t){const e=t.h;if(e){e.remove()}}}};var R=(e,t,n,r,l=false)=>{let s=0;let i=0;let o=0;let a=0;let f=t.length-1;let c=t[0];let u=t[f];let v=r.length-1;let d=r[0];let h=r[v];let p;let y;while(s<=f&&i<=v){if(c==null){c=t[++s]}else if(u==null){u=t[--f]}else if(d==null){d=r[++i]}else if(h==null){h=r[--v]}else if(W(c,d,l)){q(c,d,l);c=t[++s];d=r[++i]}else if(W(u,h,l)){q(u,h,l);u=t[--f];h=r[--v]}else if(W(c,h,l)){q(c,h,l);e.insertBefore(c.h,u.h.nextSibling);c=t[++s];h=r[--v]}else if(W(u,d,l)){q(u,d,l);e.insertBefore(u.h,c.h);u=t[--f];d=r[++i]}else{o=-1;{for(a=s;a<=f;++a){if(t[a]&&t[a].o!==null&&t[a].o===d.o){o=a;break}}}if(o>=0){y=t[o];if(y.v!==d.v){p=N(t&&t[i],n,o)}else{q(y,d,l);t[o]=void 0;p=y.h}d=r[++i]}else{p=N(t&&t[i],n,i);d=r[++i]}if(p){{c.h.parentNode.insertBefore(p,c.h)}}}}if(s>f){T(e,r[v+1]==null?null:r[v+1].h,n,r,i,v)}else if(i>v){L(t,s,f)}};var W=(e,t,n=false)=>{if(e.v===t.v){if(!n){return e.o===t.o}return true}return false};var q=(e,t,n=false)=>{const r=t.h=e.h;const l=e.i;const s=t.i;const i=t.t;if(i===null){{{P(e,t)}}if(l!==null&&s!==null){R(r,l,t,s,n)}else if(s!==null){if(e.t!==null){r.textContent=""}T(r,null,t,s,0,s.length-1)}else if(l!==null){L(l,0,l.length-1)}}else if(e.t!==i){r.data=i}};var F=(e,t,n=false)=>{const r=e.$hostElement$;const l=e.S||$(null,null);const s=w(t)?t:m(null,null,t);A=r.tagName;if(n&&s.l){for(const e of Object.keys(s.l)){if(r.hasAttribute(e)&&!["key","ref","style","class"].includes(e)){s.l[e]=r[e]}}}s.v=null;s.u|=4;e.S=s;s.h=l.h=r.shadowRoot||r;{x=r["s-sc"]}q(l,s,n)};var H=(e,t)=>{if(t&&!e.j&&t["s-p"]){t["s-p"].push(new Promise((t=>e.j=t)))}};var I=(e,t)=>{{e.u|=16}if(e.u&4){e.u|=512;return}H(e,e.k);const n=()=>V(e,t);return Me(n)};var V=(e,t)=>{const n=d("scheduleUpdate",e.m.$);const r=e.O;let l;n();return _(l,(()=>B(e,r,t)))};var _=(e,t)=>z(e)?e.then(t):t();var z=e=>e instanceof Promise||e&&e.then&&typeof e.then==="function";var B=async(e,t,n)=>{var r;const l=e.$hostElement$;const s=d("update",e.m.$);const i=l["s-rc"];if(n){M(e)}const o=d("render",e.m.$);{D(e,t,l,n)}if(i){i.map((e=>e()));l["s-rc"]=void 0}o();s();{const t=(r=l["s-p"])!=null?r:[];const n=()=>G(e);if(t.length===0){n()}else{Promise.all(t).then(n);e.u|=4;t.length=0}}};var D=(e,t,n,r)=>{try{t=t.render();{e.u&=~16}{e.u|=2}{{{F(e,t,r)}}}}catch(t){ce(t,e.$hostElement$)}return null};var G=e=>{const t=e.m.$;const n=e.$hostElement$;const r=d("postUpdate",t);const l=e.k;if(!(e.u&64)){e.u|=64;{K(n)}r();{e.M(n);if(!l){J()}}}else{r()}{if(e.j){e.j();e.j=void 0}if(e.u&512){Oe((()=>I(e,false)))}e.u&=~(4|512)}};var J=t=>{{K(pe.documentElement)}Oe((()=>g(he,"appload",{detail:{namespace:e}})))};var K=e=>e.classList.add("hydrated");var Q=(e,t)=>oe(e).C.get(t);var X=(e,t,n,r)=>{const l=oe(e);const s=l.C.get(t);const i=l.u;const o=l.O;n=S(n,r.P[t][0]);const a=Number.isNaN(s)&&Number.isNaN(n);const f=n!==s&&!a;if((!(i&8)||s===void 0)&&f){l.C.set(t,n);if(o){if((i&(2|16))===2){I(l,false)}}}};var Y=(e,t,n)=>{var r;const l=e.prototype;if(t.P){const s=Object.entries(t.P);s.map((([e,[r]])=>{if(r&31||n&2&&r&32){Object.defineProperty(l,e,{get(){return Q(this,e)},set(n){X(this,e,n,t)},configurable:true,enumerable:true})}}));if(n&1){const n=new Map;l.attributeChangedCallback=function(e,r,s){ye.jmp((()=>{var i;const o=n.get(e);if(this.hasOwnProperty(o)){s=this[o];delete this[o]}else if(l.hasOwnProperty(o)&&typeof this[o]==="number"&&this[o]==s){return}else if(o==null){const n=oe(this);const l=n==null?void 0:n.u;if(l&&!(l&8)&&l&128&&s!==r){const l=n.O;const o=(i=t.U)==null?void 0:i[e];o==null?void 0:o.forEach((t=>{if(l[t]!=null){l[t].call(l,s,r,e)}}))}return}this[o]=s===null&&typeof this[o]==="boolean"?false:s}))};e.observedAttributes=Array.from(new Set([...Object.keys((r=t.U)!=null?r:{}),...s.filter((([e,t])=>t[0]&15)).map((([e,t])=>{const r=t[1]||e;n.set(r,e);return r}))]))}}return e};var Z=async(e,t,n,r)=>{let l;if((t.u&32)===0){t.u|=32;const r=n.A;if(r){l=ve(n);if(l.then){const e=h();l=await l;e()}if(!l.isProxied){Y(l,n,2);l.isProxied=true}const e=d("createInstance",n.$);{t.u|=8}try{new l(t)}catch(e){ce(e)}{t.u&=~8}e()}else{l=e.constructor;customElements.whenDefined(n.$).then((()=>t.u|=128))}if(l.style){let e=l.style;const t=C(n);if(!de.has(t)){const r=d("registerStyles",n.$);k(t,e,!!(n.u&1));r()}}}const s=t.k;const i=()=>I(t,true);if(s&&s["s-rc"]){s["s-rc"].push(i)}else{i()}};var ee=e=>{};var te=e=>{if((ye.u&1)===0){const t=oe(e);const n=t.m;const r=d("connectedCallback",n.$);if(!(t.u&1)){t.u|=1;{let n=e;while(n=n.parentNode||n.host){if(n["s-p"]){H(t,t.k=n);break}}}if(n.P){Object.entries(n.P).map((([t,[n]])=>{if(n&31&&e.hasOwnProperty(t)){const n=e[t];delete e[t];e[t]=n}}))}{Z(e,t,n)}}else{if(t==null?void 0:t.O);else if(t==null?void 0:t.N){t.N.then((()=>ee()))}}r()}};var ne=e=>{};var re=async e=>{if((ye.u&1)===0){const t=oe(e);if(t==null?void 0:t.O);else if(t==null?void 0:t.N){t.N.then((()=>ne()))}}};var le=(e,t={})=>{var n;const r=d();const l=[];const s=t.exclude||[];const o=he.customElements;const a=pe.head;const f=a.querySelector("meta[charset]");const c=pe.createElement("style");const u=[];let v;let h=true;Object.assign(ye,t);ye.T=new URL(t.resourcesUrl||"./",pe.baseURI).href;let m=false;e.map((e=>{e[1].map((t=>{const n={u:t[0],$:t[1],P:t[2],L:t[3]};if(n.u&4){m=true}{n.P=t[2]}const r=n.$;const i=class extends HTMLElement{constructor(e){super(e);e=this;fe(e,n);if(n.u&1){{{e.attachShadow({mode:"open"})}}}}connectedCallback(){if(v){clearTimeout(v);v=null}if(h){u.push(this)}else{ye.jmp((()=>te(this)))}}disconnectedCallback(){ye.jmp((()=>re(this)))}componentOnReady(){return oe(this).N}};n.A=e[0];if(!s.includes(r)&&!o.get(r)){l.push(r);o.define(r,Y(i,n,1))}}))}));if(l.length>0){if(m){c.textContent+=y}{c.textContent+=l+p}if(c.innerHTML.length){c.setAttribute("data-styles","");const e=(n=ye.p)!=null?n:i(pe);if(e!=null){c.setAttribute("nonce",e)}a.insertBefore(c,f?f.nextSibling:a.firstChild)}}h=false;if(u.length){u.map((e=>e.connectedCallback()))}else{{ye.jmp((()=>v=setTimeout(J,30)))}}r()};var se=e=>ye.p=e;var ie=new WeakMap;var oe=e=>ie.get(e);var ae=(e,t)=>ie.set(t.O=e,t);var fe=(e,t)=>{const n={u:0,$hostElement$:e,m:t,C:new Map};{n.N=new Promise((e=>n.M=e));e["s-p"]=[];e["s-rc"]=[]}return ie.set(e,n)};var ce=(e,t)=>(0,console.error)(e,t);var ue=new Map;var ve=(e,t,n)=>{const r=e.$.replace(/-/g,"_");const l=e.A;const s=ue.get(l);if(s){return s[r]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return import(`./${l}.entry.js${""}`).then((e=>{{ue.set(l,e)}return e[r]}),ce)};var de=new Map;var he=typeof window!=="undefined"?window:{};var pe=he.document||{head:{}};var ye={u:0,T:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,r)=>e.addEventListener(t,n,r),rel:(e,t,n,r)=>e.removeEventListener(t,n,r),ce:(e,t)=>new CustomEvent(e,t)};var me=e=>Promise.resolve(e);var $e=(()=>{try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false})();var be=false;var we=[];var Se=[];var ge=(e,t)=>n=>{e.push(n);if(!be){be=true;if(t&&ye.u&4){Oe(ke)}else{ye.raf(ke)}}};var je=e=>{for(let t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){ce(e)}}e.length=0};var ke=()=>{je(we);{je(Se);if(be=we.length>0){ye.raf(ke)}}};var Oe=e=>me().then(e);var Me=ge(Se,true);export{le as b,m as h,me as p,ae as r,se as s};
//# sourceMappingURL=p-027fc977.js.map