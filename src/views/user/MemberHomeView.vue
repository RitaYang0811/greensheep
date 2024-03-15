<template>
  <!-- <h1>Member Home Page</h1> -->

  <!-- <nav aria-label="breadcrumb">
    <ol class="breadcrumb mb-7 mb-md-15">
      <li class="breadcrumb-item"><a href="index.html">首頁</a></li>
      <li class="breadcrumb-item active" aria-current="page">
        會員資料
      </li>
    </ol>
  </nav> -->
  <!-- 暱稱、信箱、密碼、生日、最愛 、地址、電話、最愛 -->

  <h1 class="fs-3 fs-lg-2 text-start mb-6 fw-bold">會員資料</h1>
  <form
    action=""
    class="py-8 border border-1 border-primary w-100 text-start"
    style="border-radius: 30px 0"
  >
    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="email" class="text-primary me-3 fs-9 fs-md-6">信箱：</label>
      <input
        type="email"
        class="d-inline-block p-2 flex-grow-1"
        id="email"
        value="greensheep@google.com"
        disabled
        v-model="user.email"
      />
    </div>
    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="birthday" class="text-primary me-3 fs-9 fs-md-6">生日：</label>
      <input
        type="text"
        class="d-inline-block p-2 flex-grow-1"
        id="birthday"
        value="2000-01-01"
        disabled
        v-model="user.birthday"
      />
    </div>
    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="pwd" class="text-primary me-3 fs-9 fs-md-6">密碼：</label>
      <input
        type="password"
        class="d-inline-block p-2 flex-grow-1"
        id="pwd"
        value="000000"
        v-model="user.password"
        disabled
      />
    </div>
    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="nickname" class="text-primary me-3 fs-9 fs-md-6">暱稱：</label>
      <input
        type="text"
        class="d-inline-block p-2 flex-grow-1 border-0"
        id="nickname"
        value="綠羊珠寶鐵粉"
        v-model="user.nickName"
      />
    </div>
    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="address" class="text-primary me-3 fs-9 fs-md-6">地址：</label>
      <input
        type="text"
        class="d-inline-block p-2 flex-grow-1 border-0"
        id="address"
        value="台北市101"
        v-model="user.location"
      />
    </div>
    <div class="d-flex w-75 mb-5 mx-auto align-items-center">
      <label for="tel" class="text-primary me-3 fs-9 fs-md-6">電話：</label>
      <input
        type="tel"
        class="d-inline-block p-2 flex-grow-1 border-0"
        id="tel"
        value="0912345678"
        v-model="user.phone"
      />
    </div>
    <div class="w-75 px-25 mx-auto d-flex justify-content-end">
      <button
        class="px-4 py-3 fs-7 fs-md-6 bg-primary border-0 text-white"
        @click.prevent="updateUser()"
      >
        修改資料
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
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
      let loginUser = localStorage.getItem('userInfo')
      const loginUserId = JSON.parse(loginUser).id
      console.log(loginUserId)
      console.log(JSON.parse(loginUser))

      const url = 'https://greensheep-json-server.onrender.com/users'
      this.$http.get(url).then((res) => {
        console.log(res.data)
        res.data.forEach((item) => {
          if (item.id == loginUserId) {
            this.user = item
          }
        })
        console.log(this.user)
      })
    },

    updateUser() {
      console.log(this.user)
    }
  },

  mounted() {
    this.getUser()
  }
}
</script>

<style lang="scss"></style>
