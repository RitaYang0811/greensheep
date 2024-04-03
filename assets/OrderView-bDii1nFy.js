import{_ as O,m as I,a as M,c as h,b as e,F as V,r as P,e as u,t as _,d as o,w as y,l as N,j as b,o as c,f,g as v,v as S,n as m,S as E,i as g,x as q}from"./index-PEAonJb-.js";import{c as A}from"./cartStore-ERrrmbsx.js";import{M as L}from"./modal-0K1bwlQv.js";import{S as T}from"./sweetalert2.all-YVr8EH9K.js";import"./selector-engine-aqnEt30b.js";var j={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",VITE_LINE_CLIENT_ID:"x9iTcS6m9Fdlz8XFfAbkqs",VITE_LINE_CLIENT_SECRET:"iGiOLRLmU2aNTDuObVQlcP5XzPYSbUzJ9gvUl4YvPzx",BASE_URL:"/greensheep/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:R,VITE_APP_API_NAME:z}=j,B={data(){return{agree:!0,recipientAsOrderData:!1,recipient:{name:"",tel:"",address:""},orderData:{user:{name:"",email:"",tel:"",address:""},message:"",birthday:""},orderDeliverData:{},policy:{DOCState:!0,Modal:"",Check:!1}}},methods:{...I(A,["getCarts","updateCart","deleteCart"]),showAddress(){if(this.orderDeliverData.deliver=="中華郵政"||this.orderDeliverData.deliver=="黑貓宅急便"||this.orderDeliverData.deliver=="宅配通"||this.orderDeliverData.deliver=="UPS"||this.orderDeliverData.deliver=="DHL")return!0},showStore(){if(this.orderDeliverData.deliver=="7-11取貨"||this.orderDeliverData.deliver=="全家取貨"||this.orderDeliverData.deliver=="OK取貨"||this.orderDeliverData.deliver=="萊爾富取貨")return!0},showCreditCard(){return this.orderDeliverData.payWay!="信用卡"},sendOrder(){if(this.carts.length==0){T.fire({title:"購物車是空的",confirmButtonColor:"#566B5A",icon:"warning"});return}this.showStore()&&(this.recipient.address=`${this.orderDeliverData.deliver} XX店`),this.orderData.user.name=this.recipient.name,this.orderData.user.tel=this.recipient.tel,this.orderData.user.address=this.recipient.address;const r=`${R}/api/${z}/order`;this.$http.post(r,{data:this.orderData}).then(()=>{this.getCarts(),this.$router.push("/success")}).catch(t=>{console.log(t)})},checkLogin(){let r=localStorage.getItem("userInfo");const t="https://greensheep-json-server.onrender.com/users";if(r){const D=JSON.parse(r).id;this.$http.get(t).then(p=>{p.data.forEach(s=>{s.id==D&&(this.orderData.user.name=s.nickName,this.orderData.user.email=s.email,this.orderData.user.tel=s.phone,this.orderData.user.address=s.location)})}).catch(p=>{console.log(p)})}},openModal(r){r==="條款"?this.policy.DOCState=!0:this.policy.DOCState=!1,this.policy.Modal.show()}},computed:{...M(A,["carts","deliverData","total"])},watch:{recipientAsOrderData(r){r&&(this.recipient.name=this.orderData.user.name,this.recipient.tel=this.orderData.user.tel,this.recipient.address=this.orderData.user.address)}},mounted(){this.policy.Modal=new L(this.$refs.policyModal),this.orderDeliverData={...this.deliverData},this.checkLogin()}},G={class:"container py-20 pt-40"},F=N('<div><div class="p-10 d-flex justify-content-center" style="z-index:10;"><div class=""><div class="btn btn-outline-primary border-2 rounded-circle bg-primary pe-none"><i class="bi bi-check-lg fs-2 text-light"></i></div><p class="mt-3 fs-6 text-primary">確認購買明細</p></div><div class="mt-5 bg-primary border border-greyD4" style="height:8px;width:35%;"></div><div class=""><div class="btn btn-outline-primary border-2 rounded-circle bg-primary pe-none"><i class="bi bi-check-lg fs-2 text-light"></i></div><p class="mt-3 fs-6 text-primary">付款資料填寫</p></div><div class="mt-5 bg-light border border-greyD4" style="height:8px;width:35%;"></div><div class="opacity-50"><div class="btn btn-outline-primary border-2 rounded-circle pe-none"><i class="bi bi-check-lg fs-2 text-primary"></i></div><p class="mt-3 fs-6 text-primary">訂單完成</p></div></div></div>',1),X={class:""},Y={class:"table align-middle border-primary"},W=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"text-primary fw-medium"},"商品資訊"),e("th",{scope:"col",class:"text-primary fw-medium"},"數量"),e("th",{scope:"col",class:"text-primary fw-medium"},"價格"),e("th",{scope:"col",class:"text-primary fw-medium"})])],-1),H={scope:"row",class:"py-4"},J={class:"card border-0",style:{"max-width":"540px"}},K={class:"row g-0 align-items-center"},Q={class:"col-md-4"},Z={class:"ratio ratio-1x1"},$=["src"],ee={class:"col-md-8"},se={class:"card-body"},te={class:"fs-6 card-title text-primary fw-medium"},le={class:"text-start fw-normal"},ie={class:"py-4"},oe={class:"d-flex justify-content-center"},re=["onClick"],ae=e("i",{class:"bi bi-plus-circle fs-3"},null,-1),de=[ae],ne=["onUpdate:modelValue"],ce=["onClick","disabled"],me=e("i",{class:"bi bi-dash-circle fs-3"},null,-1),he=[me],_e={class:"py-4 text-primary"},ue={class:"text-center"},pe={class:"text-center fw-medium"},be={class:"py-4"},fe=["onClick"],ve={class:"fs-5 font-notosans mt-6"},ye=e("br",null,null,-1),ge={class:"bg-light py-15"},De={class:"container text-start"},xe={class:"row justify-content-md-between flex-md-row flex-column mb-8"},we={class:"col-12 col-md-6"},Ce=e("h3",{class:"fs-4 fw-medium text-start mb-4"},"顧客資料",-1),ke={class:"bg-greyD4 px-8 py-5"},Ve=e("h4",{class:"fs-6 my-4"},"已經是會員？登入後更方便管理訂單",-1),Se={class:"d-flex justify-content-between my-5"},Ee={action:"",class:"text-dark"},Ae={class:"mb-4"},Ue=e("label",{for:"name",class:"fs-6 mb-1"},"顧客名稱",-1),Oe=e("br",null,null,-1),Ie=e("label",{for:"email",class:"fs-6 mb-1"},"電子信箱",-1),Me=e("br",null,null,-1),Pe={class:"mb-4"},Ne=e("p",{class:"mb-3 text-end"},"訂單將以此Email通知",-1),qe=e("label",{for:"phone",class:"fs-6 mb-1"},"電話號碼",-1),Le=e("br",null,null,-1),Te={class:"mb-4"},je={class:"col-12 col-md-6 mt-md-0 mt-5 d-flex flex-column"},Re=e("h3",{class:"fs-4 fw-medium text-start mb-4"},"送貨資料",-1),ze={class:"bg-greyD4 px-8 py-5 text-dark flex-grow-1"},Be={class:"fs-5 my-4 font-notosans"},Ge=e("label",{for:"data",class:"form-check-label my-4 fs-6 ms-2"},"收件人資料與顧客資料相同",-1),Fe={class:"my-3"},Xe={class:"mb-4"},Ye=e("label",{for:"recipient",class:"fs-6 mb-1"},"收件人名稱",-1),We=e("br",null,null,-1),He=e("p",{class:"mb-3 text-end"},"請填入收件人真實姓名，以確保順利收件",-1),Je=e("label",{for:"recipient-phone",class:"fs-6 mb-1"},"收件人電話號碼",-1),Ke=e("br",null,null,-1),Qe={class:"mb-4"},Ze={key:0,for:"recipient-address",class:"fs-6 mb-1"},$e=e("br",null,null,-1),es={class:"mb-4"},ss={key:0,class:""},ts=e("h4",{class:"fs-5 fw-medium py-4 mt-2"},"選擇門市",-1),ls=e("button",{type:"button",class:"btn btn-primary fs-5 p-5 w-100 mb-3"},"搜尋門市",-1),is=[ts,ls],os={class:"d-flex justify-content-md-between flex-md-row flex-column text-primary"},rs={class:"me-5 mt-md-0 mt-5"},as=e("h3",{class:"fs-4 fw-medium text-start mb-4"},"付款資料",-1),ds={class:"bg-greyD4 px-8 py-5"},ns={class:"fs-6 my-4"},cs={class:""},ms={action:"",class:""},hs={class:"form-floating"},_s=e("label",{for:"Card-number"},"卡號",-1),us={class:"form-floating"},ps=e("label",{for:"Card-name"},"持卡人姓名",-1),bs={class:"form-floating"},fs=e("label",{for:"Card-date"},"有效期限(MM/YY)",-1),vs={class:"form-floating"},ys=e("label",{for:"Card-pin"},"安全碼",-1),gs=e("p",{class:"px-2"}," 本金流服務由 SHOPLINE Payments 提供,通過 PCI-DSS 國際信用卡組織最高等級認證,提供安全的交易服務,支援國內外信用卡刷卡。 ",-1),Ds={class:"shopRWD mt-md-0 mt-5"},xs=e("h3",{class:"fs-4 fw-medium text-start mb-4"},"訂單備註",-1),ws={class:"bg-greyD4 px-8 py-5"},Cs=e("h4",{class:"fs-5 my-4"},"有什麼要對賣家說的話：",-1),ks={action:"",class:"form-floating"},Vs={class:"container py-8 text-start text-primary"},Ss={class:"row"},Es={class:"col-lg-6 col-12"},As=e("span",{class:"material-icons fs-5 me-2"}," arrow_back_ios_new ",-1),Us=e("span",null,"返回購物車",-1),Os={class:"col-lg-6 col-12 p-8"},Is=e("div",{class:"d-flex mb-4"},[e("input",{type:"checkbox",id:"subscribe",style:{width:"1em",height:"1em"},class:"form-check-input",checked:""}),e("label",{for:"subscribe",class:"form-check-label fs-6 ms-2"},"訂閱最新消息")],-1),Ms={class:"d-flex mb-8"},Ps={for:"private",class:"form-check-label fs-6 ms-2"},Ns=e("br",null,null,-1),qs=e("div",{class:"invalid-feedback"},"Example invalid feedback text",-1),Ls=["disabled"],Ts={class:"modal fade",id:"policyModal",tabindex:"-1","aria-labelledby":"policyModalLabel","aria-hidden":"true",ref:"policyModal"},js={class:"modal-dialog"},Rs={class:"modal-content"},zs={class:"modal-header"},Bs={key:0,class:"modal-title fs-5"},Gs={key:1,class:"modal-title fs-5"},Fs=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Xs={class:"modal-body text-start"},Ys={key:0,class:"p-4"},Ws=e("p",null," 歡迎光臨GreenSheep！我們是一個專注於提供精美飾品的電子商務平台。在使用本網站前，請詳細閱讀以下條款，使用本網站即表示您同意遵守以下規定。 ",-1),Hs=e("br",null,null,-1),Js=e("ul",null,[e("li",null," 使用條款：您同意僅以合法目的使用本網站，不得從事任何違法或損害他人權益的活動。 "),e("li",null," 責任限制：GreenSheep對於因使用本網站而引起的任何直接、間接、附帶或特別的損失不承擔責任。 "),e("li",null," 商品信息：我們努力確保在網站上提供的所有商品信息準確無誤，但不能保證所有信息都是完整和最新的。 "),e("li",null,"使用者責任：您應對您的帳戶和密碼保密，並對在您的帳戶下的所有活動負責。"),e("li",null," 知識產權：本網站上的所有內容，包括但不限於文字、圖像、標誌，均受版權和商標法保護。 "),e("li",null,"其他條款：本條款未涉及的其他問題，將遵循GreenSheep的一般業務實踐和標準。")],-1),Ks={key:1,class:"p-4"},Qs=e("p",null," 歡迎您使用GreenSheep網站服務。我們非常重視您的隱私保護，並承諾保護您提供的個人信息。請您在使用本網站前仔細閱讀以下隱私條款內容： ",-1),Zs=e("br",null,null,-1),$s=e("ul",null,[e("li",null," 收集信息：當您註冊帳戶、下訂單或與我們聯繫時，我們可能收集您的姓名、聯繫方式、郵寄地址等個人信息。 "),e("li",null," 信息用途：我們收集的信息將用於處理訂單、提供客戶服務、改善網站體驗以及向您發送促銷活動和產品信息。 "),e("li",null," 信息保護：我們採取合理的安全措施來保護您的個人信息，防止未經授權的訪問、使用或泄露。 "),e("li",null," 信息分享：我們不會未經您的同意將您的個人信息分享給第三方，除非為了履行訂單或遵守法律法規的要求。 "),e("li",null," Cookie使用：我們可能使用Cookie技術收集和存儲有關您訪問本網站的信息，以改善您的網站體驗。 "),e("li",null,"隱私政策更新：我們保留隨時更新隱私條款的權利，更新後的條款將在本網站上發布。")],-1),et=e("div",{class:"modal-footer"},[e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉")],-1);function st(r,t,D,p,s,a){var w,C,k;const x=b("router-link"),d=b("v-field"),n=b("error-message"),U=b("VForm");return c(),h(V,null,[e("div",G,[F,e("div",X,[e("table",Y,[W,e("tbody",null,[(c(!0),h(V,null,P(r.carts,l=>(c(),h("tr",{key:l.id},[e("th",H,[e("div",J,[e("div",K,[e("div",Q,[e("div",Z,[e("img",{src:l.product.imageUrl,class:"img-fluid object-fit-cover",alt:"product-image"},null,8,$)])]),e("div",ee,[e("div",se,[e("h5",te,_(l.product.title),1),e("small",le,_(l.product.category),1)])])])])]),e("td",ie,[e("div",oe,[e("button",{type:"button",class:"btn btn-link text-primary",onClick:[f(i=>l.qty++,["prevent"]),i=>r.updateCart(l)]},de,8,re),v(e("input",{type:"number",class:"p-2 w-25",min:"1","onUpdate:modelValue":i=>l.qty=i,disabled:""},null,8,ne),[[S,l.qty]]),e("button",{type:"button",class:"btn btn-link text-primary",onClick:[f(i=>l.qty--,["prevent"]),i=>r.updateCart(l)],disabled:l.qty<=1},he,8,ce)])]),e("td",_e,[e("small",ue,"單價：NT$ "+_(l.product.price),1),e("p",pe,"總價：NT$ "+_(parseInt(l.total)),1)]),e("td",be,[e("button",{type:"button",class:"btn btn-primary",onClick:i=>r.deleteCart(l.id)},"刪除",8,fe)])]))),128))])]),e("h2",ve,[u(" 合計：NT$"+_((w=r.carts[0])!=null&&w.coupon?r.total-((k=(C=r.carts[0])==null?void 0:C.coupon)==null?void 0:k.discount_price):r.total),1),ye,u(" （共"+_(r.carts.length)+"件） ",1)])])]),o(U,{onSubmit:t[11]||(t[11]=l=>a.sendOrder())},{default:y(({errors:l})=>[e("div",ge,[e("div",De,[e("div",xe,[e("div",we,[Ce,e("div",ke,[Ve,e("div",Se,[o(x,{to:"/memberLogin",class:"btn btn-grey66 fs-6 p-5 my-auto w-100"},{default:y(()=>[u("會員登入")]),_:1})]),e("form",Ee,[e("div",Ae,[Ue,Oe,o(d,{id:"name",name:"姓名",type:"text",class:m(["form-control p-2 w-100 mb-1 border-0",{"is-invalid":l.姓名}]),placeholder:"請輸入 姓名",rules:"required",modelValue:s.orderData.user.name,"onUpdate:modelValue":t[0]||(t[0]=i=>s.orderData.user.name=i)},null,8,["class","modelValue"]),o(n,{name:"姓名",class:"invalid-feedback"})]),Ie,Me,e("div",Pe,[o(d,{id:"email",name:"Email",type:"email",class:m(["form-control p-2 w-100 mb-1 border-0",{"is-invalid":l.Email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:s.orderData.user.email,"onUpdate:modelValue":t[1]||(t[1]=i=>s.orderData.user.email=i)},null,8,["class","modelValue"]),o(n,{name:"Email",class:"invalid-feedback"}),Ne]),qe,Le,e("div",Te,[o(d,{id:"phone",name:"電話",type:"tel",class:m(["form-control p-2 w-100 mb-1 border-0",{"is-invalid":l.電話}]),placeholder:"請輸入電話",rules:"required|numeric|min:7",modelValue:s.orderData.user.tel,"onUpdate:modelValue":t[2]||(t[2]=i=>s.orderData.user.tel=i)},null,8,["class","modelValue"]),o(n,{name:"電話",class:"invalid-feedback"})])])])]),e("div",je,[Re,e("div",ze,[e("h5",Be," 已選擇的送貨方式："+_(s.orderDeliverData.deliver),1),v(e("input",{type:"checkbox",id:"data",class:"form-check-input my-4","onUpdate:modelValue":t[3]||(t[3]=i=>s.recipientAsOrderData=i)},null,512),[[E,s.recipientAsOrderData]]),Ge,e("form",Fe,[e("div",Xe,[Ye,We,o(d,{id:"recipient",name:"收件人姓名",type:"text",class:m(["form-control p-2 w-100 mb-1 border-0",{"is-invalid":l.收件人姓名}]),placeholder:"請輸入收件人姓名",rules:"required",modelValue:s.recipient.name,"onUpdate:modelValue":t[4]||(t[4]=i=>s.recipient.name=i),disabled:s.recipientAsOrderData},null,8,["class","modelValue","disabled"]),o(n,{name:"收件人姓名",class:"invalid-feedback"}),He]),Je,Ke,e("div",Qe,[o(d,{id:"recipient-phone",name:"收件人電話",type:"tel",class:m(["form-control p-2 w-100 mb-1 border-0",{"is-invalid":l.收件人電話}]),placeholder:"請輸入收件人電話",rules:"required|numeric|min:7",modelValue:s.recipient.tel,"onUpdate:modelValue":t[5]||(t[5]=i=>s.recipient.tel=i),disabled:s.recipientAsOrderData},null,8,["class","modelValue","disabled"]),o(n,{name:"收件人電話",class:"invalid-feedback"})]),a.showAddress()?(c(),h("label",Ze,"收件人地址")):g("",!0),$e,e("div",es,[a.showAddress()?(c(),q(d,{key:0,id:"recipient-address",name:"收件人地址",type:"text",class:m(["form-control p-2 w-100 mb-1 border-0",{"is-invalid":l.收件人地址}]),placeholder:"請輸入收件人地址",rules:"required",modelValue:s.recipient.address,"onUpdate:modelValue":t[6]||(t[6]=i=>s.recipient.address=i)},null,8,["class","modelValue"])):g("",!0),o(n,{name:"收件人地址",class:"invalid-feedback"})])]),a.showStore()?(c(),h("div",ss,is)):g("",!0)])])]),e("div",os,[e("div",rs,[as,e("div",ds,[e("h4",ns,"已選擇付款方式："+_(s.orderDeliverData.payWay),1),e("div",cs,[e("form",ms,[e("div",hs,[o(d,{id:"Card-number",name:"卡號",type:"tel",class:m(["form-control mb-2",{"is-invalid":l.卡號}]),placeholder:"請輸入卡號",rules:a.showCreditCard()?"":"required|numeric|digits:16",disabled:a.showCreditCard()},null,8,["class","rules","disabled"]),o(n,{name:"卡號",class:"invalid-feedback mb-2"}),_s]),e("div",us,[o(d,{id:"Card-name",name:"持卡人姓名",type:"text",class:m(["form-control mb-2",{"is-invalid":l.持卡人姓名}]),placeholder:"請輸入持卡人姓名",rules:a.showCreditCard()?"":"required",disabled:a.showCreditCard()},null,8,["class","rules","disabled"]),o(n,{name:"持卡人姓名",class:"invalid-feedback mb-2"}),ps]),e("div",bs,[o(d,{id:"Card-date",name:"有效期限",type:"text",class:m(["form-control mb-2",{"is-invalid":l.有效期限}]),placeholder:"請輸入有效期限",rules:a.showCreditCard()?"":"required|numeric|digits:4",disabled:a.showCreditCard()},null,8,["class","rules","disabled"]),o(n,{name:"有效期限",class:"invalid-feedback mb-2"}),fs]),e("div",vs,[o(d,{id:"Card-pin",name:"安全碼",type:"text",class:m(["form-control mb-2",{"is-invalid":l.安全碼}]),placeholder:"請輸入安全碼",rules:a.showCreditCard()?"":"required|numeric|digits:3",disabled:a.showCreditCard()},null,8,["class","rules","disabled"]),o(n,{name:"安全碼",class:"invalid-feedback mb-2"}),ys])]),gs])])]),e("div",Ds,[xs,e("div",ws,[Cs,e("form",ks,[v(e("textarea",{name:"",id:"",rows:"15",class:"mb-4 w-100 no-resize border-0","onUpdate:modelValue":t[7]||(t[7]=i=>s.orderData.message=i)},null,512),[[S,s.orderData.message]])])])])])])]),e("div",Vs,[e("div",Ss,[e("div",Es,[o(x,{to:"/cart",class:"d-flex align-items-center p-8 fs-5 fw-medium text-primary"},{default:y(()=>[As,Us]),_:1})]),e("div",Os,[Is,e("div",Ms,[v(e("input",{type:"checkbox",id:"private",style:{width:"1em",height:"1em"},class:"form-check-input","onUpdate:modelValue":t[8]||(t[8]=i=>s.agree=i)},null,512),[[E,s.agree]]),e("label",Ps,[u("本人同意網站 "),e("a",{href:"#",class:"text-decoration-underline",onClick:t[9]||(t[9]=f(i=>a.openModal("條款"),["prevent"]))},"網站服務條款"),u(" 及 "),e("a",{href:"#",class:"text-decoration-underline",onClick:t[10]||(t[10]=f(i=>a.openModal("政策"),["prevent"]))},"隱私權政策")]),Ns,qs]),e("button",{type:"submit",class:"btn btn-primary p-4 fs-4 w-100",disabled:!s.agree},"提交訂單",8,Ls)])])])]),_:1}),e("div",Ts,[e("div",js,[e("div",Rs,[e("div",zs,[s.policy.DOCState?(c(),h("h1",Bs,"網站服務條款")):(c(),h("h1",Gs,"隱私權政策")),Fs]),e("div",Xs,[s.policy.DOCState?(c(),h("div",Ys,[Ws,Hs,Js,u(" 感謝您選擇GreenSheep作為您購買飾品的平台，我們將竭盡所能為您提供最佳的購物體驗！ ")])):(c(),h("div",Ks,[Qs,Zs,$s,u(" 使用GreenSheep即表示您同意本隱私條款的條件和規定。如果您對此有任何疑問或需要進一步說明，請隨時聯繫我們。 ")]))]),et])])],512)],64)}const at=O(B,[["render",st]]);export{at as default};
