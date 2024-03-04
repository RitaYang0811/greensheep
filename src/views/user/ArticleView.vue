<template>
    <h2>專欄文章詳細頁</h2>
    {{ article }}
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
