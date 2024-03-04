<template>
  <div class="container py-7 py-lg-10">

    <!-- breadcrumb -->
    <div class="row">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb col-12">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item" aria-current="page">
            <router-link to="/products">全部商品</router-link>
          </li>
          <li class="breadcrumb-item" aria-current="page">項鍊</li>
          <li class="breadcrumb-item" aria-current="page">天使之愛十字架</li>
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

          <p v-else class="mb-4 mb-lg-5">
            <span class="text-primary fs-6 fs-lg-5 fw-medium me-4">
              NT$ {{ productInfo.price }}</span
            >
            <span class="text-grey9F fs-6 fs-lg-5 fw-medium text-decoration-line-through">
              NT$ {{ productInfo.origin_price }}
            </span>

          </p>
          <!-- 行銷活動 -->
          <div class="position-relative start-line">
            <div class="d-flex align-items-bottom text-grey66 fs-9 text-start ms-7">
              <div class="d-inline-block border-grey66 me-6">
                <p class="mb-2">全館滿NT$3,000，享台灣免運優惠</p>
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

              材質：925純銀 原創設計 手工製作
            </p>
            <p class="d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7">
              <span class="material-icons me-1 fs-8 fs-lg-7"> check_circle </span>
              現貨商品：接單後3日內出貨
            </p>
            <p class="d-flex align-items-center text-primary mb-2 fs-8 fs-lg-7">
              <span class="material-icons me-1 fs-8 fs-lg-7"> check_circle </span>

              贈：進口拭銀布 防潮袋 品牌經典紙盒包裝
            </p>
          </div>
          <!-- 優惠加購 -->
          <div
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
                src="../assets/images/package-sm.jpg"
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
          <div class="col justify-content-center align-items-center flex-grow-1">
            <!-- 尺寸選擇 -->
            <select

              class="mb-4 form-select size-select"

              aria-label="Default select example"
              style="height: 55px"
            >
              <option selected>請選擇商品規格</option>
              <option value="1">女生款(小)</option>
              <option value="2">男生款(大)</option>
            </select>

            <div class="d-flex flex-nowrap justify-content-between">
              <!-- 數量選擇 -->

              <div class="d-flex border border-primary">
                <button type="button" class="btn">
                  <i class="bi bi-dash-lg fs-4 text-primary"></i>
                </button>
                <input
                  type="number"
                  class="border-0 text-center number-select"
                  min="1"
                  value="1"
                  readonly
                />
                <button type="button" class="btn">
                  <i class="bi bi-plus-lg fs-4 text-primary"></i>
                </button>
              </div>

              <button
                type="button"
                class="custom-btn custom-btn-next2 bg-primary text-white fw-medium py-4 px-10"
                @click="addToCart(productInfo.id, productInfo.qty)"
              >
                下一步：加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 下半部 -->
  <div class="container py-10">

    <!-- <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="50" class="mb-5">
      <h2 class="fs-lg-2 fw-medium">{{ productInfo.title }}</h2>
      <p class="text-primary">The Angel Love Cross</p>
    </div> -->

    <p
      class="mb-5 text-primary lh-lg"
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
        <p class="mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1">材質</p>
        <p class="lh-lg">925純銀</p>
      </div>
      <div
        class="d-flex flex-column align-items-center mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p class="mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1">尺寸</p>
        <p class="lh-lg">女生款 - 長1.5 寬1.15 厚0.3 公分</p>
        <p class="lh-lg">男生款 - 長2.0 寬1.4 厚0.35公分</p>
      </div>
      <div
        class="d-flex flex-column align-items-center mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p class="mb-1 px-1 display-6 border-start border-end border-1 border-dark lh-1">鍊長</p>
        <p class="lh-lg">女生款-16吋(約40公分)</p>
        <p class="lh-lg">男生款-18吋 (約45公分)</p>
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
      <!-- <div class="row w-100 w-lg-80 mx-auto ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/eu7bo9X8CAA?si=sejTvcciBg3SjSPQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div> -->
      <!-- 圖片區 -->
      <div class="row py-10 mb-30 w-lg-80 mx-auto">
        <template v-for="imgUrl in productInfo.imagesUrl" :key="productInfo.id">
          <div
            class="mb-3 col-md-6"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <img :src="imgUrl" alt="商品圖片" />
          </div>
        </template>
        <!-- <div class="mb-3 col-md-6" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
          <img src="../assets/images/product-3-2.jpg" alt="商品圖片" />
        </div>
        <div
          class="mb-3 col-md-6 col-lg-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div class="ratio ratio-1x1">
            <img src="../assets/images/product-3-4.jpg" class="object-fit-cover" alt="商品圖片" />
          </div>
        </div>
        <div
          class="mb-3 col-md-6 col-lg-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div class="ratio ratio-1x1">
            <img src="../assets/images/product-3-6.jpg" class="object-fit-cover" alt="商品圖片" />
          </div>
        </div>

        <div class="mb-3 col-lg-4" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
          <div class="ratio ratio-1x1">
            <img src="../assets/images/product-3-1.jpg" class="object-fit-cover" alt="商品圖片" />
          </div>
        </div> -->
      </div>

      <hr />
    </div>
    <div class="container mb-20">
      <h2 class="h4 text-primary mb-10 fw-bold">猜你也喜歡</h2>
      <ul class="row row-cols-2 row-cols-md-4 g-4 mb-20">
        <!-- 放相同分類隨機商品 -->
        <li class="col list-unstyled">
          <a
            href="#"
            class="d-flex flex-column product-item"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div class="product h-border position-relative" style="width: 100%; padding-top: 100%">
              <img
                src="../assets/images/product-2.jpg"
                class="card-img-top show position-absolute top-0 start-0 object-fit-cover"
                alt="鯨湛 - Brave | 拉利瑪海紋石純銀項鍊"
              />
              <img
                src="../assets/images/product-2-1.jpg"
                class="card-img-top change position-absolute top-0 start-0 object-fit-cover"
                alt="鯨湛 - Brave | 拉利瑪海紋石純銀項鍊"
              />
            </div>
            <div
              class="card-body text-start d-flex flex-column justify-content-between p-1 flex-grow-1"
            >
              <h5 class="card-title display-8 text-dark pt-2">
                鯨湛 - Brave | 拉利瑪海紋石純銀項鍊
              </h5>
              <p class="card-text display-8 text-primary py-2">NT$3,800</p>
            </div>
          </a>
        </li>
        <li class="col list-unstyled">
          <a
            href="#"
            class="d-flex flex-column product-item"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div class="product h-border position-relative" style="width: 100%; padding-top: 100%">
              <img
                src="../assets/images/product-3.jpg"
                class="card-img-top show position-absolute top-0 start-0 object-fit-cover"
                alt="天使之愛十字架|純銀＋可刻字"
              />
              <img
                src="../assets/images/product-3-1.jpg"
                class="card-img-top change position-absolute top-0 start-0 object-fit-cover"
                style="width: 100%; height: 100%"
                alt="天使之愛十字架|純銀＋可刻字"
              />
            </div>
            <span class="cus-tag">可客製</span>
            <div
              class="card-body text-start d-flex flex-column justify-content-between p-1 flex-grow-1"
            >
              <h5 class="card-title flex-grow-1 display-8 text-dark pt-2">
                天使之愛十字架項鍊 | 925純銀 / 可刻字
              </h5>
              <p class="card-text display-8 text-primary py-2">
                NT$1,980
                <span class="display-8 text-grey9F py-2 text-decoration-line-through">
                  NT$2,200
                </span>
              </p>
            </div>
          </a>
        </li>

        <li class="col list-unstyled">
          <a
            href="#"
            class="d-flex flex-column product-item"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div class="product h-border position-relative" style="width: 100%; padding-top: 100%">
              <img
                src="../assets/images/product-5.jpg"
                class="card-img-top show position-absolute top-0 start-0 object-fit-cover"
                alt="拿鐵｜拉花造型純銀項鍊"
              />
              <img
                src="../assets/images/product-5-1.jpg"
                class="card-img-top change position-absolute top-0 start-0 object-fit-cover"
                style="width: 100%; height: 100%"
                alt="拿鐵｜拉花造型純銀項鍊"
              />
            </div>
            <div
              class="card-body text-start d-flex flex-column justify-content-between p-1 flex-grow-1"
            >
              <h5 class="card-title flex-grow-1 display-8 text-dark pt-2">
                拿鐵拉花項鍊 | 925純銀 + 太陽石
              </h5>
              <p class="card-text display-8 text-primary py-2">NT$6,880</p>
            </div>
          </a>
        </li>
        <li class="col list-unstyled">
          <a
            href="#"
            class="d-flex flex-column product-item"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div class="product h-border position-relative" style="width: 100%; padding-top: 100%">
              <img
                src="../assets/images/product-6.jpg"
                class="card-img-top show position-absolute top-0 start-0 object-fit-cover"
                alt="日出訂製｜18K金鑽石男戒"
              />
              <img
                src="../assets/images/product-6-1.jpg"
                class="card-img-top change position-absolute top-0 start-0 object-fit-cover"
                style="width: 100%; height: 100%"
                alt="日出訂製｜18K金鑽石男戒"
              />
            </div>
            <span class="cus-tag">可客製</span>
            <div
              class="card-body text-start d-flex flex-column justify-content-between p-1 flex-grow-1"
            >
              <h5 class="card-title flex-grow-1 display-8 text-dark pt-2">
                日出訂製雙色鑽石男戒 | 18K金 + 鑽石 / 可刻字
              </h5>
              <p class="card-text display-8 text-primary py-2">NT$39,800</p>
            </div>
          </a>
        </li>
      </ul>
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
    return {}
  },
  components: { ProductSwiper },

  computed: {
    ...mapState(productStore, ['productInfo'])
  },
  methods: {
    ...mapActions(productStore, ['getProductInfo']),
    ...mapActions(cartStore, ['addToCart'])
  },
  mounted() {
    console.log(this.$route)
    this.getProductInfo(this.$route.params.id)
  }
}
</script>

<style scoped></style>

