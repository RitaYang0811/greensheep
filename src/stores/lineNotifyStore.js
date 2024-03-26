import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_LINE_CLIENT_ID, VITE_LINE_CLIENT_SECRET } = import.meta.env

export default defineStore('lineNotifyStore', {
  state: () => ({
    accessToken: null
  }),
  actions: {
    //綁定
    lineGetOrder() {
      const LINE_REDIRECT_URI = encodeURIComponent(
        'https://ritayang0811.github.io/greensheep/#/admin/home'
      )
      const STATE = '12345'

      const loginUrl = `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${VITE_LINE_CLIENT_ID}&redirect_uri=${LINE_REDIRECT_URI}&state=${STATE}&scope=notify`
      window.location.href = loginUrl
    },
    lineGetAccessToken(code) {
      console.log('code', code)
      const params = {
        fn: 'getToken', // 告訴 API 我要執行取 Token 的Function
        code: code, // Line Notify 回傳的 code
        redirect_uri: 'https://ritayang0811.github.io/greensheep/#/admin/home',
        client_id: VITE_LINE_CLIENT_ID,
        client_secret: VITE_LINE_CLIENT_SECRET
      }
      console.log('params', params)
      const notifyAppsURL =
        'https://script.google.com/macros/s/AKfycbyWxX2sYUoAdDTD7LHdivBF_PuaEjvaUMVjqdSOnzlPo2fNoxICBCbe7UTDh3k_g_7r/exec'

      axios
        .post(notifyAppsURL, params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then((response) => {
          console.log(response)
          const { data } = response
          this.accessToken = data.access_token
          // 在這裡可以保存access token，並使用它來發送通知'
          if (data.status === 200) {
            this.sendLineNotification(data.access_token)
          }
          console.log('token', this.accessToken)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    sendLineNotification(accessToken) {
      const notifyAppsURL =
        'https://script.google.com/macros/s/AKfycbyWxX2sYUoAdDTD7LHdivBF_PuaEjvaUMVjqdSOnzlPo2fNoxICBCbe7UTDh3k_g_7r/exec'
      const params = {
        message: '已經收到您的訂單囉！',
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
        })
        .catch((error) => {
          console.error(error)
        })
    },
    sendMakingNotification(accessToken) {
      const notifyAppsURL =
        'https://script.google.com/macros/s/AKfycbyWxX2sYUoAdDTD7LHdivBF_PuaEjvaUMVjqdSOnzlPo2fNoxICBCbe7UTDh3k_g_7r/exec'
      const params = {
        message: '您的訂單正在努力製作中囉，敬請期待',
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
        })
        .catch((error) => {
          console.error(error)
        })
    },
    sendDeliverNotification(accessToken) {
      const notifyAppsURL =
        'https://script.google.com/macros/s/AKfycbyWxX2sYUoAdDTD7LHdivBF_PuaEjvaUMVjqdSOnzlPo2fNoxICBCbe7UTDh3k_g_7r/exec'
      const params = {
        message: '感謝您的耐心等待，您的訂單已經出貨，祝您收禮愉快！',
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
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
})
