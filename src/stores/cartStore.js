import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('cartStore', {
  state: () => ({
    carts: [],
    cart: {},
    deliverData: {},
    isLoading: false,
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
          this.getCarts()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '加入購物車成功',
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //取得購物車資料
    getCarts() {
      const getCartUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/cart`
      axios
        .get(getCartUrl)
        .then((res) => {
          this.carts = res.data.data.carts
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //修改購物車(修改數量)
    updateCart(cart) {
      const updateCartUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/cart/${cart.id}`
      const cartData = {
        data: {
          product_id: cart.product.id,
          qty: cart.qty
        }
      }
      this.isLoading = true
      axios
        .put(updateCartUrl, cartData)
        .then(() => {
          this.getCarts()
          this.isLoading = false
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '修改數量成功',
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
        })
        .catch((err) => {
          console.log(err)
        })  
    },
    //刪除購物車中單筆資料
    deleteCart(id) {
      const deleteCartUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/cart/${id}`
      //加入sweetalert
      Swal.fire({
        title: '是否刪除該商品?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#566b5a',
        cancelButtonText: '  否  ',
        confirmButtonText: '  是  '
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLoading = true
          axios
            .delete(deleteCartUrl)
            .then(() => {
              this.isLoading = false
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '商品刪除成功',
                showConfirmButton: false,
                toast: true,
                timer: 1500
              })              
              this.getCarts()
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },
    //刪除所有購物車內容
    deleteAllCarts(){
      const deleteAllCartsUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/carts`
      Swal.fire({
        title: '是否刪除購物車全部商品?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#566b5a',
        cancelButtonText: '  否  ',
        confirmButtonText: '  是  '
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLoading = true
          axios
            .delete(deleteAllCartsUrl)
            .then(() => {
              this.isLoading = false
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '所有商品刪除成功',
                showConfirmButton: false,
                toast: true,
                timer: 1500
              })
              this.getCarts()
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },
    getDeliverData(data) {
      this.deliverData = { ...data }
    }
  },

  getters: {
    //計算總價
    total() {
      let total = 0
      this.carts.forEach((item) => {
        total += item.final_total
      })
      return parseInt(total)
    }
  }
})
