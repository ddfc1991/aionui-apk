import{r as a,R as s}from"./vendor-react-E_0OdQKa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"bbada2a9268060d2b41ddf1d885a9b27ecd2103d"};var n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="188094f0-de14-4b66-a02a-f402de6c6fe2",e._sentryDebugIdIdentifier="sentry-dbid-188094f0-de14-4b66-a02a-f402de6c6fe2")}catch{}})();/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */const d=32,m=30,D=({children:e})=>{const n=a.useRef(null),i=a.useRef(null),c=a.useRef(null),[o,u]=a.useState(!1),l=a.useRef(0),p=a.useCallback(()=>{const t=n.current,r=i.current;if(!t||!r)return;const f=r.offsetWidth,b=t.clientWidth;f<=b||(l.current=f+d,u(!0))},[]),E=a.useCallback(()=>{u(!1)},[]);return a.useLayoutEffect(()=>{const t=c.current;if(t)if(o){const r=l.current/m;t.style.setProperty("--pill-marquee-scroll",`-${l.current}px`),t.style.animationDuration=`${r}s`,t.offsetWidth,t.classList.add("pill-marquee-track")}else t.classList.remove("pill-marquee-track"),t.style.removeProperty("--pill-marquee-scroll"),t.style.animationDuration=""},[o]),s.createElement("span",{ref:n,className:"inline-block overflow-hidden whitespace-nowrap leading-none min-w-0 relative",onMouseEnter:p,onMouseLeave:E},s.createElement("span",{ref:i,className:"invisible absolute whitespace-nowrap leading-none pointer-events-none","aria-hidden":"true"},e),s.createElement("span",{className:o?"leading-none invisible":"leading-none"},e),s.createElement("span",{ref:c,className:o?"whitespace-nowrap leading-none absolute left-0 top-0":"invisible whitespace-nowrap leading-none absolute left-0 top-0"},e,s.createElement("span",{className:"inline-block",style:{width:d}}),e))};/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */const w="autoEdit",_="yolo",g="yoloNoSandbox";/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */function h(e){return e?.sourceDetail==="cc-switch"?"cc-switch":""}function v(e,n){return n?e?`${e} · ${n}`:n:e}export{_ as C,D as M,w as a,g as b,v as f,h as g};
