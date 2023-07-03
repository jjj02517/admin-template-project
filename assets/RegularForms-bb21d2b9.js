import{_ as S}from"./ItemCard-1d41fd8c.js";import{C as y}from"./Input-5b0ebbcf.js";import{C as D}from"./Button-1a418bdd.js";import{C as R}from"./Checkbox-51e63c45.js";import{r as c,o,c as p,a,b as e,n as m,u as b,y as Y,_ as V,k as H,d as A,q as z,z as K,t as q,v as Q,f as W,F as I,g,e as $,p as M,i as T,w as x,h as F}from"./index-9a568092.js";import{u as N}from"./index-6907b035.js";import{I as P}from"./iconify-0f691387.js";import"./index-7a13ef20.js";const j={class:"forms-stacked-component flex flex-col h-full"},G={__name:"Stacked",setup(u){const i=c(""),t=c(""),d=c("N"),h=()=>{d.value==="N"?d.value="Y":d.value="N"};return(_,v)=>(o(),p("div",j,[a(y,{id:"userEmail",type:"text",placeholder:"Please enter your email",class:"mt-3",value:i.value,"is-input-value-valid":!0,onInput:v[0]||(v[0]=f=>i.value=f)},null,8,["value"]),a(y,{id:"userPassword",type:"password",placeholder:"Please enter your secret code",class:"mt-2",value:t.value,"is-input-value-valid":!0,onInput:v[1]||(v[1]=f=>t.value=f)},null,8,["value"]),a(R,{id:"loingKeep",value:d.value,label:"Remember Me",onCheck:h,class:"mt-2"},null,8,["value"]),a(D,{label:"SUBMIT",width:"100px",class:"mt-auto"})]))}};const J={class:"forms-horizontal-component"},O=Y('<li class="list"><div class="box-title">Email Adress</div><div class="box-text"><input type="text" placeholder="Please enter your email"></div></li><li class="list mt-2"><div class="box-title">Password</div><div class="box-text"><input type="text" placeholder="Please enter your secret code"></div></li><li class="list mt-2"><div class="box-title">Description</div><div class="box-text"><textarea placeholder="Please enter "></textarea></div></li>',3),X=[O],Z={__name:"Horizontal",setup(u){const i=N("(min-width: 1280px)");return(t,d)=>(o(),p("div",J,[e("ul",{class:m(["mt-3",{midScreen:!b(i)}])},X,2),a(D,{label:"SUBMIT",width:"100px",class:"mt-auto"})]))}};const ee={class:"common-radio-button-component"},se=["id","value","name","disabled"],te=["for"],le={__name:"RadioButton",props:{id:{type:String,default:"",description:"라디오버튼 id"},label:{type:String,default:"",description:"라디오버튼 라벨"},name:{type:String,default:"",description:"라디오버튼 그룹"},disabled:{type:Boolean,default:!1,description:"disable 사용 여부"},value:{type:String,default:"",description:"라디오버튼 값"}},emits:["check"],setup(u,{emit:i}){const t=u,d=c("");return H(()=>t.value,h=>{d.value=h}),A(()=>{d.value=t.value}),(h,_)=>(o(),p("div",ee,[z(e("input",{id:t.id,"onUpdate:modelValue":_[0]||(_[0]=v=>d.value=v),value:t.id,type:"radio",name:t.name,disabled:t.disabled,class:m({margin:t.margin})},null,10,se),[[K,d.value]]),e("label",{for:t.id,onClick:_[1]||(_[1]=v=>i("check",t.id))},[e("span",null,q(t.label),1)],8,te)]))}},U=V(le,[["__scopeId","data-v-5ebd1129"]]);const w=u=>(M("data-v-f5ec614f"),u=u(),T(),u),ae={class:"forms-elements-component"},oe={class:"list"},ie=w(()=>e("div",{class:"box-title"},"With Help",-1)),ce={class:"box-text"},ne={key:0,class:"help-msg mt-1"},de=w(()=>e("li",{class:"list mt-2"},[e("div",{class:"box-title"},"Password"),e("div",{class:"box-text"},[e("input",{type:"password"})])],-1)),ue={class:"list mt-2"},re=w(()=>e("div",{class:"box-title"},"Placeholder",-1)),pe={class:"box-text"},_e=Y('<li class="list mt-2" data-v-f5ec614f><div class="box-title" data-v-f5ec614f>Disabled</div><div class="box-text" data-v-f5ec614f><input type="text" disabled placeholder="Disabled input here" data-v-f5ec614f></div></li><li class="list mt-2" data-v-f5ec614f><div class="box-title" data-v-f5ec614f>Static Control</div><div class="box-text" data-v-f5ec614f>hello@codef.co.kr</div></li>',2),ve={class:"list mt-2"},he=w(()=>e("div",{class:"box-title"},"Checkboxes and Radios",-1)),be={class:"box-text"},me={class:"list mt-2"},xe=w(()=>e("div",{class:"box-title"},"Inline Checkboxes",-1)),fe={class:"box-text"},ke={__name:"Elements",setup(u){const i=c(""),t=c(""),d=N("(min-width: 1280px)"),h=c([{id:"firstCheckbox",label:"First Checkbox",checked:"N"},{id:"secondCheckbox",label:"Second Checkbox",checked:"Y"}]),_=c([{id:"a",label:"a",checked:"N"},{id:"b",label:"b",checked:"N"},{id:"c",label:"c",checked:"N"}]),v=k=>{h.value.forEach(n=>{n.id===k&&(n.checked==="N"?n.checked="Y":n.checked="N")})},f=k=>{_.value.forEach(n=>{n.id===k&&(n.checked==="N"?n.checked="Y":n.checked="N")})},L=c([{id:"firstRadio",label:"First Radio",checked:"N"},{id:"secondRadio",label:"Second Radio",checked:"Y"}]);return(k,n)=>(o(),p("div",ae,[e("ul",{class:m(["mt-3",{midScreen:!b(d)}])},[e("li",oe,[ie,e("div",ce,[z(e("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=s=>i.value=s)},null,512),[[Q,i.value]]),i.value?(o(),p("p",ne," A block of help text that breaks onto a new line ")):W("",!0)])]),de,e("li",ue,[re,e("div",pe,[a(y,{id:"userEmail",type:"text",placeholder:"placeholder",value:t.value,"is-input-value-valid":!0,onInput:n[1]||(n[1]=s=>t.value=s)},null,8,["value"])])]),_e,e("li",ve,[he,e("div",be,[(o(!0),p(I,null,g(h.value,s=>(o(),$(R,{id:s.id,key:s,value:s.checked,label:s.label,class:"mt-0.8",onCheck:C=>v(s.id)},null,8,["id","value","label","onCheck"]))),128)),(o(!0),p(I,null,g(L.value,s=>(o(),$(U,{id:s.id,key:s,name:"radioList",value:s.checked,label:s.label,class:"mt-0.8"},null,8,["id","value","label"]))),128))])]),e("li",me,[xe,e("div",fe,[(o(!0),p(I,null,g(_.value,s=>(o(),$(R,{id:s.id,key:s,value:s.checked,label:s.label,class:"inline-checkbox",inline:"",onCheck:C=>f(s.id)},null,8,["id","value","label","onCheck"]))),128))])])],2)]))}},Ce=V(ke,[["__scopeId","data-v-f5ec614f"]]);const E=u=>(M("data-v-21e5aa4c"),u=u(),T(),u),ye={class:"forms-input-variants-component"},Ie={class:"list"},ge=E(()=>e("div",{class:"box-title"},"Custom Checkboxes & Radios",-1)),$e={class:"list mt-2"},we=E(()=>e("div",{class:"box-title"},"Input with success",-1)),Se={class:"box-text"},Re={class:"list mt-2"},Ne=E(()=>e("div",{class:"box-title"},"Input with error",-1)),Ee={class:"box-text"},Le={class:"list mt-2"},Ue=E(()=>e("div",{class:"box-title"},"Column sizing",-1)),Ve={class:"box-text"},Be={__name:"InputVariants",setup(u){const i=N("(min-width: 1280px)"),t=c("Success Input"),d=c("Error Input"),h=c(""),_=c([{id:"Checked",label:"Checked",checked:"Y",disabled:!1},{id:"Unchecked",label:"Unchecked",checked:"N",disabled:!1},{id:"Disabled Checked",label:"Disabled Checked",checked:"Y",disabled:!0},{id:"Disabled Unchecked",label:"Disabled Unchecked",checked:"N",disabled:!0}]),v=C=>{_.value.forEach(r=>{r.id===C&&(r.checked==="N"?(r.checked="Y",r.label="Checked"):(r.checked="N",r.label="Unchecked"))})},f=c("1"),L=c("3"),k=c([{id:"1",label:"Radio is on",value:"1"},{id:"2",label:"Radio is off",value:"2"}]),n=c([{id:"3",label:"Radio is on",value:"3"},{id:"4",label:"Radio is off",value:"4"}]),s=C=>{k.value.forEach(r=>{r.id===C?r.label="Radio is on":r.label="Radio is off"})};return(C,r)=>(o(),p("div",ye,[e("ul",{class:m(["mt-3",{midScreen:!b(i)}])},[e("li",Ie,[ge,e("div",{class:m(["box-text",{flex:b(i)}])},[e("div",null,[(o(!0),p(I,null,g(_.value,l=>(o(),$(R,{id:l.id,key:l,value:l.checked,label:l.label,disabled:l.disabled,class:"mt-0.8",onCheck:B=>v(l.id)},null,8,["id","value","label","disabled","onCheck"]))),128))]),e("div",{class:m({"ml-10":b(i)})},[(o(!0),p(I,null,g(k.value,l=>(o(),$(U,{id:l.id,key:l,name:"radioListCustom",value:f.value,label:l.label,disabled:l.disabled,class:"mt-0.8",onCheck:B=>s(l.value)},null,8,["id","value","label","disabled","onCheck"]))),128)),(o(!0),p(I,null,g(n.value,l=>(o(),$(U,{id:l.id,key:l,name:"disabledRadioListCustom",value:L.value,label:l.label,disabled:"",class:"mt-0.8",onCheck:B=>s(l.value)},null,8,["id","value","label","onCheck"]))),128))],2)],2)]),e("li",$e,[we,e("div",Se,[a(y,{id:"successInput",type:"text",placeholder:"Success Input",value:t.value,"is-input-value-valid":!0,success:""},null,8,["value"])])]),e("li",Re,[Ne,e("div",Ee,[a(y,{id:"errorInput",type:"text",placeholder:"Error Input",value:d.value,"is-input-value-valid":!1},null,8,["value"])])]),e("li",Le,[Ue,e("div",Ve,[a(y,{id:"userEmail",type:"text",placeholder:"placeholder",value:h.value,"is-input-value-valid":!0,onInput:r[0]||(r[0]=l=>h.value=l)},null,8,["value"])])])],2)]))}},Fe=V(Be,[["__scopeId","data-v-21e5aa4c"]]);const Pe={class:"forms-regular-forms-page"},qe={__name:"RegularForms",setup(u){const i=N("(min-width: 1280px)");return(t,d)=>(o(),p("div",Pe,[e("div",{class:m(["mt-5 grid gap-3",{"grid-cols-2":b(i)}])},[a(S,{title:"Stacked Form",width:"100%",class:"col-span-1 py-1.2 px-3",topContentUse:""},{topContentIcon:x(()=>[a(b(P),{icon:"material-symbols:mail-outline",class:"icon mx-auto"})]),content:x(()=>[a(G)]),_:1}),a(S,{title:"Horizontal Form",width:"100%",class:"col-span-1 py-1.2 px-3",topContentUse:""},{topContentIcon:x(()=>[a(b(P),{icon:"ant-design:profile-outlined",class:"icon mx-auto"})]),content:x(()=>[a(Z)]),_:1}),a(S,{width:"100%",class:m(["p-3 mt-3",{"col-span-2":b(i)}]),topContentUse:""},{topContentIcon:x(()=>[F("Form Elements")]),content:x(()=>[a(Ce,{class:"mt-5"})]),_:1},8,["class"]),a(S,{width:"100%",class:m(["p-3 mt-3",{"col-span-2":b(i)}]),topContentUse:""},{topContentIcon:x(()=>[F("Input Variants")]),content:x(()=>[a(Fe,{class:"mt-5"})]),_:1},8,["class"])],2)]))}};export{qe as default};
