<template>
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
          :class="{ active: currentTab === '所有文章'}"
          href="#"
          @click.prevent="getArticles('所有文章')">
          所有文章
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '草稿文章'}" 
          href="#"
          @click.prevent="getArticles('草稿文章')">
          草稿文章
        </a>
      </li>
    </ul>
    <div class="d-flex gap-4">
      <RouterLink to="/admin/articles/articleCreate" class="btn btn-primary mb-4">建立文章</RouterLink>
      <a href="#" class="btn btn-primary mb-4">置頂文章管理</a>
    </div>
    <ul class="row row-cols-1 row-cols-sm-2 row-cols-lg-5 ps-0" style="row-gap: 24px;">
      <li class="col" v-for="article in articlesData" :key="article.id">
        <div class="form-check position-relative ps-0">
          <input class="form-check-input position-absolute" type="checkbox" value="" id="flexCheckDefault" style="z-index: 1; top:12px; right: 12px;">
          <label class="form-check-label" for="flexCheckDefault">
            <div class="card border-0">
              <img :src="article.image" :alt="article.title">
              <div class="card-body">
                <h5 class="card-title my-2 fs-7">{{ article.title }}</h5>
                <div class="d-flex">
                  <a href="#" class="custom-btn custom-btn-toGreen text-center w-100 border-1">
                    <img src="@/assets/images/edit_green.svg" alt="編輯">
                  </a>
                  <a href="#" class="custom-btn custom-btn-toGreen text-center w-100 border-1">
                    <img src="@/assets/images/highlight_off_green.svg" alt="刪除">
                  </a>
                </div>
              </div>
            </div>
          </label>
        </div>
      </li>
      <!-- <div class="col">
        <div class="form-check position-relative ps-0">
          <input class="form-check-input position-absolute" type="checkbox" value="" id="flexCheckDefault" style="z-index: 1; top:12px; right: 12px;">
          <label class="form-check-label" for="flexCheckDefault">
            <div class="card border-0">
              <img src="https://images.unsplash.com/photo-1707655096635-89387f83f189?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" class="w-100 object-fit-cover" style="aspect-ratio: 1/1" alt="...">
              <div class="card-body">
                <h5 class="card-title my-2">Card title</h5>
                <div class="d-flex">
                  <a href="#" class="custom-btn custom-btn-toGreen text-center w-100 border-1">
                    <img src="@/assets/images/edit_green.svg" alt="編輯">
                  </a>
                  <a href="#" class="custom-btn custom-btn-toGreen text-center w-100 border-1">
                    <img src="@/assets/images/highlight_off_green.svg" alt="刪除">
                  </a>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div> -->
      <!-- <div class="col">
        <div class="bg-primary" style="height: 200px;"></div>
      </div>
<<<<<<< HEAD
      <h1 class="fs-3 mb-4">文章管理</h1>
      <h1 class="fs-3 mb-4">文章管理</h1>
      <h1 class="fs-3 mb-4">文章管理</h1>
      <h1 class="fs-3 mb-4">文章管理</h1>
      <h1 class="fs-3 mb-4">文章管理</h1>
      <h1 class="fs-3 mb-4">文章管理</h1>
      <h1 class="fs-3 mb-4">文章管理</h1>
      <h1 class="fs-3 mb-4">文章管理</h1>
      <h1 class="fs-3 mb-4">文章管理</h1>
      <h1 class="fs-3 mb-4">文章管理</h1>
    </div>
  </div>
=======
      <div class="col">
        <div class="bg-primary" style="height: 200px;"></div>
      </div>
      <div class="col">
        <div class="bg-primary" style="height: 200px;"></div>
      </div>
      <div class="col">
        <div class="bg-primary" style="height: 200px;"></div>
      </div>
      <div class="col">
        <div class="bg-primary" style="height: 200px;"></div>
      </div>
      <div class="col">
        <div class="bg-primary" style="height: 200px;"></div>
      </div> -->
    </ul>
>>>>>>> 469e250b76837bb6f3f3d7c458323dfab7f9d2c6
  <VueLoading :active="isLoading" />
</template>
<script>
import adminArticlesStore from "@/stores/adminArticlesStore.js";
import { mapActions, mapState } from 'pinia';
import PagiNation from '@/components/PagiNation.vue'

export default {
  data() {
    return {
      currentTab: '所有文章',
      isLoading: false,
    }
  },
  components: {
    PagiNation
  },
  methods: {
    ...mapActions(adminArticlesStore, ['getArticles'])
  },
  computed: {
    ...mapState(adminArticlesStore, ['articlesData'])
  },
  mounted() {
    this.getArticles();
  }
}
</script>
<style scoped>
</style>
