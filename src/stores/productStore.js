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
  // getters: {
  //   filterProducts: () => {
  //     return this.products.filter((product) => product.title.match(searchQuery))
  //   }
  // },
  actions: {
    //初始化取得產品
    getProducts(route, page = 1) {
      this.loadingStatus = true

      const { category = '' } = route.query
      console.log('getProducts的路由', route)
      this.category = category

      const apiUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products?category=${category}&page=${page}`

      axios
        .get(apiUrl)
        .then((res) => {
          this.products = res.data.products
          console.log('所有商品', this.products)

          this.pagination = { ...res.data.pagination }
        })
        .catch((err) => {
          console.log(err.data.message)
        })
        .finally(() => {
          this.loadingStatus = false
        })
    },

    getProductInfo(id) {
      let url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/product/${id}`
      axios
        .get(url)
        .then((res) => {
          this.loadingStatus = true
          console.log(res.data)
          this.productInfo = res.data.product
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loadingStatus = false
        })
    },
    getRecommendProducts(id) {
      this.recommendProducts = []
      while (this.recommendProducts.length < 4) {
        const randomProduct = this.products[Math.floor(Math.random() * this.products.length)]

        if (!this.recommendProducts.includes(randomProduct) || id === this.recommendProducts.id) {
          this.recommendProducts.push(randomProduct)
        }
      }
      //console.log('推薦商品', this.recommendProducts)
    },
    getFilterProducts(searchQuery) {
      console.log('111', searchQuery)

      if (searchQuery === '') {
        this.filterProducts = this.products
      } else {
        this.filterProducts = this.products.filter((product) => product.title.match(searchQuery))
      }
      console.log('getFilterProducts', this.filterProducts, searchQuery)
    }
  }
})
