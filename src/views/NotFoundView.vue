<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="container text-start">
      <div class="row" style="row-gap: 24px;">
        <div class="col-12 col-lg-5 d-flex align-items-center">
          <div class="w-100 px-10 px-md-30 px-lg-10">
            <img
              class="w-100"
              src="@/assets/images/logo-green.svg"
              alt="GreenSheep"
            />
          </div>
        </div>
        <div class="col-12 col-lg-7">
          <div class="d-flex flex-column gap-4">
            <h1 class="fw-bold">404 Not Found</h1>
            <h2 class="fs-5 fs-md-2">很抱歉，您所訪問的頁面不存在。</h2>
            <p>可能原因：</p>
            <ul class="d-flex flex-column gap-2">
              <li>找不到造訪頁面</li>
              <li>輸入網址不正確</li>
              <li>網路訊號問題</li>
            </ul>
            <p class="fs-7 fs-md-6 text-primary">預計將於
              <span class="fs-3">{{ timeout }}</span>
              秒後返回首頁，或
              <RouterLink to="/" class="text-decoration-underline">點此</RouterLink>
              立即跳轉。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        timeout: 6
      }
    },
    methods: {
      count() {
        this.timeout -= 1
        if(this.timeout === 0){
          this.$router.push('/')
        }
        setTimeout(() => {
          this.count();
        }, 1000);
      }
    },
    mounted() {
      this.count()
    }
  }
</script>