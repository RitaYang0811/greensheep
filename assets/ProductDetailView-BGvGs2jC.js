import{g as K,i as J,e as Q,n as U,a as O,N as ee,S as te,b as se}from"./navigation-CDVEK7Wv.js";import{_ as W,o as a,c as r,d as I,w,b as o,F as j,r as V,x as F,j as P,a as G,m as z,t as c,u as R,f as C,i as _,e as M,g as oe,v as ie,l as X,p as ae,k as re}from"./index-Xkvk-t6A.js";import{p as H}from"./productStore-DTA1p6G_.js";import{c as ne}from"./cartStore-E6Xqdugz.js";import{l as Z}from"./likeStore-CiNS4_l4.js";import"./sweetalert2.all-BvkflR6O.js";function le(s){let{swiper:e,extendParams:L,on:T}=s;L({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let p=!1,x=!1;e.thumbs={swiper:null};function g(){const i=e.thumbs.swiper;if(!i||i.destroyed)return;const t=i.clickedIndex,m=i.clickedSlide;if(m&&m.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let f;i.params.loop?f=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10):f=t,e.params.loop?e.slideToLoop(f):e.slideTo(f)}function k(){const{thumbs:i}=e.params;if(p)return!1;p=!0;const t=e.constructor;if(i.swiper instanceof t)e.thumbs.swiper=i.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(J(i.swiper)){const m=Object.assign({},i.swiper);Object.assign(m,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(m),x=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",g),!0}function u(i){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const m=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let f=1;const d=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(f=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(f=1),f=Math.floor(f),t.slides.forEach(b=>b.classList.remove(d)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let b=0;b<f;b+=1)Q(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+b}"]`).forEach(l=>{l.classList.add(d)});else for(let b=0;b<f;b+=1)t.slides[e.realIndex+b]&&t.slides[e.realIndex+b].classList.add(d);const h=e.params.thumbs.autoScrollOffset,E=h&&!t.params.loop;if(e.realIndex!==t.realIndex||E){const b=t.activeIndex;let l,N;if(t.params.loop){const n=t.slides.filter($=>$.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];l=t.slides.indexOf(n),N=e.activeIndex>e.previousIndex?"next":"prev"}else l=e.realIndex,N=l>e.previousIndex?"next":"prev";E&&(l+=N==="next"?h:-1*h),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(l)<0&&(t.params.centeredSlides?l>b?l=l-Math.floor(m/2)+1:l=l+Math.floor(m/2)-1:l>b&&t.params.slidesPerGroup,t.slideTo(l,i?0:void 0))}}T("beforeInit",()=>{const{thumbs:i}=e.params;if(!(!i||!i.swiper))if(typeof i.swiper=="string"||i.swiper instanceof HTMLElement){const t=K(),m=()=>{const d=typeof i.swiper=="string"?t.querySelector(i.swiper):i.swiper;if(d&&d.swiper)i.swiper=d.swiper,k(),u(!0);else if(d){const h=E=>{i.swiper=E.detail[0],d.removeEventListener("init",h),k(),u(!0),i.swiper.update(),e.update()};d.addEventListener("init",h)}return d},f=()=>{if(e.destroyed)return;m()||requestAnimationFrame(f)};requestAnimationFrame(f)}else k(),u(!0)}),T("slideChange update resize observerUpdate",()=>{u()}),T("setTransition",(i,t)=>{const m=e.thumbs.swiper;!m||m.destroyed||m.setTransition(t)}),T("beforeDestroy",()=>{const i=e.thumbs.swiper;!i||i.destroyed||x&&i.destroy()}),Object.assign(e.thumbs,{init:k,update:u})}function de(s){let{swiper:e,extendParams:L,emit:T,once:p}=s;L({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function x(){if(e.params.cssMode)return;const u=e.getTranslate();e.setTranslate(u),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function g(){if(e.params.cssMode)return;const{touchEventsData:u,touches:i}=e;u.velocities.length===0&&u.velocities.push({position:i[e.isHorizontal()?"startX":"startY"],time:u.touchStartTime}),u.velocities.push({position:i[e.isHorizontal()?"currentX":"currentY"],time:U()})}function k(u){let{currentPos:i}=u;if(e.params.cssMode)return;const{params:t,wrapperEl:m,rtlTranslate:f,snapGrid:d,touchEventsData:h}=e,b=U()-h.touchStartTime;if(i<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(i>-e.maxTranslate()){e.slides.length<d.length?e.slideTo(d.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(h.velocities.length>1){const v=h.velocities.pop(),S=h.velocities.pop(),Y=v.position-S.position,q=v.time-S.time;e.velocity=Y/q,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(q>150||U()-v.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,h.velocities.length=0;let l=1e3*t.freeMode.momentumRatio;const N=e.velocity*l;let n=e.translate+N;f&&(n=-n);let $=!1,A;const D=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let B;if(n<e.maxTranslate())t.freeMode.momentumBounce?(n+e.maxTranslate()<-D&&(n=e.maxTranslate()-D),A=e.maxTranslate(),$=!0,h.allowMomentumBounce=!0):n=e.maxTranslate(),t.loop&&t.centeredSlides&&(B=!0);else if(n>e.minTranslate())t.freeMode.momentumBounce?(n-e.minTranslate()>D&&(n=e.minTranslate()+D),A=e.minTranslate(),$=!0,h.allowMomentumBounce=!0):n=e.minTranslate(),t.loop&&t.centeredSlides&&(B=!0);else if(t.freeMode.sticky){let v;for(let S=0;S<d.length;S+=1)if(d[S]>-n){v=S;break}Math.abs(d[v]-n)<Math.abs(d[v-1]-n)||e.swipeDirection==="next"?n=d[v]:n=d[v-1],n=-n}if(B&&p("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(f?l=Math.abs((-n-e.translate)/e.velocity):l=Math.abs((n-e.translate)/e.velocity),t.freeMode.sticky){const v=Math.abs((f?-n:n)-e.translate),S=e.slidesSizesGrid[e.activeIndex];v<S?l=t.speed:v<2*S?l=t.speed*1.5:l=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&$?(e.updateProgress(A),e.setTransition(l),e.setTranslate(n),e.transitionStart(!0,e.swipeDirection),e.animating=!0,O(m,()=>{!e||e.destroyed||!h.allowMomentumBounce||(T("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(A),O(m,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(T("_freeModeNoMomentumRelease"),e.updateProgress(n),e.setTransition(l),e.setTranslate(n),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,O(m,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(n),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&T("_freeModeNoMomentumRelease");(!t.freeMode.momentum||b>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:x,onTouchMove:g,onTouchEnd:k}})}const ce={props:["product-info"],data(){return{thumbsSwiper:"",modules:[de,ee,le]}},components:{Swiper:te,SwiperSlide:se},methods:{setThumbsSwiper(s){this.thumbsSwiper=s}}},ue={class:"swiper"},me=["src","alt"],pe=["src","alt"],fe=["src","alt"],he=["src","alt"],be=["src","alt"],ge=["src","alt"];function ye(s,e,L,T,p,x){const g=P("swiper-slide"),k=P("swiper");return a(),r("div",ue,[I(k,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},loop:!0,navigation:!0,thumbs:{swiper:p.thumbsSwiper},modules:p.modules,class:"mySwiper2"},{default:w(()=>[I(g,null,{default:w(()=>[o("img",{src:s.productInfo.imageUrl,alt:s.productInfo.title},null,8,me)]),_:1}),I(g,null,{default:w(()=>[o("img",{src:s.productInfo.imageUrl2,alt:s.productInfo.title},null,8,pe)]),_:1}),(a(!0),r(j,null,V(s.productInfo.imagesUrl,(u,i)=>(a(),F(g,{key:i+123},{default:w(()=>[o("img",{src:u,alt:s.productInfo.title},null,8,fe)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"]),I(k,{onSwiper:x.setThumbsSwiper,loop:!0,spaceBetween:10,slidesPerView:8,freeMode:!0,watchSlidesProgress:!0,modules:p.modules,class:"mySwiper"},{default:w(()=>[I(g,null,{default:w(()=>[o("img",{src:s.productInfo.imageUrl,alt:s.productInfo.title},null,8,he)]),_:1}),I(g,null,{default:w(()=>[o("img",{src:s.productInfo.imageUrl2,alt:s.productInfo.title},null,8,be)]),_:1}),(a(!0),r(j,null,V(s.productInfo.imagesUrl,(u,i)=>(a(),F(g,{key:i+123},{default:w(()=>[o("img",{src:u,alt:s.productInfo.title},null,8,ge)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"])])}const _e=W(ce,[["render",ye],["__scopeId","data-v-f35c641d"]]),ve="/greensheep/assets/package-sm-I4xi3A72.jpg",we="/greensheep/assets/package-4z-bbUzK.jpg",Ie={data(){return{isLoading:!1,qty:1}},components:{ProductSwiper:_e},computed:{...G(H,["products","productInfo","recommendProducts","loadingStatus"]),...G(Z,["isLike"])},watch:{routeData:{handler(){this.getProductInfo(this.$route.params.id)},deep:!0}},methods:{...z(H,["getProducts","getProductInfo","getRecommendProducts"]),...z(ne,["addToCart"]),...z(Z,["likeInit","addToLike","isLogin"]),scrollTo(){const s=this.$refs.productContent;s&&s.scrollIntoView({behavior:"smooth"})},toCustomGem(s){this.$router.push({path:`/customGem/${s}`})}},async mounted(){this.isLoading=!0,await this.getProducts(),await this.getProductInfo(this.$route.params.id),this.getRecommendProducts(this.$route.params.id),this.likeInit(this.$route.params.id),this.isLoading=!1},beforeRouteUpdate(s){this.getProductInfo(s.params.id),this.getRecommendProducts(s.params.id),this.$nextTick(()=>{window.scrollTo(0,0)})}},y=s=>(ae("data-v-d473d3da"),s=s(),re(),s),ke={class:"container pt-30"},Te={class:"row justify-content-center"},xe={"aria-label":"breadcrumb"},Se={class:"breadcrumb col-12"},Me={class:"breadcrumb-item"},Ce={class:"breadcrumb-item","aria-current":"page"},Pe={class:"breadcrumb-item","aria-current":"page"},Le={class:"breadcrumb-item active","aria-current":"page"},Ee={class:"row justify-content-between"},Ne={class:"col-12 col-lg-6"},$e={class:"col-12 col-lg-5 text-start d-flex flex-column"},je={class:"d-flex align-items-center mb-2"},Ae={class:"fw-bold fs-3 fs-lg-2 me-5"},De={key:0,class:"text-secondary fs-4 fs-lg-3 fw-medium mb-4 mb-lg-5"},Ve={key:1,class:"mb-4 mb-lg-5 d-flex align-item-center gap-4"},Be={class:"text-primary fs-4 fs-lg-3 fw-medium"},Ue={class:"text-grey9F fs-6 fs-lg-5 fw-medium text-decoration-line-through my-1"},Oe={key:0,class:"bg-deco p-1 text-dark fs-8 my-1"},ze={key:2,class:"text-dark fs-7 mb-4"},Re={key:0,class:"text-danger ms-4 fs-8 fst-italic"},qe={key:1,class:"text-danger ms-4 fs-8 fst-italic"},Fe=y(()=>o("div",{class:"position-relative start-line"},[o("div",{class:"d-flex align-items-bottom text-grey66 fs-9 text-start ms-7"},[o("div",{class:"d-inline-block border-grey66 me-6"},[o("p",{class:"mb-2"},"全館滿NT$2,000，享台灣免運優惠"),o("p",{class:"mb-2"},"全館滿NT$12,000，享國際免運優惠"),o("p",{class:"mb-2"},"凡購買指定商品，免費升級品牌絨布禮盒包裝(含品牌緞帶)")]),o("a",{class:"d-flex align-items-center text-primary collapsed align-self-end mb-2","data-bs-toggle":"collapse",href:"#productCollapse",role:"button","aria-expanded":"false","aria-controls":"productCollapse"},[M("查看"),o("br",{class:"d-none d-lg-block d-xl-none"}),M("更多 "),o("span",{class:"material-icons expand-less fs-6"}," expand_less "),o("span",{class:"material-icons expand-more fs-6"}," expand_more ")])]),o("div",{class:"collapse text-grey66 fs-9 text-start ms-7",id:"productCollapse"},[o("p",{class:"mb-2 font-noto-serif"},"情人節限定優惠，指定商品8折起"),o("p",null,"慶祝板娘生日，購買指定商品，就送板娘飛吻一個～啾咪！")])],-1)),Ge={class:"my-4"},He={key:0,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},Ze=y(()=>o("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),We={key:1,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},Xe=y(()=>o("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),Ye={key:2,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},Ke=y(()=>o("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),Je={key:3,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},Qe=y(()=>o("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),et={key:3,class:"d-flex align-items-center justify-content-between bg-light rounded-2 px-6 py-3 gap-5 mb-4"},tt={key:0,class:"d-flex align-items-center justify-content-between gap-4 w-100 w-lg-70 w-xl-60"},st=y(()=>o("div",null,[o("span",{class:"badge rounded-pill bg-primary text-white lh-sm mb-1"},"送禮必備"),o("p",{class:"text-start text-dark fs-8 lh-sm"},"品牌絨布禮盒包裝(含品牌緞帶)"),o("span",{class:"text-dark fs-9"},"(原價500元)")],-1)),ot=y(()=>o("img",{src:ve,alt:"包裝","data-bs-toggle":"modal","data-bs-target":"#packageModal",style:{width:"60px",height:"60px",cursor:"pointer"},class:"img-fluid"},null,-1)),it=[st,ot],at=X('<div class="modal fade" id="packageModal" tabindex="-1" aria-labelledby="packageModalLabel" aria-hidden="true" data-v-d473d3da><div class="modal-dialog" data-v-d473d3da><div class="modal-content p-6 bg-primary" data-v-d473d3da><div class="modal-header border-0 justify-content-end" data-v-d473d3da><button type="button" class="text-white mb-4 bg-transparent border-0" data-bs-dismiss="modal" aria-label="Close" data-v-d473d3da><span class="material-icons fs-2" data-v-d473d3da> close </span></button></div><div class="modal-body" data-v-d473d3da><img src="'+we+'" alt="package-picture" class="border border-1" style="border-radius:60px 0;" data-v-d473d3da></div></div></div></div>',1),rt={class:"d-flex gap-5 my-5 flex-column justify-content-center"},nt={key:0,class:"d-flex gap-4 align-content-center justify-content-center"},lt=["disabled"],dt=y(()=>o("i",{class:"bi bi-dash-lg text- fs-3"},null,-1)),ct=[dt],ut=["disabled"],mt=y(()=>o("i",{class:"bi bi-plus-lg text-primary fs-3"},null,-1)),pt=[mt],ft=["disabled"],ht=["disabled"],bt=X('<svg class="overflow-visible self-rotate" viewBox="0 0 100 100" data-v-d473d3da><path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" fill="none" data-v-d473d3da></path><text class="letter-spacing" fill="#859c89" data-v-d473d3da><textPath xlink:href="#circle" class="text-primary" data-v-d473d3da> * Green Sheep * handmade jewelry * </textPath></text></svg><span class="position-absolute top-50 start-50 translate-middle text-nowrap" data-v-d473d3da><i class="arrow-more bi bi-arrow-down" data-v-d473d3da></i></span>',2),gt=[bt],yt={class:"container py-10",ref:"productContent"},_t={class:"product-content mb-5 text-primary lh-lg w-100 w-lg-80 mx-auto","data-aos":"fade-up","data-aos-duration":"1000","data-aos-offset":"50"},vt={class:"py-5 text-primary"},wt={class:"d-flex flex-column align-items-center mb-5","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200"},It={key:0,class:"mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1"},kt={key:1,class:"lh-lg"},Tt=y(()=>o("div",{class:"d-flex flex-column align-items-center mb-5","data-aos":"fade-up","data-aos-duration":"1000"},[o("p",{class:"mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1"}," 台灣原創設計 & 手工製作 ")],-1)),xt={class:"row py-10 mb-20 mb-lg-25 w-lg-80 mx-auto justify-content-center"},St={class:"mb-3 col-6 col-md-4 col-lg-6","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true"},Mt=["src"],Ct={class:"mb-3 col-6 col-md-4 col-lg-6","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true"},Pt=["src"],Lt=["src"],Et=y(()=>o("hr",null,null,-1)),Nt={class:"container mb-20"},$t=y(()=>o("h2",{class:"h4 text-primary mb-10 fw-bold"},"猜你也喜歡",-1)),jt={class:"row row-cols-2 row-cols-md-4 g-4 mb-20 ps-0"},At={class:"h-border position-relative",style:{width:"100%","padding-top":"100%"}},Dt={key:0,class:"position-absolute start-0 bottom-0 z-3 bg-deco p-1 text-dark fs-8"},Vt=["src"],Bt=["src"],Ut={class:"card-body text-start"},Ot={class:"card-title display-7 text-dark my-2"},zt={key:0,class:"card-text display-8 text-primary mt-3 mb-6"},Rt={key:1,class:"mt-3 mb-1"},qt={class:"card-text display-8 text-primary my-2 me-2"},Ft=y(()=>o("br",null,null,-1)),Gt={class:"card-text display-8 text-grey9F text-decoration-line-through"},Ht=["onClick"],Zt=y(()=>o("i",{class:"bi bi-bag-check fs-6"},null,-1)),Wt=[Zt];function Xt(s,e,L,T,p,x){const g=P("RouterLink"),k=P("routerLink"),u=P("ProductSwiper"),i=P("VueLoading");return a(),r(j,null,[o("div",ke,[o("div",Te,[o("nav",xe,[o("ol",Se,[o("li",Me,[I(g,{to:"/"},{default:w(()=>[M("首頁")]),_:1})]),o("li",Ce,[I(g,{to:"/products/全部商品%20ALL"},{default:w(()=>[M("全部商品")]),_:1})]),o("li",Pe,[I(k,{to:{path:`/products/${s.productInfo.category}`}},{default:w(()=>[M(c(s.productInfo.category),1)]),_:1},8,["to"])]),o("li",Le,c(s.productInfo.title),1)])]),o("div",Ee,[o("div",Ne,[I(u,{"product-info":s.productInfo},null,8,["product-info"])]),o("div",$e,[o("div",je,[o("h1",Ae,c(s.productInfo.title),1),o("i",{class:R(["bi fs-4 text-primary cursor-pointer",[s.isLike?"bi-heart-fill":"bi-heart"]]),onClick:e[0]||(e[0]=C(t=>s.isLogin(s.productInfo.id),["prevent"])),ref:"favIcon"},null,2)]),s.productInfo.origin_price===s.productInfo.price?(a(),r("p",De," NT$ "+c(s.productInfo.origin_price),1)):(a(),r("p",Ve,[o("span",Be," NT$ "+c(s.productInfo.price),1),o("span",Ue," NT$ "+c(s.productInfo.origin_price),1),s.productInfo.discount!==10?(a(),r("span",Oe,c(s.productInfo.discount)+"折",1)):_("",!0)])),s.productInfo.category!=="客製設計 CUSTOMIZED"?(a(),r("p",ze,[M(" 庫存數量："+c(s.productInfo.stockNum)+" "+c(s.productInfo.unit),1),s.productInfo.stockNum<5&&s.productInfo.stockNum>0?(a(),r("span",Re,"庫存緊張")):s.productInfo.stockNum===0?(a(),r("span",qe,"售完補貨中")):_("",!0)])):_("",!0),Fe,o("div",Ge,[s.productInfo.material?(a(),r("p",He,[Ze,M(" 材質："+c(s.productInfo.material),1)])):_("",!0),s.productInfo.purchaseWay?(a(),r("p",We,[Xe,M(" "+c(s.productInfo.purchaseWay)+"：接單後"+c(s.productInfo.makingDays)+"日內出貨 ",1)])):_("",!0),Array.isArray(s.productInfo.gifts)?(a(),r("p",Ye,[Ke,M(" 贈："+c(s.productInfo.gifts.join("、")),1)])):_("",!0),s.productInfo.wrap?(a(),r("p",Je,[Qe,M(" 包裝："+c(s.productInfo.wrap),1)])):_("",!0)]),s.productInfo.wrap==="品牌絨布禮盒包裝"?(a(),r("div",et,[s.productInfo.wrap==="品牌絨布禮盒包裝"?(a(),r("div",tt,it)):_("",!0),at])):_("",!0),o("div",rt,[s.productInfo.category!=="客製設計 CUSTOMIZED"?(a(),r("div",nt,[o("button",{type:"button",class:"btn qty-btn rounded-circle border-primary p-0",disabled:p.qty===1||s.productInfo.stockNum===0,onClick:e[1]||(e[1]=C(t=>p.qty--,["prevent"]))},ct,8,lt),oe(o("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>p.qty=t),type:"number",class:"border-0 text-center number-select",min:"1",value:"1",readonly:""},null,512),[[ie,p.qty]]),o("button",{class:"btn qty-btn rounded-circle p-0 border-primary",disabled:p.qty===s.productInfo.stockNum||s.productInfo.stockNum===0,onClick:e[3]||(e[3]=C(t=>p.qty++,["prevent"]))},pt,8,ut)])):_("",!0),s.productInfo.category==="客製設計 CUSTOMIZED"?(a(),r("button",{key:1,type:"button",class:R(["custom-btn custom-btn-primary text-center border-1 start-custom fw-bold w-80 mx-auto",{"no-stock":s.productInfo.stockNum===0}]),disabled:s.productInfo.stockNum===0,style:{height:"40px"},onClick:e[4]||(e[4]=C(t=>x.toCustomGem(s.productInfo.id),["prevent"]))},null,10,ft)):(a(),r("button",{key:2,type:"button",class:R(["custom-btn custom-btn-primary text-center border-1 add-to-cart fw-bold w-80 mx-auto",{"no-stock":s.productInfo.stockNum===0}]),disabled:s.productInfo.stockNum===0,style:{height:"40px"},onClick:e[5]||(e[5]=C(t=>s.addToCart(s.productInfo.id,p.qty),["prevent"]))},null,10,ht))])])])])]),o("div",{class:"position-relative m-auto cursor-pointer my-10 my-lg-0 mb-lg-20",onClick:e[6]||(e[6]=C((...t)=>x.scrollTo&&x.scrollTo(...t),["prevent"])),style:{width:"100px",height:"100px"}},gt),o("div",yt,[o("p",_t,c(s.productInfo.content),1),o("div",vt,[o("div",wt,[s.productInfo.material?(a(),r("p",It," 材質 ")):_("",!0),s.productInfo.material?(a(),r("p",kt,c(s.productInfo.material),1)):_("",!0)]),Tt,o("div",xt,[o("div",St,[o("img",{src:s.productInfo.imageUrl,alt:"商品圖片",class:"product-content-img object-fit-cover"},null,8,Mt)]),o("div",Ct,[o("img",{src:s.productInfo.imageUrl2,alt:"商品圖片",class:"product-content-img object-fit-cover"},null,8,Pt)]),(a(!0),r(j,null,V(s.productInfo.imagesUrl,t=>(a(),r("div",{key:t,class:"mb-3 col-6 col-md-4 col-lg-6","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true"},[o("img",{src:t,alt:"商品圖片",class:"product-content-img object-fit-cover"},null,8,Lt)]))),128))]),Et]),o("div",Nt,[$t,o("ul",jt,[(a(!0),r(j,null,V(s.recommendProducts,t=>(a(),r("li",{class:"col list-unstyled h-100 column",key:t.id},[I(g,{to:{path:`/products/detail/${t.id}`},class:"card border-0"},{default:w(()=>[o("div",At,[t.discount!==10?(a(),r("span",Dt,c(t.discount)+"折",1)):_("",!0),o("img",{src:t.imageUrl,class:"show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,Vt),o("img",{src:t.imageUrl2,class:"change position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,Bt)]),o("div",Ut,[o("h5",Ot,c(t.title),1),t.origin_price===t.price?(a(),r("p",zt," NT$ "+c(t.origin_price),1)):(a(),r("div",Rt,[o("span",qt,"NT$ "+c(t.origin_price),1),Ft,o("span",Gt," NT$ "+c(t.price),1)])),o("button",{class:"custom-btn custom-btn-toGreen text-center w-100 border-1",onClick:C(m=>s.addToCart(t.id),["prevent"])},Wt,8,Ht)])]),_:2},1032,["to"])]))),128))])])],512),I(i,{active:p.isLoading,"onUpdate:active":e[7]||(e[7]=t=>p.isLoading=t)},null,8,["active"])],64)}const ss=W(Ie,[["render",Xt],["__scopeId","data-v-d473d3da"]]);export{ss as default};
