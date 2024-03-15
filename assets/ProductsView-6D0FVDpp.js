import{p as C}from"./productStore-Bmd5ouAN.js";import{c as B}from"./cartStore-OavjT9w-.js";import{S as D}from"./SwiperImages-BE7supi1.js";import{S as _}from"./sweetalert2.all-B7PAY33k.js";import{_ as T,a as N,m as P,c as i,e as p,w as u,b as t,F as g,r as w,t as a,g as d,j as h,x,k as b,o as r,f as I,y as V,p as W,l as j}from"./index-3qIeMt9n.js";import"./navigation-BbOYT6ye.js";const f="https://greensheep-json-server.onrender.com",A={props:{id:{type:String,required:!0}},data(){return{isShow:!1,sortTitle:"",isBlock:!0,isList:!1,searchWord:"",currentCategory:"",currentProductsPage:1,currentSearchWord:"",productsIdArr:[]}},components:{SwiperImages:D},computed:{...N(C,["products","categoryProducts","currentProducts","currentPage","category","categories","showTitle","isLoading","loadingStatus"])},watch:{$route(){this.currentCategory=this.$route.params.category,this.searchWord=this.$route.query.keyword,this.currentProductsPage=1,console.log("路由變化",this.currentCategory,this.searchWord),this.getFilterProducts(this.currentCategory,1,this.sortTitle,this.searchWord)},currentProductsPage(s){console.log(s),this.changeCurrentPage()}},methods:{...P(C,["getProducts","getFilterProducts","getSort"]),...P(B,["addToCart"]),async likeInit(){const s=JSON.parse(localStorage.getItem("userInfo"));if(s===null)return!1;await this.$http.get(`${f}/favorites?userId=${s.id}`).then(o=>{console.log("回傳:",o.data)}).catch(o=>{})},async addToLike(s){const o={productId:`${s}`,userId:`${JSON.parse(localStorage.getItem("userInfo")).id}`};(await this.$http.get(`${f}/favorites?userId=${o.userId}&&productId=${o.productId}`)).data.length?_.fire({position:"top-end",icon:"warning",title:"已經加入過收藏囉!",showConfirmButton:!1,toast:!0,timer:1500}):this.$http.post(`${f}/favorites`,o).then(k=>{_.fire({position:"top-end",icon:"success",title:"已加入收藏!",showConfirmButton:!1,toast:!0,timer:1500}),this.$refs.favIcon.forEach((n,c)=>{s===n.id&&(this.$refs.favIcon[c].classList.remove("bi-heart"),this.$refs.favIcon[c].classList.add("bi-heart-fill"))})}).catch(k=>{console.log(k)})},async isLogin(s){const o=JSON.parse(localStorage.getItem("userInfo"));o===null&&_.fire({icon:"warning",title:"請先登入會員喔！",showConfirmButton:!1,timer:1500}),await this.$http.get(`${f}/600/users/${o.id}`,{headers:{Authorization:`Bearer ${o.token}`}}).then(y=>{this.addToLike(s)}).catch(y=>{_.fire({icon:"warning",title:"請先登入會員喔！",showConfirmButton:!1,timer:1500})})},changeCategory(s){this.currentCategory=s,this.currentProductsPage=1,this.getFilterProducts(this.currentCategory,1)},changeCurrentPage(){this.getFilterProducts(this.currentCategory,this.currentProductsPage)},toggleDisplay(s){s==="isBlock"?(this.isBlock=!0,this.isList=!1):s==="isList"&&(this.isBlock=!1,this.isList=!0)},sort(s){this.isShow=!1,this.sortTitle=s,this.getFilterProducts(this.currentCategory,this.currentProductsPage,s)},async fetchData(){await this.getProducts(),console.log(this.$route),this.currentCategory=this.$route.params.category,this.searchWord=this.$route.query.keyword,console.log(this.currentCategory,this.searchWord),this.getFilterProducts(this.currentCategory,1,"timeN2O",this.searchWord)}},async mounted(){await this.fetchData(),this.products.forEach(s=>{this.productsIdArr.push(s.id)}),this.likeInit()}},l=s=>(W("data-v-8031a584"),s=s(),j(),s),H=l(()=>t("img",{src:"https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",alt:"swiperImage"},null,-1)),F=l(()=>t("img",{src:"https://images.unsplash.com/photo-1450297166380-cabe503887e5?q=80&w=1730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"swiperImage"},null,-1)),M=l(()=>t("img",{src:"https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",alt:"swiperImage"},null,-1)),G={class:"container"},q={class:"row py-7 py-lg-10"},O={class:"d-none d-lg-block col-lg-2 h-bottom-line"},U={class:"d-none d-md-block list-unstyled text-dark text-start"},z={class:"col-lg-10 py-2"},E={class:"d-flex justify-content-between mb-5"},J={"aria-label":"breadcrumb"},Y={class:"breadcrumb"},K={class:"breadcrumb-item"},Q={class:"breadcrumb-item"},R={class:"breadcrumb-item active"},X={class:"mb-3 position-relative"},Z={key:0,class:"sort-list border border-primary bg-white rounded-2 text-primary list-unstyled position-absolute top-100 end-0 z-3",style:{width:"200px"}},tt=l(()=>t("i",{class:"bi bi-list fs-5"},null,-1)),et=[tt],st=l(()=>t("i",{class:"bi bi-grid-3x2-gap-fill fs-5"},null,-1)),ot=[st],rt={class:"text-end text-primary mb-5"},it={key:0,class:"row row-cols-2 row-cols-lg-4 gx-4 gy-6 mb-10 mb-lg-20"},nt={class:"h-border position-relative",style:{width:"100%","padding-top":"100%"}},at={key:0,class:"position-absolute start-0 bottom-0 z-1 bg-deco p-1 text-dark fs-8"},ct=["src"],lt=["src"],dt={class:"card-body text-start"},ut={class:"card-title display-7 text-dark my-2"},ht={key:0,class:"card-text display-8 text-primary mt-3 mb-6"},pt={key:1,class:"mt-3 mb-1"},gt={class:"card-text display-8 text-primary my-2 me-2"},mt=l(()=>t("br",null,null,-1)),_t={class:"card-text display-8 text-grey9F text-decoration-line-through"},bt={class:"d-flex gap-2"},ft=["onClick"],yt=["id"],kt=["onClick"],vt=l(()=>t("i",{class:"bi bi-bag-check fs-6"},null,-1)),wt=[vt],xt={class:"container"},Ct={key:0,class:"table mb-10 mb-lg-15"},Pt={class:"product-item row mb-3 bg-white rounded-3 align-content-center py-2 py-lg-1"},It={class:"col-5 col-md-3 my-auto px-4 py-4 border-bottom-0"},St=["src","alt"],Lt={class:"col-7 col-md-9 row flex-wrap justify-content-between"},$t={class:"col-12 col-md-4 mb-3 my-md-auto"},Bt={key:0,class:"bg-primary text-white py-1 px-2 rounded-pill fs-9 float-end"},Dt={class:"card-title display-6 text-dark"},Tt={key:0,class:"col-12 col-md-auto my-md-auto"},Nt={class:"card-text fs-7 text-dark"},Vt={key:1,class:"col-12 col-md-auto my-auto"},Wt={key:0,class:"card-text fs-8 bg-deco py-1 px-1 me-2"},jt={class:"d-inline-block card-text fs-7 text-dark mb-2"},At=l(()=>t("br",null,null,-1)),Ht={class:"d-inline-block card-text display-8 text-grey9F text-decoration-line-through"},Ft={class:"col-12 col-md-3 my-md-auto d-flex gap-2"},Mt=["onClick"],Gt=["id"],qt=["onClick"],Ot=l(()=>t("i",{class:"bi bi-bag-check fs-6"},null,-1)),Ut=[Ot],zt={key:1},Et={class:"text-dark text-center"},Jt={key:2},Yt={class:"text-dark text-center"},Kt={key:3,class:"text-center va-pagination"},Qt=l(()=>t("span",{class:"material-icons fs-8 p-1"}," navigate_before ",-1)),Rt=l(()=>t("span",{class:"material-icons fs-8 p-1"}," navigate_next ",-1)),Xt={key:4,class:"d-flex justify-content-center align-items-center",style:{"min-height":"360px"}},Zt=l(()=>t("div",{class:"spinner-border",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1)),te=[Zt];function ee(s,o,y,k,n,c){const S=b("SwiperImages"),m=b("router-link"),L=b("vue-awesome-paginate"),$=b("VueLoading");return r(),i(g,null,[p(S,null,{firstImage:u(()=>[H]),secondImage:u(()=>[F]),thirdImage:u(()=>[M]),_:1}),t("main",G,[t("div",q,[t("aside",O,[t("ul",U,[(r(!0),i(g,null,w(s.categories,e=>(r(),i("li",{key:e},[p(m,{to:{path:`/products/${e}`},class:x(["d-inline-block py-2 mx-3 position-relative cursor-pointer",{active:this.$route.path===`/products/${e}`}])},{default:u(()=>[I(a(e),1)]),_:2},1032,["to","class"])]))),128))])]),t("div",z,[t("div",E,[t("nav",J,[t("ol",Y,[t("li",K,[p(m,{to:"/"},{default:u(()=>[I("首頁")]),_:1})]),t("li",Q,[t("a",{class:"cursor-pointer",onClick:o[0]||(o[0]=e=>c.changeCategory("全部商品 ALL"))},"商品")]),t("li",R,a(n.currentCategory),1)])]),t("div",X,[t("a",{href:"#",class:"btn fs-8 border border-primary btn-md text-primary py-2 px-3 float-end align-middle",onClick:o[1]||(o[1]=d(e=>n.isShow=!n.isShow,["prevent"]))},"排序"),n.isShow===!0?(r(),i("ul",Z,[t("li",{class:"px-4 py-2 border-bottom border-primary cursor-pointer",onClick:o[2]||(o[2]=d(e=>c.sort("priceL2H"),["prevent"]))}," 價格 由低至高 "),t("li",{class:"px-4 py-2 border-bottom border-primary cursor-pointer",onClick:o[3]||(o[3]=d(e=>c.sort("priceH2L"),["prevent"]))}," 價格 由高至低 "),t("li",{class:"px-4 py-2 border-bottom border-primary cursor-pointer",onClick:o[4]||(o[4]=d(e=>c.sort("timeN2O"),["prevent"]))}," 上架時間 由新到舊 "),t("li",{class:"px-4 py-2 cursor-pointer",onClick:o[5]||(o[5]=d(e=>c.sort("timeO2N"),["prevent"]))}," 上架時間 由舊到新 ")])):h("",!0),t("a",{href:"#",class:x(["btn border border-primary btn-md text-primary me-2 me-md-4 py-1 px-2 float-end",[{"bg-primary":n.isList},{"text-white":n.isList}]]),onClick:o[6]||(o[6]=d(e=>c.toggleDisplay("isList"),["prevent"]))},et,2),t("a",{href:"#",class:x(["btn border border-primary btn-md text-primary me-2 me-md-4 py-1 px-2 float-end",[{"bg-primary":n.isBlock},{"text-white":n.isBlock}]]),onClick:o[7]||(o[7]=d(e=>c.toggleDisplay("isBlock"),["prevent"]))},ot,2)])]),t("p",rt,"排序方式："+a(s.showTitle),1),s.currentProducts.length!==0?(r(),i(g,{key:0},[n.isBlock===!0?(r(),i("div",it,[(r(!0),i(g,null,w(s.currentProducts,e=>(r(),i("li",{class:"col list-unstyled h-100 column",key:e.id},[p(m,{to:{path:`/products/detail/${e.id}`},class:"card border-0"},{default:u(()=>[t("div",nt,[e.discount!==10?(r(),i("span",at,a(e.discount)+"折",1)):h("",!0),t("img",{src:e.imageUrl,class:"show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,ct),t("img",{src:e.imageUrl2,class:"change position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,lt)]),t("div",dt,[t("h5",ut,a(e.title),1),e.origin_price===e.price?(r(),i("p",ht," NT$ "+a(e.origin_price),1)):(r(),i("div",pt,[t("span",gt,"NT$ "+a(e.origin_price),1),mt,t("span",_t," NT$ "+a(e.price),1)])),t("div",bt,[t("button",{type:"button",class:"custom-btn custom-btn-secondary text-center w-100 border-1 add-to-cart",onClick:d(v=>c.isLogin(e.id),["prevent"])},[t("i",{class:"bi bi-heart fs-5",id:e.id,ref_for:!0,ref:"favIcon"},null,8,yt)],8,ft),t("button",{type:"button",class:"custom-btn custom-btn-toGreen text-center w-100 border-1 add-to-cart",onClick:d(v=>s.addToCart(e.id),["prevent"])},wt,8,kt)])])]),_:2},1032,["to"])]))),128))])):h("",!0),t("div",xt,[n.isList===!0?(r(),i("table",Ct,[t("tbody",null,[(r(!0),i(g,null,w(s.currentProducts,e=>(r(),V(m,{key:e.id,to:{path:`/products/detail/${e.id}`}},{default:u(()=>[t("tr",Pt,[t("th",It,[t("img",{src:e.imageUrl,class:"list-img img-fluid rounded object-fit-cover",alt:e.title},null,8,St)]),t("div",Lt,[t("td",$t,[e.highLight?(r(),i("span",Bt,"主打")):h("",!0),t("h5",Dt,a(e.title),1)]),e.origin_price===e.price?(r(),i("td",Tt,[t("p",Nt,"NT $"+a(e.origin_price),1)])):(r(),i("td",Vt,[e.discount!==10?(r(),i("span",Wt,a(e.discount)+"折",1)):h("",!0),t("span",jt,"NT$ "+a(e.origin_price),1),At,t("span",Ht," NT$ "+a(e.price),1)])),t("td",Ft,[t("button",{type:"button",class:"custom-btn custom-btn-secondary text-center w-60 w-lg-100 border-1 add-to-cart",onClick:d(v=>c.isLogin(e.id),["prevent"])},[t("i",{class:"bi bi-heart fs-5",id:e.id,ref_for:!0,ref:"favIcon"},null,8,Gt)],8,Mt),t("button",{href:"#",class:"custom-btn custom-btn-toGreen text-center w-60 w-lg-100 border-1 add-to-cart",onClick:d(v=>s.addToCart(e.id),["prevent"])},Ut,8,qt)])])])]),_:2},1032,["to"]))),128))])])):h("",!0)])],64)):n.searchWord?(r(),i("div",zt,[t("p",Et," 搜尋不到「"+a(n.searchWord)+"」相關商品，你要不要試試其他關鍵字呢？ ",1)])):(r(),i("div",Jt,[t("p",Yt," 目前「"+a(n.currentCategory)+"」還沒有上架商品～您可以逛逛其他分類 ",1)])),s.currentProducts.length!==0?(r(),i("div",Kt,[p(L,{"total-items":s.categoryProducts.length,"items-per-page":12,"max-pages-shown":3,modelValue:n.currentProductsPage,"onUpdate:modelValue":o[8]||(o[8]=e=>n.currentProductsPage=e),onClick:c.changeCurrentPage,"pagination-container-class":"cus-pagination ","paginate-buttons-class":"page-link","number-buttons-class":"fs-8","active-page-class":"active"},{"prev-button":u(()=>[Qt]),"next-button":u(()=>[Rt]),_:1},8,["total-items","modelValue","onClick"])])):h("",!0),s.loadingStatus.loadingGetProducts?(r(),i("div",Xt,te)):h("",!0),p($,{active:s.isLoading,"onUpdate:active":o[9]||(o[9]=e=>s.isLoading=e)},null,8,["active"])])])])],64)}const ce=T(A,[["render",ee],["__scopeId","data-v-8031a584"]]);export{ce as default};
