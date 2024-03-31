import { defineStore } from 'pinia'
import axios from 'axios'
import { toastError } from '@/utils/sweetalertToast.js'
import { scrollToTop } from '@/utils/scrollToTop.js'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('articleStore', {
  state: () => ({
    articles: [],
    currentPage: 1,
    currentPageArticles: [],
    isLoading: false
  }),
  actions: {
    // 取得所有文章
    async getArticles() {
      try {
        this.isLoading = true

        // 第一次 get 文章回傳的頁碼資料
        let currentPageNum
        let totalPagesNum

        const url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/articles`

        // get 第一頁資料
        const resFirstPage = await axios.get(url)

        this.articles = resFirstPage.data.articles // 第一頁的 data
        currentPageNum = resFirstPage.data.pagination.current_page + 1 // +1 給下段的 while 判斷需不需要繼續打 API
        totalPagesNum = resFirstPage.data.pagination.total_pages

        // 若有 2 頁以上，繼續 get 後續頁碼的資料
        while (currentPageNum <= totalPagesNum) {
          const resOtherPages = await axios.get(`${url}?page=${currentPageNum}`)
          this.articles = [...this.articles, ...resOtherPages.data.articles]
          currentPageNum++
        }

        // 排序 置頂優先
        this.articles.sort((a, b) => {
          const aNum = a.isPinned === undefined ? 0 : Number(a.isPinned)
          const bNum = b.isPinned === undefined ? 0 : Number(b.isPinned)

          return bNum - aNum
        })

        // 取得當頁要顯示的文章
        this.changePage(this.currentPage)
      } catch (err) {
        toastError(err.response.data.message)
      } finally {
        this.isLoading = false
      }
    },
    // 取得當頁的文章資料
    changePage(page) {
      this.currentPageArticles = this.articles.slice((page - 1) * 11, page * 11) // 11: 一頁顯示幾筆資料
      // page  couponsSliceIndex
      //  1         0 ~ 10
      //  2        11 ~ 20
      scrollToTop()
    },
    updateCurrentPage(page) {
      this.currentPage = page
    }
  }
})
