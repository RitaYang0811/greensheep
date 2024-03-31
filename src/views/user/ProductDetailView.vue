<template>
  <div class="container pt-30">
    <div class="row justify-content-center">
      <!-- breadcrumb -->
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb col-12">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <RouterLink to="/products/全部商品%20ALL">全部商品</RouterLink>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <routerLink :to="{ path: `/products/${productInfo.category}` }"
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
            <i
              class="bi fs-4 text-primary cursor-pointer"
              @click.prevent="isLogin(productInfo.id)"
              ref="favIcon"
              :class="[isLike ? 'bi-heart-fill' : 'bi-heart']"
            ></i>
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
          <!-- 庫存 -->
          <p v-if="productInfo.category !== '客製設計 CUSTOMIZED'" class="text-dark fs-7 mb-4">
            庫存數量：{{ productInfo.stockNum }} {{ productInfo.unit
            }}<span
              v-if="productInfo.stockNum < 5 && productInfo.stockNum > 0"
              class="text-danger ms-4 fs-8 fst-italic"
              >庫存緊張</span
            ><span v-else-if="productInfo.stockNum === 0" class="text-danger ms-4 fs-8 fst-italic"
              >售完補貨中</span
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
            <p
              v-if="productInfo.material"
              class="d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"
            >
              <span class="material-icons me-1 fs-8 fs-lg-7"> check_circle </span>

              材質：{{ productInfo.material }}
            </p>
            <p
              v-if="productInfo.purchaseWay"
              class="d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"
            >
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
            <p
              v-if="productInfo.wrap"
              class="d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7"
            >
              <span class="material-icons me-1 fs-8 fs-lg-7"> check_circle </span>

              包裝：{{ productInfo.wrap }}
            </p>
          </div>
          <!-- 優惠加購 -->
          <div
            v-if="productInfo.wrap === '品牌絨布禮盒包裝'"
            class="d-flex align-items-center justify-content-between bg-light rounded-2 px-6 py-3 gap-5 mb-4"
          >
            <!-- checkbox -->
            <!-- <div
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
            </div> -->
            <!-- Button trigger modal -->
            <div
              v-if="productInfo.wrap === '品牌絨布禮盒包裝'"
              class="d-flex align-items-center justify-content-between gap-4 w-100 w-lg-70 w-xl-60"
            >
              <div>
                <span class="badge rounded-pill bg-primary text-white lh-sm mb-1">送禮必備</span>
                <p class="text-start text-dark fs-8 lh-sm">品牌絨布禮盒包裝(含品牌緞帶)</p>
                <span class="text-dark fs-9">(原價500元)</span>
              </div>
              <img
                src="@/assets/images/package-sm.jpg"
                alt="包裝"
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
            <div
              v-if="productInfo.category !== '客製設計 CUSTOMIZED'"
              class="d-flex gap-4 align-content-center justify-content-center"
            >
              <button
                type="button"
                class="btn qty-btn rounded-circle border-primary p-0"
                :disabled="qty === 1 || productInfo.stockNum === 0"
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
              <button
                class="btn qty-btn rounded-circle p-0 border-primary"
                :disabled="qty === productInfo.stockNum || productInfo.stockNum === 0"
                @click.prevent="qty++"
              >
                <i class="bi bi-plus-lg text-primary fs-3"></i>
              </button>
            </div>

            <button
              v-if="productInfo.category === '客製設計 CUSTOMIZED'"
              type="button"
              class="custom-btn custom-btn-primary text-center border-1 start-custom fw-bold w-80 mx-auto"
              :class="{ 'no-stock': productInfo.stockNum === 0 }"
              :disabled="productInfo.stockNum === 0"
              style="height: 40px"
              @click.prevent="toCustomGem(productInfo.id)"
            ></button>
            <button
              v-else
              type="button"
              class="custom-btn custom-btn-primary text-center border-1 add-to-cart fw-bold w-80 mx-auto"
              :class="{ 'no-stock': productInfo.stockNum === 0 }"
              :disabled="productInfo.stockNum === 0"
              style="height: 40px"
              @click.prevent="addToCart(productInfo.id, qty)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="position-relative m-auto cursor-pointer my-10 my-lg-0 mb-lg-20"
    @click.prevent="scrollTo"
    style="width: 100px; height: 100px"
  >
    <svg class="overflow-visible self-rotate" viewBox="0 0 100 100">
      <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" fill="none" />
      <text class="letter-spacing" fill="#859c89">
        <textPath xlink:href="#circle" class="text-primary">
          * Green Sheep * handmade jewelry *
        </textPath>
      </text>
    </svg>
    <span class="position-absolute top-50 start-50 translate-middle text-nowrap">
      <i class="arrow-more bi bi-arrow-down"></i>
    </span>
  </div>
  <!-- 下半部 -->
  <div class="container py-10" ref="productContent">
    <p
      class="product-content mb-5 text-primary lh-lg w-100 w-lg-80 mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-offset="50"
    >
      {{ productInfo.content }}
    </p>

    <div class="py-5 text-primary">
      <div
        class="d-flex flex-column align-items-center mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <p
          v-if="productInfo.material"
          class="mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1"
        >
          材質
        </p>
        <p v-if="productInfo.material" class="lh-lg">{{ productInfo.material }}</p>
      </div>

      <div
        class="d-flex flex-column align-items-center mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p class="mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1">
          台灣原創設計 & 手工製作
        </p>
      </div>
      <!-- 圖片區 -->
      <div class="row py-10 mb-20 mb-lg-25 w-lg-80 mx-auto justify-content-center">
        <div
          class="mb-3 col-6 col-md-4 col-lg-6"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            :src="productInfo.imageUrl"
            alt="商品圖片"
            class="product-content-img object-fit-cover"
          />
        </div>
        <div
          class="mb-3 col-6 col-md-4 col-lg-6"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            :src="productInfo.imageUrl2"
            alt="商品圖片"
            class="product-content-img object-fit-cover"
          />
        </div>
        <template v-for="imgUrl in productInfo.imagesUrl" :key="imgUrl">
          <div
            class="mb-3 col-6 col-md-4 col-lg-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img :src="imgUrl" alt="商品圖片" class="product-content-img object-fit-cover" />
          </div>
        </template>
      </div>

      <hr />
    </div>
    <div class="container mb-20">
      <h2 class="h4 text-primary mb-10 fw-bold">猜你也喜歡</h2>
      <ul class="row row-cols-2 row-cols-md-4 g-4 mb-20 ps-0">
        <li
          class="col list-unstyled h-100 column"
          v-for="product in recommendProducts"
          :key="product.id"
        >
          <RouterLink :to="{ path: `/products/detail/${product.id}` }" class="card border-0">
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
  </div>
  <VueLoading v-model:active="isLoading" />
