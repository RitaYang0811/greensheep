<template>
  <div class="container pt-20 mb-4">
    <!-- progress -->
    <div class="mb-30">
      <div class="position-relative m-4 w-75 mx-auto">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 0%"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <button
          type="button"
          class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill pe-none"
          style="width: 3rem; height: 3rem"
        >
          1
        </button>
        <button
          type="button"
          class="position-absolute top-0 start-50 translate-middle btn btn-sm bg-white rounded-pill border border-1 border-primary text-primary pe-none"
          style="width: 3rem; height: 3rem"
        >
          2
        </button>
        <button
          type="button"
          class="position-absolute top-0 start-100 translate-middle btn btn-sm bg-white rounded-pill border border-1 border-primary text-primary pe-none"
          style="width: 3rem; height: 3rem"
        >
          3
        </button>
      </div>

      <div class="position-relative mt-15 w-75 mx-auto">
        <p class="position-absolute top-0 start-0 translate-middle text-primary">確認購買明細</p>

        <p class="position-absolute top-0 start-50 translate-middle text-primary">付款資料填寫</p>

        <p class="position-absolute top-0 end-n7 translate-middle text-primary">訂單完成</p>
      </div>
    </div>

    <h1 class="fs-4 fs-lg-2 py-20 text-center fw-bold">購物車</h1>
    <Loading v-model:active="isLoading"></Loading>
    <!-- 商品列表 -->
    <table class="table align-middle border-primary">
      <thead>
        <tr>
          <th scope="col" class="text-primary fw-medium">商品資訊</th>
          <th scope="col" class="text-primary fw-medium">數量</th>
          <th scope="col" class="text-primary fw-medium">價格</th>
          <th scope="col" class="text-primary fw-medium"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cart in carts" :key="cart.id">
          <th scope="row" class="py-4">
            <div class="card border-0" style="max-width: 540px">
              <div class="row g-0 align-items-center">
                <div class="col-md-4">
                  <div class="ratio ratio-1x1">
                    <img
                      :src="cart.product.imageUrl"
                      class="img-fluid object-fit-cover"
                      alt="..."
                    />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="fs-6 card-title text-primary fw-medium">
                      {{ cart.product.title }}
                    </h5>
                    <small class="text-start fw-normal">{{ cart.product.category }}</small>
                  </div>
                </div>
              </div>
            </div>
          </th>
          <td class="py-4">
            <div class="d-flex justify-content-center">
              <button
                class="btn btn-link text-primary"
                @click.prevent="cart.qty--"
                @click="updateCart(cart)"
                :disabled="cart.qty <= 1"
              >
                <i class="bi bi-dash-circle fs-3"></i>
              </button>
              <input type="number" class="p-2 w-10" min="1" v-model="cart.qty" disabled />

              <button
                class="btn btn-link text-primary"
                @click.prevent="cart.qty++"
                @click="updateCart(cart)"
              >
                <i class="bi bi-plus-circle fs-3"></i>
              </button>
            </div>
          </td>
          <td class="py-4 text-primary">NT$ {{ parseInt(cart.total) }}</td>
          <td class="py-4">
            <button class="btn btn-primary" @click="deleteCart(cart.id)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- 免運 -->
  <div class="py-10">
    <div class="container">
      <div class="row">
        <div class="col-md-2 text-primary fw-medium">已使用優惠</div>
        <div class="col-md-10 text-start" v-if="carts[0]?.coupon">
          <span
            class="rounded-pill border border-1 border-secondary text-secondary fs-9 px-4 py-1 me-4"
            >{{ carts[0].coupon.title }}</span
          >
          <span class="fs-7 text-primary">{{
            `消費滿 NT$ ${carts[0].coupon.min_buy_price_by_discount}，享
            ${carts[0].coupon.percent / 10} 折`
          }}</span>
        </div>
      </div>
    </div>
  </div>

  <div class="container py-10">
    <div class="row align-items-center">
      <div class="col-md-2 text-primary fw-medium">優惠券折扣</div>

      <div class="col-md-10">
        <form class="text-start">
          <input
            type="text"
            class="teat-start p-2 w-50"
            placeholder="請輸入優惠代碼"
            v-model="coupon"
          />
          <button type="button" class="btn btn-primary p-3" @click="sendCoupon(coupon)">
            送出優惠券
          </button>
        </form>
      </div>
    </div>
  </div>
  <!-- 運送及付款方式 -->
  <div class="container py-10 py-md-15 border-top border-bottom border-primary border-2">
    <div class="row justify-content-between">
      <div class="col-md-6 col-12 bg-light px-8 py-8">
        <h3 class="fs-5 fw-medium text-start mb-4">選擇收件地點及運送方式</h3>
        <select class="form-select mb-5 fs-6 w-100" v-model="deliverChoose.location">
          <option value="" disabled>請選擇地點</option>
          <option v-for="location in locations" :value="location" :key="location">
            {{ location }}
          </option>
        </select>
        <select class="form-select fs-6 w-100" v-model="deliverChoose.deliver">
          <option value="" disabled>請選擇配送方式</option>
          <option v-for="deliver in delivers" :value="deliver" :key="deliver">{{ deliver }}</option>
        </select>
        <p class="fs-8 text-start text-grey66 mt-5">
          出貨後約 3-7 天抵達指定門市。 如遇特殊檔期或急件需求，建議選擇國內宅配方式配送。
        </p>

        <h3 class="fs-5 fw-medium text-start mt-10 mb-4">選擇付款方式</h3>
        <select class="form-select fs-6 w-100" v-model="deliverChoose.payWay">
          <option value="" disabled>付款方式</option>
          <option v-for="way in payWays" :value="way" :key="way">{{ way }}</option>
        </select>
      </div>

      <div class="col-md-6 col-12 mt-md-0 mt-5 bg-light py-8 px-8">
        <h3 class="fs-5 fw-medium text-start mb-4">訂單資訊</h3>

        <div class="p-5 bg-greyD4 text-dark">
          <div class="d-flex justify-content-between mb-5">
            <p class="">小計：</p>
            <p class="">NT$ {{ rawTotal }}</p>
          </div>
          <!-- <div class="d-flex justify-content-between mb-5">
            <p class="">運費：</p>
            <p class="">免運</p>
          </div> -->
          <div class="d-flex justify-content-between mb-5">
            <p class="">優惠券：</p>
            <span v-if="carts[0]?.coupon">{{
              `消費滿 NT$ ${carts[0].coupon.min_buy_price_by_discount}，享
              ${carts[0].coupon.percent / 10} 折`
            }}</span>
          </div>

          <div class="border border-primary border-1 mb-5"></div>
          <div class="d-flex justify-content-between mb-5">
            <p class="">合計：</p>
            <p class="fw-bold">NT$ {{ parseInt(total) }}</p>
          </div>
          <button class="btn btn-primary p-5 fs-5 w-100 text-white" @click="goCheckout">
            前往結帳
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--  訂 購 前 請 詳 閱  -->
  <OrderRules></OrderRules>
