<template>
  <router-link
    to="/products/productsAll"
    class="d-block accordion fs-8 py-1 bg-primary text-white cursor-pointer"
  >
    即日起，訂單達 2,000元 以上即可享免運費優惠！
  </router-link>

  <nav
    class="navbar navbar-expand-lg navbar-light navbar-hover py-3 flex-column sticky-top position-relative"
  >
    <div class="container">
      <!-- logo -->
      <h1 class="logo mb-0 me-lg-8">
        <router-link to="/" class="navbar-brand">綠羊珠寶 Green Sheep handmade jewelry</router-link>
      </h1>
      <!-- menu  -->
      <div
        class="collapse navbar-collapse flex-column offcanvas offcanvas-end py-16 px-12 p-lg-0"
        ref="menuOffCanvas"
        style="max-width: 85%"
      >
        <!-- mobile:close-icon -->
        <div class="offcanvas-header d-lg-none">
          <button
            type="button"
            class="btn-close position-absolute"
            aria-label="Close"
            @click.prevent="closeMenuOffCanvas"
            style="padding: 10px; top: 16px; right: 16px"
          ></button>
        </div>
        <!-- pc menu -->
        <ul class="navbar-nav me-auto gap-xxl-4 gap-xl-2 position-relative align-items-md-start">
          <li class="nav-item dropdown" style="min-width: 101px">
            <button
              class="nav-link dropdown-toggle nav-item-en py-2 py-lg-1 px-2"
              aria-expanded="false"
              @click="toggleDropdownMenu(isDropdownMenuOpen)"
            >
              SHOP
            </button>
            <button
              class="nav-link dropdown-toggle nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              aria-expanded="false"
              @click="toggleDropdownMenu(isDropdownMenuOpen)"
            >
              全部商品
            </button>

            <!-- 全部商品的下拉選單 -->
            <ul
              class="dropdown-menu custom-dropdown-menu shadow-none border-0 font-noto-serif fs-8 start-50"
              ref="dropdownMenu"
            >
              <li class="d-inline-block py-2 mx-3 position-relative cursor-pointer">
                <RouterLink to="/products/productsAll" @click="toProductsView"
                  >全部商品 ALL</RouterLink
                >
              </li>
              <li v-for="category in categories" :key="category + 123">
                <RouterLink
                  :to="{ path: `/products/${category}`, query: { category: category } }"
                  class="d-inline-block py-2 mx-3 position-relative cursor-pointer"
                  @click="changeCategory(category)"
                  >{{ category }}
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item" style="min-width: 130px" @click="closeMenuOffCanvas()">
            <RouterLink
              to="/products/客製設計 CUSTOMIZED?category=客製設計 CUSTOMIZED`"
              class="nav-link nav-item-en py-2 py-lg-1 px-2"
              >CUSTOMIZED</RouterLink
            >
            <RouterLink
              to="/products/客製設計 CUSTOMIZED?category=客製設計 CUSTOMIZED`"
              class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              >客製設計
            </RouterLink>
          </li>
          <li class="nav-item" style="min-width: 81px" @click="closeMenuOffCanvas()">
            <RouterLink to="/story" class="nav-link nav-item-en py-2 py-lg-1 px-2"
              >ABOUT</RouterLink
            >
            <RouterLink
              to="/story"
              class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              >關於品牌
            </RouterLink>
          </li>
          <li class="nav-item" style="min-width: 81px" @click="closeMenuOffCanvas()">
            <RouterLink to="/articles" class="nav-link nav-item-en py-2 py-lg-1 px-2"
              >BLOG</RouterLink
            >
            <RouterLink
              to="/articles"
              class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              >專欄文章
            </RouterLink>
          </li>
          <li class="nav-item" style="min-width: 81px" @click="closeMenuOffCanvas()">
            <RouterLink to="/faq" class="nav-link nav-item-en py-2 py-lg-1 px-2">Q&A</RouterLink>
            <RouterLink
              to="/faq"
              class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              >常見問題
            </RouterLink>
          </li>
          <li class="nav-item d-lg-none" style="min-width: 100px" @click="closeMenuOffCanvas()">
            <button
              @click.prevent="isLogin"
              class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start"
            >
              登入/註冊
            </button>
          </li>
        </ul>
      </div>
      <!-- pc 右側icon : 搜尋、會員、購物袋 -->
      <div class="d-flex">
        <div class="header-icon d-flex align-items-center">
          <!-- 搜尋欄 -->
          <form class="header-form me-2 flex-shrink-1">
            <div class="input-group d-flex align-items-center">
              <div>
                <i
                  class="bi bi-search header-white-icon text-white"
                  @click="openSearchOffCanvas()"
                ></i>
                <i
                  class="bi bi-search header-green-icon text-primary"
                  @click="openSearchOffCanvas()"
                ></i>
              </div>

              <input
                type="text"
                class="form-control no-box-shadow search-box input-group-text bg-transparent text-start d-none d-lg-block"
                placeholder="搜尋..."
                v-model="searchWord"
                @keyup.enter="searchProducts"
              />
            </div>
          </form>

          <!-- 會員中心 -->
          <a href="#" @click.prevent="isLogin" class="me-2 d-none d-lg-block flex-grow-1">
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
          </a>
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
        <!-- mobile:menu-icon-->
        <button
          class="navbar-toggler no-box-shadow border-0 mx-0"
          type="button"
          @click.prevent="openMenuOffCanvas"
          aria-controls="offcanvasExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="menu-icon material-icons border-0 no-box-shadow">menu</span>
        </button>
      </div>
      <!-- mobile:搜尋 -->

      <div
        class="searchOffCanvas offcanvas offcanvas-top bg-light py-5 px-4 d-lg-none"
        tabindex="-1"
        ref="searchOffCanvas"
        aria-labelledby="offcanvasTopLabel"
      >
        <div class="d-flex align-items-center justify-content-center">
          <div class="d-flex border-bottom border-greyD4"></div>
          <i class="bi bi-search text-primary fs-5"></i>
          <input
            type="text"
            class="form-control no-box-shadow input-group-text bg-transparent text-start w-100"
            placeholder="請輸入搜尋商品"
            v-model="searchWord"
            @keyup.enter="searchProducts"
          />
          <a role="button" @click.prevent="closeSearchOffCanvas()">
            <i class="bi bi-x fs-4 text-dark"></i
          ></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Offcanvas, Dropdown } from 'bootstrap'
