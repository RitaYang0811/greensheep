import{R as Br,n as Cr,s as Ur}from"./index-Dr79K2c5.js";var Wr=Error,Lr=EvalError,kr=RangeError,Gr=ReferenceError,vr=SyntaxError,oe=TypeError,zr=URIError,Kr=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var o=42;e[t]=o;for(t in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var a=Object.getOwnPropertySymbols(e);if(a.length!==1||a[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var i=Object.getOwnPropertyDescriptor(e,t);if(i.value!==o||i.enumerable!==!0)return!1}return!0},Qe=typeof Symbol<"u"&&Symbol,Hr=Kr,Qr=function(){return typeof Qe!="function"||typeof Symbol!="function"||typeof Qe("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Hr()},Se={__proto__:null,foo:{}},qr=Object,Vr=function(){return{__proto__:Se}.foo===Se.foo&&!(Se instanceof qr)},Jr="Function.prototype.bind called on incompatible ",jr=Object.prototype.toString,Yr=Math.max,Xr="[object Function]",qe=function(e,t){for(var n=[],o=0;o<e.length;o+=1)n[o]=e[o];for(var a=0;a<t.length;a+=1)n[a+e.length]=t[a];return n},Zr=function(e,t){for(var n=[],o=t||0,a=0;o<e.length;o+=1,a+=1)n[a]=e[o];return n},et=function(r,e){for(var t="",n=0;n<r.length;n+=1)t+=r[n],n+1<r.length&&(t+=e);return t},rt=function(e){var t=this;if(typeof t!="function"||jr.apply(t)!==Xr)throw new TypeError(Jr+t);for(var n=Zr(arguments,1),o,a=function(){if(this instanceof o){var c=t.apply(this,qe(n,arguments));return Object(c)===c?c:this}return t.apply(e,qe(n,arguments))},i=Yr(0,t.length-n.length),u=[],f=0;f<i;f++)u[f]="$"+f;if(o=Function("binder","return function ("+et(u,",")+"){ return binder.apply(this,arguments); }")(a),t.prototype){var l=function(){};l.prototype=t.prototype,o.prototype=new l,l.prototype=null}return o},tt=rt,Ue=Function.prototype.bind||tt,nt=Function.prototype.call,at=Object.prototype.hasOwnProperty,ot=Ue,it=ot.call(nt,at),p,lt=Wr,ft=Lr,ut=kr,ct=Gr,q=vr,Q=oe,pt=zr,mr=Function,we=function(r){try{return mr('"use strict"; return ('+r+").constructor;")()}catch{}},W=Object.getOwnPropertyDescriptor;if(W)try{W({},"")}catch{W=null}var Ae=function(){throw new Q},yt=W?function(){try{return arguments.callee,Ae}catch{try{return W(arguments,"callee").get}catch{return Ae}}}():Ae,z=Qr(),st=Vr(),b=Object.getPrototypeOf||(st?function(r){return r.__proto__}:null),H={},dt=typeof Uint8Array>"u"||!b?p:b(Uint8Array),L={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?p:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?p:ArrayBuffer,"%ArrayIteratorPrototype%":z&&b?b([][Symbol.iterator]()):p,"%AsyncFromSyncIteratorPrototype%":p,"%AsyncFunction%":H,"%AsyncGenerator%":H,"%AsyncGeneratorFunction%":H,"%AsyncIteratorPrototype%":H,"%Atomics%":typeof Atomics>"u"?p:Atomics,"%BigInt%":typeof BigInt>"u"?p:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?p:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?p:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?p:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":lt,"%eval%":eval,"%EvalError%":ft,"%Float32Array%":typeof Float32Array>"u"?p:Float32Array,"%Float64Array%":typeof Float64Array>"u"?p:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?p:FinalizationRegistry,"%Function%":mr,"%GeneratorFunction%":H,"%Int8Array%":typeof Int8Array>"u"?p:Int8Array,"%Int16Array%":typeof Int16Array>"u"?p:Int16Array,"%Int32Array%":typeof Int32Array>"u"?p:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":z&&b?b(b([][Symbol.iterator]())):p,"%JSON%":typeof JSON=="object"?JSON:p,"%Map%":typeof Map>"u"?p:Map,"%MapIteratorPrototype%":typeof Map>"u"||!z||!b?p:b(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?p:Promise,"%Proxy%":typeof Proxy>"u"?p:Proxy,"%RangeError%":ut,"%ReferenceError%":ct,"%Reflect%":typeof Reflect>"u"?p:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?p:Set,"%SetIteratorPrototype%":typeof Set>"u"||!z||!b?p:b(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?p:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":z&&b?b(""[Symbol.iterator]()):p,"%Symbol%":z?Symbol:p,"%SyntaxError%":q,"%ThrowTypeError%":yt,"%TypedArray%":dt,"%TypeError%":Q,"%Uint8Array%":typeof Uint8Array>"u"?p:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?p:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?p:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?p:Uint32Array,"%URIError%":pt,"%WeakMap%":typeof WeakMap>"u"?p:WeakMap,"%WeakRef%":typeof WeakRef>"u"?p:WeakRef,"%WeakSet%":typeof WeakSet>"u"?p:WeakSet};if(b)try{null.error}catch(r){var vt=b(b(r));L["%Error.prototype%"]=vt}var mt=function r(e){var t;if(e==="%AsyncFunction%")t=we("async function () {}");else if(e==="%GeneratorFunction%")t=we("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=we("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var o=r("%AsyncGenerator%");o&&b&&(t=b(o.prototype))}return L[e]=t,t},Ve={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},ie=Ue,de=it,gt=ie.call(Function.call,Array.prototype.concat),ht=ie.call(Function.apply,Array.prototype.splice),Je=ie.call(Function.call,String.prototype.replace),ve=ie.call(Function.call,String.prototype.slice),bt=ie.call(Function.call,RegExp.prototype.exec),St=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,wt=/\\(\\)?/g,At=function(e){var t=ve(e,0,1),n=ve(e,-1);if(t==="%"&&n!=="%")throw new q("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new q("invalid intrinsic syntax, expected opening `%`");var o=[];return Je(e,St,function(a,i,u,f){o[o.length]=u?Je(f,wt,"$1"):i||a}),o},Et=function(e,t){var n=e,o;if(de(Ve,n)&&(o=Ve[n],n="%"+o[0]+"%"),de(L,n)){var a=L[n];if(a===H&&(a=mt(n)),typeof a>"u"&&!t)throw new Q("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:o,name:n,value:a}}throw new q("intrinsic "+e+" does not exist!")},j=function(e,t){if(typeof e!="string"||e.length===0)throw new Q("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new Q('"allowMissing" argument must be a boolean');if(bt(/^%?[^%]*%?$/,e)===null)throw new q("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=At(e),o=n.length>0?n[0]:"",a=Et("%"+o+"%",t),i=a.name,u=a.value,f=!1,l=a.alias;l&&(o=l[0],ht(n,gt([0,1],l)));for(var c=1,d=!0;c<n.length;c+=1){var y=n[c],v=ve(y,0,1),m=ve(y,-1);if((v==='"'||v==="'"||v==="`"||m==='"'||m==="'"||m==="`")&&v!==m)throw new q("property names with quotes must have matching quotes");if((y==="constructor"||!d)&&(f=!0),o+="."+y,i="%"+o+"%",de(L,i))u=L[i];else if(u!=null){if(!(y in u)){if(!t)throw new Q("base intrinsic for "+e+" exists, but the property is not available.");return}if(W&&c+1>=n.length){var S=W(u,y);d=!!S,d&&"get"in S&&!("originalValue"in S.get)?u=S.get:u=u[y]}else d=de(u,y),u=u[y];d&&!f&&(L[i]=u)}}return u},gr={exports:{}},Ee,je;function We(){if(je)return Ee;je=1;var r=j,e=r("%Object.defineProperty%",!0)||!1;if(e)try{e({},"a",{value:1})}catch{e=!1}return Ee=e,Ee}var Ot=j,ye=Ot("%Object.getOwnPropertyDescriptor%",!0);if(ye)try{ye([],"length")}catch{ye=null}var hr=ye,Ye=We(),Pt=vr,K=oe,Xe=hr,$t=function(e,t,n){if(!e||typeof e!="object"&&typeof e!="function")throw new K("`obj` must be an object or a function`");if(typeof t!="string"&&typeof t!="symbol")throw new K("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new K("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new K("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new K("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new K("`loose`, if provided, must be a boolean");var o=arguments.length>3?arguments[3]:null,a=arguments.length>4?arguments[4]:null,i=arguments.length>5?arguments[5]:null,u=arguments.length>6?arguments[6]:!1,f=!!Xe&&Xe(e,t);if(Ye)Ye(e,t,{configurable:i===null&&f?f.configurable:!i,enumerable:o===null&&f?f.enumerable:!o,value:n,writable:a===null&&f?f.writable:!a});else if(u||!o&&!a&&!i)e[t]=n;else throw new Pt("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},Re=We(),br=function(){return!!Re};br.hasArrayLengthDefineBug=function(){if(!Re)return null;try{return Re([],"length",{value:1}).length!==1}catch{return!0}};var It=br,Ft=j,Ze=$t,xt=It(),er=hr,rr=oe,Dt=Ft("%Math.floor%"),Rt=function(e,t){if(typeof e!="function")throw new rr("`fn` is not a function");if(typeof t!="number"||t<0||t>4294967295||Dt(t)!==t)throw new rr("`length` must be a positive 32-bit integer");var n=arguments.length>2&&!!arguments[2],o=!0,a=!0;if("length"in e&&er){var i=er(e,"length");i&&!i.configurable&&(o=!1),i&&!i.writable&&(a=!1)}return(o||a||!n)&&(xt?Ze(e,"length",t,!0,!0):Ze(e,"length",t)),e};(function(r){var e=Ue,t=j,n=Rt,o=oe,a=t("%Function.prototype.apply%"),i=t("%Function.prototype.call%"),u=t("%Reflect.apply%",!0)||e.call(i,a),f=We(),l=t("%Math.max%");r.exports=function(y){if(typeof y!="function")throw new o("a function is required");var v=u(e,i,arguments);return n(v,1+l(0,y.length-(arguments.length-1)),!0)};var c=function(){return u(e,a,arguments)};f?f(r.exports,"apply",{value:c}):r.exports.apply=c})(gr);var Nt=gr.exports,Sr=j,wr=Nt,Tt=wr(Sr("String.prototype.indexOf")),_t=function(e,t){var n=Sr(e,!!t);return typeof n=="function"&&Tt(e,".prototype.")>-1?wr(n):n};const Mt={},Bt=Object.freeze(Object.defineProperty({__proto__:null,default:Mt},Symbol.toStringTag,{value:"Module"})),Ct=Br(Bt);var Le=typeof Map=="function"&&Map.prototype,Oe=Object.getOwnPropertyDescriptor&&Le?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,me=Le&&Oe&&typeof Oe.get=="function"?Oe.get:null,tr=Le&&Map.prototype.forEach,ke=typeof Set=="function"&&Set.prototype,Pe=Object.getOwnPropertyDescriptor&&ke?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,ge=ke&&Pe&&typeof Pe.get=="function"?Pe.get:null,nr=ke&&Set.prototype.forEach,Ut=typeof WeakMap=="function"&&WeakMap.prototype,te=Ut?WeakMap.prototype.has:null,Wt=typeof WeakSet=="function"&&WeakSet.prototype,ne=Wt?WeakSet.prototype.has:null,Lt=typeof WeakRef=="function"&&WeakRef.prototype,ar=Lt?WeakRef.prototype.deref:null,kt=Boolean.prototype.valueOf,Gt=Object.prototype.toString,zt=Function.prototype.toString,Kt=String.prototype.match,Ge=String.prototype.slice,_=String.prototype.replace,Ht=String.prototype.toUpperCase,or=String.prototype.toLowerCase,Ar=RegExp.prototype.test,ir=Array.prototype.concat,$=Array.prototype.join,Qt=Array.prototype.slice,lr=Math.floor,Ne=typeof BigInt=="function"?BigInt.prototype.valueOf:null,$e=Object.getOwnPropertySymbols,Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,V=typeof Symbol=="function"&&typeof Symbol.iterator=="object",w=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===V||!0)?Symbol.toStringTag:null,Er=Object.prototype.propertyIsEnumerable,fr=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function ur(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||Ar.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-lr(-r):lr(r);if(n!==r){var o=String(n),a=Ge.call(e,o.length+1);return _.call(o,t,"$&_")+"."+_.call(_.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return _.call(e,t,"$&_")}var _e=Ct,cr=_e.custom,pr=Pr(cr)?cr:null,qt=function r(e,t,n,o){var a=t||{};if(T(a,"quoteStyle")&&a.quoteStyle!=="single"&&a.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(T(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=T(a,"customInspect")?a.customInspect:!0;if(typeof i!="boolean"&&i!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(T(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(T(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var u=a.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Ir(e,a);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var f=String(e);return u?ur(e,f):f}if(typeof e=="bigint"){var l=String(e)+"n";return u?ur(e,l):l}var c=typeof a.depth>"u"?5:a.depth;if(typeof n>"u"&&(n=0),n>=c&&c>0&&typeof e=="object")return Me(e)?"[Array]":"[Object]";var d=yn(a,n);if(typeof o>"u")o=[];else if($r(o,e)>=0)return"[Circular]";function y(E,R,N){if(R&&(o=Qt.call(o),o.push(R)),N){var Z={depth:a.depth};return T(a,"quoteStyle")&&(Z.quoteStyle=a.quoteStyle),r(E,Z,n+1,o)}return r(E,a,n+1,o)}if(typeof e=="function"&&!yr(e)){var v=tn(e),m=ue(e,y);return"[Function"+(v?": "+v:" (anonymous)")+"]"+(m.length>0?" { "+$.call(m,", ")+" }":"")}if(Pr(e)){var S=V?_.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):Te.call(e);return typeof e=="object"&&!V?ee(S):S}if(un(e)){for(var A="<"+or.call(String(e.nodeName)),I=e.attributes||[],F=0;F<I.length;F++)A+=" "+I[F].name+"="+Or(Vt(I[F].value),"double",a);return A+=">",e.childNodes&&e.childNodes.length&&(A+="..."),A+="</"+or.call(String(e.nodeName))+">",A}if(Me(e)){if(e.length===0)return"[]";var s=ue(e,y);return d&&!pn(s)?"["+Be(s,d)+"]":"[ "+$.call(s,", ")+" ]"}if(jt(e)){var x=ue(e,y);return!("cause"in Error.prototype)&&"cause"in e&&!Er.call(e,"cause")?"{ ["+String(e)+"] "+$.call(ir.call("[cause]: "+y(e.cause),x),", ")+" }":x.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+$.call(x,", ")+" }"}if(typeof e=="object"&&i){if(pr&&typeof e[pr]=="function"&&_e)return _e(e,{depth:c-n});if(i!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(nn(e)){var B=[];return tr&&tr.call(e,function(E,R){B.push(y(R,e,!0)+" => "+y(E,e))}),sr("Map",me.call(e),B,d)}if(ln(e)){var X=[];return nr&&nr.call(e,function(E){X.push(y(E,e))}),sr("Set",ge.call(e),X,d)}if(an(e))return Ie("WeakMap");if(fn(e))return Ie("WeakSet");if(on(e))return Ie("WeakRef");if(Xt(e))return ee(y(Number(e)));if(en(e))return ee(y(Ne.call(e)));if(Zt(e))return ee(kt.call(e));if(Yt(e))return ee(y(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(e===Cr)return"{ [object globalThis] }";if(!Jt(e)&&!yr(e)){var k=ue(e,y),le=fr?fr(e)===Object.prototype:e instanceof Object||e.constructor===Object,C=e instanceof Object?"":"null prototype",D=!le&&w&&Object(e)===e&&w in e?Ge.call(M(e),8,-1):C?"Object":"",fe=le||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",G=fe+(D||C?"["+$.call(ir.call([],D||[],C||[]),": ")+"] ":"");return k.length===0?G+"{}":d?G+"{"+Be(k,d)+"}":G+"{ "+$.call(k,", ")+" }"}return String(e)};function Or(r,e,t){var n=(t.quoteStyle||e)==="double"?'"':"'";return n+r+n}function Vt(r){return _.call(String(r),/"/g,"&quot;")}function Me(r){return M(r)==="[object Array]"&&(!w||!(typeof r=="object"&&w in r))}function Jt(r){return M(r)==="[object Date]"&&(!w||!(typeof r=="object"&&w in r))}function yr(r){return M(r)==="[object RegExp]"&&(!w||!(typeof r=="object"&&w in r))}function jt(r){return M(r)==="[object Error]"&&(!w||!(typeof r=="object"&&w in r))}function Yt(r){return M(r)==="[object String]"&&(!w||!(typeof r=="object"&&w in r))}function Xt(r){return M(r)==="[object Number]"&&(!w||!(typeof r=="object"&&w in r))}function Zt(r){return M(r)==="[object Boolean]"&&(!w||!(typeof r=="object"&&w in r))}function Pr(r){if(V)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!Te)return!1;try{return Te.call(r),!0}catch{}return!1}function en(r){if(!r||typeof r!="object"||!Ne)return!1;try{return Ne.call(r),!0}catch{}return!1}var rn=Object.prototype.hasOwnProperty||function(r){return r in this};function T(r,e){return rn.call(r,e)}function M(r){return Gt.call(r)}function tn(r){if(r.name)return r.name;var e=Kt.call(zt.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function $r(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function nn(r){if(!me||!r||typeof r!="object")return!1;try{me.call(r);try{ge.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function an(r){if(!te||!r||typeof r!="object")return!1;try{te.call(r,te);try{ne.call(r,ne)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function on(r){if(!ar||!r||typeof r!="object")return!1;try{return ar.call(r),!0}catch{}return!1}function ln(r){if(!ge||!r||typeof r!="object")return!1;try{ge.call(r);try{me.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function fn(r){if(!ne||!r||typeof r!="object")return!1;try{ne.call(r,ne);try{te.call(r,te)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function un(r){return!r||typeof r!="object"?!1:typeof HTMLElement<"u"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function Ir(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return Ir(Ge.call(r,0,e.maxStringLength),e)+n}var o=_.call(_.call(r,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,cn);return Or(o,"single",e)}function cn(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+Ht.call(e.toString(16))}function ee(r){return"Object("+r+")"}function Ie(r){return r+" { ? }"}function sr(r,e,t,n){var o=n?Be(t,n):$.call(t,", ");return r+" ("+e+") {"+o+"}"}function pn(r){for(var e=0;e<r.length;e++)if($r(r[e],`
`)>=0)return!1;return!0}function yn(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=$.call(Array(r.indent+1)," ");else return null;return{base:t,prev:$.call(Array(e+1),t)}}function Be(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+$.call(r,","+t)+`
`+e.prev}function ue(r,e){var t=Me(r),n=[];if(t){n.length=r.length;for(var o=0;o<r.length;o++)n[o]=T(r,o)?e(r[o],r):""}var a=typeof $e=="function"?$e(r):[],i;if(V){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=a[u]}for(var f in r)T(r,f)&&(t&&String(Number(f))===f&&f<r.length||V&&i["$"+f]instanceof Symbol||(Ar.call(/[^\w$]/,f)?n.push(e(f,r)+": "+e(r[f],r)):n.push(f+": "+e(r[f],r))));if(typeof $e=="function")for(var l=0;l<a.length;l++)Er.call(r,a[l])&&n.push("["+e(a[l])+"]: "+e(r[a[l]],r));return n}var Fr=j,Y=_t,sn=qt,dn=oe,ce=Fr("%WeakMap%",!0),pe=Fr("%Map%",!0),vn=Y("WeakMap.prototype.get",!0),mn=Y("WeakMap.prototype.set",!0),gn=Y("WeakMap.prototype.has",!0),hn=Y("Map.prototype.get",!0),bn=Y("Map.prototype.set",!0),Sn=Y("Map.prototype.has",!0),ze=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},wn=function(r,e){var t=ze(r,e);return t&&t.value},An=function(r,e,t){var n=ze(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},En=function(r,e){return!!ze(r,e)},On=function(){var e,t,n,o={assert:function(a){if(!o.has(a))throw new dn("Side channel does not contain "+sn(a))},get:function(a){if(ce&&a&&(typeof a=="object"||typeof a=="function")){if(e)return vn(e,a)}else if(pe){if(t)return hn(t,a)}else if(n)return wn(n,a)},has:function(a){if(ce&&a&&(typeof a=="object"||typeof a=="function")){if(e)return gn(e,a)}else if(pe){if(t)return Sn(t,a)}else if(n)return En(n,a);return!1},set:function(a,i){ce&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new ce),mn(e,a,i)):pe?(t||(t=new pe),bn(t,a,i)):(n||(n={key:{},next:null}),An(n,a,i))}};return o},Pn=String.prototype.replace,$n=/%20/g,Fe={RFC1738:"RFC1738",RFC3986:"RFC3986"},Ke={default:Fe.RFC3986,formatters:{RFC1738:function(r){return Pn.call(r,$n,"+")},RFC3986:function(r){return String(r)}},RFC1738:Fe.RFC1738,RFC3986:Fe.RFC3986},In=Ke,xe=Object.prototype.hasOwnProperty,U=Array.isArray,O=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),Fn=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(U(n)){for(var o=[],a=0;a<n.length;++a)typeof n[a]<"u"&&o.push(n[a]);t.obj[t.prop]=o}}},xr=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)typeof e[o]<"u"&&(n[o]=e[o]);return n},xn=function r(e,t,n){if(!t)return e;if(typeof t!="object"){if(U(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!xe.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var o=e;return U(e)&&!U(t)&&(o=xr(e,n)),U(e)&&U(t)?(t.forEach(function(a,i){if(xe.call(e,i)){var u=e[i];u&&typeof u=="object"&&a&&typeof a=="object"?e[i]=r(u,a,n):e.push(a)}else e[i]=a}),e):Object.keys(t).reduce(function(a,i){var u=t[i];return xe.call(a,i)?a[i]=r(a[i],u,n):a[i]=u,a},o)},Dn=function(e,t){return Object.keys(t).reduce(function(n,o){return n[o]=t[o],n},e)},Rn=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},Nn=function(e,t,n,o,a){if(e.length===0)return e;var i=e;if(typeof e=="symbol"?i=Symbol.prototype.toString.call(e):typeof e!="string"&&(i=String(e)),n==="iso-8859-1")return escape(i).replace(/%u[0-9a-f]{4}/gi,function(c){return"%26%23"+parseInt(c.slice(2),16)+"%3B"});for(var u="",f=0;f<i.length;++f){var l=i.charCodeAt(f);if(l===45||l===46||l===95||l===126||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||a===In.RFC1738&&(l===40||l===41)){u+=i.charAt(f);continue}if(l<128){u=u+O[l];continue}if(l<2048){u=u+(O[192|l>>6]+O[128|l&63]);continue}if(l<55296||l>=57344){u=u+(O[224|l>>12]+O[128|l>>6&63]+O[128|l&63]);continue}f+=1,l=65536+((l&1023)<<10|i.charCodeAt(f)&1023),u+=O[240|l>>18]+O[128|l>>12&63]+O[128|l>>6&63]+O[128|l&63]}return u},Tn=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],o=0;o<t.length;++o)for(var a=t[o],i=a.obj[a.prop],u=Object.keys(i),f=0;f<u.length;++f){var l=u[f],c=i[l];typeof c=="object"&&c!==null&&n.indexOf(c)===-1&&(t.push({obj:i,prop:l}),n.push(c))}return Fn(t),e},_n=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},Mn=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},Bn=function(e,t){return[].concat(e,t)},Cn=function(e,t){if(U(e)){for(var n=[],o=0;o<e.length;o+=1)n.push(t(e[o]));return n}return t(e)},Dr={arrayToObject:xr,assign:Dn,combine:Bn,compact:Tn,decode:Rn,encode:Nn,isBuffer:Mn,isRegExp:_n,maybeMap:Cn,merge:xn},Rr=On,se=Dr,ae=Ke,Un=Object.prototype.hasOwnProperty,Nr={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},P=Array.isArray,Wn=Array.prototype.push,Tr=function(r,e){Wn.apply(r,P(e)?e:[e])},Ln=Date.prototype.toISOString,dr=ae.default,h={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:se.encode,encodeValuesOnly:!1,format:dr,formatter:ae.formatters[dr],indices:!1,serializeDate:function(e){return Ln.call(e)},skipNulls:!1,strictNullHandling:!1},kn=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},De={},Gn=function r(e,t,n,o,a,i,u,f,l,c,d,y,v,m,S,A,I,F){for(var s=e,x=F,B=0,X=!1;(x=x.get(De))!==void 0&&!X;){var k=x.get(e);if(B+=1,typeof k<"u"){if(k===B)throw new RangeError("Cyclic object value");X=!0}typeof x.get(De)>"u"&&(B=0)}if(typeof c=="function"?s=c(t,s):s instanceof Date?s=v(s):n==="comma"&&P(s)&&(s=se.maybeMap(s,function(be){return be instanceof Date?v(be):be})),s===null){if(i)return l&&!A?l(t,h.encoder,I,"key",m):t;s=""}if(kn(s)||se.isBuffer(s)){if(l){var le=A?t:l(t,h.encoder,I,"key",m);return[S(le)+"="+S(l(s,h.encoder,I,"value",m))]}return[S(t)+"="+S(String(s))]}var C=[];if(typeof s>"u")return C;var D;if(n==="comma"&&P(s))A&&l&&(s=se.maybeMap(s,l)),D=[{value:s.length>0?s.join(",")||null:void 0}];else if(P(c))D=c;else{var fe=Object.keys(s);D=d?fe.sort(d):fe}var G=f?t.replace(/\./g,"%2E"):t,E=o&&P(s)&&s.length===1?G+"[]":G;if(a&&P(s)&&s.length===0)return E+"[]";for(var R=0;R<D.length;++R){var N=D[R],Z=typeof N=="object"&&typeof N.value<"u"?N.value:s[N];if(!(u&&Z===null)){var he=y&&f?N.replace(/\./g,"%2E"):N,Mr=P(s)?typeof n=="function"?n(E,he):E:E+(y?"."+he:"["+he+"]");F.set(e,B);var He=Rr();He.set(De,F),Tr(C,r(Z,Mr,n,o,a,i,u,f,n==="comma"&&A&&P(s)?null:l,c,d,y,v,m,S,A,I,He))}}return C},zn=function(e){if(!e)return h;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.encodeDotInKeys<"u"&&typeof e.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||h.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=ae.default;if(typeof e.format<"u"){if(!Un.call(ae.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var o=ae.formatters[n],a=h.filter;(typeof e.filter=="function"||P(e.filter))&&(a=e.filter);var i;if(e.arrayFormat in Nr?i=e.arrayFormat:"indices"in e?i=e.indices?"indices":"repeat":i=h.arrayFormat,"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var u=typeof e.allowDots>"u"?e.encodeDotInKeys===!0?!0:h.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:h.addQueryPrefix,allowDots:u,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:h.allowEmptyArrays,arrayFormat:i,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:h.charsetSentinel,commaRoundTrip:e.commaRoundTrip,delimiter:typeof e.delimiter>"u"?h.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:h.encode,encodeDotInKeys:typeof e.encodeDotInKeys=="boolean"?e.encodeDotInKeys:h.encodeDotInKeys,encoder:typeof e.encoder=="function"?e.encoder:h.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:h.encodeValuesOnly,filter:a,format:n,formatter:o,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:h.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:h.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:h.strictNullHandling}},Kn=function(r,e){var t=r,n=zn(e),o,a;typeof n.filter=="function"?(a=n.filter,t=a("",t)):P(n.filter)&&(a=n.filter,o=a);var i=[];if(typeof t!="object"||t===null)return"";var u=Nr[n.arrayFormat],f=u==="comma"&&n.commaRoundTrip;o||(o=Object.keys(t)),n.sort&&o.sort(n.sort);for(var l=Rr(),c=0;c<o.length;++c){var d=o[c];n.skipNulls&&t[d]===null||Tr(i,Gn(t[d],d,u,f,n.allowEmptyArrays,n.strictNullHandling,n.skipNulls,n.encodeDotInKeys,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,l))}var y=i.join(n.delimiter),v=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?v+="utf8=%26%2310003%3B&":v+="utf8=%E2%9C%93&"),y.length>0?v+y:""},J=Dr,Ce=Object.prototype.hasOwnProperty,Hn=Array.isArray,g={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!0,decoder:J.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Qn=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},_r=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},qn="utf8=%26%2310003%3B",Vn="utf8=%E2%9C%93",Jn=function(e,t){var n={__proto__:null},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,i=o.split(t.delimiter,a),u=-1,f,l=t.charset;if(t.charsetSentinel)for(f=0;f<i.length;++f)i[f].indexOf("utf8=")===0&&(i[f]===Vn?l="utf-8":i[f]===qn&&(l="iso-8859-1"),u=f,f=i.length);for(f=0;f<i.length;++f)if(f!==u){var c=i[f],d=c.indexOf("]="),y=d===-1?c.indexOf("="):d+1,v,m;y===-1?(v=t.decoder(c,g.decoder,l,"key"),m=t.strictNullHandling?null:""):(v=t.decoder(c.slice(0,y),g.decoder,l,"key"),m=J.maybeMap(_r(c.slice(y+1),t),function(A){return t.decoder(A,g.decoder,l,"value")})),m&&t.interpretNumericEntities&&l==="iso-8859-1"&&(m=Qn(m)),c.indexOf("[]=")>-1&&(m=Hn(m)?[m]:m);var S=Ce.call(n,v);S&&t.duplicates==="combine"?n[v]=J.combine(n[v],m):(!S||t.duplicates==="last")&&(n[v]=m)}return n},jn=function(r,e,t,n){for(var o=n?e:_r(e,t),a=r.length-1;a>=0;--a){var i,u=r[a];if(u==="[]"&&t.parseArrays)i=t.allowEmptyArrays&&o===""?[]:[].concat(o);else{i=t.plainObjects?Object.create(null):{};var f=u.charAt(0)==="["&&u.charAt(u.length-1)==="]"?u.slice(1,-1):u,l=t.decodeDotInKeys?f.replace(/%2E/g,"."):f,c=parseInt(l,10);!t.parseArrays&&l===""?i={0:o}:!isNaN(c)&&u!==l&&String(c)===l&&c>=0&&t.parseArrays&&c<=t.arrayLimit?(i=[],i[c]=o):l!=="__proto__"&&(i[l]=o)}o=i}return o},Yn=function(e,t,n,o){if(e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,u=/(\[[^[\]]*])/g,f=n.depth>0&&i.exec(a),l=f?a.slice(0,f.index):a,c=[];if(l){if(!n.plainObjects&&Ce.call(Object.prototype,l)&&!n.allowPrototypes)return;c.push(l)}for(var d=0;n.depth>0&&(f=u.exec(a))!==null&&d<n.depth;){if(d+=1,!n.plainObjects&&Ce.call(Object.prototype,f[1].slice(1,-1))&&!n.allowPrototypes)return;c.push(f[1])}return f&&c.push("["+a.slice(f.index)+"]"),jn(c,t,n,o)}},Xn=function(e){if(!e)return g;if(typeof e.allowEmptyArrays<"u"&&typeof e.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof e.decodeDotInKeys<"u"&&typeof e.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(e.decoder!==null&&typeof e.decoder<"u"&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset>"u"?g.charset:e.charset,n=typeof e.duplicates>"u"?g.duplicates:e.duplicates;if(n!=="combine"&&n!=="first"&&n!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var o=typeof e.allowDots>"u"?e.decodeDotInKeys===!0?!0:g.allowDots:!!e.allowDots;return{allowDots:o,allowEmptyArrays:typeof e.allowEmptyArrays=="boolean"?!!e.allowEmptyArrays:g.allowEmptyArrays,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:g.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:g.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:g.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:g.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:g.comma,decodeDotInKeys:typeof e.decodeDotInKeys=="boolean"?e.decodeDotInKeys:g.decodeDotInKeys,decoder:typeof e.decoder=="function"?e.decoder:g.decoder,delimiter:typeof e.delimiter=="string"||J.isRegExp(e.delimiter)?e.delimiter:g.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:g.depth,duplicates:n,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:g.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:g.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:g.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:g.strictNullHandling}},Zn=function(r,e){var t=Xn(e);if(r===""||r===null||typeof r>"u")return t.plainObjects?Object.create(null):{};for(var n=typeof r=="string"?Jn(r,t):r,o=t.plainObjects?Object.create(null):{},a=Object.keys(n),i=0;i<a.length;++i){var u=a[i],f=Yn(u,n[u],t,typeof r=="string");o=J.merge(o,f,t)}return t.allowSparse===!0?o:J.compact(o)},ea=Kn,ra=Zn,ta=Ke,na={formats:ta,parse:ra,stringify:ea};const la=Ur(na);class re extends Error{}re.prototype.name="InvalidTokenError";function aa(r){return decodeURIComponent(atob(r).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}function oa(r){let e=r.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return aa(e)}catch{return atob(e)}}function fa(r,e){if(typeof r!="string")throw new re("Invalid token specified: must be a string");e||(e={});const t=e.header===!0?0:1,n=r.split(".")[t];if(typeof n!="string")throw new re(`Invalid token specified: missing part #${t+1}`);let o;try{o=oa(n)}catch(a){throw new re(`Invalid token specified: invalid base64 for part #${t+1} (${a.message})`)}try{return JSON.parse(o)}catch(a){throw new re(`Invalid token specified: invalid json for part #${t+1} (${a.message})`)}}export{la as Q,fa as j};
