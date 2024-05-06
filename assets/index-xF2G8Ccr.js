function BS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function r0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var i0={exports:{}},rc={},s0={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),HS=Symbol.for("react.portal"),WS=Symbol.for("react.fragment"),qS=Symbol.for("react.strict_mode"),GS=Symbol.for("react.profiler"),KS=Symbol.for("react.provider"),QS=Symbol.for("react.context"),YS=Symbol.for("react.forward_ref"),XS=Symbol.for("react.suspense"),JS=Symbol.for("react.memo"),ZS=Symbol.for("react.lazy"),Lg=Symbol.iterator;function ek(t){return t===null||typeof t!="object"?null:(t=Lg&&t[Lg]||t["@@iterator"],typeof t=="function"?t:null)}var o0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},a0=Object.assign,l0={};function As(t,e,n){this.props=t,this.context=e,this.refs=l0,this.updater=n||o0}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function u0(){}u0.prototype=As.prototype;function sp(t,e,n){this.props=t,this.context=e,this.refs=l0,this.updater=n||o0}var op=sp.prototype=new u0;op.constructor=sp;a0(op,As.prototype);op.isPureReactComponent=!0;var Mg=Array.isArray,c0=Object.prototype.hasOwnProperty,ap={current:null},h0={key:!0,ref:!0,__self:!0,__source:!0};function f0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)c0.call(e,r)&&!h0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ma,type:t,key:s,ref:o,props:i,_owner:ap.current}}function tk(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function nk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vg=/\/+/g;function dh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nk(""+t.key):e.toString(36)}function Dl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case HS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+dh(o,0):r,Mg(i)?(n="",t!=null&&(n=t.replace(Vg,"$&/")+"/"),Dl(i,e,n,"",function(u){return u})):i!=null&&(lp(i)&&(i=tk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Vg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Mg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+dh(s,a);o+=Dl(s,e,n,l,i)}else if(l=ek(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+dh(s,a++),o+=Dl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],i=0;return Dl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},Ll={transition:null},ik={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:ap};Q.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!lp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=As;Q.Fragment=WS;Q.Profiler=GS;Q.PureComponent=sp;Q.StrictMode=qS;Q.Suspense=XS;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ik;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=a0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ap.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)c0.call(e,l)&&!h0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:ma,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:QS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:KS,_context:t},t.Consumer=t};Q.createElement=f0;Q.createFactory=function(t){var e=f0.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:YS,render:t}};Q.isValidElement=lp;Q.lazy=function(t){return{$$typeof:ZS,_payload:{_status:-1,_result:t},_init:rk}};Q.memo=function(t,e){return{$$typeof:JS,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=Ll.transition;Ll.transition={};try{t()}finally{Ll.transition=e}};Q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Q.useCallback=function(t,e){return ft.current.useCallback(t,e)};Q.useContext=function(t){return ft.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};Q.useEffect=function(t,e){return ft.current.useEffect(t,e)};Q.useId=function(){return ft.current.useId()};Q.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return ft.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};Q.useRef=function(t){return ft.current.useRef(t)};Q.useState=function(t){return ft.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return ft.current.useTransition()};Q.version="18.2.0";s0.exports=Q;var S=s0.exports;const ic=r0(S),sk=BS({__proto__:null,default:ic},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ok=S,ak=Symbol.for("react.element"),lk=Symbol.for("react.fragment"),uk=Object.prototype.hasOwnProperty,ck=ok.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hk={key:!0,ref:!0,__self:!0,__source:!0};function d0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uk.call(e,r)&&!hk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:ak,type:t,key:s,ref:o,props:i,_owner:ck.current}}rc.Fragment=lk;rc.jsx=d0;rc.jsxs=d0;i0.exports=rc;var w=i0.exports,mf={},p0={exports:{}},Ct={},m0={exports:{}},g0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,W){var q=D.length;D.push(W);e:for(;0<q;){var Te=q-1>>>1,Oe=D[Te];if(0<i(Oe,W))D[Te]=W,D[q]=Oe,q=Te;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var W=D[0],q=D.pop();if(q!==W){D[0]=q;e:for(var Te=0,Oe=D.length,Ka=Oe>>>1;Te<Ka;){var Or=2*(Te+1)-1,fh=D[Or],Dr=Or+1,Qa=D[Dr];if(0>i(fh,q))Dr<Oe&&0>i(Qa,fh)?(D[Te]=Qa,D[Dr]=q,Te=Dr):(D[Te]=fh,D[Or]=q,Te=Or);else if(Dr<Oe&&0>i(Qa,q))D[Te]=Qa,D[Dr]=q,Te=Dr;else break e}}return W}function i(D,W){var q=D.sortIndex-W.sortIndex;return q!==0?q:D.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,y=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=D)r(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function E(D){if(v=!1,g(D),!y)if(n(l)!==null)y=!0,ch(T);else{var W=n(u);W!==null&&hh(E,W.startTime-D)}}function T(D,W){y=!1,v&&(v=!1,m(x),x=-1),p=!0;var q=f;try{for(g(W),h=n(l);h!==null&&(!(h.expirationTime>W)||D&&!Ft());){var Te=h.callback;if(typeof Te=="function"){h.callback=null,f=h.priorityLevel;var Oe=Te(h.expirationTime<=W);W=t.unstable_now(),typeof Oe=="function"?h.callback=Oe:h===n(l)&&r(l),g(W)}else r(l);h=n(l)}if(h!==null)var Ka=!0;else{var Or=n(u);Or!==null&&hh(E,Or.startTime-W),Ka=!1}return Ka}finally{h=null,f=q,p=!1}}var R=!1,C=null,x=-1,z=5,B=-1;function Ft(){return!(t.unstable_now()-B<z)}function Us(){if(C!==null){var D=t.unstable_now();B=D;var W=!0;try{W=C(!0,D)}finally{W?Fs():(R=!1,C=null)}}else R=!1}var Fs;if(typeof d=="function")Fs=function(){d(Us)};else if(typeof MessageChannel<"u"){var Dg=new MessageChannel,zS=Dg.port2;Dg.port1.onmessage=Us,Fs=function(){zS.postMessage(null)}}else Fs=function(){_(Us,0)};function ch(D){C=D,R||(R=!0,Fs())}function hh(D,W){x=_(function(){D(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,ch(T))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var q=f;f=W;try{return D()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,W){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=f;f=D;try{return W()}finally{f=q}},t.unstable_scheduleCallback=function(D,W,q){var Te=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Te+q:Te):q=Te,D){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=q+Oe,D={id:c++,callback:W,priorityLevel:D,startTime:q,expirationTime:Oe,sortIndex:-1},q>Te?(D.sortIndex=q,e(u,D),n(l)===null&&D===n(u)&&(v?(m(x),x=-1):v=!0,hh(E,q-Te))):(D.sortIndex=Oe,e(l,D),y||p||(y=!0,ch(T))),D},t.unstable_shouldYield=Ft,t.unstable_wrapCallback=function(D){var W=f;return function(){var q=f;f=W;try{return D.apply(this,arguments)}finally{f=q}}}})(g0);m0.exports=g0;var fk=m0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=S,At=fk;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v0=new Set,Po={};function pi(t,e){as(t,e),as(t+"Capture",e)}function as(t,e){for(Po[t]=e,t=0;t<e.length;t++)v0.add(e[t])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gf=Object.prototype.hasOwnProperty,dk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ug={},Fg={};function pk(t){return gf.call(Fg,t)?!0:gf.call(Ug,t)?!1:dk.test(t)?Fg[t]=!0:(Ug[t]=!0,!1)}function mk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gk(t,e,n,r){if(e===null||typeof e>"u"||mk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ke[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ke[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ke[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ke[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ke[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ke[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ke[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ke[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ke[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var up=/[\-:]([a-z])/g;function cp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(up,cp);Ke[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(up,cp);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(up,cp);Ke[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ke[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hp(t,e,n,r){var i=Ke.hasOwnProperty(e)?Ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gk(e,n,i,r)&&(n=null),r||i===null?pk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Oi=Symbol.for("react.fragment"),fp=Symbol.for("react.strict_mode"),yf=Symbol.for("react.profiler"),_0=Symbol.for("react.provider"),w0=Symbol.for("react.context"),dp=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),_f=Symbol.for("react.suspense_list"),pp=Symbol.for("react.memo"),qn=Symbol.for("react.lazy"),E0=Symbol.for("react.offscreen"),$g=Symbol.iterator;function $s(t){return t===null||typeof t!="object"?null:(t=$g&&t[$g]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,ph;function Js(t){if(ph===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ph=e&&e[1]||""}return`
`+ph+t}var mh=!1;function gh(t,e){if(!t||mh)return"";mh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{mh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function yk(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=gh(t.type,!1),t;case 11:return t=gh(t.type.render,!1),t;case 1:return t=gh(t.type,!0),t;default:return""}}function wf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Oi:return"Fragment";case bi:return"Portal";case yf:return"Profiler";case fp:return"StrictMode";case vf:return"Suspense";case _f:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case w0:return(t.displayName||"Context")+".Consumer";case _0:return(t._context.displayName||"Context")+".Provider";case dp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pp:return e=t.displayName||null,e!==null?e:wf(t.type)||"Memo";case qn:e=t._payload,t=t._init;try{return wf(t(e))}catch{}}return null}function vk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wf(e);case 8:return e===fp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function T0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _k(t){var e=T0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=_k(t))}function I0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=T0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ru(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ef(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S0(t,e){e=e.checked,e!=null&&hp(t,"checked",e,!1)}function Tf(t,e){S0(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?If(t,e.type,n):e.hasOwnProperty("defaultValue")&&If(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function If(t,e,n){(e!=="number"||ru(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function Qi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Zs(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function k0(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,R0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wk=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){wk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function C0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function P0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=C0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ek=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Af(t,e){if(e){if(Ek[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function Rf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cf=null;function mp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pf=null,Yi=null,Xi=null;function Wg(t){if(t=va(t)){if(typeof Pf!="function")throw Error(A(280));var e=t.stateNode;e&&(e=uc(e),Pf(t.stateNode,t.type,e))}}function x0(t){Yi?Xi?Xi.push(t):Xi=[t]:Yi=t}function N0(){if(Yi){var t=Yi,e=Xi;if(Xi=Yi=null,Wg(t),e)for(t=0;t<e.length;t++)Wg(e[t])}}function b0(t,e){return t(e)}function O0(){}var yh=!1;function D0(t,e,n){if(yh)return t(e,n);yh=!0;try{return b0(t,e,n)}finally{yh=!1,(Yi!==null||Xi!==null)&&(O0(),N0())}}function No(t,e){var n=t.stateNode;if(n===null)return null;var r=uc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var xf=!1;if(Rn)try{var js={};Object.defineProperty(js,"passive",{get:function(){xf=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{xf=!1}function Tk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ho=!1,iu=null,su=!1,Nf=null,Ik={onError:function(t){ho=!0,iu=t}};function Sk(t,e,n,r,i,s,o,a,l){ho=!1,iu=null,Tk.apply(Ik,arguments)}function kk(t,e,n,r,i,s,o,a,l){if(Sk.apply(this,arguments),ho){if(ho){var u=iu;ho=!1,iu=null}else throw Error(A(198));su||(su=!0,Nf=u)}}function mi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function L0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qg(t){if(mi(t)!==t)throw Error(A(188))}function Ak(t){var e=t.alternate;if(!e){if(e=mi(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qg(i),t;if(s===r)return qg(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function M0(t){return t=Ak(t),t!==null?V0(t):null}function V0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=V0(t);if(e!==null)return e;t=t.sibling}return null}var U0=At.unstable_scheduleCallback,Gg=At.unstable_cancelCallback,Rk=At.unstable_shouldYield,Ck=At.unstable_requestPaint,Ie=At.unstable_now,Pk=At.unstable_getCurrentPriorityLevel,gp=At.unstable_ImmediatePriority,F0=At.unstable_UserBlockingPriority,ou=At.unstable_NormalPriority,xk=At.unstable_LowPriority,$0=At.unstable_IdlePriority,sc=null,an=null;function Nk(t){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Dk,bk=Math.log,Ok=Math.LN2;function Dk(t){return t>>>=0,t===0?32:31-(bk(t)/Ok|0)|0}var el=64,tl=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function au(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=eo(a):(s&=o,s!==0&&(r=eo(s)))}else o=n&~i,o!==0?r=eo(o):s!==0&&(r=eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),i=1<<n,r|=t[n],e&=~i;return r}function Lk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Lk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function j0(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function vh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function Vk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function yp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function z0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var B0,vp,H0,W0,q0,Of=!1,nl=[],or=null,ar=null,lr=null,bo=new Map,Oo=new Map,Kn=[],Uk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kg(t,e){switch(t){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=va(e),e!==null&&vp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Fk(t,e,n,r,i){switch(e){case"focusin":return or=zs(or,t,e,n,r,i),!0;case"dragenter":return ar=zs(ar,t,e,n,r,i),!0;case"mouseover":return lr=zs(lr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return bo.set(s,zs(bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oo.set(s,zs(Oo.get(s)||null,t,e,n,r,i)),!0}return!1}function G0(t){var e=Ur(t.target);if(e!==null){var n=mi(e);if(n!==null){if(e=n.tag,e===13){if(e=L0(n),e!==null){t.blockedOn=e,q0(t.priority,function(){H0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ml(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Df(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cf=r,n.target.dispatchEvent(r),Cf=null}else return e=va(n),e!==null&&vp(e),t.blockedOn=n,!1;e.shift()}return!0}function Qg(t,e,n){Ml(t)&&n.delete(e)}function $k(){Of=!1,or!==null&&Ml(or)&&(or=null),ar!==null&&Ml(ar)&&(ar=null),lr!==null&&Ml(lr)&&(lr=null),bo.forEach(Qg),Oo.forEach(Qg)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Of||(Of=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,$k)))}function Do(t){function e(i){return Bs(i,t)}if(0<nl.length){Bs(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(or!==null&&Bs(or,t),ar!==null&&Bs(ar,t),lr!==null&&Bs(lr,t),bo.forEach(e),Oo.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)G0(n),n.blockedOn===null&&Kn.shift()}var Ji=Fn.ReactCurrentBatchConfig,lu=!0;function jk(t,e,n,r){var i=ee,s=Ji.transition;Ji.transition=null;try{ee=1,_p(t,e,n,r)}finally{ee=i,Ji.transition=s}}function zk(t,e,n,r){var i=ee,s=Ji.transition;Ji.transition=null;try{ee=4,_p(t,e,n,r)}finally{ee=i,Ji.transition=s}}function _p(t,e,n,r){if(lu){var i=Df(t,e,n,r);if(i===null)Ch(t,e,r,uu,n),Kg(t,r);else if(Fk(i,t,e,n,r))r.stopPropagation();else if(Kg(t,r),e&4&&-1<Uk.indexOf(t)){for(;i!==null;){var s=va(i);if(s!==null&&B0(s),s=Df(t,e,n,r),s===null&&Ch(t,e,r,uu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ch(t,e,r,null,n)}}var uu=null;function Df(t,e,n,r){if(uu=null,t=mp(r),t=Ur(t),t!==null)if(e=mi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=L0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uu=t,null}function K0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pk()){case gp:return 1;case F0:return 4;case ou:case xk:return 16;case $0:return 536870912;default:return 16}default:return 16}}var tr=null,wp=null,Vl=null;function Q0(){if(Vl)return Vl;var t,e=wp,n=e.length,r,i="value"in tr?tr.value:tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Vl=i.slice(t,1<r?1-r:void 0)}function Ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function Yg(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:Yg,this.isPropagationStopped=Yg,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ep=Pt(Rs),ya=me({},Rs,{view:0,detail:0}),Bk=Pt(ya),_h,wh,Hs,oc=me({},ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(_h=t.screenX-Hs.screenX,wh=t.screenY-Hs.screenY):wh=_h=0,Hs=t),_h)},movementY:function(t){return"movementY"in t?t.movementY:wh}}),Xg=Pt(oc),Hk=me({},oc,{dataTransfer:0}),Wk=Pt(Hk),qk=me({},ya,{relatedTarget:0}),Eh=Pt(qk),Gk=me({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Kk=Pt(Gk),Qk=me({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yk=Pt(Qk),Xk=me({},Rs,{data:0}),Jg=Pt(Xk),Jk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eA[t])?!!e[t]:!1}function Tp(){return tA}var nA=me({},ya,{key:function(t){if(t.key){var e=Jk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tp,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rA=Pt(nA),iA=me({},oc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zg=Pt(iA),sA=me({},ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tp}),oA=Pt(sA),aA=me({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),lA=Pt(aA),uA=me({},oc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cA=Pt(uA),hA=[9,13,27,32],Ip=Rn&&"CompositionEvent"in window,fo=null;Rn&&"documentMode"in document&&(fo=document.documentMode);var fA=Rn&&"TextEvent"in window&&!fo,Y0=Rn&&(!Ip||fo&&8<fo&&11>=fo),ey=" ",ty=!1;function X0(t,e){switch(t){case"keyup":return hA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Di=!1;function dA(t,e){switch(t){case"compositionend":return J0(e);case"keypress":return e.which!==32?null:(ty=!0,ey);case"textInput":return t=e.data,t===ey&&ty?null:t;default:return null}}function pA(t,e){if(Di)return t==="compositionend"||!Ip&&X0(t,e)?(t=Q0(),Vl=wp=tr=null,Di=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Y0&&e.locale!=="ko"?null:e.data;default:return null}}var mA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ny(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mA[t.type]:e==="textarea"}function Z0(t,e,n,r){x0(r),e=cu(e,"onChange"),0<e.length&&(n=new Ep("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var po=null,Lo=null;function gA(t){c1(t,0)}function ac(t){var e=Vi(t);if(I0(e))return t}function yA(t,e){if(t==="change")return e}var e1=!1;if(Rn){var Th;if(Rn){var Ih="oninput"in document;if(!Ih){var ry=document.createElement("div");ry.setAttribute("oninput","return;"),Ih=typeof ry.oninput=="function"}Th=Ih}else Th=!1;e1=Th&&(!document.documentMode||9<document.documentMode)}function iy(){po&&(po.detachEvent("onpropertychange",t1),Lo=po=null)}function t1(t){if(t.propertyName==="value"&&ac(Lo)){var e=[];Z0(e,Lo,t,mp(t)),D0(gA,e)}}function vA(t,e,n){t==="focusin"?(iy(),po=e,Lo=n,po.attachEvent("onpropertychange",t1)):t==="focusout"&&iy()}function _A(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ac(Lo)}function wA(t,e){if(t==="click")return ac(e)}function EA(t,e){if(t==="input"||t==="change")return ac(e)}function TA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:TA;function Mo(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!gf.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function sy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function oy(t,e){var n=sy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sy(n)}}function n1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function r1(){for(var t=window,e=ru();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ru(t.document)}return e}function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function IA(t){var e=r1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n1(n.ownerDocument.documentElement,n)){if(r!==null&&Sp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=oy(n,s);var o=oy(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SA=Rn&&"documentMode"in document&&11>=document.documentMode,Li=null,Lf=null,mo=null,Mf=!1;function ay(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mf||Li==null||Li!==ru(r)||(r=Li,"selectionStart"in r&&Sp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Mo(mo,r)||(mo=r,r=cu(Lf,"onSelect"),0<r.length&&(e=new Ep("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Li)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mi={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Sh={},i1={};Rn&&(i1=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function lc(t){if(Sh[t])return Sh[t];if(!Mi[t])return t;var e=Mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i1)return Sh[t]=e[n];return t}var s1=lc("animationend"),o1=lc("animationiteration"),a1=lc("animationstart"),l1=lc("transitionend"),u1=new Map,ly="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){u1.set(t,e),pi(e,[t])}for(var kh=0;kh<ly.length;kh++){var Ah=ly[kh],kA=Ah.toLowerCase(),AA=Ah[0].toUpperCase()+Ah.slice(1);Ar(kA,"on"+AA)}Ar(s1,"onAnimationEnd");Ar(o1,"onAnimationIteration");Ar(a1,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(l1,"onTransitionEnd");as("onMouseEnter",["mouseout","mouseover"]);as("onMouseLeave",["mouseout","mouseover"]);as("onPointerEnter",["pointerout","pointerover"]);as("onPointerLeave",["pointerout","pointerover"]);pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pi("onBeforeInput",["compositionend","keypress","textInput","paste"]);pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RA=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function uy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kk(r,e,void 0,t),t.currentTarget=null}function c1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;uy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;uy(i,a,u),s=l}}}if(su)throw t=Nf,su=!1,Nf=null,t}function ie(t,e){var n=e[jf];n===void 0&&(n=e[jf]=new Set);var r=t+"__bubble";n.has(r)||(h1(e,t,2,!1),n.add(r))}function Rh(t,e,n){var r=0;e&&(r|=4),h1(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[sl]){t[sl]=!0,v0.forEach(function(n){n!=="selectionchange"&&(RA.has(n)||Rh(n,!1,t),Rh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,Rh("selectionchange",!1,e))}}function h1(t,e,n,r){switch(K0(e)){case 1:var i=jk;break;case 4:i=zk;break;default:i=_p}n=i.bind(null,e,n,t),i=void 0,!xf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ch(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}D0(function(){var u=s,c=mp(n),h=[];e:{var f=u1.get(t);if(f!==void 0){var p=Ep,y=t;switch(t){case"keypress":if(Ul(n)===0)break e;case"keydown":case"keyup":p=rA;break;case"focusin":y="focus",p=Eh;break;case"focusout":y="blur",p=Eh;break;case"beforeblur":case"afterblur":p=Eh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Wk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=oA;break;case s1:case o1:case a1:p=Kk;break;case l1:p=lA;break;case"scroll":p=Bk;break;case"wheel":p=cA;break;case"copy":case"cut":case"paste":p=Yk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zg}var v=(e&4)!==0,_=!v&&t==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var d=u,g;d!==null;){g=d;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=No(d,m),E!=null&&v.push(Uo(d,E,g)))),_)break;d=d.return}0<v.length&&(f=new p(f,y,null,n,c),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Cf&&(y=n.relatedTarget||n.fromElement)&&(Ur(y)||y[Cn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Ur(y):null,y!==null&&(_=mi(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=Xg,E="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=Zg,E="onPointerLeave",m="onPointerEnter",d="pointer"),_=p==null?f:Vi(p),g=y==null?f:Vi(y),f=new v(E,d+"leave",p,n,c),f.target=_,f.relatedTarget=g,E=null,Ur(c)===u&&(v=new v(m,d+"enter",y,n,c),v.target=g,v.relatedTarget=_,E=v),_=E,p&&y)t:{for(v=p,m=y,d=0,g=v;g;g=ki(g))d++;for(g=0,E=m;E;E=ki(E))g++;for(;0<d-g;)v=ki(v),d--;for(;0<g-d;)m=ki(m),g--;for(;d--;){if(v===m||m!==null&&v===m.alternate)break t;v=ki(v),m=ki(m)}v=null}else v=null;p!==null&&cy(h,f,p,v,!1),y!==null&&_!==null&&cy(h,_,y,v,!0)}}e:{if(f=u?Vi(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=yA;else if(ny(f))if(e1)T=EA;else{T=_A;var R=vA}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=wA);if(T&&(T=T(t,u))){Z0(h,T,n,c);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&If(f,"number",f.value)}switch(R=u?Vi(u):window,t){case"focusin":(ny(R)||R.contentEditable==="true")&&(Li=R,Lf=u,mo=null);break;case"focusout":mo=Lf=Li=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,ay(h,n,c);break;case"selectionchange":if(SA)break;case"keydown":case"keyup":ay(h,n,c)}var C;if(Ip)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Di?X0(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Y0&&n.locale!=="ko"&&(Di||x!=="onCompositionStart"?x==="onCompositionEnd"&&Di&&(C=Q0()):(tr=c,wp="value"in tr?tr.value:tr.textContent,Di=!0)),R=cu(u,x),0<R.length&&(x=new Jg(x,t,null,n,c),h.push({event:x,listeners:R}),C?x.data=C:(C=J0(n),C!==null&&(x.data=C)))),(C=fA?dA(t,n):pA(t,n))&&(u=cu(u,"onBeforeInput"),0<u.length&&(c=new Jg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=C))}c1(h,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=No(t,n),s!=null&&r.unshift(Uo(t,s,i)),s=No(t,e),s!=null&&r.push(Uo(t,s,i))),t=t.return}return r}function ki(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=No(n,s),l!=null&&o.unshift(Uo(n,l,a))):i||(l=No(n,s),l!=null&&o.push(Uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var CA=/\r\n?/g,PA=/\u0000|\uFFFD/g;function hy(t){return(typeof t=="string"?t:""+t).replace(CA,`
`).replace(PA,"")}function ol(t,e,n){if(e=hy(e),hy(t)!==e&&n)throw Error(A(425))}function hu(){}var Vf=null,Uf=null;function Ff(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $f=typeof setTimeout=="function"?setTimeout:void 0,xA=typeof clearTimeout=="function"?clearTimeout:void 0,fy=typeof Promise=="function"?Promise:void 0,NA=typeof queueMicrotask=="function"?queueMicrotask:typeof fy<"u"?function(t){return fy.resolve(null).then(t).catch(bA)}:$f;function bA(t){setTimeout(function(){throw t})}function Ph(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Do(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Do(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Cs,Fo="__reactProps$"+Cs,Cn="__reactContainer$"+Cs,jf="__reactEvents$"+Cs,OA="__reactListeners$"+Cs,DA="__reactHandles$"+Cs;function Ur(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dy(t);t!==null;){if(n=t[Zt])return n;t=dy(t)}return e}t=n,n=t.parentNode}return null}function va(t){return t=t[Zt]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function uc(t){return t[Fo]||null}var zf=[],Ui=-1;function Rr(t){return{current:t}}function le(t){0>Ui||(t.current=zf[Ui],zf[Ui]=null,Ui--)}function ne(t,e){Ui++,zf[Ui]=t.current,t.current=e}var vr={},st=Rr(vr),vt=Rr(!1),Jr=vr;function ls(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function _t(t){return t=t.childContextTypes,t!=null}function fu(){le(vt),le(st)}function py(t,e,n){if(st.current!==vr)throw Error(A(168));ne(st,e),ne(vt,n)}function f1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,vk(t)||"Unknown",i));return me({},n,r)}function du(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Jr=st.current,ne(st,t),ne(vt,vt.current),!0}function my(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=f1(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,le(vt),le(st),ne(st,t)):le(vt),ne(vt,n)}var vn=null,cc=!1,xh=!1;function d1(t){vn===null?vn=[t]:vn.push(t)}function LA(t){cc=!0,d1(t)}function Cr(){if(!xh&&vn!==null){xh=!0;var t=0,e=ee;try{var n=vn;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}vn=null,cc=!1}catch(i){throw vn!==null&&(vn=vn.slice(t+1)),U0(gp,Cr),i}finally{ee=e,xh=!1}}return null}var Fi=[],$i=0,pu=null,mu=0,Nt=[],bt=0,Zr=null,_n=1,wn="";function Lr(t,e){Fi[$i++]=mu,Fi[$i++]=pu,pu=t,mu=e}function p1(t,e,n){Nt[bt++]=_n,Nt[bt++]=wn,Nt[bt++]=Zr,Zr=t;var r=_n;t=wn;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var s=32-Wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_n=1<<32-Wt(e)+i|n<<i|r,wn=s+t}else _n=1<<s|n<<i|r,wn=t}function kp(t){t.return!==null&&(Lr(t,1),p1(t,1,0))}function Ap(t){for(;t===pu;)pu=Fi[--$i],Fi[$i]=null,mu=Fi[--$i],Fi[$i]=null;for(;t===Zr;)Zr=Nt[--bt],Nt[bt]=null,wn=Nt[--bt],Nt[bt]=null,_n=Nt[--bt],Nt[bt]=null}var kt=null,Tt=null,he=!1,Bt=null;function m1(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kt=t,Tt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kt=t,Tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:_n,overflow:wn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kt=t,Tt=null,!0):!1;default:return!1}}function Bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hf(t){if(he){var e=Tt;if(e){var n=e;if(!gy(t,e)){if(Bf(t))throw Error(A(418));e=ur(n.nextSibling);var r=kt;e&&gy(t,e)?m1(r,n):(t.flags=t.flags&-4097|2,he=!1,kt=t)}}else{if(Bf(t))throw Error(A(418));t.flags=t.flags&-4097|2,he=!1,kt=t}}}function yy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kt=t}function al(t){if(t!==kt)return!1;if(!he)return yy(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ff(t.type,t.memoizedProps)),e&&(e=Tt)){if(Bf(t))throw g1(),Error(A(418));for(;e;)m1(t,e),e=ur(e.nextSibling)}if(yy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tt=null}}else Tt=kt?ur(t.stateNode.nextSibling):null;return!0}function g1(){for(var t=Tt;t;)t=ur(t.nextSibling)}function us(){Tt=kt=null,he=!1}function Rp(t){Bt===null?Bt=[t]:Bt.push(t)}var MA=Fn.ReactCurrentBatchConfig;function jt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var gu=Rr(null),yu=null,ji=null,Cp=null;function Pp(){Cp=ji=yu=null}function xp(t){var e=gu.current;le(gu),t._currentValue=e}function Wf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zi(t,e){yu=t,Cp=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function Vt(t){var e=t._currentValue;if(Cp!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(yu===null)throw Error(A(308));ji=t,yu.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var Fr=null;function Np(t){Fr===null?Fr=[t]:Fr.push(t)}function y1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Np(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gn=!1;function bp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pn(t,n)}return i=r.interleaved,i===null?(e.next=e,Np(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pn(t,n)}function Fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yp(t,n)}}function vy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vu(t,e,n,r){var i=t.updateQueue;Gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(p,h,f):y,f==null)break e;h=me({},h,f);break e;case 2:Gn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ti|=o,t.lanes=o,t.memoizedState=h}}function _y(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var _1=new y0.Component().refs;function qf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hc={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=fr(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(qt(e,t,i,r),Fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=fr(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,i),e!==null&&(qt(e,t,i,r),Fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=fr(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=cr(t,i,r),e!==null&&(qt(e,t,r,n),Fl(e,t,r))}};function wy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mo(n,r)||!Mo(i,s):!0}function w1(t,e,n){var r=!1,i=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vt(s):(i=_t(e)?Jr:st.current,r=e.contextTypes,s=(r=r!=null)?ls(t,i):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ey(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hc.enqueueReplaceState(e,e.state,null)}function Gf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=_1,bp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vt(s):(s=_t(e)?Jr:st.current,i.context=ls(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hc.enqueueReplaceState(i,i.state,null),vu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===_1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ty(t){var e=t._init;return e(t._payload)}function E1(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=dr(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,E){return d===null||d.tag!==6?(d=Vh(g,m.mode,E),d.return=m,d):(d=i(d,g),d.return=m,d)}function l(m,d,g,E){var T=g.type;return T===Oi?c(m,d,g.props.children,E,g.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qn&&Ty(T)===d.type)?(E=i(d,g.props),E.ref=Ws(m,d,g),E.return=m,E):(E=Wl(g.type,g.key,g.props,null,m.mode,E),E.ref=Ws(m,d,g),E.return=m,E)}function u(m,d,g,E){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Uh(g,m.mode,E),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function c(m,d,g,E,T){return d===null||d.tag!==7?(d=Gr(g,m.mode,E,T),d.return=m,d):(d=i(d,g),d.return=m,d)}function h(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Vh(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Xa:return g=Wl(d.type,d.key,d.props,null,m.mode,g),g.ref=Ws(m,null,d),g.return=m,g;case bi:return d=Uh(d,m.mode,g),d.return=m,d;case qn:var E=d._init;return h(m,E(d._payload),g)}if(Zs(d)||$s(d))return d=Gr(d,m.mode,g,null),d.return=m,d;ll(m,d)}return null}function f(m,d,g,E){var T=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(m,d,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Xa:return g.key===T?l(m,d,g,E):null;case bi:return g.key===T?u(m,d,g,E):null;case qn:return T=g._init,f(m,d,T(g._payload),E)}if(Zs(g)||$s(g))return T!==null?null:c(m,d,g,E,null);ll(m,g)}return null}function p(m,d,g,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(d,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Xa:return m=m.get(E.key===null?g:E.key)||null,l(d,m,E,T);case bi:return m=m.get(E.key===null?g:E.key)||null,u(d,m,E,T);case qn:var R=E._init;return p(m,d,g,R(E._payload),T)}if(Zs(E)||$s(E))return m=m.get(g)||null,c(d,m,E,T,null);ll(d,E)}return null}function y(m,d,g,E){for(var T=null,R=null,C=d,x=d=0,z=null;C!==null&&x<g.length;x++){C.index>x?(z=C,C=null):z=C.sibling;var B=f(m,C,g[x],E);if(B===null){C===null&&(C=z);break}t&&C&&B.alternate===null&&e(m,C),d=s(B,d,x),R===null?T=B:R.sibling=B,R=B,C=z}if(x===g.length)return n(m,C),he&&Lr(m,x),T;if(C===null){for(;x<g.length;x++)C=h(m,g[x],E),C!==null&&(d=s(C,d,x),R===null?T=C:R.sibling=C,R=C);return he&&Lr(m,x),T}for(C=r(m,C);x<g.length;x++)z=p(C,m,x,g[x],E),z!==null&&(t&&z.alternate!==null&&C.delete(z.key===null?x:z.key),d=s(z,d,x),R===null?T=z:R.sibling=z,R=z);return t&&C.forEach(function(Ft){return e(m,Ft)}),he&&Lr(m,x),T}function v(m,d,g,E){var T=$s(g);if(typeof T!="function")throw Error(A(150));if(g=T.call(g),g==null)throw Error(A(151));for(var R=T=null,C=d,x=d=0,z=null,B=g.next();C!==null&&!B.done;x++,B=g.next()){C.index>x?(z=C,C=null):z=C.sibling;var Ft=f(m,C,B.value,E);if(Ft===null){C===null&&(C=z);break}t&&C&&Ft.alternate===null&&e(m,C),d=s(Ft,d,x),R===null?T=Ft:R.sibling=Ft,R=Ft,C=z}if(B.done)return n(m,C),he&&Lr(m,x),T;if(C===null){for(;!B.done;x++,B=g.next())B=h(m,B.value,E),B!==null&&(d=s(B,d,x),R===null?T=B:R.sibling=B,R=B);return he&&Lr(m,x),T}for(C=r(m,C);!B.done;x++,B=g.next())B=p(C,m,x,B.value,E),B!==null&&(t&&B.alternate!==null&&C.delete(B.key===null?x:B.key),d=s(B,d,x),R===null?T=B:R.sibling=B,R=B);return t&&C.forEach(function(Us){return e(m,Us)}),he&&Lr(m,x),T}function _(m,d,g,E){if(typeof g=="object"&&g!==null&&g.type===Oi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Xa:e:{for(var T=g.key,R=d;R!==null;){if(R.key===T){if(T=g.type,T===Oi){if(R.tag===7){n(m,R.sibling),d=i(R,g.props.children),d.return=m,m=d;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===qn&&Ty(T)===R.type){n(m,R.sibling),d=i(R,g.props),d.ref=Ws(m,R,g),d.return=m,m=d;break e}n(m,R);break}else e(m,R);R=R.sibling}g.type===Oi?(d=Gr(g.props.children,m.mode,E,g.key),d.return=m,m=d):(E=Wl(g.type,g.key,g.props,null,m.mode,E),E.ref=Ws(m,d,g),E.return=m,m=E)}return o(m);case bi:e:{for(R=g.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=Uh(g,m.mode,E),d.return=m,m=d}return o(m);case qn:return R=g._init,_(m,d,R(g._payload),E)}if(Zs(g))return y(m,d,g,E);if($s(g))return v(m,d,g,E);ll(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,g),d.return=m,m=d):(n(m,d),d=Vh(g,m.mode,E),d.return=m,m=d),o(m)):n(m,d)}return _}var cs=E1(!0),T1=E1(!1),_a={},ln=Rr(_a),$o=Rr(_a),jo=Rr(_a);function $r(t){if(t===_a)throw Error(A(174));return t}function Op(t,e){switch(ne(jo,e),ne($o,t),ne(ln,_a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:kf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=kf(e,t)}le(ln),ne(ln,e)}function hs(){le(ln),le($o),le(jo)}function I1(t){$r(jo.current);var e=$r(ln.current),n=kf(e,t.type);e!==n&&(ne($o,t),ne(ln,n))}function Dp(t){$o.current===t&&(le(ln),le($o))}var de=Rr(0);function _u(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nh=[];function Lp(){for(var t=0;t<Nh.length;t++)Nh[t]._workInProgressVersionPrimary=null;Nh.length=0}var $l=Fn.ReactCurrentDispatcher,bh=Fn.ReactCurrentBatchConfig,ei=0,pe=null,xe=null,Le=null,wu=!1,go=!1,zo=0,VA=0;function Qe(){throw Error(A(321))}function Mp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Vp(t,e,n,r,i,s){if(ei=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,$l.current=t===null||t.memoizedState===null?jA:zA,t=n(r,i),go){s=0;do{if(go=!1,zo=0,25<=s)throw Error(A(301));s+=1,Le=xe=null,e.updateQueue=null,$l.current=BA,t=n(r,i)}while(go)}if($l.current=Eu,e=xe!==null&&xe.next!==null,ei=0,Le=xe=pe=null,wu=!1,e)throw Error(A(300));return t}function Up(){var t=zo!==0;return zo=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?pe.memoizedState=Le=t:Le=Le.next=t,Le}function Ut(){if(xe===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Le===null?pe.memoizedState:Le.next;if(e!==null)Le=e,xe=t;else{if(t===null)throw Error(A(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Le===null?pe.memoizedState=Le=t:Le=Le.next=t}return Le}function Bo(t,e){return typeof e=="function"?e(t):e}function Oh(t){var e=Ut(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ei&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,pe.lanes|=c,ti|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Gt(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pe.lanes|=s,ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dh(t){var e=Ut(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function S1(){}function k1(t,e){var n=pe,r=Ut(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,Fp(C1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Ho(9,R1.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(A(349));ei&30||A1(n,e,i)}return i}function A1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function R1(t,e,n,r){e.value=n,e.getSnapshot=r,P1(e)&&x1(t)}function C1(t,e,n){return n(function(){P1(e)&&x1(t)})}function P1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function x1(t){var e=Pn(t,1);e!==null&&qt(e,t,1,-1)}function Iy(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},e.queue=t,t=t.dispatch=$A.bind(null,pe,t),[e.memoizedState,t]}function Ho(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function N1(){return Ut().memoizedState}function jl(t,e,n,r){var i=Jt();pe.flags|=t,i.memoizedState=Ho(1|e,n,void 0,r===void 0?null:r)}function fc(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&Mp(r,o.deps)){i.memoizedState=Ho(e,n,s,r);return}}pe.flags|=t,i.memoizedState=Ho(1|e,n,s,r)}function Sy(t,e){return jl(8390656,8,t,e)}function Fp(t,e){return fc(2048,8,t,e)}function b1(t,e){return fc(4,2,t,e)}function O1(t,e){return fc(4,4,t,e)}function D1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function L1(t,e,n){return n=n!=null?n.concat([t]):null,fc(4,4,D1.bind(null,e,t),n)}function $p(){}function M1(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function V1(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function U1(t,e,n){return ei&21?(Gt(n,e)||(n=j0(),pe.lanes|=n,ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function UA(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=bh.transition;bh.transition={};try{t(!1),e()}finally{ee=n,bh.transition=r}}function F1(){return Ut().memoizedState}function FA(t,e,n){var r=fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$1(t))j1(e,n);else if(n=y1(t,e,n,r),n!==null){var i=ht();qt(n,t,r,i),z1(n,e,r)}}function $A(t,e,n){var r=fr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($1(t))j1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Gt(a,o)){var l=e.interleaved;l===null?(i.next=i,Np(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=y1(t,e,i,r),n!==null&&(i=ht(),qt(n,t,r,i),z1(n,e,r))}}function $1(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function j1(t,e){go=wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,yp(t,n)}}var Eu={readContext:Vt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},jA={readContext:Vt,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Vt,useEffect:Sy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jl(4194308,4,D1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return jl(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=FA.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:Iy,useDebugValue:$p,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=Iy(!1),e=t[0];return t=UA.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=Jt();if(he){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),Me===null)throw Error(A(349));ei&30||A1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sy(C1.bind(null,r,s,t),[t]),r.flags|=2048,Ho(9,R1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jt(),e=Me.identifierPrefix;if(he){var n=wn,r=_n;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zA={readContext:Vt,useCallback:M1,useContext:Vt,useEffect:Fp,useImperativeHandle:L1,useInsertionEffect:b1,useLayoutEffect:O1,useMemo:V1,useReducer:Oh,useRef:N1,useState:function(){return Oh(Bo)},useDebugValue:$p,useDeferredValue:function(t){var e=Ut();return U1(e,xe.memoizedState,t)},useTransition:function(){var t=Oh(Bo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:S1,useSyncExternalStore:k1,useId:F1,unstable_isNewReconciler:!1},BA={readContext:Vt,useCallback:M1,useContext:Vt,useEffect:Fp,useImperativeHandle:L1,useInsertionEffect:b1,useLayoutEffect:O1,useMemo:V1,useReducer:Dh,useRef:N1,useState:function(){return Dh(Bo)},useDebugValue:$p,useDeferredValue:function(t){var e=Ut();return xe===null?e.memoizedState=t:U1(e,xe.memoizedState,t)},useTransition:function(){var t=Dh(Bo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:S1,useSyncExternalStore:k1,useId:F1,unstable_isNewReconciler:!1};function fs(t,e){try{var n="",r=e;do n+=yk(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Lh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var HA=typeof WeakMap=="function"?WeakMap:Map;function B1(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Iu||(Iu=!0,id=r),Kf(t,e)},n}function H1(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Kf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kf(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ky(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new HA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=iR.bind(null,t,e,n),e.then(t,t))}function Ay(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ry(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var WA=Fn.ReactCurrentOwner,yt=!1;function ut(t,e,n,r){e.child=t===null?T1(e,null,n,r):cs(e,t.child,n,r)}function Cy(t,e,n,r,i){n=n.render;var s=e.ref;return Zi(e,i),r=Vp(t,e,n,r,s,i),n=Up(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(he&&n&&kp(e),e.flags|=1,ut(t,e,r,i),e.child)}function Py(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Kp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,W1(t,e,s,r,i)):(t=Wl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mo,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function W1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Mo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,xn(t,e,i)}return Qf(t,e,n,r,i)}function q1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Bi,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(Bi,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ne(Bi,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ne(Bi,Et),Et|=r;return ut(t,e,i,n),e.child}function G1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qf(t,e,n,r,i){var s=_t(n)?Jr:st.current;return s=ls(e,s),Zi(e,i),n=Vp(t,e,n,r,s,i),r=Up(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(he&&r&&kp(e),e.flags|=1,ut(t,e,n,i),e.child)}function xy(t,e,n,r,i){if(_t(n)){var s=!0;du(e)}else s=!1;if(Zi(e,i),e.stateNode===null)zl(t,e),w1(e,n,r),Gf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vt(u):(u=_t(n)?Jr:st.current,u=ls(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ey(e,o,r,u),Gn=!1;var f=e.memoizedState;o.state=f,vu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||vt.current||Gn?(typeof c=="function"&&(qf(e,n,c,r),l=e.memoizedState),(a=Gn||wy(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,v1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:jt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vt(l):(l=_t(n)?Jr:st.current,l=ls(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Ey(e,o,r,l),Gn=!1,f=e.memoizedState,o.state=f,vu(e,r,o,i);var y=e.memoizedState;a!==h||f!==y||vt.current||Gn?(typeof p=="function"&&(qf(e,n,p,r),y=e.memoizedState),(u=Gn||wy(e,n,u,r,f,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Yf(t,e,n,r,s,i)}function Yf(t,e,n,r,i,s){G1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&my(e,n,!1),xn(t,e,s);r=e.stateNode,WA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=cs(e,t.child,null,s),e.child=cs(e,null,a,s)):ut(t,e,a,s),e.memoizedState=r.state,i&&my(e,n,!0),e.child}function K1(t){var e=t.stateNode;e.pendingContext?py(t,e.pendingContext,e.pendingContext!==e.context):e.context&&py(t,e.context,!1),Op(t,e.containerInfo)}function Ny(t,e,n,r,i){return us(),Rp(i),e.flags|=256,ut(t,e,n,r),e.child}var Xf={dehydrated:null,treeContext:null,retryLane:0};function Jf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Q1(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ne(de,i&1),t===null)return Hf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mc(o,r,0,null),t=Gr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Jf(n),e.memoizedState=Xf,t):jp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=dr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=dr(a,s):(s=Gr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Jf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Xf,r}return s=t.child,t=s.sibling,r=dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function jp(t,e){return e=mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&Rp(r),cs(e,t.child,null,n),t=jp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Lh(Error(A(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=mc({mode:"visible",children:r.children},i,0,null),s=Gr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&cs(e,t.child,null,o),e.child.memoizedState=Jf(o),e.memoizedState=Xf,s);if(!(e.mode&1))return ul(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Lh(s,r,void 0),ul(t,e,o,r)}if(a=(o&t.childLanes)!==0,yt||a){if(r=Me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pn(t,i),qt(r,t,i,-1))}return Gp(),r=Lh(Error(A(421))),ul(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Tt=ur(i.nextSibling),kt=e,he=!0,Bt=null,t!==null&&(Nt[bt++]=_n,Nt[bt++]=wn,Nt[bt++]=Zr,_n=t.id,wn=t.overflow,Zr=e),e=jp(e,r.children),e.flags|=4096,e)}function by(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wf(t.return,e,n)}function Mh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Y1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&by(t,n,e);else if(t.tag===19)by(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_u(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Mh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_u(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Mh(e,!0,n,null,s);break;case"together":Mh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GA(t,e,n){switch(e.tag){case 3:K1(e),us();break;case 5:I1(e);break;case 1:_t(e.type)&&du(e);break;case 4:Op(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ne(gu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?Q1(t,e,n):(ne(de,de.current&1),t=xn(t,e,n),t!==null?t.sibling:null);ne(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Y1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,q1(t,e,n)}return xn(t,e,n)}var X1,Zf,J1,Z1;X1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zf=function(){};J1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$r(ln.current);var s=null;switch(n){case"input":i=Ef(t,i),r=Ef(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Sf(t,i),r=Sf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hu)}Af(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Po.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Po.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Z1=function(t,e,n,r){n!==r&&(e.flags|=4)};function qs(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function KA(t,e,n){var r=e.pendingProps;switch(Ap(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return _t(e.type)&&fu(),Ye(e),null;case 3:return r=e.stateNode,hs(),le(vt),le(st),Lp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bt!==null&&(ad(Bt),Bt=null))),Zf(t,e),Ye(e),null;case 5:Dp(e);var i=$r(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)J1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return Ye(e),null}if(t=$r(ln.current),al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zt]=e,r[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<to.length;i++)ie(to[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":jg(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":Bg(r,s),ie("invalid",r)}Af(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",""+a]):Po.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Ja(r),zg(r,s,!0);break;case"textarea":Ja(r),Hg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zt]=e,t[Fo]=r,X1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rf(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<to.length;i++)ie(to[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":jg(t,r),i=Ef(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ie("invalid",t);break;case"textarea":Bg(t,r),i=Sf(t,r),ie("invalid",t);break;default:i=r}Af(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?P0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&R0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xo(t,l):typeof l=="number"&&xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Po.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ie("scroll",t):l!=null&&hp(t,s,l,o))}switch(n){case"input":Ja(t),zg(t,r,!1);break;case"textarea":Ja(t),Hg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)Z1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=$r(jo.current),$r(ln.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(s=r.nodeValue!==n)&&(t=kt,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return Ye(e),null;case 13:if(le(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&Tt!==null&&e.mode&1&&!(e.flags&128))g1(),us(),e.flags|=98560,s=!1;else if(s=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Zt]=e}else us(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else Bt!==null&&(ad(Bt),Bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?Ne===0&&(Ne=3):Gp())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return hs(),Zf(t,e),t===null&&Vo(e.stateNode.containerInfo),Ye(e),null;case 10:return xp(e.type._context),Ye(e),null;case 17:return _t(e.type)&&fu(),Ye(e),null;case 19:if(le(de),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)qs(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_u(t),o!==null){for(e.flags|=128,qs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>ds&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304)}else{if(!r)if(t=_u(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!he)return Ye(e),null}else 2*Ie()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,r=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=de.current,ne(de,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return qp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function QA(t,e){switch(Ap(e),e.tag){case 1:return _t(e.type)&&fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hs(),le(vt),le(st),Lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dp(e),null;case 13:if(le(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));us()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(de),null;case 4:return hs(),null;case 10:return xp(e.type._context),null;case 22:case 23:return qp(),null;case 24:return null;default:return null}}var cl=!1,Ze=!1,YA=typeof WeakSet=="function"?WeakSet:Set,b=null;function zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function ed(t,e,n){try{n()}catch(r){ve(t,e,r)}}var Oy=!1;function XA(t,e){if(Vf=lu,t=r1(),Sp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uf={focusedElem:t,selectionRange:n},lu=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,_=y.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:jt(e.type,v),_);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(E){ve(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return y=Oy,Oy=!1,y}function yo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ed(e,n,s)}i=i.next}while(i!==r)}}function dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ew(t){var e=t.alternate;e!==null&&(t.alternate=null,ew(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[Fo],delete e[jf],delete e[OA],delete e[DA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tw(t){return t.tag===5||t.tag===3||t.tag===4}function Dy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hu));else if(r!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}var $e=null,zt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)nw(t,e,n),n=n.sibling}function nw(t,e,n){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:Ze||zi(n,e);case 6:var r=$e,i=zt;$e=null,Bn(t,e,n),$e=r,zt=i,$e!==null&&(zt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(zt?(t=$e,n=n.stateNode,t.nodeType===8?Ph(t.parentNode,n):t.nodeType===1&&Ph(t,n),Do(t)):Ph($e,n.stateNode));break;case 4:r=$e,i=zt,$e=n.stateNode.containerInfo,zt=!0,Bn(t,e,n),$e=r,zt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ed(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!Ze&&(zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,Bn(t,e,n),Ze=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function Ly(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YA),e.forEach(function(r){var i=oR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,zt=!1;break e;case 3:$e=a.stateNode.containerInfo,zt=!0;break e;case 4:$e=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if($e===null)throw Error(A(160));nw(s,o,i),$e=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rw(e,t),e=e.sibling}function rw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),Xt(t),r&4){try{yo(3,t,t.return),dc(3,t)}catch(v){ve(t,t.return,v)}try{yo(5,t,t.return)}catch(v){ve(t,t.return,v)}}break;case 1:$t(e,t),Xt(t),r&512&&n!==null&&zi(n,n.return);break;case 5:if($t(e,t),Xt(t),r&512&&n!==null&&zi(n,n.return),t.flags&32){var i=t.stateNode;try{xo(i,"")}catch(v){ve(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&S0(i,s),Rf(a,o);var u=Rf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?P0(i,h):c==="dangerouslySetInnerHTML"?R0(i,h):c==="children"?xo(i,h):hp(i,c,h,u)}switch(a){case"input":Tf(i,s);break;case"textarea":k0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Qi(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qi(i,!!s.multiple,s.defaultValue,!0):Qi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fo]=s}catch(v){ve(t,t.return,v)}}break;case 6:if($t(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ve(t,t.return,v)}}break;case 3:if($t(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Do(e.containerInfo)}catch(v){ve(t,t.return,v)}break;case 4:$t(e,t),Xt(t);break;case 13:$t(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Hp=Ie())),r&4&&Ly(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(u=Ze)||c,$t(e,t),Ze=u):$t(e,t),Xt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(b=t,c=t.child;c!==null;){for(h=b=c;b!==null;){switch(f=b,p=f.child,f.tag){case 0:case 11:case 14:case 15:yo(4,f,f.return);break;case 1:zi(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ve(r,n,v)}}break;case 5:zi(f,f.return);break;case 22:if(f.memoizedState!==null){Vy(h);continue}}p!==null?(p.return=f,b=p):Vy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=C0("display",o))}catch(v){ve(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ve(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$t(e,t),Xt(t),r&4&&Ly(t);break;case 21:break;default:$t(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tw(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(xo(i,""),r.flags&=-33);var s=Dy(t);rd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Dy(t);nd(t,a,o);break;default:throw Error(A(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JA(t,e,n){b=t,iw(t)}function iw(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ze;a=cl;var u=Ze;if(cl=o,(Ze=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?Uy(i):l!==null?(l.return=o,b=l):Uy(i);for(;s!==null;)b=s,iw(s),s=s.sibling;b=i,cl=a,Ze=u}My(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):My(t)}}function My(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||dc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_y(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_y(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Do(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}Ze||e.flags&512&&td(e)}catch(f){ve(e,e.return,f)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function Vy(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function Uy(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{dc(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ve(e,i,l)}}var s=e.return;try{td(e)}catch(l){ve(e,s,l)}break;case 5:var o=e.return;try{td(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var ZA=Math.ceil,Tu=Fn.ReactCurrentDispatcher,zp=Fn.ReactCurrentOwner,Lt=Fn.ReactCurrentBatchConfig,J=0,Me=null,Re=null,We=0,Et=0,Bi=Rr(0),Ne=0,Wo=null,ti=0,pc=0,Bp=0,vo=null,mt=null,Hp=0,ds=1/0,yn=null,Iu=!1,id=null,hr=null,hl=!1,nr=null,Su=0,_o=0,sd=null,Bl=-1,Hl=0;function ht(){return J&6?Ie():Bl!==-1?Bl:Bl=Ie()}function fr(t){return t.mode&1?J&2&&We!==0?We&-We:MA.transition!==null?(Hl===0&&(Hl=j0()),Hl):(t=ee,t!==0||(t=window.event,t=t===void 0?16:K0(t.type)),t):1}function qt(t,e,n,r){if(50<_o)throw _o=0,sd=null,Error(A(185));ga(t,n,r),(!(J&2)||t!==Me)&&(t===Me&&(!(J&2)&&(pc|=n),Ne===4&&Qn(t,We)),wt(t,r),n===1&&J===0&&!(e.mode&1)&&(ds=Ie()+500,cc&&Cr()))}function wt(t,e){var n=t.callbackNode;Mk(t,e);var r=au(t,t===Me?We:0);if(r===0)n!==null&&Gg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gg(n),e===1)t.tag===0?LA(Fy.bind(null,t)):d1(Fy.bind(null,t)),NA(function(){!(J&6)&&Cr()}),n=null;else{switch(z0(r)){case 1:n=gp;break;case 4:n=F0;break;case 16:n=ou;break;case 536870912:n=$0;break;default:n=ou}n=fw(n,sw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sw(t,e){if(Bl=-1,Hl=0,J&6)throw Error(A(327));var n=t.callbackNode;if(es()&&t.callbackNode!==n)return null;var r=au(t,t===Me?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ku(t,r);else{e=r;var i=J;J|=2;var s=aw();(Me!==t||We!==e)&&(yn=null,ds=Ie()+500,qr(t,e));do try{nR();break}catch(a){ow(t,a)}while(!0);Pp(),Tu.current=s,J=i,Re!==null?e=0:(Me=null,We=0,e=Ne)}if(e!==0){if(e===2&&(i=bf(t),i!==0&&(r=i,e=od(t,i))),e===1)throw n=Wo,qr(t,0),Qn(t,r),wt(t,Ie()),n;if(e===6)Qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!eR(i)&&(e=ku(t,r),e===2&&(s=bf(t),s!==0&&(r=s,e=od(t,s))),e===1))throw n=Wo,qr(t,0),Qn(t,r),wt(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Mr(t,mt,yn);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=Hp+500-Ie(),10<e)){if(au(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$f(Mr.bind(null,t,mt,yn),e);break}Mr(t,mt,yn);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ZA(r/1960))-r,10<r){t.timeoutHandle=$f(Mr.bind(null,t,mt,yn),r);break}Mr(t,mt,yn);break;case 5:Mr(t,mt,yn);break;default:throw Error(A(329))}}}return wt(t,Ie()),t.callbackNode===n?sw.bind(null,t):null}function od(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=ku(t,e),t!==2&&(e=mt,mt=n,e!==null&&ad(e)),t}function ad(t){mt===null?mt=t:mt.push.apply(mt,t)}function eR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~Bp,e&=~pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function Fy(t){if(J&6)throw Error(A(327));es();var e=au(t,0);if(!(e&1))return wt(t,Ie()),null;var n=ku(t,e);if(t.tag!==0&&n===2){var r=bf(t);r!==0&&(e=r,n=od(t,r))}if(n===1)throw n=Wo,qr(t,0),Qn(t,e),wt(t,Ie()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,mt,yn),wt(t,Ie()),null}function Wp(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(ds=Ie()+500,cc&&Cr())}}function ni(t){nr!==null&&nr.tag===0&&!(J&6)&&es();var e=J;J|=1;var n=Lt.transition,r=ee;try{if(Lt.transition=null,ee=1,t)return t()}finally{ee=r,Lt.transition=n,J=e,!(J&6)&&Cr()}}function qp(){Et=Bi.current,le(Bi)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xA(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(Ap(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fu();break;case 3:hs(),le(vt),le(st),Lp();break;case 5:Dp(r);break;case 4:hs();break;case 13:le(de);break;case 19:le(de);break;case 10:xp(r.type._context);break;case 22:case 23:qp()}n=n.return}if(Me=t,Re=t=dr(t.current,null),We=Et=e,Ne=0,Wo=null,Bp=pc=ti=0,mt=vo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fr=null}return t}function ow(t,e){do{var n=Re;try{if(Pp(),$l.current=Eu,wu){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wu=!1}if(ei=0,Le=xe=pe=null,go=!1,zo=0,zp.current=null,n===null||n.return===null){Ne=1,Wo=e,Re=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=We,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Ay(o);if(p!==null){p.flags&=-257,Ry(p,o,a,s,e),p.mode&1&&ky(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){ky(s,u,e),Gp();break e}l=Error(A(426))}}else if(he&&a.mode&1){var _=Ay(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ry(_,o,a,s,e),Rp(fs(l,a));break e}}s=l=fs(l,a),Ne!==4&&(Ne=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=B1(s,l,e);vy(s,m);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(hr===null||!hr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=H1(s,a,e);vy(s,E);break e}}s=s.return}while(s!==null)}uw(n)}catch(T){e=T,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function aw(){var t=Tu.current;return Tu.current=Eu,t===null?Eu:t}function Gp(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Me===null||!(ti&268435455)&&!(pc&268435455)||Qn(Me,We)}function ku(t,e){var n=J;J|=2;var r=aw();(Me!==t||We!==e)&&(yn=null,qr(t,e));do try{tR();break}catch(i){ow(t,i)}while(!0);if(Pp(),J=n,Tu.current=r,Re!==null)throw Error(A(261));return Me=null,We=0,Ne}function tR(){for(;Re!==null;)lw(Re)}function nR(){for(;Re!==null&&!Rk();)lw(Re)}function lw(t){var e=hw(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?uw(t):Re=e,zp.current=null}function uw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QA(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Re=null;return}}else if(n=KA(n,e,Et),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);Ne===0&&(Ne=5)}function Mr(t,e,n){var r=ee,i=Lt.transition;try{Lt.transition=null,ee=1,rR(t,e,n,r)}finally{Lt.transition=i,ee=r}return null}function rR(t,e,n,r){do es();while(nr!==null);if(J&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Vk(t,s),t===Me&&(Re=Me=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,fw(ou,function(){return es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=ee;ee=1;var a=J;J|=4,zp.current=null,XA(t,n),rw(n,t),IA(Uf),lu=!!Vf,Uf=Vf=null,t.current=n,JA(n),Ck(),J=a,ee=o,Lt.transition=s}else t.current=n;if(hl&&(hl=!1,nr=t,Su=i),s=t.pendingLanes,s===0&&(hr=null),Nk(n.stateNode),wt(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Iu)throw Iu=!1,t=id,id=null,t;return Su&1&&t.tag!==0&&es(),s=t.pendingLanes,s&1?t===sd?_o++:(_o=0,sd=t):_o=0,Cr(),null}function es(){if(nr!==null){var t=z0(Su),e=Lt.transition,n=ee;try{if(Lt.transition=null,ee=16>t?16:t,nr===null)var r=!1;else{if(t=nr,nr=null,Su=0,J&6)throw Error(A(331));var i=J;for(J|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:yo(8,c,s)}var h=c.child;if(h!==null)h.return=c,b=h;else for(;b!==null;){c=b;var f=c.sibling,p=c.return;if(ew(c),c===u){b=null;break}if(f!==null){f.return=p,b=f;break}b=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,b=m;break e}b=s.return}}var d=t.current;for(b=d;b!==null;){o=b;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,b=g;else e:for(o=d;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:dc(9,a)}}catch(T){ve(a,a.return,T)}if(a===o){b=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,b=E;break e}b=a.return}}if(J=i,Cr(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(sc,t)}catch{}r=!0}return r}finally{ee=n,Lt.transition=e}}return!1}function $y(t,e,n){e=fs(n,e),e=B1(t,e,1),t=cr(t,e,1),e=ht(),t!==null&&(ga(t,1,e),wt(t,e))}function ve(t,e,n){if(t.tag===3)$y(t,t,n);else for(;e!==null;){if(e.tag===3){$y(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=fs(n,t),t=H1(e,t,1),e=cr(e,t,1),t=ht(),e!==null&&(ga(e,1,t),wt(e,t));break}}e=e.return}}function iR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(We&n)===n&&(Ne===4||Ne===3&&(We&130023424)===We&&500>Ie()-Hp?qr(t,0):Bp|=n),wt(t,e)}function cw(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=ht();t=Pn(t,e),t!==null&&(ga(t,e,n),wt(t,n))}function sR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cw(t,n)}function oR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),cw(t,n)}var hw;hw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,GA(t,e,n);yt=!!(t.flags&131072)}else yt=!1,he&&e.flags&1048576&&p1(e,mu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zl(t,e),t=e.pendingProps;var i=ls(e,st.current);Zi(e,n),i=Vp(null,e,r,t,i,n);var s=Up();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_t(r)?(s=!0,du(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bp(e),i.updater=hc,e.stateNode=i,i._reactInternals=e,Gf(e,r,t,n),e=Yf(null,e,r,!0,s,n)):(e.tag=0,he&&s&&kp(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lR(r),t=jt(r,t),i){case 0:e=Qf(null,e,r,t,n);break e;case 1:e=xy(null,e,r,t,n);break e;case 11:e=Cy(null,e,r,t,n);break e;case 14:e=Py(null,e,r,jt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Qf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),xy(t,e,r,i,n);case 3:e:{if(K1(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,v1(t,e),vu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=fs(Error(A(423)),e),e=Ny(t,e,r,n,i);break e}else if(r!==i){i=fs(Error(A(424)),e),e=Ny(t,e,r,n,i);break e}else for(Tt=ur(e.stateNode.containerInfo.firstChild),kt=e,he=!0,Bt=null,n=T1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(us(),r===i){e=xn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return I1(e),t===null&&Hf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ff(r,i)?o=null:s!==null&&Ff(r,s)&&(e.flags|=32),G1(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&Hf(e),null;case 13:return Q1(t,e,n);case 4:return Op(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=cs(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Cy(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ne(gu,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!vt.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zi(e,n),i=Vt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),Py(t,e,r,i,n);case 15:return W1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),zl(t,e),e.tag=1,_t(r)?(t=!0,du(e)):t=!1,Zi(e,n),w1(e,r,i),Gf(e,r,i,n),Yf(null,e,r,!0,t,n);case 19:return Y1(t,e,n);case 22:return q1(t,e,n)}throw Error(A(156,e.tag))};function fw(t,e){return U0(t,e)}function aR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new aR(t,e,n,r)}function Kp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lR(t){if(typeof t=="function")return Kp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dp)return 11;if(t===pp)return 14}return 2}function dr(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Kp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Oi:return Gr(n.children,i,s,e);case fp:o=8,i|=8;break;case yf:return t=Dt(12,n,e,i|2),t.elementType=yf,t.lanes=s,t;case vf:return t=Dt(13,n,e,i),t.elementType=vf,t.lanes=s,t;case _f:return t=Dt(19,n,e,i),t.elementType=_f,t.lanes=s,t;case E0:return mc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _0:o=10;break e;case w0:o=9;break e;case dp:o=11;break e;case pp:o=14;break e;case qn:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Gr(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function mc(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=E0,t.lanes=n,t.stateNode={isHidden:!1},t}function Vh(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function Uh(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vh(0),this.expirationTimes=vh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Qp(t,e,n,r,i,s,o,a,l){return t=new uR(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bp(s),t}function cR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function dw(t){if(!t)return vr;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(_t(n))return f1(t,n,e)}return e}function pw(t,e,n,r,i,s,o,a,l){return t=Qp(n,r,!0,t,i,s,o,a,l),t.context=dw(null),n=t.current,r=ht(),i=fr(n),s=Sn(r,i),s.callback=e??null,cr(n,s,i),t.current.lanes=i,ga(t,i,r),wt(t,r),t}function gc(t,e,n,r){var i=e.current,s=ht(),o=fr(i);return n=dw(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=cr(i,e,o),t!==null&&(qt(t,i,o,s),Fl(t,i,o)),o}function Au(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yp(t,e){jy(t,e),(t=t.alternate)&&jy(t,e)}function hR(){return null}var mw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Xp(t){this._internalRoot=t}yc.prototype.render=Xp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));gc(t,e,null,null)};yc.prototype.unmount=Xp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ni(function(){gc(null,t,null,null)}),e[Cn]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=W0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&G0(t)}};function Jp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zy(){}function fR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Au(o);s.call(u)}}var o=pw(e,r,t,0,null,!1,!1,"",zy);return t._reactRootContainer=o,t[Cn]=o.current,Vo(t.nodeType===8?t.parentNode:t),ni(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Au(l);a.call(u)}}var l=Qp(t,0,!1,null,null,!1,!1,"",zy);return t._reactRootContainer=l,t[Cn]=l.current,Vo(t.nodeType===8?t.parentNode:t),ni(function(){gc(e,l,n,r)}),l}function _c(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Au(o);a.call(l)}}gc(e,o,t,i)}else o=fR(n,e,t,i,r);return Au(o)}B0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(yp(e,n|1),wt(e,Ie()),!(J&6)&&(ds=Ie()+500,Cr()))}break;case 13:ni(function(){var r=Pn(t,1);if(r!==null){var i=ht();qt(r,t,1,i)}}),Yp(t,1)}};vp=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=ht();qt(e,t,134217728,n)}Yp(t,134217728)}};H0=function(t){if(t.tag===13){var e=fr(t),n=Pn(t,e);if(n!==null){var r=ht();qt(n,t,e,r)}Yp(t,e)}};W0=function(){return ee};q0=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Pf=function(t,e,n){switch(e){case"input":if(Tf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=uc(r);if(!i)throw Error(A(90));I0(r),Tf(r,i)}}}break;case"textarea":k0(t,n);break;case"select":e=n.value,e!=null&&Qi(t,!!n.multiple,e,!1)}};b0=Wp;O0=ni;var dR={usingClientEntryPoint:!1,Events:[va,Vi,uc,x0,N0,Wp]},Gs={findFiberByHostInstance:Ur,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pR={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=M0(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||hR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{sc=fl.inject(pR),an=fl}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dR;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jp(e))throw Error(A(200));return cR(t,e,null,n)};Ct.createRoot=function(t,e){if(!Jp(t))throw Error(A(299));var n=!1,r="",i=mw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Qp(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,Vo(t.nodeType===8?t.parentNode:t),new Xp(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=M0(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return ni(t)};Ct.hydrate=function(t,e,n){if(!vc(e))throw Error(A(200));return _c(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Jp(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pw(e,null,t,1,n??null,i,!1,s,o),t[Cn]=e.current,Vo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new yc(e)};Ct.render=function(t,e,n){if(!vc(e))throw Error(A(200));return _c(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!vc(t))throw Error(A(40));return t._reactRootContainer?(ni(function(){_c(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Wp;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!vc(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return _c(t,e,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";function gw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gw)}catch(t){console.error(t)}}gw(),p0.exports=Ct;var mR=p0.exports,By=mR;mf.createRoot=By.createRoot,mf.hydrateRoot=By.hydrateRoot;var Hy={};/**
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
 */const yw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[h],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new yR;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vR=function(t){const e=yw(t);return vw.encodeByteArray(e,!0)},Ru=function(t){return vR(t).replace(/\./g,"")},_w=function(t){try{return vw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _R(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wR=()=>_R().__FIREBASE_DEFAULTS__,ER=()=>{if(typeof process>"u"||typeof Hy>"u")return;const t=Hy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},TR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_w(t[1]);return e&&JSON.parse(e)},Zp=()=>{try{return wR()||ER()||TR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ww=t=>{var e,n;return(n=(e=Zp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ew=t=>{const e=ww(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Tw=()=>{var t;return(t=Zp())===null||t===void 0?void 0:t.config},Iw=t=>{var e;return(e=Zp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class IR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Sw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ru(JSON.stringify(n)),Ru(JSON.stringify(o)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function kR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RR(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function CR(){try{return typeof indexedDB=="object"}catch{return!1}}function PR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const xR="FirebaseError";class gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xR,Object.setPrototypeOf(this,gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wa.prototype.create)}}class wa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?NR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new gn(i,a,r)}}function NR(t,e){return t.replace(bR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bR=/\{\$([^}]+)}/g;function OR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Wy(s)&&Wy(o)){if(!Cu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wy(t){return t!==null&&typeof t=="object"}/**
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
 */function Ea(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function no(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DR(t,e){const n=new LR(t,e);return n.subscribe.bind(n)}class LR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fh),i.error===void 0&&(i.error=Fh),i.complete===void 0&&(i.complete=Fh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fh(){}/**
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
 */function fe(t){return t&&t._delegate?t._delegate:t}class _r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class VR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FR(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UR(t){return t===Vr?void 0:t}function FR(t){return t.instantiationMode==="EAGER"}/**
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
 */class $R{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new VR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const jR={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},zR=Y.INFO,BR={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},HR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=BR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class em{constructor(e){this.name=e,this._logLevel=zR,this._logHandler=HR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const WR=(t,e)=>e.some(n=>t instanceof n);let qy,Gy;function qR(){return qy||(qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GR(){return Gy||(Gy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kw=new WeakMap,ld=new WeakMap,Aw=new WeakMap,$h=new WeakMap,tm=new WeakMap;function KR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(pr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kw.set(n,t)}).catch(()=>{}),tm.set(e,t),e}function QR(t){if(ld.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ld.set(t,e)}let ud={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ld.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Aw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return pr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function YR(t){ud=t(ud)}function XR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jh(this),e,...n);return Aw.set(r,e.sort?e.sort():[e]),pr(r)}:GR().includes(t)?function(...e){return t.apply(jh(this),e),pr(kw.get(this))}:function(...e){return pr(t.apply(jh(this),e))}}function JR(t){return typeof t=="function"?XR(t):(t instanceof IDBTransaction&&QR(t),WR(t,qR())?new Proxy(t,ud):t)}function pr(t){if(t instanceof IDBRequest)return KR(t);if($h.has(t))return $h.get(t);const e=JR(t);return e!==t&&($h.set(t,e),tm.set(e,t)),e}const jh=t=>tm.get(t);function ZR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=pr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(pr(o.result),l.oldVersion,l.newVersion,pr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const eC=["get","getKey","getAll","getAllKeys","count"],tC=["put","add","delete","clear"],zh=new Map;function Ky(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zh.get(e))return zh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return zh.set(e,s),s}YR(t=>({...t,get:(e,n,r)=>Ky(e,n)||t.get(e,n,r),has:(e,n)=>!!Ky(e,n)||t.has(e,n)}));/**
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
 */class nC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cd="@firebase/app",Qy="0.9.25";/**
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
 */const ri=new em("@firebase/app"),iC="@firebase/app-compat",sC="@firebase/analytics-compat",oC="@firebase/analytics",aC="@firebase/app-check-compat",lC="@firebase/app-check",uC="@firebase/auth",cC="@firebase/auth-compat",hC="@firebase/database",fC="@firebase/database-compat",dC="@firebase/functions",pC="@firebase/functions-compat",mC="@firebase/installations",gC="@firebase/installations-compat",yC="@firebase/messaging",vC="@firebase/messaging-compat",_C="@firebase/performance",wC="@firebase/performance-compat",EC="@firebase/remote-config",TC="@firebase/remote-config-compat",IC="@firebase/storage",SC="@firebase/storage-compat",kC="@firebase/firestore",AC="@firebase/firestore-compat",RC="firebase",CC="10.7.1";/**
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
 */const hd="[DEFAULT]",PC={[cd]:"fire-core",[iC]:"fire-core-compat",[oC]:"fire-analytics",[sC]:"fire-analytics-compat",[lC]:"fire-app-check",[aC]:"fire-app-check-compat",[uC]:"fire-auth",[cC]:"fire-auth-compat",[hC]:"fire-rtdb",[fC]:"fire-rtdb-compat",[dC]:"fire-fn",[pC]:"fire-fn-compat",[mC]:"fire-iid",[gC]:"fire-iid-compat",[yC]:"fire-fcm",[vC]:"fire-fcm-compat",[_C]:"fire-perf",[wC]:"fire-perf-compat",[EC]:"fire-rc",[TC]:"fire-rc-compat",[IC]:"fire-gcs",[SC]:"fire-gcs-compat",[kC]:"fire-fst",[AC]:"fire-fst-compat","fire-js":"fire-js",[RC]:"fire-js-all"};/**
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
 */const Pu=new Map,fd=new Map;function xC(t,e){try{t.container.addComponent(e)}catch(n){ri.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ii(t){const e=t.name;if(fd.has(e))return ri.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,t);for(const n of Pu.values())xC(n,t);return!0}function wc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const NC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},mr=new wa("app","Firebase",NC);/**
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
 */class bC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mr.create("app-deleted",{appName:this._name})}}/**
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
 */const gi=CC;function Rw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw mr.create("bad-app-name",{appName:String(i)});if(n||(n=Tw()),!n)throw mr.create("no-options");const s=Pu.get(i);if(s){if(Cu(n,s.options)&&Cu(r,s.config))return s;throw mr.create("duplicate-app",{appName:i})}const o=new $R(i);for(const l of fd.values())o.addComponent(l);const a=new bC(n,r,o);return Pu.set(i,a),a}function nm(t=hd){const e=Pu.get(t);if(!e&&t===hd&&Tw())return Rw();if(!e)throw mr.create("no-app",{appName:t});return e}function un(t,e,n){var r;let i=(r=PC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ri.warn(a.join(" "));return}ii(new _r(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const OC="firebase-heartbeat-database",DC=1,qo="firebase-heartbeat-store";let Bh=null;function Cw(){return Bh||(Bh=ZR(OC,DC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qo)}}}).catch(t=>{throw mr.create("idb-open",{originalErrorMessage:t.message})})),Bh}async function LC(t){try{return await(await Cw()).transaction(qo).objectStore(qo).get(Pw(t))}catch(e){if(e instanceof gn)ri.warn(e.message);else{const n=mr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ri.warn(n.message)}}}async function Yy(t,e){try{const r=(await Cw()).transaction(qo,"readwrite");await r.objectStore(qo).put(e,Pw(t)),await r.done}catch(n){if(n instanceof gn)ri.warn(n.message);else{const r=mr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ri.warn(r.message)}}}function Pw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const MC=1024,VC=30*24*60*60*1e3;class UC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $C(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=VC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xy(),{heartbeatsToSend:r,unsentEntries:i}=FC(this._heartbeatsCache.heartbeats),s=Ru(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xy(){return new Date().toISOString().substring(0,10)}function FC(t,e=MC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $C{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CR()?PR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Jy(t){return Ru(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jC(t){ii(new _r("platform-logger",e=>new nC(e),"PRIVATE")),ii(new _r("heartbeat",e=>new UC(e),"PRIVATE")),un(cd,Qy,t),un(cd,Qy,"esm2017"),un("fire-js","")}jC("");function rm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function xw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zC=xw,Nw=new wa("auth","Firebase",xw());/**
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
 */const xu=new em("@firebase/auth");function BC(t,...e){xu.logLevel<=Y.WARN&&xu.warn(`Auth (${gi}): ${t}`,...e)}function ql(t,...e){xu.logLevel<=Y.ERROR&&xu.error(`Auth (${gi}): ${t}`,...e)}/**
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
 */function Kt(t,...e){throw im(t,...e)}function cn(t,...e){return im(t,...e)}function HC(t,e,n){const r=Object.assign(Object.assign({},zC()),{[e]:n});return new wa("auth","Firebase",r).create(e,{appName:t.name})}function im(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Nw.create(t,...e)}function U(t,e,...n){if(!t)throw im(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ql(e),new Error(e)}function Nn(t,e){t||En(e)}/**
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
 */function dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WC(){return Zy()==="http:"||Zy()==="https:"}function Zy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function qC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WC()||kR()||"connection"in navigator)?navigator.onLine:!0}function GC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ta{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=SR()||AR()}get(){return qC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sm(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class bw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const KC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const QC=new Ta(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,i={}){return Ow(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ea(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bw.fetch()(Dw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Ow(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KC),e);try{const i=new XC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw dl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw dl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw dl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw HC(t,c,u);Kt(t,c)}}catch(i){if(i instanceof gn)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function Ia(t,e,n,r,i={}){const s=await $n(t,e,n,r,i);return"mfaPendingCredential"in s&&Kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Dw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sm(t.config,i):`${t.config.apiScheme}://${i}`}function YC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),QC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=cn(t,e,r);return i.customData._tokenResponse=n,i}function ev(t){return t!==void 0&&t.enterprise!==void 0}class JC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return YC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ZC(t,e){return $n(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
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
 */async function eP(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function tP(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nP(t,e=!1){const n=fe(t),r=await n.getIdToken(e),i=om(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wo(Hh(i.auth_time)),issuedAtTime:wo(Hh(i.iat)),expirationTime:wo(Hh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hh(t){return Number(t)*1e3}function om(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ql("JWT malformed, contained fewer than 3 sections"),null;try{const i=_w(n);return i?JSON.parse(i):(ql("Failed to decode base64 JWT payload"),null)}catch(i){return ql("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rP(t){const e=om(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof gn&&iP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class sP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Nu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ps(t,tP(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lP(s.providerUserInfo):[],a=aP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function oP(t){const e=fe(t);await Nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lP(t){return t.map(e=>{var{providerId:n}=e,r=rm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uP(t,e){const n=await Ow(t,{},async()=>{const r=Ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Dw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function cP(t,e){return $n(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
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
 */class Go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Go;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Go,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
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
 */function Hn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=rm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ps(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nP(this,e)}reload(){return oP(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ps(this,eP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:T,providerData:R,stsTokenManager:C}=n;U(g&&C,e,"internal-error");const x=Go.fromJSON(this.name,C);U(typeof g=="string",e,"internal-error"),Hn(h,e.name),Hn(f,e.name),U(typeof E=="boolean",e,"internal-error"),U(typeof T=="boolean",e,"internal-error"),Hn(p,e.name),Hn(y,e.name),Hn(v,e.name),Hn(_,e.name),Hn(m,e.name),Hn(d,e.name);const z=new Kr({uid:g,auth:e,email:f,emailVerified:E,displayName:h,isAnonymous:T,photoURL:y,phoneNumber:p,tenantId:v,stsTokenManager:x,createdAt:m,lastLoginAt:d});return R&&Array.isArray(R)&&(z.providerData=R.map(B=>Object.assign({},B))),_&&(z._redirectEventId=_),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Go;i.updateFromServerResponse(n);const s=new Kr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nu(s),s}}/**
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
 */const tv=new Map;function Tn(t){Nn(t instanceof Function,"Expected a class definition");let e=tv.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tv.set(t,e),e)}/**
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
 */class Mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mw.type="NONE";const nv=Mw;/**
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
 */function Gl(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Gl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Gl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(Tn(nv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Tn(nv);const o=Gl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Kr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ts(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ts(s,e,r))}}/**
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
 */function rv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jw(e))return"Blackberry";if(zw(e))return"Webos";if(am(e))return"Safari";if((e.includes("chrome/")||Uw(e))&&!e.includes("edge/"))return"Chrome";if($w(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vw(t=ot()){return/firefox\//i.test(t)}function am(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uw(t=ot()){return/crios\//i.test(t)}function Fw(t=ot()){return/iemobile/i.test(t)}function $w(t=ot()){return/android/i.test(t)}function jw(t=ot()){return/blackberry/i.test(t)}function zw(t=ot()){return/webos/i.test(t)}function Ec(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hP(t=ot()){var e;return Ec(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fP(){return RR()&&document.documentMode===10}function Bw(t=ot()){return Ec(t)||$w(t)||zw(t)||jw(t)||/windows phone/i.test(t)||Fw(t)}function dP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Hw(t,e=[]){let n;switch(t){case"Browser":n=rv(ot());break;case"Worker":n=`${rv(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gi}/${r}`}/**
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
 */class pP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mP(t,e={}){return $n(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
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
 */const gP=6;class yP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class vP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new iv(this),this.idTokenSubscription=new iv(this),this.beforeStateQueue=new pP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?fe(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mP(this),n=new yP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await cP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yi(t){return fe(t)}class iv{constructor(e){this.auth=e,this.observer=null,this.addObserver=DR(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function _P(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ww(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=cn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_P().appendChild(r)})}function wP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const EP="https://www.google.com/recaptcha/enterprise.js?render=",TP="recaptcha-enterprise",IP="NO_RECAPTCHA";class SP{constructor(e){this.type=TP,this.auth=yi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ZC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new JC(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ev(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(IP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ev(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ww(EP+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function sv(t,e,n,r=!1){const i=new SP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await sv(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await sv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function kP(t,e){const n=wc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Cu(s,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function AP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RP(t,e,n){const r=yi(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qw(e),{host:o,port:a}=CP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||PP()}function qw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CP(t){const e=qw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ov(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ov(o)}}}function ov(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class lm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function xP(t,e){return $n(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function NP(t,e){return Ia(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
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
 */async function bP(t,e){return Ia(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function OP(t,e){return Ia(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
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
 */class Ko extends lm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,n,"signInWithPassword",NP);case"emailLink":return bP(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,r,"signUpPassword",xP);case"emailLink":return OP(e,{idToken:n,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ns(t,e){return Ia(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
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
 */const DP="http://localhost";class si extends lm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new si(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=rm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new si(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:DP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ea(n)}return e}}/**
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
 */function LP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function MP(t){const e=no(ro(t)).link,n=e?no(ro(e)).deep_link_id:null,r=no(ro(t)).deep_link_id;return(r?no(ro(r)).link:null)||r||n||e||t}class um{constructor(e){var n,r,i,s,o,a;const l=no(ro(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=LP((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=MP(e);try{return new um(n)}catch{return null}}}/**
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
 */class Ps{constructor(){this.providerId=Ps.PROVIDER_ID}static credential(e,n){return Ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=um.parseLink(n);return U(r,"argument-error"),Ko._fromEmailAndCode(e,r.code,r.tenantId)}}Ps.PROVIDER_ID="password";Ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Sa extends Gw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends Sa{constructor(){super("facebook.com")}static credential(e){return si._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends Sa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return si._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Jn extends Sa{constructor(){super("github.com")}static credential(e){return si._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Zn extends Sa{constructor(){super("twitter.com")}static credential(e,n){return si._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function VP(t,e){return Ia(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
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
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kr._fromIdTokenResponse(e,r,i),o=av(r);return new oi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=av(r);return new oi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function av(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class bu extends gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new bu(e,n,r,i)}}function Kw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?bu._fromErrorAndOperation(t,s,e,r):s})}async function UP(t,e,n=!1){const r=await ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
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
 */async function FP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ps(t,Kw(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=om(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),oi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
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
 */async function Qw(t,e,n=!1){const r="signIn",i=await Kw(t,r,e),s=await oi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $P(t,e){return Qw(yi(t),e)}/**
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
 */async function Yw(t){const e=yi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jP(t,e,n){const r=yi(t),o=await pd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",VP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Yw(t),l}),a=await oi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function zP(t,e,n){return $P(fe(t),Ps.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yw(t),r})}/**
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
 */async function BP(t,e){return $n(t,"POST","/v1/accounts:update",e)}/**
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
 */async function HP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=fe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ps(r,BP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function WP(t,e,n,r){return fe(t).onIdTokenChanged(e,n,r)}function qP(t,e,n){return fe(t).beforeAuthStateChanged(e,n)}function GP(t,e,n,r){return fe(t).onAuthStateChanged(e,n,r)}function KP(t){return fe(t).signOut()}const Ou="__sak";/**
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
 */class Xw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ou,"1"),this.storage.removeItem(Ou),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function QP(){const t=ot();return am(t)||Ec(t)}const YP=1e3,XP=10;class Jw extends Xw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=QP()&&dP(),this.fallbackToPolling=Bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,XP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jw.type="LOCAL";const JP=Jw;/**
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
 */class Zw extends Xw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zw.type="SESSION";const eE=Zw;/**
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
 */function ZP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ZP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tc.receivers=[];/**
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
 */function cm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class e2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=cm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function t2(t){hn().location.href=t}/**
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
 */function tE(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function n2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function i2(){return tE()?self:null}/**
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
 */const nE="firebaseLocalStorageDb",s2=1,Du="firebaseLocalStorage",rE="fbase_key";class ka{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ic(t,e){return t.transaction([Du],e?"readwrite":"readonly").objectStore(Du)}function o2(){const t=indexedDB.deleteDatabase(nE);return new ka(t).toPromise()}function md(){const t=indexedDB.open(nE,s2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Du,{keyPath:rE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Du)?e(r):(r.close(),await o2(),e(await md()))})})}async function lv(t,e,n){const r=Ic(t,!0).put({[rE]:e,value:n});return new ka(r).toPromise()}async function a2(t,e){const n=Ic(t,!1).get(e),r=await new ka(n).toPromise();return r===void 0?null:r.value}function uv(t,e){const n=Ic(t,!0).delete(e);return new ka(n).toPromise()}const l2=800,u2=3;class iE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>u2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tc._getInstance(i2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await n2(),!this.activeServiceWorker)return;this.sender=new e2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await lv(e,Ou,"1"),await uv(e,Ou),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>a2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ic(i,!1).getAll();return new ka(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),l2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iE.type="LOCAL";const c2=iE;new Ta(3e4,6e4);/**
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
 */function h2(t,e){return e?Tn(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class hm extends lm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function f2(t){return Qw(t.auth,new hm(t),t.bypassAuthState)}function d2(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),FP(n,new hm(t),t.bypassAuthState)}async function p2(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),UP(n,new hm(t),t.bypassAuthState)}/**
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
 */class sE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return f2;case"linkViaPopup":case"linkViaRedirect":return p2;case"reauthViaPopup":case"reauthViaRedirect":return d2;default:Kt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const m2=new Ta(2e3,1e4);class Hi extends sE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=cm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,m2.get())};e()}}Hi.currentPopupAction=null;/**
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
 */const g2="pendingRedirect",Kl=new Map;class y2 extends sE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Kl.get(this.auth._key());if(!e){try{const r=await v2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Kl.set(this.auth._key(),e)}return this.bypassAuthState||Kl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function v2(t,e){const n=E2(e),r=w2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _2(t,e){Kl.set(t._key(),e)}function w2(t){return Tn(t._redirectPersistence)}function E2(t){return Gl(g2,t.config.apiKey,t.name)}async function T2(t,e,n=!1){const r=yi(t),i=h2(r,e),o=await new y2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const I2=10*60*1e3;class S2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!k2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!oE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=I2&&this.cachedEventUids.clear(),this.cachedEventUids.has(cv(e))}saveEventToCache(e){this.cachedEventUids.add(cv(e)),this.lastProcessedEventTime=Date.now()}}function cv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function k2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oE(t);default:return!1}}/**
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
 */async function A2(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
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
 */const R2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,C2=/^https?/;async function P2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await A2(t);for(const n of e)try{if(x2(n))return}catch{}Kt(t,"unauthorized-domain")}function x2(t){const e=dd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!C2.test(n))return!1;if(R2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const N2=new Ta(3e4,6e4);function hv(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function b2(t){return new Promise((e,n)=>{var r,i,s;function o(){hv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hv(),n(cn(t,"network-request-failed"))},timeout:N2.get()})}if(!((i=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hn().gapi)===null||s===void 0)&&s.load)o();else{const a=wP("iframefcb");return hn()[a]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},Ww(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ql=null,e})}let Ql=null;function O2(t){return Ql=Ql||b2(t),Ql}/**
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
 */const D2=new Ta(5e3,15e3),L2="__/auth/iframe",M2="emulator/auth/iframe",V2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function F2(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sm(e,M2):`https://${t.config.authDomain}/${L2}`,r={apiKey:e.apiKey,appName:t.name,v:gi},i=U2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ea(r).slice(1)}`}async function $2(t){const e=await O2(t),n=hn().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:F2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:V2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),a=hn().setTimeout(()=>{s(o)},D2.get());function l(){hn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const j2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z2=500,B2=600,H2="_blank",W2="http://localhost";class fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function q2(t,e,n,r=z2,i=B2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},j2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ot().toLowerCase();n&&(a=Uw(u)?H2:n),Vw(u)&&(e=e||W2,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,y])=>`${f}${p}=${y},`,"");if(hP(u)&&a!=="_self")return G2(e||"",a),new fv(null);const h=window.open(e||"",a,c);U(h,t,"popup-blocked");try{h.focus()}catch{}return new fv(h)}function G2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const K2="__/auth/handler",Q2="emulator/auth/handler",Y2=encodeURIComponent("fac");async function dv(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gi,eventId:i};if(e instanceof Gw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",OR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Sa){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Y2}=${encodeURIComponent(l)}`:"";return`${X2(t)}?${Ea(a).slice(1)}${u}`}function X2({config:t}){return t.emulator?sm(t,Q2):`https://${t.authDomain}/${K2}`}/**
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
 */const Wh="webStorageSupport";class J2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eE,this._completeRedirectFn=T2,this._overrideRedirectResult=_2}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await dv(e,n,r,dd(),i);return q2(e,o,cm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await dv(e,n,r,dd(),i);return t2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $2(e),r=new S2(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wh,{type:Wh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wh];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=P2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bw()||am()||Ec()}}const Z2=J2;var pv="@firebase/auth",mv="1.5.1";/**
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
 */class ex{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function nx(t){ii(new _r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hw(t)},u=new vP(r,i,s,l);return AP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ii(new _r("auth-internal",e=>{const n=yi(e.getProvider("auth").getImmediate());return(r=>new ex(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(pv,mv,tx(t)),un(pv,mv,"esm2017")}/**
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
 */const rx=5*60,ix=Iw("authIdTokenMaxAge")||rx;let gv=null;const sx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ix)return;const i=n==null?void 0:n.token;gv!==i&&(gv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ox(t=nm()){const e=wc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kP(t,{popupRedirectResolver:Z2,persistence:[c2,JP,eE]}),r=Iw("authTokenSyncURL");if(r){const s=sx(r);qP(n,s,()=>s(n.currentUser)),WP(n,o=>s(o))}const i=ww("auth");return i&&RP(n,`http://${i}`),n}nx("Browser");var ax="firebase",lx="10.7.1";/**
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
 */un(ax,lx,"app");/**
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
 */const aE="firebasestorage.googleapis.com",lE="storageBucket",ux=2*60*1e3,cx=10*60*1e3,hx=1e3;/**
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
 */class ye extends gn{constructor(e,n,r=0){super(qh(e),`Firebase Storage: ${n} (${qh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ce;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ce||(ce={}));function qh(t){return"storage/"+t}function fm(){const t="An unknown error occurred, please check the error payload for server response.";return new ye(ce.UNKNOWN,t)}function fx(t){return new ye(ce.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function dx(t){return new ye(ce.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function px(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(ce.UNAUTHENTICATED,t)}function mx(){return new ye(ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gx(t){return new ye(ce.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function uE(){return new ye(ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function cE(){return new ye(ce.CANCELED,"User canceled the upload/download.")}function yx(t){return new ye(ce.INVALID_URL,"Invalid URL '"+t+"'.")}function vx(t){return new ye(ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function _x(){return new ye(ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+lE+"' property when initializing the app?")}function hE(){return new ye(ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wx(){return new ye(ce.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function Ex(){return new ye(ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Tx(t){return new ye(ce.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function gd(t){return new ye(ce.INVALID_ARGUMENT,t)}function fE(){return new ye(ce.APP_DELETED,"The Firebase app was deleted.")}function Ix(t){return new ye(ce.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Eo(t,e){return new ye(ce.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ks(t){throw new ye(ce.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class It{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=It.makeFromUrl(e,n)}catch{return new It(e,"")}if(r.path==="")return r;throw vx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${f}`,"i"),y={bucket:1,path:3},v=n===aE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",m=new RegExp(`^https?://${v}/${i}/${_}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<g.length;E++){const T=g[E],R=T.regex.exec(e);if(R){const C=R[T.indices.bucket];let x=R[T.indices.path];x||(x=""),r=new It(C,x),T.postModify(r);break}}if(r==null)throw yx(e);return r}}class Sx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function kx(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(p,l())},_)}function f(){s&&clearTimeout(s)}function p(_,...m){if(u){f();return}if(_){f(),c.call(null,_,...m);return}if(l()||o){f(),c.call(null,_,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function v(_){y||(y=!0,f(),!u&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function Ax(t){t(!1)}/**
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
 */function Rx(t){return t!==void 0}function Cx(t){return typeof t=="function"}function Px(t){return typeof t=="object"&&!Array.isArray(t)}function Sc(t){return typeof t=="string"||t instanceof String}function yv(t){return dm()&&t instanceof Blob}function dm(){return typeof Blob<"u"}function vv(t,e,n,r){if(r<e)throw gd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw gd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Aa(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function dE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Qr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qr||(Qr={}));/**
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
 */function pE(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class xx{constructor(e,n,r,i,s,o,a,l,u,c,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new pl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Qr.NO_ERROR,l=s.getStatus();if(!a||pE(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Qr.ABORT;r(!1,new pl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new pl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Rx(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=fm();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?fE():cE();o(l)}else{const l=uE();o(l)}};this.canceled_?n(!1,new pl(!1,null,!0)):this.backoffId_=kx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ax(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Nx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ox(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Dx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Lx(t,e,n,r,i,s,o=!0){const a=dE(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return Ox(u,e),Nx(u,n),bx(u,s),Dx(u,r),new xx(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Mx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Vx(...t){const e=Mx();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(dm())return new Blob(t);throw new ye(ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Ux(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Fx(t){if(typeof atob>"u")throw Tx("base-64");return atob(t)}/**
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
 */const tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Gh{constructor(e,n){this.data=e,this.contentType=n||null}}function $x(t,e){switch(t){case tn.RAW:return new Gh(mE(e));case tn.BASE64:case tn.BASE64URL:return new Gh(gE(t,e));case tn.DATA_URL:return new Gh(zx(e),Bx(e))}throw fm()}function mE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function jx(t){let e;try{e=decodeURIComponent(t)}catch{throw Eo(tn.DATA_URL,"Malformed data URL.")}return mE(e)}function gE(t,e){switch(t){case tn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Eo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case tn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Eo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Fx(e)}catch(i){throw i.message.includes("polyfill")?i:Eo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class yE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Eo(tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Hx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function zx(t){const e=new yE(t);return e.base64?gE(tn.BASE64,e.rest):jx(e.rest)}function Bx(t){return new yE(t).contentType}function Hx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class er{constructor(e,n){let r=0,i="";yv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(yv(this.data_)){const r=this.data_,i=Ux(r,e,n);return i===null?null:new er(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new er(r,!0)}}static getBlob(...e){if(dm()){const n=e.map(r=>r instanceof er?r.data_:r);return new er(Vx.apply(null,n))}else{const n=e.map(o=>Sc(o)?$x(tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new er(i,!0)}}uploadData(){return this.data_}}/**
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
 */function vE(t){let e;try{e=JSON.parse(t)}catch{return null}return Px(e)?e:null}/**
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
 */function Wx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function qx(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function _E(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Gx(t,e){return e}class lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Gx}}let ml=null;function Kx(t){return!Sc(t)||t.length<2?t:_E(t)}function wE(){if(ml)return ml;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(s,o){return Kx(o)}const n=new lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new lt("size");return i.xform=r,t.push(i),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),ml=t,ml}function Qx(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new It(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Yx(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return Qx(r,t),r}function EE(t,e,n){const r=vE(e);return r===null?null:Yx(t,r,n)}function Xx(t,e,n,r){const i=vE(e);if(i===null||!Sc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,f="/b/"+o(c)+"/o/"+o(h),p=Aa(f,n,r),y=dE({alt:"media",token:u});return p+y})[0]}function TE(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class xs{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function kn(t){if(!t)throw fm()}function pm(t,e){function n(r,i){const s=EE(t,i,e);return kn(s!==null),s}return n}function Jx(t,e){function n(r,i){const s=EE(t,i,e);return kn(s!==null),Xx(s,i,t.host,t._protocol)}return n}function Ra(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=mx():i=px():n.getStatus()===402?i=dx(t.bucket):n.getStatus()===403?i=gx(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function IE(t){const e=Ra(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=fx(t.path)),s.serverResponse=i.serverResponse,s}return n}function Zx(t,e,n){const r=e.fullServerUrl(),i=Aa(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new xs(i,s,pm(t,n),o);return a.errorHandler=IE(e),a}function eN(t,e,n){const r=e.fullServerUrl(),i=Aa(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new xs(i,s,Jx(t,n),o);return a.errorHandler=IE(e),a}function tN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function SE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=tN(null,e)),r}function nN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let E=0;E<2;E++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=SE(e,r,i),c=TE(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=er.getBlob(h,r,f);if(p===null)throw hE();const y={name:u.fullPath},v=Aa(s,t.host,t._protocol),_="POST",m=t.maxUploadRetryTime,d=new xs(v,_,pm(t,n),m);return d.urlParams=y,d.headers=o,d.body=p.uploadData(),d.errorHandler=Ra(e),d}class Lu{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function mm(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{kn(!1)}return kn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function rN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=SE(e,r,i),a={name:o.fullPath},l=Aa(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=TE(o,n),f=t.maxUploadRetryTime;function p(v){mm(v);let _;try{_=v.getResponseHeader("X-Goog-Upload-URL")}catch{kn(!1)}return kn(Sc(_)),_}const y=new xs(l,u,p,f);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=Ra(e),y}function iN(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=mm(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{kn(!1)}h||kn(!1);const f=Number(h);return kn(!isNaN(f)),new Lu(f,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new xs(n,o,s,a);return l.headers=i,l.errorHandler=Ra(e),l}const _v=256*1024;function sN(t,e,n,r,i,s,o,a){const l=new Lu(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw wx();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,f=h+c;let p="";c===0?p="finalize":u===c?p="upload, finalize":p="upload";const y={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},v=r.slice(h,f);if(v===null)throw hE();function _(E,T){const R=mm(E,["active","final"]),C=l.current+c,x=r.size();let z;return R==="final"?z=pm(e,s)(E,T):z=null,new Lu(C,x,R==="final",z)}const m="POST",d=e.maxUploadRetryTime,g=new xs(n,m,_,d);return g.headers=y,g.body=v.uploadData(),g.progressCallback=a||null,g.errorHandler=Ra(t),g}const pt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Kh(t){switch(t){case"running":case"pausing":case"canceling":return pt.RUNNING;case"paused":return pt.PAUSED;case"success":return pt.SUCCESS;case"canceled":return pt.CANCELED;case"error":return pt.ERROR;default:return pt.ERROR}}/**
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
 */class oN{constructor(e,n,r){if(Cx(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Ai(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class aN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Qr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Qr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Qr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ks("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ks("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ks("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ks("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ks("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class lN extends aN{initXhr(){this.xhr_.responseType="text"}}function Ci(){return new lN}/**
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
 */class uN{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=wE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(ce.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(pE(i.status,[]))if(s)i=uE();else{this.sleepTime=Math.max(this.sleepTime*2,hx),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(ce.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=rN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ci,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=iN(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Ci,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=_v*this._chunkMultiplier,n=new Lu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=sN(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Ci,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){_v*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=Zx(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Ci,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=nN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Ci,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=cE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Kh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new oN(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Kh(this._state)){case pt.SUCCESS:Ai(this._resolve.bind(null,this.snapshot))();break;case pt.CANCELED:case pt.ERROR:const n=this._reject;Ai(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Kh(this._state)){case pt.RUNNING:case pt.PAUSED:e.next&&Ai(e.next.bind(e,this.snapshot))();break;case pt.SUCCESS:e.complete&&Ai(e.complete.bind(e))();break;case pt.CANCELED:case pt.ERROR:e.error&&Ai(e.error.bind(e,this._error))();break;default:e.error&&Ai(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ai{constructor(e,n){this._service=e,n instanceof It?this._location=n:this._location=It.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ai(e,n)}get root(){const e=new It(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _E(this._location.path)}get storage(){return this._service}get parent(){const e=Wx(this._location.path);if(e===null)return null;const n=new It(this._location.bucket,e);return new ai(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Ix(e)}}function cN(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new uN(t,new er(e),n)}function hN(t){t._throwIfRoot("getDownloadURL");const e=eN(t.storage,t._location,wE());return t.storage.makeRequestWithTokens(e,Ci).then(n=>{if(n===null)throw Ex();return n})}function fN(t,e){const n=qx(t._location.path,e),r=new It(t._location.bucket,n);return new ai(t.storage,r)}/**
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
 */function dN(t){return/^[A-Za-z]+:\/\//.test(t)}function pN(t,e){return new ai(t,e)}function kE(t,e){if(t instanceof gm){const n=t;if(n._bucket==null)throw _x();const r=new ai(n,n._bucket);return e!=null?kE(r,e):r}else return e!==void 0?fN(t,e):t}function mN(t,e){if(e&&dN(e)){if(t instanceof gm)return pN(t,e);throw gd("To use ref(service, url), the first argument must be a Storage instance.")}else return kE(t,e)}function wv(t,e){const n=e==null?void 0:e[lE];return n==null?null:It.makeFromBucketSpec(n,t)}function gN(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Sw(i,t.app.options.projectId))}class gm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=aE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ux,this._maxUploadRetryTime=cx,this._requests=new Set,i!=null?this._bucket=It.makeFromBucketSpec(i,this._host):this._bucket=wv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=It.makeFromBucketSpec(this._url,e):this._bucket=wv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ai(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Sx(fE());{const o=Lx(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ev="@firebase/storage",Tv="0.12.0";/**
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
 */const AE="storage";function RE(t,e,n){return t=fe(t),cN(t,e,n)}function CE(t){return t=fe(t),hN(t)}function PE(t,e){return t=fe(t),mN(t,e)}function yN(t=nm(),e){t=fe(t);const r=wc(t,AE).getImmediate({identifier:e}),i=Ew("storage");return i&&vN(r,...i),r}function vN(t,e,n,r={}){gN(t,e,n,r)}function _N(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new gm(n,r,i,e,gi)}function wN(){ii(new _r(AE,_N,"PUBLIC").setMultipleInstances(!0)),un(Ev,Tv,""),un(Ev,Tv,"esm2017")}wN();var EN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,ym=ym||{},$=EN||self;function kc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ca(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TN(t){return Object.prototype.hasOwnProperty.call(t,Qh)&&t[Qh]||(t[Qh]=++IN)}var Qh="closure_uid_"+(1e9*Math.random()>>>0),IN=0;function SN(t,e,n){return t.call.apply(t.bind,arguments)}function kN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=SN:nt=kN,nt.apply(null,arguments)}function gl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function xr(){this.s=this.s,this.o=this.o}var AN=0;xr.prototype.s=!1;xr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),AN!=0)&&TN(this)};xr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const xE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function vm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Iv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(kc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var RN=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};$.addEventListener("test",n,e),$.removeEventListener("test",n,e)}catch{}return t}();function Qo(t){return/^[\s\xa0]*$/.test(t)}function Ac(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function en(t){return Ac().indexOf(t)!=-1}function _m(t){return _m[" "](t),t}_m[" "]=function(){};function CN(t,e){var n=wb;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var PN=en("Opera"),ms=en("Trident")||en("MSIE"),NE=en("Edge"),yd=NE||ms,bE=en("Gecko")&&!(Ac().toLowerCase().indexOf("webkit")!=-1&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),xN=Ac().toLowerCase().indexOf("webkit")!=-1&&!en("Edge");function OE(){var t=$.document;return t?t.documentMode:void 0}var vd;e:{var Yh="",Xh=function(){var t=Ac();if(bE)return/rv:([^\);]+)(\)|;)/.exec(t);if(NE)return/Edge\/([\d\.]+)/.exec(t);if(ms)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xN)return/WebKit\/(\S+)/.exec(t);if(PN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Xh&&(Yh=Xh?Xh[1]:""),ms){var Jh=OE();if(Jh!=null&&Jh>parseFloat(Yh)){vd=String(Jh);break e}}vd=Yh}var _d;if($.document&&ms){var Sv=OE();_d=Sv||parseInt(vd,10)||void 0}else _d=void 0;var NN=_d;function Yo(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bE){e:{try{_m(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yo.$.h.call(this)}}Ue(Yo,rt);var bN={2:"touch",3:"pen",4:"mouse"};Yo.prototype.h=function(){Yo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pa="closure_listenable_"+(1e6*Math.random()|0),ON=0;function DN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++ON,this.fa=this.ia=!1}function Rc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function wm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function LN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function DE(t){const e={};for(const n in t)e[n]=t[n];return e}const kv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function LE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<kv.length;s++)n=kv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Cc(t){this.src=t,this.g={},this.h=0}Cc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ed(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new DN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function wd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=xE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Rc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ed(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Em="closure_lm_"+(1e6*Math.random()|0),Zh={};function ME(t,e,n,r,i){if(r&&r.once)return UE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ME(t,e[s],n,r,i);return null}return n=Sm(n),t&&t[Pa]?t.O(e,n,Ca(r)?!!r.capture:!!r,i):VE(t,e,n,!1,r,i)}function VE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ca(i)?!!i.capture:!!i,a=Im(t);if(a||(t[Em]=a=new Cc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=MN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)RN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent($E(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function MN(){function t(n){return e.call(t.src,t.listener,n)}const e=VN;return t}function UE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)UE(t,e[s],n,r,i);return null}return n=Sm(n),t&&t[Pa]?t.P(e,n,Ca(r)?!!r.capture:!!r,i):VE(t,e,n,!0,r,i)}function FE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)FE(t,e[s],n,r,i);else r=Ca(r)?!!r.capture:!!r,n=Sm(n),t&&t[Pa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ed(s,n,r,i),-1<n&&(Rc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Im(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ed(e,n,r,i)),(n=-1<t?e[t]:null)&&Tm(n))}function Tm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Pa])wd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($E(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Im(e))?(wd(n,t),n.h==0&&(n.src=null,e[Em]=null)):Rc(t)}}}function $E(t){return t in Zh?Zh[t]:Zh[t]="on"+t}function VN(t,e){if(t.fa)t=!0;else{e=new Yo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Tm(t),t=n.call(r,e)}return t}function Im(t){return t=t[Em],t instanceof Cc?t:null}var ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sm(t){return typeof t=="function"?t:(t[ef]||(t[ef]=function(e){return t.handleEvent(e)}),t[ef])}function Ve(){xr.call(this),this.i=new Cc(this),this.S=this,this.J=null}Ue(Ve,xr);Ve.prototype[Pa]=!0;Ve.prototype.removeEventListener=function(t,e,n,r){FE(this,t,e,n,r)};function qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),LE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=yl(o,r,!0,e)&&i}if(o=e.g=t,i=yl(o,r,!0,e)&&i,i=yl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=yl(o,r,!1,e)&&i}Ve.prototype.N=function(){if(Ve.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Rc(n[r]);delete t.g[e],t.h--}}this.J=null};Ve.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ve.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function yl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&wd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var km=$.JSON.stringify;class UN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function FN(){var t=Am;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class $N{constructor(){this.h=this.g=null}add(e,n){const r=jE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jE=new UN(()=>new jN,t=>t.reset());class jN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function BN(t){$.setTimeout(()=>{throw t},0)}let Xo,Jo=!1,Am=new $N,zE=()=>{const t=$.Promise.resolve(void 0);Xo=()=>{t.then(HN)}};var HN=()=>{for(var t;t=FN();){try{t.h.call(t.g)}catch(n){BN(n)}var e=jE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Jo=!1};function Pc(t,e){Ve.call(this),this.h=t||1,this.g=e||$,this.j=nt(this.qb,this),this.l=Date.now()}Ue(Pc,Ve);P=Pc.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(Rm(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}P.N=function(){Pc.$.N.call(this),Rm(this),delete this.g};function Cm(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function BE(t){t.g=Cm(()=>{t.g=null,t.i&&(t.i=!1,BE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class WN extends xr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:BE(this)}N(){super.N(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zo(t){xr.call(this),this.h=t,this.g={}}Ue(Zo,xr);var Av=[];function HE(t,e,n,r){Array.isArray(n)||(n&&(Av[0]=n.toString()),n=Av);for(var i=0;i<n.length;i++){var s=ME(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function WE(t){wm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Tm(e)},t),t.g={}}Zo.prototype.N=function(){Zo.$.N.call(this),WE(this)};Zo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function xc(){this.g=!0}xc.prototype.Ea=function(){this.g=!1};function qN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function GN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Wi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+QN(t,n)+(r?" "+r:"")})}function KN(t,e){t.info(function(){return"TIMEOUT: "+e})}xc.prototype.info=function(){};function QN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return km(n)}catch{return e}}var vi={},Rv=null;function Nc(){return Rv=Rv||new Ve}vi.Ta="serverreachability";function qE(t){rt.call(this,vi.Ta,t)}Ue(qE,rt);function ea(t){const e=Nc();qe(e,new qE(e))}vi.STAT_EVENT="statevent";function GE(t,e){rt.call(this,vi.STAT_EVENT,t),this.stat=e}Ue(GE,rt);function ct(t){const e=Nc();qe(e,new GE(e,t))}vi.Ua="timingevent";function KE(t,e){rt.call(this,vi.Ua,t),this.size=e}Ue(KE,rt);function xa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var bc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},QE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Pm(){}Pm.prototype.h=null;function Cv(t){return t.h||(t.h=t.i())}function YE(){}var Na={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xm(){rt.call(this,"d")}Ue(xm,rt);function Nm(){rt.call(this,"c")}Ue(Nm,rt);var Td;function Oc(){}Ue(Oc,Pm);Oc.prototype.g=function(){return new XMLHttpRequest};Oc.prototype.i=function(){return{}};Td=new Oc;function ba(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Zo(this),this.P=YN,t=yd?125:void 0,this.V=new Pc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new XE}function XE(){this.i=null,this.g="",this.h=!1}var YN=45e3,JE={},Id={};P=ba.prototype;P.setTimeout=function(t){this.P=t};function Sd(t,e,n){t.L=1,t.A=Lc(bn(e)),t.u=n,t.S=!0,ZE(t,null)}function ZE(t,e){t.G=Date.now(),Oa(t),t.B=bn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),aT(n.i,"t",r),t.o=0,n=t.l.J,t.h=new XE,t.g=CT(t.l,n?e:null,!t.u),0<t.O&&(t.M=new WN(nt(t.Pa,t,t.g),t.O)),HE(t.U,t.g,"readystatechange",t.nb),e=t.I?DE(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ea(),qN(t.j,t.v,t.B,t.m,t.W,t.u)}P.nb=function(t){t=t.target;const e=this.M;e&&nn(t)==3?e.l():this.Pa(t)};P.Pa=function(t){try{if(t==this.g)e:{const c=nn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||yd||this.g&&(this.h.h||this.g.ja()||bv(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ea(3):ea(2)),Dc(this);var n=this.g.da();this.ca=n;t:if(eT(this)){var r=bv(this.g);t="";var i=r.length,s=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jr(this),To(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,GN(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qo(a)){var u=a;break t}}u=null}if(n=u)Wi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kd(this,n);else{this.i=!1,this.s=3,ct(12),jr(this),To(this);break e}}this.S?(tT(this,c,o),yd&&this.i&&c==3&&(HE(this.U,this.V,"tick",this.mb),this.V.start())):(Wi(this.j,this.m,o,null),kd(this,o)),c==4&&jr(this),this.i&&!this.J&&(c==4?ST(this.l,this):(this.i=!1,Oa(this)))}else yb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),jr(this),To(this)}}}catch{}finally{}};function eT(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function tT(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=XN(t,n),i==Id){e==4&&(t.s=4,ct(14),r=!1),Wi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==JE){t.s=4,ct(15),Wi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Wi(t.j,t.m,i,null),kd(t,i);eT(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ct(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vm(e),e.M=!0,ct(11))):(Wi(t.j,t.m,n,"[Invalid Chunked Response]"),jr(t),To(t))}P.mb=function(){if(this.g){var t=nn(this.g),e=this.g.ja();this.o<e.length&&(Dc(this),tT(this,t,e),this.i&&t!=4&&Oa(this))}};function XN(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Id:(n=Number(e.substring(n,r)),isNaN(n)?JE:(r+=1,r+n>e.length?Id:(e=e.slice(r,r+n),t.o=r+n,e)))}P.cancel=function(){this.J=!0,jr(this)};function Oa(t){t.Y=Date.now()+t.P,nT(t,t.P)}function nT(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=xa(nt(t.lb,t),e)}function Dc(t){t.C&&($.clearTimeout(t.C),t.C=null)}P.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(KN(this.j,this.B),this.L!=2&&(ea(),ct(17)),jr(this),this.s=2,To(this)):nT(this,this.Y-t)};function To(t){t.l.H==0||t.J||ST(t.l,t)}function jr(t){Dc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Rm(t.V),WE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function kd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ad(n.i,t))){if(!t.K&&Ad(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Uu(n),Fc(n);else break e;Mm(n),ct(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=xa(nt(n.ib,n),6e3));if(1>=cT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else zr(n,11)}else if((t.K||n.g==t)&&Uu(n),!Qo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(bm(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,oe(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=RT(r,r.J?r.pa:null,r.Y),o.K){hT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Dc(a),Oa(a)),r.g=o}else TT(r);0<n.j.length&&$c(n)}else u[0]!="stop"&&u[0]!="close"||zr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?zr(n,7):Lm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ea(4)}catch{}}function JN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(kc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ZN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(kc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function rT(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(kc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ZN(t),r=JN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var iT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Yr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Yr){this.h=t.h,Mu(this,t.j),this.s=t.s,this.g=t.g,Vu(this,t.m),this.l=t.l;var e=t.i,n=new ta;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Pv(this,n),this.o=t.o}else t&&(e=String(t).match(iT))?(this.h=!1,Mu(this,e[1]||"",!0),this.s=io(e[2]||""),this.g=io(e[3]||"",!0),Vu(this,e[4]),this.l=io(e[5]||"",!0),Pv(this,e[6]||"",!0),this.o=io(e[7]||"")):(this.h=!1,this.i=new ta(null,this.h))}Yr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(so(e,xv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(so(e,xv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(so(n,n.charAt(0)=="/"?rb:nb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",so(n,sb)),t.join("")};function bn(t){return new Yr(t)}function Mu(t,e,n){t.j=n?io(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Vu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Pv(t,e,n){e instanceof ta?(t.i=e,ob(t.i,t.h)):(n||(e=so(e,ib)),t.i=new ta(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function Lc(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function io(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function so(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xv=/[#\/\?@]/g,nb=/[#\?:]/g,rb=/[#\?]/g,ib=/[#\?@]/g,sb=/#/g;function ta(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Nr(t){t.g||(t.g=new Map,t.h=0,t.i&&eb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=ta.prototype;P.add=function(t,e){Nr(this),this.i=null,t=Ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function sT(t,e){Nr(t),e=Ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function oT(t,e){return Nr(t),e=Ns(t,e),t.g.has(e)}P.forEach=function(t,e){Nr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};P.ta=function(){Nr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};P.Z=function(t){Nr(this);let e=[];if(typeof t=="string")oT(this,t)&&(e=e.concat(this.g.get(Ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};P.set=function(t,e){return Nr(this),this.i=null,t=Ns(this,t),oT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function aT(t,e,n){sT(t,e),0<n.length&&(t.i=null,t.g.set(Ns(t,e),vm(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ob(t,e){e&&!t.j&&(Nr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(sT(this,r),aT(this,i,n))},t)),t.j=e}var ab=class{constructor(t,e){this.g=t,this.map=e}};function lT(t){this.l=t||lb,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ka&&$.g.Ka()&&$.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lb=10;function uT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function cT(t){return t.h?1:t.g?t.g.size:0}function Ad(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bm(t,e){t.g?t.g.add(e):t.h=e}function hT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}lT.prototype.cancel=function(){if(this.i=fT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function fT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return vm(t.i)}var ub=class{stringify(t){return $.JSON.stringify(t,void 0)}parse(t){return $.JSON.parse(t,void 0)}};function cb(){this.g=new ub}function hb(t,e,n){const r=n||"";try{rT(t,function(i,s){let o=i;Ca(i)&&(o=km(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function fb(t,e){const n=new xc;if($.Image){const r=new Image;r.onload=gl(vl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gl(vl,n,r,"TestLoadImage: error",!1,e),r.onabort=gl(vl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gl(vl,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function vl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Mc(t){this.l=t.ec||null,this.j=t.ob||!1}Ue(Mc,Pm);Mc.prototype.g=function(){return new Vc(this.l,this.j)};Mc.prototype.i=function(t){return function(){return t}}({});function Vc(t,e){Ve.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Om,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(Vc,Ve);var Om=0;P=Vc.prototype;P.open=function(t,e){if(this.readyState!=Om)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,na(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||$).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Da(this)),this.readyState=Om};P.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,na(this)),this.g&&(this.readyState=3,na(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function dT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}P.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Da(this):na(this),this.readyState==3&&dT(this)}};P.Za=function(t){this.g&&(this.response=this.responseText=t,Da(this))};P.Ya=function(t){this.g&&(this.response=t,Da(this))};P.ka=function(){this.g&&Da(this)};function Da(t){t.readyState=4,t.l=null,t.j=null,t.A=null,na(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function na(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Vc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var db=$.JSON.parse;function Ee(t){Ve.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pT,this.L=this.M=!1}Ue(Ee,Ve);var pT="",pb=/^https?$/i,mb=["POST","PUT"];P=Ee.prototype;P.Oa=function(t){this.M=t};P.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Td.g(),this.C=this.u?Cv(this.u):Cv(Td),this.g.onreadystatechange=nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Nv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=xE(mb,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{yT(this),0<this.B&&((this.L=gb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.ua,this)):this.A=Cm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Nv(this,s)}};function gb(t){return ms&&typeof t.timeout=="number"&&t.ontimeout!==void 0}P.ua=function(){typeof ym<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function Nv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,mT(t),Uc(t)}function mT(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),Uc(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Uc(this,!0)),Ee.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?gT(this):this.kb())};P.kb=function(){gT(this)};function gT(t){if(t.h&&typeof ym<"u"&&(!t.C[1]||nn(t)!=4||t.da()!=2)){if(t.v&&nn(t)==4)Cm(t.La,0,t);else if(qe(t,"readystatechange"),nn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(iT)[1]||null;!i&&$.self&&$.self.location&&(i=$.self.location.protocol.slice(0,-1)),r=!pb.test(i?i.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var s=2<nn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",mT(t)}}finally{Uc(t)}}}}function Uc(t,e){if(t.g){yT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function yT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}P.isActive=function(){return!!this.g};function nn(t){return t.g?t.g.readyState:0}P.da=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),db(e)}};function bv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case pT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function yb(t){const e={};t=(t.g&&2<=nn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Qo(t[r]))continue;var n=zN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}LN(e,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vT(t){let e="";return wm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Dm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=vT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function Qs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function _T(t){this.Ga=0,this.j=[],this.l=new xc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Qs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Qs("baseRetryDelayMs",5e3,t),this.hb=Qs("retryDelaySeedMs",1e4,t),this.eb=Qs("forwardChannelMaxRetries",2,t),this.xa=Qs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new lT(t&&t.concurrentRequestLimit),this.Ja=new cb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=_T.prototype;P.ra=8;P.H=1;function Lm(t){if(wT(t),t.H==3){var e=t.W++,n=bn(t.I);if(oe(n,"SID",t.K),oe(n,"RID",e),oe(n,"TYPE","terminate"),La(t,n),e=new ba(t,t.l,e),e.L=2,e.A=Lc(bn(n)),n=!1,$.navigator&&$.navigator.sendBeacon)try{n=$.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&$.Image&&(new Image().src=e.A,n=!0),n||(e.g=CT(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Oa(e)}AT(t)}function Fc(t){t.g&&(Vm(t),t.g.cancel(),t.g=null)}function wT(t){Fc(t),t.u&&($.clearTimeout(t.u),t.u=null),Uu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function $c(t){if(!uT(t.i)&&!t.m){t.m=!0;var e=t.Na;Xo||zE(),Jo||(Xo(),Jo=!0),Am.add(e,t),t.C=0}}function vb(t,e){return cT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=xa(nt(t.Na,t,e),kT(t,t.C)),t.C++,!0)}P.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ba(this,this.l,t);let s=this.s;if(this.U&&(s?(s=DE(s),LE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ET(this,i,e),n=bn(this.I),oe(n,"RID",t),oe(n,"CVER",22),this.F&&oe(n,"X-HTTP-Session-Id",this.F),La(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(vT(s)))+"&"+e:this.o&&Dm(n,this.o,s)),bm(this.i,i),this.bb&&oe(n,"TYPE","init"),this.P?(oe(n,"$req",e),oe(n,"SID","null"),i.aa=!0,Sd(i,n,null)):Sd(i,n,e),this.H=2}}else this.H==3&&(t?Ov(this,t):this.j.length==0||uT(this.i)||Ov(this))};function Ov(t,e){var n;e?n=e.m:n=t.W++;const r=bn(t.I);oe(r,"SID",t.K),oe(r,"RID",n),oe(r,"AID",t.V),La(t,r),t.o&&t.s&&Dm(r,t.o,t.s),n=new ba(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ET(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),bm(t.i,n),Sd(n,r,e)}function La(t,e){t.na&&wm(t.na,function(n,r){oe(e,r,n)}),t.h&&rT({},function(n,r){oe(e,r,n)})}function ET(t,e,n){n=Math.min(t.j.length,n);var r=t.h?nt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{hb(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function TT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Xo||zE(),Jo||(Xo(),Jo=!0),Am.add(e,t),t.A=0}}function Mm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=xa(nt(t.Ma,t),kT(t,t.A)),t.A++,!0)}P.Ma=function(){if(this.u=null,IT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=xa(nt(this.jb,this),t)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ct(10),Fc(this),IT(this))};function Vm(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function IT(t){t.g=new ba(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=bn(t.wa);oe(e,"RID","rpc"),oe(e,"SID",t.K),oe(e,"AID",t.V),oe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&oe(e,"TO",t.qa),oe(e,"TYPE","xmlhttp"),La(t,e),t.o&&t.s&&Dm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Lc(bn(e)),n.u=null,n.S=!0,ZE(n,t)}P.ib=function(){this.v!=null&&(this.v=null,Fc(this),Mm(this),ct(19))};function Uu(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function ST(t,e){var n=null;if(t.g==e){Uu(t),Vm(t),t.g=null;var r=2}else if(Ad(t.i,e))n=e.F,hT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Nc(),qe(r,new KE(r,n)),$c(t)}else TT(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&vb(t,e)||r==2&&Mm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zr(t,5);break;case 4:zr(t,10);break;case 3:zr(t,6);break;default:zr(t,2)}}}function kT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function zr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=nt(t.pb,t);n||(n=new Yr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||Mu(n,"https"),Lc(n)),fb(n.toString(),r)}else ct(2);t.H=0,t.h&&t.h.za(e),AT(t),wT(t)}P.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ct(2)):(this.l.info("Failed to ping google.com"),ct(1))};function AT(t){if(t.H=0,t.ma=[],t.h){const e=fT(t.i);(e.length!=0||t.j.length!=0)&&(Iv(t.ma,e),Iv(t.ma,t.j),t.i.i.length=0,vm(t.j),t.j.length=0),t.h.ya()}}function RT(t,e,n){var r=n instanceof Yr?bn(n):new Yr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Vu(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Yr(null);r&&Mu(s,r),e&&(s.g=e),i&&Vu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&oe(r,n,e),oe(r,"VER",t.ra),La(t,r),r}function CT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ee(new Mc({ob:n})):new Ee(t.va),e.Oa(t.J),e}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function PT(){}P=PT.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function Fu(){if(ms&&!(10<=Number(NN)))throw Error("Environmental error: no available transport.")}Fu.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){Ve.call(this),this.g=new _T(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Qo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new bs(this)}Ue(Rt,Ve);Rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ct(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=RT(t,null,t.Y),$c(t)};Rt.prototype.close=function(){Lm(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=km(t),t=n);e.j.push(new ab(e.fb++,t)),e.H==3&&$c(e)};Rt.prototype.N=function(){this.g.h=null,delete this.j,Lm(this.g),delete this.g,Rt.$.N.call(this)};function xT(t){xm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(xT,xm);function NT(){Nm.call(this),this.status=1}Ue(NT,Nm);function bs(t){this.g=t}Ue(bs,PT);bs.prototype.Ba=function(){qe(this.g,"a")};bs.prototype.Aa=function(t){qe(this.g,new xT(t))};bs.prototype.za=function(t){qe(this.g,new NT)};bs.prototype.ya=function(){qe(this.g,"b")};function _b(){this.blockSize=-1}function Qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(Qt,_b);Qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function tf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)tf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){tf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){tf(this,r),i=0;break}}this.h=i,this.i+=e};Qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function te(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var wb={};function Um(t){return-128<=t&&128>t?CN(t,function(e){return new te([e|0],0>e?-1:0)}):new te([t|0],0>t?-1:0)}function rn(t){if(isNaN(t)||!isFinite(t))return rs;if(0>t)return ze(rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Rd;return new te(e,0)}function bT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ze(bT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rn(Math.pow(e,8)),r=rs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=rn(Math.pow(e,s)),r=r.R(s).add(rn(o))):(r=r.R(n),r=r.add(rn(o)))}return r}var Rd=4294967296,rs=Um(0),Cd=Um(1),Dv=Um(16777216);P=te.prototype;P.ea=function(){if(Ot(this))return-ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Rd+r)*e,e*=Rd}return t};P.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(In(this))return"0";if(Ot(this))return"-"+ze(this).toString(t);for(var e=rn(Math.pow(t,6)),n=this,r="";;){var i=ju(n,e).g;n=$u(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,In(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function In(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ot(t){return t.h==-1}P.X=function(t){return t=$u(this,t),Ot(t)?-1:In(t)?0:1};function ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new te(n,~t.h).add(Cd)}P.abs=function(){return Ot(this)?ze(this):this};P.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new te(n,n[n.length-1]&-2147483648?-1:0)};function $u(t,e){return t.add(ze(e))}P.R=function(t){if(In(this)||In(t))return rs;if(Ot(this))return Ot(t)?ze(this).R(ze(t)):ze(ze(this).R(t));if(Ot(t))return ze(this.R(ze(t)));if(0>this.X(Dv)&&0>t.X(Dv))return rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,_l(n,2*r+2*i),n[2*r+2*i+1]+=s*l,_l(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,_l(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,_l(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new te(n,0)};function _l(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ys(t,e){this.g=t,this.h=e}function ju(t,e){if(In(e))throw Error("division by zero");if(In(t))return new Ys(rs,rs);if(Ot(t))return e=ju(ze(t),e),new Ys(ze(e.g),ze(e.h));if(Ot(e))return e=ju(t,ze(e)),new Ys(ze(e.g),e.h);if(30<t.g.length){if(Ot(t)||Ot(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Cd,r=e;0>=r.X(t);)n=Lv(n),r=Lv(r);var i=Ri(n,1),s=Ri(r,1);for(r=Ri(r,2),n=Ri(n,2);!In(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ri(r,1),n=Ri(n,1)}return e=$u(t,i.R(e)),new Ys(i,e)}for(i=rs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=rn(n),o=s.R(e);Ot(o)||0<o.X(t);)n-=r,s=rn(n),o=s.R(e);In(s)&&(s=Cd),i=i.add(s),t=$u(t,o)}return new Ys(i,t)}P.gb=function(t){return ju(this,t).h};P.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new te(n,this.h&t.h)};P.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new te(n,this.h|t.h)};P.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new te(n,this.h^t.h)};function Lv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new te(n,t.h)}function Ri(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new te(i,t.h)}Fu.prototype.createWebChannel=Fu.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;bc.NO_ERROR=0;bc.TIMEOUT=8;bc.HTTP_ERROR=6;QE.COMPLETE="complete";YE.EventType=Na;Na.OPEN="a";Na.CLOSE="b";Na.ERROR="c";Na.MESSAGE="d";Ve.prototype.listen=Ve.prototype.O;Ee.prototype.listenOnce=Ee.prototype.P;Ee.prototype.getLastError=Ee.prototype.Sa;Ee.prototype.getLastErrorCode=Ee.prototype.Ia;Ee.prototype.getStatus=Ee.prototype.da;Ee.prototype.getResponseJson=Ee.prototype.Wa;Ee.prototype.getResponseText=Ee.prototype.ja;Ee.prototype.send=Ee.prototype.ha;Ee.prototype.setWithCredentials=Ee.prototype.Oa;Qt.prototype.digest=Qt.prototype.l;Qt.prototype.reset=Qt.prototype.reset;Qt.prototype.update=Qt.prototype.j;te.prototype.add=te.prototype.add;te.prototype.multiply=te.prototype.R;te.prototype.modulo=te.prototype.gb;te.prototype.compare=te.prototype.X;te.prototype.toNumber=te.prototype.ea;te.prototype.toString=te.prototype.toString;te.prototype.getBits=te.prototype.D;te.fromNumber=rn;te.fromString=bT;var Eb=function(){return new Fu},Tb=function(){return Nc()},nf=bc,Ib=QE,Sb=vi,Mv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wl=YE,kb=Ee,Ab=Qt,is=te;const Vv="@firebase/firestore";/**
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
 */class Je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
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
 */let Os="10.7.0";/**
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
 */const li=new em("@firebase/firestore");function Xs(){return li.logLevel}function L(t,...e){if(li.logLevel<=Y.DEBUG){const n=e.map(Fm);li.debug(`Firestore (${Os}): ${t}`,...n)}}function On(t,...e){if(li.logLevel<=Y.ERROR){const n=e.map(Fm);li.error(`Firestore (${Os}): ${t}`,...n)}}function gs(t,...e){if(li.logLevel<=Y.WARN){const n=e.map(Fm);li.warn(`Firestore (${Os}): ${t}`,...n)}}function Fm(t){if(typeof t=="string")return t;try{/**
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
 */function F(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw On(e),new Error(e)}function re(t,e){t||F()}function H(t,e){return t}/**
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
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class An{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class OT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class Cb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Pb{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new An;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new An,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new An)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new OT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new Je(e)}}class xb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Nb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ob{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(re(typeof n.token=="string"),this.R=n.token,new bb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Db(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class DT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Db(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function ys(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Se{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Se(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Se(0,0))}static max(){return new j(new Se(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ra{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ra.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ra?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends ra{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const Lb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends ra{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return Lb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new O(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ae.fromString(e))}static fromName(e){return new V(ae.fromString(e).popFirst(5))}static empty(){return new V(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ae(e.slice()))}}function Mb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new Se(n+1,0):new Se(n,r));return new wr(i,V.empty(),e)}function Vb(t){return new wr(t.readTime,t.key,-1)}class wr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new wr(j.min(),V.empty(),-1)}static max(){return new wr(j.max(),V.empty(),-1)}}function Ub(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
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
 */const Fb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $b{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ma(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==Fb)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Va(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $m{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}$m._e=-1;function jc(t){return t==null}function zu(t){return t===0&&1/t==-1/0}function jb(t){return typeof t=="number"&&Number.isInteger(t)&&!zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Uv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ge{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new ge(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fv(this.data.getIterator())}getIteratorFrom(e){return new Fv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class Fv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new St([])}unionWith(e){let n=new Ge(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class MT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new MT("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const zb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(re(!!t),typeof t=="string"){let e=0;const n=zb.exec(t);if(re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ui(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function jm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zm(t){const e=t.mapValue.fields.__previous_value__;return jm(e)?zm(e):e}function ia(t){const e=Er(t.mapValue.fields.__local_write_time__.timestampValue);return new Se(e.seconds,e.nanos)}/**
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
 */class Bb{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class sa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Tl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ci(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?jm(t)?4:Hb(t)?9007199254740991:10:F()}function mn(t,e){if(t===e)return!0;const n=ci(t);if(n!==ci(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ia(t).isEqual(ia(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Er(i.timestampValue),a=Er(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ui(i.bytesValue).isEqual(ui(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),a=Ae(s.doubleValue);return o===a?zu(o)===zu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ys(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Uv(o)!==Uv(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!mn(o[l],a[l])))return!1;return!0}(t,e);default:return F()}}function oa(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=ci(t),r=ci(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ae(s.integerValue||s.doubleValue),l=Ae(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return $v(t.timestampValue,e.timestampValue);case 4:return $v(ia(t),ia(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ui(s),l=ui(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Z(a[u],l[u]);if(c!==0)return c}return Z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Z(Ae(s.latitude),Ae(o.latitude));return a!==0?a:Z(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=vs(a[u],l[u]);if(c)return c}return Z(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Tl.mapValue&&o===Tl.mapValue)return 0;if(s===Tl.mapValue)return 1;if(o===Tl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const f=Z(l[h],c[h]);if(f!==0)return f;const p=vs(a[l[h]],u[c[h]]);if(p!==0)return p}return Z(l.length,c.length)}(t.mapValue,e.mapValue);default:throw F()}}function $v(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Er(t),r=Er(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function _s(t){return Pd(t)}function Pd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ui(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Pd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Pd(n.fields[o])}`;return i+"}"}(t.mapValue):F()}function jv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xd(t){return!!t&&"integerValue"in t}function Bm(t){return!!t&&"arrayValue"in t}function zv(t){return!!t&&"nullValue"in t}function Bv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yl(t){return!!t&&"mapValue"in t}function Io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _i(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Hb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Io(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Io(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){_i(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(Io(this.value))}}function VT(t){const e=[];return _i(t.fields,(n,r)=>{const i=new Be([n]);if(Yl(r)){const s=VT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new St(e)}/**
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
 */class et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,j.min(),j.min(),j.min(),gt.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,j.min(),j.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,j.min(),j.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bu{constructor(e,n){this.position=e,this.inclusive=n}}function Hv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Hu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Wb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class UT{}class Ce extends UT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Gb(e,n,r):n==="array-contains"?new Yb(e,r):n==="in"?new Xb(e,r):n==="not-in"?new Jb(e,r):n==="array-contains-any"?new Zb(e,r):new Ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Kb(e,r):new Qb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vs(n,this.value)):n!==null&&ci(this.value)===ci(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends UT{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Yt(e,n)}matches(e){return FT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function FT(t){return t.op==="and"}function $T(t){return qb(t)&&FT(t)}function qb(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function Nd(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+_s(t.value);if($T(t))return t.filters.map(e=>Nd(e)).join(",");{const e=t.filters.map(n=>Nd(n)).join(",");return`${t.op}(${e})`}}function jT(t,e){return t instanceof Ce?function(r,i){return i instanceof Ce&&r.op===i.op&&r.field.isEqual(i.field)&&mn(r.value,i.value)}(t,e):t instanceof Yt?function(r,i){return i instanceof Yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&jT(o,i.filters[a]),!0):!1}(t,e):void F()}function zT(t){return t instanceof Ce?function(n){return`${n.field.canonicalString()} ${n.op} ${_s(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map(zT).join(" ,")+"}"}(t):"Filter"}class Gb extends Ce{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class Kb extends Ce{constructor(e,n){super(e,"in",n),this.keys=BT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Qb extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=BT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class Yb extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bm(n)&&oa(n.arrayValue,this.value)}}class Xb extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oa(this.value.arrayValue,n)}}class Jb extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(oa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!oa(this.value.arrayValue,n)}}class Zb extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>oa(this.value.arrayValue,r))}}/**
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
 */class e4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function qv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new e4(t,e,n,r,i,s,o)}function Hm(t){const e=H(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),jc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_s(r)).join(",")),e.ce=n}return e.ce}function Wm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Wb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!jT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wv(t.startAt,e.startAt)&&Wv(t.endAt,e.endAt)}function bd(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ua{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function t4(t,e,n,r,i,s,o,a){return new Ua(t,e,n,r,i,s,o,a)}function zc(t){return new Ua(t)}function Gv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function HT(t){return t.collectionGroup!==null}function So(t){const e=H(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ge(Be.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Hu(s,r))}),n.has(Be.keyField().canonicalString())||e.le.push(new Hu(Be.keyField(),r))}return e.le}function fn(t){const e=H(t);return e.he||(e.he=n4(e,So(t))),e.he}function n4(t,e){if(t.limitType==="F")return qv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Hu(i.field,s)});const n=t.endAt?new Bu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bu(t.startAt.position,t.startAt.inclusive):null;return qv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Od(t,e){const n=t.filters.concat([e]);return new Ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Dd(t,e,n){return new Ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bc(t,e){return Wm(fn(t),fn(e))&&t.limitType===e.limitType}function WT(t){return`${Hm(fn(t))}|lt:${t.limitType}`}function Pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>zT(i)).join(", ")}]`),jc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_s(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_s(i)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function Hc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of So(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Hv(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,So(r),i)||r.endAt&&!function(o,a,l){const u=Hv(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,So(r),i))}(t,e)}function r4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qT(t){return(e,n)=>{let r=!1;for(const i of So(t)){const s=i4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function i4(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?vs(l,u):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
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
 */class Ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){_i(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LT(this.inner)}size(){return this.innerSize}}/**
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
 */const s4=new ge(V.comparator);function Dn(){return s4}const GT=new ge(V.comparator);function oo(...t){let e=GT;for(const n of t)e=e.insert(n.key,n);return e}function KT(t){let e=GT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return ko()}function QT(){return ko()}function ko(){return new Ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const o4=new ge(V.comparator),a4=new Ge(V.comparator);function K(...t){let e=a4;for(const n of t)e=e.add(n);return e}const l4=new Ge(Z);function u4(){return l4}/**
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
 */function YT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zu(e)?"-0":e}}function XT(t){return{integerValue:""+t}}function c4(t,e){return jb(e)?XT(e):YT(t,e)}/**
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
 */class Wc{constructor(){this._=void 0}}function h4(t,e,n){return t instanceof aa?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&jm(s)&&(s=zm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ws?ZT(t,e):t instanceof Es?eI(t,e):function(i,s){const o=JT(i,s),a=Kv(o)+Kv(i.Ie);return xd(o)&&xd(i.Ie)?XT(a):YT(i.serializer,a)}(t,e)}function f4(t,e,n){return t instanceof ws?ZT(t,e):t instanceof Es?eI(t,e):n}function JT(t,e){return t instanceof Wu?function(r){return xd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class aa extends Wc{}class ws extends Wc{constructor(e){super(),this.elements=e}}function ZT(t,e){const n=tI(e);for(const r of t.elements)n.some(i=>mn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Es extends Wc{constructor(e){super(),this.elements=e}}function eI(t,e){let n=tI(e);for(const r of t.elements)n=n.filter(i=>!mn(i,r));return{arrayValue:{values:n}}}class Wu extends Wc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Kv(t){return Ae(t.integerValue||t.doubleValue)}function tI(t){return Bm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class qm{constructor(e,n){this.field=e,this.transform=n}}function d4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ws&&i instanceof ws||r instanceof Es&&i instanceof Es?ys(r.elements,i.elements,mn):r instanceof Wu&&i instanceof Wu?mn(r.Ie,i.Ie):r instanceof aa&&i instanceof aa}(t.transform,e.transform)}class p4{constructor(e,n){this.version=e,this.transformResults=n}}class dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new dn}static exists(e){return new dn(void 0,e)}static updateTime(e){return new dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qc{}function nI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iI(t.key,dn.none()):new Fa(t.key,t.data,dn.none());{const n=t.data,r=gt.empty();let i=new Ge(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new br(t.key,r,new St(i.toArray()),dn.none())}}function m4(t,e,n){t instanceof Fa?function(i,s,o){const a=i.value.clone(),l=Yv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof br?function(i,s,o){if(!Xl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Yv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(rI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ao(t,e,n,r){return t instanceof Fa?function(s,o,a,l){if(!Xl(s.precondition,o))return a;const u=s.value.clone(),c=Xv(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof br?function(s,o,a,l){if(!Xl(s.precondition,o))return a;const u=Xv(s.fieldTransforms,l,o),c=o.data;return c.setAll(rI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return Xl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function g4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=JT(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function Qv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ys(r,i,(s,o)=>d4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fa extends qc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class br extends qc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function rI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yv(t,e,n){const r=new Map;re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,f4(o,a,n[i]))}return r}function Xv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,h4(s,o,e))}return r}class iI extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class y4 extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class v4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&m4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=QT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=nI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),K())}isEqual(e){return this.batchId===e.batchId&&ys(this.mutations,e.mutations,(n,r)=>Qv(n,r))&&ys(this.baseMutations,e.baseMutations,(n,r)=>Qv(n,r))}}class Gm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){re(e.mutations.length===r.length);let i=function(){return o4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gm(e,n,r,i)}}/**
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
 */class _4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class w4{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ke,X;function E4(t){switch(t){default:return F();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function sI(t){if(t===void 0)return On("GRPC error has no .code"),I.UNKNOWN;switch(t){case ke.OK:return I.OK;case ke.CANCELLED:return I.CANCELLED;case ke.UNKNOWN:return I.UNKNOWN;case ke.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case ke.INTERNAL:return I.INTERNAL;case ke.UNAVAILABLE:return I.UNAVAILABLE;case ke.UNAUTHENTICATED:return I.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case ke.NOT_FOUND:return I.NOT_FOUND;case ke.ALREADY_EXISTS:return I.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return I.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case ke.ABORTED:return I.ABORTED;case ke.OUT_OF_RANGE:return I.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return I.UNIMPLEMENTED;case ke.DATA_LOSS:return I.DATA_LOSS;default:return F()}}(X=ke||(ke={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function T4(){return new TextEncoder}/**
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
 */const I4=new is([4294967295,4294967295],0);function Jv(t){const e=T4().encode(t),n=new Ab;return n.update(e),new Uint8Array(n.digest())}function Zv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new is([n,r],0),new is([i,s],0)]}class Km{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ao(`Invalid padding: ${n}`);if(r<0)throw new ao(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ao(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ao(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=is.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(is.fromNumber(r)));return i.compare(I4)===1&&(i=new is([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Jv(e),[r,i]=Zv(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Km(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Jv(e),[r,i]=Zv(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ao extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,$a.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gc(j.min(),i,new ge(Z),Dn(),K())}}class $a{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $a(r,n,K(),K(),K())}}/**
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
 */class Jl{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class oI{constructor(e,n){this.targetId=e,this.fe=n}}class aI{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class e_{constructor(){this.ge=0,this.pe=n_(),this.ye=at.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=K(),n=K(),r=K();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new $a(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=n_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,re(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class S4{constructor(e){this.Le=e,this.ke=new Map,this.qe=Dn(),this.Qe=t_(),this.Ke=new ge(Z)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(bd(s))if(r===0){const o=new V(s.path);this.We(n,o,et.newNoDocument(o,j.min()))}else re(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ui(r).toUint8Array()}catch(l){if(l instanceof MT)return gs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Km(o,i,s)}catch(l){return gs(l instanceof ao?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&bd(a.target)){const l=new V(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,et.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=K();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Gc(e,n,this.Ke,this.qe,r);return this.qe=Dn(),this.Qe=t_(),this.Ke=new ge(Z),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new e_,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ge(Z),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new e_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function t_(){return new ge(V.comparator)}function n_(){return new ge(V.comparator)}const k4={asc:"ASCENDING",desc:"DESCENDING"},A4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},R4={and:"AND",or:"OR"};class C4{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ld(t,e){return t.useProto3Json||jc(e)?e:{value:e}}function qu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function P4(t,e){return qu(t,e.toTimestamp())}function pn(t){return re(!!t),j.fromTimestamp(function(n){const r=Er(n);return new Se(r.seconds,r.nanos)}(t))}function Qm(t,e){return function(r){return new ae(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function uI(t){const e=ae.fromString(t);return re(dI(e)),e}function Md(t,e){return Qm(t.databaseId,e.path)}function rf(t,e){const n=uI(e);if(n.get(1)!==t.databaseId.projectId)throw new O(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(cI(n))}function Vd(t,e){return Qm(t.databaseId,e)}function x4(t){const e=uI(t);return e.length===4?ae.emptyPath():cI(e)}function Ud(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cI(t){return re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function r_(t,e,n){return{name:Md(t,e),fields:n.value.mapValue.fields}}function N4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(re(c===void 0||typeof c=="string"),at.fromBase64String(c||"")):(re(c===void 0||c instanceof Uint8Array),at.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?I.UNKNOWN:sI(u.code);return new O(c,u.message||"")}(o);n=new aI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=rf(t,r.document.name),s=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):j.min(),a=new gt({mapValue:{fields:r.document.fields}}),l=et.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Jl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=rf(t,r.document),s=r.readTime?pn(r.readTime):j.min(),o=et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Jl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=rf(t,r.document),s=r.removedTargetIds||[];n=new Jl([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new w4(i,s),a=r.targetId;n=new oI(a,o)}}return n}function b4(t,e){let n;if(e instanceof Fa)n={update:r_(t,e.key,e.value)};else if(e instanceof iI)n={delete:Md(t,e.key)};else if(e instanceof br)n={update:r_(t,e.key,e.data),updateMask:j4(e.fieldMask)};else{if(!(e instanceof y4))return F();n={verify:Md(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof aa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ws)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Es)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Wu)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:P4(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:F()}(t,e.precondition)),n}function O4(t,e){return t&&t.length>0?(re(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?pn(i.updateTime):pn(s);return o.isEqual(j.min())&&(o=pn(s)),new p4(o,i.transformResults||[])}(n,e))):[]}function D4(t,e){return{documents:[Vd(t,e.path)]}}function L4(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Vd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Vd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return fI(Yt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:xi(h.field),direction:U4(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Ld(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function M4(t){let e=x4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){re(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const f=hI(h);return f instanceof Yt&&$T(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(y){return new Hu(Ni(y.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,jc(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,p=h.values||[];return new Bu(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,p=h.values||[];return new Bu(p,f)}(n.endAt)),t4(e,i,o,s,a,"F",l,u)}function V4(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ni(n.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(n.unaryFilter.field);return Ce.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ni(n.unaryFilter.field);return Ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ni(n.unaryFilter.field);return Ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(n){return Ce.create(Ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>hI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return F()}}(n.compositeFilter.op))}(t):F()}function U4(t){return k4[t]}function F4(t){return A4[t]}function $4(t){return R4[t]}function xi(t){return{fieldPath:t.canonicalString()}}function Ni(t){return Be.fromServerFormat(t.fieldPath)}function fI(t){return t instanceof Ce?function(n){if(n.op==="=="){if(Bv(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NAN"}};if(zv(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bv(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NAN"}};if(zv(n.value))return{unaryFilter:{field:xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xi(n.field),op:F4(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(i=>fI(i));return r.length===1?r[0]:{compositeFilter:{op:$4(n.op),filters:r}}}(t):F()}function j4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class rr{constructor(e,n,r,i,s=j.min(),o=j.min(),a=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class z4{constructor(e){this.ut=e}}function B4(t){const e=M4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Dd(e,e.limit,"L"):e}/**
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
 */class H4{constructor(){this.on=new W4}addToCollectionParentIndex(e,n){return this.on.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(wr.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(wr.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class W4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(ae.comparator)).toArray()}}/**
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
 */class Ts{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ts(0)}static Nn(){return new Ts(-1)}}/**
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
 */class q4{constructor(){this.changes=new Ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class G4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class K4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ao(r.mutation,i,St.empty(),Se.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,n,r=K()){const i=Br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=oo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,K()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Dn();const o=ko(),a=function(){return ko()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof br)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ao(c.mutation,u,c.mutation.getFieldMask(),Se.now())):o.set(u.key,St.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new G4(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ko();let i=new ge((o,a)=>o-a),s=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||St.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||K()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=QT();c.forEach(f=>{if(!s.has(f)){const p=nI(n.get(f),r.get(f));p!==null&&h.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):HT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(Br());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,K())).next(c=>({batchId:a,changes:KT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=oo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=oo();return this.indexManager.getCollectionParents(e,s).next(a=>k.forEach(a,l=>{const u=function(h,f){return new Ua(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,et.newInvalidDocument(c)))});let a=oo();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Ao(c.mutation,u,St.empty(),Se.now()),Hc(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class Q4{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return k.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:pn(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:B4(i.bundledQuery),readTime:pn(i.readTime)}}(n)),k.resolve()}}/**
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
 */class Y4{constructor(){this.overlays=new ge(V.comparator),this.lr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=Br(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ge((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Br(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Br(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _4(n,r));let s=this.lr.get(n);s===void 0&&(s=K(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class Ym{constructor(){this.hr=new Ge(De.Pr),this.Ir=new Ge(De.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new De(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new De(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new V(new ae([])),r=new De(n,e),i=new De(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new V(new ae([])),r=new De(n,e),i=new De(n,e+1);let s=K();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new De(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class De{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return V.comparator(e.key,n.key)||Z(e.gr,n.gr)}static Tr(e,n){return Z(e.gr,n.gr)||V.comparator(e.key,n.key)}}/**
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
 */class X4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ge(De.Pr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new v4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new De(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new De(n,0),i=new De(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(Z);return n.forEach(i=>{const s=new De(i,0),o=new De(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),k.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new De(new V(s),0);let a=new Ge(Z);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),k.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){re(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return k.forEach(n.mutations,i=>{const s=new De(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new De(n,0),i=this.yr.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class J4{constructor(e){this.Cr=e,this.docs=function(){return new ge(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ub(Vb(c),r)<=0||(i.has(c.key)||Hc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,i){F()}vr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Z4(this)}getSize(e){return k.resolve(this.size)}}class Z4 extends q4{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class eO{constructor(e){this.persistence=e,this.Fr=new Ds(n=>Hm(n),Wm),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Ym,this.targetCount=0,this.Nr=Ts.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),k.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.kn(n),k.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Or.containsKey(n))}}/**
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
 */class tO{constructor(e,n){this.Br={},this.overlays={},this.Lr=new $m(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new eO(this),this.indexManager=new H4,this.remoteDocumentCache=function(i){return new J4(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new z4(n),this.Kr=new Q4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Y4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new X4(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new nO(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return k.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class nO extends $b{constructor(e){super(),this.currentSequenceNumber=e}}class Xm{constructor(e){this.persistence=e,this.Gr=new Ym,this.zr=null}static jr(e){return new Xm(e)}get Hr(){if(this.zr)return this.zr;throw F()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Hr,r=>{const i=V.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return k.or([()=>k.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class Jm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=K(),i=K();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jm(e,n.fromCache,r,i)}}/**
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
 */class rO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iO{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new rO;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Xs()<=Y.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",Pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),k.resolve()):(Xs()<=Y.DEBUG&&L("QueryEngine","Query:",Pi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Xs()<=Y.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",Pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):k.resolve())}zi(e,n){if(Gv(n))return k.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Dd(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=K(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Dd(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return Gv(n)||i.isEqual(j.min())?k.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?k.resolve(null):(Xs()<=Y.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pi(n)),this.Xi(e,o,n,Mb(i,-1)).next(a=>a))})}Yi(e,n){let r=new Ge(qT(e));return n.forEach((i,s)=>{Hc(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Xs()<=Y.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",Pi(n)),this.Gi.getDocumentsMatchingQuery(e,n,wr.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class sO{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new ge(Z),this.ns=new Ds(s=>Hm(s),Wm),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K4(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function oO(t,e,n,r){return new sO(t,e,n,r)}async function pI(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=K();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function aO(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,f=h.keys();let p=k.resolve();return f.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(v=>{const _=u.docVersions.get(y);re(_!==null),v.version.compareTo(_)<0&&(h.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=K();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function mI(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function lO(t,e){const n=H(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(at.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(v,_,m){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(f,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=Dn(),u=K();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(uO(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(j.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function uO(t,e,n){let r=K(),i=K();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function cO(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hO(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Fd(t,e,n){const r=H(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Va(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function i_(t,e,n){const r=H(t);let i=j.min(),s=K();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=H(l),f=h.ns.get(c);return f!==void 0?k.resolve(h.ts.get(f)):h.qr.getTargetData(u,c)}(r,o,fn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:K())).next(a=>(fO(r,r4(e),a),{documents:a,ls:s})))}function fO(t,e,n){let r=t.rs.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class s_{constructor(){this.activeTargetIds=u4()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dO{constructor(){this.eo=new s_,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new s_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pO{ro(e){}shutdown(){}}/**
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
 */class o_{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Il=null;function sf(){return Il===null?Il=function(){return 268435456+Math.round(2147483648*Math.random())}():Il++,"0x"+Il.toString(16)}/**
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
 */const mO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gO{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const Xe="WebChannelConnection";class yO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=sf(),l=this.So(n,r);L("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(L("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw gs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=mO[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=sf();return new Promise((o,a)=>{const l=new kb;l.setWithCredentials(!0),l.listenOnce(Ib.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case nf.NO_ERROR:const c=l.getResponseJson();L(Xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case nf.TIMEOUT:L(Xe,`RPC '${e}' ${s} timed out`),a(new O(I.DEADLINE_EXCEEDED,"Request time out"));break;case nf.HTTP_ERROR:const h=l.getStatus();if(L(Xe,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const y=function(_){const m=_.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(m)>=0?m:I.UNKNOWN}(p.status);a(new O(y,p.message))}else a(new O(I.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new O(I.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{L(Xe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);L(Xe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=sf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Eb(),a=Tb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");L(Xe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,p=!1;const y=new gO({co:_=>{p?L(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(f||(L(Xe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),L(Xe,`RPC '${e}' stream ${i} sending:`,_),h.send(_))},lo:()=>h.close()}),v=(_,m,d)=>{_.listen(m,g=>{try{d(g)}catch(E){setTimeout(()=>{throw E},0)}})};return v(h,wl.EventType.OPEN,()=>{p||L(Xe,`RPC '${e}' stream ${i} transport opened.`)}),v(h,wl.EventType.CLOSE,()=>{p||(p=!0,L(Xe,`RPC '${e}' stream ${i} transport closed`),y.Ro())}),v(h,wl.EventType.ERROR,_=>{p||(p=!0,gs(Xe,`RPC '${e}' stream ${i} transport errored:`,_),y.Ro(new O(I.UNAVAILABLE,"The operation could not be completed")))}),v(h,wl.EventType.MESSAGE,_=>{var m;if(!p){const d=_.data[0];re(!!d);const g=d,E=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(E){L(Xe,`RPC '${e}' stream ${i} received error:`,E);const T=E.status;let R=function(z){const B=ke[z];if(B!==void 0)return sI(B)}(T),C=E.message;R===void 0&&(R=I.INTERNAL,C="Unknown error status: "+T+" with message "+E.message),p=!0,y.Ro(new O(R,C)),h.close()}else L(Xe,`RPC '${e}' stream ${i} received:`,d),y.Vo(d)}}),v(a,Sb.STAT_EVENT,_=>{_.stat===Mv.PROXY?L(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===Mv.NOPROXY&&L(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function of(){return typeof document<"u"?document:null}/**
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
 */function Kc(t){return new C4(t,!0)}/**
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
 */class gI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class yI{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new gI(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(On(n.toString()),On("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new O(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vO extends yI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=N4(this.serializer,e),r=function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?pn(o.readTime):j.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Ud(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=bd(l)?{documents:D4(s,l)}:{query:L4(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=lI(s,o.resumeToken);const u=Ld(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=qu(s,o.snapshotVersion.toTimestamp());const u=Ld(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=V4(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Ud(this.serializer),n.removeTarget=e,this.e_(n)}}class _O extends yI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=O4(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.I_(r,n)}return re(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Ud(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>b4(this.serializer,r))};this.e_(n)}}/**
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
 */class wO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new O(I.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(I.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(I.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class EO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(On(n),this.f_=!1):L("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class TO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{wi(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=H(l);u.C_.add(4),await ja(u),u.M_.set("Unknown"),u.C_.delete(4),await Qc(u)}(this))})}),this.M_=new EO(r,i)}}async function Qc(t){if(wi(t))for(const e of t.v_)await e(!0)}async function ja(t){for(const e of t.v_)await e(!1)}function vI(t,e){const n=H(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),tg(n)?eg(n):Ls(n).Ho()&&Zm(n,e))}function _I(t,e){const n=H(t),r=Ls(n);n.D_.delete(e),r.Ho()&&wI(n,e),n.D_.size===0&&(r.Ho()?r.Zo():wi(n)&&n.M_.set("Unknown"))}function Zm(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ls(t).u_(e)}function wI(t,e){t.x_.Oe(e),Ls(t).c_(e)}function eg(t){t.x_=new S4({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ls(t).start(),t.M_.g_()}function tg(t){return wi(t)&&!Ls(t).jo()&&t.D_.size>0}function wi(t){return H(t).C_.size===0}function EI(t){t.x_=void 0}async function IO(t){t.D_.forEach((e,n)=>{Zm(t,e)})}async function SO(t,e){EI(t),tg(t)?(t.M_.w_(e),eg(t)):t.M_.set("Unknown")}async function kO(t,e,n){if(t.M_.set("Online"),e instanceof aI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gu(t,r)}else if(e instanceof Jl?t.x_.$e(e):e instanceof oI?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(j.min()))try{const r=await mI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),wI(s,l);const h=new rr(c.target,l,u,c.sequenceNumber);Zm(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Gu(t,r)}}async function Gu(t,e,n){if(!Va(e))throw e;t.C_.add(1),await ja(t),t.M_.set("Offline"),n||(n=()=>mI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Qc(t)})}function TI(t,e){return e().catch(n=>Gu(t,n,e))}async function Yc(t){const e=H(t),n=Tr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;AO(e);)try{const i=await cO(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,RO(e,i)}catch(i){await Gu(e,i)}II(e)&&SI(e)}function AO(t){return wi(t)&&t.b_.length<10}function RO(t,e){t.b_.push(e);const n=Tr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function II(t){return wi(t)&&!Tr(t).jo()&&t.b_.length>0}function SI(t){Tr(t).start()}async function CO(t){Tr(t).E_()}async function PO(t){const e=Tr(t);for(const n of t.b_)e.P_(n.mutations)}async function xO(t,e,n){const r=t.b_.shift(),i=Gm.from(r,e,n);await TI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yc(t)}async function NO(t,e){e&&Tr(t).h_&&await async function(r,i){if(function(o){return E4(o)&&o!==I.ABORTED}(i.code)){const s=r.b_.shift();Tr(r).Yo(),await TI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yc(r)}}(t,e),II(t)&&SI(t)}async function a_(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=wi(n);n.C_.add(3),await ja(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Qc(n)}async function bO(t,e){const n=H(t);e?(n.C_.delete(2),await Qc(n)):e||(n.C_.add(2),await ja(n),n.M_.set("Unknown"))}function Ls(t){return t.O_||(t.O_=function(n,r,i){const s=H(n);return s.A_(),new vO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:IO.bind(null,t),Io:SO.bind(null,t),a_:kO.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),tg(t)?eg(t):t.M_.set("Unknown")):(await t.O_.stop(),EI(t))})),t.O_}function Tr(t){return t.N_||(t.N_=function(n,r,i){const s=H(n);return s.A_(),new _O(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:CO.bind(null,t),Io:NO.bind(null,t),T_:PO.bind(null,t),I_:xO.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Yc(t)):(await t.N_.stop(),t.b_.length>0&&(L("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class ng{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ng(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rg(t,e){if(On("AsyncQueue",`${e}: ${t}`),Va(t))return new O(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=oo(),this.sortedSet=new ge(this.comparator)}static emptySet(e){return new ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class l_{constructor(){this.B_=new ge(V.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):F():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Is{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Is(e,n,ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class OO{constructor(){this.k_=void 0,this.listeners=[]}}class DO{constructor(){this.queries=new Ds(e=>WT(e),Bc),this.onlineState="Unknown",this.q_=new Set}}async function ig(t,e){const n=H(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new OO),i)try{s.k_=await n.onListen(r)}catch(o){const a=rg(o,`Initialization of query '${Pi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&og(n)}async function sg(t,e){const n=H(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function LO(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&og(n)}function MO(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function og(t){t.q_.forEach(e=>{e.next()})}class ag{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class kI{constructor(e){this.key=e}}class AI{constructor(e){this.key=e}}class VO{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=K(),this.mutatedKeys=K(),this._a=qT(e),this.aa=new ss(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new l_,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),p=Hc(this.query,h)?h:null,y=!!f&&this.mutatedKeys.has(f.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;f&&p?f.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),_=!0):this.ha(f,p)||(r.track({type:2,doc:p}),_=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),_=!0):f&&!p&&(r.track({type:1,doc:f}),_=!0,(l||u)&&(a=!0)),_&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,h)=>function(p,y){const v=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return v(p)-v(y)}(c.type,h.type)||this._a(c.doc,h.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new Is(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new l_,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=K(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new AI(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new kI(r))}),n}da(e){this.ia=e.ls,this.oa=K();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Is.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class UO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class FO{constructor(e){this.key=e,this.Ra=!1}}class $O{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ds(a=>WT(a),Bc),this.fa=new Map,this.ga=new Set,this.pa=new ge(V.comparator),this.ya=new Map,this.wa=new Ym,this.Sa={},this.ba=new Map,this.Da=Ts.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function jO(t,e){const n=XO(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await hO(n.localStore,fn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await zO(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&vI(n.remoteStore,o)}return i}async function zO(t,e,n,r,i){t.va=(h,f,p)=>async function(v,_,m,d){let g=_.view.ca(m);g.Zi&&(g=await i_(v.localStore,_.query,!1).then(({documents:C})=>_.view.ca(C,g)));const E=d&&d.targetChanges.get(_.targetId),T=d&&d.targetMismatches.get(_.targetId)!=null,R=_.view.applyChanges(g,v.isPrimaryClient,E,T);return c_(v,_.targetId,R.Ta),R.snapshot}(t,h,f,p);const s=await i_(t.localStore,e,!0),o=new VO(e,s.ls),a=o.ca(s.documents),l=$a.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);c_(t,n,u.Ta);const c=new UO(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function BO(t,e){const n=H(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Bc(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Fd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),_I(n.remoteStore,r.targetId),$d(n,r.targetId)}).catch(Ma)):($d(n,r.targetId),await Fd(n.localStore,r.targetId,!0))}async function HO(t,e,n){const r=JO(t);try{const i=await function(o,a){const l=H(o),u=Se.now(),c=a.reduce((p,y)=>p.add(y.key),K());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Dn(),v=K();return l.ss.getEntries(p,c).next(_=>{y=_,y.forEach((m,d)=>{d.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(_=>{h=_;const m=[];for(const d of a){const g=g4(d,h.get(d.key).overlayedDocument);g!=null&&m.push(new br(d.key,g,VT(g.value.mapValue),dn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(_=>{f=_;const m=_.applyToLocalDocumentSet(h,v);return l.documentOverlayCache.saveOverlays(p,_.batchId,m)})}).then(()=>({batchId:f.batchId,changes:KT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new ge(Z)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await za(r,i.changes),await Yc(r.remoteStore)}catch(i){const s=rg(i,"Failed to persist write");n.reject(s)}}async function RI(t,e){const n=H(t);try{const r=await lO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?re(o.Ra):i.removedDocuments.size>0&&(re(o.Ra),o.Ra=!1))}),await za(n,r,e)}catch(r){await Ma(r)}}function u_(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=H(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const f of h.listeners)f.Q_(a)&&(u=!0)}),u&&og(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function WO(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new ge(V.comparator);o=o.insert(s,et.newNoDocument(s,j.min()));const a=K().add(s),l=new Gc(j.min(),new Map,new ge(Z),o,a);await RI(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),lg(r)}else await Fd(r.localStore,e,!1).then(()=>$d(r,e,n)).catch(Ma)}async function qO(t,e){const n=H(t),r=e.batch.batchId;try{const i=await aO(n.localStore,e);PI(n,r,null),CI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await za(n,i)}catch(i){await Ma(i)}}async function GO(t,e,n){const r=H(t);try{const i=await function(o,a){const l=H(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(re(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);PI(r,e,n),CI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await za(r,i)}catch(i){await Ma(i)}}function CI(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function PI(t,e,n){const r=H(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function $d(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||xI(t,r)})}function xI(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(_I(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),lg(t))}function c_(t,e,n){for(const r of n)r instanceof kI?(t.wa.addReference(r.key,e),KO(t,r)):r instanceof AI?(L("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||xI(t,r.key)):F()}function KO(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(L("SyncEngine","New document in limbo: "+n),t.ga.add(r),lg(t))}function lg(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new V(ae.fromString(e)),r=t.Da.next();t.ya.set(r,new FO(n)),t.pa=t.pa.insert(n,r),vI(t.remoteStore,new rr(fn(zc(n.path)),r,"TargetPurposeLimboResolution",$m._e))}}async function za(t,e,n){const r=H(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Jm.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=H(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>k.forEach(u,f=>k.forEach(f.ki,p=>c.persistence.referenceDelegate.addReference(h,f.targetId,p)).next(()=>k.forEach(f.qi,p=>c.persistence.referenceDelegate.removeReference(h,f.targetId,p)))))}catch(h){if(!Va(h))throw h;L("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const p=c.ts.get(f),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);c.ts=c.ts.insert(f,v)}}}(r.localStore,s))}async function QO(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await pI(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new O(I.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await za(n,r._s)}}function YO(t,e){const n=H(t),r=n.ya.get(e);if(r&&r.Ra)return K().add(r.key);{let i=K();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function XO(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=RI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=WO.bind(null,e),e.Va.a_=LO.bind(null,e.eventManager),e.Va.Fa=MO.bind(null,e.eventManager),e}function JO(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=GO.bind(null,e),e}class h_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Kc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return oO(this.persistence,new iO,e.initialUser,this.serializer)}createPersistence(e){return new tO(Xm.jr,this.serializer)}createSharedClientState(e){return new dO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ZO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>u_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QO.bind(null,this.syncEngine),await bO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new DO}()}createDatastore(e){const n=Kc(e.databaseInfo.databaseId),r=function(s){return new yO(s)}(e.databaseInfo);return function(s,o,a,l){return new wO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new TO(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>u_(this.syncEngine,n,0),function(){return o_.D()?new o_:new pO}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new $O(i,s,o,a,l,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=H(n);L("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ja(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class ug{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):On("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class eD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=DT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function af(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function f_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await nD(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>a_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>a_(e.remoteStore,s)),t._onlineComponents=e}function tD(t){return t.name==="FirebaseError"?t.code===I.FAILED_PRECONDITION||t.code===I.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function nD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await af(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!tD(n))throw n;gs("Error using user provided cache. Falling back to memory cache: "+n),await af(t,new h_)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await af(t,new h_);return t._offlineComponents}async function NI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await f_(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await f_(t,new ZO))),t._onlineComponents}function rD(t){return NI(t).then(e=>e.syncEngine)}async function Ku(t){const e=await NI(t),n=e.eventManager;return n.onListen=jO.bind(null,e.syncEngine),n.onUnlisten=BO.bind(null,e.syncEngine),n}function iD(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new ug({next:f=>{o.enqueueAndForget(()=>sg(s,h));const p=f.docs.has(a);!p&&f.fromCache?u.reject(new O(I.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&f.fromCache&&l&&l.source==="server"?u.reject(new O(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new ag(zc(a.path),c,{includeMetadataChanges:!0,J_:!0});return ig(s,h)}(await Ku(t),t.asyncQueue,e,n,r)),r.promise}function sD(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new ug({next:f=>{o.enqueueAndForget(()=>sg(s,h)),f.fromCache&&l.source==="server"?u.reject(new O(I.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),h=new ag(a,c,{includeMetadataChanges:!0,J_:!0});return ig(s,h)}(await Ku(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function bI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const d_=new Map;/**
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
 */function OI(t,e,n){if(!n)throw new O(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oD(t,e,n,r){if(e===!0&&r===!0)throw new O(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function p_(t){if(!V.isDocumentKey(t))throw new O(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function m_(t){if(V.isDocumentKey(t))throw new O(I.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function Mt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xc(t);throw new O(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class g_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(I.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Rb;switch(r.type){case"firstParty":return new Nb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=d_.get(n);r&&(L("ComponentProvider","Removing Datastore"),d_.delete(n),r.terminate())}(this),Promise.resolve()}}function aD(t,e,n,r={}){var i;const s=(t=Mt(t,Jc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&gs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Je.MOCK_USER;else{a=Sw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new O(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Je(u)}t._authCredentials=new Cb(new OT(a,l))}}/**
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
 */class Ei{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ei(this.firestore,e,this._query)}}class it{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}}class gr extends Ei{constructor(e,n,r){super(e,n,zc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new V(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function lD(t,e,...n){if(t=fe(t),OI("collection","path",e),t instanceof Jc){const r=ae.fromString(e,...n);return m_(r),new gr(t,null,r)}{if(!(t instanceof it||t instanceof gr))throw new O(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return m_(r),new gr(t.firestore,null,r)}}function tt(t,e,...n){if(t=fe(t),arguments.length===1&&(e=DT.newId()),OI("doc","path",e),t instanceof Jc){const r=ae.fromString(e,...n);return p_(r),new it(t,null,new V(r))}{if(!(t instanceof it||t instanceof gr))throw new O(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return p_(r),new it(t.firestore,t instanceof gr?t.converter:null,new V(r))}}/**
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
 */class uD{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new gI(this,"async_queue_retry"),this.iu=()=>{const n=of();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=of();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=of();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new An;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Va(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw On("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=ng.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&F()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function y_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class hi extends Jc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new uD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||DI(this),this._firestoreClient.terminate()}}function cD(t,e){const n=typeof t=="object"?t:nm(),r=typeof t=="string"?t:e||"(default)",i=wc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ew("firestore");s&&aD(i,...s)}return i}function Zc(t){return t._firestoreClient||DI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function DI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Bb(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,bI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new eD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ss(at.fromBase64String(e))}catch(n){throw new O(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ss(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class eh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ms{constructor(e){this._methodName=e}}/**
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
 */class cg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
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
 */const hD=/^__.*__$/;class fD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fa(e,this.data,n,this.fieldTransforms)}}class LI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function MI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class th{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new th(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Qu(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(MI(this.Iu)&&hD.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class dD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Kc(e)}pu(e,n,r,i=!1){return new th({Iu:e,methodName:n,gu:r,path:Be.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hg(t){const e=t._freezeSettings(),n=Kc(t._databaseId);return new dD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pD(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);dg("Data must be an object, but it was:",o,r);const a=UI(r,o);let l,u;if(s.merge)l=new St(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=jd(e,h,n);if(!o.contains(f))throw new O(I.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);$I(c,f)||c.push(f)}l=new St(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new fD(new gt(a),l,u)}class nh extends Ms{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nh}}function VI(t,e,n){return new th({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class fg extends Ms{_toFieldTransform(e){return new qm(e.path,new aa)}isEqual(e){return e instanceof fg}}class mD extends Ms{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=VI(this,e,!0),r=this.yu.map(s=>Ti(s,n)),i=new ws(r);return new qm(e.path,i)}isEqual(e){return this===e}}class gD extends Ms{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=VI(this,e,!0),r=this.yu.map(s=>Ti(s,n)),i=new Es(r);return new qm(e.path,i)}isEqual(e){return this===e}}function yD(t,e,n,r){const i=t.pu(1,e,n);dg("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();_i(r,(l,u)=>{const c=pg(e,l,n);u=fe(u);const h=i.Ru(c);if(u instanceof nh)s.push(c);else{const f=Ti(u,h);f!=null&&(s.push(c),o.set(c,f))}});const a=new St(s);return new LI(o,a,i.fieldTransforms)}function vD(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[jd(e,r,n)],l=[i];if(s.length%2!=0)throw new O(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(jd(e,s[f])),l.push(s[f+1]);const u=[],c=gt.empty();for(let f=a.length-1;f>=0;--f)if(!$I(u,a[f])){const p=a[f];let y=l[f];y=fe(y);const v=o.Ru(p);if(y instanceof nh)u.push(p);else{const _=Ti(y,v);_!=null&&(u.push(p),c.set(p,_))}}const h=new St(u);return new LI(c,h,o.fieldTransforms)}function _D(t,e,n,r=!1){return Ti(n,t.pu(r?4:3,e))}function Ti(t,e){if(FI(t=fe(t)))return dg("Unsupported field value:",e,t),UI(t,e);if(t instanceof Ms)return function(r,i){if(!MI(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ti(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return c4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Se.fromDate(r);return{timestampValue:qu(i.serializer,s)}}if(r instanceof Se){const s=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qu(i.serializer,s)}}if(r instanceof cg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ss)return{bytesValue:lI(i.serializer,r._byteString)};if(r instanceof it){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Xc(r)}`)}(t,e)}function UI(t,e){const n={};return LT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_i(t,(r,i)=>{const s=Ti(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function FI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Se||t instanceof cg||t instanceof Ss||t instanceof it||t instanceof Ms)}function dg(t,e,n){if(!FI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xc(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function jd(t,e,n){if((e=fe(e))instanceof eh)return e._internalPath;if(typeof e=="string")return pg(t,e);throw Qu("Field path arguments must be of type string or ",t,!1,void 0,n)}const wD=new RegExp("[~\\*/\\[\\]]");function pg(t,e,n){if(e.search(wD)>=0)throw Qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eh(...e.split("."))._internalPath}catch{throw Qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(I.INVALID_ARGUMENT,a+t+l)}function $I(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class jI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ED(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ED extends jI{data(){return super.data()}}function mg(t,e){return typeof e=="string"?pg(t,e):e instanceof eh?e._internalPath:e._delegate._internalPath}/**
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
 */function zI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(I.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gg{}class TD extends gg{}function ID(t,e,...n){let r=[];e instanceof gg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof yg).length,a=s.filter(l=>l instanceof rh).length;if(o>1||o>0&&a>0)throw new O(I.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class rh extends TD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new rh(e,n,r)}_apply(e){const n=this._parse(e);return BI(e._query,n),new Ei(e.firestore,e.converter,Od(e._query,n))}_parse(e){const n=hg(e.firestore);return function(s,o,a,l,u,c,h){let f;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new O(I.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){__(h,c);const p=[];for(const y of h)p.push(v_(l,s,y));f={arrayValue:{values:p}}}else f=v_(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||__(h,c),f=_D(a,o,h,c==="in"||c==="not-in");return Ce.create(u,c,f)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function SD(t,e,n){const r=e,i=mg("where",t);return rh._create(i,r,n)}class yg extends gg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Yt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)BI(o,l),o=Od(o,l)}(e._query,n),new Ei(e.firestore,e.converter,Od(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function v_(t,e,n){if(typeof(n=fe(n))=="string"){if(n==="")throw new O(I.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!HT(e)&&n.indexOf("/")!==-1)throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ae.fromString(n));if(!V.isDocumentKey(r))throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return jv(t,new V(r))}if(n instanceof it)return jv(t,n._key);throw new O(I.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xc(n)}.`)}function __(t,e){if(!Array.isArray(t)||t.length===0)throw new O(I.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(I.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(I.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class kD{convertValue(e,n="none"){switch(ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return _i(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new cg(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ia(e));default:return null}}convertTimestamp(e){const n=Er(e);return new Se(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);re(dI(r));const i=new sa(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||On(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function AD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class HI extends jI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zl extends HI{data(e={}){return super.data(e)}}class WI{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zl(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(I.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new lo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Zl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new lo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:RD(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function RD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
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
 */function CD(t){t=Mt(t,it);const e=Mt(t.firestore,hi);return iD(Zc(e),t._key).then(n=>KI(e,t,n))}class vg extends kD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,n)}}function PD(t){t=Mt(t,Ei);const e=Mt(t.firestore,hi),n=Zc(e),r=new vg(e);return zI(t._query),sD(n,t._query).then(i=>new WI(e,r,t,i))}function zd(t,e,n){t=Mt(t,it);const r=Mt(t.firestore,hi),i=AD(t.converter,e,n);return GI(r,[pD(hg(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,dn.none())])}function sn(t,e,n,...r){t=Mt(t,it);const i=Mt(t.firestore,hi),s=hg(i);let o;return o=typeof(e=fe(e))=="string"||e instanceof eh?vD(s,"updateDoc",t._key,e,n,r):yD(s,"updateDoc",t._key,e),GI(i,[o.toMutation(t._key,dn.exists(!0))])}function qI(t,...e){var n,r,i;t=fe(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||y_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(y_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof it)u=Mt(t.firestore,hi),c=zc(t._key.path),l={next:h=>{e[o]&&e[o](KI(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Mt(t,Ei);u=Mt(h.firestore,hi),c=h._query;const f=new vg(u);l={next:p=>{e[o]&&e[o](new WI(u,f,h,p))},error:e[o+1],complete:e[o+2]},zI(t._query)}return function(f,p,y,v){const _=new ug(v),m=new ag(p,_,y);return f.asyncQueue.enqueueAndForget(async()=>ig(await Ku(f),m)),()=>{_.Na(),f.asyncQueue.enqueueAndForget(async()=>sg(await Ku(f),m))}}(Zc(u),c,a,l)}function GI(t,e){return function(r,i){const s=new An;return r.asyncQueue.enqueueAndForget(async()=>HO(await rD(r),i,s)),s.promise}(Zc(t),e)}function KI(t,e,n){const r=n.docs.get(e._key),i=new vg(t);return new HI(t,i,e._key,r,new lo(n.hasPendingWrites,n.fromCache),e.converter)}function Yu(){return new fg("serverTimestamp")}function w_(...t){return new mD("arrayUnion",t)}function xD(...t){return new gD("arrayRemove",t)}(function(e,n=!0){(function(i){Os=i})(gi),ii(new _r("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new hi(new Pb(r.getProvider("auth-internal")),new Ob(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new O(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sa(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),un(Vv,"4.4.0",e),un(Vv,"4.4.0","esm2017")})();const ND={apiKey:"AIzaSyDDUhOaNgpjg9xPibWpsSstdcgSf5MfiMk",authDomain:"chatapp-9be22.firebaseapp.com",projectId:"chatapp-9be22",storageBucket:"chatapp-9be22.appspot.com",messagingSenderId:"723094373201",appId:"1:723094373201:web:3b2c01366706b33f0f0970"};Rw(ND);const Xu=ox(),QI=yN(),He=cD(),jn=S.createContext(),bD=({children:t})=>{const[e,n]=S.useState({});return S.useEffect(()=>{const r=GP(Xu,i=>{n(i)});return()=>{r()}},[]),w.jsx(jn.Provider,{value:{currentUser:e},children:t})};function E_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E_(Object(n),!0).forEach(function(r){be(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ju(t){"@babel/helpers - typeof";return Ju=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ju(t)}function OD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function DD(t,e,n){return e&&T_(t.prototype,e),n&&T_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function be(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _g(t,e){return MD(t)||UD(t,e)||YI(t,e)||$D()}function Ba(t){return LD(t)||VD(t)||YI(t)||FD()}function LD(t){if(Array.isArray(t))return Bd(t)}function MD(t){if(Array.isArray(t))return t}function VD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function UD(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function YI(t,e){if(t){if(typeof t=="string")return Bd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bd(t,e)}}function Bd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function FD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $D(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I_=function(){},wg={},XI={},JI=null,ZI={mark:I_,measure:I_};try{typeof window<"u"&&(wg=window),typeof document<"u"&&(XI=document),typeof MutationObserver<"u"&&(JI=MutationObserver),typeof performance<"u"&&(ZI=performance)}catch{}var jD=wg.navigator||{},S_=jD.userAgent,k_=S_===void 0?"":S_,Ir=wg,ue=XI,A_=JI,Sl=ZI;Ir.document;var zn=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",eS=~k_.indexOf("MSIE")||~k_.indexOf("Trident/"),kl,Al,Rl,Cl,Pl,Ln="___FONT_AWESOME___",Hd=16,tS="fa",nS="svg-inline--fa",fi="data-fa-i2svg",Wd="data-fa-pseudo-element",zD="data-fa-pseudo-element-pending",Eg="data-prefix",Tg="data-icon",R_="fontawesome-i2svg",BD="async",HD=["HTML","HEAD","STYLE","SCRIPT"],rS=function(){try{return!0}catch{return!1}}(),se="classic",_e="sharp",Ig=[se,_e];function Ha(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[se]}})}var la=Ha((kl={},be(kl,se,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),be(kl,_e,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),kl)),ua=Ha((Al={},be(Al,se,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),be(Al,_e,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Al)),ca=Ha((Rl={},be(Rl,se,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),be(Rl,_e,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Rl)),WD=Ha((Cl={},be(Cl,se,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),be(Cl,_e,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Cl)),qD=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,iS="fa-layers-text",GD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,KD=Ha((Pl={},be(Pl,se,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),be(Pl,_e,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Pl)),sS=[1,2,3,4,5,6,7,8,9,10],QD=sS.concat([11,12,13,14,15,16,17,18,19,20]),YD=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ha=new Set;Object.keys(ua[se]).map(ha.add.bind(ha));Object.keys(ua[_e]).map(ha.add.bind(ha));var XD=[].concat(Ig,Ba(ha),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Hr.GROUP,Hr.SWAP_OPACITY,Hr.PRIMARY,Hr.SECONDARY]).concat(sS.map(function(t){return"".concat(t,"x")})).concat(QD.map(function(t){return"w-".concat(t)})),Ro=Ir.FontAwesomeConfig||{};function JD(t){var e=ue.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ZD(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ue&&typeof ue.querySelector=="function"){var eL=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];eL.forEach(function(t){var e=_g(t,2),n=e[0],r=e[1],i=ZD(JD(n));i!=null&&(Ro[r]=i)})}var oS={styleDefault:"solid",familyDefault:"classic",cssPrefix:tS,replacementClass:nS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ro.familyPrefix&&(Ro.cssPrefix=Ro.familyPrefix);var ks=N(N({},oS),Ro);ks.autoReplaceSvg||(ks.observeMutations=!1);var M={};Object.keys(oS).forEach(function(t){Object.defineProperty(M,t,{enumerable:!0,set:function(n){ks[t]=n,Co.forEach(function(r){return r(M)})},get:function(){return ks[t]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(e){ks.cssPrefix=e,Co.forEach(function(n){return n(M)})},get:function(){return ks.cssPrefix}});Ir.FontAwesomeConfig=M;var Co=[];function tL(t){return Co.push(t),function(){Co.splice(Co.indexOf(t),1)}}var Wn=Hd,on={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nL(t){if(!(!t||!zn)){var e=ue.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ue.head.insertBefore(e,r),t}}var rL="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fa(){for(var t=12,e="";t-- >0;)e+=rL[Math.random()*62|0];return e}function Vs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Sg(t){return t.classList?Vs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function aS(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function iL(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(aS(t[n]),'" ')},"").trim()}function ih(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function kg(t){return t.size!==on.size||t.x!==on.x||t.y!==on.y||t.rotate!==on.rotate||t.flipX||t.flipY}function sL(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function oL(t){var e=t.transform,n=t.width,r=n===void 0?Hd:n,i=t.height,s=i===void 0?Hd:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&eS?l+="translate(".concat(e.x/Wn-r/2,"em, ").concat(e.y/Wn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Wn,"em), calc(-50% + ").concat(e.y/Wn,"em)) "):l+="translate(".concat(e.x/Wn,"em, ").concat(e.y/Wn,"em) "),l+="scale(".concat(e.size/Wn*(e.flipX?-1:1),", ").concat(e.size/Wn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var aL=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function lS(){var t=tS,e=nS,n=M.cssPrefix,r=M.replacementClass,i=aL;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var C_=!1;function lf(){M.autoAddCss&&!C_&&(nL(lS()),C_=!0)}var lL={mixout:function(){return{dom:{css:lS,insertCss:lf}}},hooks:function(){return{beforeDOMElementCreation:function(){lf()},beforeI2svg:function(){lf()}}}},Mn=Ir||{};Mn[Ln]||(Mn[Ln]={});Mn[Ln].styles||(Mn[Ln].styles={});Mn[Ln].hooks||(Mn[Ln].hooks={});Mn[Ln].shims||(Mn[Ln].shims=[]);var Ht=Mn[Ln],uS=[],uL=function t(){ue.removeEventListener("DOMContentLoaded",t),Zu=1,uS.map(function(e){return e()})},Zu=!1;zn&&(Zu=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),Zu||ue.addEventListener("DOMContentLoaded",uL));function cL(t){zn&&(Zu?setTimeout(t,0):uS.push(t))}function Wa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?aS(t):"<".concat(e," ").concat(iL(r),">").concat(s.map(Wa).join(""),"</").concat(e,">")}function P_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var hL=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},uf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?hL(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function fL(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function qd(t){var e=fL(t);return e.length===1?e[0].toString(16):null}function dL(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function x_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Gd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=x_(e);typeof Ht.hooks.addPack=="function"&&!i?Ht.hooks.addPack(t,x_(e)):Ht.styles[t]=N(N({},Ht.styles[t]||{}),s),t==="fas"&&Gd("fa",e)}var xl,Nl,bl,qi=Ht.styles,pL=Ht.shims,mL=(xl={},be(xl,se,Object.values(ca[se])),be(xl,_e,Object.values(ca[_e])),xl),Ag=null,cS={},hS={},fS={},dS={},pS={},gL=(Nl={},be(Nl,se,Object.keys(la[se])),be(Nl,_e,Object.keys(la[_e])),Nl);function yL(t){return~XD.indexOf(t)}function vL(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!yL(i)?i:null}var mS=function(){var e=function(s){return uf(qi,function(o,a,l){return o[l]=uf(a,s,{}),o},{})};cS=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),hS=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),pS=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in qi||M.autoFetchSvg,r=uf(pL,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});fS=r.names,dS=r.unicodes,Ag=sh(M.styleDefault,{family:M.familyDefault})};tL(function(t){Ag=sh(t.styleDefault,{family:M.familyDefault})});mS();function Rg(t,e){return(cS[t]||{})[e]}function _L(t,e){return(hS[t]||{})[e]}function Wr(t,e){return(pS[t]||{})[e]}function gS(t){return fS[t]||{prefix:null,iconName:null}}function wL(t){var e=dS[t],n=Rg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Sr(){return Ag}var Cg=function(){return{prefix:null,iconName:null,rest:[]}};function sh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?se:n,i=la[r][t],s=ua[r][t]||ua[r][i],o=t in Ht.styles?t:null;return s||o||null}var N_=(bl={},be(bl,se,Object.keys(ca[se])),be(bl,_e,Object.keys(ca[_e])),bl);function oh(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},be(e,se,"".concat(M.cssPrefix,"-").concat(se)),be(e,_e,"".concat(M.cssPrefix,"-").concat(_e)),e),o=null,a=se;(t.includes(s[se])||t.some(function(u){return N_[se].includes(u)}))&&(a=se),(t.includes(s[_e])||t.some(function(u){return N_[_e].includes(u)}))&&(a=_e);var l=t.reduce(function(u,c){var h=vL(M.cssPrefix,c);if(qi[c]?(c=mL[a].includes(c)?WD[a][c]:c,o=c,u.prefix=c):gL[a].indexOf(c)>-1?(o=c,u.prefix=sh(c,{family:a})):h?u.iconName=h:c!==M.replacementClass&&c!==s[se]&&c!==s[_e]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?gS(u.iconName):{},p=Wr(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||p||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!qi.far&&qi.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},Cg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===_e&&(qi.fass||M.autoFetchSvg)&&(l.prefix="fass",l.iconName=Wr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Sr()||"fas"),l}var EL=function(){function t(){OD(this,t),this.definitions={}}return DD(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=N(N({},n.definitions[a]||{}),o[a]),Gd(a,o[a]);var l=ca[se][a];l&&Gd(l,o[a]),mS()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),b_=[],Gi={},os={},TL=Object.keys(os);function IL(t,e){var n=e.mixoutsTo;return b_=t,Gi={},Object.keys(os).forEach(function(r){TL.indexOf(r)===-1&&delete os[r]}),b_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ju(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Gi[o]||(Gi[o]=[]),Gi[o].push(s[o])})}r.provides&&r.provides(os)}),n}function Kd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Gi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function di(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Gi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Vn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return os[t]?os[t].apply(null,e):void 0}function Qd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Sr();if(e)return e=Wr(n,e)||e,P_(yS.definitions,n,e)||P_(Ht.styles,n,e)}var yS=new EL,SL=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,di("noAuto")},kL={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zn?(di("beforeI2svg",e),Vn("pseudoElements2svg",e),Vn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,cL(function(){RL({autoReplaceSvgRoot:n}),di("watch",e)})}},AL={icon:function(e){if(e===null)return null;if(Ju(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Wr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=sh(e[0]);return{prefix:r,iconName:Wr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(M.cssPrefix,"-"))>-1||e.match(qD))){var i=oh(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Sr(),iconName:Wr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Sr();return{prefix:s,iconName:Wr(s,e)||e}}}},xt={noAuto:SL,config:M,dom:kL,parse:AL,library:yS,findIconDefinition:Qd,toHtml:Wa},RL=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(Ht.styles).length>0||M.autoFetchSvg)&&zn&&M.autoReplaceSvg&&xt.dom.i2svg({node:r})};function ah(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Wa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(zn){var r=ue.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function CL(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(kg(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=ih(N(N({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function PL(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(M.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},i),{},{id:o}),children:r}]}]}function Pg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,f=t.watchable,p=f===void 0?!1:f,y=r.found?r:n,v=y.width,_=y.height,m=i==="fak",d=[M.replacementClass,s?"".concat(M.cssPrefix,"-").concat(s):""].filter(function(z){return h.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(h.classes).join(" "),g={children:[],attributes:N(N({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(_)})},E=m&&!~h.classes.indexOf("fa-fw")?{width:"".concat(v/_*16*.0625,"em")}:{};p&&(g.attributes[fi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||fa())},children:[l]}),delete g.attributes.title);var T=N(N({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:N(N({},E),h.styles)}),R=r.found&&n.found?Vn("generateAbstractMask",T)||{children:[],attributes:{}}:Vn("generateAbstractIcon",T)||{children:[],attributes:{}},C=R.children,x=R.attributes;return T.children=C,T.attributes=x,a?PL(T):CL(T)}function O_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=N(N(N({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[fi]="");var c=N({},o.styles);kg(i)&&(c.transform=oL({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=ih(c);h.length>0&&(u.style=h);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function xL(t){var e=t.content,n=t.title,r=t.extra,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ih(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var cf=Ht.styles;function Yd(t){var e=t[0],n=t[1],r=t.slice(4),i=_g(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Hr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Hr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Hr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var NL={found:!1,width:512,height:512};function bL(t,e){!rS&&!M.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Xd(t,e){var n=e;return e==="fa"&&M.styleDefault!==null&&(e=Sr()),new Promise(function(r,i){if(Vn("missingIconAbstract"),n==="fa"){var s=gS(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&cf[e]&&cf[e][t]){var o=cf[e][t];return r(Yd(o))}bL(t,e),r(N(N({},NL),{},{icon:M.showMissingIcons&&t?Vn("missingIconAbstract")||{}:{}}))})}var D_=function(){},Jd=M.measurePerformance&&Sl&&Sl.mark&&Sl.measure?Sl:{mark:D_,measure:D_},uo='FA "6.5.1"',OL=function(e){return Jd.mark("".concat(uo," ").concat(e," begins")),function(){return vS(e)}},vS=function(e){Jd.mark("".concat(uo," ").concat(e," ends")),Jd.measure("".concat(uo," ").concat(e),"".concat(uo," ").concat(e," begins"),"".concat(uo," ").concat(e," ends"))},xg={begin:OL,end:vS},eu=function(){};function L_(t){var e=t.getAttribute?t.getAttribute(fi):null;return typeof e=="string"}function DL(t){var e=t.getAttribute?t.getAttribute(Eg):null,n=t.getAttribute?t.getAttribute(Tg):null;return e&&n}function LL(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(M.replacementClass)}function ML(){if(M.autoReplaceSvg===!0)return tu.replace;var t=tu[M.autoReplaceSvg];return t||tu.replace}function VL(t){return ue.createElementNS("http://www.w3.org/2000/svg",t)}function UL(t){return ue.createElement(t)}function _S(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?VL:UL:n;if(typeof t=="string")return ue.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(_S(o,{ceFn:r}))}),i}function FL(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var tu={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(_S(i),n)}),n.getAttribute(fi)===null&&M.keepOriginalSource){var r=ue.createComment(FL(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Sg(n).indexOf(M.replacementClass))return tu.replace(e);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===M.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Wa(a)}).join(`
`);n.setAttribute(fi,""),n.innerHTML=o}};function M_(t){t()}function wS(t,e){var n=typeof e=="function"?e:eu;if(t.length===0)n();else{var r=M_;M.mutateApproach===BD&&(r=Ir.requestAnimationFrame||M_),r(function(){var i=ML(),s=xg.begin("mutate");t.map(i),s(),n()})}}var Ng=!1;function ES(){Ng=!0}function Zd(){Ng=!1}var ec=null;function V_(t){if(A_&&M.observeMutations){var e=t.treeCallback,n=e===void 0?eu:e,r=t.nodeCallback,i=r===void 0?eu:r,s=t.pseudoElementsCallback,o=s===void 0?eu:s,a=t.observeMutationsRoot,l=a===void 0?ue:a;ec=new A_(function(u){if(!Ng){var c=Sr();Vs(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!L_(h.addedNodes[0])&&(M.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&M.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&L_(h.target)&&~YD.indexOf(h.attributeName))if(h.attributeName==="class"&&DL(h.target)){var f=oh(Sg(h.target)),p=f.prefix,y=f.iconName;h.target.setAttribute(Eg,p||c),y&&h.target.setAttribute(Tg,y)}else LL(h.target)&&i(h.target)})}}),zn&&ec.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $L(){ec&&ec.disconnect()}function jL(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function zL(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=oh(Sg(t));return i.prefix||(i.prefix=Sr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=_L(i.prefix,t.innerText)||Rg(i.prefix,qd(t.innerText))),!i.iconName&&M.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function BL(t){var e=Vs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return M.autoA11y&&(n?e["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||fa()):(e["aria-hidden"]="true",e.focusable="false")),e}function HL(){return{iconName:null,title:null,titleId:null,prefix:null,transform:on,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function U_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zL(t),r=n.iconName,i=n.prefix,s=n.rest,o=BL(t),a=Kd("parseNodeAttributes",{},t),l=e.styleParser?jL(t):[];return N({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:on,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var WL=Ht.styles;function TS(t){var e=M.autoReplaceSvg==="nest"?U_(t,{styleParser:!1}):U_(t);return~e.extra.classes.indexOf(iS)?Vn("generateLayersText",t,e):Vn("generateSvgReplacementMutation",t,e)}var kr=new Set;Ig.map(function(t){kr.add("fa-".concat(t))});Object.keys(la[se]).map(kr.add.bind(kr));Object.keys(la[_e]).map(kr.add.bind(kr));kr=Ba(kr);function F_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zn)return Promise.resolve();var n=ue.documentElement.classList,r=function(h){return n.add("".concat(R_,"-").concat(h))},i=function(h){return n.remove("".concat(R_,"-").concat(h))},s=M.autoFetchSvg?kr:Ig.map(function(c){return"fa-".concat(c)}).concat(Object.keys(WL));s.includes("fa")||s.push("fa");var o=[".".concat(iS,":not([").concat(fi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(fi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Vs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=xg.begin("onTree"),u=a.reduce(function(c,h){try{var f=TS(h);f&&c.push(f)}catch(p){rS||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(f){wS(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),h(f)})})}function qL(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;TS(t).then(function(n){n&&wS([n],e)})}function GL(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Qd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Qd(i||{})),t(r,N(N({},n),{},{mask:i}))}}var KL=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?on:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,f=h===void 0?null:h,p=n.titleId,y=p===void 0?null:p,v=n.classes,_=v===void 0?[]:v,m=n.attributes,d=m===void 0?{}:m,g=n.styles,E=g===void 0?{}:g;if(e){var T=e.prefix,R=e.iconName,C=e.icon;return ah(N({type:"icon"},e),function(){return di("beforeDOMElementCreation",{iconDefinition:e,params:n}),M.autoA11y&&(f?d["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(y||fa()):(d["aria-hidden"]="true",d.focusable="false")),Pg({icons:{main:Yd(C),mask:l?Yd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:R,transform:N(N({},on),i),symbol:o,title:f,maskId:c,titleId:y,extra:{attributes:d,styles:E,classes:_}})})}},QL={mixout:function(){return{icon:GL(KL)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=F_,n.nodeCallback=qL,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,s=n.callback,o=s===void 0?function(){}:s;return F_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,f=r.extra;return new Promise(function(p,y){Promise.all([Xd(i,a),c.iconName?Xd(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var _=_g(v,2),m=_[0],d=_[1];p([n,Pg({icons:{main:m,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:f,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=ih(a);l.length>0&&(i.style=l);var u;return kg(o)&&(u=Vn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},YL={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return ah({type:"layer"},function(){di("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Ba(s)).join(" ")},children:o}]})}}}},XL={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return ah({type:"counter",content:n},function(){return di("beforeDOMElementCreation",{content:n,params:r}),xL({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Ba(a))}})})}}}},JL={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?on:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,f=r.styles,p=f===void 0?{}:f;return ah({type:"text",content:n},function(){return di("beforeDOMElementCreation",{content:n,params:r}),O_({content:n,transform:N(N({},on),s),title:a,extra:{attributes:h,styles:p,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Ba(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(eS){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return M.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,O_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},ZL=new RegExp('"',"ug"),$_=[1105920,1112319];function e3(t){var e=t.replace(ZL,""),n=dL(e,0),r=n>=$_[0]&&n<=$_[1],i=e.length===2?e[0]===e[1]:!1;return{value:qd(i?e[0]:e),isSecondary:r||i}}function j_(t,e){var n="".concat(zD).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Vs(t.children),o=s.filter(function(C){return C.getAttribute(Wd)===e})[0],a=Ir.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(GD),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?_e:se,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ua[f][l[2].toLowerCase()]:KD[f][u],y=e3(h),v=y.value,_=y.isSecondary,m=l[0].startsWith("FontAwesome"),d=Rg(p,v),g=d;if(m){var E=wL(v);E.iconName&&E.prefix&&(d=E.iconName,p=E.prefix)}if(d&&!_&&(!o||o.getAttribute(Eg)!==p||o.getAttribute(Tg)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var T=HL(),R=T.extra;R.attributes[Wd]=e,Xd(d,p).then(function(C){var x=Pg(N(N({},T),{},{icons:{main:C,mask:Cg()},prefix:p,iconName:g,extra:R,watchable:!0})),z=ue.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=x.map(function(B){return Wa(B)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function t3(t){return Promise.all([j_(t,"::before"),j_(t,"::after")])}function n3(t){return t.parentNode!==document.head&&!~HD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function z_(t){if(zn)return new Promise(function(e,n){var r=Vs(t.querySelectorAll("*")).filter(n3).map(t3),i=xg.begin("searchPseudoElements");ES(),Promise.all(r).then(function(){i(),Zd(),e()}).catch(function(){i(),Zd(),n()})})}var r3={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=z_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;M.searchPseudoElements&&z_(i)}}},B_=!1,i3={mixout:function(){return{dom:{unwatch:function(){ES(),B_=!0}}}},hooks:function(){return{bootstrap:function(){V_(Kd("mutationObserverCallbacks",{}))},noAuto:function(){$L()},watch:function(n){var r=n.observeMutationsRoot;B_?Zd():V_(Kd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},H_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},s3={mixout:function(){return{parse:{transform:function(n){return H_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=H_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:h,path:f};return{tag:"g",attributes:N({},p.outer),children:[{tag:"g",attributes:N({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),p.path)}]}]}}}},hf={x:0,y:0,width:"100%",height:"100%"};function W_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function o3(t){return t.tag==="g"?t.children:[t]}var a3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?oh(i.split(" ").map(function(o){return o.trim()})):Cg();return s.prefix||(s.prefix=Sr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,f=o.icon,p=sL({transform:l,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:N(N({},hf),{},{fill:"white"})},v=c.children?{children:c.children.map(W_)}:{},_={tag:"g",attributes:N({},p.inner),children:[W_(N({tag:c.tag,attributes:N(N({},c.attributes),p.path)},v))]},m={tag:"g",attributes:N({},p.outer),children:[_]},d="mask-".concat(a||fa()),g="clip-".concat(a||fa()),E={tag:"mask",attributes:N(N({},hf),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:o3(f)},E]};return r.push(T,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},hf)}),{children:r,attributes:i}}}},l3={provides:function(e){var n=!1;Ir.matchMedia&&(n=Ir.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:N(N({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:N(N({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:N(N({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},u3={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},c3=[lL,QL,YL,XL,JL,r3,i3,s3,a3,l3,u3];IL(c3,{mixoutsTo:xt});xt.noAuto;xt.config;xt.library;xt.dom;var ep=xt.parse;xt.findIconDefinition;xt.toHtml;var h3=xt.icon;xt.layer;xt.text;xt.counter;var IS={exports:{}},f3="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",d3=f3,p3=d3;function SS(){}function kS(){}kS.resetWarningCache=SS;var m3=function(){function t(r,i,s,o,a,l){if(l!==p3){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:kS,resetWarningCache:SS};return n.PropTypes=n,n};IS.exports=m3();var g3=IS.exports;const G=r0(g3);function q_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ir(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?q_(Object(n),!0).forEach(function(r){Ki(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function tc(t){"@babel/helpers - typeof";return tc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},tc(t)}function Ki(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function v3(t,e){if(t==null)return{};var n=y3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function tp(t){return _3(t)||w3(t)||E3(t)||T3()}function _3(t){if(Array.isArray(t))return np(t)}function w3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function E3(t,e){if(t){if(typeof t=="string")return np(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return np(t,e)}}function np(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function T3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I3(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,f=t.fixedWidth,p=t.inverse,y=t.border,v=t.listItem,_=t.flip,m=t.size,d=t.rotation,g=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":f,"fa-inverse":p,"fa-border":y,"fa-li":v,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},Ki(e,"fa-".concat(m),typeof m<"u"&&m!==null),Ki(e,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Ki(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Ki(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(T){return E[T]?T:null}).filter(function(T){return T})}function S3(t){return t=t-0,t===t}function AS(t){return S3(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var k3=["style"];function A3(t){return t.charAt(0).toUpperCase()+t.slice(1)}function R3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=AS(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[A3(i)]=s:e[i]=s,e},{})}function RS(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return RS(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=R3(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[AS(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=v3(n,k3);return i.attrs.style=ir(ir({},i.attrs.style),o),t.apply(void 0,[e.tag,ir(ir({},i.attrs),a)].concat(tp(r)))}var CS=!1;try{CS=!0}catch{}function C3(){if(!CS&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function G_(t){if(t&&tc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ep.icon)return ep.icon(t);if(t===null)return null;if(t&&tc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ff(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ki({},t,e):{}}var we=ic.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=G_(n),c=ff("classes",[].concat(tp(I3(t)),tp(s.split(" ")))),h=ff("transform",typeof t.transform=="string"?ep.transform(t.transform):t.transform),f=ff("mask",G_(r)),p=h3(u,ir(ir(ir(ir({},c),h),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return C3("Could not find icon",u),null;var y=p.abstract,v={ref:e};return Object.keys(t).forEach(function(_){we.defaultProps.hasOwnProperty(_)||(v[_]=t[_])}),P3(y[0],v)});we.displayName="FontAwesomeIcon";we.propTypes={beat:G.bool,border:G.bool,beatFade:G.bool,bounce:G.bool,className:G.string,fade:G.bool,flash:G.bool,mask:G.oneOfType([G.object,G.array,G.string]),maskId:G.string,fixedWidth:G.bool,inverse:G.bool,flip:G.oneOf([!0,!1,"horizontal","vertical","both"]),icon:G.oneOfType([G.object,G.array,G.string]),listItem:G.bool,pull:G.oneOf(["right","left"]),pulse:G.bool,rotation:G.oneOf([0,90,180,270]),shake:G.bool,size:G.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:G.bool,spinPulse:G.bool,spinReverse:G.bool,symbol:G.oneOfType([G.bool,G.string]),title:G.string,titleId:G.string,transform:G.oneOfType([G.string,G.object]),swapOpacity:G.bool};we.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var P3=RS.bind(null,ic.createElement),x3={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},N3=x3,b3={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},O3={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},D3={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},PS={prefix:"fas",iconName:"image",icon:[512,512,[],"f03e","M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},L3={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},M3=L3,V3={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},U3={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},F3={prefix:"fas",iconName:"paperclip",icon:[448,512,[128206],"f0c6","M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"]},$3={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},j3={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},z3=j3,B3={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},H3=B3,W3={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},q3={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},G3={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]},K3={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},Q3=K3,Y3={prefix:"fas",iconName:"brush",icon:[384,512,[],"f55d","M162.4 6c-1.5-3.6-5-6-8.9-6h-19c-3.9 0-7.5 2.4-8.9 6L104.9 57.7c-3.2 8-14.6 8-17.8 0L66.4 6c-1.5-3.6-5-6-8.9-6H48C21.5 0 0 21.5 0 48V224v22.4V256H9.6 374.4 384v-9.6V224 48c0-26.5-21.5-48-48-48H230.5c-3.9 0-7.5 2.4-8.9 6L200.9 57.7c-3.2 8-14.6 8-17.8 0L162.4 6zM0 288v32c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64V384h64c35.3 0 64-28.7 64-64V288H0zM192 432a16 16 0 1 1 0 32 16 16 0 1 1 0-32z"]};const X3=()=>{const{currentUser:t}=S.useContext(jn);return w.jsxs("div",{className:"navbar",children:[w.jsx("span",{className:"logo",children:"ChatApp"}),w.jsxs("div",{className:"user",children:[w.jsx("img",{src:t.photoURL,alt:""}),w.jsx("span",{children:t.displayName}),w.jsx(we,{icon:D3,color:"lightgray",size:"2x",style:{height:"20px",cursor:"pointer"},onClick:()=>KP(Xu)})]})]})},Un=S.createContext(),J3=({children:t})=>{const{currentUser:e}=S.useContext(jn),n={chatID:"null",user:{}},r=(o,a)=>{switch(a.type){case"CHANGE_USER":return{user:a.payload,chatID:e.uid>a.payload.uid?e.uid+a.payload.uid:a.payload.uid+e.uid};case"RESET_USER":return{user:{},chatID:"null"};default:return o}},[i,s]=S.useReducer(r,n);return w.jsx(Un.Provider,{value:{data:i,dispatch:s},children:t})},Z3=()=>{var o;const[t,e]=S.useState([]),{currentUser:n}=S.useContext(jn),{dispatch:r}=S.useContext(Un);S.useEffect(()=>{const a=()=>{const l=qI(tt(He,"userChats",n.uid),u=>{e(u.data())});return()=>{l()}};n.uid&&a()},[n.uid]);const i=a=>{r({type:"CHANGE_USER",payload:a})},s=a=>{if(!a||!a.seconds)return"";const l=new Date(a.seconds*1e3),u=new Date;return l.getDate()===u.getDate()&&l.getMonth()===u.getMonth()&&l.getFullYear()===u.getFullYear()?l.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):l.toLocaleDateString()};return w.jsx("div",{className:"chats",children:(o=Object.entries(t))==null?void 0:o.sort((a,l)=>l[1].date-a[1].date).map(a=>{var l,u,c;return w.jsxs("div",{className:"userChat",onClick:()=>i(a[1].userInfo),children:[w.jsx("img",{src:a[1].userInfo.photoURL,alt:"avatar"}),w.jsxs("div",{className:"userChatInfo",children:[w.jsxs("div",{className:"namedate",children:[w.jsx("span",{children:a[1].userInfo.displayName}),w.jsx("p",{children:s((l=a[1])==null?void 0:l.date)})]}),w.jsxs("p",{children:[((u=a[1].lastMessage)==null?void 0:u.sender)===n.displayName?"you: ":"",(c=a[1].lastMessage)==null?void 0:c.text]})]})]},a[0])})})},eM=()=>{const[t,e]=S.useState(""),[n,r]=S.useState(null),[i,s]=S.useState(!1),{currentUser:o}=S.useContext(jn),{data:a}=S.useContext(Un),l=async()=>{const h=ID(lD(He,"users"),SD("displayName","==",t));try{const f=await PD(h);f.size===0?(r(null),s(!0)):f.forEach(p=>{r(p.data())})}catch(f){console.log(f)}},u=h=>{h.code==="Enter"&&l()},c=async()=>{const h=o.uid>n.uid?o.uid+n.uid:n.uid+o.uid;try{(await CD(tt(He,"chats",h))).exists()||(await zd(tt(He,"chats",h),{messages:[]}),await sn(tt(He,"userChats",o.uid),{[h+".userInfo"]:{uid:n.uid,displayName:n.displayName,photoURL:n.photoURL},[h+".date"]:Yu()}),await sn(tt(He,"userChats",n.uid),{[h+".userInfo"]:{uid:o.uid,displayName:o.displayName,photoURL:o.photoURL},[h+".date"]:Yu()}))}catch(f){console.log(f)}r(null),e("")};return w.jsxs("div",{className:`sidebar ${a.user.uid&&"sel"}`,children:[w.jsx(X3,{}),w.jsx("div",{className:"search",children:w.jsxs("div",{className:"searchForm",children:[w.jsx(we,{icon:z3,color:"lightgray",size:"2x",className:"maglass"}),w.jsx("input",{type:"text",value:t,placeholder:"Find a user",onKeyDown:u,onChange:h=>{s(!1),r(null),e(h.target.value)}})]})}),i&&w.jsx("div",{className:"noUser",children:w.jsxs("span",{children:["No results found for '",t,"'"]})}),n&&w.jsxs("div",{className:"userChat",onClick:c,children:[w.jsx("img",{src:n.photoURL,alt:""}),w.jsx("div",{className:"userChatInfo",children:w.jsx("span",{children:n.displayName})})]}),w.jsx(Z3,{})]})},tM=({message:t})=>{const{currentUser:e}=S.useContext(jn),{data:n}=S.useContext(Un),r=S.useRef(),[i,s]=S.useState(!1),[o,a]=S.useState(t.text);S.useEffect(()=>{var f;(f=r.current)==null||f.scrollIntoView({behavior:"smooth"})},[t]);const l=f=>{if(!f||!f.seconds)return"";const p=new Date(f.seconds*1e3),y=new Date;return p.getDate()===y.getDate()&&p.getMonth()===y.getMonth()&&p.getFullYear()===y.getFullYear()?p.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):p.toLocaleDateString()},u=f=>{f.key==="Enter"&&c()},c=async()=>{o!==t.text&&o!==""&&(console.log(o),s(!1))},h=async()=>{try{await sn(tt(He,"chats",n.chatID),{messages:xD(t)})}catch(f){console.error("Error deleting message:",f)}};return w.jsxs("div",{ref:r,className:`message ${t.senderID===e.uid&&"owner"}`,children:[w.jsxs("div",{className:"msgInfo",children:[w.jsx("img",{src:t.senderID===e.uid?e.photoURL:n.user.photoURL,alt:""}),w.jsx("span",{children:l(t.data)})]}),w.jsx("div",{className:"editdel",children:i?w.jsxs("div",{className:"editdelicons",children:[w.jsx(we,{icon:q3,className:"editdelicon",onClick:c}),w.jsx(we,{icon:W3,className:"editdelicon",onClick:()=>{a(t.text),s(!1)}})]}):w.jsxs("div",{className:"editdelicons",children:[w.jsx(we,{icon:b3,className:"editdelicon",onClick:()=>s(!0)}),w.jsx(we,{icon:N3,className:"editdelicon",onClick:h})]})}),i?w.jsx("input",{type:"text",onChange:f=>a(f.target.value),value:o,onKeyDown:u}):w.jsxs("div",{className:"msgContent",children:[w.jsx("p",{children:o}),t.img&&w.jsx("img",{src:t.img,alt:""})]})]})},nM=()=>{const{data:t}=S.useContext(Un),[e,n]=S.useState([]);return S.useEffect(()=>{const r=qI(tt(He,"chats",t.chatID),i=>{i.exists()&&n(i.data().messages)});return()=>{r()}},[t.chatID]),w.jsx(w.Fragment,{children:w.jsx("div",{className:"messages",children:e.map(r=>w.jsx(tM,{message:r},r.id))})})},rM=()=>{const[t,e]=S.useState(!1),{data:n}=S.useContext(Un),{currentUser:r}=S.useContext(jn),i=async()=>{try{const s=tt(He,"chats",n.chatID);await sn(s,{messages:[]}),await sn(tt(He,"userChats",r.uid),{[n.chatID+".lastMessage"]:{sender:null,text:null}}),await sn(tt(He,"userChats",n.user.uid),{[n.chatID+".lastMessage"]:{sender:null,text:null}}),e(!1)}catch(s){console.error("Error clearing chat:",s)}};return w.jsx("div",{className:"menu",children:w.jsxs("ul",{children:[w.jsx("li",{children:w.jsx("span",{children:"Change theme"})}),t?w.jsx("li",{children:w.jsxs("div",{className:"confirmClear",children:[w.jsx("span",{children:"Are you sure?"}),w.jsx(we,{icon:M3,className:"confirmIcon",onClick:i}),w.jsx(we,{icon:Q3,className:"confirmIcon",onClick:()=>e(!1)})]})}):w.jsx("li",{onClick:()=>{e(!0)},children:w.jsx("span",{children:"Clear chat"})})]})})};let Ol;const iM=new Uint8Array(16);function sM(){if(!Ol&&(Ol=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ol))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ol(iM)}const Fe=[];for(let t=0;t<256;++t)Fe.push((t+256).toString(16).slice(1));function oM(t,e=0){return Fe[t[e+0]]+Fe[t[e+1]]+Fe[t[e+2]]+Fe[t[e+3]]+"-"+Fe[t[e+4]]+Fe[t[e+5]]+"-"+Fe[t[e+6]]+Fe[t[e+7]]+"-"+Fe[t[e+8]]+Fe[t[e+9]]+"-"+Fe[t[e+10]]+Fe[t[e+11]]+Fe[t[e+12]]+Fe[t[e+13]]+Fe[t[e+14]]+Fe[t[e+15]]}const aM=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),K_={randomUUID:aM};function df(t,e,n){if(K_.randomUUID&&!e&&!t)return K_.randomUUID();t=t||{};const r=t.random||(t.rng||sM)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return oM(r)}const lM=()=>{var f;const[t,e]=S.useState(""),[n,r]=S.useState(null),[i,s]=S.useState(!1),{currentUser:o}=S.useContext(jn),{data:a}=S.useContext(Un),{dispatch:l}=S.useContext(Un),u=p=>{p.key==="Enter"&&h()},c=()=>{l({type:"RESET_USER"})},h=async()=>{if(t==="")return;const p=t;if(e(""),n){const y=PE(QI,df()),v=RE(y,n);v.on(_=>{console.log(_)},()=>{CE(v.snapshot.ref).then(async _=>{await sn(tt(He,"chats",a.chatID),{messages:w_({id:df(),text:p,senderID:o.uid,data:Se.now(),img:_})})})})}else await sn(tt(He,"chats",a.chatID),{messages:w_({id:df(),text:p,senderID:o.uid,data:Se.now()})});await sn(tt(He,"userChats",o.uid),{[a.chatID+".lastMessage"]:{sender:o.displayName,text:p},[a.chatID+".date"]:Yu()}),await sn(tt(He,"userChats",a.user.uid),{[a.chatID+".lastMessage"]:{sender:o.displayName,text:p},[a.chatID+".date"]:Yu()}),r(null)};return w.jsxs("div",{className:`chat ${a.user.uid&&"sel"}`,children:[w.jsxs("div",{className:"chatInfo",children:[w.jsx(we,{icon:U3,color:"lightgray",size:"2x",className:"goBack",onClick:c}),w.jsx("img",{src:a.user.photoURL,alt:"avatar"}),w.jsx("span",{children:(f=a.user)==null?void 0:f.displayName}),w.jsxs("div",{className:"chatIcons",children:[w.jsx(we,{icon:$3,color:"lightgray",size:"2x",className:"optionIcon"}),w.jsx(we,{icon:H3,color:"lightgray",size:"2x",className:"optionIcon"}),w.jsx(we,{icon:O3,color:"lightgray",size:"2x",className:`${i?"activeIcon":"optionIcon"}`,onClick:()=>s(!i)})]})]}),i===!0&&w.jsx(rM,{}),w.jsx(nM,{}),w.jsxs("div",{className:"input",children:[w.jsxs("div",{className:"uBox",children:[w.jsx("input",{type:"text",required:"required",onChange:p=>e(p.target.value),value:t,onKeyDown:u}),w.jsx("span",{children:"type something..."}),w.jsx("i",{})]}),w.jsxs("div",{className:"send",children:[w.jsx(we,{icon:F3,color:"lightgray",size:"2x",style:{height:"24px",cursor:"pointer"}}),w.jsx("input",{type:"file",style:{display:"none"},id:"file",onChange:p=>r(p.target.files[0])}),w.jsx("label",{htmlFor:"file",children:w.jsx(we,{icon:PS,size:"2x",color:"lightgray",style:{height:"24px",cursor:"pointer"}})}),w.jsx("button",{onClick:h,children:w.jsx(we,{icon:G3,size:"2x",color:"#060c21",style:{height:"24px",cursor:"pointer"}})})]})]})]})},uM=()=>{const[t,e]=S.useState(!0),[n,r]=S.useState("lightgray");return S.useContext(Un),w.jsxs("div",{className:"home",style:t?{background:n}:null,children:[w.jsx("input",{type:"color",value:n,id:"favcolor",onChange:i=>{e(!0),r(i.target.value)},style:{display:"none"}}),w.jsx("label",{for:"favcolor",children:w.jsx(we,{icon:V3,color:"black",className:"chTheme"})}),t&&w.jsx(we,{icon:Y3,color:"black",className:"resetTheme",onClick:i=>e(!1)}),w.jsxs("div",{className:"container",children:[w.jsx(eM,{}),w.jsx(lM,{})]})]})};/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function da(){return da=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},da.apply(this,arguments)}var sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(sr||(sr={}));const Q_="popstate";function cM(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Ii(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),rp("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:xS(s))}function r(i,s){lh(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return fM(e,n,r,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function lh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function hM(){return Math.random().toString(36).substr(2,8)}function Y_(t,e){return{usr:t.state,key:t.key,idx:e}}function rp(t,e,n,r){return n===void 0&&(n=null),da({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ii(e):e,{state:n,key:e&&e.key||r||hM()})}function xS(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ii(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function fM(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=sr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(da({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=sr.Pop;let _=c(),m=_==null?null:_-u;u=_,l&&l({action:a,location:v.location,delta:m})}function f(_,m){a=sr.Push;let d=rp(v.location,_,m);n&&n(d,_),u=c()+1;let g=Y_(d,u),E=v.createHref(d);try{o.pushState(g,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(_,m){a=sr.Replace;let d=rp(v.location,_,m);n&&n(d,_),u=c();let g=Y_(d,u),E=v.createHref(d);o.replaceState(g,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function y(_){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof _=="string"?_:xS(_);return Pe(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let v={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Q_,h),l=_,()=>{i.removeEventListener(Q_,h),l=null}},createHref(_){return e(i,_)},createURL:y,encodeLocation(_){let m=y(_);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:p,go(_){return o.go(_)}};return v}var X_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(X_||(X_={}));function dM(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ii(e):e,i=OS(r.pathname||"/",n);if(i==null)return null;let s=NS(t);pM(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=IM(s[a],AM(i));return o}function NS(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Xr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),NS(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:EM(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of bS(s.path))i(s,o,l)}),e}function bS(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=bS(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function pM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:TM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const mM=/^:[\w-]+$/,gM=3,yM=2,vM=1,_M=10,wM=-2,J_=t=>t==="*";function EM(t,e){let n=t.split("/"),r=n.length;return n.some(J_)&&(r+=wM),e&&(r+=yM),n.filter(i=>!J_(i)).reduce((i,s)=>i+(mM.test(s)?gM:s===""?vM:_M),r)}function TM(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function IM(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=SM({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Xr([i,c.pathname]),pathnameBase:NM(Xr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Xr([i,c.pathnameBase]))}return s}function SM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=kM(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let v=a[h]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=a[h];return p&&!y?u[f]=void 0:u[f]=RM(y||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function kM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),lh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function AM(t){try{return decodeURI(t)}catch(e){return lh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function RM(t,e){try{return decodeURIComponent(t)}catch(n){return lh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function OS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function CM(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ii(t):t;return{pathname:n?n.startsWith("/")?n:PM(n,e):e,search:bM(r),hash:OM(i)}}function PM(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function pf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function DS(t,e){let n=xM(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function LS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ii(t):(i=da({},t),Pe(!i.pathname||!i.pathname.includes("?"),pf("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),pf("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),pf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=CM(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Xr=t=>t.join("/").replace(/\/\/+/g,"/"),NM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),bM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function DM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const MS=["post","put","patch","delete"];new Set(MS);const LM=["get",...MS];new Set(LM);/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pa(){return pa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},pa.apply(this,arguments)}const bg=S.createContext(null),MM=S.createContext(null),qa=S.createContext(null),uh=S.createContext(null),Si=S.createContext({outlet:null,matches:[],isDataRoute:!1}),VS=S.createContext(null);function Ga(){return S.useContext(uh)!=null}function Og(){return Ga()||Pe(!1),S.useContext(uh).location}function US(t){S.useContext(qa).static||S.useLayoutEffect(t)}function FS(){let{isDataRoute:t}=S.useContext(Si);return t?QM():VM()}function VM(){Ga()||Pe(!1);let t=S.useContext(bg),{basename:e,future:n,navigator:r}=S.useContext(qa),{matches:i}=S.useContext(Si),{pathname:s}=Og(),o=JSON.stringify(DS(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return US(()=>{a.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=LS(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Xr([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}function UM(t,e){return FM(t,e)}function FM(t,e,n,r){Ga()||Pe(!1);let{navigator:i}=S.useContext(qa),{matches:s}=S.useContext(Si),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Og(),c;if(e){var h;let _=typeof e=="string"?Ii(e):e;l==="/"||(h=_.pathname)!=null&&h.startsWith(l)||Pe(!1),c=_}else c=u;let f=c.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",y=dM(t,{pathname:p}),v=HM(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},a,_.params),pathname:Xr([l,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:Xr([l,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),s,n,r);return e&&v?S.createElement(uh.Provider,{value:{location:pa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:sr.Pop}},v):v}function $M(){let t=KM(),e=DM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const jM=S.createElement($M,null);class zM extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(Si.Provider,{value:this.props.routeContext},S.createElement(VS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function BM(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(bg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Si.Provider,{value:e},r)}function HM(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));c>=0||Pe(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:f,errors:p}=n,y=h.route.loader&&f[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,f)=>{let p,y=!1,v=null,_=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,v=h.route.errorElement||jM,l&&(u<0&&f===0?(YM("route-fallback",!1),y=!0,_=null):u===f&&(y=!0,_=h.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),d=()=>{let g;return p?g=v:y?g=_:h.route.Component?g=S.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=c,S.createElement(BM,{match:h,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?S.createElement(zM,{location:n.location,revalidation:n.revalidation,component:v,error:p,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var $S=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}($S||{}),nc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(nc||{});function WM(t){let e=S.useContext(bg);return e||Pe(!1),e}function qM(t){let e=S.useContext(MM);return e||Pe(!1),e}function GM(t){let e=S.useContext(Si);return e||Pe(!1),e}function jS(t){let e=GM(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function KM(){var t;let e=S.useContext(VS),n=qM(nc.UseRouteError),r=jS(nc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function QM(){let{router:t}=WM($S.UseNavigateStable),e=jS(nc.UseNavigateStable),n=S.useRef(!1);return US(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,pa({fromRouteId:e},s)))},[t,e])}const Z_={};function YM(t,e,n){!e&&!Z_[t]&&(Z_[t]=!0)}function XM(t){let{to:e,replace:n,state:r,relative:i}=t;Ga()||Pe(!1);let{future:s,static:o}=S.useContext(qa),{matches:a}=S.useContext(Si),{pathname:l}=Og(),u=FS(),c=LS(e,DS(a,s.v7_relativeSplatPath),l,i==="path"),h=JSON.stringify(c);return S.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:i}),[u,h,i,n,r]),null}function nu(t){Pe(!1)}function JM(t){let{basename:e="/",children:n=null,location:r,navigationType:i=sr.Pop,navigator:s,static:o=!1,future:a}=t;Ga()&&Pe(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:pa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ii(r));let{pathname:c="/",search:h="",hash:f="",state:p=null,key:y="default"}=r,v=S.useMemo(()=>{let _=OS(c,l);return _==null?null:{location:{pathname:_,search:h,hash:f,state:p,key:y},navigationType:i}},[l,c,h,f,p,y,i]);return v==null?null:S.createElement(qa.Provider,{value:u},S.createElement(uh.Provider,{children:n,value:v}))}function ZM(t){let{children:e,location:n}=t;return UM(ip(e),n)}new Promise(()=>{});function ip(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,ip(r.props.children,s));return}r.type!==nu&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ip(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const eV="startTransition",e0=sk[eV];function tV(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=cM({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(h=>{u&&e0?e0(()=>l(h)):l(h)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.createElement(JM,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var t0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(t0||(t0={}));var n0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(n0||(n0={}));const nV=()=>w.jsx("div",{className:"load",children:w.jsx("div",{className:"loadicon",children:w.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -1 24 26",children:w.jsx("path",{d:"M20.492,7.969,10.954.975A5,5,0,0,0,3,5.005V19a4.994,4.994,0,0,0,7.954,4.03l9.538-6.994a5,5,0,0,0,0-8.062Z"})})})}),rV=()=>{const[t,e]=S.useState({uname:"",mail:"",pswd:""}),[n,r]=S.useState(),[i,s]=S.useState(!0),[o,a]=S.useState(!1),[l,u]=S.useState(!1),c=FS(),h=m=>{let d={[m.target.name]:m.target.value};e({...t,...d})},f=m=>{const d=m.target.files[0];r(d)},p=m=>{m.key==="Enter"&&(i===!1?v():y())},y=async()=>{u(!0);const m=t.mail,d=t.pswd;try{await zP(Xu,m,d),c("/")}catch{a(!0),u(!1)}},v=async()=>{u(!0);const m=t.uname,d=t.mail,g=t.pswd,E=n;try{if(!E){console.error("No file selected for upload."),a(!0);return}const T=await jP(Xu,d,g),R=new Date().getTime(),C=PE(QI,`${m+R}`),x=await RE(C,E),z=await CE(x.ref);await HP(T.user,{displayName:m,photoURL:z}),await zd(tt(He,"users",T.user.uid),{uid:T.user.uid,displayName:m,email:d,photoURL:z}),await zd(tt(He,"userChats",T.user.uid),{}),c("/")}catch(T){console.error("Signup Error:",T.message),a(!0),u(!1)}},_=()=>{e({uname:"",mail:"",pswd:""}),r(null),s(!i)};return l===!0?w.jsx(nV,{}):i===!0?w.jsx("div",{className:"loginBody",children:w.jsxs("div",{className:"loginBox logg",children:[w.jsx("span",{className:"borderline"}),w.jsxs("div",{className:"loginForm",children:[w.jsx("h2",{children:"NITChat"}),w.jsx("h2",{children:"Login"}),w.jsxs("div",{className:"uBox",children:[w.jsx("input",{type:"email",name:"mail",value:t.mail,required:"required",onChange:m=>h(m)}),w.jsx("span",{children:"Email"}),w.jsx("i",{})]}),w.jsxs("div",{className:"uBox",children:[w.jsx("input",{type:"password",name:"pswd",value:t.pswd,required:"required",onChange:m=>h(m),onKeyDown:p}),w.jsx("span",{children:"Password"}),w.jsx("i",{})]}),w.jsx("input",{type:"submit",value:"Sign in",onClick:y}),w.jsxs("p",{children:["Don't have an account? ",w.jsx("span",{onClick:_,children:"Register"})]})]})]})}):w.jsx("div",{className:"loginBody",children:w.jsxs("div",{className:"loginBox",children:[w.jsx("span",{className:"borderline"}),w.jsxs("div",{className:"loginForm",children:[w.jsx("h1",{children:"NITChat"}),w.jsx("h2",{children:"Register"}),w.jsxs("div",{className:"uBox",children:[w.jsx("input",{type:"text",name:"uname",required:"required",value:t.uname,onChange:m=>h(m)}),w.jsx("span",{children:"Username"}),w.jsx("i",{})]}),w.jsxs("div",{className:"uBox",children:[w.jsx("input",{type:"email",name:"mail",value:t.mail,required:"required",onChange:m=>h(m)}),w.jsx("span",{children:"Email"}),w.jsx("i",{})]}),w.jsxs("div",{className:"uBox",children:[w.jsx("input",{type:"password",name:"pswd",value:t.pswd,required:"required",onChange:m=>h(m),onKeyDown:p}),w.jsx("span",{children:"Password"}),w.jsx("i",{})]}),w.jsx("input",{type:"file",id:"file",style:{display:"none"},onChange:m=>f(m)}),w.jsxs("label",{htmlFor:"file",style:{cursor:"pointer"},children:[w.jsx(we,{icon:PS,color:"#00bcd4",size:"2x"}),w.jsx("span",{children:"Avatar"})]}),w.jsx("input",{type:"submit",value:"Sign up",onClick:v}),o&&w.jsx("p",{children:"Something went wrong!"}),w.jsxs("p",{children:["Already have an account? ",w.jsx("span",{onClick:_,children:"Login"})]})]})]})})};function iV(){const{currentUser:t}=S.useContext(jn),e=({children:n})=>t?n:w.jsx(XM,{to:"/login"});return w.jsx(w.Fragment,{children:w.jsx(ZM,{children:w.jsxs(nu,{path:"/",children:[w.jsx(nu,{index:!0,element:w.jsx(e,{children:w.jsx(uM,{})})}),w.jsx(nu,{path:"login",element:w.jsx(rV,{})})]})})})}const sV=mf.createRoot(document.getElementById("root"));sV.render(w.jsx(bD,{children:w.jsx(J3,{children:w.jsx(ic.StrictMode,{children:w.jsx(tV,{children:w.jsx(iV,{})})})})}));
