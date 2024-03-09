<template>
  <div class="swiper">
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff'
      }"
      :loop="true"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide><img :src="productInfo.imageUrl" :alt="productInfo.title" /></swiper-slide>
      <swiper-slide><img :src="productInfo.imageUrl2" :alt="productInfo.title" /></swiper-slide>
      <swiper-slide v-for="(img, index) in productInfo.imagesUrl" :key="index + 123">
        <img :src="img" :alt="productInfo.title" />
      </swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :loop="true"
      :spaceBetween="10"
      :slidesPerView="8"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><img :src="productInfo.imageUrl" :alt="productInfo.title" /></swiper-slide>
      <swiper-slide><img :src="productInfo.imageUrl2" :alt="productInfo.title" /></swiper-slide>
      <swiper-slide v-for="(img, index) in productInfo.imagesUrl" :key="index + 123">
        <img :src="img" :alt="productInfo.title" /> </swiper-slide
    ></swiper>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
export default {
  props: ['product-info'],
  data() {
    return {
      thumbsSwiper: '',
      modules: [FreeMode, Navigation, Thumbs]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper
    }
  }
}
</script>

<style scoped>
.swiper {
  height: 600px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: start;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 85%;
  width: 100%;
}

.mySwiper {
  height: 15%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
