<template>
  <div class="articles container-md">
    <div class="pt-7 pt-lg-20">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-20">
          <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page">專欄文章</li>
        </ol>
      </nav>
      <h1 class="h2 text-primary mb-12 fw-bold">專欄文章</h1>
    </div>
    <!-- PC article list -->
    <ul class="row list-unstyled mb-10 mb-lg-20 d-none d-lg-flex" style="row-gap: 24px;">
      <li
        class="col-12" v-for="article in currentPageArticles.slice(0, 1)" :key="article.id"
      >
        <div class="articles-item position-relative">
          <img
            :src="article.image"
            :alt="article.title"
            class="w-100 object-fit-cover"
          />
          <div
            class="black-overlay position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center w-100 h-100"
          >
            <h3 class="fs-4 text-white lh-lg mb-3">
              {{ article.title }}
            </h3>
            <RouterLink :to="`/articles/${article.id}`" class="custom-btn custom-btn-more"
              >MORE</RouterLink
            >
          </div>
        </div>
      </li>
      <li class="col-4" v-for="article in currentPageArticles.slice(1, 7)" :key="article.id">
        <div class="articles-item position-relative">
          <img
            :src="article.image"
            :alt="article.title"
            class="w-100 object-fit-cover"
          />
          <div
            class="black-overlay position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center w-100 h-100"
          >
            <h3 class="fs-5 text-white lh-lg mb-3">
              {{ article.title }}
            </h3>
            <RouterLink :to="`/articles/${article.id}`" class="custom-btn custom-btn-more"
              >MORE</RouterLink
            >
          </div>
        </div>
      </li>
      <li class="col-3" v-for="article in currentPageArticles.slice(7, 11)" :key="article.id">
        <div class="articles-item position-relative">
          <img
            :src="article.image"
            :alt="article.title"
            class="w-100 object-fit-cover"
          />
          <div
            class="black-overlay position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center w-100 h-100"
          >
            <h3 class="fs-5 text-white lh-lg mb-3">
              {{ article.title }}
            </h3>
            <RouterLink :to="`/articles/${article.id}`" class="custom-btn custom-btn-more"
              >MORE</RouterLink
            >
          </div>
        </div>
      </li>
    </ul>
    <!-- mobile article list -->
    <ul class="row list-unstyled mb-10 mb-lg-20 d-lg-none" style="row-gap: 24px;">
      <li
        class="col-12" v-for="article in currentPageArticles.slice(0, 1)" :key="article.id"
      >
        <div class="articles-item position-relative h-100">
          <img
            :src="article.image"
            :alt="article.title"
            class="w-100 h-100 object-fit-cover"
          />
          <div
            class="black-overlay opacity-100 position-absolute top-50 translate-middle-y d-flex flex-column justify-content-center align-items-center w-100 p-4"
          >
            <h3 class="fs-5 fs-sm-4 text-white lh-lg mb-3">
              {{ article.title }}
            </h3>
            <RouterLink :to="`/articles/${article.id}`" class="custom-btn custom-btn-more"
              >MORE</RouterLink
            >
          </div>
        </div>
      </li>
      <li
        class="col-12 col-sm-6" v-for="article in currentPageArticles.slice(1, 11)" :key="article.id"
      >
        <div class="articles-item position-relative h-100">
          <img
            :src="article.image"
            :alt="article.title"
            class="w-100 h-100 object-fit-cover"
          />
          <div
            class="black-overlay opacity-100 position-absolute top-50 translate-middle-y d-flex flex-column justify-content-center align-items-center w-100 p-4"
          >
            <h3 class="fs-5 text-white lh-lg mb-3">
              {{ article.title }}
            </h3>
            <RouterLink :to="`/articles/${article.id}`" class="custom-btn custom-btn-more"
              >MORE</RouterLink
            >
          </div>
        </div>
      </li>
    </ul>
    <!-- pagination -->
    <template v-if="!isLoading">
      <vue-awesome-paginate
        :total-items="articles.length"
        :items-per-page="11"
        :max-pages-shown="3"
        v-model="currentPage"
        @click="changePage"
        pagination-container-class="cus-pagination va-pagination mb-20 mb-lg-25"
        paginate-buttons-class="page-link"
        number-buttons-class="fs-8"
        active-page-class="active"
      >
        <template #prev-button>
          <span class="material-icons fs-8 p-1"> navigate_before </span>
        </template>
        <template #next-button>
          <span class="material-icons fs-8 p-1"> navigate_next </span>
        </template>
      </vue-awesome-paginate>
    </template>
  </div>
  <VueLoading :active="isLoading" />
</template>
<script>
export default {
  data() {
    return {
      articles: [],
      currentPage: 1,
      currentPageArticles: [],
      isLoading: false
    }
  },
  methods: {
    // 取得所有文章
    async getArticles() {
      try {
        this.isLoading = true

        // 第一次 get 文章回傳的頁碼資料
        let currentPageNum
        let totalPagesNum

        const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/articles`

        // get 第一頁資料
        const resFirstPage = await this.$http.get(url)
        this.articles = resFirstPage.data.articles // 第一頁的 data
        currentPageNum = resFirstPage.data.pagination.current_page + 1 // +1 給下段的 while 判斷需不需要繼續打 API
        totalPagesNum = resFirstPage.data.pagination.total_pages

        // 若有 2 頁以上，繼續 get 後續頁碼的資料
        while(currentPageNum <= totalPagesNum) {
          const resOtherPages = await this.$http.get(`${url}?page=${currentPageNum}`)
          this.articles = [...this.articles, ...resOtherPages.data.articles]
          currentPageNum++;
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
        alert(err.response.data.message)
      } finally {
        this.isLoading = false
      }
    },
    changePage(page) {
      this.currentPageArticles = this.articles.slice((page - 1) * 11, page * 11) // 11: 一頁顯示幾筆資料
      // page  couponsSliceIndex
      //  1         0 ~ 11
      //  2        11 ~ 22
    },
  },
  computed: {
  },
  mounted() {
    this.getArticles()
  }
}
</script>
<style scoped lang="scss"></style>
