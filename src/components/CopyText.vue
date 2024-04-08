<template>
  <a class="ms-1" @click.prevent="copyText">
    <i class="bi bi-copy"></i>
  </a>
</template>
<script>
// 複製文字功能
import { mapActions } from 'pinia'
import copyTextStore from '@/stores/copyTextStore.js'

// copyContent: 要複製的內容
// type: 顯示在提示框的內容，如: 優惠碼、訂單編號、產品編號等自定義內容

export default {
  props: ['copyContent', 'type'],
  methods: {
    ...mapActions(copyTextStore, ['copyTextMethod']),
    copyText() {
      this.copyTextMethod(this.copyContent, this.type)
    }
  }
}
</script>
