import{p as C}from"./productStore-Bg4WZcwR.js";import{c as B}from"./cartStore-BHXyDQwM.js";import{S as D}from"./SwiperImages-hTaaskJH.js";import{S as y}from"./sweetalert2.all-Dj232z_e.js";import{_ as N,a as T,m as I,c as a,d as g,w as h,b as t,F as f,r as w,t as n,f as d,i as p,u as x,j as v,o as i,e as P,x as V,p as W,k as j}from"./index-BZ6VGQXF.js";import"./navigation-G7NGoiHC.js";const _="https://greensheep-json-server.onrender.com",A={props:{id:{type:String,required:!0}},data(){return{isShow:!1,sortTitle:"",isBlock:!0,isList:!1,searchWord:"",currentCategory:"",currentProductsPage:1,currentSearchWord:"",productsIdArr:[]}},components:{SwiperImages:D},computed:{...T(C,["products","categoryProducts","currentProducts","currentPage","category","categories","showTitle","isLoading","loadingStatus"])},watch:{$route(){this.currentCategory=this.$route.params.category,this.searchWord=this.$route.query.keyword,this.currentProductsPage=1,this.getFilterProducts(this.currentCategory,1,this.sortTitle,this.searchWord),this.likeInit()},currentProductsPage(){this.changeCurrentPage(),this.likeInit()}},methods:{...I(C,["getProducts","getFilterProducts","getSort"]),...I(B,["addToCart"]),async likeInit(){const s=JSON.parse(localStorage.getItem("userInfo"));if(s===null)return!1;await this.$http.get(`${_}/favorites?userId=${s.id}`).then(o=>{this.$refs.favIcon.forEach((m,l)=>{o.data.forEach(r=>{r.productId===m.id&&(this.$refs.favIcon[l].classList.remove("bi-heart"),this.$refs.favIcon[l].classList.add("bi-heart-fill"))})})}).catch(o=>{console.log(o)})},async addToLike(s){const o={productId:`${s}`,userId:Number(JSON.parse(localStorage.getItem("userInfo")).id)},m=await this.$http.get(`${_}/favorites?userId=${o.userId}&&productId=${o.productId}`);m.data.length?this.$http.delete(`${_}/favorites/${m.data[0].id}`).then(()=>{y.fire({position:"top-end",icon:"success",title:"已經移除收藏囉!",showConfirmButton:!1,toast:!0,timer:1500}),this.$refs.favIcon.forEach((l,r)=>{s===l.id&&(this.$refs.favIcon[r].classList.remove("bi-heart-fill"),this.$refs.favIcon[r].classList.add("bi-heart"))})}).catch(l=>{console.log(l)}):this.$http.post(`${_}/favorites`,o).then(()=>{y.fire({position:"top-end",icon:"success",title:"已加入收藏!",showConfirmButton:!1,toast:!0,timer:1500}),this.$refs.favIcon.forEach((l,r)=>{s===l.id&&(this.$refs.favIcon[r].classList.remove("bi-heart"),this.$refs.favIcon[r].classList.add("bi-heart-fill"))})}).catch(l=>{console.log(l)})},async isLogin(s){const o=JSON.parse(localStorage.getItem("userInfo"));o===null&&y.fire({icon:"warning",title:"請先登入會員喔！",showConfirmButton:!1,timer:1500}),await this.$http.get(`${_}/600/users/${o.id}`,{headers:{Authorization:`Bearer ${o.token}`}}).then(()=>{this.addToLike(s)}).catch(()=>{y.fire({icon:"warning",title:"請先登入會員喔！",showConfirmButton:!1,timer:1500})})},changeCategory(s){this.currentCategory=s,this.currentProductsPage=1,this.getFilterProducts(this.currentCategory,1)},changeCurrentPage(){this.getFilterProducts(this.currentCategory,this.currentProductsPage)},toggleDisplay(s){this.likeInit(),s==="isBlock"?(this.isBlock=!0,this.isList=!1):s==="isList"&&(this.isBlock=!1,this.isList=!0)},sort(s){this.isShow=!1,this.sortTitle=s,this.getFilterProducts(this.currentCategory,this.currentProductsPage,s)},async fetchData(){await this.getProducts(),console.log(this.$route),this.currentCategory=this.$route.params.category,this.searchWord=this.$route.query.keyword,console.log(this.currentCategory,this.searchWord),this.getFilterProducts(this.currentCategory,1,"timeN2O",this.searchWord)}},async mounted(){await this.fetchData(),this.products.forEach(s=>{this.productsIdArr.push(s.id)}),this.likeInit()}},c=s=>(W("data-v-f1c8a32c"),s=s(),j(),s),H=c(()=>t("img",{src:"https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",alt:"swiperImage"},null,-1)),F=c(()=>t("img",{src:"https://images.unsplash.com/photo-1450297166380-cabe503887e5?q=80&w=1730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"swiperImage"},null,-1)),M=c(()=>t("img",{src:"https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",alt:"swiperImage"},null,-1)),G={class:"container"},q={class:"row py-7 py-lg-10"},E={class:"d-none d-lg-block col-lg-2 h-bottom-line"},O={class:"d-none d-md-block list-unstyled text-dark text-start"},U={class:"col-lg-10 py-2"},z={class:"d-flex justify-content-between mb-5"},J={"aria-label":"breadcrumb"},Y={class:"breadcrumb"},K={class:"breadcrumb-item"},Q={class:"breadcrumb-item"},R={class:"breadcrumb-item active"},X={class:"mb-3 position-relative"},Z={key:0,class:"sort-list border border-primary bg-white rounded-2 text-primary list-unstyled position-absolute top-100 end-0 z-3",style:{width:"200px"}},tt=c(()=>t("i",{class:"bi bi-list fs-5"},null,-1)),et=[tt],st=c(()=>t("i",{class:"bi bi-grid-3x2-gap-fill fs-5"},null,-1)),ot=[st],rt={class:"text-end text-primary mb-5"},it={key:0,class:"row row-cols-2 row-cols-lg-4 gx-4 gy-6 mb-10 mb-lg-20"},at={class:"h-border position-relative",style:{width:"100%","padding-top":"100%"}},nt={key:0,class:"position-absolute start-0 bottom-0 z-1 bg-deco p-1 text-dark fs-8"},ct=["src"],lt=["src"],dt={class:"card-body text-start"},ut={class:"card-title display-7 text-dark my-2"},ht={key:0,class:"card-text display-8 text-primary mt-3 mb-6"},pt={key:1,class:"mt-3 mb-1"},gt={class:"card-text display-8 text-primary my-2 me-2"},mt=c(()=>t("br",null,null,-1)),ft={class:"card-text display-8 text-grey9F text-decoration-line-through"},_t={class:"d-flex gap-2"},bt=["onClick"],yt=["id"],vt=["onClick"],kt=c(()=>t("i",{class:"bi bi-bag-check fs-6"},null,-1)),wt=[kt],xt={class:"container"},Ct={key:0,class:"table mb-10 mb-lg-15"},It={class:"product-item row mb-3 bg-white rounded-3 align-content-center py-2 py-lg-1"},Pt={class:"col-5 col-md-3 my-auto px-4 py-4 border-bottom-0"},$t=["src","alt"],Lt={class:"col-7 col-md-9 row flex-wrap justify-content-between"},St={class:"col-12 col-md-4 mb-3 my-md-auto"},Bt={key:0,class:"bg-primary text-white py-1 px-2 rounded-pill fs-9 float-end"},Dt={class:"card-title display-6 text-dark"},Nt={key:0,class:"col-12 col-md-auto my-md-auto"},Tt={class:"card-text fs-7 text-dark"},Vt={key:1,class:"col-12 col-md-auto my-auto"},Wt={key:0,class:"card-text fs-8 bg-deco py-1 px-1 me-2"},jt={class:"d-inline-block card-text fs-7 text-dark mb-2"},At=c(()=>t("br",null,null,-1)),Ht={class:"d-inline-block card-text display-8 text-grey9F text-decoration-line-through"},Ft={class:"col-12 col-md-3 my-md-auto d-flex gap-2"},Mt=["onClick"],Gt=["id"],qt=["onClick"],Et=c(()=>t("i",{class:"bi bi-bag-check fs-6"},null,-1)),Ot=[Et],Ut={key:1},zt={class:"text-dark text-center"},Jt={key:2},Yt={class:"text-dark text-center"},Kt={key:3,class:"text-center va-pagination"},Qt=c(()=>t("span",{class:"material-icons fs-8 p-1"}," navigate_before ",-1)),Rt=c(()=>t("span",{class:"material-icons fs-8 p-1"}," navigate_next ",-1)),Xt={key:4,class:"d-flex justify-content-center align-items-center",style:{"min-height":"360px"}},Zt=c(()=>t("div",{class:"spinner-border",role:"status"},[t("span",{class:"visually-hidden"},"Loading...")],-1)),te=[Zt];function ee(s,o,m,l,r,u){const $=v("SwiperImages"),b=v("router-link"),L=v("vue-awesome-paginate"),S=v("VueLoading");return i(),a(f,null,[g($,null,{firstImage:h(()=>[H]),secondImage:h(()=>[F]),thirdImage:h(()=>[M]),_:1}),t("main",G,[t("div",q,[t("aside",E,[t("ul",O,[(i(!0),a(f,null,w(s.categories,e=>(i(),a("li",{key:e},[g(b,{to:{path:`/products/${e}`},class:x(["d-inline-block py-2 mx-3 position-relative cursor-pointer",{active:this.$route.path===`/products/${e}`}])},{default:h(()=>[P(n(e),1)]),_:2},1032,["to","class"])]))),128))])]),t("div",U,[t("div",z,[t("nav",J,[t("ol",Y,[t("li",K,[g(b,{to:"/"},{default:h(()=>[P("首頁")]),_:1})]),t("li",Q,[t("a",{class:"cursor-pointer",onClick:o[0]||(o[0]=e=>u.changeCategory("全部商品 ALL"))},"商品")]),t("li",R,n(r.currentCategory),1)])]),t("div",X,[t("a",{href:"#",class:"btn fs-8 border border-primary btn-md text-primary py-2 px-3 float-end align-middle",onClick:o[1]||(o[1]=d(e=>r.isShow=!r.isShow,["prevent"]))},"排序"),r.isShow===!0?(i(),a("ul",Z,[t("li",{class:"px-4 py-2 border-bottom border-primary cursor-pointer",onClick:o[2]||(o[2]=d(e=>u.sort("priceL2H"),["prevent"]))}," 價格 由低至高 "),t("li",{class:"px-4 py-2 border-bottom border-primary cursor-pointer",onClick:o[3]||(o[3]=d(e=>u.sort("priceH2L"),["prevent"]))}," 價格 由高至低 "),t("li",{class:"px-4 py-2 border-bottom border-primary cursor-pointer",onClick:o[4]||(o[4]=d(e=>u.sort("timeN2O"),["prevent"]))}," 上架時間 由新到舊 "),t("li",{class:"px-4 py-2 cursor-pointer",onClick:o[5]||(o[5]=d(e=>u.sort("timeO2N"),["prevent"]))}," 上架時間 由舊到新 ")])):p("",!0),t("a",{href:"#",class:x(["btn border border-primary btn-md text-primary me-2 me-md-4 py-1 px-2 float-end",[{"bg-primary":r.isList},{"text-white":r.isList}]]),onClick:o[6]||(o[6]=d(e=>u.toggleDisplay("isList"),["prevent"]))},et,2),t("a",{href:"#",class:x(["btn border border-primary btn-md text-primary me-2 me-md-4 py-1 px-2 float-end",[{"bg-primary":r.isBlock},{"text-white":r.isBlock}]]),onClick:o[7]||(o[7]=d(e=>u.toggleDisplay("isBlock"),["prevent"]))},ot,2)])]),t("p",rt,"排序方式："+n(s.showTitle),1),s.currentProducts.length!==0?(i(),a(f,{key:0},[r.isBlock===!0?(i(),a("div",it,[(i(!0),a(f,null,w(s.currentProducts,e=>(i(),a("li",{class:"col list-unstyled h-100 column",key:e.id},[g(b,{to:{path:`/products/detail/${e.id}`},class:"card border-0"},{default:h(()=>[t("div",at,[e.discount!==10?(i(),a("span",nt,n(e.discount)+"折",1)):p("",!0),t("img",{src:e.imageUrl,class:"show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,ct),t("img",{src:e.imageUrl2,class:"change position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,lt)]),t("div",dt,[t("h5",ut,n(e.title),1),e.origin_price===e.price?(i(),a("p",ht," NT$ "+n(e.origin_price),1)):(i(),a("div",pt,[t("span",gt,"NT$ "+n(e.origin_price),1),mt,t("span",ft," NT$ "+n(e.price),1)])),t("div",_t,[t("button",{type:"button",class:"custom-btn custom-btn-secondary text-center w-100 border-1 add-to-cart",onClick:d(k=>u.isLogin(e.id),["prevent"])},[t("i",{class:"bi bi-heart fs-5",id:e.id,ref_for:!0,ref:"favIcon"},null,8,yt)],8,bt),t("button",{type:"button",class:"custom-btn custom-btn-toGreen text-center w-100 border-1 add-to-cart",onClick:d(k=>s.addToCart(e.id),["prevent"])},wt,8,vt)])])]),_:2},1032,["to"])]))),128))])):p("",!0),t("div",xt,[r.isList===!0?(i(),a("table",Ct,[t("tbody",null,[(i(!0),a(f,null,w(s.currentProducts,e=>(i(),V(b,{key:e.id,to:{path:`/products/detail/${e.id}`}},{default:h(()=>[t("tr",It,[t("th",Pt,[t("img",{src:e.imageUrl,class:"list-img img-fluid rounded object-fit-cover",alt:e.title},null,8,$t)]),t("div",Lt,[t("td",St,[e.highLight?(i(),a("span",Bt,"主打")):p("",!0),t("h5",Dt,n(e.title),1)]),e.origin_price===e.price?(i(),a("td",Nt,[t("p",Tt,"NT $"+n(e.origin_price),1)])):(i(),a("td",Vt,[e.discount!==10?(i(),a("span",Wt,n(e.discount)+"折",1)):p("",!0),t("span",jt,"NT$ "+n(e.origin_price),1),At,t("span",Ht," NT$ "+n(e.price),1)])),t("td",Ft,[t("button",{type:"button",class:"custom-btn custom-btn-secondary text-center w-60 w-lg-100 border-1 add-to-cart",onClick:d(k=>u.isLogin(e.id),["prevent"])},[t("i",{class:"bi bi-heart fs-5",id:e.id,ref_for:!0,ref:"favIcon"},null,8,Gt)],8,Mt),t("button",{href:"#",class:"custom-btn custom-btn-toGreen text-center w-60 w-lg-100 border-1 add-to-cart",onClick:d(k=>s.addToCart(e.id),["prevent"])},Ot,8,qt)])])])]),_:2},1032,["to"]))),128))])])):p("",!0)])],64)):r.searchWord?(i(),a("div",Ut,[t("p",zt," 搜尋不到「"+n(r.searchWord)+"」相關商品，你要不要試試其他關鍵字呢？ ",1)])):(i(),a("div",Jt,[t("p",Yt," 目前「"+n(r.currentCategory)+"」還沒有上架商品～您可以逛逛其他分類 ",1)])),s.currentProducts.length!==0?(i(),a("div",Kt,[g(L,{"total-items":s.categoryProducts.length,"items-per-page":12,"max-pages-shown":3,modelValue:r.currentProductsPage,"onUpdate:modelValue":o[8]||(o[8]=e=>r.currentProductsPage=e),onClick:u.changeCurrentPage,"pagination-container-class":"cus-pagination ","paginate-buttons-class":"page-link","number-buttons-class":"fs-8","active-page-class":"active"},{"prev-button":h(()=>[Qt]),"next-button":h(()=>[Rt]),_:1},8,["total-items","modelValue","onClick"])])):p("",!0),s.loadingStatus.loadingGetProducts?(i(),a("div",Xt,te)):p("",!0),g(S,{active:s.isLoading,"onUpdate:active":o[9]||(o[9]=e=>s.isLoading=e)},null,8,["active"])])])])],64)}const ce=N(A,[["render",ee],["__scopeId","data-v-f1c8a32c"]]);export{ce as default};
