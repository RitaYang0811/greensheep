<template>
  <div class="ad-article">
    <h1 class="fs-3 mb-4 fw-bold">文章管理</h1>
    <div class="position-relative">
      <input
        class="form-control mb-4 rounded-3 border border-primary bg-transparent fs-6"
        type="text"
        placeholder="請輸入要搜尋的文章"
        v-model.trim="keyword"
      />
      <i
        class="bi bi-search float-end fs-5 text-primary pe-2 mt-2 position-absolute top-0 end-0"
      ></i>
    </div>
    <!-- article tab -->
    <ul class="nav border-bottom border-primary mb-4">
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '公開文章'}"
          href="#"
          @click.prevent="changeTab('公開文章')">
          公開文章
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '草稿文章'}"
          href="#"
          @click.prevent="changeTab('草稿文章')">
          草稿文章
        </a>
      </li>
    </ul>
    <!-- article action -->
    <div class="d-flex gap-4 align-items-center mb-4">
      <a
        href="#"
        class="btn btn-primary"
        :class="{ disabled: loadingStatus.loadingItem }"
        @click.prevent="articleActivity('new')"
      >
        建立文章
      </a>
      <template v-if="currentTab === '公開文章'">
        <a
          v-if="!isSelectPinnedArticle"
          href="#"
          class="btn btn-primary"
          :class="{ disabled: loadingStatus.loadingItem }"
          @click.prevent="isSelectPinnedArticle = true"
        >
          置頂文章管理
        </a>
        <template v-else>
          <a href="#" class="btn btn-primary" @click.prevent="updatePinnedArticle">儲存置頂文章</a>
          <a
            href="#"
            class="btn btn-sm btn-danger"
            @click.prevent="selectedPinnedArticle = [ ...pinnedArticles ]; isSelectPinnedArticle = false">
            取消
          </a>
          <p>已選擇: {{ selectedPinnedArticle.length }} 篇</p>
          <a
            href="#"
            class="text-decoration-underline link-underline-grey9F link-offset-1"
            @click.prevent="selectedPinnedArticle = []">
            清除選擇
          </a>
          <p class="text-danger fs-8">*最多可選擇 3 篇文章</p>
        </template>
      </template>
    </div>
    <!-- article list -->
    <ul v-if="!loadingStatus.loadingItem" class="row row-cols-1 row-cols-sm-2 row-cols-lg-5 ps-0 list-unstyled" style="row-gap: 24px;">
      <li class="col" v-for="article in currentPageArticles" :key="article.id">
        <label class="card h-100 border border-1 border-primary position-relative" :for="article.id">
          <span class="check-box" v-if="isSelectPinnedArticle">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="selectedPinnedArticle"
              :value="article.id"
              :id="article.id"
              :disabled="selectedPinnedArticle.length >= 3 && !selectedPinnedArticle.includes(article.id)"
            />
          </span>
          <img
            :src="article.image"
            class="card-img-top h-100 w-100 object-fit-cover"
            :alt="article.title"
            style="height: 250px"
          />
          <div class="card-body p-0 px-2 pt-2">
            <h5 class="card-title display-6 text-dark mb-2" style="height: 40px">
              <span v-if="article.isPinned" class="float-end bg-primary text-white py-1 px-2 fs-8">置頂</span
              >{{ article.title }}
            </h5>
            <div
              class="card-foot d-flex justify-content-evenly border-top border-1 border-primary py-2"
            >
              <a
                href="#"
                :class="{ 'disabled-link': loadingStatus.loadingDelete || isSelectPinnedArticle }"
                @click.prevent="articleActivity('edit', article.id)">
                <i class="bi bi-pencil-fill text-dark fs-6"></i>
              </a>
              <a
                href="#"
                :class="{ 'disabled-link': isSelectPinnedArticle }"
                @click.prevent="articleActivity('delete', article.id)">
                <i class="bi bi-trash3-fill text-dark fs-6"></i>
              </a>
            </div>
          </div>
        </label>
      </li>
    </ul>
    <!-- pagination -->
    <div v-if="!loadingStatus.loadingItem && searchArticles.length" class="text-center va-pagination">
      <vue-awesome-paginate
        :total-items="searchArticles.length"
        :items-per-page="10"
        :max-pages-shown="3"
        v-model="articlesCurrentPage"
        @click="getCurrentPageArticles"
        pagination-container-class="cus-pagination"
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
    </div>
    <div v-if="loadingStatus.loadingItem"
      class="d-flex justify-content-center align-items-center"
      style="min-height: 360px;"
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <VueLoading :active="isLoading" />
  </div>
