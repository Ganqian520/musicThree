import{r as E,o as u,c as _,a as y,n as m,b as i,u as e,F as T,d as q,p as B,e as J,t as R,f as M,g as d,h as f,i as S,j as F,k as X}from"./vendor.d4761c69.js";const j=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}};j();const z="modulepreload",A={},U="./",v=function(c,r){return!r||r.length===0?c():Promise.all(r.map(s=>{if(s=`${U}${s}`,s in A)return;A[s]=!0;const t=s.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const a=document.createElement("link");if(a.rel=t?"stylesheet":z,t||(a.as="script",a.crossOrigin=""),a.href=s,document.head.appendChild(a),t)return new Promise((g,I)=>{a.addEventListener("load",g),a.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>c())};var k=(n,c)=>{const r=n.__vccOpts||n;for(const[s,t]of c)r[s]=t;return r};const K={props:{flag:Boolean,index:Number},emits:["change"],setup(n,{emit:c}){const r=n,s=E(r.flag);function t(){s.value=!s.value;let o={flag:s.value,index:r.index};c("change",o)}return(o,a)=>(u(),_("div",{class:"switch",onClick:t,style:m({backgroundColor:s.value?"rgba(0,255,255,0.6)":"transparent"})},[y("div",{class:"circle",style:m({transform:s.value?"translateX(15px)":"translateX(1px)"})},null,4)],4))}};var P=k(K,[["__scopeId","data-v-dcb7cb72"]]);const h={isLogin:E(!1),msg:E(0),isOpenAnchor:E(!1)},p=E({effect:!0,comments:!0,piano:!0,dou:!0,net:!0,lyric:!0,control:!0,three:!0}),l=E({comments:{x:470,y:323},control:{x:874,y:595},dou:{x:1094,y:35},effect:{x:1254,y:491},lyric:{x:584,y:35},net:{x:100,y:35},piano:{x:36,y:425}});const V=n=>(B("data-v-68bfa3a5"),n=n(),J(),n),W={class:"menu"},Y={class:"item"},G=V(()=>y("span",{class:"tip"},"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",-1)),H={class:"right"},Q={class:"tip"},Z={class:"right"},ee=V(()=>y("span",{class:"msg"}," \u5982\u6709\u95EE\u9898\u6B22\u8FCE\u53D1\u9001\u5230\u90AE\u7BB1\uFF1A2282227679@qq.com ",-1)),te={setup(n){let c=["\u94A2\u7434","\u73AF\u7ED5\u97F3\u6548","3D\u80CC\u666F","\u6296\u97F3\u5217\u8868","\u7F51\u6613\u4E91\u5217\u8868","\u6B4C\u8BCD","\u8BC4\u8BBA","\u64AD\u653E\u63A7\u5236"],r=["piano","effect","three","dou","net","lyric","comments","control"];function s(t){p.value[r[t.index]]=t.flag,localStorage.setItem("show",JSON.stringify(M(p.value)))}return(t,o)=>(u(),_("div",W,[y("div",Y,[G,y("div",H,[i(P,{class:"switch_",flag:!1,onChange:o[0]||(o[0]=a=>e(h).isOpenAnchor.value=a.flag)})])]),(u(!0),_(T,null,q(e(c),(a,g)=>(u(),_("div",{class:"item",key:g},[y("span",Q,R(a),1),y("div",Z,[i(P,{class:"switch_",flag:e(p)[e(r)[g]],index:g,onChange:s},null,8,["flag","index"])])]))),128)),ee]))}};var oe=k(te,[["__scopeId","data-v-68bfa3a5"]]);const se={props:{from:String},setup(n){const c=n;function r(){document.body.onmousemove=o=>s(o),document.body.onmouseup=t}function s(o){l.value[c.from].x+=o.movementX,l.value[c.from].y+=o.movementY}function t(){document.body.onmousemove=null,document.body.onmouseup=null,localStorage.setItem("position",JSON.stringify(l.value))}return(o,a)=>e(h).isOpenAnchor.value?(u(),_("div",{key:0,class:"anchor bg",onMousedown:r},null,32)):d("",!0)}};var x=k(se,[["__scopeId","data-v-48624fe9"]]);const ne={class:"index"},re={class:"msg"},ae={setup(n){const c=f(()=>v(()=>import("./index.8fcd7dbb.js"),["assets/index.8fcd7dbb.js","assets/Player.bc21f498.js","assets/request.22c402e5.js","assets/vendor.d4761c69.js"])),r=f(()=>v(()=>import("./lyric.d3c22f15.js"),["assets/lyric.d3c22f15.js","assets/lyric.90b6dae2.css","assets/Player.bc21f498.js","assets/request.22c402e5.js","assets/vendor.d4761c69.js","assets/Animator.194adef1.js"])),s=f(()=>v(()=>import("./net.b61063d8.js"),["assets/net.b61063d8.js","assets/net.a6f7b61a.css","assets/vendor.d4761c69.js","assets/request.22c402e5.js","assets/list1.4e0786ee.js","assets/list1.ddb9c7e7.css","assets/Player.bc21f498.js","assets/Animator.194adef1.js"])),t=f(()=>v(()=>import("./control.0f3e2bff.js"),["assets/control.0f3e2bff.js","assets/control.539d1257.css","assets/Player.bc21f498.js","assets/request.22c402e5.js","assets/vendor.d4761c69.js"])),o=f(()=>v(()=>import("./dou.095546b8.js"),["assets/dou.095546b8.js","assets/dou.be620a1c.css","assets/request.22c402e5.js","assets/vendor.d4761c69.js","assets/Player.bc21f498.js","assets/list1.4e0786ee.js","assets/list1.ddb9c7e7.css","assets/Animator.194adef1.js"])),a=f(()=>v(()=>import("./effect.1ee86425.js"),["assets/effect.1ee86425.js","assets/effect.6cd3eb68.css","assets/Player.bc21f498.js","assets/request.22c402e5.js","assets/vendor.d4761c69.js"])),g=f(()=>v(()=>import("./login.c53e931c.js"),["assets/login.c53e931c.js","assets/login.00e9ef09.css","assets/vendor.d4761c69.js","assets/request.22c402e5.js"])),I=f(()=>v(()=>import("./comments.ef676c7a.js"),["assets/comments.ef676c7a.js","assets/comments.9915b8ea.css","assets/request.22c402e5.js","assets/vendor.d4761c69.js","assets/Player.bc21f498.js"])),D=f(()=>v(()=>import("./index.276da433.js"),["assets/index.276da433.js","assets/index.708a4d29.css","assets/vendor.d4761c69.js"])),L=E(!1),N=["","\u62FC\u547D\u52A0\u8F7D\u4E2D..."];let $=localStorage.getItem("user");h.isLogin.value=!!$;let b=localStorage.getItem("position");b&&(l.value=JSON.parse(b));let w=localStorage.getItem("show");return w&&(p.value=JSON.parse(w)),(ie,O)=>(u(),_("div",ne,[e(p).three?(u(),S(e(c),{key:0,class:"three_"})):d("",!0),e(p).control?(u(),_("div",{key:1,class:"anchor_",style:m({left:e(l).control.x+"px",top:e(l).control.y+"px"})},[i(e(t)),i(x,{from:"control"})],4)):d("",!0),e(p).dou?(u(),_("div",{key:2,class:"anchor_",style:m({left:e(l).dou.x+"px",top:e(l).dou.y+"px"})},[i(e(o)),i(x,{from:"dou"})],4)):d("",!0),e(p).net&&e(h).isLogin.value?(u(),_("div",{key:3,class:"anchor_",style:m({left:e(l).net.x+"px",top:e(l).net.y+"px"})},[i(e(s)),i(x,{from:"net"})],4)):d("",!0),e(p).lyric?(u(),_("div",{key:4,class:"anchor_",style:m({left:e(l).lyric.x+"px",top:e(l).lyric.y+"px"})},[i(e(r)),i(x,{from:"lyric"})],4)):d("",!0),e(p).effect?(u(),_("div",{key:5,class:"anchor_",style:m({left:e(l).effect.x+"px",top:e(l).effect.y+"px"})},[i(e(a)),i(x,{from:"effect"})],4)):d("",!0),e(p).comments?(u(),_("div",{key:6,class:"anchor_",style:m({left:e(l).comments.x+"px",top:e(l).comments.y+"px"})},[i(e(I)),i(x,{from:"comments"})],4)):d("",!0),e(p).piano?(u(),_("div",{key:7,class:"anchor_",style:m({left:e(l).piano.x+"px",top:e(l).piano.y+"px"})},[i(e(D)),i(x,{from:"piano"})],4)):d("",!0),e(h).isLogin.value?d("",!0):(u(),S(e(g),{key:8,class:"login_"})),i(oe,{class:"menu_",onMouseleave:O[0]||(O[0]=()=>L.value=!1),style:m({transform:L.value?"translate(0px,0)":"translate(-200px,0)"})},null,8,["style"]),y("span",{class:"setting iconfont icon-shezhi",onMouseenter:O[1]||(O[1]=()=>L.value=!0)},null,32),y("span",re,R(N[e(h).msg.value]),1)]))}};var ce=k(ae,[["__scopeId","data-v-2c1f6f85"]]);const C=F.create({baseURL:"https://ganqian1.vercel.app/",timeout:18e3,withCredentials:!0});C.interceptors.request.use(n=>(h.msg.value=1,n));C.interceptors.response.use(n=>(h.msg.value=0,n),n=>(h.msg.value=0,n));const le={setup(n){return(c,r)=>(u(),S(ce))}};X(le).mount("#app");export{k as _,C as i,h as s};
