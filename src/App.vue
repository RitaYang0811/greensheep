<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header></Header>

  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <div class="btn btn-primary">點我</div>

  <RouterView />
  <Footer></Footer>
</template>

<style scoped></style>

<style lang="scss">
@import "./assets/scss/all.scss";
</style>
