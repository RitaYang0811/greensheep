import { defineStore } from 'pinia'
import axios from 'axios'
import { dateToUnix } from '@/utils/dateToUnix.js'

export default defineStore('adminArticles',{
  state: () => ({
    articles:[],
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
    // 取得所有文章
    getArticles() {
      this.articles = []
      this.loadingStatus.loadingItem = true

      const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/articles`

      axios.get(url)
        .then(res => {
          this.articles = res.data.articles
        })
        .catch(err => {
          alert(err.response.data.message)
        })
        .finally(() => {
          this.loadingStatus.loadingItem = false
        })
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
		updateArticle(articleData, isPublic) {
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
            this.getArticles()
          })
          .catch(err => {
            alert(err.response.data.message)
          })
          .finally(() => {
            this.isLoading = false
          })
      } else { // 編輯產品
        // 文章狀態 radio
        articleData.isPublic === "public" ? articleData.isPublic = true : articleData.isPublic = false

        axios[http](url, { data: articleData })
        .then(res => {
          alert(res.data.message)
          this.$router.push('/admin/articles')
          this.getArticles()
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
    }
  }
})