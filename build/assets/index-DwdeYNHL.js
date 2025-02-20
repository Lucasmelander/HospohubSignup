function Hv(t,r){for(var o=0;o<r.length;o++){const a=r[o];if(typeof a!="string"&&!Array.isArray(a)){for(const u in a)if(u!=="default"&&!(u in t)){const h=Object.getOwnPropertyDescriptor(a,u);h&&Object.defineProperty(t,u,h.get?h:{enumerable:!0,get:()=>a[u]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(u){if(u.ep)return;u.ep=!0;const h=o(u);fetch(u.href,h)}})();function ad(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qu={exports:{}},xo={},Gu={exports:{}},he={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function qv(){if(Fp)return he;Fp=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function w(b){return b===null||typeof b!="object"?null:(b=v&&b[v]||b["@@iterator"],typeof b=="function"?b:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function D(b,z,ae){this.props=b,this.context=z,this.refs=T,this.updater=ae||k}D.prototype.isReactComponent={},D.prototype.setState=function(b,z){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,z,"setState")},D.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function F(){}F.prototype=D.prototype;function I(b,z,ae){this.props=b,this.context=z,this.refs=T,this.updater=ae||k}var L=I.prototype=new F;L.constructor=I,E(L,D.prototype),L.isPureReactComponent=!0;var N=Array.isArray,q=Object.prototype.hasOwnProperty,K={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function ne(b,z,ae){var le,de={},ue=null,ve=null;if(z!=null)for(le in z.ref!==void 0&&(ve=z.ref),z.key!==void 0&&(ue=""+z.key),z)q.call(z,le)&&!G.hasOwnProperty(le)&&(de[le]=z[le]);var pe=arguments.length-2;if(pe===1)de.children=ae;else if(1<pe){for(var me=Array(pe),_e=0;_e<pe;_e++)me[_e]=arguments[_e+2];de.children=me}if(b&&b.defaultProps)for(le in pe=b.defaultProps,pe)de[le]===void 0&&(de[le]=pe[le]);return{$$typeof:t,type:b,key:ue,ref:ve,props:de,_owner:K.current}}function ce(b,z){return{$$typeof:t,type:b.type,key:z,ref:b.ref,props:b.props,_owner:b._owner}}function Me(b){return typeof b=="object"&&b!==null&&b.$$typeof===t}function at(b){var z={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(ae){return z[ae]})}var Ve=/\/+/g;function Le(b,z){return typeof b=="object"&&b!==null&&b.key!=null?at(""+b.key):z.toString(36)}function be(b,z,ae,le,de){var ue=typeof b;(ue==="undefined"||ue==="boolean")&&(b=null);var ve=!1;if(b===null)ve=!0;else switch(ue){case"string":case"number":ve=!0;break;case"object":switch(b.$$typeof){case t:case r:ve=!0}}if(ve)return ve=b,de=de(ve),b=le===""?"."+Le(ve,0):le,N(de)?(ae="",b!=null&&(ae=b.replace(Ve,"$&/")+"/"),be(de,z,ae,"",function(_e){return _e})):de!=null&&(Me(de)&&(de=ce(de,ae+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(Ve,"$&/")+"/")+b)),z.push(de)),1;if(ve=0,le=le===""?".":le+":",N(b))for(var pe=0;pe<b.length;pe++){ue=b[pe];var me=le+Le(ue,pe);ve+=be(ue,z,ae,me,de)}else if(me=w(b),typeof me=="function")for(b=me.call(b),pe=0;!(ue=b.next()).done;)ue=ue.value,me=le+Le(ue,pe++),ve+=be(ue,z,ae,me,de);else if(ue==="object")throw z=String(b),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return ve}function Qe(b,z,ae){if(b==null)return b;var le=[],de=0;return be(b,le,"","",function(ue){return z.call(ae,ue,de++)}),le}function xe(b){if(b._status===-1){var z=b._result;z=z(),z.then(function(ae){(b._status===0||b._status===-1)&&(b._status=1,b._result=ae)},function(ae){(b._status===0||b._status===-1)&&(b._status=2,b._result=ae)}),b._status===-1&&(b._status=0,b._result=z)}if(b._status===1)return b._result.default;throw b._result}var ge={current:null},H={transition:null},X={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:H,ReactCurrentOwner:K};function Y(){throw Error("act(...) is not supported in production builds of React.")}return he.Children={map:Qe,forEach:function(b,z,ae){Qe(b,function(){z.apply(this,arguments)},ae)},count:function(b){var z=0;return Qe(b,function(){z++}),z},toArray:function(b){return Qe(b,function(z){return z})||[]},only:function(b){if(!Me(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},he.Component=D,he.Fragment=o,he.Profiler=u,he.PureComponent=I,he.StrictMode=a,he.Suspense=m,he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,he.act=Y,he.cloneElement=function(b,z,ae){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var le=E({},b.props),de=b.key,ue=b.ref,ve=b._owner;if(z!=null){if(z.ref!==void 0&&(ue=z.ref,ve=K.current),z.key!==void 0&&(de=""+z.key),b.type&&b.type.defaultProps)var pe=b.type.defaultProps;for(me in z)q.call(z,me)&&!G.hasOwnProperty(me)&&(le[me]=z[me]===void 0&&pe!==void 0?pe[me]:z[me])}var me=arguments.length-2;if(me===1)le.children=ae;else if(1<me){pe=Array(me);for(var _e=0;_e<me;_e++)pe[_e]=arguments[_e+2];le.children=pe}return{$$typeof:t,type:b.type,key:de,ref:ue,props:le,_owner:ve}},he.createContext=function(b){return b={$$typeof:d,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:h,_context:b},b.Consumer=b},he.createElement=ne,he.createFactory=function(b){var z=ne.bind(null,b);return z.type=b,z},he.createRef=function(){return{current:null}},he.forwardRef=function(b){return{$$typeof:p,render:b}},he.isValidElement=Me,he.lazy=function(b){return{$$typeof:x,_payload:{_status:-1,_result:b},_init:xe}},he.memo=function(b,z){return{$$typeof:g,type:b,compare:z===void 0?null:z}},he.startTransition=function(b){var z=H.transition;H.transition={};try{b()}finally{H.transition=z}},he.unstable_act=Y,he.useCallback=function(b,z){return ge.current.useCallback(b,z)},he.useContext=function(b){return ge.current.useContext(b)},he.useDebugValue=function(){},he.useDeferredValue=function(b){return ge.current.useDeferredValue(b)},he.useEffect=function(b,z){return ge.current.useEffect(b,z)},he.useId=function(){return ge.current.useId()},he.useImperativeHandle=function(b,z,ae){return ge.current.useImperativeHandle(b,z,ae)},he.useInsertionEffect=function(b,z){return ge.current.useInsertionEffect(b,z)},he.useLayoutEffect=function(b,z){return ge.current.useLayoutEffect(b,z)},he.useMemo=function(b,z){return ge.current.useMemo(b,z)},he.useReducer=function(b,z,ae){return ge.current.useReducer(b,z,ae)},he.useRef=function(b){return ge.current.useRef(b)},he.useState=function(b){return ge.current.useState(b)},he.useSyncExternalStore=function(b,z,ae){return ge.current.useSyncExternalStore(b,z,ae)},he.useTransition=function(){return ge.current.useTransition()},he.version="18.3.1",he}var zp;function ld(){return zp||(zp=1,Gu.exports=qv()),Gu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function Gv(){if(Np)return xo;Np=1;var t=ld(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function d(p,m,g){var x,v={},w=null,k=null;g!==void 0&&(w=""+g),m.key!==void 0&&(w=""+m.key),m.ref!==void 0&&(k=m.ref);for(x in m)a.call(m,x)&&!h.hasOwnProperty(x)&&(v[x]=m[x]);if(p&&p.defaultProps)for(x in m=p.defaultProps,m)v[x]===void 0&&(v[x]=m[x]);return{$$typeof:r,type:p,key:w,ref:k,props:v,_owner:u.current}}return xo.Fragment=o,xo.jsx=d,xo.jsxs=d,xo}var _p;function Yv(){return _p||(_p=1,qu.exports=Gv()),qu.exports}var s=Yv(),R=ld();const Ge=ad(R),Qv=Hv({__proto__:null,default:Ge},[R]);var ia={},Yu={exports:{}},bt={},Qu={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function Kv(){return Op||(Op=1,function(t){function r(H,X){var Y=H.length;H.push(X);e:for(;0<Y;){var b=Y-1>>>1,z=H[b];if(0<u(z,X))H[b]=X,H[Y]=z,Y=b;else break e}}function o(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var X=H[0],Y=H.pop();if(Y!==X){H[0]=Y;e:for(var b=0,z=H.length,ae=z>>>1;b<ae;){var le=2*(b+1)-1,de=H[le],ue=le+1,ve=H[ue];if(0>u(de,Y))ue<z&&0>u(ve,de)?(H[b]=ve,H[ue]=Y,b=ue):(H[b]=de,H[le]=Y,b=le);else if(ue<z&&0>u(ve,Y))H[b]=ve,H[ue]=Y,b=ue;else break e}}return X}function u(H,X){var Y=H.sortIndex-X.sortIndex;return Y!==0?Y:H.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var h=performance;t.unstable_now=function(){return h.now()}}else{var d=Date,p=d.now();t.unstable_now=function(){return d.now()-p}}var m=[],g=[],x=1,v=null,w=3,k=!1,E=!1,T=!1,D=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(H){for(var X=o(g);X!==null;){if(X.callback===null)a(g);else if(X.startTime<=H)a(g),X.sortIndex=X.expirationTime,r(m,X);else break;X=o(g)}}function N(H){if(T=!1,L(H),!E)if(o(m)!==null)E=!0,xe(q);else{var X=o(g);X!==null&&ge(N,X.startTime-H)}}function q(H,X){E=!1,T&&(T=!1,F(ne),ne=-1),k=!0;var Y=w;try{for(L(X),v=o(m);v!==null&&(!(v.expirationTime>X)||H&&!at());){var b=v.callback;if(typeof b=="function"){v.callback=null,w=v.priorityLevel;var z=b(v.expirationTime<=X);X=t.unstable_now(),typeof z=="function"?v.callback=z:v===o(m)&&a(m),L(X)}else a(m);v=o(m)}if(v!==null)var ae=!0;else{var le=o(g);le!==null&&ge(N,le.startTime-X),ae=!1}return ae}finally{v=null,w=Y,k=!1}}var K=!1,G=null,ne=-1,ce=5,Me=-1;function at(){return!(t.unstable_now()-Me<ce)}function Ve(){if(G!==null){var H=t.unstable_now();Me=H;var X=!0;try{X=G(!0,H)}finally{X?Le():(K=!1,G=null)}}else K=!1}var Le;if(typeof I=="function")Le=function(){I(Ve)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Qe=be.port2;be.port1.onmessage=Ve,Le=function(){Qe.postMessage(null)}}else Le=function(){D(Ve,0)};function xe(H){G=H,K||(K=!0,Le())}function ge(H,X){ne=D(function(){H(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){E||k||(E=!0,xe(q))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ce=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return o(m)},t.unstable_next=function(H){switch(w){case 1:case 2:case 3:var X=3;break;default:X=w}var Y=w;w=X;try{return H()}finally{w=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Y=w;w=H;try{return X()}finally{w=Y}},t.unstable_scheduleCallback=function(H,X,Y){var b=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?b+Y:b):Y=b,H){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=Y+z,H={id:x++,callback:X,priorityLevel:H,startTime:Y,expirationTime:z,sortIndex:-1},Y>b?(H.sortIndex=Y,r(g,H),o(m)===null&&H===o(g)&&(T?(F(ne),ne=-1):T=!0,ge(N,Y-b))):(H.sortIndex=z,r(m,H),E||k||(E=!0,xe(q))),H},t.unstable_shouldYield=at,t.unstable_wrapCallback=function(H){var X=w;return function(){var Y=w;w=X;try{return H.apply(this,arguments)}finally{w=Y}}}}(Ku)),Ku}var Bp;function Xv(){return Bp||(Bp=1,Qu.exports=Kv()),Qu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Zv(){if($p)return bt;$p=1;var t=ld(),r=Xv();function o(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,u={};function h(e,n){d(e,n),d(e+"Capture",n)}function d(e,n){for(u[e]=n,e=0;e<n.length;e++)a.add(n[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function w(e){return m.call(v,e)?!0:m.call(x,e)?!1:g.test(e)?v[e]=!0:(x[e]=!0,!1)}function k(e,n,i,l){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E(e,n,i,l){if(n===null||typeof n>"u"||k(e,n,i,l))return!0;if(l)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function T(e,n,i,l,c,f,y){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=f,this.removeEmptyString=y}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new T(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];D[n]=new T(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new T(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new T(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new T(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new T(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new T(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new T(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new T(e,5,!1,e.toLowerCase(),null,!1,!1)});var F=/[\-:]([a-z])/g;function I(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(F,I);D[n]=new T(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(F,I);D[n]=new T(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(F,I);D[n]=new T(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new T(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new T(e,1,!1,e.toLowerCase(),null,!0,!0)});function L(e,n,i,l){var c=D.hasOwnProperty(n)?D[n]:null;(c!==null?c.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(E(n,i,c,l)&&(i=null),l||c===null?w(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):c.mustUseProperty?e[c.propertyName]=i===null?c.type===3?!1:"":i:(n=c.attributeName,l=c.attributeNamespace,i===null?e.removeAttribute(n):(c=c.type,i=c===3||c===4&&i===!0?"":""+i,l?e.setAttributeNS(l,n,i):e.setAttribute(n,i))))}var N=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),K=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ce=Symbol.for("react.profiler"),Me=Symbol.for("react.provider"),at=Symbol.for("react.context"),Ve=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),Qe=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),H=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,b;function z(e){if(b===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);b=n&&n[1]||""}return`
`+b+e}var ae=!1;function le(e,n){if(!e||ae)return"";ae=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(V){var l=V}Reflect.construct(e,[],n)}else{try{n.call()}catch(V){l=V}e.call(n.prototype)}else{try{throw Error()}catch(V){l=V}e()}}catch(V){if(V&&l&&typeof V.stack=="string"){for(var c=V.stack.split(`
`),f=l.stack.split(`
`),y=c.length-1,j=f.length-1;1<=y&&0<=j&&c[y]!==f[j];)j--;for(;1<=y&&0<=j;y--,j--)if(c[y]!==f[j]){if(y!==1||j!==1)do if(y--,j--,0>j||c[y]!==f[j]){var S=`
`+c[y].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=y&&0<=j);break}}}finally{ae=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?z(e):""}function de(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=le(e.type,!1),e;case 11:return e=le(e.type.render,!1),e;case 1:return e=le(e.type,!0),e;default:return""}}function ue(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case K:return"Portal";case ce:return"Profiler";case ne:return"StrictMode";case Le:return"Suspense";case be:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case at:return(e.displayName||"Context")+".Consumer";case Me:return(e._context.displayName||"Context")+".Provider";case Ve:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Qe:return n=e.displayName||null,n!==null?n:ue(e.type)||"Memo";case xe:n=e._payload,e=e._init;try{return ue(e(n))}catch{}}return null}function ve(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ue(n);case 8:return n===ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function me(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _e(e){var n=me(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var c=i.get,f=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){l=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return l},setValue:function(y){l=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function nt(e){e._valueTracker||(e._valueTracker=_e(e))}function It(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=me(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ja(e,n){var i=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function $d(e,n){var i=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;i=pe(n.value!=null?n.value:i),e._wrapperState={initialChecked:l,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ud(e,n){n=n.checked,n!=null&&L(e,"checked",n,!1)}function el(e,n){Ud(e,n);var i=pe(n.value),l=n.type;if(i!=null)l==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?tl(e,n.type,i):n.hasOwnProperty("defaultValue")&&tl(e,n.type,pe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Wd(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function tl(e,n,i){(n!=="number"||Qo(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var Ii=Array.isArray;function Fr(e,n,i,l){if(e=e.options,n){n={};for(var c=0;c<i.length;c++)n["$"+i[c]]=!0;for(i=0;i<e.length;i++)c=n.hasOwnProperty("$"+e[i].value),e[i].selected!==c&&(e[i].selected=c),c&&l&&(e[i].defaultSelected=!0)}else{for(i=""+pe(i),n=null,c=0;c<e.length;c++){if(e[c].value===i){e[c].selected=!0,l&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function nl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hd(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(o(92));if(Ii(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:pe(i)}}function qd(e,n){var i=pe(n.value),l=pe(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),l!=null&&(e.defaultValue=""+l)}function Gd(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Yd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Yd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ko,Qd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,l,c){MSApp.execUnsafeLocalFunction(function(){return e(n,i,l,c)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ko=Ko||document.createElement("div"),Ko.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Mi(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Vi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qy=["Webkit","ms","Moz","O"];Object.keys(Vi).forEach(function(e){Qy.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Vi[n]=Vi[e]})});function Kd(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Vi.hasOwnProperty(e)&&Vi[e]?(""+n).trim():n+"px"}function Xd(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var l=i.indexOf("--")===0,c=Kd(i,n[i],l);i==="float"&&(i="cssFloat"),l?e.setProperty(i,c):e[i]=c}}var Ky=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function il(e,n){if(n){if(Ky[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function ol(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sl=null;function al(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ll=null,zr=null,Nr=null;function Zd(e){if(e=no(e)){if(typeof ll!="function")throw Error(o(280));var n=e.stateNode;n&&(n=vs(n),ll(e.stateNode,e.type,n))}}function Jd(e){zr?Nr?Nr.push(e):Nr=[e]:zr=e}function ef(){if(zr){var e=zr,n=Nr;if(Nr=zr=null,Zd(e),n)for(e=0;e<n.length;e++)Zd(n[e])}}function tf(e,n){return e(n)}function nf(){}var ul=!1;function rf(e,n,i){if(ul)return e(n,i);ul=!0;try{return tf(e,n,i)}finally{ul=!1,(zr!==null||Nr!==null)&&(nf(),ef())}}function Di(e,n){var i=e.stateNode;if(i===null)return null;var l=vs(i);if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,n,typeof i));return i}var cl=!1;if(p)try{var Fi={};Object.defineProperty(Fi,"passive",{get:function(){cl=!0}}),window.addEventListener("test",Fi,Fi),window.removeEventListener("test",Fi,Fi)}catch{cl=!1}function Xy(e,n,i,l,c,f,y,j,S){var V=Array.prototype.slice.call(arguments,3);try{n.apply(i,V)}catch(O){this.onError(O)}}var zi=!1,Xo=null,Zo=!1,dl=null,Zy={onError:function(e){zi=!0,Xo=e}};function Jy(e,n,i,l,c,f,y,j,S){zi=!1,Xo=null,Xy.apply(Zy,arguments)}function ex(e,n,i,l,c,f,y,j,S){if(Jy.apply(this,arguments),zi){if(zi){var V=Xo;zi=!1,Xo=null}else throw Error(o(198));Zo||(Zo=!0,dl=V)}}function nr(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function of(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function sf(e){if(nr(e)!==e)throw Error(o(188))}function tx(e){var n=e.alternate;if(!n){if(n=nr(e),n===null)throw Error(o(188));return n!==e?null:e}for(var i=e,l=n;;){var c=i.return;if(c===null)break;var f=c.alternate;if(f===null){if(l=c.return,l!==null){i=l;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===i)return sf(c),e;if(f===l)return sf(c),n;f=f.sibling}throw Error(o(188))}if(i.return!==l.return)i=c,l=f;else{for(var y=!1,j=c.child;j;){if(j===i){y=!0,i=c,l=f;break}if(j===l){y=!0,l=c,i=f;break}j=j.sibling}if(!y){for(j=f.child;j;){if(j===i){y=!0,i=f,l=c;break}if(j===l){y=!0,l=f,i=c;break}j=j.sibling}if(!y)throw Error(o(189))}}if(i.alternate!==l)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:n}function af(e){return e=tx(e),e!==null?lf(e):null}function lf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=lf(e);if(n!==null)return n;e=e.sibling}return null}var uf=r.unstable_scheduleCallback,cf=r.unstable_cancelCallback,nx=r.unstable_shouldYield,rx=r.unstable_requestPaint,Be=r.unstable_now,ix=r.unstable_getCurrentPriorityLevel,fl=r.unstable_ImmediatePriority,df=r.unstable_UserBlockingPriority,Jo=r.unstable_NormalPriority,ox=r.unstable_LowPriority,ff=r.unstable_IdlePriority,es=null,en=null;function sx(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(es,e,void 0,(e.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:ux,ax=Math.log,lx=Math.LN2;function ux(e){return e>>>=0,e===0?32:31-(ax(e)/lx|0)|0}var ts=64,ns=4194304;function Ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rs(e,n){var i=e.pendingLanes;if(i===0)return 0;var l=0,c=e.suspendedLanes,f=e.pingedLanes,y=i&268435455;if(y!==0){var j=y&~c;j!==0?l=Ni(j):(f&=y,f!==0&&(l=Ni(f)))}else y=i&~c,y!==0?l=Ni(y):f!==0&&(l=Ni(f));if(l===0)return 0;if(n!==0&&n!==l&&!(n&c)&&(c=l&-l,f=n&-n,c>=f||c===16&&(f&4194240)!==0))return n;if(l&4&&(l|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)i=31-$t(n),c=1<<i,l|=e[i],n&=~c;return l}function cx(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dx(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes;0<f;){var y=31-$t(f),j=1<<y,S=c[y];S===-1?(!(j&i)||j&l)&&(c[y]=cx(j,n)):S<=n&&(e.expiredLanes|=j),f&=~j}}function hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hf(){var e=ts;return ts<<=1,!(ts&4194240)&&(ts=64),e}function pl(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function _i(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-$t(n),e[n]=i}function fx(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<i;){var c=31-$t(i),f=1<<c;n[c]=0,l[c]=-1,e[c]=-1,i&=~f}}function ml(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-$t(i),c=1<<l;c&n|e[l]&n&&(e[l]|=n),i&=~c}}var Ce=0;function pf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mf,gl,gf,yf,xf,yl=!1,is=[],bn=null,Cn=null,Pn=null,Oi=new Map,Bi=new Map,Tn=[],hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vf(e,n){switch(e){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Oi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(n.pointerId)}}function $i(e,n,i,l,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:f,targetContainers:[c]},n!==null&&(n=no(n),n!==null&&gl(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function px(e,n,i,l,c){switch(n){case"focusin":return bn=$i(bn,e,n,i,l,c),!0;case"dragenter":return Cn=$i(Cn,e,n,i,l,c),!0;case"mouseover":return Pn=$i(Pn,e,n,i,l,c),!0;case"pointerover":var f=c.pointerId;return Oi.set(f,$i(Oi.get(f)||null,e,n,i,l,c)),!0;case"gotpointercapture":return f=c.pointerId,Bi.set(f,$i(Bi.get(f)||null,e,n,i,l,c)),!0}return!1}function wf(e){var n=rr(e.target);if(n!==null){var i=nr(n);if(i!==null){if(n=i.tag,n===13){if(n=of(i),n!==null){e.blockedOn=n,xf(e.priority,function(){gf(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function os(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=vl(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);sl=l,i.target.dispatchEvent(l),sl=null}else return n=no(i),n!==null&&gl(n),e.blockedOn=i,!1;n.shift()}return!0}function jf(e,n,i){os(e)&&i.delete(n)}function mx(){yl=!1,bn!==null&&os(bn)&&(bn=null),Cn!==null&&os(Cn)&&(Cn=null),Pn!==null&&os(Pn)&&(Pn=null),Oi.forEach(jf),Bi.forEach(jf)}function Ui(e,n){e.blockedOn===n&&(e.blockedOn=null,yl||(yl=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,mx)))}function Wi(e){function n(c){return Ui(c,e)}if(0<is.length){Ui(is[0],e);for(var i=1;i<is.length;i++){var l=is[i];l.blockedOn===e&&(l.blockedOn=null)}}for(bn!==null&&Ui(bn,e),Cn!==null&&Ui(Cn,e),Pn!==null&&Ui(Pn,e),Oi.forEach(n),Bi.forEach(n),i=0;i<Tn.length;i++)l=Tn[i],l.blockedOn===e&&(l.blockedOn=null);for(;0<Tn.length&&(i=Tn[0],i.blockedOn===null);)wf(i),i.blockedOn===null&&Tn.shift()}var _r=N.ReactCurrentBatchConfig,ss=!0;function gx(e,n,i,l){var c=Ce,f=_r.transition;_r.transition=null;try{Ce=1,xl(e,n,i,l)}finally{Ce=c,_r.transition=f}}function yx(e,n,i,l){var c=Ce,f=_r.transition;_r.transition=null;try{Ce=4,xl(e,n,i,l)}finally{Ce=c,_r.transition=f}}function xl(e,n,i,l){if(ss){var c=vl(e,n,i,l);if(c===null)Fl(e,n,l,as,i),vf(e,l);else if(px(c,e,n,i,l))l.stopPropagation();else if(vf(e,l),n&4&&-1<hx.indexOf(e)){for(;c!==null;){var f=no(c);if(f!==null&&mf(f),f=vl(e,n,i,l),f===null&&Fl(e,n,l,as,i),f===c)break;c=f}c!==null&&l.stopPropagation()}else Fl(e,n,l,null,i)}}var as=null;function vl(e,n,i,l){if(as=null,e=al(l),e=rr(e),e!==null)if(n=nr(e),n===null)e=null;else if(i=n.tag,i===13){if(e=of(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return as=e,null}function kf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ix()){case fl:return 1;case df:return 4;case Jo:case ox:return 16;case ff:return 536870912;default:return 16}default:return 16}}var En=null,wl=null,ls=null;function Sf(){if(ls)return ls;var e,n=wl,i=n.length,l,c="value"in En?En.value:En.textContent,f=c.length;for(e=0;e<i&&n[e]===c[e];e++);var y=i-e;for(l=1;l<=y&&n[i-l]===c[f-l];l++);return ls=c.slice(e,1<l?1-l:void 0)}function us(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cs(){return!0}function bf(){return!1}function Pt(e){function n(i,l,c,f,y){this._reactName=i,this._targetInst=c,this.type=l,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var j in e)e.hasOwnProperty(j)&&(i=e[j],this[j]=i?i(f):f[j]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?cs:bf,this.isPropagationStopped=bf,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=cs)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=cs)},persist:function(){},isPersistent:cs}),n}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Pt(Or),Hi=Y({},Or,{view:0,detail:0}),xx=Pt(Hi),kl,Sl,qi,ds=Y({},Hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qi&&(qi&&e.type==="mousemove"?(kl=e.screenX-qi.screenX,Sl=e.screenY-qi.screenY):Sl=kl=0,qi=e),kl)},movementY:function(e){return"movementY"in e?e.movementY:Sl}}),Cf=Pt(ds),vx=Y({},ds,{dataTransfer:0}),wx=Pt(vx),jx=Y({},Hi,{relatedTarget:0}),bl=Pt(jx),kx=Y({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=Pt(kx),bx=Y({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cx=Pt(bx),Px=Y({},Or,{data:0}),Pf=Pt(Px),Tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lx[e])?!!n[e]:!1}function Cl(){return Rx}var Ax=Y({},Hi,{key:function(e){if(e.key){var n=Tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=us(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cl,charCode:function(e){return e.type==="keypress"?us(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?us(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ix=Pt(Ax),Mx=Y({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=Pt(Mx),Vx=Y({},Hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cl}),Dx=Pt(Vx),Fx=Y({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),zx=Pt(Fx),Nx=Y({},ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_x=Pt(Nx),Ox=[9,13,27,32],Pl=p&&"CompositionEvent"in window,Gi=null;p&&"documentMode"in document&&(Gi=document.documentMode);var Bx=p&&"TextEvent"in window&&!Gi,Ef=p&&(!Pl||Gi&&8<Gi&&11>=Gi),Lf=" ",Rf=!1;function Af(e,n){switch(e){case"keyup":return Ox.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function $x(e,n){switch(e){case"compositionend":return If(n);case"keypress":return n.which!==32?null:(Rf=!0,Lf);case"textInput":return e=n.data,e===Lf&&Rf?null:e;default:return null}}function Ux(e,n){if(Br)return e==="compositionend"||!Pl&&Af(e,n)?(e=Sf(),ls=wl=En=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ef&&n.locale!=="ko"?null:n.data;default:return null}}var Wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Wx[e.type]:n==="textarea"}function Vf(e,n,i,l){Jd(l),n=gs(n,"onChange"),0<n.length&&(i=new jl("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var Yi=null,Qi=null;function Hx(e){Zf(e,0)}function fs(e){var n=qr(e);if(It(n))return e}function qx(e,n){if(e==="change")return n}var Df=!1;if(p){var Tl;if(p){var El="oninput"in document;if(!El){var Ff=document.createElement("div");Ff.setAttribute("oninput","return;"),El=typeof Ff.oninput=="function"}Tl=El}else Tl=!1;Df=Tl&&(!document.documentMode||9<document.documentMode)}function zf(){Yi&&(Yi.detachEvent("onpropertychange",Nf),Qi=Yi=null)}function Nf(e){if(e.propertyName==="value"&&fs(Qi)){var n=[];Vf(n,Qi,e,al(e)),rf(Hx,n)}}function Gx(e,n,i){e==="focusin"?(zf(),Yi=n,Qi=i,Yi.attachEvent("onpropertychange",Nf)):e==="focusout"&&zf()}function Yx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fs(Qi)}function Qx(e,n){if(e==="click")return fs(n)}function Kx(e,n){if(e==="input"||e==="change")return fs(n)}function Xx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ut=typeof Object.is=="function"?Object.is:Xx;function Ki(e,n){if(Ut(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var c=i[l];if(!m.call(n,c)||!Ut(e[c],n[c]))return!1}return!0}function _f(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Of(e,n){var i=_f(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=_f(i)}}function Bf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Bf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $f(){for(var e=window,n=Qo();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Qo(e.document)}return n}function Ll(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Zx(e){var n=$f(),i=e.focusedElem,l=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Bf(i.ownerDocument.documentElement,i)){if(l!==null&&Ll(i)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var c=i.textContent.length,f=Math.min(l.start,c);l=l.end===void 0?f:Math.min(l.end,c),!e.extend&&f>l&&(c=l,l=f,f=c),c=Of(i,f);var y=Of(i,l);c&&y&&(e.rangeCount!==1||e.anchorNode!==c.node||e.anchorOffset!==c.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(n=n.createRange(),n.setStart(c.node,c.offset),e.removeAllRanges(),f>l?(e.addRange(n),e.extend(y.node,y.offset)):(n.setEnd(y.node,y.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jx=p&&"documentMode"in document&&11>=document.documentMode,$r=null,Rl=null,Xi=null,Al=!1;function Uf(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Al||$r==null||$r!==Qo(l)||(l=$r,"selectionStart"in l&&Ll(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xi&&Ki(Xi,l)||(Xi=l,l=gs(Rl,"onSelect"),0<l.length&&(n=new jl("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=$r)))}function hs(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Ur={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},Il={},Wf={};p&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function ps(e){if(Il[e])return Il[e];if(!Ur[e])return e;var n=Ur[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Wf)return Il[e]=n[i];return e}var Hf=ps("animationend"),qf=ps("animationiteration"),Gf=ps("animationstart"),Yf=ps("transitionend"),Qf=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(e,n){Qf.set(e,n),h(n,[e])}for(var Ml=0;Ml<Kf.length;Ml++){var Vl=Kf[Ml],ev=Vl.toLowerCase(),tv=Vl[0].toUpperCase()+Vl.slice(1);Ln(ev,"on"+tv)}Ln(Hf,"onAnimationEnd"),Ln(qf,"onAnimationIteration"),Ln(Gf,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(Yf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zi));function Xf(e,n,i){var l=e.type||"unknown-event";e.currentTarget=i,ex(l,n,void 0,e),e.currentTarget=null}function Zf(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],c=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var y=l.length-1;0<=y;y--){var j=l[y],S=j.instance,V=j.currentTarget;if(j=j.listener,S!==f&&c.isPropagationStopped())break e;Xf(c,j,V),f=S}else for(y=0;y<l.length;y++){if(j=l[y],S=j.instance,V=j.currentTarget,j=j.listener,S!==f&&c.isPropagationStopped())break e;Xf(c,j,V),f=S}}}if(Zo)throw e=dl,Zo=!1,dl=null,e}function Re(e,n){var i=n[$l];i===void 0&&(i=n[$l]=new Set);var l=e+"__bubble";i.has(l)||(Jf(n,e,2,!1),i.add(l))}function Dl(e,n,i){var l=0;n&&(l|=4),Jf(i,e,l,n)}var ms="_reactListening"+Math.random().toString(36).slice(2);function Ji(e){if(!e[ms]){e[ms]=!0,a.forEach(function(i){i!=="selectionchange"&&(nv.has(i)||Dl(i,!1,e),Dl(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ms]||(n[ms]=!0,Dl("selectionchange",!1,n))}}function Jf(e,n,i,l){switch(kf(n)){case 1:var c=gx;break;case 4:c=yx;break;default:c=xl}i=c.bind(null,n,i,e),c=void 0,!cl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),l?c!==void 0?e.addEventListener(n,i,{capture:!0,passive:c}):e.addEventListener(n,i,!0):c!==void 0?e.addEventListener(n,i,{passive:c}):e.addEventListener(n,i,!1)}function Fl(e,n,i,l,c){var f=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var j=l.stateNode.containerInfo;if(j===c||j.nodeType===8&&j.parentNode===c)break;if(y===4)for(y=l.return;y!==null;){var S=y.tag;if((S===3||S===4)&&(S=y.stateNode.containerInfo,S===c||S.nodeType===8&&S.parentNode===c))return;y=y.return}for(;j!==null;){if(y=rr(j),y===null)return;if(S=y.tag,S===5||S===6){l=f=y;continue e}j=j.parentNode}}l=l.return}rf(function(){var V=f,O=al(i),B=[];e:{var _=Qf.get(e);if(_!==void 0){var Q=jl,J=e;switch(e){case"keypress":if(us(i)===0)break e;case"keydown":case"keyup":Q=Ix;break;case"focusin":J="focus",Q=bl;break;case"focusout":J="blur",Q=bl;break;case"beforeblur":case"afterblur":Q=bl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=Dx;break;case Hf:case qf:case Gf:Q=Sx;break;case Yf:Q=zx;break;case"scroll":Q=xx;break;case"wheel":Q=_x;break;case"copy":case"cut":case"paste":Q=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Tf}var ee=(n&4)!==0,$e=!ee&&e==="scroll",A=ee?_!==null?_+"Capture":null:_;ee=[];for(var C=V,M;C!==null;){M=C;var U=M.stateNode;if(M.tag===5&&U!==null&&(M=U,A!==null&&(U=Di(C,A),U!=null&&ee.push(eo(C,U,M)))),$e)break;C=C.return}0<ee.length&&(_=new Q(_,J,null,i,O),B.push({event:_,listeners:ee}))}}if(!(n&7)){e:{if(_=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",_&&i!==sl&&(J=i.relatedTarget||i.fromElement)&&(rr(J)||J[un]))break e;if((Q||_)&&(_=O.window===O?O:(_=O.ownerDocument)?_.defaultView||_.parentWindow:window,Q?(J=i.relatedTarget||i.toElement,Q=V,J=J?rr(J):null,J!==null&&($e=nr(J),J!==$e||J.tag!==5&&J.tag!==6)&&(J=null)):(Q=null,J=V),Q!==J)){if(ee=Cf,U="onMouseLeave",A="onMouseEnter",C="mouse",(e==="pointerout"||e==="pointerover")&&(ee=Tf,U="onPointerLeave",A="onPointerEnter",C="pointer"),$e=Q==null?_:qr(Q),M=J==null?_:qr(J),_=new ee(U,C+"leave",Q,i,O),_.target=$e,_.relatedTarget=M,U=null,rr(O)===V&&(ee=new ee(A,C+"enter",J,i,O),ee.target=M,ee.relatedTarget=$e,U=ee),$e=U,Q&&J)t:{for(ee=Q,A=J,C=0,M=ee;M;M=Wr(M))C++;for(M=0,U=A;U;U=Wr(U))M++;for(;0<C-M;)ee=Wr(ee),C--;for(;0<M-C;)A=Wr(A),M--;for(;C--;){if(ee===A||A!==null&&ee===A.alternate)break t;ee=Wr(ee),A=Wr(A)}ee=null}else ee=null;Q!==null&&eh(B,_,Q,ee,!1),J!==null&&$e!==null&&eh(B,$e,J,ee,!0)}}e:{if(_=V?qr(V):window,Q=_.nodeName&&_.nodeName.toLowerCase(),Q==="select"||Q==="input"&&_.type==="file")var te=qx;else if(Mf(_))if(Df)te=Kx;else{te=Yx;var re=Gx}else(Q=_.nodeName)&&Q.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(te=Qx);if(te&&(te=te(e,V))){Vf(B,te,i,O);break e}re&&re(e,_,V),e==="focusout"&&(re=_._wrapperState)&&re.controlled&&_.type==="number"&&tl(_,"number",_.value)}switch(re=V?qr(V):window,e){case"focusin":(Mf(re)||re.contentEditable==="true")&&($r=re,Rl=V,Xi=null);break;case"focusout":Xi=Rl=$r=null;break;case"mousedown":Al=!0;break;case"contextmenu":case"mouseup":case"dragend":Al=!1,Uf(B,i,O);break;case"selectionchange":if(Jx)break;case"keydown":case"keyup":Uf(B,i,O)}var ie;if(Pl)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else Br?Af(e,i)&&(se="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(se="onCompositionStart");se&&(Ef&&i.locale!=="ko"&&(Br||se!=="onCompositionStart"?se==="onCompositionEnd"&&Br&&(ie=Sf()):(En=O,wl="value"in En?En.value:En.textContent,Br=!0)),re=gs(V,se),0<re.length&&(se=new Pf(se,e,null,i,O),B.push({event:se,listeners:re}),ie?se.data=ie:(ie=If(i),ie!==null&&(se.data=ie)))),(ie=Bx?$x(e,i):Ux(e,i))&&(V=gs(V,"onBeforeInput"),0<V.length&&(O=new Pf("onBeforeInput","beforeinput",null,i,O),B.push({event:O,listeners:V}),O.data=ie))}Zf(B,n)})}function eo(e,n,i){return{instance:e,listener:n,currentTarget:i}}function gs(e,n){for(var i=n+"Capture",l=[];e!==null;){var c=e,f=c.stateNode;c.tag===5&&f!==null&&(c=f,f=Di(e,i),f!=null&&l.unshift(eo(e,f,c)),f=Di(e,n),f!=null&&l.push(eo(e,f,c))),e=e.return}return l}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function eh(e,n,i,l,c){for(var f=n._reactName,y=[];i!==null&&i!==l;){var j=i,S=j.alternate,V=j.stateNode;if(S!==null&&S===l)break;j.tag===5&&V!==null&&(j=V,c?(S=Di(i,f),S!=null&&y.unshift(eo(i,S,j))):c||(S=Di(i,f),S!=null&&y.push(eo(i,S,j)))),i=i.return}y.length!==0&&e.push({event:n,listeners:y})}var rv=/\r\n?/g,iv=/\u0000|\uFFFD/g;function th(e){return(typeof e=="string"?e:""+e).replace(rv,`
`).replace(iv,"")}function ys(e,n,i){if(n=th(n),th(e)!==n&&i)throw Error(o(425))}function xs(){}var zl=null,Nl=null;function _l(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,ov=typeof clearTimeout=="function"?clearTimeout:void 0,nh=typeof Promise=="function"?Promise:void 0,sv=typeof queueMicrotask=="function"?queueMicrotask:typeof nh<"u"?function(e){return nh.resolve(null).then(e).catch(av)}:Ol;function av(e){setTimeout(function(){throw e})}function Bl(e,n){var i=n,l=0;do{var c=i.nextSibling;if(e.removeChild(i),c&&c.nodeType===8)if(i=c.data,i==="/$"){if(l===0){e.removeChild(c),Wi(n);return}l--}else i!=="$"&&i!=="$?"&&i!=="$!"||l++;i=c}while(i);Wi(n)}function Rn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function rh(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Hr,to="__reactProps$"+Hr,un="__reactContainer$"+Hr,$l="__reactEvents$"+Hr,lv="__reactListeners$"+Hr,uv="__reactHandles$"+Hr;function rr(e){var n=e[tn];if(n)return n;for(var i=e.parentNode;i;){if(n=i[un]||i[tn]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=rh(e);e!==null;){if(i=e[tn])return i;e=rh(e)}return n}e=i,i=e.parentNode}return null}function no(e){return e=e[tn]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function vs(e){return e[to]||null}var Ul=[],Gr=-1;function An(e){return{current:e}}function Ae(e){0>Gr||(e.current=Ul[Gr],Ul[Gr]=null,Gr--)}function Pe(e,n){Gr++,Ul[Gr]=e.current,e.current=n}var In={},lt=An(In),vt=An(!1),ir=In;function Yr(e,n){var i=e.type.contextTypes;if(!i)return In;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var c={},f;for(f in i)c[f]=n[f];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=c),c}function wt(e){return e=e.childContextTypes,e!=null}function ws(){Ae(vt),Ae(lt)}function ih(e,n,i){if(lt.current!==In)throw Error(o(168));Pe(lt,n),Pe(vt,i)}function oh(e,n,i){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return i;l=l.getChildContext();for(var c in l)if(!(c in n))throw Error(o(108,ve(e)||"Unknown",c));return Y({},i,l)}function js(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,ir=lt.current,Pe(lt,e),Pe(vt,vt.current),!0}function sh(e,n,i){var l=e.stateNode;if(!l)throw Error(o(169));i?(e=oh(e,n,ir),l.__reactInternalMemoizedMergedChildContext=e,Ae(vt),Ae(lt),Pe(lt,e)):Ae(vt),Pe(vt,i)}var cn=null,ks=!1,Wl=!1;function ah(e){cn===null?cn=[e]:cn.push(e)}function cv(e){ks=!0,ah(e)}function Mn(){if(!Wl&&cn!==null){Wl=!0;var e=0,n=Ce;try{var i=cn;for(Ce=1;e<i.length;e++){var l=i[e];do l=l(!0);while(l!==null)}cn=null,ks=!1}catch(c){throw cn!==null&&(cn=cn.slice(e+1)),uf(fl,Mn),c}finally{Ce=n,Wl=!1}}return null}var Qr=[],Kr=0,Ss=null,bs=0,Mt=[],Vt=0,or=null,dn=1,fn="";function sr(e,n){Qr[Kr++]=bs,Qr[Kr++]=Ss,Ss=e,bs=n}function lh(e,n,i){Mt[Vt++]=dn,Mt[Vt++]=fn,Mt[Vt++]=or,or=e;var l=dn;e=fn;var c=32-$t(l)-1;l&=~(1<<c),i+=1;var f=32-$t(n)+c;if(30<f){var y=c-c%5;f=(l&(1<<y)-1).toString(32),l>>=y,c-=y,dn=1<<32-$t(n)+c|i<<c|l,fn=f+e}else dn=1<<f|i<<c|l,fn=e}function Hl(e){e.return!==null&&(sr(e,1),lh(e,1,0))}function ql(e){for(;e===Ss;)Ss=Qr[--Kr],Qr[Kr]=null,bs=Qr[--Kr],Qr[Kr]=null;for(;e===or;)or=Mt[--Vt],Mt[Vt]=null,fn=Mt[--Vt],Mt[Vt]=null,dn=Mt[--Vt],Mt[Vt]=null}var Tt=null,Et=null,De=!1,Wt=null;function uh(e,n){var i=Nt(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function ch(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Tt=e,Et=Rn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Tt=e,Et=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=or!==null?{id:dn,overflow:fn}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=Nt(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,Tt=e,Et=null,!0):!1;default:return!1}}function Gl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yl(e){if(De){var n=Et;if(n){var i=n;if(!ch(e,n)){if(Gl(e))throw Error(o(418));n=Rn(i.nextSibling);var l=Tt;n&&ch(e,n)?uh(l,i):(e.flags=e.flags&-4097|2,De=!1,Tt=e)}}else{if(Gl(e))throw Error(o(418));e.flags=e.flags&-4097|2,De=!1,Tt=e}}}function dh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Tt=e}function Cs(e){if(e!==Tt)return!1;if(!De)return dh(e),De=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!_l(e.type,e.memoizedProps)),n&&(n=Et)){if(Gl(e))throw fh(),Error(o(418));for(;n;)uh(e,n),n=Rn(n.nextSibling)}if(dh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){Et=Rn(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}Et=null}}else Et=Tt?Rn(e.stateNode.nextSibling):null;return!0}function fh(){for(var e=Et;e;)e=Rn(e.nextSibling)}function Xr(){Et=Tt=null,De=!1}function Ql(e){Wt===null?Wt=[e]:Wt.push(e)}var dv=N.ReactCurrentBatchConfig;function ro(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var l=i.stateNode}if(!l)throw Error(o(147,e));var c=l,f=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===f?n.ref:(n=function(y){var j=c.refs;y===null?delete j[f]:j[f]=y},n._stringRef=f,n)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function Ps(e,n){throw e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function hh(e){var n=e._init;return n(e._payload)}function ph(e){function n(A,C){if(e){var M=A.deletions;M===null?(A.deletions=[C],A.flags|=16):M.push(C)}}function i(A,C){if(!e)return null;for(;C!==null;)n(A,C),C=C.sibling;return null}function l(A,C){for(A=new Map;C!==null;)C.key!==null?A.set(C.key,C):A.set(C.index,C),C=C.sibling;return A}function c(A,C){return A=Bn(A,C),A.index=0,A.sibling=null,A}function f(A,C,M){return A.index=M,e?(M=A.alternate,M!==null?(M=M.index,M<C?(A.flags|=2,C):M):(A.flags|=2,C)):(A.flags|=1048576,C)}function y(A){return e&&A.alternate===null&&(A.flags|=2),A}function j(A,C,M,U){return C===null||C.tag!==6?(C=Ou(M,A.mode,U),C.return=A,C):(C=c(C,M),C.return=A,C)}function S(A,C,M,U){var te=M.type;return te===G?O(A,C,M.props.children,U,M.key):C!==null&&(C.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===xe&&hh(te)===C.type)?(U=c(C,M.props),U.ref=ro(A,C,M),U.return=A,U):(U=Ks(M.type,M.key,M.props,null,A.mode,U),U.ref=ro(A,C,M),U.return=A,U)}function V(A,C,M,U){return C===null||C.tag!==4||C.stateNode.containerInfo!==M.containerInfo||C.stateNode.implementation!==M.implementation?(C=Bu(M,A.mode,U),C.return=A,C):(C=c(C,M.children||[]),C.return=A,C)}function O(A,C,M,U,te){return C===null||C.tag!==7?(C=pr(M,A.mode,U,te),C.return=A,C):(C=c(C,M),C.return=A,C)}function B(A,C,M){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Ou(""+C,A.mode,M),C.return=A,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case q:return M=Ks(C.type,C.key,C.props,null,A.mode,M),M.ref=ro(A,null,C),M.return=A,M;case K:return C=Bu(C,A.mode,M),C.return=A,C;case xe:var U=C._init;return B(A,U(C._payload),M)}if(Ii(C)||X(C))return C=pr(C,A.mode,M,null),C.return=A,C;Ps(A,C)}return null}function _(A,C,M,U){var te=C!==null?C.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return te!==null?null:j(A,C,""+M,U);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case q:return M.key===te?S(A,C,M,U):null;case K:return M.key===te?V(A,C,M,U):null;case xe:return te=M._init,_(A,C,te(M._payload),U)}if(Ii(M)||X(M))return te!==null?null:O(A,C,M,U,null);Ps(A,M)}return null}function Q(A,C,M,U,te){if(typeof U=="string"&&U!==""||typeof U=="number")return A=A.get(M)||null,j(C,A,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case q:return A=A.get(U.key===null?M:U.key)||null,S(C,A,U,te);case K:return A=A.get(U.key===null?M:U.key)||null,V(C,A,U,te);case xe:var re=U._init;return Q(A,C,M,re(U._payload),te)}if(Ii(U)||X(U))return A=A.get(M)||null,O(C,A,U,te,null);Ps(C,U)}return null}function J(A,C,M,U){for(var te=null,re=null,ie=C,se=C=0,et=null;ie!==null&&se<M.length;se++){ie.index>se?(et=ie,ie=null):et=ie.sibling;var je=_(A,ie,M[se],U);if(je===null){ie===null&&(ie=et);break}e&&ie&&je.alternate===null&&n(A,ie),C=f(je,C,se),re===null?te=je:re.sibling=je,re=je,ie=et}if(se===M.length)return i(A,ie),De&&sr(A,se),te;if(ie===null){for(;se<M.length;se++)ie=B(A,M[se],U),ie!==null&&(C=f(ie,C,se),re===null?te=ie:re.sibling=ie,re=ie);return De&&sr(A,se),te}for(ie=l(A,ie);se<M.length;se++)et=Q(ie,A,se,M[se],U),et!==null&&(e&&et.alternate!==null&&ie.delete(et.key===null?se:et.key),C=f(et,C,se),re===null?te=et:re.sibling=et,re=et);return e&&ie.forEach(function($n){return n(A,$n)}),De&&sr(A,se),te}function ee(A,C,M,U){var te=X(M);if(typeof te!="function")throw Error(o(150));if(M=te.call(M),M==null)throw Error(o(151));for(var re=te=null,ie=C,se=C=0,et=null,je=M.next();ie!==null&&!je.done;se++,je=M.next()){ie.index>se?(et=ie,ie=null):et=ie.sibling;var $n=_(A,ie,je.value,U);if($n===null){ie===null&&(ie=et);break}e&&ie&&$n.alternate===null&&n(A,ie),C=f($n,C,se),re===null?te=$n:re.sibling=$n,re=$n,ie=et}if(je.done)return i(A,ie),De&&sr(A,se),te;if(ie===null){for(;!je.done;se++,je=M.next())je=B(A,je.value,U),je!==null&&(C=f(je,C,se),re===null?te=je:re.sibling=je,re=je);return De&&sr(A,se),te}for(ie=l(A,ie);!je.done;se++,je=M.next())je=Q(ie,A,se,je.value,U),je!==null&&(e&&je.alternate!==null&&ie.delete(je.key===null?se:je.key),C=f(je,C,se),re===null?te=je:re.sibling=je,re=je);return e&&ie.forEach(function(Wv){return n(A,Wv)}),De&&sr(A,se),te}function $e(A,C,M,U){if(typeof M=="object"&&M!==null&&M.type===G&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case q:e:{for(var te=M.key,re=C;re!==null;){if(re.key===te){if(te=M.type,te===G){if(re.tag===7){i(A,re.sibling),C=c(re,M.props.children),C.return=A,A=C;break e}}else if(re.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===xe&&hh(te)===re.type){i(A,re.sibling),C=c(re,M.props),C.ref=ro(A,re,M),C.return=A,A=C;break e}i(A,re);break}else n(A,re);re=re.sibling}M.type===G?(C=pr(M.props.children,A.mode,U,M.key),C.return=A,A=C):(U=Ks(M.type,M.key,M.props,null,A.mode,U),U.ref=ro(A,C,M),U.return=A,A=U)}return y(A);case K:e:{for(re=M.key;C!==null;){if(C.key===re)if(C.tag===4&&C.stateNode.containerInfo===M.containerInfo&&C.stateNode.implementation===M.implementation){i(A,C.sibling),C=c(C,M.children||[]),C.return=A,A=C;break e}else{i(A,C);break}else n(A,C);C=C.sibling}C=Bu(M,A.mode,U),C.return=A,A=C}return y(A);case xe:return re=M._init,$e(A,C,re(M._payload),U)}if(Ii(M))return J(A,C,M,U);if(X(M))return ee(A,C,M,U);Ps(A,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,C!==null&&C.tag===6?(i(A,C.sibling),C=c(C,M),C.return=A,A=C):(i(A,C),C=Ou(M,A.mode,U),C.return=A,A=C),y(A)):i(A,C)}return $e}var Zr=ph(!0),mh=ph(!1),Ts=An(null),Es=null,Jr=null,Kl=null;function Xl(){Kl=Jr=Es=null}function Zl(e){var n=Ts.current;Ae(Ts),e._currentValue=n}function Jl(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function ei(e,n){Es=e,Kl=Jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(jt=!0),e.firstContext=null)}function Dt(e){var n=e._currentValue;if(Kl!==e)if(e={context:e,memoizedValue:n,next:null},Jr===null){if(Es===null)throw Error(o(308));Jr=e,Es.dependencies={lanes:0,firstContext:e}}else Jr=Jr.next=e;return n}var ar=null;function eu(e){ar===null?ar=[e]:ar.push(e)}function gh(e,n,i,l){var c=n.interleaved;return c===null?(i.next=i,eu(n)):(i.next=c.next,c.next=i),n.interleaved=i,hn(e,l)}function hn(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Vn=!1;function tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Dn(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,we&2){var c=l.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n,hn(e,i)}return c=l.interleaved,c===null?(n.next=n,eu(l)):(n.next=c.next,c.next=n),l.interleaved=n,hn(e,i)}function Ls(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,ml(e,i)}}function xh(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var c=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var y={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};f===null?c=f=y:f=f.next=y,i=i.next}while(i!==null);f===null?c=f=n:f=f.next=n}else c=f=n;i={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:l.shared,effects:l.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function Rs(e,n,i,l){var c=e.updateQueue;Vn=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,j=c.shared.pending;if(j!==null){c.shared.pending=null;var S=j,V=S.next;S.next=null,y===null?f=V:y.next=V,y=S;var O=e.alternate;O!==null&&(O=O.updateQueue,j=O.lastBaseUpdate,j!==y&&(j===null?O.firstBaseUpdate=V:j.next=V,O.lastBaseUpdate=S))}if(f!==null){var B=c.baseState;y=0,O=V=S=null,j=f;do{var _=j.lane,Q=j.eventTime;if((l&_)===_){O!==null&&(O=O.next={eventTime:Q,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var J=e,ee=j;switch(_=n,Q=i,ee.tag){case 1:if(J=ee.payload,typeof J=="function"){B=J.call(Q,B,_);break e}B=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ee.payload,_=typeof J=="function"?J.call(Q,B,_):J,_==null)break e;B=Y({},B,_);break e;case 2:Vn=!0}}j.callback!==null&&j.lane!==0&&(e.flags|=64,_=c.effects,_===null?c.effects=[j]:_.push(j))}else Q={eventTime:Q,lane:_,tag:j.tag,payload:j.payload,callback:j.callback,next:null},O===null?(V=O=Q,S=B):O=O.next=Q,y|=_;if(j=j.next,j===null){if(j=c.shared.pending,j===null)break;_=j,j=_.next,_.next=null,c.lastBaseUpdate=_,c.shared.pending=null}}while(!0);if(O===null&&(S=B),c.baseState=S,c.firstBaseUpdate=V,c.lastBaseUpdate=O,n=c.shared.interleaved,n!==null){c=n;do y|=c.lane,c=c.next;while(c!==n)}else f===null&&(c.shared.lanes=0);cr|=y,e.lanes=y,e.memoizedState=B}}function vh(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],c=l.callback;if(c!==null){if(l.callback=null,l=i,typeof c!="function")throw Error(o(191,c));c.call(l)}}}var io={},nn=An(io),oo=An(io),so=An(io);function lr(e){if(e===io)throw Error(o(174));return e}function nu(e,n){switch(Pe(so,n),Pe(oo,e),Pe(nn,io),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:rl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=rl(n,e)}Ae(nn),Pe(nn,n)}function ti(){Ae(nn),Ae(oo),Ae(so)}function wh(e){lr(so.current);var n=lr(nn.current),i=rl(n,e.type);n!==i&&(Pe(oo,e),Pe(nn,i))}function ru(e){oo.current===e&&(Ae(nn),Ae(oo))}var Fe=An(0);function As(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var iu=[];function ou(){for(var e=0;e<iu.length;e++)iu[e]._workInProgressVersionPrimary=null;iu.length=0}var Is=N.ReactCurrentDispatcher,su=N.ReactCurrentBatchConfig,ur=0,ze=null,Ke=null,Ze=null,Ms=!1,ao=!1,lo=0,fv=0;function ut(){throw Error(o(321))}function au(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Ut(e[i],n[i]))return!1;return!0}function lu(e,n,i,l,c,f){if(ur=f,ze=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Is.current=e===null||e.memoizedState===null?gv:yv,e=i(l,c),ao){f=0;do{if(ao=!1,lo=0,25<=f)throw Error(o(301));f+=1,Ze=Ke=null,n.updateQueue=null,Is.current=xv,e=i(l,c)}while(ao)}if(Is.current=Fs,n=Ke!==null&&Ke.next!==null,ur=0,Ze=Ke=ze=null,Ms=!1,n)throw Error(o(300));return e}function uu(){var e=lo!==0;return lo=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ze.memoizedState=Ze=e:Ze=Ze.next=e,Ze}function Ft(){if(Ke===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ke.next;var n=Ze===null?ze.memoizedState:Ze.next;if(n!==null)Ze=n,Ke=e;else{if(e===null)throw Error(o(310));Ke=e,e={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ze===null?ze.memoizedState=Ze=e:Ze=Ze.next=e}return Ze}function uo(e,n){return typeof n=="function"?n(e):n}function cu(e){var n=Ft(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var l=Ke,c=l.baseQueue,f=i.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}l.baseQueue=c=f,i.pending=null}if(c!==null){f=c.next,l=l.baseState;var j=y=null,S=null,V=f;do{var O=V.lane;if((ur&O)===O)S!==null&&(S=S.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),l=V.hasEagerState?V.eagerState:e(l,V.action);else{var B={lane:O,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};S===null?(j=S=B,y=l):S=S.next=B,ze.lanes|=O,cr|=O}V=V.next}while(V!==null&&V!==f);S===null?y=l:S.next=j,Ut(l,n.memoizedState)||(jt=!0),n.memoizedState=l,n.baseState=y,n.baseQueue=S,i.lastRenderedState=l}if(e=i.interleaved,e!==null){c=e;do f=c.lane,ze.lanes|=f,cr|=f,c=c.next;while(c!==e)}else c===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function du(e){var n=Ft(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var l=i.dispatch,c=i.pending,f=n.memoizedState;if(c!==null){i.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);Ut(f,n.memoizedState)||(jt=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),i.lastRenderedState=f}return[f,l]}function jh(){}function kh(e,n){var i=ze,l=Ft(),c=n(),f=!Ut(l.memoizedState,c);if(f&&(l.memoizedState=c,jt=!0),l=l.queue,fu(Ch.bind(null,i,l,e),[e]),l.getSnapshot!==n||f||Ze!==null&&Ze.memoizedState.tag&1){if(i.flags|=2048,co(9,bh.bind(null,i,l,c,n),void 0,null),Je===null)throw Error(o(349));ur&30||Sh(i,n,c)}return c}function Sh(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=ze.updateQueue,n===null?(n={lastEffect:null,stores:null},ze.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function bh(e,n,i,l){n.value=i,n.getSnapshot=l,Ph(n)&&Th(e)}function Ch(e,n,i){return i(function(){Ph(n)&&Th(e)})}function Ph(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Ut(e,i)}catch{return!0}}function Th(e){var n=hn(e,1);n!==null&&Yt(n,e,1,-1)}function Eh(e){var n=rn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:e},n.queue=e,e=e.dispatch=mv.bind(null,ze,e),[n.memoizedState,e]}function co(e,n,i,l){return e={tag:e,create:n,destroy:i,deps:l,next:null},n=ze.updateQueue,n===null?(n={lastEffect:null,stores:null},ze.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e)),e}function Lh(){return Ft().memoizedState}function Vs(e,n,i,l){var c=rn();ze.flags|=e,c.memoizedState=co(1|n,i,void 0,l===void 0?null:l)}function Ds(e,n,i,l){var c=Ft();l=l===void 0?null:l;var f=void 0;if(Ke!==null){var y=Ke.memoizedState;if(f=y.destroy,l!==null&&au(l,y.deps)){c.memoizedState=co(n,i,f,l);return}}ze.flags|=e,c.memoizedState=co(1|n,i,f,l)}function Rh(e,n){return Vs(8390656,8,e,n)}function fu(e,n){return Ds(2048,8,e,n)}function Ah(e,n){return Ds(4,2,e,n)}function Ih(e,n){return Ds(4,4,e,n)}function Mh(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Vh(e,n,i){return i=i!=null?i.concat([e]):null,Ds(4,4,Mh.bind(null,n,e),i)}function hu(){}function Dh(e,n){var i=Ft();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&au(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function Fh(e,n){var i=Ft();n=n===void 0?null:n;var l=i.memoizedState;return l!==null&&n!==null&&au(n,l[1])?l[0]:(e=e(),i.memoizedState=[e,n],e)}function zh(e,n,i){return ur&21?(Ut(i,n)||(i=hf(),ze.lanes|=i,cr|=i,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=i)}function hv(e,n){var i=Ce;Ce=i!==0&&4>i?i:4,e(!0);var l=su.transition;su.transition={};try{e(!1),n()}finally{Ce=i,su.transition=l}}function Nh(){return Ft().memoizedState}function pv(e,n,i){var l=_n(e);if(i={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null},_h(e))Oh(n,i);else if(i=gh(e,n,i,l),i!==null){var c=mt();Yt(i,e,l,c),Bh(i,n,l)}}function mv(e,n,i){var l=_n(e),c={lane:l,action:i,hasEagerState:!1,eagerState:null,next:null};if(_h(e))Oh(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,j=f(y,i);if(c.hasEagerState=!0,c.eagerState=j,Ut(j,y)){var S=n.interleaved;S===null?(c.next=c,eu(n)):(c.next=S.next,S.next=c),n.interleaved=c;return}}catch{}finally{}i=gh(e,n,c,l),i!==null&&(c=mt(),Yt(i,e,l,c),Bh(i,n,l))}}function _h(e){var n=e.alternate;return e===ze||n!==null&&n===ze}function Oh(e,n){ao=Ms=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Bh(e,n,i){if(i&4194240){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,ml(e,i)}}var Fs={readContext:Dt,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useInsertionEffect:ut,useLayoutEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useMutableSource:ut,useSyncExternalStore:ut,useId:ut,unstable_isNewReconciler:!1},gv={readContext:Dt,useCallback:function(e,n){return rn().memoizedState=[e,n===void 0?null:n],e},useContext:Dt,useEffect:Rh,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Vs(4194308,4,Mh.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Vs(4194308,4,e,n)},useInsertionEffect:function(e,n){return Vs(4,2,e,n)},useMemo:function(e,n){var i=rn();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var l=rn();return n=i!==void 0?i(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=pv.bind(null,ze,e),[l.memoizedState,e]},useRef:function(e){var n=rn();return e={current:e},n.memoizedState=e},useState:Eh,useDebugValue:hu,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=Eh(!1),n=e[0];return e=hv.bind(null,e[1]),rn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var l=ze,c=rn();if(De){if(i===void 0)throw Error(o(407));i=i()}else{if(i=n(),Je===null)throw Error(o(349));ur&30||Sh(l,n,i)}c.memoizedState=i;var f={value:i,getSnapshot:n};return c.queue=f,Rh(Ch.bind(null,l,f,e),[e]),l.flags|=2048,co(9,bh.bind(null,l,f,i,n),void 0,null),i},useId:function(){var e=rn(),n=Je.identifierPrefix;if(De){var i=fn,l=dn;i=(l&~(1<<32-$t(l)-1)).toString(32)+i,n=":"+n+"R"+i,i=lo++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=fv++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},yv={readContext:Dt,useCallback:Dh,useContext:Dt,useEffect:fu,useImperativeHandle:Vh,useInsertionEffect:Ah,useLayoutEffect:Ih,useMemo:Fh,useReducer:cu,useRef:Lh,useState:function(){return cu(uo)},useDebugValue:hu,useDeferredValue:function(e){var n=Ft();return zh(n,Ke.memoizedState,e)},useTransition:function(){var e=cu(uo)[0],n=Ft().memoizedState;return[e,n]},useMutableSource:jh,useSyncExternalStore:kh,useId:Nh,unstable_isNewReconciler:!1},xv={readContext:Dt,useCallback:Dh,useContext:Dt,useEffect:fu,useImperativeHandle:Vh,useInsertionEffect:Ah,useLayoutEffect:Ih,useMemo:Fh,useReducer:du,useRef:Lh,useState:function(){return du(uo)},useDebugValue:hu,useDeferredValue:function(e){var n=Ft();return Ke===null?n.memoizedState=e:zh(n,Ke.memoizedState,e)},useTransition:function(){var e=du(uo)[0],n=Ft().memoizedState;return[e,n]},useMutableSource:jh,useSyncExternalStore:kh,useId:Nh,unstable_isNewReconciler:!1};function Ht(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function pu(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:Y({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var zs={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var l=mt(),c=_n(e),f=pn(l,c);f.payload=n,i!=null&&(f.callback=i),n=Dn(e,f,c),n!==null&&(Yt(n,e,c,l),Ls(n,e,c))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=mt(),c=_n(e),f=pn(l,c);f.tag=1,f.payload=n,i!=null&&(f.callback=i),n=Dn(e,f,c),n!==null&&(Yt(n,e,c,l),Ls(n,e,c))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=mt(),l=_n(e),c=pn(i,l);c.tag=2,n!=null&&(c.callback=n),n=Dn(e,c,l),n!==null&&(Yt(n,e,l,i),Ls(n,e,l))}};function $h(e,n,i,l,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,y):n.prototype&&n.prototype.isPureReactComponent?!Ki(i,l)||!Ki(c,f):!0}function Uh(e,n,i){var l=!1,c=In,f=n.contextType;return typeof f=="object"&&f!==null?f=Dt(f):(c=wt(n)?ir:lt.current,l=n.contextTypes,f=(l=l!=null)?Yr(e,c):In),n=new n(i,f),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=zs,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=c,e.__reactInternalMemoizedMaskedChildContext=f),n}function Wh(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&zs.enqueueReplaceState(n,n.state,null)}function mu(e,n,i,l){var c=e.stateNode;c.props=i,c.state=e.memoizedState,c.refs={},tu(e);var f=n.contextType;typeof f=="object"&&f!==null?c.context=Dt(f):(f=wt(n)?ir:lt.current,c.context=Yr(e,f)),c.state=e.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&(pu(e,n,f,i),c.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(n=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),n!==c.state&&zs.enqueueReplaceState(c,c.state,null),Rs(e,i,c,l),c.state=e.memoizedState),typeof c.componentDidMount=="function"&&(e.flags|=4194308)}function ni(e,n){try{var i="",l=n;do i+=de(l),l=l.return;while(l);var c=i}catch(f){c=`
Error generating stack: `+f.message+`
`+f.stack}return{value:e,source:n,stack:c,digest:null}}function gu(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function yu(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var vv=typeof WeakMap=="function"?WeakMap:Map;function Hh(e,n,i){i=pn(-1,i),i.tag=3,i.payload={element:null};var l=n.value;return i.callback=function(){Ws||(Ws=!0,Iu=l),yu(e,n)},i}function qh(e,n,i){i=pn(-1,i),i.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var c=n.value;i.payload=function(){return l(c)},i.callback=function(){yu(e,n)}}var f=e.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(i.callback=function(){yu(e,n),typeof l!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})}),i}function Gh(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new vv;var c=new Set;l.set(n,c)}else c=l.get(n),c===void 0&&(c=new Set,l.set(n,c));c.has(i)||(c.add(i),e=Mv.bind(null,e,n,i),n.then(e,e))}function Yh(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qh(e,n,i,l,c){return e.mode&1?(e.flags|=65536,e.lanes=c,e):(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=pn(-1,1),n.tag=2,Dn(i,n,1))),i.lanes|=1),e)}var wv=N.ReactCurrentOwner,jt=!1;function pt(e,n,i,l){n.child=e===null?mh(n,null,i,l):Zr(n,e.child,i,l)}function Kh(e,n,i,l,c){i=i.render;var f=n.ref;return ei(n,c),l=lu(e,n,i,l,f,c),i=uu(),e!==null&&!jt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,mn(e,n,c)):(De&&i&&Hl(n),n.flags|=1,pt(e,n,l,c),n.child)}function Xh(e,n,i,l,c){if(e===null){var f=i.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=f,Zh(e,n,f,l,c)):(e=Ks(i.type,null,l,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!(e.lanes&c)){var y=f.memoizedProps;if(i=i.compare,i=i!==null?i:Ki,i(y,l)&&e.ref===n.ref)return mn(e,n,c)}return n.flags|=1,e=Bn(f,l),e.ref=n.ref,e.return=n,n.child=e}function Zh(e,n,i,l,c){if(e!==null){var f=e.memoizedProps;if(Ki(f,l)&&e.ref===n.ref)if(jt=!1,n.pendingProps=l=f,(e.lanes&c)!==0)e.flags&131072&&(jt=!0);else return n.lanes=e.lanes,mn(e,n,c)}return xu(e,n,i,l,c)}function Jh(e,n,i){var l=n.pendingProps,c=l.children,f=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pe(ii,Lt),Lt|=i;else{if(!(i&1073741824))return e=f!==null?f.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Pe(ii,Lt),Lt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=f!==null?f.baseLanes:i,Pe(ii,Lt),Lt|=l}else f!==null?(l=f.baseLanes|i,n.memoizedState=null):l=i,Pe(ii,Lt),Lt|=l;return pt(e,n,c,i),n.child}function ep(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function xu(e,n,i,l,c){var f=wt(i)?ir:lt.current;return f=Yr(n,f),ei(n,c),i=lu(e,n,i,l,f,c),l=uu(),e!==null&&!jt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~c,mn(e,n,c)):(De&&l&&Hl(n),n.flags|=1,pt(e,n,i,c),n.child)}function tp(e,n,i,l,c){if(wt(i)){var f=!0;js(n)}else f=!1;if(ei(n,c),n.stateNode===null)_s(e,n),Uh(n,i,l),mu(n,i,l,c),l=!0;else if(e===null){var y=n.stateNode,j=n.memoizedProps;y.props=j;var S=y.context,V=i.contextType;typeof V=="object"&&V!==null?V=Dt(V):(V=wt(i)?ir:lt.current,V=Yr(n,V));var O=i.getDerivedStateFromProps,B=typeof O=="function"||typeof y.getSnapshotBeforeUpdate=="function";B||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(j!==l||S!==V)&&Wh(n,y,l,V),Vn=!1;var _=n.memoizedState;y.state=_,Rs(n,l,y,c),S=n.memoizedState,j!==l||_!==S||vt.current||Vn?(typeof O=="function"&&(pu(n,i,O,l),S=n.memoizedState),(j=Vn||$h(n,i,j,l,_,S,V))?(B||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(n.flags|=4194308)):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=S),y.props=l,y.state=S,y.context=V,l=j):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{y=n.stateNode,yh(e,n),j=n.memoizedProps,V=n.type===n.elementType?j:Ht(n.type,j),y.props=V,B=n.pendingProps,_=y.context,S=i.contextType,typeof S=="object"&&S!==null?S=Dt(S):(S=wt(i)?ir:lt.current,S=Yr(n,S));var Q=i.getDerivedStateFromProps;(O=typeof Q=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(j!==B||_!==S)&&Wh(n,y,l,S),Vn=!1,_=n.memoizedState,y.state=_,Rs(n,l,y,c);var J=n.memoizedState;j!==B||_!==J||vt.current||Vn?(typeof Q=="function"&&(pu(n,i,Q,l),J=n.memoizedState),(V=Vn||$h(n,i,V,l,_,J,S)||!1)?(O||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(l,J,S),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(l,J,S)),typeof y.componentDidUpdate=="function"&&(n.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof y.componentDidUpdate!="function"||j===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=J),y.props=l,y.state=J,y.context=S,l=V):(typeof y.componentDidUpdate!="function"||j===e.memoizedProps&&_===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||j===e.memoizedProps&&_===e.memoizedState||(n.flags|=1024),l=!1)}return vu(e,n,i,l,f,c)}function vu(e,n,i,l,c,f){ep(e,n);var y=(n.flags&128)!==0;if(!l&&!y)return c&&sh(n,i,!1),mn(e,n,f);l=n.stateNode,wv.current=n;var j=y&&typeof i.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&y?(n.child=Zr(n,e.child,null,f),n.child=Zr(n,null,j,f)):pt(e,n,j,f),n.memoizedState=l.state,c&&sh(n,i,!0),n.child}function np(e){var n=e.stateNode;n.pendingContext?ih(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ih(e,n.context,!1),nu(e,n.containerInfo)}function rp(e,n,i,l,c){return Xr(),Ql(c),n.flags|=256,pt(e,n,i,l),n.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function ju(e){return{baseLanes:e,cachePool:null,transitions:null}}function ip(e,n,i){var l=n.pendingProps,c=Fe.current,f=!1,y=(n.flags&128)!==0,j;if((j=y)||(j=e!==null&&e.memoizedState===null?!1:(c&2)!==0),j?(f=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(c|=1),Pe(Fe,c&1),e===null)return Yl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(y=l.children,e=l.fallback,f?(l=n.mode,f=n.child,y={mode:"hidden",children:y},!(l&1)&&f!==null?(f.childLanes=0,f.pendingProps=y):f=Xs(y,l,0,null),e=pr(e,l,i,null),f.return=n,e.return=n,f.sibling=e,n.child=f,n.child.memoizedState=ju(i),n.memoizedState=wu,e):ku(n,y));if(c=e.memoizedState,c!==null&&(j=c.dehydrated,j!==null))return jv(e,n,y,l,j,c,i);if(f){f=l.fallback,y=n.mode,c=e.child,j=c.sibling;var S={mode:"hidden",children:l.children};return!(y&1)&&n.child!==c?(l=n.child,l.childLanes=0,l.pendingProps=S,n.deletions=null):(l=Bn(c,S),l.subtreeFlags=c.subtreeFlags&14680064),j!==null?f=Bn(j,f):(f=pr(f,y,i,null),f.flags|=2),f.return=n,l.return=n,l.sibling=f,n.child=l,l=f,f=n.child,y=e.child.memoizedState,y=y===null?ju(i):{baseLanes:y.baseLanes|i,cachePool:null,transitions:y.transitions},f.memoizedState=y,f.childLanes=e.childLanes&~i,n.memoizedState=wu,l}return f=e.child,e=f.sibling,l=Bn(f,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=i),l.return=n,l.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=l,n.memoizedState=null,l}function ku(e,n){return n=Xs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ns(e,n,i,l){return l!==null&&Ql(l),Zr(n,e.child,null,i),e=ku(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jv(e,n,i,l,c,f,y){if(i)return n.flags&256?(n.flags&=-257,l=gu(Error(o(422))),Ns(e,n,y,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(f=l.fallback,c=n.mode,l=Xs({mode:"visible",children:l.children},c,0,null),f=pr(f,c,y,null),f.flags|=2,l.return=n,f.return=n,l.sibling=f,n.child=l,n.mode&1&&Zr(n,e.child,null,y),n.child.memoizedState=ju(y),n.memoizedState=wu,f);if(!(n.mode&1))return Ns(e,n,y,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var j=l.dgst;return l=j,f=Error(o(419)),l=gu(f,l,void 0),Ns(e,n,y,l)}if(j=(y&e.childLanes)!==0,jt||j){if(l=Je,l!==null){switch(y&-y){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=c&(l.suspendedLanes|y)?0:c,c!==0&&c!==f.retryLane&&(f.retryLane=c,hn(e,c),Yt(l,e,c,-1))}return Nu(),l=gu(Error(o(421))),Ns(e,n,y,l)}return c.data==="$?"?(n.flags|=128,n.child=e.child,n=Vv.bind(null,e),c._reactRetry=n,null):(e=f.treeContext,Et=Rn(c.nextSibling),Tt=n,De=!0,Wt=null,e!==null&&(Mt[Vt++]=dn,Mt[Vt++]=fn,Mt[Vt++]=or,dn=e.id,fn=e.overflow,or=n),n=ku(n,l.children),n.flags|=4096,n)}function op(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Jl(e.return,n,i)}function Su(e,n,i,l,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=i,f.tailMode=c)}function sp(e,n,i){var l=n.pendingProps,c=l.revealOrder,f=l.tail;if(pt(e,n,l.children,i),l=Fe.current,l&2)l=l&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&op(e,i,n);else if(e.tag===19)op(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(Pe(Fe,l),!(n.mode&1))n.memoizedState=null;else switch(c){case"forwards":for(i=n.child,c=null;i!==null;)e=i.alternate,e!==null&&As(e)===null&&(c=i),i=i.sibling;i=c,i===null?(c=n.child,n.child=null):(c=i.sibling,i.sibling=null),Su(n,!1,c,i,f);break;case"backwards":for(i=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&As(e)===null){n.child=c;break}e=c.sibling,c.sibling=i,i=c,c=e}Su(n,!0,i,null,f);break;case"together":Su(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function _s(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function mn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),cr|=n.lanes,!(i&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,i=Bn(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=Bn(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function kv(e,n,i){switch(n.tag){case 3:np(n),Xr();break;case 5:wh(n);break;case 1:wt(n.type)&&js(n);break;case 4:nu(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,c=n.memoizedProps.value;Pe(Ts,l._currentValue),l._currentValue=c;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Pe(Fe,Fe.current&1),n.flags|=128,null):i&n.child.childLanes?ip(e,n,i):(Pe(Fe,Fe.current&1),e=mn(e,n,i),e!==null?e.sibling:null);Pe(Fe,Fe.current&1);break;case 19:if(l=(i&n.childLanes)!==0,e.flags&128){if(l)return sp(e,n,i);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pe(Fe,Fe.current),l)break;return null;case 22:case 23:return n.lanes=0,Jh(e,n,i)}return mn(e,n,i)}var ap,bu,lp,up;ap=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},bu=function(){},lp=function(e,n,i,l){var c=e.memoizedProps;if(c!==l){e=n.stateNode,lr(nn.current);var f=null;switch(i){case"input":c=Ja(e,c),l=Ja(e,l),f=[];break;case"select":c=Y({},c,{value:void 0}),l=Y({},l,{value:void 0}),f=[];break;case"textarea":c=nl(e,c),l=nl(e,l),f=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=xs)}il(i,l);var y;i=null;for(V in c)if(!l.hasOwnProperty(V)&&c.hasOwnProperty(V)&&c[V]!=null)if(V==="style"){var j=c[V];for(y in j)j.hasOwnProperty(y)&&(i||(i={}),i[y]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(u.hasOwnProperty(V)?f||(f=[]):(f=f||[]).push(V,null));for(V in l){var S=l[V];if(j=c!=null?c[V]:void 0,l.hasOwnProperty(V)&&S!==j&&(S!=null||j!=null))if(V==="style")if(j){for(y in j)!j.hasOwnProperty(y)||S&&S.hasOwnProperty(y)||(i||(i={}),i[y]="");for(y in S)S.hasOwnProperty(y)&&j[y]!==S[y]&&(i||(i={}),i[y]=S[y])}else i||(f||(f=[]),f.push(V,i)),i=S;else V==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,j=j?j.__html:void 0,S!=null&&j!==S&&(f=f||[]).push(V,S)):V==="children"?typeof S!="string"&&typeof S!="number"||(f=f||[]).push(V,""+S):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(u.hasOwnProperty(V)?(S!=null&&V==="onScroll"&&Re("scroll",e),f||j===S||(f=[])):(f=f||[]).push(V,S))}i&&(f=f||[]).push("style",i);var V=f;(n.updateQueue=V)&&(n.flags|=4)}},up=function(e,n,i,l){i!==l&&(n.flags|=4)};function fo(e,n){if(!De)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ct(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)i|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function Sv(e,n,i){var l=n.pendingProps;switch(ql(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(n),null;case 1:return wt(n.type)&&ws(),ct(n),null;case 3:return l=n.stateNode,ti(),Ae(vt),Ae(lt),ou(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Cs(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Wt!==null&&(Du(Wt),Wt=null))),bu(e,n),ct(n),null;case 5:ru(n);var c=lr(so.current);if(i=n.type,e!==null&&n.stateNode!=null)lp(e,n,i,l,c),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(o(166));return ct(n),null}if(e=lr(nn.current),Cs(n)){l=n.stateNode,i=n.type;var f=n.memoizedProps;switch(l[tn]=n,l[to]=f,e=(n.mode&1)!==0,i){case"dialog":Re("cancel",l),Re("close",l);break;case"iframe":case"object":case"embed":Re("load",l);break;case"video":case"audio":for(c=0;c<Zi.length;c++)Re(Zi[c],l);break;case"source":Re("error",l);break;case"img":case"image":case"link":Re("error",l),Re("load",l);break;case"details":Re("toggle",l);break;case"input":$d(l,f),Re("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!f.multiple},Re("invalid",l);break;case"textarea":Hd(l,f),Re("invalid",l)}il(i,f),c=null;for(var y in f)if(f.hasOwnProperty(y)){var j=f[y];y==="children"?typeof j=="string"?l.textContent!==j&&(f.suppressHydrationWarning!==!0&&ys(l.textContent,j,e),c=["children",j]):typeof j=="number"&&l.textContent!==""+j&&(f.suppressHydrationWarning!==!0&&ys(l.textContent,j,e),c=["children",""+j]):u.hasOwnProperty(y)&&j!=null&&y==="onScroll"&&Re("scroll",l)}switch(i){case"input":nt(l),Wd(l,f,!0);break;case"textarea":nt(l),Gd(l);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(l.onclick=xs)}l=c,n.updateQueue=l,l!==null&&(n.flags|=4)}else{y=c.nodeType===9?c:c.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yd(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=y.createElement(i,{is:l.is}):(e=y.createElement(i),i==="select"&&(y=e,l.multiple?y.multiple=!0:l.size&&(y.size=l.size))):e=y.createElementNS(e,i),e[tn]=n,e[to]=l,ap(e,n,!1,!1),n.stateNode=e;e:{switch(y=ol(i,l),i){case"dialog":Re("cancel",e),Re("close",e),c=l;break;case"iframe":case"object":case"embed":Re("load",e),c=l;break;case"video":case"audio":for(c=0;c<Zi.length;c++)Re(Zi[c],e);c=l;break;case"source":Re("error",e),c=l;break;case"img":case"image":case"link":Re("error",e),Re("load",e),c=l;break;case"details":Re("toggle",e),c=l;break;case"input":$d(e,l),c=Ja(e,l),Re("invalid",e);break;case"option":c=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},c=Y({},l,{value:void 0}),Re("invalid",e);break;case"textarea":Hd(e,l),c=nl(e,l),Re("invalid",e);break;default:c=l}il(i,c),j=c;for(f in j)if(j.hasOwnProperty(f)){var S=j[f];f==="style"?Xd(e,S):f==="dangerouslySetInnerHTML"?(S=S?S.__html:void 0,S!=null&&Qd(e,S)):f==="children"?typeof S=="string"?(i!=="textarea"||S!=="")&&Mi(e,S):typeof S=="number"&&Mi(e,""+S):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(u.hasOwnProperty(f)?S!=null&&f==="onScroll"&&Re("scroll",e):S!=null&&L(e,f,S,y))}switch(i){case"input":nt(e),Wd(e,l,!1);break;case"textarea":nt(e),Gd(e);break;case"option":l.value!=null&&e.setAttribute("value",""+pe(l.value));break;case"select":e.multiple=!!l.multiple,f=l.value,f!=null?Fr(e,!!l.multiple,f,!1):l.defaultValue!=null&&Fr(e,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(e.onclick=xs)}switch(i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ct(n),null;case 6:if(e&&n.stateNode!=null)up(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(o(166));if(i=lr(so.current),lr(nn.current),Cs(n)){if(l=n.stateNode,i=n.memoizedProps,l[tn]=n,(f=l.nodeValue!==i)&&(e=Tt,e!==null))switch(e.tag){case 3:ys(l.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ys(l.nodeValue,i,(e.mode&1)!==0)}f&&(n.flags|=4)}else l=(i.nodeType===9?i:i.ownerDocument).createTextNode(l),l[tn]=n,n.stateNode=l}return ct(n),null;case 13:if(Ae(Fe),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Et!==null&&n.mode&1&&!(n.flags&128))fh(),Xr(),n.flags|=98560,f=!1;else if(f=Cs(n),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(o(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(o(317));f[tn]=n}else Xr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ct(n),f=!1}else Wt!==null&&(Du(Wt),Wt=null),f=!0;if(!f)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(e===null||Fe.current&1?Xe===0&&(Xe=3):Nu())),n.updateQueue!==null&&(n.flags|=4),ct(n),null);case 4:return ti(),bu(e,n),e===null&&Ji(n.stateNode.containerInfo),ct(n),null;case 10:return Zl(n.type._context),ct(n),null;case 17:return wt(n.type)&&ws(),ct(n),null;case 19:if(Ae(Fe),f=n.memoizedState,f===null)return ct(n),null;if(l=(n.flags&128)!==0,y=f.rendering,y===null)if(l)fo(f,!1);else{if(Xe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(y=As(e),y!==null){for(n.flags|=128,fo(f,!1),l=y.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=i,i=n.child;i!==null;)f=i,e=l,f.flags&=14680066,y=f.alternate,y===null?(f.childLanes=0,f.lanes=e,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=y.childLanes,f.lanes=y.lanes,f.child=y.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=y.memoizedProps,f.memoizedState=y.memoizedState,f.updateQueue=y.updateQueue,f.type=y.type,e=y.dependencies,f.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Pe(Fe,Fe.current&1|2),n.child}e=e.sibling}f.tail!==null&&Be()>oi&&(n.flags|=128,l=!0,fo(f,!1),n.lanes=4194304)}else{if(!l)if(e=As(y),e!==null){if(n.flags|=128,l=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),fo(f,!0),f.tail===null&&f.tailMode==="hidden"&&!y.alternate&&!De)return ct(n),null}else 2*Be()-f.renderingStartTime>oi&&i!==1073741824&&(n.flags|=128,l=!0,fo(f,!1),n.lanes=4194304);f.isBackwards?(y.sibling=n.child,n.child=y):(i=f.last,i!==null?i.sibling=y:n.child=y,f.last=y)}return f.tail!==null?(n=f.tail,f.rendering=n,f.tail=n.sibling,f.renderingStartTime=Be(),n.sibling=null,i=Fe.current,Pe(Fe,l?i&1|2:i&1),n):(ct(n),null);case 22:case 23:return zu(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?Lt&1073741824&&(ct(n),n.subtreeFlags&6&&(n.flags|=8192)):ct(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function bv(e,n){switch(ql(n),n.tag){case 1:return wt(n.type)&&ws(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ti(),Ae(vt),Ae(lt),ou(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ru(n),null;case 13:if(Ae(Fe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));Xr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ae(Fe),null;case 4:return ti(),null;case 10:return Zl(n.type._context),null;case 22:case 23:return zu(),null;case 24:return null;default:return null}}var Os=!1,dt=!1,Cv=typeof WeakSet=="function"?WeakSet:Set,Z=null;function ri(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(l){Oe(e,n,l)}else i.current=null}function Cu(e,n,i){try{i()}catch(l){Oe(e,n,l)}}var cp=!1;function Pv(e,n){if(zl=ss,e=$f(),Ll(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var c=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var y=0,j=-1,S=-1,V=0,O=0,B=e,_=null;t:for(;;){for(var Q;B!==i||c!==0&&B.nodeType!==3||(j=y+c),B!==f||l!==0&&B.nodeType!==3||(S=y+l),B.nodeType===3&&(y+=B.nodeValue.length),(Q=B.firstChild)!==null;)_=B,B=Q;for(;;){if(B===e)break t;if(_===i&&++V===c&&(j=y),_===f&&++O===l&&(S=y),(Q=B.nextSibling)!==null)break;B=_,_=B.parentNode}B=Q}i=j===-1||S===-1?null:{start:j,end:S}}else i=null}i=i||{start:0,end:0}}else i=null;for(Nl={focusedElem:e,selectionRange:i},ss=!1,Z=n;Z!==null;)if(n=Z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Z=e;else for(;Z!==null;){n=Z;try{var J=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(J!==null){var ee=J.memoizedProps,$e=J.memoizedState,A=n.stateNode,C=A.getSnapshotBeforeUpdate(n.elementType===n.type?ee:Ht(n.type,ee),$e);A.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var M=n.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(U){Oe(n,n.return,U)}if(e=n.sibling,e!==null){e.return=n.return,Z=e;break}Z=n.return}return J=cp,cp=!1,J}function ho(e,n,i){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&e)===e){var f=c.destroy;c.destroy=void 0,f!==void 0&&Cu(n,i,f)}c=c.next}while(c!==l)}}function Bs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.create;i.destroy=l()}i=i.next}while(i!==n)}}function Pu(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function dp(e){var n=e.alternate;n!==null&&(e.alternate=null,dp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[tn],delete n[to],delete n[$l],delete n[lv],delete n[uv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fp(e){return e.tag===5||e.tag===3||e.tag===4}function hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Tu(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=xs));else if(l!==4&&(e=e.child,e!==null))for(Tu(e,n,i),e=e.sibling;e!==null;)Tu(e,n,i),e=e.sibling}function Eu(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Eu(e,n,i),e=e.sibling;e!==null;)Eu(e,n,i),e=e.sibling}var rt=null,qt=!1;function Fn(e,n,i){for(i=i.child;i!==null;)pp(e,n,i),i=i.sibling}function pp(e,n,i){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(es,i)}catch{}switch(i.tag){case 5:dt||ri(i,n);case 6:var l=rt,c=qt;rt=null,Fn(e,n,i),rt=l,qt=c,rt!==null&&(qt?(e=rt,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):rt.removeChild(i.stateNode));break;case 18:rt!==null&&(qt?(e=rt,i=i.stateNode,e.nodeType===8?Bl(e.parentNode,i):e.nodeType===1&&Bl(e,i),Wi(e)):Bl(rt,i.stateNode));break;case 4:l=rt,c=qt,rt=i.stateNode.containerInfo,qt=!0,Fn(e,n,i),rt=l,qt=c;break;case 0:case 11:case 14:case 15:if(!dt&&(l=i.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var f=c,y=f.destroy;f=f.tag,y!==void 0&&(f&2||f&4)&&Cu(i,n,y),c=c.next}while(c!==l)}Fn(e,n,i);break;case 1:if(!dt&&(ri(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=i.memoizedProps,l.state=i.memoizedState,l.componentWillUnmount()}catch(j){Oe(i,n,j)}Fn(e,n,i);break;case 21:Fn(e,n,i);break;case 22:i.mode&1?(dt=(l=dt)||i.memoizedState!==null,Fn(e,n,i),dt=l):Fn(e,n,i);break;default:Fn(e,n,i)}}function mp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Cv),n.forEach(function(l){var c=Dv.bind(null,e,l);i.has(l)||(i.add(l),l.then(c,c))})}}function Gt(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var c=i[l];try{var f=e,y=n,j=y;e:for(;j!==null;){switch(j.tag){case 5:rt=j.stateNode,qt=!1;break e;case 3:rt=j.stateNode.containerInfo,qt=!0;break e;case 4:rt=j.stateNode.containerInfo,qt=!0;break e}j=j.return}if(rt===null)throw Error(o(160));pp(f,y,c),rt=null,qt=!1;var S=c.alternate;S!==null&&(S.return=null),c.return=null}catch(V){Oe(c,n,V)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)gp(n,e),n=n.sibling}function gp(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Gt(n,e),on(e),l&4){try{ho(3,e,e.return),Bs(3,e)}catch(ee){Oe(e,e.return,ee)}try{ho(5,e,e.return)}catch(ee){Oe(e,e.return,ee)}}break;case 1:Gt(n,e),on(e),l&512&&i!==null&&ri(i,i.return);break;case 5:if(Gt(n,e),on(e),l&512&&i!==null&&ri(i,i.return),e.flags&32){var c=e.stateNode;try{Mi(c,"")}catch(ee){Oe(e,e.return,ee)}}if(l&4&&(c=e.stateNode,c!=null)){var f=e.memoizedProps,y=i!==null?i.memoizedProps:f,j=e.type,S=e.updateQueue;if(e.updateQueue=null,S!==null)try{j==="input"&&f.type==="radio"&&f.name!=null&&Ud(c,f),ol(j,y);var V=ol(j,f);for(y=0;y<S.length;y+=2){var O=S[y],B=S[y+1];O==="style"?Xd(c,B):O==="dangerouslySetInnerHTML"?Qd(c,B):O==="children"?Mi(c,B):L(c,O,B,V)}switch(j){case"input":el(c,f);break;case"textarea":qd(c,f);break;case"select":var _=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!f.multiple;var Q=f.value;Q!=null?Fr(c,!!f.multiple,Q,!1):_!==!!f.multiple&&(f.defaultValue!=null?Fr(c,!!f.multiple,f.defaultValue,!0):Fr(c,!!f.multiple,f.multiple?[]:"",!1))}c[to]=f}catch(ee){Oe(e,e.return,ee)}}break;case 6:if(Gt(n,e),on(e),l&4){if(e.stateNode===null)throw Error(o(162));c=e.stateNode,f=e.memoizedProps;try{c.nodeValue=f}catch(ee){Oe(e,e.return,ee)}}break;case 3:if(Gt(n,e),on(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Wi(n.containerInfo)}catch(ee){Oe(e,e.return,ee)}break;case 4:Gt(n,e),on(e);break;case 13:Gt(n,e),on(e),c=e.child,c.flags&8192&&(f=c.memoizedState!==null,c.stateNode.isHidden=f,!f||c.alternate!==null&&c.alternate.memoizedState!==null||(Au=Be())),l&4&&mp(e);break;case 22:if(O=i!==null&&i.memoizedState!==null,e.mode&1?(dt=(V=dt)||O,Gt(n,e),dt=V):Gt(n,e),on(e),l&8192){if(V=e.memoizedState!==null,(e.stateNode.isHidden=V)&&!O&&e.mode&1)for(Z=e,O=e.child;O!==null;){for(B=Z=O;Z!==null;){switch(_=Z,Q=_.child,_.tag){case 0:case 11:case 14:case 15:ho(4,_,_.return);break;case 1:ri(_,_.return);var J=_.stateNode;if(typeof J.componentWillUnmount=="function"){l=_,i=_.return;try{n=l,J.props=n.memoizedProps,J.state=n.memoizedState,J.componentWillUnmount()}catch(ee){Oe(l,i,ee)}}break;case 5:ri(_,_.return);break;case 22:if(_.memoizedState!==null){vp(B);continue}}Q!==null?(Q.return=_,Z=Q):vp(B)}O=O.sibling}e:for(O=null,B=e;;){if(B.tag===5){if(O===null){O=B;try{c=B.stateNode,V?(f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(j=B.stateNode,S=B.memoizedProps.style,y=S!=null&&S.hasOwnProperty("display")?S.display:null,j.style.display=Kd("display",y))}catch(ee){Oe(e,e.return,ee)}}}else if(B.tag===6){if(O===null)try{B.stateNode.nodeValue=V?"":B.memoizedProps}catch(ee){Oe(e,e.return,ee)}}else if((B.tag!==22&&B.tag!==23||B.memoizedState===null||B===e)&&B.child!==null){B.child.return=B,B=B.child;continue}if(B===e)break e;for(;B.sibling===null;){if(B.return===null||B.return===e)break e;O===B&&(O=null),B=B.return}O===B&&(O=null),B.sibling.return=B.return,B=B.sibling}}break;case 19:Gt(n,e),on(e),l&4&&mp(e);break;case 21:break;default:Gt(n,e),on(e)}}function on(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(fp(i)){var l=i;break e}i=i.return}throw Error(o(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Mi(c,""),l.flags&=-33);var f=hp(e);Eu(e,f,c);break;case 3:case 4:var y=l.stateNode.containerInfo,j=hp(e);Tu(e,j,y);break;default:throw Error(o(161))}}catch(S){Oe(e,e.return,S)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Tv(e,n,i){Z=e,yp(e)}function yp(e,n,i){for(var l=(e.mode&1)!==0;Z!==null;){var c=Z,f=c.child;if(c.tag===22&&l){var y=c.memoizedState!==null||Os;if(!y){var j=c.alternate,S=j!==null&&j.memoizedState!==null||dt;j=Os;var V=dt;if(Os=y,(dt=S)&&!V)for(Z=c;Z!==null;)y=Z,S=y.child,y.tag===22&&y.memoizedState!==null?wp(c):S!==null?(S.return=y,Z=S):wp(c);for(;f!==null;)Z=f,yp(f),f=f.sibling;Z=c,Os=j,dt=V}xp(e)}else c.subtreeFlags&8772&&f!==null?(f.return=c,Z=f):xp(e)}}function xp(e){for(;Z!==null;){var n=Z;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:dt||Bs(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!dt)if(i===null)l.componentDidMount();else{var c=n.elementType===n.type?i.memoizedProps:Ht(n.type,i.memoizedProps);l.componentDidUpdate(c,i.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var f=n.updateQueue;f!==null&&vh(n,f,l);break;case 3:var y=n.updateQueue;if(y!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}vh(n,y,i)}break;case 5:var j=n.stateNode;if(i===null&&n.flags&4){i=j;var S=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":S.autoFocus&&i.focus();break;case"img":S.src&&(i.src=S.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var V=n.alternate;if(V!==null){var O=V.memoizedState;if(O!==null){var B=O.dehydrated;B!==null&&Wi(B)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}dt||n.flags&512&&Pu(n)}catch(_){Oe(n,n.return,_)}}if(n===e){Z=null;break}if(i=n.sibling,i!==null){i.return=n.return,Z=i;break}Z=n.return}}function vp(e){for(;Z!==null;){var n=Z;if(n===e){Z=null;break}var i=n.sibling;if(i!==null){i.return=n.return,Z=i;break}Z=n.return}}function wp(e){for(;Z!==null;){var n=Z;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Bs(4,n)}catch(S){Oe(n,i,S)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var c=n.return;try{l.componentDidMount()}catch(S){Oe(n,c,S)}}var f=n.return;try{Pu(n)}catch(S){Oe(n,f,S)}break;case 5:var y=n.return;try{Pu(n)}catch(S){Oe(n,y,S)}}}catch(S){Oe(n,n.return,S)}if(n===e){Z=null;break}var j=n.sibling;if(j!==null){j.return=n.return,Z=j;break}Z=n.return}}var Ev=Math.ceil,$s=N.ReactCurrentDispatcher,Lu=N.ReactCurrentOwner,zt=N.ReactCurrentBatchConfig,we=0,Je=null,We=null,it=0,Lt=0,ii=An(0),Xe=0,po=null,cr=0,Us=0,Ru=0,mo=null,kt=null,Au=0,oi=1/0,gn=null,Ws=!1,Iu=null,zn=null,Hs=!1,Nn=null,qs=0,go=0,Mu=null,Gs=-1,Ys=0;function mt(){return we&6?Be():Gs!==-1?Gs:Gs=Be()}function _n(e){return e.mode&1?we&2&&it!==0?it&-it:dv.transition!==null?(Ys===0&&(Ys=hf()),Ys):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:kf(e.type)),e):1}function Yt(e,n,i,l){if(50<go)throw go=0,Mu=null,Error(o(185));_i(e,i,l),(!(we&2)||e!==Je)&&(e===Je&&(!(we&2)&&(Us|=i),Xe===4&&On(e,it)),St(e,l),i===1&&we===0&&!(n.mode&1)&&(oi=Be()+500,ks&&Mn()))}function St(e,n){var i=e.callbackNode;dx(e,n);var l=rs(e,e===Je?it:0);if(l===0)i!==null&&cf(i),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(i!=null&&cf(i),n===1)e.tag===0?cv(kp.bind(null,e)):ah(kp.bind(null,e)),sv(function(){!(we&6)&&Mn()}),i=null;else{switch(pf(l)){case 1:i=fl;break;case 4:i=df;break;case 16:i=Jo;break;case 536870912:i=ff;break;default:i=Jo}i=Rp(i,jp.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function jp(e,n){if(Gs=-1,Ys=0,we&6)throw Error(o(327));var i=e.callbackNode;if(si()&&e.callbackNode!==i)return null;var l=rs(e,e===Je?it:0);if(l===0)return null;if(l&30||l&e.expiredLanes||n)n=Qs(e,l);else{n=l;var c=we;we|=2;var f=bp();(Je!==e||it!==n)&&(gn=null,oi=Be()+500,fr(e,n));do try{Av();break}catch(j){Sp(e,j)}while(!0);Xl(),$s.current=f,we=c,We!==null?n=0:(Je=null,it=0,n=Xe)}if(n!==0){if(n===2&&(c=hl(e),c!==0&&(l=c,n=Vu(e,c))),n===1)throw i=po,fr(e,0),On(e,l),St(e,Be()),i;if(n===6)On(e,l);else{if(c=e.current.alternate,!(l&30)&&!Lv(c)&&(n=Qs(e,l),n===2&&(f=hl(e),f!==0&&(l=f,n=Vu(e,f))),n===1))throw i=po,fr(e,0),On(e,l),St(e,Be()),i;switch(e.finishedWork=c,e.finishedLanes=l,n){case 0:case 1:throw Error(o(345));case 2:hr(e,kt,gn);break;case 3:if(On(e,l),(l&130023424)===l&&(n=Au+500-Be(),10<n)){if(rs(e,0)!==0)break;if(c=e.suspendedLanes,(c&l)!==l){mt(),e.pingedLanes|=e.suspendedLanes&c;break}e.timeoutHandle=Ol(hr.bind(null,e,kt,gn),n);break}hr(e,kt,gn);break;case 4:if(On(e,l),(l&4194240)===l)break;for(n=e.eventTimes,c=-1;0<l;){var y=31-$t(l);f=1<<y,y=n[y],y>c&&(c=y),l&=~f}if(l=c,l=Be()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Ev(l/1960))-l,10<l){e.timeoutHandle=Ol(hr.bind(null,e,kt,gn),l);break}hr(e,kt,gn);break;case 5:hr(e,kt,gn);break;default:throw Error(o(329))}}}return St(e,Be()),e.callbackNode===i?jp.bind(null,e):null}function Vu(e,n){var i=mo;return e.current.memoizedState.isDehydrated&&(fr(e,n).flags|=256),e=Qs(e,n),e!==2&&(n=kt,kt=i,n!==null&&Du(n)),e}function Du(e){kt===null?kt=e:kt.push.apply(kt,e)}function Lv(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var l=0;l<i.length;l++){var c=i[l],f=c.getSnapshot;c=c.value;try{if(!Ut(f(),c))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function On(e,n){for(n&=~Ru,n&=~Us,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-$t(n),l=1<<i;e[i]=-1,n&=~l}}function kp(e){if(we&6)throw Error(o(327));si();var n=rs(e,0);if(!(n&1))return St(e,Be()),null;var i=Qs(e,n);if(e.tag!==0&&i===2){var l=hl(e);l!==0&&(n=l,i=Vu(e,l))}if(i===1)throw i=po,fr(e,0),On(e,n),St(e,Be()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,hr(e,kt,gn),St(e,Be()),null}function Fu(e,n){var i=we;we|=1;try{return e(n)}finally{we=i,we===0&&(oi=Be()+500,ks&&Mn())}}function dr(e){Nn!==null&&Nn.tag===0&&!(we&6)&&si();var n=we;we|=1;var i=zt.transition,l=Ce;try{if(zt.transition=null,Ce=1,e)return e()}finally{Ce=l,zt.transition=i,we=n,!(we&6)&&Mn()}}function zu(){Lt=ii.current,Ae(ii)}function fr(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,ov(i)),We!==null)for(i=We.return;i!==null;){var l=i;switch(ql(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ws();break;case 3:ti(),Ae(vt),Ae(lt),ou();break;case 5:ru(l);break;case 4:ti();break;case 13:Ae(Fe);break;case 19:Ae(Fe);break;case 10:Zl(l.type._context);break;case 22:case 23:zu()}i=i.return}if(Je=e,We=e=Bn(e.current,null),it=Lt=n,Xe=0,po=null,Ru=Us=cr=0,kt=mo=null,ar!==null){for(n=0;n<ar.length;n++)if(i=ar[n],l=i.interleaved,l!==null){i.interleaved=null;var c=l.next,f=i.pending;if(f!==null){var y=f.next;f.next=c,l.next=y}i.pending=l}ar=null}return e}function Sp(e,n){do{var i=We;try{if(Xl(),Is.current=Fs,Ms){for(var l=ze.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Ms=!1}if(ur=0,Ze=Ke=ze=null,ao=!1,lo=0,Lu.current=null,i===null||i.return===null){Xe=1,po=n,We=null;break}e:{var f=e,y=i.return,j=i,S=n;if(n=it,j.flags|=32768,S!==null&&typeof S=="object"&&typeof S.then=="function"){var V=S,O=j,B=O.tag;if(!(O.mode&1)&&(B===0||B===11||B===15)){var _=O.alternate;_?(O.updateQueue=_.updateQueue,O.memoizedState=_.memoizedState,O.lanes=_.lanes):(O.updateQueue=null,O.memoizedState=null)}var Q=Yh(y);if(Q!==null){Q.flags&=-257,Qh(Q,y,j,f,n),Q.mode&1&&Gh(f,V,n),n=Q,S=V;var J=n.updateQueue;if(J===null){var ee=new Set;ee.add(S),n.updateQueue=ee}else J.add(S);break e}else{if(!(n&1)){Gh(f,V,n),Nu();break e}S=Error(o(426))}}else if(De&&j.mode&1){var $e=Yh(y);if($e!==null){!($e.flags&65536)&&($e.flags|=256),Qh($e,y,j,f,n),Ql(ni(S,j));break e}}f=S=ni(S,j),Xe!==4&&(Xe=2),mo===null?mo=[f]:mo.push(f),f=y;do{switch(f.tag){case 3:f.flags|=65536,n&=-n,f.lanes|=n;var A=Hh(f,S,n);xh(f,A);break e;case 1:j=S;var C=f.type,M=f.stateNode;if(!(f.flags&128)&&(typeof C.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(zn===null||!zn.has(M)))){f.flags|=65536,n&=-n,f.lanes|=n;var U=qh(f,j,n);xh(f,U);break e}}f=f.return}while(f!==null)}Pp(i)}catch(te){n=te,We===i&&i!==null&&(We=i=i.return);continue}break}while(!0)}function bp(){var e=$s.current;return $s.current=Fs,e===null?Fs:e}function Nu(){(Xe===0||Xe===3||Xe===2)&&(Xe=4),Je===null||!(cr&268435455)&&!(Us&268435455)||On(Je,it)}function Qs(e,n){var i=we;we|=2;var l=bp();(Je!==e||it!==n)&&(gn=null,fr(e,n));do try{Rv();break}catch(c){Sp(e,c)}while(!0);if(Xl(),we=i,$s.current=l,We!==null)throw Error(o(261));return Je=null,it=0,Xe}function Rv(){for(;We!==null;)Cp(We)}function Av(){for(;We!==null&&!nx();)Cp(We)}function Cp(e){var n=Lp(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,n===null?Pp(e):We=n,Lu.current=null}function Pp(e){var n=e;do{var i=n.alternate;if(e=n.return,n.flags&32768){if(i=bv(i,n),i!==null){i.flags&=32767,We=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xe=6,We=null;return}}else if(i=Sv(i,n,Lt),i!==null){We=i;return}if(n=n.sibling,n!==null){We=n;return}We=n=e}while(n!==null);Xe===0&&(Xe=5)}function hr(e,n,i){var l=Ce,c=zt.transition;try{zt.transition=null,Ce=1,Iv(e,n,i,l)}finally{zt.transition=c,Ce=l}return null}function Iv(e,n,i,l){do si();while(Nn!==null);if(we&6)throw Error(o(327));i=e.finishedWork;var c=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var f=i.lanes|i.childLanes;if(fx(e,f),e===Je&&(We=Je=null,it=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Hs||(Hs=!0,Rp(Jo,function(){return si(),null})),f=(i.flags&15990)!==0,i.subtreeFlags&15990||f){f=zt.transition,zt.transition=null;var y=Ce;Ce=1;var j=we;we|=4,Lu.current=null,Pv(e,i),gp(i,e),Zx(Nl),ss=!!zl,Nl=zl=null,e.current=i,Tv(i),rx(),we=j,Ce=y,zt.transition=f}else e.current=i;if(Hs&&(Hs=!1,Nn=e,qs=c),f=e.pendingLanes,f===0&&(zn=null),sx(i.stateNode),St(e,Be()),n!==null)for(l=e.onRecoverableError,i=0;i<n.length;i++)c=n[i],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ws)throw Ws=!1,e=Iu,Iu=null,e;return qs&1&&e.tag!==0&&si(),f=e.pendingLanes,f&1?e===Mu?go++:(go=0,Mu=e):go=0,Mn(),null}function si(){if(Nn!==null){var e=pf(qs),n=zt.transition,i=Ce;try{if(zt.transition=null,Ce=16>e?16:e,Nn===null)var l=!1;else{if(e=Nn,Nn=null,qs=0,we&6)throw Error(o(331));var c=we;for(we|=4,Z=e.current;Z!==null;){var f=Z,y=f.child;if(Z.flags&16){var j=f.deletions;if(j!==null){for(var S=0;S<j.length;S++){var V=j[S];for(Z=V;Z!==null;){var O=Z;switch(O.tag){case 0:case 11:case 15:ho(8,O,f)}var B=O.child;if(B!==null)B.return=O,Z=B;else for(;Z!==null;){O=Z;var _=O.sibling,Q=O.return;if(dp(O),O===V){Z=null;break}if(_!==null){_.return=Q,Z=_;break}Z=Q}}}var J=f.alternate;if(J!==null){var ee=J.child;if(ee!==null){J.child=null;do{var $e=ee.sibling;ee.sibling=null,ee=$e}while(ee!==null)}}Z=f}}if(f.subtreeFlags&2064&&y!==null)y.return=f,Z=y;else e:for(;Z!==null;){if(f=Z,f.flags&2048)switch(f.tag){case 0:case 11:case 15:ho(9,f,f.return)}var A=f.sibling;if(A!==null){A.return=f.return,Z=A;break e}Z=f.return}}var C=e.current;for(Z=C;Z!==null;){y=Z;var M=y.child;if(y.subtreeFlags&2064&&M!==null)M.return=y,Z=M;else e:for(y=C;Z!==null;){if(j=Z,j.flags&2048)try{switch(j.tag){case 0:case 11:case 15:Bs(9,j)}}catch(te){Oe(j,j.return,te)}if(j===y){Z=null;break e}var U=j.sibling;if(U!==null){U.return=j.return,Z=U;break e}Z=j.return}}if(we=c,Mn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(es,e)}catch{}l=!0}return l}finally{Ce=i,zt.transition=n}}return!1}function Tp(e,n,i){n=ni(i,n),n=Hh(e,n,1),e=Dn(e,n,1),n=mt(),e!==null&&(_i(e,1,n),St(e,n))}function Oe(e,n,i){if(e.tag===3)Tp(e,e,i);else for(;n!==null;){if(n.tag===3){Tp(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(zn===null||!zn.has(l))){e=ni(i,e),e=qh(n,e,1),n=Dn(n,e,1),e=mt(),n!==null&&(_i(n,1,e),St(n,e));break}}n=n.return}}function Mv(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),n=mt(),e.pingedLanes|=e.suspendedLanes&i,Je===e&&(it&i)===i&&(Xe===4||Xe===3&&(it&130023424)===it&&500>Be()-Au?fr(e,0):Ru|=i),St(e,n)}function Ep(e,n){n===0&&(e.mode&1?(n=ns,ns<<=1,!(ns&130023424)&&(ns=4194304)):n=1);var i=mt();e=hn(e,n),e!==null&&(_i(e,n,i),St(e,i))}function Vv(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Ep(e,i)}function Dv(e,n){var i=0;switch(e.tag){case 13:var l=e.stateNode,c=e.memoizedState;c!==null&&(i=c.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(o(314))}l!==null&&l.delete(n),Ep(e,i)}var Lp;Lp=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||vt.current)jt=!0;else{if(!(e.lanes&i)&&!(n.flags&128))return jt=!1,kv(e,n,i);jt=!!(e.flags&131072)}else jt=!1,De&&n.flags&1048576&&lh(n,bs,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;_s(e,n),e=n.pendingProps;var c=Yr(n,lt.current);ei(n,i),c=lu(null,n,l,e,c,i);var f=uu();return n.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,wt(l)?(f=!0,js(n)):f=!1,n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,tu(n),c.updater=zs,n.stateNode=c,c._reactInternals=n,mu(n,l,e,i),n=vu(null,n,l,!0,f,i)):(n.tag=0,De&&f&&Hl(n),pt(null,n,c,i),n=n.child),n;case 16:l=n.elementType;e:{switch(_s(e,n),e=n.pendingProps,c=l._init,l=c(l._payload),n.type=l,c=n.tag=zv(l),e=Ht(l,e),c){case 0:n=xu(null,n,l,e,i);break e;case 1:n=tp(null,n,l,e,i);break e;case 11:n=Kh(null,n,l,e,i);break e;case 14:n=Xh(null,n,l,Ht(l.type,e),i);break e}throw Error(o(306,l,""))}return n;case 0:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Ht(l,c),xu(e,n,l,c,i);case 1:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Ht(l,c),tp(e,n,l,c,i);case 3:e:{if(np(n),e===null)throw Error(o(387));l=n.pendingProps,f=n.memoizedState,c=f.element,yh(e,n),Rs(n,l,null,i);var y=n.memoizedState;if(l=y.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){c=ni(Error(o(423)),n),n=rp(e,n,l,i,c);break e}else if(l!==c){c=ni(Error(o(424)),n),n=rp(e,n,l,i,c);break e}else for(Et=Rn(n.stateNode.containerInfo.firstChild),Tt=n,De=!0,Wt=null,i=mh(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Xr(),l===c){n=mn(e,n,i);break e}pt(e,n,l,i)}n=n.child}return n;case 5:return wh(n),e===null&&Yl(n),l=n.type,c=n.pendingProps,f=e!==null?e.memoizedProps:null,y=c.children,_l(l,c)?y=null:f!==null&&_l(l,f)&&(n.flags|=32),ep(e,n),pt(e,n,y,i),n.child;case 6:return e===null&&Yl(n),null;case 13:return ip(e,n,i);case 4:return nu(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=Zr(n,null,l,i):pt(e,n,l,i),n.child;case 11:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Ht(l,c),Kh(e,n,l,c,i);case 7:return pt(e,n,n.pendingProps,i),n.child;case 8:return pt(e,n,n.pendingProps.children,i),n.child;case 12:return pt(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(l=n.type._context,c=n.pendingProps,f=n.memoizedProps,y=c.value,Pe(Ts,l._currentValue),l._currentValue=y,f!==null)if(Ut(f.value,y)){if(f.children===c.children&&!vt.current){n=mn(e,n,i);break e}}else for(f=n.child,f!==null&&(f.return=n);f!==null;){var j=f.dependencies;if(j!==null){y=f.child;for(var S=j.firstContext;S!==null;){if(S.context===l){if(f.tag===1){S=pn(-1,i&-i),S.tag=2;var V=f.updateQueue;if(V!==null){V=V.shared;var O=V.pending;O===null?S.next=S:(S.next=O.next,O.next=S),V.pending=S}}f.lanes|=i,S=f.alternate,S!==null&&(S.lanes|=i),Jl(f.return,i,n),j.lanes|=i;break}S=S.next}}else if(f.tag===10)y=f.type===n.type?null:f.child;else if(f.tag===18){if(y=f.return,y===null)throw Error(o(341));y.lanes|=i,j=y.alternate,j!==null&&(j.lanes|=i),Jl(y,i,n),y=f.sibling}else y=f.child;if(y!==null)y.return=f;else for(y=f;y!==null;){if(y===n){y=null;break}if(f=y.sibling,f!==null){f.return=y.return,y=f;break}y=y.return}f=y}pt(e,n,c.children,i),n=n.child}return n;case 9:return c=n.type,l=n.pendingProps.children,ei(n,i),c=Dt(c),l=l(c),n.flags|=1,pt(e,n,l,i),n.child;case 14:return l=n.type,c=Ht(l,n.pendingProps),c=Ht(l.type,c),Xh(e,n,l,c,i);case 15:return Zh(e,n,n.type,n.pendingProps,i);case 17:return l=n.type,c=n.pendingProps,c=n.elementType===l?c:Ht(l,c),_s(e,n),n.tag=1,wt(l)?(e=!0,js(n)):e=!1,ei(n,i),Uh(n,l,c),mu(n,l,c,i),vu(null,n,l,!0,e,i);case 19:return sp(e,n,i);case 22:return Jh(e,n,i)}throw Error(o(156,n.tag))};function Rp(e,n){return uf(e,n)}function Fv(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nt(e,n,i,l){return new Fv(e,n,i,l)}function _u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zv(e){if(typeof e=="function")return _u(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ve)return 11;if(e===Qe)return 14}return 2}function Bn(e,n){var i=e.alternate;return i===null?(i=Nt(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Ks(e,n,i,l,c,f){var y=2;if(l=e,typeof e=="function")_u(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case G:return pr(i.children,c,f,n);case ne:y=8,c|=8;break;case ce:return e=Nt(12,i,n,c|2),e.elementType=ce,e.lanes=f,e;case Le:return e=Nt(13,i,n,c),e.elementType=Le,e.lanes=f,e;case be:return e=Nt(19,i,n,c),e.elementType=be,e.lanes=f,e;case ge:return Xs(i,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Me:y=10;break e;case at:y=9;break e;case Ve:y=11;break e;case Qe:y=14;break e;case xe:y=16,l=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return n=Nt(y,i,n,c),n.elementType=e,n.type=l,n.lanes=f,n}function pr(e,n,i,l){return e=Nt(7,e,l,n),e.lanes=i,e}function Xs(e,n,i,l){return e=Nt(22,e,l,n),e.elementType=ge,e.lanes=i,e.stateNode={isHidden:!1},e}function Ou(e,n,i){return e=Nt(6,e,null,n),e.lanes=i,e}function Bu(e,n,i){return n=Nt(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function Nv(e,n,i,l,c){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pl(0),this.expirationTimes=pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pl(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function $u(e,n,i,l,c,f,y,j,S){return e=new Nv(e,n,i,j,S),n===1?(n=1,f===!0&&(n|=8)):n=0,f=Nt(3,null,null,n),e.current=f,f.stateNode=e,f.memoizedState={element:l,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(f),e}function _v(e,n,i){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:l==null?null:""+l,children:e,containerInfo:n,implementation:i}}function Ap(e){if(!e)return In;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(o(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(wt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(wt(i))return oh(e,i,n)}return n}function Ip(e,n,i,l,c,f,y,j,S){return e=$u(i,l,!0,e,c,f,y,j,S),e.context=Ap(null),i=e.current,l=mt(),c=_n(i),f=pn(l,c),f.callback=n??null,Dn(i,f,c),e.current.lanes=c,_i(e,c,l),St(e,l),e}function Zs(e,n,i,l){var c=n.current,f=mt(),y=_n(c);return i=Ap(i),n.context===null?n.context=i:n.pendingContext=i,n=pn(f,y),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=Dn(c,n,y),e!==null&&(Yt(e,c,y,f),Ls(e,c,y)),y}function Js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Uu(e,n){Mp(e,n),(e=e.alternate)&&Mp(e,n)}function Ov(){return null}var Vp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wu(e){this._internalRoot=e}ea.prototype.render=Wu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));Zs(e,n,null,null)},ea.prototype.unmount=Wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;dr(function(){Zs(null,e,null,null)}),n[un]=null}};function ea(e){this._internalRoot=e}ea.prototype.unstable_scheduleHydration=function(e){if(e){var n=yf();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Tn.length&&n!==0&&n<Tn[i].priority;i++);Tn.splice(i,0,e),i===0&&wf(e)}};function Hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function Bv(e,n,i,l,c){if(c){if(typeof l=="function"){var f=l;l=function(){var V=Js(y);f.call(V)}}var y=Ip(n,l,e,0,null,!1,!1,"",Dp);return e._reactRootContainer=y,e[un]=y.current,Ji(e.nodeType===8?e.parentNode:e),dr(),y}for(;c=e.lastChild;)e.removeChild(c);if(typeof l=="function"){var j=l;l=function(){var V=Js(S);j.call(V)}}var S=$u(e,0,!1,null,null,!1,!1,"",Dp);return e._reactRootContainer=S,e[un]=S.current,Ji(e.nodeType===8?e.parentNode:e),dr(function(){Zs(n,S,i,l)}),S}function na(e,n,i,l,c){var f=i._reactRootContainer;if(f){var y=f;if(typeof c=="function"){var j=c;c=function(){var S=Js(y);j.call(S)}}Zs(n,y,e,c)}else y=Bv(i,n,e,c,l);return Js(y)}mf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Ni(n.pendingLanes);i!==0&&(ml(n,i|1),St(n,Be()),!(we&6)&&(oi=Be()+500,Mn()))}break;case 13:dr(function(){var l=hn(e,1);if(l!==null){var c=mt();Yt(l,e,1,c)}}),Uu(e,1)}},gl=function(e){if(e.tag===13){var n=hn(e,134217728);if(n!==null){var i=mt();Yt(n,e,134217728,i)}Uu(e,134217728)}},gf=function(e){if(e.tag===13){var n=_n(e),i=hn(e,n);if(i!==null){var l=mt();Yt(i,e,n,l)}Uu(e,n)}},yf=function(){return Ce},xf=function(e,n){var i=Ce;try{return Ce=e,n()}finally{Ce=i}},ll=function(e,n,i){switch(n){case"input":if(el(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var c=vs(l);if(!c)throw Error(o(90));It(l),el(l,c)}}}break;case"textarea":qd(e,i);break;case"select":n=i.value,n!=null&&Fr(e,!!i.multiple,n,!1)}},tf=Fu,nf=dr;var $v={usingClientEntryPoint:!1,Events:[no,qr,vs,Jd,ef,Fu]},yo={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uv={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=af(e),e===null?null:e.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||Ov,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ra.isDisabled&&ra.supportsFiber)try{es=ra.inject(Uv),en=ra}catch{}}return bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$v,bt.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(n))throw Error(o(200));return _v(e,n,null,i)},bt.createRoot=function(e,n){if(!Hu(e))throw Error(o(299));var i=!1,l="",c=Vp;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),n=$u(e,1,!1,null,null,i,!1,l,c),e[un]=n.current,Ji(e.nodeType===8?e.parentNode:e),new Wu(n)},bt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=af(n),e=e===null?null:e.stateNode,e},bt.flushSync=function(e){return dr(e)},bt.hydrate=function(e,n,i){if(!ta(n))throw Error(o(200));return na(null,e,n,!0,i)},bt.hydrateRoot=function(e,n,i){if(!Hu(e))throw Error(o(405));var l=i!=null&&i.hydratedSources||null,c=!1,f="",y=Vp;if(i!=null&&(i.unstable_strictMode===!0&&(c=!0),i.identifierPrefix!==void 0&&(f=i.identifierPrefix),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),n=Ip(n,null,e,1,i??null,c,!1,f,y),e[un]=n.current,Ji(e),l)for(e=0;e<l.length;e++)i=l[e],c=i._getVersion,c=c(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,c]:n.mutableSourceEagerHydrationData.push(i,c);return new ea(n)},bt.render=function(e,n,i){if(!ta(n))throw Error(o(200));return na(null,e,n,!1,i)},bt.unmountComponentAtNode=function(e){if(!ta(e))throw Error(o(40));return e._reactRootContainer?(dr(function(){na(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1},bt.unstable_batchedUpdates=Fu,bt.unstable_renderSubtreeIntoContainer=function(e,n,i,l){if(!ta(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return na(e,n,i,!1,l)},bt.version="18.3.1-next-f1338f8080-20240426",bt}var Up;function V0(){if(Up)return Yu.exports;Up=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),Yu.exports=Zv(),Yu.exports}var Wp;function Jv(){if(Wp)return ia;Wp=1;var t=V0();return ia.createRoot=t.createRoot,ia.hydrateRoot=t.hydrateRoot,ia}var e1=Jv();const t1=ad(e1);V0();/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vo(){return Vo=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},Vo.apply(this,arguments)}var Yn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Yn||(Yn={}));const Hp="popstate";function n1(t){t===void 0&&(t={});function r(a,u){let{pathname:h,search:d,hash:p}=a.location;return Mc("",{pathname:h,search:d,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function o(a,u){return typeof u=="string"?u:va(u)}return i1(r,o,null,t)}function Ye(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function D0(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function r1(){return Math.random().toString(36).substr(2,8)}function qp(t,r){return{usr:t.state,key:t.key,idx:r}}function Mc(t,r,o,a){return o===void 0&&(o=null),Vo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof r=="string"?Ri(r):r,{state:o,key:r&&r.key||a||r1()})}function va(t){let{pathname:r="/",search:o="",hash:a=""}=t;return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function Ri(t){let r={};if(t){let o=t.indexOf("#");o>=0&&(r.hash=t.substr(o),t=t.substr(0,o));let a=t.indexOf("?");a>=0&&(r.search=t.substr(a),t=t.substr(0,a)),t&&(r.pathname=t)}return r}function i1(t,r,o,a){a===void 0&&(a={});let{window:u=document.defaultView,v5Compat:h=!1}=a,d=u.history,p=Yn.Pop,m=null,g=x();g==null&&(g=0,d.replaceState(Vo({},d.state,{idx:g}),""));function x(){return(d.state||{idx:null}).idx}function v(){p=Yn.Pop;let D=x(),F=D==null?null:D-g;g=D,m&&m({action:p,location:T.location,delta:F})}function w(D,F){p=Yn.Push;let I=Mc(T.location,D,F);g=x()+1;let L=qp(I,g),N=T.createHref(I);try{d.pushState(L,"",N)}catch(q){if(q instanceof DOMException&&q.name==="DataCloneError")throw q;u.location.assign(N)}h&&m&&m({action:p,location:T.location,delta:1})}function k(D,F){p=Yn.Replace;let I=Mc(T.location,D,F);g=x();let L=qp(I,g),N=T.createHref(I);d.replaceState(L,"",N),h&&m&&m({action:p,location:T.location,delta:0})}function E(D){let F=u.location.origin!=="null"?u.location.origin:u.location.href,I=typeof D=="string"?D:va(D);return I=I.replace(/ $/,"%20"),Ye(F,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,F)}let T={get action(){return p},get location(){return t(u,d)},listen(D){if(m)throw new Error("A history only accepts one active listener");return u.addEventListener(Hp,v),m=D,()=>{u.removeEventListener(Hp,v),m=null}},createHref(D){return r(u,D)},createURL:E,encodeLocation(D){let F=E(D);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:w,replace:k,go(D){return d.go(D)}};return T}var Gp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Gp||(Gp={}));function o1(t,r,o){return o===void 0&&(o="/"),s1(t,r,o)}function s1(t,r,o,a){let u=typeof r=="string"?Ri(r):r,h=ud(u.pathname||"/",o);if(h==null)return null;let d=F0(t);a1(d);let p=null;for(let m=0;p==null&&m<d.length;++m){let g=v1(h);p=g1(d[m],g)}return p}function F0(t,r,o,a){r===void 0&&(r=[]),o===void 0&&(o=[]),a===void 0&&(a="");let u=(h,d,p)=>{let m={relativePath:p===void 0?h.path||"":p,caseSensitive:h.caseSensitive===!0,childrenIndex:d,route:h};m.relativePath.startsWith("/")&&(Ye(m.relativePath.startsWith(a),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(a.length));let g=Qn([a,m.relativePath]),x=o.concat(m);h.children&&h.children.length>0&&(Ye(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),F0(h.children,r,x,g)),!(h.path==null&&!h.index)&&r.push({path:g,score:p1(g,h.index),routesMeta:x})};return t.forEach((h,d)=>{var p;if(h.path===""||!((p=h.path)!=null&&p.includes("?")))u(h,d);else for(let m of z0(h.path))u(h,d,m)}),r}function z0(t){let r=t.split("/");if(r.length===0)return[];let[o,...a]=r,u=o.endsWith("?"),h=o.replace(/\?$/,"");if(a.length===0)return u?[h,""]:[h];let d=z0(a.join("/")),p=[];return p.push(...d.map(m=>m===""?h:[h,m].join("/"))),u&&p.push(...d),p.map(m=>t.startsWith("/")&&m===""?"/":m)}function a1(t){t.sort((r,o)=>r.score!==o.score?o.score-r.score:m1(r.routesMeta.map(a=>a.childrenIndex),o.routesMeta.map(a=>a.childrenIndex)))}const l1=/^:[\w-]+$/,u1=3,c1=2,d1=1,f1=10,h1=-2,Yp=t=>t==="*";function p1(t,r){let o=t.split("/"),a=o.length;return o.some(Yp)&&(a+=h1),r&&(a+=c1),o.filter(u=>!Yp(u)).reduce((u,h)=>u+(l1.test(h)?u1:h===""?d1:f1),a)}function m1(t,r){return t.length===r.length&&t.slice(0,-1).every((a,u)=>a===r[u])?t[t.length-1]-r[r.length-1]:0}function g1(t,r,o){let{routesMeta:a}=t,u={},h="/",d=[];for(let p=0;p<a.length;++p){let m=a[p],g=p===a.length-1,x=h==="/"?r:r.slice(h.length)||"/",v=y1({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},x),w=m.route;if(!v)return null;Object.assign(u,v.params),d.push({params:u,pathname:Qn([h,v.pathname]),pathnameBase:S1(Qn([h,v.pathnameBase])),route:w}),v.pathnameBase!=="/"&&(h=Qn([h,v.pathnameBase]))}return d}function y1(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[o,a]=x1(t.path,t.caseSensitive,t.end),u=r.match(o);if(!u)return null;let h=u[0],d=h.replace(/(.)\/+$/,"$1"),p=u.slice(1);return{params:a.reduce((g,x,v)=>{let{paramName:w,isOptional:k}=x;if(w==="*"){let T=p[v]||"";d=h.slice(0,h.length-T.length).replace(/(.)\/+$/,"$1")}const E=p[v];return k&&!E?g[w]=void 0:g[w]=(E||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:d,pattern:t}}function x1(t,r,o){r===void 0&&(r=!1),o===void 0&&(o=!0),D0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let a=[],u="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,m)=>(a.push({paramName:p,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(a.push({paramName:"*"}),u+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":t!==""&&t!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,r?void 0:"i"),a]}function v1(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return D0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),t}}function ud(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let o=r.endsWith("/")?r.length-1:r.length,a=t.charAt(o);return a&&a!=="/"?null:t.slice(o)||"/"}function w1(t,r){r===void 0&&(r="/");let{pathname:o,search:a="",hash:u=""}=typeof t=="string"?Ri(t):t;return{pathname:o?o.startsWith("/")?o:j1(o,r):r,search:b1(a),hash:C1(u)}}function j1(t,r){let o=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function Xu(t,r,o,a){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function k1(t){return t.filter((r,o)=>o===0||r.route.path&&r.route.path.length>0)}function N0(t,r){let o=k1(t);return r?o.map((a,u)=>u===o.length-1?a.pathname:a.pathnameBase):o.map(a=>a.pathnameBase)}function _0(t,r,o,a){a===void 0&&(a=!1);let u;typeof t=="string"?u=Ri(t):(u=Vo({},t),Ye(!u.pathname||!u.pathname.includes("?"),Xu("?","pathname","search",u)),Ye(!u.pathname||!u.pathname.includes("#"),Xu("#","pathname","hash",u)),Ye(!u.search||!u.search.includes("#"),Xu("#","search","hash",u)));let h=t===""||u.pathname==="",d=h?"/":u.pathname,p;if(d==null)p=o;else{let v=r.length-1;if(!a&&d.startsWith("..")){let w=d.split("/");for(;w[0]==="..";)w.shift(),v-=1;u.pathname=w.join("/")}p=v>=0?r[v]:"/"}let m=w1(u,p),g=d&&d!=="/"&&d.endsWith("/"),x=(h||d===".")&&o.endsWith("/");return!m.pathname.endsWith("/")&&(g||x)&&(m.pathname+="/"),m}const Qn=t=>t.join("/").replace(/\/\/+/g,"/"),S1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),b1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,C1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function P1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const O0=["post","put","patch","delete"];new Set(O0);const T1=["get",...O0];new Set(T1);/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},Do.apply(this,arguments)}const cd=R.createContext(null),E1=R.createContext(null),Ar=R.createContext(null),Va=R.createContext(null),Ir=R.createContext({outlet:null,matches:[],isDataRoute:!1}),B0=R.createContext(null);function L1(t,r){let{relative:o}=r===void 0?{}:r;$o()||Ye(!1);let{basename:a,navigator:u}=R.useContext(Ar),{hash:h,pathname:d,search:p}=U0(t,{relative:o}),m=d;return a!=="/"&&(m=d==="/"?a:Qn([a,d])),u.createHref({pathname:m,search:p,hash:h})}function $o(){return R.useContext(Va)!=null}function Da(){return $o()||Ye(!1),R.useContext(Va).location}function $0(t){R.useContext(Ar).static||R.useLayoutEffect(t)}function Uo(){let{isDataRoute:t}=R.useContext(Ir);return t?$1():R1()}function R1(){$o()||Ye(!1);let t=R.useContext(cd),{basename:r,future:o,navigator:a}=R.useContext(Ar),{matches:u}=R.useContext(Ir),{pathname:h}=Da(),d=JSON.stringify(N0(u,o.v7_relativeSplatPath)),p=R.useRef(!1);return $0(()=>{p.current=!0}),R.useCallback(function(g,x){if(x===void 0&&(x={}),!p.current)return;if(typeof g=="number"){a.go(g);return}let v=_0(g,JSON.parse(d),h,x.relative==="path");t==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:Qn([r,v.pathname])),(x.replace?a.replace:a.push)(v,x.state,x)},[r,a,d,h,t])}function U0(t,r){let{relative:o}=r===void 0?{}:r,{future:a}=R.useContext(Ar),{matches:u}=R.useContext(Ir),{pathname:h}=Da(),d=JSON.stringify(N0(u,a.v7_relativeSplatPath));return R.useMemo(()=>_0(t,JSON.parse(d),h,o==="path"),[t,d,h,o])}function A1(t,r){return I1(t,r)}function I1(t,r,o,a){$o()||Ye(!1);let{navigator:u,static:h}=R.useContext(Ar),{matches:d}=R.useContext(Ir),p=d[d.length-1],m=p?p.params:{};p&&p.pathname;let g=p?p.pathnameBase:"/";p&&p.route;let x=Da(),v;if(r){var w;let F=typeof r=="string"?Ri(r):r;g==="/"||(w=F.pathname)!=null&&w.startsWith(g)||Ye(!1),v=F}else v=x;let k=v.pathname||"/",E=k;if(g!=="/"){let F=g.replace(/^\//,"").split("/");E="/"+k.replace(/^\//,"").split("/").slice(F.length).join("/")}let T=o1(t,{pathname:E}),D=z1(T&&T.map(F=>Object.assign({},F,{params:Object.assign({},m,F.params),pathname:Qn([g,u.encodeLocation?u.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?g:Qn([g,u.encodeLocation?u.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),d,o,a);return r&&D?R.createElement(Va.Provider,{value:{location:Do({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Yn.Pop}},D):D}function M1(){let t=B1(),r=P1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),o=t instanceof Error?t.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},r),o?R.createElement("pre",{style:u},o):null,null)}const V1=R.createElement(M1,null);class D1 extends R.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){console.error("React Router caught the following error during render",r,o)}render(){return this.state.error!==void 0?R.createElement(Ir.Provider,{value:this.props.routeContext},R.createElement(B0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function F1(t){let{routeContext:r,match:o,children:a}=t,u=R.useContext(cd);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),R.createElement(Ir.Provider,{value:r},a)}function z1(t,r,o,a){var u;if(r===void 0&&(r=[]),o===void 0&&(o=null),a===void 0&&(a=null),t==null){var h;if(!o)return null;if(o.errors)t=o.matches;else if((h=a)!=null&&h.v7_partialHydration&&r.length===0&&!o.initialized&&o.matches.length>0)t=o.matches;else return null}let d=t,p=(u=o)==null?void 0:u.errors;if(p!=null){let x=d.findIndex(v=>v.route.id&&(p==null?void 0:p[v.route.id])!==void 0);x>=0||Ye(!1),d=d.slice(0,Math.min(d.length,x+1))}let m=!1,g=-1;if(o&&a&&a.v7_partialHydration)for(let x=0;x<d.length;x++){let v=d[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(g=x),v.route.id){let{loaderData:w,errors:k}=o,E=v.route.loader&&w[v.route.id]===void 0&&(!k||k[v.route.id]===void 0);if(v.route.lazy||E){m=!0,g>=0?d=d.slice(0,g+1):d=[d[0]];break}}}return d.reduceRight((x,v,w)=>{let k,E=!1,T=null,D=null;o&&(k=p&&v.route.id?p[v.route.id]:void 0,T=v.route.errorElement||V1,m&&(g<0&&w===0?(U1("route-fallback"),E=!0,D=null):g===w&&(E=!0,D=v.route.hydrateFallbackElement||null)));let F=r.concat(d.slice(0,w+1)),I=()=>{let L;return k?L=T:E?L=D:v.route.Component?L=R.createElement(v.route.Component,null):v.route.element?L=v.route.element:L=x,R.createElement(F1,{match:v,routeContext:{outlet:x,matches:F,isDataRoute:o!=null},children:L})};return o&&(v.route.ErrorBoundary||v.route.errorElement||w===0)?R.createElement(D1,{location:o.location,revalidation:o.revalidation,component:T,error:k,children:I(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):I()},null)}var W0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(W0||{}),H0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(H0||{});function N1(t){let r=R.useContext(cd);return r||Ye(!1),r}function _1(t){let r=R.useContext(E1);return r||Ye(!1),r}function O1(t){let r=R.useContext(Ir);return r||Ye(!1),r}function q0(t){let r=O1(),o=r.matches[r.matches.length-1];return o.route.id||Ye(!1),o.route.id}function B1(){var t;let r=R.useContext(B0),o=_1(),a=q0();return r!==void 0?r:(t=o.errors)==null?void 0:t[a]}function $1(){let{router:t}=N1(W0.UseNavigateStable),r=q0(H0.UseNavigateStable),o=R.useRef(!1);return $0(()=>{o.current=!0}),R.useCallback(function(u,h){h===void 0&&(h={}),o.current&&(typeof u=="number"?t.navigate(u):t.navigate(u,Do({fromRouteId:r},h)))},[t,r])}const Qp={};function U1(t,r,o){Qp[t]||(Qp[t]=!0)}function W1(t,r){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function xn(t){Ye(!1)}function H1(t){let{basename:r="/",children:o=null,location:a,navigationType:u=Yn.Pop,navigator:h,static:d=!1,future:p}=t;$o()&&Ye(!1);let m=r.replace(/^\/*/,"/"),g=R.useMemo(()=>({basename:m,navigator:h,static:d,future:Do({v7_relativeSplatPath:!1},p)}),[m,p,h,d]);typeof a=="string"&&(a=Ri(a));let{pathname:x="/",search:v="",hash:w="",state:k=null,key:E="default"}=a,T=R.useMemo(()=>{let D=ud(x,m);return D==null?null:{location:{pathname:D,search:v,hash:w,state:k,key:E},navigationType:u}},[m,x,v,w,k,E,u]);return T==null?null:R.createElement(Ar.Provider,{value:g},R.createElement(Va.Provider,{children:o,value:T}))}function q1(t){let{children:r,location:o}=t;return A1(Vc(r),o)}new Promise(()=>{});function Vc(t,r){r===void 0&&(r=[]);let o=[];return R.Children.forEach(t,(a,u)=>{if(!R.isValidElement(a))return;let h=[...r,u];if(a.type===R.Fragment){o.push.apply(o,Vc(a.props.children,h));return}a.type!==xn&&Ye(!1),!a.props.index||!a.props.children||Ye(!1);let d={id:a.props.id||h.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(d.children=Vc(a.props.children,h)),o.push(d)}),o}/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dc(){return Dc=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},Dc.apply(this,arguments)}function G1(t,r){if(t==null)return{};var o={},a=Object.keys(t),u,h;for(h=0;h<a.length;h++)u=a[h],!(r.indexOf(u)>=0)&&(o[u]=t[u]);return o}function Y1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Q1(t,r){return t.button===0&&(!r||r==="_self")&&!Y1(t)}const K1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],X1="6";try{window.__reactRouterVersion=X1}catch{}const Z1="startTransition",Kp=Qv[Z1];function J1(t){let{basename:r,children:o,future:a,window:u}=t,h=R.useRef();h.current==null&&(h.current=n1({window:u,v5Compat:!0}));let d=h.current,[p,m]=R.useState({action:d.action,location:d.location}),{v7_startTransition:g}=a||{},x=R.useCallback(v=>{g&&Kp?Kp(()=>m(v)):m(v)},[m,g]);return R.useLayoutEffect(()=>d.listen(x),[d,x]),R.useEffect(()=>W1(a),[a]),R.createElement(H1,{basename:r,children:o,location:p.location,navigationType:p.action,navigator:d,future:a})}const ew=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fa=R.forwardRef(function(r,o){let{onClick:a,relative:u,reloadDocument:h,replace:d,state:p,target:m,to:g,preventScrollReset:x,viewTransition:v}=r,w=G1(r,K1),{basename:k}=R.useContext(Ar),E,T=!1;if(typeof g=="string"&&tw.test(g)&&(E=g,ew))try{let L=new URL(window.location.href),N=g.startsWith("//")?new URL(L.protocol+g):new URL(g),q=ud(N.pathname,k);N.origin===L.origin&&q!=null?g=q+N.search+N.hash:T=!0}catch{}let D=L1(g,{relative:u}),F=nw(g,{replace:d,state:p,target:m,preventScrollReset:x,relative:u,viewTransition:v});function I(L){a&&a(L),L.defaultPrevented||F(L)}return R.createElement("a",Dc({},w,{href:E||D,onClick:T||h?a:I,ref:o,target:m}))});var Xp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Xp||(Xp={}));var Zp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Zp||(Zp={}));function nw(t,r){let{target:o,replace:a,state:u,preventScrollReset:h,relative:d,viewTransition:p}=r===void 0?{}:r,m=Uo(),g=Da(),x=U0(t,{relative:d});return R.useCallback(v=>{if(Q1(v,o)){v.preventDefault();let w=a!==void 0?a:va(g)===va(x);m(t,{replace:w,state:u,preventScrollReset:h,relative:d,viewTransition:p})}},[g,m,x,a,u,o,t,h,d,p])}var ht=function(){return ht=Object.assign||function(r){for(var o,a=1,u=arguments.length;a<u;a++){o=arguments[a];for(var h in o)Object.prototype.hasOwnProperty.call(o,h)&&(r[h]=o[h])}return r},ht.apply(this,arguments)};function Fo(t,r,o){if(o||arguments.length===2)for(var a=0,u=r.length,h;a<u;a++)(h||!(a in r))&&(h||(h=Array.prototype.slice.call(r,0,a)),h[a]=r[a]);return t.concat(h||Array.prototype.slice.call(r))}var Ie="-ms-",Lo="-moz-",Se="-webkit-",G0="comm",za="rule",dd="decl",rw="@import",Y0="@keyframes",iw="@layer",Q0=Math.abs,fd=String.fromCharCode,Fc=Object.assign;function ow(t,r){return tt(t,0)^45?(((r<<2^tt(t,0))<<2^tt(t,1))<<2^tt(t,2))<<2^tt(t,3):0}function K0(t){return t.trim()}function vn(t,r){return(t=r.exec(t))?t[0]:t}function fe(t,r,o){return t.replace(r,o)}function da(t,r,o){return t.indexOf(r,o)}function tt(t,r){return t.charCodeAt(r)|0}function ki(t,r,o){return t.slice(r,o)}function an(t){return t.length}function X0(t){return t.length}function Po(t,r){return r.push(t),t}function sw(t,r){return t.map(r).join("")}function Jp(t,r){return t.filter(function(o){return!vn(o,r)})}var Na=1,Si=1,Z0=0,Bt=0,qe=0,Ai="";function _a(t,r,o,a,u,h,d,p){return{value:t,root:r,parent:o,type:a,props:u,children:h,line:Na,column:Si,length:d,return:"",siblings:p}}function Hn(t,r){return Fc(_a("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},r)}function ai(t){for(;t.root;)t=Hn(t.root,{children:[t]});Po(t,t.siblings)}function aw(){return qe}function lw(){return qe=Bt>0?tt(Ai,--Bt):0,Si--,qe===10&&(Si=1,Na--),qe}function Jt(){return qe=Bt<Z0?tt(Ai,Bt++):0,Si++,qe===10&&(Si=1,Na++),qe}function Lr(){return tt(Ai,Bt)}function fa(){return Bt}function Oa(t,r){return ki(Ai,t,r)}function zc(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function uw(t){return Na=Si=1,Z0=an(Ai=t),Bt=0,[]}function cw(t){return Ai="",t}function Zu(t){return K0(Oa(Bt-1,Nc(t===91?t+2:t===40?t+1:t)))}function dw(t){for(;(qe=Lr())&&qe<33;)Jt();return zc(t)>2||zc(qe)>3?"":" "}function fw(t,r){for(;--r&&Jt()&&!(qe<48||qe>102||qe>57&&qe<65||qe>70&&qe<97););return Oa(t,fa()+(r<6&&Lr()==32&&Jt()==32))}function Nc(t){for(;Jt();)switch(qe){case t:return Bt;case 34:case 39:t!==34&&t!==39&&Nc(qe);break;case 40:t===41&&Nc(t);break;case 92:Jt();break}return Bt}function hw(t,r){for(;Jt()&&t+qe!==57;)if(t+qe===84&&Lr()===47)break;return"/*"+Oa(r,Bt-1)+"*"+fd(t===47?t:Jt())}function pw(t){for(;!zc(Lr());)Jt();return Oa(t,Bt)}function mw(t){return cw(ha("",null,null,null,[""],t=uw(t),0,[0],t))}function ha(t,r,o,a,u,h,d,p,m){for(var g=0,x=0,v=d,w=0,k=0,E=0,T=1,D=1,F=1,I=0,L="",N=u,q=h,K=a,G=L;D;)switch(E=I,I=Jt()){case 40:if(E!=108&&tt(G,v-1)==58){da(G+=fe(Zu(I),"&","&\f"),"&\f",Q0(g?p[g-1]:0))!=-1&&(F=-1);break}case 34:case 39:case 91:G+=Zu(I);break;case 9:case 10:case 13:case 32:G+=dw(E);break;case 92:G+=fw(fa()-1,7);continue;case 47:switch(Lr()){case 42:case 47:Po(gw(hw(Jt(),fa()),r,o,m),m);break;default:G+="/"}break;case 123*T:p[g++]=an(G)*F;case 125*T:case 59:case 0:switch(I){case 0:case 125:D=0;case 59+x:F==-1&&(G=fe(G,/\f/g,"")),k>0&&an(G)-v&&Po(k>32?tm(G+";",a,o,v-1,m):tm(fe(G," ","")+";",a,o,v-2,m),m);break;case 59:G+=";";default:if(Po(K=em(G,r,o,g,x,u,p,L,N=[],q=[],v,h),h),I===123)if(x===0)ha(G,r,K,K,N,h,v,p,q);else switch(w===99&&tt(G,3)===110?100:w){case 100:case 108:case 109:case 115:ha(t,K,K,a&&Po(em(t,K,K,0,0,u,p,L,u,N=[],v,q),q),u,q,v,p,a?N:q);break;default:ha(G,K,K,K,[""],q,0,p,q)}}g=x=k=0,T=F=1,L=G="",v=d;break;case 58:v=1+an(G),k=E;default:if(T<1){if(I==123)--T;else if(I==125&&T++==0&&lw()==125)continue}switch(G+=fd(I),I*T){case 38:F=x>0?1:(G+="\f",-1);break;case 44:p[g++]=(an(G)-1)*F,F=1;break;case 64:Lr()===45&&(G+=Zu(Jt())),w=Lr(),x=v=an(L=G+=pw(fa())),I++;break;case 45:E===45&&an(G)==2&&(T=0)}}return h}function em(t,r,o,a,u,h,d,p,m,g,x,v){for(var w=u-1,k=u===0?h:[""],E=X0(k),T=0,D=0,F=0;T<a;++T)for(var I=0,L=ki(t,w+1,w=Q0(D=d[T])),N=t;I<E;++I)(N=K0(D>0?k[I]+" "+L:fe(L,/&\f/g,k[I])))&&(m[F++]=N);return _a(t,r,o,u===0?za:p,m,g,x,v)}function gw(t,r,o,a){return _a(t,r,o,G0,fd(aw()),ki(t,2,-2),0,a)}function tm(t,r,o,a,u){return _a(t,r,o,dd,ki(t,0,a),ki(t,a+1,-1),a,u)}function J0(t,r,o){switch(ow(t,r)){case 5103:return Se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+t+t;case 4789:return Lo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+t+Lo+t+Ie+t+t;case 5936:switch(tt(t,r+11)){case 114:return Se+t+Ie+fe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Se+t+Ie+fe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Se+t+Ie+fe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Se+t+Ie+t+t;case 6165:return Se+t+Ie+"flex-"+t+t;case 5187:return Se+t+fe(t,/(\w+).+(:[^]+)/,Se+"box-$1$2"+Ie+"flex-$1$2")+t;case 5443:return Se+t+Ie+"flex-item-"+fe(t,/flex-|-self/g,"")+(vn(t,/flex-|baseline/)?"":Ie+"grid-row-"+fe(t,/flex-|-self/g,""))+t;case 4675:return Se+t+Ie+"flex-line-pack"+fe(t,/align-content|flex-|-self/g,"")+t;case 5548:return Se+t+Ie+fe(t,"shrink","negative")+t;case 5292:return Se+t+Ie+fe(t,"basis","preferred-size")+t;case 6060:return Se+"box-"+fe(t,"-grow","")+Se+t+Ie+fe(t,"grow","positive")+t;case 4554:return Se+fe(t,/([^-])(transform)/g,"$1"+Se+"$2")+t;case 6187:return fe(fe(fe(t,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),t,"")+t;case 5495:case 3959:return fe(t,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return fe(fe(t,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+t+t;case 4200:if(!vn(t,/flex-|baseline/))return Ie+"grid-column-align"+ki(t,r)+t;break;case 2592:case 3360:return Ie+fe(t,"template-","")+t;case 4384:case 3616:return o&&o.some(function(a,u){return r=u,vn(a.props,/grid-\w+-end/)})?~da(t+(o=o[r].value),"span",0)?t:Ie+fe(t,"-start","")+t+Ie+"grid-row-span:"+(~da(o,"span",0)?vn(o,/\d+/):+vn(o,/\d+/)-+vn(t,/\d+/))+";":Ie+fe(t,"-start","")+t;case 4896:case 4128:return o&&o.some(function(a){return vn(a.props,/grid-\w+-start/)})?t:Ie+fe(fe(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return fe(t,/(.+)-inline(.+)/,Se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(an(t)-1-r>6)switch(tt(t,r+1)){case 109:if(tt(t,r+4)!==45)break;case 102:return fe(t,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+Lo+(tt(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~da(t,"stretch",0)?J0(fe(t,"stretch","fill-available"),r,o)+t:t}break;case 5152:case 5920:return fe(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,u,h,d,p,m,g){return Ie+u+":"+h+g+(d?Ie+u+"-span:"+(p?m:+m-+h)+g:"")+t});case 4949:if(tt(t,r+6)===121)return fe(t,":",":"+Se)+t;break;case 6444:switch(tt(t,tt(t,14)===45?18:11)){case 120:return fe(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Se+(tt(t,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+Ie+"$2box$3")+t;case 100:return fe(t,":",":"+Ie)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(t,"scroll-","scroll-snap-")+t}return t}function wa(t,r){for(var o="",a=0;a<t.length;a++)o+=r(t[a],a,t,r)||"";return o}function yw(t,r,o,a){switch(t.type){case iw:if(t.children.length)break;case rw:case dd:return t.return=t.return||t.value;case G0:return"";case Y0:return t.return=t.value+"{"+wa(t.children,a)+"}";case za:if(!an(t.value=t.props.join(",")))return""}return an(o=wa(t.children,a))?t.return=t.value+"{"+o+"}":""}function xw(t){var r=X0(t);return function(o,a,u,h){for(var d="",p=0;p<r;p++)d+=t[p](o,a,u,h)||"";return d}}function vw(t){return function(r){r.root||(r=r.return)&&t(r)}}function ww(t,r,o,a){if(t.length>-1&&!t.return)switch(t.type){case dd:t.return=J0(t.value,t.length,o);return;case Y0:return wa([Hn(t,{value:fe(t.value,"@","@"+Se)})],a);case za:if(t.length)return sw(o=t.props,function(u){switch(vn(u,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ai(Hn(t,{props:[fe(u,/:(read-\w+)/,":"+Lo+"$1")]})),ai(Hn(t,{props:[u]})),Fc(t,{props:Jp(o,a)});break;case"::placeholder":ai(Hn(t,{props:[fe(u,/:(plac\w+)/,":"+Se+"input-$1")]})),ai(Hn(t,{props:[fe(u,/:(plac\w+)/,":"+Lo+"$1")]})),ai(Hn(t,{props:[fe(u,/:(plac\w+)/,Ie+"input-$1")]})),ai(Hn(t,{props:[u]})),Fc(t,{props:Jp(o,a)});break}return""})}}var jw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt={},bi=typeof process<"u"&&Rt!==void 0&&(Rt.REACT_APP_SC_ATTR||Rt.SC_ATTR)||"data-styled",eg="active",tg="data-styled-version",Ba="6.1.15",hd=`/*!sc*/
`,ja=typeof window<"u"&&"HTMLElement"in window,kw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Rt.REACT_APP_SC_DISABLE_SPEEDY!==""?Rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Rt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Rt!==void 0&&Rt.SC_DISABLE_SPEEDY!==void 0&&Rt.SC_DISABLE_SPEEDY!==""&&Rt.SC_DISABLE_SPEEDY!=="false"&&Rt.SC_DISABLE_SPEEDY),Sw={},$a=Object.freeze([]),Ci=Object.freeze({});function ng(t,r,o){return o===void 0&&(o=Ci),t.theme!==o.theme&&t.theme||r||o.theme}var rg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cw=/(^-|-$)/g;function nm(t){return t.replace(bw,"-").replace(Cw,"")}var Pw=/(a)(d)/gi,oa=52,rm=function(t){return String.fromCharCode(t+(t>25?39:97))};function _c(t){var r,o="";for(r=Math.abs(t);r>oa;r=r/oa|0)o=rm(r%oa)+o;return(rm(r%oa)+o).replace(Pw,"$1-$2")}var Ju,ig=5381,gi=function(t,r){for(var o=r.length;o;)t=33*t^r.charCodeAt(--o);return t},og=function(t){return gi(ig,t)};function sg(t){return _c(og(t)>>>0)}function Tw(t){return t.displayName||t.name||"Component"}function ec(t){return typeof t=="string"&&!0}var ag=typeof Symbol=="function"&&Symbol.for,lg=ag?Symbol.for("react.memo"):60115,Ew=ag?Symbol.for("react.forward_ref"):60112,Lw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ug={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Aw=((Ju={})[Ew]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ju[lg]=ug,Ju);function im(t){return("type"in(r=t)&&r.type.$$typeof)===lg?ug:"$$typeof"in t?Aw[t.$$typeof]:Lw;var r}var Iw=Object.defineProperty,Mw=Object.getOwnPropertyNames,om=Object.getOwnPropertySymbols,Vw=Object.getOwnPropertyDescriptor,Dw=Object.getPrototypeOf,sm=Object.prototype;function cg(t,r,o){if(typeof r!="string"){if(sm){var a=Dw(r);a&&a!==sm&&cg(t,a,o)}var u=Mw(r);om&&(u=u.concat(om(r)));for(var h=im(t),d=im(r),p=0;p<u.length;++p){var m=u[p];if(!(m in Rw||o&&o[m]||d&&m in d||h&&m in h)){var g=Vw(r,m);try{Iw(t,m,g)}catch{}}}}return t}function Pi(t){return typeof t=="function"}function pd(t){return typeof t=="object"&&"styledComponentId"in t}function Tr(t,r){return t&&r?"".concat(t," ").concat(r):t||r||""}function Oc(t,r){if(t.length===0)return"";for(var o=t[0],a=1;a<t.length;a++)o+=t[a];return o}function zo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Bc(t,r,o){if(o===void 0&&(o=!1),!o&&!zo(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var a=0;a<r.length;a++)t[a]=Bc(t[a],r[a]);else if(zo(r))for(var a in r)t[a]=Bc(t[a],r[a]);return t}function md(t,r){Object.defineProperty(t,"toString",{value:r})}function Wo(t){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Fw=function(){function t(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return t.prototype.indexOfGroup=function(r){for(var o=0,a=0;a<r;a++)o+=this.groupSizes[a];return o},t.prototype.insertRules=function(r,o){if(r>=this.groupSizes.length){for(var a=this.groupSizes,u=a.length,h=u;r>=h;)if((h<<=1)<0)throw Wo(16,"".concat(r));this.groupSizes=new Uint32Array(h),this.groupSizes.set(a),this.length=h;for(var d=u;d<h;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(r+1),m=(d=0,o.length);d<m;d++)this.tag.insertRule(p,o[d])&&(this.groupSizes[r]++,p++)},t.prototype.clearGroup=function(r){if(r<this.length){var o=this.groupSizes[r],a=this.indexOfGroup(r),u=a+o;this.groupSizes[r]=0;for(var h=a;h<u;h++)this.tag.deleteRule(a)}},t.prototype.getGroup=function(r){var o="";if(r>=this.length||this.groupSizes[r]===0)return o;for(var a=this.groupSizes[r],u=this.indexOfGroup(r),h=u+a,d=u;d<h;d++)o+="".concat(this.tag.getRule(d)).concat(hd);return o},t}(),pa=new Map,ka=new Map,ma=1,sa=function(t){if(pa.has(t))return pa.get(t);for(;ka.has(ma);)ma++;var r=ma++;return pa.set(t,r),ka.set(r,t),r},zw=function(t,r){ma=r+1,pa.set(t,r),ka.set(r,t)},Nw="style[".concat(bi,"][").concat(tg,'="').concat(Ba,'"]'),_w=new RegExp("^".concat(bi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ow=function(t,r,o){for(var a,u=o.split(","),h=0,d=u.length;h<d;h++)(a=u[h])&&t.registerName(r,a)},Bw=function(t,r){for(var o,a=((o=r.textContent)!==null&&o!==void 0?o:"").split(hd),u=[],h=0,d=a.length;h<d;h++){var p=a[h].trim();if(p){var m=p.match(_w);if(m){var g=0|parseInt(m[1],10),x=m[2];g!==0&&(zw(x,g),Ow(t,x,m[3]),t.getTag().insertRules(g,u)),u.length=0}else u.push(p)}}},am=function(t){for(var r=document.querySelectorAll(Nw),o=0,a=r.length;o<a;o++){var u=r[o];u&&u.getAttribute(bi)!==eg&&(Bw(t,u),u.parentNode&&u.parentNode.removeChild(u))}};function $w(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dg=function(t){var r=document.head,o=t||r,a=document.createElement("style"),u=function(p){var m=Array.from(p.querySelectorAll("style[".concat(bi,"]")));return m[m.length-1]}(o),h=u!==void 0?u.nextSibling:null;a.setAttribute(bi,eg),a.setAttribute(tg,Ba);var d=$w();return d&&a.setAttribute("nonce",d),o.insertBefore(a,h),a},Uw=function(){function t(r){this.element=dg(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var a=document.styleSheets,u=0,h=a.length;u<h;u++){var d=a[u];if(d.ownerNode===o)return d}throw Wo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(r,o){try{return this.sheet.insertRule(o,r),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.prototype.getRule=function(r){var o=this.sheet.cssRules[r];return o&&o.cssText?o.cssText:""},t}(),Ww=function(){function t(r){this.element=dg(r),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(r,o){if(r<=this.length&&r>=0){var a=document.createTextNode(o);return this.element.insertBefore(a,this.nodes[r]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},t}(),Hw=function(){function t(r){this.rules=[],this.length=0}return t.prototype.insertRule=function(r,o){return r<=this.length&&(this.rules.splice(r,0,o),this.length++,!0)},t.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},t}(),lm=ja,qw={isServer:!ja,useCSSOMInjection:!kw},Sa=function(){function t(r,o,a){r===void 0&&(r=Ci),o===void 0&&(o={});var u=this;this.options=ht(ht({},qw),r),this.gs=o,this.names=new Map(a),this.server=!!r.isServer,!this.server&&ja&&lm&&(lm=!1,am(this)),md(this,function(){return function(h){for(var d=h.getTag(),p=d.length,m="",g=function(v){var w=function(F){return ka.get(F)}(v);if(w===void 0)return"continue";var k=h.names.get(w),E=d.getGroup(v);if(k===void 0||!k.size||E.length===0)return"continue";var T="".concat(bi,".g").concat(v,'[id="').concat(w,'"]'),D="";k!==void 0&&k.forEach(function(F){F.length>0&&(D+="".concat(F,","))}),m+="".concat(E).concat(T,'{content:"').concat(D,'"}').concat(hd)},x=0;x<p;x++)g(x);return m}(u)})}return t.registerId=function(r){return sa(r)},t.prototype.rehydrate=function(){!this.server&&ja&&am(this)},t.prototype.reconstructWithOptions=function(r,o){return o===void 0&&(o=!0),new t(ht(ht({},this.options),r),this.gs,o&&this.names||void 0)},t.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(r=function(o){var a=o.useCSSOMInjection,u=o.target;return o.isServer?new Hw(u):a?new Uw(u):new Ww(u)}(this.options),new Fw(r)));var r},t.prototype.hasNameForId=function(r,o){return this.names.has(r)&&this.names.get(r).has(o)},t.prototype.registerName=function(r,o){if(sa(r),this.names.has(r))this.names.get(r).add(o);else{var a=new Set;a.add(o),this.names.set(r,a)}},t.prototype.insertRules=function(r,o,a){this.registerName(r,o),this.getTag().insertRules(sa(r),a)},t.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.prototype.clearRules=function(r){this.getTag().clearGroup(sa(r)),this.clearNames(r)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Gw=/&/g,Yw=/^\s*\/\/.*$/gm;function fg(t,r){return t.map(function(o){return o.type==="rule"&&(o.value="".concat(r," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(r," ")),o.props=o.props.map(function(a){return"".concat(r," ").concat(a)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=fg(o.children,r)),o})}function Qw(t){var r,o,a,u=Ci,h=u.options,d=h===void 0?Ci:h,p=u.plugins,m=p===void 0?$a:p,g=function(w,k,E){return E.startsWith(o)&&E.endsWith(o)&&E.replaceAll(o,"").length>0?".".concat(r):w},x=m.slice();x.push(function(w){w.type===za&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Gw,o).replace(a,g))}),d.prefix&&x.push(ww),x.push(yw);var v=function(w,k,E,T){k===void 0&&(k=""),E===void 0&&(E=""),T===void 0&&(T="&"),r=T,o=k,a=new RegExp("\\".concat(o,"\\b"),"g");var D=w.replace(Yw,""),F=mw(E||k?"".concat(E," ").concat(k," { ").concat(D," }"):D);d.namespace&&(F=fg(F,d.namespace));var I=[];return wa(F,xw(x.concat(vw(function(L){return I.push(L)})))),I};return v.hash=m.length?m.reduce(function(w,k){return k.name||Wo(15),gi(w,k.name)},ig).toString():"",v}var Kw=new Sa,$c=Qw(),hg=Ge.createContext({shouldForwardProp:void 0,styleSheet:Kw,stylis:$c});hg.Consumer;Ge.createContext(void 0);function Uc(){return R.useContext(hg)}var Xw=function(){function t(r,o){var a=this;this.inject=function(u,h){h===void 0&&(h=$c);var d=a.name+h.hash;u.hasNameForId(a.id,d)||u.insertRules(a.id,d,h(a.rules,d,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=o,md(this,function(){throw Wo(12,String(a.name))})}return t.prototype.getName=function(r){return r===void 0&&(r=$c),this.name+r.hash},t}(),Zw=function(t){return t>="A"&&t<="Z"};function um(t){for(var r="",o=0;o<t.length;o++){var a=t[o];if(o===1&&a==="-"&&t[0]==="-")return t;Zw(a)?r+="-"+a.toLowerCase():r+=a}return r.startsWith("ms-")?"-"+r:r}var pg=function(t){return t==null||t===!1||t===""},mg=function(t){var r,o,a=[];for(var u in t){var h=t[u];t.hasOwnProperty(u)&&!pg(h)&&(Array.isArray(h)&&h.isCss||Pi(h)?a.push("".concat(um(u),":"),h,";"):zo(h)?a.push.apply(a,Fo(Fo(["".concat(u," {")],mg(h),!1),["}"],!1)):a.push("".concat(um(u),": ").concat((r=u,(o=h)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||r in jw||r.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return a};function Kn(t,r,o,a){if(pg(t))return[];if(pd(t))return[".".concat(t.styledComponentId)];if(Pi(t)){if(!Pi(h=t)||h.prototype&&h.prototype.isReactComponent||!r)return[t];var u=t(r);return Kn(u,r,o,a)}var h;return t instanceof Xw?o?(t.inject(o,a),[t.getName(a)]):[t]:zo(t)?mg(t):Array.isArray(t)?Array.prototype.concat.apply($a,t.map(function(d){return Kn(d,r,o,a)})):[t.toString()]}function gg(t){for(var r=0;r<t.length;r+=1){var o=t[r];if(Pi(o)&&!pd(o))return!1}return!0}var Jw=og(Ba),ej=function(){function t(r,o,a){this.rules=r,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&gg(r),this.componentId=o,this.baseHash=gi(Jw,o),this.baseStyle=a,Sa.registerId(o)}return t.prototype.generateAndInjectStyles=function(r,o,a){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,o,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))u=Tr(u,this.staticRulesId);else{var h=Oc(Kn(this.rules,r,o,a)),d=_c(gi(this.baseHash,h)>>>0);if(!o.hasNameForId(this.componentId,d)){var p=a(h,".".concat(d),void 0,this.componentId);o.insertRules(this.componentId,d,p)}u=Tr(u,d),this.staticRulesId=d}else{for(var m=gi(this.baseHash,a.hash),g="",x=0;x<this.rules.length;x++){var v=this.rules[x];if(typeof v=="string")g+=v;else if(v){var w=Oc(Kn(v,r,o,a));m=gi(m,w+x),g+=w}}if(g){var k=_c(m>>>0);o.hasNameForId(this.componentId,k)||o.insertRules(this.componentId,k,a(g,".".concat(k),void 0,this.componentId)),u=Tr(u,k)}}return u},t}(),gd=Ge.createContext(void 0);gd.Consumer;var tc={};function tj(t,r,o){var a=pd(t),u=t,h=!ec(t),d=r.attrs,p=d===void 0?$a:d,m=r.componentId,g=m===void 0?function(N,q){var K=typeof N!="string"?"sc":nm(N);tc[K]=(tc[K]||0)+1;var G="".concat(K,"-").concat(sg(Ba+K+tc[K]));return q?"".concat(q,"-").concat(G):G}(r.displayName,r.parentComponentId):m,x=r.displayName,v=x===void 0?function(N){return ec(N)?"styled.".concat(N):"Styled(".concat(Tw(N),")")}(t):x,w=r.displayName&&r.componentId?"".concat(nm(r.displayName),"-").concat(r.componentId):r.componentId||g,k=a&&u.attrs?u.attrs.concat(p).filter(Boolean):p,E=r.shouldForwardProp;if(a&&u.shouldForwardProp){var T=u.shouldForwardProp;if(r.shouldForwardProp){var D=r.shouldForwardProp;E=function(N,q){return T(N,q)&&D(N,q)}}else E=T}var F=new ej(o,w,a?u.componentStyle:void 0);function I(N,q){return function(K,G,ne){var ce=K.attrs,Me=K.componentStyle,at=K.defaultProps,Ve=K.foldedComponentIds,Le=K.styledComponentId,be=K.target,Qe=Ge.useContext(gd),xe=Uc(),ge=K.shouldForwardProp||xe.shouldForwardProp,H=ng(G,Qe,at)||Ci,X=function(de,ue,ve){for(var pe,me=ht(ht({},ue),{className:void 0,theme:ve}),_e=0;_e<de.length;_e+=1){var nt=Pi(pe=de[_e])?pe(me):pe;for(var It in nt)me[It]=It==="className"?Tr(me[It],nt[It]):It==="style"?ht(ht({},me[It]),nt[It]):nt[It]}return ue.className&&(me.className=Tr(me.className,ue.className)),me}(ce,G,H),Y=X.as||be,b={};for(var z in X)X[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&X.theme===H||(z==="forwardedAs"?b.as=X.forwardedAs:ge&&!ge(z,Y)||(b[z]=X[z]));var ae=function(de,ue){var ve=Uc(),pe=de.generateAndInjectStyles(ue,ve.styleSheet,ve.stylis);return pe}(Me,X),le=Tr(Ve,Le);return ae&&(le+=" "+ae),X.className&&(le+=" "+X.className),b[ec(Y)&&!rg.has(Y)?"class":"className"]=le,ne&&(b.ref=ne),R.createElement(Y,b)}(L,N,q)}I.displayName=v;var L=Ge.forwardRef(I);return L.attrs=k,L.componentStyle=F,L.displayName=v,L.shouldForwardProp=E,L.foldedComponentIds=a?Tr(u.foldedComponentIds,u.styledComponentId):"",L.styledComponentId=w,L.target=a?u.target:t,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=a?function(q){for(var K=[],G=1;G<arguments.length;G++)K[G-1]=arguments[G];for(var ne=0,ce=K;ne<ce.length;ne++)Bc(q,ce[ne],!0);return q}({},u.defaultProps,N):N}}),md(L,function(){return".".concat(L.styledComponentId)}),h&&cg(L,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function cm(t,r){for(var o=[t[0]],a=0,u=r.length;a<u;a+=1)o.push(r[a],t[a+1]);return o}var dm=function(t){return Object.assign(t,{isCss:!0})};function yg(t){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(Pi(t)||zo(t))return dm(Kn(cm($a,Fo([t],r,!0))));var a=t;return r.length===0&&a.length===1&&typeof a[0]=="string"?Kn(a):dm(Kn(cm(a,r)))}function Wc(t,r,o){if(o===void 0&&(o=Ci),!r)throw Wo(1,r);var a=function(u){for(var h=[],d=1;d<arguments.length;d++)h[d-1]=arguments[d];return t(r,o,yg.apply(void 0,Fo([u],h,!1)))};return a.attrs=function(u){return Wc(t,r,ht(ht({},o),{attrs:Array.prototype.concat(o.attrs,u).filter(Boolean)}))},a.withConfig=function(u){return Wc(t,r,ht(ht({},o),u))},a}var xg=function(t){return Wc(tj,t)},P=xg;rg.forEach(function(t){P[t]=xg(t)});var nj=function(){function t(r,o){this.rules=r,this.componentId=o,this.isStatic=gg(r),Sa.registerId(this.componentId+1)}return t.prototype.createStyles=function(r,o,a,u){var h=u(Oc(Kn(this.rules,o,a,u)),""),d=this.componentId+r;a.insertRules(d,d,h)},t.prototype.removeStyles=function(r,o){o.clearRules(this.componentId+r)},t.prototype.renderStyles=function(r,o,a,u){r>2&&Sa.registerId(this.componentId+r),this.removeStyles(r,a),this.createStyles(r,o,a,u)},t}();function rj(t){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var a=yg.apply(void 0,Fo([t],r,!1)),u="sc-global-".concat(sg(JSON.stringify(a))),h=new nj(a,u),d=function(m){var g=Uc(),x=Ge.useContext(gd),v=Ge.useRef(g.styleSheet.allocateGSInstance(u)).current;return g.styleSheet.server&&p(v,m,g.styleSheet,x,g.stylis),Ge.useLayoutEffect(function(){if(!g.styleSheet.server)return p(v,m,g.styleSheet,x,g.stylis),function(){return h.removeStyles(v,g.styleSheet)}},[v,m,g.styleSheet,x,g.stylis]),null};function p(m,g,x,v,w){if(h.isStatic)h.renderStyles(m,Sw,x,w);else{var k=ht(ht({},g),{theme:ng(g,v,d.defaultProps)});h.renderStyles(m,k,x,w)}}return Ge.memo(d)}const ij=rj`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    color: #000;
    background: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  input, textarea {
    font-family: inherit;
    border: none;
    outline: none;
    background: none;
    padding: 0;
    color: #000;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    margin: 0;
  }

  ::selection {
    background: rgba(0, 0, 0, 0.1);
    color: #000;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes scaleIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-out;
  }

  .slide-up {
    animation: slideUp 0.5s ease-out;
  }

  .scale-in {
    animation: scaleIn 0.5s ease-out;
  }
`,vg=R.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Ua=R.createContext({}),Wa=R.createContext(null),Ha=typeof document<"u",yd=Ha?R.useLayoutEffect:R.useEffect,wg=R.createContext({strict:!1}),xd=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),oj="framerAppearId",jg="data-"+xd(oj);function sj(t,r,o,a){const{visualElement:u}=R.useContext(Ua),h=R.useContext(wg),d=R.useContext(Wa),p=R.useContext(vg).reducedMotion,m=R.useRef();a=a||h.renderer,!m.current&&a&&(m.current=a(t,{visualState:r,parent:u,props:o,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p}));const g=m.current;R.useInsertionEffect(()=>{g&&g.update(o,d)});const x=R.useRef(!!(o[jg]&&!window.HandoffComplete));return yd(()=>{g&&(g.render(),x.current&&g.animationState&&g.animationState.animateChanges())}),R.useEffect(()=>{g&&(g.updateFeatures(),!x.current&&g.animationState&&g.animationState.animateChanges(),x.current&&(x.current=!1,window.HandoffComplete=!0))}),g}function yi(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function aj(t,r,o){return R.useCallback(a=>{a&&t.mount&&t.mount(a),r&&(a?r.mount(a):r.unmount()),o&&(typeof o=="function"?o(a):yi(o)&&(o.current=a))},[r])}function No(t){return typeof t=="string"||Array.isArray(t)}function qa(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const vd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wd=["initial",...vd];function Ga(t){return qa(t.animate)||wd.some(r=>No(t[r]))}function kg(t){return!!(Ga(t)||t.variants)}function lj(t,r){if(Ga(t)){const{initial:o,animate:a}=t;return{initial:o===!1||No(o)?o:void 0,animate:No(a)?a:void 0}}return t.inherit!==!1?r:{}}function uj(t){const{initial:r,animate:o}=lj(t,R.useContext(Ua));return R.useMemo(()=>({initial:r,animate:o}),[fm(r),fm(o)])}function fm(t){return Array.isArray(t)?t.join(" "):t}const hm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},_o={};for(const t in hm)_o[t]={isEnabled:r=>hm[t].some(o=>!!r[o])};function cj(t){for(const r in t)_o[r]={..._o[r],...t[r]}}const jd=R.createContext({}),Sg=R.createContext({}),dj=Symbol.for("motionComponentSymbol");function fj({preloadedFeatures:t,createVisualElement:r,useRender:o,useVisualState:a,Component:u}){t&&cj(t);function h(p,m){let g;const x={...R.useContext(vg),...p,layoutId:hj(p)},{isStatic:v}=x,w=uj(p),k=a(p,v);if(!v&&Ha){w.visualElement=sj(u,k,x,r);const E=R.useContext(Sg),T=R.useContext(wg).strict;w.visualElement&&(g=w.visualElement.loadFeatures(x,T,t,E))}return R.createElement(Ua.Provider,{value:w},g&&w.visualElement?R.createElement(g,{visualElement:w.visualElement,...x}):null,o(u,p,aj(k,w.visualElement,m),k,v,w.visualElement))}const d=R.forwardRef(h);return d[dj]=u,d}function hj({layoutId:t}){const r=R.useContext(jd).id;return r&&t!==void 0?r+"-"+t:t}function pj(t){function r(a,u={}){return fj(t(a,u))}if(typeof Proxy>"u")return r;const o=new Map;return new Proxy(r,{get:(a,u)=>(o.has(u)||o.set(u,r(u)),o.get(u))})}const mj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kd(t){return typeof t!="string"||t.includes("-")?!1:!!(mj.indexOf(t)>-1||/[A-Z]/.test(t))}const ba={};function gj(t){Object.assign(ba,t)}const Ho=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Mr=new Set(Ho);function bg(t,{layout:r,layoutId:o}){return Mr.has(t)||t.startsWith("origin")||(r||o!==void 0)&&(!!ba[t]||t==="opacity")}const Ct=t=>!!(t&&t.getVelocity),yj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xj=Ho.length;function vj(t,{enableHardwareAcceleration:r=!0,allowTransformNone:o=!0},a,u){let h="";for(let d=0;d<xj;d++){const p=Ho[d];if(t[p]!==void 0){const m=yj[p]||p;h+=`${m}(${t[p]}) `}}return r&&!t.z&&(h+="translateZ(0)"),h=h.trim(),u?h=u(t,a?"":h):o&&a&&(h="none"),h}const Cg=t=>r=>typeof r=="string"&&r.startsWith(t),Pg=Cg("--"),Hc=Cg("var(--"),wj=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,jj=(t,r)=>r&&typeof t=="number"?r.transform(t):t,Jn=(t,r,o)=>Math.min(Math.max(o,t),r),Vr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ro={...Vr,transform:t=>Jn(0,1,t)},aa={...Vr,default:1},Ao=t=>Math.round(t*1e5)/1e5,Ya=/(-)?([\d]*\.?[\d])+/g,Tg=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,kj=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function qo(t){return typeof t=="string"}const Go=t=>({test:r=>qo(r)&&r.endsWith(t)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${t}`}),qn=Go("deg"),ln=Go("%"),oe=Go("px"),Sj=Go("vh"),bj=Go("vw"),pm={...ln,parse:t=>ln.parse(t)/100,transform:t=>ln.transform(t*100)},mm={...Vr,transform:Math.round},Eg={borderWidth:oe,borderTopWidth:oe,borderRightWidth:oe,borderBottomWidth:oe,borderLeftWidth:oe,borderRadius:oe,radius:oe,borderTopLeftRadius:oe,borderTopRightRadius:oe,borderBottomRightRadius:oe,borderBottomLeftRadius:oe,width:oe,maxWidth:oe,height:oe,maxHeight:oe,size:oe,top:oe,right:oe,bottom:oe,left:oe,padding:oe,paddingTop:oe,paddingRight:oe,paddingBottom:oe,paddingLeft:oe,margin:oe,marginTop:oe,marginRight:oe,marginBottom:oe,marginLeft:oe,rotate:qn,rotateX:qn,rotateY:qn,rotateZ:qn,scale:aa,scaleX:aa,scaleY:aa,scaleZ:aa,skew:qn,skewX:qn,skewY:qn,distance:oe,translateX:oe,translateY:oe,translateZ:oe,x:oe,y:oe,z:oe,perspective:oe,transformPerspective:oe,opacity:Ro,originX:pm,originY:pm,originZ:oe,zIndex:mm,fillOpacity:Ro,strokeOpacity:Ro,numOctaves:mm};function Sd(t,r,o,a){const{style:u,vars:h,transform:d,transformOrigin:p}=t;let m=!1,g=!1,x=!0;for(const v in r){const w=r[v];if(Pg(v)){h[v]=w;continue}const k=Eg[v],E=jj(w,k);if(Mr.has(v)){if(m=!0,d[v]=E,!x)continue;w!==(k.default||0)&&(x=!1)}else v.startsWith("origin")?(g=!0,p[v]=E):u[v]=E}if(r.transform||(m||a?u.transform=vj(t.transform,o,x,a):u.transform&&(u.transform="none")),g){const{originX:v="50%",originY:w="50%",originZ:k=0}=p;u.transformOrigin=`${v} ${w} ${k}`}}const bd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Lg(t,r,o){for(const a in r)!Ct(r[a])&&!bg(a,o)&&(t[a]=r[a])}function Cj({transformTemplate:t},r,o){return R.useMemo(()=>{const a=bd();return Sd(a,r,{enableHardwareAcceleration:!o},t),Object.assign({},a.vars,a.style)},[r])}function Pj(t,r,o){const a=t.style||{},u={};return Lg(u,a,t),Object.assign(u,Cj(t,r,o)),t.transformValues?t.transformValues(u):u}function Tj(t,r,o){const a={},u=Pj(t,r,o);return t.drag&&t.dragListener!==!1&&(a.draggable=!1,u.userSelect=u.WebkitUserSelect=u.WebkitTouchCallout="none",u.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(a.tabIndex=0),a.style=u,a}const Ej=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ca(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Ej.has(t)}let Rg=t=>!Ca(t);function Lj(t){t&&(Rg=r=>r.startsWith("on")?!Ca(r):t(r))}try{Lj(require("@emotion/is-prop-valid").default)}catch{}function Rj(t,r,o){const a={};for(const u in t)u==="values"&&typeof t.values=="object"||(Rg(u)||o===!0&&Ca(u)||!r&&!Ca(u)||t.draggable&&u.startsWith("onDrag"))&&(a[u]=t[u]);return a}function gm(t,r,o){return typeof t=="string"?t:oe.transform(r+o*t)}function Aj(t,r,o){const a=gm(r,t.x,t.width),u=gm(o,t.y,t.height);return`${a} ${u}`}const Ij={offset:"stroke-dashoffset",array:"stroke-dasharray"},Mj={offset:"strokeDashoffset",array:"strokeDasharray"};function Vj(t,r,o=1,a=0,u=!0){t.pathLength=1;const h=u?Ij:Mj;t[h.offset]=oe.transform(-a);const d=oe.transform(r),p=oe.transform(o);t[h.array]=`${d} ${p}`}function Cd(t,{attrX:r,attrY:o,attrScale:a,originX:u,originY:h,pathLength:d,pathSpacing:p=1,pathOffset:m=0,...g},x,v,w){if(Sd(t,g,x,w),v){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:k,style:E,dimensions:T}=t;k.transform&&(T&&(E.transform=k.transform),delete k.transform),T&&(u!==void 0||h!==void 0||E.transform)&&(E.transformOrigin=Aj(T,u!==void 0?u:.5,h!==void 0?h:.5)),r!==void 0&&(k.x=r),o!==void 0&&(k.y=o),a!==void 0&&(k.scale=a),d!==void 0&&Vj(k,d,p,m,!1)}const Ag=()=>({...bd(),attrs:{}}),Pd=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Dj(t,r,o,a){const u=R.useMemo(()=>{const h=Ag();return Cd(h,r,{enableHardwareAcceleration:!1},Pd(a),t.transformTemplate),{...h.attrs,style:{...h.style}}},[r]);if(t.style){const h={};Lg(h,t.style,t),u.style={...h,...u.style}}return u}function Fj(t=!1){return(o,a,u,{latestValues:h},d)=>{const m=(kd(o)?Dj:Tj)(a,h,d,o),x={...Rj(a,typeof o=="string",t),...m,ref:u},{children:v}=a,w=R.useMemo(()=>Ct(v)?v.get():v,[v]);return R.createElement(o,{...x,children:w})}}function Ig(t,{style:r,vars:o},a,u){Object.assign(t.style,r,u&&u.getProjectionStyles(a));for(const h in o)t.style.setProperty(h,o[h])}const Mg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Vg(t,r,o,a){Ig(t,r,void 0,a);for(const u in r.attrs)t.setAttribute(Mg.has(u)?u:xd(u),r.attrs[u])}function Td(t,r){const{style:o}=t,a={};for(const u in o)(Ct(o[u])||r.style&&Ct(r.style[u])||bg(u,t))&&(a[u]=o[u]);return a}function Dg(t,r){const o=Td(t,r);for(const a in t)if(Ct(t[a])||Ct(r[a])){const u=Ho.indexOf(a)!==-1?"attr"+a.charAt(0).toUpperCase()+a.substring(1):a;o[u]=t[a]}return o}function Ed(t,r,o,a={},u={}){return typeof r=="function"&&(r=r(o!==void 0?o:t.custom,a,u)),typeof r=="string"&&(r=t.variants&&t.variants[r]),typeof r=="function"&&(r=r(o!==void 0?o:t.custom,a,u)),r}function Fg(t){const r=R.useRef(null);return r.current===null&&(r.current=t()),r.current}const Pa=t=>Array.isArray(t),zj=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Nj=t=>Pa(t)?t[t.length-1]||0:t;function ga(t){const r=Ct(t)?t.get():t;return zj(r)?r.toValue():r}function _j({scrapeMotionValuesFromProps:t,createRenderState:r,onMount:o},a,u,h){const d={latestValues:Oj(a,u,h,t),renderState:r()};return o&&(d.mount=p=>o(a,p,d)),d}const zg=t=>(r,o)=>{const a=R.useContext(Ua),u=R.useContext(Wa),h=()=>_j(t,r,a,u);return o?h():Fg(h)};function Oj(t,r,o,a){const u={},h=a(t,{});for(const w in h)u[w]=ga(h[w]);let{initial:d,animate:p}=t;const m=Ga(t),g=kg(t);r&&g&&!m&&t.inherit!==!1&&(d===void 0&&(d=r.initial),p===void 0&&(p=r.animate));let x=o?o.initial===!1:!1;x=x||d===!1;const v=x?p:d;return v&&typeof v!="boolean"&&!qa(v)&&(Array.isArray(v)?v:[v]).forEach(k=>{const E=Ed(t,k);if(!E)return;const{transitionEnd:T,transition:D,...F}=E;for(const I in F){let L=F[I];if(Array.isArray(L)){const N=x?L.length-1:0;L=L[N]}L!==null&&(u[I]=L)}for(const I in T)u[I]=T[I]}),u}const Ue=t=>t;class ym{constructor(){this.order=[],this.scheduled=new Set}add(r){if(!this.scheduled.has(r))return this.scheduled.add(r),this.order.push(r),!0}remove(r){const o=this.order.indexOf(r);o!==-1&&(this.order.splice(o,1),this.scheduled.delete(r))}clear(){this.order.length=0,this.scheduled.clear()}}function Bj(t){let r=new ym,o=new ym,a=0,u=!1,h=!1;const d=new WeakSet,p={schedule:(m,g=!1,x=!1)=>{const v=x&&u,w=v?r:o;return g&&d.add(m),w.add(m)&&v&&u&&(a=r.order.length),m},cancel:m=>{o.remove(m),d.delete(m)},process:m=>{if(u){h=!0;return}if(u=!0,[r,o]=[o,r],o.clear(),a=r.order.length,a)for(let g=0;g<a;g++){const x=r.order[g];x(m),d.has(x)&&(p.schedule(x),t())}u=!1,h&&(h=!1,p.process(m))}};return p}const la=["prepare","read","update","preRender","render","postRender"],$j=40;function Uj(t,r){let o=!1,a=!0;const u={delta:0,timestamp:0,isProcessing:!1},h=la.reduce((v,w)=>(v[w]=Bj(()=>o=!0),v),{}),d=v=>h[v].process(u),p=()=>{const v=performance.now();o=!1,u.delta=a?1e3/60:Math.max(Math.min(v-u.timestamp,$j),1),u.timestamp=v,u.isProcessing=!0,la.forEach(d),u.isProcessing=!1,o&&r&&(a=!1,t(p))},m=()=>{o=!0,a=!0,u.isProcessing||t(p)};return{schedule:la.reduce((v,w)=>{const k=h[w];return v[w]=(E,T=!1,D=!1)=>(o||m(),k.schedule(E,T,D)),v},{}),cancel:v=>la.forEach(w=>h[w].cancel(v)),state:u,steps:h}}const{schedule:Ee,cancel:Sn,state:ft,steps:nc}=Uj(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ue,!0),Wj={useVisualState:zg({scrapeMotionValuesFromProps:Dg,createRenderState:Ag,onMount:(t,r,{renderState:o,latestValues:a})=>{Ee.read(()=>{try{o.dimensions=typeof r.getBBox=="function"?r.getBBox():r.getBoundingClientRect()}catch{o.dimensions={x:0,y:0,width:0,height:0}}}),Ee.render(()=>{Cd(o,a,{enableHardwareAcceleration:!1},Pd(r.tagName),t.transformTemplate),Vg(r,o)})}})},Hj={useVisualState:zg({scrapeMotionValuesFromProps:Td,createRenderState:bd})};function qj(t,{forwardMotionProps:r=!1},o,a){return{...kd(t)?Wj:Hj,preloadedFeatures:o,useRender:Fj(r),createVisualElement:a,Component:t}}function wn(t,r,o,a={passive:!0}){return t.addEventListener(r,o,a),()=>t.removeEventListener(r,o)}const Ng=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Qa(t,r="page"){return{point:{x:t[r+"X"],y:t[r+"Y"]}}}const Gj=t=>r=>Ng(r)&&t(r,Qa(r));function jn(t,r,o,a){return wn(t,r,Gj(o),a)}const Yj=(t,r)=>o=>r(t(o)),Xn=(...t)=>t.reduce(Yj);function _g(t){let r=null;return()=>{const o=()=>{r=null};return r===null?(r=t,o):!1}}const xm=_g("dragHorizontal"),vm=_g("dragVertical");function Og(t){let r=!1;if(t==="y")r=vm();else if(t==="x")r=xm();else{const o=xm(),a=vm();o&&a?r=()=>{o(),a()}:(o&&o(),a&&a())}return r}function Bg(){const t=Og(!0);return t?(t(),!1):!0}let tr=class{constructor(r){this.isMounted=!1,this.node=r}update(){}};function wm(t,r){const o="pointer"+(r?"enter":"leave"),a="onHover"+(r?"Start":"End"),u=(h,d)=>{if(h.pointerType==="touch"||Bg())return;const p=t.getProps();t.animationState&&p.whileHover&&t.animationState.setActive("whileHover",r),p[a]&&Ee.update(()=>p[a](h,d))};return jn(t.current,o,u,{passive:!t.getProps()[a]})}class Qj extends tr{mount(){this.unmount=Xn(wm(this.node,!0),wm(this.node,!1))}unmount(){}}class Kj extends tr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Xn(wn(this.node.current,"focus",()=>this.onFocus()),wn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const $g=(t,r)=>r?t===r?!0:$g(t,r.parentElement):!1;function rc(t,r){if(!r)return;const o=new PointerEvent("pointer"+t);r(o,Qa(o))}class Xj extends tr{constructor(){super(...arguments),this.removeStartListeners=Ue,this.removeEndListeners=Ue,this.removeAccessibleListeners=Ue,this.startPointerPress=(r,o)=>{if(this.isPressing)return;this.removeEndListeners();const a=this.node.getProps(),h=jn(window,"pointerup",(p,m)=>{if(!this.checkPressEnd())return;const{onTap:g,onTapCancel:x,globalTapTarget:v}=this.node.getProps();Ee.update(()=>{!v&&!$g(this.node.current,p.target)?x&&x(p,m):g&&g(p,m)})},{passive:!(a.onTap||a.onPointerUp)}),d=jn(window,"pointercancel",(p,m)=>this.cancelPress(p,m),{passive:!(a.onTapCancel||a.onPointerCancel)});this.removeEndListeners=Xn(h,d),this.startPress(r,o)},this.startAccessiblePress=()=>{const r=h=>{if(h.key!=="Enter"||this.isPressing)return;const d=p=>{p.key!=="Enter"||!this.checkPressEnd()||rc("up",(m,g)=>{const{onTap:x}=this.node.getProps();x&&Ee.update(()=>x(m,g))})};this.removeEndListeners(),this.removeEndListeners=wn(this.node.current,"keyup",d),rc("down",(p,m)=>{this.startPress(p,m)})},o=wn(this.node.current,"keydown",r),a=()=>{this.isPressing&&rc("cancel",(h,d)=>this.cancelPress(h,d))},u=wn(this.node.current,"blur",a);this.removeAccessibleListeners=Xn(o,u)}}startPress(r,o){this.isPressing=!0;const{onTapStart:a,whileTap:u}=this.node.getProps();u&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),a&&Ee.update(()=>a(r,o))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Bg()}cancelPress(r,o){if(!this.checkPressEnd())return;const{onTapCancel:a}=this.node.getProps();a&&Ee.update(()=>a(r,o))}mount(){const r=this.node.getProps(),o=jn(r.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(r.onTapStart||r.onPointerStart)}),a=wn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Xn(o,a)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const qc=new WeakMap,ic=new WeakMap,Zj=t=>{const r=qc.get(t.target);r&&r(t)},Jj=t=>{t.forEach(Zj)};function ek({root:t,...r}){const o=t||document;ic.has(o)||ic.set(o,{});const a=ic.get(o),u=JSON.stringify(r);return a[u]||(a[u]=new IntersectionObserver(Jj,{root:t,...r})),a[u]}function tk(t,r,o){const a=ek(r);return qc.set(t,o),a.observe(t),()=>{qc.delete(t),a.unobserve(t)}}const nk={some:0,all:1};class rk extends tr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:r={}}=this.node.getProps(),{root:o,margin:a,amount:u="some",once:h}=r,d={root:o?o.current:void 0,rootMargin:a,threshold:typeof u=="number"?u:nk[u]},p=m=>{const{isIntersecting:g}=m;if(this.isInView===g||(this.isInView=g,h&&!g&&this.hasEnteredView))return;g&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",g);const{onViewportEnter:x,onViewportLeave:v}=this.node.getProps(),w=g?x:v;w&&w(m)};return tk(this.node.current,d,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:o}=this.node;["amount","margin","root"].some(ik(r,o))&&this.startObserver()}unmount(){}}function ik({viewport:t={}},{viewport:r={}}={}){return o=>t[o]!==r[o]}const ok={inView:{Feature:rk},tap:{Feature:Xj},focus:{Feature:Kj},hover:{Feature:Qj}};function Ug(t,r){if(!Array.isArray(r))return!1;const o=r.length;if(o!==t.length)return!1;for(let a=0;a<o;a++)if(r[a]!==t[a])return!1;return!0}function sk(t){const r={};return t.values.forEach((o,a)=>r[a]=o.get()),r}function ak(t){const r={};return t.values.forEach((o,a)=>r[a]=o.getVelocity()),r}function Ka(t,r,o){const a=t.getProps();return Ed(a,r,o!==void 0?o:a.custom,sk(t),ak(t))}let Ld=Ue;const Rr=t=>t*1e3,kn=t=>t/1e3,lk={current:!1},Wg=t=>Array.isArray(t)&&typeof t[0]=="number";function Hg(t){return!!(!t||typeof t=="string"&&qg[t]||Wg(t)||Array.isArray(t)&&t.every(Hg))}const To=([t,r,o,a])=>`cubic-bezier(${t}, ${r}, ${o}, ${a})`,qg={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:To([0,.65,.55,1]),circOut:To([.55,0,1,.45]),backIn:To([.31,.01,.66,-.59]),backOut:To([.33,1.53,.69,.99])};function Gg(t){if(t)return Wg(t)?To(t):Array.isArray(t)?t.map(Gg):qg[t]}function uk(t,r,o,{delay:a=0,duration:u,repeat:h=0,repeatType:d="loop",ease:p,times:m}={}){const g={[r]:o};m&&(g.offset=m);const x=Gg(p);return Array.isArray(x)&&(g.easing=x),t.animate(g,{delay:a,duration:u,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:h+1,direction:d==="reverse"?"alternate":"normal"})}function ck(t,{repeat:r,repeatType:o="loop"}){const a=r&&o!=="loop"&&r%2===1?0:t.length-1;return t[a]}const Yg=(t,r,o)=>(((1-3*o+3*r)*t+(3*o-6*r))*t+3*r)*t,dk=1e-7,fk=12;function hk(t,r,o,a,u){let h,d,p=0;do d=r+(o-r)/2,h=Yg(d,a,u)-t,h>0?o=d:r=d;while(Math.abs(h)>dk&&++p<fk);return d}function Yo(t,r,o,a){if(t===r&&o===a)return Ue;const u=h=>hk(h,0,1,t,o);return h=>h===0||h===1?h:Yg(u(h),r,a)}const pk=Yo(.42,0,1,1),mk=Yo(0,0,.58,1),Qg=Yo(.42,0,.58,1),gk=t=>Array.isArray(t)&&typeof t[0]!="number",Kg=t=>r=>r<=.5?t(2*r)/2:(2-t(2*(1-r)))/2,Xg=t=>r=>1-t(1-r),Rd=t=>1-Math.sin(Math.acos(t)),Zg=Xg(Rd),yk=Kg(Rd),Jg=Yo(.33,1.53,.69,.99),Ad=Xg(Jg),xk=Kg(Ad),vk=t=>(t*=2)<1?.5*Ad(t):.5*(2-Math.pow(2,-10*(t-1))),wk={linear:Ue,easeIn:pk,easeInOut:Qg,easeOut:mk,circIn:Rd,circInOut:yk,circOut:Zg,backIn:Ad,backInOut:xk,backOut:Jg,anticipate:vk},jm=t=>{if(Array.isArray(t)){Ld(t.length===4);const[r,o,a,u]=t;return Yo(r,o,a,u)}else if(typeof t=="string")return wk[t];return t},Id=(t,r)=>o=>!!(qo(o)&&kj.test(o)&&o.startsWith(t)||r&&Object.prototype.hasOwnProperty.call(o,r)),ey=(t,r,o)=>a=>{if(!qo(a))return a;const[u,h,d,p]=a.match(Ya);return{[t]:parseFloat(u),[r]:parseFloat(h),[o]:parseFloat(d),alpha:p!==void 0?parseFloat(p):1}},jk=t=>Jn(0,255,t),oc={...Vr,transform:t=>Math.round(jk(t))},Er={test:Id("rgb","red"),parse:ey("red","green","blue"),transform:({red:t,green:r,blue:o,alpha:a=1})=>"rgba("+oc.transform(t)+", "+oc.transform(r)+", "+oc.transform(o)+", "+Ao(Ro.transform(a))+")"};function kk(t){let r="",o="",a="",u="";return t.length>5?(r=t.substring(1,3),o=t.substring(3,5),a=t.substring(5,7),u=t.substring(7,9)):(r=t.substring(1,2),o=t.substring(2,3),a=t.substring(3,4),u=t.substring(4,5),r+=r,o+=o,a+=a,u+=u),{red:parseInt(r,16),green:parseInt(o,16),blue:parseInt(a,16),alpha:u?parseInt(u,16)/255:1}}const Gc={test:Id("#"),parse:kk,transform:Er.transform},xi={test:Id("hsl","hue"),parse:ey("hue","saturation","lightness"),transform:({hue:t,saturation:r,lightness:o,alpha:a=1})=>"hsla("+Math.round(t)+", "+ln.transform(Ao(r))+", "+ln.transform(Ao(o))+", "+Ao(Ro.transform(a))+")"},xt={test:t=>Er.test(t)||Gc.test(t)||xi.test(t),parse:t=>Er.test(t)?Er.parse(t):xi.test(t)?xi.parse(t):Gc.parse(t),transform:t=>qo(t)?t:t.hasOwnProperty("red")?Er.transform(t):xi.transform(t)},Ne=(t,r,o)=>-o*t+o*r+t;function sc(t,r,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?t+(r-t)*6*o:o<1/2?r:o<2/3?t+(r-t)*(2/3-o)*6:t}function Sk({hue:t,saturation:r,lightness:o,alpha:a}){t/=360,r/=100,o/=100;let u=0,h=0,d=0;if(!r)u=h=d=o;else{const p=o<.5?o*(1+r):o+r-o*r,m=2*o-p;u=sc(m,p,t+1/3),h=sc(m,p,t),d=sc(m,p,t-1/3)}return{red:Math.round(u*255),green:Math.round(h*255),blue:Math.round(d*255),alpha:a}}const ac=(t,r,o)=>{const a=t*t;return Math.sqrt(Math.max(0,o*(r*r-a)+a))},bk=[Gc,Er,xi],Ck=t=>bk.find(r=>r.test(t));function km(t){const r=Ck(t);let o=r.parse(t);return r===xi&&(o=Sk(o)),o}const ty=(t,r)=>{const o=km(t),a=km(r),u={...o};return h=>(u.red=ac(o.red,a.red,h),u.green=ac(o.green,a.green,h),u.blue=ac(o.blue,a.blue,h),u.alpha=Ne(o.alpha,a.alpha,h),Er.transform(u))};function Pk(t){var r,o;return isNaN(t)&&qo(t)&&(((r=t.match(Ya))===null||r===void 0?void 0:r.length)||0)+(((o=t.match(Tg))===null||o===void 0?void 0:o.length)||0)>0}const ny={regex:wj,countKey:"Vars",token:"${v}",parse:Ue},ry={regex:Tg,countKey:"Colors",token:"${c}",parse:xt.parse},iy={regex:Ya,countKey:"Numbers",token:"${n}",parse:Vr.parse};function lc(t,{regex:r,countKey:o,token:a,parse:u}){const h=t.tokenised.match(r);h&&(t["num"+o]=h.length,t.tokenised=t.tokenised.replace(r,a),t.values.push(...h.map(u)))}function Ta(t){const r=t.toString(),o={value:r,tokenised:r,values:[],numVars:0,numColors:0,numNumbers:0};return o.value.includes("var(--")&&lc(o,ny),lc(o,ry),lc(o,iy),o}function oy(t){return Ta(t).values}function sy(t){const{values:r,numColors:o,numVars:a,tokenised:u}=Ta(t),h=r.length;return d=>{let p=u;for(let m=0;m<h;m++)m<a?p=p.replace(ny.token,d[m]):m<a+o?p=p.replace(ry.token,xt.transform(d[m])):p=p.replace(iy.token,Ao(d[m]));return p}}const Tk=t=>typeof t=="number"?0:t;function Ek(t){const r=oy(t);return sy(t)(r.map(Tk))}const er={test:Pk,parse:oy,createTransformer:sy,getAnimatableNone:Ek},ay=(t,r)=>o=>`${o>0?r:t}`;function ly(t,r){return typeof t=="number"?o=>Ne(t,r,o):xt.test(t)?ty(t,r):t.startsWith("var(")?ay(t,r):cy(t,r)}const uy=(t,r)=>{const o=[...t],a=o.length,u=t.map((h,d)=>ly(h,r[d]));return h=>{for(let d=0;d<a;d++)o[d]=u[d](h);return o}},Lk=(t,r)=>{const o={...t,...r},a={};for(const u in o)t[u]!==void 0&&r[u]!==void 0&&(a[u]=ly(t[u],r[u]));return u=>{for(const h in a)o[h]=a[h](u);return o}},cy=(t,r)=>{const o=er.createTransformer(r),a=Ta(t),u=Ta(r);return a.numVars===u.numVars&&a.numColors===u.numColors&&a.numNumbers>=u.numNumbers?Xn(uy(a.values,u.values),o):ay(t,r)},Oo=(t,r,o)=>{const a=r-t;return a===0?1:(o-t)/a},Sm=(t,r)=>o=>Ne(t,r,o);function Rk(t){return typeof t=="number"?Sm:typeof t=="string"?xt.test(t)?ty:cy:Array.isArray(t)?uy:typeof t=="object"?Lk:Sm}function Ak(t,r,o){const a=[],u=o||Rk(t[0]),h=t.length-1;for(let d=0;d<h;d++){let p=u(t[d],t[d+1]);if(r){const m=Array.isArray(r)?r[d]||Ue:r;p=Xn(m,p)}a.push(p)}return a}function dy(t,r,{clamp:o=!0,ease:a,mixer:u}={}){const h=t.length;if(Ld(h===r.length),h===1)return()=>r[0];t[0]>t[h-1]&&(t=[...t].reverse(),r=[...r].reverse());const d=Ak(r,a,u),p=d.length,m=g=>{let x=0;if(p>1)for(;x<t.length-2&&!(g<t[x+1]);x++);const v=Oo(t[x],t[x+1],g);return d[x](v)};return o?g=>m(Jn(t[0],t[h-1],g)):m}function Ik(t,r){const o=t[t.length-1];for(let a=1;a<=r;a++){const u=Oo(0,r,a);t.push(Ne(o,1,u))}}function Mk(t){const r=[0];return Ik(r,t.length-1),r}function Vk(t,r){return t.map(o=>o*r)}function Dk(t,r){return t.map(()=>r||Qg).splice(0,t.length-1)}function Ea({duration:t=300,keyframes:r,times:o,ease:a="easeInOut"}){const u=gk(a)?a.map(jm):jm(a),h={done:!1,value:r[0]},d=Vk(o&&o.length===r.length?o:Mk(r),t),p=dy(d,r,{ease:Array.isArray(u)?u:Dk(r,u)});return{calculatedDuration:t,next:m=>(h.value=p(m),h.done=m>=t,h)}}function fy(t,r){return r?t*(1e3/r):0}const Fk=5;function hy(t,r,o){const a=Math.max(r-Fk,0);return fy(o-t(a),r-a)}const bm=.001,zk=.01,Nk=10,_k=.05,Ok=1;function Bk({duration:t=800,bounce:r=.25,velocity:o=0,mass:a=1}){let u,h,d=1-r;d=Jn(_k,Ok,d),t=Jn(zk,Nk,kn(t)),d<1?(u=g=>{const x=g*d,v=x*t,w=x-o,k=Yc(g,d),E=Math.exp(-v);return bm-w/k*E},h=g=>{const v=g*d*t,w=v*o+o,k=Math.pow(d,2)*Math.pow(g,2)*t,E=Math.exp(-v),T=Yc(Math.pow(g,2),d);return(-u(g)+bm>0?-1:1)*((w-k)*E)/T}):(u=g=>{const x=Math.exp(-g*t),v=(g-o)*t+1;return-.001+x*v},h=g=>{const x=Math.exp(-g*t),v=(o-g)*(t*t);return x*v});const p=5/t,m=Uk(u,h,p);if(t=Rr(t),isNaN(m))return{stiffness:100,damping:10,duration:t};{const g=Math.pow(m,2)*a;return{stiffness:g,damping:d*2*Math.sqrt(a*g),duration:t}}}const $k=12;function Uk(t,r,o){let a=o;for(let u=1;u<$k;u++)a=a-t(a)/r(a);return a}function Yc(t,r){return t*Math.sqrt(1-r*r)}const Wk=["duration","bounce"],Hk=["stiffness","damping","mass"];function Cm(t,r){return r.some(o=>t[o]!==void 0)}function qk(t){let r={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!Cm(t,Hk)&&Cm(t,Wk)){const o=Bk(t);r={...r,...o,mass:1},r.isResolvedFromDuration=!0}return r}function py({keyframes:t,restDelta:r,restSpeed:o,...a}){const u=t[0],h=t[t.length-1],d={done:!1,value:u},{stiffness:p,damping:m,mass:g,duration:x,velocity:v,isResolvedFromDuration:w}=qk({...a,velocity:-kn(a.velocity||0)}),k=v||0,E=m/(2*Math.sqrt(p*g)),T=h-u,D=kn(Math.sqrt(p/g)),F=Math.abs(T)<5;o||(o=F?.01:2),r||(r=F?.005:.5);let I;if(E<1){const L=Yc(D,E);I=N=>{const q=Math.exp(-E*D*N);return h-q*((k+E*D*T)/L*Math.sin(L*N)+T*Math.cos(L*N))}}else if(E===1)I=L=>h-Math.exp(-D*L)*(T+(k+D*T)*L);else{const L=D*Math.sqrt(E*E-1);I=N=>{const q=Math.exp(-E*D*N),K=Math.min(L*N,300);return h-q*((k+E*D*T)*Math.sinh(K)+L*T*Math.cosh(K))/L}}return{calculatedDuration:w&&x||null,next:L=>{const N=I(L);if(w)d.done=L>=x;else{let q=k;L!==0&&(E<1?q=hy(I,L,N):q=0);const K=Math.abs(q)<=o,G=Math.abs(h-N)<=r;d.done=K&&G}return d.value=d.done?h:N,d}}}function Pm({keyframes:t,velocity:r=0,power:o=.8,timeConstant:a=325,bounceDamping:u=10,bounceStiffness:h=500,modifyTarget:d,min:p,max:m,restDelta:g=.5,restSpeed:x}){const v=t[0],w={done:!1,value:v},k=ne=>p!==void 0&&ne<p||m!==void 0&&ne>m,E=ne=>p===void 0?m:m===void 0||Math.abs(p-ne)<Math.abs(m-ne)?p:m;let T=o*r;const D=v+T,F=d===void 0?D:d(D);F!==D&&(T=F-v);const I=ne=>-T*Math.exp(-ne/a),L=ne=>F+I(ne),N=ne=>{const ce=I(ne),Me=L(ne);w.done=Math.abs(ce)<=g,w.value=w.done?F:Me};let q,K;const G=ne=>{k(w.value)&&(q=ne,K=py({keyframes:[w.value,E(w.value)],velocity:hy(L,ne,w.value),damping:u,stiffness:h,restDelta:g,restSpeed:x}))};return G(0),{calculatedDuration:null,next:ne=>{let ce=!1;return!K&&q===void 0&&(ce=!0,N(ne),G(ne)),q!==void 0&&ne>q?K.next(ne-q):(!ce&&N(ne),w)}}}const Gk=t=>{const r=({timestamp:o})=>t(o);return{start:()=>Ee.update(r,!0),stop:()=>Sn(r),now:()=>ft.isProcessing?ft.timestamp:performance.now()}},Tm=2e4;function Em(t){let r=0;const o=50;let a=t.next(r);for(;!a.done&&r<Tm;)r+=o,a=t.next(r);return r>=Tm?1/0:r}const Yk={decay:Pm,inertia:Pm,tween:Ea,keyframes:Ea,spring:py};function La({autoplay:t=!0,delay:r=0,driver:o=Gk,keyframes:a,type:u="keyframes",repeat:h=0,repeatDelay:d=0,repeatType:p="loop",onPlay:m,onStop:g,onComplete:x,onUpdate:v,...w}){let k=1,E=!1,T,D;const F=()=>{D=new Promise(b=>{T=b})};F();let I;const L=Yk[u]||Ea;let N;L!==Ea&&typeof a[0]!="number"&&(N=dy([0,100],a,{clamp:!1}),a=[0,100]);const q=L({...w,keyframes:a});let K;p==="mirror"&&(K=L({...w,keyframes:[...a].reverse(),velocity:-(w.velocity||0)}));let G="idle",ne=null,ce=null,Me=null;q.calculatedDuration===null&&h&&(q.calculatedDuration=Em(q));const{calculatedDuration:at}=q;let Ve=1/0,Le=1/0;at!==null&&(Ve=at+d,Le=Ve*(h+1)-d);let be=0;const Qe=b=>{if(ce===null)return;k>0&&(ce=Math.min(ce,b)),k<0&&(ce=Math.min(b-Le/k,ce)),ne!==null?be=ne:be=Math.round(b-ce)*k;const z=be-r*(k>=0?1:-1),ae=k>=0?z<0:z>Le;be=Math.max(z,0),G==="finished"&&ne===null&&(be=Le);let le=be,de=q;if(h){const me=Math.min(be,Le)/Ve;let _e=Math.floor(me),nt=me%1;!nt&&me>=1&&(nt=1),nt===1&&_e--,_e=Math.min(_e,h+1),!!(_e%2)&&(p==="reverse"?(nt=1-nt,d&&(nt-=d/Ve)):p==="mirror"&&(de=K)),le=Jn(0,1,nt)*Ve}const ue=ae?{done:!1,value:a[0]}:de.next(le);N&&(ue.value=N(ue.value));let{done:ve}=ue;!ae&&at!==null&&(ve=k>=0?be>=Le:be<=0);const pe=ne===null&&(G==="finished"||G==="running"&&ve);return v&&v(ue.value),pe&&H(),ue},xe=()=>{I&&I.stop(),I=void 0},ge=()=>{G="idle",xe(),T(),F(),ce=Me=null},H=()=>{G="finished",x&&x(),xe(),T()},X=()=>{if(E)return;I||(I=o(Qe));const b=I.now();m&&m(),ne!==null?ce=b-ne:(!ce||G==="finished")&&(ce=b),G==="finished"&&F(),Me=ce,ne=null,G="running",I.start()};t&&X();const Y={then(b,z){return D.then(b,z)},get time(){return kn(be)},set time(b){b=Rr(b),be=b,ne!==null||!I||k===0?ne=b:ce=I.now()-b/k},get duration(){const b=q.calculatedDuration===null?Em(q):q.calculatedDuration;return kn(b)},get speed(){return k},set speed(b){b===k||!I||(k=b,Y.time=kn(be))},get state(){return G},play:X,pause:()=>{G="paused",ne=be},stop:()=>{E=!0,G!=="idle"&&(G="idle",g&&g(),ge())},cancel:()=>{Me!==null&&Qe(Me),ge()},complete:()=>{G="finished"},sample:b=>(ce=0,Qe(b))};return Y}function Qk(t){let r;return()=>(r===void 0&&(r=t()),r)}const Kk=Qk(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Xk=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ua=10,Zk=2e4,Jk=(t,r)=>r.type==="spring"||t==="backgroundColor"||!Hg(r.ease);function e2(t,r,{onUpdate:o,onComplete:a,...u}){if(!(Kk()&&Xk.has(r)&&!u.repeatDelay&&u.repeatType!=="mirror"&&u.damping!==0&&u.type!=="inertia"))return!1;let d=!1,p,m,g=!1;const x=()=>{m=new Promise(L=>{p=L})};x();let{keyframes:v,duration:w=300,ease:k,times:E}=u;if(Jk(r,u)){const L=La({...u,repeat:0,delay:0});let N={done:!1,value:v[0]};const q=[];let K=0;for(;!N.done&&K<Zk;)N=L.sample(K),q.push(N.value),K+=ua;E=void 0,v=q,w=K-ua,k="linear"}const T=uk(t.owner.current,r,v,{...u,duration:w,ease:k,times:E}),D=()=>{g=!1,T.cancel()},F=()=>{g=!0,Ee.update(D),p(),x()};return T.onfinish=()=>{g||(t.set(ck(v,u)),a&&a(),F())},{then(L,N){return m.then(L,N)},attachTimeline(L){return T.timeline=L,T.onfinish=null,Ue},get time(){return kn(T.currentTime||0)},set time(L){T.currentTime=Rr(L)},get speed(){return T.playbackRate},set speed(L){T.playbackRate=L},get duration(){return kn(w)},play:()=>{d||(T.play(),Sn(D))},pause:()=>T.pause(),stop:()=>{if(d=!0,T.playState==="idle")return;const{currentTime:L}=T;if(L){const N=La({...u,autoplay:!1});t.setWithVelocity(N.sample(L-ua).value,N.sample(L).value,ua)}F()},complete:()=>{g||T.finish()},cancel:F}}function t2({keyframes:t,delay:r,onUpdate:o,onComplete:a}){const u=()=>(o&&o(t[t.length-1]),a&&a(),{time:0,speed:1,duration:0,play:Ue,pause:Ue,stop:Ue,then:h=>(h(),Promise.resolve()),cancel:Ue,complete:Ue});return r?La({keyframes:[0,1],duration:0,delay:r,onComplete:u}):u()}const n2={type:"spring",stiffness:500,damping:25,restSpeed:10},r2=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),i2={type:"keyframes",duration:.8},o2={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},s2=(t,{keyframes:r})=>r.length>2?i2:Mr.has(t)?t.startsWith("scale")?r2(r[1]):n2:o2,Qc=(t,r)=>t==="zIndex"?!1:!!(typeof r=="number"||Array.isArray(r)||typeof r=="string"&&(er.test(r)||r==="0")&&!r.startsWith("url(")),a2=new Set(["brightness","contrast","saturate","opacity"]);function l2(t){const[r,o]=t.slice(0,-1).split("(");if(r==="drop-shadow")return t;const[a]=o.match(Ya)||[];if(!a)return t;const u=o.replace(a,"");let h=a2.has(r)?1:0;return a!==o&&(h*=100),r+"("+h+u+")"}const u2=/([a-z-]*)\(.*?\)/g,Kc={...er,getAnimatableNone:t=>{const r=t.match(u2);return r?r.map(l2).join(" "):t}},c2={...Eg,color:xt,backgroundColor:xt,outlineColor:xt,fill:xt,stroke:xt,borderColor:xt,borderTopColor:xt,borderRightColor:xt,borderBottomColor:xt,borderLeftColor:xt,filter:Kc,WebkitFilter:Kc},Md=t=>c2[t];function my(t,r){let o=Md(t);return o!==Kc&&(o=er),o.getAnimatableNone?o.getAnimatableNone(r):void 0}const gy=t=>/^0[^.\s]+$/.test(t);function d2(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||gy(t)}function f2(t,r,o,a){const u=Qc(r,o);let h;Array.isArray(o)?h=[...o]:h=[null,o];const d=a.from!==void 0?a.from:t.get();let p;const m=[];for(let g=0;g<h.length;g++)h[g]===null&&(h[g]=g===0?d:h[g-1]),d2(h[g])&&m.push(g),typeof h[g]=="string"&&h[g]!=="none"&&h[g]!=="0"&&(p=h[g]);if(u&&m.length&&p)for(let g=0;g<m.length;g++){const x=m[g];h[x]=my(r,p)}return h}function h2({when:t,delay:r,delayChildren:o,staggerChildren:a,staggerDirection:u,repeat:h,repeatType:d,repeatDelay:p,from:m,elapsed:g,...x}){return!!Object.keys(x).length}function Vd(t,r){return t[r]||t.default||t}const p2={skipAnimations:!1},Dd=(t,r,o,a={})=>u=>{const h=Vd(a,t)||{},d=h.delay||a.delay||0;let{elapsed:p=0}=a;p=p-Rr(d);const m=f2(r,t,o,h),g=m[0],x=m[m.length-1],v=Qc(t,g),w=Qc(t,x);let k={keyframes:m,velocity:r.getVelocity(),ease:"easeOut",...h,delay:-p,onUpdate:E=>{r.set(E),h.onUpdate&&h.onUpdate(E)},onComplete:()=>{u(),h.onComplete&&h.onComplete()}};if(h2(h)||(k={...k,...s2(t,k)}),k.duration&&(k.duration=Rr(k.duration)),k.repeatDelay&&(k.repeatDelay=Rr(k.repeatDelay)),!v||!w||lk.current||h.type===!1||p2.skipAnimations)return t2(k);if(!a.isHandoff&&r.owner&&r.owner.current instanceof HTMLElement&&!r.owner.getProps().onUpdate){const E=e2(r,t,k);if(E)return E}return La(k)};function Ra(t){return!!(Ct(t)&&t.add)}const yy=t=>/^\-?\d*\.?\d+$/.test(t);function Fd(t,r){t.indexOf(r)===-1&&t.push(r)}function zd(t,r){const o=t.indexOf(r);o>-1&&t.splice(o,1)}class Nd{constructor(){this.subscriptions=[]}add(r){return Fd(this.subscriptions,r),()=>zd(this.subscriptions,r)}notify(r,o,a){const u=this.subscriptions.length;if(u)if(u===1)this.subscriptions[0](r,o,a);else for(let h=0;h<u;h++){const d=this.subscriptions[h];d&&d(r,o,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const m2=t=>!isNaN(parseFloat(t));class g2{constructor(r,o={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(a,u=!0)=>{this.prev=this.current,this.current=a;const{delta:h,timestamp:d}=ft;this.lastUpdated!==d&&(this.timeDelta=h,this.lastUpdated=d,Ee.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),u&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Ee.postRender(this.velocityCheck),this.velocityCheck=({timestamp:a})=>{a!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=r,this.canTrackVelocity=m2(this.current),this.owner=o.owner}onChange(r){return this.on("change",r)}on(r,o){this.events[r]||(this.events[r]=new Nd);const a=this.events[r].add(o);return r==="change"?()=>{a(),Ee.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,o){this.passiveEffect=r,this.stopPassiveEffect=o}set(r,o=!0){!o||!this.passiveEffect?this.updateAndNotify(r,o):this.passiveEffect(r,this.updateAndNotify)}setWithVelocity(r,o,a){this.set(o),this.prev=r,this.timeDelta=a}jump(r){this.updateAndNotify(r),this.prev=r,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?fy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(r){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=r(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ti(t,r){return new g2(t,r)}const xy=t=>r=>r.test(t),y2={test:t=>t==="auto",parse:t=>t},vy=[Vr,oe,ln,qn,bj,Sj,y2],vo=t=>vy.find(xy(t)),x2=[...vy,xt,er],v2=t=>x2.find(xy(t));function w2(t,r,o){t.hasValue(r)?t.getValue(r).set(o):t.addValue(r,Ti(o))}function j2(t,r){const o=Ka(t,r);let{transitionEnd:a={},transition:u={},...h}=o?t.makeTargetAnimatable(o,!1):{};h={...h,...a};for(const d in h){const p=Nj(h[d]);w2(t,d,p)}}function k2(t,r,o){var a,u;const h=Object.keys(r).filter(p=>!t.hasValue(p)),d=h.length;if(d)for(let p=0;p<d;p++){const m=h[p],g=r[m];let x=null;Array.isArray(g)&&(x=g[0]),x===null&&(x=(u=(a=o[m])!==null&&a!==void 0?a:t.readValue(m))!==null&&u!==void 0?u:r[m]),x!=null&&(typeof x=="string"&&(yy(x)||gy(x))?x=parseFloat(x):!v2(x)&&er.test(g)&&(x=my(m,g)),t.addValue(m,Ti(x,{owner:t})),o[m]===void 0&&(o[m]=x),x!==null&&t.setBaseTarget(m,x))}}function S2(t,r){return r?(r[t]||r.default||r).from:void 0}function b2(t,r,o){const a={};for(const u in t){const h=S2(u,r);if(h!==void 0)a[u]=h;else{const d=o.getValue(u);d&&(a[u]=d.get())}}return a}function C2({protectedKeys:t,needsAnimating:r},o){const a=t.hasOwnProperty(o)&&r[o]!==!0;return r[o]=!1,a}function P2(t,r){const o=t.get();if(Array.isArray(r)){for(let a=0;a<r.length;a++)if(r[a]!==o)return!0}else return o!==r}function wy(t,r,{delay:o=0,transitionOverride:a,type:u}={}){let{transition:h=t.getDefaultTransition(),transitionEnd:d,...p}=t.makeTargetAnimatable(r);const m=t.getValue("willChange");a&&(h=a);const g=[],x=u&&t.animationState&&t.animationState.getState()[u];for(const v in p){const w=t.getValue(v),k=p[v];if(!w||k===void 0||x&&C2(x,v))continue;const E={delay:o,elapsed:0,...Vd(h||{},v)};if(window.HandoffAppearAnimations){const F=t.getProps()[jg];if(F){const I=window.HandoffAppearAnimations(F,v,w,Ee);I!==null&&(E.elapsed=I,E.isHandoff=!0)}}let T=!E.isHandoff&&!P2(w,k);if(E.type==="spring"&&(w.getVelocity()||E.velocity)&&(T=!1),w.animation&&(T=!1),T)continue;w.start(Dd(v,w,k,t.shouldReduceMotion&&Mr.has(v)?{type:!1}:E));const D=w.animation;Ra(m)&&(m.add(v),D.then(()=>m.remove(v))),g.push(D)}return d&&Promise.all(g).then(()=>{d&&j2(t,d)}),g}function Xc(t,r,o={}){const a=Ka(t,r,o.custom);let{transition:u=t.getDefaultTransition()||{}}=a||{};o.transitionOverride&&(u=o.transitionOverride);const h=a?()=>Promise.all(wy(t,a,o)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(m=0)=>{const{delayChildren:g=0,staggerChildren:x,staggerDirection:v}=u;return T2(t,r,g+m,x,v,o)}:()=>Promise.resolve(),{when:p}=u;if(p){const[m,g]=p==="beforeChildren"?[h,d]:[d,h];return m().then(()=>g())}else return Promise.all([h(),d(o.delay)])}function T2(t,r,o=0,a=0,u=1,h){const d=[],p=(t.variantChildren.size-1)*a,m=u===1?(g=0)=>g*a:(g=0)=>p-g*a;return Array.from(t.variantChildren).sort(E2).forEach((g,x)=>{g.notify("AnimationStart",r),d.push(Xc(g,r,{...h,delay:o+m(x)}).then(()=>g.notify("AnimationComplete",r)))}),Promise.all(d)}function E2(t,r){return t.sortNodePosition(r)}function L2(t,r,o={}){t.notify("AnimationStart",r);let a;if(Array.isArray(r)){const u=r.map(h=>Xc(t,h,o));a=Promise.all(u)}else if(typeof r=="string")a=Xc(t,r,o);else{const u=typeof r=="function"?Ka(t,r,o.custom):r;a=Promise.all(wy(t,u,o))}return a.then(()=>t.notify("AnimationComplete",r))}const R2=[...vd].reverse(),A2=vd.length;function I2(t){return r=>Promise.all(r.map(({animation:o,options:a})=>L2(t,o,a)))}function M2(t){let r=I2(t);const o=D2();let a=!0;const u=(m,g)=>{const x=Ka(t,g);if(x){const{transition:v,transitionEnd:w,...k}=x;m={...m,...k,...w}}return m};function h(m){r=m(t)}function d(m,g){const x=t.getProps(),v=t.getVariantContext(!0)||{},w=[],k=new Set;let E={},T=1/0;for(let F=0;F<A2;F++){const I=R2[F],L=o[I],N=x[I]!==void 0?x[I]:v[I],q=No(N),K=I===g?L.isActive:null;K===!1&&(T=F);let G=N===v[I]&&N!==x[I]&&q;if(G&&a&&t.manuallyAnimateOnMount&&(G=!1),L.protectedKeys={...E},!L.isActive&&K===null||!N&&!L.prevProp||qa(N)||typeof N=="boolean")continue;let ce=V2(L.prevProp,N)||I===g&&L.isActive&&!G&&q||F>T&&q,Me=!1;const at=Array.isArray(N)?N:[N];let Ve=at.reduce(u,{});K===!1&&(Ve={});const{prevResolvedValues:Le={}}=L,be={...Le,...Ve},Qe=xe=>{ce=!0,k.has(xe)&&(Me=!0,k.delete(xe)),L.needsAnimating[xe]=!0};for(const xe in be){const ge=Ve[xe],H=Le[xe];if(E.hasOwnProperty(xe))continue;let X=!1;Pa(ge)&&Pa(H)?X=!Ug(ge,H):X=ge!==H,X?ge!==void 0?Qe(xe):k.add(xe):ge!==void 0&&k.has(xe)?Qe(xe):L.protectedKeys[xe]=!0}L.prevProp=N,L.prevResolvedValues=Ve,L.isActive&&(E={...E,...Ve}),a&&t.blockInitialAnimation&&(ce=!1),ce&&(!G||Me)&&w.push(...at.map(xe=>({animation:xe,options:{type:I,...m}})))}if(k.size){const F={};k.forEach(I=>{const L=t.getBaseTarget(I);L!==void 0&&(F[I]=L)}),w.push({animation:F})}let D=!!w.length;return a&&(x.initial===!1||x.initial===x.animate)&&!t.manuallyAnimateOnMount&&(D=!1),a=!1,D?r(w):Promise.resolve()}function p(m,g,x){var v;if(o[m].isActive===g)return Promise.resolve();(v=t.variantChildren)===null||v===void 0||v.forEach(k=>{var E;return(E=k.animationState)===null||E===void 0?void 0:E.setActive(m,g)}),o[m].isActive=g;const w=d(x,m);for(const k in o)o[k].protectedKeys={};return w}return{animateChanges:d,setActive:p,setAnimateFunction:h,getState:()=>o}}function V2(t,r){return typeof r=="string"?r!==t:Array.isArray(r)?!Ug(r,t):!1}function mr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function D2(){return{animate:mr(!0),whileInView:mr(),whileHover:mr(),whileTap:mr(),whileDrag:mr(),whileFocus:mr(),exit:mr()}}class F2 extends tr{constructor(r){super(r),r.animationState||(r.animationState=M2(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();this.unmount(),qa(r)&&(this.unmount=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:o}=this.node.prevProps||{};r!==o&&this.updateAnimationControlsSubscription()}unmount(){}}let z2=0;class N2 extends tr{constructor(){super(...arguments),this.id=z2++}update(){if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:o,custom:a}=this.node.presenceContext,{isPresent:u}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===u)return;const h=this.node.animationState.setActive("exit",!r,{custom:a??this.node.getProps().custom});o&&!r&&h.then(()=>o(this.id))}mount(){const{register:r}=this.node.presenceContext||{};r&&(this.unmount=r(this.id))}unmount(){}}const _2={animation:{Feature:F2},exit:{Feature:N2}},Lm=(t,r)=>Math.abs(t-r);function O2(t,r){const o=Lm(t.x,r.x),a=Lm(t.y,r.y);return Math.sqrt(o**2+a**2)}class jy{constructor(r,o,{transformPagePoint:a,contextWindow:u,dragSnapToOrigin:h=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=cc(this.lastMoveEventInfo,this.history),w=this.startEvent!==null,k=O2(v.offset,{x:0,y:0})>=3;if(!w&&!k)return;const{point:E}=v,{timestamp:T}=ft;this.history.push({...E,timestamp:T});const{onStart:D,onMove:F}=this.handlers;w||(D&&D(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),F&&F(this.lastMoveEvent,v)},this.handlePointerMove=(v,w)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=uc(w,this.transformPagePoint),Ee.update(this.updatePoint,!0)},this.handlePointerUp=(v,w)=>{this.end();const{onEnd:k,onSessionEnd:E,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=cc(v.type==="pointercancel"?this.lastMoveEventInfo:uc(w,this.transformPagePoint),this.history);this.startEvent&&k&&k(v,D),E&&E(v,D)},!Ng(r))return;this.dragSnapToOrigin=h,this.handlers=o,this.transformPagePoint=a,this.contextWindow=u||window;const d=Qa(r),p=uc(d,this.transformPagePoint),{point:m}=p,{timestamp:g}=ft;this.history=[{...m,timestamp:g}];const{onSessionStart:x}=o;x&&x(r,cc(p,this.history)),this.removeListeners=Xn(jn(this.contextWindow,"pointermove",this.handlePointerMove),jn(this.contextWindow,"pointerup",this.handlePointerUp),jn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),Sn(this.updatePoint)}}function uc(t,r){return r?{point:r(t.point)}:t}function Rm(t,r){return{x:t.x-r.x,y:t.y-r.y}}function cc({point:t},r){return{point:t,delta:Rm(t,ky(r)),offset:Rm(t,B2(r)),velocity:$2(r,.1)}}function B2(t){return t[0]}function ky(t){return t[t.length-1]}function $2(t,r){if(t.length<2)return{x:0,y:0};let o=t.length-1,a=null;const u=ky(t);for(;o>=0&&(a=t[o],!(u.timestamp-a.timestamp>Rr(r)));)o--;if(!a)return{x:0,y:0};const h=kn(u.timestamp-a.timestamp);if(h===0)return{x:0,y:0};const d={x:(u.x-a.x)/h,y:(u.y-a.y)/h};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function At(t){return t.max-t.min}function Zc(t,r=0,o=.01){return Math.abs(t-r)<=o}function Am(t,r,o,a=.5){t.origin=a,t.originPoint=Ne(r.min,r.max,t.origin),t.scale=At(o)/At(r),(Zc(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Ne(o.min,o.max,t.origin)-t.originPoint,(Zc(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Io(t,r,o,a){Am(t.x,r.x,o.x,a?a.originX:void 0),Am(t.y,r.y,o.y,a?a.originY:void 0)}function Im(t,r,o){t.min=o.min+r.min,t.max=t.min+At(r)}function U2(t,r,o){Im(t.x,r.x,o.x),Im(t.y,r.y,o.y)}function Mm(t,r,o){t.min=r.min-o.min,t.max=t.min+At(r)}function Mo(t,r,o){Mm(t.x,r.x,o.x),Mm(t.y,r.y,o.y)}function W2(t,{min:r,max:o},a){return r!==void 0&&t<r?t=a?Ne(r,t,a.min):Math.max(t,r):o!==void 0&&t>o&&(t=a?Ne(o,t,a.max):Math.min(t,o)),t}function Vm(t,r,o){return{min:r!==void 0?t.min+r:void 0,max:o!==void 0?t.max+o-(t.max-t.min):void 0}}function H2(t,{top:r,left:o,bottom:a,right:u}){return{x:Vm(t.x,o,u),y:Vm(t.y,r,a)}}function Dm(t,r){let o=r.min-t.min,a=r.max-t.max;return r.max-r.min<t.max-t.min&&([o,a]=[a,o]),{min:o,max:a}}function q2(t,r){return{x:Dm(t.x,r.x),y:Dm(t.y,r.y)}}function G2(t,r){let o=.5;const a=At(t),u=At(r);return u>a?o=Oo(r.min,r.max-a,t.min):a>u&&(o=Oo(t.min,t.max-u,r.min)),Jn(0,1,o)}function Y2(t,r){const o={};return r.min!==void 0&&(o.min=r.min-t.min),r.max!==void 0&&(o.max=r.max-t.min),o}const Jc=.35;function Q2(t=Jc){return t===!1?t=0:t===!0&&(t=Jc),{x:Fm(t,"left","right"),y:Fm(t,"top","bottom")}}function Fm(t,r,o){return{min:zm(t,r),max:zm(t,o)}}function zm(t,r){return typeof t=="number"?t:t[r]||0}const Nm=()=>({translate:0,scale:1,origin:0,originPoint:0}),vi=()=>({x:Nm(),y:Nm()}),_m=()=>({min:0,max:0}),He=()=>({x:_m(),y:_m()});function Ot(t){return[t("x"),t("y")]}function Sy({top:t,left:r,right:o,bottom:a}){return{x:{min:r,max:o},y:{min:t,max:a}}}function K2({x:t,y:r}){return{top:r.min,right:t.max,bottom:r.max,left:t.min}}function X2(t,r){if(!r)return t;const o=r({x:t.left,y:t.top}),a=r({x:t.right,y:t.bottom});return{top:o.y,left:o.x,bottom:a.y,right:a.x}}function dc(t){return t===void 0||t===1}function ed({scale:t,scaleX:r,scaleY:o}){return!dc(t)||!dc(r)||!dc(o)}function br(t){return ed(t)||by(t)||t.z||t.rotate||t.rotateX||t.rotateY}function by(t){return Om(t.x)||Om(t.y)}function Om(t){return t&&t!=="0%"}function Aa(t,r,o){const a=t-o,u=r*a;return o+u}function Bm(t,r,o,a,u){return u!==void 0&&(t=Aa(t,u,a)),Aa(t,o,a)+r}function td(t,r=0,o=1,a,u){t.min=Bm(t.min,r,o,a,u),t.max=Bm(t.max,r,o,a,u)}function Cy(t,{x:r,y:o}){td(t.x,r.translate,r.scale,r.originPoint),td(t.y,o.translate,o.scale,o.originPoint)}function Z2(t,r,o,a=!1){const u=o.length;if(!u)return;r.x=r.y=1;let h,d;for(let p=0;p<u;p++){h=o[p],d=h.projectionDelta;const m=h.instance;m&&m.style&&m.style.display==="contents"||(a&&h.options.layoutScroll&&h.scroll&&h!==h.root&&wi(t,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),d&&(r.x*=d.x.scale,r.y*=d.y.scale,Cy(t,d)),a&&br(h.latestValues)&&wi(t,h.latestValues))}r.x=$m(r.x),r.y=$m(r.y)}function $m(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Gn(t,r){t.min=t.min+r,t.max=t.max+r}function Um(t,r,[o,a,u]){const h=r[u]!==void 0?r[u]:.5,d=Ne(t.min,t.max,h);td(t,r[o],r[a],d,r.scale)}const J2=["x","scaleX","originX"],eS=["y","scaleY","originY"];function wi(t,r){Um(t.x,r,J2),Um(t.y,r,eS)}function Py(t,r){return Sy(X2(t.getBoundingClientRect(),r))}function tS(t,r,o){const a=Py(t,o),{scroll:u}=r;return u&&(Gn(a.x,u.offset.x),Gn(a.y,u.offset.y)),a}const Ty=({current:t})=>t?t.ownerDocument.defaultView:null,nS=new WeakMap;class rS{constructor(r){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=He(),this.visualElement=r}start(r,{snapToCursor:o=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const u=x=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),o&&this.snapToCursor(Qa(x,"page").point)},h=(x,v)=>{const{drag:w,dragPropagation:k,onDragStart:E}=this.getProps();if(w&&!k&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Og(w),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ot(D=>{let F=this.getAxisMotionValue(D).get()||0;if(ln.test(F)){const{projection:I}=this.visualElement;if(I&&I.layout){const L=I.layout.layoutBox[D];L&&(F=At(L)*(parseFloat(F)/100))}}this.originPoint[D]=F}),E&&Ee.update(()=>E(x,v),!1,!0);const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},d=(x,v)=>{const{dragPropagation:w,dragDirectionLock:k,onDirectionLock:E,onDrag:T}=this.getProps();if(!w&&!this.openGlobalLock)return;const{offset:D}=v;if(k&&this.currentDirection===null){this.currentDirection=iS(D),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",v.point,D),this.updateAxis("y",v.point,D),this.visualElement.render(),T&&T(x,v)},p=(x,v)=>this.stop(x,v),m=()=>Ot(x=>{var v;return this.getAnimationState(x)==="paused"&&((v=this.getAxisMotionValue(x).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:g}=this.getProps();this.panSession=new jy(r,{onSessionStart:u,onStart:h,onMove:d,onSessionEnd:p,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:g,contextWindow:Ty(this.visualElement)})}stop(r,o){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:h}=this.getProps();h&&Ee.update(()=>h(r,o))}cancel(){this.isDragging=!1;const{projection:r,animationState:o}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),o&&o.setActive("whileDrag",!1)}updateAxis(r,o,a){const{drag:u}=this.getProps();if(!a||!ca(r,u,this.currentDirection))return;const h=this.getAxisMotionValue(r);let d=this.originPoint[r]+a[r];this.constraints&&this.constraints[r]&&(d=W2(d,this.constraints[r],this.elastic[r])),h.set(d)}resolveConstraints(){var r;const{dragConstraints:o,dragElastic:a}=this.getProps(),u=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(r=this.visualElement.projection)===null||r===void 0?void 0:r.layout,h=this.constraints;o&&yi(o)?this.constraints||(this.constraints=this.resolveRefConstraints()):o&&u?this.constraints=H2(u.layoutBox,o):this.constraints=!1,this.elastic=Q2(a),h!==this.constraints&&u&&this.constraints&&!this.hasMutatedConstraints&&Ot(d=>{this.getAxisMotionValue(d)&&(this.constraints[d]=Y2(u.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:o}=this.getProps();if(!r||!yi(r))return!1;const a=r.current,{projection:u}=this.visualElement;if(!u||!u.layout)return!1;const h=tS(a,u.root,this.visualElement.getTransformPagePoint());let d=q2(u.layout.layoutBox,h);if(o){const p=o(K2(d));this.hasMutatedConstraints=!!p,p&&(d=Sy(p))}return d}startAnimation(r){const{drag:o,dragMomentum:a,dragElastic:u,dragTransition:h,dragSnapToOrigin:d,onDragTransitionEnd:p}=this.getProps(),m=this.constraints||{},g=Ot(x=>{if(!ca(x,o,this.currentDirection))return;let v=m&&m[x]||{};d&&(v={min:0,max:0});const w=u?200:1e6,k=u?40:1e7,E={type:"inertia",velocity:a?r[x]:0,bounceStiffness:w,bounceDamping:k,timeConstant:750,restDelta:1,restSpeed:10,...h,...v};return this.startAxisValueAnimation(x,E)});return Promise.all(g).then(p)}startAxisValueAnimation(r,o){const a=this.getAxisMotionValue(r);return a.start(Dd(r,a,0,o))}stopAnimation(){Ot(r=>this.getAxisMotionValue(r).stop())}pauseAnimation(){Ot(r=>{var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.pause()})}getAnimationState(r){var o;return(o=this.getAxisMotionValue(r).animation)===null||o===void 0?void 0:o.state}getAxisMotionValue(r){const o="_drag"+r.toUpperCase(),a=this.visualElement.getProps(),u=a[o];return u||this.visualElement.getValue(r,(a.initial?a.initial[r]:void 0)||0)}snapToCursor(r){Ot(o=>{const{drag:a}=this.getProps();if(!ca(o,a,this.currentDirection))return;const{projection:u}=this.visualElement,h=this.getAxisMotionValue(o);if(u&&u.layout){const{min:d,max:p}=u.layout.layoutBox[o];h.set(r[o]-Ne(d,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:o}=this.getProps(),{projection:a}=this.visualElement;if(!yi(o)||!a||!this.constraints)return;this.stopAnimation();const u={x:0,y:0};Ot(d=>{const p=this.getAxisMotionValue(d);if(p){const m=p.get();u[d]=G2({min:m,max:m},this.constraints[d])}});const{transformTemplate:h}=this.visualElement.getProps();this.visualElement.current.style.transform=h?h({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Ot(d=>{if(!ca(d,r,null))return;const p=this.getAxisMotionValue(d),{min:m,max:g}=this.constraints[d];p.set(Ne(m,g,u[d]))})}addListeners(){if(!this.visualElement.current)return;nS.set(this.visualElement,this);const r=this.visualElement.current,o=jn(r,"pointerdown",m=>{const{drag:g,dragListener:x=!0}=this.getProps();g&&x&&this.start(m)}),a=()=>{const{dragConstraints:m}=this.getProps();yi(m)&&(this.constraints=this.resolveRefConstraints())},{projection:u}=this.visualElement,h=u.addEventListener("measure",a);u&&!u.layout&&(u.root&&u.root.updateScroll(),u.updateLayout()),a();const d=wn(window,"resize",()=>this.scalePositionWithinConstraints()),p=u.addEventListener("didUpdate",({delta:m,hasLayoutChanged:g})=>{this.isDragging&&g&&(Ot(x=>{const v=this.getAxisMotionValue(x);v&&(this.originPoint[x]+=m[x].translate,v.set(v.get()+m[x].translate))}),this.visualElement.render())});return()=>{d(),o(),h(),p&&p()}}getProps(){const r=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:a=!1,dragPropagation:u=!1,dragConstraints:h=!1,dragElastic:d=Jc,dragMomentum:p=!0}=r;return{...r,drag:o,dragDirectionLock:a,dragPropagation:u,dragConstraints:h,dragElastic:d,dragMomentum:p}}}function ca(t,r,o){return(r===!0||r===t)&&(o===null||o===t)}function iS(t,r=10){let o=null;return Math.abs(t.y)>r?o="y":Math.abs(t.x)>r&&(o="x"),o}class oS extends tr{constructor(r){super(r),this.removeGroupControls=Ue,this.removeListeners=Ue,this.controls=new rS(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ue}unmount(){this.removeGroupControls(),this.removeListeners()}}const Wm=t=>(r,o)=>{t&&Ee.update(()=>t(r,o))};class sS extends tr{constructor(){super(...arguments),this.removePointerDownListener=Ue}onPointerDown(r){this.session=new jy(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ty(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:o,onPan:a,onPanEnd:u}=this.node.getProps();return{onSessionStart:Wm(r),onStart:Wm(o),onMove:a,onEnd:(h,d)=>{delete this.session,u&&Ee.update(()=>u(h,d))}}}mount(){this.removePointerDownListener=jn(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function aS(){const t=R.useContext(Wa);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:o,register:a}=t,u=R.useId();return R.useEffect(()=>a(u),[]),!r&&o?[!1,()=>o&&o(u)]:[!0]}const ya={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Hm(t,r){return r.max===r.min?0:t/(r.max-r.min)*100}const wo={correct:(t,r)=>{if(!r.target)return t;if(typeof t=="string")if(oe.test(t))t=parseFloat(t);else return t;const o=Hm(t,r.target.x),a=Hm(t,r.target.y);return`${o}% ${a}%`}},lS={correct:(t,{treeScale:r,projectionDelta:o})=>{const a=t,u=er.parse(t);if(u.length>5)return a;const h=er.createTransformer(t),d=typeof u[0]!="number"?1:0,p=o.x.scale*r.x,m=o.y.scale*r.y;u[0+d]/=p,u[1+d]/=m;const g=Ne(p,m,.5);return typeof u[2+d]=="number"&&(u[2+d]/=g),typeof u[3+d]=="number"&&(u[3+d]/=g),h(u)}};class uS extends Ge.Component{componentDidMount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:a,layoutId:u}=this.props,{projection:h}=r;gj(cS),h&&(o.group&&o.group.add(h),a&&a.register&&u&&a.register(h),h.root.didUpdate(),h.addEventListener("animationComplete",()=>{this.safeToRemove()}),h.setOptions({...h.options,onExitComplete:()=>this.safeToRemove()})),ya.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:o,visualElement:a,drag:u,isPresent:h}=this.props,d=a.projection;return d&&(d.isPresent=h,u||r.layoutDependency!==o||o===void 0?d.willUpdate():this.safeToRemove(),r.isPresent!==h&&(h?d.promote():d.relegate()||Ee.postRender(()=>{const p=d.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:r}=this.props.visualElement;r&&(r.root.didUpdate(),queueMicrotask(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:o,switchLayoutGroup:a}=this.props,{projection:u}=r;u&&(u.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(u),a&&a.deregister&&a.deregister(u))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function Ey(t){const[r,o]=aS(),a=R.useContext(jd);return Ge.createElement(uS,{...t,layoutGroup:a,switchLayoutGroup:R.useContext(Sg),isPresent:r,safeToRemove:o})}const cS={borderRadius:{...wo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wo,borderTopRightRadius:wo,borderBottomLeftRadius:wo,borderBottomRightRadius:wo,boxShadow:lS},Ly=["TopLeft","TopRight","BottomLeft","BottomRight"],dS=Ly.length,qm=t=>typeof t=="string"?parseFloat(t):t,Gm=t=>typeof t=="number"||oe.test(t);function fS(t,r,o,a,u,h){u?(t.opacity=Ne(0,o.opacity!==void 0?o.opacity:1,hS(a)),t.opacityExit=Ne(r.opacity!==void 0?r.opacity:1,0,pS(a))):h&&(t.opacity=Ne(r.opacity!==void 0?r.opacity:1,o.opacity!==void 0?o.opacity:1,a));for(let d=0;d<dS;d++){const p=`border${Ly[d]}Radius`;let m=Ym(r,p),g=Ym(o,p);if(m===void 0&&g===void 0)continue;m||(m=0),g||(g=0),m===0||g===0||Gm(m)===Gm(g)?(t[p]=Math.max(Ne(qm(m),qm(g),a),0),(ln.test(g)||ln.test(m))&&(t[p]+="%")):t[p]=g}(r.rotate||o.rotate)&&(t.rotate=Ne(r.rotate||0,o.rotate||0,a))}function Ym(t,r){return t[r]!==void 0?t[r]:t.borderRadius}const hS=Ry(0,.5,Zg),pS=Ry(.5,.95,Ue);function Ry(t,r,o){return a=>a<t?0:a>r?1:o(Oo(t,r,a))}function Qm(t,r){t.min=r.min,t.max=r.max}function _t(t,r){Qm(t.x,r.x),Qm(t.y,r.y)}function Km(t,r,o,a,u){return t-=r,t=Aa(t,1/o,a),u!==void 0&&(t=Aa(t,1/u,a)),t}function mS(t,r=0,o=1,a=.5,u,h=t,d=t){if(ln.test(r)&&(r=parseFloat(r),r=Ne(d.min,d.max,r/100)-d.min),typeof r!="number")return;let p=Ne(h.min,h.max,a);t===h&&(p-=r),t.min=Km(t.min,r,o,p,u),t.max=Km(t.max,r,o,p,u)}function Xm(t,r,[o,a,u],h,d){mS(t,r[o],r[a],r[u],r.scale,h,d)}const gS=["x","scaleX","originX"],yS=["y","scaleY","originY"];function Zm(t,r,o,a){Xm(t.x,r,gS,o?o.x:void 0,a?a.x:void 0),Xm(t.y,r,yS,o?o.y:void 0,a?a.y:void 0)}function Jm(t){return t.translate===0&&t.scale===1}function Ay(t){return Jm(t.x)&&Jm(t.y)}function xS(t,r){return t.x.min===r.x.min&&t.x.max===r.x.max&&t.y.min===r.y.min&&t.y.max===r.y.max}function Iy(t,r){return Math.round(t.x.min)===Math.round(r.x.min)&&Math.round(t.x.max)===Math.round(r.x.max)&&Math.round(t.y.min)===Math.round(r.y.min)&&Math.round(t.y.max)===Math.round(r.y.max)}function e0(t){return At(t.x)/At(t.y)}class vS{constructor(){this.members=[]}add(r){Fd(this.members,r),r.scheduleRender()}remove(r){if(zd(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(r){const o=this.members.findIndex(u=>r===u);if(o===0)return!1;let a;for(let u=o;u>=0;u--){const h=this.members[u];if(h.isPresent!==!1){a=h;break}}return a?(this.promote(a),!0):!1}promote(r,o){const a=this.lead;if(r!==a&&(this.prevLead=a,this.lead=r,r.show(),a)){a.instance&&a.scheduleRender(),r.scheduleRender(),r.resumeFrom=a,o&&(r.resumeFrom.preserveOpacity=!0),a.snapshot&&(r.snapshot=a.snapshot,r.snapshot.latestValues=a.animationValues||a.latestValues),r.root&&r.root.isUpdating&&(r.isLayoutDirty=!0);const{crossfade:u}=r.options;u===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(r=>{const{options:o,resumingFrom:a}=r;o.onExitComplete&&o.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(r=>{r.instance&&r.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function t0(t,r,o){let a="";const u=t.x.translate/r.x,h=t.y.translate/r.y;if((u||h)&&(a=`translate3d(${u}px, ${h}px, 0) `),(r.x!==1||r.y!==1)&&(a+=`scale(${1/r.x}, ${1/r.y}) `),o){const{rotate:m,rotateX:g,rotateY:x}=o;m&&(a+=`rotate(${m}deg) `),g&&(a+=`rotateX(${g}deg) `),x&&(a+=`rotateY(${x}deg) `)}const d=t.x.scale*r.x,p=t.y.scale*r.y;return(d!==1||p!==1)&&(a+=`scale(${d}, ${p})`),a||"none"}const wS=(t,r)=>t.depth-r.depth;class jS{constructor(){this.children=[],this.isDirty=!1}add(r){Fd(this.children,r),this.isDirty=!0}remove(r){zd(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(wS),this.isDirty=!1,this.children.forEach(r)}}function kS(t,r){const o=performance.now(),a=({timestamp:u})=>{const h=u-o;h>=r&&(Sn(a),t(h-r))};return Ee.read(a,!0),()=>Sn(a)}function SS(t){window.MotionDebug&&window.MotionDebug.record(t)}function bS(t){return t instanceof SVGElement&&t.tagName!=="svg"}function CS(t,r,o){const a=Ct(t)?t:Ti(t);return a.start(Dd("",a,r,o)),a.animation}const n0=["","X","Y","Z"],PS={visibility:"hidden"},r0=1e3;let TS=0;const Cr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function My({attachResizeListener:t,defaultParent:r,measureScroll:o,checkIsScrollRoot:a,resetTransform:u}){return class{constructor(d={},p=r==null?void 0:r()){this.id=TS++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Cr.totalNodes=Cr.resolvedTargetDeltas=Cr.recalculatedProjection=0,this.nodes.forEach(RS),this.nodes.forEach(DS),this.nodes.forEach(FS),this.nodes.forEach(AS),SS(Cr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new jS)}addEventListener(d,p){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Nd),this.eventHandlers.get(d).add(p)}notifyListeners(d,...p){const m=this.eventHandlers.get(d);m&&m.notify(...p)}hasListeners(d){return this.eventHandlers.has(d)}mount(d,p=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=bS(d),this.instance=d;const{layoutId:m,layout:g,visualElement:x}=this.options;if(x&&!x.current&&x.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),p&&(g||m)&&(this.isLayoutDirty=!0),t){let v;const w=()=>this.root.updateBlockedByResize=!1;t(d,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=kS(w,250),ya.hasAnimatedSinceResize&&(ya.hasAnimatedSinceResize=!1,this.nodes.forEach(o0))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&x&&(m||g)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:w,hasRelativeTargetChanged:k,layout:E})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=this.options.transition||x.getDefaultTransition()||BS,{onLayoutAnimationStart:D,onLayoutAnimationComplete:F}=x.getProps(),I=!this.targetLayout||!Iy(this.targetLayout,E)||k,L=!w&&k;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||L||w&&(I||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,L);const N={...Vd(T,"layout"),onPlay:D,onComplete:F};(x.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N)}else w||o0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=E})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Sn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(zS),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let x=0;x<this.path.length;x++){const v=this.path[x];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:p,layout:m}=this.options;if(p===void 0&&!m)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(i0);return}this.isUpdating||this.nodes.forEach(MS),this.isUpdating=!1,this.nodes.forEach(VS),this.nodes.forEach(ES),this.nodes.forEach(LS),this.clearAllSnapshots();const p=performance.now();ft.delta=Jn(0,1e3/60,p-ft.timestamp),ft.timestamp=p,ft.isProcessing=!0,nc.update.process(ft),nc.preRender.process(ft),nc.render.process(ft),ft.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(IS),this.sharedNodes.forEach(NS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ee.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ee.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutCorrected=He(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let p=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(p=!1),p&&(this.scroll={animationId:this.root.animationId,phase:d,isRoot:a(this.instance),offset:o(this.instance)})}resetTransform(){if(!u)return;const d=this.isLayoutDirty||this.shouldResetTransform,p=this.projectionDelta&&!Ay(this.projectionDelta),m=this.getTransformTemplate(),g=m?m(this.latestValues,""):void 0,x=g!==this.prevTransformTemplateValue;d&&(p||br(this.latestValues)||x)&&(u(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const p=this.measurePageBox();let m=this.removeElementScroll(p);return d&&(m=this.removeTransform(m)),$S(m),{animationId:this.root.animationId,measuredBox:p,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:d}=this.options;if(!d)return He();const p=d.measureViewportBox(),{scroll:m}=this.root;return m&&(Gn(p.x,m.offset.x),Gn(p.y,m.offset.y)),p}removeElementScroll(d){const p=He();_t(p,d);for(let m=0;m<this.path.length;m++){const g=this.path[m],{scroll:x,options:v}=g;if(g!==this.root&&x&&v.layoutScroll){if(x.isRoot){_t(p,d);const{scroll:w}=this.root;w&&(Gn(p.x,-w.offset.x),Gn(p.y,-w.offset.y))}Gn(p.x,x.offset.x),Gn(p.y,x.offset.y)}}return p}applyTransform(d,p=!1){const m=He();_t(m,d);for(let g=0;g<this.path.length;g++){const x=this.path[g];!p&&x.options.layoutScroll&&x.scroll&&x!==x.root&&wi(m,{x:-x.scroll.offset.x,y:-x.scroll.offset.y}),br(x.latestValues)&&wi(m,x.latestValues)}return br(this.latestValues)&&wi(m,this.latestValues),m}removeTransform(d){const p=He();_t(p,d);for(let m=0;m<this.path.length;m++){const g=this.path[m];if(!g.instance||!br(g.latestValues))continue;ed(g.latestValues)&&g.updateSnapshot();const x=He(),v=g.measurePageBox();_t(x,v),Zm(p,g.latestValues,g.snapshot?g.snapshot.layoutBox:void 0,x)}return br(this.latestValues)&&Zm(p,this.latestValues),p}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ft.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var p;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==m;if(!(d||g&&this.isSharedProjectionDirty||this.isProjectionDirty||!((p=this.parent)===null||p===void 0)&&p.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:v,layoutId:w}=this.options;if(!(!this.layout||!(v||w))){if(this.resolvedRelativeTargetAt=ft.timestamp,!this.targetDelta&&!this.relativeTarget){const k=this.getClosestProjectingParent();k&&k.layout&&this.animationProgress!==1?(this.relativeParent=k,this.forceRelativeParentToResolveTarget(),this.relativeTarget=He(),this.relativeTargetOrigin=He(),Mo(this.relativeTargetOrigin,this.layout.layoutBox,k.layout.layoutBox),_t(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=He(),this.targetWithTransforms=He()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),U2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):_t(this.target,this.layout.layoutBox),Cy(this.target,this.targetDelta)):_t(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const k=this.getClosestProjectingParent();k&&!!k.resumingFrom==!!this.resumingFrom&&!k.options.layoutScroll&&k.target&&this.animationProgress!==1?(this.relativeParent=k,this.forceRelativeParentToResolveTarget(),this.relativeTarget=He(),this.relativeTargetOrigin=He(),Mo(this.relativeTargetOrigin,this.target,k.target),_t(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Cr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ed(this.parent.latestValues)||by(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var d;const p=this.getLead(),m=!!this.resumingFrom||this!==p;let g=!0;if((this.isProjectionDirty||!((d=this.parent)===null||d===void 0)&&d.isProjectionDirty)&&(g=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===ft.timestamp&&(g=!1),g)return;const{layout:x,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(x||v))return;_t(this.layoutCorrected,this.layout.layoutBox);const w=this.treeScale.x,k=this.treeScale.y;Z2(this.layoutCorrected,this.treeScale,this.path,m),p.layout&&!p.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(p.target=p.layout.layoutBox);const{target:E}=p;if(!E){this.projectionTransform&&(this.projectionDelta=vi(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=vi(),this.projectionDeltaWithTransform=vi());const T=this.projectionTransform;Io(this.projectionDelta,this.layoutCorrected,E,this.latestValues),this.projectionTransform=t0(this.projectionDelta,this.treeScale),(this.projectionTransform!==T||this.treeScale.x!==w||this.treeScale.y!==k)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",E)),Cr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(d,p=!1){const m=this.snapshot,g=m?m.latestValues:{},x={...this.latestValues},v=vi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const w=He(),k=m?m.source:void 0,E=this.layout?this.layout.source:void 0,T=k!==E,D=this.getStack(),F=!D||D.members.length<=1,I=!!(T&&!F&&this.options.crossfade===!0&&!this.path.some(OS));this.animationProgress=0;let L;this.mixTargetDelta=N=>{const q=N/1e3;s0(v.x,d.x,q),s0(v.y,d.y,q),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Mo(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox),_S(this.relativeTarget,this.relativeTargetOrigin,w,q),L&&xS(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=He()),_t(L,this.relativeTarget)),T&&(this.animationValues=x,fS(x,g,this.latestValues,q,I,F)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=q},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Sn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ee.update(()=>{ya.hasAnimatedSinceResize=!0,this.currentAnimation=CS(0,r0,{...d,onUpdate:p=>{this.mixTargetDelta(p),d.onUpdate&&d.onUpdate(p)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(r0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:p,target:m,layout:g,latestValues:x}=d;if(!(!p||!m||!g)){if(this!==d&&this.layout&&g&&Vy(this.options.animationType,this.layout.layoutBox,g.layoutBox)){m=this.target||He();const v=At(this.layout.layoutBox.x);m.x.min=d.target.x.min,m.x.max=m.x.min+v;const w=At(this.layout.layoutBox.y);m.y.min=d.target.y.min,m.y.max=m.y.min+w}_t(p,m),wi(p,x),Io(this.projectionDeltaWithTransform,this.layoutCorrected,p,x)}}registerSharedNode(d,p){this.sharedNodes.has(d)||this.sharedNodes.set(d,new vS),this.sharedNodes.get(d).add(p);const g=p.options.initialPromotionConfig;p.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(p):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var d;const{layoutId:p}=this.options;return p?((d=this.getStack())===null||d===void 0?void 0:d.lead)||this:this}getPrevLead(){var d;const{layoutId:p}=this.options;return p?(d=this.getStack())===null||d===void 0?void 0:d.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:p,preserveFollowOpacity:m}={}){const g=this.getStack();g&&g.promote(this,m),d&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetRotation(){const{visualElement:d}=this.options;if(!d)return;let p=!1;const{latestValues:m}=d;if((m.rotate||m.rotateX||m.rotateY||m.rotateZ)&&(p=!0),!p)return;const g={};for(let x=0;x<n0.length;x++){const v="rotate"+n0[x];m[v]&&(g[v]=m[v],d.setStaticValue(v,0))}d.render();for(const x in g)d.setStaticValue(x,g[x]);d.scheduleRender()}getProjectionStyles(d){var p,m;if(!this.instance||this.isSVG)return;if(!this.isVisible)return PS;const g={visibility:""},x=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,g.opacity="",g.pointerEvents=ga(d==null?void 0:d.pointerEvents)||"",g.transform=x?x(this.latestValues,""):"none",g;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const T={};return this.options.layoutId&&(T.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,T.pointerEvents=ga(d==null?void 0:d.pointerEvents)||""),this.hasProjected&&!br(this.latestValues)&&(T.transform=x?x({},""):"none",this.hasProjected=!1),T}const w=v.animationValues||v.latestValues;this.applyTransformsToTarget(),g.transform=t0(this.projectionDeltaWithTransform,this.treeScale,w),x&&(g.transform=x(w,g.transform));const{x:k,y:E}=this.projectionDelta;g.transformOrigin=`${k.origin*100}% ${E.origin*100}% 0`,v.animationValues?g.opacity=v===this?(m=(p=w.opacity)!==null&&p!==void 0?p:this.latestValues.opacity)!==null&&m!==void 0?m:1:this.preserveOpacity?this.latestValues.opacity:w.opacityExit:g.opacity=v===this?w.opacity!==void 0?w.opacity:"":w.opacityExit!==void 0?w.opacityExit:0;for(const T in ba){if(w[T]===void 0)continue;const{correct:D,applyTo:F}=ba[T],I=g.transform==="none"?w[T]:D(w[T],v);if(F){const L=F.length;for(let N=0;N<L;N++)g[F[N]]=I}else g[T]=I}return this.options.layoutId&&(g.pointerEvents=v===this?ga(d==null?void 0:d.pointerEvents)||"":"none"),g}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var p;return(p=d.currentAnimation)===null||p===void 0?void 0:p.stop()}),this.root.nodes.forEach(i0),this.root.sharedNodes.clear()}}}function ES(t){t.updateLayout()}function LS(t){var r;const o=((r=t.resumeFrom)===null||r===void 0?void 0:r.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&o&&t.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:u}=t.layout,{animationType:h}=t.options,d=o.source!==t.layout.source;h==="size"?Ot(v=>{const w=d?o.measuredBox[v]:o.layoutBox[v],k=At(w);w.min=a[v].min,w.max=w.min+k}):Vy(h,o.layoutBox,a)&&Ot(v=>{const w=d?o.measuredBox[v]:o.layoutBox[v],k=At(a[v]);w.max=w.min+k,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[v].max=t.relativeTarget[v].min+k)});const p=vi();Io(p,a,o.layoutBox);const m=vi();d?Io(m,t.applyTransform(u,!0),o.measuredBox):Io(m,a,o.layoutBox);const g=!Ay(p);let x=!1;if(!t.resumeFrom){const v=t.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:w,layout:k}=v;if(w&&k){const E=He();Mo(E,o.layoutBox,w.layoutBox);const T=He();Mo(T,a,k.layoutBox),Iy(E,T)||(x=!0),v.options.layoutRoot&&(t.relativeTarget=T,t.relativeTargetOrigin=E,t.relativeParent=v)}}}t.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:m,layoutDelta:p,hasLayoutChanged:g,hasRelativeTargetChanged:x})}else if(t.isLead()){const{onExitComplete:a}=t.options;a&&a()}t.options.transition=void 0}function RS(t){Cr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function AS(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function IS(t){t.clearSnapshot()}function i0(t){t.clearMeasurements()}function MS(t){t.isLayoutDirty=!1}function VS(t){const{visualElement:r}=t.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),t.resetTransform()}function o0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function DS(t){t.resolveTargetDelta()}function FS(t){t.calcProjection()}function zS(t){t.resetRotation()}function NS(t){t.removeLeadSnapshot()}function s0(t,r,o){t.translate=Ne(r.translate,0,o),t.scale=Ne(r.scale,1,o),t.origin=r.origin,t.originPoint=r.originPoint}function a0(t,r,o,a){t.min=Ne(r.min,o.min,a),t.max=Ne(r.max,o.max,a)}function _S(t,r,o,a){a0(t.x,r.x,o.x,a),a0(t.y,r.y,o.y,a)}function OS(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const BS={duration:.45,ease:[.4,0,.1,1]},l0=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),u0=l0("applewebkit/")&&!l0("chrome/")?Math.round:Ue;function c0(t){t.min=u0(t.min),t.max=u0(t.max)}function $S(t){c0(t.x),c0(t.y)}function Vy(t,r,o){return t==="position"||t==="preserve-aspect"&&!Zc(e0(r),e0(o),.2)}const US=My({attachResizeListener:(t,r)=>wn(t,"resize",r),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),fc={current:void 0},Dy=My({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!fc.current){const t=new US({});t.mount(window),t.setOptions({layoutScroll:!0}),fc.current=t}return fc.current},resetTransform:(t,r)=>{t.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),WS={pan:{Feature:sS},drag:{Feature:oS,ProjectionNode:Dy,MeasureLayout:Ey}},HS=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function qS(t){const r=HS.exec(t);if(!r)return[,];const[,o,a]=r;return[o,a]}function nd(t,r,o=1){const[a,u]=qS(t);if(!a)return;const h=window.getComputedStyle(r).getPropertyValue(a);if(h){const d=h.trim();return yy(d)?parseFloat(d):d}else return Hc(u)?nd(u,r,o+1):u}function GS(t,{...r},o){const a=t.current;if(!(a instanceof Element))return{target:r,transitionEnd:o};o&&(o={...o}),t.values.forEach(u=>{const h=u.get();if(!Hc(h))return;const d=nd(h,a);d&&u.set(d)});for(const u in r){const h=r[u];if(!Hc(h))continue;const d=nd(h,a);d&&(r[u]=d,o||(o={}),o[u]===void 0&&(o[u]=h))}return{target:r,transitionEnd:o}}const YS=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Fy=t=>YS.has(t),QS=t=>Object.keys(t).some(Fy),d0=t=>t===Vr||t===oe,f0=(t,r)=>parseFloat(t.split(", ")[r]),h0=(t,r)=>(o,{transform:a})=>{if(a==="none"||!a)return 0;const u=a.match(/^matrix3d\((.+)\)$/);if(u)return f0(u[1],r);{const h=a.match(/^matrix\((.+)\)$/);return h?f0(h[1],t):0}},KS=new Set(["x","y","z"]),XS=Ho.filter(t=>!KS.has(t));function ZS(t){const r=[];return XS.forEach(o=>{const a=t.getValue(o);a!==void 0&&(r.push([o,a.get()]),a.set(o.startsWith("scale")?1:0))}),r.length&&t.render(),r}const Ei={width:({x:t},{paddingLeft:r="0",paddingRight:o="0"})=>t.max-t.min-parseFloat(r)-parseFloat(o),height:({y:t},{paddingTop:r="0",paddingBottom:o="0"})=>t.max-t.min-parseFloat(r)-parseFloat(o),top:(t,{top:r})=>parseFloat(r),left:(t,{left:r})=>parseFloat(r),bottom:({y:t},{top:r})=>parseFloat(r)+(t.max-t.min),right:({x:t},{left:r})=>parseFloat(r)+(t.max-t.min),x:h0(4,13),y:h0(5,14)};Ei.translateX=Ei.x;Ei.translateY=Ei.y;const JS=(t,r,o)=>{const a=r.measureViewportBox(),u=r.current,h=getComputedStyle(u),{display:d}=h,p={};d==="none"&&r.setStaticValue("display",t.display||"block"),o.forEach(g=>{p[g]=Ei[g](a,h)}),r.render();const m=r.measureViewportBox();return o.forEach(g=>{const x=r.getValue(g);x&&x.jump(p[g]),t[g]=Ei[g](m,h)}),t},eb=(t,r,o={},a={})=>{r={...r},a={...a};const u=Object.keys(r).filter(Fy);let h=[],d=!1;const p=[];if(u.forEach(m=>{const g=t.getValue(m);if(!t.hasValue(m))return;let x=o[m],v=vo(x);const w=r[m];let k;if(Pa(w)){const E=w.length,T=w[0]===null?1:0;x=w[T],v=vo(x);for(let D=T;D<E&&w[D]!==null;D++)k?Ld(vo(w[D])===k):k=vo(w[D])}else k=vo(w);if(v!==k)if(d0(v)&&d0(k)){const E=g.get();typeof E=="string"&&g.set(parseFloat(E)),typeof w=="string"?r[m]=parseFloat(w):Array.isArray(w)&&k===oe&&(r[m]=w.map(parseFloat))}else v!=null&&v.transform&&(k!=null&&k.transform)&&(x===0||w===0)?x===0?g.set(k.transform(x)):r[m]=v.transform(w):(d||(h=ZS(t),d=!0),p.push(m),a[m]=a[m]!==void 0?a[m]:r[m],g.jump(w))}),p.length){const m=p.indexOf("height")>=0?window.pageYOffset:null,g=JS(r,t,p);return h.length&&h.forEach(([x,v])=>{t.getValue(x).set(v)}),t.render(),Ha&&m!==null&&window.scrollTo({top:m}),{target:g,transitionEnd:a}}else return{target:r,transitionEnd:a}};function tb(t,r,o,a){return QS(r)?eb(t,r,o,a):{target:r,transitionEnd:a}}const nb=(t,r,o,a)=>{const u=GS(t,r,a);return r=u.target,a=u.transitionEnd,tb(t,r,o,a)},rd={current:null},zy={current:!1};function rb(){if(zy.current=!0,!!Ha)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),r=()=>rd.current=t.matches;t.addListener(r),r()}else rd.current=!1}function ib(t,r,o){const{willChange:a}=r;for(const u in r){const h=r[u],d=o[u];if(Ct(h))t.addValue(u,h),Ra(a)&&a.add(u);else if(Ct(d))t.addValue(u,Ti(h,{owner:t})),Ra(a)&&a.remove(u);else if(d!==h)if(t.hasValue(u)){const p=t.getValue(u);!p.hasAnimated&&p.set(h)}else{const p=t.getStaticValue(u);t.addValue(u,Ti(p!==void 0?p:h,{owner:t}))}}for(const u in o)r[u]===void 0&&t.removeValue(u);return r}const p0=new WeakMap,Ny=Object.keys(_o),ob=Ny.length,m0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],sb=wd.length;class ab{constructor({parent:r,props:o,presenceContext:a,reducedMotionConfig:u,visualState:h},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Ee.render(this.render,!1,!0);const{latestValues:p,renderState:m}=h;this.latestValues=p,this.baseTarget={...p},this.initialValues=o.initial?{...p}:{},this.renderState=m,this.parent=r,this.props=o,this.presenceContext=a,this.depth=r?r.depth+1:0,this.reducedMotionConfig=u,this.options=d,this.isControllingVariants=Ga(o),this.isVariantNode=kg(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:g,...x}=this.scrapeMotionValuesFromProps(o,{});for(const v in x){const w=x[v];p[v]!==void 0&&Ct(w)&&(w.set(p[v],!1),Ra(g)&&g.add(v))}}scrapeMotionValuesFromProps(r,o){return{}}mount(r){this.current=r,p0.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),zy.current||rb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:rd.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){p0.delete(this.current),this.projection&&this.projection.unmount(),Sn(this.notifyUpdate),Sn(this.render),this.valueSubscriptions.forEach(r=>r()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const r in this.events)this.events[r].clear();for(const r in this.features)this.features[r].unmount();this.current=null}bindToMotionValue(r,o){const a=Mr.has(r),u=o.on("change",d=>{this.latestValues[r]=d,this.props.onUpdate&&Ee.update(this.notifyUpdate,!1,!0),a&&this.projection&&(this.projection.isTransformDirty=!0)}),h=o.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(r,()=>{u(),h()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}loadFeatures({children:r,...o},a,u,h){let d,p;for(let m=0;m<ob;m++){const g=Ny[m],{isEnabled:x,Feature:v,ProjectionNode:w,MeasureLayout:k}=_o[g];w&&(d=w),x(o)&&(!this.features[g]&&v&&(this.features[g]=new v(this)),k&&(p=k))}if((this.type==="html"||this.type==="svg")&&!this.projection&&d){this.projection=new d(this.latestValues,this.parent&&this.parent.projection);const{layoutId:m,layout:g,drag:x,dragConstraints:v,layoutScroll:w,layoutRoot:k}=o;this.projection.setOptions({layoutId:m,layout:g,alwaysMeasureLayout:!!x||v&&yi(v),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof g=="string"?g:"both",initialPromotionConfig:h,layoutScroll:w,layoutRoot:k})}return p}updateFeatures(){for(const r in this.features){const o=this.features[r];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):He()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,o){this.latestValues[r]=o}makeTargetAnimatable(r,o=!0){return this.makeTargetAnimatableFromInstance(r,this.props,o)}update(r,o){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let a=0;a<m0.length;a++){const u=m0[a];this.propEventSubscriptions[u]&&(this.propEventSubscriptions[u](),delete this.propEventSubscriptions[u]);const h=r["on"+u];h&&(this.propEventSubscriptions[u]=this.on(u,h))}this.prevMotionValues=ib(this,this.scrapeMotionValuesFromProps(r,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(r=!1){if(r)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const a=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(a.initial=this.props.initial),a}const o={};for(let a=0;a<sb;a++){const u=wd[a],h=this.props[u];(No(h)||h===!1)&&(o[u]=h)}return o}addVariantChild(r){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(r),()=>o.variantChildren.delete(r)}addValue(r,o){o!==this.values.get(r)&&(this.removeValue(r),this.bindToMotionValue(r,o)),this.values.set(r,o),this.latestValues[r]=o.get()}removeValue(r){this.values.delete(r);const o=this.valueSubscriptions.get(r);o&&(o(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,o){if(this.props.values&&this.props.values[r])return this.props.values[r];let a=this.values.get(r);return a===void 0&&o!==void 0&&(a=Ti(o,{owner:this}),this.addValue(r,a)),a}readValue(r){var o;return this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:(o=this.getBaseTargetFromProps(this.props,r))!==null&&o!==void 0?o:this.readValueFromInstance(this.current,r,this.options)}setBaseTarget(r,o){this.baseTarget[r]=o}getBaseTarget(r){var o;const{initial:a}=this.props,u=typeof a=="string"||typeof a=="object"?(o=Ed(this.props,a))===null||o===void 0?void 0:o[r]:void 0;if(a&&u!==void 0)return u;const h=this.getBaseTargetFromProps(this.props,r);return h!==void 0&&!Ct(h)?h:this.initialValues[r]!==void 0&&u===void 0?void 0:this.baseTarget[r]}on(r,o){return this.events[r]||(this.events[r]=new Nd),this.events[r].add(o)}notify(r,...o){this.events[r]&&this.events[r].notify(...o)}}class _y extends ab{sortInstanceNodePosition(r,o){return r.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(r,o){return r.style?r.style[o]:void 0}removeValueFromRenderState(r,{vars:o,style:a}){delete o[r],delete a[r]}makeTargetAnimatableFromInstance({transition:r,transitionEnd:o,...a},{transformValues:u},h){let d=b2(a,r||{},this);if(u&&(o&&(o=u(o)),a&&(a=u(a)),d&&(d=u(d))),h){k2(this,a,d);const p=nb(this,a,d,o);o=p.transitionEnd,a=p.target}return{transition:r,transitionEnd:o,...a}}}function lb(t){return window.getComputedStyle(t)}class ub extends _y{constructor(){super(...arguments),this.type="html"}readValueFromInstance(r,o){if(Mr.has(o)){const a=Md(o);return a&&a.default||0}else{const a=lb(r),u=(Pg(o)?a.getPropertyValue(o):a[o])||0;return typeof u=="string"?u.trim():u}}measureInstanceViewportBox(r,{transformPagePoint:o}){return Py(r,o)}build(r,o,a,u){Sd(r,o,a,u.transformTemplate)}scrapeMotionValuesFromProps(r,o){return Td(r,o)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;Ct(r)&&(this.childSubscription=r.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}renderInstance(r,o,a,u){Ig(r,o,a,u)}}class cb extends _y{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(r,o){return r[o]}readValueFromInstance(r,o){if(Mr.has(o)){const a=Md(o);return a&&a.default||0}return o=Mg.has(o)?o:xd(o),r.getAttribute(o)}measureInstanceViewportBox(){return He()}scrapeMotionValuesFromProps(r,o){return Dg(r,o)}build(r,o,a,u){Cd(r,o,a,this.isSVGTag,u.transformTemplate)}renderInstance(r,o,a,u){Vg(r,o,a,u)}mount(r){this.isSVGTag=Pd(r.tagName),super.mount(r)}}const db=(t,r)=>kd(t)?new cb(r,{enableHardwareAcceleration:!1}):new ub(r,{enableHardwareAcceleration:!0}),fb={layout:{ProjectionNode:Dy,MeasureLayout:Ey}},hb={..._2,...ok,...WS,...fb},W=pj((t,r)=>qj(t,r,hb,db));function Oy(){const t=R.useRef(!1);return yd(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function pb(){const t=Oy(),[r,o]=R.useState(0),a=R.useCallback(()=>{t.current&&o(r+1)},[r]);return[R.useCallback(()=>Ee.postRender(a),[a]),r]}class mb extends R.Component{getSnapshotBeforeUpdate(r){const o=this.props.childRef.current;if(o&&r.isPresent&&!this.props.isPresent){const a=this.props.sizeRef.current;a.height=o.offsetHeight||0,a.width=o.offsetWidth||0,a.top=o.offsetTop,a.left=o.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function gb({children:t,isPresent:r}){const o=R.useId(),a=R.useRef(null),u=R.useRef({width:0,height:0,top:0,left:0});return R.useInsertionEffect(()=>{const{width:h,height:d,top:p,left:m}=u.current;if(r||!a.current||!h||!d)return;a.current.dataset.motionPopId=o;const g=document.createElement("style");return document.head.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${d}px !important;
            top: ${p}px !important;
            left: ${m}px !important;
          }
        `),()=>{document.head.removeChild(g)}},[r]),R.createElement(mb,{isPresent:r,childRef:a,sizeRef:u},R.cloneElement(t,{ref:a}))}const hc=({children:t,initial:r,isPresent:o,onExitComplete:a,custom:u,presenceAffectsLayout:h,mode:d})=>{const p=Fg(yb),m=R.useId(),g=R.useMemo(()=>({id:m,initial:r,isPresent:o,custom:u,onExitComplete:x=>{p.set(x,!0);for(const v of p.values())if(!v)return;a&&a()},register:x=>(p.set(x,!1),()=>p.delete(x))}),h?void 0:[o]);return R.useMemo(()=>{p.forEach((x,v)=>p.set(v,!1))},[o]),R.useEffect(()=>{!o&&!p.size&&a&&a()},[o]),d==="popLayout"&&(t=R.createElement(gb,{isPresent:o},t)),R.createElement(Wa.Provider,{value:g},t)};function yb(){return new Map}function xb(t){return R.useEffect(()=>()=>t(),[])}const Pr=t=>t.key||"";function vb(t,r){t.forEach(o=>{const a=Pr(o);r.set(a,o)})}function wb(t){const r=[];return R.Children.forEach(t,o=>{R.isValidElement(o)&&r.push(o)}),r}const Li=({children:t,custom:r,initial:o=!0,onExitComplete:a,exitBeforeEnter:u,presenceAffectsLayout:h=!0,mode:d="sync"})=>{const p=R.useContext(jd).forceRender||pb()[0],m=Oy(),g=wb(t);let x=g;const v=R.useRef(new Map).current,w=R.useRef(x),k=R.useRef(new Map).current,E=R.useRef(!0);if(yd(()=>{E.current=!1,vb(g,k),w.current=x}),xb(()=>{E.current=!0,k.clear(),v.clear()}),E.current)return R.createElement(R.Fragment,null,x.map(I=>R.createElement(hc,{key:Pr(I),isPresent:!0,initial:o?void 0:!1,presenceAffectsLayout:h,mode:d},I)));x=[...x];const T=w.current.map(Pr),D=g.map(Pr),F=T.length;for(let I=0;I<F;I++){const L=T[I];D.indexOf(L)===-1&&!v.has(L)&&v.set(L,void 0)}return d==="wait"&&v.size&&(x=[]),v.forEach((I,L)=>{if(D.indexOf(L)!==-1)return;const N=k.get(L);if(!N)return;const q=T.indexOf(L);let K=I;if(!K){const G=()=>{v.delete(L);const ne=Array.from(k.keys()).filter(ce=>!D.includes(ce));if(ne.forEach(ce=>k.delete(ce)),w.current=g.filter(ce=>{const Me=Pr(ce);return Me===L||ne.includes(Me)}),!v.size){if(m.current===!1)return;p(),a&&a()}};K=R.createElement(hc,{key:Pr(N),isPresent:!1,onExitComplete:G,custom:r,presenceAffectsLayout:h,mode:d},N),v.set(L,K)}x.splice(q,0,K)}),x=x.map(I=>{const L=I.key;return v.has(L)?I:R.createElement(hc,{key:Pr(I),isPresent:!0,presenceAffectsLayout:h,mode:d},I)}),R.createElement(R.Fragment,null,v.size?x:x.map(I=>R.cloneElement(I)))};var By={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g0=Ge.createContext&&Ge.createContext(By),Zn=function(){return Zn=Object.assign||function(t){for(var r,o=1,a=arguments.length;o<a;o++){r=arguments[o];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},Zn.apply(this,arguments)},jb=function(t,r){var o={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,a=Object.getOwnPropertySymbols(t);u<a.length;u++)r.indexOf(a[u])<0&&Object.prototype.propertyIsEnumerable.call(t,a[u])&&(o[a[u]]=t[a[u]]);return o};function $y(t){return t&&t.map(function(r,o){return Ge.createElement(r.tag,Zn({key:o},r.attr),$y(r.child))})}function ye(t){return function(r){return Ge.createElement(kb,Zn({attr:Zn({},t.attr)},r),$y(t.child))}}function kb(t){var r=function(o){var a=t.attr,u=t.size,h=t.title,d=jb(t,["attr","size","title"]),p=u||o.size||"1em",m;return o.className&&(m=o.className),t.className&&(m=(m?m+" ":"")+t.className),Ge.createElement("svg",Zn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,a,d,{className:m,style:Zn(Zn({color:t.color||o.color},o.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),h&&Ge.createElement("title",null,h),t.children)};return g0!==void 0?Ge.createElement(g0.Consumer,null,function(o){return r(o)}):r(By)}function id(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"}},{tag:"polyline",attr:{points:"12 5 19 12 12 19"}}]})(t)}function li(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"}},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"}}]})(t)}function Sb(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"}}]})(t)}function bb(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}}]})(t)}function Bo(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}}]})(t)}function Cb(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"}}]})(t)}function $(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"}}]})(t)}function Uy(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(t)}function pc(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"9 18 15 12 9 6"}}]})(t)}function ji(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"polyline",attr:{points:"12 6 12 12 16 14"}}]})(t)}function Un(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"23"}},{tag:"path",attr:{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}}]})(t)}function Pb(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}},{tag:"polyline",attr:{points:"14 2 14 8 20 8"}},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"}},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"}},{tag:"polyline",attr:{points:"10 9 9 9 8 9"}}]})(t)}function Tb(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(t)}function Wy(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"}}]})(t)}function y0(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"}}]})(t)}function Eb(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"}},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"}}]})(t)}function Lb(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"}}]})(t)}function Rb(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}},{tag:"polyline",attr:{points:"16 17 21 12 16 7"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"}}]})(t)}function Xa(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}},{tag:"polyline",attr:{points:"22,6 12,13 2,6"}}]})(t)}function _d(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(t)}function Ab(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(t)}function Eo(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"}}]})(t)}function Od(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}}]})(t)}function Bd(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}}]})(t)}function Hy(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(t)}function x0(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"}},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"}}]})(t)}function Ia(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}}]})(t)}function gr(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"path",attr:{d:"M8 14s1.5 2 4 2 4-2 4-2"}},{tag:"line",attr:{x1:"9",y1:"9",x2:"9.01",y2:"9"}},{tag:"line",attr:{x1:"15",y1:"9",x2:"15.01",y2:"9"}}]})(t)}function Ib(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"}},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"}}]})(t)}function xa(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"}},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"}}]})(t)}function od(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"}},{tag:"polyline",attr:{points:"17 6 23 6 23 12"}}]})(t)}function Mb(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}}]})(t)}function Ma(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"}}]})(t)}function qy(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"}},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"}}]})(t)}function Za(t){return ye({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"}},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"}}]})(t)}const Vb=({isOpen:t,onClose:r})=>{const[o,a]=R.useState(1),[u,h]=R.useState(""),[d,p]=R.useState({name:"",email:"",phone:"",company:"",location:"",businessType:"",employeeCount:"",preferredContact:[],foundUs:"",description:"",experience:"",availability:[],positions:[],certifications:[],languages:[],workPreferences:{fullTime:!1,partTime:!1,casual:!1,temporary:!1},transportMethod:"",acceptTerms:!1,acceptMarketing:!1}),[m,g]=R.useState(!1);R.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="unset",()=>{document.body.style.overflow="unset"}),[t]);const x=E=>{const{name:T,value:D}=E.target;p(F=>({...F,[T]:D}))},v=async E=>{E.preventDefault();try{if(!(await fetch("http://localhost:3000/api/waitlist/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:u,data:d})})).ok)throw new Error("Failed to join waitlist");g(!0),setTimeout(()=>{r(),g(!1),a(1),h(""),p({name:"",email:"",phone:"",company:"",location:"",businessType:"",employeeCount:"",preferredContact:[],foundUs:"",description:"",experience:"",availability:[],positions:[],certifications:[],languages:[],workPreferences:{fullTime:!1,partTime:!1,casual:!1,temporary:!1},transportMethod:"",acceptTerms:!1,acceptMarketing:!1})},2e3)}catch(T){console.error("Signup error:",T),alert("Failed to join waitlist. Please try again.")}},w=E=>{h(E),a(2)},k=E=>{const{name:T,value:D,checked:F}=E.target;if(["preferredContact","positions","availability","certifications","languages"].includes(T))p(I=>({...I,[T]:F?[...I[T],D]:I[T].filter(L=>L!==D)}));else if(T.startsWith("workPreferences.")){const I=T.split(".")[1];p(L=>({...L,workPreferences:{...L.workPreferences,[I]:F}}))}else p(I=>({...I,[T]:F}))};return s.jsx(Li,{children:t&&s.jsx(s.Fragment,{children:s.jsx(Db,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:r,children:s.jsxs(Fb,{as:W.div,initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.95},onClick:E=>E.stopPropagation(),children:[s.jsx(zb,{onClick:r,children:s.jsx(Za,{})}),s.jsx(Li,{mode:"wait",children:m?s.jsxs(Wb,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},children:[s.jsx(Hb,{children:s.jsx($,{})}),s.jsx("h3",{children:"Thank you for signing up!"}),s.jsx("p",{children:"We'll notify you when we launch."})]}):o===1?s.jsxs(Nb,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},children:[s.jsx("h2",{children:"Join HospoHub"}),s.jsx("p",{children:"Select your role to get started"}),s.jsxs(_b,{children:[s.jsxs(v0,{onClick:()=>w("business"),selected:u==="business",children:[s.jsx(Bo,{}),s.jsx("h3",{children:"Business"}),s.jsx("p",{children:"I need staff for my venue"})]}),s.jsxs(v0,{onClick:()=>w("worker"),selected:u==="worker",children:[s.jsx(Ma,{}),s.jsx("h3",{children:"Worker"}),s.jsx("p",{children:"I'm looking for hospitality work"})]})]})]}):s.jsxs(Ob,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},onSubmit:v,children:[s.jsx("h2",{children:"Complete Your Profile"}),s.jsx("p",{children:"Tell us a bit about yourself"}),s.jsxs(ot,{children:[s.jsx(st,{children:"Full Name"}),s.jsxs(jo,{children:[s.jsx(Ma,{}),s.jsx(ko,{type:"text",name:"name",value:d.name,onChange:x,placeholder:"Enter your full name",required:!0})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Email"}),s.jsxs(jo,{children:[s.jsx(Xa,{}),s.jsx(ko,{type:"email",name:"email",value:d.email,onChange:x,placeholder:"Enter your email",required:!0})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Phone"}),s.jsxs(jo,{children:[s.jsx(Bd,{}),s.jsx(ko,{type:"tel",name:"phone",value:d.phone,onChange:x,placeholder:"Enter your phone number",required:!0})]})]}),u==="business"&&s.jsxs(s.Fragment,{children:[s.jsxs(ot,{children:[s.jsx(st,{children:"Company Name"}),s.jsxs(jo,{children:[s.jsx(Bo,{}),s.jsx(ko,{type:"text",name:"company",value:d.company,onChange:x,placeholder:"Enter your company name",required:!0})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Business Type"}),s.jsxs(So,{name:"businessType",value:d.businessType,onChange:x,required:!0,children:[s.jsx("option",{value:"",children:"Select business type"}),s.jsx("option",{value:"restaurant",children:"Restaurant"}),s.jsx("option",{value:"bar",children:"Bar"}),s.jsx("option",{value:"cafe",children:"Café"}),s.jsx("option",{value:"hotel",children:"Hotel"}),s.jsx("option",{value:"nightclub",children:"Nightclub"}),s.jsx("option",{value:"other",children:"Other"})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Number of Employees"}),s.jsxs(So,{name:"employeeCount",value:d.employeeCount,onChange:x,required:!0,children:[s.jsx("option",{value:"",children:"Select employee count"}),s.jsx("option",{value:"1-10",children:"1-10"}),s.jsx("option",{value:"11-50",children:"11-50"}),s.jsx("option",{value:"51-200",children:"51-200"}),s.jsx("option",{value:"201+",children:"201+"})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Business Description"}),s.jsx(qb,{name:"description",value:d.description,onChange:x,placeholder:"Tell us about your business...",required:!0})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"How did you find us?"}),s.jsxs(So,{name:"foundUs",value:d.foundUs,onChange:x,required:!0,children:[s.jsx("option",{value:"",children:"Select an option"}),s.jsx("option",{value:"search",children:"Search Engine"}),s.jsx("option",{value:"social",children:"Social Media"}),s.jsx("option",{value:"referral",children:"Referral"}),s.jsx("option",{value:"advertisement",children:"Advertisement"}),s.jsx("option",{value:"other",children:"Other"})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Preferred Contact Methods"}),s.jsxs(ui,{children:[s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"preferredContact",value:"email",checked:d.preferredContact.includes("email"),onChange:k}),"Email"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"preferredContact",value:"phone",checked:d.preferredContact.includes("phone"),onChange:k}),"Phone"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"preferredContact",value:"sms",checked:d.preferredContact.includes("sms"),onChange:k}),"SMS"]})]})]}),s.jsxs(w0,{children:[s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"acceptTerms",checked:d.acceptTerms,onChange:k,required:!0}),"I agree to the ",s.jsx(j0,{to:"/terms",children:"Terms and Conditions"})]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"acceptMarketing",checked:d.acceptMarketing,onChange:k}),"I agree to receive marketing communications"]})]})]}),u==="worker"&&s.jsxs(s.Fragment,{children:[s.jsxs(ot,{children:[s.jsx(st,{children:"Years of Experience"}),s.jsxs(So,{name:"experience",value:d.experience,onChange:x,required:!0,children:[s.jsx("option",{value:"",children:"Select experience"}),s.jsx("option",{value:"0-1",children:"Less than 1 year"}),s.jsx("option",{value:"1-3",children:"1-3 years"}),s.jsx("option",{value:"3-5",children:"3-5 years"}),s.jsx("option",{value:"5-10",children:"5-10 years"}),s.jsx("option",{value:"10+",children:"10+ years"})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Preferred Positions"}),s.jsxs(ui,{children:[s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"positions",value:"waiter",checked:d.positions.includes("waiter"),onChange:k}),"Waiter/Waitress"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"positions",value:"bartender",checked:d.positions.includes("bartender"),onChange:k}),"Bartender"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"positions",value:"barista",checked:d.positions.includes("barista"),onChange:k}),"Barista"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"positions",value:"chef",checked:d.positions.includes("chef"),onChange:k}),"Chef"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"positions",value:"kitchen-hand",checked:d.positions.includes("kitchen-hand"),onChange:k}),"Kitchen Hand"]})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Availability"}),s.jsxs(ui,{children:[s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"availability",value:"weekdays",checked:d.availability.includes("weekdays"),onChange:k}),"Weekdays"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"availability",value:"weekends",checked:d.availability.includes("weekends"),onChange:k}),"Weekends"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"availability",value:"evenings",checked:d.availability.includes("evenings"),onChange:k}),"Evenings"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"availability",value:"early-mornings",checked:d.availability.includes("early-mornings"),onChange:k}),"Early Mornings"]})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Work Preferences"}),s.jsxs(ui,{children:[s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"workPreferences.fullTime",checked:d.workPreferences.fullTime,onChange:k}),"Full Time"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"workPreferences.partTime",checked:d.workPreferences.partTime,onChange:k}),"Part Time"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"workPreferences.casual",checked:d.workPreferences.casual,onChange:k}),"Casual"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"workPreferences.temporary",checked:d.workPreferences.temporary,onChange:k}),"Temporary"]})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Certifications"}),s.jsxs(ui,{children:[s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"certifications",value:"rsa",checked:d.certifications.includes("rsa"),onChange:k}),"RSA (Responsible Service of Alcohol)"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"certifications",value:"food-safety",checked:d.certifications.includes("food-safety"),onChange:k}),"Food Safety Certificate"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"certifications",value:"first-aid",checked:d.certifications.includes("first-aid"),onChange:k}),"First Aid Certificate"]})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Languages Spoken"}),s.jsxs(ui,{children:[s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"languages",value:"english",checked:d.languages.includes("english"),onChange:k}),"English"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"languages",value:"swedish",checked:d.languages.includes("swedish"),onChange:k}),"Swedish"]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"languages",value:"other",checked:d.languages.includes("other"),onChange:k}),"Other"]})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Transport Method"}),s.jsxs(So,{name:"transportMethod",value:d.transportMethod,onChange:x,required:!0,children:[s.jsx("option",{value:"",children:"Select transport method"}),s.jsx("option",{value:"own-car",children:"Own Car"}),s.jsx("option",{value:"public-transport",children:"Public Transport"}),s.jsx("option",{value:"bicycle",children:"Bicycle"}),s.jsx("option",{value:"walking",children:"Walking"}),s.jsx("option",{value:"other",children:"Other"})]})]}),s.jsxs(w0,{children:[s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"acceptTerms",checked:d.acceptTerms,onChange:k,required:!0}),"I agree to the ",s.jsx(j0,{to:"/terms",children:"Terms and Conditions"})]}),s.jsxs(Te,{children:[s.jsx("input",{type:"checkbox",name:"acceptMarketing",checked:d.acceptMarketing,onChange:k}),"I agree to receive marketing communications"]})]})]}),s.jsxs(ot,{children:[s.jsx(st,{children:"Location"}),s.jsxs(jo,{children:[s.jsx(_d,{}),s.jsx(ko,{type:"text",name:"location",value:d.location,onChange:x,placeholder:"Enter your city",required:!0})]})]}),s.jsxs(Bb,{children:[s.jsx($b,{type:"button",onClick:()=>a(1),children:"Back"}),s.jsx(Ub,{type:"submit",children:"Join Waitlist"})]})]})})]})})})})},Db=P(W.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`,Fb=P(W.div)`
  background: #fff;
  border-radius: 24px;
  padding: 3rem;
  width: 90%;
  max-width: 600px;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 2rem;
    width: 95%;
    max-height: 80vh;
  }
`,zb=P.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  color: #000;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: rotate(90deg);
  }
`,Nb=P(W.div)`
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`,_b=P.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`,v0=P.div`
  background: ${t=>t.selected?"#000":"#fff"};
  border: 2px solid ${t=>t.selected?"#000":"rgba(0, 0, 0, 0.1)"};
  border-radius: 16px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  svg {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: ${t=>t.selected?"#fff":"#000"};
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: ${t=>t.selected?"#fff":"#000"};
  }

  p {
    font-size: 0.9rem;
    color: ${t=>t.selected?"rgba(255, 255, 255, 0.8)":"#666"};
    margin: 0;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-color: #000;
  }
`,Ob=P(W.form)`
  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`,ot=P.div`
  margin-bottom: 1.5rem;
`,st=P.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #000;
  font-size: 0.9rem;
  font-weight: 600;
`,jo=P.div`
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.3s ease;

  svg {
    color: #666;
    width: 20px;
    height: 20px;
  }

  &:focus-within {
    background: rgba(0, 0, 0, 0.08);
    
    svg {
      color: #000;
    }
  }
`,ko=P.input`
  width: 100%;
  padding: 1rem;
  background: none;
  border: none;
  color: #000;
  font-size: 1rem;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
  }
`,Bb=P.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`,$b=P.button`
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`,Ub=P.button`
  padding: 1rem 2rem;
  background: #000;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 2;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,Wb=P(W.div)`
  text-align: center;
  padding: 2rem 0;

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem;
    color: #000;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`,Hb=P.div`
  width: 64px;
  height: 64px;
  background: #000;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  svg {
    width: 32px;
    height: 32px;
    color: #fff;
  }
`,So=P.select`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;

  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.08);
  }
`,qb=P.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 8px;
  color: #000;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.08);
  }
`,ui=P.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`,Te=P.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: #333;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`,w0=P.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
`,j0=P.a`
  color: #000;
  text-decoration: underline;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`,Gb=P(W.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.2rem 2rem;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &.scrolled {
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Yb=P.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`,k0=P(Fa)`
  font-weight: 800;
  font-size: 1.8rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-shrink: 0;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
  }
`,Qb=P.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
    
    &.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.98);
      padding: 2rem;
      gap: 2rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      animation: slideDown 0.3s ease-out forwards;
    }
  }
`,mc=P(Fa)`
  color: #000;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #000;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #000;
    
    &::after {
      width: 100%;
    }
  }
`,Kb=P.button`
  background: #000;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,Xb=P.button`
  display: none;
  font-size: 1.5rem;
  color: #000;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }
`,Zb=P.footer`
  padding: 4rem 2rem 2rem;
  background: #fff;
  border-top: 1px solid #eee;
`,Jb=P.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4rem;
`,gc=P.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`,eC=P.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,yc=P.a`
  color: #000;
  font-size: 1.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`,S0=P.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,yr=P(Fa)`
  color: #666;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`,tC=P.div`
  text-align: center;
  color: #666;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #eee;
`,nC=P.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 150px;
  z-index: 100;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  pointer-events: auto;
  touch-action: none;
`,rC=P(W.button)`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  margin: 1.5rem;
  transition: all 0.3s ease;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;

  svg {
    width: 22px;
    height: 22px;
    color: #666;
    transition: all 0.3s ease;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
    z-index: -1;
  }

  &:hover, &:active {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

    &::before {
      transform: scale(1);
    }

    svg {
      color: #fff;
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`,iC=P(W.div)`
  position: absolute;
  bottom: 100%;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  white-space: nowrap;
  pointer-events: none;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    right: 15px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.8);
  }
`,Dr=({children:t,isModalOpen:r,onModalClose:o,onModalOpen:a})=>{const[u,h]=R.useState(!1),[d,p]=R.useState(!1),[m,g]=R.useState(!1),[x,v]=R.useState(!1),w=Uo();R.useEffect(()=>{const E=()=>{p(window.scrollY>20)};return window.addEventListener("scroll",E),()=>window.removeEventListener("scroll",E)},[]),R.useEffect(()=>{const E=()=>{window.innerWidth>768&&h(!1)};return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[]);const k=E=>{g(E),E||v(!1)};return s.jsxs(s.Fragment,{children:[s.jsx(Gb,{className:d?"scrolled":"",initial:{y:-100},animate:{y:0},transition:{duration:.5},children:s.jsxs(Yb,{children:[s.jsx(k0,{to:"/",children:"HospoHub"}),s.jsxs(Qb,{className:u?"active":"",children:[s.jsx(mc,{to:"/about",children:"About"}),s.jsx(mc,{to:"/contact",children:"Contact"}),s.jsx(mc,{to:"/faq",children:"FAQ"}),s.jsxs(Kb,{onClick:a,children:["Join Waitlist ",s.jsx(id,{})]})]}),s.jsx(Xb,{onClick:()=>h(!u),children:u?s.jsx(Za,{}):s.jsx(Ab,{})})]})}),t,s.jsxs(Zb,{children:[s.jsxs(Jb,{children:[s.jsxs(gc,{children:[s.jsx(k0,{to:"/",children:"HospoHub"}),s.jsx("p",{children:"The upcoming on-demand staffing app revolutionizing short-term hospitality work."}),s.jsxs(eC,{children:[s.jsx(yc,{href:"https://github.com/hospohub",target:"_blank",rel:"noopener noreferrer",children:s.jsx(Tb,{})}),s.jsx(yc,{href:"https://twitter.com/hospohub",target:"_blank",rel:"noopener noreferrer",children:s.jsx(Mb,{})}),s.jsx(yc,{href:"https://linkedin.com/company/hospohub",target:"_blank",rel:"noopener noreferrer",children:s.jsx(Eb,{})})]})]}),s.jsxs(gc,{children:[s.jsx("h3",{children:"Product"}),s.jsxs(S0,{children:[s.jsx(yr,{to:"/#features",children:"Features"}),s.jsx(yr,{to:"/#pricing",children:"Pricing"}),s.jsx(yr,{to:"/faq",children:"FAQ"})]})]}),s.jsxs(gc,{children:[s.jsx("h3",{children:"Company"}),s.jsxs(S0,{children:[s.jsx(yr,{to:"/about",children:"About"}),s.jsx(yr,{to:"/contact",children:"Contact"}),s.jsx(yr,{to:"/privacy",children:"Privacy"}),s.jsx(yr,{to:"/terms",children:"Terms"})]})]})]}),s.jsxs(tC,{children:["© ",new Date().getFullYear()," HospoHub. All rights reserved."]})]}),s.jsx(Vb,{isOpen:r,onClose:o}),s.jsx(nC,{onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),onTouchStart:()=>k(!0),onClick:()=>k(!0),children:s.jsxs(rC,{animate:{opacity:m?1:0,scale:m?1:.8},transition:{duration:.2,ease:"easeOut"},onClick:()=>{k(!1),w("/admin/login")},onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),style:{pointerEvents:m?"auto":"none"},children:[s.jsx(Ia,{}),x&&s.jsx(iC,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0,y:5},transition:{duration:.2},children:"Admin Access"})]})})]})},oC=P.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  color: #000;
  scroll-behavior: smooth;
`,sC=P.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem 2rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);
  text-align: center;
  position: relative;
  overflow: hidden;
`,b0=P(W.div)`
  position: absolute;
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  background: transparent;
  border: 1px solid #000;
  opacity: 0.1;
  pointer-events: none;
`,aC=P.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding-top: 60px;
`,lC=P(W.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,uC=P(W.div)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 100%);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  font-size: 1rem;
  color: #000000;
  margin-bottom: 2rem;
`,cC=P(W.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  margin-bottom: 2rem;
  color: #333;
  line-height: 1.6;
`,dC=P(W.button)`
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`,fC=P(W.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  flex-wrap: wrap;
`,hC=P(W.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #000000;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);

  svg {
    color: #333333;
  }
`,ci=P.div`
  position: relative;
  height: 100px;
  background: ${t=>t.background||"#fff"};
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 120' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' fill='${t=>{const r=t.variant==="blue"?"rgba(0, 168, 204, 0.1)":t.variant==="teal"?"rgba(0, 206, 209, 0.1)":t.variant==="navy"?"rgba(0, 24, 48, 0.1)":t.fill||"rgba(0, 168, 204, 0.05)";return encodeURIComponent(r)}}'/%3E%3C/svg%3E");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transform: ${t=>t.flip?"rotate(180deg)":"none"};
  }
`,xr=P.div`
  position: relative;
  background: ${t=>t.background||"#fff"};
`,pC=P.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.02) 100%);
  pointer-events: none;
`,di=P.section`
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;
  background: ${t=>t.background||"#fff"};
`,vr=P.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,gt=P(W.div)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
`,Wn=P(W.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size: 2rem;
    color: #000000;
  }
`,yt=P(W.div)`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.85);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    color: rgba(255, 255, 255, 0.9);

    svg {
      color: #ffffff;
    }
  }
`,mC=P.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 100%);
`,gC=P.div`
  max-width: 800px;
  margin: 0 auto;
`,yC=P.div`
  margin-bottom: 1rem;
`,xC=P.button`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: #000000;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  svg {
    color: #333333;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`,vC=P(W.div)`
  padding: 1.5rem;
  color: #333333;
  line-height: 1.6;
  background: rgba(255, 255, 255, 0.9);
  margin-top: 2px;
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,wC=P.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 4rem auto;
  text-align: center;
`,xc=P(W.div)`
  .number {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0.5rem;
  }
  
  .label {
    color: #4c4f6d;
    font-size: 1.1rem;
  }
`,jC=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin: 3rem 0;
  flex-wrap: wrap;

  .badge {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4c4f6d;
    font-weight: 500;
    
    svg {
      color: #6366f1;
      font-size: 1.5rem;
    }
  }
`,bo=P(W.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.06) 100%);
  border-radius: 24px;
  padding: 2.5rem;
  text-align: left;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .stat {
    font-size: 2.5rem;
    font-weight: 700;
    color: #000000;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 1.1rem;
    color: #333333;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    color: #333333;
    font-size: 1.1rem;

    svg {
      color: #000000;
      flex-shrink: 0;
    }
  }
`,kC=P(W.div)`
  position: relative;
  height: 120px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${t=>t.background||"#fff"};

  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(0, 0, 0, 0.1) 50%,
      transparent 100%
    );
  }

  .icon-container {
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    z-index: 1;
    border: 1px solid rgba(0, 0, 0, 0.1);
    
    svg {
      font-size: 1.5rem;
      color: #000;
    }
  }
`,C0=P(W.div)`
  position: absolute;
  width: ${t=>t.size||"100px"};
  height: ${t=>t.size||"100px"};
  background: ${t=>t.variant==="blue"?"linear-gradient(135deg, rgba(0, 168, 204, 0.15), rgba(0, 24, 48, 0.25))":t.variant==="teal"?"linear-gradient(135deg, rgba(0, 206, 209, 0.15), rgba(0, 128, 128, 0.25))":t.variant==="navy"?"linear-gradient(135deg, rgba(0, 24, 48, 0.15), rgba(0, 48, 72, 0.25))":"linear-gradient(135deg, rgba(0, 168, 204, 0.1), rgba(0, 24, 48, 0.2))"};
  border: 1px solid ${t=>t.variant==="blue"?"rgba(0, 168, 204, 0.2)":t.variant==="teal"?"rgba(0, 206, 209, 0.2)":t.variant==="navy"?"rgba(0, 24, 48, 0.2)":"rgba(0, 168, 204, 0.15)"};
  border-radius: ${t=>t.shape==="circle"?"50%":t.shape==="blob"?"30% 70% 70% 30% / 30% 30% 70% 70%":"10px"};
  pointer-events: none;
  z-index: 1;
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 24, 48, 0.1);
`,SC=P.section`
  padding: 6rem 2rem;
  background: #fff;
`,bC=P.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,P0=P.div`
  background: ${t=>t.$featured?"#000":"#fff"};
  color: ${t=>t.$featured?"#fff":"#000"};
  border: 2px solid #000;
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  ${t=>t.$featured&&`
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  `}

  &:hover {
    transform: ${t=>t.$featured?"scale(1.08)":"scale(1.03)"};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 3rem;
    font-weight: 700;
    margin: 1.5rem 0;
    
    .currency {
      font-size: 1.5rem;
      vertical-align: super;
    }
    
    .period {
      font-size: 1.2rem;
      color: ${t=>t.$featured?"rgba(255, 255, 255, 0.8)":"#666"};
    }
  }

  .description {
    font-size: 1.1rem;
    color: ${t=>t.$featured?"#fff":"#666"};
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
    text-align: left;
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    color: ${t=>t.$featured?"#fff":"#333"};
    font-size: 1.1rem;

    svg {
      color: ${t=>t.$featured?"#fff":"#000"};
      flex-shrink: 0;
    }
  }
`,T0=P.button`
  background: ${t=>t.$featured?"#fff":"#000"};
  color: ${t=>t.$featured?"#000":"#fff"};
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,CC=()=>{const[t,r]=R.useState(null),[o,a]=R.useState(!1),u=()=>{a(!0)},h=[{question:"When is the app launching?",answer:"We're launching soon! Join our waitlist to be among the first to access the app and receive exclusive early-bird benefits."},{question:"How does the gig booking process work?",answer:"As a hospitality business, you can post short-term gigs through the app, specifying your requirements and timing. Available staff can instantly accept these gigs, and you can review their profiles and ratings before confirmation."},{question:"What types of gigs can I post?",answer:"You can post various hospitality roles including servers, bartenders, kitchen staff, and event staff. Gigs can range from a few hours to several days, perfect for events, peak seasons, or last-minute coverage."},{question:"How does the staff verification process work?",answer:"We conduct thorough background checks, verify work history, and validate qualifications for all staff members. Each professional goes through a multi-step verification process before being able to accept gigs."},{question:"What happens if a staff member doesn't show up?",answer:"Our app includes a reliable backup system. In the rare event of a no-show, you'll receive instant notifications and we'll immediately connect you with available backup staff in your area."},{question:"How are payments handled?",answer:"All payments are processed securely through the app. Funds are held in escrow and automatically released to staff after gig completion and your approval. You can set your payment rates and view all transactions in real-time."}];return s.jsx(Dr,{isModalOpen:o,onModalClose:()=>a(!1),onModalOpen:()=>a(!0),children:s.jsxs(oC,{children:[s.jsxs(sC,{children:[s.jsx(b0,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:.1},transition:{duration:1},style:{top:"10%",left:"10%"}}),s.jsx(b0,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:.1},transition:{duration:1,delay:.2},style:{bottom:"10%",right:"10%"}}),s.jsxs(aC,{children:[s.jsx(uC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:"🚀 App Launching Soon"}),s.jsx(lC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Streamline Your Hospitality Staffing"}),s.jsx(cC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"Whether you're looking for short-term staff or flexible hospitality work, HospoHub connects you instantly."}),s.jsxs(dC,{onClick:u,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},whileHover:{scale:1.05},whileTap:{scale:.95},children:["Join Waitlist ",s.jsx(id,{})]}),s.jsx(fC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:["Instant Gig Booking","Verified Staff","Flexible Hours"].map((d,p)=>s.jsxs(hC,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:.8+p*.1},children:[s.jsx($,{})," ",d]},d))}),s.jsxs(wC,{children:[s.jsxs(xc,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx("div",{className:"number",children:"2,500+"}),s.jsx("div",{className:"label",children:"Pre-registered Workers"})]}),s.jsxs(xc,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.1},children:[s.jsx("div",{className:"number",children:"500+"}),s.jsx("div",{className:"label",children:"Partner Venues"})]}),s.jsxs(xc,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},children:[s.jsx("div",{className:"number",children:"15+"}),s.jsx("div",{className:"label",children:"Major Cities"})]})]}),s.jsxs(jC,{children:[s.jsxs(W.div,{className:"badge",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},children:[s.jsx(Ia,{})," Verified Staff"]}),s.jsxs(W.div,{className:"badge",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.1},children:[s.jsx($,{})," Background Checked"]}),s.jsxs(W.div,{className:"badge",initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.2},children:[s.jsx(Un,{})," Secure Payments"]})]}),s.jsxs(vr,{style:{marginTop:"4rem"},children:[s.jsxs(bo,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx("h3",{children:"Industry Challenges"}),s.jsx("div",{className:"stat",children:"47%"}),s.jsx("div",{className:"description",children:"of hospitality businesses report staffing as their biggest challenge"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," High staff turnover rates increasing costs"]}),s.jsxs("li",{children:[s.jsx($,{})," Difficulty finding qualified last-minute staff"]}),s.jsxs("li",{children:[s.jsx($,{})," Time-consuming recruitment processes"]}),s.jsxs("li",{children:[s.jsx($,{})," Seasonal staffing fluctuations"]})]})]}),s.jsxs(bo,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},children:[s.jsx("h3",{children:"The HospoHub Solution"}),s.jsx("div",{className:"stat",children:"24/7"}),s.jsx("div",{className:"description",children:"instant access to verified hospitality professionals"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Smart matching algorithm for perfect fit"]}),s.jsxs("li",{children:[s.jsx($,{})," Automated background checks and verification"]}),s.jsxs("li",{children:[s.jsx($,{})," Real-time availability updates"]}),s.jsxs("li",{children:[s.jsx($,{})," Integrated payment and rating system"]})]})]})]})]})]}),s.jsxs(kC,{as:W.div,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},children:[s.jsx("div",{className:"line"}),s.jsx(W.div,{className:"icon-container",initial:{scale:0,rotate:-180},whileInView:{scale:1,rotate:0},viewport:{once:!0},transition:{type:"spring",stiffness:200},children:s.jsx(id,{})})]}),s.jsx(C0,{as:W.div,size:"80px",shape:"circle",variant:"teal",initial:{x:-100,y:50,opacity:0},whileInView:{x:0,y:0,opacity:1},viewport:{once:!0},transition:{duration:1,type:"spring"},style:{left:"20%"}}),s.jsx(C0,{as:W.div,size:"120px",shape:"blob",variant:"blue",initial:{x:100,y:-50,opacity:0},whileInView:{x:0,y:0,opacity:1},viewport:{once:!0},transition:{duration:1,type:"spring"},style:{right:"20%"}}),s.jsx(xr,{id:"platform-features",background:"#fff",children:s.jsxs(di,{children:[s.jsxs(Wn,{as:W.h2,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx(xa,{})," Platform Features"]}),s.jsxs(vr,{children:[s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx(gt,{children:s.jsx(Ia,{})}),s.jsx("h3",{children:"Advanced Security"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Identity verification"]}),s.jsxs("li",{children:[s.jsx($,{})," Secure payment processing"]}),s.jsxs("li",{children:[s.jsx($,{})," Data encryption"]}),s.jsxs("li",{children:[s.jsx($,{})," Privacy protection"]})]})]}),s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},children:[s.jsx(gt,{children:s.jsx(ji,{})}),s.jsx("h3",{children:"Real-Time Matching"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Instant notifications"]}),s.jsxs("li",{children:[s.jsx($,{})," Live availability updates"]}),s.jsxs("li",{children:[s.jsx($,{})," Smart scheduling"]}),s.jsxs("li",{children:[s.jsx($,{})," Quick response system"]})]})]}),s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.4},children:[s.jsx(gt,{children:s.jsx(Eo,{})}),s.jsx("h3",{children:"Communication Tools"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," In-app messaging"]}),s.jsxs("li",{children:[s.jsx($,{})," Document sharing"]}),s.jsxs("li",{children:[s.jsx($,{})," Team collaboration"]}),s.jsxs("li",{children:[s.jsx($,{})," Feedback system"]})]})]})]})]})}),s.jsxs(xr,{id:"business-benefits",background:"rgba(0,0,0,0.02)",children:[s.jsxs(di,{background:"rgba(0,0,0,0.02)",children:[s.jsxs(Wn,{as:W.h2,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx(od,{})," Business Benefits"]}),s.jsxs(vr,{children:[s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200},children:s.jsx(Un,{})}),s.jsxs("h3",{children:[s.jsx(Un,{})," Cost Savings"]}),s.jsx("p",{children:"Reduce staffing costs significantly:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Save up to 30% on recruitment fees"]}),s.jsxs("li",{children:[s.jsx($,{})," No long-term commitments"]}),s.jsxs("li",{children:[s.jsx($,{})," Pay only for hours worked"]}),s.jsxs("li",{children:[s.jsx($,{})," Eliminate overtime costs"]})]})]}),s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200,delay:.2},children:s.jsx(ji,{})}),s.jsxs("h3",{children:[s.jsx(ji,{})," Time & Efficiency"]}),s.jsx("p",{children:"Streamline your operations:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," 80% faster staff sourcing"]}),s.jsxs("li",{children:[s.jsx($,{})," Instant staff replacement"]}),s.jsxs("li",{children:[s.jsx($,{})," Automated timesheet tracking"]}),s.jsxs("li",{children:[s.jsx($,{})," Reduced administrative work"]})]})]}),s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200,delay:.4},children:s.jsx(li,{})}),s.jsxs("h3",{children:[s.jsx(li,{})," ROI Benefits"]}),s.jsx("p",{children:"Maximize your investment:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Higher staff retention rates"]}),s.jsxs("li",{children:[s.jsx($,{})," Reduced training costs"]}),s.jsxs("li",{children:[s.jsx($,{})," Better staff performance"]}),s.jsxs("li",{children:[s.jsx($,{})," Increased customer satisfaction"]})]})]})]})]}),s.jsx(ci,{background:"rgba(0,0,0,0.02)",variant:"blue",fill:"#fff",as:W.div,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0}})]}),s.jsxs(xr,{id:"how-it-works",background:"#fff",children:[s.jsx(pC,{}),s.jsxs(di,{children:[s.jsxs(Wn,{as:W.h2,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx(bb,{})," How HospoHub Works"]}),s.jsxs(vr,{children:[s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200},children:s.jsx(xa,{})}),s.jsxs("h3",{children:[s.jsx(xa,{})," For Businesses"]}),s.jsx("p",{children:"Simple 3-step process:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Post your gig requirements"]}),s.jsxs("li",{children:[s.jsx($,{})," Review matched candidates"]}),s.jsxs("li",{children:[s.jsx($,{})," Confirm and pay securely"]}),s.jsxs("li",{children:[s.jsx($,{})," Rate after completion"]})]})]}),s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200,delay:.2},children:s.jsx(Eo,{})}),s.jsxs("h3",{children:[s.jsx(Eo,{})," Platform Features"]}),s.jsx("p",{children:"Built for hospitality:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Real-time availability"]}),s.jsxs("li",{children:[s.jsx($,{})," Smart matching system"]}),s.jsxs("li",{children:[s.jsx($,{})," Secure messaging"]}),s.jsxs("li",{children:[s.jsx($,{})," Digital contracts"]})]})]}),s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200,delay:.4},children:s.jsx(gr,{})}),s.jsxs("h3",{children:[s.jsx(gr,{})," For Workers"]}),s.jsx("p",{children:"Easy to get started:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Create your profile"]}),s.jsxs("li",{children:[s.jsx($,{})," Set your availability"]}),s.jsxs("li",{children:[s.jsx($,{})," Accept gigs instantly"]}),s.jsxs("li",{children:[s.jsx($,{})," Get paid quickly"]})]})]})]})]}),s.jsx(ci,{background:"#fff",variant:"blue",fill:"rgba(0,0,0,0.02)",as:W.div,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0}})]}),s.jsxs(xr,{background:"rgba(0,0,0,0.02)",children:[s.jsxs(di,{background:"rgba(0,0,0,0.02)",children:[s.jsxs(Wn,{as:W.h2,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx(gr,{})," For Workers"]}),s.jsxs(vr,{children:[s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200},children:s.jsx(gr,{})}),s.jsxs("h3",{children:[s.jsx(gr,{})," Flexible Work"]}),s.jsx("p",{children:"Work on your terms:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Choose your schedule"]}),s.jsxs("li",{children:[s.jsx($,{})," Pick your venues"]}),s.jsxs("li",{children:[s.jsx($,{})," Set availability"]}),s.jsxs("li",{children:[s.jsx($,{})," Work when you want"]})]})]}),s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200,delay:.2},children:s.jsx(Un,{})}),s.jsxs("h3",{children:[s.jsx(Un,{})," Quick Payments"]}),s.jsx("p",{children:"Get paid reliably:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Secure transactions"]}),s.jsxs("li",{children:[s.jsx($,{})," Fast payouts"]}),s.jsxs("li",{children:[s.jsx($,{})," Clear rates"]}),s.jsxs("li",{children:[s.jsx($,{})," Payment protection"]})]})]}),s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200,delay:.4},children:s.jsx(li,{})}),s.jsxs("h3",{children:[s.jsx(li,{})," Career Growth"]}),s.jsx("p",{children:"Build your profile:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Performance ratings"]}),s.jsxs("li",{children:[s.jsx($,{})," Work history"]}),s.jsxs("li",{children:[s.jsx($,{})," Skill validation"]}),s.jsxs("li",{children:[s.jsx($,{})," References"]})]})]})]})]}),s.jsx(ci,{background:"rgba(0,0,0,0.02)",variant:"blue",fill:"#fff",as:W.div,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0}})]}),s.jsxs(xr,{background:"#fff",children:[s.jsxs(di,{children:[s.jsxs(Wn,{as:W.h2,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx(Wy,{})," Worker Benefits"]}),s.jsxs(vr,{children:[s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200},children:s.jsx(Un,{})}),s.jsxs("h3",{children:[s.jsx(Un,{})," Earning Potential"]}),s.jsx("p",{children:"Maximize your income:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Competitive hourly rates"]}),s.jsxs("li",{children:[s.jsx($,{})," Choose high-paying gigs"]}),s.jsxs("li",{children:[s.jsx($,{})," Bonus opportunities"]}),s.jsxs("li",{children:[s.jsx($,{})," Multiple venue options"]})]})]}),s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.2},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200,delay:.2},children:s.jsx(gr,{})}),s.jsxs("h3",{children:[s.jsx(gr,{})," Work-Life Balance"]}),s.jsx("p",{children:"Control your schedule:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Work when you want"]}),s.jsxs("li",{children:[s.jsx($,{})," No minimum hours"]}),s.jsxs("li",{children:[s.jsx($,{})," Choose your locations"]}),s.jsxs("li",{children:[s.jsx($,{})," Flexible availability"]})]})]}),s.jsxs(yt,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.4},whileHover:{scale:1.02},whileTap:{scale:.98},children:[s.jsx(gt,{initial:{scale:0},whileInView:{scale:1},viewport:{once:!0},transition:{type:"spring",stiffness:200,delay:.4},children:s.jsx(li,{})}),s.jsxs("h3",{children:[s.jsx(li,{})," Career Development"]}),s.jsx("p",{children:"Grow professionally:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Diverse experience"]}),s.jsxs("li",{children:[s.jsx($,{})," Skill development"]}),s.jsxs("li",{children:[s.jsx($,{})," Network building"]}),s.jsxs("li",{children:[s.jsx($,{})," Performance rewards"]})]})]})]})]}),s.jsx(ci,{background:"#fff",variant:"blue",fill:"#f8f8f8",as:W.div,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0}})]}),s.jsxs(xr,{background:"#fff",children:[s.jsxs(di,{children:[s.jsxs(Wn,{as:W.h2,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx(od,{})," Market Insights"]}),s.jsxs(vr,{children:[s.jsxs(bo,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx("h3",{children:"Industry Growth"}),s.jsx("div",{className:"stat",children:"$84B"}),s.jsx("div",{className:"description",children:"projected market size for hospitality staffing by 2025"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Rising demand for flexible staffing solutions"]}),s.jsxs("li",{children:[s.jsx($,{})," Increasing adoption of digital platforms"]}),s.jsxs("li",{children:[s.jsx($,{})," Growing gig economy in hospitality sector"]}),s.jsxs("li",{children:[s.jsx($,{})," Shift towards on-demand workforce"]})]})]}),s.jsxs(bo,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.2},children:[s.jsx("h3",{children:"Cost Analysis"}),s.jsx("div",{className:"stat",children:"30%"}),s.jsx("div",{className:"description",children:"average reduction in staffing costs with on-demand solutions"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Lower recruitment and advertising costs"]}),s.jsxs("li",{children:[s.jsx($,{})," Reduced overtime expenses"]}),s.jsxs("li",{children:[s.jsx($,{})," Minimized training investments"]}),s.jsxs("li",{children:[s.jsx($,{})," Optimized labor cost management"]})]})]}),s.jsxs(bo,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:.4},children:[s.jsx("h3",{children:"Future of Work"}),s.jsx("div",{className:"stat",children:"68%"}),s.jsx("div",{className:"description",children:"of workers prefer flexible scheduling options"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Increased work-life balance"]}),s.jsxs("li",{children:[s.jsx($,{})," Greater earning potential"]}),s.jsxs("li",{children:[s.jsx($,{})," Diverse experience opportunities"]}),s.jsxs("li",{children:[s.jsx($,{})," Career growth flexibility"]})]})]})]})]}),s.jsx(ci,{background:"#fff",variant:"blue",fill:"rgba(0,0,0,0.02)",as:W.div,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0}})]}),s.jsxs(xr,{background:"#fff",children:[s.jsxs(SC,{children:[s.jsxs(Wn,{as:W.h2,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx(Un,{})," Simple Pricing"]}),s.jsxs(bC,{children:[s.jsx(W.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},children:s.jsxs(P0,{children:[s.jsx("h3",{children:"For Workers"}),s.jsxs("div",{className:"price",children:["Free",s.jsx("span",{className:"period",children:" forever"})]}),s.jsx("div",{className:"description",children:"Find flexible hospitality work that fits your schedule"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Create professional profile"]}),s.jsxs("li",{children:[s.jsx($,{})," Access to all job listings"]}),s.jsxs("li",{children:[s.jsx($,{})," Real-time notifications"]}),s.jsxs("li",{children:[s.jsx($,{})," Secure payments"]}),s.jsxs("li",{children:[s.jsx($,{})," Build work history"]}),s.jsxs("li",{children:[s.jsx($,{})," Rate and review venues"]})]}),s.jsx(T0,{onClick:u,children:"Join Now"})]})}),s.jsx(W.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},children:s.jsxs(P0,{$featured:!0,children:[s.jsx("h3",{children:"For Businesses"}),s.jsxs("div",{className:"price",children:[s.jsx("span",{className:"currency",children:"SEK"})," 2,000",s.jsx("span",{className:"period",children:"/month"})]}),s.jsx("div",{className:"description",children:"Access qualified staff when you need them most"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx($,{})," Unlimited job postings"]}),s.jsxs("li",{children:[s.jsx($,{})," Verified worker profiles"]}),s.jsxs("li",{children:[s.jsx($,{})," Smart matching algorithm"]}),s.jsxs("li",{children:[s.jsx($,{})," Real-time availability"]}),s.jsxs("li",{children:[s.jsx($,{})," Secure payment handling"]}),s.jsxs("li",{children:[s.jsx($,{})," Analytics and reporting"]})]}),s.jsx(T0,{$featured:!0,onClick:u,children:"Get Started"})]})})]})]}),s.jsx(ci,{background:"#fff",variant:"blue",fill:"#f8f8f8",as:W.div,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0}})]}),s.jsx(mC,{id:"faq",children:s.jsxs(gC,{children:[s.jsxs(Wn,{as:W.h2,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},children:[s.jsx(Eo,{})," Frequently Asked Questions"]}),h.map((d,p)=>s.jsxs(yC,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:p*.1},children:[s.jsxs(xC,{onClick:()=>r(t===p?null:p),"aria-expanded":t===p,children:[d.question,s.jsx(Uy,{})]}),s.jsx(Li,{children:t===p&&s.jsx(vC,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:d.answer})})]},p))]})})]})})},PC=()=>s.jsx(Dr,{children:s.jsxs(TC,{children:[s.jsxs(EC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsx("h1",{children:"About HospoHub"}),s.jsx("p",{children:"Transforming the Future of Hospitality Staffing"})]}),s.jsxs(LC,{children:[s.jsxs(vc,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[s.jsx("h2",{children:"Our Vision"}),s.jsx("p",{children:"HospoHub is revolutionizing the hospitality industry by creating a seamless connection between talented professionals and outstanding venues. We believe in building a more efficient, transparent, and dynamic hospitality sector where opportunities are accessible to all."})]}),s.jsxs(RC,{children:[s.jsxs(wc,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.3},children:[s.jsx(jc,{children:s.jsx(xa,{})}),s.jsx("h3",{children:"Innovation"}),s.jsx("p",{children:"Leveraging cutting-edge technology to transform traditional staffing processes into efficient, modern solutions."})]}),s.jsxs(wc,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},children:[s.jsx(jc,{children:s.jsx(Wy,{})}),s.jsx("h3",{children:"Community"}),s.jsx("p",{children:"Building a thriving ecosystem where hospitality professionals and businesses can grow together."})]}),s.jsxs(wc,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.5},children:[s.jsx(jc,{children:s.jsx(od,{})}),s.jsx("h3",{children:"Growth"}),s.jsx("p",{children:"Empowering businesses and professionals to reach their full potential through meaningful connections."})]})]}),s.jsxs(vc,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.6},children:[s.jsx("h2",{children:"Our Commitment"}),s.jsx("p",{children:"We are dedicated to maintaining the highest standards of service, security, and support. Our platform is built on the principles of transparency, efficiency, and mutual growth, ensuring that both businesses and professionals can thrive in the dynamic hospitality industry."})]}),s.jsxs(vc,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.7},children:[s.jsx("h2",{children:"Platform Features"}),s.jsxs(AC,{children:[s.jsx("li",{children:"Smart matching algorithm for perfect staff-venue fit"}),s.jsx("li",{children:"Real-time availability management"}),s.jsx("li",{children:"Secure communication channels"}),s.jsx("li",{children:"Verified profiles and reviews"}),s.jsx("li",{children:"Automated scheduling and time tracking"}),s.jsx("li",{children:"Comprehensive reporting and analytics"})]})]})]})]})}),TC=P.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 2rem 4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 100px 1.5rem 3rem;
  }
`,EC=P(W.div)`
  text-align: center;
  margin-bottom: 4rem;
  padding-top: 2rem;

  h1 {
    font-size: clamp(2.5rem, 5vw, 3rem);
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: clamp(1.1rem, 2vw, 1.2rem);
    color: #666;
  }
`,LC=P.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex: 1;
  margin-bottom: 4rem;
`,vc=P(W.div)`
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #000;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
  }
`,RC=P.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,wc=P(W.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #000;
  }

  p {
    color: #666;
    line-height: 1.5;
  }
`,jc=P.div`
  width: 48px;
  height: 48px;
  background: #000;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`,AC=P.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  li {
    position: relative;
    padding-left: 2rem;
    font-size: 1.1rem;
    color: #444;
    line-height: 1.4;

    &:before {
      content: "→";
      position: absolute;
      left: 0;
      color: #000;
      font-weight: bold;
    }
  }
`,IC=()=>{const[t,r]=R.useState({name:"",email:"",phone:"",company:"",subject:"",message:"",type:"general"}),[o,a]=R.useState(!1),u=d=>{const{name:p,value:m}=d.target;r(g=>({...g,[p]:m}))},h=async d=>{d.preventDefault();try{if(!(await fetch("http://localhost:3000/api/contact/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t,timestamp:new Date().toISOString()})})).ok)throw new Error("Failed to submit contact form");a(!0),r({name:"",email:"",phone:"",company:"",subject:"",message:"",type:"general"}),setTimeout(()=>{a(!1)},3e3)}catch(p){console.error("Contact form submission error:",p),alert("Failed to submit form. Please try again.")}};return s.jsx(Dr,{children:s.jsx(MC,{children:s.jsxs(VC,{children:[s.jsxs(DC,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:[s.jsxs(FC,{children:[s.jsx(Od,{}),s.jsx("h2",{children:"Get in Touch"})]}),s.jsx(zC,{children:"Have questions about HospoHub? We're here to help! Fill out the form and our team will get back to you promptly."}),s.jsxs(NC,{children:[s.jsxs(kc,{children:[s.jsx(ji,{}),s.jsxs("div",{children:[s.jsx("h3",{children:"Response Time"}),s.jsx("p",{children:"We typically respond within 24 hours during business days."})]})]}),s.jsxs(kc,{children:[s.jsx(_d,{}),s.jsxs("div",{children:[s.jsx("h3",{children:"Location"}),s.jsx("p",{children:"Stockholm, Sweden"})]})]}),s.jsxs(kc,{children:[s.jsx(Xa,{}),s.jsxs("div",{children:[s.jsx("h3",{children:"Support Hours"}),s.jsx("p",{children:"Monday - Friday: 9:00 - 17:00 CET"})]})]})]}),s.jsxs(_C,{children:[s.jsx("h3",{children:"Common Questions"}),s.jsxs(OC,{children:[s.jsxs(E0,{children:[s.jsx("h4",{children:"How do I join the platform?"}),s.jsx("p",{children:"Join our waitlist to be notified when we launch in your area."})]}),s.jsxs(E0,{children:[s.jsx("h4",{children:"What are the fees?"}),s.jsx("p",{children:"Contact us for a customized quote based on your business needs."})]})]})]})]}),s.jsx(BC,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5},children:o?s.jsxs(YC,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:[s.jsx(QC,{children:s.jsx(x0,{})}),s.jsx("h3",{children:"Message Sent!"}),s.jsx("p",{children:"We'll get back to you as soon as possible."})]}):s.jsxs(WC,{onSubmit:h,children:[s.jsx($C,{children:"Contact Form"}),s.jsx(UC,{children:"Fill out the form below and we'll be in touch shortly."}),s.jsxs(wr,{children:[s.jsx(jr,{children:"Inquiry Type"}),s.jsxs(HC,{name:"type",value:t.type,onChange:u,required:!0,children:[s.jsx("option",{value:"general",children:"General Inquiry"}),s.jsx("option",{value:"pricing",children:"Pricing Request"}),s.jsx("option",{value:"support",children:"Support"})]})]}),s.jsxs(wr,{children:[s.jsx(jr,{children:"Name"}),s.jsx(Co,{type:"text",name:"name",value:t.name,onChange:u,placeholder:"Your full name",required:!0})]}),s.jsxs(wr,{children:[s.jsx(jr,{children:"Email"}),s.jsx(Co,{type:"email",name:"email",value:t.email,onChange:u,placeholder:"Your email address",required:!0})]}),s.jsxs(wr,{children:[s.jsx(jr,{children:"Phone"}),s.jsx(Co,{type:"tel",name:"phone",value:t.phone,onChange:u,placeholder:"Your phone number",required:!0})]}),s.jsxs(wr,{children:[s.jsx(jr,{children:"Company (Optional)"}),s.jsx(Co,{type:"text",name:"company",value:t.company,onChange:u,placeholder:"Your company name"})]}),s.jsxs(wr,{children:[s.jsx(jr,{children:"Subject"}),s.jsx(Co,{type:"text",name:"subject",value:t.subject,onChange:u,placeholder:"Subject of your message",required:!0})]}),s.jsxs(wr,{children:[s.jsx(jr,{children:"Message"}),s.jsx(qC,{name:"message",value:t.message,onChange:u,placeholder:"How can we help you?",required:!0})]}),s.jsxs(GC,{type:"submit",children:["Send Message",s.jsx(x0,{})]})]})})]})})})},MC=P.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);

  @media (max-width: 768px) {
    padding: 100px 1.5rem 3rem;
  }
`,VC=P.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,DC=P(W.div)`
  padding: 2rem;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`,FC=P.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    width: 32px;
    height: 32px;
    color: #000;
  }

  h2 {
    font-size: 2rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,zC=P.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`,NC=P.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,kc=P.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    transform: translateX(5px);
  }

  svg {
    width: 24px;
    height: 24px;
    color: #000;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
    color: #000;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`,_C=P.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #000;
  }
`,OC=P.div`
  display: grid;
  gap: 1rem;
`,E0=P.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
    transform: translateX(5px);
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #000;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`,BC=P(W.div)`
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 2rem;
  }
`,$C=P.h1`
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,UC=P.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: clamp(1rem, 2vw, 1.1rem);
`,WC=P.form`
  display: grid;
  gap: 1.5rem;
`,wr=P.div``,jr=P.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #000;
  font-size: 0.9rem;
  font-weight: 600;
`,Co=P.input`
  width: 100%;
  padding: 1rem;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.08);
  }
`,HC=P.select`
  width: 100%;
  padding: 1rem;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;

  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.08);
  }
`,qC=P.textarea`
  width: 100%;
  padding: 1rem;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.08);
  }
`,GC=P.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,YC=P(W.div)`
  text-align: center;
  padding: 2rem 0;

  h3 {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem;
    color: #000;
  }

  p {
    color: #666;
    font-size: 1.1rem;
  }
`,QC=P.div`
  width: 64px;
  height: 64px;
  background: #000;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  svg {
    width: 32px;
    height: 32px;
    color: white;
  }
`,KC=P.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #fff;
`,XC=P.section`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);
`,ZC=P(W.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,JC=P(W.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #333;
  line-height: 1.6;
`,e3=P.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`,kr=P.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #000;
  }

  h3 {
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem;
    color: #000;
  }

  p {
    color: #333;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    
    li {
      color: #333;
      line-height: 1.8;
      margin-bottom: 0.5rem;
    }
  }
`,t3=P.p`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-top: 4rem;
`,n3=()=>s.jsx(Dr,{children:s.jsxs(KC,{children:[s.jsxs(XC,{children:[s.jsxs(ZC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsx(Ia,{})," Privacy Policy"]}),s.jsx(JC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"We are committed to protecting your privacy and ensuring the security of your personal information."})]}),s.jsxs(e3,{children:[s.jsxs(kr,{children:[s.jsx("h2",{children:"Introduction"}),s.jsx("p",{children:'This Privacy Policy explains how HospoHub ("we", "our", or "us") collects, uses, and protects your personal information when you use our platform. By using HospoHub, you agree to the collection and use of information in accordance with this policy.'})]}),s.jsxs(kr,{children:[s.jsx("h2",{children:"Information We Collect"}),s.jsx("h3",{children:"Personal Information"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Name and contact information"}),s.jsx("li",{children:"Professional experience and qualifications"}),s.jsx("li",{children:"Payment and banking details"}),s.jsx("li",{children:"Profile information and preferences"}),s.jsx("li",{children:"Communication history"})]}),s.jsx("h3",{children:"Usage Information"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Device and browser information"}),s.jsx("li",{children:"IP address and location data"}),s.jsx("li",{children:"Log data and activity patterns"}),s.jsx("li",{children:"Cookies and similar technologies"})]})]}),s.jsxs(kr,{children:[s.jsx("h2",{children:"How We Use Your Information"}),s.jsx("p",{children:"We use your information to:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Provide and improve our services"}),s.jsx("li",{children:"Match workers with businesses"}),s.jsx("li",{children:"Process payments and transactions"}),s.jsx("li",{children:"Communicate with you about our services"}),s.jsx("li",{children:"Ensure platform security and prevent fraud"}),s.jsx("li",{children:"Comply with legal obligations"})]})]}),s.jsxs(kr,{children:[s.jsx("h2",{children:"Data Security"}),s.jsx("p",{children:"We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Encryption of sensitive data"}),s.jsx("li",{children:"Regular security assessments"}),s.jsx("li",{children:"Secure data storage systems"}),s.jsx("li",{children:"Access controls and authentication"}),s.jsx("li",{children:"Employee training on data protection"})]})]}),s.jsxs(kr,{children:[s.jsx("h2",{children:"Data Sharing"}),s.jsx("p",{children:"We may share your information with:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Platform users (workers/businesses) as necessary for service delivery"}),s.jsx("li",{children:"Payment processors and financial institutions"}),s.jsx("li",{children:"Service providers and partners"}),s.jsx("li",{children:"Legal authorities when required by law"})]})]}),s.jsxs(kr,{children:[s.jsx("h2",{children:"Your Rights"}),s.jsx("p",{children:"You have the right to:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Access your personal information"}),s.jsx("li",{children:"Correct inaccurate data"}),s.jsx("li",{children:"Request deletion of your data"}),s.jsx("li",{children:"Object to data processing"}),s.jsx("li",{children:"Withdraw consent"}),s.jsx("li",{children:"Data portability"})]})]}),s.jsxs(kr,{children:[s.jsx("h2",{children:"Contact Us"}),s.jsx("p",{children:"If you have any questions about this Privacy Policy or our data practices, please contact us through our website's contact form. Our data protection team will review your inquiry and respond accordingly."}),s.jsx("p",{children:'For urgent matters related to data protection or to exercise your rights under GDPR, please use the dedicated form on our contact page and mark it as "Data Protection Request".'})]}),s.jsxs(t3,{children:["Last updated: ",new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})]})]})]})}),r3=P.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #fff;
`,i3=P.section`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);
`,o3=P(W.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,s3=P(W.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #333;
  line-height: 1.6;
`,a3=P.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`,yn=P.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #000;
  }

  h3 {
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem;
    color: #000;
  }

  p {
    color: #333;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  ul {
    list-style: disc;
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
    
    li {
      color: #333;
      line-height: 1.8;
      margin-bottom: 0.5rem;
    }
  }
`,l3=P.p`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  margin-top: 4rem;
`,u3=()=>s.jsx(Dr,{children:s.jsxs(r3,{children:[s.jsxs(i3,{children:[s.jsxs(o3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsx(Pb,{})," Terms of Service"]}),s.jsx(s3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"Please read these terms and conditions carefully before using the HospoHub platform."})]}),s.jsxs(a3,{children:[s.jsxs(yn,{children:[s.jsx("h2",{children:"1. Agreement to Terms"}),s.jsx("p",{children:"By accessing or using HospoHub, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing HospoHub."})]}),s.jsxs(yn,{children:[s.jsx("h2",{children:"2. Use License"}),s.jsx("p",{children:"Permission is granted to temporarily access and use HospoHub for personal or business purposes, subject to the following conditions:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"You must not modify or copy the materials"}),s.jsx("li",{children:"You must not use the materials for any commercial purpose without our consent"}),s.jsx("li",{children:"You must not attempt to decompile or reverse engineer any software"}),s.jsx("li",{children:"You must not remove any copyright or proprietary notations"})]})]}),s.jsxs(yn,{children:[s.jsx("h2",{children:"3. User Accounts"}),s.jsx("h3",{children:"Account Creation"}),s.jsxs("ul",{children:[s.jsx("li",{children:"You must provide accurate and complete information"}),s.jsx("li",{children:"You are responsible for maintaining account security"}),s.jsx("li",{children:"You must not share account credentials"}),s.jsx("li",{children:"You must notify us of any security breaches"})]}),s.jsx("h3",{children:"Account Termination"}),s.jsx("p",{children:"We reserve the right to terminate or suspend accounts for violations of these terms or any other reason at our sole discretion."})]}),s.jsxs(yn,{children:[s.jsx("h2",{children:"4. Platform Rules"}),s.jsx("h3",{children:"For Businesses"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Must provide accurate job descriptions"}),s.jsx("li",{children:"Must pay workers as agreed"}),s.jsx("li",{children:"Must maintain a safe work environment"}),s.jsx("li",{children:"Must comply with labor laws"})]}),s.jsx("h3",{children:"For Workers"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Must provide accurate qualifications"}),s.jsx("li",{children:"Must complete accepted assignments"}),s.jsx("li",{children:"Must maintain professional conduct"}),s.jsx("li",{children:"Must report accurately worked hours"})]})]}),s.jsxs(yn,{children:[s.jsx("h2",{children:"5. Payments and Fees"}),s.jsx("p",{children:"HospoHub pricing is available upon request. Contact us for a customized quote based on your business needs. Additional terms:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"All payments are processed securely through our platform"}),s.jsx("li",{children:"Billing occurs on a monthly basis"}),s.jsx("li",{children:"Refunds are handled on a case-by-case basis"}),s.jsx("li",{children:"Late payments may result in service suspension"})]})]}),s.jsxs(yn,{children:[s.jsx("h2",{children:"6. Liability"}),s.jsx("p",{children:"HospoHub is not liable for:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Disputes between users"}),s.jsx("li",{children:"Quality of work performed"}),s.jsx("li",{children:"User-generated content"}),s.jsx("li",{children:"Loss of data or profits"}),s.jsx("li",{children:"System downtime or errors"})]})]}),s.jsxs(yn,{children:[s.jsx("h2",{children:"7. Intellectual Property"}),s.jsx("p",{children:"All content and materials available on HospoHub are protected by intellectual property rights. Users may not:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"Copy or reproduce platform content"}),s.jsx("li",{children:"Modify or create derivative works"}),s.jsx("li",{children:"Distribute or transmit content"}),s.jsx("li",{children:"Use content for commercial purposes"})]})]}),s.jsxs(yn,{children:[s.jsx("h2",{children:"8. Governing Law"}),s.jsx("p",{children:"These terms shall be governed by and construed in accordance with the laws of Sweden. Any disputes shall be subject to the exclusive jurisdiction of the courts of Sweden."})]}),s.jsxs(yn,{children:[s.jsx("h2",{children:"9. Contact Information"}),s.jsx("p",{children:"For any questions regarding these Terms of Service, please contact us through our website's contact form."})]}),s.jsxs(l3,{children:["Last updated: ",new Date().toLocaleDateString("en-US",{month:"long",year:"numeric"})]})]})]})}),c3=P.div`
  min-height: 100vh;
  padding-top: 80px;
  background: #fff;
`,d3=P.section`
  padding: 6rem 2rem;
  text-align: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);
`,f3=P(W.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,h3=P(W.p)`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  max-width: 800px;
  margin: 0 auto 3rem;
  color: #333;
  line-height: 1.6;
`,p3=P.div`
  max-width: 600px;
  margin: 0 auto 2rem;
  position: relative;
`,m3=P.input`
  width: 100%;
  padding: 1rem 1.5rem;
  padding-left: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #000;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`,g3=P(Hy)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 1.2rem;
`,y3=P.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`,x3=P.div`
  margin-bottom: 4rem;
`,v3=P.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #000;
`,w3=P.div`
  margin-bottom: 1rem;
`,j3=P.button`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: #000000;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  svg {
    color: #333333;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`,k3=P(W.div)`
  padding: 1.5rem;
  color: #333333;
  line-height: 1.6;
  background: rgba(255, 255, 255, 0.9);
  margin-top: 2px;
  border-radius: 0 0 8px 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,S3=()=>{const[t,r]=R.useState(null),[o,a]=R.useState(""),u={general:{title:"General Questions",items:[{question:"What is HospoHub?",answer:"HospoHub is an innovative platform connecting hospitality businesses with qualified staff for short-term work opportunities. We provide a seamless solution for both venues needing temporary staff and professionals looking for flexible work arrangements."},{question:"When is the app launching?",answer:"We're currently in the final stages of development and plan to launch soon. Join our waitlist to be among the first to access the app and receive exclusive early-bird benefits."},{question:"Is HospoHub available in my area?",answer:"We're initially launching in major Swedish cities and plan to expand to other locations based on demand. Sign up for our waitlist to be notified when we launch in your area."}]},businesses:{title:"For Businesses",items:[{question:"How much does it cost to use HospoHub?",answer:"Businesses pay a monthly subscription fee of 2,000 SEK, which includes unlimited job postings, access to verified workers, smart matching, and all platform features."},{question:"How does the staff verification process work?",answer:"We conduct thorough background checks, verify work history, and validate qualifications for all staff members. Each professional goes through a multi-step verification process before being able to accept gigs."},{question:"What happens if a worker doesn't show up?",answer:"We have a reliable backup system in place. If a worker doesn't show up, you'll receive instant notifications, and we'll immediately connect you with available backup staff in your area. We also have measures to prevent no-shows and maintain high reliability."},{question:"Can I set specific requirements for staff?",answer:"Yes, you can specify requirements such as experience level, certifications, language skills, and specific qualifications needed for each role."}]},workers:{title:"For Workers",items:[{question:"Is it free to use HospoHub as a worker?",answer:"Yes, workers can use HospoHub completely free of charge. There are no fees or commissions taken from your earnings."},{question:"How do I get paid?",answer:"Payments are processed securely through our platform. After completing a shift and receiving approval, funds are automatically transferred to your linked bank account within 1-3 business days."},{question:"Can I choose my own schedule?",answer:"Absolutely! You have complete flexibility to set your availability and choose which gigs to accept. Work as much or as little as you want."},{question:"What types of jobs are available?",answer:"We offer various hospitality roles including servers, bartenders, kitchen staff, event staff, and more. Jobs can range from a few hours to several days."}]},technical:{title:"Technical Questions",items:[{question:"How do I reset my password?",answer:"You can reset your password through the 'Forgot Password' link on the login page. We'll send you a secure link to reset your password via email."},{question:"What devices can I use HospoHub on?",answer:"HospoHub is available as both a web application and mobile app (iOS and Android). You can access your account from any device with an internet connection."},{question:"Is my data secure?",answer:"Yes, we use industry-standard encryption and security measures to protect your data. All personal and payment information is encrypted and stored securely."}]},payments:{title:"Payments & Billing",items:[{question:"What payment methods are accepted?",answer:"We accept all major credit cards, direct bank transfers, and popular digital payment methods. Businesses can also set up automatic monthly billing."},{question:"How are cancellations handled?",answer:"Cancellation policies vary depending on the timing and circumstances. Generally, businesses must cancel at least 24 hours in advance to avoid charges, and workers must maintain a reliable attendance record."},{question:"Is there a minimum commitment period?",answer:"No, businesses can cancel their subscription at any time. There are no long-term contracts or minimum commitment periods."}]}},h=o?Object.entries(u).reduce((d,[p,m])=>{const g=m.items.filter(x=>x.question.toLowerCase().includes(o.toLowerCase())||x.answer.toLowerCase().includes(o.toLowerCase()));return g.length>0&&(d[p]={...m,items:g}),d},{}):u;return s.jsx(Dr,{children:s.jsxs(c3,{children:[s.jsxs(d3,{children:[s.jsxs(f3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsx(Eo,{})," Frequently Asked Questions"]}),s.jsx(h3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"Find answers to common questions about HospoHub. Can't find what you're looking for? Contact our support team."}),s.jsxs(p3,{children:[s.jsx(g3,{}),s.jsx(m3,{type:"text",placeholder:"Search FAQs...",value:o,onChange:d=>a(d.target.value)})]})]}),s.jsx(y3,{children:Object.entries(h).map(([d,p])=>s.jsxs(x3,{children:[s.jsx(v3,{children:p.title}),p.items.map((m,g)=>s.jsxs(w3,{as:W.div,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:g*.1},children:[s.jsxs(j3,{onClick:()=>r(t===`${d}-${g}`?null:`${d}-${g}`),"aria-expanded":t===`${d}-${g}`,children:[m.question,s.jsx(Uy,{})]}),s.jsx(Li,{children:t===`${d}-${g}`&&s.jsx(k3,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:m.answer})})]},g))]},d))})]})})},b3=P.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);
  padding: 2rem;
`,C3=P(W.div)`
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`,P3=P.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,T3=P.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,L0=P.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #000;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`,E3=P.button`
  background: #000;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`,L3=P.div`
  color: #ff4444;
  text-align: center;
  font-size: 0.9rem;
`,R3="http://localhost:3000/api",A3=()=>{const[t,r]=R.useState(""),[o,a]=R.useState(""),[u,h]=R.useState(""),[d,p]=R.useState(!1),m=Uo();R.useEffect(()=>{localStorage.getItem("adminToken")&&m("/admin/dashboard")},[m]);const g=async x=>{x.preventDefault(),h(""),p(!0);try{const v=await fetch(`${R3}/admin/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:o})}),w=await v.json();if(!v.ok)throw new Error(w.message||"Login failed");localStorage.setItem("adminToken",w.token),m("/admin/dashboard")}catch(v){h(v.message),a("")}finally{p(!1)}};return s.jsx(Dr,{children:s.jsx(b3,{children:s.jsxs(C3,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsxs(P3,{children:[s.jsx(Lb,{})," Admin Login"]}),u&&s.jsx(L3,{children:u}),s.jsxs(T3,{onSubmit:g,children:[s.jsx(L0,{type:"text",placeholder:"Username",value:t,onChange:x=>r(x.target.value),required:!0,disabled:d}),s.jsx(L0,{type:"password",placeholder:"Password",value:o,onChange:x=>a(x.target.value),required:!0,disabled:d}),s.jsx(E3,{type:"submit",disabled:d,children:d?"Logging in...":"Login"})]})]})})})};var Sc={exports:{}},bc,R0;function I3(){if(R0)return bc;R0=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return bc=t,bc}var Cc,A0;function M3(){if(A0)return Cc;A0=1;var t=I3();function r(){}function o(){}return o.resetWarningCache=r,Cc=function(){function a(d,p,m,g,x,v){if(v!==t){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}a.isRequired=a;function u(){return a}var h={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:u,element:a,elementType:a,instanceOf:u,node:a,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u,checkPropTypes:o,resetWarningCache:r};return h.PropTypes=h,h},Cc}var I0;function V3(){return I0||(I0=1,Sc.exports=M3()()),Sc.exports}var D3=V3();const ke=ad(D3),Gy=({isOpen:t,onClose:r,signup:o,type:a})=>{if(!t||!o)return null;const u=p=>!p||!Array.isArray(p)?"Not specified":p.map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(", "),h=p=>({restaurant:"Restaurant",bar:"Bar",cafe:"Café",hotel:"Hotel",nightclub:"Nightclub",other:"Other"})[p]||p,d=p=>({search:"Search Engine",social:"Social Media",referral:"Referral",advertisement:"Advertisement",other:"Other"})[p]||p;return s.jsx(Li,{children:s.jsx(F3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:r,children:s.jsxs(z3,{onClick:p=>p.stopPropagation(),initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.95},children:[s.jsx(N3,{onClick:r,children:s.jsx(Za,{})}),s.jsxs(_3,{children:[s.jsx(O3,{children:a==="worker"?"Worker Details":"Business Details"}),s.jsxs(B3,{children:[s.jsx(ji,{}),"Signed up: ",new Date(o.timestamp).toLocaleString()]})]}),s.jsxs($3,{children:[s.jsxs(Qt,{children:[s.jsx(Kt,{children:s.jsx(Ma,{})}),s.jsxs(Xt,{children:[s.jsx(Zt,{children:"Name"}),s.jsx(sn,{children:o.name})]})]}),s.jsxs(Qt,{children:[s.jsx(Kt,{children:s.jsx(Xa,{})}),s.jsxs(Xt,{children:[s.jsx(Zt,{children:"Email"}),s.jsx(sn,{children:o.email})]})]}),s.jsxs(Qt,{children:[s.jsx(Kt,{children:s.jsx(Bd,{})}),s.jsxs(Xt,{children:[s.jsx(Zt,{children:"Phone"}),s.jsx(sn,{children:o.phone})]})]}),a==="business"&&s.jsxs(s.Fragment,{children:[s.jsxs(Qt,{children:[s.jsx(Kt,{children:s.jsx(Bo,{})}),s.jsxs(Xt,{children:[s.jsx(Zt,{children:"Company"}),s.jsx(sn,{children:o.company})]})]}),s.jsxs(Qt,{children:[s.jsx(Kt,{children:s.jsx(y0,{})}),s.jsxs(Xt,{children:[s.jsx(Zt,{children:"Business Type"}),s.jsx(sn,{children:h(o.businessType)})]})]}),s.jsxs(Qt,{children:[s.jsx(Kt,{children:s.jsx(qy,{})}),s.jsxs(Xt,{children:[s.jsx(Zt,{children:"Number of Employees"}),s.jsx(sn,{children:o.employeeCount})]})]}),s.jsxs(Qt,{children:[s.jsx(Kt,{children:s.jsx(y0,{})}),s.jsxs(Xt,{children:[s.jsx(Zt,{children:"Business Description"}),s.jsx(sn,{children:o.description})]})]}),s.jsxs(Qt,{children:[s.jsx(Kt,{children:s.jsx(Hy,{})}),s.jsxs(Xt,{children:[s.jsx(Zt,{children:"How they found us"}),s.jsx(sn,{children:d(o.foundUs)})]})]}),s.jsxs(Qt,{children:[s.jsx(Kt,{children:s.jsx(Sb,{})}),s.jsxs(Xt,{children:[s.jsx(Zt,{children:"Preferred Contact Methods"}),s.jsx(sn,{children:u(o.preferredContact)})]})]}),s.jsxs(Qt,{children:[s.jsx(Kt,{children:s.jsx($,{})}),s.jsxs(Xt,{children:[s.jsx(Zt,{children:"Consent"}),s.jsxs(U3,{children:[s.jsx(M0,{accepted:o.acceptTerms,children:"Terms and Conditions"}),s.jsx(M0,{accepted:o.acceptMarketing,children:"Marketing Communications"})]})]})]})]}),s.jsxs(Qt,{children:[s.jsx(Kt,{children:s.jsx(_d,{})}),s.jsxs(Xt,{children:[s.jsx(Zt,{children:"Location"}),s.jsx(sn,{children:o.location})]})]})]})]})})})};Gy.propTypes={isOpen:ke.bool.isRequired,onClose:ke.func.isRequired,type:ke.oneOf(["worker","business"]).isRequired,signup:ke.shape({timestamp:ke.string,name:ke.string.isRequired,email:ke.string.isRequired,phone:ke.string.isRequired,company:ke.string,businessType:ke.string,employeeCount:ke.string,description:ke.string,foundUs:ke.string,preferredContact:ke.arrayOf(ke.string),acceptTerms:ke.bool,acceptMarketing:ke.bool,location:ke.string.isRequired})};const F3=P(W.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`,z3=P(W.div)`
  background: white;
  border-radius: 24px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 85vh;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  overflow-y: auto;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 95%;
    max-height: 80vh;
  }
`,N3=P.button`
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 2;

  svg {
    width: 20px;
    height: 20px;
    color: #000;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: rotate(90deg);
  }
`,_3=P.div`
  margin-bottom: 2rem;
  position: sticky;
  top: 0;
  background: white;
  padding: 0.5rem 0;
  z-index: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`,O3=P.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,B3=P.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;

  svg {
    width: 16px;
    height: 16px;
  }
`,$3=P.div`
  display: grid;
  gap: 1.5rem;
  padding-top: 0.5rem;
`,Qt=P.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`,Kt=P.div`
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: #000;
  }
`,Xt=P.div`
  flex: 1;
`,Zt=P.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
`,sn=P.div`
  font-size: 1.1rem;
  color: #000;
  font-weight: 500;
`,U3=P.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,M0=P.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${t=>t.accepted?"#000":"#666"};
  font-size: 1rem;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${t=>t.accepted?"#00c853":"#ff3d00"};
  }
`,Yy=({isOpen:t,onClose:r,submission:o,onUpdateStatus:a})=>{if(!t||!o)return null;const u={new:"#ff9800",inProgress:"#2196f3",completed:"#4caf50"},h={new:"New",inProgress:"In Progress",completed:"Completed"},d=async p=>{try{const m=localStorage.getItem("adminToken");if(!(await fetch(`http://localhost:3000/api/admin/contact/${o.id}/status`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${m}`},body:JSON.stringify({status:p})})).ok)throw new Error("Failed to update status");a(o.id,p)}catch(m){console.error("Error updating status:",m),alert("Failed to update status")}};return s.jsx(Li,{children:s.jsx(W3,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:r,children:s.jsxs(H3,{onClick:p=>p.stopPropagation(),initial:{opacity:0,y:20,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.95},children:[s.jsx(q3,{onClick:r,children:s.jsx(Za,{})}),s.jsxs(G3,{children:[s.jsx(Y3,{children:"Contact Form Submission"}),s.jsxs(Q3,{children:[s.jsx(ji,{}),"Submitted: ",new Date(o.timestamp).toLocaleString()]})]}),s.jsxs(K3,{children:[s.jsx(X3,{children:"Status:"}),s.jsx(Z3,{children:Object.entries(h).map(([p,m])=>s.jsxs(J3,{$isActive:o.status===p,$color:u[p],onClick:()=>d(p),children:[s.jsx(Cb,{}),m]},p))})]}),s.jsxs(e5,{children:[s.jsxs(fi,{children:[s.jsx(hi,{children:s.jsx(Ib,{})}),s.jsxs(pi,{children:[s.jsx(Sr,{children:"Inquiry Type"}),s.jsx(mi,{children:o.type})]})]}),s.jsxs(fi,{children:[s.jsx(hi,{children:s.jsx(Ma,{})}),s.jsxs(pi,{children:[s.jsx(Sr,{children:"Name"}),s.jsx(mi,{children:o.name})]})]}),s.jsxs(fi,{children:[s.jsx(hi,{children:s.jsx(Xa,{})}),s.jsxs(pi,{children:[s.jsx(Sr,{children:"Email"}),s.jsx(mi,{children:o.email})]})]}),s.jsxs(fi,{children:[s.jsx(hi,{children:s.jsx(Bd,{})}),s.jsxs(pi,{children:[s.jsx(Sr,{children:"Phone"}),s.jsx(mi,{children:o.phone})]})]}),o.company&&s.jsxs(fi,{children:[s.jsx(hi,{children:s.jsx(Bo,{})}),s.jsxs(pi,{children:[s.jsx(Sr,{children:"Company"}),s.jsx(mi,{children:o.company})]})]}),s.jsxs(fi,{children:[s.jsx(hi,{children:s.jsx(Od,{})}),s.jsxs(pi,{children:[s.jsx(Sr,{children:"Subject"}),s.jsx(mi,{children:o.subject})]})]}),s.jsxs(t5,{children:[s.jsx(Sr,{children:"Message"}),s.jsx(n5,{children:o.message})]})]})]})})})};Yy.propTypes={isOpen:ke.bool.isRequired,onClose:ke.func.isRequired,onUpdateStatus:ke.func.isRequired,submission:ke.shape({id:ke.string.isRequired,timestamp:ke.string.isRequired,type:ke.string.isRequired,name:ke.string.isRequired,email:ke.string.isRequired,phone:ke.string.isRequired,company:ke.string,subject:ke.string.isRequired,message:ke.string.isRequired,status:ke.oneOf(["new","inProgress","completed"]).isRequired})};const W3=P(W.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`,H3=P(W.div)`
  background: white;
  border-radius: 24px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 85vh;
  position: relative;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 95%;
    max-height: 80vh;
  }
`,q3=P.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
    color: #000;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    transform: rotate(90deg);
  }
`,G3=P.div`
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
`,Y3=P.h2`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Q3=P.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.9rem;

  svg {
    width: 16px;
    height: 16px;
  }
`,K3=P.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
`,X3=P.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000;
  margin-bottom: 0.5rem;
`,Z3=P.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,J3=P.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${t=>t.$isActive?t.$color:"transparent"};
  color: ${t=>t.$isActive?"white":t.$color};
  border: 1px solid ${t=>t.$color};

  svg {
    width: 16px;
    height: 16px;
    opacity: ${t=>t.$isActive?1:.5};
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,e5=P.div`
  display: grid;
  gap: 1.5rem;
`,fi=P.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.04);
  }
`,hi=P.div`
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    color: #000;
  }
`,pi=P.div`
  flex: 1;
`,Sr=P.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.25rem;
`,mi=P.div`
  font-size: 1rem;
  color: #000;
`,t5=P.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 12px;
`,n5=P.div`
  font-size: 1rem;
  color: #000;
  white-space: pre-wrap;
  line-height: 1.5;
`,r5="http://localhost:3000/api",Pc=P.div`
  min-height: 100vh;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.05) 100%);
`,Tc=P.header`
  background: white;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`,Ec=P.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Lc=P(Fa)`
  font-weight: 800;
  font-size: 1.8rem;
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,i5=P.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  h2 {
    font-size: 1.2rem;
    color: #333;
    margin: 0;
  }
`,o5=P.button`
  background: #000;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,Rc=P.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,s5=P.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`,Ac=P(W.div)`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 2.5rem;
    margin: 0;
  }

  p {
    color: #666;
    margin: 0;
  }

  .icon {
    font-size: 2rem;
    color: #000;
  }
`,a5=P.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`,Ic=P.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,sd=P(W.div)`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  .content {
    flex: 1;
  }

  h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }

  .arrow {
    color: #666;
    transition: transform 0.3s ease;
  }

  &:hover .arrow {
    transform: translateX(5px);
  }
`,l5=P(sd)`
  border-left: 4px solid ${t=>{switch(t.$status){case"new":return"#ff9800";case"inProgress":return"#2196f3";case"completed":return"#4caf50";default:return"#666"}}};
`,u5=P.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-top: 0.5rem;
  background: ${t=>{switch(t.$status){case"new":return"#fff3e0";case"inProgress":return"#e3f2fd";case"completed":return"#e8f5e9";default:return"#f5f5f5"}}};
  color: ${t=>{switch(t.$status){case"new":return"#ff9800";case"inProgress":return"#2196f3";case"completed":return"#4caf50";default:return"#666"}}};
`,c5=()=>{const[t,r]=R.useState({workerSignups:[],businessSignups:[],contactSubmissions:[]}),[o,a]=R.useState(!0),[u,h]=R.useState(null),[d,p]=R.useState(null),[m,g]=R.useState(null),[x,v]=R.useState(null),w=Uo(),k=async()=>{try{const I=localStorage.getItem("adminToken");if(!I){w("/admin/login");return}const L=await fetch(`${r5}/admin/dashboard`,{headers:{Authorization:`Bearer ${I}`}});if(!L.ok){if(L.status===401||L.status===403){localStorage.removeItem("adminToken"),w("/admin/login");return}throw new Error("Failed to fetch dashboard data")}const N=await L.json();r(N),h(null)}catch(I){console.error("Error fetching dashboard data:",I),h("Failed to load dashboard data")}finally{a(!1)}};R.useEffect(()=>{k();const I=setInterval(k,3e4);return()=>clearInterval(I)},[w]);const E=()=>{localStorage.removeItem("adminToken"),w("/admin/login")},T=(I,L)=>{p(I),v(L)},D=I=>{g(I)},F=(I,L)=>{r(N=>({...N,contactSubmissions:N.contactSubmissions.map(q=>q.id===I?{...q,status:L}:q)}))};return o?s.jsxs(Pc,{children:[s.jsx(Tc,{children:s.jsx(Ec,{children:s.jsx(Lc,{to:"/",children:"HospoHub"})})}),s.jsx(Rc,{children:s.jsx("div",{style:{textAlign:"center",padding:"2rem"},children:"Loading..."})})]}):u?s.jsxs(Pc,{children:[s.jsx(Tc,{children:s.jsx(Ec,{children:s.jsx(Lc,{to:"/",children:"HospoHub"})})}),s.jsx(Rc,{children:s.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"red"},children:u})})]}):s.jsxs(Pc,{children:[s.jsx(Tc,{children:s.jsxs(Ec,{children:[s.jsx(Lc,{to:"/",children:"HospoHub"}),s.jsxs(i5,{children:[s.jsx("h2",{children:"Welcome back, Admin"}),s.jsxs(o5,{onClick:E,children:[s.jsx(Rb,{})," Logout"]})]})]})}),s.jsxs(Rc,{children:[s.jsxs(s5,{children:[s.jsxs(Ac,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[s.jsx(qy,{className:"icon"}),s.jsx("h2",{children:t.workerSignups.length}),s.jsx("p",{children:"Worker Signups"})]}),s.jsxs(Ac,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.1},children:[s.jsx(Bo,{className:"icon"}),s.jsx("h2",{children:t.businessSignups.length}),s.jsx("p",{children:"Business Signups"})]}),s.jsxs(Ac,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[s.jsx(Od,{className:"icon"}),s.jsx("h2",{children:t.contactSubmissions.length}),s.jsx("p",{children:"Contact Submissions"})]})]}),s.jsxs(a5,{children:[s.jsxs(Ic,{children:[s.jsx("h3",{children:"Recent Worker Signups"}),t.workerSignups.slice(-5).reverse().map((I,L)=>s.jsxs(sd,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5,delay:L*.1},onClick:()=>T(I,"worker"),children:[s.jsxs("div",{className:"content",children:[s.jsx("h4",{children:I.name}),s.jsx("p",{children:I.email}),s.jsxs("p",{children:["Signed up: ",new Date(I.timestamp).toLocaleDateString()]})]}),s.jsx(pc,{className:"arrow"})]},L))]}),s.jsxs(Ic,{children:[s.jsx("h3",{children:"Recent Business Signups"}),t.businessSignups.slice(-5).reverse().map((I,L)=>s.jsxs(sd,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:L*.1},onClick:()=>T(I,"business"),children:[s.jsxs("div",{className:"content",children:[s.jsx("h4",{children:I.businessName||I.company}),s.jsx("p",{children:I.email}),s.jsxs("p",{children:["Signed up: ",new Date(I.timestamp).toLocaleDateString()]})]}),s.jsx(pc,{className:"arrow"})]},L))]}),s.jsxs(Ic,{children:[s.jsx("h3",{children:"Recent Contact Submissions"}),t.contactSubmissions.slice(-5).reverse().map((I,L)=>s.jsxs(l5,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.5,delay:L*.1},onClick:()=>D(I),$status:I.status,children:[s.jsxs("div",{className:"content",children:[s.jsx("h4",{children:I.subject}),s.jsxs("p",{children:[I.name," - ",I.email]}),s.jsxs("p",{children:["Submitted: ",new Date(I.timestamp).toLocaleDateString()]}),s.jsx(u5,{$status:I.status,children:I.status.charAt(0).toUpperCase()+I.status.slice(1)})]}),s.jsx(pc,{className:"arrow"})]},L))]})]}),s.jsx(Gy,{isOpen:!!d,onClose:()=>p(null),signup:d,type:x}),s.jsx(Yy,{isOpen:!!m,onClose:()=>g(null),submission:m,onUpdateStatus:F})]})]})},d5="http://localhost:3000/api",f5=({children:t})=>{const r=Uo(),[o,a]=R.useState(!0);return R.useEffect(()=>{const u=async()=>{const d=localStorage.getItem("adminToken");if(!d){r("/admin/login");return}try{if(!(await fetch(`${d5}/admin/dashboard`,{headers:{Authorization:`Bearer ${d}`}})).ok)throw new Error("Token invalid");a(!1)}catch{localStorage.removeItem("adminToken"),r("/admin/login")}};u();const h=setInterval(u,6e4);return()=>clearInterval(h)},[r]),o?null:t},h5=()=>s.jsxs(J1,{children:[s.jsx(ij,{}),s.jsxs(q1,{children:[s.jsx(xn,{path:"/",element:s.jsx(CC,{})}),s.jsx(xn,{path:"/about",element:s.jsx(PC,{})}),s.jsx(xn,{path:"/contact",element:s.jsx(IC,{})}),s.jsx(xn,{path:"/privacy",element:s.jsx(n3,{})}),s.jsx(xn,{path:"/terms",element:s.jsx(u3,{})}),s.jsx(xn,{path:"/faq",element:s.jsx(S3,{})}),s.jsx(xn,{path:"/admin/login",element:s.jsx(A3,{})}),s.jsx(xn,{path:"/admin/dashboard",element:s.jsx(f5,{children:s.jsx(c5,{})})})]})]});t1.createRoot(document.getElementById("root")).render(s.jsx(Ge.StrictMode,{children:s.jsx(h5,{})}));
