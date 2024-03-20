import{E as k}from"./smtp-6XTZpYJq.js";import{_}from"./GreenSheep-DGMgQRZ1.js";import{_ as x,c as m,b as e,d as r,w as y,e as v,j as u,o as f,u as l,i as b}from"./index-BZ6VGQXF.js";const w="https://greensheep-json-server.onrender.com",S={data(){return{securityInput:null,user:{},userId:0,stepState:{first:!0,second:!1,third:!1},securityCode:"",inputCode:"",confirmPassword:"",initCount:0,confirmCount:0,checkEyeState:!1,confirmEyeState:!1,passwordActive:!1,confirmActive:!1}},methods:{emailRule(o){return/^[\w.-]+@(gmail\.com|yahoo\.com\.tw)$/.test(o)?!0:"請輸入Gmail/Yahoo帳號"},async sendCode(){if(await this.checkAccounts()){alert("此帳號沒有註冊過喔!");return}this.sendEmail()},async checkAccounts(){try{const o=await this.$http.get(`${w}/users/?email=${this.user.email.toLowerCase()}`);return o.data.length&&(this.userId=o.data[0].id),o.data.length===0}catch(o){console.log(o.response.data)}},sendEmail(){this.securityCode=this.randomCode();const o=`使用者:${this.user.email}<br/>驗證碼:${this.securityCode}<br/>Messages:申請註冊GreenSheep會員<br/> `;k.send({SecureToken:"0435dc8c-9e69-445a-9569-0d031827457c",To:`${this.user.email}`,From:"greensheep0619@gmail.com",Subject:"親愛的會員您好，GreenSheep客服中心寄送驗證碼來囉~",Body:o}).then(()=>{alert("已發送驗證碼到信箱囉!"),this.stepState.first=!1,this.stepState.second=!0})},randomCode(o=5){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let h="";for(let p=0;p<o;p++){const t=Math.floor(Math.random()*s.length);h+=s.charAt(t)}return h},checkCode(){if(this.inputCode===this.securityCode){alert("驗證成功"),this.stepState.second=!1,this.stepState.third=!0;return}alert("驗證碼輸入錯誤")},passwordRule(o){return o!==void 0&&/^(?!.*\d{6,})(?!.*(.)\1{4,}).{6,12}$/.test(o)?(this.checkEyeState=!1,this.initCount=0,!0):(this.initCount&&(this.checkEyeState=!0),this.initCount+=1,"請輸入正確密碼")},confirmPasswordRule(o){return o===this.user.password&&o?(this.confirmEyeState=!1,this.confirmCount=0,!0):(this.confirmCount&&(this.confirmEyeState=!0),this.confirmCount+=1,"請輸入相同密碼")},onSubmit(){this.$http.patch(`${w}/users/${this.userId}`,this.user).then(()=>{alert("修改成功囉!"),this.$router.push({name:"MemberLogin"})}).catch(o=>{console.log(o)})}}},E={class:"container"},V={class:"d-flex flex-column align-items-center mt-40"},A=e("div",null,[e("h2",{class:"fs-2"},"WELCOME"),e("p",{class:"text-primary"},"Discover Your Unique Elegance")],-1),P={class:"w-50 member-content"},B={class:"d-flex flex-column align-items-center py-8"},j=e("h1",{class:"fs-1 mb-8"},"忘記密碼",-1),M={key:0},R={class:"form-floating mb-3"},U=e("label",{for:"email",class:"z-0"},"請輸入Email",-1),z=e("div",{class:"button-img-box me-1"},[e("img",{src:_,alt:"圖像"})],-1),I=e("p",null,"發送驗證碼",-1),G=[z,I],L={key:1},N={class:"form-floating mb-3"},H=e("label",{for:"securityCode",class:"z-0"},"請輸入驗證碼",-1),T=e("div",{class:"button-img-box me-1"},[e("img",{src:_,alt:"圖像"})],-1),Y=e("p",null,"送出驗證碼",-1),q=[T,Y],F={key:2},D={class:"form-floating mb-3"},O=e("label",{for:"password",class:"z-0"},"請輸入密碼(6-12字元且不連續)",-1),W={class:"form-floating mb-3"},J=e("label",{for:"password",class:"z-0"},"請再次確認密碼",-1),K=e("div",{class:"button-img-box me-1"},[e("img",{src:_,alt:"圖像"})],-1),Q=e("p",null,"重設密碼",-1),X=[K,Q],Z={class:"mb-3 d-flex justify-content-end"},$={class:"mt-1"};function ee(o,s,h,p,t,n){const a=u("v-field"),c=u("error-message"),C=u("v-form"),g=u("router-link");return f(),m("main",E,[e("div",V,[A,e("div",P,[e("div",B,[j,e("div",null,[r(C,{ref:"form",class:"member-form"},{default:y(({errors:d})=>[t.stepState.first?(f(),m("div",M,[e("div",R,[r(a,{name:"email",type:"email",class:l(["form-control",{"is-invalid":d.email}]),id:"email","aria-describedby":"emailHelp",placeholder:"請輸入Email (Google/Yahoo)",rules:n.emailRule,modelValue:t.user.email,"onUpdate:modelValue":s[0]||(s[0]=i=>t.user.email=i)},null,8,["class","rules","modelValue"]),U,r(c,{name:"email",class:"invalid-feedback text-start"})]),e("button",{type:"button",class:"d-flex justify-content-center align-items-center btn btn-primary sub-button",onClick:s[1]||(s[1]=(...i)=>n.sendCode&&n.sendCode(...i))},G)])):b("",!0),t.stepState.second?(f(),m("div",L,[e("div",N,[r(a,{id:"securityCode",name:"驗證碼",type:"text",class:l(["form-control",{"is-invalid":d.驗證碼}]),placeholder:"請輸入驗證碼",rules:"required",modelValue:t.inputCode,"onUpdate:modelValue":s[2]||(s[2]=i=>t.inputCode=i)},null,8,["class","modelValue"]),H,r(c,{name:"驗證碼",class:"invalid-feedback text-start"})]),e("button",{type:"button",class:"d-flex justify-content-center align-items-center btn btn-primary sub-button",onClick:s[3]||(s[3]=(...i)=>n.checkCode&&n.checkCode(...i))},q)])):b("",!0),t.stepState.third?(f(),m("div",F,[e("div",D,[r(a,{name:"password",type:t.passwordActive?"text":"password",class:l(["form-control",{"is-invalid":d.password}]),id:"password","aria-describedby":"passwordHelp",placeholder:"請輸入密碼(6-12字元且不連續)",rules:n.passwordRule,modelValue:t.user.password,"onUpdate:modelValue":s[4]||(s[4]=i=>t.user.password=i)},null,8,["type","class","rules","modelValue"]),O,e("i",{class:l(["checkByEye",[t.passwordActive?"bi-eye":"bi-eye-slash","bi",{"checkByEye-alert":t.checkEyeState}]]),onClick:s[5]||(s[5]=i=>t.passwordActive=!t.passwordActive)},null,2),r(c,{name:"password",class:"invalid-feedback text-start"})]),e("div",W,[r(a,{name:"confirmPassword",type:t.confirmActive?"text":"password",class:l(["form-control",{"is-invalid":d.confirmPassword}]),id:"confirmPassword","aria-describedby":"passwordHelp",placeholder:"請再次確認密碼",rules:n.confirmPasswordRule,modelValue:t.confirmPassword,"onUpdate:modelValue":s[6]||(s[6]=i=>t.confirmPassword=i)},null,8,["type","class","rules","modelValue"]),J,e("i",{class:l(["checkByEye",[t.confirmActive?"bi-eye":"bi-eye-slash","bi",{"checkByEye-alert":t.confirmEyeState}]]),onClick:s[7]||(s[7]=i=>t.confirmActive=!t.confirmActive)},null,2),r(c,{name:"confirmPassword",class:"invalid-feedback text-start"})]),e("button",{type:"button",class:"d-flex justify-content-center align-items-center btn btn-primary sub-button",onClick:s[8]||(s[8]=(...i)=>n.onSubmit&&n.onSubmit(...i))},X)])):b("",!0)]),_:1},512),e("div",Z,[e("p",$,[v(" 返回"),r(g,{to:"/MemberLogin",class:"text-decoration-underline text-primary"},{default:y(()=>[v("登入")]),_:1})])])])])])])])}const ie=x(S,[["render",ee]]);export{ie as default};
