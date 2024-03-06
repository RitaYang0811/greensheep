<template>
  <h1>訂單頁面(定位用，完成刪除)</h1>

  <div class="container py-20">
    <!-- progress -->
    <div class="mb-30">
      <div class="position-relative m-4 w-75 mx-auto">
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="50" aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
        <button type="button"
          class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill pe-none"
          style="width: 3rem; height: 3rem">
          1
        </button>
        <button type="button"
          class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill pe-none"
          style="width: 3rem; height: 3rem">
          2
        </button>
        <button type="button"
          class="position-absolute top-0 start-100 translate-middle btn btn-sm bg-white rounded-pill border border-1 border-primary text-primary pe-none"
          style="width: 3rem; height: 3rem">
          3
        </button>
      </div>

      <div class="position-relative mt-15 w-75 mx-auto">
        <p class="position-absolute top-0 start-0 translate-middle text-primary">
          確認購買明細
        </p>

        <p class="position-absolute top-0 start-50 translate-middle text-primary">
          付款資料填寫
        </p>

        <p class="position-absolute top-0 end-n7 translate-middle text-primary">
          訂單完成
        </p>
      </div>
    </div>
    <!-- 購物車內容 -->
    <div class="">
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
                      <img :src="cart.product.imageUrl" class="img-fluid object-fit-cover" alt="..." />
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
              <div class="d-flex justify-content-center ">
                <button class="btn btn-link text-primary" @click.prevent="cart.qty++" @click="updateCart(cart)"><i
                    class="bi bi-plus-circle fs-3"></i></button>
                <input type="number" class="p-2 w-10" min="1" v-model="cart.qty" disabled />
                <button class="btn btn-link text-primary" @click.prevent="cart.qty--" @click="updateCart(cart)"
                  :disabled="cart.qty <= 1"><i class="bi bi-dash-circle fs-3"></i></button>
              </div>


            </td>
            <td class="py-4 text-primary">NT$ {{ parseInt(cart.total) }}</td>
            <td class="py-4">
              <button class="btn btn-primary" @click="deleteCart(cart.id)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 class="fs-5 font-notosans mt-6">
        合計：NT${{ total }}<br />
        （共{{ carts.length }}件）
      </h2>
    </div>


  </div>

  <!-- 顧客資料、訂單資料 -->
  <div class="bg-light py-15">
    <div class="container text-start">
      <div class="row justify-content-md-between flex-md-row flex-column mb-8">
        <div class="col-12 col-md-6">
          <h3 class="fs-4 fw-medium text-start mb-4">顧客資料</h3>

          <div class="bg-greyD4 px-8 py-5">
            <h4 class="fs-6 my-4">已經是會員？登入後更方便管理訂單</h4>
            <div class="d-flex justify-content-between my-5">

              <router-link to="/memberLogin" class="btn btn-grey66 fs-6 p-5 my-auto w-100">會員登入</router-link>

            </div>

            <form action="" class="text-dark">
              <label for="name" class="fs-6 mb-1">顧客名稱</label><br />
              <input type="text" id="name" class="p-2 w-100 mb-4 border-0" v-model="orderData.user.name" />

              <label for="email" class="fs-6 mb-1">電子信箱</label><br />
              <input type="email" id="email" class="p-2 w-100 mb-1 border-0" v-model="orderData.user.email" />
              <p class="mb-3 text-end">訂單將以此Email通知</p>

              <label for="phone" class="fs-6 mb-1">電話號碼</label><br />
              <input type="tel" id="phone" class="p-2 w-100 mb-4 border-0" v-model="orderData.user.tel" />

              <!-- <label for="birthday" class="fs-6 mb-1">生日</label><br />
              <input type="date" id="birthday" class="p-2 w-100 mb-6 border-0" v-model="orderData.birthday" /> -->
            </form>
          </div>
        </div>

        <div class="col-12 col-md-6 mt-md-0 mt-5 d-flex flex-column">
          <h3 class="fs-4 fw-medium text-start mb-4">送貨資料</h3>
          <div class="bg-greyD4 px-8 py-5 text-dark flex-grow-1">
            <h5 class="fs-5 my-4 font-notosans">已選擇的送貨方式：{{ orderDeliverData.deliver }}</h5>

            <input type="checkbox" id="data" class="form-check-input my-4" v-model="recipientAsOrderData" />
            <label for="data" class="form-check-label my-4 fs-6 ms-2">收件人資料與顧客資料相同</label>

            <form class="my-3">
              <label for="recipient" class="fs-6 mb-1">收件人名稱</label><br />
              <input type="name" id="recipient" class="p-2 w-100 mb-1 border-0" v-model="recipient.name"
                :disabled="recipientAsOrderData" />
              <p class="mb-3 text-end">
                請填入收件人真實姓名，以確保順利收件
              </p>

              <label for="recipient-phone" class="fs-6 mb-1">收件人電話號碼</label><br />
              <input type="tel" id="recipient-phone" class="p-2 w-100 mb-4 border-0" v-model="recipient.tel"
                :disabled="recipientAsOrderData" />

              <label for="recipient-phone" class="fs-6 mb-1" v-if="showAddress()">收件人地址</label><br />
              <input type="tel" id="recipient-phone" class="p-2 w-100 mb-4 border-0" v-model="recipient.address"
                 v-if="showAddress()" />

            </form>
            <div class="" v-if="showStore()">
              <h4 class="fs-5 fw-medium py-4 mt-2">選擇門市</h4>

              <button type="button" class="btn btn-primary fs-5 p-5 w-100 mb-3">搜尋門市</button>
            </div>

          </div>
        </div>
      </div>

      <div class="d-flex justify-content-md-between flex-md-row flex-column text-primary">
        <div class="me-5 mt-md-0 mt-5">
          <h3 class="fs-4 fw-medium text-start mb-4">付款資料</h3>
          <div class="bg-greyD4 px-8 py-5">
            <h4 class="fs-6 my-4">已選擇付款方式：{{ orderDeliverData.payWay }}</h4>
            <div class="" v-if="showCreditCard()">
              <form action="" class="" >
                <div class="form-floating">
                  <input type="email" class="form-control mb-5" id="Card-number" placeholder="name@example.com" />
                  <label for="Card-number">卡號</label>
                </div>

                <div class="form-floating">
                  <input type="email" class="form-control mb-5" id="Card-name" placeholder="name@example.com" />
                  <label for="Card-name">持卡人姓名</label>
                </div>

                <div class="form-floating">
                  <input type="email" class="form-control mb-5" id="Card-date" placeholder="name@example.com" />
                  <label for="Card-date">有效期限(MM/YY)</label>
                </div>

                <div class="form-floating">
                  <input type="email" class="form-control mb-5" id="Card-pin" placeholder="name@example.com" />
                  <label for="Card-pin">安全碼</label>
                </div>
              </form>

              <p class="px-2">
                本金流服務由 SHOPLINE Payments 提供,通過 PCI-DSS
                國際信用卡組織最高等級認證,提供安全的交易服務,支援國內外信用卡刷卡。
              </p>

            </div>

          </div>
        </div>

        <div class="shopRWD mt-md-0 mt-5">
          <h3 class="fs-4 fw-medium text-start mb-4">訂單備註</h3>
          <div class="bg-greyD4 px-8 py-5">
            <h4 class="fs-5 my-4">有什麼要對賣家說的話：</h4>
            <form action="" class="form-floating">
              <textarea name="" id="" rows="15" class="mb-4 w-100 no-resize border-0"
                v-model="orderData.message"></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container py-8 text-start text-primary">
    <div class="row">
      <div class="col-lg-6 col-12">
        <router-link to="/cart" class="d-flex align-items-center p-8 fs-5 fw-medium text-primary"><span
            class="material-icons fs-5 me-2"> arrow_back_ios_new </span><span>返回購物車</span></router-link>
      </div>

      <div class="col-lg-6 col-12 p-8">
        <div class="d-flex mb-4">
          <input type="checkbox" id="subscribe" style="width: 1em; height: 1em" class="form-check-input" checked />
          <label for="subscribe" class="form-check-label fs-6 ms-2">訂閱最新消息</label>
        </div>
        <div class="d-flex mb-8">
          <input type="checkbox" id="private" style="width: 1em; height: 1em" class="form-check-input" />
          <label for="private" class="fform-check-label fs-6 ms-2">本人同意網站<a href="#" class="underline">服務條款</a> 及<a
              href="#" class="underline">隱私權政策</a></label>
        </div>

        <!-- <a href="7-4.shopConfirm.html" class="btn btn-primary p-4 fs-4 w-100">提交訂單</a> -->
        <router-link to="/success" class="btn btn-primary p-4 fs-4 w-100">提交訂單</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import cartStore from '@/stores/cartStore';

