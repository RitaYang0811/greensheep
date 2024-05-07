<template>
  <div class="home3">
    <!-- 客製化 -->
    <div class="container mb-16">
      <div class="row">
        <div class="col bg-cus">
          <div class="row pb-9 pb-lg-0 pt-15 pt-lg-30 position-relative">
            <img
              class="position-absolute w-100 top-0 start-0 cus-img-bg"
              src="@/assets/images/img_diy_bg.png"
            />
            <!-- 客製化介紹 -->
            <div class="cus-desc col-12 col-lg-4 order-lg-3 mb-6 mb-lg-0 px-12 text-lg-start">
              <div
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <h5 class="text-white fs-6 mb-1 ls-2">開始客製屬於您的產品</h5>
                <h3 class="text-white fs-2 mb-4 ls-1">CUSTOMIZE YOUR STYLE</h3>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <p class="text-light mb-1 fs-7 ls-2">2 個步驟創作你的專屬心意</p>
                <p class="text-light mb-4 fs-8 ls-2">Create Your Unique Elegance</p>
                <p class="text-decolight mb-4 ls-2">Step 1：選擇專屬寶石</p>
                <p class="text-decolight mb-4 ls-2">Step 2：輸入你想說的話</p>
              </div>
              <RouterLink
                to="/products/客製設計%20CUSTOMIZED"
                class="fs-8 py-2 px-3 text-start custom-btn custom-btn-secondary ls-2"
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="300"
                data-aos-once="true"
              >
                Start Now
              </RouterLink>
            </div>
            <!-- 客製化戒指 -->
            <div class="col-8 col-md-6 col-lg-4 position-relative">
              <img
                class="cus-img-font position-relative mb-7 d-none d-lg-inline-block"
                src="@/assets/images/img_diy_font.png"
                alt="handmadeJewelry"
              />
              <img
                class="cus-img-ring position-relative"
                src="@/assets/images/img-diy-left.png"
                alt="customRing"
              />
              <button
                type="button"
                class="cus-popover-btn cus-ring-popover-btn bg-transparent border-0 position-absolute"
                ref="ringPopoverBtn"
                data-bs-toggle="popover"
              >
                <img src="@/assets/images/point.png" alt="雷雕客製" />
              </button>
              <!-- popover -->
              <div class="d-none">
                <div ref="ringPopoverContent">
                  <p class="mb-3 text-dark">雷切刻字</p>
                  <div class="border d-flex align-items-center px-2 py-1 rounded-1">
                    <input
                      class="cus-popover-input border-0 ls-2"
                      type="text"
                      placeholder="hello world !"
                    />
                    <!-- 待修改路由，需加上 method: closePopover -->
                    <a>
                      <span class="material-icons text-secondary">send</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- 客製化項鍊 -->
            <div class="cus-img-necklace col-9 col-md-6 col-lg-4 ms-auto position-relative">
              <img
                class="base-image"
                src="@/assets/images/img-diy-center.png"
                alt="customNecklace"
              />
              <button
                type="button"
                class="cus-popover-btn cus-necklace-popover-btn bg-transparent border-0 position-absolute"
                ref="necklacePopoverBtn"
                data-bs-toggle="popover"
              >
                <img src="@/assets/images/point.png" alt="寶石客製化" />
              </button>
              <!-- popover -->
              <div class="d-none">
                <div ref="necklacePopoverContent">
                  <p class="mb-3 text-dark">選擇寶石</p>
                  <div class="d-flex gap-2">
                    <!-- 待修改路由，需加上 method: closePopover -->
                    <a @click.prevent="">
                      <img src="@/assets/images/stoneBox.png" alt="寶石 1" />
                    </a>
                    <a @click.prevent="">
                      <img src="@/assets/images/stoneBox1.png" alt="寶石 2" />
                    </a>
                    <a @click.prevent="">
                      <img src="@/assets/images/stoneBox2.png" alt="寶石 3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 為什麼選擇我們 -->
    <div class="container py-10 overflow-hidden">
      <p
        class="text-primary fs-6 mb-1 fw-bold ls-2"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        為什麼選擇我們
      </p>
      <h3
        class="fs-lg-2 fs-1 mb-12 text-primary ls-1"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
        data-aos-once="true"
      >
        WHY GREEN SHEEP HANDMADE JEWELRY?
      </h3>
      <ul class="row list-unstyled">
        <li
          class="col-lg-3 col-6 pb-4"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <img class="mb-3" src="@/assets/images/diamond.png" alt="最高品質保證" />
          <p class="text-dark mb-3 ls-2">最高品質保證</p>
          <p class="text-grey9F fs-8 lh-lg ls-2">
            品牌堅持以最高品質來製作每一件作品，所有作品均選用天然寶石與優質的金屬材料，確保每一件作品都散發絕佳光彩。
          </p>
        </li>
        <li
          class="col-lg-3 col-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <img class="mb-3" src="@/assets/images/car.png" alt="全球配送" />
          <p class="text-dark mb-3 ls-2">全球配送</p>
          <p class="text-grey9F fs-8 lh-lg ls-2">
            我們樂於將綠羊作品傳遞至世界各地，不論您身在何處，我們提供全球配送服務，確保您能夠輕鬆地有我們的珠寶飾品。
          </p>
        </li>
        <li
          class="col-lg-3 col-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="400"
          data-aos-once="true"
        >
          <img class="mb-3" src="@/assets/images/return.png" alt="完善退換貨機制" />
          <p class="text-dark mb-3 ls-2">完善退換貨機制</p>
          <p class="text-grey9F fs-8 lh-lg ls-2">
            我們尊重每一位客戶的選擇，提供完善退換貨機制，若您對購買的作品(客製商品除外)有任何疑慮或不滿意，請隨時與我們聯繫，我們將竭誠為您解決。
          </p>
        </li>
        <li
          class="col-lg-3 col-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <img class="mb-3" src="@/assets/images/drew.png" alt="原創設計手工製作" />
          <p class="text-dark mb-3 ls-2">原創設計手工製作</p>
          <p class="text-grey9F fs-8 lh-lg ls-2">
            綠羊品牌的每一件作品都是由專業的設計師原創設計，並由台灣資深金工師傅手工製作。這使得每一件作品都散發著原創的獨特風格，讓您感受到我們的用心與品質保證。
          </p>
        </li>
      </ul>
    </div>
    <!-- 品牌故事區 -->
    <div class="bg-image2 mt-9 text-white py-24 position-relative d-none d-lg-inline-block w-100">
      <h3
        class="fs-2 mt-21 mb-10 text-white ls-1"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-once="true"
      >
        EMBRACE YOUR INNER GREEN SHEEP
      </h3>
      <img
        style="top: 45%; left: 28.7%"
        class="position-absolute translate-middle zindex-sticky"
        src="@/assets/images/img_mark.png"
        alt="img_mark"
      />
      <p
        class="col-5 fs-6 lh-lg mx-auto ls-2"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="100"
        data-aos-once="true"
      >
        綠羊 GreenSheep handmade jewelry
        是獨特而優雅的。他代表著對自然的敬畏，彷彿迷人的綠洲，帶給人們內心的平靜與柔和。每一位佩戴者都像一隻羊，柔軟而堅定，他們不害怕與眾不同，因為他們知道自己是最優雅的綠羊。
      </p>
    </div>
    <div class="bg-image2-mobile mt-9 text-white py-24 position-relative d-inline-block d-lg-none">
      <h3 class="fs-1 mt-5 mb-10 text-white ls-1">EMBRACE YOUR INNER GREEN SHEEP</h3>
      <img
        style="top: 41%; left: 16%"
        class="position-absolute translate-middle zindex-sticky"
        src="@/assets/images/img_mark.png"
        alt="img_mark"
      />
      <p class="col-11 fs-6 lh-lg mx-auto ls-2">
        綠羊 GreenSheep handmade jewelry
        是獨特而優雅的。他代表著對自然的敬畏，彷彿迷人的綠洲，帶給人們內心的平靜與柔和。每一位佩戴者都像一隻羊，柔軟而堅定，他們不害怕與眾不同，因為他們知道自己是最優雅的綠羊。
      </p>
    </div>
  </div>
</template>
<script>
import Popover from 'bootstrap/js/dist/popover'

export default {
  data() {
    return {
      popoverRing: '',
      popoverNecklace: ''
    }
  },
  methods: {
    closePopover() {
      this.popoverRing.hide()
      this.popoverNecklace.hide()
    }
  },
  mounted() {
    this.popoverRing = new Popover(this.$refs.ringPopoverBtn, {
      container: '.home3', // 指定要在哪個位置渲染
      html: true,
      content: this.$refs.ringPopoverContent,
      placement: 'top'
    })
    this.popoverNecklace = new Popover(this.$refs.necklacePopoverBtn, {
      container: '.home3',
      html: true,
      content: this.$refs.necklacePopoverContent,
      placement: 'top'
    })
  }
}
</script>
