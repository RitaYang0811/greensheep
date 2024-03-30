<template>
<div class="modal fade ad-coupon" ref="adCouponCompModal" role="dialog">
  <div class="modal-dialog modal-dialog-centered">
    <!-- 新增優惠券 -->
    <VForm
      v-if="isNew"
      class="modal-content custom-form"
      ref="couponForm"
      @submit="updateCoupon" v-slot="{ errors,  meta }"
    >
      <div class="modal-header bg-primary py-2 px-3">
        <h2 class="modal-title fs-5 fw-medium text-white">
          建立優惠券
        </h2>
        <a role="button" aria-label="Close" @click.prevent="closeModal">
          <i class="bi bi-x-lg text-white"></i>
        </a>
      </div>
      <div class="modal-body py-4 px-6">
        <div
          v-if="loadingStatus.loadingGetCoupon"
          class="d-flex justify-content-center align-items-center"
          style="min-height: 360px;"
        >
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div v-else class="text-start">
          <div class="mb-3">
            <div class="d-flex justify-content-between">
              <label for="couponCode" class="form-label fs-6 mb-3">*優惠碼</label>
              <p>*為必填</p>
            </div>
            <VField
              type="text"
              name="優惠碼"
              rules="required|alpha_num|max:12"
              class="form-control"
              :class="{ 'is-invalid': errors['優惠碼'] }"
              id="couponCode"
              placeholder="設定 12 個字元以內的英文字母和數字"
              v-model="newCouponData.code" />
            <ErrorMessage name="優惠碼" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <p class="mb-3 fs-6">*優惠方式</p>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                id="flexRadioDefault1"
                value="金額折抵"
                v-model="newCouponData.title"
              />
              <label class="form-check-label mb-2" for="flexRadioDefault1">
                訂單金額折抵
              </label>
              <div class="d-flex flex-column gap-2 mb-3">
                <p class="fs-8">
                  <template v-if="newCouponData.title === '金額折抵'">*</template>消費滿 NT$
                </p>
                <div>
                  <VField
                    type="number"
                    @keydown="preventKeydownSpecialKey"
                    @paste="preventPasteSpecialKey"
                    name="金額"
                    :rules="newCouponData.title === '金額折抵' ? 'required|compareWithDiscount:@折抵金額' : ''"
                    class="form-control"
                    :class="{ 'is-invalid': errors['金額'] }"
                    placeholder="設定金額"
                    v-model.number="newCouponData.min_buy_price_by_price"
                    :disabled="newCouponData.title === '訂單折扣'" />
                  <ErrorMessage name="金額" class="invalid-feedback" />
                </div>
                <p class="fs-8">
                  <template v-if="newCouponData.title === '金額折抵'">*</template>折抵金額 NT$
                </p>
                <div>
                  <VField
                    type="number"
                    @keydown="preventKeydownSpecialKey"
                    @paste="preventPasteSpecialKey" 
                    name="折抵金額"
                    :rules="newCouponData.title === '金額折抵' ? 'required|compareWithPrice:@金額' : ''"
                    class="form-control"
                    :class="{ 'is-invalid': errors['折抵金額'] }"
                    placeholder="設定金額"
                    v-model.number="newCouponData.discount_price"
                    :disabled="newCouponData.title === '訂單折扣'" />
                  <ErrorMessage name="折抵金額" class="invalid-feedback" />
                </div>
              </div>
              
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="flexRadioDefault2"
                value="訂單折扣"
                v-model="newCouponData.title"
              />
              <label class="form-check-label mb-2" for="flexRadioDefault2">
                訂單折扣
              </label>
              <div class="d-flex flex-column gap-2">
                <p class="fs-8">
                  <template v-if="newCouponData.title === '訂單折扣'">*</template>消費滿 NT$
                </p>
                <div>
                  <VField
                    type="number"
                    @keydown="preventKeydownSpecialKey"
                    @paste="preventPasteSpecialKey" 
                    name="消費金額"
                    :rules="{ required: newCouponData.title === '訂單折扣' }"
                    class="form-control"
                    :class="{ 'is-invalid': errors['消費金額'] }"
                    placeholder="設定金額"
                    v-model.number="newCouponData.min_buy_price_by_discount"
                    :disabled="newCouponData.title === '金額折抵'" />
                  <ErrorMessage name="消費金額" class="invalid-feedback" />
                </div>
                <p class="fs-8">
                  <template v-if="newCouponData.title === '訂單折扣'">*</template>折扣
                </p>
                <div>
                  <VField
                    as="select"
                    name="折扣"
                    :rules="{ required: newCouponData.title === '訂單折扣' }"
                    class="form-control"
                    :class="{ 'is-invalid': errors['折扣'] }"
                    placeholder="請選擇折扣"
                    v-model="newCouponData.percent"
                    :disabled="newCouponData.title === '金額折抵'"
                  >
                    <option value="">請選擇折扣</option>
                    <option
                      v-for="discountOption in discountsOption"
                      :key="discountOption[0]" :value="discountOption[1]"
                    >
                      {{ discountOption[0] }}
                    </option>
                  </VField>
                  <ErrorMessage name="折扣" class="invalid-feedback" />
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="couponCode" class="form-label fs-6 mb-3">*開始 / 結束日期</label>
            <VField
              name="日期"
              v-model="newCouponData.dates"
              rules="required"
            >
              <VueDatePicker
                v-model="newCouponData.dates"
                input-class-name="border-0"
                class="dp-custom form-control py-0 ps-0 pe-9"
                :class="{ 'is-invalid': errors['日期'] }"
                model-type="timestamp"
                :range="{ partialRange: false }"
                :format="format"
                :enable-time-picker="false"
                locale="zh-TW"
                cancelText="取消"
                selectText="選擇"
                @blur="blurValidate"
              />
            </VField>
            <ErrorMessage name="日期" class="invalid-feedback"/>
          </div>
        </div>
      </div>
      <div class="modal-footer py-4 px-6">
        <button
          type="button"
          class="btn btn-outline-primary border-1"
          :disabled="loadingStatus.loadingGetCoupon"
          @click="closeModal"
        >
        取消
        </button>
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="loadingStatus.loadingGetCoupon || !meta.valid"
        >
          確定
        </button>
      </div>
    </VForm>
    <!-- 編輯優惠券 -->
    <VForm
      v-else
      class="modal-content custom-form"
      ref="couponForm"
      @submit="updateCoupon"
      v-slot="{ errors,  meta }"
    >
      <div class="modal-header bg-primary py-2 px-3">
        <h2 class="modal-title fs-5 fw-medium text-white">
          編輯優惠券
        </h2>
        <a role="button" aria-label="Close" @click.prevent="closeModal">
          <i class="bi bi-x-lg text-white"></i>
        </a>
      </div>
      <div class="modal-body py-4 px-6">
        <div
          v-if="loadingStatus.loadingGetCoupon"
          class="d-flex justify-content-center align-items-center"
          style="min-height: 360px;"
        >
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div v-else class="text-start">
          <div class="mb-3">
            <div class="d-flex justify-content-between">
              <label for="couponCode" class="form-label fs-6 mb-3">*優惠碼</label>
              <p>*為必填</p>
            </div>
            <VField
              type="text"
              name="優惠碼"
              rules="required|alpha_num|max:12"
              class="form-control"
              :class="{ 'is-invalid': errors['優惠碼'] }"
              id="couponCode"
              placeholder="設定 12 個字元以內的英文字母和數字"
              v-model="couponData.code" />
            <ErrorMessage name="優惠碼" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <p class="mb-3 fs-6">*優惠方式</p>
            <div class="form-check mb-3">
              <input
                class="form-check-input"
                type="radio"
                id="flexRadioDefault1"
                value="金額折抵"
                v-model="couponData.title"
              />
              <label class="form-check-label mb-2" for="flexRadioDefault1">
                訂單金額折抵
              </label>
              <div class="d-flex flex-column gap-2 mb-3">
                <p class="fs-8">
                  <template v-if="couponData.title === '金額折抵'">*</template>消費滿 NT$
                </p>
                <div>
                  <VField
                    type="number"
                    @keydown="preventKeydownSpecialKey"
                    @paste="preventPasteSpecialKey" 
                    name="金額"
                    :rules="couponData.title === '金額折抵' ? 'required|compareWithDiscount:@折抵金額' : ''"
                    class="form-control"
                    :class="{ 'is-invalid': errors['金額'] }"
                    placeholder="設定金額"
                    v-model.number="couponData.min_buy_price_by_price"
                    :disabled="couponData.title === '訂單折扣'" />
                  <ErrorMessage name="金額" class="invalid-feedback" />
                </div>
                <p class="fs-8">
                  <template v-if="couponData.title === '金額折抵'">*</template>折抵金額 NT$
                </p>
                <div>
                  <VField
                    type="number"
                    @keydown="preventKeydownSpecialKey"
                    @paste="preventPasteSpecialKey" 
                    name="折抵金額"
                    :rules="couponData.title === '金額折抵' ? 'required|compareWithPrice:@金額' : ''"
                    class="form-control"
                    :class="{ 'is-invalid': errors['折抵金額'] }"
                    placeholder="設定金額"
                    v-model.number="couponData.discount_price"
                    :disabled="couponData.title === '訂單折扣'" />
                  <ErrorMessage name="折抵金額" class="invalid-feedback" />
                </div>
              </div>
              
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                id="flexRadioDefault2"
                value="訂單折扣"
                v-model="couponData.title"
              />
              <label class="form-check-label mb-2" for="flexRadioDefault2">
                訂單折扣
              </label>
              <div class="d-flex flex-column gap-2">
                <p class="fs-8">
                  <template v-if="couponData.title === '訂單折扣'">*</template>消費滿 NT$
                </p>
                <div>
                  <VField
                    type="number"
                    @keydown="preventKeydownSpecialKey"
                    @paste="preventPasteSpecialKey" 
                    name="消費金額"
                    :rules="{ required: couponData.title === '訂單折扣' }"
                    class="form-control"
                    :class="{ 'is-invalid': errors['消費金額'] }"
                    placeholder="設定金額"
                    v-model.number="couponData.min_buy_price_by_discount"
                    :disabled="couponData.title === '金額折抵'" />
                  <ErrorMessage name="消費金額" class="invalid-feedback" />
                </div>
                <p class="fs-8">
                  <template v-if="couponData.title === '訂單折扣'">*</template>折扣
                </p>
                <div>
                  <VField
                    as="select"
                    name="折扣"
                    :rules="{ required: couponData.title === '訂單折扣' }"
                    class="form-control"
                    :class="{ 'is-invalid': errors['折扣'] }"
                    placeholder="請選擇折扣"
                    v-model="couponData.percent"
                    :disabled="couponData.title === '金額折抵'"
                  >
                    <option value="">請選擇折扣</option>
                    <option
                      v-for="discountOption in discountsOption"
                      :key="discountOption[0]" :value="discountOption[1]">{{ discountOption[0] }}
                    </option>
                  </VField>
                  <ErrorMessage name="折扣" class="invalid-feedback" />
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="couponCode" class="form-label fs-6 mb-3">*開始 / 結束日期</label>
            <VField
              name="日期"
              v-model="couponData.dates"
              rules="required"
            >
              <VueDatePicker
                v-model="couponData.dates"
                input-class-name="border-0"
                class="dp-custom form-control py-0 ps-0 pe-9"
                :class="{ 'is-invalid': errors['日期'] }"
                model-type="timestamp"
                :range="{ partialRange: false }"
                :format="format"
                :enable-time-picker="false"
                locale="zh-TW"
                cancelText="取消"
                selectText="選擇"
                @blur="blurValidate"
              />
            </VField>
            <ErrorMessage name="日期" class="invalid-feedback"/>
          </div>
        </div>
      </div>
      <div class="modal-footer py-4 px-6">
        <button
          type="button"
          class="btn btn-outline-primary border-1"
          :disabled="loadingStatus.loadingGetCoupon"
          @click="closeModal"
        >
        取消
        </button>
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="loadingStatus.loadingGetCoupon || !meta.valid"
        >
          確定
        </button>
      </div>
    </VForm>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import { dateFormat } from '@/utils/dateFormat.js'
