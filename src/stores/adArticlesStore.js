import { defineStore } from 'pinia'
import axios from 'axios'
import { dateToUnix } from '@/utils/dateToUnix.js'
import { toastSuccess, toastError } from "@/utils/sweetalertToast.js"
import { scrollToTop } from '@/utils/scrollToTop.js'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default defineStore('adminArticles',{
  state: () => ({
    currentTab: '公開文章',
    currentPage: 1,
    currentPageArticles: [],
    articles: [],
    publicArticles: [],
    privateArticles: [],
    pinnedArticles: [],
    searchArticles: [],
    article: {
      title: '',
      image: '',
      tag: '',
      isPublic: false,
      author: '',
      content: ''
    },
    isNew: true,
    isLoading: false,
    loadingStatus: {
      loadingItem: false,
      loadingDelete: false,
    },
    formStatus: {
      hasFormImage: true,
    }
	}),
  actions: {
    // 取得全部文章資料
    async getArticles() {
      try {
        this.articles = []
        this.publicArticles = []
        this.privateArticles = []
  
        this.loadingStatus.loadingItem = true
  
        // 第一次 get 文章回傳的頁碼資料
        let currentPageNum
        let totalPagesNum
  
        const url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/articles`

        // get 第一頁資料
        const resFirstPage = await axios.get(url)
        this.articles = resFirstPage.data.articles

        // +1 給下段的 while 判斷需不需要繼續打 API
        currentPageNum = resFirstPage.data.pagination.current_page + 1
        totalPagesNum = resFirstPage.data.pagination.total_pages

        // 若有 2 頁以上，繼續 get 後續頁碼的資料
        while(currentPageNum <= totalPagesNum) {
          const resOtherPages = await axios.get(`${url}?page=${currentPageNum}`)
          this.articles = [...this.articles, ...resOtherPages.data.articles]
          currentPageNum++;
        }

        // 文章分類
        this.filterArticles()
        // 依當前 tab 取得該 tab 的當一頁資料
        this.currentPage = 1
        this.getCurrentPageArticles(this.currentPage)

      } catch (err) {
        toastError(err.response.data.message)
      } finally {
        this.loadingStatus.loadingItem = false
      }
    },
    // 分為公開文章 / 草稿文章
    filterArticles() {
      // 取得置頂文章 id 陣列
      const filterPinnedArticles = [] 

      // 整理成 公開文章、草稿文章、已置頂文章 陣列
      this.articles.forEach(article => {
        article.isPublic ? this.publicArticles.push(article) : this.privateArticles.push(article)
        article.isPinned ? filterPinnedArticles.push(article.id) : ''
      })

      // 排序公開文章，置頂優先
      this.publicArticles.sort((a, b) => {
        const aNum = a.isPinned === undefined ? 0 : Number(a.isPinned)
        const bNum = b.isPinned === undefined ? 0 : Number(b.isPinned)

        return bNum - aNum
      })

      // AdArticlesView.vue 中的 watch 監聽無法監聽到陣列 push 的變化，
      // 所以宣告新陣列並賦值到 this.pinnedArticles 觸發監聽
      this.pinnedArticles = filterPinnedArticles
    },
    // 切換 tab
    changeTab(tab) {
      this.currentTab = tab
      // 回到第一頁並取得該 tab 的第一頁資料
      this.currentPage = 1
      this.getCurrentPageArticles(this.currentPage)
    },
    // 當前頁要顯示的資料
    getCurrentPageArticles(page, keyword = '') {
      switch(this.currentTab) {
        case '公開文章':
          this.searchArticles = this.publicArticles.filter(article => article.title.match(keyword))
          this.currentPageArticles = this.searchArticles.slice((page - 1) * 10, page * 10)
          // 10: 一頁顯示幾筆資料
          // page  articlesSliceIndex
          //  1         0 ~ 9
          //  2        10 ~ 19
          break
        case '草稿文章':
          this.searchArticles = this.privateArticles.filter(article => article.title.match(keyword))
          this.currentPageArticles = this.searchArticles.slice((page - 1) * 10, page * 10)
          break
      }
      scrollToTop()
    },
    // 文章行為(新增、編輯、刪除)
    articleActivity(type, id) {
      switch(type) {
        case 'delete':
          this.deleteArticle(id)
          break
        case 'new':
          this.isNew = true
          this.$router.push('/admin/articles/articleCreate')
          break
        case 'edit':
          this.article = []
          this.isNew = false
          this.$router.push(`/admin/articles/${id}`)
          break
        default:
          toastError('操作錯誤')
      }
    },
    // 取得單一文章
    getArticle(id) {
      this.loadingStatus.loadingItem = true
      const url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/article/${id}`
      
      axios.get(url)
        .then(res => {
          this.article = res.data.article
        })
        .catch(err => {
          toastError(err.response.data.message)
        })
        .finally(() => {
          this.loadingStatus.loadingItem = false
        })
    },
    // 新增/編輯文章
    updateArticle(articleData, isPublic, editIsPublic) {
      this.isLoading = true

      // 新增產品 API
      let url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/article`
      let http = 'post'

      // 編輯產品 api
      if(!this.isNew) { 
        url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/article/${articleData.id}`
        http = 'put'
      }

      // 新增產品
      if(this.isNew) {
        const { title, image, tag, author, content } = articleData;
        const data = { 
          title,
          image,
          tag,
          create_at: dateToUnix('now'),
          author,
          isPublic,
          content,
        }
        axios[http](url, { data: data })
          .then(res => {
            toastSuccess(res.data.message)
            this.$router.push('/admin/articles')
          })
          .catch(err => {
            toastError(err.response.data.message)
          })
          .finally(() => {
            this.isLoading = false
          })
      } else { // 編輯產品
        // 文章狀態為 公開 或 草稿(取消置頂)
        if (editIsPublic === "public") {
          articleData.isPublic = true
        } else if (editIsPublic === "private") {
          articleData.isPinned = false
          articleData.isPublic = false
        }

        axios[http](url, { data: articleData })
        .then(res => {
          toastSuccess(res.data.message)
          // push 會觸發該 view 頁面的 mounted，mounted 會執行 getArticles，
          // 所以不需在此行後在重新執行 getArticles
          this.$router.push('/admin/articles')
        })
        .catch(err => {
          toastError(err.response.data.message)
        })
        .finally(() => {
          this.isLoading = false
        })
      }
    },
    // 刪除文章
    deleteArticle(id) {
      this.loadingStatus.loadingDelete = true

      const url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/article/${id}`

      axios.delete(url)
        .then(res => {
          toastSuccess(res.data.message)
          this.getArticles()
        })
        .catch(err => {
          toastError(err.response.data.message)
        })
        .finally(() => {
          this.loadingStatus.loadingDelete = false
        })
    },
    updateCurrentPage(page) {
      this.currentPage = page
    }
  },
})