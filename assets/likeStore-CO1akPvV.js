import{y as l,C as o}from"./index-BnI40pZa.js";import{S as n}from"./sweetalert2.all-CnuW5dCa.js";const r="https://greensheep-json-server.onrender.com",u=l("likeStore",{state:()=>({isLike:!1,likedProducts:[]}),actions:{async likeInit(t){const e=JSON.parse(localStorage.getItem("userInfo"));if(e===null)return this.isLike=!1,!1;await o.get(`${r}/favorites?userId=${e.id}`).then(s=>{s.data.length?(this.likedProducts=s.data.map(i=>i.productId.toString()),this.isLike=this.likedProducts.includes(t)):(this.likedProducts=[],this.isLike=!1)}).catch(s=>{console.log(s)})},async addToLike(t){const e={productId:`${t}`,userId:Number(JSON.parse(localStorage.getItem("userInfo")).id)},s=await o.get(`${r}/favorites?userId=${e.userId}&&productId=${e.productId}`);s.data.length?o.delete(`${r}/favorites/${s.data[0].id}`).then(()=>{n.fire({position:"top-end",icon:"success",title:"已經移除收藏囉!",showConfirmButton:!1,toast:!0,timer:1500});const i=this.likedProducts.findIndex(a=>a===t);i>-1&&this.likedProducts.splice(i,1),this.isLike=this.likedProducts.includes(t.toString())}):o.post(`${r}/favorites`,e).then(()=>{n.fire({position:"top-end",icon:"success",title:"已加入收藏!",showConfirmButton:!1,toast:!0,timer:1500}),this.likedProducts.push(t),this.isLike=this.likedProducts.includes(t.toString())}).catch(i=>{console.log(i)})},async isLogin(t){const e=JSON.parse(localStorage.getItem("userInfo"));if(e===null)return n.fire({icon:"warning",title:"請先登入會員喔！",showConfirmButton:!1,timer:1500}),this.$router.push({name:"MemberLogin"}),!1;await o.get(`${r}/600/users/${e.id}`,{headers:{Authorization:`Bearer ${e.token}`}}).then(()=>{this.addToLike(t)}).catch(()=>{n.fire({icon:"warning",title:"請先登入會員喔！",showConfirmButton:!1,timer:1500}),this.$router.push({name:"MemberLogin"})})}}});export{u as l};