import{r as C,o as s,c,b as t,n as i,C as l,_ as p}from"./index-9a568092.js";const S="/admin-template-project/assets/sample_product_item-8a28c88c.png";const h={class:"common-card-component"},v={class:"card-inner back p-2.4"},z={__name:"Card",props:{cardType:{type:String,default:"",description:"카드타입"},cardRotate:{type:Boolean,default:!1,description:"카드회전 사용 여부"},cardShadow:{type:Boolean,default:!1,description:"카드 그림자 사용 여부"},cardMoveTop:{type:Boolean,default:!1,description:"위로 올라가는 카드 효과"},verticalRotate:{type:Boolean,default:!1,description:"세로로 회전"},horizontalRotate:{type:Boolean,default:!1,description:"가로로 회전"},productData:{type:Object,default:()=>{},description:"데이터"}},setup(r){const e=r,a=C(""),d=o=>o===a.value,_=o=>{a.value=o},u=()=>{a.value=!1};return(o,n)=>(s(),c("div",h,[t("div",{class:i(["card-wrapper",[e.cardType,{cardShadow:e.cardShadow},{cardMoveTop:e.cardMoveTop},{horizontalRotate:d(e.index)&&e.horizontalRotate},{verticalRotate:d(e.index)&&e.verticalRotate}]]),onMouseover:n[0]||(n[0]=f=>_(e.index)),onMouseout:n[1]||(n[1]=f=>u(e.index))},[t("div",{class:i(["card-inner front p-2.4",[{"flex items-center":e.cardType==="horizontal"},{"flex flex-col ":e.cardType==="vertical"}]])},[l(o.$slots,"frontContent")],2),t("div",v,[l(o.$slots,"backContent")])],34)]))}},m={},k={width:"16",height:"19",viewBox:"0 0 16 19",fill:"none",stroke:"currentColor"},x=t("path",{d:"M1 4.2C1 3.07989 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.07989 1 4.2 1H11.8C12.9201 1 13.4802 1 13.908 1.21799C14.2843 1.40973 14.5903 1.71569 14.782 2.09202C15 2.51984 15 3.07989 15 4.2V15.8909C15 16.8955 15 17.3978 14.7916 17.6678C14.6102 17.9028 14.3338 18.0451 14.0371 18.0561C13.6963 18.0688 13.2875 17.7768 12.47 17.1929L8 14L3.52998 17.1929C2.71248 17.7768 2.30373 18.0688 1.96294 18.0561C1.66624 18.0451 1.38977 17.9028 1.20836 17.6678C1 17.3978 1 16.8955 1 15.8909V4.2Z","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),y=[x];function B(r,e){return s(),c("svg",k,y)}const H=p(m,[["render",B]]),M={},$={width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor"},w=t("path",{d:"M6 10H6.01M10 10H10.01M14 10H14.01M19.0039 10C19.0039 14.9706 14.9745 19 10.0039 19C7.9675 19 1.00463 19 1.00463 19C1.00463 19 2.56382 15.2561 1.93982 14.0008C1.34076 12.7956 1.00391 11.4372 1.00391 10C1.00391 5.02944 5.03334 1 10.0039 1C14.9745 1 19.0039 5.02944 19.0039 10Z","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),g=[w];function R(r,e){return s(),c("svg",$,g)}const b=p(M,[["render",R]]);export{H as B,b as M,S as _,z as a};
