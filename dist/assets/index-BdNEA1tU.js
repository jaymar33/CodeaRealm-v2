(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var Yy={exports:{}},bc={},Jy={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),a1=Symbol.for("react.portal"),l1=Symbol.for("react.fragment"),c1=Symbol.for("react.strict_mode"),u1=Symbol.for("react.profiler"),d1=Symbol.for("react.provider"),h1=Symbol.for("react.context"),f1=Symbol.for("react.forward_ref"),m1=Symbol.for("react.suspense"),p1=Symbol.for("react.memo"),g1=Symbol.for("react.lazy"),ip=Symbol.iterator;function y1(t){return t===null||typeof t!="object"?null:(t=ip&&t[ip]||t["@@iterator"],typeof t=="function"?t:null)}var Xy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zy=Object.assign,e0={};function Ni(t,e,n){this.props=t,this.context=e,this.refs=e0,this.updater=n||Xy}Ni.prototype.isReactComponent={};Ni.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ni.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function t0(){}t0.prototype=Ni.prototype;function Mh(t,e,n){this.props=t,this.context=e,this.refs=e0,this.updater=n||Xy}var Lh=Mh.prototype=new t0;Lh.constructor=Mh;Zy(Lh,Ni.prototype);Lh.isPureReactComponent=!0;var op=Array.isArray,n0=Object.prototype.hasOwnProperty,Oh={current:null},r0={key:!0,ref:!0,__self:!0,__source:!0};function s0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)n0.call(e,r)&&!r0.hasOwnProperty(r)&&(s[r]=e[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var u=Array(c),h=0;h<c;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in c=t.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:la,type:t,key:i,ref:o,props:s,_owner:Oh.current}}function v1(t,e){return{$$typeof:la,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vh(t){return typeof t=="object"&&t!==null&&t.$$typeof===la}function x1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ap=/\/+/g;function bu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?x1(""+t.key):e.toString(36)}function al(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case la:case a1:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+bu(o,0):r,op(s)?(n="",t!=null&&(n=t.replace(ap,"$&/")+"/"),al(s,e,n,"",function(h){return h})):s!=null&&(Vh(s)&&(s=v1(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(ap,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",op(t))for(var c=0;c<t.length;c++){i=t[c];var u=r+bu(i,c);o+=al(i,e,n,u,s)}else if(u=y1(t),typeof u=="function")for(t=u.call(t),c=0;!(i=t.next()).done;)i=i.value,u=r+bu(i,c++),o+=al(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Va(t,e,n){if(t==null)return t;var r=[],s=0;return al(t,r,"","",function(i){return e.call(n,i,s++)}),r}function _1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},ll={transition:null},w1={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:ll,ReactCurrentOwner:Oh};function i0(){throw Error("act(...) is not supported in production builds of React.")}he.Children={map:Va,forEach:function(t,e,n){Va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Va(t,function(){e++}),e},toArray:function(t){return Va(t,function(e){return e})||[]},only:function(t){if(!Vh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};he.Component=Ni;he.Fragment=l1;he.Profiler=u1;he.PureComponent=Mh;he.StrictMode=c1;he.Suspense=m1;he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;he.act=i0;he.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Zy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Oh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(u in e)n0.call(e,u)&&!r0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&c!==void 0?c[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var h=0;h<u;h++)c[h]=arguments[h+2];r.children=c}return{$$typeof:la,type:t.type,key:s,ref:i,props:r,_owner:o}};he.createContext=function(t){return t={$$typeof:h1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:d1,_context:t},t.Consumer=t};he.createElement=s0;he.createFactory=function(t){var e=s0.bind(null,t);return e.type=t,e};he.createRef=function(){return{current:null}};he.forwardRef=function(t){return{$$typeof:f1,render:t}};he.isValidElement=Vh;he.lazy=function(t){return{$$typeof:g1,_payload:{_status:-1,_result:t},_init:_1}};he.memo=function(t,e){return{$$typeof:p1,type:t,compare:e===void 0?null:e}};he.startTransition=function(t){var e=ll.transition;ll.transition={};try{t()}finally{ll.transition=e}};he.unstable_act=i0;he.useCallback=function(t,e){return Nt.current.useCallback(t,e)};he.useContext=function(t){return Nt.current.useContext(t)};he.useDebugValue=function(){};he.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};he.useEffect=function(t,e){return Nt.current.useEffect(t,e)};he.useId=function(){return Nt.current.useId()};he.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};he.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};he.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};he.useMemo=function(t,e){return Nt.current.useMemo(t,e)};he.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};he.useRef=function(t){return Nt.current.useRef(t)};he.useState=function(t){return Nt.current.useState(t)};he.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};he.useTransition=function(){return Nt.current.useTransition()};he.version="18.3.1";Jy.exports=he;var H=Jy.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=H,S1=Symbol.for("react.element"),E1=Symbol.for("react.fragment"),T1=Object.prototype.hasOwnProperty,I1=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N1={key:!0,ref:!0,__self:!0,__source:!0};function o0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)T1.call(e,r)&&!N1.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:S1,type:t,key:i,ref:o,props:s,_owner:I1.current}}bc.Fragment=E1;bc.jsx=o0;bc.jsxs=o0;Yy.exports=bc;var l=Yy.exports,a0={exports:{}},Bt={},l0={exports:{}},c0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,F){var q=O.length;O.push(F);e:for(;0<q;){var Y=q-1>>>1,G=O[Y];if(0<s(G,F))O[Y]=F,O[q]=G,q=Y;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],q=O.pop();if(q!==F){O[0]=q;e:for(var Y=0,G=O.length,oe=G>>>1;Y<oe;){var Q=2*(Y+1)-1,Ht=O[Q],ve=Q+1,tt=O[ve];if(0>s(Ht,q))ve<G&&0>s(tt,Ht)?(O[Y]=tt,O[ve]=q,Y=ve):(O[Y]=Ht,O[Q]=q,Y=Q);else if(ve<G&&0>s(tt,q))O[Y]=tt,O[ve]=q,Y=ve;else break e}}return F}function s(O,F){var q=O.sortIndex-F.sortIndex;return q!==0?q:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,c=o.now();t.unstable_now=function(){return o.now()-c}}var u=[],h=[],m=1,p=null,g=3,N=!1,A=!1,j=!1,L=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(O){for(var F=n(h);F!==null;){if(F.callback===null)r(h);else if(F.startTime<=O)r(h),F.sortIndex=F.expirationTime,e(u,F);else break;F=n(h)}}function D(O){if(j=!1,I(O),!A)if(n(u)!==null)A=!0,V(z);else{var F=n(h);F!==null&&$(D,F.startTime-O)}}function z(O,F){A=!1,j&&(j=!1,E(v),v=-1),N=!0;var q=g;try{for(I(F),p=n(u);p!==null&&(!(p.expirationTime>F)||O&&!T());){var Y=p.callback;if(typeof Y=="function"){p.callback=null,g=p.priorityLevel;var G=Y(p.expirationTime<=F);F=t.unstable_now(),typeof G=="function"?p.callback=G:p===n(u)&&r(u),I(F)}else r(u);p=n(u)}if(p!==null)var oe=!0;else{var Q=n(h);Q!==null&&$(D,Q.startTime-F),oe=!1}return oe}finally{p=null,g=q,N=!1}}var R=!1,y=null,v=-1,_=5,S=-1;function T(){return!(t.unstable_now()-S<_)}function C(){if(y!==null){var O=t.unstable_now();S=O;var F=!0;try{F=y(!0,O)}finally{F?b():(R=!1,y=null)}}else R=!1}var b;if(typeof w=="function")b=function(){w(C)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,k=Z.port2;Z.port1.onmessage=C,b=function(){k.postMessage(null)}}else b=function(){L(C,0)};function V(O){y=O,R||(R=!0,b())}function $(O,F){v=L(function(){O(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){A||N||(A=!0,V(z))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(O){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var q=g;g=F;try{return O()}finally{g=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=g;g=O;try{return F()}finally{g=q}},t.unstable_scheduleCallback=function(O,F,q){var Y=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Y+q:Y):q=Y,O){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=q+G,O={id:m++,callback:F,priorityLevel:O,startTime:q,expirationTime:G,sortIndex:-1},q>Y?(O.sortIndex=q,e(h,O),n(u)===null&&O===n(h)&&(j?(E(v),v=-1):j=!0,$(D,q-Y))):(O.sortIndex=G,e(u,O),A||N||(A=!0,V(z))),O},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(O){var F=g;return function(){var q=g;g=F;try{return O.apply(this,arguments)}finally{g=q}}}})(c0);l0.exports=c0;var C1=l0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k1=H,zt=C1;function W(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u0=new Set,Do={};function Ts(t,e){hi(t,e),hi(t+"Capture",e)}function hi(t,e){for(Do[t]=e,t=0;t<e.length;t++)u0.add(e[t])}var Kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=Object.prototype.hasOwnProperty,A1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lp={},cp={};function P1(t){return ad.call(cp,t)?!0:ad.call(lp,t)?!1:A1.test(t)?cp[t]=!0:(lp[t]=!0,!1)}function R1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j1(t,e,n,r){if(e===null||typeof e>"u"||R1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ct(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function zh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uh,zh);mt[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uh,zh);mt[e]=new Ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uh,zh);mt[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fh(t,e,n,r){var s=mt.hasOwnProperty(e)?mt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(j1(e,n,s,r)&&(n=null),r||s===null?P1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tr=k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ua=Symbol.for("react.element"),Bs=Symbol.for("react.portal"),$s=Symbol.for("react.fragment"),Bh=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),d0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),$h=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),Hh=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),f0=Symbol.for("react.offscreen"),up=Symbol.iterator;function Zi(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,Su;function ao(t){if(Su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Su=e&&e[1]||""}return`
`+Su+t}var Eu=!1;function Tu(t,e){if(!t||Eu)return"";Eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,c=i.length-1;1<=o&&0<=c&&s[o]!==i[c];)c--;for(;1<=o&&0<=c;o--,c--)if(s[o]!==i[c]){if(o!==1||c!==1)do if(o--,c--,0>c||s[o]!==i[c]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=c);break}}}finally{Eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function D1(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=Tu(t.type,!1),t;case 11:return t=Tu(t.type.render,!1),t;case 1:return t=Tu(t.type,!0),t;default:return""}}function dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $s:return"Fragment";case Bs:return"Portal";case ld:return"Profiler";case Bh:return"StrictMode";case cd:return"Suspense";case ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case h0:return(t.displayName||"Context")+".Consumer";case d0:return(t._context.displayName||"Context")+".Provider";case $h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hh:return e=t.displayName||null,e!==null?e:dd(t.type)||"Memo";case fr:e=t._payload,t=t._init;try{return dd(t(e))}catch{}}return null}function M1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(e);case 8:return e===Bh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function m0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L1(t){var e=m0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=L1(t))}function p0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=m0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hd(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function g0(t,e){e=e.checked,e!=null&&Fh(t,"checked",e,!1)}function fd(t,e){g0(t,e);var n=Or(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?md(t,e.type,n):e.hasOwnProperty("defaultValue")&&md(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function md(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function ti(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function pd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(W(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(W(92));if(lo(n)){if(1<n.length)throw Error(W(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function y0(t,e){var n=Or(e.value),r=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function v0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?v0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,x0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},O1=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(t){O1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),vo[e]=vo[t]})});function _0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||vo.hasOwnProperty(t)&&vo[t]?(""+e).trim():e+"px"}function w0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=_0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var V1=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yd(t,e){if(e){if(V1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(W(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(W(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(W(61))}if(e.style!=null&&typeof e.style!="object")throw Error(W(62))}}function vd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function Wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _d=null,ni=null,ri=null;function pp(t){if(t=da(t)){if(typeof _d!="function")throw Error(W(280));var e=t.stateNode;e&&(e=Nc(e),_d(t.stateNode,t.type,e))}}function b0(t){ni?ri?ri.push(t):ri=[t]:ni=t}function S0(){if(ni){var t=ni,e=ri;if(ri=ni=null,pp(t),e)for(t=0;t<e.length;t++)pp(e[t])}}function E0(t,e){return t(e)}function T0(){}var Iu=!1;function I0(t,e,n){if(Iu)return t(e,n);Iu=!0;try{return E0(t,e,n)}finally{Iu=!1,(ni!==null||ri!==null)&&(T0(),S0())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var r=Nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(W(231,e,typeof n));return n}var wd=!1;if(Kn)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){wd=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{wd=!1}function U1(t,e,n,r,s,i,o,c,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(m){this.onError(m)}}var xo=!1,Pl=null,Rl=!1,bd=null,z1={onError:function(t){xo=!0,Pl=t}};function F1(t,e,n,r,s,i,o,c,u){xo=!1,Pl=null,U1.apply(z1,arguments)}function B1(t,e,n,r,s,i,o,c,u){if(F1.apply(this,arguments),xo){if(xo){var h=Pl;xo=!1,Pl=null}else throw Error(W(198));Rl||(Rl=!0,bd=h)}}function Is(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function N0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function gp(t){if(Is(t)!==t)throw Error(W(188))}function $1(t){var e=t.alternate;if(!e){if(e=Is(t),e===null)throw Error(W(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return gp(s),t;if(i===r)return gp(s),e;i=i.sibling}throw Error(W(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,c=s.child;c;){if(c===n){o=!0,n=s,r=i;break}if(c===r){o=!0,r=s,n=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===n){o=!0,n=i,r=s;break}if(c===r){o=!0,r=i,n=s;break}c=c.sibling}if(!o)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?t:e}function C0(t){return t=$1(t),t!==null?k0(t):null}function k0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=k0(t);if(e!==null)return e;t=t.sibling}return null}var A0=zt.unstable_scheduleCallback,yp=zt.unstable_cancelCallback,H1=zt.unstable_shouldYield,W1=zt.unstable_requestPaint,He=zt.unstable_now,q1=zt.unstable_getCurrentPriorityLevel,qh=zt.unstable_ImmediatePriority,P0=zt.unstable_UserBlockingPriority,jl=zt.unstable_NormalPriority,K1=zt.unstable_LowPriority,R0=zt.unstable_IdlePriority,Sc=null,Sn=null;function G1(t){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(Sc,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:J1,Q1=Math.log,Y1=Math.LN2;function J1(t){return t>>>=0,t===0?32:31-(Q1(t)/Y1|0)|0}var Ba=64,$a=4194304;function co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var c=o&~s;c!==0?r=co(c):(i&=o,i!==0&&(r=co(i)))}else o=n&~s,o!==0?r=co(o):i!==0&&(r=co(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),s=1<<n,r|=t[n],e&=~s;return r}function X1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-dn(i),c=1<<o,u=s[o];u===-1?(!(c&n)||c&r)&&(s[o]=X1(c,e)):u<=e&&(t.expiredLanes|=c),i&=~c}}function Sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j0(){var t=Ba;return Ba<<=1,!(Ba&4194240)&&(Ba=64),t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ca(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function eb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-dn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var be=0;function D0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var M0,Gh,L0,O0,V0,Ed=!1,Ha=[],Er=null,Tr=null,Ir=null,Oo=new Map,Vo=new Map,pr=[],tb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vp(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ir=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(e.pointerId)}}function to(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=da(e),e!==null&&Gh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function nb(t,e,n,r,s){switch(e){case"focusin":return Er=to(Er,t,e,n,r,s),!0;case"dragenter":return Tr=to(Tr,t,e,n,r,s),!0;case"mouseover":return Ir=to(Ir,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Oo.set(i,to(Oo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Vo.set(i,to(Vo.get(i)||null,t,e,n,r,s)),!0}return!1}function U0(t){var e=ls(t.target);if(e!==null){var n=Is(e);if(n!==null){if(e=n.tag,e===13){if(e=N0(n),e!==null){t.blockedOn=e,V0(t.priority,function(){L0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xd=r,n.target.dispatchEvent(r),xd=null}else return e=da(n),e!==null&&Gh(e),t.blockedOn=n,!1;e.shift()}return!0}function xp(t,e,n){cl(t)&&n.delete(e)}function rb(){Ed=!1,Er!==null&&cl(Er)&&(Er=null),Tr!==null&&cl(Tr)&&(Tr=null),Ir!==null&&cl(Ir)&&(Ir=null),Oo.forEach(xp),Vo.forEach(xp)}function no(t,e){t.blockedOn===e&&(t.blockedOn=null,Ed||(Ed=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,rb)))}function Uo(t){function e(s){return no(s,t)}if(0<Ha.length){no(Ha[0],t);for(var n=1;n<Ha.length;n++){var r=Ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Er!==null&&no(Er,t),Tr!==null&&no(Tr,t),Ir!==null&&no(Ir,t),Oo.forEach(e),Vo.forEach(e),n=0;n<pr.length;n++)r=pr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)U0(n),n.blockedOn===null&&pr.shift()}var si=tr.ReactCurrentBatchConfig,Ml=!0;function sb(t,e,n,r){var s=be,i=si.transition;si.transition=null;try{be=1,Qh(t,e,n,r)}finally{be=s,si.transition=i}}function ib(t,e,n,r){var s=be,i=si.transition;si.transition=null;try{be=4,Qh(t,e,n,r)}finally{be=s,si.transition=i}}function Qh(t,e,n,r){if(Ml){var s=Td(t,e,n,r);if(s===null)Ou(t,e,r,Ll,n),vp(t,r);else if(nb(s,t,e,n,r))r.stopPropagation();else if(vp(t,r),e&4&&-1<tb.indexOf(t)){for(;s!==null;){var i=da(s);if(i!==null&&M0(i),i=Td(t,e,n,r),i===null&&Ou(t,e,r,Ll,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ou(t,e,r,null,n)}}var Ll=null;function Td(t,e,n,r){if(Ll=null,t=Wh(r),t=ls(t),t!==null)if(e=Is(t),e===null)t=null;else if(n=e.tag,n===13){if(t=N0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ll=t,null}function z0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q1()){case qh:return 1;case P0:return 4;case jl:case K1:return 16;case R0:return 536870912;default:return 16}default:return 16}}var wr=null,Yh=null,ul=null;function F0(){if(ul)return ul;var t,e=Yh,n=e.length,r,s="value"in wr?wr.value:wr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return ul=s.slice(t,1<r?1-r:void 0)}function dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function _p(){return!1}function $t(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wa:_p,this.isPropagationStopped=_p,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=$t(Ci),ua=Oe({},Ci,{view:0,detail:0}),ob=$t(ua),Cu,ku,ro,Ec=Oe({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ro&&(ro&&t.type==="mousemove"?(Cu=t.screenX-ro.screenX,ku=t.screenY-ro.screenY):ku=Cu=0,ro=t),Cu)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),wp=$t(Ec),ab=Oe({},Ec,{dataTransfer:0}),lb=$t(ab),cb=Oe({},ua,{relatedTarget:0}),Au=$t(cb),ub=Oe({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),db=$t(ub),hb=Oe({},Ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fb=$t(hb),mb=Oe({},Ci,{data:0}),bp=$t(mb),pb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yb[t])?!!e[t]:!1}function Xh(){return vb}var xb=Oe({},ua,{key:function(t){if(t.key){var e=pb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_b=$t(xb),wb=Oe({},Ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sp=$t(wb),bb=Oe({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),Sb=$t(bb),Eb=Oe({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tb=$t(Eb),Ib=Oe({},Ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Nb=$t(Ib),Cb=[9,13,27,32],Zh=Kn&&"CompositionEvent"in window,_o=null;Kn&&"documentMode"in document&&(_o=document.documentMode);var kb=Kn&&"TextEvent"in window&&!_o,B0=Kn&&(!Zh||_o&&8<_o&&11>=_o),Ep=" ",Tp=!1;function $0(t,e){switch(t){case"keyup":return Cb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function Ab(t,e){switch(t){case"compositionend":return H0(e);case"keypress":return e.which!==32?null:(Tp=!0,Ep);case"textInput":return t=e.data,t===Ep&&Tp?null:t;default:return null}}function Pb(t,e){if(Hs)return t==="compositionend"||!Zh&&$0(t,e)?(t=F0(),ul=Yh=wr=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B0&&e.locale!=="ko"?null:e.data;default:return null}}var Rb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rb[t.type]:e==="textarea"}function W0(t,e,n,r){b0(r),e=Ol(e,"onChange"),0<e.length&&(n=new Jh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wo=null,zo=null;function jb(t){nv(t,0)}function Tc(t){var e=Ks(t);if(p0(e))return t}function Db(t,e){if(t==="change")return e}var q0=!1;if(Kn){var Pu;if(Kn){var Ru="oninput"in document;if(!Ru){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),Ru=typeof Np.oninput=="function"}Pu=Ru}else Pu=!1;q0=Pu&&(!document.documentMode||9<document.documentMode)}function Cp(){wo&&(wo.detachEvent("onpropertychange",K0),zo=wo=null)}function K0(t){if(t.propertyName==="value"&&Tc(zo)){var e=[];W0(e,zo,t,Wh(t)),I0(jb,e)}}function Mb(t,e,n){t==="focusin"?(Cp(),wo=e,zo=n,wo.attachEvent("onpropertychange",K0)):t==="focusout"&&Cp()}function Lb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tc(zo)}function Ob(t,e){if(t==="click")return Tc(e)}function Vb(t,e){if(t==="input"||t==="change")return Tc(e)}function Ub(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mn=typeof Object.is=="function"?Object.is:Ub;function Fo(t,e){if(mn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!ad.call(e,s)||!mn(t[s],e[s]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,e){var n=kp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function G0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Q0(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function ef(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zb(t){var e=Q0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G0(n.ownerDocument.documentElement,n)){if(r!==null&&ef(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Ap(n,i);var o=Ap(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Fb=Kn&&"documentMode"in document&&11>=document.documentMode,Ws=null,Id=null,bo=null,Nd=!1;function Pp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||Ws==null||Ws!==Al(r)||(r=Ws,"selectionStart"in r&&ef(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Fo(bo,r)||(bo=r,r=Ol(Id,"onSelect"),0<r.length&&(e=new Jh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ws)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var qs={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},ju={},Y0={};Kn&&(Y0=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Ic(t){if(ju[t])return ju[t];if(!qs[t])return t;var e=qs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Y0)return ju[t]=e[n];return t}var J0=Ic("animationend"),X0=Ic("animationiteration"),Z0=Ic("animationstart"),ev=Ic("transitionend"),tv=new Map,Rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(t,e){tv.set(t,e),Ts(e,[t])}for(var Du=0;Du<Rp.length;Du++){var Mu=Rp[Du],Bb=Mu.toLowerCase(),$b=Mu[0].toUpperCase()+Mu.slice(1);qr(Bb,"on"+$b)}qr(J0,"onAnimationEnd");qr(X0,"onAnimationIteration");qr(Z0,"onAnimationStart");qr("dblclick","onDoubleClick");qr("focusin","onFocus");qr("focusout","onBlur");qr(ev,"onTransitionEnd");hi("onMouseEnter",["mouseout","mouseover"]);hi("onMouseLeave",["mouseout","mouseover"]);hi("onPointerEnter",["pointerout","pointerover"]);hi("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hb=new Set("cancel close invalid load scroll toggle".split(" ").concat(uo));function jp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,B1(r,e,void 0,t),t.currentTarget=null}function nv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var c=r[o],u=c.instance,h=c.currentTarget;if(c=c.listener,u!==i&&s.isPropagationStopped())break e;jp(s,c,h),i=u}else for(o=0;o<r.length;o++){if(c=r[o],u=c.instance,h=c.currentTarget,c=c.listener,u!==i&&s.isPropagationStopped())break e;jp(s,c,h),i=u}}}if(Rl)throw t=bd,Rl=!1,bd=null,t}function ke(t,e){var n=e[Rd];n===void 0&&(n=e[Rd]=new Set);var r=t+"__bubble";n.has(r)||(rv(e,t,2,!1),n.add(r))}function Lu(t,e,n){var r=0;e&&(r|=4),rv(n,t,r,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[Ka]){t[Ka]=!0,u0.forEach(function(n){n!=="selectionchange"&&(Hb.has(n)||Lu(n,!1,t),Lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,Lu("selectionchange",!1,e))}}function rv(t,e,n,r){switch(z0(e)){case 1:var s=sb;break;case 4:s=ib;break;default:s=Qh}n=s.bind(null,e,n,t),s=void 0,!wd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ou(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;c!==null;){if(o=ls(c),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}c=c.parentNode}}r=r.return}I0(function(){var h=i,m=Wh(n),p=[];e:{var g=tv.get(t);if(g!==void 0){var N=Jh,A=t;switch(t){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":N=_b;break;case"focusin":A="focus",N=Au;break;case"focusout":A="blur",N=Au;break;case"beforeblur":case"afterblur":N=Au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=lb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Sb;break;case J0:case X0:case Z0:N=db;break;case ev:N=Tb;break;case"scroll":N=ob;break;case"wheel":N=Nb;break;case"copy":case"cut":case"paste":N=fb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=Sp}var j=(e&4)!==0,L=!j&&t==="scroll",E=j?g!==null?g+"Capture":null:g;j=[];for(var w=h,I;w!==null;){I=w;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,E!==null&&(D=Lo(w,E),D!=null&&j.push($o(w,D,I)))),L)break;w=w.return}0<j.length&&(g=new N(g,A,null,n,m),p.push({event:g,listeners:j}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",N=t==="mouseout"||t==="pointerout",g&&n!==xd&&(A=n.relatedTarget||n.fromElement)&&(ls(A)||A[Gn]))break e;if((N||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,N?(A=n.relatedTarget||n.toElement,N=h,A=A?ls(A):null,A!==null&&(L=Is(A),A!==L||A.tag!==5&&A.tag!==6)&&(A=null)):(N=null,A=h),N!==A)){if(j=wp,D="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(j=Sp,D="onPointerLeave",E="onPointerEnter",w="pointer"),L=N==null?g:Ks(N),I=A==null?g:Ks(A),g=new j(D,w+"leave",N,n,m),g.target=L,g.relatedTarget=I,D=null,ls(m)===h&&(j=new j(E,w+"enter",A,n,m),j.target=I,j.relatedTarget=L,D=j),L=D,N&&A)t:{for(j=N,E=A,w=0,I=j;I;I=Os(I))w++;for(I=0,D=E;D;D=Os(D))I++;for(;0<w-I;)j=Os(j),w--;for(;0<I-w;)E=Os(E),I--;for(;w--;){if(j===E||E!==null&&j===E.alternate)break t;j=Os(j),E=Os(E)}j=null}else j=null;N!==null&&Dp(p,g,N,j,!1),A!==null&&L!==null&&Dp(p,L,A,j,!0)}}e:{if(g=h?Ks(h):window,N=g.nodeName&&g.nodeName.toLowerCase(),N==="select"||N==="input"&&g.type==="file")var z=Db;else if(Ip(g))if(q0)z=Vb;else{z=Lb;var R=Mb}else(N=g.nodeName)&&N.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=Ob);if(z&&(z=z(t,h))){W0(p,z,n,m);break e}R&&R(t,g,h),t==="focusout"&&(R=g._wrapperState)&&R.controlled&&g.type==="number"&&md(g,"number",g.value)}switch(R=h?Ks(h):window,t){case"focusin":(Ip(R)||R.contentEditable==="true")&&(Ws=R,Id=h,bo=null);break;case"focusout":bo=Id=Ws=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,Pp(p,n,m);break;case"selectionchange":if(Fb)break;case"keydown":case"keyup":Pp(p,n,m)}var y;if(Zh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Hs?$0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(B0&&n.locale!=="ko"&&(Hs||v!=="onCompositionStart"?v==="onCompositionEnd"&&Hs&&(y=F0()):(wr=m,Yh="value"in wr?wr.value:wr.textContent,Hs=!0)),R=Ol(h,v),0<R.length&&(v=new bp(v,t,null,n,m),p.push({event:v,listeners:R}),y?v.data=y:(y=H0(n),y!==null&&(v.data=y)))),(y=kb?Ab(t,n):Pb(t,n))&&(h=Ol(h,"onBeforeInput"),0<h.length&&(m=new bp("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:h}),m.data=y))}nv(p,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Lo(t,n),i!=null&&r.unshift($o(t,i,s)),i=Lo(t,e),i!=null&&r.push($o(t,i,s))),t=t.return}return r}function Os(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dp(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var c=n,u=c.alternate,h=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&h!==null&&(c=h,s?(u=Lo(n,i),u!=null&&o.unshift($o(n,u,c))):s||(u=Lo(n,i),u!=null&&o.push($o(n,u,c)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Wb=/\r\n?/g,qb=/\u0000|\uFFFD/g;function Mp(t){return(typeof t=="string"?t:""+t).replace(Wb,`
`).replace(qb,"")}function Ga(t,e,n){if(e=Mp(e),Mp(t)!==e&&n)throw Error(W(425))}function Vl(){}var Cd=null,kd=null;function Ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pd=typeof setTimeout=="function"?setTimeout:void 0,Kb=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,Gb=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(t){return Lp.resolve(null).then(t).catch(Qb)}:Pd;function Qb(t){setTimeout(function(){throw t})}function Vu(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Uo(e)}function Nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ki=Math.random().toString(36).slice(2),bn="__reactFiber$"+ki,Ho="__reactProps$"+ki,Gn="__reactContainer$"+ki,Rd="__reactEvents$"+ki,Yb="__reactListeners$"+ki,Jb="__reactHandles$"+ki;function ls(t){var e=t[bn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Gn]||n[bn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Op(t);t!==null;){if(n=t[bn])return n;t=Op(t)}return e}t=n,n=t.parentNode}return null}function da(t){return t=t[bn]||t[Gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(W(33))}function Nc(t){return t[Ho]||null}var jd=[],Gs=-1;function Kr(t){return{current:t}}function Pe(t){0>Gs||(t.current=jd[Gs],jd[Gs]=null,Gs--)}function Te(t,e){Gs++,jd[Gs]=t.current,t.current=e}var Vr={},bt=Kr(Vr),Rt=Kr(!1),ps=Vr;function fi(t,e){var n=t.type.contextTypes;if(!n)return Vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function jt(t){return t=t.childContextTypes,t!=null}function Ul(){Pe(Rt),Pe(bt)}function Vp(t,e,n){if(bt.current!==Vr)throw Error(W(168));Te(bt,e),Te(Rt,n)}function sv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(W(108,M1(t)||"Unknown",s));return Oe({},n,r)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vr,ps=bt.current,Te(bt,t),Te(Rt,Rt.current),!0}function Up(t,e,n){var r=t.stateNode;if(!r)throw Error(W(169));n?(t=sv(t,e,ps),r.__reactInternalMemoizedMergedChildContext=t,Pe(Rt),Pe(bt),Te(bt,t)):Pe(Rt),Te(Rt,n)}var Ln=null,Cc=!1,Uu=!1;function iv(t){Ln===null?Ln=[t]:Ln.push(t)}function Xb(t){Cc=!0,iv(t)}function Gr(){if(!Uu&&Ln!==null){Uu=!0;var t=0,e=be;try{var n=Ln;for(be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ln=null,Cc=!1}catch(s){throw Ln!==null&&(Ln=Ln.slice(t+1)),A0(qh,Gr),s}finally{be=e,Uu=!1}}return null}var Qs=[],Ys=0,Fl=null,Bl=0,Gt=[],Qt=0,gs=null,zn=1,Fn="";function is(t,e){Qs[Ys++]=Bl,Qs[Ys++]=Fl,Fl=t,Bl=e}function ov(t,e,n){Gt[Qt++]=zn,Gt[Qt++]=Fn,Gt[Qt++]=gs,gs=t;var r=zn;t=Fn;var s=32-dn(r)-1;r&=~(1<<s),n+=1;var i=32-dn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,zn=1<<32-dn(e)+s|n<<s|r,Fn=i+t}else zn=1<<i|n<<s|r,Fn=t}function tf(t){t.return!==null&&(is(t,1),ov(t,1,0))}function nf(t){for(;t===Fl;)Fl=Qs[--Ys],Qs[Ys]=null,Bl=Qs[--Ys],Qs[Ys]=null;for(;t===gs;)gs=Gt[--Qt],Gt[Qt]=null,Fn=Gt[--Qt],Gt[Qt]=null,zn=Gt[--Qt],Gt[Qt]=null}var Ut=null,Vt=null,je=!1,ln=null;function av(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=Nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=gs!==null?{id:zn,overflow:Fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Vt=null,!0):!1;default:return!1}}function Dd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Md(t){if(je){var e=Vt;if(e){var n=e;if(!zp(t,e)){if(Dd(t))throw Error(W(418));e=Nr(n.nextSibling);var r=Ut;e&&zp(t,e)?av(r,n):(t.flags=t.flags&-4097|2,je=!1,Ut=t)}}else{if(Dd(t))throw Error(W(418));t.flags=t.flags&-4097|2,je=!1,Ut=t}}}function Fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function Qa(t){if(t!==Ut)return!1;if(!je)return Fp(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ad(t.type,t.memoizedProps)),e&&(e=Vt)){if(Dd(t))throw lv(),Error(W(418));for(;e;)av(t,e),e=Nr(e.nextSibling)}if(Fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(W(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=Nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=Ut?Nr(t.stateNode.nextSibling):null;return!0}function lv(){for(var t=Vt;t;)t=Nr(t.nextSibling)}function mi(){Vt=Ut=null,je=!1}function rf(t){ln===null?ln=[t]:ln.push(t)}var Zb=tr.ReactCurrentBatchConfig;function so(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var c=s.refs;o===null?delete c[i]:c[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,t))}return t}function Ya(t,e){throw t=Object.prototype.toString.call(e),Error(W(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bp(t){var e=t._init;return e(t._payload)}function cv(t){function e(E,w){if(t){var I=E.deletions;I===null?(E.deletions=[w],E.flags|=16):I.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function s(E,w){return E=Pr(E,w),E.index=0,E.sibling=null,E}function i(E,w,I){return E.index=I,t?(I=E.alternate,I!==null?(I=I.index,I<w?(E.flags|=2,w):I):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function c(E,w,I,D){return w===null||w.tag!==6?(w=qu(I,E.mode,D),w.return=E,w):(w=s(w,I),w.return=E,w)}function u(E,w,I,D){var z=I.type;return z===$s?m(E,w,I.props.children,D,I.key):w!==null&&(w.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===fr&&Bp(z)===w.type)?(D=s(w,I.props),D.ref=so(E,w,I),D.return=E,D):(D=vl(I.type,I.key,I.props,null,E.mode,D),D.ref=so(E,w,I),D.return=E,D)}function h(E,w,I,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=Ku(I,E.mode,D),w.return=E,w):(w=s(w,I.children||[]),w.return=E,w)}function m(E,w,I,D,z){return w===null||w.tag!==7?(w=fs(I,E.mode,D,z),w.return=E,w):(w=s(w,I),w.return=E,w)}function p(E,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=qu(""+w,E.mode,I),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ua:return I=vl(w.type,w.key,w.props,null,E.mode,I),I.ref=so(E,null,w),I.return=E,I;case Bs:return w=Ku(w,E.mode,I),w.return=E,w;case fr:var D=w._init;return p(E,D(w._payload),I)}if(lo(w)||Zi(w))return w=fs(w,E.mode,I,null),w.return=E,w;Ya(E,w)}return null}function g(E,w,I,D){var z=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return z!==null?null:c(E,w,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ua:return I.key===z?u(E,w,I,D):null;case Bs:return I.key===z?h(E,w,I,D):null;case fr:return z=I._init,g(E,w,z(I._payload),D)}if(lo(I)||Zi(I))return z!==null?null:m(E,w,I,D,null);Ya(E,I)}return null}function N(E,w,I,D,z){if(typeof D=="string"&&D!==""||typeof D=="number")return E=E.get(I)||null,c(w,E,""+D,z);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ua:return E=E.get(D.key===null?I:D.key)||null,u(w,E,D,z);case Bs:return E=E.get(D.key===null?I:D.key)||null,h(w,E,D,z);case fr:var R=D._init;return N(E,w,I,R(D._payload),z)}if(lo(D)||Zi(D))return E=E.get(I)||null,m(w,E,D,z,null);Ya(w,D)}return null}function A(E,w,I,D){for(var z=null,R=null,y=w,v=w=0,_=null;y!==null&&v<I.length;v++){y.index>v?(_=y,y=null):_=y.sibling;var S=g(E,y,I[v],D);if(S===null){y===null&&(y=_);break}t&&y&&S.alternate===null&&e(E,y),w=i(S,w,v),R===null?z=S:R.sibling=S,R=S,y=_}if(v===I.length)return n(E,y),je&&is(E,v),z;if(y===null){for(;v<I.length;v++)y=p(E,I[v],D),y!==null&&(w=i(y,w,v),R===null?z=y:R.sibling=y,R=y);return je&&is(E,v),z}for(y=r(E,y);v<I.length;v++)_=N(y,E,v,I[v],D),_!==null&&(t&&_.alternate!==null&&y.delete(_.key===null?v:_.key),w=i(_,w,v),R===null?z=_:R.sibling=_,R=_);return t&&y.forEach(function(T){return e(E,T)}),je&&is(E,v),z}function j(E,w,I,D){var z=Zi(I);if(typeof z!="function")throw Error(W(150));if(I=z.call(I),I==null)throw Error(W(151));for(var R=z=null,y=w,v=w=0,_=null,S=I.next();y!==null&&!S.done;v++,S=I.next()){y.index>v?(_=y,y=null):_=y.sibling;var T=g(E,y,S.value,D);if(T===null){y===null&&(y=_);break}t&&y&&T.alternate===null&&e(E,y),w=i(T,w,v),R===null?z=T:R.sibling=T,R=T,y=_}if(S.done)return n(E,y),je&&is(E,v),z;if(y===null){for(;!S.done;v++,S=I.next())S=p(E,S.value,D),S!==null&&(w=i(S,w,v),R===null?z=S:R.sibling=S,R=S);return je&&is(E,v),z}for(y=r(E,y);!S.done;v++,S=I.next())S=N(y,E,v,S.value,D),S!==null&&(t&&S.alternate!==null&&y.delete(S.key===null?v:S.key),w=i(S,w,v),R===null?z=S:R.sibling=S,R=S);return t&&y.forEach(function(C){return e(E,C)}),je&&is(E,v),z}function L(E,w,I,D){if(typeof I=="object"&&I!==null&&I.type===$s&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ua:e:{for(var z=I.key,R=w;R!==null;){if(R.key===z){if(z=I.type,z===$s){if(R.tag===7){n(E,R.sibling),w=s(R,I.props.children),w.return=E,E=w;break e}}else if(R.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===fr&&Bp(z)===R.type){n(E,R.sibling),w=s(R,I.props),w.ref=so(E,R,I),w.return=E,E=w;break e}n(E,R);break}else e(E,R);R=R.sibling}I.type===$s?(w=fs(I.props.children,E.mode,D,I.key),w.return=E,E=w):(D=vl(I.type,I.key,I.props,null,E.mode,D),D.ref=so(E,w,I),D.return=E,E=D)}return o(E);case Bs:e:{for(R=I.key;w!==null;){if(w.key===R)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){n(E,w.sibling),w=s(w,I.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=Ku(I,E.mode,D),w.return=E,E=w}return o(E);case fr:return R=I._init,L(E,w,R(I._payload),D)}if(lo(I))return A(E,w,I,D);if(Zi(I))return j(E,w,I,D);Ya(E,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(n(E,w.sibling),w=s(w,I),w.return=E,E=w):(n(E,w),w=qu(I,E.mode,D),w.return=E,E=w),o(E)):n(E,w)}return L}var pi=cv(!0),uv=cv(!1),$l=Kr(null),Hl=null,Js=null,sf=null;function of(){sf=Js=Hl=null}function af(t){var e=$l.current;Pe($l),t._currentValue=e}function Ld(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ii(t,e){Hl=t,sf=Js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(sf!==t)if(t={context:t,memoizedValue:e,next:null},Js===null){if(Hl===null)throw Error(W(308));Js=t,Hl.dependencies={lanes:0,firstContext:t}}else Js=Js.next=t;return e}var cs=null;function lf(t){cs===null?cs=[t]:cs.push(t)}function dv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,lf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Qn(t,r)}function Qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mr=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ye&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Qn(t,n)}return s=r.interleaved,s===null?(e.next=e,lf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Qn(t,n)}function hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}function $p(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wl(t,e,n,r){var s=t.updateQueue;mr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var u=c,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var m=t.alternate;m!==null&&(m=m.updateQueue,c=m.lastBaseUpdate,c!==o&&(c===null?m.firstBaseUpdate=h:c.next=h,m.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,m=h=u=null,c=i;do{var g=c.lane,N=c.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:N,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var A=t,j=c;switch(g=e,N=n,j.tag){case 1:if(A=j.payload,typeof A=="function"){p=A.call(N,p,g);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=j.payload,g=typeof A=="function"?A.call(N,p,g):A,g==null)break e;p=Oe({},p,g);break e;case 2:mr=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[c]:g.push(c))}else N={eventTime:N,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},m===null?(h=m=N,u=p):m=m.next=N,o|=g;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;g=c,c=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(m===null&&(u=p),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);vs|=o,t.lanes=o,t.memoizedState=p}}function Hp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(W(191,s));s.call(r)}}}var ha={},En=Kr(ha),Wo=Kr(ha),qo=Kr(ha);function us(t){if(t===ha)throw Error(W(174));return t}function uf(t,e){switch(Te(qo,e),Te(Wo,t),Te(En,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gd(e,t)}Pe(En),Te(En,e)}function gi(){Pe(En),Pe(Wo),Pe(qo)}function fv(t){us(qo.current);var e=us(En.current),n=gd(e,t.type);e!==n&&(Te(Wo,t),Te(En,n))}function df(t){Wo.current===t&&(Pe(En),Pe(Wo))}var De=Kr(0);function ql(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zu=[];function hf(){for(var t=0;t<zu.length;t++)zu[t]._workInProgressVersionPrimary=null;zu.length=0}var fl=tr.ReactCurrentDispatcher,Fu=tr.ReactCurrentBatchConfig,ys=0,Le=null,Je=null,it=null,Kl=!1,So=!1,Ko=0,eS=0;function gt(){throw Error(W(321))}function ff(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!mn(t[n],e[n]))return!1;return!0}function mf(t,e,n,r,s,i){if(ys=i,Le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fl.current=t===null||t.memoizedState===null?sS:iS,t=n(r,s),So){i=0;do{if(So=!1,Ko=0,25<=i)throw Error(W(301));i+=1,it=Je=null,e.updateQueue=null,fl.current=oS,t=n(r,s)}while(So)}if(fl.current=Gl,e=Je!==null&&Je.next!==null,ys=0,it=Je=Le=null,Kl=!1,e)throw Error(W(300));return t}function pf(){var t=Ko!==0;return Ko=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?Le.memoizedState=it=t:it=it.next=t,it}function nn(){if(Je===null){var t=Le.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=it===null?Le.memoizedState:it.next;if(e!==null)it=e,Je=t;else{if(t===null)throw Error(W(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},it===null?Le.memoizedState=it=t:it=it.next=t}return it}function Go(t,e){return typeof e=="function"?e(t):e}function Bu(t){var e=nn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=Je,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var c=o=null,u=null,h=i;do{var m=h.lane;if((ys&m)===m)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(c=u=p,o=r):u=u.next=p,Le.lanes|=m,vs|=m}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=c,mn(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Le.lanes|=i,vs|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function $u(t){var e=nn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);mn(i,e.memoizedState)||(Pt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function mv(){}function pv(t,e){var n=Le,r=nn(),s=e(),i=!mn(r.memoizedState,s);if(i&&(r.memoizedState=s,Pt=!0),r=r.queue,gf(vv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||it!==null&&it.memoizedState.tag&1){if(n.flags|=2048,Qo(9,yv.bind(null,n,r,s,e),void 0,null),at===null)throw Error(W(349));ys&30||gv(n,e,s)}return s}function gv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yv(t,e,n,r){e.value=n,e.getSnapshot=r,xv(e)&&_v(t)}function vv(t,e,n){return n(function(){xv(e)&&_v(t)})}function xv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!mn(t,n)}catch{return!0}}function _v(t){var e=Qn(t,1);e!==null&&hn(e,t,1,-1)}function Wp(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=rS.bind(null,Le,t),[e.memoizedState,t]}function Qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Le.updateQueue,e===null?(e={lastEffect:null,stores:null},Le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function wv(){return nn().memoizedState}function ml(t,e,n,r){var s=_n();Le.flags|=t,s.memoizedState=Qo(1|e,n,void 0,r===void 0?null:r)}function kc(t,e,n,r){var s=nn();r=r===void 0?null:r;var i=void 0;if(Je!==null){var o=Je.memoizedState;if(i=o.destroy,r!==null&&ff(r,o.deps)){s.memoizedState=Qo(e,n,i,r);return}}Le.flags|=t,s.memoizedState=Qo(1|e,n,i,r)}function qp(t,e){return ml(8390656,8,t,e)}function gf(t,e){return kc(2048,8,t,e)}function bv(t,e){return kc(4,2,t,e)}function Sv(t,e){return kc(4,4,t,e)}function Ev(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Tv(t,e,n){return n=n!=null?n.concat([t]):null,kc(4,4,Ev.bind(null,e,t),n)}function yf(){}function Iv(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ff(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Nv(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ff(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Cv(t,e,n){return ys&21?(mn(n,e)||(n=j0(),Le.lanes|=n,vs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function tS(t,e){var n=be;be=n!==0&&4>n?n:4,t(!0);var r=Fu.transition;Fu.transition={};try{t(!1),e()}finally{be=n,Fu.transition=r}}function kv(){return nn().memoizedState}function nS(t,e,n){var r=Ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Av(t))Pv(e,n);else if(n=dv(t,e,n,r),n!==null){var s=It();hn(n,t,r,s),Rv(n,e,r)}}function rS(t,e,n){var r=Ar(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Av(t))Pv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,c=i(o,n);if(s.hasEagerState=!0,s.eagerState=c,mn(c,o)){var u=e.interleaved;u===null?(s.next=s,lf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=dv(t,e,s,r),n!==null&&(s=It(),hn(n,t,r,s),Rv(n,e,r))}}function Av(t){var e=t.alternate;return t===Le||e!==null&&e===Le}function Pv(t,e){So=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Rv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Kh(t,n)}}var Gl={readContext:tn,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},sS={readContext:tn,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:qp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,Ev.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nS.bind(null,Le,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:Wp,useDebugValue:yf,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=Wp(!1),e=t[0];return t=tS.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Le,s=_n();if(je){if(n===void 0)throw Error(W(407));n=n()}else{if(n=e(),at===null)throw Error(W(349));ys&30||gv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,qp(vv.bind(null,r,i,t),[t]),r.flags|=2048,Qo(9,yv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=_n(),e=at.identifierPrefix;if(je){var n=Fn,r=zn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iS={readContext:tn,useCallback:Iv,useContext:tn,useEffect:gf,useImperativeHandle:Tv,useInsertionEffect:bv,useLayoutEffect:Sv,useMemo:Nv,useReducer:Bu,useRef:wv,useState:function(){return Bu(Go)},useDebugValue:yf,useDeferredValue:function(t){var e=nn();return Cv(e,Je.memoizedState,t)},useTransition:function(){var t=Bu(Go)[0],e=nn().memoizedState;return[t,e]},useMutableSource:mv,useSyncExternalStore:pv,useId:kv,unstable_isNewReconciler:!1},oS={readContext:tn,useCallback:Iv,useContext:tn,useEffect:gf,useImperativeHandle:Tv,useInsertionEffect:bv,useLayoutEffect:Sv,useMemo:Nv,useReducer:$u,useRef:wv,useState:function(){return $u(Go)},useDebugValue:yf,useDeferredValue:function(t){var e=nn();return Je===null?e.memoizedState=t:Cv(e,Je.memoizedState,t)},useTransition:function(){var t=$u(Go)[0],e=nn().memoizedState;return[t,e]},useMutableSource:mv,useSyncExternalStore:pv,useId:kv,unstable_isNewReconciler:!1};function on(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Od(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ac={isMounted:function(t){return(t=t._reactInternals)?Is(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=It(),s=Ar(t),i=Hn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Cr(t,i,s),e!==null&&(hn(e,t,s,r),hl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=It(),s=Ar(t),i=Hn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Cr(t,i,s),e!==null&&(hn(e,t,s,r),hl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=It(),r=Ar(t),s=Hn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Cr(t,s,r),e!==null&&(hn(e,t,r,n),hl(e,t,r))}};function Kp(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,r)||!Fo(s,i):!0}function jv(t,e,n){var r=!1,s=Vr,i=e.contextType;return typeof i=="object"&&i!==null?i=tn(i):(s=jt(e)?ps:bt.current,r=e.contextTypes,i=(r=r!=null)?fi(t,s):Vr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ac,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Gp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ac.enqueueReplaceState(e,e.state,null)}function Vd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},cf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=tn(i):(i=jt(e)?ps:bt.current,s.context=fi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Od(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ac.enqueueReplaceState(s,s.state,null),Wl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function yi(t,e){try{var n="",r=e;do n+=D1(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Hu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aS=typeof WeakMap=="function"?WeakMap:Map;function Dv(t,e,n){n=Hn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yl||(Yl=!0,Qd=r),Ud(t,e)},n}function Mv(t,e,n){n=Hn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Ud(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ud(t,e),typeof r!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new aS;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=wS.bind(null,t,e,n),e.then(t,t))}function Yp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jp(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hn(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var lS=tr.ReactCurrentOwner,Pt=!1;function Tt(t,e,n,r){e.child=t===null?uv(e,null,n,r):pi(e,t.child,n,r)}function Xp(t,e,n,r,s){n=n.render;var i=e.ref;return ii(e,s),r=mf(t,e,n,r,i,s),n=pf(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Yn(t,e,s)):(je&&n&&tf(e),e.flags|=1,Tt(t,e,r,s),e.child)}function Zp(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Tf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Lv(t,e,i,r,s)):(t=vl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,r)&&t.ref===e.ref)return Yn(t,e,s)}return e.flags|=1,t=Pr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Lv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Fo(i,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,Yn(t,e,s)}return zd(t,e,n,r,s)}function Ov(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Zs,Ot),Ot|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(Zs,Ot),Ot|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Te(Zs,Ot),Ot|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Te(Zs,Ot),Ot|=r;return Tt(t,e,s,n),e.child}function Vv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zd(t,e,n,r,s){var i=jt(n)?ps:bt.current;return i=fi(e,i),ii(e,s),n=mf(t,e,n,r,i,s),r=pf(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Yn(t,e,s)):(je&&r&&tf(e),e.flags|=1,Tt(t,e,n,s),e.child)}function eg(t,e,n,r,s){if(jt(n)){var i=!0;zl(e)}else i=!1;if(ii(e,s),e.stateNode===null)pl(t,e),jv(e,n,r),Vd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,c=e.memoizedProps;o.props=c;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=tn(h):(h=jt(n)?ps:bt.current,h=fi(e,h));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||u!==h)&&Gp(e,o,r,h),mr=!1;var g=e.memoizedState;o.state=g,Wl(e,r,o,s),u=e.memoizedState,c!==r||g!==u||Rt.current||mr?(typeof m=="function"&&(Od(e,n,m,r),u=e.memoizedState),(c=mr||Kp(e,n,c,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=c):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,hv(t,e),c=e.memoizedProps,h=e.type===e.elementType?c:on(e.type,c),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=tn(u):(u=jt(n)?ps:bt.current,u=fi(e,u));var N=n.getDerivedStateFromProps;(m=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==p||g!==u)&&Gp(e,o,r,u),mr=!1,g=e.memoizedState,o.state=g,Wl(e,r,o,s);var A=e.memoizedState;c!==p||g!==A||Rt.current||mr?(typeof N=="function"&&(Od(e,n,N,r),A=e.memoizedState),(h=mr||Kp(e,n,h,r,g,A,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Fd(t,e,n,r,i,s)}function Fd(t,e,n,r,s,i){Vv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Up(e,n,!1),Yn(t,e,i);r=e.stateNode,lS.current=e;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=pi(e,t.child,null,i),e.child=pi(e,null,c,i)):Tt(t,e,c,i),e.memoizedState=r.state,s&&Up(e,n,!0),e.child}function Uv(t){var e=t.stateNode;e.pendingContext?Vp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vp(t,e.context,!1),uf(t,e.containerInfo)}function tg(t,e,n,r,s){return mi(),rf(s),e.flags|=256,Tt(t,e,n,r),e.child}var Bd={dehydrated:null,treeContext:null,retryLane:0};function $d(t){return{baseLanes:t,cachePool:null,transitions:null}}function zv(t,e,n){var r=e.pendingProps,s=De.current,i=!1,o=(e.flags&128)!==0,c;if((c=o)||(c=t!==null&&t.memoizedState===null?!1:(s&2)!==0),c?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Te(De,s&1),t===null)return Md(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=jc(o,r,0,null),t=fs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=$d(n),e.memoizedState=Bd,t):vf(e,o));if(s=t.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return cS(t,e,o,r,c,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,c=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Pr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),c!==null?i=Pr(c,i):(i=fs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?$d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Bd,r}return i=t.child,t=i.sibling,r=Pr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vf(t,e){return e=jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,r){return r!==null&&rf(r),pi(e,t.child,null,n),t=vf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cS(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Hu(Error(W(422))),Ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=jc({mode:"visible",children:r.children},s,0,null),i=fs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&pi(e,t.child,null,o),e.child.memoizedState=$d(o),e.memoizedState=Bd,i);if(!(e.mode&1))return Ja(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(W(419)),r=Hu(i,r,void 0),Ja(t,e,o,r)}if(c=(o&t.childLanes)!==0,Pt||c){if(r=at,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Qn(t,s),hn(r,t,s,-1))}return Ef(),r=Hu(Error(W(421))),Ja(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=bS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Vt=Nr(s.nextSibling),Ut=e,je=!0,ln=null,t!==null&&(Gt[Qt++]=zn,Gt[Qt++]=Fn,Gt[Qt++]=gs,zn=t.id,Fn=t.overflow,gs=e),e=vf(e,r.children),e.flags|=4096,e)}function ng(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ld(t.return,e,n)}function Wu(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Fv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Tt(t,e,r.children,n),r=De.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ng(t,n,e);else if(t.tag===19)ng(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(De,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ql(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Wu(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ql(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Wu(e,!0,n,null,i);break;case"together":Wu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(W(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uS(t,e,n){switch(e.tag){case 3:Uv(e),mi();break;case 5:fv(e);break;case 1:jt(e.type)&&zl(e);break;case 4:uf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Te($l,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(De,De.current&1),e.flags|=128,null):n&e.child.childLanes?zv(t,e,n):(Te(De,De.current&1),t=Yn(t,e,n),t!==null?t.sibling:null);Te(De,De.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Fv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Te(De,De.current),r)break;return null;case 22:case 23:return e.lanes=0,Ov(t,e,n)}return Yn(t,e,n)}var Bv,Hd,$v,Hv;Bv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hd=function(){};$v=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,us(En.current);var i=null;switch(n){case"input":s=hd(t,s),r=hd(t,r),i=[];break;case"select":s=Oe({},s,{value:void 0}),r=Oe({},r,{value:void 0}),i=[];break;case"textarea":s=pd(t,s),r=pd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vl)}yd(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var c=s[h];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Do.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(c=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==c&&(u!=null||c!=null))if(h==="style")if(c){for(o in c)!c.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&c[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Do.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ke("scroll",t),i||c===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Hv=function(t,e,n,r){n!==r&&(e.flags|=4)};function io(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function dS(t,e,n){var r=e.pendingProps;switch(nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(e),null;case 1:return jt(e.type)&&Ul(),yt(e),null;case 3:return r=e.stateNode,gi(),Pe(Rt),Pe(bt),hf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ln!==null&&(Xd(ln),ln=null))),Hd(t,e),yt(e),null;case 5:df(e);var s=us(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)$v(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(W(166));return yt(e),null}if(t=us(En.current),Qa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[bn]=e,r[Ho]=i,t=(e.mode&1)!==0,n){case"dialog":ke("cancel",r),ke("close",r);break;case"iframe":case"object":case"embed":ke("load",r);break;case"video":case"audio":for(s=0;s<uo.length;s++)ke(uo[s],r);break;case"source":ke("error",r);break;case"img":case"image":case"link":ke("error",r),ke("load",r);break;case"details":ke("toggle",r);break;case"input":dp(r,i),ke("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ke("invalid",r);break;case"textarea":fp(r,i),ke("invalid",r)}yd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&Ga(r.textContent,c,t),s=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&Ga(r.textContent,c,t),s=["children",""+c]):Do.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&ke("scroll",r)}switch(n){case"input":za(r),hp(r,i,!0);break;case"textarea":za(r),mp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Vl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=v0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bn]=e,t[Ho]=r,Bv(t,e,!1,!1),e.stateNode=t;e:{switch(o=vd(n,r),n){case"dialog":ke("cancel",t),ke("close",t),s=r;break;case"iframe":case"object":case"embed":ke("load",t),s=r;break;case"video":case"audio":for(s=0;s<uo.length;s++)ke(uo[s],t);s=r;break;case"source":ke("error",t),s=r;break;case"img":case"image":case"link":ke("error",t),ke("load",t),s=r;break;case"details":ke("toggle",t),s=r;break;case"input":dp(t,r),s=hd(t,r),ke("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Oe({},r,{value:void 0}),ke("invalid",t);break;case"textarea":fp(t,r),s=pd(t,r),ke("invalid",t);break;default:s=r}yd(n,s),c=s;for(i in c)if(c.hasOwnProperty(i)){var u=c[i];i==="style"?w0(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&x0(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Mo(t,u):typeof u=="number"&&Mo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Do.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ke("scroll",t):u!=null&&Fh(t,i,u,o))}switch(n){case"input":za(t),hp(t,r,!1);break;case"textarea":za(t),mp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Or(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ti(t,!!r.multiple,i,!1):r.defaultValue!=null&&ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return yt(e),null;case 6:if(t&&e.stateNode!=null)Hv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(W(166));if(n=us(qo.current),us(En.current),Qa(e)){if(r=e.stateNode,n=e.memoizedProps,r[bn]=e,(i=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:Ga(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bn]=e,e.stateNode=r}return yt(e),null;case 13:if(Pe(De),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&Vt!==null&&e.mode&1&&!(e.flags&128))lv(),mi(),e.flags|=98560,i=!1;else if(i=Qa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(W(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(W(317));i[bn]=e}else mi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;yt(e),i=!1}else ln!==null&&(Xd(ln),ln=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||De.current&1?Ze===0&&(Ze=3):Ef())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:return gi(),Hd(t,e),t===null&&Bo(e.stateNode.containerInfo),yt(e),null;case 10:return af(e.type._context),yt(e),null;case 17:return jt(e.type)&&Ul(),yt(e),null;case 19:if(Pe(De),i=e.memoizedState,i===null)return yt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)io(i,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ql(t),o!==null){for(e.flags|=128,io(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(De,De.current&1|2),e.child}t=t.sibling}i.tail!==null&&He()>vi&&(e.flags|=128,r=!0,io(i,!1),e.lanes=4194304)}else{if(!r)if(t=ql(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!je)return yt(e),null}else 2*He()-i.renderingStartTime>vi&&n!==1073741824&&(e.flags|=128,r=!0,io(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=He(),e.sibling=null,n=De.current,Te(De,r?n&1|2:n&1),e):(yt(e),null);case 22:case 23:return Sf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ot&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}throw Error(W(156,e.tag))}function hS(t,e){switch(nf(e),e.tag){case 1:return jt(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return gi(),Pe(Rt),Pe(bt),hf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return df(e),null;case 13:if(Pe(De),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(W(340));mi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Pe(De),null;case 4:return gi(),null;case 10:return af(e.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var Xa=!1,_t=!1,fS=typeof WeakSet=="function"?WeakSet:Set,X=null;function Xs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(t,e,r)}else n.current=null}function Wd(t,e,n){try{n()}catch(r){ze(t,e,r)}}var rg=!1;function mS(t,e){if(Cd=Ml,t=Q0(),ef(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,c=-1,u=-1,h=0,m=0,p=t,g=null;t:for(;;){for(var N;p!==n||s!==0&&p.nodeType!==3||(c=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(N=p.firstChild)!==null;)g=p,p=N;for(;;){if(p===t)break t;if(g===n&&++h===s&&(c=o),g===i&&++m===r&&(u=o),(N=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=N}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kd={focusedElem:t,selectionRange:n},Ml=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var j=A.memoizedProps,L=A.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?j:on(e.type,j),L);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(D){ze(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return A=rg,rg=!1,A}function Eo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Wd(e,n,i)}s=s.next}while(s!==r)}}function Pc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bn],delete e[Ho],delete e[Rd],delete e[Yb],delete e[Jb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qv(t){return t.tag===5||t.tag===3||t.tag===4}function sg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(r!==4&&(t=t.child,t!==null))for(Kd(t,e,n),t=t.sibling;t!==null;)Kd(t,e,n),t=t.sibling}function Gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}var ut=null,an=!1;function dr(t,e,n){for(n=n.child;n!==null;)Kv(t,e,n),n=n.sibling}function Kv(t,e,n){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(Sc,n)}catch{}switch(n.tag){case 5:_t||Xs(n,e);case 6:var r=ut,s=an;ut=null,dr(t,e,n),ut=r,an=s,ut!==null&&(an?(t=ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ut.removeChild(n.stateNode));break;case 18:ut!==null&&(an?(t=ut,n=n.stateNode,t.nodeType===8?Vu(t.parentNode,n):t.nodeType===1&&Vu(t,n),Uo(t)):Vu(ut,n.stateNode));break;case 4:r=ut,s=an,ut=n.stateNode.containerInfo,an=!0,dr(t,e,n),ut=r,an=s;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Wd(n,e,o),s=s.next}while(s!==r)}dr(t,e,n);break;case 1:if(!_t&&(Xs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ze(n,e,c)}dr(t,e,n);break;case 21:dr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,dr(t,e,n),_t=r):dr(t,e,n);break;default:dr(t,e,n)}}function ig(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fS),e.forEach(function(r){var s=SS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,c=o;e:for(;c!==null;){switch(c.tag){case 5:ut=c.stateNode,an=!1;break e;case 3:ut=c.stateNode.containerInfo,an=!0;break e;case 4:ut=c.stateNode.containerInfo,an=!0;break e}c=c.return}if(ut===null)throw Error(W(160));Kv(i,o,s),ut=null,an=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){ze(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gv(e,t),e=e.sibling}function Gv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(sn(e,t),xn(t),r&4){try{Eo(3,t,t.return),Pc(3,t)}catch(j){ze(t,t.return,j)}try{Eo(5,t,t.return)}catch(j){ze(t,t.return,j)}}break;case 1:sn(e,t),xn(t),r&512&&n!==null&&Xs(n,n.return);break;case 5:if(sn(e,t),xn(t),r&512&&n!==null&&Xs(n,n.return),t.flags&32){var s=t.stateNode;try{Mo(s,"")}catch(j){ze(t,t.return,j)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,c=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&g0(s,i),vd(c,o);var h=vd(c,i);for(o=0;o<u.length;o+=2){var m=u[o],p=u[o+1];m==="style"?w0(s,p):m==="dangerouslySetInnerHTML"?x0(s,p):m==="children"?Mo(s,p):Fh(s,m,p,h)}switch(c){case"input":fd(s,i);break;case"textarea":y0(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?ti(s,!!i.multiple,N,!1):g!==!!i.multiple&&(i.defaultValue!=null?ti(s,!!i.multiple,i.defaultValue,!0):ti(s,!!i.multiple,i.multiple?[]:"",!1))}s[Ho]=i}catch(j){ze(t,t.return,j)}}break;case 6:if(sn(e,t),xn(t),r&4){if(t.stateNode===null)throw Error(W(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(j){ze(t,t.return,j)}}break;case 3:if(sn(e,t),xn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(j){ze(t,t.return,j)}break;case 4:sn(e,t),xn(t);break;case 13:sn(e,t),xn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(wf=He())),r&4&&ig(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(h=_t)||m,sn(e,t),_t=h):sn(e,t),xn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!m&&t.mode&1)for(X=t,m=t.child;m!==null;){for(p=X=m;X!==null;){switch(g=X,N=g.child,g.tag){case 0:case 11:case 14:case 15:Eo(4,g,g.return);break;case 1:Xs(g,g.return);var A=g.stateNode;if(typeof A.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(j){ze(r,n,j)}}break;case 5:Xs(g,g.return);break;case 22:if(g.memoizedState!==null){ag(p);continue}}N!==null?(N.return=g,X=N):ag(p)}m=m.sibling}e:for(m=null,p=t;;){if(p.tag===5){if(m===null){m=p;try{s=p.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=_0("display",o))}catch(j){ze(t,t.return,j)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(j){ze(t,t.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:sn(e,t),xn(t),r&4&&ig(t);break;case 21:break;default:sn(e,t),xn(t)}}function xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qv(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Mo(s,""),r.flags&=-33);var i=sg(t);Gd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,c=sg(t);Kd(t,c,o);break;default:throw Error(W(161))}}catch(u){ze(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pS(t,e,n){X=t,Qv(t)}function Qv(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var s=X,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Xa;if(!o){var c=s.alternate,u=c!==null&&c.memoizedState!==null||_t;c=Xa;var h=_t;if(Xa=o,(_t=u)&&!h)for(X=s;X!==null;)o=X,u=o.child,o.tag===22&&o.memoizedState!==null?lg(s):u!==null?(u.return=o,X=u):lg(s);for(;i!==null;)X=i,Qv(i),i=i.sibling;X=s,Xa=c,_t=h}og(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,X=i):og(t)}}function og(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||Pc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:on(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Hp(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hp(e,o,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Uo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}_t||e.flags&512&&qd(e)}catch(g){ze(e,e.return,g)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function ag(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function lg(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pc(4,e)}catch(u){ze(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){ze(e,s,u)}}var i=e.return;try{qd(e)}catch(u){ze(e,i,u)}break;case 5:var o=e.return;try{qd(e)}catch(u){ze(e,o,u)}}}catch(u){ze(e,e.return,u)}if(e===t){X=null;break}var c=e.sibling;if(c!==null){c.return=e.return,X=c;break}X=e.return}}var gS=Math.ceil,Ql=tr.ReactCurrentDispatcher,xf=tr.ReactCurrentOwner,en=tr.ReactCurrentBatchConfig,ye=0,at=null,Ge=null,ft=0,Ot=0,Zs=Kr(0),Ze=0,Yo=null,vs=0,Rc=0,_f=0,To=null,At=null,wf=0,vi=1/0,Mn=null,Yl=!1,Qd=null,kr=null,Za=!1,br=null,Jl=0,Io=0,Yd=null,gl=-1,yl=0;function It(){return ye&6?He():gl!==-1?gl:gl=He()}function Ar(t){return t.mode&1?ye&2&&ft!==0?ft&-ft:Zb.transition!==null?(yl===0&&(yl=j0()),yl):(t=be,t!==0||(t=window.event,t=t===void 0?16:z0(t.type)),t):1}function hn(t,e,n,r){if(50<Io)throw Io=0,Yd=null,Error(W(185));ca(t,n,r),(!(ye&2)||t!==at)&&(t===at&&(!(ye&2)&&(Rc|=n),Ze===4&&gr(t,ft)),Dt(t,r),n===1&&ye===0&&!(e.mode&1)&&(vi=He()+500,Cc&&Gr()))}function Dt(t,e){var n=t.callbackNode;Z1(t,e);var r=Dl(t,t===at?ft:0);if(r===0)n!==null&&yp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&yp(n),e===1)t.tag===0?Xb(cg.bind(null,t)):iv(cg.bind(null,t)),Gb(function(){!(ye&6)&&Gr()}),n=null;else{switch(D0(r)){case 1:n=qh;break;case 4:n=P0;break;case 16:n=jl;break;case 536870912:n=R0;break;default:n=jl}n=rx(n,Yv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Yv(t,e){if(gl=-1,yl=0,ye&6)throw Error(W(327));var n=t.callbackNode;if(oi()&&t.callbackNode!==n)return null;var r=Dl(t,t===at?ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Xl(t,r);else{e=r;var s=ye;ye|=2;var i=Xv();(at!==t||ft!==e)&&(Mn=null,vi=He()+500,hs(t,e));do try{xS();break}catch(c){Jv(t,c)}while(!0);of(),Ql.current=i,ye=s,Ge!==null?e=0:(at=null,ft=0,e=Ze)}if(e!==0){if(e===2&&(s=Sd(t),s!==0&&(r=s,e=Jd(t,s))),e===1)throw n=Yo,hs(t,0),gr(t,r),Dt(t,He()),n;if(e===6)gr(t,r);else{if(s=t.current.alternate,!(r&30)&&!yS(s)&&(e=Xl(t,r),e===2&&(i=Sd(t),i!==0&&(r=i,e=Jd(t,i))),e===1))throw n=Yo,hs(t,0),gr(t,r),Dt(t,He()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(W(345));case 2:os(t,At,Mn);break;case 3:if(gr(t,r),(r&130023424)===r&&(e=wf+500-He(),10<e)){if(Dl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){It(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Pd(os.bind(null,t,At,Mn),e);break}os(t,At,Mn);break;case 4:if(gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-dn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=He()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gS(r/1960))-r,10<r){t.timeoutHandle=Pd(os.bind(null,t,At,Mn),r);break}os(t,At,Mn);break;case 5:os(t,At,Mn);break;default:throw Error(W(329))}}}return Dt(t,He()),t.callbackNode===n?Yv.bind(null,t):null}function Jd(t,e){var n=To;return t.current.memoizedState.isDehydrated&&(hs(t,e).flags|=256),t=Xl(t,e),t!==2&&(e=At,At=n,e!==null&&Xd(e)),t}function Xd(t){At===null?At=t:At.push.apply(At,t)}function yS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!mn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(t,e){for(e&=~_f,e&=~Rc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function cg(t){if(ye&6)throw Error(W(327));oi();var e=Dl(t,0);if(!(e&1))return Dt(t,He()),null;var n=Xl(t,e);if(t.tag!==0&&n===2){var r=Sd(t);r!==0&&(e=r,n=Jd(t,r))}if(n===1)throw n=Yo,hs(t,0),gr(t,e),Dt(t,He()),n;if(n===6)throw Error(W(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,os(t,At,Mn),Dt(t,He()),null}function bf(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&(vi=He()+500,Cc&&Gr())}}function xs(t){br!==null&&br.tag===0&&!(ye&6)&&oi();var e=ye;ye|=1;var n=en.transition,r=be;try{if(en.transition=null,be=1,t)return t()}finally{be=r,en.transition=n,ye=e,!(ye&6)&&Gr()}}function Sf(){Ot=Zs.current,Pe(Zs)}function hs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kb(n)),Ge!==null)for(n=Ge.return;n!==null;){var r=n;switch(nf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ul();break;case 3:gi(),Pe(Rt),Pe(bt),hf();break;case 5:df(r);break;case 4:gi();break;case 13:Pe(De);break;case 19:Pe(De);break;case 10:af(r.type._context);break;case 22:case 23:Sf()}n=n.return}if(at=t,Ge=t=Pr(t.current,null),ft=Ot=e,Ze=0,Yo=null,_f=Rc=vs=0,At=To=null,cs!==null){for(e=0;e<cs.length;e++)if(n=cs[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}cs=null}return t}function Jv(t,e){do{var n=Ge;try{if(of(),fl.current=Gl,Kl){for(var r=Le.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Kl=!1}if(ys=0,it=Je=Le=null,So=!1,Ko=0,xf.current=null,n===null||n.return===null){Ze=1,Yo=e,Ge=null;break}e:{var i=t,o=n.return,c=n,u=e;if(e=ft,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,m=c,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var N=Yp(o);if(N!==null){N.flags&=-257,Jp(N,o,c,i,e),N.mode&1&&Qp(i,h,e),e=N,u=h;var A=e.updateQueue;if(A===null){var j=new Set;j.add(u),e.updateQueue=j}else A.add(u);break e}else{if(!(e&1)){Qp(i,h,e),Ef();break e}u=Error(W(426))}}else if(je&&c.mode&1){var L=Yp(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Jp(L,o,c,i,e),rf(yi(u,c));break e}}i=u=yi(u,c),Ze!==4&&(Ze=2),To===null?To=[i]:To.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var E=Dv(i,u,e);$p(i,E);break e;case 1:c=u;var w=i.type,I=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(kr===null||!kr.has(I)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=Mv(i,c,e);$p(i,D);break e}}i=i.return}while(i!==null)}ex(n)}catch(z){e=z,Ge===n&&n!==null&&(Ge=n=n.return);continue}break}while(!0)}function Xv(){var t=Ql.current;return Ql.current=Gl,t===null?Gl:t}function Ef(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),at===null||!(vs&268435455)&&!(Rc&268435455)||gr(at,ft)}function Xl(t,e){var n=ye;ye|=2;var r=Xv();(at!==t||ft!==e)&&(Mn=null,hs(t,e));do try{vS();break}catch(s){Jv(t,s)}while(!0);if(of(),ye=n,Ql.current=r,Ge!==null)throw Error(W(261));return at=null,ft=0,Ze}function vS(){for(;Ge!==null;)Zv(Ge)}function xS(){for(;Ge!==null&&!H1();)Zv(Ge)}function Zv(t){var e=nx(t.alternate,t,Ot);t.memoizedProps=t.pendingProps,e===null?ex(t):Ge=e,xf.current=null}function ex(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hS(n,e),n!==null){n.flags&=32767,Ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Ge=null;return}}else if(n=dS(n,e,Ot),n!==null){Ge=n;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);Ze===0&&(Ze=5)}function os(t,e,n){var r=be,s=en.transition;try{en.transition=null,be=1,_S(t,e,n,r)}finally{en.transition=s,be=r}return null}function _S(t,e,n,r){do oi();while(br!==null);if(ye&6)throw Error(W(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(W(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(eb(t,i),t===at&&(Ge=at=null,ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,rx(jl,function(){return oi(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=en.transition,en.transition=null;var o=be;be=1;var c=ye;ye|=4,xf.current=null,mS(t,n),Gv(n,t),zb(kd),Ml=!!Cd,kd=Cd=null,t.current=n,pS(n),W1(),ye=c,be=o,en.transition=i}else t.current=n;if(Za&&(Za=!1,br=t,Jl=s),i=t.pendingLanes,i===0&&(kr=null),G1(n.stateNode),Dt(t,He()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Yl)throw Yl=!1,t=Qd,Qd=null,t;return Jl&1&&t.tag!==0&&oi(),i=t.pendingLanes,i&1?t===Yd?Io++:(Io=0,Yd=t):Io=0,Gr(),null}function oi(){if(br!==null){var t=D0(Jl),e=en.transition,n=be;try{if(en.transition=null,be=16>t?16:t,br===null)var r=!1;else{if(t=br,br=null,Jl=0,ye&6)throw Error(W(331));var s=ye;for(ye|=4,X=t.current;X!==null;){var i=X,o=i.child;if(X.flags&16){var c=i.deletions;if(c!==null){for(var u=0;u<c.length;u++){var h=c[u];for(X=h;X!==null;){var m=X;switch(m.tag){case 0:case 11:case 15:Eo(8,m,i)}var p=m.child;if(p!==null)p.return=m,X=p;else for(;X!==null;){m=X;var g=m.sibling,N=m.return;if(Wv(m),m===h){X=null;break}if(g!==null){g.return=N,X=g;break}X=N}}}var A=i.alternate;if(A!==null){var j=A.child;if(j!==null){A.child=null;do{var L=j.sibling;j.sibling=null,j=L}while(j!==null)}}X=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,X=o;else e:for(;X!==null;){if(i=X,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Eo(9,i,i.return)}var E=i.sibling;if(E!==null){E.return=i.return,X=E;break e}X=i.return}}var w=t.current;for(X=w;X!==null;){o=X;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,X=I;else e:for(o=w;X!==null;){if(c=X,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Pc(9,c)}}catch(z){ze(c,c.return,z)}if(c===o){X=null;break e}var D=c.sibling;if(D!==null){D.return=c.return,X=D;break e}X=c.return}}if(ye=s,Gr(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(Sc,t)}catch{}r=!0}return r}finally{be=n,en.transition=e}}return!1}function ug(t,e,n){e=yi(n,e),e=Dv(t,e,1),t=Cr(t,e,1),e=It(),t!==null&&(ca(t,1,e),Dt(t,e))}function ze(t,e,n){if(t.tag===3)ug(t,t,n);else for(;e!==null;){if(e.tag===3){ug(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kr===null||!kr.has(r))){t=yi(n,t),t=Mv(e,t,1),e=Cr(e,t,1),t=It(),e!==null&&(ca(e,1,t),Dt(e,t));break}}e=e.return}}function wS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=It(),t.pingedLanes|=t.suspendedLanes&n,at===t&&(ft&n)===n&&(Ze===4||Ze===3&&(ft&130023424)===ft&&500>He()-wf?hs(t,0):_f|=n),Dt(t,e)}function tx(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=It();t=Qn(t,e),t!==null&&(ca(t,e,n),Dt(t,n))}function bS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tx(t,n)}function SS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(e),tx(t,n)}var nx;nx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,uS(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,je&&e.flags&1048576&&ov(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pl(t,e),t=e.pendingProps;var s=fi(e,bt.current);ii(e,n),s=mf(null,e,r,t,s,n);var i=pf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(i=!0,zl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,cf(e),s.updater=Ac,e.stateNode=s,s._reactInternals=e,Vd(e,r,t,n),e=Fd(null,e,r,!0,i,n)):(e.tag=0,je&&i&&tf(e),Tt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=TS(r),t=on(r,t),s){case 0:e=zd(null,e,r,t,n);break e;case 1:e=eg(null,e,r,t,n);break e;case 11:e=Xp(null,e,r,t,n);break e;case 14:e=Zp(null,e,r,on(r.type,t),n);break e}throw Error(W(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),zd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),eg(t,e,r,s,n);case 3:e:{if(Uv(e),t===null)throw Error(W(387));r=e.pendingProps,i=e.memoizedState,s=i.element,hv(t,e),Wl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=yi(Error(W(423)),e),e=tg(t,e,r,n,s);break e}else if(r!==s){s=yi(Error(W(424)),e),e=tg(t,e,r,n,s);break e}else for(Vt=Nr(e.stateNode.containerInfo.firstChild),Ut=e,je=!0,ln=null,n=uv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mi(),r===s){e=Yn(t,e,n);break e}Tt(t,e,r,n)}e=e.child}return e;case 5:return fv(e),t===null&&Md(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Ad(r,s)?o=null:i!==null&&Ad(r,i)&&(e.flags|=32),Vv(t,e),Tt(t,e,o,n),e.child;case 6:return t===null&&Md(e),null;case 13:return zv(t,e,n);case 4:return uf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=pi(e,null,r,n):Tt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),Xp(t,e,r,s,n);case 7:return Tt(t,e,e.pendingProps,n),e.child;case 8:return Tt(t,e,e.pendingProps.children,n),e.child;case 12:return Tt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Te($l,r._currentValue),r._currentValue=o,i!==null)if(mn(i.value,o)){if(i.children===s.children&&!Rt.current){e=Yn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){o=i.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Hn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?u.next=u:(u.next=m.next,m.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ld(i.return,n,e),c.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(W(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Ld(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Tt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ii(e,n),s=tn(s),r=r(s),e.flags|=1,Tt(t,e,r,n),e.child;case 14:return r=e.type,s=on(r,e.pendingProps),s=on(r.type,s),Zp(t,e,r,s,n);case 15:return Lv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:on(r,s),pl(t,e),e.tag=1,jt(r)?(t=!0,zl(e)):t=!1,ii(e,n),jv(e,r,s),Vd(e,r,s,n),Fd(null,e,r,!0,t,n);case 19:return Fv(t,e,n);case 22:return Ov(t,e,n)}throw Error(W(156,e.tag))};function rx(t,e){return A0(t,e)}function ES(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new ES(t,e,n,r)}function Tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TS(t){if(typeof t=="function")return Tf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$h)return 11;if(t===Hh)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Tf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $s:return fs(n.children,s,i,e);case Bh:o=8,s|=8;break;case ld:return t=Zt(12,n,e,s|2),t.elementType=ld,t.lanes=i,t;case cd:return t=Zt(13,n,e,s),t.elementType=cd,t.lanes=i,t;case ud:return t=Zt(19,n,e,s),t.elementType=ud,t.lanes=i,t;case f0:return jc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case d0:o=10;break e;case h0:o=9;break e;case $h:o=11;break e;case Hh:o=14;break e;case fr:o=16,r=null;break e}throw Error(W(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function fs(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function jc(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=f0,t.lanes=n,t.stateNode={isHidden:!1},t}function qu(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function Ku(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function If(t,e,n,r,s,i,o,c,u){return t=new IS(t,e,n,c,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Zt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(i),t}function NS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function sx(t){if(!t)return Vr;t=t._reactInternals;e:{if(Is(t)!==t||t.tag!==1)throw Error(W(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(W(171))}if(t.tag===1){var n=t.type;if(jt(n))return sv(t,n,e)}return e}function ix(t,e,n,r,s,i,o,c,u){return t=If(n,r,!0,t,s,i,o,c,u),t.context=sx(null),n=t.current,r=It(),s=Ar(n),i=Hn(r,s),i.callback=e??null,Cr(n,i,s),t.current.lanes=s,ca(t,s,r),Dt(t,r),t}function Dc(t,e,n,r){var s=e.current,i=It(),o=Ar(s);return n=sx(n),e.context===null?e.context=n:e.pendingContext=n,e=Hn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Cr(s,e,o),t!==null&&(hn(t,s,o,i),hl(t,s,o)),o}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nf(t,e){dg(t,e),(t=t.alternate)&&dg(t,e)}function CS(){return null}var ox=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cf(t){this._internalRoot=t}Mc.prototype.render=Cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(W(409));Dc(t,e,null,null)};Mc.prototype.unmount=Cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xs(function(){Dc(null,t,null,null)}),e[Gn]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var e=O0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&U0(t)}};function kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hg(){}function kS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=Zl(o);i.call(h)}}var o=ix(e,r,t,0,null,!1,!1,"",hg);return t._reactRootContainer=o,t[Gn]=o.current,Bo(t.nodeType===8?t.parentNode:t),xs(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var c=r;r=function(){var h=Zl(u);c.call(h)}}var u=If(t,0,!1,null,null,!1,!1,"",hg);return t._reactRootContainer=u,t[Gn]=u.current,Bo(t.nodeType===8?t.parentNode:t),xs(function(){Dc(e,u,n,r)}),u}function Oc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var c=s;s=function(){var u=Zl(o);c.call(u)}}Dc(e,o,t,s)}else o=kS(n,e,t,s,r);return Zl(o)}M0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=co(e.pendingLanes);n!==0&&(Kh(e,n|1),Dt(e,He()),!(ye&6)&&(vi=He()+500,Gr()))}break;case 13:xs(function(){var r=Qn(t,1);if(r!==null){var s=It();hn(r,t,1,s)}}),Nf(t,1)}};Gh=function(t){if(t.tag===13){var e=Qn(t,134217728);if(e!==null){var n=It();hn(e,t,134217728,n)}Nf(t,134217728)}};L0=function(t){if(t.tag===13){var e=Ar(t),n=Qn(t,e);if(n!==null){var r=It();hn(n,t,e,r)}Nf(t,e)}};O0=function(){return be};V0=function(t,e){var n=be;try{return be=t,e()}finally{be=n}};_d=function(t,e,n){switch(e){case"input":if(fd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Nc(r);if(!s)throw Error(W(90));p0(r),fd(r,s)}}}break;case"textarea":y0(t,n);break;case"select":e=n.value,e!=null&&ti(t,!!n.multiple,e,!1)}};E0=bf;T0=xs;var AS={usingClientEntryPoint:!1,Events:[da,Ks,Nc,b0,S0,bf]},oo={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},PS={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=C0(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||CS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Sc=el.inject(PS),Sn=el}catch{}}Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AS;Bt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kf(e))throw Error(W(200));return NS(t,e,null,n)};Bt.createRoot=function(t,e){if(!kf(t))throw Error(W(299));var n=!1,r="",s=ox;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=If(t,1,!1,null,null,n,!1,r,s),t[Gn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new Cf(e)};Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(W(188)):(t=Object.keys(t).join(","),Error(W(268,t)));return t=C0(e),t=t===null?null:t.stateNode,t};Bt.flushSync=function(t){return xs(t)};Bt.hydrate=function(t,e,n){if(!Lc(e))throw Error(W(200));return Oc(null,t,e,!0,n)};Bt.hydrateRoot=function(t,e,n){if(!kf(t))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=ox;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ix(e,null,t,1,n??null,s,!1,i,o),t[Gn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Mc(e)};Bt.render=function(t,e,n){if(!Lc(e))throw Error(W(200));return Oc(null,t,e,!1,n)};Bt.unmountComponentAtNode=function(t){if(!Lc(t))throw Error(W(40));return t._reactRootContainer?(xs(function(){Oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Gn]=null})}),!0):!1};Bt.unstable_batchedUpdates=bf;Bt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Lc(n))throw Error(W(200));if(t==null||t._reactInternals===void 0)throw Error(W(38));return Oc(t,e,n,!1,r)};Bt.version="18.3.1-next-f1338f8080-20240426";function ax(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ax)}catch(t){console.error(t)}}ax(),a0.exports=Bt;var RS=a0.exports,lx,fg=RS;lx=fg.createRoot,fg.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),de=(t,e)=>{const n=H.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:c="",children:u,...h},m)=>H.createElement("svg",{ref:m,...jS,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${DS(t)}`,c].join(" "),...h},[...e.map(([p,g])=>H.createElement(p,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=de("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=de("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=de("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=de("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=de("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=de("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=de("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=de("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=de("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=de("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=de("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=de("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=de("Gamepad2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=de("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=de("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=de("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=de("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=de("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=de("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=de("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=de("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=de("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=de("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=de("Puzzle",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=de("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=de("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=de("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=de("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=de("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=de("Sword",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=de("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=de("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=de("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=de("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=de("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=de("Wand2",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z",key:"1bcowg"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=de("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=de("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),WS={main:{name:"Story Levels",baseExpPerStar:15,completionBonus:10,timeBonus:15,noHintBonus:5,attemptPenalty:2,starRules:{description:"Story levels are the core curriculum with complex challenges",star1:"Complete the level (pass all tests)",star2:"+1 star for not using hints",star3:"+1 star for completing in under 60 seconds"}},puzzle:{name:"Code Puzzles",baseExpPerStar:10,completionBonus:5,timeBonus:10,noHintBonus:3,attemptPenalty:1,starRules:{description:"Quick coding challenges to practice specific concepts",star1:"Complete the puzzle (fill in blanks correctly)",star2:"+1 star for not viewing hints",star3:"+1 star for completing in under 60 seconds"}},dragdrop:{name:"Drag & Drop",baseExpPerStar:8,completionBonus:3,timeBonus:7,noHintBonus:2,attemptPenalty:1,starRules:{description:"Learn syntax by arranging code blocks in correct order",star1:"Arrange blocks in correct order",star2:"+1 star for first try (no mistakes)",star3:"+1 star for completing in under 60 seconds"}}};function Vn(t){const e=WS[t.mode];let n=0;n+=t.stars*e.baseExpPerStar,n+=e.completionBonus,t.timeTakenSeconds<=60&&(n+=e.timeBonus),t.usedHint||(n+=e.noHintBonus);const r=Math.max(0,Math.min(t.attempts-1,10));return n-=r*e.attemptPenalty,Math.max(1,n)}function _g(t){const e=Math.floor((t-1)/10);return 250+e*150+e*e*50}function oh(t){let e=1,n=0;for(;;){const i=_g(e);if(n+i>t)break;n+=i,e++}const r=t-n,s=_g(e);return{level:e,currentLevelExp:r,expToNextLevel:s}}const qS=({currentPage:t,onNavigate:e,user:n,onSignIn:r,onSignOut:s})=>{var m;const[i,o]=H.useState(0),c=(n==null?void 0:n.uid)||"guest";H.useEffect(()=>{const p=g=>{console.log("📢 [Navbar] Received update event:",g.type),o(N=>(console.log("🔄 [Navbar] Refreshing (trigger:",N,"→",N+1,")"),N+1))};return window.addEventListener("statsUpdate",p),window.addEventListener("storage",p),()=>{window.removeEventListener("statsUpdate",p),window.removeEventListener("storage",p)}},[]);const u=H.useMemo(()=>{if(c==="guest")return{level:1,exp:0,currentLevelExp:0,expToNextLevel:100,totalStars:0,activeTitle:"",username:""};const p=["javascript","java","python"];let g=0,N=0;p.forEach(I=>{for(let D=1;D<=150;D++){const z=`${c}_${I}_level_${D}_stars`,R=parseInt(localStorage.getItem(z)||"0");R>0&&(N+=R,g+=Vn({mode:"main",stars:R,attempts:R===3?1:2,timeTakenSeconds:R===3?30:90,usedHint:R<2}))}for(let D=1;D<=30;D++){const z=`${c}_${I}_puzzle_${D}_stars`,R=parseInt(localStorage.getItem(z)||"0");R>0&&(N+=R,g+=Vn({mode:"puzzle",stars:R,attempts:R===3?1:2,timeTakenSeconds:R===3?30:90,usedHint:R<2}))}for(let D=1;D<=30;D++){const z=`${c}_${I}_dragdrop_${D}_stars`,R=parseInt(localStorage.getItem(z)||"0");R>0&&(N+=R,g+=Vn({mode:"dragdrop",stars:R,attempts:R===3?1:R===1?3:2,timeTakenSeconds:R===3?30:90,usedHint:!1}))}});const{level:A,currentLevelExp:j,expToNextLevel:L}=oh(g),E=localStorage.getItem("selectedTitle")||"",w=localStorage.getItem("username")||"";return console.log("🔍 [Navbar] playerProgress recalculating - username:",w,", title:",E),{level:A,exp:g,currentLevelExp:j,expToNextLevel:L,totalStars:N,activeTitle:E,username:w}},[c,i]),h=[{id:"home",label:"Home",icon:VS},{id:"game-overview",label:"Game Overview",icon:eh},{id:"features",label:"Features",icon:dx},{id:"about",label:"About",icon:US}];return l.jsx("nav",{className:"fixed top-0 w-full bg-gradient-to-r from-slate-900/95 via-purple-900/90 to-slate-900/95 backdrop-blur-lg border-b border-purple-500/30 shadow-lg shadow-purple-500/10 z-50",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-2 sm:px-4 lg:px-8",children:[l.jsxs("div",{className:"hidden md:flex justify-between items-center h-16",children:[l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-40"}),l.jsx("div",{className:"relative bg-gradient-to-br from-cyan-500 to-purple-600 p-2 rounded-lg",children:l.jsx(ec,{className:"h-5 w-5 text-white"})})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wide",children:"CodeRealm"}),l.jsx("div",{className:"text-[0.5rem] text-purple-400 font-semibold tracking-widest -mt-1",children:"LEARN • CODE • CONQUER"})]})]}),l.jsx("div",{className:"flex items-center space-x-2",children:h.map(({id:p,label:g,icon:N})=>l.jsxs("button",{onClick:()=>e(p),className:`group flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-200 ${t===p?"text-white bg-slate-800/50 border border-purple-500/40":"text-gray-400 hover:text-gray-300 hover:bg-slate-800/30 border border-transparent"}`,children:[l.jsx(N,{className:"h-4 w-4"}),l.jsx("span",{className:"text-sm",children:g})]},p))}),l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsxs("button",{onClick:()=>e("arcane-showcase"),className:"inline-flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-purple-600/40 to-pink-600/40 hover:from-purple-600/60 hover:to-pink-600/60 border-2 border-purple-400/50 hover:border-purple-300/70 rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30 group",title:"Meet Arcane AI",children:[l.jsx(Kt,{className:"h-4 w-4 text-purple-200 group-hover:text-white animate-pulse"}),l.jsx("span",{className:"font-bold text-sm text-purple-100 group-hover:text-white",children:"Arcane AI"})]}),n&&n.uid!=="guest"?l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsxs("div",{className:"hidden lg:flex items-center gap-3 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-2 border-cyan-500/40 rounded-xl px-4 py-2 shadow-lg shadow-cyan-500/20 backdrop-blur-sm max-w-md",children:[l.jsxs("div",{className:"flex items-center space-x-1.5 flex-shrink-0",children:[l.jsxs("div",{className:"relative",children:[l.jsx(fn,{className:"h-4 w-4 text-yellow-400 fill-current"}),l.jsx("div",{className:"absolute inset-0 bg-yellow-400 blur-sm opacity-50"})]}),l.jsx("span",{className:"text-sm font-bold text-yellow-400",children:u.totalStars})]}),l.jsx("div",{className:"h-7 w-px bg-slate-600/50 flex-shrink-0"}),l.jsxs("div",{className:"flex flex-col items-start min-w-0 flex-shrink-0",children:[l.jsxs("div",{className:"flex items-center space-x-1.5 mb-0.5",children:[l.jsxs("span",{className:"text-sm font-bold text-cyan-400 whitespace-nowrap",children:["Lv ",u.level]}),u.activeTitle&&l.jsxs("span",{className:"text-[0.65rem] text-purple-300 italic whitespace-nowrap",children:["• ",u.activeTitle]})]}),l.jsx("div",{className:"w-32 h-1 bg-slate-900/50 rounded-full overflow-hidden",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500",style:{width:`${Math.min(100,u.currentLevelExp/u.expToNextLevel*100)}%`}})})]}),l.jsx("div",{className:"h-7 w-px bg-slate-600/50 flex-shrink-0"}),l.jsxs("button",{onClick:()=>e("stats"),className:"flex items-center space-x-1.5 hover:text-cyan-300 transition-colors group min-w-0 max-w-[120px]",title:`${u.username||n.email} - Click to view stats`,children:[l.jsx(sh,{className:"h-4 w-4 text-gray-400 group-hover:text-cyan-400 flex-shrink-0"}),l.jsx("span",{className:"text-sm font-medium text-gray-300 group-hover:text-white truncate",children:u.username||n.email})]})]}),l.jsxs("button",{onClick:s,className:"hidden lg:flex items-center space-x-1.5 px-3 py-2 bg-slate-800/40 hover:bg-red-900/30 border border-slate-600/40 hover:border-red-500/50 rounded-lg transition-all duration-200 group",title:"Sign Out",children:[l.jsx(gg,{className:"h-4 w-4 text-gray-500 group-hover:text-red-400"}),l.jsx("span",{className:"text-xs text-gray-500 group-hover:text-red-400",children:"Exit"})]})]}):l.jsxs("button",{onClick:r,className:"flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 border border-cyan-400/30",children:[l.jsx(zS,{className:"h-4 w-4"}),l.jsx("span",{children:"Sign In"})]})]})]}),l.jsxs("div",{className:"md:hidden",children:[l.jsxs("div",{className:"flex justify-between items-center h-14",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsxs("div",{className:"relative",children:[l.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded blur opacity-40"}),l.jsx("div",{className:"relative bg-gradient-to-br from-cyan-500 to-purple-600 p-1.5 rounded",children:l.jsx(ec,{className:"h-4 w-4 text-white"})})]}),l.jsx("span",{className:"text-base font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"CodeRealm"})]}),l.jsxs("select",{value:t,onChange:p=>e(p.target.value),className:"bg-slate-800/50 border border-purple-500/30 rounded-lg px-2 py-1.5 text-white text-xs focus:outline-none focus:border-cyan-400",children:[h.map(({id:p,label:g})=>l.jsx("option",{value:p,className:"bg-slate-800",children:g},p)),l.jsx("option",{value:"arcane-showcase",className:"bg-slate-800",children:"Arcane AI"}),n&&n.uid!=="guest"&&l.jsx("option",{value:"stats",className:"bg-slate-800",children:"Stats"})]})]}),n&&n.uid!=="guest"&&l.jsx("div",{className:"pb-2 border-t border-purple-500/20 pt-2",children:l.jsxs("div",{className:"flex items-center justify-between bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-cyan-500/40 rounded-lg px-3 py-2",children:[l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsxs("div",{className:"flex items-center space-x-1",children:[l.jsxs("div",{className:"relative",children:[l.jsx(fn,{className:"h-3.5 w-3.5 text-yellow-400 fill-current"}),l.jsx("div",{className:"absolute inset-0 bg-yellow-400 blur-sm opacity-50"})]}),l.jsx("span",{className:"text-xs font-bold text-yellow-400",children:u.totalStars})]}),l.jsx("div",{className:"h-5 w-px bg-slate-600/50"}),l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("span",{className:"text-xs font-bold text-cyan-400",children:["Lv ",u.level]}),u.activeTitle&&l.jsx("span",{className:"text-[0.55rem] text-purple-300 italic truncate max-w-[100px]",children:u.activeTitle}),l.jsx("div",{className:"w-20 h-0.5 bg-slate-900/50 rounded-full overflow-hidden mt-0.5",children:l.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500",style:{width:`${Math.min(100,u.currentLevelExp/u.expToNextLevel*100)}%`}})})]})]}),l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsxs("button",{onClick:()=>e("stats"),className:"flex items-center space-x-1 bg-slate-700/50 px-2 py-1 rounded",children:[l.jsx(sh,{className:"h-3 w-3 text-gray-400"}),l.jsx("span",{className:"text-xs text-gray-300 truncate max-w-[80px]",children:u.username||((m=n.email)==null?void 0:m.split("@")[0])})]}),l.jsx("button",{onClick:s,className:"p-1.5 bg-red-900/20 hover:bg-red-900/40 border border-red-500/40 rounded transition-colors",title:"Sign Out",children:l.jsx(gg,{className:"h-3.5 w-3.5 text-red-400"})})]})]})})]})]})})},KS=()=>{const t=H.useRef(null);return H.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;e.width=window.innerWidth,e.height=window.innerHeight;const r=[];for(let o=0;o<100;o++)r.push({x:Math.random()*e.width,y:Math.random()*e.height,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,opacity:Math.random()*.8+.2,size:Math.random()*2+1});const s=()=>{n.clearRect(0,0,e.width,e.height),r.forEach((o,c)=>{o.x+=o.vx,o.y+=o.vy,o.x<0&&(o.x=e.width),o.x>e.width&&(o.x=0),o.y<0&&(o.y=e.height),o.y>e.height&&(o.y=0),n.beginPath(),n.arc(o.x,o.y,o.size,0,Math.PI*2),n.fillStyle=`rgba(103, 232, 249, ${o.opacity})`,n.fill(),r.forEach((u,h)=>{if(c!==h){const m=o.x-u.x,p=o.y-u.y,g=Math.sqrt(m*m+p*p);g<100&&(n.beginPath(),n.moveTo(o.x,o.y),n.lineTo(u.x,u.y),n.strokeStyle=`rgba(147, 51, 234, ${.1*(1-g/100)})`,n.lineWidth=.5,n.stroke())}})}),requestAnimationFrame(s)};s();const i=()=>{e.width=window.innerWidth,e.height=window.innerHeight};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[]),l.jsx("canvas",{ref:t,className:"fixed inset-0 pointer-events-none opacity-30"})},GS=()=>{};var wg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},QS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},gx={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,m=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,N=h&63;u||(N=64,o||(g=64)),r.push(n[m],n[p],n[g],n[N])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(px(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new YS;const g=i<<2|c>>4;if(r.push(g),h!==64){const N=c<<4&240|h>>2;if(r.push(N),p!==64){const A=h<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JS=function(t){const e=px(t);return gx.encodeByteArray(e,!0)},nc=function(t){return JS(t).replace(/\./g,"")},yx=function(t){try{return gx.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=()=>XS().__FIREBASE_DEFAULTS__,eE=()=>{if(typeof process>"u"||typeof wg>"u")return;const t=wg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yx(t[1]);return e&&JSON.parse(e)},Uc=()=>{try{return GS()||ZS()||eE()||tE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vx=t=>{var e,n;return(n=(e=Uc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},nE=t=>{const e=vx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},xx=()=>{var t;return(t=Uc())==null?void 0:t.config},_x=t=>{var e;return(e=Uc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wx(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[nc(JSON.stringify(n)),nc(JSON.stringify(o)),""].join(".")}const No={};function iE(){const t={prod:[],emulator:[]};for(const e of Object.keys(No))No[e]?t.emulator.push(e):t.prod.push(e);return t}function oE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let bg=!1;function bx(t,e){if(typeof window>"u"||typeof document>"u"||!Ai(window.location.host)||No[t]===e||No[t]||bg)return;No[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=iE().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,N){g.setAttribute("width","24"),g.setAttribute("id",N),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{bg=!0,o()},g}function m(g,N){g.setAttribute("id",N),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=oE(r),N=n("text"),A=document.getElementById(N)||document.createElement("span"),j=n("learnmore"),L=document.getElementById(j)||document.createElement("a"),E=n("preprendIcon"),w=document.getElementById(E)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const I=g.element;c(I),m(L,j);const D=h();u(w,E),I.append(w,A,L,D),document.body.appendChild(I)}i?(A.innerText="Preview backend disconnected.",w.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(w.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",N)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function lE(){var e;const t=(e=Uc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hE(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fE(){return!lE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mE(){try{return typeof indexedDB=="object"}catch{return!1}}function pE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="FirebaseError";class nr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gE,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yE(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new nr(s,c,r)}}function yE(t,e){return t.replace(vE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vE=/\{\$([^}]+)}/g;function xE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Sg(i)&&Sg(o)){if(!Ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Sg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ho(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function fo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _E(t,e){const n=new wE(t,e);return n.subscribe.bind(n)}class wE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Gu),s.error===void 0&&(s.error=Gu),s.complete===void 0&&(s.complete=Gu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t){return t&&t._delegate?t._delegate:t}class _s{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new rE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(TE(e))try{this.getOrInitializeService({instanceIdentifier:as})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=as){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=as){return this.instances.has(e)}getOptions(e=as){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:EE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=as){return this.component?this.component.multipleInstances?e:as:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function EE(t){return t===as?void 0:t}function TE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const NE={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},CE=fe.INFO,kE={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},AE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Af{constructor(e){this.name=e,this._logLevel=CE,this._logHandler=AE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const PE=(t,e)=>e.some(n=>t instanceof n);let Eg,Tg;function RE(){return Eg||(Eg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jE(){return Tg||(Tg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sx=new WeakMap,ah=new WeakMap,Ex=new WeakMap,Qu=new WeakMap,Pf=new WeakMap;function DE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sx.set(n,t)}).catch(()=>{}),Pf.set(e,t),e}function ME(t){if(ah.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ah.set(t,e)}let lh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ah.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ex.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LE(t){lh=t(lh)}function OE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yu(this),e,...n);return Ex.set(r,e.sort?e.sort():[e]),Rr(r)}:jE().includes(t)?function(...e){return t.apply(Yu(this),e),Rr(Sx.get(this))}:function(...e){return Rr(t.apply(Yu(this),e))}}function VE(t){return typeof t=="function"?OE(t):(t instanceof IDBTransaction&&ME(t),PE(t,RE())?new Proxy(t,lh):t)}function Rr(t){if(t instanceof IDBRequest)return DE(t);if(Qu.has(t))return Qu.get(t);const e=VE(t);return e!==t&&(Qu.set(t,e),Pf.set(e,t)),e}const Yu=t=>Pf.get(t);function UE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Rr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Rr(o.result),u.oldVersion,u.newVersion,Rr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const zE=["get","getKey","getAll","getAllKeys","count"],FE=["put","add","delete","clear"],Ju=new Map;function Ig(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ju.get(e))return Ju.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=FE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zE.includes(n)))return;const i=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&u.done]))[0]};return Ju.set(e,i),i}LE(t=>({...t,get:(e,n,r)=>Ig(e,n)||t.get(e,n,r),has:(e,n)=>!!Ig(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($E(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $E(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ch="@firebase/app",Ng="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Af("@firebase/app"),HE="@firebase/app-compat",WE="@firebase/analytics-compat",qE="@firebase/analytics",KE="@firebase/app-check-compat",GE="@firebase/app-check",QE="@firebase/auth",YE="@firebase/auth-compat",JE="@firebase/database",XE="@firebase/data-connect",ZE="@firebase/database-compat",eT="@firebase/functions",tT="@firebase/functions-compat",nT="@firebase/installations",rT="@firebase/installations-compat",sT="@firebase/messaging",iT="@firebase/messaging-compat",oT="@firebase/performance",aT="@firebase/performance-compat",lT="@firebase/remote-config",cT="@firebase/remote-config-compat",uT="@firebase/storage",dT="@firebase/storage-compat",hT="@firebase/firestore",fT="@firebase/ai",mT="@firebase/firestore-compat",pT="firebase",gT="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="[DEFAULT]",yT={[ch]:"fire-core",[HE]:"fire-core-compat",[qE]:"fire-analytics",[WE]:"fire-analytics-compat",[GE]:"fire-app-check",[KE]:"fire-app-check-compat",[QE]:"fire-auth",[YE]:"fire-auth-compat",[JE]:"fire-rtdb",[XE]:"fire-data-connect",[ZE]:"fire-rtdb-compat",[eT]:"fire-fn",[tT]:"fire-fn-compat",[nT]:"fire-iid",[rT]:"fire-iid-compat",[sT]:"fire-fcm",[iT]:"fire-fcm-compat",[oT]:"fire-perf",[aT]:"fire-perf-compat",[lT]:"fire-rc",[cT]:"fire-rc-compat",[uT]:"fire-gcs",[dT]:"fire-gcs-compat",[hT]:"fire-fst",[mT]:"fire-fst-compat",[fT]:"fire-vertex","fire-js":"fire-js",[pT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map,vT=new Map,dh=new Map;function Cg(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function xi(t){const e=t.name;if(dh.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;dh.set(e,t);for(const n of rc.values())Cg(n,t);for(const n of vT.values())Cg(n,t);return!0}function Rf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jr=new fa("app","Firebase",xT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=gT;function Tx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:uh,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw jr.create("bad-app-name",{appName:String(s)});if(n||(n=xx()),!n)throw jr.create("no-options");const i=rc.get(s);if(i){if(Ur(n,i.options)&&Ur(r,i.config))return i;throw jr.create("duplicate-app",{appName:s})}const o=new IE(s);for(const u of dh.values())o.addComponent(u);const c=new _T(n,r,o);return rc.set(s,c),c}function Ix(t=uh){const e=rc.get(t);if(!e&&t===uh&&xx())return Tx();if(!e)throw jr.create("no-app",{appName:t});return e}function Dr(t,e,n){let r=yT[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(o.join(" "));return}xi(new _s(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT="firebase-heartbeat-database",bT=1,Xo="firebase-heartbeat-store";let Xu=null;function Nx(){return Xu||(Xu=UE(wT,bT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw jr.create("idb-open",{originalErrorMessage:t.message})})),Xu}async function ST(t){try{const n=(await Nx()).transaction(Xo),r=await n.objectStore(Xo).get(Cx(t));return await n.done,r}catch(e){if(e instanceof nr)Jn.warn(e.message);else{const n=jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function kg(t,e){try{const r=(await Nx()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,Cx(t)),await r.done}catch(n){if(n instanceof nr)Jn.warn(n.message);else{const r=jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(r.message)}}}function Cx(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=1024,TT=30;class IT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ag();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>TT){const o=kT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Jn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ag(),{heartbeatsToSend:r,unsentEntries:s}=NT(this._heartbeatsCache.heartbeats),i=nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Jn.warn(n),""}}}function Ag(){return new Date().toISOString().substring(0,10)}function NT(t,e=ET){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Pg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Pg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mE()?pE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ST(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return kg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return kg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Pg(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}function kT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(t){xi(new _s("platform-logger",e=>new BE(e),"PRIVATE")),xi(new _s("heartbeat",e=>new IT(e),"PRIVATE")),Dr(ch,Ng,t),Dr(ch,Ng,"esm2020"),Dr("fire-js","")}AT("");function kx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PT=kx,Ax=new fa("auth","Firebase",kx());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Af("@firebase/auth");function RT(t,...e){sc.logLevel<=fe.WARN&&sc.warn(`Auth (${Pi}): ${t}`,...e)}function xl(t,...e){sc.logLevel<=fe.ERROR&&sc.error(`Auth (${Pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw jf(t,...e)}function Tn(t,...e){return jf(t,...e)}function Px(t,e,n){const r={...PT(),[e]:n};return new fa("auth","Firebase",r).create(e,{appName:t.name})}function Wn(t){return Px(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ax.create(t,...e)}function ne(t,e,...n){if(!t)throw jf(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xl(e),new Error(e)}function Xn(t,e){t||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function jT(){return Rg()==="http:"||Rg()==="https:"}function Rg(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jT()||uE()||"connection"in navigator)?navigator.onLine:!0}function MT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=aE()||dE()}get(){return DT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VT=new pa(3e4,6e4);function Qr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Yr(t,e,n,r,s={}){return jx(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ma({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return cE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Ai(t.emulatorConfig.host)&&(h.credentials="include"),Rx.fetch()(await Dx(t,t.config.apiHost,n,c),h)})}async function jx(t,e,n){t._canInitEmulator=!1;const r={...LT,...e};try{const s=new zT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw tl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw tl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw tl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw tl(t,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Px(t,m,h);pn(t,m)}}catch(s){if(s instanceof nr)throw s;pn(t,"network-request-failed",{message:String(s)})}}async function ga(t,e,n,r,s={}){const i=await Yr(t,e,n,r,s);return"mfaPendingCredential"in i&&pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Dx(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Df(t.config,s):`${t.config.apiScheme}://${s}`;return OT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function UT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),VT.get())})}}function tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Tn(t,e,r);return s.customData._tokenResponse=n,s}function jg(t){return t!==void 0&&t.enterprise!==void 0}class FT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return UT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function BT(t,e){return Yr(t,"GET","/v2/recaptchaConfig",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $T(t,e){return Yr(t,"POST","/v1/accounts:delete",e)}async function ic(t,e){return Yr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HT(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),s=Mf(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Co(Zu(s.auth_time)),issuedAtTime:Co(Zu(s.iat)),expirationTime:Co(Zu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zu(t){return Number(t)*1e3}function Mf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xl("JWT malformed, contained fewer than 3 sections"),null;try{const s=yx(n);return s?JSON.parse(s):(xl("Failed to decode base64 JWT payload"),null)}catch(s){return xl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dg(t){const e=Mf(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof nr&&WT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Co(this.lastLoginAt),this.creationTime=Co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oc(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Zo(t,ic(e,{idToken:n}));ne(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Mx(s.providerUserInfo):[],o=GT(t.providerData,i),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new fh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function KT(t){const e=Ft(t);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Mx(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e){const n=await jx(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Dx(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ai(t.emulatorConfig.host)&&(u.credentials="include"),Rx.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YT(t,e){return Yr(t,"POST","/v2/accounts:revokeToken",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Dg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await QT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new li;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new li,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new qT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HT(this,e)}reload(){return KT(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await Zo(this,$T(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:N,providerData:A,stsTokenManager:j}=n;ne(p&&j,e,"internal-error");const L=li.fromJSON(this.name,j);ne(typeof p=="string",e,"internal-error"),hr(r,e.name),hr(s,e.name),ne(typeof g=="boolean",e,"internal-error"),ne(typeof N=="boolean",e,"internal-error"),hr(i,e.name),hr(o,e.name),hr(c,e.name),hr(u,e.name),hr(h,e.name),hr(m,e.name);const E=new cn({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:N,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:L,createdAt:h,lastLoginAt:m});return A&&Array.isArray(A)&&(E.providerData=A.map(w=>({...w}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new li;s.updateFromServerResponse(n);const i=new cn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await oc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Mx(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new li;c.updateFromIdToken(r);const u=new cn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new fh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new Map;function $n(t){Xn(t instanceof Function,"Expected a class definition");let e=Mg.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Mg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lx.type="NONE";const Lg=Lx;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(t,e,n){return`firebase:${t}:${e}:${n}`}class ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=_l(this.userKey,s.apiKey,i),this.fullPersistenceKey=_l("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ic(this.auth,{idToken:e}).catch(()=>{});return n?cn._fromGetAccountInfoResponse(this.auth,n,e):null}return cn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ci($n(Lg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||$n(Lg);const o=_l(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const m=await h._get(o);if(m){let p;if(typeof m=="string"){const g=await ic(e,{idToken:m}).catch(()=>{});if(!g)break;p=await cn._fromGetAccountInfoResponse(e,g,m)}else p=cn._fromJSON(e,m);h!==i&&(c=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ci(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ci(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ox(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bx(e))return"Blackberry";if($x(e))return"Webos";if(Vx(e))return"Safari";if((e.includes("chrome/")||Ux(e))&&!e.includes("edge/"))return"Chrome";if(Fx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ox(t=St()){return/firefox\//i.test(t)}function Vx(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ux(t=St()){return/crios\//i.test(t)}function zx(t=St()){return/iemobile/i.test(t)}function Fx(t=St()){return/android/i.test(t)}function Bx(t=St()){return/blackberry/i.test(t)}function $x(t=St()){return/webos/i.test(t)}function Lf(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JT(t=St()){var e;return Lf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function XT(){return hE()&&document.documentMode===10}function Hx(t=St()){return Lf(t)||Fx(t)||$x(t)||Bx(t)||/windows phone/i.test(t)||zx(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t,e=[]){let n;switch(t){case"Browser":n=Og(St());break;case"Worker":n=`${Og(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t,e={}){return Yr(t,"GET","/v2/passwordPolicy",Qr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=6;class nI{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vg(this),this.idTokenSubscription=new Vg(this),this.beforeStateQueue=new ZT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ax,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ci.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ic(this,{idToken:e}),r=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Yt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(Wn(this));const n=e?Ft(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yt(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eI(this),n=new nI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await ci.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Yt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&RT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ns(t){return Ft(t)}class Vg{constructor(e){this.auth=e,this.observer=null,this.addObserver=_E(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sI(t){zc=t}function qx(t){return zc.loadJS(t)}function iI(){return zc.recaptchaEnterpriseScript}function oI(){return zc.gapiScript}function aI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class lI{constructor(){this.enterprise=new cI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class cI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const uI="recaptcha-enterprise",Kx="NO_RECAPTCHA";class dI{constructor(e){this.type=uI,this.auth=Ns(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{BT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new FT(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,o,c){const u=window.grecaptcha;jg(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Kx)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&jg(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=iI();u.length!==0&&(u+=c),qx(u).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Ug(t,e,n,r=!1,s=!1){const i=new dI(t);let o;if(s)o=Kx;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function mh(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ug(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ug(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t,e){const n=Rf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ur(i,e??{}))return s;pn(s,"already-initialized")}return n.initialize({options:e})}function fI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mI(t,e,n){const r=Ns(t);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Gx(e),{host:o,port:c}=pI(e),u=c===null?"":`:${c}`,h={url:`${i}//${o}${u}/`},m=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(Ur(h,r.config.emulator)&&Ur(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Ai(o)?(wx(`${i}//${o}${u}`),bx("Auth",!0)):gI()}function Gx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pI(t){const e=Gx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:zg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:zg(o)}}}function zg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}async function yI(t,e){return Yr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(t,e){return ga(t,"POST","/v1/accounts:signInWithPassword",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}async function _I(t,e){return ga(t,"POST","/v1/accounts:signInWithEmailLink",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends Of{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mh(e,n,"signInWithPassword",vI);case"emailLink":return xI(e,{email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mh(e,r,"signUpPassword",yI);case"emailLink":return _I(e,{idToken:n,email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e){return ga(t,"POST","/v1/accounts:signInWithIdp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI="http://localhost";class ws extends Of{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ws(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ui(e,n)}buildRequest(){const e={requestUri:wI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SI(t){const e=ho(fo(t)).link,n=e?ho(fo(e)).deep_link_id:null,r=ho(fo(t)).deep_link_id;return(r?ho(fo(r)).link:null)||r||n||e||t}class Vf{constructor(e){const n=ho(fo(e)),r=n.apiKey??null,s=n.oobCode??null,i=bI(n.mode??null);ne(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=SI(e);try{return new Vf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.providerId=Ri.PROVIDER_ID}static credential(e,n){return ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vf.parseLink(n);return ne(r,"argument-error"),ea._fromEmailAndCode(e,r.code,r.tenantId)}}Ri.PROVIDER_ID="password";Ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya extends Qx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends ya{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends ya{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ws._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr extends ya{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:xr.PROVIDER_ID,signInMethod:xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xr.credentialFromTaggedObject(e)}static credentialFromError(e){return xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xr.credential(e.oauthAccessToken)}catch{return null}}}xr.GITHUB_SIGN_IN_METHOD="github.com";xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends ya{constructor(){super("twitter.com")}static credential(e,n){return ws._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e){return ga(t,"POST","/v1/accounts:signUp",Qr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await cn._fromIdTokenResponse(e,r,s),o=Fg(r);return new bs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fg(r);return new bs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends nr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ac(e,n,r,s)}}function Yx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(t,i,e,r):i})}async function TI(t,e,n=!1){const r=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(t,e,n=!1){const{auth:r}=t;if(Yt(r.app))return Promise.reject(Wn(r));const s="reauthenticate";try{const i=await Zo(t,Yx(r,s,e,t),n);ne(i.idToken,r,"internal-error");const o=Mf(i.idToken);ne(o,r,"internal-error");const{sub:c}=o;return ne(t.uid===c,r,"user-mismatch"),bs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&pn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(t,e,n=!1){if(Yt(t.app))return Promise.reject(Wn(t));const r="signIn",s=await Yx(t,r,e),i=await bs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function NI(t,e){return Jx(Ns(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xx(t){const e=Ns(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function CI(t,e,n){if(Yt(t.app))return Promise.reject(Wn(t));const r=Ns(t),o=await mh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",EI).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Xx(t),u}),c=await bs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function kI(t,e,n){return Yt(t.app)?Promise.reject(Wn(t)):NI(Ft(t),Ri.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xx(t),r})}function AI(t,e,n,r){return Ft(t).onIdTokenChanged(e,n,r)}function PI(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}function RI(t,e,n,r){return Ft(t).onAuthStateChanged(e,n,r)}function jI(t){return Ft(t).signOut()}const lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=1e3,MI=10;class e_ extends Zx{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);XT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,MI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e_.type="LOCAL";const LI=e_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends Zx{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t_.type="SESSION";const n_=t_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Fc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),u=await OI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const h=Uf("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return window}function UI(t){In().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function zI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function BI(){return r_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="firebaseLocalStorageDb",$I=1,cc="firebaseLocalStorage",i_="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bc(t,e){return t.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function HI(){const t=indexedDB.deleteDatabase(s_);return new va(t).toPromise()}function ph(){const t=indexedDB.open(s_,$I);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cc,{keyPath:i_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cc)?e(r):(r.close(),await HI(),e(await ph()))})})}async function Bg(t,e,n){const r=Bc(t,!0).put({[i_]:e,value:n});return new va(r).toPromise()}async function WI(t,e){const n=Bc(t,!1).get(e),r=await new va(n).toPromise();return r===void 0?null:r.value}function $g(t,e){const n=Bc(t,!0).delete(e);return new va(n).toPromise()}const qI=800,KI=3;class o_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ph(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(BI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await zI(),!this.activeServiceWorker)return;this.sender=new VI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ph();return await Bg(e,lc,"1"),await $g(e,lc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>WI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$g(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Bc(s,!1).getAll();return new va(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o_.type="LOCAL";const GI=o_;new pa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t,e){return e?$n(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf extends Of{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YI(t){return Jx(t.auth,new zf(t),t.bypassAuthState)}function JI(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),II(n,new zf(t),t.bypassAuthState)}async function XI(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),TI(n,new zf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YI;case"linkViaPopup":case"linkViaRedirect":return XI;case"reauthViaPopup":case"reauthViaRedirect":return JI;default:pn(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new pa(2e3,1e4);class ei extends a_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ei.currentPopupAction&&ei.currentPopupAction.cancel(),ei.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=Uf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ei.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZI.get())};e()}}ei.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e2="pendingRedirect",wl=new Map;class t2 extends a_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const r=await n2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function n2(t,e){const n=i2(e),r=s2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function r2(t,e){wl.set(t._key(),e)}function s2(t){return $n(t._redirectPersistence)}function i2(t){return _l(e2,t.config.apiKey,t.name)}async function o2(t,e,n=!1){if(Yt(t.app))return Promise.reject(Wn(t));const r=Ns(t),s=QI(r,e),o=await new t2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=10*60*1e3;class l2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!c2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!l_(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=a2&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(e))}saveEventToCache(e){this.cachedEventUids.add(Hg(e)),this.lastProcessedEventTime=Date.now()}}function Hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function l_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function c2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e={}){return Yr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h2=/^https?/;async function f2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await u2(t);for(const n of e)try{if(m2(n))return}catch{}pn(t,"unauthorized-domain")}function m2(t){const e=hh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!h2.test(n))return!1;if(d2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p2=new pa(3e4,6e4);function Wg(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function g2(t){return new Promise((e,n)=>{var s,i,o;function r(){Wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wg(),n(Tn(t,"network-request-failed"))},timeout:p2.get()})}if((i=(s=In().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=In().gapi)!=null&&o.load)r();else{const c=aI("iframefcb");return In()[c]=()=>{gapi.load?r():n(Tn(t,"network-request-failed"))},qx(`${oI()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw bl=null,e})}let bl=null;function y2(t){return bl=bl||g2(t),bl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v2=new pa(5e3,15e3),x2="__/auth/iframe",_2="emulator/auth/iframe",w2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},b2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S2(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Df(e,_2):`https://${t.config.authDomain}/${x2}`,r={apiKey:e.apiKey,appName:t.name,v:Pi},s=b2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ma(r).slice(1)}`}async function E2(t){const e=await y2(t),n=In().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:S2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:w2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),c=In().setTimeout(()=>{i(o)},v2.get());function u(){In().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},I2=500,N2=600,C2="_blank",k2="http://localhost";class qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function A2(t,e,n,r=I2,s=N2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...T2,width:r.toString(),height:s.toString(),top:i,left:o},h=St().toLowerCase();n&&(c=Ux(h)?C2:n),Ox(h)&&(e=e||k2,u.scrollbars="yes");const m=Object.entries(u).reduce((g,[N,A])=>`${g}${N}=${A},`,"");if(JT(h)&&c!=="_self")return P2(e||"",c),new qg(null);const p=window.open(e||"",c,m);ne(p,t,"popup-blocked");try{p.focus()}catch{}return new qg(p)}function P2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R2="__/auth/handler",j2="emulator/auth/handler",D2=encodeURIComponent("fac");async function Kg(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pi,eventId:s};if(e instanceof Qx){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))o[m]=p}if(e instanceof ya){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await t._getAppCheckToken(),h=u?`#${D2}=${encodeURIComponent(u)}`:"";return`${M2(t)}?${ma(c).slice(1)}${h}`}function M2({config:t}){return t.emulator?Df(t,j2):`https://${t.authDomain}/${R2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="webStorageSupport";class L2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n_,this._completeRedirectFn=o2,this._overrideRedirectResult=r2}async _openPopup(e,n,r,s){var o;Xn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Kg(e,n,r,hh(),s);return A2(e,i,Uf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Kg(e,n,r,hh(),s);return UI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Xn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await E2(e),r=new l2(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ed,{type:ed},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[ed];i!==void 0&&n(!!i),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=f2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hx()||Vx()||Lf()}}const O2=L2;var Gg="@firebase/auth",Qg="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function z2(t){xi(new _s("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wx(t)},h=new rI(r,s,i,u);return fI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),xi(new _s("auth-internal",e=>{const n=Ns(e.getProvider("auth").getImmediate());return(r=>new V2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dr(Gg,Qg,U2(t)),Dr(Gg,Qg,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=5*60,B2=_x("authIdTokenMaxAge")||F2;let Yg=null;const $2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>B2)return;const s=n==null?void 0:n.token;Yg!==s&&(Yg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function H2(t=Ix()){const e=Rf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hI(t,{popupRedirectResolver:O2,persistence:[GI,LI,n_]}),r=_x("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=$2(i.toString());PI(n,o,()=>o(n.currentUser)),AI(n,c=>o(c))}}const s=vx("auth");return s&&mI(n,`http://${s}`),n}function W2(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}sI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",W2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});z2("Browser");var q2="firebase",K2="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dr(q2,K2,"app");var Jg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mr,c_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,v){function _(){}_.prototype=v.prototype,y.F=v.prototype,y.prototype=new _,y.prototype.constructor=y,y.D=function(S,T,C){for(var b=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)b[Z-2]=arguments[Z];return v.prototype[T].apply(S,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,v,_){_||(_=0);const S=Array(16);if(typeof v=="string")for(var T=0;T<16;++T)S[T]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(T=0;T<16;++T)S[T]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=y.g[0],_=y.g[1],T=y.g[2];let C=y.g[3],b;b=v+(C^_&(T^C))+S[0]+3614090360&4294967295,v=_+(b<<7&4294967295|b>>>25),b=C+(T^v&(_^T))+S[1]+3905402710&4294967295,C=v+(b<<12&4294967295|b>>>20),b=T+(_^C&(v^_))+S[2]+606105819&4294967295,T=C+(b<<17&4294967295|b>>>15),b=_+(v^T&(C^v))+S[3]+3250441966&4294967295,_=T+(b<<22&4294967295|b>>>10),b=v+(C^_&(T^C))+S[4]+4118548399&4294967295,v=_+(b<<7&4294967295|b>>>25),b=C+(T^v&(_^T))+S[5]+1200080426&4294967295,C=v+(b<<12&4294967295|b>>>20),b=T+(_^C&(v^_))+S[6]+2821735955&4294967295,T=C+(b<<17&4294967295|b>>>15),b=_+(v^T&(C^v))+S[7]+4249261313&4294967295,_=T+(b<<22&4294967295|b>>>10),b=v+(C^_&(T^C))+S[8]+1770035416&4294967295,v=_+(b<<7&4294967295|b>>>25),b=C+(T^v&(_^T))+S[9]+2336552879&4294967295,C=v+(b<<12&4294967295|b>>>20),b=T+(_^C&(v^_))+S[10]+4294925233&4294967295,T=C+(b<<17&4294967295|b>>>15),b=_+(v^T&(C^v))+S[11]+2304563134&4294967295,_=T+(b<<22&4294967295|b>>>10),b=v+(C^_&(T^C))+S[12]+1804603682&4294967295,v=_+(b<<7&4294967295|b>>>25),b=C+(T^v&(_^T))+S[13]+4254626195&4294967295,C=v+(b<<12&4294967295|b>>>20),b=T+(_^C&(v^_))+S[14]+2792965006&4294967295,T=C+(b<<17&4294967295|b>>>15),b=_+(v^T&(C^v))+S[15]+1236535329&4294967295,_=T+(b<<22&4294967295|b>>>10),b=v+(T^C&(_^T))+S[1]+4129170786&4294967295,v=_+(b<<5&4294967295|b>>>27),b=C+(_^T&(v^_))+S[6]+3225465664&4294967295,C=v+(b<<9&4294967295|b>>>23),b=T+(v^_&(C^v))+S[11]+643717713&4294967295,T=C+(b<<14&4294967295|b>>>18),b=_+(C^v&(T^C))+S[0]+3921069994&4294967295,_=T+(b<<20&4294967295|b>>>12),b=v+(T^C&(_^T))+S[5]+3593408605&4294967295,v=_+(b<<5&4294967295|b>>>27),b=C+(_^T&(v^_))+S[10]+38016083&4294967295,C=v+(b<<9&4294967295|b>>>23),b=T+(v^_&(C^v))+S[15]+3634488961&4294967295,T=C+(b<<14&4294967295|b>>>18),b=_+(C^v&(T^C))+S[4]+3889429448&4294967295,_=T+(b<<20&4294967295|b>>>12),b=v+(T^C&(_^T))+S[9]+568446438&4294967295,v=_+(b<<5&4294967295|b>>>27),b=C+(_^T&(v^_))+S[14]+3275163606&4294967295,C=v+(b<<9&4294967295|b>>>23),b=T+(v^_&(C^v))+S[3]+4107603335&4294967295,T=C+(b<<14&4294967295|b>>>18),b=_+(C^v&(T^C))+S[8]+1163531501&4294967295,_=T+(b<<20&4294967295|b>>>12),b=v+(T^C&(_^T))+S[13]+2850285829&4294967295,v=_+(b<<5&4294967295|b>>>27),b=C+(_^T&(v^_))+S[2]+4243563512&4294967295,C=v+(b<<9&4294967295|b>>>23),b=T+(v^_&(C^v))+S[7]+1735328473&4294967295,T=C+(b<<14&4294967295|b>>>18),b=_+(C^v&(T^C))+S[12]+2368359562&4294967295,_=T+(b<<20&4294967295|b>>>12),b=v+(_^T^C)+S[5]+4294588738&4294967295,v=_+(b<<4&4294967295|b>>>28),b=C+(v^_^T)+S[8]+2272392833&4294967295,C=v+(b<<11&4294967295|b>>>21),b=T+(C^v^_)+S[11]+1839030562&4294967295,T=C+(b<<16&4294967295|b>>>16),b=_+(T^C^v)+S[14]+4259657740&4294967295,_=T+(b<<23&4294967295|b>>>9),b=v+(_^T^C)+S[1]+2763975236&4294967295,v=_+(b<<4&4294967295|b>>>28),b=C+(v^_^T)+S[4]+1272893353&4294967295,C=v+(b<<11&4294967295|b>>>21),b=T+(C^v^_)+S[7]+4139469664&4294967295,T=C+(b<<16&4294967295|b>>>16),b=_+(T^C^v)+S[10]+3200236656&4294967295,_=T+(b<<23&4294967295|b>>>9),b=v+(_^T^C)+S[13]+681279174&4294967295,v=_+(b<<4&4294967295|b>>>28),b=C+(v^_^T)+S[0]+3936430074&4294967295,C=v+(b<<11&4294967295|b>>>21),b=T+(C^v^_)+S[3]+3572445317&4294967295,T=C+(b<<16&4294967295|b>>>16),b=_+(T^C^v)+S[6]+76029189&4294967295,_=T+(b<<23&4294967295|b>>>9),b=v+(_^T^C)+S[9]+3654602809&4294967295,v=_+(b<<4&4294967295|b>>>28),b=C+(v^_^T)+S[12]+3873151461&4294967295,C=v+(b<<11&4294967295|b>>>21),b=T+(C^v^_)+S[15]+530742520&4294967295,T=C+(b<<16&4294967295|b>>>16),b=_+(T^C^v)+S[2]+3299628645&4294967295,_=T+(b<<23&4294967295|b>>>9),b=v+(T^(_|~C))+S[0]+4096336452&4294967295,v=_+(b<<6&4294967295|b>>>26),b=C+(_^(v|~T))+S[7]+1126891415&4294967295,C=v+(b<<10&4294967295|b>>>22),b=T+(v^(C|~_))+S[14]+2878612391&4294967295,T=C+(b<<15&4294967295|b>>>17),b=_+(C^(T|~v))+S[5]+4237533241&4294967295,_=T+(b<<21&4294967295|b>>>11),b=v+(T^(_|~C))+S[12]+1700485571&4294967295,v=_+(b<<6&4294967295|b>>>26),b=C+(_^(v|~T))+S[3]+2399980690&4294967295,C=v+(b<<10&4294967295|b>>>22),b=T+(v^(C|~_))+S[10]+4293915773&4294967295,T=C+(b<<15&4294967295|b>>>17),b=_+(C^(T|~v))+S[1]+2240044497&4294967295,_=T+(b<<21&4294967295|b>>>11),b=v+(T^(_|~C))+S[8]+1873313359&4294967295,v=_+(b<<6&4294967295|b>>>26),b=C+(_^(v|~T))+S[15]+4264355552&4294967295,C=v+(b<<10&4294967295|b>>>22),b=T+(v^(C|~_))+S[6]+2734768916&4294967295,T=C+(b<<15&4294967295|b>>>17),b=_+(C^(T|~v))+S[13]+1309151649&4294967295,_=T+(b<<21&4294967295|b>>>11),b=v+(T^(_|~C))+S[4]+4149444226&4294967295,v=_+(b<<6&4294967295|b>>>26),b=C+(_^(v|~T))+S[11]+3174756917&4294967295,C=v+(b<<10&4294967295|b>>>22),b=T+(v^(C|~_))+S[2]+718787259&4294967295,T=C+(b<<15&4294967295|b>>>17),b=_+(C^(T|~v))+S[9]+3951481745&4294967295,y.g[0]=y.g[0]+v&4294967295,y.g[1]=y.g[1]+(T+(b<<21&4294967295|b>>>11))&4294967295,y.g[2]=y.g[2]+T&4294967295,y.g[3]=y.g[3]+C&4294967295}r.prototype.v=function(y,v){v===void 0&&(v=y.length);const _=v-this.blockSize,S=this.C;let T=this.h,C=0;for(;C<v;){if(T==0)for(;C<=_;)s(this,y,C),C+=this.blockSize;if(typeof y=="string"){for(;C<v;)if(S[T++]=y.charCodeAt(C++),T==this.blockSize){s(this,S),T=0;break}}else for(;C<v;)if(S[T++]=y[C++],T==this.blockSize){s(this,S),T=0;break}}this.h=T,this.o+=v},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var v=1;v<y.length-8;++v)y[v]=0;v=this.o*8;for(var _=y.length-8;_<y.length;++_)y[_]=v&255,v/=256;for(this.v(y),y=Array(16),v=0,_=0;_<4;++_)for(let S=0;S<32;S+=8)y[v++]=this.g[_]>>>S&255;return y};function i(y,v){var _=c;return Object.prototype.hasOwnProperty.call(_,y)?_[y]:_[y]=v(y)}function o(y,v){this.h=v;const _=[];let S=!0;for(let T=y.length-1;T>=0;T--){const C=y[T]|0;S&&C==v||(_[T]=C,S=!1)}this.g=_}var c={};function u(y){return-128<=y&&y<128?i(y,function(v){return new o([v|0],v<0?-1:0)}):new o([y|0],y<0?-1:0)}function h(y){if(isNaN(y)||!isFinite(y))return p;if(y<0)return L(h(-y));const v=[];let _=1;for(let S=0;y>=_;S++)v[S]=y/_|0,_*=4294967296;return new o(v,0)}function m(y,v){if(y.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(y.charAt(0)=="-")return L(m(y.substring(1),v));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(v,8));let S=p;for(let C=0;C<y.length;C+=8){var T=Math.min(8,y.length-C);const b=parseInt(y.substring(C,C+T),v);T<8?(T=h(Math.pow(v,T)),S=S.j(T).add(h(b))):(S=S.j(_),S=S.add(h(b)))}return S}var p=u(0),g=u(1),N=u(16777216);t=o.prototype,t.m=function(){if(j(this))return-L(this).m();let y=0,v=1;for(let _=0;_<this.g.length;_++){const S=this.i(_);y+=(S>=0?S:4294967296+S)*v,v*=4294967296}return y},t.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(A(this))return"0";if(j(this))return"-"+L(this).toString(y);const v=h(Math.pow(y,6));var _=this;let S="";for(;;){const T=D(_,v).g;_=E(_,T.j(v));let C=((_.g.length>0?_.g[0]:_.h)>>>0).toString(y);if(_=T,A(_))return C+S;for(;C.length<6;)C="0"+C;S=C+S}},t.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function A(y){if(y.h!=0)return!1;for(let v=0;v<y.g.length;v++)if(y.g[v]!=0)return!1;return!0}function j(y){return y.h==-1}t.l=function(y){return y=E(this,y),j(y)?-1:A(y)?0:1};function L(y){const v=y.g.length,_=[];for(let S=0;S<v;S++)_[S]=~y.g[S];return new o(_,~y.h).add(g)}t.abs=function(){return j(this)?L(this):this},t.add=function(y){const v=Math.max(this.g.length,y.g.length),_=[];let S=0;for(let T=0;T<=v;T++){let C=S+(this.i(T)&65535)+(y.i(T)&65535),b=(C>>>16)+(this.i(T)>>>16)+(y.i(T)>>>16);S=b>>>16,C&=65535,b&=65535,_[T]=b<<16|C}return new o(_,_[_.length-1]&-2147483648?-1:0)};function E(y,v){return y.add(L(v))}t.j=function(y){if(A(this)||A(y))return p;if(j(this))return j(y)?L(this).j(L(y)):L(L(this).j(y));if(j(y))return L(this.j(L(y)));if(this.l(N)<0&&y.l(N)<0)return h(this.m()*y.m());const v=this.g.length+y.g.length,_=[];for(var S=0;S<2*v;S++)_[S]=0;for(S=0;S<this.g.length;S++)for(let T=0;T<y.g.length;T++){const C=this.i(S)>>>16,b=this.i(S)&65535,Z=y.i(T)>>>16,k=y.i(T)&65535;_[2*S+2*T]+=b*k,w(_,2*S+2*T),_[2*S+2*T+1]+=C*k,w(_,2*S+2*T+1),_[2*S+2*T+1]+=b*Z,w(_,2*S+2*T+1),_[2*S+2*T+2]+=C*Z,w(_,2*S+2*T+2)}for(y=0;y<v;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=v;y<2*v;y++)_[y]=0;return new o(_,0)};function w(y,v){for(;(y[v]&65535)!=y[v];)y[v+1]+=y[v]>>>16,y[v]&=65535,v++}function I(y,v){this.g=y,this.h=v}function D(y,v){if(A(v))throw Error("division by zero");if(A(y))return new I(p,p);if(j(y))return v=D(L(y),v),new I(L(v.g),L(v.h));if(j(v))return v=D(y,L(v)),new I(L(v.g),v.h);if(y.g.length>30){if(j(y)||j(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,S=v;S.l(y)<=0;)_=z(_),S=z(S);var T=R(_,1),C=R(S,1);for(S=R(S,2),_=R(_,2);!A(S);){var b=C.add(S);b.l(y)<=0&&(T=T.add(_),C=b),S=R(S,1),_=R(_,1)}return v=E(y,T.j(v)),new I(T,v)}for(T=p;y.l(v)>=0;){for(_=Math.max(1,Math.floor(y.m()/v.m())),S=Math.ceil(Math.log(_)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),C=h(_),b=C.j(v);j(b)||b.l(y)>0;)_-=S,C=h(_),b=C.j(v);A(C)&&(C=g),T=T.add(C),y=E(y,b)}return new I(T,y)}t.B=function(y){return D(this,y).h},t.and=function(y){const v=Math.max(this.g.length,y.g.length),_=[];for(let S=0;S<v;S++)_[S]=this.i(S)&y.i(S);return new o(_,this.h&y.h)},t.or=function(y){const v=Math.max(this.g.length,y.g.length),_=[];for(let S=0;S<v;S++)_[S]=this.i(S)|y.i(S);return new o(_,this.h|y.h)},t.xor=function(y){const v=Math.max(this.g.length,y.g.length),_=[];for(let S=0;S<v;S++)_[S]=this.i(S)^y.i(S);return new o(_,this.h^y.h)};function z(y){const v=y.g.length+1,_=[];for(let S=0;S<v;S++)_[S]=y.i(S)<<1|y.i(S-1)>>>31;return new o(_,y.h)}function R(y,v){const _=v>>5;v%=32;const S=y.g.length-_,T=[];for(let C=0;C<S;C++)T[C]=v>0?y.i(C+_)>>>v|y.i(C+_+1)<<32-v:y.i(C+_);return new o(T,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,c_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=m,Mr=o}).apply(typeof Jg<"u"?Jg:typeof self<"u"?self:typeof window<"u"?window:{});var nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u_,mo,d_,Sl,gh,h_,f_,m_;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof nl=="object"&&nl];for(var d=0;d<a.length;++d){var f=a[d];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,d){if(d)e:{var f=r;a=a.split(".");for(var x=0;x<a.length-1;x++){var P=a[x];if(!(P in f))break e;f=f[P]}a=a[a.length-1],x=f[a],d=d(x),d!=x&&d!=null&&e(f,a,{configurable:!0,writable:!0,value:d})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(d){var f=[],x;for(x in d)Object.prototype.hasOwnProperty.call(d,x)&&f.push([x,d[x]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function u(a,d,f){return a.call.apply(a.bind,arguments)}function h(a,d,f){return h=u,h.apply(null,arguments)}function m(a,d){var f=Array.prototype.slice.call(arguments,1);return function(){var x=f.slice();return x.push.apply(x,arguments),a.apply(this,x)}}function p(a,d){function f(){}f.prototype=d.prototype,a.Z=d.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(x,P,M){for(var K=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)K[ce-2]=arguments[ce];return d.prototype[P].apply(x,K)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function N(a){const d=a.length;if(d>0){const f=Array(d);for(let x=0;x<d;x++)f[x]=a[x];return f}return[]}function A(a,d){for(let x=1;x<arguments.length;x++){const P=arguments[x];var f=typeof P;if(f=f!="object"?f:P?Array.isArray(P)?"array":f:"null",f=="array"||f=="object"&&typeof P.length=="number"){f=a.length||0;const M=P.length||0;a.length=f+M;for(let K=0;K<M;K++)a[f+K]=P[K]}else a.push(P)}}class j{constructor(d,f){this.i=d,this.j=f,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function L(a){o.setTimeout(()=>{throw a},0)}function E(){var a=y;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class w{constructor(){this.h=this.g=null}add(d,f){const x=I.get();x.set(d,f),this.h?this.h.next=x:this.g=x,this.h=x}}var I=new j(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(d,f){this.h=d,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let z,R=!1,y=new w,v=()=>{const a=Promise.resolve(void 0);z=()=>{a.then(_)}};function _(){for(var a;a=E();){try{a.h.call(a.g)}catch(f){L(f)}var d=I;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}R=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,d),o.removeEventListener("test",f,d)}catch{}return a}();function b(a){return/^[\s\xa0]*$/.test(a)}function Z(a,d){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}p(Z,T),Z.prototype.init=function(a,d){const f=this.type=a.type,x=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(f=="mouseover"?d=a.fromElement:f=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var k="closure_listenable_"+(Math.random()*1e6|0),V=0;function $(a,d,f,x,P){this.listener=a,this.proxy=null,this.src=d,this.type=f,this.capture=!!x,this.ha=P,this.key=++V,this.da=this.fa=!1}function O(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function F(a,d,f){for(const x in a)d.call(f,a[x],x,a)}function q(a,d){for(const f in a)d.call(void 0,a[f],f,a)}function Y(a){const d={};for(const f in a)d[f]=a[f];return d}const G="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oe(a,d){let f,x;for(let P=1;P<arguments.length;P++){x=arguments[P];for(f in x)a[f]=x[f];for(let M=0;M<G.length;M++)f=G[M],Object.prototype.hasOwnProperty.call(x,f)&&(a[f]=x[f])}}function Q(a){this.src=a,this.g={},this.h=0}Q.prototype.add=function(a,d,f,x,P){const M=a.toString();a=this.g[M],a||(a=this.g[M]=[],this.h++);const K=ve(a,d,x,P);return K>-1?(d=a[K],f||(d.fa=!1)):(d=new $(d,this.src,M,!!x,P),d.fa=f,a.push(d)),d};function Ht(a,d){const f=d.type;if(f in a.g){var x=a.g[f],P=Array.prototype.indexOf.call(x,d,void 0),M;(M=P>=0)&&Array.prototype.splice.call(x,P,1),M&&(O(d),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ve(a,d,f,x){for(let P=0;P<a.length;++P){const M=a[P];if(!M.da&&M.listener==d&&M.capture==!!f&&M.ha==x)return P}return-1}var tt="closure_lm_"+(Math.random()*1e6|0),Ie={};function rn(a,d,f,x,P){if(Array.isArray(d)){for(let M=0;M<d.length;M++)rn(a,d[M],f,x,P);return null}return f=Ta(f),a&&a[k]?a.J(d,f,c(x)?!!x.capture:!1,P):su(a,d,f,!1,x,P)}function su(a,d,f,x,P,M){if(!d)throw Error("Invalid event type");const K=c(P)?!!P.capture:!!P;let ce=Ui(a);if(ce||(a[tt]=ce=new Q(a)),f=ce.add(d,f,x,K,M),f.proxy)return f;if(x=rr(),f.proxy=x,x.src=a,x.listener=f,a.addEventListener)C||(P=K),P===void 0&&(P=!1),a.addEventListener(d.toString(),x,P);else if(a.attachEvent)a.attachEvent(Vi(d.toString()),x);else if(a.addListener&&a.removeListener)a.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return f}function rr(){function a(f){return d.call(a.src,a.listener,f)}const d=iu;return a}function Wt(a,d,f,x,P){if(Array.isArray(d))for(var M=0;M<d.length;M++)Wt(a,d[M],f,x,P);else x=c(x)?!!x.capture:!!x,f=Ta(f),a&&a[k]?(a=a.i,M=String(d).toString(),M in a.g&&(d=a.g[M],f=ve(d,f,x,P),f>-1&&(O(d[f]),Array.prototype.splice.call(d,f,1),d.length==0&&(delete a.g[M],a.h--)))):a&&(a=Ui(a))&&(d=a.g[d.toString()],a=-1,d&&(a=ve(d,f,x,P)),(f=a>-1?d[a]:null)&&Oi(f))}function Oi(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[k])Ht(d.i,a);else{var f=a.type,x=a.proxy;d.removeEventListener?d.removeEventListener(f,x,a.capture):d.detachEvent?d.detachEvent(Vi(f),x):d.addListener&&d.removeListener&&d.removeListener(x),(f=Ui(d))?(Ht(f,a),f.h==0&&(f.src=null,d[tt]=null)):O(a)}}}function Vi(a){return a in Ie?Ie[a]:Ie[a]="on"+a}function iu(a,d){if(a.da)a=!0;else{d=new Z(d,this);const f=a.listener,x=a.ha||a.src;a.fa&&Oi(a),a=f.call(x,d)}return a}function Ui(a){return a=a[tt],a instanceof Q?a:null}var zi="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ta(a){return typeof a=="function"?a:(a[zi]||(a[zi]=function(d){return a.handleEvent(d)}),a[zi])}function nt(){S.call(this),this.i=new Q(this),this.M=this,this.G=null}p(nt,S),nt.prototype[k]=!0,nt.prototype.removeEventListener=function(a,d,f,x){Wt(this,a,d,f,x)};function lt(a,d){var f,x=a.G;if(x)for(f=[];x;x=x.G)f.push(x);if(a=a.M,x=d.type||d,typeof d=="string")d=new T(d,a);else if(d instanceof T)d.target=d.target||a;else{var P=d;d=new T(x,a),oe(d,P)}P=!0;let M,K;if(f)for(K=f.length-1;K>=0;K--)M=d.g=f[K],P=Rs(M,x,!0,d)&&P;if(M=d.g=a,P=Rs(M,x,!0,d)&&P,P=Rs(M,x,!1,d)&&P,f)for(K=0;K<f.length;K++)M=d.g=f[K],P=Rs(M,x,!1,d)&&P}nt.prototype.N=function(){if(nt.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const f=a.g[d];for(let x=0;x<f.length;x++)O(f[x]);delete a.g[d],a.h--}}this.G=null},nt.prototype.J=function(a,d,f,x){return this.i.add(String(a),d,!1,f,x)},nt.prototype.K=function(a,d,f,x){return this.i.add(String(a),d,!0,f,x)};function Rs(a,d,f,x){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let P=!0;for(let M=0;M<d.length;++M){const K=d[M];if(K&&!K.da&&K.capture==f){const ce=K.listener,Ye=K.ha||K.src;K.fa&&Ht(a.i,K),P=ce.call(Ye,x)!==!1&&P}}return P&&!x.defaultPrevented}function ou(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function au(a){a.g=ou(()=>{a.g=null,a.i&&(a.i=!1,au(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class sr extends S{constructor(d,f){super(),this.m=d,this.l=f,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:au(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jn(a){S.call(this),this.h=a,this.g={}}p(jn,S);var se=[];function ue(a){F(a.g,function(d,f){this.g.hasOwnProperty(f)&&Oi(d)},a),a.g={}}jn.prototype.N=function(){jn.Z.N.call(this),ue(this)},jn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var we=o.JSON.stringify,Fe=o.JSON.parse,xe=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function le(){}function Fi(){}var We={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gn(){T.call(this,"d")}p(gn,T);function Et(){T.call(this,"c")}p(Et,T);var Ne={},Zr=null;function Se(){return Zr=Zr||new nt}Ne.Ia="serverreachability";function ct(a){T.call(this,Ne.Ia,a)}p(ct,T);function Re(a){const d=Se();lt(d,new ct(d))}Ne.STAT_EVENT="statevent";function Mt(a,d){T.call(this,Ne.STAT_EVENT,a),this.stat=d}p(Mt,T);function qe(a){const d=Se();lt(d,new Mt(d,a))}Ne.Ja="timingevent";function js(a,d){T.call(this,Ne.Ja,a),this.size=d}p(js,T);function qt(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function es(){this.g=!0}es.prototype.ua=function(){this.g=!1};function Ia(a,d,f,x,P,M){a.info(function(){if(a.g)if(M){var K="",ce=M.split("&");for(let Ee=0;Ee<ce.length;Ee++){var Ye=ce[Ee].split("=");if(Ye.length>1){const rt=Ye[0];Ye=Ye[1];const vn=rt.split("_");K=vn.length>=2&&vn[1]=="type"?K+(rt+"="+Ye+"&"):K+(rt+"=redacted&")}}}else K=null;else K=M;return"XMLHTTP REQ ("+x+") [attempt "+P+"]: "+d+`
`+f+`
`+K})}function Na(a,d,f,x,P,M,K){a.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+P+"]: "+d+`
`+f+`
`+M+" "+K})}function Ds(a,d,f,x){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+Bw(a,f)+(x?" "+x:"")})}function Fw(a,d){a.info(function(){return"TIMEOUT: "+d})}es.prototype.info=function(){};function Bw(a,d){if(!a.g)return d;if(!d)return null;try{const M=JSON.parse(d);if(M){for(a=0;a<M.length;a++)if(Array.isArray(M[a])){var f=M[a];if(!(f.length<2)){var x=f[1];if(Array.isArray(x)&&!(x.length<1)){var P=x[0];if(P!="noop"&&P!="stop"&&P!="close")for(let K=1;K<x.length;K++)x[K]=""}}}}return we(M)}catch{return d}}var Ca={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},_m={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},wm;function lu(){}p(lu,le),lu.prototype.g=function(){return new XMLHttpRequest},wm=new lu;function Bi(a){return encodeURIComponent(String(a))}function $w(a){var d=1;a=a.split(":");const f=[];for(;d>0&&a.length;)f.push(a.shift()),d--;return a.length&&f.push(a.join(":")),f}function ir(a,d,f,x){this.j=a,this.i=d,this.l=f,this.S=x||1,this.V=new jn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new bm}function bm(){this.i=null,this.g="",this.h=!1}var Sm={},cu={};function uu(a,d,f){a.M=1,a.A=Aa(yn(d)),a.u=f,a.R=!0,Em(a,null)}function Em(a,d){a.F=Date.now(),ka(a),a.B=yn(a.A);var f=a.B,x=a.S;Array.isArray(x)||(x=[String(x)]),Om(f.i,"t",x),a.C=0,f=a.j.L,a.h=new bm,a.g=tp(a.j,f?d:null,!a.u),a.P>0&&(a.O=new sr(h(a.Y,a,a.g),a.P)),d=a.V,f=a.g,x=a.ba;var P="readystatechange";Array.isArray(P)||(P&&(se[0]=P.toString()),P=se);for(let M=0;M<P.length;M++){const K=rn(f,P[M],x||d.handleEvent,!1,d.h||d);if(!K)break;d.g[K.key]=K}d=a.J?Y(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),Re(),Ia(a.i,a.v,a.B,a.l,a.S,a.u)}ir.prototype.ba=function(a){a=a.target;const d=this.O;d&&lr(a)==3?d.j():this.Y(a)},ir.prototype.Y=function(a){try{if(a==this.g)e:{const ce=lr(this.g),Ye=this.g.ya(),Ee=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||Hm(this.g)))){this.K||ce!=4||Ye==7||(Ye==8||Ee<=0?Re(3):Re(2)),du(this);var d=this.g.ca();this.X=d;var f=Hw(this);if(this.o=d==200,Na(this.i,this.v,this.B,this.l,this.S,ce,d),this.o){if(this.U&&!this.L){t:{if(this.g){var x,P=this.g;if((x=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(x)){var M=x;break t}}M=null}if(a=M)Ds(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,hu(this,a);else{this.o=!1,this.m=3,qe(12),ts(this),$i(this);break e}}if(this.R){a=!0;let rt;for(;!this.K&&this.C<f.length;)if(rt=Ww(this,f),rt==cu){ce==4&&(this.m=4,qe(14),a=!1),Ds(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==Sm){this.m=4,qe(15),Ds(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else Ds(this.i,this.l,rt,null),hu(this,rt);if(Tm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||f.length!=0||this.h.h||(this.m=1,qe(16),a=!1),this.o=this.o&&a,!a)Ds(this.i,this.l,f,"[Invalid Chunked Response]"),ts(this),$i(this);else if(f.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),_u(K),K.P=!0,qe(11))}}else Ds(this.i,this.l,f,null),hu(this,f);ce==4&&ts(this),this.o&&!this.K&&(ce==4?Jm(this.j,this):(this.o=!1,ka(this)))}else i1(this.g),d==400&&f.indexOf("Unknown SID")>0?(this.m=3,qe(12)):(this.m=0,qe(13)),ts(this),$i(this)}}}catch{}finally{}};function Hw(a){if(!Tm(a))return a.g.la();const d=Hm(a.g);if(d==="")return"";let f="";const x=d.length,P=lr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ts(a),$i(a),"";a.h.i=new o.TextDecoder}for(let M=0;M<x;M++)a.h.h=!0,f+=a.h.i.decode(d[M],{stream:!(P&&M==x-1)});return d.length=0,a.h.g+=f,a.C=0,a.h.g}function Tm(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ww(a,d){var f=a.C,x=d.indexOf(`
`,f);return x==-1?cu:(f=Number(d.substring(f,x)),isNaN(f)?Sm:(x+=1,x+f>d.length?cu:(d=d.slice(x,x+f),a.C=x+f,d)))}ir.prototype.cancel=function(){this.K=!0,ts(this)};function ka(a){a.T=Date.now()+a.H,Im(a,a.H)}function Im(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=qt(h(a.aa,a),d)}function du(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ir.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Fw(this.i,this.B),this.M!=2&&(Re(),qe(17)),ts(this),this.m=2,$i(this)):Im(this,this.T-a)};function $i(a){a.j.I==0||a.K||Jm(a.j,a)}function ts(a){du(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,ue(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function hu(a,d){try{var f=a.j;if(f.I!=0&&(f.g==a||fu(f.h,a))){if(!a.L&&fu(f.h,a)&&f.I==3){try{var x=f.Ba.g.parse(d)}catch{x=null}if(Array.isArray(x)&&x.length==3){var P=x;if(P[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Ma(f),ja(f);else break e;xu(f),qe(18)}}else f.xa=P[1],0<f.xa-f.K&&P[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=qt(h(f.Va,f),6e3));km(f.h)<=1&&f.ta&&(f.ta=void 0)}else rs(f,11)}else if((a.L||f.g==a)&&Ma(f),!b(d))for(P=f.Ba.g.parse(d),d=0;d<P.length;d++){let Ee=P[d];const rt=Ee[0];if(!(rt<=f.K))if(f.K=rt,Ee=Ee[1],f.I==2)if(Ee[0]=="c"){f.M=Ee[1],f.ba=Ee[2];const vn=Ee[3];vn!=null&&(f.ka=vn,f.j.info("VER="+f.ka));const ss=Ee[4];ss!=null&&(f.za=ss,f.j.info("SVER="+f.za));const cr=Ee[5];cr!=null&&typeof cr=="number"&&cr>0&&(x=1.5*cr,f.O=x,f.j.info("backChannelRequestTimeoutMs_="+x)),x=f;const ur=a.g;if(ur){const Oa=ur.g?ur.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oa){var M=x.h;M.g||Oa.indexOf("spdy")==-1&&Oa.indexOf("quic")==-1&&Oa.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(mu(M,M.h),M.h=null))}if(x.G){const wu=ur.g?ur.g.getResponseHeader("X-HTTP-Session-Id"):null;wu&&(x.wa=wu,Ce(x.J,x.G,wu))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),x=f;var K=a;if(x.na=ep(x,x.L?x.ba:null,x.W),K.L){Am(x.h,K);var ce=K,Ye=x.O;Ye&&(ce.H=Ye),ce.D&&(du(ce),ka(ce)),x.g=K}else Qm(x);f.i.length>0&&Da(f)}else Ee[0]!="stop"&&Ee[0]!="close"||rs(f,7);else f.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?rs(f,7):vu(f):Ee[0]!="noop"&&f.l&&f.l.qa(Ee),f.A=0)}}Re(4)}catch{}}var qw=class{constructor(a,d){this.g=a,this.map=d}};function Nm(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Cm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function km(a){return a.h?1:a.g?a.g.size:0}function fu(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function mu(a,d){a.g?a.g.add(d):a.h=d}function Am(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}Nm.prototype.cancel=function(){if(this.i=Pm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Pm(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const f of a.g.values())d=d.concat(f.G);return d}return N(a.i)}var Rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kw(a,d){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const x=a[f].indexOf("=");let P,M=null;x>=0?(P=a[f].substring(0,x),M=a[f].substring(x+1)):P=a[f],d(P,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function or(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof or?(this.l=a.l,Hi(this,a.j),this.o=a.o,this.g=a.g,Wi(this,a.u),this.h=a.h,pu(this,Vm(a.i)),this.m=a.m):a&&(d=String(a).match(Rm))?(this.l=!1,Hi(this,d[1]||"",!0),this.o=qi(d[2]||""),this.g=qi(d[3]||"",!0),Wi(this,d[4]),this.h=qi(d[5]||"",!0),pu(this,d[6]||"",!0),this.m=qi(d[7]||"")):(this.l=!1,this.i=new Gi(null,this.l))}or.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(Ki(d,jm,!0),":");var f=this.g;return(f||d=="file")&&(a.push("//"),(d=this.o)&&a.push(Ki(d,jm,!0),"@"),a.push(Bi(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ki(f,f.charAt(0)=="/"?Yw:Qw,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ki(f,Xw)),a.join("")},or.prototype.resolve=function(a){const d=yn(this);let f=!!a.j;f?Hi(d,a.j):f=!!a.o,f?d.o=a.o:f=!!a.g,f?d.g=a.g:f=a.u!=null;var x=a.h;if(f)Wi(d,a.u);else if(f=!!a.h){if(x.charAt(0)!="/")if(this.g&&!this.h)x="/"+x;else{var P=d.h.lastIndexOf("/");P!=-1&&(x=d.h.slice(0,P+1)+x)}if(P=x,P==".."||P==".")x="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){x=P.lastIndexOf("/",0)==0,P=P.split("/");const M=[];for(let K=0;K<P.length;){const ce=P[K++];ce=="."?x&&K==P.length&&M.push(""):ce==".."?((M.length>1||M.length==1&&M[0]!="")&&M.pop(),x&&K==P.length&&M.push("")):(M.push(ce),x=!0)}x=M.join("/")}else x=P}return f?d.h=x:f=a.i.toString()!=="",f?pu(d,Vm(a.i)):f=!!a.m,f&&(d.m=a.m),d};function yn(a){return new or(a)}function Hi(a,d,f){a.j=f?qi(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function Wi(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function pu(a,d,f){d instanceof Gi?(a.i=d,Zw(a.i,a.l)):(f||(d=Ki(d,Jw)),a.i=new Gi(d,a.l))}function Ce(a,d,f){a.i.set(d,f)}function Aa(a){return Ce(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function qi(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ki(a,d,f){return typeof a=="string"?(a=encodeURI(a).replace(d,Gw),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Gw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jm=/[#\/\?@]/g,Qw=/[#\?:]/g,Yw=/[#\?]/g,Jw=/[#\?@]/g,Xw=/#/g;function Gi(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function ns(a){a.g||(a.g=new Map,a.h=0,a.i&&Kw(a.i,function(d,f){a.add(decodeURIComponent(d.replace(/\+/g," ")),f)}))}t=Gi.prototype,t.add=function(a,d){ns(this),this.i=null,a=Ms(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(d),this.h+=1,this};function Dm(a,d){ns(a),d=Ms(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Mm(a,d){return ns(a),d=Ms(a,d),a.g.has(d)}t.forEach=function(a,d){ns(this),this.g.forEach(function(f,x){f.forEach(function(P){a.call(d,P,x,this)},this)},this)};function Lm(a,d){ns(a);let f=[];if(typeof d=="string")Mm(a,d)&&(f=f.concat(a.g.get(Ms(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)f=f.concat(a[d]);return f}t.set=function(a,d){return ns(this),this.i=null,a=Ms(this,a),Mm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=Lm(this,a),a.length>0?String(a[0]):d):d};function Om(a,d,f){Dm(a,d),f.length>0&&(a.i=null,a.g.set(Ms(a,d),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let x=0;x<d.length;x++){var f=d[x];const P=Bi(f);f=Lm(this,f);for(let M=0;M<f.length;M++){let K=P;f[M]!==""&&(K+="="+Bi(f[M])),a.push(K)}}return this.i=a.join("&")};function Vm(a){const d=new Gi;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function Ms(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function Zw(a,d){d&&!a.j&&(ns(a),a.i=null,a.g.forEach(function(f,x){const P=x.toLowerCase();x!=P&&(Dm(this,x),Om(this,P,f))},a)),a.j=d}function e1(a,d){const f=new es;if(o.Image){const x=new Image;x.onload=m(ar,f,"TestLoadImage: loaded",!0,d,x),x.onerror=m(ar,f,"TestLoadImage: error",!1,d,x),x.onabort=m(ar,f,"TestLoadImage: abort",!1,d,x),x.ontimeout=m(ar,f,"TestLoadImage: timeout",!1,d,x),o.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=a}else d(!1)}function t1(a,d){const f=new es,x=new AbortController,P=setTimeout(()=>{x.abort(),ar(f,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:x.signal}).then(M=>{clearTimeout(P),M.ok?ar(f,"TestPingServer: ok",!0,d):ar(f,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(P),ar(f,"TestPingServer: error",!1,d)})}function ar(a,d,f,x,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),x(f)}catch{}}function n1(){this.g=new xe}function gu(a){this.i=a.Sb||null,this.h=a.ab||!1}p(gu,le),gu.prototype.g=function(){return new Pa(this.i,this.h)};function Pa(a,d){nt.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Pa,nt),t=Pa.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,Yi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Um(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Um(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?Qi(this):Yi(this),this.readyState==3&&Um(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Qi(this))},t.Na=function(a){this.g&&(this.response=a,Qi(this))},t.ga=function(){this.g&&Qi(this)};function Qi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Yi(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var f=d.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=d.next();return a.join(`\r
`)};function Yi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function zm(a){let d="";return F(a,function(f,x){d+=x,d+=":",d+=f,d+=`\r
`}),d}function yu(a,d,f){e:{for(x in f){var x=!1;break e}x=!0}x||(f=zm(f),typeof a=="string"?f!=null&&Bi(f):Ce(a,d,f))}function Ue(a){nt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ue,nt);var r1=/^https?$/i,s1=["POST","PUT"];t=Ue.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,f,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():wm.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(M){Fm(this,M);return}if(a=f||"",f=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var P in x)f.set(P,x[P]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const M of x.keys())f.set(M,x.get(M));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(f.keys()).find(M=>M.toLowerCase()=="content-type"),P=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(s1,d,void 0)>=0)||x||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,K]of f)this.g.setRequestHeader(M,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(M){Fm(this,M)}};function Fm(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,Bm(a),Ra(a)}function Bm(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,lt(this,"complete"),lt(this,"abort"),Ra(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ra(this,!0)),Ue.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?$m(this):this.Xa())},t.Xa=function(){$m(this)};function $m(a){if(a.h&&typeof i<"u"){if(a.v&&lr(a)==4)setTimeout(a.Ca.bind(a),0);else if(lt(a,"readystatechange"),lr(a)==4){a.h=!1;try{const M=a.ca();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var f;if(!(f=d)){var x;if(x=M===0){let K=String(a.D).match(Rm)[1]||null;!K&&o.self&&o.self.location&&(K=o.self.location.protocol.slice(0,-1)),x=!r1.test(K?K.toLowerCase():"")}f=x}if(f)lt(a,"complete"),lt(a,"success");else{a.o=6;try{var P=lr(a)>2?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.ca()+"]",Bm(a)}}finally{Ra(a)}}}}function Ra(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,d||lt(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function lr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return lr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),Fe(d)}};function Hm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function i1(a){const d={};a=(a.g&&lr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<a.length;x++){if(b(a[x]))continue;var f=$w(a[x]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const M=d[P]||[];d[P]=M,M.push(f)}q(d,function(x){return x.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ji(a,d,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||d}function Wm(a){this.za=0,this.i=[],this.j=new es,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ji("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ji("baseRetryDelayMs",5e3,a),this.Za=Ji("retryDelaySeedMs",1e4,a),this.Ta=Ji("forwardChannelMaxRetries",2,a),this.va=Ji("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Nm(a&&a.concurrentRequestLimit),this.Ba=new n1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Wm.prototype,t.ka=8,t.I=1,t.connect=function(a,d,f,x){qe(0),this.W=a,this.H=d||{},f&&x!==void 0&&(this.H.OSID=f,this.H.OAID=x),this.F=this.X,this.J=ep(this,null,this.W),Da(this)};function vu(a){if(qm(a),a.I==3){var d=a.V++,f=yn(a.J);if(Ce(f,"SID",a.M),Ce(f,"RID",d),Ce(f,"TYPE","terminate"),Xi(a,f),d=new ir(a,a.j,d),d.M=2,d.A=Aa(yn(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=d.A,f=!0),f||(d.g=tp(d.j,null),d.g.ea(d.A)),d.F=Date.now(),ka(d)}Zm(a)}function ja(a){a.g&&(_u(a),a.g.cancel(),a.g=null)}function qm(a){ja(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ma(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Da(a){if(!Cm(a.h)&&!a.m){a.m=!0;var d=a.Ea;z||v(),R||(z(),R=!0),y.add(d,a),a.D=0}}function o1(a,d){return km(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=qt(h(a.Ea,a,d),Xm(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const P=new ir(this,this.j,a);let M=this.o;if(this.U&&(M?(M=Y(M),oe(M,this.U)):M=this.U),this.u!==null||this.R||(P.J=M,M=null),this.S)e:{for(var d=0,f=0;f<this.i.length;f++){t:{var x=this.i[f];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(d+=x,d>4096){d=f;break e}if(d===4096||f===this.i.length-1){d=f+1;break e}}d=1e3}else d=1e3;d=Gm(this,P,d),f=yn(this.J),Ce(f,"RID",a),Ce(f,"CVER",22),this.G&&Ce(f,"X-HTTP-Session-Id",this.G),Xi(this,f),M&&(this.R?d="headers="+Bi(zm(M))+"&"+d:this.u&&yu(f,this.u,M)),mu(this.h,P),this.Ra&&Ce(f,"TYPE","init"),this.S?(Ce(f,"$req",d),Ce(f,"SID","null"),P.U=!0,uu(P,f,null)):uu(P,f,d),this.I=2}}else this.I==3&&(a?Km(this,a):this.i.length==0||Cm(this.h)||Km(this))};function Km(a,d){var f;d?f=d.l:f=a.V++;const x=yn(a.J);Ce(x,"SID",a.M),Ce(x,"RID",f),Ce(x,"AID",a.K),Xi(a,x),a.u&&a.o&&yu(x,a.u,a.o),f=new ir(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),d&&(a.i=d.G.concat(a.i)),d=Gm(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),mu(a.h,f),uu(f,x,d)}function Xi(a,d){a.H&&F(a.H,function(f,x){Ce(d,x,f)}),a.l&&F({},function(f,x){Ce(d,x,f)})}function Gm(a,d,f){f=Math.min(a.i.length,f);const x=a.l?h(a.l.Ka,a.l,a):null;e:{var P=a.i;let ce=-1;for(;;){const Ye=["count="+f];ce==-1?f>0?(ce=P[0].g,Ye.push("ofs="+ce)):ce=0:Ye.push("ofs="+ce);let Ee=!0;for(let rt=0;rt<f;rt++){var M=P[rt].g;const vn=P[rt].map;if(M-=ce,M<0)ce=Math.max(0,P[rt].g-100),Ee=!1;else try{M="req"+M+"_"||"";try{var K=vn instanceof Map?vn:Object.entries(vn);for(const[ss,cr]of K){let ur=cr;c(cr)&&(ur=we(cr)),Ye.push(M+ss+"="+encodeURIComponent(ur))}}catch(ss){throw Ye.push(M+"type="+encodeURIComponent("_badmap")),ss}}catch{x&&x(vn)}}if(Ee){K=Ye.join("&");break e}}K=void 0}return a=a.i.splice(0,f),d.G=a,K}function Qm(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;z||v(),R||(z(),R=!0),y.add(d,a),a.A=0}}function xu(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=qt(h(a.Da,a),Xm(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Ym(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=qt(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,qe(10),ja(this),Ym(this))};function _u(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Ym(a){a.g=new ir(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=yn(a.na);Ce(d,"RID","rpc"),Ce(d,"SID",a.M),Ce(d,"AID",a.K),Ce(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ce(d,"TO",a.ia),Ce(d,"TYPE","xmlhttp"),Xi(a,d),a.u&&a.o&&yu(d,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Aa(yn(d)),f.u=null,f.R=!0,Em(f,a)}t.Va=function(){this.C!=null&&(this.C=null,ja(this),xu(this),qe(19))};function Ma(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Jm(a,d){var f=null;if(a.g==d){Ma(a),_u(a),a.g=null;var x=2}else if(fu(a.h,d))f=d.G,Am(a.h,d),x=1;else return;if(a.I!=0){if(d.o)if(x==1){f=d.u?d.u.length:0,d=Date.now()-d.F;var P=a.D;x=Se(),lt(x,new js(x,f)),Da(a)}else Qm(a);else if(P=d.m,P==3||P==0&&d.X>0||!(x==1&&o1(a,d)||x==2&&xu(a)))switch(f&&f.length>0&&(d=a.h,d.i=d.i.concat(f)),P){case 1:rs(a,5);break;case 4:rs(a,10);break;case 3:rs(a,6);break;default:rs(a,2)}}}function Xm(a,d){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*d}function rs(a,d){if(a.j.info("Error code "+d),d==2){var f=h(a.bb,a),x=a.Ua;const P=!x;x=new or(x||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Hi(x,"https"),Aa(x),P?e1(x.toString(),f):t1(x.toString(),f)}else qe(2);a.I=0,a.l&&a.l.pa(d),Zm(a),qm(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function Zm(a){if(a.I=0,a.ja=[],a.l){const d=Pm(a.h);(d.length!=0||a.i.length!=0)&&(A(a.ja,d),A(a.ja,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.oa()}}function ep(a,d,f){var x=f instanceof or?yn(f):new or(f);if(x.g!="")d&&(x.g=d+"."+x.g),Wi(x,x.u);else{var P=o.location;x=P.protocol,d=d?d+"."+P.hostname:P.hostname,P=+P.port;const M=new or(null);x&&Hi(M,x),d&&(M.g=d),P&&Wi(M,P),f&&(M.h=f),x=M}return f=a.G,d=a.wa,f&&d&&Ce(x,f,d),Ce(x,"VER",a.ka),Xi(a,x),x}function tp(a,d,f){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Ue(new gu({ab:f})):new Ue(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function np(){}t=np.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function La(){}La.prototype.g=function(a,d){return new Lt(a,d)};function Lt(a,d){nt.call(this),this.g=new Wm(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!b(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!b(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Ls(this)}p(Lt,nt),Lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){vu(this.g)},Lt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=we(a),a=f);d.i.push(new qw(d.Ya++,a)),d.I==3&&Da(d)},Lt.prototype.N=function(){this.g.l=null,delete this.j,vu(this.g),delete this.g,Lt.Z.N.call(this)};function rp(a){gn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const f in d){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}p(rp,gn);function sp(){Et.call(this),this.status=1}p(sp,Et);function Ls(a){this.g=a}p(Ls,np),Ls.prototype.ra=function(){lt(this.g,"a")},Ls.prototype.qa=function(a){lt(this.g,new rp(a))},Ls.prototype.pa=function(a){lt(this.g,new sp)},Ls.prototype.oa=function(){lt(this.g,"b")},La.prototype.createWebChannel=La.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,m_=function(){return new La},f_=function(){return Se()},h_=Ne,gh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ca.NO_ERROR=0,Ca.TIMEOUT=8,Ca.HTTP_ERROR=6,Sl=Ca,_m.COMPLETE="complete",d_=_m,Fi.EventType=We,We.OPEN="a",We.CLOSE="b",We.ERROR="c",We.MESSAGE="d",nt.prototype.listen=nt.prototype.J,mo=Fi,Ue.prototype.listenOnce=Ue.prototype.K,Ue.prototype.getLastError=Ue.prototype.Ha,Ue.prototype.getLastErrorCode=Ue.prototype.ya,Ue.prototype.getStatus=Ue.prototype.ca,Ue.prototype.getResponseJson=Ue.prototype.La,Ue.prototype.getResponseText=Ue.prototype.la,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Fa,u_=Ue}).apply(typeof nl<"u"?nl:typeof self<"u"?self:typeof window<"u"?window:{});const Xg="@firebase/firestore",Zg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Af("@firebase/firestore");function Vs(){return Ss.logLevel}function J(t,...e){if(Ss.logLevel<=fe.DEBUG){const n=e.map(Ff);Ss.debug(`Firestore (${ji}): ${t}`,...n)}}function Zn(t,...e){if(Ss.logLevel<=fe.ERROR){const n=e.map(Ff);Ss.error(`Firestore (${ji}): ${t}`,...n)}}function _i(t,...e){if(Ss.logLevel<=fe.WARN){const n=e.map(Ff);Ss.warn(`Firestore (${ji}): ${t}`,...n)}}function Ff(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,p_(t,r,n)}function p_(t,e,n){let r=`FIRESTORE (${ji}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Zn(r),new Error(r)}function _e(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||p_(e,s,r)}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends nr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class G2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class Q2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Y2{constructor(e){this.t=e,this.currentUser=xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Lr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Lr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Lr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string",31837,{l:r}),new g_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string",2055,{h:e}),new xt(e)}}class J2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class X2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new J2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ey{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){_e(this.o===void 0,3512);const r=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ey(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ey(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=eN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function yh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return td(s)===td(i)?me(s,i):td(s)?1:-1}return me(t.length,e.length)}const tN=55296,nN=57343;function td(t){const e=t.charCodeAt(0);return e>=tN&&e<=nN}function wi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="__name__";class wn{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&re(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=wn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return me(e.length,n.length)}static compareSegments(e,n){const r=wn.isNumericId(e),s=wn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?wn.extractNumericId(e).compare(wn.extractNumericId(n)):yh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mr.fromString(e.substring(4,e.length-2))}}class Me extends wn{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const rN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends wn{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return rN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ty}static keyField(){return new ht([ty])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ee(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new ee(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new ee(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new ee(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(Me.fromString(e))}static fromName(e){return new te(Me.fromString(e).popFirst(5))}static empty(){return new te(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new Me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t,e,n){if(!n)throw new ee(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iN(t,e,n,r){if(e===!0&&r===!0)throw new ee(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ny(t){if(!te.isDocumentKey(t))throw new ee(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function y_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function $f(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re(12329,{type:typeof t})}function ta(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$f(t);throw new ee(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function xa(t,e){if(!y_(t))throw new ee(B.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new ee(B.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=-62135596800,sy=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*sy);return new Ae(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ee(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ry)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sy}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xa(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ry;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:Qe("string",Ae._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Ae(0,0))}static max(){return new ie(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=-1;function oN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new zr(s,te.empty(),e)}function aN(t){return new zr(t.readTime,t.key,na)}class zr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zr(ie.min(),te.empty(),na)}static max(){return new zr(ie.max(),te.empty(),na)}}function lN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==cN)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(m=>{o[h]=m,++c,c===i&&r(o)},m=>s(m))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function dN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Mi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}$c.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=-1;function Hc(t){return t==null}function uc(t){return t===0&&1/t==-1/0}function hN(t){return typeof t=="number"&&Number.isInteger(t)&&!uc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="";function fN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=iy(e)),e=mN(t.get(n),e);return iy(e)}function mN(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case v_:n+="";break;default:n+=i}}return n}function iy(t){return t+v_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rl(this.root,e,this.comparator,!1)}getReverseIterator(){return new rl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rl(this.root,e,this.comparator,!0)}}class rl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ay(this.data.getIterator())}getIteratorFrom(e){return new ay(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class ay{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new un([])}unionWith(e){let n=new et(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new __("Invalid base64 string: "+i):i}}(e);return new pt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const pN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(t){if(_e(!!t,39018),typeof t=="string"){let e=0;const n=pN.exec(t);if(_e(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Br(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="server_timestamp",b_="__type__",S_="__previous_value__",E_="__local_write_time__";function Wf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[b_])==null?void 0:r.stringValue)===w_}function Wc(t){const e=t.mapValue.fields[S_];return Wf(e)?Wc(e):e}function ra(t){const e=Fr(t.mapValue.fields[E_].timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e,n,r,s,i,o,c,u,h,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=m}}const dc="(default)";class sa{constructor(e,n){this.projectId=e,this.database=n||dc}static empty(){return new sa("","")}get isDefaultDatabase(){return this.database===dc}isEqual(e){return e instanceof sa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="__type__",yN="__max__",sl={mapValue:{}},I_="__vector__",hc="value";function $r(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wf(t)?4:xN(t)?9007199254740991:vN(t)?10:11:re(28295,{value:t})}function Pn(t,e){if(t===e)return!0;const n=$r(t);if(n!==$r(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ra(t).isEqual(ra(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Fr(s.timestampValue),c=Fr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Br(s.bytesValue).isEqual(Br(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return $e(s.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(s.geoPointValue.longitude)===$e(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return $e(s.integerValue)===$e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=$e(s.doubleValue),c=$e(i.doubleValue);return o===c?uc(o)===uc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return wi(t.arrayValue.values||[],e.arrayValue.values||[],Pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(oy(o)!==oy(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Pn(o[u],c[u])))return!1;return!0}(t,e);default:return re(52216,{left:t})}}function ia(t,e){return(t.values||[]).find(n=>Pn(n,e))!==void 0}function bi(t,e){if(t===e)return 0;const n=$r(t),r=$r(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=$e(i.integerValue||i.doubleValue),u=$e(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(t,e);case 3:return ly(t.timestampValue,e.timestampValue);case 4:return ly(ra(t),ra(e));case 5:return yh(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Br(i),u=Br(o);return c.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),u=o.split("/");for(let h=0;h<c.length&&h<u.length;h++){const m=me(c[h],u[h]);if(m!==0)return m}return me(c.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=me($e(i.latitude),$e(o.latitude));return c!==0?c:me($e(i.longitude),$e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cy(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,N,A,j;const c=i.fields||{},u=o.fields||{},h=(g=c[hc])==null?void 0:g.arrayValue,m=(N=u[hc])==null?void 0:N.arrayValue,p=me(((A=h==null?void 0:h.values)==null?void 0:A.length)||0,((j=m==null?void 0:m.values)==null?void 0:j.length)||0);return p!==0?p:cy(h,m)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===sl.mapValue&&o===sl.mapValue)return 0;if(i===sl.mapValue)return 1;if(o===sl.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=o.fields||{},m=Object.keys(h);u.sort(),m.sort();for(let p=0;p<u.length&&p<m.length;++p){const g=yh(u[p],m[p]);if(g!==0)return g;const N=bi(c[u[p]],h[m[p]]);if(N!==0)return N}return me(u.length,m.length)}(t.mapValue,e.mapValue);default:throw re(23264,{he:n})}}function ly(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Fr(t),r=Fr(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function cy(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=bi(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function Si(t){return vh(t)}function vh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Fr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Br(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vh(n.fields[o])}`;return s+"}"}(t.mapValue):re(61005,{value:t})}function El(t){switch($r(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wc(t);return e?16+El(e):16;case 5:return 2*t.stringValue.length;case 6:return Br(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+El(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Cs(r.fields,(i,o)=>{s+=i.length+El(o)}),s}(t.mapValue);default:throw re(13486,{value:t})}}function xh(t){return!!t&&"integerValue"in t}function qf(t){return!!t&&"arrayValue"in t}function uy(t){return!!t&&"nullValue"in t}function dy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tl(t){return!!t&&"mapValue"in t}function vN(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[T_])==null?void 0:r.stringValue)===I_}function ko(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ko(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ko(t.arrayValue.values[n]);return e}return{...t}}function xN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===yN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ko(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ko(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Tl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Tl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Jt(ko(this.value))}}function N_(t){const e=[];return Cs(t.fields,(n,r)=>{const s=new ht([n]);if(Tl(r)){const i=N_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new wt(e,0,ie.min(),ie.min(),ie.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,s){return new wt(e,1,n,ie.min(),r,s,0)}static newNoDocument(e,n){return new wt(e,2,n,ie.min(),ie.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new wt(e,3,n,ie.min(),ie.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof wt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new wt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n){this.position=e,this.inclusive=n}}function hy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=bi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function fy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Pn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n="asc"){this.field=e,this.dir=n}}function _N(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{}class Xe extends C_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bN(e,n,r):n==="array-contains"?new TN(e,r):n==="in"?new IN(e,r):n==="not-in"?new NN(e,r):n==="array-contains-any"?new CN(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new SN(e,r):new EN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(bi(n,this.value)):n!==null&&$r(this.value)===$r(n)&&this.matchesComparison(bi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rn extends C_{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Rn(e,n)}matches(e){return k_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function k_(t){return t.op==="and"}function A_(t){return wN(t)&&k_(t)}function wN(t){for(const e of t.filters)if(e instanceof Rn)return!1;return!0}function _h(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Si(t.value);if(A_(t))return t.filters.map(e=>_h(e)).join(",");{const e=t.filters.map(n=>_h(n)).join(",");return`${t.op}(${e})`}}function P_(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&Pn(r.value,s.value)}(t,e):t instanceof Rn?function(r,s){return s instanceof Rn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&P_(o,s.filters[c]),!0):!1}(t,e):void re(19439)}function R_(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Si(n.value)}`}(t):t instanceof Rn?function(n){return n.op.toString()+" {"+n.getFilters().map(R_).join(" ,")+"}"}(t):"Filter"}class bN extends Xe{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class SN extends Xe{constructor(e,n){super(e,"in",n),this.keys=j_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class EN extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=j_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function j_(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class TN extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return qf(n)&&ia(n.arrayValue,this.value)}}class IN extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ia(this.value.arrayValue,n)}}class NN extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ia(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ia(this.value.arrayValue,n)}}class CN extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!qf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ia(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function my(t,e=null,n=[],r=[],s=null,i=null,o=null){return new kN(t,e,n,r,s,i,o)}function Kf(t){const e=ae(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_h(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Hc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Si(r)).join(",")),e.Te=n}return e.Te}function Gf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_N(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!P_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!fy(t.startAt,e.startAt)&&fy(t.endAt,e.endAt)}function wh(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function AN(t,e,n,r,s,i,o,c){return new qc(t,e,n,r,s,i,o,c)}function Qf(t){return new qc(t)}function py(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function PN(t){return t.collectionGroup!==null}function Ao(t){const e=ae(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new et(ht.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new mc(i,r))}),n.has(ht.keyField().canonicalString())||e.Ie.push(new mc(ht.keyField(),r))}return e.Ie}function Nn(t){const e=ae(t);return e.Ee||(e.Ee=RN(e,Ao(t))),e.Ee}function RN(t,e){if(t.limitType==="F")return my(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new mc(s.field,i)});const n=t.endAt?new fc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fc(t.startAt.position,t.startAt.inclusive):null;return my(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bh(t,e,n){return new qc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Kc(t,e){return Gf(Nn(t),Nn(e))&&t.limitType===e.limitType}function D_(t){return`${Kf(Nn(t))}|lt:${t.limitType}`}function Us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>R_(s)).join(", ")}]`),Hc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Si(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Si(s)).join(",")),`Target(${r})`}(Nn(t))}; limitType=${t.limitType})`}function Gc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ao(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,u){const h=hy(o,c,u);return o.inclusive?h<=0:h<0}(r.startAt,Ao(r),s)||r.endAt&&!function(o,c,u){const h=hy(o,c,u);return o.inclusive?h>=0:h>0}(r.endAt,Ao(r),s))}(t,e)}function jN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function M_(t){return(e,n)=>{let r=!1;for(const s of Ao(t)){const i=DN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function DN(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,c){const u=o.data.field(i),h=c.data.field(i);return u!==null&&h!==null?bi(u,h):re(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return x_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=new Ve(te.comparator);function er(){return MN}const L_=new Ve(te.comparator);function po(...t){let e=L_;for(const n of t)e=e.insert(n.key,n);return e}function O_(t){let e=L_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ds(){return Po()}function V_(){return Po()}function Po(){return new ks(t=>t.toString(),(t,e)=>t.isEqual(e))}const LN=new Ve(te.comparator),ON=new et(te.comparator);function pe(...t){let e=ON;for(const n of t)e=e.add(n);return e}const VN=new et(me);function UN(){return VN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function U_(t){return{integerValue:""+t}}function zN(t,e){return hN(e)?U_(e):Yf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this._=void 0}}function FN(t,e,n){return t instanceof pc?function(s,i){const o={fields:{[b_]:{stringValue:w_},[E_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wf(i)&&(i=Wc(i)),i&&(o.fields[S_]=i),{mapValue:o}}(n,e):t instanceof Ei?F_(t,e):t instanceof oa?B_(t,e):function(s,i){const o=z_(s,i),c=gy(o)+gy(s.Ae);return xh(o)&&xh(s.Ae)?U_(c):Yf(s.serializer,c)}(t,e)}function BN(t,e,n){return t instanceof Ei?F_(t,e):t instanceof oa?B_(t,e):n}function z_(t,e){return t instanceof gc?function(r){return xh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class pc extends Qc{}class Ei extends Qc{constructor(e){super(),this.elements=e}}function F_(t,e){const n=$_(e);for(const r of t.elements)n.some(s=>Pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class oa extends Qc{constructor(e){super(),this.elements=e}}function B_(t,e){let n=$_(e);for(const r of t.elements)n=n.filter(s=>!Pn(s,r));return{arrayValue:{values:n}}}class gc extends Qc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function gy(t){return $e(t.integerValue||t.doubleValue)}function $_(t){return qf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e,n){this.field=e,this.transform=n}}function HN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ei&&s instanceof Ei||r instanceof oa&&s instanceof oa?wi(r.elements,s.elements,Pn):r instanceof gc&&s instanceof gc?Pn(r.Ae,s.Ae):r instanceof pc&&s instanceof pc}(t.transform,e.transform)}class WN{constructor(e,n){this.version=e,this.transformResults=n}}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Yc{}function H_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new q_(t.key,qn.none()):new _a(t.key,t.data,qn.none());{const n=t.data,r=Jt.empty();let s=new et(ht.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new As(t.key,r,new un(s.toArray()),qn.none())}}function qN(t,e,n){t instanceof _a?function(s,i,o){const c=s.value.clone(),u=vy(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof As?function(s,i,o){if(!Il(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=vy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(W_(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,r){return t instanceof _a?function(i,o,c,u){if(!Il(i.precondition,o))return c;const h=i.value.clone(),m=xy(i.fieldTransforms,u,o);return h.setAll(m),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof As?function(i,o,c,u){if(!Il(i.precondition,o))return c;const h=xy(i.fieldTransforms,u,o),m=o.data;return m.setAll(W_(i)),m.setAll(h),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Il(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function KN(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=z_(r.transform,s||null);i!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,i))}return n||null}function yy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&wi(r,s,(i,o)=>HN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _a extends Yc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class As extends Yc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function W_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vy(t,e,n){const r=new Map;_e(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,BN(o,c,n[s]))}return r}function xy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,FN(i,o,e))}return r}class q_ extends Yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GN extends Yc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qN(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=V_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const u=H_(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&wi(this.mutations,e.mutations,(n,r)=>yy(n,r))&&wi(this.baseMutations,e.baseMutations,(n,r)=>yy(n,r))}}class Jf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){_e(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return LN}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Jf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,ge;function XN(t){switch(t){case B.OK:return re(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return re(15467,{code:t})}}function K_(t){if(t===void 0)return Zn("GRPC error has no .code"),B.UNKNOWN;switch(t){case Ke.OK:return B.OK;case Ke.CANCELLED:return B.CANCELLED;case Ke.UNKNOWN:return B.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return B.INTERNAL;case Ke.UNAVAILABLE:return B.UNAVAILABLE;case Ke.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ke.NOT_FOUND:return B.NOT_FOUND;case Ke.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ke.ABORTED:return B.ABORTED;case Ke.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ke.DATA_LOSS:return B.DATA_LOSS;default:return re(39323,{code:t})}}(ge=Ke||(Ke={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC=new Mr([4294967295,4294967295],0);function _y(t){const e=ZN().encode(t),n=new c_;return n.update(e),new Uint8Array(n.digest())}function wy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Mr([n,r],0),new Mr([s,i],0)]}class Xf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(r<0)throw new go(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Mr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Mr.fromNumber(r)));return s.compare(eC)===1&&(s=new Mr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=_y(e),[r,s]=wy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xf(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=_y(e),[r,s]=wy(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,wa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jc(ie.min(),s,new Ve(me),er(),pe())}}class wa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wa(r,n,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class G_{constructor(e,n){this.targetId=e,this.Ce=n}}class Q_{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class by{constructor(){this.ve=0,this.Fe=Sy(),this.Me=pt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=pe(),n=pe(),r=pe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re(38017,{changeType:i})}}),new wa(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Sy()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,_e(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class tC{constructor(e){this.Ge=e,this.ze=new Map,this.je=er(),this.Je=il(),this.He=il(),this.Ye=new Ve(me)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:re(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(wh(i))if(r===0){const o=new te(i.path);this.et(n,o,wt.newNoDocument(o,ie.min()))}else _e(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Br(r).toUint8Array()}catch(u){if(u instanceof __)return _i("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Xf(o,s,i)}catch(u){return _i(u instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&wh(c.target)){const u=new te(c.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,wt.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=pe();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Jc(e,n,this.Ye,this.je,r);return this.je=er(),this.Je=il(),this.He=il(),this.Ye=new Ve(me),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new by,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new et(me),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new et(me),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new by),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function il(){return new Ve(te.comparator)}function Sy(){return new Ve(te.comparator)}const nC={asc:"ASCENDING",desc:"DESCENDING"},rC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sC={and:"AND",or:"OR"};class iC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sh(t,e){return t.useProto3Json||Hc(e)?e:{value:e}}function yc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Y_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oC(t,e){return yc(t,e.toTimestamp())}function Cn(t){return _e(!!t,49232),ie.fromTimestamp(function(n){const r=Fr(n);return new Ae(r.seconds,r.nanos)}(t))}function Zf(t,e){return Eh(t,e).canonicalString()}function Eh(t,e){const n=function(s){return new Me(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function J_(t){const e=Me.fromString(t);return _e(nw(e),10190,{key:e.toString()}),e}function Th(t,e){return Zf(t.databaseId,e.path)}function nd(t,e){const n=J_(e);if(n.get(1)!==t.databaseId.projectId)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ee(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(Z_(n))}function X_(t,e){return Zf(t.databaseId,e)}function aC(t){const e=J_(t);return e.length===4?Me.emptyPath():Z_(e)}function Ih(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Z_(t){return _e(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ey(t,e,n){return{name:Th(t,e),fields:n.value.mapValue.fields}}function lC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,m){return h.useProto3Json?(_e(m===void 0||typeof m=="string",58123),pt.fromBase64String(m||"")):(_e(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),pt.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const m=h.code===void 0?B.UNKNOWN:K_(h.code);return new ee(m,h.message||"")}(o);n=new Q_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nd(t,r.document.name),i=Cn(r.document.updateTime),o=r.document.createTime?Cn(r.document.createTime):ie.min(),c=new Jt({mapValue:{fields:r.document.fields}}),u=wt.newFoundDocument(s,i,o,c),h=r.targetIds||[],m=r.removedTargetIds||[];n=new Nl(h,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nd(t,r.document),i=r.readTime?Cn(r.readTime):ie.min(),o=wt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Nl([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nd(t,r.document),i=r.removedTargetIds||[];n=new Nl([],i,s,null)}else{if(!("filter"in e))return re(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new JN(s,i),c=r.targetId;n=new G_(c,o)}}return n}function cC(t,e){let n;if(e instanceof _a)n={update:Ey(t,e.key,e.value)};else if(e instanceof q_)n={delete:Th(t,e.key)};else if(e instanceof As)n={update:Ey(t,e.key,e.data),updateMask:vC(e.fieldMask)};else{if(!(e instanceof GN))return re(16599,{Vt:e.type});n={verify:Th(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof pc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ei)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof oa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof gc)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw re(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:oC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re(27497)}(t,e.precondition)),n}function uC(t,e){return t&&t.length>0?(_e(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Cn(s.updateTime):Cn(i);return o.isEqual(ie.min())&&(o=Cn(i)),new WN(o,s.transformResults||[])}(n,e))):[]}function dC(t,e){return{documents:[X_(t,e.path)]}}function hC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=X_(t,s);const i=function(h){if(h.length!==0)return tw(Rn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(m=>function(g){return{field:zs(g.field),direction:pC(g.dir)}}(m))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Sh(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function fC(t){let e=aC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){_e(r===1,65062);const m=n.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];n.where&&(i=function(p){const g=ew(p);return g instanceof Rn&&A_(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(A){return new mc(Fs(A.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Hc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,N=p.values||[];return new fc(N,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,N=p.values||[];return new fc(N,g)}(n.endAt)),AN(e,s,o,i,c,"F",u,h)}function mC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ew(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fs(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fs(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fs(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fs(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(Fs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Rn.create(n.compositeFilter.filters.map(r=>ew(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(n.compositeFilter.op))}(t):re(30097,{filter:t})}function pC(t){return nC[t]}function gC(t){return rC[t]}function yC(t){return sC[t]}function zs(t){return{fieldPath:t.canonicalString()}}function Fs(t){return ht.fromServerFormat(t.fieldPath)}function tw(t){return t instanceof Xe?function(n){if(n.op==="=="){if(dy(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NAN"}};if(uy(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(dy(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NAN"}};if(uy(n.value))return{unaryFilter:{field:zs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zs(n.field),op:gC(n.op),value:n.value}}}(t):t instanceof Rn?function(n){const r=n.getFilters().map(s=>tw(s));return r.length===1?r[0]:{compositeFilter:{op:yC(n.op),filters:r}}}(t):re(54877,{filter:t})}function vC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,r,s,i=ie.min(),o=ie.min(),c=pt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e){this.yt=e}}function _C(t){const e=fC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.Cn=new bC}addToCollectionParentIndex(e,n){return this.Cn.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(zr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(zr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class bC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(Me.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rw=41943040;class kt{static withCacheSize(e){return new kt(e,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.DEFAULT_COLLECTION_PERCENTILE=10,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,kt.DEFAULT=new kt(rw,kt.DEFAULT_COLLECTION_PERCENTILE,kt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),kt.DISABLED=new kt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Ti(0)}static cr(){return new Ti(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="LruGarbageCollector",SC=1048576;function Ny([t,e],[n,r]){const s=me(t,n);return s===0?me(e,r):s}class EC{constructor(e){this.Ir=e,this.buffer=new et(Ny),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ny(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class TC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){J(Iy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Mi(n)?J(Iy,"Ignoring IndexedDB error during garbage collection: ",n):await Di(n)}await this.Vr(3e5)})}}class IC{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return U.resolve($c.ce);const r=new EC(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(Ty)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ty):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,u,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Vs()<=fe.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-m}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function NC(t,e){return new IC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(){this.changes=new ks(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,wt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ro(r.mutation,s,un.empty(),Ae.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const s=ds();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=po();return i.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ds();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=er();const o=Po(),c=function(){return Po()}();return n.forEach((u,h)=>{const m=r.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof As)?i=i.insert(h.key,h):m!==void 0?(o.set(h.key,m.mutation.getFieldMask()),Ro(m.mutation,h,m.mutation.getFieldMask(),Ae.now())):o.set(h.key,un.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,m)=>o.set(h,m)),n.forEach((h,m)=>c.set(h,new kC(m,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Po();let s=new Ve((o,c)=>o-c),i=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let m=r.get(u)||un.empty();m=c.applyToLocalView(h,m),r.set(u,m);const p=(s.get(c.batchId)||pe()).add(u);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,m=u.value,p=V_();m.forEach(g=>{if(!i.has(g)){const N=H_(n.get(g),r.get(g));N!==null&&p.set(g,N),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):PN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(ds());let c=na,u=i;return o.next(h=>U.forEach(h,(m,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(m)?U.resolve():this.remoteDocumentCache.getEntry(e,m).next(g=>{u=u.insert(m,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,pe())).next(m=>({batchId:c,changes:O_(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=po();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=po();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,u=>{const h=function(p,g){return new qc(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(m=>{m.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const m=h.getKey();o.get(m)===null&&(o=o.insert(m,wt.newInvalidDocument(m)))});let c=po();return o.forEach((u,h)=>{const m=i.get(u);m!==void 0&&Ro(m.mutation,h,un.empty(),Ae.now()),Gc(n,h)&&(c=c.insert(u,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return U.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Cn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:_C(s.bundledQuery),readTime:Cn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(){this.overlays=new Ve(te.comparator),this.qr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ds();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=ds(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ve((h,m)=>h-m);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let m=i.get(h.largestBatchId);m===null&&(m=ds(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const c=ds(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,m)=>c.set(h,m)),!(c.size()>=s)););return U.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new YN(n,r));let i=this.qr.get(n);i===void 0&&(i=pe(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.Qr=new et(st.$r),this.Ur=new et(st.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new st(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new te(new Me([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new te(new Me([])),r=new st(n,e),s=new st(n,e+1);let i=pe();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return te.comparator(e.key,n.key)||me(e.Yr,n.Yr)}static Kr(e,n){return me(e.Yr,n.Yr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new et(st.$r)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new QN(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new st(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Hf:this.tr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(me);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),U.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new st(new te(i),0);let c=new et(me);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Yr)),!0)},o),U.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){_e(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return U.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new st(n,0),s=this.Zr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MC{constructor(e){this.ri=e,this.docs=function(){return new Ve(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():wt.newInvalidDocument(n))}getEntries(e,n){let r=er();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():wt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=er();const o=n.path,c=new te(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:m}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||lN(aN(m),r)<=0||(s.has(m.key)||Gc(n,m))&&(i=i.insert(m.key,m.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re(9500)}ii(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LC(this)}getSize(e){return U.resolve(this.size)}}class LC extends CC{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.persistence=e,this.si=new ks(n=>Kf(n),Gf),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.oi=0,this._i=new em,this.targetCount=0,this.ai=Ti.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),U.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Ti(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Pr(n),U.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e,n){this.ui={},this.overlays={},this.ci=new $c(0),this.li=!1,this.li=!0,this.hi=new jC,this.referenceDelegate=e(this),this.Pi=new OC(this),this.indexManager=new wC,this.remoteDocumentCache=function(s){return new MC(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new xC(n),this.Ii=new PC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new RC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new DC(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const s=new VC(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return U.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class VC extends uN{constructor(e){super(),this.currentSequenceNumber=e}}class tm{constructor(e){this.persistence=e,this.Ri=new em,this.Vi=null}static mi(e){return new tm(e)}get fi(){if(this.Vi)return this.Vi;throw re(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),U.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.fi,r=>{const s=te.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ie.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return U.or([()=>U.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class vc{constructor(e,n){this.persistence=e,this.pi=new ks(r=>fN(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=NC(this,n)}static mi(e,n){return new vc(e,n)}Ei(){}di(e){return U.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return U.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?U.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),U.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),U.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=El(e.data.value)),n}br(e,n,r){return U.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return U.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=pe(),s=pe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nm(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return fE()?8:dN(St())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new UC;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Vs()<=fe.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",Us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),U.resolve()):(Vs()<=fe.DEBUG&&J("QueryEngine","Query:",Us(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Vs()<=fe.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",Us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nn(n))):U.resolve())}ys(e,n){if(py(n))return U.resolve(null);let r=Nn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=bh(n,null,"F"),r=Nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=pe(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,c);return this.Cs(n,h,o,u.readTime)?this.ys(e,bh(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,s){return py(n)||s.isEqual(ie.min())?U.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?U.resolve(null):(Vs()<=fe.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Us(n)),this.vs(e,o,n,oN(s,na)).next(c=>c))})}Ds(e,n){let r=new et(M_(e));return n.forEach((s,i)=>{Gc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Vs()<=fe.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Us(n)),this.ps.getDocumentsMatchingQuery(e,n,zr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="LocalStore",FC=3e8;class BC{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ve(me),this.xs=new ks(i=>Kf(i),Gf),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function $C(t,e,n,r){return new BC(t,e,n,r)}async function iw(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let u=pe();for(const h of s){o.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}for(const h of i){c.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function HC(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,h,m){const p=h.batch,g=p.keys();let N=U.resolve();return g.forEach(A=>{N=N.next(()=>m.getEntry(u,A)).next(j=>{const L=h.docVersions.get(A);_e(L!==null,48541),j.version.compareTo(L)<0&&(p.applyToRemoteDocument(j,h),j.isValidDocument()&&(j.setReadTime(h.commitVersion),m.addEntry(j)))})}),N.next(()=>c.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=pe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ow(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function WC(t,e){const n=ae(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((m,p)=>{const g=s.get(p);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,m.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,m.addedDocuments,p)));let N=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?N=N.withResumeToken(pt.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):m.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(m.resumeToken,r)),s=s.insert(p,N),function(j,L,E){return j.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=FC?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(g,N,m)&&c.push(n.Pi.updateTargetData(i,N))});let u=er(),h=pe();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(qC(i,o,e.documentUpdates).next(m=>{u=m.ks,h=m.qs})),!r.isEqual(ie.min())){const m=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return U.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Ms=s,i))}function qC(t,e,n){let r=pe(),s=pe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=er();return n.forEach((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(ie.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):J(rm,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:s}})}function KC(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Hf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GC(t,e){const n=ae(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function Nh(t,e,n){const r=ae(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Mi(o))throw o;J(rm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Cy(t,e,n){const r=ae(t);let s=ie.min(),i=pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,m){const p=ae(u),g=p.xs.get(m);return g!==void 0?U.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,m)}(r,o,Nn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ie.min(),n?i:pe())).next(c=>(QC(r,jN(e),c),{documents:c,Qs:i})))}function QC(t,e,n){let r=t.Os.get(e)||ie.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class ky{constructor(){this.activeTargetIds=UN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YC{constructor(){this.Mo=new ky,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new ky,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="ConnectivityMonitor";class Py{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){J(Ay,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){J(Ay,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol=null;function Ch(){return ol===null?ol=function(){return 268435456+Math.round(2147483648*Math.random())}():ol++,"0x"+ol.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd="RestConnection",XC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ZC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===dc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Ch(),c=this.zo(e,n.toUriEncodedString());J(rd,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(c),m=Ai(h);return this.Jo(e,c,u,r,m).then(p=>(J(rd,`Received RPC '${e}' ${o}: `,p),p),p=>{throw _i(rd,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ji}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=XC[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class tk extends ZC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Ch();return new Promise((c,u)=>{const h=new u_;h.setWithCredentials(!0),h.listenOnce(d_.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Sl.NO_ERROR:const p=h.getResponseJson();J(vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Sl.TIMEOUT:J(vt,`RPC '${e}' ${o} timed out`),u(new ee(B.DEADLINE_EXCEEDED,"Request time out"));break;case Sl.HTTP_ERROR:const g=h.getStatus();if(J(vt,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let N=h.getResponseJson();Array.isArray(N)&&(N=N[0]);const A=N==null?void 0:N.error;if(A&&A.status&&A.message){const j=function(E){const w=E.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(w)>=0?w:B.UNKNOWN}(A.status);u(new ee(j,A.message))}else u(new ee(B.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new ee(B.UNAVAILABLE,"Connection failed."));break;default:re(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{J(vt,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(s);J(vt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",m,r,15)})}T_(e,n,r){const s=Ch(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=m_(),c=f_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const m=i.join("");J(vt,`Creating RPC '${e}' stream ${s}: ${m}`,u);const p=o.createWebChannel(m,u);this.I_(p);let g=!1,N=!1;const A=new ek({Yo:L=>{N?J(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(g||(J(vt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),J(vt,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Zo:()=>p.close()}),j=(L,E,w)=>{L.listen(E,I=>{try{w(I)}catch(D){setTimeout(()=>{throw D},0)}})};return j(p,mo.EventType.OPEN,()=>{N||(J(vt,`RPC '${e}' stream ${s} transport opened.`),A.o_())}),j(p,mo.EventType.CLOSE,()=>{N||(N=!0,J(vt,`RPC '${e}' stream ${s} transport closed`),A.a_(),this.E_(p))}),j(p,mo.EventType.ERROR,L=>{N||(N=!0,_i(vt,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),A.a_(new ee(B.UNAVAILABLE,"The operation could not be completed")))}),j(p,mo.EventType.MESSAGE,L=>{var E;if(!N){const w=L.data[0];_e(!!w,16349);const I=w,D=(I==null?void 0:I.error)||((E=I[0])==null?void 0:E.error);if(D){J(vt,`RPC '${e}' stream ${s} received error:`,D);const z=D.status;let R=function(_){const S=Ke[_];if(S!==void 0)return K_(S)}(z),y=D.message;R===void 0&&(R=B.INTERNAL,y="Unknown error status: "+z+" with message "+D.message),N=!0,A.a_(new ee(R,y)),p.close()}else J(vt,`RPC '${e}' stream ${s} received:`,w),A.u_(w)}}),j(c,h_.STAT_EVENT,L=>{L.stat===gh.PROXY?J(vt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===gh.NOPROXY&&J(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{A.__()},0),A}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function sd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(t){return new iC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&J("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="PersistentStream";class lw{constructor(e,n,r,s,i,o,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new aw(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Zn(n.toString()),Zn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new ee(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return J(Ry,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(J(Ry,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nk extends lw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=lC(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ie.min():o.readTime?Cn(o.readTime):ie.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ih(this.serializer),n.addTarget=function(i,o){let c;const u=o.target;if(c=wh(u)?{documents:dC(i,u)}:{query:hC(i,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Y_(i,o.resumeToken);const h=Sh(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ie.min())>0){c.readTime=yc(i,o.snapshotVersion.toTimestamp());const h=Sh(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=mC(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ih(this.serializer),n.removeTarget=e,this.q_(n)}}class rk extends lw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return _e(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){_e(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=uC(e.writeResults,e.commitTime),r=Cn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ih(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>cC(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{}class ik extends sk{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Eh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ee(B.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,Eh(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ee(B.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ok{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Zn(n),this.aa=!1):J("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es="RemoteStore";class ak{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ps(this)&&(J(Es,"Restarting streams for network reachability change."),await async function(u){const h=ae(u);h.Ea.add(4),await ba(h),h.Ra.set("Unknown"),h.Ea.delete(4),await Zc(h)}(this))})}),this.Ra=new ok(r,s)}}async function Zc(t){if(Ps(t))for(const e of t.da)await e(!0)}async function ba(t){for(const e of t.da)await e(!1)}function cw(t,e){const n=ae(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),am(n)?om(n):Li(n).O_()&&im(n,e))}function sm(t,e){const n=ae(t),r=Li(n);n.Ia.delete(e),r.O_()&&uw(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ps(n)&&n.Ra.set("Unknown"))}function im(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Li(t).Y_(e)}function uw(t,e){t.Va.Ue(e),Li(t).Z_(e)}function om(t){t.Va=new tC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Li(t).start(),t.Ra.ua()}function am(t){return Ps(t)&&!Li(t).x_()&&t.Ia.size>0}function Ps(t){return ae(t).Ea.size===0}function dw(t){t.Va=void 0}async function lk(t){t.Ra.set("Online")}async function ck(t){t.Ia.forEach((e,n)=>{im(t,e)})}async function uk(t,e){dw(t),am(t)?(t.Ra.ha(e),om(t)):t.Ra.set("Unknown")}async function dk(t,e,n){if(t.Ra.set("Online"),e instanceof Q_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){J(Es,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xc(t,r)}else if(e instanceof Nl?t.Va.Ze(e):e instanceof G_?t.Va.st(e):t.Va.tt(e),!n.isEqual(ie.min()))try{const r=await ow(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(h);m&&i.Ia.set(h,m.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,h)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(pt.EMPTY_BYTE_STRING,m.snapshotVersion)),uw(i,u);const p=new Sr(m.target,u,h,m.sequenceNumber);im(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){J(Es,"Failed to raise snapshot:",r),await xc(t,r)}}async function xc(t,e,n){if(!Mi(e))throw e;t.Ea.add(1),await ba(t),t.Ra.set("Offline"),n||(n=()=>ow(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J(Es,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Zc(t)})}function hw(t,e){return e().catch(n=>xc(t,n,e))}async function eu(t){const e=ae(t),n=Hr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Hf;for(;hk(e);)try{const s=await KC(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,fk(e,s)}catch(s){await xc(e,s)}fw(e)&&mw(e)}function hk(t){return Ps(t)&&t.Ta.length<10}function fk(t,e){t.Ta.push(e);const n=Hr(t);n.O_()&&n.X_&&n.ea(e.mutations)}function fw(t){return Ps(t)&&!Hr(t).x_()&&t.Ta.length>0}function mw(t){Hr(t).start()}async function mk(t){Hr(t).ra()}async function pk(t){const e=Hr(t);for(const n of t.Ta)e.ea(n.mutations)}async function gk(t,e,n){const r=t.Ta.shift(),s=Jf.from(r,e,n);await hw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await eu(t)}async function yk(t,e){e&&Hr(t).X_&&await async function(r,s){if(function(o){return XN(o)&&o!==B.ABORTED}(s.code)){const i=r.Ta.shift();Hr(r).B_(),await hw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await eu(r)}}(t,e),fw(t)&&mw(t)}async function jy(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),J(Es,"RemoteStore received new credentials");const r=Ps(n);n.Ea.add(3),await ba(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Zc(n)}async function vk(t,e){const n=ae(t);e?(n.Ea.delete(2),await Zc(n)):e||(n.Ea.add(2),await ba(n),n.Ra.set("Unknown"))}function Li(t){return t.ma||(t.ma=function(n,r,s){const i=ae(n);return i.sa(),new nk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:lk.bind(null,t),t_:ck.bind(null,t),r_:uk.bind(null,t),H_:dk.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),am(t)?om(t):t.Ra.set("Unknown")):(await t.ma.stop(),dw(t))})),t.ma}function Hr(t){return t.fa||(t.fa=function(n,r,s){const i=ae(n);return i.sa(),new rk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:mk.bind(null,t),r_:yk.bind(null,t),ta:pk.bind(null,t),na:gk.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await eu(t)):(await t.fa.stop(),t.Ta.length>0&&(J(Es,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new lm(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cm(t,e){if(Zn("AsyncQueue",`${e}: ${t}`),Mi(t))return new ee(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{static emptySet(e){return new di(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=po(),this.sortedSet=new Ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof di)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new di;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(){this.ga=new Ve(te.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):re(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ii{constructor(e,n,r,s,i,o,c,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ii(e,n,di.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class _k{constructor(){this.queries=My(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ae(n),i=s.queries;s.queries=My(),i.forEach((o,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new ee(B.ABORTED,"Firestore shutting down"))}}function My(){return new ks(t=>D_(t),Kc)}async function wk(t,e){const n=ae(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new xk,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=cm(o,`Initialization of query '${Us(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&um(n)}async function bk(t,e){const n=ae(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Sk(t,e){const n=ae(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&um(n)}function Ek(t,e,n){const r=ae(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function um(t){t.Ca.forEach(e=>{e.next()})}var kh,Ly;(Ly=kh||(kh={})).Ma="default",Ly.Cache="cache";class Tk{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ii(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==kh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e){this.key=e}}class gw{constructor(e){this.key=e}}class Ik{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=pe(),this.mutatedKeys=pe(),this.eu=M_(e),this.tu=new di(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Dy,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,p)=>{const g=s.get(m),N=Gc(this.query,p)?p:null,A=!!g&&this.mutatedKeys.has(g.key),j=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let L=!1;g&&N?g.data.isEqual(N.data)?A!==j&&(r.track({type:3,doc:N}),L=!0):this.su(g,N)||(r.track({type:2,doc:N}),L=!0,(u&&this.eu(N,u)>0||h&&this.eu(N,h)<0)&&(c=!0)):!g&&N?(r.track({type:0,doc:N}),L=!0):g&&!N&&(r.track({type:1,doc:g}),L=!0,(u||h)&&(c=!0)),L&&(N?(o=o.add(N),i=j?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((m,p)=>function(N,A){const j=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{Rt:L})}};return j(N)-j(A)}(m.type,p.type)||this.eu(m.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Ii(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Dy,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=pe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new gw(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new pw(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=pe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Ii.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const dm="SyncEngine";class Nk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ck{constructor(e){this.key=e,this.hu=!1}}class kk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ks(c=>D_(c),Kc),this.Iu=new Map,this.Eu=new Set,this.du=new Ve(te.comparator),this.Au=new Map,this.Ru=new em,this.Vu={},this.mu=new Map,this.fu=Ti.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ak(t,e,n=!0){const r=bw(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await yw(r,e,n,!0),s}async function Pk(t,e){const n=bw(t);await yw(n,e,!0,!1)}async function yw(t,e,n,r){const s=await GC(t.localStore,Nn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Rk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&cw(t.remoteStore,s),c}async function Rk(t,e,n,r,s){t.pu=(p,g,N)=>async function(j,L,E,w){let I=L.view.ru(E);I.Cs&&(I=await Cy(j.localStore,L.query,!1).then(({documents:y})=>L.view.ru(y,I)));const D=w&&w.targetChanges.get(L.targetId),z=w&&w.targetMismatches.get(L.targetId)!=null,R=L.view.applyChanges(I,j.isPrimaryClient,D,z);return Vy(j,L.targetId,R.au),R.snapshot}(t,p,g,N);const i=await Cy(t.localStore,e,!0),o=new Ik(e,i.Qs),c=o.ru(i.documents),u=wa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,u);Vy(t,n,h.au);const m=new Nk(e,n,o);return t.Tu.set(e,m),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function jk(t,e,n){const r=ae(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Kc(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&sm(r.remoteStore,s.targetId),Ah(r,s.targetId)}).catch(Di)):(Ah(r,s.targetId),await Nh(r.localStore,s.targetId,!0))}async function Dk(t,e){const n=ae(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),sm(n.remoteStore,r.targetId))}async function Mk(t,e,n){const r=Bk(t);try{const s=await function(o,c){const u=ae(o),h=Ae.now(),m=c.reduce((N,A)=>N.add(A.key),pe());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",N=>{let A=er(),j=pe();return u.Ns.getEntries(N,m).next(L=>{A=L,A.forEach((E,w)=>{w.isValidDocument()||(j=j.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(N,A)).next(L=>{p=L;const E=[];for(const w of c){const I=KN(w,p.get(w.key).overlayedDocument);I!=null&&E.push(new As(w.key,I,N_(I.value.mapValue),qn.exists(!0)))}return u.mutationQueue.addMutationBatch(N,h,E,c)}).next(L=>{g=L;const E=L.applyToLocalDocumentSet(p,j);return u.documentOverlayCache.saveOverlays(N,L.batchId,E)})}).then(()=>({batchId:g.batchId,changes:O_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Ve(me)),h=h.insert(c,u),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await Sa(r,s.changes),await eu(r.remoteStore)}catch(s){const i=cm(s,"Failed to persist write");n.reject(i)}}async function vw(t,e){const n=ae(t);try{const r=await WC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(_e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?_e(o.hu,14607):s.removedDocuments.size>0&&(_e(o.hu,42227),o.hu=!1))}),await Sa(n,r,e)}catch(r){await Di(r)}}function Oy(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const u=ae(o);u.onlineState=c;let h=!1;u.queries.forEach((m,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)}),h&&um(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Lk(t,e,n){const r=ae(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ve(te.comparator);o=o.insert(i,wt.newNoDocument(i,ie.min()));const c=pe().add(i),u=new Jc(ie.min(),new Map,new Ve(me),o,c);await vw(r,u),r.du=r.du.remove(i),r.Au.delete(e),hm(r)}else await Nh(r.localStore,e,!1).then(()=>Ah(r,e,n)).catch(Di)}async function Ok(t,e){const n=ae(t),r=e.batch.batchId;try{const s=await HC(n.localStore,e);_w(n,r,null),xw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sa(n,s)}catch(s){await Di(s)}}async function Vk(t,e,n){const r=ae(t);try{const s=await function(o,c){const u=ae(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let m;return u.mutationQueue.lookupMutationBatch(h,c).next(p=>(_e(p!==null,37113),m=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,m,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m)).next(()=>u.localDocuments.getDocuments(h,m))})}(r.localStore,e);_w(r,e,n),xw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Sa(r,s)}catch(s){await Di(s)}}function xw(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function _w(t,e,n){const r=ae(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Ah(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||ww(t,r)})}function ww(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(sm(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),hm(t))}function Vy(t,e,n){for(const r of n)r instanceof pw?(t.Ru.addReference(r.key,e),Uk(t,r)):r instanceof gw?(J(dm,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||ww(t,r.key)):re(19791,{wu:r})}function Uk(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(J(dm,"New document in limbo: "+n),t.Eu.add(r),hm(t))}function hm(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new te(Me.fromString(e)),r=t.fu.next();t.Au.set(r,new Ck(n)),t.du=t.du.insert(n,r),cw(t.remoteStore,new Sr(Nn(Qf(n.path)),r,"TargetPurposeLimboResolution",$c.ce))}}async function Sa(t,e,n){const r=ae(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{o.push(r.pu(u,e,n).then(h=>{var m;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(m=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=nm.As(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,h){const m=ae(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,g=>U.forEach(g.Es,N=>m.persistence.referenceDelegate.addReference(p,g.targetId,N)).next(()=>U.forEach(g.ds,N=>m.persistence.referenceDelegate.removeReference(p,g.targetId,N)))))}catch(p){if(!Mi(p))throw p;J(rm,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const N=m.Ms.get(g),A=N.snapshotVersion,j=N.withLastLimboFreeSnapshotVersion(A);m.Ms=m.Ms.insert(g,j)}}}(r.localStore,i))}async function zk(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){J(dm,"User change. New user:",e.toKey());const r=await iw(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new ee(B.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sa(n,r.Ls)}}function Fk(t,e){const n=ae(t),r=n.Au.get(e);if(r&&r.hu)return pe().add(r.key);{let s=pe();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function bw(t){const e=ae(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lk.bind(null,e),e.Pu.H_=Sk.bind(null,e.eventManager),e.Pu.yu=Ek.bind(null,e.eventManager),e}function Bk(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ok.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vk.bind(null,e),e}class _c{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xc(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return $C(this.persistence,new zC,e.initialUser,this.serializer)}Cu(e){return new sw(tm.mi,this.serializer)}Du(e){return new YC}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}_c.provider={build:()=>new _c};class $k extends _c{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){_e(this.persistence.referenceDelegate instanceof vc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new TC(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?kt.withCacheSize(this.cacheSizeBytes):kt.DEFAULT;return new sw(r=>vc.mi(r,n),this.serializer)}}class Ph{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Oy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zk.bind(null,this.syncEngine),await vk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _k}()}createDatastore(e){const n=Xc(e.databaseInfo.databaseId),r=function(i){return new tk(i)}(e.databaseInfo);return function(i,o,c,u){return new ik(i,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new ak(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Oy(this.syncEngine,n,0),function(){return Py.v()?new Py:new JC}())}createSyncEngine(e,n){return function(s,i,o,c,u,h,m){const p=new kk(s,i,o,c,u,h);return m&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ae(s);J(Es,"RemoteStore shutting down."),i.Ea.add(5),await ba(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Ph.provider={build:()=>new Ph};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Zn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="FirestoreClient";class Wk{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=xt.UNAUTHENTICATED,this.clientId=Bf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{J(Wr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(J(Wr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function id(t,e){t.asyncQueue.verifyOperationInProgress(),J(Wr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await iw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Uy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qk(t);J(Wr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>jy(e.remoteStore,s)),t._onlineComponents=e}async function qk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J(Wr,"Using user provided OfflineComponentProvider");try{await id(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;_i("Error using user provided cache. Falling back to memory cache: "+n),await id(t,new _c)}}else J(Wr,"Using default OfflineComponentProvider"),await id(t,new $k(void 0));return t._offlineComponents}async function Sw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J(Wr,"Using user provided OnlineComponentProvider"),await Uy(t,t._uninitializedComponentsProvider._online)):(J(Wr,"Using default OnlineComponentProvider"),await Uy(t,new Ph))),t._onlineComponents}function Kk(t){return Sw(t).then(e=>e.syncEngine)}async function Gk(t){const e=await Sw(t),n=e.eventManager;return n.onListen=Ak.bind(null,e.syncEngine),n.onUnlisten=jk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Pk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Dk.bind(null,e.syncEngine),n}function Qk(t,e,n={}){const r=new Lr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,h){const m=new Hk({next:g=>{m.Nu(),o.enqueueAndForget(()=>bk(i,p));const N=g.docs.has(c);!N&&g.fromCache?h.reject(new ee(B.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&g.fromCache&&u&&u.source==="server"?h.reject(new ee(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Tk(Qf(c.path),m,{includeMetadataChanges:!0,qa:!0});return wk(i,p)}(await Gk(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="firestore.googleapis.com",Fy=!0;class By{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Tw,this.ssl=Fy}else this.host=e.host,this.ssl=e.ssl??Fy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<SC)throw new ee(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ew(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(B.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fm{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new By({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new By(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new G2;switch(r.type){case"firstParty":return new X2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=zy.get(n);r&&(J("ComponentProvider","Removing Datastore"),zy.delete(n),r.terminate())}(this),Promise.resolve()}}function Yk(t,e,n,r={}){var h;t=ta(t,fm);const s=Ai(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(wx(`https://${c}`),bx("Firestore",!0)),i.host!==Tw&&i.host!==c&&_i("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!Ur(u,o)&&(t._setSettings(u),r.mockUserToken)){let m,p;if(typeof r.mockUserToken=="string")m=r.mockUserToken,p=xt.MOCK_USER;else{m=sE(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ee(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new xt(g)}t._authCredentials=new Q2(new g_(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mm(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(xa(n,ot._jsonSchema))return new ot(e,r||null,new te(Me.fromString(n.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:Qe("string",ot._jsonSchemaVersion),referencePath:Qe("string")};class aa extends mm{constructor(e,n,r){super(e,n,Qf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new te(e))}withConverter(e){return new aa(this.firestore,e,this._path)}}function Jr(t,e,...n){if(t=Ft(t),arguments.length===1&&(e=Bf.newId()),sN("doc","path",e),t instanceof fm){const r=Me.fromString(e,...n);return ny(r),new ot(t,null,new te(r))}{if(!(t instanceof ot||t instanceof aa))throw new ee(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return ny(r),new ot(t.firestore,t instanceof aa?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="AsyncQueue";class Hy{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new aw(this,"async_queue_retry"),this._c=()=>{const r=sd();r&&J($y,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=sd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=sd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Lr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Mi(e))throw e;J($y,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Zn("INTERNAL UNHANDLED ERROR: ",Wy(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=lm.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&re(47125,{Pc:Wy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Wy(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class pm extends fm{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Hy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hy(e),this._firestoreClient=void 0,await e}}}function Jk(t,e){const n=typeof t=="object"?t:Ix(),r=typeof t=="string"?t:dc,s=Rf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nE("firestore");i&&Yk(s,...i)}return s}function Iw(t){if(t._terminated)throw new ee(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Xk(t),t._firestoreClient}function Xk(t){var r,s,i;const e=t._freezeSettings(),n=function(c,u,h,m){return new gN(c,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Ew(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Wk(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xt(pt.fromBase64String(e))}catch(n){throw new ee(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xt(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xa(e,Xt._jsonSchema))return Xt.fromBase64String(e.bytes)}}Xt._jsonSchemaVersion="firestore/bytes/1.0",Xt._jsonSchema={type:Qe("string",Xt._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ee(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ee(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ee(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kn._jsonSchemaVersion}}static fromJSON(e){if(xa(e,kn._jsonSchema))return new kn(e.latitude,e.longitude)}}kn._jsonSchemaVersion="firestore/geoPoint/1.0",kn._jsonSchema={type:Qe("string",kn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:An._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xa(e,An._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new An(e.vectorValues);throw new ee(B.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}An._jsonSchemaVersion="firestore/vectorValue/1.0",An._jsonSchema={type:Qe("string",An._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=/^__.*__$/;class eA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new As(e,this.data,this.fieldMask,n,this.fieldTransforms):new _a(e,this.data,n,this.fieldTransforms)}}function Nw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ac:t})}}class tu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new tu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wc(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Nw(this.Ac)&&Zk.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class tA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xc(e)}Cc(e,n,r,s=!1){return new tu({Ac:e,methodName:n,Dc:r,path:ht.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nA(t){const e=t._freezeSettings(),n=Xc(t._databaseId);return new tA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rA(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Aw("Data must be an object, but it was:",o,r);const c=Cw(r,o);let u,h;if(i.merge)u=new un(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const g=iA(e,p,n);if(!o.contains(g))throw new ee(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);aA(m,g)||m.push(g)}u=new un(m),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new eA(new Jt(c),u,h)}function sA(t,e,n){return new tu({Ac:3,Dc:e.settings.Dc,methodName:t._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class vm extends ym{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=sA(this,e,!0),r=this.vc.map(i=>xm(i,n)),s=new Ei(r);return new $N(e.path,s)}isEqual(e){return e instanceof vm&&Ur(this.vc,e.vc)}}function xm(t,e){if(kw(t=Ft(t)))return Aw("Unsupported field value:",e,t),Cw(t,e);if(t instanceof ym)return function(r,s){if(!Nw(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let u=xm(c,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ft(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zN(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ae.fromDate(r);return{timestampValue:yc(s.serializer,i)}}if(r instanceof Ae){const i=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yc(s.serializer,i)}}if(r instanceof kn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xt)return{bytesValue:Y_(s.serializer,r._byteString)};if(r instanceof ot){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof An)return function(o,c){return{mapValue:{fields:{[T_]:{stringValue:I_},[hc]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return Yf(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${$f(r)}`)}(t,e)}function Cw(t,e){const n={};return x_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cs(t,(r,s)=>{const i=xm(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function kw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof kn||t instanceof Xt||t instanceof ot||t instanceof ym||t instanceof An)}function Aw(t,e,n){if(!kw(n)||!y_(n)){const r=$f(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function iA(t,e,n){if((e=Ft(e))instanceof gm)return e._internalPath;if(typeof e=="string")return Pw(t,e);throw wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const oA=new RegExp("[~\\*/\\[\\]]");function Pw(t,e,n){if(e.search(oA)>=0)throw wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gm(...e.split("."))._internalPath}catch{throw wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new ee(B.INVALID_ARGUMENT,c+t+u)}function aA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(jw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lA extends Rw{data(){return super.data()}}function jw(t,e){return typeof e=="string"?Pw(t,e):e instanceof gm?e._internalPath:e._delegate._internalPath}class cA{convertValue(e,n="none"){switch($r(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Br(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[hc].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>$e(o.doubleValue));return new An(n)}convertGeoPoint(e){return new kn($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ra(e));default:return null}}convertTimestamp(e){const n=Fr(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);_e(nw(r),9688,{name:e});const s=new sa(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||Zn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class yo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ms extends Rw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(jw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ms._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ms._jsonSchemaVersion="firestore/documentSnapshot/1.0",ms._jsonSchema={type:Qe("string",ms._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class Cl extends ms{data(e={}){return super.data(e)}}class jo{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new yo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cl(this._firestore,this._userDataWriter,r.key,r,new yo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ee(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const u=new Cl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new yo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Cl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new yo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,m=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:dA(c.type),doc:u,oldIndex:h,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(B.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=jo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Bf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function dA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t){t=ta(t,ot);const e=ta(t.firestore,pm);return Qk(Iw(e),t._key).then(n=>mA(e,t,n))}jo._jsonSchemaVersion="firestore/querySnapshot/1.0",jo._jsonSchema={type:Qe("string",jo._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class hA extends cA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Ea(t,e,n){t=ta(t,ot);const r=ta(t.firestore,pm),s=uA(t.converter,e,n);return fA(r,[rA(nA(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,qn.none())])}function fA(t,e){return function(r,s){const i=new Lr;return r.asyncQueue.enqueueAndForget(async()=>Mk(await Kk(r),s,i)),i.promise}(Iw(t),e)}function mA(t,e,n){const r=n.docs.get(e._key),s=new hA(t);return new ms(t,s,e._key,r,new yo(n.hasPendingWrites,n.fromCache),e.converter)}function pA(...t){return new vm("arrayUnion",t)}(function(e,n=!0){(function(s){ji=s})(Pi),xi(new _s("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new pm(new Y2(r.getProvider("auth-internal")),new Z2(o,r.getProvider("app-check-internal")),function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ee(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sa(h.options.projectId,m)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Dr(Xg,Zg,e),Dr(Xg,Zg,"esm2020")})();const Be={},gA={apiKey:(Be==null?void 0:Be.VITE_FIREBASE_API_KEY)||"AIzaSyBGcXTF3yuvVd6z2e5B4g4zf_86XhIKKKE",authDomain:(Be==null?void 0:Be.VITE_FIREBASE_AUTH_DOMAIN)||"coderealm-37f3c.firebaseapp.com",projectId:(Be==null?void 0:Be.VITE_FIREBASE_PROJECT_ID)||"coderealm-37f3c",storageBucket:(Be==null?void 0:Be.VITE_FIREBASE_STORAGE_BUCKET)||"coderealm-37f3c.appspot.com",messagingSenderId:(Be==null?void 0:Be.VITE_FIREBASE_MESSAGING_SENDER_ID)||"893839377617",appId:(Be==null?void 0:Be.VITE_FIREBASE_APP_ID)||"1:893839377617:web:bb5cc996e7ced5df4fb1f0",measurementId:(Be==null?void 0:Be.VITE_FIREBASE_MEASUREMENT_ID)||"G-NTFTY40QCV"},Dw=Tx(gA),Xr=Jk(Dw),ru=H2(Dw),yA=async(t,e)=>{try{const n=await CI(ru,t,e);return console.log("✅ User created:",n.user.email),{success:!0,user:n.user}}catch(n){return console.error("❌ Sign up error:",n.message),{success:!1,error:n.message}}},vA=async(t,e)=>{try{const n=await kI(ru,t,e);return console.log("✅ User signed in:",n.user.email),{success:!0,user:n.user}}catch(n){return console.error("❌ Sign in error:",n.message),{success:!1,error:n.message}}},xA=async()=>{try{return await jI(ru),console.log("✅ User signed out"),{success:!0}}catch(t){return console.error("❌ Sign out error:",t.message),{success:!1,error:t.message}}},_A=t=>RI(ru,t),wA=async(t,e)=>{try{const n={};Object.entries(e).forEach(([r,s])=>{Array.isArray(s)?n[r]=pA(...s):n[r]=s}),await Ea(Jr(Xr,"players",t),{...n,lastUpdated:new Date().toISOString()},{merge:!0}),console.log("✅ Progress saved!")}catch(n){console.error("❌ Error saving progress:",n)}},bA=async t=>{try{const e=Jr(Xr,"players",t),n=await nu(e);return n.exists()?n.data():null}catch(e){return console.error("❌ Error loading progress:",e),null}},SA=async(t,e)=>{try{await Ea(Jr(Xr,"playerStats",t),{...e,lastUpdated:new Date().toISOString()},{merge:!0}),console.log("✅ Stats saved!")}catch(n){console.error("❌ Error saving stats:",n)}},kl=async(t,e,n,r,s)=>{if(t!=="guest")try{const i=`${e}_${n}_${r}_stars`;await Ea(Jr(Xr,"playerStats",t),{[i]:s,lastUpdated:new Date().toISOString()},{merge:!0})}catch(i){console.error("❌ Error saving stars:",i)}},EA=async t=>{if(t==="guest")return{};try{const e=Jr(Xr,"playerStats",t),n=await nu(e);if(n.exists()){const r=n.data(),s={};return Object.keys(r).forEach(i=>{i.includes("_stars")&&(s[i]=r[i])}),s}return{}}catch(e){return console.error("❌ Error loading stars:",e),{}}},Rh=async(t,e)=>{if(t!=="guest")try{await Ea(Jr(Xr,"userProfiles",t),{...e,lastUpdated:new Date().toISOString()},{merge:!0}),console.log("✅ User profile saved!")}catch(n){console.error("❌ Error saving user profile:",n)}},Mw=async t=>{if(t==="guest")return{};try{const e=Jr(Xr,"userProfiles",t),n=await nu(e);return n.exists()?n.data():{}}catch(e){return console.error("❌ Error loading user profile:",e),{}}},TA=async()=>{try{console.log("🔄 Testing Firebase connection..."),console.log("📋 Firebase config:",{projectId:"coderealm-37f3c",authDomain:"coderealm-37f3c.firebaseapp.com"});const t=Jr(Xr,"healthcheck","ping");console.log("📝 Writing test document..."),await Ea(t,{ts:Date.now()},{merge:!0}),console.log("📖 Reading test document...");const n=(await nu(t)).exists();return console.log(n?"✅ Firestore reachable - test successful!":"⚠️ Firestore ping doc missing after write"),n}catch(t){return console.error("❌ Firestore ping failed with error:",t),console.error("Error details:",{name:t==null?void 0:t.name,message:t==null?void 0:t.message,code:t==null?void 0:t.code}),!1}},IA=({isOpen:t,onClose:e,onAuthSuccess:n})=>{const[r,s]=H.useState(!1),[i,o]=H.useState(""),[c,u]=H.useState(""),[h,m]=H.useState(""),[p,g]=H.useState(!1),[N,A]=H.useState(""),j=async L=>{L.preventDefault(),g(!0),A("");const E=r?await yA(i,c):await vA(i,c);if(E.success){if(r&&h.trim()){const w=h.trim();localStorage.setItem("username",w),console.log("💾 Saving username to Firestore:",w),await Rh(E.user.uid,{username:w}),console.log("✅ Username saved to Firestore successfully")}n(E.user),e(),o(""),u(""),m("")}else A(E.error||"Authentication failed");g(!1)};return t?l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",children:l.jsxs("div",{className:"bg-gray-900 rounded-lg p-6 w-full max-w-md mx-4",children:[l.jsxs("div",{className:"flex justify-between items-center mb-6",children:[l.jsx("h2",{className:"text-2xl font-bold text-white",children:r?"Create Account":"Sign In"}),l.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white transition-colors",children:l.jsx(ih,{size:24})})]}),l.jsxs("form",{onSubmit:j,className:"space-y-4",children:[r&&l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Username"}),l.jsxs("div",{className:"relative",children:[l.jsx(sh,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),l.jsx("input",{type:"text",value:h,onChange:L=>m(L.target.value),className:"w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",placeholder:"Choose a username",required:r,minLength:3,maxLength:20})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Email"}),l.jsxs("div",{className:"relative",children:[l.jsx(FS,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),l.jsx("input",{type:"email",value:i,onChange:L=>o(L.target.value),className:"w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",placeholder:"Enter your email",required:!0})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Password"}),l.jsxs("div",{className:"relative",children:[l.jsx(th,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400",size:20}),l.jsx("input",{type:"password",value:c,onChange:L=>u(L.target.value),className:"w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",placeholder:"Enter your password",required:!0,minLength:6})]})]}),N&&l.jsx("div",{className:"bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg",children:N}),l.jsx("button",{type:"submit",disabled:p,className:"w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 disabled:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg",children:p?"Loading...":r?"Create Account":"Sign In"})]}),l.jsx("div",{className:"mt-6 text-center",children:l.jsx("button",{onClick:()=>{s(!r),A(""),m("")},className:"text-cyan-400 hover:text-cyan-300 transition-colors",children:r?"Already have an account? Sign in":"Don't have an account? Sign up"})}),l.jsx("div",{className:"mt-4 text-center",children:l.jsx("button",{onClick:()=>{n({uid:"guest",email:"guest@coderealm.com"}),e()},className:"text-gray-400 hover:text-white transition-colors text-sm",children:"Continue as Guest"})})]})}):null},qy=({onNavigate:t})=>l.jsxs("div",{className:"pt-16",children:[l.jsx("section",{className:"min-h-screen flex items-center justify-center px-4",children:l.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[l.jsxs("div",{className:"mb-8",children:[l.jsx("h1",{className:"text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:"CodeRealm"}),l.jsx("p",{className:"text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto",children:"Embark on an epic coding adventure through the realms of JavaScript, Java, and Python. Master programming through story-driven quests and interactive challenges."})]}),l.jsx("div",{className:"mb-12",children:l.jsx("div",{className:"relative max-w-4xl mx-auto",children:l.jsx("div",{className:"aspect-video bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl border border-purple-500/30 flex items-center justify-center backdrop-blur-sm",children:l.jsxs("div",{className:"text-center",children:[l.jsx(Un,{className:"h-24 w-24 text-cyan-400 mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform"}),l.jsx("p",{className:"text-lg text-gray-300",children:"Watch Game Trailer"})]})})})}),l.jsxs("button",{onClick:()=>t("game-overview"),className:"inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25",children:[l.jsx(eh,{className:"h-6 w-6"}),l.jsx("span",{children:"Start Learning"})]})]})}),l.jsx("section",{className:"py-20 px-4",children:l.jsxs("div",{className:"max-w-6xl mx-auto",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"Why Choose CodeRealm?"}),l.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[l.jsx("div",{className:"group bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform",children:l.jsx(eh,{className:"h-8 w-8 text-white"})}),l.jsx("h3",{className:"text-xl font-semibold mb-4 text-cyan-400",children:"Interactive Learning"}),l.jsx("p",{className:"text-gray-300",children:"Learn programming concepts through engaging storylines and interactive challenges designed for beginners."})]})}),l.jsx("div",{className:"group bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform",children:l.jsx(ec,{className:"h-8 w-8 text-white"})}),l.jsx("h3",{className:"text-xl font-semibold mb-4 text-cyan-400",children:"Real Code Editor"}),l.jsx("p",{className:"text-gray-300",children:"Practice with a full-featured code editor with syntax highlighting, error detection, and instant feedback."})]})}),l.jsx("div",{className:"group bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform",children:l.jsx(vg,{className:"h-8 w-8 text-white"})}),l.jsx("h3",{className:"text-xl font-semibold mb-4 text-cyan-400",children:"Progress Tracking"}),l.jsx("p",{className:"text-gray-300",children:"Track your journey with detailed progress indicators, achievements, and level unlocking system."})]})})]})]})}),l.jsx("section",{className:"py-20 px-4",children:l.jsxs("div",{className:"max-w-5xl mx-auto",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-10 text-cyan-400",children:"How It Works"}),l.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[l.jsxs("div",{className:"bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 p-6 rounded-xl",children:[l.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:"1) Pick a Path"}),l.jsx("p",{className:"text-gray-300",children:"Choose JavaScript, Java, or Python and start at Level 1."})]}),l.jsxs("div",{className:"bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 p-6 rounded-xl",children:[l.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:"2) Solve Quests"}),l.jsx("p",{className:"text-gray-300",children:"Write real code, run it, and earn up to 3 stars per level."})]}),l.jsxs("div",{className:"bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-purple-500/30 p-6 rounded-xl",children:[l.jsx("h3",{className:"text-xl font-semibold text-white mb-2",children:"3) Adaptive AI"}),l.jsx("p",{className:"text-gray-300",children:"An AI mentor tracks your attempts/time and adjusts difficulty."})]})]}),l.jsx("div",{className:"text-center mt-10",children:l.jsxs("button",{onClick:()=>t("arcane-showcase"),className:"inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25",children:[l.jsx(vg,{className:"h-6 w-6"}),l.jsx("span",{children:"Meet Your AI Mentor"})]})})]})}),l.jsx("section",{className:"py-20 px-4 bg-black/20",children:l.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"Choose Your Programming Path"}),l.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{name:"JavaScript",color:"from-yellow-400 to-orange-500",description:"Master web development and create interactive applications",lessons:50,levels:150,difficulty:"Beginner Friendly"},{name:"Java",color:"from-red-500 to-orange-600",description:"Learn object-oriented programming and enterprise development",lessons:50,levels:150,difficulty:"Intermediate"},{name:"Python",color:"from-blue-400 to-green-500",description:"Explore data science, AI, and versatile programming concepts",lessons:50,levels:150,difficulty:"Beginner Friendly"}].map(e=>l.jsxs("div",{className:"group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105",children:[l.jsx("div",{className:`w-20 h-20 bg-gradient-to-br ${e.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform`,children:l.jsx(ec,{className:"h-10 w-10 text-white"})}),l.jsx("h3",{className:"text-2xl font-bold mb-4 text-white",children:e.name}),l.jsx("p",{className:"text-gray-300 mb-6",children:e.description}),l.jsxs("div",{className:"space-y-2 text-sm text-gray-400",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Lessons:"}),l.jsx("span",{className:"text-cyan-400",children:e.lessons})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Total Levels:"}),l.jsx("span",{className:"text-cyan-400",children:e.levels})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Difficulty:"}),l.jsx("span",{className:"text-cyan-400",children:e.difficulty})]})]}),l.jsx("div",{className:"flex justify-center mt-4",children:[1,2,3,4,5].map(n=>l.jsx(fn,{className:"h-4 w-4 text-yellow-400 fill-current"},n))})]},e.name))})]})})]}),NA=({onNavigate:t})=>l.jsxs("div",{className:"pt-16",children:[l.jsx("section",{className:"py-20 px-4",children:l.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[l.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"About CodeRealm"}),l.jsx("p",{className:"text-xl text-gray-300 max-w-4xl mx-auto",children:"CodeRealm is a revolutionary story-driven programming learning platform that transforms the way beginners learn to code. Through immersive narratives and interactive challenges, we make programming education engaging, accessible, and fun."})]})}),l.jsx("section",{className:"py-16 px-4 bg-black/20",children:l.jsx("div",{className:"max-w-6xl mx-auto",children:l.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-8 text-cyan-400",children:"What is CodeRealm?"}),l.jsxs("div",{className:"space-y-6 text-gray-300",children:[l.jsx("p",{className:"text-lg",children:"CodeRealm is an innovative educational platform that combines the excitement of gaming with the fundamentals of programming education. Our sci-fi fantasy themed environment creates an immersive learning experience where students embark on coding quests."}),l.jsx("p",{className:"text-lg",children:"Unlike traditional programming courses, CodeRealm uses storytelling, character development, and progressive challenges to keep learners engaged throughout their journey. Each line of code written contributes to an epic adventure across three major programming languages."}),l.jsxs("div",{className:"grid grid-cols-2 gap-4 mt-8",children:[l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsx(Zd,{className:"h-6 w-6 text-cyan-400"}),l.jsx("span",{children:"3 Programming Languages"})]}),l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsx(mg,{className:"h-6 w-6 text-cyan-400"}),l.jsx("span",{children:"60+ Lessons Total"})]}),l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsx(tc,{className:"h-6 w-6 text-cyan-400"}),l.jsx("span",{children:"Achievement System"})]}),l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsx(Jo,{className:"h-6 w-6 text-cyan-400"}),l.jsx("span",{children:"Instant Feedback"})]})]})]})]}),l.jsx("div",{className:"relative",children:l.jsx("div",{className:"bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-sm",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6",children:l.jsx(rh,{className:"h-12 w-12 text-white"})}),l.jsx("h3",{className:"text-2xl font-bold mb-4 text-cyan-400",children:"Our Mission"}),l.jsx("p",{className:"text-gray-300",children:"To make programming education accessible, engaging, and effective for learners of all backgrounds through innovative storytelling and interactive technology."})]})})})]})})}),l.jsx("section",{className:"py-16 px-4",children:l.jsxs("div",{className:"max-w-6xl mx-auto",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-400",children:"Who is CodeRealm For?"}),l.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[l.jsxs("div",{className:"bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm",children:[l.jsx(HS,{className:"h-12 w-12 text-cyan-400 mb-6"}),l.jsx("h3",{className:"text-xl font-bold mb-4 text-white",children:"IT Students"}),l.jsx("p",{className:"text-gray-300",children:"Computer science and IT students looking to supplement their formal education with practical, hands-on programming experience in a fun environment."})]}),l.jsxs("div",{className:"bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm",children:[l.jsx(mg,{className:"h-12 w-12 text-cyan-400 mb-6"}),l.jsx("h3",{className:"text-xl font-bold mb-4 text-white",children:"Complete Beginners"}),l.jsx("p",{className:"text-gray-300",children:"Absolute beginners with no prior programming experience who want to learn coding fundamentals through an engaging, story-driven approach."})]}),l.jsxs("div",{className:"bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm",children:[l.jsx(Jo,{className:"h-12 w-12 text-cyan-400 mb-6"}),l.jsx("h3",{className:"text-xl font-bold mb-4 text-white",children:"Career Switchers"}),l.jsx("p",{className:"text-gray-300",children:"Professionals from other fields who want to transition into technology and need an engaging way to build programming skills."})]})]})]})}),l.jsx("section",{className:"py-16 px-4 bg-black/20",children:l.jsxs("div",{className:"max-w-6xl mx-auto",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-400",children:"How We Compare"}),l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl border border-purple-500/30 backdrop-blur-sm",children:[l.jsx("thead",{children:l.jsxs("tr",{className:"border-b border-purple-500/30",children:[l.jsx("th",{className:"p-6 text-left text-cyan-400 font-semibold",children:"Feature"}),l.jsx("th",{className:"p-6 text-center text-cyan-400 font-semibold",children:"CodeRealm"}),l.jsx("th",{className:"p-6 text-center text-gray-400 font-semibold",children:"Traditional Platforms"}),l.jsx("th",{className:"p-6 text-center text-gray-400 font-semibold",children:"CodeCombat"})]})}),l.jsxs("tbody",{className:"text-gray-300",children:[l.jsxs("tr",{className:"border-b border-purple-500/20",children:[l.jsx("td",{className:"p-6 font-medium",children:"Story-driven Learning"}),l.jsx("td",{className:"p-6 text-center text-green-400",children:"✓ Full narrative"}),l.jsx("td",{className:"p-6 text-center text-red-400",children:"✗ Tutorials only"}),l.jsx("td",{className:"p-6 text-center text-yellow-400",children:"~ Game-focused"})]}),l.jsxs("tr",{className:"border-b border-purple-500/20",children:[l.jsx("td",{className:"p-6 font-medium",children:"Multiple Languages"}),l.jsx("td",{className:"p-6 text-center text-green-400",children:"✓ JS, Java, Python"}),l.jsx("td",{className:"p-6 text-center text-green-400",children:"✓ Various"}),l.jsx("td",{className:"p-6 text-center text-yellow-400",children:"~ Limited"})]}),l.jsxs("tr",{className:"border-b border-purple-500/20",children:[l.jsx("td",{className:"p-6 font-medium",children:"Real Code Editor"}),l.jsx("td",{className:"p-6 text-center text-green-400",children:"✓ Full featured"}),l.jsx("td",{className:"p-6 text-center text-green-400",children:"✓ Yes"}),l.jsx("td",{className:"p-6 text-center text-yellow-400",children:"~ Basic"})]}),l.jsxs("tr",{className:"border-b border-purple-500/20",children:[l.jsx("td",{className:"p-6 font-medium",children:"Beginner Friendly"}),l.jsx("td",{className:"p-6 text-center text-green-400",children:"✓ From zero"}),l.jsx("td",{className:"p-6 text-center text-yellow-400",children:"~ Some experience"}),l.jsx("td",{className:"p-6 text-center text-green-400",children:"✓ Kid-friendly"})]}),l.jsxs("tr",{children:[l.jsx("td",{className:"p-6 font-medium",children:"Instant Feedback"}),l.jsx("td",{className:"p-6 text-center text-green-400",children:"✓ Real-time"}),l.jsx("td",{className:"p-6 text-center text-yellow-400",children:"~ Delayed"}),l.jsx("td",{className:"p-6 text-center text-green-400",children:"✓ Immediate"})]})]})]})})]})}),l.jsx("section",{className:"py-20 px-4",children:l.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"Ready to Begin Your Coding Adventure?"}),l.jsx("p",{className:"text-xl text-gray-300 mb-12",children:"Join thousands of learners who are mastering programming through CodeRealm's innovative story-driven approach."}),l.jsxs("button",{onClick:()=>t("game-overview"),className:"inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25",children:[l.jsx(rh,{className:"h-6 w-6"}),l.jsx("span",{children:"Start Your Journey"})]})]})})]}),CA=(t,e)=>`${t}_${e}_ai_history`,Lw=(t,e)=>`${t}_${e}_ai_profile`;function Ky(t,e){const n=CA(t,e.language),s=[...JSON.parse(localStorage.getItem(n)||"[]"),e].slice(-15);localStorage.setItem(n,JSON.stringify(s));const i=Vw(s);return localStorage.setItem(Lw(t,e.language),JSON.stringify(i)),i}function Ow(t,e){const n=localStorage.getItem(Lw(t,e));if(!n)return null;try{return JSON.parse(n)}catch{return null}}function Vw(t){var p;const e=((p=t[0])==null?void 0:p.language)||"javascript",n=t.length||1,s=t.filter(g=>g.stars>0&&!g.hadErrors).length/n,i=t.reduce((g,N)=>g+N.attempts,0)/n,o=t.reduce((g,N)=>g+N.timeTakenSeconds,0)/n,c=t.filter(g=>g.usedHint).length/n,u=1-Math.min(1,kA(t.map(g=>g.stars))/2),h=Math.min(1,n/10),m=Math.max(.2,.4*u+.6*h);return{language:e,rollingAccuracy:s,avgAttempts:i,avgTimeSeconds:o,hintRate:c,confidence:m,lastUpdated:Date.now()}}function kA(t){if(t.length<=1)return 0;const e=t.reduce((r,s)=>r+s,0)/t.length,n=t.reduce((r,s)=>r+Math.pow(s-e,2),0)/(t.length-1);return Math.sqrt(n)}function AA(t,e,n){const r=n||Vw([e]),s=e.timeTakenSeconds<=30,i=!e.hadErrors&&e.attempts<=2,o=e.stars>=3,c=e.attempts>=5||e.timeTakenSeconds>120||e.usedHint;if(o&&s&&i){if(r.rollingAccuracy>.85)return{advanceByLessons:3,hintIntensity:"none",message:"Legendary performance! Unlocking 3 new lessons (9 levels) — you're mastering this!"};if(r.rollingAccuracy>.7)return{advanceByLessons:2,hintIntensity:"none",message:"Great job! You solved that quickly and cleanly. Unlocking 2 new lessons (6 levels) ahead!"}}return c||r.rollingAccuracy<.4?{advanceByLessons:0,hintIntensity:"strong",message:"Let's reinforce the concept. I suggest repeating this lesson with additional guidance."}:{advanceByLessons:1,hintIntensity:r.hintRate>.3?"gentle":"none",message:"Solid progress. Continue to the next lesson. I'll offer targeted hints if needed."}}function PA(t,e){const n=Ow(t,e);if(!n)return null;const r=n.rollingAccuracy>.75?"You can safely push into Intermediate levels.":n.rollingAccuracy<.4?"Focus on Easy levels for now and repeat fundamentals.":"Stay in Easy → Intermediate transition and build consistency.",s=n.hintRate>.4?"Try fewer hints next time to boost retention.":"Awesome independence! Keep it up.";return{title:"AI Mentor: Personalized Guidance",body:`${r} Avg attempts ${n.avgAttempts.toFixed(1)}, avg time ${Math.round(n.avgTimeSeconds)}s. ${s}`}}function Gy(t,e,n,r){const s=Ow(t,e),i=AA(n,r,s),o=Math.ceil(n/3),c=[];if(i.advanceByLessons===0){const u=n+1,h=o*3;u<=h&&c.push(u)}else for(let u=1;u<=i.advanceByLessons;u++){const h=o+u,m=(h-1)*3+1,p=h*3;for(let g=m;g<=p&&g<=150;g++)c.push(g)}return c}const jh=t=>{var r,s;const e=t<=20?"beginner":t<=40?"intermediate":"advanced",n={1:{title:"The Awakening",story:"You awaken in the mystical CodeRealm, a land where magic flows through lines of code. Your first task is to greet the ancient Console Oracle who guards the gates."},2:{title:"Name of Power",story:'The Oracle speaks: "To wield code magic, you must claim your identity." Learn to store your name in a variable - your first artifact of power.'},3:{title:"Spells of Logic",story:"A wise sage teaches you about functions - reusable spells that can be cast again and again. Create your first magical incantation!"},4:{title:"The Inventory",story:"Before venturing forth, you must organize your belongings. Arrays are like magical bags that hold multiple treasures at once."},5:{title:"Fork in the Road",story:"You encounter a crossroads. Learning if-statements lets you make wise decisions based on the path ahead."},6:{title:"The Counter",story:"A mysterious merchant needs help counting gold coins. Master loops to automate repetitive tasks."},7:{title:"Texts of the Ancients",story:"Ancient scrolls contain secrets. Learn string manipulation to decode hidden messages and combine words of power."},8:{title:"The Calculator Stone",story:"Find a mystical stone that performs mathematical operations. Master arithmetic to unlock its true potential."},9:{title:"The Comparator",story:"Two warriors challenge you to judge who is stronger. Use comparison operators to determine truth from falsehood."},10:{title:"The Great Merger",story:"Two villages need to unite their resources. Learn to concatenate strings and merge data together."},11:{title:"Array Quest",story:"The Council of Arrays tasks you with mastering their secrets: accessing elements, finding length, and iterating through collections."},12:{title:"The Nested Chambers",story:"Descend into a dungeon with rooms within rooms. Learn nested loops to navigate complex structures."},13:{title:"The Switch Tower",story:"Climb a tower with many doors. Master switch statements to choose the correct path efficiently."},14:{title:"Broken Spells",story:"A wizard's spell book has errors! Learn debugging and error handling to fix magical mishaps."},15:{title:"The Accumulator",story:"Collect magical essence from multiple sources. Use accumulator patterns to sum values and build totals."},16:{title:"String Sorcery",story:"Advanced string magic awaits: splitting, joining, trimming, and transforming text into new forms."},17:{title:"The Filter Stone",story:"A sacred stone can separate pure from impure. Learn filtering techniques to extract what you need."},18:{title:"Mapping the Realm",story:"Transform an entire landscape with a single spell. Master map operations to change every element at once."},19:{title:"The Validator",story:"Guard the city gates by validating travelers. Use boolean logic and compound conditions to make complex decisions."},20:{title:"Templates of Power",story:"Discover template literals - a modern way to weave variables into strings with elegance and precision."},21:{title:"Objects of Reality",story:"Reality itself is made of objects with properties. Learn to create and manipulate these fundamental building blocks."},22:{title:"The Method Master",story:"Objects have hidden powers called methods. Unlock their potential by invoking built-in functions."},23:{title:"Destructuring the Veil",story:"A powerful technique to extract values from objects and arrays. Unpack data with a single gesture."},24:{title:"The Spread Spell",story:"Copy and merge data effortlessly. The spread operator (...) is a fundamental modern enchantment."},25:{title:"Arrow of Light",story:"Discover arrow functions - a concise way to write functions with elegant syntax and special powers."},26:{title:"Higher Order Mysteries",story:"Functions that accept other functions as arguments. Unlock the power of callbacks and higher-order thinking."},27:{title:"The Reducer",story:"Collapse an entire array into a single value. Master reduce() to perform powerful transformations."},28:{title:"Every and Some",story:"Test entire collections with a single condition. Learn these powerful array methods for validation."},29:{title:"Finding What's Lost",story:"Search through vast collections efficiently. Master find() and findIndex() to locate treasures."},30:{title:"Sorting the Chaos",story:"Bring order to disorder. Learn sorting algorithms to arrange data in meaningful ways."},31:{title:"JSON Chronicles",story:"Transform data between formats. JSON is the universal language for storing and transmitting information."},32:{title:"Date and Time",story:"Time itself bends to your will. Learn to work with dates, timestamps, and temporal calculations."},33:{title:"Regular Expressions",story:"The most powerful pattern matching magic. Regex can find anything hidden in text."},34:{title:"Try and Catch",story:"Not all spells succeed. Learn proper error handling to gracefully manage failures and prevent crashes."},35:{title:"The This Keyword",story:'Context is everything. Understanding "this" unlocks the true nature of objects and their methods.'},36:{title:"Prototypes Unveiled",story:"Every object inherits from its ancestors. Explore the prototype chain that connects all things."},37:{title:"Class Construct",story:"Build blueprints for creating multiple similar objects. Classes are the foundation of organized code."},38:{title:"Inheritance Path",story:"Child classes inherit powers from parents. Master the art of extending and overriding behaviors."},39:{title:"Static Powers",story:"Some methods belong to the class itself, not instances. Discover static methods and properties."},40:{title:"Getters and Setters",story:"Control access to object properties with special methods. Add validation and computed values."},41:{title:"Async Awakening",story:"Time flows differently in CodeRealm. Learn asynchronous programming to handle operations that take time."},42:{title:"Promise of Tomorrow",story:"Promises represent future values. Master this pattern to write clean asynchronous code."},43:{title:"Async/Await Mastery",story:"The most elegant way to work with promises. Write asynchronous code that reads like synchronous."},44:{title:"Fetch the Data",story:"Communicate with distant realms. Learn to fetch data from APIs and external sources."},45:{title:"Modules and Imports",story:"Organize your spellbook into chapters. Module systems keep code maintainable and reusable."},46:{title:"Closure Secrets",story:"Functions that remember their birthplace. Closures create private state and powerful patterns."},47:{title:"Recursion Abyss",story:"A function that calls itself. Dive into recursion to solve problems that repeat with variation."},48:{title:"Generators Unveiled",story:"Functions that can pause and resume. Generators create iterators and control flow in new ways."},49:{title:"Event Loop Mastery",story:"Understanding how JavaScript handles time. The event loop is the heart of asynchronous execution."},50:{title:"The Final Trial",story:"Combine everything you've learned. Build a complete application that showcases your mastery of CodeRealm."}};return{lesson:t,title:((r=n[t])==null?void 0:r.title)||`Lesson ${t}`,story:((s=n[t])==null?void 0:s.story)||"Continue your journey through CodeRealm...",difficulty:e}},Uw=(t,e,n)=>{const r=jh(t),s=["Introduction","Practice","Mastery"],i=()=>{const o=n==="javascript",c=n==="python";return t===1?e===1?o?'Write console.log("Hello, CodeRealm!") to greet the Oracle':c?'Write print("Hello, CodeRealm!") to greet the Oracle':'Write System.out.println("Hello, CodeRealm!") to greet the Oracle':e===2?o||c?'Create a function greet() that returns "Welcome to CodeRealm!"':'Create a method greet() that returns "Welcome to CodeRealm!"':o?'Write a program that logs "CodeRealm" three times using a loop':'Write a program that prints "CodeRealm" three times using a loop':t===2?e===1?o?"Create a variable heroName and assign it your name":c?"Create a variable hero_name and assign it your name":"Create a String variable heroName and assign it your name":e===2?o?'Store your age in a const variable and log "I am X years old"':c?'Store your age in a variable and print "I am X years old"':'Store your age in an int variable and print "I am X years old"':"Create variables for name, age, and quest. Combine them in one message":t===3?e===1?o||c?"Define a function add(a, b) that returns the sum of two numbers":"Define a method add(int a, int b) that returns the sum":e===2?o?"Create a function isEven(n) that checks if a number is even":c?"Create a function is_even(n) that checks if a number is even":"Create a method isEven(int n) that checks if a number is even":o||c?"Write a multiply(x, y, z) function that multiplies three numbers":"Write a multiply method that multiplies three numbers":t===4?e===1?o?'Create an array weapons with ["sword", "bow", "staff"]':c?'Create a list weapons with ["sword", "bow", "staff"]':'Create a String array weapons with {"sword", "bow", "staff"}':e===2?o?"Access and log the first and last elements of an array":c?"Access and print the first and last elements of a list":"Access and print the first and last elements of an array":o?"Add a new item to your array and display the updated length":c?"Add a new item to your list and display the updated length":"Create a new array with an additional item and display the length":t===5?e===1?"Write an if statement that checks if health > 50":e===2?"Use if-else to check if a score is passing (>= 60) or failing":o?"Create a grade checker using if-else if-else (A/B/C/D/F)":c?"Create a grade checker using if-elif-else (A/B/C/D/F)":"Create a grade checker using if-else if-else (A/B/C/D/F)":t===6?e===1?"Use a for loop to count from 1 to 10":e===2?o?"Loop through an array and log each item":c?"Loop through a list and print each item":"Loop through an array and print each item":"Use a while loop to double a number until it exceeds 100":t===7?e===1?"Combine two strings using the + operator":e===2?o?"Use .toUpperCase() and .toLowerCase() on a string":c?"Use .upper() and .lower() on a string":"Use .toUpperCase() and .toLowerCase() on a string":"Split a sentence into words and count them":t===8?e===1?"Perform basic arithmetic: +, -, *, /":e===2?o?"Use Math.pow() to calculate 2 to the power of 8":c?"Use ** operator to calculate 2 to the power of 8":"Use Math.pow() to calculate 2 to the power of 8":"Calculate the area of a circle given radius (π × r²)":t===21?e===1?o?"Create an object hero with properties: name, level, health":c?"Create a dictionary hero with keys: name, level, health":"Create a class Hero with fields: name, level, health":e===2?o?"Access and modify object properties":c?"Access and modify dictionary values":"Create getter and setter methods for Hero":o?"Add a method greet() to your hero object":c?"Create a Hero class with a greet() method":"Add a greet() method to the Hero class":t===25?e===1?o?"Convert a regular function to an arrow function":c?"Create a lambda function that doubles a number":"Create a functional interface and lambda expression":e===2?o?"Use arrow function with .map() on an array":c?"Use lambda with map() on a list":"Use lambda expression with Stream.map()":o?"Create arrow functions with implicit return":c?"Chain multiple lambda operations":"Use method references instead of lambdas":t===41?e===1?o?"Create a function that uses setTimeout to delay execution":c?"Use asyncio.sleep() to create a delay":"Use Thread.sleep() to create a delay":e===2?o?"Chain multiple setTimeout calls":c?"Create an async function with await":"Create a CompletableFuture with delayed execution":o?"Handle multiple asynchronous operations in sequence":c?"Use asyncio.gather() for concurrent operations":"Use CompletableFuture.allOf() for multiple tasks":t===50?e===1?o?"Combine classes, async, and modules in a mini-project":c?"Build a complete program using OOP and async":"Create a full application with all concepts learned":e===2?o?"Add error handling and validation to your project":c?"Add exception handling and type hints":"Add exception handling and proper design patterns":o?"Optimize and refactor your code for production":c?"Write unit tests and documentation":"Write unit tests and add proper logging":`${s[e-1]}: Complete the coding challenge for this lesson`};return{title:`${r.title} - ${s[e-1]}`,description:i(),story:`${r.story}

${e===1?"📖 Let me teach you the fundamentals...":e===2?"⚔️ Now put your knowledge to the test!":"🏆 Time to prove your mastery!"}`,task:i()}},RA=({onNavigate:t,selectedLanguage:e,setSelectedLanguage:n})=>{var R;const[r,s]=H.useState([]),[i,o]=H.useState([1,2,3,4,5,6,7,8,9]),[c,u]=H.useState(!1),[h,m]=H.useState(!1),[p,g]=H.useState(null);H.useEffect(()=>{const y=localStorage.getItem("userId")||"guest";if(localStorage.getItem("userEmail"),y==="guest"){const v=`guest_${e}_completedLevels`,_=`guest_${e}_unlockedLevels`,S=JSON.parse(localStorage.getItem(v)||"[]"),T=JSON.parse(localStorage.getItem(_)||"[1,2,3,4,5,6,7,8,9]");s(S),o(T)}else N(y)},[e]),H.useEffect(()=>{const y=()=>{const v=localStorage.getItem("userId")||"guest";if(v==="guest"){const _=`guest_${e}_completedLevels`,S=`guest_${e}_unlockedLevels`,T=JSON.parse(localStorage.getItem(_)||"[]"),C=JSON.parse(localStorage.getItem(S)||"[1,2,3,4,5,6,7,8,9]");s(T),o(C)}else N(v)};return window.addEventListener("storage",y),window.addEventListener("authStateChanged",y),y(),()=>{window.removeEventListener("storage",y),window.removeEventListener("authStateChanged",y)}},[]);const N=async y=>{try{const v=await bA(y);if(v){const _=`${e}_completedLevels`,S=`${e}_unlockedLevels`;s(v[_]||[]),o(v[S]||[1,2,3,4,5,6,7,8,9])}else s([]),o([1,2,3,4,5,6,7,8,9])}catch(v){console.error("Error loading user progress:",v),s([]),o([1,2,3,4,5,6,7,8,9])}},A=[{id:"javascript",name:"JavaScript",color:"from-yellow-400 to-orange-500",description:"The Web Wizard's Path",character:"🧙‍♂️",difficulty:"Easy"},{id:"java",name:"Java",color:"from-red-500 to-orange-600",description:"The Code Knight's Journey",character:"⚔️",difficulty:"Intermediate"},{id:"python",name:"Python",color:"from-blue-400 to-green-500",description:"The Data Sage's Quest",character:"🐍",difficulty:"Easy"}],j=[{name:"Story Quests",icon:$S,color:"text-cyan-400",description:"Follow epic narratives while solving coding challenges",clickable:!1},{name:"Drag & Drop",icon:On,color:"text-purple-400",description:"Visual programming challenges for beginners",clickable:!0,onClick:()=>t("drag-drop")},{name:"Code Puzzles",icon:xg,color:"text-green-400",description:"Complex problems that test your skills",clickable:!0,onClick:()=>u(!0)}],L=()=>{const y=v=>v<10?"beginner":v<20?"intermediate":"advanced";return Array.from({length:30},(v,_)=>{const S=_+1;return{title:`Puzzle ${S}`,description:S<=10?"Quick logic warm-up":S<=20?"Practice with arrays/strings":"Combine multiple concepts",story:"Sharpen your skills with short, focused challenges.",type:"puzzle",difficulty:y(_),level:1e3+S}})},E=()=>Array.from({length:50},(y,v)=>{const _=v+1,S=(_-1)*3+1,T=Math.max(3,...i,0),C=S<=T||i.includes(S)||i.includes(S+1)||i.includes(S+2),b=localStorage.getItem("userId")||"guest",Z=q=>{const Y=`${b}_${e}_level_${q}_stars`,G=`guest_${e}_level_${q}_stars`;let oe=parseInt(localStorage.getItem(Y)||"0");return(!oe||oe===0)&&b!=="guest"&&(oe=parseInt(localStorage.getItem(G)||"0")),oe},k=Z(S),V=Z(S+1),$=Z(S+2),O=Math.round((k+V+$)/3),F=k>0&&V>0&&$>0||r.includes(S)||r.includes(S+1)||r.includes(S+2);return{level:_,title:`Lesson ${_}: ${D(_,e)}`,unlocked:C,completed:F,stars:O,difficulty:_<=20?"Easy":_<=40?"Intermediate":"Advanced"}}),w=y=>{g(y),m(!0)},I=y=>{localStorage.setItem("selectedLevel",String(y)),m(!1),t("code-editor")},D=(y,v)=>{var b;return((b={javascript:["Intro & Syntax","Variables & Data Types","Operators","Conditionals","Loops","Functions","Scope & Hoisting","Arrays Basics","Array Methods","Objects Basics","Object Methods","Prototypes & Classes","Strings & Methods","Numbers & Math","Dates & Times","DOM Basics","DOM Events","Forms & Validation","BOM & Window","Error Handling","Regular Expressions","JSON & Storage","Fetch & HTTP","Promises","Async/Await","Modules (ES6)","Iterators & Generators","Map & Set","WeakMap & WeakSet","Destructuring & Spread","Template Literals","Rest Params & Default","Closures","Currying & Composition","Performance & Big-O","Debugging Tools","Unit Testing Basics","Tooling (NPM/Vite)","Type Checks & TS Intro","Patterns: Factory/Module","Patterns: Observer","Patterns: Singleton","Web APIs: Canvas","Web APIs: Geolocation","Storage & IndexedDB","Workers & Service Workers","PWA Basics","Accessibility Basics","Security Basics","Best Practices"],java:["Intro & Syntax","Variables & Types","Operators","Conditionals","Loops","Methods","Classes & Objects","OOP Principles","Inheritance","Polymorphism","Abstraction & Interfaces","Packages & Access","Exceptions","Strings & Regex","Arrays","Collections Basics","Generics","Streams API","Lambdas","Date/Time API","File I/O & NIO","Serialization","Networking","Annotations & Enums","Inner & Nested Classes","Reflection","JVM & GC Basics","Multithreading","Concurrency Utils","Memory Model","Logging","Build Tools (Maven)","Testing (JUnit)","Dependency Injection","JDBC & Databases","HTTP & JSON","REST Basics","Spring Boot Intro","Security Basics","Configuration & Profiles","Internationalization","JavaFX Basics","Performance Tuning","Profiling & Debugging","Packaging & Deployment","Cloud & Microservices","Messaging (JMS)","Design Patterns","Best Practices","Interview Prep"],python:["Intro & Syntax","Variables & Types","Operators","Conditionals","Loops","Functions","Modules & Packages","Virtual Environments","Strings","Lists","Tuples","Sets","Dictionaries","Comprehensions","Exception Handling","File I/O","Datetime & Time","Regex","JSON & CSV","OS/Sys/Subprocess","Iterators & Generators","Decorators","Context Managers","Typing & Dataclasses","Testing (pytest)","Logging","Requests & HTTP","Web Scraping","Asyncio","Multiprocessing & Threading","NumPy Basics","Pandas Basics","Visualization (Matplotlib)","Seaborn","Scikit-learn Intro","Flask Basics","Django Basics","APIs & FastAPI Intro","Packaging & Distribution","Performance & Profiling","Security Basics","Data Pipelines","CLI Applications","Automation Scripts","Notebooks & Reproducibility","Cloud & Deployment","Best Practices","Interview Prep","Project: Capstone"]}[v])==null?void 0:b[y-1])||`Lesson ${y}`},z=E();return l.jsxs("div",{className:"pt-16",children:[l.jsx("section",{className:"py-20 px-4",children:l.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[l.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"Welcome to CodeRealm"}),l.jsx("p",{className:"text-xl text-gray-300 max-w-4xl mx-auto mb-12",children:"In the mystical realm of CodeRealm, programming knowledge is the ultimate power. Choose your language, embark on epic quests, and master the ancient arts of coding through immersive storytelling and challenging adventures."})]})}),l.jsx("section",{className:"px-4",children:l.jsx("div",{className:"max-w-6xl mx-auto",children:(()=>{const y=localStorage.getItem("userId")||"guest",v=PA(y,e);return v?l.jsxs("div",{className:"mb-6 bg-gradient-to-r from-cyan-900/40 to-purple-900/40 border border-cyan-500/30 rounded-xl p-4 text-left",children:[l.jsx("div",{className:"text-cyan-400 font-semibold",children:v.title}),l.jsx("div",{className:"text-gray-300 text-sm",children:v.body})]}):null})()})}),l.jsx("section",{className:"py-16 px-4 bg-black/20",children:l.jsxs("div",{className:"max-w-6xl mx-auto",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-400",children:"Choose Your Programming Path"}),l.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:A.map(y=>l.jsx("div",{onClick:()=>n(y.id),className:`cursor-pointer group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${e===y.id?"border-cyan-500/80 shadow-lg shadow-cyan-500/25":"border-purple-500/30 hover:border-cyan-500/50"}`,children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:`w-24 h-24 bg-gradient-to-br ${y.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform text-4xl`,children:y.character}),l.jsx("h3",{className:"text-2xl font-bold mb-2 text-white",children:y.name}),l.jsx("p",{className:"text-cyan-400 font-semibold mb-4",children:y.description}),l.jsx("div",{className:"inline-block bg-purple-600/20 px-3 py-1 rounded-full text-sm text-purple-300 border border-purple-500/30",children:y.difficulty})]})},y.id))})]})}),l.jsx("section",{className:"py-16 px-4",children:l.jsxs("div",{className:"max-w-6xl mx-auto",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-400",children:"Game Mechanics"}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[l.jsxs("div",{className:"space-y-8",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-2xl font-bold mb-4 text-white",children:"Coding to Progress"}),l.jsx("p",{className:"text-gray-300 text-lg",children:"Every challenge requires real code to solve. Write functions, debug programs, and build applications to advance through the story and unlock new areas."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-2xl font-bold mb-4 text-white",children:"Adaptive Learning"}),l.jsx("p",{className:"text-gray-300 text-lg",children:"The difficulty adjusts to your skill level, providing hints for beginners and advanced challenges for experienced coders."})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-2xl font-bold mb-4 text-white",children:"Real-time Feedback"}),l.jsx("p",{className:"text-gray-300 text-lg",children:"Get instant feedback on your code with detailed error messages, suggestions, and explanations to help you learn from mistakes."})]})]}),l.jsx("div",{className:"bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-sm",children:l.jsxs("div",{className:"text-center",children:[l.jsx(mx,{className:"h-24 w-24 text-cyan-400 mx-auto mb-6"}),l.jsx("h3",{className:"text-2xl font-bold mb-4 text-cyan-400",children:"Interactive Code Editor"}),l.jsx("p",{className:"text-gray-300",children:"Full-featured editor with syntax highlighting, auto-completion, and debugging tools integrated into every challenge."})]})})]})]})}),l.jsx("section",{className:"py-16 px-4 bg-black/20",children:l.jsxs("div",{className:"max-w-6xl mx-auto",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-400",children:"Types of Quests"}),l.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:j.map(y=>l.jsxs("div",{onClick:y.clickable?y.onClick:void 0,className:`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 ${y.clickable?"cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20":""}`,children:[l.jsx(y.icon,{className:`h-16 w-16 ${y.color} mb-6`}),l.jsxs("h3",{className:"text-xl font-bold mb-4 text-white flex items-center justify-between",children:[y.name,y.clickable&&l.jsx(Un,{className:"h-5 w-5 text-green-400"})]}),l.jsx("p",{className:"text-gray-300",children:y.description}),y.clickable&&l.jsx("p",{className:"text-green-400 text-sm mt-4 font-semibold",children:"Click to view puzzles →"})]},y.name))})]})}),l.jsx("section",{className:"py-16 px-4",children:l.jsxs("div",{className:"max-w-6xl mx-auto",children:[l.jsxs("div",{className:"text-center mb-12",children:[l.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-4 text-cyan-400",children:[(R=A.find(y=>y.id===e))==null?void 0:R.name," Journey"]}),l.jsx("p",{className:"text-xl text-gray-300",children:"150 Progressive Levels (50 Lessons × 3 Levels) • Story-Driven Challenges • Real Code Practice"})]}),l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-4",children:z.map(y=>l.jsxs("div",{onClick:()=>w(y.level),className:`relative p-6 rounded-xl border transition-all duration-300 ${y.unlocked?"bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/30 hover:border-cyan-500/50 cursor-pointer hover:transform hover:scale-105":"bg-gray-900/30 border-gray-700/30 opacity-60"}`,children:[!y.unlocked&&l.jsx(th,{className:"absolute top-2 right-2 h-5 w-5 text-gray-500"}),y.completed&&l.jsx(ai,{className:"absolute top-2 right-2 h-5 w-5 text-green-400"}),l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:`text-2xl font-bold mb-2 ${y.unlocked?"text-cyan-400":"text-gray-500"}`,children:y.level}),l.jsx("h4",{className:`font-semibold mb-2 text-sm ${y.unlocked?"text-white":"text-gray-500"}`,children:y.title}),y.unlocked&&l.jsx("div",{className:"flex justify-center mb-2",children:[1,2,3].map(v=>l.jsx(fn,{className:`h-4 w-4 ${v<=y.stars?"text-yellow-400 fill-current":"text-gray-600"}`},v))}),l.jsx("div",{className:`text-xs px-2 py-1 rounded-full ${y.difficulty==="Easy"?"bg-green-500/20 text-green-400 border border-green-500/30":y.difficulty==="Intermediate"?"bg-yellow-500/20 text-yellow-400 border border-yellow-500/30":"bg-red-500/20 text-red-400 border border-red-500/30"}`,children:y.difficulty})]})]},y.level))}),l.jsx("div",{className:"text-center mt-12",children:l.jsxs("button",{onClick:()=>{localStorage.setItem("selectedLevel","1"),t("code-editor")},className:"inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25",children:[l.jsx(Un,{className:"h-6 w-6"}),l.jsx("span",{children:"Start Lesson 1"})]})})]})}),c&&l.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-green-500/50 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl",children:[l.jsxs("div",{className:"flex justify-between items-center mb-6",children:[l.jsxs("div",{children:[l.jsxs("h2",{className:"text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent flex items-center space-x-2",children:[l.jsx(xg,{className:"h-8 w-8 text-green-400"}),l.jsx("span",{children:"Code Puzzles"})]}),l.jsx("p",{className:"text-gray-300 mt-2",children:"Test your problem-solving skills with these coding challenges"})]}),l.jsx("button",{onClick:()=>u(!1),className:"text-gray-400 hover:text-white transition-colors",children:l.jsx(ih,{className:"h-6 w-6"})})]}),l.jsx("div",{className:"grid md:grid-cols-2 gap-6",children:L().map((y,v)=>{const _=r.includes(y.level),S=localStorage.getItem("userId")||"guest",T=v+1,C=S==="guest"?`guest_${e}_puzzle_${T}_stars`:`${S}_${e}_puzzle_${T}_stars`,b=parseInt(localStorage.getItem(C)||"0");return l.jsxs("div",{onClick:()=>{u(!1),localStorage.setItem("selectedMode","puzzle"),localStorage.setItem("selectedPuzzleIndex",String(T)),t("code-editor")},className:"relative p-6 rounded-xl border transition-all duration-300 bg-gradient-to-br from-green-900/30 to-cyan-900/30 border-green-500/30 hover:border-green-500/70 cursor-pointer hover:transform hover:scale-105",children:[_&&l.jsx(ai,{className:"absolute top-4 right-4 h-5 w-5 text-green-400"}),l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("div",{className:"bg-green-500/20 border border-green-500/50 rounded-lg px-3 py-1",children:l.jsxs("span",{className:"text-green-400 font-bold",children:["Puzzle ",T]})}),l.jsx("div",{className:"flex items-center space-x-1",children:[1,2,3].map(Z=>l.jsx(fn,{className:`h-4 w-4 ${Z<=b?"text-yellow-400 fill-current":"text-gray-600"}`},Z))})]}),l.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:y.title}),l.jsx("p",{className:"text-gray-300 text-sm mb-4 line-clamp-2",children:y.description}),l.jsx("div",{className:"flex items-center justify-between",children:l.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${y.difficulty==="beginner"?"bg-green-500/20 text-green-400":y.difficulty==="intermediate"?"bg-yellow-500/20 text-yellow-400":"bg-red-500/20 text-red-400"}`,children:y.difficulty})}),!_&&l.jsxs("div",{className:"mt-4 flex items-center text-green-400 text-sm font-semibold",children:[l.jsx(Un,{className:"h-4 w-4 mr-1"}),"Start Puzzle"]}),_&&l.jsxs("div",{className:"mt-4 flex items-center text-cyan-400 text-sm font-semibold",children:[l.jsx(Un,{className:"h-4 w-4 mr-1"}),"Replay"]})]},y.level)})}),l.jsx("div",{className:"mt-6 bg-green-900/20 border border-green-500/30 rounded-lg p-4",children:l.jsxs("p",{className:"text-gray-300 text-sm",children:[l.jsx("strong",{className:"text-green-400",children:"💡 Tip:"})," Code Puzzles are simple practice exercises perfect for beginners. Take your time and use hints whenever you need help!"]})})]})}),h&&p&&l.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500/50 rounded-2xl p-8 max-w-2xl w-full shadow-2xl",children:[l.jsx("button",{onClick:()=>{m(!1),g(null)},className:"absolute top-4 right-4 text-gray-400 hover:text-white transition-colors",children:l.jsx(ih,{className:"h-6 w-6"})}),l.jsxs("div",{className:"mb-6",children:[l.jsx("h2",{className:"text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3",children:jh(p).title}),l.jsx("p",{className:"text-gray-300 leading-relaxed",children:jh(p).story})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx("h3",{className:"text-lg font-semibold text-white mb-4",children:"Choose a Level:"}),[1,2,3].map(y=>{const v=(p-1)*3+y,_=Math.max(3,...i,0),S=v<=_||i.includes(v),T=r.includes(v),C=localStorage.getItem("userId")||"guest",b=C==="guest"?`guest_${e}_level_${v}_stars`:`${C}_${e}_level_${v}_stars`,Z=parseInt(localStorage.getItem(b)||"0"),k=parseInt(localStorage.getItem(`guest_${e}_level_${v}_stars`)||"0"),V=C!=="guest"&&Z===0?k:Z,$=Uw(p,y,e);return l.jsxs("div",{onClick:()=>S&&I(v),className:`p-4 rounded-xl border transition-all duration-300 ${S?"bg-gradient-to-r from-purple-900/40 to-cyan-900/30 border-purple-500/30 hover:border-purple-500/70 cursor-pointer hover:transform hover:scale-105":"bg-slate-900/40 border-slate-700 opacity-50 cursor-not-allowed"}`,children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsxs("div",{className:"flex items-center space-x-3",children:[T?l.jsx(ai,{className:"h-5 w-5 text-green-400"}):S?l.jsx(Un,{className:"h-5 w-5 text-cyan-400"}):l.jsx(th,{className:"h-5 w-5 text-gray-600"}),l.jsxs("span",{className:`font-semibold ${S?"text-white":"text-gray-600"}`,children:["Level ",y,"/3 - ",$.title.split(" - ")[1]]})]}),l.jsx("div",{className:"flex items-center space-x-1",children:[1,2,3].map(O=>l.jsx(fn,{className:`h-4 w-4 ${O<=V?"text-yellow-400 fill-current":"text-gray-600"}`},O))})]}),l.jsx("p",{className:`text-sm ${S?"text-gray-300":"text-gray-600"}`,children:$.description})]},y)})]}),l.jsx("div",{className:"mt-6 flex justify-end",children:l.jsx("button",{onClick:()=>{m(!1),g(null)},className:"bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300",children:"Cancel"})})]})})]})},jA=({onNavigate:t})=>{const e=[{icon:Zd,title:"Professional Code Editor",description:"Full-featured editor with syntax highlighting, auto-completion, error detection, and debugging tools for JavaScript, Java, and Python.",color:"text-cyan-400",bgColor:"from-cyan-500/20 to-cyan-600/20"},{icon:rh,title:"Quest-Based Learning",description:"Learn through engaging storylines and missions. Each quest teaches specific programming concepts while advancing an epic narrative.",color:"text-purple-400",bgColor:"from-purple-500/20 to-purple-600/20"},{icon:cx,title:"Adaptive Difficulty",description:"AI-powered system that adjusts challenge difficulty based on your performance, ensuring optimal learning pace for every student.",color:"text-green-400",bgColor:"from-green-500/20 to-green-600/20"},{icon:Jo,title:"Instant Feedback",description:"Get real-time error detection, code suggestions, and detailed explanations to understand mistakes and improve quickly.",color:"text-yellow-400",bgColor:"from-yellow-500/20 to-yellow-600/20"},{icon:tc,title:"Progress Tracking",description:"Comprehensive tracking system with achievements, skill trees, level progression, and detailed analytics of your learning journey.",color:"text-orange-400",bgColor:"from-orange-500/20 to-orange-600/20"},{icon:BS,title:"Interactive Challenges",description:"Diverse challenge types including drag-and-drop coding, debugging quests, algorithm puzzles, and creative projects.",color:"text-pink-400",bgColor:"from-pink-500/20 to-pink-600/20"}],n=["Syntax highlighting for JavaScript, Java, and Python","Intelligent auto-completion and suggestions","Real-time error detection and debugging","Code formatting and style checking","Integrated console and output display","File management and project organization","Customizable themes and layouts","Keyboard shortcuts and productivity tools"],r=["Story-driven curriculum with character development","Adaptive learning paths based on skill level","150 levels per programming language (50 lessons × 3 levels)","Multiple quest types: Story, Puzzle, Drag & Drop","Comprehensive skill assessment system","Peer collaboration and code sharing","Mentor feedback and code reviews","Industry-relevant project assignments"];return l.jsxs("div",{className:"pt-16",children:[l.jsx("section",{className:"py-20 px-4",children:l.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[l.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"Powerful Features"}),l.jsx("p",{className:"text-xl text-gray-300 max-w-4xl mx-auto",children:"CodeRealm combines cutting-edge technology with proven educational methods to create the most effective programming learning experience available."})]})}),l.jsx("section",{className:"py-16 px-4 bg-black/20",children:l.jsx("div",{className:"max-w-6xl mx-auto",children:l.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map(s=>l.jsxs("div",{className:"group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105",children:[l.jsx("div",{className:`w-16 h-16 bg-gradient-to-br ${s.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`,children:l.jsx(s.icon,{className:`h-8 w-8 ${s.color}`})}),l.jsx("h3",{className:"text-xl font-bold mb-4 text-white",children:s.title}),l.jsx("p",{className:"text-gray-300 leading-relaxed",children:s.description})]},s.title))})})}),l.jsx("section",{className:"py-16 px-4",children:l.jsx("div",{className:"max-w-6xl mx-auto",children:l.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-8 text-cyan-400",children:"Professional Code Editor"}),l.jsx("p",{className:"text-xl text-gray-300 mb-8",children:"Experience coding with our state-of-the-art editor that rivals industry-standard IDEs, designed specifically for learning and practicing programming."}),l.jsx("div",{className:"space-y-4",children:n.map((s,i)=>l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"w-2 h-2 bg-cyan-400 rounded-full"}),l.jsx("span",{className:"text-gray-300",children:s})]},i))}),l.jsxs("button",{onClick:()=>t("code-editor"),className:"inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 mt-8",children:[l.jsx(Zd,{className:"h-5 w-5"}),l.jsx("span",{children:"Try Code Editor"})]})]}),l.jsx("div",{className:"relative",children:l.jsxs("div",{className:"bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-purple-500/30 p-6 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[l.jsx("div",{className:"w-3 h-3 bg-red-500 rounded-full"}),l.jsx("div",{className:"w-3 h-3 bg-yellow-500 rounded-full"}),l.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),l.jsx("span",{className:"text-gray-400 text-sm ml-4",children:"main.js"})]}),l.jsxs("div",{className:"bg-slate-800 rounded-lg p-4 font-mono text-sm",children:[l.jsx("div",{className:"text-gray-500",children:"// Welcome to CodeRealm"}),l.jsxs("div",{className:"text-blue-400",children:["function ",l.jsx("span",{className:"text-yellow-400",children:"greetAdventurer"}),"(",l.jsx("span",{className:"text-orange-400",children:"name"}),") ","{"]}),l.jsxs("div",{className:"text-white ml-4",children:["console.log(",l.jsxs("span",{className:"text-green-400",children:["`Welcome $","${name}"," to CodeRealm!`"]}),");"]}),l.jsx("div",{className:"text-blue-400",children:"}"}),l.jsxs("div",{className:"mt-2 text-yellow-400",children:["greetAdventurer(",l.jsx("span",{className:"text-green-400",children:"'Hero'"}),");"]})]}),l.jsx("div",{className:"mt-4 bg-slate-700 rounded-lg p-3 text-green-400 text-sm font-mono",children:"> Welcome Hero to CodeRealm!"})]})})]})})}),l.jsx("section",{className:"py-16 px-4 bg-black/20",children:l.jsx("div",{className:"max-w-6xl mx-auto",children:l.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[l.jsxs("div",{className:"lg:order-2",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-8 text-purple-400",children:"Advanced Learning System"}),l.jsx("p",{className:"text-xl text-gray-300 mb-8",children:"Our proprietary learning system adapts to your pace, provides personalized feedback, and ensures you master each concept before advancing."}),l.jsx("div",{className:"space-y-4",children:r.map((s,i)=>l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:"w-2 h-2 bg-purple-400 rounded-full"}),l.jsx("span",{className:"text-gray-300",children:s})]},i))})]}),l.jsx("div",{className:"lg:order-1 relative",children:l.jsxs("div",{className:"bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-sm",children:[l.jsxs("div",{className:"text-center mb-6",children:[l.jsx(On,{className:"h-16 w-16 text-purple-400 mx-auto mb-4"}),l.jsx("h3",{className:"text-2xl font-bold text-purple-400 mb-2",children:"Skill Mastery"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-gray-300",children:"Variables & Functions"}),l.jsx("span",{className:"text-green-400 font-bold",children:"100%"})]}),l.jsx("div",{className:"w-full bg-slate-700 rounded-full h-2",children:l.jsx("div",{className:"bg-gradient-to-r from-green-400 to-cyan-400 h-2 rounded-full w-full"})}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-gray-300",children:"Object-Oriented Programming"}),l.jsx("span",{className:"text-yellow-400 font-bold",children:"75%"})]}),l.jsx("div",{className:"w-full bg-slate-700 rounded-full h-2",children:l.jsx("div",{className:"bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full w-3/4"})}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"text-gray-300",children:"Advanced Algorithms"}),l.jsx("span",{className:"text-gray-400 font-bold",children:"25%"})]}),l.jsx("div",{className:"w-full bg-slate-700 rounded-full h-2",children:l.jsx("div",{className:"bg-gradient-to-r from-gray-400 to-gray-500 h-2 rounded-full w-1/4"})})]})]})})]})})}),l.jsx("section",{className:"py-16 px-4",children:l.jsxs("div",{className:"max-w-6xl mx-auto",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-16 text-cyan-400",children:"Intelligent Feedback System"}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"bg-gradient-to-br from-green-900/30 to-cyan-900/30 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm",children:[l.jsx(yg,{className:"h-12 w-12 text-green-400 mb-6"}),l.jsx("h3",{className:"text-xl font-bold mb-4 text-green-400",children:"Success Feedback"}),l.jsx("div",{className:"bg-green-500/10 border border-green-500/30 rounded-lg p-4",children:l.jsx("p",{className:"text-green-300 font-mono text-sm",children:"✓ Excellent work! Your function correctly handles all edge cases. Consider optimizing the time complexity using memoization for even better performance."})})]}),l.jsxs("div",{className:"bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-2xl border border-red-500/30 backdrop-blur-sm",children:[l.jsx(yg,{className:"h-12 w-12 text-red-400 mb-6"}),l.jsx("h3",{className:"text-xl font-bold mb-4 text-red-400",children:"Error Guidance"}),l.jsx("div",{className:"bg-red-500/10 border border-red-500/30 rounded-lg p-4",children:l.jsx("p",{className:"text-red-300 font-mono text-sm",children:"⚠ Syntax Error on line 5: Missing closing parenthesis. Hint: Check your function call and ensure all parentheses are balanced."})})]})]})]})}),l.jsx("section",{className:"py-20 px-4 bg-black/20",children:l.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[l.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"Ready to Experience These Features?"}),l.jsx("p",{className:"text-xl text-gray-300 mb-12",children:"Start your coding adventure today and discover why CodeRealm is the most effective way to learn programming through engaging, interactive experiences."}),l.jsxs("button",{onClick:()=>t("game-overview"),className:"inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25",children:[l.jsx(tc,{className:"h-6 w-6"}),l.jsx("span",{children:"Begin Your Journey"})]})]})})]})},DA=async(t,e)=>{if(e===62){const s=t.split(`
`).filter(i=>!i.trim().startsWith("//")).join(`
`);/class\s+\w+/.test(s)||(t=`
public class Main {
    public static void main(String[] args) {
        ${s}
    }
}`)}const r=await(await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",{method:"POST",headers:{"content-type":"application/json","X-RapidAPI-Key":"d4aba051c2msh8bbd8265c6b871ap159b0djsn5283e7c32022","X-RapidAPI-Host":"judge0-ce.p.rapidapi.com"},body:JSON.stringify({source_code:t,language_id:e})})).json();return console.log("JUDGE0 RAW:",r),r.compile_output?(console.log("❌ Compilation Error:",r.compile_output),r.compile_output):r.stderr?(console.log("❌ Runtime Error:",r.stderr),r.stderr):r.status&&r.status.id>3?(console.log("❌ Judge0 Error Status:",r.status.description),r.status.description||"Execution failed"):r.stdout||"No output."},MA=({selectedLanguage:t,currentLevel:e,onNavigate:n})=>{const[r,s]=H.useState(!1),[i,o]=H.useState(""),[c,u]=H.useState(0),[h,m]=H.useState(0),[p,g]=H.useState(!1),[N,A]=H.useState(!1),[j,L]=H.useState(!1),[E,w]=H.useState(!1);H.useEffect(()=>{const D=setInterval(()=>{const z=parseInt(localStorage.getItem("arcane_attempts")||"0"),R=parseInt(localStorage.getItem("arcane_time")||"0"),y=localStorage.getItem("arcane_errors")==="1",v=localStorage.getItem("arcane_used_hint")==="1";u(z),m(R),g(y),A(v);let _="";y?e<=3?_="🔍 I see an error! Read the red message carefully - it tells you exactly what went wrong. Look for typos in variable names or missing semicolons.":e<=7?_="🔍 Error detected! Check your syntax carefully. Common issues: missing brackets, wrong variable names, or incorrect method calls.":_="🔍 Error found! Debug step by step: 1) Read the error message, 2) Check the line number, 3) Verify your logic flow.":z>=3&&!v?e<=3?_="💡 You've tried 3 times - that's brave! Try the hint button now. It's not cheating, it's learning the right approach!":e<=7?_="💡 Three attempts without success? Try the hint to understand the pattern, then implement it yourself.":_="💡 Struggling after 3 tries? Use the hint to see the approach, then code your own solution.":R>75?e<=3?_="⏰ Take a breath! Break it down: 1) Write what you want to do as comments, 2) Write one line of code, 3) Test it.":e<=7?_="⏰ Feeling stuck? Try this approach: 1) Plan your algorithm in comments, 2) Implement one piece at a time, 3) Test each piece.":_="⏰ Complex problem? Break it into smaller functions: 1) Define the main logic, 2) Create helper functions, 3) Test each component.":v?e<=3?_="✨ Great job using the hint! Now try writing the solution in your own words to really understand it.":e<=7?_="✨ Good use of the hint! Now implement it yourself and try to understand why this approach works.":_="✨ Excellent! You used the hint wisely. Now code your own version and consider how to optimize it further.":z===1?e<=3?_="🚀 Good start! Remember: write a little, test a little. Add console.log() to see what your variables contain.":e<=7?_="🚀 Great beginning! Plan your approach first, then implement step by step. Use console.log() for debugging.":_="🚀 Excellent start! Think about the algorithm first, then implement with proper error handling and edge cases.":e<=3?_="💪 Keep going! If stuck, try adding console.log() to see what your variables contain. Debugging is a superpower!":e<=7?_="💪 You're doing well! If you get stuck, try breaking the problem into smaller parts or use console.log() to trace execution.":_="💪 Great progress! Remember to consider edge cases and error handling. Use debugging tools to trace through your logic.",o(_)},1200);return()=>clearInterval(D)},[e]);const I=()=>{switch(t){case"javascript":return"🟨";case"java":return"☕";case"python":return"🐍";default:return"💻"}};return l.jsxs("div",{className:"fixed bottom-4 right-4 z-40",children:[!r&&l.jsx("button",{onClick:()=>s(!0),className:"bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white p-4 rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 animate-pulse",title:"Open Arcane Mentor",children:l.jsx(Kt,{className:"h-6 w-6"})}),r&&l.jsxs("div",{className:"bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-md border border-purple-500/50 rounded-xl shadow-2xl w-80 max-h-96 overflow-hidden",children:[l.jsx("div",{className:"bg-gradient-to-r from-purple-600/20 to-cyan-600/20 p-3 border-b border-purple-500/30",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(Kt,{className:"h-5 w-5 text-purple-400"}),l.jsx("span",{className:"text-white font-semibold",children:"Arcane Mentor"}),l.jsxs("span",{className:"text-xs text-cyan-400",children:["Lv.",e]})]}),l.jsxs("div",{className:"flex items-center space-x-1",children:[l.jsx("button",{onClick:()=>L(!j),className:"p-1 text-purple-400 hover:text-purple-300 transition-colors",title:"Toggle Stats",children:l.jsx(cx,{className:"h-4 w-4"})}),l.jsx("button",{onClick:()=>w(!E),className:"p-1 text-cyan-400 hover:text-cyan-300 transition-colors",title:"Help",children:l.jsx(OS,{className:"h-4 w-4"})}),l.jsx("button",{onClick:()=>s(!1),className:"p-1 text-gray-400 hover:text-white transition-colors",title:"Minimize",children:l.jsx(LS,{className:"h-4 w-4"})})]})]})}),l.jsxs("div",{className:"p-4 space-y-3 max-h-80 overflow-y-auto",children:[l.jsxs("div",{className:"bg-purple-900/30 border border-purple-500/30 rounded-lg p-3",children:[l.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[l.jsx(fx,{className:"h-4 w-4 text-cyan-400"}),l.jsx("span",{className:"text-sm text-cyan-300 font-semibold",children:"Live Guidance"})]}),l.jsx("div",{className:"text-gray-300 text-sm",children:i||"Waiting for activity..."})]}),l.jsxs("div",{className:"bg-slate-800/50 border border-purple-500/30 rounded-lg p-3",children:[l.jsxs("div",{className:"text-sm text-purple-300 mb-2 font-semibold",children:["Quest Status - Level ",e]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs",children:[l.jsxs("div",{className:"text-gray-300",children:[l.jsx("span",{className:"text-gray-400",children:"Realm:"})," ",I()," ",t]}),l.jsxs("div",{className:"text-gray-300",children:[l.jsx("span",{className:"text-gray-400",children:"Attempts:"})," ",l.jsx("span",{className:"text-cyan-400",children:c})]}),l.jsxs("div",{className:"text-gray-300",children:[l.jsx("span",{className:"text-gray-400",children:"Time:"})," ",l.jsxs("span",{className:"text-cyan-400",children:[Math.round(h),"s"]})]}),l.jsxs("div",{className:"text-gray-300",children:[l.jsx("span",{className:"text-gray-400",children:"Errors:"}),l.jsx("span",{className:p?"text-red-400 ml-1":"text-green-400 ml-1",children:p?"Yes":"No"})]})]})]}),j&&l.jsxs("div",{className:"bg-slate-800/60 border border-cyan-500/30 rounded-lg p-3",children:[l.jsx("div",{className:"text-sm text-cyan-300 mb-2 font-semibold",children:"Your Progress"}),l.jsxs("div",{className:"space-y-2 text-xs",children:[l.jsxs("div",{className:"flex justify-between text-gray-300",children:[l.jsx("span",{children:"Progress:"}),l.jsxs("span",{className:"text-cyan-400",children:[Math.min(100,c*20),"%"]})]}),l.jsxs("div",{className:"flex justify-between text-gray-300",children:[l.jsx("span",{children:"Hint Usage:"}),l.jsx("span",{className:N?"text-yellow-400":"text-green-400",children:N?"Learning":"Independent"})]}),l.jsxs("div",{className:"flex justify-between text-gray-300",children:[l.jsx("span",{children:"Status:"}),l.jsx("span",{className:p?"text-red-400":"text-green-400",children:p?"Debugging":"Clean"})]})]})]}),E&&l.jsxs("div",{className:"bg-slate-800/60 border border-purple-500/30 rounded-lg p-3",children:[l.jsx("div",{className:"text-sm text-purple-300 mb-2 font-semibold",children:"About Arcane"}),l.jsxs("div",{className:"space-y-2 text-xs text-gray-300",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(ux,{className:"h-3 w-3 text-purple-400"}),l.jsx("span",{children:"Watches your patterns and adapts"})]}),l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(hx,{className:"h-3 w-3 text-purple-400"}),l.jsx("span",{children:"Provides real-time hints"})]}),l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(Jo,{className:"h-3 w-3 text-purple-400"}),l.jsx("span",{children:"Unlocks up to 3 lessons ahead"})]}),l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx(On,{className:"h-3 w-3 text-purple-400"}),l.jsx("span",{children:"Tracks progress without interfering"})]})]}),l.jsx("button",{onClick:()=>n("arcane-showcase"),className:"mt-3 w-full text-xs bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-3 py-2 rounded-lg transition-all duration-300",children:"Learn More About Arcane"})]})]})]})]})},LA=[{title:"Hello World - Your First Code",description:'Write your very first line of code! Just log "Hello, CodeRealm!" to the console.',starterCode:`// Welcome to CodeRealm! This is your first coding adventure.
// Just write one line to say hello to the console.

// Your first code goes here:

`,solution:'console.log("Hello, CodeRealm!");',hint:`Simply write: console.log("Hello, CodeRealm!"); - This tells the computer to display a message. Don't forget the quotes around the text!`,story:"Welcome, brave adventurer! You've entered the magical world of CodeRealm. Your journey begins with a simple greeting to the ancient console...",type:"tutorial",difficulty:"beginner"},{title:"Variables & Basic Syntax",description:'Create a variable called "heroName" and assign it your name. Then log a welcome message to the console.',starterCode:`// Welcome to CodeRealm, brave adventurer!
// A variable is like a box that holds information
// Step 1: Create a variable called heroName and give it your name
// Step 2: Use console.log() to display a message

// Your code goes here:
const heroName = "YourName";
console.log("Welcome to CodeRealm, " + heroName + "!");`,solution:`const heroName = "Hero";
console.log("Welcome to CodeRealm, " + heroName + "!");`,hint:'Step 1: Write "const heroName = "YourName";" to create a variable (replace "YourName" with your actual name). Step 2: Write "console.log("Welcome to CodeRealm, " + heroName + "!");" to display the message. The + sign combines text together!',story:"You stand at the entrance of CodeRealm, a mystical land where code is magic. The ancient guardian asks for your name...",type:"tutorial",difficulty:"beginner"},{title:"Simple Functions",description:"Create a simple function that says hello and use it.",starterCode:`// A function is like a recipe that you can use over and over
// Step 1: Create a function called sayHello
// Step 2: Make it return "Hello from CodeRealm!"
// Step 3: Call the function and log the result

// Your code goes here:
function sayHello() {
  return "Hello from CodeRealm!";
}
console.log(sayHello());`,solution:`function sayHello() {
  return "Hello from CodeRealm!";
}
console.log(sayHello());`,hint:'Step 1: Write "function sayHello() {" to start the function. Step 2: Inside the function, write "return "Hello from CodeRealm!";". Step 3: Close with "}" and then call "console.log(sayHello());" to use the function.',story:"A village elder asks you to create a simple greeting spell that you can use anytime.",type:"tutorial",difficulty:"beginner"},{title:"Simple Arrays",description:"Create a simple list of items and display it.",starterCode:`// An array is like a shopping list - it holds multiple items
// Step 1: Create an array with 3 items
// Step 2: Log the array to see all items

// Your code goes here:
const items = ["sword", "shield", "potion"];
console.log("My items:", items);`,solution:`const items = ["sword", "shield", "potion"];
console.log("My items:", items);`,hint:'Step 1: Write "const items = ["sword", "shield", "potion"];" to create an array (use square brackets []). Step 2: Write "console.log("My items:", items);" to display the array.',story:"You prepare your inventory before entering the dungeon.",type:"tutorial",difficulty:"beginner"},{title:"Simple If Statements",description:"Check if a number is big and print a message.",starterCode:`// An if statement helps you make decisions in code
// Step 1: Create a number variable (like const number = 10;)
// Step 2: Check if the number is greater than 5
// Step 3: If it is, print "That's a big number!"

// Your code goes here:
const number = 10;
if (number > 5) {
  console.log("That's a big number!");
}`,solution:`const number = 10;
if (number > 5) {
  console.log("That's a big number!");
}`,hint:`Step 1: Write "const number = 10;" to create a number. Step 2: Write "if (number > 5) {" to check if the number is greater than 5. Step 3: Inside the if statement, write "console.log("That's a big number!");" and close with "}".`,story:"You find a magical number and need to decide if it's powerful enough.",type:"tutorial",difficulty:"beginner"},{title:"Puzzle: Add Two Numbers",description:"Write a function that takes two numbers and returns their sum. Very simple!",starterCode:`// Complete the function below to add two numbers together
// Example: addNumbers(5, 3) should return 8

function addNumbers(a, b) {
  // Write your code here - just add a and b!
  
}

// Test your function
console.log(addNumbers(5, 3));   // Should show: 8
console.log(addNumbers(10, 20)); // Should show: 30`,solution:`function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 3));
console.log(addNumbers(10, 20));`,hint:"Just return a + b inside the function. That's it! Use the return keyword followed by a + b",story:"The merchant needs help adding up the gold coins. Can you help by creating a simple addition function?",type:"puzzle",difficulty:"beginner",expectedIncludes:["8","30"],puzzleMeta:{mode:"fill-in",template:`function addNumbers(a, b) {
  return __BLANK1__;
}

console.log(addNumbers(5, 3));
console.log(addNumbers(10, 20));`,blanks:[{id:"BLANK1",prompt:"Add the two parameters and return the result",choices:["a + b","a - b","a * b","a / b"],solution:"a + b",hintSteps:["You need to combine a and b into one result.","Use the addition operator to combine them.","Type a + b"]}],globalHintSteps:["Functions can return values using the return keyword.","The test expects 8 and 30 in the output."]}},{title:"Puzzle: Check if Number is Even",description:"Create a function that checks if a number is even. Return true if even, false if odd.",starterCode:`// A number is even if dividing by 2 gives no remainder
// Use the % (modulo) operator: number % 2
// If number % 2 equals 0, it's even!

function isEven(number) {
  // Your code here
  
}

// Test it
console.log(isEven(4));  // Should show: true
console.log(isEven(7));  // Should show: false`,solution:`function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));`,hint:"Return the result of: number % 2 === 0 (This checks if the remainder is 0)",story:"The kingdom needs to pair up knights for patrol. Help determine which knight numbers are even for pairing!",type:"puzzle",difficulty:"beginner",expectedIncludes:["true","false"],puzzleMeta:{mode:"fill-in",template:`function isEven(number) {
  return __BLANK1__;
}

console.log(isEven(4));
console.log(isEven(7));`,blanks:[{id:"BLANK1",prompt:"Check if number has no remainder when divided by 2",choices:["number % 2 === 0","number / 2 === 0","number % 3 === 0"],solution:"number % 2 === 0",hintSteps:["Even numbers are divisible by 2.","Use the modulo operator % to check remainders.","Compare the remainder to 0: number % 2 === 0"]}]}},{title:"Puzzle: Get First Item from Array",description:"Write a function that returns the first item from an array.",starterCode:`// Arrays are like lists that start counting from 0
// The first item is at position [0]

function getFirst(array) {
  // Return the first item (hint: use array[0])
  
}

// Test with these arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [10, 20, 30];

console.log(getFirst(fruits));   // Should show: "apple"
console.log(getFirst(numbers));  // Should show: 10`,solution:`function getFirst(array) {
  return array[0];
}

const fruits = ["apple", "banana", "orange"];
const numbers = [10, 20, 30];

console.log(getFirst(fruits));
console.log(getFirst(numbers));`,hint:"Simply return array[0] - that's the first element!",story:"The treasure chest has many items. Which one is on top? Get the first item to find out!",type:"puzzle",difficulty:"beginner",expectedIncludes:["apple","10"],puzzleMeta:{mode:"fill-in",template:`function getFirst(array) {
  return __BLANK1__;
}

const fruits = ["apple", "banana", "orange"];
const numbers = [10, 20, 30];

console.log(getFirst(fruits));
console.log(getFirst(numbers));`,blanks:[{id:"BLANK1",prompt:"Access the first element in the array",choices:["array[0]","array[1]","array[-1]"],solution:"array[0]",hintSteps:["Arrays are zero-indexed.","The first element is at index 0.","Use array[0]"]}]}},{title:"Puzzle: Count Array Length",description:"Create a function that counts how many items are in an array.",starterCode:`// Every array has a .length property that tells you how many items it has

function countItems(array) {
  // Return the length of the array
  
}

// Test it
const colors = ["red", "blue", "green"];
const ages = [5, 10, 15, 20, 25];

console.log(countItems(colors));  // Should show: 3
console.log(countItems(ages));    // Should show: 5`,solution:`function countItems(array) {
  return array.length;
}

const colors = ["red", "blue", "green"];
const ages = [5, 10, 15, 20, 25];

console.log(countItems(colors));
console.log(countItems(ages));`,hint:"Use array.length to get the number of items. Just return that!",story:"The wizard needs to count how many spell ingredients are in the potion list. Help by counting the array!",type:"puzzle",difficulty:"beginner",expectedIncludes:["3","5"],puzzleMeta:{mode:"fill-in",template:`function countItems(array) {
  return __BLANK1__;
}

const colors = ["red", "blue", "green"];
const ages = [5, 10, 15, 20, 25];

console.log(countItems(colors));
console.log(countItems(ages));`,blanks:[{id:"BLANK1",prompt:"Return how many items are inside the array",choices:["array.length","array.size()","length(array)"],solution:"array.length",hintSteps:["Arrays have a property that tells how many items they contain.","In JavaScript it is a property, not a function.","Use array.length"]}]}},{title:"Puzzle: Greet by Name",description:"Make a function that takes a name and returns a greeting message.",starterCode:`// Create a friendly greeting message
// Use template literals with backticks: \`Hello \${name}!\`

function greet(name) {
  // Return a greeting like "Hello Hero!"
  
}

// Test your function
console.log(greet("Hero"));      // Should show: "Hello Hero!"
console.log(greet("Alice"));     // Should show: "Hello Alice!"`,solution:`function greet(name) {
  return \`Hello \${name}!\`;
}

console.log(greet("Hero"));
console.log(greet("Alice"));`,hint:"Use backticks and write: return `Hello ${name}!` (The ${name} puts the name in the message)",story:"The friendly innkeeper wants to greet every adventurer by name. Create a greeting function to help!",type:"puzzle",difficulty:"beginner",expectedIncludes:["Hello Hero!","Hello Alice!"],puzzleMeta:{mode:"fill-in",template:`function greet(name) {
  return __BLANK1__;
}

console.log(greet("Hero"));
console.log(greet("Alice"));`,blanks:[{id:"BLANK1",prompt:"Return a greeting using the name parameter",choices:["`Hello ${name}!`",'"Hello ${name}!"','"Hello " + name + "!"'],solution:"`Hello ${name}!`",hintSteps:["Use a template literal to inject the name.","Template literals use backticks: ` like this `","Type: `Hello ${name}!`"]}]}},{title:"Simple Math Operations",description:"Create two numbers and perform basic math operations (add, subtract, multiply).",starterCode:`// Step 1: Create two number variables (like const a = 10; const b = 5;)
// Step 2: Add them together and log the result
// Step 3: Subtract b from a and log the result
// Step 4: Multiply them and log the result

// Your code goes here:

`,solution:`const a = 10;
const b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);`,hint:'Step 1: Write "const a = 10;" and "const b = 5;" to create numbers. Step 2: Use "console.log("Addition:", a + b);" for addition. Step 3: Use "console.log("Subtraction:", a - b);" for subtraction. Step 4: Use "console.log("Multiplication:", a * b);" for multiplication.',story:"You learn the ancient art of mathematical magic from the village calculator.",type:"tutorial",difficulty:"intermediate"},{title:"String Operations",description:"Work with text strings - combine them, find their length, and convert to uppercase.",starterCode:`// Step 1: Create two string variables (like const firstName = "Hero"; const lastName = "Adventurer";)
// Step 2: Combine them into a full name and log it
// Step 3: Log the length of the full name
// Step 4: Log the full name in uppercase

// Your code goes here:

`,solution:`const firstName = "Hero";
const lastName = "Adventurer";
const fullName = firstName + " " + lastName;
console.log("Full name:", fullName);
console.log("Name length:", fullName.length);
console.log("Uppercase:", fullName.toUpperCase());`,hint:'Step 1: Write "const firstName = "Hero";" and "const lastName = "Adventurer";". Step 2: Combine with "const fullName = firstName + " " + lastName;". Step 3: Use "fullName.length" for length. Step 4: Use "fullName.toUpperCase()" for uppercase.',story:"You learn to manipulate the ancient texts and inscriptions found in the temple.",type:"tutorial",difficulty:"intermediate"},{title:"If Statements & Comparisons",description:"Use if statements to make decisions based on conditions.",starterCode:`// Step 1: Create a variable for your level (like const level = 5;)
// Step 2: Check if level is greater than 3
// Step 3: If true, log "You are experienced!"
// Step 4: If false, log "Keep practicing!"

// Your code goes here:

`,solution:`const level = 5;
if (level > 3) {
  console.log("You are experienced!");
} else {
  console.log("Keep practicing!");
}`,hint:'Step 1: Write "const level = 5;". Step 2: Write "if (level > 3) {". Step 3: Inside the if, write "console.log("You are experienced!");". Step 4: Add "} else { console.log("Keep practicing!"); }" to handle the other case.',story:"You learn to make wise decisions based on your experience level in the realm.",type:"tutorial",difficulty:"intermediate"},{title:"Modules & Import",description:"Create a module with an export and import it.",starterCode:`// Create a utility function and export it

`,solution:`function calculateDamage(attack, defense) {
  return Math.max(1, attack - defense);
}

function formatMessage(hero, damage) {
  return \`Welcome to CodeRealm, \${hero}! Damage: \${damage}\`;
}

console.log(formatMessage("Warrior", calculateDamage(10, 3)));`,hint:"Create functions and use them together.",story:"You organize your spells into reusable modules.",type:"tutorial",difficulty:"intermediate"},{title:"Closures & Hoisting",description:"Create a closure that remembers a counter value.",starterCode:`// Create a function that returns another function

`,solution:`function createCounter() {
  let count = 0;
  return function() {
    count++;
    return \`Welcome to CodeRealm, attempt \${count}!\`;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());`,hint:"Return a function from another function to create a closure.",story:"You learn to create persistent memories in your spells.",type:"tutorial",difficulty:"advanced"},{title:"Prototype & Classes",description:"Create a class with methods and instantiate it.",starterCode:`// Create a Hero class with attack and defend methods

`,solution:`class Hero {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
  
  attack() {
    return \`Welcome to CodeRealm, \${this.name} attacks!\`;
  }
  
  defend() {
    this.health += 10;
    return \`Welcome to CodeRealm, \${this.name} defends! Health: \${this.health}\`;
  }
}

const hero = new Hero("Knight", 100);
console.log(hero.attack());
console.log(hero.defend());`,hint:"Use class keyword with constructor and methods.",story:"You forge a legendary hero with unique abilities.",type:"tutorial",difficulty:"advanced"},{title:"Fetch API",description:"Simulate fetching data and handle the response.",starterCode:`// Simulate an API call (use setTimeout instead of fetch)

`,solution:`function fetchQuestData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ quest: "Defeat the Dragon", reward: "Legendary Sword" });
    }, 500);
  });
}

fetchQuestData().then(data => {
  console.log(\`Welcome to CodeRealm, new quest: \${data.quest}\`);
  console.log(\`Reward: \${data.reward}\`);
});`,hint:"Use Promise with setTimeout to simulate async data fetching.",story:"You contact the quest board for new adventures.",type:"tutorial",difficulty:"advanced"},{title:"Local Storage",description:"Save and retrieve data from localStorage.",starterCode:`// Save progress and retrieve it

`,solution:'const progress = { level: 8, score: 850, name: "Hero" };\nlocalStorage.setItem("gameProgress", JSON.stringify(progress));\n\nconst saved = JSON.parse(localStorage.getItem("gameProgress"));\nconsole.log(`Welcome to CodeRealm, ${saved.name}!`);\nconsole.log(`Level: ${saved.level}, Score: ${saved.score}`);',hint:"Use localStorage.setItem() and localStorage.getItem() with JSON.",story:"You save your progress in the ancient archives.",type:"tutorial",difficulty:"advanced"},{title:"Form Validation",description:"Validate user input and provide feedback.",starterCode:`const userInput = "test@email.com";
const password = "password123";

`,solution:`const userInput = "test@email.com";
const password = "password123";

function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}

function validatePassword(pass) {
  return pass.length >= 8;
}

if (validateEmail(userInput) && validatePassword(password)) {
  console.log("Welcome to CodeRealm, valid user!");
} else {
  console.log("Welcome to CodeRealm, but validation failed!");
}`,hint:"Create validation functions and check both email and password.",story:"You guard the entrance with validation spells.",type:"tutorial",difficulty:"advanced"},{title:"Regular Expressions",description:"Use regex to validate and extract data from strings.",starterCode:`const text = "Contact: hero@coderealm.com or call 555-1234";

`,solution:`const text = "Contact: hero@coderealm.com or call 555-1234";

const emailRegex = /[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}/;
const phoneRegex = /\\d{3}-\\d{4}/;

const email = text.match(emailRegex);
const phone = text.match(phoneRegex);

console.log("Welcome to CodeRealm, data extracted!");
console.log(\`Email: \${email[0]}, Phone: \${phone[0]}\`);`,hint:"Use .match() with regex patterns to find email and phone.",story:"You decipher ancient texts using pattern recognition.",type:"tutorial",difficulty:"advanced"}],OA=[{title:"Hello Java - Your First Program",description:'Write your very first Java program! Just print "Hello, CodeRealm!" to the console.',starterCode:`// Welcome to the Java Kingdom! This is your first Java adventure.
// Just write a simple program to say hello to the console.

// Your first Java code goes here:

`,solution:`public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, CodeRealm!");
  }
}`,hint:'Write: public class HelloWorld { public static void main(String[] args) { System.out.println("Hello, CodeRealm!"); } } - This is the basic Java structure!',story:"Welcome, brave knight! You've entered the Java Kingdom where code is structured and powerful. Your journey begins with a simple greeting...",type:"tutorial",difficulty:"beginner"},{title:"Variables & Data Types",description:"Create a String variable for your hero name and print a welcome message.",starterCode:`public class Hero {
  public static void main(String[] args) {
    // Step 1: Create a String variable called heroName and give it your name
    // Step 2: Use System.out.println() to display a welcome message
    
    // Your code goes here:
    
  }
}`,solution:`public class Hero {
  public static void main(String[] args) {
    String heroName = "Knight";
    System.out.println("Welcome to CodeRealm, " + heroName + "!");
  }
}`,hint:'Step 1: Write "String heroName = "YourName";" to create a variable. Step 2: Write "System.out.println("Welcome to CodeRealm, " + heroName + "!");" to display the message.',story:"In the ancient fortress of Java Kingdom, knights must prove their worth by mastering the sacred syntax...",type:"tutorial",difficulty:"beginner"},{title:"Methods & Classes",description:"Create a method that says hello and call it from main.",starterCode:`public class Hero {
  public static void main(String[] args) {
    // Step 1: Call the greet method and print the result
    
    // Your code goes here:
    
  }
  
  // Step 2: Create a method called greet that returns a hello message
  
}`,solution:`public class Hero {
  public static void main(String[] args) {
    System.out.println(greet("Knight"));
  }
  
  static String greet(String name){
    return "Welcome to CodeRealm, " + name + "!";
  }
}`,hint:'Step 1: Write "System.out.println(greet("Knight"));" in main. Step 2: Add "static String greet(String name) { return "Welcome to CodeRealm, " + name + "!"; }" method.',story:"You inscribe a reusable greeting into your grimoire.",type:"tutorial",difficulty:"beginner"},{title:"OOP Fundamentals",description:"Create a Hero class with a name field and a greet method.",starterCode:`// implement class Hero and main
`,solution:`class Hero {
  String name;
  Hero(String name){ this.name = name; }
  String greet(){ return "Welcome to CodeRealm, " + name + "!"; }
}
public class Main {
  public static void main(String[] args){
    Hero h = new Hero("Knight");
    System.out.println(h.greet());
  }
}`,hint:"Use constructor, field, and instance method.",story:"You forge an identity and voice for your hero.",type:"tutorial",difficulty:"beginner"},{title:"Exception Handling",description:"Parse integer from text using try/catch and print a fallback message.",starterCode:`public class Main {
  public static void main(String[] args){
    String text = "not-number";
    // ...
  }
}
`,solution:`public class Main {
  public static void main(String[] args){
    String text = "not-number";
    try {
      Integer.parseInt(text);
      System.out.println("Welcome to CodeRealm, parser!");
    } catch (Exception e){
      System.out.println("Welcome to CodeRealm, but parsing failed");
    }
  }
}`,hint:"Use try/catch (Exception e).",story:"A malfunctioning artifact requires careful handling.",type:"tutorial",difficulty:"beginner"},{title:"Puzzle: Add Two Numbers",description:"Create a method that takes two numbers and returns their sum. Very simple!",starterCode:`// Complete the method below to add two numbers together
// Example: addNumbers(5, 3) should return 8

public class Main {
    public static int addNumbers(int a, int b) {
        // Write your code here - just add a and b!
        
    }
    
    public static void main(String[] args) {
        System.out.println(addNumbers(5, 3));    // Should show: 8
        System.out.println(addNumbers(10, 20));  // Should show: 30
    }
}`,solution:`public class Main {
    public static int addNumbers(int a, int b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        System.out.println(addNumbers(5, 3));
        System.out.println(addNumbers(10, 20));
    }
}`,hint:"Just return a + b inside the method. That's it! Use the return keyword followed by a + b",story:"The merchant needs help adding up the gold coins. Can you help by creating a simple addition method?",type:"puzzle",difficulty:"beginner",expectedIncludes:["8","30"],puzzleMeta:{mode:"fill-in",template:`public class Main {
  public static int addNumbers(int a, int b) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    System.out.println(addNumbers(5, 3));
    System.out.println(addNumbers(10, 20));
  }
}`,blanks:[{id:"BLANK1",prompt:"Add the two parameters and return the result",choices:["a + b","a - b","a * b","a / b"],solution:"a + b",hintSteps:["Combine a and b","Use addition operator","Type a + b"]}]}},{title:"Puzzle: Check if Number is Even",description:"Create a method that checks if a number is even. Return true if even, false if odd.",starterCode:`// A number is even if dividing by 2 gives no remainder
// Use the % (modulo) operator: number % 2
// If number % 2 equals 0, it's even!

public class Main {
    public static boolean isEven(int number) {
        // Your code here
        
    }
    
    public static void main(String[] args) {
        System.out.println(isEven(4));  // Should show: true
        System.out.println(isEven(7));  // Should show: false
    }
}`,solution:`public class Main {
    public static boolean isEven(int number) {
        return number % 2 == 0;
    }
    
    public static void main(String[] args) {
        System.out.println(isEven(4));
        System.out.println(isEven(7));
    }
}`,hint:"Return the result of: number % 2 == 0 (This checks if the remainder is 0)",story:"The kingdom needs to pair up knights for patrol. Help determine which knight numbers are even for pairing!",type:"puzzle",difficulty:"beginner",expectedIncludes:["true","false"],puzzleMeta:{mode:"fill-in",template:`public class Main {
  public static boolean isEven(int number) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    System.out.println(isEven(4));
    System.out.println(isEven(7));
  }
}`,blanks:[{id:"BLANK1",prompt:"Check if divisible by 2",choices:["number % 2 == 0","number / 2 == 0","number % 3 == 0"],solution:"number % 2 == 0",hintSteps:["Use modulo","Compare remainder to 0","Type number % 2 == 0"]}]}},{title:"Puzzle: Get First Item from Array",description:"Write a method that returns the first item from an array.",starterCode:`// Arrays are like lists that start counting from 0
// The first item is at position [0]

public class Main {
    public static String getFirst(String[] array) {
        // Return the first item (hint: use array[0])
        
    }
    
    public static void main(String[] args) {
        String[] fruits = {"apple", "banana", "orange"};
        System.out.println(getFirst(fruits));  // Should show: "apple"
    }
}`,solution:`public class Main {
    public static String getFirst(String[] array) {
        return array[0];
    }
    
    public static void main(String[] args) {
        String[] fruits = {"apple", "banana", "orange"};
        System.out.println(getFirst(fruits));
    }
}`,hint:"Simply return array[0] - that's the first element!",story:"The treasure chest has many items. Which one is on top? Get the first item to find out!",type:"puzzle",difficulty:"beginner",expectedIncludes:["apple"],puzzleMeta:{mode:"fill-in",template:`public class Main {
  public static String getFirst(String[] array) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    String[] fruits = {"apple", "banana", "orange"};
    System.out.println(getFirst(fruits));
  }
}`,blanks:[{id:"BLANK1",prompt:"Access the first element",choices:["array[0]","array[1]","array[-1]"],solution:"array[0]",hintSteps:["Arrays are zero-indexed","First element is index 0","Use array[0]"]}]}},{title:"Puzzle: Count Array Length",description:"Create a method that counts how many items are in an array.",starterCode:`// Every array has a .length property that tells you how many items it has

public class Main {
    public static int countItems(String[] array) {
        // Return the length of the array
        
    }
    
    public static void main(String[] args) {
        String[] colors = {"red", "blue", "green"};
        System.out.println(countItems(colors));  // Should show: 3
    }
}`,solution:`public class Main {
    public static int countItems(String[] array) {
        return array.length;
    }
    
    public static void main(String[] args) {
        String[] colors = {"red", "blue", "green"};
        System.out.println(countItems(colors));
    }
}`,hint:"Use array.length to get the number of items. Just return that!",story:"The wizard needs to count how many spell ingredients are in the potion list. Help by counting the array!",type:"puzzle",difficulty:"beginner",expectedIncludes:["3"],puzzleMeta:{mode:"fill-in",template:`public class Main {
  public static int countItems(String[] array) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    String[] colors = {"red", "blue", "green"};
    System.out.println(countItems(colors));
  }
}`,blanks:[{id:"BLANK1",prompt:"Return number of elements",choices:["array.length","array.size()","length(array)"],solution:"array.length",hintSteps:["Use .length property","Not a function in Java","Type array.length"]}]}},{title:"Puzzle: Greet by Name",description:"Make a method that takes a name and returns a greeting message.",starterCode:`// Create a friendly greeting message
// Use + to combine strings: "Hello " + name + "!"

public class Main {
    public static String greet(String name) {
        // Return a greeting like "Hello Hero!"
        
    }
    
    public static void main(String[] args) {
        System.out.println(greet("Hero"));   // Should show: "Hello Hero!"
        System.out.println(greet("Alice"));  // Should show: "Hello Alice!"
    }
}`,solution:`public class Main {
    public static String greet(String name) {
        return "Hello " + name + "!";
    }
    
    public static void main(String[] args) {
        System.out.println(greet("Hero"));
        System.out.println(greet("Alice"));
    }
}`,hint:'Combine strings with +: return "Hello " + name + "!" (The + joins the strings together)',story:"The friendly innkeeper wants to greet every adventurer by name. Create a greeting method to help!",type:"puzzle",difficulty:"beginner",expectedIncludes:["Hello Hero!","Hello Alice!"],puzzleMeta:{mode:"fill-in",template:`public class Main {
  public static String greet(String name) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    System.out.println(greet("Hero"));
    System.out.println(greet("Alice"));
  }
}`,blanks:[{id:"BLANK1",prompt:"Return a greeting using name",choices:['"Hello " + name + "!"',"`Hello ${name}!`",'String.format("Hello %s!", name)'],solution:'"Hello " + name + "!"',hintSteps:["Use string concatenation","Combine literals with +",'Type "Hello " + name + "!"']}]}},{title:"Collections Framework",description:'Create an ArrayList of items and iterate to print a special message for "potion".',starterCode:`import java.util.*;

`,solution:`import java.util.*;
public class Main {
  public static void main(String[] args){
    List<String> items = Arrays.asList("sword","shield","potion");
    for (String it : items){
      if ("potion".equals(it)) System.out.println("Welcome to CodeRealm, potion master!");
    }
  }
}`,hint:"Use java.util.List and enhanced for-loop.",story:"You catalog your armory using lists.",type:"tutorial",difficulty:"intermediate"},{title:"Generics",description:"Create a generic class that can store any type of data.",starterCode:`// Create a generic TreasureBox class

`,solution:`class TreasureBox<T> {
  private T treasure;
  
  public void setTreasure(T treasure) {
    this.treasure = treasure;
  }
  
  public T getTreasure() {
    return treasure;
  }
}

public class Main {
  public static void main(String[] args) {
    TreasureBox<String> box = new TreasureBox<>();
    box.setTreasure("Golden Sword");
    System.out.println("Welcome to CodeRealm, treasure: " + box.getTreasure());
  }
}`,hint:"Use <T> for generic type parameter.",story:"You create a magical box that can hold any treasure.",type:"tutorial",difficulty:"intermediate"},{title:"File I/O",description:"Simulate file operations with string manipulation.",starterCode:`// Simulate reading and writing quest data

`,solution:`import java.util.*;

public class Main {
  public static void main(String[] args) {
    String questData = "Quest: Defeat Dragon\\nReward: 1000 gold\\nDifficulty: Hard";
    
    String[] lines = questData.split("\\\\n");
    for (String line : lines) {
      System.out.println("Welcome to CodeRealm, " + line);
    }
  }
}`,hint:"Use split() to break text into lines.",story:"You read ancient scrolls containing quest information.",type:"tutorial",difficulty:"intermediate"},{title:"Multithreading",description:"Create a simple thread that prints messages.",starterCode:`// Create a thread that runs in background

`,solution:`public class Main {
  public static void main(String[] args) {
    Thread questThread = new Thread(() -> {
      for (int i = 1; i <= 3; i++) {
        System.out.println("Welcome to CodeRealm, quest " + i + " in progress...");
        try { Thread.sleep(100); } catch (Exception e) {}
      }
    });
    
    questThread.start();
    System.out.println("Welcome to CodeRealm, main thread continues!");
  }
}`,hint:"Use Thread with lambda expression.",story:"You learn to perform multiple tasks simultaneously.",type:"tutorial",difficulty:"advanced"},{title:"Lambda Expressions",description:"Use lambda expressions with collections.",starterCode:`import java.util.*;

`,solution:`import java.util.*;

public class Main {
  public static void main(String[] args) {
    List<String> quests = Arrays.asList("Dragon", "Goblin", "Wizard");
    
    quests.stream()
      .filter(q -> q.length() > 4)
      .forEach(q -> System.out.println("Welcome to CodeRealm, " + q + " quest!"));
  }
}`,hint:"Use stream(), filter(), and forEach() with lambda.",story:"You master the art of functional programming.",type:"tutorial",difficulty:"advanced"},{title:"Stream API",description:"Use streams to process collections of data.",starterCode:`import java.util.*;

`,solution:`import java.util.*;

public class Main {
  public static void main(String[] args) {
    List<Integer> scores = Arrays.asList(85, 92, 78, 96, 88);
    
    double average = scores.stream()
      .mapToInt(Integer::intValue)
      .average()
      .orElse(0.0);
    
    System.out.println("Welcome to CodeRealm, average score: " + average);
  }
}`,hint:"Use stream(), mapToInt(), and average().",story:"You calculate statistics from your adventure scores.",type:"tutorial",difficulty:"advanced"},{title:"Design Patterns",description:"Implement the Singleton pattern.",starterCode:`// Create a singleton GameManager class

`,solution:`class GameManager {
  private static GameManager instance;
  private String playerName;
  
  private GameManager() {}
  
  public static GameManager getInstance() {
    if (instance == null) {
      instance = new GameManager();
    }
    return instance;
  }
  
  public void setPlayerName(String name) {
    this.playerName = name;
  }
  
  public String getPlayerName() {
    return playerName;
  }
}

public class Main {
  public static void main(String[] args) {
    GameManager gm = GameManager.getInstance();
    gm.setPlayerName("Hero");
    System.out.println("Welcome to CodeRealm, " + gm.getPlayerName() + "!");
  }
}`,hint:"Use private constructor and static getInstance() method.",story:"You create a unique game manager that controls the realm.",type:"tutorial",difficulty:"advanced"},{title:"Database Connectivity",description:"Simulate database operations with mock data.",starterCode:`// Simulate database queries

`,solution:`import java.util.*;

class MockDatabase {
  private Map<String, String> players = new HashMap<>();
  
  public void savePlayer(String id, String name) {
    players.put(id, name);
  }
  
  public String getPlayer(String id) {
    return players.get(id);
  }
}

public class Main {
  public static void main(String[] args) {
    MockDatabase db = new MockDatabase();
    db.savePlayer("001", "Knight");
    String player = db.getPlayer("001");
    System.out.println("Welcome to CodeRealm, " + player + "!");
  }
}`,hint:"Use HashMap to simulate database storage.",story:"You connect to the ancient player database.",type:"tutorial",difficulty:"advanced"},{title:"Spring Framework",description:"Simulate dependency injection with simple classes.",starterCode:`// Create a simple dependency injection example

`,solution:`interface Weapon {
  String attack();
}

class Sword implements Weapon {
  public String attack() {
    return "Sword slash!";
  }
}

class Hero {
  private Weapon weapon;
  
  public Hero(Weapon weapon) {
    this.weapon = weapon;
  }
  
  public String fight() {
    return "Welcome to CodeRealm, " + weapon.attack();
  }
}

public class Main {
  public static void main(String[] args) {
    Hero hero = new Hero(new Sword());
    System.out.println(hero.fight());
  }
}`,hint:"Use interface and constructor injection.",story:"You learn the art of dependency injection.",type:"tutorial",difficulty:"advanced"},{title:"Testing with JUnit",description:"Create a simple test method.",starterCode:`// Create a method to test

`,solution:`public class Calculator {
  public static int add(int a, int b) {
    return a + b;
  }
  
  public static int multiply(int a, int b) {
    return a * b;
  }
}

public class Main {
  public static void main(String[] args) {
    // Simple test
    int result1 = Calculator.add(5, 3);
    int result2 = Calculator.multiply(4, 6);
    
    if (result1 == 8 && result2 == 24) {
      System.out.println("Welcome to CodeRealm, all tests passed!");
    } else {
      System.out.println("Welcome to CodeRealm, tests failed!");
    }
  }
}`,hint:"Create methods and test them with assertions.",story:"You verify your magical calculations are correct.",type:"tutorial",difficulty:"advanced"}],VA=[{title:"Hello Python - Your First Code",description:'Write your very first Python program! Just print "Hello, CodeRealm!" to the screen.',starterCode:`# Welcome to the Python Sanctum! This is your first Python adventure.
# Just write one line to say hello to the console.

# Your first Python code goes here:

`,solution:'print("Hello, CodeRealm!")',hint:`Simply write: print("Hello, CodeRealm!") - This tells Python to display a message. Don't forget the quotes around the text!`,story:"Welcome, young sage! You've entered the Python Sanctum where elegant code flows like poetry. Your journey begins with a simple greeting...",type:"tutorial",difficulty:"beginner"},{title:"Variables & Syntax",description:"Create a variable for your hero name and print a welcome message using Python syntax.",starterCode:`# Welcome to the Data Sage's Quest!
# Step 1: Create a variable called hero_name and give it your name
# Step 2: Use print() to display a welcome message

# Your code goes here:

`,solution:`hero_name = "Sage"
print(f"Welcome to CodeRealm, {hero_name}!")`,hint:'Step 1: Write "hero_name = "YourName"" to create a variable. Step 2: Write "print(f"Welcome to CodeRealm, {hero_name}!")" to display the message. Python uses f-strings for easy formatting!',story:"Deep in the Python Sanctum, ancient wisdom flows through elegant code. The sage asks for your identity...",type:"tutorial",difficulty:"beginner"},{title:"Functions & Modules",description:"Define greet(name) returning the welcome string and print it.",starterCode:`hero_name = "Sage"

# Step 1: Create a function called greet that takes a name parameter
# Step 2: Make it return a welcome message with the name
# Step 3: Call the function with hero_name and print the result

# Your code goes here:

`,solution:`hero_name = "Sage"

def greet(name):
  return f"Welcome to CodeRealm, {name}!"

print(greet(hero_name))`,hint:'Step 1: Write "def greet(name):" to start the function. Step 2: Inside the function, write "return f"Welcome to CodeRealm, {name}!"" (use f-strings for easy formatting). Step 3: Call "print(greet(hero_name))" to use the function.',story:"You bottle a greeting spell for reuse.",type:"tutorial",difficulty:"beginner"},{title:"Data Structures",description:"Create a list and dict, then print lengths and a welcome.",starterCode:`# Step 1: Create a list with 3 items (like ["sword", "shield", "potion"])
# Step 2: Create a dictionary with a name key (like {"name": "Sage"})
# Step 3: Print both the list and dictionary

# Your code goes here:

`,solution:`inventory = ["sword","shield","potion"]
hero = {"name": "Sage"}
print(f"Welcome to CodeRealm, {hero["name"]}!")
print(len(inventory))`,hint:'Step 1: Write "inventory = ["sword", "shield", "potion"]" to create a list. Step 2: Write "hero = {"name": "Sage"}" to create a dictionary. Step 3: Use "print(inventory)" and "print(hero)" to display them.',story:"You organize your supplies.",type:"tutorial",difficulty:"beginner"},{title:"Conditionals & Loops",description:'Loop through items and print a special message for "potion".',starterCode:`inventory = ["sword","shield","potion"]

# Step 1: Use a for loop to go through each item in inventory
# Step 2: Check if the item equals "potion"
# Step 3: If it is, print a special message

# Your code goes here:

`,solution:`inventory = ["sword","shield","potion"]
for item in inventory:
  if item == "potion":
    print("Welcome to CodeRealm, potion master!")`,hint:'Step 1: Write "for item in inventory:" to loop through items. Step 2: Inside the loop, write "if item == "potion":" to check for potion. Step 3: Inside the if, write "print("Welcome to CodeRealm, potion master!")".',story:"You search your bag for helpful items.",type:"tutorial",difficulty:"beginner"},{title:"Puzzle: Add Two Numbers",description:"Write a function that takes two numbers and returns their sum. Very simple!",starterCode:`# Complete the function below to add two numbers together
# Example: add_numbers(5, 3) should return 8

def add_numbers(a, b):
    # Write your code here - just add a and b!
    pass

# Test your function
print(add_numbers(5, 3))    # Should show: 8
print(add_numbers(10, 20))  # Should show: 30`,solution:`def add_numbers(a, b):
    return a + b

print(add_numbers(5, 3))
print(add_numbers(10, 20))`,hint:`Just return a + b inside the function. That's it! Replace "pass" with return a + b`,story:"The merchant needs help adding up the gold coins. Can you help by creating a simple addition function?",type:"puzzle",difficulty:"beginner",expectedIncludes:["8","30"],puzzleMeta:{mode:"fill-in",template:`def add_numbers(a, b):
    return __BLANK1__

print(add_numbers(5, 3))
print(add_numbers(10, 20))`,blanks:[{id:"BLANK1",prompt:"Add the two parameters and return",choices:["a + b","a - b","a * b","a / b"],solution:"a + b",hintSteps:["Combine a and b","Use the + operator","Type a + b"]}]}},{title:"Puzzle: Check if Number is Even",description:"Create a function that checks if a number is even. Return True if even, False if odd.",starterCode:`# A number is even if dividing by 2 gives no remainder
# Use the % (modulo) operator: number % 2
# If number % 2 equals 0, it's even!

def is_even(number):
    # Your code here
    pass

# Test it
print(is_even(4))  # Should show: True
print(is_even(7))  # Should show: False`,solution:`def is_even(number):
    return number % 2 == 0

print(is_even(4))
print(is_even(7))`,hint:"Return the result of: number % 2 == 0 (This checks if the remainder is 0)",story:"The kingdom needs to pair up knights for patrol. Help determine which knight numbers are even for pairing!",type:"puzzle",difficulty:"beginner",expectedIncludes:["True","False"],puzzleMeta:{mode:"fill-in",template:`def is_even(number):
    return __BLANK1__

print(is_even(4))
print(is_even(7))`,blanks:[{id:"BLANK1",prompt:"Check if divisible by 2",choices:["number % 2 == 0","number / 2 == 0","number % 3 == 0"],solution:"number % 2 == 0",hintSteps:["Use modulo %","Compare remainder to 0","Type number % 2 == 0"]}]}},{title:"Puzzle: Get First Item from List",description:"Write a function that returns the first item from a list.",starterCode:`# Lists are like arrays that start counting from 0
# The first item is at position [0]

def get_first(my_list):
    # Return the first item (hint: use my_list[0])
    pass

# Test with these lists
fruits = ["apple", "banana", "orange"]
numbers = [10, 20, 30]

print(get_first(fruits))   # Should show: "apple"
print(get_first(numbers))  # Should show: 10`,solution:`def get_first(my_list):
    return my_list[0]

fruits = ["apple", "banana", "orange"]
numbers = [10, 20, 30]

print(get_first(fruits))
print(get_first(numbers))`,hint:"Simply return my_list[0] - that's the first element!",story:"The treasure chest has many items. Which one is on top? Get the first item to find out!",type:"puzzle",difficulty:"beginner",expectedIncludes:["apple","10"],puzzleMeta:{mode:"fill-in",template:`def get_first(my_list):
    return __BLANK1__

fruits = ["apple", "banana", "orange"]
numbers = [10, 20, 30]

print(get_first(fruits))
print(get_first(numbers))`,blanks:[{id:"BLANK1",prompt:"Access first element",choices:["my_list[0]","my_list[1]","my_list[-1]"],solution:"my_list[0]",hintSteps:["Lists are zero-indexed","First element is index 0","Use my_list[0]"]}]}},{title:"Puzzle: Count List Length",description:"Create a function that counts how many items are in a list.",starterCode:`# Every list has a len() function that tells you how many items it has

def count_items(my_list):
    # Return the length of the list
    pass

# Test it
colors = ["red", "blue", "green"]
ages = [5, 10, 15, 20, 25]

print(count_items(colors))  # Should show: 3
print(count_items(ages))    # Should show: 5`,solution:`def count_items(my_list):
    return len(my_list)

colors = ["red", "blue", "green"]
ages = [5, 10, 15, 20, 25]

print(count_items(colors))
print(count_items(ages))`,hint:"Use len(my_list) to get the number of items. Just return that!",story:"The wizard needs to count how many spell ingredients are in the potion list. Help by counting the list!",type:"puzzle",difficulty:"beginner",expectedIncludes:["3","5"],puzzleMeta:{mode:"fill-in",template:`def count_items(my_list):
    return __BLANK1__

colors = ["red", "blue", "green"]
ages = [5, 10, 15, 20, 25]

print(count_items(colors))
print(count_items(ages))`,blanks:[{id:"BLANK1",prompt:"Return number of items",choices:["len(my_list)","my_list.length","size(my_list)"],solution:"len(my_list)",hintSteps:["Use len()","len() returns count","Type len(my_list)"]}]}},{title:"Puzzle: Greet by Name",description:"Make a function that takes a name and returns a greeting message.",starterCode:`# Create a friendly greeting message
# Use f-strings: f"Hello {name}!"

def greet(name):
    # Return a greeting like "Hello Hero!"
    pass

# Test your function
print(greet("Hero"))   # Should show: "Hello Hero!"
print(greet("Alice"))  # Should show: "Hello Alice!"`,solution:`def greet(name):
    return f"Hello {name}!"

print(greet("Hero"))
print(greet("Alice"))`,hint:'Use an f-string: return f"Hello {name}!" (The f before the quotes makes it an f-string)',story:"The friendly innkeeper wants to greet every adventurer by name. Create a greeting function to help!",type:"puzzle",difficulty:"beginner",expectedIncludes:["Hello Hero!","Hello Alice!"],puzzleMeta:{mode:"fill-in",template:`def greet(name):
    return __BLANK1__

print(greet("Hero"))
print(greet("Alice"))`,blanks:[{id:"BLANK1",prompt:"Return greeting using name",choices:['f"Hello {name}!"','"Hello {name}!"','"Hello " + name + "!"'],solution:'f"Hello {name}!"',hintSteps:["Use an f-string","f-strings format values inside {}",'Type f"Hello {name}!"']}]}},{title:"Simple Math Operations",description:"Create two numbers and perform basic math operations (add, subtract, multiply).",starterCode:`# Step 1: Create two number variables (like a = 10, b = 5)
# Step 2: Add them together and print the result
# Step 3: Subtract b from a and print the result
# Step 4: Multiply them and print the result

# Your code goes here:

`,solution:`a = 10
b = 5
print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)`,hint:'Step 1: Write "a = 10" and "b = 5" to create numbers. Step 2: Use "print("Addition:", a + b)" for addition. Step 3: Use "print("Subtraction:", a - b)" for subtraction. Step 4: Use "print("Multiplication:", a * b)" for multiplication.',story:"You learn the ancient art of mathematical magic from the village calculator.",type:"tutorial",difficulty:"intermediate"},{title:"String Operations",description:"Work with text strings - combine them, find their length, and convert to uppercase.",starterCode:`# Step 1: Create two string variables (like first_name = "Hero", last_name = "Adventurer")
# Step 2: Combine them into a full name and print it
# Step 3: Print the length of the full name
# Step 4: Print the full name in uppercase

# Your code goes here:

`,solution:`first_name = "Hero"
last_name = "Adventurer"
full_name = first_name + " " + last_name
print("Full name:", full_name)
print("Name length:", len(full_name))
print("Uppercase:", full_name.upper())`,hint:'Step 1: Write "first_name = "Hero"" and "last_name = "Adventurer"". Step 2: Combine with "full_name = first_name + " " + last_name". Step 3: Use "len(full_name)" for length. Step 4: Use "full_name.upper()" for uppercase.',story:"You learn to manipulate the ancient texts and inscriptions found in the temple.",type:"tutorial",difficulty:"intermediate"},{title:"Web Scraping",description:"Simulate web scraping with string manipulation.",starterCode:`html_content = '<div class="quest">Dragon Hunt</div><div class="reward">1000 gold</div>'

`,solution:`html_content = '<div class="quest">Dragon Hunt</div><div class="reward">1000 gold</div>'

# Simple extraction (simulate BeautifulSoup)
quest_start = html_content.find('>') + 1
quest_end = html_content.find('<', quest_start)
quest = html_content[quest_start:quest_end]

reward_start = html_content.find('>', quest_end) + 1
reward_end = html_content.find('<', reward_start)
reward = html_content[reward_start:reward_end]

print(f"Welcome to CodeRealm, quest: {quest}")
print(f"Reward: {reward}")`,hint:"Use string methods like find() to extract data.",story:"You extract information from ancient web scrolls.",type:"tutorial",difficulty:"intermediate"},{title:"Data Analysis",description:"Analyze a list of numbers with basic statistics.",starterCode:`scores = [85, 92, 78, 96, 88, 91, 87, 94]

`,solution:`scores = [85, 92, 78, 96, 88, 91, 87, 94]

max_score = max(scores)
min_score = min(scores)
average = sum(scores) / len(scores)

print(f"Welcome to CodeRealm, max score: {max_score}")
print(f"Min score: {min_score}")
print(f"Average: {average:.1f}")`,hint:"Use max(), min(), sum(), and len() functions.",story:"You analyze your adventure statistics.",type:"tutorial",difficulty:"intermediate"},{title:"NumPy & Pandas",description:"Simulate array operations with lists.",starterCode:`import math

# Simulate NumPy operations
`,solution:`import math

# Simulate NumPy operations
array1 = [1, 2, 3, 4, 5]
array2 = [2, 4, 6, 8, 10]

# Element-wise addition
result = [a + b for a, b in zip(array1, array2)]
print(f"Welcome to CodeRealm, array sum: {result}")

# Calculate mean
mean = sum(array1) / len(array1)
print(f"Mean: {mean}")`,hint:"Use list comprehensions and zip() for array operations.",story:"You perform mathematical operations on data arrays.",type:"tutorial",difficulty:"advanced"},{title:"Matplotlib Visualization",description:"Simulate plotting with text-based charts.",starterCode:`data = [5, 3, 8, 2, 7, 4, 6, 9]

`,solution:`data = [5, 3, 8, 2, 7, 4, 6, 9]

print("Welcome to CodeRealm, simple bar chart:")
for i, value in enumerate(data):
  bar = "█" * value
  print(f"Bar {i+1}: {bar} ({value})")`,hint:"Use string multiplication to create simple bars.",story:"You create visual representations of your data.",type:"tutorial",difficulty:"advanced"},{title:"Django Basics",description:"Create a simple class-based view simulation.",starterCode:`class QuestView:
  def __init__(self, quest_name):
    self.quest_name = quest_name
  
  def get(self):
    # TODO: implement GET method
    pass

`,solution:`class QuestView:
  def __init__(self, quest_name):
    self.quest_name = quest_name
  
  def get(self):
    return f"Welcome to CodeRealm, quest: {self.quest_name}"
  
  def post(self, data):
    return f"Welcome to CodeRealm, quest updated: {data}"

view = QuestView("Dragon Hunt")
print(view.get())
print(view.post("New Dragon Hunt"))`,hint:"Implement get() and post() methods in the class.",story:"You create web views to handle quest requests.",type:"tutorial",difficulty:"advanced"},{title:"Flask Web Apps",description:"Simulate Flask routes with function calls.",starterCode:`class Flask:
  def __init__(self):
    self.routes = {}
  
  def route(self, path):
    def decorator(func):
      self.routes[path] = func
      return func
    return decorator
  
  def run_route(self, path):
    if path in self.routes:
      return self.routes[path]()
    return "404 Not Found"

`,solution:`class Flask:
  def __init__(self):
    self.routes = {}
  
  def route(self, path):
    def decorator(func):
      self.routes[path] = func
      return func
    return decorator
  
  def run_route(self, path):
    if path in self.routes:
      return self.routes[path]()
    return "404 Not Found"

app = Flask()

@app.route("/quest")
def get_quest():
  return "Welcome to CodeRealm, quest endpoint!"

print(app.run_route("/quest"))`,hint:"Use decorators to register routes.",story:"You build a web application to serve quests.",type:"tutorial",difficulty:"advanced"},{title:"API Development",description:"Create a simple API with JSON-like responses.",starterCode:`import json

class QuestAPI:
  def __init__(self):
    self.quests = {}
  
  def create_quest(self, quest_id, name):
    # TODO: implement
    pass
  
  def get_quest(self, quest_id):
    # TODO: implement
    pass

`,solution:`import json

class QuestAPI:
  def __init__(self):
    self.quests = {}
  
  def create_quest(self, quest_id, name):
    self.quests[quest_id] = {"name": name, "status": "active"}
    return {"message": f"Welcome to CodeRealm, quest {name} created!"}
  
  def get_quest(self, quest_id):
    if quest_id in self.quests:
      return {"quest": self.quests[quest_id]}
    return {"error": "Quest not found"}

api = QuestAPI()
print(api.create_quest("001", "Dragon Hunt"))
print(api.get_quest("001"))`,hint:"Return dictionaries that simulate JSON responses.",story:"You build an API to manage quest data.",type:"tutorial",difficulty:"advanced"},{title:"Machine Learning Intro",description:"Implement a simple linear regression simulation.",starterCode:`def simple_linear_regression(x_values, y_values):
  # TODO: implement simple linear regression
  pass

`,solution:`def simple_linear_regression(x_values, y_values):
  n = len(x_values)
  sum_x = sum(x_values)
  sum_y = sum(y_values)
  sum_xy = sum(x * y for x, y in zip(x_values, y_values))
  sum_x2 = sum(x * x for x in x_values)
  
  slope = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x * sum_x)
  intercept = (sum_y - slope * sum_x) / n
  
  return slope, intercept

# Sample data: level vs experience
levels = [1, 2, 3, 4, 5]
experience = [100, 250, 450, 700, 1000]

slope, intercept = simple_linear_regression(levels, experience)
print(f"Welcome to CodeRealm, ML model trained!")
print(f"Slope: {slope:.2f}, Intercept: {intercept:.2f}")
print(f"Predicted exp for level 6: {slope * 6 + intercept:.0f}")`,hint:"Calculate slope and intercept using the linear regression formula.",story:"You train a machine learning model to predict experience gains.",type:"tutorial",difficulty:"advanced"}],UA=({selectedLanguage:t,onNavigate:e})=>{const[n,r]=H.useState(""),[s,i]=H.useState(""),[o,c]=H.useState({}),[u,h]=H.useState({}),[m,p]=H.useState(!1),[g,N]=H.useState(1),[A,j]=H.useState(!1),[L,E]=H.useState(!1),[w,I]=H.useState(!1),[D,z]=H.useState(0),[R,y]=H.useState(null),[v,_]=H.useState(null),[S,T]=H.useState(0),[C,b]=H.useState(!1),[Z,k]=H.useState(!0),[V,$]=H.useState(0),[O,F]=H.useState(!1),[q,Y]=H.useState("guest"),[G,oe]=H.useState(!1),[Q,Ht]=H.useState(null),ve=H.useRef(null);H.useEffect(()=>{const se=localStorage.getItem("userId")||"guest";Y(se);const ue=localStorage.getItem("tutorialDismissed")==="true";F(ue),k(!ue);const we=()=>{F(!1),k(!0)};if(window.addEventListener("tutorialReset",we),localStorage.getItem("selectedMode")==="puzzle"){const xe=Math.max(1,Math.min(30,parseInt(localStorage.getItem("selectedPuzzleIndex")||"1")));oe(!0),Ht(xe),localStorage.removeItem("selectedMode"),localStorage.removeItem("selectedPuzzleIndex")}else{const xe=localStorage.getItem("selectedLevel");xe&&(N(parseInt(xe)),localStorage.removeItem("selectedLevel"))}return()=>{window.removeEventListener("tutorialReset",we)}},[]);const tt={javascript:LA,java:OA,python:VA},rn=(()=>{const se=tt[t][Math.min(g-1,tt[t].length-1)]||tt[t][0];if(!G&&g<=150){const ue=Math.ceil(g/3),we=(g-1)%3+1,Fe=Uw(ue,we,t);return{...se,title:Fe.title,description:Fe.description,story:Fe.story}}return se})();H.useEffect(()=>{if(G&&Q){const ue=Wt(t,Q);r(ue.starterCode)}else r(rn.starterCode);i(""),E(!1),j(!1),z(0),y(Date.now()),_(null),T(0),c({}),h({}),window.scrollTo({top:0,behavior:"smooth"}),I(!0);const se=setTimeout(()=>I(!1),900);return()=>clearTimeout(se)},[t,g,rn.starterCode,G,Q]),H.useEffect(()=>{const se=setInterval(()=>{if(R&&!L){const ue=(Date.now()-R)/1e3;localStorage.setItem("arcane_time",String(Math.floor(ue)))}},1e3);return()=>clearInterval(se)},[R,L]);const su=G,rr=Object.values(u).some(se=>(se??-1)>=0),Wt=(se,ue)=>{const we=ue<=10,Fe=ue>10&&ue<=20,xe=(ue-1)%10+1,le=(Fi,We,gn,Et,Ne,Zr)=>({title:Fi,description:We,starterCode:gn,hint:Ne,story:"Solve the short puzzle by filling in the missing code.",type:"puzzle",difficulty:we?"beginner":Fe?"intermediate":"advanced",expectedIncludes:Et,puzzleMeta:{mode:"fill-in",template:gn.replace(/\n/g,`
`),blanks:Zr||[]}});if(se==="javascript")switch(xe){case 1:return le("Add Two Numbers","Return the sum of a and b.",`function add(a,b){
  return __BLANK1__;
}
console.log(add(2,3))
console.log(add(10,20))`,["5","30"],"In JavaScript, use the + operator to add two numbers. Return the result of a + b.",[{id:"BLANK1",prompt:"Sum a and b",choices:["a+b","a-b","a*b","a/b"],solution:"a+b"}]);case 2:return le("Is Even","Return true if n is even.",`function isEven(n){
  return __BLANK1__;
}
console.log(isEven(4))
console.log(isEven(5))`,["true","false"],"Use the modulo operator (%) to check if a number is divisible by 2. If n % 2 equals 0, the number is even.",[{id:"BLANK1",prompt:"Check divisibility by 2",choices:["n%2===0","n%2==1","n/2===0","n%3===0"],solution:"n%2===0"}]);case 3:return le("First Element","Return the first element of an array.",`function first(arr){
  return __BLANK1__;
}
console.log(first([1,2,3]))
console.log(first([9]))`,["1","9"],"Arrays in JavaScript are zero-indexed. Use arr[0] to access the first element.",[{id:"BLANK1",prompt:"Access first item",choices:["arr[0]","arr[1]","arr.first()","arr[-1]"],solution:"arr[0]"}]);case 4:return le("Array Length","Return the number of items in an array.",`function count(arr){
  return __BLANK1__;
}
console.log(count([1,2,3]))`,["3"],"In JavaScript, arrays have a .length property that returns the number of elements.",[{id:"BLANK1",prompt:"Get number of items",choices:["arr.length","len(arr)","arr.size()","arr.count"],solution:"arr.length"}]);case 5:return le("Greet","Return a greeting with a name using template literals.",`function greet(name){
  return __BLANK1__;
}
console.log(greet("Hero"))`,["Hello Hero!"],"Use template literals (backticks) with ${} to embed variables in strings.",[{id:"BLANK1",prompt:"Template literal greeting",choices:["`Hello ${name}!`",'"Hello ${name}!"','"Hello " + name + "!"','name + "Hello"'],solution:"`Hello ${name}!`"}]);case 6:return le("Min of Two","Return the smaller of two numbers.",`function min(a,b){
  return __BLANK1__;
}
console.log(min(2,5))`,["2"],"Use a ternary operator: condition ? valueIfTrue : valueIfFalse. Check if a < b.",[{id:"BLANK1",prompt:"Ternary for min",choices:["a<b?a:b","a>b?a:b","Math.min(a,b)","a-b"],solution:"a<b?a:b"}]);case 7:return le("Max in Array","Return the maximum number in an array.",`function maxIn(arr){
  return __BLANK1__;
}
console.log(maxIn([1,5,3]))`,["5"],"Use Math.max() with the spread operator (...) to pass array elements as arguments.",[{id:"BLANK1",prompt:"Use Math.max with spread",choices:["Math.max(...arr)","arr.max()","Math.max(arr)","max(arr)"],solution:"Math.max(...arr)"}]);case 8:return le("Reverse String","Return a reversed string.",`function rev(s){
  return __BLANK1__;
}
console.log(rev("abc"))`,["cba"],"Split the string into an array, reverse it, then join back into a string.",[{id:"BLANK1",prompt:"Split-reverse-join",choices:['s.split("").reverse().join("")',"s.reverse()","reverse(s)","s.split().reverse()"],solution:'s.split("").reverse().join("")'}]);case 9:return le("Count Vowels","Count vowels in a string.",`function countV(s){
  let c=0;
  for(const ch of s){ if(__BLANK1__) c++; }
  return c;
}
console.log(countV("hello"))`,["2"],'Use string.includes() to check if a character is in the vowel string "aeiouAEIOU".',[{id:"BLANK1",prompt:"Check if vowel",choices:['"aeiouAEIOU".includes(ch)',"ch.isVowel()","vowels.has(ch)","ch in vowels"],solution:'"aeiouAEIOU".includes(ch)'}]);default:return le("Sum Array","Sum all numbers in an array.",`function sum(arr){
  let s=0; for(const n of arr) s+=__BLANK1__; return s;
}
console.log(sum([1,2,3]))`,["6"],"In the loop, add each element (n) to the sum variable.",[{id:"BLANK1",prompt:"Add current number",choices:["n","arr[i]","i","arr.length"],solution:"n"}])}if(se==="python")switch(xe){case 1:return le("Add Two Numbers","Return the sum of a and b.",`def add(a, b):
    return __BLANK1__

print(add(2, 3))
print(add(10, 20))`,["5","30"],"In Python, use the + operator to add two numbers. Return a + b.",[{id:"BLANK1",prompt:"Sum a and b",choices:["a + b","a - b","a * b","a / b"],solution:"a + b"}]);case 2:return le("Is Even","Return True if n is even.",`def is_even(n):
    return __BLANK1__

print(is_even(4))
print(is_even(5))`,["True","False"],"Use the modulo operator (%) to check divisibility. If n % 2 equals 0, return True.",[{id:"BLANK1",prompt:"Check divisibility by 2",choices:["n % 2 == 0","n % 2 == 1","n / 2 == 0","n % 3 == 0"],solution:"n % 2 == 0"}]);case 3:return le("First Element","Return the first element of a list.",`def first(arr):
    return __BLANK1__

print(first([1, 2, 3]))
print(first([9]))`,["1","9"],"Lists in Python are zero-indexed. Use arr[0] to get the first element.",[{id:"BLANK1",prompt:"Access first item",choices:["arr[0]","arr[1]","arr.first()","arr[-1]"],solution:"arr[0]"}]);case 4:return le("List Length","Return the number of items in a list.",`def count(arr):
    return __BLANK1__

print(count([1, 2, 3]))`,["3"],"In Python, use the len() function to get the number of elements in a list.",[{id:"BLANK1",prompt:"Get number of items",choices:["len(arr)","arr.length","arr.size()","length(arr)"],solution:"len(arr)"}]);case 5:return le("Greet","Return a greeting with a name using f-strings.",`def greet(name):
    return __BLANK1__

print(greet("Hero"))`,["Hello Hero!"],'Use f-strings (f"...{variable}...") to embed variables in strings.',[{id:"BLANK1",prompt:"F-string greeting",choices:['f"Hello {name}!"','"Hello {name}!"','"Hello " + name + "!"','name + "Hello"'],solution:'f"Hello {name}!"'}]);case 6:return le("Min of Two","Return the smaller of two numbers.",`def minimum(a, b):
    return __BLANK1__

print(minimum(2, 5))`,["2"],"Use a ternary expression: a if a < b else b, or use the min() function.",[{id:"BLANK1",prompt:"Ternary or min function",choices:["a if a < b else b","b if a < b else a","min(a, b)","a - b"],solution:"a if a < b else b"}]);case 7:return le("Max in List","Return the maximum number in a list.",`def max_in(arr):
    return __BLANK1__

print(max_in([1, 5, 3]))`,["5"],"Use the built-in max() function to find the largest element in a list.",[{id:"BLANK1",prompt:"Use max function",choices:["max(arr)","arr.max()","Math.max(arr)","maximum(arr)"],solution:"max(arr)"}]);case 8:return le("Reverse String","Return a reversed string.",`def rev(s):
    return __BLANK1__

print(rev("abc"))`,["cba"],"Use slicing [::-1] to reverse a string in Python.",[{id:"BLANK1",prompt:"String slicing",choices:["s[::-1]","s.reverse()","reverse(s)","s[-1]"],solution:"s[::-1]"}]);case 9:return le("Count Vowels","Count vowels in a string.",`def count_v(s):
    c = 0
    for ch in s:
        if __BLANK1__:
            c += 1
    return c

print(count_v("hello"))`,["2"],'Check if a character is in the string "aeiouAEIOU" using the in operator.',[{id:"BLANK1",prompt:"Check if vowel",choices:['ch in "aeiouAEIOU"',"ch.is_vowel()","vowels.has(ch)",'ch == "aeiou"'],solution:'ch in "aeiouAEIOU"'}]);default:return le("Sum List","Sum all numbers in a list.",`def total(arr):
    s = 0
    for n in arr:
        s += __BLANK1__
    return s

print(total([1, 2, 3]))`,["6"],"In the loop, add each element (n) to the sum variable s.",[{id:"BLANK1",prompt:"Add current number",choices:["n","arr[i]","i","len(arr)"],solution:"n"}])}if(se==="java")switch(xe){case 1:return le("Add Two Numbers","Return the sum of a and b.",`public class Main {
  public static int add(int a, int b) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    System.out.println(add(2, 3));
    System.out.println(add(10, 20));
  }
}`,["5","30"],"In Java, use the + operator to add two integers. Return a + b.",[{id:"BLANK1",prompt:"Sum a and b",choices:["a + b","a - b","a * b","a / b"],solution:"a + b"}]);case 2:return le("Is Even","Return true if n is even.",`public class Main {
  public static boolean isEven(int n) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    System.out.println(isEven(4));
    System.out.println(isEven(5));
  }
}`,["true","false"],"Use the modulo operator (%) to check divisibility. If n % 2 equals 0, the number is even.",[{id:"BLANK1",prompt:"Check divisibility by 2",choices:["n % 2 == 0","n % 2 == 1","n / 2 == 0","n % 3 == 0"],solution:"n % 2 == 0"}]);case 3:return le("First Element","Return the first element of an array.",`public class Main {
  public static int first(int[] arr) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    System.out.println(first(new int[]{1, 2, 3}));
    System.out.println(first(new int[]{9}));
  }
}`,["1","9"],"Arrays in Java are zero-indexed. Use arr[0] to access the first element.",[{id:"BLANK1",prompt:"Access first item",choices:["arr[0]","arr[1]","arr.first()","arr[-1]"],solution:"arr[0]"}]);case 4:return le("Array Length","Return the length of an array.",`public class Main {
  public static int count(int[] arr) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    System.out.println(count(new int[]{1, 2, 3}));
  }
}`,["3"],"In Java, arrays have a .length field (not a method) that gives the number of elements.",[{id:"BLANK1",prompt:"Get array length",choices:["arr.length","len(arr)","arr.size()","arr.length()"],solution:"arr.length"}]);case 5:return le("Greet","Return a greeting with a name.",`public class Main {
  public static String greet(String name) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    System.out.println(greet("Hero"));
  }
}`,["Hello Hero!"],'In Java, use string concatenation with + or String.format(). Concatenate "Hello " + name + "!".',[{id:"BLANK1",prompt:"String concatenation",choices:['"Hello " + name + "!"','"Hello {name}!"',"`Hello ${name}!`",'name + "Hello"'],solution:'"Hello " + name + "!"'}]);case 6:return le("Min of Two","Return the smaller of two integers.",`public class Main {
  public static int min(int a, int b) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    System.out.println(min(2, 5));
  }
}`,["2"],"Use a ternary operator: (a < b) ? a : b, or use Math.min(a, b).",[{id:"BLANK1",prompt:"Ternary or Math.min",choices:["(a < b) ? a : b","(a > b) ? a : b","Math.min(a, b)","a - b"],solution:"(a < b) ? a : b"}]);case 7:return le("Max in Array","Return the maximum integer in an array.",`public class Main {
  public static int maxIn(int[] arr) {
    int max = arr[0];
    for (int n : arr) if (n > max) max = n;
    return __BLANK1__;
  }
  public static void main(String[] args) {
    System.out.println(maxIn(new int[]{1, 5, 3}));
  }
}`,["5"],"After looping through the array to find the max, return the max variable.",[{id:"BLANK1",prompt:"Return max",choices:["max","arr[0]","n","arr.length"],solution:"max"}]);case 8:return le("Reverse String","Return a reversed string.",`public class Main {
  public static String rev(String s) {
    return __BLANK1__;
  }
  public static void main(String[] args) {
    System.out.println(rev("abc"));
  }
}`,["cba"],"Use StringBuilder with reverse() method: new StringBuilder(s).reverse().toString().",[{id:"BLANK1",prompt:"StringBuilder reverse",choices:["new StringBuilder(s).reverse().toString()","s.reverse()","reverse(s)",'s.split("").reverse()'],solution:"new StringBuilder(s).reverse().toString()"}]);case 9:return le("Count Vowels","Count vowels in a string.",`public class Main {
  public static int countV(String s) {
    int c = 0;
    for (char ch : s.toCharArray()) {
      if (__BLANK1__) c++;
    }
    return c;
  }
  public static void main(String[] args) {
    System.out.println(countV("hello"));
  }
}`,["2"],'Use "aeiouAEIOU".indexOf(ch) >= 0 to check if a character is a vowel.',[{id:"BLANK1",prompt:"Check if vowel",choices:['"aeiouAEIOU".indexOf(ch) >= 0',"ch.isVowel()","vowels.contains(ch)","ch in vowels"],solution:'"aeiouAEIOU".indexOf(ch) >= 0'}]);default:return le("Sum Array","Sum all integers in an array.",`public class Main {
  public static int sum(int[] arr) {
    int s = 0;
    for (int n : arr) s += __BLANK1__;
    return s;
  }
  public static void main(String[] args) {
    System.out.println(sum(new int[]{1, 2, 3}));
  }
}`,["6"],"In the enhanced for loop, add each element (n) to the sum variable.",[{id:"BLANK1",prompt:"Add current number",choices:["n","arr[i]","i","arr.length"],solution:"n"}])}return le("Placeholder","Not implemented yet.","// Coming soon",[""],"This puzzle is under construction.",[])},Oi=()=>{if(G&&Q){const ue=Wt(t,Q).puzzleMeta;if(!ue)return n;let we=ue.template;for(const Fe of ue.blanks){const xe=`__${Fe.id}__`,le=(o[Fe.id]??"").trim();we=we.replace(xe,le)}return we}return n},Vi=async()=>{p(!0),i("⏳ Running..."),z(ue=>ue+1),localStorage.setItem("arcane_attempts",String(D+1)),localStorage.setItem("arcane_lang",t);const se=R?(Date.now()-R)/1e3:0;localStorage.setItem("arcane_time",String(se));try{if(G&&Q){const We=Wt(t,Q),gn=We.expectedIncludes||[],Et=We.puzzleMeta;let Ne=!0;if(Et&&Et.blanks){for(const Se of Et.blanks)if(o[Se.id]!==Se.solution){Ne=!1;break}}if(Ne){const Se=gn.join(`
`);i(Se),localStorage.setItem("arcane_errors","0")}else{i("❌ Incorrect! Check your selections and try again."),p(!1),localStorage.setItem("arcane_errors","1");return}if(Ne){E(!0);const Se=Date.now();_(Se);const ct=R?(Se-R)/1e3:1/0;let Re=1;!A&&!rr&&(Re+=1),ct<=60&&(Re+=1),T(Re);const Mt=localStorage.getItem("userId")||"guest",qe=Mt==="guest"?`guest_${t}_puzzle_${Q}_stars`:`${Mt}_${t}_puzzle_${Q}_stars`,js=parseInt(localStorage.getItem(qe)||"0"),qt=Math.max(js,Re);if(localStorage.setItem(qe,String(qt)),T(qt),Mt!=="guest"&&Q&&kl(Mt,t,"puzzle",Q,qt),window.dispatchEvent(new Event("statsUpdate")),Mt==="guest"){const Ia=`guest_${t}_puzzle_completed`,Na=JSON.parse(localStorage.getItem(Ia)||"[]");Na.includes(Q)||localStorage.setItem(Ia,JSON.stringify([...Na,Q]))}const es={language:t,level:Q,attempts:D+1,timeTakenSeconds:(Se-(R||Date.now()))/1e3,usedHint:A||rr,hadErrors:!1,stars:qt};Ky(Mt,es)}p(!1);return}const xe=(await DA(n,{javascript:63,java:62,python:71}[t])).trim();i(xe);const le=xe.toLowerCase().includes("error")||xe.toLowerCase().includes("exception")||xe.toLowerCase().includes("syntaxerror")||xe.toLowerCase().includes("referenceerror")||xe.toLowerCase().includes("typeerror");if(localStorage.setItem("arcane_errors",le?"1":"0"),(()=>{if(le||!xe&&g>5)return!1;const We=xe.toLowerCase();return g<=10?We.includes("coderealm")||We.includes("hello")||We.includes("welcome")||xe.length>0:!le&&xe.length>0})()){E(!0);const We=Date.now();_(We);const gn=R?(We-R)/1e3:1/0;let Et=1;!A&&!rr&&(Et+=1),gn<=60&&(Et+=1),T(Et);const Ne=localStorage.getItem("userId")||"guest";if(G&&Q){const Se=Ne==="guest"?`guest_${t}_puzzle_${Q}_stars`:`${Ne}_${t}_puzzle_${Q}_stars`,ct=parseInt(localStorage.getItem(Se)||"0"),Re=Math.max(ct,Et);localStorage.setItem(Se,String(Re)),T(Re),Ne!=="guest"&&Q&&kl(Ne,t,"puzzle",Q,Re),window.dispatchEvent(new Event("statsUpdate"))}else{const Se=Ne==="guest"?`guest_${t}_level_${g}_stars`:`${Ne}_${t}_level_${g}_stars`,ct=parseInt(localStorage.getItem(Se)||"0"),Re=Math.max(ct,Et);localStorage.setItem(Se,String(Re)),T(Re),console.log(`⭐ CodeEditor Main Stars Saved: ${t} Level ${g} = ${Re} stars (${Ne})`),Ne!=="guest"&&kl(Ne,t,"main",g,Re),window.dispatchEvent(new Event("statsUpdate"))}if(Ne==="guest")if(G&&Q){const Se=`guest_${t}_puzzle_completed`,ct=JSON.parse(localStorage.getItem(Se)||"[]");ct.includes(Q)||localStorage.setItem(Se,JSON.stringify([...ct,Q]))}else{const Se=`guest_${t}_completedLevels`,ct=`guest_${t}_unlockedLevels`,Re=JSON.parse(localStorage.getItem(Se)||"[]");Re.includes(g)||localStorage.setItem(Se,JSON.stringify([...Re,g]));const Mt=JSON.parse(localStorage.getItem(ct)||"[1,2,3,4,5,6,7,8,9]"),qe={language:t,level:g,attempts:D+1,timeTakenSeconds:(We-(R||Date.now()))/1e3,usedHint:A||rr,hadErrors:xe.includes("error"),stars:S},js=Gy(Ne,t,g,qe),qt=[...new Set([...Mt,...js])];localStorage.setItem(ct,JSON.stringify(qt))}if(q!=="guest"){const Se=`${t}_completedLevels`,ct=`${t}_unlockedLevels`,Re={language:t,level:g,attempts:D+1,timeTakenSeconds:(We-(R||Date.now()))/1e3,usedHint:A||rr,hadErrors:xe.includes("error"),stars:S},Mt=Gy(q,t,g,Re);await wA(q,{currentLevel:g,selectedLanguage:t,code:n,[Se]:[g],[ct]:Mt})}const Zr={language:t,level:g,attempts:D+1,timeTakenSeconds:(We-(R||Date.now()))/1e3,usedHint:A||rr,hadErrors:xe.includes("error"),stars:S};Ky(q,Zr)}}catch(ue){i(`❌ Error: ${ue.message||ue}`),E(!1),localStorage.setItem("arcane_errors","1")}p(!1)},iu=()=>{r(rn.starterCode),i(""),E(!1)},Ui=()=>{if(!G||!Q)return null;const ue=Wt(t,Q).puzzleMeta;return ue?l.jsxs("div",{className:"space-y-4",children:[ue.blanks.map(we=>l.jsxs("div",{className:"bg-slate-900/60 border border-purple-500/30 rounded-xl p-4",children:[l.jsx("div",{className:"flex items-center justify-between mb-3",children:l.jsx("label",{className:"text-sm font-semibold text-cyan-300",children:we.prompt})}),we.choices?l.jsx("div",{className:"flex flex-wrap gap-2",children:we.choices.map(Fe=>l.jsx("button",{onClick:()=>c(xe=>({...xe,[we.id]:Fe})),className:`px-3 py-1 rounded border text-sm ${(o[we.id]??"")===Fe?"bg-cyan-500/20 border-cyan-400 text-cyan-300":"bg-slate-800/60 border-slate-600 text-gray-300 hover:bg-slate-800"}`,children:Fe},Fe))}):l.jsx("input",{value:o[we.id]??"",onChange:Fe=>c(xe=>({...xe,[we.id]:Fe.target.value})),placeholder:we.placeholder||"Type your answer",className:"w-full bg-slate-800/60 border border-slate-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40"})]},we.id)),l.jsxs("div",{className:"bg-slate-900/60 border border-purple-500/30 rounded-xl",children:[l.jsx("div",{className:"p-3 border-b border-purple-500/20 text-xs text-gray-400",children:"Preview (generated from your pieces)"}),l.jsx("pre",{className:"p-4 text-sm text-gray-200 whitespace-pre-wrap",children:Oi()})]})]}):null},zi=se=>{r(se.target.value)},Ta=se=>{if(se.key==="Tab"){se.preventDefault();const ue=se.currentTarget.selectionStart,we=se.currentTarget.selectionEnd,Fe=n.substring(0,ue)+"  "+n.substring(we);r(Fe),setTimeout(()=>{ve.current&&(ve.current.selectionStart=ve.current.selectionEnd=ue+2)},0)}},nt=()=>{j(!A),localStorage.setItem("arcane_used_hint",A?"0":"1")},lt=()=>{switch(t){case"javascript":return"from-yellow-400 to-orange-500";case"java":return"from-red-500 to-orange-600";case"python":return"from-blue-400 to-green-500"}},Rs=()=>{switch(t){case"javascript":return"🧙‍♂️";case"java":return"⚔️";case"python":return"🐍"}},ou=se=>{const ue=Math.ceil(se/3),we=(se-1)%3+1;return{lesson:ue,stage:we}},sr={javascript:{title:"JavaScript Wizard Tutorial 🧙‍♂️",steps:[{title:"Welcome to JavaScript Realm!",content:"JavaScript is the language of the web! It's beginner-friendly and powerful. You'll learn to create interactive applications and master modern programming concepts.",tips:["Start with simple console.log() statements","JavaScript uses const and let for variables","Functions are your best friends!"]},{title:"Using the Code Editor",content:"The left side shows your quest story and objectives. The right side is your coding workspace where you write and test your code.",tips:["Press Tab to indent your code",'Click "Run Code" to execute','Use "Reset" to start fresh',"The output appears below the editor"]},{title:"Getting Hints & Help",content:'Stuck? No problem! Click "Show Hint" to get step-by-step guidance. The Arcane Mentor (floating button) watches your progress and offers smart tips.',tips:['Hints explain the "why" not just the "what"',"Using hints is learning, not cheating!","Arcane tracks your attempts and time"]},{title:"JavaScript Syntax Basics",content:"Key syntax you'll use: console.log() for output, const/let for variables, function for reusable code, and if/else for decisions.",tips:["End statements with semicolons ;",'Use quotes for text: "hello"',"Brackets {} group code together","Comments start with //"]},{title:"Earning Stars & EXP",content:"Each game mode has different star criteria and EXP rewards! Main levels focus on code completion, puzzles test problem-solving, and drag-drop challenges test speed and accuracy.",tips:["📖 Main Levels: 1★ Complete | 2★ No errors | 3★ Fast + Perfect","🧩 Puzzles: 1★ Solve | 2★ Quick solve | 3★ Perfect + Fast","🎯 Drag-Drop: 1★ Complete | 2★ First try | 3★ Under 60s","⭐ Different EXP per mode: Main (15★) > Puzzles (10★) > Drag-Drop (8★)"]}]},java:{title:"Java Knight Tutorial ⚔️",steps:[{title:"Welcome to Java Kingdom!",content:"Java is powerful and structured! It's used for enterprise applications, Android apps, and large systems. You'll learn object-oriented programming and strong typing.",tips:["Java is verbose but clear","Everything is inside a class","Strong typing prevents many errors"]},{title:"Java Program Structure",content:"Every Java program needs a class and a main method. The basic structure is: public class ClassName { public static void main(String[] args) { /* code here */ } }",tips:["Class names start with capital letters","main() is where execution begins","Use System.out.println() for output","Semicolons end each statement"]},{title:"Using the Code Editor",content:"Write your Java code in the editor. The compiler checks your syntax before running. Errors will show in the output console with helpful messages.",tips:["Java is case-sensitive!","Match your brackets carefully","Read error messages - they help!","Use Tab for proper indentation"]},{title:"Object-Oriented Concepts",content:"Java is all about objects and classes. You'll create classes, objects, methods, and learn inheritance as you progress through levels.",tips:["Classes are blueprints","Objects are instances of classes","Methods are functions inside classes","Constructors initialize objects"]},{title:"Stars & EXP System",content:"Each game mode has different star criteria and EXP rewards! Main levels focus on code completion, puzzles test problem-solving, and drag-drop challenges test speed and accuracy.",tips:["📖 Main Levels: 1★ Complete | 2★ No errors | 3★ Fast + Perfect","🧩 Puzzles: 1★ Solve | 2★ Quick solve | 3★ Perfect + Fast","🎯 Drag-Drop: 1★ Complete | 2★ First try | 3★ Under 60s","⭐ Different EXP per mode: Main (15★) > Puzzles (10★) > Drag-Drop (8★)"]}]},python:{title:"Python Sage Tutorial 🐍",steps:[{title:"Welcome to Python Sanctum!",content:"Python is elegant and powerful! It's perfect for beginners and used in data science, web development, AI, and automation. You'll love its clean syntax.",tips:["Python is beginner-friendly","Indentation matters!","No semicolons needed","Very readable code"]},{title:"Python Syntax Basics",content:"Python uses indentation (spaces) instead of brackets. Use print() for output, variables need no type declaration, and # for comments.",tips:["Indent with 2 or 4 spaces consistently","No curly braces needed","Colons : start code blocks","print() shows output"]},{title:"Using the Code Editor",content:"Write clean Python code with proper indentation. The editor helps you, but Python is strict about spacing!",tips:["Press Tab for indentation","Keep indentation consistent","Run code to see output","Errors explain what went wrong"]},{title:"Python Features",content:"You'll learn variables, functions, lists, dictionaries, loops, and more. Python makes complex tasks simple with its extensive libraries.",tips:["Lists use square brackets []","Dictionaries use curly braces {}","Functions defined with def","f-strings make formatting easy"]},{title:"EXP & Level System",content:"Each game mode has different star criteria and EXP rewards! Main levels focus on code completion, puzzles test problem-solving, and drag-drop challenges test speed and accuracy.",tips:["📖 Main Levels: 1★ Complete | 2★ No errors | 3★ Fast + Perfect","🧩 Puzzles: 1★ Solve | 2★ Quick solve | 3★ Perfect + Fast","🎯 Drag-Drop: 1★ Complete | 2★ First try | 3★ Under 60s","⭐ Different EXP per mode: Main (15★) > Puzzles (10★) > Drag-Drop (8★)"]}]}}[t],jn=sr.steps[V];return l.jsxs("div",{className:"pt-16 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:[Z&&l.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/50 rounded-2xl p-8 max-w-2xl shadow-2xl",children:[l.jsx("h2",{className:"text-3xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"🎮 Welcome to CodeRealm!"}),l.jsx("p",{className:"text-gray-300 text-center mb-6",children:"You're about to begin your coding adventure. Write code, solve challenges, and level up!"}),l.jsx("div",{className:"mb-6 flex items-center justify-center",children:l.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[l.jsx("input",{type:"checkbox",checked:O,onChange:se=>F(se.target.checked),className:"w-4 h-4 rounded border-gray-600 bg-gray-800 text-cyan-500 focus:ring-2 focus:ring-cyan-500"}),l.jsx("span",{className:"text-sm text-gray-400",children:"Don't show this again"})]})}),l.jsxs("div",{className:"flex space-x-4",children:[l.jsx("button",{onClick:()=>{O&&localStorage.setItem("tutorialDismissed","true"),k(!1),b(!0),$(0)},className:"flex-1 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-cyan-300",children:"Show Tutorial 📚"}),l.jsx("button",{onClick:()=>{O&&localStorage.setItem("tutorialDismissed","true"),k(!1),b(!1)},className:"flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105",children:"Start Coding 🚀"})]})]})}),C&&!Z&&l.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-purple-500/50 rounded-2xl p-8 max-w-3xl w-full shadow-2xl max-h-[90vh] overflow-y-auto",children:[l.jsxs("div",{className:"text-center mb-6",children:[l.jsx("h2",{className:"text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:sr.title}),l.jsxs("p",{className:"text-gray-400 text-sm",children:["Step ",V+1," of ",sr.steps.length]})]}),l.jsx("div",{className:"mb-6",children:l.jsx("div",{className:"w-full bg-slate-700 rounded-full h-2",children:l.jsx("div",{className:"bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300",style:{width:`${(V+1)/sr.steps.length*100}%`}})})}),l.jsxs("div",{className:"bg-slate-900/50 rounded-xl p-6 mb-6 border border-purple-500/30",children:[l.jsx("h3",{className:"text-2xl font-bold text-cyan-400 mb-4",children:jn.title}),l.jsx("p",{className:"text-gray-300 text-lg leading-relaxed mb-6",children:jn.content}),l.jsxs("div",{className:"bg-purple-900/30 rounded-lg p-4 border border-purple-500/30",children:[l.jsxs("h4",{className:"text-purple-300 font-semibold mb-3 flex items-center space-x-2",children:[l.jsx("span",{children:"💡"}),l.jsx("span",{children:"Pro Tips:"})]}),l.jsx("ul",{className:"space-y-2",children:jn.tips.map((se,ue)=>l.jsxs("li",{className:"text-gray-300 flex items-start space-x-2",children:[l.jsx("span",{className:"text-cyan-400 mt-1",children:"•"}),l.jsx("span",{children:se})]},ue))})]})]}),l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("button",{onClick:()=>{V>0&&$(V-1)},disabled:V===0,className:`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${V===0?"bg-slate-700 text-gray-500 cursor-not-allowed":"bg-purple-500 hover:bg-purple-600 text-white"}`,children:"← Previous"}),l.jsx("div",{className:"flex space-x-2",children:sr.steps.map((se,ue)=>l.jsx("div",{className:`w-2 h-2 rounded-full transition-all duration-300 ${ue===V?"bg-cyan-400 w-6":"bg-slate-600"}`},ue))}),V<sr.steps.length-1?l.jsx("button",{onClick:()=>$(V+1),className:"px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105",children:"Next →"}):l.jsx("button",{onClick:()=>{b(!1),$(0)},className:"px-6 py-3 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105",children:"Start Coding! 🚀"})]}),l.jsx("button",{onClick:()=>{b(!1),$(0)},className:"w-full mt-4 text-gray-400 hover:text-gray-300 text-sm transition-colors",children:"Skip Tutorial"})]})}),l.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-8 relative z-10",children:[l.jsxs("div",{className:"flex items-center justify-between mb-8",children:[l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsxs("button",{onClick:()=>e("game-overview"),className:"text-cyan-400 hover:text-cyan-300 flex items-center space-x-2 bg-cyan-400/10 px-4 py-2 rounded-lg border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300",children:[l.jsx(Vc,{className:"h-5 w-5"}),l.jsx("span",{children:"Back to Overview"})]}),l.jsxs("button",{onClick:()=>{b(!0),$(0)},className:"text-purple-400 hover:text-purple-300 flex items-center space-x-2 bg-purple-400/10 px-4 py-2 rounded-lg border border-purple-400/20 hover:bg-purple-400/20 transition-all duration-300",title:"Show Tutorial",children:[l.jsx(fx,{className:"h-5 w-5"}),l.jsx("span",{children:"Tutorial"})]}),l.jsx("div",{className:"w-px h-8 bg-purple-500/30"}),l.jsxs("div",{className:"flex items-center space-x-3 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-purple-500/30 rounded-xl p-3",children:[l.jsx("div",{className:`w-10 h-10 bg-gradient-to-br ${lt()} rounded-lg flex items-center justify-center text-2xl shadow-lg`,children:Rs()}),l.jsxs("div",{children:[l.jsx("h1",{className:"text-xl font-bold text-white capitalize",children:t}),l.jsx("p",{className:"text-sm text-cyan-400",children:G?`Puzzle ${Q} of 30`:(()=>{const se=ou(g);return`Lesson ${se.lesson} • Level ${se.stage}/3 (of 150)`})()})]})]})]}),l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"flex space-x-1",children:[1,2,3].map(se=>l.jsx(fn,{className:`h-5 w-5 ${se<=S?"text-yellow-400 fill-current":"text-gray-600"}`},se))}),L&&l.jsxs("div",{className:"flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2",children:[l.jsx(ai,{className:"h-5 w-5 text-green-400"}),l.jsx("span",{className:"text-green-400 font-semibold",children:"Completed!"})]})]})]}),l.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"bg-gradient-to-br from-purple-900/40 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm",children:[l.jsxs("h2",{className:"text-xl font-bold text-cyan-400 mb-4 flex items-center space-x-2",children:[l.jsx("span",{children:"📖"}),l.jsx("span",{children:"Story"})]}),l.jsx("p",{className:"text-gray-300 italic leading-relaxed",children:G&&Q?Wt(t,Q).story:rn.story})]}),l.jsxs("div",{className:"bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm",children:[l.jsxs("h2",{className:"text-xl font-bold text-white mb-4 flex items-center space-x-2",children:[l.jsx("span",{children:"🎯"}),l.jsx("span",{children:G&&Q?Wt(t,Q).title:rn.title})]}),l.jsx("p",{className:"text-gray-300 leading-relaxed",children:G&&Q?Wt(t,Q).description:rn.description})]}),l.jsxs("div",{className:"bg-gradient-to-br from-yellow-900/30 to-orange-900/30 p-6 rounded-2xl border border-yellow-500/30 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex justify-between items-center mb-4",children:[l.jsxs("h3",{className:"text-lg font-bold text-yellow-400 flex items-center space-x-2",children:[l.jsx("span",{children:"💡"}),l.jsx("span",{children:"Need a Hint?"})]}),l.jsxs("button",{onClick:nt,className:"bg-yellow-500/20 hover:bg-yellow-500/30 px-3 py-1 rounded-lg text-yellow-300 transition-colors",children:[A?"Hide":"Show"," Hint"]})]}),A&&l.jsx("p",{className:"text-yellow-200 leading-relaxed",children:G&&Q?Wt(t,Q).hint:rn.hint})]})]}),l.jsxs("div",{className:"space-y-4",children:[su?l.jsxs("div",{className:"bg-slate-900/80 rounded-2xl border border-green-500/30 backdrop-blur-sm shadow-2xl p-4",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-green-500/20 mb-4",children:[l.jsx("div",{className:"text-green-300 font-semibold",children:"Fill in the missing pieces"}),l.jsxs("button",{onClick:()=>{c({}),h({})},className:"text-gray-400 hover:text-white flex items-center space-x-1 transition-colors",children:[l.jsx(nh,{className:"h-4 w-4"}),l.jsx("span",{className:"text-sm",children:"Reset Pieces"})]})]}),Ui(),l.jsx("div",{className:"flex justify-end pt-3 border-t border-green-500/20 mt-4",children:l.jsxs("button",{onClick:Vi,disabled:m,className:"bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 disabled:opacity-50 px-6 py-2 rounded-lg font-semibold text-white flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg",children:[l.jsx(Un,{className:"h-4 w-4"}),l.jsx("span",{children:m?"Running...":"Run Puzzle"})]})})]}):l.jsxs("div",{className:"bg-slate-900/80 rounded-2xl border border-purple-500/30 backdrop-blur-sm shadow-2xl",children:[l.jsxs("div",{className:"flex justify-between items-center p-4 border-b border-purple-500/30",children:[l.jsxs("span",{className:"text-cyan-400 text-sm font-mono",children:["main.",t==="java"?"java":t==="python"?"py":"js"]}),l.jsxs("button",{onClick:iu,className:"text-gray-400 hover:text-white flex items-center space-x-1 transition-colors",children:[l.jsx(nh,{className:"h-4 w-4"}),l.jsx("span",{className:"text-sm",children:"Reset"})]})]}),l.jsx("textarea",{ref:ve,value:n,onChange:zi,onKeyDown:Ta,className:"w-full h-80 bg-slate-800/50 text-white font-mono text-sm p-4 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400/50 rounded-b-2xl",placeholder:"Write your code here...",spellCheck:!1}),l.jsxs("div",{className:"flex justify-between items-center p-4 border-t border-purple-500/30 bg-slate-900/50",children:[l.jsx("span",{className:"text-sm text-gray-400",children:"Press Tab to indent"}),l.jsxs("button",{onClick:Vi,disabled:m,className:"bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 disabled:opacity-50 px-6 py-2 rounded-lg font-semibold text-white flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg",children:[l.jsx(Un,{className:"h-4 w-4"}),l.jsx("span",{children:m?"Running...":"Run Code"})]})]})]}),l.jsxs("div",{className:"bg-slate-900/80 rounded-2xl border border-purple-500/30 backdrop-blur-sm shadow-2xl",children:[l.jsx("div",{className:"flex justify-between items-center p-4 border-b border-purple-500/30",children:l.jsxs("h3",{className:"text-lg font-semibold text-white flex items-center space-x-2",children:[l.jsx("span",{children:"📊"}),l.jsx("span",{children:"Output"})]})}),l.jsx("div",{className:"p-4 bg-slate-800/50 min-h-32",children:l.jsx("pre",{className:`font-mono text-sm whitespace-pre-wrap ${s.includes("Error")||s.includes("❌")?"text-red-400":"text-green-400"}`,children:s||'🚀 Click "Run Code" to see the output...'})})]})]})]}),L&&l.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:l.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/50 p-8 rounded-2xl max-w-md text-center shadow-2xl",children:[l.jsx(ai,{className:"h-16 w-16 text-cyan-400 mx-auto mb-4 animate-bounce"}),l.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:G?"🧩 Puzzle Complete!":"🎉 Level Complete!"}),l.jsxs("p",{className:"text-gray-300 mb-2",children:["You've mastered ",l.jsx("span",{className:"text-cyan-400 font-semibold",children:G&&Q?Wt(t,Q).title:rn.title}),"!"]}),l.jsx("div",{className:"flex justify-center space-x-1 mb-6",children:[1,2,3].map(se=>l.jsx(fn,{className:`h-6 w-6 ${se<=S?"text-yellow-400 fill-current animate-pulse":"text-gray-600"}`},se))}),l.jsxs("div",{className:"flex space-x-4",children:[l.jsx("button",{onClick:()=>E(!1),className:"flex-1 bg-purple-500 hover:bg-purple-600 px-4 py-3 rounded-lg font-semibold transition-all duration-300",children:"Review Code"}),l.jsx("button",{onClick:()=>{G&&Q?Q<30&&Ht(Q+1):g<150&&N(se=>se+1),E(!1)},className:"flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 px-4 py-3 rounded-lg font-semibold transition-all duration-300",children:G?Q&&Q<30?"Next Puzzle →":"Complete!":g<150?"Next Level →":"Complete!"})]})]})})]}),l.jsx(MA,{selectedLanguage:t,currentLevel:g,onNavigate:e})]})},zA=({onNavigate:t})=>l.jsx("div",{className:"pt-16",children:l.jsx("section",{className:"py-16 px-4",children:l.jsxs("div",{className:"max-w-4xl mx-auto",children:[l.jsxs("button",{onClick:()=>t("game-overview"),className:"inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-6",children:[l.jsx(Vc,{className:"h-5 w-5"}),l.jsx("span",{children:"Back to Overview"})]}),l.jsxs("div",{className:"bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-8",children:[l.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[l.jsx(dx,{className:"h-7 w-7 text-cyan-400"}),l.jsx("h1",{className:"text-3xl font-bold text-white",children:"Your AI Mentor"})]}),l.jsx("p",{className:"text-gray-300 mb-4",children:"CodeRealm’s mentor is built for beginners. It watches for signs you might be stuck — like many attempts, long run times, or frequent errors — and gently offers hints you can toggle. When you’re cruising with 3★ victories, it may suggest skipping up to 3 levels to keep you challenged without getting bored."}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"bg-black/20 rounded-xl border border-purple-500/30 p-5",children:[l.jsx("h2",{className:"text-xl font-semibold text-white mb-2",children:"What the AI Tracks"}),l.jsxs("ul",{className:"text-gray-300 list-disc list-inside space-y-1",children:[l.jsx("li",{children:"Attempts per level (are you repeating a lot?)"}),l.jsx("li",{children:"Time to complete (is it taking too long?)"}),l.jsx("li",{children:"Hint usage (do you toggle hints often?)"}),l.jsx("li",{children:"Errors and output clues (what is the console saying?)"}),l.jsx("li",{children:"Stars earned (0–3)"})]})]}),l.jsxs("div",{className:"bg-black/20 rounded-xl border border-purple-500/30 p-5",children:[l.jsx("h2",{className:"text-xl font-semibold text-white mb-2",children:"How AI Decides"}),l.jsxs("ul",{className:"text-gray-300 list-disc list-inside space-y-1",children:[l.jsx("li",{children:"Show friendly hints if you seem stuck"}),l.jsx("li",{children:"Advance normally if progress is steady"}),l.jsx("li",{children:"Offer up to +3 level skip when you consistently get 3★"}),l.jsx("li",{children:"Use fun prompts to cheer you on and keep motivation high"})]})]})]}),l.jsxs("div",{className:"mt-6 grid md:grid-cols-3 gap-6",children:[l.jsxs("div",{className:"bg-slate-800/50 rounded-xl border border-purple-500/30 p-5",children:[l.jsx("h3",{className:"text-white font-semibold mb-2",children:"Strengths"}),l.jsxs("ul",{className:"text-gray-300 list-disc list-inside space-y-1 text-sm",children:[l.jsx("li",{children:"Beginner-first hints that explain the why"}),l.jsx("li",{children:"Detects struggle early and offers help"}),l.jsx("li",{children:"Motivating prompts to keep momentum"})]})]}),l.jsxs("div",{className:"bg-slate-800/50 rounded-xl border border-purple-500/30 p-5",children:[l.jsx("h3",{className:"text-white font-semibold mb-2",children:"Weaknesses"}),l.jsxs("ul",{className:"text-gray-300 list-disc list-inside space-y-1 text-sm",children:[l.jsx("li",{children:"Does not execute your code (Judge0 does)"}),l.jsx("li",{children:"Relies on your output and behavior patterns"}),l.jsx("li",{children:"Might suggest repeats when you prefer exploration"})]})]}),l.jsxs("div",{className:"bg-slate-800/50 rounded-xl border border-purple-500/30 p-5",children:[l.jsx("h3",{className:"text-white font-semibold mb-2",children:"Best For"}),l.jsxs("ul",{className:"text-gray-300 list-disc list-inside space-y-1 text-sm",children:[l.jsx("li",{children:"Absolute beginners needing scaffolding"}),l.jsx("li",{children:"Learners who benefit from small steps"}),l.jsx("li",{children:"Anyone who enjoys gamified coaching"})]})]})]}),l.jsxs("div",{className:"mt-6 bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-5",children:[l.jsxs("div",{className:"flex items-center space-x-2 text-cyan-300 mb-1",children:[l.jsx(Kt,{className:"h-5 w-5"}),l.jsx("span",{className:"font-semibold",children:"Tip"})]}),l.jsx("p",{className:"text-gray-300",children:"As your consistency improves, the AI may offer to jump two levels. You can always ignore the suggestion and proceed one level at a time."})]})]})]})})}),FA=({onNavigate:t})=>l.jsx("div",{className:"pt-16",children:l.jsx("section",{className:"py-12 px-4",children:l.jsxs("div",{className:"max-w-6xl mx-auto",children:[l.jsxs("button",{onClick:()=>t("home"),className:"inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-6",children:[l.jsx(Vc,{className:"h-5 w-5"}),l.jsx("span",{children:"Back to Home"})]}),l.jsxs("div",{className:"text-center mb-12",children:[l.jsxs("div",{className:"flex items-center justify-center space-x-3 mb-4",children:[l.jsx(Kt,{className:"h-12 w-12 text-cyan-400"}),l.jsx("h1",{className:"text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent",children:"Arcane AI Mentor"})]}),l.jsx("p",{className:"text-xl text-gray-300 max-w-3xl mx-auto",children:"Your personalized AI coding companion. Here's what I know about your journey so far:"})]}),l.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12",children:[l.jsx("div",{className:"bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4",children:l.jsx(ux,{className:"h-8 w-8 text-white"})}),l.jsx("h3",{className:"text-xl font-semibold mb-3 text-cyan-400",children:"Smart Analysis"}),l.jsx("p",{className:"text-gray-300 text-sm",children:"Watches your coding patterns, attempts, and time to understand your learning style and struggles."})]})}),l.jsx("div",{className:"bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4",children:l.jsx(hx,{className:"h-8 w-8 text-white"})}),l.jsx("h3",{className:"text-xl font-semibold mb-3 text-cyan-400",children:"Real-time Guidance"}),l.jsx("p",{className:"text-gray-300 text-sm",children:"Provides instant, beginner-friendly hints without interfering with your code execution."})]})}),l.jsx("div",{className:"bg-gradient-to-br from-purple-900/30 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4",children:l.jsx(Jo,{className:"h-8 w-8 text-white"})}),l.jsx("h3",{className:"text-xl font-semibold mb-3 text-cyan-400",children:"Adaptive Progression"}),l.jsx("p",{className:"text-gray-300 text-sm",children:"Unlocks up to 3 levels ahead when you consistently perform well, keeping you challenged."})]})})]}),l.jsxs("div",{className:"bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-8 mb-8",children:[l.jsx("h2",{className:"text-2xl font-bold text-center mb-6 text-cyan-400",children:"How I Guide Your Journey"}),l.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold text-white mb-3",children:"What I Track"}),l.jsxs("ul",{className:"text-gray-300 space-y-2",children:[l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(On,{className:"h-4 w-4 text-cyan-400"}),l.jsx("span",{children:"Your attempts per level (per language)"})]}),l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(On,{className:"h-4 w-4 text-cyan-400"}),l.jsx("span",{children:"Time spent on each challenge"})]}),l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(On,{className:"h-4 w-4 text-cyan-400"}),l.jsx("span",{children:"Hint usage patterns"})]}),l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(On,{className:"h-4 w-4 text-cyan-400"}),l.jsx("span",{children:"Error types and console output"})]}),l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(On,{className:"h-4 w-4 text-cyan-400"}),l.jsx("span",{children:"Stars earned across all game modes"})]}),l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(On,{className:"h-4 w-4 text-cyan-400"}),l.jsx("span",{children:"Progress in Story, Puzzle, and Drag & Drop"})]})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold text-white mb-3",children:"How I Adapt to You"}),l.jsxs("ul",{className:"text-gray-300 space-y-2",children:[l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(Kt,{className:"h-4 w-4 text-purple-400"}),l.jsx("span",{children:"Offers beginner-friendly hints when stuck"})]}),l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(Kt,{className:"h-4 w-4 text-purple-400"}),l.jsx("span",{children:"Explains errors in simple, clear terms"})]}),l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(Kt,{className:"h-4 w-4 text-purple-400"}),l.jsx("span",{children:"Unlocks up to 3 lessons ahead for top performers"})]}),l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(Kt,{className:"h-4 w-4 text-purple-400"}),l.jsx("span",{children:"Gives motivating feedback based on your progress"})]}),l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(Kt,{className:"h-4 w-4 text-purple-400"}),l.jsx("span",{children:"Syncs your progress across all devices"})]}),l.jsxs("li",{className:"flex items-center space-x-2",children:[l.jsx(Kt,{className:"h-4 w-4 text-purple-400"}),l.jsx("span",{children:"Tracks separate progress for each language"})]})]})]})]})]}),l.jsx("div",{className:"text-center",children:l.jsxs("button",{onClick:()=>t("game-overview"),className:"inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25",children:[l.jsx(Kt,{className:"h-6 w-6"}),l.jsx("span",{children:"Start Your Journey with Arcane"})]})})]})})}),BA=({selectedLanguage:t,onNavigate:e})=>{const[n,r]=H.useState(1),[s,i]=H.useState(null),[o,c]=H.useState([]),[u,h]=H.useState([]),[m,p]=H.useState(!1),[g,N]=H.useState(0),[A,j]=H.useState(0),[L,E]=H.useState(Date.now()),[w,I]=H.useState("guest");H.useEffect(()=>{I(localStorage.getItem("userId")||"guest")},[]);const z=(C=>{const b=[];for(let Z=1;Z<=30;Z++){const k=Z<=10?"beginner":Z<=20?"intermediate":"advanced",V=(Z-1)%10+1;if(C==="javascript")switch(V){case 1:b.push({id:Z,title:k==="beginner"?"Console Log":k==="intermediate"?"Function Declaration":"Array Map",description:`Arrange code to ${k==="beginner"?"print to console":k==="intermediate"?"create a function":"map over an array"}.`,difficulty:k,blocks:[{id:"a",content:k==="beginner"?"console.log(":k==="intermediate"?"function greet() {":"const nums = [1,2,3];"},{id:"b",content:k==="beginner"?'"Hello"':k==="intermediate"?'return "Hi";':"nums.map(n =>"},{id:"c",content:k==="beginner"?");":k==="intermediate"?"}":"n * 2);"}],correctOrder:["a","b","c"],explanation:k==="beginner"?"Prints a message.":k==="intermediate"?"Returns a string.":"Doubles each number."});break;case 2:b.push({id:Z,title:k==="beginner"?"Variable":k==="intermediate"?"If Statement":"Arrow Function",description:`Build ${k==="beginner"?"a variable":k==="intermediate"?"a condition":"a compact function"}.`,difficulty:k,blocks:[{id:"a",content:k==="beginner"?"const x = ":k==="intermediate"?"if (x > 0) {":"const double = "},{id:"b",content:k==="beginner"?"10":k==="intermediate"?"return true;":"n => "},{id:"c",content:k==="beginner"?";":k==="intermediate"?"}":"n * 2;"}],correctOrder:["a","b","c"],explanation:k==="beginner"?"Stores a value.":k==="intermediate"?"Checks a condition.":"Multiplies by 2."});break;case 3:b.push({id:Z,title:k==="beginner"?"String":k==="intermediate"?"For Loop":"Destructuring",description:`Arrange ${k==="beginner"?"a text string":k==="intermediate"?"a loop":"object destructuring"}.`,difficulty:k,blocks:[{id:"a",content:k==="beginner"?"const name = ":k==="intermediate"?"for (let i = 0;":"const {name,"},{id:"b",content:k==="beginner"?'"Hero"':k==="intermediate"?"i < 5;":"age} = "},{id:"c",content:k==="beginner"?";":k==="intermediate"?"i++) {}":"user;"}],correctOrder:["a","b","c"],explanation:k==="beginner"?"Defines a string.":k==="intermediate"?"Repeats code.":"Extracts properties."});break;default:b.push({id:Z,title:"Array",description:"Create an array of numbers.",difficulty:k,blocks:[{id:"a",content:"const arr = ["},{id:"b",content:"1, 2, 3"},{id:"c",content:"];"}],correctOrder:["a","b","c"],explanation:"Stores multiple values."})}else if(C==="python")switch(V){case 1:b.push({id:Z,title:k==="beginner"?"Print Statement":k==="intermediate"?"Function Definition":"List Comprehension",description:`Arrange code to ${k==="beginner"?"print text":k==="intermediate"?"define a function":"create a new list"}.`,difficulty:k,blocks:[{id:"a",content:k==="beginner"?"print(":k==="intermediate"?"def greet():":"nums = [1,2,3]"},{id:"b",content:k==="beginner"?'"Hello"':k==="intermediate"?'    return "Hi"':"doubled = [n*2"},{id:"c",content:k==="beginner"?")":k==="intermediate"?"":"for n in nums]"}],correctOrder:k==="intermediate"?["a","b"]:["a","b","c"],explanation:k==="beginner"?"Outputs text.":k==="intermediate"?"Defines a reusable function.":"Creates doubled list."});break;case 2:b.push({id:Z,title:k==="beginner"?"Variable":k==="intermediate"?"If Statement":"Lambda Function",description:`Build ${k==="beginner"?"a variable":k==="intermediate"?"a condition":"an anonymous function"}.`,difficulty:k,blocks:[{id:"a",content:k==="beginner"?"x = ":k==="intermediate"?"if x > 0:":"double = "},{id:"b",content:k==="beginner"?"10":k==="intermediate"?"    return True":"lambda n: "},{id:"c",content:k==="beginner"||k==="intermediate"?"":"n * 2"}],correctOrder:k==="beginner"?["a","b"]:k==="intermediate"?["a","b"]:["a","b","c"],explanation:k==="beginner"?"Stores a number.":k==="intermediate"?"Checks positivity.":"Inline function."});break;case 3:b.push({id:Z,title:k==="beginner"?"String":k==="intermediate"?"For Loop":"Dictionary",description:`Arrange ${k==="beginner"?"a text string":k==="intermediate"?"a loop":"key-value pairs"}.`,difficulty:k,blocks:[{id:"a",content:k==="beginner"?"name = ":k==="intermediate"?"for i in range(5):":"user = {"},{id:"b",content:k==="beginner"?'"Hero"':k==="intermediate"?"    print(i)":'"name": "Hero"'},{id:"c",content:k==="beginner"||k==="intermediate"?"":"}"}],correctOrder:k==="beginner"?["a","b"]:k==="intermediate"?["a","b"]:["a","b","c"],explanation:k==="beginner"?"Assigns text.":k==="intermediate"?"Prints 0 to 4.":"Creates a dict."});break;default:b.push({id:Z,title:"List",description:"Create a list of numbers.",difficulty:k,blocks:[{id:"a",content:"arr = ["},{id:"b",content:"1, 2, 3"},{id:"c",content:"]"}],correctOrder:["a","b","c"],explanation:"Stores multiple values."})}else if(C==="java")switch(V){case 1:b.push({id:Z,title:k==="beginner"?"Print Statement":k==="intermediate"?"Method Definition":"Stream Map",description:`Arrange code to ${k==="beginner"?"print text":k==="intermediate"?"create a method":"use streams"}.`,difficulty:k,blocks:[{id:"a",content:k==="beginner"?"System.out.println(":k==="intermediate"?"public static String greet() {":"int[] nums = {1,2,3};"},{id:"b",content:k==="beginner"?'"Hello"':k==="intermediate"?'return "Hi";':"Arrays.stream(nums).map("},{id:"c",content:k==="beginner"?");":k==="intermediate"?"}":"n -> n * 2);"}],correctOrder:["a","b","c"],explanation:k==="beginner"?"Outputs text.":k==="intermediate"?"Returns a greeting.":"Doubles each number."});break;case 2:b.push({id:Z,title:k==="beginner"?"Variable":k==="intermediate"?"If Statement":"Lambda Expression",description:`Build ${k==="beginner"?"a variable":k==="intermediate"?"a condition":"a lambda"}.`,difficulty:k,blocks:[{id:"a",content:k==="beginner"?"int x = ":k==="intermediate"?"if (x > 0) {":"Function<Integer,Integer> double = "},{id:"b",content:k==="beginner"?"10":k==="intermediate"?"return true;":"n -> "},{id:"c",content:k==="beginner"?";":k==="intermediate"?"}":"n * 2;"}],correctOrder:["a","b","c"],explanation:k==="beginner"?"Stores an integer.":k==="intermediate"?"Checks condition.":"Anonymous function."});break;case 3:b.push({id:Z,title:k==="beginner"?"String":k==="intermediate"?"For Loop":"HashMap",description:`Arrange ${k==="beginner"?"a text string":k==="intermediate"?"a loop":"a map structure"}.`,difficulty:k,blocks:[{id:"a",content:k==="beginner"?"String name = ":k==="intermediate"?"for (int i = 0;":"HashMap<String,String> user = "},{id:"b",content:k==="beginner"?'"Hero"':k==="intermediate"?"i < 5;":"new HashMap<>();"},{id:"c",content:k==="beginner"?";":k==="intermediate"?"i++) {}":'user.put("name","Hero");'}],correctOrder:k==="beginner"||k==="intermediate"?["a","b","c"]:["a","b","c"],explanation:k==="beginner"?"Defines a string.":k==="intermediate"?"Loops 5 times.":"Creates a map."});break;default:b.push({id:Z,title:"Array",description:"Create an array of integers.",difficulty:k,blocks:[{id:"a",content:"int[] arr = {"},{id:"b",content:"1, 2, 3"},{id:"c",content:"};"}],correctOrder:["a","b","c"],explanation:"Stores multiple integers."})}}return b})(t),R=z[n-1]||z[0];H.useEffect(()=>{const C=[...R.blocks].sort(()=>Math.random()-.5);h(C),c(Array(R.correctOrder.length).fill(null)),p(!1),N(0),j(0),E(Date.now())},[n,t,R.blocks.length,R.correctOrder.length]);const y=(C,b)=>{i(C)},v=()=>{i(null)},_=C=>{if(!s)return;const b=o.indexOf(s),Z=[...o],k=o[C];if(k&&k!==s){const V=R.blocks.find($=>$.id===k);V&&h($=>$.some(F=>F.id===k)?$:[...$,V])}b!==-1?Z[b]=null:h(V=>V.filter($=>$.id!==s)),Z[C]=s,c(Z),i(null)},S=()=>{if(j(Z=>Z+1),!!o.includes(null))return;if(o.every((Z,k)=>Z===R.correctOrder[k])){const Z=(Date.now()-L)/1e3;let k=1;A===0&&(k+=1),Z<=60&&(k+=1),N(k),p(!0);const V=w==="guest"?`guest_${t}_dragdrop_${n}_stars`:`${w}_${t}_dragdrop_${n}_stars`,$=parseInt(localStorage.getItem(V)||"0"),O=Math.max($,k);localStorage.setItem(V,String(O)),console.log(`⭐ DragDrop Stars Saved: ${t} Level ${n} = ${O} stars (${w})`),w!=="guest"&&kl(w,t,"dragdrop",n,O),window.dispatchEvent(new Event("statsUpdate"))}},T=()=>{h([...R.blocks].sort(()=>Math.random()-.5)),c(Array(R.correctOrder.length).fill(null))};return l.jsx("div",{className:"pt-16 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",children:l.jsxs("div",{className:"max-w-5xl mx-auto px-4 py-8",children:[l.jsxs("div",{className:"flex items-center justify-between mb-6",children:[l.jsxs("button",{onClick:()=>e("game-overview"),className:"text-cyan-400 hover:text-cyan-300 flex items-center space-x-2 bg-cyan-400/10 px-4 py-2 rounded-lg border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300",children:[l.jsx(Vc,{className:"h-5 w-5"}),l.jsx("span",{children:"Back to Overview"})]}),l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsxs("span",{className:"text-gray-300 capitalize",children:[t," - Level ",n,"/30"]}),l.jsx("div",{className:"flex space-x-1",children:[1,2,3].map(C=>l.jsx(fn,{className:`h-4 w-4 ${C<=g?"text-yellow-400 fill-current":"text-gray-600"}`},C))})]})]}),l.jsxs("div",{className:"bg-gradient-to-br from-purple-900/40 to-cyan-900/30 p-6 rounded-2xl border border-purple-500/30 mb-6",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsx("h2",{className:"text-2xl font-bold text-white",children:R.title}),l.jsx("span",{className:`text-xs px-3 py-1 rounded-full ${R.difficulty==="beginner"?"bg-green-500/20 text-green-400":R.difficulty==="intermediate"?"bg-yellow-500/20 text-yellow-400":"bg-red-500/20 text-red-400"}`,children:R.difficulty})]}),l.jsx("p",{className:"text-gray-300",children:R.description})]}),l.jsxs("div",{className:"bg-slate-900/80 rounded-2xl border border-purple-500/30 p-6 mb-6",children:[l.jsx("h3",{className:"text-lg font-semibold text-cyan-400 mb-4",children:"📝 Arrange code in proper order:"}),l.jsx("div",{className:"space-y-2",children:o.map((C,b)=>{var Z;return l.jsx("div",{onDragOver:k=>k.preventDefault(),onDrop:()=>_(b),className:"min-h-[50px] bg-slate-800/60 border-2 border-dashed border-purple-500/30 rounded-lg p-3 flex items-center hover:border-purple-500/60 transition-colors",children:C?l.jsx("div",{draggable:!0,onDragStart:()=>y(C),onDragEnd:v,className:"flex-1 cursor-move hover:bg-purple-500/10 rounded px-2 py-1 transition-colors",children:l.jsx("code",{className:"text-sm text-cyan-300 font-mono",children:(Z=R.blocks.find(k=>k.id===C))==null?void 0:Z.content})}):l.jsx("span",{className:"text-sm text-gray-500 font-mono",children:`// Line ${b+1} - drag a block here`})},b)})})]}),l.jsxs("div",{className:"bg-slate-900/80 rounded-2xl border border-cyan-500/30 p-6 mb-6",children:[l.jsx("h3",{className:"text-lg font-semibold text-cyan-400 mb-4",children:"🧩 Drag these code blocks above:"}),l.jsx("div",{className:"grid md:grid-cols-2 gap-3",children:u.map(C=>l.jsx("div",{draggable:!0,onDragStart:()=>y(C.id),onDragEnd:v,className:"group bg-gradient-to-r from-slate-800 to-slate-700 border-2 border-cyan-500/30 rounded-lg p-4 cursor-move hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105",children:l.jsx("code",{className:"text-sm text-cyan-300 font-mono group-hover:text-cyan-200",children:C.content})},C.id))})]}),l.jsxs("div",{className:"flex space-x-4",children:[l.jsxs("button",{onClick:T,className:"flex-1 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 transition-all duration-300",children:[l.jsx(nh,{className:"h-4 w-4"}),l.jsx("span",{children:"Reset"})]}),l.jsxs("button",{onClick:S,disabled:o.includes(null),className:"flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 disabled:opacity-50 px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 transition-all duration-300",children:[l.jsx(Un,{className:"h-4 w-4"}),l.jsx("span",{children:"Check Solution"})]})]}),m&&l.jsx("div",{className:"fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4",children:l.jsxs("div",{className:"bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-cyan-500/50 p-8 rounded-2xl max-w-md text-center shadow-2xl",children:[l.jsx(ai,{className:"h-16 w-16 text-cyan-400 mx-auto mb-4 animate-bounce"}),l.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:"🎉 Level Complete!"}),l.jsx("p",{className:"text-gray-300 mb-4",children:R.explanation}),l.jsx("div",{className:"flex justify-center space-x-1 mb-6",children:[1,2,3].map(C=>l.jsx(fn,{className:`h-6 w-6 ${C<=g?"text-yellow-400 fill-current animate-pulse":"text-gray-600"}`},C))}),l.jsxs("div",{className:"flex space-x-4",children:[l.jsx("button",{onClick:()=>p(!1),className:"flex-1 bg-purple-500 hover:bg-purple-600 px-4 py-3 rounded-lg font-semibold transition-all duration-300",children:"Review"}),l.jsx("button",{onClick:()=>{n<30&&r(C=>C+1),p(!1)},className:"flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 px-4 py-3 rounded-lg font-semibold transition-all duration-300",children:n<30?"Next Level →":"Complete!"})]})]})})]})})},Dh=[{id:"first_steps",title:"First Steps",description:"Complete your first level",icon:"👣",requirement:t=>t.totalStars>=1,unlockableTitle:"Novice",category:"progress"},{id:"rising_star",title:"Rising Star",description:"Earn 10 stars",icon:"⭐",requirement:t=>t.totalStars>=10,unlockableTitle:"Apprentice",category:"progress"},{id:"star_collector",title:"Star Collector",description:"Earn 50 stars",icon:"✨",requirement:t=>t.totalStars>=50,unlockableTitle:"Star Seeker",category:"progress"},{id:"stellar_master",title:"Stellar Master",description:"Earn 100 stars",icon:"🌟",requirement:t=>t.totalStars>=100,unlockableTitle:"Code Master",category:"progress"},{id:"constellation",title:"Constellation",description:"Earn 200 stars",icon:"💫",requirement:t=>t.totalStars>=200,unlockableTitle:"Legendary Coder",category:"progress"},{id:"web_wizard",title:"Web Wizard",description:"Earn 50 stars in JavaScript",icon:"🧙‍♂️",requirement:t=>{var e;return(((e=t.languageStats.javascript)==null?void 0:e.stars)||0)>=50},unlockableTitle:"JavaScript Wizard",category:"mastery"},{id:"code_knight",title:"Code Knight",description:"Earn 50 stars in Java",icon:"⚔️",requirement:t=>{var e;return(((e=t.languageStats.java)==null?void 0:e.stars)||0)>=50},unlockableTitle:"Java Knight",category:"mastery"},{id:"data_sage",title:"Data Sage",description:"Earn 50 stars in Python",icon:"🐍",requirement:t=>{var e;return(((e=t.languageStats.python)==null?void 0:e.stars)||0)>=50},unlockableTitle:"Python Sage",category:"mastery"},{id:"polyglot",title:"Polyglot",description:"Earn at least 20 stars in all three languages",icon:"🌐",requirement:t=>{var e,n,r;return(((e=t.languageStats.javascript)==null?void 0:e.stars)||0)>=20&&(((n=t.languageStats.java)==null?void 0:n.stars)||0)>=20&&(((r=t.languageStats.python)==null?void 0:r.stars)||0)>=20},unlockableTitle:"Code Polyglot",category:"mastery"},{id:"trilingual_master",title:"Trilingual Master",description:"Earn 100 stars in each language",icon:"👑",requirement:t=>{var e,n,r;return(((e=t.languageStats.javascript)==null?void 0:e.stars)||0)>=100&&(((n=t.languageStats.java)==null?void 0:n.stars)||0)>=100&&(((r=t.languageStats.python)==null?void 0:r.stars)||0)>=100},unlockableTitle:"Supreme Architect",category:"mastery"},{id:"perfectionist",title:"Perfectionist",description:"Get 10 perfect 3-star ratings",icon:"💎",requirement:t=>t.threeStarCount>=10,unlockableTitle:"Perfectionist",category:"speed"},{id:"speed_demon",title:"Speed Demon",description:"Get 50 perfect 3-star ratings",icon:"⚡",requirement:t=>t.threeStarCount>=50,unlockableTitle:"Speed Demon",category:"speed"},{id:"level_10",title:"Decennial",description:"Reach level 10",icon:"🎯",requirement:t=>t.level>=10,unlockableTitle:"Veteran Coder",category:"special"},{id:"level_25",title:"Quarter Century",description:"Reach level 25",icon:"🏆",requirement:t=>t.level>=25,unlockableTitle:"Elite Programmer",category:"special"},{id:"level_50",title:"Half Century",description:"Reach level 50",icon:"👑",requirement:t=>t.level>=50,unlockableTitle:"Grand Master",category:"special"},{id:"puzzle_solver",title:"Puzzle Solver",description:"Complete 20 puzzles across all languages",icon:"🧩",requirement:t=>{var e,n,r;return(((e=t.languageStats.javascript)==null?void 0:e.puzzlesCompleted)||0)+(((n=t.languageStats.java)==null?void 0:n.puzzlesCompleted)||0)+(((r=t.languageStats.python)==null?void 0:r.puzzlesCompleted)||0)>=20},unlockableTitle:"Puzzle Master",category:"special"},{id:"drag_master",title:"Drag & Drop Master",description:"Complete 30 drag & drop challenges",icon:"🎪",requirement:t=>{var e,n,r;return(((e=t.languageStats.javascript)==null?void 0:e.dragDropCompleted)||0)+(((n=t.languageStats.java)==null?void 0:n.dragDropCompleted)||0)+(((r=t.languageStats.python)==null?void 0:r.dragDropCompleted)||0)>=30},unlockableTitle:"Syntax Guru",category:"special"}];function zw(t){return Dh.filter(e=>e.requirement(t))}function $A(t){return zw(t).filter(n=>n.unlockableTitle).map(n=>n.unlockableTitle)}function od(t,e=450){const n=t/e*100;return n===0?"Beginner":n<5?"Novice":n<15?"Apprentice":n<30?"Intermediate":n<50?"Advanced":n<70?"Expert":n<85?"Master":n<100?"Grand Master":"Legendary"}function Qy(t){switch(t){case"Beginner":return"text-gray-400";case"Novice":return"text-gray-300";case"Apprentice":return"text-blue-400";case"Intermediate":return"text-cyan-400";case"Advanced":return"text-green-400";case"Expert":return"text-yellow-400";case"Master":return"text-orange-400";case"Grand Master":return"text-purple-400";case"Legendary":return"text-pink-400";default:return"text-gray-400"}}const Dn=["javascript","java","python"],HA=({onNavigate:t})=>{const[e,n]=H.useState("guest"),[r,s]=H.useState(""),[i,o]=H.useState(""),[c,u]=H.useState(!1),[h,m]=H.useState(""),[p,g]=H.useState(0),[N,A]=H.useState(!1),[j,L]=H.useState(""),[E,w]=H.useState(!1);H.useEffect(()=>{const V=localStorage.getItem("userId")||"guest";if(n(V),s(localStorage.getItem("userEmail")||""),V==="guest"){t("home");return}V!=="guest"?(console.log("📥 [Stats] Loading user profile from Firestore..."),Mw(V).then(F=>{if(console.log("✅ [Stats] Profile loaded:",F),F.username)localStorage.setItem("username",F.username),o(F.username),console.log("💾 [Stats] Username loaded:",F.username);else{const q=localStorage.getItem("username")||"";o(q),console.log("⚠️ [Stats] No username in Firestore, using local:",q)}if(F.activeTitle)localStorage.setItem("selectedTitle",F.activeTitle),L(F.activeTitle),console.log("👑 [Stats] Title loaded:",F.activeTitle);else{const q=localStorage.getItem("selectedTitle")||"";L(q),console.log("⚠️ [Stats] No title in Firestore, using local:",q)}console.log("📢 [Stats] Dispatching statsUpdate event"),window.dispatchEvent(new Event("statsUpdate"))}).catch(F=>{console.error("❌ [Stats] Error loading profile:",F)}),EA(V).then(F=>{Object.entries(F).forEach(([q,Y])=>{const G=parseInt(localStorage.getItem(q)||"0");Y>G&&localStorage.setItem(q,String(Y))}),g(q=>q+1)})):o(localStorage.getItem("username")||"");const $=()=>{g(F=>F+1)},O=F=>{F.detail.action==="logout"&&t("home")};return window.addEventListener("storage",$),window.addEventListener("statsUpdate",$),window.addEventListener("authStateChanged",O),()=>{window.removeEventListener("storage",$),window.removeEventListener("statsUpdate",$),window.removeEventListener("authStateChanged",O)}},[t]);const I=H.useMemo(()=>{const V=JSON.parse(localStorage.getItem(`${e}_javascript_ai_history`)||"[]"),$=JSON.parse(localStorage.getItem(`${e}_java_ai_history`)||"[]"),O=JSON.parse(localStorage.getItem(`${e}_python_ai_history`)||"[]");return[...V,...$,...O].reduce((q,Y)=>q+(Y.timeTakenSeconds||0),0)},[e]),D=H.useMemo(()=>{const V={javascript:0,java:0,python:0};return Dn.forEach($=>{const O=JSON.parse(localStorage.getItem(`${e}_${$}_ai_history`)||"[]");V[$]=O.reduce((F,q)=>F+(q.attempts||0),0)}),V},[e]),z=H.useMemo(()=>{const V={};return Dn.forEach($=>{for(let O=1;O<=150;O++){const F=`guest_${$}_level_${O}_stars`,q=`${e}_${$}_level_${O}_stars`,Y=parseInt(localStorage.getItem(e==="guest"?F:q)||"0");Y>0&&(V[`${$}-L${O}`]=Y)}}),V},[e]),R=H.useMemo(()=>{let V=0;Dn.forEach(q=>{for(let Y=1;Y<=150;Y++){const G=e==="guest"?`guest_${q}_level_${Y}_stars`:`${e}_${q}_level_${Y}_stars`,oe=parseInt(localStorage.getItem(G)||"0");oe>0&&(V+=Vn({mode:"main",stars:oe,attempts:oe===3?1:2,timeTakenSeconds:oe===3?30:90,usedHint:oe<2}))}for(let Y=1;Y<=30;Y++){const G=e==="guest"?`guest_${q}_puzzle_${Y}_stars`:`${e}_${q}_puzzle_${Y}_stars`,oe=parseInt(localStorage.getItem(G)||"0");oe>0&&(V+=Vn({mode:"puzzle",stars:oe,attempts:oe===3?1:2,timeTakenSeconds:oe===3?30:90,usedHint:oe<2}))}for(let Y=1;Y<=30;Y++){const G=e==="guest"?`guest_${q}_dragdrop_${Y}_stars`:`${e}_${q}_dragdrop_${Y}_stars`,oe=parseInt(localStorage.getItem(G)||"0");oe>0&&(V+=Vn({mode:"dragdrop",stars:oe,attempts:oe===3?1:oe===1?3:2,timeTakenSeconds:oe===3?30:90,usedHint:!1}))}});const{level:$,currentLevelExp:O,expToNextLevel:F}=oh(V);return{exp:V,level:$,currentLevelExp:O,expToNextLevel:F}},[e,p]),y=H.useMemo(()=>{const V={totalStars:0,totalExp:R.exp,level:R.level,languageStats:{},threeStarCount:0};return Dn.forEach($=>{let O=0,F=0,q=0,Y=0;for(let G=1;G<=150;G++){const oe=e==="guest"?`guest_${$}_level_${G}_stars`:`${e}_${$}_level_${G}_stars`,Q=parseInt(localStorage.getItem(oe)||"0");Q>0&&(O+=Q,V.totalStars+=Q,F++,Q===3&&V.threeStarCount++)}for(let G=1;G<=30;G++){const oe=e==="guest"?`guest_${$}_puzzle_${G}_stars`:`${e}_${$}_puzzle_${G}_stars`,Q=parseInt(localStorage.getItem(oe)||"0");Q>0&&(O+=Q,V.totalStars+=Q,q++,Q===3&&V.threeStarCount++)}for(let G=1;G<=30;G++){const oe=e==="guest"?`guest_${$}_dragdrop_${G}_stars`:`${e}_${$}_dragdrop_${G}_stars`,Q=parseInt(localStorage.getItem(oe)||"0");Q>0&&(O+=Q,V.totalStars+=Q,Y++,Q===3&&V.threeStarCount++)}V.languageStats[$]={stars:O,mainCompleted:F,puzzlesCompleted:q,dragDropCompleted:Y}}),V},[e,p,R]),v=H.useMemo(()=>zw(y),[y]),_=H.useMemo(()=>$A(y),[y]),S=V=>{L(V),localStorage.setItem("selectedTitle",V),e!=="guest"&&(console.log("👑 Saving active title to Firestore:",V),Rh(e,{activeTitle:V}).then(()=>{console.log("✅ Title saved to Firestore successfully")})),window.dispatchEvent(new Event("statsUpdate"))},T=H.useMemo(()=>{const V={javascript:[],java:[],python:[]};return Object.entries(z).forEach(([$,O])=>{const F=$.match(/(javascript|java|python)-L(\d+)/);if(!F)return;const q=F[1],Y=parseInt(F[2]);Y>=1&&Y<=150&&V[q].push({level:Y,stars:O})}),Dn.forEach($=>V[$].sort((O,F)=>O.level-F.level)),V},[z]),C=H.useMemo(()=>{const V={javascript:[],java:[],python:[]};return Dn.forEach($=>{for(let O=1;O<=30;O++){const F=`guest_${$}_puzzle_${O}_stars`,q=`${e}_${$}_puzzle_${O}_stars`,Y=parseInt(localStorage.getItem(e==="guest"?F:q)||"0");Y>0&&V[$].push({level:O,displayLevel:O,stars:Y})}}),V},[e,p]),b=H.useMemo(()=>{const V={javascript:[],java:[],python:[]};return Dn.forEach($=>{for(let O=1;O<=30;O++){const F=`guest_${$}_dragdrop_${O}_stars`,q=`${e}_${$}_dragdrop_${O}_stars`,Y=parseInt(localStorage.getItem(e==="guest"?F:q)||"0");Y>0&&V[$].push({level:O,displayLevel:O,stars:Y})}}),V},[e,p]);H.useEffect(()=>{if(e==="guest")return;const V={javascript:D.javascript,java:D.java,python:D.python};SA(e,{totalSeconds:I,attemptsByLanguage:V,starsByLevel:z,modesUnlocked:[]})},[e,I,D,z]);const Z=()=>{if(h.trim()){const V=h.trim();localStorage.setItem("username",V),o(V),e!=="guest"&&(console.log("💾 Saving username to Firestore:",V),Rh(e,{username:V}).then(()=>{console.log("✅ Username saved to Firestore successfully")})),u(!1),m(""),window.dispatchEvent(new Event("statsUpdate"))}},k=H.useMemo(()=>{const V=["javascript","java","python"],$={};return V.forEach(O=>{let F=0,q=0,Y=0,G=0,oe=0;for(let ve=1;ve<=150;ve++){const tt=e==="guest"?`guest_${O}_level_${ve}_stars`:`${e}_${O}_level_${ve}_stars`,Ie=parseInt(localStorage.getItem(tt)||"0");Ie>0&&(F+=Ie,q++,oe+=Vn({mode:"main",stars:Ie,attempts:Ie===3?1:2,timeTakenSeconds:Ie===3?30:90,usedHint:Ie<2}))}for(let ve=1;ve<=30;ve++){const tt=e==="guest"?`guest_${O}_puzzle_${ve}_stars`:`${e}_${O}_puzzle_${ve}_stars`,Ie=parseInt(localStorage.getItem(tt)||"0");Ie>0&&(F+=Ie,Y++,oe+=Vn({mode:"puzzle",stars:Ie,attempts:Ie===3?1:2,timeTakenSeconds:Ie===3?30:90,usedHint:Ie<2}))}for(let ve=1;ve<=30;ve++){const tt=e==="guest"?`guest_${O}_dragdrop_${ve}_stars`:`${e}_${O}_dragdrop_${ve}_stars`,Ie=parseInt(localStorage.getItem(tt)||"0");Ie>0&&(F+=Ie,G++,oe+=Vn({mode:"dragdrop",stars:Ie,attempts:Ie===3?1:Ie===1?3:2,timeTakenSeconds:Ie===3?30:90,usedHint:!1}))}const{level:Q}=oh(oe),Ht=(q+Y+G)/210*100;$[O]={totalStars:F,mainLevelsCompleted:q,puzzlesCompleted:Y,dragDropCompleted:G,totalExp:oe,level:Q,completionPercentage:Ht.toFixed(1),avgStars:F>0?(F/(q+Y+G)).toFixed(2):"0"}}),$},[e,p]);return l.jsxs("div",{className:"pt-20 max-w-7xl mx-auto px-4 pb-12",children:[l.jsxs("div",{className:"flex items-center justify-between mb-8",children:[l.jsx("div",{children:l.jsx("h1",{className:"text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"Player Statistics"})}),l.jsx("button",{onClick:()=>t("game-overview"),className:"flex items-center space-x-2 bg-slate-800/50 hover:bg-slate-700/50 border border-cyan-400/30 hover:border-cyan-400/50 px-4 py-2 rounded-lg transition-all",children:l.jsx("span",{className:"text-cyan-400",children:"← Back"})})]}),l.jsxs("div",{className:"grid md:grid-cols-4 gap-4 mb-6",children:[l.jsxs("div",{className:"bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsx("div",{className:"text-sm text-gray-400",children:"Profile"}),!c&&l.jsx("button",{onClick:()=>{u(!0),m(i)},className:"text-xs text-cyan-400 hover:text-cyan-300 transition-colors px-2 py-1 rounded border border-cyan-500/30 hover:border-cyan-500/50",children:"Edit Name"})]}),c?l.jsxs("div",{className:"mb-3",children:[l.jsx("input",{type:"text",value:h,onChange:V=>m(V.target.value),placeholder:"Enter username",className:"w-full bg-slate-800/60 border border-purple-500/30 rounded px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 mb-2",autoFocus:!0}),l.jsxs("div",{className:"flex space-x-2",children:[l.jsx("button",{onClick:Z,className:"flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white text-xs py-2 rounded transition-all duration-300",children:"Save"}),l.jsx("button",{onClick:()=>{u(!1),m("")},className:"flex-1 bg-slate-700 hover:bg-slate-600 text-white text-xs py-2 rounded transition-colors",children:"Cancel"})]})]}):l.jsxs("div",{className:"mb-3",children:[l.jsx("div",{className:"text-lg font-semibold text-white flex items-center space-x-2",children:i?l.jsx(l.Fragment,{children:l.jsxs("span",{className:"text-cyan-400",children:["@",i]})}):l.jsx("span",{className:"text-gray-400 italic",children:"No username set"})}),l.jsx("div",{className:"text-sm text-gray-400 mt-1",children:r||"Guest"})]}),l.jsx("div",{className:"mt-4 text-sm text-gray-400",children:"Level"}),l.jsxs("div",{className:"text-cyan-300 font-semibold text-xl",children:["Lv. ",R.level]}),l.jsx("div",{className:"mt-2 w-full bg-slate-700 h-2.5 rounded-full overflow-hidden",children:l.jsx("div",{className:"bg-gradient-to-r from-cyan-500 to-purple-600 h-2.5 rounded-full transition-all duration-300",style:{width:`${Math.min(100,R.currentLevelExp/R.expToNextLevel*100)}%`}})}),l.jsxs("div",{className:"text-xs text-gray-400 mt-1",children:[R.currentLevelExp,"/",R.expToNextLevel," EXP"]}),l.jsxs("div",{className:"text-xs text-gray-500 mt-1",children:["Total: ",R.exp.toLocaleString()," EXP"]}),l.jsxs("button",{onClick:()=>A(!N),className:"mt-3 w-full text-xs text-purple-400 hover:text-purple-300 border border-purple-500/30 hover:border-purple-500/50 px-2 py-1.5 rounded transition-colors flex items-center justify-center space-x-1",children:[l.jsx(mx,{className:"h-3 w-3"}),l.jsx("span",{children:"Reset Tutorial"})]}),N&&l.jsxs("div",{className:"mt-2 bg-purple-900/30 border border-purple-500/30 rounded p-2",children:[l.jsx("p",{className:"text-xs text-gray-300 mb-2",children:"Reset tutorial to show again?"}),l.jsxs("div",{className:"flex space-x-2",children:[l.jsx("button",{onClick:()=>{localStorage.removeItem("tutorialDismissed"),window.dispatchEvent(new Event("tutorialReset")),A(!1),alert("Tutorial reset! It will show next time you visit the Code Editor.")},className:"flex-1 bg-cyan-500 hover:bg-cyan-600 text-white text-xs py-1 rounded",children:"Yes, Reset"}),l.jsx("button",{onClick:()=>A(!1),className:"flex-1 bg-slate-700 hover:bg-slate-600 text-white text-xs py-1 rounded",children:"Cancel"})]})]})]}),l.jsxs("div",{className:"bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("div",{className:"text-sm text-gray-400",children:"Play Time"}),l.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center",children:l.jsx("span",{className:"text-xl",children:"⏱️"})})]}),l.jsxs("div",{className:"text-3xl font-bold text-white mb-1",children:[Math.floor(I/3600),l.jsx("span",{className:"text-lg text-gray-400",children:"h"})," ",Math.floor(I%3600/60),l.jsx("span",{className:"text-lg text-gray-400",children:"m"})]}),l.jsx("div",{className:"text-xs text-gray-500",children:"Total session time"})]}),l.jsxs("div",{className:"bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("div",{className:"text-sm text-gray-400",children:"Overall Progress"}),l.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-green-500 to-cyan-600 rounded-lg flex items-center justify-center",children:l.jsx("span",{className:"text-xl",children:"📊"})})]}),l.jsxs("div",{className:"text-3xl font-bold text-white mb-1",children:[(Object.values(k).reduce((V,$)=>V+parseFloat($.completionPercentage),0)/3||0).toFixed(1),l.jsx("span",{className:"text-lg text-gray-400",children:"%"})]}),l.jsx("div",{className:"text-xs text-gray-500",children:"Challenges completed"})]})]}),l.jsxs("div",{className:"mt-6 grid md:grid-cols-3 gap-4",children:[l.jsxs("div",{className:"bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm",children:[l.jsx("div",{className:"text-sm text-gray-400 mb-3",children:"Language Mastery"}),l.jsx("div",{className:"space-y-3",children:Dn.map(V=>{const $=y.languageStats[V]||{stars:0},O=od($.stars),F=Qy(O),q=V==="javascript"?"🧙‍♂️":V==="java"?"⚔️":"🐍";return l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx("span",{className:"text-xl",children:q}),l.jsx("span",{className:"text-sm capitalize text-gray-300",children:V})]}),l.jsx("span",{className:`text-sm font-semibold ${F}`,children:O})]},V)})}),l.jsx("div",{className:"mt-4 pt-4 border-t border-purple-500/20",children:l.jsxs("div",{className:"flex items-center justify-between text-sm",children:[l.jsx("span",{className:"text-gray-400",children:"Overall"}),l.jsx("span",{className:`font-semibold ${Qy(od(y.totalStars,1350))}`,children:od(y.totalStars,1350)})]})})]}),l.jsxs("div",{className:"bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm",children:[l.jsxs("div",{className:"flex items-center space-x-2 mb-3",children:[l.jsx(pg,{className:"h-4 w-4 text-yellow-400"}),l.jsx("div",{className:"text-sm text-gray-400",children:"Active Title"})]}),_.length>0?l.jsxs("select",{value:j,onChange:V=>S(V.target.value),className:"w-full bg-slate-800/60 border border-purple-500/30 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/40",children:[l.jsx("option",{value:"",children:"No Title"}),_.map(V=>l.jsx("option",{value:V,children:V},V))]}):l.jsx("div",{className:"text-sm text-gray-500 italic",children:"Complete achievements to unlock titles"}),l.jsx("div",{className:"mt-3 text-center",children:l.jsxs("button",{onClick:()=>w(!0),className:"w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 hover:from-yellow-600/30 hover:to-orange-600/30 border border-yellow-500/30 px-3 py-2 rounded text-sm text-yellow-400 transition-all",children:[l.jsx(tc,{className:"h-4 w-4"}),l.jsxs("span",{children:["View Achievements (",v.length,"/16)"]})]})})]}),l.jsxs("div",{className:"bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm",children:[l.jsx("div",{className:"text-sm text-gray-400 mb-3",children:"Quick Stats"}),l.jsxs("div",{className:"space-y-2 text-sm",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-300",children:"Total Stars"}),l.jsx("span",{className:"text-yellow-400 font-semibold",children:y.totalStars})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-300",children:"Perfect Clears"}),l.jsx("span",{className:"text-cyan-400 font-semibold",children:y.threeStarCount})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-300",children:"Achievements"}),l.jsxs("span",{className:"text-purple-400 font-semibold",children:[v.length,"/16"]})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-300",children:"Titles Unlocked"}),l.jsx("span",{className:"text-green-400 font-semibold",children:_.length})]})]})]})]}),l.jsxs("div",{className:"mt-8",children:[l.jsx("h2",{className:"text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"Progress by Language"}),l.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:[{name:"JavaScript",key:"javascript",color:"from-yellow-400 to-orange-500",character:"🧙‍♂️"},{name:"Java",key:"java",color:"from-red-500 to-orange-600",character:"⚔️"},{name:"Python",key:"python",color:"from-blue-400 to-green-500",character:"🐍"}].map(V=>{const $=k[V.key];return l.jsxs("div",{className:"bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsx("div",{className:`w-12 h-12 bg-gradient-to-br ${V.color} rounded-full flex items-center justify-center shadow-lg text-2xl`,children:V.character}),l.jsx("h3",{className:"text-xl font-bold text-white",children:V.name})]}),l.jsxs("div",{className:`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${V.color} text-white`,children:["Lv. ",$.level]})]}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"flex items-center justify-between text-sm",children:[l.jsx("span",{className:"text-gray-400",children:"Total Stars"}),l.jsxs("div",{className:"flex items-center space-x-1",children:[l.jsx(fn,{className:"h-4 w-4 text-yellow-400 fill-current"}),l.jsx("span",{className:"text-yellow-400 font-semibold",children:$.totalStars})]})]}),l.jsxs("div",{className:"flex items-center justify-between text-sm",children:[l.jsx("span",{className:"text-gray-400",children:"Average Stars"}),l.jsxs("span",{className:"text-cyan-400 font-semibold",children:[$.avgStars,"★"]})]}),l.jsxs("div",{className:"border-t border-purple-500/20 pt-2",children:[l.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-400 mb-1",children:[l.jsx("span",{children:"Story Levels"}),l.jsxs("span",{className:"text-cyan-400",children:[$.mainLevelsCompleted,"/150"]})]}),l.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-400 mb-1",children:[l.jsx("span",{children:"Puzzles"}),l.jsxs("span",{className:"text-purple-400",children:[$.puzzlesCompleted,"/30"]})]}),l.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-400",children:[l.jsx("span",{children:"Drag & Drop"}),l.jsxs("span",{className:"text-pink-400",children:[$.dragDropCompleted,"/30"]})]})]}),l.jsxs("div",{className:"border-t border-purple-500/20 pt-2",children:[l.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-400 mb-1",children:[l.jsx("span",{children:"Completion"}),l.jsxs("span",{className:"text-green-400",children:[$.completionPercentage,"%"]})]}),l.jsx("div",{className:"w-full bg-slate-700 h-2 rounded-full overflow-hidden",children:l.jsx("div",{className:`h-full bg-gradient-to-r ${V.color} transition-all duration-300`,style:{width:`${$.completionPercentage}%`}})})]}),l.jsxs("div",{className:"flex items-center justify-between text-sm pt-2 border-t border-purple-500/20",children:[l.jsx("span",{className:"text-gray-400",children:"Total EXP"}),l.jsx("span",{className:"text-cyan-400 font-semibold",children:$.totalExp.toLocaleString()})]})]})]},V.key)})})]}),l.jsx("div",{className:"mt-8",children:l.jsx("h2",{className:"text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",children:"Detailed Progress"})}),l.jsx("div",{className:"mt-6 grid md:grid-cols-3 gap-4",children:Dn.map(V=>l.jsxs("div",{className:"bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-purple-500/30 rounded-xl p-5 backdrop-blur-sm",children:[l.jsxs("div",{className:"text-sm text-gray-400 mb-2 capitalize",children:[V," - Main"]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[T[V].length===0&&l.jsx("div",{className:"text-gray-500 text-sm",children:"No stars yet."}),T[V].map($=>l.jsxs("div",{className:"flex items-center justify-between bg-slate-800/60 border border-slate-600 rounded px-2 py-1 text-xs text-gray-200",children:[l.jsxs("span",{children:["L",$.level]}),l.jsxs("span",{className:"text-yellow-400",children:["★".repeat($.stars),"☆".repeat(3-$.stars)]})]},`${V}-L${$.level}`))]}),l.jsxs("div",{className:"text-sm text-gray-400 mb-2 mt-4 capitalize",children:[V," - Puzzles (1-30)"]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[C[V].length===0&&l.jsx("div",{className:"text-gray-500 text-sm",children:"No puzzle stars yet."}),C[V].map($=>l.jsxs("div",{className:"flex items-center justify-between bg-slate-800/60 border border-slate-600 rounded px-2 py-1 text-xs text-gray-200",children:[l.jsxs("span",{children:["P",$.displayLevel]}),l.jsxs("span",{className:"text-yellow-400",children:["★".repeat($.stars),"☆".repeat(3-$.stars)]})]},`${V}-P${$.displayLevel}`))]}),l.jsxs("div",{className:"text-sm text-gray-400 mb-2 mt-4 capitalize",children:[V," - Drag & Drop (1-30)"]}),l.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[b[V].length===0&&l.jsx("div",{className:"text-gray-500 text-sm",children:"No drag & drop stars yet."}),b[V].map($=>l.jsxs("div",{className:"flex items-center justify-between bg-slate-800/60 border border-slate-600 rounded px-2 py-1 text-xs text-gray-200",children:[l.jsxs("span",{children:["D",$.displayLevel]}),l.jsxs("span",{className:"text-yellow-400",children:["★".repeat($.stars),"☆".repeat(3-$.stars)]})]},`${V}-D${$.displayLevel}`))]})]},V))}),E&&l.jsx("div",{className:"fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4",children:l.jsxs("div",{className:"bg-gradient-to-br from-slate-900 to-slate-800 border border-purple-500/30 rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6",children:[l.jsxs("div",{className:"flex items-center justify-between mb-6",children:[l.jsxs("div",{className:"flex items-center space-x-3",children:[l.jsx(MS,{className:"h-8 w-8 text-yellow-400"}),l.jsx("h2",{className:"text-2xl font-bold text-white",children:"Achievements"})]}),l.jsx("button",{onClick:()=>w(!1),className:"text-gray-400 hover:text-white transition-colors",children:"✕"})]}),l.jsx("div",{className:"grid md:grid-cols-2 gap-4",children:Dh.map(V=>{const $=v.some(O=>O.id===V.id);return l.jsx("div",{className:`p-4 rounded-lg border transition-all ${$?"bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/30":"bg-slate-800/30 border-gray-600/30 opacity-50"}`,children:l.jsxs("div",{className:"flex items-start space-x-3",children:[l.jsx("span",{className:"text-3xl",children:V.icon}),l.jsxs("div",{className:"flex-1",children:[l.jsxs("div",{className:"flex items-center justify-between mb-1",children:[l.jsx("h3",{className:"font-semibold text-white",children:V.title}),$&&l.jsx("span",{className:"text-green-400 text-sm",children:"✓ Unlocked"})]}),l.jsx("p",{className:"text-sm text-gray-400 mb-2",children:V.description}),V.unlockableTitle&&l.jsxs("div",{className:"flex items-center space-x-2 text-xs",children:[l.jsx(pg,{className:"h-3 w-3 text-yellow-400"}),l.jsxs("span",{className:"text-yellow-400",children:["Unlocks: ",V.unlockableTitle]})]})]})]})},V.id)})}),l.jsx("div",{className:"mt-6 text-center",children:l.jsxs("p",{className:"text-sm text-gray-400",children:["Progress: ",v.length,"/",Dh.length," achievements unlocked"]})})]})})]})};function WA(){const[t,e]=H.useState("home"),[n,r]=H.useState("javascript"),[s,i]=H.useState(null),[o,c]=H.useState(!1),[u,h]=H.useState(!1),[m,p]=H.useState(!0),g=L=>{e(L),window.scrollTo({top:0,behavior:"smooth"})};H.useEffect(()=>{TA().then(w=>{console.log(w?"🔥 Firebase connected!":"❌ Firebase failed")});const L=localStorage.getItem("hasSeenWelcome"),E=localStorage.getItem("userId");(!L||!E)&&(console.log("🚨 Showing guest modal - hasSeenWelcome:",L,"userId:",E),h(!0))},[]),H.useEffect(()=>{const L=_A(E=>{i(E),p(!1),E?(console.log("👤 User authenticated:",E.email),localStorage.setItem("userId",E.uid),localStorage.setItem("userEmail",E.email||""),console.log("📥 Loading user profile from Firestore..."),Mw(E.uid).then(w=>{console.log("✅ Profile loaded:",w),w.username&&(localStorage.setItem("username",w.username),console.log("💾 Username loaded:",w.username)),w.activeTitle&&(localStorage.setItem("selectedTitle",w.activeTitle),console.log("👑 Title loaded:",w.activeTitle)),window.dispatchEvent(new Event("statsUpdate"))}).catch(w=>{console.error("❌ Error loading profile:",w)}),["javascript","java","python"].forEach(w=>{for(let I=1;I<=150;I++){const D=`guest_${w}_level_${I}_stars`,z=`${E.uid}_${w}_level_${I}_stars`,R=localStorage.getItem(z),y=localStorage.getItem(D);(!R||R==="0")&&y&&y!=="0"&&localStorage.setItem(z,y)}for(let I=1;I<=5;I++){const D=`guest_${w}_puzzle_${I}_stars`,z=`${E.uid}_${w}_puzzle_${I}_stars`,R=localStorage.getItem(z),y=localStorage.getItem(D);(!R||R==="0")&&y&&y!=="0"&&localStorage.setItem(z,y)}})):(console.log("👤 User not authenticated"),localStorage.setItem("userId","guest"),localStorage.setItem("userEmail",""))});return()=>L()},[]);const N=L=>{i(L),c(!1),window.dispatchEvent(new CustomEvent("authStateChanged",{detail:{user:L,action:"login"}}))},A=async()=>{await xA(),i(null),localStorage.removeItem("guestCompletedLevels"),localStorage.removeItem("guestUnlockedLevels");const L=localStorage.getItem("userId");L&&L!=="guest"&&(localStorage.removeItem(`${L}_completedLevels`),localStorage.removeItem(`${L}_unlockedLevels`)),localStorage.removeItem("hasSeenWelcome"),localStorage.removeItem("userId"),localStorage.removeItem("userEmail"),localStorage.removeItem("username"),localStorage.removeItem("selectedTitle"),e("home"),h(!0),window.dispatchEvent(new CustomEvent("authStateChanged",{detail:{user:null,action:"logout"}}))},j=()=>{switch(t){case"home":return l.jsx(qy,{onNavigate:g});case"about":return l.jsx(NA,{onNavigate:g});case"game-overview":return l.jsx(RA,{onNavigate:g,selectedLanguage:n,setSelectedLanguage:r});case"features":return l.jsx(jA,{onNavigate:g});case"code-editor":return l.jsx(UA,{selectedLanguage:n,onNavigate:g});case"ai-guide":return l.jsx(zA,{onNavigate:g});case"arcane-showcase":return l.jsx(FA,{onNavigate:g});case"stats":return l.jsx(HA,{onNavigate:g});case"drag-drop":return l.jsx(BA,{selectedLanguage:n,onNavigate:g});default:return l.jsx(qy,{onNavigate:g})}};return m?l.jsx("div",{className:"min-h-screen bg-gray-900 text-white flex items-center justify-center",children:l.jsxs("div",{className:"text-center",children:[l.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"}),l.jsx("p",{children:"Loading CodeRealm..."})]})}):l.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden",children:[l.jsx(KS,{}),l.jsxs("div",{className:"relative z-10",children:[l.jsx(qS,{currentPage:t,onNavigate:g,user:s,onSignIn:()=>c(!0),onSignOut:A}),j()]}),l.jsx(IA,{isOpen:o,onClose:()=>c(!1),onAuthSuccess:N}),u&&l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50",children:l.jsxs("div",{className:"bg-gradient-to-br from-slate-900 to-slate-800 border border-purple-500/30 rounded-2xl p-8 max-w-md mx-4 shadow-2xl",children:[l.jsxs("div",{className:"text-center mb-6",children:[l.jsx("h2",{className:"text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2",children:"Welcome to CodeRealm!"}),l.jsx("p",{className:"text-gray-300 text-sm",children:"Choose how you'd like to start your coding adventure"})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("button",{onClick:()=>{localStorage.setItem("hasSeenWelcome","true"),h(!1),c(!0)},className:"w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-2",children:[l.jsx("span",{children:"🔐"}),l.jsx("span",{children:"Sign In / Create Account"})]}),l.jsx("div",{className:"text-center text-gray-400 text-sm",children:"or"}),l.jsxs("button",{onClick:()=>{localStorage.setItem("hasSeenWelcome","true"),localStorage.setItem("userId","guest"),h(!1)},className:"w-full bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2",children:[l.jsx("span",{children:"👤"}),l.jsx("span",{children:"Continue as Guest"})]}),l.jsxs("div",{className:"mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg",children:[l.jsxs("p",{className:"text-xs text-gray-400 text-center",children:[l.jsx("span",{className:"text-cyan-400 font-semibold",children:"💡 Tip:"})," Sign in to save your progress across devices and track your achievements!"]}),l.jsx("p",{className:"text-xs text-gray-500 text-center mt-2",children:"Guest progress is saved locally and won't sync to your account."})]})]})]})})]})}lx(document.getElementById("root")).render(l.jsx(H.StrictMode,{children:l.jsx(WA,{})}));
