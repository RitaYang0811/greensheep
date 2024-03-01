<template>
  <div class="ad-article">
    {{ selectedPinnedPost }}
    <h1 class="fs-3 mb-4">文章管理</h1>
    <div class="input-group mb-4 bg-white d-flex align-items-center">
      <input type="search" class="form-control">
      <a href="#">
        <img src="@/assets/images/search_green_24dp.svg" alt="搜尋" class="px-1">
      </a>
    </div>
    <ul class="nav border-bottom border-primary mb-4">
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTabData === '公開文章'}"
          href="#"
          @click.prevent="changeTab('公開文章')">
          公開文章
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTabData === '草稿文章'}"
          href="#"
          @click.prevent="changeTab('草稿文章')">
          草稿文章
        </a>
      </li>
    </ul>
    <div class="d-flex gap-4 align-items-center mb-4">
      <a href="#" class="btn btn-primary" @click.prevent="articleActivity('new')">建立文章</a>
      <template v-if="currentTabData === '公開文章'">
        <a
          v-if="!isSelectPinnedPost"
          href="#"
          class="btn btn-primary"
          @click.prevent="isSelectPinnedPost = true">
          置頂文章管理
        </a>
        <template v-else>
          <a href="#" class="btn btn-primary" @click.prevent="updatePinnedPost">儲存置頂文章</a>
          <a href="#" class="btn btn-sm btn-danger" @click.prevent="selectedPinnedPost = []; isSelectPinnedPost = false">取消</a>
          <p>已選擇: {{ selectedPinnedPost.length }} 篇</p>
          <a
            href="#"
            class="text-decoration-underline link-underline-grey9F link-offset-1"
            @click.prevent="selectedPinnedPost = []">清空已選擇文章
          </a>
          <p>*最多可選擇 3 篇文章</p>
        </template>
      </template>
    </div>
    <ul class="row row-cols-1 row-cols-sm-2 row-cols-lg-5 ps-0 list-unstyled" style="row-gap: 24px;">
      <!-- <li class="col" v-for="article in articlesData" :key="article.id">
        <div class="form-check position-relative ps-0">
          <input class="form-check-input position-absolute" type="checkbox" value="" id="flexCheckDefault" style="z-index: 1; top:12px; right: 12px;">
          <label class="form-check-label w-100" for="flexCheckDefault">
            <div class="card border-0">
              <img :src="article.image" :alt="article.title">
              <div class="card-body">
                <h5 class="card-title my-2 fs-7">{{ article.title }}</h5>
                <div class="d-flex">
                  <a href="#" class="custom-btn custom-btn-toGreen text-center w-100 border-1" :class="{ 'disabled-link': loadingStatusData.loadingDelete}" @click.prevent="articleActivity('edit', article.id)">
                    <img src="@/assets/images/edit_green.svg" alt="編輯">
                  </a>
                  <a href="#" class="custom-btn custom-btn-toGreen text-center w-100 border-1" @click.prevent="articleActivity('delete', article.id)">
                    <img src="@/assets/images/highlight_off_green.svg" alt="刪除">
                  </a>
                </div>
              </div>
            </div>
          </label>
        </div>
      </li> -->
      <li v-if="currentTabData === '公開文章'" class="col" v-for="article in publicArticlesData" :key="article.id">
        <label class="card h-100 border border-1 border-primary position-relative" :for="article.id">
          <span class="check-box" v-if="isSelectPinnedPost">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="selectedPinnedPost"
              :value="article.id"
              :id="article.id"
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
              >{{ article.title }} {{ article.isPublic }}
            </h5>
            <div
              class="card-foot d-flex justify-content-evenly border-top border-1 border-primary py-2"
            >
              <a
                href="#"
                :class="{ 'disabled-link': loadingStatusData.loadingDelete || isSelectPinnedPost }"
                @click.prevent="articleActivity('edit', article.id)">
                <i class="bi bi-pencil-fill text-dark fs-6"></i>
              </a>
              <a
                href="#"
                :class="{ 'disabled-link': isSelectPinnedPost }"
                @click.prevent="articleActivity('delete', article.id)">
                <i class="bi bi-trash3-fill text-dark fs-6"></i>
              </a>
            </div>
          </div>
        </label>
      </li>
      <li v-if="currentTabData === '草稿文章'" class="col" v-for="article in privateArticlesData" :key="article.id">
        <label class="card h-100 border border-1 border-primary position-relative" :for="article.id">
          <span class="check-box" v-if="isSelectPinnedPost">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="selectedPinnedPost"
              :value="article.id"
              :id="article.id"
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
              >{{ article.title }} {{ article.isPublic }}
            </h5>
            <div
              class="card-foot d-flex justify-content-evenly border-top border-1 border-primary py-2"
            >
              <a
                href="#"
                :class="{ 'disabled-link': loadingStatusData.loadingDelete || isSelectPinnedPost }"
                @click.prevent="articleActivity('edit', article.id)">
                <i class="bi bi-pencil-fill text-dark fs-6"></i>
              </a>
              <a
                href="#"
                :class="{ 'disabled-link': isSelectPinnedPost }"
                @click.prevent="articleActivity('delete', article.id)">
                <i class="bi bi-trash3-fill text-dark fs-6"></i>
              </a>
            </div>
          </div>
        </label>
      </li>
    </ul>
    <div v-if="loadingStatusData.loadingItem"
      class="d-flex justify-content-center align-items-center"
      style="min-height: 360px;"
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
import adArticlesStore from "@/stores/adArticlesStore.js";
import { mapActions, mapState } from 'pinia';
import PagiNation from '@/components/PagiNation.vue'

export default {
  data() {
    return {
      isSelectPinnedPost: false,
      selectedPinnedPost: []
    }
  },
  methods: {
    ...mapActions(adArticlesStore, ['getArticles','articleActivity', 'changeTab']),
    // 儲存置頂文章
    updatePinnedPost() {
      this.isSelectPinnedPost = false
    }
  },
  computed: {
    ...mapState(adArticlesStore, ['articlesData', 'loadingStatusData', 'currentTabData', 'publicArticlesData', 'privateArticlesData'])
  },
  mounted() {
    this.getArticles();
  }
}
</script>
<style scoped></style>
