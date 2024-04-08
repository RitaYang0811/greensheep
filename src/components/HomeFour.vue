<template>
  <!-- 第四部分：柯基Jim製作 -->
  <!-- 文章專欄 -->
  <div class="container-lg py-10 py-lg-16">
    <div class="py-lg-10 d-lg-flex test-one">
      <!-- article top&left -->

      <div class="d-flex justify-content-center text-white mb-6 me-lg-6">
        <div class="lt-card-img-box white-border">
          <img src="../assets/images/img-person.png" class="lt-card-img" alt="文章圖片" />
          <div class="d-flex flex-column justify-content-end align-items-start ps-9 pb-9">
            <p class="position-absolute"># News from GreenSheep</p>
          </div>
        </div>
      </div>

      <!-- article bottom&right -->
      <ul class="list-unstyled">
        <div class="row justify-content-center gx-4 mb-4 mb-lg-6">
          <!-- 第一個 -->
          <li class="article-br col-6">
            <RouterLink to="/articles/-NsapKpr3a4oeIp8VD3d">
              <!-- :src="pinnedArticle[0].image" -->
              <div class="card border-0 text-white">
                <img src="../assets/images/img-article-1.png" class="card-img" alt="文章圖片" />
                <div
                  class="card-img-overlay d-flex flex-column justify-content-end px-4 pb-4 px-lg-5 pb-lg-5"
                >
                  <p class="card-text text-start">珠寶背後的故事：打開珠寶盒的奇幻世界</p>
                </div>
              </div>
            </RouterLink>
          </li>
          <!-- 第二個 -->
          <li class="article-br col-6">
            <RouterLink to="/articles/-NsEamklWofTAq5VVgLV">
              <div class="card border-0 text-white">
                <img src="../assets/images/img-article-2.png" class="card-img" alt="文章圖片" />
                <div
                  class="card-img-overlay d-flex flex-column justify-content-end px-4 pb-4 px-lg-5 pb-lg-5"
                >
                  <p class="card-text text-start">探索珠寶背後的神秘力量！</p>
                </div>
              </div>
            </RouterLink>
          </li>
        </div>
        <div class="row gx-4">
          <!-- 第三個 -->
          <li class="article-br col-6">
            <RouterLink to="/articles/-NsE_soLJU6GxiS8uBnl">
              <div class="card border-0 text-white">
                <img src="../assets/images/img-article-3.png" class="card-img" alt="文章圖片" />
                <div
                  class="card-img-overlay d-flex flex-column justify-content-end align-items-start px-4 pb-4 px-lg-5 pb-lg-5"
                >
                  <p class="card-text text-start">讓珠寶成為你的能量與活力</p>
                </div>
              </div>
            </RouterLink>
          </li>
          <!-- 第四個 -->
          <li class="col-6">
            <RouterLink to="/articles">
              <div
                class="d-flex justify-content-center align-items-center position-relative more-content"
              >
                <div class="position-absolute more-content-bg">
                  <img
                    src="../assets/images/img-about-font-bg.svg"
                    alt="背景圖片"
                    class="more-content-img"
                  />
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center gap-3">
                  <img
                    src="../assets/images/logo-green.svg"
                    alt="綠色logo"
                    class="more-content-logo"
                  />
                  <p class="text-primary more-content-text">更多文章</p>
                </div>
                <RouterLink
                  to="/articles"
                  class="position-absolute fs-8 py-2 px-3 text-start custom-btn custom-btn-secondary"
                  >Discover More</RouterLink
                >
              </div>
            </RouterLink>
          </li>
        </div>
      </ul>
    </div>
  </div>
  <!-- 客戶好評 -->
  <div class="container-lg pt-10 pb-30 py-lg-16">
    <div>
      <!-- 感謝標語 -->
      <div class="custom-title mb-6">
        <p class="text-primary mb-1 fw-bold">感謝客戶支持</p>
        <h2 class="fs-2">thank you</h2>
      </div>
      <!-- 客戶評價 -->
      <ul class="row list-unstyled py-5 mb-6 py-lg-10">
        <li class="mb-4 col-md-3 mb-lg-0">
          <RouterLink to="/products/detail/-NuyUXYNGf3zWupcJLAh">
            <div class="custom-card">
              <div class="custom-img-box">
                <img src="../assets/images/img-evaluate-1.png" alt="客戶評價圖片" />
              </div>
              <!-- 評論 -->
              <div class="custom-content">
                <div class="d-flex mb-2">
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <p class="display-8 text-grey66">5.0</p>
                </div>
                <p class="mb-2 text-start text-dark">
                  身為貓奴，第一眼就愛上這個貓咪耳環，作品很立體也很有份量，不管是毛流還是眼神都非常細緻，是很愉快的購物體驗。
                </p>
                <div class="d-flex mb-2">
                  <p class="me-2 pe-2 text-start text-dark grey-border">耳環</p>
                  <p class="text-start text-dark">貓咪黑白配</p>
                </div>
                <p class="text-start text-dark">Rita Yang</p>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="mb-4 col-md-3 mb-lg-0">
          <RouterLink to="/products/detail/-NsVMjmDh6a1TkDxzAM5">
            <div class="custom-card">
              <div class="custom-img-box">
                <img src="../assets/images/img-evaluate-2.png" alt="客戶評價圖片" />
              </div>
              <div class="custom-content">
                <div class="d-flex mb-2">
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <p class="display-8 text-grey66">5.0</p>
                </div>
                <p class="mb-2 text-start text-dark">
                  很少在市面上看到拉花造型的項鍊，是很獨特的作品。
                </p>
                <div class="d-flex mb-2">
                  <p class="me-2 pe-2 text-start text-dark grey-border">項鍊</p>
                  <p class="text-start text-dark">拉花慢葉純銀項鍊</p>
                </div>
                <p class="text-start text-dark">仙貝</p>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="mb-4 col-md-3 mb-lg-0">
          <RouterLink to="/products/detail/-NsUpSH3NLnSe9lbHSNl">
            <div class="custom-card">
              <div class="custom-img-box">
                <img src="../assets/images/img-evaluate-3.png" alt="客戶評價圖片" />
              </div>
              <div class="custom-content">
                <div class="d-flex mb-2">
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <p class="display-8 text-grey66">5.0</p>
                </div>
                <p class="mb-2 text-start text-dark">
                  第一次看到像海洋的石頭，作品靈巧生動非常值得收藏！
                </p>
                <div class="d-flex mb-2">
                  <p class="text-start text-dark">蔚藍|拉利瑪海紋石純銀項鍊</p>
                </div>
                <p class="text-start text-dark">柯基</p>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="col-md-3">
          <RouterLink to="/products/detail/-NsVL3yywAfe5aYKsTVv">
            <div class="custom-card">
              <div class="custom-img-box">
                <img src="../assets/images/img-evaluate-4.png" alt="客戶評價圖片" />
              </div>
              <div class="custom-content">
                <div class="d-flex mb-2">
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <img src="../assets/images/ic_star.svg" alt="星星圖像" class="me-1" />
                  <p class="display-8 text-grey66">5.0</p>
                </div>
                <p class="mb-2 text-start text-dark">
                  作品優雅細緻，海水藍寶石的顏色濃郁，包裝也很精緻完善，很適合送禮。
                </p>
                <div class="d-flex mb-2">
                  <p class="me-2 pe-2 text-start text-dark grey-border">耳環</p>
                  <p class="text-start text-dark">波光粼離純銀耳環</p>
                </div>
                <p class="text-start text-dark">Uli</p>
              </div>
            </div>
          </RouterLink>
        </li>
      </ul>
      <!-- 結尾logo -->
      <div class="custom-footer d-flex flex-column justify-content-center align-items-center">
        <img src="../assets/images/logo-white.svg" alt="logo" class="mb--2" />
        <a href="https://www.instagram.com/greensheep_jewelry/" target="_blank"
          ><p class="display-7">@greensheep_jewelry</p></a
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

<script>
import articleStore from '@/stores/articleStore.js'
import { mapActions, mapState } from 'pinia'

export default {
  data() {
    return {
      pinnedArticle: []
    }
  },
  methods: {
    ...mapActions(articleStore, ['getArticles']),
    initArticle() {
      this.pinnedArticle = this.articles.slice(0, 3)
    }
  },
  computed: {
    ...mapState(articleStore, ['articles'])
  },
  mounted() {
    this.getArticles()
    this.initArticle()
  }
}
</script>
