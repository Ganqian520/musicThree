import{s as b}from"./index.f6ca2c17.js";var H={exports:{}},le=function(e,r){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(r,n)}},Oe=le,S=Object.prototype.toString;function z(t){return Array.isArray(t)}function M(t){return typeof t=="undefined"}function Ne(t){return t!==null&&!M(t)&&t.constructor!==null&&!M(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function ce(t){return S.call(t)==="[object ArrayBuffer]"}function xe(t){return S.call(t)==="[object FormData]"}function Ce(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ce(t.buffer),e}function Re(t){return typeof t=="string"}function $e(t){return typeof t=="number"}function fe(t){return t!==null&&typeof t=="object"}function A(t){if(S.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Pe(t){return S.call(t)==="[object Date]"}function Ae(t){return S.call(t)==="[object File]"}function Le(t){return S.call(t)==="[object Blob]"}function de(t){return S.call(t)==="[object Function]"}function je(t){return fe(t)&&de(t.pipe)}function Te(t){return S.call(t)==="[object URLSearchParams]"}function Ue(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Be(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function V(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),z(t))for(var r=0,a=t.length;r<a;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function F(){var t={};function e(n,s){A(t[s])&&A(n)?t[s]=F(t[s],n):A(n)?t[s]=F({},n):z(n)?t[s]=n.slice():t[s]=n}for(var r=0,a=arguments.length;r<a;r++)V(arguments[r],e);return t}function De(t,e,r){return V(e,function(n,s){r&&typeof n=="function"?t[s]=Oe(n,r):t[s]=n}),t}function Ie(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var h={isArray:z,isArrayBuffer:ce,isBuffer:Ne,isFormData:xe,isArrayBufferView:Ce,isString:Re,isNumber:$e,isObject:fe,isPlainObject:A,isUndefined:M,isDate:Pe,isFile:Ae,isBlob:Le,isFunction:de,isStream:je,isURLSearchParams:Te,isStandardBrowserEnv:Be,forEach:V,merge:F,extend:De,trim:Ue,stripBOM:Ie},N=h;function Z(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var he=function(e,r,a){if(!r)return e;var n;if(a)n=a(r);else if(N.isURLSearchParams(r))n=r.toString();else{var s=[];N.forEach(r,function(l,v){l===null||typeof l=="undefined"||(N.isArray(l)?v=v+"[]":l=[l],N.forEach(l,function(c){N.isDate(c)?c=c.toISOString():N.isObject(c)&&(c=JSON.stringify(c)),s.push(Z(v)+"="+Z(c))}))}),n=s.join("&")}if(n){var i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},_e=h;function j(){this.handlers=[]}j.prototype.use=function(e,r,a){return this.handlers.push({fulfilled:e,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};j.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};j.prototype.forEach=function(e){_e.forEach(this.handlers,function(a){a!==null&&e(a)})};var qe=j,ke=h,Je=function(e,r){ke.forEach(e,function(n,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[s])})},pe=function(e,r,a,n,s){return e.config=r,a&&(e.code=a),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},Me=pe,me=function(e,r,a,n,s){var i=new Error(e);return Me(i,r,a,n,s)},Fe=me,He=function(e,r,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):r(Fe("Request failed with status code "+a.status,a.config,null,a.request,a))},$=h,ze=$.isStandardBrowserEnv()?function(){return{write:function(r,a,n,s,i,u){var l=[];l.push(r+"="+encodeURIComponent(a)),$.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),$.isString(s)&&l.push("path="+s),$.isString(i)&&l.push("domain="+i),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Ve=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},We=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},Xe=Ve,Ke=We,Ye=function(e,r){return e&&!Xe(r)?Ke(e,r):r},_=h,Ge=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Qe=function(e){var r={},a,n,s;return e&&_.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),a=_.trim(u.substr(0,s)).toLowerCase(),n=_.trim(u.substr(s+1)),a){if(r[a]&&Ge.indexOf(a)>=0)return;a==="set-cookie"?r[a]=(r[a]?r[a]:[]).concat([n]):r[a]=r[a]?r[a]+", "+n:n}}),r},ee=h,Ze=ee.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),a;function n(s){var i=s;return e&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=n(window.location.href),function(i){var u=ee.isString(i)?n(i):i;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function W(t){this.message=t}W.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};W.prototype.__CANCEL__=!0;var T=W,P=h,et=He,tt=ze,rt=he,nt=Ye,at=Qe,st=Ze,q=me,it=B,ot=T,te=function(e){return new Promise(function(a,n){var s=e.data,i=e.headers,u=e.responseType,l;function v(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}P.isFormData(s)&&delete i["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(c+":"+y)}var d=nt(e.baseURL,e.url);o.open(e.method.toUpperCase(),rt(d,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function G(){if(!!o){var g="getAllResponseHeaders"in o?at(o.getAllResponseHeaders()):null,O=!u||u==="text"||u==="json"?o.responseText:o.response,E={data:O,status:o.status,statusText:o.statusText,headers:g,config:e,request:o};et(function(I){a(I),v()},function(I){n(I),v()},E),o=null}}if("onloadend"in o?o.onloadend=G:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(G)},o.onabort=function(){!o||(n(q("Request aborted",e,"ECONNABORTED",o)),o=null)},o.onerror=function(){n(q("Network Error",e,null,o)),o=null},o.ontimeout=function(){var O=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",E=e.transitional||it.transitional;e.timeoutErrorMessage&&(O=e.timeoutErrorMessage),n(q(O,e,E.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",o)),o=null},P.isStandardBrowserEnv()){var Q=(e.withCredentials||st(d))&&e.xsrfCookieName?tt.read(e.xsrfCookieName):void 0;Q&&(i[e.xsrfHeaderName]=Q)}"setRequestHeader"in o&&P.forEach(i,function(O,E){typeof s=="undefined"&&E.toLowerCase()==="content-type"?delete i[E]:o.setRequestHeader(E,O)}),P.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(g){!o||(n(!g||g&&g.type?new ot("canceled"):g),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null),o.send(s)})},f=h,re=Je,ut=pe,lt={"Content-Type":"application/x-www-form-urlencoded"};function ne(t,e){!f.isUndefined(t)&&f.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function ct(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=te),t}function ft(t,e,r){if(f.isString(t))try{return(e||JSON.parse)(t),f.trim(t)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(t)}var U={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:ct(),transformRequest:[function(e,r){return re(r,"Accept"),re(r,"Content-Type"),f.isFormData(e)||f.isArrayBuffer(e)||f.isBuffer(e)||f.isStream(e)||f.isFile(e)||f.isBlob(e)?e:f.isArrayBufferView(e)?e.buffer:f.isURLSearchParams(e)?(ne(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):f.isObject(e)||r&&r["Content-Type"]==="application/json"?(ne(r,"application/json"),ft(e)):e}],transformResponse:[function(e){var r=this.transitional||U.transitional,a=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,s=!a&&this.responseType==="json";if(s||n&&f.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(s)throw i.name==="SyntaxError"?ut(i,this,"E_JSON_PARSE"):i}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};f.forEach(["delete","get","head"],function(e){U.headers[e]={}});f.forEach(["post","put","patch"],function(e){U.headers[e]=f.merge(lt)});var B=U,dt=h,ht=B,pt=function(e,r,a){var n=this||ht;return dt.forEach(a,function(i){e=i.call(n,e,r)}),e},ve=function(e){return!!(e&&e.__CANCEL__)},ae=h,k=pt,mt=ve,vt=B,gt=T;function J(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new gt("canceled")}var yt=function(e){J(e),e.headers=e.headers||{},e.data=k.call(e,e.data,e.headers,e.transformRequest),e.headers=ae.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ae.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||vt.adapter;return r(e).then(function(n){return J(e),n.data=k.call(e,n.data,n.headers,e.transformResponse),n},function(n){return mt(n)||(J(e),n&&n.response&&(n.response.data=k.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,ge=function(e,r){r=r||{};var a={};function n(o,c){return p.isPlainObject(o)&&p.isPlainObject(c)?p.merge(o,c):p.isPlainObject(c)?p.merge({},c):p.isArray(c)?c.slice():c}function s(o){if(p.isUndefined(r[o])){if(!p.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],r[o])}function i(o){if(!p.isUndefined(r[o]))return n(void 0,r[o])}function u(o){if(p.isUndefined(r[o])){if(!p.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,r[o])}function l(o){if(o in r)return n(e[o],r[o]);if(o in e)return n(void 0,e[o])}var v={url:i,method:i,data:i,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return p.forEach(Object.keys(e).concat(Object.keys(r)),function(c){var y=v[c]||s,d=y(c);p.isUndefined(d)&&y!==l||(a[c]=d)}),a},ye={version:"0.26.0"},bt=ye.version,X={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){X[t]=function(a){return typeof a===t||"a"+(e<1?"n ":" ")+t}});var se={};X.transitional=function(e,r,a){function n(s,i){return"[Axios v"+bt+"] Transitional option '"+s+"'"+i+(a?". "+a:"")}return function(s,i,u){if(e===!1)throw new Error(n(i," has been removed"+(r?" in "+r:"")));return r&&!se[i]&&(se[i]=!0,console.warn(n(i," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(s,i,u):!0}};function wt(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var a=Object.keys(t),n=a.length;n-- >0;){var s=a[n],i=e[s];if(i){var u=t[s],l=u===void 0||i(u,s,t);if(l!==!0)throw new TypeError("option "+s+" must be "+l);continue}if(r!==!0)throw Error("Unknown option "+s)}}var St={assertOptions:wt,validators:X},be=h,Et=he,ie=qe,oe=yt,D=ge,we=St,x=we.validators;function R(t){this.defaults=t,this.interceptors={request:new ie,response:new ie}}R.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=D(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var a=r.transitional;a!==void 0&&we.assertOptions(a,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(r)===!1||(s=s&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var i=[];this.interceptors.response.forEach(function(d){i.push(d.fulfilled,d.rejected)});var u;if(!s){var l=[oe,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(i),u=Promise.resolve(r);l.length;)u=u.then(l.shift(),l.shift());return u}for(var v=r;n.length;){var o=n.shift(),c=n.shift();try{v=o(v)}catch(y){c(y);break}}try{u=oe(v)}catch(y){return Promise.reject(y)}for(;i.length;)u=u.then(i.shift(),i.shift());return u};R.prototype.getUri=function(e){return e=D(this.defaults,e),Et(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};be.forEach(["delete","get","head","options"],function(e){R.prototype[e]=function(r,a){return this.request(D(a||{},{method:e,url:r,data:(a||{}).data}))}});be.forEach(["post","put","patch"],function(e){R.prototype[e]=function(r,a,n){return this.request(D(n||{},{method:e,url:r,data:a}))}});var Ot=R,Nt=T;function C(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(a){if(!!r._listeners){var n,s=r._listeners.length;for(n=0;n<s;n++)r._listeners[n](a);r._listeners=null}}),this.promise.then=function(a){var n,s=new Promise(function(i){r.subscribe(i),n=i}).then(a);return s.cancel=function(){r.unsubscribe(n)},s},t(function(n){r.reason||(r.reason=new Nt(n),e(r.reason))})}C.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};C.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};C.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};C.source=function(){var e,r=new C(function(n){e=n});return{token:r,cancel:e}};var xt=C,Ct=function(e){return function(a){return e.apply(null,a)}},Rt=h,$t=function(e){return Rt.isObject(e)&&e.isAxiosError===!0},ue=h,Pt=le,L=Ot,At=ge,Lt=B;function Se(t){var e=new L(t),r=Pt(L.prototype.request,e);return ue.extend(r,L.prototype,e),ue.extend(r,e),r.create=function(n){return Se(At(t,n))},r}var w=Se(Lt);w.Axios=L;w.Cancel=T;w.CancelToken=xt;w.isCancel=ve;w.VERSION=ye.version;w.all=function(e){return Promise.all(e)};w.spread=Ct;w.isAxiosError=$t;H.exports=w;H.exports.default=w;var K=H.exports;const m=K.create({baseURL:"https://ganqian1.vercel.app/",timeout:18e3,withCredentials:!0});m.interceptors.request.use(t=>(b.msg.value=1,t));m.interceptors.response.use(t=>(b.msg.value=0,t),t=>(b.msg.value=0,t));function jt(t){if(typeof t=="number"){let e=parseInt(t/60),r=parseInt(t-e*60);return e=e<10?`0${e}`:e,r=r<10?`0${r}`:r,`${e}:${r}`}else return parseInt(t.slice(0,2))*60+parseInt(t.slice(3,5))}function Y(t){return t.map(e=>({name:e.name,id:e.id,author:e.ar.map(r=>r.name).join("/"),time:Math.floor(e.dt/1e3),platform:"net"}))}function Ut(t){return new Promise((e,r)=>{m.get("/comment/music",{params:{id:t}}).then(a=>{let n=a.data.hotComments.reduce((s,i)=>s+"\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0"+i.user.nickname+"\uFF1A"+i.content,"");e(n.replace(`
`,""))}).catch(a=>console.log(a))})}function Bt(){return new Promise((t,e)=>{m.get("/personal_fm").then(r=>{let a=r.data.data.map(n=>({name:n.name,id:n.id,author:n.artists.map(s=>s.name).join("/"),time:Math.floor(n.duration/1e3),platform:"net"}));t(a)}).catch(r=>console.log(r))})}function Dt(t){return new Promise((e,r)=>{m.get("/like",{params:{id:t}}).catch(a=>console.log(a))})}function It(t){return b.msg.value=1,new Promise((e,r)=>{fetch(t,{responseType:"blob"}).then(a=>a.blob()).then(async a=>{b.msg.value=0;let n=URL.createObjectURL(a);e(n)}).catch(a=>{b.msg.value=0,console.log(a)})})}function _t(t){return new Promise((e,r)=>{m.get("/cloudsearch",{params:{keywords:t}}).then(a=>{e(Y(a.data.result.songs))}).catch(a=>console.log(a))})}function qt(){return new Promise((t,e)=>{let r=JSON.parse(localStorage.getItem("user")).uid;m.get("/recommend/songs",{params:{uid:r}}).then(a=>{t(Y(a.data.data.dailySongs))}).catch(a=>console.log(a))})}function kt(t){return new Promise((e,r)=>{m.get("/lyric",{params:{id:t}}).then(a=>{if(a=a.data,a.nolyric)e([]);else{let n=a.lrc.lyric.split(`
`),s=[];for(let i of n){if(i=="")continue;let u={};u.content=i.match(/](.*)/)[1],u.content!=""&&(u.time=i.slice(1,6),u.second=jt(u.time),s.push(u))}e(s)}}).catch(a=>console.log(a))})}function Jt(t){return new Promise((e,r)=>{let a=`https://music.163.com/song/media/outer/url?id=${t}.mp3`;K({method:"POST",url:"https://ca448d14-fda5-4d8f-9279-3f4896d8f854.bspapp.com/index",data:JSON.stringify({action:"getNetEaseMusicUrl",url:a})}).then(s=>{if(s.data.url!="https://music.163.com/404"){let i=s.data.url.replace(/(http|https)/,"https");e(i)}else m.get(`/song/url?id=${t}`).then(i=>{let u=i.data.data[0].url.replace(/(http|https)/,"https");e(u)}).catch(i=>console.log(i))}).catch(s=>console.log(s))})}function Mt(){return new Promise((t,e)=>{let r=localStorage.getItem("douList");r?t(JSON.parse(r)):(b.msg.value=1,K({method:"POST",url:"https://ca448d14-fda5-4d8f-9279-3f4896d8f854.bspapp.com/index",data:JSON.stringify({action:"getDouYin"})}).then(n=>{b.msg.value=0;let s=n.data.data.map(i=>({name:i.name,tag:i.tag,author:i.res.musicAuthor,time:i.res.musicDuration,url:i.res.musicUrl,platform:"dou"}));localStorage.setItem("douList",JSON.stringify(s)),t(s)}).catch(n=>{b.msg.value=0,console.log(n)}))})}async function Ft(t){return new Promise((e,r)=>{m.get("/captcha/sent",{params:{phone:t}}).then(a=>{e(!0)}).catch(a=>console.log(a))})}async function Ht(t,e){return new Promise((r,a)=>{m.get("/login/cellphone",{params:{phone:t,captcha:e}}).then(n=>{n=n.data;let s={uid:n.account.id,avatarUrl:n.profile.avatarUrl,nickName:n.profile.nickname};localStorage.setItem("user",JSON.stringify(s)),b.isLogin.value=!0,r()}).catch(n=>console.log(n))})}function zt(t){return new Promise((e,r)=>{let a=JSON.parse(localStorage.getItem("user")).uid,n=localStorage.getItem(`songsListNet${a}`),s=localStorage.getItem(`songListNet${t}`);s?e(JSON.parse(s)):m.get("/playlist/detail",{params:{id:t}}).then(i=>{let u=Y(i.data.playlist.tracks);t==JSON.parse(n)[0].id&&localStorage.setItem(`songListNet${t}`,JSON.stringify(u)),e(u)}).catch(i=>console.log(i))})}function Vt(){return new Promise((t,e)=>{let r=JSON.parse(localStorage.getItem("user")).uid,a=localStorage.getItem(`songsListNet${r}`);a?t(JSON.parse(a)):m.get("/user/playlist",{params:{uid:r}}).then(n=>{n=n.data;let s=[{id:n.playlist[0].id,name:"\u6211\u559C\u6B22"}];for(let i=1;i<n.playlist.length;i++)n.playlist[i].subscribed||s.push({id:n.playlist[i].id,name:n.playlist[i].name});localStorage.setItem(`songsListNet${r}`,JSON.stringify(s)),t(s)}).catch(n=>console.log(n))})}export{It as a,kt as b,Vt as c,zt as d,Bt as e,qt as f,Jt as g,Dt as h,Mt as i,Ft as j,Ut as k,Ht as l,_t as s,jt as t};
