import{r as t,R as n,l as ie,s as se,t as ce,f as le}from"./vendor-react-E_0OdQKa.js";import{I as L}from"./index-CeeRONfn.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};i.SENTRY_RELEASE={id:"bbada2a9268060d2b41ddf1d885a9b27ecd2103d"};var O=new i.Error().stack;O&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[O]="710c76de-9aa1-47bb-b1ca-658b863848f1",i._sentryDebugIdIdentifier="sentry-dbid-710c76de-9aa1-47bb-b1ca-658b863848f1")}catch{}})();/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */const de=L(ie),ue=L(se),be=L(le),fe=L(ce),k=.75,R=1.5,pe=({url:i,id:O,showNavBar:v=!1,partition:F,className:J,style:K,onDidFinishLoad:V,onDidFailLoad:B})=>{const Y=t.useRef(null),_=t.useRef(null),c=t.useRef(null),S=t.useRef(!1),[o,w]=t.useState(i),[C,f]=t.useState(i),[A,g]=t.useState(!0),[M,m]=t.useState(1),[D,Z]=t.useState(!1),h=t.useRef([]),p=t.useRef([]),[P,x]=t.useState(!1),[$,y]=t.useState(!1),E=t.useCallback(e=>{try{const r=new URL(e),l=r.hostname.toLowerCase(),d=l==="127.0.0.1"||l==="localhost",u=["18791","18888","19000"].includes(r.port);return d&&u}catch{return!1}},[]),b=E(o);t.useEffect(()=>{h.current=[],p.current=[],x(!1),y(!1),w(i),f(i),g(!0),m(1),Z(!1),S.current=E(i)},[i]),t.useEffect(()=>{const e=c.current;if(!(!D||!e?.setZoomFactor))try{e.setZoomFactor(b?M:1)}catch{}},[b,M,D]);const I=t.useCallback(e=>{const r=c.current;!r||!e||e!==o&&(o&&h.current.push(o),p.current=[],w(e),f(e),x(h.current.length>0),y(!1),r.src=e)},[o]);t.useEffect(()=>{const e=c.current;if(!e)return;const r=()=>g(!0),l=()=>{g(!1)},d=()=>{e.executeJavaScript(`
        (function() {
          if (window.__webviewHostInjected) return;
          window.__webviewHostInjected = true;

          document.addEventListener('click', function(e) {
            let target = e.target;
            while (target && target.tagName !== 'A') {
              target = target.parentElement;
            }
            if (target && target.tagName === 'A') {
              const href = target.href;
              if (href && /^https?:/i.test(href)) {
                e.preventDefault();
                e.stopPropagation();
                window.postMessage({ type: '__WEBVIEW_HOST_NAVIGATE__', url: href }, '*');
              }
            }
          }, true);

          const originalOpen = window.open;
          window.open = function(url) {
            if (url && /^https?:/i.test(url)) {
              window.postMessage({ type: '__WEBVIEW_HOST_NAVIGATE__', url: url }, '*');
              return null;
            }
            return originalOpen.apply(this, arguments);
          };

          document.addEventListener('submit', function(e) {
            const form = e.target;
            if (form && form.action && /^https?:/i.test(form.action)) {
              e.preventDefault();
              window.postMessage({ type: '__WEBVIEW_HOST_NAVIGATE__', url: form.action }, '*');
            }
          }, true);
        })();
        true;
      `).catch(()=>{})},u=s=>{try{if(s.message.includes("__WEBVIEW_HOST_NAVIGATE__")){const a=s.message.match(/"url":"([^"]+)"/);a&&a[1]&&I(a[1]);return}if(s.message.includes("__AIONUI_WEBVIEW_ZOOM__")){const a=s.message.match(/"deltaY":(-?\d+(\.\d+)?)/);if(a&&a[1]){const N=Number(a[1])<0?.08:-.08;m(T=>{const ae=Number((T+N).toFixed(2));return Math.max(k,Math.min(R,ae))})}return}s.message.includes("__AIONUI_WEBVIEW_ZOOM_RESET__")&&m(1)}catch{}},W=s=>{const a=s.url;a&&a!==o&&(w(a),f(a))},U=()=>{Z(!0),d(),e.executeJavaScript(`
        (function() {
          let viewport = document.querySelector('meta[name="viewport"]');
          if (!viewport) {
            viewport = document.createElement('meta');
            viewport.name = 'viewport';
            viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
            document.head.appendChild(viewport);
          }
        })();
        true;
      `).catch(()=>{}),e.executeJavaScript(`
        window.addEventListener('message', function(e) {
          if (e.data && e.data.type === '__WEBVIEW_HOST_NAVIGATE__') {
            console.log('__WEBVIEW_HOST_NAVIGATE__', JSON.stringify(e.data));
          }
        });
        true;
      `).catch(()=>{}),E(o)&&e.executeJavaScript(`
          (function() {
            if (window.__aionuiZoomInjected) return true;
            window.__aionuiZoomInjected = true;
            window.addEventListener('wheel', function(e) {
              if (!(e.ctrlKey || e.metaKey)) return;
              e.preventDefault();
              console.log('__AIONUI_WEBVIEW_ZOOM__', JSON.stringify({ deltaY: e.deltaY }));
            }, { passive: false, capture: true });
            window.addEventListener('keydown', function(e) {
              if (!(e.ctrlKey || e.metaKey)) return;
              if (e.key === '0') {
                e.preventDefault();
                console.log('__AIONUI_WEBVIEW_ZOOM_RESET__');
              }
            }, { capture: true });
            return true;
          })();
          true;
        `).catch(()=>{}),E(o)&&S.current&&window.setTimeout(()=>{const s=c.current,a=_.current;!s||!a||s.executeJavaScript(`
            (() => {
              try {
                const stage = document.getElementById('main-stage');
                const body = document.body;
                const doc = document.documentElement;
                const width = Math.max(stage?.scrollWidth || 0, body?.scrollWidth || 0, doc?.scrollWidth || 0, window.innerWidth || 0);
                return { width };
              } catch (e) {
                return { width: window.innerWidth || 0 };
              }
            })();
          `).then(j=>{const N=Number(j?.width||0);if(!N)return;const T=Number((a.clientWidth/N).toFixed(2));m(Math.max(k,Math.min(R,T))),S.current=!1}).catch(()=>{})},120)},z=()=>{g(!1),V?.()},G=s=>{g(!1),B?.(s.errorCode,s.errorDescription)};return e.addEventListener("did-start-loading",r),e.addEventListener("did-stop-loading",l),e.addEventListener("dom-ready",U),e.addEventListener("did-navigate",W),e.addEventListener("did-navigate-in-page",W),e.addEventListener("console-message",u),e.addEventListener("did-finish-load",z),e.addEventListener("did-fail-load",G),()=>{e.removeEventListener("did-start-loading",r),e.removeEventListener("did-stop-loading",l),e.removeEventListener("dom-ready",U),e.removeEventListener("did-navigate",W),e.removeEventListener("did-navigate-in-page",W),e.removeEventListener("console-message",u),e.removeEventListener("did-finish-load",z),e.removeEventListener("did-fail-load",G)}},[I,o,V,B,E]),t.useEffect(()=>{const e=_.current,r=c.current;if(!e||!r)return;const l=()=>{const u=e.getBoundingClientRect();u.width>0&&u.height>0&&(r.style.width=`${u.width}px`,r.style.height=`${u.height}px`)};l();const d=new ResizeObserver(l);return d.observe(e),()=>d.disconnect()},[]);const q=t.useCallback(()=>{b&&m(1)},[b]),X=t.useCallback(()=>{const e=c.current,r=_.current;!b||!e||!r||e.executeJavaScript(`
      (() => {
        try {
          const stage = document.getElementById('main-stage');
          const body = document.body;
          const doc = document.documentElement;
          const width = Math.max(stage?.scrollWidth || 0, body?.scrollWidth || 0, doc?.scrollWidth || 0, window.innerWidth || 0);
          return { width };
        } catch (e) {
          return { width: window.innerWidth || 0 };
        }
      })();
    `).then(l=>{const d=Number(l?.width||0);if(!d)return;const u=Number((r.clientWidth/d).toFixed(2));m(Math.max(k,Math.min(R,u)))}).catch(()=>{})},[b]),Q=t.useCallback(e=>{if(!b||!(e.ctrlKey||e.metaKey))return;e.preventDefault();const r=e.deltaY<0?.08:-.08;m(l=>{const d=Number((l+r).toFixed(2));return Math.max(k,Math.min(R,d))})},[b]),ee=t.useCallback(()=>{if(h.current.length===0)return;const e=h.current.pop();p.current.push(o),x(h.current.length>0),y(!0),w(e),f(e),c.current&&(c.current.src=e)},[o]),te=t.useCallback(()=>{if(p.current.length===0)return;const e=p.current.pop();h.current.push(o),x(!0),y(p.current.length>0),w(e),f(e),c.current&&(c.current.src=e)},[o]),re=t.useCallback(()=>{c.current?.reload()},[]),ne=t.useCallback(e=>{e.preventDefault();let r=C.trim();r&&(/^https?:\/\//i.test(r)||(r="https://"+r),I(r))},[C,I]),oe=t.useCallback(e=>{e.key==="Escape"&&(f(o),e.target.blur())},[o]),H={allowpopups:"false",webpreferences:"contextIsolation=no, nodeIntegration=no, nativeWindowOpen=no"};return F&&(H.partition=F),n.createElement("div",{ref:Y,className:`h-full w-full flex flex-col ${J??""}`,style:K},v&&n.createElement("style",null,`
            .aion-url-viewer-toolbar {
              --viewer-border: var(--color-border-2);
              --viewer-border-hover: var(--color-border-3);
              --viewer-bg: var(--color-bg-3);
              --viewer-bg-hover: var(--color-fill-2);
              --viewer-text: var(--color-text-2);
              --viewer-text-muted: var(--color-text-3);
            }
            .aion-url-viewer-toolbar .toolbar-btn {
              -webkit-appearance: none;
              appearance: none;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              height: 30px;
              min-width: 30px;
              padding: 0 10px;
              border-radius: 10px;
              border: 1px solid var(--viewer-border);
              background: var(--viewer-bg);
              color: var(--viewer-text);
              line-height: 1;
              font-size: 12px;
              transition: all 150ms ease;
              cursor: pointer;
            }
            .aion-url-viewer-toolbar .toolbar-btn.icon-btn {
              width: 30px;
              min-width: 30px;
              padding: 0;
            }
            .aion-url-viewer-toolbar .toolbar-btn:hover:not(:disabled) {
              background: var(--viewer-bg-hover);
              border-color: var(--viewer-border-hover);
            }
            .aion-url-viewer-toolbar .toolbar-btn:active:not(:disabled) {
              transform: translateY(0.5px);
            }
            .aion-url-viewer-toolbar .toolbar-btn:focus-visible {
              outline: none;
              border-color: rgb(var(--primary-6));
              box-shadow: 0 0 0 2px rgba(var(--primary-6), 0.12);
            }
            .aion-url-viewer-toolbar .toolbar-btn:disabled {
              opacity: 0.55;
              cursor: not-allowed;
              color: var(--viewer-text-muted);
              background: var(--color-bg-2);
            }
            .aion-url-viewer-toolbar .toolbar-chip {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              height: 30px;
              min-width: 48px;
              padding: 0 10px;
              border-radius: 10px;
              border: 1px solid var(--viewer-border);
              background: var(--color-bg-2);
              color: var(--viewer-text-muted);
              font-size: 11px;
              line-height: 1;
            }
            .aion-url-viewer-toolbar .toolbar-input {
              -webkit-appearance: none;
              appearance: none;
              width: 100%;
              height: 30px;
              padding: 0 12px;
              border-radius: 10px;
              border: 1px solid var(--viewer-border);
              background: var(--viewer-bg);
              color: var(--color-text-1);
              font-size: 12px;
              line-height: 30px;
              transition: all 150ms ease;
            }
            .aion-url-viewer-toolbar .toolbar-input:hover {
              border-color: var(--viewer-border-hover);
            }
            .aion-url-viewer-toolbar .toolbar-input:focus {
              outline: none;
              border-color: rgb(var(--primary-6));
              box-shadow: 0 0 0 2px rgba(var(--primary-6), 0.12);
            }
          `),v&&n.createElement("div",{className:"aion-url-viewer-toolbar flex items-center gap-6px h-40px px-10px bg-bg-2 border-b border-border-1 flex-shrink-0"},n.createElement("button",{onClick:ee,disabled:!P,className:"toolbar-btn icon-btn",title:"Back"},n.createElement(de,{theme:"outline",size:16})),n.createElement("button",{onClick:te,disabled:!$,className:"toolbar-btn icon-btn",title:"Forward"},n.createElement(ue,{theme:"outline",size:16})),n.createElement("button",{onClick:re,className:"toolbar-btn icon-btn",title:"Refresh"},A?n.createElement(fe,{theme:"outline",size:16,className:"animate-spin"}):n.createElement(be,{theme:"outline",size:16})),b&&n.createElement("div",{className:"flex items-center gap-6px ml-2px"},n.createElement("button",{onClick:q,className:"toolbar-btn",title:"Reset zoom"},"100%"),n.createElement("button",{onClick:X,className:"toolbar-btn",title:"Fit"},"Fit"),n.createElement("span",{className:"toolbar-chip"},Math.round(M*100),"%")),n.createElement("form",{onSubmit:ne,className:"flex-1 ml-2px"},n.createElement("input",{type:"text",value:C,onChange:e=>f(e.target.value),onKeyDown:oe,onFocus:e=>e.target.select(),className:"toolbar-input",placeholder:"Enter URL..."}))),!v&&A&&n.createElement("div",{className:"absolute inset-0 flex items-center justify-center text-t-secondary text-14px z-10 pointer-events-none"},n.createElement("span",{className:"animate-pulse"},"Loading…")),n.createElement("div",{ref:_,className:"flex-1 overflow-hidden relative",style:{minHeight:0},onWheel:Q},n.createElement("webview",{ref:c,src:o,className:"border-0 absolute left-0 top-0",style:{opacity:!v&&A?0:1,transition:"opacity 150ms ease-in"},...H})))};export{pe as W};
