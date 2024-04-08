<template>
  <div class="main-banner">
    <img src="@/assets/images/mainBanner.png" alt="mainBanner" class="d-none d-lg-block" />
  </div>

  <div class="main-banner">
    <img
      src="@/assets/images/mainBannerSm.png"
      alt="mainBanner"
      class="d-block d-lg-none w-100 object-fit-cover"
    />
  </div>

  <div class="container">
    <div class="bg-banner-blur d-none d-md-flex"></div>
    <div class="d-flex justify-content-between">
      <!-- Banner標題 -->
      <div class="banner-content row justify-content-between align-items-end">
        <div class="d-flex flex-column justify-content-start align-items-start gap-5">
          <h2 class="banner-title h1 text-start text-dark z-1">
            <div
              data-aos-delay="300"
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              Discover your
              <br />

              Unique Elegance
            </div>
          </h2>

          <button
            class="bg-transparent border-0"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-offset="50"
            data-aos-once="true"
          >
            <RouterLink
              to="/products/全部商品%20ALL"
              class="custom-btn custom-btn-primary shop-now cursor-pointer"
              >SHOP NOW</RouterLink
            >
          </button>
        </div>
      </div>
      <!-- 社群icon -->
      <div
        class="banner-icon w-60 z-1 d-none d-lg-flex justify-content-end border-bottom border-greyD4"
      >
        <a href="https://lin.ee/bYROr08" target="_blank" class="mb-1">
          <img src="./icons/line-icon.svg" alt="line-icon" />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100071826680344&mibextid=opq0tG"
          class="mb-1"
          target="_blank"
        >
          <img src="./icons/fb-icon.svg" alt="fb-icon" />
        </a>
        <a
          href="https://www.instagram.com/greensheep_jewelry?igsh=MWNkcjd0azZud3JheQ%3D%3D&utm_source=qr"
          class="mb-1"
          target="_blank"
        >
          <img src="./icons/ig-icon.svg" alt="ig-icon" />
        </a>
      </div>
    </div>
  </div>

  <!-- 品牌故事 -->
  <div class="container">
    <div class="about-me row position-relative">
      <div class="col-lg-6 mx-auto mt-45 mb-6 mt-lg-100 mb-lg-12">
        <h4 class="about-me-title h6 fw-bold font-noto-serif text-center col-md-6 mb-6 z-3 w-100">
          在一個充滿無盡想像的世界中，
          <br />
          綠羊 GreenSheep handmade jewelry
          <br class="d-lg-none" />悄然誕生。
        </h4>

        <p class="about-me-content text-dark lh-lg font-noto-serif mb-6 z-3">
          綠羊 GreenSheep
          與潮流無關，他獨樹一幟，我們創造屬於每位佩戴者獨特故事與風采的珠寶，就像每一顆寶石都是無可取代的珍寶，蘊含著原創的設計，閃耀著自信與優雅。我們希望透過這些珠寶，讓每一位佩戴者感受到自身的獨特與美麗，成為這個世界上最獨一無二的存在。
        </p>
        <!-- 品牌精神 -->
        <div class="about-me-spirit row justify-content-center z-0 mb-6">
          <span class="col-5 col-md-4 deco-spin position-relative">
            <img class="deco-circle" src="../assets/images/img-about-font-bg.svg" alt="裝飾圈圈" />

            <div class="position-absolute top-50 start-50 translate-middle">
              <span class="h6 mb-2 opacity-75 d-flex flex-column">自信</span>
              <span class="h5">CONFIDENCE</span>
            </div>
          </span>
          <span class="col-5 col-md-4 deco-spin position-relative">
            <img class="deco-circle" src="../assets/images/img-about-font-bg.svg" alt="裝飾圈圈" />

            <div class="position-absolute top-50 start-50 translate-middle">
              <span class="h6 mb-2 opacity-75 d-flex flex-column">獨特</span>
              <span class="h5">UNIQUE</span>
            </div>
          </span>
          <span class="col-5 col-md-4 deco-spin position-relative">
            <img class="deco-circle" src="../assets/images/img-about-font-bg.svg" alt="裝飾圈圈" />

            <div class="position-absolute top-50 start-50 translate-middle">
              <span class="h6 mb-2 opacity-75 d-flex flex-column">優雅</span>
              <span class="h5">ELEGANT</span>
            </div>
          </span>
        </div>

        <button
          class="bg-transparent border-0 mx-auto d-lg-none"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="50"
        >
          <RouterLink to="/story" class="custom-btn custom-btn-secondary">My Story</RouterLink>
        </button>
      </div>

      <!-- 金羊裝飾 -->
      <div>
        <img
          class="d-none d-lg-block position-absolute bottom-0 end-10"
          src="../assets/images/GreenSheep.png"
          alt="綠羊裝飾"
          style="width: 155px; height: auto"
        />
      </div>
      <!-- 關於品牌左邊長條背景 -->
      <div class="bg-long-stripe d-none d-lg-block"></div>
      <!-- 關於品牌左邊圖片 -->
      <div
        class="bg-image-left d-none d-lg-block"
        data-aos="fade-right"
        data-aos-duration="2000"
      ></div>
      <!-- 關於品牌右邊方形背景 -->
      <div class="bg-square-stripe d-none bg-size-cover d-lg-block"></div>

      <!-- 關於品牌右邊圖片 -->
      <div
        class="bg-image-right d-none d-lg-block"
        data-aos="fade-left"
        data-aos-duration="2000"
      ></div>
    </div>
  </div>
</template>

<script setup lang="js" name="Home1"></script>

<style scoped lang="scss">
.shop-now::after {
  content: 'SHOP NOW';
}
.shop-now:hover::after {
  color: #566b5a;
}
</style>
