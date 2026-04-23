import{a as c,W as C,j as w,X as z,k as _}from"./index-CXxJNVLc.js";/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(...r)=>r.filter((t,e,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===e).join(" ").trim();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,e,a)=>a?a.toUpperCase():e.toLowerCase());/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=r=>{const t=A(r);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=c.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:e=2,absoluteStrokeWidth:a,className:o="",children:n,iconNode:v,...l},g)=>c.createElement("svg",{ref:g,...N,width:t,height:t,stroke:r,strokeWidth:a?Number(e)*24/Number(t):e,className:h("lucide",o),...!n&&!V(l)&&{"aria-hidden":"true"},...l},[...v.map(([i,s])=>c.createElement(i,s)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=(r,t)=>{const e=c.forwardRef(({className:a,...o},n)=>c.createElement(L,{ref:n,iconNode:t,className:h(`lucide-${j(p(r))}`,`lucide-${r}`,a),...o}));return e.displayName=p(r),e};/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],W=E("loader-circle",O),f=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,x=C,$=(r,t)=>e=>{var a;if(t?.variants==null)return x(r,e?.class,e?.className);const{variants:o,defaultVariants:n}=t,v=Object.keys(o).map(i=>{const s=e?.[i],u=n?.[i];if(s===null)return null;const d=f(s)||f(u);return o[i][d]}),l=e&&Object.entries(e).reduce((i,s)=>{let[u,d]=s;return d===void 0||(i[u]=d),i},{}),g=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((i,s)=>{let{class:u,className:d,...y}=s;return Object.entries(y).every(k=>{let[b,m]=k;return Array.isArray(m)?m.includes({...n,...l}[b]):{...n,...l}[b]===m})?[...i,u,d]:i},[]);return x(r,v,g,e?.class,e?.className)},B=$("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",{variants:{variant:{default:"bg-primary text-primary-foreground [a]:hover:bg-primary/80",outline:"border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",ghost:"hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",destructive:"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",xs:"h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",sm:"h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",lg:"h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",icon:"size-8","icon-xs":"size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3","icon-sm":"size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg","icon-lg":"size-9"}},defaultVariants:{variant:"default",size:"default"}});function R({className:r,variant:t="default",size:e="default",asChild:a=!1,...o}){const n=a?z:"button";return w.jsx(n,{"data-slot":"button","data-variant":t,"data-size":e,className:_(B({variant:t,size:e,className:r})),...o})}export{R as B,W as L,E as c};
