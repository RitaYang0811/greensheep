<template>
  <header class="admin-header d-flex justify-content-between align-items-center px-15 py-5">
    <RouterLink to="/admin/home">
      <img src="@/assets/images/logo-white.svg" alt="logo" />
    </RouterLink>
    <div class="d-flex gap-6 text-white">
      <a href="##">登出</a>
      <RouterLink to="/" target="_blank">
        回前台
        <img src="@/components/icons/open-in-new-white.svg" class="align-top" alt="前往後台" />
      </RouterLink>
    </div>
  </header>
  <div class="d-flex">
    <aside class="admin-sidebar bg-primary text-white text-center">
      <ul class="list-unstyled text-justify">
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
        <li><a href="##" class="admin-sidebar-hover d-block py-6">數據中心</a></li>
      </ul>
    </aside>
    <main class="admin-main flex-grow-1">
      <RouterView v-if="checkSuccess" />
    </main>
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
    }
  },
  mounted() {
    this.checkLogin()
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/all.scss';
.admin {
  &-header {
    background: #bdbcbb;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 70px;
  }

  &-sidebar {
    padding-top: 70px;
    position: fixed;
    width: 200px;
    height: 100vh;

    &-hover:hover {
      background: $light;
      color: $primary;
      transition: 0.3s ease-in-out;
    }
    & .active {
      background: $light;
      color: $primary;
    }
  }

  &-main {
    margin-top: 70px;
    margin-left: 200px;
    min-height: calc(100vh - 70px);
  }
}
</style>
