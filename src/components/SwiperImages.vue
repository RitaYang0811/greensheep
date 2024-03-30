<template>
  <Swiper
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
    <SwiperSlide>
      <slot name="firstImage"></slot>
    </SwiperSlide>
    <SwiperSlide>
      <slot name="secondImage"></slot>
    </SwiperSlide>
    <SwiperSlide>
      <slot name="thirdImage"></slot>
    </SwiperSlide>
  </Swiper>
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
@import '@/assets/scss/utils/_mixin.scss';
.swiper-images {
  height: 400px;
  max-width: 100vw;
  @include pad {
    height: 250px;
  }
}
// 引入此元件的 vue 檔案需將此 css 樣式複製到該 vue 檔案
// .swiper-slide img {
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }
</style>
