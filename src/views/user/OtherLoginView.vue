<template>
  <!-- 生日 -->
  <div class="d-flex flex-column align-items-center py-15">
    <div>
      <h2 class="fs-2">WELCOME</h2>
      <p class="text-primary">Discover Your Unique Elegance</p>
    </div>
    <div class="w-50 member-content d-flex flex-column align-items-center py-8">
      <h1 class="fs-1 mb-8">新會員設定</h1>
      <!-- 生日 -->
      <div class="mb-3">
        <v-form ref="form" class="member-form" v-slot="{ errors }" @submit="onSubmit">
          <!-- 暱稱 -->
          <div class="form-floating mb-3">
            <v-field
              id="name"
              name="暱稱"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['暱稱'] }"
              placeholder="請輸入暱稱"
              rules="required"
              v-model="user.nickName"
            ></v-field>
            <label for="name" class="z-0">暱稱</label>
            <error-message name="暱稱" class="invalid-feedback text-start"></error-message>
          </div>
          <!-- 信箱(不能動) -->
          <div class="form-floating mb-3">
            <v-field
              name="email"
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              v-model="user.email"
              disabled
            ></v-field>
            <label for="email" class="z-0">目前Email</label>
          </div>

          <!-- 生日 -->
          <div class="mb-3">
            <p class="mb-1">*生日當月贈送消費金，確認後不可更改</p>
            <p class="mb-1 text-start fs-8 text-primary">*請選擇您的生日</p>
            <VueDatePicker
              name="birthdayDate"
              v-model="date"
              @blur="blurFunction"
              :format="format"
              locale="zh-Tw"
              :enable-time-picker="false"
              year-first
              required
            />
          </div>

          <button
            type="submit"
            class="d-flex justify-content-center align-items-center btn btn-primary sub-button"
          >
            <div class="button-img-box me-1">
              <img src="@/assets/images/GreenSheep.png" alt="圖像" />
            </div>
            <p>完成註冊</p>
          </button>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Qs from 'qs'
import Swal from 'sweetalert2'
import { jwtDecode } from 'jwt-decode'

// json-server網址
const serverUrl = 'https://greensheep-json-server.onrender.com'

export default {
  data() {
    return {
      date: new Date(),
      user: {
        id: '',
        nickName: '',
        email: '',
        password: '',
        birthday: '',
        favorites: [],
        location: '',
        phone: ''
      },
      accountState: '',
      code: ''
    }
  },
  methods: {
    // 判斷是否已註冊帳號
    async checkAccounts(email) {
      try {
        const response = await axios.get(`${serverUrl}/users/?email=${email}`)
        return response.data.length !== 0
      } catch (error) {
        console.log(error.response.data)
      }
    },
    blurFunction() {
      if (this.date === null) {
        this.date = new Date()
      }
    },
    format() {
      this.user.birthday = `${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}`

      return `您的生日: ${this.user.birthday}`
    },
    // 發出請求註冊
    onSubmit() {
      this.user.password = `${this.accountState}${this.user.email}`

      axios
        .post(`${serverUrl}/users`, this.user)
        .then(() => {
          Swal.fire({
            icon: 'warning',
            title: '註冊成功囉!',
            showConfirmButton: false,
            timer: 2000
          })
          this.$router.push({ name: 'MemberLogin' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  async mounted() {
    // google登入
    if (Object.keys(this.$route.query).length) {
      if (await this.checkAccounts(this.$route.query.googleEmail.toLowerCase())) {
        Swal.fire({
          icon: 'warning',
          title: '此信箱已經註冊過囉!',
          showConfirmButton: false,
          timer: 2000
        })
        this.$router.push({ name: 'MemberLogin' })
        return
      } else {
        if (Object.keys(this.$route.query).length) {
          this.user.email = this.$route.query.googleEmail
          this.user.nickName = this.$route.query.googleName
          this.accountState = 'google-'
          return
        }
      }
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
      redirect_uri: 'https://ritayang0811.github.io/greensheep/#/OtherLogin',
      client_id: '2003862374',
      client_secret: '3f92c0ff3156006f79bca2ab6e993a4e'
    })
    try {
      const lineRes = await axios.post('https://api.line.me/oauth2/v2.1/token', options, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      if (await this.checkAccounts(jwtDecode(lineRes.data.id_token).email.toLowerCase())) {
        Swal.fire({
          icon: 'warning',
          title: '此信箱已經註冊過囉!',
          showConfirmButton: false,
          timer: 2000
        })
        this.$router.push({ name: 'MemberLogin' })
      } else {
        this.user.email = jwtDecode(lineRes.data.id_token).email
        this.user.nickName = jwtDecode(lineRes.data.id_token).name
        this.accountState = 'line-'
      }
    } catch {
      Swal.fire({
        icon: 'warning',
        title: '請重新註冊!',
        showConfirmButton: false,
        timer: 2000
      })
      this.$router.push({ name: 'MemberSignUp' })
    }
  }
}
</script>
