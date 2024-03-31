<template>
  <div class="container-fluid">
    <div class="row align-items-center vh-100">
      <div class="col col-sm-8 col-md-6 col-xl-3 mx-auto text-end">
        <h1 class="fs-2 mb-4 text-center">後台登入</h1>
        <RouterLink to="/" class="d-inline-block mb-3">回前台</RouterLink>
        <VForm @submit="login" class="text-start" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <VField
              name="email"
              type="email"
              rules="required|email"
              class="form-control border-1"
              :class="{ 'is-invalid': errors['email'] }"
              id="email"
              placeholder="name@example.com"
              v-model="user.username"
            />
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
            <button
              type="button"
              class="btn btn-outline-primary mt-3 ms-auto"
              @click="copyTextMethod('greensheep@gmail.com', '帳號了，快去貼上吧')"
            >
              點我偷偷複製帳號～噓
            </button>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">password</label>
            <VField
              name="密碼"
              type="password"
              rules="required"
              class="form-control border-1"
              :class="{ 'is-invalid': errors['密碼'] }"
              id="password"
              placeholder="password"
              v-model="user.password"
            />
            <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
            <button
              type="button"
              class="btn btn-outline-primary mt-3 ms-auto"
              @click="copyTextMethod('greensheep', '密碼，快去貼上吧')"
            >
              我也想知道密碼
            </button>
          </div>
          <div class="text-end">
            <button type="submit" class="btn btn-primary">登入</button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
  <VueLoading :active="isLoading" />
</template>

<script>
import { toastSuccess, toastError } from '@/utils/sweetalertToast.js'
import { mapActions } from 'pinia'
import copyTextStore from '@/stores/copyTextStore'

const { VITE_APP_API_URL } = import.meta.env

export default {
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    ...mapActions(copyTextStore, ['copyTextMethod']),
    login() {
      this.isLoading = true
      const url = `${VITE_APP_API_URL}/admin/signin`
      const data = this.user

      this.$http
        .post(url, data)
        .then((res) => {
          // 取得到期時間和 token 存到 cookie
          const { expired, token } = res.data
          document.cookie = `AdminToken=${token}; expires=${new Date(expired)}`

          toastSuccess('歡迎登入！帳號密碼是我們的小秘密喔＾＾')
          this.$router.push('/admin/home')
        })
        .catch((err) => {
          toastError(err.response.data.message)
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>
