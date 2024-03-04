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
              v-model="user.name"
            ></v-field>
            <label for="name">請輸入暱稱</label>
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
            <label for="email">目前Email</label>
          </div>
          <!-- 密碼 -->
          <div class="form-floating mb-3">
            <v-field
              name="password"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors['password'] }"
              id="password"
              aria-describedby="passwordHelp"
              placeholder="請輸入密碼(6-12字元且不連續)"
              :rules="passwordRule"
              v-model="user.password"
            ></v-field>
            <label for="password">請輸入密碼(6-12字元且不連續)</label>
            <error-message name="password" class="invalid-feedback text-start"></error-message>
          </div>
          <!-- 再次確認密碼 -->
          <div class="form-floating mb-3">
            <v-field
              name="confirmPassword"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': errors['confirmPassword'] }"
              id="confirmPassword"
              aria-describedby="passwordHelp"
              placeholder="請再次確認密碼"
              :rules="confirmPasswordRule"
              v-model="user.confirmPassword"
            />
            <label for="password">請再次確認密碼</label>
            <error-message
              name="confirmPassword"
              class="invalid-feedback text-start"
            ></error-message>
          </div>
          <!-- 生日 -->
          <div class="mb-3">
            <p class="mb-1">*生日當月贈送消費金，確認後不可更改</p>
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
              <img src="../../assets/images/GreenSheep.png" alt="圖像" />
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
import { jwtDecode } from 'jwt-decode'

export default {
  data() {
    return {
      date: new Date(),
      user: {},
      code: ''
    }
  },
  methods: {
    passwordRule(value) {
      let password = /^(?!.*\d{6,})(?!.*(.)\1{4,}).{6,12}$/
      return value !== undefined && password.test(value) ? true : `請輸入正確密碼`
    },
    confirmPasswordRule(value) {
      return value === this.user.password && value ? true : '請輸入相同密碼'
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
    onSubmit() {
      console.log(this.user)
    }
  },
  mounted() {
    // google登入
    console.log(Object.keys(this.$route.query))
    if (Object.keys(this.$route.query).length) {
      this.user.email = this.$route.query.googleEmail
      this.user.name = this.$route.query.googleName
      return
    }
    // Line登入
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])

    this.code = urlParams.get('code')

    let options = Qs.stringify({
      // POST的參數  用Qs是要轉成form-urlencoded 因為LINE不吃JSON格式
      grant_type: 'authorization_code',
      code: this.code,
      redirect_uri: 'http://localhost:5173/greensheep/#/OtherLogin',
      client_id: '2003862374',
      client_secret: '3f92c0ff3156006f79bca2ab6e993a4e'
    })

    axios
      .post('https://api.line.me/oauth2/v2.1/token', options, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then((res) => {
        this.user.email = jwtDecode(res.data.id_token).email
        this.user.name = jwtDecode(res.data.id_token).name
      })
      .catch((err) => {
        alert('請重新登入')
        this.$router.push({ name: 'MemberSignUp' })
      })
  }
}
</script>
