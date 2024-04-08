<template>
  <div class="d-flex flex-column align-items-center py-15 pt-40">
    <div>
      <h2 class="fs-2">WELCOME</h2>
      <p class="text-primary">Discover Your Unique Elegance</p>
    </div>
    <div class="w-50 member-content">
      <!-- 登入輸入內容 -->
      <div class="d-flex flex-column align-items-center py-8">
        <h1 class="fs-1 mb-8">會員註冊</h1>
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
          <v-form
            ref="form"
            class="member-form"
            v-slot="{ errors }"
            @submit="onSubmit"
            v-if="signupState"
          >
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
              <label for="name" class="z-0">請輸入暱稱</label>
              <error-message name="暱稱" class="invalid-feedback text-start"></error-message>
            </div>
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
                :type="passwordActive ? 'text' : 'password'"
                class="form-control"
                :class="{ 'is-invalid': errors['password'] }"
                id="password"
                aria-describedby="passwordHelp"
                placeholder="請輸入6-12字英數混合密碼"
                :rules="passwordRule"
                v-model="user.password"
              ></v-field>
              <label for="password" class="z-0">請輸入6-12字英數混合密碼</label>
              <i
                class="checkByEye"
                :class="[
                  passwordActive ? 'bi-eye' : 'bi-eye-slash',
                  'bi',
                  { 'checkByEye-alert': checkEyeState }
                ]"
                @click="passwordActive = !passwordActive"
              ></i>
              <error-message name="password" class="invalid-feedback text-start"></error-message>
            </div>
            <!-- 再次確認密碼 -->
            <div class="form-floating mb-3">
              <v-field
                name="confirmPassword"
                :type="confirmActive ? 'text' : 'password'"
                class="form-control"
                :class="{ 'is-invalid': errors['confirmPassword'] }"
                id="confirmPassword"
                aria-describedby="passwordHelp"
                placeholder="請再次確認密碼"
                :rules="confirmPasswordRule"
                v-model="user.confirmPassword"
              />
              <label for="password" class="z-0">請再次確認密碼</label>
              <i
                class="checkByEye"
                :class="[
                  confirmActive ? 'bi-eye' : 'bi-eye-slash',
                  'bi',
                  { 'checkByEye-alert': confirmEyeState }
                ]"
                @click="confirmActive = !confirmActive"
              ></i>
              <error-message
                name="confirmPassword"
                class="invalid-feedback text-start"
              ></error-message>
            </div>
            <!-- 生日 -->
            <div class="mb-3">
              <p class="mb-1 text-primary">
                ✦ 請輸入您的生日，當月贈送消費金 ✦
                <span class="ms-2 text-danger">請注意：確認後不可更改</span>
              </p>

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
            <!-- 訂閱最新消息 -->
            <div class="mb-3 form-check">
              <!-- 訂閱最新消息 -->

              <input type="checkbox" class="form-check-input me-1" id="subNews" checked />
              <div class="text-start">
                <label class="form-check-label" for="subNews">訂閱最新消息</label>
              </div>
            </div>
            <!-- 確認使用條款和隱私權政策 -->
            <div class="mb-3 form-check">
              <input
                name="agreePolicy"
                type="checkbox"
                class="form-check-input"
                id="agreePolicy"
                aria-describedby="policyHelp"
                @click="policyRule('驗證')"
              />
              <!-- 勾選:{{ policy.Check }} -->
              <div class="text-start">
                <label class="form-check-label">
                  本人同意
                  <a class="text-decoration-underline" @click.prevent="openModal('條款')"
                    >網站服務條款</a
                  >
                  及
                  <a class="text-decoration-underline" @click.prevent="openModal('政策')"
                    >隱私權政策</a
                  ></label
                >
              </div>
              <div class="text-start alertText" v-if="alertText.length">{{ alertText }}</div>
            </div>

            <button
              type="submit"
              class="d-flex justify-content-center align-items-center btn btn-primary sub-button"
            >
              <div class="button-img-box me-1">
                <img src="@/assets/images/GreenSheep.png" alt="圖像" />
              </div>
              <p>立即註冊</p>
            </button>
          </v-form>
          <!-- 驗證碼輸入 -->
          <Verification
            v-if="securityState"
            :verification-code="codeUpdate"
            :userInfo="user"
          ></Verification>
          <!-- 回到登入 -->
          <p class="mt-2 text-end">
            已經有帳號了嗎？前往<RouterLink
              to="/memberLogin"
              class="text-decoration-underline text-primary fw-bold"
              >登入</RouterLink
            >
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 網站服務條款與政策Modal -->
  <div
    class="modal fade"
    id="policyModal"
    tabindex="-1"
    aria-labelledby="policyModalLabel"
    aria-hidden="true"
    ref="policyModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" v-if="policy.DOCState">網站服務條款</h1>
          <h1 class="modal-title fs-5" v-else>隱私權政策</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-start">
          <!-- 網站服務條款 -->
          <div v-if="policy.DOCState" class="p-4">
            <p>
              歡迎光臨GreenSheep！我們是一個專注於提供精美飾品的電子商務平台。在使用本網站前，請詳細閱讀以下條款，使用本網站即表示您同意遵守以下規定。
            </p>
            <br />
            <ul>
              <li>
                使用條款：您同意僅以合法目的使用本網站，不得從事任何違法或損害他人權益的活動。
              </li>
              <li>
                責任限制：GreenSheep對於因使用本網站而引起的任何直接、間接、附帶或特別的損失不承擔責任。
              </li>
              <li>
                商品信息：我們努力確保在網站上提供的所有商品信息準確無誤，但不能保證所有信息都是完整和最新的。
              </li>
              <li>使用者責任：您應對您的帳戶和密碼保密，並對在您的帳戶下的所有活動負責。</li>
              <li>
                知識產權：本網站上的所有內容，包括但不限於文字、圖像、標誌，均受版權和商標法保護。
              </li>
              <li>其他條款：本條款未涉及的其他問題，將遵循GreenSheep的一般業務實踐和標準。</li>
            </ul>

            感謝您選擇GreenSheep作為您購買飾品的平台，我們將竭盡所能為您提供最佳的購物體驗！
          </div>
          <!-- 隱私權政策 -->
          <div v-else class="p-4">
            <p>
              歡迎您使用GreenSheep網站服務。我們非常重視您的隱私保護，並承諾保護您提供的個人信息。請您在使用本網站前仔細閱讀以下隱私條款內容：
            </p>
            <br />
            <ul>
              <li>
                收集信息：當您註冊帳戶、下訂單或與我們聯繫時，我們可能收集您的姓名、聯繫方式、郵寄地址等個人信息。
              </li>
              <li>
                信息用途：我們收集的信息將用於處理訂單、提供客戶服務、改善網站體驗以及向您發送促銷活動和產品信息。
              </li>
              <li>
                信息保護：我們採取合理的安全措施來保護您的個人信息，防止未經授權的訪問、使用或泄露。
              </li>
              <li>
                信息分享：我們不會未經您的同意將您的個人信息分享給第三方，除非為了履行訂單或遵守法律法規的要求。
              </li>
              <li>
                Cookie使用：我們可能使用Cookie技術收集和存儲有關您訪問本網站的信息，以改善您的網站體驗。
              </li>
              <li>隱私政策更新：我們保留隨時更新隱私條款的權利，更新後的條款將在本網站上發布。</li>
            </ul>

            使用GreenSheep即表示您同意本隱私條款的條件和規定。如果您對此有任何疑問或需要進一步說明，請隨時聯繫我們。
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.alertText {
  font-size: 0.875rem;
  color: #dc3545;
}
</style>

