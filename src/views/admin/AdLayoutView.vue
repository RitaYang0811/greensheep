<template>
  <div class="container-fluid">
    <div class="row">
      <header class="admin-header d-flex justify-content-between align-items-center">
        <a class="d-lg-none" data-bs-toggle="offcanvas" href="#mobileAdminMenu" role="button" aria-controls="mobileAdminMenu">
          <img src="@/assets/images/menu_white_24dp.svg" alt="選單" style="width: 32px;">
        </a>
        <RouterLink to="/admin/home" class="d-none d-lg-block">
          <img src="@/assets/images/logo-white.svg" alt="logo" />
        </RouterLink>
        <RouterLink to="/admin/home" class="d-lg-none position-absolute start-50 translate-middle-x" >
          <img src="@/assets/images/logo-circle-green.png" alt="logo" style="width: 56px;" />
        </RouterLink>
        <RouterLink to="/" target="_blank" class="d-lg-none text-white">
            回前台
            <img src="@/components/icons/open-in-new-white.svg" class="align-top" alt="前往後台" />
        </RouterLink>
        <div class="d-none d-lg-flex gap-6 text-white">
          <a href="##" @click.prevent="signout">登出</a>
          <RouterLink to="/" target="_blank">
            回前台
            <img src="@/components/icons/open-in-new-white.svg" class="align-top" alt="前往後台" />
          </RouterLink>
        </div>
      </header>
    </div>
    <div class="row">
      <aside class="admin-sidebar d-none d-lg-block col-lg-1 px-0 position-fixed bg-primary text-white text-center">
        <ul class="list-unstyled">
          <li>
            <RouterLink to="/admin/home" class="admin-sidebar-hover d-block py-6">首頁</RouterLink>
          </li>
          <li><a href="##" class="admin-sidebar-hover d-block py-6">商品管理</a></li>
          <li>
            <RouterLink to="/admin/orders" class="admin-sidebar-hover d-block py-6">訂單管理</RouterLink>
          </li>
          <li>
            <RouterLink to="/admin/articles" class="admin-sidebar-hover d-block py-6">文章管理</RouterLink>
          </li>
          <li>
            <RouterLink to="/admin/coupons" class="admin-sidebar-hover d-block py-6">優惠管理</RouterLink>
          </li>
          <li><a href="##" class="admin-sidebar-hover d-block py-6">數據中心</a></li>
        </ul>
      </aside>
      <main class="col-lg-11 admin-main">
        <RouterView v-if="checkSuccess" />
      </main>
    </div>
  </div>
  <div class="admin-offcanvas offcanvas offcanvas-start bg-primary text-white" tabindex="-1" id="mobileAdminMenu" aria-labelledby="mobileAdminMenuLabel">
    <div class="offcanvas-header px-4 py-2">
      <img class="pt-2" src="@/assets/images/logo-white.svg" alt="">
      <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        <img src="@/assets/images/close_white_24dp.svg" alt="關閉">
      </a>
    </div>
    <div class="offcanvas-body px-0">
    <ul class="list-unstyled">
      <li>
        <RouterLink to="/admin/home" class="admin-sidebar-hover d-block py-6">首頁</RouterLink>
      </li>
      <li><a href="##" class="admin-sidebar-hover d-block py-6">商品管理</a></li>
      <li>
        <RouterLink to="/admin/orders" class="admin-sidebar-hover d-block py-6">訂單管理</RouterLink>
      </li>
      <li>
        <RouterLink to="/admin/articles" class="admin-sidebar-hover d-block py-6">文章管理</RouterLink>
      </li>
      <li>
        <RouterLink to="/admin/coupons" class="admin-sidebar-hover d-block py-6">優惠管理</RouterLink>
      </li>
      <li><a href="##" class="admin-sidebar-hover d-block py-6">數據中心</a></li>
      <li><a href="##" class="admin-sidebar-hover d-block py-6" @click.prevent="signout">登出</a></li>
    </ul>
  </div>
</div>

  <VueLoading :active="isLoading" />
</template>

<script>
export default {
  data() {
    return {
      checkSuccess: false,
      isLoading: false
    }
  },
  methods: {
    checkLogin() {
      this.isLoading = true
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)AdminToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      if (token) {
        this.$http.defaults.headers.common.Authorization = token
        const url = `${import.meta.env.VITE_APP_API_URL}/api/user/check`
        this.$http
          .post(url)
          .then((res) => {
            this.checkSuccess = true
          })
          .catch((err) => {
            alert(err.response.data.message)
            this.$router.push('/login')
          })
          .finally(() => {
            this.isLoading = false
          })
      } else {
        alert('請先登入')
        this.$router.push('/login')
      }
    },
    signout () {
      document.cookie = 'AdminToken=;expires=;'
      alert('已登出')
      this.$router.push('/login')
    }
  },
  mounted() {
    this.checkLogin()
  }
}
</script>
