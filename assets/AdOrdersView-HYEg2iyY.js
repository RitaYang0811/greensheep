import{_ as F,o as c,c as r,k as D,b as e,e as M,t as l,B as u,h,F as S,l as Q,A as g,d as v,f as y,V as w,Q as G,i as H,r as J,v as K}from"./index-CtyhMs3V.js";import{S as k}from"./sweetalert2.all-Kf2z6FoV.js";const W={props:["orders","openModal","deleteOrder","confirmDelete"]},X={class:"accordion-header"},Y=["data-bs-target"],Z={key:0,class:"ms-10 badge rounded-pill text-bg-primary fs-7"},ee={key:1,class:"ms-10 badge rounded-pill text-bg-danger fs-7"},te=["id"],se={class:"accordion-body"},oe={class:"ms-7 d-flex align-items-center"},ae={class:"badge rounded-pill text-bg-primary fs-7 m-2"},de={class:"me-7 d-flex"},le={class:"mx-3"},ne=e("div",{class:"my-4 border border-1"},null,-1),ie={class:"d-flex justify-content-between mx-4"},ce={class:""},re={class:"ms-2 fs-6 badge rounded-pill text-bg-secondary"},be={class:""},_e=e("div",{class:"my-4 border border-3"},null,-1),ue={class:"mt-4"},he={class:"fs-4"},pe={class:"m-2"},me={class:"m-2"},fe={class:"m-2"},ge={class:"m-2"},ve={class:"m-2"},ye=["onClick"],xe=["onClick"],Oe=["onClick"];function ke(a,o,d,_,t,i){return c(!0),r(S,null,D(d.orders,s=>{var p,m,f;return c(),r("div",{class:"accordion-item my-5",key:s.id},[e("h2",X,[e("button",{class:"accordion-button fs-7",type:"button","data-bs-toggle":"collapse","data-bs-target":`#${s.id}`,"aria-expanded":"true","aria-controls":"panelsStayOpen-collapseOne"},[M(l(s.create_at)+" | "+l(s.id)+" ",1),e("span",{class:u([s.is_paid?"text-bg-primary":"text-bg-danger","ms-10 badge rounded-pill text-bg-primary fs-7"])},l(s.is_paid?"已付款":"未付款"),3),(p=s==null?void 0:s.orderStatus)!=null&&p.done?(c(),r("span",Z,"已完成")):h("",!0),s!=null&&s.is_deleted?(c(),r("span",ee,"已刪除")):h("",!0)],8,Y)]),e("div",{id:s.id,class:"accordion-collapse collapse show"},[e("div",se,[(c(!0),r(S,null,D(Object.values(s.products),b=>(c(),r("div",{class:"border-bottom border-light d-flex align-items-center justify-content-between my-2",key:b.id},[e("div",oe,[e("span",ae,l(b.product.category),1),e("h3",null,l(b.product.title)+" ("+l(b.product.id)+")",1)]),e("div",de,[e("span",le,"數量："+l(b.qty),1),e("p",null," 總價："+l(b.total),1)])]))),128)),ne,e("div",ie,[e("p",ce,[M("優惠券："),e("span",re,l((f=(m=Object.values(s.products)[0])==null?void 0:m.coupon)==null?void 0:f.code),1)]),e("p",be,"總金額："+l(parseInt(s.total)),1)]),_e,e("div",ue,[e("div",he,[e("p",pe,"客戶姓名："+l(s.user.name),1),e("p",me,"客戶電話："+l(s.user.tel),1),e("p",fe,"客戶地址："+l(s.user.address),1),e("p",ge,"客戶Email："+l(s.user.email),1),e("p",ve,"備註："+l(s.message),1),e("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#adOrderModal",onClick:b=>d.openModal(s)}," 修改訂單 ",8,ye),s.is_deleted?h("",!0):(c(),r("button",{key:0,type:"button",class:"mx-4 btn btn-danger","data-bs-target":"#adOrderModal",onClick:b=>d.deleteOrder(s)}," 刪除訂單 ",8,xe)),s.is_deleted?(c(),r("button",{key:1,class:"btn btn-danger mx-4",onClick:Q(b=>d.confirmDelete(s.id),["prevent"])},"確認永久刪除訂單",8,Oe)):h("",!0)])])])],8,te)])}),128)}const Se=F(W,[["render",ke]]);var we={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",BASE_URL:"/greensheep/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:x,VITE_APP_API_NAME:O}=we,De={components:{Accordion:Se},data(){return{allOrders:[],unpaidOrders:[],paidOrders:[],deletedOrders:[],doneOrders:[],modalData:{},modalProducts:[],orderStatus:{getOrder:!0,making:!1,sendProduct:!1,done:!1}}},methods:{getAllOrders(){this.allOrders=[],this.unpaidOrders=[],this.paidOrders=[];const a=`${x}/api/${O}/admin/orders`;g.get(a).then(o=>{this.allOrders=o.data.orders,this.allOrders.forEach(d=>{d.orderStatus||(d.orderStatus={getOrder:!0,making:!1,sendProduct:!1,done:!1}),d.is_deleted?this.deletedOrders.push(d):d.is_paid?this.paidOrders.push(d):this.unpaidOrders.push(d),d.orderStatus.done&&this.doneOrders.push(d)})}).catch(o=>{console.log(o)})},updateOrder(a){const o=`${x}/api/${O}/admin/order/${a.id}`;a.orderStatus=this.orderStatus,g.put(o,{data:a}).then(()=>{k.fire({position:"top-end",icon:"success",title:"訂單修改成功",showConfirmButton:!1,toast:!0,timer:1500}),location.reload()}).catch(d=>{console.log(d)})},deleteOrder(a){const o=`${x}/api/${O}/admin/order/${a.id}`;k.fire({title:"是否刪除該訂單?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#566b5a",cancelButtonText:"  否  ",confirmButtonText:"  是  "}).then(d=>{d.isConfirmed&&(console.log("delete"),a.is_deleted=!0,g.put(o,{data:a}).then(_=>{console.log(_),location.reload()}).catch(_=>{console.log(_)}))}),console.log(a)},recoverDelete(a){const o=`${x}/api/${O}/admin/order/${a.id}`;a.is_deleted=!1,g.put(o,{data:a}).then(d=>{console.log(d),location.reload(),console.log("Rocover Delete")}).catch(d=>{console.log(d)})},confirmDelete(a){const o=`${x}/api/${O}/admin/order/${a}`;console.log(a),k.fire({title:"確認永久刪除該訂單?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#566b5a",cancelButtonText:"  否  ",confirmButtonText:"  是  "}).then(d=>{d.isConfirmed&&g.delete(o).then(()=>{location.reload()}).catch(_=>{console.log(_)})})},deleteAllOrders(){k.fire({title:"確認永久刪除全部訂單?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#566b5a",cancelButtonText:"  否  ",confirmButtonText:"  是  "}).then(a=>{a.isConfirmed&&console.log("刪除全部訂單")})},openModal(a){this.modalData={...a},this.modalProducts=Object.values(a.products),this.orderStatus=a.orderStatus}},mounted(){this.getAllOrders()}},Me={class:"container px-10 pt-10 text-start"},Pe=e("h1",{class:"fs-3 mb-4"},"訂單管理",-1),Ce=e("nav",null,[e("div",{class:"nav nav-tabs border-button border-3",id:"nav-tab",role:"tablist"},[e("button",{class:"nav-link active w-10",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#allOrders",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true"},"全部訂單"),e("button",{class:"nav-link w-10",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#unpaid",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false"},"未付款"),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#paid",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},"已付款"),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#delete",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},"已刪除"),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#done",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"},"已完成")])],-1),Be={class:"tab-content m-3",id:"nav-tabContent"},Ae={class:"tab-pane fade show active",id:"allOrders",role:"tabpanel","aria-labelledby":"nav-home-tab",tabindex:"0"},Ee={class:"accordion",id:"accordionPanelsStayOpenExample"},Ve={class:"tab-pane fade",id:"unpaid",role:"tabpanel","aria-labelledby":"nav-profile-tab",tabindex:"0"},Ue={class:"accordion",id:"accordionPanelsStayOpenExample"},Te={class:"tab-pane fade",id:"paid",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},Ie={class:"accordion",id:"accordionPanelsStayOpenExample"},je={class:"tab-pane fade",id:"delete",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},Ne={class:"accordion",id:"accordionPanelsStayOpenExample"},Re={class:"tab-pane fade",id:"done",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},Le={class:"accordion",id:"accordionPanelsStayOpenExample"},qe={class:"modal fade rounded-2",id:"adOrderModal","data-bs-keyboard":"false",tabindex:"-1","aria-hidden":"true"},ze={class:"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"},Fe={class:"modal-content"},$e=e("div",{class:"modal-header"},[e("h1",{class:"modal-title fs-4 ms-2",id:"staticBackdropLabel"},"訂單詳細資料"),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Qe={class:"modal-body"},Ge={class:""},He={class:"p-10 d-flex justify-content-center",style:{"z-index":"10"}},Je=H('<div class=""><input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" checked disabled><label class="btn btn-outline-primary border-2 rounded-circle" for="btncheck1"><i class="bi bi-check-lg fs-2 text-light"></i></label><p class="mt-3 fs-4">收到訂單</p></div>',1),Ke={class:""},We=["disabled"],Xe=e("label",{class:"btn btn-outline-primary border-2 rounded-circle",for:"btncheck2"},[e("i",{class:"bi bi-check-lg fs-2 text-light"})],-1),Ye=e("p",{class:"mt-3 fs-4"},"製作中",-1),Ze={class:""},et=["disabled"],tt=e("i",{class:"bi bi-check-lg fs-2 text-light"},null,-1),st=[tt],ot=e("p",{class:"mt-3 fs-4"},"已出貨",-1),at={class:""},dt=["disabled"],lt=e("i",{class:"bi bi-check-lg fs-2 text-light"},null,-1),nt=[lt],it=e("p",{class:"mt-3 fs-4"},"已完成",-1),ct={class:""},rt=e("h3",{class:"text-center"},"客戶資料",-1),bt={class:"border border-light text-start w-75 mx-auto"},_t={class:"m-2"},ut={class:"m-2"},ht={class:"m-2"},pt={class:"m-2"},mt=e("label",{for:"payState",class:"fs-5 text-primary m-2"},"付款狀態：",-1),ft=["disabled"],gt=e("option",{value:!1},"未付款",-1),vt=e("option",{value:!0},"已付款",-1),yt=[gt,vt],xt=e("h3",{class:"mb-3 mt-6"},"訂單商品",-1),Ot={class:"table align-middle border-primary"},kt=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"text-primary fw-medium"},"商品資訊"),e("th",{scope:"col",class:"text-primary fw-medium"},"數量"),e("th",{scope:"col",class:"text-primary fw-medium"},"價格"),e("th",{scope:"col",class:"text-primary fw-medium"})])],-1),St={scope:"row",class:"py-4"},wt={class:"card border-0 h-10",style:{"max-width":"540px"}},Dt={class:"row g-0 align-items-center"},Mt={class:"col-md-4"},Pt={class:"ratio ratio-1x1"},Ct=["src"],Bt={class:"col-md-8"},At={class:"card-body"},Et={class:"fs-6 card-title text-primary fw-medium"},Vt={class:"text-start fw-normal"},Ut={class:"py-4"},Tt=["onUpdate:modelValue"],It={class:"py-4 text-primary"},jt={class:"d-flex justify-content-between mx-4 my-5"},Nt={class:"fs-4"},Rt={key:0,class:"ms-2 fs-5 badge rounded-pill text-bg-warning"},Lt={class:"fs-4 me-4"},qt={class:"modal-footer"},zt=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function Ft(a,o,d,_,t,i){var p,m,f,b,P,C,B,A,E,V,U,T,I,j,N,R,L,q,z;const s=J("Accordion");return c(),r(S,null,[e("div",Me,[Pe,Ce,e("div",Be,[e("div",Ae,[e("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=(...n)=>i.deleteAllOrders&&i.deleteAllOrders(...n))},"刪除全部訂單"),e("div",Ee,[v(s,{orders:t.allOrders,openModal:i.openModal,deleteOrder:i.deleteOrder},null,8,["orders","openModal","deleteOrder"])])]),e("div",Ve,[e("div",Ue,[v(s,{orders:t.unpaidOrders,openModal:i.openModal,deleteOrder:i.deleteOrder},null,8,["orders","openModal","deleteOrder"])])]),e("div",Te,[e("div",Ie,[v(s,{orders:t.paidOrders,openModal:i.openModal,deleteOrder:i.deleteOrder},null,8,["orders","openModal","deleteOrder"])])]),e("div",je,[e("div",Ne,[v(s,{orders:t.deletedOrders,openModal:i.openModal,deleteOrder:i.deleteOrder,confirmDelete:i.confirmDelete},null,8,["orders","openModal","deleteOrder","confirmDelete"])])]),e("div",Re,[e("div",Le,[v(s,{orders:t.doneOrders,openModal:i.openModal,deleteOrder:i.deleteOrder},null,8,["orders","openModal","deleteOrder"])])])])]),e("div",qe,[e("div",ze,[e("div",Fe,[$e,e("div",Qe,[e("div",Ge,[e("div",He,[Je,e("div",{class:u([(p=t.orderStatus)!=null&&p.making?"bg-primary":"bg-light","mt-5"]),style:{height:"10px",width:"20%"}},null,2),e("div",Ke,[y(e("input",{type:"checkbox",class:"btn-check",id:"btncheck2",autocomplete:"off","onUpdate:modelValue":o[1]||(o[1]=n=>t.orderStatus.making=n),disabled:(m=t.orderStatus)==null?void 0:m.sendProduct},null,8,We),[[w,t.orderStatus.making]]),Xe,Ye]),e("div",{class:u(["mt-5",(f=t.orderStatus)!=null&&f.sendProduct?"bg-primary":"bg-light"]),style:{height:"10px",width:"20%"}},null,2),e("div",Ze,[y(e("input",{type:"checkbox",class:"btn-check",id:"btncheck3",autocomplete:"off","onUpdate:modelValue":o[2]||(o[2]=n=>t.orderStatus.sendProduct=n),disabled:!((b=t.orderStatus)!=null&&b.making)||((P=t.orderStatus)==null?void 0:P.done)},null,8,et),[[w,t.orderStatus.sendProduct]]),e("label",{class:u(["btn btn-outline-primary border-2 rounded-circle",t.orderStatus.making?"":"btn-outline-light"]),for:"btncheck3"},st,2),ot]),e("div",{class:u(["mt-5",t.orderStatus.done?"bg-primary":"bg-light"]),style:{height:"10px",width:"20%"}},null,2),e("div",at,[y(e("input",{type:"checkbox",class:"btn-check",id:"btncheck4",autocomplete:"off","onUpdate:modelValue":o[3]||(o[3]=n=>t.orderStatus.done=n),disabled:!t.modalData.is_paid||!t.orderStatus.sendProduct},null,8,dt),[[w,t.orderStatus.done]]),e("label",{class:u(["btn border-2 rounded-circle",[t.modalData.is_paid&&t.orderStatus.sendProduct?"btn-outline-primary":"btn-outline-light"]]),for:"btncheck4"},nt,2),it])])]),e("div",ct,[rt,e("div",bt,[e("h5",_t,"客戶姓名："+l((B=(C=t.modalData)==null?void 0:C.user)==null?void 0:B.name),1),e("h5",ut,"客戶地址："+l((E=(A=t.modalData)==null?void 0:A.user)==null?void 0:E.address),1),e("h5",ht,"客戶Email："+l((U=(V=t.modalData)==null?void 0:V.user)==null?void 0:U.email),1),e("h5",pt,"客戶電話："+l((I=(T=t.modalData)==null?void 0:T.user)==null?void 0:I.tel),1),mt,y(e("select",{class:"form-select d-inline w-25 fs-5",id:"payState","aria-label":"付款狀態","onUpdate:modelValue":o[4]||(o[4]=n=>t.modalData.is_paid=n),disabled:t.orderStatus.done},yt,8,ft),[[G,t.modalData.is_paid]]),(j=t.modalData)!=null&&j.is_deleted?(c(),r("button",{key:0,type:"button",class:"d-flex mx-1 my-1 btn btn-danger","data-bs-target":"#adOrderModal","data-bs-dismiss":"modal",onClick:o[5]||(o[5]=n=>i.recoverDelete(t.modalData))}," 回復刪除 ")):h("",!0)])]),xt,e("table",Ot,[kt,e("tbody",null,[(c(!0),r(S,null,D(t.modalProducts,n=>(c(),r("tr",{key:n.id},[e("th",St,[e("div",wt,[e("div",Dt,[e("div",Mt,[e("div",Pt,[e("img",{src:n.product.imageUrl,class:"img-fluid object-fit-cover",alt:"..."},null,8,Ct)])]),e("div",Bt,[e("div",At,[e("h5",Et,l(n.product.title),1),e("small",Vt,l(n.product.category),1)])])])])]),e("td",Ut,[y(e("input",{type:"number",class:"p-2 w-25",min:"1","onUpdate:modelValue":$=>n.qty=$,disabled:""},null,8,Tt),[[K,n.qty]])]),e("td",It,"NT$ "+l(n.total),1)]))),128))])]),e("div",jt,[e("p",Nt,[M("優惠券： "),(N=t.modalData)!=null&&N.products?(c(),r("span",Rt,l((q=(L=Object.values((R=t.modalData)==null?void 0:R.products)[0])==null?void 0:L.coupon)==null?void 0:q.code),1)):h("",!0)]),e("p",Lt,"總金額："+l(parseInt((z=t.modalData)==null?void 0:z.total)),1)])]),e("div",qt,[zt,e("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:o[6]||(o[6]=n=>i.updateOrder(t.modalData))},"確認修改")])])])])],64)}const Gt=F(De,[["render",Ft]]);export{Gt as default};
