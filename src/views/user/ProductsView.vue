<template>
  <div>
    <swiper
      :slides-per-view="1"
      :modules="modules"
      :centeredSlides="true"
      :navigation="true"
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
  </div>
  <main class="container">
    <div class="row py-7 py-lg-10">
      <!-- 側邊目錄 -->
      <aside class="d-none d-lg-block col-lg-3 h-bottom-line">
        <ul class="d-none d-md-block list-unstyled text-dark text-start">
          <li>
            <a class="d-inline-block py-2 mx-3 position-relative active" href="#"
              >全部商品 All products</a
            >
          </li>
          <li>
            <a class="d-inline-block py-2 mx-3" href="#">戒指 Rings</a>
          </li>
          <li>
            <a class="d-inline-block py-2 mx-3" href="#">耳環 Earrings</a>
          </li>
          <li>
            <a class="d-inline-block py-2 mx-3" href="#">手環 Bracelet</a>
          </li>
          <li>
            <a class="d-inline-block py-2 mx-3" href="#">項鍊 Necklace</a>
          </li>
          <li class="d-inline-block py-2 mx-3"></li>
          <li>
            <a class="d-inline-block py-2 mx-3" href="#">925純銀 Silver</a>
          </li>
          <li>
            <a class="d-inline-block py-2 mx-3" href="#">14K金 14K-Gold</a>
          </li>
          <li>
            <a class="d-inline-block py-2 mx-3" href="#">18K金 18K-Gold</a>
          </li>
          <li class="d-inline-block py-2 mx-3"></li>
          <li>
            <a class="d-inline-block py-2 mx-3" href="3-1.cusProduct.html">客製設計</a>
          </li>
        </ul>
      </aside>
      <div class="col-lg-9 py-2">
        <!-- 麵包屑導航 -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">首頁</a></li>
            <li class="breadcrumb-item active" aria-current="page">全部商品</li>
          </ol>
        </nav>
        <!-- 商品列表 -->
        <div class="row row-cols-2 row-cols-md-4 g-4 mb-10 mb-lg-20">
          <li class="col list-unstyled">
            <div class="card border-0">
              <div class="h-border position-relative" style="width: 100%; padding-top: 100%">
                <img
                  src="@/assets/images/product-1-2.jpg"
                  class="card-img-top show position-absolute top-0 start-0 object-fit-cover"
                />
                <img
                  src="@/assets/images/product-1.JPG"
                  class="card-img-top change position-absolute top-0 start-0 object-fit-cover"
                />
              </div>
              <div class="card-body text-start">
                <h5 class="card-title display-8 text-dark my-2">蔚藍海洋 - 拉利瑪海紋石純銀項鍊</h5>
                <!-- v-if 無折扣 -->
                <!-- <span class="card-text display-8 text-primary my-2">NT$3,800</span> -->
                <!-- v-else 打折 -->
                <p class="card-text my-2">
                  <span class="card-text display-8 text-primary text-decoration-line-through">
                    NT$3,800</span
                  ><span class="ms-2 display-7 text-dark fw-medium"> NT$3,500</span>
                </p>
                <a href="#" class="btn btn-outline-primary w-100 border-1">加入購物車</a>
              </div>
            </div>
          </li>
        </div>

        <!-- 分頁 -->
        <nav aria-label="Page navigation ">
          <ul class="cus-pagination list-unstyled mb-20 mb-lg-25">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span class="material-icons fs-8 p-1"> navigate_before </span>
              </a>
            </li>
            <li class="page-item fs-8">
              <a class="page-link active" href="#" aria-current="page">1</a>
            </li>
            <li class="page-item fs-8">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item fs-8">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span class="material-icons fs-8 p-1"> navigate_next </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'

// Import Swiper styles
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
.card-title {
  height: 30px;
  @include pad {
    height: 50px;
  }
}
.mySwiper {
  height: 400px;
  max-width: calc(100vw - 1rem);
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