import { mapState, mapActions } from 'pinia'
import cartStore from '@/stores/cartStore'
import searchStore from '@/stores/searchStore'
import productStore from '@/stores/productStore'

// json-server網址
const serverUrl = 'https://greensheep-json-server.onrender.com'

export default {
  data() {
    return {
      headerCategory: '',
      searchWord: '',
      headerCurrentPage: 1,
      menuOffCanvas: '',
      searchOffCanvas: '',
      dropdownMenu: '',
      isDropdownMenuOpen: false
    }
  },
  watch: {
    // searchWord: {
    //   handler(newVal, oldVal) {
    //     console.log('searchWord被修改', newVal, oldVal)
    //     this.searchWord = newVal
    //   }
    // },
  },
  methods: {
    ...mapActions(searchStore, ['setSearchWord']),
    ...mapActions(productStore, ['getProducts', 'getFilterProducts']),
    toProductsView() {
      this.headerCategory = ''
      this.isDropdownMenuOpen = !this.isDropdownMenuOpen
      this.closeDropdownMenu()
      this.closeMenuOffCanvas()
      this.getFilterProducts(this.headerCategory, this.headerCurrentPage, 'timeN2O')
      this.$router.push({ path: '/products/productsAll' })
    },
    changeCategory(category) {
      console.log('changeCategory', category)
      this.headerCategory = category
      this.isDropdownMenuOpen = !this.isDropdownMenuOpen
      this.closeDropdownMenu()
      this.getFilterProducts(this.headerCategory, this.headerCurrentPage, 'timeN2O')
      this.closeMenuOffCanvas()
    },
    openMenuOffCanvas() {
      this.menuOffCanvas.show()
    },
    closeMenuOffCanvas() {
      this.menuOffCanvas.hide()
    },
    openSearchOffCanvas() {
      this.searchOffCanvas.show()
    },
    closeSearchOffCanvas() {
      this.searchOffCanvas.hide()
    },
    openDropdownMenu() {
      this.dropdownMenu.show()
    },
    closeDropdownMenu() {
      this.dropdownMenu.hide()
    },
    toggleDropdownMenu(status) {
      this.isDropdownMenuOpen = !this.isDropdownMenuOpen
      this.isDropdownMenuOpen === true ? this.openDropdownMenu() : this.closeDropdownMenu()
    },
    // 判斷是否已登入
    async isLogin() {
      const user = JSON.parse(localStorage.getItem('userInfo'))
      if (user === null) {
        this.$router.push({
          path: '/memberLogin'
        })
        return
      }
      await this.$http
        .get(`${serverUrl}/600/users/${user.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        .then((res) => {
          this.$router.push({
            path: '/member'
          })
        })
        .catch((err) => {
          this.$router.push({
            path: '/memberLogin'
          })
        })
    }
    // openDropdownMenu() {

    // }
    // searchProducts() {
    //   this.setSearchWord(this.searchWord)
    //   if (this.searchWord.trim() !== '') {
    //     // 发送搜索词到商品视图
    //     this.$router.push({ path: '/products' })
    //     console.log('searchProducts', this.searchWord)
    //   }

    //   this.searchWord = '' // 清空搜索词
    // }
  },

  computed: {
    ...mapState(cartStore, ['carts']),
    ...mapState(searchStore, ['searchQuery']),
    ...mapState(productStore, ['category', 'categories'])
  },
  mounted() {
    // mobile menu 實例
    this.menuOffCanvas = new Offcanvas(this.$refs.menuOffCanvas, {
      backdrop: true
    })
    this.searchOffCanvas = new Offcanvas(this.$refs.searchOffCanvas, {
      backdrop: false
    })
    this.dropdownMenu = new Dropdown(this.$refs.dropdownMenu)
  }
}
</script>

<style scoped>
.searchOffCanvas {
  margin-top: 24px;
  height: 64px;
}
</style>
