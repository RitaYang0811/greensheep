import{p as L,s as H}from"./productStore-DI1pH_rp.js";import{c as M}from"./cartStore-C2jM9jCM.js";import{N as F,S as G,a as U}from"./navigation-DcbRxohg.js";import{A as O,P as z}from"./pagination-BLtUMrhq.js";import{_ as B,o as r,u as D,w as d,b as u,j as h,p as A,k as I,e as t,a as S,m as T,c as i,F as m,r as w,t as a,f as c,i as _,x as $,d as k}from"./index-BUi18zZB.js";import"./sweetalert2.all-y8mgFPfW.js";const W={data(){return{modules:[F,O,z]}},components:{Swiper:G,SwiperSlide:U}},C=s=>(A("data-v-ea9c2554"),s=s(),I(),s),q=C(()=>t("img",{src:"https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},null,-1)),Y=C(()=>t("img",{src:"https://images.unsplash.com/photo-1653903414969-0df006d9b6fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},null,-1)),J=C(()=>t("img",{src:"https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"},null,-1));function R(s,o,P,b,n,l){const g=h("swiper-slide"),y=h("swiper");return r(),D(y,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},"slides-per-view":1,modules:n.modules,centeredSlides:!0,navigation:!0,pagination:{clickable:!0},loop:!0,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!0},class:"mySwiper"},{default:d(()=>[u(g,null,{default:d(()=>[q]),_:1}),u(g,null,{default:d(()=>[Y]),_:1}),u(g,null,{default:d(()=>[J]),_:1})]),_:1},8,["modules"])}const E=B(W,[["render",R],["__scopeId","data-v-ea9c2554"]]),x="https://greensheep-json-server.onrender.com",Q={data(){return{isShow:!1,showTitle:"",isBlock:!0,isList:!1,searchWord:"",currentCategory:"",currentProductsPage:1}},components:{SwiperAllProducts:E},computed:{...S(L,["products","isLoading","categoryProducts","currentProducts","currentPage","category","categories","loadingStatus"]),...S(H,["searchQuery"])},watch:{$route(s,o){this.currentCategory=this.category,this.loadData(),console.log("路由變化後重新取得分類產品")},currentProductsPage(s){console.log(s),this.changeCurrentPage()}},methods:{...T(L,["getProducts","getFilterProducts","getSort"]),...T(M,["addToCart"]),async addToLike(s){if(console.log("產品:",s),console.log(await this.isLogin()),await this.isLogin()===void 0){const o={productId:`${s}`,userId:`${JSON.parse(localStorage.getItem("userInfo")).id}`};(await this.$http.get(`${x}/favorites?userId=${o.userId}&&productId=${o.productId}`)).data.length?alert("已經加入過最愛囉!"):this.$http.post(`${x}/favorites`,o).then(b=>{alert("成功加入最愛!")}).catch(b=>{console.log(b)})}},async isLogin(){const s=JSON.parse(localStorage.getItem("userInfo"));if(s===null)return alert("請先登入會員!"),!1;await this.$http.get(`${x}/600/users/${s.id}`,{headers:{Authorization:`Bearer ${s.token}`}}).then(o=>(console.log(123),!0)).catch(o=>(alert("請先登入會員!"),!1))},loadData(){this.getFilterProducts()},changeCategory(s){this.currentProductsPage=1,s==="all"?this.currentCategory="":this.currentCategory=s,this.getFilterProducts(this.currentCategory,1)},changeCurrentPage(){this.getFilterProducts(this.currentCategory,this.currentProductsPage)},toggleDisplay(s){s==="isBlock"?(this.isBlock=!0,this.isList=!1):s==="isList"&&(this.isBlock=!1,this.isList=!0)},sort(s){this.isShow=!1,this.getFilterProducts(this.currentCategory,this.currentProductsPage,s)},scrollToTop(){window.scrollTo(0,0)}},mounted(){this.getProducts(),console.log(this.$route)}},p=s=>(A("data-v-1f5d342a"),s=s(),I(),s),K={class:"container"},X={class:"row py-7 py-lg-10"},Z={class:"d-none d-lg-block col-lg-2 h-bottom-line"},tt={class:"d-none d-md-block list-unstyled text-dark text-start"},et={class:"col-lg-10 py-2"},st={class:"d-flex justify-content-between mb-5"},ot={"aria-label":"breadcrumb"},rt={class:"breadcrumb"},it={class:"breadcrumb-item"},nt={class:"breadcrumb-item"},lt={key:1,class:"breadcrumb-item active"},at={class:"mb-3 position-relative"},ct={key:0,class:"sort-list border border-primary bg-white rounded-2 text-primary list-unstyled position-absolute top-100 end-0 z-3",style:{width:"200px"}},dt=p(()=>t("i",{class:"bi bi-list fs-5"},null,-1)),ut=[dt],pt=p(()=>t("i",{class:"bi bi-grid-3x2-gap-fill fs-5"},null,-1)),_t=[pt],ht={key:0,class:"row row-cols-2 row-cols-lg-4 gx-4 gy-6 mb-10 mb-lg-20"},gt={class:"h-border position-relative",style:{width:"100%","padding-top":"100%"}},mt={key:0,class:"position-absolute start-0 bottom-0 z-1 bg-deco p-1 text-dark fs-8"},bt=["src"],yt=["src"],ft={class:"card-body text-start"},kt={class:"card-title display-7 text-dark my-2"},vt={key:0,class:"card-text display-8 text-primary mt-3 mb-6"},wt={key:1,class:"mt-3 mb-1"},xt={class:"card-text display-8 text-primary my-2 me-2"},Ct=p(()=>t("br",null,null,-1)),Pt={class:"card-text display-8 text-grey9F text-decoration-line-through"},Lt={class:"d-flex gap-2"},St=["onClick"],Tt=p(()=>t("i",{class:"bi bi-heart fs-5"},null,-1)),$t=[Tt],Bt=["onClick"],Dt=p(()=>t("i",{class:"bi bi-bag-check fs-6"},null,-1)),At=[Dt],It={class:"container"},Nt={key:0,class:"table mb-10 mb-lg-15"},Vt={class:"product-item row mb-3 bg-white rounded-3 align-content-center py-2 py-lg-1"},jt={class:"col-5 col-md-3 my-auto px-4 py-4 border-bottom-0"},Ht=["src","alt"],Mt={class:"col-7 col-md-9 row flex-wrap justify-content-between"},Ft={class:"col-12 col-md-4 mb-3 my-md-auto"},Gt={key:0,class:"bg-primary text-white py-1 px-2 rounded-pill fs-9 float-end"},Ut={class:"card-title display-6 text-dark"},Ot={key:0,class:"col-12 col-md-auto my-md-auto"},zt={class:"card-text fs-7 text-dark"},Wt={key:1,class:"col-12 col-md-auto my-auto"},qt={key:0,class:"card-text fs-8 bg-deco py-1 px-1 me-2"},Yt={class:"d-inline-block card-text fs-7 text-dark mb-2"},Jt=p(()=>t("br",null,null,-1)),Rt={class:"d-inline-block card-text display-8 text-grey9F text-decoration-line-through"},Et={class:"col-12 col-md-3 my-md-auto d-flex gap-2"},Qt=["onClick"],Kt=p(()=>t("i",{class:"bi bi-heart fs-5"},null,-1)),Xt=[Kt],Zt=["onClick"],te=p(()=>t("i",{class:"bi bi-bag-check fs-6"},null,-1)),ee=[te],se={key:1},oe={class:"text-dark text-center"},re={key:2,class:"text-center va-pagination"},ie=p(()=>t("span",{class:"material-icons fs-8 p-1"}," navigate_before ",-1)),ne=p(()=>t("span",{class:"material-icons fs-8 p-1"}," navigate_next ",-1)),le={key:3,class:"d-flex justify-content-center align-items-center",style:{"min-height":"360px"}},ae=p(()=>t("div",{class:"spinner-border",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1)),ce=[ae];function de(s,o,P,b,n,l){const g=h("Swiper-All-Products"),y=h("RouterLink"),v=h("router-link"),N=h("routerLink"),V=h("vue-awesome-paginate"),j=h("VueLoading");return r(),i(m,null,[u(g),t("main",K,[t("div",X,[t("aside",Z,[t("ul",tt,[t("li",null,[u(y,{to:"/products/productsAll",class:"d-inline-block py-2 mx-3 position-relative cursor-pointer",onClick:o[0]||(o[0]=e=>l.changeCategory("all"))},{default:d(()=>[k("全部商品 ALL")]),_:1})]),(r(!0),i(m,null,w(s.categories,e=>(r(),i("li",{key:e},[u(y,{to:{path:`/products/${e}`},class:"d-inline-block py-2 mx-3 position-relative cursor-pointer",onClick:f=>l.changeCategory(e)},{default:d(()=>[k(a(e),1)]),_:2},1032,["to","onClick"])]))),128))])]),t("div",et,[t("div",st,[t("nav",ot,[t("ol",rt,[t("li",it,[u(v,{to:"/"},{default:d(()=>[k("首頁")]),_:1})]),t("li",nt,[u(N,{to:"/products/productsAll",class:"cursor-pointer",onClick:o[1]||(o[1]=e=>l.changeCategory("all"))},{default:d(()=>[k("商品")]),_:1})]),n.currentCategory?(r(),i("li",{key:0,class:"breadcrumb-item active",onClick:o[2]||(o[2]=e=>l.changeCategory(n.currentCategory))},a(n.currentCategory),1)):(r(),i("li",lt,"全部商品 ALL"))])]),t("div",at,[t("a",{href:"#",class:"btn fs-8 border border-primary btn-md text-primary py-2 px-3 float-end align-middle",onClick:o[3]||(o[3]=c(e=>n.isShow=!n.isShow,["prevent"]))},"排序"),n.isShow===!0?(r(),i("ul",ct,[t("li",{class:"px-4 py-2 border-bottom border-primary cursor-pointer",onClick:o[4]||(o[4]=c(e=>l.sort("new"),["prevent"]))}," 最近更新 "),t("li",{class:"px-4 py-2 border-bottom border-primary cursor-pointer",onClick:o[5]||(o[5]=c(e=>l.sort("priceL2H"),["prevent"]))}," 價格 由低至高 "),t("li",{class:"px-4 py-2 border-bottom border-primary cursor-pointer",onClick:o[6]||(o[6]=c(e=>l.sort("priceH2L"),["prevent"]))}," 價格 由高至低 "),t("li",{class:"px-4 py-2 border-bottom border-primary cursor-pointer",onClick:o[7]||(o[7]=c(e=>l.sort("timeN2O"),["prevent"]))}," 上架時間 由新到舊 "),t("li",{class:"px-4 py-2 cursor-pointer",onClick:o[8]||(o[8]=c(e=>l.sort("timeO2N"),["prevent"]))}," 上架時間 由舊到新 ")])):_("",!0),t("a",{href:"#",class:$(["btn border border-primary btn-md text-primary me-2 me-md-4 py-1 px-2 float-end",[{"bg-primary":n.isList},{"text-white":n.isList}]]),onClick:o[9]||(o[9]=c(e=>l.toggleDisplay("isList"),["prevent"]))},ut,2),t("a",{href:"#",class:$(["btn border border-primary btn-md text-primary me-2 me-md-4 py-1 px-2 float-end",[{"bg-primary":n.isBlock},{"text-white":n.isBlock}]]),onClick:o[10]||(o[10]=c(e=>l.toggleDisplay("isBlock"),["prevent"]))},_t,2)])]),s.currentProducts.length!==0?(r(),i(m,{key:0},[n.isBlock===!0?(r(),i("div",ht,[(r(!0),i(m,null,w(s.currentProducts,e=>(r(),i("li",{class:"col list-unstyled h-100 column",key:e.id},[u(v,{to:`/products/${e.id}`,class:"card border-0",onClick:l.scrollToTop},{default:d(()=>[t("div",gt,[e.discount!==10?(r(),i("span",mt,a(e.discount)+"折",1)):_("",!0),t("img",{src:e.imageUrl,class:"show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,bt),t("img",{src:e.imageUrl2,class:"change position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,yt)]),t("div",ft,[t("h5",kt,a(e.title),1),e.origin_price===e.price?(r(),i("p",vt," NT$ "+a(e.origin_price),1)):(r(),i("div",wt,[t("span",xt,"NT$ "+a(e.origin_price),1),Ct,t("span",Pt," NT$ "+a(e.price),1)])),t("div",Lt,[t("button",{type:"button",class:"custom-btn custom-btn-secondary text-center w-100 border-1 add-to-cart",onClick:c(f=>l.addToLike(e.id),["prevent"])},$t,8,St),t("button",{type:"button",class:"custom-btn custom-btn-toGreen text-center w-100 border-1 add-to-cart",onClick:c(f=>s.addToCart(e.id),["prevent"])},At,8,Bt)])])]),_:2},1032,["to","onClick"])]))),128))])):_("",!0),t("div",It,[n.isList===!0?(r(),i("table",Nt,[t("tbody",null,[(r(!0),i(m,null,w(s.currentProducts,e=>(r(),D(v,{key:e.id,to:`/products/${e.id}`,onClick:l.scrollToTop},{default:d(()=>[t("tr",Vt,[t("th",jt,[t("img",{src:e.imageUrl,class:"list-img img-fluid rounded object-fit-cover",alt:e.title},null,8,Ht)]),t("div",Mt,[t("td",Ft,[e.highLight?(r(),i("span",Gt,"主打")):_("",!0),t("h5",Ut,a(e.title),1)]),e.origin_price===e.price?(r(),i("td",Ot,[t("p",zt,"NT $"+a(e.origin_price),1)])):(r(),i("td",Wt,[e.discount!==10?(r(),i("span",qt,a(e.discount)+"折",1)):_("",!0),t("span",Yt,"NT$ "+a(e.origin_price),1),Jt,t("span",Rt," NT$ "+a(e.price),1)])),t("td",Et,[t("button",{type:"button",class:"custom-btn custom-btn-secondary text-center w-60 w-lg-100 border-1 add-to-cart",onClick:c(f=>l.addToLike(e.id),["prevent"])},Xt,8,Qt),t("button",{href:"#",class:"custom-btn custom-btn-toGreen text-center w-60 w-lg-100 border-1 add-to-cart",onClick:c(f=>s.addToCart(e.id),["prevent"])},ee,8,Zt)])])])]),_:2},1032,["to","onClick"]))),128))])])):_("",!0)])],64)):(r(),i("div",se,[t("p",oe," 目前分類「"+a(n.currentCategory)+"」還沒有商品～你可以逛逛其他分類 ",1)])),s.currentProducts.length!==0?(r(),i("div",re,[u(V,{"total-items":s.categoryProducts.length,"items-per-page":12,"max-pages-shown":3,modelValue:n.currentProductsPage,"onUpdate:modelValue":o[11]||(o[11]=e=>n.currentProductsPage=e),onClick:l.changeCurrentPage,"pagination-container-class":"cus-pagination ","paginate-buttons-class":"page-link","number-buttons-class":"fs-8","active-page-class":"active"},{"prev-button":d(()=>[ie]),"next-button":d(()=>[ne]),_:1},8,["total-items","modelValue","onClick"])])):_("",!0),s.loadingStatus.loadingGetProducts?(r(),i("div",le,ce)):_("",!0),u(j,{active:s.isLoading,"onUpdate:active":o[12]||(o[12]=e=>s.isLoading=e)},null,8,["active"])])])])],64)}const be=B(Q,[["render",de],["__scopeId","data-v-1f5d342a"]]);export{be as default};