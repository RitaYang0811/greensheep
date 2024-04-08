<template>
  <footer class="footer">
    <div class="container-fluid bg-primary py-lg-12 py-8">
      <div class="container-lg text-start">
        <!-- footer-top -->
        <div class="d-flex flex-lg-row justify-content-lg-between mb-lg-4 flex-column-reverse mb-6">
          <ul
            class="footer-top-left list-unstyled d-flex flex-lg-row flex-column align-items-center mb-0"
          >
            <div class="d-flex mb-lg-0 align-items-lg-center mb-4">
              <li>
                <RouterLink
                  to="/products/全部商品%20ALL"
                  class="fs-8 text-white mx-3"
                  @click="scrollToTop"
                  >全部商品</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/products/客製設計%20CUSTOMIZED"
                  class="fs-8 text-white mx-3"
                  @click="scrollToTop"
                  >客製設計</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/articles" class="fs-8 text-white mx-3" @click="scrollToTop"
                  >專欄文章</RouterLink
                >
              </li>
            </div>
            <div class="d-flex align-items-lg-center">
              <li>
                <RouterLink to="/story" class="fs-8 text-white mx-3" @click="scrollToTop"
                  >關於品牌</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/faq" class="fs-8 text-white mx-3" @click="scrollToTop"
                  >常見問題</RouterLink
                >
              </li>
              <li>
                <a target="_blank" class="fs-8 text-white mx-3" @click.prevent="isLogout">登出 </a>
              </li>
            </div>
          </ul>
          <div class="footer-top-right d-flex justify-content-between mb-4 mb-lg-0">
            <!-- logo svg -->
            <div class="me-2 me-lg-6">
              <RouterLink to="/">
                <img
                  src="@/assets/images/logo-white.svg"
                  alt="greensheep logo"
                  class="img-fluid"
                  @click="scrollToTop"
              /></RouterLink>
            </div>
            <!-- social-medias -->
            <ul class="social-media-list list-unstyled d-flex justify-content-between mb-0">
              <li class="me-4">
                <a href="https://lin.ee/bYROr08" target="_blank">
                  <!-- line svg -->
                  <img src="./icons/line-icon-footer.svg" alt="line-icon" />
                </a>
              </li>
              <li class="me-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100071826680344&mibextid=opq0tG"
                  target="_blank"
                >
                  <!-- fb svg -->
                  <img src="./icons/fb-icon-footer.svg" alt="fb-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/greensheep_jewelry?igsh=MWNkcjd0azZud3JheQ%3D%3D&utm_source=qr"
                  target="_blank"
                >
                  <!-- ig svg -->
                  <img src="./icons/ig-icon-footer.svg" alt="ig-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- footer-line -->
        <hr />

        <!-- footer-bottom -->
        <div class="d-flex flex-lg-row justify-content-lg-between mt-lg-4 flex-column-reverse mt-6">
          <p class="display-lg-8 display-9">
            Copyright ©2023 綠羊 Green Sheep.All rights reserved.
          </p>
          <a href="mailto:greensheepjewelry@gmail.com" class="display-lg-8 mb-lg-0 display-9 mb-4"
            >greensheepjewelry@gmail.com</a
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  data() {
    return {}
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    },
    // 登出
    isLogout() {
      localStorage.removeItem('userInfo')
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: '會員已登出',
        showConfirmButton: false,
        toast: true,
        timer: 2000
      })
      location.reload()
    }
  }
}
</script>

<style></style>
