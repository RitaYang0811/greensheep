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
          :class="{ active: currentTab === '公開文章' }"
          href="#"
          @click.prevent="changeTab('公開文章')"
        >
          公開文章
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '草稿文章' }"
          href="#"
          @click.prevent="changeTab('草稿文章')"
        >
          草稿文章
        </a>
      </li>
    </ul>
    <!-- article action & 顯示方式 -->
    <div class="d-flex gap-2 gap-md-4 justify-content-between align-items-center mb-4">
      <!-- article action -->
      <div class="d-flex gap-2 gap-md-4 align-items-center">
        <a
          href="#"
          class="btn btn-primary"
          :class="[{ disabled: loadingStatus.loadingItem }, { 'd-none': isSelectPinnedArticle }]"
          @click.prevent="articleActivity('new')"
        >
          建立文章
        </a>
        <template v-if="currentTab === '公開文章'">
          <a
            v-if="!isSelectPinnedArticle"
            class="btn btn-primary"
            :class="{ disabled: loadingStatus.loadingItem }"
            @click.prevent="isSelectPinnedArticle = true"
          >
            置頂文章管理
          </a>
          <template v-else>
            <a class="btn btn-primary" @click.prevent="updatePinnedArticle">儲存置頂文章</a>
            <a
              class="btn btn-danger"
              @click.prevent="
                (selectedPinnedArticle = [...pinnedArticles]), (isSelectPinnedArticle = false)
              "
            >
              取消
            </a>
            <!-- 置頂選擇狀態 PC -->
            <div class="d-none d-md-flex gap-4">
              <p>已選擇: {{ selectedPinnedArticle.length }} 篇</p>
              <a
                href="#"
                class="text-decoration-underline link-underline-grey9F link-offset-1"
                @click.prevent="selectedPinnedArticle = []"
              >
                清除選擇
              </a>
              <p class="text-danger fs-8">*最多可選擇 3 篇文章</p>
            </div>
          </template>
        </template>
      </div>
      <!-- 顯示方式 -->
      <div class="d-flex gap-2 gap-md-4">
        <a
          href="#"
          class="btn border border-1 border-primary btn-md text-primary p-2 rounded-3"
          :class="[{ 'bg-primary': isList }, { 'text-white': isList }]"
          @click.prevent="isList = true"
          ><i class="bi bi-ui-checks fs-5"></i
        ></a>
        <a
          href="#"
          class="btn border border-1 border-primary btn-md text-primary p-2 rounded-3"
          :class="[{ 'bg-primary': !isList }, { 'text-white': !isList }]"
          @click.prevent="isList = false"
          ><i class="bi bi-ui-checks-grid fs-5"></i
        ></a>
      </div>
    </div>
    <!-- 置頂選擇狀態 mobile -->
    <div v-if="isSelectPinnedArticle" class="d-md-none d-flex gap-4 mb-4">
      <p>已選擇: {{ selectedPinnedArticle.length }} 篇</p>
      <a
        href="#"
        class="text-decoration-underline link-underline-grey9F link-offset-1"
        @click.prevent="selectedPinnedArticle = []"
      >
        清除選擇
      </a>
      <p class="text-danger fs-8">*最多可選擇 3 篇文章</p>
    </div>

    <!-- article list -->
    <template v-if="!loadingStatus.loadingItem && currentPageArticles.length">
      <!-- article list 卡片模式 -->
      <ul
        v-if="!isList"
        class="row row-cols-1 row-cols-sm-2 row-cols-lg-5 mb-10 mb-lg-15 ps-0 list-unstyled"
        style="row-gap: 12px"
      >
        <li class="col" v-for="article in currentPageArticles" :key="article.id">
          <label
            class="card h-100 border border-1 border-primary position-relative"
            :for="article.id"
          >
            <span class="check-box" v-if="isSelectPinnedArticle">
              <input
                class="form-check-input"
                type="checkbox"
                v-model="selectedPinnedArticle"
                :value="article.id"
                :id="article.id"
                :disabled="
                  selectedPinnedArticle.length >= 3 && !selectedPinnedArticle.includes(article.id)
                "
              />
            </span>
            <img
              :src="article.image"
              class="card-img-top w-100 object-fit-cover"
              :alt="article.title"
              style="height: 200px"
            />
            <div class="card-body d-flex flex-column p-0 px-2 pt-2">
              <h5 class="card-title display-6 text-dark pb-2 mb-auto">
                <span
                  v-if="article.isPinned"
                  class="float-end bg-primary text-white py-1 px-2 ms-1 fs-8"
                  >置頂</span
                >{{ article.title }}
              </h5>
              <div
                class="card-foot d-flex justify-content-evenly border-top border-1 border-primary py-2"
              >
                <a
                  href="#"
                  :class="{ 'disabled-link': loadingStatus.loadingDelete || isSelectPinnedArticle }"
                  @click.prevent="articleActivity('edit', article.id)"
                >
                  <i class="bi bi-pencil-fill text-dark fs-6"></i>
                </a>
                <a
                  href="#"
                  :class="{ 'disabled-link': isSelectPinnedArticle }"
                  @click.prevent="articleActivity('delete', article.id)"
                >
                  <i class="bi bi-trash3-fill text-dark fs-6"></i>
                </a>
              </div>
            </div>
          </label>
        </li>
      </ul>
      <!-- article list 列表模式 -->
      <ul v-if="isList" class="d-flex flex-column gap-3 mb-10 mb-lg-15 ps-0 list-unstyled">
        <li v-for="article in currentPageArticles" :key="article.id" class="bg-white rounded-3">
          <label :for="article.id" class="d-flex gap-3 gap-md-8 px-2 py-4 px-sm-4">
            <div
              class="d-flex align-items-center gap-1 gap-sm-4 position-relative"
              style="min-width: 98px"
            >
              <template v-if="isSelectPinnedArticle">
                <div class="check-box d-md-none">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="selectedPinnedArticle"
                    :value="article.id"
                    :id="article.id"
                    :disabled="
                      selectedPinnedArticle.length >= 3 &&
                      !selectedPinnedArticle.includes(article.id)
                    "
                  />
                </div>
                <input
                  class="form-check-input d-none d-md-block"
                  type="checkbox"
                  v-model="selectedPinnedArticle"
                  :value="article.id"
                  :id="article.id"
                  :disabled="
                    selectedPinnedArticle.length >= 3 && !selectedPinnedArticle.includes(article.id)
                  "
                />
              </template>
              <img
                :src="article.image"
                class="rounded object-fit-cover"
                :alt="article.title"
                style="height: 98px; width: 98px"
              />
            </div>
            <div
              class="d-flex align-items-md-center flex-column flex-md-row flex-grow-1 gap-md-15 gap-lg-30"
            >
              <div class="d-flex gap-1 flex-grow-1">
                <h5 class="card-title display-6 text-dark flex-grow-1">
                  {{ article.title }}
                </h5>
                <p
                  v-if="article.isPinned"
                  class="align-self-start bg-primary text-white text-nowrap py-1 px-2 rounded-pill fs-9"
                >
                  置頂
                </p>
              </div>
              <div class="d-flex gap-4 gap-md-8 me-md-10">
                <a
                  href="#"
                  :class="{ 'disabled-link': loadingStatus.loadingDelete || isSelectPinnedArticle }"
                  @click.prevent="articleActivity('edit', article.id)"
                >
                  <i class="bi bi-pencil-fill text-dark fs-6"></i>
                </a>
                <a
                  href="#"
                  class=""
                  :class="{ 'disabled-link': isSelectPinnedArticle }"
                  @click.prevent="articleActivity('delete', article.id)"
                >
                  <i class="bi bi-trash3-fill text-dark fs-6"></i>
                </a>
              </div>
            </div>
          </label>
        </li>
      </ul>
    </template>
    <template v-else-if="!loadingStatus.loadingItem">
      <div class="d-flex justify-content-center align-items-center" style="height: 360px">
        <p class="fs-5">尚無文章資料</p>
      </div>
    </template>

    <!-- pagination -->
    <div
      v-if="!loadingStatus.loadingItem && searchArticles.length"
      class="text-center va-pagination"
    >
      <VueAwesomePaginate
        :total-items="searchArticles.length"
        :items-per-page="10"
        :max-pages-shown="3"
        v-model="articlesCurrentPage"
        @click="getCurrentPageArticles"
        pagination-container-class="cus-pagination"
        paginate-buttons-class="page-link"
        number-buttons-class="fs-8"
        active-page-class="active"
        :backButtonClass="articlesCurrentPage === 1 ? 'disabled' : 'back-button'"
        :nextButtonClass="
          articlesCurrentPage === Math.ceil(searchArticles.length / 10) ? 'disabled' : 'next-button'
        "
      >
        <template #prev-button>
          <span class="material-icons fs-8 p-1"> navigate_before </span>
        </template>
        <template #next-button>
          <span class="material-icons fs-8 p-1"> navigate_next </span>
        </template>
      </VueAwesomePaginate>
    </div>

    <!-- loading -->
    <div
      v-if="loadingStatus.loadingItem"
      class="d-flex justify-content-center align-items-center"
      style="min-height: 360px"
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <VueLoading :active="isLoading" />
  </div>
