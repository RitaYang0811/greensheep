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
      <div class="col-lg-5 me-4 mb-2" style="float: left;"><img :src="article.image" alt=""></div>
      <div class="col-12 lh-lg text-primary">
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
    <ul class="row row-cols-2 row-cols-md-4 g-4 mb-20 list-unstyled">
      <li v-for="(product, index) in recommendProducts" :key="product.id" class="col d-flex flex-column product-item">
        <RouterLink
          :to="`/products/${product.id}`"
          class="d-flex flex-column product-item"
          data-aos="fade-up"
          data-aos-duration="1200"
          :data-aos-delay="index * 200"
          data-aos-once="true"
        >
          <div
            class="product h-border position-relative"
            style="width: 100%; padding-top: 100%"
          >
            <img
              :src="product.imageUrl"
              class="card-img-top show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
              :alt="product.title"
            />
            <img
              :src="product.imageUrl2"
              class="card-img-top change position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
              :alt="product.title"
            />
          </div>
          <div
            class="card-body text-start d-flex flex-column justify-content-between p-1 flex-grow-1"
          >
            <h5 class="card-title display-8 text-dark pt-2">
             {{ product.title }}
            </h5>
            <div class="d-flex gap-1">
              <!-- v-if 無折扣 -->
              <template v-if="product.origin_price === product.price">
                <p                
                  class="card-text display-8 text-primary "
                >
                  NT$ {{ product.origin_price }}
                </p>
              </template> 
              <!-- v-else 打折 -->
              <template v-else>
                <span class="card-text display-8 text-primary"
                  >NT$ {{ product.origin_price }}</span
                >
                <br /><span class="card-text display-8 text-grey9F text-decoration-line-through">
                  NT$ {{ product.price }}
                </span>
              </template>
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
    <VueLoading :active="isLoading" />
</template>
<script>
import productStore from '@/stores/productStore.js'
import { mapState, mapActions } from 'pinia'
import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      article: '',
      isLoading: false
    }
  },
  methods: {
    ...mapActions(productStore, ['getProducts', 'getRecommendProducts']),
    // 取得單一文章
    getArticle() {
      this.isLoading = true
      const id = this.$route.params.id
      const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/article/${id}`
      
      this.$http.get(url)
        .then(res => {
          this.article = res.data.article
        })
        .catch(err => {
          console.log(err)
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
    await this.getRecommendProducts()
  }
}
</script>
<style scoped></style>
