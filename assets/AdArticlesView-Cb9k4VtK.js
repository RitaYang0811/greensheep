import{a as C}from"./adArticlesStore-D8L8woLQ.js";import{_ as T,m as U,a as E,c as r,b as e,h as f,v as D,x as p,g as d,F as u,t as b,j as a,r as w,e as S,w as L,k as V,o,P as y,f as j}from"./index-3qIeMt9n.js";import{a as G,t as M}from"./sweetalertToast-CCxsTCah.js";import"./dateToUnix-DUte0kxx.js";import"./scrollToTop-BdmBcgwt.js";import"./sweetalert2.all-B7PAY33k.js";var N={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",BASE_URL:"/greensheep/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:R,VITE_APP_API_NAME:B}=N,F={data(){return{isSelectPinnedArticle:!1,selectedPinnedArticle:[],articlesCurrentPage:1,keyword:"",isList:!1,isLoading:!1}},methods:{...U(C,["getArticles","articleActivity","changeTab","getCurrentPageArticles","updateCurrentPage"]),async updatePinnedArticle(){try{this.isSelectPinnedArticle=!1,this.isLoading=!0;const n=`${R}/api/${B}/admin/article`,k=this.pinnedArticles.filter(l=>!this.selectedPinnedArticle.includes(l)).map(l=>this.$http.get(`${n}/${l}`)),t=(await Promise.all(k)).map(l=>{var g,h,m;const v=(h=(g=l==null?void 0:l.data)==null?void 0:g.article)==null?void 0:h.id,P={...(m=l==null?void 0:l.data)==null?void 0:m.article,isPinned:!1};return this.$http.put(`${n}/${v}`,{data:P})}),_=await Promise.all(t),A=this.selectedPinnedArticle.filter(l=>!this.pinnedArticles.includes(l)).map(l=>this.$http.get(`${n}/${l}`)),c=(await Promise.all(A)).map(l=>{var g,h,m;const v=(h=(g=l==null?void 0:l.data)==null?void 0:g.article)==null?void 0:h.id,P={...(m=l==null?void 0:l.data)==null?void 0:m.article,isPinned:!0};return this.$http.put(`${n}/${v}`,{data:P})}),Je=await Promise.all(c);G("已更新置頂文章"),this.getArticles()}catch(n){M(n.response.data.message)}finally{this.isLoading=!1}}},watch:{pinnedArticles(){this.selectedPinnedArticle=[...this.pinnedArticles]},keyword(){this.articlesCurrentPage=1,this.getCurrentPageArticles(this.articlesCurrentPage,this.keyword)},articlesCurrentPage(){this.updateCurrentPage(this.articlesCurrentPage)},currentPage(){this.articlesCurrentPage=this.currentPage}},computed:{...E(C,["loadingStatus","searchArticles","currentTab","pinnedArticles","currentPage","currentPageArticles"])},mounted(){this.getArticles()}},O={class:"ad-article"},z=e("h1",{class:"fs-3 mb-4 fw-bold"},"文章管理",-1),q={class:"position-relative"},H=e("i",{class:"bi bi-search float-end fs-5 text-primary pe-2 mt-2 position-absolute top-0 end-0"},null,-1),J={class:"nav border-bottom border-primary mb-4"},K={class:"nav-item"},Q={class:"nav-item"},W={class:"d-flex gap-2 gap-md-4 justify-content-between align-items-center mb-4"},X={class:"d-flex gap-2 gap-md-4 align-items-center"},Y={class:"d-none d-md-flex gap-4"},Z=e("p",{class:"text-danger fs-8"},"*最多可選擇 3 篇文章",-1),$={class:"d-flex gap-2 gap-md-4"},ee=e("i",{class:"bi bi-ui-checks fs-5"},null,-1),te=[ee],se=e("i",{class:"bi bi-ui-checks-grid fs-5"},null,-1),ie=[se],ne={key:0,class:"d-md-none d-flex gap-4 mb-4"},le=e("p",{class:"text-danger fs-8"},"*最多可選擇 3 篇文章",-1),re={key:0,class:"row row-cols-1 row-cols-sm-2 row-cols-lg-5 mb-10 mb-lg-15 ps-0 list-unstyled",style:{"row-gap":"12px"}},oe=["for"],de={key:0,class:"check-box"},ce=["value","id","disabled"],ae=["src","alt"],pe={class:"card-body d-flex flex-column p-0 px-2 pt-2"},ue={class:"card-title display-6 text-dark pb-2 mb-auto"},ge={key:0,class:"float-end bg-primary text-white py-1 px-2 ms-1 fs-8"},he={class:"card-foot d-flex justify-content-evenly border-top border-1 border-primary py-2"},me=["onClick"],fe=e("i",{class:"bi bi-pencil-fill text-dark fs-6"},null,-1),be=[fe],_e=["onClick"],Ae=e("i",{class:"bi bi-trash3-fill text-dark fs-6"},null,-1),ve=[Ae],Pe={key:1,class:"d-flex flex-column gap-3 mb-10 mb-lg-15 ps-0 list-unstyled"},ye=["for"],ke={class:"d-flex align-items-center gap-1 gap-sm-4 position-relative",style:{"min-width":"98px"}},xe={class:"check-box d-md-none"},Ce=["value","id","disabled"],we=["value","id","disabled"],Se=["src","alt"],Le={class:"d-flex align-items-md-center flex-column flex-md-row flex-grow-1 gap-md-15 gap-lg-30"},Ve={class:"d-flex gap-1 flex-grow-1"},Ie={class:"card-title display-6 text-dark flex-grow-1"},Te={key:0,class:"align-self-start bg-primary text-white text-nowrap py-1 px-2 rounded-pill fs-9"},Ue={class:"d-flex gap-4 gap-md-8 me-md-10"},Ee=["onClick"],De=e("i",{class:"bi bi-pencil-fill text-dark fs-6"},null,-1),je=[De],Ge=["onClick"],Me=e("i",{class:"bi bi-trash3-fill text-dark fs-6"},null,-1),Ne=[Me],Re={key:2,class:"text-center va-pagination"},Be=e("span",{class:"material-icons fs-8 p-1"}," navigate_before ",-1),Fe=e("span",{class:"material-icons fs-8 p-1"}," navigate_next ",-1),Oe={key:3,class:"d-flex justify-content-center align-items-center",style:{"min-height":"360px"}},ze=e("div",{class:"spinner-border",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),qe=[ze];function He(n,i,k,I,t,_){const x=V("vue-awesome-paginate"),A=V("VueLoading");return o(),r("div",O,[z,e("div",q,[f(e("input",{class:"form-control mb-4 rounded-3 border border-primary bg-transparent fs-6",type:"text",placeholder:"請輸入要搜尋的文章","onUpdate:modelValue":i[0]||(i[0]=s=>t.keyword=s)},null,512),[[D,t.keyword,void 0,{trim:!0}]]),H]),e("ul",J,[e("li",K,[e("a",{class:p(["nav-link px-6 py-4",{active:n.currentTab==="公開文章"}]),href:"#",onClick:i[1]||(i[1]=d(s=>n.changeTab("公開文章"),["prevent"]))}," 公開文章 ",2)]),e("li",Q,[e("a",{class:p(["nav-link px-6 py-4",{active:n.currentTab==="草稿文章"}]),href:"#",onClick:i[2]||(i[2]=d(s=>n.changeTab("草稿文章"),["prevent"]))}," 草稿文章 ",2)])]),e("div",W,[e("div",X,[e("a",{href:"#",class:p(["btn btn-primary",[{disabled:n.loadingStatus.loadingItem},{"d-none":t.isSelectPinnedArticle}]]),onClick:i[3]||(i[3]=d(s=>n.articleActivity("new"),["prevent"]))}," 建立文章 ",2),n.currentTab==="公開文章"?(o(),r(u,{key:0},[t.isSelectPinnedArticle?(o(),r(u,{key:1},[e("a",{href:"#",class:"btn btn-primary",onClick:i[5]||(i[5]=d((...s)=>_.updatePinnedArticle&&_.updatePinnedArticle(...s),["prevent"]))},"儲存置頂文章"),e("a",{href:"#",class:"btn btn-danger",onClick:i[6]||(i[6]=d(s=>(t.selectedPinnedArticle=[...n.pinnedArticles],t.isSelectPinnedArticle=!1),["prevent"]))}," 取消 "),e("div",Y,[e("p",null,"已選擇: "+b(t.selectedPinnedArticle.length)+" 篇",1),e("a",{href:"#",class:"text-decoration-underline link-underline-grey9F link-offset-1",onClick:i[7]||(i[7]=d(s=>t.selectedPinnedArticle=[],["prevent"]))}," 清除選擇 "),Z])],64)):(o(),r("a",{key:0,href:"#",class:p(["btn btn-primary",{disabled:n.loadingStatus.loadingItem}]),onClick:i[4]||(i[4]=d(s=>t.isSelectPinnedArticle=!0,["prevent"]))}," 置頂文章管理 ",2))],64)):a("",!0)]),e("div",$,[e("a",{href:"#",class:p(["btn border border-1 border-primary btn-md text-primary p-2 rounded-3",[{"bg-primary":t.isList},{"text-white":t.isList}]]),onClick:i[8]||(i[8]=d(s=>t.isList=!0,["prevent"]))},te,2),e("a",{href:"#",class:p(["btn border border-1 border-primary btn-md text-primary p-2 rounded-3",[{"bg-primary":!t.isList},{"text-white":!t.isList}]]),onClick:i[9]||(i[9]=d(s=>t.isList=!1,["prevent"]))},ie,2)])]),t.isSelectPinnedArticle?(o(),r("div",ne,[e("p",null,"已選擇: "+b(t.selectedPinnedArticle.length)+" 篇",1),e("a",{href:"#",class:"text-decoration-underline link-underline-grey9F link-offset-1",onClick:i[10]||(i[10]=d(s=>t.selectedPinnedArticle=[],["prevent"]))}," 清除選擇 "),le])):a("",!0),n.loadingStatus.loadingItem?a("",!0):(o(),r(u,{key:1},[t.isList?a("",!0):(o(),r("ul",re,[(o(!0),r(u,null,w(n.currentPageArticles,s=>(o(),r("li",{class:"col",key:s.id},[e("label",{class:"card h-100 border border-1 border-primary position-relative",for:s.id},[t.isSelectPinnedArticle?(o(),r("span",de,[f(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":i[11]||(i[11]=c=>t.selectedPinnedArticle=c),value:s.id,id:s.id,disabled:t.selectedPinnedArticle.length>=3&&!t.selectedPinnedArticle.includes(s.id)},null,8,ce),[[y,t.selectedPinnedArticle]])])):a("",!0),e("img",{src:s.image,class:"card-img-top w-100 object-fit-cover",alt:s.title,style:{height:"200px"}},null,8,ae),e("div",pe,[e("h5",ue,[s.isPinned?(o(),r("span",ge,"置頂")):a("",!0),j(b(s.title),1)]),e("div",he,[e("a",{href:"#",class:p({"disabled-link":n.loadingStatus.loadingDelete||t.isSelectPinnedArticle}),onClick:d(c=>n.articleActivity("edit",s.id),["prevent"])},be,10,me),e("a",{href:"#",class:p({"disabled-link":t.isSelectPinnedArticle}),onClick:d(c=>n.articleActivity("delete",s.id),["prevent"])},ve,10,_e)])])],8,oe)]))),128))])),t.isList?(o(),r("ul",Pe,[(o(!0),r(u,null,w(n.currentPageArticles,s=>(o(),r("li",{key:s.id,class:"bg-white rounded-3"},[e("label",{for:s.id,class:"d-flex gap-3 gap-md-8 px-2 py-4 px-sm-4"},[e("div",ke,[t.isSelectPinnedArticle?(o(),r(u,{key:0},[e("div",xe,[f(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":i[12]||(i[12]=c=>t.selectedPinnedArticle=c),value:s.id,id:s.id,disabled:t.selectedPinnedArticle.length>=3&&!t.selectedPinnedArticle.includes(s.id)},null,8,Ce),[[y,t.selectedPinnedArticle]])]),f(e("input",{class:"form-check-input d-none d-md-block",type:"checkbox","onUpdate:modelValue":i[13]||(i[13]=c=>t.selectedPinnedArticle=c),value:s.id,id:s.id,disabled:t.selectedPinnedArticle.length>=3&&!t.selectedPinnedArticle.includes(s.id)},null,8,we),[[y,t.selectedPinnedArticle]])],64)):a("",!0),e("img",{src:s.image,class:"rounded object-fit-cover",alt:s.title,style:{height:"98px",width:"98px"}},null,8,Se)]),e("div",Le,[e("div",Ve,[e("h5",Ie,b(s.title),1),s.isPinned?(o(),r("p",Te," 置頂 ")):a("",!0)]),e("div",Ue,[e("a",{href:"#",class:p({"disabled-link":n.loadingStatus.loadingDelete||t.isSelectPinnedArticle}),onClick:d(c=>n.articleActivity("edit",s.id),["prevent"])},je,10,Ee),e("a",{href:"#",class:p(["",{"disabled-link":t.isSelectPinnedArticle}]),onClick:d(c=>n.articleActivity("delete",s.id),["prevent"])},Ne,10,Ge)])])],8,ye)]))),128))])):a("",!0)],64)),!n.loadingStatus.loadingItem&&n.searchArticles.length?(o(),r("div",Re,[S(x,{"total-items":n.searchArticles.length,"items-per-page":10,"max-pages-shown":3,modelValue:t.articlesCurrentPage,"onUpdate:modelValue":i[14]||(i[14]=s=>t.articlesCurrentPage=s),onClick:n.getCurrentPageArticles,"pagination-container-class":"cus-pagination","paginate-buttons-class":"page-link","number-buttons-class":"fs-8","active-page-class":"active"},{"prev-button":L(()=>[Be]),"next-button":L(()=>[Fe]),_:1},8,["total-items","modelValue","onClick"])])):a("",!0),n.loadingStatus.loadingItem?(o(),r("div",Oe,qe)):a("",!0),S(A,{active:t.isLoading},null,8,["active"])])}const $e=T(F,[["render",He]]);export{$e as default};