</template>
<script>
import adArticlesStore from '@/stores/adArticlesStore.js'
import { mapActions, mapState } from 'pinia'
import { toastSuccess, toastError } from '@/utils/sweetalertToast.js'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data() {
    return {
      isSelectPinnedArticle: false,
      selectedPinnedArticle: [],
      articlesCurrentPage: 1,
      keyword: '',
      isList: false,
      isLoading: false
    }
  },
  methods: {
    ...mapActions(adArticlesStore, [
      'getArticles',
      'articleActivity',
      'changeTab',
      'getCurrentPageArticles',
      'updateCurrentPage'
    ]),
    // 儲存置頂文章
    async updatePinnedArticle() {
      try {
        this.isSelectPinnedArticle = false
        this.isLoading = true

        const url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/article`

        // ----- 取消置頂 -----
        // 原置頂文章若不在當次選取的文章中則取消置頂狀態
        const cancelPinnedArticles = this.pinnedArticles.filter((id) => {
          return !this.selectedPinnedArticle.includes(id)
        })

        // 取得欲取消的文章的 data (含content)
        const apiUrlsGetCancelArticle = cancelPinnedArticles.map((id) => {
          return this.$http.get(`${url}/${id}`)
        })
        const resGetCancelArticle = await Promise.all(apiUrlsGetCancelArticle)

        // 取消置頂狀態，isPinned 設為 false
        const apiUrlsPutCancelArticle = resGetCancelArticle.map((article) => {
          const id = article?.data?.article?.id
          const data = { ...article?.data?.article, isPinned: false }
          return this.$http.put(`${url}/${id}`, { data: data })
        })
        await Promise.all(apiUrlsPutCancelArticle)

        // ----- 新增置頂 -----
        // 當次選取的文章中若不在原置頂文章中則需要去取得資料
        const addPinnedArticle = this.selectedPinnedArticle.filter((id) => {
          return !this.pinnedArticles.includes(id)
        })

        // 取得欲置頂文章的 content 資料給 put 使用 (因為 get/articles 不包含 content 欄位)
        const apiUrlsGetArticle = addPinnedArticle.map((id) => {
          return this.$http.get(`${url}/${id}`)
        })
        const resGetArticle = await Promise.all(apiUrlsGetArticle)

        // 增加置頂狀態，isPinned 設為 true
        const apiUrlsPutArticle = resGetArticle.map((article) => {
          const id = article?.data?.article?.id
          const data = { ...article?.data?.article, isPinned: true }
          return this.$http.put(`${url}/${id}`, { data: data })
        })
        await Promise.all(apiUrlsPutArticle)

        toastSuccess('已更新置頂文章')
        this.getArticles()
      } catch (err) {
        toastError(err.response.data.message)
      } finally {
        this.isLoading = false
      }
    }
  },
  watch: {
    pinnedArticles() {
      this.selectedPinnedArticle = [...this.pinnedArticles]
    },
    keyword() {
      this.articlesCurrentPage = 1
      this.getCurrentPageArticles(this.articlesCurrentPage, this.keyword)
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
      'loadingStatus',
      'searchArticles',
      'currentTab',
      'pinnedArticles',
      'currentPage',
      'currentPageArticles'
    ])
  },
  mounted() {
    this.getArticles()
  }
}
</script>
