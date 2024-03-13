<template>
  <a href="#" class="ms-1" @click.prevent="copyText">
    <i class="bi bi-copy"></i>
  </a>
</template>
<script>
import { toastSuccess, toastError } from "@/utils/sweetalertToast.js"

export default {
  props: ['copyContent', 'type'],
  methods: {
    // 複製文字
    // copyContent: 要複製的內容
    // type: 顯示在提示框的內容，如: 優惠碼、訂單編號、產品編號等
    copyText() {
      navigator.clipboard.writeText(this.copyContent)
        .then(() => {
          toastSuccess(`已複製${this.type}`)
        })
        .catch(err => {
          toastError(`無法複製${this.type}: `, err)
        });
    }
  }
}
</script>
<style scoped>
</style>
