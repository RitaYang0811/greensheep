<template>
  <swiper :slides-per-view="1" :modules="modules" navigation :pagination="{ clickable: true }">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Navigation, Autoplay, Pagination } from 'swiper/core' // 注意這裡的導入方式

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

SwiperCore.use([Navigation, Autoplay, Pagination])
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

<style></style>