</template>

<script>
import ProductSwiper from '@/components/ProductSwiper.vue'
import productStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import likeStore from '@/stores/likeStore'
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
    ...mapState(productStore, ['products', 'productInfo', 'recommendProducts', 'loadingStatus']),
    ...mapState(likeStore, ['isLike'])
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
    ...mapActions(productStore, ['getProducts', 'getProductInfo', 'getRecommendProducts']),
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(likeStore, ['likeInit', 'addToLike', 'isLogin']),
    scrollTo() {
      const productContent = this.$refs.productContent
      if (productContent) {
        productContent.scrollIntoView({ behavior: 'smooth' })
      }
    },
    //導航至選擇寶石頁
    toCustomGem(id) {
      this.$router.push({
        path: `/customGem/${id}`
      })
    }
  },
  async mounted() {
    this.isLoading = true
    await this.getProducts()
    await this.getProductInfo(this.$route.params.id)
    this.getRecommendProducts(this.$route.params.id)
    this.likeInit(this.$route.params.id)
    this.isLoading = false
  },
  beforeRouteUpdate(to) {
    this.getProductInfo(to.params.id)
    this.getRecommendProducts(to.params.id)
    this.$nextTick(() => {
      window.scrollTo(0, 0)
    })
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/mixin.scss';
.qty-btn {
  width: 40px;
  height: 40px;
  &:hover {
    background: white;
  }
}
.add-to-cart {
  &::after {
    content: '加入購物車';
    left: 50%;
    top: 25%;
    transform: translate(-50%);
  }
  &:hover::after {
    color: #566b5a;
  }
}
.no-stock {
  &::after {
    content: '售完補貨中';
    left: 50%;
    top: 25%;
    transform: translate(-50%);
  }
  &:hover::after {
    color: #566b5a;
  }
}
.start-custom {
  &::after {
    content: '開始製作';
    left: 50%;
    top: 25%;
    transform: translate(-50%);
  }
  &:hover::after {
    color: #566b5a;
  }
}
//圈圈箭頭
.arrow-more {
  font-size: 40px;
  color: #859c89;
}

.letter-spacing {
  letter-spacing: 1px;
}

.self-rotate {
  animation: self-rotate360 10s infinite linear;
}

@keyframes self-rotate360 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.product-content {
  @include pad {
    max-width: 768px;
  }
  @include mobile {
    max-width: 375px;
  }
}
.product-content-img {
  width: 100%;
  height: 500px;
  @include pad {
    height: 250px;
  }
  @include mobile {
    height: 200px;
  }
}
</style>
