<template>
  <div class="px-10 pt-10 text-start">
    <h1 class="fs-3 mb-4">優惠管理</h1>
    <ul class="nav border-bottom border-primary mb-4">
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '所有優惠券'}"
          href="#"
          @click.prevent="getCoupons('所有優惠券')">
          所有優惠券
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '有效'}" 
          href="#"
          @click.prevent="getCoupons('有效')">
          有效
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '尚未生效'}"
          href="#"
          @click.prevent="getCoupons('尚未生效')">
          尚未生效
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-6 py-4"
          :class="{ active: currentTab === '已失效'}"
          href="#"
          @click.prevent="getCoupons('已失效')">
          已失效
        </a>
      </li>
    </ul>
    <a href="#" class="btn btn-primary mb-4" @click.prevent="openModal('new')">新增優惠券</a>
    <div class="table-container overflow-auto">
      <table class="table align-middle">
        <thead class="table-head sticky-top">
          <tr>
            <th style="width: 15%;">優惠碼</th>
            <th style="width: 30%;">優惠型式</th>
            <th style="width: 15%;">開始日期</th>
            <th style="width: 15%;">結束日期</th>
            <th style="width: 15%;">狀態</th>
            <th style="width: 5%;"></th>
            <th style="width: 5%;"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.code }}</td>
            <td class="py-5">
              <p class="fw-bold mb-4">{{ coupon.title }}</p>
              <p v-if="coupon.title==='金額折抵'">
                消費滿 NT$ {{ coupon.min_buy_price }}，享 NT$ {{ coupon.discount_price }} 折扣
              </p>
              <p v-if="coupon.title==='訂單折扣'">
                消費滿 NT$ {{ coupon.min_buy_price }}，享 {{ coupon.percent % 10 ? coupon.percent : coupon.percent / 10 }} 折
              </p>
            </td>
            <td>{{ coupon.start_date ? unixToDate(coupon.start_date) : '-' }}</td>
            <td>{{ unixToDate(coupon.due_date) }}</td>
            <td>
              <span v-if="dateToUnix() > coupon.start_date && dateToUnix() < coupon.due_date" class="text-success">
                有效 <img src="@/components/icons/check_circle_success_18dp.svg" alt="有效" class="align-top">
              </span>
              <span v-if="dateToUnix() > coupon.due_date" class="text-danger">
                已失效 <img src="@/components/icons/cancel_danger_18dp.svg" alt="已失效" class="align-top">
              </span>
              <span v-if="dateToUnix() < coupon.start_date">
                尚未生效 <img src="@/components/icons/remove_circle_black_18dp.svg" alt="已失效" class="align-top">
              </span>
            </td>
            <td>
              <a href="#" class="svg-hover-primary" @click.prevent="openModal('edit', coupon.id)">
                <svg class="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#9f9f9f"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
              </a>
            </td>
            <td>
              <a href="#" class="svg-hover-primary">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#9f9f9f"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="loadingStatus.loadingGetCoupons" class="d-flex justify-content-center align-items-center" style="min-height: 360px;">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>


  </div>
  <VueLoading :active="isLoading" />
  <AdCouponModal ref="adCouponModal" :coupon="coupon" :isNew="isNew" :loadingStatus="loadingStatus" />
</template>

<script>
import AdCouponModal from '@/components/AdCouponModal.vue'
import { unixToDate } from '@/utils/unixToDate.js'
import { dateToUnix } from '@/utils/dateToUnix.js'

export default {
  data () {
    return {
      currentTab: '所有優惠券',
      coupons: [],
      coupon: {},
      isNew: true,
      isLoading: false,
      loadingStatus: {
        loadingGetCoupons: false,
        loadingGetCoupon: false
      },
    }
  },
  components: {
    AdCouponModal,
  },
  methods: {
    getCoupons(tab) {
      this.currentTab = tab
      this.loadingStatus.loadingGetCoupons = true
      this.coupons = []

      const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/coupons`
      
      this.$http.get(url)
        .then(res => {
          switch(tab) {
            case '所有優惠券':
              this.coupons = res.data.coupons
              break
            case '有效':
              this.coupons = res.data.coupons.filter(coupon => {
                return this.dateToUnix() > coupon.start_date && this.dateToUnix() < coupon.due_date
              })
              break
            case '尚未生效':
              this.coupons = res.data.coupons.filter(coupon => {
                return this.dateToUnix() > coupon.due_date
              })
              break
            case '已失效':
              this.coupons = res.data.coupons.filter(coupon => {
                return this.dateToUnix() < coupon.start_date
              })
              break
          }
        })
        .catch(err => {
          alert(err.response.data.message)
        })
        .finally(() => {
          this.loadingStatus.loadingGetCoupons = false
        })
    },
    getCoupon(id){
      this.loadingStatus.loadingGetCoupon = true

      const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/coupons`
      
      this.$http.get(url)
        .then(res => {
          this.coupon = res.data.coupons.find(coupon => coupon.id === id)
        })
        .catch(err => {
          alert(err.response.data.message)
        })
        .finally(() => {
          this.loadingStatus.loadingGetCoupon = false
        })
    },
    openModal(type, id) {
      this.coupon = {}
      switch(type) {
        case 'new':
          this.isNew = true
          break
        case 'edit':
          this.isNew = false
          this.getCoupon(id)
          break
      }
      this.$refs.adCouponModal.openModal()
    },
    unixToDate(unix) {
      return unixToDate(unix)
    },
    dateToUnix(date = 'now') {
      return dateToUnix(date)
    }
  },
  mounted() {
    this.getCoupons('所有優惠券')
  }
}
</script>

<style scoped lang="scss">
.table-container{
  height: calc(100vh - 320px);
  &::-webkit-scrollbar{
  display:none;
  }
}
</style>