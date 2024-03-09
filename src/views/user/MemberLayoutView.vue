<template>
  <div class="container py-7 py-md-15 py-lg-10 mb-20 mx-auto ">
    <div class="row">
      <div class="col-md-3 col-12">
        <ul
          class="d-flex justify-content-center flex-md-column gap-6 gap-mb-0 list-unstyled h-bottom-line mb-5 mb-lg-0">
          <li class="list-unstyled text-start fs-6 text-dark">
            <router-link to="/member/home"
              class="d-inline-block position-relative py-2 fs-6 text-dark">會員資料</router-link>
          </li>
          <li class="list-unstyled text-start fs-6 text-dark">
            <router-link to="/member/order"
              class="d-inline-block position-relative py-2 fs-6 text-dark">所有訂單</router-link>
          </li>
          <li class="list-unstyled text-start fs-6 text-dark">
            <router-link to="/member/favorites"
              class="d-inline-block position-relative py-2 fs-6 text-dark">我的收藏</router-link>
          </li>
        </ul>
      </div>

      <div class="col-12 col-md-9">

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss"></style>