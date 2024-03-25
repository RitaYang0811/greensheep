import{_ as m,c as n,b as t,F as h,r as p,o,t as _}from"./index-KAkDlvsk.js";var d={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",VITE_LINE_CLIENT_ID:"x9iTcS6m9Fdlz8XFfAbkqs",VITE_LINE_CLIENT_SECRET:"iGiOLRLmU2aNTDuObVQlcP5XzPYSbUzJ9gvUl4YvPzx",BASE_URL:"/greensheep/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:f,VITE_APP_API_NAME:g}=d,E={data(){return{userEmail:"",userOrders:[]}},methods:{getUser(){let e=localStorage.getItem("userInfo");const s=JSON.parse(e).id;this.$http.get("https://greensheep-json-server.onrender.com/users").then(l=>{l.data.forEach(a=>{a.id==s&&(this.userEmail=a.email)})}).catch(l=>{console.log(l)})},getOrders(){const e=`${f}/api/${g}/orders`;this.$http.get(e).then(s=>{s.data.orders.forEach(r=>{r.user.email==this.userEmail&&this.userOrders.push(r)})}).catch(s=>{console.log(s)})},printProducts(e){const s=Object.values(e);let r="";return s.forEach(l=>{r=r+`${l.product.title}, `}),r},printDate(e){let s=0,r=0,l=0;return e=new Date(e*1e3),s=e.getFullYear(),r=e.getMonth(),l=e.getDate(),`${s} / ${r+1} / ${l}`},printStatus(e){return e!=null&&e.done?"訂單已完成":e!=null&&e.sendProduct?"商品已寄出":e!=null&&e.making?"商品製作中":"收到訂單"}},mounted(){this.getUser(),this.getOrders()}},b=t("h1",{class:"fs-3 fs-lg-2 text-start mb-6 fw-bold"},"所有訂單",-1),y={class:"table"},I=t("thead",{class:"bg-primary"},[t("tr",null,[t("th",{scope:"col",class:"py-4 text-white fw-bold"},"訂單編號"),t("th",{scope:"col",class:"py-4 text-white fw-bold"},"下訂日期"),t("th",{scope:"col",class:"py-4 text-white fw-bold"},"商品資訊"),t("th",{scope:"col",class:"py-4 text-white fw-bold"},"訂單狀態")])],-1),P={class:"bg-white"},w={scope:"row",class:"py-4 text-primary fw-medium align-middle"},x={class:"py-4 text-primary align-middle"},O={class:"py-4 text-primary"},A={class:"align-middle"},S={class:"text-primary fw-bold"};function T(e,s,r,l,a,u){return o(),n(h,null,[b,t("table",y,[I,t("tbody",P,[(o(!0),n(h,null,p(a.userOrders,i=>(o(),n("tr",{key:i.id},[t("th",w,_(i==null?void 0:i.create_at),1),t("td",x,_(u.printDate(i==null?void 0:i.create_at)),1),t("td",O,[(o(!0),n(h,null,p(Object.values(i.products),c=>(o(),n("div",{class:"mb-1",key:c==null?void 0:c.id},_(c==null?void 0:c.product.title),1))),128))]),t("td",A,[t("span",S,_(u.printStatus(i.orderStatus)),1)])]))),128))])])],64)}const D=m(E,[["render",T]]);export{D as default};
