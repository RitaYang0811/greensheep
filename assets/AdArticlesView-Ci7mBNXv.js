import{a as x}from"./adArticlesStore-Du3no3rw.js";import{_ as I,m as T,a as E,c as r,b as e,g as m,v as U,u as a,f as d,F as p,t as b,i as c,r as C,d as w,w as S,j as L,o,S as v,e as N}from"./index-Xkvk-t6A.js";import{a as D,t as B}from"./sweetalertToast-C0MnoKh9.js";import"./dateToUnix-DUte0kxx.js";import"./scrollToTop-BdmBcgwt.js";import"./sweetalert2.all-BvkflR6O.js";var j={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",VITE_LINE_CLIENT_ID:"x9iTcS6m9Fdlz8XFfAbkqs",VITE_LINE_CLIENT_SECRET:"iGiOLRLmU2aNTDuObVQlcP5XzPYSbUzJ9gvUl4YvPzx",BASE_URL:"/greensheep/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:G,VITE_APP_API_NAME:M}=j,R={data(){return{isSelectPinnedArticle:!1,selectedPinnedArticle:[],articlesCurrentPage:1,keyword:"",isList:!1,isLoading:!1}},methods:{...T(x,["getArticles","articleActivity","changeTab","getCurrentPageArticles","updateCurrentPage"]),async updatePinnedArticle(){try{this.isSelectPinnedArticle=!1,this.isLoading=!0;const i=`${G}/api/${M}/admin/article`,k=this.pinnedArticles.filter(l=>!this.selectedPinnedArticle.includes(l)).map(l=>this.$http.get(`${i}/${l}`)),t=(await Promise.all(k)).map(l=>{var u,g,h;const A=(g=(u=l==null?void 0:l.data)==null?void 0:u.article)==null?void 0:g.id,P={...(h=l==null?void 0:l.data)==null?void 0:h.article,isPinned:!1};return this.$http.put(`${i}/${A}`,{data:P})});await Promise.all(t);const _=this.selectedPinnedArticle.filter(l=>!this.pinnedArticles.includes(l)).map(l=>this.$http.get(`${i}/${l}`)),s=(await Promise.all(_)).map(l=>{var u,g,h;const A=(g=(u=l==null?void 0:l.data)==null?void 0:u.article)==null?void 0:g.id,P={...(h=l==null?void 0:l.data)==null?void 0:h.article,isPinned:!0};return this.$http.put(`${i}/${A}`,{data:P})});await Promise.all(s),D("已更新置頂文章"),this.getArticles()}catch(i){B(i.response.data.message)}finally{this.isLoading=!1}}},watch:{pinnedArticles(){this.selectedPinnedArticle=[...this.pinnedArticles]},keyword(){this.articlesCurrentPage=1,this.getCurrentPageArticles(this.articlesCurrentPage,this.keyword)},articlesCurrentPage(){this.updateCurrentPage(this.articlesCurrentPage)},currentPage(){this.articlesCurrentPage=this.currentPage}},computed:{...E(x,["loadingStatus","searchArticles","currentTab","pinnedArticles","currentPage","currentPageArticles"])},mounted(){this.getArticles()}},F={class:"ad-article"},z=e("h1",{class:"fs-3 mb-4 fw-bold"},"文章管理",-1),O={class:"position-relative"},X=e("i",{class:"bi bi-search float-end fs-5 text-primary pe-2 mt-2 position-absolute top-0 end-0"},null,-1),Y={class:"nav border-bottom border-primary mb-4"},q={class:"nav-item"},J={class:"nav-item"},Q={class:"d-flex gap-2 gap-md-4 justify-content-between align-items-center mb-4"},H={class:"d-flex gap-2 gap-md-4 align-items-center"},K={class:"d-none d-md-flex gap-4"},W=e("p",{class:"text-danger fs-8"},"*最多可選擇 3 篇文章",-1),Z={class:"d-flex gap-2 gap-md-4"},$=e("i",{class:"bi bi-ui-checks fs-5"},null,-1),ee=[$],te=e("i",{class:"bi bi-ui-checks-grid fs-5"},null,-1),se=[te],ie={key:0,class:"d-md-none d-flex gap-4 mb-4"},ne=e("p",{class:"text-danger fs-8"},"*最多可選擇 3 篇文章",-1),le={key:0,class:"row row-cols-1 row-cols-sm-2 row-cols-lg-5 mb-10 mb-lg-15 ps-0 list-unstyled",style:{"row-gap":"12px"}},re=["for"],oe={key:0,class:"check-box"},de=["value","id","disabled"],ce=["src","alt"],ae={class:"card-body d-flex flex-column p-0 px-2 pt-2"},pe={class:"card-title display-6 text-dark pb-2 mb-auto"},ue={key:0,class:"float-end bg-primary text-white py-1 px-2 ms-1 fs-8"},ge={class:"card-foot d-flex justify-content-evenly border-top border-1 border-primary py-2"},he=["onClick"],me=e("i",{class:"bi bi-pencil-fill text-dark fs-6"},null,-1),be=[me],fe=["onClick"],_e=e("i",{class:"bi bi-trash3-fill text-dark fs-6"},null,-1),Ae=[_e],Pe={key:1,class:"d-flex flex-column gap-3 mb-10 mb-lg-15 ps-0 list-unstyled"},ve=["for"],ke={class:"d-flex align-items-center gap-1 gap-sm-4 position-relative",style:{"min-width":"98px"}},ye={class:"check-box d-md-none"},xe=["value","id","disabled"],Ce=["value","id","disabled"],we=["src","alt"],Se={class:"d-flex align-items-md-center flex-column flex-md-row flex-grow-1 gap-md-15 gap-lg-30"},Le={class:"d-flex gap-1 flex-grow-1"},Ve={class:"card-title display-6 text-dark flex-grow-1"},Ie={key:0,class:"align-self-start bg-primary text-white text-nowrap py-1 px-2 rounded-pill fs-9"},Te={class:"d-flex gap-4 gap-md-8 me-md-10"},Ee=["onClick"],Ue=e("i",{class:"bi bi-pencil-fill text-dark fs-6"},null,-1),Ne=[Ue],De=["onClick"],Be=e("i",{class:"bi bi-trash3-fill text-dark fs-6"},null,-1),je=[Be],Ge={key:2,class:"d-flex justify-content-center align-items-center",style:{height:"360px"}},Me=e("p",{class:"fs-5"},"尚無文章資料",-1),Re=[Me],Fe={key:3,class:"text-center va-pagination"},ze=e("span",{class:"material-icons fs-8 p-1"}," navigate_before ",-1),Oe=e("span",{class:"material-icons fs-8 p-1"}," navigate_next ",-1),Xe={key:4,class:"d-flex justify-content-center align-items-center",style:{"min-height":"360px"}},Ye=e("div",{class:"spinner-border",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),qe=[Ye];function Je(i,n,k,V,t,f){const _=L("VueAwesomePaginate"),y=L("VueLoading");return o(),r("div",F,[z,e("div",O,[m(e("input",{class:"form-control mb-4 rounded-3 border border-primary bg-transparent fs-6",type:"text",placeholder:"請輸入要搜尋的文章","onUpdate:modelValue":n[0]||(n[0]=s=>t.keyword=s)},null,512),[[U,t.keyword,void 0,{trim:!0}]]),X]),e("ul",Y,[e("li",q,[e("a",{class:a(["nav-link px-6 py-4",{active:i.currentTab==="公開文章"}]),href:"#",onClick:n[1]||(n[1]=d(s=>i.changeTab("公開文章"),["prevent"]))}," 公開文章 ",2)]),e("li",J,[e("a",{class:a(["nav-link px-6 py-4",{active:i.currentTab==="草稿文章"}]),href:"#",onClick:n[2]||(n[2]=d(s=>i.changeTab("草稿文章"),["prevent"]))}," 草稿文章 ",2)])]),e("div",Q,[e("div",H,[e("a",{href:"#",class:a(["btn btn-primary",[{disabled:i.loadingStatus.loadingItem},{"d-none":t.isSelectPinnedArticle}]]),onClick:n[3]||(n[3]=d(s=>i.articleActivity("new"),["prevent"]))}," 建立文章 ",2),i.currentTab==="公開文章"?(o(),r(p,{key:0},[t.isSelectPinnedArticle?(o(),r(p,{key:1},[e("a",{href:"#",class:"btn btn-primary",onClick:n[5]||(n[5]=d((...s)=>f.updatePinnedArticle&&f.updatePinnedArticle(...s),["prevent"]))},"儲存置頂文章"),e("a",{href:"#",class:"btn btn-danger",onClick:n[6]||(n[6]=d(s=>(t.selectedPinnedArticle=[...i.pinnedArticles],t.isSelectPinnedArticle=!1),["prevent"]))}," 取消 "),e("div",K,[e("p",null,"已選擇: "+b(t.selectedPinnedArticle.length)+" 篇",1),e("a",{href:"#",class:"text-decoration-underline link-underline-grey9F link-offset-1",onClick:n[7]||(n[7]=d(s=>t.selectedPinnedArticle=[],["prevent"]))}," 清除選擇 "),W])],64)):(o(),r("a",{key:0,href:"#",class:a(["btn btn-primary",{disabled:i.loadingStatus.loadingItem}]),onClick:n[4]||(n[4]=d(s=>t.isSelectPinnedArticle=!0,["prevent"]))}," 置頂文章管理 ",2))],64)):c("",!0)]),e("div",Z,[e("a",{href:"#",class:a(["btn border border-1 border-primary btn-md text-primary p-2 rounded-3",[{"bg-primary":t.isList},{"text-white":t.isList}]]),onClick:n[8]||(n[8]=d(s=>t.isList=!0,["prevent"]))},ee,2),e("a",{href:"#",class:a(["btn border border-1 border-primary btn-md text-primary p-2 rounded-3",[{"bg-primary":!t.isList},{"text-white":!t.isList}]]),onClick:n[9]||(n[9]=d(s=>t.isList=!1,["prevent"]))},se,2)])]),t.isSelectPinnedArticle?(o(),r("div",ie,[e("p",null,"已選擇: "+b(t.selectedPinnedArticle.length)+" 篇",1),e("a",{href:"#",class:"text-decoration-underline link-underline-grey9F link-offset-1",onClick:n[10]||(n[10]=d(s=>t.selectedPinnedArticle=[],["prevent"]))}," 清除選擇 "),ne])):c("",!0),!i.loadingStatus.loadingItem&&i.currentPageArticles.length?(o(),r(p,{key:1},[t.isList?c("",!0):(o(),r("ul",le,[(o(!0),r(p,null,C(i.currentPageArticles,s=>(o(),r("li",{class:"col",key:s.id},[e("label",{class:"card h-100 border border-1 border-primary position-relative",for:s.id},[t.isSelectPinnedArticle?(o(),r("span",oe,[m(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":n[11]||(n[11]=l=>t.selectedPinnedArticle=l),value:s.id,id:s.id,disabled:t.selectedPinnedArticle.length>=3&&!t.selectedPinnedArticle.includes(s.id)},null,8,de),[[v,t.selectedPinnedArticle]])])):c("",!0),e("img",{src:s.image,class:"card-img-top w-100 object-fit-cover",alt:s.title,style:{height:"200px"}},null,8,ce),e("div",ae,[e("h5",pe,[s.isPinned?(o(),r("span",ue,"置頂")):c("",!0),N(b(s.title),1)]),e("div",ge,[e("a",{href:"#",class:a({"disabled-link":i.loadingStatus.loadingDelete||t.isSelectPinnedArticle}),onClick:d(l=>i.articleActivity("edit",s.id),["prevent"])},be,10,he),e("a",{href:"#",class:a({"disabled-link":t.isSelectPinnedArticle}),onClick:d(l=>i.articleActivity("delete",s.id),["prevent"])},Ae,10,fe)])])],8,re)]))),128))])),t.isList?(o(),r("ul",Pe,[(o(!0),r(p,null,C(i.currentPageArticles,s=>(o(),r("li",{key:s.id,class:"bg-white rounded-3"},[e("label",{for:s.id,class:"d-flex gap-3 gap-md-8 px-2 py-4 px-sm-4"},[e("div",ke,[t.isSelectPinnedArticle?(o(),r(p,{key:0},[e("div",ye,[m(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":n[12]||(n[12]=l=>t.selectedPinnedArticle=l),value:s.id,id:s.id,disabled:t.selectedPinnedArticle.length>=3&&!t.selectedPinnedArticle.includes(s.id)},null,8,xe),[[v,t.selectedPinnedArticle]])]),m(e("input",{class:"form-check-input d-none d-md-block",type:"checkbox","onUpdate:modelValue":n[13]||(n[13]=l=>t.selectedPinnedArticle=l),value:s.id,id:s.id,disabled:t.selectedPinnedArticle.length>=3&&!t.selectedPinnedArticle.includes(s.id)},null,8,Ce),[[v,t.selectedPinnedArticle]])],64)):c("",!0),e("img",{src:s.image,class:"rounded object-fit-cover",alt:s.title,style:{height:"98px",width:"98px"}},null,8,we)]),e("div",Se,[e("div",Le,[e("h5",Ve,b(s.title),1),s.isPinned?(o(),r("p",Ie," 置頂 ")):c("",!0)]),e("div",Te,[e("a",{href:"#",class:a({"disabled-link":i.loadingStatus.loadingDelete||t.isSelectPinnedArticle}),onClick:d(l=>i.articleActivity("edit",s.id),["prevent"])},Ne,10,Ee),e("a",{href:"#",class:a(["",{"disabled-link":t.isSelectPinnedArticle}]),onClick:d(l=>i.articleActivity("delete",s.id),["prevent"])},je,10,De)])])],8,ve)]))),128))])):c("",!0)],64)):i.loadingStatus.loadingItem?c("",!0):(o(),r("div",Ge,Re)),!i.loadingStatus.loadingItem&&i.searchArticles.length?(o(),r("div",Fe,[w(_,{"total-items":i.searchArticles.length,"items-per-page":10,"max-pages-shown":3,modelValue:t.articlesCurrentPage,"onUpdate:modelValue":n[14]||(n[14]=s=>t.articlesCurrentPage=s),onClick:i.getCurrentPageArticles,"pagination-container-class":"cus-pagination","paginate-buttons-class":"page-link","number-buttons-class":"fs-8","active-page-class":"active",backButtonClass:t.articlesCurrentPage===1?"disabled":"back-button",nextButtonClass:t.articlesCurrentPage===Math.ceil(i.searchArticles.length/10)?"disabled":"next-button"},{"prev-button":S(()=>[ze]),"next-button":S(()=>[Oe]),_:1},8,["total-items","modelValue","onClick","backButtonClass","nextButtonClass"])])):c("",!0),i.loadingStatus.loadingItem?(o(),r("div",Xe,qe)):c("",!0),w(y,{active:t.isLoading},null,8,["active"])])}const et=I(R,[["render",Je]]);export{et as default};
