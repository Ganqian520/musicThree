import{_ as D,f as d,p as t}from"./index.4d8995a0.js";import{l as h}from"./list1.20055c67.js";import{r as i,m as k,o as r,c,a as l,t as v,F as x,d as y,g as b,b as N,u as p}from"./vendor.142b7855.js";import"./Animator.194adef1.js";const B={class:"dou"},C={class:"head"},L={class:"span"},M={key:0,class:"pop scroll_no_bar"},S=["onClick"],V={setup(F){let a=[];i(0);const n=i("\u6296\u97F3"),o=i(!1),u=["\u6296\u97F3","\u65E0\u4EBA\u58F0","\u6709\u4EBA\u58F0"];k(()=>{d().then(e=>{a=e,t.listDou.value=e})});function f(){localStorage.setItem("douList",""),d().then(e=>{a=e,n.value==u[0]&&(t.listDou.value=e)})}function m(e){n.value=u[e],t.listDou.value=e==0?a:a.filter(s=>s.tag==e),t.indexDou.value=0,o.value=!1}return(e,s)=>(r(),c("div",B,[l("div",C,[l("div",{class:"list_name",onMouseenter:s[0]||(s[0]=()=>o.value=!0),onMouseleave:s[1]||(s[1]=()=>o.value=!1),onDblclick:f},[l("span",L,v(n.value),1),o.value?(r(),c("div",M,[(r(),c(x,null,y(u,(g,_)=>l("div",{class:"name black_text hover",key:_,onClick:I=>m(_)},v(g),9,S)),64))])):b("",!0)],32)]),N(h,{list:p(t).listDou,index_:p(t).indexDou},null,8,["list","index_"])]))}};var q=D(V,[["__scopeId","data-v-2c740cd7"]]);export{q as default};
