import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
export default defineStore('adProductStore', {
  state: () => ({
    allProducts: []
  }),
  actions: {
    getProducts() {
      axios
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/products`)
        .then((res) => {
          this.allProducts = res.data.products
          console.log(this.allProducts)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
