import { defineStore } from 'pinia'
import axios from 'axios'
import { dateToUnix } from '@/utils/dateToUnix.js'

export default defineStore('adminArticles',{
  state: () => ({
    articles:[],
    article: {
      title: '',
      image: '',
      tag: [],
      isPublic: false,
      author: '',
      content: ''
    },
    isLoading: false
	}),
  actions: {
    getArticles() {  
      const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/articles`
      axios.get(url)
        .then(res => {
          this.articles = res.data.articles
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
		updateArticle(articleData, isPublic) {
      this.isLoading = true

      const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/article`
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
      
      axios.post(url, { data: data })
        .then(res => {
          console.log(res)
          alert(res.data.message)
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
  getters: {
    articleData: ({article}) => {
      return article
    },
    articlesData: ({articles}) => {
      return articles
    },
    isLoadingData: ({isLoading}) => {
      return isLoading
    }
  }
})