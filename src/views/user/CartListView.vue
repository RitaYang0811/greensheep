<template>
  <div class="container pt-40">
    <!-- progress -->
    <div>
      <div class="p-10 d-flex justify-content-center" style="z-index: 10">
        <div class="">
          <div class="btn btn-outline-primary border-2 rounded-circle bg-primary pe-none">
            <i class="bi bi-check-lg fs-2 text-light"></i>
          </div>
          <p class="mt-3 fs-6 text-primary">確認購買明細</p>
        </div>
        <div class="mt-5 bg-light border border-greyD4" style="height: 8px; width: 35%"></div>
        <div class="opacity-50">
          <div class="btn btn-outline-primary border-2 rounded-circle pe-none">
            <i class="bi bi-check-lg fs-2 text-primary"></i>
          </div>
          <p class="mt-3 fs-6 text-primary">付款資料填寫</p>
        </div>
        <div class="mt-5 bg-light border border-greyD4" style="height: 8px; width: 35%"></div>
        <div class="opacity-50">
          <div class="btn btn-outline-primary border-2 rounded-circle pe-none">
            <i class="bi bi-check-lg fs-2 text-primary"></i>
          </div>
          <p class="mt-3 fs-6 text-primary">訂單完成</p>
        </div>
      </div>
    </div>

    <h1 class="fs-4 fs-lg-2 py-10 text-center fw-bold">購物車</h1>
    <Loading v-model:active="isLoading"></Loading>
    <!-- 商品列表 -->
    <ul class="cart-table list-unstyled border-lg-bottom border-primary">
      <li class="cart-thead">
        <ol class="list-unstyled cart-tr">
          <li class="text-primary fw-medium"></li>
          <li class="text-primary fw-medium">商品資訊</li>
          <li class="text-primary fw-medium">數量</li>
          <li class="text-primary fw-medium">單價</li>
          <li class="text-primary fw-medium">價格</li>
          <li class="text-primary fw-medium"></li>
        </ol>
      </li>

      <li v-for="cart in carts" :key="cart.id" class="cart-tbody">
        <ol class="list-unstyled cart-tr">
          <li class="w-md-10">
            <img
              :src="cart.product.imageUrl"
              class="cart-img img-fluid object-fit-cover"
              alt="product-image"
            />
          </li>
          <li class="w-md-30">
            <h5 class="fs-6 card-title text-primary fw-medium">
              {{ cart.product.title }}
            </h5>
          </li>
          <li class="w-md-30">
            <div class="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-link text-primary"
                @click.prevent="cart.qty--"
                @click="updateCart(cart)"
                :disabled="cart.qty <= 1"
              >
                <i class="bi bi-dash-circle fs-3"></i>
              </button>
              <input
                type="number"
                class="p-lg-2 w-20 text-center"
                min="1"
                v-model="cart.qty"
                disabled
              />

              <button
                type="button"
                class="btn btn-link text-primary"
                @click.prevent="cart.qty++"
                @click="updateCart(cart)"
              >
                <i class="bi bi-plus-circle fs-3"></i>
              </button>
            </div>
          </li>
          <li data-title="單價" class="cart-price text-primary w-md-15">
            <small class="text-center">NT$ {{ cart.product.price }}</small>
          </li>
          <li c data-title="價格" class="cart-price text-primary w-md-15">
            <p class="text-center fw-medium d-inline-block">NT$ {{ parseInt(cart.total) }}</p>
          </li>
          <li class="w-md-10">
            <a @click="deleteCart(cart.id)">
              <i class="bi bi-trash text-grey66"></i>
            </a>
          </li>
        </ol>
      </li>
      <h2 class="fs-5 font-notosans mt-6">
        合計：NT ${{ carts[0]?.coupon ? total - carts[0]?.coupon?.discount_price : total }}<br />
        （共 {{ carts.length }} 件）
      </h2>
    </ul>
    <div class="d-flex my-2 justify-content-center justify-content-lg-end">
      <button type="button" class="btn btn-light text-primary" @click="deleteAllCarts">
        刪除全部商品
      </button>
    </div>
  </div>

  <!-- 優惠 -->
  <div v-if="carts[0]?.coupon?.title" class="container pt-10">
    <div class="row" v-if="carts[0]?.coupon">
      <div class="col-md-2 text-primary fw-medium mb-2">已使用優惠</div>
      <div class="col-md-10 text-center text-md-start">
        <span
          class="rounded-pill border border-1 border-secondary text-secondary fs-9 px-4 py-1 me-4"
          >{{ carts[0]?.coupon?.title }}</span
        >
        <span class="fs-7 text-primary">
          {{ showCoupon(carts[0]?.coupon) }}
        </span>
      </div>
    </div>
  </div>

  <div class="container py-10">
    <div class="row align-items-center">
      <div class="col-md-2 text-primary fw-medium d-md-block d-none">優惠券折扣</div>

      <div class="col-md-10">
        <form class="text-md-start text-center">
          <input
            type="text"
            class="teat-start p-2 w-50"
            placeholder="請輸入優惠代碼"
            v-model="coupon"
          />
          <button
            type="button"
            class="btn btn-primary p-3"
            @click="sendCoupon(coupon)"
            :disabled="!coupon"
          >
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
          <div class="d-flex justify-content-between mb-5">
            <p class="">優惠券：</p>
            <span v-if="carts[0]?.coupon">
              {{ showCoupon(carts[0]?.coupon) }}
            </span>
          </div>

          <div class="border border-primary border-1 mb-5"></div>
          <div class="d-flex justify-content-between mb-5">
            <p class="">合計：</p>
            <p class="fw-bold">
              NT$
              {{
                carts[0]?.coupon
                  ? parseInt(total) - carts[0]?.coupon?.discount_price
                  : parseInt(total)
              }}
            </p>
          </div>
          <button
            type="button"
            class="btn btn-primary p-5 fs-5 w-100 text-white"
            @click="goCheckout"
          >
            前往結帳
          </button>
        </div>
      </div>
    </div>
  </div>

  <!--  訂 購 前 請 詳 閱  -->
  <OrderRules />
  <VueLoading :active="isLoading" />
