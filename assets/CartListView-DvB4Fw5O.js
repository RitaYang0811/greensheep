import{_ as D,o as l,c as r,l as S,N as $,m as R,a as j,b as t,d as N,F as h,r as u,t as n,i as y,g as _,v as P,O as b,j as T,f as U}from"./index-dwIyU8JD.js";import{c as W}from"./cartStore-DeARqi3T.js";import{S as p}from"./sweetalert2.all-CtTektYC.js";const O={},M={class:"container my-20 text-start"},q=S('<h3 class="fs-5 text-start">【 訂 購 前 請 詳 閱 】</h3><ul class="mt-5 text-grey66 fw-normal lh-lg"><li class="fs-7"> 每一款首飾皆為手工訂製，請先與客服確認欲購買商品之到貨日，可接受再下訂。出貨時間依據商品製作期有所不同，並依下單順序出貨。若有特定取貨時間要求或客製作期有所不同，並依下單順序出貨。若有特定取貨時間要求或客製需求，請事先詢問再進行訂購。 </li><li class="fs-7 mt-4"> 台灣含離島寄送，訂單滿 NT$2,000 ，即享有免運優惠。全球寄送，訂單滿NT$12,000，即享有免運優惠。 </li><li class="fs-7 mt-4"> 綠羊Green Sheep 所採用的天然寶石、珍珠皆為自然而成，色差、紋路及生長痕跡不同皆為正常現象，請依實品為主，若辦理退貨需自付運費。 </li><li class="fs-7 mt-4"> 收到商品後若須更改尺寸或其他個人化客製(如調整鍊長、變更寶石、各種變更原設計之修改)，將額外收取工本費。 </li><li class="fs-7 mt-4"> 個人客製化商品(如刻字、設計改款、特殊尺寸、個人化調整等)、活動特殊品項(如預購、訂製商品)，恕不接受退換貨。 </li><li class="fs-7 mt-4"> 網路購物享有之 7 日鑑賞期非試用期，辦理退貨時請保持商品全新完整，透過line客服與我們聯繫，再自行將發票、商品、贈品以原包裝寄回指定地點，待收回檢查確認無誤後將進行退款(退回款項恕不含運費並會扣除跨行匯款手續費)。非瑕疵因素換貨者，將由買方與賣方各負擔一次運費。 </li><li class="fs-7 mt-4"> 為保護雙方權益，拆箱全程請務必錄影，並保留出貨訂單明細、發票。訂單內容有任何問題或遺漏將以錄影為憑據，請於收件 7 日內向客服聯繫申請，超過 7 日將不受理。 </li><li class="fs-7 mt-4"> 網站管理員於平日 10:30-19:00 (不含例假日、國定假日)依序回覆訂單問題，若有不及敬請見諒，我們將逐一回覆。 </li></ul>',2),F=[q];function G(e,o){return l(),r("div",M,F)}const H=D(O,[["render",G]]);var K={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",BASE_URL:"/greensheep/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:z,VITE_APP_API_NAME:J}=K,Q={components:{OrderRules:H,Loading:$},data(){return{isLoading:!1,coupon:"",select:[{location:"台灣",deliver:["黑貓宅急便","7-11取貨","全家取貨","OK取貨","萊爾富取貨"],payWay:["信用卡","貨到付款","轉帳","超商繳費"]},{location:"外島",deliver:["中華郵政","黑貓宅急便","宅配通"],payWay:["信用卡","轉帳"]},{location:"海外",deliver:["中華郵政","DHL","UPS"],payWay:["信用卡"]}],locations:[],delivers:[],payWays:[],deliverChoose:{location:"",deliver:"",payWay:""}}},methods:{...R(W,["getCarts","updateCart","deleteCart","getDeliverData"]),sendCoupon(e){const o=`${z}/api/${J}/coupon`,a={data:{code:e}};this.axios.post(o,a).then(m=>{m.data.success&&p.fire({title:m.data.message,confirmButtonColor:"#566B5A",icon:"warning"}),this.coupon="",this.getCarts()}).catch(m=>{p.fire({title:"優惠券有誤，請重新輸入",confirmButtonColor:"#566B5A",icon:"warning"}),console.log(m)})},showCoupon(e){return(e==null?void 0:e.percent)==100?`消費滿 NT$ ${e==null?void 0:e.min_buy_price_by_price}，享 ${e==null?void 0:e.discount_price} 折扣`:`消費滿 NT$ ${e==null?void 0:e.min_buy_price_by_price}，享
            ${(e==null?void 0:e.percent)/10} 折`},goCheckout(){if(this.carts.length==0){p.fire({title:"購物車是空的",confirmButtonColor:"#566B5A",icon:"warning"});return}if(this.deliverChoose.location.length==0){p.fire({title:"收件地點必填",confirmButtonColor:"#566B5A",icon:"warning"});return}if(this.deliverChoose.deliver.length==0){p.fire({title:"配送方式必填",confirmButtonColor:"#566B5A",icon:"warning"});return}if(this.deliverChoose.payWay.length==0){p.fire({title:"付款方式必填",confirmButtonColor:"#566B5A",icon:"warning"});return}this.getDeliverData(this.deliverChoose),this.$router.push("/order")}},watch:{"deliverChoose.location"(e){this.delivers=[],this.payWays=[],this.deliverChoose.deliver="",this.deliverChoose.payWay="",this.select.forEach(o=>{o.location==e&&(o.deliver.forEach(a=>{this.delivers.push(a)}),o.payWay.forEach(a=>{this.payWays.push(a)}))})}},computed:{...j(W,["carts","total"]),rawTotal(){let e=0;return this.carts.forEach(o=>{e+=o.total}),parseInt(e)}},mounted(){this.select.forEach(e=>{this.locations.push(e.location)}),this.getCarts()}},X={class:"container pt-40"},Y=t("div",{class:"mb-30"},[t("div",{class:"position-relative m-4 w-75 mx-auto"},[t("div",{class:"progress"},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"0%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})]),t("button",{type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill pe-none",style:{width:"3rem",height:"3rem"}}," 1 "),t("button",{type:"button",class:"position-absolute top-0 start-50 translate-middle btn btn-sm bg-white rounded-pill border border-1 border-primary text-primary pe-none",style:{width:"3rem",height:"3rem"}}," 2 "),t("button",{type:"button",class:"position-absolute top-0 start-100 translate-middle btn btn-sm bg-white rounded-pill border border-1 border-primary text-primary pe-none",style:{width:"3rem",height:"3rem"}}," 3 ")]),t("div",{class:"position-relative mt-15 w-75 mx-auto"},[t("p",{class:"position-absolute top-0 start-0 translate-middle text-primary"},"確認購買明細"),t("p",{class:"position-absolute top-0 start-50 translate-middle text-primary"},"付款資料填寫"),t("p",{class:"position-absolute top-0 end-n7 translate-middle text-primary"},"訂單完成")])],-1),Z=t("h1",{class:"fs-4 fs-lg-2 py-20 text-center fw-bold"},"購物車",-1),tt={class:"table align-middle border-primary"},et=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"text-primary fw-medium"},"商品資訊"),t("th",{scope:"col",class:"text-primary fw-medium"},"數量"),t("th",{scope:"col",class:"text-primary fw-medium"},"價格"),t("th",{scope:"col",class:"text-primary fw-medium"})])],-1),st={scope:"row",class:"py-4"},ot={class:"card border-0",style:{"max-width":"540px"}},it={class:"row g-0 align-items-center"},lt={class:"col-md-4"},rt={class:"ratio ratio-1x1"},nt=["src"],at={class:"col-md-8"},dt={class:"card-body"},ct={class:"fs-6 card-title text-primary fw-medium"},pt={class:"text-start fw-normal"},mt={class:"py-4"},ht={class:"d-flex justify-content-center"},_t=["onClick","disabled"],ut=t("i",{class:"bi bi-dash-circle fs-3"},null,-1),yt=[ut],bt=["onUpdate:modelValue"],ft=["onClick"],vt=t("i",{class:"bi bi-plus-circle fs-3"},null,-1),gt=[vt],wt={class:"py-4 text-primary"},Ct={class:"py-4"},xt=["onClick"],kt={key:0,class:"container pt-10"},At={class:""},Bt={key:0,class:"row"},Vt=t("div",{class:"col-md-2 text-primary fw-medium mb-2"},"已使用優惠",-1),Et={class:"col-md-10 text-center text-md-start"},Nt={class:"rounded-pill border border-1 border-secondary text-secondary fs-9 px-4 py-1 me-4"},Pt={class:"fs-7 text-primary"},Tt={class:"container py-10"},Ut={class:"row align-items-center"},Wt=t("div",{class:"col-md-2 text-primary fw-medium d-md-block d-none"},"優惠券折扣",-1),Dt={class:"col-md-10"},It={class:"text-md-start text-center"},Lt={class:"container py-10 py-md-15 border-top border-bottom border-primary border-2"},St={class:"row justify-content-between"},$t={class:"col-md-6 col-12 bg-light px-8 py-8"},Rt=t("h3",{class:"fs-5 fw-medium text-start mb-4"},"選擇收件地點及運送方式",-1),jt=t("option",{value:"",disabled:""},"請選擇地點",-1),Ot=["value"],Mt=t("option",{value:"",disabled:""},"請選擇配送方式",-1),qt=["value"],Ft=t("p",{class:"fs-8 text-start text-grey66 mt-5"}," 出貨後約 3-7 天抵達指定門市。 如遇特殊檔期或急件需求，建議選擇國內宅配方式配送。 ",-1),Gt=t("h3",{class:"fs-5 fw-medium text-start mt-10 mb-4"},"選擇付款方式",-1),Ht=t("option",{value:"",disabled:""},"付款方式",-1),Kt=["value"],zt={class:"col-md-6 col-12 mt-md-0 mt-5 bg-light py-8 px-8"},Jt=t("h3",{class:"fs-5 fw-medium text-start mb-4"},"訂單資訊",-1),Qt={class:"p-5 bg-greyD4 text-dark"},Xt={class:"d-flex justify-content-between mb-5"},Yt=t("p",{class:""},"小計：",-1),Zt={class:""},te={class:"d-flex justify-content-between mb-5"},ee=t("p",{class:""},"優惠券：",-1),se={key:0},oe=t("div",{class:"border border-primary border-1 mb-5"},null,-1),ie={class:"d-flex justify-content-between mb-5"},le=t("p",{class:""},"合計：",-1),re={class:"fw-bold"};function ne(e,o,a,m,i,d){var f,v,g,w,C,x,k,A,B,V,E;const I=T("Loading"),L=T("OrderRules");return l(),r(h,null,[t("div",X,[Y,Z,N(I,{active:i.isLoading,"onUpdate:active":o[0]||(o[0]=s=>i.isLoading=s)},null,8,["active"]),t("table",tt,[et,t("tbody",null,[(l(!0),r(h,null,u(e.carts,s=>(l(),r("tr",{key:s.id},[t("th",st,[t("div",ot,[t("div",it,[t("div",lt,[t("div",rt,[t("img",{src:s.product.imageUrl,class:"img-fluid object-fit-cover",alt:"..."},null,8,nt)])]),t("div",at,[t("div",dt,[t("h5",ct,n(s.product.title),1),t("small",pt,n(s.product.category),1)])])])])]),t("td",mt,[t("div",ht,[t("button",{class:"btn btn-link text-primary",onClick:[U(c=>s.qty--,["prevent"]),c=>e.updateCart(s)],disabled:s.qty<=1},yt,8,_t),_(t("input",{type:"number",class:"p-2 w-20 text-center",min:"1","onUpdate:modelValue":c=>s.qty=c,disabled:""},null,8,bt),[[P,s.qty]]),t("button",{class:"btn btn-link text-primary",onClick:[U(c=>s.qty++,["prevent"]),c=>e.updateCart(s)]},gt,8,ft)])]),t("td",wt,"NT$ "+n(parseInt(s.total)),1),t("td",Ct,[t("button",{class:"btn btn-primary",onClick:c=>e.deleteCart(s.id)},"刪除",8,xt)])]))),128))])])]),(v=(f=e.carts[0])==null?void 0:f.coupon)!=null&&v.title?(l(),r("div",kt,[t("div",At,[(g=e.carts[0])!=null&&g.coupon?(l(),r("div",Bt,[Vt,t("div",Et,[t("span",Nt,n((C=(w=e.carts[0])==null?void 0:w.coupon)==null?void 0:C.title),1),t("span",Pt,n(d.showCoupon((x=e.carts[0])==null?void 0:x.coupon)),1)])])):y("",!0)])])):y("",!0),t("div",Tt,[t("div",Ut,[Wt,t("div",Dt,[t("form",It,[_(t("input",{type:"text",class:"teat-start p-2 w-50",placeholder:"請輸入優惠代碼","onUpdate:modelValue":o[1]||(o[1]=s=>i.coupon=s)},null,512),[[P,i.coupon]]),t("button",{type:"button",class:"btn btn-primary p-3",onClick:o[2]||(o[2]=s=>d.sendCoupon(i.coupon))}," 送出優惠券 ")])])])]),t("div",Lt,[t("div",St,[t("div",$t,[Rt,_(t("select",{class:"form-select mb-5 fs-6 w-100","onUpdate:modelValue":o[3]||(o[3]=s=>i.deliverChoose.location=s)},[jt,(l(!0),r(h,null,u(i.locations,s=>(l(),r("option",{value:s,key:s},n(s),9,Ot))),128))],512),[[b,i.deliverChoose.location]]),_(t("select",{class:"form-select fs-6 w-100","onUpdate:modelValue":o[4]||(o[4]=s=>i.deliverChoose.deliver=s)},[Mt,(l(!0),r(h,null,u(i.delivers,s=>(l(),r("option",{value:s,key:s},n(s),9,qt))),128))],512),[[b,i.deliverChoose.deliver]]),Ft,Gt,_(t("select",{class:"form-select fs-6 w-100","onUpdate:modelValue":o[5]||(o[5]=s=>i.deliverChoose.payWay=s)},[Ht,(l(!0),r(h,null,u(i.payWays,s=>(l(),r("option",{value:s,key:s},n(s),9,Kt))),128))],512),[[b,i.deliverChoose.payWay]])]),t("div",zt,[Jt,t("div",Qt,[t("div",Xt,[Yt,t("p",Zt,"NT$ "+n(d.rawTotal),1)]),t("div",te,[ee,(k=e.carts[0])!=null&&k.coupon?(l(),r("span",se,n(d.showCoupon((A=e.carts[0])==null?void 0:A.coupon)),1)):y("",!0)]),oe,t("div",ie,[le,t("p",re,"NT$ "+n((B=e.carts[0])!=null&&B.coupon?parseInt(e.total)-((E=(V=e.carts[0])==null?void 0:V.coupon)==null?void 0:E.discount_price):parseInt(e.total)),1)]),t("button",{class:"btn btn-primary p-5 fs-5 w-100 text-white",onClick:o[6]||(o[6]=(...s)=>d.goCheckout&&d.goCheckout(...s))}," 前往結帳 ")])])])]),N(L)],64)}const pe=D(Q,[["render",ne]]);export{pe as default};