<template>
  <div class="container py-30 py-md-40 py-lg-30 mb-20 mx-auto">
    <div class="row">
      <div class="col-md-2 col-12">
        <ul
          class="d-flex justify-content-center flex-md-column gap-3 gap-mb-0 list-unstyled h-bottom-line mb-5 mb-lg-0"
        >
          <li class="list-unstyled text-start fs-6 text-dark">
            <RouterLink
              to="/member/home"
              class="d-inline-block position-relative py-1 fs-6 text-dark"
              >會員資料</RouterLink
            >
          </li>
          <li class="list-unstyled text-start fs-6 text-dark">
            <RouterLink
              to="/member/order"
              class="d-inline-block position-relative py-1 fs-6 text-dark"
              >所有訂單</RouterLink
            >
          </li>
          <li class="list-unstyled text-start fs-6 text-dark">
            <RouterLink
              to="/member/favorites"
              class="d-inline-block position-relative py-1 fs-6 text-dark"
              >我的收藏</RouterLink
            >
          </li>
        </ul>
      </div>

      <div class="col-12 col-md-10">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