<script>
import Modal from 'bootstrap/js/dist/modal'
import Email from '@/utils/smtp'
import { googleTokenLogin } from 'vue3-google-login'
import axios from 'axios'
import Verification from '@/components/VerifiCation.vue'
import Swal from 'sweetalert2'

// json-server網址
const serverUrl = 'https://greensheep-json-server.onrender.com'

export default {
  components: { Verification: Verification },
  data() {
    return {
      user: {},
      date: new Date(),
      birthday: '',
      policy: {
        DOCState: true,
        Modal: '',
        Check: false
      },
      alertText: '',
      signupState: true,
      securityState: false,
      GOOGLECLIENT: '780150754854-h5d15n56b8clqorddealcei20qcv17dd.apps.googleusercontent.com',
      googleToken: null,
      initCount: 0,
      confirmCount: 0,
      checkEyeState: false,
      confirmEyeState: false,
      passwordActive: false,
      confirmActive: false
    }
  },
  methods: {
    blurFunction() {
      if (this.date === null) {
        this.date = new Date()
      }
    },
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
        this.initCount = 0
        return true
      } else {
        if (this.initCount) {
          this.checkEyeState = true
        }
        this.initCount += 1
        return `請輸入正確密碼`
      }
    },
    // 確認密碼規則
    confirmPasswordRule(value) {
      if (value === this.user.password && value) {
        this.confirmEyeState = false
        this.confirmCount = 0
        return true
      } else {
        if (this.confirmCount) {
          this.confirmEyeState = true
        }
        this.confirmCount += 1
        return '請輸入相同密碼'
      }
    },
    // 生日
    format() {
      this.user.birthday = `${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}`

      return `您的生日: ${this.user.birthday}`
    },
    // 條款與政策小視窗
    openModal(state) {
      state === '條款' ? (this.policy.DOCState = true) : (this.policy.DOCState = false)

      this.policy.Modal.show()
    },
    policyRule(stateText) {
      if (!this.policy.Check && stateText === '註冊') {
        this.alertText = '請詳閱條款和政策'
      } else if (stateText === '驗證') {
        this.policy.Check = !this.policy.Check
        this.alertText = ''
        this.policy.Check ? true : (this.alertText = '請詳閱條款和政策')
      }
    },
    async checkAccounts(email) {
      try {
        email = email.toLowerCase()
        const response = await axios.get(`${serverUrl}/users/?email=${email}`)

        return response.data.length !== 0
      } catch (error) {
        console.log(error.response.data)
      }
    },
    async onSubmit() {
      this.policyRule('註冊')
      if (await this.checkAccounts(this.user.email)) {
        Swal.fire({
          icon: 'warning',
          title: '此信箱已經註冊過囉!',
          showConfirmButton: false,
          timer: 2000
        })
        this.$router.push({ name: 'MemberLogin' })
      } else {
        if (this.policy.Check) {
          this.signUp()
        }
      }
    },
    signUp() {
      this.user.securityCode = this.securityCode()
      this.signupState = false
      this.securityState = true
      const body = `使用者:${this.user.email}<br/>驗證碼:${this.user.securityCode}<br/>Messages:申請註冊GreenSheep會員<br/> `
      Email.send({
        SecureToken: '0435dc8c-9e69-445a-9569-0d031827457c',
        To: `${this.user.email}`,
        From: 'greensheep0619@gmail.com',
        Subject: '親愛的會員您好，GreenSheep客服中心寄送驗證碼來囉~',
        Body: body
      }).then(() => {
        Swal.fire({
          icon: 'success',
          title: '已發送驗證碼到信箱囉!',
          showConfirmButton: false,
          timer: 2000
        })
      })
    },
    securityCode(length = 5) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let randomCode = ''

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        randomCode += characters.charAt(randomIndex)
      }

      return randomCode
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
        const response = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
          headers: {
            Authorization: `Bearer ${this.googleToken}`
          }
        })

        // 帶路由參數進去OtherLoginView
        this.$router.push({
          path: '/OtherLogin',
          query: { googleEmail: response.data.email, googleName: response.data.name }
        })
      } catch (error) {
        console.error('獲取聯絡人信息時出錯:', error)
      }
    },
    // Line 登入
    lineLoginEvent() {
      let clientID = '2003862374'
      // 會使用到encodeURIComponent是因為hash模式
      let redirectUri = encodeURIComponent('https://ritayang0811.github.io/greensheep/#/OtherLogin')
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
  },
  computed: {
    codeUpdate() {
      return this.user.securityCode
    }
  },
  mounted() {
    this.policy.Modal = new Modal(this.$refs.policyModal)
  }
}
</script>
