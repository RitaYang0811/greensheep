import { defineStore } from 'pinia'
import { toastSuccess, toastError } from "@/utils/sweetalertToast.js"

// 複製文字功能
// copyContent: 要複製的內容
// type: 顯示在提示框的內容，如: 優惠碼、訂單編號、產品編號等自定義內容

export default defineStore('copyTextStore', {
  actions: {
    copyTextMethod(copyContent, type) {
      navigator.clipboard.writeText(copyContent)
        .then(() => {
          toastSuccess(`已複製${type}`)
        })
        .catch(err => {
          toastError(`無法複製${type}: `, err)
        });
    }
  }
})