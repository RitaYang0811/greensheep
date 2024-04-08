<template>
  <div class="container py-16">
    <h2 class="fs-6 text-cente fw-bold mb-1 text-primary">產品類別</h2>
    <h3 class="fs-2 mb-6 text-center text-primary">OUR COLLECTIONS</h3>
    <div class="row gy-5">
      <div class="col-lg-3 col-6">
        <RouterLink to="/products/項鍊%20PENDANT">
          <div
            class="card text-white border-0 bg-primary bg-gradient h-border"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <!-- 原照片class="show",要更換照片class="change" -->
            <img
              src="../assets/images/img-item-1.png"
              class="card-img img-fluid opacity-75"
              alt="pendant"
            />
            <div class="card-img-overlay d-flex flex-column-reverse align-items-start">
              <h5 class="card-title display-4 p-3">PENDANT</h5>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="col-lg-3 col-6">
        <RouterLink to="/products/戒指%20RING">
          <div
            class="card text-white border-0 bg-primary bg-gradient h-border"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img
              src="../assets/images/img-item-2.png"
              class="card-img img-fluid opacity-75"
              alt="ring"
            />
            <div class="card-img-overlay d-flex flex-column-reverse align-items-start">
              <h5 class="card-title display-4 p-3">RING</h5>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="col-lg-3 col-6">
        <RouterLink to="/products/耳環%20EARRINGS">
          <div
            class="card text-white border-0 bg-primary bg-gradient h-border"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="600"
          >
            <img
              src="../assets/images/img-item-3.png"
              class="card-img img-fluid opacity-75"
              alt="EARRINGS"
            />
            <div class="card-img-overlay d-flex flex-column-reverse align-items-start">
              <h5 class="card-title display-4 p-3">EARRINGS</h5>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="col-lg-3 col-6">
        <RouterLink to="/products/手鍊%20BRACELET">
          <div
            class="card text-white border-0 bg-primary bg-gradient h-border"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="700"
          >
            <img
              src="../assets/images/img-item-4.png"
              class="card-img img-fluid opacity-75"
              alt="BRACELET"
            />
            <div class="card-img-overlay d-flex flex-column-reverse align-items-start">
              <h5 class="card-title display-4 p-3">BRACELET</h5>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>

  <!-- 極致工藝 -->
  <div class="container py-16">
    <h2 class="fs-6 mb-1 text-center fw-bold text-primary">極致工藝與藝術追求</h2>
    <h3 class="fs-2 mb-6 text-center text-primary">ARTS AND CRAFTS</h3>
    <div
      class="craft-content d-flex justify-content-lg-between position-relative flex-lg-nowrap flex-wrap"
    >
      <img src="../assets/images/img-introduce.png" alt="introduce" class="img-fluid" />
      <div class="position-relative ms-auto mt-lg-0 mt-22">
        <img src="../assets/images/image-15.png" alt="image" class="img-fluid" />
        <!-- 桌機版定位:@greensheep_jewelry -->
        <p
          class="text-primary position-absolute display-7 text-vertical top-60 end-2 d-lg-block d-none"
        >
          @greensheep_jewelry
        </p>
        <!-- 手機版定位:@greensheep_jewelry -->
        <p
          class="text-primary position-absolute display-7 text-vertical top-20 end-15 d-lg-none d-block"
        >
          @greensheep_jewelry
        </p>
      </div>
      <!-- 桌機版定位:極致工藝 -->
      <div
        class="card d-lg-block d-none position-absolute py-lg-24 px-lg-12 px-4 py-8 border-radius-80 bg-primary bg-opacity-75 border-1 border-greyF7 backdrop-blur top-15 start-53"
        style="max-width: 536px"
      >
        <div class="card-body">
          <h5 class="card-title display-6 text-white fw-normal">
            Radiate Confidence, Blossom in Brilliance
          </h5>
          <p class="card-text py-4 fs-8 text-white" style="line-height: 200%">
            每一件珠寶都是一個故事的開端，他們不僅是獨特設計的結晶，更是佩戴者心靈的寄託。以傳統經典風格為基礎，注入優雅的細節和精湛工藝，綻放永恆時尚展現你的自信光芒。
          </p>
          <RouterLink
            to="/products/全部商品%20ALL"
            class="card-link border-bottom py-2 px-3 display-8 text-white custom-btn custom-btn-white shop-now"
            >SHOP NOW</RouterLink
          >
        </div>
      </div>
      <!-- 平板版定位:極致工藝 -->
      <div
        class="card d-sm-block d-none d-lg-none position-absolute px-md-8 py-md-16 px-4 py-8 border-radius-40 bg-primary bg-opacity-75 border-1 border-greyF7 backdrop-blur top-33 start-0"
        style="max-width: 400px"
      >
        <div class="card-body">
          <h5 class="card-title display-6 text-white">Radiate Confidence, Blossom in Brilliance</h5>
          <p class="card-text py-4 fs-8 text-white" style="line-height: 200%">
            每一件珠寶都是一個故事的開端，他們不僅是獨特設計的結晶，更是佩戴者心靈的寄託。以傳統經典風格為基礎，注入優雅的細節和精湛工藝，綻放永恆時尚展現你的自信光芒。
          </p>
          <RouterLink
            to="/products/全部商品%20ALL"
            class="card-link border-bottom py-2 px-3 display-8 text-white custom-btn custom-btn-white shop-now"
            >SHOP NOW</RouterLink
          >
        </div>
      </div>
      <!-- 手機版定位:極致工藝 -->
      <div
        class="card d-sm-none d-block position-absolute px-4 py-8 border-radius-40 bg-primary bg-opacity-75 border-1 border-greyF7 backdrop-blur top-27 start-0"
        style="max-width: 259px"
      >
        <div class="card-body">
          <h5 class="card-title display-6 text-white">Radiate Confidence, Blossom in Brilliance</h5>
          <p class="card-text py-4 fs-8 text-white" style="line-height: 200%">
            每一件珠寶都是一個故事的開端，他們不僅是獨特設計的結晶，更是佩戴者心靈的寄託。以傳統經典風格為基礎，注入優雅的細節和精湛工藝，綻放永恆時尚展現你的自信光芒。
          </p>
          <RouterLink
            to="/products/全部商品%20ALL"
            class="card-link border-bottom py-2 px-3 display-8 text-white custom-btn custom-btn-white shop-now"
            >SHOP NOW</RouterLink
          >
        </div>
      </div>
      <div class="position-absolute top-93 start-n2 d-lg-block d-none">
        <img src="../assets/images/Worlds Best Artistry.png" alt="best art" />
      </div>
    </div>
  </div>
  <!-- 熱賣商品 -->
  <!-- 電腦版 -->
  <div class="container-lg py-16 d-lg-block d-none">
    <div class="row">
      <div class="col-lg-3 col-12 d-flex flex-column justify-content-center">
        <h2 class="fs-6 text-primary fw-bold text-lg-start text-center">熱賣商品</h2>
        <h3 class="fs-2 mb-12 text-primary text-lg-start text-center">OUR BEST SELLERS</h3>
        <div class="position-relative me-auto d-lg-block d-none">
          <RouterLink
            to="/products/全部商品%20ALL"
            class="fs-8 py-2 px-3 text-start custom-btn custom-btn-secondary"
            >Discover More</RouterLink
          >
        </div>
      </div>

      <div class="col-lg-3">
        <RouterLink to="/products/detail/-NsVL3yywAfe5aYKsTVv">
          <div
            class="card border-0 bg-gradient h-border position-relative"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <div class="h-border position-relative" style="width: 100%; padding-top: 135%">
              <img
                src="../assets/images/img-prod-1.png"
                class="card-img-top show position-absolute top-0 start-0 object-fit-cover opacity-75"
                style="width: 100%; height: 100%"
                alt="波光淋漓925純銀耳環｜925純銀＋海水藍寶"
              />
              <img
                src="../assets/images/product-8.jpg"
                class="card-img-top change position-absolute top-0 start-0 object-fit-cover"
                style="width: 100%; height: 100%"
                alt="波光淋漓925純銀耳環｜925純銀＋海水藍寶"
              />
            </div>
            <div
              class="card-img-overlay d-flex flex-column justify-content-end p-5 align-items-lg-start"
            >
              <h5 class="card-title fs-6 mb-2 text-primary">波光粼粼</h5>
              <p class="card-text text-dark fs-7 mb-2 fw-bold">NT$ 4,500</p>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="col-lg-3">
        <RouterLink to="/products/detail/-NsV_Qdfr0Qw-4JYuvyL">
          <div
            class="card border-0 bg-gradient h-border"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <div class="h-border position-relative" style="width: 100%; padding-top: 135%">
              <img
                src="../assets/images/product-flower1.jpg"
                class="card-img-top show position-absolute top-0 start-0 object-fit-cover opacity-75"
                style="width: 100%; height: 100%"
                alt="梅花梅花幾月開 "
              />
              <img
                src="../assets/images/product-flower2.jpg"
                class="card-img-top change position-absolute top-0 start-0 object-fit-cover"
                style="width: 100%; height: 100%"
                alt="梅花梅花幾月開 "
              />
            </div>
            <div
              class="card-img-overlay d-flex flex-column justify-content-end p-5 align-items-lg-start"
            >
              <h5 class="card-title fs-6 mb-2 text-primary">梅花梅花幾月開</h5>
              <p class="card-text text-dark fs-7 mb-2 fw-bold">NT$ 1,280</p>
            </div>
          </div>
        </RouterLink>
      </div>
      <div class="col-lg-3">
        <RouterLink to="/products/detail/-NsUsi2n1gdOSF0I798e">
          <div
            class="card border-0 bg-gradient h-border"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="500"
          >
            <div class="h-border position-relative" style="width: 100%; padding-top: 135%">
              <img
                src="../assets/images/img-prod-3.png"
                class="card-img-top show position-absolute top-0 start-0 object-fit-cover opacity-75"
                style="width: 100%; height: 100%"
              />
              <img
                src="../assets/images/product-4.jpg"
                class="card-img-top change position-absolute top-0 start-0 object-fit-cover"
                style="width: 100%; height: 100%"
              />
            </div>
            <div
              class="card-img-overlay d-flex flex-column justify-content-end p-5 align-items-lg-start"
            >
              <h5 class="card-title mb-2 text-primary">星空之約白金對戒</h5>
              <p class="card-text text-dark mb-2 fw-bold">
                NT$ 88,880<span class="color-choose color-gold ms-3 mx-1"></span
                ><span class="color-choose color-silver"></span>
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- 手機版 -->
  <div class="wrap d-lg-none d-block">
    <div class="container mb-6">
      <h2 class="fs-6 text-primary text-center fw-bold">熱賣商品</h2>
      <h3 class="fs-2 mb-12 text-primary text-center">OUR BEST SELLERS</h3>
    </div>

    <div class="overflow-x-auto container-fluid">
      <div class="d-flex justify-content-between list-unstyled py-2" style="min-width: 992px">
        <RouterLink to="/products/detail/-NsVL3yywAfe5aYKsTVv">
          <div class="card text-white border-0 bg-primary bg-gradient h-border">
            <img src="../assets/images/img-prod-1.png" class="card-img opacity-75" alt="products" />
            <div
              class="card-img-overlay d-flex flex-column justify-content-end p-5 align-items-lg-start"
            >
              <h5 class="card-title fs-6 mb-2 text-dark">波光粼粼</h5>
              <p class="card-text text-dark fs-7 mb-2 fw-bold">NT$ 4,500</p>
              <p class="card-text fs-8 font-noto-serif text-dark">耳環 / 925純銀 / 海水藍寶</p>
            </div>
          </div>
        </RouterLink>

        <RouterLink to="/products/detail/-NsV1p_2gXiVpBHy2xu6">
          <div class="card text-white border-0 bg-primary bg-gradient h-border">
            <img src="../assets/images/img-prod-2.png" class="card-img opacity-75" alt="products" />
            <div
              class="card-img-overlay d-flex flex-column justify-content-end p-5 align-items-lg-start"
            >
              <h5 class="card-title fs-6 mb-2 text-dark">天使之愛十字架</h5>
              <p class="card-text text-dark fs-7 mb-2 fw-bold">NT$ 1,980</p>
              <p class="card-text fs-8 font-noto-serif text-dark">項鍊 / 925純銀</p>
            </div>
          </div>
        </RouterLink>

        <RouterLink to="/products/detail/-NsUsi2n1gdOSF0I798e">
          <div class="card text-white border-0 bg-primary bg-gradient h-border">
            <img src="../assets/images/img-prod-3.png" class="card-img opacity-75" alt="products" />
            <div
              class="card-img-overlay d-flex flex-column justify-content-end p-5 align-items-lg-start"
            >
              <h5 class="card-title mb-2 text-dark">星空之約白金對戒</h5>
              <p class="card-text text-dark mb-2 fw-bold">NT$ 88,880</p>
              <div>
                <span class="color-choose color-gold me-1"></span
                ><span class="color-choose color-silver"></span>
              </div>
              <p class="card-text fs-8 font-noto-serif text-dark">戒指 / 18K金 / 鑽石</p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>

    <div class="container">
      <div class="my-auto mt-6 mb-20">
        <RouterLink
          to="/products/全部商品%20ALL"
          class="fs-8 py-2 px-3 text-start custom-btn custom-btn-secondary"
          >Discover More</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import productStore from '@/stores/productStore'

import { mapActions } from 'pinia'
export default {
  data() {
    return {
      page: 1,
      currentCategory: ''
    }
  },
  methods: {
    ...mapActions(productStore, ['getFilterProducts']),
    changeCategory(category) {
      this.currentCategory = category
      this.getFilterProducts(this.headerCategory, this.page, 'timeN2O')
    }
  }
}
</script>

<style scoped>
.shop-now::after {
  content: 'SHOP NOW';
}

.shop-now:hover::after {
  color: #566b5a;
}
</style>
