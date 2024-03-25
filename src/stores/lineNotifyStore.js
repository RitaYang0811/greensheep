import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_LINE_CLIENT_ID, VITE_LINE_REDIRECT_URI, VITE_LINE_CLIENT_SECRET } = import.meta.env

export default defineStore('lineNotifyStore', {
  actions: {
    //綁定
    lineGetOrder() {
      const LINE_REDIRECT_URI = encodeURIComponent(VITE_LINE_REDIRECT_URI)
      console.log(VITE_LINE_CLIENT_ID, LINE_REDIRECT_URI, VITE_LINE_CLIENT_SECRET)
      const STATE = '12345'
      const loginUrl = `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${VITE_LINE_CLIENT_ID}&redirect_uri=${LINE_REDIRECT_URI}&state=${STATE}&scope=notify`
      console.log('!!', loginUrl)
      window.location.href = loginUrl
    },
    lineGetAccessToken(code) {
      console.log('##', code)
      const params = {
        fn: 'getToken', // 告訴 API 我要執行取 Token 的Function
        code: code, // Line Notify 回傳的 code
        LINE_REDIRECT_URI: VITE_LINE_REDIRECT_URI,
        LINE_CLIENT_ID: VITE_LINE_CLIENT_ID,
        LINE_CLIENT_SECRET: VITE_LINE_CLIENT_SECRET
      }
      console.log('##', params)
      const notifyAppsURL =
        'https://script.google.com/macros/s/AKfycbzxPk2TpCEA1fWvrvzu-XC8znThkg4xsS2u9R4EoL9wzl1EYNswFiecLBYhCmjAc2uT/exec'

      axios
        .post(notifyAppsURL, params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then((response) => {
          console.log(response)
          const { data } = response

          // 在這裡可以保存access token，並使用它來發送通知'
          if (data.status === 200) {
            this.sendLineNotification(data.access_token)
          }
          console.log('##', data.access_token)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    sendLineNotification(accessToken) {
      const notifyAppsURL =
        'https://script.google.com/macros/s/AKfycbzxPk2TpCEA1fWvrvzu-XC8znThkg4xsS2u9R4EoL9wzl1EYNswFiecLBYhCmjAc2uT/exec'
      const params = {
        message: '訊息在這裡通知拉~~~~',
        accessToken: accessToken
      }
      axios
        .post(notifyAppsURL, params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then((response) => {
          console.log(response.data)
          // 在這裡處理通知發送成功的響應
          console.log('$$', response.data)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
})
