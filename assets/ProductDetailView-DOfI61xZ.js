import{g as X,i as Y,e as K,n as U,a as z,N as Q,S as Z,b as ee}from"./navigation-7gO991GN.js";import{_ as H,o as a,c as l,d as I,w,b as s,F as N,r as D,x as R,j as $,a as te,m as F,t as c,u as se,f as C,i as k,e as M,g as oe,v as ie,l as J,p as re,k as ae}from"./index-dwIyU8JD.js";import{p as G}from"./productStore-D9y2Gogm.js";import{c as ne}from"./cartStore-DeARqi3T.js";import"./sweetalert2.all-CtTektYC.js";function le(o){let{swiper:e,extendParams:P,on:v}=o;P({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let m=!1,T=!1;e.thumbs={swiper:null};function g(){const i=e.thumbs.swiper;if(!i||i.destroyed)return;const t=i.clickedIndex,p=i.clickedSlide;if(p&&p.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let f;i.params.loop?f=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10):f=t,e.params.loop?e.slideToLoop(f):e.slideTo(f)}function x(){const{thumbs:i}=e.params;if(m)return!1;m=!0;const t=e.constructor;if(i.swiper instanceof t)e.thumbs.swiper=i.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(Y(i.swiper)){const p=Object.assign({},i.swiper);Object.assign(p,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(p),T=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",g),!0}function u(i){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const p=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let f=1;const d=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(f=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(f=1),f=Math.floor(f),t.slides.forEach(b=>b.classList.remove(d)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let b=0;b<f;b+=1)K(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+b}"]`).forEach(n=>{n.classList.add(d)});else for(let b=0;b<f;b+=1)t.slides[e.realIndex+b]&&t.slides[e.realIndex+b].classList.add(d);const h=e.params.thumbs.autoScrollOffset,L=h&&!t.params.loop;if(e.realIndex!==t.realIndex||L){const b=t.activeIndex;let n,j;if(t.params.loop){const r=t.slides.filter(E=>E.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];n=t.slides.indexOf(r),j=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,j=n>e.previousIndex?"next":"prev";L&&(n+=j==="next"?h:-1*h),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(n)<0&&(t.params.centeredSlides?n>b?n=n-Math.floor(p/2)+1:n=n+Math.floor(p/2)-1:n>b&&t.params.slidesPerGroup,t.slideTo(n,i?0:void 0))}}v("beforeInit",()=>{const{thumbs:i}=e.params;if(!(!i||!i.swiper))if(typeof i.swiper=="string"||i.swiper instanceof HTMLElement){const t=X(),p=()=>{const d=typeof i.swiper=="string"?t.querySelector(i.swiper):i.swiper;if(d&&d.swiper)i.swiper=d.swiper,x(),u(!0);else if(d){const h=L=>{i.swiper=L.detail[0],d.removeEventListener("init",h),x(),u(!0),i.swiper.update(),e.update()};d.addEventListener("init",h)}return d},f=()=>{if(e.destroyed)return;p()||requestAnimationFrame(f)};requestAnimationFrame(f)}else x(),u(!0)}),v("slideChange update resize observerUpdate",()=>{u()}),v("setTransition",(i,t)=>{const p=e.thumbs.swiper;!p||p.destroyed||p.setTransition(t)}),v("beforeDestroy",()=>{const i=e.thumbs.swiper;!i||i.destroyed||T&&i.destroy()}),Object.assign(e.thumbs,{init:x,update:u})}function de(o){let{swiper:e,extendParams:P,emit:v,once:m}=o;P({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function T(){if(e.params.cssMode)return;const u=e.getTranslate();e.setTranslate(u),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function g(){if(e.params.cssMode)return;const{touchEventsData:u,touches:i}=e;u.velocities.length===0&&u.velocities.push({position:i[e.isHorizontal()?"startX":"startY"],time:u.touchStartTime}),u.velocities.push({position:i[e.isHorizontal()?"currentX":"currentY"],time:U()})}function x(u){let{currentPos:i}=u;if(e.params.cssMode)return;const{params:t,wrapperEl:p,rtlTranslate:f,snapGrid:d,touchEventsData:h}=e,b=U()-h.touchStartTime;if(i<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(i>-e.maxTranslate()){e.slides.length<d.length?e.slideTo(d.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(h.velocities.length>1){const y=h.velocities.pop(),S=h.velocities.pop(),W=y.position-S.position,q=y.time-S.time;e.velocity=W/q,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(q>150||U()-y.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,h.velocities.length=0;let n=1e3*t.freeMode.momentumRatio;const j=e.velocity*n;let r=e.translate+j;f&&(r=-r);let E=!1,A;const V=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let O;if(r<e.maxTranslate())t.freeMode.momentumBounce?(r+e.maxTranslate()<-V&&(r=e.maxTranslate()-V),A=e.maxTranslate(),E=!0,h.allowMomentumBounce=!0):r=e.maxTranslate(),t.loop&&t.centeredSlides&&(O=!0);else if(r>e.minTranslate())t.freeMode.momentumBounce?(r-e.minTranslate()>V&&(r=e.minTranslate()+V),A=e.minTranslate(),E=!0,h.allowMomentumBounce=!0):r=e.minTranslate(),t.loop&&t.centeredSlides&&(O=!0);else if(t.freeMode.sticky){let y;for(let S=0;S<d.length;S+=1)if(d[S]>-r){y=S;break}Math.abs(d[y]-r)<Math.abs(d[y-1]-r)||e.swipeDirection==="next"?r=d[y]:r=d[y-1],r=-r}if(O&&m("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(f?n=Math.abs((-r-e.translate)/e.velocity):n=Math.abs((r-e.translate)/e.velocity),t.freeMode.sticky){const y=Math.abs((f?-r:r)-e.translate),S=e.slidesSizesGrid[e.activeIndex];y<S?n=t.speed:y<2*S?n=t.speed*1.5:n=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&E?(e.updateProgress(A),e.setTransition(n),e.setTranslate(r),e.transitionStart(!0,e.swipeDirection),e.animating=!0,z(p,()=>{!e||e.destroyed||!h.allowMomentumBounce||(v("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(A),z(p,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(v("_freeModeNoMomentumRelease"),e.updateProgress(r),e.setTransition(n),e.setTranslate(r),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,z(p,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(r),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&v("_freeModeNoMomentumRelease");(!t.freeMode.momentum||b>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:T,onTouchMove:g,onTouchEnd:x}})}const ce={props:["product-info"],data(){return{thumbsSwiper:"",modules:[de,Q,le]}},components:{Swiper:Z,SwiperSlide:ee},methods:{setThumbsSwiper(o){this.thumbsSwiper=o}}},ue={class:"swiper"},me=["src","alt"],pe=["src","alt"],fe=["src","alt"],he=["src","alt"],be=["src","alt"],ge=["src","alt"];function _e(o,e,P,v,m,T){const g=$("swiper-slide"),x=$("swiper");return a(),l("div",ue,[I(x,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},loop:!0,navigation:!0,thumbs:{swiper:m.thumbsSwiper},modules:m.modules,class:"mySwiper2"},{default:w(()=>[I(g,null,{default:w(()=>[s("img",{src:o.productInfo.imageUrl,alt:o.productInfo.title},null,8,me)]),_:1}),I(g,null,{default:w(()=>[s("img",{src:o.productInfo.imageUrl2,alt:o.productInfo.title},null,8,pe)]),_:1}),(a(!0),l(N,null,D(o.productInfo.imagesUrl,(u,i)=>(a(),R(g,{key:i+123},{default:w(()=>[s("img",{src:u,alt:o.productInfo.title},null,8,fe)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"]),I(x,{onSwiper:T.setThumbsSwiper,loop:!0,spaceBetween:10,slidesPerView:8,freeMode:!0,watchSlidesProgress:!0,modules:m.modules,class:"mySwiper"},{default:w(()=>[I(g,null,{default:w(()=>[s("img",{src:o.productInfo.imageUrl,alt:o.productInfo.title},null,8,he)]),_:1}),I(g,null,{default:w(()=>[s("img",{src:o.productInfo.imageUrl2,alt:o.productInfo.title},null,8,be)]),_:1}),(a(!0),l(N,null,D(o.productInfo.imagesUrl,(u,i)=>(a(),R(g,{key:i+123},{default:w(()=>[s("img",{src:u,alt:o.productInfo.title},null,8,ge)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"])])}const ve=H(ce,[["render",_e],["__scopeId","data-v-f35c641d"]]),ye="/greensheep/assets/package-sm-I4xi3A72.jpg",we="/greensheep/assets/package-4z-bbUzK.jpg",B="https://greensheep-json-server.onrender.com",Ie={data(){return{isLoading:!1,qty:1,isLike:!1}},components:{ProductSwiper:ve},computed:{...te(G,["products","productInfo","recommendProducts"])},watch:{routeData:{handler(){this.getProductInfo(this.$route.params.id)},deep:!0}},methods:{...F(G,["getProducts","getProductInfo","getRecommendProducts"]),...F(ne,["addToCart"]),scrollTo(){const o=this.$refs.productContent;o&&o.scrollIntoView({behavior:"smooth"})},async likeInit(o){const e=JSON.parse(localStorage.getItem("userInfo"));if(e===null)return!1;await this.$http.get(`${B}/favorites?userId=${e.id}&&productId=${o}`).then(P=>{P.data.length&&(this.isLike=!0)}).catch(()=>{})},async addToLike(o){const e={productId:`${o}`,userId:`${JSON.parse(localStorage.getItem("userInfo")).id}`};(await this.$http.get(`${B}/favorites?userId=${e.userId}&&productId=${e.productId}`)).data.length?alert("已經加入過最愛囉!"):this.$http.post(`${B}/favorites`,e).then(()=>{alert("成功加入最愛!"),this.isLike=!0}).catch(v=>{console.log(v)})},async isLogin(o){const e=JSON.parse(localStorage.getItem("userInfo"));if(e===null)return alert("請先登入會員!"),!1;await this.$http.get(`${B}/600/users/${e.id}`,{headers:{Authorization:`Bearer ${e.token}`}}).then(()=>{this.addToLike(o)}).catch(()=>{alert("請先登入會員!")})}},async mounted(){await this.getProducts(),this.getProductInfo(this.$route.params.id),this.getRecommendProducts(this.$route.params.id),this.likeInit(this.$route.params.id),console.log(this.products),console.log(this.productInfo)},beforeRouteUpdate(o){this.getProductInfo(o.params.id),this.getRecommendProducts(o.params.id),this.$nextTick(()=>{window.scrollTo(0,0)})}},_=o=>(re("data-v-dc28d08c"),o=o(),ae(),o),xe={class:"container pt-30"},ke={class:"row justify-content-center"},Te={"aria-label":"breadcrumb"},Se={class:"breadcrumb col-12"},Me={class:"breadcrumb-item"},Pe={class:"breadcrumb-item","aria-current":"page"},Ce={class:"breadcrumb-item","aria-current":"page"},$e={class:"breadcrumb-item active","aria-current":"page"},Le={class:"row justify-content-between"},je={class:"col-12 col-lg-6"},Ee={class:"col-12 col-lg-5 text-start d-flex flex-column"},Ne={class:"d-flex align-items-center mb-2"},Ae={class:"fw-bold fs-3 fs-lg-2 me-5"},Ve={key:0,class:"text-secondary fs-4 fs-lg-3 fw-medium mb-4 mb-lg-5"},Be={key:1,class:"mb-4 mb-lg-5 d-flex align-item-center gap-4"},De={class:"text-primary fs-4 fs-lg-3 fw-medium"},Oe={class:"text-grey9F fs-6 fs-lg-5 fw-medium text-decoration-line-through my-1"},Ue={key:0,class:"bg-deco p-1 text-dark fs-8 my-1"},ze={class:"text-dark fs-7 mb-4"},qe={key:0,class:"text-danger ms-4 fs-8 fst-italic"},Re=_(()=>s("div",{class:"position-relative start-line"},[s("div",{class:"d-flex align-items-bottom text-grey66 fs-9 text-start ms-7"},[s("div",{class:"d-inline-block border-grey66 me-6"},[s("p",{class:"mb-2"},"全館滿NT$2,000，享台灣免運優惠"),s("p",{class:"mb-2"},"全館滿NT$12,000，享國際免運優惠"),s("p",{class:"mb-2"},"凡購買指定商品，免費升級品牌絨布禮盒包裝(含品牌緞帶)")]),s("a",{class:"d-flex align-items-center text-primary collapsed align-self-end mb-2","data-bs-toggle":"collapse",href:"#productCollapse",role:"button","aria-expanded":"false","aria-controls":"productCollapse"},[M("查看"),s("br",{class:"d-none d-lg-block d-xl-none"}),M("更多 "),s("span",{class:"material-icons expand-less fs-6"}," expand_less "),s("span",{class:"material-icons expand-more fs-6"}," expand_more ")])]),s("div",{class:"collapse text-grey66 fs-9 text-start ms-7",id:"productCollapse"},[s("p",{class:"mb-2 font-noto-serif"},"情人節限定優惠，指定商品8折起"),s("p",null,"慶祝板娘生日，購買指定商品，就送板娘飛吻一個～啾咪！")])],-1)),Fe={class:"my-4"},Ge={key:0,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},He=_(()=>s("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),Je={key:1,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},We=_(()=>s("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),Xe={key:2,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},Ye=_(()=>s("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),Ke={key:3,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},Qe=_(()=>s("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),Ze={key:2,class:"d-flex align-items-center justify-content-between bg-light rounded-2 px-6 py-3 gap-5 mb-4"},et={key:0,class:"d-flex align-items-center justify-content-between gap-4 w-100 w-lg-70 w-xl-60"},tt=_(()=>s("div",null,[s("span",{class:"badge rounded-pill bg-primary text-white lh-sm mb-1"},"送禮必備"),s("p",{class:"text-start text-dark fs-8 lh-sm"},"品牌絨布禮盒包裝(含品牌緞帶)"),s("span",{class:"text-dark fs-9"},"(原價500元)")],-1)),st=_(()=>s("img",{src:ye,alt:"","data-bs-toggle":"modal","data-bs-target":"#packageModal",style:{width:"60px",height:"60px",cursor:"pointer"},class:"img-fluid"},null,-1)),ot=[tt,st],it=J('<div class="modal fade" id="packageModal" tabindex="-1" aria-labelledby="packageModalLabel" aria-hidden="true" data-v-dc28d08c><div class="modal-dialog" data-v-dc28d08c><div class="modal-content p-6 bg-primary" data-v-dc28d08c><div class="modal-header border-0 justify-content-end" data-v-dc28d08c><button type="button" class="text-white mb-4 bg-transparent border-0" data-bs-dismiss="modal" aria-label="Close" data-v-dc28d08c><span class="material-icons fs-2" data-v-dc28d08c> close </span></button></div><div class="modal-body" data-v-dc28d08c><img src="'+we+'" alt="package-picture" class="border border-1" style="border-radius:60px 0;" data-v-dc28d08c></div></div></div></div>',1),rt={class:"d-flex gap-5 my-5 flex-column justify-content-center"},at={class:"d-flex gap-4 align-content-center justify-content-center"},nt=["disabled"],lt=_(()=>s("i",{class:"bi bi-dash-lg text- fs-3"},null,-1)),dt=[lt],ct=["disabled"],ut=_(()=>s("i",{class:"bi bi-plus-lg text-primary fs-3"},null,-1)),mt=[ut],pt=J('<svg class="overflow-visible self-rotate" viewBox="0 0 100 100" data-v-dc28d08c><path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" fill="none" data-v-dc28d08c></path><text class="letter-spacing" fill="#859c89" data-v-dc28d08c><textPath xlink:href="#circle" class="text-primary" data-v-dc28d08c> * Green Sheep * handmade jewelry * </textPath></text></svg><span class="position-absolute top-50 start-50 translate-middle text-nowrap" data-v-dc28d08c><i class="arrow-more bi bi-arrow-down" data-v-dc28d08c></i></span>',2),ft=[pt],ht={class:"container py-10",ref:"productContent"},bt={class:"product-content mb-5 text-primary lh-lg w-100 w-lg-80 mx-auto","data-aos":"fade-up","data-aos-duration":"1000","data-aos-offset":"50"},gt={class:"py-5 text-primary"},_t={class:"d-flex flex-column align-items-center mb-5","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200"},vt={key:0,class:"mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1"},yt={key:1,class:"lh-lg"},wt=_(()=>s("div",{class:"d-flex flex-column align-items-center mb-5","data-aos":"fade-up","data-aos-duration":"1000"},[s("p",{class:"mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1"}," 台灣原創設計 & 手工製作 ")],-1)),It={class:"row py-10 mb-20 mb-lg-25 w-lg-80 mx-auto justify-content-center"},xt={class:"mb-3 col-6 col-md-4 col-lg-6","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true"},kt=["src"],Tt={class:"mb-3 col-6 col-md-4 col-lg-6","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true"},St=["src"],Mt=["src"],Pt=_(()=>s("hr",null,null,-1)),Ct={class:"container mb-20"},$t=_(()=>s("h2",{class:"h4 text-primary mb-10 fw-bold"},"猜你也喜歡",-1)),Lt={class:"row row-cols-2 row-cols-md-4 g-4 mb-20 ps-0"},jt={class:"h-border position-relative",style:{width:"100%","padding-top":"100%"}},Et={key:0,class:"position-absolute start-0 bottom-0 z-3 bg-deco p-1 text-dark fs-8"},Nt=["src"],At=["src"],Vt={class:"card-body text-start"},Bt={class:"card-title display-7 text-dark my-2"},Dt={key:0,class:"card-text display-8 text-primary mt-3 mb-6"},Ot={key:1,class:"mt-3 mb-1"},Ut={class:"card-text display-8 text-primary my-2 me-2"},zt=_(()=>s("br",null,null,-1)),qt={class:"card-text display-8 text-grey9F text-decoration-line-through"},Rt=["onClick"],Ft=_(()=>s("i",{class:"bi bi-bag-check fs-6"},null,-1)),Gt=[Ft];function Ht(o,e,P,v,m,T){const g=$("router-link"),x=$("routerLink"),u=$("ProductSwiper"),i=$("VueLoading");return a(),l(N,null,[s("div",xe,[s("div",ke,[s("nav",Te,[s("ol",Se,[s("li",Me,[I(g,{to:"/"},{default:w(()=>[M("首頁")]),_:1})]),s("li",Pe,[I(g,{to:"/products/全部商品%20ALL"},{default:w(()=>[M("全部商品")]),_:1})]),s("li",Ce,[I(x,{to:{path:`/products/${o.productInfo.category}`}},{default:w(()=>[M(c(o.productInfo.category),1)]),_:1},8,["to"])]),s("li",$e,c(o.productInfo.title),1)])]),s("div",Le,[s("div",je,[I(u,{"product-info":o.productInfo},null,8,["product-info"])]),s("div",Ee,[s("div",Ne,[s("h1",Ae,c(o.productInfo.title),1),s("i",{class:se(["bi fs-4 text-primary",[m.isLike?"bi-heart-fill":"bi-heart"]]),onClick:e[0]||(e[0]=C(t=>T.isLogin(o.productInfo.id),["prevent"])),ref:"favIcon"},null,2)]),o.productInfo.origin_price===o.productInfo.price?(a(),l("p",Ve," NT$ "+c(o.productInfo.origin_price),1)):(a(),l("p",Be,[s("span",De," NT$ "+c(o.productInfo.price),1),s("span",Oe," NT$ "+c(o.productInfo.origin_price),1),o.productInfo.discount!==10?(a(),l("span",Ue,c(o.productInfo.discount)+"折",1)):k("",!0)])),s("p",ze,[M(" 庫存數量："+c(o.productInfo.stockNum)+" "+c(o.productInfo.unit),1),o.productInfo.stockNum<5?(a(),l("span",qe,"庫存緊張")):k("",!0)]),Re,s("div",Fe,[o.productInfo.material?(a(),l("p",Ge,[He,M(" 材質："+c(o.productInfo.material),1)])):k("",!0),o.productInfo.purchaseWay?(a(),l("p",Je,[We,M(" "+c(o.productInfo.purchaseWay)+"：接單後"+c(o.productInfo.makingDays)+"日內出貨 ",1)])):k("",!0),Array.isArray(o.productInfo.gifts)?(a(),l("p",Xe,[Ye,M(" 贈："+c(o.productInfo.gifts.join("、")),1)])):k("",!0),o.productInfo.wrap?(a(),l("p",Ke,[Qe,M(" 包裝："+c(o.productInfo.wrap),1)])):k("",!0)]),o.productInfo.wrap==="品牌絨布禮盒包裝"?(a(),l("div",Ze,[o.productInfo.wrap==="品牌絨布禮盒包裝"?(a(),l("div",et,ot)):k("",!0),it])):k("",!0),s("div",rt,[s("div",at,[s("button",{type:"button",class:"btn qty-btn rounded-circle border-primary p-0",disabled:m.qty===1,onClick:e[1]||(e[1]=C(t=>m.qty--,["prevent"]))},dt,8,nt),oe(s("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>m.qty=t),type:"number",class:"border-0 text-center number-select",min:"1",value:"1",readonly:""},null,512),[[ie,m.qty]]),s("button",{class:"btn qty-btn rounded-circle p-0 border-primary",disabled:m.qty===o.productInfo.stockNum,onClick:e[3]||(e[3]=C(t=>m.qty++,["prevent"]))},mt,8,ct)]),s("button",{href:"#",class:"custom-btn custom-btn-primary text-center border-1 add-to-cart fw-bold w-80 mx-auto",style:{height:"40px"},onClick:e[4]||(e[4]=C(t=>o.addToCart(o.productInfo.id,m.qty),["prevent"]))})])])])])]),s("div",{class:"position-relative m-auto cursor-pointer my-10 my-lg-0 mb-lg-20",onClick:e[5]||(e[5]=C((...t)=>T.scrollTo&&T.scrollTo(...t),["prevent"])),style:{width:"100px",height:"100px"}},ft),s("div",ht,[s("p",bt,c(o.productInfo.content),1),s("div",gt,[s("div",_t,[o.productInfo.material?(a(),l("p",vt," 材質 ")):k("",!0),o.productInfo.material?(a(),l("p",yt,c(o.productInfo.material),1)):k("",!0)]),wt,s("div",It,[s("div",xt,[s("img",{src:o.productInfo.imageUrl,alt:"商品圖片",class:"product-content-img object-fit-cover"},null,8,kt)]),s("div",Tt,[s("img",{src:o.productInfo.imageUrl2,alt:"商品圖片",class:"product-content-img object-fit-cover"},null,8,St)]),(a(!0),l(N,null,D(o.productInfo.imagesUrl,t=>(a(),l("div",{key:t,class:"mb-3 col-6 col-md-4 col-lg-6","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true"},[s("img",{src:t,alt:"商品圖片",class:"product-content-img object-fit-cover"},null,8,Mt)]))),128))]),Pt]),s("div",Ct,[$t,s("ul",Lt,[(a(!0),l(N,null,D(o.recommendProducts,t=>(a(),l("li",{class:"col list-unstyled h-100 column",key:t.id},[I(g,{to:{path:`/products/detail/${t.id}`},class:"card border-0"},{default:w(()=>[s("div",jt,[t.discount!==10?(a(),l("span",Et,c(t.discount)+"折",1)):k("",!0),s("img",{src:t.imageUrl,class:"show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,Nt),s("img",{src:t.imageUrl2,class:"change position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,At)]),s("div",Vt,[s("h5",Bt,c(t.title),1),t.origin_price===t.price?(a(),l("p",Dt," NT$ "+c(t.origin_price),1)):(a(),l("div",Ot,[s("span",Ut,"NT$ "+c(t.origin_price),1),zt,s("span",qt," NT$ "+c(t.price),1)])),s("button",{href:"#",class:"custom-btn custom-btn-toGreen text-center w-100 border-1",onClick:C(p=>o.addToCart(t.id),["prevent"])},Gt,8,Rt)])]),_:2},1032,["to"])]))),128))])])],512),I(i,{active:m.isLoading,"onUpdate:active":e[6]||(e[6]=t=>m.isLoading=t)},null,8,["active"])],64)}const Qt=H(Ie,[["render",Ht],["__scopeId","data-v-dc28d08c"]]);export{Qt as default};