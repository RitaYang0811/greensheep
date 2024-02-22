<template>
  <div class="container px-10 pt-10">
    <div class="row">
      <div class="col-12 col-lg-5">
        <h1 class="display-3 fw-bold mb-4 text-start">待辦清單</h1>
        <div class="d-flex">
          <div class="w-50 bg-white m-2">
            <div class="p-8">
              <span class="d-block fs-2 mb-3 text-primary fw-medium">5</span>
              <span class="d-block fs-5 mb-3 text-primary">待出貨清單</span>
            </div>
            <button type="button " class="custom-btn custom-btn-toGreen w-100">查看詳情</button>
          </div>
          <div class="w-50 bg-white m-2">
            <div class="p-8">
              <span class="d-block fs-2 mb-3 text-primary fw-medium">2</span>
              <span class="d-block fs-5 mb-3 text-primary">待付款訂單</span>
            </div>
            <button type="button " class="custom-btn custom-btn-toGreen w-100">查看詳情</button>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-7">
        <h2 class="display-3 fw-bold mb-4 text-start">通知</h2>
        <div class="d-flex">
          <div class="notice-board w-100 bg-white m-2">
            <div class="p-3">
              <div class="card border border-primary rounded-3 mb-4">
                <div class="card-body p-3 text-start">
                  <div class="fs-6 text-dark fw-medium font-notosans mb-3">
                    訂單編號099156557
                    <span class="float-end">
                      <i class="bi bi-exclamation-circle-fill text-danger"></i
                    ></span>
                  </div>

                  <p class="fs-7 text-primary">此筆訂單已超過3天未處理，請盡快處理！</p>
                </div>
              </div>
              <div class="card border border-primary rounded-3 mb-4">
                <div class="card-body p-3 text-start">
                  <div class="fs-6 text-dark fw-medium font-notosans mb-3">
                    訂單編號099156557
                    <span class="float-end">
                      <i class="bi bi-exclamation-circle-fill text-danger"></i
                    ></span>
                  </div>

                  <p class="fs-7 text-primary">此筆訂單已超過3天未付款，請盡快處理！</p>
                </div>
              </div>
              <div class="card border border-primary rounded-3 mb-4">
                <div class="card-body p-3 text-start">
                  <div class="fs-6 text-dark fw-medium font-notosans mb-3">
                    訂單編號099156557
                    <span class="float-end">
                      <i class="bi bi-exclamation-circle-fill text-danger"></i
                    ></span>
                  </div>

                  <p class="fs-7 text-primary">31分鐘前剛收到一筆新訂單！</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped lang="scss">
// .notice-board {
//   height: calc(100vh - 230px);
// }
</style>