import { unixToDate } from '@/utils/unixToDate.js'
import { defineRule } from 'vee-validate'

// 自定義規則
// value: 訂單金額, target: 折抵金額
defineRule('compareWithDiscount', (value, [target]) => {
  if(typeof value === 'number' && typeof target === 'number') {
    return value >= target ? true : '折抵金額不可大於訂單金額'
  }
  return true
});

// value: 折抵金額, target: 訂單金額
defineRule('compareWithPrice', (value, [target]) => {
  if(typeof value === 'number' && typeof target === 'number') {
    return value <= target ? true : '折抵金額不可大於訂單金額'
  }
  return true
});

export default {
  props: ['coupon', 'isNew', 'loadingStatus', 'newCoupon'],
  data() {
    return {
      modal: '',
      couponData: '',
      newCouponData: ''
    }
  },
  methods: {
    reset() {
      this.$refs.couponForm.resetForm()
    },
    openModal() {
      this.modal.show();
    },
    closeModal() {
      this.modal.hide();
    },
    unixToDate(unix) {
      // 先轉成毫秒單位再轉換成日期
      const unixMs = unix * 1000;
      return unixToDate(unixMs);
    },
    // 要顯示在畫面上的日期格式
    format(date) {
      const arr = date.map(e => dateFormat(e))
      return `${arr[0] ? arr[0] : '請選擇日期'} 至 ${arr[1] ? arr[1] : '請選擇日期'}`
    },
    // 手動觸發 datepicker 驗證
    blurValidate() {
      this.$refs.couponForm.validateField('日期')
    },
    // 送出新增 / 編輯優惠券的資料
    updateCoupon() {
      if(this.isNew) this.$emit('updateCoupon', this.newCouponData)
      else this.$emit('updateCoupon', this.couponData)
    },
    // 新增優惠券時拷貝初始資料
    resetNewCoupon() {
      this.newCouponData = { ...this.newCoupon }
    },
    // 只可輸入數字、倒退鍵、Tab 鍵或貼上 (避免輸入 + - e E .)
    preventKeydownSpecialKey(event) {
      const { key } = event
      if (!/\d|Backspace|Tab|Control|v/.test(key)) event.preventDefault()
    },
    // 只可貼上一個或多個連續數字
    preventPasteSpecialKey(event) {
      const text = event.clipboardData.getData('text')
      if (!/^\d+$/.test(text)) event.preventDefault()
    }
  },
  watch: {
    // 打開 modal 時，依照類型(新增或刪除)賦予 coupon 對應的 data
    coupon() {
      // 拷貝並將時間戳改成毫秒單位
      this.couponData = { ...this.coupon };
      // range 模式的 VueDatePicker 使用陣列格式儲存開始與結束時間
      this.couponData.dates = [this.couponData.start_date * 1000, this.couponData.due_date * 1000]
    },
  },
  computed: {
    // 折扣 option 顯示的折數
    discountsOption() {
      const discounts = [];
      // 95 折 ~ 1 折
      for (let i = 95; i > 5; i -= 5) {
          let discountKey = '';
          const discountValue = i;
          i % 10 ? discountKey = `${i} 折` : discountKey = `${i / 10} 折`; // 80 -> 8 折
          discounts.push([discountKey, discountValue]);
      }
      return discounts; // [['95 折', 95], ['9 折', 90], ...]
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.adCouponCompModal, {
      backdrop: true
    });
  }
}
</script>

<style scoped>
/* 隱藏 input number 上下箭頭  */
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  appearance: none;
  margin: 0; 
}
input[type=number] {
  appearance:textfield;
}
</style>