<template>
  <h1 class="fs-3 fs-lg-2 text-start mb-6 fw-bold">所有訂單</h1>
  <table class="table">
    <thead class="bg-primary">
      <tr>
        <th scope="col" class="py-4 text-white fw-bold">訂單編號</th>
        <th scope="col" class="py-4 text-white fw-bold">下訂日期</th>
        <th scope="col" class="py-4 text-white fw-bold">商品資訊</th>
        <th scope="col" class="py-4 text-white fw-bold">訂單狀態</th>
        <th scope="col" class="py-4 text-white fw-bold">詳細資料</th>
      </tr>
    </thead>
    <tbody class="bg-white">
      <tr v-for="order in userOrders" :key="order.id">
        <th scope="row" class="py-4 text-primary fw-medium align-middle">
          {{ order?.create_at }}
        </th>
        <td class="py-4 text-primary align-middle">{{ printDate(order?.create_at) }}</td>
        <td class="py-4 text-primary">
          <div class="mb-1" v-for="product in Object.values(order.products)" :key="product?.id">
            {{ product?.product.title }} X {{ product?.qty }}
          </div>
        </td>
        <td class="align-middle">
          <span class="text-primary fw-bold">
            {{ printStatus(order.orderStatus) }}
          </span>
        </td>
        <td class="align-middle">
          <!-- 用modal來顯示詳細資料 -->
          <a href="" class="p-3" data-bs-toggle="modal" :data-bs-target="`#${order.id}`">
            <i class="bi bi-box-arrow-up-right"></i>
          </a>
        </td>
        <!-- Modal -->
        <div
          class="modal fade"
          :id="order.id"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header bg-primary">
                <h1 class="modal-title fs-5 text-light" id="exampleModalLabel">
                  訂單編號：{{ order?.create_at }}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div :id="order.id" class="accordion-collapse collapse show" ref="collape">
                  <div class="accordion-body p-1">
                    <!-- 單筆產品(商品渲染處) -->
                    <!-- products為陣列格式，用Object.values來拆開 -->
                    <div
                      class="d-flex align-items-center justify-content-between my-1"
                      v-for="product in Object.values(order.products)"
                      :key="product.id"
                    >
                      <div class="ms-3 d-flex align-items-center">
                        <span class="fw-medium text-grey66 fs-8 m-2">
                          {{ product.product.category }} /
                        </span>
                        <h3 class="fs-6 fw-medium text-dark">
                          {{ product.product.title }}
                        </h3>
                      </div>
                      <div class="me-7 d-flex text-grey99">
                        <span class="mx-3">數量：{{ product.qty }} </span>
                        <p>總價：{{ product.total }}</p>
                      </div>
                    </div>
                    <div class="my-4 border border-1"></div>
                    <div class="d-flex justify-content-between mx-4 text-grey66">
                      <p class="ms-1">
                        優惠券：
                        <span class="ms-2 fs-8 text-secondary fw-medium">
                          {{ Object.values(order.products)[0]?.coupon?.code }}
                        </span>
                      </p>
                      <p class="text-primary fw-medium">
                        總金額：NT$
                        {{
                          Object.values(order.products)[0]?.coupon?.discount_price
                            ? parseInt(order.total) -
                              Object.values(order.products)[0]?.coupon?.discount_price
                            : parseInt(order.total)
                        }}
                      </p>
                    </div>
                    <div class="my-4 border"></div>
                    <!-- 用戶資料渲染處 -->
                    <div class="mb-4">
                      <div class="fs-6 text-primary ms-3 text-start">
                        <p class="mx-2 mb-3">客戶姓名：{{ order.user.name }}</p>
                        <p class="mx-2 mb-3">客戶電話：{{ order.user.tel }}</p>
                        <p class="mx-2 mb-3">客戶地址：{{ order.user.address }}</p>
                        <p class="mx-2 mb-3">客戶Email：{{ order.user.email }}</p>
                        <p class="mx-2 mb-3">備註：{{ order.message }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </tr>
    </tbody>
  </table>
  <VueLoading :active="isLoading" />
</template>

<script>
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
export default {
  data() {
    return {
      isLoading: false,
      userEmail: '',
      userOrders: []
    }
  },

  methods: {
    getUser() {
      let loginUser = localStorage.getItem('userInfo')
      const loginUserId = JSON.parse(loginUser).id
      const url = 'https://greensheep-json-server.onrender.com/users'
      this.$http
        .get(url)
        .then((res) => {
          res.data.forEach((item) => {
            if (item.id === loginUserId) {
              this.userEmail = item.email
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },

    getOrders() {
      this.isLoading = true
      const getOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/orders`
      this.$http
        .get(getOrdersUrl)
        .then((res) => {
          this.isLoading = false
          res.data.orders.forEach((item) => {
            if (item.user.email === this.userEmail) {
              this.userOrders.push(item)
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },

    printProducts(products) {
      const productsArr = Object.values(products)
      let productTitle = ''
      productsArr.forEach((item) => {
        productTitle = productTitle + `${item.product.title}, `
      })
      return productTitle
    },

    printDate(date) {
      let year = 0
      let mouth = 0
      let day = 0
      date = new Date(date * 1000)
      year = date.getFullYear()
      mouth = date.getMonth()
      day = date.getDate()
      return `${year} / ${mouth + 1} / ${day}`
    },

    printStatus(data) {
      if (data?.done) {
        return '訂單已完成'
      }
      if (data?.sendProduct) {
        return '商品已寄出'
      }
      if (data?.making) {
        return '商品製作中'
      } else {
        return '收到訂單'
      }
    }
  },

  mounted() {
    this.getUser()
    this.getOrders()
  }
}
</script>
