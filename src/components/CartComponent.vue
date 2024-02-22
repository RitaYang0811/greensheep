<template>
  <!-- mx my 可以修改購物車彈出時旁邊的留白 -->
  <div class="offcanvas offcanvas-end my-3 mx-5 p-3 rounded-3" data-bs-backdrop="false" data-bs-scroll="true"
    tabindex="-1" id="cartOffcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header ">
      <h3 class="offcanvas-title" id="offcanvasRightLabel"></h3>
      <button type="button" class="btn-close p-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between">
      <div class="">
        <h3 class="text-center mb-5">購物車</h3>
        <p class="fs-2 text-primary mt-10" v-if="!carts.length">目前購物車沒有商品</p>
        <div class="overflow-y-auto" v-else>
          <ul class="list-group list-group-flush">
            <li class="list-group-item mt-3" v-for="cart in carts" :key="cart.id">
              <div class="card mb-3 border-0" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img :src="cart.product.imageUrl" class="img-fluid rounded-2 w-75" alt="...">
                  </div>
                  <div class="col-md-6 d-flex align-items-center ">
                    <div class="card-body text-start">
                      <h5 class="card-title text-primary">
                        <span>{{ cart.product.category }} |</span>
                        {{ cart.product.title }}
                      </h5>
                      <input type="number" min="1" class="w-50 my-2 fs-4" v-model="cart.qty" @blur="updateCart(cart)">
                      <p class="card-text text-small text-success">$NT {{ cart.total }}</p>
                    </div>
                  </div>
                  <div class="col-md-2 d-flex align-items-center" @click.prevent="deleteCart(cart.id)">
                    <a href="" class="text-danger fs-4"><i class="bi bi-x-circle"></i> </a>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>

      <div class="my-2">
        <p class="text-success text-end fs-4 p-4">總計：$ <span>{{ total }}</span> 元</p>

        <router-link to="/cart" class="btn btn-primary w-100 fix-button fs-4 p-4" @click="closeOffcanvas"> 立即結帳
        </router-link>
        <!-- <button class="btn btn-primary w-100 fix-button fs-4 p-4 ">立即結帳</button> -->
      </div>
    </div>
  </div>
</template>

<script>
//pinia
import { mapActions, mapState } from 'pinia';
import cartStore from '@/stores/cartStore';
//bootstrap.js
import { Offcanvas } from 'bootstrap';

export default {
  data() {
    return {
      cartOffcanvas: "",
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'updateCart', 'deleteCart']),

    closeOffcanvas() {
      this.cartOffcanvas.hide();
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total']),
  },

  mounted() {
    this.cartOffcanvas = new Offcanvas(document.querySelector("#cartOffcanvasRight"));
    // console.log(this.cartOffcanvas);
    this.getCarts()
  },

}
</script>

<style lang="scss">
// bootstrap icon
@import "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css";
</style>


