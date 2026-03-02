import{b as ua,a as S,d as ca,c as F,f as le}from"../chunks/DWJ3NdWv.js";import{o as da}from"../chunks/0pz69QBQ.js";import{a as rt,C as Lt,aP as Pt,h as O,J as ze,a3 as Dt,D as lt,l as o,F as fa,G as va,I as kt,K as Ne,e as Ee,aA as pa,aH as ga,aq as yt,c as Me,aQ as de,b as Je,aR as ha,s as _a,Y as ba,aS as Bt,aG as xt,aT as $a,aU as ma,aL as xa,M as Et,aV as wa,r as Ut,p as Vt,aW as ft,ad as Gt,aX as ka,aY as ya,aE as Ea,d as nt,aB as Na,aZ as Ta,E as Aa,a2 as Sa,a_ as Ma,L as Ia,ay as Ft,a$ as Ht,aJ as jt,b0 as za,b1 as Ca,b2 as Oa,b3 as Ra,b4 as ot,b5 as La,b6 as Pa,b7 as Da,b8 as Ba,b9 as Ua,ba as Va,bb as Ga,bc as Fa,aM as Ha,i as _t,ab as ja,bd as Ya,v as Yt,y as Xt,n as Ge,z as h,B as x,A as g,w as H,aO as bt,be as Xa,aN as ae,Q as tt,x as Te,R as A,ar as Nt}from"../chunks/CXppdvkx.js";import{i as Wa,a as Ja,d as Q,b as Wt,c as Ka,n as qa,e as Qa,s as Ae,f as ce,r as Za}from"../chunks/LPgFSd4K.js";import{l as B,p as Se,s as X,i as _e}from"../chunks/D2uxtCFl.js";import{i as er}from"../chunks/ZcDgc31X.js";import{B as tr}from"../chunks/D3dHuVIH.js";function Jt(e,t){return t}function ar(e,t,a){for(var r=[],s=t.length,n,l=t.length,i=0;i<s;i++){let _=t[i];Vt(_,()=>{if(n){if(n.pending.delete(_),n.done.add(_),n.pending.size===0){var d=e.outrogroups;$t(xt(n.done)),d.delete(n),d.size===0&&(e.outrogroups=null)}}else l-=1},!1)}if(l===0){var f=r.length===0&&a!==null;if(f){var p=a,u=p.parentNode;Ea(u),u.append(p),e.items.clear()}$t(t,!f)}else n={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(n)}function $t(e,t=!0){for(var a=0;a<e.length;a++)nt(e[a],t)}var Tt;function st(e,t,a,r,s,n=null){var l=e,i=new Map,f=(t&Pt)!==0;if(f){var p=e;l=O?ze(Dt(p)):p.appendChild(rt())}O&&lt();var u=null,_=ba(()=>{var v=a();return Bt(v)?v:v==null?[]:xt(v)}),d,y=!0;function w(){c.fallback=u,rr(c,d,l,t,r),u!==null&&(d.length===0?(u.f&de)===0?Ut(u):(u.f^=de,Xe(u,null,l)):Vt(u,()=>{u=null}))}var I=Lt(()=>{d=o(_);var v=d.length;let Z=!1;if(O){var K=fa(l)===va;K!==(v===0)&&(l=kt(),ze(l),Ne(!1),Z=!0)}for(var E=new Set,J=Me,m=_a(),$=0;$<v;$+=1){O&&Ee.nodeType===pa&&Ee.data===ga&&(l=Ee,Z=!0,Ne(!1));var z=d[$],U=r(z,$),N=y?null:i.get(U);N?(N.v&&yt(N.v,z),N.i&&yt(N.i,$),m&&J.unskip_effect(N.e)):(N=sr(i,y?l:Tt??(Tt=rt()),z,U,$,s,t,a),y||(N.e.f|=de),i.set(U,N)),E.add(U)}if(v===0&&n&&!u&&(y?u=Je(()=>n(l)):(u=Je(()=>n(Tt??(Tt=rt()))),u.f|=de)),v>E.size&&ha(),O&&v>0&&ze(kt()),!y)if(m){for(const[re,ne]of i)E.has(re)||J.skip_effect(ne.e);J.oncommit(w),J.ondiscard(()=>{})}else w();Z&&Ne(!0),o(_)}),c={effect:I,items:i,outrogroups:null,fallback:u};y=!1,O&&(l=Ee)}function Fe(e){for(;e!==null&&(e.f&ka)===0;)e=e.next;return e}function rr(e,t,a,r,s){var N,re,ne,Oe,Ke,Re,Le,Pe,De;var n=(r&ya)!==0,l=t.length,i=e.items,f=Fe(e.effect.first),p,u=null,_,d=[],y=[],w,I,c,v;if(n)for(v=0;v<l;v+=1)w=t[v],I=s(w,v),c=i.get(I).e,(c.f&de)===0&&((re=(N=c.nodes)==null?void 0:N.a)==null||re.measure(),(_??(_=new Set)).add(c));for(v=0;v<l;v+=1){if(w=t[v],I=s(w,v),c=i.get(I).e,e.outrogroups!==null)for(const q of e.outrogroups)q.pending.delete(c),q.done.delete(c);if((c.f&de)!==0)if(c.f^=de,c===f)Xe(c,null,a);else{var Z=u?u.next:f;c===e.effect.last&&(e.effect.last=c.prev),c.prev&&(c.prev.next=c.next),c.next&&(c.next.prev=c.prev),be(e,u,c),be(e,c,Z),Xe(c,Z,a),u=c,d=[],y=[],f=Fe(u.next);continue}if((c.f&ft)!==0&&(Ut(c),n&&((Oe=(ne=c.nodes)==null?void 0:ne.a)==null||Oe.unfix(),(_??(_=new Set)).delete(c))),c!==f){if(p!==void 0&&p.has(c)){if(d.length<y.length){var K=y[0],E;u=K.prev;var J=d[0],m=d[d.length-1];for(E=0;E<d.length;E+=1)Xe(d[E],K,a);for(E=0;E<y.length;E+=1)p.delete(y[E]);be(e,J.prev,m.next),be(e,u,J),be(e,m,K),f=K,u=m,v-=1,d=[],y=[]}else p.delete(c),Xe(c,f,a),be(e,c.prev,c.next),be(e,c,u===null?e.effect.first:u.next),be(e,u,c),u=c;continue}for(d=[],y=[];f!==null&&f!==c;)(p??(p=new Set)).add(f),y.push(f),f=Fe(f.next);if(f===null)continue}(c.f&de)===0&&d.push(c),u=c,f=Fe(c.next)}if(e.outrogroups!==null){for(const q of e.outrogroups)q.pending.size===0&&($t(xt(q.done)),(Ke=e.outrogroups)==null||Ke.delete(q));e.outrogroups.size===0&&(e.outrogroups=null)}if(f!==null||p!==void 0){var $=[];if(p!==void 0)for(c of p)(c.f&ft)===0&&$.push(c);for(;f!==null;)(f.f&ft)===0&&f!==e.fallback&&$.push(f),f=Fe(f.next);var z=$.length;if(z>0){var U=(r&Pt)!==0&&l===0?a:null;if(n){for(v=0;v<z;v+=1)(Le=(Re=$[v].nodes)==null?void 0:Re.a)==null||Le.measure();for(v=0;v<z;v+=1)(De=(Pe=$[v].nodes)==null?void 0:Pe.a)==null||De.fix()}ar(e,$,U)}}n&&Gt(()=>{var q,Be;if(_!==void 0)for(c of _)(Be=(q=c.nodes)==null?void 0:q.a)==null||Be.apply()})}function sr(e,t,a,r,s,n,l,i){var f=(l&$a)!==0?(l&ma)===0?xa(a,!1,!1):Et(a):null,p=(l&wa)!==0?Et(s):null;return{v:f,i:p,e:Je(()=>(n(t,f??a,p??s,i),()=>{e.delete(r)}))}}function Xe(e,t,a){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,n=t&&(t.f&de)===0?t.nodes.start:a;r!==null;){var l=Na(r);if(n.before(r),r===s)return;r=l}}function be(e,t,a){t===null?e.effect.first=a:t.next=a,a===null?e.effect.last=t:a.prev=t}function j(e,t,a,r,s){var i;O&&lt();var n=(i=t.$$slots)==null?void 0:i[a],l=!1;n===!0&&(n=t.children,l=!0),n===void 0||n(e,l?()=>r:r)}function lr(e,t,a,r,s,n){let l=O;O&&lt();var i=null;O&&Ee.nodeType===Ta&&(i=Ee,lt());var f=O?Ee:e,p=new tr(f,!1);Lt(()=>{const u=t()||null;var _=Ma;if(u===null){p.ensure(null,null);return}return p.ensure(u,d=>{if(u){if(i=O?i:Sa(u,_),ua(i,i),r){O&&Wa(u)&&i.append(document.createComment(""));var y=O?Dt(i):i.appendChild(rt());O&&(y===null?Ne(!1):ze(y)),r(i,y)}Ia.nodes.end=i,d.before(i)}O&&ze(d)}),()=>{}},Aa),Ft(()=>{}),l&&(Ne(!0),ze(f))}function nr(e,t){var a=void 0,r;Ht(()=>{a!==(a=t())&&(r&&(nt(r),r=null),a&&(r=Je(()=>{jt(()=>a(e))})))})}function Kt(e){var t,a,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(a=Kt(e[t]))&&(r&&(r+=" "),r+=a)}else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function ir(){for(var e,t,a=0,r="",s=arguments.length;a<s;a++)(e=arguments[a])&&(t=Kt(e))&&(r&&(r+=" "),r+=t);return r}function or(e){return typeof e=="object"?ir(e):e??""}const At=[...` 	
\r\f \v\uFEFF`];function ur(e,t,a){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),a){for(var s of Object.keys(a))if(a[s])r=r?r+" "+s:s;else if(r.length)for(var n=s.length,l=0;(l=r.indexOf(s,l))>=0;){var i=l+n;(l===0||At.includes(r[l-1]))&&(i===r.length||At.includes(r[i]))?r=(l===0?"":r.substring(0,l))+r.substring(i+1):l=i}}return r===""?null:r}function St(e,t=!1){var a=t?" !important;":";",r="";for(var s of Object.keys(e)){var n=e[s];n!=null&&n!==""&&(r+=" "+s+": "+n+a)}return r}function vt(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function cr(e,t){if(t){var a="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,l=0,i=!1,f=[];r&&f.push(...Object.keys(r).map(vt)),s&&f.push(...Object.keys(s).map(vt));var p=0,u=-1;const I=e.length;for(var _=0;_<I;_++){var d=e[_];if(i?d==="/"&&e[_-1]==="*"&&(i=!1):n?n===d&&(n=!1):d==="/"&&e[_+1]==="*"?i=!0:d==='"'||d==="'"?n=d:d==="("?l++:d===")"&&l--,!i&&n===!1&&l===0){if(d===":"&&u===-1)u=_;else if(d===";"||_===I-1){if(u!==-1){var y=vt(e.substring(p,u).trim());if(!f.includes(y)){d!==";"&&_++;var w=e.substring(p,_).trim();a+=" "+w+";"}}p=_+1,u=-1}}}}return r&&(a+=St(r)),s&&(a+=St(s,!0)),a=a.trim(),a===""?null:a}return e==null?null:String(e)}function We(e,t,a,r,s,n){var l=e.__className;if(O||l!==a||l===void 0){var i=ur(a,r,n);(!O||i!==e.getAttribute("class"))&&(i==null?e.removeAttribute("class"):t?e.className=i:e.setAttribute("class",i)),e.__className=a}else if(n&&s!==n)for(var f in n){var p=!!n[f];(s==null||p!==!!s[f])&&e.classList.toggle(f,p)}return n}function pt(e,t={},a,r){for(var s in a){var n=a[s];t[s]!==n&&(a[s]==null?e.style.removeProperty(s):e.style.setProperty(s,n,r))}}function dr(e,t,a,r){var s=e.__style;if(O||s!==t){var n=cr(t,r);(!O||n!==e.getAttribute("style"))&&(n==null?e.removeAttribute("style"):e.style.cssText=n),e.__style=t}else r&&(Array.isArray(r)?(pt(e,a==null?void 0:a[0],r[0]),pt(e,a==null?void 0:a[1],r[1],"important")):pt(e,a,r));return r}function mt(e,t,a=!1){if(e.multiple){if(t==null)return;if(!Bt(t))return za();for(var r of e.options)r.selected=t.includes(Mt(r));return}for(r of e.options){var s=Mt(r);if(Ca(s,t)){r.selected=!0;return}}(!a||t!==void 0)&&(e.selectedIndex=-1)}function fr(e){var t=new MutationObserver(()=>{mt(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ft(()=>{t.disconnect()})}function Mt(e){return"__value"in e?e.__value:e.value}const He=Symbol("class"),je=Symbol("style"),qt=Symbol("is custom element"),Qt=Symbol("is html"),vr=ot?"link":"LINK",pr=ot?"input":"INPUT",gr=ot?"option":"OPTION",hr=ot?"select":"SELECT";function Ie(e){if(O){var t=!1,a=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;Ce(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var s=e.checked;Ce(e,"checked",null),e.checked=s}}};e.__on_r=a,Gt(a),Da()}}function _r(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ce(e,t,a,r){var s=Zt(e);O&&(s[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===vr)||s[t]!==(s[t]=a)&&(t==="loading"&&(e[Va]=a),a==null?e.removeAttribute(t):typeof a!="string"&&ea(e).includes(t)?e[t]=a:e.setAttribute(t,a))}function br(e,t,a,r,s=!1,n=!1){if(O&&s&&e.nodeName===pr){var l=e,i=l.type==="checkbox"?"defaultChecked":"defaultValue";i in a||Ie(l)}var f=Zt(e),p=f[qt],u=!f[Qt];let _=O&&p;_&&Ne(!1);var d=t||{},y=e.nodeName===gr;for(var w in t)w in a||(a[w]=null);a.class?a.class=or(a.class):a[He]&&(a.class=null),a[je]&&(a.style??(a.style=null));var I=ea(e);for(const m in a){let $=a[m];if(y&&m==="value"&&$==null){e.value=e.__value="",d[m]=$;continue}if(m==="class"){var c=e.namespaceURI==="http://www.w3.org/1999/xhtml";We(e,c,$,r,t==null?void 0:t[He],a[He]),d[m]=$,d[He]=a[He];continue}if(m==="style"){dr(e,$,t==null?void 0:t[je],a[je]),d[m]=$,d[je]=a[je];continue}var v=d[m];if(!($===v&&!($===void 0&&e.hasAttribute(m)))){d[m]=$;var Z=m[0]+m[1];if(Z!=="$$")if(Z==="on"){const z={},U="$$"+m;let N=m.slice(2);var K=Qa(N);if(Ja(N)&&(N=N.slice(0,-7),z.capture=!0),!K&&v){if($!=null)continue;e.removeEventListener(N,d[U],z),d[U]=null}if(K)Q(N,e,$),Wt([N]);else if($!=null){let re=function(ne){d[m].call(this,ne)};d[U]=Ka(N,e,re,z)}}else if(m==="style")Ce(e,m,$);else if(m==="autofocus")La(e,!!$);else if(!p&&(m==="__value"||m==="value"&&$!=null))e.value=e.__value=$;else if(m==="selected"&&y)_r(e,$);else{var E=m;u||(E=qa(E));var J=E==="defaultValue"||E==="defaultChecked";if($==null&&!p&&!J)if(f[m]=null,E==="value"||E==="checked"){let z=e;const U=t===void 0;if(E==="value"){let N=z.defaultValue;z.removeAttribute(E),z.defaultValue=N,z.value=z.__value=U?N:null}else{let N=z.defaultChecked;z.removeAttribute(E),z.defaultChecked=N,z.checked=U?N:!1}}else e.removeAttribute(m);else J||I.includes(E)&&(p||typeof $!="string")?(e[E]=$,E in f&&(f[E]=Pa)):typeof $!="function"&&Ce(e,E,$)}}}return _&&Ne(!0),d}function It(e,t,a=[],r=[],s=[],n,l=!1,i=!1){Oa(s,a,r,f=>{var p=void 0,u={},_=e.nodeName===hr,d=!1;if(Ht(()=>{var w=t(...f.map(o)),I=br(e,p,w,n,l,i);d&&_&&"value"in w&&mt(e,w.value);for(let v of Object.getOwnPropertySymbols(u))w[v]||nt(u[v]);for(let v of Object.getOwnPropertySymbols(w)){var c=w[v];v.description===Ra&&(!p||c!==p[v])&&(u[v]&&nt(u[v]),u[v]=Je(()=>nr(e,()=>c))),I[v]=c}p=I}),_){var y=e;jt(()=>{mt(y,p.value,!0),fr(y)})}d=!0})}function Zt(e){return e.__attributes??(e.__attributes={[qt]:e.nodeName.includes("-"),[Qt]:e.namespaceURI===Ba})}var zt=new Map;function ea(e){var t=e.getAttribute("is")||e.nodeName,a=zt.get(t);if(a)return a;zt.set(t,a=[]);for(var r,s=e,n=Element.prototype;n!==s;){r=Ga(s);for(var l in r)r[l].set&&a.push(l);s=Ua(s)}return a}function Ye(e,t,a=t){var r=new WeakSet;Fa(e,"input",async s=>{var n=s?e.defaultValue:e.value;if(n=gt(e)?ht(n):n,a(n),Me!==null&&r.add(Me),await Ha(),n!==(n=t())){var l=e.selectionStart,i=e.selectionEnd,f=e.value.length;if(e.value=n??"",i!==null){var p=e.value.length;l===i&&i===f&&p>f?(e.selectionStart=p,e.selectionEnd=p):(e.selectionStart=l,e.selectionEnd=Math.min(i,p))}}}),(O&&e.defaultValue!==e.value||_t(t)==null&&e.value)&&(a(gt(e)?ht(e.value):e.value),Me!==null&&r.add(Me)),ja(()=>{var s=t();if(e===document.activeElement){var n=Ya??Me;if(r.has(n))return}gt(e)&&s===ht(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function gt(e){var t=e.type;return t==="number"||t==="range"}function ht(e){return e===""?null:+e}/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const $r={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var mr=ca("<svg><!><!></svg>");function W(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]),r=B(a,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Yt(t,!1);let s=Se(t,"name",8,void 0),n=Se(t,"color",8,"currentColor"),l=Se(t,"size",8,24),i=Se(t,"strokeWidth",8,2),f=Se(t,"absoluteStrokeWidth",8,!1),p=Se(t,"iconNode",24,()=>[]);const u=(...w)=>w.filter((I,c,v)=>!!I&&v.indexOf(I)===c).join(" ");er();var _=mr();It(_,(w,I)=>({...$r,...r,width:l(),height:l(),stroke:n(),"stroke-width":w,class:I}),[()=>(Ge(f()),Ge(i()),Ge(l()),_t(()=>f()?Number(i())*24/Number(l()):i())),()=>(Ge(s()),Ge(a),_t(()=>u("lucide-icon","lucide",s()?`lucide-${s()}`:"",a.class)))]);var d=h(_);st(d,1,p,Jt,(w,I)=>{var c=bt(()=>Xa(o(I),2));let v=()=>o(c)[0],Z=()=>o(c)[1];var K=F(),E=H(K);lr(E,v,!0,(J,m)=>{It(J,()=>({...Z()}))}),S(w,K)});var y=x(d);j(y,t,"default",{}),g(_),S(e,_),Xt()}function xr(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]];W(e,X({name:"arrow-down-wide-narrow"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function wr(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]];W(e,X({name:"arrow-up-narrow-wide"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Ct(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]];W(e,X({name:"bookmark"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function kr(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];W(e,X({name:"database"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function yr(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]];W(e,X({name:"download"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Er(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];W(e,X({name:"external-link"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Nr(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]];W(e,X({name:"file-spreadsheet"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Tr(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];W(e,X({name:"globe"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Ar(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]];W(e,X({name:"grip-vertical"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Sr(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];W(e,X({name:"layers"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Ot(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];W(e,X({name:"plus"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Mr(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]];W(e,X({name:"search"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Ir(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]];W(e,X({name:"settings"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Rt(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]];W(e,X({name:"trash-2"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function zr(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]];W(e,X({name:"upload"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}function Cr(e,t){const a=B(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.475.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];W(e,X({name:"x"},()=>a,{get iconNode(){return r},children:(s,n)=>{var l=F(),i=H(l);j(i,t,"default",{}),S(s,l)},$$slots:{default:!0}}))}async function at(e,t={},a){return window.__TAURI_INTERNALS__.invoke(e,t,a)}class it{constructor(t){this.path=t}static async load(t){const a=await at("plugin:sql|load",{db:t});return new it(a)}static get(t){return new it(t)}async execute(t,a){const[r,s]=await at("plugin:sql|execute",{db:this.path,query:t,values:a??[]});return{lastInsertId:s,rowsAffected:r}}async select(t,a){return await at("plugin:sql|select",{db:this.path,query:t,values:a??[]})}async close(t){return await at("plugin:sql|close",{db:t})}}var Or=le('<span class="text-blue-500 svelte-1uha8ag"><!></span>'),Rr=le('<div class="bg-slate-50 p-1 flex gap-1 border-b border-slate-100 svelte-1uha8ag"><input placeholder="Add URL..." class="flex-1 text-[10px] outline-none px-2 bg-transparent svelte-1uha8ag"/> <button class="bg-blue-600 text-white p-1 rounded-md svelte-1uha8ag"><!></button></div>'),Lr=le('<input class="text-[10px] font-bold bg-blue-50/30 border-none outline-none w-full px-1 rounded svelte-1uha8ag"/>'),Pr=le('<span class="text-[10px] font-bold text-slate-700 truncate svelte-1uha8ag"> </span>'),Dr=le('<button class="text-slate-300 hover:text-red-500 svelte-1uha8ag"><!></button>'),Br=le('<div draggable="true"><div class="flex items-center justify-between svelte-1uha8ag"><div class="flex items-center gap-2 min-w-0 flex-1 svelte-1uha8ag"><!> <div class="w-3.5 h-3.5 flex items-center justify-center shrink-0 svelte-1uha8ag"><img alt="" class="w-3.5 h-3.5 rounded-sm svelte-1uha8ag"/> <div class="hidden text-slate-400 svelte-1uha8ag"><!></div></div> <!></div> <!></div></div>'),Ur=le('<div class="flex-1 min-w-[300px] flex flex-col svelte-1uha8ag"><div><button class="flex items-center gap-2 flex-1 text-left svelte-1uha8ag"><!> <h2 class="text-[13px] font-black text-slate-600 uppercase tracking-[0.1em] svelte-1uha8ag"> </h2> <!></button></div> <div class="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden ring-1 ring-slate-200/50 svelte-1uha8ag"><!> <div class="divide-y divide-slate-50 flex flex-col h-auto svelte-1uha8ag"></div></div></div>'),Vr=le('<div class="flex items-center justify-between p-2.5 bg-slate-50 rounded-lg border border-slate-100 group/gitem svelte-1uha8ag"><span class="text-[10px] font-bold svelte-1uha8ag"> </span> <div class="flex gap-2 opacity-0 group-hover/gitem:opacity-100 transition-opacity svelte-1uha8ag"><button class="text-slate-300 hover:text-red-500 svelte-1uha8ag"><!></button></div></div>'),Gr=le('<div class="fixed inset-0 z-50 flex justify-end svelte-1uha8ag"><button class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm svelte-1uha8ag"></button> <div class="relative w-85 bg-white h-full shadow-2xl p-6 flex flex-col gap-6 overflow-y-auto svelte-1uha8ag"><div class="flex justify-between items-center border-b pb-4 svelte-1uha8ag"><h3 class="font-black text-[11px] uppercase tracking-[0.2em] text-slate-400 svelte-1uha8ag">Master Config</h3> <button class="hover:rotate-90 transition-transform svelte-1uha8ag"><!></button></div> <button> </button> <div class="space-y-6 svelte-1uha8ag"><div class="space-y-2 svelte-1uha8ag"><label class="text-[9px] font-black text-slate-400 uppercase tracking-widest svelte-1uha8ag">App Branding</label> <input class="w-full border p-2.5 rounded-lg text-xs bg-slate-50 outline-none focus:ring-1 focus:ring-blue-200 svelte-1uha8ag"/></div> <div class="space-y-2 pt-4 border-t svelte-1uha8ag"><label class="text-[9px] font-black text-slate-400 uppercase tracking-widest svelte-1uha8ag">Data Migration</label> <div class="grid grid-cols-2 gap-2 svelte-1uha8ag"><button class="flex items-center justify-center gap-2 p-2.5 bg-slate-50 border rounded-lg text-[9px] font-bold uppercase hover:bg-slate-100 svelte-1uha8ag"><!> Backup</button> <label class="flex items-center justify-center gap-2 p-2.5 bg-slate-50 border rounded-lg text-[9px] font-bold uppercase cursor-pointer hover:bg-slate-100 svelte-1uha8ag"><!> JSON <input type="file" accept=".json" class="hidden svelte-1uha8ag"/></label></div> <label class="flex items-center justify-center gap-2 w-full p-2.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-[9px] font-black uppercase cursor-pointer hover:bg-blue-100 transition-colors svelte-1uha8ag"><!> Import CSV (Title,Url,Group) <input type="file" accept=".csv" class="hidden svelte-1uha8ag"/></label></div> <div class="space-y-2 pt-4 border-t svelte-1uha8ag"><label class="text-[9px] font-black text-slate-400 uppercase tracking-widest svelte-1uha8ag">Manage Groups</label> <div class="flex gap-2 svelte-1uha8ag"><input placeholder="Group Name..." class="flex-1 border p-2 rounded-lg text-xs outline-none svelte-1uha8ag"/> <button class="bg-blue-600 text-white px-3 rounded-lg svelte-1uha8ag"><!></button></div> <div class="mt-4 space-y-1 svelte-1uha8ag"></div></div></div></div></div>'),Fr=le('<div class="h-screen w-screen bg-slate-50 flex flex-col overflow-hidden font-sans select-none text-slate-900 svelte-1uha8ag"><header class="h-12 bg-white border-b flex items-center px-4 justify-between shrink-0 shadow-sm z-10 svelte-1uha8ag"><div class="flex items-center gap-6 flex-1 svelte-1uha8ag"><div class="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-tighter text-xs svelte-1uha8ag"><!> <span class="svelte-1uha8ag"> </span></div> <div class="relative w-64 svelte-1uha8ag"><!> <input placeholder="Search bookmarks..." class="w-full pl-8 pr-4 py-1 text-[11px] bg-slate-100 border-none rounded-full outline-none focus:ring-1 focus:ring-blue-200 transition-all svelte-1uha8ag"/></div></div> <div class="flex items-center gap-4 svelte-1uha8ag"><div><!> <span class="text-[8px] font-black uppercase tracking-widest svelte-1uha8ag"> </span></div> <button class="p-1.5 hover:bg-slate-100 rounded-full transition-colors svelte-1uha8ag"><!></button></div></header> <main class="flex-1 p-3 overflow-y-auto flex flex-row flex-wrap gap-6 items-start content-start svelte-1uha8ag"></main> <!></div>');function qr(e,t){Yt(t,!0);const a=!!window.__TAURI_INTERNALS__;let r=ae(null),s=ae(tt([])),n=ae(tt([])),l=ae("MarkKeeper"),i=tt({}),f=ae(""),p=ae(!1),u=ae(!1),_=ae(""),d=ae(""),y=ae(tt(new Date)),w=ae(null),I=ae(null);da(async()=>{if(a)try{A(r,await it.load("sqlite:markkeeper.db"),!0),await o(r).execute("CREATE TABLE IF NOT EXISTS groups (name TEXT PRIMARY KEY)"),await o(r).execute("CREATE TABLE IF NOT EXISTS bookmarks (id TEXT PRIMARY KEY, title TEXT, url TEXT, group_name TEXT, position INTEGER)"),await o(r).execute("CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT)")}catch(T){console.error("DB Init Failed",T)}await c();const b=setInterval(()=>A(y,new Date,!0),1e3);return()=>clearInterval(b)});async function c(){if(a&&o(r)){const b=await o(r).select("SELECT value FROM settings WHERE key = 'app_name'");b.length>0&&A(l,b[0].value,!0);const T=await o(r).select("SELECT name FROM groups ORDER BY name ASC");A(n,T.length>0?T.map(k=>k.name):["General"],!0);const R=await o(r).select("SELECT * FROM bookmarks ORDER BY position ASC");A(s,R.map(k=>({id:k.id,title:k.title,url:k.url,group:k.group_name,position:k.position})),!0)}else A(l,localStorage.getItem("mk_title")||"MarkKeeper",!0),A(n,JSON.parse(localStorage.getItem("mk_groups")||'["General"]'),!0),A(s,JSON.parse(localStorage.getItem("mk_bookmarks")||"[]"),!0)}async function v(){a&&o(r)||(localStorage.setItem("mk_title",o(l)),localStorage.setItem("mk_groups",JSON.stringify(o(n))),localStorage.setItem("mk_bookmarks",JSON.stringify(o(s))))}function Z(b){const T=i[b]==="asc"?"desc":"asc";i[b]=T;const R=o(s).filter(L=>L.group===b).sort((L,P)=>T==="asc"?L.title.localeCompare(P.title):P.title.localeCompare(L.title)),k=o(s).filter(L=>L.group!==b);A(s,[...k,...R.map((L,P)=>({...L,position:P}))],!0),v()}function K(){const b={appTitle:o(l),groups:o(n),bookmarks:o(s),version:"3.0"},T=new Blob([JSON.stringify(b,null,2)],{type:"application/json"}),R=URL.createObjectURL(T),k=document.createElement("a");k.href=R,k.download="markkeeper-backup.json",k.click()}async function E(b){var k;const T=(k=b.target.files)==null?void 0:k[0];if(!T)return;const R=new FileReader;R.onload=L=>{var $e;const fe=(($e=L.target)==null?void 0:$e.result).split(`
`).map(te=>te.split(",")),se=[],ve=new Set(o(n));fe.forEach((te,me)=>{var xe,M,D,ee;if(me===0&&((xe=te[0])!=null&&xe.toLowerCase().includes("title")))return;const ie=(M=te[0])==null?void 0:M.trim(),oe=(D=te[1])==null?void 0:D.trim(),ue=((ee=te[2])==null?void 0:ee.trim())||"Imported";ie&&oe&&(ve.add(ue),se.push({id:crypto.randomUUID(),title:ie,url:oe,group:ue,position:0}))}),A(n,Array.from(ve),!0),A(s,[...o(s),...se],!0),v()},R.readAsText(T)}function J(b,T){if(o(w)){const R=o(s).find(P=>P.id===o(w));if(!R)return;let k=o(s).filter(P=>P.id!==o(w)&&P.group===b);k.splice(T,0,{...R,group:b});const L=o(s).filter(P=>P.group!==b&&P.id!==o(w));A(s,[...L,...k.map((P,fe)=>({...P,position:fe}))],!0),A(w,null)}else if(o(I)!==null){const R=[...o(n)],[k]=R.splice(o(I),1),L=o(n).indexOf(b);R.splice(L,0,k),A(n,R,!0),A(I,null)}v()}function m(b){var R;const T=b.target;T.classList.add("hidden"),(R=T.nextElementSibling)==null||R.classList.remove("hidden")}let $=bt(()=>o(s).filter(b=>b.title.toLowerCase().includes(o(f).toLowerCase())));var z=Fr(),U=h(z),N=h(U),re=h(N),ne=h(re);Ct(ne,{size:16});var Oe=x(ne,2),Ke=h(Oe,!0);g(Oe),g(re);var Re=x(re,2),Le=h(Re);Mr(Le,{class:"absolute left-3 top-2 text-slate-400",size:12});var Pe=x(Le,2);Ie(Pe),g(Re),g(N);var De=x(N,2),q=h(De),Be=h(q);{var ta=b=>{kr(b,{size:10})},aa=b=>{Tr(b,{size:10})};_e(Be,b=>{a?b(ta):b(aa,!1)})}var wt=x(Be,2),ra=h(wt,!0);g(wt),g(q);var ut=x(q,2),sa=h(ut);Ir(sa,{size:18}),g(ut),g(De),g(U);var ct=x(U,2);st(ct,22,()=>o(n),b=>b,(b,T,R)=>{var k=Ur(),L=h(k),P=h(L),fe=h(P);{var se=M=>{Sr(M,{size:13,class:"text-blue-500"})};_e(fe,M=>{o(u)&&M(se)})}var ve=x(fe,2),$e=h(ve,!0);g(ve);var te=x(ve,2);{var me=M=>{var D=Or(),ee=h(D);{var V=G=>{wr(G,{size:12})},pe=G=>{xr(G,{size:12})};_e(ee,G=>{i[T]==="asc"?G(V):G(pe,!1)})}g(D),S(M,D)};_e(te,M=>{i[T]&&M(me)})}g(P),g(L);var ie=x(L,2),oe=h(ie);{var ue=M=>{var D=Rr(),ee=h(D);Ie(ee);var V=x(ee,2),pe=h(V);Ot(pe,{size:12}),g(V),g(D),Ye(ee,()=>o(_),G=>A(_,G)),Q("click",V,()=>{const G=crypto.randomUUID(),ge=o(_).replace(/^https?:\/\/(www\.)?/,"").split("/")[0];A(s,[...o(s),{id:G,title:ge,url:o(_).startsWith("http")?o(_):`https://${o(_)}`,group:T,position:o(s).length}],!0),A(_,""),v()}),S(M,D)};_e(oe,M=>{o(u)&&M(ue)})}var xe=x(oe,2);st(xe,23,()=>o($).filter(M=>M.group===T),M=>M.id,(M,D,ee)=>{var V=Br(),pe=h(V),G=h(pe),ge=h(G);{let C=bt(()=>o(u)?"opacity-100":"opacity-0 group-hover:opacity-100");Ar(ge,{size:10,get class(){return`text-slate-200 shrink-0 ${o(C)??""}`}})}var we=x(ge,2),he=h(we),qe=x(he,2),Qe=h(qe);Ct(Qe,{size:11}),g(qe),g(we);var ke=x(we,2);{var Ze=C=>{var Y=Lr();Ie(Y),Q("click",Y,ye=>ye.stopPropagation()),ce("blur",Y,()=>v()),Ye(Y,()=>o(D).title,ye=>o(D).title=ye),S(C,Y)},Ue=C=>{var Y=Pr(),ye=h(Y,!0);g(Y),Te(()=>Ae(ye,o(D).title)),S(C,Y)};_e(ke,C=>{o(u)?C(Ze):C(Ue,!1)})}g(G);var Ve=x(G,2);{var dt=C=>{var Y=Dr(),ye=h(Y);Rt(ye,{size:10}),g(Y),Q("click",Y,ia=>{ia.stopPropagation(),A(s,o(s).filter(oa=>oa.id!==o(D).id),!0),v()}),S(C,Y)},et=C=>{Er(C,{size:9,class:"text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100"})};_e(Ve,C=>{o(u)?C(dt):C(et,!1)})}g(pe),g(V),Te(()=>{We(V,1,`bookmark-row px-2 py-1.5 group transition-all duration-75 ${o(u)?"cursor-default":"cursor-pointer"}`,"svelte-1uha8ag"),Ce(he,"src",`https://www.google.com/s2/favicons?domain=${o(D).url??""}&sz=32`)}),ce("dragstart",V,C=>{C.stopPropagation(),A(w,o(D).id,!0)}),ce("dragover",V,C=>C.preventDefault()),ce("drop",V,C=>{C.stopPropagation(),J(T,o(ee))}),Q("click",V,()=>!o(u)&&window.open(o(D).url.startsWith("http")?o(D).url:`https://${o(D).url}`,"_blank")),ce("error",he,m),Za(he),S(M,V)}),g(xe),g(ie),g(k),Te(()=>{Ce(k,"draggable",o(u)),We(L,1,`flex items-center justify-between w-full mb-1 px-1 py-1 rounded transition-colors ${o(u)?"cursor-move bg-blue-50 ring-1 ring-blue-100":""}`,"svelte-1uha8ag"),Ae($e,T)}),ce("dragstart",k,()=>{o(u)&&A(I,o(R),!0)}),ce("dragover",k,M=>M.preventDefault()),ce("drop",k,()=>J(T,o(s).filter(M=>M.group===T).length)),Q("click",P,()=>Z(T)),S(b,k)}),g(ct);var la=x(ct,2);{var na=b=>{var T=Gr(),R=h(T),k=x(R,2),L=h(k),P=x(h(L),2),fe=h(P);Cr(fe,{size:18}),g(P),g(L);var se=x(L,2),ve=h(se,!0);g(se);var $e=x(se,2),te=h($e),me=x(h(te),2);Ie(me),g(te);var ie=x(te,2),oe=x(h(ie),2),ue=h(oe),xe=h(ue);yr(xe,{size:12}),Nt(),g(ue);var M=x(ue,2),D=h(M);zr(D,{size:12}),Nt(2),g(M),g(oe);var ee=x(oe,2),V=h(ee);Nr(V,{size:12});var pe=x(V,2);g(ee),g(ie);var G=x(ie,2),ge=x(h(G),2),we=h(ge);Ie(we);var he=x(we,2),qe=h(he);Ot(qe,{size:16}),g(he),g(ge);var Qe=x(ge,2);st(Qe,21,()=>o(n),Jt,(ke,Ze)=>{var Ue=Vr(),Ve=h(Ue),dt=h(Ve,!0);g(Ve);var et=x(Ve,2),C=h(et),Y=h(C);Rt(Y,{size:13}),g(C),g(et),g(Ue),Te(()=>Ae(dt,o(Ze))),Q("click",C,()=>deleteGroup(o(Ze))),S(ke,Ue)}),g(Qe),g(G),g($e),g(k),g(T),Te(()=>{We(se,1,`w-full py-3 rounded-xl border-2 font-black text-[10px] tracking-widest transition-all ${o(u)?"bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200":"text-slate-500 border-slate-100 hover:bg-slate-50"} uppercase`,"svelte-1uha8ag"),Ae(ve,o(u)?"Lock UI":"Unlock Editor")}),Q("click",R,()=>A(p,!1)),Q("click",P,()=>A(p,!1)),Q("click",se,()=>A(u,!o(u))),ce("blur",me,v),Ye(me,()=>o(l),ke=>A(l,ke)),Q("click",ue,K),Q("change",pe,E),Ye(we,()=>o(d),ke=>A(d,ke)),Q("click",he,()=>{o(d)&&(A(n,[...o(n),o(d)],!0),A(d,""),v())}),S(b,T)};_e(la,b=>{o(p)&&b(na)})}g(z),Te(()=>{Ae(Ke,o(l)),We(q,1,`flex items-center gap-2 px-2 py-0.5 ${a?"bg-green-50 text-green-600":"bg-blue-50 text-blue-600"} rounded-full border border-current opacity-80`,"svelte-1uha8ag"),Ae(ra,a?"SQLite":"Web Storage")}),Ye(Pe,()=>o(f),b=>A(f,b)),Q("click",ut,()=>A(p,!0)),S(e,z),Xt()}Wt(["click","change"]);export{qr as component};
