import{_ as I,o as n,c as i,r as x,e,d as k,t as o,x as b,i as m,F as y,f as z,a as F,m as G,b as f,g,P as v,O as H,l as J,j as K,v as Q}from"./index-vQIT2nmS.js";import"./sweetalert2.all-l2V7mD8V.js";import{o as q}from"./orderStore-D7SuOr4r.js";const R={props:["orders","openModal","deleteOrder","confirmDelete"],data(){return{collapseItem:""}},methods:{toggleCollapse(a){this.$refs.collape.forEach(l=>{l.attributes.id.value==a&&l.classList.toggle("hide")})}}},W=["onClick"],X=["data-bs-target"],Y={key:0,class:"ms-10 badge rounded-pill text-bg-primary fs-8"},Z={key:1,class:"ms-10 badge rounded-pill text-bg-danger fs-8"},ee=["id"],te={class:"accordion-body"},se={class:"ms-4 d-flex align-items-center"},ae={class:"badge rounded-pill text-bg-light fw-medium text-grey66 fs-8 m-2"},oe={class:"fs-6 fw-medium text-dark"},de={class:"me-7 d-flex text-grey99"},le={class:"mx-3"},ne=e("div",{class:"my-4 border border-1"},null,-1),ie={class:"d-flex justify-content-between mx-4 text-grey66"},ce={class:""},re={class:"ms-2 fs-8 badge rounded-pill text-bg-secondary fw-light"},be={class:"text-primary fw-medium"},me=e("div",{class:"my-4 border border-3"},null,-1),pe={class:"mt-4"},_e={class:"fs-6 text-primary"},ue={class:"m-2"},he={class:"m-2"},fe={class:"m-2"},ge={class:"m-2"},ye={class:"m-2"},ve=["onClick"],xe=["onClick"],ke=["onClick"];function Oe(a,l,p,L,t,r){return n(!0),i(y,null,x(p.orders,s=>{var _,u,h;return n(),i("div",{class:"accordion-item my-5",key:s.id},[e("h2",{class:"accordion-header",onClick:c=>r.toggleCollapse(s.id)},[e("button",{class:"accordion-button fs-6",type:"button","data-bs-toggle":"collapse","data-bs-target":`#${s.id}`,"aria-expanded":"true"},[k(" 訂單編號："+o(s.create_at)+" ",1),e("span",{class:b([s.is_paid?"text-bg-primary":"text-bg-danger","ms-10 badge rounded-pill text-bg-primary fs-8"])},o(s.is_paid?"已付款":"未付款"),3),(_=s==null?void 0:s.orderStatus)!=null&&_.done?(n(),i("span",Y,"已完成")):m("",!0),s!=null&&s.is_deleted?(n(),i("span",Z,"已刪除")):m("",!0)],8,X)],8,W),e("div",{id:s.id,class:"accordion-collapse collapse show",ref_for:!0,ref:"collape"},[e("div",te,[(n(!0),i(y,null,x(Object.values(s.products),c=>(n(),i("div",{class:"border-bottom border-light d-flex align-items-center justify-content-between my-2",key:c.id},[e("div",se,[e("span",ae,o(c.product.category),1),e("h3",oe,o(c.product.title),1)]),e("div",de,[e("span",le,"數量："+o(c.qty),1),e("p",null,"總價："+o(c.total),1)])]))),128)),ne,e("div",ie,[e("p",ce,[k(" 優惠券： "),e("span",re,o((h=(u=Object.values(s.products)[0])==null?void 0:u.coupon)==null?void 0:h.code),1)]),e("p",be,"總金額："+o(parseInt(s.total)),1)]),me,e("div",pe,[e("div",_e,[e("p",ue,"客戶姓名："+o(s.user.name),1),e("p",he,"客戶電話："+o(s.user.tel),1),e("p",fe,"客戶地址："+o(s.user.address),1),e("p",ge,"客戶Email："+o(s.user.email),1),e("p",ye,"備註："+o(s.message),1),s.is_deleted?m("",!0):(n(),i("button",{key:0,type:"button",class:"mx-4 btn btn-deco","data-bs-target":"#adOrderModal",onClick:c=>p.deleteOrder(s)}," 刪除訂單",8,ve)),e("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#adOrderModal",onClick:c=>p.openModal(s)}," 修改訂單 ",8,xe),s.is_deleted?(n(),i("button",{key:1,class:"btn btn-danger mx-4",onClick:z(c=>p.confirmDelete(s.id),["prevent"])}," 確認永久刪除訂單 ",8,ke)):m("",!0)])])])],8,ee)])}),128)}const we=I(R,[["render",Oe]]),Se={components:{Accordion:we},data(){return{modalData:{},modalProducts:[],orderStatus:{getOrder:!0,making:!1,sendProduct:!1,done:!1}}},computed:{...F(q,["allOrders","unpaidOrders","paidOrders","deletedOrders","doneOrders"])},methods:{...G(q,["getAllOrders","updateOrder","deleteOrder","recoverDelete","confirmDelete","deleteAllOrders"]),openModal(a){this.modalData={...a},this.modalProducts=Object.values(a.products),this.orderStatus=a.orderStatus}},mounted(){this.getAllOrders()}},De={class:"container text-start px-3 px-lg-10 mt-8 mt-lg-10 mb-7 mb-lg-10"},Me=e("h1",{class:"fs-3 mb-4 fw-bold"},"訂單管理",-1),Ce=e("nav",null,[e("div",{class:"nav nav-tabs border-button border-3",id:"nav-tab",role:"tablist"},[e("button",{class:"nav-link active w-10",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#allOrders",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true"}," 全部訂單 "),e("button",{class:"nav-link w-10",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#unpaid",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}," 未付款 "),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#paid",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}," 已付款 "),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#delete",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}," 已刪除 "),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#done",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}," 已完成 ")])],-1),Pe={class:"tab-content m-3",id:"nav-tabContent"},Ve={class:"tab-pane fade show active",id:"allOrders",role:"tabpanel","aria-labelledby":"nav-home-tab",tabindex:"0"},je={class:"accordion",id:"accordionPanelsStayOpenExample"},Ae={class:"tab-pane fade",id:"unpaid",role:"tabpanel","aria-labelledby":"nav-profile-tab",tabindex:"0"},Ee={class:"accordion",id:"accordionPanelsStayOpenExample"},Ue={class:"tab-pane fade",id:"paid",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},Ne={class:"accordion",id:"accordionPanelsStayOpenExample"},$e={class:"tab-pane fade",id:"delete",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},Be={class:"accordion",id:"accordionPanelsStayOpenExample"},qe={class:"tab-pane fade",id:"done",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},Ie={class:"accordion",id:"accordionPanelsStayOpenExample"},Le={class:"modal fade rounded-2",id:"adOrderModal","data-bs-keyboard":"false",tabindex:"-1","aria-hidden":"true"},Te={class:"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"},ze={class:"modal-content"},Fe=e("div",{class:"modal-header bg-primary"},[e("h1",{class:"modal-title h5 fw-medium text-white ps-3 py-2",id:"staticBackdropLabel"}," 訂單詳細資料 "),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ge={class:"modal-body"},He={class:""},Je={class:"p-10 d-flex justify-content-center",style:{"z-index":"10"}},Ke=J('<div class=""><input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" checked disabled><label class="btn btn-outline-primary border-2 rounded-circle" for="btncheck1"><i class="bi bi-check-lg fs-2 text-light"></i></label><p class="mt-3 fs-6">收到訂單</p></div>',1),Qe={class:""},Re=["disabled"],We=e("label",{class:"btn btn-outline-primary border-2 rounded-circle",for:"btncheck2"},[e("i",{class:"bi bi-check-lg fs-2 text-light"})],-1),Xe=e("p",{class:"mt-3 fs-6"},"製作中",-1),Ye={class:""},Ze=["disabled"],et=e("i",{class:"bi bi-check-lg fs-2 text-light"},null,-1),tt=[et],st=e("p",{class:"mt-3 fs-6"},"已出貨",-1),at={class:""},ot=["disabled"],dt=e("i",{class:"bi bi-check-lg fs-2 text-light"},null,-1),lt=[dt],nt=e("p",{class:"mt-3 fs-6"},"已完成",-1),it={class:"mb-9"},ct=e("h3",{class:"h4 text-center mb-3 fw-medium"},"客戶資料",-1),rt={class:"border border-light text-start w-75 mx-auto p-2"},bt={class:"fs-6 text-primary m-3"},mt={class:"fs-6 text-primary m-3"},pt={class:"fs-6 text-primary m-3"},_t={class:"fs-6 text-primary m-3"},ut=e("label",{for:"payState",class:"fs-6 text-primary m-3"},"付款狀態：",-1),ht=["disabled"],ft=e("option",{value:!1},"未付款",-1),gt=e("option",{value:!0},"已付款",-1),yt=[ft,gt],vt=e("h3",{class:"h4 text-center mb-3 fw-medium"},"訂單商品",-1),xt={class:"table align-middle border-primary"},kt=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"text-primary fw-medium"},"商品資訊"),e("th",{scope:"col",class:"text-primary fw-medium"},"數量"),e("th",{scope:"col",class:"text-primary fw-medium"},"價格"),e("th",{scope:"col",class:"text-primary fw-medium"})])],-1),Ot={scope:"row",class:"py-4"},wt={class:"card border-0 h-10",style:{"max-width":"540px"}},St={class:"row g-0 align-items-center"},Dt={class:"col-md-4"},Mt={class:"ratio ratio-1x1"},Ct=["src"],Pt={class:"col-md-8"},Vt={class:"card-body"},jt={class:"fs-6 card-title text-primary fw-medium"},At={class:"text-start fw-normal"},Et={class:"py-4"},Ut=["onUpdate:modelValue"],Nt={class:"py-4 text-primary"},$t={class:"d-flex justify-content-between mx-4 my-5"},Bt={class:"fs-6"},qt={key:0,class:"ms-2 fs-6 badge rounded-pill text-bg-deco"},It={class:"fs-5 me-4 text-primary fw-bold"},Lt={class:"modal-footer"},Tt=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function zt(a,l,p,L,t,r){var _,u,h,c,O,w,S,D,M,C,P,V,j,A,E,U,N,$,B;const s=K("Accordion");return n(),i(y,null,[e("div",De,[Me,Ce,e("div",Pe,[e("div",Ve,[e("button",{type:"button",class:"btn btn-deco",onClick:l[0]||(l[0]=(...d)=>a.deleteAllOrders&&a.deleteAllOrders(...d))},"刪除全部訂單"),e("div",je,[f(s,{orders:a.allOrders,openModal:r.openModal,deleteOrder:a.deleteOrder},null,8,["orders","openModal","deleteOrder"])])]),e("div",Ae,[e("div",Ee,[f(s,{orders:a.unpaidOrders,openModal:r.openModal,deleteOrder:a.deleteOrder},null,8,["orders","openModal","deleteOrder"])])]),e("div",Ue,[e("div",Ne,[f(s,{orders:a.paidOrders,openModal:r.openModal,deleteOrder:a.deleteOrder},null,8,["orders","openModal","deleteOrder"])])]),e("div",$e,[e("div",Be,[f(s,{orders:a.deletedOrders,openModal:r.openModal,deleteOrder:a.deleteOrder,confirmDelete:a.confirmDelete},null,8,["orders","openModal","deleteOrder","confirmDelete"])])]),e("div",qe,[e("div",Ie,[f(s,{orders:a.doneOrders,openModal:r.openModal,deleteOrder:a.deleteOrder},null,8,["orders","openModal","deleteOrder"])])])])]),e("div",Le,[e("div",Te,[e("div",ze,[Fe,e("div",Ge,[e("div",He,[e("div",Je,[Ke,e("div",{class:b([(_=t.orderStatus)!=null&&_.making?"bg-primary":"bg-light","mt-5"]),style:{height:"10px",width:"20%"}},null,2),e("div",Qe,[g(e("input",{type:"checkbox",class:"btn-check",id:"btncheck2",autocomplete:"off","onUpdate:modelValue":l[1]||(l[1]=d=>t.orderStatus.making=d),disabled:(u=t.orderStatus)==null?void 0:u.sendProduct},null,8,Re),[[v,t.orderStatus.making]]),We,Xe]),e("div",{class:b(["mt-5",(h=t.orderStatus)!=null&&h.sendProduct?"bg-primary":"bg-light"]),style:{height:"10px",width:"20%"}},null,2),e("div",Ye,[g(e("input",{type:"checkbox",class:"btn-check",id:"btncheck3",autocomplete:"off","onUpdate:modelValue":l[2]||(l[2]=d=>t.orderStatus.sendProduct=d),disabled:!((c=t.orderStatus)!=null&&c.making)||((O=t.orderStatus)==null?void 0:O.done)},null,8,Ze),[[v,t.orderStatus.sendProduct]]),e("label",{class:b(["btn btn-outline-primary border-2 rounded-circle",t.orderStatus.making?"":"btn-outline-light"]),for:"btncheck3"},tt,2),st]),e("div",{class:b(["mt-5",t.orderStatus.done?"bg-primary":"bg-light"]),style:{height:"10px",width:"20%"}},null,2),e("div",at,[g(e("input",{type:"checkbox",class:"btn-check",id:"btncheck4",autocomplete:"off","onUpdate:modelValue":l[3]||(l[3]=d=>t.orderStatus.done=d),disabled:!t.modalData.is_paid||!t.orderStatus.sendProduct},null,8,ot),[[v,t.orderStatus.done]]),e("label",{class:b(["btn border-2 rounded-circle",[t.modalData.is_paid&&t.orderStatus.sendProduct?"btn-outline-primary":"btn-outline-light"]]),for:"btncheck4"},lt,2),nt])])]),e("div",it,[ct,e("div",rt,[e("p",bt,"客戶姓名："+o((S=(w=t.modalData)==null?void 0:w.user)==null?void 0:S.name),1),e("p",mt,"客戶地址："+o((M=(D=t.modalData)==null?void 0:D.user)==null?void 0:M.address),1),e("p",pt,"客戶Email："+o((P=(C=t.modalData)==null?void 0:C.user)==null?void 0:P.email),1),e("p",_t,"客戶電話："+o((j=(V=t.modalData)==null?void 0:V.user)==null?void 0:j.tel),1),ut,g(e("select",{class:"form-select d-inline w-25 fs-6",id:"payState","aria-label":"付款狀態","onUpdate:modelValue":l[4]||(l[4]=d=>t.modalData.is_paid=d),disabled:t.orderStatus.done},yt,8,ht),[[H,t.modalData.is_paid]]),(A=t.modalData)!=null&&A.is_deleted?(n(),i("button",{key:0,type:"button",class:"d-flex mx-1 my-1 btn btn-danger","data-bs-target":"#adOrderModal","data-bs-dismiss":"modal",onClick:l[5]||(l[5]=d=>a.recoverDelete(t.modalData))}," 回復刪除 ")):m("",!0)])]),vt,e("table",xt,[kt,e("tbody",null,[(n(!0),i(y,null,x(t.modalProducts,d=>(n(),i("tr",{key:d.id},[e("th",Ot,[e("div",wt,[e("div",St,[e("div",Dt,[e("div",Mt,[e("img",{src:d.product.imageUrl,class:"img-fluid object-fit-cover",alt:"..."},null,8,Ct)])]),e("div",Pt,[e("div",Vt,[e("h5",jt,o(d.product.title),1),e("small",At,o(d.product.category),1)])])])])]),e("td",Et,[g(e("input",{type:"number",class:"p-2 w-25",min:"1","onUpdate:modelValue":T=>d.qty=T,disabled:""},null,8,Ut),[[Q,d.qty]])]),e("td",Nt,"NT$ "+o(d.total),1)]))),128))])]),e("div",$t,[e("p",Bt,[k(" 優惠券： "),(E=t.modalData)!=null&&E.products?(n(),i("span",qt,o(($=(N=Object.values((U=t.modalData)==null?void 0:U.products)[0])==null?void 0:N.coupon)==null?void 0:$.code),1)):m("",!0)]),e("p",It,"總金額："+o(parseInt((B=t.modalData)==null?void 0:B.total)),1)])]),e("div",Lt,[Tt,e("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:l[6]||(l[6]=d=>a.updateOrder(t.modalData))}," 確認修改 ")])])])])],64)}const Jt=I(Se,[["render",zt]]);export{Jt as default};
