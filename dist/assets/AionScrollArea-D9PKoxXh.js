import{e as s}from"./index-CeeRONfn.js";import{R as t}from"./vendor-react-E_0OdQKa.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"bbada2a9268060d2b41ddf1d885a9b27ecd2103d"};var o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="4f22e2be-35d6-462b-8549-9cad63cb8f70",e._sentryDebugIdIdentifier="sentry-dbid-4f22e2be-35d6-462b-8549-9cad63cb8f70")}catch{}})();/**
 * @license
 * Copyright 2025 AionUi (aionui.com)
 * SPDX-License-Identifier: Apache-2.0
 */const f=({children:e,className:o,direction:a="y",disableOverflow:d=!1,...r})=>{const l=d?"":a==="both"?"overflow-auto":a==="x"?"overflow-x-auto overflow-y-hidden":"overflow-y-auto overflow-x-hidden";return t.createElement("div",{"data-scroll-area":"",className:s(l,d&&"overflow-visible",o),...r},e)};f.displayName="AionScrollArea";export{f as A};
