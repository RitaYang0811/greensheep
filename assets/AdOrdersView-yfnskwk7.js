import{_ as M,o as r,c,r as C,b as e,e as D,t as i,u as b,i as y,F as k,f as w,z as m,d as h,g as O,P as S,O as K,l as Q,j as H,v as W}from"./index-B6g3WjpO.js";import{S as P}from"./sweetalert2.all-DHqf8B6f.js";const X={props:["orders","openModal","deleteOrder","confirmDelete"],data(){return{}},methods:{toggleCollapse(a){this.$refs.collape.forEach(t=>{t.attributes.id.value==a&&t.classList.toggle("hide")})}}},Y=["onClick"],Z=["data-bs-target"],ee={key:0,class:"ms-5 badge rounded-pill text-bg-primary fs-8 fw-light"},te={key:1,class:"ms-5 badge rounded-pill text-bg-danger fs-8 fw-light"},se=["id"],ae={class:"accordion-body p-1"},oe={class:"ms-3 d-flex align-items-center"},ne={class:"fw-medium text-grey66 fs-8 m-2"},le={class:"fs-6 fw-medium text-dark"},de={class:"me-7 d-flex text-grey99"},ie={class:"mx-3"},re=e("div",{class:"my-4 border border-1"},null,-1),ce={class:"d-flex justify-content-between mx-4 text-grey66"},pe={class:"ms-1"},ue={class:"ms-2 fs-8 text-secondary fw-medium"},_e={class:"text-primary fw-medium"},he=e("div",{class:"my-4 border"},null,-1),be={class:"mb-4"},me={class:"fs-6 text-primary ms-3"},ge={class:"mx-2 mb-3"},fe={class:"mx-2 mb-3"},ve={class:"mx-2 mb-3"},ye={class:"mx-2 mb-3"},xe={class:"mx-2 mb-3"},Oe={class:"d-flex justify-content-end"},ke=["onClick"],Pe=["onClick"],we=["onClick"];function Ce(a,t,o,p,s,n){return r(!0),c(k,null,C(o.orders,l=>{var _,v,x;return r(),c("div",{class:"accordion-item my-5 bg-white",key:l.id},[e("h2",{class:"accordion-header",onClick:u=>n.toggleCollapse(l.id)},[e("button",{class:"accordion-button fs-6 fw-bold bg-primary text-white",type:"button","data-bs-toggle":"collapse","data-bs-target":`#${l.id}`,"aria-expanded":"true"},[D(" 訂單編號："+i(l.create_at)+" ",1),e("span",{class:b([l.is_paid?"text-bg-primary":"text-bg-danger","ms-10 badge rounded-pill text-bg-primary fs-8 fw-light"])},i(l.is_paid?"已付款":"未付款"),3),(_=l==null?void 0:l.orderStatus)!=null&&_.done?(r(),c("span",ee,"已完成")):y("",!0),l!=null&&l.is_deleted?(r(),c("span",te,"已刪除")):y("",!0)],8,Z)],8,Y),e("div",{id:l.id,class:"accordion-collapse collapse show",ref_for:!0,ref:"collape"},[e("div",ae,[(r(!0),c(k,null,C(Object.values(l.products),u=>(r(),c("div",{class:"d-flex align-items-center justify-content-between my-1",key:u.id},[e("div",oe,[e("span",ne,i(u.product.category)+" / ",1),e("h3",le,i(u.product.title),1)]),e("div",de,[e("span",ie,"數量："+i(u.qty),1),e("p",null,"總價："+i(u.total),1)])]))),128)),re,e("div",ce,[e("p",pe,[D(" 優惠券： "),e("span",ue,i((x=(v=Object.values(l.products)[0])==null?void 0:v.coupon)==null?void 0:x.code),1)]),e("p",_e,"總金額：NT$ "+i(parseInt(l.total)),1)]),he,e("div",be,[e("div",me,[e("p",ge,"客戶姓名："+i(l.user.name),1),e("p",fe,"客戶電話："+i(l.user.tel),1),e("p",ve,"客戶地址："+i(l.user.address),1),e("p",ye,"客戶Email："+i(l.user.email),1),e("p",xe,"備註："+i(l.message),1),e("div",Oe,[l.is_deleted?y("",!0):(r(),c("button",{key:0,type:"button",class:"me-4 btn btn-deco","data-bs-target":"#adOrderModal",onClick:u=>o.deleteOrder(l)}," 刪除訂單",8,ke)),e("button",{type:"button",class:"me-4 btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#adOrderModal",onClick:u=>o.openModal(l)}," 修改訂單 ",8,Pe),l.is_deleted?(r(),c("button",{key:1,class:"btn btn-danger me-4",onClick:w(u=>o.confirmDelete(l.id),["prevent"])}," 確認永久刪除訂單 ",8,we)):y("",!0)])])])])],8,se)])}),128)}const Se=M(X,[["render",Ce]]),De={props:["pagination"],data(){return{}},methods:{updatePage(a){this.$emit("update-page",a)}},mounted(){}},Me={"aria-label":"Page navigation "},Ue={class:"cus-pagination list-unstyled mb-20 mb-lg-25"},Ae=e("span",{class:"material-icons fs-8 p-1"}," navigate_before ",-1),Ee=[Ae],Be=["onClick"],Ve=e("span",{class:"material-icons fs-8 p-1"}," navigate_next ",-1),Te=[Ve];function je(a,t,o,p,s,n){return r(),c("nav",Me,[e("ul",Ue,[e("li",{class:b(["page-item text-center",{disabled:o.pagination.current_page===1}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=w(l=>n.updatePage(o.pagination.current_page-1),["prevent"]))},Ee)],2),(r(!0),c(k,null,C(o.pagination.total_pages,(l,_)=>(r(),c("li",{class:b(["page-item fs-8 text-center",{active:l===o.pagination.current_page}]),key:_},[e("a",{class:"page-link",href:"#",onClick:w(v=>n.updatePage(l),["prevent"])},i(l),9,Be)],2))),128)),e("li",{class:b(["page-item text-center",{disabled:o.pagination.has_next===!1}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=w(l=>n.updatePage(o.pagination.current_page+1),["prevent"]))},Te)],2)])])}const Ie=M(De,[["render",je]]);var Ne={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",BASE_URL:"/greensheep/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:g,VITE_APP_API_NAME:f}=Ne,Le={components:{Accordion:Se,AdOrderPagination:Ie},data(){return{allOrders:[],unpaidOrders:[],paidOrders:[],deletedOrders:[],doneOrders:[],pagination:{},allOrdersPage:[],nowOrders:[],modalData:{},modalProducts:[],orderStatus:{getOrder:!0,making:!1,sendProduct:!1,done:!1}}},computed:{paginations(){let a={};return this.nowOrders.length>10?(this.nowOrders.length%10?a.total_pages=Math.floor(this.nowOrders.length/10)+1:a.total_pages=Math.floor(this.nowOrders.length/10),a.has_next=!0):(a.total_pages=1,a.has_next=!1),a.current_page=1,a.has_pre=!1,a}},methods:{getAllOrders(){this.allOrders=[],this.unpaidOrders=[],this.paidOrders=[],this.nowPage=[];const a=`${g}/api/${f}/admin/orders`;m.get(a).then(t=>{if(this.pagination=t.data.pagination,t.data.orders.forEach(o=>{this.allOrders.push(o),this.allOrdersPage.push(o)}),t.data.pagination.current_page<t.data.pagination.total_pages){const o=t.data.pagination.total_pages;for(let p=2;p<=o;p++)m.get(`${a}?page=${p}`).then(s=>{s.data.orders.forEach(n=>{this.allOrders.push(n)})}).catch(s=>{console.log(s)})}this.allOrders.forEach(o=>{o.orderStatus||(o.orderStatus={getOrder:!0,making:!1,sendProduct:!1,done:!1}),o.is_deleted?this.deletedOrders.push(o):o.is_paid?this.paidOrders.push(o):this.unpaidOrders.push(o),o.orderStatus.done&&this.doneOrders.push(o)})}).catch(t=>{console.log(t)})},updateOrder(a){const t=`${g}/api/${f}/admin/order/${a.id}`;a.orderStatus=this.orderStatus,m.put(t,{data:a}).then(()=>{P.fire({position:"top-end",icon:"success",title:"訂單修改成功",showConfirmButton:!1,toast:!0,timer:1500}),location.reload()}).catch(o=>{console.log(o)})},deleteOrder(a){const t=`${g}/api/${f}/admin/order/${a.id}`;P.fire({title:"是否刪除該訂單?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#566b5a",cancelButtonText:"  否  ",confirmButtonText:"  是  "}).then(o=>{o.isConfirmed&&(a.is_deleted=!0,m.put(t,{data:a}).then(()=>{location.reload()}).catch(p=>{console.log(p)}))})},recoverDelete(a){const t=`${g}/api/${f}/admin/order/${a.id}`;a.is_deleted=!1,m.put(t,{data:a}).then(()=>{location.reload()}).catch(o=>{console.log(o)})},confirmDelete(a){const t=`${g}/api/${f}/admin/order/${a}`;P.fire({title:"確認永久刪除該訂單?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#566b5a",cancelButtonText:"  否  ",confirmButtonText:"  是  "}).then(o=>{o.isConfirmed&&m.delete(t).then(()=>{location.reload()}).catch(p=>{console.log(p)})})},deleteAllOrders(){const a=`${g}/api/${f}/admin/orders/all`;P.fire({title:"確認永久刪除全部訂單?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#566b5a",cancelButtonText:"  否  ",confirmButtonText:"  是  "}).then(t=>{t.isConfirmed&&m.delete(a).then(()=>{location.reload()}).catch(o=>{console.log(o)})})},changeCategory(a){this.nowOrders=a},changePage(a){this.allOrdersPage=[];const t=`${g}/api/${f}/orders?page=${a}`;m.get(t).then(o=>{o.data.orders.forEach(p=>{this.allOrdersPage.push(p)}),this.pagination=o.data.pagination}).catch(o=>{console.log(o)})},openModal(a){this.modalData={...a},this.modalProducts=Object.values(a.products),this.orderStatus={...a.orderStatus}}},mounted(){this.getAllOrders()}},Re={class:"container text-start px-3 px-lg-10 mt-8 mt-lg-10 mb-7 mb-lg-10"},$e=e("h1",{class:"fs-3 mb-4 fw-bold"},"訂單管理",-1),qe={class:"nav nav-tabs border-button border-3",id:"nav-tab",role:"tablist"},ze={class:"tab-content m-3",id:"nav-tabContent"},Fe={class:"tab-pane fade show active",id:"allOrders",role:"tabpanel","aria-labelledby":"nav-home-tab",tabindex:"0"},Ge={class:"accordion",id:"accordionPanelsStayOpenExample"},He={class:"tab-pane fade",id:"unpaid",role:"tabpanel","aria-labelledby":"nav-profile-tab",tabindex:"0"},Je={class:"accordion",id:"accordionPanelsStayOpenExample"},Ke={class:"tab-pane fade",id:"paid",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},Qe={class:"accordion",id:"accordionPanelsStayOpenExample"},We={class:"tab-pane fade",id:"delete",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},Xe={class:"accordion",id:"accordionPanelsStayOpenExample"},Ye={class:"tab-pane fade",id:"done",role:"tabpanel","aria-labelledby":"nav-contact-tab",tabindex:"0"},Ze={class:"accordion",id:"accordionPanelsStayOpenExample"},et={class:"modal fade rounded-2",id:"adOrderModal","data-bs-keyboard":"false",tabindex:"-1","aria-hidden":"true"},tt={class:"modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable"},st={class:"modal-content"},at=e("div",{class:"modal-header bg-primary"},[e("h1",{class:"modal-title h5 fw-medium text-white ps-3 py-2",id:"staticBackdropLabel"}," 訂單詳細資料 "),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ot={class:"modal-body"},nt={class:""},lt={class:"p-10 d-flex justify-content-center",style:{"z-index":"10"}},dt=Q('<div class=""><input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" checked disabled><label class="btn btn-outline-primary border-2 rounded-circle" for="btncheck1"><i class="bi bi-check-lg fs-2 text-light"></i></label><p class="mt-3 fs-6">收到訂單</p></div>',1),it={class:""},rt=["disabled"],ct=e("label",{class:"btn btn-outline-primary border-2 rounded-circle",for:"btncheck2"},[e("i",{class:"bi bi-check-lg fs-2 text-light"})],-1),pt=e("p",{class:"mt-3 fs-6"},"製作中",-1),ut={class:""},_t=["disabled"],ht=e("i",{class:"bi bi-check-lg fs-2 text-light"},null,-1),bt=[ht],mt=e("p",{class:"mt-3 fs-6"},"已出貨",-1),gt={class:""},ft=["disabled"],vt=e("i",{class:"bi bi-check-lg fs-2 text-light"},null,-1),yt=[vt],xt=e("p",{class:"mt-3 fs-6"},"已完成",-1),Ot={class:"mb-9"},kt=e("h3",{class:"h4 text-center mb-3 fw-medium"},"客戶資料",-1),Pt={class:"border border-light text-start w-75 mx-auto p-2"},wt={class:"fs-6 text-primary m-3"},Ct={class:"fs-6 text-primary m-3"},St={class:"fs-6 text-primary m-3"},Dt={class:"fs-6 text-primary m-3"},Mt=e("label",{for:"payState",class:"fs-6 text-primary m-3"},"付款狀態：",-1),Ut=["disabled"],At=e("option",{value:!1},"未付款",-1),Et=e("option",{value:!0},"已付款",-1),Bt=[At,Et],Vt=e("h3",{class:"h4 text-center mb-3 fw-medium"},"訂單商品",-1),Tt={class:"table align-middle border-primary"},jt=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"text-primary fw-medium"},"商品資訊"),e("th",{scope:"col",class:"text-primary fw-medium"},"數量"),e("th",{scope:"col",class:"text-primary fw-medium"},"價格"),e("th",{scope:"col",class:"text-primary fw-medium"})])],-1),It={scope:"row",class:"py-4"},Nt={class:"card border-0 h-10",style:{"max-width":"540px"}},Lt={class:"row g-0 align-items-center"},Rt={class:"col-md-4"},$t={class:"ratio ratio-1x1"},qt=["src"],zt={class:"col-md-8"},Ft={class:"card-body"},Gt={class:"fs-6 card-title text-primary fw-medium"},Ht={class:"text-start fw-normal"},Jt={class:"py-4"},Kt=["onUpdate:modelValue"],Qt={class:"py-4 text-primary"},Wt={class:"d-flex justify-content-between mx-4 my-5"},Xt={class:"fs-6"},Yt={key:0,class:"ms-2 fs-6 badge rounded-pill text-bg-deco"},Zt={class:"fs-5 me-4 text-primary fw-bold"},es={class:"modal-footer"},ts=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function ss(a,t,o,p,s,n){var v,x,u,U,A,E,B,V,T,j,I,N,L,R,$,q,z,F,G;const l=H("Accordion"),_=H("AdOrderPagination");return r(),c(k,null,[e("div",Re,[$e,e("nav",null,[e("div",qe,[e("button",{class:"nav-link active w-10",id:"nav-home-tab","data-bs-toggle":"tab","data-bs-target":"#allOrders",type:"button",role:"tab","aria-controls":"nav-home","aria-selected":"true",onClick:t[0]||(t[0]=d=>n.changeCategory(s.allOrders))}," 全部訂單 "),e("button",{class:"nav-link w-10",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#unpaid",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"false",onClick:t[1]||(t[1]=d=>n.changeCategory(s.unpaidOrders))}," 未付款 "),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#paid",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false",onClick:t[2]||(t[2]=d=>n.changeCategory(s.paidOrders))}," 已付款 "),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#delete",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false",onClick:t[3]||(t[3]=d=>n.changeCategory(s.deletedOrders))}," 已刪除 "),e("button",{class:"nav-link w-10",id:"nav-contact-tab","data-bs-toggle":"tab","data-bs-target":"#done",type:"button",role:"tab","aria-controls":"nav-contact","aria-selected":"false",onClick:t[4]||(t[4]=d=>n.changeCategory(s.doneOrders))}," 已完成 ")])]),e("div",ze,[e("div",Fe,[e("button",{type:"button",class:"btn btn-deco",onClick:t[5]||(t[5]=(...d)=>n.deleteAllOrders&&n.deleteAllOrders(...d))},"刪除全部訂單"),e("div",Ge,[h(l,{orders:s.allOrdersPage,openModal:n.openModal,deleteOrder:n.deleteOrder,confirmDelete:n.confirmDelete},null,8,["orders","openModal","deleteOrder","confirmDelete"]),h(_,{pagination:s.pagination,onUpdatePage:n.changePage},null,8,["pagination","onUpdatePage"])])]),e("div",He,[e("div",Je,[h(l,{orders:s.unpaidOrders,openModal:n.openModal,deleteOrder:n.deleteOrder},null,8,["orders","openModal","deleteOrder"]),h(_,{pagination:n.paginations,onUpdatePage:n.changePage},null,8,["pagination","onUpdatePage"])])]),e("div",Ke,[e("div",Qe,[h(l,{orders:s.paidOrders,openModal:n.openModal,deleteOrder:n.deleteOrder},null,8,["orders","openModal","deleteOrder"]),h(_,{pagination:n.paginations,onUpdatePage:n.changePage},null,8,["pagination","onUpdatePage"])])]),e("div",We,[e("div",Xe,[h(l,{orders:s.deletedOrders,openModal:n.openModal,deleteOrder:n.deleteOrder,confirmDelete:n.confirmDelete},null,8,["orders","openModal","deleteOrder","confirmDelete"]),h(_,{pagination:n.paginations,onUpdatePage:n.changePage},null,8,["pagination","onUpdatePage"])])]),e("div",Ye,[e("div",Ze,[h(l,{orders:s.doneOrders,openModal:n.openModal,deleteOrder:n.deleteOrder},null,8,["orders","openModal","deleteOrder"]),h(_,{pagination:n.paginations,onUpdatePage:n.changePage},null,8,["pagination","onUpdatePage"])])])])]),e("div",et,[e("div",tt,[e("div",st,[at,e("div",ot,[e("div",nt,[e("div",lt,[dt,e("div",{class:b([(v=s.orderStatus)!=null&&v.making?"bg-primary":"bg-light","mt-5"]),style:{height:"10px",width:"20%"}},null,2),e("div",it,[O(e("input",{type:"checkbox",class:"btn-check",id:"btncheck2",autocomplete:"off","onUpdate:modelValue":t[6]||(t[6]=d=>s.orderStatus.making=d),disabled:(x=s.orderStatus)==null?void 0:x.sendProduct},null,8,rt),[[S,s.orderStatus.making]]),ct,pt]),e("div",{class:b(["mt-5",(u=s.orderStatus)!=null&&u.sendProduct?"bg-primary":"bg-light"]),style:{height:"10px",width:"20%"}},null,2),e("div",ut,[O(e("input",{type:"checkbox",class:"btn-check",id:"btncheck3",autocomplete:"off","onUpdate:modelValue":t[7]||(t[7]=d=>s.orderStatus.sendProduct=d),disabled:!((U=s.orderStatus)!=null&&U.making)||((A=s.orderStatus)==null?void 0:A.done)},null,8,_t),[[S,s.orderStatus.sendProduct]]),e("label",{class:b(["btn btn-outline-primary border-2 rounded-circle",s.orderStatus.making?"":"btn-outline-light"]),for:"btncheck3"},bt,2),mt]),e("div",{class:b(["mt-5",s.orderStatus.done?"bg-primary":"bg-light"]),style:{height:"10px",width:"20%"}},null,2),e("div",gt,[O(e("input",{type:"checkbox",class:"btn-check",id:"btncheck4",autocomplete:"off","onUpdate:modelValue":t[8]||(t[8]=d=>s.orderStatus.done=d),disabled:!s.modalData.is_paid||!s.orderStatus.sendProduct},null,8,ft),[[S,s.orderStatus.done]]),e("label",{class:b(["btn border-2 rounded-circle",[s.modalData.is_paid&&s.orderStatus.sendProduct?"btn-outline-primary":"btn-outline-light"]]),for:"btncheck4"},yt,2),xt])])]),e("div",Ot,[kt,e("div",Pt,[e("p",wt,"客戶姓名："+i((B=(E=s.modalData)==null?void 0:E.user)==null?void 0:B.name),1),e("p",Ct,"客戶地址："+i((T=(V=s.modalData)==null?void 0:V.user)==null?void 0:T.address),1),e("p",St,"客戶Email："+i((I=(j=s.modalData)==null?void 0:j.user)==null?void 0:I.email),1),e("p",Dt,"客戶電話："+i((L=(N=s.modalData)==null?void 0:N.user)==null?void 0:L.tel),1),Mt,O(e("select",{class:"form-select d-inline w-25 fs-6",id:"payState","aria-label":"付款狀態","onUpdate:modelValue":t[9]||(t[9]=d=>s.modalData.is_paid=d),disabled:s.orderStatus.done},Bt,8,Ut),[[K,s.modalData.is_paid]]),(R=s.modalData)!=null&&R.is_deleted?(r(),c("button",{key:0,type:"button",class:"d-flex mx-1 my-1 btn btn-danger","data-bs-target":"#adOrderModal","data-bs-dismiss":"modal",onClick:t[10]||(t[10]=d=>n.recoverDelete(s.modalData))}," 回復刪除 ")):y("",!0)])]),Vt,e("table",Tt,[jt,e("tbody",null,[(r(!0),c(k,null,C(s.modalProducts,d=>(r(),c("tr",{key:d.id},[e("th",It,[e("div",Nt,[e("div",Lt,[e("div",Rt,[e("div",$t,[e("img",{src:d.product.imageUrl,class:"img-fluid object-fit-cover",alt:"..."},null,8,qt)])]),e("div",zt,[e("div",Ft,[e("h5",Gt,i(d.product.title),1),e("small",Ht,i(d.product.category),1)])])])])]),e("td",Jt,[O(e("input",{type:"number",class:"p-2 w-25",min:"1","onUpdate:modelValue":J=>d.qty=J,disabled:""},null,8,Kt),[[W,d.qty]])]),e("td",Qt,"NT$ "+i(d.total),1)]))),128))])]),e("div",Wt,[e("p",Xt,[D(" 優惠券： "),($=s.modalData)!=null&&$.products?(r(),c("span",Yt,i((F=(z=Object.values((q=s.modalData)==null?void 0:q.products)[0])==null?void 0:z.coupon)==null?void 0:F.code),1)):y("",!0)]),e("p",Zt,"總金額："+i(parseInt((G=s.modalData)==null?void 0:G.total)),1)])]),e("div",es,[ts,e("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal",onClick:t[11]||(t[11]=d=>n.updateOrder(s.modalData))}," 確認修改 ")])])])])],64)}const ns=M(Le,[["render",ss]]);export{ns as default};
