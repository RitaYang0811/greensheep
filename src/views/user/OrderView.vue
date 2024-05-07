<template>
  <div class="container py-20 pt-40">
    <!-- progress -->
    <div>
      <div class="p-10 d-flex justify-content-center" style="z-index: 10">
        <div class="">
          <div class="btn btn-outline-primary border-2 rounded-circle bg-primary pe-none">
            <i class="bi bi-check-lg fs-2 text-light"></i>
          </div>
          <p class="mt-3 fs-6 text-primary">確認購買明細</p>
        </div>
        <div class="mt-5 bg-primary border border-greyD4" style="height: 8px; width: 35%"></div>
        <div class="">
          <div class="btn btn-outline-primary border-2 rounded-circle bg-primary pe-none">
            <i class="bi bi-check-lg fs-2 text-light"></i>
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

    <!-- 購物車內容 -->
    <ul class="cart-table list-unstyled border-lg-bottom border-primary">
      <li class="cart-thead">
        <ol class="list-unstyled cart-tr">
          <li class="text-primary fw-medium"></li>
          <li class="text-primary fw-medium">商品資訊</li>
          <li class="text-primary fw-medium">數量</li>
          <li class="text-primary fw-medium">單價</li>
          <li class="text-primary fw-medium">價格</li>
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
              <input
                type="number"
                class="p-lg-2 w-20 text-center"
                min="1"
                v-model="cart.qty"
                disabled
              />
            </div>
          </li>
          <li data-title="單價" class="cart-price text-primary w-md-15">
            <small class="text-center">NT$ {{ cart.product.price }}</small>
          </li>
          <li c data-title="價格" class="cart-price text-primary w-md-15">
            <p class="text-center fw-medium d-inline-block">NT$ {{ parseInt(cart.total) }}</p>
          </li>
        </ol>
      </li>
      <h2 class="fs-5 font-notosans mt-6">
        合計：NT ${{ carts[0]?.coupon ? total - carts[0]?.coupon?.discount_price : total }}<br />
        （共 {{ carts.length }} 件）
      </h2>
    </ul>
  </div>

  <!-- 顧客資料、訂單資料 -->
  <VForm @submit="sendOrder()" v-slot="{ errors }">
    <div class="bg-light py-15">
      <div class="container text-start">
        <div class="row justify-content-md-between flex-md-row flex-column mb-8">
          <div class="col-12 col-md-6">
            <h3 class="fs-4 fw-medium text-start mb-4">顧客資料</h3>

            <div class="bg-greyD4 px-8 py-5">
              <h4 class="fs-6 my-4">已經是會員？登入後更方便管理訂單</h4>
              <div class="d-flex justify-content-between my-5">
                <RouterLink to="/memberLogin" class="btn btn-grey66 fs-6 p-5 my-auto w-100"
                  >會員登入</RouterLink
                >
              </div>

              <form action="" class="text-dark">
                <div class="mb-4">
                  <label for="name" class="fs-6 mb-1">顧客名稱</label><br />
                  <v-field
                    id="name"
                    name="姓名"
                    type="text"
                    class="form-control p-2 w-100 mb-1 border-0"
                    :class="{ 'is-invalid': errors['姓名'] }"
                    placeholder="請輸入 姓名"
                    rules="required"
                    v-model="orderData.user.name"
                  ></v-field>
                  <error-message name="姓名" class="invalid-feedback"></error-message>
                </div>
                <label for="email" class="fs-6 mb-1">電子信箱</label><br />
                <div class="mb-4">
                  <v-field
                    id="email"
                    name="Email"
                    type="email"
                    class="form-control p-2 w-100 mb-1 border-0"
                    :class="{ 'is-invalid': errors['Email'] }"
                    placeholder="請輸入 Email"
                    rules="email|required"
                    v-model="orderData.user.email"
                  ></v-field>
                  <error-message name="Email" class="invalid-feedback"></error-message>
                  <p class="mb-3 text-end">訂單將以此Email通知</p>
                </div>

                <label for="phone" class="fs-6 mb-1">電話號碼</label><br />
                <div class="mb-4">
                  <v-field
                    id="phone"
                    name="電話"
                    type="tel"
                    class="form-control p-2 w-100 mb-1 border-0"
                    :class="{ 'is-invalid': errors['電話'] }"
                    placeholder="請輸入電話"
                    rules="required|numeric|min:7"
                    v-model="orderData.user.tel"
                  ></v-field>
                  <error-message name="電話" class="invalid-feedback"></error-message>
                </div>
              </form>
            </div>
          </div>

          <div class="col-12 col-md-6 mt-md-0 mt-5 d-flex flex-column">
            <h3 class="fs-4 fw-medium text-start mb-4">送貨資料</h3>
            <div class="bg-greyD4 px-8 py-5 text-dark flex-grow-1">
              <h5 class="fs-5 my-4 font-notosans">
                已選擇的送貨方式：{{ orderDeliverData.deliver }}
              </h5>

              <input
                type="checkbox"
                id="data"
                class="form-check-input my-4"
                v-model="recipientAsOrderData"
              />
              <label for="data" class="form-check-label my-4 fs-6 ms-2"
                >收件人資料與顧客資料相同</label
              >

              <form class="my-3">
                <div class="mb-4">
                  <label for="recipient" class="fs-6 mb-1">收件人名稱</label><br />
                  <v-field
                    id="recipient"
                    name="收件人姓名"
                    type="text"
                    class="form-control p-2 w-100 mb-1 border-0"
                    :class="{ 'is-invalid': errors['收件人姓名'] }"
                    placeholder="請輸入收件人姓名"
                    rules="required"
                    v-model="recipient.name"
                    :disabled="recipientAsOrderData"
                  ></v-field>
                  <error-message name="收件人姓名" class="invalid-feedback"></error-message>
                  <p class="mb-3 text-end">請填入收件人真實姓名，以確保順利收件</p>
                </div>
                <label for="recipient-phone" class="fs-6 mb-1">收件人電話號碼</label><br />
                <div class="mb-4">
                  <v-field
                    id="recipient-phone"
                    name="收件人電話"
                    type="tel"
                    class="form-control p-2 w-100 mb-1 border-0"
                    :class="{ 'is-invalid': errors['收件人電話'] }"
                    placeholder="請輸入收件人電話"
                    rules="required|numeric|min:7"
                    v-model="recipient.tel"
                    :disabled="recipientAsOrderData"
                  ></v-field>
                  <error-message name="收件人電話" class="invalid-feedback"></error-message>
                </div>
                <label for="recipient-address" class="fs-6 mb-1" v-if="showAddress()"
                  >收件人地址</label
                ><br />
                <div class="mb-4">
                  <v-field
                    id="recipient-address"
                    name="收件人地址"
                    type="text"
                    class="form-control p-2 w-100 mb-1 border-0"
                    :class="{ 'is-invalid': errors['收件人地址'] }"
                    placeholder="請輸入收件人地址"
                    rules="required"
                    v-model="recipient.address"
                    v-if="showAddress()"
                  ></v-field>
                  <error-message name="收件人地址" class="invalid-feedback"></error-message>
                </div>
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
              <div class="">
                <form action="" class="">
                  <div class="form-floating">
                    <v-field
                      id="Card-number"
                      name="卡號"
                      type="tel"
                      class="form-control mb-2"
                      :class="{ 'is-invalid': errors['卡號'] }"
                      placeholder="請輸入卡號"
                      :rules="showCreditCard() ? '' : 'required|numeric|digits:16'"
                      :disabled="showCreditCard()"
                    ></v-field>
                    <error-message name="卡號" class="invalid-feedback mb-2"></error-message>

                    <label for="Card-number">卡號</label>
                  </div>

                  <div class="form-floating">
                    <v-field
                      id="Card-name"
                      name="持卡人姓名"
                      type="text"
                      class="form-control mb-2"
                      :class="{ 'is-invalid': errors['持卡人姓名'] }"
                      placeholder="請輸入持卡人姓名"
                      :rules="showCreditCard() ? '' : 'required'"
                      :disabled="showCreditCard()"
                    ></v-field>
                    <error-message name="持卡人姓名" class="invalid-feedback mb-2"></error-message>
                    <label for="Card-name">持卡人姓名</label>
                  </div>

                  <div class="form-floating">
                    <v-field
                      id="Card-date"
                      name="有效期限"
                      type="text"
                      class="form-control mb-2"
                      :class="{ 'is-invalid': errors['有效期限'] }"
                      placeholder="請輸入有效期限"
                      :rules="showCreditCard() ? '' : 'required|numeric|digits:4'"
                      :disabled="showCreditCard()"
                    ></v-field>
                    <error-message name="有效期限" class="invalid-feedback mb-2"></error-message>
                    <label for="Card-date">有效期限(MM/YY)</label>
                  </div>

                  <div class="form-floating">
                    <v-field
                      id="Card-pin"
                      name="安全碼"
                      type="text"
                      class="form-control mb-2"
                      :class="{ 'is-invalid': errors['安全碼'] }"
                      placeholder="請輸入安全碼"
                      :rules="showCreditCard() ? '' : 'required|numeric|digits:3'"
                      :disabled="showCreditCard()"
                    ></v-field>
                    <error-message name="安全碼" class="invalid-feedback mb-2"></error-message>
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
                <textarea
                  name=""
                  id=""
                  rows="15"
                  class="mb-4 w-100 no-resize border-0"
                  v-model="orderData.message"
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container py-8 text-start text-primary">
      <div class="row">
        <div class="col-lg-6 col-12">
          <RouterLink to="/cart" class="d-flex align-items-center p-8 fs-5 fw-medium text-primary"
            ><span class="material-icons fs-5 me-2"> arrow_back_ios_new </span
            ><span>返回購物車</span></RouterLink
          >
        </div>

        <div class="col-lg-6 col-12 p-8">
          <div class="d-flex mb-4">
            <input
              type="checkbox"
              id="subscribe"
              style="width: 1em; height: 1em"
              class="form-check-input"
              checked
            />
            <label for="subscribe" class="form-check-label fs-6 ms-2">訂閱最新消息</label>
          </div>
          <div class="d-flex mb-8">
            <input
              type="checkbox"
              id="private"
              style="width: 1em; height: 1em"
              class="form-check-input"
              v-model="agree"
            />

            <label for="private" class="form-check-label fs-6 ms-2"
              >本人同意網站
              <a class="text-decoration-underline" @click.prevent="openModal('條款')"
                >網站服務條款</a
              >
              及
              <a class="text-decoration-underline" @click.prevent="openModal('政策')"
                >隱私權政策</a
              ></label
            >
            <br />
            <div class="invalid-feedback">Example invalid feedback text</div>
          </div>

          <button type="submit" class="btn btn-primary p-4 fs-4 w-100" :disabled="!agree">
            提交訂單
          </button>
        </div>
      </div>
    </div>
  </VForm>

  <!-- 網站服務條款與政策Modal -->
  <div
    class="modal fade"
    id="policyModal"
    tabindex="-1"
    aria-labelledby="policyModalLabel"
    aria-hidden="true"
    ref="policyModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" v-if="policy.DOCState">網站服務條款</h1>
          <h1 class="modal-title fs-5" v-else>隱私權政策</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-start">
          <!-- 網站服務條款 -->
          <div v-if="policy.DOCState" class="p-4">
            <p>
              歡迎光臨GreenSheep！我們是一個專注於提供精美飾品的電子商務平台。在使用本網站前，請詳細閱讀以下條款，使用本網站即表示您同意遵守以下規定。
            </p>
            <br />
            <ul>
              <li>
                使用條款：您同意僅以合法目的使用本網站，不得從事任何違法或損害他人權益的活動。
              </li>
              <li>
                責任限制：GreenSheep對於因使用本網站而引起的任何直接、間接、附帶或特別的損失不承擔責任。
              </li>
              <li>
                商品信息：我們努力確保在網站上提供的所有商品信息準確無誤，但不能保證所有信息都是完整和最新的。
              </li>
              <li>使用者責任：您應對您的帳戶和密碼保密，並對在您的帳戶下的所有活動負責。</li>
              <li>
                知識產權：本網站上的所有內容，包括但不限於文字、圖像、標誌，均受版權和商標法保護。
              </li>
              <li>其他條款：本條款未涉及的其他問題，將遵循GreenSheep的一般業務實踐和標準。</li>
            </ul>

            感謝您選擇GreenSheep作為您購買飾品的平台，我們將竭盡所能為您提供最佳的購物體驗！
          </div>
          <!-- 隱私權政策 -->
          <div v-else class="p-4">
            <p>
              歡迎您使用GreenSheep網站服務。我們非常重視您的隱私保護，並承諾保護您提供的個人信息。請您在使用本網站前仔細閱讀以下隱私條款內容：
            </p>
            <br />
            <ul>
              <li>
                收集信息：當您註冊帳戶、下訂單或與我們聯繫時，我們可能收集您的姓名、聯繫方式、郵寄地址等個人信息。
              </li>
              <li>
                信息用途：我們收集的信息將用於處理訂單、提供客戶服務、改善網站體驗以及向您發送促銷活動和產品信息。
              </li>
              <li>
                信息保護：我們採取合理的安全措施來保護您的個人信息，防止未經授權的訪問、使用或泄露。
              </li>
              <li>
                信息分享：我們不會未經您的同意將您的個人信息分享給第三方，除非為了履行訂單或遵守法律法規的要求。
              </li>
              <li>
                Cookie使用：我們可能使用Cookie技術收集和存儲有關您訪問本網站的信息，以改善您的網站體驗。
              </li>
              <li>隱私政策更新：我們保留隨時更新隱私條款的權利，更新後的條款將在本網站上發布。</li>
            </ul>

            使用GreenSheep即表示您同意本隱私條款的條件和規定。如果您對此有任何疑問或需要進一步說明，請隨時聯繫我們。
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
        </div>
      </div>
    </div>
  </div>
  <VueLoading :active="isLoading" />
