<template>
  <div class="container text-start py-7 py-lg-20">
    <nav aria-label="breadcrumb ">
      <ol class="breadcrumb mb-20">
        <li class="breadcrumb-item"><RouterLink to="/">首頁</RouterLink></li>
        <li class="breadcrumb-item">
          <RouterLink to="/articles">專欄文章</RouterLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ article.title }}
        </li>
      </ol>
    </nav>

    <h1
      class="h2 text-primary text-center mb-12 fw-bold"
      data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100" data-aos-once="true"
    >
      {{ article.title }}
    </h1>
    <div 
      class="row d-flex d-lg-block mb-20" 
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="200"
      data-aos-once="true"
    >
      <div class="col-12 lh-lg text-primary ck-content">
        <div v-html="article.content"></div>
      </div>
    </div>

    <h2
      v-if="article"
      class="h4 text-primary text-center mb-10 fw-bold"
      data-aos="fade-up" data-aos-duration="1200" data-aos-once="true"
    >
      猜你也喜歡
    </h2>
    <ul class="row row-cols-2 row-cols-md-4 g-4 mb-20 ps-0 list-unstyled">
        <!-- 放相同分類隨機商品 -->
        <li
          class="col list-unstyled h-100 column"
          v-for="(product, index) in recommendProducts"
          :key="product.id"
        >
          <RouterLink
            :to="`/products/${product.id}`"
            class="d-flex flex-column product-item"
            data-aos="fade-up"
            data-aos-duration="1200"
            :data-aos-delay="index * 200"
            data-aos-once="true"
          >
            <div class="h-border position-relative" style="width: 100%; padding-top: 100%">
              <span
                v-if="product.discount !== 10"
                class="position-absolute start-0 bottom-0 z-3 bg-deco p-1 text-dark fs-8"
                >{{ product.discount }}折</span
              >
              <img
                :src="product.imageUrl"
                :alt="product.title"
                class="show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
              />
              <img
                :src="product.imageUrl2"
                :alt="product.title"
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

              <!-- 加入購物車 -->
              <button
                type="button"
                class="custom-btn custom-btn-toGreen text-center w-100 border-1"
                @click.prevent="addToCart(product.id)"
              >
                <i class="bi bi-bag-check fs-6"></i>
              </button>
            </div>
          </RouterLink>
        </li>
    </ul>
  </div>
  <VueLoading :active="isLoading" />
</template>
<script>
import productStore from '@/stores/productStore.js'
import cartStore from '@/stores/cartStore.js'
import { mapState, mapActions } from 'pinia'
import { useRoute } from 'vue-router'
import { toastError } from "@/utils/sweetalertToast.js"

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data() {
    return {
      article: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions(productStore, ['getProducts', 'getRecommendProducts']),
    ...mapActions(cartStore, ['addToCart']),
    // 取得單一文章
    getArticle() {
      this.isLoading = true
      const id = this.$route.params.id
      const url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/article/${id}`
      
      this.$http.get(url)
        .then(res => {
          this.article = res.data.article
        })
        .catch(err => {
          toastError(err.response.data.message)
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  },
  computed: {
    ...mapState(productStore, ['products', 'recommendProducts'])
  },
  async mounted() {
    const route = useRoute()
    this.getArticle()
    await this.getProducts(route)
    this.getRecommendProducts()
  }
}
</script>
