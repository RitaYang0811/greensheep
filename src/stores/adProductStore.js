import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
export default defineStore('adProductStore', {
  state: () => ({
    allProducts: [],
    allPagination: {},
    currentTab: '所有商品',
    loadingStatus: false
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

            case '未上架/草稿':
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
