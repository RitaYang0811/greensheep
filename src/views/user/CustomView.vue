<template>
  <div class="container pt-7 pt-lg-10">
    <!-- breadcrumb -->
    <div class="row justify-content-center">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb col-12">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <router-link to="/products">全部商品</router-link>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <routerLink :to="`/products?category=${productInfo.category}`"
              >{{ productInfo.category }}
            </routerLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ productInfo.title }}</li>
        </ol>
      </nav>

      <div class="row justify-content-between">
        <div class="col-12 col-lg-6">
          <!-- Swiper -->
          <ProductSwiper :product-info="productInfo"></ProductSwiper>
        </div>
        <!-- 商品資訊 -->
        <div class="col-12 col-lg-5 text-start d-flex flex-column">
          <div class="d-flex align-items-center mb-2">
            <h1 class="fw-bold fs-3 fs-lg-2 me-5">{{ productInfo.title }}</h1>
            <!-- 愛心收藏 -->

            <i class="bi bi-heart fs-4 text-primary"></i>
            <i class="bi bi-heart-fill fs-4 text-primary"></i>
          </div>
          <!-- v-if 無折扣 -->
          <p
            v-if="productInfo.origin_price === productInfo.price"
            class="text-secondary fs-4 fs-lg-3 fw-medium mb-4 mb-lg-5"
          >
            NT$ {{ productInfo.origin_price }}
          </p>
          <!-- v-else 打折 -->

          <p v-else class="mb-4 mb-lg-5 d-flex align-item-center gap-4">
            <span class="text-primary fs-4 fs-lg-3 fw-medium"> NT$ {{ productInfo.price }}</span>
            <span class="text-grey9F fs-6 fs-lg-5 fw-medium text-decoration-line-through my-1">
              NT$ {{ productInfo.origin_price }}
            </span>
            <span v-if="productInfo.discount !== 10" class="bg-deco p-1 text-dark fs-8 my-1"
              >{{ productInfo.discount }}折</span
            >
          </p>
          <!-- 行銷活動 -->
          <div class="position-relative start-line">
            <div class="d-flex align-items-bottom text-grey66 fs-9 text-start ms-7">
              <div class="d-inline-block border-grey66 me-6">
                <p class="mb-2">全館滿NT$2,000，享台灣免運優惠</p>
                <p class="mb-2">全館滿NT$12,000，享國際免運優惠</p>
                <p class="mb-2">凡購買指定商品，免費升級品牌絨布禮盒包裝(含品牌緞帶)</p>
              </div>
              <a
                class="d-flex align-items-center text-primary collapsed align-self-end mb-2"
                data-bs-toggle="collapse"
                href="#productCollapse"
                role="button"
                aria-expanded="false"
                aria-controls="productCollapse"
                >查看<br class="d-none d-lg-block d-xl-none" />更多
                <span class="material-icons expand-less fs-6"> expand_less </span>
                <span class="material-icons expand-more fs-6"> expand_more </span>
              </a>
            </div>
            <!-- 折疊選單 -->
            <div class="collapse text-grey66 fs-9 text-start ms-7" id="productCollapse">
              <p class="mb-2 font-noto-serif">情人節限定優惠，指定商品8折起</p>
              <p>慶祝板娘生日，購買指定商品，就送板娘飛吻一個～啾咪！</p>
            </div>
          </div>
          <!-- 產品特色 -->
          <div class="my-4">
            <p class="d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7">
              <span class="material-icons me-1 fs-8 fs-lg-7"> check_circle </span>

              材質：{{ productInfo.material }}
            </p>
            <p class="d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7">
              <span class="material-icons me-1 fs-8 fs-lg-7"> check_circle </span>
              {{ productInfo.purchaseWay }}：接單後{{ productInfo.makingDays }}日內出貨
            </p>
            <p
              v-if="Array.isArray(productInfo.gifts)"
              class="d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"
            >
              <span class="material-icons me-1 fs-8 fs-lg-7"> check_circle </span>

              贈：{{ productInfo.gifts.join('、') }}
            </p>
            <p class="d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7">
              <span class="material-icons me-1 fs-8 fs-lg-7"> check_circle </span>

              包裝：{{ productInfo.wrap }}
            </p>
          </div>
          <!-- 優惠加購 -->
          <div
            v-if="productInfo.wrap === '品牌經典紙盒包裝'"
            class="d-flex align-items-center justify-content-between bg-light rounded-2 px-6 py-3 gap-5 mb-4"
          >
            <!-- checkbox -->
            <div
              class="form-check fs-8 w-40 w-lg-30 w-xl-40 d-flex align-items-center"
              style="color: #990000"
            >
              <input
                class="form-check-input no-box-shadow cursor-pointer me-2"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                class="form-check-label fw-medium mb-0 py-5 cursor-pointer"
                for="flexCheckDefault"
              >
                優惠加購價 NT$200
              </label>
            </div>
            <!-- Button trigger modal -->
            <div
              class="d-flex align-items-center justify-content-between gap-4 w-60 w-lg-70 w-xl-60"
            >
              <div>
                <span class="badge rounded-pill bg-primary text-white lh-sm mb-1">送禮必備</span>
                <p class="text-start text-dark fs-8 lh-sm">品牌絨布禮盒包裝(含品牌緞帶)</p>
                <span class="text-dark fs-9">(原價500元)</span>
              </div>
              <img
                src="@/assets/images/package-sm.jpg"
                alt=""
                data-bs-toggle="modal"
                data-bs-target="#packageModal"
                style="width: 60px; height: 60px; cursor: pointer"
                class="img-fluid"
              />
            </div>
            <!-- 彈跳視窗 -->
            <div
              class="modal fade"
              id="packageModal"
              tabindex="-1"
              aria-labelledby="packageModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content p-6 bg-primary">
                  <div class="modal-header border-0 justify-content-end">
                    <button
                      type="button"
                      class="text-white mb-4 bg-transparent border-0"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <span class="material-icons fs-2"> close </span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <img
                      src="@/assets/images/package.jpg"
                      alt="package-picture"
                      class="border border-1"
                      style="border-radius: 60px 0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex gap-5 my-5 flex-column justify-content-center">
            <!-- 數量選擇 -->

            <div class="d-flex gap-4 align-content-center justify-content-center">
              <button
                type="button"
                class="btn qty-btn rounded-circle border-primary p-0"
                :disabled="qty === 1"
                @click.prevent="qty--"
              >
                <i class="bi bi-dash-lg text- fs-3"></i>
              </button>
              <input
                v-model="qty"
                type="number"
                class="border-0 text-center number-select"
                min="1"
                value="1"
                readonly
              />
              <button class="btn qty-btn rounded-circle p-0 border-primary" @click.prevent="qty++">
                <i class="bi bi-plus-lg text-primary fs-3"></i>
              </button>
            </div>

            <button
              href="#"
              class="custom-btn custom-btn-primary text-center border-1 add-to-cart fw-bold w-80 mx-auto"
              style="height: 40px"
              @click.prevent="addToCart(productInfo.id, qty)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductSwiper from '@/components/ProductSwiper.vue'
import productStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      isLoading: false,
      qty: 1
    }
  },
  components: { ProductSwiper },

  computed: {
    ...mapState(productStore, ['productInfo', 'recommendProducts'])
  },
  watch: {
    routeData: {
      handler() {
        this.getProductInfo(this.$route.params.id)
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(productStore, ['getProductInfo', 'getRecommendProducts']),
    ...mapActions(cartStore, ['addToCart']),
    scrollTo() {
      const productContent = this.$refs.productContent
      if (productContent) {
        productContent.scrollIntoView({ behavior: 'smooth' }) // 使用平滑滾動到元素
      }
    }
  },
  mounted() {
    console.log(this.$route)
    this.getProductInfo(this.$route.params.id)
    this.getRecommendProducts(this.$route.params.id)
  },
  beforeRouteUpdate(to, from) {
    this.getProductInfo(to.params.id)
    this.getRecommendProducts(to.params.id)

    this.$nextTick(() => {
      window.scrollTo(0, 0)
    })
  }
}
</script>

<style scoped>
.faq {
  background: #ffd3d3;
}
</style>
