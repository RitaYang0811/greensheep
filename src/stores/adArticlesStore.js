import { defineStore } from 'pinia'
import axios from 'axios'
import { dateToUnix } from '@/utils/dateToUnix.js'

export default defineStore('adminArticles',{
  state: () => ({
    currentTab: '公開文章',
    articles: [],
    publicArticles: [],
    privateArticles: [],
    pinnedArticles: [],
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
      loadingDelete: false
    },
    formStatus: {
      hasFormImage: true,
      hasFormContent: true
    }
	}),
  actions: {
    // 取得全部文章資料
    async getArticles() {
      this.articles = []
      this.publicArticles = []
      this.privateArticles = []

      this.loadingStatus.loadingItem = true

      // 第一次 get 文章回傳的頁碼資料
      let currentPageNum
      let totalPagesNum

      const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/articles`

      try {
        // get 第一頁資料
        const resFirstPage = await axios.get(url)
        this.articles = resFirstPage.data.articles // 第一頁的 data
        currentPageNum = resFirstPage.data.pagination.current_page + 1 // +1 給下段的 while 判斷需不需要繼續打 API
        totalPagesNum = resFirstPage.data.pagination.total_pages

        // 若有 2 頁以上，繼續 get 後續頁碼的資料
        while(currentPageNum <= totalPagesNum) {
          const resOtherPages = await axios.get(`${url}?page=${currentPageNum}`)
          this.articles = [...this.articles, ...resOtherPages.data.articles]
          currentPageNum++;
        }
      } catch (err) {
        alert(err.response.data.message)
      }

      this.loadingStatus.loadingItem = false
      this.filterArticles()
    },
    // 分為公開文章 / 草稿文章
    filterArticles() {
      // AdArticlesView.vue 中的　watch 監聽無法監聽到陣列 push 的變化，所以宣告新陣列並賦值到 this.pinnedArticles 觸發監聽
      const filterPinnedArticles = [] 

      this.articles.forEach(article => {
        article.isPublic ? this.publicArticles.push(article) : this.privateArticles.push(article)
        article.isPinned ? filterPinnedArticles.push(article.id) : ''
      })

      this.pinnedArticles = filterPinnedArticles
    },
    // 切換 tab
    changeTab(tab) {
      this.currentTab = tab
      // // 回到第一頁並取得該 tab 的第一頁資料
      // this.currentPage = 1
      // this.changePage(this.currentPage)
    },
    // 文章行為(新增、編輯、刪除)
    articleActivity(type, id) {
      switch(type) {
        case 'delete':
          this.deleteArticle(id)
          break
        case 'new':
          this.article = {
            title: '',
            image: '',
            tag: '',
            isPublic: false,
            author: '',
            content: ''
          },
          this.isNew = true
          this.$router.push('/admin/articles/articleCreate')
          break
        case 'edit':
          this.article = []
          this.isNew = false
          this.getArticle(id)
          this.$router.push(`/admin/articles/${id}`)
          break
        default:
          console.log('default')
      }
    },
    // 取得單一文章
    getArticle(id) {
      this.loadingStatusData.loadingItem = true
      const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/article/${id}`
      
      axios.get(url)
        .then(res => {
          this.article = res.data.article
        })
        .catch(err => {
          alert(err.response.data.message)
        })
        .finally(() => {
          this.loadingStatusData.loadingItem = false
        })
    },
    // 新增/編輯文章
		updateArticle(articleData, isPublic, editIsPublic) {
      // 驗證圖片 & ckeditor 內容
      if(!articleData.image || !articleData.content) {
        articleData.image ? this.formStatus.hasFormImage = true : this.formStatus.hasFormImage = false
        articleData.content ? this.formStatus.hasFormContent = true : this.formStatus.hasFormContent = false
        return
      }

      this.isLoading = true

      // 新增產品 API
      let url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/article`
      let http = 'post'

      // 編輯產品 api
      if(!this.isNew) { 
        url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/article/${articleData.id}`
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
            alert(res.data.message)
            this.$router.push('/admin/articles')
          })
          .catch(err => {
            alert(err.response.data.message)
          })
          .finally(() => {
            this.isLoading = false
          })
      } else { // 編輯產品
        // 文章狀態 radio
        editIsPublic === "public" ? articleData.isPublic = true : articleData.isPublic = false

        axios[http](url, { data: articleData })
        .then(res => {
          alert(res.data.message)
          // push 會觸發該 view 頁面的 mounted，mounted 會執行 getArticles，所以不需再此行後在重新執行 getArticles
          this.$router.push('/admin/articles')
        })
        .catch(err => {
          alert(err.response.data.message)
        })
        .finally(() => {
          this.isLoading = false
        })
      }
		},
    // 刪除文章
    deleteArticle(id) {
      this.loadingStatus.loadingDelete = true

      const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/article/${id}`

      axios.delete(url)
        .then(res => {
          alert(res.data.message)
          this.getArticles()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
        .finally(() => {
          this.loadingStatus.loadingDelete = false
        })
    }
  },
  getters: {
    articleData: ({article}) => {
      return article
    },
    articlesData: ({articles}) => {
      return articles
    },
    isLoadingData: ({isLoading}) => {
      return isLoading
    },
    isNewData: ({isNew}) => {
      return isNew
    },
    loadingStatusData: ({loadingStatus}) => {
      return loadingStatus
    },
    formStatusData: ({formStatus}) => {
      return formStatus
    },
    currentTabData: ({currentTab}) => {
      return currentTab
    },
    publicArticlesData: ({publicArticles}) => {
      return publicArticles
    },
    privateArticlesData: ({privateArticles}) => {
      return privateArticles
    },
    pinnedArticlesData: ({pinnedArticles}) => {
      return pinnedArticles
    }
  }
})