<template>
  <div class="px-7 pt-10 text-start">
    <div class="container-fluid">
      <h1 class="fs-3 mb-6">文章管理</h1>
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
        <a href="#" class="btn btn-primary mb-4">建立文章</a>
        <a href="#" class="btn btn-primary mb-4">置頂文章管理</a>
      </div>
      <div class="row" style="row-gap: 24px;">
        <div class="col-2">
          <div class="bg-primary" style="height: 200px;"></div>
        </div>
        <div class="col-2">
          <div class="bg-primary" style="height: 200px;"></div>
        </div>
        <div class="col-2">
          <div class="bg-primary" style="height: 200px;"></div>
        </div>
        <div class="col-2">
          <div class="bg-primary" style="height: 200px;"></div>
        </div>
        <div class="col-2">
          <div class="bg-primary" style="height: 200px;"></div>
        </div>
        <div class="col-2">
          <div class="bg-primary" style="height: 200px;"></div>
        </div>
        <div class="col-2">
          <div class="bg-primary" style="height: 200px;"></div>
        </div>
      </div>
    </div>
  </div>
  <VueLoading :active="isLoading" />
</template>
<script>
export default {
  data() {
    return {
      currentTab: '所有文章',
      isLoading: false
    }
  },
  methods: {
    getArticles(tab) {
      this.currentTab = tab
      console.log(tab)
      console.log(import.meta.env)
    }
  },
  mounted() {
    this.getArticles('所有文章')
  }
}
</script>
<style scoped lang="scss">
@import '../assets/scss/all.scss';
.nav-link{
  background-color: transparent;
  color: $primary;
  &.active{
    background-color: $primary;
    color: #fff;
  }
}
</style>
