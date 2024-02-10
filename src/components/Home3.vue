<script>
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
let cusRingPopover
let popoverRing
let cusNecklacePopover
let popoverNecklace

export default {
  data() {
    return {
      text: '文字'
    }
  },
  mounted() {
    cusRingPopover = document.querySelector('.cus-ring-popover-btn')
    popoverRing = new bootstrap.Popover(cusRingPopover, {
      // title: '雷切刻字',
      html: true,
      sanitize: false, // 預設 ture 會擋掉部分 HTML 標籤，例如 input
      content: `
      <div class="p-2">
        <p class="mb-4">雷切刻字</p>
        <div class="border d-flex align-items-center px-2 py-1">
          <input class="cus-popover-input border-0 ls-2" type="text" placeholder="hello world !" />
          <a href="##">
            <span class="material-icons text-secondary">send</span>
          </a>
        </div>
      </div>
      `,
      placement: 'top'
    })
    cusNecklacePopover = document.querySelector('.cus-necklace-popover-btn')
    popoverNecklace = new bootstrap.Popover(cusNecklacePopover, {
      // title: '選擇寶石',
      html: true,
      sanitize: false,
      content: `
      <div class="p-2">
        <p class="mb-4">選擇寶石</p>
        <div class="d-flex gap-2">
          <a href="##">
            <img src="../assets/images/stoneBox.png" alt="寶石 1">
          </a>
          <a href="##">
            <img src="../assets/images/stoneBox1.png" alt="寶石 2">
          </a>
          <a href="##">
            <img src="../assets/images/stoneBox2.png" alt="寶石 3">
          </a>
        </div>
      </div>
      `,
      placement: 'top'
    })
  }
}
</script>

<template>
  <!-- 客製化 -->
  <div class="container mb-16">
    <div class="row">
      <div class="col bg-cus">
        <div class="row pb-9 pb-lg-0 pt-15 pt-lg-30 position-relative">
          <img
            class="position-absolute w-100 top-0 start-0 cus-img-bg"
            src="../assets/images/img_diy_bg.png"
          />
          <div class="cus-desc col-12 col-lg-4 order-lg-3 mb-6 mb-lg-0 px-12 text-lg-start">
            <h5 class="text-white fs-6 mb-1 ls-2">開始客製屬於您的產品</h5>
            <h3 class="text-white fs-2 mb-4 ls-1">CUSTOMIZE YOUR STYLE</h3>
            <p class="text-light mb-1 fs-7 ls-2">2 個步驟創作你的專屬心意</p>
            <p class="text-light mb-4 fs-8 ls-2">Create Your Unique Elegance</p>
            <p class="text-decolight mb-4 ls-2">Step 1：選擇專屬寶石</p>
            <p class="text-decolight mb-4 ls-2">Step 2：輸入你想說的話</p>
            <a href="#" class="fs-8 py-2 px-3 text-start custom-btn custom-btn-secondary ls-2"
              >Start Now</a
            >
          </div>
          <div class="col-8 col-md-6 col-lg-4 position-relative">
            <img
              class="cus-img-font position-relative mb-7 d-none d-lg-inline-block"
              src="../assets/images/img_diy_font.png"
              alt="handmadeJewelry"
            />
            <img
              class="cus-img-ring position-relative"
              src="../assets/images/img-diy-left.png"
              alt="customRing"
            />
            <button
              type="button"
              class="cus-popover-btn cus-ring-popover-btn bg-transparent border-0 position-absolute"
              data-bs-toggle="popover"
            >
              <img src="../assets/images/point.png" alt="雷雕客製" />
            </button>
          </div>
          <div class="cus-img-necklace col-9 col-md-6 col-lg-4 ms-auto position-relative">
            <img
              class="base-image"
              src="../assets/images/img-diy-center.png"
              alt="customNecklace"
            />
            <button
              type="button"
              class="cus-popover-btn cus-necklace-popover-btn bg-transparent border-0 position-absolute"
              data-bs-toggle="popover"
              data-bs-placement="top"
              data-bs-content="這是一個 Popover 的範例"
            >
              <img src="../assets/images/point.png" alt="寶石客製化" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 為什麼選擇我們 -->
  <div class="container py-10 overflow-hidden">
    <p class="text-primary fs-6 mb-1 fw-bold ls-2">為什麼選擇我們</p>
    <h3 class="fs-lg-2 fs-1 mb-12 text-primary ls-1">WHY GREEN SHEEP HANDMADE JEWELRY?</h3>
    <div class="px-md-6">
      <ul class="row list-unstyled">
        <li class="col-lg-3 col-6 pb-4">
          <img class="mb-3" src="../assets/images/diamond.png" alt="最高品質保證" />
          <p class="text-dark mb-3 ls-2">最高品質保證</p>
          <p class="text-grey9F fs-8 lh-lg ls-2">
            品牌堅持以最高品質來製作每一件作品，所有作品均選用天然寶石與優質的金屬材料，確保每一件作品都散發絕佳光彩。
          </p>
        </li>
        <li class="col-lg-3 col-6">
          <img class="mb-3" src="../assets/images/car.png" alt="全球配送" />
          <p class="text-dark mb-3 ls-2">全球配送</p>
          <p class="text-grey9F fs-8 lh-lg ls-2">
            我們樂於將綠羊作品傳遞至世界各地，不論您身在何處，我們提供全球配送服務，確保您能夠輕鬆地有我們的珠寶飾品。
          </p>
        </li>
        <li class="col-lg-3 col-6">
          <img class="mb-3" src="../assets/images/return.png" alt="完善退換貨機制" />
          <p class="text-dark mb-3 ls-2">完善退換貨機制</p>
          <p class="text-grey9F fs-8 lh-lg ls-2">
            我們尊重每一位客戶的選擇，提供完善退換貨機制，若您對購買的作品(客製商品除外)有任何疑慮或不滿意，請隨時與我們聯繫，我們將竭誠為您解決。
          </p>
        </li>
        <li class="col-lg-3 col-6">
          <img class="mb-3" src="../assets/images/drew.png" alt="原創設計手工製作" />
          <p class="text-dark mb-3 ls-2">原創設計手工製作</p>
          <p class="text-grey9F fs-8 lh-lg ls-2">
            綠羊品牌的每一件作品都是由專業的設計師原創設計，並由台灣資深金工師傅手工製作。這使得每一件作品都散發著原創的獨特風格，讓您感受到我們的用心與品質保證。
          </p>
        </li>
      </ul>
    </div>
  </div>
  <!-- 品牌故事區 -->
  <div class="bg-image2 mt-9 text-white py-24 position-relative d-none d-lg-inline-block">
    <h3 class="fs-2 mt-21 mb-10 text-white ls-1">EMBRACE YOUR INNER GREEN SHEEP</h3>
    <img
      style="top: 45%; left: 28.7%"
      class="position-absolute translate-middle zindex-sticky"
      src="../assets/images/img_mark.png"
      alt="img_mark"
    />
    <p class="col-5 fs-6 lh-lg mx-auto ls-2">
      綠羊 GreenSheep handmade jewelry
      是獨特而優雅的。他代表著對自然的敬畏，彷彿迷人的綠洲，帶給人們內心的平靜與柔和。每一位佩戴者都像一隻羊，柔軟而堅定，他們不害怕與眾不同，因為他們知道自己是最優雅的綠羊。
    </p>
  </div>

  <div class="bg-image2-mobile mt-9 text-white py-24 position-relative d-inline-block d-lg-none">
    <h3 class="fs-1 mt-5 mb-10 text-white ls-1">EMBRACE YOUR INNER GREEN SHEEP</h3>
    <img
      style="top: 41%; left: 16%"
      class="position-absolute translate-middle zindex-sticky"
      src="../assets/images/img_mark.png"
      alt="img_mark"
    />
    <p class="col-11 fs-6 lh-lg mx-auto ls-2">
      綠羊 GreenSheep handmade jewelry
      是獨特而優雅的。他代表著對自然的敬畏，彷彿迷人的綠洲，帶給人們內心的平靜與柔和。每一位佩戴者都像一隻羊，柔軟而堅定，他們不害怕與眾不同，因為他們知道自己是最優雅的綠羊。
    </p>
  </div>