</template>

<script>
//pinia
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore'
//loading overlay
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import OrderRules from '../../components/OrderRules.vue'
import Swal from 'sweetalert2'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  components: {
    OrderRules,
    Loading
  },

  data() {
    return {
      isLoading: false,
      coupon: '',
      select: [
        {
          location: '台灣',
          deliver: ['黑貓宅急便', '7-11取貨', '全家取貨', 'OK取貨', '萊爾富取貨'],
          payWay: ['信用卡', '貨到付款', '轉帳', '超商繳費']
        },
        {
          location: '外島',
          deliver: ['中華郵政', '黑貓宅急便', '宅配通'],
          payWay: ['信用卡', '轉帳']
        },
        { location: '海外', deliver: ['中華郵政', 'DHL', 'UPS'], payWay: ['信用卡'] }
      ],
      locations: [],
      delivers: [],
      payWays: [],
      deliverChoose: {
        location: '',
        deliver: '',
        payWay: ''
      } //pinia
    }
  },

  methods: {
    ...mapActions(cartStore, ['getCarts', 'updateCart', 'deleteCart', 'getDeliverData']),

    sendCoupon(coupon) {
      const sendCouponUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/coupon`
      const sendData = {
        data: {
          code: coupon
        }
      }
      this.axios
        .post(sendCouponUrl, sendData)
        .then(() => {
          this.coupon = ''
          this.getCarts()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goCheckout() {
      if (this.deliverChoose.location.length == 0) {
        Swal.fire({
          title: '收件地點必填',
          confirmButtonColor: '#566B5A',
          icon: 'warning'
        })
        return
      }
      if (this.deliverChoose.deliver.length == 0) {
        Swal.fire({
          title: '配送方式必填',
          confirmButtonColor: '#566B5A',
          icon: 'warning'
        })
        return
      }
      if (this.deliverChoose.payWay.length == 0) {
        Swal.fire({
          title: '付款方式必填',
          confirmButtonColor: '#566B5A',
          icon: 'warning'
        })
        return
      }

      this.getDeliverData(this.deliverChoose)
      this.$router.push('/order')

      // if (this.deliverChoose.payWay.length > 0 && this.deliverChoose.deliver.length > 0) {
      //   this.$router.push('/order')
      //   this.getDeliverData(this.deliverChoose)
      // } else {
      //   alert('付款方式必填')
      // }
    }
  },

  watch: {
    //監聽location選擇，產生deliver方式
    'deliverChoose.location'(location) {
      this.delivers = [] //洗掉deliver內容，避免重新點擊location造成累加。
      this.payWays = [] //洗掉payWay內容，避免重新點擊location造成累加。
      this.deliverChoose.deliver = '' //洗掉紀錄，讓選擇location時deliver都能回到預設值。
      this.deliverChoose.payWay = '' //洗掉紀錄，讓選擇location時payWay都能回到預設值。
      this.select.forEach((item) => {
        if (item.location == location) {
          item.deliver.forEach((item2) => {
            this.delivers.push(item2)
          })
          //產生付款方式array
          item.payWay.forEach((item3) => {
            this.payWays.push(item3)
          })
        }
      })
    }
    //監聽付款內容，查看deliverChoose內容(debug用，最後會刪除。)
    // 'deliverChoose.payWay'() {
    //   console.log(this.deliverChoose)
    // },
    //監聽coupon(先預留function，之後確定了再補內容)
    // coupon(value) {
    //   console.log(value)
    //   if (value == "") {
    //     return ""
    //   }
    // },
  },

  computed: {
    ...mapState(cartStore, ['carts', 'total']),
    rawTotal() {
      let total = 0
      this.carts.forEach((item) => {
        total += item.total
      })
      return total
    }
  },

  mounted() {
    //產生地點select
    this.select.forEach((item) => {
      this.locations.push(item.location)
    })
    this.getCarts()
  }
}
</script>

<style lang="scss"></style>
