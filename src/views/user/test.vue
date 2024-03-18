<template>
  <button type="button" class="my-40" @click="lineGetOrder">點我</button>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'

export default {
  methods: {
    lineGetOrder() {
      const LINE_CLIENT_ID = 'x9iTcS6m9Fdlz8XFfAbkqs'
      const LINE_REDIRECT_URI = encodeURIComponent('http://localhost:5173/greensheep/#/test')
      const STATE = '12345'
      const loginUrl = `https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=${LINE_CLIENT_ID}&redirect_uri=${LINE_REDIRECT_URI}&state=${STATE}&scope=notify`

      window.location.href = loginUrl
    },
    lineGetAccessToken(code) {
      const LINE_CLIENT_ID = 'x9iTcS6m9Fdlz8XFfAbkqs'
      const LINE_CLIENT_SECRET = 'oRpCYWXDYgFqAXqBpUxLRwMWhdop4AGaN0l8RwNe0am'
      const LINE_REDIRECT_URI = encodeURIComponent('http://localhost:5173/greensheep/#/test')
      const tokenUrl = 'https://notify-bot.line.me/oauth/token'

      const params = Qs.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: LINE_REDIRECT_URI,
        client_id: LINE_CLIENT_ID,
        client_secret: LINE_CLIENT_SECRET
      })

      axios
        .post(tokenUrl, params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then((response) => {
          console.log(response.data.access_token)
          // 在這裡可以保存access token，並使用它來發送通知
          this.sendLineNotification(response.data.access_token)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    sendLineNotification(accessToken) {
      //const token = 'WaY4Ab2w03JrXf7cyy0yXtfBYGxO9wKCflR1EQP1GqN'
      const notificationUrl = 'https://notify-api.line.me/api/notify'
      const message = '您的通知消息'

      axios
        .post(notificationUrl, Qs.stringify({ message: message }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${accessToken}`
          }
        })
        .then((response) => {
          console.log(response.data)
          // 在這裡處理通知發送成功的響應
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  created() {
    // 從URL中獲取授權碼
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')

    // 檢查是否存在授權碼並調用相應的函數
    if (code) {
      console.log('@@', code)
      // 調用 lineGetAccessToken 函數並傳遞授權碼
      this.lineGetAccessToken(code)
    } else {
      // 如果未獲取到授權碼，您可以執行其他操作或顯示錯誤消息
      console.error('未獲取到授權碼')
    }
  }
}
</script>

<style></style>
