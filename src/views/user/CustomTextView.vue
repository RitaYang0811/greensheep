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
              >客製設計 COSTOMIZED
            </routerLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">星球寶石 生日石訂製項鍊</li>
        </ol>
      </nav>
      <div class="row justify-content-between align-items-center mb-10">
        <div class="col-12 col-xl-6">
          <!-- 預覽照片 -->
          <div class="position-relative">
            <img
              src="@/assets/images/custom-back.jpg"
              alt="商品背面"
              class="d-block w-100 img-fluid mb-4 object-fit-cover"
            />
            <div class="position-absolute top-56 start-50 translate-middle">
              <div
                class="text-black fw-medium"
                :style="{
                  fontFamily: selectedFont
                }"
              >
                <p class="fs-5">{{ product.text }}</p>
              </div>
            </div>
          </div>

          <p class="font-montserrat fs-9 text-grey9F text-start mb-2">
            寶石均為天然寶石，些許色差及天然內含物，均為正常現象。
          </p>
          <p class="font-montserrat fs-9 text-grey9F text-start mb-10 mb-xl-5">
            照片預覽為參考，設計師會依實際狀況做位置及尺寸調整。
          </p>
        </div>
        <div class="col-12 col-xl-5 text-center d-flex flex-column">
          <div class="d-flex align-items-center justify-content-center mb-2">
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
            class="text-secondary text-center fs-4 fs-lg-3 fw-medium mb-4 mb-lg-5"
          >
            NT$ {{ productInfo.origin_price }}
          </p>
          <!-- v-else 打折 -->
          <p v-else class="mb-4 mb-lg-5 d-flex align-item-center gap-4 mx-auto">
            <span class="text-secondary fs-4 fs-lg-3 fw-medium"> NT$ {{ productInfo.price }}</span>
            <span class="text-grey9F fs-6 fs-lg-5 fw-medium text-decoration-line-through my-1">
              NT$ {{ productInfo.origin_price }}
            </span>
            <span v-if="productInfo.discount !== 10" class="bg-deco p-1 text-dark fs-8 my-1"
              >{{ productInfo.discount }}折</span
            >
          </p>

          <h2 class="fs-3 mb-3 fw-medium">Step 2 : 輸入你想說的話</h2>
          <!-- 輸入文字 -->
          <div class="container mb-5">
            <VForm class="row mx-auto" v-slot="{ errors }">
              <div class="col-10 mx-auto">
                <div class="form-floating">
                  <VField
                    type="text"
                    name="輸入文字"
                    rules="max:10"
                    class="form-control no-box-shadow bg-white"
                    :class="{ 'is-invalid': errors['輸入文字'] }"
                    id="inputText"
                    placeholder="請輸入雷刻文字內容"
                    v-model="product.text"
                  />
                  <label for="inputText">請輸入雷刻文字內容</label>
                </div>
                <ErrorMessage name="輸入文字" class="invalid-feedback" />
                <div id="step2HelpBlock" class="form-text text-start">
                  (中文最多5個字，英文最多10個字母)
                </div>
              </div>
              <!-- <button class="col-2 btn btn-primary" id="previewButton">預覽</button> -->
            </VForm>
            <div class="row mx-auto py-4">
              <div class="col-6 col-md-4">
                <label
                  for="Montserrat"
                  class="fs-2 fw-medium text-dark"
                  style="font-family: 'Montserrat', sans-serif"
                  >Love</label
                >
                <br />
                <input
                  type="radio"
                  name="fontRadio"
                  value="Montserrat"
                  id="Montserrat"
                  v-model="selectedFont"
                  @click="updateFont"
                  checked
                />
                <label
                  for="Montserrat"
                  class="fs-7 fw-medium text-primary"
                  style="font-family: 'Montserrat', sans-serif"
                  >現代</label
                >
              </div>

              <div class="col-6 col-md-4">
                <label
                  for="NotoSerif"
                  class="fs-2 fw-medium text-dark"
                  style="font-family: 'Noto Serif TC', sans-serif"
                  >Love</label
                >
                <br />
                <input
                  type="radio"
                  name="fontRadio"
                  value="Noto Serif TC"
                  id="NotoSerif"
                  v-model="selectedFont"
                  @click="updateFont"
                />
                <label
                  for="NotoSerif"
                  class="fs-7 fw-medium text-primary"
                  style="font-family: 'Noto Serif TC', sans-serif"
                  >古典</label
                >
              </div>

              <div class="col-12 col-md-4 mx-auto">
                <label
                  for="Script"
                  class="fs-2 fw-medium text-dark"
                  style="font-family: 'Dancing Script', sans-serif"
                  >Love</label
                >
                <br />
                <input
                  type="radio"
                  name="fontRadio"
                  value="Dancing Script"
                  id="Script"
                  v-model="selectedFont"
                  @click="updateFont"
                />

                <label
                  for="Script"
                  class="fs-8 fw-medium text-primary"
                  style="font-family: 'Dancing Script', sans-serif"
                  >手寫（限英文）</label
                >
              </div>
            </div>
          </div>
          <div class="d-flex w-80 w-lg-90 justify-content-center gap-0 gap-lg-3 mx-auto">
            <a
              class="custom-btn bg-white text-primary fw-bold py-4 px-8 w-40"
              @click.prevent="toPreviousPage"
              >上一步</a
            >
            <button
              type="button"
              class="custom-btn custom-btn-primary text-center border-1 add-to-cart fw-bold w-60 mx-auto"
              @click.prevent="addToCart(productInfo.id)"
            ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <VueLoading v-model:active="isLoading" />
</template>

<script>
import productStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import likeStore from '@/stores/likeStore'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      product: {
        text: ''
      },
      selectedFont: 'Montserrat',
      isLoading: false
    }
  },
  computed: {
    ...mapState(productStore, ['products', 'productInfo', 'loadingStatus']),
    ...mapState(likeStore, ['isLike'])
  },
  methods: {
    ...mapActions(productStore, ['getProducts', 'getProductInfo']),
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(likeStore, ['likeInit', 'addToLike', 'isLogin']),

    //更新預覽字型
    updateFont(e) {
      this.selectedFont = e.target.value
    },
    toPreviousPage() {
      this.$router.back()
    }
  },
  async mounted() {
    this.isLoading = true
    await this.getProducts()
    await this.getProductInfo(this.$route.params.id)
    this.isLoading = false
  }
}
</script>

<style scoped lang="scss">
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
</style>
