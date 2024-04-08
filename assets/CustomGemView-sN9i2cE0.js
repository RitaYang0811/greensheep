import{p as f}from"./productStore-CCbRZnXv.js";import{y as U,_ as M,a as _,m as N,c as o,b as e,d as i,w as c,t as n,F as d,r as b,n as E,f as C,i as w,j as u,o as a,e as g,g as k,z as I}from"./index-Bivlclvn.js";import{l as y}from"./likeStore-DBziv1C_.js";import"./sweetalert2.all-BL4RB5rn.js";U("customStore",{state:()=>({gemList:[{gemMonth:"1月",gemChName:"石榴石",genEnName:"Garnet",gemUrl:"@/assets/images/1month.png"},{gemMonth:"2月",gemChName:"紫水晶",genEnName:"Amethyst",gemUrl:"/greensheep/src/assets/images/2month.png"},{gemMonth:"3月",gemChName:"海藍寶",genEnName:"Aquamarine",gemUrl:"/greensheep/src/assets/images/3month.png"},{gemMonth:"4月",gemChName:"鑽石",genEnName:"Diamond",gemUrl:"/greensheep/src/assets/images/4month.png"},{gemMonth:"5月",gemChName:"祖母綠",genEnName:"Emerald",gemUrl:"/greensheep/src/assets/images/5month.png"},{gemMonth:"6月",gemChName:"月光石",genEnName:"Moonstone",gemUrl:"/greensheep/src/assets/images/6month.png"},{gemMonth:"7月",gemChName:"紅寶石",genEnName:"Ruby",gemUrl:"/greensheep/src/assets/images/7month.png"},{gemMonth:"8月",gemChName:"橄欖石",genEnName:"Peridot",gemUrl:"/greensheep/src/assets/images/8month.png"},{gemMonth:"9月",gemChName:"藍寶石",genEnName:"Sapphire",gemUrl:"/greensheep/src/assets/images/9month.png"},{gemMonth:"10月",gemChName:"粉碧璽",genEnName:"Tourmaline",gemUrl:"/greensheep/src/assets/images/10month.png"},{gemMonth:"11月",gemChName:"黃水晶",genEnName:"Citrine",gemUrl:"/greensheep/src/assets/images/11month.png"},{gemMonth:"12月",gemChName:"坦桑石",genEnName:"Tanzanite",gemUrl:"/greensheep/src/assets/images/12month.png"}]})});const L={data(){return{isLoading:!1,activeGemIndex:-1,gemList:[{gemMonth:"1月",gemChName:"石榴石",genEnName:"Garnet",Url:"/greensheep/src/assets/images/1month.png"},{gemMonth:"2月",gemChName:"紫水晶",genEnName:"Amethyst",Url:"/greensheep/src/assets/images/2month.png"},{gemMonth:"3月",gemChName:"海藍寶",genEnName:"Aquamarine",Url:"/greensheep/src/assets/images/3month.png"},{gemMonth:"4月",gemChName:"鑽石",genEnName:"Diamond",Url:"/greensheep/src/assets/images/4month.png"},{gemMonth:"5月",gemChName:"祖母綠",genEnName:"Emerald",Url:"/greensheep/src/assets/images/5month.png"},{gemMonth:"6月",gemChName:"月光石",genEnName:"Moonstone",Url:"/greensheep/src/assets/images/6month.png"},{gemMonth:"7月",gemChName:"紅寶石",genEnName:"Ruby",Url:"/greensheep/src/assets/images/7month.png"},{gemMonth:"8月",gemChName:"橄欖石",genEnName:"Peridot",Url:"/greensheep/src/assets/images/8month.png"},{gemMonth:"9月",gemChName:"藍寶石",genEnName:"Sapphire",Url:"/greensheep/src/assets/images/9month.png"},{gemMonth:"10月",gemChName:"粉碧璽",genEnName:"Tourmaline",Url:"/greensheep/src/assets/images/10month.png"},{gemMonth:"11月",gemChName:"黃水晶",genEnName:"Citrine",Url:"/greensheep/src/assets/images/11month.png"},{gemMonth:"12月",gemChName:"坦桑石",genEnName:"Tanzanite",Url:"/greensheep/src/assets/images/12month.png"}]}},computed:{..._(f,["products","productInfo","loadingStatus"]),..._(y,["isLike"])},methods:{...N(f,["getProducts","getProductInfo"]),...N(y,["likeInit","addToLike","isLogin"]),toggleGem(s){this.activeGemIndex=this.activeGemIndex===s?-1:s},toPreviousPage(){this.$router.back()}},async mounted(){this.isLoading=!0,await this.getProducts(),await this.getProductInfo(this.$route.params.id),this.isLoading=!1}},P={class:"container pt-30"},S={class:"row justify-content-center"},T={"aria-label":"breadcrumb"},G={class:"breadcrumb col-12"},V={class:"breadcrumb-item"},j={class:"breadcrumb-item","aria-current":"page"},A={class:"breadcrumb-item","aria-current":"page"},F={class:"breadcrumb-item active","aria-current":"page"},$={class:"row justify-content-between align-items-center mb-10"},z={class:"col-12 col-xl-6"},D={class:"position-relative"},R=["src","alt"],B=["src"],q=e("p",{class:"font-montserrat fs-9 text-grey9F text-start mb-2"}," 寶石均為天然寶石，些許色差及天然內含物，均為正常現象。 ",-1),H=e("p",{class:"font-montserrat fs-9 text-grey9F text-start mb-10 mb-xl-5"}," 照片預覽為參考，設計師會依實際狀況做位置及尺寸調整。 ",-1),J={class:"col-12 col-xl-5 text-center d-flex flex-column"},K={class:"d-flex align-items-center justify-content-center mb-2"},O={class:"fw-bold fs-3 fs-lg-2 me-5"},Q={key:0,class:"text-secondary text-center fs-4 fs-lg-3 fw-medium mb-4 mb-lg-5"},W={key:1,class:"mb-4 mb-lg-5 d-flex align-item-center gap-4 mx-auto"},X={class:"text-secondary fs-4 fs-lg-3 fw-medium"},Y={class:"text-grey9F fs-6 fs-lg-5 fw-medium text-decoration-line-through my-1"},Z={key:0,class:"bg-deco p-1 text-dark fs-8 my-1"},ee=e("h2",{class:"fs-3 mb-3 fw-medium mx-auto"},"Step 1 : 選擇專屬寶石",-1),se={class:"row mb-0 ps-0 py-5"},te=["onClick"],ne={class:"mb-1 fw-medium"},oe={class:"mb-3 flex-grow-1"},ae=["src","alt"],me={class:"d-flex justify-content-center gap-0 gap-lg-6"};function re(s,m,ie,ge,r,l){const h=u("RouterLink"),v=u("routerLink"),x=u("VueLoading");return a(),o(d,null,[e("div",P,[e("div",S,[e("nav",T,[e("ol",G,[e("li",V,[i(h,{to:"/"},{default:c(()=>[g("首頁")]),_:1})]),e("li",j,[i(h,{to:"/products/全部商品%20ALL"},{default:c(()=>[g("全部商品")]),_:1})]),e("li",A,[i(v,{to:{path:`/products/${s.productInfo.category}`}},{default:c(()=>[g(n(s.productInfo.category),1)]),_:1},8,["to"])]),e("li",F,n(s.productInfo.title),1)])])]),e("div",$,[e("div",z,[e("div",D,[(a(!0),o(d,null,b(r.gemList,(t,p)=>k((a(),o("img",{key:t.gemChName,src:t.Url,alt:t.gemTitle,class:"position-absolute top-485 start-53 translate-middle",style:{width:"20px",height:"20px"}},null,8,R)),[[I,p===r.activeGemIndex]])),128)),e("img",{src:s.productInfo.imageUrl,alt:"商品正面",class:"d-block w-100 img-fluid mb-4 object-fit-cover"},null,8,B)]),q,H]),e("div",J,[e("div",K,[e("h1",O,n(s.productInfo.title),1),e("i",{class:E(["bi fs-4 text-primary cursor-pointer",[s.isLike?"bi-heart-fill":"bi-heart"]]),onClick:m[0]||(m[0]=C(t=>s.isLogin(s.productInfo.id),["prevent"])),ref:"favIcon"},null,2)]),s.productInfo.origin_price===s.productInfo.price?(a(),o("p",Q," NT$ "+n(s.productInfo.origin_price),1)):(a(),o("p",W,[e("span",X," NT$ "+n(s.productInfo.price),1),e("span",Y," NT$ "+n(s.productInfo.origin_price),1),s.productInfo.discount!==10?(a(),o("span",Z,n(s.productInfo.discount)+"折",1)):w("",!0)])),ee,e("ul",se,[(a(!0),o(d,null,b(r.gemList,(t,p)=>(a(),o("li",{key:t.gemChName,class:"col-2 d-flex flex-column align-items-center text-dark font-montserrat fs-8 cursor-pointer mb-5",onClick:ce=>l.toggleGem(p)},[e("span",ne,n(t.gemMonth),1),e("span",oe,n(t.gemChName),1),g(" "+n(t.Url)+" ",1),e("img",{src:t.Url,alt:t.gemChName,class:"d-block mx-auto",style:{width:"20px",height:"20px"}},null,8,ae)],8,te))),128))]),e("div",me,[e("a",{class:"custom-btn bg-white text-primary fw-bold py-4 px-8",onClick:m[1]||(m[1]=C((...t)=>l.toPreviousPage&&l.toPreviousPage(...t),["prevent"]))},"上一步"),i(h,{to:{path:`/customText/${s.productInfo.id}`},class:"custom-btn custom-btn-next bg-primary text-white fw-medium py-4 px-10"},{default:c(()=>[g("下一步：雷刻文字")]),_:1},8,["to"])])])])]),i(x,{active:r.isLoading,"onUpdate:active":m[2]||(m[2]=t=>r.isLoading=t)},null,8,["active"])],64)}const ue=M(L,[["render",re]]);export{ue as default};
