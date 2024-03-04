<template>
  <swiper
    :slides-per-view="1"
    :modules="modules"
    :centeredSlides="true"
    :navigation="false"
    :pagination="false"
    :loop="true"
    :spaceBetween="0"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true
    }"
    :speed="1000"
    class="swiper-images"
  >
    <swiper-slide>
      <slot name="firstImage"></slot>
    </swiper-slide>
    <swiper-slide>
      <slot name="secondImage"></slot>
    </swiper-slide>
    <swiper-slide>
      <slot name="thirdImage"></slot>
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
.swiper-images {
  height: 400px;
  max-width: 100vw;
}
// 引入此元件的 vue 檔案需將此 css 樣式複製到該 vue 檔案
// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }
</style>
