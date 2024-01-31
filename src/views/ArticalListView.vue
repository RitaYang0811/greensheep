<template>
  <div class="article-list">
    <h1>專欄文章列表</h1>
    <router-link to="/articleList/articleDetail">前往專欄文章詳細頁</router-link>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.article-list {
  background: #ffd3d3;
}
</style>
