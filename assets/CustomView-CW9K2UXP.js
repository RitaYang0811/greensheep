import{P as y,_ as x,a as w}from"./package-dPzwEbwM.js";import{p as g}from"./productStore-VekhIFKR.js";import{c as k}from"./cartStore-N4_WY6nM.js";import{_ as I,a as C,m as h,c as i,b as t,d as l,w as p,t as s,h as m,e as o,k as u,f as $,v as T,r as f,o as c,p as P,l as N,i as S}from"./index-CEVURgZv.js";import"./navigation-Cl-6uGD4.js";import"./sweetalert2.all-BcLYtpcy.js";const q={data(){return{isLoading:!1,qty:1}},components:{ProductSwiper:y},computed:{...C(g,["productInfo","recommendProducts"])},watch:{routeData:{handler(){this.getProductInfo(this.$route.params.id)},deep:!0}},methods:{...h(g,["getProductInfo","getRecommendProducts"]),...h(k,["addToCart"]),scrollTo(){const e=this.$refs.productContent;e&&e.scrollIntoView({behavior:"smooth"})}},mounted(){console.log(this.$route),this.getProductInfo(this.$route.params.id),this.getRecommendProducts(this.$route.params.id)},beforeRouteUpdate(e,a){this.getProductInfo(e.params.id),this.getRecommendProducts(e.params.id),this.$nextTick(()=>{window.scrollTo(0,0)})}},r=e=>(P("data-v-5768a4ad"),e=e(),N(),e),j={class:"container pt-7 pt-lg-10"},V={class:"row justify-content-center"},D={"aria-label":"breadcrumb"},M={class:"breadcrumb col-12"},L={class:"breadcrumb-item"},R={class:"breadcrumb-item","aria-current":"page"},A={class:"breadcrumb-item","aria-current":"page"},B={class:"breadcrumb-item active","aria-current":"page"},U={class:"row justify-content-between"},E={class:"col-12 col-lg-6"},F={class:"col-12 col-lg-5 text-start d-flex flex-column"},W={class:"d-flex align-items-center mb-2"},z={class:"fw-bold fs-3 fs-lg-2 me-5"},G=r(()=>t("i",{class:"bi bi-heart fs-4 text-primary"},null,-1)),H=r(()=>t("i",{class:"bi bi-heart-fill fs-4 text-primary"},null,-1)),J={key:0,class:"text-secondary fs-4 fs-lg-3 fw-medium mb-4 mb-lg-5"},K={key:1,class:"mb-4 mb-lg-5 d-flex align-item-center gap-4"},O={class:"text-primary fs-4 fs-lg-3 fw-medium"},Q={class:"text-grey9F fs-6 fs-lg-5 fw-medium text-decoration-line-through my-1"},X={key:0,class:"bg-deco p-1 text-dark fs-8 my-1"},Y=r(()=>t("div",{class:"position-relative start-line"},[t("div",{class:"d-flex align-items-bottom text-grey66 fs-9 text-start ms-7"},[t("div",{class:"d-inline-block border-grey66 me-6"},[t("p",{class:"mb-2"},"全館滿NT$2,000，享台灣免運優惠"),t("p",{class:"mb-2"},"全館滿NT$12,000，享國際免運優惠"),t("p",{class:"mb-2"},"凡購買指定商品，免費升級品牌絨布禮盒包裝(含品牌緞帶)")]),t("a",{class:"d-flex align-items-center text-primary collapsed align-self-end mb-2","data-bs-toggle":"collapse",href:"#productCollapse",role:"button","aria-expanded":"false","aria-controls":"productCollapse"},[o("查看"),t("br",{class:"d-none d-lg-block d-xl-none"}),o("更多 "),t("span",{class:"material-icons expand-less fs-6"}," expand_less "),t("span",{class:"material-icons expand-more fs-6"}," expand_more ")])]),t("div",{class:"collapse text-grey66 fs-9 text-start ms-7",id:"productCollapse"},[t("p",{class:"mb-2 font-noto-serif"},"情人節限定優惠，指定商品8折起"),t("p",null,"慶祝板娘生日，購買指定商品，就送板娘飛吻一個～啾咪！")])],-1)),Z={class:"my-4"},tt={class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},et=r(()=>t("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),st={class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},at=r(()=>t("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),ot={key:0,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},rt=r(()=>t("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),dt={class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},it=r(()=>t("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),ct={key:2,class:"d-flex align-items-center justify-content-between bg-light rounded-2 px-6 py-3 gap-5 mb-4"},nt=S('<div class="form-check fs-8 w-40 w-lg-30 w-xl-40 d-flex align-items-center" style="color:#990000;" data-v-5768a4ad><input class="form-check-input no-box-shadow cursor-pointer me-2" type="checkbox" value="" id="flexCheckDefault" data-v-5768a4ad><label class="form-check-label fw-medium mb-0 py-5 cursor-pointer" for="flexCheckDefault" data-v-5768a4ad> 優惠加購價 NT$200 </label></div><div class="d-flex align-items-center justify-content-between gap-4 w-60 w-lg-70 w-xl-60" data-v-5768a4ad><div data-v-5768a4ad><span class="badge rounded-pill bg-primary text-white lh-sm mb-1" data-v-5768a4ad>送禮必備</span><p class="text-start text-dark fs-8 lh-sm" data-v-5768a4ad>品牌絨布禮盒包裝(含品牌緞帶)</p><span class="text-dark fs-9" data-v-5768a4ad>(原價500元)</span></div><img src="'+x+'" alt="" data-bs-toggle="modal" data-bs-target="#packageModal" style="width:60px;height:60px;cursor:pointer;" class="img-fluid" data-v-5768a4ad></div><div class="modal fade" id="packageModal" tabindex="-1" aria-labelledby="packageModalLabel" aria-hidden="true" data-v-5768a4ad><div class="modal-dialog" data-v-5768a4ad><div class="modal-content p-6 bg-primary" data-v-5768a4ad><div class="modal-header border-0 justify-content-end" data-v-5768a4ad><button type="button" class="text-white mb-4 bg-transparent border-0" data-bs-dismiss="modal" aria-label="Close" data-v-5768a4ad><span class="material-icons fs-2" data-v-5768a4ad> close </span></button></div><div class="modal-body" data-v-5768a4ad><img src="'+w+'" alt="package-picture" class="border border-1" style="border-radius:60px 0;" data-v-5768a4ad></div></div></div></div>',3),lt=[nt],pt={class:"d-flex gap-5 my-5 flex-column justify-content-center"},mt={class:"d-flex gap-4 align-content-center justify-content-center"},ut=["disabled"],ft=r(()=>t("i",{class:"bi bi-dash-lg text- fs-3"},null,-1)),bt=[ft],gt=r(()=>t("i",{class:"bi bi-plus-lg text-primary fs-3"},null,-1)),ht=[gt];function _t(e,a,vt,yt,d,xt){const b=f("router-link"),_=f("routerLink"),v=f("ProductSwiper");return c(),i("div",j,[t("div",V,[t("nav",D,[t("ol",M,[t("li",L,[l(b,{to:"/"},{default:p(()=>[o("首頁")]),_:1})]),t("li",R,[l(b,{to:"/products"},{default:p(()=>[o("全部商品")]),_:1})]),t("li",A,[l(_,{to:`/products?category=${e.productInfo.category}`},{default:p(()=>[o(s(e.productInfo.category),1)]),_:1},8,["to"])]),t("li",B,s(e.productInfo.title),1)])]),t("div",U,[t("div",E,[l(v,{"product-info":e.productInfo},null,8,["product-info"])]),t("div",F,[t("div",W,[t("h1",z,s(e.productInfo.title),1),G,H]),e.productInfo.origin_price===e.productInfo.price?(c(),i("p",J," NT$ "+s(e.productInfo.origin_price),1)):(c(),i("p",K,[t("span",O," NT$ "+s(e.productInfo.price),1),t("span",Q," NT$ "+s(e.productInfo.origin_price),1),e.productInfo.discount!==10?(c(),i("span",X,s(e.productInfo.discount)+"折",1)):m("",!0)])),Y,t("div",Z,[t("p",tt,[et,o(" 材質："+s(e.productInfo.material),1)]),t("p",st,[at,o(" "+s(e.productInfo.purchaseWay)+"：接單後"+s(e.productInfo.makingDays)+"日內出貨 ",1)]),Array.isArray(e.productInfo.gifts)?(c(),i("p",ot,[rt,o(" 贈："+s(e.productInfo.gifts.join("、")),1)])):m("",!0),t("p",dt,[it,o(" 包裝："+s(e.productInfo.wrap),1)])]),e.productInfo.wrap==="品牌經典紙盒包裝"?(c(),i("div",ct,lt)):m("",!0),t("div",pt,[t("div",mt,[t("button",{type:"button",class:"btn qty-btn rounded-circle border-primary p-0",disabled:d.qty===1,onClick:a[0]||(a[0]=u(n=>d.qty--,["prevent"]))},bt,8,ut),$(t("input",{"onUpdate:modelValue":a[1]||(a[1]=n=>d.qty=n),type:"number",class:"border-0 text-center number-select",min:"1",value:"1",readonly:""},null,512),[[T,d.qty]]),t("button",{class:"btn qty-btn rounded-circle p-0 border-primary",onClick:a[2]||(a[2]=u(n=>d.qty++,["prevent"]))},ht)]),t("button",{href:"#",class:"custom-btn custom-btn-primary text-center border-1 add-to-cart fw-bold w-80 mx-auto",style:{height:"40px"},onClick:a[3]||(a[3]=u(n=>e.addToCart(e.productInfo.id,d.qty),["prevent"]))})])])])])])}const Pt=I(q,[["render",_t],["__scopeId","data-v-5768a4ad"]]);export{Pt as default};