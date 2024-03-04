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
      <label for="securityCode">請輸入驗證碼</label>
      <error-message name="驗證碼" class="invalid-feedback text-start"></error-message>
    </div>
    ser:{{ codeUpdate }} <br />
    user: {{ userInfo }}

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
export default {
  props: ['verificationCode', 'userInfo'],
  data() {
    return {
      securityCode: null,
      securityInput: null
    }
  },
  computed: {
    codeUpdate() {
      return (this.securityCode = this.verificationCode)
    }
  },
  methods: {
    checkCode() {
      if (this.securityInput === this.securityCode) {
        alert('驗證成功')
        this.$router.push({ name: 'MemberLogin' })
        return
      }
      alert('驗證碼輸入錯誤')
    }
  }
}
</script>
