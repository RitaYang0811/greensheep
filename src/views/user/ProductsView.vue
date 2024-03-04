<template>
  <!-- swiper -->
  <Swiper-All-Products></Swiper-All-Products>
  <main class="container">
    <div class="row py-7 py-lg-10">
      <!-- 側邊目錄 -->
      <aside class="d-none d-lg-block col-lg-2 h-bottom-line">
        <ul class="d-none d-md-block list-unstyled text-dark text-start">
          <li>
            <routerLink
              to="/products"
              class="d-inline-block py-2 mx-3 position-relative cursor-pointer"
              >全部商品 ALL</routerLink
            >
          </li>
          <!-- categoryList -->
          <li v-for="category in categories" :key="category + 123">
            <routerLink
              :to="`/products?category=${category}`"
              class="d-inline-block py-2 mx-3 position-relative cursor-pointer"
              >{{ category }}
            </routerLink>
          </li>

          <li class="d-inline-block py-2 mx-3"></li>
          <li>
            <a class="d-inline-block py-2 mx-3" href="3-1.cusProduct.html">客製設計</a>
          </li>
        </ul>
      </aside>
      <div class="col-lg-10 py-2">
        <!-- 麵包屑導航 -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link :to="`/`">首頁</router-link></li>
            <li class="breadcrumb-item">
              <routerLink to="/products" class="cursor-pointer">商品</routerLink>
            </li>

            <li v-if="category" class="breadcrumb-item active">{{ category }}</li>
            <li v-else class="breadcrumb-item active">全部商品 ALL</li>
          </ol>
        </nav>
        <!-- 商品列表 -->
        <div class="row row-cols-2 row-cols-lg-5 gx-4 gy-6 mb-10 mb-lg-20">
          <li class="col list-unstyled h-100 column" v-for="product in products" :key="product.id">
            <router-link :to="`/products/${product.id}`" class="card border-0">
              <div class="h-border position-relative" style="width: 100%; padding-top: 100%">
                <span
                  v-if="product.discount !== 10"
                  class="position-absolute start-0 bottom-0 z-3 bg-deco p-1 text-dark fs-8"
                  >{{ product.discount }}折</span
                >
                <img
                  :src="product.imageUrl"
                  class="show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                />
                <img
                  :src="product.imageUrl2"
                  class="change position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                />
              </div>
              <div class="card-body text-start">
                <h5 class="card-title display-7 text-dark my-2">{{ product.title }}</h5>
                <!-- v-if 無折扣 -->
                <p
                  v-if="product.origin_price === product.price"
                  class="card-text display-8 text-primary mt-3 mb-6"
                >
                  NT$ {{ product.origin_price }}
                </p>

                <!-- v-else 打折 -->
                <div v-else class="mt-3 mb-1">
                  <span class="card-text display-8 text-primary my-2 me-2"
                    >NT$ {{ product.origin_price }}</span
                  >
                  <br /><span class="card-text display-8 text-grey9F text-decoration-line-through">
                    NT$ {{ product.price }}
                  </span>
                </div>
                <button
                  href="#"
                  class="custom-btn custom-btn-toGreen text-center w-100 border-1 add-to-cart"
                  @click.prevent="addToCart(product.id)"
                >
                  <i class="bi bi-bag-check fs-6"></i>
                </button>
              </div>
            </router-link>
          </li>
        </div>

        <!-- 分頁 -->
        <Pagi-Nation :pagination="pagination" @update-page="updatePage"></Pagi-Nation>
        <!-- loading -->
        <VueLoading v-model:active="isLoading" />
      </div>
    </div>
  </main>
</template>

<script>
import productStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import SwiperAllProducts from '@/components/SwiperAllProducts.vue'
import PagiNation from '@/components/PagiNation.vue'
import { mapState, mapActions } from 'pinia'
import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      isLoading: false,
      currentCategory: null,
      routeData: {
        route: null
      }
    }
  },
  components: {
    SwiperAllProducts,
    PagiNation
  },
  computed: {
    ...mapState(productStore, ['products', 'category', 'pagination', 'categories'])
  },
  watch: {
    routeData: {
      handler() {
        this.getProducts(this.routeData.route)
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(productStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart']),
    //pagiNation 傳值更新頁面
    updatePage(page) {
      this.getProducts(this.routeData.route, page)
    }
  },
  mounted() {
    //一開始取得產品
    const route = useRoute()
    this.routeData.route = route
    this.getProducts(this.routeData.route)
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/_mixin.scss';
.card-title {
  height: 16px;
}
</style>
