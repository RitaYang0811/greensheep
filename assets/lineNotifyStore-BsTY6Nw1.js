import{y as a,z as c}from"./index-Dr79K2c5.js";var l={VITE_APP_API_URL:"https://ec-course-api.hexschool.io/v2",VITE_APP_API_NAME:"greensheep",VITE_LINE_CLIENT_ID:"x9iTcS6m9Fdlz8XFfAbkqs",VITE_LINE_REDIRECT_URI:"http://localhost:5173/greensheep/#/admin/home",VITE_LINE_CLIENT_SECRET:"iGiOLRLmU2aNTDuObVQlcP5XzPYSbUzJ9gvUl4YvPzx",BASE_URL:"/greensheep/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_LINE_CLIENT_ID:i,VITE_LINE_CLIENT_SECRET:r}=l,E=a("lineNotifyStore",{actions:{lineGetOrder(){const o=encodeURIComponent("http://localhost:5173/greensheep/#/admin/home"),s=`https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${i}&redirect_uri=${o}&state=12345&scope=notify`;window.location.href=s},lineGetAccessToken(o){console.log("##",o);const t={fn:"getToken",code:o,redirect_uri:"http://localhost:5173/greensheep/#/admin/home",client_id:i,client_secret:r};console.log("##",t),c.post("https://script.google.com/macros/s/AKfycbzxPk2TpCEA1fWvrvzu-XC8znThkg4xsS2u9R4EoL9wzl1EYNswFiecLBYhCmjAc2uT/exec",t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>{console.log(e);const{data:n}=e;n.status===200&&this.sendLineNotification(n.access_token),console.log("##",n.access_token)}).catch(e=>{console.error(e)})},sendLineNotification(o){const t="https://script.google.com/macros/s/AKfycbzxPk2TpCEA1fWvrvzu-XC8znThkg4xsS2u9R4EoL9wzl1EYNswFiecLBYhCmjAc2uT/exec",s={message:"訊息在這裡通知拉~~~~",accessToken:o};c.post(t,s,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>{console.log(e.data),console.log("$$",e.data)}).catch(e=>{console.error(e)})}}});export{E as l};
