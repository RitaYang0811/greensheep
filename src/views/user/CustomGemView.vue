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
    </div>
    <div class="row justify-content-between align-items-center mb-10">
      <div class="col-12 col-xl-6">
        <!-- 預覽照片 -->
        <div class="position-relative">
          <img
            v-for="(gem, index) in gemList"
            :key="gem.gemChName"
            v-show="index === activeGemIndex"
            :src="gem.gemUrl"
            :alt="gem.gemTitle"
            class="position-absolute top-485 start-53 translate-middle"
            style="width: 20px; height: 20px"
          />
          <img
            :src="productInfo.imageUrl"
            alt="商品正面"
            class="d-block w-100 img-fluid mb-4 object-fit-cover"
          />
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

        <h2 class="fs-3 mb-3 fw-medium mx-auto">Step 1 : 選擇專屬寶石</h2>
        <!-- 寶石列表 -->
        <ul class="row mb-0 ps-0 py-5">
          <li
            v-for="(gem, index) in gemList"
            :key="gem.gemChName"
            class="col-2 d-flex flex-column align-items-center text-dark font-montserrat fs-8 cursor-pointer mb-5"
            @click="toggleGem(index)"
          >
            <span class="mb-1 fw-medium">{{ gem.gemMonth }}</span
            ><span class="mb-3 flex-grow-1">{{ gem.gemChName }}</span>
            <img
              :src="gem.gemUrl"
              :alt="gem.gemChName"
              class="d-block mx-auto"
              style="width: 20px; height: 20px"
            />
          </li>
        </ul>
        <div class="d-flex justify-content-center gap-0 gap-lg-6">
          <a
            class="custom-btn bg-white text-primary fw-bold py-4 px-8"
            @click.prevent="toPreviousPage"
            >上一步</a
          >
          <RouterLink
            :to="{ path: `/customText/${productInfo.id}` }"
            class="custom-btn custom-btn-next bg-primary text-white fw-medium py-4 px-10"
            >下一步：雷刻文字</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
  <VueLoading v-model:active="isLoading" />
</template>

<script>
import productStore from '@/stores/productStore'
import customStore from '@/stores/customStore'
import likeStore from '@/stores/likeStore'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      isLoading: false,
      activeGemIndex: -1
    }
  },
  computed: {
    ...mapState(productStore, ['products', 'productInfo', 'loadingStatus']),
    ...mapState(customStore, ['gemList']),
    ...mapState(likeStore, ['isLike'])
  },
  methods: {
    ...mapActions(productStore, ['getProducts', 'getProductInfo']),
    ...mapActions(likeStore, ['likeInit', 'addToLike', 'isLogin']),
    //切換點擊寶石的索引
    toggleGem(index) {
      this.activeGemIndex = this.activeGemIndex === index ? -1 : index
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

<style></style>
