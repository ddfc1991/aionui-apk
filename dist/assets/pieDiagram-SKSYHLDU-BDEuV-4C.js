import{Q as y,T as M,aJ as j,g as q,s as J,a as Q,b as Y,q as Z,p as H,_ as p,l as _,c as K,E as X,L as ee,a4 as te,e as ae,z as re,F as ne}from"./MermaidBlock-CIIT6QrQ.js";import{p as ie}from"./chunk-4BX2VUAB-D1OjCO7K.js";import{p as se}from"./treemap-KZPCXAKY-CHuksR2W.js";import{d as W}from"./arc-DfLnzU0R.js";import{o as oe}from"./ordinal-BqmR9iDP.js";import"./vendor-highlight-BHHr01k2.js";import"./vendor-arco-yxWk2EfN.js";import"./vendor-react-E_0OdQKa.js";import"./vendor-editor-CaUBtigl.js";import"./index-CeeRONfn.js";import"./vendor-diff-DZkmfzZY.js";import"./index-Dush_Syc.js";import"./vendor-katex-DleuJCPa.js";import"./vendor-markdown-DSbmUdQm.js";import"./_baseUniq-b33lK4dw.js";import"./_basePickBy-Co-sTmDr.js";import"./clone-CkLg7LW_.js";import"./init-O-_9I2xZ.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};e.SENTRY_RELEASE={id:"bbada2a9268060d2b41ddf1d885a9b27ecd2103d"};var a=new e.Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="f924ccd4-9ab7-49bd-ab82-f97ec03df409",e._sentryDebugIdIdentifier="sentry-dbid-f924ccd4-9ab7-49bd-ab82-f97ec03df409")}catch{}})();function le(e,a){return a<e?-1:a>e?1:a>=e?0:NaN}function ce(e){return e}function de(){var e=ce,a=le,g=null,S=y(0),s=y(M),l=y(0);function o(t){var n,c=(t=j(t)).length,u,w,h=0,d=new Array(c),i=new Array(c),v=+S.apply(this,arguments),x=Math.min(M,Math.max(-M,s.apply(this,arguments)-v)),m,D=Math.min(Math.abs(x)/c,l.apply(this,arguments)),C=D*(x<0?-1:1),f;for(n=0;n<c;++n)(f=i[d[n]=n]=+e(t[n],n,t))>0&&(h+=f);for(a!=null?d.sort(function(b,A){return a(i[b],i[A])}):g!=null&&d.sort(function(b,A){return g(t[b],t[A])}),n=0,w=h?(x-c*C)/h:0;n<c;++n,v=m)u=d[n],f=i[u],m=v+(f>0?f*w:0)+C,i[u]={data:t[u],index:n,value:f,startAngle:v,endAngle:m,padAngle:D};return i}return o.value=function(t){return arguments.length?(e=typeof t=="function"?t:y(+t),o):e},o.sortValues=function(t){return arguments.length?(a=t,g=null,o):a},o.sort=function(t){return arguments.length?(g=t,a=null,o):g},o.startAngle=function(t){return arguments.length?(S=typeof t=="function"?t:y(+t),o):S},o.endAngle=function(t){return arguments.length?(s=typeof t=="function"?t:y(+t),o):s},o.padAngle=function(t){return arguments.length?(l=typeof t=="function"?t:y(+t),o):l},o}var pe=ne.pie,z={sections:new Map,showData:!1},T=z.sections,F=z.showData,ue=structuredClone(pe),fe=p(()=>structuredClone(ue),"getConfig"),ge=p(()=>{T=new Map,F=z.showData,re()},"clear"),me=p(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(e)||(T.set(e,a),_.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),he=p(()=>T,"getSections"),ve=p(e=>{F=e},"setShowData"),ye=p(()=>F,"getShowData"),O={getConfig:fe,clear:ge,setDiagramTitle:H,getDiagramTitle:Z,setAccTitle:Y,getAccTitle:Q,setAccDescription:J,getAccDescription:q,addSection:me,getSections:he,setShowData:ve,getShowData:ye},Se=p((e,a)=>{ie(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),we={parse:p(async e=>{const a=await se("pie",e);_.debug(a),Se(a,O)},"parse")},xe=p(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),be=xe,Ae=p(e=>{const a=[...e.values()].reduce((s,l)=>s+l,0),g=[...e.entries()].map(([s,l])=>({label:s,value:l})).filter(s=>s.value/a*100>=1).sort((s,l)=>l.value-s.value);return de().value(s=>s.value)(g)},"createPieArcs"),De=p((e,a,g,S)=>{_.debug(`rendering pie chart
`+e);const s=S.db,l=K(),o=X(s.getConfig(),l.pie),t=40,n=18,c=4,u=450,w=u,h=ee(a),d=h.append("g");d.attr("transform","translate("+w/2+","+u/2+")");const{themeVariables:i}=l;let[v]=te(i.pieOuterStrokeWidth);v??=2;const x=o.textPosition,m=Math.min(w,u)/2-t,D=W().innerRadius(0).outerRadius(m),C=W().innerRadius(m*x).outerRadius(m*x);d.append("circle").attr("cx",0).attr("cy",0).attr("r",m+v/2).attr("class","pieOuterCircle");const f=s.getSections(),b=Ae(f),A=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let $=0;f.forEach(r=>{$+=r});const N=b.filter(r=>(r.data.value/$*100).toFixed(0)!=="0"),E=oe(A);d.selectAll("mySlices").data(N).enter().append("path").attr("d",D).attr("fill",r=>E(r.data.label)).attr("class","pieCircle"),d.selectAll("mySlices").data(N).enter().append("text").text(r=>(r.data.value/$*100).toFixed(0)+"%").attr("transform",r=>"translate("+C.centroid(r)+")").style("text-anchor","middle").attr("class","slice"),d.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const R=[...f.entries()].map(([r,I])=>({label:r,value:I})),k=d.selectAll(".legend").data(R).enter().append("g").attr("class","legend").attr("transform",(r,I)=>{const L=n+c,B=L*R.length/2,V=12*n,U=I*L-B;return"translate("+V+","+U+")"});k.append("rect").attr("width",n).attr("height",n).style("fill",r=>E(r.label)).style("stroke",r=>E(r.label)),k.append("text").attr("x",n+c).attr("y",n-c).text(r=>s.getShowData()?`${r.label} [${r.value}]`:r.label);const P=Math.max(...k.selectAll("text").nodes().map(r=>r?.getBoundingClientRect().width??0)),G=w+t+n+c+P;h.attr("viewBox",`0 0 ${G} ${u}`),ae(h,u,G,o.useMaxWidth)},"draw"),Ce={draw:De},Ue={parser:we,db:O,renderer:Ce,styles:be};export{Ue as diagram};
