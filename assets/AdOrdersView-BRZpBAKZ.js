import{_ as T,o as r,c,r as E,b as e,e as A,t as i,u as m,i as y,F as S,f as M,a as Q,m as H,z as b,d as h,g as C,P as U,O as K,l as W,j as Y,v as Z}from"./index-BYbK6qiU.js";import{S as D}from"./sweetalert2.all-_3wjqQzu.js";import{l as G}from"./lineNotifyStore-kle361m3.js";const ee={props:["orders","openModal","deleteOrder","confirmDelete"],data(){return{}},methods:{toggleCollapse(a){this.$refs.collape.forEach(t=>{t.attributes.id.value==a&&t.classList.toggle("hide")})}}},te=["onClick"],se=["data-bs-target"],ae={key:0,class:"ms-5 badge rounded-pill text-bg-primary fs-8 fw-light"},oe={key:1,class:"ms-5 badge rounded-pill text-bg-danger fs-8 fw-light"},ne=["id"],le={class:"accordion-body p-1"},de={class:"ms-3 d-flex align-items-center"},ie={class:"fw-medium text-grey66 fs-8 m-2"},re={class:"fs-6 fw-medium text-dark"},ce={class:"me-7 d-flex text-grey99"},ue={class:"mx-3"},pe=e("div",{class:"my-4 border border-1"},null,-1),_e={class:"d-flex justify-content-between mx-4 text-grey66"},he={class:"ms-1"},me={class:"ms-2 fs-8 text-secondary fw-medium"},be={class:"text-primary fw-medium"},ge=e("div",{class:"my-4 border"},null,-1),fe={class:"mb-4"},ve={class:"fs-6 text-primary ms-3"},ye={class:"mx-2 mb-3"},xe={class:"mx-2 mb-3"},Oe={class:"mx-2 mb-3"},ke={class:"mx-2 mb-3"},Pe={class:"mx-2 mb-3"},we={class:"d-flex justify-content-end"},Ce=["onClick"],Se=["onClick"],De=["onClick"];function Me(a,t,o,u,s,l){return r(!0),c(S,null,E(o.orders,n=>{var _,v,x,O,k,P,w;return r(),c("div",{class:"accordion-item my-5 bg-white",key:n.id},[e("h2",{class:"accordion-header",onClick:p=>l.toggleCollapse(n.id)},[e("button",{class:"accordion-button fs-6 fw-bold bg-primary text-white",type:"button","data-bs-toggle":"collapse","data-bs-target":`#${n.id}`,"aria-expanded":"true"},[A(" 訂單編號："+i(n.create_at)+" ",1),e("span",{class:m([n.is_paid?"text-bg-primary":"text-bg-danger","ms-10 badge rounded-pill text-bg-primary fs-8 fw-light"])},i(n.is_paid?"已付款":"未付款"),3),(_=n==null?void 0:n.orderStatus)!=null&&_.done?(r(),c("span",ae,"已完成")):y("",!0),n!=null&&n.is_deleted?(r(),c("span",oe,"已刪除")):y("",!0)],8,se)],8,te),e("div",{id:n.id,class:"accordion-collapse collapse show",ref_for:!0,ref:"collape"},[e("div",le,[(r(!0),c(S,null,E(Object.values(n.products),p=>(r(),c("div",{class:"d-flex align-items-center justify-content-between my-1",key:p.id},[e("div",de,[e("span",ie,i(p.product.category)+" / ",1),e("h3",re,i(p.product.title),1)]),e("div",ce,[e("span",ue,"數量："+i(p.qty),1),e("p",null,"總價："+i(p.total),1)])]))),128)),pe,e("div",_e,[e("p",he,[A(" 優惠券： "),e("span",me,i((x=(v=Object.values(n.products)[0])==null?void 0:v.coupon)==null?void 0:x.code),1)]),e("p",be,"總金額：NT$ "+i((k=(O=Object.values(n.products)[0])==null?void 0:O.coupon)!=null&&k.discount_price?parseInt(n.total)-((w=(P=Object.values(n.products)[0])==null?void 0:P.coupon)==null?void 0:w.discount_price):parseInt(n.total)),1)]),ge,e("div",fe,[e("div",ve,[e("p",ye,"客戶姓名："+i(n.user.name),1),e("p",xe,"客戶電話："+i(n.user.tel),1),e("p",Oe,"客戶地址："+i(n.user.address),1),e("p",ke,"客戶Email："+i(n.user.email),1),e("p",Pe,"備註："+i(n.message),1),e("div",we,[n.is_deleted?y("",!0):(r(),c("button",{key:0,type:"button",class:"me-4 btn btn-deco","data-bs-target":"#adOrderModal",onClick:p=>o.deleteOrder(n)}," 刪除訂單",8,Ce)),e("button",{type:"button",class:"me-4 btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#adOrderModal",onClick:p=>o.openModal(n)}," 修改訂單 ",8,Se),n.is_deleted?(r(),c("button",{key:1,class:"btn btn-danger me-4",onClick:M(p=>o.confirmDelete(n.id),["prevent"])}," 確認永久刪除訂單 ",8,De)):y("",!0)])])])])],8,ne)])}),128)}const Ee=T(ee,[["render",Me]]),Ue={props:["pagination"],data(){return{}},methods:{updatePage(a){this.$emit("update-page",a)}},mounted(){}},Ae={"aria-label":"Page navigation "},Te={class:"cus-pagination list-unstyled mb-20 mb-lg-25"},Be=e("span",{class:"material-icons fs-8 p-1"}," navigate_before ",-1),Ve=[Be],Ne=["onClick"],Ie=e("span",{class:"material-icons fs-8 p-1"}," navigate_next ",-1),je=[Ie];function Le(a,t,o,u,s,l){return r(),c("nav",Ae,[e("ul",Te,[e("li",{class:m(["page-item text-center",{disabled:o.pagination.current_page===1}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=M(n=>l.updatePage(o.pagination.current_page-1),["prevent"]))},Ve)],2),(r(!0),c(S,null,E(o.pagination.total_pages,(n,_)=>(r(),c("li",{class:m(["page-item fs-8 text-center",{active:n===o.pagination.current_page}]),key:_},[e("a",{class:"page-link",href:"#",onClick:M(v=>l.updatePage(n),["prevent"])},i(n),9,Ne)],2))),128)),e("li",{class:m(["page-item text-center",{disabled:o.pagination.has_next===!1}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=M(n=>l.updatePage(o.pagination.current_page+1),["prevent"]))},je)],2)])])}const ze=T(Ue,[["render",Le]]);var Re={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",VITE_LINE_CLIENT_ID:"x9iTcS6m9Fdlz8XFfAbkqs",VITE_LINE_CLIENT_SECRET:"iGiOLRLmU2aNTDuObVQlcP5XzPYSbUzJ9gvUl4YvPzx",BASE_URL:"/greensheep/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:g,VITE_APP_API_NAME:f}=Re,$e={components:{Accordion:Ee,AdOrderPagination:ze},data(){return{allOrders:[],unpaidOrders:[],paidOrders:[],deletedOrders:[],doneOrders:[],pagination:{},allOrdersPage:[],nowOrders:[],modalData:{},modalProducts:[],orderStatus:{getOrder:!0,making:!1,sendProduct:!1,done:!1}}},computed:{...Q(G,["accessToken"]),paginations(){let a={};return this.nowOrders.length>10?(this.nowOrders.length%10?a.total_pages=Math.floor(this.nowOrders.length/10)+1:a.total_pages=Math.floor(this.nowOrders.length/10),a.has_next=!0):(a.total_pages=1,a.has_next=!1),a.current_page=1,a.has_pre=!1,a}},methods:{...H(G,["sendLineNotification","sendMakingNotification","sendDeliverNotification"]),getAllOrders(){this.allOrders=[],this.unpaidOrders=[],this.paidOrders=[],this.nowPage=[];const a=`${g}/api/${f}/admin/orders`;b.get(a).then(t=>{if(this.pagination=t.data.pagination,t.data.orders.forEach(o=>{this.allOrders.push(o),this.allOrdersPage.push(o)}),t.data.pagination.current_page<t.data.pagination.total_pages){const o=t.data.pagination.total_pages;for(let u=2;u<=o;u++)b.get(`${a}?page=${u}`).then(s=>{s.data.orders.forEach(l=>{this.allOrders.push(l)})}).catch(s=>{console.log(s)})}this.allOrders.forEach(o=>{o.orderStatus||(o.orderStatus={getOrder:!0,making:!1,sendProduct:!1,done:!1}),o.is_deleted?this.deletedOrders.push(o):o.is_paid?this.paidOrders.push(o):this.unpaidOrders.push(o),o.orderStatus.done&&this.doneOrders.push(o)})}).catch(t=>{console.log(t)})},updateOrder(a){const t=`${g}/api/${f}/admin/order/${a.id}`;a.orderStatus=this.orderStatus,console.log(a.orderStatus),a.orderStatus.making===!0&&a.orderStatus.sendProduct===!1&&console.log("111",this.accessToken),a.orderStatus.making===!0&&a.orderStatus.sendProduct===!0&&console.log("222"),b.put(t,{data:a}).then(()=>{D.fire({position:"top-end",icon:"success",title:"訂單修改成功",showConfirmButton:!1,toast:!0,timer:1500}),location.reload()}).catch(o=>{console.log(o)})},deleteOrder(a){const t=`${g}/api/${f}/admin/order/${a.id}`;D.fire({title:"是否刪除該訂單?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#566b5a",cancelButtonText:"  否  ",confirmButtonText:"  是  "}).then(o=>{o.isConfirmed&&(a.is_deleted=!0,b.put(t,{data:a}).then(()=>{location.reload()}).catch(u=>{console.log(u)}))})},recoverDelete(a){const t=`${g}/api/${f}/admin/order/${a.id}`;a.is_deleted=!1,b.put(t,{data:a}).then(()=>{location.reload()}).catch(o=>{console.log(o)})},confirmDelete(a){const t=`${g}/api/${f}/admin/order/${a}`;D.fire({title:"確認永久刪除該訂單?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#566b5a",cancelButtonText:"  否  ",confirmButtonText:"  是  "}).then(o=>{o.isConfirmed&&b.delete(t).then(()=>{location.reload()}).catch(u=>{console.log(u)})})},deleteAllOrders(){const a=`${g}/api/${f}/admin/orders/all`;D.fire({title:"確認永久刪除全部訂單?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#566b5a",cancelButtonText:"  否  ",confirmButtonText:"  是  "}).then(t=>{t.isConfirmed&&b.delete(a).then(()=>{location.reload()}).catch(o=>{console.log(o)})})},changeCategory(a){this.nowOrders=a},changePage(a){this.allOrdersPage=[];const t=`${g}/api/${f}/orders?page=${a}`;b.get(t).then(o=>{o.data.orders.forEach(u=>{this.allOrdersPage.push(u)}),this.pagination=o.data.pagination}).catch(o=>{console.log(o)})},openModal(a){this.modalData={...a},this.modalProducts=Object.values(a.products),this.orderStatus={...a.orderStatus}}},mounted(){this.getAllOrders(),console.log(this.accessToken)}},qe={class:"container text-start px-3 px-lg-10 mt-8 mt-lg-10 mb-7 mb-lg-10"},Fe=e("h1",{class:"fs-3 mb-4 fw-bold"},"訂單管理",-1),Xe={class:"nav nav-tabs border-button border-3",id:"nav-tab",role:"tablist"},Ye={class:"tab-content m-3",id:"nav-tabContent"},Ge={class:"tab-pane fade show active",id:"allOrders",role:"tabpanel","aria-labelledby":"nav-home-tab",tabindex:"0"},Je={class:"accordion",id:"accordionPanelsStayOpenExample"},Qe={class:"tab-pane fade",id:"unpaid",role:"tabpanel","aria-labelledby":"nav-profile-tab",tabindex:"0"},He={class:"accordion",id:"accordionPanelsStayOpenExample"},Ke={class:"tab-pane fade",id:"paid",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},We={class:"accordion",id:"accordionPanelsStayOpenExample"},Ze={class:"tab-pane fade",id:"delete",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},et={class:"accordion",id:"accordionPanelsStayOpenExample"},tt={class:"tab-pane fade",id:"done",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},st={class:"accordion",id:"accordionPanelsStayOpenExample"},at={class:"modal fade rounded-2",id:"adOrderModal","data-bs-keyboard":"false",tabindex:"-1","aria-hidden":"true"},ot={class:"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"},nt={class:"modal-content"},lt=e("div",{class:"modal-header bg-primary"},[e("h1",{class:"modal-title h5 fw-medium text-white ps-3 py-2",id:"staticBackdropLabel"}," 訂單詳細資料 "),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),dt={class:"modal-body"},it={class:""},rt={class:"p-10 d-flex justify-content-center",style:{"z-index":"10"}},ct=W('<div class=""><input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" checked disabled><label class="btn btn-outline-primary border-2 rounded-circle" for="btncheck1"><i class="bi bi-check-lg fs-2 text-light"></i></label><p class="mt-3 fs-6">收到訂單</p></div>',1),ut={class:""},pt=["disabled"],_t=e("label",{class:"btn btn-outline-primary border-2 rounded-circle",for:"btncheck2"},[e("i",{class:"bi bi-check-lg fs-2 text-light"})],-1),ht=e("p",{class:"mt-3 fs-6"},"製作中",-1),mt={class:""},bt=["disabled"],gt=e("i",{class:"bi bi-check-lg fs-2 text-light"},null,-1),ft=[gt],vt=e("p",{class:"mt-3 fs-6"},"已出貨",-1),yt={class:""},xt=["disabled"],Ot=e("i",{class:"bi bi-check-lg fs-2 text-light"},null,-1),kt=[Ot],Pt=e("p",{class:"mt-3 fs-6"},"已完成",-1),wt={class:"mb-9"},Ct=e("h3",{class:"h4 text-center mb-3 fw-medium"},"客戶資料",-1),St={class:"border border-light text-start w-75 mx-auto p-2"},Dt={class:"fs-6 text-primary m-3"},Mt={class:"fs-6 text-primary m-3"},Et={class:"fs-6 text-primary m-3"},Ut={class:"fs-6 text-primary m-3"},At=e("label",{for:"payState",class:"fs-6 text-primary m-3"},"付款狀態：",-1),Tt=["disabled"],Bt=e("option",{value:!1},"未付款",-1),Vt=e("option",{value:!0},"已付款",-1),Nt=[Bt,Vt],It=e("h3",{class:"h4 text-center mb-3 fw-medium"},"訂單商品",-1),jt={class:"table align-middle border-primary"},Lt=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"text-primary fw-medium"},"商品資訊"),e("th",{scope:"col",class:"text-primary fw-medium"},"數量"),e("th",{scope:"col",class:"text-primary fw-medium"},"價格"),e("th",{scope:"col",class:"text-primary fw-medium"})])],-1),zt={scope:"row",class:"py-4"},Rt={class:"card border-0 h-10",style:{"max-width":"540px"}},$t={class:"row g-0 align-items-center"},qt={class:"col-md-4"},Ft={class:"ratio ratio-1x1"},Xt=["src"],Yt={class:"col-md-8"},Gt={class:"card-body"},Jt={class:"fs-6 card-title text-primary fw-medium"},Qt={class:"text-start fw-normal"},Ht={class:"py-4"},Kt=["onUpdate:modelValue"],Wt={class:"py-4 text-primary"},Zt={class:"d-flex justify-content-between mx-4 my-5"},es={class:"fs-6"},ts={key:0,class:"ms-2 fs-6 badge rounded-pill text-bg-deco"},ss={class:"fs-5 me-4 text-primary fw-bold"},as={class:"modal-footer"},os=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function ns(a,t,o,u,s,l){var v,x,O,k,P,w,p,B,V,N,I,j,L,z,R,$,q,F,X;const n=Y("Accordion"),_=Y("AdOrderPagination");return r(),c(S,null,[e("div",qe,[Fe,e("nav",null,[e("div",Xe,[e("button",{class:"nav-link active w-10",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#allOrders",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true",onClick:t[0]||(t[0]=d=>l.changeCategory(s.allOrders))}," 全部訂單 "),e("button",{class:"nav-link w-10",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#unpaid",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false",onClick:t[1]||(t[1]=d=>l.changeCategory(s.unpaidOrders))}," 未付款 "),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#paid",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false",onClick:t[2]||(t[2]=d=>l.changeCategory(s.paidOrders))}," 已付款 "),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#delete",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false",onClick:t[3]||(t[3]=d=>l.changeCategory(s.deletedOrders))}," 已刪除 "),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#done",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false",onClick:t[4]||(t[4]=d=>l.changeCategory(s.doneOrders))}," 已完成 ")])]),e("div",Ye,[e("div",Ge,[e("button",{type:"button",class:"btn btn-deco",onClick:t[5]||(t[5]=(...d)=>l.deleteAllOrders&&l.deleteAllOrders(...d))},"刪除全部訂單"),e("div",Je,[h(n,{orders:s.allOrdersPage,openModal:l.openModal,deleteOrder:l.deleteOrder,confirmDelete:l.confirmDelete},null,8,["orders","openModal","deleteOrder","confirmDelete"]),h(_,{pagination:s.pagination,onUpdatePage:l.changePage},null,8,["pagination","onUpdatePage"])])]),e("div",Qe,[e("div",He,[h(n,{orders:s.unpaidOrders,openModal:l.openModal,deleteOrder:l.deleteOrder},null,8,["orders","openModal","deleteOrder"]),h(_,{pagination:l.paginations,onUpdatePage:l.changePage},null,8,["pagination","onUpdatePage"])])]),e("div",Ke,[e("div",We,[h(n,{orders:s.paidOrders,openModal:l.openModal,deleteOrder:l.deleteOrder},null,8,["orders","openModal","deleteOrder"]),h(_,{pagination:l.paginations,onUpdatePage:l.changePage},null,8,["pagination","onUpdatePage"])])]),e("div",Ze,[e("div",et,[h(n,{orders:s.deletedOrders,openModal:l.openModal,deleteOrder:l.deleteOrder,confirmDelete:l.confirmDelete},null,8,["orders","openModal","deleteOrder","confirmDelete"]),h(_,{pagination:l.paginations,onUpdatePage:l.changePage},null,8,["pagination","onUpdatePage"])])]),e("div",tt,[e("div",st,[h(n,{orders:s.doneOrders,openModal:l.openModal,deleteOrder:l.deleteOrder},null,8,["orders","openModal","deleteOrder"]),h(_,{pagination:l.paginations,onUpdatePage:l.changePage},null,8,["pagination","onUpdatePage"])])])])]),e("div",at,[e("div",ot,[e("div",nt,[lt,e("div",dt,[e("div",it,[e("div",rt,[ct,e("div",{class:m([(v=s.orderStatus)!=null&&v.making?"bg-primary":"bg-light","mt-5"]),style:{height:"10px",width:"20%"}},null,2),e("div",ut,[C(e("input",{type:"checkbox",class:"btn-check",id:"btncheck2",autocomplete:"off","onUpdate:modelValue":t[6]||(t[6]=d=>s.orderStatus.making=d),disabled:(x=s.orderStatus)==null?void 0:x.sendProduct},null,8,pt),[[U,s.orderStatus.making]]),_t,ht]),e("div",{class:m(["mt-5",(O=s.orderStatus)!=null&&O.sendProduct?"bg-primary":"bg-light"]),style:{height:"10px",width:"20%"}},null,2),e("div",mt,[C(e("input",{type:"checkbox",class:"btn-check",id:"btncheck3",autocomplete:"off","onUpdate:modelValue":t[7]||(t[7]=d=>s.orderStatus.sendProduct=d),disabled:!((k=s.orderStatus)!=null&&k.making)||((P=s.orderStatus)==null?void 0:P.done)},null,8,bt),[[U,s.orderStatus.sendProduct]]),e("label",{class:m(["btn btn-outline-primary border-2 rounded-circle",s.orderStatus.making?"":"btn-outline-light"]),for:"btncheck3"},ft,2),vt]),e("div",{class:m(["mt-5",s.orderStatus.done?"bg-primary":"bg-light"]),style:{height:"10px",width:"20%"}},null,2),e("div",yt,[C(e("input",{type:"checkbox",class:"btn-check",id:"btncheck4",autocomplete:"off","onUpdate:modelValue":t[8]||(t[8]=d=>s.orderStatus.done=d),disabled:!s.modalData.is_paid||!s.orderStatus.sendProduct},null,8,xt),[[U,s.orderStatus.done]]),e("label",{class:m(["btn border-2 rounded-circle",[s.modalData.is_paid&&s.orderStatus.sendProduct?"btn-outline-primary":"btn-outline-light"]]),for:"btncheck4"},kt,2),Pt])])]),e("div",wt,[Ct,e("div",St,[e("p",Dt,"客戶姓名："+i((p=(w=s.modalData)==null?void 0:w.user)==null?void 0:p.name),1),e("p",Mt,"客戶地址："+i((V=(B=s.modalData)==null?void 0:B.user)==null?void 0:V.address),1),e("p",Et,"客戶Email："+i((I=(N=s.modalData)==null?void 0:N.user)==null?void 0:I.email),1),e("p",Ut,"客戶電話："+i((L=(j=s.modalData)==null?void 0:j.user)==null?void 0:L.tel),1),At,C(e("select",{class:"form-select d-inline w-25 fs-6",id:"payState","aria-label":"付款狀態","onUpdate:modelValue":t[9]||(t[9]=d=>s.modalData.is_paid=d),disabled:s.orderStatus.done},Nt,8,Tt),[[K,s.modalData.is_paid]]),(z=s.modalData)!=null&&z.is_deleted?(r(),c("button",{key:0,type:"button",class:"d-flex mx-1 my-1 btn btn-danger","data-bs-target":"#adOrderModal","data-bs-dismiss":"modal",onClick:t[10]||(t[10]=d=>l.recoverDelete(s.modalData))}," 回復刪除 ")):y("",!0)])]),It,e("table",jt,[Lt,e("tbody",null,[(r(!0),c(S,null,E(s.modalProducts,d=>(r(),c("tr",{key:d.id},[e("th",zt,[e("div",Rt,[e("div",$t,[e("div",qt,[e("div",Ft,[e("img",{src:d.product.imageUrl,class:"img-fluid object-fit-cover",alt:"..."},null,8,Xt)])]),e("div",Yt,[e("div",Gt,[e("h5",Jt,i(d.product.title),1),e("small",Qt,i(d.product.category),1)])])])])]),e("td",Ht,[C(e("input",{type:"number",class:"p-2 w-25",min:"1","onUpdate:modelValue":J=>d.qty=J,disabled:""},null,8,Kt),[[Z,d.qty]])]),e("td",Wt,"NT$ "+i(d.total),1)]))),128))])]),e("div",Zt,[e("p",es,[A(" 優惠券： "),(R=s.modalData)!=null&&R.products?(r(),c("span",ts,i((F=(q=Object.values(($=s.modalData)==null?void 0:$.products)[0])==null?void 0:q.coupon)==null?void 0:F.code),1)):y("",!0)]),e("p",ss,"總金額："+i(parseInt((X=s.modalData)==null?void 0:X.total)),1)])]),e("div",as,[os,e("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:t[11]||(t[11]=d=>l.updateOrder(s.modalData))}," 確認修改 ")])])])])],64)}const rs=T($e,[["render",ns]]);export{rs as default};
