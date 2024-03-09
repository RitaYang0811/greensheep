import{g as X,i as Y,e as K,n as U,b as z,N as J,S as Q,a as Z}from"./navigation-DCCpdZAg.js";import{_ as G,o as r,c as l,b as y,w,e as s,F as V,r as D,u as q,j as P,a as ee,m as R,t as m,i as k,d as M,f as A,g as te,v as se,l as H,p as oe,k as ie}from"./index-BbkPRlvS.js";import{p as F}from"./productStore-CE6MiUFH.js";import{c as ae}from"./cartStore-o-XVphx5.js";import"./sweetalert2.all-CJhZ76az.js";function re(o){let{swiper:e,extendParams:C,on:T}=o;C({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let f=!1,S=!1;e.thumbs={swiper:null};function _(){const i=e.thumbs.swiper;if(!i||i.destroyed)return;const t=i.clickedIndex,u=i.clickedSlide;if(u&&u.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let p;i.params.loop?p=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10):p=t,e.params.loop?e.slideToLoop(p):e.slideTo(p)}function x(){const{thumbs:i}=e.params;if(f)return!1;f=!0;const t=e.constructor;if(i.swiper instanceof t)e.thumbs.swiper=i.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(Y(i.swiper)){const u=Object.assign({},i.swiper);Object.assign(u,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(u),S=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",_),!0}function d(i){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const u=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let p=1;const c=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(p=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(p=1),p=Math.floor(p),t.slides.forEach(g=>g.classList.remove(c)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let g=0;g<p;g+=1)K(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+g}"]`).forEach(n=>{n.classList.add(c)});else for(let g=0;g<p;g+=1)t.slides[e.realIndex+g]&&t.slides[e.realIndex+g].classList.add(c);const b=e.params.thumbs.autoScrollOffset,j=b&&!t.params.loop;if(e.realIndex!==t.realIndex||j){const g=t.activeIndex;let n,E;if(t.params.loop){const a=t.slides.filter($=>$.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];n=t.slides.indexOf(a),E=e.activeIndex>e.previousIndex?"next":"prev"}else n=e.realIndex,E=n>e.previousIndex?"next":"prev";j&&(n+=E==="next"?b:-1*b),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(n)<0&&(t.params.centeredSlides?n>g?n=n-Math.floor(u/2)+1:n=n+Math.floor(u/2)-1:n>g&&t.params.slidesPerGroup,t.slideTo(n,i?0:void 0))}}T("beforeInit",()=>{const{thumbs:i}=e.params;if(!(!i||!i.swiper))if(typeof i.swiper=="string"||i.swiper instanceof HTMLElement){const t=X(),u=()=>{const c=typeof i.swiper=="string"?t.querySelector(i.swiper):i.swiper;if(c&&c.swiper)i.swiper=c.swiper,x(),d(!0);else if(c){const b=j=>{i.swiper=j.detail[0],c.removeEventListener("init",b),x(),d(!0),i.swiper.update(),e.update()};c.addEventListener("init",b)}return c},p=()=>{if(e.destroyed)return;u()||requestAnimationFrame(p)};requestAnimationFrame(p)}else x(),d(!0)}),T("slideChange update resize observerUpdate",()=>{d()}),T("setTransition",(i,t)=>{const u=e.thumbs.swiper;!u||u.destroyed||u.setTransition(t)}),T("beforeDestroy",()=>{const i=e.thumbs.swiper;!i||i.destroyed||S&&i.destroy()}),Object.assign(e.thumbs,{init:x,update:d})}function ne(o){let{swiper:e,extendParams:C,emit:T,once:f}=o;C({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function S(){if(e.params.cssMode)return;const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function _(){if(e.params.cssMode)return;const{touchEventsData:d,touches:i}=e;d.velocities.length===0&&d.velocities.push({position:i[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:i[e.isHorizontal()?"currentX":"currentY"],time:U()})}function x(d){let{currentPos:i}=d;if(e.params.cssMode)return;const{params:t,wrapperEl:u,rtlTranslate:p,snapGrid:c,touchEventsData:b}=e,g=U()-b.touchStartTime;if(i<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(i>-e.maxTranslate()){e.slides.length<c.length?e.slideTo(c.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(b.velocities.length>1){const v=b.velocities.pop(),I=b.velocities.pop(),W=v.position-I.position,O=v.time-I.time;e.velocity=W/O,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(O>150||U()-v.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,b.velocities.length=0;let n=1e3*t.freeMode.momentumRatio;const E=e.velocity*n;let a=e.translate+E;p&&(a=-a);let $=!1,L;const B=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let N;if(a<e.maxTranslate())t.freeMode.momentumBounce?(a+e.maxTranslate()<-B&&(a=e.maxTranslate()-B),L=e.maxTranslate(),$=!0,b.allowMomentumBounce=!0):a=e.maxTranslate(),t.loop&&t.centeredSlides&&(N=!0);else if(a>e.minTranslate())t.freeMode.momentumBounce?(a-e.minTranslate()>B&&(a=e.minTranslate()+B),L=e.minTranslate(),$=!0,b.allowMomentumBounce=!0):a=e.minTranslate(),t.loop&&t.centeredSlides&&(N=!0);else if(t.freeMode.sticky){let v;for(let I=0;I<c.length;I+=1)if(c[I]>-a){v=I;break}Math.abs(c[v]-a)<Math.abs(c[v-1]-a)||e.swipeDirection==="next"?a=c[v]:a=c[v-1],a=-a}if(N&&f("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(p?n=Math.abs((-a-e.translate)/e.velocity):n=Math.abs((a-e.translate)/e.velocity),t.freeMode.sticky){const v=Math.abs((p?-a:a)-e.translate),I=e.slidesSizesGrid[e.activeIndex];v<I?n=t.speed:v<2*I?n=t.speed*1.5:n=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&$?(e.updateProgress(L),e.setTransition(n),e.setTranslate(a),e.transitionStart(!0,e.swipeDirection),e.animating=!0,z(u,()=>{!e||e.destroyed||!b.allowMomentumBounce||(T("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(L),z(u,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(T("_freeModeNoMomentumRelease"),e.updateProgress(a),e.setTransition(n),e.setTranslate(a),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,z(u,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(a),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&T("_freeModeNoMomentumRelease");(!t.freeMode.momentum||g>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:S,onTouchMove:_,onTouchEnd:x}})}const le={props:["product-info"],data(){return{thumbsSwiper:"",modules:[ne,J,re]}},components:{Swiper:Q,SwiperSlide:Z},methods:{setThumbsSwiper(o){this.thumbsSwiper=o}}},ce={class:"swiper"},de=["src","alt"],ue=["src","alt"],me=["src","alt"],pe=["src","alt"],fe=["src","alt"],he=["src","alt"];function be(o,e,C,T,f,S){const _=P("swiper-slide"),x=P("swiper");return r(),l("div",ce,[y(x,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},loop:!0,navigation:!0,thumbs:{swiper:f.thumbsSwiper},modules:f.modules,class:"mySwiper2"},{default:w(()=>[y(_,null,{default:w(()=>[s("img",{src:o.productInfo.imageUrl,alt:o.productInfo.title},null,8,de)]),_:1}),y(_,null,{default:w(()=>[s("img",{src:o.productInfo.imageUrl2,alt:o.productInfo.title},null,8,ue)]),_:1}),(r(!0),l(V,null,D(o.productInfo.imagesUrl,(d,i)=>(r(),q(_,{key:i+123},{default:w(()=>[s("img",{src:d,alt:o.productInfo.title},null,8,me)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"]),y(x,{onSwiper:S.setThumbsSwiper,loop:!0,spaceBetween:10,slidesPerView:8,freeMode:!0,watchSlidesProgress:!0,modules:f.modules,class:"mySwiper"},{default:w(()=>[y(_,null,{default:w(()=>[s("img",{src:o.productInfo.imageUrl,alt:o.productInfo.title},null,8,pe)]),_:1}),y(_,null,{default:w(()=>[s("img",{src:o.productInfo.imageUrl2,alt:o.productInfo.title},null,8,fe)]),_:1}),(r(!0),l(V,null,D(o.productInfo.imagesUrl,(d,i)=>(r(),q(_,{key:i+123},{default:w(()=>[s("img",{src:d,alt:o.productInfo.title},null,8,he)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"])])}const ge=G(le,[["render",be],["__scopeId","data-v-4c64c48e"]]),_e="/greensheep/assets/package-sm-I4xi3A72.jpg",ve="/greensheep/assets/package-4z-bbUzK.jpg",we={data(){return{isLoading:!1,qty:1}},components:{ProductSwiper:ge},computed:{...ee(F,["productInfo","recommendProducts"])},watch:{routeData:{handler(){this.getProductInfo(this.$route.params.id)},deep:!0}},methods:{...R(F,["getProductInfo","getRecommendProducts"]),...R(ae,["addToCart"]),scrollTo(){const o=this.$refs.productContent;o&&o.scrollIntoView({behavior:"smooth"})}},mounted(){console.log(this.$route),this.getProductInfo(this.$route.params.id),this.getRecommendProducts(this.$route.params.id)},beforeRouteUpdate(o,e){this.getProductInfo(o.params.id),this.getRecommendProducts(o.params.id),this.$nextTick(()=>{window.scrollTo(0,0)})}},h=o=>(oe("data-v-acf580fa"),o=o(),ie(),o),ye={class:"container pt-7 pt-lg-10"},xe={class:"row justify-content-center"},Te={"aria-label":"breadcrumb"},Ie={class:"breadcrumb col-12"},ke={class:"breadcrumb-item"},Se={class:"breadcrumb-item","aria-current":"page"},Me={class:"breadcrumb-item","aria-current":"page"},Pe={class:"breadcrumb-item active","aria-current":"page"},Ce={class:"row justify-content-between"},je={class:"col-12 col-lg-6"},Ee={class:"col-12 col-lg-5 text-start d-flex flex-column"},$e={class:"d-flex align-items-center mb-2"},Ae={class:"fw-bold fs-3 fs-lg-2 me-5"},Ve=h(()=>s("i",{class:"bi bi-heart fs-4 text-primary"},null,-1)),Le=h(()=>s("i",{class:"bi bi-heart-fill fs-4 text-primary"},null,-1)),Be={key:0,class:"text-secondary fs-4 fs-lg-3 fw-medium mb-4 mb-lg-5"},De={key:1,class:"mb-4 mb-lg-5 d-flex align-item-center gap-4"},Ne={class:"text-primary fs-4 fs-lg-3 fw-medium"},Ue={class:"text-grey9F fs-6 fs-lg-5 fw-medium text-decoration-line-through my-1"},ze={key:0,class:"bg-deco p-1 text-dark fs-8 my-1"},Oe=h(()=>s("div",{class:"position-relative start-line"},[s("div",{class:"d-flex align-items-bottom text-grey66 fs-9 text-start ms-7"},[s("div",{class:"d-inline-block border-grey66 me-6"},[s("p",{class:"mb-2"},"全館滿NT$2,000，享台灣免運優惠"),s("p",{class:"mb-2"},"全館滿NT$12,000，享國際免運優惠"),s("p",{class:"mb-2"},"凡購買指定商品，免費升級品牌絨布禮盒包裝(含品牌緞帶)")]),s("a",{class:"d-flex align-items-center text-primary collapsed align-self-end mb-2","data-bs-toggle":"collapse",href:"#productCollapse",role:"button","aria-expanded":"false","aria-controls":"productCollapse"},[M("查看"),s("br",{class:"d-none d-lg-block d-xl-none"}),M("更多 "),s("span",{class:"material-icons expand-less fs-6"}," expand_less "),s("span",{class:"material-icons expand-more fs-6"}," expand_more ")])]),s("div",{class:"collapse text-grey66 fs-9 text-start ms-7",id:"productCollapse"},[s("p",{class:"mb-2 font-noto-serif"},"情人節限定優惠，指定商品8折起"),s("p",null,"慶祝板娘生日，購買指定商品，就送板娘飛吻一個～啾咪！")])],-1)),qe={class:"my-4"},Re={key:0,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},Fe=h(()=>s("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),Ge={key:1,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},He=h(()=>s("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),We={key:2,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},Xe=h(()=>s("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),Ye={key:3,class:"d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"},Ke=h(()=>s("span",{class:"material-icons me-1 fs-8 fs-lg-7"}," check_circle ",-1)),Je={key:2,class:"d-flex align-items-center justify-content-between bg-light rounded-2 px-6 py-3 gap-5 mb-4"},Qe={key:0,class:"d-flex align-items-center justify-content-between gap-4 w-100 w-lg-70 w-xl-60"},Ze=h(()=>s("div",null,[s("span",{class:"badge rounded-pill bg-primary text-white lh-sm mb-1"},"送禮必備"),s("p",{class:"text-start text-dark fs-8 lh-sm"},"品牌絨布禮盒包裝(含品牌緞帶)"),s("span",{class:"text-dark fs-9"},"(原價500元)")],-1)),et=h(()=>s("img",{src:_e,alt:"","data-bs-toggle":"modal","data-bs-target":"#packageModal",style:{width:"60px",height:"60px",cursor:"pointer"},class:"img-fluid"},null,-1)),tt=[Ze,et],st=H('<div class="modal fade" id="packageModal" tabindex="-1" aria-labelledby="packageModalLabel" aria-hidden="true" data-v-acf580fa><div class="modal-dialog" data-v-acf580fa><div class="modal-content p-6 bg-primary" data-v-acf580fa><div class="modal-header border-0 justify-content-end" data-v-acf580fa><button type="button" class="text-white mb-4 bg-transparent border-0" data-bs-dismiss="modal" aria-label="Close" data-v-acf580fa><span class="material-icons fs-2" data-v-acf580fa> close </span></button></div><div class="modal-body" data-v-acf580fa><img src="'+ve+'" alt="package-picture" class="border border-1" style="border-radius:60px 0;" data-v-acf580fa></div></div></div></div>',1),ot={class:"d-flex gap-5 my-5 flex-column justify-content-center"},it={class:"d-flex gap-4 align-content-center justify-content-center"},at=["disabled"],rt=h(()=>s("i",{class:"bi bi-dash-lg text- fs-3"},null,-1)),nt=[rt],lt=h(()=>s("i",{class:"bi bi-plus-lg text-primary fs-3"},null,-1)),ct=[lt],dt=H('<svg class="overflow-visible self-rotate" viewBox="0 0 100 100" data-v-acf580fa><path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" fill="none" data-v-acf580fa></path><text class="letter-spacing" fill="#859c89" data-v-acf580fa><textPath xlink:href="#circle" class="text-primary" data-v-acf580fa> * Green Sheep * handmade jewelry * </textPath></text></svg><span class="position-absolute top-50 start-50 translate-middle text-nowrap" data-v-acf580fa><i class="arrow-more bi bi-arrow-down" data-v-acf580fa></i></span>',2),ut=[dt],mt={class:"container py-10",ref:"productContent"},pt={class:"product-content mb-5 text-primary lh-lg w-100 w-lg-80 mx-auto","data-aos":"fade-up","data-aos-duration":"1000","data-aos-offset":"50"},ft={class:"py-5 text-primary"},ht={class:"d-flex flex-column align-items-center mb-5","data-aos":"fade-up","data-aos-duration":"1000","data-aos-delay":"200"},bt={key:0,class:"mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1"},gt={key:1,class:"lh-lg"},_t=h(()=>s("div",{class:"d-flex flex-column align-items-center mb-5","data-aos":"fade-up","data-aos-duration":"1000"},[s("p",{class:"mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1"}," 台灣原創設計 & 手工製作 ")],-1)),vt={class:"row py-10 mb-20 mb-lg-25 w-lg-80 mx-auto justify-content-center"},wt={class:"mb-3 col-6 col-md-4 col-lg-6","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true"},yt=["src"],xt={class:"mb-3 col-6 col-md-4 col-lg-6","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true"},Tt=["src"],It=["src"],kt=h(()=>s("hr",null,null,-1)),St={class:"container mb-20"},Mt=h(()=>s("h2",{class:"h4 text-primary mb-10 fw-bold"},"猜你也喜歡",-1)),Pt={class:"row row-cols-2 row-cols-md-4 g-4 mb-20 ps-0"},Ct={class:"h-border position-relative",style:{width:"100%","padding-top":"100%"}},jt={key:0,class:"position-absolute start-0 bottom-0 z-3 bg-deco p-1 text-dark fs-8"},Et=["src"],$t=["src"],At={class:"card-body text-start"},Vt={class:"card-title display-7 text-dark my-2"},Lt={key:0,class:"card-text display-8 text-primary mt-3 mb-6"},Bt={key:1,class:"mt-3 mb-1"},Dt={class:"card-text display-8 text-primary my-2 me-2"},Nt=h(()=>s("br",null,null,-1)),Ut={class:"card-text display-8 text-grey9F text-decoration-line-through"},zt=["onClick"],Ot=h(()=>s("i",{class:"bi bi-bag-check fs-6"},null,-1)),qt=[Ot];function Rt(o,e,C,T,f,S){const _=P("router-link"),x=P("routerLink"),d=P("ProductSwiper"),i=P("VueLoading");return r(),l(V,null,[s("div",ye,[s("div",xe,[s("nav",Te,[s("ol",Ie,[s("li",ke,[y(_,{to:"/"},{default:w(()=>[M("首頁")]),_:1})]),s("li",Se,[y(_,{to:"/products/productsAll"},{default:w(()=>[M("全部商品")]),_:1})]),s("li",Me,[y(x,{to:{path:`/products/${o.category}`}},{default:w(()=>[M(m(o.productInfo.category),1)]),_:1},8,["to"])]),s("li",Pe,m(o.productInfo.title),1)])]),s("div",Ce,[s("div",je,[y(d,{"product-info":o.productInfo},null,8,["product-info"])]),s("div",Ee,[s("div",$e,[s("h1",Ae,m(o.productInfo.title),1),Ve,Le]),o.productInfo.origin_price===o.productInfo.price?(r(),l("p",Be," NT$ "+m(o.productInfo.origin_price),1)):(r(),l("p",De,[s("span",Ne," NT$ "+m(o.productInfo.price),1),s("span",Ue," NT$ "+m(o.productInfo.origin_price),1),o.productInfo.discount!==10?(r(),l("span",ze,m(o.productInfo.discount)+"折",1)):k("",!0)])),Oe,s("div",qe,[o.productInfo.material?(r(),l("p",Re,[Fe,M(" 材質："+m(o.productInfo.material),1)])):k("",!0),o.productInfo.purchaseWay?(r(),l("p",Ge,[He,M(" "+m(o.productInfo.purchaseWay)+"：接單後"+m(o.productInfo.makingDays)+"日內出貨 ",1)])):k("",!0),Array.isArray(o.productInfo.gifts)?(r(),l("p",We,[Xe,M(" 贈："+m(o.productInfo.gifts.join("、")),1)])):k("",!0),o.productInfo.wrap?(r(),l("p",Ye,[Ke,M(" 包裝："+m(o.productInfo.wrap),1)])):k("",!0)]),o.productInfo.wrap==="品牌絨布禮盒包裝"?(r(),l("div",Je,[o.productInfo.wrap==="品牌絨布禮盒包裝"?(r(),l("div",Qe,tt)):k("",!0),st])):k("",!0),s("div",ot,[s("div",it,[s("button",{type:"button",class:"btn qty-btn rounded-circle border-primary p-0",disabled:f.qty===1,onClick:e[0]||(e[0]=A(t=>f.qty--,["prevent"]))},nt,8,at),te(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>f.qty=t),type:"number",class:"border-0 text-center number-select",min:"1",value:"1",readonly:""},null,512),[[se,f.qty]]),s("button",{class:"btn qty-btn rounded-circle p-0 border-primary",onClick:e[2]||(e[2]=A(t=>f.qty++,["prevent"]))},ct)]),s("button",{href:"#",class:"custom-btn custom-btn-primary text-center border-1 add-to-cart fw-bold w-80 mx-auto",style:{height:"40px"},onClick:e[3]||(e[3]=A(t=>o.addToCart(o.productInfo.id,f.qty),["prevent"]))})])])])])]),s("div",{class:"position-relative m-auto cursor-pointer my-10 my-lg-0 mb-lg-20",onClick:e[4]||(e[4]=A((...t)=>S.scrollTo&&S.scrollTo(...t),["prevent"])),style:{width:"100px",height:"100px"}},ut),s("div",mt,[s("p",pt,m(o.productInfo.content),1),s("div",ft,[s("div",ht,[o.productInfo.material?(r(),l("p",bt," 材質 ")):k("",!0),o.productInfo.material?(r(),l("p",gt,m(o.productInfo.material),1)):k("",!0)]),_t,s("div",vt,[s("div",wt,[s("img",{src:o.productInfo.imageUrl,alt:"商品圖片",class:"product-content-img object-fit-cover"},null,8,yt)]),s("div",xt,[s("img",{src:o.productInfo.imageUrl2,alt:"商品圖片",class:"product-content-img object-fit-cover"},null,8,Tt)]),(r(!0),l(V,null,D(o.productInfo.imagesUrl,t=>(r(),l("div",{key:t,class:"mb-3 col-6 col-md-4 col-lg-6","data-aos":"zoom-in","data-aos-duration":"1000","data-aos-once":"true"},[s("img",{src:t,alt:"商品圖片",class:"product-content-img object-fit-cover"},null,8,It)]))),128))]),kt]),s("div",St,[Mt,s("ul",Pt,[(r(!0),l(V,null,D(o.recommendProducts,t=>(r(),l("li",{class:"col list-unstyled h-100 column",key:t.id},[y(_,{to:`/products/${t.id}`,class:"card border-0"},{default:w(()=>[s("div",Ct,[t.discount!==10?(r(),l("span",jt,m(t.discount)+"折",1)):k("",!0),s("img",{src:t.imageUrl,class:"show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,Et),s("img",{src:t.imageUrl2,class:"change position-absolute top-0 start-0 w-100 h-100 object-fit-cover"},null,8,$t)]),s("div",At,[s("h5",Vt,m(t.title),1),t.origin_price===t.price?(r(),l("p",Lt," NT$ "+m(t.origin_price),1)):(r(),l("div",Bt,[s("span",Dt,"NT$ "+m(t.origin_price),1),Nt,s("span",Ut," NT$ "+m(t.price),1)])),s("button",{href:"#",class:"custom-btn custom-btn-toGreen text-center w-100 border-1",onClick:A(u=>o.addToCart(t.id),["prevent"])},qt,8,zt)])]),_:2},1032,["to"])]))),128))])])],512),y(i,{active:f.isLoading,"onUpdate:active":e[5]||(e[5]=t=>f.isLoading=t)},null,8,["active"])],64)}const Yt=G(we,[["render",Rt],["__scopeId","data-v-acf580fa"]]);export{Yt as default};
