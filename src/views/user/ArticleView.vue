<template>
    <!-- {{ article }} -->
  <div class="container text-start py-7 py-lg-20">
    <nav aria-label="breadcrumb ">
      <ol class="breadcrumb mb-20">
        <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/articles">專欄文章</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ article.title }}
        </li>
      </ol>
    </nav>

    <h1 class="h2 text-primary text-center mb-12 fw-bold">
      {{ article.title }}
    </h1>
    <div class="row d-flex d-lg-block mb-20">
      <div class="col-lg-5 me-4 mb-2" style="float: left;"><img :src="article.image" alt=""></div>
      <div class="col-12 lh-lg text-primary">
        <div v-html="article.content"></div>
      </div>
    </div>

    <h2 class="h4 text-primary text-center mb-10 fw-bold">猜你也喜歡</h2>
  </div>
    <VueLoading :active="isLoading" />
</template>
<script>
export default {
  data() {
    return {
      article:[],
      isLoading: false
    }
  },
  mounted() {
    this.isLoading = true
    const id = this.$route.params.id
    const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/article/${id}`
    
    this.$http.get(url)
      .then(res => {
        this.article = res.data.article
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        this.isLoading = false
      })
  }
}
</script>
<style scoped></style>
