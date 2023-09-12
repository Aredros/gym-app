function WT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function P_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var x_={exports:{}},Gu={},b_={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),qT=Symbol.for("react.portal"),KT=Symbol.for("react.fragment"),GT=Symbol.for("react.strict_mode"),QT=Symbol.for("react.profiler"),YT=Symbol.for("react.provider"),XT=Symbol.for("react.context"),JT=Symbol.for("react.forward_ref"),ZT=Symbol.for("react.suspense"),eS=Symbol.for("react.memo"),tS=Symbol.for("react.lazy"),vg=Symbol.iterator;function nS(t){return t===null||typeof t!="object"?null:(t=vg&&t[vg]||t["@@iterator"],typeof t=="function"?t:null)}var N_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D_=Object.assign,O_={};function hs(t,e,n){this.props=t,this.context=e,this.refs=O_,this.updater=n||N_}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function M_(){}M_.prototype=hs.prototype;function Uf(t,e,n){this.props=t,this.context=e,this.refs=O_,this.updater=n||N_}var zf=Uf.prototype=new M_;zf.constructor=Uf;D_(zf,hs.prototype);zf.isPureReactComponent=!0;var _g=Array.isArray,L_=Object.prototype.hasOwnProperty,jf={current:null},V_={key:!0,ref:!0,__self:!0,__source:!0};function F_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)L_.call(e,r)&&!V_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:oa,type:t,key:s,ref:o,props:i,_owner:jf.current}}function rS(t,e){return{$$typeof:oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bf(t){return typeof t=="object"&&t!==null&&t.$$typeof===oa}function iS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wg=/\/+/g;function Xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?iS(""+t.key):e.toString(36)}function Tl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case oa:case qT:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xc(o,0):r,_g(i)?(n="",t!=null&&(n=t.replace(wg,"$&/")+"/"),Tl(i,e,n,"",function(u){return u})):i!=null&&(Bf(i)&&(i=rS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_g(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Xc(s,a);o+=Tl(s,e,n,l,i)}else if(l=nS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Xc(s,a++),o+=Tl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ua(t,e,n){if(t==null)return t;var r=[],i=0;return Tl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function sS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},Sl={transition:null},oS={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:Sl,ReactCurrentOwner:jf};Y.Children={map:Ua,forEach:function(t,e,n){Ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ua(t,function(){e++}),e},toArray:function(t){return Ua(t,function(e){return e})||[]},only:function(t){if(!Bf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=hs;Y.Fragment=KT;Y.Profiler=QT;Y.PureComponent=Uf;Y.StrictMode=GT;Y.Suspense=ZT;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=D_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=jf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)L_.call(e,l)&&!V_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:oa,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:XT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:YT,_context:t},t.Consumer=t};Y.createElement=F_;Y.createFactory=function(t){var e=F_.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:JT,render:t}};Y.isValidElement=Bf;Y.lazy=function(t){return{$$typeof:tS,_payload:{_status:-1,_result:t},_init:sS}};Y.memo=function(t,e){return{$$typeof:eS,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Sl.transition;Sl.transition={};try{t()}finally{Sl.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return dt.current.useCallback(t,e)};Y.useContext=function(t){return dt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return dt.current.useEffect(t,e)};Y.useId=function(){return dt.current.useId()};Y.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return dt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};Y.useRef=function(t){return dt.current.useRef(t)};Y.useState=function(t){return dt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return dt.current.useTransition()};Y.version="18.2.0";b_.exports=Y;var T=b_.exports;const ke=P_(T),aS=WT({__proto__:null,default:ke},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=T,uS=Symbol.for("react.element"),cS=Symbol.for("react.fragment"),hS=Object.prototype.hasOwnProperty,dS=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fS={key:!0,ref:!0,__self:!0,__source:!0};function $_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)hS.call(e,r)&&!fS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uS,type:t,key:s,ref:o,props:i,_owner:dS.current}}Gu.Fragment=cS;Gu.jsx=$_;Gu.jsxs=$_;x_.exports=Gu;var Hf=x_.exports;const mn=Hf.Fragment,w=Hf.jsx,P=Hf.jsxs;var Yh={},U_={exports:{}},Ct={},z_={exports:{}},j_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(M,q){var K=M.length;M.push(q);e:for(;0<K;){var we=K-1>>>1,Oe=M[we];if(0<i(Oe,q))M[we]=q,M[K]=Oe,K=we;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var q=M[0],K=M.pop();if(K!==q){M[0]=K;e:for(var we=0,Oe=M.length,Fa=Oe>>>1;we<Fa;){var Nr=2*(we+1)-1,Yc=M[Nr],Dr=Nr+1,$a=M[Dr];if(0>i(Yc,K))Dr<Oe&&0>i($a,Yc)?(M[we]=$a,M[Dr]=K,we=Dr):(M[we]=Yc,M[Nr]=K,we=Nr);else if(Dr<Oe&&0>i($a,K))M[we]=$a,M[Dr]=K,we=Dr;else break e}}return q}function i(M,q){var K=M.sortIndex-q.sortIndex;return K!==0?K:M.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(M){for(var q=n(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=M)r(u),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(u)}}function E(M){if(_=!1,g(M),!y)if(n(l)!==null)y=!0,Gc(I);else{var q=n(u);q!==null&&Qc(E,q.startTime-M)}}function I(M,q){y=!1,_&&(_=!1,f(x),x=-1),m=!0;var K=d;try{for(g(q),h=n(l);h!==null&&(!(h.expirationTime>q)||M&&!Ft());){var we=h.callback;if(typeof we=="function"){h.callback=null,d=h.priorityLevel;var Oe=we(h.expirationTime<=q);q=t.unstable_now(),typeof Oe=="function"?h.callback=Oe:h===n(l)&&r(l),g(q)}else r(l);h=n(l)}if(h!==null)var Fa=!0;else{var Nr=n(u);Nr!==null&&Qc(E,Nr.startTime-q),Fa=!1}return Fa}finally{h=null,d=K,m=!1}}var A=!1,k=null,x=-1,B=5,H=-1;function Ft(){return!(t.unstable_now()-H<B)}function Cs(){if(k!==null){var M=t.unstable_now();H=M;var q=!0;try{q=k(!0,M)}finally{q?Rs():(A=!1,k=null)}}else A=!1}var Rs;if(typeof p=="function")Rs=function(){p(Cs)};else if(typeof MessageChannel<"u"){var yg=new MessageChannel,HT=yg.port2;yg.port1.onmessage=Cs,Rs=function(){HT.postMessage(null)}}else Rs=function(){v(Cs,0)};function Gc(M){k=M,A||(A=!0,Rs())}function Qc(M,q){x=v(function(){M(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(M){M.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,Gc(I))},t.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<M?Math.floor(1e3/M):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(M){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var K=d;d=q;try{return M()}finally{d=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(M,q){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var K=d;d=M;try{return q()}finally{d=K}},t.unstable_scheduleCallback=function(M,q,K){var we=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?we+K:we):K=we,M){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=K+Oe,M={id:c++,callback:q,priorityLevel:M,startTime:K,expirationTime:Oe,sortIndex:-1},K>we?(M.sortIndex=K,e(u,M),n(l)===null&&M===n(u)&&(_?(f(x),x=-1):_=!0,Qc(E,K-we))):(M.sortIndex=Oe,e(l,M),y||m||(y=!0,Gc(I))),M},t.unstable_shouldYield=Ft,t.unstable_wrapCallback=function(M){var q=d;return function(){var K=d;d=q;try{return M.apply(this,arguments)}finally{d=K}}}})(j_);z_.exports=j_;var pS=z_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_=T,St=pS;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H_=new Set,_o={};function ui(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(_o[t]=e,t=0;t<e.length;t++)H_.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xh=Object.prototype.hasOwnProperty,mS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Eg={},Ig={};function gS(t){return Xh.call(Ig,t)?!0:Xh.call(Eg,t)?!1:mS.test(t)?Ig[t]=!0:(Eg[t]=!0,!1)}function yS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vS(t,e,n,r){if(e===null||typeof e>"u"||yS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,qf);Ge[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,qf);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,qf);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kf(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vS(e,n,i,r)&&(n=null),r||i===null?gS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=B_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),wi=Symbol.for("react.portal"),Ei=Symbol.for("react.fragment"),Gf=Symbol.for("react.strict_mode"),Jh=Symbol.for("react.profiler"),W_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),Qf=Symbol.for("react.forward_ref"),Zh=Symbol.for("react.suspense"),ed=Symbol.for("react.suspense_list"),Yf=Symbol.for("react.memo"),Wn=Symbol.for("react.lazy"),K_=Symbol.for("react.offscreen"),Tg=Symbol.iterator;function Ps(t){return t===null||typeof t!="object"?null:(t=Tg&&t[Tg]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,Jc;function $s(t){if(Jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jc=e&&e[1]||""}return`
`+Jc+t}var Zc=!1;function eh(t,e){if(!t||Zc)return"";Zc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function _S(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=eh(t.type,!1),t;case 11:return t=eh(t.type.render,!1),t;case 1:return t=eh(t.type,!0),t;default:return""}}function td(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ei:return"Fragment";case wi:return"Portal";case Jh:return"Profiler";case Gf:return"StrictMode";case Zh:return"Suspense";case ed:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q_:return(t.displayName||"Context")+".Consumer";case W_:return(t._context.displayName||"Context")+".Provider";case Qf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yf:return e=t.displayName||null,e!==null?e:td(t.type)||"Memo";case Wn:e=t._payload,t=t._init;try{return td(t(e))}catch{}}return null}function wS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return td(e);case 8:return e===Gf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function G_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ES(t){var e=G_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ja(t){t._valueTracker||(t._valueTracker=ES(t))}function Q_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=G_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nd(t,e){var n=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Sg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Y_(t,e){e=e.checked,e!=null&&Kf(t,"checked",e,!1)}function rd(t,e){Y_(t,e);var n=yr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?id(t,e.type,n):e.hasOwnProperty("defaultValue")&&id(t,e.type,yr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ag(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function id(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function Li(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Us(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yr(n)}}function X_(t,e){var n=yr(e.value),r=yr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function J_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function od(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?J_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,Z_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},IS=["Webkit","ms","Moz","O"];Object.keys(Js).forEach(function(t){IS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Js[e]=Js[t]})});function e0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Js.hasOwnProperty(t)&&Js[t]?(""+e).trim():e+"px"}function t0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=e0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var TS=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ad(t,e){if(e){if(TS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function ld(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=null;function Xf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cd=null,Vi=null,Fi=null;function Rg(t){if(t=ua(t)){if(typeof cd!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Zu(e),cd(t.stateNode,t.type,e))}}function n0(t){Vi?Fi?Fi.push(t):Fi=[t]:Vi=t}function r0(){if(Vi){var t=Vi,e=Fi;if(Fi=Vi=null,Rg(t),e)for(t=0;t<e.length;t++)Rg(e[t])}}function i0(t,e){return t(e)}function s0(){}var th=!1;function o0(t,e,n){if(th)return t(e,n);th=!0;try{return i0(t,e,n)}finally{th=!1,(Vi!==null||Fi!==null)&&(s0(),r0())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var r=Zu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var hd=!1;if(Tn)try{var xs={};Object.defineProperty(xs,"passive",{get:function(){hd=!0}}),window.addEventListener("test",xs,xs),window.removeEventListener("test",xs,xs)}catch{hd=!1}function SS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Zs=!1,Gl=null,Ql=!1,dd=null,AS={onError:function(t){Zs=!0,Gl=t}};function kS(t,e,n,r,i,s,o,a,l){Zs=!1,Gl=null,SS.apply(AS,arguments)}function CS(t,e,n,r,i,s,o,a,l){if(kS.apply(this,arguments),Zs){if(Zs){var u=Gl;Zs=!1,Gl=null}else throw Error(C(198));Ql||(Ql=!0,dd=u)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function a0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pg(t){if(ci(t)!==t)throw Error(C(188))}function RS(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pg(i),t;if(s===r)return Pg(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function l0(t){return t=RS(t),t!==null?u0(t):null}function u0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u0(t);if(e!==null)return e;t=t.sibling}return null}var c0=St.unstable_scheduleCallback,xg=St.unstable_cancelCallback,PS=St.unstable_shouldYield,xS=St.unstable_requestPaint,Ee=St.unstable_now,bS=St.unstable_getCurrentPriorityLevel,Jf=St.unstable_ImmediatePriority,h0=St.unstable_UserBlockingPriority,Yl=St.unstable_NormalPriority,NS=St.unstable_LowPriority,d0=St.unstable_IdlePriority,Qu=null,sn=null;function DS(t){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Qu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:LS,OS=Math.log,MS=Math.LN2;function LS(t){return t>>>=0,t===0?32:31-(OS(t)/MS|0)|0}var Ha=64,Wa=4194304;function zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=zs(a):(s&=o,s!==0&&(r=zs(s)))}else o=n&~i,o!==0?r=zs(o):s!==0&&(r=zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function VS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function FS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=VS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function fd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function f0(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function nh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function $S(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Zf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function p0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var m0,ep,g0,y0,v0,pd=!1,qa=[],rr=null,ir=null,sr=null,Io=new Map,To=new Map,Kn=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bg(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(e.pointerId)}}function bs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ua(e),e!==null&&ep(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function zS(t,e,n,r,i){switch(e){case"focusin":return rr=bs(rr,t,e,n,r,i),!0;case"dragenter":return ir=bs(ir,t,e,n,r,i),!0;case"mouseover":return sr=bs(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Io.set(s,bs(Io.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,To.set(s,bs(To.get(s)||null,t,e,n,r,i)),!0}return!1}function _0(t){var e=Vr(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=a0(n),e!==null){t.blockedOn=e,v0(t.priority,function(){g0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=md(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ud=r,n.target.dispatchEvent(r),ud=null}else return e=ua(n),e!==null&&ep(e),t.blockedOn=n,!1;e.shift()}return!0}function Ng(t,e,n){Al(t)&&n.delete(e)}function jS(){pd=!1,rr!==null&&Al(rr)&&(rr=null),ir!==null&&Al(ir)&&(ir=null),sr!==null&&Al(sr)&&(sr=null),Io.forEach(Ng),To.forEach(Ng)}function Ns(t,e){t.blockedOn===e&&(t.blockedOn=null,pd||(pd=!0,St.unstable_scheduleCallback(St.unstable_NormalPriority,jS)))}function So(t){function e(i){return Ns(i,t)}if(0<qa.length){Ns(qa[0],t);for(var n=1;n<qa.length;n++){var r=qa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Ns(rr,t),ir!==null&&Ns(ir,t),sr!==null&&Ns(sr,t),Io.forEach(e),To.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)_0(n),n.blockedOn===null&&Kn.shift()}var $i=Fn.ReactCurrentBatchConfig,Jl=!0;function BS(t,e,n,r){var i=te,s=$i.transition;$i.transition=null;try{te=1,tp(t,e,n,r)}finally{te=i,$i.transition=s}}function HS(t,e,n,r){var i=te,s=$i.transition;$i.transition=null;try{te=4,tp(t,e,n,r)}finally{te=i,$i.transition=s}}function tp(t,e,n,r){if(Jl){var i=md(t,e,n,r);if(i===null)dh(t,e,r,Zl,n),bg(t,r);else if(zS(i,t,e,n,r))r.stopPropagation();else if(bg(t,r),e&4&&-1<US.indexOf(t)){for(;i!==null;){var s=ua(i);if(s!==null&&m0(s),s=md(t,e,n,r),s===null&&dh(t,e,r,Zl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else dh(t,e,r,null,n)}}var Zl=null;function md(t,e,n,r){if(Zl=null,t=Xf(r),t=Vr(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=a0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function w0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bS()){case Jf:return 1;case h0:return 4;case Yl:case NS:return 16;case d0:return 536870912;default:return 16}default:return 16}}var Jn=null,np=null,kl=null;function E0(){if(kl)return kl;var t,e=np,n=e.length,r,i="value"in Jn?Jn.value:Jn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return kl=i.slice(t,1<r?1-r:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Dg(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Dg,this.isPropagationStopped=Dg,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rp=Rt(ds),la=pe({},ds,{view:0,detail:0}),WS=Rt(la),rh,ih,Ds,Yu=pe({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ip,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ds&&(Ds&&t.type==="mousemove"?(rh=t.screenX-Ds.screenX,ih=t.screenY-Ds.screenY):ih=rh=0,Ds=t),rh)},movementY:function(t){return"movementY"in t?t.movementY:ih}}),Og=Rt(Yu),qS=pe({},Yu,{dataTransfer:0}),KS=Rt(qS),GS=pe({},la,{relatedTarget:0}),sh=Rt(GS),QS=pe({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),YS=Rt(QS),XS=pe({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JS=Rt(XS),ZS=pe({},ds,{data:0}),Mg=Rt(ZS),e2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=n2[t])?!!e[t]:!1}function ip(){return r2}var i2=pe({},la,{key:function(t){if(t.key){var e=e2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ip,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s2=Rt(i2),o2=pe({},Yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lg=Rt(o2),a2=pe({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ip}),l2=Rt(a2),u2=pe({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),c2=Rt(u2),h2=pe({},Yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),d2=Rt(h2),f2=[9,13,27,32],sp=Tn&&"CompositionEvent"in window,eo=null;Tn&&"documentMode"in document&&(eo=document.documentMode);var p2=Tn&&"TextEvent"in window&&!eo,I0=Tn&&(!sp||eo&&8<eo&&11>=eo),Vg=String.fromCharCode(32),Fg=!1;function T0(t,e){switch(t){case"keyup":return f2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function m2(t,e){switch(t){case"compositionend":return S0(e);case"keypress":return e.which!==32?null:(Fg=!0,Vg);case"textInput":return t=e.data,t===Vg&&Fg?null:t;default:return null}}function g2(t,e){if(Ii)return t==="compositionend"||!sp&&T0(t,e)?(t=E0(),kl=np=Jn=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return I0&&e.locale!=="ko"?null:e.data;default:return null}}var y2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $g(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!y2[t.type]:e==="textarea"}function A0(t,e,n,r){n0(r),e=eu(e,"onChange"),0<e.length&&(n=new rp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var to=null,Ao=null;function v2(t){L0(t,0)}function Xu(t){var e=Ai(t);if(Q_(e))return t}function _2(t,e){if(t==="change")return e}var k0=!1;if(Tn){var oh;if(Tn){var ah="oninput"in document;if(!ah){var Ug=document.createElement("div");Ug.setAttribute("oninput","return;"),ah=typeof Ug.oninput=="function"}oh=ah}else oh=!1;k0=oh&&(!document.documentMode||9<document.documentMode)}function zg(){to&&(to.detachEvent("onpropertychange",C0),Ao=to=null)}function C0(t){if(t.propertyName==="value"&&Xu(Ao)){var e=[];A0(e,Ao,t,Xf(t)),o0(v2,e)}}function w2(t,e,n){t==="focusin"?(zg(),to=e,Ao=n,to.attachEvent("onpropertychange",C0)):t==="focusout"&&zg()}function E2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xu(Ao)}function I2(t,e){if(t==="click")return Xu(e)}function T2(t,e){if(t==="input"||t==="change")return Xu(e)}function S2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:S2;function ko(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Xh.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function jg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bg(t,e){var n=jg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=jg(n)}}function R0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P0(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function A2(t){var e=P0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R0(n.ownerDocument.documentElement,n)){if(r!==null&&op(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bg(n,s);var o=Bg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var k2=Tn&&"documentMode"in document&&11>=document.documentMode,Ti=null,gd=null,no=null,yd=!1;function Hg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yd||Ti==null||Ti!==Kl(r)||(r=Ti,"selectionStart"in r&&op(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),no&&ko(no,r)||(no=r,r=eu(gd,"onSelect"),0<r.length&&(e=new rp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ti)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},lh={},x0={};Tn&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function Ju(t){if(lh[t])return lh[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in x0)return lh[t]=e[n];return t}var b0=Ju("animationend"),N0=Ju("animationiteration"),D0=Ju("animationstart"),O0=Ju("transitionend"),M0=new Map,Wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){M0.set(t,e),ui(e,[t])}for(var uh=0;uh<Wg.length;uh++){var ch=Wg[uh],C2=ch.toLowerCase(),R2=ch[0].toUpperCase()+ch.slice(1);Ar(C2,"on"+R2)}Ar(b0,"onAnimationEnd");Ar(N0,"onAnimationIteration");Ar(D0,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(O0,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P2=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function qg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,CS(r,e,void 0,t),t.currentTarget=null}function L0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;qg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;qg(i,a,u),s=l}}}if(Ql)throw t=dd,Ql=!1,dd=null,t}function ie(t,e){var n=e[Id];n===void 0&&(n=e[Id]=new Set);var r=t+"__bubble";n.has(r)||(V0(e,t,2,!1),n.add(r))}function hh(t,e,n){var r=0;e&&(r|=4),V0(n,t,r,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[Qa]){t[Qa]=!0,H_.forEach(function(n){n!=="selectionchange"&&(P2.has(n)||hh(n,!1,t),hh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,hh("selectionchange",!1,e))}}function V0(t,e,n,r){switch(w0(e)){case 1:var i=BS;break;case 4:i=HS;break;default:i=tp}n=i.bind(null,e,n,t),i=void 0,!hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function dh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Vr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}o0(function(){var u=s,c=Xf(n),h=[];e:{var d=M0.get(t);if(d!==void 0){var m=rp,y=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":m=s2;break;case"focusin":y="focus",m=sh;break;case"focusout":y="blur",m=sh;break;case"beforeblur":case"afterblur":m=sh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=KS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=l2;break;case b0:case N0:case D0:m=YS;break;case O0:m=c2;break;case"scroll":m=WS;break;case"wheel":m=d2;break;case"copy":case"cut":case"paste":m=JS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Lg}var _=(e&4)!==0,v=!_&&t==="scroll",f=_?d!==null?d+"Capture":null:d;_=[];for(var p=u,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,f!==null&&(E=Eo(p,f),E!=null&&_.push(Ro(p,E,g)))),v)break;p=p.return}0<_.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==ud&&(y=n.relatedTarget||n.fromElement)&&(Vr(y)||y[Sn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Vr(y):null,y!==null&&(v=ci(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=Og,E="onMouseLeave",f="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=Lg,E="onPointerLeave",f="onPointerEnter",p="pointer"),v=m==null?d:Ai(m),g=y==null?d:Ai(y),d=new _(E,p+"leave",m,n,c),d.target=v,d.relatedTarget=g,E=null,Vr(c)===u&&(_=new _(f,p+"enter",y,n,c),_.target=g,_.relatedTarget=v,E=_),v=E,m&&y)t:{for(_=m,f=y,p=0,g=_;g;g=gi(g))p++;for(g=0,E=f;E;E=gi(E))g++;for(;0<p-g;)_=gi(_),p--;for(;0<g-p;)f=gi(f),g--;for(;p--;){if(_===f||f!==null&&_===f.alternate)break t;_=gi(_),f=gi(f)}_=null}else _=null;m!==null&&Kg(h,d,m,_,!1),y!==null&&v!==null&&Kg(h,v,y,_,!0)}}e:{if(d=u?Ai(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var I=_2;else if($g(d))if(k0)I=T2;else{I=E2;var A=w2}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=I2);if(I&&(I=I(t,u))){A0(h,I,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&id(d,"number",d.value)}switch(A=u?Ai(u):window,t){case"focusin":($g(A)||A.contentEditable==="true")&&(Ti=A,gd=u,no=null);break;case"focusout":no=gd=Ti=null;break;case"mousedown":yd=!0;break;case"contextmenu":case"mouseup":case"dragend":yd=!1,Hg(h,n,c);break;case"selectionchange":if(k2)break;case"keydown":case"keyup":Hg(h,n,c)}var k;if(sp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ii?T0(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(I0&&n.locale!=="ko"&&(Ii||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ii&&(k=E0()):(Jn=c,np="value"in Jn?Jn.value:Jn.textContent,Ii=!0)),A=eu(u,x),0<A.length&&(x=new Mg(x,t,null,n,c),h.push({event:x,listeners:A}),k?x.data=k:(k=S0(n),k!==null&&(x.data=k)))),(k=p2?m2(t,n):g2(t,n))&&(u=eu(u,"onBeforeInput"),0<u.length&&(c=new Mg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=k))}L0(h,e)})}function Ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Eo(t,n),s!=null&&r.unshift(Ro(t,s,i)),s=Eo(t,e),s!=null&&r.push(Ro(t,s,i))),t=t.return}return r}function gi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Eo(n,s),l!=null&&o.unshift(Ro(n,l,a))):i||(l=Eo(n,s),l!=null&&o.push(Ro(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var x2=/\r\n?/g,b2=/\u0000|\uFFFD/g;function Gg(t){return(typeof t=="string"?t:""+t).replace(x2,`
`).replace(b2,"")}function Ya(t,e,n){if(e=Gg(e),Gg(t)!==e&&n)throw Error(C(425))}function tu(){}var vd=null,_d=null;function wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ed=typeof setTimeout=="function"?setTimeout:void 0,N2=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,D2=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(t){return Qg.resolve(null).then(t).catch(O2)}:Ed;function O2(t){setTimeout(function(){throw t})}function fh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),So(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);So(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),Zt="__reactFiber$"+fs,Po="__reactProps$"+fs,Sn="__reactContainer$"+fs,Id="__reactEvents$"+fs,M2="__reactListeners$"+fs,L2="__reactHandles$"+fs;function Vr(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Sn]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yg(t);t!==null;){if(n=t[Zt])return n;t=Yg(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[Zt]||t[Sn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Zu(t){return t[Po]||null}var Td=[],ki=-1;function kr(t){return{current:t}}function le(t){0>ki||(t.current=Td[ki],Td[ki]=null,ki--)}function re(t,e){ki++,Td[ki]=t.current,t.current=e}var vr={},st=kr(vr),yt=kr(!1),Yr=vr;function Qi(t,e){var n=t.type.contextTypes;if(!n)return vr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function nu(){le(yt),le(st)}function Xg(t,e,n){if(st.current!==vr)throw Error(C(168));re(st,e),re(yt,n)}function F0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,wS(t)||"Unknown",i));return pe({},n,r)}function ru(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Yr=st.current,re(st,t),re(yt,yt.current),!0}function Jg(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=F0(t,e,Yr),r.__reactInternalMemoizedMergedChildContext=t,le(yt),le(st),re(st,t)):le(yt),re(yt,n)}var fn=null,ec=!1,ph=!1;function $0(t){fn===null?fn=[t]:fn.push(t)}function V2(t){ec=!0,$0(t)}function Cr(){if(!ph&&fn!==null){ph=!0;var t=0,e=te;try{var n=fn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,ec=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),c0(Jf,Cr),i}finally{te=e,ph=!1}}return null}var Ci=[],Ri=0,iu=null,su=0,xt=[],bt=0,Xr=null,gn=1,yn="";function Or(t,e){Ci[Ri++]=su,Ci[Ri++]=iu,iu=t,su=e}function U0(t,e,n){xt[bt++]=gn,xt[bt++]=yn,xt[bt++]=Xr,Xr=t;var r=gn;t=yn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gn=1<<32-Ht(e)+i|n<<i|r,yn=s+t}else gn=1<<s|n<<i|r,yn=t}function ap(t){t.return!==null&&(Or(t,1),U0(t,1,0))}function lp(t){for(;t===iu;)iu=Ci[--Ri],Ci[Ri]=null,su=Ci[--Ri],Ci[Ri]=null;for(;t===Xr;)Xr=xt[--bt],xt[bt]=null,yn=xt[--bt],xt[bt]=null,gn=xt[--bt],xt[bt]=null}var Tt=null,Et=null,he=!1,jt=null;function z0(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Et=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Et=null,!0):!1;default:return!1}}function Sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ad(t){if(he){var e=Et;if(e){var n=e;if(!Zg(t,e)){if(Sd(t))throw Error(C(418));e=or(n.nextSibling);var r=Tt;e&&Zg(t,e)?z0(r,n):(t.flags=t.flags&-4097|2,he=!1,Tt=t)}}else{if(Sd(t))throw Error(C(418));t.flags=t.flags&-4097|2,he=!1,Tt=t}}}function ey(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Xa(t){if(t!==Tt)return!1;if(!he)return ey(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wd(t.type,t.memoizedProps)),e&&(e=Et)){if(Sd(t))throw j0(),Error(C(418));for(;e;)z0(t,e),e=or(e.nextSibling)}if(ey(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=Tt?or(t.stateNode.nextSibling):null;return!0}function j0(){for(var t=Et;t;)t=or(t.nextSibling)}function Yi(){Et=Tt=null,he=!1}function up(t){jt===null?jt=[t]:jt.push(t)}var F2=Fn.ReactCurrentBatchConfig;function Ut(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ou=kr(null),au=null,Pi=null,cp=null;function hp(){cp=Pi=au=null}function dp(t){var e=ou.current;le(ou),t._currentValue=e}function kd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ui(t,e){au=t,cp=Pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(cp!==t)if(t={context:t,memoizedValue:e,next:null},Pi===null){if(au===null)throw Error(C(308));Pi=t,au.dependencies={lanes:0,firstContext:t}}else Pi=Pi.next=t;return e}var Fr=null;function fp(t){Fr===null?Fr=[t]:Fr.push(t)}function B0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fp(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function pp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function H0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,fp(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zf(t,n)}}function ty(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lu(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=pe({},h,d);break e;case 2:qn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Zr|=o,t.lanes=o,t.memoizedState=h}}function ny(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var W0=new B_.Component().refs;function Cd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ct(),i=ur(t),s=En(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Wt(e,t,i,r),Rl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ct(),i=ur(t),s=En(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(Wt(e,t,i,r),Rl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ct(),r=ur(t),i=En(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(Wt(e,t,r,n),Rl(e,t,r))}};function ry(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ko(n,r)||!ko(i,s):!0}function q0(t,e,n){var r=!1,i=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=vt(e)?Yr:st.current,r=e.contextTypes,s=(r=r!=null)?Qi(t,i):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function iy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function Rd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=W0,pp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=vt(e)?Yr:st.current,i.context=Qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&tc.enqueueReplaceState(i,i.state,null),lu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===W0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sy(t){var e=t._init;return e(t._payload)}function K0(t){function e(f,p){if(t){var g=f.deletions;g===null?(f.deletions=[p],f.flags|=16):g.push(p)}}function n(f,p){if(!t)return null;for(;p!==null;)e(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=cr(f,p),f.index=0,f.sibling=null,f}function s(f,p,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<p?(f.flags|=2,p):g):(f.flags|=2,p)):(f.flags|=1048576,p)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,p,g,E){return p===null||p.tag!==6?(p=Eh(g,f.mode,E),p.return=f,p):(p=i(p,g),p.return=f,p)}function l(f,p,g,E){var I=g.type;return I===Ei?c(f,p,g.props.children,E,g.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Wn&&sy(I)===p.type)?(E=i(p,g.props),E.ref=Os(f,p,g),E.return=f,E):(E=Ol(g.type,g.key,g.props,null,f.mode,E),E.ref=Os(f,p,g),E.return=f,E)}function u(f,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ih(g,f.mode,E),p.return=f,p):(p=i(p,g.children||[]),p.return=f,p)}function c(f,p,g,E,I){return p===null||p.tag!==7?(p=Kr(g,f.mode,E,I),p.return=f,p):(p=i(p,g),p.return=f,p)}function h(f,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Eh(""+p,f.mode,g),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case za:return g=Ol(p.type,p.key,p.props,null,f.mode,g),g.ref=Os(f,null,p),g.return=f,g;case wi:return p=Ih(p,f.mode,g),p.return=f,p;case Wn:var E=p._init;return h(f,E(p._payload),g)}if(Us(p)||Ps(p))return p=Kr(p,f.mode,g,null),p.return=f,p;Ja(f,p)}return null}function d(f,p,g,E){var I=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:a(f,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case za:return g.key===I?l(f,p,g,E):null;case wi:return g.key===I?u(f,p,g,E):null;case Wn:return I=g._init,d(f,p,I(g._payload),E)}if(Us(g)||Ps(g))return I!==null?null:c(f,p,g,E,null);Ja(f,g)}return null}function m(f,p,g,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(g)||null,a(p,f,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case za:return f=f.get(E.key===null?g:E.key)||null,l(p,f,E,I);case wi:return f=f.get(E.key===null?g:E.key)||null,u(p,f,E,I);case Wn:var A=E._init;return m(f,p,g,A(E._payload),I)}if(Us(E)||Ps(E))return f=f.get(g)||null,c(p,f,E,I,null);Ja(p,E)}return null}function y(f,p,g,E){for(var I=null,A=null,k=p,x=p=0,B=null;k!==null&&x<g.length;x++){k.index>x?(B=k,k=null):B=k.sibling;var H=d(f,k,g[x],E);if(H===null){k===null&&(k=B);break}t&&k&&H.alternate===null&&e(f,k),p=s(H,p,x),A===null?I=H:A.sibling=H,A=H,k=B}if(x===g.length)return n(f,k),he&&Or(f,x),I;if(k===null){for(;x<g.length;x++)k=h(f,g[x],E),k!==null&&(p=s(k,p,x),A===null?I=k:A.sibling=k,A=k);return he&&Or(f,x),I}for(k=r(f,k);x<g.length;x++)B=m(k,f,x,g[x],E),B!==null&&(t&&B.alternate!==null&&k.delete(B.key===null?x:B.key),p=s(B,p,x),A===null?I=B:A.sibling=B,A=B);return t&&k.forEach(function(Ft){return e(f,Ft)}),he&&Or(f,x),I}function _(f,p,g,E){var I=Ps(g);if(typeof I!="function")throw Error(C(150));if(g=I.call(g),g==null)throw Error(C(151));for(var A=I=null,k=p,x=p=0,B=null,H=g.next();k!==null&&!H.done;x++,H=g.next()){k.index>x?(B=k,k=null):B=k.sibling;var Ft=d(f,k,H.value,E);if(Ft===null){k===null&&(k=B);break}t&&k&&Ft.alternate===null&&e(f,k),p=s(Ft,p,x),A===null?I=Ft:A.sibling=Ft,A=Ft,k=B}if(H.done)return n(f,k),he&&Or(f,x),I;if(k===null){for(;!H.done;x++,H=g.next())H=h(f,H.value,E),H!==null&&(p=s(H,p,x),A===null?I=H:A.sibling=H,A=H);return he&&Or(f,x),I}for(k=r(f,k);!H.done;x++,H=g.next())H=m(k,f,x,H.value,E),H!==null&&(t&&H.alternate!==null&&k.delete(H.key===null?x:H.key),p=s(H,p,x),A===null?I=H:A.sibling=H,A=H);return t&&k.forEach(function(Cs){return e(f,Cs)}),he&&Or(f,x),I}function v(f,p,g,E){if(typeof g=="object"&&g!==null&&g.type===Ei&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case za:e:{for(var I=g.key,A=p;A!==null;){if(A.key===I){if(I=g.type,I===Ei){if(A.tag===7){n(f,A.sibling),p=i(A,g.props.children),p.return=f,f=p;break e}}else if(A.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Wn&&sy(I)===A.type){n(f,A.sibling),p=i(A,g.props),p.ref=Os(f,A,g),p.return=f,f=p;break e}n(f,A);break}else e(f,A);A=A.sibling}g.type===Ei?(p=Kr(g.props.children,f.mode,E,g.key),p.return=f,f=p):(E=Ol(g.type,g.key,g.props,null,f.mode,E),E.ref=Os(f,p,g),E.return=f,f=E)}return o(f);case wi:e:{for(A=g.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(f,p.sibling),p=i(p,g.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else e(f,p);p=p.sibling}p=Ih(g,f.mode,E),p.return=f,f=p}return o(f);case Wn:return A=g._init,v(f,p,A(g._payload),E)}if(Us(g))return y(f,p,g,E);if(Ps(g))return _(f,p,g,E);Ja(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(f,p.sibling),p=i(p,g),p.return=f,f=p):(n(f,p),p=Eh(g,f.mode,E),p.return=f,f=p),o(f)):n(f,p)}return v}var Xi=K0(!0),G0=K0(!1),ca={},on=kr(ca),xo=kr(ca),bo=kr(ca);function $r(t){if(t===ca)throw Error(C(174));return t}function mp(t,e){switch(re(bo,e),re(xo,t),re(on,ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:od(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=od(e,t)}le(on),re(on,e)}function Ji(){le(on),le(xo),le(bo)}function Q0(t){$r(bo.current);var e=$r(on.current),n=od(e,t.type);e!==n&&(re(xo,t),re(on,n))}function gp(t){xo.current===t&&(le(on),le(xo))}var de=kr(0);function uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mh=[];function yp(){for(var t=0;t<mh.length;t++)mh[t]._workInProgressVersionPrimary=null;mh.length=0}var Pl=Fn.ReactCurrentDispatcher,gh=Fn.ReactCurrentBatchConfig,Jr=0,fe=null,Pe=null,Le=null,cu=!1,ro=!1,No=0,$2=0;function Qe(){throw Error(C(321))}function vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function _p(t,e,n,r,i,s){if(Jr=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?B2:H2,t=n(r,i),ro){s=0;do{if(ro=!1,No=0,25<=s)throw Error(C(301));s+=1,Le=Pe=null,e.updateQueue=null,Pl.current=W2,t=n(r,i)}while(ro)}if(Pl.current=hu,e=Pe!==null&&Pe.next!==null,Jr=0,Le=Pe=fe=null,cu=!1,e)throw Error(C(300));return t}function wp(){var t=No!==0;return No=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Le===null?fe.memoizedState=Le=t:Le=Le.next=t,Le}function Lt(){if(Pe===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var e=Le===null?fe.memoizedState:Le.next;if(e!==null)Le=e,Pe=t;else{if(t===null)throw Error(C(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Le===null?fe.memoizedState=Le=t:Le=Le.next=t}return Le}function Do(t,e){return typeof e=="function"?e(t):e}function yh(t){var e=Lt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=Pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Jr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,fe.lanes|=c,Zr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Kt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,Zr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function vh(t){var e=Lt(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Y0(){}function X0(t,e){var n=fe,r=Lt(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,Ep(e1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Le!==null&&Le.memoizedState.tag&1){if(n.flags|=2048,Oo(9,Z0.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(C(349));Jr&30||J0(n,e,i)}return i}function J0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Z0(t,e,n,r){e.value=n,e.getSnapshot=r,t1(e)&&n1(t)}function e1(t,e,n){return n(function(){t1(e)&&n1(t)})}function t1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function n1(t){var e=An(t,1);e!==null&&Wt(e,t,1,-1)}function oy(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=j2.bind(null,fe,t),[e.memoizedState,t]}function Oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function r1(){return Lt().memoizedState}function xl(t,e,n,r){var i=Xt();fe.flags|=t,i.memoizedState=Oo(1|e,n,void 0,r===void 0?null:r)}function nc(t,e,n,r){var i=Lt();r=r===void 0?null:r;var s=void 0;if(Pe!==null){var o=Pe.memoizedState;if(s=o.destroy,r!==null&&vp(r,o.deps)){i.memoizedState=Oo(e,n,s,r);return}}fe.flags|=t,i.memoizedState=Oo(1|e,n,s,r)}function ay(t,e){return xl(8390656,8,t,e)}function Ep(t,e){return nc(2048,8,t,e)}function i1(t,e){return nc(4,2,t,e)}function s1(t,e){return nc(4,4,t,e)}function o1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a1(t,e,n){return n=n!=null?n.concat([t]):null,nc(4,4,o1.bind(null,e,t),n)}function Ip(){}function l1(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function u1(t,e){var n=Lt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function c1(t,e,n){return Jr&21?(Kt(n,e)||(n=f0(),fe.lanes|=n,Zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function U2(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=gh.transition;gh.transition={};try{t(!1),e()}finally{te=n,gh.transition=r}}function h1(){return Lt().memoizedState}function z2(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},d1(t))f1(e,n);else if(n=B0(t,e,n,r),n!==null){var i=ct();Wt(n,t,r,i),p1(n,e,r)}}function j2(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(d1(t))f1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Kt(a,o)){var l=e.interleaved;l===null?(i.next=i,fp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=B0(t,e,i,r),n!==null&&(i=ct(),Wt(n,t,r,i),p1(n,e,r))}}function d1(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function f1(t,e){ro=cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Zf(t,n)}}var hu={readContext:Mt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},B2={readContext:Mt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:ay,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,o1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=z2.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:oy,useDebugValue:Ip,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=oy(!1),e=t[0];return t=U2.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=Xt();if(he){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),Ve===null)throw Error(C(349));Jr&30||J0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ay(e1.bind(null,r,s,t),[t]),r.flags|=2048,Oo(9,Z0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=Ve.identifierPrefix;if(he){var n=yn,r=gn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=No++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},H2={readContext:Mt,useCallback:l1,useContext:Mt,useEffect:Ep,useImperativeHandle:a1,useInsertionEffect:i1,useLayoutEffect:s1,useMemo:u1,useReducer:yh,useRef:r1,useState:function(){return yh(Do)},useDebugValue:Ip,useDeferredValue:function(t){var e=Lt();return c1(e,Pe.memoizedState,t)},useTransition:function(){var t=yh(Do)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:X0,useId:h1,unstable_isNewReconciler:!1},W2={readContext:Mt,useCallback:l1,useContext:Mt,useEffect:Ep,useImperativeHandle:a1,useInsertionEffect:i1,useLayoutEffect:s1,useMemo:u1,useReducer:vh,useRef:r1,useState:function(){return vh(Do)},useDebugValue:Ip,useDeferredValue:function(t){var e=Lt();return Pe===null?e.memoizedState=t:c1(e,Pe.memoizedState,t)},useTransition:function(){var t=vh(Do)[0],e=Lt().memoizedState;return[t,e]},useMutableSource:Y0,useSyncExternalStore:X0,useId:h1,unstable_isNewReconciler:!1};function Zi(t,e){try{var n="",r=e;do n+=_S(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _h(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var q2=typeof WeakMap=="function"?WeakMap:Map;function m1(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fu||(fu=!0,$d=r),Pd(t,e)},n}function g1(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Pd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pd(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ly(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new q2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=oA.bind(null,t,e,n),e.then(t,t))}function uy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var K2=Fn.ReactCurrentOwner,gt=!1;function lt(t,e,n,r){e.child=t===null?G0(e,null,n,r):Xi(e,t.child,n,r)}function hy(t,e,n,r,i){n=n.render;var s=e.ref;return Ui(e,i),r=_p(t,e,n,r,s,i),n=wp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(he&&n&&ap(e),e.flags|=1,lt(t,e,r,i),e.child)}function dy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!xp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,y1(t,e,s,r,i)):(t=Ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(o,r)&&t.ref===e.ref)return kn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function y1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ko(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,kn(t,e,i)}return xd(t,e,n,r,i)}function v1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(bi,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(bi,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(bi,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(bi,wt),wt|=r;return lt(t,e,i,n),e.child}function _1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xd(t,e,n,r,i){var s=vt(n)?Yr:st.current;return s=Qi(e,s),Ui(e,i),n=_p(t,e,n,r,s,i),r=wp(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,kn(t,e,i)):(he&&r&&ap(e),e.flags|=1,lt(t,e,n,i),e.child)}function fy(t,e,n,r,i){if(vt(n)){var s=!0;ru(e)}else s=!1;if(Ui(e,i),e.stateNode===null)bl(t,e),q0(e,n,r),Rd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=vt(n)?Yr:st.current,u=Qi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&iy(e,o,r,u),qn=!1;var d=e.memoizedState;o.state=d,lu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||yt.current||qn?(typeof c=="function"&&(Cd(e,n,c,r),l=e.memoizedState),(a=qn||ry(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,H0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ut(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mt(l):(l=vt(n)?Yr:st.current,l=Qi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&iy(e,o,r,l),qn=!1,d=e.memoizedState,o.state=d,lu(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||yt.current||qn?(typeof m=="function"&&(Cd(e,n,m,r),y=e.memoizedState),(u=qn||ry(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return bd(t,e,n,r,s,i)}function bd(t,e,n,r,i,s){_1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jg(e,n,!1),kn(t,e,s);r=e.stateNode,K2.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xi(e,t.child,null,s),e.child=Xi(e,null,a,s)):lt(t,e,a,s),e.memoizedState=r.state,i&&Jg(e,n,!0),e.child}function w1(t){var e=t.stateNode;e.pendingContext?Xg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xg(t,e.context,!1),mp(t,e.containerInfo)}function py(t,e,n,r,i){return Yi(),up(i),e.flags|=256,lt(t,e,n,r),e.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function E1(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(de,i&1),t===null)return Ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sc(o,r,0,null),t=Kr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dd(n),e.memoizedState=Nd,t):Tp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return G2(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=cr(a,s):(s=Kr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Dd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nd,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tp(t,e){return e=sc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Za(t,e,n,r){return r!==null&&up(r),Xi(e,t.child,null,n),t=Tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function G2(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_h(Error(C(422))),Za(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=sc({mode:"visible",children:r.children},i,0,null),s=Kr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xi(e,t.child,null,o),e.child.memoizedState=Dd(o),e.memoizedState=Nd,s);if(!(e.mode&1))return Za(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=_h(s,r,void 0),Za(t,e,o,r)}if(a=(o&t.childLanes)!==0,gt||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),Wt(r,t,i,-1))}return Pp(),r=_h(Error(C(421))),Za(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=aA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=or(i.nextSibling),Tt=e,he=!0,jt=null,t!==null&&(xt[bt++]=gn,xt[bt++]=yn,xt[bt++]=Xr,gn=t.id,yn=t.overflow,Xr=e),e=Tp(e,r.children),e.flags|=4096,e)}function my(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),kd(t.return,e,n)}function wh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function I1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(lt(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&my(t,n,e);else if(t.tag===19)my(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wh(e,!0,n,null,s);break;case"together":wh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Q2(t,e,n){switch(e.tag){case 3:w1(e),Yi();break;case 5:Q0(e);break;case 1:vt(e.type)&&ru(e);break;case 4:mp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(ou,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?E1(t,e,n):(re(de,de.current&1),t=kn(t,e,n),t!==null?t.sibling:null);re(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return I1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,v1(t,e,n)}return kn(t,e,n)}var T1,Od,S1,A1;T1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Od=function(){};S1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$r(on.current);var s=null;switch(n){case"input":i=nd(t,i),r=nd(t,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=sd(t,i),r=sd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tu)}ad(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(_o.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(_o.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};A1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ms(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ye(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Y2(t,e,n){var r=e.pendingProps;switch(lp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(e),null;case 1:return vt(e.type)&&nu(),Ye(e),null;case 3:return r=e.stateNode,Ji(),le(yt),le(st),yp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jt!==null&&(jd(jt),jt=null))),Od(t,e),Ye(e),null;case 5:gp(e);var i=$r(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)S1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Ye(e),null}if(t=$r(on.current),Xa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zt]=e,r[Po]=s,t=(e.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<js.length;i++)ie(js[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Sg(r,s),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ie("invalid",r);break;case"textarea":kg(r,s),ie("invalid",r)}ad(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,a,t),i=["children",""+a]):_o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":ja(r),Ag(r,s,!0);break;case"textarea":ja(r),Cg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=J_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zt]=e,t[Po]=r,T1(t,e,!1,!1),e.stateNode=t;e:{switch(o=ld(n,r),n){case"dialog":ie("cancel",t),ie("close",t),i=r;break;case"iframe":case"object":case"embed":ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<js.length;i++)ie(js[i],t);i=r;break;case"source":ie("error",t),i=r;break;case"img":case"image":case"link":ie("error",t),ie("load",t),i=r;break;case"details":ie("toggle",t),i=r;break;case"input":Sg(t,r),i=nd(t,r),ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ie("invalid",t);break;case"textarea":kg(t,r),i=sd(t,r),ie("invalid",t);break;default:i=r}ad(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?t0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Z_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wo(t,l):typeof l=="number"&&wo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ie("scroll",t):l!=null&&Kf(t,s,l,o))}switch(n){case"input":ja(t),Ag(t,r,!1);break;case"textarea":ja(t),Cg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Li(t,!!r.multiple,s,!1):r.defaultValue!=null&&Li(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ye(e),null;case 6:if(t&&e.stateNode!=null)A1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=$r(bo.current),$r(on.current),Xa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Ya(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return Ye(e),null;case 13:if(le(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&Et!==null&&e.mode&1&&!(e.flags&128))j0(),Yi(),e.flags|=98560,s=!1;else if(s=Xa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[Zt]=e}else Yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ye(e),s=!1}else jt!==null&&(jd(jt),jt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?xe===0&&(xe=3):Pp())),e.updateQueue!==null&&(e.flags|=4),Ye(e),null);case 4:return Ji(),Od(t,e),t===null&&Co(e.stateNode.containerInfo),Ye(e),null;case 10:return dp(e.type._context),Ye(e),null;case 17:return vt(e.type)&&nu(),Ye(e),null;case 19:if(le(de),s=e.memoizedState,s===null)return Ye(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ms(s,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uu(t),o!==null){for(e.flags|=128,Ms(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ee()>es&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304)}else{if(!r)if(t=uu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ms(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!he)return Ye(e),null}else 2*Ee()-s.renderingStartTime>es&&n!==1073741824&&(e.flags|=128,r=!0,Ms(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ee(),e.sibling=null,n=de.current,re(de,r?n&1|2:n&1),e):(Ye(e),null);case 22:case 23:return Rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Ye(e),e.subtreeFlags&6&&(e.flags|=8192)):Ye(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function X2(t,e){switch(lp(e),e.tag){case 1:return vt(e.type)&&nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ji(),le(yt),le(st),yp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gp(e),null;case 13:if(le(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));Yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(de),null;case 4:return Ji(),null;case 10:return dp(e.type._context),null;case 22:case 23:return Rp(),null;case 24:return null;default:return null}}var el=!1,Ze=!1,J2=typeof WeakSet=="function"?WeakSet:Set,O=null;function xi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function Md(t,e,n){try{n()}catch(r){ge(t,e,r)}}var gy=!1;function Z2(t,e){if(vd=Jl,t=P0(),op(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_d={focusedElem:t,selectionRange:n},Jl=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,f=e.stateNode,p=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ut(e.type,_),v);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){ge(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=gy,gy=!1,y}function io(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Md(e,n,s)}i=i.next}while(i!==r)}}function rc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function k1(t){var e=t.alternate;e!==null&&(t.alternate=null,k1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[Po],delete e[Id],delete e[M2],delete e[L2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C1(t){return t.tag===5||t.tag===3||t.tag===4}function yy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tu));else if(r!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}function Fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fd(t,e,n),t=t.sibling;t!==null;)Fd(t,e,n),t=t.sibling}var Be=null,zt=!1;function jn(t,e,n){for(n=n.child;n!==null;)R1(t,e,n),n=n.sibling}function R1(t,e,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Qu,n)}catch{}switch(n.tag){case 5:Ze||xi(n,e);case 6:var r=Be,i=zt;Be=null,jn(t,e,n),Be=r,zt=i,Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Be.removeChild(n.stateNode));break;case 18:Be!==null&&(zt?(t=Be,n=n.stateNode,t.nodeType===8?fh(t.parentNode,n):t.nodeType===1&&fh(t,n),So(t)):fh(Be,n.stateNode));break;case 4:r=Be,i=zt,Be=n.stateNode.containerInfo,zt=!0,jn(t,e,n),Be=r,zt=i;break;case 0:case 11:case 14:case 15:if(!Ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Md(n,e,o),i=i.next}while(i!==r)}jn(t,e,n);break;case 1:if(!Ze&&(xi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,e,a)}jn(t,e,n);break;case 21:jn(t,e,n);break;case 22:n.mode&1?(Ze=(r=Ze)||n.memoizedState!==null,jn(t,e,n),Ze=r):jn(t,e,n);break;default:jn(t,e,n)}}function vy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new J2),e.forEach(function(r){var i=lA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Be=a.stateNode,zt=!1;break e;case 3:Be=a.stateNode.containerInfo,zt=!0;break e;case 4:Be=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if(Be===null)throw Error(C(160));R1(s,o,i),Be=null,zt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)P1(e,t),e=e.sibling}function P1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($t(e,t),Yt(t),r&4){try{io(3,t,t.return),rc(3,t)}catch(_){ge(t,t.return,_)}try{io(5,t,t.return)}catch(_){ge(t,t.return,_)}}break;case 1:$t(e,t),Yt(t),r&512&&n!==null&&xi(n,n.return);break;case 5:if($t(e,t),Yt(t),r&512&&n!==null&&xi(n,n.return),t.flags&32){var i=t.stateNode;try{wo(i,"")}catch(_){ge(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Y_(i,s),ld(a,o);var u=ld(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?t0(i,h):c==="dangerouslySetInnerHTML"?Z_(i,h):c==="children"?wo(i,h):Kf(i,c,h,u)}switch(a){case"input":rd(i,s);break;case"textarea":X_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Li(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Li(i,!!s.multiple,s.defaultValue,!0):Li(i,!!s.multiple,s.multiple?[]:"",!1))}i[Po]=s}catch(_){ge(t,t.return,_)}}break;case 6:if($t(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ge(t,t.return,_)}}break;case 3:if($t(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{So(e.containerInfo)}catch(_){ge(t,t.return,_)}break;case 4:$t(e,t),Yt(t);break;case 13:$t(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kp=Ee())),r&4&&vy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ze=(u=Ze)||c,$t(e,t),Ze=u):$t(e,t),Yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(O=t,c=t.child;c!==null;){for(h=O=c;O!==null;){switch(d=O,m=d.child,d.tag){case 0:case 11:case 14:case 15:io(4,d,d.return);break;case 1:xi(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){ge(r,n,_)}}break;case 5:xi(d,d.return);break;case 22:if(d.memoizedState!==null){wy(h);continue}}m!==null?(m.return=d,O=m):wy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=e0("display",o))}catch(_){ge(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){ge(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$t(e,t),Yt(t),r&4&&vy(t);break;case 21:break;default:$t(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C1(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wo(i,""),r.flags&=-33);var s=yy(t);Fd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=yy(t);Vd(t,a,o);break;default:throw Error(C(161))}}catch(l){ge(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function eA(t,e,n){O=t,x1(t)}function x1(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||el;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ze;a=el;var u=Ze;if(el=o,(Ze=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Ey(i):l!==null?(l.return=o,O=l):Ey(i);for(;s!==null;)O=s,x1(s),s=s.sibling;O=i,el=a,Ze=u}_y(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,O=s):_y(t)}}function _y(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ze||rc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ze)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ny(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ny(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&So(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ze||e.flags&512&&Ld(e)}catch(d){ge(e,e.return,d)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function wy(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Ey(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rc(4,e)}catch(l){ge(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ge(e,i,l)}}var s=e.return;try{Ld(e)}catch(l){ge(e,s,l)}break;case 5:var o=e.return;try{Ld(e)}catch(l){ge(e,o,l)}}}catch(l){ge(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var tA=Math.ceil,du=Fn.ReactCurrentDispatcher,Sp=Fn.ReactCurrentOwner,Ot=Fn.ReactCurrentBatchConfig,J=0,Ve=null,Se=null,qe=0,wt=0,bi=kr(0),xe=0,Mo=null,Zr=0,ic=0,Ap=0,so=null,pt=null,kp=0,es=1/0,dn=null,fu=!1,$d=null,lr=null,tl=!1,Zn=null,pu=0,oo=0,Ud=null,Nl=-1,Dl=0;function ct(){return J&6?Ee():Nl!==-1?Nl:Nl=Ee()}function ur(t){return t.mode&1?J&2&&qe!==0?qe&-qe:F2.transition!==null?(Dl===0&&(Dl=f0()),Dl):(t=te,t!==0||(t=window.event,t=t===void 0?16:w0(t.type)),t):1}function Wt(t,e,n,r){if(50<oo)throw oo=0,Ud=null,Error(C(185));aa(t,n,r),(!(J&2)||t!==Ve)&&(t===Ve&&(!(J&2)&&(ic|=n),xe===4&&Gn(t,qe)),_t(t,r),n===1&&J===0&&!(e.mode&1)&&(es=Ee()+500,ec&&Cr()))}function _t(t,e){var n=t.callbackNode;FS(t,e);var r=Xl(t,t===Ve?qe:0);if(r===0)n!==null&&xg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xg(n),e===1)t.tag===0?V2(Iy.bind(null,t)):$0(Iy.bind(null,t)),D2(function(){!(J&6)&&Cr()}),n=null;else{switch(p0(r)){case 1:n=Jf;break;case 4:n=h0;break;case 16:n=Yl;break;case 536870912:n=d0;break;default:n=Yl}n=F1(n,b1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b1(t,e){if(Nl=-1,Dl=0,J&6)throw Error(C(327));var n=t.callbackNode;if(zi()&&t.callbackNode!==n)return null;var r=Xl(t,t===Ve?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mu(t,r);else{e=r;var i=J;J|=2;var s=D1();(Ve!==t||qe!==e)&&(dn=null,es=Ee()+500,qr(t,e));do try{iA();break}catch(a){N1(t,a)}while(1);hp(),du.current=s,J=i,Se!==null?e=0:(Ve=null,qe=0,e=xe)}if(e!==0){if(e===2&&(i=fd(t),i!==0&&(r=i,e=zd(t,i))),e===1)throw n=Mo,qr(t,0),Gn(t,r),_t(t,Ee()),n;if(e===6)Gn(t,r);else{if(i=t.current.alternate,!(r&30)&&!nA(i)&&(e=mu(t,r),e===2&&(s=fd(t),s!==0&&(r=s,e=zd(t,s))),e===1))throw n=Mo,qr(t,0),Gn(t,r),_t(t,Ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:Mr(t,pt,dn);break;case 3:if(Gn(t,r),(r&130023424)===r&&(e=kp+500-Ee(),10<e)){if(Xl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ct(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ed(Mr.bind(null,t,pt,dn),e);break}Mr(t,pt,dn);break;case 4:if(Gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tA(r/1960))-r,10<r){t.timeoutHandle=Ed(Mr.bind(null,t,pt,dn),r);break}Mr(t,pt,dn);break;case 5:Mr(t,pt,dn);break;default:throw Error(C(329))}}}return _t(t,Ee()),t.callbackNode===n?b1.bind(null,t):null}function zd(t,e){var n=so;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=mu(t,e),t!==2&&(e=pt,pt=n,e!==null&&jd(e)),t}function jd(t){pt===null?pt=t:pt.push.apply(pt,t)}function nA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gn(t,e){for(e&=~Ap,e&=~ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function Iy(t){if(J&6)throw Error(C(327));zi();var e=Xl(t,0);if(!(e&1))return _t(t,Ee()),null;var n=mu(t,e);if(t.tag!==0&&n===2){var r=fd(t);r!==0&&(e=r,n=zd(t,r))}if(n===1)throw n=Mo,qr(t,0),Gn(t,e),_t(t,Ee()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,pt,dn),_t(t,Ee()),null}function Cp(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(es=Ee()+500,ec&&Cr())}}function ei(t){Zn!==null&&Zn.tag===0&&!(J&6)&&zi();var e=J;J|=1;var n=Ot.transition,r=te;try{if(Ot.transition=null,te=1,t)return t()}finally{te=r,Ot.transition=n,J=e,!(J&6)&&Cr()}}function Rp(){wt=bi.current,le(bi)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,N2(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(lp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nu();break;case 3:Ji(),le(yt),le(st),yp();break;case 5:gp(r);break;case 4:Ji();break;case 13:le(de);break;case 19:le(de);break;case 10:dp(r.type._context);break;case 22:case 23:Rp()}n=n.return}if(Ve=t,Se=t=cr(t.current,null),qe=wt=e,xe=0,Mo=null,Ap=ic=Zr=0,pt=so=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fr=null}return t}function N1(t,e){do{var n=Se;try{if(hp(),Pl.current=hu,cu){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cu=!1}if(Jr=0,Le=Pe=fe=null,ro=!1,No=0,Sp.current=null,n===null||n.return===null){xe=1,Mo=e,Se=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=uy(o);if(m!==null){m.flags&=-257,cy(m,o,a,s,e),m.mode&1&&ly(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){ly(s,u,e),Pp();break e}l=Error(C(426))}}else if(he&&a.mode&1){var v=uy(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),cy(v,o,a,s,e),up(Zi(l,a));break e}}s=l=Zi(l,a),xe!==4&&(xe=2),so===null?so=[s]:so.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=m1(s,l,e);ty(s,f);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(lr===null||!lr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=g1(s,a,e);ty(s,E);break e}}s=s.return}while(s!==null)}M1(n)}catch(I){e=I,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function D1(){var t=du.current;return du.current=hu,t===null?hu:t}function Pp(){(xe===0||xe===3||xe===2)&&(xe=4),Ve===null||!(Zr&268435455)&&!(ic&268435455)||Gn(Ve,qe)}function mu(t,e){var n=J;J|=2;var r=D1();(Ve!==t||qe!==e)&&(dn=null,qr(t,e));do try{rA();break}catch(i){N1(t,i)}while(1);if(hp(),J=n,du.current=r,Se!==null)throw Error(C(261));return Ve=null,qe=0,xe}function rA(){for(;Se!==null;)O1(Se)}function iA(){for(;Se!==null&&!PS();)O1(Se)}function O1(t){var e=V1(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?M1(t):Se=e,Sp.current=null}function M1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=X2(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Se=null;return}}else if(n=Y2(n,e,wt),n!==null){Se=n;return}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);xe===0&&(xe=5)}function Mr(t,e,n){var r=te,i=Ot.transition;try{Ot.transition=null,te=1,sA(t,e,n,r)}finally{Ot.transition=i,te=r}return null}function sA(t,e,n,r){do zi();while(Zn!==null);if(J&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($S(t,s),t===Ve&&(Se=Ve=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,F1(Yl,function(){return zi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var o=te;te=1;var a=J;J|=4,Sp.current=null,Z2(t,n),P1(n,t),A2(_d),Jl=!!vd,_d=vd=null,t.current=n,eA(n),xS(),J=a,te=o,Ot.transition=s}else t.current=n;if(tl&&(tl=!1,Zn=t,pu=i),s=t.pendingLanes,s===0&&(lr=null),DS(n.stateNode),_t(t,Ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fu)throw fu=!1,t=$d,$d=null,t;return pu&1&&t.tag!==0&&zi(),s=t.pendingLanes,s&1?t===Ud?oo++:(oo=0,Ud=t):oo=0,Cr(),null}function zi(){if(Zn!==null){var t=p0(pu),e=Ot.transition,n=te;try{if(Ot.transition=null,te=16>t?16:t,Zn===null)var r=!1;else{if(t=Zn,Zn=null,pu=0,J&6)throw Error(C(331));var i=J;for(J|=4,O=t.current;O!==null;){var s=O,o=s.child;if(O.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:io(8,c,s)}var h=c.child;if(h!==null)h.return=c,O=h;else for(;O!==null;){c=O;var d=c.sibling,m=c.return;if(k1(c),c===u){O=null;break}if(d!==null){d.return=m,O=d;break}O=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}O=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,s.flags&2048)switch(s.tag){case 0:case 11:case 15:io(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,O=f;break e}O=s.return}}var p=t.current;for(O=p;O!==null;){o=O;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,O=g;else e:for(o=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rc(9,a)}}catch(I){ge(a,a.return,I)}if(a===o){O=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,O=E;break e}O=a.return}}if(J=i,Cr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Qu,t)}catch{}r=!0}return r}finally{te=n,Ot.transition=e}}return!1}function Ty(t,e,n){e=Zi(n,e),e=m1(t,e,1),t=ar(t,e,1),e=ct(),t!==null&&(aa(t,1,e),_t(t,e))}function ge(t,e,n){if(t.tag===3)Ty(t,t,n);else for(;e!==null;){if(e.tag===3){Ty(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=Zi(n,t),t=g1(e,t,1),e=ar(e,t,1),t=ct(),e!==null&&(aa(e,1,t),_t(e,t));break}}e=e.return}}function oA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ct(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(qe&n)===n&&(xe===4||xe===3&&(qe&130023424)===qe&&500>Ee()-kp?qr(t,0):Ap|=n),_t(t,e)}function L1(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=ct();t=An(t,e),t!==null&&(aa(t,e,n),_t(t,n))}function aA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),L1(t,n)}function lA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),L1(t,n)}var V1;V1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,Q2(t,e,n);gt=!!(t.flags&131072)}else gt=!1,he&&e.flags&1048576&&U0(e,su,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bl(t,e),t=e.pendingProps;var i=Qi(e,st.current);Ui(e,n),i=_p(null,e,r,t,i,n);var s=wp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,ru(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pp(e),i.updater=tc,e.stateNode=i,i._reactInternals=e,Rd(e,r,t,n),e=bd(null,e,r,!0,s,n)):(e.tag=0,he&&s&&ap(e),lt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=cA(r),t=Ut(r,t),i){case 0:e=xd(null,e,r,t,n);break e;case 1:e=fy(null,e,r,t,n);break e;case 11:e=hy(null,e,r,t,n);break e;case 14:e=dy(null,e,r,Ut(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),xd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),fy(t,e,r,i,n);case 3:e:{if(w1(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,H0(t,e),lu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zi(Error(C(423)),e),e=py(t,e,r,n,i);break e}else if(r!==i){i=Zi(Error(C(424)),e),e=py(t,e,r,n,i);break e}else for(Et=or(e.stateNode.containerInfo.firstChild),Tt=e,he=!0,jt=null,n=G0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yi(),r===i){e=kn(t,e,n);break e}lt(t,e,r,n)}e=e.child}return e;case 5:return Q0(e),t===null&&Ad(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,wd(r,i)?o=null:s!==null&&wd(r,s)&&(e.flags|=32),_1(t,e),lt(t,e,o,n),e.child;case 6:return t===null&&Ad(e),null;case 13:return E1(t,e,n);case 4:return mp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xi(e,null,r,n):lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),hy(t,e,r,i,n);case 7:return lt(t,e,e.pendingProps,n),e.child;case 8:return lt(t,e,e.pendingProps.children,n),e.child;case 12:return lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(ou,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!yt.current){e=kn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=En(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),kd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),kd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ui(e,n),i=Mt(i),r=r(i),e.flags|=1,lt(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),dy(t,e,r,i,n);case 15:return y1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),bl(t,e),e.tag=1,vt(r)?(t=!0,ru(e)):t=!1,Ui(e,n),q0(e,r,i),Rd(e,r,i,n),bd(null,e,r,!0,t,n);case 19:return I1(t,e,n);case 22:return v1(t,e,n)}throw Error(C(156,e.tag))};function F1(t,e){return c0(t,e)}function uA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new uA(t,e,n,r)}function xp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cA(t){if(typeof t=="function")return xp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Qf)return 11;if(t===Yf)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")xp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ei:return Kr(n.children,i,s,e);case Gf:o=8,i|=8;break;case Jh:return t=Dt(12,n,e,i|2),t.elementType=Jh,t.lanes=s,t;case Zh:return t=Dt(13,n,e,i),t.elementType=Zh,t.lanes=s,t;case ed:return t=Dt(19,n,e,i),t.elementType=ed,t.lanes=s,t;case K_:return sc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case W_:o=10;break e;case q_:o=9;break e;case Qf:o=11;break e;case Yf:o=14;break e;case Wn:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Kr(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function sc(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=K_,t.lanes=n,t.stateNode={isHidden:!1},t}function Eh(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function Ih(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nh(0),this.expirationTimes=nh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bp(t,e,n,r,i,s,o,a,l){return t=new hA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pp(s),t}function dA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $1(t){if(!t)return vr;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(vt(n))return F0(t,n,e)}return e}function U1(t,e,n,r,i,s,o,a,l){return t=bp(n,r,!0,t,i,s,o,a,l),t.context=$1(null),n=t.current,r=ct(),i=ur(n),s=En(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,aa(t,i,r),_t(t,r),t}function oc(t,e,n,r){var i=e.current,s=ct(),o=ur(i);return n=$1(n),e.context===null?e.context=n:e.pendingContext=n,e=En(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(Wt(t,i,o,s),Rl(t,i,o)),o}function gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Np(t,e){Sy(t,e),(t=t.alternate)&&Sy(t,e)}function fA(){return null}var z1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dp(t){this._internalRoot=t}ac.prototype.render=Dp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));oc(t,e,null,null)};ac.prototype.unmount=Dp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ei(function(){oc(null,t,null,null)}),e[Sn]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var e=y0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&_0(t)}};function Op(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ay(){}function pA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=gu(o);s.call(u)}}var o=U1(e,r,t,0,null,!1,!1,"",Ay);return t._reactRootContainer=o,t[Sn]=o.current,Co(t.nodeType===8?t.parentNode:t),ei(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=gu(l);a.call(u)}}var l=bp(t,0,!1,null,null,!1,!1,"",Ay);return t._reactRootContainer=l,t[Sn]=l.current,Co(t.nodeType===8?t.parentNode:t),ei(function(){oc(e,l,n,r)}),l}function uc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=gu(o);a.call(l)}}oc(e,o,t,i)}else o=pA(n,e,t,i,r);return gu(o)}m0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zs(e.pendingLanes);n!==0&&(Zf(e,n|1),_t(e,Ee()),!(J&6)&&(es=Ee()+500,Cr()))}break;case 13:ei(function(){var r=An(t,1);if(r!==null){var i=ct();Wt(r,t,1,i)}}),Np(t,1)}};ep=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=ct();Wt(e,t,134217728,n)}Np(t,134217728)}};g0=function(t){if(t.tag===13){var e=ur(t),n=An(t,e);if(n!==null){var r=ct();Wt(n,t,e,r)}Np(t,e)}};y0=function(){return te};v0=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};cd=function(t,e,n){switch(e){case"input":if(rd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Zu(r);if(!i)throw Error(C(90));Q_(r),rd(r,i)}}}break;case"textarea":X_(t,n);break;case"select":e=n.value,e!=null&&Li(t,!!n.multiple,e,!1)}};i0=Cp;s0=ei;var mA={usingClientEntryPoint:!1,Events:[ua,Ai,Zu,n0,r0,Cp]},Ls={findFiberByHostInstance:Vr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gA={bundleType:Ls.bundleType,version:Ls.version,rendererPackageName:Ls.rendererPackageName,rendererConfig:Ls.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=l0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ls.findFiberByHostInstance||fA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Qu=nl.inject(gA),sn=nl}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mA;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Op(e))throw Error(C(200));return dA(t,e,null,n)};Ct.createRoot=function(t,e){if(!Op(t))throw Error(C(299));var n=!1,r="",i=z1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=bp(t,1,!1,null,null,n,!1,r,i),t[Sn]=e.current,Co(t.nodeType===8?t.parentNode:t),new Dp(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=l0(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return ei(t)};Ct.hydrate=function(t,e,n){if(!lc(e))throw Error(C(200));return uc(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Op(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=z1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=U1(e,null,t,1,n??null,i,!1,s,o),t[Sn]=e.current,Co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ac(e)};Ct.render=function(t,e,n){if(!lc(e))throw Error(C(200));return uc(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!lc(t))throw Error(C(40));return t._reactRootContainer?(ei(function(){uc(null,null,t,!1,function(){t._reactRootContainer=null,t[Sn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Cp;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!lc(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return uc(t,e,n,!1,r)};Ct.version="18.2.0-next-9e3b772b8-20220608";function j1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j1)}catch(t){console.error(t)}}j1(),U_.exports=Ct;var yA=U_.exports,ky=yA;Yh.createRoot=ky.createRoot,Yh.hydrateRoot=ky.hydrateRoot;/**
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
 */const B1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},H1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(B1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new _A;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _A extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wA=function(t){const e=B1(t);return H1.encodeByteArray(e,!0)},yu=function(t){return wA(t).replace(/\./g,"")},W1=function(t){try{return H1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function EA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IA=()=>EA().__FIREBASE_DEFAULTS__,TA=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&W1(t[1]);return e&&JSON.parse(e)},Mp=()=>{try{return IA()||TA()||SA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},q1=t=>{var e,n;return(n=(e=Mp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},AA=t=>{const e=q1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},K1=()=>{var t;return(t=Mp())===null||t===void 0?void 0:t.config},G1=t=>{var e;return(e=Mp())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function CA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[yu(JSON.stringify(n)),yu(JSON.stringify(o)),a].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function PA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bA(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NA(){try{return typeof indexedDB=="object"}catch{return!1}}function DA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const OA="FirebaseError";class $n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OA,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?MA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new $n(i,a,r)}}function MA(t,e){return t.replace(LA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const LA=/\{\$([^}]+)}/g;function VA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Cy(s)&&Cy(o)){if(!vu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Cy(t){return t!==null&&typeof t=="object"}/**
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
 */function da(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Hs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function FA(t,e){const n=new $A(t,e);return n.subscribe.bind(n)}class $A{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Th),i.error===void 0&&(i.error=Th),i.complete===void 0&&(i.complete=Th);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Th(){}/**
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
 */function $e(t){return t&&t._delegate?t._delegate:t}class ti{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lr="[DEFAULT]";/**
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
 */class zA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BA(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jA(t){return t===Lr?void 0:t}function BA(t){return t.instantiationMode==="EAGER"}/**
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
 */class HA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const WA={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},qA=Z.INFO,KA={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},GA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=KA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lp{constructor(e){this.name=e,this._logLevel=qA,this._logHandler=GA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const QA=(t,e)=>e.some(n=>t instanceof n);let Ry,Py;function YA(){return Ry||(Ry=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XA(){return Py||(Py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q1=new WeakMap,Bd=new WeakMap,Y1=new WeakMap,Sh=new WeakMap,Vp=new WeakMap;function JA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Q1.set(n,t)}).catch(()=>{}),Vp.set(e,t),e}function ZA(t){if(Bd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Bd.set(t,e)}let Hd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Y1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ek(t){Hd=t(Hd)}function tk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ah(this),e,...n);return Y1.set(r,e.sort?e.sort():[e]),hr(r)}:XA().includes(t)?function(...e){return t.apply(Ah(this),e),hr(Q1.get(this))}:function(...e){return hr(t.apply(Ah(this),e))}}function nk(t){return typeof t=="function"?tk(t):(t instanceof IDBTransaction&&ZA(t),QA(t,YA())?new Proxy(t,Hd):t)}function hr(t){if(t instanceof IDBRequest)return JA(t);if(Sh.has(t))return Sh.get(t);const e=nk(t);return e!==t&&(Sh.set(t,e),Vp.set(e,t)),e}const Ah=t=>Vp.get(t);function rk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(hr(o.result),l.oldVersion,l.newVersion,hr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ik=["get","getKey","getAll","getAllKeys","count"],sk=["put","add","delete","clear"],kh=new Map;function xy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(kh.get(e))return kh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ik.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return kh.set(e,s),s}ek(t=>({...t,get:(e,n,r)=>xy(e,n)||t.get(e,n,r),has:(e,n)=>!!xy(e,n)||t.has(e,n)}));/**
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
 */class ok{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ak(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ak(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wd="@firebase/app",by="0.9.16";/**
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
 */const ni=new Lp("@firebase/app"),lk="@firebase/app-compat",uk="@firebase/analytics-compat",ck="@firebase/analytics",hk="@firebase/app-check-compat",dk="@firebase/app-check",fk="@firebase/auth",pk="@firebase/auth-compat",mk="@firebase/database",gk="@firebase/database-compat",yk="@firebase/functions",vk="@firebase/functions-compat",_k="@firebase/installations",wk="@firebase/installations-compat",Ek="@firebase/messaging",Ik="@firebase/messaging-compat",Tk="@firebase/performance",Sk="@firebase/performance-compat",Ak="@firebase/remote-config",kk="@firebase/remote-config-compat",Ck="@firebase/storage",Rk="@firebase/storage-compat",Pk="@firebase/firestore",xk="@firebase/firestore-compat",bk="firebase",Nk="10.2.0";/**
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
 */const qd="[DEFAULT]",Dk={[Wd]:"fire-core",[lk]:"fire-core-compat",[ck]:"fire-analytics",[uk]:"fire-analytics-compat",[dk]:"fire-app-check",[hk]:"fire-app-check-compat",[fk]:"fire-auth",[pk]:"fire-auth-compat",[mk]:"fire-rtdb",[gk]:"fire-rtdb-compat",[yk]:"fire-fn",[vk]:"fire-fn-compat",[_k]:"fire-iid",[wk]:"fire-iid-compat",[Ek]:"fire-fcm",[Ik]:"fire-fcm-compat",[Tk]:"fire-perf",[Sk]:"fire-perf-compat",[Ak]:"fire-rc",[kk]:"fire-rc-compat",[Ck]:"fire-gcs",[Rk]:"fire-gcs-compat",[Pk]:"fire-fst",[xk]:"fire-fst-compat","fire-js":"fire-js",[bk]:"fire-js-all"};/**
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
 */const _u=new Map,Kd=new Map;function Ok(t,e){try{t.container.addComponent(e)}catch(n){ni.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(Kd.has(e))return ni.debug(`There were multiple attempts to register component ${e}.`),!1;Kd.set(e,t);for(const n of _u.values())Ok(n,t);return!0}function Fp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Mk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dr=new ha("app","Firebase",Mk);/**
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
 */class Lk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ti("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=Nk;function X1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=K1()),!n)throw dr.create("no-options");const s=_u.get(i);if(s){if(vu(n,s.options)&&vu(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new HA(i);for(const l of Kd.values())o.addComponent(l);const a=new Lk(n,r,o);return _u.set(i,a),a}function J1(t=qd){const e=_u.get(t);if(!e&&t===qd&&K1())return X1();if(!e)throw dr.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let i=(r=Dk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ni.warn(a.join(" "));return}ts(new ti(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Vk="firebase-heartbeat-database",Fk=1,Lo="firebase-heartbeat-store";let Ch=null;function Z1(){return Ch||(Ch=rk(Vk,Fk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lo)}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),Ch}async function $k(t){try{return await(await Z1()).transaction(Lo).objectStore(Lo).get(ew(t))}catch(e){if(e instanceof $n)ni.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ni.warn(n.message)}}}async function Ny(t,e){try{const r=(await Z1()).transaction(Lo,"readwrite");await r.objectStore(Lo).put(e,ew(t)),await r.done}catch(n){if(n instanceof $n)ni.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ni.warn(r.message)}}}function ew(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Uk=1024,zk=30*24*60*60*1e3;class jk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Dy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=zk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dy(),{heartbeatsToSend:n,unsentEntries:r}=Bk(this._heartbeatsCache.heartbeats),i=yu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Dy(){return new Date().toISOString().substring(0,10)}function Bk(t,e=Uk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Oy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Oy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NA()?DA().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await $k(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ny(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Oy(t){return yu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Wk(t){ts(new ti("platform-logger",e=>new ok(e),"PRIVATE")),ts(new ti("heartbeat",e=>new jk(e),"PRIVATE")),fr(Wd,by,t),fr(Wd,by,"esm2017"),fr("fire-js","")}Wk("");var qk="firebase",Kk="10.2.0";/**
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
 */fr(qk,Kk,"app");function $p(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function My(t){return t!==void 0&&t.enterprise!==void 0}class Gk{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function tw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qk=tw,nw=new ha("auth","Firebase",tw());/**
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
 */const wu=new Lp("@firebase/auth");function Yk(t,...e){wu.logLevel<=Z.WARN&&wu.warn(`Auth (${ps}): ${t}`,...e)}function Ml(t,...e){wu.logLevel<=Z.ERROR&&wu.error(`Auth (${ps}): ${t}`,...e)}/**
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
 */function Vt(t,...e){throw Up(t,...e)}function an(t,...e){return Up(t,...e)}function rw(t,e,n){const r=Object.assign(Object.assign({},Qk()),{[e]:n});return new ha("auth","Firebase",r).create(e,{appName:t.name})}function Xk(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vt(t,"argument-error"),rw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Up(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nw.create(t,...e)}function $(t,e,...n){if(!t)throw Up(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ml(e),new Error(e)}function Cn(t,e){t||vn(e)}/**
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
 */function Gd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Jk(){return Ly()==="http:"||Ly()==="https:"}function Ly(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Zk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jk()||PA()||"connection"in navigator)?navigator.onLine:!0}function eC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=RA()||xA()}get(){return Zk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zp(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nC=new fa(3e4,6e4);function hi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function di(t,e,n,r,i={}){return sw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=da(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iw.fetch()(ow(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tC),e);try{const i=new rC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw rl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw rl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw rl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw rl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw rw(t,c,u);Vt(t,c)}}catch(i){if(i instanceof $n)throw i;Vt(t,"network-request-failed",{message:String(i)})}}async function pa(t,e,n,r,i={}){const s=await di(t,e,n,r,i);return"mfaPendingCredential"in s&&Vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ow(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?zp(t.config,i):`${t.config.apiScheme}://${i}`}class rC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),nC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function rl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}async function iC(t,e){return di(t,"GET","/v2/recaptchaConfig",hi(t,e))}/**
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
 */async function sC(t,e){return di(t,"POST","/v1/accounts:delete",e)}async function oC(t,e){return di(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aC(t,e=!1){const n=$e(t),r=await n.getIdToken(e),i=jp(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ao(Rh(i.auth_time)),issuedAtTime:ao(Rh(i.iat)),expirationTime:ao(Rh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Rh(t){return Number(t)*1e3}function jp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=W1(n);return i?JSON.parse(i):(Ml("Failed to decode base64 JWT payload"),null)}catch(i){return Ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lC(t){const e=jp(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $n&&uC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class cC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class aw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Vo(t,oC(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?fC(s.providerUserInfo):[],a=dC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function hC(t){const e=$e(t);await Eu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function fC(t){return t.map(e=>{var{providerId:n}=e,r=$p(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function pC(t,e){const n=await sw(t,{},async()=>{const r=da({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=ow(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fo;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fo,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Bn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=$p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new cC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new aw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aC(this,e)}reload(){return hC(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Eu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Vo(this,sC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:I,providerData:A,stsTokenManager:k}=n;$(g&&k,e,"internal-error");const x=Fo.fromJSON(this.name,k);$(typeof g=="string",e,"internal-error"),Bn(h,e.name),Bn(d,e.name),$(typeof E=="boolean",e,"internal-error"),$(typeof I=="boolean",e,"internal-error"),Bn(m,e.name),Bn(y,e.name),Bn(_,e.name),Bn(v,e.name),Bn(f,e.name),Bn(p,e.name);const B=new Gr({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:I,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:x,createdAt:f,lastLoginAt:p});return A&&Array.isArray(A)&&(B.providerData=A.map(H=>Object.assign({},H))),v&&(B._redirectEventId=v),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fo;i.updateFromServerResponse(n);const s=new Gr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Eu(s),s}}/**
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
 */const Vy=new Map;function _n(t){Cn(t instanceof Function,"Expected a class definition");let e=Vy.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vy.set(t,e),e)}/**
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
 */class lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lw.type="NONE";const Fy=lw;/**
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
 */function Ll(t,e,n){return`firebase:${t}:${e}:${n}`}class ji{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ll(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ll("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ji(_n(Fy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||_n(Fy);const o=Ll(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Gr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ji(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ji(s,e,r))}}/**
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
 */function $y(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fw(e))return"Blackberry";if(pw(e))return"Webos";if(Bp(e))return"Safari";if((e.includes("chrome/")||cw(e))&&!e.includes("edge/"))return"Chrome";if(dw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uw(t=ot()){return/firefox\//i.test(t)}function Bp(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cw(t=ot()){return/crios\//i.test(t)}function hw(t=ot()){return/iemobile/i.test(t)}function dw(t=ot()){return/android/i.test(t)}function fw(t=ot()){return/blackberry/i.test(t)}function pw(t=ot()){return/webos/i.test(t)}function cc(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mC(t=ot()){var e;return cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gC(){return bA()&&document.documentMode===10}function mw(t=ot()){return cc(t)||dw(t)||pw(t)||fw(t)||/windows phone/i.test(t)||hw(t)}function yC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function gw(t,e=[]){let n;switch(t){case"Browser":n=$y(ot());break;case"Worker":n=`${$y(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class vC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function _C(t,e={}){return di(t,"GET","/v2/passwordPolicy",hi(t,e))}/**
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
 */const wC=6;class EC{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class IC{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Uy(this),this.idTokenSubscription=new Uy(this),this.beforeStateQueue=new vC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_n(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ji.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?$e(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _C(this),n=new EC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_n(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await ji.create(this,[_n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Yk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Un(t){return $e(t)}class Uy{constructor(e){this.auth=e,this.observer=null,this.addObserver=FA(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function TC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function yw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",TC().appendChild(r)})}function SC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AC="https://www.google.com/recaptcha/enterprise.js?render=",kC="recaptcha-enterprise",CC="NO_RECAPTCHA";class RC{constructor(e){this.type=kC,this.auth=Un(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{iC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Gk(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;My(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(CC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&My(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}yw(AC+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Iu(t,e,n,r=!1){const i=new RC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function PC(t,e){const n=Fp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vu(s,e??{}))return i;Vt(i,"already-initialized")}return n.initialize({options:e})}function xC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function bC(t,e,n){const r=Un(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=vw(e),{host:o,port:a}=NC(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||DC()}function vw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NC(t){const e=vw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:zy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:zy(o)}}}function zy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}async function OC(t,e){return di(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Ph(t,e){return pa(t,"POST","/v1/accounts:signInWithPassword",hi(t,e))}/**
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
 */async function MC(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",hi(t,e))}async function LC(t,e){return pa(t,"POST","/v1/accounts:signInWithEmailLink",hi(t,e))}/**
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
 */class $o extends Hp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new $o(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new $o(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Iu(e,r,"signInWithPassword");return Ph(e,i)}else return Ph(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Iu(e,r,"signInWithPassword");return Ph(e,s)}else return Promise.reject(i)});case"emailLink":return MC(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return OC(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return LC(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Bi(t,e){return pa(t,"POST","/v1/accounts:signInWithIdp",hi(t,e))}/**
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
 */const VC="http://localhost";class ri extends Hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ri(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=$p(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ri(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bi(e,n)}buildRequest(){const e={requestUri:VC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=da(n)}return e}}/**
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
 */function FC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $C(t){const e=Bs(Hs(t)).link,n=e?Bs(Hs(e)).deep_link_id:null,r=Bs(Hs(t)).deep_link_id;return(r?Bs(Hs(r)).link:null)||r||n||e||t}class Wp{constructor(e){var n,r,i,s,o,a;const l=Bs(Hs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=FC((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$C(e);try{return new Wp(n)}catch{return null}}}/**
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
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return $o._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wp.parseLink(n);return $(r,"argument-error"),$o._fromEmailAndCode(e,r.code,r.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class qp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ma extends qp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Qn extends ma{constructor(){super("facebook.com")}static credential(e){return ri._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends ma{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ri._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class Yn extends ma{constructor(){super("github.com")}static credential(e){return ri._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Xn extends ma{constructor(){super("twitter.com")}static credential(e,n){return ri._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
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
 */async function Vl(t,e){return pa(t,"POST","/v1/accounts:signUp",hi(t,e))}/**
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
 */class Rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gr._fromIdTokenResponse(e,r,i),o=jy(r);return new Rn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=jy(r);return new Rn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function jy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function UC(t){var e;const n=Un(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Rn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Vl(n,{returnSecureToken:!0}),i=await Rn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Tu extends $n{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tu(e,n,r,i)}}function _w(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tu._fromErrorAndOperation(t,s,e,r):s})}async function zC(t,e,n=!1){const r=await Vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rn._forOperation(t,"link",r)}/**
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
 */async function jC(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Vo(t,_w(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=jp(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Rn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),s}}/**
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
 */async function ww(t,e,n=!1){const r="signIn",i=await _w(t,r,e),s=await Rn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function BC(t,e){return ww(Un(t),e)}/**
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
 */async function Ew(t){const e=Un(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HC(t,e,n){var r;const i=Un(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Iu(i,s,"signUpPassword");o=Vl(i,u)}else o=Vl(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Iu(i,s,"signUpPassword");return Vl(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Ew(t),u}),l=await Rn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function WC(t,e,n){return BC($e(t),ms.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ew(t),r})}function qC(t,e,n,r){return $e(t).onIdTokenChanged(e,n,r)}function KC(t,e,n){return $e(t).beforeAuthStateChanged(e,n)}function GC(t,e,n,r){return $e(t).onAuthStateChanged(e,n,r)}function QC(t){return $e(t).signOut()}const Su="__sak";/**
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
 */class Iw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Su,"1"),this.storage.removeItem(Su),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function YC(){const t=ot();return Bp(t)||cc(t)}const XC=1e3,JC=10;class Tw extends Iw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YC()&&yC(),this.fallbackToPolling=mw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tw.type="LOCAL";const ZC=Tw;/**
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
 */class Sw extends Iw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sw.type="SESSION";const Aw=Sw;/**
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
 */function eR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new hc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await eR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hc.receivers=[];/**
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
 */function Kp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class tR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Kp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function nR(t){ln().location.href=t}/**
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
 */function kw(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function rR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sR(){return kw()?self:null}/**
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
 */const Cw="firebaseLocalStorageDb",oR=1,Au="firebaseLocalStorage",Rw="fbase_key";class ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dc(t,e){return t.transaction([Au],e?"readwrite":"readonly").objectStore(Au)}function aR(){const t=indexedDB.deleteDatabase(Cw);return new ga(t).toPromise()}function Qd(){const t=indexedDB.open(Cw,oR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Au,{keyPath:Rw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Au)?e(r):(r.close(),await aR(),e(await Qd()))})})}async function By(t,e,n){const r=dc(t,!0).put({[Rw]:e,value:n});return new ga(r).toPromise()}async function lR(t,e){const n=dc(t,!1).get(e),r=await new ga(n).toPromise();return r===void 0?null:r.value}function Hy(t,e){const n=dc(t,!0).delete(e);return new ga(n).toPromise()}const uR=800,cR=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hc._getInstance(sR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rR(),!this.activeServiceWorker)return;this.sender=new tR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await By(e,Su,"1"),await Hy(e,Su),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>By(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dc(i,!1).getAll();return new ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const hR=Pw;new fa(3e4,6e4);/**
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
 */function xw(t,e){return e?_n(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gp extends Hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dR(t){return ww(t.auth,new Gp(t),t.bypassAuthState)}function fR(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),jC(n,new Gp(t),t.bypassAuthState)}async function pR(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),zC(n,new Gp(t),t.bypassAuthState)}/**
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
 */class bw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dR;case"linkViaPopup":case"linkViaRedirect":return pR;case"reauthViaPopup":case"reauthViaRedirect":return fR;default:Vt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mR=new fa(2e3,1e4);async function gR(t,e,n){const r=Un(t);Xk(t,e,qp);const i=xw(r,n);return new Ur(r,"signInViaPopup",e,i).executeNotNull()}class Ur extends bw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mR.get())};e()}}Ur.currentPopupAction=null;/**
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
 */const yR="pendingRedirect",Fl=new Map;class vR extends bw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fl.get(this.auth._key());if(!e){try{const r=await _R(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fl.set(this.auth._key(),e)}return this.bypassAuthState||Fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _R(t,e){const n=IR(e),r=ER(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wR(t,e){Fl.set(t._key(),e)}function ER(t){return _n(t._redirectPersistence)}function IR(t){return Ll(yR,t.config.apiKey,t.name)}async function TR(t,e,n=!1){const r=Un(t),i=xw(r,e),o=await new vR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const SR=10*60*1e3;class AR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Nw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wy(e))}saveEventToCache(e){this.cachedEventUids.add(Wy(e)),this.lastProcessedEventTime=Date.now()}}function Wy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nw(t);default:return!1}}/**
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
 */async function CR(t,e={}){return di(t,"GET","/v1/projects",e)}/**
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
 */const RR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PR=/^https?/;async function xR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CR(t);for(const n of e)try{if(bR(n))return}catch{}Vt(t,"unauthorized-domain")}function bR(t){const e=Gd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PR.test(n))return!1;if(RR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const NR=new fa(3e4,6e4);function qy(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DR(t){return new Promise((e,n)=>{var r,i,s;function o(){qy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qy(),n(an(t,"network-request-failed"))},timeout:NR.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)o();else{const a=SC("iframefcb");return ln()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},yw(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $l=null,e})}let $l=null;function OR(t){return $l=$l||DR(t),$l}/**
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
 */const MR=new fa(5e3,15e3),LR="__/auth/iframe",VR="emulator/auth/iframe",FR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UR(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zp(e,VR):`https://${t.config.authDomain}/${LR}`,r={apiKey:e.apiKey,appName:t.name,v:ps},i=$R.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${da(r).slice(1)}`}async function zR(t){const e=await OR(t),n=ln().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:UR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=ln().setTimeout(()=>{s(o)},MR.get());function l(){ln().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const jR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BR=500,HR=600,WR="_blank",qR="http://localhost";class Ky{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KR(t,e,n,r=BR,i=HR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},jR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ot().toLowerCase();n&&(a=cw(u)?WR:n),uw(u)&&(e=e||qR,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(mC(u)&&a!=="_self")return GR(e||"",a),new Ky(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Ky(h)}function GR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const QR="__/auth/handler",YR="emulator/auth/handler",XR=encodeURIComponent("fac");async function Gy(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:i};if(e instanceof qp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",VA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ma){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${XR}=${encodeURIComponent(l)}`:"";return`${JR(t)}?${da(a).slice(1)}${u}`}function JR({config:t}){return t.emulator?zp(t,YR):`https://${t.authDomain}/${QR}`}/**
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
 */const xh="webStorageSupport";class ZR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aw,this._completeRedirectFn=TR,this._overrideRedirectResult=wR}async _openPopup(e,n,r,i){var s;Cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Gy(e,n,r,Gd(),i);return KR(e,o,Kp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Gy(e,n,r,Gd(),i);return nR(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zR(e),r=new AR(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xh,{type:xh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[xh];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mw()||Bp()||cc()}}const eP=ZR;var Qy="@firebase/auth",Yy="1.2.0";/**
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
 */class tP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rP(t){ts(new ti("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gw(t)},u=new IC(r,i,s,l);return xC(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ts(new ti("auth-internal",e=>{const n=Un(e.getProvider("auth").getImmediate());return(r=>new tP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fr(Qy,Yy,nP(t)),fr(Qy,Yy,"esm2017")}/**
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
 */const iP=5*60,sP=G1("authIdTokenMaxAge")||iP;let Xy=null;const oP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sP)return;const i=n==null?void 0:n.token;Xy!==i&&(Xy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aP(t=J1()){const e=Fp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PC(t,{popupRedirectResolver:eP,persistence:[hR,ZC,Aw]}),r=G1("authTokenSyncURL");if(r){const s=oP(r);KC(n,s,()=>s(n.currentUser)),qC(n,o=>s(o))}const i=q1("auth");return i&&bC(n,`http://${i}`),n}rP("Browser");var lP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,Qp=Qp||{},z=lP||self;function fc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ya(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uP(t){return Object.prototype.hasOwnProperty.call(t,bh)&&t[bh]||(t[bh]=++cP)}var bh="closure_uid_"+(1e9*Math.random()>>>0),cP=0;function hP(t,e,n){return t.call.apply(t.bind,arguments)}function dP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function nt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?nt=hP:nt=dP,nt.apply(null,arguments)}function il(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Rr(){this.s=this.s,this.o=this.o}var fP=0;Rr.prototype.s=!1;Rr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),fP!=0)&&uP(this)};Rr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Dw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Yp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Jy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(fc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}rt.prototype.h=function(){this.defaultPrevented=!0};var pP=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{z.addEventListener("test",()=>{},e),z.removeEventListener("test",()=>{},e)}catch{}return t}();function Uo(t){return/^[\s\xa0]*$/.test(t)}function pc(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function en(t){return pc().indexOf(t)!=-1}function Xp(t){return Xp[" "](t),t}Xp[" "]=function(){};function mP(t,e){var n=ax;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var gP=en("Opera"),ns=en("Trident")||en("MSIE"),Ow=en("Edge"),Yd=Ow||ns,Mw=en("Gecko")&&!(pc().toLowerCase().indexOf("webkit")!=-1&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),yP=pc().toLowerCase().indexOf("webkit")!=-1&&!en("Edge");function Lw(){var t=z.document;return t?t.documentMode:void 0}var Xd;e:{var Nh="",Dh=function(){var t=pc();if(Mw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ow)return/Edge\/([\d\.]+)/.exec(t);if(ns)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yP)return/WebKit\/(\S+)/.exec(t);if(gP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dh&&(Nh=Dh?Dh[1]:""),ns){var Oh=Lw();if(Oh!=null&&Oh>parseFloat(Nh)){Xd=String(Oh);break e}}Xd=Nh}var Jd;if(z.document&&ns){var Zy=Lw();Jd=Zy||parseInt(Xd,10)||void 0}else Jd=void 0;var vP=Jd;function zo(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Mw){e:{try{Xp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_P[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&zo.$.h.call(this)}}ze(zo,rt);var _P={2:"touch",3:"pen",4:"mouse"};zo.prototype.h=function(){zo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var va="closure_listenable_"+(1e6*Math.random()|0),wP=0;function EP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++wP,this.fa=this.ia=!1}function mc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Jp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function IP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Vw(t){const e={};for(const n in t)e[n]=t[n];return e}const ev="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<ev.length;s++)n=ev[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function gc(t){this.src=t,this.g={},this.h=0}gc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=ef(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new EP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Zd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Dw(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(mc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ef(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Zp="closure_lm_"+(1e6*Math.random()|0),Mh={};function $w(t,e,n,r,i){if(r&&r.once)return zw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$w(t,e[s],n,r,i);return null}return n=nm(n),t&&t[va]?t.O(e,n,ya(r)?!!r.capture:!!r,i):Uw(t,e,n,!1,r,i)}function Uw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ya(i)?!!i.capture:!!i,a=tm(t);if(a||(t[Zp]=a=new gc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=TP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)pP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Bw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function TP(){function t(n){return e.call(t.src,t.listener,n)}const e=SP;return t}function zw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)zw(t,e[s],n,r,i);return null}return n=nm(n),t&&t[va]?t.P(e,n,ya(r)?!!r.capture:!!r,i):Uw(t,e,n,!0,r,i)}function jw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)jw(t,e[s],n,r,i);else r=ya(r)?!!r.capture:!!r,n=nm(n),t&&t[va]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ef(s,n,r,i),-1<n&&(mc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=tm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ef(e,n,r,i)),(n=-1<t?e[t]:null)&&em(n))}function em(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[va])Zd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Bw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=tm(e))?(Zd(n,t),n.h==0&&(n.src=null,e[Zp]=null)):mc(t)}}}function Bw(t){return t in Mh?Mh[t]:Mh[t]="on"+t}function SP(t,e){if(t.fa)t=!0;else{e=new zo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&em(t),t=n.call(r,e)}return t}function tm(t){return t=t[Zp],t instanceof gc?t:null}var Lh="__closure_events_fn_"+(1e9*Math.random()>>>0);function nm(t){return typeof t=="function"?t:(t[Lh]||(t[Lh]=function(e){return t.handleEvent(e)}),t[Lh])}function Ue(){Rr.call(this),this.i=new gc(this),this.S=this,this.J=null}ze(Ue,Rr);Ue.prototype[va]=!0;Ue.prototype.removeEventListener=function(t,e,n,r){jw(this,t,e,n,r)};function Ke(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),Fw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=sl(o,r,!0,e)&&i}if(o=e.g=t,i=sl(o,r,!0,e)&&i,i=sl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=sl(o,r,!1,e)&&i}Ue.prototype.N=function(){if(Ue.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)mc(n[r]);delete t.g[e],t.h--}}this.J=null};Ue.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ue.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function sl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Zd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var rm=z.JSON.stringify;class AP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function kP(){var t=im;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CP{constructor(){this.h=this.g=null}add(e,n){const r=Hw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Hw=new AP(()=>new RP,t=>t.reset());class RP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function PP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function xP(t){z.setTimeout(()=>{throw t},0)}let jo,Bo=!1,im=new CP,Ww=()=>{const t=z.Promise.resolve(void 0);jo=()=>{t.then(bP)}};var bP=()=>{for(var t;t=kP();){try{t.h.call(t.g)}catch(n){xP(n)}var e=Hw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Bo=!1};function yc(t,e){Ue.call(this),this.h=t||1,this.g=e||z,this.j=nt(this.qb,this),this.l=Date.now()}ze(yc,Ue);b=yc.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ke(this,"tick"),this.ga&&(sm(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function sm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}b.N=function(){yc.$.N.call(this),sm(this),delete this.g};function om(t,e,n){if(typeof t=="function")n&&(t=nt(t,n));else if(t&&typeof t.handleEvent=="function")t=nt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function qw(t){t.g=om(()=>{t.g=null,t.i&&(t.i=!1,qw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class NP extends Rr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qw(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ho(t){Rr.call(this),this.h=t,this.g={}}ze(Ho,Rr);var tv=[];function Kw(t,e,n,r){Array.isArray(n)||(n&&(tv[0]=n.toString()),n=tv);for(var i=0;i<n.length;i++){var s=$w(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Gw(t){Jp(t.g,function(e,n){this.g.hasOwnProperty(n)&&em(e)},t),t.g={}}Ho.prototype.N=function(){Ho.$.N.call(this),Gw(this)};Ho.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vc(){this.g=!0}vc.prototype.Ea=function(){this.g=!1};function DP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function OP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ni(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+LP(t,n)+(r?" "+r:"")})}function MP(t,e){t.info(function(){return"TIMEOUT: "+e})}vc.prototype.info=function(){};function LP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return rm(n)}catch{return e}}var fi={},nv=null;function _c(){return nv=nv||new Ue}fi.Ta="serverreachability";function Qw(t){rt.call(this,fi.Ta,t)}ze(Qw,rt);function Wo(t){const e=_c();Ke(e,new Qw(e))}fi.STAT_EVENT="statevent";function Yw(t,e){rt.call(this,fi.STAT_EVENT,t),this.stat=e}ze(Yw,rt);function ut(t){const e=_c();Ke(e,new Yw(e,t))}fi.Ua="timingevent";function Xw(t,e){rt.call(this,fi.Ua,t),this.size=e}ze(Xw,rt);function _a(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var wc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Jw={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function am(){}am.prototype.h=null;function rv(t){return t.h||(t.h=t.i())}function Zw(){}var wa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function lm(){rt.call(this,"d")}ze(lm,rt);function um(){rt.call(this,"c")}ze(um,rt);var tf;function Ec(){}ze(Ec,am);Ec.prototype.g=function(){return new XMLHttpRequest};Ec.prototype.i=function(){return{}};tf=new Ec;function Ea(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ho(this),this.P=VP,t=Yd?125:void 0,this.V=new yc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new eE}function eE(){this.i=null,this.g="",this.h=!1}var VP=45e3,nf={},ku={};b=Ea.prototype;b.setTimeout=function(t){this.P=t};function rf(t,e,n){t.L=1,t.v=Tc(Pn(e)),t.s=n,t.S=!0,tE(t,null)}function tE(t,e){t.G=Date.now(),Ia(t),t.A=Pn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),uE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new eE,t.g=xE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new NP(nt(t.Pa,t,t.g),t.O)),Kw(t.U,t.g,"readystatechange",t.nb),e=t.I?Vw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Wo(),DP(t.j,t.u,t.A,t.m,t.W,t.s)}b.nb=function(t){t=t.target;const e=this.M;e&&tn(t)==3?e.l():this.Pa(t)};b.Pa=function(t){try{if(t==this.g)e:{const c=tn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Yd||this.g&&(this.h.h||this.g.ja()||av(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Wo(3):Wo(2)),Ic(this);var n=this.g.da();this.ca=n;t:if(nE(this)){var r=av(this.g);t="";var i=r.length,s=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){zr(this),lo(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,OP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Uo(a)){var u=a;break t}}u=null}if(n=u)Ni(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sf(this,n);else{this.i=!1,this.o=3,ut(12),zr(this),lo(this);break e}}this.S?(rE(this,c,o),Yd&&this.i&&c==3&&(Kw(this.U,this.V,"tick",this.mb),this.V.start())):(Ni(this.j,this.m,o,null),sf(this,o)),c==4&&zr(this),this.i&&!this.J&&(c==4?kE(this.l,this):(this.i=!1,Ia(this)))}else ix(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ut(12)):(this.o=0,ut(13)),zr(this),lo(this)}}}catch{}finally{}};function nE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function rE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=FP(t,n),i==ku){e==4&&(t.o=4,ut(14),r=!1),Ni(t.j,t.m,null,"[Incomplete Response]");break}else if(i==nf){t.o=4,ut(15),Ni(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ni(t.j,t.m,i,null),sf(t,i);nE(t)&&i!=ku&&i!=nf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),mm(e),e.M=!0,ut(11))):(Ni(t.j,t.m,n,"[Invalid Chunked Response]"),zr(t),lo(t))}b.mb=function(){if(this.g){var t=tn(this.g),e=this.g.ja();this.C<e.length&&(Ic(this),rE(this,t,e),this.i&&t!=4&&Ia(this))}};function FP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ku:(n=Number(e.substring(n,r)),isNaN(n)?nf:(r+=1,r+n>e.length?ku:(e=e.slice(r,r+n),t.C=r+n,e)))}b.cancel=function(){this.J=!0,zr(this)};function Ia(t){t.Y=Date.now()+t.P,iE(t,t.P)}function iE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_a(nt(t.lb,t),e)}function Ic(t){t.B&&(z.clearTimeout(t.B),t.B=null)}b.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(MP(this.j,this.A),this.L!=2&&(Wo(),ut(17)),zr(this),this.o=2,lo(this)):iE(this,this.Y-t)};function lo(t){t.l.H==0||t.J||kE(t.l,t)}function zr(t){Ic(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,sm(t.V),Gw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function sf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||of(n.i,t))){if(!t.K&&of(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Pu(n),kc(n);else break e;pm(n),ut(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=_a(nt(n.ib,n),6e3));if(1>=dE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else jr(n,11)}else if((t.K||n.g==t)&&Pu(n),!Uo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(cm(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,oe(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=PE(r,r.J?r.pa:null,r.Y),o.K){fE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Ic(a),Ia(a)),r.g=o}else SE(r);0<n.j.length&&Cc(n)}else u[0]!="stop"&&u[0]!="close"||jr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?jr(n,7):fm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Wo(4)}catch{}}function $P(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(fc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function UP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(fc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function sE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(fc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=UP(t),r=$P(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var oE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Qr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Qr){this.h=t.h,Cu(this,t.j),this.s=t.s,this.g=t.g,Ru(this,t.m),this.l=t.l;var e=t.i,n=new qo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),iv(this,n),this.o=t.o}else t&&(e=String(t).match(oE))?(this.h=!1,Cu(this,e[1]||"",!0),this.s=Ws(e[2]||""),this.g=Ws(e[3]||"",!0),Ru(this,e[4]),this.l=Ws(e[5]||"",!0),iv(this,e[6]||"",!0),this.o=Ws(e[7]||"")):(this.h=!1,this.i=new qo(null,this.h))}Qr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qs(e,sv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(qs(e,sv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(qs(n,n.charAt(0)=="/"?HP:BP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qs(n,qP)),t.join("")};function Pn(t){return new Qr(t)}function Cu(t,e,n){t.j=n?Ws(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ru(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function iv(t,e,n){e instanceof qo?(t.i=e,KP(t.i,t.h)):(n||(e=qs(e,WP)),t.i=new qo(e,t.h))}function oe(t,e,n){t.i.set(e,n)}function Tc(t){return oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ws(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,jP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function jP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var sv=/[#\/\?@]/g,BP=/[#\?:]/g,HP=/[#\?]/g,WP=/[#\?@]/g,qP=/#/g;function qo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Pr(t){t.g||(t.g=new Map,t.h=0,t.i&&zP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}b=qo.prototype;b.add=function(t,e){Pr(this),this.i=null,t=gs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aE(t,e){Pr(t),e=gs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function lE(t,e){return Pr(t),e=gs(t,e),t.g.has(e)}b.forEach=function(t,e){Pr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};b.ta=function(){Pr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};b.Z=function(t){Pr(this);let e=[];if(typeof t=="string")lE(this,t)&&(e=e.concat(this.g.get(gs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};b.set=function(t,e){return Pr(this),this.i=null,t=gs(this,t),lE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};b.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function uE(t,e,n){aE(t,e),0<n.length&&(t.i=null,t.g.set(gs(t,e),Yp(n)),t.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function gs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function KP(t,e){e&&!t.j&&(Pr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aE(this,r),uE(this,i,n))},t)),t.j=e}var GP=class{constructor(t,e){this.g=t,this.map=e}};function cE(t){this.l=t||QP,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QP=10;function hE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dE(t){return t.h?1:t.g?t.g.size:0}function of(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function cm(t,e){t.g?t.g.add(e):t.h=e}function fE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cE.prototype.cancel=function(){if(this.i=pE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Yp(t.i)}var YP=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function XP(){this.g=new YP}function JP(t,e,n){const r=n||"";try{sE(t,function(i,s){let o=i;ya(i)&&(o=rm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ZP(t,e){const n=new vc;if(z.Image){const r=new Image;r.onload=il(ol,n,r,"TestLoadImage: loaded",!0,e),r.onerror=il(ol,n,r,"TestLoadImage: error",!1,e),r.onabort=il(ol,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=il(ol,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ol(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ta(t){this.l=t.fc||null,this.j=t.ob||!1}ze(Ta,am);Ta.prototype.g=function(){return new Sc(this.l,this.j)};Ta.prototype.i=function(t){return function(){return t}}({});function Sc(t,e){Ue.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=hm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Sc,Ue);var hm=0;b=Sc.prototype;b.open=function(t,e){if(this.readyState!=hm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ko(this)};b.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sa(this)),this.readyState=hm};b.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ko(this)),this.g&&(this.readyState=3,Ko(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function mE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}b.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sa(this):Ko(this),this.readyState==3&&mE(this)}};b.Za=function(t){this.g&&(this.response=this.responseText=t,Sa(this))};b.Ya=function(t){this.g&&(this.response=t,Sa(this))};b.ka=function(){this.g&&Sa(this)};function Sa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ko(t)}b.setRequestHeader=function(t,e){this.v.append(t,e)};b.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ko(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ex=z.JSON.parse;function _e(t){Ue.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=gE,this.L=this.M=!1}ze(_e,Ue);var gE="",tx=/^https?$/i,nx=["POST","PUT"];b=_e.prototype;b.Oa=function(t){this.M=t};b.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():tf.g(),this.C=this.u?rv(this.u):rv(tf),this.g.onreadystatechange=nt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){ov(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=Dw(nx,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_E(this),0<this.B&&((this.L=rx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=nt(this.ua,this)):this.A=om(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ov(this,s)}};function rx(t){return ns&&typeof t.timeout=="number"&&t.ontimeout!==void 0}b.ua=function(){typeof Qp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ke(this,"timeout"),this.abort(8))};function ov(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,yE(t),Ac(t)}function yE(t){t.F||(t.F=!0,Ke(t,"complete"),Ke(t,"error"))}b.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ke(this,"complete"),Ke(this,"abort"),Ac(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ac(this,!0)),_e.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?vE(this):this.kb())};b.kb=function(){vE(this)};function vE(t){if(t.h&&typeof Qp<"u"&&(!t.C[1]||tn(t)!=4||t.da()!=2)){if(t.v&&tn(t)==4)om(t.La,0,t);else if(Ke(t,"readystatechange"),tn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(oE)[1]||null;!i&&z.self&&z.self.location&&(i=z.self.location.protocol.slice(0,-1)),r=!tx.test(i?i.toLowerCase():"")}n=r}if(n)Ke(t,"complete"),Ke(t,"success");else{t.m=6;try{var s=2<tn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",yE(t)}}finally{Ac(t)}}}}function Ac(t,e){if(t.g){_E(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ke(t,"ready");try{n.onreadystatechange=r}catch{}}}function _E(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}b.isActive=function(){return!!this.g};function tn(t){return t.g?t.g.readyState:0}b.da=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ex(e)}};function av(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case gE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ix(t){const e={};t=(t.g&&2<=tn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Uo(t[r]))continue;var n=PP(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}IP(e,function(r){return r.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wE(t){let e="";return Jp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function dm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=wE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):oe(t,e,n))}function Vs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function EE(t){this.Ga=0,this.j=[],this.l=new vc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vs("baseRetryDelayMs",5e3,t),this.hb=Vs("retryDelaySeedMs",1e4,t),this.eb=Vs("forwardChannelMaxRetries",2,t),this.xa=Vs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cE(t&&t.concurrentRequestLimit),this.Ja=new XP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=EE.prototype;b.ra=8;b.H=1;function fm(t){if(IE(t),t.H==3){var e=t.W++,n=Pn(t.I);if(oe(n,"SID",t.K),oe(n,"RID",e),oe(n,"TYPE","terminate"),Aa(t,n),e=new Ea(t,t.l,e),e.L=2,e.v=Tc(Pn(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.v,n=!0),n||(e.g=xE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ia(e)}RE(t)}function kc(t){t.g&&(mm(t),t.g.cancel(),t.g=null)}function IE(t){kc(t),t.u&&(z.clearTimeout(t.u),t.u=null),Pu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Cc(t){if(!hE(t.i)&&!t.m){t.m=!0;var e=t.Na;jo||Ww(),Bo||(jo(),Bo=!0),im.add(e,t),t.C=0}}function sx(t,e){return dE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=_a(nt(t.Na,t,e),CE(t,t.C)),t.C++,!0)}b.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ea(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Vw(s),Fw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=TE(this,i,e),n=Pn(this.I),oe(n,"RID",t),oe(n,"CVER",22),this.F&&oe(n,"X-HTTP-Session-Id",this.F),Aa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(wE(s)))+"&"+e:this.o&&dm(n,this.o,s)),cm(this.i,i),this.bb&&oe(n,"TYPE","init"),this.P?(oe(n,"$req",e),oe(n,"SID","null"),i.aa=!0,rf(i,n,null)):rf(i,n,e),this.H=2}}else this.H==3&&(t?lv(this,t):this.j.length==0||hE(this.i)||lv(this))};function lv(t,e){var n;e?n=e.m:n=t.W++;const r=Pn(t.I);oe(r,"SID",t.K),oe(r,"RID",n),oe(r,"AID",t.V),Aa(t,r),t.o&&t.s&&dm(r,t.o,t.s),n=new Ea(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=TE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),cm(t.i,n),rf(n,r,e)}function Aa(t,e){t.na&&Jp(t.na,function(n,r){oe(e,r,n)}),t.h&&sE({},function(n,r){oe(e,r,n)})}function TE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?nt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{JP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function SE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;jo||Ww(),Bo||(jo(),Bo=!0),im.add(e,t),t.A=0}}function pm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=_a(nt(t.Ma,t),CE(t,t.A)),t.A++,!0)}b.Ma=function(){if(this.u=null,AE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=_a(nt(this.jb,this),t)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ut(10),kc(this),AE(this))};function mm(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function AE(t){t.g=new Ea(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Pn(t.wa);oe(e,"RID","rpc"),oe(e,"SID",t.K),oe(e,"AID",t.V),oe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&oe(e,"TO",t.qa),oe(e,"TYPE","xmlhttp"),Aa(t,e),t.o&&t.s&&dm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Tc(Pn(e)),n.s=null,n.S=!0,tE(n,t)}b.ib=function(){this.v!=null&&(this.v=null,kc(this),pm(this),ut(19))};function Pu(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function kE(t,e){var n=null;if(t.g==e){Pu(t),mm(t),t.g=null;var r=2}else if(of(t.i,e))n=e.F,fE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=_c(),Ke(r,new Xw(r,n)),Cc(t)}else SE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&sx(t,e)||r==2&&pm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:jr(t,5);break;case 4:jr(t,10);break;case 3:jr(t,6);break;default:jr(t,2)}}}function CE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function jr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=nt(t.pb,t);n||(n=new Qr("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Cu(n,"https"),Tc(n)),ZP(n.toString(),r)}else ut(2);t.H=0,t.h&&t.h.za(e),RE(t),IE(t)}b.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ut(2)):(this.l.info("Failed to ping google.com"),ut(1))};function RE(t){if(t.H=0,t.ma=[],t.h){const e=pE(t.i);(e.length!=0||t.j.length!=0)&&(Jy(t.ma,e),Jy(t.ma,t.j),t.i.i.length=0,Yp(t.j),t.j.length=0),t.h.ya()}}function PE(t,e,n){var r=n instanceof Qr?Pn(n):new Qr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ru(r,r.m);else{var i=z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Qr(null);r&&Cu(s,r),e&&(s.g=e),i&&Ru(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&oe(r,n,e),oe(r,"VER",t.ra),Aa(t,r),r}function xE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new _e(new Ta({ob:!0})):new _e(t.va),e.Oa(t.J),e}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function bE(){}b=bE.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function xu(){if(ns&&!(10<=Number(vP)))throw Error("Environmental error: no available transport.")}xu.prototype.g=function(t,e){return new At(t,e)};function At(t,e){Ue.call(this),this.g=new EE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Uo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Uo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ys(this)}ze(At,Ue);At.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=PE(t,null,t.Y),Cc(t)};At.prototype.close=function(){fm(this.g)};At.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=rm(t),t=n);e.j.push(new GP(e.fb++,t)),e.H==3&&Cc(e)};At.prototype.N=function(){this.g.h=null,delete this.j,fm(this.g),delete this.g,At.$.N.call(this)};function NE(t){lm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(NE,lm);function DE(){um.call(this),this.status=1}ze(DE,um);function ys(t){this.g=t}ze(ys,bE);ys.prototype.Ba=function(){Ke(this.g,"a")};ys.prototype.Aa=function(t){Ke(this.g,new NE(t))};ys.prototype.za=function(t){Ke(this.g,new DE)};ys.prototype.ya=function(){Ke(this.g,"b")};function ox(){this.blockSize=-1}function Gt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze(Gt,ox);Gt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Vh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Gt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Vh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Vh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Vh(this,r),i=0;break}}this.h=i,this.i+=e};Gt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ne(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var ax={};function gm(t){return-128<=t&&128>t?mP(t,function(e){return new ne([e|0],0>e?-1:0)}):new ne([t|0],0>t?-1:0)}function nn(t){if(isNaN(t)||!isFinite(t))return Hi;if(0>t)return We(nn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=af;return new ne(e,0)}function OE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return We(OE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=nn(Math.pow(e,8)),r=Hi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=nn(Math.pow(e,s)),r=r.R(s).add(nn(o))):(r=r.R(n),r=r.add(nn(o)))}return r}var af=4294967296,Hi=gm(0),lf=gm(1),uv=gm(16777216);b=ne.prototype;b.ea=function(){if(Nt(this))return-We(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:af+r)*e,e*=af}return t};b.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(wn(this))return"0";if(Nt(this))return"-"+We(this).toString(t);for(var e=nn(Math.pow(t,6)),n=this,r="";;){var i=Nu(n,e).g;n=bu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,wn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};b.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Nt(t){return t.h==-1}b.X=function(t){return t=bu(this,t),Nt(t)?-1:wn(t)?0:1};function We(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ne(n,~t.h).add(lf)}b.abs=function(){return Nt(this)?We(this):this};b.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ne(n,n[n.length-1]&-2147483648?-1:0)};function bu(t,e){return t.add(We(e))}b.R=function(t){if(wn(this)||wn(t))return Hi;if(Nt(this))return Nt(t)?We(this).R(We(t)):We(We(this).R(t));if(Nt(t))return We(this.R(We(t)));if(0>this.X(uv)&&0>t.X(uv))return nn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,al(n,2*r+2*i),n[2*r+2*i+1]+=s*l,al(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,al(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,al(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ne(n,0)};function al(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Fs(t,e){this.g=t,this.h=e}function Nu(t,e){if(wn(e))throw Error("division by zero");if(wn(t))return new Fs(Hi,Hi);if(Nt(t))return e=Nu(We(t),e),new Fs(We(e.g),We(e.h));if(Nt(e))return e=Nu(t,We(e)),new Fs(We(e.g),e.h);if(30<t.g.length){if(Nt(t)||Nt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=lf,r=e;0>=r.X(t);)n=cv(n),r=cv(r);var i=yi(n,1),s=yi(r,1);for(r=yi(r,2),n=yi(n,2);!wn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=yi(r,1),n=yi(n,1)}return e=bu(t,i.R(e)),new Fs(i,e)}for(i=Hi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=nn(n),o=s.R(e);Nt(o)||0<o.X(t);)n-=r,s=nn(n),o=s.R(e);wn(s)&&(s=lf),i=i.add(s),t=bu(t,o)}return new Fs(i,t)}b.gb=function(t){return Nu(this,t).h};b.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ne(n,this.h&t.h)};b.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ne(n,this.h|t.h)};b.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ne(n,this.h^t.h)};function cv(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ne(n,t.h)}function yi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ne(i,t.h)}xu.prototype.createWebChannel=xu.prototype.g;At.prototype.send=At.prototype.u;At.prototype.open=At.prototype.m;At.prototype.close=At.prototype.close;wc.NO_ERROR=0;wc.TIMEOUT=8;wc.HTTP_ERROR=6;Jw.COMPLETE="complete";Zw.EventType=wa;wa.OPEN="a";wa.CLOSE="b";wa.ERROR="c";wa.MESSAGE="d";Ue.prototype.listen=Ue.prototype.O;_e.prototype.listenOnce=_e.prototype.P;_e.prototype.getLastError=_e.prototype.Sa;_e.prototype.getLastErrorCode=_e.prototype.Ia;_e.prototype.getStatus=_e.prototype.da;_e.prototype.getResponseJson=_e.prototype.Wa;_e.prototype.getResponseText=_e.prototype.ja;_e.prototype.send=_e.prototype.ha;_e.prototype.setWithCredentials=_e.prototype.Oa;Gt.prototype.digest=Gt.prototype.l;Gt.prototype.reset=Gt.prototype.reset;Gt.prototype.update=Gt.prototype.j;ne.prototype.add=ne.prototype.add;ne.prototype.multiply=ne.prototype.R;ne.prototype.modulo=ne.prototype.gb;ne.prototype.compare=ne.prototype.X;ne.prototype.toNumber=ne.prototype.ea;ne.prototype.toString=ne.prototype.toString;ne.prototype.getBits=ne.prototype.D;ne.fromNumber=nn;ne.fromString=OE;var lx=function(){return new xu},ux=function(){return _c()},Fh=wc,cx=Jw,hx=fi,hv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},dx=Ta,ll=Zw,fx=_e,px=Gt,Wi=ne;const dv="@firebase/firestore";/**
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
 */let vs="10.2.0";/**
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
 */const ii=new Lp("@firebase/firestore");function fv(){return ii.logLevel}function V(t,...e){if(ii.logLevel<=Z.DEBUG){const n=e.map(ym);ii.debug(`Firestore (${vs}): ${t}`,...n)}}function xn(t,...e){if(ii.logLevel<=Z.ERROR){const n=e.map(ym);ii.error(`Firestore (${vs}): ${t}`,...n)}}function rs(t,...e){if(ii.logLevel<=Z.WARN){const n=e.map(ym);ii.warn(`Firestore (${vs}): ${t}`,...n)}}function ym(t){if(typeof t=="string")return t;try{/**
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function ce(t,e){t||U()}function W(t,e){return t}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ME{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Je.UNAUTHENTICATED))}shutdown(){}}class gx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yx{constructor(e){this.t=e,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new In;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new In,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new ME(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Je(e)}}class vx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _x{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ex{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new wx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ix(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class LE{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ix(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new be(0,0))}static max(){return new j(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Go{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ae extends Go{construct(e,n,r){return new ae(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ae(n)}static emptyPath(){return new ae([])}}const Tx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Go{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return Tx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ae.fromString(e))}static fromName(e){return new F(ae.fromString(e).popFirst(5))}static empty(){return new F(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ae.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ae(e.slice()))}}function Sx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new _r(i,F.empty(),e)}function Ax(t){return new _r(t.readTime,t.key,-1)}class _r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new _r(j.min(),F.empty(),-1)}static max(){return new _r(j.max(),F.empty(),-1)}}function kx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=F.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const Cx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ka(t){if(t.code!==S.FAILED_PRECONDITION||t.message!==Cx)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ca(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class vm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}vm.ae=-1;function Rc(t){return t==null}function Du(t){return t===0&&1/t==-1/0}function Px(t){return typeof t=="number"&&Number.isInteger(t)&&!Du(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function pv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function pi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class me{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mv(this.data.getIterator())}getIteratorFrom(e){return new mv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class mv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new It([])}unionWith(e){let n=new it(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class FE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new FE("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const xx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(ce(!!t),typeof t=="string"){let e=0;const n=xx.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function si(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function _m(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function wm(t){const e=t.mapValue.fields.__previous_value__;return _m(e)?wm(e):e}function Qo(t){const e=wr(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class bx{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const cl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function oi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_m(t)?4:Nx(t)?9007199254740991:10:U()}function cn(t,e){if(t===e)return!0;const n=oi(t);if(n!==oi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qo(t).isEqual(Qo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=wr(i.timestampValue),a=wr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return si(i.bytesValue).isEqual(si(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Te(i.geoPointValue.latitude)===Te(s.geoPointValue.latitude)&&Te(i.geoPointValue.longitude)===Te(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Te(i.integerValue)===Te(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Te(i.doubleValue),a=Te(s.doubleValue);return o===a?Du(o)===Du(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(pv(o)!==pv(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!cn(o[l],a[l])))return!1;return!0}(t,e);default:return U()}}function Xo(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=oi(t),r=oi(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Te(s.integerValue||s.doubleValue),l=Te(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return gv(t.timestampValue,e.timestampValue);case 4:return gv(Qo(t),Qo(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=si(s),l=si(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ee(a[u],l[u]);if(c!==0)return c}return ee(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ee(Te(s.latitude),Te(o.latitude));return a!==0?a:ee(Te(s.longitude),Te(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ss(a[u],l[u]);if(c)return c}return ee(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===cl.mapValue&&o===cl.mapValue)return 0;if(s===cl.mapValue)return 1;if(o===cl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=ee(l[h],c[h]);if(d!==0)return d;const m=ss(a[l[h]],u[c[h]]);if(m!==0)return m}return ee(l.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function gv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=wr(t),r=wr(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function os(t){return uf(t)}function uf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return si(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return F.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=uf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${uf(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function yv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function cf(t){return!!t&&"integerValue"in t}function Em(t){return!!t&&"arrayValue"in t}function vv(t){return!!t&&"nullValue"in t}function _v(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ul(t){return!!t&&"mapValue"in t}function uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return pi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=uo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Nx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uo(n)}setAll(e){let n=tt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=uo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){pi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(uo(this.value))}}function $E(t){const e=[];return pi(t.fields,(n,r)=>{const i=new tt([n]);if(Ul(r)){const s=$E(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new It(e)}/**
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
 */class et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new et(e,0,j.min(),j.min(),j.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new et(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new et(e,2,n,j.min(),j.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new et(e,3,n,j.min(),j.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ou{constructor(e,n){this.position=e,this.inclusive=n}}function wv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=F.comparator(F.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ev(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class co{constructor(e,n="asc"){this.field=e,this.dir=n}}function Dx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class UE{}class Ae extends UE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Mx(e,n,r):n==="array-contains"?new Fx(e,r):n==="in"?new $x(e,r):n==="not-in"?new Ux(e,r):n==="array-contains-any"?new zx(e,r):new Ae(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Lx(e,r):new Vx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&oi(this.value)===oi(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Qt extends UE{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Qt(e,n)}matches(e){return zE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function zE(t){return t.op==="and"}function jE(t){return Ox(t)&&zE(t)}function Ox(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function hf(t){if(t instanceof Ae)return t.field.canonicalString()+t.op.toString()+os(t.value);if(jE(t))return t.filters.map(e=>hf(e)).join(",");{const e=t.filters.map(n=>hf(n)).join(",");return`${t.op}(${e})`}}function BE(t,e){return t instanceof Ae?function(r,i){return i instanceof Ae&&r.op===i.op&&r.field.isEqual(i.field)&&cn(r.value,i.value)}(t,e):t instanceof Qt?function(r,i){return i instanceof Qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&BE(o,i.filters[a]),!0):!1}(t,e):void U()}function HE(t){return t instanceof Ae?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof Qt?function(n){return n.op.toString()+" {"+n.getFilters().map(HE).join(" ,")+"}"}(t):"Filter"}class Mx extends Ae{constructor(e,n,r){super(e,n,r),this.key=F.fromName(r.referenceValue)}matches(e){const n=F.comparator(e.key,this.key);return this.matchesComparison(n)}}class Lx extends Ae{constructor(e,n){super(e,"in",n),this.keys=WE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Vx extends Ae{constructor(e,n){super(e,"not-in",n),this.keys=WE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function WE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>F.fromName(r.referenceValue))}class Fx extends Ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Em(n)&&Xo(n.arrayValue,this.value)}}class $x extends Ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xo(this.value.arrayValue,n)}}class Ux extends Ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xo(this.value.arrayValue,n)}}class zx extends Ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Em(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xo(this.value.arrayValue,r))}}/**
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
 */class jx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function Iv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jx(t,e,n,r,i,s,o)}function Im(t){const e=W(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.he=n}return e.he}function Tm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Dx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!BE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ev(t.startAt,e.startAt)&&Ev(t.endAt,e.endAt)}function df(t){return F.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ra{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function Bx(t,e,n,r,i,s,o,a){return new Ra(t,e,n,r,i,s,o,a)}function Sm(t){return new Ra(t)}function Tv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qE(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Am(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function KE(t){return t.collectionGroup!==null}function ho(t){const e=W(t);if(e.Pe===null){e.Pe=[];const n=Am(e),r=qE(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new co(n)),e.Pe.push(new co(tt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new co(tt.keyField(),s))}}}return e.Pe}function bn(t){const e=W(t);return e.Ie||(e.Ie=Hx(e,ho(t))),e.Ie}function Hx(t,e){if(t.limitType==="F")return Iv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new co(i.field,s)});const n=t.endAt?new Ou(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ou(t.startAt.position,t.startAt.inclusive):null;return Iv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ff(t,e){e.getFirstInequalityField(),Am(t);const n=t.filters.concat([e]);return new Ra(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pf(t,e,n){return new Ra(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Pc(t,e){return Tm(bn(t),bn(e))&&t.limitType===e.limitType}function GE(t){return`${Im(bn(t))}|lt:${t.limitType}`}function mf(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>HE(i)).join(", ")}]`),Rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>os(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>os(i)).join(",")),`Target(${r})`}(bn(t))}; limitType=${t.limitType})`}function xc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):F.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ho(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=wv(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,ho(r),i)||r.endAt&&!function(o,a,l){const u=wv(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,ho(r),i))}(t,e)}function Wx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function QE(t){return(e,n)=>{let r=!1;for(const i of ho(t)){const s=qx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function qx(t,e,n){const r=t.field.isKeyField()?F.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?ss(l,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){pi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return VE(this.inner)}size(){return this.innerSize}}/**
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
 */const Kx=new me(F.comparator);function Nn(){return Kx}const YE=new me(F.comparator);function Ks(...t){let e=YE;for(const n of t)e=e.insert(n.key,n);return e}function XE(t){let e=YE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return fo()}function JE(){return fo()}function fo(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const Gx=new me(F.comparator),Qx=new it(F.comparator);function Q(...t){let e=Qx;for(const n of t)e=e.add(n);return e}const Yx=new it(ee);function Xx(){return Yx}/**
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
 */function ZE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Du(e)?"-0":e}}function eI(t){return{integerValue:""+t}}function Jx(t,e){return Px(e)?eI(e):ZE(t,e)}/**
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
 */class bc{constructor(){this._=void 0}}function Zx(t,e,n){return t instanceof Mu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&_m(s)&&(s=wm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Jo?nI(t,e):t instanceof Zo?rI(t,e):function(i,s){const o=tI(i,s),a=Sv(o)+Sv(i.Ee);return cf(o)&&cf(i.Ee)?eI(a):ZE(i.serializer,a)}(t,e)}function eb(t,e,n){return t instanceof Jo?nI(t,e):t instanceof Zo?rI(t,e):n}function tI(t,e){return t instanceof Lu?function(r){return cf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Mu extends bc{}class Jo extends bc{constructor(e){super(),this.elements=e}}function nI(t,e){const n=iI(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Zo extends bc{constructor(e){super(),this.elements=e}}function rI(t,e){let n=iI(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class Lu extends bc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Sv(t){return Te(t.integerValue||t.doubleValue)}function iI(t){return Em(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tb(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Jo&&i instanceof Jo||r instanceof Zo&&i instanceof Zo?is(r.elements,i.elements,cn):r instanceof Lu&&i instanceof Lu?cn(r.Ee,i.Ee):r instanceof Mu&&i instanceof Mu}(t.transform,e.transform)}class nb{constructor(e,n){this.version=e,this.transformResults=n}}class qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nc{}function sI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new km(t.key,qt.none()):new Pa(t.key,t.data,qt.none());{const n=t.data,r=mt.empty();let i=new it(tt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new xr(t.key,r,new It(i.toArray()),qt.none())}}function rb(t,e,n){t instanceof Pa?function(i,s,o){const a=i.value.clone(),l=kv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(i,s,o){if(!zl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=kv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(oI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function po(t,e,n,r){return t instanceof Pa?function(s,o,a,l){if(!zl(s.precondition,o))return a;const u=s.value.clone(),c=Cv(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof xr?function(s,o,a,l){if(!zl(s.precondition,o))return a;const u=Cv(s.fieldTransforms,l,o),c=o.data;return c.setAll(oI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return zl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function ib(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=tI(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Av(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&is(r,i,(s,o)=>tb(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pa extends Nc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xr extends Nc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function oI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function kv(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,eb(o,a,n[i]))}return r}function Cv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Zx(s,o,e))}return r}class km extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sb extends Nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ob{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&rb(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=po(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=JE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=sI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,r)=>Av(n,r))&&is(this.baseMutations,e.baseMutations,(n,r)=>Av(n,r))}}class Cm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return Gx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Cm(e,n,r,i)}}/**
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
 */class ab{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class lb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ie,X;function ub(t){switch(t){default:return U();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function aI(t){if(t===void 0)return xn("GRPC error has no .code"),S.UNKNOWN;switch(t){case Ie.OK:return S.OK;case Ie.CANCELLED:return S.CANCELLED;case Ie.UNKNOWN:return S.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return S.INTERNAL;case Ie.UNAVAILABLE:return S.UNAVAILABLE;case Ie.UNAUTHENTICATED:return S.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case Ie.NOT_FOUND:return S.NOT_FOUND;case Ie.ALREADY_EXISTS:return S.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return S.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case Ie.ABORTED:return S.ABORTED;case Ie.OUT_OF_RANGE:return S.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return S.UNIMPLEMENTED;case Ie.DATA_LOSS:return S.DATA_LOSS;default:return U()}}(X=Ie||(Ie={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Rm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return hl}static getOrCreateInstance(){return hl===null&&(hl=new Rm),hl}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let hl=null;/**
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
 */function cb(){return new TextEncoder}/**
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
 */const hb=new Wi([4294967295,4294967295],0);function Rv(t){const e=cb().encode(t),n=new px;return n.update(e),new Uint8Array(n.digest())}function Pv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Wi([n,r],0),new Wi([i,s],0)]}class Pm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Gs(`Invalid padding: ${n}`);if(r<0)throw new Gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Gs(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=Wi.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(Wi.fromNumber(r)));return i.compare(hb)===1&&(i=new Wi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Rv(e),[r,i]=Pv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Pm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Rv(e),[r,i]=Pv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Dc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,xa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dc(j.min(),i,new me(ee),Nn(),Q())}}class xa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new xa(r,n,Q(),Q(),Q())}}/**
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
 */class jl{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class lI{constructor(e,n){this.targetId=e,this.ye=n}}class uI{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class xv{constructor(){this.we=0,this.Se=Nv(),this.be=at.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=Q(),n=Q(),r=Q();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new xa(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=Nv()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class db{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Nn(),this.Ue=bv(),this.We=new me(ee)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){var n;const r=e.targetId,i=e.ye.count,s=this.et(r);if(s){const o=s.target;if(df(o))if(i===0){const a=new F(o.path);this.je(r,a,et.newNoDocument(a,j.min()))}else ce(i===1);else{const a=this.tt(r);if(a!==i){const l=this.nt(e),u=l?this.rt(l,e,a):1;if(u!==0){this.Ze(r);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(r,c)}(n=Rm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,m,y,_){var v,f,p,g,E,I;const A={localCacheCount:h,existenceFilterCount:d.count,databaseId:m.database,projectId:m.projectId},k=d.unchangedNames;return k&&(A.bloomFilter={applied:_===0,hashCount:(v=k==null?void 0:k.hashCount)!==null&&v!==void 0?v:0,bitmapLength:(g=(p=(f=k==null?void 0:k.bits)===null||f===void 0?void 0:f.bitmap)===null||p===void 0?void 0:p.length)!==null&&g!==void 0?g:0,padding:(I=(E=k==null?void 0:k.bits)===null||E===void 0?void 0:E.padding)!==null&&I!==void 0?I:0,mightContain:x=>{var B;return(B=y==null?void 0:y.mightContain(x))!==null&&B!==void 0&&B}}),A}(a,e.ye,this.Qe.it(),l,u))}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=si(r).toUint8Array()}catch(l){if(l instanceof FE)return rs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Pm(o,i,s)}catch(l){return rs(l instanceof Gs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}ot(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&df(a.target)){const l=new F(a.target.path);this.$e.get(l)!==null||this._t(o,l)||this.je(o,l,et.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=Q();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Dc(e,n,this.We,this.$e,r);return this.$e=Nn(),this.Ue=bv(),this.We=new me(ee),i}ze(e,n){if(!this.Ye(e))return;const r=this._t(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ut(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this._t(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ut(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new xv,this.Ke.set(e,n)),n}ut(e){let n=this.Ue.get(e);return n||(n=new it(ee),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.ct(e)}Ze(e){this.Ke.set(e,new xv),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}_t(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function bv(){return new me(F.comparator)}function Nv(){return new me(F.comparator)}const fb=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pb=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),mb=(()=>({and:"AND",or:"OR"}))();class gb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gf(t,e){return t.useProto3Json||Rc(e)?e:{value:e}}function Vu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yb(t,e){return Vu(t,e.toTimestamp())}function un(t){return ce(!!t),j.fromTimestamp(function(n){const r=wr(n);return new be(r.seconds,r.nanos)}(t))}function xm(t,e){return function(r){return new ae(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function hI(t){const e=ae.fromString(t);return ce(mI(e)),e}function yf(t,e){return xm(t.databaseId,e.path)}function $h(t,e){const n=hI(e);if(n.get(1)!==t.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new F(dI(n))}function vf(t,e){return xm(t.databaseId,e)}function vb(t){const e=hI(t);return e.length===4?ae.emptyPath():dI(e)}function _f(t){return new ae(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dI(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Dv(t,e,n){return{name:yf(t,e),fields:n.value.mapValue.fields}}function _b(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ce(c===void 0||typeof c=="string"),at.fromBase64String(c||"")):(ce(c===void 0||c instanceof Uint8Array),at.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?S.UNKNOWN:aI(u.code);return new D(c,u.message||"")}(o);n=new uI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$h(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):j.min(),a=new mt({mapValue:{fields:r.document.fields}}),l=et.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new jl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$h(t,r.document),s=r.readTime?un(r.readTime):j.min(),o=et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new jl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$h(t,r.document),s=r.removedTargetIds||[];n=new jl([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new lb(i,s),a=r.targetId;n=new lI(a,o)}}return n}function wb(t,e){let n;if(e instanceof Pa)n={update:Dv(t,e.key,e.value)};else if(e instanceof km)n={delete:yf(t,e.key)};else if(e instanceof xr)n={update:Dv(t,e.key,e.data),updateMask:Pb(e.fieldMask)};else{if(!(e instanceof sb))return U();n={verify:yf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Mu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lu)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:yb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function Eb(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(j.min())&&(o=un(s)),new nb(o,i.transformResults||[])}(n,e))):[]}function Ib(t,e){return{documents:[vf(t,e.path)]}}function Tb(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=vf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return pI(Qt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:vi(h.field),direction:kb(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=gf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Sb(t){let e=vb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=fI(h);return d instanceof Qt&&jE(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new co(_i(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Rc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,m=h.values||[];return new Ou(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,m=h.values||[];return new Ou(m,d)}(n.endAt)),Bx(e,i,o,s,a,"F",l,u)}function Ab(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_i(n.unaryFilter.field);return Ae.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_i(n.unaryFilter.field);return Ae.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_i(n.unaryFilter.field);return Ae.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_i(n.unaryFilter.field);return Ae.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return Ae.create(_i(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qt.create(n.compositeFilter.filters.map(r=>fI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function kb(t){return fb[t]}function Cb(t){return pb[t]}function Rb(t){return mb[t]}function vi(t){return{fieldPath:t.canonicalString()}}function _i(t){return tt.fromServerFormat(t.fieldPath)}function pI(t){return t instanceof Ae?function(n){if(n.op==="=="){if(_v(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NAN"}};if(vv(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_v(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NAN"}};if(vv(n.value))return{unaryFilter:{field:vi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(n.field),op:Cb(n.op),value:n.value}}}(t):t instanceof Qt?function(n){const r=n.getFilters().map(i=>pI(i));return r.length===1?r[0]:{compositeFilter:{op:Rb(n.op),filters:r}}}(t):U()}function Pb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,i,s=j.min(),o=j.min(),a=at.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class xb{constructor(e){this.lt=e}}function bb(t){const e=Sb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pf(e,e.limit,"L"):e}/**
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
 */class Nb{constructor(){this.on=new Db}addToCollectionParentIndex(e,n){return this.on.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(_r.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(_r.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class Db{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new it(ae.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new it(ae.comparator)).toArray()}}/**
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
 */class as{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new as(0)}static Nn(){return new as(-1)}}/**
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
 */class Ob{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Mb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Lb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&po(r.mutation,i,It.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=Br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ks();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Nn();const o=fo(),a=function(){return fo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof xr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),po(c.mutation,u,c.mutation.getFieldMask(),be.now())):o.set(u.key,It.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new Mb(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fo();let i=new me((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||It.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=JE();c.forEach(d=>{if(!s.has(d)){const m=sI(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return F.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):KE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(Br());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Q())).next(c=>({batchId:a,changes:XE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new F(n)).next(r=>{let i=Ks();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ks();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(c,h){return new Ra(h,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,et.newInvalidDocument(u)))});let o=Ks();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&po(u.mutation,l,It.empty(),be.now()),xc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class Vb{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return R.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:bb(i.bundledQuery),readTime:un(i.readTime)}}(n)),R.resolve()}}/**
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
 */class Fb{constructor(){this.overlays=new me(F.comparator),this.lr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Pt(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=Br(),s=n.length+1,o=new F(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new me((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Br(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Br(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}Pt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ab(n,r));let s=this.lr.get(n);s===void 0&&(s=Q(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class bm{constructor(){this.hr=new it(Me.Pr),this.Ir=new it(Me.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Me(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new F(new ae([])),r=new Me(n,e),i=new Me(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new F(new ae([])),r=new Me(n,e),i=new Me(n,e+1);let s=Q();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Me(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return F.comparator(e.key,n.key)||ee(e.gr,n.gr)}static Tr(e,n){return ee(e.gr,n.gr)||F.comparator(e.key,n.key)}}/**
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
 */class $b{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new it(Me.Pr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ob(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Me(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),i=new Me(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(ee);return n.forEach(i=>{const s=new Me(i,0),o=new Me(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),R.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;F.isDocumentKey(s)||(s=s.child(""));const o=new Me(new F(s),0);let a=new it(ee);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),R.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return R.forEach(n.mutations,i=>{const s=new Me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Me(n,0),i=this.yr.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Ub{constructor(e){this.vr=e,this.docs=function(){return new me(F.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():et.newInvalidDocument(n))}getEntries(e,n){let r=Nn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Nn();const o=n.path,a=new F(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||kx(Ax(c),r)<=0||(i.has(c.key)||xc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}Cr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zb(this)}getSize(e){return R.resolve(this.size)}}class zb extends Ob{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class jb{constructor(e){this.persistence=e,this.Fr=new _s(n=>Im(n),Tm),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Mr=0,this.Or=new bm,this.targetCount=0,this.Nr=as.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),R.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.kn(n),R.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Or.containsKey(n))}}/**
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
 */class Bb{constructor(e,n){this.Br={},this.overlays={},this.Lr=new vm(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new jb(this),this.indexManager=new Nb,this.remoteDocumentCache=function(i){return new Ub(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new xb(n),this.Kr=new Vb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Fb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new $b(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new Hb(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Hb extends Rx{constructor(e){super(),this.currentSequenceNumber=e}}class Nm{constructor(e){this.persistence=e,this.Gr=new bm,this.zr=null}static jr(e){return new Nm(e)}get Hr(){if(this.zr)return this.zr;throw U()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),R.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Hr,r=>{const i=F.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return R.or([()=>R.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class Dm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Dm(e,n.fromCache,r,i)}}/**
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
 */class Wb{constructor(){this.Ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ui(e,n).next(s=>s||this.Wi(e,n,i,r)).next(s=>s||this.Gi(e,n))}Ui(e,n){if(Tv(n))return R.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=pf(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.zi(n,a);return this.ji(n,u,o,l.readTime)?this.Ui(e,pf(n,null,"F")):this.Hi(e,u,n,l)}))})))}Wi(e,n,r,i){return Tv(n)||i.isEqual(j.min())?this.Gi(e,n):this.$i.getDocuments(e,r).next(s=>{const o=this.zi(n,s);return this.ji(n,o,r,i)?this.Gi(e,n):(fv()<=Z.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mf(n)),this.Hi(e,o,n,Sx(i,-1)))})}zi(e,n){let r=new it(QE(e));return n.forEach((i,s)=>{xc(e,s)&&(r=r.add(s))}),r}ji(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(e,n){return fv()<=Z.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",mf(n)),this.$i.getDocumentsMatchingQuery(e,n,_r.min())}Hi(e,n,r,i){return this.$i.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class qb{constructor(e,n,r,i){this.persistence=e,this.Ji=n,this.serializer=i,this.Yi=new me(ee),this.Zi=new _s(s=>Im(s),Tm),this.Xi=new Map,this.es=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.ts(r)}ts(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lb(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Yi))}}function Kb(t,e,n,r){return new qb(t,e,n,r)}async function gI(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ts(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ns:u,removedBatchIds:o,addedBatchIds:a}))})})}function Gb(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.es.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let m=R.resolve();return d.forEach(y=>{m=m.next(()=>c.getEntry(l,y)).next(_=>{const v=u.docVersions.get(y);ce(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function yI(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function Qb(t,e){const n=W(t),r=e.snapshotVersion;let i=n.Yi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.es.newChangeBuffer({trackRemovals:!0});i=n.Yi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(at.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(_,v,f){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0}(d,m,c)&&a.push(n.qr.updateTargetData(s,m))});let l=Nn(),u=Q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(Yb(s,o,e.documentUpdates).next(c=>{l=c.rs,u=c.ss})),!r.isEqual(j.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(h=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Yi=i,s))}function Yb(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Nn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{rs:o,ss:i}})}function Xb(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Jb(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Yi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Yi=n.Yi.insert(r.targetId,r),n.Zi.set(e,r.targetId)),r})}async function wf(t,e,n){const r=W(t),i=r.Yi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ca(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Yi=r.Yi.remove(e),r.Zi.delete(i.target)}function Ov(t,e,n){const r=W(t);let i=j.min(),s=Q();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const h=W(l),d=h.Zi.get(c);return d!==void 0?R.resolve(h.Yi.get(d)):h.qr.getTargetData(u,c)}(r,o,bn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ji.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:Q())).next(a=>(Zb(r,Wx(e),a),{documents:a,os:s})))}function Zb(t,e,n){let r=t.Xi.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class Mv{constructor(){this.activeTargetIds=Xx()}Ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}Is(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eN{constructor(){this.Js=new Mv,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Js.Ps(e),this.Ys[e]||"not-current"}updateQueryState(e,n,r){this.Ys[e]=n}removeLocalQueryTarget(e){this.Js.Is(e)}isLocalQueryTarget(e){return this.Js.activeTargetIds.has(e)}clearQueryState(e){delete this.Ys[e]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(e){return this.Js.activeTargetIds.has(e)}start(){return this.Js=new Mv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tN{Zs(e){}shutdown(){}}/**
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
 */class Lv{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(e){this.io.push(e)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.io)e(0)}ro(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.io)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dl=null;function Uh(){return dl===null?dl=function(){return 268435456+Math.round(2147483648*Math.random())}():dl++,"0x"+dl.toString(16)}/**
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
 */const nN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rN{constructor(e){this.oo=e.oo,this._o=e._o}ao(e){this.uo=e}co(e){this.lo=e}onMessage(e){this.ho=e}close(){this._o()}send(e){this.oo(e)}Po(){this.uo()}Io(e){this.lo(e)}To(e){this.ho(e)}}/**
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
 */const Xe="WebChannelConnection";class iN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+n.host,this.Ao=`projects/${i}/databases/${s}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Vo(){return!1}mo(n,r,i,s,o){const a=Uh(),l=this.fo(n,r);V("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(u,s,o),this.yo(n,l,u,i).then(c=>(V("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw rs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}wo(n,r,i,s,o,a){return this.mo(n,r,i,s,o)}po(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}fo(n,r){const i=nN[n];return`${this.Eo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}yo(e,n,r,i){const s=Uh();return new Promise((o,a)=>{const l=new fx;l.setWithCredentials(!0),l.listenOnce(cx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Fh.NO_ERROR:const c=l.getResponseJson();V(Xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Fh.TIMEOUT:V(Xe,`RPC '${e}' ${s} timed out`),a(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case Fh.HTTP_ERROR:const h=l.getStatus();if(V(Xe,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(v){const f=v.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(f)>=0?f:S.UNKNOWN}(m.status);a(new D(y,m.message))}else a(new D(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(S.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{V(Xe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);V(Xe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}So(e,n,r){const i=Uh(),s=[this.Eo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lx(),a=ux(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new dx({})),this.po(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");V(Xe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,m=!1;const y=new rN({oo:v=>{m?V(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(V(Xe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),V(Xe,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},_o:()=>h.close()}),_=(v,f,p)=>{v.listen(f,g=>{try{p(g)}catch(E){setTimeout(()=>{throw E},0)}})};return _(h,ll.EventType.OPEN,()=>{m||V(Xe,`RPC '${e}' stream ${i} transport opened.`)}),_(h,ll.EventType.CLOSE,()=>{m||(m=!0,V(Xe,`RPC '${e}' stream ${i} transport closed`),y.Io())}),_(h,ll.EventType.ERROR,v=>{m||(m=!0,rs(Xe,`RPC '${e}' stream ${i} transport errored:`,v),y.Io(new D(S.UNAVAILABLE,"The operation could not be completed")))}),_(h,ll.EventType.MESSAGE,v=>{var f;if(!m){const p=v.data[0];ce(!!p);const g=p,E=g.error||((f=g[0])===null||f===void 0?void 0:f.error);if(E){V(Xe,`RPC '${e}' stream ${i} received error:`,E);const I=E.status;let A=function(B){const H=Ie[B];if(H!==void 0)return aI(H)}(I),k=E.message;A===void 0&&(A=S.INTERNAL,k="Unknown error status: "+I+" with message "+E.message),m=!0,y.Io(new D(A,k)),h.close()}else V(Xe,`RPC '${e}' stream ${i} received:`,p),y.To(p)}}),_(a,hx.STAT_EVENT,v=>{v.stat===hv.PROXY?V(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===hv.NOPROXY&&V(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Po()},0),y}}function zh(){return typeof document<"u"?document:null}/**
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
 */function Oc(t){return new gb(t,!0)}/**
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
 */class vI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.bo=r,this.Do=i,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(e){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Mo=Date.now(),e())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
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
 */class _I{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Lo=r,this.ko=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new vI(e,n)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(e){this.Yo(),this.stream.send(e)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(e,n){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,e!==4?this.$o.reset():n&&n.code===S.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):n&&n.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Xo(){}auth(){this.state=1;const e=this.e_(this.qo),n=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.qo===n&&this.t_(r,i)},r=>{e(()=>{const i=new D(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(i)})})}t_(e,n){const r=this.e_(this.qo);this.stream=this.r_(e,n),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(i=>{r(()=>this.n_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}e_(e){return n=>{this.si.enqueueAndForget(()=>this.qo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sN extends _I{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}r_(e,n){return this.connection.So("Listen",e,n)}onMessage(e){this.$o.reset();const n=_b(this.serializer,e),r=function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?un(o.readTime):j.min()}(e);return this.listener.i_(n,r)}s_(e){const n={};n.database=_f(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=df(l)?{documents:Ib(s,l)}:{query:Tb(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=cI(s,o.resumeToken);const u=gf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=Vu(s,o.snapshotVersion.toTimestamp());const u=gf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Ab(this.serializer,e);r&&(n.labels=r),this.Jo(n)}o_(e){const n={};n.database=_f(this.serializer),n.removeTarget=e,this.Jo(n)}}class oN extends _I{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(e,n){return this.connection.So("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.__){this.$o.reset();const n=Eb(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.c_(r,n)}return ce(!e.writeResults||e.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const e={};e.database=_f(this.serializer),this.Jo(e)}u_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wb(this.serializer,r))};this.Jo(n)}}/**
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
 */class aN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.P_=!1}I_(){if(this.P_)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}mo(e,n,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.mo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(S.UNKNOWN,i.toString())})}wo(e,n,r,i){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.wo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(S.UNKNOWN,s.toString())})}terminate(){this.P_=!0}}class lN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(e){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.V_("Offline")))}set(e){this.g_(),this.E_=0,e==="Online"&&(this.A_=!1),this.V_(e)}V_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}m_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(xn(n),this.A_=!1):V("OnlineStateTracker",n)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
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
 */class uN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=s,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{mi(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=W(l);u.w_.add(4),await ba(u),u.D_.set("Unknown"),u.w_.delete(4),await Mc(u)}(this))})}),this.D_=new lN(r,i)}}async function Mc(t){if(mi(t))for(const e of t.S_)await e(!0)}async function ba(t){for(const e of t.S_)await e(!1)}function wI(t,e){const n=W(t);n.y_.has(e.targetId)||(n.y_.set(e.targetId,e),Lm(n)?Mm(n):ws(n).Wo()&&Om(n,e))}function EI(t,e){const n=W(t),r=ws(n);n.y_.delete(e),r.Wo()&&II(n,e),n.y_.size===0&&(r.Wo()?r.jo():mi(n)&&n.D_.set("Unknown"))}function Om(t,e){if(t.v_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).s_(e)}function II(t,e){t.v_.Le(e),ws(t).o_(e)}function Mm(t){t.v_=new db({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ct:e=>t.y_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.D_.R_()}function Lm(t){return mi(t)&&!ws(t).Uo()&&t.y_.size>0}function mi(t){return W(t).w_.size===0}function TI(t){t.v_=void 0}async function cN(t){t.y_.forEach((e,n)=>{Om(t,e)})}async function hN(t,e){TI(t),Lm(t)?(t.D_.f_(e),Mm(t)):t.D_.set("Unknown")}async function dN(t,e,n){if(t.D_.set("Online"),e instanceof uI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.y_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.y_.delete(a),i.v_.removeTarget(a))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fu(t,r)}else if(e instanceof jl?t.v_.Ge(e):e instanceof lI?t.v_.Xe(e):t.v_.He(e),!n.isEqual(j.min()))try{const r=await yI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.v_.ot(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.y_.get(u);c&&s.y_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.y_.get(l);if(!c)return;s.y_.set(l,c.withResumeToken(at.EMPTY_BYTE_STRING,c.snapshotVersion)),II(s,l);const h=new er(c.target,l,u,c.sequenceNumber);Om(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Fu(t,r)}}async function Fu(t,e,n){if(!Ca(e))throw e;t.w_.add(1),await ba(t),t.D_.set("Offline"),n||(n=()=>yI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.w_.delete(1),await Mc(t)})}function SI(t,e){return e().catch(n=>Fu(t,n,e))}async function Lc(t){const e=W(t),n=Er(e);let r=e.p_.length>0?e.p_[e.p_.length-1].batchId:-1;for(;fN(e);)try{const i=await Xb(e.localStore,r);if(i===null){e.p_.length===0&&n.jo();break}r=i.batchId,pN(e,i)}catch(i){await Fu(e,i)}AI(e)&&kI(e)}function fN(t){return mi(t)&&t.p_.length<10}function pN(t,e){t.p_.push(e);const n=Er(t);n.Wo()&&n.a_&&n.u_(e.mutations)}function AI(t){return mi(t)&&!Er(t).Uo()&&t.p_.length>0}function kI(t){Er(t).start()}async function mN(t){Er(t).h_()}async function gN(t){const e=Er(t);for(const n of t.p_)e.u_(n.mutations)}async function yN(t,e,n){const r=t.p_.shift(),i=Cm.from(r,e,n);await SI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Lc(t)}async function vN(t,e){e&&Er(t).a_&&await async function(r,i){if(function(o){return ub(o)&&o!==S.ABORTED}(i.code)){const s=r.p_.shift();Er(r).zo(),await SI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Lc(r)}}(t,e),AI(t)&&kI(t)}async function Vv(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=mi(n);n.w_.add(3),await ba(n),r&&n.D_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.w_.delete(3),await Mc(n)}async function _N(t,e){const n=W(t);e?(n.w_.delete(2),await Mc(n)):e||(n.w_.add(2),await ba(n),n.D_.set("Unknown"))}function ws(t){return t.C_||(t.C_=function(n,r,i){const s=W(n);return s.I_(),new sN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ao:cN.bind(null,t),co:hN.bind(null,t),i_:dN.bind(null,t)}),t.S_.push(async e=>{e?(t.C_.zo(),Lm(t)?Mm(t):t.D_.set("Unknown")):(await t.C_.stop(),TI(t))})),t.C_}function Er(t){return t.F_||(t.F_=function(n,r,i){const s=W(n);return s.I_(),new oN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ao:mN.bind(null,t),co:vN.bind(null,t),l_:gN.bind(null,t),c_:yN.bind(null,t)}),t.S_.push(async e=>{e?(t.F_.zo(),await Lc(t)):(await t.F_.stop(),t.p_.length>0&&(V("RemoteStore",`Stopping write stream with ${t.p_.length} pending writes`),t.p_=[]))})),t.F_}/**
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
 */class Vm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Vm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fm(t,e){if(xn("AsyncQueue",`${e}: ${t}`),Ca(t))return new D(S.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class qi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||F.comparator(n.key,r.key):(n,r)=>F.comparator(n.key,r.key),this.keyedMap=Ks(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new qi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fv{constructor(){this.M_=new me(F.comparator)}track(e){const n=e.doc.key,r=this.M_.get(n);r?e.type!==0&&r.type===3?this.M_=this.M_.insert(n,e):e.type===3&&r.type!==1?this.M_=this.M_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.M_=this.M_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.M_=this.M_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.M_=this.M_.remove(n):e.type===1&&r.type===2?this.M_=this.M_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.M_=this.M_.insert(n,{type:2,doc:e.doc}):U():this.M_=this.M_.insert(n,e)}x_(){const e=[];return this.M_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ls{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ls(e,n,qi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class wN{constructor(){this.O_=void 0,this.listeners=[]}}class EN{constructor(){this.queries=new _s(e=>GE(e),Pc),this.onlineState="Unknown",this.N_=new Set}}async function CI(t,e){const n=W(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new wN),i)try{s.O_=await n.onListen(r)}catch(o){const a=Fm(o,`Initialization of query '${mf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.B_(n.onlineState),s.O_&&e.L_(s.O_)&&$m(n)}async function RI(t,e){const n=W(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function IN(t,e){const n=W(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.L_(i)&&(r=!0);o.O_=i}}r&&$m(n)}function TN(t,e,n){const r=W(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function $m(t){t.N_.forEach(e=>{e.next()})}class PI{constructor(e,n,r){this.query=e,this.k_=n,this.q_=!1,this.Q_=null,this.onlineState="Unknown",this.options=r||{}}L_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.q_?this.K_(e)&&(this.k_.next(e),n=!0):this.U_(e,this.onlineState)&&(this.W_(e),n=!0),this.Q_=e,n}onError(e){this.k_.error(e)}B_(e){this.onlineState=e;let n=!1;return this.Q_&&!this.q_&&this.U_(this.Q_,e)&&(this.W_(this.Q_),n=!0),n}U_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.G_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}K_(e){if(e.docChanges.length>0)return!0;const n=this.Q_&&this.Q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}W_(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.q_=!0,this.k_.next(e)}}/**
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
 */class xI{constructor(e){this.key=e}}class bI{constructor(e){this.key=e}}class SN{constructor(e,n){this.query=e,this.ea=n,this.ta=null,this.hasCachedResults=!1,this.current=!1,this.na=Q(),this.mutatedKeys=Q(),this.ra=QE(e),this.ia=new qi(this.ra)}get sa(){return this.ea}oa(e,n){const r=n?n._a:new Fv,i=n?n.ia:this.ia;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=xc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;d&&m?d.data.isEqual(m.data)?y!==_&&(r.track({type:3,doc:m}),v=!0):this.aa(d,m)||(r.track({type:2,doc:m}),v=!0,(l&&this.ra(m,l)>0||u&&this.ra(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),v=!0):d&&!m&&(r.track({type:1,doc:d}),v=!0,(l||u)&&(a=!0)),v&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ia:o,_a:r,ji:a,mutatedKeys:s}}aa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ia;this.ia=e.ia,this.mutatedKeys=e.mutatedKeys;const s=e._a.x_();s.sort((u,c)=>function(d,m){const y=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return y(d)-y(m)}(u.type,c.type)||this.ra(u.doc,c.doc)),this.ua(r);const o=n?this.ca():[],a=this.na.size===0&&this.current?1:0,l=a!==this.ta;return this.ta=a,s.length!==0||l?{snapshot:new ls(this.query,e.ia,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),la:o}:{la:o}}B_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ia:this.ia,_a:new Fv,mutatedKeys:this.mutatedKeys,ji:!1},!1)):{la:[]}}ha(e){return!this.ea.has(e)&&!!this.ia.has(e)&&!this.ia.get(e).hasLocalMutations}ua(e){e&&(e.addedDocuments.forEach(n=>this.ea=this.ea.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ea=this.ea.delete(n)),this.current=e.current)}ca(){if(!this.current)return[];const e=this.na;this.na=Q(),this.ia.forEach(r=>{this.ha(r.key)&&(this.na=this.na.add(r.key))});const n=[];return e.forEach(r=>{this.na.has(r)||n.push(new bI(r))}),this.na.forEach(r=>{e.has(r)||n.push(new xI(r))}),n}Pa(e){this.ea=e.os,this.na=Q();const n=this.oa(e.documents);return this.applyChanges(n,!0)}Ia(){return ls.fromInitialDocuments(this.query,this.ia,this.mutatedKeys,this.ta===0,this.hasCachedResults)}}class AN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kN{constructor(e){this.key=e,this.Ta=!1}}class CN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new _s(a=>GE(a),Pc),this.Aa=new Map,this.Ra=new Set,this.Va=new me(F.comparator),this.ma=new Map,this.fa=new bm,this.ga={},this.pa=new Map,this.ya=as.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function RN(t,e){const n=FN(t);let r,i;const s=n.da.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ia();else{const o=await Jb(n.localStore,bn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await PN(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&wI(n.remoteStore,o)}return i}async function PN(t,e,n,r,i){t.Sa=(h,d,m)=>async function(_,v,f,p){let g=v.view.oa(f);g.ji&&(g=await Ov(_.localStore,v.query,!1).then(({documents:A})=>v.view.oa(A,g)));const E=p&&p.targetChanges.get(v.targetId),I=v.view.applyChanges(g,_.isPrimaryClient,E);return Uv(_,v.targetId,I.la),I.snapshot}(t,h,d,m);const s=await Ov(t.localStore,e,!0),o=new SN(e,s.os),a=o.oa(s.documents),l=xa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Uv(t,n,u.la);const c=new AN(e,n,o);return t.da.set(e,c),t.Aa.has(n)?t.Aa.get(n).push(e):t.Aa.set(n,[e]),u.snapshot}async function xN(t,e){const n=W(t),r=n.da.get(e),i=n.Aa.get(r.targetId);if(i.length>1)return n.Aa.set(r.targetId,i.filter(s=>!Pc(s,e))),void n.da.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),EI(n.remoteStore,r.targetId),Ef(n,r.targetId)}).catch(ka)):(Ef(n,r.targetId),await wf(n.localStore,r.targetId,!0))}async function bN(t,e,n){const r=$N(t);try{const i=await function(o,a){const l=W(o),u=be.now(),c=a.reduce((m,y)=>m.add(y.key),Q());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=Nn(),_=Q();return l.es.getEntries(m,c).next(v=>{y=v,y.forEach((f,p)=>{p.isValidDocument()||(_=_.add(f))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,y)).next(v=>{h=v;const f=[];for(const p of a){const g=ib(p,h.get(p.key).overlayedDocument);g!=null&&f.push(new xr(p.key,g,$E(g.value.mapValue),qt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,f,a)}).next(v=>{d=v;const f=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(m,v.batchId,f)})}).then(()=>({batchId:d.batchId,changes:XE(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.ga[o.currentUser.toKey()];u||(u=new me(ee)),u=u.insert(a,l),o.ga[o.currentUser.toKey()]=u}(r,i.batchId,n),await Na(r,i.changes),await Lc(r.remoteStore)}catch(i){const s=Fm(i,"Failed to persist write");n.reject(s)}}async function NI(t,e){const n=W(t);try{const r=await Qb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ma.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ta=!0:i.modifiedDocuments.size>0?ce(o.Ta):i.removedDocuments.size>0&&(ce(o.Ta),o.Ta=!1))}),await Na(n,r,e)}catch(r){await ka(r)}}function $v(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.da.forEach((s,o)=>{const a=o.view.B_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=W(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.listeners)d.B_(a)&&(u=!0)}),u&&$m(l)}(r.eventManager,e),i.length&&r.Ea.i_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function NN(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ma.get(e),s=i&&i.key;if(s){let o=new me(F.comparator);o=o.insert(s,et.newNoDocument(s,j.min()));const a=Q().add(s),l=new Dc(j.min(),new Map,new me(ee),o,a);await NI(r,l),r.Va=r.Va.remove(s),r.ma.delete(e),Um(r)}else await wf(r.localStore,e,!1).then(()=>Ef(r,e,n)).catch(ka)}async function DN(t,e){const n=W(t),r=e.batch.batchId;try{const i=await Gb(n.localStore,e);OI(n,r,null),DI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Na(n,i)}catch(i){await ka(i)}}async function ON(t,e,n){const r=W(t);try{const i=await function(o,a){const l=W(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ce(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);OI(r,e,n),DI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Na(r,i)}catch(i){await ka(i)}}function DI(t,e){(t.pa.get(e)||[]).forEach(n=>{n.resolve()}),t.pa.delete(e)}function OI(t,e,n){const r=W(t);let i=r.ga[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ga[r.currentUser.toKey()]=i}}function Ef(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Aa.get(e))t.da.delete(r),n&&t.Ea.ba(r,n);t.Aa.delete(e),t.isPrimaryClient&&t.fa.Rr(e).forEach(r=>{t.fa.containsKey(r)||MI(t,r)})}function MI(t,e){t.Ra.delete(e.path.canonicalString());const n=t.Va.get(e);n!==null&&(EI(t.remoteStore,n),t.Va=t.Va.remove(e),t.ma.delete(n),Um(t))}function Uv(t,e,n){for(const r of n)r instanceof xI?(t.fa.addReference(r.key,e),MN(t,r)):r instanceof bI?(V("SyncEngine","Document no longer in limbo: "+r.key),t.fa.removeReference(r.key,e),t.fa.containsKey(r.key)||MI(t,r.key)):U()}function MN(t,e){const n=e.key,r=n.path.canonicalString();t.Va.get(n)||t.Ra.has(r)||(V("SyncEngine","New document in limbo: "+n),t.Ra.add(r),Um(t))}function Um(t){for(;t.Ra.size>0&&t.Va.size<t.maxConcurrentLimboResolutions;){const e=t.Ra.values().next().value;t.Ra.delete(e);const n=new F(ae.fromString(e)),r=t.ya.next();t.ma.set(r,new kN(n)),t.Va=t.Va.insert(n,r),wI(t.remoteStore,new er(bn(Sm(n.path)),r,"TargetPurposeLimboResolution",vm.ae))}}async function Na(t,e,n){const r=W(t),i=[],s=[],o=[];r.da.isEmpty()||(r.da.forEach((a,l)=>{o.push(r.Sa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Dm.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ea.i_(i),await async function(l,u){const c=W(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(u,d=>R.forEach(d.ki,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>R.forEach(d.qi,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!Ca(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const m=c.Yi.get(d),y=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(y);c.Yi=c.Yi.insert(d,_)}}}(r.localStore,s))}async function LN(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await gI(n.localStore,e);n.currentUser=e,function(s,o){s.pa.forEach(a=>{a.forEach(l=>{l.reject(new D(S.CANCELLED,o))})}),s.pa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Na(n,r.ns)}}function VN(t,e){const n=W(t),r=n.ma.get(e);if(r&&r.Ta)return Q().add(r.key);{let i=Q();const s=n.Aa.get(e);if(!s)return i;for(const o of s){const a=n.da.get(o);i=i.unionWith(a.view.sa)}return i}}function FN(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=NI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=NN.bind(null,e),e.Ea.i_=IN.bind(null,e.eventManager),e.Ea.ba=TN.bind(null,e.eventManager),e}function $N(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ON.bind(null,e),e}class zv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Kb(this.persistence,new Wb,e.initialUser,this.serializer)}createPersistence(e){return new Bb(Nm.jr,this.serializer)}createSharedClientState(e){return new eN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$v(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=LN.bind(null,this.syncEngine),await _N(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new EN}()}createDatastore(e){const n=Oc(e.databaseInfo.databaseId),r=function(s){return new iN(s)}(e.databaseInfo);return function(s,o,a,l){return new aN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new uN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>$v(this.syncEngine,n,0),function(){return Lv.v()?new Lv:new tN}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new CN(i,s,o,a,l,u);return c&&(h.wa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=W(n);V("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await ba(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
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
 */class LI{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ca(this.observer.next,e)}error(e){this.observer.error?this.Ca(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e.toString())}Fa(){this.muted=!0}Ca(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class zN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Je.UNAUTHENTICATED,this.clientId=LE.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Fm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jh(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await BN(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Vv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Vv(e.remoteStore,s)),t._onlineComponents=e}function jN(t){return t.name==="FirebaseError"?t.code===S.FAILED_PRECONDITION||t.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function BN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await jh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!jN(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await jh(t,new zv)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await jh(t,new zv);return t._offlineComponents}async function VI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await jv(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await jv(t,new UN))),t._onlineComponents}function HN(t){return VI(t).then(e=>e.syncEngine)}async function FI(t){const e=await VI(t),n=e.eventManager;return n.onListen=RN.bind(null,e.syncEngine),n.onUnlisten=xN.bind(null,e.syncEngine),n}function WN(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new LI({next:d=>{o.enqueueAndForget(()=>RI(s,h));const m=d.docs.has(a);!m&&d.fromCache?u.reject(new D(S.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&d.fromCache&&l&&l.source==="server"?u.reject(new D(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new PI(Sm(a.path),c,{includeMetadataChanges:!0,G_:!0});return CI(s,h)}(await FI(t),t.asyncQueue,e,n,r)),r.promise}function qN(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new LI({next:d=>{o.enqueueAndForget(()=>RI(s,h)),d.fromCache&&l.source==="server"?u.reject(new D(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new PI(a,c,{includeMetadataChanges:!0,G_:!0});return CI(s,h)}(await FI(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function $I(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Bv=new Map;/**
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
 */function UI(t,e,n){if(!n)throw new D(S.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KN(t,e,n,r){if(e===!0&&r===!0)throw new D(S.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hv(t){if(!F.isDocumentKey(t))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wv(t){if(F.isDocumentKey(t))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Vc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function hn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Vc(t);throw new D(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class qv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}KN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$I((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mx;switch(r.type){case"firstParty":return new _x(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bv.get(n);r&&(V("ComponentProvider","Removing Datastore"),Bv.delete(n),r.terminate())}(this),Promise.resolve()}}function GN(t,e,n,r={}){var i;const s=(t=hn(t,Fc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Je.MOCK_USER;else{a=CA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Je(u)}t._authCredentials=new gx(new ME(a,l))}}/**
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
 */class Es{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Es(this.firestore,e,this._query)}}class ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class pr extends Es{constructor(e,n,r){super(e,n,Sm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new F(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function mr(t,e,...n){if(t=$e(t),UI("collection","path",e),t instanceof Fc){const r=ae.fromString(e,...n);return Wv(r),new pr(t,null,r)}{if(!(t instanceof ht||t instanceof pr))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return Wv(r),new pr(t.firestore,null,r)}}function kt(t,e,...n){if(t=$e(t),arguments.length===1&&(e=LE.V()),UI("doc","path",e),t instanceof Fc){const r=ae.fromString(e,...n);return Hv(r),new ht(t,null,new F(r))}{if(!(t instanceof ht||t instanceof pr))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ae.fromString(e,...n));return Hv(r),new ht(t.firestore,t instanceof pr?t.converter:null,new F(r))}}/**
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
 */class QN{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new vI(this,"async_queue_retry"),this.eu=()=>{const n=zh();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const e=zh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.tu(),this.nu(e)}enterRestrictedMode(e){if(!this.ja){this.ja=!0,this.Za=e||!1;const n=zh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(e){if(this.tu(),this.ja)return new Promise(()=>{});const n=new In;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.za.push(e),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(e){if(!Ca(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(e){const n=this.Ga.then(()=>(this.Ya=!0,e().catch(r=>{this.Ja=r,this.Ya=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(e,n,r){this.tu(),this.Xa.indexOf(e)>-1&&(n=0);const i=Vm.createAndSchedule(this,e,n,r,s=>this.iu(s));return this.Ha.push(i),i}tu(){this.Ja&&U()}verifyOperationInProgress(){}async su(){let e;do e=this.Ga,await e;while(e!==this.Ga)}ou(e){for(const n of this.Ha)if(n.timerId===e)return!0;return!1}_u(e){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.su()})}au(e){this.Xa.push(e)}iu(e){const n=this.Ha.indexOf(e);this.Ha.splice(n,1)}}class Is extends Fc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new QN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||zI(this),this._firestoreClient.terminate()}}function YN(t,e){const n=typeof t=="object"?t:J1(),r=typeof t=="string"?t:e||"(default)",i=Fp(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=AA("firestore");s&&GN(i,...s)}return i}function zm(t){return t._firestoreClient||zI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function zI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new bx(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,$I(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new zN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class us{constructor(e){this._byteString=e}static fromBase64String(e){try{return new us(at.fromBase64String(e))}catch(n){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new us(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $c{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jm{constructor(e){this._methodName=e}}/**
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
 */class Bm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */const XN=/^__.*__$/;class JN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pa(e,this.data,n,this.fieldTransforms)}}class jI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function BI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Hm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.uu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(e){return new Hm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.lu({path:r,Pu:!1});return i.Iu(e),i}Tu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.lu({path:r,Pu:!1});return i.uu(),i}Eu(e){return this.lu({path:void 0,Pu:!0})}du(e){return $u(e,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}uu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Iu(this.path.get(e))}Iu(e){if(e.length===0)throw this.du("Document fields must not be empty");if(BI(this.cu)&&XN.test(e))throw this.du('Document fields cannot begin and end with "__"')}}class ZN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Oc(e)}Vu(e,n,r,i=!1){return new Hm({cu:e,methodName:n,Ru:r,path:tt.emptyPath(),Pu:!1,Au:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wm(t){const e=t._freezeSettings(),n=Oc(t._databaseId);return new ZN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function eD(t,e,n,r,i,s={}){const o=t.Vu(s.merge||s.mergeFields?2:0,e,n,i);qm("Data must be an object, but it was:",o,r);const a=HI(r,o);let l,u;if(s.merge)l=new It(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=If(e,h,n);if(!o.contains(d))throw new D(S.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);qI(c,d)||c.push(d)}l=new It(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new JN(new mt(a),l,u)}class Uc extends jm{_toFieldTransform(e){if(e.cu!==2)throw e.cu===1?e.du(`${this._methodName}() can only appear at the top level of your update data`):e.du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Uc}}function tD(t,e,n,r){const i=t.Vu(1,e,n);qm("Data must be an object, but it was:",i,r);const s=[],o=mt.empty();pi(r,(l,u)=>{const c=Km(e,l,n);u=$e(u);const h=i.Tu(c);if(u instanceof Uc)s.push(c);else{const d=Da(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new It(s);return new jI(o,a,i.fieldTransforms)}function nD(t,e,n,r,i,s){const o=t.Vu(1,e,n),a=[If(e,r,n)],l=[i];if(s.length%2!=0)throw new D(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(If(e,s[d])),l.push(s[d+1]);const u=[],c=mt.empty();for(let d=a.length-1;d>=0;--d)if(!qI(u,a[d])){const m=a[d];let y=l[d];y=$e(y);const _=o.Tu(m);if(y instanceof Uc)u.push(m);else{const v=Da(y,_);v!=null&&(u.push(m),c.set(m,v))}}const h=new It(u);return new jI(c,h,o.fieldTransforms)}function rD(t,e,n,r=!1){return Da(n,t.Vu(r?4:3,e))}function Da(t,e){if(WI(t=$e(t)))return qm("Unsupported field value:",e,t),HI(t,e);if(t instanceof jm)return function(r,i){if(!BI(i.cu))throw i.du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Pu&&e.cu!==4)throw e.du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Da(a,i.Eu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:Vu(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vu(i.serializer,s)}}if(r instanceof Bm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof us)return{bytesValue:cI(i.serializer,r._byteString)};if(r instanceof ht){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.du(`Unsupported field value: ${Vc(r)}`)}(t,e)}function HI(t,e){const n={};return VE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pi(t,(r,i)=>{const s=Da(i,e.hu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function WI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Bm||t instanceof us||t instanceof ht||t instanceof jm)}function qm(t,e,n){if(!WI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Vc(n);throw r==="an object"?e.du(t+" a custom object"):e.du(t+" "+r)}}function If(t,e,n){if((e=$e(e))instanceof $c)return e._internalPath;if(typeof e=="string")return Km(t,e);throw $u("Field path arguments must be of type string or ",t,!1,void 0,n)}const iD=new RegExp("[~\\*/\\[\\]]");function Km(t,e,n){if(e.search(iD)>=0)throw $u(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new $c(...e.split("."))._internalPath}catch{throw $u(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $u(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(S.INVALID_ARGUMENT,a+t+l)}function qI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class KI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new sD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Gm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class sD extends KI{data(){return super.data()}}function Gm(t,e){return typeof e=="string"?Km(t,e):e instanceof $c?e._internalPath:e._delegate._internalPath}/**
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
 */function oD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qm{}class aD extends Qm{}function mo(t,e,...n){let r=[];e instanceof Qm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Ym).length,a=s.filter(l=>l instanceof zc).length;if(o>1||o>0&&a>0)throw new D(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class zc extends aD{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new zc(e,n,r)}_apply(e){const n=this._parse(e);return GI(e._query,n),new Es(e.firestore,e.converter,ff(e._query,n))}_parse(e){const n=Wm(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new D(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Gv(h,c);const m=[];for(const y of h)m.push(Kv(l,s,y));d={arrayValue:{values:m}}}else d=Kv(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Gv(h,c),d=rD(a,o,h,c==="in"||c==="not-in");return Ae.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Jt(t,e,n){const r=e,i=Gm("where",t);return zc._create(i,r,n)}class Ym extends Qm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ym(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)GI(o,l),o=ff(o,l)}(e._query,n),new Es(e.firestore,e.converter,ff(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Kv(t,e,n){if(typeof(n=$e(n))=="string"){if(n==="")throw new D(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!KE(e)&&n.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ae.fromString(n));if(!F.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yv(t,new F(r))}if(n instanceof ht)return yv(t,n._key);throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vc(n)}.`)}function Gv(t,e){if(!Array.isArray(t)||t.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function GI(t,e){if(e.isInequality()){const r=Am(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new D(S.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=qE(t);s!==null&&lD(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function lD(t,e,n){if(!n.isEqual(e))throw new D(S.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class uD{convertValue(e,n="none"){switch(oi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return pi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Bm(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=wm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qo(e));default:return null}}convertTimestamp(e){const n=wr(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ae.fromString(e);ce(mI(r));const i=new Yo(r.get(1),r.get(3)),s=new F(r.popFirst(5));return i.isEqual(n)||xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function cD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class QI extends KI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Gm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bl extends QI{data(e={}){return super.data(e)}}class hD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Qs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bl(this._firestore,this._userDataWriter,r.key,r,new Qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Bl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Bl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Qs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:dD(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function dD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}/**
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
 */function Dn(t){t=hn(t,ht);const e=hn(t.firestore,Is);return WN(zm(e),t._key).then(n=>fD(e,t,n))}class YI extends uD{constructor(e){super(),this.firestore=e}convertBytes(e){return new us(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function go(t){t=hn(t,Es);const e=hn(t.firestore,Is),n=zm(e),r=new YI(e);return oD(t._query),qN(n,t._query).then(i=>new hD(e,r,t,i))}function Xm(t,e,n){t=hn(t,ht);const r=hn(t.firestore,Is),i=cD(t.converter,e,n);return Zm(r,[eD(Wm(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,qt.none())])}function On(t,e,n,...r){t=hn(t,ht);const i=hn(t.firestore,Is),s=Wm(i);let o;return o=typeof(e=$e(e))=="string"||e instanceof $c?nD(s,"updateDoc",t._key,e,n,r):tD(s,"updateDoc",t._key,e),Zm(i,[o.toMutation(t._key,qt.exists(!0))])}function Jm(t){return Zm(hn(t.firestore,Is),[new km(t._key,qt.none())])}function Zm(t,e){return function(r,i){const s=new In;return r.asyncQueue.enqueueAndForget(async()=>bN(await HN(r),i,s)),s.promise}(zm(t),e)}function fD(t,e,n){const r=n.docs.get(e._key),i=new YI(t);return new QI(t,i,e._key,r,new Qs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){vs=i})(ps),ts(new ti("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Is(new yx(r.getProvider("auth-internal")),new Ex(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yo(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),fr(dv,"4.1.1",e),fr(dv,"4.1.1","esm2017")})();const pD={apiKey:"AIzaSyCEXagrtZuhjLYrgG1ANYKQ-hqdu4BL5HA",authDomain:"gymapp-294a1.firebaseapp.com",projectId:"gymapp-294a1",storageBucket:"gymapp-294a1.appspot.com",messagingSenderId:"470341150804",appId:"1:470341150804:web:f0ebb53660b4686f5925c1",measurementId:"G-KZ0DKTC6SM"},XI=X1(pD),ye=aP(XI),mD=new pn,Fe=YN(XI),gD=()=>{var c;const[t,e]=ke.useState(""),[n,r]=ke.useState(""),[i,s]=ke.useState(!1);return console.log((c=ye==null?void 0:ye.currentUser)==null?void 0:c.email),w(mn,{children:w("div",{className:"main-columns-divide__main-area",children:P("div",{className:"main-exercises",children:[w("h2",{children:"Authentication"}),w("button",{onClick:async()=>{try{await UC(ye)}catch(h){console.log(h)}},children:"Use without logging in"}),w("div",{className:"auth__inputs",children:i?P("div",{className:"auth__inputs__register",children:[w("h2",{children:"Register new account"}),w("input",{placeholder:"email...",onChange:h=>e(h.target.value)}),w("input",{type:"password",placeholder:"pasword...",onChange:h=>r(h.target.value)}),w("button",{className:"add-btn auth-btn",onClick:async()=>{try{await HC(ye,t,n)}catch(h){console.log(h)}},children:"Sign in"})]}):P("div",{className:"auth__inputs__login",children:[w("h2",{children:"Login with your account"}),w("input",{placeholder:"email...",onChange:h=>e(h.target.value)}),w("input",{type:"password",placeholder:"pasword...",onChange:h=>r(h.target.value)}),w("button",{className:"add-btn  auth-btn",onClick:async()=>{try{await WC(ye,t,n)}catch(h){console.log(h)}},children:"Login"}),P("p",{children:["Don't have an account?"," ",w("a",{onClick:()=>s(!0),children:"Register"})]})]})}),w("div",{className:"auth__buttons",children:w("button",{className:"add-btn",onClick:async()=>{try{await gR(ye,mD)}catch(h){console.log(h)}},children:"Sign in with Google"})})]})})})},yD="/gym-app/assets/Djangocircle-a147d8ac.png";/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ea.apply(this,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));const Qv="popstate";function vD(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Tf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uu(i)}return wD(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function eg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function _D(){return Math.random().toString(36).substr(2,8)}function Yv(t,e){return{usr:t.state,key:t.key,idx:e}}function Tf(t,e,n,r){return n===void 0&&(n=null),ea({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ts(e):e,{state:n,key:e&&e.key||r||_D()})}function Uu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ts(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function wD(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=tr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ea({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=tr.Pop;let v=c(),f=v==null?null:v-u;u=v,l&&l({action:a,location:_.location,delta:f})}function d(v,f){a=tr.Push;let p=Tf(_.location,v,f);n&&n(p,v),u=c()+1;let g=Yv(p,u),E=_.createHref(p);try{o.pushState(g,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function m(v,f){a=tr.Replace;let p=Tf(_.location,v,f);n&&n(p,v),u=c();let g=Yv(p,u),E=_.createHref(p);o.replaceState(g,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function y(v){let f=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof v=="string"?v:Uu(v);return Re(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let _={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Qv,h),l=v,()=>{i.removeEventListener(Qv,h),l=null}},createHref(v){return e(i,v)},createURL:y,encodeLocation(v){let f=y(v);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:d,replace:m,go(v){return o.go(v)}};return _}var Xv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xv||(Xv={}));function ED(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ts(e):e,i=tg(r.pathname||"/",n);if(i==null)return null;let s=JI(t);ID(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=bD(s[a],OD(i));return o}function JI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=gr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),JI(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:PD(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of ZI(s.path))i(s,o,l)}),e}function ZI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=ZI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ID(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const TD=/^:\w+$/,SD=3,AD=2,kD=1,CD=10,RD=-2,Jv=t=>t==="*";function PD(t,e){let n=t.split("/"),r=n.length;return n.some(Jv)&&(r+=RD),e&&(r+=AD),n.filter(i=>!Jv(i)).reduce((i,s)=>i+(TD.test(s)?SD:s===""?kD:CD),r)}function xD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function bD(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=ND({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:gr([i,c.pathname]),pathnameBase:FD(gr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=gr([i,c.pathnameBase]))}return s}function ND(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=DD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=MD(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function DD(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),eg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function OD(t){try{return decodeURI(t)}catch(e){return eg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function MD(t,e){try{return decodeURIComponent(t)}catch(n){return eg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function tg(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function LD(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ts(t):t;return{pathname:n?n.startsWith("/")?n:VD(n,e):e,search:$D(r),hash:UD(i)}}function VD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function tT(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ts(t):(i=ea({},t),Re(!i.pathname||!i.pathname.includes("?"),Bh("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),Bh("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),Bh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=LD(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const gr=t=>t.join("/").replace(/\/\/+/g,"/"),FD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$D=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,UD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const nT=["post","put","patch","delete"];new Set(nT);const jD=["get",...nT];new Set(jD);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zu.apply(this,arguments)}const ng=T.createContext(null),BD=T.createContext(null),Ss=T.createContext(null),jc=T.createContext(null),br=T.createContext({outlet:null,matches:[],isDataRoute:!1}),rT=T.createContext(null);function HD(t,e){let{relative:n}=e===void 0?{}:e;Oa()||Re(!1);let{basename:r,navigator:i}=T.useContext(Ss),{hash:s,pathname:o,search:a}=oT(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:gr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Oa(){return T.useContext(jc)!=null}function As(){return Oa()||Re(!1),T.useContext(jc).location}function iT(t){T.useContext(Ss).static||T.useLayoutEffect(t)}function rg(){let{isDataRoute:t}=T.useContext(br);return t?rO():WD()}function WD(){Oa()||Re(!1);let t=T.useContext(ng),{basename:e,navigator:n}=T.useContext(Ss),{matches:r}=T.useContext(br),{pathname:i}=As(),s=JSON.stringify(eT(r).map(l=>l.pathnameBase)),o=T.useRef(!1);return iT(()=>{o.current=!0}),T.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=tT(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:gr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function sT(){let{matches:t}=T.useContext(br),e=t[t.length-1];return e?e.params:{}}function oT(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=T.useContext(br),{pathname:i}=As(),s=JSON.stringify(eT(r).map(o=>o.pathnameBase));return T.useMemo(()=>tT(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function qD(t,e){return KD(t,e)}function KD(t,e,n){Oa()||Re(!1);let{navigator:r}=T.useContext(Ss),{matches:i}=T.useContext(br),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=As(),u;if(e){var c;let _=typeof e=="string"?Ts(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Re(!1),u=_}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=ED(t,{pathname:d}),y=JD(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:gr([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:gr([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&y?T.createElement(jc.Provider,{value:{location:zu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:tr.Pop}},y):y}function GD(){let t=nO(),e=zD(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),n?T.createElement("pre",{style:i},n):null,s)}const QD=T.createElement(GD,null);class YD extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?T.createElement(br.Provider,{value:this.props.routeContext},T.createElement(rT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function XD(t){let{routeContext:e,match:n,children:r}=t,i=T.useContext(ng);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),T.createElement(br.Provider,{value:e},r)}function JD(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Re(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||QD);let d=e.concat(s.slice(0,u+1)),m=()=>{let y;return c?y=h:l.route.Component?y=T.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,T.createElement(XD,{match:l,routeContext:{outlet:a,matches:d,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?T.createElement(YD,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):m()},null)}var aT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(aT||{}),ju=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ju||{});function ZD(t){let e=T.useContext(ng);return e||Re(!1),e}function eO(t){let e=T.useContext(BD);return e||Re(!1),e}function tO(t){let e=T.useContext(br);return e||Re(!1),e}function lT(t){let e=tO(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function nO(){var t;let e=T.useContext(rT),n=eO(ju.UseRouteError),r=lT(ju.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function rO(){let{router:t}=ZD(aT.UseNavigateStable),e=lT(ju.UseNavigateStable),n=T.useRef(!1);return iT(()=>{n.current=!0}),T.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,zu({fromRouteId:e},s)))},[t,e])}function Ys(t){Re(!1)}function iO(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1}=t;Oa()&&Re(!1);let a=e.replace(/^\/*/,"/"),l=T.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ts(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=T.useMemo(()=>{let _=tg(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return y==null?null:T.createElement(Ss.Provider,{value:l},T.createElement(jc.Provider,{children:n,value:y}))}function sO(t){let{children:e,location:n}=t;return qD(Sf(e),n)}new Promise(()=>{});function Sf(t,e){e===void 0&&(e=[]);let n=[];return T.Children.forEach(t,(r,i)=>{if(!T.isValidElement(r))return;let s=[...e,i];if(r.type===T.Fragment){n.push.apply(n,Sf(r.props.children,s));return}r.type!==Ys&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Sf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Af(){return Af=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Af.apply(this,arguments)}function oO(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function aO(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lO(t,e){return t.button===0&&(!e||e==="_self")&&!aO(t)}const uO=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],cO="startTransition",Zv=aS[cO];function hO(t){let{basename:e,children:n,future:r,window:i}=t,s=T.useRef();s.current==null&&(s.current=vD({window:i,v5Compat:!0}));let o=s.current,[a,l]=T.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=T.useCallback(h=>{u&&Zv?Zv(()=>l(h)):l(h)},[l,u]);return T.useLayoutEffect(()=>o.listen(c),[o,c]),T.createElement(iO,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const dO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",fO=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bu=T.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=oO(e,uO),{basename:d}=T.useContext(Ss),m,y=!1;if(typeof u=="string"&&fO.test(u)&&(m=u,dO))try{let p=new URL(window.location.href),g=u.startsWith("//")?new URL(p.protocol+u):new URL(u),E=tg(g.pathname,d);g.origin===p.origin&&E!=null?u=E+g.search+g.hash:y=!0}catch{}let _=HD(u,{relative:i}),v=pO(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function f(p){r&&r(p),p.defaultPrevented||v(p)}return T.createElement("a",Af({},h,{href:m||_,onClick:y||s?r:f,ref:n,target:l}))});var e_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(e_||(e_={}));var t_;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(t_||(t_={}));function pO(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=rg(),l=As(),u=oT(t,{relative:o});return T.useCallback(c=>{if(lO(c,n)){c.preventDefault();let h=r!==void 0?r:Uu(l)===Uu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function mO(){return w("div",{className:"bottom-buttons",children:w("button",{onClick:async()=>{try{await QC(ye)}catch(e){console.log(e)}},children:"LogOut"})})}function n_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?n_(Object(n),!0).forEach(function(r){Ne(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):n_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Hu(t){"@babel/helpers - typeof";return Hu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hu(t)}function gO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yO(t,e,n){return e&&r_(t.prototype,e),n&&r_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ne(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ig(t,e){return _O(t)||EO(t,e)||uT(t,e)||TO()}function Ma(t){return vO(t)||wO(t)||uT(t)||IO()}function vO(t){if(Array.isArray(t))return kf(t)}function _O(t){if(Array.isArray(t))return t}function wO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function EO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function uT(t,e){if(t){if(typeof t=="string")return kf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kf(t,e)}}function kf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function IO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function TO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i_=function(){},sg={},cT={},hT=null,dT={mark:i_,measure:i_};try{typeof window<"u"&&(sg=window),typeof document<"u"&&(cT=document),typeof MutationObserver<"u"&&(hT=MutationObserver),typeof performance<"u"&&(dT=performance)}catch{}var SO=sg.navigator||{},s_=SO.userAgent,o_=s_===void 0?"":s_,Ir=sg,ue=cT,a_=hT,fl=dT;Ir.document;var zn=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",fT=~o_.indexOf("MSIE")||~o_.indexOf("Trident/"),pl,ml,gl,yl,vl,Mn="___FONT_AWESOME___",Cf=16,pT="fa",mT="svg-inline--fa",ai="data-fa-i2svg",Rf="data-fa-pseudo-element",AO="data-fa-pseudo-element-pending",og="data-prefix",ag="data-icon",l_="fontawesome-i2svg",kO="async",CO=["HTML","HEAD","STYLE","SCRIPT"],gT=function(){try{return!0}catch{return!1}}(),se="classic",ve="sharp",lg=[se,ve];function La(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[se]}})}var ta=La((pl={},Ne(pl,se,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ne(pl,ve,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),pl)),na=La((ml={},Ne(ml,se,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ne(ml,ve,{solid:"fass",regular:"fasr",light:"fasl"}),ml)),ra=La((gl={},Ne(gl,se,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ne(gl,ve,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),gl)),RO=La((yl={},Ne(yl,se,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ne(yl,ve,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),yl)),PO=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,yT="fa-layers-text",xO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,bO=La((vl={},Ne(vl,se,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ne(vl,ve,{900:"fass",400:"fasr",300:"fasl"}),vl)),vT=[1,2,3,4,5,6,7,8,9,10],NO=vT.concat([11,12,13,14,15,16,17,18,19,20]),DO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Hr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ia=new Set;Object.keys(na[se]).map(ia.add.bind(ia));Object.keys(na[ve]).map(ia.add.bind(ia));var OO=[].concat(lg,Ma(ia),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Hr.GROUP,Hr.SWAP_OPACITY,Hr.PRIMARY,Hr.SECONDARY]).concat(vT.map(function(t){return"".concat(t,"x")})).concat(NO.map(function(t){return"w-".concat(t)})),yo=Ir.FontAwesomeConfig||{};function MO(t){var e=ue.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function LO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ue&&typeof ue.querySelector=="function"){var VO=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];VO.forEach(function(t){var e=ig(t,2),n=e[0],r=e[1],i=LO(MO(n));i!=null&&(yo[r]=i)})}var _T={styleDefault:"solid",familyDefault:"classic",cssPrefix:pT,replacementClass:mT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yo.familyPrefix&&(yo.cssPrefix=yo.familyPrefix);var cs=N(N({},_T),yo);cs.autoReplaceSvg||(cs.observeMutations=!1);var L={};Object.keys(_T).forEach(function(t){Object.defineProperty(L,t,{enumerable:!0,set:function(n){cs[t]=n,vo.forEach(function(r){return r(L)})},get:function(){return cs[t]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){cs.cssPrefix=e,vo.forEach(function(n){return n(L)})},get:function(){return cs.cssPrefix}});Ir.FontAwesomeConfig=L;var vo=[];function FO(t){return vo.push(t),function(){vo.splice(vo.indexOf(t),1)}}var Hn=Cf,rn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $O(t){if(!(!t||!zn)){var e=ue.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ue.head.insertBefore(e,r),t}}var UO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sa(){for(var t=12,e="";t-- >0;)e+=UO[Math.random()*62|0];return e}function ks(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ug(t){return t.classList?ks(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function wT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function zO(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(wT(t[n]),'" ')},"").trim()}function Bc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function cg(t){return t.size!==rn.size||t.x!==rn.x||t.y!==rn.y||t.rotate!==rn.rotate||t.flipX||t.flipY}function jO(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function BO(t){var e=t.transform,n=t.width,r=n===void 0?Cf:n,i=t.height,s=i===void 0?Cf:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&fT?l+="translate(".concat(e.x/Hn-r/2,"em, ").concat(e.y/Hn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Hn,"em), calc(-50% + ").concat(e.y/Hn,"em)) "):l+="translate(".concat(e.x/Hn,"em, ").concat(e.y/Hn,"em) "),l+="scale(".concat(e.size/Hn*(e.flipX?-1:1),", ").concat(e.size/Hn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var HO=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
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
}`;function ET(){var t=pT,e=mT,n=L.cssPrefix,r=L.replacementClass,i=HO;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var u_=!1;function Hh(){L.autoAddCss&&!u_&&($O(ET()),u_=!0)}var WO={mixout:function(){return{dom:{css:ET,insertCss:Hh}}},hooks:function(){return{beforeDOMElementCreation:function(){Hh()},beforeI2svg:function(){Hh()}}}},Ln=Ir||{};Ln[Mn]||(Ln[Mn]={});Ln[Mn].styles||(Ln[Mn].styles={});Ln[Mn].hooks||(Ln[Mn].hooks={});Ln[Mn].shims||(Ln[Mn].shims=[]);var Bt=Ln[Mn],IT=[],qO=function t(){ue.removeEventListener("DOMContentLoaded",t),Wu=1,IT.map(function(e){return e()})},Wu=!1;zn&&(Wu=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),Wu||ue.addEventListener("DOMContentLoaded",qO));function KO(t){zn&&(Wu?setTimeout(t,0):IT.push(t))}function Va(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?wT(t):"<".concat(e," ").concat(zO(r),">").concat(s.map(Va).join(""),"</").concat(e,">")}function c_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var GO=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Wh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?GO(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function QO(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Pf(t){var e=QO(t);return e.length===1?e[0].toString(16):null}function YO(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function h_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function xf(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=h_(e);typeof Bt.hooks.addPack=="function"&&!i?Bt.hooks.addPack(t,h_(e)):Bt.styles[t]=N(N({},Bt.styles[t]||{}),s),t==="fas"&&xf("fa",e)}var _l,wl,El,Di=Bt.styles,XO=Bt.shims,JO=(_l={},Ne(_l,se,Object.values(ra[se])),Ne(_l,ve,Object.values(ra[ve])),_l),hg=null,TT={},ST={},AT={},kT={},CT={},ZO=(wl={},Ne(wl,se,Object.keys(ta[se])),Ne(wl,ve,Object.keys(ta[ve])),wl);function e4(t){return~OO.indexOf(t)}function t4(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!e4(i)?i:null}var RT=function(){var e=function(s){return Wh(Di,function(o,a,l){return o[l]=Wh(a,s,{}),o},{})};TT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),ST=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),CT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Di||L.autoFetchSvg,r=Wh(XO,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});AT=r.names,kT=r.unicodes,hg=Hc(L.styleDefault,{family:L.familyDefault})};FO(function(t){hg=Hc(t.styleDefault,{family:L.familyDefault})});RT();function dg(t,e){return(TT[t]||{})[e]}function n4(t,e){return(ST[t]||{})[e]}function Wr(t,e){return(CT[t]||{})[e]}function PT(t){return AT[t]||{prefix:null,iconName:null}}function r4(t){var e=kT[t],n=dg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Tr(){return hg}var fg=function(){return{prefix:null,iconName:null,rest:[]}};function Hc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?se:n,i=ta[r][t],s=na[r][t]||na[r][i],o=t in Bt.styles?t:null;return s||o||null}var d_=(El={},Ne(El,se,Object.keys(ra[se])),Ne(El,ve,Object.keys(ra[ve])),El);function Wc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ne(e,se,"".concat(L.cssPrefix,"-").concat(se)),Ne(e,ve,"".concat(L.cssPrefix,"-").concat(ve)),e),o=null,a=se;(t.includes(s[se])||t.some(function(u){return d_[se].includes(u)}))&&(a=se),(t.includes(s[ve])||t.some(function(u){return d_[ve].includes(u)}))&&(a=ve);var l=t.reduce(function(u,c){var h=t4(L.cssPrefix,c);if(Di[c]?(c=JO[a].includes(c)?RO[a][c]:c,o=c,u.prefix=c):ZO[a].indexOf(c)>-1?(o=c,u.prefix=Hc(c,{family:a})):h?u.iconName=h:c!==L.replacementClass&&c!==s[se]&&c!==s[ve]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?PT(u.iconName):{},m=Wr(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||m||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Di.far&&Di.fas&&!L.autoFetchSvg&&(u.prefix="fas")}return u},fg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ve&&(Di.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=Wr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Tr()||"fas"),l}var i4=function(){function t(){gO(this,t),this.definitions={}}return yO(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=N(N({},n.definitions[a]||{}),o[a]),xf(a,o[a]);var l=ra[se][a];l&&xf(l,o[a]),RT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(h){typeof h=="string"&&(n[a][h]=u)}),n[a][l]=u}),n}}]),t}(),f_=[],Oi={},Ki={},s4=Object.keys(Ki);function o4(t,e){var n=e.mixoutsTo;return f_=t,Oi={},Object.keys(Ki).forEach(function(r){s4.indexOf(r)===-1&&delete Ki[r]}),f_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Hu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Oi[o]||(Oi[o]=[]),Oi[o].push(s[o])})}r.provides&&r.provides(Ki)}),n}function bf(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Oi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function li(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Oi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Vn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ki[t]?Ki[t].apply(null,e):void 0}function Nf(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Tr();if(e)return e=Wr(n,e)||e,c_(xT.definitions,n,e)||c_(Bt.styles,n,e)}var xT=new i4,a4=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,li("noAuto")},l4={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return zn?(li("beforeI2svg",e),Vn("pseudoElements2svg",e),Vn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,KO(function(){c4({autoReplaceSvgRoot:n}),li("watch",e)})}},u4={icon:function(e){if(e===null)return null;if(Hu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Wr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Hc(e[0]);return{prefix:r,iconName:Wr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(PO))){var i=Wc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Tr(),iconName:Wr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Tr();return{prefix:s,iconName:Wr(s,e)||e}}}},Pt={noAuto:a4,config:L,dom:l4,parse:u4,library:xT,findIconDefinition:Nf,toHtml:Va},c4=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(Bt.styles).length>0||L.autoFetchSvg)&&zn&&L.autoReplaceSvg&&Pt.dom.i2svg({node:r})};function qc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Va(r)})}}),Object.defineProperty(t,"node",{get:function(){if(zn){var r=ue.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function h4(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(cg(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Bc(N(N({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function d4(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(L.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},i),{},{id:o}),children:r}]}]}function pg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,h=t.extra,d=t.watchable,m=d===void 0?!1:d,y=r.found?r:n,_=y.width,v=y.height,f=i==="fak",p=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(function(B){return h.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(h.classes).join(" "),g={children:[],attributes:N(N({},h.attributes),{},{"data-prefix":i,"data-icon":s,class:p,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(v)})},E=f&&!~h.classes.indexOf("fa-fw")?{width:"".concat(_/v*16*.0625,"em")}:{};m&&(g.attributes[ai]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||sa())},children:[l]}),delete g.attributes.title);var I=N(N({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:N(N({},E),h.styles)}),A=r.found&&n.found?Vn("generateAbstractMask",I)||{children:[],attributes:{}}:Vn("generateAbstractIcon",I)||{children:[],attributes:{}},k=A.children,x=A.attributes;return I.children=k,I.attributes=x,a?d4(I):h4(I)}function p_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=N(N(N({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[ai]="");var c=N({},o.styles);cg(i)&&(c.transform=BO({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var h=Bc(c);h.length>0&&(u.style=h);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function f4(t){var e=t.content,n=t.title,r=t.extra,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Bc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var qh=Bt.styles;function Df(t){var e=t[0],n=t[1],r=t.slice(4),i=ig(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Hr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Hr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Hr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var p4={found:!1,width:512,height:512};function m4(t,e){!gT&&!L.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Of(t,e){var n=e;return e==="fa"&&L.styleDefault!==null&&(e=Tr()),new Promise(function(r,i){if(Vn("missingIconAbstract"),n==="fa"){var s=PT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&qh[e]&&qh[e][t]){var o=qh[e][t];return r(Df(o))}m4(t,e),r(N(N({},p4),{},{icon:L.showMissingIcons&&t?Vn("missingIconAbstract")||{}:{}}))})}var m_=function(){},Mf=L.measurePerformance&&fl&&fl.mark&&fl.measure?fl:{mark:m_,measure:m_},Xs='FA "6.4.0"',g4=function(e){return Mf.mark("".concat(Xs," ").concat(e," begins")),function(){return bT(e)}},bT=function(e){Mf.mark("".concat(Xs," ").concat(e," ends")),Mf.measure("".concat(Xs," ").concat(e),"".concat(Xs," ").concat(e," begins"),"".concat(Xs," ").concat(e," ends"))},mg={begin:g4,end:bT},Hl=function(){};function g_(t){var e=t.getAttribute?t.getAttribute(ai):null;return typeof e=="string"}function y4(t){var e=t.getAttribute?t.getAttribute(og):null,n=t.getAttribute?t.getAttribute(ag):null;return e&&n}function v4(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(L.replacementClass)}function _4(){if(L.autoReplaceSvg===!0)return Wl.replace;var t=Wl[L.autoReplaceSvg];return t||Wl.replace}function w4(t){return ue.createElementNS("http://www.w3.org/2000/svg",t)}function E4(t){return ue.createElement(t)}function NT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?w4:E4:n;if(typeof t=="string")return ue.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(NT(o,{ceFn:r}))}),i}function I4(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Wl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(NT(i),n)}),n.getAttribute(ai)===null&&L.keepOriginalSource){var r=ue.createComment(I4(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ug(n).indexOf(L.replacementClass))return Wl.replace(e);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===L.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Va(a)}).join(`
`);n.setAttribute(ai,""),n.innerHTML=o}};function y_(t){t()}function DT(t,e){var n=typeof e=="function"?e:Hl;if(t.length===0)n();else{var r=y_;L.mutateApproach===kO&&(r=Ir.requestAnimationFrame||y_),r(function(){var i=_4(),s=mg.begin("mutate");t.map(i),s(),n()})}}var gg=!1;function OT(){gg=!0}function Lf(){gg=!1}var qu=null;function v_(t){if(a_&&L.observeMutations){var e=t.treeCallback,n=e===void 0?Hl:e,r=t.nodeCallback,i=r===void 0?Hl:r,s=t.pseudoElementsCallback,o=s===void 0?Hl:s,a=t.observeMutationsRoot,l=a===void 0?ue:a;qu=new a_(function(u){if(!gg){var c=Tr();ks(u).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!g_(h.addedNodes[0])&&(L.searchPseudoElements&&o(h.target),n(h.target)),h.type==="attributes"&&h.target.parentNode&&L.searchPseudoElements&&o(h.target.parentNode),h.type==="attributes"&&g_(h.target)&&~DO.indexOf(h.attributeName))if(h.attributeName==="class"&&y4(h.target)){var d=Wc(ug(h.target)),m=d.prefix,y=d.iconName;h.target.setAttribute(og,m||c),y&&h.target.setAttribute(ag,y)}else v4(h.target)&&i(h.target)})}}),zn&&qu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function T4(){qu&&qu.disconnect()}function S4(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function A4(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Wc(ug(t));return i.prefix||(i.prefix=Tr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=n4(i.prefix,t.innerText)||dg(i.prefix,Pf(t.innerText))),!i.iconName&&L.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function k4(t){var e=ks(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return L.autoA11y&&(n?e["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||sa()):(e["aria-hidden"]="true",e.focusable="false")),e}function C4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function __(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=A4(t),r=n.iconName,i=n.prefix,s=n.rest,o=k4(t),a=bf("parseNodeAttributes",{},t),l=e.styleParser?S4(t):[];return N({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:rn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var R4=Bt.styles;function MT(t){var e=L.autoReplaceSvg==="nest"?__(t,{styleParser:!1}):__(t);return~e.extra.classes.indexOf(yT)?Vn("generateLayersText",t,e):Vn("generateSvgReplacementMutation",t,e)}var Sr=new Set;lg.map(function(t){Sr.add("fa-".concat(t))});Object.keys(ta[se]).map(Sr.add.bind(Sr));Object.keys(ta[ve]).map(Sr.add.bind(Sr));Sr=Ma(Sr);function w_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!zn)return Promise.resolve();var n=ue.documentElement.classList,r=function(h){return n.add("".concat(l_,"-").concat(h))},i=function(h){return n.remove("".concat(l_,"-").concat(h))},s=L.autoFetchSvg?Sr:lg.map(function(c){return"fa-".concat(c)}).concat(Object.keys(R4));s.includes("fa")||s.push("fa");var o=[".".concat(yT,":not([").concat(ai,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(ai,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ks(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=mg.begin("onTree"),u=a.reduce(function(c,h){try{var d=MT(h);d&&c.push(d)}catch(m){gT||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,h){Promise.all(u).then(function(d){DT(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),h(d)})})}function P4(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;MT(t).then(function(n){n&&DT([n],e)})}function x4(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Nf(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Nf(i||{})),t(r,N(N({},n),{},{mask:i}))}}var b4=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?rn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,h=n.title,d=h===void 0?null:h,m=n.titleId,y=m===void 0?null:m,_=n.classes,v=_===void 0?[]:_,f=n.attributes,p=f===void 0?{}:f,g=n.styles,E=g===void 0?{}:g;if(e){var I=e.prefix,A=e.iconName,k=e.icon;return qc(N({type:"icon"},e),function(){return li("beforeDOMElementCreation",{iconDefinition:e,params:n}),L.autoA11y&&(d?p["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(y||sa()):(p["aria-hidden"]="true",p.focusable="false")),pg({icons:{main:Df(k),mask:l?Df(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:A,transform:N(N({},rn),i),symbol:o,title:d,maskId:c,titleId:y,extra:{attributes:p,styles:E,classes:v}})})}},N4={mixout:function(){return{icon:x4(b4)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=w_,n.nodeCallback=P4,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,s=n.callback,o=s===void 0?function(){}:s;return w_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,h=r.maskId,d=r.extra;return new Promise(function(m,y){Promise.all([Of(i,a),c.iconName?Of(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var v=ig(_,2),f=v[0],p=v[1];m([n,pg({icons:{main:f,mask:p},prefix:a,iconName:i,transform:l,symbol:u,maskId:h,title:s,titleId:o,extra:d,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Bc(a);l.length>0&&(i.style=l);var u;return cg(o)&&(u=Vn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},D4={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return qc({type:"layer"},function(){li("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Ma(s)).join(" ")},children:o}]})}}}},O4={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,h=c===void 0?{}:c;return qc({type:"counter",content:n},function(){return li("beforeDOMElementCreation",{content:n,params:r}),f4({content:n.toString(),title:s,extra:{attributes:u,styles:h,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Ma(a))}})})}}}},M4={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?rn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,h=c===void 0?{}:c,d=r.styles,m=d===void 0?{}:d;return qc({type:"text",content:n},function(){return li("beforeDOMElementCreation",{content:n,params:r}),p_({content:n,transform:N(N({},rn),s),title:a,extra:{attributes:h,styles:m,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Ma(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(fT){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return L.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,p_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},L4=new RegExp('"',"ug"),E_=[1105920,1112319];function V4(t){var e=t.replace(L4,""),n=YO(e,0),r=n>=E_[0]&&n<=E_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Pf(i?e[0]:e),isSecondary:r||i}}function I_(t,e){var n="".concat(AO).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ks(t.children),o=s.filter(function(k){return k.getAttribute(Rf)===e})[0],a=Ir.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(xO),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var h=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?ve:se,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?na[d][l[2].toLowerCase()]:bO[d][u],y=V4(h),_=y.value,v=y.isSecondary,f=l[0].startsWith("FontAwesome"),p=dg(m,_),g=p;if(f){var E=r4(_);E.iconName&&E.prefix&&(p=E.iconName,m=E.prefix)}if(p&&!v&&(!o||o.getAttribute(og)!==m||o.getAttribute(ag)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var I=C4(),A=I.extra;A.attributes[Rf]=e,Of(p,m).then(function(k){var x=pg(N(N({},I),{},{icons:{main:k,mask:fg()},prefix:m,iconName:g,extra:A,watchable:!0})),B=ue.createElement("svg");e==="::before"?t.insertBefore(B,t.firstChild):t.appendChild(B),B.outerHTML=x.map(function(H){return Va(H)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function F4(t){return Promise.all([I_(t,"::before"),I_(t,"::after")])}function $4(t){return t.parentNode!==document.head&&!~CO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Rf)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function T_(t){if(zn)return new Promise(function(e,n){var r=ks(t.querySelectorAll("*")).filter($4).map(F4),i=mg.begin("searchPseudoElements");OT(),Promise.all(r).then(function(){i(),Lf(),e()}).catch(function(){i(),Lf(),n()})})}var U4={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=T_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;L.searchPseudoElements&&T_(i)}}},S_=!1,z4={mixout:function(){return{dom:{unwatch:function(){OT(),S_=!0}}}},hooks:function(){return{bootstrap:function(){v_(bf("mutationObserverCallbacks",{}))},noAuto:function(){T4()},watch:function(n){var r=n.observeMutationsRoot;S_?Lf():v_(bf("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},A_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},j4={mixout:function(){return{parse:{transform:function(n){return A_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=A_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),h={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:h,path:d};return{tag:"g",attributes:N({},m.outer),children:[{tag:"g",attributes:N({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),m.path)}]}]}}}},Kh={x:0,y:0,width:"100%",height:"100%"};function k_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function B4(t){return t.tag==="g"?t.children:[t]}var H4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Wc(i.split(" ").map(function(o){return o.trim()})):fg();return s.prefix||(s.prefix=Tr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,h=o.width,d=o.icon,m=jO({transform:l,containerWidth:h,iconWidth:u}),y={tag:"rect",attributes:N(N({},Kh),{},{fill:"white"})},_=c.children?{children:c.children.map(k_)}:{},v={tag:"g",attributes:N({},m.inner),children:[k_(N({tag:c.tag,attributes:N(N({},c.attributes),m.path)},_))]},f={tag:"g",attributes:N({},m.outer),children:[v]},p="mask-".concat(a||sa()),g="clip-".concat(a||sa()),E={tag:"mask",attributes:N(N({},Kh),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,f]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:B4(d)},E]};return r.push(I,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(p,")")},Kh)}),{children:r,attributes:i}}}},W4={provides:function(e){var n=!1;Ir.matchMedia&&(n=Ir.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:N(N({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:N(N({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:N(N({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},q4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},K4=[WO,N4,D4,O4,M4,U4,z4,j4,H4,W4,q4];o4(K4,{mixoutsTo:Pt});Pt.noAuto;Pt.config;Pt.library;Pt.dom;var Vf=Pt.parse;Pt.findIconDefinition;Pt.toHtml;var G4=Pt.icon;Pt.layer;Pt.text;Pt.counter;var LT={exports:{}},Q4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Y4=Q4,X4=Y4;function VT(){}function FT(){}FT.resetWarningCache=VT;var J4=function(){function t(r,i,s,o,a,l){if(l!==X4){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:FT,resetWarningCache:VT};return n.PropTypes=n,n};LT.exports=J4();var Z4=LT.exports;const G=P_(Z4);function C_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function nr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?C_(Object(n),!0).forEach(function(r){Mi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ku(t){"@babel/helpers - typeof";return Ku=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ku(t)}function Mi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function t3(t,e){if(t==null)return{};var n=e3(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Ff(t){return n3(t)||r3(t)||i3(t)||s3()}function n3(t){if(Array.isArray(t))return $f(t)}function r3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function i3(t,e){if(t){if(typeof t=="string")return $f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $f(t,e)}}function $f(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function o3(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,h=t.pulse,d=t.fixedWidth,m=t.inverse,y=t.border,_=t.listItem,v=t.flip,f=t.size,p=t.rotation,g=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":h,"fa-fw":d,"fa-inverse":m,"fa-border":y,"fa-li":_,"fa-flip":v===!0,"fa-flip-horizontal":v==="horizontal"||v==="both","fa-flip-vertical":v==="vertical"||v==="both"},Mi(e,"fa-".concat(f),typeof f<"u"&&f!==null),Mi(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Mi(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Mi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(I){return E[I]?I:null}).filter(function(I){return I})}function a3(t){return t=t-0,t===t}function $T(t){return a3(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var l3=["style"];function u3(t){return t.charAt(0).toUpperCase()+t.slice(1)}function c3(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=$T(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[u3(i)]=s:e[i]=s,e},{})}function UT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return UT(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=c3(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[$T(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=t3(n,l3);return i.attrs.style=nr(nr({},i.attrs.style),o),t.apply(void 0,[e.tag,nr(nr({},i.attrs),a)].concat(Ff(r)))}var zT=!1;try{zT=!0}catch{}function h3(){if(!zT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function R_(t){if(t&&Ku(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Vf.icon)return Vf.icon(t);if(t===null)return null;if(t&&Ku(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Gh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Mi({},t,e):{}}var Ce=ke.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=R_(n),c=Gh("classes",[].concat(Ff(o3(t)),Ff(s.split(" ")))),h=Gh("transform",typeof t.transform=="string"?Vf.transform(t.transform):t.transform),d=Gh("mask",R_(r)),m=G4(u,nr(nr(nr(nr({},c),h),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return h3("Could not find icon",u),null;var y=m.abstract,_={ref:e};return Object.keys(t).forEach(function(v){Ce.defaultProps.hasOwnProperty(v)||(_[v]=t[v])}),d3(y[0],_)});Ce.displayName="FontAwesomeIcon";Ce.propTypes={beat:G.bool,border:G.bool,beatFade:G.bool,bounce:G.bool,className:G.string,fade:G.bool,flash:G.bool,mask:G.oneOfType([G.object,G.array,G.string]),maskId:G.string,fixedWidth:G.bool,inverse:G.bool,flip:G.oneOf([!0,!1,"horizontal","vertical","both"]),icon:G.oneOfType([G.object,G.array,G.string]),listItem:G.bool,pull:G.oneOf(["right","left"]),pulse:G.bool,rotation:G.oneOf([0,90,180,270]),shake:G.bool,size:G.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:G.bool,spinPulse:G.bool,spinReverse:G.bool,symbol:G.oneOfType([G.bool,G.string]),title:G.string,titleId:G.string,transform:G.oneOfType([G.string,G.object]),swapOpacity:G.bool};Ce.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var d3=UT.bind(null,ke.createElement),f3={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},p3={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},m3={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},ql=m3,g3={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},y3={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},v3={prefix:"fas",iconName:"weight-hanging",icon:[512,512,[],"f5cd","M224 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm122.5 32c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32H120c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512H464c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128H346.5z"]},jT={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},_3={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]},w3={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},BT={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},E3={prefix:"fas",iconName:"hand-fist",icon:[448,512,[9994,"fist-raised"],"f6de","M192 0c17.7 0 32 14.3 32 32V144H160V32c0-17.7 14.3-32 32-32zM64 64c0-17.7 14.3-32 32-32s32 14.3 32 32v80H64V64zm192 0c0-17.7 14.3-32 32-32s32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V64zm96 64c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V128zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6V256c0 52.3-25.1 98.8-64 128v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V401.6c-17.3-7.9-33.2-18.8-46.9-32.5L69.5 357.5C45.5 333.5 32 300.9 32 267V240c0-35.3 28.7-64 64-64h88c22.1 0 40 17.9 40 40s-17.9 40-40 40H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h56c39.8 0 72-32.2 72-72z"]};function I3(){return P("div",{className:"personal-links",style:{display:"flex",justifyContent:"center"},children:[w("a",{href:"https://www.linkedin.com/in/jose-david-molina-sosa-webdev/?locale=en_US",children:w(Ce,{icon:f3})}),w("a",{href:"https://cheoworkshop.info/",children:w(Ce,{icon:g3})}),w("a",{href:"https://github.com/Aredros",children:w(Ce,{icon:p3})})]})}const T3=({showMenu:t,showMenuFunction:e})=>{const n=As();return P("nav",{className:"navigation main-columns-divide__navigation",style:{width:t?"100%":"0%",zIndex:t?"1":"0"},children:[w(I3,{}),w("h1",{children:"Gym list"})," ",w(Bu,{to:"/",className:`navigation__item-${n.pathname==="/"?"active":"inactive"}`,onClick:e,children:"My Routines"}),w(Bu,{to:"/all-exercises",className:`navigation__item-${n.pathname==="/all-exercises"?"active":"inactive"}`,onClick:e,children:"All Exercises"}),w(mO,{})]})};var Il,S3=new Uint8Array(16);function A3(){if(!Il&&(Il=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Il))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Il(S3)}const k3=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function C3(t){return typeof t=="string"&&k3.test(t)}var je=[];for(var Qh=0;Qh<256;++Qh)je.push((Qh+256).toString(16).substr(1));function R3(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=(je[t[e+0]]+je[t[e+1]]+je[t[e+2]]+je[t[e+3]]+"-"+je[t[e+4]]+je[t[e+5]]+"-"+je[t[e+6]]+je[t[e+7]]+"-"+je[t[e+8]]+je[t[e+9]]+"-"+je[t[e+10]]+je[t[e+11]]+je[t[e+12]]+je[t[e+13]]+je[t[e+14]]+je[t[e+15]]).toLowerCase();if(!C3(n))throw TypeError("Stringified UUID is invalid");return n}function Kc(t,e,n){t=t||{};var r=t.random||(t.rng||A3)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=r[i];return e}return R3(r)}const P3=t=>{const{exerciseList:e=[],setExerciseList:n,isLoggedIn:r}=T.useContext(De)||{},{closeModal:i}=t,[s,o]=ke.useState(""),[a,l]=ke.useState(""),[u,c]=ke.useState([]),[h,d]=ke.useState(""),m=T.useRef(null),y=async(f,p,g)=>{var A;const E=Kc();if(!n)return;const I={id:E,isEditing:!1,name:f,muscles:p,linkImage:g,details:h,userCreator:((A=ye.currentUser)==null?void 0:A.email)||""};if(n(k=>[...k,I]),r)try{const k=mr(Fe,"allExercises"),x=`exercise-${E}`,B=kt(k,x);await Xm(B,I),console.log("sending to Firebase")}catch(k){console.log(k)}},_=f=>{var p;f.preventDefault(),y(s,u,a),o(""),l(""),c([""]),d(""),(p=m.current)==null||p.reset(),i()},v=(f,p)=>c(p?[...u,f]:u.filter(g=>g!==f));return T.useEffect(()=>{localStorage.setItem("exerciseList",JSON.stringify(e))},[e]),P("form",{onSubmit:_,className:"exerciseAddForm",ref:m,children:[w("input",{type:"text",value:s,placeholder:"Add exercise",onChange:f=>o(f.target.value)}),P("div",{className:"exerciseAddForm__checkboxes",children:[w("p",{children:"Workout type"}),P("div",{className:"exerciseAddForm__checkboxes__area",children:[P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Neck",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Neck"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Traps",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Traps"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Traps-middle",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Traps-middle"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Lowerback",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Lowerback"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Shoulders",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Shoulders"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Chest",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Chest"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Biceps",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Biceps"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Triceps",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Triceps"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Forearms",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Forearms"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Obliques",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Obliques"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Abdominals",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Abdominals"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Laterals",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Laterals"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Quads",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Quads -legs"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Calves",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Calves"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Hamstrings",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Hamstrings"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Glutes",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Glutes"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Core",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Core"})]}),P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:"Cardio",onChange:f=>v(f.target.value,f.target.checked)}),w("label",{children:"Cardio"})]})]})]}),w("input",{type:"text",value:a,placeholder:"Image url",onChange:f=>l(f.target.value)}),w("textarea",{onChange:f=>d(f.target.value),placeholder:"Description"}),P("div",{className:"exerciseAddForm__buttons",children:[w("button",{type:"submit",children:"Add"}),w("button",{type:"reset",onClick:i,children:"Cancel"})]})]})},x3=t=>{const{exerciseList:e=[],setExerciseList:n=()=>{},isLoggedIn:r}=T.useContext(De)||{},{closeModal:i,exercise:s}=t,[o,a]=ke.useState(s.name),[l,u]=ke.useState(s.linkImage),[c,h]=ke.useState(s.muscles||[]),d=T.useRef(null),m=v=>{v.preventDefault(),_(s.id,o,c,l),i()},y=v=>{const{value:f,checked:p}=v.target;h(p?g=>[...g,f]:g=>g.filter(E=>E!==f))},_=async(v,f,p,g)=>{const E=e.map(I=>I.id===v?{...I,name:f,muscles:p,linkImage:g,isEditing:!1}:I);if(n(E),r)try{const I=kt(Fe,"allExercises",`exercise-${v}`);(await Dn(I)).exists()&&(await On(I,{name:f,muscles:p,linkImage:g}),console.log("Exercise edited in Firebase"))}catch(I){console.log("not added"+I)}};return P("form",{onSubmit:m,className:"exerciseAddForm",ref:d,children:[w("input",{type:"text",value:o,placeholder:"Add exercise",onChange:v=>a(v.target.value)}),P("div",{className:"exerciseAddForm__checkboxes",children:[w("p",{children:"Workout type"}),w("div",{className:"exerciseAddForm__checkboxes__area",children:["Neck","Traps","Traps-middle","Lowerback","Shoulders","Chest","Biceps","Triceps","Forearms","Obliques","Abdominals","Laterals","Quads","Calves","Hamstrings","Glutes","Core","Cardio"].map(v=>P("div",{className:"exerciseAddForm__checkboxes__area__box",children:[w("input",{type:"checkbox",value:v,checked:c.includes(v),onChange:y}),w("label",{children:v})]},`muscle-${s.id}-${v}`))})]}),w("input",{type:"text",value:l,placeholder:"Image url",onChange:v=>u(v.target.value)}),P("div",{className:"exerciseAddForm__buttons",children:[w("button",{type:"submit",children:"Update"}),w("button",{type:"reset",onClick:i,children:"Cancel"})]})]})},b3=t=>{const{exerciseItem:e,typeClass:n}=t;return w("div",{className:`${n}__image`,onClick:()=>window.open(e.linkImage),children:w("img",{src:e.linkImage,alt:e.name})})},N3=t=>{const{exerciseList:e=[],setExerciseList:n=()=>{},isLoggedIn:r}=T.useContext(De)||{},{exercise:i}=t,s=async o=>{var l;const a=e.filter(u=>u.id!==o);if(n(a),r)try{console.log("deleting from Firebase");const u=(l=ye.currentUser)==null?void 0:l.email,c=mo(mr(Fe,"allExercises"),Jt("userCreator","==",u),Jt("id","==",o));(await go(c)).docs.forEach(async d=>{await Jm(d.ref)})}catch(u){console.log(u)}};return T.useEffect(()=>{localStorage.setItem("exerciseList",JSON.stringify(e))},[e]),w(Ce,{icon:jT,onClick:()=>s(i.id)})},D3=t=>{const{exerciseList:e=[],setExerciseList:n=()=>{}}=T.useContext(De)||{},{openModal:r,exercise:i}=t,s=a=>{const l=e.map(u=>u.id===a?{...u,isEditing:!0}:u);localStorage.setItem("exerciseList",JSON.stringify(l)),n(l)};return w(Ce,{icon:ql,onClick:()=>{s(i.id),r()}})},O3=t=>{const{exerciseList:e=[],myRoutines:n=[],setMyRoutines:r=()=>{},isLoggedIn:i}=T.useContext(De)||{},{exercise:s}=t,[o,a]=ke.useState(n.length>0?n[0].routineID:""),l=T.useRef(null),u=()=>{var y;(y=l.current)==null||y.showModal()},c=()=>{var y;(y=l.current)==null||y.close()},h=async(y,_)=>{var f;const v=e.find(p=>p.id===y);if(v){const p={ExerciseName:v.name,allExercisesUniqueID:v.id,isEditing:!1,individualMyExerciseID:Kc(),objective:"",routine:_,type:"Cardio",sets:[{setCompleted:!1,reps:0,weight:0,distance:0,time:0}],myExUserCreator:((f=ye.currentUser)==null?void 0:f.email)||""},g=n.map(E=>E.routineID===_?{...E,routineExercises:[...E.routineExercises,p]}:E);if(r(g),i)try{const E=kt(Fe,"myExercises",`routine-${_}`),I=await Dn(E);if(I.exists()){const A=[...I.data().routineExercises,p];await On(E,{routineExercises:A}),console.log("Exercise added to the routine in Firebase")}}catch(E){console.log("not added"+E)}}},d=y=>{y.preventDefault(),h(s.id,o),alert("Exercise added to your routine!")},m=`edit-item-${s.id}-${s.name}`;return P("li",{className:"Item-exercise",children:[P("div",{className:"Item-exercise__area1",children:[P("div",{className:"Item-exercise__area1__titleNbuttons",children:[w("h2",{children:s.name}),P("div",{className:"Item-exercise__area1__titleNbuttons__buttons",children:[w(D3,{openModal:u,exercise:s}),w(N3,{exercise:s})]})]}),w("div",{className:"Item-exercise__area1__routineChooser",children:P("form",{onSubmit:d,children:[P("select",{name:"routineChooser",id:"routineChooser",onChange:y=>a(y.target.value),children:[w("option",{value:"",disabled:!0,children:"choose routine"}),n.map(y=>w("option",{value:y.routineID,children:y.routineName},`${y.routineID}-${y.routineName}`))]}),w("button",{type:"submit",children:" Add to routine"})]})})]}),w("div",{className:"Item-exercise__area2",children:s.muscles&&s.muscles.map(y=>P("span",{children:[y," "]},`${y}${s.id}`))}),s.linkImage&&w(b3,{typeClass:"Item-exercise",exerciseItem:s}),w("dialog",{ref:l,children:w(x3,{exercise:s,closeModal:c},m)})]},s.id)},M3=()=>{const{exerciseList:t=[]}=T.useContext(De)||{},e=T.useRef(null);return w("div",{className:"main-columns-divide__main-area",children:P("div",{className:"main-exercises",children:[w("h2",{children:"All Exercises"}),P("span",{className:"button-with-text",onClick:()=>{var i;(i=e.current)==null||i.showModal()},children:[w(Ce,{icon:BT})," New Exercise"]}),w("dialog",{ref:e,children:w(P3,{closeModal:()=>{var i;(i=e.current)==null||i.close()}})}),w("ul",{className:"all-exercises-list",children:t.map(i=>w(O3,{exercise:i},i.id))})]})})},L3=t=>{const{myRoutines:e=[],setMyRoutines:n=()=>{},isLoggedIn:r}=T.useContext(De)||{},{closeModal:i}=t,[s,o]=ke.useState(""),[a,l]=ke.useState("");ke.useState("");const[u,c]=ke.useState(""),h=T.useRef(null),d=y=>{var _;y.preventDefault(),m(s,u),o(""),l(""),c(""),(_=h.current)==null||_.reset(),i()},m=async(y,_)=>{var f;const v={routineID:Kc(),routineDetails:a,isEditing:!1,routineName:y,routineImage:_,routineCompletion:[],routineExercises:[],routineCreator:((f=ye.currentUser)==null?void 0:f.email)||""};if(n([...e,v]),r)try{const p=mr(Fe,"myExercises"),g=`routine-${v.routineID}`,E=kt(p,g);await Xm(E,v),console.log("Sending routine to Firebase")}catch(p){console.log(p)}};return T.useEffect(()=>{localStorage.setItem("myRoutines",JSON.stringify(e))},[e]),P("form",{onSubmit:d,className:"exerciseAddForm",ref:h,children:[w("input",{type:"text",value:s,placeholder:"Routine name",onChange:y=>o(y.target.value)}),w("button",{type:"submit",children:"Add Routine"}),w("button",{type:"reset",onClick:i,children:"Cancel"}),w("input",{type:"text",value:u,placeholder:"Image url",onChange:y=>c(y.target.value)}),w("textarea",{value:a,placeholder:"Description",onChange:y=>l(y.target.value)})]})},V3=()=>{const{myRoutines:t=[]}=T.useContext(De)||{},e=As(),n=T.useRef(null),r=()=>{var a;(a=n.current)==null||a.showModal()},i=()=>{var a;(a=n.current)==null||a.close()},[s,o]=T.useState(!1);return T.useEffect(()=>{o(!e.pathname.includes("/routine/"))},[e]),w("div",{className:"main-columns-divide__main-area",children:P("div",{className:"main-exercises",children:[w("h2",{children:"My Routines"}),s&&P(mn,{children:[P("span",{className:"button-with-text",onClick:r,children:[w(Ce,{icon:BT})," New Routine"]}),w("dialog",{ref:n,children:w(L3,{closeModal:i})})]}),t.map(a=>w(Bu,{to:`routine/${a.routineID}`,children:w("div",{style:{display:"flex",justifyContent:"space-between",margin:"10px 5px",backgroundColor:"#efc177",padding:"10px 10px",border:"1px solid #ccc",borderRadius:"5px"},children:a.routineName})},`routine-${a.routineName}`))]})})},F3=t=>{const{myRoutines:e=[],setMyRoutines:n=()=>{},isLoggedIn:r}=T.useContext(De)||{},{exerciseID:i,routineID:s}=t;return w("button",{type:"button",onClick:async()=>{const a={setCompleted:!1,reps:0,weight:0,distance:0,time:0},l=e.map(u=>u.routineID===s?{...u,routineExercises:u.routineExercises.map(c=>c.individualMyExerciseID===i?{...c,sets:[...c.sets,a]}:c)}:u);if(n(l),r)try{const u=kt(Fe,"myExercises",`routine-${s}`),c=await Dn(u);if(c.exists()){const d=c.data().routineExercises.map(m=>m.individualMyExerciseID===i?{...m,sets:[...m.sets,a]}:m);await On(u,{routineExercises:d}),console.log("Set added to the exercise in Firebase")}}catch(u){console.error("Error updating exercise sets:",u)}},children:"+"})},$3=t=>{const{myRoutines:e=[],setMyRoutines:n=()=>{},isLoggedIn:r}=T.useContext(De)||{},{exerciseID:i,routineID:s}=t;return w("button",{type:"button",onClick:async()=>{const a=e.map(l=>l.routineID===s?{...l,routineExercises:l.routineExercises.map(u=>u.individualMyExerciseID===i?{...u,sets:u.sets.slice(0,-1)}:u)}:l);if(n(a),r)try{const l=kt(Fe,"myExercises",`routine-${s}`),u=await Dn(l);if(u.exists()){const c=u.data(),h=c.routineExercises.map(m=>m.individualMyExerciseID===i?{...m,sets:m.sets.slice(0,-1)}:m),d={...c,routineExercises:h};await On(l,d),console.log("Set removed from the exercise in Firebase")}}catch(l){console.error("Error updating exercise sets:",l)}},children:"-"})},U3=t=>{const{myRoutines:e=[],setMyRoutines:n=()=>{},isLoggedIn:r}=T.useContext(De)||{},{item:i,index:s,routineID:o,exerciseID:a,type:l}=t,u=d=>{n(m=>m.map(y=>y.routineID===o?{...y,routineExercises:y.routineExercises.map(_=>_.individualMyExerciseID===a?{..._,sets:d}:_)}:y))},c=async(d,m)=>{var _,v;const y=(v=(_=e.find(f=>f.routineID===o))==null?void 0:_.routineExercises.find(f=>f.individualMyExerciseID===a))==null?void 0:v.sets.map((f,p)=>p===s?{...f,[m]:d}:f);if(y&&(u(y),r))try{const f=kt(Fe,"myExercises",`routine-${o}`),p=await Dn(f);if(p.exists()){const E=p.data().routineExercises.map(I=>I.individualMyExerciseID===a?{...I,sets:y}:I);await On(f,{routineExercises:E}),console.log("Exercise sets updated in Firebase")}}catch(f){console.error("Error updating exercise sets:",f)}},h=async d=>{const{checked:m}=d.target,y=e.map(_=>_.routineID===o?{..._,routineExercises:_.routineExercises.map(v=>v.individualMyExerciseID===a?{...v,sets:v.sets.map((f,p)=>p===s?{...f,setCompleted:m}:f)}:v)}:_);if(n(y),r)try{const _=kt(Fe,"myExercises",`routine-${o}`),v=await Dn(_);if(v.exists()){const p=v.data().routineExercises.map(g=>g.individualMyExerciseID===a?{...g,sets:g.sets.map((E,I)=>I===s?{...E,setCompleted:m}:E)}:g);await On(_,{routineExercises:p}),console.log("Exercise sets updated in Firebase")}}catch(_){console.error("Error updating exercise sets:",_)}};return T.useEffect(()=>{localStorage.setItem("myRoutines",JSON.stringify(e))},[e]),P("div",{className:"item-my-exercise__area2__form__part2__set",children:[w("input",{type:"checkbox",name:"isCompleted",id:"isCompleted",checked:i.setCompleted,onChange:h}),(l==="KDT"||l==="RPT"||l==="KRP")&&P("div",{className:"mesurer",children:[w("div",{className:"mesurer__compare-old-new",children:w("input",{type:"number",inputMode:"numeric",name:"reps",id:"reps",value:i.reps,onChange:d=>c(parseInt(d.target.value,10),"reps")})}),w("label",{htmlFor:"reps",children:"Reps"})]}),(l==="Cardio"||l==="Stretch")&&P("div",{className:"mesurer",children:[w("div",{className:"mesurer__compare-old-new",children:w("input",{type:"number",inputMode:"numeric",name:"time",id:"time",value:i.time,onChange:d=>c(parseInt(d.target.value,10),"time")})}),w("label",{htmlFor:"time",children:w(Ce,{icon:w3})})]}),l==="Cardio"&&P("div",{className:"mesurer",children:[w("div",{className:"mesurer__compare-old-new",children:w("input",{type:"number",inputMode:"numeric",name:"distance",id:"distance",value:i.distance,onChange:d=>c(parseInt(d.target.value,10),"distance")})}),w("label",{htmlFor:"distance",children:"Km"})]}),(l==="KDT"||l==="RPT"||l==="KRP")&&P("div",{className:"mesurer",children:[w("div",{className:"mesurer__compare-old-new",children:w("input",{type:"number",inputMode:"numeric",name:"weight",id:"weight",value:i.weight,onChange:d=>c(parseInt(d.target.value,10),"weight")})}),w("label",{htmlFor:"weight",children:w(Ce,{icon:v3})})]})]})},z3=t=>{const{myRoutines:e=[],setMyRoutines:n=()=>{},doneActivities:r=[],setDoneActivities:i=()=>{},isLoggedIn:s}=T.useContext(De)||{},{exerciseItem:o,routineID:a}=t,l=async(h,d)=>{var _;const m=e.map(v=>{if(v.routineID===h){const f=v.routineExercises.filter(p=>p.individualMyExerciseID!==d);return{...v,routineExercises:f}}else return v});if(n(m),s)try{console.log("deleting from Firebase: MyExercises");const v=(_=ye.currentUser)==null?void 0:_.email,f=mo(mr(Fe,"allExercises"),Jt("myExUserCreator","==",v),Jt("id","==",d));(await go(f)).docs.forEach(async g=>{await Jm(g.ref)})}catch(v){console.log(v)}const y=r.slice().reverse().findIndex(v=>v.doneExerciseID===d);if(y!==-1){const v=r[r.length-y-1];i(r.filter(f=>f!==v))}c()},u=rg(),c=()=>{u(-1)};return T.useEffect(()=>{localStorage.setItem("myRoutines",JSON.stringify(e))},[e]),w(mn,{children:o&&P("button",{onClick:()=>l&&l(a,o.individualMyExerciseID),children:["Delete from Routine ",w(Ce,{icon:jT})]})})},j3="/gym-app/assets/stretching-f9095271.png",B3=()=>{const{exerciseList:t=[],myRoutines:e=[],setMyRoutines:n=()=>{}}=T.useContext(De)||{},{myExerciseID:r}=sT();let i;e&&e.forEach(_=>{var v;(v=_.routineExercises)==null||v.forEach(f=>{f.individualMyExerciseID===r&&(i=f)})});const s=t.find(_=>_.id===(i==null?void 0:i.allExercisesUniqueID)),[o,a]=T.useState(!1),[l,u]=T.useState(i==null?void 0:i.objective),c=async()=>{const _=e.map(v=>{if(v.routineID===(i==null?void 0:i.routine)){const f=v.routineExercises.map(p=>p.individualMyExerciseID===(i==null?void 0:i.individualMyExerciseID)?{...p,objective:l}:p);return{...v,routineExercises:f}}return v});if(n(_),a(!1),i)try{const v=kt(Fe,"myExercises",`routine-${i.routine}`),f=await Dn(v);if(f.exists()){const p=f.data().routineExercises.map(g=>g.individualMyExerciseID===(i==null?void 0:i.individualMyExerciseID)?{...g,objective:l}:g);await On(v,{routineExercises:p}),console.log("Exercise objective updated in Firebase")}}catch(v){console.log("Error updating exercise objective in Firebase:",v)}},h=async _=>{const v=_.target.value,f=e.map(p=>{if(p.routineID===(i==null?void 0:i.routine)){const g=p.routineExercises.map(E=>E.individualMyExerciseID===(i==null?void 0:i.individualMyExerciseID)?{...E,type:v}:E);return{...p,routineExercises:g}}return p});if(n(f),i)try{const p=kt(Fe,"myExercises",`routine-${i.routine}`),g=await Dn(p);if(g.exists()){const E=g.data().routineExercises.map(I=>I.individualMyExerciseID===(i==null?void 0:i.individualMyExerciseID)?{...I,type:v}:I);await On(p,{routineExercises:E}),console.log("Exercise type updated in Firebase")}}catch(p){console.log("Error updating exercise type in Firebase:",p)}},d=(i==null?void 0:i.sets)||[],m=rg();return w(mn,{children:w("div",{className:"main-columns-divide__main-area",children:P("div",{className:"main-exercises",children:[P("div",{className:"PageExerciseDetails-header",children:[w(Ce,{icon:_3,onClick:()=>{m(-1)}}),s&&w("h2",{children:s.name})]}),P("div",{className:"page-exercise",children:[P("div",{className:"page-exercise__area1",children:[w("div",{className:"page-exercise__area1__image",children:w("img",{src:(s==null?void 0:s.linkImage)===""?j3:s==null?void 0:s.linkImage,alt:s==null?void 0:s.name})}),P("div",{className:"page-exercise__area1__general-details",children:[P("div",{className:"details-muscle",children:[" ",s==null?void 0:s.muscles.map(_=>w("p",{children:_},_))]}),w("p",{className:"details-description",children:s==null?void 0:s.details})]})]}),P("form",{className:"page-exercise__area2",children:[w("div",{className:"page-exercise__area2__objective",children:o?P(mn,{children:[w("textarea",{value:l,onChange:_=>u(_.target.value)}),w(Ce,{icon:ql,onClick:()=>c()})]}):(i==null?void 0:i.objective)!==""?P(mn,{children:[" ",P("p",{children:[w("b",{children:"Objective:"})," ",i==null?void 0:i.objective," "]})," ",w(Ce,{icon:ql,onClick:()=>a(!o)})]}):P("p",{children:[w("b",{children:"Objective:"})," No objective set..."," ",w(Ce,{icon:ql,onClick:()=>a(!o)})]})}),P("div",{className:"page-exercise__area2__sets",children:[P("div",{className:"page-exercise__area2__sets__controls",children:[w("div",{className:"page-exercise__area2__sets__controls__selectType",children:P("select",{name:"workout-type",id:"workout-type",value:i==null?void 0:i.type,onChange:h,children:[w("option",{value:"Cardio",children:"Cardio"}),w("option",{value:"RPT",children:"RPT"}),w("option",{value:"KRP",children:"KRP"}),w("option",{value:"KDT",children:"KDT"}),w("option",{value:"Stretch",children:"Stretch"})]})}),w("div",{className:"page-exercise__area2__sets__controls__moreOrLess",children:(i==null?void 0:i.routine)&&(i==null?void 0:i.individualMyExerciseID)&&P(mn,{children:[w(F3,{exerciseID:i.individualMyExerciseID,routineID:i.routine}),w($3,{exerciseID:i.individualMyExerciseID,routineID:i.routine})]})})]}),w("div",{className:"page-exercise__area2__sets__sets",children:(i==null?void 0:i.routine)&&(i==null?void 0:i.individualMyExerciseID)&&(d==null?void 0:d.map((_,v)=>w(U3,{item:_,type:(i==null?void 0:i.type)||"",index:v,routineID:(i==null?void 0:i.routine)||"",exerciseID:(i==null?void 0:i.individualMyExerciseID)||""},`item-set-${v}-${i==null?void 0:i.individualMyExerciseID}`)))})]})]})]}),w(z3,{exerciseItem:i,routineID:(i==null?void 0:i.routine)||""})]})})})},H3=t=>{var l;const{exerciseList:e=[],myRoutines:n=[]}=T.useContext(De)||{},{exerciseItem:r}=t,i=r.sets.length,s=((l=r.sets.filter(u=>u.setCompleted===!0))==null?void 0:l.length)||0,o=e.find(u=>u.id===r.allExercisesUniqueID),a=window.location.href;return T.useEffect(()=>{localStorage.setItem("todosLocal",JSON.stringify("myRoutines"))},[n]),w(Bu,{to:{pathname:`/myexerciseDetails/${r.individualMyExerciseID}`,state:{prevPage:a}},children:w("li",{className:"item-my-exercise",children:P("div",{className:"item-my-exercise__area1",style:{background:s===i?"#5fe782":"##ffe4c4"},children:[w("div",{className:"item-my-exercise__area1__textNimage",children:P("h2",{children:[o==null?void 0:o.name," ",s,"/",i," ",s===i?w(Ce,{icon:E3}):null]})}),w("div",{className:"item-my-exercise__area1__muscles",children:(o==null?void 0:o.muscles)&&(o==null?void 0:o.muscles.map(u=>P("span",{children:[" ",u," "]},`muscles-${u}-${r.individualMyExerciseID}`)))}),w(Ce,{icon:y3})]})},`edit-my-item-${r.individualMyExerciseID}-${o==null?void 0:o.name}`)},`exercise-details-${r.individualMyExerciseID}`)},W3=t=>{const{myRoutines:e=[],setMyRoutines:n=()=>{},isLoggedIn:r}=T.useContext(De)||{},{routineID:i}=t,s=async o=>{const a=e.filter(l=>l.routineID!==o);if(localStorage.setItem("myRoutines",JSON.stringify(a)),n(a),r)try{const l=kt(Fe,"myExercises",`routine-${o}`);await Jm(l),console.log("Routine deleted from Firebase")}catch(l){console.error("Error deleting routine from Firebase:",l)}};return w("button",{onClick:()=>s&&s(i),children:"Delete Routine"})},q3=t=>{const{myRoutines:e=[],doneActivities:n=[]}=T.useContext(De)||{},{routineID:r}=t,[i,s]=T.useState([]);T.useEffect(()=>{const m=new Date().toLocaleDateString(),v=n.filter(f=>f.routineID===r&&f.date!==m).map(f=>new Date(f.date)).sort((f,p)=>p.getTime()-f.getTime()).map(f=>f.toLocaleDateString());s(v.slice(0,Math.min(3,v.length)))},[n]);const o=new Map;n.forEach(m=>{if(m.routineID===r){const y=o.get(m.date)||[];y.push(m),o.set(m.date,y)}});const l=i.map(m=>{const y=o.get(m)||[],_=y.reduce((p,g)=>p+g.completedSets,0),v=y.reduce((p,g)=>p+g.totalSets,0),f=v===0?0:_/v*100;return{date:m,progress:f}}).reverse(),u=(m,y)=>{let _=0;const v=e.findIndex(p=>p.routineID===m);return e[v].routineExercises.forEach(p=>{y==="completedSets"?_+=p.sets.filter(g=>g.setCompleted===!0).length:_+=p.sets.length}),_},c=u(r,"completedSets"),h=u(r,"totalSets"),d=Math.round(c/h*100);return P("div",{className:"routine-tracker",children:[l.length>0?l.map((m,y)=>P("div",{className:`progress-bar ${m.date}`,style:{background:`radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(${m.progress===100?"#5fe782":"#d72536"} ${m.progress}%, #b1b2c3 0)`},children:[P("progress",{value:m.progress,"max-content":100,"min-content":0,style:{visibility:"hidden",height:"0",width:"0"},children:[m.progress.toFixed(2),"%"]}),P("p",{className:"progress-bar-date",children:[Math.round(m.progress),"%"]}),w("p",{className:"progress-bar-date__today",children:new Date(m.date).toLocaleDateString(void 0,{month:"short",day:"numeric"})})]},y)):w(mn,{}),P("div",{className:"progress-bar",style:{background:`radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#646cff ${d}%, #b1b2c3 0)`},children:[P("progress",{value:d,"max-content":100,"min-content":0,style:{visibility:"hidden",height:"0",width:"0"},children:[d.toFixed(2),"%"]}),P("p",{className:"progress-bar-date",children:[d,"%"]}),w("p",{className:"progress-bar-date__today",children:"Today"})]},`current-bar-${r}`)]})},K3=t=>{const{myRoutines:e=[]}=T.useContext(De)||{};return w("h3",{children:(r=>{const i=e==null?void 0:e.find(s=>s.routineID===r);return i?i.routineName:"Routine Not Found"})(t.validRoutineID)})},G3=()=>{const{myRoutines:t=[],setMyRoutines:e=()=>{},doneActivities:n=[],setDoneActivities:r=()=>{},isLoggedIn:i}=T.useContext(De)||{},{routineID:s}=sT(),[o,a]=T.useState(""),[l,u]=T.useState(!1),c=s??"",h=t==null?void 0:t.find(g=>g.routineID===c),[d,m]=T.useState(h==null?void 0:h.routineDetails),y=()=>{const g=new Date().toLocaleDateString();console.log("Start Routine Clicked"),a(g),f()},_=(g,E)=>{const I=E.sets.filter(A=>A.setCompleted).length;return{...g,totalSets:E.sets.length,completedSets:I}},v=g=>{var I;return{date:new Date().toLocaleDateString(),id:Kc(),doneExerciseID:g.individualMyExerciseID,routineID:c,totalSets:g.sets.length,completedSets:g.sets.filter(A=>A.setCompleted).length,creatorDoneData:((I=ye.currentUser)==null?void 0:I.email)||""}},f=async()=>{const g=new Date().toLocaleDateString(),E=n.map(I=>{if(I.date!==g)return I;const A=h==null?void 0:h.routineExercises.find(k=>k.individualMyExerciseID===I.doneExerciseID);return A&&I.routineID===c&&I.date===g?_(I,A):I});if(h==null||h.routineExercises.forEach(I=>{E.find(k=>k.doneExerciseID===I.individualMyExerciseID&&k.date===g)||E.push(v(I))}),r(E),i)try{const I=mr(Fe,"doneActivities");for(const A of E){const k=`doneData-${A.doneExerciseID}`,x=kt(I,k);await Xm(x,A)}console.log("sending doneData to Firebase")}catch(I){console.log(I)}},p=async()=>{const g=t.map(E=>E.routineID===c?{...E,routineDetails:d||""}:E);if(e(g),i)try{const E=kt(Fe,"myRoutines",`routine-${c}`);(await Dn(E)).exists()&&(await On(E,{routineDetails:d}),console.log("Routine Details Updated"))}catch(E){console.log("not edited"+E)}};return T.useEffect(()=>{localStorage.setItem("localDoneActivities",JSON.stringify(n))},[n]),T.useEffect(()=>{localStorage.setItem("myRoutines",JSON.stringify(t))},[t]),w("div",{className:"main-columns-divide__main-area",children:w("div",{className:"main-exercises",children:P("div",{children:[w(K3,{validRoutineID:c}),w(q3,{routineID:c}),P("div",{className:"start-routine-button",children:[w("button",{onClick:y,children:"Save Routine"}),w("p",{children:"If the routine has not been saved, then it wont be shown on past days"}),l?P("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[" ",w("textarea",{value:d,onChange:g=>{h&&m(g.target.value)}}),w("button",{onClick:()=>{p(),u(!l)},children:"Save Routine Details"})]}):P("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[" ",w("p",{children:h==null?void 0:h.routineDetails})," ",w("button",{onClick:()=>u(!l),children:"Edit Routine Details"})]})]}),w("ul",{className:"all-exercises-list",children:h==null?void 0:h.routineExercises.map(g=>w(H3,{routineID:c,exerciseItem:g},g.individualMyExerciseID))}),w(W3,{routineID:c})]},`key-${c}`)})})},De=T.createContext(void 0);function Q3(){const[t,e]=T.useState(!1),[n,r]=T.useState(!1),[i,s]=T.useState(!1),[o,a]=T.useState(!1),[l,u]=T.useState([]),[c,h]=T.useState([]),[d,m]=ke.useState([]);T.useEffect(()=>{e(!0),setTimeout(()=>{e(!1)},4e3);const _=ye.onAuthStateChanged(v=>{s(v?!v.isAnonymous:!1)});return()=>{_()}},[]),T.useEffect(()=>{const _=async()=>{try{if(ye.currentUser){const p=ye.currentUser.email,g=mo(mr(Fe,"allExercises"),Jt("userCreator","==",p),Jt("userCreator","!=","")),E=await go(g),I=[],A=new Set;E.docs.forEach(k=>{const x=k.data();A.has(x.id)||(I.push(x),A.add(x.id))}),u(I)}}catch(p){console.log(p)}},v=async()=>{try{if(ye.currentUser){const p=ye.currentUser.email,g=mo(mr(Fe,"myExercises"),Jt("routineCreator","==",p),Jt("routineCreator","!=","")),E=await go(g),I=[],A=new Set;E.docs.forEach(k=>{const x=k.data();A.has(x.routineID)||(I.push(x),A.add(x.routineID))}),h(I)}}catch(p){console.log(p)}},f=async()=>{try{if(ye.currentUser){const p=ye.currentUser.email,g=mo(mr(Fe,"doneActivities"),Jt("creatorDoneData","==",p),Jt("creatorDoneData","!=","")),E=await go(g),I=[],A=new Set;E.docs.forEach(k=>{const x=k.data();A.has(x.id)||(I.push(x),A.add(x.id))}),m(I)}}catch(p){console.log(p)}};if(i)_(),v(),f();else{const p=localStorage.getItem("exerciseList")||"[]",g=localStorage.getItem("myRoutines")||"[]",E=localStorage.getItem("localDoneActivities")||"[]";try{u(JSON.parse(p)),h(JSON.parse(g)),m(JSON.parse(E))}catch(I){console.log("Error parsing stored Exercise data:",I)}}},[i]);const y=()=>{r(!n)};return T.useEffect(()=>{const _=GC(ye,v=>{a(!!v)});return()=>_()},[]),w(De.Provider,{value:{exerciseList:l,setExerciseList:u,myRoutines:c,setMyRoutines:h,doneActivities:d,setDoneActivities:m,isLoggedIn:i},children:w("div",{className:"App",children:t?w("div",{className:"loading",children:P("div",{className:"loading-box",children:[w("svg",{xmlns:"http://www.w3.org/2000/svg",width:"180",height:"180",viewBox:"0 0 24 24",children:w("path",{fill:"#e5bf16",d:"M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z",children:w("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})})}),w("img",{className:"django-loading",src:yD,alt:"django"})]})}):w(mn,{children:o?w(hO,{basename:"/gym-app/",children:P("div",{className:"main-columns-divide",children:[w("button",{className:"nav-menu-responsive",onClick:y,children:"Menu"}),w(T3,{showMenu:n,showMenuFunction:y}),P(sO,{children:[w(Ys,{path:"/",element:w(V3,{})}),w(Ys,{path:"/all-exercises",element:w(M3,{})}),w(Ys,{path:"/myexerciseDetails/:myExerciseID",element:w(B3,{})}),w(Ys,{path:"/routine/:routineID",element:w(G3,{})})]})]})}):w(gD,{})})})})}Yh.createRoot(document.getElementById("root")).render(w(ke.StrictMode,{children:w(Q3,{})}));
