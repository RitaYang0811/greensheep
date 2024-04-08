<template>
  <div class="text-center my-50 text-primary fs-3">
    <p>
      該頁將在 <span>{{ count }}</span> 秒後自動跳轉
    </p>
    <p>
      或是可以直接
      <RouterLink to="/admin/home" class="link-underline-primary fw-bold text-dark">
        點我 </RouterLink
      >跳轉
    </p>
  </div>
</template>

<script>
import lineNotifyStore from '@/stores/lineNotifyStore.js'
import { mapActions } from 'pinia'

export default {
  data() {
    return {
      count: 6
    }
  },
  methods: {
    ...mapActions(lineNotifyStore, [
      'lineGetOrder',
      'lineGetAccessToken',
      'sendLineNotification',
      'sendNewOrderNotification'
    ]),
    // 從URL中獲取授權碼
    getCode() {
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get('code')

      if (code) {
        this.lineGetAccessToken(code)
      }
    },

    // 倒數功能
    countDown() {
      // 執行一次，count減1
      this.count--
      if (this.count === 0) {
        this.$router.push('/admin/home')
      }
      // 每秒執行一次
      setTimeout(() => {
        this.countDown()
      }, 1000)
    }
  },
  mounted() {
    this.getCode()

    this.countDown()
  }
}
</script>

<style></style>
