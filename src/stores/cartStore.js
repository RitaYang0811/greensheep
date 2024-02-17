import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    cart: []
  }),
  actions: {
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      axios
        .post(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/cart`, { data: data })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
