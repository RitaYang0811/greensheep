<template>
  <div class="d-flex flex-column align-items-center py-15 pt-40">
    <div>
      <h2 class="fs-2">WELCOME</h2>
      <p class="text-primary">Discover Your Unique Elegance</p>
    </div>
    <div class="w-50 member-content">
      <!-- 登入輸入內容 -->
      <div class="d-flex flex-column align-items-center py-8">
        <h1 class="fs-1 mb-8">會員登入</h1>
        <div>
          <!-- google或line 帳號登入 -->
          <ul class="list-unstyled">
            <li class="py-3">
              <button
                type="button"
                class="g-login-btn g-login-btn--google ji-mb-10"
                @click="accessTokenLogin"
              >
                <span class="g-login-btnIcon"
                  ><img src="@/assets/images/google.svg" alt="line圖片"
                /></span>
                <span class="g-login-btnText">Google登入</span>
              </button>
            </li>
            <li class="py-3">
              <button
                type="button"
                class="g-login-btn g-login-btn--line mt-3"
                @click="lineLoginEvent"
              >
                <span class="g-login-btnIcon"
                  ><img src="@/assets/images/line-image.png" alt="line圖片"
                /></span>
                <span class="g-login-btnText">LINE登入</span>
              </button>
            </li>
          </ul>

          <p class="d-flex justify-content-center align-items-center py-6 hr-line">or</p>
          <!-- 表單 -->
          <v-form ref="form" class="member-form" v-slot="{ errors }" @submit="onSubmit">
            <!-- 信箱 -->
            <div class="form-floating mb-3">
              <v-field
                name="email"
                type="email"
                class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                id="email"
                aria-describedby="emailHelp"
                placeholder="請輸入Email (Google/Yahoo)"
                :rules="emailRule"
                v-model="user.email"
              ></v-field>
              <label for="email" class="z-0">請輸入Email</label>
              <error-message name="email" class="invalid-feedback text-start"></error-message>
            </div>
            <!-- 密碼 -->
            <div class="form-floating mb-3">
              <v-field
                name="password"
                :type="isActive ? 'text' : 'password'"
                class="form-control"
                :class="{ 'is-invalid': errors['password'] }"
                id="password"
                aria-describedby="passwordHelp"
                placeholder="請輸入密碼(6-12字元且不連續)"
                :rules="passwordRule"
                v-model="user.password"
              ></v-field>
              <label for="password" class="z-0">請輸入6-12字英數混合密碼</label>
              <i
                class="checkByEye"
                :class="[
                  isActive ? 'bi-eye' : 'bi-eye-slash',
                  'bi',
                  { 'checkByEye-alert': checkEyeState }
                ]"
                @click="isActive = !isActive"
              ></i>
              <!-- { 'checkByEye-alert': checkEyeState } -->

              <!-- <i
                class="bi bi-eye-slash checkByEye"
                :class="{ 'checkByEye-alert': checkEyeState }"
              ></i> -->
              <error-message name="password" class="invalid-feedback text-start"></error-message>
            </div>

            <button
              type="submit"
              class="d-flex justify-content-center align-items-center btn btn-primary sub-button"
            >
              <div class="button-img-box me-1">
                <img src="@/assets/images/GreenSheep.png" alt="圖像" />
              </div>
              <p>立即登入</p>
            </button>
          </v-form>
          <div class="mb-3 d-flex justify-content-between">
            <p class="mt-2 text-start text-primary">
              <RouterLink to="/memberForget">忘記密碼</RouterLink>
            </p>
            <p class="mt-2 text-end">
              還沒有帳號嗎？前往
              <RouterLink to="/memberSignUp" class="text-decoration-underline text-primary fw-bold"
                >註冊</RouterLink
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

<script>
import { googleTokenLogin } from 'vue3-google-login'
import Swal from 'sweetalert2'
// json-server網址
const serverUrl = 'https://greensheep-json-server.onrender.com'

export default {
  data() {
    return {
      user: {},
      userInfo: {},
      GOOGLECLIENT: '780150754854-h5d15n56b8clqorddealcei20qcv17dd.apps.googleusercontent.com',
      googleToken: null,
      initCount: 0,
      checkEyeState: false,
      isActive: false
    }
  },
  methods: {
    // 信箱規則
    emailRule(value) {
      const email = /^[\w.-]+@(gmail\.com|yahoo\.com\.tw)$/
      return email.test(value) ? true : '請輸入Gmail/Yahoo帳號'
    },
    // 密碼規則
    passwordRule(value) {
      let password = /^(?!.*\d{6,})(?!.*(.)\1{4,}).{6,12}$/
      if (value !== undefined && password.test(value)) {
        this.checkEyeState = false
        return true
      } else {
        if (this.initCount) {
          this.checkEyeState = true
        }
        this.initCount += 1
        return `請輸入正確密碼`
      }
    },
    // 一般登入
    onSubmit() {
      this.$http
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
            title: '帳號或密碼錯誤，請重新登入',
            showConfirmButton: false,
            timer: 1500
          })
        })
    },
    // google登入
    accessTokenLogin() {
      googleTokenLogin({
        clientId: this.GOOGLECLIENT
      }).then((response) => {
        this.googleToken = response.access_token
        this.fetchContactInfo()
      })
    },
    async fetchContactInfo() {
      try {
        const response = await this.$http.get('https://www.googleapis.com/oauth2/v1/userinfo', {
          headers: {
            Authorization: `Bearer ${this.googleToken}`
          }
        })

        // 帶路由參數進去OtherLoginView
        this.$router.push({
          path: '/loginLoading',
          query: { googleEmail: response.data.email }
        })
      } catch (error) {
        console.error('獲取聯絡人訊息時出錯:', error)
      }
    },
    // Line 登入
    lineLoginEvent() {
      let clientID = '2003862374'
      // 會使用到encodeURIComponent是因為hash模式
      let redirectUri = encodeURIComponent(
        'https://ritayang0811.github.io/greensheep/#/loginLoading'
      )
      let URL = 'https://access.line.me/oauth2/v2.1/authorize?'
      // 必填
      URL += 'response_type=code' // 希望LINE回應什麼 ，目前只有code能選
      URL += `&client_id=${clientID}` // 你的頻道ID
      URL += `&redirect_uri=${redirectUri}` // 要接收回傳訊息的網址
      URL += '&state=123456789' // 用來防止跨站請求的 之後回傳會傳回來給你驗證 通常設亂數 這邊就先放123456789
      URL += '&scope=openid%20profile%20email' // 使用者要求的權限，目前就三個能選 openid profile email
      // 選填
      URL += '&nonce=helloWorld'
      URL += '&prompt= consent'
      URL += '&max_age=3600'
      URL += '&ui_locales=zh-TW'
      URL += '&bot_prompt=normal'
      window.open(URL, '_self') // 轉跳到該網址
    }
  }
}
</script>