</template>
<script>
import adArticlesStore from "@/stores/adArticlesStore.js";
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      isSelectPinnedArticle: false,
      selectedPinnedArticle: [],
      articlesCurrentPage: 1,
      keyword: '',
      isLoading: false,
    }
  },
  methods: {
    ...mapActions(adArticlesStore, ['getArticles','articleActivity', 'changeTab', 'getCurrentPageArticles', 'updateCurrentPage']),
    // 儲存置頂文章
    async updatePinnedArticle() {
      try {
        this.isSelectPinnedArticle = false
        this.isLoading = true

        const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/article`

        // ----- 取消置頂 -----
        // 原置頂文章若不在當次選取的文章中則取消置頂狀態
        const cancelPinnedArticles = this.pinnedArticles.filter(id => {
          return !this.selectedPinnedArticle.includes(id)
        })

        // 取得欲取消的文章的 data (含content) 
        const apiUrlsGetCancelArticle = cancelPinnedArticles.map(id => {
          return this.$http.get(`${url}/${id}`)
        })
        const resGetCancelArticle = await Promise.all(apiUrlsGetCancelArticle)

        // 取消置頂狀態，isPinned 設為 false
        const apiUrlsPutCancelArticle = resGetCancelArticle.map(article => {
          const id = article?.data?.article?.id
          const data = { ...article?.data?.article, isPinned: false }
          return this.$http.put(`${url}/${id}`, { data: data })
        })
        const resPutCancelArticle = await Promise.all(apiUrlsPutCancelArticle)

        // ----- 新增置頂 -----
        // 當次選取的文章中若不在原置頂文章中則需要去取得資料
        const addPinnedArticle = this.selectedPinnedArticle.filter(id => {
          return !this.pinnedArticles.includes(id)
        })

        // 取得欲置頂文章的 content 資料給 put 使用 (因為 get/articles 不包含 content 欄位)
        const apiUrlsGetArticle = addPinnedArticle.map(id => {
          return this.$http.get(`${url}/${id}`)
        })
        const resGetArticle = await Promise.all(apiUrlsGetArticle)

        // 增加置頂狀態，isPinned 設為 true
        const apiUrlsPutArticle = resGetArticle.map(article => {
          const id = article?.data?.article?.id
          const data = { ...article?.data?.article, isPinned: true }
          return this.$http.put(`${url}/${id}`, { data: data })
        })
        const resPutArticle = await Promise.all(apiUrlsPutArticle)

        alert('置頂文章已更新')
        this.getArticles();
      } catch (err) {
        alert(err.response.data.message)
      } finally {
        this.isLoading = false
      }
    }
  },
  watch: {
    pinnedArticles() {
      this.selectedPinnedArticle = [ ...this.pinnedArticles ]
    },
    keyword() {
      this.getCurrentPageArticles(1, this.keyword)
    },
    // articlesCurrentPage()、currentPage() 做類似雙向綁定
    articlesCurrentPage() {
      this.updateCurrentPage(this.articlesCurrentPage)
    },
    currentPage() {
      this.articlesCurrentPage = this.currentPage
    }
  },
  computed: {
    ...mapState(adArticlesStore, [
      'loadingStatus', 'searchArticles',
      'currentTab', 'pinnedArticles',
      'currentPage', 'currentPageArticles',
    ])
  },
  mounted() {
    this.getArticles();
  }
}
</script>
<style scoped></style>
