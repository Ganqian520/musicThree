import{_ as i,p as c,i as p}from"./index.4d8995a0.js";import{r as n,z as u,N as o,o as m,c as f,a as v,t as d}from"./vendor.142b7855.js";const h={class:"comments scroll_no_bar"},x={setup(y){const t=n(""),e=n(0),s=n(null),l=150;u(()=>{_(c.music.value)});async function _(a){!c.ctx||(await o(),t.value="",await o(),a.name&&a.platform=="net"&&p(a.id).then(async r=>{t.value=r,await o(),e.value=s.value.scrollWidth,s.value.animate([{transform:"translateX(600px)"},{transform:`translateX(${-e.value}px)`}],{duration:e.value/l*1e3,iterations:1/0})}))}return(a,r)=>(m(),f("div",h,[v("span",{class:"longstr",ref_key:"span",ref:s},d(t.value),513)]))}};var k=i(x,[["__scopeId","data-v-8b5e22a0"]]);export{k as default};