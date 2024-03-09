import{O as b,D as T}from"./bootstrap.esm-DgMLTuSH.js";import{m as y,a as m,_ as v,o as d,c as p,b as l,w as i,d as r,e,f as u,F as _,r as Z,t as g,g as k,v as M,h as V,i as P,j as f,p as S,k as L,l as R}from"./index-vQIT2nmS.js";import{c as $}from"./cartStore-CTfPQXJP.js";import{s as D,p as H}from"./productStore-BHAbRXX8.js";import{_ as j}from"./logo-white-Iim_7vQ4.js";import"./sweetalert2.all-l2V7mD8V.js";const B="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_person'%3e%3cpath%20id='Vector'%20d='M9.99998%209.97913C9.08331%209.97913%208.33331%209.68746%207.74998%209.10413C7.16665%208.52079%206.87498%207.77079%206.87498%206.85413C6.87498%205.93746%207.16665%205.18746%207.74998%204.60413C8.33331%204.02079%209.08331%203.72913%209.99998%203.72913C10.9166%203.72913%2011.6666%204.02079%2012.25%204.60413C12.8333%205.18746%2013.125%205.93746%2013.125%206.85413C13.125%207.77079%2012.8333%208.52079%2012.25%209.10413C11.6666%209.68746%2010.9166%209.97913%209.99998%209.97913ZM3.33331%2016.6666V14.7083C3.33331%2014.1805%203.46526%2013.7291%203.72915%2013.3541C3.99304%2012.9791%204.33331%2012.6944%204.74998%2012.5C5.68054%2012.0833%206.5729%2011.7708%207.42706%2011.5625C8.28123%2011.3541%209.13887%2011.25%209.99998%2011.25C10.8611%2011.25%2011.7153%2011.3576%2012.5625%2011.5729C13.4097%2011.7882%2014.298%2012.0985%2015.2275%2012.504C15.6622%2012.7002%2016.0108%2012.9847%2016.2731%2013.3575C16.5355%2013.7302%2016.6666%2014.1805%2016.6666%2014.7083V16.6666H3.33331ZM4.58331%2015.4166H15.4166V14.7083C15.4166%2014.4861%2015.3507%2014.2743%2015.2187%2014.0729C15.0868%2013.8715%2014.9236%2013.7222%2014.7291%2013.625C13.8403%2013.1944%2013.0278%2012.8993%2012.2916%2012.7395C11.5555%2012.5798%2010.7916%2012.5%209.99998%2012.5C9.20831%2012.5%208.43748%2012.5798%207.68748%2012.7395C6.93748%2012.8993%206.12498%2013.1944%205.24998%2013.625C5.05554%2013.7222%204.89581%2013.8715%204.77081%2014.0729C4.64581%2014.2743%204.58331%2014.4861%204.58331%2014.7083V15.4166ZM9.99998%208.72913C10.5416%208.72913%2010.9896%208.55204%2011.3437%208.19788C11.6979%207.84371%2011.875%207.39579%2011.875%206.85413C11.875%206.31246%2011.6979%205.86454%2011.3437%205.51038C10.9896%205.15621%2010.5416%204.97913%209.99998%204.97913C9.45831%204.97913%209.0104%205.15621%208.65623%205.51038C8.30206%205.86454%208.12498%206.31246%208.12498%206.85413C8.12498%207.39579%208.30206%207.84371%208.65623%208.19788C9.0104%208.55204%209.45831%208.72913%209.99998%208.72913Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",q="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_person'%3e%3cpath%20id='Vector'%20d='M10.0002%209.979C9.0835%209.979%208.3335%209.68734%207.75016%209.104C7.16683%208.52067%206.87516%207.77067%206.87516%206.854C6.87516%205.93734%207.16683%205.18734%207.75016%204.604C8.3335%204.02067%209.0835%203.729%2010.0002%203.729C10.9168%203.729%2011.6668%204.02067%2012.2502%204.604C12.8335%205.18734%2013.1252%205.93734%2013.1252%206.854C13.1252%207.77067%2012.8335%208.52067%2012.2502%209.104C11.6668%209.68734%2010.9168%209.979%2010.0002%209.979ZM3.3335%2016.6665V14.7082C3.3335%2014.1804%203.46544%2013.729%203.72933%2013.354C3.99322%2012.979%204.3335%2012.6943%204.75016%2012.4998C5.68072%2012.0832%206.57308%2011.7707%207.42725%2011.5623C8.28141%2011.354%209.13905%2011.2498%2010.0002%2011.2498C10.8613%2011.2498%2011.7154%2011.3575%2012.5627%2011.5728C13.4099%2011.788%2014.2982%2012.0984%2015.2277%2012.5039C15.6624%2012.7001%2016.011%2012.9846%2016.2733%2013.3573C16.5357%2013.7301%2016.6668%2014.1804%2016.6668%2014.7082V16.6665H3.3335ZM4.5835%2015.4165H15.4168V14.7082C15.4168%2014.4859%2015.3509%2014.2741%2015.2189%2014.0728C15.087%2013.8714%2014.9238%2013.7221%2014.7293%2013.6248C13.8404%2013.1943%2013.0279%2012.8991%2012.2918%2012.7394C11.5557%2012.5797%2010.7918%2012.4998%2010.0002%2012.4998C9.2085%2012.4998%208.43766%2012.5797%207.68766%2012.7394C6.93766%2012.8991%206.12516%2013.1943%205.25016%2013.6248C5.05572%2013.7221%204.896%2013.8714%204.771%2014.0728C4.646%2014.2741%204.5835%2014.4859%204.5835%2014.7082V15.4165ZM10.0002%208.729C10.5418%208.729%2010.9897%208.55192%2011.3439%208.19775C11.6981%207.84359%2011.8752%207.39567%2011.8752%206.854C11.8752%206.31234%2011.6981%205.86442%2011.3439%205.51025C10.9897%205.15609%2010.5418%204.979%2010.0002%204.979C9.4585%204.979%209.01058%205.15609%208.65641%205.51025C8.30225%205.86442%208.12516%206.31234%208.12516%206.854C8.12516%207.39567%208.30225%207.84359%208.65641%208.19775C9.01058%208.55192%209.4585%208.729%2010.0002%208.729Z'%20fill='%23283C1E'/%3e%3c/g%3e%3c/svg%3e",N="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_cart'%3e%3cpath%20id='Vector'%20d='M3.75%2018.3334C3.40625%2018.3334%203.11198%2018.211%202.86719%2017.9662C2.6224%2017.7214%202.5%2017.4271%202.5%2017.0834V6.04171C2.5%205.69796%202.6224%205.40369%202.86719%205.1589C3.11198%204.9141%203.40625%204.79171%203.75%204.79171H6.04167C6.04167%203.70837%206.41319%202.77782%207.15625%202.00004C7.89931%201.22226%208.8125%200.833374%209.89583%200.833374C11.0198%200.833374%2011.9779%201.21532%2012.7701%201.97921C13.5622%202.7431%2013.9583%203.6806%2013.9583%204.79171H16.25C16.5938%204.79171%2016.888%204.9141%2017.1328%205.1589C17.3776%205.40369%2017.5%205.69796%2017.5%206.04171V17.0834C17.5%2017.4271%2017.3776%2017.7214%2017.1328%2017.9662C16.888%2018.211%2016.5938%2018.3334%2016.25%2018.3334H3.75ZM3.75%2017.0834H16.25V6.04171H3.75V17.0834ZM10%2011.0417C11.0972%2011.0417%2012.0486%2010.6389%2012.8542%209.83337C13.6597%209.02782%2014.0625%208.07643%2014.0625%206.97921H12.8125C12.8125%207.7431%2012.5347%208.40282%2011.9792%208.95837C11.4236%209.51393%2010.7639%209.79171%2010%209.79171C9.23611%209.79171%208.57639%209.51393%208.02083%208.95837C7.46528%208.40282%207.1875%207.7431%207.1875%206.97921H5.9375C5.9375%208.07643%206.34028%209.02782%207.14583%209.83337C7.95139%2010.6389%208.90278%2011.0417%2010%2011.0417ZM7.29167%204.79171H12.7083C12.7083%204.02782%2012.4479%203.38546%2011.9271%202.86462C11.4062%202.34379%2010.7639%202.08337%2010%202.08337C9.23611%202.08337%208.59375%202.34379%208.07292%202.86462C7.55208%203.38546%207.29167%204.02782%207.29167%204.79171Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e",A="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='ic_cart'%3e%3cpath%20id='Vector'%20d='M3.75%2018.3335C3.40625%2018.3335%203.11198%2018.2111%202.86719%2017.9663C2.6224%2017.7215%202.5%2017.4272%202.5%2017.0835V6.04183C2.5%205.69808%202.6224%205.40381%202.86719%205.15902C3.11198%204.91423%203.40625%204.79183%203.75%204.79183H6.04167C6.04167%203.7085%206.41319%202.77794%207.15625%202.00016C7.89931%201.22239%208.8125%200.833496%209.89583%200.833496C11.0198%200.833496%2011.9779%201.21544%2012.7701%201.97933C13.5622%202.74322%2013.9583%203.68072%2013.9583%204.79183H16.25C16.5938%204.79183%2016.888%204.91423%2017.1328%205.15902C17.3776%205.40381%2017.5%205.69808%2017.5%206.04183V17.0835C17.5%2017.4272%2017.3776%2017.7215%2017.1328%2017.9663C16.888%2018.2111%2016.5938%2018.3335%2016.25%2018.3335H3.75ZM3.75%2017.0835H16.25V6.04183H3.75V17.0835ZM10%2011.0418C11.0972%2011.0418%2012.0486%2010.6391%2012.8542%209.8335C13.6597%209.02794%2014.0625%208.07655%2014.0625%206.97933H12.8125C12.8125%207.74322%2012.5347%208.40294%2011.9792%208.9585C11.4236%209.51405%2010.7639%209.79183%2010%209.79183C9.23611%209.79183%208.57639%209.51405%208.02083%208.9585C7.46528%208.40294%207.1875%207.74322%207.1875%206.97933H5.9375C5.9375%208.07655%206.34028%209.02794%207.14583%209.8335C7.95139%2010.6391%208.90278%2011.0418%2010%2011.0418ZM7.29167%204.79183H12.7083C12.7083%204.02794%2012.4479%203.38558%2011.9271%202.86475C11.4062%202.34391%2010.7639%202.0835%2010%202.0835C9.23611%202.0835%208.59375%202.34391%208.07292%202.86475C7.55208%203.38558%207.29167%204.02794%207.29167%204.79183Z'%20fill='%23283C1E'/%3e%3c/g%3e%3c/svg%3e",F={data(){return{headerCategory:"",searchWord:"",headerCurrentPage:1,menuOffCanvas:"",searchOffCanvas:"",dropdownMenu:"",isDropdownMenuOpen:!1}},watch:{},methods:{...y(D,["setSearchWord"]),...y(H,["getProducts","getFilterProducts"]),toProductsView(){this.headerCategory="",this.isDropdownMenuOpen=!this.isDropdownMenuOpen,this.closeDropdownMenu(),this.closeMenuOffCanvas(),this.getFilterProducts(this.headerCategory,this.headerCurrentPage,"timeN2O"),this.$router.push({path:"/products/productsAll"})},changeCategory(a){console.log("changeCategory",a),this.headerCategory=a,this.isDropdownMenuOpen=!this.isDropdownMenuOpen,this.closeDropdownMenu(),this.getFilterProducts(this.headerCategory,this.headerCurrentPage,"timeN2O"),this.closeMenuOffCanvas()},toCustomPage(){this.headerCategory="客製設計 CUSTOMIZED",this.getFilterProducts(this.headerCategory,this.headerCurrentPage,"timeN2O"),this.$router.push({path:"/products/productsAll"})},openMenuOffCanvas(){this.menuOffCanvas.show()},closeMenuOffCanvas(){this.menuOffCanvas.hide()},openSearchOffCanvas(){this.searchOffCanvas.show()},closeSearchOffCanvas(){this.searchOffCanvas.hide()},openDropdownMenu(){this.dropdownMenu.show()},closeDropdownMenu(){this.dropdownMenu.hide()},toggleDropdownMenu(a){this.isDropdownMenuOpen=!this.isDropdownMenuOpen,this.isDropdownMenuOpen===!0?this.openDropdownMenu():this.closeDropdownMenu()}},computed:{...m($,["carts"]),...m(D,["searchQuery"]),...m(H,["category","categories"])},mounted(){this.menuOffCanvas=new b(this.$refs.menuOffCanvas,{backdrop:!0}),this.searchOffCanvas=new b(this.$refs.searchOffCanvas,{backdrop:!1}),this.dropdownMenu=new T(this.$refs.dropdownMenu)}},h=a=>(S("data-v-2006e082"),a=a(),L(),a),U={class:"navbar navbar-expand-lg navbar-light navbar-hover py-3 flex-column sticky-top position-relative"},I={class:"container"},W={class:"logo mb-0 me-lg-8"},E={class:"collapse navbar-collapse flex-column offcanvas offcanvas-end py-16 px-12 p-lg-0",ref:"menuOffCanvas",style:{"max-width":"85%"}},G={class:"offcanvas-header d-lg-none"},K={class:"navbar-nav me-auto gap-xxl-4 gap-xl-2 position-relative align-items-md-start"},Q={class:"nav-item dropdown",style:{"min-width":"101px"}},z={class:"dropdown-menu custom-dropdown-menu shadow-none border-0 font-noto-serif fs-8 start-50",ref:"dropdownMenu"},J={class:"d-inline-block py-2 mx-3 position-relative cursor-pointer"},Y={class:"d-flex"},X={class:"header-icon d-flex align-items-center"},e2={class:"header-form me-2 flex-shrink-1"},t2={class:"input-group d-flex align-items-center"},s2=h(()=>e("img",{class:"header-white-icon p-xxl-2 p-xl-0",src:B,alt:"會員中心"},null,-1)),o2=h(()=>e("img",{class:"header-green-icon p-xxl-2 p-xl-0",src:q,alt:"會員中心"},null,-1)),n2={href:"#","data-bs-toggle":"offcanvas","data-bs-target":"#cartOffcanvasRight","aria-controls":"offcanvasRight"},l2={class:"position-relative"},a2=h(()=>e("img",{class:"header-white-icon p-xxl-2 p-xl-0",src:N,alt:"購物袋"},null,-1)),i2=h(()=>e("img",{class:"header-green-icon p-xxl-2 p-xl-0",src:A,alt:"購物袋"},null,-1)),r2={key:0,class:"position-absolute top-0 top-xxl-25 start-95 start-xxl-75 translate-middle p-1 bg-primary rounded-circle text-white"},c2=h(()=>e("span",{class:"visually-hidden"},"New alerts",-1)),d2=[c2],p2=h(()=>e("span",{class:"menu-icon material-icons border-0 no-box-shadow"},"menu",-1)),C2=[p2],h2={class:"searchOffCanvas offcanvas offcanvas-top bg-light py-5 px-4 d-lg-none",tabindex:"-1",ref:"searchOffCanvas","aria-labelledby":"offcanvasTopLabel"},f2={class:"d-flex align-items-center justify-content-center"},u2=h(()=>e("div",{class:"d-flex border-bottom border-greyD4"},null,-1)),g2=h(()=>e("i",{class:"bi bi-search text-primary fs-5"},null,-1)),m2=h(()=>e("i",{class:"bi bi-x fs-4 text-dark"},null,-1)),_2=[m2];function v2(a,t,w,x,C,n){const c=f("router-link"),o=f("RouterLink");return d(),p(_,null,[l(c,{to:"/products/productsAll",class:"d-block accordion fs-8 py-1 bg-primary text-white cursor-pointer"},{default:i(()=>[r(" 即日起，訂單達 2,000元 以上即可享免運費優惠！ ")]),_:1}),e("nav",U,[e("div",I,[e("h1",W,[l(c,{to:"/",class:"navbar-brand"},{default:i(()=>[r("綠羊珠寶 Green Sheep handmade jewelry")]),_:1})]),e("div",E,[e("div",G,[e("button",{type:"button",class:"btn-close position-absolute","aria-label":"Close",onClick:t[0]||(t[0]=u((...s)=>n.closeMenuOffCanvas&&n.closeMenuOffCanvas(...s),["prevent"])),style:{padding:"10px",top:"16px",right:"16px"}})]),e("ul",K,[e("li",Q,[e("button",{class:"nav-link dropdown-toggle nav-item-en py-2 py-lg-1 px-2","aria-expanded":"false",onClick:t[1]||(t[1]=s=>n.toggleDropdownMenu(C.isDropdownMenuOpen))}," SHOP "),e("button",{class:"nav-link dropdown-toggle nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center","aria-expanded":"false",onClick:t[2]||(t[2]=s=>n.toggleDropdownMenu(C.isDropdownMenuOpen))}," 全部商品 "),e("ul",z,[e("li",J,[l(o,{to:"/products/productsAll",onClick:n.toProductsView},{default:i(()=>[r("全部商品 ALL")]),_:1},8,["onClick"])]),(d(!0),p(_,null,Z(a.categories,s=>(d(),p("li",{key:s+123},[l(o,{to:{path:`/products/${s}`},class:"d-inline-block py-2 mx-3 position-relative cursor-pointer",onClick:O=>n.changeCategory(s)},{default:i(()=>[r(g(s),1)]),_:2},1032,["to","onClick"])]))),128))],512)]),e("li",{class:"nav-item",style:{"min-width":"81px"},onClick:t[3]||(t[3]=s=>n.closeMenuOffCanvas())},[l(o,{to:"/story",class:"nav-link nav-item-en py-2 py-lg-1 px-2"},{default:i(()=>[r("ABOUT")]),_:1}),l(o,{to:"/story",class:"nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"},{default:i(()=>[r("關於品牌 ")]),_:1})]),e("li",{class:"nav-item",style:{"min-width":"81px"},onClick:t[4]||(t[4]=s=>n.closeMenuOffCanvas())},[l(o,{to:"/articles",class:"nav-link nav-item-en py-2 py-lg-1 px-2"},{default:i(()=>[r("BLOG")]),_:1}),l(o,{to:"/articles",class:"nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"},{default:i(()=>[r("專欄文章 ")]),_:1})]),e("li",{class:"nav-item",style:{"min-width":"81px"},onClick:t[5]||(t[5]=s=>n.closeMenuOffCanvas())},[l(o,{to:"/faq",class:"nav-link nav-item-en py-2 py-lg-1 px-2"},{default:i(()=>[r("Q&A")]),_:1}),l(o,{to:"/faq",class:"nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"},{default:i(()=>[r("常見問題 ")]),_:1})]),e("li",{class:"nav-item d-lg-none",style:{"min-width":"100px"},onClick:t[6]||(t[6]=s=>n.closeMenuOffCanvas())},[l(o,{to:"/memberLogin",class:"nav-link nav-item-ch py-2 py-lg-1 px-2 text-start"},{default:i(()=>[r("登入/註冊")]),_:1})])])],512),e("div",Y,[e("div",X,[e("form",e2,[e("div",t2,[e("div",null,[e("i",{class:"bi bi-search header-white-icon text-white",onClick:t[7]||(t[7]=s=>n.openSearchOffCanvas())}),e("i",{class:"bi bi-search header-green-icon text-primary",onClick:t[8]||(t[8]=s=>n.openSearchOffCanvas())})]),k(e("input",{type:"text",class:"form-control no-box-shadow search-box input-group-text bg-transparent text-start d-none d-lg-block",placeholder:"搜尋...","onUpdate:modelValue":t[9]||(t[9]=s=>C.searchWord=s),onKeyup:t[10]||(t[10]=V((...s)=>a.searchProducts&&a.searchProducts(...s),["enter"]))},null,544),[[M,C.searchWord]])])]),l(c,{to:"/memberLogin",class:"me-2 d-none d-lg-block flex-grow-1"},{default:i(()=>[s2,o2]),_:1}),e("a",n2,[e("div",l2,[a2,i2,a.carts.length?(d(),p("span",r2,d2)):P("",!0)])])]),e("button",{class:"navbar-toggler no-box-shadow border-0 mx-0",type:"button",onClick:t[11]||(t[11]=u((...s)=>n.openMenuOffCanvas&&n.openMenuOffCanvas(...s),["prevent"])),"aria-controls":"offcanvasExample","aria-expanded":"false","aria-label":"Toggle navigation"},C2)]),e("div",h2,[e("div",f2,[u2,g2,k(e("input",{type:"text",class:"form-control no-box-shadow input-group-text bg-transparent text-start w-100",placeholder:"請輸入搜尋商品","onUpdate:modelValue":t[12]||(t[12]=s=>C.searchWord=s),onKeyup:t[13]||(t[13]=V((...s)=>a.searchProducts&&a.searchProducts(...s),["enter"]))},null,544),[[M,C.searchWord]]),e("a",{role:"button",onClick:t[14]||(t[14]=u(s=>n.closeSearchOffCanvas(),["prevent"]))},_2)])],512)])])],64)}const w2=v(F,[["render",v2],["__scopeId","data-v-2006e082"]]),x2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20%3e%3cg%20clip-path='url(%23clip0_2342_4058)'%3e%3cpath%20opacity='0.7'%20d='M39.5%2020C39.5%2030.7696%2030.7696%2039.5%2020%2039.5C9.23045%2039.5%200.5%2030.7696%200.5%2020C0.5%209.23045%209.23045%200.5%2020%200.5C30.7696%200.5%2039.5%209.23045%2039.5%2020Z'%20stroke='none'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M29%2019.0263C29%2015.152%2024.9625%2012%2020%2012C15.0377%2012%2011%2015.152%2011%2019.0263C11%2022.4994%2014.2019%2025.4086%2018.527%2025.9589C18.8199%2026.0196%2019.2188%2026.1451%2019.3198%2026.386C19.4106%2026.6047%2019.3793%2026.9474%2019.3488%2027.1685C19.3488%2027.1685%2019.2436%2027.7796%2019.2204%2027.91C19.1814%2028.1288%2019.0395%2028.7659%2020%2028.3767C20.9608%2027.9874%2025.1828%2025.4404%2027.071%2023.3494C28.3754%2021.9736%2029%2020.577%2029%2019.0263ZM14.4146%2021.1339C14.1861%2021.1339%2014%2020.9408%2014%2020.703V17.4397C14%2017.2022%2014.2116%2017.0089%2014.48%2017.0089C14.7484%2017.0089%2014.9%2017.2006%2014.9%2017.4397V20.2724H15.9854C16.2143%2020.2724%2016.4%2020.4657%2016.4%2020.703C16.4%2020.9408%2016.2143%2021.1339%2015.9854%2021.1339H14.4146ZM18.2%2020.703C18.2%2020.9408%2017.9981%2021.1339%2017.7501%2021.1339C17.5019%2021.1339%2017.3%2020.9408%2017.3%2020.703V17.4397C17.3%2017.2022%2017.5019%2017.0089%2017.7501%2017.0089C17.9981%2017.0089%2018.2%2017.2022%2018.2%2017.4397V20.703ZM22.7%2020.703C22.7%2020.889%2022.5717%2021.0532%2022.3797%2021.1116C22.3316%2021.1265%2022.2813%2021.1339%2022.2309%2021.1339C22.0849%2021.1339%2021.9449%2021.0696%2021.8566%2020.9616L20.0372%2018.6842V20.703C20.0372%2020.9408%2019.8272%2021.1339%2019.5687%2021.1339C19.3103%2021.1339%2019.1%2020.9408%2019.1%2020.703V17.4397C19.1%2017.2541%2019.2288%2017.0899%2019.4203%2017.0312C19.4686%2017.0162%2019.5187%2017.0089%2019.5691%2017.0089C19.7153%2017.0089%2019.8554%2017.0731%2019.9431%2017.1812L21.7631%2019.4587V17.4397C21.7631%2017.2022%2021.9735%2017.0089%2022.2316%2017.0089C22.4902%2017.0089%2022.7%2017.2022%2022.7%2017.4397V20.703ZM25.5853%2018.6407C25.8142%2018.6407%2026%2018.8339%2026%2019.0715C26%2019.3088%2025.8142%2019.502%2025.5853%2019.502H24.4294V20.2724H25.5853C25.8138%2020.2724%2026%2020.4657%2026%2020.703C26%2020.9408%2025.8138%2021.1339%2025.5853%2021.1339H24.0145C23.7863%2021.1339%2023.6%2020.9408%2023.6%2020.703V19.0726V19.0715V17.4397C23.6%2017.2022%2023.7859%2017.0089%2024.0145%2017.0089H25.5853C25.8142%2017.0089%2026%2017.2022%2026%2017.4397C26%2017.6772%2025.8142%2017.8702%2025.5853%2017.8702H24.4294V18.6407H25.5853Z'%20fill='%23D5D5D5'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2342_4058'%3e%3crect%20width='40'%20height='40'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",b2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20%3e%3cg%20clip-path='url(%23clip0_2342_4061)'%3e%3cpath%20opacity='0.7'%20d='M39.5%2020C39.5%2030.7696%2030.7696%2039.5%2020%2039.5C9.23045%2039.5%200.5%2030.7696%200.5%2020C0.5%209.23045%209.23045%200.5%2020%200.5C30.7696%200.5%2039.5%209.23045%2039.5%2020Z'%20stroke='none'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.5983%2020.9736H24.1413L24.5219%2018.0404H21.5983V16.1677C21.5983%2015.3184%2021.8357%2014.7397%2023.0615%2014.7397L24.625%2014.739V12.1156C24.3545%2012.0799%2023.4265%2012%2022.3467%2012C20.0926%2012%2018.5494%2013.3669%2018.5494%2015.8773V18.0404H16V20.9736H18.5494V28.5H21.5983V20.9736Z'%20fill='%23D5D5D5'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2342_4061'%3e%3crect%20width='40'%20height='40'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",y2="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20%3e%3cg%20clip-path='url(%23clip0_2342_4064)'%3e%3cpath%20opacity='0.7'%20d='M39.5%2020C39.5%2030.7696%2030.7696%2039.5%2020%2039.5C9.23045%2039.5%200.5%2030.7696%200.5%2020C0.5%209.23045%209.23045%200.5%2020%200.5C30.7696%200.5%2039.5%209.23045%2039.5%2020Z'%20stroke='none'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M20.0625%2012C17.771%2012%2017.4837%2012.0097%2016.5837%2012.0508C15.6857%2012.0917%2015.0723%2012.2344%2014.5356%2012.443C13.9808%2012.6586%2013.5102%2012.9471%2013.0411%2013.4161C12.5721%2013.8852%2012.2836%2014.3558%2012.068%2014.9106C11.8594%2015.4473%2011.7167%2016.0607%2011.6758%2016.9587C11.6347%2017.8587%2011.625%2018.146%2011.625%2020.4375C11.625%2022.729%2011.6347%2023.0163%2011.6758%2023.9163C11.7167%2024.8143%2011.8594%2025.4277%2012.068%2025.9644C12.2836%2026.5192%2012.5721%2026.9898%2013.0411%2027.4589C13.5102%2027.9279%2013.9808%2028.2164%2014.5356%2028.4321C15.0723%2028.6406%2015.6857%2028.7833%2016.5837%2028.8242C17.4837%2028.8653%2017.771%2028.875%2020.0625%2028.875C22.354%2028.875%2022.6413%2028.8653%2023.5413%2028.8242C24.4393%2028.7833%2025.0527%2028.6406%2025.5894%2028.4321C26.1442%2028.2164%2026.6148%2027.9279%2027.0839%2027.4589C27.5529%2026.9898%2027.8414%2026.5192%2028.0571%2025.9644C28.2656%2025.4277%2028.4083%2024.8143%2028.4492%2023.9163C28.4903%2023.0163%2028.5%2022.729%2028.5%2020.4375C28.5%2018.146%2028.4903%2017.8587%2028.4492%2016.9587C28.4083%2016.0607%2028.2656%2015.4473%2028.0571%2014.9106C27.8414%2014.3558%2027.5529%2013.8852%2027.0839%2013.4161C26.6148%2012.9471%2026.1442%2012.6586%2025.5894%2012.443C25.0527%2012.2344%2024.4393%2012.0917%2023.5413%2012.0508C22.6413%2012.0097%2022.354%2012%2020.0625%2012ZM20.0625%2013.5203C22.3154%2013.5203%2022.5823%2013.5289%2023.472%2013.5695C24.2946%2013.607%2024.7414%2013.7444%2025.0387%2013.86C25.4325%2014.013%2025.7136%2014.1959%2026.0088%2014.4912C26.3041%2014.7864%2026.487%2015.0675%2026.64%2015.4613C26.7556%2015.7586%2026.893%2016.2054%2026.9305%2017.028C26.9711%2017.9177%2026.9797%2018.1846%2026.9797%2020.4375C26.9797%2022.6904%2026.9711%2022.9573%2026.9305%2023.847C26.893%2024.6696%2026.7556%2025.1164%2026.64%2025.4137C26.487%2025.8075%2026.3041%2026.0886%2026.0088%2026.3838C25.7136%2026.6791%2025.4325%2026.862%2025.0387%2027.015C24.7414%2027.1306%2024.2946%2027.268%2023.472%2027.3055C22.5824%2027.3461%2022.3156%2027.3547%2020.0625%2027.3547C17.8094%2027.3547%2017.5426%2027.3461%2016.653%2027.3055C15.8304%2027.268%2015.3836%2027.1306%2015.0863%2027.015C14.6925%2026.862%2014.4114%2026.6791%2014.1162%2026.3838C13.8209%2026.0886%2013.638%2025.8075%2013.485%2025.4137C13.3694%2025.1164%2013.232%2024.6696%2013.1945%2023.847C13.1539%2022.9573%2013.1453%2022.6904%2013.1453%2020.4375C13.1453%2018.1846%2013.1539%2017.9177%2013.1945%2017.028C13.232%2016.2054%2013.3694%2015.7586%2013.485%2015.4613C13.638%2015.0675%2013.8209%2014.7864%2014.1162%2014.4912C14.4114%2014.1959%2014.6925%2014.013%2015.0863%2013.86C15.3836%2013.7444%2015.8304%2013.607%2016.653%2013.5695C17.5427%2013.5289%2017.8096%2013.5203%2020.0625%2013.5203ZM20.0625%2016.1047C17.6696%2016.1047%2015.7297%2018.0446%2015.7297%2020.4375C15.7297%2022.8304%2017.6696%2024.7703%2020.0625%2024.7703C22.4554%2024.7703%2024.3953%2022.8304%2024.3953%2020.4375C24.3953%2018.0446%2022.4554%2016.1047%2020.0625%2016.1047ZM20.0625%2023.25C18.5092%2023.25%2017.25%2021.9908%2017.25%2020.4375C17.25%2018.8842%2018.5092%2017.625%2020.0625%2017.625C21.6158%2017.625%2022.875%2018.8842%2022.875%2020.4375C22.875%2021.9908%2021.6158%2023.25%2020.0625%2023.25ZM25.579%2015.9336C25.579%2015.3744%2025.1256%2014.921%2024.5664%2014.921C24.0073%2014.921%2023.554%2015.3744%2023.554%2015.9336C23.554%2016.4927%2024.0073%2016.946%2024.5664%2016.946C25.1256%2016.946%2025.579%2016.4927%2025.579%2015.9336Z'%20fill='%23D5D5D5'%20/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_2342_4064'%3e%3crect%20width='40'%20height='40'%20fill='white'%20/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",k2={data(){return{}},methods:{scrollToTop(){window.scrollTo(0,0)}}},M2={class:"footer"},$2={class:"container-fluid bg-primary py-lg-12 py-8"},O2={class:"container-lg text-start"},V2={class:"d-flex flex-lg-row justify-content-lg-between mb-lg-4 flex-column-reverse mb-6"},D2={class:"footer-top-left list-unstyled d-flex flex-lg-row flex-column align-items-center mb-0"},H2={class:"d-flex mb-lg-0 align-items-lg-center mb-4"},Z2={class:"d-flex align-items-lg-center"},T2=e("i",{class:"bi bi-box-arrow-right d-none d-lg-inline-block"},null,-1),P2={class:"footer-top-right d-flex justify-content-between mb-4 mb-lg-0"},S2={class:"me-2 me-lg-6"},L2=R('<ul class="social-media-list list-unstyled d-flex justify-content-between mb-0"><li class="me-4"><a href="https://lin.ee/bYROr08" target="_blank"><img src="'+x2+'" alt=""></a></li><li class="me-4"><a href="https://www.facebook.com/profile.php?id=100071826680344&amp;mibextid=opq0tG" target="_blank"><img src="'+b2+'" alt=""></a></li><li><a href="https://www.instagram.com/greensheep_jewelry?igsh=MWNkcjd0azZud3JheQ%3D%3D&amp;utm_source=qr" target="_blank"><img src="'+y2+'" alt=""></a></li></ul>',1),R2=e("hr",null,null,-1),j2=e("div",{class:"d-flex flex-lg-row justify-content-lg-between mt-lg-4 flex-column-reverse mt-6"},[e("p",{class:"display-lg-8 display-9"}," Copyright ©2023 綠羊 Green Sheep.All rights reserved. "),e("p",{class:"display-lg-8 mb-lg-0 display-9 mb-4"},"greensheepjewelry@gmail.com")],-1);function B2(a,t,w,x,C,n){const c=f("RouterLink");return d(),p("footer",M2,[e("div",$2,[e("div",O2,[e("div",V2,[e("ul",D2,[e("div",H2,[e("li",null,[l(c,{to:"/products/productsAll",class:"fs-8 text-white me-lg-6",onClick:n.scrollToTop},{default:i(()=>[r("全部商品")]),_:1},8,["onClick"])]),e("li",null,[l(c,{to:"/products/客製設計%20CUSTOMIZED`",class:"fs-8 text-white me-lg-6 mx-lg-0 mx-12",onClick:n.scrollToTop},{default:i(()=>[r("客製設計")]),_:1},8,["onClick"])]),e("li",null,[l(c,{to:"/story",class:"fs-8 text-white me-lg-6",onClick:n.scrollToTop},{default:i(()=>[r("關於品牌")]),_:1},8,["onClick"])])]),e("div",Z2,[e("li",null,[l(c,{to:"/articles",class:"fs-8 text-white me-lg-6 me-12",onClick:n.scrollToTop},{default:i(()=>[r("專欄文章")]),_:1},8,["onClick"])]),e("li",null,[l(c,{to:"/faq",class:"fs-8 text-white me-12 me-lg-6",onClick:n.scrollToTop},{default:i(()=>[r("常見問題")]),_:1},8,["onClick"])]),e("li",null,[l(c,{to:"/admin/home",target:"_blank",class:"fs-8 text-white"},{default:i(()=>[r("前往後台 "),T2]),_:1})])])]),e("div",P2,[e("div",S2,[l(c,{to:"/"},{default:i(()=>[e("img",{src:j,alt:"greensheep logo",class:"img-fluid",onClick:t[0]||(t[0]=(...o)=>n.scrollToTop&&n.scrollToTop(...o))})]),_:1})]),L2])]),R2,j2])])])}const q2=v(k2,[["render",B2]]),N2={data(){return{cartOffcanvas:""}},methods:{...y($,["getCarts","updateCart","deleteCart"]),closeOffcanvas(){this.cartOffcanvas.hide()}},computed:{...m($,["carts","total"])},mounted(){this.cartOffcanvas=new b(document.querySelector("#cartOffcanvasRight")),this.getCarts()}},A2={class:"offcanvas offcanvas-end my-3 mx-5 p-3 rounded-3","data-bs-backdrop":"false","data-bs-scroll":"true",tabindex:"-1",id:"cartOffcanvasRight","aria-labelledby":"offcanvasRightLabel"},F2=e("div",{class:"offcanvas-header"},[e("h3",{class:"offcanvas-title",id:"offcanvasRightLabel"}),e("button",{type:"button",class:"btn-close p-5","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),U2={class:"offcanvas-body d-flex flex-column justify-content-between"},I2={class:""},W2=e("h3",{class:"text-center mb-5"},"購物車",-1),E2={key:0,class:"fs-2 text-primary mt-10"},G2={key:1,class:"overflow-y-auto"},K2={class:"list-group list-group-flush"},Q2={class:"card mb-3 border-0",style:{"max-width":"540px"}},z2={class:"row g-0"},J2={class:"col-md-4 d-flex align-items-center justify-content-center"},Y2=["src"],X2={class:"col-md-7 d-flex align-items-center"},e0={class:"card-body text-start"},t0={class:""},s0={class:"mb-2 badge rounded-pill text-bg-primary"},o0={class:"card-title text-primary"},n0={class:""},l0=["onClick"],a0=e("i",{class:"bi bi-plus-circle fs-4"},null,-1),i0=[a0],r0=["onUpdate:modelValue"],c0=["onClick","disabled"],d0=e("i",{class:"bi bi-dash-circle fs-4"},null,-1),p0=[d0],C0={class:"card-text text-small text-dark"},h0=["onClick"],f0=e("a",{href:"",class:"text-danger fs-4"},[e("i",{class:"bi bi-trash"})],-1),u0=[f0],g0={class:"my-2"},m0={class:"text-success text-end fs-4 p-4 text-dark border-top"};function _0(a,t,w,x,C,n){const c=f("router-link");return d(),p("div",A2,[F2,e("div",U2,[e("div",I2,[W2,a.carts.length?(d(),p("div",G2,[e("ul",K2,[(d(!0),p(_,null,Z(a.carts,o=>(d(),p("li",{class:"list-group-item mt-3",key:o.id},[e("div",Q2,[e("div",z2,[e("div",J2,[e("img",{src:o.product.imageUrl,class:"img-fluid rounded-2 w-75 h-75",alt:"..."},null,8,Y2)]),e("div",X2,[e("div",e0,[e("div",t0,[e("span",s0,g(o.product.category),1),e("h5",o0,g(o.product.title),1)]),e("div",n0,[e("button",{class:"btn btn-link text-primary ps-0 pe-2",onClick:[u(s=>o.qty++,["prevent"]),s=>a.updateCart(o)]},i0,8,l0),k(e("input",{type:"number",min:"1",class:"w-25 my-2 fs-5","onUpdate:modelValue":s=>o.qty=s,disabled:""},null,8,r0),[[M,o.qty]]),e("button",{class:"btn btn-link text-primary ps-2",onClick:[u(s=>o.qty--,["prevent"]),s=>a.updateCart(o)],disabled:o.qty<=1},p0,8,c0)]),e("p",C0,"NT$ "+g(parseInt(o.total)),1)])]),e("div",{class:"col-md-1 d-flex align-items-center",onClick:u(s=>a.deleteCart(o.id),["prevent"])},u0,8,h0)])])]))),128))])])):(d(),p("p",E2,"目前購物車沒有商品"))]),e("div",g0,[e("p",m0,[r("總計：$ "),e("span",null,g(parseInt(a.total)),1),r(" 元")]),l(c,{to:"/cart",class:"btn btn-primary w-100 fs-4 p-4",onClick:n.closeOffcanvas},{default:i(()=>[r(" 立即結帳 ")]),_:1},8,["onClick"])])])])}const v0=v(N2,[["render",_0]]),w0={components:{Header:w2,Footer:q2,CartComponent:v0}};function x0(a,t,w,x,C,n){const c=f("Header"),o=f("CartComponent"),s=f("RouterView"),O=f("Footer");return d(),p(_,null,[l(c),l(o),l(s),l(O)],64)}const V0=v(w0,[["render",x0]]);export{V0 as default};
