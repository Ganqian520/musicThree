import{p}from"./Player.d6745c92.js";import{b as w}from"./request.d90be21b.js";import{A as S}from"./Animator.194adef1.js";import{_ as k}from"./index.f6ca2c17.js";import{r as B,k as A,w as Y,o as E,c as L,a as N}from"./vendor.cf001842.js";const T={class:"lyric"},G={setup(I){const u=B(null),m=400,r=200,v=r/2;let d=r/2,s=r/6,c,t,o,a=[],i=0,l=0;A(()=>{h()}),Y(()=>{x(p.music.value)});function x(e){e.name&&(i=0,l=0,d=v,a=[],f(),e.platform=="net"&&w(e.id).then(n=>{a=n,f(),p.updateNetCb=g}))}function g(){let e=p.audio.currentTime;for(let n in a)if(e<a[n].second){if(l=n-1<0?0:n-1,l!=i){let y=(i-l)*s,b=v-i*s;i=l;let _=new S(300);_.updateCb=C=>{d=b+y*(C/300),f()},_.endedCb=()=>{},_.start()}break}}function h(){c=u.value,t=c.getContext("2d"),o=t.createLinearGradient(0,0,0,r),o.addColorStop("0","rgba(0,255,255,0)"),o.addColorStop("0.5","rgba(0,255,255,1)"),o.addColorStop("1.0","rgba(0,255,255,0)")}function f(){c.width=m,c.height=r,t.fillStyle=o,t.font="17px ''",t.textBaseline="middle",t.textAlign="center";for(let e=0;e<a.length;e++)t.fillText(a[e].content,m/2,s*e+d)}return(e,n)=>(E(),L("div",T,[N("canvas",{ref_key:"canvas_",ref:u,id:"canvas"},null,512)]))}};var D=k(G,[["__scopeId","data-v-5ea1cd2e"]]);export{D as default};
