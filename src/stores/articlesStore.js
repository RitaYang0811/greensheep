// import { defineStore } from 'pinia'
// import axios from 'axios'

// export default defineStore('articles',{
//   state: () => ({
//     articles: [],
//     isLoading: false
// 	}),
//   actions: {
//     // 取得所有文章
//     async getArticles() {
//       try {
//         this.isLoading = true

//         // 第一次 get 文章回傳的頁碼資料
//         let currentPageNum
//         let totalPagesNum

//         const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/articles`

//         // get 第一頁資料
//         const resFirstPage = await axios.get(url)
//         this.articles = resFirstPage.data.articles // 第一頁的 data
//         currentPageNum = resFirstPage.data.pagination.current_page + 1 // +1 給下段的 while 判斷需不需要繼續打 API
//         totalPagesNum = resFirstPage.data.pagination.total_pages

//         // 若有 2 頁以上，繼續 get 後續頁碼的資料
//         while(currentPageNum <= totalPagesNum) {
//           const resOtherPages = await axios.get(`${url}?page=${currentPageNum}`)
//           this.articles = [...this.articles, ...resOtherPages.data.articles]
//           currentPageNum++;
//         }

//         // 排序 置頂優先
//         this.articles.sort((a, b) => {
//           const aNum = a.isPinned === undefined ? 0 : Number(a.isPinned)
//           const bNum = b.isPinned === undefined ? 0 : Number(b.isPinned)
  
//           return bNum - aNum
//         })
        
//       } catch (err) {
//         alert(err.response.data.message)
//       } finally {
//         this.isLoading = false
//       }
//     }
//   },
//   getters: {
//     articlesData: ({articles}) => {
//       return articles
//     },
//     isLoadingData: ({isLoading}) => {
//       return isLoading
//     }
//   }
// })