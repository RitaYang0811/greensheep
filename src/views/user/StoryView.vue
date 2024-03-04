<template>
  <SwiperImages>
    <template #firstImage>
      <img src="https://images.unsplash.com/photo-1498075702571-ecb018f3752d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2078&q=80" alt="swiperImage">
    </template>
    <template #secondImage>
      <img src="https://images.unsplash.com/photo-1678929459787-b2e064262898?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="swiperImage">
    </template>
    <template #thirdImage>
      <img src="https://images.unsplash.com/photo-1505582866941-6788e0205dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="swiperImage">
    </template>
  </SwiperImages>
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
