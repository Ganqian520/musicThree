var he=Object.defineProperty;var pe=(i,e,t)=>e in i?he(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var _=(i,e,t)=>(pe(i,typeof e!="symbol"?e+"":e,t),t);import{r as f,a as Q,L as ce,B as W,b as E,c as _e,d as V,G as X,S as fe,M as ge,e as ve,V as me,o as F,O as ye,A as xe,P as be,R as we,U as Le,f as Se,E as $e,W as ke,g as Ce,C as Ne,h as Me,i as Pe,j as v,k as y,l as Ie,F as ee,m as te,n as A,p as r,t as S,u as b,w as je,q as J,s as R,v as D,x as N,y as j,z as ie,D as Y,H as K,I as Ae,J as Oe,K as Z,N as De}from"./vendor.376ff8de.js";const Te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}};Te();var Ue="./assets/back.3e30294c.jpg",We="./assets/bottom.283b4be8.jpg",Ee="./assets/front.b9483333.jpg",ze="./assets/left.d7e0879d.jpg",Fe="./assets/right.80884b70.jpg",Je="./assets/top.8b10a0eb.jpg";const w={isLogin:f(!1),msg:f(0)},C=Q.create({baseURL:"https://ganqian1.vercel.app/",timeout:8e3,withCredentials:!0});C.interceptors.request.use(i=>(w.msg.value=1,i));C.interceptors.response.use(i=>(w.msg.value=0,i),i=>(w.msg.value=0,i));function T(i){if(typeof i=="number"){let e=parseInt(i/60),t=parseInt(i-e*60);return e=e<10?`0${e}`:e,t=t<10?`0${t}`:t,`${e}:${t}`}else return parseInt(i.slice(0,2))*60+parseInt(i.slice(3,5))}function se(i){return i.map(e=>({name:e.name,id:e.id,author:e.ar.map(t=>t.name).join("/"),time:Math.floor(e.dt/1e3),platform:"net"}))}function Re(){return new Promise((i,e)=>{C.get("/personal_fm").then(t=>{let s=t.data.data.map(n=>({name:n.name,id:n.id,author:n.artists.map(a=>a.name).join("/"),time:Math.floor(n.duration/1e3),platform:"net"}));i(s)}).catch(t=>console.log(t))})}function Be(i){return new Promise((e,t)=>{C.get("/like",{params:{id:i}}).catch(s=>console.log(s))})}function Ge(i){return w.msg.value=1,new Promise((e,t)=>{fetch(i,{responseType:"blob"}).then(s=>s.blob()).then(s=>{w.msg.value=0;let n=URL.createObjectURL(s);e(n)}).catch(s=>{w.msg.value=0,console.log(s)})})}function qe(i){return new Promise((e,t)=>{C.get("/cloudsearch",{params:{keywords:i}}).then(s=>{e(se(s.data.result.songs))}).catch(s=>console.log(s))})}function He(){return new Promise((i,e)=>{let t=JSON.parse(localStorage.getItem("user")).uid;C.get("/recommend/songs",{params:{uid:t}}).then(s=>{i(se(s.data.data.dailySongs))}).catch(s=>console.log(s))})}function Ve(i){return new Promise((e,t)=>{C.get("/lyric",{params:{id:i}}).then(s=>{if(s=s.data,s.nolyric)e([]);else{let n=s.lrc.lyric.split(`
`),a=[];for(let o of n){if(o=="")continue;let l={};l.content=o.match(/](.*)/)[1],l.content!=""&&(l.time=o.slice(1,6),l.second=T(l.time),a.push(l))}e(a)}}).catch(s=>console.log(s))})}function Xe(i){return new Promise((e,t)=>{let s=`https://music.163.com/song/media/outer/url?id=${i}.mp3`;Q({method:"POST",url:"https://ca448d14-fda5-4d8f-9279-3f4896d8f854.bspapp.com/index",data:JSON.stringify({action:"getNetEaseMusicUrl",url:s})}).then(a=>{if(a.data.url!="https://music.163.com/404"){let o=a.data.url.replace(/(http|https)/,"https");e(o)}else C.get(`/song/url?id=${i}`).then(o=>{let l=o.data.data[0].url.replace(/(http|https)/,"https");e(l)})}).catch(a=>console.log(a))})}function Ye(){return new Promise((i,e)=>{let t=localStorage.getItem("douList");t?i(JSON.parse(t)):(w.msg.value=1,Q({method:"POST",url:"https://ca448d14-fda5-4d8f-9279-3f4896d8f854.bspapp.com/index",data:JSON.stringify({action:"getDouYin"})}).then(n=>{var a;if(w.msg.value=0,(a=n.data)!=null&&a.data){let o=n.data.data.map(l=>({name:l.name,tag:l.tag,author:l.res.musicAuthor,time:l.res.musicDuration,url:l.res.musicUrl,platform:"dou"}));localStorage.setItem("douList",JSON.stringify(o)),i(o)}}).catch(n=>{w.msg.value=0,console.log(n)}))})}async function Ke(i){return new Promise((e,t)=>{C.get("/captcha/sent",{params:{phone:i}}).then(s=>{e(!0)}).catch(s=>console.log(s))})}async function Ze(i,e){return new Promise((t,s)=>{C.get("/login/cellphone",{params:{phone:i,captcha:e}}).then(n=>{n=n.data;let a={uid:n.account.id,avatarUrl:n.profile.avatarUrl,nickName:n.profile.nickname};localStorage.setItem("user",JSON.stringify(a)),w.isLogin.value=!0,t()}).catch(n=>console.log(n))})}function q(i){return new Promise((e,t)=>{let s=JSON.parse(localStorage.getItem("user")).uid,n=localStorage.getItem(`songsListNet${s}`),a=localStorage.getItem(`songListNet${i}`);a?(console.log("\u7F13\u5B58",JSON.parse(a)),e(JSON.parse(a))):C.get("/playlist/detail",{params:{id:i}}).then(o=>{if(console.log("\u8BF7\u6C42\u6B4C\u66F2\u5217\u8868",o),o.status==200&&o.data.code==200){let l=se(o.data.playlist.tracks);i==JSON.parse(n)[0].id&&localStorage.setItem(`songListNet${i}`,JSON.stringify(l)),console.log(l),e(l)}}).catch(o=>console.log(o))})}function Qe(){return new Promise((i,e)=>{let t=JSON.parse(localStorage.getItem("user")).uid,s=localStorage.getItem(`songsListNet${t}`);s?i(JSON.parse(s)):C.get("/user/playlist",{params:{uid:t}}).then(n=>{n=n.data;let a=[{id:n.playlist[0].id,name:"\u6211\u559C\u6B22"}];for(let o=1;o<n.playlist.length;o++)n.playlist[o].subscribed||a.push({id:n.playlist[o].id,name:n.playlist[o].name});localStorage.setItem(`songsListNet${t}`,JSON.stringify(a)),i(a)}).catch(n=>console.log(n))})}class et{constructor(){_(this,"ctx",null);_(this,"audio",document.createElement("audio"));_(this,"fft",new Uint8Array(128));_(this,"analyser",null);_(this,"isPlay",f(!1));_(this,"music",f({}));_(this,"index",0);_(this,"listDou",f([]));_(this,"listNet",f([]));_(this,"listWant",[]);_(this,"indexNet",f(0));_(this,"indexDou",f(0));_(this,"updateNetCb",null);_(this,"updateProgressCb",null);_(this,"isUserSlide",!1);_(this,"order",0)}init(){this.ctx=new AudioContext,this.analyser=this.ctx.createAnalyser();let e=this.ctx.createMediaElementSource(this.audio);this.analyser.fftSize=512,e.connect(this.analyser).connect(this.ctx.destination),this.audio.ontimeupdate=()=>{this.updateNetCb&&this.music.value.platform=="net"&&this.updateNetCb(),this.updateProgressCb&&!this.isUserSlide&&this.updateProgressCb()};let t=this;this.audio.addEventListener("ended",this.next.bind(t))}async start(e,t){if(this.isPlay.value=!0,e.name==this.music.value.name){this.audio.play();return}this.ctx||this.init(),this.audio.pause(),this.music.value=e,this.index=t;let s;e.platform=="net"?(s=await Xe(e.id),this.indexNet.value=t):e.platform=="dou"&&(s=e.url,this.indexDou.value=t);let n=await Ge(s);this.audio.src=n,this.audio.play()}next(){if(this.listWant.length==0){let e=this.music.value.platform=="net"?this.listNet.value:this.listDou.value;this.order==0?(this.index=this.index<e.length-1?this.index+1:0,this.start(e[this.index],this.index)):this.order==1?(this.index=Math.floor(Math.random()*e.length-1),this.start(e[this.index],this.index)):this.order==2&&this.audio.play()}else this.start(this.listWant[0]),this.listWant.shift()}last(){let e=this.music.value.platform=="net"?this.listNet.value:this.listDou.value;this.index=this.index-1<0?0:this.index-1,this.start(e[this.index],this.index)}pause(){this.audio.pause(),this.isPlay.value=!1}resume(){console.log("resume"),this.audio.play(),this.isPlay.value=!0}}const c=new et,z=40,ae=10,oe=128,tt=.5,st=20,nt=65535,le=10,it=100,H=new ce({color:65535});class at{constructor(e){_(this,"outLine");_(this,"inLine");_(this,"midLines",[]);_(this,"points",[]);this.scene=e}update(){let e=[],t=[];for(let s=0;s<c.fft.length;s++){let n=Math.PI*2/c.fft.length*s,a=Math.cos(n)*c.fft[s]*(ae/256),o=Math.sin(n)*c.fft[s]*(ae/256),l=[this.points[s*3]-a,0,this.points[s*3+2]-o,this.points[s*3]+a,0,this.points[s*3+2]+o];this.midLines[s].geometry.getAttribute("position").set(l,0),this.midLines[s].geometry.getAttribute("position").needsUpdate=!0,e.push(this.points[s*3]+a),e.push(0),e.push(this.points[s*3+2]+o),t.push(this.points[s*3]-a),t.push(0),t.push(this.points[s*3+2]-o)}this.outLine.geometry.getAttribute("position").set(e,0),this.inLine.geometry.getAttribute("position").set(t,0),this.outLine.geometry.getAttribute("position").needsUpdate=!0,this.inLine.geometry.getAttribute("position").needsUpdate=!0}init(){c.fft.forEach((s,n)=>{let a=Math.PI*2/c.fft.length*n,o=Math.cos(a)*z,l=0,d=Math.sin(a)*z;this.points.push(o,l,d);let g=new W;g.attributes.position=new E(new Float32Array([o,l,d,o,l,d]),3);let h=new _e(g,H);this.midLines.push(h),this.scene.add(h)});let e=new W,t=new W;e.attributes.position=new E(new Float32Array(this.points),3),t.attributes.position=new E(new Float32Array(this.points),3),this.outLine=new V(e,H),this.inLine=new V(t,H),this.scene.add(this.outLine,this.inLine)}}class ot{constructor(e){_(this,"barGroup");_(this,"scene");this.scene=e}init(){this.barGroup=new X;for(let e=0;e<oe;e++){let t=new X,s=new fe(tt),n=new ge({color:nt}),a=new ve(s,n);a.position.y=.5,t.add(a);let o=Math.PI*2/oe*e+Math.PI/2,l=Math.sin(o)*z,d=Math.cos(o)*z;t.position.set(l,le,d),this.barGroup.add(t)}this.scene.add(this.barGroup)}update(){this.barGroup.children.forEach((e,t)=>{e.position.y=le+c.fft[t]*(st/256)})}}class re{constructor(){_(this,"speedT",U(.4,.6));_(this,"speedR",.01);_(this,"distance",0);_(this,"lifeDistance",500);_(this,"loopLine",null);_(this,"look",new me(0,1,0));this.angle=Math.random()*Math.PI*2,this.x=Math.cos(this.angle)*40,this.y=0,this.z=Math.sin(this.angle)*40;let s=[];for(let n=0;n<3;n++)s.push(U(-5,5)),s.push(U(-5,5)),s.push(U(-5,5));this.geometry=new W,this.geometry.attributes.position=new E(new Float32Array(s),3),this.material=new ce({color:65535}),this.material.transparent=!0,this.loopLine=new V(this.geometry,this.material),this.loopLine.position.set(this.x,this.y,this.z)}update(){this.x+=this.speedT*Math.cos(this.angle),this.z+=this.speedT*Math.sin(this.angle),this.distance+=this.speedT,this.loopLine.position.set(this.x,this.y,this.z)}}class lt{constructor(e){_(this,"intervelCount",0);_(this,"traingles",[]);this.scene=e}init(){for(let e=0;e<10;e++){let t=new re;this.traingles.push(t),this.scene.add(t.loopLine)}}update(){if(this.intervelCount++,this.intervelCount>20){for(let e=0;e<3;e++){let t=new re;this.traingles.push(t),this.scene.add(t.loopLine)}this.intervelCount=0}for(let e=0;e<this.traingles.length;e++){let t=this.traingles[e];t.update(),t.distance>t.lifeDistance&&(this.scene.remove(t.loopLine),t.geometry.dispose(),t.material.dispose(),this.traingles.splice(e--,1))}}}function U(i,e){return Math.random()*(e-i)+i}const rt={setup(i){const e=f(null);let t,s,n,a,o;new Ie;let l={threshold:.2,strength:1,radius:0},d,g,h,m;F(()=>{u(),p()});function u(){G(),M(),B(),x(),P(),d=new X,s.add(d),g=new at(d),g.init(),h=new ot(d),h.init(),m=new lt(s),m.init()}function p(){requestAnimationFrame(p),L(),a.render()}function L(){var k;(k=c.analyser)==null||k.getByteFrequencyData(c.fft),o.update(),d.rotateY(.003),h.update(),g.update(),m.update()}function M(){o=new ye(n,t.domElement),o.enablePan=!1,o.enableDamping=!0,o.enableZoom=!0,o.minDistance=0,o.maxDistance=1e3}function P(){window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight),a.setSize(window.innerWidth,window.innerHeight)})}function x(){s.add(new xe(4473924));let k=new be(16777215);k.position.set(80,100,50),k.castShadow=!0,s.add(k)}let $;function B(){let k=new we(s,n);$=new Le(new Se(window.innerWidth,window.innerHeight),1.5,.2,0),$.threshold=l.threshold,$.strength=l.strength,$.radius=l.radius,a=new $e(t),a.addPass(k),a.addPass($)}function G(){t=new ke({antialias:!0,alpha:!0,canvas:e.value}),t.setSize(window.innerWidth,window.innerHeight),s=new Ce,s.background=new Ne().load(O()),n=new Me(75,innerWidth/innerHeight,1,1e4),n.position.set(0,40,70),n.lookAt(0,0,0),new Pe(it)}function O(){return["right.jpg","left.jpg","top.jpg","bottom.jpg","front.jpg","back.jpg"].map(ne=>new URL({"../../assets/skybox/back.jpg":Ue,"../../assets/skybox/bottom.jpg":We,"../../assets/skybox/front.jpg":Ee,"../../assets/skybox/left.jpg":ze,"../../assets/skybox/right.jpg":Fe,"../../assets/skybox/top.jpg":Je}[`../../assets/skybox/${ne}`],self.location).href)}return(k,ne)=>(v(),y("canvas",{class:"canvas",ref_key:"canvas",ref:e},null,512))}};class ue{constructor(e){this.duration=e,this.updateCb=()=>{},this.endedCb=()=>{},this.startTime=0}start(){this.startTime=new Date().getTime(),this.recursion()}recursion(){let e=new Date().getTime()-this.startTime;e<this.duration?(requestAnimationFrame(this.recursion.bind(this)),this.updateCb(e)):this.endedCb()}}var I=(i,e)=>{const t=i.__vccOpts||i;for(const[s,n]of e)t[s]=n;return t};const ct=i=>(J("data-v-30380fb7"),i=i(),R(),i),ut=["onClick"],dt={class:"item_index"},ht={class:"mid"},pt={class:"item_name"},_t={class:"name_"},ft={class:"name"},gt={class:"author_"},vt={class:"author"},mt={class:"item_index"},yt={class:"mid"},xt=["onClick"],bt=ct(()=>r("span",{class:"mid add"},"+",-1)),wt=[bt],Lt={props:{list:Object,index_:Object},setup(i){const e=i,t=f(null);function s(a,o){c.listWant.push(D(o));let l=t.value,d=a.srcElement.offsetTop,g=a.srcElement.offsetLeft,h=document.createElement("div");h.style.left=`${g}px`,h.style.top=d+"px",h.style.position="absolute",h.style.pointerEvents="none",h.style.fontSize="25px",h.innerHTML="+";let m=new ue(1e3);m.updateCb=u=>{u=u/1e3;let p=-100,L=-300,M=1500,P=g+p*u,x=d+L*u+.5*M*u**2;h.style.left=P+"px",h.style.top=x+"px"},m.endedCb=()=>{l.removeChild(h)},m.start(),l.appendChild(h)}function n(a){e.index_.value=a,c.start(e.list.value[a],a)}return(a,o)=>(v(),y("div",{class:"list scroll",ref_key:"list_",ref:t},[(v(!0),y(ee,null,te(i.list.value,(l,d)=>(v(),y("div",{class:"item hover",key:"index",onClick:g=>n(d),style:A({fontWeight:i.index_.value==d?"900":"400"})},[r("div",dt,[r("span",ht,S(i.list.value.length-d),1)]),r("div",pt,[r("div",_t,[r("span",ft,S(l.name),1)]),r("div",gt,[r("span",vt,S(l.author),1)])]),r("div",mt,[r("span",yt,S(b(T)(l.time)),1)]),r("div",{class:"item_index",onClick:je(g=>s(g,l),["stop"])},wt,8,xt)],12,ut))),128))],512))}};var de=I(Lt,[["__scopeId","data-v-30380fb7"]]);const St={class:"dou"},$t={class:"head"},kt={class:"span"},Ct={key:0,class:"pop scroll_no_bar"},Nt=["onClick"],Mt={setup(i){let e=[];f(0);const t=f("\u6296\u97F3"),s=f(!1),n=["\u6296\u97F3","\u65E0\u4EBA\u58F0","\u6709\u4EBA\u58F0"];F(()=>{Ye().then(o=>{e=o,c.listDou.value=o})});function a(o){t.value=n[o],c.listDou.value=o==0?e:e.filter(l=>l.tag==o),c.indexDou.value=0,s.value=!1}return(o,l)=>(v(),y("div",St,[r("div",$t,[r("div",{class:"list_name",onMouseenter:l[0]||(l[0]=()=>s.value=!0),onMouseleave:l[1]||(l[1]=()=>s.value=!1)},[r("span",kt,S(t.value),1),s.value?(v(),y("div",Ct,[(v(),y(ee,null,te(n,(d,g)=>r("div",{class:"name black_text hover",key:g,onClick:h=>a(g)},S(d),9,Nt)),64))])):N("",!0)],32)]),j(de,{list:b(c).listDou,index_:b(c).indexDou},null,8,["list","index_"])]))}};var Pt=I(Mt,[["__scopeId","data-v-58c9201d"]]);const It=i=>(J("data-v-655beda5"),i=i(),R(),i),jt={class:"menu"},At=It(()=>r("span",{class:"item"},"\u9000\u51FA\u7F51\u6613\u4E91\u8D26\u53F7",-1)),Ot=[At],Dt={setup(i){return(e,t)=>(v(),y("div",jt,Ot))}};var Tt=I(Dt,[["__scopeId","data-v-655beda5"]]);const Ut={class:"control"},Wt={class:"song"},Et={class:"progress"},zt={class:"time"},Ft={class:"time_span"},Jt={class:"slider"},Rt=["value"],Bt={class:"time"},Gt={class:"time_span"},qt={class:"button"},Ht={class:"icon_"},Vt={class:"icon_"},Xt={class:"icon_"},Yt={class:"icon_"},Kt={setup(i){const e=f(1),t=c.music,s=c.isPlay,n=f("00:00"),a=f("00:00"),o=f(c.order);c.updateProgressCb=()=>{let u=c.audio.currentTime,p=c.audio.duration;isNaN(p)&&(p=0),e.value=u/p*100,n.value=T(Math.floor(u)),a.value=T(Math.floor(p))};function l(){t.value.platform=="net"&&Be(t.value.id)}function d(u){e.value=u.target.value,c.isUserSlide=!0,n.value=T(Math.floor(c.audio.duration*e.value/100))}function g(u){e.value=u.target.value,c.isUserSlide=!1;let p=c.audio.duration*e.value/100;c.audio.currentTime=p}function h(){let u=o.value;c.order=u<2?u+1:0,o.value=c.order}function m(){!t.value.name||(c.isPlay.value?c.pause():c.resume())}return(u,p)=>(v(),y("div",Ut,[r("div",Wt,[r("span",{class:"span",onDblclick:l},S(b(t).name),33)]),r("div",Et,[r("div",zt,[r("span",Ft,S(n.value),1)]),r("div",Jt,[r("input",{class:"range",type:"range",value:e.value,min:"1",max:"100",step:"0.1",onInput:d,onChange:g,style:A({background:`linear-gradient(to right,#00ffff 0%,#00ffff ${e.value}%,rgba(0,255,255,0.4) ${e.value}%,rgba(0,255,255,0.4) 100%)`})},null,44,Rt)]),r("div",Bt,[r("span",Gt,S(a.value),1)])]),r("div",qt,[r("div",Ht,[r("span",{class:ie(["icon","iconfont",["icon-shunxubofang","icon-suijibofang","icon-danquxunhuan"][o.value]]),onClick:h},null,2)]),r("div",Vt,[r("span",{class:"icon iconfont icon-shangyishoushangyige",onClick:p[0]||(p[0]=(...L)=>b(c).last&&b(c).last(...L))})]),r("div",{class:"icon_",onClick:m},[r("span",{class:ie(["icon","iconfont",b(s)?"icon-pause":"icon-bofang1"])},null,2)]),r("div",Xt,[r("span",{class:"icon iconfont icon-xiayigexiayishou",onClick:p[1]||(p[1]=(...L)=>b(c).next&&b(c).next(...L))})]),r("div",Yt,[r("span",{class:"icon iconfont icon-qingchu",onClick:p[2]||(p[2]=()=>b(c).listWant=[])})])])]))}};var Zt=I(Kt,[["__scopeId","data-v-169174d9"]]);const Qt=i=>(J("data-v-2af6b1e1"),i=i(),R(),i),es={class:"net"},ts={class:"head"},ss={class:"span_"},ns={key:0,class:"pop scroll_no_bar"},is=["onClick"],as={class:"fm_"},os={class:"fm_"},ls=Qt(()=>r("div",{class:"span_"},[r("span",{class:"center iconfont icon-sousuo"})],-1)),rs={key:0,class:"pop_search pop"},cs={setup(i){f(0);const e=f([]),t=f(0),s=f(!1),n=f(!1),a=f(0),o=f("");F(async()=>{e.value=await Qe(),q(D(e.value)[0].id).then(u=>{c.listNet.value=u})});function l(){localStorage.setItem(`songListNet${D(e.value)[0].id}`,""),q(D(e.value)[0].id).then(u=>{t.value==0&&a.value==0&&(c.listNet.value=u)})}function d(){Re().then(u=>{c.listNet.value=u,c.indexNet.value=0,a.value=2})}function g(){qe(o.value).then(u=>{c.listNet.value=u,c.indexNet.value=0,n.value=!1,a.value=3})}function h(){He().then(u=>{c.listNet.value=u,c.indexNet.value=0,a.value=1})}function m(u){t.value==u&&a.value==0||q(D(e.value)[u].id).then(p=>{c.listNet.value=p,c.indexNet.value=0,t.value=u,s.value=!1,a.value=0})}return(u,p)=>(v(),y("div",es,[r("div",ts,[r("div",{class:"list_name",onMouseenter:p[0]||(p[0]=()=>s.value=!0),onMouseleave:p[1]||(p[1]=()=>s.value=!1),onDblclick:l},[r("div",ss,[r("span",{class:"center",style:A({fontWeight:a.value==0?"900":"400"})},S(e.value.length!=0&&e.value[t.value].name),5)]),s.value?(v(),y("div",ns,[(v(!0),y(ee,null,te(e.value,(L,M)=>(v(),y("div",{class:"name black_text hover",key:M,onClick:P=>m(M)},S(L.name),9,is))),128))])):N("",!0)],32),r("div",as,[r("span",{class:"center",onClick:h,style:A({fontWeight:a.value==1?"900":"400"})},"\u65E5\u63A8",4)]),r("div",os,[r("span",{class:"center",onClick:d,style:A({fontWeight:a.value==2?"900":"400"})},"FM",4)]),r("div",{class:"search",onMouseenter:p[3]||(p[3]=()=>n.value=!0),onMouseleave:p[4]||(p[4]=()=>n.value=!1)},[ls,n.value?(v(),y("div",rs,[Y(r("input",{class:"input",type:"text","onUpdate:modelValue":p[2]||(p[2]=L=>o.value=L)},null,512),[[K,o.value]]),r("span",{class:"icon iconfont icon-sousuo",onClick:g,style:A({fontWeight:a.value==3?"900":"400"})},null,4)])):N("",!0)],32)]),j(de,{list:b(c).listNet,index_:b(c).indexNet},null,8,["list","index_"])]))}};var us=I(cs,[["__scopeId","data-v-2af6b1e1"]]);const ds={class:"lyric"},hs={setup(i){const e=f(null),t=400,s=200,n=s/2;let a=s/2,o=s/6,l,d,g,h=[],m=0,u=0;F(()=>{M()}),Ae(()=>{p(c.music.value)});function p(x){x.name&&(m=0,u=0,a=n,h=[],P(),x.platform=="net"&&Ve(x.id).then($=>{h=$,P(),c.updateNetCb=L}))}function L(){let x=c.audio.currentTime;for(let $ in h)if(x<h[$].second){if(u=$-1<0?0:$-1,u!=m){let B=(m-u)*o,G=n-m*o;m=u;let O=new ue(300);O.updateCb=k=>{a=G+B*(k/300),P()},O.endedCb=()=>{},O.start()}break}}function M(){l=e.value,d=l.getContext("2d"),g=d.createLinearGradient(0,0,0,s),g.addColorStop("0","rgba(0,255,255,0)"),g.addColorStop("0.5","rgba(0,255,255,1)"),g.addColorStop("1.0","rgba(0,255,255,0)")}function P(){l.width=t,l.height=s,d.fillStyle=g,d.font="17px ''",d.textBaseline="middle",d.textAlign="center",d.shadowColor="rgba(0,255,255,1)",d.shadowBlur=40;for(let x=0;x<h.length;x++)d.fillText(h[x].content,t/2,o*x+a)}return(x,$)=>(v(),y("div",ds,[r("canvas",{ref_key:"canvas_",ref:e,id:"canvas"},null,512)]))}};var ps=I(hs,[["__scopeId","data-v-8c784e84"]]);const _s=i=>(J("data-v-d259f294"),i=i(),R(),i),fs={class:"login"},gs=_s(()=>r("span",{class:"item"},"\u7F51\u6613\u4E91",-1)),vs={class:"ver"},ms={key:1,class:"send"},ys={key:1,class:"start item"},xs={setup(i){const e=f(""),t=f(""),s=f(!0),n=f(!0),a=f(60);let o;Oe(()=>{clearInterval(o)});async function l(){s.value=!1,o=setInterval(()=>{a.value--,a.value==-1&&(a.value=60,s.value=!0,clearInterval(o))},1e3),Ke(e.value)}function d(){n.value=!1,Ze(e.value,t.value).catch(g=>{n=!0})}return(g,h)=>(v(),y("div",fs,[gs,Y(r("input",{class:"phone",type:"text",placeholder:"\u624B\u673A\u53F7\uFF1A","onUpdate:modelValue":h[0]||(h[0]=m=>e.value=m)},null,512),[[K,e.value]]),r("div",vs,[Y(r("input",{class:"input_ver",type:"text","onUpdate:modelValue":h[1]||(h[1]=m=>t.value=m),placeholder:"\u9A8C\u8BC1\u7801\uFF1A"},null,512),[[K,t.value]]),s.value?(v(),y("span",{key:0,class:"send",onClick:l},"\u53D1\u9001\u9A8C\u8BC1\u7801")):N("",!0),s.value?N("",!0):(v(),y("span",ms,S(a.value),1))]),n.value?(v(),y("div",{key:0,class:"start item",onClick:d},"\u767B\u5F55")):N("",!0),n.value?N("",!0):(v(),y("div",ys,"\u767B\u5F55\u4E2D\u3002\u3002\u3002"))]))}};var bs=I(xs,[["__scopeId","data-v-d259f294"]]);const ws={class:"index"},Ls={class:"msg"},Ss={setup(i){const e=f(!1),t=["","\u4E0D\u8981\u4E71\u70B9\uFF0C\u6B63\u5728\u52A0\u8F7D\u4E2D......"];let s=localStorage.getItem("user");return w.isLogin.value=!!s,(n,a)=>(v(),y("div",ws,[j(rt),j(Zt,{class:"control_"}),j(Tt,{class:"menu_",onMouseleave:a[0]||(a[0]=()=>e.value=!1),style:A({transform:e.value?"translate(0vw,0)":"translate(-15vw,0)"})},null,8,["style"]),j(Pt,{class:"dou_"}),b(w).isLogin.value?(v(),Z(us,{key:0,class:"net_"})):N("",!0),b(w).isLogin.value?N("",!0):(v(),Z(bs,{key:1,class:"net_"})),j(ps,{class:"lyric_"}),r("span",{class:"setting iconfont icon-shezhi",onMouseenter:a[1]||(a[1]=()=>e.value=!0)},null,32),r("span",Ls,S(t[b(w).msg.value]),1)]))}};var $s=I(Ss,[["__scopeId","data-v-13c5b1de"]]);const ks={setup(i){return(e,t)=>(v(),Z($s))}};De(ks).mount("#app");
