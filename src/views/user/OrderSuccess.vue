<template>
  <div class="container py-20 pt-40">
    <!-- progress -->
    <div class="mb-30">
      <div class="position-relative m-4 w-75 mx-auto">
        <div class="progress" style="height: 1px">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 100%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <button
          type="button"
          class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill pe-none"
          style="width: 3rem; height: 3rem"
        >
          1
        </button>
        <button
          type="button"
          class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill pe-none"
          style="width: 3rem; height: 3rem"
        >
          2
        </button>
        <button
          type="button"
          class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-primary rounded-pill pe-none"
          style="width: 3rem; height: 3rem"
        >
          3
        </button>
      </div>

      <div class="position-relative mt-15 w-75 mx-auto">
        <p class="position-absolute top-0 start-0 translate-middle text-primary">確認購買明細</p>

        <p class="position-absolute top-0 start-50 translate-middle text-primary">付款資料填寫</p>

        <p class="position-absolute top-0 end-n7 translate-middle text-primary">訂單完成</p>
      </div>
    </div>
  </div>

  <!-- 完成訂單 -->
  <div class="container-fluid bg-light py-20">
    <!-- <span
        class="material-icons"
        style="font-size: 80px; color: rgb(70, 135, 4)"
      >
        task_alt
      </span> -->
    <span class="material-icons" style="font-size: 80px; color: rgb(70, 135, 4)">
      card_giftcard
    </span>
    <h2 class="fs-3 my-10">恭喜你完成訂單</h2>
    <router-link to="/products" class="fs-3 my-10 underline text-primary"> 繼續選購</router-link>
    <button type="button" class="d-block mx-auto mt-4 btn btn-primary" @click="lineGetOrder">
      點我取得出貨通知
    </button>
  </div>

  <div class="container text-primary mb-20 py-20">
    <p class="fs-5 mb-4">
      歡迎隨時至
      <router-link to="/member/home" style="color: #990000">會員中心 </router-link>
      了解訂單最新狀態
    </p>
    <p class="fs-5">
      有任何問題請加入<a href="https://lin.ee/bYROr08" target="_blank" class="underline"
        >官方Line客服</a
      >
    </p>
  </div>
</template>

<script>
import lineNotifyStore from '@/stores/lineNotifyStore'
import { mapActions } from 'pinia'
export default {
  data() {
    return {}
  },
  methods: {
    ...mapActions(lineNotifyStore, ['lineGetOrder', 'lineGetAccessToken', 'sendLineNotification'])
  },
  created() {
    // 從URL中獲取授權碼
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    if (code) {
      this.lineGetAccessToken(code)
    }
  }
}
</script>
