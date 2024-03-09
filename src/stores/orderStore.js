import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('orderStore', {
  state: () => ({
    allOrders: [],
    unpaidOrders: [],
    paidOrders: [],
    deletedOrders: [],
    doneOrders: []
  }),
  actions: {
    async getAllOrders() {
      try {
        this.allOrders = []
        this.unpaidOrders = []
        this.paidOrders = []
        this.deletedOrders = []
        this.doneOrders = []
        const getOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/orders`

        const res = await axios.get(getOrdersUrl)
        this.allOrders = res.data.orders
        console.log('Before forEach:', this.allOrders)
        this.allOrders.forEach((item) => {
          console.log('Processing item:', item)
          //若該訂單沒有orderStatus時，代表為新訂單，加入orderStatus。
          if (!item.orderStatus) {
            item.orderStatus = {
              getOrder: true,
              making: false,
              sendProduct: false,
              done: false
            }
          }
          //先篩出刪除訂單
          if (item.is_deleted) {
            this.deletedOrders.push(item)
          } else {
            //未刪除訂單中篩出付款和未付款
            if (!item.is_paid) {
              // 修改此處條件
              this.unpaidOrders.push(item) // 修改此處
            } else {
              // 新增這個條件
              this.paidOrders.push(item) // 新增這個部分
            }
          }
          //篩出完成訂單
          if (item.orderStatus.done) {
            this.doneOrders.push(item)
          }
          console.log('store', this.allOrders, this.unpaidOrders)
        })
      } catch (err) {
        console.log(err)
      }
    },
    async getNewOrders() {
      try {
        await this.getAllOrders()
        this.orderCreateTime = this.allOrders[0].create_at
        const currentTimeStamp = new Date().getTime()
        this.passedTime = Math.floor((currentTimeStamp - this.orderCreateTime) / (1000 * 60))
        console.log('時間', this.orderCreateTime, currentTimeStamp, this.passedTime)
        console.log()
      } catch (error) {
        console.log(error)
      }
    },

    updateOrder(data) {
      const updateOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/order/${data.id}`
      //更新訂單中塞入訂單狀態，用以處理訂單狀態
      data.orderStatus = this.orderStatus
      axios
        .put(updateOrdersUrl, { data })
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '訂單修改成功',
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
          location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteOrder(data) {
      const updateOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/order/${data.id}`
      Swal.fire({
        title: '是否刪除該訂單?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#566b5a',
        cancelButtonText: '  否  ',
        confirmButtonText: '  是  '
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('delete')
          data.is_deleted = true
          axios
            .put(updateOrdersUrl, { data })
            .then((res) => {
              console.log(res)
              location.reload()
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
      console.log(data)
    },
    recoverDelete(data) {
      const updateOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/order/${data.id}`
      data.is_deleted = false
      axios
        .put(updateOrdersUrl, { data })
        .then((res) => {
          console.log(res)
          location.reload()
          // this.getAllOrders();
          console.log('Rocover Delete')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    confirmDelete(data) {
      const deleteOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/order/${data}`
      Swal.fire({
        title: '確認永久刪除該訂單?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#566b5a',
        cancelButtonText: '  否  ',
        confirmButtonText: '  是  '
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(deleteOrdersUrl)
            .then(() => {
              location.reload()
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },
    deleteAllOrders() {
      const deleteAllOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/orders/all`
      Swal.fire({
        title: '確認永久刪除全部訂單?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#566b5a',
        cancelButtonText: '  否  ',
        confirmButtonText: '  是  '
      }).then((result) => {
        if (result.isConfirmed) {
          // console.log("刪除全部訂單")
          axios
            .delete(deleteAllOrdersUrl)
            .then(() => {
              location.reload()
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    }
  }
})
