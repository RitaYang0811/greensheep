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
    isNew: false,
    isLoading: false,
    loadingStatus: {
      loadingItem: true
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
          console.log(err)
        })
        .finally(() => {
          this.loadingStatusData.loadingItem = false
        })
    },
    // 新增/編輯文章
		updateArticle(articleData, isPublic) {
      // this.isLoading = true

      let url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/article`
      let http = 'post'

      if(!this.isNew) { // 編輯產品 api
        url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/article/${articleData.id}`
        http = 'put'
      }

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
      } else {
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
    }
  }
})