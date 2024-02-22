<template>
  <div class="d-flex flex-column align-items-center py-15">
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
              <a href="#" class="p-3 google-account"
                ><img src="../../assets/images/google.svg" alt="" />Continue with Google
              </a>
            </li>
            <li class="py-3">
              <a href="#" class="p-3 line-account">
                <img src="../../assets/images/line-messenger.svg" alt="" />

                Continue with Line</a
              >
            </li>
          </ul>

          <p class="d-flex justify-content-center align-items-center py-6 hr-line">or</p>
          <!-- 表單 -->
<<<<<<< HEAD
          <form class="member-form">
            <!-- 信箱 -->
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="E-mail"
                required
              />
            </div>
            <!-- 密碼 -->
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password(需超過6個字元)"
                required
              />
            </div>
            <!-- 再次確認密碼 -->
            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Reconfirm Password(需超過6個字元)"
                required
              />
            </div>
            <!-- 生日 -->
            <div class="mb-3">
              <p class="mb-1">生日(生日當月贈送消費金，確認後不可更改)</p>
              <input
                type="text"
                class="form-control"
                id="datepicker"
                placeholder="請選擇正確出生日期"
=======
          <v-form ref="form" class="member-form" v-slot="{ errors }">
            <!-- 暱稱 -->
            <div class="mb-3">
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
              <error-message name="暱稱" class="invalid-feedback"></error-message>
            </div>
            <!-- 信箱 -->
            <div class="mb-3">
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
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <!-- 密碼 -->
            <div class="mb-3">
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
              <error-message name="password" class="invalid-feedback"></error-message>
            </div>
            <!-- 再次確認密碼 -->
            <div class="mb-3">
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
              <error-message name="confirmPassword" class="invalid-feedback"></error-message>
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
>>>>>>> 469e250b76837bb6f3f3d7c458323dfab7f9d2c6
              />
            </div>
            <div class="mb-3 form-check">
              <!-- 訂閱最新消息 -->
              <div class="d-flex">
<<<<<<< HEAD
                <input type="checkbox" class="form-check-input me-1" id="exampleCheck1" checked />
                <label class="form-check-label" for="exampleCheck1">訂閱最新消息</label>
              </div>
              <!-- 確認使用條款和隱私權政策 -->
              <div class="d-flex">
                <input type="checkbox" class="form-check-input me-1" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">
                  本人同意<a href="#" class="text-decoration-underline">網站服務條款</a>及<a
                    href="#"
                    class="text-decoration-underline"
=======
                <input type="checkbox" class="form-check-input me-1" id="subNews" checked />
                <label class="form-check-label" for="subNews">訂閱最新消息</label>
              </div>
              <!-- 確認使用條款和隱私權政策 -->
              <div class="d-flex">
                <input type="checkbox" class="form-check-input me-1" id="agreePolicy" />
                <label class="form-check-label" for="agreePolicy">
                  本人同意
                  <a href="#" class="text-decoration-underline" @click.prevent="openModal('條款')"
                    >網站服務條款</a
                  >
                  及
                  <a href="#" class="text-decoration-underline" @click.prevent="openModal('政策')"
>>>>>>> 469e250b76837bb6f3f3d7c458323dfab7f9d2c6
                    >隱私權政策</a
                  ></label
                >
              </div>
            </div>
<<<<<<< HEAD
            <button
=======
            <!-- <button
>>>>>>> 469e250b76837bb6f3f3d7c458323dfab7f9d2c6
              type="button"
              class="d-flex justify-content-center align-items-center btn btn-primary sub-button"
            >
              <div class="button-img-box me-1">
                <img src="../../assets/images/GreenSheep.png" alt="圖像" />
              </div>
              <p>立即註冊</p>
<<<<<<< HEAD
            </button>
          </form>
=======
            </button> -->
          </v-form>
>>>>>>> 469e250b76837bb6f3f3d7c458323dfab7f9d2c6
          <!-- 回到登入 -->
          <p class="mt-1 text-end">
            已經有帳號了嗎？前往<router-link to="/memberLogin" class="text-decoration-underline"
              >登入</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
<<<<<<< HEAD
</template>

<style scoped></style>
=======
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
          <h1 class="modal-title fs-5" v-if="policyState">網站服務條款</h1>
          <h1 class="modal-title fs-5" v-else>隱私權政策</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-if="policyState">
            歡迎光臨GreenSheep！我們是一個專注於提供精美飾品的電子商務平台。在使用本網站前，請詳細閱讀以下條款，使用本網站即表示您同意遵守以下規定。<br />
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
          <div v-else>
            歡迎您使用GreenSheep網站服務。我們非常重視您的隱私保護，並承諾保護您提供的個人信息。請您在使用本網站前仔細閱讀以下隱私條款內容：<br />
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

<style scoped></style>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  data() {
    return {
      user: {},
      date: new Date(),
      birthday: {},
      policyState: true,
      policyModal: ''
    }
  },
  methods: {
    blurFunction() {
      if (this.date === null) {
        this.date = new Date()
      }
    },
    emailRule(value) {
      const email = /^[\w\.-]+@(gmail\.com|yahoo\.com\.tw)$/
      return email.test(value) ? true : '請輸入Gmail/Yahoo帳號'
    },
    passwordRule(value) {
      let password = /^(?!.*\d{6,})(?!.*(.)\1{4,}).{6,12}$/
      return value !== undefined && password.test(value) ? true : `請輸入正確密碼`
    },
    confirmPasswordRule(value) {
      return value === this.user.password ? true : '請輸入相同密碼'
    },
    format() {
      this.birthday.day = this.date.getDate()
      this.birthday.month = this.date.getMonth() + 1
      this.birthday.year = this.date.getFullYear()

      return `您的生日: ${this.birthday.year}/${this.birthday.month}/${this.birthday.day}`
    },
    openModal(state) {
      state === '條款' ? (this.policyState = true) : (this.policyState = false)

      this.policyModal.show()
    }
  },
  mounted() {
    // console.log('this.$refs', this.$refs)
    this.policyModal = new Modal(this.$refs.policyModal)
  }
}
</script>
>>>>>>> 469e250b76837bb6f3f3d7c458323dfab7f9d2c6