export default {
  data() {
    return {
      recipientAsOrderData: false,
      recipient: {
        name: '',
        tel: '',
        address: '',
      },
      orderData: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
        birthday: '',
      },
      orderDeliverData: {},


    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'updateCart', 'deleteCart']),
    //選擇寄送時出現地址
    showAddress() {
      if (this.orderDeliverData.deliver == '中華郵政') {
        return true
      }
      if (this.orderDeliverData.deliver == '黑貓宅急便') {
        return true
      }
      if (this.orderDeliverData.deliver == '宅配通') {
        return true
      }
      if (this.orderDeliverData.deliver == 'UPS') {
        return true
      }
      if (this.orderDeliverData.deliver == 'DHL') {
        return true
      }
    },
    //選擇便利店時出現選店
    showStore() {
      if (this.orderDeliverData.deliver == '7-11取貨') {
        return true
      }
      if (this.orderDeliverData.deliver == '全家取貨') {
        return true
      }
      if (this.orderDeliverData.deliver == 'OK取貨') {
        return true
      }
      if (this.orderDeliverData.deliver == '萊爾富取貨') {
        return true
      }
    },
    showCreditCard() {
      if (this.orderDeliverData.payWay == '信用卡') {
        return true
      }
    },
  },
  computed: {
    ...mapState(cartStore, ['carts', 'deliverData']),
    total() {
      let total = 0
      this.carts.forEach((item) => {
        total += item.final_total
      })
      return total
    },
  },
  watch: {
    recipientAsOrderData(value) {
      if (value) {
        this.recipient.name = this.orderData.user.name
        this.recipient.tel = this.orderData.user.tel
      }

    }
  },

  mounted() {
    this.orderDeliverData = { ...this.deliverData }
  },

}

</script>

<style lang="scss"></style>