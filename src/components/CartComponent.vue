<template>
  <div class="offcanvas offcanvas-end" data-bs-backdrop="false" data-bs-scroll="true" tabindex="-1"
    id="cartOffcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header ">
      <h3 class="offcanvas-title" id="offcanvasRightLabel"></h3>
      <button type="button" class="btn-close p-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between">
      <div class="">
        <h3 class="text-center mb-5">購物車</h3>
        <p class="fs-2 text-primary mt-10">目前購物車沒有商品</p>
        <div class="overflow-y-auto">
          <ul class="list-group list-group-flush">
            <li class="list-group-item mt-3">
              <div class="card mb-3 border-0" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../assets/images/product-6.jpg" class="img-fluid rounded-2 w-75" alt="...">
                  </div>
                  <div class="col-md-6 d-flex align-items-center ">
                    <div class="card-body text-start">
                      <h5 class="card-title text-primary">
                        <span>戒指 |</span>
                        票釀戒指
                      </h5>
                      <input type="number" min="1" value="1" class="w-50 my-2 fs-4">
                      <p class="card-text text-small text-success">$NT 2000</p>
                    </div>
                  </div>
                  <div class="col-md-2 d-flex align-items-center ">
                    <a href="" class="text-danger fs-4">X </a>
                  </div>
                </div>
              </div>
            </li>

            <li class="list-group-item mt-3">
              <div class="card mb-3 border-0" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../assets/images/product-10.jpg" class="img-fluid rounded-2 w-75" alt="...">
                  </div>
                  <div class="col-md-6 d-flex align-items-center ">
                    <div class="card-body text-start">
                      <h5 class="card-title text-primary">
                        <span>戒指 |</span>
                        票釀戒指
                      </h5>
                      <input type="number" min="1" value="1" class="w-50 my-2">
                      <p class="card-text text-small text-success">$ 2000</p>
                    </div>
                  </div>
                  <div class="col-md-2 d-flex align-items-center ">
                    <a href="" class="text-danger fs-4">X </a>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>

      <div class="my-2">
        <p class="text-success text-end fs-4 p-4">總計：$ <span>3000</span> 元</p>

        <router-link to="/cart" class="btn btn-primary w-100 fix-button fs-4 p-4" @click="closeOffcanvas"> 立即結帳
        </router-link>
        <!-- <button class="btn btn-primary w-100 fix-button fs-4 p-4 ">立即結帳</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Offcanvas } from 'bootstrap';
export default {
  data() {
    return {
      cartOffcanvas: "",
    }
  },
  methods: {
    closeOffcanvas() {
      this.cartOffcanvas.hide();
    }
  },
  mounted() {
    this.cartOffcanvas = new Offcanvas(document.querySelector("#cartOffcanvasRight"));
    console.log(this.cartOffcanvas);

  },

}
</script>

