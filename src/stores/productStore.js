import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('productStore', {
  state: () => ({
    //原始全部資料
    products: [],
    //分類後資料
    categoryProducts: [],
    //展示資料（顯示用）
    currentProducts: [],
    //預設顯示分頁
    currentPage: 1,
    //預設顯示種類
    category: '全部商品 ALL',
    searchWord: '',
    //所有商品種類
    categories: [
      '全部商品 ALL',
      '項鍊 PENDANT',
      '戒指 RING',
      '耳環 EARRINGS',
      '手鍊 BRACELET',
      '客製設計 CUSTOMIZED'
    ],
    showTitle: '',
    //商品詳細頁資料
    productInfo: {},
    //推薦商品資料
    recommendProducts: [],
    //載入狀態
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
      } catch (err) {
        alert(err.data.message)
      }
      this.isLoading = false
    },
    //排序篩選
    getSort(status) {
      if (status === 'priceH2L') {
        this.showTitle = '價格 - 由高到低'
        return this.products.sort((a, b) => b.price - a.price)
      } else if (status === 'priceL2H') {
        this.showTitle = '價格 - 由低到高'
        return this.products.sort((a, b) => a.price - b.price)
      } else if (status === 'timeN2O') {
        this.showTitle = '上架時間 - 由新到舊'
        return this.products.sort((a, b) => b.createTime - a.createTime)
      } else if (status === 'timeO2N') {
        this.showTitle = '上架時間 - 由舊到新'
        return this.products.sort((a, b) => a.createTime - b.createTime)
      }
    },
    //顯示當前分類及頁數的產品
    getFilterProducts(category, page = 1, status = 'timeN2O', keyword) {
      this.loadingStatus.loadingFilterProducts = true
      //將選擇的分類賦值成當前分類
      this.category = category
      //將關鍵字賦值成當前關鍵字
      this.searchWord = keyword
      if (category === undefined) {
        this.currentPage = 1
        //將axios 取得的所有商品篩選關鍵字後成為總商品
        this.categoryProducts = this.products.filter((item) => item.title.match(this.searchWord))
        //將總商品依照每頁12筆成為展示商品
        this.currentProducts = this.categoryProducts.slice((page - 1) * 12, page * 12)
        this.loadingStatus.loadingFilterProducts = false
      } else if (category === '全部商品 ALL') {
        this.currentPage = 1
        this.getSort(status)
        //axios取得的所有商品為總商品
        this.categoryProducts = this.products
        //將總商品依照每頁12筆成為展示商品
        this.currentProducts = this.categoryProducts.slice((page - 1) * 12, page * 12)
        this.loadingStatus.loadingFilterProducts = false
      } else {
        this.getSort(status)
        //將axios 取得的所有商品篩選分類後成為總商品
        this.categoryProducts = this.products.filter((item) => item.category === category)
        //將總商品依照每頁12筆成為展示商品
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
        this.productInfo = res.data.product
      } catch (err) {
        console.error(err)
      } finally {
        this.loadingStatus.loadingGetProduct = false
      }
    },
    //取得推薦商品
    getRecommendProducts(id) {
      this.recommendProducts = []
      while (this.recommendProducts.length < 4) {
        const randomProduct = this.products[Math.floor(Math.random() * this.products.length)]
        if (
          !this.recommendProducts.some((product) => product.id === randomProduct.id) &&
          randomProduct.id !== id
        ) {
          this.recommendProducts.push(randomProduct)
        }
      }
    }
  }
})
