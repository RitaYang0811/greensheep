import{_ as $,o as l,c as n,l as j,N as O,m as M,a as q,b as t,d as U,F as p,r as h,t as r,i as y,g as m,v as W,O as b,j as D,f as L}from"./index-B6g3WjpO.js";import{c as S}from"./cartStore-DCOeMrz2.js";import{S as d}from"./sweetalert2.all-DHqf8B6f.js";const F={},G={class:"container my-20 text-start"},H=j('<h3 class="fs-5 text-start">【 訂 購 前 請 詳 閱 】</h3><ul class="mt-5 text-grey66 fw-normal lh-lg"><li class="fs-7"> 每一款首飾皆為手工訂製，請先與客服確認欲購買商品之到貨日，可接受再下訂。出貨時間依據商品製作期有所不同，並依下單順序出貨。若有特定取貨時間要求或客製作期有所不同，並依下單順序出貨。若有特定取貨時間要求或客製需求，請事先詢問再進行訂購。 </li><li class="fs-7 mt-4"> 台灣含離島寄送，訂單滿 NT$2,000 ，即享有免運優惠。全球寄送，訂單滿NT$12,000，即享有免運優惠。 </li><li class="fs-7 mt-4"> 綠羊Green Sheep 所採用的天然寶石、珍珠皆為自然而成，色差、紋路及生長痕跡不同皆為正常現象，請依實品為主，若辦理退貨需自付運費。 </li><li class="fs-7 mt-4"> 收到商品後若須更改尺寸或其他個人化客製(如調整鍊長、變更寶石、各種變更原設計之修改)，將額外收取工本費。 </li><li class="fs-7 mt-4"> 個人客製化商品(如刻字、設計改款、特殊尺寸、個人化調整等)、活動特殊品項(如預購、訂製商品)，恕不接受退換貨。 </li><li class="fs-7 mt-4"> 網路購物享有之 7 日鑑賞期非試用期，辦理退貨時請保持商品全新完整，透過line客服與我們聯繫，再自行將發票、商品、贈品以原包裝寄回指定地點，待收回檢查確認無誤後將進行退款(退回款項恕不含運費並會扣除跨行匯款手續費)。非瑕疵因素換貨者，將由買方與賣方各負擔一次運費。 </li><li class="fs-7 mt-4"> 為保護雙方權益，拆箱全程請務必錄影，並保留出貨訂單明細、發票。訂單內容有任何問題或遺漏將以錄影為憑據，請於收件 7 日內向客服聯繫申請，超過 7 日將不受理。 </li><li class="fs-7 mt-4"> 網站管理員於平日 10:30-19:00 (不含例假日、國定假日)依序回覆訂單問題，若有不及敬請見諒，我們將逐一回覆。 </li></ul>',2),K=[H];function z(s,o){return l(),n("div",G,K)}const J=$(F,[["render",z]]);var Q={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",BASE_URL:"/greensheep/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:X,VITE_APP_API_NAME:Y}=Q,Z={components:{OrderRules:J,Loading:O},data(){return{isLoading:!1,coupon:"",select:[{location:"台灣",deliver:["黑貓宅急便","7-11取貨","全家取貨","OK取貨","萊爾富取貨"],payWay:["信用卡","貨到付款","轉帳","超商繳費"]},{location:"外島",deliver:["中華郵政","黑貓宅急便","宅配通"],payWay:["信用卡","轉帳"]},{location:"海外",deliver:["中華郵政","DHL","UPS"],payWay:["信用卡"]}],locations:[],delivers:[],payWays:[],deliverChoose:{location:"",deliver:"",payWay:""}}},methods:{...M(S,["getCarts","updateCart","deleteCart","getDeliverData"]),sendCoupon(s){const o=`${X}/api/${Y}/coupon`,a={data:{code:s}};this.axios.post(o,a).then(u=>{u.data.data.final_total==this.rawTotal&&d.fire({title:"優惠券有誤，請重新輸入",confirmButtonColor:"#566B5A",icon:"warning"}),this.coupon="",this.getCarts()}).catch(u=>{d.fire({title:"優惠券有誤，請重新輸入",confirmButtonColor:"#566B5A",icon:"warning"}),console.log(u)})},goCheckout(){if(this.carts.length==0){d.fire({title:"購物車是空的",confirmButtonColor:"#566B5A",icon:"warning"});return}if(this.deliverChoose.location.length==0){d.fire({title:"收件地點必填",confirmButtonColor:"#566B5A",icon:"warning"});return}if(this.deliverChoose.deliver.length==0){d.fire({title:"配送方式必填",confirmButtonColor:"#566B5A",icon:"warning"});return}if(this.deliverChoose.payWay.length==0){d.fire({title:"付款方式必填",confirmButtonColor:"#566B5A",icon:"warning"});return}this.getDeliverData(this.deliverChoose),this.$router.push("/order")}},watch:{"deliverChoose.location"(s){this.delivers=[],this.payWays=[],this.deliverChoose.deliver="",this.deliverChoose.payWay="",this.select.forEach(o=>{o.location==s&&(o.deliver.forEach(a=>{this.delivers.push(a)}),o.payWay.forEach(a=>{this.payWays.push(a)}))})}},computed:{...q(S,["carts","total"]),rawTotal(){let s=0;return this.carts.forEach(o=>{s+=o.total}),s}},mounted(){this.select.forEach(s=>{this.locations.push(s.location)}),this.getCarts()}},tt={class:"container pt-40"},et=t("div",{class:"mb-30"},[t("div",{class:"position-relative m-4 w-75 mx-auto"},[t("div",{class:"progress"},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"0%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})]),t("button",{type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill pe-none",style:{width:"3rem",height:"3rem"}}," 1 "),t("button",{type:"button",class:"position-absolute top-0 start-50 translate-middle btn btn-sm bg-white rounded-pill border border-1 border-primary text-primary pe-none",style:{width:"3rem",height:"3rem"}}," 2 "),t("button",{type:"button",class:"position-absolute top-0 start-100 translate-middle btn btn-sm bg-white rounded-pill border border-1 border-primary text-primary pe-none",style:{width:"3rem",height:"3rem"}}," 3 ")]),t("div",{class:"position-relative mt-15 w-75 mx-auto"},[t("p",{class:"position-absolute top-0 start-0 translate-middle text-primary"},"確認購買明細"),t("p",{class:"position-absolute top-0 start-50 translate-middle text-primary"},"付款資料填寫"),t("p",{class:"position-absolute top-0 end-n7 translate-middle text-primary"},"訂單完成")])],-1),st=t("h1",{class:"fs-4 fs-lg-2 py-20 text-center fw-bold"},"購物車",-1),ot={class:"table align-middle border-primary"},it=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"text-primary fw-medium"},"商品資訊"),t("th",{scope:"col",class:"text-primary fw-medium"},"數量"),t("th",{scope:"col",class:"text-primary fw-medium"},"價格"),t("th",{scope:"col",class:"text-primary fw-medium"})])],-1),lt={scope:"row",class:"py-4"},nt={class:"card border-0",style:{"max-width":"540px"}},rt={class:"row g-0 align-items-center"},at={class:"col-md-4"},ct={class:"ratio ratio-1x1"},dt=["src"],pt={class:"col-md-8"},mt={class:"card-body"},ut={class:"fs-6 card-title text-primary fw-medium"},_t={class:"text-start fw-normal"},ht={class:"py-4"},yt={class:"d-flex justify-content-center"},bt=["onClick","disabled"],ft=t("i",{class:"bi bi-dash-circle fs-3"},null,-1),vt=[ft],gt=["onUpdate:modelValue"],wt=["onClick"],Ct=t("i",{class:"bi bi-plus-circle fs-3"},null,-1),xt=[Ct],kt={class:"py-4 text-primary"},At={class:"py-4"},Bt=["onClick"],Vt={key:0,class:"container pt-10"},Et={class:""},Tt={class:"row"},Nt=t("div",{class:"col-md-2 text-primary fw-medium mb-2"},"已使用優惠",-1),Pt={key:0,class:"col-md-10 text-center text-md-start"},Ut={class:"rounded-pill border border-1 border-secondary text-secondary fs-9 px-4 py-1 me-4"},Wt={class:"fs-7 text-primary"},Dt={class:"container py-10"},Lt={class:"row align-items-center"},St=t("div",{class:"col-md-2 text-primary fw-medium d-md-block d-none"},"優惠券折扣",-1),$t={class:"col-md-10"},It={class:"text-md-start text-center"},Rt={class:"container py-10 py-md-15 border-top border-bottom border-primary border-2"},jt={class:"row justify-content-between"},Ot={class:"col-md-6 col-12 bg-light px-8 py-8"},Mt=t("h3",{class:"fs-5 fw-medium text-start mb-4"},"選擇收件地點及運送方式",-1),qt=t("option",{value:"",disabled:""},"請選擇地點",-1),Ft=["value"],Gt=t("option",{value:"",disabled:""},"請選擇配送方式",-1),Ht=["value"],Kt=t("p",{class:"fs-8 text-start text-grey66 mt-5"}," 出貨後約 3-7 天抵達指定門市。 如遇特殊檔期或急件需求，建議選擇國內宅配方式配送。 ",-1),zt=t("h3",{class:"fs-5 fw-medium text-start mt-10 mb-4"},"選擇付款方式",-1),Jt=t("option",{value:"",disabled:""},"付款方式",-1),Qt=["value"],Xt={class:"col-md-6 col-12 mt-md-0 mt-5 bg-light py-8 px-8"},Yt=t("h3",{class:"fs-5 fw-medium text-start mb-4"},"訂單資訊",-1),Zt={class:"p-5 bg-greyD4 text-dark"},te={class:"d-flex justify-content-between mb-5"},ee=t("p",{class:""},"小計：",-1),se={class:""},oe={class:"d-flex justify-content-between mb-5"},ie=t("p",{class:""},"優惠券：",-1),le={key:0},ne=t("div",{class:"border border-primary border-1 mb-5"},null,-1),re={class:"d-flex justify-content-between mb-5"},ae=t("p",{class:""},"合計：",-1),ce={class:"fw-bold"};function de(s,o,a,u,i,_){var f,v,g,w,C,x,k,A,B,V,E,T,N,P;const I=D("Loading"),R=D("OrderRules");return l(),n(p,null,[t("div",tt,[et,st,U(I,{active:i.isLoading,"onUpdate:active":o[0]||(o[0]=e=>i.isLoading=e)},null,8,["active"]),t("table",ot,[it,t("tbody",null,[(l(!0),n(p,null,h(s.carts,e=>(l(),n("tr",{key:e.id},[t("th",lt,[t("div",nt,[t("div",rt,[t("div",at,[t("div",ct,[t("img",{src:e.product.imageUrl,class:"img-fluid object-fit-cover",alt:"..."},null,8,dt)])]),t("div",pt,[t("div",mt,[t("h5",ut,r(e.product.title),1),t("small",_t,r(e.product.category),1)])])])])]),t("td",ht,[t("div",yt,[t("button",{class:"btn btn-link text-primary",onClick:[L(c=>e.qty--,["prevent"]),c=>s.updateCart(e)],disabled:e.qty<=1},vt,8,bt),m(t("input",{type:"number",class:"p-2 w-20 text-center",min:"1","onUpdate:modelValue":c=>e.qty=c,disabled:""},null,8,gt),[[W,e.qty]]),t("button",{class:"btn btn-link text-primary",onClick:[L(c=>e.qty++,["prevent"]),c=>s.updateCart(e)]},xt,8,wt)])]),t("td",kt,"NT$ "+r(parseInt(e.total)),1),t("td",At,[t("button",{class:"btn btn-primary",onClick:c=>s.deleteCart(e.id)},"刪除",8,Bt)])]))),128))])])]),(v=(f=s.carts[0])==null?void 0:f.coupon)!=null&&v.title?(l(),n("div",Vt,[t("div",Et,[t("div",Tt,[Nt,(g=s.carts[0])!=null&&g.coupon?(l(),n("div",Pt,[t("span",Ut,r((C=(w=s.carts[0])==null?void 0:w.coupon)==null?void 0:C.title),1),t("span",Wt,r(`消費滿 NT$ ${(k=(x=s.carts[0])==null?void 0:x.coupon)==null?void 0:k.min_buy_price_by_discount}，享
            ${((B=(A=s.carts[0])==null?void 0:A.coupon)==null?void 0:B.percent)/10} 折`),1)])):y("",!0)])])])):y("",!0),t("div",Dt,[t("div",Lt,[St,t("div",$t,[t("form",It,[m(t("input",{type:"text",class:"teat-start p-2 w-50",placeholder:"請輸入優惠代碼","onUpdate:modelValue":o[1]||(o[1]=e=>i.coupon=e)},null,512),[[W,i.coupon]]),t("button",{type:"button",class:"btn btn-primary p-3",onClick:o[2]||(o[2]=e=>_.sendCoupon(i.coupon))}," 送出優惠券 ")])])])]),t("div",Rt,[t("div",jt,[t("div",Ot,[Mt,m(t("select",{class:"form-select mb-5 fs-6 w-100","onUpdate:modelValue":o[3]||(o[3]=e=>i.deliverChoose.location=e)},[qt,(l(!0),n(p,null,h(i.locations,e=>(l(),n("option",{value:e,key:e},r(e),9,Ft))),128))],512),[[b,i.deliverChoose.location]]),m(t("select",{class:"form-select fs-6 w-100","onUpdate:modelValue":o[4]||(o[4]=e=>i.deliverChoose.deliver=e)},[Gt,(l(!0),n(p,null,h(i.delivers,e=>(l(),n("option",{value:e,key:e},r(e),9,Ht))),128))],512),[[b,i.deliverChoose.deliver]]),Kt,zt,m(t("select",{class:"form-select fs-6 w-100","onUpdate:modelValue":o[5]||(o[5]=e=>i.deliverChoose.payWay=e)},[Jt,(l(!0),n(p,null,h(i.payWays,e=>(l(),n("option",{value:e,key:e},r(e),9,Qt))),128))],512),[[b,i.deliverChoose.payWay]])]),t("div",Xt,[Yt,t("div",Zt,[t("div",te,[ee,t("p",se,"NT$ "+r(_.rawTotal),1)]),t("div",oe,[ie,(V=s.carts[0])!=null&&V.coupon?(l(),n("span",le,r(`消費滿 NT$ ${(T=(E=s.carts[0])==null?void 0:E.coupon)==null?void 0:T.min_buy_price_by_discount}，享
              ${((P=(N=s.carts[0])==null?void 0:N.coupon)==null?void 0:P.percent)/10} 折`),1)):y("",!0)]),ne,t("div",re,[ae,t("p",ce,"NT$ "+r(parseInt(s.total)),1)]),t("button",{class:"btn btn-primary p-5 fs-5 w-100 text-white",onClick:o[6]||(o[6]=(...e)=>_.goCheckout&&_.goCheckout(...e))}," 前往結帳 ")])])])]),U(R)],64)}const _e=$(Z,[["render",de]]);export{_e as default};
