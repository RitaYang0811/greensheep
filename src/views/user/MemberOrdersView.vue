<template>
  <h1 class="fs-3 fs-lg-2 text-start mb-6 fw-bold">所有訂單</h1>
  <table class="table">
    <thead class="bg-primary">
      <tr>
        <th scope="col" class="py-4 text-white fw-bold">訂單編號</th>
        <th scope="col" class="py-4 text-white fw-bold">下訂日期</th>
        <th scope="col" class="py-4 text-white fw-bold">商品資訊</th>
        <th scope="col" class="py-4 text-white fw-bold">訂單狀態</th>
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
            {{ product?.product.title }}
          </div>
        </td>
        <td class="align-middle">
          <span class="text-primary fw-bold">
            {{ printStatus(order.orderStatus) }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
export default {
  data() {
    return {
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
      const getOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/orders`
      this.$http
        .get(getOrdersUrl)
        .then((res) => {
          res.data.orders.forEach((item) => {
            if (item.user.email == this.userEmail) {
              this.userOrders.push(item)
            }
          })
          console.log(this.userOrders)
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

    getDate(data) {
      console.log(new Date(data * 1000).getFullYear())
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

<style lang="scss"></style>
