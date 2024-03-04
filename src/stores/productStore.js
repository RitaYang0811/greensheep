import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('productStore', {
  state: () => ({
    //產品列表
    products: [],

    //點擊的產品類別
    //
    category: '全部商品 ALL',
    categories: ['項鍊 PENDANT', '戒指 RING', '耳環 EARRINGS', '手鍊 BRACELET'],
    productInfo: {},
    pagination: {}
  }),
  actions: {
    //初始化取得產品
    getProducts(route, page = 1) {
      const { category = '' } = route.query
      console.log('分類', this.category)
      this.category = category

      const apiUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products?category=${category}&page=${page}`

      axios
        .get(apiUrl)
        .then((res) => {
          console.log('getProducts被觸發', apiUrl)

          this.products = res.data.products
          console.log('所有商品', this.products)

          this.pagination = { ...res.data.pagination }
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    // getProducts(page = 1) {
    //   console.log(this.$route)
    //   let url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products`
    //   if (this.category === '全部商品') {
    //     url += `?page=${page}`
    //   } else {
    //     url += `?category=${this.category}&page=${page}`
    //   }
    //   axios
    //     .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products?category=`)
    //     .then((res) => {
    //       console.log('getProducts被觸發')

    //       this.products = res.data.products
    //       this.pagination = res.data.pagination
    //     })
    //     .catch((err) => {
    //       console.log(err.data.message)
    //     })
    // },

    getProductInfo(id) {
      let url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/product/${id}`
      axios
        .get(url)
        .then((res) => {
          console.log(res.data)
          this.productInfo = res.data.product
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
