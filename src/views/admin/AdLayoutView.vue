<template>
  <div class="container-fluid scroll-body" ref="scrollBody">
    <div class="row">
      <!-- mobile header -->
      <header class="d-lg-none admin-header d-flex justify-content-between align-items-center">
        <a
          class="d-lg-none"
          role="button"
          aria-controls="mobileAdminMenu"
          @click.prevent="openOffcanvas"
        >
          <i class="bi bi-list fs-2 text-white"></i>
        </a>
        <RouterLink to="/admin/home">
          <img src="@/assets/images/logo-white.svg" alt="logo" style="width: 150px" />
        </RouterLink>
        <RouterLink to="/" target="_blank" class="d-lg-none" title="回前台">
          <i class="bi bi-house-door fs-2 text-white"></i>
        </RouterLink>
      </header>
    </div>
    <div class="row">
      <!-- PC menu -->
      <aside
        class="admin-sidebar d-none d-lg-flex flex-column justify-content-between col-lg-1 px-0 position-fixed bg-primary text-white text-center"
      >
        <ul class="list-unstyled">
          <li class="px-4 py-4">
            <RouterLink to="/admin/home" class="d-none d-lg-block bg-transparent">
              <img src="@/assets/images/logo-white.svg" alt="logo" />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/admin/home" class="admin-sidebar-hover d-block py-6">首頁</RouterLink>
          </li>
          <li>
            <RouterLink to="/admin/products" class="admin-sidebar-hover d-block py-6"
              >商品管理</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/admin/orders" class="admin-sidebar-hover d-block py-6"
              >訂單管理</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/admin/articles" class="admin-sidebar-hover d-block py-6"
              >文章管理</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/admin/coupons" class="admin-sidebar-hover d-block py-6"
              >優惠管理</RouterLink
            >
          </li>
        </ul>
        <ul class="list-unstyled d-flex justify-content-center gap-6">
          <li class="mt-auto">
            <RouterLink to="/" target="_blank" title="回前台">
              <i class="bi bi-house-door fs-3"></i>
            </RouterLink>
          </li>
          <li>
            <a href="##" @click.prevent="signout" title="登出">
              <i class="bi bi-box-arrow-right fs-3"></i>
            </a>
          </li>
        </ul>
      </aside>
      <main class="col-lg-11 admin-main pt-12 pt-lg-0">
        <RouterView v-if="checkSuccess" />
      </main>
    </div>
  </div>
  <!-- mobile menu -->
  <div
    class="admin-offcanvas offcanvas offcanvas-start bg-primary text-white"
    tabindex="-1"
    ref="adminMenuOffcanvas"
    aria-labelledby="mobileAdminMenuLabel"
  >
    <div class="offcanvas-header px-4 py-4 position-relative">
      <img
        class="position-absolute start-50 translate-middle-x"
        src="@/assets/images/logo-white.svg"
        alt="greensheep"
        style="top: 12px"
      />
      <a
        class="ms-auto"
        role="button"
        aria-controls="offcanvasExample"
        @click.prevent="closeOffcanvas"
      >
        <img src="@/assets/images/close_white_24dp.svg" alt="關閉" />
      </a>
    </div>
    <div class="offcanvas-body p-0 d-flex flex-column justify-content-between">
      <ul class="list-unstyled">
        <li @click="closeOffcanvas">
          <RouterLink to="/admin/home" class="admin-sidebar-hover d-block py-6">首頁</RouterLink>
        </li>
        <li @click="closeOffcanvas">
          <RouterLink to="/admin/products" class="admin-sidebar-hover d-block py-6"
            >商品管理</RouterLink
          >
        </li>
        <li @click="closeOffcanvas">
          <RouterLink to="/admin/orders" class="admin-sidebar-hover d-block py-6"
            >訂單管理</RouterLink
          >
        </li>
        <li @click="closeOffcanvas">
          <RouterLink to="/admin/articles" class="admin-sidebar-hover d-block py-6"
            >文章管理</RouterLink
          >
        </li>
        <li @click="closeOffcanvas">
          <RouterLink to="/admin/coupons" class="admin-sidebar-hover d-block py-6"
            >優惠管理</RouterLink
          >
        </li>
      </ul>
      <a
        href="##"
        class="admin-sidebar-hover d-block py-6"
        @click.prevent="signout(), closeOffcanvas()"
      >
        登出
        <i class="bi bi-box-arrow-right ms-1 fs-2 align-middle"></i>
      </a>
    </div>
  </div>

  <VueLoading :active="isLoading" />
</template>

<script>
import { Offcanvas } from 'bootstrap'
import { toastSuccess, toastError } from '@/utils/sweetalertToast.js'

const { VITE_APP_API_URL } = import.meta.env

export default {
  data() {
    return {
      checkSuccess: false,
      isLoading: false,
      offcanvas: '',
      previousScrollY: 0
    }
  },
  methods: {
    // 登入驗證
    checkLogin() {
      this.isLoading = true

      // 取出 token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)AdminToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )

      // token 存在則執行驗證
      if (token) {
        this.$http.defaults.headers.common.Authorization = token
        const url = `${VITE_APP_API_URL}/api/user/check`
        this.$http
          .post(url)
          .then(() => {
            this.checkSuccess = true
          })
          .catch((err) => {
            toastError(err.response.data.message)
            this.$router.push('/login')
          })
          .finally(() => {
            this.isLoading = false
          })
      } else {
        // 否則跳轉登入頁面
        toastError('請先登入')
        this.$router.push('/login')
      }
    },
    // 登出
    signout() {
      // 清空 cookie 裡的 AdminToken expires
      document.cookie = 'AdminToken=;expires=;'

      toastSuccess('已登出')
      this.$router.push('/login')
    },
    openOffcanvas() {
      this.offcanvas.show()
    },
    closeOffcanvas() {
      this.offcanvas.hide()
    }
  },
  mounted() {
    // 登入驗證
    this.checkLogin()
    // mobile menu 實例
    this.offcanvas = new Offcanvas(this.$refs.adminMenuOffcanvas, {
      backdrop: true
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
  }
}
</script>
