import{P as C,_ as T,a as P}from"./package-aUTNk-Ur.js";import{p as g}from"./productStore-CCogBY6a.js";import{c as $}from"./cartStore-BNxPeN_I.js";import{_ as j,a as N,m as v,c as r,b as t,d,w as m,t as a,h as f,e as l,k as p,f as S,v as V,F as _,j as y,r as u,o as c,p as q,l as L,i as x}from"./index-DPIE8VT_.js";import"./navigation-B8T9tJci.js";import"./sweetalert2.all-D958VX0y.js";const D={data(){return{isLoading:!1,qty:1}},components:{ProductSwiper:C},computed:{...N(g,["productInfo","recommendProducts"])},watch:{routeData:{handler(){this.getProductInfo(this.$route.params.id)},deep:!0}},methods:{...v(g,["getProductInfo","getRecommendProducts"]),...v($,["addToCart"]),scrollTo(){const s=this.$refs.productContent;s&&s.scrollIntoView({behavior:"smooth"})}},mounted(){console.log(this.$route),this.getProductInfo(this.$route.params.id),this.getRecommendProducts(this.$route.params.id)},beforeRouteUpdate(s,i){this.getProductInfo(s.params.id),this.getRecommendProducts(s.params.id),this.$nextTick(()=>{window.scrollTo(0,0)})}},o=s=>(q("data-v-fac2591a"),s=s(),L(),s),M={class:"container pt-7 pt-lg-10"},U={class:"row justify-content-center"},B={"aria-label":"breadcrumb"},F={class:"breadcrumb col-12"},R={class:"breadcrumb-item"},z={class:"breadcrumb-item","aria-current":"page"},A={class:"breadcrumb-item","aria-current":"page"},G={class:"breadcrumb-item active","aria-current":"page"},E={class:"row justify-content-between"},W={class:"col-12 col-lg-6"},H={class:"col-12 col-lg-5 text-start d-flex flex-column"},J={class:"d-flex align-items-center mb-2"},K={class:"fw-bold fs-3 fs-lg-2 me-5"},O=o(()=>t("i",{class:"bi bi-heart fs-4 text-primary"},null,-1)),Q=o(()=>t("i",{class:"bi bi-heart-fill fs-4 text-primary"},null,-1)),X={key:0,class:"text-secondary fs-4 fs-lg-3 fw-medium mb-4 mb-lg-5"},Y={key:1,class:"mb-4 mb-lg-5 d-flex align-item-center gap-4"},Z={class:"text-primary fs-4 fs-lg-3 fw-medium"},tt={class:"text-grey9F fs-6 fs-lg-5 fw-medium text-decoration-line-through my-1"},st={key:0,class:"bg-deco p-1 text-dark fs-8 my-1"},et=o(()=>t("div",{class:"position-relative start-line"},[t("div",{class:"d-flex align-items-bottom text-grey66 fs-9 text-start ms-7"},[t("div",{class:"d-inline-block border-grey66 me-6"},[t("p",{class:"mb-2"},"全館滿NT$2,000，享台灣免運優惠"),t("p",{class:"mb-2"},"全館滿NT$12,000，享國際免運優惠"),t("p",{class:"mb-2"},"凡購買指定商品，免費升級品牌絨布禮盒包裝(含品牌緞帶)")]),t("a",{class:"d-flex align-items-center text-primary collapsed align-self-end mb-2","data-bs-toggle":"collapse",href:"#productCollapse",role:"button","aria-expanded":"false","aria-controls":"productCollapse"},[l("查看"),t("br",{class:"d-none d-lg-block d-xl-none"}),l("更多 "),t("span",{class:"material-icons expand-less fs-6"}," expand_less "),t("span",{class:"material-icons expand-more fs-6"}," expand_more ")])]),t("div",{class:"collapse text-grey66 fs-9 text-start ms-7",id:"productCollapse"},[t("p",{class:"mb-2 font-noto-serif"},"情人節限定優惠，指定商品8折起"),t("p",null,"慶祝板娘生日，購買指定商品，就送板娘飛吻一個～啾咪！")])],-1)),at={class:"my-4"},ot={class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},it=o(()=>t("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),rt={class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},ct=o(()=>t("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),lt={key:0,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},nt=o(()=>t("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),dt={class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},pt=o(()=>t("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),mt={key:2,class:"d-flex align-items-center justify-content-between bg-light rounded-2 px-6 py-3 gap-5 mb-4"},ft=x('<div class="form-check fs-8 w-40 w-lg-30 w-xl-40 d-flex align-items-center" style="color:#990000;" data-v-fac2591a><input class="form-check-input no-box-shadow cursor-pointer me-2" type="checkbox" value="" id="flexCheckDefault" data-v-fac2591a><label class="form-check-label fw-medium mb-0 py-5 cursor-pointer" for="flexCheckDefault" data-v-fac2591a> 優惠加購價 NT$200 </label></div><div class="d-flex align-items-center justify-content-between gap-4 w-60 w-lg-70 w-xl-60" data-v-fac2591a><div data-v-fac2591a><span class="badge rounded-pill bg-primary text-white lh-sm mb-1" data-v-fac2591a>送禮必備</span><p class="text-start text-dark fs-8 lh-sm" data-v-fac2591a>品牌絨布禮盒包裝(含品牌緞帶)</p><span class="text-dark fs-9" data-v-fac2591a>(原價500元)</span></div><img src="'+T+'" alt="" data-bs-toggle="modal" data-bs-target="#packageModal" style="width:60px;height:60px;cursor:pointer;" class="img-fluid" data-v-fac2591a></div><div class="modal fade" id="packageModal" tabindex="-1" aria-labelledby="packageModalLabel" aria-hidden="true" data-v-fac2591a><div class="modal-dialog" data-v-fac2591a><div class="modal-content p-6 bg-primary" data-v-fac2591a><div class="modal-header border-0 justify-content-end" data-v-fac2591a><button type="button" class="text-white mb-4 bg-transparent border-0" data-bs-dismiss="modal" aria-label="Close" data-v-fac2591a><span class="material-icons fs-2" data-v-fac2591a> close </span></button></div><div class="modal-body" data-v-fac2591a><img src="'+P+'" alt="package-picture" class="border border-1" style="border-radius:60px 0;" data-v-fac2591a></div></div></div></div>',3),ut=[ft],bt={class:"d-flex gap-5 my-5 flex-column justify-content-center"},_t={class:"d-flex gap-4 align-content-center justify-content-center"},ht=["disabled"],gt=o(()=>t("i",{class:"bi bi-dash-lg text- fs-3"},null,-1)),vt=[gt],yt=o(()=>t("i",{class:"bi bi-plus-lg text-primary fs-3"},null,-1)),xt=[yt],wt=x('<svg class="overflow-visible self-rotate" viewBox="0 0 100 100" data-v-fac2591a><path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" fill="none" data-v-fac2591a></path><text class="letter-spacing" fill="#859c89" data-v-fac2591a><textPath xlink:href="#circle" class="text-primary" data-v-fac2591a> * Green Sheep * handmade jewelry * </textPath></text></svg><span class="position-absolute top-50 start-50 translate-middle text-nowrap" data-v-fac2591a><i class="arrow-more bi bi-arrow-down" data-v-fac2591a></i></span>',2),kt=[wt],It={class:"container py-10",ref:"productContent"},Ct={class:"mb-5 text-primary lh-lg","data-aos":"fade-up","data-aos-duration":"1000","data-aos-offset":"50"},Tt={class:"py-5 text-primary"},Pt={class:"d-flex flex-column align-items-center mb-5","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200"},$t=o(()=>t("p",{class:"mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1"},"材質",-1)),jt={class:"lh-lg"},Nt=o(()=>t("div",{class:"d-flex flex-column align-items-center mb-5","data-aos":"fade-up","data-aos-duration":"1000","data-aos-once":"true"},[t("p",{class:"mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1"}," 台灣原創設計 & 手工製作 ")],-1)),St={class:"row py-10 mb-20 mb-lg-25 w-lg-80 mx-auto justify-content-center"},Vt=["src"],qt=o(()=>t("hr",null,null,-1)),Lt={class:"container mb-20"},Dt=o(()=>t("h2",{class:"h4 text-primary mb-10 fw-bold"},"猜你也喜歡",-1)),Mt={class:"row row-cols-2 row-cols-md-4 g-4 mb-20 ps-0"},Ut={class:"h-border position-relative",style:{width:"100%","padding-top":"100%"}},Bt={key:0,class:"position-absolute start-0 bottom-0 z-3 bg-deco p-1 text-dark fs-8"},Ft=["src"],Rt=["src"],zt={class:"card-body text-start"},At={class:"card-title display-7 text-dark my-2"},Gt={key:0,class:"card-text display-8 text-primary mt-3 mb-6"},Et={key:1,class:"mt-3 mb-1"},Wt={class:"card-text display-8 text-primary my-2 me-2"},Ht=o(()=>t("br",null,null,-1)),Jt={class:"card-text display-8 text-grey9F text-decoration-line-through"},Kt=["onClick"],Ot=o(()=>t("i",{class:"bi bi-bag-check fs-6"},null,-1)),Qt=[Ot];function Xt(s,i,Yt,Zt,n,h){const b=u("router-link"),w=u("routerLink"),k=u("ProductSwiper"),I=u("VueLoading");return c(),r(_,null,[t("div",M,[t("div",U,[t("nav",B,[t("ol",F,[t("li",R,[d(b,{to:"/"},{default:m(()=>[l("首頁")]),_:1})]),t("li",z,[d(b,{to:"/products"},{default:m(()=>[l("全部商品")]),_:1})]),t("li",A,[d(w,{to:`/products?category=${s.productInfo.category}`},{default:m(()=>[l(a(s.productInfo.category),1)]),_:1},8,["to"])]),t("li",G,a(s.productInfo.title),1)])]),t("div",E,[t("div",W,[d(k,{"product-info":s.productInfo},null,8,["product-info"])]),t("div",H,[t("div",J,[t("h1",K,a(s.productInfo.title),1),O,Q]),s.productInfo.origin_price===s.productInfo.price?(c(),r("p",X," NT$ "+a(s.productInfo.origin_price),1)):(c(),r("p",Y,[t("span",Z," NT$ "+a(s.productInfo.price),1),t("span",tt," NT$ "+a(s.productInfo.origin_price),1),s.productInfo.discount!==10?(c(),r("span",st,a(s.productInfo.discount)+"折",1)):f("",!0)])),et,t("div",at,[t("p",ot,[it,l(" 材質："+a(s.productInfo.material),1)]),t("p",rt,[ct,l(" "+a(s.productInfo.purchaseWay)+"：接單後"+a(s.productInfo.makingDays)+"日內出貨 ",1)]),Array.isArray(s.productInfo.gifts)?(c(),r("p",lt,[nt,l(" 贈："+a(s.productInfo.gifts.join("、")),1)])):f("",!0),t("p",dt,[pt,l(" 包裝："+a(s.productInfo.wrap),1)])]),s.productInfo.wrap==="品牌經典紙盒包裝"?(c(),r("div",mt,ut)):f("",!0),t("div",bt,[t("div",_t,[t("button",{type:"button",class:"btn qty-btn rounded-circle border-primary p-0",disabled:n.qty===1,onClick:i[0]||(i[0]=p(e=>n.qty--,["prevent"]))},vt,8,ht),S(t("input",{"onUpdate:modelValue":i[1]||(i[1]=e=>n.qty=e),type:"number",class:"border-0 text-center number-select",min:"1",value:"1",readonly:""},null,512),[[V,n.qty]]),t("button",{class:"btn qty-btn rounded-circle p-0 border-primary",onClick:i[2]||(i[2]=p(e=>n.qty++,["prevent"]))},xt)]),t("button",{href:"#",class:"custom-btn custom-btn-primary text-center border-1 add-to-cart fw-bold w-80 mx-auto",style:{height:"40px"},onClick:i[3]||(i[3]=p(e=>s.addToCart(s.productInfo.id,n.qty),["prevent"]))})])])])])]),t("div",{class:"position-relative m-auto cursor-pointer my-10 my-lg-0 mb-lg-20",onClick:i[4]||(i[4]=p((...e)=>h.scrollTo&&h.scrollTo(...e),["prevent"])),style:{width:"100px",height:"100px"}},kt),t("div",It,[t("p",Ct,a(s.productInfo.content),1),t("div",Tt,[t("div",Pt,[$t,t("p",jt,a(s.productInfo.material),1)]),Nt,t("div",St,[(c(!0),r(_,null,y(s.productInfo.imagesUrl,e=>(c(),r("div",{key:e,class:"mb-3 col-6 col-md-4 col-lg-6","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true"},[t("img",{src:e,alt:"商品圖片",class:"product-content-img object-fit-cover"},null,8,Vt)]))),128))]),qt]),t("div",Lt,[Dt,t("ul",Mt,[(c(!0),r(_,null,y(s.recommendProducts,e=>(c(),r("li",{class:"col list-unstyled h-100 column",key:e.id},[d(b,{to:`/products/${e.id}`,class:"card border-0"},{default:m(()=>[t("div",Ut,[e.discount!==10?(c(),r("span",Bt,a(e.discount)+"折",1)):f("",!0),t("img",{src:e.imageUrl,class:"show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,Ft),t("img",{src:e.imageUrl2,class:"change position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,Rt)]),t("div",zt,[t("h5",At,a(e.title),1),e.origin_price===e.price?(c(),r("p",Gt," NT$ "+a(e.origin_price),1)):(c(),r("div",Et,[t("span",Wt,"NT$ "+a(e.origin_price),1),Ht,t("span",Jt," NT$ "+a(e.price),1)])),t("button",{href:"#",class:"custom-btn custom-btn-toGreen text-center w-100 border-1",onClick:p(ts=>s.addToCart(e.id),["prevent"])},Qt,8,Kt)])]),_:2},1032,["to"])]))),128))])])],512),d(I,{active:n.isLoading,"onUpdate:active":i[5]||(i[5]=e=>n.isLoading=e)},null,8,["active"])],64)}const cs=j(D,[["render",Xt],["__scopeId","data-v-fac2591a"]]);export{cs as default};