</template>

<style scoped lang="scss">
@import 'bootstrap/scss/bootstrap';

// 客製化區塊
.cus {
  &-img {
    &-bg {
      height: 100%;
      border-radius: 40px 0px 40px 0px;
      object-fit: cover;
      z-index: -1;
      @include media-breakpoint-up(lg) {
        height: 100%;
        border-radius: 80px 0px 80px 0px;
      }
    }
    &-ring {
      left: 12px;
      @include media-breakpoint-up(md) {
        z-index: 2;
        left: 24px;
        top: 48px;
      }
      @include media-breakpoint-up(lg) {
        left: 64px;
        top: 0px;
      }
    }
    &-font {
      z-index: 1;
      top: -28px;
      left: 148px;
    }
    &-necklace {
      z-index: 1;
      right: 12px;
      top: -12px;
      @include media-breakpoint-up(md) {
        z-index: 0;
      }
      @include media-breakpoint-up(lg) {
        right: 0;
        top: 0;
      }
    }
  }
  &-desc {
    padding-top: 0;
    @include media-breakpoint-up(xxl) {
      padding-top: 82.5px;
    }
  }
  &-popover-btn {
    animation: scale 1s ease-out infinite alternate-reverse;
  }
  &-ring-popover-btn {
    z-index: 2;
    top: 40%;
    left: 47%;
  }
  &-necklace-popover-btn {
    top: 62%;
    left: 48%;
  }
}
.cus-popover-input:focus-visible {
  outline: 1px solid red;
}

@keyframes scale {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}

// 品牌故事區塊
.bg-image2 {
  background-image: url('../assets/images/img-scroll-view-bg.jpg'); /* 背景圖片*/
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 562px; /* 可依需求調整高度 */
}

.bg-image3 {
  background-image: url('../assets/images/img-scroll-view-bg.jpg'); /* 背景圖片*/
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.bg-image2-mobile {
  background-image: url('../assets/images/img-scrollView-m.png'); /* 手機板背景圖片*/
  max-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  /* 可依需求調整高度 */
}
</style>
