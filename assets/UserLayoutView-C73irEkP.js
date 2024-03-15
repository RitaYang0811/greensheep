import{O as k,D as S,C as Z}from"./bootstrap.esm-DUGVDpmc.js";import{d as L,m as _,a as v,_ as w,o as c,c as d,b as e,e as a,w as r,f as i,F as x,r as $,g as h,t as m,h as M,v as O,i as H,j as T,k as u,p as j,l as B,n as q}from"./index-3qIeMt9n.js";import{c as V}from"./cartStore-OavjT9w-.js";import{p as P}from"./productStore-Bmd5ouAN.js";import{c as R}from"./copyTextStore-MHxAvF_e.js";import{_ as W}from"./logo-green-DPwGROIH.js";import{_ as I}from"./logo-white-Iim_7vQ4.js";import"./sweetalert2.all-B7PAY33k.js";import"./sweetalertToast-CCxsTCah.js";const D=L("searchStore",{state:()=>({searchQuery:""}),actions:{setSearchWord(l){this.searchQuery=l,console.log("store搜索詞",this.searchQuery)}}}),N="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_person'%3e%3cpath%20id='Vector'%20d='M9.99998%209.97913C9.08331%209.97913%208.33331%209.68746%207.74998%209.10413C7.16665%208.52079%206.87498%207.77079%206.87498%206.85413C6.87498%205.93746%207.16665%205.18746%207.74998%204.60413C8.33331%204.02079%209.08331%203.72913%209.99998%203.72913C10.9166%203.72913%2011.6666%204.02079%2012.25%204.60413C12.8333%205.18746%2013.125%205.93746%2013.125%206.85413C13.125%207.77079%2012.8333%208.52079%2012.25%209.10413C11.6666%209.68746%2010.9166%209.97913%209.99998%209.97913ZM3.33331%2016.6666V14.7083C3.33331%2014.1805%203.46526%2013.7291%203.72915%2013.3541C3.99304%2012.9791%204.33331%2012.6944%204.74998%2012.5C5.68054%2012.0833%206.5729%2011.7708%207.42706%2011.5625C8.28123%2011.3541%209.13887%2011.25%209.99998%2011.25C10.8611%2011.25%2011.7153%2011.3576%2012.5625%2011.5729C13.4097%2011.7882%2014.298%2012.0985%2015.2275%2012.504C15.6622%2012.7002%2016.0108%2012.9847%2016.2731%2013.3575C16.5355%2013.7302%2016.6666%2014.1805%2016.6666%2014.7083V16.6666H3.33331ZM4.58331%2015.4166H15.4166V14.7083C15.4166%2014.4861%2015.3507%2014.2743%2015.2187%2014.0729C15.0868%2013.8715%2014.9236%2013.7222%2014.7291%2013.625C13.8403%2013.1944%2013.0278%2012.8993%2012.2916%2012.7395C11.5555%2012.5798%2010.7916%2012.5%209.99998%2012.5C9.20831%2012.5%208.43748%2012.5798%207.68748%2012.7395C6.93748%2012.8993%206.12498%2013.1944%205.24998%2013.625C5.05554%2013.7222%204.89581%2013.8715%204.77081%2014.0729C4.64581%2014.2743%204.58331%2014.4861%204.58331%2014.7083V15.4166ZM9.99998%208.72913C10.5416%208.72913%2010.9896%208.55204%2011.3437%208.19788C11.6979%207.84371%2011.875%207.39579%2011.875%206.85413C11.875%206.31246%2011.6979%205.86454%2011.3437%205.51038C10.9896%205.15621%2010.5416%204.97913%209.99998%204.97913C9.45831%204.97913%209.0104%205.15621%208.65623%205.51038C8.30206%205.86454%208.12498%206.31246%208.12498%206.85413C8.12498%207.39579%208.30206%207.84371%208.65623%208.19788C9.0104%208.55204%209.45831%208.72913%209.99998%208.72913Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",U="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_person'%3e%3cpath%20id='Vector'%20d='M10.0002%209.979C9.0835%209.979%208.3335%209.68734%207.75016%209.104C7.16683%208.52067%206.87516%207.77067%206.87516%206.854C6.87516%205.93734%207.16683%205.18734%207.75016%204.604C8.3335%204.02067%209.0835%203.729%2010.0002%203.729C10.9168%203.729%2011.6668%204.02067%2012.2502%204.604C12.8335%205.18734%2013.1252%205.93734%2013.1252%206.854C13.1252%207.77067%2012.8335%208.52067%2012.2502%209.104C11.6668%209.68734%2010.9168%209.979%2010.0002%209.979ZM3.3335%2016.6665V14.7082C3.3335%2014.1804%203.46544%2013.729%203.72933%2013.354C3.99322%2012.979%204.3335%2012.6943%204.75016%2012.4998C5.68072%2012.0832%206.57308%2011.7707%207.42725%2011.5623C8.28141%2011.354%209.13905%2011.2498%2010.0002%2011.2498C10.8613%2011.2498%2011.7154%2011.3575%2012.5627%2011.5728C13.4099%2011.788%2014.2982%2012.0984%2015.2277%2012.5039C15.6624%2012.7001%2016.011%2012.9846%2016.2733%2013.3573C16.5357%2013.7301%2016.6668%2014.1804%2016.6668%2014.7082V16.6665H3.3335ZM4.5835%2015.4165H15.4168V14.7082C15.4168%2014.4859%2015.3509%2014.2741%2015.2189%2014.0728C15.087%2013.8714%2014.9238%2013.7221%2014.7293%2013.6248C13.8404%2013.1943%2013.0279%2012.8991%2012.2918%2012.7394C11.5557%2012.5797%2010.7918%2012.4998%2010.0002%2012.4998C9.2085%2012.4998%208.43766%2012.5797%207.68766%2012.7394C6.93766%2012.8991%206.12516%2013.1943%205.25016%2013.6248C5.05572%2013.7221%204.896%2013.8714%204.771%2014.0728C4.646%2014.2741%204.5835%2014.4859%204.5835%2014.7082V15.4165ZM10.0002%208.729C10.5418%208.729%2010.9897%208.55192%2011.3439%208.19775C11.6981%207.84359%2011.8752%207.39567%2011.8752%206.854C11.8752%206.31234%2011.6981%205.86442%2011.3439%205.51025C10.9897%205.15609%2010.5418%204.979%2010.0002%204.979C9.4585%204.979%209.01058%205.15609%208.65641%205.51025C8.30225%205.86442%208.12516%206.31234%208.12516%206.854C8.12516%207.39567%208.30225%207.84359%208.65641%208.19775C9.01058%208.55192%209.4585%208.729%2010.0002%208.729Z'%20fill='%23283C1E'/%3e%3c/g%3e%3c/svg%3e",A="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_cart'%3e%3cpath%20id='Vector'%20d='M3.75%2018.3334C3.40625%2018.3334%203.11198%2018.211%202.86719%2017.9662C2.6224%2017.7214%202.5%2017.4271%202.5%2017.0834V6.04171C2.5%205.69796%202.6224%205.40369%202.86719%205.1589C3.11198%204.9141%203.40625%204.79171%203.75%204.79171H6.04167C6.04167%203.70837%206.41319%202.77782%207.15625%202.00004C7.89931%201.22226%208.8125%200.833374%209.89583%200.833374C11.0198%200.833374%2011.9779%201.21532%2012.7701%201.97921C13.5622%202.7431%2013.9583%203.6806%2013.9583%204.79171H16.25C16.5938%204.79171%2016.888%204.9141%2017.1328%205.1589C17.3776%205.40369%2017.5%205.69796%2017.5%206.04171V17.0834C17.5%2017.4271%2017.3776%2017.7214%2017.1328%2017.9662C16.888%2018.211%2016.5938%2018.3334%2016.25%2018.3334H3.75ZM3.75%2017.0834H16.25V6.04171H3.75V17.0834ZM10%2011.0417C11.0972%2011.0417%2012.0486%2010.6389%2012.8542%209.83337C13.6597%209.02782%2014.0625%208.07643%2014.0625%206.97921H12.8125C12.8125%207.7431%2012.5347%208.40282%2011.9792%208.95837C11.4236%209.51393%2010.7639%209.79171%2010%209.79171C9.23611%209.79171%208.57639%209.51393%208.02083%208.95837C7.46528%208.40282%207.1875%207.7431%207.1875%206.97921H5.9375C5.9375%208.07643%206.34028%209.02782%207.14583%209.83337C7.95139%2010.6389%208.90278%2011.0417%2010%2011.0417ZM7.29167%204.79171H12.7083C12.7083%204.02782%2012.4479%203.38546%2011.9271%202.86462C11.4062%202.34379%2010.7639%202.08337%2010%202.08337C9.23611%202.08337%208.59375%202.34379%208.07292%202.86462C7.55208%203.38546%207.29167%204.02782%207.29167%204.79171Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",F="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_cart'%3e%3cpath%20id='Vector'%20d='M3.75%2018.3335C3.40625%2018.3335%203.11198%2018.2111%202.86719%2017.9663C2.6224%2017.7215%202.5%2017.4272%202.5%2017.0835V6.04183C2.5%205.69808%202.6224%205.40381%202.86719%205.15902C3.11198%204.91423%203.40625%204.79183%203.75%204.79183H6.04167C6.04167%203.7085%206.41319%202.77794%207.15625%202.00016C7.89931%201.22239%208.8125%200.833496%209.89583%200.833496C11.0198%200.833496%2011.9779%201.21544%2012.7701%201.97933C13.5622%202.74322%2013.9583%203.68072%2013.9583%204.79183H16.25C16.5938%204.79183%2016.888%204.91423%2017.1328%205.15902C17.3776%205.40381%2017.5%205.69808%2017.5%206.04183V17.0835C17.5%2017.4272%2017.3776%2017.7215%2017.1328%2017.9663C16.888%2018.2111%2016.5938%2018.3335%2016.25%2018.3335H3.75ZM3.75%2017.0835H16.25V6.04183H3.75V17.0835ZM10%2011.0418C11.0972%2011.0418%2012.0486%2010.6391%2012.8542%209.8335C13.6597%209.02794%2014.0625%208.07655%2014.0625%206.97933H12.8125C12.8125%207.74322%2012.5347%208.40294%2011.9792%208.9585C11.4236%209.51405%2010.7639%209.79183%2010%209.79183C9.23611%209.79183%208.57639%209.51405%208.02083%208.9585C7.46528%208.40294%207.1875%207.74322%207.1875%206.97933H5.9375C5.9375%208.07655%206.34028%209.02794%207.14583%209.8335C7.95139%2010.6391%208.90278%2011.0418%2010%2011.0418ZM7.29167%204.79183H12.7083C12.7083%204.02794%2012.4479%203.38558%2011.9271%202.86475C11.4062%202.34391%2010.7639%202.0835%2010%202.0835C9.23611%202.0835%208.59375%202.34391%208.07292%202.86475C7.55208%203.38558%207.29167%204.02794%207.29167%204.79183Z'%20fill='%23283C1E'/%3e%3c/g%3e%3c/svg%3e",Q="https://greensheep-json-server.onrender.com",Y={data(){return{headerCategory:"",searchWord:"",headerCurrentPage:1,menuOffCanvas:"",searchOffCanvas:"",collapseProduct:"",dropdownMenu:"",dropdownMenuPC:"",isDropdownMenuOpen:!1,isCollapseOpen:!1,previousScrollY:0}},methods:{..._(D,["setSearchWord"]),..._(P,["getProducts","getFilterProducts"]),..._(R,["copyTextMethod"]),toCategoryPage(l){this.headerCategory=l,this.isDropdownMenuOpen=!this.isDropdownMenuOpen,this.closeDropdownMenu(),this.$router.push({path:`/products/${l}`}),this.closeMenuOffCanvas(),this.closeCollapseProduct()},openMenuOffCanvas(){this.menuOffCanvas.show()},closeMenuOffCanvas(){this.menuOffCanvas.hide()},openSearchOffCanvas(){this.searchOffCanvas.show()},closeSearchOffCanvas(){this.searchOffCanvas.hide()},openDropdownMenu(){this.dropdownMenuPC.show()},closeDropdownMenu(){this.dropdownMenuPC.hide()},openCollapseProduct(){this.collapseProduct.show()},closeCollapseProduct(){this.collapseProduct.hide(),this.isCollapseOpen=!1},toggleDropdownMenu(){this.isDropdownMenuOpen=!this.isDropdownMenuOpen,this.isDropdownMenuOpen===!0?this.openDropdownMenu():this.closeDropdownMenu()},toggleCollapseProduct(){this.isCollapseOpen=!this.isCollapseOpen,this.isCollapseOpen===!0?this.openCollapseProduct():this.closeCollapseProduct()},searchProducts(l){this.closeSearchOffCanvas(),console.log("searchProducts",this.searchWord),this.searchWord.trim()!==""?(this.$router.push({path:"/products",query:{keyword:this.searchWord.trim()}}),this.searchWord=""):l.preventDefault()},async isLogin(){const l=JSON.parse(localStorage.getItem("userInfo"));if(l===null){this.$router.push({path:"/memberLogin"});return}await this.$http.get(`${Q}/600/users/${l.id}`,{headers:{Authorization:`Bearer ${l.token}`}}).then(t=>{this.$router.push({name:"MemberHome"})}).catch(t=>{this.$router.push({path:"/memberLogin"})})}},computed:{...v(V,["carts"]),...v(D,["searchQuery"]),...v(P,["category","categories"])},mounted(){this.menuOffCanvas=new k(this.$refs.menuOffCanvas,{backdrop:!0}),this.searchOffCanvas=new k(this.$refs.searchOffCanvas,{backdrop:!1}),this.dropdownMenuPC=new S(this.$refs.dropdownMenuPC),this.collapseProduct=new Z(this.$refs.collapseProduct,{toggle:!1}),window.addEventListener("scroll",()=>{if(this.$refs.scrollBody){let l=window.scrollY;l<this.previousScrollY?this.$refs.scrollBody.classList.remove("hideUp"):this.$refs.scrollBody.classList.add("hideUp"),this.previousScrollY=l}})}},C=l=>(j("data-v-d54a558a"),l=l(),B(),l),E={ref:"scrollBody"},G={class:"user-header"},z={class:"navbar navbar-expand-lg navbar-light navbar-hover py-3 flex-column position-relative"},K={class:"container"},J={class:"logo mb-0 me-lg-8"},X={class:"collapse navbar-collapse flex-column py-16 px-12 p-lg-0"},e2={class:"navbar-nav me-auto gap-xxl-4 gap-xl-2 position-relative align-items-md-start"},t2={class:"nav-item dropdown",style:{"min-width":"101px"}},s2={class:"dropdown-menu custom-dropdown-menu shadow-none border-0 font-noto-serif fs-8 start-50",ref:"dropdownMenuPC"},o2=["onClick"],l2={class:"nav-item",style:{"min-width":"81px"}},n2={class:"nav-item",style:{"min-width":"81px"}},a2={class:"nav-item",style:{"min-width":"81px"}},i2={class:"d-flex"},r2={class:"header-icon d-flex align-items-center"},c2={class:"header-form me-2 flex-shrink-1"},d2={class:"input-group d-flex align-items-center"},p2=C(()=>e("img",{class:"header-white-icon p-xxl-2 p-xl-0",src:N,alt:"會員中心"},null,-1)),h2=C(()=>e("img",{class:"header-green-icon p-xxl-2 p-xl-0",src:U,alt:"會員中心"},null,-1)),C2=[p2,h2],f2={href:"#","data-bs-toggle":"offcanvas","data-bs-target":"#cartOffcanvasRight","aria-controls":"offcanvasRight"},u2={class:"position-relative"},m2=C(()=>e("img",{class:"header-white-icon p-xxl-2 p-xl-0",src:A,alt:"購物袋"},null,-1)),g2=C(()=>e("img",{class:"header-green-icon p-xxl-2 p-xl-0",src:F,alt:"購物袋"},null,-1)),_2={key:0,class:"position-absolute top-0 top-xxl-25 start-95 start-xxl-75 translate-middle p-1 bg-primary rounded-circle text-white"},v2=C(()=>e("span",{class:"visually-hidden"},"New alerts",-1)),x2=[v2],w2=C(()=>e("span",{class:"menu-icon material-icons border-0 no-box-shadow"},"menu",-1)),b2=[w2],y2={class:"searchOffCanvas offcanvas offcanvas-top bg-light py-5 px-4 d-lg-none",tabindex:"-1",ref:"searchOffCanvas","aria-labelledby":"offcanvasTopLabel"},k2={class:"d-flex align-items-center justify-content-center"},$2=C(()=>e("div",{class:"d-flex border-bottom border-greyD4"},null,-1)),M2=C(()=>e("i",{class:"bi bi-search text-primary fs-5"},null,-1)),O2=C(()=>e("i",{class:"bi bi-x fs-4 text-dark"},null,-1)),V2=[O2],H2={class:"offcanvas offcanvas-end d-lg-none p-0",ref:"menuOffCanvas",tabindex:"-1",style:{"max-width":"90%"},"aria-labelledby":"mobileMenu"},P2={class:"offcanvas-header pt-15 position-relative bg-decolight"},D2=C(()=>e("img",{class:"position-absolute start-50 pt-1 translate-middle-x",src:W,alt:"greensheep",style:{top:"12px"}},null,-1)),S2=C(()=>e("i",{class:"bi bi-x-lg text-primary fs-4"},null,-1)),Z2=[S2],L2={class:"offcanvas-body d-flex flex-column justify-content-start bg-primary px-0 mb-0"},T2=C(()=>e("a",{class:"text-center fw-medium"},[i(" 全部商品 "),e("i",{class:"collapse-more bi bi-chevron-down position-absolute"})],-1)),j2=[T2],B2={class:"collapse shadow-none border-0 font-noto-serif fs-8 ps-0",ref:"collapseProduct"},q2=["onClick"];function R2(l,t,b,y,f,o){const p=u("router-link"),n=u("RouterLink");return c(),d("div",E,[e("div",G,[e("div",{class:"fs-8 py-2 bg-primary text-white cursor-pointer",onClick:t[0]||(t[0]=s=>l.copyTextMethod("Newfriend95","首購專屬優惠碼 Newfriend95"))}," ✦ 首 購 即 享 9 5 折 優 惠，點 我 複 製 專 屬 折 扣 碼 ！ ✦ "),e("nav",z,[e("div",K,[e("h1",J,[a(p,{to:"/",class:"navbar-brand"},{default:r(()=>[i("綠羊珠寶 Green Sheep handmade jewelry")]),_:1})]),e("div",X,[e("ul",e2,[e("li",t2,[e("button",{class:"nav-link dropdown-toggle nav-item-en py-2 py-lg-1 px-2","aria-expanded":"false",onClick:t[1]||(t[1]=s=>o.toggleDropdownMenu(f.isDropdownMenuOpen))}," SHOP "),e("button",{class:"nav-link dropdown-toggle nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center","aria-expanded":"false",onClick:t[2]||(t[2]=s=>o.toggleDropdownMenu(f.isDropdownMenuOpen))}," 全部商品 "),e("ul",s2,[(c(!0),d(x,null,$(l.categories,s=>(c(),d("li",{key:s+123},[e("a",{class:"d-inline-block py-2 mx-3 position-relative cursor-pointer",onClick:h(g=>o.toCategoryPage(s,g),["prevent"])},m(s),9,o2)]))),128))],512)]),e("li",l2,[a(n,{to:"/story",class:"nav-link nav-item-en py-2 py-lg-1 px-2"},{default:r(()=>[i("ABOUT")]),_:1}),a(n,{to:"/story",class:"nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"},{default:r(()=>[i("關於品牌 ")]),_:1})]),e("li",n2,[a(n,{to:"/articles",class:"nav-link nav-item-en py-2 py-lg-1 px-2"},{default:r(()=>[i("BLOG")]),_:1}),a(n,{to:"/articles",class:"nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"},{default:r(()=>[i("專欄文章 ")]),_:1})]),e("li",a2,[a(n,{to:"/faq",class:"nav-link nav-item-en py-2 py-lg-1 px-2"},{default:r(()=>[i("Q&A")]),_:1}),a(n,{to:"/faq",class:"nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"},{default:r(()=>[i("常見問題 ")]),_:1})])])]),e("div",i2,[e("div",r2,[e("form",c2,[e("div",d2,[e("div",null,[e("i",{class:"bi bi-search header-white-icon text-white",onClick:t[3]||(t[3]=s=>o.openSearchOffCanvas())}),e("i",{class:"bi bi-search header-green-icon text-primary",onClick:t[4]||(t[4]=s=>o.openSearchOffCanvas())})]),M(e("input",{type:"text",class:"form-control no-box-shadow search-box input-group-text bg-transparent text-start d-none d-lg-block",placeholder:"搜尋...","onUpdate:modelValue":t[5]||(t[5]=s=>f.searchWord=s),onKeyup:t[6]||(t[6]=H(s=>o.searchProducts(s),["enter"]))},null,544),[[O,f.searchWord]])])]),e("a",{href:"#",class:"me-2 d-none d-lg-block flex-grow-1",onClick:t[7]||(t[7]=h(s=>o.isLogin(),["prevent"]))},C2),e("a",f2,[e("div",u2,[m2,g2,l.carts.length?(c(),d("span",_2,x2)):T("",!0)])])]),e("button",{class:"navbar-toggler no-box-shadow border-0 mx-0",type:"button",onClick:t[8]||(t[8]=h((...s)=>o.openMenuOffCanvas&&o.openMenuOffCanvas(...s),["prevent"])),"aria-controls":"offcanvasExample","aria-expanded":"false","aria-label":"Toggle navigation"},b2)]),e("div",y2,[e("div",k2,[$2,M2,M(e("input",{type:"text",class:"form-control no-box-shadow input-group-text bg-transparent text-start w-100",placeholder:"請輸入搜尋商品","onUpdate:modelValue":t[9]||(t[9]=s=>f.searchWord=s),onKeyup:t[10]||(t[10]=H(s=>o.searchProducts(s),["enter"]))},null,544),[[O,f.searchWord]]),e("a",{role:"button",onClick:t[11]||(t[11]=h(s=>o.closeSearchOffCanvas(),["prevent"]))},V2)])],512),e("div",H2,[e("div",P2,[D2,e("a",{type:"button",class:"position-absolute z-1","aria-label":"Close",onClick:t[12]||(t[12]=h((...s)=>o.closeMenuOffCanvas&&o.closeMenuOffCanvas(...s),["prevent"])),style:{top:"20px",right:"15px"}},Z2)]),e("ul",L2,[e("li",{class:"border-bottom py-5 text-white fs-6 position-relative",onClick:t[13]||(t[13]=h(s=>o.toggleCollapseProduct(f.isCollapseOpen),["prevent"]))},j2),e("ul",B2,[(c(!0),d(x,null,$(l.categories,s=>(c(),d("li",{key:s+123,class:"list-unstyled border-bottom border-primary bg-decolight text-primary fw-medium"},[e("a",{class:"d-inline-block py-5 cursor-pointer",onClick:h(g=>o.toCategoryPage(s),["prevent"])},m(s),9,q2)]))),128))],512),e("li",{class:"border-bottom py-5 text-white fs-6",onClick:t[14]||(t[14]=s=>o.closeMenuOffCanvas())},[a(n,{to:"/story",class:"text-center fw-medium"},{default:r(()=>[i("關於品牌 ")]),_:1})]),e("li",{class:"border-bottom py-5 text-white fs-6",onClick:t[15]||(t[15]=s=>o.closeMenuOffCanvas())},[a(n,{to:"/articles",class:"text-center fw-medium"},{default:r(()=>[i("專欄文章 ")]),_:1})]),e("li",{class:"border-bottom py-5 text-white fs-6",onClick:t[16]||(t[16]=s=>o.closeMenuOffCanvas())},[a(n,{to:"/faq",class:"text-center fw-medium"},{default:r(()=>[i("常見問題 ")]),_:1})]),e("li",{class:"border-bottom py-5 text-white fs-6",onClick:t[18]||(t[18]=s=>o.closeMenuOffCanvas())},[e("a",{href:"#",class:"text-center fw-medium",onClick:t[17]||(t[17]=h(s=>o.isLogin(),["prevent"]))},"登入/註冊")])])],512)])])])],512)}const W2=w(Y,[["render",R2],["__scopeId","data-v-d54a558a"]]),I2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20%3e%3cg%20clip-path='url(%23clip0_2342_4058)'%3e%3cpath%20opacity='0.7'%20d='M39.5%2020C39.5%2030.7696%2030.7696%2039.5%2020%2039.5C9.23045%2039.5%200.5%2030.7696%200.5%2020C0.5%209.23045%209.23045%200.5%2020%200.5C30.7696%200.5%2039.5%209.23045%2039.5%2020Z'%20stroke='none'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M29%2019.0263C29%2015.152%2024.9625%2012%2020%2012C15.0377%2012%2011%2015.152%2011%2019.0263C11%2022.4994%2014.2019%2025.4086%2018.527%2025.9589C18.8199%2026.0196%2019.2188%2026.1451%2019.3198%2026.386C19.4106%2026.6047%2019.3793%2026.9474%2019.3488%2027.1685C19.3488%2027.1685%2019.2436%2027.7796%2019.2204%2027.91C19.1814%2028.1288%2019.0395%2028.7659%2020%2028.3767C20.9608%2027.9874%2025.1828%2025.4404%2027.071%2023.3494C28.3754%2021.9736%2029%2020.577%2029%2019.0263ZM14.4146%2021.1339C14.1861%2021.1339%2014%2020.9408%2014%2020.703V17.4397C14%2017.2022%2014.2116%2017.0089%2014.48%2017.0089C14.7484%2017.0089%2014.9%2017.2006%2014.9%2017.4397V20.2724H15.9854C16.2143%2020.2724%2016.4%2020.4657%2016.4%2020.703C16.4%2020.9408%2016.2143%2021.1339%2015.9854%2021.1339H14.4146ZM18.2%2020.703C18.2%2020.9408%2017.9981%2021.1339%2017.7501%2021.1339C17.5019%2021.1339%2017.3%2020.9408%2017.3%2020.703V17.4397C17.3%2017.2022%2017.5019%2017.0089%2017.7501%2017.0089C17.9981%2017.0089%2018.2%2017.2022%2018.2%2017.4397V20.703ZM22.7%2020.703C22.7%2020.889%2022.5717%2021.0532%2022.3797%2021.1116C22.3316%2021.1265%2022.2813%2021.1339%2022.2309%2021.1339C22.0849%2021.1339%2021.9449%2021.0696%2021.8566%2020.9616L20.0372%2018.6842V20.703C20.0372%2020.9408%2019.8272%2021.1339%2019.5687%2021.1339C19.3103%2021.1339%2019.1%2020.9408%2019.1%2020.703V17.4397C19.1%2017.2541%2019.2288%2017.0899%2019.4203%2017.0312C19.4686%2017.0162%2019.5187%2017.0089%2019.5691%2017.0089C19.7153%2017.0089%2019.8554%2017.0731%2019.9431%2017.1812L21.7631%2019.4587V17.4397C21.7631%2017.2022%2021.9735%2017.0089%2022.2316%2017.0089C22.4902%2017.0089%2022.7%2017.2022%2022.7%2017.4397V20.703ZM25.5853%2018.6407C25.8142%2018.6407%2026%2018.8339%2026%2019.0715C26%2019.3088%2025.8142%2019.502%2025.5853%2019.502H24.4294V20.2724H25.5853C25.8138%2020.2724%2026%2020.4657%2026%2020.703C26%2020.9408%2025.8138%2021.1339%2025.5853%2021.1339H24.0145C23.7863%2021.1339%2023.6%2020.9408%2023.6%2020.703V19.0726V19.0715V17.4397C23.6%2017.2022%2023.7859%2017.0089%2024.0145%2017.0089H25.5853C25.8142%2017.0089%2026%2017.2022%2026%2017.4397C26%2017.6772%2025.8142%2017.8702%2025.5853%2017.8702H24.4294V18.6407H25.5853Z'%20fill='%23D5D5D5'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2342_4058'%3e%3crect%20width='40'%20height='40'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",N2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20%3e%3cg%20clip-path='url(%23clip0_2342_4061)'%3e%3cpath%20opacity='0.7'%20d='M39.5%2020C39.5%2030.7696%2030.7696%2039.5%2020%2039.5C9.23045%2039.5%200.5%2030.7696%200.5%2020C0.5%209.23045%209.23045%200.5%2020%200.5C30.7696%200.5%2039.5%209.23045%2039.5%2020Z'%20stroke='none'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.5983%2020.9736H24.1413L24.5219%2018.0404H21.5983V16.1677C21.5983%2015.3184%2021.8357%2014.7397%2023.0615%2014.7397L24.625%2014.739V12.1156C24.3545%2012.0799%2023.4265%2012%2022.3467%2012C20.0926%2012%2018.5494%2013.3669%2018.5494%2015.8773V18.0404H16V20.9736H18.5494V28.5H21.5983V20.9736Z'%20fill='%23D5D5D5'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2342_4061'%3e%3crect%20width='40'%20height='40'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",U2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20%3e%3cg%20clip-path='url(%23clip0_2342_4064)'%3e%3cpath%20opacity='0.7'%20d='M39.5%2020C39.5%2030.7696%2030.7696%2039.5%2020%2039.5C9.23045%2039.5%200.5%2030.7696%200.5%2020C0.5%209.23045%209.23045%200.5%2020%200.5C30.7696%200.5%2039.5%209.23045%2039.5%2020Z'%20stroke='none'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.0625%2012C17.771%2012%2017.4837%2012.0097%2016.5837%2012.0508C15.6857%2012.0917%2015.0723%2012.2344%2014.5356%2012.443C13.9808%2012.6586%2013.5102%2012.9471%2013.0411%2013.4161C12.5721%2013.8852%2012.2836%2014.3558%2012.068%2014.9106C11.8594%2015.4473%2011.7167%2016.0607%2011.6758%2016.9587C11.6347%2017.8587%2011.625%2018.146%2011.625%2020.4375C11.625%2022.729%2011.6347%2023.0163%2011.6758%2023.9163C11.7167%2024.8143%2011.8594%2025.4277%2012.068%2025.9644C12.2836%2026.5192%2012.5721%2026.9898%2013.0411%2027.4589C13.5102%2027.9279%2013.9808%2028.2164%2014.5356%2028.4321C15.0723%2028.6406%2015.6857%2028.7833%2016.5837%2028.8242C17.4837%2028.8653%2017.771%2028.875%2020.0625%2028.875C22.354%2028.875%2022.6413%2028.8653%2023.5413%2028.8242C24.4393%2028.7833%2025.0527%2028.6406%2025.5894%2028.4321C26.1442%2028.2164%2026.6148%2027.9279%2027.0839%2027.4589C27.5529%2026.9898%2027.8414%2026.5192%2028.0571%2025.9644C28.2656%2025.4277%2028.4083%2024.8143%2028.4492%2023.9163C28.4903%2023.0163%2028.5%2022.729%2028.5%2020.4375C28.5%2018.146%2028.4903%2017.8587%2028.4492%2016.9587C28.4083%2016.0607%2028.2656%2015.4473%2028.0571%2014.9106C27.8414%2014.3558%2027.5529%2013.8852%2027.0839%2013.4161C26.6148%2012.9471%2026.1442%2012.6586%2025.5894%2012.443C25.0527%2012.2344%2024.4393%2012.0917%2023.5413%2012.0508C22.6413%2012.0097%2022.354%2012%2020.0625%2012ZM20.0625%2013.5203C22.3154%2013.5203%2022.5823%2013.5289%2023.472%2013.5695C24.2946%2013.607%2024.7414%2013.7444%2025.0387%2013.86C25.4325%2014.013%2025.7136%2014.1959%2026.0088%2014.4912C26.3041%2014.7864%2026.487%2015.0675%2026.64%2015.4613C26.7556%2015.7586%2026.893%2016.2054%2026.9305%2017.028C26.9711%2017.9177%2026.9797%2018.1846%2026.9797%2020.4375C26.9797%2022.6904%2026.9711%2022.9573%2026.9305%2023.847C26.893%2024.6696%2026.7556%2025.1164%2026.64%2025.4137C26.487%2025.8075%2026.3041%2026.0886%2026.0088%2026.3838C25.7136%2026.6791%2025.4325%2026.862%2025.0387%2027.015C24.7414%2027.1306%2024.2946%2027.268%2023.472%2027.3055C22.5824%2027.3461%2022.3156%2027.3547%2020.0625%2027.3547C17.8094%2027.3547%2017.5426%2027.3461%2016.653%2027.3055C15.8304%2027.268%2015.3836%2027.1306%2015.0863%2027.015C14.6925%2026.862%2014.4114%2026.6791%2014.1162%2026.3838C13.8209%2026.0886%2013.638%2025.8075%2013.485%2025.4137C13.3694%2025.1164%2013.232%2024.6696%2013.1945%2023.847C13.1539%2022.9573%2013.1453%2022.6904%2013.1453%2020.4375C13.1453%2018.1846%2013.1539%2017.9177%2013.1945%2017.028C13.232%2016.2054%2013.3694%2015.7586%2013.485%2015.4613C13.638%2015.0675%2013.8209%2014.7864%2014.1162%2014.4912C14.4114%2014.1959%2014.6925%2014.013%2015.0863%2013.86C15.3836%2013.7444%2015.8304%2013.607%2016.653%2013.5695C17.5427%2013.5289%2017.8096%2013.5203%2020.0625%2013.5203ZM20.0625%2016.1047C17.6696%2016.1047%2015.7297%2018.0446%2015.7297%2020.4375C15.7297%2022.8304%2017.6696%2024.7703%2020.0625%2024.7703C22.4554%2024.7703%2024.3953%2022.8304%2024.3953%2020.4375C24.3953%2018.0446%2022.4554%2016.1047%2020.0625%2016.1047ZM20.0625%2023.25C18.5092%2023.25%2017.25%2021.9908%2017.25%2020.4375C17.25%2018.8842%2018.5092%2017.625%2020.0625%2017.625C21.6158%2017.625%2022.875%2018.8842%2022.875%2020.4375C22.875%2021.9908%2021.6158%2023.25%2020.0625%2023.25ZM25.579%2015.9336C25.579%2015.3744%2025.1256%2014.921%2024.5664%2014.921C24.0073%2014.921%2023.554%2015.3744%2023.554%2015.9336C23.554%2016.4927%2024.0073%2016.946%2024.5664%2016.946C25.1256%2016.946%2025.579%2016.4927%2025.579%2015.9336Z'%20fill='%23D5D5D5'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2342_4064'%3e%3crect%20width='40'%20height='40'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",A2={data(){return{}},methods:{scrollToTop(){window.scrollTo(0,0)},isLogout(){localStorage.removeItem("userInfo"),alert("已登出會員"),this.$router.push({name:"MemberLogin"})}}},F2={class:"footer"},Q2={class:"container-fluid bg-primary py-lg-12 py-8"},Y2={class:"container-lg text-start"},E2={class:"d-flex flex-lg-row justify-content-lg-between mb-lg-4 flex-column-reverse mb-6"},G2={class:"footer-top-left list-unstyled d-flex flex-lg-row flex-column align-items-center mb-0"},z2={class:"d-flex mb-lg-0 align-items-lg-center mb-4"},K2={class:"d-flex align-items-lg-center"},J2=e("i",{class:"bi bi-box-arrow-right d-none d-lg-inline-block"},null,-1),X2={class:"footer-top-right d-flex justify-content-between mb-4 mb-lg-0"},e0={class:"me-2 me-lg-6"},t0=q('<ul class="social-media-list list-unstyled d-flex justify-content-between mb-0"><li class="me-4"><a href="https://lin.ee/bYROr08" target="_blank"><img src="'+I2+'" alt=""></a></li><li class="me-4"><a href="https://www.facebook.com/profile.php?id=100071826680344&amp;mibextid=opq0tG" target="_blank"><img src="'+N2+'" alt=""></a></li><li><a href="https://www.instagram.com/greensheep_jewelry?igsh=MWNkcjd0azZud3JheQ%3D%3D&amp;utm_source=qr" target="_blank"><img src="'+U2+'" alt=""></a></li></ul>',1),s0=e("hr",null,null,-1),o0=e("div",{class:"d-flex flex-lg-row justify-content-lg-between mt-lg-4 flex-column-reverse mt-6"},[e("p",{class:"display-lg-8 display-9"}," Copyright ©2023 綠羊 Green Sheep.All rights reserved. "),e("p",{class:"display-lg-8 mb-lg-0 display-9 mb-4"},"greensheepjewelry@gmail.com")],-1);function l0(l,t,b,y,f,o){const p=u("RouterLink");return c(),d("footer",F2,[e("div",Q2,[e("div",Y2,[e("div",E2,[e("ul",G2,[e("div",z2,[e("li",null,[a(p,{to:"/products/productsAll",class:"fs-8 text-white me-lg-6",onClick:o.scrollToTop},{default:r(()=>[i("全部商品")]),_:1},8,["onClick"])]),e("li",null,[a(p,{to:"/articles",class:"fs-8 text-white me-lg-6 mx-lg-0 mx-12",onClick:o.scrollToTop},{default:r(()=>[i("專欄文章")]),_:1},8,["onClick"])]),e("li",null,[a(p,{to:"/story",class:"fs-8 text-white me-lg-6",onClick:o.scrollToTop},{default:r(()=>[i("關於品牌")]),_:1},8,["onClick"])])]),e("div",K2,[e("li",null,[a(p,{to:"/faq",class:"fs-8 text-white me-12 me-lg-6",onClick:o.scrollToTop},{default:r(()=>[i("常見問題")]),_:1},8,["onClick"])]),e("li",null,[a(p,{to:"/admin/home",target:"_blank",class:"fs-8 text-white me-12 me-lg-6"},{default:r(()=>[i("前往後台 "),J2]),_:1})]),e("li",null,[e("a",{href:"#",target:"_blank",class:"fs-8 text-white",onClick:t[0]||(t[0]=h((...n)=>o.isLogout&&o.isLogout(...n),["prevent"]))},"登出 ")])])]),e("div",X2,[e("div",e0,[a(p,{to:"/"},{default:r(()=>[e("img",{src:I,alt:"greensheep logo",class:"img-fluid",onClick:t[1]||(t[1]=(...n)=>o.scrollToTop&&o.scrollToTop(...n))})]),_:1})]),t0])]),s0,o0])])])}const n0=w(A2,[["render",l0]]),a0={data(){return{cartOffcanvas:""}},methods:{..._(V,["getCarts","updateCart","deleteCart"]),closeOffcanvas(){this.cartOffcanvas.hide()}},computed:{...v(V,["carts","total"])},mounted(){this.cartOffcanvas=new k(document.querySelector("#cartOffcanvasRight")),this.getCarts()}},i0={class:"offcanvas offcanvas-end my-3 mx-sm-5 mx-0 p-3 rounded-3","data-bs-backdrop":"false","data-bs-scroll":"true",tabindex:"-1",id:"cartOffcanvasRight","aria-labelledby":"offcanvasRightLabel"},r0=e("div",{class:"offcanvas-header"},[e("h3",{class:"offcanvas-title",id:"offcanvasRightLabel"}),e("button",{type:"button",class:"btn-close p-5","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),c0={class:"offcanvas-body d-flex flex-column justify-content-between"},d0={class:""},p0=e("h3",{class:"text-center mb-5"},"購物車",-1),h0={key:0,class:"fs-2 text-primary mt-10"},C0={key:1,class:"overflow-y-auto"},f0={class:"list-group list-group-flush"},u0={class:"card mb-3 border-0",style:{"max-width":"540px"}},m0={class:"row g-0 d-md-flex flex-wrap justify-content-center"},g0={class:"col-md-4 d-flex align-items-center justify-content-center",style:{"max-width":"120px","max-height":"120px"}},_0=["src"],v0={class:"col-md-7 d-flex align-items-center"},x0={class:"card-body text-md-start text-center my-2 my-md-0"},w0={class:""},b0={class:"mb-2 badge rounded-pill text-bg-primary"},y0={class:"card-title text-primary"},k0={class:""},$0=["onClick","disabled"],M0=e("i",{class:"bi bi-dash-circle fs-4"},null,-1),O0=[M0],V0=["onUpdate:modelValue"],H0=["onClick"],P0=e("i",{class:"bi bi-plus-circle fs-4"},null,-1),D0=[P0],S0={class:"card-text text-small text-dark"},Z0=["onClick"],L0=e("a",{href:"",class:"text-danger fs-4"},[e("i",{class:"bi bi-trash"})],-1),T0=[L0],j0={class:"my-2"},B0={class:"text-success text-end fs-4 p-4 text-dark border-top"};function q0(l,t,b,y,f,o){const p=u("router-link");return c(),d("div",i0,[r0,e("div",c0,[e("div",d0,[p0,l.carts.length?(c(),d("div",C0,[e("ul",f0,[(c(!0),d(x,null,$(l.carts,n=>(c(),d("li",{class:"list-group-item mt-3",key:n.id},[e("div",u0,[e("div",m0,[e("div",g0,[e("img",{src:n.product.imageUrl,class:"img-fluid object-fit-cover rounded-2",alt:"..."},null,8,_0)]),e("div",v0,[e("div",x0,[e("div",w0,[e("span",b0,m(n.product.category),1),e("h5",y0,m(n.product.title),1)]),e("div",k0,[e("button",{class:"btn btn-link text-primary pe-1",onClick:[h(s=>n.qty--,["prevent"]),s=>l.updateCart(n)],disabled:n.qty<=1},O0,8,$0),M(e("input",{type:"number",min:"1",class:"w-25 my-2 fs-5","onUpdate:modelValue":s=>n.qty=s,disabled:""},null,8,V0),[[O,n.qty]]),e("button",{class:"btn btn-link text-primary ps-0 ps-1",onClick:[h(s=>n.qty++,["prevent"]),s=>l.updateCart(n)]},D0,8,H0)]),e("p",S0,"NT$ "+m(parseInt(n.total)),1)])]),e("div",{class:"col-md-1 d-flex align-items-center justify-content-center",onClick:h(s=>l.deleteCart(n.id),["prevent"])},T0,8,Z0)])])]))),128))])])):(c(),d("p",h0,"目前購物車沒有商品"))]),e("div",j0,[e("p",B0,[i("總計：$ "),e("span",null,m(parseInt(l.total)),1),i(" 元")]),a(p,{to:"/cart",class:"btn btn-primary w-100 fs-4 p-4",onClick:o.closeOffcanvas},{default:r(()=>[i(" 立即結帳 ")]),_:1},8,["onClick"])])])])}const R0=w(a0,[["render",q0]]),W0={components:{Header:W2,Footer:n0,CartComponent:R0}},I0={class:"main"};function N0(l,t,b,y,f,o){const p=u("Header"),n=u("CartComponent"),s=u("RouterView"),g=u("Footer");return c(),d(x,null,[a(p),a(n),e("div",I0,[a(s)]),a(g)],64)}const J0=w(W0,[["render",N0],["__scopeId","data-v-f64c16d2"]]);export{J0 as default};
