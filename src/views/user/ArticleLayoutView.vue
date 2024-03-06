<template>
  <SwiperImages>
    <template #firstImage>
      <img src="https://images.unsplash.com/photo-1684616290729-347a70d05d26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="swiperImage">
    </template>
    <template #secondImage>
      <img src="https://images.unsplash.com/photo-1539050125830-eb92d115b2b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="swiperImage">
    </template>
    <template #thirdImage>
      <img src="https://images.unsplash.com/photo-1554047310-ab6170fc7b10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="swiperImage">
    </template>
  </SwiperImages>

  <RouterView />
</template>
<script>
import SwiperImages from '@/components/SwiperImages.vue'

export default {
  components: {
    SwiperImages
  },
}
</script>
<style scoped>
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>