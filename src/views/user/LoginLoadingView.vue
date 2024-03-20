<template>
  <div class="d-flex flex-column align-items-center py-50">
    <VueLoading v-model:active="isLoading"></VueLoading>
  </div>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
import { jwtDecode } from 'jwt-decode'
import Swal from 'sweetalert2'
// json-server網址
const serverUrl = 'https://greensheep-json-server.onrender.com'
export default {
  data() {
    return {
      user: {},
      userInfo: {},
      isLoading: true
    }
  },
  methods: {
    // 判斷是否已註冊帳號
    async checkAccounts(email) {
      try {
        const response = await axios.get(`${serverUrl}/users/?email=${email}`)
        return response.data.length === 0
      } catch (error) {
        console.log(error.response.data)
      }
    },
    // google登入
    async googleAccount() {
      if (await this.checkAccounts(this.$route.query.googleEmail)) {
        Swal.fire({
          icon: 'warning',
          title: '此信箱尚未註冊過!',
          showConfirmButton: false,
          timer: 1500
        })
        this.$router.push({ name: 'MemberSignUp' })
      } else {
        this.user.email = this.$route.query.googleEmail
        this.user.password = `google-${this.user.email}`
        this.login()
      }
    },
    // 登入
    login() {
      axios
        .post(`${serverUrl}/login`, this.user)
        .then((res) => {
          this.userInfo.token = res.data.accessToken
          this.userInfo.id = res.data.user.id
          localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
          this.$router.push({ name: 'MemberHome' })
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: '帳號或密碼錯誤!請重新登入',
            showConfirmButton: false,
            timer: 1500
          })

          this.$router.push({ name: 'MemberLogin' })
        })
    }
  },
  async mounted() {
    // google登入
    if (Object.keys(this.$route.query).length) {
      this.googleAccount()
      return
    }

    // Line登入
    // 先對參數做處理，剩下驗證碼
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])

    // 再利用URLSearchParams中get方法取值
    this.code = urlParams.get('code')
    let options = Qs.stringify({
      // 向Resource Server發送請求的參數
      // 用Qs是要轉成form-urlencoded 因為LINE不吃JSON格式
      grant_type: 'authorization_code',
      code: this.code,
      redirect_uri: 'https://ritayang0811.github.io/greensheep/#/loginLoading',
      client_id: '2003862374',
      client_secret: '3f92c0ff3156006f79bca2ab6e993a4e'
    })
    try {
      const lineRes = await axios.post('https://api.line.me/oauth2/v2.1/token', options, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      if (await this.checkAccounts(jwtDecode(lineRes.data.id_token).email)) {
        Swal.fire({
          icon: 'warning',
          title: '此信箱尚未註冊過!',
          showConfirmButton: false,
          timer: 1500
        })
        this.$router.push({ name: 'MemberSignUp' })
      } else {
        this.user.email = jwtDecode(lineRes.data.id_token).email
        this.user.password = `line-${this.user.email}`
        this.login()
      }
    } catch {
      Swal.fire({
        icon: 'warning',
        title: '請重新登入',
        showConfirmButton: false,
        timer: 1500
      })
      this.$router.push({ name: 'MemberLogin' })
    }
  }
}
</script>
