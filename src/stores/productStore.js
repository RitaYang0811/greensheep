import { defineStore, storeToRefs } from 'pinia'
import axios from 'axios'
import searchStore from '@/stores/searchStore'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

const { searchQuery } = searchStore()

export default defineStore('productStore', {
  state: () => ({
    //searchWords: '',
    products: [],
    filterProducts: [],
    recommendProducts: [],
    category: '全部商品 ALL',
    categories: ['項鍊 PENDANT', '戒指 RING', '耳環 EARRINGS', '手鍊 BRACELET'],
    productInfo: {},
    pagination: {},
    loadingStatus: false
  }),

  actions: {
    async getProducts(route, page = 1) {
      this.loadingStatus = true

      const { category = '' } = route.query
      console.log('getProducts的路由', route)
      this.category = category

      const apiUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products?category=${category}&page=${page}`

      try {
        const res = await axios.get(apiUrl)
        this.products = res.data.products
        console.log('所有商品', this.products)

        this.pagination = { ...res.data.pagination }
      } catch (err) {
        console.error(err.data.message)
      } finally {
        this.loadingStatus = false
      }
    },

    async getProductInfo(id) {
      const url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/product/${id}`
      try {
        const res = await axios.get(url)
        this.loadingStatus = true
        console.log(res.data)
        this.productInfo = res.data.product
      } catch (err) {
        console.error(err)
      } finally {
        this.loadingStatus = false
      }
    },

    async getRecommendProducts(id) {
      this.recommendProducts = []
      while (this.recommendProducts.length < 4) {
        const randomProduct = this.products[Math.floor(Math.random() * this.products.length)]

        if (!this.recommendProducts.includes(randomProduct) || id === this.recommendProducts.id) {
          this.recommendProducts.push(randomProduct)
        }
      }
      //console.log('推荐商品', this.recommendProducts)
    }
  }
})
