<template>
  <div class="d-flex flex-column align-items-center py-15">
    <div>
      <h2 class="fs-2">WELCOME</h2>
      <p class="text-primary">Discover Your Unique Elegance</p>
    </div>
    <div class="w-50 member-content">
      <div class="d-flex flex-column align-items-center py-8">
        <h1 class="fs-1 mb-8">會員忘記密碼</h1>
        <v-form ref="form" class="member-form" v-slot="{ errors }">
          <!-- 第一步:發送驗證碼 -->
          <div v-if="stepState.first">
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
              <label for="email">請輸入Email</label>
              <error-message name="email" class="invalid-feedback text-start"></error-message>
            </div>

            <button
              type="button"
              class="d-flex justify-content-center align-items-center btn btn-primary sub-button"
              @click="sendCode"
            >
              <div class="button-img-box me-1">
                <img src="../../assets/images/GreenSheep.png" alt="圖像" />
              </div>

              <p>發送驗證碼</p>
            </button>
          </div>
          <!-- 第二步:驗證碼輸入 -->
          <div v-if="stepState.second">
            <!-- 驗證碼 -->
            <div class="form-floating mb-3">
              <v-field
                id="securityCode"
                name="驗證碼"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['驗證碼'] }"
                placeholder="請輸入驗證碼"
                rules="required"
                v-model="inputCode"
              ></v-field>
              <label for="securityCode">請輸入驗證碼</label>
              <error-message name="驗證碼" class="invalid-feedback text-start"></error-message>
            </div>

            <button
              type="button"
              class="d-flex justify-content-center align-items-center btn btn-primary sub-button"
              @click="checkCode"
            >
              <div class="button-img-box me-1">
                <img src="../../assets/images/GreenSheep.png" alt="圖像" />
              </div>

              <p>送出驗證碼</p>
            </button>
          </div>

          <!-- 第三步:重設密碼 -->
          <div v-if="stepState.third">
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
                v-model="confirmPassword"
              />
              <label for="password">請再次確認密碼</label>
              <error-message
                name="confirmPassword"
                class="invalid-feedback text-start"
              ></error-message>
            </div>

            <button
              type="button"
              class="d-flex justify-content-center align-items-center btn btn-primary sub-button"
              @click="onSubmit"
            >
              <div class="button-img-box me-1">
                <img src="../../assets/images/GreenSheep.png" alt="圖像" />
              </div>

              <p>重設密碼</p>
            </button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import Email from '../../utils/smtp'

// json-server網址
const serverUrl = 'https://greensheep-json-server.onrender.com'
export default {
  data() {
    return {
      securityInput: null,
      user: {},
      userId: 0,
      stepState: {
        first: true,
        second: false,
        third: false
      },
      securityCode: '',
      inputCode: '',
      confirmPassword: ''
    }
  },
  methods: {
    // 第一步
    // 信箱規則
    emailRule(value) {
      const email = /^[\w\.-]+@(gmail\.com|yahoo\.com\.tw)$/
      return email.test(value) ? true : '請輸入Gmail/Yahoo帳號'
    },
    async sendCode() {
      if (await this.checkAccounts()) {
        alert('此帳號沒有註冊過喔!')
        return
      }
      this.sendEmail()
    },
    // 判斷是否已註冊帳號
    async checkAccounts() {
      try {
        const response = await this.$http.get(`${serverUrl}/users/?email=${this.user.email}`)
        if (response.data.length) {
        }
        console.log(response.data)
        return response.data.length === 0
      } catch (error) {
        console.log(error.response.data)
      }
    },
    // 寄送Email
    sendEmail() {
      this.securityCode = this.randomCode()
      const body = `使用者:${this.user.email}<br/>驗證碼:${this.securityCode}<br/>Messages:申請註冊GreenSheep會員<br/> `
      Email.send({
        SecureToken: '0435dc8c-9e69-445a-9569-0d031827457c',
        To: `${this.user.email}`,
        From: 'greensheep0619@gmail.com',
        Subject: '親愛的會員您好，GreenSheep客服中心寄送驗證碼來囉~',
        Body: body
      }).then((message) => {
        alert('已發送驗證碼到信箱囉!')
        this.stepState.first = false
        this.stepState.second = true
      })
    },
    // 驗證碼產生
    randomCode(length = 5) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let randomCode = ''

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        randomCode += characters.charAt(randomIndex)
      }

      return randomCode
    },
    // 第二步
    checkCode() {
      if (this.inputCode === this.securityCode) {
        alert('驗證成功')
        this.stepState.second = false
        this.stepState.third = true
        return
      }
      alert('驗證碼輸入錯誤')
    },
    // 第三步
    // 密碼規則
    passwordRule(value) {
      let password = /^(?!.*\d{6,})(?!.*(.)\1{4,}).{6,12}$/
      return value !== undefined && password.test(value) ? true : `請輸入正確密碼`
    },
    // 確認密碼規則
    confirmPasswordRule(value) {
      return value === this.user.password && value ? true : '請輸入相同密碼'
    },
    onSubmit() {
      console.log(this.user)
      this.$http
        .patch(`${serverUrl}/users`, this.user)
        .then((res) => {
          alert('修改成功囉!')
          this.$router.push({ name: 'MemberLogin' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
