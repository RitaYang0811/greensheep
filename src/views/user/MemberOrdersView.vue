<template>
  <!-- <nav aria-label="breadcrumb">
    <ol class="breadcrumb mb-7 mb-md-15">
      <li class="breadcrumb-item"><a href="index.html">首頁</a></li>
      <li class="breadcrumb-item">
        <a href="9-1.memberInfo.html"> 會員資料</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        所有訂單
      </li>
    </ol>
  </nav> -->
  <h1 class="fs-3 fs-lg-2 text-start mb-6">所有訂單</h1>
  <table class="table">
    <thead class="bg-transparent">
      <tr>
        <th scope="col" class="py-4 text-primary fw-medium">
          訂單編號
        </th>
        <th scope="col" class="py-4 text-primary fw-medium">
          下訂日期
        </th>
        <th scope="col" class="py-4 text-primary fw-medium">
          商品資訊
        </th>
        <th scope="col" class="py-4 text-primary fw-medium">
          訂單狀態
        </th>
      </tr>
    </thead>
    <tbody class="bg-transparent">
      <tr v-for="order in userOrders" :key="order.id">
        <th scope="row" class="py-4 text-primary fw-medium">
          {{ order?.create_at }}
        </th>
        <td class="py-4 text-primary">2023/07/25{{  }}</td>
        <td class="py-4 text-primary">{{  }}</td>
        <td class="">
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample1" role="button"
            aria-expanded="false" aria-controls="collapseExample">
            收到訂單
          </a>
        </td>
      </tr>
      <!-- <tr class="collapse border-0" id="collapseExample1">
        <th colspan="4" class="">
          <div class="my-12 pb-5">
            <div class="position-relative m-4 w-100 mx-auto">
              <div class="progress" style="height: 1px">
                <div class="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0"
                  aria-valuemax="100"></div>
              </div>
              <button type="button"
                class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
                style="width: 3rem; height: 3rem">
                1
              </button>
              <button type="button"
                class="position-absolute top-0 start-25 translate-middle btn btn-sm bg-white text-primary rounded-pill"
                style="width: 3rem; height: 3rem">
                2
              </button>
              <button type="button"
                class="position-absolute top-0 start-50 translate-middle btn btn-sm bg-white text-primary rounded-pill"
                style="width: 3rem; height: 3rem">
                3
              </button>
              <button type="button"
                class="position-absolute top-0 start-75 translate-middle btn btn-sm bg-white text-primary rounded-pill"
                style="width: 3rem; height: 3rem">
                4
              </button>
              <button type="button"
                class="position-absolute top-0 start-100 translate-middle btn btn-sm bg-white text-primary rounded-pill"
                style="width: 3rem; height: 3rem">
                5
              </button>
            </div>

            <div class="position-relative mt-15 mx-auto">
              <p class="position-absolute top-0 start-0 translate-middle text-primary">
                收到訂單
              </p>
              <p class="position-absolute top-0 start-25 translate-middle text-primary">
                製作中
              </p>
              <p class="position-absolute top-0 start-50 translate-middle text-primary">
                出貨
              </p>
              <p class="position-absolute top-0 start-75 translate-middle text-primary">
                送達門市
              </p>
              <p class="position-absolute top-0 end-n7 translate-middle text-primary">
                完成取貨
              </p>
            </div>
          </div>
        </th>
      </tr> -->

      <!-- <tr>
        <th scope="row" class="text-primary fw-medium py-4">
          20230204003599
        </th>
        <td class="py-4 text-primary">2023/02/04</td>
        <td class="py-4 text-primary">永恆經典單鑽戒</td>
        <td class="">
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button"
            aria-expanded="false" aria-controls="collapseExample">
            給予評價
          </a>
        </td>
      </tr>

      <tr>
        <th scope="row" class="text-primary fw-medium py-4">
          20220811000453
        </th>
        <td class="py-4 text-primary">2022/08/11</td>
        <td class="py-4 text-primary">梅川伊芙造型項鍊</td>
        <td>
          <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button"
            aria-expanded="false" aria-controls="collapseExample">
            評價完成
          </a>
        </td>
      </tr> -->
    </tbody>
  </table>
</template>

<script>
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
export default {
  data() {
    return {
      userEmail: "",
      userOrders: [],
      // products: {}


    }
  },


  methods: {
    getUser() {
      let loginUser = localStorage.getItem("userInfo")
      const loginUserId = JSON.parse(loginUser).id
      const url = "https://greensheep-json-server.onrender.com/users"
      this.$http.get(url)
        .then((res) => {
          res.data.forEach((item) => {
            if (item.id == loginUserId) {
              this.userEmail = item.email
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })

    },

    getOrders() {
      const getOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/orders`;
      this.$http.get(getOrdersUrl)
        .then((res) => {
          // console.log(res.data.orders)
          res.data.orders.forEach((item) => {
            // console.log(item)
            if (item.user.email == this.userEmail) {
              this.userOrders.push(item)
            }
          })
          console.log(this.userOrders)
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

    printDate(date){

    },

  },

  mounted() {
    this.getUser()
    this.getOrders()
  },

}
</script>

<style lang="scss"></style>