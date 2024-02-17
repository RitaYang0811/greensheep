import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('productStore', {
  state: () => ({
    //產品列表

    products: [],
    pagination: {}
  }),
  actions: {
    //取得產品列表
    getProducts(page) {
      axios
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    }
  }
})
