<template>
  <h1 class="fs-3 fs-lg-2 text-start mb-6 fw-bold">會員資料</h1>

  <VForm
    @submit="updateUser()"
    v-slot="{ errors }"
    action=""
    class="py-8 border border-1 border-primary w-100 text-start"
    style="border-radius: 30px 0"
  >
    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="email" class="text-primary me-3 fs-9 fs-md-6 w-10">信箱：</label>
      <input
        type="email"
        class="form-control d-inline-block p-2 flex-grow-1"
        id="email"
        value="greensheep@google.com"
        disabled
        v-model="user.email"
      />
    </div>
    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="birthday" class="text-primary me-3 fs-9 fs-md-6 w-10">生日：</label>
      <input
        type="text"
        class="form-control d-inline-block p-2 flex-grow-1"
        id="birthday"
        value="2000-01-01"
        disabled
        v-model="user.birthday"
      />
    </div>
    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="pwd" class="text-primary me-3 fs-9 fs-md-6 w-10">密碼：</label>
      <input
        type="password"
        class="form-control d-inline-block p-2 flex-grow-1"
        id="pwd"
        value="000000"
        v-model="user.password"
        disabled
      />
    </div>
    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="nickname" class="text-primary me-3 fs-9 fs-md-6 w-10">暱稱：</label>
      <div class="w-100">
        <v-field
          id="nickname"
          name="姓名"
          type="text"
          class="form-control d-inline-block p-2 flex-grow-1 border-0"
          :class="{ 'is-invalid': errors['姓名'] }"
          rules="required"
          v-model="user.nickName"
        ></v-field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>
    </div>

    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="address" class="text-primary me-3 fs-9 fs-md-6 w-10">地址：</label>
      <div class="w-100">
        <v-field
          id="address"
          name="地址"
          type="text"
          class="form-control d-inline-block p-2 flex-grow-1 border-0"
          :class="{ 'is-invalid': errors['地址'] }"
          rules="required"
          v-model="user.location"
        ></v-field>
        <error-message name="地址" class="invalid-feedback d-block"></error-message>
      </div>
    </div>

    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="tel" class="text-primary me-3 fs-9 fs-md-6 w-10">電話：</label>
      <div class="w-100">
        <v-field
          id="tel"
          name="電話"
          type="tel"
          class="form-control d-inline-block p-2 flex-grow-1 border-0"
          :class="{ 'is-invalid': errors['電話'] }"
          rules="required|digits:10"
          v-model="user.phone"
        ></v-field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>
    </div>
    <div class="w-75 px-25 mx-auto d-flex justify-content-end">
      <button type="submit" class="px-4 py-3 fs-7 fs-md-6 bg-primary border-0 text-white">
        修改資料
      </button>
    </div>
  </VForm>
  <VueLoading :active="isLoading" />
</template>

<script>
let loginUser = localStorage.getItem('userInfo')
const loginUserId = JSON.parse(loginUser).id
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      isLoading: false,
      user: {
        email: '',
        password: '',
        id: 0,
        nickName: '',
        birthday: '',
        location: '',
        phone: ''
      }
    }
  },

  methods: {
    getUser() {
      this.isLoading = true
      const url = 'https://greensheep-json-server.onrender.com/users'
      this.$http
        .get(url)
        .then((res) => {
          this.isLoading = false
          res.data.forEach((item) => {
            if (item.id === loginUserId) {
              this.user = item
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //更新使用者資料
    updateUser() {
      const patchUrl = `https://greensheep-json-server.onrender.com/users/${loginUserId}`
      const data = {
        nickName: this.user.nickName,
        location: this.user.location,
        phone: this.user.phone
      }
      this.isLoading = true
      this.$http
        .patch(patchUrl, data)
        .then(() => {
          this.isLoading = false
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '會員資料修改成功',
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },

  mounted() {
    this.getUser()
  }
}
</script>
