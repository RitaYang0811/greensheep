import{_ as u,z as i,c as h,e as m,k as g,o as d}from"./index-3qIeMt9n.js";import{Q as p,j as r}from"./index-CvLXT5Br.js";import{S as o}from"./sweetalert2.all-B7PAY33k.js";const a="https://greensheep-json-server.onrender.com",f={data(){return{user:{},userInfo:{},isLoading:!0}},methods:{async checkAccounts(e){try{return(await i.get(`${a}/users/?email=${e}`)).data.length===0}catch(t){console.log(t.response.data)}},async googleAccount(){await this.checkAccounts(this.$route.query.googleEmail)?(o.fire({icon:"warning",title:"此信箱尚未註冊過!",showConfirmButton:!1,timer:1500}),this.$router.push({name:"MemberSignUp"})):(this.user.email=this.$route.query.googleEmail,this.user.password=`google-${this.user.email}`,this.login())},login(){i.post(`${a}/login`,this.user).then(e=>{this.userInfo.token=e.data.accessToken,this.userInfo.id=e.data.user.id,localStorage.setItem("userInfo",JSON.stringify(this.userInfo)),this.$router.push({name:"MemberHome"})}).catch(e=>{o.fire({icon:"error",title:"帳號或密碼錯誤!請重新登入",showConfirmButton:!1,timer:1500}),this.$router.push({name:"MemberLogin"})})}},async mounted(){if(Object.keys(this.$route.query).length){this.googleAccount();return}const e=new URLSearchParams(window.location.href.split("?")[1]);this.code=e.get("code");let t=p.stringify({grant_type:"authorization_code",code:this.code,redirect_uri:"https://ritayang0811.github.io/greensheep/#/loginLoading",client_id:"2003862374",client_secret:"3f92c0ff3156006f79bca2ab6e993a4e"});try{const s=await i.post("https://api.line.me/oauth2/v2.1/token",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}});await this.checkAccounts(r(s.data.id_token).email)?(o.fire({icon:"warning",title:"此信箱尚未註冊過!",showConfirmButton:!1,timer:1500}),this.$router.push({name:"MemberSignUp"})):(this.user.email=r(s.data.id_token).email,this.user.password=`line-${this.user.email}`,this.login())}catch{o.fire({icon:"warning",title:"請重新登入",showConfirmButton:!1,timer:1500}),this.$router.push({name:"MemberLogin"})}}},w={class:"d-flex flex-column align-items-center py-50"};function _(e,t,s,y,n,$){const c=g("VueLoading");return d(),h("div",w,[m(c,{active:n.isLoading,"onUpdate:active":t[0]||(t[0]=l=>n.isLoading=l)},null,8,["active"])])}const v=u(f,[["render",_]]);export{v as default};
