import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    carts: [],
    cart:{},
  }),
  actions: {
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      axios
        .post(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/cart`, { data: data })
        .then(() => {

          this.getCarts();
        })
        .catch((err) => {
          console.log(err)
        })
    },

    //取得購物車資料
    getCarts() {
      // this.isLoading = true;
      const getCartUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/cart`;
      axios.get(getCartUrl)
        .then((res) => {
          this.carts = res.data.data.carts;
          // this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //修改購物車(修改數量)
    updateCart(cart) {
      // this.isLoading = true;
      const updateCartUrl = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/cart/${cart.id}`;
      const cartData = {
        data: {
          product_id: cart.id,
          qty: cart.qty,
        }
      };
      axios.put(updateCartUrl, cartData)
        .then(() => {
          this.getCarts();
          // this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        })
    },
    //刪除購物車中單筆資料
    deleteCart(id) {
      this.isLoading = true;
      const deleteCartUrl = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/cart/${id}`;
      axios.delete(deleteCartUrl)
        .then(() => {
          this.getCarts();
          // this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        })
    },
  
  },
  getters:{
    //計算總價
    total() {
      let total = 0
      this.carts.forEach((item) => {
        total += item.final_total
      })
      return total
    },
  },


})
