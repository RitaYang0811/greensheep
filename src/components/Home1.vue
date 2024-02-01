<template>
  <!-- 第一部分：依依Rita製作 -->
  <!-- 背景Banner區域 -->
  <div class="bg-banner position-relative">
    <!-- 首圖背景色塊 -->
    <div class="row">
      <!-- 左側色塊 -->
      <div class="bg-left-stripe col-6 position-absolute bg-size-cover d-none d-md-block">
        <img src="../assets/images/img-banner-left-stripe.png" alt="背景左側色塊" />
      </div>
      <!-- 右側色塊 -->
      <div class="bg-right-stripe col-6 position-absolute bg-size-cover d-none d-md-block">
        <img src="../assets/images/img-banner-right-stripe.png" alt="" />
      </div>
    </div>
    <!-- 首圖背景圖片 -->
    <div class="container" style="margin-top: -64px">
      <div class="row justify-content-between position-relative">
        <!-- 首圖背景左側圖片 -->
        <div class="bg-left-pic col-lg-2 position-absolute bg-size-cover d-none d-lg-block">
          <img src="../assets/images/img-banner-left.png" alt="背景左側圖片" />
        </div>
        <!-- 首圖桌面背景主要圖片 -->
        <div
          class="bg-main-pic col-6 col-md-9 col-lg-6 position-absolute bg-size-cover start-50 translate-middle-x d-none d-md-block"
        >
          <img src="../assets/images/img-banner-main.png" alt="背景主要圖片" />
        </div>
        <!-- 首圖背景右側圖片 -->
        <div
          class="bg-right-pic col-3 col-md-4 col-lg-3 position-absolute bg-size-cover d-none d-md-block align-items-end"
        >
          <span class="banner-deco-dot d-md-block ms-auto"></span>
          <span class="d-md-block font-nosc-playfair position-relative text-primary mb-4 text-end"
            >Best Selling Design Jewelry</span
          >
          <img
            class="d-block ms-auto"
            src="../assets/images/img-banner-right.png"
            alt="背景右側圖片"
          />
        </div>
        <!-- 手機版：背景主要圖片 -->
        <div class="bg-main-pic-mobile text-center d-md-none gx-0">
          <!-- <img src="../assets/images/img-banner-mobile.png" alt="背景主要圖片" /> -->
          <div class="container">
            <!-- 手機版：標題後半圓弧型 -->
            <div class="bg-banner-blur position-absolute d-md-none"></div>
            <!-- 手機版：Banner標題＋社群icon -->
            <div
              class="banner-content row justify-content-between align-items-end mb-8"
              style="padding-top: 543px; padding-bottom: 40px"
            >
              <div
                class="col-lg-5 d-flex flex-column justify-content-start align-items-start gap-5"
              >
                <h2 class="banner-title h1 text-start text-dark z-1">
                  <div data-aos="fade-right" data-aos-duration="2000">Discover your<br /></div>
                  <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400">
                    Unique Elegance
                  </div>
                </h2>
                <h2
                  class="h4 text-primary z-1"
                  data-aos="fade-right"
                  data-aos-duration="1300"
                  data-aos-offset="50"
                >
                  在珠寶中尋覓你獨特優雅之美
                </h2>
                <button
                  class="bg-transparent border-0"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  data-aos-offset="50"
                >
                  <a class="custom-btn custom-btn-primary" href="2-1.productPage.html">SHOP NOW</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 標題後半圓弧型 -->
      <div class="bg-banner-blur position-absolute d-none d-md-flex"></div>
      <!-- Banner標題＋社群icon -->
      <div class="banner-content row justify-content-between align-items-end mb-8 d-none d-md-flex">
        <div class="col-lg-5 d-flex flex-column justify-content-start align-items-start gap-5">
          <h2 class="banner-title h1 text-start text-dark">
            <div data-aos="fade-right" data-aos-duration="2000">Discover your</div>
            <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="400">
              Unique Elegance
            </div>
          </h2>
          <h2
            class="h4 text-primary"
            data-aos="fade-right"
            data-aos-duration="2300"
            data-aos-delay="450"
            data-aos-offset="50"
          >
            在珠寶中尋覓你獨特優雅之美
          </h2>
          <button
            class="bg-transparent border-0"
            data-aos="fade-right"
            data-aos-duration="2500"
            data-aos-delay="500"
            data-aos-offset="50"
          >
            <a class="custom-btn custom-btn-primary" href="2-1.productPage.html">SHOP NOW</a>
          </button>
        </div>
        <!-- 社群icon -->
        <div
          class="banner-icon col-lg-6 d-none d-lg-flex justify-content-end border-bottom border-greyD4 z-1"
        >
          <a href="#" class="mb-1">
            <img src="./icons/line-green.svg" alt="line-icon" />
          </a>
          <a href="#" class="mb-1">
            <img src="./icons/fb-green.svg" alt="fb-icon" />
          </a>
          <a href="#" class="mb-1">
            <img src="./icons/ig-green.svg" alt="ig-icon" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- 品牌故事 -->
  <div class="container">
    <div class="about-me row position-relative">
      <h4
        class="h6 fw-bold font-noto-serif text-center col-lg-6 mb-6 position-absolute top-50 start-50 translate-middle d-none d-lg-block"
      >
        在一個充滿無盡想像的世界中，
        <br />
        綠羊 GreenSheep handmade jewelry
        <br class="d-lg-none" />悄然誕生。
      </h4>
      <div class="col-lg-6 mx-auto mt-20 mb-6 mt-lg-100 mb-lg-12">
        <h4 class="h6 fw-bold font-noto-serif text-center col-lg-6 mb-6 d-block d-lg-none z-3">
          在一個充滿無盡想像的世界中，
          <br />
          綠羊 GreenSheep handmade jewelry
          <br />悄然誕生。
        </h4>
        <p class="fs-8 text-dark lh-lg font-noto-serif mb-6 z-3">
          綠羊 GreenSheep
          與潮流無關，他獨樹一幟，我們創造屬於每位佩戴者獨特故事與風采的珠寶，就像每一顆寶石都是無可取代的珍寶，蘊含著原創的設計，閃耀著自信與優雅。我們希望透過這些珠寶，讓每一位佩戴者感受到自身的獨特與美麗，成為這個世界上最獨一無二的存在。
        </p>
        <!-- 品牌精神 -->
        <div class="row justify-content-center z-0 mb-6">
          <span class="col-5 col-lg-4 deco-spin position-relative">
            <img class="deco-circle" src="../assets/images/img-about-font-bg.svg" alt="裝飾圈圈" />

            <div class="position-absolute top-50 start-50 translate-middle">
              <span class="h6 mb-2 opacity-75 d-flex flex-column">自信</span>
              <span class="h5">CONFIDENCE</span>
            </div>
          </span>
          <span class="col-5 col-lg-4 deco-spin position-relative">
            <img class="deco-circle" src="../assets/images/img-about-font-bg.svg" alt="裝飾圈圈" />

            <div class="position-absolute top-50 start-50 translate-middle">
              <span class="h6 mb-2 opacity-75 d-flex flex-column">獨特</span>
              <span class="h5">UNIQUE</span>
            </div>
          </span>
          <span class="col-5 col-lg-4 deco-spin position-relative">
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
          <a class="custom-btn custom-btn-secondary" href="4-1.Story.html">My Story</a>
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
      <div>
        <!-- <img
        class="bg-long-stripe position-absolute bg-size-cover d-none d-lg-block z-0"
        src="../assets/images/img-about-2.png"
        alt="左邊長條背景"
      /> -->
      </div>
      <!-- 關於品牌左邊圖片 -->
      <div
        class="bg-image-left position-absolute bg-size-cover d-none d-lg-block"
        data-aos="fade-right"
        data-aos-duration="2000"
      ></div>
      <!-- 關於品牌右邊方形背景 -->
      <div class="bg-square-stripe position-absolute bg-size-cover d-none d-lg-block"></div>
      <!-- 關於品牌右邊圖片 -->
      <div
        class="bg-image-right position-absolute bg-size-cover d-none d-lg-block"
        data-aos="fade-left"
        data-aos-duration="2000"
      ></div>
    </div>
  </div>
</template>

<script setup lang="js" name="Home1"></script>

<style scoped lang="scss">
.bg-left-stripe {
  top: 0px;
  left: 110px;
  z-index: -3;
}
// 右側色塊
.bg-right-stripe {
  top: 0px;
  right: -72px;
  z-index: -3;
}
</style>
