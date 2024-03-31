<template>
  <div class="articles container-md">
    <div class="pt-7 pt-lg-20">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb mb-20">
          <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page">專欄文章</li>
        </ol>
      </nav>
      <h1
        class="h2 text-primary mb-12 fw-bold"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        專欄文章
      </h1>
    </div>
    <!-- PC article list -->
    <ul class="row list-unstyled mb-10 mb-lg-20 d-none d-lg-flex" style="row-gap: 24px">
      <li
        class="col-12"
        v-for="article in currentPageArticles.slice(0, 1)"
        :key="article.id"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <div class="articles-item position-relative h-100">
          <img :src="article.image" :alt="article.title" class="w-100 h-100 object-fit-cover" />
          <div
            class="black-overlay position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center w-100 h-100 p-4"
          >
            <h3 class="fs-4 text-white lh-sm mb-3">
              {{ article.title }}
            </h3>
            <RouterLink :to="`/articles/${article.id}`" class="custom-btn custom-btn-more"
              >MORE</RouterLink
            >
          </div>
        </div>
      </li>
      <li
        class="col-4"
        v-for="article in currentPageArticles.slice(1, 7)"
        :key="article.id"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="400"
        data-aos-once="true"
      >
        <div class="articles-item position-relative h-100">
          <img :src="article.image" :alt="article.title" class="w-100 h-100 object-fit-cover" />
          <div
            class="black-overlay position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center w-100 h-100 p-4"
          >
            <h3 class="fs-5 text-white lh-sm mb-3">
              {{ article.title }}
            </h3>
            <RouterLink :to="`/articles/${article.id}`" class="custom-btn custom-btn-more"
              >MORE</RouterLink
            >
          </div>
        </div>
      </li>
      <li
        class="col-3"
        v-for="article in currentPageArticles.slice(7, 11)"
        :key="article.id"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="600"
        data-aos-once="true"
      >
        <div class="articles-item position-relative h-100">
          <img :src="article.image" :alt="article.title" class="w-100 h-100 object-fit-cover" />
          <div
            class="black-overlay position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center w-100 h-100 p-4"
          >
            <h3 class="fs-6 text-white lh-sm mb-3">
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
    <ul class="row list-unstyled mb-10 mb-lg-20 d-lg-none" style="row-gap: 24px">
      <li
        class="col-12"
        v-for="article in currentPageArticles.slice(0, 1)"
        :key="article.id"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <div class="articles-item position-relative h-100">
          <img :src="article.image" :alt="article.title" class="w-100 h-100 object-fit-cover" />
          <div
            class="black-overlay opacity-100 position-absolute top-50 translate-middle-y d-flex flex-column justify-content-center align-items-center w-100 p-4"
          >
            <h3 class="fs-5 fs-sm-4 text-white lh-sm mb-3">
              {{ article.title }}
            </h3>
            <RouterLink :to="`/articles/${article.id}`" class="custom-btn custom-btn-more"
              >MORE</RouterLink
            >
          </div>
        </div>
      </li>
      <li
        class="col-12 col-sm-6"
        v-for="article in currentPageArticles.slice(1, 11)"
        :key="article.id"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
        data-aos-once="true"
      >
        <div class="articles-item position-relative h-100">
          <img :src="article.image" :alt="article.title" class="w-100 h-100 object-fit-cover" />
          <div
            class="black-overlay opacity-100 position-absolute top-50 translate-middle-y d-flex flex-column justify-content-center align-items-center w-100 p-4"
          >
            <h3 class="fs-5 text-white lh-sm mb-3">
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
      <VueAwesomePaginate
        :total-items="articles.length"
        :items-per-page="11"
        :max-pages-shown="3"
        v-model="articlesCurrentPage"
        @click="changePage"
        pagination-container-class="cus-pagination va-pagination mb-20 mb-lg-25"
        paginate-buttons-class="page-link"
        number-buttons-class="fs-8"
        active-page-class="active"
        :backButtonClass="articlesCurrentPage === 1 ? 'disabled' : 'back-button'"
        :nextButtonClass="articlesCurrentPage === Math.ceil(articles.length / 11) ? 'disabled' : 'next-button'"
      >
        <template #prev-button>
          <span class="material-icons fs-8 p-1"> navigate_before </span>
        </template>
        <template #next-button>
          <span class="material-icons fs-8 p-1"> navigate_next </span>
        </template>
      </VueAwesomePaginate>
    </template>
  </div>
  <VueLoading :active="isLoading" />
</template>
<script>
import { mapState, mapActions } from 'pinia'
import articleStore from '@/stores/articleStore.js'

export default {
  data() {
    return {
      articlesCurrentPage: 1
    }
  },
  methods: {
    ...mapActions(articleStore, ['getArticles', 'changePage', 'updateCurrentPage'])
  },
  watch: {
    // articlesCurrentPage()、currentPage() 做類似雙向綁定
    articlesCurrentPage() {
      this.updateCurrentPage(this.articlesCurrentPage)
    },
    currentPage() {
      this.articlesCurrentPage = this.currentPage
    }
  },
  computed: {
    ...mapState(articleStore, ['isLoading', 'currentPage', 'currentPageArticles', 'articles'])
  },
  mounted() {
    this.getArticles()
  }
}
</script>
