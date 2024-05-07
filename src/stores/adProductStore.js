import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
export default defineStore('adProductStore', {
  state: () => ({
    allProducts: [],
    allPagination: {},
    currentTab: '所有商品',
    loadingStatus: false,
    bestSeller: [
      //梅川衣服
      '-NsVQCmAiuvXWHJ9cf1A',
      //波光淋漓
      '-NsVL3yywAfe5aYKsTVv',
      //星空之約
      '-NsUsi2n1gdOSF0I798e'
    ]
  }),
  getters: {},
  actions: {
    getProducts(tab, page = 1) {
      this.currentTab = tab
      this.loadingStatus = true

      axios
        .get(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/products?page=${page}`)
        .then((res) => {
          switch (tab) {
            case '所有商品':
              this.allProducts = res.data.products
              this.allPagination = res.data.pagination

              break

            case '已售完':
              this.allProducts = res.data.products.filter((product) => product.stockNum === 0)

              break

            case '未上架':
              this.allProducts = res.data.products.filter(
                (product) => product.is_enabled === false || product.is_enabled === ''
              )

              break
          }
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loadingStatus = false
        })
    }
  }
})
