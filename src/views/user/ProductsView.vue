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
        <div class="row row-cols-2 row-cols-md-4 gx-4 gy-6 mb-10 mb-lg-20">
          <li class="col list-unstyled" v-for="product in products" :key="product.id">
            <div class="card border-0">
              <div class="h-border position-relative" style="width: 100%; padding-top: 100%">
                <img
                  :src="product.imageUrl"
                  class="show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                />
                <img
                  src="@/assets/images/product-1.JPG"
                  class="change position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                />
              </div>
              <div class="card-body text-start">
                <h5 class="card-title display-8 text-dark my-2">{{ product.title }}</h5>
                <!-- v-if 無折扣 -->
                <p
                  v-if="product.origin_price === product.price"
                  class="card-text display-8 text-primary my-2"
                >
                  NT$ {{ product.origin_price }}
                </p>
                <!-- v-else 打折 -->
                <p v-else class="card-text my-2">
                  <span class="card-text display-8 text-primary text-decoration-line-through">
                    NT$ {{ product.origin_price }}</span
                  ><span class="ms-2 display-7 text-dark fw-medium"> NT$ {{ product.price }}</span>
                </p>
                <button
                  href="#"
                  class="custom-btn custom-btn-toGreen text-center w-100 border-1 add-to-cart"
                  @click.prevent="addToCart(product.id)"
                >
                  <img src="@/assets/images/ic-cart-green.svg" alt="購物袋" />
                </button>
              </div>
            </div>
          </li>
        </div>

        <!-- 分頁 -->
        <Pagi-Nation :pagination="pagination" @update-page="updatePage"></Pagi-Nation>
      </div>
    </div>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import productStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import PagiNation from '@/components/PagiNation.vue'
import { mapState, mapActions } from 'pinia'
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
    SwiperSlide,
    PagiNation
  },
  computed: { ...mapState(productStore, ['products', 'pagination']) },
  methods: {
    ...mapActions(productStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart']),
    updatePage(page) {
      console.log(page)
      this.getProducts(page)
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/_mixin.scss';
.card-title {
  height: 15px;
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
