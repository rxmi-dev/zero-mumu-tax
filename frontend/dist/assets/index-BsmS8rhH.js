function ST(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(n,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var lc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Je(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rp={exports:{}},zo={},np={exports:{}},Me={};var C1;function NT(){if(C1)return Me;C1=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=m&&I[m]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,_={};function x(I,L,ie){this.props=I,this.context=L,this.refs=_,this.updater=ie||b}x.prototype.isReactComponent={},x.prototype.setState=function(I,L){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,L,"setState")},x.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function S(){}S.prototype=x.prototype;function C(I,L,ie){this.props=I,this.context=L,this.refs=_,this.updater=ie||b}var O=C.prototype=new S;O.constructor=C,w(O,x.prototype),O.isPureReactComponent=!0;var E=Array.isArray,A=Object.prototype.hasOwnProperty,N={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function R(I,L,ie){var pe,fe={},ve=null,ge=null;if(L!=null)for(pe in L.ref!==void 0&&(ge=L.ref),L.key!==void 0&&(ve=""+L.key),L)A.call(L,pe)&&!P.hasOwnProperty(pe)&&(fe[pe]=L[pe]);var me=arguments.length-2;if(me===1)fe.children=ie;else if(1<me){for(var ae=Array(me),Se=0;Se<me;Se++)ae[Se]=arguments[Se+2];fe.children=ae}if(I&&I.defaultProps)for(pe in me=I.defaultProps,me)fe[pe]===void 0&&(fe[pe]=me[pe]);return{$$typeof:e,type:I,key:ve,ref:ge,props:fe,_owner:N.current}}function D(I,L){return{$$typeof:e,type:I.type,key:L,ref:I.ref,props:I.props,_owner:I._owner}}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===e}function q(I){var L={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ie){return L[ie]})}var M=/\/+/g;function H(I,L){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):L.toString(36)}function B(I,L,ie,pe,fe){var ve=typeof I;(ve==="undefined"||ve==="boolean")&&(I=null);var ge=!1;if(I===null)ge=!0;else switch(ve){case"string":case"number":ge=!0;break;case"object":switch(I.$$typeof){case e:case t:ge=!0}}if(ge)return ge=I,fe=fe(ge),I=pe===""?"."+H(ge,0):pe,E(fe)?(ie="",I!=null&&(ie=I.replace(M,"$&/")+"/"),B(fe,L,ie,"",function(Se){return Se})):fe!=null&&(G(fe)&&(fe=D(fe,ie+(!fe.key||ge&&ge.key===fe.key?"":(""+fe.key).replace(M,"$&/")+"/")+I)),L.push(fe)),1;if(ge=0,pe=pe===""?".":pe+":",E(I))for(var me=0;me<I.length;me++){ve=I[me];var ae=pe+H(ve,me);ge+=B(ve,L,ie,ae,fe)}else if(ae=v(I),typeof ae=="function")for(I=ae.call(I),me=0;!(ve=I.next()).done;)ve=ve.value,ae=pe+H(ve,me++),ge+=B(ve,L,ie,ae,fe);else if(ve==="object")throw L=String(I),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.");return ge}function F(I,L,ie){if(I==null)return I;var pe=[],fe=0;return B(I,pe,"","",function(ve){return L.call(ie,ve,fe++)}),pe}function Y(I){if(I._status===-1){var L=I._result;L=L(),L.then(function(ie){(I._status===0||I._status===-1)&&(I._status=1,I._result=ie)},function(ie){(I._status===0||I._status===-1)&&(I._status=2,I._result=ie)}),I._status===-1&&(I._status=0,I._result=L)}if(I._status===1)return I._result.default;throw I._result}var J={current:null},U={transition:null},X={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:U,ReactCurrentOwner:N};function K(){throw Error("act(...) is not supported in production builds of React.")}return Me.Children={map:F,forEach:function(I,L,ie){F(I,function(){L.apply(this,arguments)},ie)},count:function(I){var L=0;return F(I,function(){L++}),L},toArray:function(I){return F(I,function(L){return L})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},Me.Component=x,Me.Fragment=r,Me.Profiler=a,Me.PureComponent=C,Me.StrictMode=n,Me.Suspense=f,Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,Me.act=K,Me.cloneElement=function(I,L,ie){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var pe=w({},I.props),fe=I.key,ve=I.ref,ge=I._owner;if(L!=null){if(L.ref!==void 0&&(ve=L.ref,ge=N.current),L.key!==void 0&&(fe=""+L.key),I.type&&I.type.defaultProps)var me=I.type.defaultProps;for(ae in L)A.call(L,ae)&&!P.hasOwnProperty(ae)&&(pe[ae]=L[ae]===void 0&&me!==void 0?me[ae]:L[ae])}var ae=arguments.length-2;if(ae===1)pe.children=ie;else if(1<ae){me=Array(ae);for(var Se=0;Se<ae;Se++)me[Se]=arguments[Se+2];pe.children=me}return{$$typeof:e,type:I.type,key:fe,ref:ve,props:pe,_owner:ge}},Me.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:o,_context:I},I.Consumer=I},Me.createElement=R,Me.createFactory=function(I){var L=R.bind(null,I);return L.type=I,L},Me.createRef=function(){return{current:null}},Me.forwardRef=function(I){return{$$typeof:u,render:I}},Me.isValidElement=G,Me.lazy=function(I){return{$$typeof:h,_payload:{_status:-1,_result:I},_init:Y}},Me.memo=function(I,L){return{$$typeof:p,type:I,compare:L===void 0?null:L}},Me.startTransition=function(I){var L=U.transition;U.transition={};try{I()}finally{U.transition=L}},Me.unstable_act=K,Me.useCallback=function(I,L){return J.current.useCallback(I,L)},Me.useContext=function(I){return J.current.useContext(I)},Me.useDebugValue=function(){},Me.useDeferredValue=function(I){return J.current.useDeferredValue(I)},Me.useEffect=function(I,L){return J.current.useEffect(I,L)},Me.useId=function(){return J.current.useId()},Me.useImperativeHandle=function(I,L,ie){return J.current.useImperativeHandle(I,L,ie)},Me.useInsertionEffect=function(I,L){return J.current.useInsertionEffect(I,L)},Me.useLayoutEffect=function(I,L){return J.current.useLayoutEffect(I,L)},Me.useMemo=function(I,L){return J.current.useMemo(I,L)},Me.useReducer=function(I,L,ie){return J.current.useReducer(I,L,ie)},Me.useRef=function(I){return J.current.useRef(I)},Me.useState=function(I){return J.current.useState(I)},Me.useSyncExternalStore=function(I,L,ie){return J.current.useSyncExternalStore(I,L,ie)},Me.useTransition=function(){return J.current.useTransition()},Me.version="18.3.1",Me}var O1;function Py(){return O1||(O1=1,np.exports=NT()),np.exports}var E1;function AT(){if(E1)return zo;E1=1;var e=Py(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,f,p){var h,m={},v=null,b=null;p!==void 0&&(v=""+p),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(b=f.ref);for(h in f)n.call(f,h)&&!o.hasOwnProperty(h)&&(m[h]=f[h]);if(u&&u.defaultProps)for(h in f=u.defaultProps,f)m[h]===void 0&&(m[h]=f[h]);return{$$typeof:t,type:u,key:v,ref:b,props:m,_owner:a.current}}return zo.Fragment=r,zo.jsx=c,zo.jsxs=c,zo}var k1;function CT(){return k1||(k1=1,rp.exports=AT()),rp.exports}var l=CT(),T=Py();const V=Je(T),OT=ST({__proto__:null,default:V},[T]);var cc={},ip={exports:{}},er={},ap={exports:{}},op={};var P1;function ET(){return P1||(P1=1,(function(e){function t(U,X){var K=U.length;U.push(X);e:for(;0<K;){var I=K-1>>>1,L=U[I];if(0<a(L,X))U[I]=X,U[K]=L,K=I;else break e}}function r(U){return U.length===0?null:U[0]}function n(U){if(U.length===0)return null;var X=U[0],K=U.pop();if(K!==X){U[0]=K;e:for(var I=0,L=U.length,ie=L>>>1;I<ie;){var pe=2*(I+1)-1,fe=U[pe],ve=pe+1,ge=U[ve];if(0>a(fe,K))ve<L&&0>a(ge,fe)?(U[I]=ge,U[ve]=K,I=ve):(U[I]=fe,U[pe]=K,I=pe);else if(ve<L&&0>a(ge,K))U[I]=ge,U[ve]=K,I=ve;else break e}}return X}function a(U,X){var K=U.sortIndex-X.sortIndex;return K!==0?K:U.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();e.unstable_now=function(){return c.now()-u}}var f=[],p=[],h=1,m=null,v=3,b=!1,w=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(U){for(var X=r(p);X!==null;){if(X.callback===null)n(p);else if(X.startTime<=U)n(p),X.sortIndex=X.expirationTime,t(f,X);else break;X=r(p)}}function E(U){if(_=!1,O(U),!w)if(r(f)!==null)w=!0,Y(A);else{var X=r(p);X!==null&&J(E,X.startTime-U)}}function A(U,X){w=!1,_&&(_=!1,S(R),R=-1),b=!0;var K=v;try{for(O(X),m=r(f);m!==null&&(!(m.expirationTime>X)||U&&!q());){var I=m.callback;if(typeof I=="function"){m.callback=null,v=m.priorityLevel;var L=I(m.expirationTime<=X);X=e.unstable_now(),typeof L=="function"?m.callback=L:m===r(f)&&n(f),O(X)}else n(f);m=r(f)}if(m!==null)var ie=!0;else{var pe=r(p);pe!==null&&J(E,pe.startTime-X),ie=!1}return ie}finally{m=null,v=K,b=!1}}var N=!1,P=null,R=-1,D=5,G=-1;function q(){return!(e.unstable_now()-G<D)}function M(){if(P!==null){var U=e.unstable_now();G=U;var X=!0;try{X=P(!0,U)}finally{X?H():(N=!1,P=null)}}else N=!1}var H;if(typeof C=="function")H=function(){C(M)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,F=B.port2;B.port1.onmessage=M,H=function(){F.postMessage(null)}}else H=function(){x(M,0)};function Y(U){P=U,N||(N=!0,H())}function J(U,X){R=x(function(){U(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(U){U.callback=null},e.unstable_continueExecution=function(){w||b||(w=!0,Y(A))},e.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<U?Math.floor(1e3/U):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return r(f)},e.unstable_next=function(U){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var K=v;v=X;try{return U()}finally{v=K}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(U,X){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var K=v;v=U;try{return X()}finally{v=K}},e.unstable_scheduleCallback=function(U,X,K){var I=e.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?I+K:I):K=I,U){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=K+L,U={id:h++,callback:X,priorityLevel:U,startTime:K,expirationTime:L,sortIndex:-1},K>I?(U.sortIndex=K,t(p,U),r(f)===null&&U===r(p)&&(_?(S(R),R=-1):_=!0,J(E,K-I))):(U.sortIndex=L,t(f,U),w||b||(w=!0,Y(A))),U},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(U){var X=v;return function(){var K=v;v=X;try{return U.apply(this,arguments)}finally{v=K}}}})(op)),op}var T1;function kT(){return T1||(T1=1,ap.exports=ET()),ap.exports}var R1;function PT(){if(R1)return er;R1=1;var e=Py(),t=kT();function r(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,d=1;d<arguments.length;d++)s+="&args[]="+encodeURIComponent(arguments[d]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,a={};function o(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(a[i]=s,i=0;i<s.length;i++)n.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},m={};function v(i){return f.call(m,i)?!0:f.call(h,i)?!1:p.test(i)?m[i]=!0:(h[i]=!0,!1)}function b(i,s,d,g){if(d!==null&&d.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return g?!1:d!==null?!d.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function w(i,s,d,g){if(s===null||typeof s>"u"||b(i,s,d,g))return!0;if(g)return!1;if(d!==null)switch(d.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function _(i,s,d,g,y,j,k){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=g,this.attributeNamespace=y,this.mustUseProperty=d,this.propertyName=i,this.type=s,this.sanitizeURL=j,this.removeEmptyString=k}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new _(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new _(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new _(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new _(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new _(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new _(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new _(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new _(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new _(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(S,C);x[s]=new _(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(S,C);x[s]=new _(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(S,C);x[s]=new _(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new _(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new _(i,1,!1,i.toLowerCase(),null,!0,!0)});function O(i,s,d,g){var y=x.hasOwnProperty(s)?x[s]:null;(y!==null?y.type!==0:g||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(w(s,d,y,g)&&(d=null),g||y===null?v(s)&&(d===null?i.removeAttribute(s):i.setAttribute(s,""+d)):y.mustUseProperty?i[y.propertyName]=d===null?y.type===3?!1:"":d:(s=y.attributeName,g=y.attributeNamespace,d===null?i.removeAttribute(s):(y=y.type,d=y===3||y===4&&d===!0?"":""+d,g?i.setAttributeNS(g,s,d):i.setAttribute(s,d))))}var E=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,A=Symbol.for("react.element"),N=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),q=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),U=Symbol.iterator;function X(i){return i===null||typeof i!="object"?null:(i=U&&i[U]||i["@@iterator"],typeof i=="function"?i:null)}var K=Object.assign,I;function L(i){if(I===void 0)try{throw Error()}catch(d){var s=d.stack.trim().match(/\n( *(at )?)/);I=s&&s[1]||""}return`
`+I+i}var ie=!1;function pe(i,s){if(!i||ie)return"";ie=!0;var d=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ee){var g=ee}Reflect.construct(i,[],s)}else{try{s.call()}catch(ee){g=ee}i.call(s.prototype)}else{try{throw Error()}catch(ee){g=ee}i()}}catch(ee){if(ee&&g&&typeof ee.stack=="string"){for(var y=ee.stack.split(`
`),j=g.stack.split(`
`),k=y.length-1,$=j.length-1;1<=k&&0<=$&&y[k]!==j[$];)$--;for(;1<=k&&0<=$;k--,$--)if(y[k]!==j[$]){if(k!==1||$!==1)do if(k--,$--,0>$||y[k]!==j[$]){var z=`
`+y[k].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=k&&0<=$);break}}}finally{ie=!1,Error.prepareStackTrace=d}return(i=i?i.displayName||i.name:"")?L(i):""}function fe(i){switch(i.tag){case 5:return L(i.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return i=pe(i.type,!1),i;case 11:return i=pe(i.type.render,!1),i;case 1:return i=pe(i.type,!0),i;default:return""}}function ve(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case P:return"Fragment";case N:return"Portal";case D:return"Profiler";case R:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case q:return(i.displayName||"Context")+".Consumer";case G:return(i._context.displayName||"Context")+".Provider";case M:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case F:return s=i.displayName||null,s!==null?s:ve(i.type)||"Memo";case Y:s=i._payload,i=i._init;try{return ve(i(s))}catch{}}return null}function ge(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(s);case 8:return s===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function me(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function ae(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Se(i){var s=ae(i)?"checked":"value",d=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),g=""+i[s];if(!i.hasOwnProperty(s)&&typeof d<"u"&&typeof d.get=="function"&&typeof d.set=="function"){var y=d.get,j=d.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return y.call(this)},set:function(k){g=""+k,j.call(this,k)}}),Object.defineProperty(i,s,{enumerable:d.enumerable}),{getValue:function(){return g},setValue:function(k){g=""+k},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function se(i){i._valueTracker||(i._valueTracker=Se(i))}function te(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var d=s.getValue(),g="";return i&&(g=ae(i)?i.checked?"true":"false":i.value),i=g,i!==d?(s.setValue(i),!0):!1}function Pe(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Ee(i,s){var d=s.checked;return K({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:d??i._wrapperState.initialChecked})}function Ke(i,s){var d=s.defaultValue==null?"":s.defaultValue,g=s.checked!=null?s.checked:s.defaultChecked;d=me(s.value!=null?s.value:d),i._wrapperState={initialChecked:g,initialValue:d,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Xe(i,s){s=s.checked,s!=null&&O(i,"checked",s,!1)}function Ae(i,s){Xe(i,s);var d=me(s.value),g=s.type;if(d!=null)g==="number"?(d===0&&i.value===""||i.value!=d)&&(i.value=""+d):i.value!==""+d&&(i.value=""+d);else if(g==="submit"||g==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?pt(i,s.type,d):s.hasOwnProperty("defaultValue")&&pt(i,s.type,me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Be(i,s,d){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var g=s.type;if(!(g!=="submit"&&g!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,d||s===i.value||(i.value=s),i.defaultValue=s}d=i.name,d!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,d!==""&&(i.name=d)}function pt(i,s,d){(s!=="number"||Pe(i.ownerDocument)!==i)&&(d==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+d&&(i.defaultValue=""+d))}var bt=Array.isArray;function gt(i,s,d,g){if(i=i.options,s){s={};for(var y=0;y<d.length;y++)s["$"+d[y]]=!0;for(d=0;d<i.length;d++)y=s.hasOwnProperty("$"+i[d].value),i[d].selected!==y&&(i[d].selected=y),y&&g&&(i[d].defaultSelected=!0)}else{for(d=""+me(d),s=null,y=0;y<i.length;y++){if(i[y].value===d){i[y].selected=!0,g&&(i[y].defaultSelected=!0);return}s!==null||i[y].disabled||(s=i[y])}s!==null&&(s.selected=!0)}}function $t(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(r(91));return K({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function or(i,s){var d=s.value;if(d==null){if(d=s.children,s=s.defaultValue,d!=null){if(s!=null)throw Error(r(92));if(bt(d)){if(1<d.length)throw Error(r(93));d=d[0]}s=d}s==null&&(s=""),d=s}i._wrapperState={initialValue:me(d)}}function Er(i,s){var d=me(s.value),g=me(s.defaultValue);d!=null&&(d=""+d,d!==i.value&&(i.value=d),s.defaultValue==null&&i.defaultValue!==d&&(i.defaultValue=d)),g!=null&&(i.defaultValue=""+g)}function An(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function ni(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rn(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?ni(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var de,Ie=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,d,g,y){MSApp.execUnsafeLocalFunction(function(){return i(s,d,g,y)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=de.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function at(i,s){if(s){var d=i.firstChild;if(d&&d===i.lastChild&&d.nodeType===3){d.nodeValue=s;return}}i.textContent=s}var sr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nn=["Webkit","ms","Moz","O"];Object.keys(sr).forEach(function(i){nn.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),sr[s]=sr[i]})});function zi(i,s,d){return s==null||typeof s=="boolean"||s===""?"":d||typeof s!="number"||s===0||sr.hasOwnProperty(i)&&sr[i]?(""+s).trim():s+"px"}function ii(i,s){i=i.style;for(var d in s)if(s.hasOwnProperty(d)){var g=d.indexOf("--")===0,y=zi(d,s[d],g);d==="float"&&(d="cssFloat"),g?i.setProperty(d,y):i[d]=y}}var el=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function to(i,s){if(s){if(el[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(r(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(r(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(r(61))}if(s.style!=null&&typeof s.style!="object")throw Error(r(62))}}function ro(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var no=null;function gd(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var vd=null,qi=null,Ui=null;function Wx(i){if(i=Ao(i)){if(typeof vd!="function")throw Error(r(280));var s=i.stateNode;s&&(s=jl(s),vd(i.stateNode,i.type,s))}}function Hx(i){qi?Ui?Ui.push(i):Ui=[i]:qi=i}function Gx(){if(qi){var i=qi,s=Ui;if(Ui=qi=null,Wx(i),s)for(i=0;i<s.length;i++)Wx(s[i])}}function Yx(i,s){return i(s)}function Vx(){}var yd=!1;function Kx(i,s,d){if(yd)return i(s,d);yd=!0;try{return Yx(i,s,d)}finally{yd=!1,(qi!==null||Ui!==null)&&(Vx(),Gx())}}function io(i,s){var d=i.stateNode;if(d===null)return null;var g=jl(d);if(g===null)return null;d=g[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(g=!g.disabled)||(i=i.type,g=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!g;break e;default:i=!1}if(i)return null;if(d&&typeof d!="function")throw Error(r(231,s,typeof d));return d}var xd=!1;if(u)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){xd=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{xd=!1}function kk(i,s,d,g,y,j,k,$,z){var ee=Array.prototype.slice.call(arguments,3);try{s.apply(d,ee)}catch(le){this.onError(le)}}var oo=!1,tl=null,rl=!1,bd=null,Pk={onError:function(i){oo=!0,tl=i}};function Tk(i,s,d,g,y,j,k,$,z){oo=!1,tl=null,kk.apply(Pk,arguments)}function Rk(i,s,d,g,y,j,k,$,z){if(Tk.apply(this,arguments),oo){if(oo){var ee=tl;oo=!1,tl=null}else throw Error(r(198));rl||(rl=!0,bd=ee)}}function ai(i){var s=i,d=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(d=s.return),i=s.return;while(i)}return s.tag===3?d:null}function Xx(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Qx(i){if(ai(i)!==i)throw Error(r(188))}function Dk(i){var s=i.alternate;if(!s){if(s=ai(i),s===null)throw Error(r(188));return s!==i?null:i}for(var d=i,g=s;;){var y=d.return;if(y===null)break;var j=y.alternate;if(j===null){if(g=y.return,g!==null){d=g;continue}break}if(y.child===j.child){for(j=y.child;j;){if(j===d)return Qx(y),i;if(j===g)return Qx(y),s;j=j.sibling}throw Error(r(188))}if(d.return!==g.return)d=y,g=j;else{for(var k=!1,$=y.child;$;){if($===d){k=!0,d=y,g=j;break}if($===g){k=!0,g=y,d=j;break}$=$.sibling}if(!k){for($=j.child;$;){if($===d){k=!0,d=j,g=y;break}if($===g){k=!0,g=j,d=y;break}$=$.sibling}if(!k)throw Error(r(189))}}if(d.alternate!==g)throw Error(r(190))}if(d.tag!==3)throw Error(r(188));return d.stateNode.current===d?i:s}function Zx(i){return i=Dk(i),i!==null?Jx(i):null}function Jx(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Jx(i);if(s!==null)return s;i=i.sibling}return null}var e0=t.unstable_scheduleCallback,t0=t.unstable_cancelCallback,Ik=t.unstable_shouldYield,Mk=t.unstable_requestPaint,ht=t.unstable_now,$k=t.unstable_getCurrentPriorityLevel,wd=t.unstable_ImmediatePriority,r0=t.unstable_UserBlockingPriority,nl=t.unstable_NormalPriority,Fk=t.unstable_LowPriority,n0=t.unstable_IdlePriority,il=null,Wr=null;function Lk(i){if(Wr&&typeof Wr.onCommitFiberRoot=="function")try{Wr.onCommitFiberRoot(il,i,void 0,(i.current.flags&128)===128)}catch{}}var kr=Math.clz32?Math.clz32:qk,Bk=Math.log,zk=Math.LN2;function qk(i){return i>>>=0,i===0?32:31-(Bk(i)/zk|0)|0}var al=64,ol=4194304;function so(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function sl(i,s){var d=i.pendingLanes;if(d===0)return 0;var g=0,y=i.suspendedLanes,j=i.pingedLanes,k=d&268435455;if(k!==0){var $=k&~y;$!==0?g=so($):(j&=k,j!==0&&(g=so(j)))}else k=d&~y,k!==0?g=so(k):j!==0&&(g=so(j));if(g===0)return 0;if(s!==0&&s!==g&&(s&y)===0&&(y=g&-g,j=s&-s,y>=j||y===16&&(j&4194240)!==0))return s;if((g&4)!==0&&(g|=d&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=g;0<s;)d=31-kr(s),y=1<<d,g|=i[d],s&=~y;return g}function Uk(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wk(i,s){for(var d=i.suspendedLanes,g=i.pingedLanes,y=i.expirationTimes,j=i.pendingLanes;0<j;){var k=31-kr(j),$=1<<k,z=y[k];z===-1?(($&d)===0||($&g)!==0)&&(y[k]=Uk($,s)):z<=s&&(i.expiredLanes|=$),j&=~$}}function _d(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function i0(){var i=al;return al<<=1,(al&4194240)===0&&(al=64),i}function jd(i){for(var s=[],d=0;31>d;d++)s.push(i);return s}function lo(i,s,d){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-kr(s),i[s]=d}function Hk(i,s){var d=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var g=i.eventTimes;for(i=i.expirationTimes;0<d;){var y=31-kr(d),j=1<<y;s[y]=0,g[y]=-1,i[y]=-1,d&=~j}}function Sd(i,s){var d=i.entangledLanes|=s;for(i=i.entanglements;d;){var g=31-kr(d),y=1<<g;y&s|i[g]&s&&(i[g]|=s),d&=~y}}var Ve=0;function a0(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var o0,Nd,s0,l0,c0,Ad=!1,ll=[],Cn=null,On=null,En=null,co=new Map,uo=new Map,kn=[],Gk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function u0(i,s){switch(i){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":En=null;break;case"pointerover":case"pointerout":co.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(s.pointerId)}}function fo(i,s,d,g,y,j){return i===null||i.nativeEvent!==j?(i={blockedOn:s,domEventName:d,eventSystemFlags:g,nativeEvent:j,targetContainers:[y]},s!==null&&(s=Ao(s),s!==null&&Nd(s)),i):(i.eventSystemFlags|=g,s=i.targetContainers,y!==null&&s.indexOf(y)===-1&&s.push(y),i)}function Yk(i,s,d,g,y){switch(s){case"focusin":return Cn=fo(Cn,i,s,d,g,y),!0;case"dragenter":return On=fo(On,i,s,d,g,y),!0;case"mouseover":return En=fo(En,i,s,d,g,y),!0;case"pointerover":var j=y.pointerId;return co.set(j,fo(co.get(j)||null,i,s,d,g,y)),!0;case"gotpointercapture":return j=y.pointerId,uo.set(j,fo(uo.get(j)||null,i,s,d,g,y)),!0}return!1}function d0(i){var s=oi(i.target);if(s!==null){var d=ai(s);if(d!==null){if(s=d.tag,s===13){if(s=Xx(d),s!==null){i.blockedOn=s,c0(i.priority,function(){s0(d)});return}}else if(s===3&&d.stateNode.current.memoizedState.isDehydrated){i.blockedOn=d.tag===3?d.stateNode.containerInfo:null;return}}}i.blockedOn=null}function cl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var d=Od(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(d===null){d=i.nativeEvent;var g=new d.constructor(d.type,d);no=g,d.target.dispatchEvent(g),no=null}else return s=Ao(d),s!==null&&Nd(s),i.blockedOn=d,!1;s.shift()}return!0}function f0(i,s,d){cl(i)&&d.delete(s)}function Vk(){Ad=!1,Cn!==null&&cl(Cn)&&(Cn=null),On!==null&&cl(On)&&(On=null),En!==null&&cl(En)&&(En=null),co.forEach(f0),uo.forEach(f0)}function po(i,s){i.blockedOn===s&&(i.blockedOn=null,Ad||(Ad=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Vk)))}function ho(i){function s(y){return po(y,i)}if(0<ll.length){po(ll[0],i);for(var d=1;d<ll.length;d++){var g=ll[d];g.blockedOn===i&&(g.blockedOn=null)}}for(Cn!==null&&po(Cn,i),On!==null&&po(On,i),En!==null&&po(En,i),co.forEach(s),uo.forEach(s),d=0;d<kn.length;d++)g=kn[d],g.blockedOn===i&&(g.blockedOn=null);for(;0<kn.length&&(d=kn[0],d.blockedOn===null);)d0(d),d.blockedOn===null&&kn.shift()}var Wi=E.ReactCurrentBatchConfig,ul=!0;function Kk(i,s,d,g){var y=Ve,j=Wi.transition;Wi.transition=null;try{Ve=1,Cd(i,s,d,g)}finally{Ve=y,Wi.transition=j}}function Xk(i,s,d,g){var y=Ve,j=Wi.transition;Wi.transition=null;try{Ve=4,Cd(i,s,d,g)}finally{Ve=y,Wi.transition=j}}function Cd(i,s,d,g){if(ul){var y=Od(i,s,d,g);if(y===null)Hd(i,s,g,dl,d),u0(i,g);else if(Yk(y,i,s,d,g))g.stopPropagation();else if(u0(i,g),s&4&&-1<Gk.indexOf(i)){for(;y!==null;){var j=Ao(y);if(j!==null&&o0(j),j=Od(i,s,d,g),j===null&&Hd(i,s,g,dl,d),j===y)break;y=j}y!==null&&g.stopPropagation()}else Hd(i,s,g,null,d)}}var dl=null;function Od(i,s,d,g){if(dl=null,i=gd(g),i=oi(i),i!==null)if(s=ai(i),s===null)i=null;else if(d=s.tag,d===13){if(i=Xx(s),i!==null)return i;i=null}else if(d===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return dl=i,null}function p0(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($k()){case wd:return 1;case r0:return 4;case nl:case Fk:return 16;case n0:return 536870912;default:return 16}default:return 16}}var Pn=null,Ed=null,fl=null;function h0(){if(fl)return fl;var i,s=Ed,d=s.length,g,y="value"in Pn?Pn.value:Pn.textContent,j=y.length;for(i=0;i<d&&s[i]===y[i];i++);var k=d-i;for(g=1;g<=k&&s[d-g]===y[j-g];g++);return fl=y.slice(i,1<g?1-g:void 0)}function pl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function hl(){return!0}function m0(){return!1}function lr(i){function s(d,g,y,j,k){this._reactName=d,this._targetInst=y,this.type=g,this.nativeEvent=j,this.target=k,this.currentTarget=null;for(var $ in i)i.hasOwnProperty($)&&(d=i[$],this[$]=d?d(j):j[$]);return this.isDefaultPrevented=(j.defaultPrevented!=null?j.defaultPrevented:j.returnValue===!1)?hl:m0,this.isPropagationStopped=m0,this}return K(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var d=this.nativeEvent;d&&(d.preventDefault?d.preventDefault():typeof d.returnValue!="unknown"&&(d.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var d=this.nativeEvent;d&&(d.stopPropagation?d.stopPropagation():typeof d.cancelBubble!="unknown"&&(d.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),s}var Hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kd=lr(Hi),mo=K({},Hi,{view:0,detail:0}),Qk=lr(mo),Pd,Td,go,ml=K({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dd,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==go&&(go&&i.type==="mousemove"?(Pd=i.screenX-go.screenX,Td=i.screenY-go.screenY):Td=Pd=0,go=i),Pd)},movementY:function(i){return"movementY"in i?i.movementY:Td}}),g0=lr(ml),Zk=K({},ml,{dataTransfer:0}),Jk=lr(Zk),eP=K({},mo,{relatedTarget:0}),Rd=lr(eP),tP=K({},Hi,{animationName:0,elapsedTime:0,pseudoElement:0}),rP=lr(tP),nP=K({},Hi,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),iP=lr(nP),aP=K({},Hi,{data:0}),v0=lr(aP),oP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cP(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=lP[i])?!!s[i]:!1}function Dd(){return cP}var uP=K({},mo,{key:function(i){if(i.key){var s=oP[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=pl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?sP[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dd,charCode:function(i){return i.type==="keypress"?pl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?pl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),dP=lr(uP),fP=K({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),y0=lr(fP),pP=K({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dd}),hP=lr(pP),mP=K({},Hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),gP=lr(mP),vP=K({},ml,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),yP=lr(vP),xP=[9,13,27,32],Id=u&&"CompositionEvent"in window,vo=null;u&&"documentMode"in document&&(vo=document.documentMode);var bP=u&&"TextEvent"in window&&!vo,x0=u&&(!Id||vo&&8<vo&&11>=vo),b0=" ",w0=!1;function _0(i,s){switch(i){case"keyup":return xP.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function j0(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Gi=!1;function wP(i,s){switch(i){case"compositionend":return j0(s);case"keypress":return s.which!==32?null:(w0=!0,b0);case"textInput":return i=s.data,i===b0&&w0?null:i;default:return null}}function _P(i,s){if(Gi)return i==="compositionend"||!Id&&_0(i,s)?(i=h0(),fl=Ed=Pn=null,Gi=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return x0&&s.locale!=="ko"?null:s.data;default:return null}}var jP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S0(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!jP[i.type]:s==="textarea"}function N0(i,s,d,g){Hx(g),s=bl(s,"onChange"),0<s.length&&(d=new kd("onChange","change",null,d,g),i.push({event:d,listeners:s}))}var yo=null,xo=null;function SP(i){U0(i,0)}function gl(i){var s=Qi(i);if(te(s))return i}function NP(i,s){if(i==="change")return s}var A0=!1;if(u){var Md;if(u){var $d="oninput"in document;if(!$d){var C0=document.createElement("div");C0.setAttribute("oninput","return;"),$d=typeof C0.oninput=="function"}Md=$d}else Md=!1;A0=Md&&(!document.documentMode||9<document.documentMode)}function O0(){yo&&(yo.detachEvent("onpropertychange",E0),xo=yo=null)}function E0(i){if(i.propertyName==="value"&&gl(xo)){var s=[];N0(s,xo,i,gd(i)),Kx(SP,s)}}function AP(i,s,d){i==="focusin"?(O0(),yo=s,xo=d,yo.attachEvent("onpropertychange",E0)):i==="focusout"&&O0()}function CP(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return gl(xo)}function OP(i,s){if(i==="click")return gl(s)}function EP(i,s){if(i==="input"||i==="change")return gl(s)}function kP(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Pr=typeof Object.is=="function"?Object.is:kP;function bo(i,s){if(Pr(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var d=Object.keys(i),g=Object.keys(s);if(d.length!==g.length)return!1;for(g=0;g<d.length;g++){var y=d[g];if(!f.call(s,y)||!Pr(i[y],s[y]))return!1}return!0}function k0(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function P0(i,s){var d=k0(i);i=0;for(var g;d;){if(d.nodeType===3){if(g=i+d.textContent.length,i<=s&&g>=s)return{node:d,offset:s-i};i=g}e:{for(;d;){if(d.nextSibling){d=d.nextSibling;break e}d=d.parentNode}d=void 0}d=k0(d)}}function T0(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?T0(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function R0(){for(var i=window,s=Pe();s instanceof i.HTMLIFrameElement;){try{var d=typeof s.contentWindow.location.href=="string"}catch{d=!1}if(d)i=s.contentWindow;else break;s=Pe(i.document)}return s}function Fd(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function PP(i){var s=R0(),d=i.focusedElem,g=i.selectionRange;if(s!==d&&d&&d.ownerDocument&&T0(d.ownerDocument.documentElement,d)){if(g!==null&&Fd(d)){if(s=g.start,i=g.end,i===void 0&&(i=s),"selectionStart"in d)d.selectionStart=s,d.selectionEnd=Math.min(i,d.value.length);else if(i=(s=d.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var y=d.textContent.length,j=Math.min(g.start,y);g=g.end===void 0?j:Math.min(g.end,y),!i.extend&&j>g&&(y=g,g=j,j=y),y=P0(d,j);var k=P0(d,g);y&&k&&(i.rangeCount!==1||i.anchorNode!==y.node||i.anchorOffset!==y.offset||i.focusNode!==k.node||i.focusOffset!==k.offset)&&(s=s.createRange(),s.setStart(y.node,y.offset),i.removeAllRanges(),j>g?(i.addRange(s),i.extend(k.node,k.offset)):(s.setEnd(k.node,k.offset),i.addRange(s)))}}for(s=[],i=d;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<s.length;d++)i=s[d],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var TP=u&&"documentMode"in document&&11>=document.documentMode,Yi=null,Ld=null,wo=null,Bd=!1;function D0(i,s,d){var g=d.window===d?d.document:d.nodeType===9?d:d.ownerDocument;Bd||Yi==null||Yi!==Pe(g)||(g=Yi,"selectionStart"in g&&Fd(g)?g={start:g.selectionStart,end:g.selectionEnd}:(g=(g.ownerDocument&&g.ownerDocument.defaultView||window).getSelection(),g={anchorNode:g.anchorNode,anchorOffset:g.anchorOffset,focusNode:g.focusNode,focusOffset:g.focusOffset}),wo&&bo(wo,g)||(wo=g,g=bl(Ld,"onSelect"),0<g.length&&(s=new kd("onSelect","select",null,s,d),i.push({event:s,listeners:g}),s.target=Yi)))}function vl(i,s){var d={};return d[i.toLowerCase()]=s.toLowerCase(),d["Webkit"+i]="webkit"+s,d["Moz"+i]="moz"+s,d}var Vi={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},zd={},I0={};u&&(I0=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function yl(i){if(zd[i])return zd[i];if(!Vi[i])return i;var s=Vi[i],d;for(d in s)if(s.hasOwnProperty(d)&&d in I0)return zd[i]=s[d];return i}var M0=yl("animationend"),$0=yl("animationiteration"),F0=yl("animationstart"),L0=yl("transitionend"),B0=new Map,z0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(i,s){B0.set(i,s),o(s,[i])}for(var qd=0;qd<z0.length;qd++){var Ud=z0[qd],RP=Ud.toLowerCase(),DP=Ud[0].toUpperCase()+Ud.slice(1);Tn(RP,"on"+DP)}Tn(M0,"onAnimationEnd"),Tn($0,"onAnimationIteration"),Tn(F0,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(L0,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IP=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function q0(i,s,d){var g=i.type||"unknown-event";i.currentTarget=d,Rk(g,s,void 0,i),i.currentTarget=null}function U0(i,s){s=(s&4)!==0;for(var d=0;d<i.length;d++){var g=i[d],y=g.event;g=g.listeners;e:{var j=void 0;if(s)for(var k=g.length-1;0<=k;k--){var $=g[k],z=$.instance,ee=$.currentTarget;if($=$.listener,z!==j&&y.isPropagationStopped())break e;q0(y,$,ee),j=z}else for(k=0;k<g.length;k++){if($=g[k],z=$.instance,ee=$.currentTarget,$=$.listener,z!==j&&y.isPropagationStopped())break e;q0(y,$,ee),j=z}}}if(rl)throw i=bd,rl=!1,bd=null,i}function rt(i,s){var d=s[Qd];d===void 0&&(d=s[Qd]=new Set);var g=i+"__bubble";d.has(g)||(W0(s,i,2,!1),d.add(g))}function Wd(i,s,d){var g=0;s&&(g|=4),W0(d,i,g,s)}var xl="_reactListening"+Math.random().toString(36).slice(2);function jo(i){if(!i[xl]){i[xl]=!0,n.forEach(function(d){d!=="selectionchange"&&(IP.has(d)||Wd(d,!1,i),Wd(d,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[xl]||(s[xl]=!0,Wd("selectionchange",!1,s))}}function W0(i,s,d,g){switch(p0(s)){case 1:var y=Kk;break;case 4:y=Xk;break;default:y=Cd}d=y.bind(null,s,d,i),y=void 0,!xd||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(y=!0),g?y!==void 0?i.addEventListener(s,d,{capture:!0,passive:y}):i.addEventListener(s,d,!0):y!==void 0?i.addEventListener(s,d,{passive:y}):i.addEventListener(s,d,!1)}function Hd(i,s,d,g,y){var j=g;if((s&1)===0&&(s&2)===0&&g!==null)e:for(;;){if(g===null)return;var k=g.tag;if(k===3||k===4){var $=g.stateNode.containerInfo;if($===y||$.nodeType===8&&$.parentNode===y)break;if(k===4)for(k=g.return;k!==null;){var z=k.tag;if((z===3||z===4)&&(z=k.stateNode.containerInfo,z===y||z.nodeType===8&&z.parentNode===y))return;k=k.return}for(;$!==null;){if(k=oi($),k===null)return;if(z=k.tag,z===5||z===6){g=j=k;continue e}$=$.parentNode}}g=g.return}Kx(function(){var ee=j,le=gd(d),ce=[];e:{var oe=B0.get(i);if(oe!==void 0){var ye=kd,we=i;switch(i){case"keypress":if(pl(d)===0)break e;case"keydown":case"keyup":ye=dP;break;case"focusin":we="focus",ye=Rd;break;case"focusout":we="blur",ye=Rd;break;case"beforeblur":case"afterblur":ye=Rd;break;case"click":if(d.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=g0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Jk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=hP;break;case M0:case $0:case F0:ye=rP;break;case L0:ye=gP;break;case"scroll":ye=Qk;break;case"wheel":ye=yP;break;case"copy":case"cut":case"paste":ye=iP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=y0}var je=(s&4)!==0,mt=!je&&i==="scroll",Q=je?oe!==null?oe+"Capture":null:oe;je=[];for(var W=ee,Z;W!==null;){Z=W;var ue=Z.stateNode;if(Z.tag===5&&ue!==null&&(Z=ue,Q!==null&&(ue=io(W,Q),ue!=null&&je.push(So(W,ue,Z)))),mt)break;W=W.return}0<je.length&&(oe=new ye(oe,we,null,d,le),ce.push({event:oe,listeners:je}))}}if((s&7)===0){e:{if(oe=i==="mouseover"||i==="pointerover",ye=i==="mouseout"||i==="pointerout",oe&&d!==no&&(we=d.relatedTarget||d.fromElement)&&(oi(we)||we[an]))break e;if((ye||oe)&&(oe=le.window===le?le:(oe=le.ownerDocument)?oe.defaultView||oe.parentWindow:window,ye?(we=d.relatedTarget||d.toElement,ye=ee,we=we?oi(we):null,we!==null&&(mt=ai(we),we!==mt||we.tag!==5&&we.tag!==6)&&(we=null)):(ye=null,we=ee),ye!==we)){if(je=g0,ue="onMouseLeave",Q="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(je=y0,ue="onPointerLeave",Q="onPointerEnter",W="pointer"),mt=ye==null?oe:Qi(ye),Z=we==null?oe:Qi(we),oe=new je(ue,W+"leave",ye,d,le),oe.target=mt,oe.relatedTarget=Z,ue=null,oi(le)===ee&&(je=new je(Q,W+"enter",we,d,le),je.target=Z,je.relatedTarget=mt,ue=je),mt=ue,ye&&we)t:{for(je=ye,Q=we,W=0,Z=je;Z;Z=Ki(Z))W++;for(Z=0,ue=Q;ue;ue=Ki(ue))Z++;for(;0<W-Z;)je=Ki(je),W--;for(;0<Z-W;)Q=Ki(Q),Z--;for(;W--;){if(je===Q||Q!==null&&je===Q.alternate)break t;je=Ki(je),Q=Ki(Q)}je=null}else je=null;ye!==null&&H0(ce,oe,ye,je,!1),we!==null&&mt!==null&&H0(ce,mt,we,je,!0)}}e:{if(oe=ee?Qi(ee):window,ye=oe.nodeName&&oe.nodeName.toLowerCase(),ye==="select"||ye==="input"&&oe.type==="file")var Ne=NP;else if(S0(oe))if(A0)Ne=EP;else{Ne=CP;var Ce=AP}else(ye=oe.nodeName)&&ye.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(Ne=OP);if(Ne&&(Ne=Ne(i,ee))){N0(ce,Ne,d,le);break e}Ce&&Ce(i,oe,ee),i==="focusout"&&(Ce=oe._wrapperState)&&Ce.controlled&&oe.type==="number"&&pt(oe,"number",oe.value)}switch(Ce=ee?Qi(ee):window,i){case"focusin":(S0(Ce)||Ce.contentEditable==="true")&&(Yi=Ce,Ld=ee,wo=null);break;case"focusout":wo=Ld=Yi=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,D0(ce,d,le);break;case"selectionchange":if(TP)break;case"keydown":case"keyup":D0(ce,d,le)}var Oe;if(Id)e:{switch(i){case"compositionstart":var De="onCompositionStart";break e;case"compositionend":De="onCompositionEnd";break e;case"compositionupdate":De="onCompositionUpdate";break e}De=void 0}else Gi?_0(i,d)&&(De="onCompositionEnd"):i==="keydown"&&d.keyCode===229&&(De="onCompositionStart");De&&(x0&&d.locale!=="ko"&&(Gi||De!=="onCompositionStart"?De==="onCompositionEnd"&&Gi&&(Oe=h0()):(Pn=le,Ed="value"in Pn?Pn.value:Pn.textContent,Gi=!0)),Ce=bl(ee,De),0<Ce.length&&(De=new v0(De,i,null,d,le),ce.push({event:De,listeners:Ce}),Oe?De.data=Oe:(Oe=j0(d),Oe!==null&&(De.data=Oe)))),(Oe=bP?wP(i,d):_P(i,d))&&(ee=bl(ee,"onBeforeInput"),0<ee.length&&(le=new v0("onBeforeInput","beforeinput",null,d,le),ce.push({event:le,listeners:ee}),le.data=Oe))}U0(ce,s)})}function So(i,s,d){return{instance:i,listener:s,currentTarget:d}}function bl(i,s){for(var d=s+"Capture",g=[];i!==null;){var y=i,j=y.stateNode;y.tag===5&&j!==null&&(y=j,j=io(i,d),j!=null&&g.unshift(So(i,j,y)),j=io(i,s),j!=null&&g.push(So(i,j,y))),i=i.return}return g}function Ki(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function H0(i,s,d,g,y){for(var j=s._reactName,k=[];d!==null&&d!==g;){var $=d,z=$.alternate,ee=$.stateNode;if(z!==null&&z===g)break;$.tag===5&&ee!==null&&($=ee,y?(z=io(d,j),z!=null&&k.unshift(So(d,z,$))):y||(z=io(d,j),z!=null&&k.push(So(d,z,$)))),d=d.return}k.length!==0&&i.push({event:s,listeners:k})}var MP=/\r\n?/g,$P=/\u0000|\uFFFD/g;function G0(i){return(typeof i=="string"?i:""+i).replace(MP,`
`).replace($P,"")}function wl(i,s,d){if(s=G0(s),G0(i)!==s&&d)throw Error(r(425))}function _l(){}var Gd=null,Yd=null;function Vd(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Kd=typeof setTimeout=="function"?setTimeout:void 0,FP=typeof clearTimeout=="function"?clearTimeout:void 0,Y0=typeof Promise=="function"?Promise:void 0,LP=typeof queueMicrotask=="function"?queueMicrotask:typeof Y0<"u"?function(i){return Y0.resolve(null).then(i).catch(BP)}:Kd;function BP(i){setTimeout(function(){throw i})}function Xd(i,s){var d=s,g=0;do{var y=d.nextSibling;if(i.removeChild(d),y&&y.nodeType===8)if(d=y.data,d==="/$"){if(g===0){i.removeChild(y),ho(s);return}g--}else d!=="$"&&d!=="$?"&&d!=="$!"||g++;d=y}while(d);ho(s)}function Rn(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function V0(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var d=i.data;if(d==="$"||d==="$!"||d==="$?"){if(s===0)return i;s--}else d==="/$"&&s++}i=i.previousSibling}return null}var Xi=Math.random().toString(36).slice(2),Hr="__reactFiber$"+Xi,No="__reactProps$"+Xi,an="__reactContainer$"+Xi,Qd="__reactEvents$"+Xi,zP="__reactListeners$"+Xi,qP="__reactHandles$"+Xi;function oi(i){var s=i[Hr];if(s)return s;for(var d=i.parentNode;d;){if(s=d[an]||d[Hr]){if(d=s.alternate,s.child!==null||d!==null&&d.child!==null)for(i=V0(i);i!==null;){if(d=i[Hr])return d;i=V0(i)}return s}i=d,d=i.parentNode}return null}function Ao(i){return i=i[Hr]||i[an],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Qi(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(r(33))}function jl(i){return i[No]||null}var Zd=[],Zi=-1;function Dn(i){return{current:i}}function nt(i){0>Zi||(i.current=Zd[Zi],Zd[Zi]=null,Zi--)}function et(i,s){Zi++,Zd[Zi]=i.current,i.current=s}var In={},Ft=Dn(In),Kt=Dn(!1),si=In;function Ji(i,s){var d=i.type.contextTypes;if(!d)return In;var g=i.stateNode;if(g&&g.__reactInternalMemoizedUnmaskedChildContext===s)return g.__reactInternalMemoizedMaskedChildContext;var y={},j;for(j in d)y[j]=s[j];return g&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=y),y}function Xt(i){return i=i.childContextTypes,i!=null}function Sl(){nt(Kt),nt(Ft)}function K0(i,s,d){if(Ft.current!==In)throw Error(r(168));et(Ft,s),et(Kt,d)}function X0(i,s,d){var g=i.stateNode;if(s=s.childContextTypes,typeof g.getChildContext!="function")return d;g=g.getChildContext();for(var y in g)if(!(y in s))throw Error(r(108,ge(i)||"Unknown",y));return K({},d,g)}function Nl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||In,si=Ft.current,et(Ft,i),et(Kt,Kt.current),!0}function Q0(i,s,d){var g=i.stateNode;if(!g)throw Error(r(169));d?(i=X0(i,s,si),g.__reactInternalMemoizedMergedChildContext=i,nt(Kt),nt(Ft),et(Ft,i)):nt(Kt),et(Kt,d)}var on=null,Al=!1,Jd=!1;function Z0(i){on===null?on=[i]:on.push(i)}function UP(i){Al=!0,Z0(i)}function Mn(){if(!Jd&&on!==null){Jd=!0;var i=0,s=Ve;try{var d=on;for(Ve=1;i<d.length;i++){var g=d[i];do g=g(!0);while(g!==null)}on=null,Al=!1}catch(y){throw on!==null&&(on=on.slice(i+1)),e0(wd,Mn),y}finally{Ve=s,Jd=!1}}return null}var ea=[],ta=0,Cl=null,Ol=0,mr=[],gr=0,li=null,sn=1,ln="";function ci(i,s){ea[ta++]=Ol,ea[ta++]=Cl,Cl=i,Ol=s}function J0(i,s,d){mr[gr++]=sn,mr[gr++]=ln,mr[gr++]=li,li=i;var g=sn;i=ln;var y=32-kr(g)-1;g&=~(1<<y),d+=1;var j=32-kr(s)+y;if(30<j){var k=y-y%5;j=(g&(1<<k)-1).toString(32),g>>=k,y-=k,sn=1<<32-kr(s)+y|d<<y|g,ln=j+i}else sn=1<<j|d<<y|g,ln=i}function ef(i){i.return!==null&&(ci(i,1),J0(i,1,0))}function tf(i){for(;i===Cl;)Cl=ea[--ta],ea[ta]=null,Ol=ea[--ta],ea[ta]=null;for(;i===li;)li=mr[--gr],mr[gr]=null,ln=mr[--gr],mr[gr]=null,sn=mr[--gr],mr[gr]=null}var cr=null,ur=null,ot=!1,Tr=null;function eb(i,s){var d=br(5,null,null,0);d.elementType="DELETED",d.stateNode=s,d.return=i,s=i.deletions,s===null?(i.deletions=[d],i.flags|=16):s.push(d)}function tb(i,s){switch(i.tag){case 5:var d=i.type;return s=s.nodeType!==1||d.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,cr=i,ur=Rn(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,cr=i,ur=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(d=li!==null?{id:sn,overflow:ln}:null,i.memoizedState={dehydrated:s,treeContext:d,retryLane:1073741824},d=br(18,null,null,0),d.stateNode=s,d.return=i,i.child=d,cr=i,ur=null,!0):!1;default:return!1}}function rf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function nf(i){if(ot){var s=ur;if(s){var d=s;if(!tb(i,s)){if(rf(i))throw Error(r(418));s=Rn(d.nextSibling);var g=cr;s&&tb(i,s)?eb(g,d):(i.flags=i.flags&-4097|2,ot=!1,cr=i)}}else{if(rf(i))throw Error(r(418));i.flags=i.flags&-4097|2,ot=!1,cr=i}}}function rb(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;cr=i}function El(i){if(i!==cr)return!1;if(!ot)return rb(i),ot=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Vd(i.type,i.memoizedProps)),s&&(s=ur)){if(rf(i))throw nb(),Error(r(418));for(;s;)eb(i,s),s=Rn(s.nextSibling)}if(rb(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var d=i.data;if(d==="/$"){if(s===0){ur=Rn(i.nextSibling);break e}s--}else d!=="$"&&d!=="$!"&&d!=="$?"||s++}i=i.nextSibling}ur=null}}else ur=cr?Rn(i.stateNode.nextSibling):null;return!0}function nb(){for(var i=ur;i;)i=Rn(i.nextSibling)}function ra(){ur=cr=null,ot=!1}function af(i){Tr===null?Tr=[i]:Tr.push(i)}var WP=E.ReactCurrentBatchConfig;function Co(i,s,d){if(i=d.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(d._owner){if(d=d._owner,d){if(d.tag!==1)throw Error(r(309));var g=d.stateNode}if(!g)throw Error(r(147,i));var y=g,j=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===j?s.ref:(s=function(k){var $=y.refs;k===null?delete $[j]:$[j]=k},s._stringRef=j,s)}if(typeof i!="string")throw Error(r(284));if(!d._owner)throw Error(r(290,i))}return i}function kl(i,s){throw i=Object.prototype.toString.call(s),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function ib(i){var s=i._init;return s(i._payload)}function ab(i){function s(Q,W){if(i){var Z=Q.deletions;Z===null?(Q.deletions=[W],Q.flags|=16):Z.push(W)}}function d(Q,W){if(!i)return null;for(;W!==null;)s(Q,W),W=W.sibling;return null}function g(Q,W){for(Q=new Map;W!==null;)W.key!==null?Q.set(W.key,W):Q.set(W.index,W),W=W.sibling;return Q}function y(Q,W){return Q=Wn(Q,W),Q.index=0,Q.sibling=null,Q}function j(Q,W,Z){return Q.index=Z,i?(Z=Q.alternate,Z!==null?(Z=Z.index,Z<W?(Q.flags|=2,W):Z):(Q.flags|=2,W)):(Q.flags|=1048576,W)}function k(Q){return i&&Q.alternate===null&&(Q.flags|=2),Q}function $(Q,W,Z,ue){return W===null||W.tag!==6?(W=Xf(Z,Q.mode,ue),W.return=Q,W):(W=y(W,Z),W.return=Q,W)}function z(Q,W,Z,ue){var Ne=Z.type;return Ne===P?le(Q,W,Z.props.children,ue,Z.key):W!==null&&(W.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===Y&&ib(Ne)===W.type)?(ue=y(W,Z.props),ue.ref=Co(Q,W,Z),ue.return=Q,ue):(ue=ec(Z.type,Z.key,Z.props,null,Q.mode,ue),ue.ref=Co(Q,W,Z),ue.return=Q,ue)}function ee(Q,W,Z,ue){return W===null||W.tag!==4||W.stateNode.containerInfo!==Z.containerInfo||W.stateNode.implementation!==Z.implementation?(W=Qf(Z,Q.mode,ue),W.return=Q,W):(W=y(W,Z.children||[]),W.return=Q,W)}function le(Q,W,Z,ue,Ne){return W===null||W.tag!==7?(W=vi(Z,Q.mode,ue,Ne),W.return=Q,W):(W=y(W,Z),W.return=Q,W)}function ce(Q,W,Z){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Xf(""+W,Q.mode,Z),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case A:return Z=ec(W.type,W.key,W.props,null,Q.mode,Z),Z.ref=Co(Q,null,W),Z.return=Q,Z;case N:return W=Qf(W,Q.mode,Z),W.return=Q,W;case Y:var ue=W._init;return ce(Q,ue(W._payload),Z)}if(bt(W)||X(W))return W=vi(W,Q.mode,Z,null),W.return=Q,W;kl(Q,W)}return null}function oe(Q,W,Z,ue){var Ne=W!==null?W.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Ne!==null?null:$(Q,W,""+Z,ue);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case A:return Z.key===Ne?z(Q,W,Z,ue):null;case N:return Z.key===Ne?ee(Q,W,Z,ue):null;case Y:return Ne=Z._init,oe(Q,W,Ne(Z._payload),ue)}if(bt(Z)||X(Z))return Ne!==null?null:le(Q,W,Z,ue,null);kl(Q,Z)}return null}function ye(Q,W,Z,ue,Ne){if(typeof ue=="string"&&ue!==""||typeof ue=="number")return Q=Q.get(Z)||null,$(W,Q,""+ue,Ne);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case A:return Q=Q.get(ue.key===null?Z:ue.key)||null,z(W,Q,ue,Ne);case N:return Q=Q.get(ue.key===null?Z:ue.key)||null,ee(W,Q,ue,Ne);case Y:var Ce=ue._init;return ye(Q,W,Z,Ce(ue._payload),Ne)}if(bt(ue)||X(ue))return Q=Q.get(Z)||null,le(W,Q,ue,Ne,null);kl(W,ue)}return null}function we(Q,W,Z,ue){for(var Ne=null,Ce=null,Oe=W,De=W=0,Et=null;Oe!==null&&De<Z.length;De++){Oe.index>De?(Et=Oe,Oe=null):Et=Oe.sibling;var ze=oe(Q,Oe,Z[De],ue);if(ze===null){Oe===null&&(Oe=Et);break}i&&Oe&&ze.alternate===null&&s(Q,Oe),W=j(ze,W,De),Ce===null?Ne=ze:Ce.sibling=ze,Ce=ze,Oe=Et}if(De===Z.length)return d(Q,Oe),ot&&ci(Q,De),Ne;if(Oe===null){for(;De<Z.length;De++)Oe=ce(Q,Z[De],ue),Oe!==null&&(W=j(Oe,W,De),Ce===null?Ne=Oe:Ce.sibling=Oe,Ce=Oe);return ot&&ci(Q,De),Ne}for(Oe=g(Q,Oe);De<Z.length;De++)Et=ye(Oe,Q,De,Z[De],ue),Et!==null&&(i&&Et.alternate!==null&&Oe.delete(Et.key===null?De:Et.key),W=j(Et,W,De),Ce===null?Ne=Et:Ce.sibling=Et,Ce=Et);return i&&Oe.forEach(function(Hn){return s(Q,Hn)}),ot&&ci(Q,De),Ne}function je(Q,W,Z,ue){var Ne=X(Z);if(typeof Ne!="function")throw Error(r(150));if(Z=Ne.call(Z),Z==null)throw Error(r(151));for(var Ce=Ne=null,Oe=W,De=W=0,Et=null,ze=Z.next();Oe!==null&&!ze.done;De++,ze=Z.next()){Oe.index>De?(Et=Oe,Oe=null):Et=Oe.sibling;var Hn=oe(Q,Oe,ze.value,ue);if(Hn===null){Oe===null&&(Oe=Et);break}i&&Oe&&Hn.alternate===null&&s(Q,Oe),W=j(Hn,W,De),Ce===null?Ne=Hn:Ce.sibling=Hn,Ce=Hn,Oe=Et}if(ze.done)return d(Q,Oe),ot&&ci(Q,De),Ne;if(Oe===null){for(;!ze.done;De++,ze=Z.next())ze=ce(Q,ze.value,ue),ze!==null&&(W=j(ze,W,De),Ce===null?Ne=ze:Ce.sibling=ze,Ce=ze);return ot&&ci(Q,De),Ne}for(Oe=g(Q,Oe);!ze.done;De++,ze=Z.next())ze=ye(Oe,Q,De,ze.value,ue),ze!==null&&(i&&ze.alternate!==null&&Oe.delete(ze.key===null?De:ze.key),W=j(ze,W,De),Ce===null?Ne=ze:Ce.sibling=ze,Ce=ze);return i&&Oe.forEach(function(jT){return s(Q,jT)}),ot&&ci(Q,De),Ne}function mt(Q,W,Z,ue){if(typeof Z=="object"&&Z!==null&&Z.type===P&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case A:e:{for(var Ne=Z.key,Ce=W;Ce!==null;){if(Ce.key===Ne){if(Ne=Z.type,Ne===P){if(Ce.tag===7){d(Q,Ce.sibling),W=y(Ce,Z.props.children),W.return=Q,Q=W;break e}}else if(Ce.elementType===Ne||typeof Ne=="object"&&Ne!==null&&Ne.$$typeof===Y&&ib(Ne)===Ce.type){d(Q,Ce.sibling),W=y(Ce,Z.props),W.ref=Co(Q,Ce,Z),W.return=Q,Q=W;break e}d(Q,Ce);break}else s(Q,Ce);Ce=Ce.sibling}Z.type===P?(W=vi(Z.props.children,Q.mode,ue,Z.key),W.return=Q,Q=W):(ue=ec(Z.type,Z.key,Z.props,null,Q.mode,ue),ue.ref=Co(Q,W,Z),ue.return=Q,Q=ue)}return k(Q);case N:e:{for(Ce=Z.key;W!==null;){if(W.key===Ce)if(W.tag===4&&W.stateNode.containerInfo===Z.containerInfo&&W.stateNode.implementation===Z.implementation){d(Q,W.sibling),W=y(W,Z.children||[]),W.return=Q,Q=W;break e}else{d(Q,W);break}else s(Q,W);W=W.sibling}W=Qf(Z,Q.mode,ue),W.return=Q,Q=W}return k(Q);case Y:return Ce=Z._init,mt(Q,W,Ce(Z._payload),ue)}if(bt(Z))return we(Q,W,Z,ue);if(X(Z))return je(Q,W,Z,ue);kl(Q,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,W!==null&&W.tag===6?(d(Q,W.sibling),W=y(W,Z),W.return=Q,Q=W):(d(Q,W),W=Xf(Z,Q.mode,ue),W.return=Q,Q=W),k(Q)):d(Q,W)}return mt}var na=ab(!0),ob=ab(!1),Pl=Dn(null),Tl=null,ia=null,of=null;function sf(){of=ia=Tl=null}function lf(i){var s=Pl.current;nt(Pl),i._currentValue=s}function cf(i,s,d){for(;i!==null;){var g=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,g!==null&&(g.childLanes|=s)):g!==null&&(g.childLanes&s)!==s&&(g.childLanes|=s),i===d)break;i=i.return}}function aa(i,s){Tl=i,of=ia=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Qt=!0),i.firstContext=null)}function vr(i){var s=i._currentValue;if(of!==i)if(i={context:i,memoizedValue:s,next:null},ia===null){if(Tl===null)throw Error(r(308));ia=i,Tl.dependencies={lanes:0,firstContext:i}}else ia=ia.next=i;return s}var ui=null;function uf(i){ui===null?ui=[i]:ui.push(i)}function sb(i,s,d,g){var y=s.interleaved;return y===null?(d.next=d,uf(s)):(d.next=y.next,y.next=d),s.interleaved=d,cn(i,g)}function cn(i,s){i.lanes|=s;var d=i.alternate;for(d!==null&&(d.lanes|=s),d=i,i=i.return;i!==null;)i.childLanes|=s,d=i.alternate,d!==null&&(d.childLanes|=s),d=i,i=i.return;return d.tag===3?d.stateNode:null}var $n=!1;function df(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lb(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function un(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Fn(i,s,d){var g=i.updateQueue;if(g===null)return null;if(g=g.shared,(Le&2)!==0){var y=g.pending;return y===null?s.next=s:(s.next=y.next,y.next=s),g.pending=s,cn(i,d)}return y=g.interleaved,y===null?(s.next=s,uf(g)):(s.next=y.next,y.next=s),g.interleaved=s,cn(i,d)}function Rl(i,s,d){if(s=s.updateQueue,s!==null&&(s=s.shared,(d&4194240)!==0)){var g=s.lanes;g&=i.pendingLanes,d|=g,s.lanes=d,Sd(i,d)}}function cb(i,s){var d=i.updateQueue,g=i.alternate;if(g!==null&&(g=g.updateQueue,d===g)){var y=null,j=null;if(d=d.firstBaseUpdate,d!==null){do{var k={eventTime:d.eventTime,lane:d.lane,tag:d.tag,payload:d.payload,callback:d.callback,next:null};j===null?y=j=k:j=j.next=k,d=d.next}while(d!==null);j===null?y=j=s:j=j.next=s}else y=j=s;d={baseState:g.baseState,firstBaseUpdate:y,lastBaseUpdate:j,shared:g.shared,effects:g.effects},i.updateQueue=d;return}i=d.lastBaseUpdate,i===null?d.firstBaseUpdate=s:i.next=s,d.lastBaseUpdate=s}function Dl(i,s,d,g){var y=i.updateQueue;$n=!1;var j=y.firstBaseUpdate,k=y.lastBaseUpdate,$=y.shared.pending;if($!==null){y.shared.pending=null;var z=$,ee=z.next;z.next=null,k===null?j=ee:k.next=ee,k=z;var le=i.alternate;le!==null&&(le=le.updateQueue,$=le.lastBaseUpdate,$!==k&&($===null?le.firstBaseUpdate=ee:$.next=ee,le.lastBaseUpdate=z))}if(j!==null){var ce=y.baseState;k=0,le=ee=z=null,$=j;do{var oe=$.lane,ye=$.eventTime;if((g&oe)===oe){le!==null&&(le=le.next={eventTime:ye,lane:0,tag:$.tag,payload:$.payload,callback:$.callback,next:null});e:{var we=i,je=$;switch(oe=s,ye=d,je.tag){case 1:if(we=je.payload,typeof we=="function"){ce=we.call(ye,ce,oe);break e}ce=we;break e;case 3:we.flags=we.flags&-65537|128;case 0:if(we=je.payload,oe=typeof we=="function"?we.call(ye,ce,oe):we,oe==null)break e;ce=K({},ce,oe);break e;case 2:$n=!0}}$.callback!==null&&$.lane!==0&&(i.flags|=64,oe=y.effects,oe===null?y.effects=[$]:oe.push($))}else ye={eventTime:ye,lane:oe,tag:$.tag,payload:$.payload,callback:$.callback,next:null},le===null?(ee=le=ye,z=ce):le=le.next=ye,k|=oe;if($=$.next,$===null){if($=y.shared.pending,$===null)break;oe=$,$=oe.next,oe.next=null,y.lastBaseUpdate=oe,y.shared.pending=null}}while(!0);if(le===null&&(z=ce),y.baseState=z,y.firstBaseUpdate=ee,y.lastBaseUpdate=le,s=y.shared.interleaved,s!==null){y=s;do k|=y.lane,y=y.next;while(y!==s)}else j===null&&(y.shared.lanes=0);pi|=k,i.lanes=k,i.memoizedState=ce}}function ub(i,s,d){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var g=i[s],y=g.callback;if(y!==null){if(g.callback=null,g=d,typeof y!="function")throw Error(r(191,y));y.call(g)}}}var Oo={},Gr=Dn(Oo),Eo=Dn(Oo),ko=Dn(Oo);function di(i){if(i===Oo)throw Error(r(174));return i}function ff(i,s){switch(et(ko,s),et(Eo,i),et(Gr,Oo),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:rn(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=rn(s,i)}nt(Gr),et(Gr,s)}function oa(){nt(Gr),nt(Eo),nt(ko)}function db(i){di(ko.current);var s=di(Gr.current),d=rn(s,i.type);s!==d&&(et(Eo,i),et(Gr,d))}function pf(i){Eo.current===i&&(nt(Gr),nt(Eo))}var lt=Dn(0);function Il(i){for(var s=i;s!==null;){if(s.tag===13){var d=s.memoizedState;if(d!==null&&(d=d.dehydrated,d===null||d.data==="$?"||d.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var hf=[];function mf(){for(var i=0;i<hf.length;i++)hf[i]._workInProgressVersionPrimary=null;hf.length=0}var Ml=E.ReactCurrentDispatcher,gf=E.ReactCurrentBatchConfig,fi=0,ct=null,wt=null,Ct=null,$l=!1,Po=!1,To=0,HP=0;function Lt(){throw Error(r(321))}function vf(i,s){if(s===null)return!1;for(var d=0;d<s.length&&d<i.length;d++)if(!Pr(i[d],s[d]))return!1;return!0}function yf(i,s,d,g,y,j){if(fi=j,ct=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ml.current=i===null||i.memoizedState===null?KP:XP,i=d(g,y),Po){j=0;do{if(Po=!1,To=0,25<=j)throw Error(r(301));j+=1,Ct=wt=null,s.updateQueue=null,Ml.current=QP,i=d(g,y)}while(Po)}if(Ml.current=Bl,s=wt!==null&&wt.next!==null,fi=0,Ct=wt=ct=null,$l=!1,s)throw Error(r(300));return i}function xf(){var i=To!==0;return To=0,i}function Yr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?ct.memoizedState=Ct=i:Ct=Ct.next=i,Ct}function yr(){if(wt===null){var i=ct.alternate;i=i!==null?i.memoizedState:null}else i=wt.next;var s=Ct===null?ct.memoizedState:Ct.next;if(s!==null)Ct=s,wt=i;else{if(i===null)throw Error(r(310));wt=i,i={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Ct===null?ct.memoizedState=Ct=i:Ct=Ct.next=i}return Ct}function Ro(i,s){return typeof s=="function"?s(i):s}function bf(i){var s=yr(),d=s.queue;if(d===null)throw Error(r(311));d.lastRenderedReducer=i;var g=wt,y=g.baseQueue,j=d.pending;if(j!==null){if(y!==null){var k=y.next;y.next=j.next,j.next=k}g.baseQueue=y=j,d.pending=null}if(y!==null){j=y.next,g=g.baseState;var $=k=null,z=null,ee=j;do{var le=ee.lane;if((fi&le)===le)z!==null&&(z=z.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),g=ee.hasEagerState?ee.eagerState:i(g,ee.action);else{var ce={lane:le,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};z===null?($=z=ce,k=g):z=z.next=ce,ct.lanes|=le,pi|=le}ee=ee.next}while(ee!==null&&ee!==j);z===null?k=g:z.next=$,Pr(g,s.memoizedState)||(Qt=!0),s.memoizedState=g,s.baseState=k,s.baseQueue=z,d.lastRenderedState=g}if(i=d.interleaved,i!==null){y=i;do j=y.lane,ct.lanes|=j,pi|=j,y=y.next;while(y!==i)}else y===null&&(d.lanes=0);return[s.memoizedState,d.dispatch]}function wf(i){var s=yr(),d=s.queue;if(d===null)throw Error(r(311));d.lastRenderedReducer=i;var g=d.dispatch,y=d.pending,j=s.memoizedState;if(y!==null){d.pending=null;var k=y=y.next;do j=i(j,k.action),k=k.next;while(k!==y);Pr(j,s.memoizedState)||(Qt=!0),s.memoizedState=j,s.baseQueue===null&&(s.baseState=j),d.lastRenderedState=j}return[j,g]}function fb(){}function pb(i,s){var d=ct,g=yr(),y=s(),j=!Pr(g.memoizedState,y);if(j&&(g.memoizedState=y,Qt=!0),g=g.queue,_f(gb.bind(null,d,g,i),[i]),g.getSnapshot!==s||j||Ct!==null&&Ct.memoizedState.tag&1){if(d.flags|=2048,Do(9,mb.bind(null,d,g,y,s),void 0,null),Ot===null)throw Error(r(349));(fi&30)!==0||hb(d,s,y)}return y}function hb(i,s,d){i.flags|=16384,i={getSnapshot:s,value:d},s=ct.updateQueue,s===null?(s={lastEffect:null,stores:null},ct.updateQueue=s,s.stores=[i]):(d=s.stores,d===null?s.stores=[i]:d.push(i))}function mb(i,s,d,g){s.value=d,s.getSnapshot=g,vb(s)&&yb(i)}function gb(i,s,d){return d(function(){vb(s)&&yb(i)})}function vb(i){var s=i.getSnapshot;i=i.value;try{var d=s();return!Pr(i,d)}catch{return!0}}function yb(i){var s=cn(i,1);s!==null&&Mr(s,i,1,-1)}function xb(i){var s=Yr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:i},s.queue=i,i=i.dispatch=VP.bind(null,ct,i),[s.memoizedState,i]}function Do(i,s,d,g){return i={tag:i,create:s,destroy:d,deps:g,next:null},s=ct.updateQueue,s===null?(s={lastEffect:null,stores:null},ct.updateQueue=s,s.lastEffect=i.next=i):(d=s.lastEffect,d===null?s.lastEffect=i.next=i:(g=d.next,d.next=i,i.next=g,s.lastEffect=i)),i}function bb(){return yr().memoizedState}function Fl(i,s,d,g){var y=Yr();ct.flags|=i,y.memoizedState=Do(1|s,d,void 0,g===void 0?null:g)}function Ll(i,s,d,g){var y=yr();g=g===void 0?null:g;var j=void 0;if(wt!==null){var k=wt.memoizedState;if(j=k.destroy,g!==null&&vf(g,k.deps)){y.memoizedState=Do(s,d,j,g);return}}ct.flags|=i,y.memoizedState=Do(1|s,d,j,g)}function wb(i,s){return Fl(8390656,8,i,s)}function _f(i,s){return Ll(2048,8,i,s)}function _b(i,s){return Ll(4,2,i,s)}function jb(i,s){return Ll(4,4,i,s)}function Sb(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Nb(i,s,d){return d=d!=null?d.concat([i]):null,Ll(4,4,Sb.bind(null,s,i),d)}function jf(){}function Ab(i,s){var d=yr();s=s===void 0?null:s;var g=d.memoizedState;return g!==null&&s!==null&&vf(s,g[1])?g[0]:(d.memoizedState=[i,s],i)}function Cb(i,s){var d=yr();s=s===void 0?null:s;var g=d.memoizedState;return g!==null&&s!==null&&vf(s,g[1])?g[0]:(i=i(),d.memoizedState=[i,s],i)}function Ob(i,s,d){return(fi&21)===0?(i.baseState&&(i.baseState=!1,Qt=!0),i.memoizedState=d):(Pr(d,s)||(d=i0(),ct.lanes|=d,pi|=d,i.baseState=!0),s)}function GP(i,s){var d=Ve;Ve=d!==0&&4>d?d:4,i(!0);var g=gf.transition;gf.transition={};try{i(!1),s()}finally{Ve=d,gf.transition=g}}function Eb(){return yr().memoizedState}function YP(i,s,d){var g=qn(i);if(d={lane:g,action:d,hasEagerState:!1,eagerState:null,next:null},kb(i))Pb(s,d);else if(d=sb(i,s,d,g),d!==null){var y=Yt();Mr(d,i,g,y),Tb(d,s,g)}}function VP(i,s,d){var g=qn(i),y={lane:g,action:d,hasEagerState:!1,eagerState:null,next:null};if(kb(i))Pb(s,y);else{var j=i.alternate;if(i.lanes===0&&(j===null||j.lanes===0)&&(j=s.lastRenderedReducer,j!==null))try{var k=s.lastRenderedState,$=j(k,d);if(y.hasEagerState=!0,y.eagerState=$,Pr($,k)){var z=s.interleaved;z===null?(y.next=y,uf(s)):(y.next=z.next,z.next=y),s.interleaved=y;return}}catch{}d=sb(i,s,y,g),d!==null&&(y=Yt(),Mr(d,i,g,y),Tb(d,s,g))}}function kb(i){var s=i.alternate;return i===ct||s!==null&&s===ct}function Pb(i,s){Po=$l=!0;var d=i.pending;d===null?s.next=s:(s.next=d.next,d.next=s),i.pending=s}function Tb(i,s,d){if((d&4194240)!==0){var g=s.lanes;g&=i.pendingLanes,d|=g,s.lanes=d,Sd(i,d)}}var Bl={readContext:vr,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},KP={readContext:vr,useCallback:function(i,s){return Yr().memoizedState=[i,s===void 0?null:s],i},useContext:vr,useEffect:wb,useImperativeHandle:function(i,s,d){return d=d!=null?d.concat([i]):null,Fl(4194308,4,Sb.bind(null,s,i),d)},useLayoutEffect:function(i,s){return Fl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Fl(4,2,i,s)},useMemo:function(i,s){var d=Yr();return s=s===void 0?null:s,i=i(),d.memoizedState=[i,s],i},useReducer:function(i,s,d){var g=Yr();return s=d!==void 0?d(s):s,g.memoizedState=g.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},g.queue=i,i=i.dispatch=YP.bind(null,ct,i),[g.memoizedState,i]},useRef:function(i){var s=Yr();return i={current:i},s.memoizedState=i},useState:xb,useDebugValue:jf,useDeferredValue:function(i){return Yr().memoizedState=i},useTransition:function(){var i=xb(!1),s=i[0];return i=GP.bind(null,i[1]),Yr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,d){var g=ct,y=Yr();if(ot){if(d===void 0)throw Error(r(407));d=d()}else{if(d=s(),Ot===null)throw Error(r(349));(fi&30)!==0||hb(g,s,d)}y.memoizedState=d;var j={value:d,getSnapshot:s};return y.queue=j,wb(gb.bind(null,g,j,i),[i]),g.flags|=2048,Do(9,mb.bind(null,g,j,d,s),void 0,null),d},useId:function(){var i=Yr(),s=Ot.identifierPrefix;if(ot){var d=ln,g=sn;d=(g&~(1<<32-kr(g)-1)).toString(32)+d,s=":"+s+"R"+d,d=To++,0<d&&(s+="H"+d.toString(32)),s+=":"}else d=HP++,s=":"+s+"r"+d.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},XP={readContext:vr,useCallback:Ab,useContext:vr,useEffect:_f,useImperativeHandle:Nb,useInsertionEffect:_b,useLayoutEffect:jb,useMemo:Cb,useReducer:bf,useRef:bb,useState:function(){return bf(Ro)},useDebugValue:jf,useDeferredValue:function(i){var s=yr();return Ob(s,wt.memoizedState,i)},useTransition:function(){var i=bf(Ro)[0],s=yr().memoizedState;return[i,s]},useMutableSource:fb,useSyncExternalStore:pb,useId:Eb,unstable_isNewReconciler:!1},QP={readContext:vr,useCallback:Ab,useContext:vr,useEffect:_f,useImperativeHandle:Nb,useInsertionEffect:_b,useLayoutEffect:jb,useMemo:Cb,useReducer:wf,useRef:bb,useState:function(){return wf(Ro)},useDebugValue:jf,useDeferredValue:function(i){var s=yr();return wt===null?s.memoizedState=i:Ob(s,wt.memoizedState,i)},useTransition:function(){var i=wf(Ro)[0],s=yr().memoizedState;return[i,s]},useMutableSource:fb,useSyncExternalStore:pb,useId:Eb,unstable_isNewReconciler:!1};function Rr(i,s){if(i&&i.defaultProps){s=K({},s),i=i.defaultProps;for(var d in i)s[d]===void 0&&(s[d]=i[d]);return s}return s}function Sf(i,s,d,g){s=i.memoizedState,d=d(g,s),d=d==null?s:K({},s,d),i.memoizedState=d,i.lanes===0&&(i.updateQueue.baseState=d)}var zl={isMounted:function(i){return(i=i._reactInternals)?ai(i)===i:!1},enqueueSetState:function(i,s,d){i=i._reactInternals;var g=Yt(),y=qn(i),j=un(g,y);j.payload=s,d!=null&&(j.callback=d),s=Fn(i,j,y),s!==null&&(Mr(s,i,y,g),Rl(s,i,y))},enqueueReplaceState:function(i,s,d){i=i._reactInternals;var g=Yt(),y=qn(i),j=un(g,y);j.tag=1,j.payload=s,d!=null&&(j.callback=d),s=Fn(i,j,y),s!==null&&(Mr(s,i,y,g),Rl(s,i,y))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var d=Yt(),g=qn(i),y=un(d,g);y.tag=2,s!=null&&(y.callback=s),s=Fn(i,y,g),s!==null&&(Mr(s,i,g,d),Rl(s,i,g))}};function Rb(i,s,d,g,y,j,k){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(g,j,k):s.prototype&&s.prototype.isPureReactComponent?!bo(d,g)||!bo(y,j):!0}function Db(i,s,d){var g=!1,y=In,j=s.contextType;return typeof j=="object"&&j!==null?j=vr(j):(y=Xt(s)?si:Ft.current,g=s.contextTypes,j=(g=g!=null)?Ji(i,y):In),s=new s(d,j),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zl,i.stateNode=s,s._reactInternals=i,g&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=y,i.__reactInternalMemoizedMaskedChildContext=j),s}function Ib(i,s,d,g){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(d,g),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(d,g),s.state!==i&&zl.enqueueReplaceState(s,s.state,null)}function Nf(i,s,d,g){var y=i.stateNode;y.props=d,y.state=i.memoizedState,y.refs={},df(i);var j=s.contextType;typeof j=="object"&&j!==null?y.context=vr(j):(j=Xt(s)?si:Ft.current,y.context=Ji(i,j)),y.state=i.memoizedState,j=s.getDerivedStateFromProps,typeof j=="function"&&(Sf(i,s,j,d),y.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof y.getSnapshotBeforeUpdate=="function"||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(s=y.state,typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount(),s!==y.state&&zl.enqueueReplaceState(y,y.state,null),Dl(i,d,y,g),y.state=i.memoizedState),typeof y.componentDidMount=="function"&&(i.flags|=4194308)}function sa(i,s){try{var d="",g=s;do d+=fe(g),g=g.return;while(g);var y=d}catch(j){y=`
Error generating stack: `+j.message+`
`+j.stack}return{value:i,source:s,stack:y,digest:null}}function Af(i,s,d){return{value:i,source:null,stack:d??null,digest:s??null}}function Cf(i,s){try{console.error(s.value)}catch(d){setTimeout(function(){throw d})}}var ZP=typeof WeakMap=="function"?WeakMap:Map;function Mb(i,s,d){d=un(-1,d),d.tag=3,d.payload={element:null};var g=s.value;return d.callback=function(){Vl||(Vl=!0,qf=g),Cf(i,s)},d}function $b(i,s,d){d=un(-1,d),d.tag=3;var g=i.type.getDerivedStateFromError;if(typeof g=="function"){var y=s.value;d.payload=function(){return g(y)},d.callback=function(){Cf(i,s)}}var j=i.stateNode;return j!==null&&typeof j.componentDidCatch=="function"&&(d.callback=function(){Cf(i,s),typeof g!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var k=s.stack;this.componentDidCatch(s.value,{componentStack:k!==null?k:""})}),d}function Fb(i,s,d){var g=i.pingCache;if(g===null){g=i.pingCache=new ZP;var y=new Set;g.set(s,y)}else y=g.get(s),y===void 0&&(y=new Set,g.set(s,y));y.has(d)||(y.add(d),i=fT.bind(null,i,s,d),s.then(i,i))}function Lb(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Bb(i,s,d,g,y){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,d.flags|=131072,d.flags&=-52805,d.tag===1&&(d.alternate===null?d.tag=17:(s=un(-1,1),s.tag=2,Fn(d,s,1))),d.lanes|=1),i):(i.flags|=65536,i.lanes=y,i)}var JP=E.ReactCurrentOwner,Qt=!1;function Gt(i,s,d,g){s.child=i===null?ob(s,null,d,g):na(s,i.child,d,g)}function zb(i,s,d,g,y){d=d.render;var j=s.ref;return aa(s,y),g=yf(i,s,d,g,j,y),d=xf(),i!==null&&!Qt?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~y,dn(i,s,y)):(ot&&d&&ef(s),s.flags|=1,Gt(i,s,g,y),s.child)}function qb(i,s,d,g,y){if(i===null){var j=d.type;return typeof j=="function"&&!Kf(j)&&j.defaultProps===void 0&&d.compare===null&&d.defaultProps===void 0?(s.tag=15,s.type=j,Ub(i,s,j,g,y)):(i=ec(d.type,null,g,s,s.mode,y),i.ref=s.ref,i.return=s,s.child=i)}if(j=i.child,(i.lanes&y)===0){var k=j.memoizedProps;if(d=d.compare,d=d!==null?d:bo,d(k,g)&&i.ref===s.ref)return dn(i,s,y)}return s.flags|=1,i=Wn(j,g),i.ref=s.ref,i.return=s,s.child=i}function Ub(i,s,d,g,y){if(i!==null){var j=i.memoizedProps;if(bo(j,g)&&i.ref===s.ref)if(Qt=!1,s.pendingProps=g=j,(i.lanes&y)!==0)(i.flags&131072)!==0&&(Qt=!0);else return s.lanes=i.lanes,dn(i,s,y)}return Of(i,s,d,g,y)}function Wb(i,s,d){var g=s.pendingProps,y=g.children,j=i!==null?i.memoizedState:null;if(g.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},et(ca,dr),dr|=d;else{if((d&1073741824)===0)return i=j!==null?j.baseLanes|d:d,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,et(ca,dr),dr|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},g=j!==null?j.baseLanes:d,et(ca,dr),dr|=g}else j!==null?(g=j.baseLanes|d,s.memoizedState=null):g=d,et(ca,dr),dr|=g;return Gt(i,s,y,d),s.child}function Hb(i,s){var d=s.ref;(i===null&&d!==null||i!==null&&i.ref!==d)&&(s.flags|=512,s.flags|=2097152)}function Of(i,s,d,g,y){var j=Xt(d)?si:Ft.current;return j=Ji(s,j),aa(s,y),d=yf(i,s,d,g,j,y),g=xf(),i!==null&&!Qt?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~y,dn(i,s,y)):(ot&&g&&ef(s),s.flags|=1,Gt(i,s,d,y),s.child)}function Gb(i,s,d,g,y){if(Xt(d)){var j=!0;Nl(s)}else j=!1;if(aa(s,y),s.stateNode===null)Ul(i,s),Db(s,d,g),Nf(s,d,g,y),g=!0;else if(i===null){var k=s.stateNode,$=s.memoizedProps;k.props=$;var z=k.context,ee=d.contextType;typeof ee=="object"&&ee!==null?ee=vr(ee):(ee=Xt(d)?si:Ft.current,ee=Ji(s,ee));var le=d.getDerivedStateFromProps,ce=typeof le=="function"||typeof k.getSnapshotBeforeUpdate=="function";ce||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||($!==g||z!==ee)&&Ib(s,k,g,ee),$n=!1;var oe=s.memoizedState;k.state=oe,Dl(s,g,k,y),z=s.memoizedState,$!==g||oe!==z||Kt.current||$n?(typeof le=="function"&&(Sf(s,d,le,g),z=s.memoizedState),($=$n||Rb(s,d,$,g,oe,z,ee))?(ce||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(s.flags|=4194308)):(typeof k.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=g,s.memoizedState=z),k.props=g,k.state=z,k.context=ee,g=$):(typeof k.componentDidMount=="function"&&(s.flags|=4194308),g=!1)}else{k=s.stateNode,lb(i,s),$=s.memoizedProps,ee=s.type===s.elementType?$:Rr(s.type,$),k.props=ee,ce=s.pendingProps,oe=k.context,z=d.contextType,typeof z=="object"&&z!==null?z=vr(z):(z=Xt(d)?si:Ft.current,z=Ji(s,z));var ye=d.getDerivedStateFromProps;(le=typeof ye=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||($!==ce||oe!==z)&&Ib(s,k,g,z),$n=!1,oe=s.memoizedState,k.state=oe,Dl(s,g,k,y);var we=s.memoizedState;$!==ce||oe!==we||Kt.current||$n?(typeof ye=="function"&&(Sf(s,d,ye,g),we=s.memoizedState),(ee=$n||Rb(s,d,ee,g,oe,we,z)||!1)?(le||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(g,we,z),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(g,we,z)),typeof k.componentDidUpdate=="function"&&(s.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof k.componentDidUpdate!="function"||$===i.memoizedProps&&oe===i.memoizedState||(s.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||$===i.memoizedProps&&oe===i.memoizedState||(s.flags|=1024),s.memoizedProps=g,s.memoizedState=we),k.props=g,k.state=we,k.context=z,g=ee):(typeof k.componentDidUpdate!="function"||$===i.memoizedProps&&oe===i.memoizedState||(s.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||$===i.memoizedProps&&oe===i.memoizedState||(s.flags|=1024),g=!1)}return Ef(i,s,d,g,j,y)}function Ef(i,s,d,g,y,j){Hb(i,s);var k=(s.flags&128)!==0;if(!g&&!k)return y&&Q0(s,d,!1),dn(i,s,j);g=s.stateNode,JP.current=s;var $=k&&typeof d.getDerivedStateFromError!="function"?null:g.render();return s.flags|=1,i!==null&&k?(s.child=na(s,i.child,null,j),s.child=na(s,null,$,j)):Gt(i,s,$,j),s.memoizedState=g.state,y&&Q0(s,d,!0),s.child}function Yb(i){var s=i.stateNode;s.pendingContext?K0(i,s.pendingContext,s.pendingContext!==s.context):s.context&&K0(i,s.context,!1),ff(i,s.containerInfo)}function Vb(i,s,d,g,y){return ra(),af(y),s.flags|=256,Gt(i,s,d,g),s.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function Pf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Kb(i,s,d){var g=s.pendingProps,y=lt.current,j=!1,k=(s.flags&128)!==0,$;if(($=k)||($=i!==null&&i.memoizedState===null?!1:(y&2)!==0),$?(j=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(y|=1),et(lt,y&1),i===null)return nf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(k=g.children,i=g.fallback,j?(g=s.mode,j=s.child,k={mode:"hidden",children:k},(g&1)===0&&j!==null?(j.childLanes=0,j.pendingProps=k):j=tc(k,g,0,null),i=vi(i,g,d,null),j.return=s,i.return=s,j.sibling=i,s.child=j,s.child.memoizedState=Pf(d),s.memoizedState=kf,i):Tf(s,k));if(y=i.memoizedState,y!==null&&($=y.dehydrated,$!==null))return eT(i,s,k,g,$,y,d);if(j){j=g.fallback,k=s.mode,y=i.child,$=y.sibling;var z={mode:"hidden",children:g.children};return(k&1)===0&&s.child!==y?(g=s.child,g.childLanes=0,g.pendingProps=z,s.deletions=null):(g=Wn(y,z),g.subtreeFlags=y.subtreeFlags&14680064),$!==null?j=Wn($,j):(j=vi(j,k,d,null),j.flags|=2),j.return=s,g.return=s,g.sibling=j,s.child=g,g=j,j=s.child,k=i.child.memoizedState,k=k===null?Pf(d):{baseLanes:k.baseLanes|d,cachePool:null,transitions:k.transitions},j.memoizedState=k,j.childLanes=i.childLanes&~d,s.memoizedState=kf,g}return j=i.child,i=j.sibling,g=Wn(j,{mode:"visible",children:g.children}),(s.mode&1)===0&&(g.lanes=d),g.return=s,g.sibling=null,i!==null&&(d=s.deletions,d===null?(s.deletions=[i],s.flags|=16):d.push(i)),s.child=g,s.memoizedState=null,g}function Tf(i,s){return s=tc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function ql(i,s,d,g){return g!==null&&af(g),na(s,i.child,null,d),i=Tf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function eT(i,s,d,g,y,j,k){if(d)return s.flags&256?(s.flags&=-257,g=Af(Error(r(422))),ql(i,s,k,g)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(j=g.fallback,y=s.mode,g=tc({mode:"visible",children:g.children},y,0,null),j=vi(j,y,k,null),j.flags|=2,g.return=s,j.return=s,g.sibling=j,s.child=g,(s.mode&1)!==0&&na(s,i.child,null,k),s.child.memoizedState=Pf(k),s.memoizedState=kf,j);if((s.mode&1)===0)return ql(i,s,k,null);if(y.data==="$!"){if(g=y.nextSibling&&y.nextSibling.dataset,g)var $=g.dgst;return g=$,j=Error(r(419)),g=Af(j,g,void 0),ql(i,s,k,g)}if($=(k&i.childLanes)!==0,Qt||$){if(g=Ot,g!==null){switch(k&-k){case 4:y=2;break;case 16:y=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:y=32;break;case 536870912:y=268435456;break;default:y=0}y=(y&(g.suspendedLanes|k))!==0?0:y,y!==0&&y!==j.retryLane&&(j.retryLane=y,cn(i,y),Mr(g,i,y,-1))}return Vf(),g=Af(Error(r(421))),ql(i,s,k,g)}return y.data==="$?"?(s.flags|=128,s.child=i.child,s=pT.bind(null,i),y._reactRetry=s,null):(i=j.treeContext,ur=Rn(y.nextSibling),cr=s,ot=!0,Tr=null,i!==null&&(mr[gr++]=sn,mr[gr++]=ln,mr[gr++]=li,sn=i.id,ln=i.overflow,li=s),s=Tf(s,g.children),s.flags|=4096,s)}function Xb(i,s,d){i.lanes|=s;var g=i.alternate;g!==null&&(g.lanes|=s),cf(i.return,s,d)}function Rf(i,s,d,g,y){var j=i.memoizedState;j===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:g,tail:d,tailMode:y}:(j.isBackwards=s,j.rendering=null,j.renderingStartTime=0,j.last=g,j.tail=d,j.tailMode=y)}function Qb(i,s,d){var g=s.pendingProps,y=g.revealOrder,j=g.tail;if(Gt(i,s,g.children,d),g=lt.current,(g&2)!==0)g=g&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Xb(i,d,s);else if(i.tag===19)Xb(i,d,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}g&=1}if(et(lt,g),(s.mode&1)===0)s.memoizedState=null;else switch(y){case"forwards":for(d=s.child,y=null;d!==null;)i=d.alternate,i!==null&&Il(i)===null&&(y=d),d=d.sibling;d=y,d===null?(y=s.child,s.child=null):(y=d.sibling,d.sibling=null),Rf(s,!1,y,d,j);break;case"backwards":for(d=null,y=s.child,s.child=null;y!==null;){if(i=y.alternate,i!==null&&Il(i)===null){s.child=y;break}i=y.sibling,y.sibling=d,d=y,y=i}Rf(s,!0,d,null,j);break;case"together":Rf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ul(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function dn(i,s,d){if(i!==null&&(s.dependencies=i.dependencies),pi|=s.lanes,(d&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(r(153));if(s.child!==null){for(i=s.child,d=Wn(i,i.pendingProps),s.child=d,d.return=s;i.sibling!==null;)i=i.sibling,d=d.sibling=Wn(i,i.pendingProps),d.return=s;d.sibling=null}return s.child}function tT(i,s,d){switch(s.tag){case 3:Yb(s),ra();break;case 5:db(s);break;case 1:Xt(s.type)&&Nl(s);break;case 4:ff(s,s.stateNode.containerInfo);break;case 10:var g=s.type._context,y=s.memoizedProps.value;et(Pl,g._currentValue),g._currentValue=y;break;case 13:if(g=s.memoizedState,g!==null)return g.dehydrated!==null?(et(lt,lt.current&1),s.flags|=128,null):(d&s.child.childLanes)!==0?Kb(i,s,d):(et(lt,lt.current&1),i=dn(i,s,d),i!==null?i.sibling:null);et(lt,lt.current&1);break;case 19:if(g=(d&s.childLanes)!==0,(i.flags&128)!==0){if(g)return Qb(i,s,d);s.flags|=128}if(y=s.memoizedState,y!==null&&(y.rendering=null,y.tail=null,y.lastEffect=null),et(lt,lt.current),g)break;return null;case 22:case 23:return s.lanes=0,Wb(i,s,d)}return dn(i,s,d)}var Zb,Df,Jb,e1;Zb=function(i,s){for(var d=s.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break;for(;d.sibling===null;){if(d.return===null||d.return===s)return;d=d.return}d.sibling.return=d.return,d=d.sibling}},Df=function(){},Jb=function(i,s,d,g){var y=i.memoizedProps;if(y!==g){i=s.stateNode,di(Gr.current);var j=null;switch(d){case"input":y=Ee(i,y),g=Ee(i,g),j=[];break;case"select":y=K({},y,{value:void 0}),g=K({},g,{value:void 0}),j=[];break;case"textarea":y=$t(i,y),g=$t(i,g),j=[];break;default:typeof y.onClick!="function"&&typeof g.onClick=="function"&&(i.onclick=_l)}to(d,g);var k;d=null;for(ee in y)if(!g.hasOwnProperty(ee)&&y.hasOwnProperty(ee)&&y[ee]!=null)if(ee==="style"){var $=y[ee];for(k in $)$.hasOwnProperty(k)&&(d||(d={}),d[k]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?j||(j=[]):(j=j||[]).push(ee,null));for(ee in g){var z=g[ee];if($=y?.[ee],g.hasOwnProperty(ee)&&z!==$&&(z!=null||$!=null))if(ee==="style")if($){for(k in $)!$.hasOwnProperty(k)||z&&z.hasOwnProperty(k)||(d||(d={}),d[k]="");for(k in z)z.hasOwnProperty(k)&&$[k]!==z[k]&&(d||(d={}),d[k]=z[k])}else d||(j||(j=[]),j.push(ee,d)),d=z;else ee==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,$=$?$.__html:void 0,z!=null&&$!==z&&(j=j||[]).push(ee,z)):ee==="children"?typeof z!="string"&&typeof z!="number"||(j=j||[]).push(ee,""+z):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(z!=null&&ee==="onScroll"&&rt("scroll",i),j||$===z||(j=[])):(j=j||[]).push(ee,z))}d&&(j=j||[]).push("style",d);var ee=j;(s.updateQueue=ee)&&(s.flags|=4)}},e1=function(i,s,d,g){d!==g&&(s.flags|=4)};function Io(i,s){if(!ot)switch(i.tailMode){case"hidden":s=i.tail;for(var d=null;s!==null;)s.alternate!==null&&(d=s),s=s.sibling;d===null?i.tail=null:d.sibling=null;break;case"collapsed":d=i.tail;for(var g=null;d!==null;)d.alternate!==null&&(g=d),d=d.sibling;g===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:g.sibling=null}}function Bt(i){var s=i.alternate!==null&&i.alternate.child===i.child,d=0,g=0;if(s)for(var y=i.child;y!==null;)d|=y.lanes|y.childLanes,g|=y.subtreeFlags&14680064,g|=y.flags&14680064,y.return=i,y=y.sibling;else for(y=i.child;y!==null;)d|=y.lanes|y.childLanes,g|=y.subtreeFlags,g|=y.flags,y.return=i,y=y.sibling;return i.subtreeFlags|=g,i.childLanes=d,s}function rT(i,s,d){var g=s.pendingProps;switch(tf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(s),null;case 1:return Xt(s.type)&&Sl(),Bt(s),null;case 3:return g=s.stateNode,oa(),nt(Kt),nt(Ft),mf(),g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null),(i===null||i.child===null)&&(El(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Tr!==null&&(Hf(Tr),Tr=null))),Df(i,s),Bt(s),null;case 5:pf(s);var y=di(ko.current);if(d=s.type,i!==null&&s.stateNode!=null)Jb(i,s,d,g,y),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!g){if(s.stateNode===null)throw Error(r(166));return Bt(s),null}if(i=di(Gr.current),El(s)){g=s.stateNode,d=s.type;var j=s.memoizedProps;switch(g[Hr]=s,g[No]=j,i=(s.mode&1)!==0,d){case"dialog":rt("cancel",g),rt("close",g);break;case"iframe":case"object":case"embed":rt("load",g);break;case"video":case"audio":for(y=0;y<_o.length;y++)rt(_o[y],g);break;case"source":rt("error",g);break;case"img":case"image":case"link":rt("error",g),rt("load",g);break;case"details":rt("toggle",g);break;case"input":Ke(g,j),rt("invalid",g);break;case"select":g._wrapperState={wasMultiple:!!j.multiple},rt("invalid",g);break;case"textarea":or(g,j),rt("invalid",g)}to(d,j),y=null;for(var k in j)if(j.hasOwnProperty(k)){var $=j[k];k==="children"?typeof $=="string"?g.textContent!==$&&(j.suppressHydrationWarning!==!0&&wl(g.textContent,$,i),y=["children",$]):typeof $=="number"&&g.textContent!==""+$&&(j.suppressHydrationWarning!==!0&&wl(g.textContent,$,i),y=["children",""+$]):a.hasOwnProperty(k)&&$!=null&&k==="onScroll"&&rt("scroll",g)}switch(d){case"input":se(g),Be(g,j,!0);break;case"textarea":se(g),An(g);break;case"select":case"option":break;default:typeof j.onClick=="function"&&(g.onclick=_l)}g=y,s.updateQueue=g,g!==null&&(s.flags|=4)}else{k=y.nodeType===9?y:y.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=ni(d)),i==="http://www.w3.org/1999/xhtml"?d==="script"?(i=k.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof g.is=="string"?i=k.createElement(d,{is:g.is}):(i=k.createElement(d),d==="select"&&(k=i,g.multiple?k.multiple=!0:g.size&&(k.size=g.size))):i=k.createElementNS(i,d),i[Hr]=s,i[No]=g,Zb(i,s,!1,!1),s.stateNode=i;e:{switch(k=ro(d,g),d){case"dialog":rt("cancel",i),rt("close",i),y=g;break;case"iframe":case"object":case"embed":rt("load",i),y=g;break;case"video":case"audio":for(y=0;y<_o.length;y++)rt(_o[y],i);y=g;break;case"source":rt("error",i),y=g;break;case"img":case"image":case"link":rt("error",i),rt("load",i),y=g;break;case"details":rt("toggle",i),y=g;break;case"input":Ke(i,g),y=Ee(i,g),rt("invalid",i);break;case"option":y=g;break;case"select":i._wrapperState={wasMultiple:!!g.multiple},y=K({},g,{value:void 0}),rt("invalid",i);break;case"textarea":or(i,g),y=$t(i,g),rt("invalid",i);break;default:y=g}to(d,y),$=y;for(j in $)if($.hasOwnProperty(j)){var z=$[j];j==="style"?ii(i,z):j==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ie(i,z)):j==="children"?typeof z=="string"?(d!=="textarea"||z!=="")&&at(i,z):typeof z=="number"&&at(i,""+z):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(a.hasOwnProperty(j)?z!=null&&j==="onScroll"&&rt("scroll",i):z!=null&&O(i,j,z,k))}switch(d){case"input":se(i),Be(i,g,!1);break;case"textarea":se(i),An(i);break;case"option":g.value!=null&&i.setAttribute("value",""+me(g.value));break;case"select":i.multiple=!!g.multiple,j=g.value,j!=null?gt(i,!!g.multiple,j,!1):g.defaultValue!=null&&gt(i,!!g.multiple,g.defaultValue,!0);break;default:typeof y.onClick=="function"&&(i.onclick=_l)}switch(d){case"button":case"input":case"select":case"textarea":g=!!g.autoFocus;break e;case"img":g=!0;break e;default:g=!1}}g&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Bt(s),null;case 6:if(i&&s.stateNode!=null)e1(i,s,i.memoizedProps,g);else{if(typeof g!="string"&&s.stateNode===null)throw Error(r(166));if(d=di(ko.current),di(Gr.current),El(s)){if(g=s.stateNode,d=s.memoizedProps,g[Hr]=s,(j=g.nodeValue!==d)&&(i=cr,i!==null))switch(i.tag){case 3:wl(g.nodeValue,d,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&wl(g.nodeValue,d,(i.mode&1)!==0)}j&&(s.flags|=4)}else g=(d.nodeType===9?d:d.ownerDocument).createTextNode(g),g[Hr]=s,s.stateNode=g}return Bt(s),null;case 13:if(nt(lt),g=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(ot&&ur!==null&&(s.mode&1)!==0&&(s.flags&128)===0)nb(),ra(),s.flags|=98560,j=!1;else if(j=El(s),g!==null&&g.dehydrated!==null){if(i===null){if(!j)throw Error(r(318));if(j=s.memoizedState,j=j!==null?j.dehydrated:null,!j)throw Error(r(317));j[Hr]=s}else ra(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Bt(s),j=!1}else Tr!==null&&(Hf(Tr),Tr=null),j=!0;if(!j)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=d,s):(g=g!==null,g!==(i!==null&&i.memoizedState!==null)&&g&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(lt.current&1)!==0?_t===0&&(_t=3):Vf())),s.updateQueue!==null&&(s.flags|=4),Bt(s),null);case 4:return oa(),Df(i,s),i===null&&jo(s.stateNode.containerInfo),Bt(s),null;case 10:return lf(s.type._context),Bt(s),null;case 17:return Xt(s.type)&&Sl(),Bt(s),null;case 19:if(nt(lt),j=s.memoizedState,j===null)return Bt(s),null;if(g=(s.flags&128)!==0,k=j.rendering,k===null)if(g)Io(j,!1);else{if(_t!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(k=Il(i),k!==null){for(s.flags|=128,Io(j,!1),g=k.updateQueue,g!==null&&(s.updateQueue=g,s.flags|=4),s.subtreeFlags=0,g=d,d=s.child;d!==null;)j=d,i=g,j.flags&=14680066,k=j.alternate,k===null?(j.childLanes=0,j.lanes=i,j.child=null,j.subtreeFlags=0,j.memoizedProps=null,j.memoizedState=null,j.updateQueue=null,j.dependencies=null,j.stateNode=null):(j.childLanes=k.childLanes,j.lanes=k.lanes,j.child=k.child,j.subtreeFlags=0,j.deletions=null,j.memoizedProps=k.memoizedProps,j.memoizedState=k.memoizedState,j.updateQueue=k.updateQueue,j.type=k.type,i=k.dependencies,j.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),d=d.sibling;return et(lt,lt.current&1|2),s.child}i=i.sibling}j.tail!==null&&ht()>ua&&(s.flags|=128,g=!0,Io(j,!1),s.lanes=4194304)}else{if(!g)if(i=Il(k),i!==null){if(s.flags|=128,g=!0,d=i.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),Io(j,!0),j.tail===null&&j.tailMode==="hidden"&&!k.alternate&&!ot)return Bt(s),null}else 2*ht()-j.renderingStartTime>ua&&d!==1073741824&&(s.flags|=128,g=!0,Io(j,!1),s.lanes=4194304);j.isBackwards?(k.sibling=s.child,s.child=k):(d=j.last,d!==null?d.sibling=k:s.child=k,j.last=k)}return j.tail!==null?(s=j.tail,j.rendering=s,j.tail=s.sibling,j.renderingStartTime=ht(),s.sibling=null,d=lt.current,et(lt,g?d&1|2:d&1),s):(Bt(s),null);case 22:case 23:return Yf(),g=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==g&&(s.flags|=8192),g&&(s.mode&1)!==0?(dr&1073741824)!==0&&(Bt(s),s.subtreeFlags&6&&(s.flags|=8192)):Bt(s),null;case 24:return null;case 25:return null}throw Error(r(156,s.tag))}function nT(i,s){switch(tf(s),s.tag){case 1:return Xt(s.type)&&Sl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return oa(),nt(Kt),nt(Ft),mf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return pf(s),null;case 13:if(nt(lt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(r(340));ra()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return nt(lt),null;case 4:return oa(),null;case 10:return lf(s.type._context),null;case 22:case 23:return Yf(),null;case 24:return null;default:return null}}var Wl=!1,zt=!1,iT=typeof WeakSet=="function"?WeakSet:Set,xe=null;function la(i,s){var d=i.ref;if(d!==null)if(typeof d=="function")try{d(null)}catch(g){ut(i,s,g)}else d.current=null}function If(i,s,d){try{d()}catch(g){ut(i,s,g)}}var t1=!1;function aT(i,s){if(Gd=ul,i=R0(),Fd(i)){if("selectionStart"in i)var d={start:i.selectionStart,end:i.selectionEnd};else e:{d=(d=i.ownerDocument)&&d.defaultView||window;var g=d.getSelection&&d.getSelection();if(g&&g.rangeCount!==0){d=g.anchorNode;var y=g.anchorOffset,j=g.focusNode;g=g.focusOffset;try{d.nodeType,j.nodeType}catch{d=null;break e}var k=0,$=-1,z=-1,ee=0,le=0,ce=i,oe=null;t:for(;;){for(var ye;ce!==d||y!==0&&ce.nodeType!==3||($=k+y),ce!==j||g!==0&&ce.nodeType!==3||(z=k+g),ce.nodeType===3&&(k+=ce.nodeValue.length),(ye=ce.firstChild)!==null;)oe=ce,ce=ye;for(;;){if(ce===i)break t;if(oe===d&&++ee===y&&($=k),oe===j&&++le===g&&(z=k),(ye=ce.nextSibling)!==null)break;ce=oe,oe=ce.parentNode}ce=ye}d=$===-1||z===-1?null:{start:$,end:z}}else d=null}d=d||{start:0,end:0}}else d=null;for(Yd={focusedElem:i,selectionRange:d},ul=!1,xe=s;xe!==null;)if(s=xe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,xe=i;else for(;xe!==null;){s=xe;try{var we=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(we!==null){var je=we.memoizedProps,mt=we.memoizedState,Q=s.stateNode,W=Q.getSnapshotBeforeUpdate(s.elementType===s.type?je:Rr(s.type,je),mt);Q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Z=s.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(ue){ut(s,s.return,ue)}if(i=s.sibling,i!==null){i.return=s.return,xe=i;break}xe=s.return}return we=t1,t1=!1,we}function Mo(i,s,d){var g=s.updateQueue;if(g=g!==null?g.lastEffect:null,g!==null){var y=g=g.next;do{if((y.tag&i)===i){var j=y.destroy;y.destroy=void 0,j!==void 0&&If(s,d,j)}y=y.next}while(y!==g)}}function Hl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var d=s=s.next;do{if((d.tag&i)===i){var g=d.create;d.destroy=g()}d=d.next}while(d!==s)}}function Mf(i){var s=i.ref;if(s!==null){var d=i.stateNode;i.tag,i=d,typeof s=="function"?s(i):s.current=i}}function r1(i){var s=i.alternate;s!==null&&(i.alternate=null,r1(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Hr],delete s[No],delete s[Qd],delete s[zP],delete s[qP])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function n1(i){return i.tag===5||i.tag===3||i.tag===4}function i1(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||n1(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function $f(i,s,d){var g=i.tag;if(g===5||g===6)i=i.stateNode,s?d.nodeType===8?d.parentNode.insertBefore(i,s):d.insertBefore(i,s):(d.nodeType===8?(s=d.parentNode,s.insertBefore(i,d)):(s=d,s.appendChild(i)),d=d._reactRootContainer,d!=null||s.onclick!==null||(s.onclick=_l));else if(g!==4&&(i=i.child,i!==null))for($f(i,s,d),i=i.sibling;i!==null;)$f(i,s,d),i=i.sibling}function Ff(i,s,d){var g=i.tag;if(g===5||g===6)i=i.stateNode,s?d.insertBefore(i,s):d.appendChild(i);else if(g!==4&&(i=i.child,i!==null))for(Ff(i,s,d),i=i.sibling;i!==null;)Ff(i,s,d),i=i.sibling}var Rt=null,Dr=!1;function Ln(i,s,d){for(d=d.child;d!==null;)a1(i,s,d),d=d.sibling}function a1(i,s,d){if(Wr&&typeof Wr.onCommitFiberUnmount=="function")try{Wr.onCommitFiberUnmount(il,d)}catch{}switch(d.tag){case 5:zt||la(d,s);case 6:var g=Rt,y=Dr;Rt=null,Ln(i,s,d),Rt=g,Dr=y,Rt!==null&&(Dr?(i=Rt,d=d.stateNode,i.nodeType===8?i.parentNode.removeChild(d):i.removeChild(d)):Rt.removeChild(d.stateNode));break;case 18:Rt!==null&&(Dr?(i=Rt,d=d.stateNode,i.nodeType===8?Xd(i.parentNode,d):i.nodeType===1&&Xd(i,d),ho(i)):Xd(Rt,d.stateNode));break;case 4:g=Rt,y=Dr,Rt=d.stateNode.containerInfo,Dr=!0,Ln(i,s,d),Rt=g,Dr=y;break;case 0:case 11:case 14:case 15:if(!zt&&(g=d.updateQueue,g!==null&&(g=g.lastEffect,g!==null))){y=g=g.next;do{var j=y,k=j.destroy;j=j.tag,k!==void 0&&((j&2)!==0||(j&4)!==0)&&If(d,s,k),y=y.next}while(y!==g)}Ln(i,s,d);break;case 1:if(!zt&&(la(d,s),g=d.stateNode,typeof g.componentWillUnmount=="function"))try{g.props=d.memoizedProps,g.state=d.memoizedState,g.componentWillUnmount()}catch($){ut(d,s,$)}Ln(i,s,d);break;case 21:Ln(i,s,d);break;case 22:d.mode&1?(zt=(g=zt)||d.memoizedState!==null,Ln(i,s,d),zt=g):Ln(i,s,d);break;default:Ln(i,s,d)}}function o1(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var d=i.stateNode;d===null&&(d=i.stateNode=new iT),s.forEach(function(g){var y=hT.bind(null,i,g);d.has(g)||(d.add(g),g.then(y,y))})}}function Ir(i,s){var d=s.deletions;if(d!==null)for(var g=0;g<d.length;g++){var y=d[g];try{var j=i,k=s,$=k;e:for(;$!==null;){switch($.tag){case 5:Rt=$.stateNode,Dr=!1;break e;case 3:Rt=$.stateNode.containerInfo,Dr=!0;break e;case 4:Rt=$.stateNode.containerInfo,Dr=!0;break e}$=$.return}if(Rt===null)throw Error(r(160));a1(j,k,y),Rt=null,Dr=!1;var z=y.alternate;z!==null&&(z.return=null),y.return=null}catch(ee){ut(y,s,ee)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)s1(s,i),s=s.sibling}function s1(i,s){var d=i.alternate,g=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ir(s,i),Vr(i),g&4){try{Mo(3,i,i.return),Hl(3,i)}catch(je){ut(i,i.return,je)}try{Mo(5,i,i.return)}catch(je){ut(i,i.return,je)}}break;case 1:Ir(s,i),Vr(i),g&512&&d!==null&&la(d,d.return);break;case 5:if(Ir(s,i),Vr(i),g&512&&d!==null&&la(d,d.return),i.flags&32){var y=i.stateNode;try{at(y,"")}catch(je){ut(i,i.return,je)}}if(g&4&&(y=i.stateNode,y!=null)){var j=i.memoizedProps,k=d!==null?d.memoizedProps:j,$=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{$==="input"&&j.type==="radio"&&j.name!=null&&Xe(y,j),ro($,k);var ee=ro($,j);for(k=0;k<z.length;k+=2){var le=z[k],ce=z[k+1];le==="style"?ii(y,ce):le==="dangerouslySetInnerHTML"?Ie(y,ce):le==="children"?at(y,ce):O(y,le,ce,ee)}switch($){case"input":Ae(y,j);break;case"textarea":Er(y,j);break;case"select":var oe=y._wrapperState.wasMultiple;y._wrapperState.wasMultiple=!!j.multiple;var ye=j.value;ye!=null?gt(y,!!j.multiple,ye,!1):oe!==!!j.multiple&&(j.defaultValue!=null?gt(y,!!j.multiple,j.defaultValue,!0):gt(y,!!j.multiple,j.multiple?[]:"",!1))}y[No]=j}catch(je){ut(i,i.return,je)}}break;case 6:if(Ir(s,i),Vr(i),g&4){if(i.stateNode===null)throw Error(r(162));y=i.stateNode,j=i.memoizedProps;try{y.nodeValue=j}catch(je){ut(i,i.return,je)}}break;case 3:if(Ir(s,i),Vr(i),g&4&&d!==null&&d.memoizedState.isDehydrated)try{ho(s.containerInfo)}catch(je){ut(i,i.return,je)}break;case 4:Ir(s,i),Vr(i);break;case 13:Ir(s,i),Vr(i),y=i.child,y.flags&8192&&(j=y.memoizedState!==null,y.stateNode.isHidden=j,!j||y.alternate!==null&&y.alternate.memoizedState!==null||(zf=ht())),g&4&&o1(i);break;case 22:if(le=d!==null&&d.memoizedState!==null,i.mode&1?(zt=(ee=zt)||le,Ir(s,i),zt=ee):Ir(s,i),Vr(i),g&8192){if(ee=i.memoizedState!==null,(i.stateNode.isHidden=ee)&&!le&&(i.mode&1)!==0)for(xe=i,le=i.child;le!==null;){for(ce=xe=le;xe!==null;){switch(oe=xe,ye=oe.child,oe.tag){case 0:case 11:case 14:case 15:Mo(4,oe,oe.return);break;case 1:la(oe,oe.return);var we=oe.stateNode;if(typeof we.componentWillUnmount=="function"){g=oe,d=oe.return;try{s=g,we.props=s.memoizedProps,we.state=s.memoizedState,we.componentWillUnmount()}catch(je){ut(g,d,je)}}break;case 5:la(oe,oe.return);break;case 22:if(oe.memoizedState!==null){u1(ce);continue}}ye!==null?(ye.return=oe,xe=ye):u1(ce)}le=le.sibling}e:for(le=null,ce=i;;){if(ce.tag===5){if(le===null){le=ce;try{y=ce.stateNode,ee?(j=y.style,typeof j.setProperty=="function"?j.setProperty("display","none","important"):j.display="none"):($=ce.stateNode,z=ce.memoizedProps.style,k=z!=null&&z.hasOwnProperty("display")?z.display:null,$.style.display=zi("display",k))}catch(je){ut(i,i.return,je)}}}else if(ce.tag===6){if(le===null)try{ce.stateNode.nodeValue=ee?"":ce.memoizedProps}catch(je){ut(i,i.return,je)}}else if((ce.tag!==22&&ce.tag!==23||ce.memoizedState===null||ce===i)&&ce.child!==null){ce.child.return=ce,ce=ce.child;continue}if(ce===i)break e;for(;ce.sibling===null;){if(ce.return===null||ce.return===i)break e;le===ce&&(le=null),ce=ce.return}le===ce&&(le=null),ce.sibling.return=ce.return,ce=ce.sibling}}break;case 19:Ir(s,i),Vr(i),g&4&&o1(i);break;case 21:break;default:Ir(s,i),Vr(i)}}function Vr(i){var s=i.flags;if(s&2){try{e:{for(var d=i.return;d!==null;){if(n1(d)){var g=d;break e}d=d.return}throw Error(r(160))}switch(g.tag){case 5:var y=g.stateNode;g.flags&32&&(at(y,""),g.flags&=-33);var j=i1(i);Ff(i,j,y);break;case 3:case 4:var k=g.stateNode.containerInfo,$=i1(i);$f(i,$,k);break;default:throw Error(r(161))}}catch(z){ut(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function oT(i,s,d){xe=i,l1(i)}function l1(i,s,d){for(var g=(i.mode&1)!==0;xe!==null;){var y=xe,j=y.child;if(y.tag===22&&g){var k=y.memoizedState!==null||Wl;if(!k){var $=y.alternate,z=$!==null&&$.memoizedState!==null||zt;$=Wl;var ee=zt;if(Wl=k,(zt=z)&&!ee)for(xe=y;xe!==null;)k=xe,z=k.child,k.tag===22&&k.memoizedState!==null?d1(y):z!==null?(z.return=k,xe=z):d1(y);for(;j!==null;)xe=j,l1(j),j=j.sibling;xe=y,Wl=$,zt=ee}c1(i)}else(y.subtreeFlags&8772)!==0&&j!==null?(j.return=y,xe=j):c1(i)}}function c1(i){for(;xe!==null;){var s=xe;if((s.flags&8772)!==0){var d=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:zt||Hl(5,s);break;case 1:var g=s.stateNode;if(s.flags&4&&!zt)if(d===null)g.componentDidMount();else{var y=s.elementType===s.type?d.memoizedProps:Rr(s.type,d.memoizedProps);g.componentDidUpdate(y,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}var j=s.updateQueue;j!==null&&ub(s,j,g);break;case 3:var k=s.updateQueue;if(k!==null){if(d=null,s.child!==null)switch(s.child.tag){case 5:d=s.child.stateNode;break;case 1:d=s.child.stateNode}ub(s,k,d)}break;case 5:var $=s.stateNode;if(d===null&&s.flags&4){d=$;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&d.focus();break;case"img":z.src&&(d.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ee=s.alternate;if(ee!==null){var le=ee.memoizedState;if(le!==null){var ce=le.dehydrated;ce!==null&&ho(ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}zt||s.flags&512&&Mf(s)}catch(oe){ut(s,s.return,oe)}}if(s===i){xe=null;break}if(d=s.sibling,d!==null){d.return=s.return,xe=d;break}xe=s.return}}function u1(i){for(;xe!==null;){var s=xe;if(s===i){xe=null;break}var d=s.sibling;if(d!==null){d.return=s.return,xe=d;break}xe=s.return}}function d1(i){for(;xe!==null;){var s=xe;try{switch(s.tag){case 0:case 11:case 15:var d=s.return;try{Hl(4,s)}catch(z){ut(s,d,z)}break;case 1:var g=s.stateNode;if(typeof g.componentDidMount=="function"){var y=s.return;try{g.componentDidMount()}catch(z){ut(s,y,z)}}var j=s.return;try{Mf(s)}catch(z){ut(s,j,z)}break;case 5:var k=s.return;try{Mf(s)}catch(z){ut(s,k,z)}}}catch(z){ut(s,s.return,z)}if(s===i){xe=null;break}var $=s.sibling;if($!==null){$.return=s.return,xe=$;break}xe=s.return}}var sT=Math.ceil,Gl=E.ReactCurrentDispatcher,Lf=E.ReactCurrentOwner,xr=E.ReactCurrentBatchConfig,Le=0,Ot=null,vt=null,Dt=0,dr=0,ca=Dn(0),_t=0,$o=null,pi=0,Yl=0,Bf=0,Fo=null,Zt=null,zf=0,ua=1/0,fn=null,Vl=!1,qf=null,Bn=null,Kl=!1,zn=null,Xl=0,Lo=0,Uf=null,Ql=-1,Zl=0;function Yt(){return(Le&6)!==0?ht():Ql!==-1?Ql:Ql=ht()}function qn(i){return(i.mode&1)===0?1:(Le&2)!==0&&Dt!==0?Dt&-Dt:WP.transition!==null?(Zl===0&&(Zl=i0()),Zl):(i=Ve,i!==0||(i=window.event,i=i===void 0?16:p0(i.type)),i)}function Mr(i,s,d,g){if(50<Lo)throw Lo=0,Uf=null,Error(r(185));lo(i,d,g),((Le&2)===0||i!==Ot)&&(i===Ot&&((Le&2)===0&&(Yl|=d),_t===4&&Un(i,Dt)),Jt(i,g),d===1&&Le===0&&(s.mode&1)===0&&(ua=ht()+500,Al&&Mn()))}function Jt(i,s){var d=i.callbackNode;Wk(i,s);var g=sl(i,i===Ot?Dt:0);if(g===0)d!==null&&t0(d),i.callbackNode=null,i.callbackPriority=0;else if(s=g&-g,i.callbackPriority!==s){if(d!=null&&t0(d),s===1)i.tag===0?UP(p1.bind(null,i)):Z0(p1.bind(null,i)),LP(function(){(Le&6)===0&&Mn()}),d=null;else{switch(a0(g)){case 1:d=wd;break;case 4:d=r0;break;case 16:d=nl;break;case 536870912:d=n0;break;default:d=nl}d=w1(d,f1.bind(null,i))}i.callbackPriority=s,i.callbackNode=d}}function f1(i,s){if(Ql=-1,Zl=0,(Le&6)!==0)throw Error(r(327));var d=i.callbackNode;if(da()&&i.callbackNode!==d)return null;var g=sl(i,i===Ot?Dt:0);if(g===0)return null;if((g&30)!==0||(g&i.expiredLanes)!==0||s)s=Jl(i,g);else{s=g;var y=Le;Le|=2;var j=m1();(Ot!==i||Dt!==s)&&(fn=null,ua=ht()+500,mi(i,s));do try{uT();break}catch($){h1(i,$)}while(!0);sf(),Gl.current=j,Le=y,vt!==null?s=0:(Ot=null,Dt=0,s=_t)}if(s!==0){if(s===2&&(y=_d(i),y!==0&&(g=y,s=Wf(i,y))),s===1)throw d=$o,mi(i,0),Un(i,g),Jt(i,ht()),d;if(s===6)Un(i,g);else{if(y=i.current.alternate,(g&30)===0&&!lT(y)&&(s=Jl(i,g),s===2&&(j=_d(i),j!==0&&(g=j,s=Wf(i,j))),s===1))throw d=$o,mi(i,0),Un(i,g),Jt(i,ht()),d;switch(i.finishedWork=y,i.finishedLanes=g,s){case 0:case 1:throw Error(r(345));case 2:gi(i,Zt,fn);break;case 3:if(Un(i,g),(g&130023424)===g&&(s=zf+500-ht(),10<s)){if(sl(i,0)!==0)break;if(y=i.suspendedLanes,(y&g)!==g){Yt(),i.pingedLanes|=i.suspendedLanes&y;break}i.timeoutHandle=Kd(gi.bind(null,i,Zt,fn),s);break}gi(i,Zt,fn);break;case 4:if(Un(i,g),(g&4194240)===g)break;for(s=i.eventTimes,y=-1;0<g;){var k=31-kr(g);j=1<<k,k=s[k],k>y&&(y=k),g&=~j}if(g=y,g=ht()-g,g=(120>g?120:480>g?480:1080>g?1080:1920>g?1920:3e3>g?3e3:4320>g?4320:1960*sT(g/1960))-g,10<g){i.timeoutHandle=Kd(gi.bind(null,i,Zt,fn),g);break}gi(i,Zt,fn);break;case 5:gi(i,Zt,fn);break;default:throw Error(r(329))}}}return Jt(i,ht()),i.callbackNode===d?f1.bind(null,i):null}function Wf(i,s){var d=Fo;return i.current.memoizedState.isDehydrated&&(mi(i,s).flags|=256),i=Jl(i,s),i!==2&&(s=Zt,Zt=d,s!==null&&Hf(s)),i}function Hf(i){Zt===null?Zt=i:Zt.push.apply(Zt,i)}function lT(i){for(var s=i;;){if(s.flags&16384){var d=s.updateQueue;if(d!==null&&(d=d.stores,d!==null))for(var g=0;g<d.length;g++){var y=d[g],j=y.getSnapshot;y=y.value;try{if(!Pr(j(),y))return!1}catch{return!1}}}if(d=s.child,s.subtreeFlags&16384&&d!==null)d.return=s,s=d;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Un(i,s){for(s&=~Bf,s&=~Yl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var d=31-kr(s),g=1<<d;i[d]=-1,s&=~g}}function p1(i){if((Le&6)!==0)throw Error(r(327));da();var s=sl(i,0);if((s&1)===0)return Jt(i,ht()),null;var d=Jl(i,s);if(i.tag!==0&&d===2){var g=_d(i);g!==0&&(s=g,d=Wf(i,g))}if(d===1)throw d=$o,mi(i,0),Un(i,s),Jt(i,ht()),d;if(d===6)throw Error(r(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,gi(i,Zt,fn),Jt(i,ht()),null}function Gf(i,s){var d=Le;Le|=1;try{return i(s)}finally{Le=d,Le===0&&(ua=ht()+500,Al&&Mn())}}function hi(i){zn!==null&&zn.tag===0&&(Le&6)===0&&da();var s=Le;Le|=1;var d=xr.transition,g=Ve;try{if(xr.transition=null,Ve=1,i)return i()}finally{Ve=g,xr.transition=d,Le=s,(Le&6)===0&&Mn()}}function Yf(){dr=ca.current,nt(ca)}function mi(i,s){i.finishedWork=null,i.finishedLanes=0;var d=i.timeoutHandle;if(d!==-1&&(i.timeoutHandle=-1,FP(d)),vt!==null)for(d=vt.return;d!==null;){var g=d;switch(tf(g),g.tag){case 1:g=g.type.childContextTypes,g!=null&&Sl();break;case 3:oa(),nt(Kt),nt(Ft),mf();break;case 5:pf(g);break;case 4:oa();break;case 13:nt(lt);break;case 19:nt(lt);break;case 10:lf(g.type._context);break;case 22:case 23:Yf()}d=d.return}if(Ot=i,vt=i=Wn(i.current,null),Dt=dr=s,_t=0,$o=null,Bf=Yl=pi=0,Zt=Fo=null,ui!==null){for(s=0;s<ui.length;s++)if(d=ui[s],g=d.interleaved,g!==null){d.interleaved=null;var y=g.next,j=d.pending;if(j!==null){var k=j.next;j.next=y,g.next=k}d.pending=g}ui=null}return i}function h1(i,s){do{var d=vt;try{if(sf(),Ml.current=Bl,$l){for(var g=ct.memoizedState;g!==null;){var y=g.queue;y!==null&&(y.pending=null),g=g.next}$l=!1}if(fi=0,Ct=wt=ct=null,Po=!1,To=0,Lf.current=null,d===null||d.return===null){_t=1,$o=s,vt=null;break}e:{var j=i,k=d.return,$=d,z=s;if(s=Dt,$.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ee=z,le=$,ce=le.tag;if((le.mode&1)===0&&(ce===0||ce===11||ce===15)){var oe=le.alternate;oe?(le.updateQueue=oe.updateQueue,le.memoizedState=oe.memoizedState,le.lanes=oe.lanes):(le.updateQueue=null,le.memoizedState=null)}var ye=Lb(k);if(ye!==null){ye.flags&=-257,Bb(ye,k,$,j,s),ye.mode&1&&Fb(j,ee,s),s=ye,z=ee;var we=s.updateQueue;if(we===null){var je=new Set;je.add(z),s.updateQueue=je}else we.add(z);break e}else{if((s&1)===0){Fb(j,ee,s),Vf();break e}z=Error(r(426))}}else if(ot&&$.mode&1){var mt=Lb(k);if(mt!==null){(mt.flags&65536)===0&&(mt.flags|=256),Bb(mt,k,$,j,s),af(sa(z,$));break e}}j=z=sa(z,$),_t!==4&&(_t=2),Fo===null?Fo=[j]:Fo.push(j),j=k;do{switch(j.tag){case 3:j.flags|=65536,s&=-s,j.lanes|=s;var Q=Mb(j,z,s);cb(j,Q);break e;case 1:$=z;var W=j.type,Z=j.stateNode;if((j.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(Bn===null||!Bn.has(Z)))){j.flags|=65536,s&=-s,j.lanes|=s;var ue=$b(j,$,s);cb(j,ue);break e}}j=j.return}while(j!==null)}v1(d)}catch(Ne){s=Ne,vt===d&&d!==null&&(vt=d=d.return);continue}break}while(!0)}function m1(){var i=Gl.current;return Gl.current=Bl,i===null?Bl:i}function Vf(){(_t===0||_t===3||_t===2)&&(_t=4),Ot===null||(pi&268435455)===0&&(Yl&268435455)===0||Un(Ot,Dt)}function Jl(i,s){var d=Le;Le|=2;var g=m1();(Ot!==i||Dt!==s)&&(fn=null,mi(i,s));do try{cT();break}catch(y){h1(i,y)}while(!0);if(sf(),Le=d,Gl.current=g,vt!==null)throw Error(r(261));return Ot=null,Dt=0,_t}function cT(){for(;vt!==null;)g1(vt)}function uT(){for(;vt!==null&&!Ik();)g1(vt)}function g1(i){var s=b1(i.alternate,i,dr);i.memoizedProps=i.pendingProps,s===null?v1(i):vt=s,Lf.current=null}function v1(i){var s=i;do{var d=s.alternate;if(i=s.return,(s.flags&32768)===0){if(d=rT(d,s,dr),d!==null){vt=d;return}}else{if(d=nT(d,s),d!==null){d.flags&=32767,vt=d;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{_t=6,vt=null;return}}if(s=s.sibling,s!==null){vt=s;return}vt=s=i}while(s!==null);_t===0&&(_t=5)}function gi(i,s,d){var g=Ve,y=xr.transition;try{xr.transition=null,Ve=1,dT(i,s,d,g)}finally{xr.transition=y,Ve=g}return null}function dT(i,s,d,g){do da();while(zn!==null);if((Le&6)!==0)throw Error(r(327));d=i.finishedWork;var y=i.finishedLanes;if(d===null)return null;if(i.finishedWork=null,i.finishedLanes=0,d===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0;var j=d.lanes|d.childLanes;if(Hk(i,j),i===Ot&&(vt=Ot=null,Dt=0),(d.subtreeFlags&2064)===0&&(d.flags&2064)===0||Kl||(Kl=!0,w1(nl,function(){return da(),null})),j=(d.flags&15990)!==0,(d.subtreeFlags&15990)!==0||j){j=xr.transition,xr.transition=null;var k=Ve;Ve=1;var $=Le;Le|=4,Lf.current=null,aT(i,d),s1(d,i),PP(Yd),ul=!!Gd,Yd=Gd=null,i.current=d,oT(d),Mk(),Le=$,Ve=k,xr.transition=j}else i.current=d;if(Kl&&(Kl=!1,zn=i,Xl=y),j=i.pendingLanes,j===0&&(Bn=null),Lk(d.stateNode),Jt(i,ht()),s!==null)for(g=i.onRecoverableError,d=0;d<s.length;d++)y=s[d],g(y.value,{componentStack:y.stack,digest:y.digest});if(Vl)throw Vl=!1,i=qf,qf=null,i;return(Xl&1)!==0&&i.tag!==0&&da(),j=i.pendingLanes,(j&1)!==0?i===Uf?Lo++:(Lo=0,Uf=i):Lo=0,Mn(),null}function da(){if(zn!==null){var i=a0(Xl),s=xr.transition,d=Ve;try{if(xr.transition=null,Ve=16>i?16:i,zn===null)var g=!1;else{if(i=zn,zn=null,Xl=0,(Le&6)!==0)throw Error(r(331));var y=Le;for(Le|=4,xe=i.current;xe!==null;){var j=xe,k=j.child;if((xe.flags&16)!==0){var $=j.deletions;if($!==null){for(var z=0;z<$.length;z++){var ee=$[z];for(xe=ee;xe!==null;){var le=xe;switch(le.tag){case 0:case 11:case 15:Mo(8,le,j)}var ce=le.child;if(ce!==null)ce.return=le,xe=ce;else for(;xe!==null;){le=xe;var oe=le.sibling,ye=le.return;if(r1(le),le===ee){xe=null;break}if(oe!==null){oe.return=ye,xe=oe;break}xe=ye}}}var we=j.alternate;if(we!==null){var je=we.child;if(je!==null){we.child=null;do{var mt=je.sibling;je.sibling=null,je=mt}while(je!==null)}}xe=j}}if((j.subtreeFlags&2064)!==0&&k!==null)k.return=j,xe=k;else e:for(;xe!==null;){if(j=xe,(j.flags&2048)!==0)switch(j.tag){case 0:case 11:case 15:Mo(9,j,j.return)}var Q=j.sibling;if(Q!==null){Q.return=j.return,xe=Q;break e}xe=j.return}}var W=i.current;for(xe=W;xe!==null;){k=xe;var Z=k.child;if((k.subtreeFlags&2064)!==0&&Z!==null)Z.return=k,xe=Z;else e:for(k=W;xe!==null;){if($=xe,($.flags&2048)!==0)try{switch($.tag){case 0:case 11:case 15:Hl(9,$)}}catch(Ne){ut($,$.return,Ne)}if($===k){xe=null;break e}var ue=$.sibling;if(ue!==null){ue.return=$.return,xe=ue;break e}xe=$.return}}if(Le=y,Mn(),Wr&&typeof Wr.onPostCommitFiberRoot=="function")try{Wr.onPostCommitFiberRoot(il,i)}catch{}g=!0}return g}finally{Ve=d,xr.transition=s}}return!1}function y1(i,s,d){s=sa(d,s),s=Mb(i,s,1),i=Fn(i,s,1),s=Yt(),i!==null&&(lo(i,1,s),Jt(i,s))}function ut(i,s,d){if(i.tag===3)y1(i,i,d);else for(;s!==null;){if(s.tag===3){y1(s,i,d);break}else if(s.tag===1){var g=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof g.componentDidCatch=="function"&&(Bn===null||!Bn.has(g))){i=sa(d,i),i=$b(s,i,1),s=Fn(s,i,1),i=Yt(),s!==null&&(lo(s,1,i),Jt(s,i));break}}s=s.return}}function fT(i,s,d){var g=i.pingCache;g!==null&&g.delete(s),s=Yt(),i.pingedLanes|=i.suspendedLanes&d,Ot===i&&(Dt&d)===d&&(_t===4||_t===3&&(Dt&130023424)===Dt&&500>ht()-zf?mi(i,0):Bf|=d),Jt(i,s)}function x1(i,s){s===0&&((i.mode&1)===0?s=1:(s=ol,ol<<=1,(ol&130023424)===0&&(ol=4194304)));var d=Yt();i=cn(i,s),i!==null&&(lo(i,s,d),Jt(i,d))}function pT(i){var s=i.memoizedState,d=0;s!==null&&(d=s.retryLane),x1(i,d)}function hT(i,s){var d=0;switch(i.tag){case 13:var g=i.stateNode,y=i.memoizedState;y!==null&&(d=y.retryLane);break;case 19:g=i.stateNode;break;default:throw Error(r(314))}g!==null&&g.delete(s),x1(i,d)}var b1;b1=function(i,s,d){if(i!==null)if(i.memoizedProps!==s.pendingProps||Kt.current)Qt=!0;else{if((i.lanes&d)===0&&(s.flags&128)===0)return Qt=!1,tT(i,s,d);Qt=(i.flags&131072)!==0}else Qt=!1,ot&&(s.flags&1048576)!==0&&J0(s,Ol,s.index);switch(s.lanes=0,s.tag){case 2:var g=s.type;Ul(i,s),i=s.pendingProps;var y=Ji(s,Ft.current);aa(s,d),y=yf(null,s,g,i,y,d);var j=xf();return s.flags|=1,typeof y=="object"&&y!==null&&typeof y.render=="function"&&y.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xt(g)?(j=!0,Nl(s)):j=!1,s.memoizedState=y.state!==null&&y.state!==void 0?y.state:null,df(s),y.updater=zl,s.stateNode=y,y._reactInternals=s,Nf(s,g,i,d),s=Ef(null,s,g,!0,j,d)):(s.tag=0,ot&&j&&ef(s),Gt(null,s,y,d),s=s.child),s;case 16:g=s.elementType;e:{switch(Ul(i,s),i=s.pendingProps,y=g._init,g=y(g._payload),s.type=g,y=s.tag=gT(g),i=Rr(g,i),y){case 0:s=Of(null,s,g,i,d);break e;case 1:s=Gb(null,s,g,i,d);break e;case 11:s=zb(null,s,g,i,d);break e;case 14:s=qb(null,s,g,Rr(g.type,i),d);break e}throw Error(r(306,g,""))}return s;case 0:return g=s.type,y=s.pendingProps,y=s.elementType===g?y:Rr(g,y),Of(i,s,g,y,d);case 1:return g=s.type,y=s.pendingProps,y=s.elementType===g?y:Rr(g,y),Gb(i,s,g,y,d);case 3:e:{if(Yb(s),i===null)throw Error(r(387));g=s.pendingProps,j=s.memoizedState,y=j.element,lb(i,s),Dl(s,g,null,d);var k=s.memoizedState;if(g=k.element,j.isDehydrated)if(j={element:g,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},s.updateQueue.baseState=j,s.memoizedState=j,s.flags&256){y=sa(Error(r(423)),s),s=Vb(i,s,g,d,y);break e}else if(g!==y){y=sa(Error(r(424)),s),s=Vb(i,s,g,d,y);break e}else for(ur=Rn(s.stateNode.containerInfo.firstChild),cr=s,ot=!0,Tr=null,d=ob(s,null,g,d),s.child=d;d;)d.flags=d.flags&-3|4096,d=d.sibling;else{if(ra(),g===y){s=dn(i,s,d);break e}Gt(i,s,g,d)}s=s.child}return s;case 5:return db(s),i===null&&nf(s),g=s.type,y=s.pendingProps,j=i!==null?i.memoizedProps:null,k=y.children,Vd(g,y)?k=null:j!==null&&Vd(g,j)&&(s.flags|=32),Hb(i,s),Gt(i,s,k,d),s.child;case 6:return i===null&&nf(s),null;case 13:return Kb(i,s,d);case 4:return ff(s,s.stateNode.containerInfo),g=s.pendingProps,i===null?s.child=na(s,null,g,d):Gt(i,s,g,d),s.child;case 11:return g=s.type,y=s.pendingProps,y=s.elementType===g?y:Rr(g,y),zb(i,s,g,y,d);case 7:return Gt(i,s,s.pendingProps,d),s.child;case 8:return Gt(i,s,s.pendingProps.children,d),s.child;case 12:return Gt(i,s,s.pendingProps.children,d),s.child;case 10:e:{if(g=s.type._context,y=s.pendingProps,j=s.memoizedProps,k=y.value,et(Pl,g._currentValue),g._currentValue=k,j!==null)if(Pr(j.value,k)){if(j.children===y.children&&!Kt.current){s=dn(i,s,d);break e}}else for(j=s.child,j!==null&&(j.return=s);j!==null;){var $=j.dependencies;if($!==null){k=j.child;for(var z=$.firstContext;z!==null;){if(z.context===g){if(j.tag===1){z=un(-1,d&-d),z.tag=2;var ee=j.updateQueue;if(ee!==null){ee=ee.shared;var le=ee.pending;le===null?z.next=z:(z.next=le.next,le.next=z),ee.pending=z}}j.lanes|=d,z=j.alternate,z!==null&&(z.lanes|=d),cf(j.return,d,s),$.lanes|=d;break}z=z.next}}else if(j.tag===10)k=j.type===s.type?null:j.child;else if(j.tag===18){if(k=j.return,k===null)throw Error(r(341));k.lanes|=d,$=k.alternate,$!==null&&($.lanes|=d),cf(k,d,s),k=j.sibling}else k=j.child;if(k!==null)k.return=j;else for(k=j;k!==null;){if(k===s){k=null;break}if(j=k.sibling,j!==null){j.return=k.return,k=j;break}k=k.return}j=k}Gt(i,s,y.children,d),s=s.child}return s;case 9:return y=s.type,g=s.pendingProps.children,aa(s,d),y=vr(y),g=g(y),s.flags|=1,Gt(i,s,g,d),s.child;case 14:return g=s.type,y=Rr(g,s.pendingProps),y=Rr(g.type,y),qb(i,s,g,y,d);case 15:return Ub(i,s,s.type,s.pendingProps,d);case 17:return g=s.type,y=s.pendingProps,y=s.elementType===g?y:Rr(g,y),Ul(i,s),s.tag=1,Xt(g)?(i=!0,Nl(s)):i=!1,aa(s,d),Db(s,g,y),Nf(s,g,y,d),Ef(null,s,g,!0,i,d);case 19:return Qb(i,s,d);case 22:return Wb(i,s,d)}throw Error(r(156,s.tag))};function w1(i,s){return e0(i,s)}function mT(i,s,d,g){this.tag=i,this.key=d,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=g,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function br(i,s,d,g){return new mT(i,s,d,g)}function Kf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function gT(i){if(typeof i=="function")return Kf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===M)return 11;if(i===F)return 14}return 2}function Wn(i,s){var d=i.alternate;return d===null?(d=br(i.tag,s,i.key,i.mode),d.elementType=i.elementType,d.type=i.type,d.stateNode=i.stateNode,d.alternate=i,i.alternate=d):(d.pendingProps=s,d.type=i.type,d.flags=0,d.subtreeFlags=0,d.deletions=null),d.flags=i.flags&14680064,d.childLanes=i.childLanes,d.lanes=i.lanes,d.child=i.child,d.memoizedProps=i.memoizedProps,d.memoizedState=i.memoizedState,d.updateQueue=i.updateQueue,s=i.dependencies,d.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},d.sibling=i.sibling,d.index=i.index,d.ref=i.ref,d}function ec(i,s,d,g,y,j){var k=2;if(g=i,typeof i=="function")Kf(i)&&(k=1);else if(typeof i=="string")k=5;else e:switch(i){case P:return vi(d.children,y,j,s);case R:k=8,y|=8;break;case D:return i=br(12,d,s,y|2),i.elementType=D,i.lanes=j,i;case H:return i=br(13,d,s,y),i.elementType=H,i.lanes=j,i;case B:return i=br(19,d,s,y),i.elementType=B,i.lanes=j,i;case J:return tc(d,y,j,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case G:k=10;break e;case q:k=9;break e;case M:k=11;break e;case F:k=14;break e;case Y:k=16,g=null;break e}throw Error(r(130,i==null?i:typeof i,""))}return s=br(k,d,s,y),s.elementType=i,s.type=g,s.lanes=j,s}function vi(i,s,d,g){return i=br(7,i,g,s),i.lanes=d,i}function tc(i,s,d,g){return i=br(22,i,g,s),i.elementType=J,i.lanes=d,i.stateNode={isHidden:!1},i}function Xf(i,s,d){return i=br(6,i,null,s),i.lanes=d,i}function Qf(i,s,d){return s=br(4,i.children!==null?i.children:[],i.key,s),s.lanes=d,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function vT(i,s,d,g,y){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jd(0),this.expirationTimes=jd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jd(0),this.identifierPrefix=g,this.onRecoverableError=y,this.mutableSourceEagerHydrationData=null}function Zf(i,s,d,g,y,j,k,$,z){return i=new vT(i,s,d,$,z),s===1?(s=1,j===!0&&(s|=8)):s=0,j=br(3,null,null,s),i.current=j,j.stateNode=i,j.memoizedState={element:g,isDehydrated:d,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(j),i}function yT(i,s,d){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:g==null?null:""+g,children:i,containerInfo:s,implementation:d}}function _1(i){if(!i)return In;i=i._reactInternals;e:{if(ai(i)!==i||i.tag!==1)throw Error(r(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(r(171))}if(i.tag===1){var d=i.type;if(Xt(d))return X0(i,d,s)}return s}function j1(i,s,d,g,y,j,k,$,z){return i=Zf(d,g,!0,i,y,j,k,$,z),i.context=_1(null),d=i.current,g=Yt(),y=qn(d),j=un(g,y),j.callback=s??null,Fn(d,j,y),i.current.lanes=y,lo(i,y,g),Jt(i,g),i}function rc(i,s,d,g){var y=s.current,j=Yt(),k=qn(y);return d=_1(d),s.context===null?s.context=d:s.pendingContext=d,s=un(j,k),s.payload={element:i},g=g===void 0?null:g,g!==null&&(s.callback=g),i=Fn(y,s,k),i!==null&&(Mr(i,y,k,j),Rl(i,y,k)),k}function nc(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function S1(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var d=i.retryLane;i.retryLane=d!==0&&d<s?d:s}}function Jf(i,s){S1(i,s),(i=i.alternate)&&S1(i,s)}function xT(){return null}var N1=typeof reportError=="function"?reportError:function(i){console.error(i)};function ep(i){this._internalRoot=i}ic.prototype.render=ep.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(r(409));rc(i,s,null,null)},ic.prototype.unmount=ep.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;hi(function(){rc(null,i,null,null)}),s[an]=null}};function ic(i){this._internalRoot=i}ic.prototype.unstable_scheduleHydration=function(i){if(i){var s=l0();i={blockedOn:null,target:i,priority:s};for(var d=0;d<kn.length&&s!==0&&s<kn[d].priority;d++);kn.splice(d,0,i),d===0&&d0(i)}};function tp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function ac(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function A1(){}function bT(i,s,d,g,y){if(y){if(typeof g=="function"){var j=g;g=function(){var ee=nc(k);j.call(ee)}}var k=j1(s,g,i,0,null,!1,!1,"",A1);return i._reactRootContainer=k,i[an]=k.current,jo(i.nodeType===8?i.parentNode:i),hi(),k}for(;y=i.lastChild;)i.removeChild(y);if(typeof g=="function"){var $=g;g=function(){var ee=nc(z);$.call(ee)}}var z=Zf(i,0,!1,null,null,!1,!1,"",A1);return i._reactRootContainer=z,i[an]=z.current,jo(i.nodeType===8?i.parentNode:i),hi(function(){rc(s,z,d,g)}),z}function oc(i,s,d,g,y){var j=d._reactRootContainer;if(j){var k=j;if(typeof y=="function"){var $=y;y=function(){var z=nc(k);$.call(z)}}rc(s,k,i,y)}else k=bT(d,s,i,y,g);return nc(k)}o0=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var d=so(s.pendingLanes);d!==0&&(Sd(s,d|1),Jt(s,ht()),(Le&6)===0&&(ua=ht()+500,Mn()))}break;case 13:hi(function(){var g=cn(i,1);if(g!==null){var y=Yt();Mr(g,i,1,y)}}),Jf(i,1)}},Nd=function(i){if(i.tag===13){var s=cn(i,134217728);if(s!==null){var d=Yt();Mr(s,i,134217728,d)}Jf(i,134217728)}},s0=function(i){if(i.tag===13){var s=qn(i),d=cn(i,s);if(d!==null){var g=Yt();Mr(d,i,s,g)}Jf(i,s)}},l0=function(){return Ve},c0=function(i,s){var d=Ve;try{return Ve=i,s()}finally{Ve=d}},vd=function(i,s,d){switch(s){case"input":if(Ae(i,d),s=d.name,d.type==="radio"&&s!=null){for(d=i;d.parentNode;)d=d.parentNode;for(d=d.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<d.length;s++){var g=d[s];if(g!==i&&g.form===i.form){var y=jl(g);if(!y)throw Error(r(90));te(g),Ae(g,y)}}}break;case"textarea":Er(i,d);break;case"select":s=d.value,s!=null&&gt(i,!!d.multiple,s,!1)}},Yx=Gf,Vx=hi;var wT={usingClientEntryPoint:!1,Events:[Ao,Qi,jl,Hx,Gx,Gf]},Bo={findFiberByHostInstance:oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_T={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Zx(i),i===null?null:i.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||xT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{il=sc.inject(_T),Wr=sc}catch{}}return er.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wT,er.createPortal=function(i,s){var d=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tp(s))throw Error(r(200));return yT(i,s,null,d)},er.createRoot=function(i,s){if(!tp(i))throw Error(r(299));var d=!1,g="",y=N1;return s!=null&&(s.unstable_strictMode===!0&&(d=!0),s.identifierPrefix!==void 0&&(g=s.identifierPrefix),s.onRecoverableError!==void 0&&(y=s.onRecoverableError)),s=Zf(i,1,!1,null,null,d,!1,g,y),i[an]=s.current,jo(i.nodeType===8?i.parentNode:i),new ep(s)},er.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=Zx(s),i=i===null?null:i.stateNode,i},er.flushSync=function(i){return hi(i)},er.hydrate=function(i,s,d){if(!ac(s))throw Error(r(200));return oc(null,i,s,!0,d)},er.hydrateRoot=function(i,s,d){if(!tp(i))throw Error(r(405));var g=d!=null&&d.hydratedSources||null,y=!1,j="",k=N1;if(d!=null&&(d.unstable_strictMode===!0&&(y=!0),d.identifierPrefix!==void 0&&(j=d.identifierPrefix),d.onRecoverableError!==void 0&&(k=d.onRecoverableError)),s=j1(s,null,i,1,d??null,y,!1,j,k),i[an]=s.current,jo(i),g)for(i=0;i<g.length;i++)d=g[i],y=d._getVersion,y=y(d._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[d,y]:s.mutableSourceEagerHydrationData.push(d,y);return new ic(s)},er.render=function(i,s,d){if(!ac(s))throw Error(r(200));return oc(null,i,s,!1,d)},er.unmountComponentAtNode=function(i){if(!ac(i))throw Error(r(40));return i._reactRootContainer?(hi(function(){oc(null,null,i,!1,function(){i._reactRootContainer=null,i[an]=null})}),!0):!1},er.unstable_batchedUpdates=Gf,er.unstable_renderSubtreeIntoContainer=function(i,s,d,g){if(!ac(d))throw Error(r(200));if(i==null||i._reactInternals===void 0)throw Error(r(38));return oc(i,s,d,!1,g)},er.version="18.3.1-next-f1338f8080-20240426",er}var D1;function BA(){if(D1)return ip.exports;D1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),ip.exports=PT(),ip.exports}var I1;function TT(){if(I1)return cc;I1=1;var e=BA();return cc.createRoot=e.createRoot,cc.hydrateRoot=e.hydrateRoot,cc}var RT=TT();function DT(e={}){const{nonce:t,locale:r,onScriptLoadSuccess:n,onScriptLoadError:a}=e,[o,c]=T.useState(!1),u=T.useRef(n);u.current=n;const f=T.useRef(a);return f.current=a,T.useEffect(()=>{const p=document.createElement("script");return p.src="https://accounts.google.com/gsi/client",r&&(p.src+=`?hl=${r}`),p.async=!0,p.defer=!0,p.nonce=t,p.onload=()=>{var h;c(!0),(h=u.current)===null||h===void 0||h.call(u)},p.onerror=()=>{var h;c(!1),(h=f.current)===null||h===void 0||h.call(f)},document.body.appendChild(p),()=>{document.body.removeChild(p)}},[t]),o}const zA=T.createContext(null);function IT({clientId:e,nonce:t,locale:r,onScriptLoadSuccess:n,onScriptLoadError:a,children:o}){const c=DT({nonce:t,onScriptLoadSuccess:n,onScriptLoadError:a,locale:r}),u=T.useMemo(()=>({locale:r,clientId:e,scriptLoadedSuccessfully:c}),[e,c]);return V.createElement(zA.Provider,{value:u},o)}function MT(){const e=T.useContext(zA);if(!e)throw new Error("Google OAuth components must be used within GoogleOAuthProvider");return e}function $T({flow:e="implicit",scope:t="",onSuccess:r,onError:n,onNonOAuthError:a,overrideScope:o,state:c,...u}){const{clientId:f,scriptLoadedSuccessfully:p}=MT(),h=T.useRef(),m=T.useRef(r);m.current=r;const v=T.useRef(n);v.current=n;const b=T.useRef(a);b.current=a,T.useEffect(()=>{var x,S;if(!p)return;const C=e==="implicit"?"initTokenClient":"initCodeClient",O=(S=(x=window?.google)===null||x===void 0?void 0:x.accounts)===null||S===void 0?void 0:S.oauth2[C]({client_id:f,scope:o?t:`openid profile email ${t}`,callback:E=>{var A,N;if(E.error)return(A=v.current)===null||A===void 0?void 0:A.call(v,E);(N=m.current)===null||N===void 0||N.call(m,E)},error_callback:E=>{var A;(A=b.current)===null||A===void 0||A.call(b,E)},state:c,...u});h.current=O},[f,p,e,t,c]);const w=T.useCallback(x=>{var S;return(S=h.current)===null||S===void 0?void 0:S.requestAccessToken(x)},[]),_=T.useCallback(()=>{var x;return(x=h.current)===null||x===void 0?void 0:x.requestCode()},[]);return e==="implicit"?w:_}function qA(e,t){return function(){return e.apply(t,arguments)}}const{toString:FT}=Object.prototype,{getPrototypeOf:Ty}=Object,{iterator:Ou,toStringTag:UA}=Symbol,Eu=(e=>t=>{const r=FT.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),qr=e=>(e=e.toLowerCase(),t=>Eu(t)===e),ku=e=>t=>typeof t===e,{isArray:Ya}=Array,Na=ku("undefined");function Bs(e){return e!==null&&!Na(e)&&e.constructor!==null&&!Na(e.constructor)&&rr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const WA=qr("ArrayBuffer");function LT(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&WA(e.buffer),t}const BT=ku("string"),rr=ku("function"),HA=ku("number"),zs=e=>e!==null&&typeof e=="object",zT=e=>e===!0||e===!1,Ac=e=>{if(Eu(e)!=="object")return!1;const t=Ty(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(UA in e)&&!(Ou in e)},qT=e=>{if(!zs(e)||Bs(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},UT=qr("Date"),WT=qr("File"),HT=qr("Blob"),GT=qr("FileList"),YT=e=>zs(e)&&rr(e.pipe),VT=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||rr(e.append)&&((t=Eu(e))==="formdata"||t==="object"&&rr(e.toString)&&e.toString()==="[object FormData]"))},KT=qr("URLSearchParams"),[XT,QT,ZT,JT]=["ReadableStream","Request","Response","Headers"].map(qr),e5=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function qs(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,a;if(typeof e!="object"&&(e=[e]),Ya(e))for(n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else{if(Bs(e))return;const o=r?Object.getOwnPropertyNames(e):Object.keys(e),c=o.length;let u;for(n=0;n<c;n++)u=o[n],t.call(null,e[u],u,e)}}function GA(e,t){if(Bs(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,a;for(;n-- >0;)if(a=r[n],t===a.toLowerCase())return a;return null}const wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,YA=e=>!Na(e)&&e!==wi;function uv(){const{caseless:e,skipUndefined:t}=YA(this)&&this||{},r={},n=(a,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const c=e&&GA(r,o)||o;Ac(r[c])&&Ac(a)?r[c]=uv(r[c],a):Ac(a)?r[c]=uv({},a):Ya(a)?r[c]=a.slice():(!t||!Na(a))&&(r[c]=a)};for(let a=0,o=arguments.length;a<o;a++)arguments[a]&&qs(arguments[a],n);return r}const t5=(e,t,r,{allOwnKeys:n}={})=>(qs(t,(a,o)=>{r&&rr(a)?Object.defineProperty(e,o,{value:qA(a,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),e),r5=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),n5=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},i5=(e,t,r,n)=>{let a,o,c;const u={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),o=a.length;o-- >0;)c=a[o],(!n||n(c,e,t))&&!u[c]&&(t[c]=e[c],u[c]=!0);e=r!==!1&&Ty(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},a5=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},o5=e=>{if(!e)return null;if(Ya(e))return e;let t=e.length;if(!HA(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},s5=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ty(Uint8Array)),l5=(e,t)=>{const n=(e&&e[Ou]).call(e);let a;for(;(a=n.next())&&!a.done;){const o=a.value;t.call(e,o[0],o[1])}},c5=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},u5=qr("HTMLFormElement"),d5=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,a){return n.toUpperCase()+a}),M1=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),f5=qr("RegExp"),VA=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};qs(r,(a,o)=>{let c;(c=t(a,o,e))!==!1&&(n[o]=c||a)}),Object.defineProperties(e,n)},p5=e=>{VA(e,(t,r)=>{if(rr(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(rr(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},h5=(e,t)=>{const r={},n=a=>{a.forEach(o=>{r[o]=!0})};return Ya(e)?n(e):n(String(e).split(t)),r},m5=()=>{},g5=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function v5(e){return!!(e&&rr(e.append)&&e[UA]==="FormData"&&e[Ou])}const y5=e=>{const t=new Array(10),r=(n,a)=>{if(zs(n)){if(t.indexOf(n)>=0)return;if(Bs(n))return n;if(!("toJSON"in n)){t[a]=n;const o=Ya(n)?[]:{};return qs(n,(c,u)=>{const f=r(c,a+1);!Na(f)&&(o[u]=f)}),t[a]=void 0,o}}return n};return r(e,0)},x5=qr("AsyncFunction"),b5=e=>e&&(zs(e)||rr(e))&&rr(e.then)&&rr(e.catch),KA=((e,t)=>e?setImmediate:t?((r,n)=>(wi.addEventListener("message",({source:a,data:o})=>{a===wi&&o===r&&n.length&&n.shift()()},!1),a=>{n.push(a),wi.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",rr(wi.postMessage)),w5=typeof queueMicrotask<"u"?queueMicrotask.bind(wi):typeof process<"u"&&process.nextTick||KA,_5=e=>e!=null&&rr(e[Ou]),re={isArray:Ya,isArrayBuffer:WA,isBuffer:Bs,isFormData:VT,isArrayBufferView:LT,isString:BT,isNumber:HA,isBoolean:zT,isObject:zs,isPlainObject:Ac,isEmptyObject:qT,isReadableStream:XT,isRequest:QT,isResponse:ZT,isHeaders:JT,isUndefined:Na,isDate:UT,isFile:WT,isBlob:HT,isRegExp:f5,isFunction:rr,isStream:YT,isURLSearchParams:KT,isTypedArray:s5,isFileList:GT,forEach:qs,merge:uv,extend:t5,trim:e5,stripBOM:r5,inherits:n5,toFlatObject:i5,kindOf:Eu,kindOfTest:qr,endsWith:a5,toArray:o5,forEachEntry:l5,matchAll:c5,isHTMLForm:u5,hasOwnProperty:M1,hasOwnProp:M1,reduceDescriptors:VA,freezeMethods:p5,toObjectSet:h5,toCamelCase:d5,noop:m5,toFiniteNumber:g5,findKey:GA,global:wi,isContextDefined:YA,isSpecCompliantForm:v5,toJSONObject:y5,isAsyncFn:x5,isThenable:b5,setImmediate:KA,asap:w5,isIterable:_5};let Re=class XA extends Error{static from(t,r,n,a,o,c){const u=new XA(t.message,r||t.code,n,a,o);return u.cause=t,u.name=t.name,c&&Object.assign(u,c),u}constructor(t,r,n,a,o){super(t),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),n&&(this.config=n),a&&(this.request=a),o&&(this.response=o,this.status=o.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:re.toJSONObject(this.config),code:this.code,status:this.status}}};Re.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Re.ERR_BAD_OPTION="ERR_BAD_OPTION";Re.ECONNABORTED="ECONNABORTED";Re.ETIMEDOUT="ETIMEDOUT";Re.ERR_NETWORK="ERR_NETWORK";Re.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Re.ERR_DEPRECATED="ERR_DEPRECATED";Re.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Re.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Re.ERR_CANCELED="ERR_CANCELED";Re.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Re.ERR_INVALID_URL="ERR_INVALID_URL";const j5=null;function dv(e){return re.isPlainObject(e)||re.isArray(e)}function QA(e){return re.endsWith(e,"[]")?e.slice(0,-2):e}function $1(e,t,r){return e?e.concat(t).map(function(a,o){return a=QA(a),!r&&o?"["+a+"]":a}).join(r?".":""):t}function S5(e){return re.isArray(e)&&!e.some(dv)}const N5=re.toFlatObject(re,{},null,function(t){return/^is[A-Z]/.test(t)});function Pu(e,t,r){if(!re.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=re.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,x){return!re.isUndefined(x[_])});const n=r.metaTokens,a=r.visitor||h,o=r.dots,c=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&re.isSpecCompliantForm(t);if(!re.isFunction(a))throw new TypeError("visitor must be a function");function p(w){if(w===null)return"";if(re.isDate(w))return w.toISOString();if(re.isBoolean(w))return w.toString();if(!f&&re.isBlob(w))throw new Re("Blob is not supported. Use a Buffer instead.");return re.isArrayBuffer(w)||re.isTypedArray(w)?f&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function h(w,_,x){let S=w;if(w&&!x&&typeof w=="object"){if(re.endsWith(_,"{}"))_=n?_:_.slice(0,-2),w=JSON.stringify(w);else if(re.isArray(w)&&S5(w)||(re.isFileList(w)||re.endsWith(_,"[]"))&&(S=re.toArray(w)))return _=QA(_),S.forEach(function(O,E){!(re.isUndefined(O)||O===null)&&t.append(c===!0?$1([_],E,o):c===null?_:_+"[]",p(O))}),!1}return dv(w)?!0:(t.append($1(x,_,o),p(w)),!1)}const m=[],v=Object.assign(N5,{defaultVisitor:h,convertValue:p,isVisitable:dv});function b(w,_){if(!re.isUndefined(w)){if(m.indexOf(w)!==-1)throw Error("Circular reference detected in "+_.join("."));m.push(w),re.forEach(w,function(S,C){(!(re.isUndefined(S)||S===null)&&a.call(t,S,re.isString(C)?C.trim():C,_,v))===!0&&b(S,_?_.concat(C):[C])}),m.pop()}}if(!re.isObject(e))throw new TypeError("data must be an object");return b(e),t}function F1(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Ry(e,t){this._pairs=[],e&&Pu(e,this,t)}const ZA=Ry.prototype;ZA.append=function(t,r){this._pairs.push([t,r])};ZA.toString=function(t){const r=t?function(n){return t.call(this,n,F1)}:F1;return this._pairs.map(function(a){return r(a[0])+"="+r(a[1])},"").join("&")};function A5(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function JA(e,t,r){if(!t)return e;const n=r&&r.encode||A5,a=re.isFunction(r)?{serialize:r}:r,o=a&&a.serialize;let c;if(o?c=o(t,a):c=re.isURLSearchParams(t)?t.toString():new Ry(t,a).toString(n),c){const u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+c}return e}class L1{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){re.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Dy={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},C5=typeof URLSearchParams<"u"?URLSearchParams:Ry,O5=typeof FormData<"u"?FormData:null,E5=typeof Blob<"u"?Blob:null,k5={isBrowser:!0,classes:{URLSearchParams:C5,FormData:O5,Blob:E5},protocols:["http","https","file","blob","url","data"]},Iy=typeof window<"u"&&typeof document<"u",fv=typeof navigator=="object"&&navigator||void 0,P5=Iy&&(!fv||["ReactNative","NativeScript","NS"].indexOf(fv.product)<0),T5=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",R5=Iy&&window.location.href||"http://localhost",D5=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Iy,hasStandardBrowserEnv:P5,hasStandardBrowserWebWorkerEnv:T5,navigator:fv,origin:R5},Symbol.toStringTag,{value:"Module"})),Ht={...D5,...k5};function I5(e,t){return Pu(e,new Ht.classes.URLSearchParams,{visitor:function(r,n,a,o){return Ht.isNode&&re.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function M5(e){return re.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function $5(e){const t={},r=Object.keys(e);let n;const a=r.length;let o;for(n=0;n<a;n++)o=r[n],t[o]=e[o];return t}function eC(e){function t(r,n,a,o){let c=r[o++];if(c==="__proto__")return!0;const u=Number.isFinite(+c),f=o>=r.length;return c=!c&&re.isArray(a)?a.length:c,f?(re.hasOwnProp(a,c)?a[c]=[a[c],n]:a[c]=n,!u):((!a[c]||!re.isObject(a[c]))&&(a[c]=[]),t(r,n,a[c],o)&&re.isArray(a[c])&&(a[c]=$5(a[c])),!u)}if(re.isFormData(e)&&re.isFunction(e.entries)){const r={};return re.forEachEntry(e,(n,a)=>{t(M5(n),a,r,0)}),r}return null}function F5(e,t,r){if(re.isString(e))try{return(t||JSON.parse)(e),re.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Us={transitional:Dy,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",a=n.indexOf("application/json")>-1,o=re.isObject(t);if(o&&re.isHTMLForm(t)&&(t=new FormData(t)),re.isFormData(t))return a?JSON.stringify(eC(t)):t;if(re.isArrayBuffer(t)||re.isBuffer(t)||re.isStream(t)||re.isFile(t)||re.isBlob(t)||re.isReadableStream(t))return t;if(re.isArrayBufferView(t))return t.buffer;if(re.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return I5(t,this.formSerializer).toString();if((u=re.isFileList(t))||n.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Pu(u?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||a?(r.setContentType("application/json",!1),F5(t)):t}],transformResponse:[function(t){const r=this.transitional||Us.transitional,n=r&&r.forcedJSONParsing,a=this.responseType==="json";if(re.isResponse(t)||re.isReadableStream(t))return t;if(t&&re.isString(t)&&(n&&!this.responseType||a)){const c=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(t,this.parseReviver)}catch(u){if(c)throw u.name==="SyntaxError"?Re.from(u,Re.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};re.forEach(["delete","get","head","post","put","patch"],e=>{Us.headers[e]={}});const L5=re.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),B5=e=>{const t={};let r,n,a;return e&&e.split(`
`).forEach(function(c){a=c.indexOf(":"),r=c.substring(0,a).trim().toLowerCase(),n=c.substring(a+1).trim(),!(!r||t[r]&&L5[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},B1=Symbol("internals");function qo(e){return e&&String(e).trim().toLowerCase()}function Cc(e){return e===!1||e==null?e:re.isArray(e)?e.map(Cc):String(e)}function z5(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const q5=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function sp(e,t,r,n,a){if(re.isFunction(n))return n.call(this,t,r);if(a&&(t=r),!!re.isString(t)){if(re.isString(n))return t.indexOf(n)!==-1;if(re.isRegExp(n))return n.test(t)}}function U5(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function W5(e,t){const r=re.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(a,o,c){return this[n].call(this,t,a,o,c)},configurable:!0})})}let nr=class{constructor(t){t&&this.set(t)}set(t,r,n){const a=this;function o(u,f,p){const h=qo(f);if(!h)throw new Error("header name must be a non-empty string");const m=re.findKey(a,h);(!m||a[m]===void 0||p===!0||p===void 0&&a[m]!==!1)&&(a[m||f]=Cc(u))}const c=(u,f)=>re.forEach(u,(p,h)=>o(p,h,f));if(re.isPlainObject(t)||t instanceof this.constructor)c(t,r);else if(re.isString(t)&&(t=t.trim())&&!q5(t))c(B5(t),r);else if(re.isObject(t)&&re.isIterable(t)){let u={},f,p;for(const h of t){if(!re.isArray(h))throw TypeError("Object iterator must return a key-value pair");u[p=h[0]]=(f=u[p])?re.isArray(f)?[...f,h[1]]:[f,h[1]]:h[1]}c(u,r)}else t!=null&&o(r,t,n);return this}get(t,r){if(t=qo(t),t){const n=re.findKey(this,t);if(n){const a=this[n];if(!r)return a;if(r===!0)return z5(a);if(re.isFunction(r))return r.call(this,a,n);if(re.isRegExp(r))return r.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=qo(t),t){const n=re.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||sp(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let a=!1;function o(c){if(c=qo(c),c){const u=re.findKey(n,c);u&&(!r||sp(n,n[u],u,r))&&(delete n[u],a=!0)}}return re.isArray(t)?t.forEach(o):o(t),a}clear(t){const r=Object.keys(this);let n=r.length,a=!1;for(;n--;){const o=r[n];(!t||sp(this,this[o],o,t,!0))&&(delete this[o],a=!0)}return a}normalize(t){const r=this,n={};return re.forEach(this,(a,o)=>{const c=re.findKey(n,o);if(c){r[c]=Cc(a),delete r[o];return}const u=t?U5(o):String(o).trim();u!==o&&delete r[o],r[u]=Cc(a),n[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return re.forEach(this,(n,a)=>{n!=null&&n!==!1&&(r[a]=t&&re.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(a=>n.set(a)),n}static accessor(t){const n=(this[B1]=this[B1]={accessors:{}}).accessors,a=this.prototype;function o(c){const u=qo(c);n[u]||(W5(a,c),n[u]=!0)}return re.isArray(t)?t.forEach(o):o(t),this}};nr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);re.reduceDescriptors(nr.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});re.freezeMethods(nr);function lp(e,t){const r=this||Us,n=t||r,a=nr.from(n.headers);let o=n.data;return re.forEach(e,function(u){o=u.call(r,o,a.normalize(),t?t.status:void 0)}),a.normalize(),o}function tC(e){return!!(e&&e.__CANCEL__)}let Ws=class extends Re{constructor(t,r,n){super(t??"canceled",Re.ERR_CANCELED,r,n),this.name="CanceledError",this.__CANCEL__=!0}};function rC(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new Re("Request failed with status code "+r.status,[Re.ERR_BAD_REQUEST,Re.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function H5(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function G5(e,t){e=e||10;const r=new Array(e),n=new Array(e);let a=0,o=0,c;return t=t!==void 0?t:1e3,function(f){const p=Date.now(),h=n[o];c||(c=p),r[a]=f,n[a]=p;let m=o,v=0;for(;m!==a;)v+=r[m++],m=m%e;if(a=(a+1)%e,a===o&&(o=(o+1)%e),p-c<t)return;const b=h&&p-h;return b?Math.round(v*1e3/b):void 0}}function Y5(e,t){let r=0,n=1e3/t,a,o;const c=(p,h=Date.now())=>{r=h,a=null,o&&(clearTimeout(o),o=null),e(...p)};return[(...p)=>{const h=Date.now(),m=h-r;m>=n?c(p,h):(a=p,o||(o=setTimeout(()=>{o=null,c(a)},n-m)))},()=>a&&c(a)]}const Ec=(e,t,r=3)=>{let n=0;const a=G5(50,250);return Y5(o=>{const c=o.loaded,u=o.lengthComputable?o.total:void 0,f=c-n,p=a(f),h=c<=u;n=c;const m={loaded:c,total:u,progress:u?c/u:void 0,bytes:f,rate:p||void 0,estimated:p&&u&&h?(u-c)/p:void 0,event:o,lengthComputable:u!=null,[t?"download":"upload"]:!0};e(m)},r)},z1=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},q1=e=>(...t)=>re.asap(()=>e(...t)),V5=Ht.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Ht.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Ht.origin),Ht.navigator&&/(msie|trident)/i.test(Ht.navigator.userAgent)):()=>!0,K5=Ht.hasStandardBrowserEnv?{write(e,t,r,n,a,o,c){if(typeof document>"u")return;const u=[`${e}=${encodeURIComponent(t)}`];re.isNumber(r)&&u.push(`expires=${new Date(r).toUTCString()}`),re.isString(n)&&u.push(`path=${n}`),re.isString(a)&&u.push(`domain=${a}`),o===!0&&u.push("secure"),re.isString(c)&&u.push(`SameSite=${c}`),document.cookie=u.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function X5(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Q5(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function nC(e,t,r){let n=!X5(t);return e&&(n||r==!1)?Q5(e,t):t}const U1=e=>e instanceof nr?{...e}:e;function ki(e,t){t=t||{};const r={};function n(p,h,m,v){return re.isPlainObject(p)&&re.isPlainObject(h)?re.merge.call({caseless:v},p,h):re.isPlainObject(h)?re.merge({},h):re.isArray(h)?h.slice():h}function a(p,h,m,v){if(re.isUndefined(h)){if(!re.isUndefined(p))return n(void 0,p,m,v)}else return n(p,h,m,v)}function o(p,h){if(!re.isUndefined(h))return n(void 0,h)}function c(p,h){if(re.isUndefined(h)){if(!re.isUndefined(p))return n(void 0,p)}else return n(void 0,h)}function u(p,h,m){if(m in t)return n(p,h);if(m in e)return n(void 0,p)}const f={url:o,method:o,data:o,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:u,headers:(p,h,m)=>a(U1(p),U1(h),m,!0)};return re.forEach(Object.keys({...e,...t}),function(h){if(h==="__proto__"||h==="constructor"||h==="prototype")return;const m=re.hasOwnProp(f,h)?f[h]:a,v=m(e[h],t[h],h);re.isUndefined(v)&&m!==u||(r[h]=v)}),r}const iC=e=>{const t=ki({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:a,xsrfCookieName:o,headers:c,auth:u}=t;if(t.headers=c=nr.from(c),t.url=JA(nC(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),u&&c.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),re.isFormData(r)){if(Ht.hasStandardBrowserEnv||Ht.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if(re.isFunction(r.getHeaders)){const f=r.getHeaders(),p=["content-type","content-length"];Object.entries(f).forEach(([h,m])=>{p.includes(h.toLowerCase())&&c.set(h,m)})}}if(Ht.hasStandardBrowserEnv&&(n&&re.isFunction(n)&&(n=n(t)),n||n!==!1&&V5(t.url))){const f=a&&o&&K5.read(o);f&&c.set(a,f)}return t},Z5=typeof XMLHttpRequest<"u",J5=Z5&&function(e){return new Promise(function(r,n){const a=iC(e);let o=a.data;const c=nr.from(a.headers).normalize();let{responseType:u,onUploadProgress:f,onDownloadProgress:p}=a,h,m,v,b,w;function _(){b&&b(),w&&w(),a.cancelToken&&a.cancelToken.unsubscribe(h),a.signal&&a.signal.removeEventListener("abort",h)}let x=new XMLHttpRequest;x.open(a.method.toUpperCase(),a.url,!0),x.timeout=a.timeout;function S(){if(!x)return;const O=nr.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),A={data:!u||u==="text"||u==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:O,config:e,request:x};rC(function(P){r(P),_()},function(P){n(P),_()},A),x=null}"onloadend"in x?x.onloadend=S:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(S)},x.onabort=function(){x&&(n(new Re("Request aborted",Re.ECONNABORTED,e,x)),x=null)},x.onerror=function(E){const A=E&&E.message?E.message:"Network Error",N=new Re(A,Re.ERR_NETWORK,e,x);N.event=E||null,n(N),x=null},x.ontimeout=function(){let E=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const A=a.transitional||Dy;a.timeoutErrorMessage&&(E=a.timeoutErrorMessage),n(new Re(E,A.clarifyTimeoutError?Re.ETIMEDOUT:Re.ECONNABORTED,e,x)),x=null},o===void 0&&c.setContentType(null),"setRequestHeader"in x&&re.forEach(c.toJSON(),function(E,A){x.setRequestHeader(A,E)}),re.isUndefined(a.withCredentials)||(x.withCredentials=!!a.withCredentials),u&&u!=="json"&&(x.responseType=a.responseType),p&&([v,w]=Ec(p,!0),x.addEventListener("progress",v)),f&&x.upload&&([m,b]=Ec(f),x.upload.addEventListener("progress",m),x.upload.addEventListener("loadend",b)),(a.cancelToken||a.signal)&&(h=O=>{x&&(n(!O||O.type?new Ws(null,e,x):O),x.abort(),x=null)},a.cancelToken&&a.cancelToken.subscribe(h),a.signal&&(a.signal.aborted?h():a.signal.addEventListener("abort",h)));const C=H5(a.url);if(C&&Ht.protocols.indexOf(C)===-1){n(new Re("Unsupported protocol "+C+":",Re.ERR_BAD_REQUEST,e));return}x.send(o||null)})},eR=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,a;const o=function(p){if(!a){a=!0,u();const h=p instanceof Error?p:this.reason;n.abort(h instanceof Re?h:new Ws(h instanceof Error?h.message:h))}};let c=t&&setTimeout(()=>{c=null,o(new Re(`timeout of ${t}ms exceeded`,Re.ETIMEDOUT))},t);const u=()=>{e&&(c&&clearTimeout(c),c=null,e.forEach(p=>{p.unsubscribe?p.unsubscribe(o):p.removeEventListener("abort",o)}),e=null)};e.forEach(p=>p.addEventListener("abort",o));const{signal:f}=n;return f.unsubscribe=()=>re.asap(u),f}},tR=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,a;for(;n<r;)a=n+t,yield e.slice(n,a),n=a},rR=async function*(e,t){for await(const r of nR(e))yield*tR(r,t)},nR=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},W1=(e,t,r,n)=>{const a=rR(e,t);let o=0,c,u=f=>{c||(c=!0,n&&n(f))};return new ReadableStream({async pull(f){try{const{done:p,value:h}=await a.next();if(p){u(),f.close();return}let m=h.byteLength;if(r){let v=o+=m;r(v)}f.enqueue(new Uint8Array(h))}catch(p){throw u(p),p}},cancel(f){return u(f),a.return()}},{highWaterMark:2})},H1=64*1024,{isFunction:uc}=re,iR=(({Request:e,Response:t})=>({Request:e,Response:t}))(re.global),{ReadableStream:G1,TextEncoder:Y1}=re.global,V1=(e,...t)=>{try{return!!e(...t)}catch{return!1}},aR=e=>{e=re.merge.call({skipUndefined:!0},iR,e);const{fetch:t,Request:r,Response:n}=e,a=t?uc(t):typeof fetch=="function",o=uc(r),c=uc(n);if(!a)return!1;const u=a&&uc(G1),f=a&&(typeof Y1=="function"?(w=>_=>w.encode(_))(new Y1):async w=>new Uint8Array(await new r(w).arrayBuffer())),p=o&&u&&V1(()=>{let w=!1;const _=new r(Ht.origin,{body:new G1,method:"POST",get duplex(){return w=!0,"half"}}).headers.has("Content-Type");return w&&!_}),h=c&&u&&V1(()=>re.isReadableStream(new n("").body)),m={stream:h&&(w=>w.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(w=>{!m[w]&&(m[w]=(_,x)=>{let S=_&&_[w];if(S)return S.call(_);throw new Re(`Response type '${w}' is not supported`,Re.ERR_NOT_SUPPORT,x)})});const v=async w=>{if(w==null)return 0;if(re.isBlob(w))return w.size;if(re.isSpecCompliantForm(w))return(await new r(Ht.origin,{method:"POST",body:w}).arrayBuffer()).byteLength;if(re.isArrayBufferView(w)||re.isArrayBuffer(w))return w.byteLength;if(re.isURLSearchParams(w)&&(w=w+""),re.isString(w))return(await f(w)).byteLength},b=async(w,_)=>{const x=re.toFiniteNumber(w.getContentLength());return x??v(_)};return async w=>{let{url:_,method:x,data:S,signal:C,cancelToken:O,timeout:E,onDownloadProgress:A,onUploadProgress:N,responseType:P,headers:R,withCredentials:D="same-origin",fetchOptions:G}=iC(w),q=t||fetch;P=P?(P+"").toLowerCase():"text";let M=eR([C,O&&O.toAbortSignal()],E),H=null;const B=M&&M.unsubscribe&&(()=>{M.unsubscribe()});let F;try{if(N&&p&&x!=="get"&&x!=="head"&&(F=await b(R,S))!==0){let I=new r(_,{method:"POST",body:S,duplex:"half"}),L;if(re.isFormData(S)&&(L=I.headers.get("content-type"))&&R.setContentType(L),I.body){const[ie,pe]=z1(F,Ec(q1(N)));S=W1(I.body,H1,ie,pe)}}re.isString(D)||(D=D?"include":"omit");const Y=o&&"credentials"in r.prototype,J={...G,signal:M,method:x.toUpperCase(),headers:R.normalize().toJSON(),body:S,duplex:"half",credentials:Y?D:void 0};H=o&&new r(_,J);let U=await(o?q(H,G):q(_,J));const X=h&&(P==="stream"||P==="response");if(h&&(A||X&&B)){const I={};["status","statusText","headers"].forEach(fe=>{I[fe]=U[fe]});const L=re.toFiniteNumber(U.headers.get("content-length")),[ie,pe]=A&&z1(L,Ec(q1(A),!0))||[];U=new n(W1(U.body,H1,ie,()=>{pe&&pe(),B&&B()}),I)}P=P||"text";let K=await m[re.findKey(m,P)||"text"](U,w);return!X&&B&&B(),await new Promise((I,L)=>{rC(I,L,{data:K,headers:nr.from(U.headers),status:U.status,statusText:U.statusText,config:w,request:H})})}catch(Y){throw B&&B(),Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)?Object.assign(new Re("Network Error",Re.ERR_NETWORK,w,H,Y&&Y.response),{cause:Y.cause||Y}):Re.from(Y,Y&&Y.code,w,H,Y&&Y.response)}}},oR=new Map,aC=e=>{let t=e&&e.env||{};const{fetch:r,Request:n,Response:a}=t,o=[n,a,r];let c=o.length,u=c,f,p,h=oR;for(;u--;)f=o[u],p=h.get(f),p===void 0&&h.set(f,p=u?new Map:aR(t)),h=p;return p};aC();const My={http:j5,xhr:J5,fetch:{get:aC}};re.forEach(My,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const K1=e=>`- ${e}`,sR=e=>re.isFunction(e)||e===null||e===!1;function lR(e,t){e=re.isArray(e)?e:[e];const{length:r}=e;let n,a;const o={};for(let c=0;c<r;c++){n=e[c];let u;if(a=n,!sR(n)&&(a=My[(u=String(n)).toLowerCase()],a===void 0))throw new Re(`Unknown adapter '${u}'`);if(a&&(re.isFunction(a)||(a=a.get(t))))break;o[u||"#"+c]=a}if(!a){const c=Object.entries(o).map(([f,p])=>`adapter ${f} `+(p===!1?"is not supported by the environment":"is not available in the build"));let u=r?c.length>1?`since :
`+c.map(K1).join(`
`):" "+K1(c[0]):"as no adapter specified";throw new Re("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return a}const oC={getAdapter:lR,adapters:My};function cp(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ws(null,e)}function X1(e){return cp(e),e.headers=nr.from(e.headers),e.data=lp.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),oC.getAdapter(e.adapter||Us.adapter,e)(e).then(function(n){return cp(e),n.data=lp.call(e,e.transformResponse,n),n.headers=nr.from(n.headers),n},function(n){return tC(n)||(cp(e),n&&n.response&&(n.response.data=lp.call(e,e.transformResponse,n.response),n.response.headers=nr.from(n.response.headers))),Promise.reject(n)})}const sC="1.13.5",Tu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Tu[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Q1={};Tu.transitional=function(t,r,n){function a(o,c){return"[Axios v"+sC+"] Transitional option '"+o+"'"+c+(n?". "+n:"")}return(o,c,u)=>{if(t===!1)throw new Re(a(c," has been removed"+(r?" in "+r:"")),Re.ERR_DEPRECATED);return r&&!Q1[c]&&(Q1[c]=!0,console.warn(a(c," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,c,u):!0}};Tu.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function cR(e,t,r){if(typeof e!="object")throw new Re("options must be an object",Re.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let a=n.length;for(;a-- >0;){const o=n[a],c=t[o];if(c){const u=e[o],f=u===void 0||c(u,o,e);if(f!==!0)throw new Re("option "+o+" must be "+f,Re.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new Re("Unknown option "+o,Re.ERR_BAD_OPTION)}}const Oc={assertOptions:cR,validators:Tu},wr=Oc.validators;let Ai=class{constructor(t){this.defaults=t||{},this.interceptors={request:new L1,response:new L1}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const o=a.stack?a.stack.replace(/^.+\n/,""):"";try{n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=ki(this.defaults,r);const{transitional:n,paramsSerializer:a,headers:o}=r;n!==void 0&&Oc.assertOptions(n,{silentJSONParsing:wr.transitional(wr.boolean),forcedJSONParsing:wr.transitional(wr.boolean),clarifyTimeoutError:wr.transitional(wr.boolean),legacyInterceptorReqResOrdering:wr.transitional(wr.boolean)},!1),a!=null&&(re.isFunction(a)?r.paramsSerializer={serialize:a}:Oc.assertOptions(a,{encode:wr.function,serialize:wr.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Oc.assertOptions(r,{baseUrl:wr.spelling("baseURL"),withXsrfToken:wr.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let c=o&&re.merge(o.common,o[r.method]);o&&re.forEach(["delete","get","head","post","put","patch","common"],w=>{delete o[w]}),r.headers=nr.concat(c,o);const u=[];let f=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(r)===!1)return;f=f&&_.synchronous;const x=r.transitional||Dy;x&&x.legacyInterceptorReqResOrdering?u.unshift(_.fulfilled,_.rejected):u.push(_.fulfilled,_.rejected)});const p=[];this.interceptors.response.forEach(function(_){p.push(_.fulfilled,_.rejected)});let h,m=0,v;if(!f){const w=[X1.bind(this),void 0];for(w.unshift(...u),w.push(...p),v=w.length,h=Promise.resolve(r);m<v;)h=h.then(w[m++],w[m++]);return h}v=u.length;let b=r;for(;m<v;){const w=u[m++],_=u[m++];try{b=w(b)}catch(x){_.call(this,x);break}}try{h=X1.call(this,b)}catch(w){return Promise.reject(w)}for(m=0,v=p.length;m<v;)h=h.then(p[m++],p[m++]);return h}getUri(t){t=ki(this.defaults,t);const r=nC(t.baseURL,t.url,t.allowAbsoluteUrls);return JA(r,t.params,t.paramsSerializer)}};re.forEach(["delete","get","head","options"],function(t){Ai.prototype[t]=function(r,n){return this.request(ki(n||{},{method:t,url:r,data:(n||{}).data}))}});re.forEach(["post","put","patch"],function(t){function r(n){return function(o,c,u){return this.request(ki(u||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:c}))}}Ai.prototype[t]=r(),Ai.prototype[t+"Form"]=r(!0)});let uR=class lC{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(a=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](a);n._listeners=null}),this.promise.then=a=>{let o;const c=new Promise(u=>{n.subscribe(u),o=u}).then(a);return c.cancel=function(){n.unsubscribe(o)},c},t(function(o,c,u){n.reason||(n.reason=new Ws(o,c,u),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new lC(function(a){t=a}),cancel:t}}};function dR(e){return function(r){return e.apply(null,r)}}function fR(e){return re.isObject(e)&&e.isAxiosError===!0}const pv={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(pv).forEach(([e,t])=>{pv[t]=e});function cC(e){const t=new Ai(e),r=qA(Ai.prototype.request,t);return re.extend(r,Ai.prototype,t,{allOwnKeys:!0}),re.extend(r,t,null,{allOwnKeys:!0}),r.create=function(a){return cC(ki(e,a))},r}const ft=cC(Us);ft.Axios=Ai;ft.CanceledError=Ws;ft.CancelToken=uR;ft.isCancel=tC;ft.VERSION=sC;ft.toFormData=Pu;ft.AxiosError=Re;ft.Cancel=ft.CanceledError;ft.all=function(t){return Promise.all(t)};ft.spread=dR;ft.isAxiosError=fR;ft.mergeConfig=ki;ft.AxiosHeaders=nr;ft.formToJSON=e=>eC(re.isHTMLForm(e)?new FormData(e):e);ft.getAdapter=oC.getAdapter;ft.HttpStatusCode=pv;ft.default=ft;const{Axios:hH,AxiosError:mH,CanceledError:gH,isCancel:vH,CancelToken:yH,VERSION:xH,all:bH,Cancel:wH,isAxiosError:_H,spread:jH,toFormData:SH,AxiosHeaders:NH,HttpStatusCode:AH,formToJSON:CH,getAdapter:OH,mergeConfig:EH}=ft,uC="https://zero-mumu-backend.onrender.com",Fe=ft.create({baseURL:uC,headers:{"Content-Type":"application/json"},timeout:3e4});Fe.interceptors.request.use(e=>{const t=localStorage.getItem("access_token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));Fe.interceptors.response.use(e=>e,async e=>{const t=e.config;if(e.response?.status===401&&!t._retry){t._retry=!0;try{const r=localStorage.getItem("refresh_token");if(!r)throw new Error("No refresh token");const n=await ft.post(`${uC}/api/auth/refresh`,{},{headers:{Authorization:`Bearer ${r}`}});if(n.data.success)return localStorage.setItem("access_token",n.data.access_token),t.headers.Authorization=`Bearer ${n.data.access_token}`,Fe(t)}catch(r){console.error("Token refresh failed:",r),localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user"),window.location.pathname.includes("/login")||(window.location.href="/?tab=account")}}return Promise.reject(e)});function dC(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=dC(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function We(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=dC(e))&&(n&&(n+=" "),n+=t);return n}var up,Z1;function ar(){if(Z1)return up;Z1=1;var e=Array.isArray;return up=e,up}var dp,J1;function fC(){if(J1)return dp;J1=1;var e=typeof lc=="object"&&lc&&lc.Object===Object&&lc;return dp=e,dp}var fp,ew;function tn(){if(ew)return fp;ew=1;var e=fC(),t=typeof self=="object"&&self&&self.Object===Object&&self,r=e||t||Function("return this")();return fp=r,fp}var pp,tw;function Hs(){if(tw)return pp;tw=1;var e=tn(),t=e.Symbol;return pp=t,pp}var hp,rw;function pR(){if(rw)return hp;rw=1;var e=Hs(),t=Object.prototype,r=t.hasOwnProperty,n=t.toString,a=e?e.toStringTag:void 0;function o(c){var u=r.call(c,a),f=c[a];try{c[a]=void 0;var p=!0}catch{}var h=n.call(c);return p&&(u?c[a]=f:delete c[a]),h}return hp=o,hp}var mp,nw;function hR(){if(nw)return mp;nw=1;var e=Object.prototype,t=e.toString;function r(n){return t.call(n)}return mp=r,mp}var gp,iw;function jn(){if(iw)return gp;iw=1;var e=Hs(),t=pR(),r=hR(),n="[object Null]",a="[object Undefined]",o=e?e.toStringTag:void 0;function c(u){return u==null?u===void 0?a:n:o&&o in Object(u)?t(u):r(u)}return gp=c,gp}var vp,aw;function Sn(){if(aw)return vp;aw=1;function e(t){return t!=null&&typeof t=="object"}return vp=e,vp}var yp,ow;function Va(){if(ow)return yp;ow=1;var e=jn(),t=Sn(),r="[object Symbol]";function n(a){return typeof a=="symbol"||t(a)&&e(a)==r}return yp=n,yp}var xp,sw;function $y(){if(sw)return xp;sw=1;var e=ar(),t=Va(),r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function a(o,c){if(e(o))return!1;var u=typeof o;return u=="number"||u=="symbol"||u=="boolean"||o==null||t(o)?!0:n.test(o)||!r.test(o)||c!=null&&o in Object(c)}return xp=a,xp}var bp,lw;function Zn(){if(lw)return bp;lw=1;function e(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}return bp=e,bp}var wp,cw;function Fy(){if(cw)return wp;cw=1;var e=jn(),t=Zn(),r="[object AsyncFunction]",n="[object Function]",a="[object GeneratorFunction]",o="[object Proxy]";function c(u){if(!t(u))return!1;var f=e(u);return f==n||f==a||f==r||f==o}return wp=c,wp}var _p,uw;function mR(){if(uw)return _p;uw=1;var e=tn(),t=e["__core-js_shared__"];return _p=t,_p}var jp,dw;function gR(){if(dw)return jp;dw=1;var e=mR(),t=(function(){var n=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""})();function r(n){return!!t&&t in n}return jp=r,jp}var Sp,fw;function pC(){if(fw)return Sp;fw=1;var e=Function.prototype,t=e.toString;function r(n){if(n!=null){try{return t.call(n)}catch{}try{return n+""}catch{}}return""}return Sp=r,Sp}var Np,pw;function vR(){if(pw)return Np;pw=1;var e=Fy(),t=gR(),r=Zn(),n=pC(),a=/[\\^$.*+?()[\]{}|]/g,o=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,f=c.toString,p=u.hasOwnProperty,h=RegExp("^"+f.call(p).replace(a,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function m(v){if(!r(v)||t(v))return!1;var b=e(v)?h:o;return b.test(n(v))}return Np=m,Np}var Ap,hw;function yR(){if(hw)return Ap;hw=1;function e(t,r){return t?.[r]}return Ap=e,Ap}var Cp,mw;function Mi(){if(mw)return Cp;mw=1;var e=vR(),t=yR();function r(n,a){var o=t(n,a);return e(o)?o:void 0}return Cp=r,Cp}var Op,gw;function Ru(){if(gw)return Op;gw=1;var e=Mi(),t=e(Object,"create");return Op=t,Op}var Ep,vw;function xR(){if(vw)return Ep;vw=1;var e=Ru();function t(){this.__data__=e?e(null):{},this.size=0}return Ep=t,Ep}var kp,yw;function bR(){if(yw)return kp;yw=1;function e(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}return kp=e,kp}var Pp,xw;function wR(){if(xw)return Pp;xw=1;var e=Ru(),t="__lodash_hash_undefined__",r=Object.prototype,n=r.hasOwnProperty;function a(o){var c=this.__data__;if(e){var u=c[o];return u===t?void 0:u}return n.call(c,o)?c[o]:void 0}return Pp=a,Pp}var Tp,bw;function _R(){if(bw)return Tp;bw=1;var e=Ru(),t=Object.prototype,r=t.hasOwnProperty;function n(a){var o=this.__data__;return e?o[a]!==void 0:r.call(o,a)}return Tp=n,Tp}var Rp,ww;function jR(){if(ww)return Rp;ww=1;var e=Ru(),t="__lodash_hash_undefined__";function r(n,a){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=e&&a===void 0?t:a,this}return Rp=r,Rp}var Dp,_w;function SR(){if(_w)return Dp;_w=1;var e=xR(),t=bR(),r=wR(),n=_R(),a=jR();function o(c){var u=-1,f=c==null?0:c.length;for(this.clear();++u<f;){var p=c[u];this.set(p[0],p[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=r,o.prototype.has=n,o.prototype.set=a,Dp=o,Dp}var Ip,jw;function NR(){if(jw)return Ip;jw=1;function e(){this.__data__=[],this.size=0}return Ip=e,Ip}var Mp,Sw;function Ly(){if(Sw)return Mp;Sw=1;function e(t,r){return t===r||t!==t&&r!==r}return Mp=e,Mp}var $p,Nw;function Du(){if(Nw)return $p;Nw=1;var e=Ly();function t(r,n){for(var a=r.length;a--;)if(e(r[a][0],n))return a;return-1}return $p=t,$p}var Fp,Aw;function AR(){if(Aw)return Fp;Aw=1;var e=Du(),t=Array.prototype,r=t.splice;function n(a){var o=this.__data__,c=e(o,a);if(c<0)return!1;var u=o.length-1;return c==u?o.pop():r.call(o,c,1),--this.size,!0}return Fp=n,Fp}var Lp,Cw;function CR(){if(Cw)return Lp;Cw=1;var e=Du();function t(r){var n=this.__data__,a=e(n,r);return a<0?void 0:n[a][1]}return Lp=t,Lp}var Bp,Ow;function OR(){if(Ow)return Bp;Ow=1;var e=Du();function t(r){return e(this.__data__,r)>-1}return Bp=t,Bp}var zp,Ew;function ER(){if(Ew)return zp;Ew=1;var e=Du();function t(r,n){var a=this.__data__,o=e(a,r);return o<0?(++this.size,a.push([r,n])):a[o][1]=n,this}return zp=t,zp}var qp,kw;function Iu(){if(kw)return qp;kw=1;var e=NR(),t=AR(),r=CR(),n=OR(),a=ER();function o(c){var u=-1,f=c==null?0:c.length;for(this.clear();++u<f;){var p=c[u];this.set(p[0],p[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=r,o.prototype.has=n,o.prototype.set=a,qp=o,qp}var Up,Pw;function By(){if(Pw)return Up;Pw=1;var e=Mi(),t=tn(),r=e(t,"Map");return Up=r,Up}var Wp,Tw;function kR(){if(Tw)return Wp;Tw=1;var e=SR(),t=Iu(),r=By();function n(){this.size=0,this.__data__={hash:new e,map:new(r||t),string:new e}}return Wp=n,Wp}var Hp,Rw;function PR(){if(Rw)return Hp;Rw=1;function e(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}return Hp=e,Hp}var Gp,Dw;function Mu(){if(Dw)return Gp;Dw=1;var e=PR();function t(r,n){var a=r.__data__;return e(n)?a[typeof n=="string"?"string":"hash"]:a.map}return Gp=t,Gp}var Yp,Iw;function TR(){if(Iw)return Yp;Iw=1;var e=Mu();function t(r){var n=e(this,r).delete(r);return this.size-=n?1:0,n}return Yp=t,Yp}var Vp,Mw;function RR(){if(Mw)return Vp;Mw=1;var e=Mu();function t(r){return e(this,r).get(r)}return Vp=t,Vp}var Kp,$w;function DR(){if($w)return Kp;$w=1;var e=Mu();function t(r){return e(this,r).has(r)}return Kp=t,Kp}var Xp,Fw;function IR(){if(Fw)return Xp;Fw=1;var e=Mu();function t(r,n){var a=e(this,r),o=a.size;return a.set(r,n),this.size+=a.size==o?0:1,this}return Xp=t,Xp}var Qp,Lw;function zy(){if(Lw)return Qp;Lw=1;var e=kR(),t=TR(),r=RR(),n=DR(),a=IR();function o(c){var u=-1,f=c==null?0:c.length;for(this.clear();++u<f;){var p=c[u];this.set(p[0],p[1])}}return o.prototype.clear=e,o.prototype.delete=t,o.prototype.get=r,o.prototype.has=n,o.prototype.set=a,Qp=o,Qp}var Zp,Bw;function hC(){if(Bw)return Zp;Bw=1;var e=zy(),t="Expected a function";function r(n,a){if(typeof n!="function"||a!=null&&typeof a!="function")throw new TypeError(t);var o=function(){var c=arguments,u=a?a.apply(this,c):c[0],f=o.cache;if(f.has(u))return f.get(u);var p=n.apply(this,c);return o.cache=f.set(u,p)||f,p};return o.cache=new(r.Cache||e),o}return r.Cache=e,Zp=r,Zp}var Jp,zw;function MR(){if(zw)return Jp;zw=1;var e=hC(),t=500;function r(n){var a=e(n,function(c){return o.size===t&&o.clear(),c}),o=a.cache;return a}return Jp=r,Jp}var eh,qw;function $R(){if(qw)return eh;qw=1;var e=MR(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,r=/\\(\\)?/g,n=e(function(a){var o=[];return a.charCodeAt(0)===46&&o.push(""),a.replace(t,function(c,u,f,p){o.push(f?p.replace(r,"$1"):u||c)}),o});return eh=n,eh}var th,Uw;function qy(){if(Uw)return th;Uw=1;function e(t,r){for(var n=-1,a=t==null?0:t.length,o=Array(a);++n<a;)o[n]=r(t[n],n,t);return o}return th=e,th}var rh,Ww;function FR(){if(Ww)return rh;Ww=1;var e=Hs(),t=qy(),r=ar(),n=Va(),a=e?e.prototype:void 0,o=a?a.toString:void 0;function c(u){if(typeof u=="string")return u;if(r(u))return t(u,c)+"";if(n(u))return o?o.call(u):"";var f=u+"";return f=="0"&&1/u==-1/0?"-0":f}return rh=c,rh}var nh,Hw;function mC(){if(Hw)return nh;Hw=1;var e=FR();function t(r){return r==null?"":e(r)}return nh=t,nh}var ih,Gw;function gC(){if(Gw)return ih;Gw=1;var e=ar(),t=$y(),r=$R(),n=mC();function a(o,c){return e(o)?o:t(o,c)?[o]:r(n(o))}return ih=a,ih}var ah,Yw;function $u(){if(Yw)return ah;Yw=1;var e=Va();function t(r){if(typeof r=="string"||e(r))return r;var n=r+"";return n=="0"&&1/r==-1/0?"-0":n}return ah=t,ah}var oh,Vw;function Uy(){if(Vw)return oh;Vw=1;var e=gC(),t=$u();function r(n,a){a=e(a,n);for(var o=0,c=a.length;n!=null&&o<c;)n=n[t(a[o++])];return o&&o==c?n:void 0}return oh=r,oh}var sh,Kw;function vC(){if(Kw)return sh;Kw=1;var e=Uy();function t(r,n,a){var o=r==null?void 0:e(r,n);return o===void 0?a:o}return sh=t,sh}var LR=vC();const Ar=Je(LR);var lh,Xw;function BR(){if(Xw)return lh;Xw=1;function e(t){return t==null}return lh=e,lh}var zR=BR();const He=Je(zR);var ch,Qw;function qR(){if(Qw)return ch;Qw=1;var e=jn(),t=ar(),r=Sn(),n="[object String]";function a(o){return typeof o=="string"||!t(o)&&r(o)&&e(o)==n}return ch=a,ch}var UR=qR();const Pi=Je(UR);var WR=Fy();const $e=Je(WR);var HR=Zn();const Ka=Je(HR);var uh={exports:{}},Ge={};var Zw;function GR(){if(Zw)return Ge;Zw=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),w;w=Symbol.for("react.module.reference");function _(x){if(typeof x=="object"&&x!==null){var S=x.$$typeof;switch(S){case e:switch(x=x.type,x){case r:case a:case n:case p:case h:return x;default:switch(x=x&&x.$$typeof,x){case u:case c:case f:case v:case m:case o:return x;default:return S}}case t:return S}}}return Ge.ContextConsumer=c,Ge.ContextProvider=o,Ge.Element=e,Ge.ForwardRef=f,Ge.Fragment=r,Ge.Lazy=v,Ge.Memo=m,Ge.Portal=t,Ge.Profiler=a,Ge.StrictMode=n,Ge.Suspense=p,Ge.SuspenseList=h,Ge.isAsyncMode=function(){return!1},Ge.isConcurrentMode=function(){return!1},Ge.isContextConsumer=function(x){return _(x)===c},Ge.isContextProvider=function(x){return _(x)===o},Ge.isElement=function(x){return typeof x=="object"&&x!==null&&x.$$typeof===e},Ge.isForwardRef=function(x){return _(x)===f},Ge.isFragment=function(x){return _(x)===r},Ge.isLazy=function(x){return _(x)===v},Ge.isMemo=function(x){return _(x)===m},Ge.isPortal=function(x){return _(x)===t},Ge.isProfiler=function(x){return _(x)===a},Ge.isStrictMode=function(x){return _(x)===n},Ge.isSuspense=function(x){return _(x)===p},Ge.isSuspenseList=function(x){return _(x)===h},Ge.isValidElementType=function(x){return typeof x=="string"||typeof x=="function"||x===r||x===a||x===n||x===p||x===h||x===b||typeof x=="object"&&x!==null&&(x.$$typeof===v||x.$$typeof===m||x.$$typeof===o||x.$$typeof===c||x.$$typeof===f||x.$$typeof===w||x.getModuleId!==void 0)},Ge.typeOf=_,Ge}var Jw;function YR(){return Jw||(Jw=1,uh.exports=GR()),uh.exports}var VR=YR(),dh,e_;function yC(){if(e_)return dh;e_=1;var e=jn(),t=Sn(),r="[object Number]";function n(a){return typeof a=="number"||t(a)&&e(a)==r}return dh=n,dh}var fh,t_;function KR(){if(t_)return fh;t_=1;var e=yC();function t(r){return e(r)&&r!=+r}return fh=t,fh}var XR=KR();const Gs=Je(XR);var QR=yC();const ZR=Je(QR);var Br=function(t){return t===0?0:t>0?1:-1},_i=function(t){return Pi(t)&&t.indexOf("%")===t.length-1},he=function(t){return ZR(t)&&!Gs(t)},JR=function(t){return He(t)},Nt=function(t){return he(t)||Pi(t)},e4=0,Fu=function(t){var r=++e4;return"".concat(t||"").concat(r)},Ti=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!he(t)&&!Pi(t))return n;var o;if(_i(t)){var c=t.indexOf("%");o=r*parseFloat(t.slice(0,c))/100}else o=+t;return Gs(o)&&(o=n),a&&o>r&&(o=r),o},Yn=function(t){if(!t)return null;var r=Object.keys(t);return r&&r.length?t[r[0]]:null},t4=function(t){if(!Array.isArray(t))return!1;for(var r=t.length,n={},a=0;a<r;a++)if(!n[t[a]])n[t[a]]=!0;else return!0;return!1},fa=function(t,r){return he(t)&&he(r)?function(n){return t+n*(r-t)}:function(){return r}};function hv(e,t,r){return!e||!e.length?null:e.find(function(n){return n&&(typeof t=="function"?t(n):Ar(n,t))===r})}var r4=function(t,r){return he(t)&&he(r)?t-r:Pi(t)&&Pi(r)?t.localeCompare(r):t instanceof Date&&r instanceof Date?t.getTime()-r.getTime():String(t).localeCompare(String(r))};function ba(e,t){for(var r in e)if({}.hasOwnProperty.call(e,r)&&(!{}.hasOwnProperty.call(t,r)||e[r]!==t[r]))return!1;for(var n in t)if({}.hasOwnProperty.call(t,n)&&!{}.hasOwnProperty.call(e,n))return!1;return!0}function mv(e){"@babel/helpers - typeof";return mv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mv(e)}var n4=["viewBox","children"],i4=["aria-activedescendant","aria-atomic","aria-autocomplete","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current","aria-describedby","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-modal","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","className","color","height","id","lang","max","media","method","min","name","style","target","width","role","tabIndex","accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baselineShift","baseProfile","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","horizAdvX","horizOriginX","href","ideographic","imageRendering","in2","in","intercept","k1","k2","k3","k4","k","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","vHanging","vIdeographic","viewTarget","visibility","vMathematical","widths","wordSpacing","writingMode","x1","x2","x","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlns","xmlnsXlink","xmlSpace","y1","y2","y","yChannelSelector","z","zoomAndPan","ref","key","angle"],r_=["points","pathLength"],ph={svg:n4,polygon:r_,polyline:r_},Wy=["dangerouslySetInnerHTML","onCopy","onCopyCapture","onCut","onCutCapture","onPaste","onPasteCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onFocus","onFocusCapture","onBlur","onBlurCapture","onChange","onChangeCapture","onBeforeInput","onBeforeInputCapture","onInput","onInputCapture","onReset","onResetCapture","onSubmit","onSubmitCapture","onInvalid","onInvalidCapture","onLoad","onLoadCapture","onError","onErrorCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onAbort","onAbortCapture","onCanPlay","onCanPlayCapture","onCanPlayThrough","onCanPlayThroughCapture","onDurationChange","onDurationChangeCapture","onEmptied","onEmptiedCapture","onEncrypted","onEncryptedCapture","onEnded","onEndedCapture","onLoadedData","onLoadedDataCapture","onLoadedMetadata","onLoadedMetadataCapture","onLoadStart","onLoadStartCapture","onPause","onPauseCapture","onPlay","onPlayCapture","onPlaying","onPlayingCapture","onProgress","onProgressCapture","onRateChange","onRateChangeCapture","onSeeked","onSeekedCapture","onSeeking","onSeekingCapture","onStalled","onStalledCapture","onSuspend","onSuspendCapture","onTimeUpdate","onTimeUpdateCapture","onVolumeChange","onVolumeChangeCapture","onWaiting","onWaitingCapture","onAuxClick","onAuxClickCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onMouseDown","onMouseDownCapture","onMouseEnter","onMouseLeave","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onSelect","onSelectCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onPointerDown","onPointerDownCapture","onPointerMove","onPointerMoveCapture","onPointerUp","onPointerUpCapture","onPointerCancel","onPointerCancelCapture","onPointerEnter","onPointerEnterCapture","onPointerLeave","onPointerLeaveCapture","onPointerOver","onPointerOverCapture","onPointerOut","onPointerOutCapture","onGotPointerCapture","onGotPointerCaptureCapture","onLostPointerCapture","onLostPointerCaptureCapture","onScroll","onScrollCapture","onWheel","onWheelCapture","onAnimationStart","onAnimationStartCapture","onAnimationEnd","onAnimationEndCapture","onAnimationIteration","onAnimationIterationCapture","onTransitionEnd","onTransitionEndCapture"],kc=function(t,r){if(!t||typeof t=="function"||typeof t=="boolean")return null;var n=t;if(T.isValidElement(t)&&(n=t.props),!Ka(n))return null;var a={};return Object.keys(n).forEach(function(o){Wy.includes(o)&&(a[o]=r||function(c){return n[o](n,c)})}),a},a4=function(t,r,n){return function(a){return t(r,n,a),null}},Pc=function(t,r,n){if(!Ka(t)||mv(t)!=="object")return null;var a=null;return Object.keys(t).forEach(function(o){var c=t[o];Wy.includes(o)&&typeof c=="function"&&(a||(a={}),a[o]=a4(c,r,n))}),a},o4=["children"],s4=["children"];function n_(e,t){if(e==null)return{};var r=l4(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l4(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var i_={click:"onClick",mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",mouseout:"onMouseOut",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",touchcancel:"onTouchCancel",touchend:"onTouchEnd",touchmove:"onTouchMove",touchstart:"onTouchStart",contextmenu:"onContextMenu",dblclick:"onDoubleClick"},vn=function(t){return typeof t=="string"?t:t?t.displayName||t.name||"Component":""},a_=null,hh=null,Hy=function e(t){if(t===a_&&Array.isArray(hh))return hh;var r=[];return T.Children.forEach(t,function(n){He(n)||(VR.isFragment(n)?r=r.concat(e(n.props.children)):r.push(n))}),hh=r,a_=t,r};function zr(e,t){var r=[],n=[];return Array.isArray(t)?n=t.map(function(a){return vn(a)}):n=[vn(t)],Hy(e).forEach(function(a){var o=Ar(a,"type.displayName")||Ar(a,"type.name");n.indexOf(o)!==-1&&r.push(a)}),r}function pr(e,t){var r=zr(e,t);return r&&r[0]}var o_=function(t){if(!t||!t.props)return!1;var r=t.props,n=r.width,a=r.height;return!(!he(n)||n<=0||!he(a)||a<=0)},c4=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColormatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-url","foreignObject","g","glyph","glyphRef","hkern","image","line","lineGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"],u4=function(t){return t&&t.type&&Pi(t.type)&&c4.indexOf(t.type)>=0},d4=function(t,r,n,a){var o,c=(o=ph?.[a])!==null&&o!==void 0?o:[];return r.startsWith("data-")||!$e(t)&&(a&&c.includes(r)||i4.includes(r))||n&&Wy.includes(r)},Ue=function(t,r,n){if(!t||typeof t=="function"||typeof t=="boolean")return null;var a=t;if(T.isValidElement(t)&&(a=t.props),!Ka(a))return null;var o={};return Object.keys(a).forEach(function(c){var u;d4((u=a)===null||u===void 0?void 0:u[c],c,r,n)&&(o[c]=a[c])}),o},gv=function e(t,r){if(t===r)return!0;var n=T.Children.count(t);if(n!==T.Children.count(r))return!1;if(n===0)return!0;if(n===1)return s_(Array.isArray(t)?t[0]:t,Array.isArray(r)?r[0]:r);for(var a=0;a<n;a++){var o=t[a],c=r[a];if(Array.isArray(o)||Array.isArray(c)){if(!e(o,c))return!1}else if(!s_(o,c))return!1}return!0},s_=function(t,r){if(He(t)&&He(r))return!0;if(!He(t)&&!He(r)){var n=t.props||{},a=n.children,o=n_(n,o4),c=r.props||{},u=c.children,f=n_(c,s4);return a&&u?ba(o,f)&&gv(a,u):!a&&!u?ba(o,f):!1}return!1},l_=function(t,r){var n=[],a={};return Hy(t).forEach(function(o,c){if(u4(o))n.push(o);else if(o){var u=vn(o.type),f=r[u]||{},p=f.handler,h=f.once;if(p&&(!h||!a[u])){var m=p(o,u,c);n.push(m),a[u]=!0}}}),n},f4=function(t){var r=t&&t.type;return r&&i_[r]?i_[r]:null},p4=function(t,r){return Hy(r).indexOf(t)},h4=["children","width","height","viewBox","className","style","title","desc"];function vv(){return vv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vv.apply(this,arguments)}function m4(e,t){if(e==null)return{};var r=g4(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function g4(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function yv(e){var t=e.children,r=e.width,n=e.height,a=e.viewBox,o=e.className,c=e.style,u=e.title,f=e.desc,p=m4(e,h4),h=a||{width:r,height:n,x:0,y:0},m=We("recharts-surface",o);return V.createElement("svg",vv({},Ue(p,!0,"svg"),{className:m,width:r,height:n,style:c,viewBox:"".concat(h.x," ").concat(h.y," ").concat(h.width," ").concat(h.height)}),V.createElement("title",null,u),V.createElement("desc",null,f),t)}var v4=["children","className"];function xv(){return xv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xv.apply(this,arguments)}function y4(e,t){if(e==null)return{};var r=x4(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function x4(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var Pt=V.forwardRef(function(e,t){var r=e.children,n=e.className,a=y4(e,v4),o=We("recharts-layer",n);return V.createElement("g",xv({className:o},Ue(a,!0),{ref:t}),r)}),yn=function(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o]},mh,c_;function b4(){if(c_)return mh;c_=1;function e(t,r,n){var a=-1,o=t.length;r<0&&(r=-r>o?0:o+r),n=n>o?o:n,n<0&&(n+=o),o=r>n?0:n-r>>>0,r>>>=0;for(var c=Array(o);++a<o;)c[a]=t[a+r];return c}return mh=e,mh}var gh,u_;function w4(){if(u_)return gh;u_=1;var e=b4();function t(r,n,a){var o=r.length;return a=a===void 0?o:a,!n&&a>=o?r:e(r,n,a)}return gh=t,gh}var vh,d_;function xC(){if(d_)return vh;d_=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",n="\\u20d0-\\u20ff",a=t+r+n,o="\\ufe0e\\ufe0f",c="\\u200d",u=RegExp("["+c+e+a+o+"]");function f(p){return u.test(p)}return vh=f,vh}var yh,f_;function _4(){if(f_)return yh;f_=1;function e(t){return t.split("")}return yh=e,yh}var xh,p_;function j4(){if(p_)return xh;p_=1;var e="\\ud800-\\udfff",t="\\u0300-\\u036f",r="\\ufe20-\\ufe2f",n="\\u20d0-\\u20ff",a=t+r+n,o="\\ufe0e\\ufe0f",c="["+e+"]",u="["+a+"]",f="\\ud83c[\\udffb-\\udfff]",p="(?:"+u+"|"+f+")",h="[^"+e+"]",m="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",b="\\u200d",w=p+"?",_="["+o+"]?",x="(?:"+b+"(?:"+[h,m,v].join("|")+")"+_+w+")*",S=_+w+x,C="(?:"+[h+u+"?",u,m,v,c].join("|")+")",O=RegExp(f+"(?="+f+")|"+C+S,"g");function E(A){return A.match(O)||[]}return xh=E,xh}var bh,h_;function S4(){if(h_)return bh;h_=1;var e=_4(),t=xC(),r=j4();function n(a){return t(a)?r(a):e(a)}return bh=n,bh}var wh,m_;function N4(){if(m_)return wh;m_=1;var e=w4(),t=xC(),r=S4(),n=mC();function a(o){return function(c){c=n(c);var u=t(c)?r(c):void 0,f=u?u[0]:c.charAt(0),p=u?e(u,1).join(""):c.slice(1);return f[o]()+p}}return wh=a,wh}var _h,g_;function A4(){if(g_)return _h;g_=1;var e=N4(),t=e("toUpperCase");return _h=t,_h}var C4=A4();const Lu=Je(C4);function tt(e){return function(){return e}}const bC=Math.cos,Tc=Math.sin,Ur=Math.sqrt,Rc=Math.PI,Bu=2*Rc,bv=Math.PI,wv=2*bv,xi=1e-6,O4=wv-xi;function wC(e){this._+=e[0];for(let t=1,r=e.length;t<r;++t)this._+=arguments[t]+e[t]}function E4(e){let t=Math.floor(e);if(!(t>=0))throw new Error(`invalid digits: ${e}`);if(t>15)return wC;const r=10**t;return function(n){this._+=n[0];for(let a=1,o=n.length;a<o;++a)this._+=Math.round(arguments[a]*r)/r+n[a]}}class k4{constructor(t){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=t==null?wC:E4(t)}moveTo(t,r){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(t,r){this._append`L${this._x1=+t},${this._y1=+r}`}quadraticCurveTo(t,r,n,a){this._append`Q${+t},${+r},${this._x1=+n},${this._y1=+a}`}bezierCurveTo(t,r,n,a,o,c){this._append`C${+t},${+r},${+n},${+a},${this._x1=+o},${this._y1=+c}`}arcTo(t,r,n,a,o){if(t=+t,r=+r,n=+n,a=+a,o=+o,o<0)throw new Error(`negative radius: ${o}`);let c=this._x1,u=this._y1,f=n-t,p=a-r,h=c-t,m=u-r,v=h*h+m*m;if(this._x1===null)this._append`M${this._x1=t},${this._y1=r}`;else if(v>xi)if(!(Math.abs(m*f-p*h)>xi)||!o)this._append`L${this._x1=t},${this._y1=r}`;else{let b=n-c,w=a-u,_=f*f+p*p,x=b*b+w*w,S=Math.sqrt(_),C=Math.sqrt(v),O=o*Math.tan((bv-Math.acos((_+v-x)/(2*S*C)))/2),E=O/C,A=O/S;Math.abs(E-1)>xi&&this._append`L${t+E*h},${r+E*m}`,this._append`A${o},${o},0,0,${+(m*b>h*w)},${this._x1=t+A*f},${this._y1=r+A*p}`}}arc(t,r,n,a,o,c){if(t=+t,r=+r,n=+n,c=!!c,n<0)throw new Error(`negative radius: ${n}`);let u=n*Math.cos(a),f=n*Math.sin(a),p=t+u,h=r+f,m=1^c,v=c?a-o:o-a;this._x1===null?this._append`M${p},${h}`:(Math.abs(this._x1-p)>xi||Math.abs(this._y1-h)>xi)&&this._append`L${p},${h}`,n&&(v<0&&(v=v%wv+wv),v>O4?this._append`A${n},${n},0,1,${m},${t-u},${r-f}A${n},${n},0,1,${m},${this._x1=p},${this._y1=h}`:v>xi&&this._append`A${n},${n},0,${+(v>=bv)},${m},${this._x1=t+n*Math.cos(o)},${this._y1=r+n*Math.sin(o)}`)}rect(t,r,n,a){this._append`M${this._x0=this._x1=+t},${this._y0=this._y1=+r}h${n=+n}v${+a}h${-n}Z`}toString(){return this._}}function Gy(e){let t=3;return e.digits=function(r){if(!arguments.length)return t;if(r==null)t=null;else{const n=Math.floor(r);if(!(n>=0))throw new RangeError(`invalid digits: ${r}`);t=n}return e},()=>new k4(t)}function Yy(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function _C(e){this._context=e}_C.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:this._context.lineTo(e,t);break}}};function zu(e){return new _C(e)}function jC(e){return e[0]}function SC(e){return e[1]}function NC(e,t){var r=tt(!0),n=null,a=zu,o=null,c=Gy(u);e=typeof e=="function"?e:e===void 0?jC:tt(e),t=typeof t=="function"?t:t===void 0?SC:tt(t);function u(f){var p,h=(f=Yy(f)).length,m,v=!1,b;for(n==null&&(o=a(b=c())),p=0;p<=h;++p)!(p<h&&r(m=f[p],p,f))===v&&((v=!v)?o.lineStart():o.lineEnd()),v&&o.point(+e(m,p,f),+t(m,p,f));if(b)return o=null,b+""||null}return u.x=function(f){return arguments.length?(e=typeof f=="function"?f:tt(+f),u):e},u.y=function(f){return arguments.length?(t=typeof f=="function"?f:tt(+f),u):t},u.defined=function(f){return arguments.length?(r=typeof f=="function"?f:tt(!!f),u):r},u.curve=function(f){return arguments.length?(a=f,n!=null&&(o=a(n)),u):a},u.context=function(f){return arguments.length?(f==null?n=o=null:o=a(n=f),u):n},u}function dc(e,t,r){var n=null,a=tt(!0),o=null,c=zu,u=null,f=Gy(p);e=typeof e=="function"?e:e===void 0?jC:tt(+e),t=typeof t=="function"?t:tt(t===void 0?0:+t),r=typeof r=="function"?r:r===void 0?SC:tt(+r);function p(m){var v,b,w,_=(m=Yy(m)).length,x,S=!1,C,O=new Array(_),E=new Array(_);for(o==null&&(u=c(C=f())),v=0;v<=_;++v){if(!(v<_&&a(x=m[v],v,m))===S)if(S=!S)b=v,u.areaStart(),u.lineStart();else{for(u.lineEnd(),u.lineStart(),w=v-1;w>=b;--w)u.point(O[w],E[w]);u.lineEnd(),u.areaEnd()}S&&(O[v]=+e(x,v,m),E[v]=+t(x,v,m),u.point(n?+n(x,v,m):O[v],r?+r(x,v,m):E[v]))}if(C)return u=null,C+""||null}function h(){return NC().defined(a).curve(c).context(o)}return p.x=function(m){return arguments.length?(e=typeof m=="function"?m:tt(+m),n=null,p):e},p.x0=function(m){return arguments.length?(e=typeof m=="function"?m:tt(+m),p):e},p.x1=function(m){return arguments.length?(n=m==null?null:typeof m=="function"?m:tt(+m),p):n},p.y=function(m){return arguments.length?(t=typeof m=="function"?m:tt(+m),r=null,p):t},p.y0=function(m){return arguments.length?(t=typeof m=="function"?m:tt(+m),p):t},p.y1=function(m){return arguments.length?(r=m==null?null:typeof m=="function"?m:tt(+m),p):r},p.lineX0=p.lineY0=function(){return h().x(e).y(t)},p.lineY1=function(){return h().x(e).y(r)},p.lineX1=function(){return h().x(n).y(t)},p.defined=function(m){return arguments.length?(a=typeof m=="function"?m:tt(!!m),p):a},p.curve=function(m){return arguments.length?(c=m,o!=null&&(u=c(o)),p):c},p.context=function(m){return arguments.length?(m==null?o=u=null:u=c(o=m),p):o},p}class AC{constructor(t,r){this._context=t,this._x=r}areaStart(){this._line=0}areaEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line}point(t,r){switch(t=+t,r=+r,this._point){case 0:{this._point=1,this._line?this._context.lineTo(t,r):this._context.moveTo(t,r);break}case 1:this._point=2;default:{this._x?this._context.bezierCurveTo(this._x0=(this._x0+t)/2,this._y0,this._x0,r,t,r):this._context.bezierCurveTo(this._x0,this._y0=(this._y0+r)/2,t,this._y0,t,r);break}}this._x0=t,this._y0=r}}function P4(e){return new AC(e,!0)}function T4(e){return new AC(e,!1)}const Vy={draw(e,t){const r=Ur(t/Rc);e.moveTo(r,0),e.arc(0,0,r,0,Bu)}},R4={draw(e,t){const r=Ur(t/5)/2;e.moveTo(-3*r,-r),e.lineTo(-r,-r),e.lineTo(-r,-3*r),e.lineTo(r,-3*r),e.lineTo(r,-r),e.lineTo(3*r,-r),e.lineTo(3*r,r),e.lineTo(r,r),e.lineTo(r,3*r),e.lineTo(-r,3*r),e.lineTo(-r,r),e.lineTo(-3*r,r),e.closePath()}},CC=Ur(1/3),D4=CC*2,I4={draw(e,t){const r=Ur(t/D4),n=r*CC;e.moveTo(0,-r),e.lineTo(n,0),e.lineTo(0,r),e.lineTo(-n,0),e.closePath()}},M4={draw(e,t){const r=Ur(t),n=-r/2;e.rect(n,n,r,r)}},$4=.8908130915292852,OC=Tc(Rc/10)/Tc(7*Rc/10),F4=Tc(Bu/10)*OC,L4=-bC(Bu/10)*OC,B4={draw(e,t){const r=Ur(t*$4),n=F4*r,a=L4*r;e.moveTo(0,-r),e.lineTo(n,a);for(let o=1;o<5;++o){const c=Bu*o/5,u=bC(c),f=Tc(c);e.lineTo(f*r,-u*r),e.lineTo(u*n-f*a,f*n+u*a)}e.closePath()}},jh=Ur(3),z4={draw(e,t){const r=-Ur(t/(jh*3));e.moveTo(0,r*2),e.lineTo(-jh*r,-r),e.lineTo(jh*r,-r),e.closePath()}},_r=-.5,jr=Ur(3)/2,_v=1/Ur(12),q4=(_v/2+1)*3,U4={draw(e,t){const r=Ur(t/q4),n=r/2,a=r*_v,o=n,c=r*_v+r,u=-o,f=c;e.moveTo(n,a),e.lineTo(o,c),e.lineTo(u,f),e.lineTo(_r*n-jr*a,jr*n+_r*a),e.lineTo(_r*o-jr*c,jr*o+_r*c),e.lineTo(_r*u-jr*f,jr*u+_r*f),e.lineTo(_r*n+jr*a,_r*a-jr*n),e.lineTo(_r*o+jr*c,_r*c-jr*o),e.lineTo(_r*u+jr*f,_r*f-jr*u),e.closePath()}};function W4(e,t){let r=null,n=Gy(a);e=typeof e=="function"?e:tt(e||Vy),t=typeof t=="function"?t:tt(t===void 0?64:+t);function a(){let o;if(r||(r=o=n()),e.apply(this,arguments).draw(r,+t.apply(this,arguments)),o)return r=null,o+""||null}return a.type=function(o){return arguments.length?(e=typeof o=="function"?o:tt(o),a):e},a.size=function(o){return arguments.length?(t=typeof o=="function"?o:tt(+o),a):t},a.context=function(o){return arguments.length?(r=o??null,a):r},a}function Dc(){}function Ic(e,t,r){e._context.bezierCurveTo((2*e._x0+e._x1)/3,(2*e._y0+e._y1)/3,(e._x0+2*e._x1)/3,(e._y0+2*e._y1)/3,(e._x0+4*e._x1+t)/6,(e._y0+4*e._y1+r)/6)}function EC(e){this._context=e}EC.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Ic(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Ic(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function H4(e){return new EC(e)}function kC(e){this._context=e}kC.prototype={areaStart:Dc,areaEnd:Dc,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._x2=e,this._y2=t;break;case 1:this._point=2,this._x3=e,this._y3=t;break;case 2:this._point=3,this._x4=e,this._y4=t,this._context.moveTo((this._x0+4*this._x1+e)/6,(this._y0+4*this._y1+t)/6);break;default:Ic(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function G4(e){return new kC(e)}function PC(e){this._context=e}PC.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var r=(this._x0+4*this._x1+e)/6,n=(this._y0+4*this._y1+t)/6;this._line?this._context.lineTo(r,n):this._context.moveTo(r,n);break;case 3:this._point=4;default:Ic(this,e,t);break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t}};function Y4(e){return new PC(e)}function TC(e){this._context=e}TC.prototype={areaStart:Dc,areaEnd:Dc,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(e,t){e=+e,t=+t,this._point?this._context.lineTo(e,t):(this._point=1,this._context.moveTo(e,t))}};function V4(e){return new TC(e)}function v_(e){return e<0?-1:1}function y_(e,t,r){var n=e._x1-e._x0,a=t-e._x1,o=(e._y1-e._y0)/(n||a<0&&-0),c=(r-e._y1)/(a||n<0&&-0),u=(o*a+c*n)/(n+a);return(v_(o)+v_(c))*Math.min(Math.abs(o),Math.abs(c),.5*Math.abs(u))||0}function x_(e,t){var r=e._x1-e._x0;return r?(3*(e._y1-e._y0)/r-t)/2:t}function Sh(e,t,r){var n=e._x0,a=e._y0,o=e._x1,c=e._y1,u=(o-n)/3;e._context.bezierCurveTo(n+u,a+u*t,o-u,c-u*r,o,c)}function Mc(e){this._context=e}Mc.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:Sh(this,this._t0,x_(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(e,t){var r=NaN;if(e=+e,t=+t,!(e===this._x1&&t===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;break;case 2:this._point=3,Sh(this,x_(this,r=y_(this,e,t)),r);break;default:Sh(this,this._t0,r=y_(this,e,t));break}this._x0=this._x1,this._x1=e,this._y0=this._y1,this._y1=t,this._t0=r}}};function RC(e){this._context=new DC(e)}(RC.prototype=Object.create(Mc.prototype)).point=function(e,t){Mc.prototype.point.call(this,t,e)};function DC(e){this._context=e}DC.prototype={moveTo:function(e,t){this._context.moveTo(t,e)},closePath:function(){this._context.closePath()},lineTo:function(e,t){this._context.lineTo(t,e)},bezierCurveTo:function(e,t,r,n,a,o){this._context.bezierCurveTo(t,e,n,r,o,a)}};function K4(e){return new Mc(e)}function X4(e){return new RC(e)}function IC(e){this._context=e}IC.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var e=this._x,t=this._y,r=e.length;if(r)if(this._line?this._context.lineTo(e[0],t[0]):this._context.moveTo(e[0],t[0]),r===2)this._context.lineTo(e[1],t[1]);else for(var n=b_(e),a=b_(t),o=0,c=1;c<r;++o,++c)this._context.bezierCurveTo(n[0][o],a[0][o],n[1][o],a[1][o],e[c],t[c]);(this._line||this._line!==0&&r===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(e,t){this._x.push(+e),this._y.push(+t)}};function b_(e){var t,r=e.length-1,n,a=new Array(r),o=new Array(r),c=new Array(r);for(a[0]=0,o[0]=2,c[0]=e[0]+2*e[1],t=1;t<r-1;++t)a[t]=1,o[t]=4,c[t]=4*e[t]+2*e[t+1];for(a[r-1]=2,o[r-1]=7,c[r-1]=8*e[r-1]+e[r],t=1;t<r;++t)n=a[t]/o[t-1],o[t]-=n,c[t]-=n*c[t-1];for(a[r-1]=c[r-1]/o[r-1],t=r-2;t>=0;--t)a[t]=(c[t]-a[t+1])/o[t];for(o[r-1]=(e[r]+a[r-1])/2,t=0;t<r-1;++t)o[t]=2*e[t+1]-a[t+1];return[a,o]}function Q4(e){return new IC(e)}function qu(e,t){this._context=e,this._t=t}qu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(e,t){switch(e=+e,t=+t,this._point){case 0:this._point=1,this._line?this._context.lineTo(e,t):this._context.moveTo(e,t);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,t),this._context.lineTo(e,t);else{var r=this._x*(1-this._t)+e*this._t;this._context.lineTo(r,this._y),this._context.lineTo(r,t)}break}}this._x=e,this._y=t}};function Z4(e){return new qu(e,.5)}function J4(e){return new qu(e,0)}function eD(e){return new qu(e,1)}function Aa(e,t){if((c=e.length)>1)for(var r=1,n,a,o=e[t[0]],c,u=o.length;r<c;++r)for(a=o,o=e[t[r]],n=0;n<u;++n)o[n][1]+=o[n][0]=isNaN(a[n][1])?a[n][0]:a[n][1]}function jv(e){for(var t=e.length,r=new Array(t);--t>=0;)r[t]=t;return r}function tD(e,t){return e[t]}function rD(e){const t=[];return t.key=e,t}function nD(){var e=tt([]),t=jv,r=Aa,n=tD;function a(o){var c=Array.from(e.apply(this,arguments),rD),u,f=c.length,p=-1,h;for(const m of o)for(u=0,++p;u<f;++u)(c[u][p]=[0,+n(m,c[u].key,p,o)]).data=m;for(u=0,h=Yy(t(c));u<f;++u)c[h[u]].index=u;return r(c,h),c}return a.keys=function(o){return arguments.length?(e=typeof o=="function"?o:tt(Array.from(o)),a):e},a.value=function(o){return arguments.length?(n=typeof o=="function"?o:tt(+o),a):n},a.order=function(o){return arguments.length?(t=o==null?jv:typeof o=="function"?o:tt(Array.from(o)),a):t},a.offset=function(o){return arguments.length?(r=o??Aa,a):r},a}function iD(e,t){if((n=e.length)>0){for(var r,n,a=0,o=e[0].length,c;a<o;++a){for(c=r=0;r<n;++r)c+=e[r][a][1]||0;if(c)for(r=0;r<n;++r)e[r][a][1]/=c}Aa(e,t)}}function aD(e,t){if((a=e.length)>0){for(var r=0,n=e[t[0]],a,o=n.length;r<o;++r){for(var c=0,u=0;c<a;++c)u+=e[c][r][1]||0;n[r][1]+=n[r][0]=-u/2}Aa(e,t)}}function oD(e,t){if(!(!((c=e.length)>0)||!((o=(a=e[t[0]]).length)>0))){for(var r=0,n=1,a,o,c;n<o;++n){for(var u=0,f=0,p=0;u<c;++u){for(var h=e[t[u]],m=h[n][1]||0,v=h[n-1][1]||0,b=(m-v)/2,w=0;w<u;++w){var _=e[t[w]],x=_[n][1]||0,S=_[n-1][1]||0;b+=x-S}f+=m,p+=b*m}a[n-1][1]+=a[n-1][0]=r,f&&(r-=p/f)}a[n-1][1]+=a[n-1][0]=r,Aa(e,t)}}function as(e){"@babel/helpers - typeof";return as=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},as(e)}var sD=["type","size","sizeType"];function Sv(){return Sv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Sv.apply(this,arguments)}function w_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function __(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?w_(Object(r),!0).forEach(function(n){lD(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function lD(e,t,r){return t=cD(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function cD(e){var t=uD(e,"string");return as(t)=="symbol"?t:t+""}function uD(e,t){if(as(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(as(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function dD(e,t){if(e==null)return{};var r=fD(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function fD(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var MC={symbolCircle:Vy,symbolCross:R4,symbolDiamond:I4,symbolSquare:M4,symbolStar:B4,symbolTriangle:z4,symbolWye:U4},pD=Math.PI/180,hD=function(t){var r="symbol".concat(Lu(t));return MC[r]||Vy},mD=function(t,r,n){if(r==="area")return t;switch(n){case"cross":return 5*t*t/9;case"diamond":return .5*t*t/Math.sqrt(3);case"square":return t*t;case"star":{var a=18*pD;return 1.25*t*t*(Math.tan(a)-Math.tan(a*2)*Math.pow(Math.tan(a),2))}case"triangle":return Math.sqrt(3)*t*t/4;case"wye":return(21-10*Math.sqrt(3))*t*t/8;default:return Math.PI*t*t/4}},gD=function(t,r){MC["symbol".concat(Lu(t))]=r},Ky=function(t){var r=t.type,n=r===void 0?"circle":r,a=t.size,o=a===void 0?64:a,c=t.sizeType,u=c===void 0?"area":c,f=dD(t,sD),p=__(__({},f),{},{type:n,size:o,sizeType:u}),h=function(){var x=hD(n),S=W4().type(x).size(mD(o,u,n));return S()},m=p.className,v=p.cx,b=p.cy,w=Ue(p,!0);return v===+v&&b===+b&&o===+o?V.createElement("path",Sv({},w,{className:We("recharts-symbols",m),transform:"translate(".concat(v,", ").concat(b,")"),d:h()})):null};Ky.registerSymbol=gD;function Ca(e){"@babel/helpers - typeof";return Ca=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ca(e)}function Nv(){return Nv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Nv.apply(this,arguments)}function j_(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function vD(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?j_(Object(r),!0).forEach(function(n){os(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j_(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function yD(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xD(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,FC(n.key),n)}}function bD(e,t,r){return t&&xD(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function wD(e,t,r){return t=$c(t),_D(e,$C()?Reflect.construct(t,r||[],$c(e).constructor):t.apply(e,r))}function _D(e,t){if(t&&(Ca(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return jD(e)}function jD(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($C=function(){return!!e})()}function $c(e){return $c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},$c(e)}function SD(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Av(e,t)}function Av(e,t){return Av=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Av(e,t)}function os(e,t,r){return t=FC(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function FC(e){var t=ND(e,"string");return Ca(t)=="symbol"?t:t+""}function ND(e,t){if(Ca(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ca(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Sr=32,Xy=(function(e){function t(){return yD(this,t),wD(this,t,arguments)}return SD(t,e),bD(t,[{key:"renderIcon",value:function(n){var a=this.props.inactiveColor,o=Sr/2,c=Sr/6,u=Sr/3,f=n.inactive?a:n.color;if(n.type==="plainline")return V.createElement("line",{strokeWidth:4,fill:"none",stroke:f,strokeDasharray:n.payload.strokeDasharray,x1:0,y1:o,x2:Sr,y2:o,className:"recharts-legend-icon"});if(n.type==="line")return V.createElement("path",{strokeWidth:4,fill:"none",stroke:f,d:"M0,".concat(o,"h").concat(u,`
            A`).concat(c,",").concat(c,",0,1,1,").concat(2*u,",").concat(o,`
            H`).concat(Sr,"M").concat(2*u,",").concat(o,`
            A`).concat(c,",").concat(c,",0,1,1,").concat(u,",").concat(o),className:"recharts-legend-icon"});if(n.type==="rect")return V.createElement("path",{stroke:"none",fill:f,d:"M0,".concat(Sr/8,"h").concat(Sr,"v").concat(Sr*3/4,"h").concat(-Sr,"z"),className:"recharts-legend-icon"});if(V.isValidElement(n.legendIcon)){var p=vD({},n);return delete p.legendIcon,V.cloneElement(n.legendIcon,p)}return V.createElement(Ky,{fill:f,cx:o,cy:o,size:Sr,sizeType:"diameter",type:n.type})}},{key:"renderItems",value:function(){var n=this,a=this.props,o=a.payload,c=a.iconSize,u=a.layout,f=a.formatter,p=a.inactiveColor,h={x:0,y:0,width:Sr,height:Sr},m={display:u==="horizontal"?"inline-block":"block",marginRight:10},v={display:"inline-block",verticalAlign:"middle",marginRight:4};return o.map(function(b,w){var _=b.formatter||f,x=We(os(os({"recharts-legend-item":!0},"legend-item-".concat(w),!0),"inactive",b.inactive));if(b.type==="none")return null;var S=$e(b.value)?null:b.value;yn(!$e(b.value),`The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);var C=b.inactive?p:b.color;return V.createElement("li",Nv({className:x,style:m,key:"legend-item-".concat(w)},Pc(n.props,b,w)),V.createElement(yv,{width:c,height:c,viewBox:h,style:v},n.renderIcon(b)),V.createElement("span",{className:"recharts-legend-item-text",style:{color:C}},_?_(S,b,w):S))})}},{key:"render",value:function(){var n=this.props,a=n.payload,o=n.layout,c=n.align;if(!a||!a.length)return null;var u={padding:0,margin:0,textAlign:o==="horizontal"?c:"left"};return V.createElement("ul",{className:"recharts-default-legend",style:u},this.renderItems())}}])})(T.PureComponent);os(Xy,"displayName","Legend");os(Xy,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"middle",inactiveColor:"#ccc"});var Nh,S_;function AD(){if(S_)return Nh;S_=1;var e=Iu();function t(){this.__data__=new e,this.size=0}return Nh=t,Nh}var Ah,N_;function CD(){if(N_)return Ah;N_=1;function e(t){var r=this.__data__,n=r.delete(t);return this.size=r.size,n}return Ah=e,Ah}var Ch,A_;function OD(){if(A_)return Ch;A_=1;function e(t){return this.__data__.get(t)}return Ch=e,Ch}var Oh,C_;function ED(){if(C_)return Oh;C_=1;function e(t){return this.__data__.has(t)}return Oh=e,Oh}var Eh,O_;function kD(){if(O_)return Eh;O_=1;var e=Iu(),t=By(),r=zy(),n=200;function a(o,c){var u=this.__data__;if(u instanceof e){var f=u.__data__;if(!t||f.length<n-1)return f.push([o,c]),this.size=++u.size,this;u=this.__data__=new r(f)}return u.set(o,c),this.size=u.size,this}return Eh=a,Eh}var kh,E_;function LC(){if(E_)return kh;E_=1;var e=Iu(),t=AD(),r=CD(),n=OD(),a=ED(),o=kD();function c(u){var f=this.__data__=new e(u);this.size=f.size}return c.prototype.clear=t,c.prototype.delete=r,c.prototype.get=n,c.prototype.has=a,c.prototype.set=o,kh=c,kh}var Ph,k_;function PD(){if(k_)return Ph;k_=1;var e="__lodash_hash_undefined__";function t(r){return this.__data__.set(r,e),this}return Ph=t,Ph}var Th,P_;function TD(){if(P_)return Th;P_=1;function e(t){return this.__data__.has(t)}return Th=e,Th}var Rh,T_;function BC(){if(T_)return Rh;T_=1;var e=zy(),t=PD(),r=TD();function n(a){var o=-1,c=a==null?0:a.length;for(this.__data__=new e;++o<c;)this.add(a[o])}return n.prototype.add=n.prototype.push=t,n.prototype.has=r,Rh=n,Rh}var Dh,R_;function zC(){if(R_)return Dh;R_=1;function e(t,r){for(var n=-1,a=t==null?0:t.length;++n<a;)if(r(t[n],n,t))return!0;return!1}return Dh=e,Dh}var Ih,D_;function qC(){if(D_)return Ih;D_=1;function e(t,r){return t.has(r)}return Ih=e,Ih}var Mh,I_;function UC(){if(I_)return Mh;I_=1;var e=BC(),t=zC(),r=qC(),n=1,a=2;function o(c,u,f,p,h,m){var v=f&n,b=c.length,w=u.length;if(b!=w&&!(v&&w>b))return!1;var _=m.get(c),x=m.get(u);if(_&&x)return _==u&&x==c;var S=-1,C=!0,O=f&a?new e:void 0;for(m.set(c,u),m.set(u,c);++S<b;){var E=c[S],A=u[S];if(p)var N=v?p(A,E,S,u,c,m):p(E,A,S,c,u,m);if(N!==void 0){if(N)continue;C=!1;break}if(O){if(!t(u,function(P,R){if(!r(O,R)&&(E===P||h(E,P,f,p,m)))return O.push(R)})){C=!1;break}}else if(!(E===A||h(E,A,f,p,m))){C=!1;break}}return m.delete(c),m.delete(u),C}return Mh=o,Mh}var $h,M_;function RD(){if(M_)return $h;M_=1;var e=tn(),t=e.Uint8Array;return $h=t,$h}var Fh,$_;function DD(){if($_)return Fh;$_=1;function e(t){var r=-1,n=Array(t.size);return t.forEach(function(a,o){n[++r]=[o,a]}),n}return Fh=e,Fh}var Lh,F_;function Qy(){if(F_)return Lh;F_=1;function e(t){var r=-1,n=Array(t.size);return t.forEach(function(a){n[++r]=a}),n}return Lh=e,Lh}var Bh,L_;function ID(){if(L_)return Bh;L_=1;var e=Hs(),t=RD(),r=Ly(),n=UC(),a=DD(),o=Qy(),c=1,u=2,f="[object Boolean]",p="[object Date]",h="[object Error]",m="[object Map]",v="[object Number]",b="[object RegExp]",w="[object Set]",_="[object String]",x="[object Symbol]",S="[object ArrayBuffer]",C="[object DataView]",O=e?e.prototype:void 0,E=O?O.valueOf:void 0;function A(N,P,R,D,G,q,M){switch(R){case C:if(N.byteLength!=P.byteLength||N.byteOffset!=P.byteOffset)return!1;N=N.buffer,P=P.buffer;case S:return!(N.byteLength!=P.byteLength||!q(new t(N),new t(P)));case f:case p:case v:return r(+N,+P);case h:return N.name==P.name&&N.message==P.message;case b:case _:return N==P+"";case m:var H=a;case w:var B=D&c;if(H||(H=o),N.size!=P.size&&!B)return!1;var F=M.get(N);if(F)return F==P;D|=u,M.set(N,P);var Y=n(H(N),H(P),D,G,q,M);return M.delete(N),Y;case x:if(E)return E.call(N)==E.call(P)}return!1}return Bh=A,Bh}var zh,B_;function WC(){if(B_)return zh;B_=1;function e(t,r){for(var n=-1,a=r.length,o=t.length;++n<a;)t[o+n]=r[n];return t}return zh=e,zh}var qh,z_;function MD(){if(z_)return qh;z_=1;var e=WC(),t=ar();function r(n,a,o){var c=a(n);return t(n)?c:e(c,o(n))}return qh=r,qh}var Uh,q_;function $D(){if(q_)return Uh;q_=1;function e(t,r){for(var n=-1,a=t==null?0:t.length,o=0,c=[];++n<a;){var u=t[n];r(u,n,t)&&(c[o++]=u)}return c}return Uh=e,Uh}var Wh,U_;function FD(){if(U_)return Wh;U_=1;function e(){return[]}return Wh=e,Wh}var Hh,W_;function LD(){if(W_)return Hh;W_=1;var e=$D(),t=FD(),r=Object.prototype,n=r.propertyIsEnumerable,a=Object.getOwnPropertySymbols,o=a?function(c){return c==null?[]:(c=Object(c),e(a(c),function(u){return n.call(c,u)}))}:t;return Hh=o,Hh}var Gh,H_;function BD(){if(H_)return Gh;H_=1;function e(t,r){for(var n=-1,a=Array(t);++n<t;)a[n]=r(n);return a}return Gh=e,Gh}var Yh,G_;function zD(){if(G_)return Yh;G_=1;var e=jn(),t=Sn(),r="[object Arguments]";function n(a){return t(a)&&e(a)==r}return Yh=n,Yh}var Vh,Y_;function Zy(){if(Y_)return Vh;Y_=1;var e=zD(),t=Sn(),r=Object.prototype,n=r.hasOwnProperty,a=r.propertyIsEnumerable,o=e((function(){return arguments})())?e:function(c){return t(c)&&n.call(c,"callee")&&!a.call(c,"callee")};return Vh=o,Vh}var Zo={exports:{}},Kh,V_;function qD(){if(V_)return Kh;V_=1;function e(){return!1}return Kh=e,Kh}Zo.exports;var K_;function HC(){return K_||(K_=1,(function(e,t){var r=tn(),n=qD(),a=t&&!t.nodeType&&t,o=a&&!0&&e&&!e.nodeType&&e,c=o&&o.exports===a,u=c?r.Buffer:void 0,f=u?u.isBuffer:void 0,p=f||n;e.exports=p})(Zo,Zo.exports)),Zo.exports}var Xh,X_;function Jy(){if(X_)return Xh;X_=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function r(n,a){var o=typeof n;return a=a??e,!!a&&(o=="number"||o!="symbol"&&t.test(n))&&n>-1&&n%1==0&&n<a}return Xh=r,Xh}var Qh,Q_;function ex(){if(Q_)return Qh;Q_=1;var e=9007199254740991;function t(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=e}return Qh=t,Qh}var Zh,Z_;function UD(){if(Z_)return Zh;Z_=1;var e=jn(),t=ex(),r=Sn(),n="[object Arguments]",a="[object Array]",o="[object Boolean]",c="[object Date]",u="[object Error]",f="[object Function]",p="[object Map]",h="[object Number]",m="[object Object]",v="[object RegExp]",b="[object Set]",w="[object String]",_="[object WeakMap]",x="[object ArrayBuffer]",S="[object DataView]",C="[object Float32Array]",O="[object Float64Array]",E="[object Int8Array]",A="[object Int16Array]",N="[object Int32Array]",P="[object Uint8Array]",R="[object Uint8ClampedArray]",D="[object Uint16Array]",G="[object Uint32Array]",q={};q[C]=q[O]=q[E]=q[A]=q[N]=q[P]=q[R]=q[D]=q[G]=!0,q[n]=q[a]=q[x]=q[o]=q[S]=q[c]=q[u]=q[f]=q[p]=q[h]=q[m]=q[v]=q[b]=q[w]=q[_]=!1;function M(H){return r(H)&&t(H.length)&&!!q[e(H)]}return Zh=M,Zh}var Jh,J_;function GC(){if(J_)return Jh;J_=1;function e(t){return function(r){return t(r)}}return Jh=e,Jh}var Jo={exports:{}};Jo.exports;var ej;function WD(){return ej||(ej=1,(function(e,t){var r=fC(),n=t&&!t.nodeType&&t,a=n&&!0&&e&&!e.nodeType&&e,o=a&&a.exports===n,c=o&&r.process,u=(function(){try{var f=a&&a.require&&a.require("util").types;return f||c&&c.binding&&c.binding("util")}catch{}})();e.exports=u})(Jo,Jo.exports)),Jo.exports}var em,tj;function YC(){if(tj)return em;tj=1;var e=UD(),t=GC(),r=WD(),n=r&&r.isTypedArray,a=n?t(n):e;return em=a,em}var tm,rj;function HD(){if(rj)return tm;rj=1;var e=BD(),t=Zy(),r=ar(),n=HC(),a=Jy(),o=YC(),c=Object.prototype,u=c.hasOwnProperty;function f(p,h){var m=r(p),v=!m&&t(p),b=!m&&!v&&n(p),w=!m&&!v&&!b&&o(p),_=m||v||b||w,x=_?e(p.length,String):[],S=x.length;for(var C in p)(h||u.call(p,C))&&!(_&&(C=="length"||b&&(C=="offset"||C=="parent")||w&&(C=="buffer"||C=="byteLength"||C=="byteOffset")||a(C,S)))&&x.push(C);return x}return tm=f,tm}var rm,nj;function GD(){if(nj)return rm;nj=1;var e=Object.prototype;function t(r){var n=r&&r.constructor,a=typeof n=="function"&&n.prototype||e;return r===a}return rm=t,rm}var nm,ij;function VC(){if(ij)return nm;ij=1;function e(t,r){return function(n){return t(r(n))}}return nm=e,nm}var im,aj;function YD(){if(aj)return im;aj=1;var e=VC(),t=e(Object.keys,Object);return im=t,im}var am,oj;function VD(){if(oj)return am;oj=1;var e=GD(),t=YD(),r=Object.prototype,n=r.hasOwnProperty;function a(o){if(!e(o))return t(o);var c=[];for(var u in Object(o))n.call(o,u)&&u!="constructor"&&c.push(u);return c}return am=a,am}var om,sj;function Ys(){if(sj)return om;sj=1;var e=Fy(),t=ex();function r(n){return n!=null&&t(n.length)&&!e(n)}return om=r,om}var sm,lj;function Uu(){if(lj)return sm;lj=1;var e=HD(),t=VD(),r=Ys();function n(a){return r(a)?e(a):t(a)}return sm=n,sm}var lm,cj;function KD(){if(cj)return lm;cj=1;var e=MD(),t=LD(),r=Uu();function n(a){return e(a,r,t)}return lm=n,lm}var cm,uj;function XD(){if(uj)return cm;uj=1;var e=KD(),t=1,r=Object.prototype,n=r.hasOwnProperty;function a(o,c,u,f,p,h){var m=u&t,v=e(o),b=v.length,w=e(c),_=w.length;if(b!=_&&!m)return!1;for(var x=b;x--;){var S=v[x];if(!(m?S in c:n.call(c,S)))return!1}var C=h.get(o),O=h.get(c);if(C&&O)return C==c&&O==o;var E=!0;h.set(o,c),h.set(c,o);for(var A=m;++x<b;){S=v[x];var N=o[S],P=c[S];if(f)var R=m?f(P,N,S,c,o,h):f(N,P,S,o,c,h);if(!(R===void 0?N===P||p(N,P,u,f,h):R)){E=!1;break}A||(A=S=="constructor")}if(E&&!A){var D=o.constructor,G=c.constructor;D!=G&&"constructor"in o&&"constructor"in c&&!(typeof D=="function"&&D instanceof D&&typeof G=="function"&&G instanceof G)&&(E=!1)}return h.delete(o),h.delete(c),E}return cm=a,cm}var um,dj;function QD(){if(dj)return um;dj=1;var e=Mi(),t=tn(),r=e(t,"DataView");return um=r,um}var dm,fj;function ZD(){if(fj)return dm;fj=1;var e=Mi(),t=tn(),r=e(t,"Promise");return dm=r,dm}var fm,pj;function KC(){if(pj)return fm;pj=1;var e=Mi(),t=tn(),r=e(t,"Set");return fm=r,fm}var pm,hj;function JD(){if(hj)return pm;hj=1;var e=Mi(),t=tn(),r=e(t,"WeakMap");return pm=r,pm}var hm,mj;function eI(){if(mj)return hm;mj=1;var e=QD(),t=By(),r=ZD(),n=KC(),a=JD(),o=jn(),c=pC(),u="[object Map]",f="[object Object]",p="[object Promise]",h="[object Set]",m="[object WeakMap]",v="[object DataView]",b=c(e),w=c(t),_=c(r),x=c(n),S=c(a),C=o;return(e&&C(new e(new ArrayBuffer(1)))!=v||t&&C(new t)!=u||r&&C(r.resolve())!=p||n&&C(new n)!=h||a&&C(new a)!=m)&&(C=function(O){var E=o(O),A=E==f?O.constructor:void 0,N=A?c(A):"";if(N)switch(N){case b:return v;case w:return u;case _:return p;case x:return h;case S:return m}return E}),hm=C,hm}var mm,gj;function tI(){if(gj)return mm;gj=1;var e=LC(),t=UC(),r=ID(),n=XD(),a=eI(),o=ar(),c=HC(),u=YC(),f=1,p="[object Arguments]",h="[object Array]",m="[object Object]",v=Object.prototype,b=v.hasOwnProperty;function w(_,x,S,C,O,E){var A=o(_),N=o(x),P=A?h:a(_),R=N?h:a(x);P=P==p?m:P,R=R==p?m:R;var D=P==m,G=R==m,q=P==R;if(q&&c(_)){if(!c(x))return!1;A=!0,D=!1}if(q&&!D)return E||(E=new e),A||u(_)?t(_,x,S,C,O,E):r(_,x,P,S,C,O,E);if(!(S&f)){var M=D&&b.call(_,"__wrapped__"),H=G&&b.call(x,"__wrapped__");if(M||H){var B=M?_.value():_,F=H?x.value():x;return E||(E=new e),O(B,F,S,C,E)}}return q?(E||(E=new e),n(_,x,S,C,O,E)):!1}return mm=w,mm}var gm,vj;function tx(){if(vj)return gm;vj=1;var e=tI(),t=Sn();function r(n,a,o,c,u){return n===a?!0:n==null||a==null||!t(n)&&!t(a)?n!==n&&a!==a:e(n,a,o,c,r,u)}return gm=r,gm}var vm,yj;function rI(){if(yj)return vm;yj=1;var e=LC(),t=tx(),r=1,n=2;function a(o,c,u,f){var p=u.length,h=p,m=!f;if(o==null)return!h;for(o=Object(o);p--;){var v=u[p];if(m&&v[2]?v[1]!==o[v[0]]:!(v[0]in o))return!1}for(;++p<h;){v=u[p];var b=v[0],w=o[b],_=v[1];if(m&&v[2]){if(w===void 0&&!(b in o))return!1}else{var x=new e;if(f)var S=f(w,_,b,o,c,x);if(!(S===void 0?t(_,w,r|n,f,x):S))return!1}}return!0}return vm=a,vm}var ym,xj;function XC(){if(xj)return ym;xj=1;var e=Zn();function t(r){return r===r&&!e(r)}return ym=t,ym}var xm,bj;function nI(){if(bj)return xm;bj=1;var e=XC(),t=Uu();function r(n){for(var a=t(n),o=a.length;o--;){var c=a[o],u=n[c];a[o]=[c,u,e(u)]}return a}return xm=r,xm}var bm,wj;function QC(){if(wj)return bm;wj=1;function e(t,r){return function(n){return n==null?!1:n[t]===r&&(r!==void 0||t in Object(n))}}return bm=e,bm}var wm,_j;function iI(){if(_j)return wm;_j=1;var e=rI(),t=nI(),r=QC();function n(a){var o=t(a);return o.length==1&&o[0][2]?r(o[0][0],o[0][1]):function(c){return c===a||e(c,a,o)}}return wm=n,wm}var _m,jj;function aI(){if(jj)return _m;jj=1;function e(t,r){return t!=null&&r in Object(t)}return _m=e,_m}var jm,Sj;function oI(){if(Sj)return jm;Sj=1;var e=gC(),t=Zy(),r=ar(),n=Jy(),a=ex(),o=$u();function c(u,f,p){f=e(f,u);for(var h=-1,m=f.length,v=!1;++h<m;){var b=o(f[h]);if(!(v=u!=null&&p(u,b)))break;u=u[b]}return v||++h!=m?v:(m=u==null?0:u.length,!!m&&a(m)&&n(b,m)&&(r(u)||t(u)))}return jm=c,jm}var Sm,Nj;function sI(){if(Nj)return Sm;Nj=1;var e=aI(),t=oI();function r(n,a){return n!=null&&t(n,a,e)}return Sm=r,Sm}var Nm,Aj;function lI(){if(Aj)return Nm;Aj=1;var e=tx(),t=vC(),r=sI(),n=$y(),a=XC(),o=QC(),c=$u(),u=1,f=2;function p(h,m){return n(h)&&a(m)?o(c(h),m):function(v){var b=t(v,h);return b===void 0&&b===m?r(v,h):e(m,b,u|f)}}return Nm=p,Nm}var Am,Cj;function Xa(){if(Cj)return Am;Cj=1;function e(t){return t}return Am=e,Am}var Cm,Oj;function cI(){if(Oj)return Cm;Oj=1;function e(t){return function(r){return r?.[t]}}return Cm=e,Cm}var Om,Ej;function uI(){if(Ej)return Om;Ej=1;var e=Uy();function t(r){return function(n){return e(n,r)}}return Om=t,Om}var Em,kj;function dI(){if(kj)return Em;kj=1;var e=cI(),t=uI(),r=$y(),n=$u();function a(o){return r(o)?e(n(o)):t(o)}return Em=a,Em}var km,Pj;function Jn(){if(Pj)return km;Pj=1;var e=iI(),t=lI(),r=Xa(),n=ar(),a=dI();function o(c){return typeof c=="function"?c:c==null?r:typeof c=="object"?n(c)?t(c[0],c[1]):e(c):a(c)}return km=o,km}var Pm,Tj;function ZC(){if(Tj)return Pm;Tj=1;function e(t,r,n,a){for(var o=t.length,c=n+(a?1:-1);a?c--:++c<o;)if(r(t[c],c,t))return c;return-1}return Pm=e,Pm}var Tm,Rj;function fI(){if(Rj)return Tm;Rj=1;function e(t){return t!==t}return Tm=e,Tm}var Rm,Dj;function pI(){if(Dj)return Rm;Dj=1;function e(t,r,n){for(var a=n-1,o=t.length;++a<o;)if(t[a]===r)return a;return-1}return Rm=e,Rm}var Dm,Ij;function hI(){if(Ij)return Dm;Ij=1;var e=ZC(),t=fI(),r=pI();function n(a,o,c){return o===o?r(a,o,c):e(a,t,c)}return Dm=n,Dm}var Im,Mj;function mI(){if(Mj)return Im;Mj=1;var e=hI();function t(r,n){var a=r==null?0:r.length;return!!a&&e(r,n,0)>-1}return Im=t,Im}var Mm,$j;function gI(){if($j)return Mm;$j=1;function e(t,r,n){for(var a=-1,o=t==null?0:t.length;++a<o;)if(n(r,t[a]))return!0;return!1}return Mm=e,Mm}var $m,Fj;function vI(){if(Fj)return $m;Fj=1;function e(){}return $m=e,$m}var Fm,Lj;function yI(){if(Lj)return Fm;Lj=1;var e=KC(),t=vI(),r=Qy(),n=1/0,a=e&&1/r(new e([,-0]))[1]==n?function(o){return new e(o)}:t;return Fm=a,Fm}var Lm,Bj;function xI(){if(Bj)return Lm;Bj=1;var e=BC(),t=mI(),r=gI(),n=qC(),a=yI(),o=Qy(),c=200;function u(f,p,h){var m=-1,v=t,b=f.length,w=!0,_=[],x=_;if(h)w=!1,v=r;else if(b>=c){var S=p?null:a(f);if(S)return o(S);w=!1,v=n,x=new e}else x=p?[]:_;e:for(;++m<b;){var C=f[m],O=p?p(C):C;if(C=h||C!==0?C:0,w&&O===O){for(var E=x.length;E--;)if(x[E]===O)continue e;p&&x.push(O),_.push(C)}else v(x,O,h)||(x!==_&&x.push(O),_.push(C))}return _}return Lm=u,Lm}var Bm,zj;function bI(){if(zj)return Bm;zj=1;var e=Jn(),t=xI();function r(n,a){return n&&n.length?t(n,e(a,2)):[]}return Bm=r,Bm}var wI=bI();const qj=Je(wI);function JC(e,t,r){return t===!0?qj(e,r):$e(t)?qj(e,t):e}function Oa(e){"@babel/helpers - typeof";return Oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Oa(e)}var _I=["ref"];function Uj(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function pn(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Uj(Object(r),!0).forEach(function(n){Wu(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Uj(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function jI(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wj(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,tO(n.key),n)}}function SI(e,t,r){return t&&Wj(e.prototype,t),r&&Wj(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function NI(e,t,r){return t=Fc(t),AI(e,eO()?Reflect.construct(t,r||[],Fc(e).constructor):t.apply(e,r))}function AI(e,t){if(t&&(Oa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return CI(e)}function CI(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function eO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(eO=function(){return!!e})()}function Fc(e){return Fc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Fc(e)}function OI(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Cv(e,t)}function Cv(e,t){return Cv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Cv(e,t)}function Wu(e,t,r){return t=tO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function tO(e){var t=EI(e,"string");return Oa(t)=="symbol"?t:t+""}function EI(e,t){if(Oa(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Oa(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function kI(e,t){if(e==null)return{};var r=PI(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function PI(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function TI(e){return e.value}function RI(e,t){if(V.isValidElement(e))return V.cloneElement(e,t);if(typeof e=="function")return V.createElement(e,t);t.ref;var r=kI(t,_I);return V.createElement(Xy,r)}var Hj=1,wa=(function(e){function t(){var r;jI(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=NI(this,t,[].concat(a)),Wu(r,"lastBoundingBox",{width:-1,height:-1}),r}return OI(t,e),SI(t,[{key:"componentDidMount",value:function(){this.updateBBox()}},{key:"componentDidUpdate",value:function(){this.updateBBox()}},{key:"getBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var n=this.wrapperNode.getBoundingClientRect();return n.height=this.wrapperNode.offsetHeight,n.width=this.wrapperNode.offsetWidth,n}return null}},{key:"updateBBox",value:function(){var n=this.props.onBBoxUpdate,a=this.getBBox();a?(Math.abs(a.width-this.lastBoundingBox.width)>Hj||Math.abs(a.height-this.lastBoundingBox.height)>Hj)&&(this.lastBoundingBox.width=a.width,this.lastBoundingBox.height=a.height,n&&n(a)):(this.lastBoundingBox.width!==-1||this.lastBoundingBox.height!==-1)&&(this.lastBoundingBox.width=-1,this.lastBoundingBox.height=-1,n&&n(null))}},{key:"getBBoxSnapshot",value:function(){return this.lastBoundingBox.width>=0&&this.lastBoundingBox.height>=0?pn({},this.lastBoundingBox):{width:0,height:0}}},{key:"getDefaultPosition",value:function(n){var a=this.props,o=a.layout,c=a.align,u=a.verticalAlign,f=a.margin,p=a.chartWidth,h=a.chartHeight,m,v;if(!n||(n.left===void 0||n.left===null)&&(n.right===void 0||n.right===null))if(c==="center"&&o==="vertical"){var b=this.getBBoxSnapshot();m={left:((p||0)-b.width)/2}}else m=c==="right"?{right:f&&f.right||0}:{left:f&&f.left||0};if(!n||(n.top===void 0||n.top===null)&&(n.bottom===void 0||n.bottom===null))if(u==="middle"){var w=this.getBBoxSnapshot();v={top:((h||0)-w.height)/2}}else v=u==="bottom"?{bottom:f&&f.bottom||0}:{top:f&&f.top||0};return pn(pn({},m),v)}},{key:"render",value:function(){var n=this,a=this.props,o=a.content,c=a.width,u=a.height,f=a.wrapperStyle,p=a.payloadUniqBy,h=a.payload,m=pn(pn({position:"absolute",width:c||"auto",height:u||"auto"},this.getDefaultPosition(f)),f);return V.createElement("div",{className:"recharts-legend-wrapper",style:m,ref:function(b){n.wrapperNode=b}},RI(o,pn(pn({},this.props),{},{payload:JC(h,p,TI)})))}}],[{key:"getWithHeight",value:function(n,a){var o=pn(pn({},this.defaultProps),n.props),c=o.layout;return c==="vertical"&&he(n.props.height)?{height:n.props.height}:c==="horizontal"?{width:n.props.width||a}:null}}])})(T.PureComponent);Wu(wa,"displayName","Legend");Wu(wa,"defaultProps",{iconSize:14,layout:"horizontal",align:"center",verticalAlign:"bottom"});var zm,Gj;function DI(){if(Gj)return zm;Gj=1;var e=Hs(),t=Zy(),r=ar(),n=e?e.isConcatSpreadable:void 0;function a(o){return r(o)||t(o)||!!(n&&o&&o[n])}return zm=a,zm}var qm,Yj;function rO(){if(Yj)return qm;Yj=1;var e=WC(),t=DI();function r(n,a,o,c,u){var f=-1,p=n.length;for(o||(o=t),u||(u=[]);++f<p;){var h=n[f];a>0&&o(h)?a>1?r(h,a-1,o,c,u):e(u,h):c||(u[u.length]=h)}return u}return qm=r,qm}var Um,Vj;function II(){if(Vj)return Um;Vj=1;function e(t){return function(r,n,a){for(var o=-1,c=Object(r),u=a(r),f=u.length;f--;){var p=u[t?f:++o];if(n(c[p],p,c)===!1)break}return r}}return Um=e,Um}var Wm,Kj;function MI(){if(Kj)return Wm;Kj=1;var e=II(),t=e();return Wm=t,Wm}var Hm,Xj;function nO(){if(Xj)return Hm;Xj=1;var e=MI(),t=Uu();function r(n,a){return n&&e(n,a,t)}return Hm=r,Hm}var Gm,Qj;function $I(){if(Qj)return Gm;Qj=1;var e=Ys();function t(r,n){return function(a,o){if(a==null)return a;if(!e(a))return r(a,o);for(var c=a.length,u=n?c:-1,f=Object(a);(n?u--:++u<c)&&o(f[u],u,f)!==!1;);return a}}return Gm=t,Gm}var Ym,Zj;function rx(){if(Zj)return Ym;Zj=1;var e=nO(),t=$I(),r=t(e);return Ym=r,Ym}var Vm,Jj;function iO(){if(Jj)return Vm;Jj=1;var e=rx(),t=Ys();function r(n,a){var o=-1,c=t(n)?Array(n.length):[];return e(n,function(u,f,p){c[++o]=a(u,f,p)}),c}return Vm=r,Vm}var Km,e2;function FI(){if(e2)return Km;e2=1;function e(t,r){var n=t.length;for(t.sort(r);n--;)t[n]=t[n].value;return t}return Km=e,Km}var Xm,t2;function LI(){if(t2)return Xm;t2=1;var e=Va();function t(r,n){if(r!==n){var a=r!==void 0,o=r===null,c=r===r,u=e(r),f=n!==void 0,p=n===null,h=n===n,m=e(n);if(!p&&!m&&!u&&r>n||u&&f&&h&&!p&&!m||o&&f&&h||!a&&h||!c)return 1;if(!o&&!u&&!m&&r<n||m&&a&&c&&!o&&!u||p&&a&&c||!f&&c||!h)return-1}return 0}return Xm=t,Xm}var Qm,r2;function BI(){if(r2)return Qm;r2=1;var e=LI();function t(r,n,a){for(var o=-1,c=r.criteria,u=n.criteria,f=c.length,p=a.length;++o<f;){var h=e(c[o],u[o]);if(h){if(o>=p)return h;var m=a[o];return h*(m=="desc"?-1:1)}}return r.index-n.index}return Qm=t,Qm}var Zm,n2;function zI(){if(n2)return Zm;n2=1;var e=qy(),t=Uy(),r=Jn(),n=iO(),a=FI(),o=GC(),c=BI(),u=Xa(),f=ar();function p(h,m,v){m.length?m=e(m,function(_){return f(_)?function(x){return t(x,_.length===1?_[0]:_)}:_}):m=[u];var b=-1;m=e(m,o(r));var w=n(h,function(_,x,S){var C=e(m,function(O){return O(_)});return{criteria:C,index:++b,value:_}});return a(w,function(_,x){return c(_,x,v)})}return Zm=p,Zm}var Jm,i2;function qI(){if(i2)return Jm;i2=1;function e(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)}return Jm=e,Jm}var eg,a2;function UI(){if(a2)return eg;a2=1;var e=qI(),t=Math.max;function r(n,a,o){return a=t(a===void 0?n.length-1:a,0),function(){for(var c=arguments,u=-1,f=t(c.length-a,0),p=Array(f);++u<f;)p[u]=c[a+u];u=-1;for(var h=Array(a+1);++u<a;)h[u]=c[u];return h[a]=o(p),e(n,this,h)}}return eg=r,eg}var tg,o2;function WI(){if(o2)return tg;o2=1;function e(t){return function(){return t}}return tg=e,tg}var rg,s2;function aO(){if(s2)return rg;s2=1;var e=Mi(),t=(function(){try{var r=e(Object,"defineProperty");return r({},"",{}),r}catch{}})();return rg=t,rg}var ng,l2;function HI(){if(l2)return ng;l2=1;var e=WI(),t=aO(),r=Xa(),n=t?function(a,o){return t(a,"toString",{configurable:!0,enumerable:!1,value:e(o),writable:!0})}:r;return ng=n,ng}var ig,c2;function GI(){if(c2)return ig;c2=1;var e=800,t=16,r=Date.now;function n(a){var o=0,c=0;return function(){var u=r(),f=t-(u-c);if(c=u,f>0){if(++o>=e)return arguments[0]}else o=0;return a.apply(void 0,arguments)}}return ig=n,ig}var ag,u2;function YI(){if(u2)return ag;u2=1;var e=HI(),t=GI(),r=t(e);return ag=r,ag}var og,d2;function VI(){if(d2)return og;d2=1;var e=Xa(),t=UI(),r=YI();function n(a,o){return r(t(a,o,e),a+"")}return og=n,og}var sg,f2;function Hu(){if(f2)return sg;f2=1;var e=Ly(),t=Ys(),r=Jy(),n=Zn();function a(o,c,u){if(!n(u))return!1;var f=typeof c;return(f=="number"?t(u)&&r(c,u.length):f=="string"&&c in u)?e(u[c],o):!1}return sg=a,sg}var lg,p2;function KI(){if(p2)return lg;p2=1;var e=rO(),t=zI(),r=VI(),n=Hu(),a=r(function(o,c){if(o==null)return[];var u=c.length;return u>1&&n(o,c[0],c[1])?c=[]:u>2&&n(c[0],c[1],c[2])&&(c=[c[0]]),t(o,e(c,1),[])});return lg=a,lg}var XI=KI();const nx=Je(XI);function ss(e){"@babel/helpers - typeof";return ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ss(e)}function Ov(){return Ov=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ov.apply(this,arguments)}function QI(e,t){return t3(e)||e3(e,t)||JI(e,t)||ZI()}function ZI(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function JI(e,t){if(e){if(typeof e=="string")return h2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h2(e,t)}}function h2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function e3(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,c,u=[],f=!0,p=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(h){p=!0,a=h}finally{try{if(!f&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw a}}return u}}function t3(e){if(Array.isArray(e))return e}function m2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function cg(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?m2(Object(r),!0).forEach(function(n){r3(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function r3(e,t,r){return t=n3(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n3(e){var t=i3(e,"string");return ss(t)=="symbol"?t:t+""}function i3(e,t){if(ss(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ss(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function a3(e){return Array.isArray(e)&&Nt(e[0])&&Nt(e[1])?e.join(" ~ "):e}var o3=function(t){var r=t.separator,n=r===void 0?" : ":r,a=t.contentStyle,o=a===void 0?{}:a,c=t.itemStyle,u=c===void 0?{}:c,f=t.labelStyle,p=f===void 0?{}:f,h=t.payload,m=t.formatter,v=t.itemSorter,b=t.wrapperClassName,w=t.labelClassName,_=t.label,x=t.labelFormatter,S=t.accessibilityLayer,C=S===void 0?!1:S,O=function(){if(h&&h.length){var M={padding:0,margin:0},H=(v?nx(h,v):h).map(function(B,F){if(B.type==="none")return null;var Y=cg({display:"block",paddingTop:4,paddingBottom:4,color:B.color||"#000"},u),J=B.formatter||m||a3,U=B.value,X=B.name,K=U,I=X;if(J&&K!=null&&I!=null){var L=J(U,X,B,F,h);if(Array.isArray(L)){var ie=QI(L,2);K=ie[0],I=ie[1]}else K=L}return V.createElement("li",{className:"recharts-tooltip-item",key:"tooltip-item-".concat(F),style:Y},Nt(I)?V.createElement("span",{className:"recharts-tooltip-item-name"},I):null,Nt(I)?V.createElement("span",{className:"recharts-tooltip-item-separator"},n):null,V.createElement("span",{className:"recharts-tooltip-item-value"},K),V.createElement("span",{className:"recharts-tooltip-item-unit"},B.unit||""))});return V.createElement("ul",{className:"recharts-tooltip-item-list",style:M},H)}return null},E=cg({margin:0,padding:10,backgroundColor:"#fff",border:"1px solid #ccc",whiteSpace:"nowrap"},o),A=cg({margin:0},p),N=!He(_),P=N?_:"",R=We("recharts-default-tooltip",b),D=We("recharts-tooltip-label",w);N&&x&&h!==void 0&&h!==null&&(P=x(_,h));var G=C?{role:"status","aria-live":"assertive"}:{};return V.createElement("div",Ov({className:R,style:E},G),V.createElement("p",{className:D,style:A},V.isValidElement(P)?P:"".concat(P)),O())};function ls(e){"@babel/helpers - typeof";return ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ls(e)}function fc(e,t,r){return t=s3(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s3(e){var t=l3(e,"string");return ls(t)=="symbol"?t:t+""}function l3(e,t){if(ls(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ls(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Uo="recharts-tooltip-wrapper",c3={visibility:"hidden"};function u3(e){var t=e.coordinate,r=e.translateX,n=e.translateY;return We(Uo,fc(fc(fc(fc({},"".concat(Uo,"-right"),he(r)&&t&&he(t.x)&&r>=t.x),"".concat(Uo,"-left"),he(r)&&t&&he(t.x)&&r<t.x),"".concat(Uo,"-bottom"),he(n)&&t&&he(t.y)&&n>=t.y),"".concat(Uo,"-top"),he(n)&&t&&he(t.y)&&n<t.y))}function g2(e){var t=e.allowEscapeViewBox,r=e.coordinate,n=e.key,a=e.offsetTopLeft,o=e.position,c=e.reverseDirection,u=e.tooltipDimension,f=e.viewBox,p=e.viewBoxDimension;if(o&&he(o[n]))return o[n];var h=r[n]-u-a,m=r[n]+a;if(t[n])return c[n]?h:m;if(c[n]){var v=h,b=f[n];return v<b?Math.max(m,f[n]):Math.max(h,f[n])}var w=m+u,_=f[n]+p;return w>_?Math.max(h,f[n]):Math.max(m,f[n])}function d3(e){var t=e.translateX,r=e.translateY,n=e.useTranslate3d;return{transform:n?"translate3d(".concat(t,"px, ").concat(r,"px, 0)"):"translate(".concat(t,"px, ").concat(r,"px)")}}function f3(e){var t=e.allowEscapeViewBox,r=e.coordinate,n=e.offsetTopLeft,a=e.position,o=e.reverseDirection,c=e.tooltipBox,u=e.useTranslate3d,f=e.viewBox,p,h,m;return c.height>0&&c.width>0&&r?(h=g2({allowEscapeViewBox:t,coordinate:r,key:"x",offsetTopLeft:n,position:a,reverseDirection:o,tooltipDimension:c.width,viewBox:f,viewBoxDimension:f.width}),m=g2({allowEscapeViewBox:t,coordinate:r,key:"y",offsetTopLeft:n,position:a,reverseDirection:o,tooltipDimension:c.height,viewBox:f,viewBoxDimension:f.height}),p=d3({translateX:h,translateY:m,useTranslate3d:u})):p=c3,{cssProperties:p,cssClasses:u3({translateX:h,translateY:m,coordinate:r})}}function Ea(e){"@babel/helpers - typeof";return Ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ea(e)}function v2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function y2(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?v2(Object(r),!0).forEach(function(n){kv(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function p3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h3(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,sO(n.key),n)}}function m3(e,t,r){return t&&h3(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function g3(e,t,r){return t=Lc(t),v3(e,oO()?Reflect.construct(t,r||[],Lc(e).constructor):t.apply(e,r))}function v3(e,t){if(t&&(Ea(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y3(e)}function y3(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(oO=function(){return!!e})()}function Lc(e){return Lc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Lc(e)}function x3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ev(e,t)}function Ev(e,t){return Ev=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Ev(e,t)}function kv(e,t,r){return t=sO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function sO(e){var t=b3(e,"string");return Ea(t)=="symbol"?t:t+""}function b3(e,t){if(Ea(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ea(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var x2=1,w3=(function(e){function t(){var r;p3(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=g3(this,t,[].concat(a)),kv(r,"state",{dismissed:!1,dismissedAtCoordinate:{x:0,y:0},lastBoundingBox:{width:-1,height:-1}}),kv(r,"handleKeyDown",function(c){if(c.key==="Escape"){var u,f,p,h;r.setState({dismissed:!0,dismissedAtCoordinate:{x:(u=(f=r.props.coordinate)===null||f===void 0?void 0:f.x)!==null&&u!==void 0?u:0,y:(p=(h=r.props.coordinate)===null||h===void 0?void 0:h.y)!==null&&p!==void 0?p:0}})}}),r}return x3(t,e),m3(t,[{key:"updateBBox",value:function(){if(this.wrapperNode&&this.wrapperNode.getBoundingClientRect){var n=this.wrapperNode.getBoundingClientRect();(Math.abs(n.width-this.state.lastBoundingBox.width)>x2||Math.abs(n.height-this.state.lastBoundingBox.height)>x2)&&this.setState({lastBoundingBox:{width:n.width,height:n.height}})}else(this.state.lastBoundingBox.width!==-1||this.state.lastBoundingBox.height!==-1)&&this.setState({lastBoundingBox:{width:-1,height:-1}})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.updateBBox()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown)}},{key:"componentDidUpdate",value:function(){var n,a;this.props.active&&this.updateBBox(),this.state.dismissed&&(((n=this.props.coordinate)===null||n===void 0?void 0:n.x)!==this.state.dismissedAtCoordinate.x||((a=this.props.coordinate)===null||a===void 0?void 0:a.y)!==this.state.dismissedAtCoordinate.y)&&(this.state.dismissed=!1)}},{key:"render",value:function(){var n=this,a=this.props,o=a.active,c=a.allowEscapeViewBox,u=a.animationDuration,f=a.animationEasing,p=a.children,h=a.coordinate,m=a.hasPayload,v=a.isAnimationActive,b=a.offset,w=a.position,_=a.reverseDirection,x=a.useTranslate3d,S=a.viewBox,C=a.wrapperStyle,O=f3({allowEscapeViewBox:c,coordinate:h,offsetTopLeft:b,position:w,reverseDirection:_,tooltipBox:this.state.lastBoundingBox,useTranslate3d:x,viewBox:S}),E=O.cssClasses,A=O.cssProperties,N=y2(y2({transition:v&&o?"transform ".concat(u,"ms ").concat(f):void 0},A),{},{pointerEvents:"none",visibility:!this.state.dismissed&&o&&m?"visible":"hidden",position:"absolute",top:0,left:0},C);return V.createElement("div",{tabIndex:-1,className:E,style:N,ref:function(R){n.wrapperNode=R}},p)}}])})(T.PureComponent),_3=function(){return!(typeof window<"u"&&window.document&&window.document.createElement&&window.setTimeout)},Vs={isSsr:_3()};function ka(e){"@babel/helpers - typeof";return ka=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ka(e)}function b2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function w2(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?b2(Object(r),!0).forEach(function(n){ix(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function j3(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S3(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,cO(n.key),n)}}function N3(e,t,r){return t&&S3(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function A3(e,t,r){return t=Bc(t),C3(e,lO()?Reflect.construct(t,r||[],Bc(e).constructor):t.apply(e,r))}function C3(e,t){if(t&&(ka(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return O3(e)}function O3(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function lO(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(lO=function(){return!!e})()}function Bc(e){return Bc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Bc(e)}function E3(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Pv(e,t)}function Pv(e,t){return Pv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Pv(e,t)}function ix(e,t,r){return t=cO(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function cO(e){var t=k3(e,"string");return ka(t)=="symbol"?t:t+""}function k3(e,t){if(ka(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ka(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function P3(e){return e.dataKey}function T3(e,t){return V.isValidElement(e)?V.cloneElement(e,t):typeof e=="function"?V.createElement(e,t):V.createElement(o3,t)}var Kr=(function(e){function t(){return j3(this,t),A3(this,t,arguments)}return E3(t,e),N3(t,[{key:"render",value:function(){var n=this,a=this.props,o=a.active,c=a.allowEscapeViewBox,u=a.animationDuration,f=a.animationEasing,p=a.content,h=a.coordinate,m=a.filterNull,v=a.isAnimationActive,b=a.offset,w=a.payload,_=a.payloadUniqBy,x=a.position,S=a.reverseDirection,C=a.useTranslate3d,O=a.viewBox,E=a.wrapperStyle,A=w??[];m&&A.length&&(A=JC(w.filter(function(P){return P.value!=null&&(P.hide!==!0||n.props.includeHidden)}),_,P3));var N=A.length>0;return V.createElement(w3,{allowEscapeViewBox:c,animationDuration:u,animationEasing:f,isAnimationActive:v,active:o,coordinate:h,hasPayload:N,offset:b,position:x,reverseDirection:S,useTranslate3d:C,viewBox:O,wrapperStyle:E},T3(p,w2(w2({},this.props),{},{payload:A})))}}])})(T.PureComponent);ix(Kr,"displayName","Tooltip");ix(Kr,"defaultProps",{accessibilityLayer:!1,allowEscapeViewBox:{x:!1,y:!1},animationDuration:400,animationEasing:"ease",contentStyle:{},coordinate:{x:0,y:0},cursor:!0,cursorStyle:{},filterNull:!0,isAnimationActive:!Vs.isSsr,itemStyle:{},labelStyle:{},offset:10,reverseDirection:{x:!1,y:!1},separator:" : ",trigger:"hover",useTranslate3d:!1,viewBox:{x:0,y:0,height:0,width:0},wrapperStyle:{}});var ug,_2;function R3(){if(_2)return ug;_2=1;var e=tn(),t=function(){return e.Date.now()};return ug=t,ug}var dg,j2;function D3(){if(j2)return dg;j2=1;var e=/\s/;function t(r){for(var n=r.length;n--&&e.test(r.charAt(n)););return n}return dg=t,dg}var fg,S2;function I3(){if(S2)return fg;S2=1;var e=D3(),t=/^\s+/;function r(n){return n&&n.slice(0,e(n)+1).replace(t,"")}return fg=r,fg}var pg,N2;function uO(){if(N2)return pg;N2=1;var e=I3(),t=Zn(),r=Va(),n=NaN,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;function f(p){if(typeof p=="number")return p;if(r(p))return n;if(t(p)){var h=typeof p.valueOf=="function"?p.valueOf():p;p=t(h)?h+"":h}if(typeof p!="string")return p===0?p:+p;p=e(p);var m=o.test(p);return m||c.test(p)?u(p.slice(2),m?2:8):a.test(p)?n:+p}return pg=f,pg}var hg,A2;function M3(){if(A2)return hg;A2=1;var e=Zn(),t=R3(),r=uO(),n="Expected a function",a=Math.max,o=Math.min;function c(u,f,p){var h,m,v,b,w,_,x=0,S=!1,C=!1,O=!0;if(typeof u!="function")throw new TypeError(n);f=r(f)||0,e(p)&&(S=!!p.leading,C="maxWait"in p,v=C?a(r(p.maxWait)||0,f):v,O="trailing"in p?!!p.trailing:O);function E(H){var B=h,F=m;return h=m=void 0,x=H,b=u.apply(F,B),b}function A(H){return x=H,w=setTimeout(R,f),S?E(H):b}function N(H){var B=H-_,F=H-x,Y=f-B;return C?o(Y,v-F):Y}function P(H){var B=H-_,F=H-x;return _===void 0||B>=f||B<0||C&&F>=v}function R(){var H=t();if(P(H))return D(H);w=setTimeout(R,N(H))}function D(H){return w=void 0,O&&h?E(H):(h=m=void 0,b)}function G(){w!==void 0&&clearTimeout(w),x=0,h=_=m=w=void 0}function q(){return w===void 0?b:D(t())}function M(){var H=t(),B=P(H);if(h=arguments,m=this,_=H,B){if(w===void 0)return A(_);if(C)return clearTimeout(w),w=setTimeout(R,f),E(_)}return w===void 0&&(w=setTimeout(R,f)),b}return M.cancel=G,M.flush=q,M}return hg=c,hg}var mg,C2;function $3(){if(C2)return mg;C2=1;var e=M3(),t=Zn(),r="Expected a function";function n(a,o,c){var u=!0,f=!0;if(typeof a!="function")throw new TypeError(r);return t(c)&&(u="leading"in c?!!c.leading:u,f="trailing"in c?!!c.trailing:f),e(a,o,{leading:u,maxWait:o,trailing:f})}return mg=n,mg}var F3=$3();const dO=Je(F3);function cs(e){"@babel/helpers - typeof";return cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},cs(e)}function O2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function pc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?O2(Object(r),!0).forEach(function(n){L3(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function L3(e,t,r){return t=B3(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B3(e){var t=z3(e,"string");return cs(t)=="symbol"?t:t+""}function z3(e,t){if(cs(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(cs(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function q3(e,t){return G3(e)||H3(e,t)||W3(e,t)||U3()}function U3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W3(e,t){if(e){if(typeof e=="string")return E2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return E2(e,t)}}function E2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function H3(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,c,u=[],f=!0,p=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(h){p=!0,a=h}finally{try{if(!f&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw a}}return u}}function G3(e){if(Array.isArray(e))return e}var Y3=T.forwardRef(function(e,t){var r=e.aspect,n=e.initialDimension,a=n===void 0?{width:-1,height:-1}:n,o=e.width,c=o===void 0?"100%":o,u=e.height,f=u===void 0?"100%":u,p=e.minWidth,h=p===void 0?0:p,m=e.minHeight,v=e.maxHeight,b=e.children,w=e.debounce,_=w===void 0?0:w,x=e.id,S=e.className,C=e.onResize,O=e.style,E=O===void 0?{}:O,A=T.useRef(null),N=T.useRef();N.current=C,T.useImperativeHandle(t,function(){return Object.defineProperty(A.current,"current",{get:function(){return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."),A.current},configurable:!0})});var P=T.useState({containerWidth:a.width,containerHeight:a.height}),R=q3(P,2),D=R[0],G=R[1],q=T.useCallback(function(H,B){G(function(F){var Y=Math.round(H),J=Math.round(B);return F.containerWidth===Y&&F.containerHeight===J?F:{containerWidth:Y,containerHeight:J}})},[]);T.useEffect(function(){var H=function(X){var K,I=X[0].contentRect,L=I.width,ie=I.height;q(L,ie),(K=N.current)===null||K===void 0||K.call(N,L,ie)};_>0&&(H=dO(H,_,{trailing:!0,leading:!1}));var B=new ResizeObserver(H),F=A.current.getBoundingClientRect(),Y=F.width,J=F.height;return q(Y,J),B.observe(A.current),function(){B.disconnect()}},[q,_]);var M=T.useMemo(function(){var H=D.containerWidth,B=D.containerHeight;if(H<0||B<0)return null;yn(_i(c)||_i(f),`The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`,c,f),yn(!r||r>0,"The aspect(%s) must be greater than zero.",r);var F=_i(c)?H:c,Y=_i(f)?B:f;r&&r>0&&(F?Y=F/r:Y&&(F=Y*r),v&&Y>v&&(Y=v)),yn(F>0||Y>0,`The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`,F,Y,c,f,h,m,r);var J=!Array.isArray(b)&&vn(b.type).endsWith("Chart");return V.Children.map(b,function(U){return V.isValidElement(U)?T.cloneElement(U,pc({width:F,height:Y},J?{style:pc({height:"100%",width:"100%",maxHeight:Y,maxWidth:F},U.props.style)}:{})):U})},[r,b,f,v,m,h,D,c]);return V.createElement("div",{id:x?"".concat(x):void 0,className:We("recharts-responsive-container",S),style:pc(pc({},E),{},{width:c,height:f,minWidth:h,minHeight:m,maxHeight:v}),ref:A},M)}),ax=function(t){return null};ax.displayName="Cell";function us(e){"@babel/helpers - typeof";return us=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},us(e)}function k2(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Tv(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?k2(Object(r),!0).forEach(function(n){V3(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k2(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function V3(e,t,r){return t=K3(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K3(e){var t=X3(e,"string");return us(t)=="symbol"?t:t+""}function X3(e,t){if(us(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(us(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var pa={widthCache:{},cacheCount:0},Q3=2e3,Z3={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},P2="recharts_measurement_span";function J3(e){var t=Tv({},e);return Object.keys(t).forEach(function(r){t[r]||delete t[r]}),t}var ts=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==null||Vs.isSsr)return{width:0,height:0};var n=J3(r),a=JSON.stringify({text:t,copyStyle:n});if(pa.widthCache[a])return pa.widthCache[a];try{var o=document.getElementById(P2);o||(o=document.createElement("span"),o.setAttribute("id",P2),o.setAttribute("aria-hidden","true"),document.body.appendChild(o));var c=Tv(Tv({},Z3),n);Object.assign(o.style,c),o.textContent="".concat(t);var u=o.getBoundingClientRect(),f={width:u.width,height:u.height};return pa.widthCache[a]=f,++pa.cacheCount>Q3&&(pa.cacheCount=0,pa.widthCache={}),f}catch{return{width:0,height:0}}},eM=function(t){return{top:t.top+window.scrollY-document.documentElement.clientTop,left:t.left+window.scrollX-document.documentElement.clientLeft}};function ds(e){"@babel/helpers - typeof";return ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ds(e)}function zc(e,t){return iM(e)||nM(e,t)||rM(e,t)||tM()}function tM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rM(e,t){if(e){if(typeof e=="string")return T2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T2(e,t)}}function T2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function nM(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,c,u=[],f=!0,p=!1;try{if(o=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;f=!1}else for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(h){p=!0,a=h}finally{try{if(!f&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw a}}return u}}function iM(e){if(Array.isArray(e))return e}function aM(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R2(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,sM(n.key),n)}}function oM(e,t,r){return t&&R2(e.prototype,t),r&&R2(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function sM(e){var t=lM(e,"string");return ds(t)=="symbol"?t:t+""}function lM(e,t){if(ds(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ds(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var D2=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,I2=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,cM=/^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,uM=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,fO={cm:96/2.54,mm:96/25.4,pt:96/72,pc:96/6,in:96,Q:96/(2.54*40),px:1},dM=Object.keys(fO),va="NaN";function fM(e,t){return e*fO[t]}var hc=(function(){function e(t,r){aM(this,e),this.num=t,this.unit=r,this.num=t,this.unit=r,Number.isNaN(t)&&(this.unit=""),r!==""&&!cM.test(r)&&(this.num=NaN,this.unit=""),dM.includes(r)&&(this.num=fM(t,r),this.unit="px")}return oM(e,[{key:"add",value:function(r){return this.unit!==r.unit?new e(NaN,""):new e(this.num+r.num,this.unit)}},{key:"subtract",value:function(r){return this.unit!==r.unit?new e(NaN,""):new e(this.num-r.num,this.unit)}},{key:"multiply",value:function(r){return this.unit!==""&&r.unit!==""&&this.unit!==r.unit?new e(NaN,""):new e(this.num*r.num,this.unit||r.unit)}},{key:"divide",value:function(r){return this.unit!==""&&r.unit!==""&&this.unit!==r.unit?new e(NaN,""):new e(this.num/r.num,this.unit||r.unit)}},{key:"toString",value:function(){return"".concat(this.num).concat(this.unit)}},{key:"isNaN",value:function(){return Number.isNaN(this.num)}}],[{key:"parse",value:function(r){var n,a=(n=uM.exec(r))!==null&&n!==void 0?n:[],o=zc(a,3),c=o[1],u=o[2];return new e(parseFloat(c),u??"")}}])})();function pO(e){if(e.includes(va))return va;for(var t=e;t.includes("*")||t.includes("/");){var r,n=(r=D2.exec(t))!==null&&r!==void 0?r:[],a=zc(n,4),o=a[1],c=a[2],u=a[3],f=hc.parse(o??""),p=hc.parse(u??""),h=c==="*"?f.multiply(p):f.divide(p);if(h.isNaN())return va;t=t.replace(D2,h.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var m,v=(m=I2.exec(t))!==null&&m!==void 0?m:[],b=zc(v,4),w=b[1],_=b[2],x=b[3],S=hc.parse(w??""),C=hc.parse(x??""),O=_==="+"?S.add(C):S.subtract(C);if(O.isNaN())return va;t=t.replace(I2,O.toString())}return t}var M2=/\(([^()]*)\)/;function pM(e){for(var t=e;t.includes("(");){var r=M2.exec(t),n=zc(r,2),a=n[1];t=t.replace(M2,pO(a))}return t}function hM(e){var t=e.replace(/\s+/g,"");return t=pM(t),t=pO(t),t}function mM(e){try{return hM(e)}catch{return va}}function gg(e){var t=mM(e.slice(5,-1));return t===va?"":t}var gM=["x","y","lineHeight","capHeight","scaleToFit","textAnchor","verticalAnchor","fill"],vM=["dx","dy","angle","className","breakAll"];function Rv(){return Rv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Rv.apply(this,arguments)}function $2(e,t){if(e==null)return{};var r=yM(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function yM(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function F2(e,t){return _M(e)||wM(e,t)||bM(e,t)||xM()}function xM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bM(e,t){if(e){if(typeof e=="string")return L2(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L2(e,t)}}function L2(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function wM(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,c,u=[],f=!0,p=!1;try{if(o=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;f=!1}else for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(h){p=!0,a=h}finally{try{if(!f&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw a}}return u}}function _M(e){if(Array.isArray(e))return e}var hO=/[ \f\n\r\t\v\u2028\u2029]+/,mO=function(t){var r=t.children,n=t.breakAll,a=t.style;try{var o=[];He(r)||(n?o=r.toString().split(""):o=r.toString().split(hO));var c=o.map(function(f){return{word:f,width:ts(f,a).width}}),u=n?0:ts(" ",a).width;return{wordsWithComputedWidth:c,spaceWidth:u}}catch{return null}},jM=function(t,r,n,a,o){var c=t.maxLines,u=t.children,f=t.style,p=t.breakAll,h=he(c),m=u,v=function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return F.reduce(function(Y,J){var U=J.word,X=J.width,K=Y[Y.length-1];if(K&&(a==null||o||K.width+X+n<Number(a)))K.words.push(U),K.width+=X+n;else{var I={words:[U],width:X};Y.push(I)}return Y},[])},b=v(r),w=function(F){return F.reduce(function(Y,J){return Y.width>J.width?Y:J})};if(!h)return b;for(var _="…",x=function(F){var Y=m.slice(0,F),J=mO({breakAll:p,style:f,children:Y+_}).wordsWithComputedWidth,U=v(J),X=U.length>c||w(U).width>Number(a);return[X,U]},S=0,C=m.length-1,O=0,E;S<=C&&O<=m.length-1;){var A=Math.floor((S+C)/2),N=A-1,P=x(N),R=F2(P,2),D=R[0],G=R[1],q=x(A),M=F2(q,1),H=M[0];if(!D&&!H&&(S=A+1),D&&H&&(C=A-1),!D&&H){E=G;break}O++}return E||b},B2=function(t){var r=He(t)?[]:t.toString().split(hO);return[{words:r}]},SM=function(t){var r=t.width,n=t.scaleToFit,a=t.children,o=t.style,c=t.breakAll,u=t.maxLines;if((r||n)&&!Vs.isSsr){var f,p,h=mO({breakAll:c,children:a,style:o});if(h){var m=h.wordsWithComputedWidth,v=h.spaceWidth;f=m,p=v}else return B2(a);return jM({breakAll:c,children:a,maxLines:u,style:o},f,p,r,n)}return B2(a)},z2="#808080",qc=function(t){var r=t.x,n=r===void 0?0:r,a=t.y,o=a===void 0?0:a,c=t.lineHeight,u=c===void 0?"1em":c,f=t.capHeight,p=f===void 0?"0.71em":f,h=t.scaleToFit,m=h===void 0?!1:h,v=t.textAnchor,b=v===void 0?"start":v,w=t.verticalAnchor,_=w===void 0?"end":w,x=t.fill,S=x===void 0?z2:x,C=$2(t,gM),O=T.useMemo(function(){return SM({breakAll:C.breakAll,children:C.children,maxLines:C.maxLines,scaleToFit:m,style:C.style,width:C.width})},[C.breakAll,C.children,C.maxLines,m,C.style,C.width]),E=C.dx,A=C.dy,N=C.angle,P=C.className,R=C.breakAll,D=$2(C,vM);if(!Nt(n)||!Nt(o))return null;var G=n+(he(E)?E:0),q=o+(he(A)?A:0),M;switch(_){case"start":M=gg("calc(".concat(p,")"));break;case"middle":M=gg("calc(".concat((O.length-1)/2," * -").concat(u," + (").concat(p," / 2))"));break;default:M=gg("calc(".concat(O.length-1," * -").concat(u,")"));break}var H=[];if(m){var B=O[0].width,F=C.width;H.push("scale(".concat((he(F)?F/B:1)/B,")"))}return N&&H.push("rotate(".concat(N,", ").concat(G,", ").concat(q,")")),H.length&&(D.transform=H.join(" ")),V.createElement("text",Rv({},Ue(D,!0),{x:G,y:q,className:We("recharts-text",P),textAnchor:b,fill:S.includes("url")?z2:S}),O.map(function(Y,J){var U=Y.words.join(R?"":" ");return V.createElement("tspan",{x:G,dy:J===0?M:u,key:"".concat(U,"-").concat(J)},U)}))};function Xn(e,t){return e==null||t==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function NM(e,t){return e==null||t==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function ox(e){let t,r,n;e.length!==2?(t=Xn,r=(u,f)=>Xn(e(u),f),n=(u,f)=>e(u)-f):(t=e===Xn||e===NM?e:AM,r=e,n=e);function a(u,f,p=0,h=u.length){if(p<h){if(t(f,f)!==0)return h;do{const m=p+h>>>1;r(u[m],f)<0?p=m+1:h=m}while(p<h)}return p}function o(u,f,p=0,h=u.length){if(p<h){if(t(f,f)!==0)return h;do{const m=p+h>>>1;r(u[m],f)<=0?p=m+1:h=m}while(p<h)}return p}function c(u,f,p=0,h=u.length){const m=a(u,f,p,h-1);return m>p&&n(u[m-1],f)>-n(u[m],f)?m-1:m}return{left:a,center:c,right:o}}function AM(){return 0}function gO(e){return e===null?NaN:+e}function*CM(e,t){for(let r of e)r!=null&&(r=+r)>=r&&(yield r)}const OM=ox(Xn),Ks=OM.right;ox(gO).center;class q2 extends Map{constructor(t,r=PM){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:r}}),t!=null)for(const[n,a]of t)this.set(n,a)}get(t){return super.get(U2(this,t))}has(t){return super.has(U2(this,t))}set(t,r){return super.set(EM(this,t),r)}delete(t){return super.delete(kM(this,t))}}function U2({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):r}function EM({_intern:e,_key:t},r){const n=t(r);return e.has(n)?e.get(n):(e.set(n,r),r)}function kM({_intern:e,_key:t},r){const n=t(r);return e.has(n)&&(r=e.get(n),e.delete(n)),r}function PM(e){return e!==null&&typeof e=="object"?e.valueOf():e}function TM(e=Xn){if(e===Xn)return vO;if(typeof e!="function")throw new TypeError("compare is not a function");return(t,r)=>{const n=e(t,r);return n||n===0?n:(e(r,r)===0)-(e(t,t)===0)}}function vO(e,t){return(e==null||!(e>=e))-(t==null||!(t>=t))||(e<t?-1:e>t?1:0)}const RM=Math.sqrt(50),DM=Math.sqrt(10),IM=Math.sqrt(2);function Uc(e,t,r){const n=(t-e)/Math.max(0,r),a=Math.floor(Math.log10(n)),o=n/Math.pow(10,a),c=o>=RM?10:o>=DM?5:o>=IM?2:1;let u,f,p;return a<0?(p=Math.pow(10,-a)/c,u=Math.round(e*p),f=Math.round(t*p),u/p<e&&++u,f/p>t&&--f,p=-p):(p=Math.pow(10,a)*c,u=Math.round(e/p),f=Math.round(t/p),u*p<e&&++u,f*p>t&&--f),f<u&&.5<=r&&r<2?Uc(e,t,r*2):[u,f,p]}function Dv(e,t,r){if(t=+t,e=+e,r=+r,!(r>0))return[];if(e===t)return[e];const n=t<e,[a,o,c]=n?Uc(t,e,r):Uc(e,t,r);if(!(o>=a))return[];const u=o-a+1,f=new Array(u);if(n)if(c<0)for(let p=0;p<u;++p)f[p]=(o-p)/-c;else for(let p=0;p<u;++p)f[p]=(o-p)*c;else if(c<0)for(let p=0;p<u;++p)f[p]=(a+p)/-c;else for(let p=0;p<u;++p)f[p]=(a+p)*c;return f}function Iv(e,t,r){return t=+t,e=+e,r=+r,Uc(e,t,r)[2]}function Mv(e,t,r){t=+t,e=+e,r=+r;const n=t<e,a=n?Iv(t,e,r):Iv(e,t,r);return(n?-1:1)*(a<0?1/-a:a)}function W2(e,t){let r;for(const n of e)n!=null&&(r<n||r===void 0&&n>=n)&&(r=n);return r}function H2(e,t){let r;for(const n of e)n!=null&&(r>n||r===void 0&&n>=n)&&(r=n);return r}function yO(e,t,r=0,n=1/0,a){if(t=Math.floor(t),r=Math.floor(Math.max(0,r)),n=Math.floor(Math.min(e.length-1,n)),!(r<=t&&t<=n))return e;for(a=a===void 0?vO:TM(a);n>r;){if(n-r>600){const f=n-r+1,p=t-r+1,h=Math.log(f),m=.5*Math.exp(2*h/3),v=.5*Math.sqrt(h*m*(f-m)/f)*(p-f/2<0?-1:1),b=Math.max(r,Math.floor(t-p*m/f+v)),w=Math.min(n,Math.floor(t+(f-p)*m/f+v));yO(e,t,b,w,a)}const o=e[t];let c=r,u=n;for(Wo(e,r,t),a(e[n],o)>0&&Wo(e,r,n);c<u;){for(Wo(e,c,u),++c,--u;a(e[c],o)<0;)++c;for(;a(e[u],o)>0;)--u}a(e[r],o)===0?Wo(e,r,u):(++u,Wo(e,u,n)),u<=t&&(r=u+1),t<=u&&(n=u-1)}return e}function Wo(e,t,r){const n=e[t];e[t]=e[r],e[r]=n}function MM(e,t,r){if(e=Float64Array.from(CM(e)),!(!(n=e.length)||isNaN(t=+t))){if(t<=0||n<2)return H2(e);if(t>=1)return W2(e);var n,a=(n-1)*t,o=Math.floor(a),c=W2(yO(e,o).subarray(0,o+1)),u=H2(e.subarray(o+1));return c+(u-c)*(a-o)}}function $M(e,t,r=gO){if(!(!(n=e.length)||isNaN(t=+t))){if(t<=0||n<2)return+r(e[0],0,e);if(t>=1)return+r(e[n-1],n-1,e);var n,a=(n-1)*t,o=Math.floor(a),c=+r(e[o],o,e),u=+r(e[o+1],o+1,e);return c+(u-c)*(a-o)}}function FM(e,t,r){e=+e,t=+t,r=(a=arguments.length)<2?(t=e,e=0,1):a<3?1:+r;for(var n=-1,a=Math.max(0,Math.ceil((t-e)/r))|0,o=new Array(a);++n<a;)o[n]=e+n*r;return o}function Or(e,t){switch(arguments.length){case 0:break;case 1:this.range(e);break;default:this.range(t).domain(e);break}return this}function Nn(e,t){switch(arguments.length){case 0:break;case 1:{typeof e=="function"?this.interpolator(e):this.range(e);break}default:{this.domain(e),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const $v=Symbol("implicit");function sx(){var e=new q2,t=[],r=[],n=$v;function a(o){let c=e.get(o);if(c===void 0){if(n!==$v)return n;e.set(o,c=t.push(o)-1)}return r[c%r.length]}return a.domain=function(o){if(!arguments.length)return t.slice();t=[],e=new q2;for(const c of o)e.has(c)||e.set(c,t.push(c)-1);return a},a.range=function(o){return arguments.length?(r=Array.from(o),a):r.slice()},a.unknown=function(o){return arguments.length?(n=o,a):n},a.copy=function(){return sx(t,r).unknown(n)},Or.apply(a,arguments),a}function fs(){var e=sx().unknown(void 0),t=e.domain,r=e.range,n=0,a=1,o,c,u=!1,f=0,p=0,h=.5;delete e.unknown;function m(){var v=t().length,b=a<n,w=b?a:n,_=b?n:a;o=(_-w)/Math.max(1,v-f+p*2),u&&(o=Math.floor(o)),w+=(_-w-o*(v-f))*h,c=o*(1-f),u&&(w=Math.round(w),c=Math.round(c));var x=FM(v).map(function(S){return w+o*S});return r(b?x.reverse():x)}return e.domain=function(v){return arguments.length?(t(v),m()):t()},e.range=function(v){return arguments.length?([n,a]=v,n=+n,a=+a,m()):[n,a]},e.rangeRound=function(v){return[n,a]=v,n=+n,a=+a,u=!0,m()},e.bandwidth=function(){return c},e.step=function(){return o},e.round=function(v){return arguments.length?(u=!!v,m()):u},e.padding=function(v){return arguments.length?(f=Math.min(1,p=+v),m()):f},e.paddingInner=function(v){return arguments.length?(f=Math.min(1,v),m()):f},e.paddingOuter=function(v){return arguments.length?(p=+v,m()):p},e.align=function(v){return arguments.length?(h=Math.max(0,Math.min(1,v)),m()):h},e.copy=function(){return fs(t(),[n,a]).round(u).paddingInner(f).paddingOuter(p).align(h)},Or.apply(m(),arguments)}function xO(e){var t=e.copy;return e.padding=e.paddingOuter,delete e.paddingInner,delete e.paddingOuter,e.copy=function(){return xO(t())},e}function rs(){return xO(fs.apply(null,arguments).paddingInner(1))}function lx(e,t,r){e.prototype=t.prototype=r,r.constructor=e}function bO(e,t){var r=Object.create(e.prototype);for(var n in t)r[n]=t[n];return r}function Xs(){}var ps=.7,Wc=1/ps,_a="\\s*([+-]?\\d+)\\s*",hs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Qr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",LM=/^#([0-9a-f]{3,8})$/,BM=new RegExp(`^rgb\\(${_a},${_a},${_a}\\)$`),zM=new RegExp(`^rgb\\(${Qr},${Qr},${Qr}\\)$`),qM=new RegExp(`^rgba\\(${_a},${_a},${_a},${hs}\\)$`),UM=new RegExp(`^rgba\\(${Qr},${Qr},${Qr},${hs}\\)$`),WM=new RegExp(`^hsl\\(${hs},${Qr},${Qr}\\)$`),HM=new RegExp(`^hsla\\(${hs},${Qr},${Qr},${hs}\\)$`),G2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};lx(Xs,ms,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Y2,formatHex:Y2,formatHex8:GM,formatHsl:YM,formatRgb:V2,toString:V2});function Y2(){return this.rgb().formatHex()}function GM(){return this.rgb().formatHex8()}function YM(){return wO(this).formatHsl()}function V2(){return this.rgb().formatRgb()}function ms(e){var t,r;return e=(e+"").trim().toLowerCase(),(t=LM.exec(e))?(r=t[1].length,t=parseInt(t[1],16),r===6?K2(t):r===3?new tr(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):r===8?mc(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):r===4?mc(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=BM.exec(e))?new tr(t[1],t[2],t[3],1):(t=zM.exec(e))?new tr(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=qM.exec(e))?mc(t[1],t[2],t[3],t[4]):(t=UM.exec(e))?mc(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=WM.exec(e))?Z2(t[1],t[2]/100,t[3]/100,1):(t=HM.exec(e))?Z2(t[1],t[2]/100,t[3]/100,t[4]):G2.hasOwnProperty(e)?K2(G2[e]):e==="transparent"?new tr(NaN,NaN,NaN,0):null}function K2(e){return new tr(e>>16&255,e>>8&255,e&255,1)}function mc(e,t,r,n){return n<=0&&(e=t=r=NaN),new tr(e,t,r,n)}function VM(e){return e instanceof Xs||(e=ms(e)),e?(e=e.rgb(),new tr(e.r,e.g,e.b,e.opacity)):new tr}function Fv(e,t,r,n){return arguments.length===1?VM(e):new tr(e,t,r,n??1)}function tr(e,t,r,n){this.r=+e,this.g=+t,this.b=+r,this.opacity=+n}lx(tr,Fv,bO(Xs,{brighter(e){return e=e==null?Wc:Math.pow(Wc,e),new tr(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?ps:Math.pow(ps,e),new tr(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new tr(Ci(this.r),Ci(this.g),Ci(this.b),Hc(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:X2,formatHex:X2,formatHex8:KM,formatRgb:Q2,toString:Q2}));function X2(){return`#${ji(this.r)}${ji(this.g)}${ji(this.b)}`}function KM(){return`#${ji(this.r)}${ji(this.g)}${ji(this.b)}${ji((isNaN(this.opacity)?1:this.opacity)*255)}`}function Q2(){const e=Hc(this.opacity);return`${e===1?"rgb(":"rgba("}${Ci(this.r)}, ${Ci(this.g)}, ${Ci(this.b)}${e===1?")":`, ${e})`}`}function Hc(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Ci(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function ji(e){return e=Ci(e),(e<16?"0":"")+e.toString(16)}function Z2(e,t,r,n){return n<=0?e=t=r=NaN:r<=0||r>=1?e=t=NaN:t<=0&&(e=NaN),new Lr(e,t,r,n)}function wO(e){if(e instanceof Lr)return new Lr(e.h,e.s,e.l,e.opacity);if(e instanceof Xs||(e=ms(e)),!e)return new Lr;if(e instanceof Lr)return e;e=e.rgb();var t=e.r/255,r=e.g/255,n=e.b/255,a=Math.min(t,r,n),o=Math.max(t,r,n),c=NaN,u=o-a,f=(o+a)/2;return u?(t===o?c=(r-n)/u+(r<n)*6:r===o?c=(n-t)/u+2:c=(t-r)/u+4,u/=f<.5?o+a:2-o-a,c*=60):u=f>0&&f<1?0:c,new Lr(c,u,f,e.opacity)}function XM(e,t,r,n){return arguments.length===1?wO(e):new Lr(e,t,r,n??1)}function Lr(e,t,r,n){this.h=+e,this.s=+t,this.l=+r,this.opacity=+n}lx(Lr,XM,bO(Xs,{brighter(e){return e=e==null?Wc:Math.pow(Wc,e),new Lr(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?ps:Math.pow(ps,e),new Lr(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,t=isNaN(e)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*t,a=2*r-n;return new tr(vg(e>=240?e-240:e+120,a,n),vg(e,a,n),vg(e<120?e+240:e-120,a,n),this.opacity)},clamp(){return new Lr(J2(this.h),gc(this.s),gc(this.l),Hc(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Hc(this.opacity);return`${e===1?"hsl(":"hsla("}${J2(this.h)}, ${gc(this.s)*100}%, ${gc(this.l)*100}%${e===1?")":`, ${e})`}`}}));function J2(e){return e=(e||0)%360,e<0?e+360:e}function gc(e){return Math.max(0,Math.min(1,e||0))}function vg(e,t,r){return(e<60?t+(r-t)*e/60:e<180?r:e<240?t+(r-t)*(240-e)/60:t)*255}const cx=e=>()=>e;function QM(e,t){return function(r){return e+r*t}}function ZM(e,t,r){return e=Math.pow(e,r),t=Math.pow(t,r)-e,r=1/r,function(n){return Math.pow(e+n*t,r)}}function JM(e){return(e=+e)==1?_O:function(t,r){return r-t?ZM(t,r,e):cx(isNaN(t)?r:t)}}function _O(e,t){var r=t-e;return r?QM(e,r):cx(isNaN(e)?t:e)}const eS=(function e(t){var r=JM(t);function n(a,o){var c=r((a=Fv(a)).r,(o=Fv(o)).r),u=r(a.g,o.g),f=r(a.b,o.b),p=_O(a.opacity,o.opacity);return function(h){return a.r=c(h),a.g=u(h),a.b=f(h),a.opacity=p(h),a+""}}return n.gamma=e,n})(1);function e$(e,t){t||(t=[]);var r=e?Math.min(t.length,e.length):0,n=t.slice(),a;return function(o){for(a=0;a<r;++a)n[a]=e[a]*(1-o)+t[a]*o;return n}}function t$(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function r$(e,t){var r=t?t.length:0,n=e?Math.min(r,e.length):0,a=new Array(n),o=new Array(r),c;for(c=0;c<n;++c)a[c]=Qa(e[c],t[c]);for(;c<r;++c)o[c]=t[c];return function(u){for(c=0;c<n;++c)o[c]=a[c](u);return o}}function n$(e,t){var r=new Date;return e=+e,t=+t,function(n){return r.setTime(e*(1-n)+t*n),r}}function Gc(e,t){return e=+e,t=+t,function(r){return e*(1-r)+t*r}}function i$(e,t){var r={},n={},a;(e===null||typeof e!="object")&&(e={}),(t===null||typeof t!="object")&&(t={});for(a in t)a in e?r[a]=Qa(e[a],t[a]):n[a]=t[a];return function(o){for(a in r)n[a]=r[a](o);return n}}var Lv=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,yg=new RegExp(Lv.source,"g");function a$(e){return function(){return e}}function o$(e){return function(t){return e(t)+""}}function s$(e,t){var r=Lv.lastIndex=yg.lastIndex=0,n,a,o,c=-1,u=[],f=[];for(e=e+"",t=t+"";(n=Lv.exec(e))&&(a=yg.exec(t));)(o=a.index)>r&&(o=t.slice(r,o),u[c]?u[c]+=o:u[++c]=o),(n=n[0])===(a=a[0])?u[c]?u[c]+=a:u[++c]=a:(u[++c]=null,f.push({i:c,x:Gc(n,a)})),r=yg.lastIndex;return r<t.length&&(o=t.slice(r),u[c]?u[c]+=o:u[++c]=o),u.length<2?f[0]?o$(f[0].x):a$(t):(t=f.length,function(p){for(var h=0,m;h<t;++h)u[(m=f[h]).i]=m.x(p);return u.join("")})}function Qa(e,t){var r=typeof t,n;return t==null||r==="boolean"?cx(t):(r==="number"?Gc:r==="string"?(n=ms(t))?(t=n,eS):s$:t instanceof ms?eS:t instanceof Date?n$:t$(t)?e$:Array.isArray(t)?r$:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?i$:Gc)(e,t)}function ux(e,t){return e=+e,t=+t,function(r){return Math.round(e*(1-r)+t*r)}}function l$(e,t){t===void 0&&(t=e,e=Qa);for(var r=0,n=t.length-1,a=t[0],o=new Array(n<0?0:n);r<n;)o[r]=e(a,a=t[++r]);return function(c){var u=Math.max(0,Math.min(n-1,Math.floor(c*=n)));return o[u](c-u)}}function c$(e){return function(){return e}}function Yc(e){return+e}var tS=[0,1];function Vt(e){return e}function Bv(e,t){return(t-=e=+e)?function(r){return(r-e)/t}:c$(isNaN(t)?NaN:.5)}function u$(e,t){var r;return e>t&&(r=e,e=t,t=r),function(n){return Math.max(e,Math.min(t,n))}}function d$(e,t,r){var n=e[0],a=e[1],o=t[0],c=t[1];return a<n?(n=Bv(a,n),o=r(c,o)):(n=Bv(n,a),o=r(o,c)),function(u){return o(n(u))}}function f$(e,t,r){var n=Math.min(e.length,t.length)-1,a=new Array(n),o=new Array(n),c=-1;for(e[n]<e[0]&&(e=e.slice().reverse(),t=t.slice().reverse());++c<n;)a[c]=Bv(e[c],e[c+1]),o[c]=r(t[c],t[c+1]);return function(u){var f=Ks(e,u,1,n)-1;return o[f](a[f](u))}}function Qs(e,t){return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown())}function Gu(){var e=tS,t=tS,r=Qa,n,a,o,c=Vt,u,f,p;function h(){var v=Math.min(e.length,t.length);return c!==Vt&&(c=u$(e[0],e[v-1])),u=v>2?f$:d$,f=p=null,m}function m(v){return v==null||isNaN(v=+v)?o:(f||(f=u(e.map(n),t,r)))(n(c(v)))}return m.invert=function(v){return c(a((p||(p=u(t,e.map(n),Gc)))(v)))},m.domain=function(v){return arguments.length?(e=Array.from(v,Yc),h()):e.slice()},m.range=function(v){return arguments.length?(t=Array.from(v),h()):t.slice()},m.rangeRound=function(v){return t=Array.from(v),r=ux,h()},m.clamp=function(v){return arguments.length?(c=v?!0:Vt,h()):c!==Vt},m.interpolate=function(v){return arguments.length?(r=v,h()):r},m.unknown=function(v){return arguments.length?(o=v,m):o},function(v,b){return n=v,a=b,h()}}function dx(){return Gu()(Vt,Vt)}function p$(e){return Math.abs(e=Math.round(e))>=1e21?e.toLocaleString("en").replace(/,/g,""):e.toString(10)}function Vc(e,t){if(!isFinite(e)||e===0)return null;var r=(e=t?e.toExponential(t-1):e.toExponential()).indexOf("e"),n=e.slice(0,r);return[n.length>1?n[0]+n.slice(2):n,+e.slice(r+1)]}function Pa(e){return e=Vc(Math.abs(e)),e?e[1]:NaN}function h$(e,t){return function(r,n){for(var a=r.length,o=[],c=0,u=e[0],f=0;a>0&&u>0&&(f+u+1>n&&(u=Math.max(1,n-f)),o.push(r.substring(a-=u,a+u)),!((f+=u+1)>n));)u=e[c=(c+1)%e.length];return o.reverse().join(t)}}function m$(e){return function(t){return t.replace(/[0-9]/g,function(r){return e[+r]})}}var g$=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function gs(e){if(!(t=g$.exec(e)))throw new Error("invalid format: "+e);var t;return new fx({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}gs.prototype=fx.prototype;function fx(e){this.fill=e.fill===void 0?" ":e.fill+"",this.align=e.align===void 0?">":e.align+"",this.sign=e.sign===void 0?"-":e.sign+"",this.symbol=e.symbol===void 0?"":e.symbol+"",this.zero=!!e.zero,this.width=e.width===void 0?void 0:+e.width,this.comma=!!e.comma,this.precision=e.precision===void 0?void 0:+e.precision,this.trim=!!e.trim,this.type=e.type===void 0?"":e.type+""}fx.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function v$(e){e:for(var t=e.length,r=1,n=-1,a;r<t;++r)switch(e[r]){case".":n=a=r;break;case"0":n===0&&(n=r),a=r;break;default:if(!+e[r])break e;n>0&&(n=0);break}return n>0?e.slice(0,n)+e.slice(a+1):e}var Kc;function y$(e,t){var r=Vc(e,t);if(!r)return Kc=void 0,e.toPrecision(t);var n=r[0],a=r[1],o=a-(Kc=Math.max(-8,Math.min(8,Math.floor(a/3)))*3)+1,c=n.length;return o===c?n:o>c?n+new Array(o-c+1).join("0"):o>0?n.slice(0,o)+"."+n.slice(o):"0."+new Array(1-o).join("0")+Vc(e,Math.max(0,t+o-1))[0]}function rS(e,t){var r=Vc(e,t);if(!r)return e+"";var n=r[0],a=r[1];return a<0?"0."+new Array(-a).join("0")+n:n.length>a+1?n.slice(0,a+1)+"."+n.slice(a+1):n+new Array(a-n.length+2).join("0")}const nS={"%":(e,t)=>(e*100).toFixed(t),b:e=>Math.round(e).toString(2),c:e=>e+"",d:p$,e:(e,t)=>e.toExponential(t),f:(e,t)=>e.toFixed(t),g:(e,t)=>e.toPrecision(t),o:e=>Math.round(e).toString(8),p:(e,t)=>rS(e*100,t),r:rS,s:y$,X:e=>Math.round(e).toString(16).toUpperCase(),x:e=>Math.round(e).toString(16)};function iS(e){return e}var aS=Array.prototype.map,oS=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function x$(e){var t=e.grouping===void 0||e.thousands===void 0?iS:h$(aS.call(e.grouping,Number),e.thousands+""),r=e.currency===void 0?"":e.currency[0]+"",n=e.currency===void 0?"":e.currency[1]+"",a=e.decimal===void 0?".":e.decimal+"",o=e.numerals===void 0?iS:m$(aS.call(e.numerals,String)),c=e.percent===void 0?"%":e.percent+"",u=e.minus===void 0?"−":e.minus+"",f=e.nan===void 0?"NaN":e.nan+"";function p(m,v){m=gs(m);var b=m.fill,w=m.align,_=m.sign,x=m.symbol,S=m.zero,C=m.width,O=m.comma,E=m.precision,A=m.trim,N=m.type;N==="n"?(O=!0,N="g"):nS[N]||(E===void 0&&(E=12),A=!0,N="g"),(S||b==="0"&&w==="=")&&(S=!0,b="0",w="=");var P=(v&&v.prefix!==void 0?v.prefix:"")+(x==="$"?r:x==="#"&&/[boxX]/.test(N)?"0"+N.toLowerCase():""),R=(x==="$"?n:/[%p]/.test(N)?c:"")+(v&&v.suffix!==void 0?v.suffix:""),D=nS[N],G=/[defgprs%]/.test(N);E=E===void 0?6:/[gprs]/.test(N)?Math.max(1,Math.min(21,E)):Math.max(0,Math.min(20,E));function q(M){var H=P,B=R,F,Y,J;if(N==="c")B=D(M)+B,M="";else{M=+M;var U=M<0||1/M<0;if(M=isNaN(M)?f:D(Math.abs(M),E),A&&(M=v$(M)),U&&+M==0&&_!=="+"&&(U=!1),H=(U?_==="("?_:u:_==="-"||_==="("?"":_)+H,B=(N==="s"&&!isNaN(M)&&Kc!==void 0?oS[8+Kc/3]:"")+B+(U&&_==="("?")":""),G){for(F=-1,Y=M.length;++F<Y;)if(J=M.charCodeAt(F),48>J||J>57){B=(J===46?a+M.slice(F+1):M.slice(F))+B,M=M.slice(0,F);break}}}O&&!S&&(M=t(M,1/0));var X=H.length+M.length+B.length,K=X<C?new Array(C-X+1).join(b):"";switch(O&&S&&(M=t(K+M,K.length?C-B.length:1/0),K=""),w){case"<":M=H+M+B+K;break;case"=":M=H+K+M+B;break;case"^":M=K.slice(0,X=K.length>>1)+H+M+B+K.slice(X);break;default:M=K+H+M+B;break}return o(M)}return q.toString=function(){return m+""},q}function h(m,v){var b=Math.max(-8,Math.min(8,Math.floor(Pa(v)/3)))*3,w=Math.pow(10,-b),_=p((m=gs(m),m.type="f",m),{suffix:oS[8+b/3]});return function(x){return _(w*x)}}return{format:p,formatPrefix:h}}var vc,px,jO;b$({thousands:",",grouping:[3],currency:["$",""]});function b$(e){return vc=x$(e),px=vc.format,jO=vc.formatPrefix,vc}function w$(e){return Math.max(0,-Pa(Math.abs(e)))}function _$(e,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Pa(t)/3)))*3-Pa(Math.abs(e)))}function j$(e,t){return e=Math.abs(e),t=Math.abs(t)-e,Math.max(0,Pa(t)-Pa(e))+1}function SO(e,t,r,n){var a=Mv(e,t,r),o;switch(n=gs(n??",f"),n.type){case"s":{var c=Math.max(Math.abs(e),Math.abs(t));return n.precision==null&&!isNaN(o=_$(a,c))&&(n.precision=o),jO(n,c)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(o=j$(a,Math.max(Math.abs(e),Math.abs(t))))&&(n.precision=o-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(o=w$(a))&&(n.precision=o-(n.type==="%")*2);break}}return px(n)}function ei(e){var t=e.domain;return e.ticks=function(r){var n=t();return Dv(n[0],n[n.length-1],r??10)},e.tickFormat=function(r,n){var a=t();return SO(a[0],a[a.length-1],r??10,n)},e.nice=function(r){r==null&&(r=10);var n=t(),a=0,o=n.length-1,c=n[a],u=n[o],f,p,h=10;for(u<c&&(p=c,c=u,u=p,p=a,a=o,o=p);h-- >0;){if(p=Iv(c,u,r),p===f)return n[a]=c,n[o]=u,t(n);if(p>0)c=Math.floor(c/p)*p,u=Math.ceil(u/p)*p;else if(p<0)c=Math.ceil(c*p)/p,u=Math.floor(u*p)/p;else break;f=p}return e},e}function Xc(){var e=dx();return e.copy=function(){return Qs(e,Xc())},Or.apply(e,arguments),ei(e)}function NO(e){var t;function r(n){return n==null||isNaN(n=+n)?t:n}return r.invert=r,r.domain=r.range=function(n){return arguments.length?(e=Array.from(n,Yc),r):e.slice()},r.unknown=function(n){return arguments.length?(t=n,r):t},r.copy=function(){return NO(e).unknown(t)},e=arguments.length?Array.from(e,Yc):[0,1],ei(r)}function AO(e,t){e=e.slice();var r=0,n=e.length-1,a=e[r],o=e[n],c;return o<a&&(c=r,r=n,n=c,c=a,a=o,o=c),e[r]=t.floor(a),e[n]=t.ceil(o),e}function sS(e){return Math.log(e)}function lS(e){return Math.exp(e)}function S$(e){return-Math.log(-e)}function N$(e){return-Math.exp(-e)}function A$(e){return isFinite(e)?+("1e"+e):e<0?0:e}function C$(e){return e===10?A$:e===Math.E?Math.exp:t=>Math.pow(e,t)}function O$(e){return e===Math.E?Math.log:e===10&&Math.log10||e===2&&Math.log2||(e=Math.log(e),t=>Math.log(t)/e)}function cS(e){return(t,r)=>-e(-t,r)}function hx(e){const t=e(sS,lS),r=t.domain;let n=10,a,o;function c(){return a=O$(n),o=C$(n),r()[0]<0?(a=cS(a),o=cS(o),e(S$,N$)):e(sS,lS),t}return t.base=function(u){return arguments.length?(n=+u,c()):n},t.domain=function(u){return arguments.length?(r(u),c()):r()},t.ticks=u=>{const f=r();let p=f[0],h=f[f.length-1];const m=h<p;m&&([p,h]=[h,p]);let v=a(p),b=a(h),w,_;const x=u==null?10:+u;let S=[];if(!(n%1)&&b-v<x){if(v=Math.floor(v),b=Math.ceil(b),p>0){for(;v<=b;++v)for(w=1;w<n;++w)if(_=v<0?w/o(-v):w*o(v),!(_<p)){if(_>h)break;S.push(_)}}else for(;v<=b;++v)for(w=n-1;w>=1;--w)if(_=v>0?w/o(-v):w*o(v),!(_<p)){if(_>h)break;S.push(_)}S.length*2<x&&(S=Dv(p,h,x))}else S=Dv(v,b,Math.min(b-v,x)).map(o);return m?S.reverse():S},t.tickFormat=(u,f)=>{if(u==null&&(u=10),f==null&&(f=n===10?"s":","),typeof f!="function"&&(!(n%1)&&(f=gs(f)).precision==null&&(f.trim=!0),f=px(f)),u===1/0)return f;const p=Math.max(1,n*u/t.ticks().length);return h=>{let m=h/o(Math.round(a(h)));return m*n<n-.5&&(m*=n),m<=p?f(h):""}},t.nice=()=>r(AO(r(),{floor:u=>o(Math.floor(a(u))),ceil:u=>o(Math.ceil(a(u)))})),t}function CO(){const e=hx(Gu()).domain([1,10]);return e.copy=()=>Qs(e,CO()).base(e.base()),Or.apply(e,arguments),e}function uS(e){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/e))}}function dS(e){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*e}}function mx(e){var t=1,r=e(uS(t),dS(t));return r.constant=function(n){return arguments.length?e(uS(t=+n),dS(t)):t},ei(r)}function OO(){var e=mx(Gu());return e.copy=function(){return Qs(e,OO()).constant(e.constant())},Or.apply(e,arguments)}function fS(e){return function(t){return t<0?-Math.pow(-t,e):Math.pow(t,e)}}function E$(e){return e<0?-Math.sqrt(-e):Math.sqrt(e)}function k$(e){return e<0?-e*e:e*e}function gx(e){var t=e(Vt,Vt),r=1;function n(){return r===1?e(Vt,Vt):r===.5?e(E$,k$):e(fS(r),fS(1/r))}return t.exponent=function(a){return arguments.length?(r=+a,n()):r},ei(t)}function vx(){var e=gx(Gu());return e.copy=function(){return Qs(e,vx()).exponent(e.exponent())},Or.apply(e,arguments),e}function P$(){return vx.apply(null,arguments).exponent(.5)}function pS(e){return Math.sign(e)*e*e}function T$(e){return Math.sign(e)*Math.sqrt(Math.abs(e))}function EO(){var e=dx(),t=[0,1],r=!1,n;function a(o){var c=T$(e(o));return isNaN(c)?n:r?Math.round(c):c}return a.invert=function(o){return e.invert(pS(o))},a.domain=function(o){return arguments.length?(e.domain(o),a):e.domain()},a.range=function(o){return arguments.length?(e.range((t=Array.from(o,Yc)).map(pS)),a):t.slice()},a.rangeRound=function(o){return a.range(o).round(!0)},a.round=function(o){return arguments.length?(r=!!o,a):r},a.clamp=function(o){return arguments.length?(e.clamp(o),a):e.clamp()},a.unknown=function(o){return arguments.length?(n=o,a):n},a.copy=function(){return EO(e.domain(),t).round(r).clamp(e.clamp()).unknown(n)},Or.apply(a,arguments),ei(a)}function kO(){var e=[],t=[],r=[],n;function a(){var c=0,u=Math.max(1,t.length);for(r=new Array(u-1);++c<u;)r[c-1]=$M(e,c/u);return o}function o(c){return c==null||isNaN(c=+c)?n:t[Ks(r,c)]}return o.invertExtent=function(c){var u=t.indexOf(c);return u<0?[NaN,NaN]:[u>0?r[u-1]:e[0],u<r.length?r[u]:e[e.length-1]]},o.domain=function(c){if(!arguments.length)return e.slice();e=[];for(let u of c)u!=null&&!isNaN(u=+u)&&e.push(u);return e.sort(Xn),a()},o.range=function(c){return arguments.length?(t=Array.from(c),a()):t.slice()},o.unknown=function(c){return arguments.length?(n=c,o):n},o.quantiles=function(){return r.slice()},o.copy=function(){return kO().domain(e).range(t).unknown(n)},Or.apply(o,arguments)}function PO(){var e=0,t=1,r=1,n=[.5],a=[0,1],o;function c(f){return f!=null&&f<=f?a[Ks(n,f,0,r)]:o}function u(){var f=-1;for(n=new Array(r);++f<r;)n[f]=((f+1)*t-(f-r)*e)/(r+1);return c}return c.domain=function(f){return arguments.length?([e,t]=f,e=+e,t=+t,u()):[e,t]},c.range=function(f){return arguments.length?(r=(a=Array.from(f)).length-1,u()):a.slice()},c.invertExtent=function(f){var p=a.indexOf(f);return p<0?[NaN,NaN]:p<1?[e,n[0]]:p>=r?[n[r-1],t]:[n[p-1],n[p]]},c.unknown=function(f){return arguments.length&&(o=f),c},c.thresholds=function(){return n.slice()},c.copy=function(){return PO().domain([e,t]).range(a).unknown(o)},Or.apply(ei(c),arguments)}function TO(){var e=[.5],t=[0,1],r,n=1;function a(o){return o!=null&&o<=o?t[Ks(e,o,0,n)]:r}return a.domain=function(o){return arguments.length?(e=Array.from(o),n=Math.min(e.length,t.length-1),a):e.slice()},a.range=function(o){return arguments.length?(t=Array.from(o),n=Math.min(e.length,t.length-1),a):t.slice()},a.invertExtent=function(o){var c=t.indexOf(o);return[e[c-1],e[c]]},a.unknown=function(o){return arguments.length?(r=o,a):r},a.copy=function(){return TO().domain(e).range(t).unknown(r)},Or.apply(a,arguments)}const xg=new Date,bg=new Date;function At(e,t,r,n){function a(o){return e(o=arguments.length===0?new Date:new Date(+o)),o}return a.floor=o=>(e(o=new Date(+o)),o),a.ceil=o=>(e(o=new Date(o-1)),t(o,1),e(o),o),a.round=o=>{const c=a(o),u=a.ceil(o);return o-c<u-o?c:u},a.offset=(o,c)=>(t(o=new Date(+o),c==null?1:Math.floor(c)),o),a.range=(o,c,u)=>{const f=[];if(o=a.ceil(o),u=u==null?1:Math.floor(u),!(o<c)||!(u>0))return f;let p;do f.push(p=new Date(+o)),t(o,u),e(o);while(p<o&&o<c);return f},a.filter=o=>At(c=>{if(c>=c)for(;e(c),!o(c);)c.setTime(c-1)},(c,u)=>{if(c>=c)if(u<0)for(;++u<=0;)for(;t(c,-1),!o(c););else for(;--u>=0;)for(;t(c,1),!o(c););}),r&&(a.count=(o,c)=>(xg.setTime(+o),bg.setTime(+c),e(xg),e(bg),Math.floor(r(xg,bg))),a.every=o=>(o=Math.floor(o),!isFinite(o)||!(o>0)?null:o>1?a.filter(n?c=>n(c)%o===0:c=>a.count(0,c)%o===0):a)),a}const Qc=At(()=>{},(e,t)=>{e.setTime(+e+t)},(e,t)=>t-e);Qc.every=e=>(e=Math.floor(e),!isFinite(e)||!(e>0)?null:e>1?At(t=>{t.setTime(Math.floor(t/e)*e)},(t,r)=>{t.setTime(+t+r*e)},(t,r)=>(r-t)/e):Qc);Qc.range;const hn=1e3,Nr=hn*60,mn=Nr*60,bn=mn*24,yx=bn*7,hS=bn*30,wg=bn*365,Si=At(e=>{e.setTime(e-e.getMilliseconds())},(e,t)=>{e.setTime(+e+t*hn)},(e,t)=>(t-e)/hn,e=>e.getUTCSeconds());Si.range;const xx=At(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*hn)},(e,t)=>{e.setTime(+e+t*Nr)},(e,t)=>(t-e)/Nr,e=>e.getMinutes());xx.range;const bx=At(e=>{e.setUTCSeconds(0,0)},(e,t)=>{e.setTime(+e+t*Nr)},(e,t)=>(t-e)/Nr,e=>e.getUTCMinutes());bx.range;const wx=At(e=>{e.setTime(e-e.getMilliseconds()-e.getSeconds()*hn-e.getMinutes()*Nr)},(e,t)=>{e.setTime(+e+t*mn)},(e,t)=>(t-e)/mn,e=>e.getHours());wx.range;const _x=At(e=>{e.setUTCMinutes(0,0,0)},(e,t)=>{e.setTime(+e+t*mn)},(e,t)=>(t-e)/mn,e=>e.getUTCHours());_x.range;const Zs=At(e=>e.setHours(0,0,0,0),(e,t)=>e.setDate(e.getDate()+t),(e,t)=>(t-e-(t.getTimezoneOffset()-e.getTimezoneOffset())*Nr)/bn,e=>e.getDate()-1);Zs.range;const Yu=At(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/bn,e=>e.getUTCDate()-1);Yu.range;const RO=At(e=>{e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCDate(e.getUTCDate()+t)},(e,t)=>(t-e)/bn,e=>Math.floor(e/bn));RO.range;function $i(e){return At(t=>{t.setDate(t.getDate()-(t.getDay()+7-e)%7),t.setHours(0,0,0,0)},(t,r)=>{t.setDate(t.getDate()+r*7)},(t,r)=>(r-t-(r.getTimezoneOffset()-t.getTimezoneOffset())*Nr)/yx)}const Vu=$i(0),Zc=$i(1),R$=$i(2),D$=$i(3),Ta=$i(4),I$=$i(5),M$=$i(6);Vu.range;Zc.range;R$.range;D$.range;Ta.range;I$.range;M$.range;function Fi(e){return At(t=>{t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+7-e)%7),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCDate(t.getUTCDate()+r*7)},(t,r)=>(r-t)/yx)}const Ku=Fi(0),Jc=Fi(1),$$=Fi(2),F$=Fi(3),Ra=Fi(4),L$=Fi(5),B$=Fi(6);Ku.range;Jc.range;$$.range;F$.range;Ra.range;L$.range;B$.range;const jx=At(e=>{e.setDate(1),e.setHours(0,0,0,0)},(e,t)=>{e.setMonth(e.getMonth()+t)},(e,t)=>t.getMonth()-e.getMonth()+(t.getFullYear()-e.getFullYear())*12,e=>e.getMonth());jx.range;const Sx=At(e=>{e.setUTCDate(1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCMonth(e.getUTCMonth()+t)},(e,t)=>t.getUTCMonth()-e.getUTCMonth()+(t.getUTCFullYear()-e.getUTCFullYear())*12,e=>e.getUTCMonth());Sx.range;const wn=At(e=>{e.setMonth(0,1),e.setHours(0,0,0,0)},(e,t)=>{e.setFullYear(e.getFullYear()+t)},(e,t)=>t.getFullYear()-e.getFullYear(),e=>e.getFullYear());wn.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:At(t=>{t.setFullYear(Math.floor(t.getFullYear()/e)*e),t.setMonth(0,1),t.setHours(0,0,0,0)},(t,r)=>{t.setFullYear(t.getFullYear()+r*e)});wn.range;const _n=At(e=>{e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,t)=>{e.setUTCFullYear(e.getUTCFullYear()+t)},(e,t)=>t.getUTCFullYear()-e.getUTCFullYear(),e=>e.getUTCFullYear());_n.every=e=>!isFinite(e=Math.floor(e))||!(e>0)?null:At(t=>{t.setUTCFullYear(Math.floor(t.getUTCFullYear()/e)*e),t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,r)=>{t.setUTCFullYear(t.getUTCFullYear()+r*e)});_n.range;function DO(e,t,r,n,a,o){const c=[[Si,1,hn],[Si,5,5*hn],[Si,15,15*hn],[Si,30,30*hn],[o,1,Nr],[o,5,5*Nr],[o,15,15*Nr],[o,30,30*Nr],[a,1,mn],[a,3,3*mn],[a,6,6*mn],[a,12,12*mn],[n,1,bn],[n,2,2*bn],[r,1,yx],[t,1,hS],[t,3,3*hS],[e,1,wg]];function u(p,h,m){const v=h<p;v&&([p,h]=[h,p]);const b=m&&typeof m.range=="function"?m:f(p,h,m),w=b?b.range(p,+h+1):[];return v?w.reverse():w}function f(p,h,m){const v=Math.abs(h-p)/m,b=ox(([,,x])=>x).right(c,v);if(b===c.length)return e.every(Mv(p/wg,h/wg,m));if(b===0)return Qc.every(Math.max(Mv(p,h,m),1));const[w,_]=c[v/c[b-1][2]<c[b][2]/v?b-1:b];return w.every(_)}return[u,f]}const[z$,q$]=DO(_n,Sx,Ku,RO,_x,bx),[U$,W$]=DO(wn,jx,Vu,Zs,wx,xx);function _g(e){if(0<=e.y&&e.y<100){var t=new Date(-1,e.m,e.d,e.H,e.M,e.S,e.L);return t.setFullYear(e.y),t}return new Date(e.y,e.m,e.d,e.H,e.M,e.S,e.L)}function jg(e){if(0<=e.y&&e.y<100){var t=new Date(Date.UTC(-1,e.m,e.d,e.H,e.M,e.S,e.L));return t.setUTCFullYear(e.y),t}return new Date(Date.UTC(e.y,e.m,e.d,e.H,e.M,e.S,e.L))}function Ho(e,t,r){return{y:e,m:t,d:r,H:0,M:0,S:0,L:0}}function H$(e){var t=e.dateTime,r=e.date,n=e.time,a=e.periods,o=e.days,c=e.shortDays,u=e.months,f=e.shortMonths,p=Go(a),h=Yo(a),m=Go(o),v=Yo(o),b=Go(c),w=Yo(c),_=Go(u),x=Yo(u),S=Go(f),C=Yo(f),O={a:J,A:U,b:X,B:K,c:null,d:bS,e:bS,f:h8,g:S8,G:A8,H:d8,I:f8,j:p8,L:IO,m:m8,M:g8,p:I,q:L,Q:jS,s:SS,S:v8,u:y8,U:x8,V:b8,w:w8,W:_8,x:null,X:null,y:j8,Y:N8,Z:C8,"%":_S},E={a:ie,A:pe,b:fe,B:ve,c:null,d:wS,e:wS,f:P8,g:z8,G:U8,H:O8,I:E8,j:k8,L:$O,m:T8,M:R8,p:ge,q:me,Q:jS,s:SS,S:D8,u:I8,U:M8,V:$8,w:F8,W:L8,x:null,X:null,y:B8,Y:q8,Z:W8,"%":_S},A={a:G,A:q,b:M,B:H,c:B,d:yS,e:yS,f:s8,g:vS,G:gS,H:xS,I:xS,j:n8,L:o8,m:r8,M:i8,p:D,q:t8,Q:c8,s:u8,S:a8,u:X$,U:Q$,V:Z$,w:K$,W:J$,x:F,X:Y,y:vS,Y:gS,Z:e8,"%":l8};O.x=N(r,O),O.X=N(n,O),O.c=N(t,O),E.x=N(r,E),E.X=N(n,E),E.c=N(t,E);function N(ae,Se){return function(se){var te=[],Pe=-1,Ee=0,Ke=ae.length,Xe,Ae,Be;for(se instanceof Date||(se=new Date(+se));++Pe<Ke;)ae.charCodeAt(Pe)===37&&(te.push(ae.slice(Ee,Pe)),(Ae=mS[Xe=ae.charAt(++Pe)])!=null?Xe=ae.charAt(++Pe):Ae=Xe==="e"?" ":"0",(Be=Se[Xe])&&(Xe=Be(se,Ae)),te.push(Xe),Ee=Pe+1);return te.push(ae.slice(Ee,Pe)),te.join("")}}function P(ae,Se){return function(se){var te=Ho(1900,void 0,1),Pe=R(te,ae,se+="",0),Ee,Ke;if(Pe!=se.length)return null;if("Q"in te)return new Date(te.Q);if("s"in te)return new Date(te.s*1e3+("L"in te?te.L:0));if(Se&&!("Z"in te)&&(te.Z=0),"p"in te&&(te.H=te.H%12+te.p*12),te.m===void 0&&(te.m="q"in te?te.q:0),"V"in te){if(te.V<1||te.V>53)return null;"w"in te||(te.w=1),"Z"in te?(Ee=jg(Ho(te.y,0,1)),Ke=Ee.getUTCDay(),Ee=Ke>4||Ke===0?Jc.ceil(Ee):Jc(Ee),Ee=Yu.offset(Ee,(te.V-1)*7),te.y=Ee.getUTCFullYear(),te.m=Ee.getUTCMonth(),te.d=Ee.getUTCDate()+(te.w+6)%7):(Ee=_g(Ho(te.y,0,1)),Ke=Ee.getDay(),Ee=Ke>4||Ke===0?Zc.ceil(Ee):Zc(Ee),Ee=Zs.offset(Ee,(te.V-1)*7),te.y=Ee.getFullYear(),te.m=Ee.getMonth(),te.d=Ee.getDate()+(te.w+6)%7)}else("W"in te||"U"in te)&&("w"in te||(te.w="u"in te?te.u%7:"W"in te?1:0),Ke="Z"in te?jg(Ho(te.y,0,1)).getUTCDay():_g(Ho(te.y,0,1)).getDay(),te.m=0,te.d="W"in te?(te.w+6)%7+te.W*7-(Ke+5)%7:te.w+te.U*7-(Ke+6)%7);return"Z"in te?(te.H+=te.Z/100|0,te.M+=te.Z%100,jg(te)):_g(te)}}function R(ae,Se,se,te){for(var Pe=0,Ee=Se.length,Ke=se.length,Xe,Ae;Pe<Ee;){if(te>=Ke)return-1;if(Xe=Se.charCodeAt(Pe++),Xe===37){if(Xe=Se.charAt(Pe++),Ae=A[Xe in mS?Se.charAt(Pe++):Xe],!Ae||(te=Ae(ae,se,te))<0)return-1}else if(Xe!=se.charCodeAt(te++))return-1}return te}function D(ae,Se,se){var te=p.exec(Se.slice(se));return te?(ae.p=h.get(te[0].toLowerCase()),se+te[0].length):-1}function G(ae,Se,se){var te=b.exec(Se.slice(se));return te?(ae.w=w.get(te[0].toLowerCase()),se+te[0].length):-1}function q(ae,Se,se){var te=m.exec(Se.slice(se));return te?(ae.w=v.get(te[0].toLowerCase()),se+te[0].length):-1}function M(ae,Se,se){var te=S.exec(Se.slice(se));return te?(ae.m=C.get(te[0].toLowerCase()),se+te[0].length):-1}function H(ae,Se,se){var te=_.exec(Se.slice(se));return te?(ae.m=x.get(te[0].toLowerCase()),se+te[0].length):-1}function B(ae,Se,se){return R(ae,t,Se,se)}function F(ae,Se,se){return R(ae,r,Se,se)}function Y(ae,Se,se){return R(ae,n,Se,se)}function J(ae){return c[ae.getDay()]}function U(ae){return o[ae.getDay()]}function X(ae){return f[ae.getMonth()]}function K(ae){return u[ae.getMonth()]}function I(ae){return a[+(ae.getHours()>=12)]}function L(ae){return 1+~~(ae.getMonth()/3)}function ie(ae){return c[ae.getUTCDay()]}function pe(ae){return o[ae.getUTCDay()]}function fe(ae){return f[ae.getUTCMonth()]}function ve(ae){return u[ae.getUTCMonth()]}function ge(ae){return a[+(ae.getUTCHours()>=12)]}function me(ae){return 1+~~(ae.getUTCMonth()/3)}return{format:function(ae){var Se=N(ae+="",O);return Se.toString=function(){return ae},Se},parse:function(ae){var Se=P(ae+="",!1);return Se.toString=function(){return ae},Se},utcFormat:function(ae){var Se=N(ae+="",E);return Se.toString=function(){return ae},Se},utcParse:function(ae){var Se=P(ae+="",!0);return Se.toString=function(){return ae},Se}}}var mS={"-":"",_:" ",0:"0"},Tt=/^\s*\d+/,G$=/^%/,Y$=/[\\^$*+?|[\]().{}]/g;function qe(e,t,r){var n=e<0?"-":"",a=(n?-e:e)+"",o=a.length;return n+(o<r?new Array(r-o+1).join(t)+a:a)}function V$(e){return e.replace(Y$,"\\$&")}function Go(e){return new RegExp("^(?:"+e.map(V$).join("|")+")","i")}function Yo(e){return new Map(e.map((t,r)=>[t.toLowerCase(),r]))}function K$(e,t,r){var n=Tt.exec(t.slice(r,r+1));return n?(e.w=+n[0],r+n[0].length):-1}function X$(e,t,r){var n=Tt.exec(t.slice(r,r+1));return n?(e.u=+n[0],r+n[0].length):-1}function Q$(e,t,r){var n=Tt.exec(t.slice(r,r+2));return n?(e.U=+n[0],r+n[0].length):-1}function Z$(e,t,r){var n=Tt.exec(t.slice(r,r+2));return n?(e.V=+n[0],r+n[0].length):-1}function J$(e,t,r){var n=Tt.exec(t.slice(r,r+2));return n?(e.W=+n[0],r+n[0].length):-1}function gS(e,t,r){var n=Tt.exec(t.slice(r,r+4));return n?(e.y=+n[0],r+n[0].length):-1}function vS(e,t,r){var n=Tt.exec(t.slice(r,r+2));return n?(e.y=+n[0]+(+n[0]>68?1900:2e3),r+n[0].length):-1}function e8(e,t,r){var n=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r,r+6));return n?(e.Z=n[1]?0:-(n[2]+(n[3]||"00")),r+n[0].length):-1}function t8(e,t,r){var n=Tt.exec(t.slice(r,r+1));return n?(e.q=n[0]*3-3,r+n[0].length):-1}function r8(e,t,r){var n=Tt.exec(t.slice(r,r+2));return n?(e.m=n[0]-1,r+n[0].length):-1}function yS(e,t,r){var n=Tt.exec(t.slice(r,r+2));return n?(e.d=+n[0],r+n[0].length):-1}function n8(e,t,r){var n=Tt.exec(t.slice(r,r+3));return n?(e.m=0,e.d=+n[0],r+n[0].length):-1}function xS(e,t,r){var n=Tt.exec(t.slice(r,r+2));return n?(e.H=+n[0],r+n[0].length):-1}function i8(e,t,r){var n=Tt.exec(t.slice(r,r+2));return n?(e.M=+n[0],r+n[0].length):-1}function a8(e,t,r){var n=Tt.exec(t.slice(r,r+2));return n?(e.S=+n[0],r+n[0].length):-1}function o8(e,t,r){var n=Tt.exec(t.slice(r,r+3));return n?(e.L=+n[0],r+n[0].length):-1}function s8(e,t,r){var n=Tt.exec(t.slice(r,r+6));return n?(e.L=Math.floor(n[0]/1e3),r+n[0].length):-1}function l8(e,t,r){var n=G$.exec(t.slice(r,r+1));return n?r+n[0].length:-1}function c8(e,t,r){var n=Tt.exec(t.slice(r));return n?(e.Q=+n[0],r+n[0].length):-1}function u8(e,t,r){var n=Tt.exec(t.slice(r));return n?(e.s=+n[0],r+n[0].length):-1}function bS(e,t){return qe(e.getDate(),t,2)}function d8(e,t){return qe(e.getHours(),t,2)}function f8(e,t){return qe(e.getHours()%12||12,t,2)}function p8(e,t){return qe(1+Zs.count(wn(e),e),t,3)}function IO(e,t){return qe(e.getMilliseconds(),t,3)}function h8(e,t){return IO(e,t)+"000"}function m8(e,t){return qe(e.getMonth()+1,t,2)}function g8(e,t){return qe(e.getMinutes(),t,2)}function v8(e,t){return qe(e.getSeconds(),t,2)}function y8(e){var t=e.getDay();return t===0?7:t}function x8(e,t){return qe(Vu.count(wn(e)-1,e),t,2)}function MO(e){var t=e.getDay();return t>=4||t===0?Ta(e):Ta.ceil(e)}function b8(e,t){return e=MO(e),qe(Ta.count(wn(e),e)+(wn(e).getDay()===4),t,2)}function w8(e){return e.getDay()}function _8(e,t){return qe(Zc.count(wn(e)-1,e),t,2)}function j8(e,t){return qe(e.getFullYear()%100,t,2)}function S8(e,t){return e=MO(e),qe(e.getFullYear()%100,t,2)}function N8(e,t){return qe(e.getFullYear()%1e4,t,4)}function A8(e,t){var r=e.getDay();return e=r>=4||r===0?Ta(e):Ta.ceil(e),qe(e.getFullYear()%1e4,t,4)}function C8(e){var t=e.getTimezoneOffset();return(t>0?"-":(t*=-1,"+"))+qe(t/60|0,"0",2)+qe(t%60,"0",2)}function wS(e,t){return qe(e.getUTCDate(),t,2)}function O8(e,t){return qe(e.getUTCHours(),t,2)}function E8(e,t){return qe(e.getUTCHours()%12||12,t,2)}function k8(e,t){return qe(1+Yu.count(_n(e),e),t,3)}function $O(e,t){return qe(e.getUTCMilliseconds(),t,3)}function P8(e,t){return $O(e,t)+"000"}function T8(e,t){return qe(e.getUTCMonth()+1,t,2)}function R8(e,t){return qe(e.getUTCMinutes(),t,2)}function D8(e,t){return qe(e.getUTCSeconds(),t,2)}function I8(e){var t=e.getUTCDay();return t===0?7:t}function M8(e,t){return qe(Ku.count(_n(e)-1,e),t,2)}function FO(e){var t=e.getUTCDay();return t>=4||t===0?Ra(e):Ra.ceil(e)}function $8(e,t){return e=FO(e),qe(Ra.count(_n(e),e)+(_n(e).getUTCDay()===4),t,2)}function F8(e){return e.getUTCDay()}function L8(e,t){return qe(Jc.count(_n(e)-1,e),t,2)}function B8(e,t){return qe(e.getUTCFullYear()%100,t,2)}function z8(e,t){return e=FO(e),qe(e.getUTCFullYear()%100,t,2)}function q8(e,t){return qe(e.getUTCFullYear()%1e4,t,4)}function U8(e,t){var r=e.getUTCDay();return e=r>=4||r===0?Ra(e):Ra.ceil(e),qe(e.getUTCFullYear()%1e4,t,4)}function W8(){return"+0000"}function _S(){return"%"}function jS(e){return+e}function SS(e){return Math.floor(+e/1e3)}var ha,LO,BO;H8({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function H8(e){return ha=H$(e),LO=ha.format,ha.parse,BO=ha.utcFormat,ha.utcParse,ha}function G8(e){return new Date(e)}function Y8(e){return e instanceof Date?+e:+new Date(+e)}function Nx(e,t,r,n,a,o,c,u,f,p){var h=dx(),m=h.invert,v=h.domain,b=p(".%L"),w=p(":%S"),_=p("%I:%M"),x=p("%I %p"),S=p("%a %d"),C=p("%b %d"),O=p("%B"),E=p("%Y");function A(N){return(f(N)<N?b:u(N)<N?w:c(N)<N?_:o(N)<N?x:n(N)<N?a(N)<N?S:C:r(N)<N?O:E)(N)}return h.invert=function(N){return new Date(m(N))},h.domain=function(N){return arguments.length?v(Array.from(N,Y8)):v().map(G8)},h.ticks=function(N){var P=v();return e(P[0],P[P.length-1],N??10)},h.tickFormat=function(N,P){return P==null?A:p(P)},h.nice=function(N){var P=v();return(!N||typeof N.range!="function")&&(N=t(P[0],P[P.length-1],N??10)),N?v(AO(P,N)):h},h.copy=function(){return Qs(h,Nx(e,t,r,n,a,o,c,u,f,p))},h}function V8(){return Or.apply(Nx(U$,W$,wn,jx,Vu,Zs,wx,xx,Si,LO).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function K8(){return Or.apply(Nx(z$,q$,_n,Sx,Ku,Yu,_x,bx,Si,BO).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function Xu(){var e=0,t=1,r,n,a,o,c=Vt,u=!1,f;function p(m){return m==null||isNaN(m=+m)?f:c(a===0?.5:(m=(o(m)-r)*a,u?Math.max(0,Math.min(1,m)):m))}p.domain=function(m){return arguments.length?([e,t]=m,r=o(e=+e),n=o(t=+t),a=r===n?0:1/(n-r),p):[e,t]},p.clamp=function(m){return arguments.length?(u=!!m,p):u},p.interpolator=function(m){return arguments.length?(c=m,p):c};function h(m){return function(v){var b,w;return arguments.length?([b,w]=v,c=m(b,w),p):[c(0),c(1)]}}return p.range=h(Qa),p.rangeRound=h(ux),p.unknown=function(m){return arguments.length?(f=m,p):f},function(m){return o=m,r=m(e),n=m(t),a=r===n?0:1/(n-r),p}}function ti(e,t){return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown())}function zO(){var e=ei(Xu()(Vt));return e.copy=function(){return ti(e,zO())},Nn.apply(e,arguments)}function qO(){var e=hx(Xu()).domain([1,10]);return e.copy=function(){return ti(e,qO()).base(e.base())},Nn.apply(e,arguments)}function UO(){var e=mx(Xu());return e.copy=function(){return ti(e,UO()).constant(e.constant())},Nn.apply(e,arguments)}function Ax(){var e=gx(Xu());return e.copy=function(){return ti(e,Ax()).exponent(e.exponent())},Nn.apply(e,arguments)}function X8(){return Ax.apply(null,arguments).exponent(.5)}function WO(){var e=[],t=Vt;function r(n){if(n!=null&&!isNaN(n=+n))return t((Ks(e,n,1)-1)/(e.length-1))}return r.domain=function(n){if(!arguments.length)return e.slice();e=[];for(let a of n)a!=null&&!isNaN(a=+a)&&e.push(a);return e.sort(Xn),r},r.interpolator=function(n){return arguments.length?(t=n,r):t},r.range=function(){return e.map((n,a)=>t(a/(e.length-1)))},r.quantiles=function(n){return Array.from({length:n+1},(a,o)=>MM(e,o/n))},r.copy=function(){return WO(t).domain(e)},Nn.apply(r,arguments)}function Qu(){var e=0,t=.5,r=1,n=1,a,o,c,u,f,p=Vt,h,m=!1,v;function b(_){return isNaN(_=+_)?v:(_=.5+((_=+h(_))-o)*(n*_<n*o?u:f),p(m?Math.max(0,Math.min(1,_)):_))}b.domain=function(_){return arguments.length?([e,t,r]=_,a=h(e=+e),o=h(t=+t),c=h(r=+r),u=a===o?0:.5/(o-a),f=o===c?0:.5/(c-o),n=o<a?-1:1,b):[e,t,r]},b.clamp=function(_){return arguments.length?(m=!!_,b):m},b.interpolator=function(_){return arguments.length?(p=_,b):p};function w(_){return function(x){var S,C,O;return arguments.length?([S,C,O]=x,p=l$(_,[S,C,O]),b):[p(0),p(.5),p(1)]}}return b.range=w(Qa),b.rangeRound=w(ux),b.unknown=function(_){return arguments.length?(v=_,b):v},function(_){return h=_,a=_(e),o=_(t),c=_(r),u=a===o?0:.5/(o-a),f=o===c?0:.5/(c-o),n=o<a?-1:1,b}}function HO(){var e=ei(Qu()(Vt));return e.copy=function(){return ti(e,HO())},Nn.apply(e,arguments)}function GO(){var e=hx(Qu()).domain([.1,1,10]);return e.copy=function(){return ti(e,GO()).base(e.base())},Nn.apply(e,arguments)}function YO(){var e=mx(Qu());return e.copy=function(){return ti(e,YO()).constant(e.constant())},Nn.apply(e,arguments)}function Cx(){var e=gx(Qu());return e.copy=function(){return ti(e,Cx()).exponent(e.exponent())},Nn.apply(e,arguments)}function Q8(){return Cx.apply(null,arguments).exponent(.5)}const NS=Object.freeze(Object.defineProperty({__proto__:null,scaleBand:fs,scaleDiverging:HO,scaleDivergingLog:GO,scaleDivergingPow:Cx,scaleDivergingSqrt:Q8,scaleDivergingSymlog:YO,scaleIdentity:NO,scaleImplicit:$v,scaleLinear:Xc,scaleLog:CO,scaleOrdinal:sx,scalePoint:rs,scalePow:vx,scaleQuantile:kO,scaleQuantize:PO,scaleRadial:EO,scaleSequential:zO,scaleSequentialLog:qO,scaleSequentialPow:Ax,scaleSequentialQuantile:WO,scaleSequentialSqrt:X8,scaleSequentialSymlog:UO,scaleSqrt:P$,scaleSymlog:OO,scaleThreshold:TO,scaleTime:V8,scaleUtc:K8,tickFormat:SO},Symbol.toStringTag,{value:"Module"}));var Sg,AS;function VO(){if(AS)return Sg;AS=1;var e=Va();function t(r,n,a){for(var o=-1,c=r.length;++o<c;){var u=r[o],f=n(u);if(f!=null&&(p===void 0?f===f&&!e(f):a(f,p)))var p=f,h=u}return h}return Sg=t,Sg}var Ng,CS;function Z8(){if(CS)return Ng;CS=1;function e(t,r){return t>r}return Ng=e,Ng}var Ag,OS;function J8(){if(OS)return Ag;OS=1;var e=VO(),t=Z8(),r=Xa();function n(a){return a&&a.length?e(a,r,t):void 0}return Ag=n,Ag}var eF=J8();const Zu=Je(eF);var Cg,ES;function tF(){if(ES)return Cg;ES=1;function e(t,r){return t<r}return Cg=e,Cg}var Og,kS;function rF(){if(kS)return Og;kS=1;var e=VO(),t=tF(),r=Xa();function n(a){return a&&a.length?e(a,r,t):void 0}return Og=n,Og}var nF=rF();const Ju=Je(nF);var Eg,PS;function iF(){if(PS)return Eg;PS=1;var e=qy(),t=Jn(),r=iO(),n=ar();function a(o,c){var u=n(o)?e:r;return u(o,t(c,3))}return Eg=a,Eg}var kg,TS;function aF(){if(TS)return kg;TS=1;var e=rO(),t=iF();function r(n,a){return e(t(n,a),1)}return kg=r,kg}var oF=aF();const sF=Je(oF);var Pg,RS;function lF(){if(RS)return Pg;RS=1;var e=tx();function t(r,n){return e(r,n)}return Pg=t,Pg}var cF=lF();const Ox=Je(cF);var Za=1e9,uF={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},kx,st=!0,Cr="[DecimalError] ",Oi=Cr+"Invalid argument: ",Ex=Cr+"Exponent out of range: ",Ja=Math.floor,bi=Math.pow,dF=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,hr,kt=1e7,it=7,KO=9007199254740991,eu=Ja(KO/it),be={};be.absoluteValue=be.abs=function(){var e=new this.constructor(this);return e.s&&(e.s=1),e};be.comparedTo=be.cmp=function(e){var t,r,n,a,o=this;if(e=new o.constructor(e),o.s!==e.s)return o.s||-e.s;if(o.e!==e.e)return o.e>e.e^o.s<0?1:-1;for(n=o.d.length,a=e.d.length,t=0,r=n<a?n:a;t<r;++t)if(o.d[t]!==e.d[t])return o.d[t]>e.d[t]^o.s<0?1:-1;return n===a?0:n>a^o.s<0?1:-1};be.decimalPlaces=be.dp=function(){var e=this,t=e.d.length-1,r=(t-e.e)*it;if(t=e.d[t],t)for(;t%10==0;t/=10)r--;return r<0?0:r};be.dividedBy=be.div=function(e){return xn(this,new this.constructor(e))};be.dividedToIntegerBy=be.idiv=function(e){var t=this,r=t.constructor;return Ze(xn(t,new r(e),0,1),r.precision)};be.equals=be.eq=function(e){return!this.cmp(e)};be.exponent=function(){return xt(this)};be.greaterThan=be.gt=function(e){return this.cmp(e)>0};be.greaterThanOrEqualTo=be.gte=function(e){return this.cmp(e)>=0};be.isInteger=be.isint=function(){return this.e>this.d.length-2};be.isNegative=be.isneg=function(){return this.s<0};be.isPositive=be.ispos=function(){return this.s>0};be.isZero=function(){return this.s===0};be.lessThan=be.lt=function(e){return this.cmp(e)<0};be.lessThanOrEqualTo=be.lte=function(e){return this.cmp(e)<1};be.logarithm=be.log=function(e){var t,r=this,n=r.constructor,a=n.precision,o=a+5;if(e===void 0)e=new n(10);else if(e=new n(e),e.s<1||e.eq(hr))throw Error(Cr+"NaN");if(r.s<1)throw Error(Cr+(r.s?"NaN":"-Infinity"));return r.eq(hr)?new n(0):(st=!1,t=xn(vs(r,o),vs(e,o),o),st=!0,Ze(t,a))};be.minus=be.sub=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?ZO(t,e):XO(t,(e.s=-e.s,e))};be.modulo=be.mod=function(e){var t,r=this,n=r.constructor,a=n.precision;if(e=new n(e),!e.s)throw Error(Cr+"NaN");return r.s?(st=!1,t=xn(r,e,0,1).times(e),st=!0,r.minus(t)):Ze(new n(r),a)};be.naturalExponential=be.exp=function(){return QO(this)};be.naturalLogarithm=be.ln=function(){return vs(this)};be.negated=be.neg=function(){var e=new this.constructor(this);return e.s=-e.s||0,e};be.plus=be.add=function(e){var t=this;return e=new t.constructor(e),t.s==e.s?XO(t,e):ZO(t,(e.s=-e.s,e))};be.precision=be.sd=function(e){var t,r,n,a=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(Oi+e);if(t=xt(a)+1,n=a.d.length-1,r=n*it+1,n=a.d[n],n){for(;n%10==0;n/=10)r--;for(n=a.d[0];n>=10;n/=10)r++}return e&&t>r?t:r};be.squareRoot=be.sqrt=function(){var e,t,r,n,a,o,c,u=this,f=u.constructor;if(u.s<1){if(!u.s)return new f(0);throw Error(Cr+"NaN")}for(e=xt(u),st=!1,a=Math.sqrt(+u),a==0||a==1/0?(t=Xr(u.d),(t.length+e)%2==0&&(t+="0"),a=Math.sqrt(t),e=Ja((e+1)/2)-(e<0||e%2),a==1/0?t="5e"+e:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+e),n=new f(t)):n=new f(a.toString()),r=f.precision,a=c=r+3;;)if(o=n,n=o.plus(xn(u,o,c+2)).times(.5),Xr(o.d).slice(0,c)===(t=Xr(n.d)).slice(0,c)){if(t=t.slice(c-3,c+1),a==c&&t=="4999"){if(Ze(o,r+1,0),o.times(o).eq(u)){n=o;break}}else if(t!="9999")break;c+=4}return st=!0,Ze(n,r)};be.times=be.mul=function(e){var t,r,n,a,o,c,u,f,p,h=this,m=h.constructor,v=h.d,b=(e=new m(e)).d;if(!h.s||!e.s)return new m(0);for(e.s*=h.s,r=h.e+e.e,f=v.length,p=b.length,f<p&&(o=v,v=b,b=o,c=f,f=p,p=c),o=[],c=f+p,n=c;n--;)o.push(0);for(n=p;--n>=0;){for(t=0,a=f+n;a>n;)u=o[a]+b[n]*v[a-n-1]+t,o[a--]=u%kt|0,t=u/kt|0;o[a]=(o[a]+t)%kt|0}for(;!o[--c];)o.pop();return t?++r:o.shift(),e.d=o,e.e=r,st?Ze(e,m.precision):e};be.toDecimalPlaces=be.todp=function(e,t){var r=this,n=r.constructor;return r=new n(r),e===void 0?r:(Jr(e,0,Za),t===void 0?t=n.rounding:Jr(t,0,8),Ze(r,e+xt(r)+1,t))};be.toExponential=function(e,t){var r,n=this,a=n.constructor;return e===void 0?r=Ri(n,!0):(Jr(e,0,Za),t===void 0?t=a.rounding:Jr(t,0,8),n=Ze(new a(n),e+1,t),r=Ri(n,!0,e+1)),r};be.toFixed=function(e,t){var r,n,a=this,o=a.constructor;return e===void 0?Ri(a):(Jr(e,0,Za),t===void 0?t=o.rounding:Jr(t,0,8),n=Ze(new o(a),e+xt(a)+1,t),r=Ri(n.abs(),!1,e+xt(n)+1),a.isneg()&&!a.isZero()?"-"+r:r)};be.toInteger=be.toint=function(){var e=this,t=e.constructor;return Ze(new t(e),xt(e)+1,t.rounding)};be.toNumber=function(){return+this};be.toPower=be.pow=function(e){var t,r,n,a,o,c,u=this,f=u.constructor,p=12,h=+(e=new f(e));if(!e.s)return new f(hr);if(u=new f(u),!u.s){if(e.s<1)throw Error(Cr+"Infinity");return u}if(u.eq(hr))return u;if(n=f.precision,e.eq(hr))return Ze(u,n);if(t=e.e,r=e.d.length-1,c=t>=r,o=u.s,c){if((r=h<0?-h:h)<=KO){for(a=new f(hr),t=Math.ceil(n/it+4),st=!1;r%2&&(a=a.times(u),IS(a.d,t)),r=Ja(r/2),r!==0;)u=u.times(u),IS(u.d,t);return st=!0,e.s<0?new f(hr).div(a):Ze(a,n)}}else if(o<0)throw Error(Cr+"NaN");return o=o<0&&e.d[Math.max(t,r)]&1?-1:1,u.s=1,st=!1,a=e.times(vs(u,n+p)),st=!0,a=QO(a),a.s=o,a};be.toPrecision=function(e,t){var r,n,a=this,o=a.constructor;return e===void 0?(r=xt(a),n=Ri(a,r<=o.toExpNeg||r>=o.toExpPos)):(Jr(e,1,Za),t===void 0?t=o.rounding:Jr(t,0,8),a=Ze(new o(a),e,t),r=xt(a),n=Ri(a,e<=r||r<=o.toExpNeg,e)),n};be.toSignificantDigits=be.tosd=function(e,t){var r=this,n=r.constructor;return e===void 0?(e=n.precision,t=n.rounding):(Jr(e,1,Za),t===void 0?t=n.rounding:Jr(t,0,8)),Ze(new n(r),e,t)};be.toString=be.valueOf=be.val=be.toJSON=be[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=xt(e),r=e.constructor;return Ri(e,t<=r.toExpNeg||t>=r.toExpPos)};function XO(e,t){var r,n,a,o,c,u,f,p,h=e.constructor,m=h.precision;if(!e.s||!t.s)return t.s||(t=new h(e)),st?Ze(t,m):t;if(f=e.d,p=t.d,c=e.e,a=t.e,f=f.slice(),o=c-a,o){for(o<0?(n=f,o=-o,u=p.length):(n=p,a=c,u=f.length),c=Math.ceil(m/it),u=c>u?c+1:u+1,o>u&&(o=u,n.length=1),n.reverse();o--;)n.push(0);n.reverse()}for(u=f.length,o=p.length,u-o<0&&(o=u,n=p,p=f,f=n),r=0;o;)r=(f[--o]=f[o]+p[o]+r)/kt|0,f[o]%=kt;for(r&&(f.unshift(r),++a),u=f.length;f[--u]==0;)f.pop();return t.d=f,t.e=a,st?Ze(t,m):t}function Jr(e,t,r){if(e!==~~e||e<t||e>r)throw Error(Oi+e)}function Xr(e){var t,r,n,a=e.length-1,o="",c=e[0];if(a>0){for(o+=c,t=1;t<a;t++)n=e[t]+"",r=it-n.length,r&&(o+=Gn(r)),o+=n;c=e[t],n=c+"",r=it-n.length,r&&(o+=Gn(r))}else if(c===0)return"0";for(;c%10===0;)c/=10;return o+c}var xn=(function(){function e(n,a){var o,c=0,u=n.length;for(n=n.slice();u--;)o=n[u]*a+c,n[u]=o%kt|0,c=o/kt|0;return c&&n.unshift(c),n}function t(n,a,o,c){var u,f;if(o!=c)f=o>c?1:-1;else for(u=f=0;u<o;u++)if(n[u]!=a[u]){f=n[u]>a[u]?1:-1;break}return f}function r(n,a,o){for(var c=0;o--;)n[o]-=c,c=n[o]<a[o]?1:0,n[o]=c*kt+n[o]-a[o];for(;!n[0]&&n.length>1;)n.shift()}return function(n,a,o,c){var u,f,p,h,m,v,b,w,_,x,S,C,O,E,A,N,P,R,D=n.constructor,G=n.s==a.s?1:-1,q=n.d,M=a.d;if(!n.s)return new D(n);if(!a.s)throw Error(Cr+"Division by zero");for(f=n.e-a.e,P=M.length,A=q.length,b=new D(G),w=b.d=[],p=0;M[p]==(q[p]||0);)++p;if(M[p]>(q[p]||0)&&--f,o==null?C=o=D.precision:c?C=o+(xt(n)-xt(a))+1:C=o,C<0)return new D(0);if(C=C/it+2|0,p=0,P==1)for(h=0,M=M[0],C++;(p<A||h)&&C--;p++)O=h*kt+(q[p]||0),w[p]=O/M|0,h=O%M|0;else{for(h=kt/(M[0]+1)|0,h>1&&(M=e(M,h),q=e(q,h),P=M.length,A=q.length),E=P,_=q.slice(0,P),x=_.length;x<P;)_[x++]=0;R=M.slice(),R.unshift(0),N=M[0],M[1]>=kt/2&&++N;do h=0,u=t(M,_,P,x),u<0?(S=_[0],P!=x&&(S=S*kt+(_[1]||0)),h=S/N|0,h>1?(h>=kt&&(h=kt-1),m=e(M,h),v=m.length,x=_.length,u=t(m,_,v,x),u==1&&(h--,r(m,P<v?R:M,v))):(h==0&&(u=h=1),m=M.slice()),v=m.length,v<x&&m.unshift(0),r(_,m,x),u==-1&&(x=_.length,u=t(M,_,P,x),u<1&&(h++,r(_,P<x?R:M,x))),x=_.length):u===0&&(h++,_=[0]),w[p++]=h,u&&_[0]?_[x++]=q[E]||0:(_=[q[E]],x=1);while((E++<A||_[0]!==void 0)&&C--)}return w[0]||w.shift(),b.e=f,Ze(b,c?o+xt(b)+1:o)}})();function QO(e,t){var r,n,a,o,c,u,f=0,p=0,h=e.constructor,m=h.precision;if(xt(e)>16)throw Error(Ex+xt(e));if(!e.s)return new h(hr);for(st=!1,u=m,c=new h(.03125);e.abs().gte(.1);)e=e.times(c),p+=5;for(n=Math.log(bi(2,p))/Math.LN10*2+5|0,u+=n,r=a=o=new h(hr),h.precision=u;;){if(a=Ze(a.times(e),u),r=r.times(++f),c=o.plus(xn(a,r,u)),Xr(c.d).slice(0,u)===Xr(o.d).slice(0,u)){for(;p--;)o=Ze(o.times(o),u);return h.precision=m,t==null?(st=!0,Ze(o,m)):o}o=c}}function xt(e){for(var t=e.e*it,r=e.d[0];r>=10;r/=10)t++;return t}function Tg(e,t,r){if(t>e.LN10.sd())throw st=!0,r&&(e.precision=r),Error(Cr+"LN10 precision limit exceeded");return Ze(new e(e.LN10),t)}function Gn(e){for(var t="";e--;)t+="0";return t}function vs(e,t){var r,n,a,o,c,u,f,p,h,m=1,v=10,b=e,w=b.d,_=b.constructor,x=_.precision;if(b.s<1)throw Error(Cr+(b.s?"NaN":"-Infinity"));if(b.eq(hr))return new _(0);if(t==null?(st=!1,p=x):p=t,b.eq(10))return t==null&&(st=!0),Tg(_,p);if(p+=v,_.precision=p,r=Xr(w),n=r.charAt(0),o=xt(b),Math.abs(o)<15e14){for(;n<7&&n!=1||n==1&&r.charAt(1)>3;)b=b.times(e),r=Xr(b.d),n=r.charAt(0),m++;o=xt(b),n>1?(b=new _("0."+r),o++):b=new _(n+"."+r.slice(1))}else return f=Tg(_,p+2,x).times(o+""),b=vs(new _(n+"."+r.slice(1)),p-v).plus(f),_.precision=x,t==null?(st=!0,Ze(b,x)):b;for(u=c=b=xn(b.minus(hr),b.plus(hr),p),h=Ze(b.times(b),p),a=3;;){if(c=Ze(c.times(h),p),f=u.plus(xn(c,new _(a),p)),Xr(f.d).slice(0,p)===Xr(u.d).slice(0,p))return u=u.times(2),o!==0&&(u=u.plus(Tg(_,p+2,x).times(o+""))),u=xn(u,new _(m),p),_.precision=x,t==null?(st=!0,Ze(u,x)):u;u=f,a+=2}}function DS(e,t){var r,n,a;for((r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),n=0;t.charCodeAt(n)===48;)++n;for(a=t.length;t.charCodeAt(a-1)===48;)--a;if(t=t.slice(n,a),t){if(a-=n,r=r-n-1,e.e=Ja(r/it),e.d=[],n=(r+1)%it,r<0&&(n+=it),n<a){for(n&&e.d.push(+t.slice(0,n)),a-=it;n<a;)e.d.push(+t.slice(n,n+=it));t=t.slice(n),n=it-t.length}else n-=a;for(;n--;)t+="0";if(e.d.push(+t),st&&(e.e>eu||e.e<-eu))throw Error(Ex+r)}else e.s=0,e.e=0,e.d=[0];return e}function Ze(e,t,r){var n,a,o,c,u,f,p,h,m=e.d;for(c=1,o=m[0];o>=10;o/=10)c++;if(n=t-c,n<0)n+=it,a=t,p=m[h=0];else{if(h=Math.ceil((n+1)/it),o=m.length,h>=o)return e;for(p=o=m[h],c=1;o>=10;o/=10)c++;n%=it,a=n-it+c}if(r!==void 0&&(o=bi(10,c-a-1),u=p/o%10|0,f=t<0||m[h+1]!==void 0||p%o,f=r<4?(u||f)&&(r==0||r==(e.s<0?3:2)):u>5||u==5&&(r==4||f||r==6&&(n>0?a>0?p/bi(10,c-a):0:m[h-1])%10&1||r==(e.s<0?8:7))),t<1||!m[0])return f?(o=xt(e),m.length=1,t=t-o-1,m[0]=bi(10,(it-t%it)%it),e.e=Ja(-t/it)||0):(m.length=1,m[0]=e.e=e.s=0),e;if(n==0?(m.length=h,o=1,h--):(m.length=h+1,o=bi(10,it-n),m[h]=a>0?(p/bi(10,c-a)%bi(10,a)|0)*o:0),f)for(;;)if(h==0){(m[0]+=o)==kt&&(m[0]=1,++e.e);break}else{if(m[h]+=o,m[h]!=kt)break;m[h--]=0,o=1}for(n=m.length;m[--n]===0;)m.pop();if(st&&(e.e>eu||e.e<-eu))throw Error(Ex+xt(e));return e}function ZO(e,t){var r,n,a,o,c,u,f,p,h,m,v=e.constructor,b=v.precision;if(!e.s||!t.s)return t.s?t.s=-t.s:t=new v(e),st?Ze(t,b):t;if(f=e.d,m=t.d,n=t.e,p=e.e,f=f.slice(),c=p-n,c){for(h=c<0,h?(r=f,c=-c,u=m.length):(r=m,n=p,u=f.length),a=Math.max(Math.ceil(b/it),u)+2,c>a&&(c=a,r.length=1),r.reverse(),a=c;a--;)r.push(0);r.reverse()}else{for(a=f.length,u=m.length,h=a<u,h&&(u=a),a=0;a<u;a++)if(f[a]!=m[a]){h=f[a]<m[a];break}c=0}for(h&&(r=f,f=m,m=r,t.s=-t.s),u=f.length,a=m.length-u;a>0;--a)f[u++]=0;for(a=m.length;a>c;){if(f[--a]<m[a]){for(o=a;o&&f[--o]===0;)f[o]=kt-1;--f[o],f[a]+=kt}f[a]-=m[a]}for(;f[--u]===0;)f.pop();for(;f[0]===0;f.shift())--n;return f[0]?(t.d=f,t.e=n,st?Ze(t,b):t):new v(0)}function Ri(e,t,r){var n,a=xt(e),o=Xr(e.d),c=o.length;return t?(r&&(n=r-c)>0?o=o.charAt(0)+"."+o.slice(1)+Gn(n):c>1&&(o=o.charAt(0)+"."+o.slice(1)),o=o+(a<0?"e":"e+")+a):a<0?(o="0."+Gn(-a-1)+o,r&&(n=r-c)>0&&(o+=Gn(n))):a>=c?(o+=Gn(a+1-c),r&&(n=r-a-1)>0&&(o=o+"."+Gn(n))):((n=a+1)<c&&(o=o.slice(0,n)+"."+o.slice(n)),r&&(n=r-c)>0&&(a+1===c&&(o+="."),o+=Gn(n))),e.s<0?"-"+o:o}function IS(e,t){if(e.length>t)return e.length=t,!0}function JO(e){var t,r,n;function a(o){var c=this;if(!(c instanceof a))return new a(o);if(c.constructor=a,o instanceof a){c.s=o.s,c.e=o.e,c.d=(o=o.d)?o.slice():o;return}if(typeof o=="number"){if(o*0!==0)throw Error(Oi+o);if(o>0)c.s=1;else if(o<0)o=-o,c.s=-1;else{c.s=0,c.e=0,c.d=[0];return}if(o===~~o&&o<1e7){c.e=0,c.d=[o];return}return DS(c,o.toString())}else if(typeof o!="string")throw Error(Oi+o);if(o.charCodeAt(0)===45?(o=o.slice(1),c.s=-1):c.s=1,dF.test(o))DS(c,o);else throw Error(Oi+o)}if(a.prototype=be,a.ROUND_UP=0,a.ROUND_DOWN=1,a.ROUND_CEIL=2,a.ROUND_FLOOR=3,a.ROUND_HALF_UP=4,a.ROUND_HALF_DOWN=5,a.ROUND_HALF_EVEN=6,a.ROUND_HALF_CEIL=7,a.ROUND_HALF_FLOOR=8,a.clone=JO,a.config=a.set=fF,e===void 0&&(e={}),e)for(n=["precision","rounding","toExpNeg","toExpPos","LN10"],t=0;t<n.length;)e.hasOwnProperty(r=n[t++])||(e[r]=this[r]);return a.config(e),a}function fF(e){if(!e||typeof e!="object")throw Error(Cr+"Object expected");var t,r,n,a=["precision",1,Za,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<a.length;t+=3)if((n=e[r=a[t]])!==void 0)if(Ja(n)===n&&n>=a[t+1]&&n<=a[t+2])this[r]=n;else throw Error(Oi+r+": "+n);if((n=e[r="LN10"])!==void 0)if(n==Math.LN10)this[r]=new this(n);else throw Error(Oi+r+": "+n);return this}var kx=JO(uF);hr=new kx(1);const Qe=kx;function pF(e){return vF(e)||gF(e)||mF(e)||hF()}function hF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mF(e,t){if(e){if(typeof e=="string")return zv(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return zv(e,t)}}function gF(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function vF(e){if(Array.isArray(e))return zv(e)}function zv(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var yF=function(t){return t},eE={},tE=function(t){return t===eE},MS=function(t){return function r(){return arguments.length===0||arguments.length===1&&tE(arguments.length<=0?void 0:arguments[0])?r:t.apply(void 0,arguments)}},xF=function e(t,r){return t===1?r:MS(function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];var c=a.filter(function(u){return u!==eE}).length;return c>=t?r.apply(void 0,a):e(t-c,MS(function(){for(var u=arguments.length,f=new Array(u),p=0;p<u;p++)f[p]=arguments[p];var h=a.map(function(m){return tE(m)?f.shift():m});return r.apply(void 0,pF(h).concat(f))}))})},ed=function(t){return xF(t.length,t)},qv=function(t,r){for(var n=[],a=t;a<r;++a)n[a-t]=a;return n},bF=ed(function(e,t){return Array.isArray(t)?t.map(e):Object.keys(t).map(function(r){return t[r]}).map(e)}),wF=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(!r.length)return yF;var a=r.reverse(),o=a[0],c=a.slice(1);return function(){return c.reduce(function(u,f){return f(u)},o.apply(void 0,arguments))}},Uv=function(t){return Array.isArray(t)?t.reverse():t.split("").reverse.join("")},rE=function(t){var r=null,n=null;return function(){for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return r&&o.every(function(u,f){return u===r[f]})||(r=o,n=t.apply(void 0,o)),n}};function _F(e){var t;return e===0?t=1:t=Math.floor(new Qe(e).abs().log(10).toNumber())+1,t}function jF(e,t,r){for(var n=new Qe(e),a=0,o=[];n.lt(t)&&a<1e5;)o.push(n.toNumber()),n=n.add(r),a++;return o}var SF=ed(function(e,t,r){var n=+e,a=+t;return n+r*(a-n)}),NF=ed(function(e,t,r){var n=t-+e;return n=n||1/0,(r-e)/n}),AF=ed(function(e,t,r){var n=t-+e;return n=n||1/0,Math.max(0,Math.min(1,(r-e)/n))});const td={rangeStep:jF,getDigitCount:_F,interpolateNumber:SF,uninterpolateNumber:NF,uninterpolateTruncation:AF};function Wv(e){return EF(e)||OF(e)||nE(e)||CF()}function CF(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OF(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function EF(e){if(Array.isArray(e))return Hv(e)}function ys(e,t){return TF(e)||PF(e,t)||nE(e,t)||kF()}function kF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nE(e,t){if(e){if(typeof e=="string")return Hv(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Hv(e,t)}}function Hv(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function PF(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var r=[],n=!0,a=!1,o=void 0;try{for(var c=e[Symbol.iterator](),u;!(n=(u=c.next()).done)&&(r.push(u.value),!(t&&r.length===t));n=!0);}catch(f){a=!0,o=f}finally{try{!n&&c.return!=null&&c.return()}finally{if(a)throw o}}return r}}function TF(e){if(Array.isArray(e))return e}function iE(e){var t=ys(e,2),r=t[0],n=t[1],a=r,o=n;return r>n&&(a=n,o=r),[a,o]}function aE(e,t,r){if(e.lte(0))return new Qe(0);var n=td.getDigitCount(e.toNumber()),a=new Qe(10).pow(n),o=e.div(a),c=n!==1?.05:.1,u=new Qe(Math.ceil(o.div(c).toNumber())).add(r).mul(c),f=u.mul(a);return t?f:new Qe(Math.ceil(f))}function RF(e,t,r){var n=1,a=new Qe(e);if(!a.isint()&&r){var o=Math.abs(e);o<1?(n=new Qe(10).pow(td.getDigitCount(e)-1),a=new Qe(Math.floor(a.div(n).toNumber())).mul(n)):o>1&&(a=new Qe(Math.floor(e)))}else e===0?a=new Qe(Math.floor((t-1)/2)):r||(a=new Qe(Math.floor(e)));var c=Math.floor((t-1)/2),u=wF(bF(function(f){return a.add(new Qe(f-c).mul(n)).toNumber()}),qv);return u(0,t)}function oE(e,t,r,n){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0;if(!Number.isFinite((t-e)/(r-1)))return{step:new Qe(0),tickMin:new Qe(0),tickMax:new Qe(0)};var o=aE(new Qe(t).sub(e).div(r-1),n,a),c;e<=0&&t>=0?c=new Qe(0):(c=new Qe(e).add(t).div(2),c=c.sub(new Qe(c).mod(o)));var u=Math.ceil(c.sub(e).div(o).toNumber()),f=Math.ceil(new Qe(t).sub(c).div(o).toNumber()),p=u+f+1;return p>r?oE(e,t,r,n,a+1):(p<r&&(f=t>0?f+(r-p):f,u=t>0?u:u+(r-p)),{step:o,tickMin:c.sub(new Qe(u).mul(o)),tickMax:c.add(new Qe(f).mul(o))})}function DF(e){var t=ys(e,2),r=t[0],n=t[1],a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:6,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,c=Math.max(a,2),u=iE([r,n]),f=ys(u,2),p=f[0],h=f[1];if(p===-1/0||h===1/0){var m=h===1/0?[p].concat(Wv(qv(0,a-1).map(function(){return 1/0}))):[].concat(Wv(qv(0,a-1).map(function(){return-1/0})),[h]);return r>n?Uv(m):m}if(p===h)return RF(p,a,o);var v=oE(p,h,c,o),b=v.step,w=v.tickMin,_=v.tickMax,x=td.rangeStep(w,_.add(new Qe(.1).mul(b)),b);return r>n?Uv(x):x}function IF(e,t){var r=ys(e,2),n=r[0],a=r[1],o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,c=iE([n,a]),u=ys(c,2),f=u[0],p=u[1];if(f===-1/0||p===1/0)return[n,a];if(f===p)return[f];var h=Math.max(t,2),m=aE(new Qe(p).sub(f).div(h-1),o,0),v=[].concat(Wv(td.rangeStep(new Qe(f),new Qe(p).sub(new Qe(.99).mul(m)),m)),[p]);return n>a?Uv(v):v}var MF=rE(DF),$F=rE(IF),FF="Invariant failed";function Di(e,t){throw new Error(FF)}var LF=["offset","layout","width","dataKey","data","dataPointFormatter","xAxis","yAxis"];function Da(e){"@babel/helpers - typeof";return Da=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Da(e)}function tu(){return tu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},tu.apply(this,arguments)}function BF(e,t){return WF(e)||UF(e,t)||qF(e,t)||zF()}function zF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qF(e,t){if(e){if(typeof e=="string")return $S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return $S(e,t)}}function $S(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function UF(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,c,u=[],f=!0,p=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(h){p=!0,a=h}finally{try{if(!f&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw a}}return u}}function WF(e){if(Array.isArray(e))return e}function HF(e,t){if(e==null)return{};var r=GF(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function GF(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function YF(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function VF(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,cE(n.key),n)}}function KF(e,t,r){return t&&VF(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function XF(e,t,r){return t=ru(t),QF(e,sE()?Reflect.construct(t,r||[],ru(e).constructor):t.apply(e,r))}function QF(e,t){if(t&&(Da(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ZF(e)}function ZF(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function sE(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(sE=function(){return!!e})()}function ru(e){return ru=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ru(e)}function JF(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Gv(e,t)}function Gv(e,t){return Gv=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Gv(e,t)}function lE(e,t,r){return t=cE(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function cE(e){var t=e6(e,"string");return Da(t)=="symbol"?t:t+""}function e6(e,t){if(Da(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Da(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var rd=(function(e){function t(){return YF(this,t),XF(this,t,arguments)}return JF(t,e),KF(t,[{key:"render",value:function(){var n=this.props,a=n.offset,o=n.layout,c=n.width,u=n.dataKey,f=n.data,p=n.dataPointFormatter,h=n.xAxis,m=n.yAxis,v=HF(n,LF),b=Ue(v,!1);this.props.direction==="x"&&h.type!=="number"&&Di();var w=f.map(function(_){var x=p(_,u),S=x.x,C=x.y,O=x.value,E=x.errorVal;if(!E)return null;var A=[],N,P;if(Array.isArray(E)){var R=BF(E,2);N=R[0],P=R[1]}else N=P=E;if(o==="vertical"){var D=h.scale,G=C+a,q=G+c,M=G-c,H=D(O-N),B=D(O+P);A.push({x1:B,y1:q,x2:B,y2:M}),A.push({x1:H,y1:G,x2:B,y2:G}),A.push({x1:H,y1:q,x2:H,y2:M})}else if(o==="horizontal"){var F=m.scale,Y=S+a,J=Y-c,U=Y+c,X=F(O-N),K=F(O+P);A.push({x1:J,y1:K,x2:U,y2:K}),A.push({x1:Y,y1:X,x2:Y,y2:K}),A.push({x1:J,y1:X,x2:U,y2:X})}return V.createElement(Pt,tu({className:"recharts-errorBar",key:"bar-".concat(A.map(function(I){return"".concat(I.x1,"-").concat(I.x2,"-").concat(I.y1,"-").concat(I.y2)}))},b),A.map(function(I){return V.createElement("line",tu({},I,{key:"line-".concat(I.x1,"-").concat(I.x2,"-").concat(I.y1,"-").concat(I.y2)}))}))});return V.createElement(Pt,{className:"recharts-errorBars"},w)}}])})(V.Component);lE(rd,"defaultProps",{stroke:"black",strokeWidth:1.5,width:5,offset:0,layout:"horizontal"});lE(rd,"displayName","ErrorBar");function xs(e){"@babel/helpers - typeof";return xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xs(e)}function FS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function yi(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?FS(Object(r),!0).forEach(function(n){t6(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):FS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function t6(e,t,r){return t=r6(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function r6(e){var t=n6(e,"string");return xs(t)=="symbol"?t:t+""}function n6(e,t){if(xs(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(xs(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var uE=function(t){var r=t.children,n=t.formattedGraphicalItems,a=t.legendWidth,o=t.legendContent,c=pr(r,wa);if(!c)return null;var u=wa.defaultProps,f=u!==void 0?yi(yi({},u),c.props):{},p;return c.props&&c.props.payload?p=c.props&&c.props.payload:o==="children"?p=(n||[]).reduce(function(h,m){var v=m.item,b=m.props,w=b.sectors||b.data||[];return h.concat(w.map(function(_){return{type:c.props.iconType||v.props.legendType,value:_.name,color:_.fill,payload:_}}))},[]):p=(n||[]).map(function(h){var m=h.item,v=m.type.defaultProps,b=v!==void 0?yi(yi({},v),m.props):{},w=b.dataKey,_=b.name,x=b.legendType,S=b.hide;return{inactive:S,dataKey:w,type:f.iconType||x||"square",color:Px(m),value:_||w,payload:b}}),yi(yi(yi({},f),wa.getWithHeight(c,a)),{},{payload:p,item:c})};function bs(e){"@babel/helpers - typeof";return bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bs(e)}function LS(e){return s6(e)||o6(e)||a6(e)||i6()}function i6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function a6(e,t){if(e){if(typeof e=="string")return Yv(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Yv(e,t)}}function o6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function s6(e){if(Array.isArray(e))return Yv(e)}function Yv(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function BS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function dt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?BS(Object(r),!0).forEach(function(n){ja(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):BS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ja(e,t,r){return t=l6(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l6(e){var t=c6(e,"string");return bs(t)=="symbol"?t:t+""}function c6(e,t){if(bs(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(bs(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function en(e,t,r){return He(e)||He(t)?r:Nt(t)?Ar(e,t,r):$e(t)?t(e):r}function ns(e,t,r,n){var a=sF(e,function(u){return en(u,t)});if(r==="number"){var o=a.filter(function(u){return he(u)||parseFloat(u)});return o.length?[Ju(o),Zu(o)]:[1/0,-1/0]}var c=n?a.filter(function(u){return!He(u)}):a;return c.map(function(u){return Nt(u)||u instanceof Date?u:""})}var u6=function(t){var r,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,c=-1,u=(r=n?.length)!==null&&r!==void 0?r:0;if(u<=1)return 0;if(o&&o.axisType==="angleAxis"&&Math.abs(Math.abs(o.range[1]-o.range[0])-360)<=1e-6)for(var f=o.range,p=0;p<u;p++){var h=p>0?a[p-1].coordinate:a[u-1].coordinate,m=a[p].coordinate,v=p>=u-1?a[0].coordinate:a[p+1].coordinate,b=void 0;if(Br(m-h)!==Br(v-m)){var w=[];if(Br(v-m)===Br(f[1]-f[0])){b=v;var _=m+f[1]-f[0];w[0]=Math.min(_,(_+h)/2),w[1]=Math.max(_,(_+h)/2)}else{b=h;var x=v+f[1]-f[0];w[0]=Math.min(m,(x+m)/2),w[1]=Math.max(m,(x+m)/2)}var S=[Math.min(m,(b+m)/2),Math.max(m,(b+m)/2)];if(t>S[0]&&t<=S[1]||t>=w[0]&&t<=w[1]){c=a[p].index;break}}else{var C=Math.min(h,v),O=Math.max(h,v);if(t>(C+m)/2&&t<=(O+m)/2){c=a[p].index;break}}}else for(var E=0;E<u;E++)if(E===0&&t<=(n[E].coordinate+n[E+1].coordinate)/2||E>0&&E<u-1&&t>(n[E].coordinate+n[E-1].coordinate)/2&&t<=(n[E].coordinate+n[E+1].coordinate)/2||E===u-1&&t>(n[E].coordinate+n[E-1].coordinate)/2){c=n[E].index;break}return c},Px=function(t){var r,n=t,a=n.type.displayName,o=(r=t.type)!==null&&r!==void 0&&r.defaultProps?dt(dt({},t.type.defaultProps),t.props):t.props,c=o.stroke,u=o.fill,f;switch(a){case"Line":f=c;break;case"Area":case"Radar":f=c&&c!=="none"?c:u;break;default:f=u;break}return f},d6=function(t){var r=t.barSize,n=t.totalSize,a=t.stackGroups,o=a===void 0?{}:a;if(!o)return{};for(var c={},u=Object.keys(o),f=0,p=u.length;f<p;f++)for(var h=o[u[f]].stackGroups,m=Object.keys(h),v=0,b=m.length;v<b;v++){var w=h[m[v]],_=w.items,x=w.cateAxisId,S=_.filter(function(P){return vn(P.type).indexOf("Bar")>=0});if(S&&S.length){var C=S[0].type.defaultProps,O=C!==void 0?dt(dt({},C),S[0].props):S[0].props,E=O.barSize,A=O[x];c[A]||(c[A]=[]);var N=He(E)?r:E;c[A].push({item:S[0],stackList:S.slice(1),barSize:He(N)?void 0:Ti(N,n,0)})}}return c},f6=function(t){var r=t.barGap,n=t.barCategoryGap,a=t.bandSize,o=t.sizeList,c=o===void 0?[]:o,u=t.maxBarSize,f=c.length;if(f<1)return null;var p=Ti(r,a,0,!0),h,m=[];if(c[0].barSize===+c[0].barSize){var v=!1,b=a/f,w=c.reduce(function(E,A){return E+A.barSize||0},0);w+=(f-1)*p,w>=a&&(w-=(f-1)*p,p=0),w>=a&&b>0&&(v=!0,b*=.9,w=f*b);var _=(a-w)/2>>0,x={offset:_-p,size:0};h=c.reduce(function(E,A){var N={item:A.item,position:{offset:x.offset+x.size+p,size:v?b:A.barSize}},P=[].concat(LS(E),[N]);return x=P[P.length-1].position,A.stackList&&A.stackList.length&&A.stackList.forEach(function(R){P.push({item:R,position:x})}),P},m)}else{var S=Ti(n,a,0,!0);a-2*S-(f-1)*p<=0&&(p=0);var C=(a-2*S-(f-1)*p)/f;C>1&&(C>>=0);var O=u===+u?Math.min(C,u):C;h=c.reduce(function(E,A,N){var P=[].concat(LS(E),[{item:A.item,position:{offset:S+(C+p)*N+(C-O)/2,size:O}}]);return A.stackList&&A.stackList.length&&A.stackList.forEach(function(R){P.push({item:R,position:P[P.length-1].position})}),P},m)}return h},p6=function(t,r,n,a){var o=n.children,c=n.width,u=n.margin,f=c-(u.left||0)-(u.right||0),p=uE({children:o,legendWidth:f});if(p){var h=a||{},m=h.width,v=h.height,b=p.align,w=p.verticalAlign,_=p.layout;if((_==="vertical"||_==="horizontal"&&w==="middle")&&b!=="center"&&he(t[b]))return dt(dt({},t),{},ja({},b,t[b]+(m||0)));if((_==="horizontal"||_==="vertical"&&b==="center")&&w!=="middle"&&he(t[w]))return dt(dt({},t),{},ja({},w,t[w]+(v||0)))}return t},h6=function(t,r,n){return He(r)?!0:t==="horizontal"?r==="yAxis":t==="vertical"||n==="x"?r==="xAxis":n==="y"?r==="yAxis":!0},dE=function(t,r,n,a,o){var c=r.props.children,u=zr(c,rd).filter(function(p){return h6(a,o,p.props.direction)});if(u&&u.length){var f=u.map(function(p){return p.props.dataKey});return t.reduce(function(p,h){var m=en(h,n);if(He(m))return p;var v=Array.isArray(m)?[Ju(m),Zu(m)]:[m,m],b=f.reduce(function(w,_){var x=en(h,_,0),S=v[0]-Math.abs(Array.isArray(x)?x[0]:x),C=v[1]+Math.abs(Array.isArray(x)?x[1]:x);return[Math.min(S,w[0]),Math.max(C,w[1])]},[1/0,-1/0]);return[Math.min(b[0],p[0]),Math.max(b[1],p[1])]},[1/0,-1/0])}return null},m6=function(t,r,n,a,o){var c=r.map(function(u){return dE(t,u,n,o,a)}).filter(function(u){return!He(u)});return c&&c.length?c.reduce(function(u,f){return[Math.min(u[0],f[0]),Math.max(u[1],f[1])]},[1/0,-1/0]):null},fE=function(t,r,n,a,o){var c=r.map(function(f){var p=f.props.dataKey;return n==="number"&&p&&dE(t,f,p,a)||ns(t,p,n,o)});if(n==="number")return c.reduce(function(f,p){return[Math.min(f[0],p[0]),Math.max(f[1],p[1])]},[1/0,-1/0]);var u={};return c.reduce(function(f,p){for(var h=0,m=p.length;h<m;h++)u[p[h]]||(u[p[h]]=!0,f.push(p[h]));return f},[])},pE=function(t,r){return t==="horizontal"&&r==="xAxis"||t==="vertical"&&r==="yAxis"||t==="centric"&&r==="angleAxis"||t==="radial"&&r==="radiusAxis"},hE=function(t,r,n,a){if(a)return t.map(function(f){return f.coordinate});var o,c,u=t.map(function(f){return f.coordinate===r&&(o=!0),f.coordinate===n&&(c=!0),f.coordinate});return o||u.push(r),c||u.push(n),u},gn=function(t,r,n){if(!t)return null;var a=t.scale,o=t.duplicateDomain,c=t.type,u=t.range,f=t.realScaleType==="scaleBand"?a.bandwidth()/2:2,p=(r||n)&&c==="category"&&a.bandwidth?a.bandwidth()/f:0;if(p=t.axisType==="angleAxis"&&u?.length>=2?Br(u[0]-u[1])*2*p:p,r&&(t.ticks||t.niceTicks)){var h=(t.ticks||t.niceTicks).map(function(m){var v=o?o.indexOf(m):m;return{coordinate:a(v)+p,value:m,offset:p}});return h.filter(function(m){return!Gs(m.coordinate)})}return t.isCategorical&&t.categoricalDomain?t.categoricalDomain.map(function(m,v){return{coordinate:a(m)+p,value:m,index:v,offset:p}}):a.ticks&&!n?a.ticks(t.tickCount).map(function(m){return{coordinate:a(m)+p,value:m,offset:p}}):a.domain().map(function(m,v){return{coordinate:a(m)+p,value:o?o[m]:m,index:v,offset:p}})},Rg=new WeakMap,yc=function(t,r){if(typeof r!="function")return t;Rg.has(t)||Rg.set(t,new WeakMap);var n=Rg.get(t);if(n.has(r))return n.get(r);var a=function(){t.apply(void 0,arguments),r.apply(void 0,arguments)};return n.set(r,a),a},g6=function(t,r,n){var a=t.scale,o=t.type,c=t.layout,u=t.axisType;if(a==="auto")return c==="radial"&&u==="radiusAxis"?{scale:fs(),realScaleType:"band"}:c==="radial"&&u==="angleAxis"?{scale:Xc(),realScaleType:"linear"}:o==="category"&&r&&(r.indexOf("LineChart")>=0||r.indexOf("AreaChart")>=0||r.indexOf("ComposedChart")>=0&&!n)?{scale:rs(),realScaleType:"point"}:o==="category"?{scale:fs(),realScaleType:"band"}:{scale:Xc(),realScaleType:"linear"};if(Pi(a)){var f="scale".concat(Lu(a));return{scale:(NS[f]||rs)(),realScaleType:NS[f]?f:"point"}}return $e(a)?{scale:a}:{scale:rs(),realScaleType:"point"}},zS=1e-4,v6=function(t){var r=t.domain();if(!(!r||r.length<=2)){var n=r.length,a=t.range(),o=Math.min(a[0],a[1])-zS,c=Math.max(a[0],a[1])+zS,u=t(r[0]),f=t(r[n-1]);(u<o||u>c||f<o||f>c)&&t.domain([r[0],r[n-1]])}},y6=function(t,r){if(!t)return null;for(var n=0,a=t.length;n<a;n++)if(t[n].item===r)return t[n].position;return null},x6=function(t,r){if(!r||r.length!==2||!he(r[0])||!he(r[1]))return t;var n=Math.min(r[0],r[1]),a=Math.max(r[0],r[1]),o=[t[0],t[1]];return(!he(t[0])||t[0]<n)&&(o[0]=n),(!he(t[1])||t[1]>a)&&(o[1]=a),o[0]>a&&(o[0]=a),o[1]<n&&(o[1]=n),o},b6=function(t){var r=t.length;if(!(r<=0))for(var n=0,a=t[0].length;n<a;++n)for(var o=0,c=0,u=0;u<r;++u){var f=Gs(t[u][n][1])?t[u][n][0]:t[u][n][1];f>=0?(t[u][n][0]=o,t[u][n][1]=o+f,o=t[u][n][1]):(t[u][n][0]=c,t[u][n][1]=c+f,c=t[u][n][1])}},w6=function(t){var r=t.length;if(!(r<=0))for(var n=0,a=t[0].length;n<a;++n)for(var o=0,c=0;c<r;++c){var u=Gs(t[c][n][1])?t[c][n][0]:t[c][n][1];u>=0?(t[c][n][0]=o,t[c][n][1]=o+u,o=t[c][n][1]):(t[c][n][0]=0,t[c][n][1]=0)}},_6={sign:b6,expand:iD,none:Aa,silhouette:aD,wiggle:oD,positive:w6},j6=function(t,r,n){var a=r.map(function(u){return u.props.dataKey}),o=_6[n],c=nD().keys(a).value(function(u,f){return+en(u,f,0)}).order(jv).offset(o);return c(t)},S6=function(t,r,n,a,o,c){if(!t)return null;var u=c?r.reverse():r,f={},p=u.reduce(function(m,v){var b,w=(b=v.type)!==null&&b!==void 0&&b.defaultProps?dt(dt({},v.type.defaultProps),v.props):v.props,_=w.stackId,x=w.hide;if(x)return m;var S=w[n],C=m[S]||{hasStack:!1,stackGroups:{}};if(Nt(_)){var O=C.stackGroups[_]||{numericAxisId:n,cateAxisId:a,items:[]};O.items.push(v),C.hasStack=!0,C.stackGroups[_]=O}else C.stackGroups[Fu("_stackId_")]={numericAxisId:n,cateAxisId:a,items:[v]};return dt(dt({},m),{},ja({},S,C))},f),h={};return Object.keys(p).reduce(function(m,v){var b=p[v];if(b.hasStack){var w={};b.stackGroups=Object.keys(b.stackGroups).reduce(function(_,x){var S=b.stackGroups[x];return dt(dt({},_),{},ja({},x,{numericAxisId:n,cateAxisId:a,items:S.items,stackedData:j6(t,S.items,o)}))},w)}return dt(dt({},m),{},ja({},v,b))},h)},N6=function(t,r){var n=r.realScaleType,a=r.type,o=r.tickCount,c=r.originalDomain,u=r.allowDecimals,f=n||r.scale;if(f!=="auto"&&f!=="linear")return null;if(o&&a==="number"&&c&&(c[0]==="auto"||c[1]==="auto")){var p=t.domain();if(!p.length)return null;var h=MF(p,o,u);return t.domain([Ju(h),Zu(h)]),{niceTicks:h}}if(o&&a==="number"){var m=t.domain(),v=$F(m,o,u);return{niceTicks:v}}return null},qS=function(t){var r=t.axis,n=t.ticks,a=t.offset,o=t.bandSize,c=t.entry,u=t.index;if(r.type==="category")return n[u]?n[u].coordinate+a:null;var f=en(c,r.dataKey,r.domain[u]);return He(f)?null:r.scale(f)-o/2+a},A6=function(t){var r=t.numericAxis,n=r.scale.domain();if(r.type==="number"){var a=Math.min(n[0],n[1]),o=Math.max(n[0],n[1]);return a<=0&&o>=0?0:o<0?o:a}return n[0]},C6=function(t,r){var n,a=(n=t.type)!==null&&n!==void 0&&n.defaultProps?dt(dt({},t.type.defaultProps),t.props):t.props,o=a.stackId;if(Nt(o)){var c=r[o];if(c){var u=c.items.indexOf(t);return u>=0?c.stackedData[u]:null}}return null},O6=function(t){return t.reduce(function(r,n){return[Ju(n.concat([r[0]]).filter(he)),Zu(n.concat([r[1]]).filter(he))]},[1/0,-1/0])},mE=function(t,r,n){return Object.keys(t).reduce(function(a,o){var c=t[o],u=c.stackedData,f=u.reduce(function(p,h){var m=O6(h.slice(r,n+1));return[Math.min(p[0],m[0]),Math.max(p[1],m[1])]},[1/0,-1/0]);return[Math.min(f[0],a[0]),Math.max(f[1],a[1])]},[1/0,-1/0]).map(function(a){return a===1/0||a===-1/0?0:a})},US=/^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,WS=/^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,Vv=function(t,r,n){if($e(t))return t(r,n);if(!Array.isArray(t))return r;var a=[];if(he(t[0]))a[0]=n?t[0]:Math.min(t[0],r[0]);else if(US.test(t[0])){var o=+US.exec(t[0])[1];a[0]=r[0]-o}else $e(t[0])?a[0]=t[0](r[0]):a[0]=r[0];if(he(t[1]))a[1]=n?t[1]:Math.max(t[1],r[1]);else if(WS.test(t[1])){var c=+WS.exec(t[1])[1];a[1]=r[1]+c}else $e(t[1])?a[1]=t[1](r[1]):a[1]=r[1];return a},nu=function(t,r,n){if(t&&t.scale&&t.scale.bandwidth){var a=t.scale.bandwidth();if(!n||a>0)return a}if(t&&r&&r.length>=2){for(var o=nx(r,function(m){return m.coordinate}),c=1/0,u=1,f=o.length;u<f;u++){var p=o[u],h=o[u-1];c=Math.min((p.coordinate||0)-(h.coordinate||0),c)}return c===1/0?0:c}return n?void 0:0},HS=function(t,r,n){return!t||!t.length||Ox(t,Ar(n,"type.defaultProps.domain"))?r:t},gE=function(t,r){var n=t.type.defaultProps?dt(dt({},t.type.defaultProps),t.props):t.props,a=n.dataKey,o=n.name,c=n.unit,u=n.formatter,f=n.tooltipType,p=n.chartType,h=n.hide;return dt(dt({},Ue(t,!1)),{},{dataKey:a,unit:c,formatter:u,name:o||a,color:Px(t),value:en(r,a),type:f,payload:r,chartType:p,hide:h})};function ws(e){"@babel/helpers - typeof";return ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ws(e)}function GS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function YS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?GS(Object(r),!0).forEach(function(n){E6(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):GS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function E6(e,t,r){return t=k6(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k6(e){var t=P6(e,"string");return ws(t)=="symbol"?t:t+""}function P6(e,t){if(ws(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ws(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var iu=Math.PI/180,T6=function(t){return t*180/Math.PI},Mt=function(t,r,n,a){return{x:t+Math.cos(-iu*a)*n,y:r+Math.sin(-iu*a)*n}},R6=function(t,r){var n=t.x,a=t.y,o=r.x,c=r.y;return Math.sqrt(Math.pow(n-o,2)+Math.pow(a-c,2))},D6=function(t,r){var n=t.x,a=t.y,o=r.cx,c=r.cy,u=R6({x:n,y:a},{x:o,y:c});if(u<=0)return{radius:u};var f=(n-o)/u,p=Math.acos(f);return a>c&&(p=2*Math.PI-p),{radius:u,angle:T6(p),angleInRadian:p}},I6=function(t){var r=t.startAngle,n=t.endAngle,a=Math.floor(r/360),o=Math.floor(n/360),c=Math.min(a,o);return{startAngle:r-c*360,endAngle:n-c*360}},M6=function(t,r){var n=r.startAngle,a=r.endAngle,o=Math.floor(n/360),c=Math.floor(a/360),u=Math.min(o,c);return t+u*360},VS=function(t,r){var n=t.x,a=t.y,o=D6({x:n,y:a},r),c=o.radius,u=o.angle,f=r.innerRadius,p=r.outerRadius;if(c<f||c>p)return!1;if(c===0)return!0;var h=I6(r),m=h.startAngle,v=h.endAngle,b=u,w;if(m<=v){for(;b>v;)b-=360;for(;b<m;)b+=360;w=b>=m&&b<=v}else{for(;b>m;)b-=360;for(;b<v;)b+=360;w=b>=v&&b<=m}return w?YS(YS({},r),{},{radius:c,angle:M6(b,r)}):null};function _s(e){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_s(e)}var $6=["offset"];function F6(e){return q6(e)||z6(e)||B6(e)||L6()}function L6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B6(e,t){if(e){if(typeof e=="string")return Kv(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Kv(e,t)}}function z6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function q6(e){if(Array.isArray(e))return Kv(e)}function Kv(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function U6(e,t){if(e==null)return{};var r=W6(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function W6(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function KS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function St(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?KS(Object(r),!0).forEach(function(n){H6(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):KS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function H6(e,t,r){return t=G6(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function G6(e){var t=Y6(e,"string");return _s(t)=="symbol"?t:t+""}function Y6(e,t){if(_s(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(_s(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function js(){return js=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},js.apply(this,arguments)}var V6=function(t){var r=t.value,n=t.formatter,a=He(t.children)?r:t.children;return $e(n)?n(a):a},K6=function(t,r){var n=Br(r-t),a=Math.min(Math.abs(r-t),360);return n*a},X6=function(t,r,n){var a=t.position,o=t.viewBox,c=t.offset,u=t.className,f=o,p=f.cx,h=f.cy,m=f.innerRadius,v=f.outerRadius,b=f.startAngle,w=f.endAngle,_=f.clockWise,x=(m+v)/2,S=K6(b,w),C=S>=0?1:-1,O,E;a==="insideStart"?(O=b+C*c,E=_):a==="insideEnd"?(O=w-C*c,E=!_):a==="end"&&(O=w+C*c,E=_),E=S<=0?E:!E;var A=Mt(p,h,x,O),N=Mt(p,h,x,O+(E?1:-1)*359),P="M".concat(A.x,",").concat(A.y,`
    A`).concat(x,",").concat(x,",0,1,").concat(E?0:1,`,
    `).concat(N.x,",").concat(N.y),R=He(t.id)?Fu("recharts-radial-line-"):t.id;return V.createElement("text",js({},n,{dominantBaseline:"central",className:We("recharts-radial-bar-label",u)}),V.createElement("defs",null,V.createElement("path",{id:R,d:P})),V.createElement("textPath",{xlinkHref:"#".concat(R)},r))},Q6=function(t){var r=t.viewBox,n=t.offset,a=t.position,o=r,c=o.cx,u=o.cy,f=o.innerRadius,p=o.outerRadius,h=o.startAngle,m=o.endAngle,v=(h+m)/2;if(a==="outside"){var b=Mt(c,u,p+n,v),w=b.x,_=b.y;return{x:w,y:_,textAnchor:w>=c?"start":"end",verticalAnchor:"middle"}}if(a==="center")return{x:c,y:u,textAnchor:"middle",verticalAnchor:"middle"};if(a==="centerTop")return{x:c,y:u,textAnchor:"middle",verticalAnchor:"start"};if(a==="centerBottom")return{x:c,y:u,textAnchor:"middle",verticalAnchor:"end"};var x=(f+p)/2,S=Mt(c,u,x,v),C=S.x,O=S.y;return{x:C,y:O,textAnchor:"middle",verticalAnchor:"middle"}},Z6=function(t){var r=t.viewBox,n=t.parentViewBox,a=t.offset,o=t.position,c=r,u=c.x,f=c.y,p=c.width,h=c.height,m=h>=0?1:-1,v=m*a,b=m>0?"end":"start",w=m>0?"start":"end",_=p>=0?1:-1,x=_*a,S=_>0?"end":"start",C=_>0?"start":"end";if(o==="top"){var O={x:u+p/2,y:f-m*a,textAnchor:"middle",verticalAnchor:b};return St(St({},O),n?{height:Math.max(f-n.y,0),width:p}:{})}if(o==="bottom"){var E={x:u+p/2,y:f+h+v,textAnchor:"middle",verticalAnchor:w};return St(St({},E),n?{height:Math.max(n.y+n.height-(f+h),0),width:p}:{})}if(o==="left"){var A={x:u-x,y:f+h/2,textAnchor:S,verticalAnchor:"middle"};return St(St({},A),n?{width:Math.max(A.x-n.x,0),height:h}:{})}if(o==="right"){var N={x:u+p+x,y:f+h/2,textAnchor:C,verticalAnchor:"middle"};return St(St({},N),n?{width:Math.max(n.x+n.width-N.x,0),height:h}:{})}var P=n?{width:p,height:h}:{};return o==="insideLeft"?St({x:u+x,y:f+h/2,textAnchor:C,verticalAnchor:"middle"},P):o==="insideRight"?St({x:u+p-x,y:f+h/2,textAnchor:S,verticalAnchor:"middle"},P):o==="insideTop"?St({x:u+p/2,y:f+v,textAnchor:"middle",verticalAnchor:w},P):o==="insideBottom"?St({x:u+p/2,y:f+h-v,textAnchor:"middle",verticalAnchor:b},P):o==="insideTopLeft"?St({x:u+x,y:f+v,textAnchor:C,verticalAnchor:w},P):o==="insideTopRight"?St({x:u+p-x,y:f+v,textAnchor:S,verticalAnchor:w},P):o==="insideBottomLeft"?St({x:u+x,y:f+h-v,textAnchor:C,verticalAnchor:b},P):o==="insideBottomRight"?St({x:u+p-x,y:f+h-v,textAnchor:S,verticalAnchor:b},P):Ka(o)&&(he(o.x)||_i(o.x))&&(he(o.y)||_i(o.y))?St({x:u+Ti(o.x,p),y:f+Ti(o.y,h),textAnchor:"end",verticalAnchor:"end"},P):St({x:u+p/2,y:f+h/2,textAnchor:"middle",verticalAnchor:"middle"},P)},J6=function(t){return"cx"in t&&he(t.cx)};function Ut(e){var t=e.offset,r=t===void 0?5:t,n=U6(e,$6),a=St({offset:r},n),o=a.viewBox,c=a.position,u=a.value,f=a.children,p=a.content,h=a.className,m=h===void 0?"":h,v=a.textBreakAll;if(!o||He(u)&&He(f)&&!T.isValidElement(p)&&!$e(p))return null;if(T.isValidElement(p))return T.cloneElement(p,a);var b;if($e(p)){if(b=T.createElement(p,a),T.isValidElement(b))return b}else b=V6(a);var w=J6(o),_=Ue(a,!0);if(w&&(c==="insideStart"||c==="insideEnd"||c==="end"))return X6(a,b,_);var x=w?Q6(a):Z6(a);return V.createElement(qc,js({className:We("recharts-label",m)},_,x,{breakAll:v}),b)}Ut.displayName="Label";var vE=function(t){var r=t.cx,n=t.cy,a=t.angle,o=t.startAngle,c=t.endAngle,u=t.r,f=t.radius,p=t.innerRadius,h=t.outerRadius,m=t.x,v=t.y,b=t.top,w=t.left,_=t.width,x=t.height,S=t.clockWise,C=t.labelViewBox;if(C)return C;if(he(_)&&he(x)){if(he(m)&&he(v))return{x:m,y:v,width:_,height:x};if(he(b)&&he(w))return{x:b,y:w,width:_,height:x}}return he(m)&&he(v)?{x:m,y:v,width:0,height:0}:he(r)&&he(n)?{cx:r,cy:n,startAngle:o||a||0,endAngle:c||a||0,innerRadius:p||0,outerRadius:h||f||u||0,clockWise:S}:t.viewBox?t.viewBox:{}},eL=function(t,r){return t?t===!0?V.createElement(Ut,{key:"label-implicit",viewBox:r}):Nt(t)?V.createElement(Ut,{key:"label-implicit",viewBox:r,value:t}):T.isValidElement(t)?t.type===Ut?T.cloneElement(t,{key:"label-implicit",viewBox:r}):V.createElement(Ut,{key:"label-implicit",content:t,viewBox:r}):$e(t)?V.createElement(Ut,{key:"label-implicit",content:t,viewBox:r}):Ka(t)?V.createElement(Ut,js({viewBox:r},t,{key:"label-implicit"})):null:null},tL=function(t,r){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!t||!t.children&&n&&!t.label)return null;var a=t.children,o=vE(t),c=zr(a,Ut).map(function(f,p){return T.cloneElement(f,{viewBox:r||o,key:"label-".concat(p)})});if(!n)return c;var u=eL(t.label,r||o);return[u].concat(F6(c))};Ut.parseViewBox=vE;Ut.renderCallByParent=tL;var Dg,XS;function rL(){if(XS)return Dg;XS=1;function e(t){var r=t==null?0:t.length;return r?t[r-1]:void 0}return Dg=e,Dg}var nL=rL();const iL=Je(nL);function Ss(e){"@babel/helpers - typeof";return Ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ss(e)}var aL=["valueAccessor"],oL=["data","dataKey","clockWise","id","textBreakAll"];function sL(e){return dL(e)||uL(e)||cL(e)||lL()}function lL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cL(e,t){if(e){if(typeof e=="string")return Xv(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Xv(e,t)}}function uL(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dL(e){if(Array.isArray(e))return Xv(e)}function Xv(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function au(){return au=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},au.apply(this,arguments)}function QS(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function ZS(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?QS(Object(r),!0).forEach(function(n){fL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):QS(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function fL(e,t,r){return t=pL(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pL(e){var t=hL(e,"string");return Ss(t)=="symbol"?t:t+""}function hL(e,t){if(Ss(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ss(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function JS(e,t){if(e==null)return{};var r=mL(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function mL(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var gL=function(t){return Array.isArray(t.value)?iL(t.value):t.value};function Ei(e){var t=e.valueAccessor,r=t===void 0?gL:t,n=JS(e,aL),a=n.data,o=n.dataKey,c=n.clockWise,u=n.id,f=n.textBreakAll,p=JS(n,oL);return!a||!a.length?null:V.createElement(Pt,{className:"recharts-label-list"},a.map(function(h,m){var v=He(o)?r(h,m):en(h&&h.payload,o),b=He(u)?{}:{id:"".concat(u,"-").concat(m)};return V.createElement(Ut,au({},Ue(h,!0),p,b,{parentViewBox:h.parentViewBox,value:v,textBreakAll:f,viewBox:Ut.parseViewBox(He(c)?h:ZS(ZS({},h),{},{clockWise:c})),key:"label-".concat(m),index:m}))}))}Ei.displayName="LabelList";function vL(e,t){return e?e===!0?V.createElement(Ei,{key:"labelList-implicit",data:t}):V.isValidElement(e)||$e(e)?V.createElement(Ei,{key:"labelList-implicit",data:t,content:e}):Ka(e)?V.createElement(Ei,au({data:t},e,{key:"labelList-implicit"})):null:null}function yL(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(!e||!e.children&&r&&!e.label)return null;var n=e.children,a=zr(n,Ei).map(function(c,u){return T.cloneElement(c,{data:t,key:"labelList-".concat(u)})});if(!r)return a;var o=vL(e.label,t);return[o].concat(sL(a))}Ei.renderCallByParent=yL;function Ns(e){"@babel/helpers - typeof";return Ns=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ns(e)}function Qv(){return Qv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Qv.apply(this,arguments)}function eN(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function tN(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?eN(Object(r),!0).forEach(function(n){xL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eN(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function xL(e,t,r){return t=bL(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function bL(e){var t=wL(e,"string");return Ns(t)=="symbol"?t:t+""}function wL(e,t){if(Ns(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ns(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var _L=function(t,r){var n=Br(r-t),a=Math.min(Math.abs(r-t),359.999);return n*a},xc=function(t){var r=t.cx,n=t.cy,a=t.radius,o=t.angle,c=t.sign,u=t.isExternal,f=t.cornerRadius,p=t.cornerIsExternal,h=f*(u?1:-1)+a,m=Math.asin(f/h)/iu,v=p?o:o+c*m,b=Mt(r,n,h,v),w=Mt(r,n,a,v),_=p?o-c*m:o,x=Mt(r,n,h*Math.cos(m*iu),_);return{center:b,circleTangency:w,lineTangency:x,theta:m}},yE=function(t){var r=t.cx,n=t.cy,a=t.innerRadius,o=t.outerRadius,c=t.startAngle,u=t.endAngle,f=_L(c,u),p=c+f,h=Mt(r,n,o,c),m=Mt(r,n,o,p),v="M ".concat(h.x,",").concat(h.y,`
    A `).concat(o,",").concat(o,`,0,
    `).concat(+(Math.abs(f)>180),",").concat(+(c>p),`,
    `).concat(m.x,",").concat(m.y,`
  `);if(a>0){var b=Mt(r,n,a,c),w=Mt(r,n,a,p);v+="L ".concat(w.x,",").concat(w.y,`
            A `).concat(a,",").concat(a,`,0,
            `).concat(+(Math.abs(f)>180),",").concat(+(c<=p),`,
            `).concat(b.x,",").concat(b.y," Z")}else v+="L ".concat(r,",").concat(n," Z");return v},jL=function(t){var r=t.cx,n=t.cy,a=t.innerRadius,o=t.outerRadius,c=t.cornerRadius,u=t.forceCornerRadius,f=t.cornerIsExternal,p=t.startAngle,h=t.endAngle,m=Br(h-p),v=xc({cx:r,cy:n,radius:o,angle:p,sign:m,cornerRadius:c,cornerIsExternal:f}),b=v.circleTangency,w=v.lineTangency,_=v.theta,x=xc({cx:r,cy:n,radius:o,angle:h,sign:-m,cornerRadius:c,cornerIsExternal:f}),S=x.circleTangency,C=x.lineTangency,O=x.theta,E=f?Math.abs(p-h):Math.abs(p-h)-_-O;if(E<0)return u?"M ".concat(w.x,",").concat(w.y,`
        a`).concat(c,",").concat(c,",0,0,1,").concat(c*2,`,0
        a`).concat(c,",").concat(c,",0,0,1,").concat(-c*2,`,0
      `):yE({cx:r,cy:n,innerRadius:a,outerRadius:o,startAngle:p,endAngle:h});var A="M ".concat(w.x,",").concat(w.y,`
    A`).concat(c,",").concat(c,",0,0,").concat(+(m<0),",").concat(b.x,",").concat(b.y,`
    A`).concat(o,",").concat(o,",0,").concat(+(E>180),",").concat(+(m<0),",").concat(S.x,",").concat(S.y,`
    A`).concat(c,",").concat(c,",0,0,").concat(+(m<0),",").concat(C.x,",").concat(C.y,`
  `);if(a>0){var N=xc({cx:r,cy:n,radius:a,angle:p,sign:m,isExternal:!0,cornerRadius:c,cornerIsExternal:f}),P=N.circleTangency,R=N.lineTangency,D=N.theta,G=xc({cx:r,cy:n,radius:a,angle:h,sign:-m,isExternal:!0,cornerRadius:c,cornerIsExternal:f}),q=G.circleTangency,M=G.lineTangency,H=G.theta,B=f?Math.abs(p-h):Math.abs(p-h)-D-H;if(B<0&&c===0)return"".concat(A,"L").concat(r,",").concat(n,"Z");A+="L".concat(M.x,",").concat(M.y,`
      A`).concat(c,",").concat(c,",0,0,").concat(+(m<0),",").concat(q.x,",").concat(q.y,`
      A`).concat(a,",").concat(a,",0,").concat(+(B>180),",").concat(+(m>0),",").concat(P.x,",").concat(P.y,`
      A`).concat(c,",").concat(c,",0,0,").concat(+(m<0),",").concat(R.x,",").concat(R.y,"Z")}else A+="L".concat(r,",").concat(n,"Z");return A},SL={cx:0,cy:0,innerRadius:0,outerRadius:0,startAngle:0,endAngle:0,cornerRadius:0,forceCornerRadius:!1,cornerIsExternal:!1},xE=function(t){var r=tN(tN({},SL),t),n=r.cx,a=r.cy,o=r.innerRadius,c=r.outerRadius,u=r.cornerRadius,f=r.forceCornerRadius,p=r.cornerIsExternal,h=r.startAngle,m=r.endAngle,v=r.className;if(c<o||h===m)return null;var b=We("recharts-sector",v),w=c-o,_=Ti(u,w,0,!0),x;return _>0&&Math.abs(h-m)<360?x=jL({cx:n,cy:a,innerRadius:o,outerRadius:c,cornerRadius:Math.min(_,w/2),forceCornerRadius:f,cornerIsExternal:p,startAngle:h,endAngle:m}):x=yE({cx:n,cy:a,innerRadius:o,outerRadius:c,startAngle:h,endAngle:m}),V.createElement("path",Qv({},Ue(r,!0),{className:b,d:x,role:"img"}))};function As(e){"@babel/helpers - typeof";return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},As(e)}function Zv(){return Zv=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Zv.apply(this,arguments)}function rN(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function nN(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?rN(Object(r),!0).forEach(function(n){NL(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rN(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function NL(e,t,r){return t=AL(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function AL(e){var t=CL(e,"string");return As(t)=="symbol"?t:t+""}function CL(e,t){if(As(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(As(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var iN={curveBasisClosed:G4,curveBasisOpen:Y4,curveBasis:H4,curveBumpX:P4,curveBumpY:T4,curveLinearClosed:V4,curveLinear:zu,curveMonotoneX:K4,curveMonotoneY:X4,curveNatural:Q4,curveStep:Z4,curveStepAfter:eD,curveStepBefore:J4},bc=function(t){return t.x===+t.x&&t.y===+t.y},Vo=function(t){return t.x},Ko=function(t){return t.y},OL=function(t,r){if($e(t))return t;var n="curve".concat(Lu(t));return(n==="curveMonotone"||n==="curveBump")&&r?iN["".concat(n).concat(r==="vertical"?"Y":"X")]:iN[n]||zu},EL=function(t){var r=t.type,n=r===void 0?"linear":r,a=t.points,o=a===void 0?[]:a,c=t.baseLine,u=t.layout,f=t.connectNulls,p=f===void 0?!1:f,h=OL(n,u),m=p?o.filter(function(_){return bc(_)}):o,v;if(Array.isArray(c)){var b=p?c.filter(function(_){return bc(_)}):c,w=m.map(function(_,x){return nN(nN({},_),{},{base:b[x]})});return u==="vertical"?v=dc().y(Ko).x1(Vo).x0(function(_){return _.base.x}):v=dc().x(Vo).y1(Ko).y0(function(_){return _.base.y}),v.defined(bc).curve(h),v(w)}return u==="vertical"&&he(c)?v=dc().y(Ko).x1(Vo).x0(c):he(c)?v=dc().x(Vo).y1(Ko).y0(c):v=NC().x(Vo).y(Ko),v.defined(bc).curve(h),v(m)},aN=function(t){var r=t.className,n=t.points,a=t.path,o=t.pathRef;if((!n||!n.length)&&!a)return null;var c=n&&n.length?EL(t):a;return T.createElement("path",Zv({},Ue(t,!1),kc(t),{className:We("recharts-curve",r),d:c,ref:o}))},Ig={exports:{}},Mg,oN;function kL(){if(oN)return Mg;oN=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Mg=e,Mg}var $g,sN;function PL(){if(sN)return $g;sN=1;var e=kL();function t(){}function r(){}return r.resetWarningCache=t,$g=function(){function n(c,u,f,p,h,m){if(m!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}n.isRequired=n;function a(){return n}var o={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:a,element:n,elementType:n,instanceOf:a,node:n,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:r,resetWarningCache:t};return o.PropTypes=o,o},$g}var lN;function TL(){return lN||(lN=1,Ig.exports=PL()()),Ig.exports}var RL=TL();const Ye=Je(RL),{getOwnPropertyNames:DL,getOwnPropertySymbols:IL}=Object,{hasOwnProperty:ML}=Object.prototype;function Fg(e,t){return function(n,a,o){return e(n,a,o)&&t(n,a,o)}}function wc(e){return function(r,n,a){if(!r||!n||typeof r!="object"||typeof n!="object")return e(r,n,a);const{cache:o}=a,c=o.get(r),u=o.get(n);if(c&&u)return c===n&&u===r;o.set(r,n),o.set(n,r);const f=e(r,n,a);return o.delete(r),o.delete(n),f}}function $L(e){return e?.[Symbol.toStringTag]}function cN(e){return DL(e).concat(IL(e))}const FL=Object.hasOwn||((e,t)=>ML.call(e,t));function Li(e,t){return e===t||!e&&!t&&e!==e&&t!==t}const LL="__v",BL="__o",zL="_owner",{getOwnPropertyDescriptor:uN,keys:dN}=Object;function qL(e,t){return e.byteLength===t.byteLength&&ou(new Uint8Array(e),new Uint8Array(t))}function UL(e,t,r){let n=e.length;if(t.length!==n)return!1;for(;n-- >0;)if(!r.equals(e[n],t[n],n,n,e,t,r))return!1;return!0}function WL(e,t){return e.byteLength===t.byteLength&&ou(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Uint8Array(t.buffer,t.byteOffset,t.byteLength))}function HL(e,t){return Li(e.getTime(),t.getTime())}function GL(e,t){return e.name===t.name&&e.message===t.message&&e.cause===t.cause&&e.stack===t.stack}function YL(e,t){return e===t}function fN(e,t,r){const n=e.size;if(n!==t.size)return!1;if(!n)return!0;const a=new Array(n),o=e.entries();let c,u,f=0;for(;(c=o.next())&&!c.done;){const p=t.entries();let h=!1,m=0;for(;(u=p.next())&&!u.done;){if(a[m]){m++;continue}const v=c.value,b=u.value;if(r.equals(v[0],b[0],f,m,e,t,r)&&r.equals(v[1],b[1],v[0],b[0],e,t,r)){h=a[m]=!0;break}m++}if(!h)return!1;f++}return!0}const VL=Li;function KL(e,t,r){const n=dN(e);let a=n.length;if(dN(t).length!==a)return!1;for(;a-- >0;)if(!bE(e,t,r,n[a]))return!1;return!0}function Xo(e,t,r){const n=cN(e);let a=n.length;if(cN(t).length!==a)return!1;let o,c,u;for(;a-- >0;)if(o=n[a],!bE(e,t,r,o)||(c=uN(e,o),u=uN(t,o),(c||u)&&(!c||!u||c.configurable!==u.configurable||c.enumerable!==u.enumerable||c.writable!==u.writable)))return!1;return!0}function XL(e,t){return Li(e.valueOf(),t.valueOf())}function QL(e,t){return e.source===t.source&&e.flags===t.flags}function pN(e,t,r){const n=e.size;if(n!==t.size)return!1;if(!n)return!0;const a=new Array(n),o=e.values();let c,u;for(;(c=o.next())&&!c.done;){const f=t.values();let p=!1,h=0;for(;(u=f.next())&&!u.done;){if(!a[h]&&r.equals(c.value,u.value,c.value,u.value,e,t,r)){p=a[h]=!0;break}h++}if(!p)return!1}return!0}function ou(e,t){let r=e.byteLength;if(t.byteLength!==r||e.byteOffset!==t.byteOffset)return!1;for(;r-- >0;)if(e[r]!==t[r])return!1;return!0}function ZL(e,t){return e.hostname===t.hostname&&e.pathname===t.pathname&&e.protocol===t.protocol&&e.port===t.port&&e.hash===t.hash&&e.username===t.username&&e.password===t.password}function bE(e,t,r,n){return(n===zL||n===BL||n===LL)&&(e.$$typeof||t.$$typeof)?!0:FL(t,n)&&r.equals(e[n],t[n],n,n,e,t,r)}const JL="[object ArrayBuffer]",eB="[object Arguments]",tB="[object Boolean]",rB="[object DataView]",nB="[object Date]",iB="[object Error]",aB="[object Map]",oB="[object Number]",sB="[object Object]",lB="[object RegExp]",cB="[object Set]",uB="[object String]",dB={"[object Int8Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Int16Array]":!0,"[object Uint16Array]":!0,"[object Int32Array]":!0,"[object Uint32Array]":!0,"[object Float16Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0,"[object BigInt64Array]":!0,"[object BigUint64Array]":!0},fB="[object URL]",pB=Object.prototype.toString;function hB({areArrayBuffersEqual:e,areArraysEqual:t,areDataViewsEqual:r,areDatesEqual:n,areErrorsEqual:a,areFunctionsEqual:o,areMapsEqual:c,areNumbersEqual:u,areObjectsEqual:f,arePrimitiveWrappersEqual:p,areRegExpsEqual:h,areSetsEqual:m,areTypedArraysEqual:v,areUrlsEqual:b,unknownTagComparators:w}){return function(x,S,C){if(x===S)return!0;if(x==null||S==null)return!1;const O=typeof x;if(O!==typeof S)return!1;if(O!=="object")return O==="number"?u(x,S,C):O==="function"?o(x,S,C):!1;const E=x.constructor;if(E!==S.constructor)return!1;if(E===Object)return f(x,S,C);if(Array.isArray(x))return t(x,S,C);if(E===Date)return n(x,S,C);if(E===RegExp)return h(x,S,C);if(E===Map)return c(x,S,C);if(E===Set)return m(x,S,C);const A=pB.call(x);if(A===nB)return n(x,S,C);if(A===lB)return h(x,S,C);if(A===aB)return c(x,S,C);if(A===cB)return m(x,S,C);if(A===sB)return typeof x.then!="function"&&typeof S.then!="function"&&f(x,S,C);if(A===fB)return b(x,S,C);if(A===iB)return a(x,S,C);if(A===eB)return f(x,S,C);if(dB[A])return v(x,S,C);if(A===JL)return e(x,S,C);if(A===rB)return r(x,S,C);if(A===tB||A===oB||A===uB)return p(x,S,C);if(w){let N=w[A];if(!N){const P=$L(x);P&&(N=w[P])}if(N)return N(x,S,C)}return!1}}function mB({circular:e,createCustomConfig:t,strict:r}){let n={areArrayBuffersEqual:qL,areArraysEqual:r?Xo:UL,areDataViewsEqual:WL,areDatesEqual:HL,areErrorsEqual:GL,areFunctionsEqual:YL,areMapsEqual:r?Fg(fN,Xo):fN,areNumbersEqual:VL,areObjectsEqual:r?Xo:KL,arePrimitiveWrappersEqual:XL,areRegExpsEqual:QL,areSetsEqual:r?Fg(pN,Xo):pN,areTypedArraysEqual:r?Fg(ou,Xo):ou,areUrlsEqual:ZL,unknownTagComparators:void 0};if(t&&(n=Object.assign({},n,t(n))),e){const a=wc(n.areArraysEqual),o=wc(n.areMapsEqual),c=wc(n.areObjectsEqual),u=wc(n.areSetsEqual);n=Object.assign({},n,{areArraysEqual:a,areMapsEqual:o,areObjectsEqual:c,areSetsEqual:u})}return n}function gB(e){return function(t,r,n,a,o,c,u){return e(t,r,u)}}function vB({circular:e,comparator:t,createState:r,equals:n,strict:a}){if(r)return function(u,f){const{cache:p=e?new WeakMap:void 0,meta:h}=r();return t(u,f,{cache:p,equals:n,meta:h,strict:a})};if(e)return function(u,f){return t(u,f,{cache:new WeakMap,equals:n,meta:void 0,strict:a})};const o={cache:void 0,equals:n,meta:void 0,strict:a};return function(u,f){return t(u,f,o)}}const yB=ri();ri({strict:!0});ri({circular:!0});ri({circular:!0,strict:!0});ri({createInternalComparator:()=>Li});ri({strict:!0,createInternalComparator:()=>Li});ri({circular:!0,createInternalComparator:()=>Li});ri({circular:!0,createInternalComparator:()=>Li,strict:!0});function ri(e={}){const{circular:t=!1,createInternalComparator:r,createState:n,strict:a=!1}=e,o=mB(e),c=hB(o),u=r?r(c):gB(c);return vB({circular:t,comparator:c,createState:n,equals:u,strict:a})}function xB(e){typeof requestAnimationFrame<"u"&&requestAnimationFrame(e)}function hN(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=-1,n=function a(o){r<0&&(r=o),o-r>t?(e(o),r=-1):xB(a)};requestAnimationFrame(n)}function Jv(e){"@babel/helpers - typeof";return Jv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Jv(e)}function bB(e){return SB(e)||jB(e)||_B(e)||wB()}function wB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _B(e,t){if(e){if(typeof e=="string")return mN(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return mN(e,t)}}function mN(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function jB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function SB(e){if(Array.isArray(e))return e}function NB(){var e={},t=function(){return null},r=!1,n=function a(o){if(!r){if(Array.isArray(o)){if(!o.length)return;var c=o,u=bB(c),f=u[0],p=u.slice(1);if(typeof f=="number"){hN(a.bind(null,p),f);return}a(f),hN(a.bind(null,p));return}Jv(o)==="object"&&(e=o,t(e)),typeof o=="function"&&o()}};return{stop:function(){r=!0},start:function(o){r=!1,n(o)},subscribe:function(o){return t=o,function(){t=function(){return null}}}}}function Cs(e){"@babel/helpers - typeof";return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cs(e)}function gN(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function vN(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?gN(Object(r),!0).forEach(function(n){wE(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gN(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function wE(e,t,r){return t=AB(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function AB(e){var t=CB(e,"string");return Cs(t)==="symbol"?t:String(t)}function CB(e,t){if(Cs(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Cs(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var OB=function(t,r){return[Object.keys(t),Object.keys(r)].reduce(function(n,a){return n.filter(function(o){return a.includes(o)})})},EB=function(t){return t},kB=function(t){return t.replace(/([A-Z])/g,function(r){return"-".concat(r.toLowerCase())})},is=function(t,r){return Object.keys(r).reduce(function(n,a){return vN(vN({},n),{},wE({},a,t(a,r[a])))},{})},yN=function(t,r,n){return t.map(function(a){return"".concat(kB(a)," ").concat(r,"ms ").concat(n)}).join(",")};function PB(e,t){return DB(e)||RB(e,t)||_E(e,t)||TB()}function TB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RB(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,c,u=[],f=!0,p=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(h){p=!0,a=h}finally{try{if(!f&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw a}}return u}}function DB(e){if(Array.isArray(e))return e}function IB(e){return FB(e)||$B(e)||_E(e)||MB()}function MB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _E(e,t){if(e){if(typeof e=="string")return ey(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ey(e,t)}}function $B(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function FB(e){if(Array.isArray(e))return ey(e)}function ey(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var su=1e-4,jE=function(t,r){return[0,3*t,3*r-6*t,3*t-3*r+1]},SE=function(t,r){return t.map(function(n,a){return n*Math.pow(r,a)}).reduce(function(n,a){return n+a})},xN=function(t,r){return function(n){var a=jE(t,r);return SE(a,n)}},LB=function(t,r){return function(n){var a=jE(t,r),o=[].concat(IB(a.map(function(c,u){return c*u}).slice(1)),[0]);return SE(o,n)}},bN=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var a=r[0],o=r[1],c=r[2],u=r[3];if(r.length===1)switch(r[0]){case"linear":a=0,o=0,c=1,u=1;break;case"ease":a=.25,o=.1,c=.25,u=1;break;case"ease-in":a=.42,o=0,c=1,u=1;break;case"ease-out":a=.42,o=0,c=.58,u=1;break;case"ease-in-out":a=0,o=0,c=.58,u=1;break;default:{var f=r[0].split("(");if(f[0]==="cubic-bezier"&&f[1].split(")")[0].split(",").length===4){var p=f[1].split(")")[0].split(",").map(function(x){return parseFloat(x)}),h=PB(p,4);a=h[0],o=h[1],c=h[2],u=h[3]}}}var m=xN(a,c),v=xN(o,u),b=LB(a,c),w=function(S){return S>1?1:S<0?0:S},_=function(S){for(var C=S>1?1:S,O=C,E=0;E<8;++E){var A=m(O)-C,N=b(O);if(Math.abs(A-C)<su||N<su)return v(O);O=w(O-A/N)}return v(O)};return _.isStepper=!1,_},BB=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.stiff,n=r===void 0?100:r,a=t.damping,o=a===void 0?8:a,c=t.dt,u=c===void 0?17:c,f=function(h,m,v){var b=-(h-m)*n,w=v*o,_=v+(b-w)*u/1e3,x=v*u/1e3+h;return Math.abs(x-m)<su&&Math.abs(_)<su?[m,0]:[x,_]};return f.isStepper=!0,f.dt=u,f},zB=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var a=r[0];if(typeof a=="string")switch(a){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return bN(a);case"spring":return BB();default:if(a.split("(")[0]==="cubic-bezier")return bN(a)}return typeof a=="function"?a:null};function Os(e){"@babel/helpers - typeof";return Os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Os(e)}function wN(e){return WB(e)||UB(e)||NE(e)||qB()}function qB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UB(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function WB(e){if(Array.isArray(e))return ry(e)}function _N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function It(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_N(Object(r),!0).forEach(function(n){ty(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_N(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ty(e,t,r){return t=HB(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function HB(e){var t=GB(e,"string");return Os(t)==="symbol"?t:String(t)}function GB(e,t){if(Os(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Os(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function YB(e,t){return XB(e)||KB(e,t)||NE(e,t)||VB()}function VB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function NE(e,t){if(e){if(typeof e=="string")return ry(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ry(e,t)}}function ry(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function KB(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,c,u=[],f=!0,p=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(h){p=!0,a=h}finally{try{if(!f&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw a}}return u}}function XB(e){if(Array.isArray(e))return e}var lu=function(t,r,n){return t+(r-t)*n},ny=function(t){var r=t.from,n=t.to;return r!==n},QB=function e(t,r,n){var a=is(function(o,c){if(ny(c)){var u=t(c.from,c.to,c.velocity),f=YB(u,2),p=f[0],h=f[1];return It(It({},c),{},{from:p,velocity:h})}return c},r);return n<1?is(function(o,c){return ny(c)?It(It({},c),{},{velocity:lu(c.velocity,a[o].velocity,n),from:lu(c.from,a[o].from,n)}):c},r):e(t,a,n-1)};const ZB=(function(e,t,r,n,a){var o=OB(e,t),c=o.reduce(function(x,S){return It(It({},x),{},ty({},S,[e[S],t[S]]))},{}),u=o.reduce(function(x,S){return It(It({},x),{},ty({},S,{from:e[S],velocity:0,to:t[S]}))},{}),f=-1,p,h,m=function(){return null},v=function(){return is(function(S,C){return C.from},u)},b=function(){return!Object.values(u).filter(ny).length},w=function(S){p||(p=S);var C=S-p,O=C/r.dt;u=QB(r,u,O),a(It(It(It({},e),t),v())),p=S,b()||(f=requestAnimationFrame(m))},_=function(S){h||(h=S);var C=(S-h)/n,O=is(function(A,N){return lu.apply(void 0,wN(N).concat([r(C)]))},c);if(a(It(It(It({},e),t),O)),C<1)f=requestAnimationFrame(m);else{var E=is(function(A,N){return lu.apply(void 0,wN(N).concat([r(1)]))},c);a(It(It(It({},e),t),E))}};return m=r.isStepper?w:_,function(){return requestAnimationFrame(m),function(){cancelAnimationFrame(f)}}});function Ia(e){"@babel/helpers - typeof";return Ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ia(e)}var JB=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function ez(e,t){if(e==null)return{};var r=tz(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function tz(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function Lg(e){return az(e)||iz(e)||nz(e)||rz()}function rz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nz(e,t){if(e){if(typeof e=="string")return iy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return iy(e,t)}}function iz(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function az(e){if(Array.isArray(e))return iy(e)}function iy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function jN(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function $r(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?jN(Object(r),!0).forEach(function(n){es(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):jN(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function es(e,t,r){return t=AE(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function oz(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sz(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,AE(n.key),n)}}function lz(e,t,r){return t&&sz(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function AE(e){var t=cz(e,"string");return Ia(t)==="symbol"?t:String(t)}function cz(e,t){if(Ia(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ia(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function uz(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ay(e,t)}function ay(e,t){return ay=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},ay(e,t)}function dz(e){var t=fz();return function(){var n=cu(e),a;if(t){var o=cu(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return oy(this,a)}}function oy(e,t){if(t&&(Ia(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return sy(e)}function sy(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function fz(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function cu(e){return cu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},cu(e)}var Qn=(function(e){uz(r,e);var t=dz(r);function r(n,a){var o;oz(this,r),o=t.call(this,n,a);var c=o.props,u=c.isActive,f=c.attributeName,p=c.from,h=c.to,m=c.steps,v=c.children,b=c.duration;if(o.handleStyleChange=o.handleStyleChange.bind(sy(o)),o.changeStyle=o.changeStyle.bind(sy(o)),!u||b<=0)return o.state={style:{}},typeof v=="function"&&(o.state={style:h}),oy(o);if(m&&m.length)o.state={style:m[0].style};else if(p){if(typeof v=="function")return o.state={style:p},oy(o);o.state={style:f?es({},f,p):p}}else o.state={style:{}};return o}return lz(r,[{key:"componentDidMount",value:function(){var a=this.props,o=a.isActive,c=a.canBegin;this.mounted=!0,!(!o||!c)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(a){var o=this.props,c=o.isActive,u=o.canBegin,f=o.attributeName,p=o.shouldReAnimate,h=o.to,m=o.from,v=this.state.style;if(u){if(!c){var b={style:f?es({},f,h):h};this.state&&v&&(f&&v[f]!==h||!f&&v!==h)&&this.setState(b);return}if(!(yB(a.to,h)&&a.canBegin&&a.isActive)){var w=!a.canBegin||!a.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var _=w||p?m:a.to;if(this.state&&v){var x={style:f?es({},f,_):_};(f&&v[f]!==_||!f&&v!==_)&&this.setState(x)}this.runAnimation($r($r({},this.props),{},{from:_,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var a=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),a&&a()}},{key:"handleStyleChange",value:function(a){this.changeStyle(a)}},{key:"changeStyle",value:function(a){this.mounted&&this.setState({style:a})}},{key:"runJSAnimation",value:function(a){var o=this,c=a.from,u=a.to,f=a.duration,p=a.easing,h=a.begin,m=a.onAnimationEnd,v=a.onAnimationStart,b=ZB(c,u,zB(p),f,this.changeStyle),w=function(){o.stopJSAnimation=b()};this.manager.start([v,h,w,f,m])}},{key:"runStepAnimation",value:function(a){var o=this,c=a.steps,u=a.begin,f=a.onAnimationStart,p=c[0],h=p.style,m=p.duration,v=m===void 0?0:m,b=function(_,x,S){if(S===0)return _;var C=x.duration,O=x.easing,E=O===void 0?"ease":O,A=x.style,N=x.properties,P=x.onAnimationEnd,R=S>0?c[S-1]:x,D=N||Object.keys(A);if(typeof E=="function"||E==="spring")return[].concat(Lg(_),[o.runJSAnimation.bind(o,{from:R.style,to:A,duration:C,easing:E}),C]);var G=yN(D,C,E),q=$r($r($r({},R.style),A),{},{transition:G});return[].concat(Lg(_),[q,C,P]).filter(EB)};return this.manager.start([f].concat(Lg(c.reduce(b,[h,Math.max(v,u)])),[a.onAnimationEnd]))}},{key:"runAnimation",value:function(a){this.manager||(this.manager=NB());var o=a.begin,c=a.duration,u=a.attributeName,f=a.to,p=a.easing,h=a.onAnimationStart,m=a.onAnimationEnd,v=a.steps,b=a.children,w=this.manager;if(this.unSubscribe=w.subscribe(this.handleStyleChange),typeof p=="function"||typeof b=="function"||p==="spring"){this.runJSAnimation(a);return}if(v.length>1){this.runStepAnimation(a);return}var _=u?es({},u,f):f,x=yN(Object.keys(_),c,p);w.start([h,o,$r($r({},_),{},{transition:x}),c,m])}},{key:"render",value:function(){var a=this.props,o=a.children;a.begin;var c=a.duration;a.attributeName,a.easing;var u=a.isActive;a.steps,a.from,a.to,a.canBegin,a.onAnimationEnd,a.shouldReAnimate,a.onAnimationReStart;var f=ez(a,JB),p=T.Children.count(o),h=this.state.style;if(typeof o=="function")return o(h);if(!u||p===0||c<=0)return o;var m=function(b){var w=b.props,_=w.style,x=_===void 0?{}:_,S=w.className,C=T.cloneElement(b,$r($r({},f),{},{style:$r($r({},x),h),className:S}));return C};return p===1?m(T.Children.only(o)):V.createElement("div",null,T.Children.map(o,function(v){return m(v)}))}}]),r})(T.PureComponent);Qn.displayName="Animate";Qn.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};Qn.propTypes={from:Ye.oneOfType([Ye.object,Ye.string]),to:Ye.oneOfType([Ye.object,Ye.string]),attributeName:Ye.string,duration:Ye.number,begin:Ye.number,easing:Ye.oneOfType([Ye.string,Ye.func]),steps:Ye.arrayOf(Ye.shape({duration:Ye.number.isRequired,style:Ye.object.isRequired,easing:Ye.oneOfType([Ye.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),Ye.func]),properties:Ye.arrayOf("string"),onAnimationEnd:Ye.func})),children:Ye.oneOfType([Ye.node,Ye.func]),isActive:Ye.bool,canBegin:Ye.bool,onAnimationEnd:Ye.func,shouldReAnimate:Ye.bool,onAnimationStart:Ye.func,onAnimationReStart:Ye.func};BA();function Es(e){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Es(e)}function uu(){return uu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},uu.apply(this,arguments)}function pz(e,t){return vz(e)||gz(e,t)||mz(e,t)||hz()}function hz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mz(e,t){if(e){if(typeof e=="string")return SN(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return SN(e,t)}}function SN(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function gz(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,c,u=[],f=!0,p=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(h){p=!0,a=h}finally{try{if(!f&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw a}}return u}}function vz(e){if(Array.isArray(e))return e}function NN(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function AN(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?NN(Object(r),!0).forEach(function(n){yz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):NN(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function yz(e,t,r){return t=xz(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function xz(e){var t=bz(e,"string");return Es(t)=="symbol"?t:t+""}function bz(e,t){if(Es(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Es(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var CN=function(t,r,n,a,o){var c=Math.min(Math.abs(n)/2,Math.abs(a)/2),u=a>=0?1:-1,f=n>=0?1:-1,p=a>=0&&n>=0||a<0&&n<0?1:0,h;if(c>0&&o instanceof Array){for(var m=[0,0,0,0],v=0,b=4;v<b;v++)m[v]=o[v]>c?c:o[v];h="M".concat(t,",").concat(r+u*m[0]),m[0]>0&&(h+="A ".concat(m[0],",").concat(m[0],",0,0,").concat(p,",").concat(t+f*m[0],",").concat(r)),h+="L ".concat(t+n-f*m[1],",").concat(r),m[1]>0&&(h+="A ".concat(m[1],",").concat(m[1],",0,0,").concat(p,`,
        `).concat(t+n,",").concat(r+u*m[1])),h+="L ".concat(t+n,",").concat(r+a-u*m[2]),m[2]>0&&(h+="A ".concat(m[2],",").concat(m[2],",0,0,").concat(p,`,
        `).concat(t+n-f*m[2],",").concat(r+a)),h+="L ".concat(t+f*m[3],",").concat(r+a),m[3]>0&&(h+="A ".concat(m[3],",").concat(m[3],",0,0,").concat(p,`,
        `).concat(t,",").concat(r+a-u*m[3])),h+="Z"}else if(c>0&&o===+o&&o>0){var w=Math.min(c,o);h="M ".concat(t,",").concat(r+u*w,`
            A `).concat(w,",").concat(w,",0,0,").concat(p,",").concat(t+f*w,",").concat(r,`
            L `).concat(t+n-f*w,",").concat(r,`
            A `).concat(w,",").concat(w,",0,0,").concat(p,",").concat(t+n,",").concat(r+u*w,`
            L `).concat(t+n,",").concat(r+a-u*w,`
            A `).concat(w,",").concat(w,",0,0,").concat(p,",").concat(t+n-f*w,",").concat(r+a,`
            L `).concat(t+f*w,",").concat(r+a,`
            A `).concat(w,",").concat(w,",0,0,").concat(p,",").concat(t,",").concat(r+a-u*w," Z")}else h="M ".concat(t,",").concat(r," h ").concat(n," v ").concat(a," h ").concat(-n," Z");return h},wz=function(t,r){if(!t||!r)return!1;var n=t.x,a=t.y,o=r.x,c=r.y,u=r.width,f=r.height;if(Math.abs(u)>0&&Math.abs(f)>0){var p=Math.min(o,o+u),h=Math.max(o,o+u),m=Math.min(c,c+f),v=Math.max(c,c+f);return n>=p&&n<=h&&a>=m&&a<=v}return!1},_z={x:0,y:0,width:0,height:0,radius:0,isAnimationActive:!1,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},Tx=function(t){var r=AN(AN({},_z),t),n=T.useRef(),a=T.useState(-1),o=pz(a,2),c=o[0],u=o[1];T.useEffect(function(){if(n.current&&n.current.getTotalLength)try{var E=n.current.getTotalLength();E&&u(E)}catch{}},[]);var f=r.x,p=r.y,h=r.width,m=r.height,v=r.radius,b=r.className,w=r.animationEasing,_=r.animationDuration,x=r.animationBegin,S=r.isAnimationActive,C=r.isUpdateAnimationActive;if(f!==+f||p!==+p||h!==+h||m!==+m||h===0||m===0)return null;var O=We("recharts-rectangle",b);return C?V.createElement(Qn,{canBegin:c>0,from:{width:h,height:m,x:f,y:p},to:{width:h,height:m,x:f,y:p},duration:_,animationEasing:w,isActive:C},function(E){var A=E.width,N=E.height,P=E.x,R=E.y;return V.createElement(Qn,{canBegin:c>0,from:"0px ".concat(c===-1?1:c,"px"),to:"".concat(c,"px 0px"),attributeName:"strokeDasharray",begin:x,duration:_,isActive:S,easing:w},V.createElement("path",uu({},Ue(r,!0),{className:O,d:CN(P,R,A,N,v),ref:n})))}):V.createElement("path",uu({},Ue(r,!0),{className:O,d:CN(f,p,h,m,v)}))};function ly(){return ly=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ly.apply(this,arguments)}var CE=function(t){var r=t.cx,n=t.cy,a=t.r,o=t.className,c=We("recharts-dot",o);return r===+r&&n===+n&&a===+a?T.createElement("circle",ly({},Ue(t,!1),kc(t),{className:c,cx:r,cy:n,r:a})):null};function ks(e){"@babel/helpers - typeof";return ks=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ks(e)}var jz=["x","y","top","left","width","height","className"];function cy(){return cy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},cy.apply(this,arguments)}function ON(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Sz(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ON(Object(r),!0).forEach(function(n){Nz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ON(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Nz(e,t,r){return t=Az(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Az(e){var t=Cz(e,"string");return ks(t)=="symbol"?t:t+""}function Cz(e,t){if(ks(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(ks(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Oz(e,t){if(e==null)return{};var r=Ez(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ez(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var kz=function(t,r,n,a,o,c){return"M".concat(t,",").concat(o,"v").concat(a,"M").concat(c,",").concat(r,"h").concat(n)},Pz=function(t){var r=t.x,n=r===void 0?0:r,a=t.y,o=a===void 0?0:a,c=t.top,u=c===void 0?0:c,f=t.left,p=f===void 0?0:f,h=t.width,m=h===void 0?0:h,v=t.height,b=v===void 0?0:v,w=t.className,_=Oz(t,jz),x=Sz({x:n,y:o,top:u,left:p,width:m,height:b},_);return!he(n)||!he(o)||!he(m)||!he(b)||!he(u)||!he(p)?null:V.createElement("path",cy({},Ue(x,!0),{className:We("recharts-cross",w),d:kz(n,o,m,b,u,p)}))},Bg,EN;function Tz(){if(EN)return Bg;EN=1;var e=VC(),t=e(Object.getPrototypeOf,Object);return Bg=t,Bg}var zg,kN;function Rz(){if(kN)return zg;kN=1;var e=jn(),t=Tz(),r=Sn(),n="[object Object]",a=Function.prototype,o=Object.prototype,c=a.toString,u=o.hasOwnProperty,f=c.call(Object);function p(h){if(!r(h)||e(h)!=n)return!1;var m=t(h);if(m===null)return!0;var v=u.call(m,"constructor")&&m.constructor;return typeof v=="function"&&v instanceof v&&c.call(v)==f}return zg=p,zg}var Dz=Rz();const Iz=Je(Dz);var qg,PN;function Mz(){if(PN)return qg;PN=1;var e=jn(),t=Sn(),r="[object Boolean]";function n(a){return a===!0||a===!1||t(a)&&e(a)==r}return qg=n,qg}var $z=Mz();const Fz=Je($z);function Ps(e){"@babel/helpers - typeof";return Ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ps(e)}function du(){return du=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},du.apply(this,arguments)}function Lz(e,t){return Uz(e)||qz(e,t)||zz(e,t)||Bz()}function Bz(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zz(e,t){if(e){if(typeof e=="string")return TN(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return TN(e,t)}}function TN(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function qz(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,c,u=[],f=!0,p=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(h){p=!0,a=h}finally{try{if(!f&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw a}}return u}}function Uz(e){if(Array.isArray(e))return e}function RN(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function DN(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?RN(Object(r),!0).forEach(function(n){Wz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):RN(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Wz(e,t,r){return t=Hz(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Hz(e){var t=Gz(e,"string");return Ps(t)=="symbol"?t:t+""}function Gz(e,t){if(Ps(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ps(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var IN=function(t,r,n,a,o){var c=n-a,u;return u="M ".concat(t,",").concat(r),u+="L ".concat(t+n,",").concat(r),u+="L ".concat(t+n-c/2,",").concat(r+o),u+="L ".concat(t+n-c/2-a,",").concat(r+o),u+="L ".concat(t,",").concat(r," Z"),u},Yz={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},Vz=function(t){var r=DN(DN({},Yz),t),n=T.useRef(),a=T.useState(-1),o=Lz(a,2),c=o[0],u=o[1];T.useEffect(function(){if(n.current&&n.current.getTotalLength)try{var O=n.current.getTotalLength();O&&u(O)}catch{}},[]);var f=r.x,p=r.y,h=r.upperWidth,m=r.lowerWidth,v=r.height,b=r.className,w=r.animationEasing,_=r.animationDuration,x=r.animationBegin,S=r.isUpdateAnimationActive;if(f!==+f||p!==+p||h!==+h||m!==+m||v!==+v||h===0&&m===0||v===0)return null;var C=We("recharts-trapezoid",b);return S?V.createElement(Qn,{canBegin:c>0,from:{upperWidth:0,lowerWidth:0,height:v,x:f,y:p},to:{upperWidth:h,lowerWidth:m,height:v,x:f,y:p},duration:_,animationEasing:w,isActive:S},function(O){var E=O.upperWidth,A=O.lowerWidth,N=O.height,P=O.x,R=O.y;return V.createElement(Qn,{canBegin:c>0,from:"0px ".concat(c===-1?1:c,"px"),to:"".concat(c,"px 0px"),attributeName:"strokeDasharray",begin:x,duration:_,easing:w},V.createElement("path",du({},Ue(r,!0),{className:C,d:IN(P,R,E,A,N),ref:n})))}):V.createElement("g",null,V.createElement("path",du({},Ue(r,!0),{className:C,d:IN(f,p,h,m,v)})))},Kz=["option","shapeType","propTransformer","activeClassName","isActive"];function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ts(e)}function Xz(e,t){if(e==null)return{};var r=Qz(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Qz(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function MN(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function fu(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?MN(Object(r),!0).forEach(function(n){Zz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):MN(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Zz(e,t,r){return t=Jz(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Jz(e){var t=eq(e,"string");return Ts(t)=="symbol"?t:t+""}function eq(e,t){if(Ts(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ts(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function tq(e,t){return fu(fu({},t),e)}function rq(e,t){return e==="symbols"}function $N(e){var t=e.shapeType,r=e.elementProps;switch(t){case"rectangle":return V.createElement(Tx,r);case"trapezoid":return V.createElement(Vz,r);case"sector":return V.createElement(xE,r);case"symbols":if(rq(t))return V.createElement(Ky,r);break;default:return null}}function nq(e){return T.isValidElement(e)?e.props:e}function iq(e){var t=e.option,r=e.shapeType,n=e.propTransformer,a=n===void 0?tq:n,o=e.activeClassName,c=o===void 0?"recharts-active-shape":o,u=e.isActive,f=Xz(e,Kz),p;if(T.isValidElement(t))p=T.cloneElement(t,fu(fu({},f),nq(t)));else if($e(t))p=t(f);else if(Iz(t)&&!Fz(t)){var h=a(t,f);p=V.createElement($N,{shapeType:r,elementProps:h})}else{var m=f;p=V.createElement($N,{shapeType:r,elementProps:m})}return u?V.createElement(Pt,{className:c},p):p}function nd(e,t){return t!=null&&"trapezoids"in e.props}function id(e,t){return t!=null&&"sectors"in e.props}function Rs(e,t){return t!=null&&"points"in e.props}function aq(e,t){var r,n,a=e.x===(t==null||(r=t.labelViewBox)===null||r===void 0?void 0:r.x)||e.x===t.x,o=e.y===(t==null||(n=t.labelViewBox)===null||n===void 0?void 0:n.y)||e.y===t.y;return a&&o}function oq(e,t){var r=e.endAngle===t.endAngle,n=e.startAngle===t.startAngle;return r&&n}function sq(e,t){var r=e.x===t.x,n=e.y===t.y,a=e.z===t.z;return r&&n&&a}function lq(e,t){var r;return nd(e,t)?r=aq:id(e,t)?r=oq:Rs(e,t)&&(r=sq),r}function cq(e,t){var r;return nd(e,t)?r="trapezoids":id(e,t)?r="sectors":Rs(e,t)&&(r="points"),r}function uq(e,t){if(nd(e,t)){var r;return(r=t.tooltipPayload)===null||r===void 0||(r=r[0])===null||r===void 0||(r=r.payload)===null||r===void 0?void 0:r.payload}if(id(e,t)){var n;return(n=t.tooltipPayload)===null||n===void 0||(n=n[0])===null||n===void 0||(n=n.payload)===null||n===void 0?void 0:n.payload}return Rs(e,t)?t.payload:{}}function dq(e){var t=e.activeTooltipItem,r=e.graphicalItem,n=e.itemData,a=cq(r,t),o=uq(r,t),c=n.filter(function(f,p){var h=Ox(o,f),m=r.props[a].filter(function(w){var _=lq(r,t);return _(w,t)}),v=r.props[a].indexOf(m[m.length-1]),b=p===v;return h&&b}),u=n.indexOf(c[c.length-1]);return u}var Ug,FN;function fq(){if(FN)return Ug;FN=1;var e=Math.ceil,t=Math.max;function r(n,a,o,c){for(var u=-1,f=t(e((a-n)/(o||1)),0),p=Array(f);f--;)p[c?f:++u]=n,n+=o;return p}return Ug=r,Ug}var Wg,LN;function OE(){if(LN)return Wg;LN=1;var e=uO(),t=1/0,r=17976931348623157e292;function n(a){if(!a)return a===0?a:0;if(a=e(a),a===t||a===-t){var o=a<0?-1:1;return o*r}return a===a?a:0}return Wg=n,Wg}var Hg,BN;function pq(){if(BN)return Hg;BN=1;var e=fq(),t=Hu(),r=OE();function n(a){return function(o,c,u){return u&&typeof u!="number"&&t(o,c,u)&&(c=u=void 0),o=r(o),c===void 0?(c=o,o=0):c=r(c),u=u===void 0?o<c?1:-1:r(u),e(o,c,u,a)}}return Hg=n,Hg}var Gg,zN;function hq(){if(zN)return Gg;zN=1;var e=pq(),t=e();return Gg=t,Gg}var mq=hq();const pu=Je(mq);function Ds(e){"@babel/helpers - typeof";return Ds=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ds(e)}function qN(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function UN(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?qN(Object(r),!0).forEach(function(n){EE(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):qN(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function EE(e,t,r){return t=gq(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function gq(e){var t=vq(e,"string");return Ds(t)=="symbol"?t:t+""}function vq(e,t){if(Ds(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ds(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var yq=["Webkit","Moz","O","ms"],xq=function(t,r){var n=t.replace(/(\w)/,function(o){return o.toUpperCase()}),a=yq.reduce(function(o,c){return UN(UN({},o),{},EE({},c+n,r))},{});return a[t]=r,a};function Ma(e){"@babel/helpers - typeof";return Ma=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ma(e)}function hu(){return hu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},hu.apply(this,arguments)}function WN(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Yg(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?WN(Object(r),!0).forEach(function(n){fr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):WN(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function bq(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function HN(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,PE(n.key),n)}}function wq(e,t,r){return t&&HN(e.prototype,t),r&&HN(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _q(e,t,r){return t=mu(t),jq(e,kE()?Reflect.construct(t,r||[],mu(e).constructor):t.apply(e,r))}function jq(e,t){if(t&&(Ma(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Sq(e)}function Sq(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function kE(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(kE=function(){return!!e})()}function mu(e){return mu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},mu(e)}function Nq(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&uy(e,t)}function uy(e,t){return uy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},uy(e,t)}function fr(e,t,r){return t=PE(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function PE(e){var t=Aq(e,"string");return Ma(t)=="symbol"?t:t+""}function Aq(e,t){if(Ma(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ma(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Cq=function(t){var r=t.data,n=t.startIndex,a=t.endIndex,o=t.x,c=t.width,u=t.travellerWidth;if(!r||!r.length)return{};var f=r.length,p=rs().domain(pu(0,f)).range([o,o+c-u]),h=p.domain().map(function(m){return p(m)});return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,isTravellerFocused:!1,startX:p(n),endX:p(a),scale:p,scaleValues:h}},GN=function(t){return t.changedTouches&&!!t.changedTouches.length},$a=(function(e){function t(r){var n;return bq(this,t),n=_q(this,t,[r]),fr(n,"handleDrag",function(a){n.leaveTimer&&(clearTimeout(n.leaveTimer),n.leaveTimer=null),n.state.isTravellerMoving?n.handleTravellerMove(a):n.state.isSlideMoving&&n.handleSlideDrag(a)}),fr(n,"handleTouchMove",function(a){a.changedTouches!=null&&a.changedTouches.length>0&&n.handleDrag(a.changedTouches[0])}),fr(n,"handleDragEnd",function(){n.setState({isTravellerMoving:!1,isSlideMoving:!1},function(){var a=n.props,o=a.endIndex,c=a.onDragEnd,u=a.startIndex;c?.({endIndex:o,startIndex:u})}),n.detachDragEndListener()}),fr(n,"handleLeaveWrapper",function(){(n.state.isTravellerMoving||n.state.isSlideMoving)&&(n.leaveTimer=window.setTimeout(n.handleDragEnd,n.props.leaveTimeOut))}),fr(n,"handleEnterSlideOrTraveller",function(){n.setState({isTextActive:!0})}),fr(n,"handleLeaveSlideOrTraveller",function(){n.setState({isTextActive:!1})}),fr(n,"handleSlideDragStart",function(a){var o=GN(a)?a.changedTouches[0]:a;n.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:o.pageX}),n.attachDragEndListener()}),n.travellerDragStartHandlers={startX:n.handleTravellerDragStart.bind(n,"startX"),endX:n.handleTravellerDragStart.bind(n,"endX")},n.state={},n}return Nq(t,e),wq(t,[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(n){var a=n.startX,o=n.endX,c=this.state.scaleValues,u=this.props,f=u.gap,p=u.data,h=p.length-1,m=Math.min(a,o),v=Math.max(a,o),b=t.getIndexInRange(c,m),w=t.getIndexInRange(c,v);return{startIndex:b-b%f,endIndex:w===h?h:w-w%f}}},{key:"getTextOfTick",value:function(n){var a=this.props,o=a.data,c=a.tickFormatter,u=a.dataKey,f=en(o[n],u,n);return $e(c)?c(f,n):f}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0),window.addEventListener("mousemove",this.handleDrag,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0),window.removeEventListener("mousemove",this.handleDrag,!0)}},{key:"handleSlideDrag",value:function(n){var a=this.state,o=a.slideMoveStartX,c=a.startX,u=a.endX,f=this.props,p=f.x,h=f.width,m=f.travellerWidth,v=f.startIndex,b=f.endIndex,w=f.onChange,_=n.pageX-o;_>0?_=Math.min(_,p+h-m-u,p+h-m-c):_<0&&(_=Math.max(_,p-c,p-u));var x=this.getIndex({startX:c+_,endX:u+_});(x.startIndex!==v||x.endIndex!==b)&&w&&w(x),this.setState({startX:c+_,endX:u+_,slideMoveStartX:n.pageX})}},{key:"handleTravellerDragStart",value:function(n,a){var o=GN(a)?a.changedTouches[0]:a;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:n,brushMoveStartX:o.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(n){var a=this.state,o=a.brushMoveStartX,c=a.movingTravellerId,u=a.endX,f=a.startX,p=this.state[c],h=this.props,m=h.x,v=h.width,b=h.travellerWidth,w=h.onChange,_=h.gap,x=h.data,S={startX:this.state.startX,endX:this.state.endX},C=n.pageX-o;C>0?C=Math.min(C,m+v-b-p):C<0&&(C=Math.max(C,m-p)),S[c]=p+C;var O=this.getIndex(S),E=O.startIndex,A=O.endIndex,N=function(){var R=x.length-1;return c==="startX"&&(u>f?E%_===0:A%_===0)||u<f&&A===R||c==="endX"&&(u>f?A%_===0:E%_===0)||u>f&&A===R};this.setState(fr(fr({},c,p+C),"brushMoveStartX",n.pageX),function(){w&&N()&&w(O)})}},{key:"handleTravellerMoveKeyboard",value:function(n,a){var o=this,c=this.state,u=c.scaleValues,f=c.startX,p=c.endX,h=this.state[a],m=u.indexOf(h);if(m!==-1){var v=m+n;if(!(v===-1||v>=u.length)){var b=u[v];a==="startX"&&b>=p||a==="endX"&&b<=f||this.setState(fr({},a,b),function(){o.props.onChange(o.getIndex({startX:o.state.startX,endX:o.state.endX}))})}}}},{key:"renderBackground",value:function(){var n=this.props,a=n.x,o=n.y,c=n.width,u=n.height,f=n.fill,p=n.stroke;return V.createElement("rect",{stroke:p,fill:f,x:a,y:o,width:c,height:u})}},{key:"renderPanorama",value:function(){var n=this.props,a=n.x,o=n.y,c=n.width,u=n.height,f=n.data,p=n.children,h=n.padding,m=T.Children.only(p);return m?V.cloneElement(m,{x:a,y:o,width:c,height:u,margin:h,compact:!0,data:f}):null}},{key:"renderTravellerLayer",value:function(n,a){var o,c,u=this,f=this.props,p=f.y,h=f.travellerWidth,m=f.height,v=f.traveller,b=f.ariaLabel,w=f.data,_=f.startIndex,x=f.endIndex,S=Math.max(n,this.props.x),C=Yg(Yg({},Ue(this.props,!1)),{},{x:S,y:p,width:h,height:m}),O=b||"Min value: ".concat((o=w[_])===null||o===void 0?void 0:o.name,", Max value: ").concat((c=w[x])===null||c===void 0?void 0:c.name);return V.createElement(Pt,{tabIndex:0,role:"slider","aria-label":O,"aria-valuenow":n,className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[a],onTouchStart:this.travellerDragStartHandlers[a],onKeyDown:function(A){["ArrowLeft","ArrowRight"].includes(A.key)&&(A.preventDefault(),A.stopPropagation(),u.handleTravellerMoveKeyboard(A.key==="ArrowRight"?1:-1,a))},onFocus:function(){u.setState({isTravellerFocused:!0})},onBlur:function(){u.setState({isTravellerFocused:!1})},style:{cursor:"col-resize"}},t.renderTraveller(v,C))}},{key:"renderSlide",value:function(n,a){var o=this.props,c=o.y,u=o.height,f=o.stroke,p=o.travellerWidth,h=Math.min(n,a)+p,m=Math.max(Math.abs(a-n)-p,0);return V.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:f,fillOpacity:.2,x:h,y:c,width:m,height:u})}},{key:"renderText",value:function(){var n=this.props,a=n.startIndex,o=n.endIndex,c=n.y,u=n.height,f=n.travellerWidth,p=n.stroke,h=this.state,m=h.startX,v=h.endX,b=5,w={pointerEvents:"none",fill:p};return V.createElement(Pt,{className:"recharts-brush-texts"},V.createElement(qc,hu({textAnchor:"end",verticalAnchor:"middle",x:Math.min(m,v)-b,y:c+u/2},w),this.getTextOfTick(a)),V.createElement(qc,hu({textAnchor:"start",verticalAnchor:"middle",x:Math.max(m,v)+f+b,y:c+u/2},w),this.getTextOfTick(o)))}},{key:"render",value:function(){var n=this.props,a=n.data,o=n.className,c=n.children,u=n.x,f=n.y,p=n.width,h=n.height,m=n.alwaysShowText,v=this.state,b=v.startX,w=v.endX,_=v.isTextActive,x=v.isSlideMoving,S=v.isTravellerMoving,C=v.isTravellerFocused;if(!a||!a.length||!he(u)||!he(f)||!he(p)||!he(h)||p<=0||h<=0)return null;var O=We("recharts-brush",o),E=V.Children.count(c)===1,A=xq("userSelect","none");return V.createElement(Pt,{className:O,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:A},this.renderBackground(),E&&this.renderPanorama(),this.renderSlide(b,w),this.renderTravellerLayer(b,"startX"),this.renderTravellerLayer(w,"endX"),(_||x||S||C||m)&&this.renderText())}}],[{key:"renderDefaultTraveller",value:function(n){var a=n.x,o=n.y,c=n.width,u=n.height,f=n.stroke,p=Math.floor(o+u/2)-1;return V.createElement(V.Fragment,null,V.createElement("rect",{x:a,y:o,width:c,height:u,fill:f,stroke:"none"}),V.createElement("line",{x1:a+1,y1:p,x2:a+c-1,y2:p,fill:"none",stroke:"#fff"}),V.createElement("line",{x1:a+1,y1:p+2,x2:a+c-1,y2:p+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(n,a){var o;return V.isValidElement(n)?o=V.cloneElement(n,a):$e(n)?o=n(a):o=t.renderDefaultTraveller(a),o}},{key:"getDerivedStateFromProps",value:function(n,a){var o=n.data,c=n.width,u=n.x,f=n.travellerWidth,p=n.updateId,h=n.startIndex,m=n.endIndex;if(o!==a.prevData||p!==a.prevUpdateId)return Yg({prevData:o,prevTravellerWidth:f,prevUpdateId:p,prevX:u,prevWidth:c},o&&o.length?Cq({data:o,width:c,x:u,travellerWidth:f,startIndex:h,endIndex:m}):{scale:null,scaleValues:null});if(a.scale&&(c!==a.prevWidth||u!==a.prevX||f!==a.prevTravellerWidth)){a.scale.range([u,u+c-f]);var v=a.scale.domain().map(function(b){return a.scale(b)});return{prevData:o,prevTravellerWidth:f,prevUpdateId:p,prevX:u,prevWidth:c,startX:a.scale(n.startIndex),endX:a.scale(n.endIndex),scaleValues:v}}return null}},{key:"getIndexInRange",value:function(n,a){for(var o=n.length,c=0,u=o-1;u-c>1;){var f=Math.floor((c+u)/2);n[f]>a?u=f:c=f}return a>=n[u]?u:c}}])})(T.PureComponent);fr($a,"displayName","Brush");fr($a,"defaultProps",{height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1});var Vg,YN;function Oq(){if(YN)return Vg;YN=1;var e=rx();function t(r,n){var a;return e(r,function(o,c,u){return a=n(o,c,u),!a}),!!a}return Vg=t,Vg}var Kg,VN;function Eq(){if(VN)return Kg;VN=1;var e=zC(),t=Jn(),r=Oq(),n=ar(),a=Hu();function o(c,u,f){var p=n(c)?e:r;return f&&a(c,u,f)&&(u=void 0),p(c,t(u,3))}return Kg=o,Kg}var kq=Eq();const Pq=Je(kq);var Zr=function(t,r){var n=t.alwaysShow,a=t.ifOverflow;return n&&(a="extendDomain"),a===r},Xg,KN;function Tq(){if(KN)return Xg;KN=1;var e=aO();function t(r,n,a){n=="__proto__"&&e?e(r,n,{configurable:!0,enumerable:!0,value:a,writable:!0}):r[n]=a}return Xg=t,Xg}var Qg,XN;function Rq(){if(XN)return Qg;XN=1;var e=Tq(),t=nO(),r=Jn();function n(a,o){var c={};return o=r(o,3),t(a,function(u,f,p){e(c,f,o(u,f,p))}),c}return Qg=n,Qg}var Dq=Rq();const Iq=Je(Dq);var Zg,QN;function Mq(){if(QN)return Zg;QN=1;function e(t,r){for(var n=-1,a=t==null?0:t.length;++n<a;)if(!r(t[n],n,t))return!1;return!0}return Zg=e,Zg}var Jg,ZN;function $q(){if(ZN)return Jg;ZN=1;var e=rx();function t(r,n){var a=!0;return e(r,function(o,c,u){return a=!!n(o,c,u),a}),a}return Jg=t,Jg}var ev,JN;function Fq(){if(JN)return ev;JN=1;var e=Mq(),t=$q(),r=Jn(),n=ar(),a=Hu();function o(c,u,f){var p=n(c)?e:t;return f&&a(c,u,f)&&(u=void 0),p(c,r(u,3))}return ev=o,ev}var Lq=Fq();const TE=Je(Lq);var Bq=["x","y"];function Is(e){"@babel/helpers - typeof";return Is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Is(e)}function dy(){return dy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},dy.apply(this,arguments)}function eA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Qo(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?eA(Object(r),!0).forEach(function(n){zq(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function zq(e,t,r){return t=qq(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function qq(e){var t=Uq(e,"string");return Is(t)=="symbol"?t:t+""}function Uq(e,t){if(Is(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Is(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Wq(e,t){if(e==null)return{};var r=Hq(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Hq(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function Gq(e,t){var r=e.x,n=e.y,a=Wq(e,Bq),o="".concat(r),c=parseInt(o,10),u="".concat(n),f=parseInt(u,10),p="".concat(t.height||a.height),h=parseInt(p,10),m="".concat(t.width||a.width),v=parseInt(m,10);return Qo(Qo(Qo(Qo(Qo({},t),a),c?{x:c}:{}),f?{y:f}:{}),{},{height:h,width:v,name:t.name,radius:t.radius})}function tA(e){return V.createElement(iq,dy({shapeType:"rectangle",propTransformer:Gq,activeClassName:"recharts-active-bar"},e))}var Yq=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return function(n,a){if(typeof t=="number")return t;var o=he(n)||JR(n);return o?t(n,a):(o||Di(),r)}},Vq=["value","background"],RE;function Fa(e){"@babel/helpers - typeof";return Fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fa(e)}function Kq(e,t){if(e==null)return{};var r=Xq(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Xq(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function gu(){return gu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},gu.apply(this,arguments)}function rA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function yt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?rA(Object(r),!0).forEach(function(n){Vn(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):rA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Qq(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nA(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,IE(n.key),n)}}function Zq(e,t,r){return t&&nA(e.prototype,t),r&&nA(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Jq(e,t,r){return t=vu(t),e7(e,DE()?Reflect.construct(t,r||[],vu(e).constructor):t.apply(e,r))}function e7(e,t){if(t&&(Fa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return t7(e)}function t7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function DE(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(DE=function(){return!!e})()}function vu(e){return vu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},vu(e)}function r7(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&fy(e,t)}function fy(e,t){return fy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},fy(e,t)}function Vn(e,t,r){return t=IE(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function IE(e){var t=n7(e,"string");return Fa(t)=="symbol"?t:t+""}function n7(e,t){if(Fa(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Fa(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var Bi=(function(e){function t(){var r;Qq(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=Jq(this,t,[].concat(a)),Vn(r,"state",{isAnimationFinished:!1}),Vn(r,"id",Fu("recharts-bar-")),Vn(r,"handleAnimationEnd",function(){var c=r.props.onAnimationEnd;r.setState({isAnimationFinished:!0}),c&&c()}),Vn(r,"handleAnimationStart",function(){var c=r.props.onAnimationStart;r.setState({isAnimationFinished:!1}),c&&c()}),r}return r7(t,e),Zq(t,[{key:"renderRectanglesStatically",value:function(n){var a=this,o=this.props,c=o.shape,u=o.dataKey,f=o.activeIndex,p=o.activeBar,h=Ue(this.props,!1);return n&&n.map(function(m,v){var b=v===f,w=b?p:c,_=yt(yt(yt({},h),m),{},{isActive:b,option:w,index:v,dataKey:u,onAnimationStart:a.handleAnimationStart,onAnimationEnd:a.handleAnimationEnd});return V.createElement(Pt,gu({className:"recharts-bar-rectangle"},Pc(a.props,m,v),{key:"rectangle-".concat(m?.x,"-").concat(m?.y,"-").concat(m?.value,"-").concat(v)}),V.createElement(tA,_))})}},{key:"renderRectanglesWithAnimation",value:function(){var n=this,a=this.props,o=a.data,c=a.layout,u=a.isAnimationActive,f=a.animationBegin,p=a.animationDuration,h=a.animationEasing,m=a.animationId,v=this.state.prevData;return V.createElement(Qn,{begin:f,duration:p,isActive:u,easing:h,from:{t:0},to:{t:1},key:"bar-".concat(m),onAnimationEnd:this.handleAnimationEnd,onAnimationStart:this.handleAnimationStart},function(b){var w=b.t,_=o.map(function(x,S){var C=v&&v[S];if(C){var O=fa(C.x,x.x),E=fa(C.y,x.y),A=fa(C.width,x.width),N=fa(C.height,x.height);return yt(yt({},x),{},{x:O(w),y:E(w),width:A(w),height:N(w)})}if(c==="horizontal"){var P=fa(0,x.height),R=P(w);return yt(yt({},x),{},{y:x.y+x.height-R,height:R})}var D=fa(0,x.width),G=D(w);return yt(yt({},x),{},{width:G})});return V.createElement(Pt,null,n.renderRectanglesStatically(_))})}},{key:"renderRectangles",value:function(){var n=this.props,a=n.data,o=n.isAnimationActive,c=this.state.prevData;return o&&a&&a.length&&(!c||!Ox(c,a))?this.renderRectanglesWithAnimation():this.renderRectanglesStatically(a)}},{key:"renderBackground",value:function(){var n=this,a=this.props,o=a.data,c=a.dataKey,u=a.activeIndex,f=Ue(this.props.background,!1);return o.map(function(p,h){p.value;var m=p.background,v=Kq(p,Vq);if(!m)return null;var b=yt(yt(yt(yt(yt({},v),{},{fill:"#eee"},m),f),Pc(n.props,p,h)),{},{onAnimationStart:n.handleAnimationStart,onAnimationEnd:n.handleAnimationEnd,dataKey:c,index:h,className:"recharts-bar-background-rectangle"});return V.createElement(tA,gu({key:"background-bar-".concat(h),option:n.props.background,isActive:h===u},b))})}},{key:"renderErrorBar",value:function(n,a){if(this.props.isAnimationActive&&!this.state.isAnimationFinished)return null;var o=this.props,c=o.data,u=o.xAxis,f=o.yAxis,p=o.layout,h=o.children,m=zr(h,rd);if(!m)return null;var v=p==="vertical"?c[0].height/2:c[0].width/2,b=function(x,S){var C=Array.isArray(x.value)?x.value[1]:x.value;return{x:x.x,y:x.y,value:C,errorVal:en(x,S)}},w={clipPath:n?"url(#clipPath-".concat(a,")"):null};return V.createElement(Pt,w,m.map(function(_){return V.cloneElement(_,{key:"error-bar-".concat(a,"-").concat(_.props.dataKey),data:c,xAxis:u,yAxis:f,layout:p,offset:v,dataPointFormatter:b})}))}},{key:"render",value:function(){var n=this.props,a=n.hide,o=n.data,c=n.className,u=n.xAxis,f=n.yAxis,p=n.left,h=n.top,m=n.width,v=n.height,b=n.isAnimationActive,w=n.background,_=n.id;if(a||!o||!o.length)return null;var x=this.state.isAnimationFinished,S=We("recharts-bar",c),C=u&&u.allowDataOverflow,O=f&&f.allowDataOverflow,E=C||O,A=He(_)?this.id:_;return V.createElement(Pt,{className:S},C||O?V.createElement("defs",null,V.createElement("clipPath",{id:"clipPath-".concat(A)},V.createElement("rect",{x:C?p:p-m/2,y:O?h:h-v/2,width:C?m:m*2,height:O?v:v*2}))):null,V.createElement(Pt,{className:"recharts-bar-rectangles",clipPath:E?"url(#clipPath-".concat(A,")"):null},w?this.renderBackground():null,this.renderRectangles()),this.renderErrorBar(E,A),(!b||x)&&Ei.renderCallByParent(this.props,o))}}],[{key:"getDerivedStateFromProps",value:function(n,a){return n.animationId!==a.prevAnimationId?{prevAnimationId:n.animationId,curData:n.data,prevData:a.curData}:n.data!==a.curData?{curData:n.data}:null}}])})(T.PureComponent);RE=Bi;Vn(Bi,"displayName","Bar");Vn(Bi,"defaultProps",{xAxisId:0,yAxisId:0,legendType:"rect",minPointSize:0,hide:!1,data:[],layout:"vertical",activeBar:!1,isAnimationActive:!Vs.isSsr,animationBegin:0,animationDuration:400,animationEasing:"ease"});Vn(Bi,"getComposedData",function(e){var t=e.props,r=e.item,n=e.barPosition,a=e.bandSize,o=e.xAxis,c=e.yAxis,u=e.xAxisTicks,f=e.yAxisTicks,p=e.stackedData,h=e.dataStartIndex,m=e.displayedData,v=e.offset,b=y6(n,r);if(!b)return null;var w=t.layout,_=r.type.defaultProps,x=_!==void 0?yt(yt({},_),r.props):r.props,S=x.dataKey,C=x.children,O=x.minPointSize,E=w==="horizontal"?c:o,A=p?E.scale.domain():null,N=A6({numericAxis:E}),P=zr(C,ax),R=m.map(function(D,G){var q,M,H,B,F,Y;p?q=x6(p[h+G],A):(q=en(D,S),Array.isArray(q)||(q=[N,q]));var J=Yq(O,RE.defaultProps.minPointSize)(q[1],G);if(w==="horizontal"){var U,X=[c.scale(q[0]),c.scale(q[1])],K=X[0],I=X[1];M=qS({axis:o,ticks:u,bandSize:a,offset:b.offset,entry:D,index:G}),H=(U=I??K)!==null&&U!==void 0?U:void 0,B=b.size;var L=K-I;if(F=Number.isNaN(L)?0:L,Y={x:M,y:c.y,width:B,height:c.height},Math.abs(J)>0&&Math.abs(F)<Math.abs(J)){var ie=Br(F||J)*(Math.abs(J)-Math.abs(F));H-=ie,F+=ie}}else{var pe=[o.scale(q[0]),o.scale(q[1])],fe=pe[0],ve=pe[1];if(M=fe,H=qS({axis:c,ticks:f,bandSize:a,offset:b.offset,entry:D,index:G}),B=ve-fe,F=b.size,Y={x:o.x,y:H,width:o.width,height:F},Math.abs(J)>0&&Math.abs(B)<Math.abs(J)){var ge=Br(B||J)*(Math.abs(J)-Math.abs(B));B+=ge}}return yt(yt(yt({},D),{},{x:M,y:H,width:B,height:F,value:p?q:q[1],payload:D,background:Y},P&&P[G]&&P[G].props),{},{tooltipPayload:[gE(r,D)],tooltipPosition:{x:M+B/2,y:H+F/2}})});return yt({data:R,layout:w},v)});function Ms(e){"@babel/helpers - typeof";return Ms=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ms(e)}function i7(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function iA(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ME(n.key),n)}}function a7(e,t,r){return t&&iA(e.prototype,t),r&&iA(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function aA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Fr(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?aA(Object(r),!0).forEach(function(n){ad(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):aA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ad(e,t,r){return t=ME(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ME(e){var t=o7(e,"string");return Ms(t)=="symbol"?t:t+""}function o7(e,t){if(Ms(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ms(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var s7=function(t,r,n,a,o){var c=t.width,u=t.height,f=t.layout,p=t.children,h=Object.keys(r),m={left:n.left,leftMirror:n.left,right:c-n.right,rightMirror:c-n.right,top:n.top,topMirror:n.top,bottom:u-n.bottom,bottomMirror:u-n.bottom},v=!!pr(p,Bi);return h.reduce(function(b,w){var _=r[w],x=_.orientation,S=_.domain,C=_.padding,O=C===void 0?{}:C,E=_.mirror,A=_.reversed,N="".concat(x).concat(E?"Mirror":""),P,R,D,G,q;if(_.type==="number"&&(_.padding==="gap"||_.padding==="no-gap")){var M=S[1]-S[0],H=1/0,B=_.categoricalDomain.sort(r4);if(B.forEach(function(pe,fe){fe>0&&(H=Math.min((pe||0)-(B[fe-1]||0),H))}),Number.isFinite(H)){var F=H/M,Y=_.layout==="vertical"?n.height:n.width;if(_.padding==="gap"&&(P=F*Y/2),_.padding==="no-gap"){var J=Ti(t.barCategoryGap,F*Y),U=F*Y/2;P=U-J-(U-J)/Y*J}}}a==="xAxis"?R=[n.left+(O.left||0)+(P||0),n.left+n.width-(O.right||0)-(P||0)]:a==="yAxis"?R=f==="horizontal"?[n.top+n.height-(O.bottom||0),n.top+(O.top||0)]:[n.top+(O.top||0)+(P||0),n.top+n.height-(O.bottom||0)-(P||0)]:R=_.range,A&&(R=[R[1],R[0]]);var X=g6(_,o,v),K=X.scale,I=X.realScaleType;K.domain(S).range(R),v6(K);var L=N6(K,Fr(Fr({},_),{},{realScaleType:I}));a==="xAxis"?(q=x==="top"&&!E||x==="bottom"&&E,D=n.left,G=m[N]-q*_.height):a==="yAxis"&&(q=x==="left"&&!E||x==="right"&&E,D=m[N]-q*_.width,G=n.top);var ie=Fr(Fr(Fr({},_),L),{},{realScaleType:I,x:D,y:G,scale:K,width:a==="xAxis"?n.width:_.width,height:a==="yAxis"?n.height:_.height});return ie.bandSize=nu(ie,L),!_.hide&&a==="xAxis"?m[N]+=(q?-1:1)*ie.height:_.hide||(m[N]+=(q?-1:1)*ie.width),Fr(Fr({},b),{},ad({},w,ie))},{})},$E=function(t,r){var n=t.x,a=t.y,o=r.x,c=r.y;return{x:Math.min(n,o),y:Math.min(a,c),width:Math.abs(o-n),height:Math.abs(c-a)}},l7=function(t){var r=t.x1,n=t.y1,a=t.x2,o=t.y2;return $E({x:r,y:n},{x:a,y:o})},FE=(function(){function e(t){i7(this,e),this.scale=t}return a7(e,[{key:"domain",get:function(){return this.scale.domain}},{key:"range",get:function(){return this.scale.range}},{key:"rangeMin",get:function(){return this.range()[0]}},{key:"rangeMax",get:function(){return this.range()[1]}},{key:"bandwidth",get:function(){return this.scale.bandwidth}},{key:"apply",value:function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.bandAware,o=n.position;if(r!==void 0){if(o)switch(o){case"start":return this.scale(r);case"middle":{var c=this.bandwidth?this.bandwidth()/2:0;return this.scale(r)+c}case"end":{var u=this.bandwidth?this.bandwidth():0;return this.scale(r)+u}default:return this.scale(r)}if(a){var f=this.bandwidth?this.bandwidth()/2:0;return this.scale(r)+f}return this.scale(r)}}},{key:"isInRange",value:function(r){var n=this.range(),a=n[0],o=n[n.length-1];return a<=o?r>=a&&r<=o:r>=o&&r<=a}}],[{key:"create",value:function(r){return new e(r)}}])})();ad(FE,"EPS",1e-4);var Rx=function(t){var r=Object.keys(t).reduce(function(n,a){return Fr(Fr({},n),{},ad({},a,FE.create(t[a])))},{});return Fr(Fr({},r),{},{apply:function(a){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=o.bandAware,u=o.position;return Iq(a,function(f,p){return r[p].apply(f,{bandAware:c,position:u})})},isInRange:function(a){return TE(a,function(o,c){return r[c].isInRange(o)})}})};function c7(e){return(e%180+180)%180}var u7=function(t){var r=t.width,n=t.height,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=c7(a),c=o*Math.PI/180,u=Math.atan(n/r),f=c>u&&c<Math.PI-u?n/Math.sin(c):r/Math.cos(c);return Math.abs(f)},tv,oA;function d7(){if(oA)return tv;oA=1;var e=Jn(),t=Ys(),r=Uu();function n(a){return function(o,c,u){var f=Object(o);if(!t(o)){var p=e(c,3);o=r(o),c=function(m){return p(f[m],m,f)}}var h=a(o,c,u);return h>-1?f[p?o[h]:h]:void 0}}return tv=n,tv}var rv,sA;function f7(){if(sA)return rv;sA=1;var e=OE();function t(r){var n=e(r),a=n%1;return n===n?a?n-a:n:0}return rv=t,rv}var nv,lA;function p7(){if(lA)return nv;lA=1;var e=ZC(),t=Jn(),r=f7(),n=Math.max;function a(o,c,u){var f=o==null?0:o.length;if(!f)return-1;var p=u==null?0:r(u);return p<0&&(p=n(f+p,0)),e(o,t(c,3),p)}return nv=a,nv}var iv,cA;function h7(){if(cA)return iv;cA=1;var e=d7(),t=p7(),r=e(t);return iv=r,iv}var m7=h7();const g7=Je(m7);var v7=hC();const y7=Je(v7);var x7=y7(function(e){return{x:e.left,y:e.top,width:e.width,height:e.height}},function(e){return["l",e.left,"t",e.top,"w",e.width,"h",e.height].join("")}),Dx=T.createContext(void 0),Ix=T.createContext(void 0),LE=T.createContext(void 0),BE=T.createContext({}),zE=T.createContext(void 0),qE=T.createContext(0),UE=T.createContext(0),uA=function(t){var r=t.state,n=r.xAxisMap,a=r.yAxisMap,o=r.offset,c=t.clipPathId,u=t.children,f=t.width,p=t.height,h=x7(o);return V.createElement(Dx.Provider,{value:n},V.createElement(Ix.Provider,{value:a},V.createElement(BE.Provider,{value:o},V.createElement(LE.Provider,{value:h},V.createElement(zE.Provider,{value:c},V.createElement(qE.Provider,{value:p},V.createElement(UE.Provider,{value:f},u)))))))},b7=function(){return T.useContext(zE)},WE=function(t){var r=T.useContext(Dx);r==null&&Di();var n=r[t];return n==null&&Di(),n},w7=function(){var t=T.useContext(Dx);return Yn(t)},_7=function(){var t=T.useContext(Ix),r=g7(t,function(n){return TE(n.domain,Number.isFinite)});return r||Yn(t)},HE=function(t){var r=T.useContext(Ix);r==null&&Di();var n=r[t];return n==null&&Di(),n},j7=function(){var t=T.useContext(LE);return t},S7=function(){return T.useContext(BE)},Mx=function(){return T.useContext(UE)},$x=function(){return T.useContext(qE)};function La(e){"@babel/helpers - typeof";return La=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},La(e)}function N7(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A7(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,YE(n.key),n)}}function C7(e,t,r){return t&&A7(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function O7(e,t,r){return t=yu(t),E7(e,GE()?Reflect.construct(t,r||[],yu(e).constructor):t.apply(e,r))}function E7(e,t){if(t&&(La(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return k7(e)}function k7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function GE(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(GE=function(){return!!e})()}function yu(e){return yu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},yu(e)}function P7(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&py(e,t)}function py(e,t){return py=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},py(e,t)}function dA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function fA(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?dA(Object(r),!0).forEach(function(n){Fx(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):dA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Fx(e,t,r){return t=YE(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function YE(e){var t=T7(e,"string");return La(t)=="symbol"?t:t+""}function T7(e,t){if(La(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(La(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function R7(e,t){return $7(e)||M7(e,t)||I7(e,t)||D7()}function D7(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function I7(e,t){if(e){if(typeof e=="string")return pA(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return pA(e,t)}}function pA(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M7(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,c,u=[],f=!0,p=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(h){p=!0,a=h}finally{try{if(!f&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw a}}return u}}function $7(e){if(Array.isArray(e))return e}function hy(){return hy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},hy.apply(this,arguments)}var F7=function(t,r){var n;return V.isValidElement(t)?n=V.cloneElement(t,r):$e(t)?n=t(r):n=V.createElement("line",hy({},r,{className:"recharts-reference-line-line"})),n},L7=function(t,r,n,a,o,c,u,f,p){var h=o.x,m=o.y,v=o.width,b=o.height;if(n){var w=p.y,_=t.y.apply(w,{position:c});if(Zr(p,"discard")&&!t.y.isInRange(_))return null;var x=[{x:h+v,y:_},{x:h,y:_}];return f==="left"?x.reverse():x}if(r){var S=p.x,C=t.x.apply(S,{position:c});if(Zr(p,"discard")&&!t.x.isInRange(C))return null;var O=[{x:C,y:m+b},{x:C,y:m}];return u==="top"?O.reverse():O}if(a){var E=p.segment,A=E.map(function(N){return t.apply(N,{position:c})});return Zr(p,"discard")&&Pq(A,function(N){return!t.isInRange(N)})?null:A}return null};function B7(e){var t=e.x,r=e.y,n=e.segment,a=e.xAxisId,o=e.yAxisId,c=e.shape,u=e.className,f=e.alwaysShow,p=b7(),h=WE(a),m=HE(o),v=j7();if(!p||!v)return null;yn(f===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var b=Rx({x:h.scale,y:m.scale}),w=Nt(t),_=Nt(r),x=n&&n.length===2,S=L7(b,w,_,x,v,e.position,h.orientation,m.orientation,e);if(!S)return null;var C=R7(S,2),O=C[0],E=O.x,A=O.y,N=C[1],P=N.x,R=N.y,D=Zr(e,"hidden")?"url(#".concat(p,")"):void 0,G=fA(fA({clipPath:D},Ue(e,!0)),{},{x1:E,y1:A,x2:P,y2:R});return V.createElement(Pt,{className:We("recharts-reference-line",u)},F7(c,G),Ut.renderCallByParent(e,l7({x1:E,y1:A,x2:P,y2:R})))}var Lx=(function(e){function t(){return N7(this,t),O7(this,t,arguments)}return P7(t,e),C7(t,[{key:"render",value:function(){return V.createElement(B7,this.props)}}])})(V.Component);Fx(Lx,"displayName","ReferenceLine");Fx(Lx,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,fill:"none",stroke:"#ccc",fillOpacity:1,strokeWidth:1,position:"middle"});function my(){return my=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},my.apply(this,arguments)}function Ba(e){"@babel/helpers - typeof";return Ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ba(e)}function hA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function mA(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?hA(Object(r),!0).forEach(function(n){od(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):hA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function z7(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q7(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,KE(n.key),n)}}function U7(e,t,r){return t&&q7(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function W7(e,t,r){return t=xu(t),H7(e,VE()?Reflect.construct(t,r||[],xu(e).constructor):t.apply(e,r))}function H7(e,t){if(t&&(Ba(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return G7(e)}function G7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function VE(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(VE=function(){return!!e})()}function xu(e){return xu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},xu(e)}function Y7(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&gy(e,t)}function gy(e,t){return gy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},gy(e,t)}function od(e,t,r){return t=KE(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function KE(e){var t=V7(e,"string");return Ba(t)=="symbol"?t:t+""}function V7(e,t){if(Ba(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ba(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var K7=function(t){var r=t.x,n=t.y,a=t.xAxis,o=t.yAxis,c=Rx({x:a.scale,y:o.scale}),u=c.apply({x:r,y:n},{bandAware:!0});return Zr(t,"discard")&&!c.isInRange(u)?null:u},sd=(function(e){function t(){return z7(this,t),W7(this,t,arguments)}return Y7(t,e),U7(t,[{key:"render",value:function(){var n=this.props,a=n.x,o=n.y,c=n.r,u=n.alwaysShow,f=n.clipPathId,p=Nt(a),h=Nt(o);if(yn(u===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'),!p||!h)return null;var m=K7(this.props);if(!m)return null;var v=m.x,b=m.y,w=this.props,_=w.shape,x=w.className,S=Zr(this.props,"hidden")?"url(#".concat(f,")"):void 0,C=mA(mA({clipPath:S},Ue(this.props,!0)),{},{cx:v,cy:b});return V.createElement(Pt,{className:We("recharts-reference-dot",x)},t.renderDot(_,C),Ut.renderCallByParent(this.props,{x:v-c,y:b-c,width:2*c,height:2*c}))}}])})(V.Component);od(sd,"displayName","ReferenceDot");od(sd,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#fff",stroke:"#ccc",fillOpacity:1,strokeWidth:1});od(sd,"renderDot",function(e,t){var r;return V.isValidElement(e)?r=V.cloneElement(e,t):$e(e)?r=e(t):r=V.createElement(CE,my({},t,{cx:t.cx,cy:t.cy,className:"recharts-reference-dot-dot"})),r});function vy(){return vy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},vy.apply(this,arguments)}function za(e){"@babel/helpers - typeof";return za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},za(e)}function gA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function vA(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?gA(Object(r),!0).forEach(function(n){ld(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function X7(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q7(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,QE(n.key),n)}}function Z7(e,t,r){return t&&Q7(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function J7(e,t,r){return t=bu(t),eU(e,XE()?Reflect.construct(t,r||[],bu(e).constructor):t.apply(e,r))}function eU(e,t){if(t&&(za(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tU(e)}function tU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function XE(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(XE=function(){return!!e})()}function bu(e){return bu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},bu(e)}function rU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&yy(e,t)}function yy(e,t){return yy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},yy(e,t)}function ld(e,t,r){return t=QE(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function QE(e){var t=nU(e,"string");return za(t)=="symbol"?t:t+""}function nU(e,t){if(za(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(za(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var iU=function(t,r,n,a,o){var c=o.x1,u=o.x2,f=o.y1,p=o.y2,h=o.xAxis,m=o.yAxis;if(!h||!m)return null;var v=Rx({x:h.scale,y:m.scale}),b={x:t?v.x.apply(c,{position:"start"}):v.x.rangeMin,y:n?v.y.apply(f,{position:"start"}):v.y.rangeMin},w={x:r?v.x.apply(u,{position:"end"}):v.x.rangeMax,y:a?v.y.apply(p,{position:"end"}):v.y.rangeMax};return Zr(o,"discard")&&(!v.isInRange(b)||!v.isInRange(w))?null:$E(b,w)},cd=(function(e){function t(){return X7(this,t),J7(this,t,arguments)}return rU(t,e),Z7(t,[{key:"render",value:function(){var n=this.props,a=n.x1,o=n.x2,c=n.y1,u=n.y2,f=n.className,p=n.alwaysShow,h=n.clipPathId;yn(p===void 0,'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');var m=Nt(a),v=Nt(o),b=Nt(c),w=Nt(u),_=this.props.shape;if(!m&&!v&&!b&&!w&&!_)return null;var x=iU(m,v,b,w,this.props);if(!x&&!_)return null;var S=Zr(this.props,"hidden")?"url(#".concat(h,")"):void 0;return V.createElement(Pt,{className:We("recharts-reference-area",f)},t.renderRect(_,vA(vA({clipPath:S},Ue(this.props,!0)),x)),Ut.renderCallByParent(this.props,x))}}])})(V.Component);ld(cd,"displayName","ReferenceArea");ld(cd,"defaultProps",{isFront:!1,ifOverflow:"discard",xAxisId:0,yAxisId:0,r:10,fill:"#ccc",fillOpacity:.5,stroke:"none",strokeWidth:1});ld(cd,"renderRect",function(e,t){var r;return V.isValidElement(e)?r=V.cloneElement(e,t):$e(e)?r=e(t):r=V.createElement(Tx,vy({},t,{className:"recharts-reference-area-rect"})),r});function ZE(e,t,r){if(t<1)return[];if(t===1&&r===void 0)return e;for(var n=[],a=0;a<e.length;a+=t)n.push(e[a]);return n}function aU(e,t,r){var n={width:e.width+t.width,height:e.height+t.height};return u7(n,r)}function oU(e,t,r){var n=r==="width",a=e.x,o=e.y,c=e.width,u=e.height;return t===1?{start:n?a:o,end:n?a+c:o+u}:{start:n?a+c:o+u,end:n?a:o}}function wu(e,t,r,n,a){if(e*t<e*n||e*t>e*a)return!1;var o=r();return e*(t-e*o/2-n)>=0&&e*(t+e*o/2-a)<=0}function sU(e,t){return ZE(e,t+1)}function lU(e,t,r,n,a){for(var o=(n||[]).slice(),c=t.start,u=t.end,f=0,p=1,h=c,m=function(){var w=n?.[f];if(w===void 0)return{v:ZE(n,p)};var _=f,x,S=function(){return x===void 0&&(x=r(w,_)),x},C=w.coordinate,O=f===0||wu(e,C,S,h,u);O||(f=0,h=c,p+=1),O&&(h=C+e*(S()/2+a),f+=p)},v;p<=o.length;)if(v=m(),v)return v.v;return[]}function $s(e){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$s(e)}function yA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function qt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?yA(Object(r),!0).forEach(function(n){cU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):yA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function cU(e,t,r){return t=uU(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function uU(e){var t=dU(e,"string");return $s(t)=="symbol"?t:t+""}function dU(e,t){if($s(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if($s(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function fU(e,t,r,n,a){for(var o=(n||[]).slice(),c=o.length,u=t.start,f=t.end,p=function(v){var b=o[v],w,_=function(){return w===void 0&&(w=r(b,v)),w};if(v===c-1){var x=e*(b.coordinate+e*_()/2-f);o[v]=b=qt(qt({},b),{},{tickCoord:x>0?b.coordinate-x*e:b.coordinate})}else o[v]=b=qt(qt({},b),{},{tickCoord:b.coordinate});var S=wu(e,b.tickCoord,_,u,f);S&&(f=b.tickCoord-e*(_()/2+a),o[v]=qt(qt({},b),{},{isShow:!0}))},h=c-1;h>=0;h--)p(h);return o}function pU(e,t,r,n,a,o){var c=(n||[]).slice(),u=c.length,f=t.start,p=t.end;if(o){var h=n[u-1],m=r(h,u-1),v=e*(h.coordinate+e*m/2-p);c[u-1]=h=qt(qt({},h),{},{tickCoord:v>0?h.coordinate-v*e:h.coordinate});var b=wu(e,h.tickCoord,function(){return m},f,p);b&&(p=h.tickCoord-e*(m/2+a),c[u-1]=qt(qt({},h),{},{isShow:!0}))}for(var w=o?u-1:u,_=function(C){var O=c[C],E,A=function(){return E===void 0&&(E=r(O,C)),E};if(C===0){var N=e*(O.coordinate-e*A()/2-f);c[C]=O=qt(qt({},O),{},{tickCoord:N<0?O.coordinate-N*e:O.coordinate})}else c[C]=O=qt(qt({},O),{},{tickCoord:O.coordinate});var P=wu(e,O.tickCoord,A,f,p);P&&(f=O.tickCoord+e*(A()/2+a),c[C]=qt(qt({},O),{},{isShow:!0}))},x=0;x<w;x++)_(x);return c}function Bx(e,t,r){var n=e.tick,a=e.ticks,o=e.viewBox,c=e.minTickGap,u=e.orientation,f=e.interval,p=e.tickFormatter,h=e.unit,m=e.angle;if(!a||!a.length||!n)return[];if(he(f)||Vs.isSsr)return sU(a,typeof f=="number"&&he(f)?f:0);var v=[],b=u==="top"||u==="bottom"?"width":"height",w=h&&b==="width"?ts(h,{fontSize:t,letterSpacing:r}):{width:0,height:0},_=function(O,E){var A=$e(p)?p(O.value,E):O.value;return b==="width"?aU(ts(A,{fontSize:t,letterSpacing:r}),w,m):ts(A,{fontSize:t,letterSpacing:r})[b]},x=a.length>=2?Br(a[1].coordinate-a[0].coordinate):1,S=oU(o,x,b);return f==="equidistantPreserveStart"?lU(x,S,_,a,c):(f==="preserveStart"||f==="preserveStartEnd"?v=pU(x,S,_,a,c,f==="preserveStartEnd"):v=fU(x,S,_,a,c),v.filter(function(C){return C.isShow}))}var hU=["viewBox"],mU=["viewBox"],gU=["ticks"];function qa(e){"@babel/helpers - typeof";return qa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qa(e)}function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ya.apply(this,arguments)}function xA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function jt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?xA(Object(r),!0).forEach(function(n){zx(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function av(e,t){if(e==null)return{};var r=vU(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function vU(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function yU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bA(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ek(n.key),n)}}function xU(e,t,r){return t&&bA(e.prototype,t),r&&bA(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function bU(e,t,r){return t=_u(t),wU(e,JE()?Reflect.construct(t,r||[],_u(e).constructor):t.apply(e,r))}function wU(e,t){if(t&&(qa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return _U(e)}function _U(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function JE(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(JE=function(){return!!e})()}function _u(e){return _u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},_u(e)}function jU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&xy(e,t)}function xy(e,t){return xy=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},xy(e,t)}function zx(e,t,r){return t=ek(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ek(e){var t=SU(e,"string");return qa(t)=="symbol"?t:t+""}function SU(e,t){if(qa(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(qa(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var eo=(function(e){function t(r){var n;return yU(this,t),n=bU(this,t,[r]),n.state={fontSize:"",letterSpacing:""},n}return jU(t,e),xU(t,[{key:"shouldComponentUpdate",value:function(n,a){var o=n.viewBox,c=av(n,hU),u=this.props,f=u.viewBox,p=av(u,mU);return!ba(o,f)||!ba(c,p)||!ba(a,this.state)}},{key:"componentDidMount",value:function(){var n=this.layerReference;if(n){var a=n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];a&&this.setState({fontSize:window.getComputedStyle(a).fontSize,letterSpacing:window.getComputedStyle(a).letterSpacing})}}},{key:"getTickLineCoord",value:function(n){var a=this.props,o=a.x,c=a.y,u=a.width,f=a.height,p=a.orientation,h=a.tickSize,m=a.mirror,v=a.tickMargin,b,w,_,x,S,C,O=m?-1:1,E=n.tickSize||h,A=he(n.tickCoord)?n.tickCoord:n.coordinate;switch(p){case"top":b=w=n.coordinate,x=c+ +!m*f,_=x-O*E,C=_-O*v,S=A;break;case"left":_=x=n.coordinate,w=o+ +!m*u,b=w-O*E,S=b-O*v,C=A;break;case"right":_=x=n.coordinate,w=o+ +m*u,b=w+O*E,S=b+O*v,C=A;break;default:b=w=n.coordinate,x=c+ +m*f,_=x+O*E,C=_+O*v,S=A;break}return{line:{x1:b,y1:_,x2:w,y2:x},tick:{x:S,y:C}}}},{key:"getTickTextAnchor",value:function(){var n=this.props,a=n.orientation,o=n.mirror,c;switch(a){case"left":c=o?"start":"end";break;case"right":c=o?"end":"start";break;default:c="middle";break}return c}},{key:"getTickVerticalAnchor",value:function(){var n=this.props,a=n.orientation,o=n.mirror,c="end";switch(a){case"left":case"right":c="middle";break;case"top":c=o?"start":"end";break;default:c=o?"end":"start";break}return c}},{key:"renderAxisLine",value:function(){var n=this.props,a=n.x,o=n.y,c=n.width,u=n.height,f=n.orientation,p=n.mirror,h=n.axisLine,m=jt(jt(jt({},Ue(this.props,!1)),Ue(h,!1)),{},{fill:"none"});if(f==="top"||f==="bottom"){var v=+(f==="top"&&!p||f==="bottom"&&p);m=jt(jt({},m),{},{x1:a,y1:o+v*u,x2:a+c,y2:o+v*u})}else{var b=+(f==="left"&&!p||f==="right"&&p);m=jt(jt({},m),{},{x1:a+b*c,y1:o,x2:a+b*c,y2:o+u})}return V.createElement("line",ya({},m,{className:We("recharts-cartesian-axis-line",Ar(h,"className"))}))}},{key:"renderTicks",value:function(n,a,o){var c=this,u=this.props,f=u.tickLine,p=u.stroke,h=u.tick,m=u.tickFormatter,v=u.unit,b=Bx(jt(jt({},this.props),{},{ticks:n}),a,o),w=this.getTickTextAnchor(),_=this.getTickVerticalAnchor(),x=Ue(this.props,!1),S=Ue(h,!1),C=jt(jt({},x),{},{fill:"none"},Ue(f,!1)),O=b.map(function(E,A){var N=c.getTickLineCoord(E),P=N.line,R=N.tick,D=jt(jt(jt(jt({textAnchor:w,verticalAnchor:_},x),{},{stroke:"none",fill:p},S),R),{},{index:A,payload:E,visibleTicksCount:b.length,tickFormatter:m});return V.createElement(Pt,ya({className:"recharts-cartesian-axis-tick",key:"tick-".concat(E.value,"-").concat(E.coordinate,"-").concat(E.tickCoord)},Pc(c.props,E,A)),f&&V.createElement("line",ya({},C,P,{className:We("recharts-cartesian-axis-tick-line",Ar(f,"className"))})),h&&t.renderTickItem(h,D,"".concat($e(m)?m(E.value,A):E.value).concat(v||"")))});return V.createElement("g",{className:"recharts-cartesian-axis-ticks"},O)}},{key:"render",value:function(){var n=this,a=this.props,o=a.axisLine,c=a.width,u=a.height,f=a.ticksGenerator,p=a.className,h=a.hide;if(h)return null;var m=this.props,v=m.ticks,b=av(m,gU),w=v;return $e(f)&&(w=v&&v.length>0?f(this.props):f(b)),c<=0||u<=0||!w||!w.length?null:V.createElement(Pt,{className:We("recharts-cartesian-axis",p),ref:function(x){n.layerReference=x}},o&&this.renderAxisLine(),this.renderTicks(w,this.state.fontSize,this.state.letterSpacing),Ut.renderCallByParent(this.props))}}],[{key:"renderTickItem",value:function(n,a,o){var c,u=We(a.className,"recharts-cartesian-axis-tick-value");return V.isValidElement(n)?c=V.cloneElement(n,jt(jt({},a),{},{className:u})):$e(n)?c=n(jt(jt({},a),{},{className:u})):c=V.createElement(qc,ya({},a,{className:"recharts-cartesian-axis-tick-value"}),o),c}}])})(T.Component);zx(eo,"displayName","CartesianAxis");zx(eo,"defaultProps",{x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"});var NU=["x1","y1","x2","y2","key"],AU=["offset"];function Ii(e){"@babel/helpers - typeof";return Ii=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ii(e)}function wA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function Wt(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?wA(Object(r),!0).forEach(function(n){CU(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):wA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function CU(e,t,r){return t=OU(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function OU(e){var t=EU(e,"string");return Ii(t)=="symbol"?t:t+""}function EU(e,t){if(Ii(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ii(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Ni(){return Ni=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ni.apply(this,arguments)}function _A(e,t){if(e==null)return{};var r=kU(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function kU(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}var PU=function(t){var r=t.fill;if(!r||r==="none")return null;var n=t.fillOpacity,a=t.x,o=t.y,c=t.width,u=t.height,f=t.ry;return V.createElement("rect",{x:a,y:o,ry:f,width:c,height:u,stroke:"none",fill:r,fillOpacity:n,className:"recharts-cartesian-grid-bg"})};function tk(e,t){var r;if(V.isValidElement(e))r=V.cloneElement(e,t);else if($e(e))r=e(t);else{var n=t.x1,a=t.y1,o=t.x2,c=t.y2,u=t.key,f=_A(t,NU),p=Ue(f,!1);p.offset;var h=_A(p,AU);r=V.createElement("line",Ni({},h,{x1:n,y1:a,x2:o,y2:c,fill:"none",key:u}))}return r}function TU(e){var t=e.x,r=e.width,n=e.horizontal,a=n===void 0?!0:n,o=e.horizontalPoints;if(!a||!o||!o.length)return null;var c=o.map(function(u,f){var p=Wt(Wt({},e),{},{x1:t,y1:u,x2:t+r,y2:u,key:"line-".concat(f),index:f});return tk(a,p)});return V.createElement("g",{className:"recharts-cartesian-grid-horizontal"},c)}function RU(e){var t=e.y,r=e.height,n=e.vertical,a=n===void 0?!0:n,o=e.verticalPoints;if(!a||!o||!o.length)return null;var c=o.map(function(u,f){var p=Wt(Wt({},e),{},{x1:u,y1:t,x2:u,y2:t+r,key:"line-".concat(f),index:f});return tk(a,p)});return V.createElement("g",{className:"recharts-cartesian-grid-vertical"},c)}function DU(e){var t=e.horizontalFill,r=e.fillOpacity,n=e.x,a=e.y,o=e.width,c=e.height,u=e.horizontalPoints,f=e.horizontal,p=f===void 0?!0:f;if(!p||!t||!t.length)return null;var h=u.map(function(v){return Math.round(v+a-a)}).sort(function(v,b){return v-b});a!==h[0]&&h.unshift(0);var m=h.map(function(v,b){var w=!h[b+1],_=w?a+c-v:h[b+1]-v;if(_<=0)return null;var x=b%t.length;return V.createElement("rect",{key:"react-".concat(b),y:v,x:n,height:_,width:o,stroke:"none",fill:t[x],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return V.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},m)}function IU(e){var t=e.vertical,r=t===void 0?!0:t,n=e.verticalFill,a=e.fillOpacity,o=e.x,c=e.y,u=e.width,f=e.height,p=e.verticalPoints;if(!r||!n||!n.length)return null;var h=p.map(function(v){return Math.round(v+o-o)}).sort(function(v,b){return v-b});o!==h[0]&&h.unshift(0);var m=h.map(function(v,b){var w=!h[b+1],_=w?o+u-v:h[b+1]-v;if(_<=0)return null;var x=b%n.length;return V.createElement("rect",{key:"react-".concat(b),x:v,y:c,width:_,height:f,stroke:"none",fill:n[x],fillOpacity:a,className:"recharts-cartesian-grid-bg"})});return V.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},m)}var MU=function(t,r){var n=t.xAxis,a=t.width,o=t.height,c=t.offset;return hE(Bx(Wt(Wt(Wt({},eo.defaultProps),n),{},{ticks:gn(n,!0),viewBox:{x:0,y:0,width:a,height:o}})),c.left,c.left+c.width,r)},$U=function(t,r){var n=t.yAxis,a=t.width,o=t.height,c=t.offset;return hE(Bx(Wt(Wt(Wt({},eo.defaultProps),n),{},{ticks:gn(n,!0),viewBox:{x:0,y:0,width:a,height:o}})),c.top,c.top+c.height,r)},ma={horizontal:!0,vertical:!0,stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]};function rk(e){var t,r,n,a,o,c,u=Mx(),f=$x(),p=S7(),h=Wt(Wt({},e),{},{stroke:(t=e.stroke)!==null&&t!==void 0?t:ma.stroke,fill:(r=e.fill)!==null&&r!==void 0?r:ma.fill,horizontal:(n=e.horizontal)!==null&&n!==void 0?n:ma.horizontal,horizontalFill:(a=e.horizontalFill)!==null&&a!==void 0?a:ma.horizontalFill,vertical:(o=e.vertical)!==null&&o!==void 0?o:ma.vertical,verticalFill:(c=e.verticalFill)!==null&&c!==void 0?c:ma.verticalFill,x:he(e.x)?e.x:p.left,y:he(e.y)?e.y:p.top,width:he(e.width)?e.width:p.width,height:he(e.height)?e.height:p.height}),m=h.x,v=h.y,b=h.width,w=h.height,_=h.syncWithTicks,x=h.horizontalValues,S=h.verticalValues,C=w7(),O=_7();if(!he(b)||b<=0||!he(w)||w<=0||!he(m)||m!==+m||!he(v)||v!==+v)return null;var E=h.verticalCoordinatesGenerator||MU,A=h.horizontalCoordinatesGenerator||$U,N=h.horizontalPoints,P=h.verticalPoints;if((!N||!N.length)&&$e(A)){var R=x&&x.length,D=A({yAxis:O?Wt(Wt({},O),{},{ticks:R?x:O.ticks}):void 0,width:u,height:f,offset:p},R?!0:_);yn(Array.isArray(D),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Ii(D),"]")),Array.isArray(D)&&(N=D)}if((!P||!P.length)&&$e(E)){var G=S&&S.length,q=E({xAxis:C?Wt(Wt({},C),{},{ticks:G?S:C.ticks}):void 0,width:u,height:f,offset:p},G?!0:_);yn(Array.isArray(q),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(Ii(q),"]")),Array.isArray(q)&&(P=q)}return V.createElement("g",{className:"recharts-cartesian-grid"},V.createElement(PU,{fill:h.fill,fillOpacity:h.fillOpacity,x:h.x,y:h.y,width:h.width,height:h.height,ry:h.ry}),V.createElement(TU,Ni({},h,{offset:p,horizontalPoints:N,xAxis:C,yAxis:O})),V.createElement(RU,Ni({},h,{offset:p,verticalPoints:P,xAxis:C,yAxis:O})),V.createElement(DU,Ni({},h,{horizontalPoints:N})),V.createElement(IU,Ni({},h,{verticalPoints:P})))}rk.displayName="CartesianGrid";function Ua(e){"@babel/helpers - typeof";return Ua=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ua(e)}function FU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function LU(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ak(n.key),n)}}function BU(e,t,r){return t&&LU(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function zU(e,t,r){return t=ju(t),qU(e,nk()?Reflect.construct(t,r||[],ju(e).constructor):t.apply(e,r))}function qU(e,t){if(t&&(Ua(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return UU(e)}function UU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function nk(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(nk=function(){return!!e})()}function ju(e){return ju=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},ju(e)}function WU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&by(e,t)}function by(e,t){return by=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},by(e,t)}function ik(e,t,r){return t=ak(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ak(e){var t=HU(e,"string");return Ua(t)=="symbol"?t:t+""}function HU(e,t){if(Ua(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ua(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function wy(){return wy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},wy.apply(this,arguments)}function GU(e){var t=e.xAxisId,r=Mx(),n=$x(),a=WE(t);return a==null?null:T.createElement(eo,wy({},a,{className:We("recharts-".concat(a.axisType," ").concat(a.axisType),a.className),viewBox:{x:0,y:0,width:r,height:n},ticksGenerator:function(c){return gn(c,!0)}}))}var ud=(function(e){function t(){return FU(this,t),zU(this,t,arguments)}return WU(t,e),BU(t,[{key:"render",value:function(){return T.createElement(GU,this.props)}}])})(T.Component);ik(ud,"displayName","XAxis");ik(ud,"defaultProps",{allowDecimals:!0,hide:!1,orientation:"bottom",width:0,height:30,mirror:!1,xAxisId:0,tickCount:5,type:"category",padding:{left:0,right:0},allowDataOverflow:!1,scale:"auto",reversed:!1,allowDuplicatedCategory:!0});function Wa(e){"@babel/helpers - typeof";return Wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wa(e)}function YU(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function VU(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,lk(n.key),n)}}function KU(e,t,r){return t&&VU(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function XU(e,t,r){return t=Su(t),QU(e,ok()?Reflect.construct(t,r||[],Su(e).constructor):t.apply(e,r))}function QU(e,t){if(t&&(Wa(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return ZU(e)}function ZU(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ok(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ok=function(){return!!e})()}function Su(e){return Su=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Su(e)}function JU(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_y(e,t)}function _y(e,t){return _y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},_y(e,t)}function sk(e,t,r){return t=lk(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function lk(e){var t=e9(e,"string");return Wa(t)=="symbol"?t:t+""}function e9(e,t){if(Wa(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Wa(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function jy(){return jy=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},jy.apply(this,arguments)}var t9=function(t){var r=t.yAxisId,n=Mx(),a=$x(),o=HE(r);return o==null?null:T.createElement(eo,jy({},o,{className:We("recharts-".concat(o.axisType," ").concat(o.axisType),o.className),viewBox:{x:0,y:0,width:n,height:a},ticksGenerator:function(u){return gn(u,!0)}}))},dd=(function(e){function t(){return YU(this,t),XU(this,t,arguments)}return JU(t,e),KU(t,[{key:"render",value:function(){return T.createElement(t9,this.props)}}])})(T.Component);sk(dd,"displayName","YAxis");sk(dd,"defaultProps",{allowDuplicatedCategory:!0,allowDecimals:!0,hide:!1,orientation:"left",width:60,height:0,mirror:!1,yAxisId:0,tickCount:5,type:"number",padding:{top:0,bottom:0},allowDataOverflow:!1,scale:"auto",reversed:!1});function jA(e){return a9(e)||i9(e)||n9(e)||r9()}function r9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function n9(e,t){if(e){if(typeof e=="string")return Sy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Sy(e,t)}}function i9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function a9(e){if(Array.isArray(e))return Sy(e)}function Sy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Ny=function(t,r,n,a,o){var c=zr(t,Lx),u=zr(t,sd),f=[].concat(jA(c),jA(u)),p=zr(t,cd),h="".concat(a,"Id"),m=a[0],v=r;if(f.length&&(v=f.reduce(function(_,x){if(x.props[h]===n&&Zr(x.props,"extendDomain")&&he(x.props[m])){var S=x.props[m];return[Math.min(_[0],S),Math.max(_[1],S)]}return _},v)),p.length){var b="".concat(m,"1"),w="".concat(m,"2");v=p.reduce(function(_,x){if(x.props[h]===n&&Zr(x.props,"extendDomain")&&he(x.props[b])&&he(x.props[w])){var S=x.props[b],C=x.props[w];return[Math.min(_[0],S,C),Math.max(_[1],S,C)]}return _},v)}return o&&o.length&&(v=o.reduce(function(_,x){return he(x)?[Math.min(_[0],x),Math.max(_[1],x)]:_},v)),v},ov={exports:{}},SA;function o9(){return SA||(SA=1,(function(e){var t=Object.prototype.hasOwnProperty,r="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1));function a(f,p,h){this.fn=f,this.context=p,this.once=h||!1}function o(f,p,h,m,v){if(typeof h!="function")throw new TypeError("The listener must be a function");var b=new a(h,m||f,v),w=r?r+p:p;return f._events[w]?f._events[w].fn?f._events[w]=[f._events[w],b]:f._events[w].push(b):(f._events[w]=b,f._eventsCount++),f}function c(f,p){--f._eventsCount===0?f._events=new n:delete f._events[p]}function u(){this._events=new n,this._eventsCount=0}u.prototype.eventNames=function(){var p=[],h,m;if(this._eventsCount===0)return p;for(m in h=this._events)t.call(h,m)&&p.push(r?m.slice(1):m);return Object.getOwnPropertySymbols?p.concat(Object.getOwnPropertySymbols(h)):p},u.prototype.listeners=function(p){var h=r?r+p:p,m=this._events[h];if(!m)return[];if(m.fn)return[m.fn];for(var v=0,b=m.length,w=new Array(b);v<b;v++)w[v]=m[v].fn;return w},u.prototype.listenerCount=function(p){var h=r?r+p:p,m=this._events[h];return m?m.fn?1:m.length:0},u.prototype.emit=function(p,h,m,v,b,w){var _=r?r+p:p;if(!this._events[_])return!1;var x=this._events[_],S=arguments.length,C,O;if(x.fn){switch(x.once&&this.removeListener(p,x.fn,void 0,!0),S){case 1:return x.fn.call(x.context),!0;case 2:return x.fn.call(x.context,h),!0;case 3:return x.fn.call(x.context,h,m),!0;case 4:return x.fn.call(x.context,h,m,v),!0;case 5:return x.fn.call(x.context,h,m,v,b),!0;case 6:return x.fn.call(x.context,h,m,v,b,w),!0}for(O=1,C=new Array(S-1);O<S;O++)C[O-1]=arguments[O];x.fn.apply(x.context,C)}else{var E=x.length,A;for(O=0;O<E;O++)switch(x[O].once&&this.removeListener(p,x[O].fn,void 0,!0),S){case 1:x[O].fn.call(x[O].context);break;case 2:x[O].fn.call(x[O].context,h);break;case 3:x[O].fn.call(x[O].context,h,m);break;case 4:x[O].fn.call(x[O].context,h,m,v);break;default:if(!C)for(A=1,C=new Array(S-1);A<S;A++)C[A-1]=arguments[A];x[O].fn.apply(x[O].context,C)}}return!0},u.prototype.on=function(p,h,m){return o(this,p,h,m,!1)},u.prototype.once=function(p,h,m){return o(this,p,h,m,!0)},u.prototype.removeListener=function(p,h,m,v){var b=r?r+p:p;if(!this._events[b])return this;if(!h)return c(this,b),this;var w=this._events[b];if(w.fn)w.fn===h&&(!v||w.once)&&(!m||w.context===m)&&c(this,b);else{for(var _=0,x=[],S=w.length;_<S;_++)(w[_].fn!==h||v&&!w[_].once||m&&w[_].context!==m)&&x.push(w[_]);x.length?this._events[b]=x.length===1?x[0]:x:c(this,b)}return this},u.prototype.removeAllListeners=function(p){var h;return p?(h=r?r+p:p,this._events[h]&&c(this,h)):(this._events=new n,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=r,u.EventEmitter=u,e.exports=u})(ov)),ov.exports}var s9=o9();const l9=Je(s9);var sv=new l9,lv="recharts.syncMouseEvents";function Fs(e){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fs(e)}function c9(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u9(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ck(n.key),n)}}function d9(e,t,r){return t&&u9(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function cv(e,t,r){return t=ck(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ck(e){var t=f9(e,"string");return Fs(t)=="symbol"?t:t+""}function f9(e,t){if(Fs(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Fs(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var p9=(function(){function e(){c9(this,e),cv(this,"activeIndex",0),cv(this,"coordinateList",[]),cv(this,"layout","horizontal")}return d9(e,[{key:"setDetails",value:function(r){var n,a=r.coordinateList,o=a===void 0?null:a,c=r.container,u=c===void 0?null:c,f=r.layout,p=f===void 0?null:f,h=r.offset,m=h===void 0?null:h,v=r.mouseHandlerCallback,b=v===void 0?null:v;this.coordinateList=(n=o??this.coordinateList)!==null&&n!==void 0?n:[],this.container=u??this.container,this.layout=p??this.layout,this.offset=m??this.offset,this.mouseHandlerCallback=b??this.mouseHandlerCallback,this.activeIndex=Math.min(Math.max(this.activeIndex,0),this.coordinateList.length-1)}},{key:"focus",value:function(){this.spoofMouse()}},{key:"keyboardEvent",value:function(r){if(this.coordinateList.length!==0)switch(r.key){case"ArrowRight":{if(this.layout!=="horizontal")return;this.activeIndex=Math.min(this.activeIndex+1,this.coordinateList.length-1),this.spoofMouse();break}case"ArrowLeft":{if(this.layout!=="horizontal")return;this.activeIndex=Math.max(this.activeIndex-1,0),this.spoofMouse();break}}}},{key:"setIndex",value:function(r){this.activeIndex=r}},{key:"spoofMouse",value:function(){var r,n;if(this.layout==="horizontal"&&this.coordinateList.length!==0){var a=this.container.getBoundingClientRect(),o=a.x,c=a.y,u=a.height,f=this.coordinateList[this.activeIndex].coordinate,p=((r=window)===null||r===void 0?void 0:r.scrollX)||0,h=((n=window)===null||n===void 0?void 0:n.scrollY)||0,m=o+f+p,v=c+this.offset.top+u/2+h;this.mouseHandlerCallback({pageX:m,pageY:v})}}}])})();function h9(e,t,r){if(r==="number"&&t===!0&&Array.isArray(e)){var n=e?.[0],a=e?.[1];if(n&&a&&he(n)&&he(a))return!0}return!1}function m9(e,t,r,n){var a=n/2;return{stroke:"none",fill:"#ccc",x:e==="horizontal"?t.x-a:r.left+.5,y:e==="horizontal"?r.top+.5:t.y-a,width:e==="horizontal"?n:r.width-1,height:e==="horizontal"?r.height-1:n}}function uk(e){var t=e.cx,r=e.cy,n=e.radius,a=e.startAngle,o=e.endAngle,c=Mt(t,r,n,a),u=Mt(t,r,n,o);return{points:[c,u],cx:t,cy:r,radius:n,startAngle:a,endAngle:o}}function g9(e,t,r){var n,a,o,c;if(e==="horizontal")n=t.x,o=n,a=r.top,c=r.top+r.height;else if(e==="vertical")a=t.y,c=a,n=r.left,o=r.left+r.width;else if(t.cx!=null&&t.cy!=null)if(e==="centric"){var u=t.cx,f=t.cy,p=t.innerRadius,h=t.outerRadius,m=t.angle,v=Mt(u,f,p,m),b=Mt(u,f,h,m);n=v.x,a=v.y,o=b.x,c=b.y}else return uk(t);return[{x:n,y:a},{x:o,y:c}]}function Ls(e){"@babel/helpers - typeof";return Ls=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ls(e)}function NA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function _c(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?NA(Object(r),!0).forEach(function(n){v9(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):NA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function v9(e,t,r){return t=y9(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y9(e){var t=x9(e,"string");return Ls(t)=="symbol"?t:t+""}function x9(e,t){if(Ls(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ls(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b9(e){var t,r,n=e.element,a=e.tooltipEventType,o=e.isActive,c=e.activeCoordinate,u=e.activePayload,f=e.offset,p=e.activeTooltipIndex,h=e.tooltipAxisBandSize,m=e.layout,v=e.chartName,b=(t=n.props.cursor)!==null&&t!==void 0?t:(r=n.type.defaultProps)===null||r===void 0?void 0:r.cursor;if(!n||!b||!o||!c||v!=="ScatterChart"&&a!=="axis")return null;var w,_=aN;if(v==="ScatterChart")w=c,_=Pz;else if(v==="BarChart")w=m9(m,c,f,h),_=Tx;else if(m==="radial"){var x=uk(c),S=x.cx,C=x.cy,O=x.radius,E=x.startAngle,A=x.endAngle;w={cx:S,cy:C,startAngle:E,endAngle:A,innerRadius:O,outerRadius:O},_=xE}else w={points:g9(m,c,f)},_=aN;var N=_c(_c(_c(_c({stroke:"#ccc",pointerEvents:"none"},f),w),Ue(b,!1)),{},{payload:u,payloadIndex:p,className:We("recharts-tooltip-cursor",b.className)});return T.isValidElement(b)?T.cloneElement(b,N):T.createElement(_,N)}var w9=["item"],_9=["children","className","width","height","style","compact","title","desc"];function Ha(e){"@babel/helpers - typeof";return Ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ha(e)}function xa(){return xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xa.apply(this,arguments)}function AA(e,t){return N9(e)||S9(e,t)||fk(e,t)||j9()}function j9(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S9(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,c,u=[],f=!0,p=!1;try{if(o=(r=r.call(e)).next,t!==0)for(;!(f=(n=o.call(r)).done)&&(u.push(n.value),u.length!==t);f=!0);}catch(h){p=!0,a=h}finally{try{if(!f&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(p)throw a}}return u}}function N9(e){if(Array.isArray(e))return e}function CA(e,t){if(e==null)return{};var r=A9(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function A9(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function C9(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O9(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,pk(n.key),n)}}function E9(e,t,r){return t&&O9(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function k9(e,t,r){return t=Nu(t),P9(e,dk()?Reflect.construct(t,r||[],Nu(e).constructor):t.apply(e,r))}function P9(e,t){if(t&&(Ha(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T9(e)}function T9(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function dk(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(dk=function(){return!!e})()}function Nu(e){return Nu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},Nu(e)}function R9(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ay(e,t)}function Ay(e,t){return Ay=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n},Ay(e,t)}function Ga(e){return M9(e)||I9(e)||fk(e)||D9()}function D9(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function fk(e,t){if(e){if(typeof e=="string")return Cy(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Cy(e,t)}}function I9(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function M9(e){if(Array.isArray(e))return Cy(e)}function Cy(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function OA(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function ne(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?OA(Object(r),!0).forEach(function(n){ke(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):OA(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ke(e,t,r){return t=pk(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function pk(e){var t=$9(e,"string");return Ha(t)=="symbol"?t:t+""}function $9(e,t){if(Ha(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(Ha(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var F9={xAxis:["bottom","top"],yAxis:["left","right"]},L9={width:"100%",height:"100%"},hk={x:0,y:0};function jc(e){return e}var B9=function(t,r){return r==="horizontal"?t.x:r==="vertical"?t.y:r==="centric"?t.angle:t.radius},z9=function(t,r,n,a){var o=r.find(function(h){return h&&h.index===n});if(o){if(t==="horizontal")return{x:o.coordinate,y:a.y};if(t==="vertical")return{x:a.x,y:o.coordinate};if(t==="centric"){var c=o.coordinate,u=a.radius;return ne(ne(ne({},a),Mt(a.cx,a.cy,u,c)),{},{angle:c,radius:u})}var f=o.coordinate,p=a.angle;return ne(ne(ne({},a),Mt(a.cx,a.cy,f,p)),{},{angle:p,radius:f})}return hk},fd=function(t,r){var n=r.graphicalItems,a=r.dataStartIndex,o=r.dataEndIndex,c=(n??[]).reduce(function(u,f){var p=f.props.data;return p&&p.length?[].concat(Ga(u),Ga(p)):u},[]);return c.length>0?c:t&&t.length&&he(a)&&he(o)?t.slice(a,o+1):[]};function mk(e){return e==="number"?[0,"auto"]:void 0}var Oy=function(t,r,n,a){var o=t.graphicalItems,c=t.tooltipAxis,u=fd(r,t);return n<0||!o||!o.length||n>=u.length?null:o.reduce(function(f,p){var h,m=(h=p.props.data)!==null&&h!==void 0?h:r;m&&t.dataStartIndex+t.dataEndIndex!==0&&t.dataEndIndex-t.dataStartIndex>=n&&(m=m.slice(t.dataStartIndex,t.dataEndIndex+1));var v;if(c.dataKey&&!c.allowDuplicatedCategory){var b=m===void 0?u:m;v=hv(b,c.dataKey,a)}else v=m&&m[n]||u[n];return v?[].concat(Ga(f),[gE(p,v)]):f},[])},EA=function(t,r,n,a){var o=a||{x:t.chartX,y:t.chartY},c=B9(o,n),u=t.orderedTooltipTicks,f=t.tooltipAxis,p=t.tooltipTicks,h=u6(c,u,p,f);if(h>=0&&p){var m=p[h]&&p[h].value,v=Oy(t,r,h,m),b=z9(n,u,h,o);return{activeTooltipIndex:h,activeLabel:m,activePayload:v,activeCoordinate:b}}return null},q9=function(t,r){var n=r.axes,a=r.graphicalItems,o=r.axisType,c=r.axisIdKey,u=r.stackGroups,f=r.dataStartIndex,p=r.dataEndIndex,h=t.layout,m=t.children,v=t.stackOffset,b=pE(h,o);return n.reduce(function(w,_){var x,S=_.type.defaultProps!==void 0?ne(ne({},_.type.defaultProps),_.props):_.props,C=S.type,O=S.dataKey,E=S.allowDataOverflow,A=S.allowDuplicatedCategory,N=S.scale,P=S.ticks,R=S.includeHidden,D=S[c];if(w[D])return w;var G=fd(t.data,{graphicalItems:a.filter(function(L){var ie,pe=c in L.props?L.props[c]:(ie=L.type.defaultProps)===null||ie===void 0?void 0:ie[c];return pe===D}),dataStartIndex:f,dataEndIndex:p}),q=G.length,M,H,B;h9(S.domain,E,C)&&(M=Vv(S.domain,null,E),b&&(C==="number"||N!=="auto")&&(B=ns(G,O,"category")));var F=mk(C);if(!M||M.length===0){var Y,J=(Y=S.domain)!==null&&Y!==void 0?Y:F;if(O){if(M=ns(G,O,C),C==="category"&&b){var U=t4(M);A&&U?(H=M,M=pu(0,q)):A||(M=HS(J,M,_).reduce(function(L,ie){return L.indexOf(ie)>=0?L:[].concat(Ga(L),[ie])},[]))}else if(C==="category")A?M=M.filter(function(L){return L!==""&&!He(L)}):M=HS(J,M,_).reduce(function(L,ie){return L.indexOf(ie)>=0||ie===""||He(ie)?L:[].concat(Ga(L),[ie])},[]);else if(C==="number"){var X=m6(G,a.filter(function(L){var ie,pe,fe=c in L.props?L.props[c]:(ie=L.type.defaultProps)===null||ie===void 0?void 0:ie[c],ve="hide"in L.props?L.props.hide:(pe=L.type.defaultProps)===null||pe===void 0?void 0:pe.hide;return fe===D&&(R||!ve)}),O,o,h);X&&(M=X)}b&&(C==="number"||N!=="auto")&&(B=ns(G,O,"category"))}else b?M=pu(0,q):u&&u[D]&&u[D].hasStack&&C==="number"?M=v==="expand"?[0,1]:mE(u[D].stackGroups,f,p):M=fE(G,a.filter(function(L){var ie=c in L.props?L.props[c]:L.type.defaultProps[c],pe="hide"in L.props?L.props.hide:L.type.defaultProps.hide;return ie===D&&(R||!pe)}),C,h,!0);if(C==="number")M=Ny(m,M,D,o,P),J&&(M=Vv(J,M,E));else if(C==="category"&&J){var K=J,I=M.every(function(L){return K.indexOf(L)>=0});I&&(M=K)}}return ne(ne({},w),{},ke({},D,ne(ne({},S),{},{axisType:o,domain:M,categoricalDomain:B,duplicateDomain:H,originalDomain:(x=S.domain)!==null&&x!==void 0?x:F,isCategorical:b,layout:h})))},{})},U9=function(t,r){var n=r.graphicalItems,a=r.Axis,o=r.axisType,c=r.axisIdKey,u=r.stackGroups,f=r.dataStartIndex,p=r.dataEndIndex,h=t.layout,m=t.children,v=fd(t.data,{graphicalItems:n,dataStartIndex:f,dataEndIndex:p}),b=v.length,w=pE(h,o),_=-1;return n.reduce(function(x,S){var C=S.type.defaultProps!==void 0?ne(ne({},S.type.defaultProps),S.props):S.props,O=C[c],E=mk("number");if(!x[O]){_++;var A;return w?A=pu(0,b):u&&u[O]&&u[O].hasStack?(A=mE(u[O].stackGroups,f,p),A=Ny(m,A,O,o)):(A=Vv(E,fE(v,n.filter(function(N){var P,R,D=c in N.props?N.props[c]:(P=N.type.defaultProps)===null||P===void 0?void 0:P[c],G="hide"in N.props?N.props.hide:(R=N.type.defaultProps)===null||R===void 0?void 0:R.hide;return D===O&&!G}),"number",h),a.defaultProps.allowDataOverflow),A=Ny(m,A,O,o)),ne(ne({},x),{},ke({},O,ne(ne({axisType:o},a.defaultProps),{},{hide:!0,orientation:Ar(F9,"".concat(o,".").concat(_%2),null),domain:A,originalDomain:E,isCategorical:w,layout:h})))}return x},{})},W9=function(t,r){var n=r.axisType,a=n===void 0?"xAxis":n,o=r.AxisComp,c=r.graphicalItems,u=r.stackGroups,f=r.dataStartIndex,p=r.dataEndIndex,h=t.children,m="".concat(a,"Id"),v=zr(h,o),b={};return v&&v.length?b=q9(t,{axes:v,graphicalItems:c,axisType:a,axisIdKey:m,stackGroups:u,dataStartIndex:f,dataEndIndex:p}):c&&c.length&&(b=U9(t,{Axis:o,graphicalItems:c,axisType:a,axisIdKey:m,stackGroups:u,dataStartIndex:f,dataEndIndex:p})),b},H9=function(t){var r=Yn(t),n=gn(r,!1,!0);return{tooltipTicks:n,orderedTooltipTicks:nx(n,function(a){return a.coordinate}),tooltipAxis:r,tooltipAxisBandSize:nu(r,n)}},kA=function(t){var r=t.children,n=t.defaultShowTooltip,a=pr(r,$a),o=0,c=0;return t.data&&t.data.length!==0&&(c=t.data.length-1),a&&a.props&&(a.props.startIndex>=0&&(o=a.props.startIndex),a.props.endIndex>=0&&(c=a.props.endIndex)),{chartX:0,chartY:0,dataStartIndex:o,dataEndIndex:c,activeTooltipIndex:-1,isTooltipActive:!!n}},G9=function(t){return!t||!t.length?!1:t.some(function(r){var n=vn(r&&r.type);return n&&n.indexOf("Bar")>=0})},PA=function(t){return t==="horizontal"?{numericAxisName:"yAxis",cateAxisName:"xAxis"}:t==="vertical"?{numericAxisName:"xAxis",cateAxisName:"yAxis"}:t==="centric"?{numericAxisName:"radiusAxis",cateAxisName:"angleAxis"}:{numericAxisName:"angleAxis",cateAxisName:"radiusAxis"}},Y9=function(t,r){var n=t.props,a=t.graphicalItems,o=t.xAxisMap,c=o===void 0?{}:o,u=t.yAxisMap,f=u===void 0?{}:u,p=n.width,h=n.height,m=n.children,v=n.margin||{},b=pr(m,$a),w=pr(m,wa),_=Object.keys(f).reduce(function(A,N){var P=f[N],R=P.orientation;return!P.mirror&&!P.hide?ne(ne({},A),{},ke({},R,A[R]+P.width)):A},{left:v.left||0,right:v.right||0}),x=Object.keys(c).reduce(function(A,N){var P=c[N],R=P.orientation;return!P.mirror&&!P.hide?ne(ne({},A),{},ke({},R,Ar(A,"".concat(R))+P.height)):A},{top:v.top||0,bottom:v.bottom||0}),S=ne(ne({},x),_),C=S.bottom;b&&(S.bottom+=b.props.height||$a.defaultProps.height),w&&r&&(S=p6(S,a,n,r));var O=p-S.left-S.right,E=h-S.top-S.bottom;return ne(ne({brushBottom:C},S),{},{width:Math.max(O,0),height:Math.max(E,0)})},V9=function(t,r){if(r==="xAxis")return t[r].width;if(r==="yAxis")return t[r].height},K9=function(t){var r=t.chartName,n=t.GraphicalChild,a=t.defaultTooltipEventType,o=a===void 0?"axis":a,c=t.validateTooltipEventTypes,u=c===void 0?["axis"]:c,f=t.axisComponents,p=t.legendContent,h=t.formatAxisMap,m=t.defaultProps,v=function(S,C){var O=C.graphicalItems,E=C.stackGroups,A=C.offset,N=C.updateId,P=C.dataStartIndex,R=C.dataEndIndex,D=S.barSize,G=S.layout,q=S.barGap,M=S.barCategoryGap,H=S.maxBarSize,B=PA(G),F=B.numericAxisName,Y=B.cateAxisName,J=G9(O),U=[];return O.forEach(function(X,K){var I=fd(S.data,{graphicalItems:[X],dataStartIndex:P,dataEndIndex:R}),L=X.type.defaultProps!==void 0?ne(ne({},X.type.defaultProps),X.props):X.props,ie=L.dataKey,pe=L.maxBarSize,fe=L["".concat(F,"Id")],ve=L["".concat(Y,"Id")],ge={},me=f.reduce(function(gt,$t){var or=C["".concat($t.axisType,"Map")],Er=L["".concat($t.axisType,"Id")];or&&or[Er]||$t.axisType==="zAxis"||Di();var An=or[Er];return ne(ne({},gt),{},ke(ke({},$t.axisType,An),"".concat($t.axisType,"Ticks"),gn(An)))},ge),ae=me[Y],Se=me["".concat(Y,"Ticks")],se=E&&E[fe]&&E[fe].hasStack&&C6(X,E[fe].stackGroups),te=vn(X.type).indexOf("Bar")>=0,Pe=nu(ae,Se),Ee=[],Ke=J&&d6({barSize:D,stackGroups:E,totalSize:V9(me,Y)});if(te){var Xe,Ae,Be=He(pe)?H:pe,pt=(Xe=(Ae=nu(ae,Se,!0))!==null&&Ae!==void 0?Ae:Be)!==null&&Xe!==void 0?Xe:0;Ee=f6({barGap:q,barCategoryGap:M,bandSize:pt!==Pe?pt:Pe,sizeList:Ke[ve],maxBarSize:Be}),pt!==Pe&&(Ee=Ee.map(function(gt){return ne(ne({},gt),{},{position:ne(ne({},gt.position),{},{offset:gt.position.offset-pt/2})})}))}var bt=X&&X.type&&X.type.getComposedData;bt&&U.push({props:ne(ne({},bt(ne(ne({},me),{},{displayedData:I,props:S,dataKey:ie,item:X,bandSize:Pe,barPosition:Ee,offset:A,stackedData:se,layout:G,dataStartIndex:P,dataEndIndex:R}))),{},ke(ke(ke({key:X.key||"item-".concat(K)},F,me[F]),Y,me[Y]),"animationId",N)),childIndex:p4(X,S.children),item:X})}),U},b=function(S,C){var O=S.props,E=S.dataStartIndex,A=S.dataEndIndex,N=S.updateId;if(!o_({props:O}))return null;var P=O.children,R=O.layout,D=O.stackOffset,G=O.data,q=O.reverseStackOrder,M=PA(R),H=M.numericAxisName,B=M.cateAxisName,F=zr(P,n),Y=S6(G,F,"".concat(H,"Id"),"".concat(B,"Id"),D,q),J=f.reduce(function(L,ie){var pe="".concat(ie.axisType,"Map");return ne(ne({},L),{},ke({},pe,W9(O,ne(ne({},ie),{},{graphicalItems:F,stackGroups:ie.axisType===H&&Y,dataStartIndex:E,dataEndIndex:A}))))},{}),U=Y9(ne(ne({},J),{},{props:O,graphicalItems:F}),C?.legendBBox);Object.keys(J).forEach(function(L){J[L]=h(O,J[L],U,L.replace("Map",""),r)});var X=J["".concat(B,"Map")],K=H9(X),I=v(O,ne(ne({},J),{},{dataStartIndex:E,dataEndIndex:A,updateId:N,graphicalItems:F,stackGroups:Y,offset:U}));return ne(ne({formattedGraphicalItems:I,graphicalItems:F,offset:U,stackGroups:Y},K),J)},w=(function(x){function S(C){var O,E,A;return C9(this,S),A=k9(this,S,[C]),ke(A,"eventEmitterSymbol",Symbol("rechartsEventEmitter")),ke(A,"accessibilityManager",new p9),ke(A,"handleLegendBBoxUpdate",function(N){if(N){var P=A.state,R=P.dataStartIndex,D=P.dataEndIndex,G=P.updateId;A.setState(ne({legendBBox:N},b({props:A.props,dataStartIndex:R,dataEndIndex:D,updateId:G},ne(ne({},A.state),{},{legendBBox:N}))))}}),ke(A,"handleReceiveSyncEvent",function(N,P,R){if(A.props.syncId===N){if(R===A.eventEmitterSymbol&&typeof A.props.syncMethod!="function")return;A.applySyncEvent(P)}}),ke(A,"handleBrushChange",function(N){var P=N.startIndex,R=N.endIndex;if(P!==A.state.dataStartIndex||R!==A.state.dataEndIndex){var D=A.state.updateId;A.setState(function(){return ne({dataStartIndex:P,dataEndIndex:R},b({props:A.props,dataStartIndex:P,dataEndIndex:R,updateId:D},A.state))}),A.triggerSyncEvent({dataStartIndex:P,dataEndIndex:R})}}),ke(A,"handleMouseEnter",function(N){var P=A.getMouseInfo(N);if(P){var R=ne(ne({},P),{},{isTooltipActive:!0});A.setState(R),A.triggerSyncEvent(R);var D=A.props.onMouseEnter;$e(D)&&D(R,N)}}),ke(A,"triggeredAfterMouseMove",function(N){var P=A.getMouseInfo(N),R=P?ne(ne({},P),{},{isTooltipActive:!0}):{isTooltipActive:!1};A.setState(R),A.triggerSyncEvent(R);var D=A.props.onMouseMove;$e(D)&&D(R,N)}),ke(A,"handleItemMouseEnter",function(N){A.setState(function(){return{isTooltipActive:!0,activeItem:N,activePayload:N.tooltipPayload,activeCoordinate:N.tooltipPosition||{x:N.cx,y:N.cy}}})}),ke(A,"handleItemMouseLeave",function(){A.setState(function(){return{isTooltipActive:!1}})}),ke(A,"handleMouseMove",function(N){N.persist(),A.throttleTriggeredAfterMouseMove(N)}),ke(A,"handleMouseLeave",function(N){A.throttleTriggeredAfterMouseMove.cancel();var P={isTooltipActive:!1};A.setState(P),A.triggerSyncEvent(P);var R=A.props.onMouseLeave;$e(R)&&R(P,N)}),ke(A,"handleOuterEvent",function(N){var P=f4(N),R=Ar(A.props,"".concat(P));if(P&&$e(R)){var D,G;/.*touch.*/i.test(P)?G=A.getMouseInfo(N.changedTouches[0]):G=A.getMouseInfo(N),R((D=G)!==null&&D!==void 0?D:{},N)}}),ke(A,"handleClick",function(N){var P=A.getMouseInfo(N);if(P){var R=ne(ne({},P),{},{isTooltipActive:!0});A.setState(R),A.triggerSyncEvent(R);var D=A.props.onClick;$e(D)&&D(R,N)}}),ke(A,"handleMouseDown",function(N){var P=A.props.onMouseDown;if($e(P)){var R=A.getMouseInfo(N);P(R,N)}}),ke(A,"handleMouseUp",function(N){var P=A.props.onMouseUp;if($e(P)){var R=A.getMouseInfo(N);P(R,N)}}),ke(A,"handleTouchMove",function(N){N.changedTouches!=null&&N.changedTouches.length>0&&A.throttleTriggeredAfterMouseMove(N.changedTouches[0])}),ke(A,"handleTouchStart",function(N){N.changedTouches!=null&&N.changedTouches.length>0&&A.handleMouseDown(N.changedTouches[0])}),ke(A,"handleTouchEnd",function(N){N.changedTouches!=null&&N.changedTouches.length>0&&A.handleMouseUp(N.changedTouches[0])}),ke(A,"handleDoubleClick",function(N){var P=A.props.onDoubleClick;if($e(P)){var R=A.getMouseInfo(N);P(R,N)}}),ke(A,"handleContextMenu",function(N){var P=A.props.onContextMenu;if($e(P)){var R=A.getMouseInfo(N);P(R,N)}}),ke(A,"triggerSyncEvent",function(N){A.props.syncId!==void 0&&sv.emit(lv,A.props.syncId,N,A.eventEmitterSymbol)}),ke(A,"applySyncEvent",function(N){var P=A.props,R=P.layout,D=P.syncMethod,G=A.state.updateId,q=N.dataStartIndex,M=N.dataEndIndex;if(N.dataStartIndex!==void 0||N.dataEndIndex!==void 0)A.setState(ne({dataStartIndex:q,dataEndIndex:M},b({props:A.props,dataStartIndex:q,dataEndIndex:M,updateId:G},A.state)));else if(N.activeTooltipIndex!==void 0){var H=N.chartX,B=N.chartY,F=N.activeTooltipIndex,Y=A.state,J=Y.offset,U=Y.tooltipTicks;if(!J)return;if(typeof D=="function")F=D(U,N);else if(D==="value"){F=-1;for(var X=0;X<U.length;X++)if(U[X].value===N.activeLabel){F=X;break}}var K=ne(ne({},J),{},{x:J.left,y:J.top}),I=Math.min(H,K.x+K.width),L=Math.min(B,K.y+K.height),ie=U[F]&&U[F].value,pe=Oy(A.state,A.props.data,F),fe=U[F]?{x:R==="horizontal"?U[F].coordinate:I,y:R==="horizontal"?L:U[F].coordinate}:hk;A.setState(ne(ne({},N),{},{activeLabel:ie,activeCoordinate:fe,activePayload:pe,activeTooltipIndex:F}))}else A.setState(N)}),ke(A,"renderCursor",function(N){var P,R=A.state,D=R.isTooltipActive,G=R.activeCoordinate,q=R.activePayload,M=R.offset,H=R.activeTooltipIndex,B=R.tooltipAxisBandSize,F=A.getTooltipEventType(),Y=(P=N.props.active)!==null&&P!==void 0?P:D,J=A.props.layout,U=N.key||"_recharts-cursor";return V.createElement(b9,{key:U,activeCoordinate:G,activePayload:q,activeTooltipIndex:H,chartName:r,element:N,isActive:Y,layout:J,offset:M,tooltipAxisBandSize:B,tooltipEventType:F})}),ke(A,"renderPolarAxis",function(N,P,R){var D=Ar(N,"type.axisType"),G=Ar(A.state,"".concat(D,"Map")),q=N.type.defaultProps,M=q!==void 0?ne(ne({},q),N.props):N.props,H=G&&G[M["".concat(D,"Id")]];return T.cloneElement(N,ne(ne({},H),{},{className:We(D,H.className),key:N.key||"".concat(P,"-").concat(R),ticks:gn(H,!0)}))}),ke(A,"renderPolarGrid",function(N){var P=N.props,R=P.radialLines,D=P.polarAngles,G=P.polarRadius,q=A.state,M=q.radiusAxisMap,H=q.angleAxisMap,B=Yn(M),F=Yn(H),Y=F.cx,J=F.cy,U=F.innerRadius,X=F.outerRadius;return T.cloneElement(N,{polarAngles:Array.isArray(D)?D:gn(F,!0).map(function(K){return K.coordinate}),polarRadius:Array.isArray(G)?G:gn(B,!0).map(function(K){return K.coordinate}),cx:Y,cy:J,innerRadius:U,outerRadius:X,key:N.key||"polar-grid",radialLines:R})}),ke(A,"renderLegend",function(){var N=A.state.formattedGraphicalItems,P=A.props,R=P.children,D=P.width,G=P.height,q=A.props.margin||{},M=D-(q.left||0)-(q.right||0),H=uE({children:R,formattedGraphicalItems:N,legendWidth:M,legendContent:p});if(!H)return null;var B=H.item,F=CA(H,w9);return T.cloneElement(B,ne(ne({},F),{},{chartWidth:D,chartHeight:G,margin:q,onBBoxUpdate:A.handleLegendBBoxUpdate}))}),ke(A,"renderTooltip",function(){var N,P=A.props,R=P.children,D=P.accessibilityLayer,G=pr(R,Kr);if(!G)return null;var q=A.state,M=q.isTooltipActive,H=q.activeCoordinate,B=q.activePayload,F=q.activeLabel,Y=q.offset,J=(N=G.props.active)!==null&&N!==void 0?N:M;return T.cloneElement(G,{viewBox:ne(ne({},Y),{},{x:Y.left,y:Y.top}),active:J,label:F,payload:J?B:[],coordinate:H,accessibilityLayer:D})}),ke(A,"renderBrush",function(N){var P=A.props,R=P.margin,D=P.data,G=A.state,q=G.offset,M=G.dataStartIndex,H=G.dataEndIndex,B=G.updateId;return T.cloneElement(N,{key:N.key||"_recharts-brush",onChange:yc(A.handleBrushChange,N.props.onChange),data:D,x:he(N.props.x)?N.props.x:q.left,y:he(N.props.y)?N.props.y:q.top+q.height+q.brushBottom-(R.bottom||0),width:he(N.props.width)?N.props.width:q.width,startIndex:M,endIndex:H,updateId:"brush-".concat(B)})}),ke(A,"renderReferenceElement",function(N,P,R){if(!N)return null;var D=A,G=D.clipPathId,q=A.state,M=q.xAxisMap,H=q.yAxisMap,B=q.offset,F=N.type.defaultProps||{},Y=N.props,J=Y.xAxisId,U=J===void 0?F.xAxisId:J,X=Y.yAxisId,K=X===void 0?F.yAxisId:X;return T.cloneElement(N,{key:N.key||"".concat(P,"-").concat(R),xAxis:M[U],yAxis:H[K],viewBox:{x:B.left,y:B.top,width:B.width,height:B.height},clipPathId:G})}),ke(A,"renderActivePoints",function(N){var P=N.item,R=N.activePoint,D=N.basePoint,G=N.childIndex,q=N.isRange,M=[],H=P.props.key,B=P.item.type.defaultProps!==void 0?ne(ne({},P.item.type.defaultProps),P.item.props):P.item.props,F=B.activeDot,Y=B.dataKey,J=ne(ne({index:G,dataKey:Y,cx:R.x,cy:R.y,r:4,fill:Px(P.item),strokeWidth:2,stroke:"#fff",payload:R.payload,value:R.value},Ue(F,!1)),kc(F));return M.push(S.renderActiveDot(F,J,"".concat(H,"-activePoint-").concat(G))),D?M.push(S.renderActiveDot(F,ne(ne({},J),{},{cx:D.x,cy:D.y}),"".concat(H,"-basePoint-").concat(G))):q&&M.push(null),M}),ke(A,"renderGraphicChild",function(N,P,R){var D=A.filterFormatItem(N,P,R);if(!D)return null;var G=A.getTooltipEventType(),q=A.state,M=q.isTooltipActive,H=q.tooltipAxis,B=q.activeTooltipIndex,F=q.activeLabel,Y=A.props.children,J=pr(Y,Kr),U=D.props,X=U.points,K=U.isRange,I=U.baseLine,L=D.item.type.defaultProps!==void 0?ne(ne({},D.item.type.defaultProps),D.item.props):D.item.props,ie=L.activeDot,pe=L.hide,fe=L.activeBar,ve=L.activeShape,ge=!!(!pe&&M&&J&&(ie||fe||ve)),me={};G!=="axis"&&J&&J.props.trigger==="click"?me={onClick:yc(A.handleItemMouseEnter,N.props.onClick)}:G!=="axis"&&(me={onMouseLeave:yc(A.handleItemMouseLeave,N.props.onMouseLeave),onMouseEnter:yc(A.handleItemMouseEnter,N.props.onMouseEnter)});var ae=T.cloneElement(N,ne(ne({},D.props),me));function Se($t){return typeof H.dataKey=="function"?H.dataKey($t.payload):null}if(ge)if(B>=0){var se,te;if(H.dataKey&&!H.allowDuplicatedCategory){var Pe=typeof H.dataKey=="function"?Se:"payload.".concat(H.dataKey.toString());se=hv(X,Pe,F),te=K&&I&&hv(I,Pe,F)}else se=X?.[B],te=K&&I&&I[B];if(ve||fe){var Ee=N.props.activeIndex!==void 0?N.props.activeIndex:B;return[T.cloneElement(N,ne(ne(ne({},D.props),me),{},{activeIndex:Ee})),null,null]}if(!He(se))return[ae].concat(Ga(A.renderActivePoints({item:D,activePoint:se,basePoint:te,childIndex:B,isRange:K})))}else{var Ke,Xe=(Ke=A.getItemByXY(A.state.activeCoordinate))!==null&&Ke!==void 0?Ke:{graphicalItem:ae},Ae=Xe.graphicalItem,Be=Ae.item,pt=Be===void 0?N:Be,bt=Ae.childIndex,gt=ne(ne(ne({},D.props),me),{},{activeIndex:bt});return[T.cloneElement(pt,gt),null,null]}return K?[ae,null,null]:[ae,null]}),ke(A,"renderCustomized",function(N,P,R){return T.cloneElement(N,ne(ne({key:"recharts-customized-".concat(R)},A.props),A.state))}),ke(A,"renderMap",{CartesianGrid:{handler:jc,once:!0},ReferenceArea:{handler:A.renderReferenceElement},ReferenceLine:{handler:jc},ReferenceDot:{handler:A.renderReferenceElement},XAxis:{handler:jc},YAxis:{handler:jc},Brush:{handler:A.renderBrush,once:!0},Bar:{handler:A.renderGraphicChild},Line:{handler:A.renderGraphicChild},Area:{handler:A.renderGraphicChild},Radar:{handler:A.renderGraphicChild},RadialBar:{handler:A.renderGraphicChild},Scatter:{handler:A.renderGraphicChild},Pie:{handler:A.renderGraphicChild},Funnel:{handler:A.renderGraphicChild},Tooltip:{handler:A.renderCursor,once:!0},PolarGrid:{handler:A.renderPolarGrid,once:!0},PolarAngleAxis:{handler:A.renderPolarAxis},PolarRadiusAxis:{handler:A.renderPolarAxis},Customized:{handler:A.renderCustomized}}),A.clipPathId="".concat((O=C.id)!==null&&O!==void 0?O:Fu("recharts"),"-clip"),A.throttleTriggeredAfterMouseMove=dO(A.triggeredAfterMouseMove,(E=C.throttleDelay)!==null&&E!==void 0?E:1e3/60),A.state={},A}return R9(S,x),E9(S,[{key:"componentDidMount",value:function(){var O,E;this.addListener(),this.accessibilityManager.setDetails({container:this.container,offset:{left:(O=this.props.margin.left)!==null&&O!==void 0?O:0,top:(E=this.props.margin.top)!==null&&E!==void 0?E:0},coordinateList:this.state.tooltipTicks,mouseHandlerCallback:this.triggeredAfterMouseMove,layout:this.props.layout}),this.displayDefaultTooltip()}},{key:"displayDefaultTooltip",value:function(){var O=this.props,E=O.children,A=O.data,N=O.height,P=O.layout,R=pr(E,Kr);if(R){var D=R.props.defaultIndex;if(!(typeof D!="number"||D<0||D>this.state.tooltipTicks.length-1)){var G=this.state.tooltipTicks[D]&&this.state.tooltipTicks[D].value,q=Oy(this.state,A,D,G),M=this.state.tooltipTicks[D].coordinate,H=(this.state.offset.top+N)/2,B=P==="horizontal",F=B?{x:M,y:H}:{y:M,x:H},Y=this.state.formattedGraphicalItems.find(function(U){var X=U.item;return X.type.name==="Scatter"});Y&&(F=ne(ne({},F),Y.props.points[D].tooltipPosition),q=Y.props.points[D].tooltipPayload);var J={activeTooltipIndex:D,isTooltipActive:!0,activeLabel:G,activePayload:q,activeCoordinate:F};this.setState(J),this.renderCursor(R),this.accessibilityManager.setIndex(D)}}}},{key:"getSnapshotBeforeUpdate",value:function(O,E){if(!this.props.accessibilityLayer)return null;if(this.state.tooltipTicks!==E.tooltipTicks&&this.accessibilityManager.setDetails({coordinateList:this.state.tooltipTicks}),this.props.layout!==O.layout&&this.accessibilityManager.setDetails({layout:this.props.layout}),this.props.margin!==O.margin){var A,N;this.accessibilityManager.setDetails({offset:{left:(A=this.props.margin.left)!==null&&A!==void 0?A:0,top:(N=this.props.margin.top)!==null&&N!==void 0?N:0}})}return null}},{key:"componentDidUpdate",value:function(O){gv([pr(O.children,Kr)],[pr(this.props.children,Kr)])||this.displayDefaultTooltip()}},{key:"componentWillUnmount",value:function(){this.removeListener(),this.throttleTriggeredAfterMouseMove.cancel()}},{key:"getTooltipEventType",value:function(){var O=pr(this.props.children,Kr);if(O&&typeof O.props.shared=="boolean"){var E=O.props.shared?"axis":"item";return u.indexOf(E)>=0?E:o}return o}},{key:"getMouseInfo",value:function(O){if(!this.container)return null;var E=this.container,A=E.getBoundingClientRect(),N=eM(A),P={chartX:Math.round(O.pageX-N.left),chartY:Math.round(O.pageY-N.top)},R=A.width/E.offsetWidth||1,D=this.inRange(P.chartX,P.chartY,R);if(!D)return null;var G=this.state,q=G.xAxisMap,M=G.yAxisMap,H=this.getTooltipEventType(),B=EA(this.state,this.props.data,this.props.layout,D);if(H!=="axis"&&q&&M){var F=Yn(q).scale,Y=Yn(M).scale,J=F&&F.invert?F.invert(P.chartX):null,U=Y&&Y.invert?Y.invert(P.chartY):null;return ne(ne({},P),{},{xValue:J,yValue:U},B)}return B?ne(ne({},P),B):null}},{key:"inRange",value:function(O,E){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,N=this.props.layout,P=O/A,R=E/A;if(N==="horizontal"||N==="vertical"){var D=this.state.offset,G=P>=D.left&&P<=D.left+D.width&&R>=D.top&&R<=D.top+D.height;return G?{x:P,y:R}:null}var q=this.state,M=q.angleAxisMap,H=q.radiusAxisMap;if(M&&H){var B=Yn(M);return VS({x:P,y:R},B)}return null}},{key:"parseEventsOfWrapper",value:function(){var O=this.props.children,E=this.getTooltipEventType(),A=pr(O,Kr),N={};A&&E==="axis"&&(A.props.trigger==="click"?N={onClick:this.handleClick}:N={onMouseEnter:this.handleMouseEnter,onDoubleClick:this.handleDoubleClick,onMouseMove:this.handleMouseMove,onMouseLeave:this.handleMouseLeave,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onContextMenu:this.handleContextMenu});var P=kc(this.props,this.handleOuterEvent);return ne(ne({},P),N)}},{key:"addListener",value:function(){sv.on(lv,this.handleReceiveSyncEvent)}},{key:"removeListener",value:function(){sv.removeListener(lv,this.handleReceiveSyncEvent)}},{key:"filterFormatItem",value:function(O,E,A){for(var N=this.state.formattedGraphicalItems,P=0,R=N.length;P<R;P++){var D=N[P];if(D.item===O||D.props.key===O.key||E===vn(D.item.type)&&A===D.childIndex)return D}return null}},{key:"renderClipPath",value:function(){var O=this.clipPathId,E=this.state.offset,A=E.left,N=E.top,P=E.height,R=E.width;return V.createElement("defs",null,V.createElement("clipPath",{id:O},V.createElement("rect",{x:A,y:N,height:P,width:R})))}},{key:"getXScales",value:function(){var O=this.state.xAxisMap;return O?Object.entries(O).reduce(function(E,A){var N=AA(A,2),P=N[0],R=N[1];return ne(ne({},E),{},ke({},P,R.scale))},{}):null}},{key:"getYScales",value:function(){var O=this.state.yAxisMap;return O?Object.entries(O).reduce(function(E,A){var N=AA(A,2),P=N[0],R=N[1];return ne(ne({},E),{},ke({},P,R.scale))},{}):null}},{key:"getXScaleByAxisId",value:function(O){var E;return(E=this.state.xAxisMap)===null||E===void 0||(E=E[O])===null||E===void 0?void 0:E.scale}},{key:"getYScaleByAxisId",value:function(O){var E;return(E=this.state.yAxisMap)===null||E===void 0||(E=E[O])===null||E===void 0?void 0:E.scale}},{key:"getItemByXY",value:function(O){var E=this.state,A=E.formattedGraphicalItems,N=E.activeItem;if(A&&A.length)for(var P=0,R=A.length;P<R;P++){var D=A[P],G=D.props,q=D.item,M=q.type.defaultProps!==void 0?ne(ne({},q.type.defaultProps),q.props):q.props,H=vn(q.type);if(H==="Bar"){var B=(G.data||[]).find(function(U){return wz(O,U)});if(B)return{graphicalItem:D,payload:B}}else if(H==="RadialBar"){var F=(G.data||[]).find(function(U){return VS(O,U)});if(F)return{graphicalItem:D,payload:F}}else if(nd(D,N)||id(D,N)||Rs(D,N)){var Y=dq({graphicalItem:D,activeTooltipItem:N,itemData:M.data}),J=M.activeIndex===void 0?Y:M.activeIndex;return{graphicalItem:ne(ne({},D),{},{childIndex:J}),payload:Rs(D,N)?M.data[Y]:D.props.data[Y]}}}return null}},{key:"render",value:function(){var O=this;if(!o_(this))return null;var E=this.props,A=E.children,N=E.className,P=E.width,R=E.height,D=E.style,G=E.compact,q=E.title,M=E.desc,H=CA(E,_9),B=Ue(H,!1);if(G)return V.createElement(uA,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},V.createElement(yv,xa({},B,{width:P,height:R,title:q,desc:M}),this.renderClipPath(),l_(A,this.renderMap)));if(this.props.accessibilityLayer){var F,Y;B.tabIndex=(F=this.props.tabIndex)!==null&&F!==void 0?F:0,B.role=(Y=this.props.role)!==null&&Y!==void 0?Y:"application",B.onKeyDown=function(U){O.accessibilityManager.keyboardEvent(U)},B.onFocus=function(){O.accessibilityManager.focus()}}var J=this.parseEventsOfWrapper();return V.createElement(uA,{state:this.state,width:this.props.width,height:this.props.height,clipPathId:this.clipPathId},V.createElement("div",xa({className:We("recharts-wrapper",N),style:ne({position:"relative",cursor:"default",width:P,height:R},D)},J,{ref:function(X){O.container=X}}),V.createElement(yv,xa({},B,{width:P,height:R,title:q,desc:M,style:L9}),this.renderClipPath(),l_(A,this.renderMap)),this.renderLegend(),this.renderTooltip()))}}])})(T.Component);ke(w,"displayName",r),ke(w,"defaultProps",ne({layout:"horizontal",stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index"},m)),ke(w,"getDerivedStateFromProps",function(x,S){var C=x.dataKey,O=x.data,E=x.children,A=x.width,N=x.height,P=x.layout,R=x.stackOffset,D=x.margin,G=S.dataStartIndex,q=S.dataEndIndex;if(S.updateId===void 0){var M=kA(x);return ne(ne(ne({},M),{},{updateId:0},b(ne(ne({props:x},M),{},{updateId:0}),S)),{},{prevDataKey:C,prevData:O,prevWidth:A,prevHeight:N,prevLayout:P,prevStackOffset:R,prevMargin:D,prevChildren:E})}if(C!==S.prevDataKey||O!==S.prevData||A!==S.prevWidth||N!==S.prevHeight||P!==S.prevLayout||R!==S.prevStackOffset||!ba(D,S.prevMargin)){var H=kA(x),B={chartX:S.chartX,chartY:S.chartY,isTooltipActive:S.isTooltipActive},F=ne(ne({},EA(S,O,P)),{},{updateId:S.updateId+1}),Y=ne(ne(ne({},H),B),F);return ne(ne(ne({},Y),b(ne({props:x},Y),S)),{},{prevDataKey:C,prevData:O,prevWidth:A,prevHeight:N,prevLayout:P,prevStackOffset:R,prevMargin:D,prevChildren:E})}if(!gv(E,S.prevChildren)){var J,U,X,K,I=pr(E,$a),L=I&&(J=(U=I.props)===null||U===void 0?void 0:U.startIndex)!==null&&J!==void 0?J:G,ie=I&&(X=(K=I.props)===null||K===void 0?void 0:K.endIndex)!==null&&X!==void 0?X:q,pe=L!==G||ie!==q,fe=!He(O),ve=fe&&!pe?S.updateId:S.updateId+1;return ne(ne({updateId:ve},b(ne(ne({props:x},S),{},{updateId:ve,dataStartIndex:L,dataEndIndex:ie}),S)),{},{prevChildren:E,dataStartIndex:L,dataEndIndex:ie})}return null}),ke(w,"renderActiveDot",function(x,S,C){var O;return T.isValidElement(x)?O=T.cloneElement(x,S):$e(x)?O=x(S):O=V.createElement(CE,S),V.createElement(Pt,{className:"recharts-active-dot",key:C},O)});var _=T.forwardRef(function(S,C){return V.createElement(w,xa({},S,{ref:C}))});return _.displayName=w.displayName,_},X9=K9({chartName:"BarChart",GraphicalChild:Bi,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:ud},{axisType:"yAxis",AxisComp:dd}],formatAxisMap:s7});const Q9=({chargeableIncome:e})=>{const t=[{name:"0%",limit:8e5,rate:0,color:"#51cf66"},{name:"15%",limit:3e6,rate:.15,color:"#4dabf7"},{name:"18%",limit:12e6,rate:.18,color:"#ffd43b"},{name:"21%",limit:25e6,rate:.21,color:"#ff922b"},{name:"23%",limit:5e7,rate:.23,color:"#ff6b6b"},{name:"25%",limit:1/0,rate:.25,color:"#c92a2a"}],r=t.map((o,c)=>{const u=c===0?0:t[c-1].limit;let f=0,p=!1;return e>u&&(f=Math.min(e-u,o.limit-u),p=f>0),{name:o.name,amount:f,limit:o.limit===1/0?"∞":`₦${(o.limit/1e6).toFixed(0)}M`,color:o.color,isActive:p,rate:o.name}}).filter(o=>o.amount>0),n=o=>o>=1e6?`₦${(o/1e6).toFixed(1)}M`:o>=1e3?`₦${(o/1e3).toFixed(0)}k`:`₦${o}`,a=({active:o,payload:c})=>{if(o&&c&&c.length){const u=c[0].payload;return l.jsxs("div",{className:"chart-tooltip",children:[l.jsxs("p",{className:"tooltip-rate",children:["Tax Rate: ",u.rate]}),l.jsxs("p",{className:"tooltip-amount",children:["Amount: ",n(u.amount)]}),l.jsxs("p",{className:"tooltip-tax",children:["Tax: ",n(u.amount*(parseInt(u.rate)/100))]})]})}return null};return r.length===0?null:l.jsxs("div",{className:"tax-bands-chart",children:[l.jsx("h4",{children:"📊 NTA 2025 Tax Bands Applied"}),l.jsx("div",{className:"chart-container",children:l.jsx(Y3,{width:"100%",height:200,children:l.jsxs(X9,{data:r,layout:"vertical",margin:{left:50,right:20,top:10,bottom:10},children:[l.jsx(rk,{strokeDasharray:"3 3",stroke:"rgba(255,255,255,0.1)"}),l.jsx(ud,{type:"number",tickFormatter:n,stroke:"#b3b3ff"}),l.jsx(dd,{type:"category",dataKey:"name",stroke:"#b3b3ff"}),l.jsx(Kr,{content:l.jsx(a,{})}),l.jsx(Bi,{dataKey:"amount",radius:[0,4,4,0],children:r.map((o,c)=>l.jsx(ax,{fill:o.color},`cell-${c}`))})]})})}),l.jsx("div",{className:"chart-legend",children:r.map((o,c)=>l.jsxs("div",{className:"legend-item",children:[l.jsx("span",{className:"legend-color",style:{backgroundColor:o.color}}),l.jsxs("span",{className:"legend-label",children:[o.rate,":"]}),l.jsx("span",{className:"legend-value",children:n(o.amount)})]},c))})]})},Js=e=>{if(!e)return"";let t=e.replace(/[^\d.]/g,"");const r=t.split(".");return r.length>2&&(t=r[0]+"."+r.slice(1).join("")),r[0]&&(r[0]=r[0].replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.join(".")},Te=e=>{if(!e)return 0;const t=e.replace(/,/g,""),r=parseFloat(t);return isNaN(r)?0:r},_e=e=>!e&&e!==0?"₦0":"₦"+Number(e).toLocaleString("en-NG"),gk=({calculation:e,type:t,user:r,onClose:n,creditBalance:a,setCreditBalance:o})=>{const[c,u]=T.useState(!1),[f,p]=T.useState(""),h=b=>{if(b==null||b==="")return"₦0";let w;if(typeof b=="string"){const _=b.replace(/,/g,"").trim();w=parseFloat(_)}else if(typeof b=="number")w=b;else return"₦0";return isNaN(w)||!isFinite(w)?"₦0":new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:0,maximumFractionDigits:0}).format(w)},m=async()=>{if(a<3){p("Insufficient credits. You need 3 credits for a comprehensive report.");return}u(!0),p("");try{if(console.log("Generating report with:",{calculation:e,user:r,type:t}),!e||!e.input||!e.result)throw new Error("Missing calculation data");await new Promise(x=>setTimeout(x,1e3)),o(x=>x-3);const b=v(),w=new Blob([b],{type:"text/html"}),_=URL.createObjectURL(w);window.open(_,"_blank")}catch(b){console.error("Report generation failed:",b),p("Failed to generate report. Please try again. "+b.message)}finally{u(!1)}},v=()=>{const b=new Date().toLocaleDateString("en-NG",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),w=e.input||{},_=e.result||{},x=new Date().getFullYear()-1,S=h(w.employment_salary),C=h(w.business_profit),O=h(w.pension_income),E=h(w.pension_rsa),A=h(w.nhis),N=h(w.nhf),P=h(w.rent_paid),R=h(w.paye_deducted),D=h(w.wht_credits),G=h(_.total_income),q=h(_.total_deductions),M=h(_.chargeable_income),H=h(_.tax_payable),B=h(_.refund_amount),F=h(_.additional_tax),Y=_.effective_rate||0,U=(()=>{const X=_?.chargeable_income||0;let K="",I=X;const L=[{limit:8e5,rate:0,label:"First ₦800,000"},{limit:3e6,rate:.15,label:"Next ₦2,200,000"},{limit:12e6,rate:.18,label:"Next ₦9,000,000"},{limit:25e6,rate:.21,label:"Next ₦13,000,000"},{limit:5e7,rate:.23,label:"Next ₦25,000,000"},{limit:1/0,rate:.25,label:"Above ₦50,000,000"}];for(let ie=0;ie<L.length&&!(I<=0);ie++){const pe=ie===0?L[ie].limit:L[ie].limit-L[ie-1].limit,fe=Math.min(I,pe),ve=fe*L[ie].rate;K+=`<tr><td>${L[ie].label}</td><td>${(L[ie].rate*100).toFixed(0)}%</td><td style="text-align: right;">${h(ve)}</td></tr>`,I-=fe}return K})();return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zero Mumu Tax - Personal Income Tax Report & Forms</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Times New Roman', Times, serif;
            background: #ffffff;
            color: #000000;
            line-height: 1.5;
            padding: 40px;
        }
        
        .print-button {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #008751;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            font-size: 14px;
            cursor: pointer;
            z-index: 1000;
        }
        
        .container {
            max-width: 1100px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        
        /* ZMT Header */
        .zmt-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #008751;
        }
        
        .zmt-logo {
            width: 80px;
            height: 80px;
        }
        
        .zmt-title h1 {
            color: #008751;
            font-size: 28px;
            margin: 0 0 5px 0;
        }
        
        .zmt-title p {
            color: #666;
            margin: 0;
        }
        
        .ref-badge {
            display: inline-block;
            background: #f0f0f0;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            color: #008751;
            margin-top: 5px;
        }
        
        /* Sections */
        .section {
            margin-bottom: 30px;
            padding: 20px;
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        
        .section h2 {
            color: #008751;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .section h3 {
            color: #0B4F6C;
            margin: 20px 0 10px 0;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        
        .info-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px dashed #ccc;
        }
        
        .info-label {
            font-weight: 600;
            color: #555;
        }
        
        .info-value {
            font-weight: 500;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }
        
        th {
            background: #e0e0e0;
            padding: 10px;
            text-align: left;
            border: 1px solid #ccc;
        }
        
        td {
            padding: 8px 10px;
            border: 1px solid #ccc;
        }
        
        .total-row {
            font-weight: bold;
            background: #f0f0f0;
        }
        
        .result-box {
            margin: 20px 0;
            padding: 20px;
            border: 2px solid;
            text-align: center;
        }
        
        .result-box.refund { border-color: #2E7D32; background: #e8f5e9; }
        .result-box.additional { border-color: #B22222; background: #ffebee; }
        .result-box.balanced { border-color: #0B4F6C; background: #e3f2fd; }
        
        .result-amount {
            font-size: 36px;
            font-weight: bold;
            margin: 10px 0;
        }
        
        /* Form Section */
        .form-section {
            margin-top: 40px;
            padding: 30px;
            border: 2px solid #008751;
            border-radius: 8px;
            background: #fff;
        }
        
        .form-section h2 {
            color: #008751;
            text-align: center;
            margin-bottom: 30px;
        }
        
        .form-field {
            display: flex;
            margin-bottom: 15px;
            border-bottom: 1px dashed #999;
            padding-bottom: 5px;
        }
        
        .form-label {
            width: 200px;
            font-weight: 600;
        }
        
        .form-value {
            flex: 1;
        }
        
        .declaration {
            margin-top: 30px;
            padding: 20px;
            border: 1px solid #000;
        }
        
        .signature-line {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
        }
        
        .signature-box {
            width: 200px;
        }
        
        .signature-box div {
            border-bottom: 1px solid #000;
            margin-top: 5px;
            height: 20px;
        }
        
        .official-use {
            margin-top: 30px;
            padding: 15px;
            background: #f0f0f0;
            border: 1px dashed #999;
        }
        
        .disclaimer {
            background: #fff9e6;
            border: 1px solid #FFD700;
            border-radius: 8px;
            padding: 16px;
            margin: 30px 0;
            font-size: 13px;
            color: #666;
        }
        
        .footer {
            margin-top: 40px;
            text-align: center;
            color: #666;
            font-size: 12px;
            border-top: 1px solid #ddd;
            padding-top: 20px;
        }
        
        @media print {
            .print-button { display: none; }
            body { padding: 0; }
            .container { box-shadow: none; }
        }
    </style>
</head>
<body>
    <button class="print-button" onclick="window.print()">🖨️ Print Report & Forms</button>

    <div class="container">
        <!-- ZMT Header -->
        <div class="zmt-header">
            <div class="zmt-logo">
                <svg width="80" height="80" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#008751" stroke-width="15"/>
                    <circle cx="100" cy="100" r="70" fill="#FFD700"/>
                    <text x="100" y="135" text-anchor="middle" fill="#4D3D1A" font-size="110" font-weight="900">₦</text>
                    <rect x="65" y="145" width="70" height="25" rx="5" fill="#006747"/>
                    <text x="100" y="163" text-anchor="middle" fill="white" font-size="18" font-weight="bold">ZMT</text>
                </svg>
            </div>
            <div class="zmt-title">
                <h1>ZERO MUMU TAX</h1>
                <p>Personal Income Tax Report & Filing Forms</p>
                <span class="ref-badge">NTA 2025 Compliant • Ref: ZMT-PIT-${Date.now().toString().slice(-8)}</span>
            </div>
        </div>

        <!-- Taxpayer Information -->
        <div class="section">
            <h2>👤 Taxpayer Information</h2>
            <div class="info-grid">
                <div class="info-item"><span class="info-label">Full Name:</span> <span class="info-value">${r?.full_name||"____________________"}</span></div>
                <div class="info-item"><span class="info-label">Email:</span> <span class="info-value">${r?.email||"____________________"}</span></div>
                <div class="info-item"><span class="info-label">Phone:</span> <span class="info-value">${r?.phone||"____________________"}</span></div>
                <div class="info-item"><span class="info-label">Tax Year:</span> <span class="info-value">${x}</span></div>
                <div class="info-item"><span class="info-label">Assessment Date:</span> <span class="info-value">${b}</span></div>
                <div class="info-item"><span class="info-label">TIN:</span> <span class="info-value">____________________</span></div>
            </div>
        </div>

        <!-- Income Summary -->
        <div class="section">
            <h2>💰 Income Summary</h2>
            <table>
                <tr><th>Description</th><th>Amount (₦)</th></tr>
                <tr><td>Employment Salary</td><td>${S}</td></tr>
                <tr><td>Business Profit</td><td>${C}</td></tr>
                <tr><td>Pension Income</td><td>${O}</td></tr>
                <tr class="total-row"><td><strong>Gross Income</strong></td><td><strong>${G}</strong></td></tr>
            </table>
        </div>

        <!-- Deductions -->
        <div class="section">
            <h2>🧾 Allowable Deductions</h2>
            <table>
                <tr><th>Description</th><th>Amount (₦)</th></tr>
                <tr><td>RSA Pension Contribution</td><td>${E}</td></tr>
                <tr><td>NHIS Contribution</td><td>${A}</td></tr>
                <tr><td>NHF Contribution</td><td>${N}</td></tr>
                <tr><td>Rent Relief (20% of rent, max ₦500,000)</td><td>${h(Math.min(parseFloat(w.rent_paid?.replace(/,/g,"")||0)*.2,5e5))}</td></tr>
                <tr class="total-row"><td><strong>Total Deductions</strong></td><td><strong>${q}</strong></td></tr>
            </table>
        </div>

        <!-- Tax Computation -->
        <div class="section">
            <h2>📊 Tax Computation</h2>
            <div class="info-item" style="margin-bottom: 15px;">
                <span class="info-label">Chargeable Income:</span>
                <span class="info-value"><strong>${M}</strong></span>
            </div>
            
            <table>
                <thead>
                    <tr><th>Income Band</th><th>Rate</th><th>Tax Amount</th></tr>
                </thead>
                <tbody>
                    ${U}
                </tbody>
                <tfoot>
                    <tr class="total-row"><td colspan="2"><strong>Total Tax Payable</strong></td><td><strong>${H}</strong></td></tr>
                </tfoot>
            </table>

            <div class="result-box ${_.result_type}">
                <h3>${_.result_type==="refund"?"REFUND DUE":_.result_type==="additional"?"TAX PAYABLE":"TAX BALANCED"}</h3>
                ${_.result_type!=="balanced"?`<div class="result-amount">${h(_.result_type==="refund"?_.refund_amount:_.additional_tax)}</div>`:""}
                <p>Effective Tax Rate: ${Y}%</p>
            </div>
        </div>

        <!-- NRS Filing Form -->
        <div class="form-section">
            <h2>NIGERIA REVENUE SERVICE - PERSONAL INCOME TAX FORM</h2>
            
            <h3>Section A: Personal Details</h3>
            <div class="form-field"><span class="form-label">Full Name:</span> <span class="form-value">${r?.full_name||"____________________"}</span></div>
            <div class="form-field"><span class="form-label">Email:</span> <span class="form-value">${r?.email||"____________________"}</span></div>
            <div class="form-field"><span class="form-label">Phone:</span> <span class="form-value">${r?.phone||"____________________"}</span></div>
            <div class="form-field"><span class="form-label">Date of Birth:</span> <span class="form-value">${r?.date_of_birth||"____________________"}</span></div>
            <div class="form-field"><span class="form-label">Occupation:</span> <span class="form-value">${r?.occupation||"____________________"}</span></div>
            <div class="form-field"><span class="form-label">State of Residence:</span> <span class="form-value">${r?.state_of_residence||"____________________"}</span></div>
            <div class="form-field"><span class="form-label">TIN:</span> <span class="form-value">____________________</span></div>

            <h3>Section B: Income Declaration</h3>
            <div class="form-field"><span class="form-label">Employment Income:</span> <span class="form-value">${S}</span></div>
            <div class="form-field"><span class="form-label">Business Income:</span> <span class="form-value">${C}</span></div>
            <div class="form-field"><span class="form-label">Pension Income:</span> <span class="form-value">${O}</span></div>
            <div class="form-field"><span class="form-label">Other Income:</span> <span class="form-value">₦0</span></div>

            <h3>Section C: Deductions Claimed</h3>
            <div class="form-field"><span class="form-label">RSA Pension:</span> <span class="form-value">${E}</span></div>
            <div class="form-field"><span class="form-label">NHIS:</span> <span class="form-value">${A}</span></div>
            <div class="form-field"><span class="form-label">NHF:</span> <span class="form-value">${N}</span></div>
            <div class="form-field"><span class="form-label">Rent Paid:</span> <span class="form-value">${P}</span></div>
            <div class="form-field"><span class="form-label">Life Insurance:</span> <span class="form-value">₦0</span></div>
            <div class="form-field"><span class="form-label">Mortgage Interest:</span> <span class="form-value">₦0</span></div>

            <h3>Section D: Tax Computation</h3>
            <div class="form-field"><span class="form-label">Gross Income:</span> <span class="form-value">${G}</span></div>
            <div class="form-field"><span class="form-label">Total Deductions:</span> <span class="form-value">${q}</span></div>
            <div class="form-field"><span class="form-label">Chargeable Income:</span> <span class="form-value">${M}</span></div>
            <div class="form-field"><span class="form-label">Tax Payable:</span> <span class="form-value">${H}</span></div>
            <div class="form-field"><span class="form-label">PAYE Already Deducted:</span> <span class="form-value">${R}</span></div>
            <div class="form-field"><span class="form-label">WHT Credits:</span> <span class="form-value">${D}</span></div>
            <div class="form-field" style="font-weight: bold;"><span class="form-label">BALANCE DUE / (REFUND):</span> <span class="form-value">${_.result_type==="refund"?`(REFUND) ${B}`:_.result_type==="additional"?F:"₦0"}</span></div>

            <div class="declaration">
                <h3>Declaration</h3>
                <p>I declare that the information provided in this return is true, complete, and correct to the best of my knowledge and belief.</p>
                
                <div class="signature-line">
                    <div class="signature-box">
                        <p>Taxpayer's Signature</p>
                        <div></div>
                    </div>
                    <div class="signature-box">
                        <p>Date</p>
                        <div></div>
                    </div>
                </div>
            </div>

            <div class="official-use">
                <h4>For Official Use Only - NRS</h4>
                <div style="display: flex; gap: 40px;">
                    <div style="flex: 1;">
                        <p>Received by: ____________________</p>
                        <p>Date: ____________________</p>
                    </div>
                    <div style="flex: 1;">
                        <p>Payment Reference: ____________________</p>
                        <p>Verification Code: ____________________</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Disclaimer -->
        <div class="disclaimer">
            <strong>📌 Important Notice:</strong> This document is a TAX PREPARATION TOOL generated by Zero Mumu Tax App based on the information you provided and calculations per the Nigeria Tax Act 2025 (NTA 2025). It is designed to help you prepare your tax return. This is NOT an official NRS form and cannot be submitted directly. Please transfer this information to the official NRS forms or consult a tax professional for official filing.
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Generated by Zero Mumu Tax App • 3 credits used • Ref: ZMT-PIT-${Date.now().toString().slice(-8)}</p>
            <p>© 2026 Zero Mumu Tax. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`};return l.jsxs("div",{className:"modal-overlay",children:[l.jsxs("div",{className:"report-modal",children:[l.jsx("h2",{children:"Personal Income Tax Report"}),l.jsx("p",{className:"subtitle",children:"Generate your complete tax package (3 credits)"}),f&&l.jsxs("div",{className:"error-message",children:["⚠️ ",f]}),l.jsxs("div",{className:"preview-card",children:[l.jsx("h3",{children:"Your Report Includes:"}),l.jsxs("ul",{className:"feature-list",children:[l.jsx("li",{children:"✅ Detailed income and deductions breakdown"}),l.jsx("li",{children:"✅ NTA 2025 tax band calculation"}),l.jsx("li",{children:"✅ NRS-compatible filing form"}),l.jsx("li",{children:"✅ Taxpayer declaration section"}),l.jsx("li",{children:"✅ Print-ready professional format"})]})]}),l.jsxs("div",{className:"credit-info",children:[l.jsx("span",{children:"Cost: 3 credits"}),l.jsxs("span",{className:a<3?"insufficient":"sufficient",children:["Your balance: ",a," credits"]})]}),l.jsxs("div",{className:"action-buttons",children:[l.jsx("button",{className:"secondary-btn",onClick:n,children:"Cancel"}),l.jsx("button",{className:"primary-btn",onClick:m,disabled:c||a<3,children:c?"Generating...":"Generate Report & Forms"})]})]}),l.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }
        .report-modal {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 500px;
          width: 90%;
          color: white;
        }
        h2 { margin: 0 0 4px 0; color: #4299E1; }
        .subtitle { color: #A0AEC0; margin-bottom: 24px; }
        .error-message {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #FBD38D;
        }
        .preview-card {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .preview-card h3 {
          margin: 0 0 12px 0;
          color: #FFD700;
        }
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .feature-list li {
          padding: 8px 0;
          border-bottom: 1px solid #4A5568;
        }
        .feature-list li:last-child {
          border-bottom: none;
        }
        .credit-info {
          display: flex;
          justify-content: space-between;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
          margin-bottom: 24px;
        }
        .insufficient { color: #DD6B20; }
        .sufficient { color: #48BB78; }
        .action-buttons {
          display: flex;
          gap: 12px;
        }
        .secondary-btn, .primary-btn {
          flex: 1;
          padding: 14px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .secondary-btn {
          background: transparent;
          border: 1px solid #4A5568;
          color: white;
        }
        .secondary-btn:hover {
          background: #2D3748;
        }
        .primary-btn {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          color: white;
        }
        .primary-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(11,79,108,0.3);
        }
        .primary-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `})]})},qx=({baseScenario:e,onClose:t,creditBalance:r,setCreditBalance:n,calculatorType:a="pit"})=>{const[o,c]=T.useState(e||{}),[u,f]=T.useState(e||{}),[p,h]=T.useState(null),[m,v]=T.useState(null),[b,w]=T.useState(!1),[_,x]=T.useState(""),[S,C]=T.useState(null),[O,E]=T.useState(!1),[A,N]=T.useState(""),P={increasePension:{name:"Increase Pension",description:"Add more to your pension to reduce tax",changes:{pension_rsa:F=>{const Y=parseFloat(F.employment_basic)||0,J=parseFloat(F.employment_housing)||0,U=parseFloat(F.employment_transport)||0;return((Y+J+U)*.08).toString()}}},claimRentRelief:{name:"Claim Rent Relief",description:"Add rent paid to claim up to ₦500,000 deduction",changes:{rent_paid:()=>"2000000"}},addNHIS:{name:"Add NHIS",description:"Add NHIS contributions to reduce tax",changes:{nhis:F=>((parseFloat(F.employment_basic)||0)*.05).toString()}},increaseBusiness:{name:"Increase Business Income",description:"See how more income affects your tax",changes:{business_profit:F=>((parseFloat(F.business_profit)||0)+1e6).toString()}}},R=F=>{const Y=P[F],J={...u};Object.entries(Y.changes).forEach(([U,X])=>{J[U]=X(o)}),f(J),E(!1),N("")},D=(F,Y,J)=>{const U=Js(J);F==="A"?c(X=>({...X,[Y]:U})):f(X=>({...X,[Y]:U})),N("")},G=F=>{const Y={};return Object.keys(F).forEach(J=>{Y[J]=Te(F[J])}),Y},q=()=>Object.keys(o).some(F=>Te(o[F])!==Te(u[F])),M=async()=>{if(!q()){N("Please make changes to Scenario B before comparing");return}w(!0),x(""),N("");try{const F=await Fe.post("/api/calculations/compare",{scenarios:[G(o),G(u)],calculator_type:a});F.data.success&&(h(F.data.calculations[0].result),v(F.data.calculations[1].result),C(F.data.comparison_group),n(F.data.new_balance))}catch(F){x(F.response?.data?.error||"Comparison failed")}finally{w(!1)}},B=(()=>{if(!p||!m)return null;const F=p.tax_payable||p.total_tax_payable||0,Y=m.tax_payable||m.total_tax_payable||0;if(Y<F){const J=F-Y;return{type:"positive",title:"✅ Good News!",message:`Scenario B saves you ${_e(J)} in tax.`,details:"These changes are beneficial under NTA 2025. Consider implementing them."}}else if(Y>F){const J=Y-F;return{type:"warning",title:"⚠️ Be Careful",message:`Scenario B would cost you ${_e(J)} more in tax.`,details:"Make sure the benefits of these changes outweigh the additional tax."}}else return{type:"neutral",title:"📊 No Change",message:"Both scenarios have the same tax liability.",details:"Your changes do not affect your tax under NTA 2025."}})();return l.jsxs("div",{className:"what-if-comparison",children:[l.jsxs("div",{className:"comparison-header",children:[l.jsx("h2",{children:"What-If Comparison"}),l.jsx("div",{className:"credit-badge",children:"2 credits"}),l.jsx("button",{className:"close-btn",onClick:t,children:"✕"})]}),_&&l.jsxs("div",{className:"error-message",children:["⚠️ ",_]}),A&&l.jsxs("div",{className:"validation-message",children:["⚠️ ",A]}),l.jsxs("div",{className:"presets-bar",children:[l.jsxs("button",{className:"presets-toggle",onClick:()=>E(!O),children:["💡 Quick Ideas ",O?"▲":"▼"]}),O&&l.jsx("div",{className:"presets-grid",children:Object.entries(P).map(([F,Y])=>l.jsxs("button",{className:"preset-btn",onClick:()=>R(F),children:[l.jsx("span",{className:"preset-name",children:Y.name}),l.jsx("span",{className:"preset-desc",children:Y.description})]},F))})]}),l.jsxs("div",{className:"comparison-grid",children:[l.jsxs("div",{className:"scenario-card base",children:[l.jsxs("div",{className:"scenario-header",children:[l.jsx("h3",{children:"Current Scenario"}),l.jsx("span",{className:"scenario-badge",children:"Your Current Inputs"})]}),l.jsx("div",{className:"scenario-content",children:a==="pit"?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Salary (₦)"}),l.jsx("input",{type:"text",value:o.employment_salary||"",onChange:F=>D("A","employment_salary",F.target.value),placeholder:"e.g., 5,000,000"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Business Profit (₦)"}),l.jsx("input",{type:"text",value:o.business_profit||"",onChange:F=>D("A","business_profit",F.target.value),placeholder:"e.g., 2,000,000"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Rent Paid (₦)"}),l.jsx("input",{type:"text",value:o.rent_paid||"",onChange:F=>D("A","rent_paid",F.target.value),placeholder:"e.g., 1,500,000"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Pension (₦)"}),l.jsx("input",{type:"text",value:o.pension_rsa||"",onChange:F=>D("A","pension_rsa",F.target.value),placeholder:"e.g., 240,000"})]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Turnover (₦)"}),l.jsx("input",{type:"text",value:o.turnover||"",onChange:F=>D("A","turnover",F.target.value),placeholder:"e.g., 50,000,000"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Trading Profit (₦)"}),l.jsx("input",{type:"text",value:o.trading_profit||"",onChange:F=>D("A","trading_profit",F.target.value),placeholder:"e.g., 10,000,000"})]})]})})]}),l.jsxs("div",{className:"scenario-card whatif",children:[l.jsxs("div",{className:"scenario-header",children:[l.jsx("h3",{children:"What-If Scenario"}),l.jsx("span",{className:"scenario-badge",children:"Try These Changes"})]}),l.jsx("div",{className:"scenario-content",children:a==="pit"?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Salary (₦)"}),l.jsx("input",{type:"text",value:u.employment_salary||"",onChange:F=>D("B","employment_salary",F.target.value),placeholder:"e.g., 5,000,000"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Business Profit (₦)"}),l.jsx("input",{type:"text",value:u.business_profit||"",onChange:F=>D("B","business_profit",F.target.value),placeholder:"e.g., 2,000,000"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Rent Paid (₦)"}),l.jsx("input",{type:"text",value:u.rent_paid||"",onChange:F=>D("B","rent_paid",F.target.value),placeholder:"e.g., 1,500,000"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Pension (₦)"}),l.jsx("input",{type:"text",value:u.pension_rsa||"",onChange:F=>D("B","pension_rsa",F.target.value),placeholder:"e.g., 240,000"})]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Turnover (₦)"}),l.jsx("input",{type:"text",value:u.turnover||"",onChange:F=>D("B","turnover",F.target.value),placeholder:"e.g., 50,000,000"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Trading Profit (₦)"}),l.jsx("input",{type:"text",value:u.trading_profit||"",onChange:F=>D("B","trading_profit",F.target.value),placeholder:"e.g., 10,000,000"})]})]})})]})]}),l.jsx("div",{className:"comparison-actions",children:l.jsx("button",{className:"compare-btn",onClick:M,disabled:b||r<2,children:b?"Comparing...":r<2?"Need 2 credits":"Compare Scenarios (2 credits)"})}),p&&m&&l.jsxs("div",{className:"comparison-results",children:[l.jsx("h3",{children:"NTA 2025 Comparison Results"}),B&&l.jsx("div",{className:`recommendation-banner ${B.type}`,children:l.jsxs("div",{className:"recommendation-content",children:[l.jsx("h4",{children:B.title}),l.jsx("p",{className:"recommendation-message",children:B.message}),l.jsx("p",{className:"recommendation-details",children:B.details})]})}),l.jsxs("div",{className:"results-table",children:[l.jsxs("div",{className:"results-header",children:[l.jsx("div",{className:"header-item",children:"Metric"}),l.jsx("div",{className:"header-item",children:"Current"}),l.jsx("div",{className:"header-item",children:"What-If"}),l.jsx("div",{className:"header-item",children:"Difference"})]}),a==="pit"?l.jsxs(l.Fragment,{children:[l.jsx(ga,{label:"Total Income",field:"total_income",resultA:p,resultB:m,format:_e}),l.jsx(ga,{label:"Taxable Income",field:"chargeable_income",resultA:p,resultB:m,format:_e}),l.jsx(ga,{label:"Tax Payable",field:"tax_payable",resultA:p,resultB:m,format:_e,highlight:!0})]}):l.jsxs(l.Fragment,{children:[l.jsx(ga,{label:"Total Income",field:"total_income",resultA:p,resultB:m,format:_e}),l.jsx(ga,{label:"Assessable Profit",field:"assessable_profit",resultA:p,resultB:m,format:_e}),l.jsx(ga,{label:"Total Tax",field:"total_tax_payable",resultA:p,resultB:m,format:_e,highlight:!0})]})]}),l.jsxs("div",{className:"nta-guidance",children:[l.jsx("h4",{children:"📋 NTA 2025 Guidance"}),l.jsx("ul",{children:m.tax_payable<p.tax_payable?l.jsxs(l.Fragment,{children:[l.jsx("li",{children:"✅ These changes are tax-efficient under NTA 2025"}),l.jsx("li",{children:"📌 Keep records of all deductions for 6 years"}),l.jsx("li",{children:"🗓️ File by March 31st to avoid penalties"})]}):m.tax_payable>p.tax_payable?l.jsxs(l.Fragment,{children:[l.jsx("li",{children:"⚠️ This scenario increases your tax liability"}),l.jsx("li",{children:"💡 Consider other presets to find better savings"}),l.jsx("li",{children:"📊 Consult a tax professional for complex situations"})]}):l.jsxs(l.Fragment,{children:[l.jsx("li",{children:"📊 No tax impact - look for other ways to optimize"}),l.jsx("li",{children:"🏦 Pension contributions can reduce your tax"}),l.jsx("li",{children:"🏠 Rent relief is often missed - check if you qualify"})]})})]}),S&&l.jsx("div",{className:"saved-notice",children:'✅ Comparison saved! View in "My Account" → "Saved Calculations"'})]}),l.jsx("style",{children:`
        .what-if-comparison {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 1200px;
          margin: 0 auto;
          color: white;
          max-height: 90vh;
          overflow-y: auto;
        }

        .comparison-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #2D3748;
        }

        .comparison-header h2 {
          margin: 0;
          font-size: 24px;
          color: #4299E1;
        }

        .credit-badge {
          background: rgba(255,215,0,0.1);
          border: 1px solid #FFD700;
          border-radius: 20px;
          padding: 4px 12px;
          color: #FFD700;
          font-size: 12px;
        }

        .close-btn {
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 20px;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .close-btn:hover {
          background: rgba(255,255,255,0.1);
        }

        .error-message, .validation-message {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #FBD38D;
        }

        .presets-bar {
          margin-bottom: 24px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 12px;
          overflow: hidden;
        }

        .presets-toggle {
          width: 100%;
          padding: 16px;
          background: none;
          border: none;
          color: #4299E1;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .presets-toggle:hover {
          background: #364153;
        }

        .presets-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          padding: 16px;
          border-top: 1px solid #4A5568;
        }

        .preset-btn {
          padding: 16px;
          background: #364153;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
        }

        .preset-btn:hover {
          background: #4299E1;
          border-color: #4299E1;
          transform: translateY(-2px);
        }

        .preset-name {
          display: block;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .preset-desc {
          display: block;
          font-size: 12px;
          color: #A0AEC0;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .scenario-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          overflow: hidden;
        }

        .scenario-card.base {
          border-color: #4299E1;
        }

        .scenario-card.whatif {
          border-color: #FFD700;
        }

        .scenario-header {
          padding: 16px;
          background: #1A202C;
          border-bottom: 1px solid #4A5568;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .scenario-header h3 {
          margin: 0;
          font-size: 18px;
        }

        .scenario-badge {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }

        .base .scenario-badge {
          background: rgba(66,153,225,0.2);
          color: #4299E1;
        }

        .whatif .scenario-badge {
          background: rgba(255,215,0,0.2);
          color: #FFD700;
        }

        .scenario-content {
          padding: 20px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          margin-bottom: 6px;
          color: #A0AEC0;
          font-size: 13px;
        }

        .form-group input {
          width: 100%;
          padding: 10px 12px;
          background: #1A202C;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 14px;
        }

        .form-group input:focus {
          outline: none;
          border-color: #4299E1;
        }

        .comparison-actions {
          text-align: center;
          margin-bottom: 24px;
        }

        .compare-btn {
          padding: 14px 32px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 40px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }

        .compare-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .comparison-results {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 16px;
          padding: 24px;
        }

        .comparison-results h3 {
          margin: 0 0 20px 0;
          font-size: 20px;
          color: #4299E1;
        }

        .recommendation-banner {
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .recommendation-banner.positive {
          background: rgba(72,187,120,0.1);
          border: 1px solid #48BB78;
        }

        .recommendation-banner.warning {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
        }

        .recommendation-banner.neutral {
          background: rgba(66,153,225,0.1);
          border: 1px solid #4299E1;
        }

        .recommendation-banner h4 {
          margin: 0 0 8px 0;
          color: inherit;
        }

        .positive h4 { color: #48BB78; }
        .warning h4 { color: #DD6B20; }
        .neutral h4 { color: #4299E1; }

        .recommendation-message {
          margin: 0 0 4px 0;
          font-size: 16px;
          font-weight: 600;
        }

        .recommendation-details {
          margin: 0;
          color: #CBD5E0;
          font-size: 14px;
        }

        .results-table {
          margin-bottom: 24px;
        }

        .results-header {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          padding: 12px;
          background: #1A202C;
          border-radius: 8px;
          font-weight: 600;
          color: #A0AEC0;
          margin-bottom: 8px;
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          padding: 12px;
          border-bottom: 1px solid #4A5568;
        }

        .row-diff {
          font-weight: 600;
        }

        .row-diff.positive {
          color: #48BB78;
        }

        .row-diff.negative {
          color: #DD6B20;
        }

        .nta-guidance {
          background: #1A202C;
          border-radius: 12px;
          padding: 20px;
          margin-top: 20px;
        }

        .nta-guidance h4 {
          margin: 0 0 12px 0;
          color: #4299E1;
        }

        .nta-guidance ul {
          margin: 0;
          padding-left: 20px;
          color: #CBD5E0;
        }

        .nta-guidance li {
          margin-bottom: 8px;
        }

        .saved-notice {
          margin-top: 20px;
          padding: 12px;
          background: rgba(72,187,120,0.1);
          border: 1px solid #48BB78;
          border-radius: 8px;
          color: #48BB78;
          text-align: center;
        }

        @media (max-width: 768px) {
          .what-if-comparison {
            padding: 20px;
          }

          .comparison-grid {
            grid-template-columns: 1fr;
          }

          .presets-grid {
            grid-template-columns: 1fr;
          }

          .results-header {
            display: none;
          }

          .comparison-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 16px;
          }

          .row-diff {
            padding-top: 8px;
            border-top: 1px solid #4A5568;
          }
        }
      `})]})},ga=({label:e,field:t,resultA:r,resultB:n,format:a,highlight:o})=>{const c=r[t]||0,u=n[t]||0,f=u-c,p=c!==0?f/c*100:0;return l.jsxs("div",{className:`comparison-row ${o?"highlight":""}`,children:[l.jsx("div",{className:"row-label",children:e}),l.jsx("div",{className:"row-value-a",children:a(c)}),l.jsx("div",{className:"row-value-b",children:a(u)}),l.jsxs("div",{className:`row-diff ${f>0?"positive":f<0?"negative":""}`,children:[f>0?"▲":f<0?"▼":"",a(Math.abs(f))," (",p.toFixed(1),"%)"]})]})},vk=({alert:e,onAction:t,onDismiss:r})=>{const[n,a]=T.useState(!1),[o,c]=T.useState(!1);if(n)return null;const u=v=>{switch(v){case"critical":return"#B22222";case"high":return"#FF8C00";case"medium":return"#FFD700";default:return"#0B4F6C"}},f=v=>{switch(v){case"critical":return"🚨";case"high":return"⚠️";case"medium":return"💡";default:return"ℹ️"}},p=u(e.severity),h=f(e.severity),m=v=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:0,maximumFractionDigits:0}).format(v);return l.jsxs("div",{className:"mumu-alert",style:{borderLeftColor:p},children:[l.jsxs("div",{className:"alert-header",children:[l.jsx("div",{className:"alert-icon",style:{color:p},children:h}),l.jsx("div",{className:"alert-title",children:e.title}),l.jsx("button",{className:"alert-dismiss",onClick:()=>{a(!0),r&&r(e.type)},children:"✕"})]}),o&&l.jsxs("div",{className:"alert-details",children:[l.jsx("p",{className:"alert-message",children:e.message}),e.potential_savings>0&&l.jsxs("div",{className:"savings-box",children:[l.jsx("span",{children:"You could save "}),l.jsx("strong",{children:m(e.potential_savings)})]}),l.jsx("button",{className:"alert-action-btn",style:{background:p},onClick:()=>t(e),children:e.action}),l.jsx("button",{className:"alert-close-btn",onClick:()=>c(!1),children:"Close"})]}),!o&&l.jsx("div",{className:"alert-footer",children:l.jsx("button",{className:"alert-expand",onClick:()=>c(!0),children:"See details →"})}),l.jsx("style",{children:`
        .mumu-alert {
          background: rgba(26, 30, 36, 0.95);
          border: 1px solid rgba(255,255,255,0.1);
          border-left-width: 4px;
          border-radius: 8px;
          padding: 12px 16px;
          margin-bottom: 12px;
        }
        .alert-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .alert-icon {
          font-size: 16px;
        }
        .alert-title {
          flex: 1;
          font-weight: 500;
          color: white;
        }
        .alert-dismiss {
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 14px;
          cursor: pointer;
          padding: 4px;
        }
        .alert-dismiss:hover {
          color: white;
        }
        .alert-footer {
          margin-top: 8px;
          text-align: right;
        }
        .alert-expand {
          background: none;
          border: none;
          color: #4299E1;
          font-size: 12px;
          cursor: pointer;
          text-decoration: underline;
        }
        .alert-details {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .alert-message {
          margin: 0 0 12px 0;
          color: #CBD5E0;
          font-size: 14px;
          line-height: 1.5;
        }
        .savings-box {
          background: rgba(255,215,0,0.1);
          border-radius: 4px;
          padding: 8px 12px;
          margin-bottom: 12px;
          color: #FFD700;
        }
        .alert-action-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          color: white;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          margin-right: 8px;
        }
        .alert-close-btn {
          padding: 8px 16px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          color: #A0AEC0;
          font-size: 13px;
          cursor: pointer;
        }
      `})]})},Z9=({user:e,calculations:t,onClose:r})=>{const[n,a]=T.useState(null),[o,c]=T.useState(!0),[u,f]=T.useState("breakdown");T.useEffect(()=>{p()},[t]);const p=()=>{c(!0);let v=100;const b=[];let w=0;t.forEach(O=>{const E=O.input_data||{},A=O.result_data||{};if(O.calculator_type==="pit"){parseFloat(E.employment_salary),parseFloat(E.business_profit),parseFloat(E.pension_income);const N=parseFloat(E.rent_paid)||0,P=A.deductions_breakdown?.rent_relief>0;if(N>0){const K=Math.min(N*.2,5e5),I=K*.2;P?b.push({category:"Rent Relief",issue:"✓ You claimed rent relief correctly",penalty:0,savings:0,tip:`You're claiming ${h(K)} in rent relief, saving approximately ${h(I)} in tax.`,ntaReference:"NTA 2025 Section 34(2) - Rent Relief",userInput:`Rent Paid: ${h(N)} | Relief Claimed: ${h(A.deductions_breakdown?.rent_relief)}`,recommendedAction:"Keep your rent receipts for 6 years"}):(v-=15,b.push({category:"Rent Relief",issue:"You pay rent but did not claim rent relief",penalty:-15,savings:I,tip:`Based on your rent of ${h(N)}, you can claim ${h(K)} as rent relief under NTA 2025 Section 34. This could save you ${h(I)} in tax.`,ntaReference:"NTA 2025 Section 34(2) - Rent Relief",userInput:`Rent Paid: ${h(N)}`,recommendedAction:`Add rent relief to save ${h(I)}`}),w+=I)}const R=parseFloat(E.pension_rsa)||0,D=parseFloat(E.employment_basic)||0,G=parseFloat(E.employment_housing)||0,q=parseFloat(E.employment_transport)||0,M=D+G+q,H=M*.08;if(H>0&&R<H){const K=H-R,I=K*.2,L=(R/H*100).toFixed(1);v-=R<H*.5?10:5,b.push({category:"Pension (RSA)",issue:R===0?"No pension contributions":"Pension contributions below maximum",penalty:R<H*.5?-10:-5,savings:I,tip:`Under NTA 2025, you can contribute up to 8% of your qualifying income (Basic + Housing + Transport = ${h(M)}) to your RSA. You're currently at ${L}% of the maximum. Increasing by ${h(K)} could save ${h(I)}.`,ntaReference:"NTA 2025 Section 35(1) - Pension Contributions",userInput:`Current Pension: ${h(R)} | Maximum: ${h(H)}`,recommendedAction:`Increase pension by ${h(K)}`}),w+=I}const B=parseFloat(E.nhis)||0,F=D*.05;if(F>0&&B<F){const K=F-B,I=K*.2,L=(B/F*100).toFixed(1);v-=B<F*.5?5:3,b.push({category:"NHIS",issue:"NHIS contributions below maximum",penalty:B<F*.5?-5:-3,savings:I,tip:`NHIS (National Health Insurance Scheme) contributions up to 5% of basic salary are deductible. You're at ${L}% of the maximum. Adding ${h(K)} could save ${h(I)}.`,ntaReference:"NTA 2025 Section 36 - Health Insurance Premiums",userInput:`Current NHIS: ${h(B)} | Maximum: ${h(F)}`,recommendedAction:`Increase NHIS by ${h(K)}`}),w+=I}const Y=parseFloat(E.nhf)||0,J=D*.025;if(J>0&&Y<J){const K=J-Y,I=K*.2;v-=2,b.push({category:"NHF",issue:"NHF contributions below maximum",penalty:-2,savings:I,tip:`NHF (National Housing Fund) contributions up to 2.5% of basic salary are deductible. Adding ${h(K)} could save ${h(I)}.`,ntaReference:"NTA 2025 Section 37 - National Housing Fund",userInput:`Current NHF: ${h(Y)} | Maximum: ${h(J)}`,recommendedAction:`Increase NHF by ${h(K)}`}),w+=I}const U=parseFloat(E.paye_deducted)||0,X=A.tax_payable||0;if(U>X){const K=U-X;v-=10,b.push({category:"PAYE Overpayment",issue:"You may be overpaying PAYE",penalty:-10,savings:K,tip:`Your employer deducted ${h(U)} in PAYE, but your tax liability is only ${h(X)}. You're due a refund of ${h(K)}.`,ntaReference:"NTA 2025 Section 58 - Refund of Overpayment",userInput:`PAYE Deducted: ${h(U)} | Tax Payable: ${h(X)}`,recommendedAction:"File for refund using NRS Form A"}),w+=K}}}),v=Math.max(20,Math.min(100,v));let _,x;v>=90?(_="NTA 2025 Expert",x="You are fully compliant with NTA 2025 regulations and maximizing all deductions!"):v>=75?(_="Tax Compliant",x="You are compliant with NTA 2025 but there are opportunities to save more."):v>=50?(_="Learning",x="You have some NTA 2025 knowledge. Follow our tips to improve."):v>=30?(_="Getting Started",x="You are new to NTA 2025. Complete your profile and follow the tips."):(_="Needs Attention",x="You may be overpaying tax. Review the NTA 2025 guidelines below.");const S=Math.min(95,Math.floor(v*.9+5)),C=Math.min(90,Math.floor(v*.85+10));a({score:v,rank:_,rankDescription:x,breakdown:b,totalPotentialSavings:w,peerComparison:{betterThanPercent:S,inLagos:C}}),c(!1)},h=v=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:0,maximumFractionDigits:0}).format(v),m=v=>v>=80?"#2E7D32":v>=60?"#4CAF50":v>=40?"#FFC107":v>=20?"#FF9800":"#B22222";return o?l.jsxs("div",{className:"loading-container",children:[l.jsx("div",{className:"spinner"}),l.jsx("p",{children:"Calculating your NTA 2025 compliance score..."}),l.jsx("style",{children:`
          .loading-container {
            text-align: center;
            padding: 60px;
          }
          .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid rgba(255,255,255,0.1);
            border-top-color: #4299E1;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 16px;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `})]}):n?l.jsxs("div",{className:"mumu-score-dashboard",children:[l.jsxs("div",{className:"dashboard-header",children:[l.jsx("h2",{children:"Your NTA 2025 Compliance Score"}),l.jsx("button",{className:"close-btn",onClick:r,children:"✕"})]}),l.jsxs("div",{className:"score-main-card",style:{background:`linear-gradient(135deg, ${m(n.score)}20, ${m(n.score)}05)`},children:[l.jsx("div",{className:"score-circle-container",children:l.jsxs("svg",{viewBox:"0 0 120 120",className:"score-circle",children:[l.jsx("circle",{cx:"60",cy:"60",r:"54",fill:"none",stroke:"rgba(255,255,255,0.1)",strokeWidth:"8"}),l.jsx("circle",{cx:"60",cy:"60",r:"54",fill:"none",stroke:m(n.score),strokeWidth:"8",strokeLinecap:"round",strokeDasharray:`${2*Math.PI*54*n.score/100} ${2*Math.PI*54}`,strokeDashoffset:2*Math.PI*54*.25,transform:"rotate(-90 60 60)",style:{transition:"stroke-dasharray 1s ease"}}),l.jsx("text",{x:"60",y:"60",textAnchor:"middle",dy:"0.3em",className:"score-text",children:n.score})]})}),l.jsxs("div",{className:"score-info",children:[l.jsx("h3",{className:"rank",children:n.rank}),l.jsx("p",{className:"rank-description",children:n.rankDescription}),l.jsxs("div",{className:"comparison-stats",children:[l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"You know more than"}),l.jsxs("span",{className:"stat-value",children:[n.peerComparison.betterThanPercent,"% of Nigerians"]})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"In Lagos"}),l.jsxs("span",{className:"stat-value",children:[n.peerComparison.inLagos,"% of taxpayers"]})]})]}),n.totalPotentialSavings>0&&l.jsxs("div",{className:"savings-potential",children:[l.jsx("span",{className:"potential-label",children:"You could save"}),l.jsx("span",{className:"potential-amount",children:h(n.totalPotentialSavings)})]})]})]}),l.jsxs("div",{className:"dashboard-tabs",children:[l.jsx("button",{className:`tab-btn ${u==="breakdown"?"active":""}`,onClick:()=>f("breakdown"),children:"📊 NTA 2025 Analysis"}),l.jsx("button",{className:`tab-btn ${u==="tips"?"active":""}`,onClick:()=>f("tips"),children:"💡 How to Improve"})]}),l.jsxs("div",{className:"tab-content",children:[u==="breakdown"&&l.jsxs("div",{className:"breakdown-section",children:[l.jsx("h4",{children:"NTA 2025 Compliance Analysis"}),n.breakdown.length===0?l.jsxs("div",{className:"no-issues",children:[l.jsx("p",{children:"✅ You are 100% compliant with NTA 2025! No issues found."}),l.jsx("p",{className:"sub-text",children:"You're maximizing all available deductions."})]}):l.jsx("div",{className:"breakdown-list",children:n.breakdown.map((v,b)=>l.jsxs("div",{className:"breakdown-item",children:[l.jsxs("div",{className:"item-header",children:[l.jsx("span",{className:"item-category",children:v.category}),l.jsxs("span",{className:"item-penalty",style:{color:"#B22222"},children:[v.penalty," points"]})]}),l.jsx("div",{className:"item-issue",children:v.issue}),l.jsxs("div",{className:"item-input",children:[l.jsx("strong",{children:"Your input:"})," ",v.userInput]}),v.savings>0&&l.jsxs("div",{className:"item-savings",children:[l.jsx("strong",{children:"Potential savings:"})," ",h(v.savings)]}),l.jsxs("div",{className:"item-nta",children:[l.jsx("strong",{children:"NTA Reference:"})," ",v.ntaReference]}),l.jsxs("div",{className:"item-tip",children:["💡 ",v.tip]})]},b))})]}),u==="tips"&&l.jsxs("div",{className:"tips-section",children:[l.jsx("h4",{children:"How to Improve Your NTA 2025 Compliance"}),n.breakdown.length===0?l.jsx("div",{className:"no-tips",children:l.jsx("p",{children:"You're already doing great! Share your knowledge with others."})}):l.jsx("div",{className:"tips-list",children:n.breakdown.map((v,b)=>l.jsxs("div",{className:"tip-item",children:[l.jsx("div",{className:"tip-icon",children:"📌"}),l.jsxs("div",{className:"tip-content",children:[l.jsx("strong",{children:v.category}),l.jsx("p",{children:v.recommendedAction}),l.jsxs("small",{children:["NTA 2025: ",v.ntaReference]})]})]},b))})]})]}),l.jsx("div",{className:"dashboard-footer",children:l.jsx("button",{className:"share-btn",onClick:()=>{navigator.clipboard?.writeText(`My NTA 2025 compliance score is ${n.score}! I am a ${n.rank}. Calculate yours at Zero Mumu Tax.`),alert("Copied to clipboard!")},children:"📤 Share Your Score"})}),l.jsx("style",{children:`
        .mumu-score-dashboard {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 900px;
          margin: 0 auto;
          color: white;
          max-height: 90vh;
          overflow-y: auto;
        }
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .dashboard-header h2 {
          margin: 0;
          font-size: 24px;
          color: #4299E1;
        }
        .close-btn {
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 20px;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .close-btn:hover {
          background: rgba(255,255,255,0.1);
        }
        .score-main-card {
          border-radius: 20px;
          padding: 32px;
          margin-bottom: 24px;
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 32px;
          align-items: center;
          border: 1px solid #2D3748;
        }
        .score-circle-container {
          width: 180px;
          height: 180px;
        }
        .score-circle {
          width: 100%;
          height: 100%;
        }
        .score-text {
          fill: white;
          font-size: 32px;
          font-weight: 700;
        }
        .score-info {
          flex: 1;
        }
        .rank {
          margin: 0 0 8px 0;
          font-size: 28px;
          font-weight: 700;
        }
        .rank-description {
          margin: 0 0 20px 0;
          color: #CBD5E0;
          font-size: 16px;
        }
        .comparison-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        .stat-item {
          background: #2D3748;
          border-radius: 8px;
          padding: 12px 16px;
        }
        .stat-label {
          display: block;
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 4px;
        }
        .stat-value {
          display: block;
          font-weight: 600;
          color: #FFD700;
        }
        .savings-potential {
          background: rgba(255,215,0,0.1);
          border: 1px solid #FFD700;
          border-radius: 8px;
          padding: 12px 16px;
          display: inline-block;
        }
        .potential-label {
          color: #A0AEC0;
          margin-right: 8px;
        }
        .potential-amount {
          color: #FFD700;
          font-weight: 700;
          font-size: 18px;
        }
        .dashboard-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          padding: 4px;
          background: #2D3748;
          border-radius: 40px;
        }
        .tab-btn {
          flex: 1;
          padding: 12px;
          background: transparent;
          border: none;
          border-radius: 30px;
          color: #A0AEC0;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          color: white;
        }
        .tab-content {
          min-height: 200px;
          margin-bottom: 24px;
        }
        .breakdown-section h4,
        .tips-section h4 {
          margin: 0 0 16px 0;
          color: #4299E1;
        }
        .no-issues, .no-tips {
          text-align: center;
          padding: 40px;
          background: #2D3748;
          border: 1px solid #48BB78;
          border-radius: 12px;
        }
        .no-issues p, .no-tips p {
          color: #48BB78;
          margin: 0 0 8px 0;
        }
        .sub-text {
          color: #A0AEC0 !important;
        }
        .breakdown-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .breakdown-item {
          background: #2D3748;
          border-radius: 12px;
          padding: 16px;
        }
        .item-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .item-category {
          font-weight: 600;
          color: #4299E1;
        }
        .item-penalty {
          font-weight: 700;
        }
        .item-issue {
          color: #FBD38D;
          margin-bottom: 8px;
        }
        .item-input {
          color: #A0AEC0;
          font-size: 13px;
          margin-bottom: 8px;
          padding: 4px 8px;
          background: #1A202C;
          border-radius: 4px;
        }
        .item-savings {
          color: #48BB78;
          margin-bottom: 8px;
        }
        .item-nta {
          color: #90CDF4;
          font-size: 12px;
          margin-bottom: 8px;
        }
        .item-tip {
          color: white;
          padding: 8px;
          background: #1A202C;
          border-radius: 6px;
          font-size: 14px;
        }
        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .tip-item {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
        }
        .tip-icon {
          font-size: 20px;
        }
        .tip-content {
          flex: 1;
        }
        .tip-content strong {
          display: block;
          color: #4299E1;
          margin-bottom: 4px;
        }
        .tip-content p {
          margin: 0 0 4px 0;
          color: white;
        }
        .tip-content small {
          color: #A0AEC0;
        }
        .dashboard-footer {
          display: flex;
          justify-content: center;
          padding-top: 20px;
          border-top: 1px solid #2D3748;
        }
        .share-btn {
          padding: 12px 24px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 40px;
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
        .share-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(11,79,108,0.3);
        }
        @media (max-width: 768px) {
          .score-main-card {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .score-circle-container {
            margin: 0 auto;
          }
          .comparison-stats {
            flex-direction: column;
          }
        }
      `})]}):l.jsx("div",{className:"error-container",children:l.jsx("p",{children:"Could not calculate your score. Please try again."})})},J9=({isLoggedIn:e,user:t,creditBalance:r,setCreditBalance:n,restoreData:a,clearRestoreData:o,requireLogin:c,requireCredits:u})=>{const[f,p]=T.useState(1),[h,m]=T.useState({employment_salary:"",employment_basic:"",employment_housing:"",employment_transport:"",employment_bonus:"",business_name:"",business_type:"",business_profit:"",business_revenue:"",business_expenses:"",pension_income:"",pension_rsa:"",nhis:"",nhf:"",rent_paid:"",paye_deducted:"",wht_credits:""}),[v,b]=T.useState(null),[w,_]=T.useState(!1),[x,S]=T.useState(null),[C,O]=T.useState("checking"),[E,A]=T.useState(""),[N,P]=T.useState(!1),[R,D]=T.useState(!1),[G,q]=T.useState(!1),[M,H]=T.useState(!1),[B,F]=T.useState(new Date().getFullYear()),[Y,J]=T.useState(null),[U,X]=T.useState([]),[K,I]=T.useState([]),[L,ie]=T.useState(!1);T.useEffect(()=>{pe()},[]),T.useEffect(()=>{a&&a.type==="pit"&&(m(a.data),o&&o())},[a,o]),T.useEffect(()=>{Object.keys(h).length>0&&fe()},[h,v]);const pe=async()=>{try{await Fe.get("/health"),O("connected")}catch{O("disconnected")}},fe=()=>{const Ae=[];(parseFloat(h.rent_paid)||0)===0&&Ae.push({type:"rent_relief",severity:"high",title:"Did you know? You can save up to ₦500,000",message:"If you pay rent for your home or shop, you can claim rent relief and reduce your tax. Many people miss this!",action:"Learn about rent relief",potential_savings:5e5,priority:1}),X(Ae.filter(pt=>!K.includes(pt.type)))},ve=Ae=>{const{name:Be,value:pt}=Ae.target;m(Be==="business_name"||Be==="business_type"?bt=>({...bt,[Be]:pt}):bt=>({...bt,[Be]:Js(pt)}))},ge=()=>{Se()&&p(Ae=>Math.min(Ae+1,5))},me=()=>p(Ae=>Math.max(Ae-1,1)),ae=()=>{p(Ae=>Math.min(Ae+1,5))},Se=()=>(f===1||S(""),!0),se=()=>!h.employment_salary&&!h.business_profit&&!h.pension_income?(S("Please enter at least one income source"),!1):!0,te=async()=>{if(se()){_(!0),S(null);try{const Ae={employment_salary:Te(h.employment_salary),employment_basic:Te(h.employment_basic),employment_housing:Te(h.employment_housing),employment_transport:Te(h.employment_transport),employment_bonus:Te(h.employment_bonus),business_profit:Te(h.business_profit),business_name:h.business_name,business_type:h.business_type,pension_income:Te(h.pension_income),pension_rsa:Te(h.pension_rsa),nhis:Te(h.nhis),nhf:Te(h.nhf),rent_paid:Te(h.rent_paid),paye_deducted:Te(h.paye_deducted),wht_credits:Te(h.wht_credits)},Be=await Fe.post("/api/v1/calculate/pit",Ae);Be.data.success&&(b(Be.data.data),!e&&setPendingCalculation&&setPendingCalculation({input_data:h,result_data:Be.data.data,tax_year:B}))}catch(Ae){S(Ae.message||"Calculation failed")}finally{_(!1)}}},Pe=async()=>{if(!e){P(!0);return}if(r<1){D(!0);return}A("saving");try{await Fe.post("/api/calculations/save",{calculator_type:"pit",input_data:h,result_data:v,tax_year:B}),n(Ae=>Ae-1),A("success"),setTimeout(()=>A(""),3e3)}catch(Ae){console.error("Save error:",Ae),A("error"),setTimeout(()=>A(""),3e3)}},Ee=()=>{m({employment_salary:"",employment_basic:"",employment_housing:"",employment_transport:"",employment_bonus:"",business_name:"",business_type:"",business_profit:"",business_revenue:"",business_expenses:"",pension_income:"",pension_rsa:"",nhis:"",nhf:"",rent_paid:"",paye_deducted:"",wht_credits:""}),b(null),p(1)},Ke=()=>{const Ae=Te(h.rent_paid)||0,Be=Math.min(Ae*.2,5e5),pt=Be*.2;return{relief:Be,taxSaved:pt}},Xe=["Employment","Business","Other Income","Deductions","Tax Paid"];return l.jsxs("div",{className:"full-width-calculator pit-calculator",children:[l.jsxs("div",{className:"progress-bar-container",children:[l.jsx("div",{className:"progress-steps",children:[1,2,3,4,5].map(Ae=>l.jsxs("div",{className:`progress-step ${f>=Ae?"completed":""}`,onClick:()=>p(Ae),children:[l.jsx("div",{className:`step-indicator ${f>=Ae?"active":""}`,children:Ae}),l.jsx("div",{className:"step-label",children:Xe[Ae-1]})]},Ae))}),l.jsx("div",{className:"progress-track",children:l.jsx("div",{className:"progress-fill",style:{width:`${f/5*100}%`}})})]}),U.length>0&&l.jsx("div",{className:"alerts-container",children:U.map((Ae,Be)=>l.jsx(vk,{alert:Ae,onAction:()=>{Ae.type==="rent_relief"&&setActiveTab&&setActiveTab("rent")},onDismiss:()=>{}},Be))}),l.jsxs("div",{className:"form-section",children:[l.jsxs("div",{className:"form-header",children:[l.jsx("h2",{children:"Personal Income Tax Calculator"}),l.jsxs("div",{className:"header-actions",children:[l.jsxs("select",{value:B,onChange:Ae=>F(parseInt(Ae.target.value)),children:[l.jsx("option",{value:"2024",children:"2024"}),l.jsx("option",{value:"2025",children:"2025"}),l.jsx("option",{value:"2026",children:"2026"})]}),l.jsx("button",{className:"clear-btn",onClick:Ee,children:"Clear"})]})]}),f===1&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"💰 Employment Income"}),l.jsx("p",{className:"step-hint",children:'Money from your job or salary. If you are self-employed, click "Skip" to proceed.'}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Annual Salary (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"employment_salary",value:h.employment_salary,onChange:ve,placeholder:"e.g., 5,000,000"})]}),l.jsx("small",{children:"Your total salary before tax. If paid monthly, multiply by 12."})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Basic Salary (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"employment_basic",value:h.employment_basic,onChange:ve,placeholder:"e.g., 3,000,000"})]}),l.jsx("small",{children:"Your base salary without allowances. Used to calculate pension and NHIS/NHF."})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group half",children:[l.jsx("label",{children:"Housing Allowance (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"employment_housing",value:h.employment_housing,onChange:ve,placeholder:"e.g., 1,000,000"})]}),l.jsx("small",{children:"Money your employer gives you for housing (different from rent you pay)"})]}),l.jsxs("div",{className:"form-group half",children:[l.jsx("label",{children:"Transport Allowance (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"employment_transport",value:h.employment_transport,onChange:ve,placeholder:"e.g., 600,000"})]}),l.jsx("small",{children:"Money your employer gives you for transportation"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"13th Month Bonus (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"employment_bonus",value:h.employment_bonus,onChange:ve,placeholder:"0"})]})]}),l.jsx("div",{className:"skip-section",children:l.jsx("button",{className:"skip-btn",onClick:ae,children:"Not employed? Skip this section & fill next section →"})})]}),f===2&&l.jsxs("div",{className:"step-content",children:[l.jsxs("div",{className:"step-header-with-skip",children:[l.jsx("h3",{children:"🏪 Business Income"}),l.jsx("button",{className:"skip-btn",onClick:ae,children:"Skip this section if you're employed & have filled previous section →"})]}),l.jsx("p",{className:"step-hint",children:"Tell us about your business or trade"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Business Name (if registered)"}),l.jsx("input",{type:"text",name:"business_name",value:h.business_name||"",onChange:ve,placeholder:"e.g., Deolu Shawarma Spot",className:"text-input"}),l.jsx("small",{children:"Your business name as registered with CAC (optional)"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Type of business"}),l.jsxs("div",{className:"custom-select-wrapper",children:[l.jsxs("select",{name:"business_type",value:h.business_type||"",onChange:ve,className:"custom-select",children:[l.jsx("option",{value:"",children:"Select business type"}),l.jsx("option",{value:"retail",children:"🛒 Retail / Trading (shop, market stall)"}),l.jsx("option",{value:"services",children:"💇 Services (salon, barbing, repairs)"}),l.jsx("option",{value:"food",children:"🍔 Food / Restaurant / Catering"}),l.jsx("option",{value:"transport",children:"🚗 Transport (taxi, bus, okada)"}),l.jsx("option",{value:"agriculture",children:"🌽 Farming / Agriculture"}),l.jsx("option",{value:"professional",children:"💼 Professional Services (consulting)"}),l.jsx("option",{value:"other",children:"📌 Other"})]}),l.jsx("div",{className:"select-arrow",children:"▼"})]})]}),l.jsxs("div",{className:"form-group highlight",children:[l.jsxs("label",{children:["Business Profit (₦) ",l.jsx("span",{className:"required",children:"*"})]}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"business_profit",value:h.business_profit,onChange:ve,placeholder:"e.g., 2,000,000"})]}),l.jsx("small",{children:"Your profit after expenses (Total Sales − All Costs)"})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group half",children:[l.jsx("label",{children:"Total Revenue/Sales (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"business_revenue",value:h.business_revenue||"",onChange:ve,placeholder:"e.g., 5,000,000"})]}),l.jsx("small",{children:"Optional - helps with accuracy"})]}),l.jsxs("div",{className:"form-group half",children:[l.jsx("label",{children:"Total Expenses (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"business_expenses",value:h.business_expenses||"",onChange:ve,placeholder:"e.g., 3,000,000"})]}),l.jsx("small",{children:"Optional - helps with accuracy"})]})]}),l.jsxs("div",{className:"tip-box",children:[l.jsx("strong",{children:"📌 What counts as business profit?"}),l.jsxs("p",{children:["If you're a trader: Profit = Sales − Cost of goods sold",l.jsx("br",{}),"If you provide services: Profit = All money received − Business expenses",l.jsx("br",{}),"Keep receipts for all expenses!"]})]})]}),f===3&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"📦 Other Income"}),l.jsx("p",{className:"step-hint",children:"Pension, rent from properties you own, etc."}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Pension Income (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"pension_income",value:h.pension_income,onChange:ve,placeholder:"0"})]}),l.jsx("small",{children:"Monthly pension payments you receive (different from RSA contributions)"})]})]}),f===4&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"💰 Allowable Deductions (NTA 2025)"}),l.jsx("p",{className:"step-hint",children:"These reduce your taxable income - keep receipts for all!"}),l.jsxs("div",{className:"form-group highlight",children:[l.jsx("label",{children:"RSA Pension Contribution (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"pension_rsa",value:h.pension_rsa,onChange:ve,placeholder:"e.g., 240,000"})]}),l.jsxs("small",{children:[l.jsx("strong",{children:"RSA = Retirement Savings Account"})," - Money you save in your pension account. Up to 8% of your qualifying income is tax-free."]})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group half highlight",children:[l.jsx("label",{children:"NHIS (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"nhis",value:h.nhis,onChange:ve,placeholder:"e.g., 150,000"})]}),l.jsxs("small",{children:[l.jsx("strong",{children:"NHIS = National Health Insurance Scheme"})," - Health insurance contributions. Up to 5% of basic salary is deductible."]})]}),l.jsxs("div",{className:"form-group half highlight",children:[l.jsx("label",{children:"NHF (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"nhf",value:h.nhf,onChange:ve,placeholder:"e.g., 75,000"})]}),l.jsxs("small",{children:[l.jsx("strong",{children:"NHF = National Housing Fund"})," - Housing contributions. Up to 2.5% of basic salary is deductible."]})]})]}),l.jsxs("div",{className:"form-group rent-section",children:[l.jsx("label",{children:"Rent Paid (₦) - 20% deductible up to ₦500,000"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"rent_paid",value:h.rent_paid,onChange:ve,placeholder:"e.g., 2,000,000"})]}),h.rent_paid&&l.jsx("div",{className:"rent-savings",children:(()=>{const{relief:Ae,taxSaved:Be}=Ke();return l.jsxs("div",{className:"savings-message",children:["🎉 You can claim ",l.jsx("strong",{children:_e(Ae)})," as rent relief, saving you approximately ",l.jsx("strong",{children:_e(Be)})," in tax!"]})})()})]})]}),f===5&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"🏦 Tax Already Paid"}),l.jsx("p",{className:"step-hint",children:"PAYE deducted by employer and WHT credits"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"PAYE Deducted (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"paye_deducted",value:h.paye_deducted,onChange:ve,placeholder:"e.g., 900,000"})]}),l.jsxs("small",{children:[l.jsx("strong",{children:"PAYE = Pay As You Earn"})," - Tax your employer already deducted. Check your payslip."]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"WHT Credits (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"wht_credits",value:h.wht_credits,onChange:ve,placeholder:"0"})]}),l.jsxs("small",{children:[l.jsx("strong",{children:"WHT = Withholding Tax"})," - Tax deducted by customers. Keep your WHT certificates."]})]}),l.jsxs("div",{className:"tip-box",children:[l.jsx("strong",{children:"📌 NTA 2025 Requirement:"})," Keep these documents for 6 years:",l.jsxs("ul",{children:[l.jsx("li",{children:"Payslips (PAYE records)"}),l.jsx("li",{children:"Rent receipts and tenancy agreement"}),l.jsx("li",{children:"RSA pension statements"}),l.jsx("li",{children:"NHIS/NHF payment receipts"}),l.jsx("li",{children:"WHT credit certificates"})]})]})]}),l.jsxs("div",{className:"step-navigation",children:[f>1&&l.jsx("button",{className:"secondary-btn",onClick:me,children:"← Back"}),f<5?l.jsx("button",{className:"primary-btn",onClick:ge,children:"Next →"}):l.jsx("button",{className:"calculate-btn",onClick:te,disabled:w,children:w?"Calculating...":"Calculate Tax"})]}),x&&l.jsxs("div",{className:"error-message",children:["⚠️ ",x]}),v&&l.jsxs("div",{className:"results-card",children:[l.jsx("h3",{children:"Your Tax Result"}),l.jsxs("div",{className:`result-banner ${v.result_type}`,children:[v.result_type==="refund"?"🎉":v.result_type==="additional"?"⚠️":"✅",l.jsxs("span",{children:[v.result_type==="refund"&&` You overpaid by ${_e(v.refund_amount)}`,v.result_type==="additional"&&` You owe ${_e(v.additional_tax)}`,v.result_type==="balanced"&&" Your tax is perfectly balanced"]})]}),l.jsxs("div",{className:"result-summary",children:[l.jsxs("div",{className:"summary-item",children:[l.jsx("span",{children:"Total Income"}),l.jsx("strong",{children:_e(v.total_income)})]}),l.jsxs("div",{className:"summary-item",children:[l.jsx("span",{children:"Total Deductions"}),l.jsxs("strong",{className:"success",children:["- ",_e(v.total_deductions)]})]}),l.jsxs("div",{className:"summary-item highlight",children:[l.jsx("span",{children:"Taxable Income (NTA 2025)"}),l.jsx("strong",{children:_e(v.chargeable_income)})]})]}),l.jsx(Q9,{chargeableIncome:v.chargeable_income}),e&&l.jsxs("div",{className:"mumu-score-section",children:[l.jsx("button",{className:"mumu-score-btn",onClick:()=>ie(!0),children:"🛡️ View Your Mumu Score"}),l.jsx("p",{className:"mumu-score-hint",children:"See how well you're doing according to NTA 2025 rules"})]}),l.jsxs("div",{className:"what-this-means",children:[l.jsx("h4",{children:"What This Means"}),l.jsx("p",{children:v.result_type==="refund"?l.jsxs(l.Fragment,{children:["You overpaid by ",l.jsx("strong",{children:_e(v.refund_amount)}),". File for a refund before March 31st."]}):v.result_type==="additional"?l.jsxs(l.Fragment,{children:["You owe ",l.jsx("strong",{children:_e(v.additional_tax)}),". Pay by March 31st to avoid penalties."]}):l.jsx(l.Fragment,{children:"Your tax is perfectly balanced. No payment or refund needed."})})]}),l.jsxs("div",{className:"action-buttons",children:[l.jsx("button",{className:"action-btn save-btn",onClick:()=>{e?r<1?D(!0):Pe():(J(h),P(!0))},children:e?r<1?"⚠️ Need 1 credit":"💾 Save (1 credit)":"🔒 Login to Save"}),l.jsx("button",{className:"action-btn report-btn",onClick:()=>{if(!e){J(h),P(!0);return}if(r<3){D(!0);return}q(!0)},children:e?r<3?"⚠️ Need 3 credits":"📥 Download Comprehensive Tax Report (3 credits)":"🔒 Login to Download Report"}),l.jsx("button",{className:"action-btn whatif-btn",onClick:()=>{if(!e){J(h),P(!0);return}if(r<2){D(!0);return}H(!0)},children:e?r<2?"⚠️ Need 2 credits":"🔄 Compare Scenarios (2 credits)":"🔒 Login to Compare"})]}),E==="success"&&l.jsx("div",{className:"save-success",children:"✅ Calculation saved! (1 credit used)"}),E==="error"&&l.jsx("div",{className:"save-error",children:"❌ Failed to save. Please try again."})]})]}),G&&v&&l.jsx(gk,{calculation:{input:h,result:v},type:"pit",user:t,onClose:()=>q(!1),creditBalance:r,setCreditBalance:n}),M&&l.jsx("div",{className:"modal-overlay",children:l.jsx(qx,{baseScenario:h,onClose:()=>H(!1),creditBalance:r,setCreditBalance:n,calculatorType:"pit"})}),L&&v&&l.jsx("div",{className:"modal-overlay",children:l.jsx(Z9,{user:t,calculations:[{calculator_type:"pit",input_data:h,result_data:v,created_at:new Date().toISOString()}],onClose:()=>ie(!1)})}),N&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-card",children:[l.jsx("button",{className:"close-btn",onClick:()=>P(!1),children:"✕"}),l.jsx("div",{className:"modal-icon",children:"🔒"}),l.jsx("h3",{children:"Login Required"}),l.jsx("p",{children:"Please log in to access this feature."}),l.jsx("div",{className:"credit-note",children:"💡 New users get 15 free credits!"}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{onClick:()=>P(!1),children:"Cancel"}),l.jsx("button",{onClick:()=>{P(!1),c()},children:"Login"})]})]})}),R&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-card",children:[l.jsx("button",{className:"close-btn",onClick:()=>D(!1),children:"✕"}),l.jsx("div",{className:"modal-icon",children:"⚠️"}),l.jsx("h3",{children:"Insufficient Credits"}),l.jsx("p",{children:"You need 2 credits for What-If or 3 credits for Report."}),l.jsxs("p",{className:"balance",children:["Your balance: ",r," credits"]}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{onClick:()=>D(!1),children:"Cancel"}),l.jsx("button",{onClick:()=>{D(!1),window.dispatchEvent(new CustomEvent("open-credit-modal"))},children:"Buy Credits"})]})]})}),l.jsx("style",{children:`
        .full-width-calculator { max-width: 1000px; margin: 0 auto; }
        .pit-calculator { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        
        .progress-bar-container { grid-column: 1 / -1; margin-bottom: 20px; }
        .progress-steps { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .progress-step { text-align: center; flex: 1; cursor: pointer; opacity: 0.7; }
        .progress-step.completed { opacity: 1; }
        .step-indicator { 
          width: 30px; height: 30px; border-radius: 50%; background: #2D3748; 
          color: white; display: flex; align-items: center; justify-content: center; 
          margin: 0 auto 5px; font-weight: 600;
        }
        .step-indicator.active { background: #4299E1; }
        .step-label { font-size: 11px; color: #A0AEC0; }
        .progress-track { height: 4px; background: #2D3748; border-radius: 2px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #4299E1, #48BB78); transition: width 0.3s; }
        
        .form-section { 
          background: #1A202C; border-radius: 24px; padding: 28px; color: white;
        }
        .form-header { 
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid #2D3748;
        }
        .form-header h2 { margin: 0; color: #4299E1; }
        .header-actions { display: flex; gap: 12px; }
        .header-actions select { 
          padding: 8px; background: #2D3748; border: 1px solid #4A5568;
          border-radius: 8px; color: white;
        }
        .clear-btn { 
          padding: 8px 16px; background: #2D3748; border: none;
          border-radius: 8px; color: #A0AEC0; cursor: pointer;
        }
        
        .step-content h3 { margin: 0 0 4px 0; color: #4299E1; }
        .step-hint { color: #A0AEC0; font-size: 14px; margin-bottom: 24px; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; color: white; }
        .input-wrapper { position: relative; }
        .currency { 
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          color: #A0AEC0;
        }
        .input-wrapper input, .text-input { 
          width: 100%; padding: 12px 12px 12px 40px; background: #2D3748;
          border: 1px solid #4A5568; border-radius: 8px; color: white;
        }
        .text-input { padding-left: 16px; } /* For non-currency inputs */
        small { display: block; margin-top: 4px; color: #A0AEC0; font-size: 12px; }
        
        .form-row { display: flex; gap: 20px; }
        .form-group.half { flex: 1; }
        
        .form-group.highlight { 
          padding: 16px; background: rgba(66,153,225,0.05); border-radius: 12px;
          border: 1px solid #4299E1;
        }
        
        .rent-section { 
          padding: 20px; background: rgba(72,187,120,0.05); border-radius: 12px;
          border: 1px solid #48BB78;
        }
        .rent-savings { 
          margin-top: 12px; padding: 12px; background: rgba(72,187,120,0.1);
          border-radius: 8px; color: #48BB78; font-size: 14px;
        }
        
        .skip-section { text-align: right; margin-top: 10px; }
        .skip-btn { 
          background: none; border: none; color: #4299E1;
          text-decoration: underline; cursor: pointer; font-size: 14px;
        }
        
        .custom-select-wrapper {
          position: relative;
          width: 100%;
        }
        .custom-select {
          width: 100%;
          padding: 12px 16px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 16px;
          appearance: none;
          cursor: pointer;
        }
        .custom-select option {
          background: #1A202C;
          color: white;
        }
        .select-arrow {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #FFD700;
          pointer-events: none;
        }
        
        .tip-box { 
          padding: 16px; background: #2D3748; border-radius: 8px;
          border-left: 4px solid #4299E1; font-size: 13px;
        }
        .tip-box ul { margin: 8px 0 0 20px; padding: 0; }
        
        .step-navigation { 
          display: flex; justify-content: space-between; margin-top: 30px;
        }
        .secondary-btn, .primary-btn, .calculate-btn { 
          padding: 12px 24px; border-radius: 8px; cursor: pointer; font-weight: 600;
        }
        .secondary-btn { 
          background: transparent; border: 1px solid #4A5568; color: white;
        }
        .primary-btn { 
          background: #4299E1; border: none; color: white; margin-left: auto;
        }
        .calculate-btn { 
          width: 100%; background: #48BB78; border: none; color: white;
        }
        
        .results-card { 
          grid-column: 2; background: #1A202C; border-radius: 24px; padding: 24px;
        }
        .result-banner { 
          display: flex; align-items: center; gap: 12px; padding: 16px;
          border-radius: 12px; margin-bottom: 20px;
        }
        .result-banner.refund { background: rgba(72,187,120,0.1); border: 1px solid #48BB78; }
        .result-banner.additional { background: rgba(221,107,32,0.1); border: 1px solid #DD6B20; }
        .result-banner.balanced { background: rgba(66,153,225,0.1); border: 1px solid #4299E1; }
        
        .result-summary { margin-bottom: 20px; }
        .summary-item { 
          display: flex; justify-content: space-between; padding: 12px 0;
          border-bottom: 1px solid #2D3748;
        }
        .summary-item.highlight { 
          background: #2D3748; border-radius: 8px; padding: 12px; border: none;
        }
        .success { color: #48BB78; }
        
        .mumu-score-section { text-align: center; margin: 20px 0; }
        .mumu-score-btn { 
          padding: 12px 24px; background: linear-gradient(135deg, #FFD700, #FFA500);
          border: none; border-radius: 30px; color: black; font-weight: 600; cursor: pointer;
        }
        .mumu-score-hint { color: #A0AEC0; font-size: 13px; margin-top: 8px; }
        
        .what-this-means {
          margin: 20px 0;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
        }
        .what-this-means h4 {
          margin: 0 0 8px 0;
          color: #4299E1;
        }
        .what-this-means p {
          margin: 0;
          color: #CBD5E0;
          line-height: 1.6;
        }
        
        .action-buttons { 
          display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px;
        }
        .action-btn { 
          flex: 1; padding: 10px; border: none; border-radius: 8px; 
          color: white; cursor: pointer; min-width: 100px;
        }
        .save-btn { background: #4A5568; }
        .report-btn { background: #4299E1; }
        .whatif-btn { background: #9F7AEA; }
        
        .save-success, .save-error { 
          margin-top: 16px; padding: 12px; border-radius: 8px; text-align: center;
        }
        .save-success { background: rgba(72,187,120,0.1); border: 1px solid #48BB78; color: #48BB78; }
        .save-error { background: rgba(221,107,32,0.1); border: 1px solid #DD6B20; color: #FBD38D; }
        
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          z-index: 10000; padding: 20px;
        }
        .modal-card {
          background: #1A202C; border-radius: 24px; padding: 32px;
          max-width: 400px; width: 100%; position: relative;
        }
        .close-btn {
          position: absolute; top: 16px; right: 16px;
          background: none; border: none; color: #A0AEC0; font-size: 20px;
          cursor: pointer;
        }
        .modal-icon { font-size: 48px; text-align: center; margin-bottom: 16px; }
        .modal-card h3 { text-align: center; margin: 0 0 8px 0; color: white; }
        .modal-card p { text-align: center; color: #CBD5E0; margin-bottom: 8px; }
        .balance { color: #FFD700 !important; font-weight: 600; }
        .credit-note { 
          text-align: center; padding: 12px; background: rgba(255,215,0,0.1);
          border-radius: 8px; color: #FFD700; margin: 20px 0;
        }
        .modal-actions { display: flex; gap: 12px; }
        .modal-actions button {
          flex: 1; padding: 12px; border-radius: 8px; cursor: pointer;
          font-weight: 600;
        }
        .modal-actions button:first-child {
          background: transparent; border: 1px solid #4A5568; color: white;
        }
        .modal-actions button:last-child {
          background: #4299E1; border: none; color: white;
        }
        
        @media (max-width: 768px) {
          .pit-calculator { grid-template-columns: 1fr; }
          .results-card { grid-column: 1; }
          .form-row { flex-direction: column; }
          .action-buttons { flex-direction: column; }
        }

.skip-section {
  text-align: right;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px dashed #4A5568;
}

.skip-btn {
  background: none;
  border: none;
  color: #4299E1;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
}

.skip-btn:hover {
  color: #63B3ED;
}
.step-header-with-skip {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 12px;
}

.step-header-with-skip h3 {
  margin: 0;
}

.step-header-with-skip .skip-btn {
  background: none;
  border: none;
  color: #4299E1;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  white-space: nowrap;
}

.step-header-with-skip .skip-btn:hover {
  color: #63B3ED;
}
      `})]})},yk=({calculation:e,user:t,onClose:r,creditBalance:n,setCreditBalance:a})=>{const[o,c]=T.useState(!1),[u,f]=T.useState(""),p=v=>{if(v==null||v==="")return"₦0";let b;if(typeof v=="string"){const w=v.replace(/,/g,"").replace(/\s+/g,"").trim();if(w==="")return"₦0";b=parseFloat(w)}else if(typeof v=="number")b=v;else return"₦0";return isNaN(b)||!isFinite(b)?"₦0":new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:0,maximumFractionDigits:0}).format(b)},h=async()=>{if(n<3){f("Insufficient credits. You need 3 credits for a comprehensive report.");return}c(!0),f("");try{await new Promise(_=>setTimeout(_,1e3)),a(_=>_-3);const v=m(),b=new Blob([v],{type:"text/html"}),w=URL.createObjectURL(b);window.open(w,"_blank")}catch{f("Failed to generate report. Please try again.")}finally{c(!1)}},m=()=>{new Date().toLocaleDateString("en-NG",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"});const v=e.input||{},b=e.result||{},w=new Date().getFullYear()-1,_=v.business_name||"TEST COMPANY",x=v.business_type||"manufacturing",S=p(v.turnover),C=p(v.total_assets);let O="₦0";v.has_trading_profit==="yes"&&v.trading_profit&&(O=p(v.trading_profit));let E="₦0";v.has_operating_expenses==="yes"&&v.operating_expenses&&(E=p(v.operating_expenses));let A="₦0";v.has_rental_income==="yes"&&v.rental_income&&(A=p(v.rental_income));let N="₦0",P="₦0";if(v.has_industrial_building==="yes"&&v.industrial_building){const fe=parseFloat(v.industrial_building.replace(/,/g,""))||0;N=p(fe),P=p(fe*.1)}let R="₦0",D="₦0";if(v.has_plant_machinery==="yes"&&v.plant_machinery){const fe=parseFloat(v.plant_machinery.replace(/,/g,""))||0;R=p(fe),D=p(fe*.2)}let G="₦0",q="₦0";if(v.has_furniture_fittings==="yes"&&v.furniture_fittings){const fe=parseFloat(v.furniture_fittings.replace(/,/g,""))||0;G=p(fe),q=p(fe*.2)}let M="₦0",H="₦0";if(v.has_motor_vehicle==="yes"&&v.motor_vehicle){const fe=parseFloat(v.motor_vehicle.replace(/,/g,""))||0;M=p(fe),H=p(fe*.2)}let B="₦0";v.has_losses_brought_forward==="yes"&&v.losses_brought_forward&&(B=p(v.losses_brought_forward));let F="₦0";v.has_wht_credits==="yes"&&v.wht_credits&&(F=p(v.wht_credits));const Y=p(b.pbt),J=p(b.assessable_profit),U=p(b.cit),X=p(b.levy),K=p(b.total_tax_payable),I=p(b.capital_allowances),L=b.cit_rate||0,ie=b.levy_rate||0,pe=b.company_tier==="small"?"Small Company (0% CIT)":"Large Company (30% CIT + 4% Levy)";return b.company_tier,`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zero Mumu Tax - CIT Report & Filing Forms</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Times New Roman', Times, serif;
            background: #ffffff;
            color: #000000;
            line-height: 1.5;
            padding: 40px;
        }
        
        .print-button {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #008751;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 20px;
            font-size: 14px;
            cursor: pointer;
            z-index: 1000;
        }
        
        .container {
            max-width: 1100px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        
        /* ZMT Header */
        .zmt-header {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 3px solid #008751;
        }
        
        .zmt-logo {
            width: 80px;
            height: 80px;
        }
        
        .zmt-title h1 {
            color: #008751;
            font-size: 28px;
            margin: 0 0 5px 0;
        }
        
        .zmt-title p {
            color: #666;
            margin: 0;
        }
        
        .ref-badge {
            display: inline-block;
            background: #f0f0f0;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            color: #008751;
            margin-top: 5px;
        }
        
        /* Sections */
        .section {
            margin-bottom: 30px;
            padding: 20px;
            background: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        
        .section h2 {
            color: #008751;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .section h3 {
            color: #0B4F6C;
            margin: 20px 0 10px 0;
        }
        
        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
        }
        
        .info-item {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px dashed #ccc;
        }
        
        .info-label {
            font-weight: 600;
            color: #555;
        }
        
        .info-value {
            font-weight: 500;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }
        
        th {
            background: #e0e0e0;
            padding: 10px;
            text-align: left;
            border: 1px solid #ccc;
        }
        
        td {
            padding: 8px 10px;
            border: 1px solid #ccc;
        }
        
        .total-row {
            font-weight: bold;
            background: #f0f0f0;
        }
        
        .company-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 15px;
        }
        
        .badge-small {
            background: #e8f5e9;
            color: #2E7D32;
        }
        
        .badge-large {
            background: #ffebee;
            color: #B22222;
        }
        
        /* Form Section */
        .form-section {
            margin-top: 40px;
            padding: 30px;
            border: 2px solid #008751;
            border-radius: 8px;
            background: #fff;
        }
        
        .form-section h2 {
            color: #008751;
            text-align: center;
            margin-bottom: 30px;
        }
        
        .form-field {
            display: flex;
            margin-bottom: 15px;
            border-bottom: 1px dashed #999;
            padding-bottom: 5px;
        }
        
        .form-label {
            width: 200px;
            font-weight: 600;
        }
        
        .form-value {
            flex: 1;
        }
        
        .declaration {
            margin-top: 30px;
            padding: 20px;
            border: 1px solid #000;
        }
        
        .signature-line {
            margin-top: 30px;
            display: flex;
            justify-content: space-between;
        }
        
        .signature-box {
            width: 200px;
        }
        
        .signature-box div {
            border-bottom: 1px solid #000;
            margin-top: 5px;
            height: 20px;
        }
        
        .official-use {
            margin-top: 30px;
            padding: 15px;
            background: #f0f0f0;
            border: 1px dashed #999;
        }
        
        .disclaimer {
            background: #fff9e6;
            border: 1px solid #FFD700;
            border-radius: 8px;
            padding: 16px;
            margin: 30px 0;
            font-size: 13px;
            color: #666;
        }
        
        .footer {
            margin-top: 40px;
            text-align: center;
            color: #666;
            font-size: 12px;
            border-top: 1px solid #ddd;
            padding-top: 20px;
        }
        
        @media print {
            .print-button { display: none; }
            body { padding: 0; }
            .container { box-shadow: none; }
        }
    </style>
</head>
<body>
    <button class="print-button" onclick="window.print()">🖨️ Print Report & Forms</button>

    <div class="container">
        <!-- ZMT Header -->
        <div class="zmt-header">
            <div class="zmt-logo">
                <svg width="80" height="80" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#008751" stroke-width="15"/>
                    <circle cx="100" cy="100" r="70" fill="#FFD700"/>
                    <text x="100" y="135" text-anchor="middle" fill="#4D3D1A" font-size="110" font-weight="900">₦</text>
                    <rect x="65" y="145" width="70" height="25" rx="5" fill="#006747"/>
                    <text x="100" y="163" text-anchor="middle" fill="white" font-size="18" font-weight="bold">ZMT</text>
                </svg>
            </div>
            <div class="zmt-title">
                <h1>ZERO MUMU TAX</h1>
                <p>Companies Income Tax Report & Filing Forms</p>
                <span class="ref-badge">NTA 2025 Compliant • Ref: ZMT-CIT-${Date.now().toString().slice(-8)}</span>
            </div>
        </div>

        <!-- Company Information -->
        <div class="section">
            <h2>🏢 Company Information</h2>
            <div class="info-grid">
                <div class="info-item"><span class="info-label">Business Name:</span> <span class="info-value">${_}</span></div>
                <div class="info-item"><span class="info-label">Business Type:</span> <span class="info-value">${x}</span></div>
                <div class="info-item"><span class="info-label">Annual Turnover:</span> <span class="info-value">${S}</span></div>
                <div class="info-item"><span class="info-label">Total Assets:</span> <span class="info-value">${C}</span></div>
                <div class="info-item"><span class="info-label">Years in Business:</span> <span class="info-value">${v.years_in_business||"1"} years</span></div>
                <div class="info-item"><span class="info-label">Classification:</span> <span class="info-value"><strong>${pe}</strong></span></div>
            </div>
        </div>

        <!-- Income & Expenses -->
        <div class="section">
            <h2>💰 Income & Expenses</h2>
            
            <h3>Income</h3>
            <table>
                <tr><th>Description</th><th>Amount (₦)</th></tr>
                ${v.has_trading_profit==="yes"?`<tr><td>Trading Profit</td><td>${O}</td></tr>`:""}
                ${v.has_rental_income==="yes"?`<tr><td>Rental Income</td><td>${A}</td></tr>`:""}
            </table>

            <h3>Expenses</h3>
            <table>
                <tr><th>Description</th><th>Amount (₦)</th></tr>
                ${v.has_operating_expenses==="yes"?`<tr><td>Operating Expenses</td><td>${E}</td></tr>`:""}
            </table>

            <div class="total-row" style="padding: 10px; margin-top: 10px; text-align: right;">
                <strong>Profit Before Tax: ${Y}</strong>
            </div>
        </div>

        <!-- Capital Allowances -->
        <div class="section">
            <h2>🏗️ Capital Allowances (NTA 2025)</h2>
            <table>
                <tr><th>Asset Type</th><th>Cost (₦)</th><th>Rate</th><th>Allowance (₦)</th></tr>
                ${v.has_industrial_building==="yes"?`<tr><td>Industrial Building</td><td>${N}</td><td>10%</td><td>${P}</td></tr>`:""}
                ${v.has_plant_machinery==="yes"?`<tr><td>Plant & Machinery</td><td>${R}</td><td>20%</td><td>${D}</td></tr>`:""}
                ${v.has_furniture_fittings==="yes"?`<tr><td>Furniture & Fittings</td><td>${G}</td><td>20%</td><td>${q}</td></tr>`:""}
                ${v.has_motor_vehicle==="yes"?`<tr><td>Motor Vehicle</td><td>${M}</td><td>20%</td><td>${H}</td></tr>`:""}
                <tr class="total-row"><td colspan="3"><strong>Total Capital Allowances</strong></td><td><strong>${I}</strong></td></tr>
            </table>
        </div>

        <!-- Tax Calculation -->
        <div class="section">
            <h2>📊 Tax Calculation</h2>
            <table>
                <tr><td>Profit Before Tax</td><td>${Y}</td></tr>
                <tr><td>Less: Capital Allowances</td><td>${I}</td></tr>
                ${B!=="₦0"?`<tr><td>Less: Losses Brought Forward</td><td>${B}</td></tr>`:""}
                <tr class="total-row"><td><strong>Assessable Profit</strong></td><td><strong>${J}</strong></td></tr>
                <tr><td>CIT (${L}%)</td><td>${U}</td></tr>
                <tr><td>Development Levy (${ie}%)</td><td>${X}</td></tr>
                ${F!=="₦0"?`<tr><td>Less: WHT Credits</td><td>${F}</td></tr>`:""}
                <tr class="total-row"><td><strong>TOTAL TAX PAYABLE</strong></td><td><strong>${K}</strong></td></tr>
            </table>
        </div>

        <!-- NRS Filing Form -->
        <div class="form-section">
            <h2>NIGERIA REVENUE SERVICE - COMPANY INCOME TAX FORM</h2>
            
            <h3>Section A: Company Details</h3>
            <div class="form-field"><span class="form-label">Company Name:</span> <span class="form-value">${_}</span></div>
            <div class="form-field"><span class="form-label">RC Number:</span> <span class="form-value">____________________</span></div>
            <div class="form-field"><span class="form-label">TIN:</span> <span class="form-value">____________________</span></div>
            <div class="form-field"><span class="form-label">Tax Year:</span> <span class="form-value">${w}</span></div>
            <div class="form-field"><span class="form-label">Business Type:</span> <span class="form-value">${x}</span></div>

            <h3>Section B: Income Declaration</h3>
            <div class="form-field"><span class="form-label">Turnover/Sales:</span> <span class="form-value">${S}</span></div>
            <div class="form-field"><span class="form-label">Trading Profit:</span> <span class="form-value">${O}</span></div>
            ${A!=="₦0"?`<div class="form-field"><span class="form-label">Rental Income:</span> <span class="form-value">${A}</span></div>`:""}

            <h3>Section C: Deductions & Allowances</h3>
            <div class="form-field"><span class="form-label">Operating Expenses:</span> <span class="form-value">${E}</span></div>
            <div class="form-field"><span class="form-label">Capital Allowances:</span> <span class="form-value">${I}</span></div>
            ${B!=="₦0"?`<div class="form-field"><span class="form-label">Losses Brought Forward:</span> <span class="form-value">${B}</span></div>`:""}

            <h3>Section D: Tax Computation</h3>
            <div class="form-field"><span class="form-label">Assessable Profit:</span> <span class="form-value">${J}</span></div>
            <div class="form-field"><span class="form-label">CIT Payable:</span> <span class="form-value">${U}</span></div>
            <div class="form-field"><span class="form-label">Development Levy:</span> <span class="form-value">${X}</span></div>
            ${F!=="₦0"?`<div class="form-field"><span class="form-label">WHT Credits:</span> <span class="form-value">${F}</span></div>`:""}
            <div class="form-field" style="font-weight: bold;"><span class="form-label">TOTAL TAX DUE:</span> <span class="form-value">${K}</span></div>

            <div class="declaration">
                <h3>Declaration</h3>
                <p>I declare that the information provided in this return is true, complete, and correct to the best of my knowledge and belief.</p>
                
                <div class="signature-line">
                    <div class="signature-box">
                        <p>Director's Signature</p>
                        <div></div>
                    </div>
                    <div class="signature-box">
                        <p>Date</p>
                        <div></div>
                    </div>
                </div>
                <div class="signature-line">
                    <div class="signature-box">
                        <p>Company Seal</p>
                        <div></div>
                    </div>
                    <div class="signature-box">
                        <p>For Official Use</p>
                        <div></div>
                    </div>
                </div>
            </div>

            <div class="official-use">
                <h4>For Official Use Only - NRS</h4>
                <div style="display: flex; gap: 40px;">
                    <div style="flex: 1;">
                        <p>Received by: ____________________</p>
                        <p>Date: ____________________</p>
                    </div>
                    <div style="flex: 1;">
                        <p>Payment Reference: ____________________</p>
                        <p>Verification Code: ____________________</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Disclaimer -->
        <div class="disclaimer">
            <strong>📌 Important Notice:</strong> This document is a TAX PREPARATION TOOL generated by Zero Mumu Tax App based on the information you provided and calculations per the Nigeria Tax Act 2025 (NTA 2025). It is designed to help you prepare your tax return. This is NOT an official NRS form and cannot be submitted directly. Please transfer this information to the official NRS forms or consult a tax professional for official filing.
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Generated by Zero Mumu Tax App • 3 credits used • Ref: ZMT-CIT-${Date.now().toString().slice(-8)}</p>
            <p>© 2026 Zero Mumu Tax. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`};return l.jsxs("div",{className:"modal-overlay",children:[l.jsxs("div",{className:"report-modal",children:[l.jsx("h2",{children:"Companies Income Tax Report"}),l.jsx("p",{className:"subtitle",children:"Generate your complete tax package (3 credits)"}),u&&l.jsxs("div",{className:"error-message",children:["⚠️ ",u]}),l.jsxs("div",{className:"preview-card",children:[l.jsx("h3",{children:"Your Report Includes:"}),l.jsxs("ul",{className:"feature-list",children:[l.jsx("li",{children:"✅ Detailed tax computation with all schedules"}),l.jsx("li",{children:"✅ Capital allowances breakdown"}),l.jsx("li",{children:"✅ NRS-compatible filing form"}),l.jsx("li",{children:"✅ Company declaration section"}),l.jsx("li",{children:"✅ Print-ready professional format"})]})]}),l.jsxs("div",{className:"credit-info",children:[l.jsx("span",{children:"Cost: 3 credits"}),l.jsxs("span",{className:n<3?"insufficient":"sufficient",children:["Your balance: ",n," credits"]})]}),l.jsxs("div",{className:"action-buttons",children:[l.jsx("button",{className:"secondary-btn",onClick:r,children:"Cancel"}),l.jsx("button",{className:"primary-btn",onClick:h,disabled:o||n<3,children:o?"Generating...":"Generate Report & Forms"})]})]}),l.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }
        .report-modal {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 500px;
          width: 90%;
          color: white;
        }
        h2 { margin: 0 0 4px 0; color: #4299E1; }
        .subtitle { color: #A0AEC0; margin-bottom: 24px; }
        .error-message {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #FBD38D;
        }
        .preview-card {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .preview-card h3 {
          margin: 0 0 12px 0;
          color: #FFD700;
        }
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .feature-list li {
          padding: 8px 0;
          border-bottom: 1px solid #4A5568;
        }
        .feature-list li:last-child {
          border-bottom: none;
        }
        .credit-info {
          display: flex;
          justify-content: space-between;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
          margin-bottom: 24px;
        }
        .insufficient { color: #DD6B20; }
        .sufficient { color: #48BB78; }
        .action-buttons {
          display: flex;
          gap: 12px;
        }
        .secondary-btn, .primary-btn {
          flex: 1;
          padding: 14px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .secondary-btn {
          background: transparent;
          border: 1px solid #4A5568;
          color: white;
        }
        .secondary-btn:hover {
          background: #2D3748;
        }
        .primary-btn {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          color: white;
        }
        .primary-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(11,79,108,0.3);
        }
        .primary-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `})]})},eW=({isLoggedIn:e,user:t,creditBalance:r,setCreditBalance:n,restoreData:a,clearRestoreData:o,requireLogin:c,requireCredits:u})=>{const[f,p]=T.useState(1),[h,m]=T.useState({business_name:"",business_type:"trading",industry:"general",turnover:"",total_assets:"",years_in_business:"5",has_trading_profit:"no",trading_profit:"",has_rental_income:"no",rental_income:"",has_dividend_income:"no",dividend_income:"",has_interest_income:"no",interest_income:"",has_operating_expenses:"no",operating_expenses:"",has_interest_expense:"no",interest_expense:"",has_bad_debts:"no",bad_debts:"",has_pension_contributions:"no",pension_contributions:"",has_industrial_building:"no",industrial_building:"",has_plant_machinery:"no",plant_machinery:"",has_furniture_fittings:"no",furniture_fittings:"",has_motor_vehicle:"no",motor_vehicle:"",has_losses_brought_forward:"no",losses_brought_forward:"",has_wht_credits:"no",wht_credits:"",is_first_4_years:!1,is_professional_service:!1}),[v,b]=T.useState(null),[w,_]=T.useState(!1),[x,S]=T.useState(null),[C,O]=T.useState(!1),[E,A]=T.useState(!1),[N,P]=T.useState(!1),[R,D]=T.useState(!1),[G,q]=T.useState(!1),[M,H]=T.useState(""),[B,F]=T.useState([]),[Y,J]=T.useState([]);T.useEffect(()=>{a&&a.type==="cit"&&(m(a.data),o&&o())},[a,o]),T.useEffect(()=>{Object.keys(h).length>0&&K()},[h,v]);const U={business_name:"Enter the exact name your business is registered with at CAC. This is the official name that will appear on your tax documents.",business_type:"Select what your business mainly does. Professional services like law firms, accounting firms, and medical practices are treated differently – they CANNOT qualify as small companies even if turnover is under ₦100M. They pay 30% CIT.",turnover:"Your TOTAL SALES for the year – all money that came into your business BEFORE paying any expenses. Example: If you sold goods worth ₦50 million, enter 50,000,000.",total_assets:"The TOTAL VALUE of everything your business OWNS – buildings, land, machines, vehicles, equipment, money in the bank, and money customers owe you.",years_in_business:"How many years has your company been operating? New businesses (less than 4 years) may be exempt from paying minimum tax.",trading_profit:"Profit from your main business activities (Sales minus Cost of Goods Sold). Example: You sold ₦1M worth of goods that cost you ₦400K – your profit is ₦600K.",rental_income:"Money you receive from renting property you own – shops, offices, houses rented to others. Enter the total rent received for the year.",operating_expenses:"Regular business costs: salaries, rent, electricity, internet, office supplies, transportation, marketing.",interest_expense:"Interest you paid on business loans, overdrafts, or borrowed money. Check loan statements.",pension_contributions:"Money paid into staff pension schemes (required by law). If you have employees, this is mandatory.",industrial_building:"Factory, warehouse, or building where you produce/manufacture goods. Not regular offices. Qualifies for 10% capital allowance.",plant_machinery:"Equipment used in production – generators, manufacturing machines, industrial equipment. Qualifies for 20% capital allowance.",furniture_fittings:"Office furniture, computers, printers, air conditioners, etc. Qualifies for 20% capital allowance.",motor_vehicle:"Cars, trucks, vans used for business (not personal use). Qualifies for 20% capital allowance.",losses_brought_forward:"If your business made a loss in previous years, you can use that loss to reduce tax in profitable years. Enter total unused losses.",wht_credits:"WHT (Withholding Tax) that customers deducted from your payments. You can claim this back. You should have certificates.",is_first_4_years:"If your business started less than 4 years ago, you may be exempt from paying minimum tax. This is a big benefit for new businesses!",is_professional_service:"Check this if you are a law firm, accounting firm, medical practice, or consulting firm. Professional services pay 30% CIT regardless of turnover."},X=({text:se})=>l.jsxs("div",{className:"explanation-box",children:[l.jsx("span",{className:"explanation-icon",children:"📌"}),l.jsx("span",{className:"explanation-text",children:se})]}),K=()=>{const se=[],te=parseFloat(h.turnover)||0;te<=1e8&&v?.company_tier==="large"&&!h.is_professional_service&&se.push({type:"cit_classification",severity:"high",title:"Your business may be misclassified",message:`Based on your turnover of ₦${te.toLocaleString()}, you may qualify as a small company which pays 0% CIT.`,action:"Learn about classification",potential_savings:v?.cit||0,priority:1}),F(se.filter(Pe=>!Y.includes(Pe.type)))},I=se=>{const{name:te,value:Pe}=se.target;te.includes("profit")||te.includes("expense")||te.includes("building")||te.includes("machinery")||te.includes("fittings")||te.includes("vehicle")||te==="turnover"||te==="total_assets"||te.includes("losses")||te.includes("wht")||te.includes("pension")?m(Ee=>({...Ee,[te]:Js(Pe)})):m(Ee=>({...Ee,[te]:Pe}))},L=(se,te)=>{m(Pe=>({...Pe,[se]:te,...se==="has_trading_profit"&&te==="no"?{trading_profit:""}:{},...se==="has_rental_income"&&te==="no"?{rental_income:""}:{},...se==="has_dividend_income"&&te==="no"?{dividend_income:""}:{},...se==="has_interest_income"&&te==="no"?{interest_income:""}:{},...se==="has_operating_expenses"&&te==="no"?{operating_expenses:""}:{},...se==="has_interest_expense"&&te==="no"?{interest_expense:""}:{},...se==="has_bad_debts"&&te==="no"?{bad_debts:""}:{},...se==="has_pension_contributions"&&te==="no"?{pension_contributions:""}:{},...se==="has_industrial_building"&&te==="no"?{industrial_building:""}:{},...se==="has_plant_machinery"&&te==="no"?{plant_machinery:""}:{},...se==="has_furniture_fittings"&&te==="no"?{furniture_fittings:""}:{},...se==="has_motor_vehicle"&&te==="no"?{motor_vehicle:""}:{},...se==="has_losses_brought_forward"&&te==="no"?{losses_brought_forward:""}:{},...se==="has_wht_credits"&&te==="no"?{wht_credits:""}:{}}))},ie=()=>p(se=>Math.min(se+1,6)),pe=()=>p(se=>Math.max(se-1,1)),fe=()=>h.business_name?.trim()?!h.turnover||Te(h.turnover)<=0?(S("Please enter your annual turnover"),!1):!0:(S("Please enter your business name"),!1),ve=()=>{let se=0;const te={industrial_building:.1,plant_machinery:.2,furniture_fittings:.2,motor_vehicle:.2};return h.has_industrial_building==="yes"&&(se+=Te(h.industrial_building)*te.industrial_building),h.has_plant_machinery==="yes"&&(se+=Te(h.plant_machinery)*te.plant_machinery),h.has_furniture_fittings==="yes"&&(se+=Te(h.furniture_fittings)*te.furniture_fittings),h.has_motor_vehicle==="yes"&&(se+=Te(h.motor_vehicle)*te.motor_vehicle),se},ge=async()=>{_(!0),S(null);try{const se=h.has_trading_profit==="yes"?Te(h.trading_profit):0,te=h.has_rental_income==="yes"?Te(h.rental_income):0,Pe=h.has_dividend_income==="yes"?Te(h.dividend_income):0,Ee=h.has_interest_income==="yes"?Te(h.interest_income):0,Ke=h.has_operating_expenses==="yes"?Te(h.operating_expenses):0,Xe=h.has_interest_expense==="yes"?Te(h.interest_expense):0,Ae=h.has_bad_debts==="yes"?Te(h.bad_debts):0,Be=h.has_pension_contributions==="yes"?Te(h.pension_contributions):0,pt=Te(h.turnover),bt=Te(h.total_assets),gt=se+te+Pe+Ee,$t=Ke+Xe+Ae+Be,or=gt-$t,Er=ve(),An=Math.max(0,or-Er),ni=h.has_losses_brought_forward==="yes"?Te(h.losses_brought_forward):0,rn=Math.max(0,An-ni),de=pt<=1e8&&bt<=25e7&&!h.is_professional_service,Ie=de?"small":"large",at=de?0:.3,sr=de?0:.04,nn=rn*at,zi=rn*sr,ii=nn+zi,el=h.has_wht_credits==="yes"?Te(h.wht_credits):0,to=Math.max(0,ii-el),ro={company_tier:Ie,total_income:gt,total_expenses:$t,pbt:or,capital_allowances:Er,assessable_profit:rn,cit_rate:at*100,cit:nn,levy_rate:sr*100,levy:zi,total_tax_payable:to,wht_credits_used:Math.min(el,ii)};n(no=>no-2),b(ro)}catch(se){S(se.message||"Calculation failed")}finally{_(!1)}},me=()=>{if(!e){O(!0);return}if(fe()){if(r<2){A(!0);return}ge()}},ae=async()=>{if(!e){O(!0);return}if(r<1){A(!0);return}H("saving");try{await Fe.post("/api/calculations/save",{calculator_type:"cit",input_data:h,result_data:v,tax_year:new Date().getFullYear()}),n(se=>se-1),H("success"),setTimeout(()=>H(""),3e3)}catch(se){console.error("Save error:",se),H("error"),setTimeout(()=>H(""),3e3)}},Se=["Business Info","Income","Expenses","Assets","Losses","Review"];return l.jsxs("div",{className:"cit-container",children:[l.jsxs("div",{className:"progress-section",children:[l.jsx("div",{className:"progress-steps",children:[1,2,3,4,5,6].map(se=>l.jsxs("div",{className:`step ${f>=se?"active":""}`,children:[l.jsx("div",{className:"step-number",children:se}),l.jsx("div",{className:"step-label",children:Se[se-1]})]},se))}),l.jsx("div",{className:"progress-track",children:l.jsx("div",{className:"progress-fill",style:{width:`${f/6*100}%`}})})]}),B.length>0&&l.jsx("div",{className:"alerts-container",children:B.map((se,te)=>l.jsx(vk,{alert:se,onAction:()=>{},onDismiss:()=>{}},te))}),l.jsxs("div",{className:"cit-card",children:[l.jsx("h2",{children:"Companies Income Tax (CIT) Calculator"}),l.jsx("p",{className:"subtitle",children:"NTA 2025 Compliant • 2 credits per calculation"}),f===1&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"Step 1: Business Information"}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{children:["Business/Company Name ",l.jsx("span",{className:"required",children:"*"})]}),l.jsx("input",{type:"text",name:"business_name",value:h.business_name,onChange:I,placeholder:"e.g., Deolu's Supermarket Ltd"}),l.jsx(X,{text:U.business_name})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"What does your business do?"}),l.jsxs("select",{name:"business_type",value:h.business_type,onChange:I,children:[l.jsx("option",{value:"trading",children:"🛒 Trading / Retail (buying and selling goods)"}),l.jsx("option",{value:"manufacturing",children:"🏭 Manufacturing / Production"}),l.jsx("option",{value:"services",children:"💼 Services (salon, repairs, consulting)"}),l.jsx("option",{value:"professional",children:"⚖️ Professional Services (Law, Accounting, Medical)"}),l.jsx("option",{value:"other",children:"📌 Other"})]}),l.jsx(X,{text:U.business_type})]}),l.jsxs("div",{className:"form-row",children:[l.jsxs("div",{className:"form-group half",children:[l.jsxs("label",{children:["Annual Turnover (₦) ",l.jsx("span",{className:"required",children:"*"})]}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"turnover",value:h.turnover,onChange:I,placeholder:"e.g., 50,000,000"})]}),l.jsx(X,{text:U.turnover})]}),l.jsxs("div",{className:"form-group half",children:[l.jsxs("label",{children:["Total Assets (₦) ",l.jsx("span",{className:"required",children:"*"})]}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"total_assets",value:h.total_assets,onChange:I,placeholder:"e.g., 20,000,000"})]}),l.jsx(X,{text:U.total_assets})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Years in Business"}),l.jsxs("select",{name:"years_in_business",value:h.years_in_business,onChange:I,children:[l.jsx("option",{value:"1",children:"Less than 1 year"}),l.jsx("option",{value:"2",children:"1-2 years"}),l.jsx("option",{value:"3",children:"3-4 years"}),l.jsx("option",{value:"5",children:"5+ years"})]}),l.jsx(X,{text:U.years_in_business})]}),l.jsxs("div",{className:"checkbox-group",children:[l.jsxs("label",{className:"checkbox-label",children:[l.jsx("input",{type:"checkbox",checked:h.is_first_4_years,onChange:se=>m({...h,is_first_4_years:se.target.checked})}),"My business is less than 4 years old"]}),l.jsx(X,{text:U.is_first_4_years}),l.jsxs("label",{className:"checkbox-label",children:[l.jsx("input",{type:"checkbox",checked:h.is_professional_service,onChange:se=>m({...h,is_professional_service:se.target.checked})}),"This is a professional service firm (law, accounting, medical, consulting)"]}),l.jsx(X,{text:U.is_professional_service})]})]}),f===2&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"Step 2: Income Sources"}),l.jsxs("div",{className:"toggle-section",children:[l.jsx("label",{children:"Trading Profit"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_trading_profit==="yes"?"active":""}`,onClick:()=>L("has_trading_profit","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_trading_profit==="no"?"active":""}`,onClick:()=>L("has_trading_profit","no"),children:"No"})]}),h.has_trading_profit==="yes"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"trading_profit",value:h.trading_profit,onChange:I,placeholder:"Enter trading profit"})]}),l.jsx(X,{text:U.trading_profit})]})]}),l.jsxs("div",{className:"toggle-section",children:[l.jsx("label",{children:"Rental Income"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_rental_income==="yes"?"active":""}`,onClick:()=>L("has_rental_income","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_rental_income==="no"?"active":""}`,onClick:()=>L("has_rental_income","no"),children:"No"})]}),h.has_rental_income==="yes"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"rental_income",value:h.rental_income,onChange:I,placeholder:"Enter rental income"})]}),l.jsx(X,{text:U.rental_income})]})]}),l.jsxs("div",{className:"toggle-section",children:[l.jsx("label",{children:"Dividend Income"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_dividend_income==="yes"?"active":""}`,onClick:()=>L("has_dividend_income","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_dividend_income==="no"?"active":""}`,onClick:()=>L("has_dividend_income","no"),children:"No"})]}),h.has_dividend_income==="yes"&&l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"dividend_income",value:h.dividend_income,onChange:I,placeholder:"Enter dividend income"})]})]}),l.jsxs("div",{className:"toggle-section",children:[l.jsx("label",{children:"Interest Income"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_interest_income==="yes"?"active":""}`,onClick:()=>L("has_interest_income","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_interest_income==="no"?"active":""}`,onClick:()=>L("has_interest_income","no"),children:"No"})]}),h.has_interest_income==="yes"&&l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"interest_income",value:h.interest_income,onChange:I,placeholder:"Enter interest income"})]})]})]}),f===3&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"Step 3: Allowable Expenses"}),l.jsxs("div",{className:"toggle-section",children:[l.jsx("label",{children:"Operating Expenses"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_operating_expenses==="yes"?"active":""}`,onClick:()=>L("has_operating_expenses","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_operating_expenses==="no"?"active":""}`,onClick:()=>L("has_operating_expenses","no"),children:"No"})]}),h.has_operating_expenses==="yes"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"operating_expenses",value:h.operating_expenses,onChange:I,placeholder:"Salaries, rent, utilities, etc."})]}),l.jsx(X,{text:U.operating_expenses})]})]}),l.jsxs("div",{className:"toggle-section",children:[l.jsx("label",{children:"Interest Expense"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_interest_expense==="yes"?"active":""}`,onClick:()=>L("has_interest_expense","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_interest_expense==="no"?"active":""}`,onClick:()=>L("has_interest_expense","no"),children:"No"})]}),h.has_interest_expense==="yes"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"interest_expense",value:h.interest_expense,onChange:I,placeholder:"Interest on loans"})]}),l.jsx(X,{text:U.interest_expense})]})]}),l.jsxs("div",{className:"toggle-section",children:[l.jsx("label",{children:"Pension Contributions (for staff)"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_pension_contributions==="yes"?"active":""}`,onClick:()=>L("has_pension_contributions","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_pension_contributions==="no"?"active":""}`,onClick:()=>L("has_pension_contributions","no"),children:"No"})]}),h.has_pension_contributions==="yes"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"pension_contributions",value:h.pension_contributions,onChange:I,placeholder:"Staff pension contributions"})]}),l.jsx(X,{text:U.pension_contributions})]})]})]}),f===4&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"Step 4: Capital Allowances"}),l.jsx("p",{className:"step-hint",children:"These reduce your taxable profit (NTA 2025)"}),l.jsxs("div",{className:"toggle-section highlight",children:[l.jsx("label",{children:"Industrial Building (10% annual allowance)"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_industrial_building==="yes"?"active":""}`,onClick:()=>L("has_industrial_building","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_industrial_building==="no"?"active":""}`,onClick:()=>L("has_industrial_building","no"),children:"No"})]}),h.has_industrial_building==="yes"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"industrial_building",value:h.industrial_building,onChange:I,placeholder:"Cost of building"})]}),l.jsx(X,{text:U.industrial_building})]})]}),l.jsxs("div",{className:"toggle-section highlight",children:[l.jsx("label",{children:"Plant & Machinery (20% annual allowance)"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_plant_machinery==="yes"?"active":""}`,onClick:()=>L("has_plant_machinery","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_plant_machinery==="no"?"active":""}`,onClick:()=>L("has_plant_machinery","no"),children:"No"})]}),h.has_plant_machinery==="yes"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"plant_machinery",value:h.plant_machinery,onChange:I,placeholder:"Cost of equipment"})]}),l.jsx(X,{text:U.plant_machinery})]})]}),l.jsxs("div",{className:"toggle-section highlight",children:[l.jsx("label",{children:"Furniture & Fittings (20% annual allowance)"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_furniture_fittings==="yes"?"active":""}`,onClick:()=>L("has_furniture_fittings","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_furniture_fittings==="no"?"active":""}`,onClick:()=>L("has_furniture_fittings","no"),children:"No"})]}),h.has_furniture_fittings==="yes"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"furniture_fittings",value:h.furniture_fittings,onChange:I,placeholder:"Cost of furniture"})]}),l.jsx(X,{text:U.furniture_fittings})]})]}),l.jsxs("div",{className:"toggle-section highlight",children:[l.jsx("label",{children:"Motor Vehicle (20% annual allowance)"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_motor_vehicle==="yes"?"active":""}`,onClick:()=>L("has_motor_vehicle","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_motor_vehicle==="no"?"active":""}`,onClick:()=>L("has_motor_vehicle","no"),children:"No"})]}),h.has_motor_vehicle==="yes"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"motor_vehicle",value:h.motor_vehicle,onChange:I,placeholder:"Cost of vehicles"})]}),l.jsx(X,{text:U.motor_vehicle})]})]})]}),f===5&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"Step 5: Losses and Tax Credits"}),l.jsxs("div",{className:"toggle-section",children:[l.jsx("label",{children:"Losses Brought Forward"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_losses_brought_forward==="yes"?"active":""}`,onClick:()=>L("has_losses_brought_forward","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_losses_brought_forward==="no"?"active":""}`,onClick:()=>L("has_losses_brought_forward","no"),children:"No"})]}),h.has_losses_brought_forward==="yes"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"losses_brought_forward",value:h.losses_brought_forward,onChange:I,placeholder:"Unrelieved losses from prior years"})]}),l.jsx(X,{text:U.losses_brought_forward})]})]}),l.jsxs("div",{className:"toggle-section",children:[l.jsx("label",{children:"WHT Credits"}),l.jsxs("div",{className:"yes-no-toggle",children:[l.jsx("button",{className:`toggle-btn ${h.has_wht_credits==="yes"?"active":""}`,onClick:()=>L("has_wht_credits","yes"),children:"Yes"}),l.jsx("button",{className:`toggle-btn ${h.has_wht_credits==="no"?"active":""}`,onClick:()=>L("has_wht_credits","no"),children:"No"})]}),h.has_wht_credits==="yes"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"wht_credits",value:h.wht_credits,onChange:I,placeholder:"Withholding tax deducted"})]}),l.jsx(X,{text:U.wht_credits})]})]})]}),f===6&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"Step 6: Review & Calculate"}),l.jsxs("div",{className:"review-card",children:[l.jsx("h4",{children:h.business_name}),l.jsxs("p",{children:[l.jsx("strong",{children:"Business Type:"})," ",h.business_type]}),l.jsxs("p",{children:[l.jsx("strong",{children:"Annual Turnover:"})," ",_e(Te(h.turnover))]}),l.jsxs("p",{children:[l.jsx("strong",{children:"Total Assets:"})," ",_e(Te(h.total_assets))]}),h.has_trading_profit==="yes"&&l.jsxs("p",{children:[l.jsx("strong",{children:"Trading Profit:"})," ",_e(Te(h.trading_profit))]}),h.has_operating_expenses==="yes"&&l.jsxs("p",{children:[l.jsx("strong",{children:"Operating Expenses:"})," ",_e(Te(h.operating_expenses))]}),l.jsxs("div",{className:"capital-summary",children:[l.jsx("strong",{children:"Capital Allowances:"}),h.has_industrial_building==="yes"&&l.jsxs("p",{children:["Industrial Building: ",_e(Te(h.industrial_building)*.1)," (10%)"]}),h.has_plant_machinery==="yes"&&l.jsxs("p",{children:["Plant & Machinery: ",_e(Te(h.plant_machinery)*.2)," (20%)"]})]})]}),l.jsx("button",{className:"btn-calculate",onClick:me,disabled:w,children:w?"Calculating...":"Calculate CIT (2 credits)"})]}),l.jsxs("div",{className:"nav-section",children:[f>1&&l.jsx("button",{className:"btn-secondary",onClick:pe,children:"← Back"}),f<6?l.jsx("button",{className:"btn-primary",onClick:ie,children:"Next →"}):null]}),x&&l.jsx("div",{className:"error-msg",children:x}),v&&l.jsxs("div",{className:"results-card",children:[l.jsx("h3",{children:"Companies Income Tax Result"}),l.jsxs("div",{className:`company-banner ${v.company_tier}`,children:[l.jsx("div",{className:"banner-icon",children:v.company_tier==="small"?"✅":"🏢"}),l.jsxs("div",{className:"banner-text",children:[l.jsx("strong",{children:v.company_tier==="small"?"Small Company":"Standard/Large Company"}),l.jsx("p",{children:v.company_tier==="small"?"0% CIT (Turnover ≤ ₦100M, Assets ≤ ₦250M)":`${v.cit_rate}% CIT + ${v.levy_rate}% Development Levy`})]})]}),l.jsxs("div",{className:"result-summary",children:[l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Profit Before Tax"}),l.jsx("strong",{children:_e(v.pbt)})]}),l.jsxs("div",{className:"summary-row highlight",children:[l.jsx("span",{children:"Capital Allowances"}),l.jsx("strong",{className:"success",children:_e(v.capital_allowances)})]}),l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Assessable Profit"}),l.jsx("strong",{children:_e(v.assessable_profit)})]}),v.cit>0&&l.jsxs("div",{className:"summary-row",children:[l.jsxs("span",{children:["CIT (",v.cit_rate,"%)"]}),l.jsx("strong",{children:_e(v.cit)})]}),v.levy>0&&l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Development Levy"}),l.jsx("strong",{children:_e(v.levy)})]}),v.wht_credits_used>0&&l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"WHT Credits Applied"}),l.jsx("strong",{children:_e(v.wht_credits_used)})]}),l.jsxs("div",{className:"summary-row total",children:[l.jsx("span",{children:"TOTAL TAX PAYABLE"}),l.jsx("strong",{className:"total-amount",children:_e(v.total_tax_payable)})]})]}),l.jsxs("div",{className:"tax-bands-section",children:[l.jsx("h4",{children:"📊 NTA 2025 Tax Bands (For Reference)"}),l.jsxs("div",{className:"bands-container",children:[l.jsxs("div",{className:"band-item",children:[l.jsx("span",{className:"band-label",children:"First ₦800,000"}),l.jsx("span",{className:"band-rate",children:"0%"})]}),l.jsxs("div",{className:"band-item",children:[l.jsx("span",{className:"band-label",children:"Next ₦2,200,000"}),l.jsx("span",{className:"band-rate",children:"15%"})]}),l.jsxs("div",{className:"band-item",children:[l.jsx("span",{className:"band-label",children:"Next ₦9,000,000"}),l.jsx("span",{className:"band-rate",children:"18%"})]}),l.jsxs("div",{className:"band-item",children:[l.jsx("span",{className:"band-label",children:"Next ₦13,000,000"}),l.jsx("span",{className:"band-rate",children:"21%"})]}),l.jsxs("div",{className:"band-item",children:[l.jsx("span",{className:"band-label",children:"Next ₦25,000,000"}),l.jsx("span",{className:"band-rate",children:"23%"})]}),l.jsxs("div",{className:"band-item",children:[l.jsx("span",{className:"band-label",children:"Above ₦50,000,000"}),l.jsx("span",{className:"band-rate",children:"25%"})]})]})]}),l.jsxs("div",{className:"what-this-means",children:[l.jsx("h4",{children:"📋 What This Means For Your Business"}),v.company_tier==="small"?l.jsxs("div",{className:"meaning-card success",children:[l.jsx("div",{className:"meaning-icon",children:"✅"}),l.jsxs("div",{className:"meaning-content",children:[l.jsx("strong",{children:"Good news! Your business qualifies as a Small Company"}),l.jsxs("p",{children:["Under NTA 2025, small companies pay 0% Companies Income Tax. You have ₦0 tax to pay on your profit of ",_e(v.assessable_profit),"."]}),l.jsx("p",{className:"note",children:"You still need to file an annual return by March 31st, even if tax is ₦0."})]})]}):l.jsxs("div",{className:"meaning-card",children:[l.jsx("div",{className:"meaning-icon",children:"🏢"}),l.jsxs("div",{className:"meaning-content",children:[l.jsx("strong",{children:"Your business is classified as a Standard/Large Company"}),l.jsxs("p",{children:["Your tax is calculated at ",v.cit_rate,"% on your assessable profit of ",_e(v.assessable_profit),"."]}),l.jsxs("p",{children:["Total tax payable: ",l.jsx("strong",{children:_e(v.total_tax_payable)})]}),l.jsx("p",{className:"note",children:"Payment is due within 6 months of your year-end. File your returns on time to avoid penalties."})]})]}),v.capital_allowances>0&&l.jsxs("div",{className:"allowance-note",children:[l.jsx("span",{className:"note-icon",children:"💰"}),l.jsxs("span",{children:["You claimed ",l.jsx("strong",{children:_e(v.capital_allowances)})," in capital allowances, reducing your taxable profit."]})]}),v.wht_credits_used>0&&l.jsxs("div",{className:"credit-note",children:[l.jsx("span",{className:"note-icon",children:"✅"}),l.jsxs("span",{children:["WHT credits of ",l.jsx("strong",{children:_e(v.wht_credits_used)})," were applied to reduce your tax."]})]})]}),l.jsxs("div",{className:"action-buttons",children:[l.jsx("button",{className:"action-btn save-btn",onClick:()=>{e?r<1?A(!0):ae():O(!0)},children:e?r<1?"⚠️ Need 1 credit":"💾 Save (1 credit)":"🔒 Login to Save"}),l.jsx("button",{className:"action-btn report-btn",onClick:()=>{if(!e){O(!0);return}if(r<3){A(!0);return}P(!0)},children:e?r<3?"⚠️ Need 3 credits":"📥 Download Comprehensive Tax Report (3 credits)":"🔒 Login to Download Report"}),l.jsx("button",{className:"action-btn whatif-btn",onClick:()=>{if(!e){O(!0);return}if(r<2){A(!0);return}D(!0)},children:e?r<2?"⚠️ Need 2 credits":"🔄 Compare Scenarios (2 credits)":"🔒 Login to Compare"})]}),M==="success"&&l.jsx("div",{className:"save-success",children:"✅ Calculation saved! (1 credit used)"})]})]}),N&&v&&l.jsx(yk,{calculation:{input:h,result:v},user:t,onClose:()=>P(!1),creditBalance:r,setCreditBalance:n}),R&&l.jsx("div",{className:"modal-overlay",children:l.jsx(qx,{baseScenario:h,onClose:()=>D(!1),creditBalance:r,setCreditBalance:n,calculatorType:"cit"})}),l.jsx("style",{children:`
        .cit-container { max-width: 800px; margin: 0 auto; }
        
        .progress-section { margin-bottom: 30px; }
        .progress-steps { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .step { text-align: center; flex: 1; }
        .step-number { 
          width: 30px; height: 30px; border-radius: 50%; background: #2D3748; 
          color: white; display: flex; align-items: center; justify-content: center; 
          margin: 0 auto 5px; font-weight: 600;
        }
        .step.active .step-number { background: #4299E1; }
        .step-label { font-size: 11px; color: #A0AEC0; }
        .progress-track { height: 4px; background: #2D3748; border-radius: 2px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #4299E1, #48BB78); transition: width 0.3s; }
        
        .cit-card { 
          background: #1A202C; border-radius: 24px; padding: 32px; color: white;
        }
        h2 { margin: 0 0 8px 0; color: #4299E1; }
        .subtitle { color: #A0AEC0; margin-bottom: 24px; }
        
        .step-content h3 { margin: 0 0 20px 0; color: #FFD700; }
        
        .form-group { margin-bottom: 25px; }
        .form-group label { display: block; margin-bottom: 8px; color: white; font-weight: 500; }
        .required { color: #DD6B20; margin-left: 4px; }
        
        .input-wrapper { position: relative; }
        .currency { 
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          color: #A0AEC0;
        }
        .input-wrapper input, .form-group select { 
          width: 100%; padding: 12px 12px 12px 40px; background: #2D3748;
          border: 1px solid #4A5568; border-radius: 8px; color: white;
        }
        
        .explanation-box {
          margin-top: 8px;
          padding: 10px 12px;
          background: rgba(66,153,225,0.1);
          border-left: 4px solid #4299E1;
          border-radius: 4px;
          font-size: 13px;
          color: #CBD5E0;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .explanation-icon { color: #4299E1; }
        
        .form-row { display: flex; gap: 20px; }
        .form-group.half { flex: 1; }
        
        .checkbox-group { margin: 20px 0; }
        .checkbox-label { display: flex; align-items: center; gap: 8px; margin-bottom: 15px; cursor: pointer; }
        
        .toggle-section { 
          margin-bottom: 25px; padding: 16px; background: #2D3748; border-radius: 12px;
        }
        .toggle-section.highlight {
          background: rgba(72,187,120,0.1);
          border-left: 4px solid #48BB78;
        }
        .yes-no-toggle { display: flex; gap: 10px; margin: 10px 0; }
        .toggle-btn { 
          flex: 1; padding: 10px; background: #4A5568; border: none; 
          border-radius: 8px; color: white; cursor: pointer;
        }
        .toggle-btn.active { background: #4299E1; }
        
        .nav-section { 
          display: flex; justify-content: space-between; margin-top: 30px;
        }
        .btn-secondary, .btn-primary, .btn-calculate { 
          padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer;
          border: none;
        }
        .btn-secondary { 
          background: transparent; border: 1px solid #4A5568; color: white;
        }
        .btn-primary { 
          background: #4299E1; color: white; margin-left: auto;
        }
        .btn-calculate { 
          width: 100%; background: #48BB78; color: white;
        }
        
        .error-msg { 
          margin-top: 20px; padding: 12px; background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20; border-radius: 8px; color: #FBD38D;
        }
        
        .review-card { 
          padding: 20px; background: #2D3748; border-radius: 12px; margin-bottom: 20px;
        }
        .review-card h4 { margin: 0 0 10px 0; color: #FFD700; }
        .capital-summary { 
          margin-top: 15px; padding: 12px; background: #1A202C; border-radius: 8px;
        }
        
        .results-card { 
          margin-top: 30px; padding: 24px; background: #2D3748; border-radius: 16px;
        }
        .result-banner { 
          text-align: center; padding: 20px; background: #1A202C; border-radius: 12px;
          margin-bottom: 20px;
        }
        .company-badge { margin-bottom: 10px; }
        .company-badge.small { color: #48BB78; }
        .company-badge.large { color: #FBD38D; }
        .result-amount { font-size: 36px; font-weight: 800; color: #FFD700; }
        
        .result-details { margin-bottom: 20px; }
        .detail-row { 
          display: flex; justify-content: space-between; padding: 12px;
          border-bottom: 1px solid #4A5568;
        }
        .detail-row.highlight { background: #1A202C; border-radius: 8px; }
        
        .action-buttons { 
          display: flex; gap: 10px; margin-top: 20px;
        }
        .action-btn { 
          flex: 1; padding: 12px; border: none; border-radius: 8px;
          color: white; cursor: pointer;
        }
        .save-btn { background: #4A5568; }
        .report-btn { background: #4299E1; }
        .whatif-btn { background: #9F7AEA; }
        
        .save-success { 
          margin-top: 16px; padding: 12px; background: rgba(72,187,120,0.1);
          border: 1px solid #48BB78; border-radius: 8px; color: #48BB78; text-align: center;
        }
        
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          z-index: 10000; padding: 20px;
        }
/* Company Banner */
.company-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 24px;
}

.company-banner.small {
  background: rgba(72, 187, 120, 0.1);
  border: 1px solid #48BB78;
}

.company-banner.large {
  background: rgba(66, 153, 225, 0.1);
  border: 1px solid #4299E1;
}

.banner-icon {
  font-size: 32px;
}

.banner-text strong {
  display: block;
  font-size: 18px;
  margin-bottom: 4px;
}

.banner-text p {
  margin: 0;
  color: #A0AEC0;
  font-size: 14px;
}

/* Result Summary */
.result-summary {
  background: #2D3748;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #4A5568;
}

.summary-row:last-child {
  border-bottom: none;
}

.summary-row.highlight {
  background: #1A202C;
  border-radius: 8px;
  padding: 12px;
  margin: 8px 0;
}

.summary-row.total {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid #4A5568;
  font-size: 18px;
}

.success {
  color: #48BB78;
}

.total-amount {
  color: #FFD700;
  font-size: 24px;
}

/* Tax Bands Section */
.tax-bands-section {
  background: #2D3748;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.tax-bands-section h4 {
  margin: 0 0 16px 0;
  color: #4299E1;
  font-size: 16px;
}

.bands-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
}

.band-item {
  background: #1A202C;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
}

.band-label {
  display: block;
  color: #A0AEC0;
  font-size: 13px;
  margin-bottom: 4px;
}

.band-rate {
  display: block;
  font-size: 18px;
  font-weight: 700;
  color: #FFD700;
}

/* What This Means Section */
.what-this-means {
  background: #2D3748;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.what-this-means h4 {
  margin: 0 0 16px 0;
  color: #4299E1;
  font-size: 16px;
}

.meaning-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px;
  background: #1A202C;
  border-radius: 12px;
  margin-bottom: 16px;
}

.meaning-card.success {
  border-left: 4px solid #48BB78;
}

.meaning-icon {
  font-size: 28px;
}

.meaning-content {
  flex: 1;
}

.meaning-content strong {
  display: block;
  margin-bottom: 8px;
  color: white;
  font-size: 16px;
}

.meaning-content p {
  margin: 0 0 8px 0;
  color: #CBD5E0;
  line-height: 1.6;
}

.note {
  color: #A0AEC0 !important;
  font-size: 13px;
  font-style: italic;
}

.allowance-note, .credit-note {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: #1A202C;
  border-radius: 8px;
  margin-top: 12px;
}

.allowance-note {
  border-left: 4px solid #48BB78;
}

.credit-note {
  border-left: 4px solid #4299E1;
}

.note-icon {
  font-size: 20px;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.action-btn {
  flex: 1;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.save-btn {
  background: #4A5568;
  color: white;
}

.save-btn:hover:not(:disabled) {
  background: #5A6778;
}

.report-btn {
  background: #4299E1;
  color: white;
}

.report-btn:hover:not(:disabled) {
  background: #3182CE;
}

.whatif-btn {
  background: #9F7AEA;
  color: white;
}

.whatif-btn:hover:not(:disabled) {
  background: #8B5CF6;
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.save-success {
  margin-top: 16px;
  padding: 12px;
  background: rgba(72, 187, 120, 0.1);
  border: 1px solid #48BB78;
  border-radius: 8px;
  color: #48BB78;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
  }
  
  .bands-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .meaning-card {
    flex-direction: column;
    text-align: center;
  }
}

      `})]})},tW=({isLoggedIn:e,creditBalance:t,setCreditBalance:r,restoreData:n,clearRestoreData:a,requireLogin:o,requireCredits:c})=>{const[u,f]=T.useState(1),[p,h]=T.useState({business_type:"goods",business_type_other:"",what_do_you_sell:"",monthly_sales:"",is_registered:"no",calc_type:"net_to_gross",amount:""}),[m,v]=T.useState(null),[b,w]=T.useState(!1),[_,x]=T.useState(""),[S,C]=T.useState({}),[O,E]=T.useState(!1),[A,N]=T.useState(!1),P=[{value:"goods",label:"I sell goods (provisions, clothes, electronics, etc.)"},{value:"services",label:"I provide services (barbing, tailoring, repairs, etc.)"},{value:"food",label:"I sell food or run a restaurant"},{value:"agriculture",label:"I sell farm produce (cassava, yam, vegetables, etc.)"},{value:"transport",label:"I run transport business"},{value:"other",label:"Other (please specify)"}],R=B=>{const{name:F,value:Y}=B.target;h(F==="monthly_sales"||F==="amount"?{...p,[F]:Js(Y)}:{...p,[F]:Y}),S[F]&&C({...S,[F]:null}),_&&x("")},D=()=>{q()&&f(B=>Math.min(B+1,3))},G=()=>f(B=>Math.max(B-1,1)),q=()=>{const B={};return u===1&&(p.business_type==="other"&&!p.business_type_other?.trim()&&(B.business_type_other="Please describe your business type"),p.what_do_you_sell?.trim()||(B.what_do_you_sell="Please tell us what you sell")),u===2&&(!p.monthly_sales||Te(p.monthly_sales)<=0)&&(B.monthly_sales="Please enter your average monthly sales"),u===3&&(!p.amount||Te(p.amount)<=0)&&(B.amount="Please enter an amount"),C(B),Object.keys(B).length===0},M=async()=>{if(q()){if(!e){E(!0);return}if(t<1){N(!0);return}w(!0),x("");try{const B={business_type:p.business_type==="other"?p.business_type_other:p.business_type,what_do_you_sell:p.what_do_you_sell,monthly_sales:Te(p.monthly_sales),is_registered:p.is_registered==="yes",calc_type:p.calc_type,amount:Te(p.amount)},F=await Fe.post("/api/v1/calculate/vat",B);F.data.success?(r(Y=>Y-1),v(F.data.data),C({})):x(F.data.error||"Calculation failed")}catch{x("Network error. Please try again.")}finally{w(!1)}}},H=()=>{q()&&M()};return l.jsxs("div",{className:"vat-container",children:[l.jsxs("div",{className:"vat-header",children:[l.jsx("h2",{children:"Value Added Tax (VAT) Calculator"}),l.jsx("p",{className:"vat-subtitle",children:"Calculate VAT at 7.5% • NTA 2025"})]}),l.jsxs("div",{className:"progress-section",children:[l.jsx("div",{className:"progress-steps",children:[1,2,3].map(B=>l.jsxs("div",{className:`step ${u>=B?"active":""}`,children:[l.jsx("div",{className:"step-number",children:B}),l.jsx("div",{className:"step-label",children:B===1?"Business":B===2?"Sales":"Calculate"})]},B))}),l.jsx("div",{className:"progress-track",children:l.jsx("div",{className:"progress-fill",style:{width:`${u/3*100}%`}})})]}),l.jsxs("div",{className:"vat-card",children:[u===1&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"Tell us about your business"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"What kind of business do you do?"}),P.map(B=>l.jsxs("div",{className:"radio-option",children:[l.jsx("input",{type:"radio",name:"business_type",value:B.value,checked:p.business_type===B.value,onChange:R,id:`business_${B.value}`}),l.jsx("label",{htmlFor:`business_${B.value}`,children:B.label})]},B.value))]}),p.business_type==="other"&&l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Please describe your business"}),l.jsx("input",{type:"text",name:"business_type_other",value:p.business_type_other,onChange:R,placeholder:"e.g., I sell recharge cards",className:S.business_type_other?"error":""}),S.business_type_other&&l.jsx("div",{className:"field-error",children:S.business_type_other})]}),l.jsxs("div",{className:"form-group highlight",children:[l.jsx("label",{children:"What exactly do you sell?"}),l.jsx("input",{type:"text",name:"what_do_you_sell",value:p.what_do_you_sell,onChange:R,placeholder:"e.g., provisions, clothes, food, services",className:S.what_do_you_sell?"error":""}),S.what_do_you_sell&&l.jsx("div",{className:"field-error",children:S.what_do_you_sell}),l.jsx("small",{children:"This helps us know if your items are VAT exempt"})]})]}),u===2&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"Tell us about your sales"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Average monthly sales (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"monthly_sales",value:p.monthly_sales,onChange:R,placeholder:"e.g., 500,000",className:S.monthly_sales?"error":""})]}),S.monthly_sales&&l.jsx("div",{className:"field-error",children:S.monthly_sales}),l.jsx("small",{children:"Your total sales before expenses"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Are you registered for VAT?"}),l.jsxs("div",{className:"radio-group",children:[l.jsxs("label",{className:"radio-label",children:[l.jsx("input",{type:"radio",name:"is_registered",value:"yes",checked:p.is_registered==="yes",onChange:R}),"Yes, I am registered"]}),l.jsxs("label",{className:"radio-label",children:[l.jsx("input",{type:"radio",name:"is_registered",value:"no",checked:p.is_registered==="no",onChange:R}),"No, I am not registered"]})]})]})]}),u===3&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"Calculate VAT"}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"What do you want to calculate?"}),l.jsxs("div",{className:"radio-group",children:[l.jsxs("label",{className:"radio-label",children:[l.jsx("input",{type:"radio",name:"calc_type",value:"net_to_gross",checked:p.calc_type==="net_to_gross",onChange:R}),"Add VAT to price (net → gross)"]}),l.jsxs("label",{className:"radio-label",children:[l.jsx("input",{type:"radio",name:"calc_type",value:"gross_to_net",checked:p.calc_type==="gross_to_net",onChange:R}),"Remove VAT from price (gross → net)"]})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Enter amount (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"amount",value:p.amount,onChange:R,placeholder:"e.g., 100,000",className:S.amount?"error":""})]}),S.amount&&l.jsx("div",{className:"field-error",children:S.amount})]})]}),l.jsxs("div",{className:"nav-section",children:[u>1&&l.jsx("button",{className:"btn-secondary",onClick:G,children:"← Back"}),u<3?l.jsx("button",{className:"btn-primary",onClick:D,children:"Next →"}):l.jsx("button",{className:"btn-calculate",onClick:H,disabled:b,children:b?"Calculating...":"Calculate VAT (1 credit)"})]}),_&&l.jsx("div",{className:"error-msg",children:_}),m&&l.jsxs("div",{className:"results-section",children:[l.jsx("h3",{children:"VAT Calculation Result"}),l.jsxs("div",{className:"result-highlight",children:[l.jsx("div",{className:"result-amount",children:_e(m.vat)}),l.jsx("div",{className:"result-label",children:"VAT Amount (7.5%)"})]}),l.jsxs("div",{className:"result-grid",children:[l.jsxs("div",{className:"result-item",children:[l.jsx("span",{className:"result-item-label",children:p.calc_type==="net_to_gross"?"Net Amount":"Gross Amount"}),l.jsx("span",{className:"result-item-value",children:_e(p.calc_type==="net_to_gross"?m.net:m.gross)})]}),l.jsxs("div",{className:"result-item total",children:[l.jsx("span",{className:"result-item-label",children:p.calc_type==="net_to_gross"?"Gross Amount":"Net Amount"}),l.jsx("span",{className:"result-item-value",children:_e(p.calc_type==="net_to_gross"?m.gross:m.net)})]})]}),m.message&&l.jsx("div",{className:`info-box ${m.is_eligible?"warning":"info"}`,children:m.message})]})]}),l.jsx("style",{children:`
        .vat-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 20px;
        }

        .vat-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .vat-header h2 {
          color: #4299E1;
          margin: 0 0 8px 0;
          font-size: 28px;
        }

        .vat-subtitle {
          color: #A0AEC0;
          margin: 0;
        }

        .progress-section {
          margin-bottom: 30px;
        }

        .progress-steps {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .step {
          text-align: center;
          flex: 1;
        }

        .step-number {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #2D3748;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 5px;
          font-weight: 600;
        }

        .step.active .step-number {
          background: #4299E1;
        }

        .step-label {
          font-size: 12px;
          color: #A0AEC0;
        }

        .progress-track {
          height: 4px;
          background: #2D3748;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4299E1, #48BB78);
          transition: width 0.3s;
        }

        .vat-card {
          background: #1A202C;
          border-radius: 16px;
          padding: 30px;
          color: white;
        }

        .step-content h3 {
          margin: 0 0 20px 0;
          color: #FFD700;
          font-size: 20px;
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          margin-bottom: 10px;
          color: white;
          font-weight: 500;
        }

        .form-group.highlight {
          background: #2D3748;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #48BB78;
        }

        .radio-option {
          margin: 10px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .radio-group {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .radio-label {
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }

        .input-wrapper {
          position: relative;
        }

        .currency {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #A0AEC0;
        }

        .input-wrapper input {
          width: 100%;
          padding: 12px 12px 12px 40px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 16px;
        }

        .input-wrapper input.error {
          border-color: #DD6B20;
        }

        small {
          display: block;
          margin-top: 5px;
          color: #A0AEC0;
          font-size: 12px;
        }

        .field-error {
          margin-top: 5px;
          color: #FBD38D;
          font-size: 13px;
        }

        .nav-section {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }

        .btn-secondary, .btn-primary, .btn-calculate {
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          border: none;
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid #4A5568;
          color: white;
        }

        .btn-primary {
          background: #4299E1;
          color: white;
          margin-left: auto;
        }

        .btn-calculate {
          width: 100%;
          background: #48BB78;
          color: white;
        }

        .error-msg {
          margin-top: 20px;
          padding: 12px;
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          color: #FBD38D;
        }

        .results-section {
          margin-top: 30px;
          padding: 25px;
          background: #2D3748;
          border-radius: 12px;
        }

        .results-section h3 {
          margin: 0 0 20px 0;
          color: #4299E1;
        }

        .result-highlight {
          text-align: center;
          padding: 20px;
          background: #1A202C;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        .result-amount {
          font-size: 36px;
          font-weight: 800;
          color: #FFD700;
        }

        .result-label {
          color: #A0AEC0;
          margin-top: 5px;
        }

        .result-grid {
          display: grid;
          gap: 10px;
          margin-bottom: 20px;
        }

        .result-item {
          display: flex;
          justify-content: space-between;
          padding: 12px;
          background: #1A202C;
          border-radius: 6px;
        }

        .result-item.total {
          background: rgba(72,187,120,0.1);
        }

        .result-item-label {
          color: #A0AEC0;
        }

        .result-item-value {
          font-weight: 600;
          color: white;
        }

        .info-box {
          padding: 15px;
          border-radius: 6px;
          font-size: 14px;
        }

        .info-box.warning {
          background: rgba(221,107,32,0.1);
          border-left: 4px solid #DD6B20;
          color: #FBD38D;
        }

        .info-box.info {
          background: rgba(66,153,225,0.1);
          border-left: 4px solid #4299E1;
          color: #90CDF4;
        }
      `})]})},rW=({isLoggedIn:e,creditBalance:t,setCreditBalance:r,restoreData:n,clearRestoreData:a,requireLogin:o,requireCredits:c})=>{const[u,f]=T.useState(1),[p,h]=T.useState({payer_type:"company_to_company",transaction_type:"contract",amount:"1,000,000"}),[m,v]=T.useState(null),[b,w]=T.useState(!1),[_,x]=T.useState(""),[S,C]=T.useState(!1),[O,E]=T.useState(!1),A=[{value:"company_to_company",label:"Company paying another company"},{value:"company_to_individual",label:"Company paying an individual"},{value:"individual_to_company",label:"Individual paying a company"}],N=[{value:"contract",label:"Contract / Supply of goods"},{value:"rent",label:"Rent / Lease"},{value:"interest",label:"Interest on loans"},{value:"dividend",label:"Dividends"},{value:"royalty",label:"Royalties"},{value:"professional",label:"Professional fees (lawyer, consultant, etc.)"}],P=M=>{const{name:H,value:B}=M.target;if(H==="amount"){const F=B.replace(/[^\d]/g,"");if(F){const Y=parseInt(F);h({...p,amount:Y.toLocaleString()})}else h({...p,amount:""})}else h({...p,[H]:B})},R=()=>{G()&&f(M=>Math.min(M+1,3))},D=()=>f(M=>Math.max(M-1,1)),G=()=>u===1&&!p.payer_type?(x("Please select who is making the payment"),!1):u===2&&!p.transaction_type?(x("Please select the type of payment"),!1):(x(""),!0),q=async()=>{if(!e){C(!0);return}if(t<1){E(!0);return}w(!0),x("");try{const M=await Fe.post("/api/v1/calculate/wht",{payer_type:p.payer_type,transaction_type:p.transaction_type,amount:parseFloat(p.amount.replace(/,/g,""))||1e6});M.data.success?(r(H=>H-1),v(M.data.data)):x(M.data.error||"Calculation failed")}catch{x("Network error. Please try again.")}finally{w(!1)}};return l.jsxs("div",{className:"full-width-calculator",children:[l.jsxs("div",{className:"progress-bar-container",children:[l.jsx("div",{className:"progress-steps",children:[1,2,3].map(M=>l.jsxs("div",{className:`progress-step ${u>=M?"completed":""}`,onClick:()=>f(M),children:[l.jsx("div",{className:`step-indicator ${u>=M?"active":""}`,children:M}),l.jsx("div",{className:"step-label",children:M===1?"Who is paying?":M===2?"What payment?":"Calculate WHT"})]},M))}),l.jsx("div",{className:"progress-track",children:l.jsx("div",{className:"progress-fill",style:{width:`${u/3*100}%`}})})]}),l.jsxs("div",{className:"form-section",children:[l.jsx("h2",{children:"Withholding Tax (WHT) Finder"}),l.jsx("p",{className:"subtitle",children:"Find the correct WHT rate for your transaction"}),u===1&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"Who is making the payment?"}),l.jsx("div",{className:"options-grid",children:A.map(M=>l.jsxs("div",{className:`option-card ${p.payer_type===M.value?"selected":""}`,onClick:()=>h({...p,payer_type:M.value}),children:[l.jsx("div",{className:"option-radio",children:l.jsx("div",{className:`radio-circle ${p.payer_type===M.value?"checked":""}`,children:p.payer_type===M.value&&l.jsx("div",{className:"radio-dot"})})}),l.jsx("div",{className:"option-label",children:M.label})]},M.value))})]}),u===2&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"What is the payment for?"}),l.jsx("div",{className:"transaction-grid",children:N.map(M=>l.jsxs("div",{className:`transaction-card ${p.transaction_type===M.value?"selected":""}`,onClick:()=>h({...p,transaction_type:M.value}),children:[l.jsx("div",{className:"transaction-label",children:M.label}),p.transaction_type===M.value&&l.jsx("div",{className:"selected-check",children:"✓"})]},M.value))})]}),u===3&&l.jsxs("div",{className:"step-content",children:[l.jsx("h3",{children:"Calculate WHT Amount"}),l.jsxs("div",{className:"summary-card",children:[l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Payer:"}),l.jsx("strong",{children:A.find(M=>M.value===p.payer_type)?.label})]}),l.jsxs("div",{className:"summary-row",children:[l.jsx("span",{children:"Payment type:"}),l.jsx("strong",{children:N.find(M=>M.value===p.transaction_type)?.label})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Payment amount (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",name:"amount",value:p.amount,onChange:P,placeholder:"1,000,000"})]}),l.jsx("small",{children:"Enter the total payment amount"})]}),l.jsx("button",{className:"calculate-btn",onClick:q,disabled:b,children:b?"Calculating...":"Calculate WHT (1 credit)"})]}),l.jsxs("div",{className:"step-navigation",children:[u>1&&l.jsx("button",{className:"secondary-btn",onClick:D,children:"← Back"}),u<3?l.jsx("button",{className:"primary-btn",onClick:R,children:"Next →"}):null]}),_&&l.jsxs("div",{className:"error-message",children:["⚠️ ",_]}),m&&l.jsxs("div",{className:"results-card",children:[l.jsxs("div",{className:"rate-display",children:[l.jsxs("div",{className:"rate-percentage",children:[m.rate,"%"]}),l.jsx("div",{className:"rate-description",children:"Withholding Tax Rate"})]}),l.jsxs("div",{className:"result-details",children:[l.jsxs("div",{className:"detail-row",children:[l.jsx("span",{children:"Payment amount"}),l.jsx("span",{children:_e(m.amount)})]}),l.jsxs("div",{className:"detail-row highlight",children:[l.jsx("span",{children:"WHT to deduct"}),l.jsx("span",{children:_e(m.wht)})]}),l.jsxs("div",{className:"detail-row total",children:[l.jsx("span",{children:"Net payment"}),l.jsx("span",{children:_e(m.net)})]})]}),l.jsxs("div",{className:"info-box",children:[l.jsx("h4",{children:"📋 Important Reminders"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Deduct WHT when you make the payment"}),l.jsx("li",{children:"Remit to NRS within 21 days"}),l.jsx("li",{children:"Give the payee a WHT certificate"}),l.jsx("li",{children:"Keep records for 6 years"})]})]})]}),S&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-card",children:[l.jsx("button",{className:"close-btn",onClick:()=>C(!1),children:"✕"}),l.jsx("div",{className:"modal-icon",children:"🔒"}),l.jsx("h3",{children:"Login Required"}),l.jsx("p",{children:"The WHT Finder costs 1 credit. Please log in."}),l.jsx("div",{className:"credit-note",children:"💡 New users get 10 free credits!"}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{onClick:()=>C(!1),children:"Cancel"}),l.jsx("button",{onClick:()=>{C(!1),o()},children:"Login"})]})]})}),O&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-card",children:[l.jsx("button",{className:"close-btn",onClick:()=>E(!1),children:"✕"}),l.jsx("div",{className:"modal-icon",children:"⚠️"}),l.jsx("h3",{children:"Insufficient Credits"}),l.jsx("p",{children:"You need 1 credit for this calculation."}),l.jsxs("p",{className:"balance",children:["Your balance: ",t," credits"]}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{onClick:()=>E(!1),children:"Cancel"}),l.jsx("button",{onClick:()=>{E(!1),c(1,q)},children:"Buy Credits"})]})]})})]}),l.jsx("style",{children:`
        .full-width-calculator { max-width: 800px; margin: 0 auto; }
        
        .progress-bar-container { margin-bottom: 30px; }
        .progress-steps { display: flex; justify-content: space-between; margin-bottom: 10px; }
        .progress-step { text-align: center; flex: 1; cursor: pointer; opacity: 0.7; }
        .progress-step.completed { opacity: 1; }
        .step-indicator { 
          width: 30px; height: 30px; border-radius: 50%; background: #2D3748; 
          color: white; display: flex; align-items: center; justify-content: center; 
          margin: 0 auto 5px; font-weight: 600;
        }
        .step-indicator.active { background: #4299E1; }
        .step-label { font-size: 12px; color: #A0AEC0; }
        .progress-track { height: 4px; background: #2D3748; border-radius: 2px; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #4299E1, #48BB78); transition: width 0.3s; }
        
        .form-section { 
          padding: 32px; background: #1A202C; border-radius: 24px; color: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        h2 { margin: 0 0 8px 0; color: #4299E1; }
        .subtitle { color: #A0AEC0; margin-bottom: 24px; }
        
        .step-content h3 { margin: 0 0 20px 0; color: #FFD700; }
        
        .options-grid { display: flex; flex-direction: column; gap: 12px; }
        .option-card { 
          display: flex; align-items: center; gap: 12px; padding: 16px; 
          background: #2D3748; border: 1px solid #4A5568; border-radius: 12px;
          cursor: pointer; transition: all 0.2s;
        }
        .option-card:hover { border-color: #4299E1; background: #364153; }
        .option-card.selected { border-color: #4299E1; background: rgba(66,153,225,0.1); }
        .radio-circle { 
          width: 20px; height: 20px; border-radius: 50%; border: 2px solid #A0AEC0;
          display: flex; align-items: center; justify-content: center;
        }
        .radio-circle.checked { border-color: #4299E1; }
        .radio-dot { width: 10px; height: 10px; border-radius: 50%; background: #4299E1; }
        .option-label { color: white; }
        
        .transaction-grid { 
          display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
          gap: 12px; margin-top: 10px; 
        }
        .transaction-card { 
          padding: 20px; background: #2D3748; border: 1px solid #4A5568; 
          border-radius: 12px; text-align: center; cursor: pointer; position: relative;
          transition: all 0.2s;
        }
        .transaction-card:hover { border-color: #4299E1; transform: translateY(-2px); }
        .transaction-card.selected { 
          border-color: #FFD700; background: rgba(255,215,0,0.1);
          box-shadow: 0 4px 12px rgba(255,215,0,0.2);
        }
        .selected-check { 
          position: absolute; top: 8px; right: 8px; width: 20px; height: 20px;
          background: #FFD700; border-radius: 50%; color: black; font-weight: bold;
          display: flex; align-items: center; justify-content: center;
        }
        
        .summary-card { 
          padding: 16px; background: #2D3748; border-radius: 12px; margin-bottom: 20px;
        }
        .summary-row { 
          display: flex; justify-content: space-between; padding: 8px 0;
          border-bottom: 1px solid #4A5568;
        }
        .summary-row:last-child { border-bottom: none; }
        .summary-row span { color: #A0AEC0; }
        .summary-row strong { color: #FFD700; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; color: white; }
        .input-wrapper { position: relative; }
        .currency { 
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          color: #A0AEC0; font-weight: 600;
        }
        .input-wrapper input { 
          width: 100%; padding: 12px 12px 12px 40px; background: #2D3748;
          border: 1px solid #4A5568; border-radius: 8px; color: white; font-size: 16px;
        }
        .input-wrapper input:focus { outline: none; border-color: #4299E1; }
        small { display: block; margin-top: 4px; color: #A0AEC0; font-size: 12px; }
        
        .step-navigation { 
          display: flex; justify-content: space-between; margin-top: 30px;
        }
        .secondary-btn { 
          padding: 12px 24px; background: transparent; border: 1px solid #4A5568;
          border-radius: 8px; color: white; cursor: pointer; font-weight: 500;
        }
        .secondary-btn:hover { background: #2D3748; }
        .primary-btn { 
          padding: 12px 24px; background: #4299E1; border: none; border-radius: 8px;
          color: white; cursor: pointer; font-weight: 600; margin-left: auto;
        }
        .primary-btn:hover { background: #3182CE; }
        .calculate-btn { 
          width: 100%; padding: 14px; background: #48BB78; border: none;
          border-radius: 8px; color: white; font-weight: 600; cursor: pointer;
          font-size: 16px;
        }
        .calculate-btn:hover { background: #38A169; }
        .calculate-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        
        .error-message { 
          margin-top: 20px; padding: 12px; background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20; border-radius: 8px; color: #FBD38D;
        }
        
        .results-card { 
          margin-top: 30px; padding: 24px; background: #2D3748; border-radius: 16px;
        }
        .rate-display { 
          text-align: center; padding: 30px; background: #1A202C;
          border-radius: 12px; margin-bottom: 20px;
        }
        .rate-percentage { font-size: 64px; font-weight: 800; color: #FFD700; line-height: 1; }
        .rate-description { color: #A0AEC0; margin-top: 10px; }
        
        .result-details { margin-bottom: 20px; }
        .detail-row { 
          display: flex; justify-content: space-between; padding: 12px;
          border-bottom: 1px solid #4A5568;
        }
        .detail-row.highlight { 
          background: rgba(66,153,225,0.1); border-radius: 8px;
          border-bottom: none; margin: 10px 0;
        }
        .detail-row.total { 
          background: rgba(72,187,120,0.1); border-radius: 8px;
          border-bottom: none; font-weight: 600;
        }
        .detail-row span:last-child { color: #FFD700; font-weight: 600; }
        
        .info-box { 
          padding: 16px; background: #1A202C; border-radius: 8px;
          border-left: 4px solid #4299E1;
        }
        .info-box h4 { margin: 0 0 12px 0; color: #4299E1; }
        .info-box ul { margin: 0; padding-left: 20px; color: #CBD5E0; }
        .info-box li { margin-bottom: 8px; }
        
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          z-index: 10000; padding: 20px;
        }
        .modal-card {
          background: #1A202C; border-radius: 24px; padding: 32px;
          max-width: 400px; width: 100%; position: relative;
        }
        .close-btn {
          position: absolute; top: 16px; right: 16px;
          background: none; border: none; color: #A0AEC0; font-size: 20px;
          cursor: pointer;
        }
        .modal-icon { font-size: 48px; text-align: center; margin-bottom: 16px; }
        .modal-card h3 { text-align: center; margin: 0 0 8px 0; color: white; }
        .modal-card p { text-align: center; color: #CBD5E0; margin-bottom: 8px; }
        .balance { color: #FFD700 !important; font-weight: 600; }
        .credit-note { 
          text-align: center; padding: 12px; background: rgba(255,215,0,0.1);
          border-radius: 8px; color: #FFD700; margin: 20px 0;
        }
        .modal-actions { display: flex; gap: 12px; }
        .modal-actions button {
          flex: 1; padding: 12px; border-radius: 8px; cursor: pointer;
          font-weight: 600;
        }
        .modal-actions button:first-child {
          background: transparent; border: 1px solid #4A5568; color: white;
        }
        .modal-actions button:last-child {
          background: #4299E1; border: none; color: white;
        }
      `})]})},nW=({isLoggedIn:e,creditBalance:t,setCreditBalance:r,restoreData:n,clearRestoreData:a,requireLogin:o,requireCredits:c})=>{const[u,f]=T.useState(""),[p,h]=T.useState(null),[m,v]=T.useState(!1),[b,w]=T.useState(""),[_,x]=T.useState(!1),[S,C]=T.useState(!1),O=async()=>{if(!e){x(!0);return}if(t<1){C(!0);return}const E=Te(u);if(E<=0){w("Please enter a valid rent amount");return}v(!0),w("");try{const A=await Fe.post("/api/v1/calculate/rent",{rent:E});A.data.success?(r(N=>N-1),h(A.data.data)):w(A.data.error||"Calculation failed")}catch{w("Network error. Please try again.")}finally{v(!1)}};return l.jsxs("div",{className:"full-width-calculator",children:[l.jsxs("div",{className:"form-section",style:{maxWidth:"600px",margin:"0 auto"},children:[l.jsx("h2",{children:"Rent Relief Calculator"}),l.jsx("p",{className:"subtitle",children:"Claim up to ₦500,000 deduction on your rent"}),l.jsx("div",{className:"info-card",children:l.jsx("p",{children:"📌 If you pay rent for your home or shop, you can deduct 20% of your annual rent from your taxable income, up to ₦500,000."})}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"How much rent do you pay per year? (₦)"}),l.jsxs("div",{className:"input-wrapper",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",value:u,onChange:E=>f(Js(E.target.value)),placeholder:"e.g., 1,500,000"})]}),l.jsx("small",{children:"Enter the total rent you pay in one year"})]}),u&&Te(u)>0&&l.jsxs("div",{className:"preview-box",children:[l.jsx("span",{children:"20% of your rent: "}),l.jsx("strong",{children:_e(Te(u)*.2)}),Te(u)*.2>5e5&&l.jsx("div",{className:"cap-notice",children:"(Capped at ₦500,000)"})]}),l.jsx("button",{className:"calculate-btn",onClick:O,disabled:m,children:m?"Calculating...":"Calculate Rent Relief (1 credit)"}),b&&l.jsxs("div",{className:"error-message",children:["⚠️ ",b]}),p&&l.jsxs("div",{className:"results-card",children:[l.jsx("h3",{children:"Your Rent Relief"}),l.jsxs("div",{className:"result-grid",children:[l.jsxs("div",{className:"result-item",children:[l.jsx("span",{children:"Annual Rent"}),l.jsx("span",{children:_e(p.rent)})]}),l.jsxs("div",{className:"result-item",children:[l.jsx("span",{children:"20% of Rent"}),l.jsx("span",{children:_e(p.rent*.2)})]}),l.jsxs("div",{className:"result-item",children:[l.jsx("span",{children:"Maximum Allowed"}),l.jsx("span",{children:_e(p.max_relief)})]}),l.jsxs("div",{className:"result-item highlight",children:[l.jsx("span",{children:"Your Rent Relief"}),l.jsx("span",{children:_e(p.relief)})]})]}),p.is_capped&&l.jsx("div",{className:"cap-message",children:"⚠️ Your relief is capped at ₦500,000 (NTA 2025 limit)"}),l.jsxs("div",{className:"tax-savings",children:[l.jsx("span",{children:"Estimated tax saving: "}),l.jsx("strong",{children:_e(p.relief*.2)})]}),l.jsxs("div",{className:"documents-required",children:[l.jsx("h4",{children:"📋 Keep these documents"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Tenancy Agreement"}),l.jsx("li",{children:"Rent Receipts"}),l.jsx("li",{children:"Landlord's TIN (if available)"})]})]})]})]}),l.jsx("style",{children:`
        .form-section { padding: 32px; background: rgba(26,30,36,0.95); border-radius: 24px; }
        h2 { margin: 0 0 8px 0; color: white; }
        .subtitle { color: #A0AEC0; margin-bottom: 24px; }
        
        .info-card { padding: 16px; background: rgba(66,153,225,0.1); border-radius: 12px; margin-bottom: 24px; color: #CBD5E0; }
        
        .form-group { margin-bottom: 20px; }
        .form-group label { display: block; margin-bottom: 8px; color: white; }
        .input-wrapper { position: relative; display: flex; align-items: center; }
        .currency { position: absolute; left: 12px; color: #A0AEC0; }
        .input-wrapper input { width: 100%; padding: 12px 12px 12px 40px; background: #2D3748; border: 1px solid #4A5568; border-radius: 8px; color: white; }
        small { display: block; margin-top: 4px; color: #A0AEC0; font-size: 12px; }
        
        .preview-box { padding: 12px; background: #2D3748; border-radius: 8px; margin-bottom: 20px; }
        .preview-box strong { color: #FFD700; margin-left: 5px; }
        .cap-notice { color: #DD6B20; font-size: 13px; margin-top: 5px; }
        
        .calculate-btn { width: 100%; padding: 14px; background: #48BB78; border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer; }
        .calculate-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        
        .error-message { margin-top: 20px; padding: 12px; background: rgba(221,107,32,0.1); border: 1px solid #DD6B20; border-radius: 8px; color: #FBD38D; }
        
        .results-card { margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; }
        .results-card h3 { margin: 0 0 20px 0; color: #4299E1; }
        
        .result-grid { display: grid; gap: 10px; margin-bottom: 20px; }
        .result-item { display: flex; justify-content: space-between; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px; }
        .result-item.highlight { background: rgba(72,187,120,0.2); border: 1px solid #48BB78; }
        
        .cap-message { padding: 12px; background: rgba(221,107,32,0.1); border-radius: 8px; color: #FBD38D; margin-bottom: 20px; }
        
        .tax-savings { text-align: center; padding: 15px; background: rgba(255,215,0,0.1); border-radius: 8px; margin-bottom: 20px; }
        .tax-savings span { color: #A0AEC0; }
        .tax-savings strong { color: #FFD700; font-size: 18px; margin-left: 5px; }
        
        .documents-required { padding: 15px; background: #2D3748; border-radius: 8px; }
        .documents-required h4 { margin: 0 0 10px 0; color: #CBD5E0; }
        .documents-required ul { margin: 0; padding-left: 20px; color: #A0AEC0; }
        .documents-required li { margin-bottom: 5px; }
      `})]})},iW=()=>{const[e,t]=T.useState("refund"),[r,n]=T.useState(null),a=[{id:"refund",label:"Refund Process",icon:"💰"},{id:"deadlines",label:"Deadlines",icon:"📅"},{id:"documents",label:"Documents",icon:"📎"},{id:"penalties",label:"Penalties",icon:"⚖️"},{id:"contacts",label:"Contacts",icon:"📞"},{id:"faq",label:"FAQ",icon:"❓"}],o=[{step:1,title:"File Your Return",description:"Complete your annual tax return showing the overpayment",details:"Submit through NRS e-filing portal. Ensure all income and deductions are accurate."},{step:2,title:"Attach Evidence",description:"Upload WHT certificates and proof of deductions",details:"Documents must be clear PDFs. Include: WHT certificates, rent receipts, pension statements."},{step:3,title:"Submit Application",description:"File Form A through NRS e-filing portal",details:"Complete refund request form and attach all documents."},{step:4,title:"Follow Up",description:"Contact Refund Desk if no response in 90 days",details:"Call 0700-REFUND-NRS or email refunds@nrs.gov.ng with your reference number."},{step:5,title:"Receive Payment",description:"Refund typically processed within 180 days",details:"Funds credited to your registered bank account."}],c=[{item:"Personal Income Tax – Annual Returns",deadline:"March 31st",penalty:"₦25,000 – ₦50,000",note:"For employed & self-employed individuals"},{item:"PAYE Remittance",deadline:"10th of following month",penalty:"10% + interest at CBN rate",note:"Employers must remit monthly"},{item:"VAT – Monthly Returns",deadline:"21st of following month",penalty:"₦50,000 + 5% per month",note:"For businesses registered for VAT"},{item:"Companies Income Tax – Annual",deadline:"6 months after year-end",penalty:"₦100,000 + 10% of tax due",note:"For all registered companies"}],u=[{name:"WHT Credit Notes/Certificates",required:!0,icon:"📄"},{name:"PAYE Deduction Schedules",required:!0,icon:"📊"},{name:"Rent Receipts & Tenancy Agreement",required:!1,icon:"🏠"},{name:"Pension Contribution Statements",required:!0,icon:"💰"},{name:"NHIS & NHF Payment Receipts",required:!1,icon:"🏥"},{name:"Tax Identification Number (TIN)",required:!0,icon:"🆔"},{name:"Valid ID (NIN, Driver's License, Passport)",required:!0,icon:"🪪"}],f=[{offense:"Late Filing (Individual)",penalty:"₦25,000",severity:"medium"},{offense:"Late Filing (Company)",penalty:"₦50,000",severity:"high"},{offense:"Late Payment",penalty:"10% + interest",severity:"critical"},{offense:"Failure to Register",penalty:"₦25,000",severity:"medium"},{offense:"Failure to Remit WHT",penalty:"200% of amount",severity:"critical"}],p=[{type:"Website",value:"https://nrs.gov.ng",icon:"🌐"},{type:"General Helpline",value:"0700-CALL-NRS",icon:"📞"},{type:"Business Desk",value:"0700-BIZ-TAX",icon:"💼"},{type:"Refund Desk",value:"0700-REFUND-NRS",icon:"💰"},{type:"Email Support",value:"support@nrs.gov.ng",icon:"📧"}],h=[{q:"How long does it take to get a tax refund?",a:"Typically 90–180 days from application date. You can track your refund status on the NRS e‑filing portal using your reference number."},{q:"Can I file my taxes without an accountant?",a:"Yes! Individuals can file directly through the NRS e‑filing portal."},{q:"What happens if I miss the deadline?",a:"Penalties apply immediately. Late filing: ₦25k–₦50k. Late payment: 10% + interest."},{q:"How do I get my Tax Identification Number (TIN)?",a:"Register online at nrs.gov.ng/register. You'll receive your TIN via email within 48 hours."}],m=v=>{switch(v){case"critical":return"#B22222";case"high":return"#FF8C00";case"medium":return"#FFD700";default:return"#4299E1"}};return l.jsxs("div",{className:"nrs-guidance",children:[l.jsxs("div",{className:"guidance-header",children:[l.jsx("h2",{children:"NRS Tax Guidance"}),l.jsx("p",{className:"subtitle",children:"Nigeria Revenue Service • NTA 2025"})]}),l.jsx("div",{className:"guidance-tabs",children:a.map(v=>l.jsxs("button",{className:`tab-btn ${e===v.id?"active":""}`,onClick:()=>t(v.id),children:[l.jsx("span",{className:"tab-icon",children:v.icon}),l.jsx("span",{className:"tab-label",children:v.label})]},v.id))}),l.jsxs("div",{className:"guidance-content",children:[e==="refund"&&l.jsxs("div",{className:"refund-section",children:[l.jsx("h3",{children:"How to Claim Your Tax Refund"}),l.jsx("div",{className:"refund-steps",children:o.map(v=>l.jsxs("div",{className:"step-card",children:[l.jsx("div",{className:"step-number",children:v.step}),l.jsx("h4",{children:v.title}),l.jsx("p",{children:v.description}),l.jsx("div",{className:"step-details",onClick:()=>n(r===v.step?null:v.step),children:r===v.step?"▼ Less info":"▶ More info"}),r===v.step&&l.jsx("div",{className:"step-expanded",children:v.details})]},v.step))}),l.jsxs("div",{className:"tip-card",children:[l.jsx("div",{className:"tip-icon",children:"💡"}),l.jsxs("div",{className:"tip-content",children:[l.jsx("h4",{children:"Pro Tip"}),l.jsx("p",{children:"File your refund claim as soon as you discover overpayment. Keep all documents for 6 years."})]})]})]}),e==="deadlines"&&l.jsxs("div",{className:"deadlines-section",children:[l.jsx("h3",{children:"Filing Deadlines"}),l.jsx("div",{className:"deadlines-grid",children:c.map((v,b)=>l.jsxs("div",{className:"deadline-card",children:[l.jsx("h4",{children:v.item}),l.jsx("div",{className:"deadline-date",children:v.deadline}),l.jsx("div",{className:"deadline-note",children:v.note}),l.jsxs("div",{className:"deadline-penalty",children:[l.jsx("strong",{children:"Penalty:"})," ",v.penalty]})]},b))})]}),e==="documents"&&l.jsxs("div",{className:"documents-section",children:[l.jsx("h3",{children:"Required Documents"}),l.jsx("p",{className:"section-hint",children:"Keep these documents ready when filing."}),l.jsx("div",{className:"documents-grid",children:u.map((v,b)=>l.jsxs("div",{className:"document-card",children:[l.jsx("div",{className:"document-icon",children:v.icon}),l.jsxs("div",{className:"document-info",children:[l.jsx("div",{className:"document-name",children:v.name}),v.required&&l.jsx("span",{className:"required-badge",children:"Required"})]})]},b))}),l.jsxs("div",{className:"retention-note",children:[l.jsx("span",{className:"note-icon",children:"⏰"}),l.jsxs("div",{className:"note-content",children:[l.jsx("strong",{children:"Document Retention Period:"})," Keep all documents for 6 years from the date of filing."]})]})]}),e==="penalties"&&l.jsxs("div",{className:"penalties-section",children:[l.jsx("h3",{children:"Penalties for Non‑Compliance"}),l.jsx("div",{className:"penalties-list",children:f.map((v,b)=>{const w=m(v.severity);return l.jsxs("div",{className:"penalty-item",children:[l.jsxs("div",{className:"penalty-header",children:[l.jsx("span",{className:"penalty-offense",children:v.offense}),l.jsx("span",{className:"severity-badge",style:{background:`${w}20`,color:w},children:v.severity})]}),l.jsx("div",{className:"penalty-amount",children:v.penalty})]},b)})}),l.jsxs("div",{className:"compliance-card",children:[l.jsx("div",{className:"compliance-icon",children:"✅"}),l.jsxs("div",{className:"compliance-content",children:[l.jsx("h4",{children:"Stay Compliant"}),l.jsx("p",{children:"Register with NRS, file on time, keep accurate records, and pay taxes when due."})]})]})]}),e==="contacts"&&l.jsxs("div",{className:"contacts-section",children:[l.jsx("h3",{children:"Nigeria Revenue Service (NRS) Contacts"}),l.jsx("div",{className:"contacts-grid",children:p.map((v,b)=>l.jsxs("div",{className:"contact-card",children:[l.jsx("div",{className:"contact-icon",children:v.icon}),l.jsxs("div",{className:"contact-details",children:[l.jsx("div",{className:"contact-type",children:v.type}),l.jsx("div",{className:"contact-value",children:v.value})]})]},b))})]}),e==="faq"&&l.jsxs("div",{className:"faq-section",children:[l.jsx("h3",{children:"Frequently Asked Questions"}),l.jsx("div",{className:"faq-list",children:h.map((v,b)=>l.jsxs("div",{className:"faq-item",onClick:()=>n(r===b?null:b),children:[l.jsxs("div",{className:"faq-question",children:[l.jsxs("span",{children:["Q: ",v.q]}),l.jsx("span",{className:"faq-expand",children:r===b?"−":"+"})]}),r===b&&l.jsx("div",{className:"faq-answer",children:v.a})]},b))})]})]}),l.jsx("style",{children:`
        .nrs-guidance {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          color: white;
        }
        .guidance-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .guidance-header h2 {
          margin: 0 0 8px 0;
          color: #4299E1;
        }
        .guidance-header .subtitle {
          color: #A0AEC0;
          margin: 0;
        }
        
        .guidance-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 32px;
          padding: 4px;
          background: #2D3748;
          border-radius: 40px;
          flex-wrap: wrap;
        }
        .tab-btn {
          flex: 1;
          padding: 12px 8px;
          background: transparent;
          border: none;
          border-radius: 30px;
          color: #A0AEC0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          min-width: 100px;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          color: white;
        }
        .tab-icon {
          font-size: 16px;
        }
        .tab-label {
          font-size: 13px;
        }
        
        .guidance-content h3 {
          margin: 0 0 24px 0;
          color: #4299E1;
        }
        
        /* Refund Section */
        .refund-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .step-card {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
          position: relative;
        }
        .step-number {
          width: 28px;
          height: 28px;
          background: #4299E1;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .step-card h4 {
          margin: 0 0 8px 0;
          color: #FFD700;
        }
        .step-card p {
          color: #CBD5E0;
          font-size: 14px;
          margin-bottom: 12px;
        }
        .step-details {
          color: #4299E1;
          font-size: 13px;
          cursor: pointer;
        }
        .step-expanded {
          margin-top: 12px;
          padding: 12px;
          background: #1A202C;
          border-radius: 8px;
          color: #CBD5E0;
          font-size: 13px;
        }
        
        /* Deadlines Section */
        .deadlines-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
        }
        .deadline-card {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
          border-left: 4px solid #4299E1;
        }
        .deadline-card h4 {
          margin: 0 0 12px 0;
          color: #FFD700;
          font-size: 16px;
        }
        .deadline-date {
          font-size: 20px;
          font-weight: 700;
          color: #4299E1;
          margin-bottom: 8px;
        }
        .deadline-note {
          color: #CBD5E0;
          font-size: 13px;
          margin-bottom: 12px;
        }
        .deadline-penalty {
          padding: 8px;
          background: #1A202C;
          border-radius: 6px;
          color: #FBD38D;
          font-size: 13px;
        }
        
        /* Documents Section */
        .documents-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
          margin-bottom: 24px;
        }
        .document-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
        }
        .document-icon {
          font-size: 24px;
        }
        .document-info {
          flex: 1;
        }
        .document-name {
          font-weight: 500;
          margin-bottom: 4px;
        }
        .required-badge {
          background: #4299E1;
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 10px;
        }
        .retention-note {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
          border-left: 4px solid #48BB78;
        }
        .note-icon {
          font-size: 24px;
        }
        .note-content {
          color: #CBD5E0;
          font-size: 14px;
        }
        
        /* Penalties Section */
        .penalties-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .penalty-item {
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
        }
        .penalty-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .penalty-offense {
          font-weight: 600;
        }
        .severity-badge {
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          text-transform: uppercase;
        }
        .penalty-amount {
          color: #FBD38D;
          font-weight: 600;
        }
        .compliance-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #2D3748;
          border-radius: 12px;
          border-left: 4px solid #48BB78;
        }
        .compliance-icon {
          font-size: 32px;
        }
        .compliance-content h4 {
          margin: 0 0 4px 0;
          color: #48BB78;
        }
        .compliance-content p {
          margin: 0;
          color: #CBD5E0;
        }
        
        /* Contacts Section */
        .contacts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .contact-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
        }
        .contact-icon {
          font-size: 24px;
        }
        .contact-details {
          flex: 1;
        }
        .contact-type {
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 2px;
        }
        .contact-value {
          font-weight: 600;
          color: #FFD700;
        }
        
        /* FAQ Section */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
          cursor: pointer;
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 500;
        }
        .faq-expand {
          color: #4299E1;
          font-size: 18px;
        }
        .faq-answer {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid #4A5568;
          color: #CBD5E0;
          line-height: 1.6;
        }
        
        .tip-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: #2D3748;
          border-radius: 12px;
          border-left: 4px solid #FFD700;
          margin-top: 24px;
        }
        .tip-icon {
          font-size: 32px;
        }
        .tip-content h4 {
          margin: 0 0 4px 0;
          color: #FFD700;
        }
        .tip-content p {
          margin: 0;
          color: #CBD5E0;
        }
        
        .section-hint {
          color: #A0AEC0;
          margin-bottom: 20px;
        }
        
        @media (max-width: 768px) {
          .guidance-tabs {
            flex-direction: column;
          }
          .tab-btn {
            width: 100%;
          }
        }
      `})]})},aW=({onSuccess:e})=>{const[t,r]=T.useState(!1),[n,a]=T.useState(""),o=$T({onSuccess:async c=>{r(!0),a("");try{console.log("Google code received:",c);const u=await Fe.post("/api/auth/google",{code:c.code});u.data.success&&(localStorage.setItem("access_token",u.data.access_token),localStorage.setItem("refresh_token",u.data.refresh_token),localStorage.setItem("user",JSON.stringify(u.data.user)),e(u.data.user))}catch(u){console.error("Login error:",u),a(u.response?.data?.error||"Google login failed")}finally{r(!1)}},onError:c=>{console.error("Google login error:",c),a("Google login failed. Please try again.")},flow:"auth-code"});return l.jsxs("div",{className:"google-login-container",children:[n&&l.jsxs("div",{className:"error-message",children:["⚠️ ",n]}),l.jsx("button",{onClick:()=>o(),disabled:t,className:"google-btn",children:t?l.jsx("div",{className:"spinner"}):l.jsxs(l.Fragment,{children:[l.jsx("img",{src:"https://www.google.com/favicon.ico",alt:"Google",className:"google-icon"}),"Sign in with Google"]})}),l.jsx("style",{children:`
        .google-login-container {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }
        .error-message {
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 16px;
          color: #ff6b6b;
          text-align: center;
        }
        .google-btn {
          width: 100%;
          padding: 14px 24px;
          background: white;
          border: 1px solid #ddd;
          border-radius: 40px;
          color: #333;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.2s;
        }
        .google-btn:hover {
          background: #f8f8f8;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .google-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .google-icon {
          width: 20px;
          height: 20px;
        }
        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #f3f3f3;
          border-top: 2px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `})]})},oW=({onLoginSuccess:e})=>l.jsxs("div",{className:"auth-container",children:[l.jsxs("div",{className:"auth-card",children:[l.jsxs("div",{className:"auth-header",children:[l.jsx("h2",{children:"Welcome to Zero Mumu Tax"}),l.jsx("p",{children:"Sign in to calculate your taxes correctly"})]}),l.jsxs("div",{className:"auth-body",children:[l.jsx(aW,{onSuccess:e}),l.jsx("div",{className:"auth-divider",children:l.jsx("span",{children:"🇳🇬"})}),l.jsxs("div",{className:"auth-footer",children:[l.jsxs("p",{className:"free-credits",children:["✨ New users get ",l.jsx("strong",{children:"10 free credits"})," instantly!"]}),l.jsx("p",{className:"privacy-note",children:"By signing in, you agree to our Terms of Service and Privacy Policy. We only use your email to identify your account."})]})]})]}),l.jsx("style",{children:`
        .auth-container {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .auth-card {
          background: rgba(26, 30, 36, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 40px;
          max-width: 450px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }
        .auth-header h2 {
          color: white;
          font-size: 28px;
          margin: 0 0 8px 0;
        }
        .auth-header p {
          color: var(--text-muted);
          font-size: 14px;
          margin: 0;
        }
        .auth-divider {
          text-align: center;
          margin: 24px 0;
          font-size: 24px;
        }
        .auth-footer {
          text-align: center;
        }
        .free-credits {
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 40px;
          padding: 12px 20px;
          color: #FFD700;
          font-size: 14px;
          margin-bottom: 16px;
        }
        .privacy-note {
          color: var(--text-muted);
          font-size: 12px;
          line-height: 1.5;
        }
      `})]}),sW=({calculation:e,onClose:t,onUse:r,creditBalance:n,setCreditBalance:a,setActiveTab:o})=>{const[c,u]=T.useState("details"),[f,p]=T.useState(!1);if(!e)return l.jsx("div",{className:"modal-overlay",children:l.jsx("div",{className:"modal-card",children:"No calculation data available"})});console.log("SavedCalculationViewer - calculation type:",e.calculator_type);const h=S=>{try{return new Date(S).toLocaleDateString("en-NG",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return"Invalid date"}},m=S=>!S&&S!==0?"₦0":_e(S),v=S=>S.replace(/_/g," ").replace(/([A-Z])/g," $1").replace(/^./,C=>C.toUpperCase()),b=()=>{const S=e.result_data||{},C=e.input_data||{};return e.calculator_type==="pit"?S.exempt?l.jsxs("div",{className:"details-container text-center",children:[l.jsx("div",{className:"emoji-large",children:"🎉"}),l.jsx("h3",{className:"success-text",children:"Tax Exempt"}),l.jsx("p",{children:"Your income is below the minimum wage."}),l.jsxs("p",{className:"highlight-text",children:["Minimum Wage: ",m(S.minimum_wage)]})]}):l.jsxs("div",{className:"details-container",children:[l.jsx("h4",{children:"💰 Income Details"}),l.jsx("table",{className:"details-table",children:l.jsxs("tbody",{children:[C.employment_salary&&l.jsxs("tr",{children:[l.jsx("td",{children:"Employment Salary"}),l.jsx("td",{className:"amount",children:m(C.employment_salary)})]}),C.employment_basic&&l.jsxs("tr",{children:[l.jsx("td",{children:"Basic Salary"}),l.jsx("td",{className:"amount",children:m(C.employment_basic)})]}),C.employment_housing&&l.jsxs("tr",{children:[l.jsx("td",{children:"Housing Allowance"}),l.jsx("td",{className:"amount",children:m(C.employment_housing)})]}),C.employment_transport&&l.jsxs("tr",{children:[l.jsx("td",{children:"Transport Allowance"}),l.jsx("td",{className:"amount",children:m(C.employment_transport)})]}),C.employment_bonus&&l.jsxs("tr",{children:[l.jsx("td",{children:"13th Month Bonus"}),l.jsx("td",{className:"amount",children:m(C.employment_bonus)})]}),C.business_profit&&l.jsxs("tr",{children:[l.jsx("td",{children:"Business Profit"}),l.jsx("td",{className:"amount",children:m(C.business_profit)})]}),C.pension_income&&l.jsxs("tr",{children:[l.jsx("td",{children:"Pension Income"}),l.jsx("td",{className:"amount",children:m(C.pension_income)})]})]})}),l.jsx("h4",{style:{marginTop:"24px"},children:"🧾 Deductions Claimed"}),l.jsx("table",{className:"details-table",children:l.jsxs("tbody",{children:[C.pension_rsa&&l.jsxs("tr",{children:[l.jsx("td",{children:"RSA Pension"}),l.jsx("td",{className:"amount",children:m(C.pension_rsa)})]}),C.nhis&&l.jsxs("tr",{children:[l.jsx("td",{children:"NHIS"}),l.jsx("td",{className:"amount",children:m(C.nhis)})]}),C.nhf&&l.jsxs("tr",{children:[l.jsx("td",{children:"NHF"}),l.jsx("td",{className:"amount",children:m(C.nhf)})]}),C.rent_paid&&l.jsxs("tr",{children:[l.jsx("td",{children:"Rent Paid"}),l.jsx("td",{className:"amount",children:m(C.rent_paid)})]}),C.paye_deducted&&l.jsxs("tr",{children:[l.jsx("td",{children:"PAYE Deducted"}),l.jsx("td",{className:"amount",children:m(C.paye_deducted)})]}),C.wht_credits&&l.jsxs("tr",{children:[l.jsx("td",{children:"WHT Credits"}),l.jsx("td",{className:"amount",children:m(C.wht_credits)})]})]})}),l.jsx("h4",{style:{marginTop:"24px"},children:"📊 Tax Calculation Results"}),l.jsx("table",{className:"details-table",children:l.jsxs("tbody",{children:[l.jsxs("tr",{className:"total-row",children:[l.jsx("td",{children:l.jsx("strong",{children:"Total Income"})}),l.jsx("td",{className:"amount",children:l.jsx("strong",{children:m(S.total_income)})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Total Deductions"}),l.jsx("td",{className:"amount",children:m(S.total_deductions)})]}),l.jsxs("tr",{className:"highlight-row",children:[l.jsx("td",{children:l.jsx("strong",{children:"Taxable Income"})}),l.jsx("td",{className:"amount",children:l.jsx("strong",{children:m(S.chargeable_income)})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Tax Payable"}),l.jsx("td",{className:"amount",children:m(S.tax_payable)})]}),S.paye_deducted>0&&l.jsxs("tr",{children:[l.jsx("td",{children:"PAYE Already Paid"}),l.jsx("td",{className:"amount",children:m(S.paye_deducted)})]}),l.jsxs("tr",{className:`result-row ${S.result_type}`,children:[l.jsx("td",{children:l.jsx("strong",{children:"Final Result"})}),l.jsx("td",{className:"amount",children:l.jsx("strong",{children:S.result_type==="refund"?`REFUND: ${m(S.refund_amount)}`:S.result_type==="additional"?`TAX DUE: ${m(S.additional_tax)}`:"BALANCED"})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Effective Tax Rate"}),l.jsxs("td",{className:"amount",children:[S.effective_rate||0,"%"]})]})]})})]}):e.calculator_type==="cit"?l.jsxs("div",{className:"details-container",children:[l.jsx("h4",{children:"🏢 Company Information"}),l.jsx("table",{className:"details-table",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Business Name"}),l.jsx("td",{className:"amount",children:C.business_name||"N/A"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Business Type"}),l.jsx("td",{className:"amount",children:C.business_type||"N/A"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Annual Turnover"}),l.jsx("td",{className:"amount",children:m(C.turnover)})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Total Assets"}),l.jsx("td",{className:"amount",children:m(C.total_assets)})]})]})}),l.jsx("h4",{style:{marginTop:"24px"},children:"📊 Tax Calculation"}),l.jsx("table",{className:"details-table",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:"Company Classification"}),l.jsx("td",{className:"amount",children:S.company_tier==="small"?"Small Company (0% CIT)":"Large Company (30% CIT)"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:"Assessable Profit"}),l.jsx("td",{className:"amount",children:m(S.assessable_profit)})]}),S.cit>0&&l.jsxs("tr",{children:[l.jsxs("td",{children:["CIT (",S.cit_rate,"%)"]}),l.jsx("td",{className:"amount",children:m(S.cit)})]}),S.levy>0&&l.jsxs("tr",{children:[l.jsx("td",{children:"Development Levy"}),l.jsx("td",{className:"amount",children:m(S.levy)})]}),l.jsxs("tr",{className:"total-row",children:[l.jsx("td",{children:l.jsx("strong",{children:"TOTAL TAX PAYABLE"})}),l.jsx("td",{className:"amount",children:l.jsx("strong",{children:m(S.total_tax_payable)})})]})]})})]}):l.jsx("pre",{className:"json-viewer",children:JSON.stringify(e,null,2)})},w=()=>{const S=e.input_data||{},C=Object.entries(S).filter(([O,E])=>E&&E!=="0"&&E!==""&&E!==0);return C.length===0?l.jsx("div",{className:"empty-state",children:l.jsx("p",{children:"No input data available for this calculation."})}):l.jsxs("div",{className:"inputs-section",children:[l.jsx("h4",{children:"📝 What You Told Us"}),l.jsx("div",{className:"inputs-grid",children:C.map(([O,E])=>l.jsxs("div",{className:"input-item",children:[l.jsx("span",{className:"input-label",children:v(O)}),l.jsx("span",{className:"input-value",children:typeof E=="number"?m(E):E})]},O))}),l.jsx("p",{className:"inputs-note",children:"These are the details you provided when saving this calculation."})]})},_=()=>{const S=e.result_data||{},C=e.calculator_type,O=()=>{o?(o("guidance"),t()):window.location.href="/?tab=guidance"},E=()=>{o&&(o(C),t(),setTimeout(()=>{window.restoreWhatIf&&window.restoreWhatIf(e.input_data)},500))};return l.jsxs("div",{className:"next-steps-section",children:[l.jsx("h4",{children:"📋 What To Do Next"}),C==="pit"&&S.result_type==="refund"&&l.jsxs("div",{className:"step-card highlight",children:[l.jsx("div",{className:"step-number",children:"1"}),l.jsxs("div",{className:"step-content",children:[l.jsx("h5",{children:"🎉 Claim Your Refund"}),l.jsxs("p",{children:["You overpaid by ",l.jsx("strong",{children:m(S.refund_amount)}),"."]}),l.jsx("button",{className:"step-btn",onClick:O,children:"See Refund Process →"})]})]}),C==="pit"&&S.result_type==="additional"&&l.jsxs("div",{className:"step-card highlight warning",children:[l.jsx("div",{className:"step-number",children:"1"}),l.jsxs("div",{className:"step-content",children:[l.jsx("h5",{children:"⚠️ Pay Your Tax"}),l.jsxs("p",{children:["You owe ",l.jsx("strong",{children:m(S.additional_tax)}),"."]}),l.jsx("button",{className:"step-btn",onClick:O,children:"Learn How to Pay →"})]})]}),l.jsxs("div",{className:"step-card",children:[l.jsx("div",{className:"step-number",children:"2"}),l.jsxs("div",{className:"step-content",children:[l.jsx("h5",{children:"🔄 Use This Calculation Again"}),l.jsx("button",{className:"step-btn",onClick:r,children:"Load into Calculator →"})]})]}),l.jsxs("div",{className:"step-card",children:[l.jsx("div",{className:"step-number",children:"3"}),l.jsxs("div",{className:"step-content",children:[l.jsx("h5",{children:"🔀 Try What-If Comparison"}),l.jsx("button",{className:"step-btn",onClick:E,disabled:n<2,children:n<2?"Need 2 credits":"Compare Scenarios →"})]})]}),l.jsxs("div",{className:"documents-reminder",children:[l.jsx("h5",{children:"📎 Remember to Keep:"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Payslips and income records"}),l.jsx("li",{children:"Rent receipts (if you claimed rent relief)"}),l.jsx("li",{children:"Pension contribution statements"}),l.jsx("li",{children:"NHIS/NHF payment receipts"}),l.jsx("li",{children:"WHT credit certificates"})]})]})]})},x=()=>{if(n<3){alert("You need 3 credits to generate a report");return}p(!0)};return l.jsxs("div",{className:"modal-overlay",children:[l.jsxs("div",{className:"viewer-modal",children:[l.jsxs("div",{className:"viewer-header",children:[l.jsxs("div",{className:"viewer-title",children:[l.jsx("span",{className:"viewer-icon",children:"📋"}),l.jsxs("div",{children:[l.jsxs("h2",{children:[e.calculator_type?.toUpperCase()||"Unknown"," Calculation"]}),l.jsxs("p",{className:"viewer-date",children:["Saved on ",h(e.created_at)]})]})]}),l.jsx("button",{className:"close-btn",onClick:t,children:"✕"})]}),l.jsxs("div",{className:"viewer-tabs",children:[l.jsx("button",{className:`tab-btn ${c==="details"?"active":""}`,onClick:()=>u("details"),children:"📊 Full Details"}),l.jsx("button",{className:`tab-btn ${c==="inputs"?"active":""}`,onClick:()=>u("inputs"),children:"📝 What You Entered"}),l.jsx("button",{className:`tab-btn ${c==="next"?"active":""}`,onClick:()=>u("next"),children:"📋 Next Steps"})]}),l.jsxs("div",{className:"viewer-content",children:[c==="details"&&b(),c==="inputs"&&w(),c==="next"&&_()]}),l.jsxs("div",{className:"viewer-actions",children:[l.jsx("button",{className:"secondary-btn",onClick:t,children:"Close"}),l.jsx("button",{className:"primary-btn",onClick:r,children:"🔄 Use This Calculation"}),l.jsx("button",{className:"report-btn",onClick:x,disabled:n<3,children:"📥 Download Comprehensive Tax Report (3 credits)"})]})]}),f&&(e.calculator_type==="cit"?l.jsx(yk,{calculation:{input:e.input_data,result:e.result_data},user,onClose:()=>p(!1),creditBalance:n,setCreditBalance:a}):l.jsx(gk,{calculation:{input:e.input_data,result:e.result_data},type:e.calculator_type,user,onClose:()=>p(!1),creditBalance:n,setCreditBalance:a})),l.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
        }
        .viewer-modal {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 800px;
          width: 90%;
          max-height: 85vh;
          overflow-y: auto;
          color: white;
        }
        .viewer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #2D3748;
        }
        .viewer-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .viewer-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        .viewer-title h2 {
          margin: 0 0 4px 0;
          color: #4299E1;
        }
        .viewer-date {
          margin: 0;
          color: #A0AEC0;
          font-size: 12px;
        }
        .close-btn {
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 20px;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .viewer-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          padding: 4px;
          background: #2D3748;
          border-radius: 40px;
        }
        .tab-btn {
          flex: 1;
          padding: 12px;
          background: transparent;
          border: none;
          border-radius: 30px;
          color: #A0AEC0;
          cursor: pointer;
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          color: white;
        }
        .details-container {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
        }
        .details-table {
          width: 100%;
          border-collapse: collapse;
        }
        .details-table td {
          padding: 8px;
          border-bottom: 1px solid #4A5568;
        }
        .details-table td.amount {
          text-align: right;
          font-weight: 600;
        }
        .total-row td {
          background: #1A202C;
          font-weight: 700;
        }
        .inputs-section {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
        }
        .inputs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 16px;
        }
        .input-item {
          background: #1A202C;
          border-radius: 8px;
          padding: 12px;
          border-left: 3px solid #4299E1;
        }
        .input-label {
          display: block;
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 4px;
        }
        .input-value {
          font-weight: 600;
        }
        .next-steps-section {
          background: #2D3748;
          border-radius: 12px;
          padding: 20px;
        }
        .step-card {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
          padding: 16px;
          background: #1A202C;
          border-radius: 8px;
        }
        .step-number {
          width: 30px;
          height: 30px;
          background: #4299E1;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        .step-content {
          flex: 1;
        }
        .step-btn {
          padding: 8px 16px;
          background: #4299E1;
          border: none;
          border-radius: 4px;
          color: white;
          cursor: pointer;
        }
        .viewer-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid #2D3748;
        }
        .secondary-btn, .primary-btn, .report-btn {
          flex: 1;
          padding: 12px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
        }
        .secondary-btn {
          background: transparent;
          border: 1px solid #4A5568;
          color: white;
        }
        .primary-btn {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          color: white;
        }
        .report-btn {
          background: #4299E1;
          border: none;
          color: white;
        }
        .report-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `})]})},lW=({creditBalance:e,setCreditBalance:t,onClose:r})=>{const[n,a]=T.useState([]),[o,c]=T.useState(null),[u,f]=T.useState(null),[p,h]=T.useState(!1),[m,v]=T.useState(!1),[b,w]=T.useState(""),[_,x]=T.useState([]);T.useEffect(()=>{S()},[]);const S=async()=>{h(!0);try{const N=await Fe.get("/api/tax-years");N.data.success&&a(N.data.years)}catch{w("Failed to load tax years")}finally{h(!1)}},C=async N=>{if(_.includes(N))E(N);else{if(e<5){w("Need 5 credits to unlock this year");return}O(N)}},O=async N=>{v(!0),w("");try{const P=await Fe.post("/api/tax-years/unlock",{year:N});P.data.success&&(t(P.data.new_balance),x([..._,N]),E(N))}catch(P){w(P.response?.data?.error||"Failed to unlock year")}finally{v(!1)}},E=async N=>{v(!0);try{const P=await Fe.get(`/api/tax-years/${N}`);P.data.success&&(f(P.data),c(N))}catch{w("Failed to load year data")}finally{v(!1)}},A=(N,P)=>{const R=n.find(M=>M.year===N),D=n.find(M=>M.year===P);if(!R||!D)return null;const G=(R.total_income-D.total_income)/D.total_income*100,q=(R.total_tax_paid-D.total_tax_paid)/D.total_tax_paid*100;return{incomeChange:G,taxChange:q}};return l.jsxs("div",{className:"multi-year-tracking",children:[l.jsxs("div",{className:"tracking-header",children:[l.jsx("h2",{children:"Multi-Year Tax Tracking"}),l.jsx("div",{className:"credit-badge",children:"5 credits per year"}),l.jsx("button",{className:"close-btn",onClick:r,children:"✕"})]}),b&&l.jsxs("div",{className:"error-message",children:["⚠️ ",b]}),p?l.jsx("div",{className:"loading",children:"Loading years..."}):n.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"📊"}),l.jsx("h3",{children:"No tax years yet"}),l.jsx("p",{children:"Save calculations across different years to see your tax history here."})]}):l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"years-grid",children:n.map((N,P)=>{const R=_.includes(N.year),D=P>0?A(N.year,n[P-1].year):null;return l.jsxs("div",{className:`year-card ${o===N.year?"selected":""} ${R?"unlocked":"locked"}`,onClick:()=>C(N.year),children:[l.jsxs("div",{className:"year-header",children:[l.jsx("h3",{children:N.year}),!R&&l.jsx("span",{className:"lock-badge",children:"🔒"})]}),R?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"year-stat",children:[l.jsx("span",{className:"stat-label",children:"Income"}),l.jsx("span",{className:"stat-value",children:_e(N.total_income)})]}),l.jsxs("div",{className:"year-stat",children:[l.jsx("span",{className:"stat-label",children:"Tax Paid"}),l.jsx("span",{className:"stat-value",children:_e(N.total_tax_paid)})]}),l.jsxs("div",{className:"year-stat",children:[l.jsx("span",{className:"stat-label",children:"Effective Rate"}),l.jsxs("span",{className:"stat-value",children:[N.effective_rate.toFixed(1),"%"]})]}),D&&l.jsx("div",{className:"year-change",children:D.incomeChange>0?l.jsxs("span",{className:"positive",children:["▲ Income +",D.incomeChange.toFixed(1),"%"]}):l.jsxs("span",{className:"negative",children:["▼ Income ",D.incomeChange.toFixed(1),"%"]})})]}):l.jsxs("div",{className:"lock-message",children:[l.jsx("p",{children:"Click to unlock (5 credits)"}),l.jsx("button",{className:"unlock-btn",children:"Unlock →"})]})]},N.year)})}),o&&u&&l.jsxs("div",{className:"year-details",children:[l.jsxs("h3",{children:[o," - Detailed Breakdown"]}),m?l.jsx("div",{className:"loading",children:"Loading details..."}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"summary-stats",children:[l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-title",children:"Total Income"}),l.jsx("div",{className:"stat-big",children:_e(u.calculations.reduce((N,P)=>N+(P.result_data?.total_income||0),0))})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-title",children:"Total Tax"}),l.jsx("div",{className:"stat-big",children:_e(u.calculations.reduce((N,P)=>N+(P.result_data?.tax_payable||P.result_data?.total_tax_payable||0),0))})]}),l.jsxs("div",{className:"stat-card",children:[l.jsx("div",{className:"stat-title",children:"Calculations"}),l.jsx("div",{className:"stat-big",children:u.calculations.length})]})]}),l.jsxs("div",{className:"calculations-list",children:[l.jsxs("h4",{children:["All Calculations from ",o]}),l.jsxs("table",{className:"calculations-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{children:"Date"}),l.jsx("th",{children:"Type"}),l.jsx("th",{children:"Income"}),l.jsx("th",{children:"Tax"}),l.jsx("th",{children:"Actions"})]})}),l.jsx("tbody",{children:u.calculations.map(N=>l.jsxs("tr",{children:[l.jsx("td",{children:new Date(N.created_at).toLocaleDateString()}),l.jsx("td",{children:l.jsx("span",{className:`type-badge type-${N.calculator_type}`,children:N.calculator_type.toUpperCase()})}),l.jsx("td",{children:_e(N.result_data?.total_income||N.result_data?.assessable_profit||0)}),l.jsx("td",{children:_e(N.result_data?.tax_payable||N.result_data?.total_tax_payable||0)}),l.jsx("td",{children:l.jsx("button",{className:"view-btn",onClick:()=>window.open(`/?tab=${N.calculator_type}&restore=${N.id}`,"_blank"),children:"View"})})]},N.id))})]})]}),l.jsxs("div",{className:"trend-section",children:[l.jsx("h4",{children:"Year-over-Year Trend"}),l.jsx("div",{className:"trend-chart",children:l.jsx("div",{className:"chart-placeholder",children:l.jsx("div",{className:"trend-bars",children:n.map((N,P)=>l.jsxs("div",{className:"trend-bar-group",children:[l.jsx("div",{className:"trend-bar income-bar",style:{height:`${N.total_income/Math.max(...n.map(R=>R.total_income))*150}px`},title:`Income: ${_e(N.total_income)}`}),l.jsx("div",{className:"trend-bar tax-bar",style:{height:`${N.total_tax_paid/Math.max(...n.map(R=>R.total_income))*150}px`},title:`Tax: ${_e(N.total_tax_paid)}`}),l.jsx("div",{className:"trend-year-label",children:N.year})]},N.year))})})})]})]})]})]}),l.jsx("style",{jsx:!0,children:`
        .multi-year-tracking {
          background: rgba(26, 30, 36, 0.95);
          border-radius: 24px;
          padding: 32px;
          color: white;
          max-width: 1200px;
          margin: 0 auto;
        }
        .tracking-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .tracking-header h2 {
          margin: 0;
          font-size: 24px;
        }
        .credit-badge {
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 20px;
          padding: 4px 12px;
          color: #FFD700;
          font-size: 12px;
        }
        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 20px;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .close-btn:hover {
          background: rgba(255,255,255,0.1);
        }
        .error-message {
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #ff6b6b;
        }
        .loading {
          text-align: center;
          padding: 40px;
          color: var(--text-muted);
        }
        .empty-state {
          text-align: center;
          padding: 60px;
          background: rgba(255,255,255,0.02);
          border-radius: 16px;
        }
        .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
          opacity: 0.5;
        }
        .empty-state h3 {
          margin: 0 0 8px 0;
          color: white;
        }
        .empty-state p {
          color: var(--text-muted);
          margin: 0;
        }
        .years-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-bottom: 32px;
        }
        .year-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .year-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-light);
          box-shadow: 0 10px 20px rgba(11,79,108,0.2);
        }
        .year-card.selected {
          border: 2px solid var(--primary-light);
          background: rgba(11,79,108,0.1);
        }
        .year-card.locked {
          opacity: 0.8;
          background: rgba(0,0,0,0.2);
        }
        .year-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .year-header h3 {
          margin: 0;
          font-size: 20px;
          color: var(--primary-light);
        }
        .lock-badge {
          font-size: 18px;
        }
        .year-stat {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .stat-label {
          color: var(--text-muted);
          font-size: 13px;
        }
        .stat-value {
          font-weight: 600;
        }
        .year-change {
          margin-top: 12px;
          padding: 8px;
          background: rgba(0,0,0,0.2);
          border-radius: 6px;
          text-align: center;
        }
        .positive {
          color: #2E7D32;
        }
        .negative {
          color: #B22222;
        }
        .lock-message {
          text-align: center;
          padding: 20px 0 10px;
        }
        .lock-message p {
          color: var(--text-muted);
          margin-bottom: 12px;
        }
        .unlock-btn {
          padding: 8px 20px;
          background: var(--gradient-primary);
          border: none;
          border-radius: 20px;
          color: white;
          font-size: 13px;
          cursor: pointer;
        }
        .year-details {
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid var(--border-light);
        }
        .year-details h3 {
          margin: 0 0 24px 0;
          font-size: 22px;
        }
        .summary-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }
        .stat-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
        }
        .stat-title {
          color: var(--text-muted);
          font-size: 13px;
          margin-bottom: 8px;
        }
        .stat-big {
          font-size: 24px;
          font-weight: 700;
          color: var(--primary-light);
        }
        .calculations-list {
          margin-bottom: 32px;
        }
        .calculations-list h4 {
          margin: 0 0 16px 0;
          font-size: 18px;
        }
        .calculations-table {
          width: 100%;
          border-collapse: collapse;
        }
        .calculations-table th {
          text-align: left;
          padding: 12px;
          background: rgba(0,0,0,0.3);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 13px;
        }
        .calculations-table td {
          padding: 12px;
          border-bottom: 1px solid var(--border-light);
        }
        .type-badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }
        .type-pit {
          background: rgba(77,171,247,0.2);
          color: #4dabf7;
        }
        .type-cit {
          background: rgba(139,92,246,0.2);
          color: #8B5CF6;
        }
        .type-vat {
          background: rgba(255,140,0,0.2);
          color: #FF8C00;
        }
        .view-btn {
          padding: 4px 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-light);
          border-radius: 4px;
          color: white;
          font-size: 12px;
          cursor: pointer;
        }
        .trend-section {
          margin-top: 32px;
        }
        .trend-section h4 {
          margin: 0 0 20px 0;
          font-size: 18px;
        }
        .trend-chart {
          background: rgba(0,0,0,0.2);
          border-radius: 12px;
          padding: 24px;
        }
        .trend-bars {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          height: 200px;
        }
        .trend-bar-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 60px;
        }
        .trend-bar {
          width: 20px;
          margin: 0 2px;
          transition: height 0.3s;
        }
        .income-bar {
          background: linear-gradient(180deg, #4dabf7, #1971c2);
        }
        .tax-bar {
          background: linear-gradient(180deg, #FFD700, #FF8C00);
        }
        .trend-year-label {
          margin-top: 8px;
          font-size: 12px;
          color: var(--text-muted);
        }
      `})]})},cW=({creditBalance:e,setCreditBalance:t,onClose:r})=>{const[n,a]=T.useState([]),[o,c]=T.useState(!1),[u,f]=T.useState(""),[p,h]=T.useState(null),[m,v]=T.useState([]),b=async()=>{if(e<3){f("You need 3 credits for tax optimization tips");return}c(!0),f("");try{const S=await Fe.get("/api/optimization-tips");S.data.success&&(a(S.data.tips),t(S.data.new_balance))}catch(S){f(S.response?.data?.error||"Failed to load optimization tips")}finally{c(!1)}},w=S=>{v([...m,S])},_=()=>n.reduce((S,C)=>S+(C.potential_savings||0),0),x=S=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:0,maximumFractionDigits:0}).format(S);return l.jsxs("div",{className:"optimization-tips",children:[l.jsxs("div",{className:"tips-header",children:[l.jsx("h2",{children:"Tax Saving Tips"}),l.jsx("div",{className:"credit-badge",children:"3 credits"}),l.jsx("button",{className:"close-btn",onClick:r,children:"✕"})]}),u&&l.jsxs("div",{className:"error-message",children:["⚠️ ",u]}),n.length===0&&!o&&l.jsxs("div",{className:"welcome-screen",children:[l.jsx("div",{className:"welcome-icon",children:"💡"}),l.jsx("h3",{children:"Get Personalized Tax Tips"}),l.jsx("p",{children:"Our system analyzes your tax situation and finds ways to help you save money."}),l.jsx("button",{className:"generate-btn",onClick:b,disabled:o||e<3,children:o?"Analyzing...":e<3?"Need 3 credits":"Get My Tips (3 credits)"}),e<3&&l.jsxs("div",{className:"insufficient-notice",children:["You need 3 credits. ",l.jsx("button",{className:"buy-link",onClick:()=>window.dispatchEvent(new CustomEvent("open-credit-modal")),children:"Buy credits"})]})]}),o&&l.jsxs("div",{className:"loading-state",children:[l.jsx("div",{className:"spinner"}),l.jsx("p",{children:"Analyzing your tax situation..."})]}),n.length>0&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"savings-summary",children:[l.jsx("div",{className:"summary-icon",children:"💰"}),l.jsxs("div",{className:"summary-text",children:[l.jsx("span",{className:"summary-label",children:"Total Potential Savings"}),l.jsx("span",{className:"summary-amount",children:x(_())})]})]}),l.jsx("div",{className:"tips-list",children:n.map((S,C)=>l.jsxs("div",{className:`tip-card ${m.includes(C)?"implemented":""}`,onClick:()=>h(p===C?null:C),children:[l.jsxs("div",{className:"tip-header",children:[l.jsxs("div",{className:"tip-icon",children:[S.tip_type==="pension"&&"🏦",S.tip_type==="rent"&&"🏠",S.tip_type==="nhis"&&"🏥",S.tip_type==="nhf"&&"💧",S.tip_type==="insurance"&&"🛡️"]}),l.jsxs("div",{className:"tip-title",children:[l.jsx("h4",{children:S.title}),l.jsxs("p",{className:"tip-preview",children:[S.description.substring(0,80),"..."]})]}),l.jsxs("div",{className:"tip-savings-badge",children:[l.jsx("span",{className:"savings-amount",children:x(S.potential_savings)}),l.jsx("span",{className:"savings-label",children:"potential savings"})]}),l.jsx("div",{className:"tip-expand",children:p===C?"▼":"▶"})]}),p===C&&l.jsxs("div",{className:"tip-details",children:[l.jsx("p",{className:"tip-description",children:S.description}),l.jsx("div",{className:"tip-actions",children:m.includes(C)?l.jsx("span",{className:"implemented-badge",children:"✅ Implemented"}):l.jsx("button",{className:"implement-btn",onClick:O=>{O.stopPropagation(),w(C)},children:"✓ Mark as Done"})}),S.tip_type==="pension"&&l.jsxs("div",{className:"tip-resources",children:[l.jsx("h5",{children:"How to do this:"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Contact your Pension Fund Administrator (PFA)"}),l.jsx("li",{children:"Request to increase your monthly contribution"}),l.jsx("li",{children:"Keep records of all contributions"})]})]}),S.tip_type==="rent"&&l.jsxs("div",{className:"tip-resources",children:[l.jsx("h5",{children:"Documents you need:"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Tenancy Agreement"}),l.jsx("li",{children:"Rent Receipts for the year"}),l.jsx("li",{children:"Landlord's Tax Identification Number (if available)"})]})]})]})]},C))}),l.jsxs("div",{className:"tips-footer",children:[l.jsx("p",{className:"disclaimer",children:"⚠️ These are estimates based on your tax information. Consult a tax professional for official advice."}),l.jsx("button",{className:"refresh-btn",onClick:b,disabled:o,children:"↻ Get New Tips (3 credits)"})]})]}),l.jsx("style",{children:`
        .optimization-tips {
          background: rgba(26, 30, 36, 0.95);
          border-radius: 24px;
          padding: 32px;
          color: white;
          max-width: 900px;
          margin: 0 auto;
          max-height: 90vh;
          overflow-y: auto;
        }
        .tips-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .tips-header h2 {
          margin: 0;
          font-size: 24px;
          color: #4299E1;
        }
        .credit-badge {
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 20px;
          padding: 4px 12px;
          color: #FFD700;
          font-size: 12px;
        }
        .close-btn {
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 20px;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .close-btn:hover {
          background: rgba(255,255,255,0.1);
        }
        .error-message {
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #ff6b6b;
        }
        .welcome-screen {
          text-align: center;
          padding: 60px 40px;
          background: rgba(255,255,255,0.02);
          border-radius: 16px;
        }
        .welcome-icon {
          font-size: 64px;
          margin-bottom: 20px;
          opacity: 0.8;
        }
        .welcome-screen h3 {
          margin: 0 0 8px 0;
          font-size: 22px;
        }
        .welcome-screen p {
          color: #A0AEC0;
          margin-bottom: 24px;
        }
        .generate-btn {
          padding: 14px 32px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 40px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
        .generate-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .insufficient-notice {
          margin-top: 16px;
          color: #FF8C00;
        }
        .buy-link {
          background: none;
          border: none;
          color: #FFD700;
          text-decoration: underline;
          cursor: pointer;
        }
        .loading-state {
          text-align: center;
          padding: 60px;
        }
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: #4299E1;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 16px;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .savings-summary {
          background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05));
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .summary-icon {
          font-size: 48px;
        }
        .summary-text {
          flex: 1;
        }
        .summary-label {
          display: block;
          color: #A0AEC0;
          font-size: 14px;
          margin-bottom: 4px;
        }
        .summary-amount {
          display: block;
          font-size: 36px;
          font-weight: 800;
          color: #FFD700;
        }
        .tips-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }
        .tip-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
        }
        .tip-card:hover {
          background: rgba(11,79,108,0.1);
          border-color: #4299E1;
        }
        .tip-card.implemented {
          opacity: 0.7;
          background: rgba(46,125,50,0.05);
        }
        .tip-header {
          display: flex;
          align-items: center;
          padding: 20px;
          gap: 16px;
        }
        .tip-icon {
          width: 40px;
          height: 40px;
          background: rgba(11,79,108,0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        .tip-title {
          flex: 1;
        }
        .tip-title h4 {
          margin: 0 0 4px 0;
          font-size: 16px;
        }
        .tip-preview {
          margin: 0;
          color: #A0AEC0;
          font-size: 13px;
        }
        .tip-savings-badge {
          text-align: right;
          min-width: 120px;
        }
        .savings-amount {
          display: block;
          font-size: 16px;
          font-weight: 700;
          color: #2E7D32;
        }
        .savings-label {
          display: block;
          font-size: 11px;
          color: #A0AEC0;
        }
        .tip-expand {
          color: #A0AEC0;
          font-size: 14px;
        }
        .tip-details {
          padding: 0 20px 20px 76px;
        }
        .tip-description {
          margin: 0 0 20px 0;
          line-height: 1.6;
          color: #CBD5E0;
        }
        .tip-actions {
          margin-bottom: 20px;
        }
        .implement-btn {
          padding: 8px 16px;
          background: rgba(46,125,50,0.1);
          border: 1px solid rgba(46,125,50,0.3);
          border-radius: 20px;
          color: #2E7D32;
          font-size: 13px;
          cursor: pointer;
        }
        .implemented-badge {
          padding: 8px 16px;
          background: rgba(46,125,50,0.1);
          border: 1px solid rgba(46,125,50,0.3);
          border-radius: 20px;
          color: #2E7D32;
        }
        .tip-resources {
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
          padding: 16px;
        }
        .tip-resources h5 {
          margin: 0 0 8px 0;
          color: #4299E1;
        }
        .tip-resources ul {
          margin: 0;
          padding-left: 20px;
          color: #A0AEC0;
        }
        .tip-resources li {
          margin-bottom: 4px;
        }
        .tips-footer {
          text-align: center;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .disclaimer {
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 16px;
        }
        .refresh-btn {
          padding: 12px 24px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 30px;
          color: #A0AEC0;
          font-size: 14px;
          cursor: pointer;
        }
        .refresh-btn:hover {
          background: rgba(255,255,255,0.05);
        }
      `})]})},uW=({creditBalance:e,setCreditBalance:t,onClose:r})=>{const[n,a]=T.useState(null),[o,c]=T.useState("pit"),[u,f]=T.useState(!1),[p,h]=T.useState(null),[m,v]=T.useState(""),[b,w]=T.useState(""),[_,x]=T.useState([]),[S,C]=T.useState(!1),O=T.useRef(null),E=D=>{const G=D.target.files[0];if(!G)return;if(!["text/csv","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(G.type)&&!G.name.endsWith(".csv")&&!G.name.endsWith(".xls")&&!G.name.endsWith(".xlsx")){v("Please upload a CSV or Excel file (.csv, .xls, .xlsx)");return}a(G),v("")},A=async()=>{if(!n){v("Please select a file");return}if(e<20){v("Need 20 credits for bulk upload");return}const D=new FormData;D.append("file",n),D.append("calculator_type",o),f(!0),v(""),w("");try{const G=await Fe.post("/api/bulk-upload",D,{headers:{"Content-Type":"multipart/form-data"}});G.data.success&&(h(G.data),t(G.data.new_balance),w(`Upload complete! ${G.data.successful} successful, ${G.data.failed} failed.`),O.current&&(O.current.value=""),a(null),N())}catch(G){v(G.response?.data?.error||"Upload failed")}finally{f(!1)}},N=async()=>{try{const D=await Fe.get("/api/bulk-upload/jobs");D.data.success&&x(D.data.jobs)}catch(D){console.error("Failed to fetch job history",D)}},P=()=>{let D;o==="pit"?D=`full_name,email,phone,employment_salary,employment_basic,employment_housing,employment_transport,business_profit,rent_paid,pension_rsa
John Doe,john@example.com,08012345678,5000000,3000000,1000000,600000,2000000,1500000,240000
Jane Smith,jane@example.com,08087654321,8000000,4800000,1600000,960000,0,2000000,384000`:D=`business_name,business_type,turnover,total_assets,trading_profit,rental_income,operating_expenses
"Deolu's Supermarket Ltd",trading,50000000,20000000,10000000,0,6000000
"ABC Consulting Ltd",consulting,80000000,30000000,15000000,2000000,8000000`;const G=new Blob([D],{type:"text/csv"}),q=URL.createObjectURL(G),M=document.createElement("a");M.href=q,M.download=`template_${o}.csv`,M.click(),URL.revokeObjectURL(q)},R=()=>{if(!p||!p.errors)return;const D=`Row,Error
`+p.errors.map(H=>`${H.row},"${H.error}"`).join(`
`),G=new Blob([D],{type:"text/csv"}),q=URL.createObjectURL(G),M=document.createElement("a");M.href=q,M.download=`error_report_${Date.now()}.csv`,M.click(),URL.revokeObjectURL(q)};return l.jsxs("div",{className:"bulk-upload",children:[l.jsxs("div",{className:"upload-header",children:[l.jsx("h2",{children:"Bulk Upload"}),l.jsx("div",{className:"credit-badge",children:"20 credits"}),l.jsx("button",{className:"close-btn",onClick:r,children:"✕"})]}),m&&l.jsxs("div",{className:"error-message",children:["⚠️ ",m]}),b&&l.jsxs("div",{className:"success-message",children:["✅ ",b]}),l.jsxs("div",{className:"upload-container",children:[l.jsxs("div",{className:"calculator-selector",children:[l.jsx("label",{children:"Calculation Type"}),l.jsxs("div",{className:"selector-buttons",children:[l.jsx("button",{className:o==="pit"?"active":"",onClick:()=>c("pit"),children:"PIT (Employees)"}),l.jsx("button",{className:o==="cit"?"active":"",onClick:()=>c("cit"),children:"CIT (Companies)"})]})]}),l.jsxs("div",{className:"file-upload-area",children:[l.jsx("input",{type:"file",ref:O,onChange:E,accept:".csv,.xls,.xlsx",disabled:u}),l.jsxs("p",{className:"file-info",children:["Supported formats: CSV, Excel (.xls, .xlsx)",l.jsx("br",{}),"Max file size: 10MB (up to 1000 records)"]})]}),l.jsxs("div",{className:"template-section",children:[l.jsx("button",{className:"template-btn",onClick:P,children:"📥 Download Template"}),l.jsx("span",{className:"template-hint",children:"Use our template to format your data correctly"})]}),l.jsx("div",{className:"upload-actions",children:l.jsx("button",{className:"upload-btn",onClick:A,disabled:!n||u||e<20,children:u?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner"}),"Uploading..."]}):e<20?"Need 20 credits":"Upload and Process (20 credits)"})}),u&&l.jsxs("div",{className:"progress-indicator",children:[l.jsx("div",{className:"progress-bar",children:l.jsx("div",{className:"progress-fill",style:{width:p?`${p.processed_records/p.total_records*100}%`:"0%"}})}),l.jsx("p",{className:"progress-text",children:p?`Processing ${p.processed_records} of ${p.total_records} records...`:"Uploading file..."})]}),p&&p.failed>0&&l.jsxs("div",{className:"error-report",children:[l.jsxs("div",{className:"report-header",children:[l.jsxs("span",{className:"report-title",children:["⚠️ ",p.failed," errors found"]}),l.jsx("button",{className:"download-report-btn",onClick:R,children:"Download Error Report"})]}),l.jsxs("div",{className:"error-preview",children:[l.jsxs("h4",{children:["First ",Math.min(p.errors.length,5)," errors:"]}),l.jsx("ul",{children:p.errors.slice(0,5).map((D,G)=>l.jsxs("li",{children:["Row ",D.row,": ",D.error]},G))})]})]})]}),l.jsxs("div",{className:"history-section",children:[l.jsx("button",{className:"history-toggle",onClick:()=>C(!S),children:S?"▼ Hide History":"▶ View Previous Uploads"}),S&&l.jsx("div",{className:"history-list",children:_.length===0?l.jsx("p",{className:"no-history",children:"No previous uploads"}):_.map(D=>l.jsxs("div",{className:"history-item",children:[l.jsxs("div",{className:"history-info",children:[l.jsx("span",{className:"history-filename",children:D.filename}),l.jsx("span",{className:`history-status status-${D.status}`,children:D.status})]}),l.jsxs("div",{className:"history-stats",children:[l.jsxs("span",{children:[D.processed_records,"/",D.total_records," records"]}),l.jsx("span",{children:new Date(D.created_at).toLocaleString()})]})]},D.id))})]}),l.jsx("div",{className:"upload-footer",children:l.jsx("p",{className:"disclaimer",children:"⚠️ Bulk upload processes up to 1000 records at a time. Each record costs the standard calculator credit (PIT free, CIT 2 credits). The 20 credit fee is for processing only."})}),l.jsx("style",{jsx:!0,children:`
        .bulk-upload {
          background: rgba(26, 30, 36, 0.95);
          border-radius: 24px;
          padding: 32px;
          color: white;
          max-width: 800px;
          margin: 0 auto;
        }
        .upload-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .upload-header h2 {
          margin: 0;
          font-size: 24px;
        }
        .credit-badge {
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 20px;
          padding: 4px 12px;
          color: #FFD700;
          font-size: 12px;
        }
        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 20px;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .close-btn:hover {
          background: rgba(255,255,255,0.1);
        }
        .error-message {
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #ff6b6b;
        }
        .success-message {
          background: rgba(46,125,50,0.1);
          border: 1px solid rgba(46,125,50,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #2E7D32;
        }
        .upload-container {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
        }
        .calculator-selector {
          margin-bottom: 24px;
        }
        .calculator-selector label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-muted);
          font-size: 14px;
        }
        .selector-buttons {
          display: flex;
          gap: 12px;
        }
        .selector-buttons button {
          flex: 1;
          padding: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          color: var(--text-muted);
          cursor: pointer;
        }
        .selector-buttons button.active {
          background: var(--gradient-primary);
          border: none;
          color: white;
        }
        .file-upload-area {
          margin-bottom: 20px;
          padding: 30px;
          background: rgba(0,0,0,0.2);
          border: 2px dashed var(--border-light);
          border-radius: 12px;
          text-align: center;
        }
        .file-upload-area input {
          margin-bottom: 12px;
        }
        .file-info {
          color: var(--text-muted);
          font-size: 13px;
          margin: 0;
        }
        .template-section {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding: 16px;
          background: rgba(11,79,108,0.1);
          border-radius: 8px;
        }
        .template-btn {
          padding: 8px 16px;
          background: var(--gradient-primary);
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 13px;
          cursor: pointer;
        }
        .template-hint {
          color: var(--text-muted);
          font-size: 13px;
        }
        .upload-actions {
          text-align: center;
        }
        .upload-btn {
          padding: 14px 32px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 40px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
        .upload-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }
        .progress-indicator {
          margin-top: 20px;
        }
        .progress-bar {
          height: 6px;
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 8px;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-light), #FFD700);
          transition: width 0.3s;
        }
        .progress-text {
          color: var(--text-muted);
          font-size: 13px;
          text-align: center;
        }
        .error-report {
          margin-top: 24px;
          padding: 16px;
          background: rgba(178,34,34,0.05);
          border: 1px solid rgba(178,34,34,0.2);
          border-radius: 8px;
        }
        .report-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .report-title {
          color: #ff6b6b;
          font-weight: 600;
        }
        .download-report-btn {
          padding: 6px 12px;
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 4px;
          color: #ff6b6b;
          font-size: 12px;
          cursor: pointer;
        }
        .error-preview h4 {
          margin: 0 0 8px 0;
          font-size: 14px;
          color: var(--text-muted);
        }
        .error-preview ul {
          margin: 0;
          padding-left: 20px;
          color: var(--text-muted);
          font-size: 13px;
        }
        .history-section {
          margin-top: 24px;
        }
        .history-toggle {
          background: none;
          border: none;
          color: var(--primary-light);
          font-size: 14px;
          cursor: pointer;
          padding: 8px 0;
        }
        .history-list {
          margin-top: 16px;
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
          padding: 16px;
        }
        .no-history {
          color: var(--text-muted);
          text-align: center;
          margin: 20px 0;
        }
        .history-item {
          padding: 12px;
          border-bottom: 1px solid var(--border-light);
        }
        .history-item:last-child {
          border-bottom: none;
        }
        .history-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .history-filename {
          font-weight: 600;
        }
        .history-status {
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 11px;
          text-transform: uppercase;
        }
        .status-pending {
          background: rgba(255,140,0,0.1);
          color: #FF8C00;
        }
        .status-processing {
          background: rgba(11,79,108,0.1);
          color: var(--primary-light);
        }
        .status-completed {
          background: rgba(46,125,50,0.1);
          color: #2E7D32;
        }
        .status-failed {
          background: rgba(178,34,34,0.1);
          color: #ff6b6b;
        }
        .history-stats {
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
          font-size: 12px;
        }
        .upload-footer {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
        }
        .disclaimer {
          color: var(--text-muted);
          font-size: 12px;
          text-align: center;
          margin: 0;
        }
      `})]})},dW=({creditBalance:e,setCreditBalance:t,onClose:r})=>{const[n,a]=T.useState([]),[o,c]=T.useState([]),[u,f]=T.useState(!1),[p,h]=T.useState(!1),[m,v]=T.useState(""),[b,w]=T.useState(!1);T.useEffect(()=>{_()},[]);const _=async()=>{f(!0);try{const E=await Fe.get("/api/calculations");E.data.success&&a(E.data.calculations)}catch{v("Failed to load calculations")}finally{f(!1)}},x=()=>{c(b?[]:n.map(E=>E.id)),w(!b)},S=E=>{o.includes(E)?(c(o.filter(A=>A!==E)),w(!1)):(c([...o,E]),o.length+1===n.length&&w(!0))},C=async()=>{if(o.length===0){v("Please select at least one calculation");return}if(e<2){v("Need 2 credits for export");return}h(!0),v("");try{const E=await Fe.post("/api/export/excel",{calculation_ids:o},{responseType:"blob"}),A=window.URL.createObjectURL(new Blob([E.data])),N=document.createElement("a");N.href=A,N.setAttribute("download",`tax_calculations_${new Date().toISOString().split("T")[0]}.xlsx`),document.body.appendChild(N),N.click(),N.remove(),t(P=>P-2),c([]),w(!1)}catch{v("Export failed. Please try again.")}finally{h(!1)}},O=E=>E.calculator_type==="pit"?{amount:E.result_data?.tax_payable,income:E.result_data?.total_income,type:"PIT"}:E.calculator_type==="cit"?{amount:E.result_data?.total_tax_payable,income:E.result_data?.assessable_profit,type:"CIT"}:E.calculator_type==="vat"?{amount:E.result_data?.vat,income:E.result_data?.net,type:"VAT"}:E.calculator_type==="wht"?{amount:E.result_data?.rate,income:null,type:"WHT"}:E.calculator_type==="rent"?{amount:E.result_data?.actual_relief,income:E.result_data?.rent,type:"Rent"}:{amount:0,income:0,type:"Unknown"};return l.jsxs("div",{className:"export-excel",children:[l.jsxs("div",{className:"export-header",children:[l.jsx("h2",{children:"Export to Excel"}),l.jsx("div",{className:"credit-badge",children:"2 credits"}),l.jsx("button",{className:"close-btn",onClick:r,children:"✕"})]}),m&&l.jsxs("div",{className:"error-message",children:["⚠️ ",m]}),l.jsxs("div",{className:"export-container",children:[l.jsxs("div",{className:"selection-bar",children:[l.jsxs("div",{className:"selection-info",children:[l.jsxs("span",{className:"selected-count",children:[o.length," selected"]}),l.jsxs("span",{className:"total-count",children:["of ",n.length," calculations"]})]}),l.jsx("button",{className:"select-all-btn",onClick:x,children:b?"Deselect All":"Select All"})]}),u?l.jsxs("div",{className:"loading-state",children:[l.jsx("div",{className:"spinner"}),l.jsx("p",{children:"Loading calculations..."})]}):n.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"📊"}),l.jsx("h3",{children:"No calculations to export"}),l.jsx("p",{children:"Save some calculations first, then export them here."})]}):l.jsx("div",{className:"calculations-list",children:l.jsxs("table",{className:"calculations-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{width:"40px"},children:l.jsx("input",{type:"checkbox",checked:b,onChange:x})}),l.jsx("th",{children:"Date"}),l.jsx("th",{children:"Type"}),l.jsx("th",{children:"Income/Amount"}),l.jsx("th",{children:"Tax/Result"}),l.jsx("th",{children:"Year"})]})}),l.jsx("tbody",{children:n.map(E=>{const A=O(E);return l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("input",{type:"checkbox",checked:o.includes(E.id),onChange:()=>S(E.id)})}),l.jsx("td",{children:new Date(E.created_at).toLocaleDateString()}),l.jsx("td",{children:l.jsx("span",{className:`type-badge type-${E.calculator_type}`,children:A.type})}),l.jsx("td",{children:A.income?_e(A.income):"-"}),l.jsx("td",{className:"amount-cell",children:A.amount?_e(A.amount):"-"}),l.jsx("td",{children:E.tax_year||"2026"})]},E.id)})})]})}),l.jsxs("div",{className:"export-footer",children:[l.jsxs("div",{className:"export-summary",children:[l.jsxs("div",{className:"summary-item",children:[l.jsx("span",{className:"summary-label",children:"Selected:"}),l.jsxs("span",{className:"summary-value",children:[o.length," calculations"]})]}),l.jsxs("div",{className:"summary-item",children:[l.jsx("span",{className:"summary-label",children:"Credit cost:"}),l.jsx("span",{className:"summary-value",children:"2 credits"})]}),l.jsxs("div",{className:"summary-item",children:[l.jsx("span",{className:"summary-label",children:"Your balance:"}),l.jsxs("span",{className:`summary-value ${e<2?"insufficient":"sufficient"}`,children:[e," credits"]})]})]}),l.jsx("button",{className:"export-btn",onClick:C,disabled:p||o.length===0||e<2,children:p?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner"}),"Exporting..."]}):e<2?"Need 2 credits":"Export to Excel (2 credits)"})]}),l.jsxs("div",{className:"export-info",children:[l.jsx("h4",{children:"📋 What's included in the Excel file:"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("strong",{children:"Summary Sheet:"})," Overview of all selected calculations"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Individual Sheets:"})," Detailed input and results for each calculation"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Formatted Numbers:"})," Proper currency formatting"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Timestamps:"})," When each calculation was created"]}),l.jsxs("li",{children:[l.jsx("strong",{children:"Tax Year:"})," Year of calculation"]})]})]})]}),l.jsx("style",{jsx:!0,children:`
        .export-excel {
          background: rgba(26, 30, 36, 0.95);
          border-radius: 24px;
          padding: 32px;
          color: white;
          max-width: 1000px;
          margin: 0 auto;
        }
        .export-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .export-header h2 {
          margin: 0;
          font-size: 24px;
        }
        .credit-badge {
          background: rgba(255,215,0,0.1);
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 20px;
          padding: 4px 12px;
          color: #FFD700;
          font-size: 12px;
        }
        .close-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 20px;
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .close-btn:hover {
          background: rgba(255,255,255,0.1);
        }
        .error-message {
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #ff6b6b;
        }
        .export-container {
          background: rgba(255,255,255,0.02);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 24px;
        }
        .selection-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding: 12px;
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
        }
        .selection-info {
          font-size: 14px;
        }
        .selected-count {
          color: var(--primary-light);
          font-weight: 600;
          margin-right: 4px;
        }
        .total-count {
          color: var(--text-muted);
        }
        .select-all-btn {
          padding: 6px 12px;
          background: transparent;
          border: 1px solid var(--border-light);
          border-radius: 4px;
          color: var(--text-muted);
          font-size: 13px;
          cursor: pointer;
        }
        .select-all-btn:hover {
          background: rgba(255,255,255,0.05);
        }
        .loading-state {
          text-align: center;
          padding: 60px;
        }
        .spinner {
          display: inline-block;
          width: 30px;
          height: 30px;
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: var(--primary-light);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .empty-state {
          text-align: center;
          padding: 60px;
        }
        .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
          opacity: 0.5;
        }
        .empty-state h3 {
          margin: 0 0 8px 0;
        }
        .empty-state p {
          color: var(--text-muted);
          margin: 0;
        }
        .calculations-list {
          max-height: 400px;
          overflow-y: auto;
          margin-bottom: 24px;
        }
        .calculations-table {
          width: 100%;
          border-collapse: collapse;
        }
        .calculations-table th {
          text-align: left;
          padding: 12px;
          background: rgba(0,0,0,0.3);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 13px;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .calculations-table td {
          padding: 12px;
          border-bottom: 1px solid var(--border-light);
        }
        .calculations-table input[type="checkbox"] {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        .type-badge {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }
        .type-pit {
          background: rgba(77,171,247,0.2);
          color: #4dabf7;
        }
        .type-cit {
          background: rgba(139,92,246,0.2);
          color: #8B5CF6;
        }
        .type-vat {
          background: rgba(255,140,0,0.2);
          color: #FF8C00;
        }
        .type-wht {
          background: rgba(11,79,108,0.2);
          color: var(--primary-light);
        }
        .type-rent {
          background: rgba(46,125,50,0.2);
          color: #2E7D32;
        }
        .amount-cell {
          font-weight: 600;
          color: #FFD700;
        }
        .export-footer {
          border-top: 1px solid var(--border-light);
          padding-top: 20px;
        }
        .export-summary {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          padding: 16px;
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
        }
        .summary-item {
          display: flex;
          flex-direction: column;
        }
        .summary-label {
          color: var(--text-muted);
          font-size: 12px;
          margin-bottom: 4px;
        }
        .summary-value {
          font-size: 18px;
          font-weight: 600;
        }
        .summary-value.insufficient {
          color: #B22222;
        }
        .summary-value.sufficient {
          color: #2E7D32;
        }
        .export-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 12px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .export-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .export-btn .spinner {
          width: 16px;
          height: 16px;
          margin: 0;
        }
        .export-info {
          margin-top: 24px;
          padding: 16px;
          background: rgba(11,79,108,0.1);
          border-radius: 8px;
        }
        .export-info h4 {
          margin: 0 0 12px 0;
          color: var(--primary-light);
        }
        .export-info ul {
          margin: 0;
          padding-left: 20px;
          color: var(--text-muted);
        }
        .export-info li {
          margin-bottom: 4px;
        }
      `})]})},fW=({creditBalance:e,setCreditBalance:t,onClose:r})=>{const[n,a]=T.useState([]),[o,c]=T.useState(null),[u,f]=T.useState("pit"),[p,h]=T.useState(!1),[m,v]=T.useState(!1),[b,w]=T.useState(""),[_,x]=T.useState(null),[S,C]=T.useState(""),[O,E]=T.useState(!1);T.useEffect(()=>{A()},[]);const A=async()=>{h(!0);try{const R=await Fe.get("/api/calculations");R.data.success&&a(R.data.calculations)}catch{w("Failed to load calculations")}finally{h(!1)}},N=async()=>{if(!o){w("Please select a calculation");return}if(e<3){w("Need 3 credits for form pre-fill");return}v(!0),w("");try{const R=await Fe.post("/api/nrs/form/prefill",{calculation_id:o,form_type:u});R.data.success&&(x(R.data.form_data),C(R.data.form_html),E(!0),t(R.data.new_balance))}catch(R){w(R.response?.data?.error||"Failed to generate form")}finally{v(!1)}},P=R=>R.calculator_type==="pit"?{title:`PIT - ₦${R.result_data?.total_income?.toLocaleString()}`,date:new Date(R.created_at).toLocaleDateString()}:R.calculator_type==="cit"?{title:`CIT - ${R.input_data?.business_name||"Business"}`,date:new Date(R.created_at).toLocaleDateString()}:{title:`${R.calculator_type.toUpperCase()} Calculation`,date:new Date(R.created_at).toLocaleDateString()};return l.jsxs("div",{className:"nrs-form-prefill",children:[l.jsxs("div",{className:"form-header",children:[l.jsx("h2",{children:"NRS Form Pre-fill"}),l.jsx("div",{className:"credit-badge",children:"3 credits"}),l.jsx("button",{className:"close-btn",onClick:r,children:"✕"})]}),b&&l.jsxs("div",{className:"error-message",children:["⚠️ ",b]}),O?l.jsxs("div",{className:"preview-container",children:[l.jsxs("div",{className:"preview-actions",children:[l.jsx("button",{className:"back-btn",onClick:()=>E(!1),children:"← Back"}),l.jsx("button",{className:"print-btn",onClick:()=>window.print(),children:"🖨️ Print"}),l.jsx("button",{className:"download-btn",onClick:()=>{const R=new Blob([S],{type:"text/html"}),D=URL.createObjectURL(R),G=document.createElement("a");G.href=D,G.download=`nrs_form_${u}_${new Date().toISOString().split("T")[0]}.html`,G.click()},children:"📥 Download"})]}),l.jsx("iframe",{srcDoc:S,className:"form-iframe",title:"NRS Form"})]}):l.jsxs("div",{className:"selection-container",children:[l.jsxs("div",{className:"form-type-selector",children:[l.jsx("label",{children:"Form Type"}),l.jsxs("div",{className:"selector-buttons",children:[l.jsx("button",{className:u==="pit"?"active":"",onClick:()=>f("pit"),children:"PIT Form (Personal)"}),l.jsx("button",{className:u==="cit"?"active":"",onClick:()=>f("cit"),children:"CIT Form (Company)"})]})]}),l.jsxs("div",{className:"calculation-selector",children:[l.jsx("label",{children:"Select Calculation"}),p?l.jsx("div",{className:"loading-small",children:"Loading..."}):n.length===0?l.jsxs("div",{className:"no-calculations",children:[l.jsx("p",{children:"No saved calculations found."}),l.jsx("p",{className:"hint",children:"Save a calculation first to pre-fill forms."})]}):l.jsxs("select",{value:o||"",onChange:R=>c(parseInt(R.target.value)),className:"dark-select",children:[l.jsx("option",{value:"",children:"-- Select a calculation --"}),n.filter(R=>R.calculator_type===u).map(R=>{const D=P(R);return l.jsxs("option",{value:R.id,children:[D.title," - ",D.date]},R.id)})]})]}),l.jsx("button",{className:"generate-btn",onClick:N,disabled:!o||m||e<3,children:m?"Generating...":e<3?"Need 3 credits":"Generate Form (3 credits)"})]}),l.jsx("style",{children:`
        .nrs-form-prefill {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 1000px;
          margin: 0 auto;
          color: white;
        }
        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #2D3748;
        }
        .form-header h2 {
          margin: 0;
          color: #4299E1;
        }
        .credit-badge {
          background: rgba(255,215,0,0.1);
          border: 1px solid #FFD700;
          border-radius: 20px;
          padding: 4px 12px;
          color: #FFD700;
        }
        .close-btn {
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 20px;
          cursor: pointer;
        }
        .selection-container {
          background: #2D3748;
          border-radius: 16px;
          padding: 24px;
        }
        .form-type-selector {
          margin-bottom: 24px;
        }
        .form-type-selector label {
          display: block;
          margin-bottom: 8px;
          color: #A0AEC0;
        }
        .selector-buttons {
          display: flex;
          gap: 12px;
        }
        .selector-buttons button {
          flex: 1;
          padding: 12px;
          background: #4A5568;
          border: none;
          border-radius: 8px;
          color: #A0AEC0;
          cursor: pointer;
        }
        .selector-buttons button.active {
          background: #4299E1;
          color: white;
        }
        .calculation-selector {
          margin-bottom: 24px;
        }
        .calculation-selector label {
          display: block;
          margin-bottom: 8px;
          color: #A0AEC0;
        }
        .calculation-selector select.dark-select {
          width: 100%;
          padding: 12px;
          background: #1A202C;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 14px;
        }
        .calculation-selector select.dark-select option {
          background: #1A202C;
          color: white;
          padding: 8px;
        }
        .generate-btn {
          width: 100%;
          padding: 14px;
          background: #48BB78;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
        .preview-container {
          background: #2D3748;
          border-radius: 16px;
          padding: 24px;
        }
        .preview-actions {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        .back-btn {
          padding: 8px 16px;
          background: #4A5568;
          border: none;
          border-radius: 6px;
          color: white;
          cursor: pointer;
        }
        .print-btn, .download-btn {
          padding: 8px 16px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
        .print-btn { background: #4299E1; color: white; }
        .download-btn { background: #FFD700; color: black; }
        .form-iframe {
          width: 100%;
          height: 600px;
          border: 1px solid #4A5568;
          border-radius: 8px;
          background: white;
        }
      `})]})},pW=({userBadges:e=[]})=>{const[t,r]=T.useState(!1),n=[{name:"Getting Started",description:"Complete your first calculation",icon:"🌱",how_to_earn:"Use any calculator and save your result"},{name:"Tax Enthusiast",description:"Complete 10 calculations",icon:"📊",how_to_earn:"Save 10 different calculations"},{name:"Tax Expert",description:"Complete 50 calculations",icon:"🏆",how_to_earn:"Save 50 calculations"},{name:"Savings Champion",description:"Identify over ₦1M in potential savings",icon:"💰",how_to_earn:"Use optimization tips to find savings"},{name:"Community Builder",description:"Refer 5 friends",icon:"👥",how_to_earn:"Share your referral link and have friends sign up"},{name:"Early Adopter",description:"Join in the first year",icon:"⭐",how_to_earn:"Sign up before January 1, 2026"}];return l.jsxs("div",{className:"badges-container",children:[l.jsxs("div",{className:"badges-header",children:[l.jsx("h3",{children:"Your Achievements"}),l.jsx("button",{className:"guide-btn",onClick:()=>r(!t),children:t?"Hide Guide":"How to Earn"})]}),e.length===0?l.jsxs("div",{className:"badges-empty",children:[l.jsx("div",{className:"empty-icon",children:"🏆"}),l.jsx("p",{children:"No badges yet. Keep using the app to earn achievements!"})]}):l.jsx("div",{className:"badges-grid",children:e.map((a,o)=>l.jsxs("div",{className:"badge-card",children:[l.jsx("div",{className:"badge-icon",children:a.icon||"🏅"}),l.jsxs("div",{className:"badge-info",children:[l.jsx("h4",{children:a.name}),l.jsx("p",{children:a.description}),l.jsxs("small",{children:["Awarded: ",new Date(a.awarded_at).toLocaleDateString()]})]})]},o))}),t&&l.jsxs("div",{className:"badge-guide",children:[l.jsx("h4",{children:"How to Earn Badges"}),l.jsx("div",{className:"guide-grid",children:n.map((a,o)=>{const c=e.some(u=>u.name===a.name);return l.jsxs("div",{className:`guide-item ${c?"earned":""}`,children:[l.jsx("div",{className:"guide-icon",children:a.icon}),l.jsxs("div",{className:"guide-content",children:[l.jsxs("div",{className:"guide-header",children:[l.jsx("strong",{children:a.name}),c&&l.jsx("span",{className:"earned-badge",children:"✓ Earned"})]}),l.jsx("p",{children:a.how_to_earn})]})]},o)})})]}),l.jsx("style",{children:`
        .badges-container {
          padding: 20px;
          background: #1A202C;
          border-radius: 12px;
        }
        .badges-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .badges-header h3 {
          margin: 0;
          color: #4299E1;
        }
        .guide-btn {
          padding: 6px 12px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 20px;
          color: white;
          cursor: pointer;
        }
        .badges-empty {
          text-align: center;
          padding: 40px;
          background: #2D3748;
          border-radius: 8px;
          color: #A0AEC0;
        }
        .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
          opacity: 0.5;
        }
        .badges-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 16px;
          margin-bottom: 20px;
        }
        .badge-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: #2D3748;
          border-radius: 12px;
        }
        .badge-icon {
          font-size: 32px;
        }
        .badge-info h4 {
          margin: 0 0 4px 0;
          color: #FFD700;
        }
        .badge-info p {
          margin: 0 0 4px 0;
          color: #CBD5E0;
          font-size: 13px;
        }
        .badge-info small {
          color: #718096;
        }
        .badge-guide {
          margin-top: 20px;
          padding: 20px;
          background: #2D3748;
          border-radius: 12px;
        }
        .badge-guide h4 {
          margin: 0 0 16px 0;
          color: #FFD700;
        }
        .guide-grid {
          display: grid;
          gap: 12px;
        }
        .guide-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px;
          background: #1A202C;
          border-radius: 8px;
          opacity: 0.8;
        }
        .guide-item.earned {
          opacity: 1;
          border-left: 4px solid #48BB78;
        }
        .guide-icon {
          font-size: 24px;
        }
        .guide-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }
        .guide-header strong {
          color: white;
        }
        .earned-badge {
          color: #48BB78;
          font-size: 11px;
        }
        .guide-content p {
          margin: 0;
          color: #A0AEC0;
          font-size: 12px;
        }
      `})]})},hW=({userId:e,userStats:t})=>{const[r,n]=T.useState(t||{calculation_count:0,total_savings:0,rank_percentile:0,better_than:""}),[a,o]=T.useState(!t),[c]=T.useState(1e6);T.useEffect(()=>{t||u()},[]);const u=async()=>{try{const v=await Fe.get("/api/stats/user-impact");v.data.success&&n(v.data.stats)}catch(v){console.error("Failed to fetch impact stats",v)}finally{o(!1)}},f=()=>{const v=r.total_savings/c*100;return Math.min(v,100)},p=()=>r.total_savings<1e5?{amount:1e5,remaining:1e5-r.total_savings}:r.total_savings<25e4?{amount:25e4,remaining:25e4-r.total_savings}:r.total_savings<5e5?{amount:5e5,remaining:5e5-r.total_savings}:r.total_savings<75e4?{amount:75e4,remaining:75e4-r.total_savings}:{amount:1e6,remaining:1e6-r.total_savings};if(a)return l.jsx("div",{className:"progress-loading",children:l.jsx("div",{className:"spinner"})});const h=f(),m=p();return l.jsxs("div",{className:"savings-progress-container",children:[l.jsxs("div",{className:"progress-header",children:[l.jsx("h4",{children:"Your 2026 Tax Savings Goal"}),l.jsxs("div",{className:"stats-badge",children:[l.jsx("span",{className:"badge-icon",children:"📊"}),l.jsxs("span",{children:[r.calculation_count," calculations"]})]})]}),l.jsxs("div",{className:"progress-main",children:[l.jsx("div",{className:"progress-circle",children:l.jsxs("svg",{viewBox:"0 0 100 100",className:"circle-chart",children:[l.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#2D3748",strokeWidth:"8"}),l.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"none",stroke:"#48BB78",strokeWidth:"8",strokeLinecap:"round",strokeDasharray:`${2*Math.PI*45*h/100} ${2*Math.PI*45}`,strokeDashoffset:2*Math.PI*45*.25,transform:"rotate(-90 50 50)",style:{transition:"stroke-dasharray 1s ease"}}),l.jsxs("text",{x:"50",y:"50",textAnchor:"middle",dy:"0.3em",className:"progress-text",children:[Math.round(h),"%"]})]})}),l.jsxs("div",{className:"progress-details",children:[l.jsxs("div",{className:"amount-saved",children:[l.jsx("span",{className:"label",children:"Saved so far"}),l.jsx("span",{className:"value",children:_e(r.total_savings)})]}),l.jsxs("div",{className:"next-milestone",children:[l.jsx("span",{className:"label",children:"Next milestone"}),l.jsx("span",{className:"value",children:_e(m.amount)}),l.jsxs("span",{className:"remaining",children:[_e(m.remaining)," to go"]})]}),l.jsxs("div",{className:"rank-badge",children:[l.jsx("span",{className:"rank-icon",children:"🏆"}),l.jsx("span",{className:"rank-text",children:r.better_than||"Better than 0% of users"})]})]})]}),l.jsx("div",{className:"progress-tips",children:l.jsx("p",{children:"💡 Want to reach ₦1M faster? Try the What-If feature to explore more savings!"})}),l.jsx("style",{children:`
        .savings-progress-container {
          background: #1A202C;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 20px;
          border: 1px solid #2D3748;
        }
        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .progress-header h4 {
          margin: 0;
          color: #4299E1;
          font-size: 16px;
        }
        .stats-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          background: #2D3748;
          border-radius: 20px;
          color: #FFD700;
          font-size: 12px;
        }
        .progress-main {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 16px;
        }
        .progress-circle {
          width: 100px;
          height: 100px;
          flex-shrink: 0;
        }
        .circle-chart {
          width: 100%;
          height: 100%;
        }
        .progress-text {
          fill: white;
          font-size: 12px;
          font-weight: 600;
        }
        .progress-details {
          flex: 1;
        }
        .amount-saved, .next-milestone {
          margin-bottom: 10px;
        }
        .label {
          display: block;
          color: #A0AEC0;
          font-size: 11px;
          margin-bottom: 2px;
        }
        .value {
          display: block;
          font-size: 18px;
          font-weight: 700;
          color: #FFD700;
        }
        .remaining {
          display: block;
          color: #48BB78;
          font-size: 12px;
          margin-top: 2px;
        }
        .rank-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #2D3748;
          border-radius: 20px;
        }
        .rank-icon {
          font-size: 14px;
        }
        .rank-text {
          color: #FFD700;
          font-weight: 600;
          font-size: 12px;
        }
        .progress-tips {
          padding: 10px;
          background: #2D3748;
          border-radius: 8px;
          border-left: 4px solid #4299E1;
        }
        .progress-tips p {
          margin: 0;
          color: #CBD5E0;
          font-size: 12px;
        }
        .progress-loading {
          display: flex;
          justify-content: center;
          padding: 30px;
        }
        .spinner {
          width: 30px;
          height: 30px;
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: #4299E1;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `})]})},mW=({user:e,onLogout:t,creditBalance:r,setCreditBalance:n,setRestoreCalculation:a,setActiveTab:o,userStats:c})=>{const[u,f]=T.useState(e||{}),[p,h]=T.useState([]),[m,v]=T.useState(!1),[b,w]=T.useState(""),[_,x]=T.useState(""),[S,C]=T.useState(!1),[O,E]=T.useState(null),[A,N]=T.useState(!1),[P,R]=T.useState("calculations"),[D,G]=T.useState("all"),[q,M]=T.useState("newest"),[H,B]=T.useState(""),[F,Y]=T.useState(!1),[J,U]=T.useState(!1),[X,K]=T.useState(!1),[I,L]=T.useState(!1),[ie,pe]=T.useState(!1),[fe,ve]=T.useState(!1),[ge,me]=T.useState(null),[ae,Se]=T.useState(!1),[se,te]=T.useState([]),[Pe,Ee]=T.useState({full_name:e?.full_name||"",phone:e?.phone||"",date_of_birth:e?.date_of_birth||"",occupation:e?.occupation||"",state_of_origin:e?.state_of_origin||"",state_of_residence:e?.state_of_residence||""});T.useEffect(()=>{Ke(),Xe(),Ae()},[]),T.useEffect(()=>{f(e||{}),Ee({full_name:e?.full_name||"",phone:e?.phone||"",date_of_birth:e?.date_of_birth||"",occupation:e?.occupation||"",state_of_origin:e?.state_of_origin||"",state_of_residence:e?.state_of_residence||""})},[e]);const Ke=async()=>{try{const de=await Fe.get("/api/auth/me");if(de.data.success){const Ie=de.data.user;f(Ie),Ee({full_name:Ie.full_name||"",phone:Ie.phone||"",date_of_birth:Ie.date_of_birth||"",occupation:Ie.occupation||"",state_of_origin:Ie.state_of_origin||"",state_of_residence:Ie.state_of_residence||""}),sessionStorage.setItem("user",JSON.stringify(Ie))}}catch(de){console.error("Failed to fetch profile:",de)}},Xe=async()=>{try{const de=await Fe.get("/api/calculations");de.data.success&&h(de.data.calculations)}catch(de){console.error("Failed to fetch calculations:",de)}},Ae=async()=>{try{const de=await Fe.get("/api/badges");de.data.success&&te(de.data.badges)}catch(de){console.error("Failed to fetch badges:",de)}},Be=async de=>{de.preventDefault(),w(""),x(""),v(!0);try{const Ie=await Fe.put("/api/auth/profile",{full_name:Pe.full_name,phone:Pe.phone,date_of_birth:Pe.date_of_birth});Ie.data.success&&(x("Profile updated successfully"),C(!1),f(Ie.data.user),sessionStorage.setItem("user",JSON.stringify(Ie.data.user)),e&&(e.full_name=Ie.data.user.full_name,e.phone=Ie.data.user.phone,e.date_of_birth=Ie.data.user.date_of_birth))}catch(Ie){w(Ie.response?.data?.error||"Update failed")}finally{v(!1)}},pt=async de=>{if(confirm("Are you sure you want to delete this calculation?"))try{(await Fe.delete(`/api/calculations/${de}`)).data.success&&(h(p.filter(at=>at.id!==de)),x("Calculation deleted"),setTimeout(()=>x(""),3e3))}catch(Ie){console.error("Failed to delete calculation:",Ie),w("Failed to delete calculation")}},bt=de=>{E(de),N(!0)},gt=de=>{a&&a({type:de.calculator_type,data:de.input_data}),o&&o(de.calculator_type),N(!1),E(null)},$t=de=>{me(de),Y(!0)},or=de=>new Date(de).toLocaleDateString("en-NG",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),Er=de=>de.calculator_type==="pit"?{amount:de.result_data?.tax_payable,income:de.result_data?.total_income,type:"Tax Payable",icon:"💰",color:"#4dabf7"}:de.calculator_type==="cit"?{amount:de.result_data?.total_tax_payable,income:de.result_data?.assessable_profit,type:"Total Tax",icon:"🏢",color:"#8B5CF6"}:de.calculator_type==="vat"?{amount:de.result_data?.vat,income:de.result_data?.net,type:"VAT Amount",icon:"🧾",color:"#FF8C00"}:de.calculator_type==="wht"?{amount:de.result_data?.rate,income:null,type:"WHT Rate",icon:"🔍",color:"#0B4F6C"}:de.calculator_type==="rent"?{amount:de.result_data?.actual_relief,income:de.result_data?.rent,type:"Rent Relief",icon:"🏠",color:"#2E7D32"}:{amount:0,income:0,type:"Calculation",icon:"📊",color:"#666"},ni=(()=>{let de=[...p];if(D!=="all"&&(de=de.filter(Ie=>Ie.calculator_type===D)),H){const Ie=H.toLowerCase();de=de.filter(at=>{const sr=at.calculator_type.toLowerCase().includes(Ie),nn=or(at.created_at).toLowerCase().includes(Ie),ii=Er(at).amount?.toString().includes(Ie);return sr||nn||ii})}return de.sort((Ie,at)=>{const sr=new Date(Ie.created_at),nn=new Date(at.created_at);return q==="newest"?nn-sr:sr-nn}),de})(),rn=()=>l.jsxs("div",{className:"profile-subtabs",children:[l.jsx("button",{className:`subtab-btn ${P==="calculations"?"active":""}`,onClick:()=>R("calculations"),children:"📊 Saved Calculations"}),l.jsx("button",{className:`subtab-btn ${P==="years"?"active":""}`,onClick:()=>U(!0),children:"📅 Multi-Year Tracking"}),l.jsx("button",{className:`subtab-btn ${P==="tips"?"active":""}`,onClick:()=>K(!0),children:"💡 Tax Tips"}),l.jsx("button",{className:`subtab-btn ${P==="compare"?"active":""}`,onClick:()=>Y(!0),children:"🔄 Compare Scenarios"}),l.jsx("button",{className:`subtab-btn ${P==="bulk"?"active":""}`,onClick:()=>L(!0),children:"📦 Bulk Upload"}),l.jsx("button",{className:`subtab-btn ${P==="export"?"active":""}`,onClick:()=>pe(!0),children:"📥 Export to Excel"}),l.jsxs("button",{className:`subtab-btn ${P==="badges"?"active":""}`,onClick:()=>R("badges"),children:["🏆 Badges (",se.length,")"]})]});return l.jsxs("div",{className:"profile-container",children:[l.jsxs("div",{className:"profile-header",children:[l.jsxs("div",{className:"header-left",children:[l.jsx("div",{className:"avatar",children:u.profile_picture?l.jsx("img",{src:u.profile_picture,alt:u.full_name,style:{width:"100%",height:"100%",borderRadius:"50%"}}):"👤"}),l.jsxs("div",{className:"header-info",children:[l.jsx("h2",{children:u.full_name||"My Account"}),l.jsx("p",{className:"email",children:u.email})]})]}),l.jsxs("div",{className:"header-right",children:[l.jsxs("div",{className:"credit-badge-large",onClick:()=>window.dispatchEvent(new CustomEvent("open-credit-modal")),children:[l.jsx("span",{className:"credit-icon",children:"💰"}),l.jsx("span",{className:"credit-amount",children:r}),l.jsx("span",{className:"credit-label",children:"credits"})]}),l.jsx("button",{className:"logout-btn",onClick:t,children:"🚪 Logout"})]})]}),b&&l.jsxs("div",{className:"error-message",children:["⚠️ ",b]}),_&&l.jsxs("div",{className:"success-message",children:["✅ ",_]}),l.jsxs("div",{className:"profile-content",children:[l.jsxs("div",{className:"profile-sidebar",children:[l.jsxs("div",{className:"profile-card",children:[l.jsx("h3",{children:"Personal Information"}),S?l.jsxs("form",{onSubmit:Be,children:[l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Full Name"}),l.jsx("input",{type:"text",value:Pe.full_name,onChange:de=>Ee({...Pe,full_name:de.target.value})})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Phone Number"}),l.jsx("input",{type:"tel",value:Pe.phone,onChange:de=>Ee({...Pe,phone:de.target.value}),placeholder:"e.g., 08012345678"}),l.jsx("small",{children:"We'll send you tax deadline reminders"})]}),l.jsxs("div",{className:"form-group",children:[l.jsx("label",{children:"Date of Birth"}),l.jsx("input",{type:"date",value:Pe.date_of_birth,onChange:de=>Ee({...Pe,date_of_birth:de.target.value})})]}),l.jsxs("div",{className:"info-row",style:{marginTop:"16px",paddingTop:"16px",borderTop:"1px solid rgba(255,255,255,0.1)"},children:[l.jsx("span",{className:"info-label",children:"Occupation"}),l.jsx("span",{className:"info-value",children:u.occupation||"Not provided"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:"State of Origin"}),l.jsx("span",{className:"info-value",children:u.state_of_origin||"Not provided"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:"State of Residence"}),l.jsx("span",{className:"info-value",children:u.state_of_residence||"Not provided"})]}),l.jsxs("div",{className:"form-actions",children:[l.jsx("button",{type:"submit",className:"save-btn",disabled:m,children:m?"Saving...":"Save Changes"}),l.jsx("button",{type:"button",className:"cancel-btn",onClick:()=>C(!1),children:"Cancel"})]})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:"Full Name"}),l.jsx("span",{className:"info-value",children:u.full_name})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:"Email"}),l.jsx("span",{className:"info-value",children:u.email})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:"Phone"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[l.jsx("span",{className:"info-value",children:u.phone||"Not provided"}),!u.phone&&l.jsx("span",{className:"phone-reminder",children:"Add phone for tax reminders"})]})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:"Date of Birth"}),l.jsx("span",{className:"info-value",children:u.date_of_birth?new Date(u.date_of_birth).toLocaleDateString():"Not provided"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:"Occupation"}),l.jsx("span",{className:"info-value",children:u.occupation||"Not provided"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:"State of Origin"}),l.jsx("span",{className:"info-value",children:u.state_of_origin||"Not provided"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:"State of Residence"}),l.jsx("span",{className:"info-value",children:u.state_of_residence||"Not provided"})]}),l.jsxs("div",{className:"info-row",children:[l.jsx("span",{className:"info-label",children:"Member Since"}),l.jsx("span",{className:"info-value",children:u.created_at?or(u.created_at):"N/A"})]}),l.jsx("button",{className:"edit-btn",onClick:()=>C(!0),children:"✏️ Edit Profile"})]})]}),l.jsx(hW,{userId:u.id,userStats:c}),l.jsxs("div",{className:"stats-card",children:[l.jsx("h3",{children:"Your Tax Statistics"}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Total Calculations"}),l.jsx("span",{className:"stat-value",children:p.length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"PIT Calculations"}),l.jsx("span",{className:"stat-value",children:p.filter(de=>de.calculator_type==="pit").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"CIT Calculations"}),l.jsx("span",{className:"stat-value",children:p.filter(de=>de.calculator_type==="cit").length})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Credits Used"}),l.jsx("span",{className:"stat-value",children:Math.max(0,15-r)})]}),l.jsxs("div",{className:"stat-item",children:[l.jsx("span",{className:"stat-label",children:"Badges Earned"}),l.jsx("span",{className:"stat-value",children:se.length})]})]})]}),l.jsxs("div",{className:"profile-main",children:[rn(),P==="calculations"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"calculations-header",children:[l.jsx("h3",{children:"Saved Calculations"}),l.jsxs("div",{className:"filters",children:[l.jsxs("select",{value:D,onChange:de=>G(de.target.value),children:[l.jsx("option",{value:"all",children:"All Types"}),l.jsx("option",{value:"pit",children:"PIT"}),l.jsx("option",{value:"cit",children:"CIT"}),l.jsx("option",{value:"vat",children:"VAT"}),l.jsx("option",{value:"wht",children:"WHT"}),l.jsx("option",{value:"rent",children:"Rent Relief"})]}),l.jsxs("select",{value:q,onChange:de=>M(de.target.value),children:[l.jsx("option",{value:"newest",children:"Newest First"}),l.jsx("option",{value:"oldest",children:"Oldest First"})]}),l.jsx("input",{type:"text",placeholder:"Search...",value:H,onChange:de=>B(de.target.value)})]})]}),p.length===0?l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"📊"}),l.jsx("h3",{children:"No saved calculations yet"}),l.jsx("p",{children:'Use any calculator and click "Save" to keep your results here.'})]}):ni.length===0?l.jsx("div",{className:"empty-state",children:l.jsx("p",{children:"No calculations match your filters."})}):l.jsx("div",{className:"calculations-grid",children:ni.map(de=>{const Ie=Er(de);return l.jsxs("div",{className:"calculation-card",onClick:()=>bt(de),children:[l.jsxs("div",{className:"card-header",children:[l.jsx("span",{className:"card-type",style:{background:`${Ie.color}20`,color:Ie.color},children:de.calculator_type.toUpperCase()}),l.jsx("span",{className:"card-date",children:or(de.created_at)})]}),l.jsx("div",{className:"card-icon",style:{color:Ie.color},children:Ie.icon}),l.jsx("div",{className:"card-amount",style:{color:Ie.color},children:Ie.amount?_e(Ie.amount):"₦0"}),Ie.income&&l.jsxs("div",{className:"card-income",children:["Income: ",_e(Ie.income)]}),l.jsxs("div",{className:"card-actions",children:[l.jsx("button",{className:"action-btn view-btn",onClick:at=>{at.stopPropagation(),bt(de)},children:"👁️ View"}),l.jsx("button",{className:"action-btn use-btn",onClick:at=>{at.stopPropagation(),gt(de)},children:"🔄 Use"}),l.jsx("button",{className:"action-btn compare-btn",onClick:at=>{at.stopPropagation(),$t(de)},title:"Compare Scenarios",children:"🔀 Compare"}),l.jsx("button",{className:"action-btn delete-btn",onClick:at=>{at.stopPropagation(),pt(de.id)},children:"🗑️"})]})]},de.id)})})]}),P==="badges"&&l.jsx(pW,{userBadges:se})]})]}),A&&O&&l.jsx(sW,{calculation:O,user,onClose:()=>{N(!1),E(null)},onUse:()=>{gt(O),N(!1)},creditBalance:r,setCreditBalance:n,setActiveTab:o}),F&&l.jsx("div",{className:"modal-overlay",children:l.jsx(qx,{baseScenario:ge?.input_data,onClose:()=>{Y(!1),me(null)},creditBalance:r,setCreditBalance:n,calculatorType:ge?.calculator_type||"pit"})}),J&&l.jsx("div",{className:"modal-overlay",children:l.jsx(lW,{creditBalance:r,setCreditBalance:n,onClose:()=>U(!1)})}),X&&l.jsx("div",{className:"modal-overlay",children:l.jsx(cW,{creditBalance:r,setCreditBalance:n,onClose:()=>K(!1)})}),I&&l.jsx("div",{className:"modal-overlay",children:l.jsx(uW,{creditBalance:r,setCreditBalance:n,onClose:()=>L(!1)})}),ie&&l.jsx("div",{className:"modal-overlay",children:l.jsx(dW,{creditBalance:r,setCreditBalance:n,onClose:()=>pe(!1)})}),fe&&l.jsx("div",{className:"modal-overlay",children:l.jsx(fW,{creditBalance:r,setCreditBalance:n,onClose:()=>ve(!1)})}),l.jsx("style",{children:`
        .profile-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 24px;
        }
        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding: 24px;
          background: rgba(255,255,255,0.03);
          border: 1px solid #2D3748;
          border-radius: 16px;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .avatar {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          overflow: hidden;
        }
        .header-info h2 {
          margin: 0 0 4px 0;
          font-size: 24px;
          color: white;
        }
        .header-info .email {
          margin: 0;
          color: #A0AEC0;
          font-size: 14px;
        }
        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .credit-badge-large {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: linear-gradient(135deg, rgba(255,215,0,0.15), rgba(255,215,0,0.05));
          border: 1px solid rgba(255,215,0,0.3);
          border-radius: 40px;
          cursor: pointer;
        }
        .credit-icon {
          font-size: 20px;
        }
        .credit-amount {
          font-size: 20px;
          font-weight: 700;
          color: #FFD700;
        }
        .credit-label {
          color: #A0AEC0;
          font-size: 14px;
        }
        .logout-btn {
          padding: 10px 20px;
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 40px;
          color: #ff6b6b;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .error-message {
          padding: 16px;
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          color: #ff6b6b;
          margin-bottom: 20px;
        }
        .success-message {
          padding: 16px;
          background: rgba(46,125,50,0.1);
          border: 1px solid rgba(46,125,50,0.3);
          border-radius: 8px;
          color: #2E7D32;
          margin-bottom: 20px;
        }
        .profile-content {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 24px;
        }
        .profile-sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .profile-card, .stats-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid #2D3748;
          border-radius: 16px;
          padding: 24px;
        }
        .profile-card h3, .stats-card h3 {
          margin: 0 0 20px 0;
          font-size: 18px;
          color: #4299E1;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #2D3748;
          flex-wrap: wrap;
          gap: 8px;
        }
        .info-row:last-child {
          border-bottom: none;
        }
        .info-label {
          color: #A0AEC0;
          font-size: 14px;
        }
        .info-value {
          font-weight: 600;
          color: white;
        }
        .phone-reminder {
          font-size: 11px;
          color: #FFD700;
          background: rgba(255,215,0,0.1);
          padding: 4px 8px;
          border-radius: 12px;
          white-space: nowrap;
        }
        .edit-btn {
          width: 100%;
          margin-top: 20px;
          padding: 12px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 8px;
          color: white;
          cursor: pointer;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          margin-bottom: 6px;
          color: #A0AEC0;
          font-size: 13px;
        }
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 6px;
          color: white;
        }
        .form-group small {
          display: block;
          margin-top: 4px;
          color: #A0AEC0;
          font-size: 11px;
        }
        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }
        .save-btn {
          flex: 1;
          padding: 12px;
          background: #4299E1;
          border: none;
          border-radius: 6px;
          color: white;
          cursor: pointer;
        }
        .cancel-btn {
          flex: 1;
          padding: 12px;
          background: transparent;
          border: 1px solid #4A5568;
          border-radius: 6px;
          color: #A0AEC0;
          cursor: pointer;
        }
        .stat-item {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #2D3748;
        }
        .stat-item:last-child {
          border-bottom: none;
        }
        .stat-label {
          color: #A0AEC0;
        }
        .stat-value {
          font-weight: 600;
          color: #FFD700;
        }
        .profile-main {
          background: rgba(255,255,255,0.02);
          border: 1px solid #2D3748;
          border-radius: 16px;
          padding: 24px;
        }
        .profile-subtabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          padding: 4px;
          background: #2D3748;
          border-radius: 40px;
          overflow-x: auto;
        }
        .subtab-btn {
          padding: 10px 16px;
          background: transparent;
          border: none;
          border-radius: 30px;
          color: #A0AEC0;
          font-size: 13px;
          cursor: pointer;
          white-space: nowrap;
        }
        .subtab-btn.active {
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          color: white;
        }
        .calculations-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .calculations-header h3 {
          margin: 0;
          font-size: 18px;
          color: white;
        }
        .filters {
          display: flex;
          gap: 12px;
        }
        .filters select,
        .filters input {
          padding: 8px 12px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 6px;
          color: white;
          font-size: 13px;
        }
        .filters input {
          min-width: 200px;
        }
        .empty-state {
          text-align: center;
          padding: 60px;
          background: #2D3748;
          border-radius: 12px;
        }
        .empty-icon {
          font-size: 48px;
          margin-bottom: 16px;
          opacity: 0.5;
        }
        .empty-state h3 {
          margin: 0 0 8px 0;
          color: white;
        }
        .empty-state p {
          color: #A0AEC0;
          margin: 0;
        }
        .calculations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }
        .calculation-card {
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 12px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .calculation-card:hover {
          transform: translateY(-4px);
          border-color: #4299E1;
          box-shadow: 0 10px 20px rgba(66,153,225,0.2);
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .card-type {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }
        .card-date {
          color: #A0AEC0;
          font-size: 11px;
        }
        .card-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }
        .card-amount {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .card-income {
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 16px;
        }
        .card-actions {
          display: flex;
          gap: 8px;
        }
        .action-btn {
          flex: 1;
          padding: 8px;
          border: none;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
        .view-btn {
          background: #4A5568;
          color: white;
        }
        .use-btn {
          background: rgba(72,187,120,0.2);
          color: #48BB78;
        }
        .compare-btn {
          background: rgba(66,153,225,0.2);
          color: #4299E1;
        }
        .delete-btn {
          background: rgba(178,34,34,0.2);
          color: #ff6b6b;
          flex: 0.5;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
          overflow-y: auto;
        }
      `})]})},gW=({user:e,onComplete:t,onLogout:r})=>{const[n,a]=T.useState({date_of_birth:"",occupation:"",state_of_origin:"",state_of_residence:""}),[o,c]=T.useState(!1),[u,f]=T.useState(""),p=["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT - Abuja","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"],h=["Civil Servant","Private Sector Employee","Business Owner/Trader","Professional (Lawyer, Doctor, Accountant)","Contractor","Artisan","Freelancer","Student","Retired","Unemployed","Other"],m=b=>{a({...n,[b.target.name]:b.target.value})},v=async b=>{if(b.preventDefault(),!n.date_of_birth||!n.occupation||!n.state_of_origin||!n.state_of_residence){f("All fields are required");return}c(!0),f("");try{const w=await Fe.put("/api/auth/profile",n);if(w.data.success){const _={...e,...w.data.user};sessionStorage.setItem("user",JSON.stringify(_)),t(_)}}catch(w){f(w.response?.data?.error||"Failed to save profile")}finally{c(!1)}};return l.jsxs("div",{className:"profile-setup-overlay",children:[l.jsxs("div",{className:"profile-setup-modal",children:[l.jsx("button",{className:"logout-btn-top",onClick:r,children:"← Use Free Calculator Instead"}),l.jsxs("div",{className:"setup-header",children:[l.jsx("div",{className:"setup-icon",children:"👋"}),l.jsx("h2",{children:"Tell Us About Yourself"}),l.jsx("p",{children:"This helps us calculate your taxes accurately"})]}),u&&l.jsxs("div",{className:"error-message",children:["⚠️ ",u]}),l.jsxs("form",{onSubmit:v,className:"setup-form",children:[l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{children:["Date of Birth ",l.jsx("span",{className:"required",children:"*"})]}),l.jsx("input",{type:"date",name:"date_of_birth",value:n.date_of_birth,onChange:m,required:!0,max:new Date().toISOString().split("T")[0]}),l.jsx("small",{children:"We need this to verify your age for tax purposes"})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{children:["What work do you do? ",l.jsx("span",{className:"required",children:"*"})]}),l.jsxs("select",{name:"occupation",value:n.occupation,onChange:m,required:!0,className:"dark-select",children:[l.jsx("option",{value:"",children:"Select your occupation"}),h.map(b=>l.jsx("option",{value:b,children:b},b))]}),l.jsx("small",{children:"This helps us give you relevant tax tips"})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{children:["Which state are you from? ",l.jsx("span",{className:"required",children:"*"})]}),l.jsxs("select",{name:"state_of_origin",value:n.state_of_origin,onChange:m,required:!0,className:"dark-select",children:[l.jsx("option",{value:"",children:"Select your state of origin"}),p.map(b=>l.jsx("option",{value:b,children:b},b))]})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{children:["Where do you live now? ",l.jsx("span",{className:"required",children:"*"})]}),l.jsxs("select",{name:"state_of_residence",value:n.state_of_residence,onChange:m,required:!0,className:"dark-select",children:[l.jsx("option",{value:"",children:"Select your state of residence"}),p.map(b=>l.jsx("option",{value:b,children:b},b))]}),l.jsx("small",{children:"Your taxes are based on where you live"})]}),l.jsx("div",{className:"form-actions",children:l.jsx("button",{type:"submit",className:"submit-btn",disabled:o,children:o?"Saving...":"Continue to Calculator"})})]}),l.jsx("p",{className:"privacy-note",children:"🔒 We only use this to calculate your taxes correctly. We never share your information."})]}),l.jsx("style",{children:`
        .profile-setup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20000;
          padding: 20px;
        }

        .profile-setup-modal {
          background: rgba(26, 30, 36, 0.98);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 40px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          position: relative;
        }

        .logout-btn-top {
          position: absolute;
          top: 16px;
          right: 16px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          color: #A0AEC0;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .logout-btn-top:hover {
          background: rgba(255,255,255,0.1);
        }

        .setup-header {
          text-align: center;
          margin-bottom: 32px;
          margin-top: 20px;
        }

        .setup-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .setup-header h2 {
          color: white;
          font-size: 28px;
          margin: 0 0 8px 0;
        }

        .setup-header p {
          color: #A0AEC0;
          font-size: 14px;
          margin: 0;
        }

        .error-message {
          background: rgba(178,34,34,0.1);
          border: 1px solid rgba(178,34,34,0.3);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #ff6b6b;
          text-align: center;
        }

        .setup-form {
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: white;
          font-weight: 500;
        }

        .required {
          color: #ff6b6b;
          margin-left: 4px;
        }

        .form-group input,
        .form-group select.dark-select {
          width: 100%;
          padding: 12px 16px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 15px;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 18px;
        }

        .form-group input:focus,
        .form-group select.dark-select:focus {
          outline: none;
          border-color: #4299E1;
          box-shadow: 0 0 0 3px rgba(66,153,225,0.2);
        }

        .form-group select.dark-select option {
          background: #2D3748;
          color: white;
        }

        .form-group small {
          display: block;
          margin-top: 4px;
          color: #A0AEC0;
          font-size: 12px;
        }

        .form-actions {
          margin-top: 32px;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 40px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(11,79,108,0.4);
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .privacy-note {
          text-align: center;
          color: #A0AEC0;
          font-size: 12px;
          margin: 0;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
      `})]})},vW=({isOpen:e,onClose:t,onPurchase:r,currentBalance:n,requiredCredits:a=1})=>{const[o,c]=T.useState("50"),[u,f]=T.useState(!1),[p,h]=T.useState("");if(!e)return null;const m=[{credits:50,price:750,popular:!0,pricePerCredit:15},{credits:150,price:2e3,popular:!1,pricePerCredit:13.33},{credits:500,price:6e3,popular:!1,pricePerCredit:12}],v=async()=>{f(!0),h("");const b=m.find(w=>w.credits===parseInt(o));try{const w=await Fe.post("/api/credits/purchase",{amount:b.price,credits:b.credits});w.data.success?(r(b.price,b.credits,w.data.new_balance),t()):h(w.data.error||"Purchase failed")}catch(w){h(w.response?.data?.error||"Network error")}finally{f(!1)}};return l.jsxs("div",{className:"modal-overlay",children:[l.jsxs("div",{className:"credit-modal",children:[l.jsx("button",{className:"close-btn",onClick:t,children:"✕"}),l.jsx("div",{className:"modal-icon",children:"💰"}),l.jsx("h2",{children:"Buy Credits"}),l.jsxs("p",{className:"balance-info",children:["Current balance: ",l.jsxs("strong",{children:[n," credits"]})]}),a>0&&n<a&&l.jsxs("div",{className:"warning",children:["You need ",a," credits for this action"]}),p&&l.jsxs("div",{className:"error-message",children:["⚠️ ",p]}),l.jsx("div",{className:"packs",children:m.map(b=>l.jsxs("div",{className:`pack ${o===b.credits.toString()?"selected":""}`,onClick:()=>c(b.credits.toString()),children:[b.popular&&l.jsx("span",{className:"popular-badge",children:"BEST VALUE"}),l.jsxs("div",{className:"pack-credits",children:[b.credits," Credits"]}),l.jsxs("div",{className:"pack-price",children:["₦",b.price]}),l.jsxs("div",{className:"pack-per-credit",children:["₦",b.pricePerCredit.toFixed(2),"/credit"]})]},b.credits))}),l.jsx("button",{className:"purchase-btn",onClick:v,disabled:u,children:u?"Processing...":`Pay ₦${m.find(b=>b.credits===parseInt(o))?.price}`}),l.jsx("p",{className:"note",children:"Credits never expire. This is a simulation – no real payment."})]}),l.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20000;
        }
        .credit-modal {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 500px;
          width: 90%;
          color: white;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 20px;
          cursor: pointer;
        }
        .modal-icon {
          font-size: 48px;
          text-align: center;
          margin-bottom: 16px;
        }
        h2 {
          text-align: center;
          margin: 0 0 8px 0;
          color: #FFD700;
        }
        .balance-info {
          text-align: center;
          color: #A0AEC0;
          margin-bottom: 16px;
        }
        .warning {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          padding: 10px;
          color: #FBD38D;
          text-align: center;
          margin-bottom: 20px;
        }
        .error-message {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          padding: 10px;
          color: #FBD38D;
          margin-bottom: 20px;
        }
        .packs {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .pack {
          background: #2D3748;
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 16px;
          cursor: pointer;
          position: relative;
          transition: all 0.2s;
        }
        .pack:hover {
          background: #364153;
        }
        .pack.selected {
          border-color: #FFD700;
          background: rgba(255,215,0,0.1);
        }
        .popular-badge {
          position: absolute;
          top: -10px;
          left: 20px;
          background: #FFD700;
          color: black;
          padding: 2px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        .pack-credits {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .pack-price {
          font-size: 24px;
          color: #FFD700;
          font-weight: 700;
        }
        .pack-per-credit {
          color: #A0AEC0;
          font-size: 13px;
        }
        .purchase-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          border: none;
          border-radius: 8px;
          color: black;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
        }
        .purchase-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .note {
          text-align: center;
          color: #718096;
          font-size: 12px;
          margin-top: 16px;
        }
      `})]})},yW=({user:e,onClose:t})=>{const[r,n]=T.useState(""),[a,o]=T.useState(!1),[c,u]=T.useState(0),[f,p]=T.useState(0),[h,m]=T.useState(!0),[v,b]=T.useState("");T.useEffect(()=>{w()},[]);const w=async()=>{try{const O=await Fe.get("/api/referral/my-code");O.data.success&&(n(O.data.code),u(O.data.count||0),p(O.data.credits_earned||0))}catch{b("Failed to load referral data")}finally{m(!1)}},_=async()=>{m(!0),b("");try{const O=await Fe.post("/api/referral/generate");O.data.success&&n(O.data.code)}catch{b("Failed to generate code")}finally{m(!1)}},x=()=>{const O=`${window.location.origin}/?ref=${r}`;navigator.clipboard.writeText(O),o(!0),setTimeout(()=>o(!1),2e3)},S=()=>{const E=`Join me on Zero Mumu Tax! Stop overpaying tax. Use my referral link: ${`${window.location.origin}/?ref=${r}`}`;window.open(`https://wa.me/?text=${encodeURIComponent(E)}`,"_blank")},C=()=>{const O=`${window.location.origin}/?ref=${r}`;window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent("I'm using Zero Mumu Tax to calculate my taxes correctly. Join me and get 15 free credits!")}&url=${encodeURIComponent(O)}`,"_blank")};return l.jsxs("div",{className:"modal-overlay",children:[l.jsxs("div",{className:"referral-modal",children:[l.jsx("button",{className:"close-btn",onClick:t,children:"✕"}),l.jsxs("div",{className:"modal-header",children:[l.jsx("div",{className:"header-icon",children:"🎁"}),l.jsx("h2",{children:"Refer & Earn"}),l.jsx("p",{children:"Share Zero Mumu Tax with your friends and earn credits"})]}),v&&l.jsxs("div",{className:"error-message",children:["⚠️ ",v]}),l.jsxs("div",{className:"stats-card",children:[l.jsxs("div",{className:"stat",children:[l.jsx("span",{className:"stat-label",children:"Friends Referred"}),l.jsx("span",{className:"stat-value",children:c})]}),l.jsxs("div",{className:"stat",children:[l.jsx("span",{className:"stat-label",children:"Credits Earned"}),l.jsx("span",{className:"stat-value",children:f})]})]}),l.jsxs("div",{className:"referral-section",children:[l.jsx("h3",{children:"Your Referral Link"}),h?l.jsx("div",{className:"loading-spinner"}):r?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"code-display",children:[l.jsx("input",{type:"text",value:`${window.location.origin}/?ref=${r}`,readOnly:!0}),l.jsx("button",{className:"copy-btn",onClick:x,children:a?"✓ Copied!":"Copy"})]}),l.jsxs("div",{className:"share-buttons",children:[l.jsx("button",{className:"share-btn whatsapp",onClick:S,children:"📱 Share on WhatsApp"}),l.jsx("button",{className:"share-btn twitter",onClick:C,children:"🐦 Share on Twitter"})]})]}):l.jsx("button",{className:"generate-btn",onClick:_,children:"Generate My Referral Code"})]}),l.jsxs("div",{className:"info-box",children:[l.jsx("h4",{children:"How it works"}),l.jsxs("ul",{children:[l.jsx("li",{children:"Share your unique link with friends"}),l.jsxs("li",{children:["When they sign up, you both get ",l.jsx("strong",{children:"15 free credits"})]}),l.jsx("li",{children:"No limit - refer as many friends as you want!"}),l.jsx("li",{children:"Credits never expire"})]})]}),l.jsxs("div",{className:"leaderboard-preview",children:[l.jsx("h4",{children:"🏆 Top Referrers"}),l.jsx("p",{children:"Coming soon! Compete with other users."})]}),l.jsx("button",{className:"done-btn",onClick:t,children:"Done"})]}),l.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20000;
          padding: 20px;
        }
        .referral-modal {
          background: #1A202C;
          border-radius: 24px;
          padding: 32px;
          max-width: 500px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          color: white;
        }
        .close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          color: #A0AEC0;
          font-size: 20px;
          cursor: pointer;
        }
        .modal-header {
          text-align: center;
          margin-bottom: 24px;
        }
        .header-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }
        .modal-header h2 {
          margin: 0 0 8px 0;
          color: #FFD700;
        }
        .modal-header p {
          color: #A0AEC0;
          margin: 0;
        }
        .error-message {
          background: rgba(221,107,32,0.1);
          border: 1px solid #DD6B20;
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 20px;
          color: #FBD38D;
        }
        .stats-card {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          padding: 20px;
          background: #2D3748;
          border-radius: 12px;
        }
        .stat {
          flex: 1;
          text-align: center;
        }
        .stat-label {
          display: block;
          color: #A0AEC0;
          font-size: 12px;
          margin-bottom: 4px;
        }
        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #FFD700;
        }
        .referral-section {
          margin-bottom: 24px;
        }
        .referral-section h3 {
          margin: 0 0 12px 0;
          color: #4299E1;
        }
        .loading-spinner {
          width: 30px;
          height: 30px;
          border: 3px solid rgba(255,255,255,0.1);
          border-top-color: #4299E1;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .generate-btn {
          width: 100%;
          padding: 14px;
          background: #4299E1;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
        .code-display {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }
        .code-display input {
          flex: 1;
          padding: 12px;
          background: #2D3748;
          border: 1px solid #4A5568;
          border-radius: 8px;
          color: white;
          font-size: 14px;
        }
        .copy-btn {
          padding: 12px 24px;
          background: #48BB78;
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
        .share-buttons {
          display: flex;
          gap: 12px;
        }
        .share-btn {
          flex: 1;
          padding: 12px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
        }
        .share-btn.whatsapp {
          background: #25D366;
          color: white;
        }
        .share-btn.twitter {
          background: #1DA1F2;
          color: white;
        }
        .info-box {
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
          margin-bottom: 24px;
        }
        .info-box h4 {
          margin: 0 0 12px 0;
          color: #4299E1;
        }
        .info-box ul {
          margin: 0;
          padding-left: 20px;
          color: #CBD5E0;
        }
        .info-box li {
          margin-bottom: 8px;
        }
        .leaderboard-preview {
          padding: 16px;
          background: #2D3748;
          border-radius: 8px;
          margin-bottom: 24px;
          text-align: center;
          border: 1px dashed #FFD700;
        }
        .leaderboard-preview h4 {
          margin: 0 0 8px 0;
          color: #FFD700;
        }
        .leaderboard-preview p {
          margin: 0;
          color: #A0AEC0;
          font-style: italic;
        }
        .done-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #0B4F6C, #145C7A);
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }
      `})]})},xW=({onLoginClick:e})=>{const[t,r]=T.useState(null),[n,a]=T.useState(!1),[o,c]=T.useState(""),[u,f]=T.useState(!1);T.useEffect(()=>{if(localStorage.getItem("teaser-dismissed")){a(!0);return}const b=setTimeout(()=>{localStorage.getItem("teaser-dismissed")||f(!0)},5e3);return()=>clearTimeout(b)},[]);const p=async()=>{if(o)try{const v=await Fe.post("/api/teaser/savings-estimate",{income:parseFloat(o.replace(/,/g,""))||0});r(v.data.estimate),f(!1)}catch{r(45e3),f(!1)}},h=()=>{a(!0),localStorage.setItem("teaser-dismissed","true")},m=v=>new Intl.NumberFormat("en-NG",{style:"currency",currency:"NGN",minimumFractionDigits:0,maximumFractionDigits:0}).format(v);return n?null:l.jsxs(l.Fragment,{children:[u&&l.jsx("div",{className:"teaser-overlay",children:l.jsxs("div",{className:"teaser-modal",children:[l.jsx("button",{className:"teaser-close",onClick:h,children:"✕"}),l.jsx("div",{className:"teaser-icon",children:"💰"}),l.jsx("h3",{children:"Are you overpaying tax?"}),l.jsx("p",{children:"Tell us your approximate monthly income and we'll estimate how much you might be overpaying."}),l.jsxs("div",{className:"input-group",children:[l.jsx("span",{className:"currency",children:"₦"}),l.jsx("input",{type:"text",value:o,onChange:v=>c(v.target.value.replace(/[^\d]/g,"")),placeholder:"e.g., 500,000"})]}),l.jsx("button",{className:"estimate-btn",onClick:p,children:"Show My Estimate"}),l.jsx("button",{className:"skip-btn",onClick:h,children:"Not now"})]})}),t&&l.jsx("div",{className:"teaser-overlay",children:l.jsxs("div",{className:"teaser-modal result-modal",children:[l.jsx("button",{className:"teaser-close",onClick:h,children:"✕"}),l.jsx("div",{className:"result-icon",children:"⚠️"}),l.jsx("h3",{children:"You could be overpaying!"}),l.jsx("div",{className:"estimate-amount",children:m(t)}),l.jsx("p",{className:"estimate-text",children:"Based on similar taxpayers, you might be overpaying this amount in tax each year."}),l.jsx("button",{className:"login-btn",onClick:e,children:"Sign in to see exactly how to save it"}),l.jsx("button",{className:"skip-btn",onClick:h,children:"Maybe later"})]})}),l.jsx("style",{children:`
        .teaser-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20000;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .teaser-modal {
          background: linear-gradient(135deg, #1A202C, #2D3748);
          border-radius: 24px;
          padding: 32px;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
          color: white;
          position: relative;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .result-modal {
          border-left: 4px solid #DD6B20;
        }
        .teaser-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: none;
          border: none;
          color: #A0AEC0;
          cursor: pointer;
          font-size: 20px;
        }
        .teaser-icon, .result-icon {
          font-size: 64px;
          text-align: center;
          margin-bottom: 16px;
        }
        .teaser-modal h3 {
          margin: 0 0 12px 0;
          color: #FFD700;
          text-align: center;
          font-size: 24px;
        }
        .teaser-modal p {
          margin: 0 0 24px 0;
          color: #CBD5E0;
          font-size: 15px;
          text-align: center;
          line-height: 1.5;
        }
        .input-group {
          position: relative;
          margin-bottom: 20px;
        }
        .currency {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #A0AEC0;
          font-size: 18px;
        }
        .input-group input {
          width: 100%;
          padding: 16px 16px 16px 48px;
          background: #2D3748;
          border: 2px solid #4A5568;
          border-radius: 12px;
          color: white;
          font-size: 18px;
        }
        .input-group input:focus {
          outline: none;
          border-color: #4299E1;
        }
        .estimate-btn, .login-btn {
          width: 100%;
          padding: 16px;
          background: #4299E1;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          margin-bottom: 12px;
        }
        .estimate-btn:hover, .login-btn:hover {
          background: #3182CE;
        }
        .skip-btn {
          width: 100%;
          padding: 12px;
          background: transparent;
          border: none;
          color: #A0AEC0;
          cursor: pointer;
          font-size: 14px;
        }
        .estimate-amount {
          font-size: 48px;
          font-weight: 800;
          color: #FFD700;
          text-align: center;
          margin: 20px 0;
        }
        .estimate-text {
          margin-bottom: 24px !important;
        }
      `})]})},bW=()=>l.jsxs("div",{style:{position:"relative",width:"100px",height:"100px",filter:"drop-shadow(0 10px 20px rgba(0,0,0,0.3))",animation:"gentlePulse 4s ease-in-out infinite"},children:[l.jsx("style",{children:`
        @keyframes gentlePulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.1); }
        }
      `}),l.jsxs("svg",{viewBox:"0 0 200 200",xmlns:"http://www.w3.org",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"coinGold",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#8A6E2F"}),l.jsx("stop",{offset:"50%",stopColor:"#FFD700"}),l.jsx("stop",{offset:"100%",stopColor:"#B8860B"})]}),l.jsxs("linearGradient",{id:"safeGreen",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#00A859"}),l.jsx("stop",{offset:"100%",stopColor:"#006747"})]}),l.jsxs("filter",{id:"shine",children:[l.jsx("feGaussianBlur",{in:"SourceAlpha",stdDeviation:"2",result:"blur"}),l.jsx("feSpecularLighting",{in:"blur",surfaceScale:"5",specularConstant:"1",specularExponent:"40",lightingColor:"#fff",result:"light",children:l.jsx("fePointLight",{x:"-5000",y:"-10000",z:"20000"})}),l.jsx("feComposite",{in:"light",in2:"SourceAlpha",operator:"in",result:"light"}),l.jsx("feComposite",{in:"SourceGraphic",in2:"light",operator:"arithmetic",k1:"0",k2:"1",k3:"1",k4:"0"})]})]}),l.jsx("circle",{cx:"100",cy:"100",r:"90",fill:"none",stroke:"url(#safeGreen)",strokeWidth:"15"}),l.jsx("circle",{cx:"100",cy:"100",r:"70",fill:"url(#coinGold)",filter:"url(#shine)"}),l.jsx("text",{x:"100",y:"135",textAnchor:"middle",style:{fill:"#4D3D1A",fontSize:"110px",fontWeight:"900",fontFamily:"Arial, sans-serif"},children:"₦"}),l.jsx("rect",{x:"65",y:"145",width:"70",height:"25",rx:"5",fill:"#006747"}),l.jsx("text",{x:"100",y:"163",textAnchor:"middle",style:{fill:"#fff",fontSize:"18px",fontWeight:"bold",fontFamily:"system-ui"},children:"ZMT"})]})]});function Au(){return Au=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Au.apply(this,arguments)}var Kn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Kn||(Kn={}));const TA="popstate";function wW(e){e===void 0&&(e={});function t(n,a){let{pathname:o,search:c,hash:u}=n.location;return Ey("",{pathname:o,search:c,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:bk(a)}return jW(t,r,null,e)}function ir(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function xk(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _W(){return Math.random().toString(36).substr(2,8)}function RA(e,t){return{usr:e.state,key:e.key,idx:t}}function Ey(e,t,r,n){return r===void 0&&(r=null),Au({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pd(t):t,{state:r,key:t&&t.key||n||_W()})}function bk(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function pd(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function jW(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,c=a.history,u=Kn.Pop,f=null,p=h();p==null&&(p=0,c.replaceState(Au({},c.state,{idx:p}),""));function h(){return(c.state||{idx:null}).idx}function m(){u=Kn.Pop;let x=h(),S=x==null?null:x-p;p=x,f&&f({action:u,location:_.location,delta:S})}function v(x,S){u=Kn.Push;let C=Ey(_.location,x,S);p=h()+1;let O=RA(C,p),E=_.createHref(C);try{c.pushState(O,"",E)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;a.location.assign(E)}o&&f&&f({action:u,location:_.location,delta:1})}function b(x,S){u=Kn.Replace;let C=Ey(_.location,x,S);p=h();let O=RA(C,p),E=_.createHref(C);c.replaceState(O,"",E),o&&f&&f({action:u,location:_.location,delta:0})}function w(x){let S=a.location.origin!=="null"?a.location.origin:a.location.href,C=typeof x=="string"?x:bk(x);return C=C.replace(/ $/,"%20"),ir(S,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,S)}let _={get action(){return u},get location(){return e(a,c)},listen(x){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(TA,m),f=x,()=>{a.removeEventListener(TA,m),f=null}},createHref(x){return t(a,x)},createURL:w,encodeLocation(x){let S=w(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:v,replace:b,go(x){return c.go(x)}};return _}var DA;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(DA||(DA={}));function SW(e,t,r){return r===void 0&&(r="/"),NW(e,t,r)}function NW(e,t,r,n){let a=typeof t=="string"?pd(t):t,o=jk(a.pathname||"/",r);if(o==null)return null;let c=wk(e);AW(c);let u=null;for(let f=0;u==null&&f<c.length;++f){let p=FW(o);u=IW(c[f],p)}return u}function wk(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(o,c,u)=>{let f={relativePath:u===void 0?o.path||"":u,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};f.relativePath.startsWith("/")&&(ir(f.relativePath.startsWith(n),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(n.length));let p=Sa([n,f.relativePath]),h=r.concat(f);o.children&&o.children.length>0&&(ir(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),wk(o.children,t,h,p)),!(o.path==null&&!o.index)&&t.push({path:p,score:RW(p,o.index),routesMeta:h})};return e.forEach((o,c)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))a(o,c);else for(let f of _k(o.path))a(o,c,f)}),t}function _k(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return a?[o,""]:[o];let c=_k(n.join("/")),u=[];return u.push(...c.map(f=>f===""?o:[o,f].join("/"))),a&&u.push(...c),u.map(f=>e.startsWith("/")&&f===""?"/":f)}function AW(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:DW(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const CW=/^:[\w-]+$/,OW=3,EW=2,kW=1,PW=10,TW=-2,IA=e=>e==="*";function RW(e,t){let r=e.split("/"),n=r.length;return r.some(IA)&&(n+=TW),t&&(n+=EW),r.filter(a=>!IA(a)).reduce((a,o)=>a+(CW.test(o)?OW:o===""?kW:PW),n)}function DW(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function IW(e,t,r){let{routesMeta:n}=e,a={},o="/",c=[];for(let u=0;u<n.length;++u){let f=n[u],p=u===n.length-1,h=o==="/"?t:t.slice(o.length)||"/",m=MW({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},h),v=f.route;if(!m)return null;Object.assign(a,m.params),c.push({params:a,pathname:Sa([o,m.pathname]),pathnameBase:LW(Sa([o,m.pathnameBase])),route:v}),m.pathnameBase!=="/"&&(o=Sa([o,m.pathnameBase]))}return c}function MW(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=$W(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],c=o.replace(/(.)\/+$/,"$1"),u=a.slice(1);return{params:n.reduce((p,h,m)=>{let{paramName:v,isOptional:b}=h;if(v==="*"){let _=u[m]||"";c=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const w=u[m];return b&&!w?p[v]=void 0:p[v]=(w||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:c,pattern:e}}function $W(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),xk(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,u,f)=>(n.push({paramName:u,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function FW(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return xk(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function jk(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Sa=e=>e.join("/").replace(/\/\/+/g,"/"),LW=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function BW(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Sk=["post","put","patch","delete"];new Set(Sk);const zW=["get",...Sk];new Set(zW);function Cu(){return Cu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Cu.apply(this,arguments)}const qW=T.createContext(null),UW=T.createContext(null),Nk=T.createContext(null),hd=T.createContext(null),md=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Ak=T.createContext(null);function Ux(){return T.useContext(hd)!=null}function Ck(){return Ux()||ir(!1),T.useContext(hd).location}function WW(e,t){return HW(e,t)}function HW(e,t,r,n){Ux()||ir(!1);let{navigator:a}=T.useContext(Nk),{matches:o}=T.useContext(md),c=o[o.length-1],u=c?c.params:{};c&&c.pathname;let f=c?c.pathnameBase:"/";c&&c.route;let p=Ck(),h;if(t){var m;let x=typeof t=="string"?pd(t):t;f==="/"||(m=x.pathname)!=null&&m.startsWith(f)||ir(!1),h=x}else h=p;let v=h.pathname||"/",b=v;if(f!=="/"){let x=f.replace(/^\//,"").split("/");b="/"+v.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=SW(e,{pathname:b}),_=XW(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},u,x.params),pathname:Sa([f,a.encodeLocation?a.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?f:Sa([f,a.encodeLocation?a.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,r,n);return t&&_?T.createElement(hd.Provider,{value:{location:Cu({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Kn.Pop}},_):_}function GW(){let e=eH(),t=BW(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},t),r?T.createElement("pre",{style:a},r):null,null)}const YW=T.createElement(GW,null);class VW extends T.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?T.createElement(md.Provider,{value:this.props.routeContext},T.createElement(Ak.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KW(e){let{routeContext:t,match:r,children:n}=e,a=T.useContext(qW);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),T.createElement(md.Provider,{value:t},n)}function XW(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=n)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let c=e,u=(a=r)==null?void 0:a.errors;if(u!=null){let h=c.findIndex(m=>m.route.id&&u?.[m.route.id]!==void 0);h>=0||ir(!1),c=c.slice(0,Math.min(c.length,h+1))}let f=!1,p=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<c.length;h++){let m=c[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:v,errors:b}=r,w=m.route.loader&&v[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||w){f=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((h,m,v)=>{let b,w=!1,_=null,x=null;r&&(b=u&&m.route.id?u[m.route.id]:void 0,_=m.route.errorElement||YW,f&&(p<0&&v===0?(tH("route-fallback"),w=!0,x=null):p===v&&(w=!0,x=m.route.hydrateFallbackElement||null)));let S=t.concat(c.slice(0,v+1)),C=()=>{let O;return b?O=_:w?O=x:m.route.Component?O=T.createElement(m.route.Component,null):m.route.element?O=m.route.element:O=h,T.createElement(KW,{match:m,routeContext:{outlet:h,matches:S,isDataRoute:r!=null},children:O})};return r&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?T.createElement(VW,{location:r.location,revalidation:r.revalidation,component:_,error:b,children:C(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):C()},null)}var Ok=(function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e})(Ok||{});function QW(e){let t=T.useContext(UW);return t||ir(!1),t}function ZW(e){let t=T.useContext(md);return t||ir(!1),t}function JW(e){let t=ZW(),r=t.matches[t.matches.length-1];return r.route.id||ir(!1),r.route.id}function eH(){var e;let t=T.useContext(Ak),r=QW(Ok.UseRouteError),n=JW();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}const MA={};function tH(e,t,r){MA[e]||(MA[e]=!0)}function rH(e,t){e?.v7_startTransition,e?.v7_relativeSplatPath}function Ek(e){ir(!1)}function nH(e){let{basename:t="/",children:r=null,location:n,navigationType:a=Kn.Pop,navigator:o,static:c=!1,future:u}=e;Ux()&&ir(!1);let f=t.replace(/^\/*/,"/"),p=T.useMemo(()=>({basename:f,navigator:o,static:c,future:Cu({v7_relativeSplatPath:!1},u)}),[f,u,o,c]);typeof n=="string"&&(n=pd(n));let{pathname:h="/",search:m="",hash:v="",state:b=null,key:w="default"}=n,_=T.useMemo(()=>{let x=jk(h,f);return x==null?null:{location:{pathname:x,search:m,hash:v,state:b,key:w},navigationType:a}},[f,h,m,v,b,w,a]);return _==null?null:T.createElement(Nk.Provider,{value:p},T.createElement(hd.Provider,{children:r,value:_}))}function iH(e){let{children:t,location:r}=e;return WW(ky(t),r)}new Promise(()=>{});function ky(e,t){t===void 0&&(t=[]);let r=[];return T.Children.forEach(e,(n,a)=>{if(!T.isValidElement(n))return;let o=[...t,a];if(n.type===T.Fragment){r.push.apply(r,ky(n.props.children,o));return}n.type!==Ek&&ir(!1),!n.props.index||!n.props.children||ir(!1);let c={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(c.children=ky(n.props.children,o)),r.push(c)}),r}const aH="6";try{window.__reactRouterVersion=aH}catch{}const oH="startTransition",$A=OT[oH];function sH(e){let{basename:t,children:r,future:n,window:a}=e,o=T.useRef();o.current==null&&(o.current=wW({window:a,v5Compat:!0}));let c=o.current,[u,f]=T.useState({action:c.action,location:c.location}),{v7_startTransition:p}=n||{},h=T.useCallback(m=>{p&&$A?$A(()=>f(m)):f(m)},[f,p]);return T.useLayoutEffect(()=>c.listen(h),[c,h]),T.useEffect(()=>rH(n),[n]),T.createElement(nH,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:c,future:n})}var FA;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(FA||(FA={}));var LA;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(LA||(LA={}));const lH=({setActiveTab:e,setRestoreCalculation:t})=>{const r=Ck();return T.useEffect(()=>{const a=new URLSearchParams(r.search).get("tab"),o=localStorage.getItem("activeTab");a&&!o&&["pit","cit","vat","wht","rent","guidance","account"].includes(a)&&e(a);const c=sessionStorage.getItem("restore_calculation");if(c)try{const u=JSON.parse(c);t(u),sessionStorage.removeItem("restore_calculation")}catch(u){console.error("Failed to parse restore data",u)}},[r.search]),null};function cH(){const[e,t]=T.useState(()=>{const me=new URLSearchParams(window.location.search).get("tab");return me&&["pit","cit","vat","wht","rent","guidance","account"].includes(me)?me:sessionStorage.getItem("activeTab")||"pit"}),[r,n]=T.useState("checking"),[a,o]=T.useState(!1),[c,u]=T.useState(null),[f,p]=T.useState(0),[h,m]=T.useState(!1),[v,b]=T.useState(null),[w,_]=T.useState(!1),[x,S]=T.useState(null),[C,O]=T.useState(null),[E,A]=T.useState(!1),[N,P]=T.useState(!1),[R,D]=T.useState(!1),[G,q]=T.useState(!1),[M,H]=T.useState(null),[B,F]=T.useState(null),[Y,J]=T.useState(null);T.useEffect(()=>{sessionStorage.setItem("activeTab",e)},[e]),T.useEffect(()=>{U(),K();const ge=setInterval(X,1500*1e3);return()=>clearInterval(ge)},[]),T.useEffect(()=>{e&&window.history.replaceState({},"",`/?tab=${e}`)},[e]),T.useEffect(()=>{if(R&&a&&c){const ge=!c.date_of_birth||!c.occupation||!c.state_of_origin||!c.state_of_residence;P(ge),ge&&e!=="account"&&t("account")}else P(!1)},[R,a,c,e]),T.useEffect(()=>{const ge=()=>m(!0);return window.addEventListener("open-credit-modal",ge),()=>window.removeEventListener("open-credit-modal",ge)},[]);const U=async()=>{try{await Fe.get("/health"),n("connected")}catch{n("disconnected")}},X=async()=>{try{const ge=sessionStorage.getItem("refresh_token");if(!ge)return;const me=await Fe.post("/api/auth/refresh",{},{headers:{Authorization:`Bearer ${ge}`}});me.data.success&&sessionStorage.setItem("access_token",me.data.access_token)}catch(ge){console.log("Token refresh failed",ge)}},K=async()=>{if(!sessionStorage.getItem("access_token")){D(!0);return}try{const me=await Fe.get("/api/auth/me");if(me.data.success){u(me.data.user),o(!0),p(me.data.user.credit_balance||0);const ae=me.data.user.date_of_birth&&me.data.user.occupation&&me.data.user.state_of_origin&&me.data.user.state_of_residence;A(!!ae)}}catch{sessionStorage.removeItem("access_token"),sessionStorage.removeItem("refresh_token"),sessionStorage.removeItem("user")}finally{D(!0)}},I=ge=>{o(!0),u(ge),p(ge.credit_balance||0),B?(O({type:"pit",data:B}),F(null),t("pit")):v?(t(v),b(null)):t("account"),_(!1)},L=ge=>{u(ge),A(!0),P(!1),sessionStorage.setItem("user",JSON.stringify(ge))},ie=()=>{sessionStorage.clear(),o(!1),u(null),p(0),A(!1),P(!1),t("pit"),window.history.pushState({},"","/?tab=pit")},pe=(ge,me,ae)=>{p(ae),m(!1),v&&setTimeout(()=>{t(v),b(null)},500)},fe=(ge,me)=>{if(window.history.pushState({},"",`/?tab=${ge}`),ge==="pit"){t("pit");return}if(!a){S({name:ge,cost:me}),_(!0);return}if(!E){P(!0),t("account");return}if(f<me){b(ge),m(!0);return}t(ge)},ve=()=>{t("account")};return R?l.jsx(sH,{children:l.jsx(iH,{children:l.jsx(Ek,{path:"*",element:l.jsxs("div",{className:"App",children:[l.jsxs("div",{className:"gradient-bg",children:[l.jsx("div",{className:"gradient-sphere sphere-1"}),l.jsx("div",{className:"gradient-sphere sphere-2"}),l.jsx("div",{className:"gradient-sphere sphere-3"})]}),l.jsxs("div",{className:"container",children:[l.jsx(lH,{setActiveTab:t,setRestoreCalculation:O}),l.jsxs("header",{className:"header",children:[l.jsxs("div",{className:"logo-container",children:[l.jsx(bW,{}),l.jsxs("div",{children:[l.jsx("h1",{children:"ZERO MUMU TAX"}),l.jsx("p",{className:"subtitle",children:"NTA 2025 • Nigeria Revenue Service"})]})]}),l.jsxs("div",{className:"header-actions",children:[a?l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"credit-badge",onClick:()=>m(!0),children:[l.jsx("span",{children:"💰"})," ",f," credits"]}),l.jsx("button",{className:"logout-btn",onClick:ie,children:"🚪 Logout"})]}):l.jsx(xW,{onLoginClick:ve}),l.jsxs("div",{className:`status-badge ${r}`,children:[l.jsx("span",{className:"status-dot"}),r]})]})]}),r==="disconnected"&&l.jsx("div",{className:"warning-banner",children:"⚠️ Backend not running. Run: cd backend && python run.py"}),w&&l.jsx("div",{className:"modal-overlay",children:l.jsxs("div",{className:"modal-card",children:[l.jsx("button",{className:"close-btn",onClick:()=>_(!1),children:"✕"}),l.jsx("div",{className:"modal-icon",children:"🔒"}),l.jsxs("h3",{children:["Login to Access ",x?.name]}),l.jsxs("p",{children:["This calculator costs ",x?.cost," credit(s)."]}),l.jsx("div",{className:"credit-note",children:"💡 New users get 15 free credits!"}),l.jsxs("div",{className:"modal-actions",children:[l.jsx("button",{onClick:()=>_(!1),children:"Cancel"}),l.jsx("button",{onClick:()=>{b(x?.name),_(!1),t("account")},children:"Login / Sign Up"})]})]})}),N&&l.jsx(gW,{user:c,onComplete:L,onLogout:ie}),G&&l.jsx(yW,{user:c,onClose:()=>q(!1)}),l.jsxs("div",{className:"app-tabs",children:[l.jsxs("button",{className:`tab-button ${e==="pit"?"active":""}`,onClick:()=>fe("pit",0),children:["Personal Income Tax ",!a&&l.jsx("span",{className:"free-badge",children:"🔓"})]}),l.jsxs("button",{className:`tab-button ${e==="cit"?"active":""}`,onClick:()=>fe("cit",2),children:["Company Income Tax ",!a&&l.jsx("span",{className:"free-badge",children:"🔒"}),a&&f<2&&l.jsx("span",{className:"warning-badge",children:"⚠️"})]}),l.jsxs("button",{className:`tab-button ${e==="vat"?"active":""}`,onClick:()=>fe("vat",1),children:["Value Added Tax (VAT) ",!a&&l.jsx("span",{className:"free-badge",children:"🔒"}),a&&f<1&&l.jsx("span",{className:"warning-badge",children:"⚠️"})]}),l.jsxs("button",{className:`tab-button ${e==="wht"?"active":""}`,onClick:()=>fe("wht",1),children:["Withholding Tax (WHT) ",!a&&l.jsx("span",{className:"free-badge",children:"🔒"}),a&&f<1&&l.jsx("span",{className:"warning-badge",children:"⚠️"})]}),l.jsxs("button",{className:`tab-button ${e==="rent"?"active":""}`,onClick:()=>fe("rent",1),children:["Rent Relief ",!a&&l.jsx("span",{className:"free-badge",children:"🔒"}),a&&f<1&&l.jsx("span",{className:"warning-badge",children:"⚠️"})]}),l.jsx("button",{className:`tab-button ${e==="guidance"?"active":""}`,onClick:()=>t("guidance"),children:"NRS Guidance"}),l.jsx("button",{className:`tab-button ${e==="account"?"active":""}`,onClick:()=>t("account"),children:a?"My Account":"Login / Sign Up"})]}),l.jsxs("div",{className:"calculator-container",children:[e==="pit"&&l.jsx(J9,{isLoggedIn:a,user:c,creditBalance:f,setCreditBalance:p,restoreData:C,clearRestoreData:()=>O(null),pendingFormData:B,setPendingFormData:F,pendingCalculation:Y,setPendingCalculation:J,requireLogin:()=>{b("pit"),t("account")},requireCredits:(ge,me)=>{f>=ge?me():(b("pit"),m(!0))}}),e==="cit"&&(a?E?l.jsx(eW,{isLoggedIn:a,user:c,creditBalance:f,setCreditBalance:p,restoreData:C,clearRestoreData:()=>O(null),requireLogin:()=>{b("cit"),t("account")},requireCredits:(ge,me)=>{f>=ge?me():(b("cit"),m(!0))}}):l.jsx(Nc,{}):l.jsx(Sc,{tab:"CIT",credits:2,onLogin:()=>{b("cit"),t("account")}})),e==="vat"&&(a?E?l.jsx(tW,{isLoggedIn:a,creditBalance:f,setCreditBalance:p,restoreData:C,clearRestoreData:()=>O(null),requireLogin:()=>{b("vat"),t("account")},requireCredits:(ge,me)=>{f>=ge?me():(b("vat"),m(!0))}}):l.jsx(Nc,{}):l.jsx(Sc,{tab:"VAT",credits:1,onLogin:()=>{b("vat"),t("account")}})),e==="wht"&&(a?E?l.jsx(rW,{isLoggedIn:a,creditBalance:f,setCreditBalance:p,restoreData:C,clearRestoreData:()=>O(null),requireLogin:()=>{b("wht"),t("account")},requireCredits:(ge,me)=>{f>=ge?me():(b("wht"),m(!0))}}):l.jsx(Nc,{}):l.jsx(Sc,{tab:"WHT",credits:1,onLogin:()=>{b("wht"),t("account")}})),e==="rent"&&(a?E?l.jsx(nW,{isLoggedIn:a,creditBalance:f,setCreditBalance:p,restoreData:C,clearRestoreData:()=>O(null),requireLogin:()=>{b("rent"),t("account")},requireCredits:(ge,me)=>{f>=ge?me():(b("rent"),m(!0))}}):l.jsx(Nc,{}):l.jsx(Sc,{tab:"Rent Relief",credits:1,onLogin:()=>{b("rent"),t("account")}})),e==="guidance"&&l.jsx(iW,{}),e==="account"&&(a?l.jsx(mW,{user:c,onLogout:ie,creditBalance:f,setCreditBalance:p,setRestoreCalculation:O,setActiveTab:t,userStats:M}):l.jsx(oW,{onLoginSuccess:I}))]}),l.jsxs("footer",{className:"footer",children:[l.jsx("p",{children:"Zero Mumu Tax App • NTA 2025 Compliant"}),l.jsx("p",{className:"disclaimer",children:"This is an estimation tool. Always consult a tax professional."})]})]}),l.jsx(vW,{isOpen:h,onClose:()=>{m(!1),b(null)},onPurchase:pe,currentBalance:f,requiredCredits:v?2:1})]})})})}):null}const Sc=({tab:e,credits:t,onLogin:r})=>l.jsxs("div",{className:"form-section",style:{padding:"60px 40px",textAlign:"center"},children:[l.jsx("div",{className:"icon-large",children:"🔒"}),l.jsx("h2",{children:"Login Required"}),l.jsxs("p",{children:["The ",e," Calculator costs ",t," credit(s). Please log in."]}),l.jsx("div",{className:"credit-note",children:"💡 New users get 15 free credits!"}),l.jsx("button",{className:"primary-btn",onClick:r,children:"Login / Sign Up"})]}),Nc=()=>l.jsxs("div",{className:"form-section",style:{padding:"60px 40px",textAlign:"center"},children:[l.jsx("div",{className:"icon-large",children:"👤"}),l.jsx("h2",{children:"Complete Your Profile First"}),l.jsx("p",{children:"Please complete your profile to access calculators."}),l.jsx("button",{className:"primary-btn",onClick:()=>window.location.href="/?tab=account",children:"Go to Profile"})]}),uH="154917441054-bk1smrnpep77eojljonot24i42p7kj9g.apps.googleusercontent.com";RT.createRoot(document.getElementById("root")).render(l.jsx(T.StrictMode,{children:l.jsx(IT,{clientId:uH,children:l.jsx(cH,{})})}));
