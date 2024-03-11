<template>
  <div ref="scrollBody">
    <router-link
      to="/products/全部商品%20ALL"
      class="d-block accordion fs-8 py-1 bg-primary text-white cursor-pointer"
    >
      即日起，訂單達 2,000元 以上即可享免運費優惠！
    </router-link>

    <nav
      class="navbar navbar-expand-lg navbar-light navbar-hover py-3 flex-column position-relative"
    >
      <div class="container">
        <!-- logo -->
        <h1 class="logo mb-0 me-lg-8">
          <router-link to="/" class="navbar-brand"
            >綠羊珠寶 Green Sheep handmade jewelry</router-link
          >
        </h1>

        <div class="collapse navbar-collapse flex-column py-16 px-12 p-lg-0">
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

              <!-- 全部商品的下拉選單:dropdownMenu -->
              <ul
                class="dropdown-menu custom-dropdown-menu shadow-none border-0 font-noto-serif fs-8 start-50"
                ref="dropdownMenuPC"
              >
                <!-- <li class="d-inline-block py-2 mx-3 position-relative cursor-pointer">
                <a @click.prevent="toCategoryPage('productsAll')">全部商品 ALL</a>
              </li> -->
                <li v-for="category in categories" :key="category + 123">
                  <a
                    class="d-inline-block py-2 mx-3 position-relative cursor-pointer"
                    @click.prevent="toCategoryPage(category, $event)"
                    >{{ category }}
                  </a>
                </li>
              </ul>
            </li>
            <!-- <li class="nav-item" style="min-width: 130px" @click="closeMenuOffCanvas()">
            <a class="nav-link nav-item-en py-2 py-lg-1 px-2" @click.prevent="toCustomPage"
              >CUSTOMIZED</a
            >
            <a
              class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              @click.prevent="toCustomPage"
              >客製設計
            </a>
          </li> -->
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
              <RouterLink to="/articles" class="nav-link nav-item-en py-2 py-lg-1 px-2"
                >BLOG</RouterLink
              >
              <RouterLink
                to="/articles"
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
                  @keyup.enter="searchProducts($event)"
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
              @keyup.enter="searchProducts($event)"
            />
            <a role="button" @click.prevent="closeSearchOffCanvas()">
              <i class="bi bi-x fs-4 text-dark"></i
            ></a>
          </div>
        </div>
        <!-- mobile menu -->
        <!-- close-icon -->
        <div
          class="offcanvas offcanvas-end d-lg-none p-0"
          ref="menuOffCanvas"
          tabindex="-1"
          style="max-width: 90%"
          aria-labelledby="mobileMenu"
        >
          <div class="offcanvas-header pt-15 position-relative bg-decolight">
            <img
              class="position-absolute start-50 pt-1 translate-middle-x"
              src="@/assets/images/logo-green.svg"
              alt="greensheep"
              style="top: 12px"
            />
            <a
              type="button"
              class="position-absolute z-1"
              aria-label="Close"
              @click.prevent="closeMenuOffCanvas"
              style="top: 20px; right: 15px"
            >
              <i class="bi bi-x-lg text-primary fs-4"></i>
            </a>
          </div>
          <!-- menu-list -->
          <ul class="offcanvas-body d-flex flex-column justify-content-start bg-primary px-0 mb-0">
            <li
              class="border-bottom py-5 text-white fs-6 position-relative"
              @click.prevent="toggleCollapseProduct(isCollapseOpen)"
            >
              <a class="text-center fw-medium">
                全部商品 <i class="collapse-more bi bi-chevron-down position-absolute"></i
              ></a>
            </li>

            <!-- 全部商品的下拉選單 -->
            <ul
              class="collapse shadow-none border-0 font-noto-serif fs-8 ps-0"
              ref="collapseProduct"
            >
              <li
                v-for="category in categories"
                :key="category + 123"
                class="list-unstyled border-bottom border-primary bg-decolight text-primary fw-medium"
              >
                <a
                  class="d-inline-block py-5 cursor-pointer"
                  @click.prevent="toCategoryPage(category)"
                  >{{ category }}
                </a>
              </li>
            </ul>

            <!-- <li class="nav-item" style="min-width: 130px" @click="closeMenuOffCanvas()">
            <a class="nav-link nav-item-en py-2 py-lg-1 px-2" @click.prevent="toCustomPage"
              >CUSTOMIZED</a
            >
            <a
              class="nav-link nav-item-ch py-2 py-lg-1 px-2 text-start text-lg-center"
              @click.prevent="toCustomPage"
              >客製設計
            </a>
          </li> -->
            <li class="border-bottom py-5 text-white fs-6" @click="closeMenuOffCanvas()">
              <RouterLink to="/story" class="text-center fw-medium">關於品牌 </RouterLink>
            </li>

            <li class="border-bottom py-5 text-white fs-6" @click="closeMenuOffCanvas()">
              <RouterLink to="/articles" class="text-center fw-medium">專欄文章 </RouterLink>
            </li>
            <li class="border-bottom py-5 text-white fs-6" @click="closeMenuOffCanvas()">
              <RouterLink to="/faq" class="text-center fw-medium">常見問題 </RouterLink>
            </li>
            <li class="border-bottom py-5 text-white fs-6" @click="closeMenuOffCanvas()">
              <RouterLink to="/memberLogin" class="text-center fw-medium">登入/註冊</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Offcanvas, Dropdown, Collapse } from 'bootstrap'
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
      collapseProduct: '',
      dropdownMenu: '',
      dropdownMenuPC: '',
      isDropdownMenuOpen: false,
      isCollapseOpen: false,
      previousScrollY: 0
    }
  },

  methods: {
    ...mapActions(searchStore, ['setSearchWord']),
    ...mapActions(productStore, ['getProducts', 'getFilterProducts']),

    toCategoryPage(category) {
      this.headerCategory = category
      this.isDropdownMenuOpen = !this.isDropdownMenuOpen
      this.closeDropdownMenu()
      this.$router.push({ path: `/products/${category}` })
      this.closeMenuOffCanvas()
      this.closeCollapseProduct()
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
      this.dropdownMenuPC.show()
    },
    closeDropdownMenu() {
      this.dropdownMenuPC.hide()
    },
    openCollapseProduct() {
      this.collapseProduct.show()
    },
    closeCollapseProduct() {
      this.collapseProduct.hide()
      this.isCollapseOpen = false
    },
    toggleDropdownMenu() {
      console.log('@@')
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
    //mobile 搜尋欄 實例
    this.searchOffCanvas = new Offcanvas(this.$refs.searchOffCanvas, {
      backdrop: false
    })
    //pc dropdown 實例
    this.dropdownMenuPC = new Dropdown(this.$refs.dropdownMenuPC)
    //mobile dropdown 實例
    // this.dropdownMenu = new Dropdown(this.$refs.dropdownMenu)
    this.collapseProduct = new Collapse(this.$refs.collapseProduct, {
      toggle: false
    })

    // 監聽滾動事件，滾輪下滑時 header 隱藏，上滑時 header 顯示
    window.addEventListener('scroll', () => {
      let currentScrollY = window.scrollY
      // 當前滑動位置小於前一個位置即為滾輪往上滑
      if (currentScrollY < this.previousScrollY) {
        this.$refs.scrollBody.classList.remove('hideUp')
      } else {
        this.$refs.scrollBody.classList.add('hideUp')
      }
      this.previousScrollY = currentScrollY
    })

    // // 点击窗口外的区域关闭菜单
    // window.addEventListener('click', (event) => {
    //   if (
    //     this.$refs.menuOffCanvas &&
    //     this.$refs.dropdownMenuPC &&
    //     !this.$refs.menuOffCanvas.contains(event.target) &&
    //     !this.$refs.dropdownMenuPC.contains(event.target) &&
    //     !this.$refs.menuBtn.contains(event.target)
    //   ) {
    //     this.closeMenuOffCanvas()
    //     this.closeCollapseProduct()
    //   }
    // })
  }
}
</script>
<style scoped>
.searchOffCanvas {
  margin-top: 24px;
  height: 64px;
}
.collapse-more {
  right: 100px;
}
</style>
