<template>
  <div class="accordion fs-8 py-1 bg-primary text-white">
    即日起，訂單達 2,000元 以上即可享免運費優惠！
  </div>

  <nav class="navbar navbar-expand-lg navbar-light navbar-hover py-3 flex-column">
    <div class="container">
      <!-- logo -->

      <h1 class="logo mb-0 me-lg-8">
        <router-link to="/" class="navbar-brand">綠羊珠寶 Green Sheep handmade jewelry</router-link>
      </h1>

      <!-- menu -->
      <div
        class="collapse navbar-collapse flex-column offcanvas offcanvas-end py-16 px-12 py-lg-0 px-lg-0"
        id="offcanvasExample"
        style="max-width: 85%"
      >
        <div class="offcanvas-header d-lg-none">
          <button
            type="button"
            class="btn-close position-absolute"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            style="padding: 10px; top: 16px; right: 16px"
          ></button>
        </div>
        <ul class="navbar-nav me-auto gap-xxl-4 gap-xl-2 position-relative align-items-md-start">
          <li class="nav-item dropdown" style="min-width: 101px">
            <button
              class="nav-link dropdown-toggle nav-item-en py-2 py-lg-1 px-2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="toProductsView"
            >
              SHOP
            </button>
            <button
              class="nav-link dropdown-toggle nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="toProductsView"
            >
              全部商品
            </button>

            <!-- 全部商品的下拉選單 -->
            <ul
              class="dropdown-menu custom-dropdown-menu shadow-none border-0 font-noto-serif fs-8 start-50"
            >
              <li>
                <RouterLink to="/products" class="d-block py-3 py-lg-2 px-5">最新商品</RouterLink>
              </li>
              <li>
                <a class="d-block py-3 py-lg-2 px-5" href="#">情人節禮物推薦</a>
              </li>
              <li><a class="d-block py-3 py-lg-2 px-5" href="#">優惠商品</a></li>
              <li>
                <hr class="dropdown-divider bg-white d-none d-lg-block" />
              </li>
              <li><a class="d-block py-3 py-lg-2 px-5" href="#">戒指 Ring</a></li>
              <li>
                <a class="d-block py-3 py-lg-2 px-5" href="#">耳環 Earrings</a>
              </li>
              <li>
                <a class="d-block py-3 py-lg-2 px-5" href="#">手環 Bracelet</a>
              </li>
              <li>
                <a class="d-block py-3 py-lg-2 px-5" href="#">項鍊 Pendant</a>
              </li>
              <li>
                <hr class="dropdown-divider bg-white d-none d-lg-block" />
              </li>
              <li>
                <a class="d-block py-3 py-lg-2 px-5" href="#">925 純銀 Silver</a>
              </li>
              <li>
                <a class="d-block py-3 py-lg-2 px-5" href="#">14K金 14K-Gold</a>
              </li>
              <li>
                <a class="d-block py-3 py-lg-2 px-5" href="#">18K金 18K-Gold</a>
              </li>
            </ul>
          </li>
          <li class="nav-item" style="min-width: 130px">
            <RouterLink to="/custom" class="nav-link nav-item-en py-2 py-lg-1 px-2"
              >CUSTOMISED</RouterLink
            >
            <RouterLink
              to="/custom"
              class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              >客製設計
            </RouterLink>
          </li>
          <li class="nav-item" style="min-width: 81px">
            <RouterLink to="/story" class="nav-link nav-item-en py-2 py-lg-1 px-2"
              >ABOUT</RouterLink
            >
            <RouterLink
              to="/story"
              class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              >關於品牌
            </RouterLink>
          </li>
          <li class="nav-item" style="min-width: 81px">
            <RouterLink to="/articleList" class="nav-link nav-item-en py-2 py-lg-1 px-2"
              >BLOG</RouterLink
            >
            <RouterLink
              to="/articleList"
              class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              >專欄文章
            </RouterLink>
          </li>
          <li class="nav-item" style="min-width: 81px">
            <RouterLink to="/faq" class="nav-link nav-item-en py-2 py-lg-1 px-2">Q&A</RouterLink>
            <RouterLink
              to="/faq"
              class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              >常見問題
            </RouterLink>
          </li>
          <li class="nav-item d-lg-none" style="min-width: 100px">
            <a class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start" href="8-1.memLogin.html"
              >登入/註冊</a
            >
          </li>
        </ul>
      </div>
      <!-- 右側icon -->
      <div class="d-flex">
        <div class="header-icon d-flex align-items-center">
          <!-- 搜尋欄 -->
          <form class="header-form me-2 flex-shrink-1">
            <div class="input-group d-flex align-items-center">
              <img
                class="header-white-icon"
                src="../assets/images/ic-search-white.svg"
                alt="搜尋欄"
              />
              <img
                class="header-green-icon"
                src="../assets/images/ic-search-green.svg"
                alt="搜尋欄"
              />
              <input
                type="text"
                class="form-control no-box-shadow search-box input-group-text bg-transparent text-start d-none d-lg-block"
                placeholder="search..."
              />
            </div>
          </form>
          <!-- 會員中心 -->
          <router-link to="/memberLogin" class="me-2 d-none d-lg-block flex-grow-1">
            <img
              class="header-white-icon p-xxl-2 p-xl-0"
              src="../assets/images/ic-person-white.svg"
              alt="會員中心"
            />
            <img
              class="header-green-icon p-xxl-2 p-xl-0"
              src="../assets/images/ic-person-green.svg"
              alt="會員中心"
            />
          </router-link>
          <!-- 購物車 -->
          <a
            href="#"
            data-bs-toggle="offcanvas"
            data-bs-target="#cartOffcanvasRight"
            aria-controls="offcanvasRight"
          >
            <div class="position-relative">
              <img
                class="header-white-icon p-xxl-2 p-xl-0"
                src="../assets/images/ic-cart-white.svg"
                alt="購物袋"
              />
              <img
                class="header-green-icon p-xxl-2 p-xl-0"
                src="../assets/images/ic-cart-green.svg"
                alt="購物袋"
              />

              <span
                class="position-absolute top-0 top-xxl-25 start-95 start-xxl-75 translate-middle p-1 bg-primary rounded-circle text-white"
                v-if="carts.length"
              >
                <span class="visually-hidden">New alerts</span>
              </span>
            </div>
          </a>
        </div>
        <!-- menu-icon 在md時出現-->
        <button
          class="navbar-toggler no-box-shadow border-0 mx-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="menu-icon material-icons border-0 no-box-shadow">menu</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'pinia'
import cartStore from '@/stores/cartStore'
export default {
  data() {
    return {}
  },
  methods: {
    toProductsView() {
      this.$router.push({
        path: 'products'
      })
    }
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  }
}
</script>

<style scoped></style>
