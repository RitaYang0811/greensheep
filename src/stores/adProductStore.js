import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
export default defineStore('adProductStore', {
  state: () => ({
    allProducts: [],
    isShow: false,
    loadingStatus: false,
    showTitle: '最近更新'
  }),
  getters: {},
  actions: {
    getProducts() {
      this.loadingStatus = true
      axios
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/products`)
        .then((res) => {
          this.allProducts = res.data.products
          console.log(this.allProducts)
          this.sort('new')
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loadingStatus = false
        })
    },
    //排列順序切換
    sort(status) {
      if (status === 'new') {
        this.showTitle = '最近更新'
        console.log('sortNew', status, this.isShow)
        return this.allProducts.sort((a, b) => b.updateTime - a.updateTime)
      } else if (status === 'priceH2L') {
        this.showTitle = '價格 - 由高到低'
        return this.allProducts.sort((a, b) => b.price - a.price)
      } else if (status === 'priceL2H') {
        this.showTitle = '價格 - 由低到高'
        return this.allProducts.sort((a, b) => a.price - b.price)
      } else if (status === 'timeN2O') {
        this.showTitle = '上架時間 - 由新到舊'
        return this.allProducts.sort((a, b) => b.createTime - a.createTime)
      } else if (status === 'timeO2N') {
        this.showTitle = '上架時間 - 由舊到新'
        return this.allProducts.sort((a, b) => a.createTime - b.createTime)
      }
    }
  }
})
