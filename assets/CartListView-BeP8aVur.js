import{_ as $,o as r,c as n,l as C,Q as z,m as F,a as G,b as t,d as v,F as h,r as b,e as B,t as l,i as y,g as u,v as W,R as f,j as g,f as R,p as Q,k as X}from"./index-SYHPK7Jv.js";import{c as j}from"./cartStore-D6w8RGkB.js";import{S as _}from"./sweetalert2.all-CYmlyNIM.js";const Y={},H={class:"container my-20 text-start"},J=C('<h3 class="fs-5 text-start">【 訂 購 前 請 詳 閱 】</h3><ul class="mt-5 text-grey66 fw-normal lh-lg"><li class="fs-7"> 每一款首飾皆為手工訂製，請先與客服確認欲購買商品之到貨日，可接受再下訂。出貨時間依據商品製作期有所不同，並依下單順序出貨。若有特定取貨時間要求或客製作期有所不同，並依下單順序出貨。若有特定取貨時間要求或客製需求，請事先詢問再進行訂購。 </li><li class="fs-7 mt-4"> 台灣含離島寄送，訂單滿 NT$2,000 ，即享有免運優惠。全球寄送，訂單滿NT$12,000，即享有免運優惠。 </li><li class="fs-7 mt-4"> 綠羊Green Sheep 所採用的天然寶石、珍珠皆為自然而成，色差、紋路及生長痕跡不同皆為正常現象，請依實品為主，若辦理退貨需自付運費。 </li><li class="fs-7 mt-4"> 收到商品後若須更改尺寸或其他個人化客製(如調整鍊長、變更寶石、各種變更原設計之修改)，將額外收取工本費。 </li><li class="fs-7 mt-4"> 個人客製化商品(如刻字、設計改款、特殊尺寸、個人化調整等)、活動特殊品項(如預購、訂製商品)，恕不接受退換貨。 </li><li class="fs-7 mt-4"> 網路購物享有之 7 日鑑賞期非試用期，辦理退貨時請保持商品全新完整，透過line客服與我們聯繫，再自行將發票、商品、贈品以原包裝寄回指定地點，待收回檢查確認無誤後將進行退款(退回款項恕不含運費並會扣除跨行匯款手續費)。非瑕疵因素換貨者，將由買方與賣方各負擔一次運費。 </li><li class="fs-7 mt-4"> 為保護雙方權益，拆箱全程請務必錄影，並保留出貨訂單明細、發票。訂單內容有任何問題或遺漏將以錄影為憑據，請於收件 7 日內向客服聯繫申請，超過 7 日將不受理。 </li><li class="fs-7 mt-4"> 網站管理員於平日 10:30-19:00 (不含例假日、國定假日)依序回覆訂單問題，若有不及敬請見諒，我們將逐一回覆。 </li></ul>',2),K=[J];function Z(e,i){return r(),n("div",H,K)}const tt=$(Y,[["render",Z]]);var et={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",VITE_LINE_CLIENT_ID:"x9iTcS6m9Fdlz8XFfAbkqs",VITE_LINE_CLIENT_SECRET:"iGiOLRLmU2aNTDuObVQlcP5XzPYSbUzJ9gvUl4YvPzx",BASE_URL:"/greensheep/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:st,VITE_APP_API_NAME:it}=et,ot={components:{OrderRules:tt,Loading:z},data(){return{isLoading:!1,coupon:"",select:[{location:"台灣",deliver:["黑貓宅急便","7-11取貨","全家取貨","OK取貨","萊爾富取貨"],payWay:["信用卡","貨到付款","轉帳","超商繳費"]},{location:"外島",deliver:["中華郵政","黑貓宅急便","宅配通"],payWay:["信用卡","轉帳"]},{location:"海外",deliver:["中華郵政","DHL","UPS"],payWay:["信用卡"]}],locations:[],delivers:[],payWays:[],deliverChoose:{location:"",deliver:"",payWay:""}}},methods:{...F(j,["getCarts","updateCart","deleteCart","getDeliverData","deleteAllCarts"]),sendCoupon(e){const i=`${st}/api/${it}/coupon`,d={data:{code:e}};this.axios.post(i,d).then(m=>{m.data.success&&_.fire({title:m.data.message,icon:"success"}),this.coupon="",this.getCarts()}).catch(m=>{_.fire({title:"優惠券有誤，請重新輸入",confirmButtonColor:"#566B5A",icon:"warning"}),console.log(m)})},showCoupon(e){return(e==null?void 0:e.percent)===100?`消費滿 NT$ ${e==null?void 0:e.min_buy_price_by_price}，享 ${e==null?void 0:e.discount_price} 折扣`:`消費滿 NT$ ${e==null?void 0:e.min_buy_price_by_discount}，享
            ${(e==null?void 0:e.percent)/10} 折`},goCheckout(){if(this.carts.length===0){_.fire({title:"購物車是空的",confirmButtonColor:"#566B5A",icon:"warning"});return}if(this.deliverChoose.location.length===0){_.fire({title:"收件地點必填",confirmButtonColor:"#566B5A",icon:"warning"});return}if(this.deliverChoose.deliver.length===0){_.fire({title:"配送方式必填",confirmButtonColor:"#566B5A",icon:"warning"});return}if(this.deliverChoose.payWay.length===0){_.fire({title:"付款方式必填",confirmButtonColor:"#566B5A",icon:"warning"});return}this.getDeliverData(this.deliverChoose),this.$router.push("/order")}},watch:{"deliverChoose.location"(e){this.delivers=[],this.payWays=[],this.deliverChoose.deliver="",this.deliverChoose.payWay="",this.select.forEach(i=>{i.location===e&&(i.deliver.forEach(d=>{this.delivers.push(d)}),i.payWay.forEach(d=>{this.payWays.push(d)}))})}},computed:{...G(j,["carts","total","isLoading"]),rawTotal(){let e=0;return this.carts.forEach(i=>{e+=i.total}),parseInt(e)}},mounted(){this.select.forEach(e=>{this.locations.push(e.location)}),this.getCarts()}},o=e=>(Q("data-v-177bea77"),e=e(),X(),e),at={class:"container pt-40"},lt=C('<div data-v-177bea77><div class="p-10 d-flex justify-content-center" style="z-index:10;" data-v-177bea77><div class="" data-v-177bea77><div class="btn btn-outline-primary border-2 rounded-circle bg-primary pe-none" data-v-177bea77><i class="bi bi-check-lg fs-2 text-light" data-v-177bea77></i></div><p class="mt-3 fs-6 text-primary" data-v-177bea77>確認購買明細</p></div><div class="mt-5 bg-light border border-greyD4" style="height:8px;width:35%;" data-v-177bea77></div><div class="opacity-50" data-v-177bea77><div class="btn btn-outline-primary border-2 rounded-circle pe-none" data-v-177bea77><i class="bi bi-check-lg fs-2 text-primary" data-v-177bea77></i></div><p class="mt-3 fs-6 text-primary" data-v-177bea77>付款資料填寫</p></div><div class="mt-5 bg-light border border-greyD4" style="height:8px;width:35%;" data-v-177bea77></div><div class="opacity-50" data-v-177bea77><div class="btn btn-outline-primary border-2 rounded-circle pe-none" data-v-177bea77><i class="bi bi-check-lg fs-2 text-primary" data-v-177bea77></i></div><p class="mt-3 fs-6 text-primary" data-v-177bea77>訂單完成</p></div></div></div><h1 class="fs-4 fs-lg-2 py-10 text-center fw-bold" data-v-177bea77>購物車</h1>',2),rt={class:"cart-table list-unstyled border-lg-bottom border-primary"},nt=C('<li class="cart-thead" data-v-177bea77><ol class="list-unstyled cart-tr" data-v-177bea77><li class="text-primary fw-medium" data-v-177bea77></li><li class="text-primary fw-medium" data-v-177bea77>商品資訊</li><li class="text-primary fw-medium" data-v-177bea77>數量</li><li class="text-primary fw-medium" data-v-177bea77>單價</li><li class="text-primary fw-medium" data-v-177bea77>價格</li><li class="text-primary fw-medium" data-v-177bea77></li></ol></li>',1),dt={class:"list-unstyled cart-tr"},ct={class:"w-md-10"},pt=["src"],_t={class:"w-md-30"},mt={class:"fs-6 card-title text-primary fw-medium"},ht={class:"w-md-30"},ut={class:"d-flex justify-content-center"},bt=["onClick","disabled"],vt=o(()=>t("i",{class:"bi bi-dash-circle fs-3"},null,-1)),yt=[vt],ft=["onUpdate:modelValue"],gt=["onClick"],Ct=o(()=>t("i",{class:"bi bi-plus-circle fs-3"},null,-1)),wt=[Ct],xt={"data-title":"單價",class:"cart-price text-primary w-md-15"},kt={class:"text-center"},Tt={c:"","data-title":"價格",class:"cart-price text-primary w-md-15"},Et={class:"text-center fw-medium d-inline-block"},It={class:"w-md-10"},Lt=["onClick"],Vt=o(()=>t("i",{class:"bi bi-trash text-grey66"},null,-1)),At=[Vt],Nt={class:"fs-5 font-notosans mt-6"},St=o(()=>t("br",null,null,-1)),Pt={class:"d-flex my-2 justify-content-center justify-content-lg-end"},Dt={key:0,class:"container pt-10"},Ut={key:0,class:"row"},Bt=o(()=>t("div",{class:"col-md-2 text-primary fw-medium mb-2"},"已使用優惠",-1)),Wt={class:"col-md-10 text-center text-md-start"},Rt={class:"rounded-pill border border-1 border-secondary text-secondary fs-9 px-4 py-1 me-4"},jt={class:"fs-7 text-primary"},$t={class:"container py-10"},Ot={class:"row align-items-center"},qt=o(()=>t("div",{class:"col-md-2 text-primary fw-medium d-md-block d-none"},"優惠券折扣",-1)),Mt={class:"col-md-10"},zt={class:"text-md-start text-center"},Ft=["disabled"],Gt={class:"container py-10 py-md-15 border-top border-bottom border-primary border-2"},Qt={class:"row justify-content-between"},Xt={class:"col-md-6 col-12 bg-light px-8 py-8"},Yt=o(()=>t("h3",{class:"fs-5 fw-medium text-start mb-4"},"選擇收件地點及運送方式",-1)),Ht=o(()=>t("option",{value:"",disabled:""},"請選擇地點",-1)),Jt=["value"],Kt=o(()=>t("option",{value:"",disabled:""},"請選擇配送方式",-1)),Zt=["value"],te=o(()=>t("p",{class:"fs-8 text-start text-grey66 mt-5"}," 出貨後約 3-7 天抵達指定門市。 如遇特殊檔期或急件需求，建議選擇國內宅配方式配送。 ",-1)),ee=o(()=>t("h3",{class:"fs-5 fw-medium text-start mt-10 mb-4"},"選擇付款方式",-1)),se=o(()=>t("option",{value:"",disabled:""},"付款方式",-1)),ie=["value"],oe={class:"col-md-6 col-12 mt-md-0 mt-5 bg-light py-8 px-8"},ae=o(()=>t("h3",{class:"fs-5 fw-medium text-start mb-4"},"訂單資訊",-1)),le={class:"p-5 bg-greyD4 text-dark"},re={class:"d-flex justify-content-between mb-5"},ne=o(()=>t("p",{class:""},"小計：",-1)),de={class:""},ce={class:"d-flex justify-content-between mb-5"},pe=o(()=>t("p",{class:""},"優惠券：",-1)),_e={key:0},me=o(()=>t("div",{class:"border border-primary border-1 mb-5"},null,-1)),he={class:"d-flex justify-content-between mb-5"},ue=o(()=>t("p",{class:""},"合計：",-1)),be={class:"fw-bold"};function ve(e,i,d,m,a,c){var w,x,k,T,E,I,L,V,A,N,S,P,D,U;const O=g("Loading"),q=g("OrderRules"),M=g("VueLoading");return r(),n(h,null,[t("div",at,[lt,v(O,{active:a.isLoading,"onUpdate:active":i[0]||(i[0]=s=>a.isLoading=s)},null,8,["active"]),t("ul",rt,[nt,(r(!0),n(h,null,b(e.carts,s=>(r(),n("li",{key:s.id,class:"cart-tbody"},[t("ol",dt,[t("li",ct,[t("img",{src:s.product.imageUrl,class:"cart-img img-fluid object-fit-cover",alt:"product-image"},null,8,pt)]),t("li",_t,[t("h5",mt,l(s.product.title),1)]),t("li",ht,[t("div",ut,[t("button",{type:"button",class:"btn btn-link text-primary",onClick:[R(p=>s.qty--,["prevent"]),p=>e.updateCart(s)],disabled:s.qty<=1},yt,8,bt),u(t("input",{type:"number",class:"p-lg-2 w-20 text-center",min:"1","onUpdate:modelValue":p=>s.qty=p,disabled:""},null,8,ft),[[W,s.qty]]),t("button",{type:"button",class:"btn btn-link text-primary",onClick:[R(p=>s.qty++,["prevent"]),p=>e.updateCart(s)]},wt,8,gt)])]),t("li",xt,[t("small",kt,"NT$ "+l(s.product.price),1)]),t("li",Tt,[t("p",Et,"NT$ "+l(parseInt(s.total)),1)]),t("li",It,[t("a",{onClick:p=>e.deleteCart(s.id)},At,8,Lt)])])]))),128)),t("h2",Nt,[B(" 合計：NT $"+l((w=e.carts[0])!=null&&w.coupon?e.total-((k=(x=e.carts[0])==null?void 0:x.coupon)==null?void 0:k.discount_price):e.total),1),St,B(" （共 "+l(e.carts.length)+" 件） ",1)])]),t("div",Pt,[t("button",{type:"button",class:"btn btn-light text-primary",onClick:i[1]||(i[1]=(...s)=>e.deleteAllCarts&&e.deleteAllCarts(...s))}," 刪除全部商品 ")])]),(E=(T=e.carts[0])==null?void 0:T.coupon)!=null&&E.title?(r(),n("div",Dt,[(I=e.carts[0])!=null&&I.coupon?(r(),n("div",Ut,[Bt,t("div",Wt,[t("span",Rt,l((V=(L=e.carts[0])==null?void 0:L.coupon)==null?void 0:V.title),1),t("span",jt,l(c.showCoupon((A=e.carts[0])==null?void 0:A.coupon)),1)])])):y("",!0)])):y("",!0),t("div",$t,[t("div",Ot,[qt,t("div",Mt,[t("form",zt,[u(t("input",{type:"text",class:"teat-start p-2 w-50",placeholder:"請輸入優惠代碼","onUpdate:modelValue":i[2]||(i[2]=s=>a.coupon=s)},null,512),[[W,a.coupon]]),t("button",{type:"button",class:"btn btn-primary p-3",onClick:i[3]||(i[3]=s=>c.sendCoupon(a.coupon)),disabled:!a.coupon}," 送出優惠券 ",8,Ft)])])])]),t("div",Gt,[t("div",Qt,[t("div",Xt,[Yt,u(t("select",{class:"form-select mb-5 fs-6 w-100","onUpdate:modelValue":i[4]||(i[4]=s=>a.deliverChoose.location=s)},[Ht,(r(!0),n(h,null,b(a.locations,s=>(r(),n("option",{value:s,key:s},l(s),9,Jt))),128))],512),[[f,a.deliverChoose.location]]),u(t("select",{class:"form-select fs-6 w-100","onUpdate:modelValue":i[5]||(i[5]=s=>a.deliverChoose.deliver=s)},[Kt,(r(!0),n(h,null,b(a.delivers,s=>(r(),n("option",{value:s,key:s},l(s),9,Zt))),128))],512),[[f,a.deliverChoose.deliver]]),te,ee,u(t("select",{class:"form-select fs-6 w-100","onUpdate:modelValue":i[6]||(i[6]=s=>a.deliverChoose.payWay=s)},[se,(r(!0),n(h,null,b(a.payWays,s=>(r(),n("option",{value:s,key:s},l(s),9,ie))),128))],512),[[f,a.deliverChoose.payWay]])]),t("div",oe,[ae,t("div",le,[t("div",re,[ne,t("p",de,"NT$ "+l(c.rawTotal),1)]),t("div",ce,[pe,(N=e.carts[0])!=null&&N.coupon?(r(),n("span",_e,l(c.showCoupon((S=e.carts[0])==null?void 0:S.coupon)),1)):y("",!0)]),me,t("div",he,[ue,t("p",be," NT$ "+l((P=e.carts[0])!=null&&P.coupon?parseInt(e.total)-((U=(D=e.carts[0])==null?void 0:D.coupon)==null?void 0:U.discount_price):parseInt(e.total)),1)]),t("button",{type:"button",class:"btn btn-primary p-5 fs-5 w-100 text-white",onClick:i[7]||(i[7]=(...s)=>c.goCheckout&&c.goCheckout(...s))}," 前往結帳 ")])])])]),v(q),v(M,{active:a.isLoading},null,8,["active"])],64)}const Ce=$(ot,[["render",ve],["__scopeId","data-v-177bea77"]]);export{Ce as default};
