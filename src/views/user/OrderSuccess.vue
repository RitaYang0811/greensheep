<template>
  <div class="container py-20 pt-40">
    <!-- progress -->
    <div>
      <div class="p-10 d-flex justify-content-center" style="z-index: 10">
        <div class="">
          <div class="btn btn-outline-primary border-2 rounded-circle bg-primary pe-none">
            <i class="bi bi-check-lg fs-2 text-light"></i>
          </div>
          <p class="mt-3 fs-6 text-primary">確認購買明細</p>
        </div>
        <div class="mt-5 bg-primary border border-greyD4" style="height: 8px; width: 35%"></div>
        <div class="">
          <div class="btn btn-outline-primary border-2 rounded-circle bg-primary pe-none">
            <i class="bi bi-check-lg fs-2 text-light"></i>
          </div>
          <p class="mt-3 fs-6 text-primary">付款資料填寫</p>
        </div>
        <div class="mt-5 bg-primary border border-greyD4" style="height: 8px; width: 35%"></div>
        <div class="">
          <div class="btn btn-outline-primary border-2 rounded-circle bg-primary pe-none">
            <i class="bi bi-check-lg fs-2 text-light"></i>
          </div>
          <p class="mt-3 fs-6 text-primary">訂單完成</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 完成訂單 -->
  <div class="container-fluid bg-light py-20">
    <span class="material-icons" style="font-size: 80px; color: rgb(70, 135, 4)">
      card_giftcard
    </span>
    <h2 class="fs-3 my-10">恭喜你完成訂單</h2>
    <RouterLink to="/products/全部商品%20ALL" class="fs-3 my-10 underline text-primary">
      繼續選購</RouterLink
    >
  </div>

  <div class="container text-primary mb-20 py-20">
    <p class="fs-5 mb-4">
      歡迎隨時至
      <RouterLink to="/member/home" style="color: #990000">會員中心 </RouterLink>
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
    ...mapActions(lineNotifyStore, ['sendNewOrderNotification']),
    //從localStorage 獲取token
    sendNewOrder() {
      const accessToken = localStorage.getItem('accessToken')

      if (accessToken) {
        this.sendNewOrderNotification(accessToken)
      }
    }
  },
  mounted() {
    this.sendNewOrder()
  }
}
</script>