</template>

<script>
//pinia
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore'
//loading overlay
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import OrderRules from '@/components/OrderRules.vue'
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
      }
    }
  },

  methods: {
    ...mapActions(cartStore, [
      'getCarts',
      'updateCart',
      'deleteCart',
      'getDeliverData',
      'deleteAllCarts'
    ]),

    sendCoupon(coupon) {
      const sendCouponUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/coupon`
      const sendData = {
        data: {
          code: coupon
        }
      }
      this.axios
        .post(sendCouponUrl, sendData)
        .then((res) => {
          if (res.data.success) {
            Swal.fire({
              title: res.data.message,
              icon: 'success'
            })
          }
          this.coupon = ''
          this.getCarts()
        })
        .catch((err) => {
          Swal.fire({
            title: '優惠券有誤，請重新輸入',
            confirmButtonColor: '#566B5A',
            icon: 'warning'
          })
          console.log(err)
        })
    },
    //優惠券內容顯示(有兩種不同優惠券格式，所以要另外判斷)
    showCoupon(coupon) {
      if (coupon?.percent === 100) {
        return `消費滿 NT$ ${coupon?.min_buy_price_by_price}，享 ${coupon?.discount_price} 折扣`
      } else {
        return `消費滿 NT$ ${coupon?.min_buy_price_by_discount}，享
            ${coupon?.percent / 10} 折`
      }
    },

    goCheckout() {
      if (this.carts.length === 0) {
        Swal.fire({
          title: '購物車是空的',
          confirmButtonColor: '#566B5A',
          icon: 'warning'
        })
        return
      }
      if (this.deliverChoose.location.length === 0) {
        Swal.fire({
          title: '收件地點必填',
          confirmButtonColor: '#566B5A',
          icon: 'warning'
        })
        return
      }
      if (this.deliverChoose.deliver.length === 0) {
        Swal.fire({
          title: '配送方式必填',
          confirmButtonColor: '#566B5A',
          icon: 'warning'
        })
        return
      }
      if (this.deliverChoose.payWay.length === 0) {
        Swal.fire({
          title: '付款方式必填',
          confirmButtonColor: '#566B5A',
          icon: 'warning'
        })
        return
      }

      this.getDeliverData(this.deliverChoose)
      this.$router.push('/order')
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
        if (item.location === location) {
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
  },

  computed: {
    ...mapState(cartStore, ['carts', 'total', 'isLoading']),
    rawTotal() {
      let total = 0
      this.carts.forEach((item) => {
        total += item.total
      })
      return parseInt(total)
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
<style lang="scss" scoped>
.cart {
  &-img {
    width: 100px;
    height: 100px;
  }
  &-table {
    display: block;
    margin: 1em auto;
    border-collapse: collapse;
  }
  &-thead {
    display: table-header-group;
    border-bottom: 1px solid #566b5a;
  }
  &-tr {
    display: table-row;
  }
  &-tbody {
    width: 100%;
    display: table-row-group;
  }
  &-thead li,
  &-tr li {
    display: table-cell;
    padding: 5px;
  }
  &-thead li {
    text-align: center;
    font-weight: bold;
  }
}

@media (max-width: 767.98px) {
  .cart {
    &-thead {
      display: none;
    }
    &-tr {
      display: block;
      padding: 12px;
      border: #566b5a 1px solid;
      margin-bottom: 5px;
    }
    &-tr li {
      display: inline-block;
      width: 100%;
      border: none;
    }
    &-price:before {
      content: attr(data-title);
      display: inline-block;
      width: auto;
      font-weight: 700;
      color: #566b5a;
      padding-right: 16px;
    }
  }
}
</style>
