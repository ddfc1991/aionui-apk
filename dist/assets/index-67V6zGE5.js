const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CeeRONfn.js","./vendor-highlight-BHHr01k2.js","./vendor-arco-yxWk2EfN.js","./vendor-react-E_0OdQKa.js","./vendor-editor-CaUBtigl.js","./vendor-arco-Bfxep3p_.css","./index-C072J0ey.css"])))=>i.map(i=>d[i]);
import{k as j}from"./vendor-katex-DleuJCPa.js";import{$ as U,B as $,I as C,a0 as b,u as B,a1 as W,a2 as K,a3 as X,e as H}from"./index-CeeRONfn.js";import{R as t,r as p,O as J,P as G,Q as Z,u as Q,a as Y}from"./vendor-react-E_0OdQKa.js";import{j as q,c as ee}from"./mermaid-VLURNSYL-CXQwhywi.js";import{aL as te,aM as oe}from"./MermaidBlock-CIIT6QrQ.js";import{M as N}from"./vendor-arco-yxWk2EfN.js";import{h as re,v as ne,a as ae,_ as se}from"./vendor-highlight-BHHr01k2.js";import{r as le,a as V,M as ie,b as ce,c as de,d as ue}from"./vendor-markdown-DSbmUdQm.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"bbada2a9268060d2b41ddf1d885a9b27ecd2103d"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="e5987e86-b3b9-4080-a92c-175fd3ab1904",e._sentryDebugIdIdentifier="sentry-dbid-e5987e86-b3b9-4080-a92c-175fd3ab1904")}catch{}})();/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */const me=e=>{const o=t.createContext({value:e,setValue(){console.warn("")}}),i=()=>t.useContext(o).value,a=()=>t.useContext(o).setValue,d=e;return[i,c=>{const[l,r]=p.useState(c.value||JSON.parse(JSON.stringify(d))),u=p.useRef(!0);return p.useEffect(()=>{u.current||(r(c.value),u.current=!1)},[c.value]),t.createElement(o.Provider,{value:{value:l,setValue:r}},c.children)},a]},pe=C(J),[he,fe,ge]=me({root:""}),M=({src:e,alt:o,className:i})=>{const[a,d]=p.useState(!0),[s,c]=p.useState(e),{root:l}=he(),r=p.useMemo(()=>!l||e.startsWith("http")||e.startsWith("data:")||e.startsWith("/")||e.startsWith("file:")||e.startsWith("\\")||/^[A-Za-z]:/.test(e)?e:q(l,e),[e,l]);return p.useEffect(()=>{d(!0),U.getImageBase64.invoke({path:r}).then(u=>{c(u),d(!1)}).catch(u=>{console.error("[LocalImageView] Failed to load image:",{path:r,error:u}),d(!1)})},[r]),a?t.createElement("span",{style:{display:"flex",alignItems:"center",gap:"4px"}},t.createElement(pe,{className:"loading",style:{display:"flex"},theme:"outline",size:"14",fill:$.primary,strokeWidth:2}),t.createElement("span",null,o)):t.createElement("img",{src:s,alt:o,className:i})};M.Provider=fe;M.useUpdateLocalImage=ge;/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */const T=e=>{const o=String(e).replace(/\n$/,"");try{return JSON.stringify(JSON.parse(o),(i,a)=>a,2)}catch{return o}},ye=(e,o)=>e.startsWith("+")&&!e.startsWith("+++")?{backgroundColor:o?b.additionBgDark:b.additionBgLight}:e.startsWith("-")&&!e.startsWith("---")?{backgroundColor:o?b.deletionBgDark:b.deletionBgLight}:e.startsWith("@@")?{backgroundColor:o?b.hunkBgDark:b.hunkBgLight}:{};/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */const xe=C(G),be=C(Q),z=C(Z),E=3,we=200,w=new Map;function ve(e,o){const i=o.slice(0,E).join(`
`),a=`${e}:${o.length}:${i}`;if(!w.has(a)&&w.size>=we){const d=w.keys().next().value;d!==void 0&&w.delete(d)}return a}function Se(e){const{t:o}=B(),[,i]=p.useState(0),[a,d]=p.useState(()=>document.documentElement.getAttribute("data-theme")||"light");t.useEffect(()=>{const h=()=>{const L=document.documentElement.getAttribute("data-theme")||"light";d(L)},S=new MutationObserver(h);return S.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}),()=>S.disconnect()},[]);const{children:s,className:c,node:l,hiddenCodeCopyButton:r,codeStyle:u,...g}=e,n=/language-(\w+)/.exec(c||"")?.[1]||"text",f=a==="dark"?ne:ae;if(n==="latex"||n==="math"||n==="tex"){const h=String(s).replace(/\n$/,"");if(!/\\(documentclass|begin\{document\}|usepackage)\b/.test(h))try{const L=j.renderToString(h,{displayMode:!0,throwOnError:!1});return t.createElement("div",{className:"katex-display",dangerouslySetInnerHTML:{__html:L}})}catch{}}if(n==="mermaid")return t.createElement(te,{code:T(s),style:e.codeStyle});if(!String(s).includes(`
`))return t.createElement("code",{...g,className:c,style:{fontWeight:"bold"}},s);const x=n==="diff",D=T(s),k=D.split(`
`),O=x?k:[],I=k.length,_=I>E,R=ve(n,k),v=w.get(R)??!1,P=h=>{w.set(R,h),i(S=>S+1)},A=v||!_?D:k.slice(0,E).join(`
`),F={margin:"0",borderRadius:"0",border:"none",background:"transparent",color:"var(--text-primary)",overflowX:"auto",maxWidth:"100%"};return t.createElement("div",{style:{width:"100%",minWidth:0,maxWidth:"100%",...e.codeStyle}},t.createElement("div",{style:{border:"1px solid var(--bg-3)",borderRadius:"0.3rem",overflow:"hidden",overflowX:"auto"}},t.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"var(--bg-2)",borderTopLeftRadius:"0.3rem",borderTopRightRadius:"0.3rem",padding:"6px 10px",borderBottom:"1px solid var(--bg-3)"}},t.createElement("span",{style:{textDecoration:"none",color:"var(--text-secondary)",fontSize:"12px",lineHeight:"20px"}},"<"+n.toLocaleLowerCase()+">"),t.createElement("div",{style:{display:"flex",alignItems:"center",gap:"8px"}},t.createElement(xe,{theme:"outline",size:"18",style:{cursor:"pointer"},fill:"var(--text-secondary)",onClick:()=>{oe(T(s)).then(()=>{N.success(o("common.copySuccess"))}).catch(()=>{N.error(o("common.copyFailed"))})}}),_&&v&&t.createElement(z,{theme:"outline",size:"20",style:{cursor:"pointer"},fill:"var(--text-secondary)",onMouseDown:h=>{h.button===0&&(h.preventDefault(),P(!1))},title:o("common.collapse","Collapse")}))),t.createElement(re,{children:A,language:n,style:f,PreTag:"div",wrapLines:x,lineProps:x?h=>({style:{display:"block",...ye(O[h-1]||"",a==="dark")}}):void 0,customStyle:F,codeTagProps:{style:{color:"var(--text-primary)"}}}),_&&t.createElement("div",{style:{display:"flex",justifyContent:v?"flex-end":"center",alignItems:"center",backgroundColor:"var(--bg-2)",borderBottomLeftRadius:"0.3rem",borderBottomRightRadius:"0.3rem",padding:"4px 10px",borderTop:"1px solid var(--bg-3)",cursor:"pointer"},onMouseDown:h=>{h.button===0&&(h.preventDefault(),P(!v))}},v?t.createElement(z,{theme:"outline",size:"20",fill:"var(--text-secondary)",title:o("common.collapse","Collapse")}):t.createElement("span",{style:{color:"var(--text-secondary)",fontSize:"12px",lineHeight:"20px"}},o("common.viewMoreLines",{count:I-E})," ",t.createElement(be,{theme:"outline",size:"14",fill:"var(--text-secondary)"})))))}const ke=(e="light",o,i)=>{const a=document.createElement("style"),d=o?Object.entries(o).map(([s,c])=>`${s}: ${c};`).join(`
    `):"";return a.innerHTML=`
  /* Shadow DOM CSS variable definitions */
  :host {
    ${d}
  }

  * {
    line-height:26px;
    font-size:16px;
    color: inherit;
  }

  .markdown-shadow-body {
    word-break: break-word;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    max-width: 100%;
  }
  .markdown-shadow-body>p:first-child
  {
    margin-top:0px;
  }
  h1,h2,h3,h4,h5,h6{
    margin-block-start:0px;
    margin-block-end:0px;
  }
  .markdown-shadow-body p {
    margin-block-start: 10px;
    margin-block-end: 10px;
  }
  a{
    color:${K.theme.Color.PrimaryColor};
    text-decoration: none;
    cursor: pointer;
    word-break: break-all;
    overflow-wrap: anywhere;
  }
  h1{
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
  }
  h2,h3,h4,h5,h6{
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 8px;
  }
  code span{
    font-size:13px;
    line-height:20px;
  }

  .markdown-shadow-body>p:last-child{
    margin-bottom:0px;
  }
  ol, ul {
    padding-inline-start:20px;
  }
  pre {
    max-width: 100%;
    overflow-x: auto;
    margin-block-start: 8px;
    margin-block-end: 8px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
   /* Table border styles */
  table {
    border-collapse: collapse;
    th{
      padding: 8px;
      border: 1px solid var(--bg-3);
      background-color: var(--bg-1);
      font-weight: bold;
    }
    td{
        padding: 8px;
        border: 1px solid var(--bg-3);
        min-width: 120px;
    }
  }
  /* Inline code should wrap on small screens to avoid horizontal overflow */
  .markdown-shadow-body code {
    word-break: break-word;
    overflow-wrap: anywhere;
    max-width: 100%;
  }
  /* Allow KaTeX to use its own line-height for proper fraction/superscript rendering */
  .katex,
  .katex * {
    line-height: normal;
  }

  /* Display math: only scroll horizontally when formula exceeds container width */
  .katex-display {
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0.5em 0;
  }

  .loading {
    animation: loading 1s linear infinite;
  }


  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* User Custom CSS (injected into Shadow DOM) */
  ${i||""}
  `,a};let y=null;const Ee=()=>{if(y)return y;try{const e=[...document.styleSheets].find(i=>i.href?.includes("katex")||i.ownerNode?.dataset?.katex);if(e){const i=[...e.cssRules].map(a=>a.cssText).join(`
`);return y=new CSSStyleSheet,y.replaceSync(i),y}const o=[...document.styleSheets];for(const i of o)try{const a=[...i.cssRules];if(a.some(s=>s.cssText.includes(".katex"))){const s=a.map(c=>c.cssText).join(`
`);return y=new CSSStyleSheet,y.replaceSync(s),y}}catch{continue}}catch(e){console.warn("Failed to create KaTeX stylesheet for Shadow DOM:",e)}return null},Ce=({children:e})=>{const[o,i]=p.useState(null),a=t.useRef(null),[d,s]=p.useState("");t.useEffect(()=>{se(async()=>{const{ConfigStorage:r}=await import("./index-CeeRONfn.js").then(u=>u.bN);return{ConfigStorage:r}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url).then(({ConfigStorage:r})=>{r.get("customCss").then(u=>{if(u){const g=W(u);s(g)}else s("")}).catch(u=>{console.error("Failed to load custom CSS:",u)})});const l=r=>{if(r.detail?.customCss!==void 0){const u=r.detail.customCss||"",g=W(u);s(g)}};return window.addEventListener("custom-css-updated",l),()=>{window.removeEventListener("custom-css-updated",l)}},[]);const c=t.useCallback(l=>{const r=getComputedStyle(document.documentElement),u=document.documentElement.getAttribute("data-theme")||"light",g={"--bg-1":r.getPropertyValue("--bg-1"),"--bg-2":r.getPropertyValue("--bg-2"),"--bg-3":r.getPropertyValue("--bg-3"),"--color-text-1":r.getPropertyValue("--color-text-1"),"--color-text-2":r.getPropertyValue("--color-text-2"),"--color-text-3":r.getPropertyValue("--color-text-3"),"--text-primary":r.getPropertyValue("--text-primary"),"--text-secondary":r.getPropertyValue("--text-secondary")};a.current&&a.current.remove();const m=ke(u,g,d);a.current=m,l.appendChild(m);const n=Ee();n&&!l.adoptedStyleSheets.includes(n)&&(l.adoptedStyleSheets=[...l.adoptedStyleSheets,n])},[d]);return t.useEffect(()=>{o&&c(o)},[o,d,c]),t.useEffect(()=>{if(!o)return;const l=new MutationObserver(()=>{c(o)});return l.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme","class"]}),()=>l.disconnect()},[o,c]),t.createElement("div",{ref:l=>{if(!l||l.__init__shadow)return;l.__init__shadow=!0;const r=l.attachShadow({mode:"open"});c(r),i(r)},className:"markdown-shadow",style:{width:"100%",flex:"1 1 auto",minWidth:0}},o&&Y.createPortal(e,o))};/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */const _e=[ce,de,ue],Le=e=>!(e.startsWith("http://")||e.startsWith("https://")||e.startsWith("data:")),Te=t.memo(({hiddenCodeCopyButton:e,codeStyle:o,className:i,onRef:a,allowHtml:d,children:s})=>{const{t:c}=B(),l=p.useMemo(()=>{if(typeof s=="string"){let m=s.replace(/file:\/\//g,"");return m=ee(m),m}return s},[s]),r=p.useCallback(m=>{m.preventDefault(),m.stopPropagation();const n=m.currentTarget.href;n&&X(n).catch(f=>{console.error(c("messages.openLinkFailed"),f)})},[c]),u=p.useMemo(()=>({span:({node:m,className:n,children:f,...x})=>t.createElement("span",{...x,className:n},f),code:m=>t.createElement(Se,{...m,codeStyle:o,hiddenCodeCopyButton:e}),a:({node:m,...n})=>t.createElement("a",{...n,target:"_blank",rel:"noreferrer",onClick:r}),table:({node:m,...n})=>t.createElement("div",{style:{overflowX:"auto",maxWidth:"100%"}},t.createElement("table",{...n,style:{...n.style,borderCollapse:"collapse",border:"1px solid var(--bg-3)",minWidth:"100%"}})),td:({node:m,...n})=>t.createElement("td",{...n,style:{...n.style,padding:"8px",border:"1px solid var(--bg-3)",minWidth:"120px"}}),img:({node:m,...n})=>{const f=n;if(Le(f.src||"")){const x=decodeURIComponent(f.src||"");return t.createElement(M,{src:x,alt:f.alt||"",className:f.className})}return t.createElement("img",{...f})}}),[o,e,r]),g=p.useMemo(()=>d?[le,V]:[V],[d]);return t.createElement("div",{className:H("relative w-full",i)},t.createElement(Ce,null,t.createElement("div",{ref:a,className:"markdown-shadow-body"},t.createElement(ie,{remarkPlugins:_e,rehypePlugins:g,components:u},l))))});Te.displayName="MarkdownView";export{M as L,Te as M,me as c};
