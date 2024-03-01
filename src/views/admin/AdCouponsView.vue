<template>
  <div class="ad-coupon px-lg-10 pt-lg-10 text-start">
    <h1 class="fs-3 mb-4">優惠管理</h1>
    <ul class="nav border-bottom border-primary mb-4">
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '所有優惠券'}"
          href="#"
          @click.prevent="changeTab('所有優惠券')">
          所有優惠券
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '有效'}" 
          href="#"
          @click.prevent="changeTab('有效')">
          有效
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '尚未生效'}"
          href="#"
          @click.prevent="changeTab('尚未生效')">
          尚未生效
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-6 py-4"
          :class="{ active: currentTab === '已失效'}"
          href="#"
          @click.prevent="changeTab('已失效')">
          已失效
        </a>
      </li>
    </ul>
    <a href="#" class="btn btn-primary mb-4" @click.prevent="openModal('new')">新增優惠券</a>
    <div class="table-container table-responsive">
      <table class="table align-middle text-nowrap mb-4">
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
            <tr v-for="coupon in currentPageCoupons" :key="coupon.id">
              <td>{{ coupon.code }}</td>
              <td class="py-5">
                <p class="fw-bold mb-4">{{ coupon.title }}</p>
                <p v-if="coupon.title==='金額折抵'">
                  消費滿 NT$ {{ coupon.min_buy_price_by_price }}，享 NT$ {{ coupon.discount_price }} 折扣
                </p>
                <p v-if="coupon.title==='訂單折扣'">
                  消費滿 NT$ {{ coupon.min_buy_price_by_discount }}，享 {{ coupon.percent % 10 ? coupon.percent : coupon.percent / 10 }} 折
                </p>
              </td>
              <td>{{ coupon.start_date ? unixToDate(coupon.start_date) : '-' }}</td>
              <td>{{ unixToDate(coupon.due_date) }}</td>
              <td>
                <template v-if="currentTab === '所有優惠券'">
                  <span v-if="dateToUnix() > coupon.start_date && dateToUnix() < coupon.due_date" class="text-success">
                    有效 <img src="@/components/icons/check_circle_success_18dp.svg" alt="有效" class="align-top">
                  </span>
                  <span v-if="dateToUnix() > coupon.due_date" class="text-danger">
                    已失效 <img src="@/components/icons/cancel_danger_18dp.svg" alt="已失效" class="align-top">
                  </span>
                  <span v-if="dateToUnix() < coupon.start_date">
                    尚未生效 <img src="@/components/icons/remove_circle_black_18dp.svg" alt="已失效" class="align-top">
                  </span>
                </template>
                <template v-else-if="currentTab === '有效'">
                  <span class="text-success">
                    有效 <img src="@/components/icons/check_circle_success_18dp.svg" alt="有效" class="align-top">
                  </span>
                </template>
                <template v-else-if="currentTab === '尚未生效'">
                  <span>
                    尚未生效 <img src="@/components/icons/remove_circle_black_18dp.svg" alt="已失效" class="align-top">
                  </span>
                </template>
                <template v-else-if="currentTab === '已失效'">
                  <span class="text-danger">
                    已失效 <img src="@/components/icons/cancel_danger_18dp.svg" alt="已失效" class="align-top">
                  </span>
                </template>
              </td>
              <td>
                <a href="#" class="svg-hover-primary" :class="{ 'disabled-link': loadingStatus.loadingDelCoupon }" @click.prevent="openModal('edit', coupon.id)" >
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#9f9f9f"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                </a>
              </td>
              <td>
                <div class="d-flex align-items-center">
                  <a href="#" class="svg-hover-primary" @click.prevent="deleteCoupon(coupon.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#9f9f9f"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                  </a>
                  <div v-if="loadingStatus.loadingDelCoupon === coupon.id" class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
            </tr>
        </tbody>
      </table>
      <!-- pagination -->
      <div class="text-center va-pagination">
        <template v-if="currentTab === '所有優惠券' && !loadingStatus.loadingGetCoupons">
          <vue-awesome-paginate
            :total-items="coupons.length"
            :items-per-page="10"
            :max-pages-shown="3"
            v-model="currentPage"
            @click="changePage"
            pagination-container-class="cus-pagination"
            paginate-buttons-class="page-link"
            number-buttons-class="fs-8"
            active-page-class="active"
          >
            <template #prev-button>
              <span class="material-icons fs-8 p-1"> navigate_before </span>
            </template>
            <template #next-button>
              <span class="material-icons fs-8 p-1"> navigate_next </span>
            </template>
          </vue-awesome-paginate>
        </template>
        <template v-else-if="currentTab === '有效' && !loadingStatus.loadingGetCoupons">
          <vue-awesome-paginate
            :total-items="validCoupons.length"
            :items-per-page="10"
            :max-pages-shown="3"
            v-model="currentPage"
            @click="changePage"
            pagination-container-class="cus-pagination"
            paginate-buttons-class="page-link"
            number-buttons-class="fs-8"
            active-page-class="active"
          >
            <template #prev-button>
              <span class="material-icons fs-8 p-1"> navigate_before </span>
            </template>
            <template #next-button>
              <span class="material-icons fs-8 p-1"> navigate_next </span>
            </template>
          </vue-awesome-paginate>
        </template>
        <template v-else-if="currentTab === '尚未生效' && !loadingStatus.loadingGetCoupons">
          <vue-awesome-paginate
            :total-items="notYetValidCoupons.length"
            :items-per-page="10"
            :max-pages-shown="3"
            v-model="currentPage"
            @click="changePage"
            pagination-container-class="cus-pagination"
            paginate-buttons-class="page-link"
            number-buttons-class="fs-8"
            active-page-class="active"
          >
            <template #prev-button>
              <span class="material-icons fs-8 p-1"> navigate_before </span>
            </template>
            <template #next-button>
              <span class="material-icons fs-8 p-1"> navigate_next </span>
            </template>
          </vue-awesome-paginate>
        </template>
        <template v-else-if="currentTab === '已失效' && !loadingStatus.loadingGetCoupons">
          <vue-awesome-paginate
            :total-items="InvalidCoupons.length"
            :items-per-page="10"
            :max-pages-shown="3"
            v-model="currentPage"
            @click="changePage"
            pagination-container-class="cus-pagination"
            paginate-buttons-class="page-link"
            number-buttons-class="fs-8"
            active-page-class="active"
          >
            <template #prev-button>
              <span class="material-icons fs-8 p-1"> navigate_before </span>
            </template>
            <template #next-button>
              <span class="material-icons fs-8 p-1"> navigate_next </span>
            </template>
          </vue-awesome-paginate>
        </template>
      </div>
      <div v-if="loadingStatus.loadingGetCoupons" class="d-flex justify-content-center align-items-center" style="min-height: 360px;">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
  <VueLoading :active="isLoading" />
  <AdCouponModal ref="adCouponModal" :coupon="coupon" :isNew="isNew" :loadingStatus="loadingStatus" @update-coupon="updateCoupon" />
