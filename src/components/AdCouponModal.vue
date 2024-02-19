<template>
<div class="modal fade" ref="adCouponCompModal" role="dialog">
  <div class="modal-dialog modal-dialog-centered">
    <VForm class="modal-content custom-form" @submit="updateCoupon" v-slot="{ errors }">
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
        <div v-else class="text-start">
          <h3 class="fs-5 mb-3">折扣內容</h3>
          <div class="mb-3">
            <label for="couponCode" class="form-label fs-6 mb-3">優惠碼</label>
            <VField
              type="text"
              name="優惠碼"
              rules="required"
              class="form-control"
              :class="{ 'is-invalid': errors['優惠碼'] }"
              id="couponCode"
              placeholder="設定 12 個字元以內的英文字母和數字"
              v-model="couponData.code" />
            <ErrorMessage name="優惠碼" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <p class="mb-3 fs-6">優惠方式</p>
            <div class="form-check mb-3">
              <input class="form-check-input" type="radio" id="flexRadioDefault1" value="金額折抵" v-model="couponData.title" :checked="isNew || couponData.title === '金額折抵'">
              <label class="form-check-label mb-2" for="flexRadioDefault1">
                訂單金額折抵
              </label>
              <div class="d-flex flex-column gap-2">
                <p class="fs-8">消費滿 NT$</p>
                <div>
                  <VField
                    type="number"
                    name="金額"
                    :rules="{ required: couponData.title === '金額折抵' }"
                    class="form-control"
                    :class="{ 'is-invalid': errors['金額'] }"
                    placeholder="設定金額"
                    v-model.number="couponData.min_buy_price_by_price"
                    :disabled="couponData.title === '訂單折扣'" />
                  <ErrorMessage name="金額" class="invalid-feedback mb-3" />
                </div>
                <p class="fs-8">折抵金額 NT$</p>
                <div>
                  <VField
                    type="number"
                    name="折抵金額"
                    :rules="{ required: couponData.title === '金額折抵' }"
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
              <input class="form-check-input" type="radio" id="flexRadioDefault2" value="訂單折扣" v-model="couponData.title" >
              <label class="form-check-label mb-2" for="flexRadioDefault2">
                訂單折扣
              </label>
              <div class="d-flex flex-column gap-2">
                <p class="fs-8">消費滿 NT$</p>
                <div>
                  <VField
                    type="number"
                    name="消費金額"
                    :rules="{ required: couponData.title === '訂單折扣' }"
                    class="form-control"
                    :class="{ 'is-invalid': errors['消費金額'] }"
                    placeholder="設定金額"
                    v-model.number="couponData.min_buy_price_by_discount"
                    :disabled="couponData.title === '金額折抵'" />
                  <ErrorMessage name="消費金額" class="invalid-feedback" />
                </div>
                <p class="fs-8">折扣</p>
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
                    <option v-for="discountOption in discountsOption" :key="discountOption[0]" :value="discountOption[1]">{{ discountOption[0] }}</option>
                  </VField>
                  <ErrorMessage name="折扣" class="invalid-feedback" />
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="couponCode" class="form-label fs-6 mb-3">開始日期</label>
            <!-- model-type="timestamp": 選擇日期時儲存的資料格式，這邊用 unix timestamp，預設是毫秒單位，所以 v-model 綁定的資料須先換算成毫秒單位
                 :format="format": 後面綁定自定義的 format 方法，呈現在畫面上的是將此方法執行後的回傳結果，不會動到原始資料
                 :enable-time-picker="false": 預設 true 可以選擇到更細部的時和分，這邊關閉，以日為最小單位
                 locale="zh-TW" cancelText="取消" selectText="選擇": 語系以及顯示文字設定
            -->
            <VueDatePicker
              class="dp-custom"
              v-model="couponData.start_date"
              :format="format" model-type="timestamp"
              :enable-time-picker="false" locale="zh-TW"
              cancelText="取消" selectText="選擇" />
          </div>
          <div class="mb-3">
            <label for="couponCode" class="form-label fs-6 mb-3">結束日期</label>
            <VueDatePicker
              class="dp-custom"
              v-model="couponData.due_date"
              :format="format" model-type="timestamp"
              :enable-time-picker="false" locale="zh-TW"
              cancelText="取消" selectText="選擇" />
          </div>
        </div>
      </div>
      <div class="modal-footer py-4 px-6">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" :disabled="loadingStatus.loadingGetCoupon">取消</button>
        <button type="submit" class="btn btn-primary" :disabled="loadingStatus.loadingGetCoupon">確定</button>
      </div>
    </VForm>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import { dateFormat } from '@/utils/dateFormat.js'
import { unixToDate } from '@/utils/unixToDate.js'
import { ErrorMessage } from 'vee-validate'

export default {
    props: ['coupon', 'isNew', 'loadingStatus'],
    data() {
        return {
            modal: '',
            couponData: '',
        };
    },
    methods: {
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
        format(date) {
            return dateFormat(date);
        },
        updateCoupon() {
            this.$emit('updateCoupon', this.couponData);
        }
    },
    watch: {
        coupon() {
            // 拷貝並將時間戳改成毫秒單位
            this.couponData = { ...this.coupon };
            this.couponData.start_date *= 1000;
            this.couponData.due_date *= 1000;
        }
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
            backdrop: false
        });
    },
    components: { ErrorMessage }
}
</script>