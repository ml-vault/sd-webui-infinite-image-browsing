import{d as v,c2 as C,bK as I,o as n,k as _,l as f,c,A as r,m as h,t as d,C as e,z,Q as F,c3 as B,c4 as x,Y as $,q as R}from"./index-30275493.js";import{u as S,b as A,k as E,F as V,g as T}from"./FileItem-b7e2f32d.js";import"./functionalCallableComp-3252666a.js";import"./index-aeb747e4.js";import"./db-e91cba82.js";import"./index-effab3c0.js";const L={class:"actions-panel actions"},N={key:0,class:"file-list"},U={class:"hint"},q=v({__name:"batchDownload",props:{tabIdx:{},paneIdx:{},id:{}},setup(H){const{stackViewEl:k}=S().toRefs(),{itemSize:p,gridItems:w,cellWidth:y}=A(),l=E(),{selectdFiles:i}=C(l),m=I(),D=async t=>{const s=B(t);s&&l.addFiles(s.nodes)},b=async()=>{m.pushAction(async()=>{const t=await x.value.post("/zip",{paths:i.value.map(a=>a.fullpath)},{responseType:"blob"}),s=window.URL.createObjectURL(new Blob([t.data])),o=document.createElement("a");o.href=s,o.setAttribute("download",`iib_${new Date().toLocaleString()}.zip`),document.body.appendChild(o),o.click()})},g=t=>{i.value.splice(t,1)};return(t,s)=>{const o=$;return n(),_("div",{class:"container",ref_key:"stackViewEl",ref:k,onDrop:D},[f("div",L,[c(o,{onClick:s[0]||(s[0]=a=>e(l).selectdFiles=[])},{default:r(()=>[h(d(t.$t("clear")),1)]),_:1}),c(o,{onClick:b,type:"primary",loading:!e(m).isIdle},{default:r(()=>[h(d(t.$t("zipDownload")),1)]),_:1},8,["loading"])]),e(i).length?(n(),z(e(T),{key:1,ref:"scroller",class:"file-list",items:e(i).slice(),"item-size":e(p).first,"key-field":"fullpath","item-secondary-size":e(p).second,gridItems:e(w)},{default:r(({item:a,index:u})=>[c(V,{idx:u,file:a,"cell-width":e(y),"enable-close-icon":"",onCloseIconClick:Q=>g(u),"full-screen-preview-image-url":e(F)(a),"enable-right-click-menu":!1},null,8,["idx","file","cell-width","onCloseIconClick","full-screen-preview-image-url"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):(n(),_("div",N,[f("p",U,d(t.$t("batchDownloaDDragAndDropHint")),1)]))],544)}}});const J=R(q,[["__scopeId","data-v-16c4c9dd"]]);export{J as default};