</template>

<script>
import AdCouponModal from '@/components/AdCouponModal.vue'
import { unixToDate } from '@/utils/unixToDate.js'
import { dateToUnix } from '@/utils/dateToUnix.js'

export default {
  data () {
    return {
      currentTab: '所有優惠券',
      currentPageCoupons: [],
      currentPage: 1,
      coupons: [],
      validCoupons: [],
      notYetValidCoupons: [],
      InvalidCoupons: [],
      coupon: {},
      isNew: true,
      isLoading: false,
      loadingStatus: {
        loadingGetCoupons: false,
        loadingGetCoupon: false,
        loadingDelCoupon: ''
      },
    }
  },
  components: {
    AdCouponModal,
  },
  methods: {
    // 取得全部優惠券資料
    async getCoupons() {
      this.coupons = []
      this.validCoupons = []
      this.InvalidCoupons = []
      this.notYetValidCoupons = []
      this.currentPageCoupons = []

      this.loadingStatus.loadingGetCoupons = true

      // 第一次 get 優惠券回傳的頁碼資料
      let currentPageNum
      let totalPagesNum

      const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/coupons`

      try {
        // get 第一頁資料
        const resFirstPage = await this.$http.get(url)
        this.coupons = resFirstPage.data.coupons // 第一頁的 data
        currentPageNum = resFirstPage.data.pagination.current_page + 1 // +1 給下段的 while 判斷需不需要繼續打 API
        totalPagesNum = resFirstPage.data.pagination.total_pages

        // 若有 2 頁以上，繼續 get 後續頁碼的資料
        while(currentPageNum <= totalPagesNum) {
          const resOtherPages = await this.$http.get(`${url}?page=${currentPageNum}`)
          this.coupons = [...this.coupons, ...resOtherPages.data.coupons]
          currentPageNum++;
        }
      } catch (err) {
        alert(err.response.data.message)
      }

      // 依有效狀態分類優惠券
      this.filterCoupons()
      // 依當前 tab 取得該 tab 的當前頁資料
      this.changePage(this.currentPage)

      this.loadingStatus.loadingGetCoupons = false
    },
    // 依有效狀態分類優惠券
    filterCoupons() {
      // 分類優惠券
      this.coupons.forEach(coupon => {
        if(dateToUnix('now') > coupon.start_date && dateToUnix('now') < coupon.due_date) {
          this.validCoupons.push(coupon)
        } else if (dateToUnix('now') > coupon.due_date) {
          this.InvalidCoupons.push(coupon)
        } else if (dateToUnix('now') < coupon.start_date) {
          this.notYetValidCoupons.push(coupon)
        }
      })
    },
    // 依當前 tab 取得當前分頁資料
    changePage(page) {
      switch(this.currentTab) {
        case '所有優惠券':
          this.currentPageCoupons = this.coupons.slice((page - 1) * 10, page * 10) // 10: 一頁顯示幾筆資料
          // page  couponsSliceIndex
          //  1         0 ~ 9
          //  2        10 ~ 19
          break
        case '有效':
          this.currentPageCoupons = this.validCoupons.slice((page - 1) * 10, page * 10)
          break
        case '尚未生效':
          this.currentPageCoupons = this.notYetValidCoupons.slice((page - 1) * 10, page * 10)
          break
        case '已失效':
          this.currentPageCoupons = this.InvalidCoupons.slice((page - 1) * 10, page * 10)
          break
      }
    },
    // 切換 tab
    changeTab(tab) {
      this.currentTab = tab
      // 回到第一頁並取得該 tab 的第一頁資料
      this.currentPage = 1
      this.changePage(this.currentPage)
    },
    // 取得單一優惠券
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
    // 新增/編輯優惠券
    updateCoupon(couponData){
      this.loadingStatus.loadingGetCoupon = true

      // 先定義兩種折扣模式共用的資料欄位
      const data = {
        title: couponData.title,
        is_enabled: 1,
        percent: couponData.title === '金額折抵' ? 100 : couponData.percent,
        start_date: couponData.dates[0] / 1000, // 時間戳改成秒單位
        due_date: couponData.dates[1] / 1000,
        code: couponData.code
      }

      // 再加入該類型所需的欄位
      if(couponData.title === '金額折抵') {
        data.min_buy_price_by_price = couponData.min_buy_price_by_price 
        data.discount_price = couponData.discount_price
      } else if (couponData.title === '訂單折扣') {
        data.min_buy_price_by_discount = couponData.min_buy_price_by_discount
      }

      // 判斷是新增或編輯
      if(this.isNew) { // 新增優惠券
        const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/coupon`

        this.$http.post(url, {data: data})
          .then(res => {
            alert(res.data.message)
            this.$refs.adCouponModal.closeModal()
            this.getCoupons()
          })
          .catch(err => {
            alert(err.response.data.message)
          })
          .finally(() => {
            this.loadingStatus.loadingGetCoupon = false
          })
      } else if(!this.isNew) { // 編輯優惠券
        const id = couponData.id
        const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/coupon/${id}`
         
        this.$http.put(url, { data: data })
          .then(res => {
            alert(res.data.message)
            this.$refs.adCouponModal.closeModal()
            this.getCoupons()
          })
          .catch(err => {
            alert(err.response.data.message)
          })
          .finally(() => {
            this.loadingStatus.loadingGetCoupon = false
          })
      }
    },
    // 刪除優惠券
    deleteCoupon(id){
      this.loadingStatus.loadingDelCoupon = id
      const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/coupon/${id}`

      this.$http.delete(url)
        .then(res => {
          alert(res.data.message)
          this.getCoupons()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
        .finally(() => {
          this.loadingStatus.loadingDelCoupon = ''
        })
    },
    // 開啟新增/編輯優惠券的 modal
    openModal(type, id) {
      switch(type) {
        case 'new':
          this.isNew = true
          this.coupon = {
            title: '金額折抵', // 預設值給 :checked 判斷
          }
          break
        case 'edit':
          this.isNew = false
          this.getCoupon(id)
          break
      }
      this.$refs.adCouponModal.openModal()
    },
    // unix 時間戳轉成 ${year}-${month}-${day} 格式
    unixToDate(unix) {
      const unixMs = unix * 1000
      return unixToDate(unixMs)
    },
    // 取得現在(或其他)時間的 unix 時間戳
    dateToUnix(date = 'now') {
      return dateToUnix(date)
    }
  },
  mounted() {
    this.getCoupons()
  }
}
</script>