</template>

<script>
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import Modal from 'bootstrap/js/dist/modal'
import Swal from 'sweetalert2'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data() {
    return {
      agree: false,
      recipientAsOrderData: false,
      recipient: {
        name: '',
        tel: '',
        address: ''
      },
      orderData: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: '',
        birthday: ''
      },
      orderDeliverData: {},
      policy: {
        DOCState: true,
        Modal: '',
        Check: false
      }
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'updateCart', 'deleteCart']),
    //選擇寄送時出現地址
    showAddress() {
      if (this.orderDeliverData.deliver === '中華郵政') {
        return true
      }
      if (this.orderDeliverData.deliver === '黑貓宅急便') {
        return true
      }
      if (this.orderDeliverData.deliver === '宅配通') {
        return true
      }
      if (this.orderDeliverData.deliver === 'UPS') {
        return true
      }
      if (this.orderDeliverData.deliver === 'DHL') {
        return true
      }
    },
    //選擇便利店時出現選店
    showStore() {
      if (this.orderDeliverData.deliver === '7-11取貨') {
        return true
      }
      if (this.orderDeliverData.deliver === '全家取貨') {
        return true
      }
      if (this.orderDeliverData.deliver === 'OK取貨') {
        return true
      }
      if (this.orderDeliverData.deliver === '萊爾富取貨') {
        return true
      }
    },
    showCreditCard() {
      if (this.orderDeliverData.payWay === '信用卡') {
        return false
      } else {
        return true
      }
    },

    sendOrder() {
      if (this.carts.length === 0) {
        Swal.fire({
          title: '購物車是空的',
          confirmButtonColor: '#566B5A',
          icon: 'warning'
        })
        return
      }
      if (this.showStore()) {
        this.recipient.address = `${this.orderDeliverData.deliver} ...店`
      }
      this.orderData.user.name = this.recipient.name
      this.orderData.user.tel = this.recipient.tel
      this.orderData.user.address = this.recipient.address
      const postOrderUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/order`
      this.$http
        .post(postOrderUrl, { data: this.orderData })
        .then(() => {
          this.getCarts()
          this.$router.push('/success')
        })
        .catch((err) => {
          console.log(err)
        })
    },

    checkLogin() {
      let user = localStorage.getItem('userInfo')
      const getUserUrl = 'https://greensheep-json-server.onrender.com/users'
      if (user) {
        const loginUserId = JSON.parse(user).id
        this.$http
          .get(getUserUrl)
          .then((res) => {
            res.data.forEach((item) => {
              if (item.id === loginUserId) {
                this.orderData.user.name = item.nickName
                this.orderData.user.email = item.email
                this.orderData.user.tel = item.phone
                this.orderData.user.address = item.location
              }
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    openModal(state) {
      state === '條款' ? (this.policy.DOCState = true) : (this.policy.DOCState = false)
      this.policy.Modal.show()
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'deliverData', 'total', 'isLoading'])
  },
  watch: {
    recipientAsOrderData(value) {
      if (value) {
        this.recipient.name = this.orderData.user.name
        this.recipient.tel = this.orderData.user.tel
        this.recipient.address = this.orderData.user.address
      }
    }
  },

  mounted() {
    this.policy.Modal = new Modal(this.$refs.policyModal)
    this.orderDeliverData = { ...this.deliverData }
    this.checkLogin()
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
      margin-bottom: 16px;
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
