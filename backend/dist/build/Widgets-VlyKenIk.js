import{h9 as w,fz as e,ch as n,fF as C,aE as o,b6 as M,iH as v,ib as m,hQ as L,hV as T,ey as D,ef as I,j1 as S,e_ as l,fN as W,fy as N,aw as A,aY as $,cT as E,jc as K,ex as z,bm as G,bS as p,b0 as P}from"./strapi-CItKYoTH.js";import{W as u}from"./WidgetHelpers-BMFzLiCb.js";import{g as R,a as H}from"./users-DLc-PG84.js";const F=l(o)`
  font-size: 2.4rem;
`,B=()=>{const t=w("User",s=>s.user),i=R(t),c=H(t);return e.jsxs(n,{direction:"column",gap:3,height:"100%",justifyContent:"center",children:[e.jsx(C.Item,{delayMs:0,fallback:c}),i&&e.jsx(F,{fontWeight:"bold",textTransform:"none",textAlign:"center",children:i}),t?.email&&e.jsx(o,{variant:"omega",textColor:"neutral600",children:t?.email}),t?.roles?.length&&e.jsx(n,{marginTop:2,gap:1,wrap:"wrap",children:t?.roles?.map(s=>e.jsx(M,{children:s.name},s.id))})]})},Q=l(p)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-radius: ${({theme:t})=>t.borderRadius};
  overflow: hidden;
`,O=l(p)`
  border-bottom: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  &:nth-child(2n) {
    border-right: none;
  }
  &:nth-last-child(-n + 2) {
    border-bottom: none;
  }
`,U=({locale:t,number:i})=>new Intl.NumberFormat(t,{notation:"compact",maximumFractionDigits:1}).format(i),Y=l(P)`
  text-decoration: none;
  padding: ${({theme:t})=>t.spaces[3]};
`,J=()=>{const{trackUsage:t}=v(),{formatMessage:i,locale:c}=m(),{data:s,isLoading:x}=L(),{data:d,isLoading:b}=T();if(b||x)return e.jsx(u.Loading,{});if(!d||!s)return e.jsx(u.Error,{});const h={entries:{label:{id:"widget.key-statistics.list.entries",defaultMessage:"Entries"},icon:{component:e.jsx(G,{}),background:"primary100",color:"primary600"},link:"/content-manager"},assets:{label:{id:"widget.key-statistics.list.assets",defaultMessage:"Assets"},icon:{component:e.jsx(z,{}),background:"warning100",color:"warning600"},link:"/plugins/upload"},contentTypes:{label:{id:"widget.key-statistics.list.contentTypes",defaultMessage:"Content-Types"},icon:{component:e.jsx(K,{}),background:"secondary100",color:"secondary600"},link:"/plugins/content-type-builder"},components:{label:{id:"widget.key-statistics.list.components",defaultMessage:"Components"},icon:{component:e.jsx(E,{}),background:"alternative100",color:"alternative600"},link:"/plugins/content-type-builder"},locales:{label:{id:"widget.key-statistics.list.locales",defaultMessage:"Locales"},icon:{component:e.jsx($,{}),background:"success100",color:"success600"},link:"/settings/internationalization"},admins:{label:{id:"widget.key-statistics.list.admins",defaultMessage:"Admins"},icon:{component:e.jsx(A,{}),background:"danger100",color:"danger600"},link:"/settings/users?pageSize=10&page=1&sort=firstname"},webhooks:{label:{id:"widget.key-statistics.list.webhooks",defaultMessage:"Webhooks"},icon:{component:e.jsx(N,{}),background:"alternative100",color:"alternative600"},link:"/settings/webhooks"},apiTokens:{label:{id:"widget.key-statistics.list.apiTokens",defaultMessage:"API Tokens"},icon:{component:e.jsx(W,{}),background:"neutral100",color:"neutral600"},link:"/settings/api-tokens?sort=name:ASC"}},{draft:f,published:y,modified:k}=s??{draft:0,published:0,modified:0},j=f+y+k;return e.jsx(Q,{children:Object.entries(h).map(([a,r])=>{const g=d?.[a];return g!==null&&e.jsx(O,{as:Y,to:r.link,"data-testid":`stat-${a}`,onClick:()=>t("didOpenKeyStatisticsWidgetLink",{itemKey:a}),children:e.jsxs(n,{alignItems:"center",gap:2,children:[e.jsx(n,{padding:2,borderRadius:1,background:r.icon.background,color:r.icon.color,children:r.icon.component}),e.jsxs(n,{direction:"column",alignItems:"flex-start",children:[e.jsx(o,{variant:"pi",fontWeight:"bold",textColor:"neutral500",children:i(r.label)}),e.jsx(o,{variant:"omega",fontWeight:"bold",textColor:"neutral800",children:U({locale:c,number:a==="entries"?j:g})})]})]})},`key-statistics-${a}`)})})},X=()=>{const{formatMessage:t}=m();return e.jsxs(n,{direction:"column",gap:4,height:"100%",alignItems:"center",justifyContent:"center",children:[e.jsx(D,{width:"3.2rem",height:"3.2rem"}),e.jsxs(n,{direction:"column",gap:2,children:[e.jsx(o,{variant:"beta",textAlign:"center",children:t({id:"HomePage.widget.deploy-now.title",defaultMessage:"Ready to go live ?"})}),e.jsx(o,{variant:"omega",textColor:"neutral600",textAlign:"center",children:t({id:"HomePage.widget.deploy-now.description",defaultMessage:"Deploy with Strapi Cloud"})})]}),e.jsx(I,{href:"https://cloud.strapi.io/login",isExternal:!0,size:"L",startIcon:e.jsx(S,{}),children:t({id:"HomePage.widget.deploy-now.button",defaultMessage:"Deploy Now"})})]})};export{X as DeployNowWidget,J as KeyStatisticsWidget,B as ProfileWidget};
