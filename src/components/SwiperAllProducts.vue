<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff'
    }"
    :slides-per-view="1"
    :modules="modules"
    :centeredSlides="true"
    :navigation="false"
    :pagination="{
      clickable: true
    }"
    :loop="true"
    :spaceBetween="30"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true
    }"
    class="mySwiper"
  >
    <swiper-slide>
      <img
        src="https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://images.unsplash.com/photo-1653903414969-0df006d9b6fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    /></swiper-slide>
    <swiper-slide>
      <img
        src="https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
// Import Swiper style
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default {
  data() {
    return {
      modules: [Navigation, Autoplay, Pagination]
    }
  },

  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/mixin.scss';

.mySwiper {
  height: 400px;
  max-width: calc(100vw - 1rem);
  @include pad {
    height: 200px;
  }
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
