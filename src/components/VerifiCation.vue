<template>
  <v-form ref="form" class="member-form" v-slot="{ errors }">
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
        v-model="securityInput"
      ></v-field>
      <label for="securityCode" class="z-0">請輸入驗證碼</label>
      <error-message name="驗證碼" class="invalid-feedback text-start"></error-message>
    </div>

    <button
      type="button"
      class="d-flex justify-content-center align-items-center btn btn-primary sub-button"
      @click="checkCode"
    >
      <div class="button-img-box me-1">
        <img src="../assets/images/GreenSheep.png" alt="圖像" />
      </div>

      <p>驗證註冊</p>
    </button>
  </v-form>
</template>

<script>
import Swal from 'sweetalert2'
// json-server網址
const serverUrl = 'https://greensheep-json-server.onrender.com'
export default {
  props: ['verificationCode', 'userInfo'],
  data() {
    return {
      securityInput: null,
      user: {}
    }
  },
  methods: {
    checkCode() {
      if (this.securityInput === this.verificationCode) {
        Swal.fire({
          icon: 'success',
          title: '驗證碼輸入成功!',
          showConfirmButton: false,
          timer: 1500
        })
        this.onSubmit()
        return
      }
      Swal.fire({
        icon: 'warning',
        title: '驗證碼輸入錯誤!',
        showConfirmButton: false,
        timer: 1500
      })
    },
    onSubmit() {
      this.user = {
        nickName: this.userInfo.name,
        email: this.userInfo.email.toLowerCase(),
        password: this.userInfo.password,
        birthday: this.userInfo.birthday,
        favorites: [],
        location: '',
        phone: ''
      }

      this.$http
        .post(`${serverUrl}/users`, this.user)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: '恭喜註冊成功成為綠羊會員!',
            showConfirmButton: false,
            timer: 2000
          }),
            this.$router.push({ name: 'MemberLogin' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
