import { defineStore, storeToRefs } from 'pinia'
import axios from 'axios'
import searchStore from '@/stores/searchStore'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('productStore', {
  state: () => ({
    products: [], //原始資料
    categoryProducts: [], //分類後資料
    currentProducts: [], //頁碼取得後的資料
    currentPage: 1,
    category: '全部商品 ALL',
    categories: [
      '項鍊 PENDANT',
      '戒指 RING',
      '耳環 EARRINGS',
      '手鍊 BRACELET',
      '客製設計 CUSTOMIZED ',
      '其他配件 OTHERS'
    ],
    productInfo: {},
    recommendProducts: [],
    isLoading: false,
    loadingStatus: {
      loadingGetProducts: false,
      loadingGetProduct: false,
      loadingFilterProducts: false
    }
  }),

  actions: {
    //取得全部產品
    async getProducts() {
      this.isLoading = true
      const apiUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products/all`
      try {
        const res = await axios.get(apiUrl)
        this.products = res.data.products
        this.getSort('new')
        this.categoryProducts = this.products
        this.currentProducts = this.products.slice(
          (this.currentPage - 1) * 12,
          this.currentPage * 12
        )
      } catch (err) {
        alert(err.data.message)
      }
      this.isLoading = false
    },
    //排序篩選
    getSort(status) {
      if (status === 'new') {
        this.showTitle = '最近更新'
        console.log('1')
        return this.products.sort((a, b) => b.updateTime - a.updateTime)
      } else if (status === 'priceH2L') {
        this.showTitle = '價格 - 由高到低'
        console.log('2')
        return this.products.sort((a, b) => b.price - a.price)
      } else if (status === 'priceL2H') {
        this.showTitle = '價格 - 由低到高'
        console.log('2')
        return this.products.sort((a, b) => a.price - b.price)
      } else if (status === 'timeN2O') {
        this.showTitle = '上架時間 - 由新到舊'
        console.log('3')

        return this.products.sort((a, b) => b.createTime - a.createTime)
      } else if (status === 'timeO2N') {
        this.showTitle = '上架時間 - 由舊到新'
        console.log('4')
        return this.products.sort((a, b) => a.createTime - b.createTime)
      }
    },
    //顯示當前分類及頁數的產品
    getFilterProducts(category, page = 1, status) {
      this.loadingStatus.loadingFilterProducts = true
      this.category = category
      if (category === '全部商品 ALL' || category === '') {
        this.category = '全部商品 ALL'
        this.currentPage = 1
        this.getSort(status)
        console.log(status)
        this.categoryProducts = this.products
        this.currentProducts = this.categoryProducts.slice((page - 1) * 12, page * 12)
        this.loadingStatus.loadingFilterProducts = false
      } else if (category) {
        console.log('@@@')
        this.getSort(status)
        this.categoryProducts = this.products.filter((item) => item.category === category)
        this.currentProducts = this.categoryProducts.slice((page - 1) * 12, page * 12)
        this.loadingStatus.loadingFilterProducts = false
      }
    },

    //取得單一產品
    async getProductInfo(id) {
      this.loadingStatus.loadingGetProduct = true
      const url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/product/${id}`
      try {
        const res = await axios.get(url)
        console.log(res.data)
        this.productInfo = res.data.product
      } catch (err) {
        console.error(err)
      } finally {
        this.loadingStatus.loadingGetProduct = false
      }
    },
    //取得推薦商品
    async getRecommendProducts(id) {
      this.recommendProducts = []
      while (this.recommendProducts.length < 4) {
        const randomProduct = this.products[Math.floor(Math.random() * this.products.length)]
        if (!this.recommendProducts.includes(randomProduct) || id === this.recommendProducts.id) {
          this.recommendProducts.push(randomProduct)
        }
      }
    }
  }
})
