import{a as D,d as i,e as c,f as H,q as L,_ as f,j as Q,g as S,i as b,n as j,h as k}from"./q-d00db345.js";import{h as te}from"./q-d00db345.js";import{u as A,t as I,c as M,a as O,C as z,D as q,R as K,b as N,l as T,d as U,r as W,e as V}from"./q-c77a4652.js";const B=!1,F=!0,G=()=>{const n=A();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const o=D("url");if(!o)throw new Error("Missing Qwik URL Env Data");const a=new URL(o),t=i({href:a.href,pathname:a.pathname,query:Object.fromEntries(a.searchParams.entries()),params:n.params}),l=i({path:I(a)}),e=i(M),s=i({headings:void 0,menu:void 0}),u=i({contents:void 0});return c(O,s),c(z,u),c(q,e),c(K,t),c(N,l),H(L(()=>f(()=>Promise.resolve().then(()=>X),void 0),"s_AaAlzKH0KlQ",[s,u,e,n,t,l])),Q(S,{})},J=async({track:n})=>{const[o,a,t,l,e,s]=b(),{routes:u,menus:_,cacheModules:v}=await f(()=>import("./q-be361dbe.js"),["build/q-be361dbe.js","build/q-d00db345.js","build/q-3173e16a.css"]),w=n(s,"path"),d=new URL(w,e.href),h=d.pathname,g=T(u,_,v,h),E=B?l.response:U(d.href),p=await g;if(p){const[C,y,R]=p,m=y,P=m[m.length-1];e.href=d.href,e.pathname=h,e.params={...C},e.query=Object.fromEntries(d.searchParams.entries()),o.headings=P.headings,o.menu=R,a.contents=j(m);const x=await E,r=W(x,e,m);t.links=r.links,t.meta=r.meta,t.styles=r.styles,t.title=r.title,t.frontmatter=r.frontmatter,F&&V(window,s)}},X=Object.freeze(Object.defineProperty({__proto__:null,s_z1nvHyEppoI:G,s_AaAlzKH0KlQ:J,_hW:k},Symbol.toStringTag,{value:"Module"}));export{te as _hW,J as s_AaAlzKH0KlQ,G as s_z1nvHyEppoI};
