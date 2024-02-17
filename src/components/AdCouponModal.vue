<template>
<div class="modal fade" ref="adCouponCompModal" role="dialog">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header py-4 px-6">
        <h2 class="modal-title fs-4">
          <template v-if="isNew">建立優惠券</template>
          <template v-else>編輯優惠券</template>
        </h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body py-4 px-6">
        <div v-if="loadingStatus.loadingGetCoupon" class="d-flex justify-content-center align-items-center" style="min-height: 360px;">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <form v-else class="text-start">
          <h3 class="fs-5 mb-3">折扣內容</h3>
          <div class="mb-3">
            <label for="couponCode" class="form-label fs-6 mb-3">優惠碼</label>
            <input type="text" class="form-control" id="couponCode" placeholder="設定 12 個字元以內的英文字母和數字" v-model="couponData.code">
          </div>
          <div class="mb-3">
            <p class="mb-3 fs-6">優惠方式</p>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label mb-2" for="flexRadioDefault1">
                訂單金額折抵
              </label>
              <div class="d-flex flex-column gap-2">
                <p class="fs-8">消費滿 NT$</p>
                <input type="number" class="form-control" placeholder="設定金額">
                <p class="fs-8">折抵金額 NT$</p>
                <input type="number" class="form-control" placeholder="設定金額">
              </div>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label mb-2" for="flexRadioDefault2">
                訂單折扣
              </label>
              <div class="d-flex flex-column gap-2">
                <p class="fs-8">消費滿 NT$</p>
                <input type="number" class="form-control" placeholder="設定金額">
                <p class="fs-8">折扣</p>
                <select class="form-select">
                  <option value="">請選擇折扣</option>
                  <option v-for="discountOption in discountsOption" :key="discountOption" value="discountOption">{{ discountOption }} 折</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="couponCode" class="form-label fs-6 mb-3">開始日期</label>
            <VueDatePicker v-if="isNew" v-model="nowDate" :enable-time-picker="false" :format="format" model-type="timestamp" />
            <VueDatePicker v-else v-model="couponData.start_date" :enable-time-picker="false" :format="format" model-type="timestamp" />
          </div>
          <div class="mb-3">
            <label for="couponCode" class="form-label fs-6 mb-3">結束日期</label>
            <input type="text" class="form-control" id="couponCode" placeholder="選擇日期">
          </div>
        </form>
        {{ couponData }}
        {{ isNew }}
      </div>
      <div class="modal-footer py-4 px-6">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" :disabled="loadingStatus.loadingGetCoupon">取消</button>
        <button type="button" class="btn btn-primary" :disabled="loadingStatus.loadingGetCoupon">確定</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import { dateFormat } from '@/utils/dateFormat.js'
import { unixToDate } from '@/utils/unixToDate.js'

export default {
  props: ['coupon', 'isNew', 'loadingStatus'],
  data() {
    return {
      modal: '',
      couponData: '',
      nowDate: new Date()
    }
  },
  methods: {
    openModal() {
      this.modal.show()
    },
    closeModal() {
      this.modal.hide()
    },
    unixToDate(unix) {
      const unixMs = unix * 1000
      return unixToDate(unixMs)
    },
    format(date) {
      return dateFormat(date)
    },
  },
  watch: {
    date() {
      console.log(this.date)
    },
    coupon() {
      this.couponData = { ...this.coupon }
      this.couponData.start_date *= 1000 
    }
  },
  computed: {
    // 折扣 option
    discountsOption() {
      const discounts = []
      // 95 折 ~ 1 折
      for(let i = 95; i > 5; i-=5) {
        i % 10 ? discounts.push(i) : discounts.push(i / 10)
      }
      return discounts
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.adCouponCompModal,{
      backdrop: false
    })
  }
}
</script>