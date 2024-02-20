import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('productStore', {
  state: () => ({
    allProducts: [],
    //產品列表
    products: [],
    //點擊的產品類別
    category: '全部商品',
    productInfo: {},
    pagination: {},
    //產品類別列表
    categoryList: [],
    materialList: []
  }),
  actions: {
    //初始化取得產品
    getAllProducts() {
      axios
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products`)
        .then((res) => {
          console.log('getAllProducts被觸發')
          //全部商品
          this.allProducts = res.data.products
          console.log(this.allProducts)
          this.getCategoryList()
          this.products = { ...this.allProducts }
          this.pagination = { ...res.data.pagination }
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    getProducts(page = 1) {
      let url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products`
      if (this.category === '全部商品') {
        url += `?page=${page}`
      } else {
        url += `?category=${this.category}&page=${page}`
      }
      axios
        .get(url)
        .then((res) => {
          console.log('getProducts被觸發')
          this.products = res.data.products
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          console.log(err.data.message)
        })
    },
    //取得點擊分類
    updateCategory(newCategory) {
      this.category = newCategory
      console.log('updateCategory被觸發', this.category)
      this.getProducts()
    },
    getProductInfo(id) {
      let url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/product/${id}`
      axios
        .get(url)
        .then((res) => {
          console.log(res.data)
          this.productInfo = res.data.product
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getCategoryList() {
      //產品類別列表
      const categories = new Set(this.allProducts.map((item) => item.category))
      this.categoryList = [...categories]
      console.log(this.categoryList)
    }
  }
})
