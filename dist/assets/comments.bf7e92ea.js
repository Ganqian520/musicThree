import{k as _}from"./request.64c40d66.js";import{p as c}from"./Player.81075353.js";import{_ as m}from"./index.14b03605.js";import{r as n,w as p,y as o,o as f,c as u,a as v,t as d}from"./vendor.1dfe2109.js";const y={class:"comments scroll_no_bar"},h={setup(x){const t=n(""),e=n(0),s=n(null),l=150;p(()=>{i(c.music.value)});async function i(a){!c.ctx||(await o(),t.value="",await o(),a.name&&a.platform=="net"&&_(a.id).then(async r=>{t.value=r,await o(),e.value=s.value.scrollWidth,s.value.animate([{transform:"translateX(600px)"},{transform:`translateX(${-e.value}px)`}],{duration:e.value/l*1e3,iterations:1/0})}))}return(a,r)=>(f(),u("div",y,[v("span",{class:"longstr",ref_key:"span",ref:s},d(t.value),513)]))}};var b=m(h,[["__scopeId","data-v-8b5e22a0"]]);export{b as default};
