import{r as h,o as u,c as g,a as f,n as L,b as i,u as a,F as q,d as X,p as B,e as J,t as R,f as Y,g as F,h as O,i as _,j as I,w as m,k as M,l as j}from"./vendor.07b563a4.js";const z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}};z();const U="modulepreload",P={},K="./",d=function(n,r){return!r||r.length===0?n():Promise.all(r.map(t=>{if(t=`${K}${t}`,t in P)return;P[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const l=document.createElement("link");if(l.rel=e?"stylesheet":U,e||(l.as="script",l.crossOrigin=""),l.href=t,document.head.appendChild(l),e)return new Promise((c,y)=>{l.addEventListener("load",c),l.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>n())};var S=(s,n)=>{const r=s.__vccOpts||s;for(const[t,e]of n)r[t]=e;return r};const W={props:{flag:Boolean,index:Number},emits:["change"],setup(s,{emit:n}){const r=s,t=h(r.flag);function e(){t.value=!t.value;let o={flag:t.value,index:r.index};n("change",o)}return(o,l)=>(u(),g("div",{class:"switch",onClick:e,style:L({backgroundColor:t.value?"rgba(0,255,255,0.6)":"transparent"})},[f("div",{class:"circle",style:L({transform:t.value?"translateX(15px)":"translateX(1px)"})},null,4)],4))}};var C=S(W,[["__scopeId","data-v-dcb7cb72"]]);const p={isLogin:h(!1),msg:h(0),isOpenAnchor:h(!1)},E=h({effect:!0,comments:!1,piano:!0,dou:!0,net:!0,lyric:!1,control:!0,three:!0}),x=h({comments:{x:470,y:323},control:{x:874,y:595},dou:{x:1094,y:35},effect:{x:1254,y:491},lyric:{x:584,y:35},net:{x:100,y:35},piano:{x:36,y:425}});const V=s=>(B("data-v-68bfa3a5"),s=s(),J(),s),G={class:"menu"},H={class:"item"},Q=V(()=>f("span",{class:"tip"},"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",-1)),Z={class:"right"},ee={class:"tip"},te={class:"right"},oe=V(()=>f("span",{class:"msg"}," \u5982\u6709\u95EE\u9898\u6B22\u8FCE\u53D1\u9001\u5230\u90AE\u7BB1\uFF1A2282227679@qq.com ",-1)),se={setup(s){let n=["\u94A2\u7434","\u73AF\u7ED5\u97F3\u6548","3D\u80CC\u666F","\u6296\u97F3\u5217\u8868","\u7F51\u6613\u4E91\u5217\u8868","\u6B4C\u8BCD","\u8BC4\u8BBA","\u64AD\u653E\u63A7\u5236"],r=["piano","effect","three","dou","net","lyric","comments","control"];function t(e){E.value[r[e.index]]=e.flag,localStorage.setItem("show",JSON.stringify(Y(E.value)))}return(e,o)=>(u(),g("div",G,[f("div",H,[Q,f("div",Z,[i(C,{class:"switch_",flag:!1,onChange:o[0]||(o[0]=l=>a(p).isOpenAnchor.value=l.flag)})])]),(u(!0),g(q,null,X(a(n),(l,c)=>(u(),g("div",{class:"item",key:c},[f("span",ee,R(l),1),f("div",te,[i(C,{class:"switch_",flag:a(E)[a(r)[c]],index:c,onChange:t},null,8,["flag","index"])])]))),128)),oe]))}};var ne=S(se,[["__scopeId","data-v-68bfa3a5"]]);const re={props:{from:String},setup(s){const n=s;let r,t;function e(c){r=c.touches[0].clientX,t=c.touches[0].clientY,document.body.ontouchmove=y=>o(y),document.body.ontouchend=l}function o(c){console.log(c),x.value[n.from].x+=c.touches[0].clientX-r,x.value[n.from].y+=c.touches[0].clientY-t,r=c.touches[0].clientX,t=c.touches[0].clientY}function l(){document.body.ontouchmove=null,document.body.ontouchend=null,localStorage.setItem("position",JSON.stringify(x.value))}return(c,y)=>a(E)[n.from]?(u(),g("div",{key:0,class:"anchor",style:L({left:a(x)[n.from].x+"px",top:a(x)[n.from].y+"px"})},[F(c.$slots,"default",{class:"content"},void 0,!0),a(p).isOpenAnchor.value?(u(),g("div",{key:0,class:"mask bg",onTouchstart:e},null,32)):O("",!0)],4)):O("",!0)}};var v=S(re,[["__scopeId","data-v-8bff6b64"]]);const ae={class:"index"},le={class:"msg"},ce={setup(s){const n=_(()=>d(()=>import("./index.8a7a19dc.js"),["assets/index.8a7a19dc.js","assets/Player.634ddd00.js","assets/request.c1c7067a.js","assets/vendor.07b563a4.js"])),r=_(()=>d(()=>import("./lyric.0722a7ef.js"),["assets/lyric.0722a7ef.js","assets/lyric.90b6dae2.css","assets/Player.634ddd00.js","assets/request.c1c7067a.js","assets/vendor.07b563a4.js","assets/Animator.194adef1.js"])),t=_(()=>d(()=>import("./net.9606776d.js"),["assets/net.9606776d.js","assets/net.a6f7b61a.css","assets/vendor.07b563a4.js","assets/request.c1c7067a.js","assets/list1.93dbb045.js","assets/list1.ddb9c7e7.css","assets/Player.634ddd00.js","assets/Animator.194adef1.js"])),e=_(()=>d(()=>import("./control.6f7ded65.js"),["assets/control.6f7ded65.js","assets/control.539d1257.css","assets/Player.634ddd00.js","assets/request.c1c7067a.js","assets/vendor.07b563a4.js"])),o=_(()=>d(()=>import("./dou.1a669c79.js"),["assets/dou.1a669c79.js","assets/dou.be620a1c.css","assets/request.c1c7067a.js","assets/vendor.07b563a4.js","assets/Player.634ddd00.js","assets/list1.93dbb045.js","assets/list1.ddb9c7e7.css","assets/Animator.194adef1.js"])),l=_(()=>d(()=>import("./effect.d6a67ca6.js"),["assets/effect.d6a67ca6.js","assets/effect.6cd3eb68.css","assets/Player.634ddd00.js","assets/request.c1c7067a.js","assets/vendor.07b563a4.js"])),c=_(()=>d(()=>import("./login.2adfd870.js"),["assets/login.2adfd870.js","assets/login.00e9ef09.css","assets/vendor.07b563a4.js","assets/request.c1c7067a.js"])),y=_(()=>d(()=>import("./comments.a2899758.js"),["assets/comments.a2899758.js","assets/comments.9915b8ea.css","assets/request.c1c7067a.js","assets/vendor.07b563a4.js","assets/Player.634ddd00.js"])),D=_(()=>d(()=>import("./index.7729e59c.js"),["assets/index.7729e59c.js","assets/index.708a4d29.css","assets/vendor.07b563a4.js"])),w=h(!1),N=["","\u62FC\u547D\u52A0\u8F7D\u4E2D..."];let T=localStorage.getItem("user");p.isLogin.value=!!T;let k=localStorage.getItem("position");k&&(x.value=JSON.parse(k));let A=localStorage.getItem("show");return A&&(E.value=JSON.parse(A)),(_e,b)=>(u(),g("div",ae,[a(E).three?(u(),I(a(n),{key:0,class:"three_"})):O("",!0),i(v,{from:"control"},{default:m(()=>[i(a(e))]),_:1}),i(v,{from:"dou"},{default:m(()=>[i(a(o))]),_:1}),a(p).isLogin.value?(u(),I(v,{key:1,from:"net"},{default:m(()=>[i(a(t))]),_:1})):O("",!0),i(v,{from:"lyric"},{default:m(()=>[i(a(r))]),_:1}),i(v,{from:"effect"},{default:m(()=>[i(a(l))]),_:1}),i(v,{from:"comments"},{default:m(()=>[i(a(y))]),_:1}),i(v,{from:"piano"},{default:m(()=>[i(a(D))]),_:1}),a(p).isLogin.value?O("",!0):(u(),I(a(c),{key:2,class:"login_"})),i(ne,{class:"menu_",onMouseleave:b[0]||(b[0]=()=>w.value=!1),style:L({transform:w.value?"translate(0px,0)":"translate(-200px,0)"})},null,8,["style"]),f("span",{class:"setting iconfont icon-shezhi",onMouseenter:b[1]||(b[1]=()=>w.value=!0)},null,32),f("span",le,R(N[a(p).msg.value]),1)]))}};var ie=S(ce,[["__scopeId","data-v-7b90830c"]]);const $=M.create({baseURL:"https://ganqian1.vercel.app/",timeout:18e3,withCredentials:!0});$.interceptors.request.use(s=>(p.msg.value=1,s));$.interceptors.response.use(s=>(p.msg.value=0,s),s=>(p.msg.value=0,s));const ue={setup(s){return(n,r)=>(u(),I(ie))}};j(ue).mount("#app");export{S as _,$ as i,p as s};