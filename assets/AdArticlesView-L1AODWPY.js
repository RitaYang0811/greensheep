import{a as C}from"./adArticlesStore-D9su0vbk.js";import{_ as U,m as j,a as G,c as r,e,g as b,v as I,x as p,f as d,F as u,t as f,i as a,r as w,b as S,w as L,j as V,o,P,d as D}from"./index-BUi18zZB.js";import{a as F,t as N}from"./sweetalertToast-PjxFF8gT.js";import"./dateToUnix-DUte0kxx.js";import"./scrollToTop-BdmBcgwt.js";import"./sweetalert2.all-y8mgFPfW.js";const B={data(){return{isSelectPinnedArticle:!1,selectedPinnedArticle:[],articlesCurrentPage:1,keyword:"",isList:!1,isLoading:!1}},methods:{...j(C,["getArticles","articleActivity","changeTab","getCurrentPageArticles","updateCurrentPage"]),async updatePinnedArticle(){try{this.isSelectPinnedArticle=!1,this.isLoading=!0;const n="https://ec-course-api.hexschool.io/v2/api/greensheep/admin/article",k=this.pinnedArticles.filter(l=>!this.selectedPinnedArticle.includes(l)).map(l=>this.$http.get(`${n}/${l}`)),t=(await Promise.all(k)).map(l=>{var g,h,m;const _=(h=(g=l==null?void 0:l.data)==null?void 0:g.article)==null?void 0:h.id,y={...(m=l==null?void 0:l.data)==null?void 0:m.article,isPinned:!1};return this.$http.put(`${n}/${_}`,{data:y})}),v=await Promise.all(t),A=this.selectedPinnedArticle.filter(l=>!this.pinnedArticles.includes(l)).map(l=>this.$http.get(`${n}/${l}`)),c=(await Promise.all(A)).map(l=>{var g,h,m;const _=(h=(g=l==null?void 0:l.data)==null?void 0:g.article)==null?void 0:h.id,y={...(m=l==null?void 0:l.data)==null?void 0:m.article,isPinned:!0};return this.$http.put(`${n}/${_}`,{data:y})}),He=await Promise.all(c);F("已更新置頂文章"),this.getArticles()}catch(n){N(n.response.data.message)}finally{this.isLoading=!1}}},watch:{pinnedArticles(){this.selectedPinnedArticle=[...this.pinnedArticles],console.log(123),console.log(this.selectedPinnedArticle)},keyword(){this.getCurrentPageArticles(1,this.keyword)},articlesCurrentPage(){this.updateCurrentPage(this.articlesCurrentPage)},currentPage(){this.articlesCurrentPage=this.currentPage}},computed:{...G(C,["loadingStatus","searchArticles","currentTab","pinnedArticles","currentPage","currentPageArticles"])},mounted(){this.getArticles()}},M={class:"ad-article"},E=e("h1",{class:"fs-3 mb-4 fw-bold"},"文章管理",-1),z={class:"position-relative"},q=e("i",{class:"bi bi-search float-end fs-5 text-primary pe-2 mt-2 position-absolute top-0 end-0"},null,-1),H={class:"nav border-bottom border-primary mb-4"},J={class:"nav-item"},K={class:"nav-item"},O={class:"d-flex gap-2 gap-md-4 justify-content-between align-items-center mb-4"},Q={class:"d-flex gap-2 gap-md-4 align-items-center"},R={class:"d-none d-md-flex gap-4"},W=e("p",{class:"text-danger fs-8"},"*最多可選擇 3 篇文章",-1),X={class:"d-flex gap-2 gap-md-4"},Y=e("i",{class:"bi bi-ui-checks fs-5"},null,-1),Z=[Y],$=e("i",{class:"bi bi-ui-checks-grid fs-5"},null,-1),ee=[$],te={key:0,class:"d-md-none d-flex gap-4 mb-4"},se=e("p",{class:"text-danger fs-8"},"*最多可選擇 3 篇文章",-1),ie={key:0,class:"row row-cols-1 row-cols-sm-2 row-cols-lg-5 mb-10 mb-lg-15 ps-0 list-unstyled",style:{"row-gap":"12px"}},ne=["for"],le={key:0,class:"check-box"},re=["value","id","disabled"],oe=["src","alt"],de={class:"card-body d-flex flex-column p-0 px-2 pt-2"},ce={class:"card-title display-6 text-dark pb-2 mb-auto"},ae={key:0,class:"float-end bg-primary text-white py-1 px-2 ms-1 fs-8"},pe={class:"card-foot d-flex justify-content-evenly border-top border-1 border-primary py-2"},ue=["onClick"],ge=e("i",{class:"bi bi-pencil-fill text-dark fs-6"},null,-1),he=[ge],me=["onClick"],be=e("i",{class:"bi bi-trash3-fill text-dark fs-6"},null,-1),fe=[be],ve={key:1,class:"d-flex flex-column gap-3 mb-10 mb-lg-15 ps-0 list-unstyled"},Ae=["for"],_e={class:"d-flex align-items-center gap-1 gap-sm-4 position-relative",style:{"min-width":"98px"}},ye={class:"check-box d-md-none"},Pe=["value","id","disabled"],ke=["value","id","disabled"],xe=["src","alt"],Ce={class:"d-flex align-items-md-center flex-column flex-md-row flex-grow-1 gap-md-15 gap-lg-30"},we={class:"d-flex gap-1 flex-grow-1"},Se={class:"card-title display-6 text-dark flex-grow-1"},Le={key:0,class:"align-self-start bg-primary text-white text-nowrap py-1 px-2 rounded-pill fs-9"},Ve={class:"d-flex gap-4 gap-md-8 me-md-10"},Te=["onClick"],Ue=e("i",{class:"bi bi-pencil-fill text-dark fs-6"},null,-1),je=[Ue],Ge=["onClick"],Ie=e("i",{class:"bi bi-trash3-fill text-dark fs-6"},null,-1),De=[Ie],Fe={key:2,class:"text-center va-pagination"},Ne=e("span",{class:"material-icons fs-8 p-1"}," navigate_before ",-1),Be=e("span",{class:"material-icons fs-8 p-1"}," navigate_next ",-1),Me={key:3,class:"d-flex justify-content-center align-items-center",style:{"min-height":"360px"}},Ee=e("div",{class:"spinner-border",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),ze=[Ee];function qe(n,i,k,T,t,v){const x=V("vue-awesome-paginate"),A=V("VueLoading");return o(),r("div",M,[E,e("div",z,[b(e("input",{class:"form-control mb-4 rounded-3 border border-primary bg-transparent fs-6",type:"text",placeholder:"請輸入要搜尋的文章","onUpdate:modelValue":i[0]||(i[0]=s=>t.keyword=s)},null,512),[[I,t.keyword,void 0,{trim:!0}]]),q]),e("ul",H,[e("li",J,[e("a",{class:p(["nav-link px-6 py-4",{active:n.currentTab==="公開文章"}]),href:"#",onClick:i[1]||(i[1]=d(s=>n.changeTab("公開文章"),["prevent"]))}," 公開文章 ",2)]),e("li",K,[e("a",{class:p(["nav-link px-6 py-4",{active:n.currentTab==="草稿文章"}]),href:"#",onClick:i[2]||(i[2]=d(s=>n.changeTab("草稿文章"),["prevent"]))}," 草稿文章 ",2)])]),e("div",O,[e("div",Q,[e("a",{href:"#",class:p(["btn btn-primary",[{disabled:n.loadingStatus.loadingItem},{"d-none":t.isSelectPinnedArticle}]]),onClick:i[3]||(i[3]=d(s=>n.articleActivity("new"),["prevent"]))}," 建立文章 ",2),n.currentTab==="公開文章"?(o(),r(u,{key:0},[t.isSelectPinnedArticle?(o(),r(u,{key:1},[e("a",{href:"#",class:"btn btn-primary",onClick:i[5]||(i[5]=d((...s)=>v.updatePinnedArticle&&v.updatePinnedArticle(...s),["prevent"]))},"儲存置頂文章"),e("a",{href:"#",class:"btn btn-danger",onClick:i[6]||(i[6]=d(s=>(t.selectedPinnedArticle=[...n.pinnedArticles],t.isSelectPinnedArticle=!1),["prevent"]))}," 取消 "),e("div",R,[e("p",null,"已選擇: "+f(t.selectedPinnedArticle.length)+" 篇",1),e("a",{href:"#",class:"text-decoration-underline link-underline-grey9F link-offset-1",onClick:i[7]||(i[7]=d(s=>t.selectedPinnedArticle=[],["prevent"]))}," 清除選擇 "),W])],64)):(o(),r("a",{key:0,href:"#",class:p(["btn btn-primary",{disabled:n.loadingStatus.loadingItem}]),onClick:i[4]||(i[4]=d(s=>t.isSelectPinnedArticle=!0,["prevent"]))}," 置頂文章管理 ",2))],64)):a("",!0)]),e("div",X,[e("a",{href:"#",class:p(["btn border border-1 border-primary btn-md text-primary p-2 rounded-3",[{"bg-primary":t.isList},{"text-white":t.isList}]]),onClick:i[8]||(i[8]=d(s=>t.isList=!0,["prevent"]))},Z,2),e("a",{href:"#",class:p(["btn border border-1 border-primary btn-md text-primary p-2 rounded-3",[{"bg-primary":!t.isList},{"text-white":!t.isList}]]),onClick:i[9]||(i[9]=d(s=>t.isList=!1,["prevent"]))},ee,2)])]),t.isSelectPinnedArticle?(o(),r("div",te,[e("p",null,"已選擇: "+f(t.selectedPinnedArticle.length)+" 篇",1),e("a",{href:"#",class:"text-decoration-underline link-underline-grey9F link-offset-1",onClick:i[10]||(i[10]=d(s=>t.selectedPinnedArticle=[],["prevent"]))}," 清除選擇 "),se])):a("",!0),n.loadingStatus.loadingItem?a("",!0):(o(),r(u,{key:1},[t.isList?a("",!0):(o(),r("ul",ie,[(o(!0),r(u,null,w(n.currentPageArticles,s=>(o(),r("li",{class:"col",key:s.id},[e("label",{class:"card h-100 border border-1 border-primary position-relative",for:s.id},[t.isSelectPinnedArticle?(o(),r("span",le,[b(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":i[11]||(i[11]=c=>t.selectedPinnedArticle=c),value:s.id,id:s.id,disabled:t.selectedPinnedArticle.length>=3&&!t.selectedPinnedArticle.includes(s.id)},null,8,re),[[P,t.selectedPinnedArticle]])])):a("",!0),e("img",{src:s.image,class:"card-img-top w-100 object-fit-cover",alt:s.title,style:{height:"200px"}},null,8,oe),e("div",de,[e("h5",ce,[s.isPinned?(o(),r("span",ae,"置頂")):a("",!0),D(f(s.title),1)]),e("div",pe,[e("a",{href:"#",class:p({"disabled-link":n.loadingStatus.loadingDelete||t.isSelectPinnedArticle}),onClick:d(c=>n.articleActivity("edit",s.id),["prevent"])},he,10,ue),e("a",{href:"#",class:p({"disabled-link":t.isSelectPinnedArticle}),onClick:d(c=>n.articleActivity("delete",s.id),["prevent"])},fe,10,me)])])],8,ne)]))),128))])),t.isList?(o(),r("ul",ve,[(o(!0),r(u,null,w(n.currentPageArticles,s=>(o(),r("li",{key:s.id,class:"bg-white rounded-3"},[e("label",{for:s.id,class:"d-flex gap-3 gap-md-8 px-2 py-4 px-sm-4"},[e("div",_e,[t.isSelectPinnedArticle?(o(),r(u,{key:0},[e("div",ye,[b(e("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":i[12]||(i[12]=c=>t.selectedPinnedArticle=c),value:s.id,id:s.id,disabled:t.selectedPinnedArticle.length>=3&&!t.selectedPinnedArticle.includes(s.id)},null,8,Pe),[[P,t.selectedPinnedArticle]])]),b(e("input",{class:"form-check-input d-none d-md-block",type:"checkbox","onUpdate:modelValue":i[13]||(i[13]=c=>t.selectedPinnedArticle=c),value:s.id,id:s.id,disabled:t.selectedPinnedArticle.length>=3&&!t.selectedPinnedArticle.includes(s.id)},null,8,ke),[[P,t.selectedPinnedArticle]])],64)):a("",!0),e("img",{src:s.image,class:"rounded object-fit-cover",alt:s.title,style:{height:"98px",width:"98px"}},null,8,xe)]),e("div",Ce,[e("div",we,[e("h5",Se,f(s.title),1),s.isPinned?(o(),r("p",Le," 置頂 ")):a("",!0)]),e("div",Ve,[e("a",{href:"#",class:p({"disabled-link":n.loadingStatus.loadingDelete||t.isSelectPinnedArticle}),onClick:d(c=>n.articleActivity("edit",s.id),["prevent"])},je,10,Te),e("a",{href:"#",class:p(["",{"disabled-link":t.isSelectPinnedArticle}]),onClick:d(c=>n.articleActivity("delete",s.id),["prevent"])},De,10,Ge)])])],8,Ae)]))),128))])):a("",!0)],64)),!n.loadingStatus.loadingItem&&n.searchArticles.length?(o(),r("div",Fe,[S(x,{"total-items":n.searchArticles.length,"items-per-page":10,"max-pages-shown":3,modelValue:t.articlesCurrentPage,"onUpdate:modelValue":i[14]||(i[14]=s=>t.articlesCurrentPage=s),onClick:n.getCurrentPageArticles,"pagination-container-class":"cus-pagination","paginate-buttons-class":"page-link","number-buttons-class":"fs-8","active-page-class":"active"},{"prev-button":L(()=>[Ne]),"next-button":L(()=>[Be]),_:1},8,["total-items","modelValue","onClick"])])):a("",!0),n.loadingStatus.loadingItem?(o(),r("div",Me,ze)):a("",!0),S(A,{active:t.isLoading},null,8,["active"])])}const Xe=U(B,[["render",qe]]);export{Xe as default};