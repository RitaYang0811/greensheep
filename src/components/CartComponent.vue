<template>
  <!-- mx my 可以修改購物車彈出時旁邊的留白 -->
  <div
    class="offcanvas offcanvas-end mx-sm-5 mx-0 p-3"
    data-bs-backdrop="false"
    data-bs-scroll="true"
    tabindex="-1"
    id="cartOffcanvasRight"
    aria-labelledby="offcanvasRightLabel"
    style="max-width: 90%"
  >
    <div class="offcanvas-header">
      <h3 class="offcanvas-title" id="offcanvasRightLabel"></h3>
      <button
        type="button"
        class="btn-close p-2"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body d-flex flex-column justify-content-between">
      <div class="">
        <h3 class="text-center mb-5 fw-bold">購物車</h3>
        <div class="fs-4 text-primary mt-10" v-if="!carts.length">
          <p class="mb-2">目前購物車沒有商品</p>
          <RouterLink
            to="/products/全部商品%20ALL"
            @click="closeOffcanvas"
            class="mt-2 link-primary fw-medium cursor-pointer"
            >點我去購物！</RouterLink
          >
        </div>
        <div class="overflow-y-auto" v-else>
          <ul class="list-group list-group-flush">
            <li class="list-group-item mt-3" v-for="cart in carts" :key="cart.id">
              <div class="card mb-3 border-0" style="max-width: 540px">
                <div class="row g-0 d-md-flex flex-wrap justify-content-center">
                  <div
                    class="col-md-4 d-flex align-items-center justify-content-center"
                    style="max-width: 120px; max-height: 120px"
                  >
                    <img
                      :src="cart.product.imageUrl"
                      class="img-fluid object-fit-cover rounded-2 w-100 h-100"
                      :alt="cart.product.title"
                    />
                  </div>
                  <div class="col-md-7 d-flex align-items-center">
                    <div class="card-body text-md-start text-center my-2 my-md-0">
                      <div class="">
                        <span class="mb-2 badge rounded-pill text-bg-primary"
                          >{{ cart.product.category }}
                        </span>
                        <h5 class="card-title text-primary">
                          {{ cart.product.title }}
                        </h5>
                      </div>
                      <div class="">
                        <button
                          class="btn btn-link text-primary pe-1"
                          @click.prevent="cart.qty--"
                          @click="updateCart(cart)"
                          :disabled="cart.qty <= 1"
                        >
                          <i class="bi bi-dash-circle fs-4"></i>
                        </button>
                        <input
                          type="number"
                          min="1"
                          class="w-25 my-2 fs-5"
                          v-model="cart.qty"
                          disabled
                        />
                        <button
                          class="btn btn-link text-primary ps-0 ps-1"
                          @click.prevent="cart.qty++"
                          @click="updateCart(cart)"
                        >
                          <i class="bi bi-plus-circle fs-4"></i>
                        </button>
                      </div>
                      <p class="card-text text-small text-dark">NT$ {{ parseInt(cart.total) }}</p>
                    </div>
                  </div>
                  <div
                    class="col-md-1 d-flex align-items-center justify-content-center"
                    @click.prevent="deleteCart(cart.id)"
                  >
                    <a href="" class="text-grey66 fs-4"><i class="bi bi-trash"></i> </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="my-2">
        <p class="text-success text-end fs-4 p-4 text-dark border-top">
          總計：$ <span>{{ parseInt(total) }}</span> 元
        </p>
        <RouterLink
          to="/cart"
          class="btn btn-primary w-100 fs-4 p-4"
          @click="closeOffcanvas"
          :class="carts.length ? '' : 'disabled'"
        >
          立即結帳
        </RouterLink>
      </div>
    </div>
  </div>
  <VueLoading :active="isLoading" />
</template>

<script>
//pinia
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cartStore'
//bootstrap.js
import { Offcanvas } from 'bootstrap'

export default {
  data() {
    return {
      cartOffcanvas: ''
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCarts', 'updateCart', 'deleteCart']),

    closeOffcanvas() {
      this.cartOffcanvas.hide()
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total', 'isLoading'])
  },

  mounted() {
    this.cartOffcanvas = new Offcanvas(document.querySelector('#cartOffcanvasRight'))
    this.getCarts()
  }
}
</script>
