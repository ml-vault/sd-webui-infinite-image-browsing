import{d as $e,r as y,o as Ae,bO as W,m as Me,B as ze,ax as De,y as Fe,z as Ue,C as Q,bP as Be,$ as Ve,S as c,T as I,c as s,a1 as t,a2 as e,U as d,V as i,W as o,a0 as g,Y as f,a3 as X,bV as Ee,ae as F,a4 as Y,J as Te,ad as He,X as Ke,R as Z,ah as Ge,ai as j,bS as Oe,ag as Je,aN as Le,aO as Ne,bW as Pe,bU as qe,Z as We}from"./index-ca84e2c1.js";import{S as Qe}from"./index-9529bc7a.js";/* empty css              */import"./index-3b3dc640.js";import{c as Xe,d as Ye,F as Ze}from"./FileItem-0cdb6688.js";import{M as je,L as et,R as tt,f as st}from"./MultiSelectKeep-0247e53e.js";import{c as at,u as lt}from"./hook-a34ebc4e.js";import{f as R,H as ee,_ as nt,a as ot}from"./searchHistory-967f71c2.js";import"./functionalCallableComp-99e06f58.js";/* empty css              */import"./index-a1e9101b.js";import"./shortcut-9796cf9e.js";import"./index-a438629e.js";const it="/infinite_image_browsing/fe-static/assets/regex-a447f877.svg",U=b=>(Le("data-v-8a9796fb"),b=b(),Ne(),b),rt={style:{"padding-right":"16px"}},dt=U(()=>d("div",null,null,-1)),ut=["src"],ct={class:"search-bar"},pt={class:"form-name"},ft={class:"search-bar last actions"},vt={class:"hint"},gt={key:0,style:{margin:"64px 16px 32px",padding:"8px",background:"var(--zp-secondary-variant-background)","border-radius":"16px"}},mt={style:{margin:"16px 32px 16px"}},_t={style:{"padding-right":"16px"}},ht=U(()=>d("div",null,null,-1)),kt=U(()=>d("div",{style:{padding:"16px 0 512px"}},null,-1)),yt={key:2,class:"preview-switch"},bt=$e({__name:"SubstrSearch",props:{tabIdx:{},paneIdx:{},searchScope:{}},setup(b){const $=b,m=y(!1),_=y(""),h=y($.searchScope??""),w=y(!1),B=y(0),A=at(a=>{const l={cursor:a,regexp:m.value?_.value:"",surstr:m.value?"":_.value,folder_paths:(h.value??"").split(/,|\n/).map(r=>r.trim()).filter(r=>r)};return Pe(l)}),{queue:k,images:p,onContextMenuClickU:V,stackViewEl:te,previewIdx:S,previewing:E,onPreviewVisibleChange:se,previewImgMove:T,canPreview:H,itemSize:K,gridItems:ae,showGenInfo:x,imageGenInfo:G,q:le,multiSelectedIdxs:M,onFileItemClick:ne,scroller:O,showMenuIdx:z,onFileDragStart:oe,onFileDragEnd:ie,cellWidth:re,onScroll:J,saveAllFileAsJson:de,saveLoadedFileAsJson:ue,props:ce,changeIndchecked:pe,seedChangeChecked:fe,getGenDiff:ve,getGenDiffWatchDep:ge}=lt(A),u=y();Ae(async()=>{u.value=await W(),u.value.img_count&&u.value.expired&&await L(),$.searchScope&&await C()}),Me(()=>$,async a=>{ce.value=a},{deep:!0,immediate:!0});const L=ze(()=>k.pushAction(async()=>(await qe(),u.value=await W(),u.value)).res),N=a=>{_.value=a.substr,h.value=a.folder_paths_str,m.value=a.isRegex,w.value=!1,C()},C=async()=>{B.value++,R.value.add({substr:_.value,folder_paths_str:h.value,isRegex:m.value}),await A.reset({refetch:!0}),await De(),J(),O.value.scrollToItem(0),p.value.length||Fe.info(Ue("fuzzy-search-noResults"))};Q("returnToIIB",async()=>{const a=await k.pushAction(Be).res;u.value.expired=a.expired}),Q("searchIndexExpired",()=>u.value&&(u.value.expired=!0));const me=()=>{m.value=!m.value},_e=Ve(),{onClearAllSelected:he,onSelectAll:ke,onReverseSelect:ye}=Xe();return(a,l)=>{const r=nt,v=ot,be=Z,we=Ge,P=j,Se=Oe,D=j,xe=Je,Ce=Z,Ie=Qe;return c(),I(Ke,null,[s(be,{visible:w.value,"onUpdate:visible":l[0]||(l[0]=n=>w.value=n),width:"70vw","mask-closable":"",onOk:l[1]||(l[1]=n=>w.value=!1)},{default:t(()=>[s(ee,{records:e(R),onReuseRecord:N},{default:t(({record:n})=>[d("div",rt,[s(v,null,{default:t(()=>[s(r,{span:4},{default:t(()=>[i(o(a.$t("historyRecordsSubstr"))+":",1)]),_:1}),s(r,{span:20},{default:t(()=>[i(o(n.substr),1)]),_:2},1024)]),_:2},1024),n.folder_paths_str?(c(),g(v,{key:0},{default:t(()=>[s(r,{span:4},{default:t(()=>[i(o(a.$t("searchScope"))+":",1)]),_:1}),s(r,{span:20},{default:t(()=>[i(o(n.folder_paths_str),1)]),_:2},1024)]),_:2},1024)):f("",!0),s(v,null,{default:t(()=>[s(r,{span:4},{default:t(()=>[i(o(a.$t("historyRecordsisRegex"))+":",1)]),_:1}),s(r,{span:20},{default:t(()=>[i(o(n.isRegex),1)]),_:2},1024)]),_:2},1024),s(v,null,{default:t(()=>[s(r,{span:4},{default:t(()=>[i(o(a.$t("time"))+":",1)]),_:1}),s(r,{span:20},{default:t(()=>[i(o(n.time),1)]),_:2},1024)]),_:2},1024),dt])]),_:1},8,["records"])]),_:1},8,["visible"]),d("div",{class:"container",ref_key:"stackViewEl",ref:te},[s(je,{show:!!e(M).length||e(_e).keepMultiSelect,onClearAllSelected:e(he),onSelectAll:e(ke),onReverseSelect:e(ye)},null,8,["show","onClearAllSelected","onSelectAll","onReverseSelect"]),u.value?(c(),I("div",{key:0,class:"search-bar",onKeydown:l[4]||(l[4]=X(()=>{},["stop"]))},[s(we,{value:_.value,"onUpdate:value":l[2]||(l[2]=n=>_.value=n),placeholder:a.$t("fuzzy-search-placeholder")+" "+a.$t("regexSearchEnabledHint"),disabled:!e(k).isIdle,onKeydown:Ee(C,["enter"]),"allow-clear":""},null,8,["value","placeholder","disabled","onKeydown"]),d("div",{class:F(["regex-icon",{selected:m.value}]),onKeydown:l[3]||(l[3]=X(()=>{},["stop"])),onClick:me,title:"Use Regular Expression"},[d("img",{src:e(it)},null,8,ut)],34),u.value.expired||!u.value.img_count?(c(),g(P,{key:0,onClick:e(L),loading:!e(k).isIdle,type:"primary"},{default:t(()=>[i(o(u.value.img_count===0?a.$t("generateIndexHint"):a.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(c(),g(P,{key:1,type:"primary",onClick:C,loading:!e(k).isIdle||e(A).loading,disabled:!_.value&&!h.value},{default:t(()=>[i(o(a.$t("search")),1)]),_:1},8,["loading","disabled"]))],32)):f("",!0),d("div",ct,[d("div",pt,o(a.$t("searchScope")),1),s(Se,{"auto-size":{maxRows:8},value:h.value,"onUpdate:value":l[5]||(l[5]=n=>h.value=n),placeholder:a.$t("specifiedSearchFolder")},null,8,["value","placeholder"])]),d("div",ft,[e(p).length?(c(),g(D,{key:0,onClick:e(ue)},{default:t(()=>[i(o(a.$t("saveLoadedImageAsJson")),1)]),_:1},8,["onClick"])):f("",!0),e(p).length?(c(),g(D,{key:1,onClick:e(de)},{default:t(()=>[i(o(a.$t("saveAllAsJson")),1)]),_:1},8,["onClick"])):f("",!0),s(D,{onClick:l[6]||(l[6]=n=>w.value=!0)},{default:t(()=>[i(o(a.$t("history")),1)]),_:1})]),s(Ie,{size:"large",spinning:!e(k).isIdle},{default:t(()=>[s(Ce,{visible:e(x),"onUpdate:visible":l[8]||(l[8]=n=>Y(x)?x.value=n:null),width:"70vw","mask-closable":"",onOk:l[9]||(l[9]=n=>x.value=!1)},{cancelText:t(()=>[]),default:t(()=>[s(xe,{active:"",loading:!e(le).isIdle},{default:t(()=>[d("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:l[7]||(l[7]=n=>e(Te)(e(G)))},[d("div",vt,o(a.$t("doubleClickToCopy")),1),i(" "+o(e(G)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),B.value===0&&!e(p).length&&e(R).getRecords().length?(c(),I("div",gt,[d("h2",mt,o(a.$t("restoreFromHistory")),1),s(ee,{records:e(R),onReuseRecord:N},{default:t(({record:n})=>[d("div",_t,[s(v,null,{default:t(()=>[s(r,{span:4},{default:t(()=>[i(o(a.$t("historyRecordsSubstr"))+":",1)]),_:1}),s(r,{span:20},{default:t(()=>[i(o(n.substr),1)]),_:2},1024)]),_:2},1024),n.folder_paths_str?(c(),g(v,{key:0},{default:t(()=>[s(r,{span:4},{default:t(()=>[i(o(a.$t("searchScope"))+":",1)]),_:1}),s(r,{span:20},{default:t(()=>[i(o(n.folder_paths_str),1)]),_:2},1024)]),_:2},1024)):f("",!0),s(v,null,{default:t(()=>[s(r,{span:4},{default:t(()=>[i(o(a.$t("historyRecordsisRegex"))+":",1)]),_:1}),s(r,{span:20},{default:t(()=>[i(o(n.isRegex),1)]),_:2},1024)]),_:2},1024),s(v,null,{default:t(()=>[s(r,{span:4},{default:t(()=>[i(o(a.$t("time"))+":",1)]),_:1}),s(r,{span:20},{default:t(()=>[i(o(n.time),1)]),_:2},1024)]),_:2},1024),ht])]),_:1},8,["records"])])):f("",!0),e(p)?(c(),g(e(Ye),{key:1,ref_key:"scroller",ref:O,class:"file-list",items:e(p),"item-size":e(K).first,"key-field":"fullpath","item-secondary-size":e(K).second,gridItems:e(ae),onScroll:e(J)},{after:t(()=>[kt]),default:t(({item:n,index:q})=>[s(Ze,{idx:q,file:n,"show-menu-idx":e(z),"onUpdate:showMenuIdx":l[10]||(l[10]=Re=>Y(z)?z.value=Re:null),onFileItemClick:e(ne),"full-screen-preview-image-url":e(p)[e(S)]?e(He)(e(p)[e(S)]):"","cell-width":e(re),selected:e(M).includes(q),onContextMenuClick:e(V),onDragstart:e(oe),onDragend:e(ie),"enable-change-indicator":e(pe),"seed-change-checked":e(fe),"get-gen-diff":e(ve),"get-gen-diff-watch-dep":e(ge),"is-selected-mutil-files":e(M).length>1,onPreviewVisibleChange:e(se)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","cell-width","selected","onContextMenuClick","onDragstart","onDragend","enable-change-indicator","seed-change-checked","get-gen-diff","get-gen-diff-watch-dep","is-selected-mutil-files","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):f("",!0),e(E)?(c(),I("div",yt,[s(e(et),{onClick:l[11]||(l[11]=n=>e(T)("prev")),class:F({disable:!e(H)("prev")})},null,8,["class"]),s(e(tt),{onClick:l[12]||(l[12]=n=>e(T)("next")),class:F({disable:!e(H)("next")})},null,8,["class"])])):f("",!0)]),_:1},8,["spinning"]),e(E)&&e(p)&&e(p)[e(S)]?(c(),g(st,{key:1,file:e(p)[e(S)],idx:e(S),onContextMenuClick:e(V)},null,8,["file","idx","onContextMenuClick"])):f("",!0)],512)],64)}}});const Bt=We(bt,[["__scopeId","data-v-8a9796fb"]]);export{Bt as default};
