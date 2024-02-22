<template>
  <div class="container text-start px-10 pt-10">
    <h1 class="display-3 fw-bold mb-4">所有商品</h1>

    <!-- search bar -->
    <div class="border border-1 border-primary rounded-3 mb-4" style="height: 40px">
      <i class="bi bi-search float-end fs-5 text-primary pe-2 mt-2"></i>
    </div>
    <!-- tab bar -->

    <ul class="tab-bar nav border-bottom border-primary mb-4">
      <li class="nav-item">
        <a class="nav-link px-6 py-4" :class="{ active: currentTab === '所有優惠券' }" href="#">
          所有商品
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-6 py-4" :class="{ active: currentTab === '有效' }" href="#">
          已售完
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-6 py-4" :class="{ active: currentTab === '尚未生效' }" href="#">
          未啟用
        </a>
      </li>
    </ul>
    <!-- button -->
    <div class="mb-5">
      <a
        href="#"
        class="btn btn-deco btn-md border border-1 border-primary text-primary me-4 py-3 px-6 rounded-3"
        @click.prevent="openModal('new')"
        >建 立 商 品</a
      >
      <a
        href="#"
        class="btn border border-1 border-primary btn-md text-primary py-3 px-5 rounded-3"
        @click.prevent="openModal('highlight')"
        >主打商品管理</a
      >

      <a
        href="#"
        class="btn border border-1 border-primary btn-md text-primary p-3 rounded-3 float-end align-middle"
        @click.prevent="openModal('new')"
        >排序</a
      >
      <a
        href="#"
        class="btn border border-1 border-primary btn-md text-primary me-4 p-2 rounded-3 float-end"
        @click.prevent="openModal('new')"
        ><i class="bi bi-ui-checks fs-5"></i
      ></a>
      <a
        href="#"
        class="btn border border-1 border-primary btn-md text-primary me-4 p-2 rounded-3 float-end"
        @click.prevent="openModal('new')"
        ><i class="bi bi-ui-checks-grid fs-5"></i
      ></a>
    </div>
    <!-- 排序方式 -->
    <div class="text-primary mb-2 text-end">排序：最近更新</div>
    <!-- 商品列表 - 卡片 -->
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <div class="col" v-for="item in allProducts" :key="item.id">
        <div class="card h-100 border border-1 border-primary position-relative">
          <span class="check-box">
            <input class="form-check-input" type="checkbox" value="" id=""
          /></span>

          <img
            :src="item.imageUrl"
            class="card-img-top h-100 w-100 object-fit-cover"
            :alt="item.title"
            style="height: 250px"
          />
          <div class="card-body p-0 px-2 pt-2">
            <h5 class="card-title display-6 text-dark mb-2" style="height: 40px">
              <span class="float-end bg-primary text-white py-1 px-2 fs-8">主打</span
              >{{ item.title }}
            </h5>
            <p class="card-text fs-7 text-dark mb-2">5 件商品</p>

            <p v-if="item.origin_price === item.price" class="card-text fs-7 text-dark mb-2">
              NT$ {{ item.origin_price }}
            </p>
            <p v-else class="card-text my-2">
              <span class="card-text fs-7 text-grey66 mb-2 text-decoration-line-through">
                NT$ {{ item.origin_price }}</span
              ><span class="card-text fs-7 text-dark mb-2"> NT$ {{ item.price }}</span>
            </p>
            <div
              class="card-foot d-flex justify-content-evenly border-top border-1 border-primary py-2"
            >
              <a class="cursor-pointer" @click="openModal('edit')"
                ><i class="bi bi-pencil-fill text-dark fs-6"></i
              ></a>
              <a class="cursor-pointer" @click="openModal('delete')"
                ><i class="bi bi-trash3-fill text-dark fs-6"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品列表 - 列表 -->
    <table class="table table-hover align-middle">
      <thead>
        <tr>
          <th style="width: 10%"></th>
          <th style="width: 35%">商品名</th>
          <th style="width: 10%">庫存</th>
          <th style="width: 10%">價格</th>
          <th style="width: 10%"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <img
              src="@/assets/images/product-12.jpg"
              class="img-fluid rounded object-fit-cover"
              alt="..."
              style="width: 98px; height: 98px"
            />
          </th>
          <td>
            <h5 class="card-title display-6 text-dark">
              <span class="bg-primary text-white py-1 px-2 fs-8 me-4">主打商品</span>經典鑽戒
            </h5>
          </td>
          <td><p class="card-text fs-7 text-dark">5 件商品</p></td>
          <td><p class="card-text fs-7 text-dark">NT $2580</p></td>
          <td>
            <a class="cursor-pointer mx-6"><i class="bi bi-pencil-fill fs-6"></i></a>
            <a class="cursor-pointer mx-6"><i class="bi bi-trash3-fill fs-6"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- add new modal -->
    <addProductModal ref="addModal" :temp-product="tempProduct" :is-New="isNew"></addProductModal>
  </div>
</template>

<script>
import adProductStore from '@/stores/adProductStore.js'
import addProductModal from '@/components/addProductModal.vue'

import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      isNew: true,
      tempProduct: { imagesUrl: [] }
    }
  },
  components: {
    addProductModal
  },
  computed: {
    ...mapState(adProductStore, ['allProducts'])
  },
  methods: {
    ...mapActions(adProductStore, ['getProducts']),
    openModal(status) {
      if (status === 'new') {
        this.$refs.addModal.open()
      } else if (status === 'edit') {
        this.$refs.addModal.open()
        // 將當前點擊的商品資料傳入 tempProduct
        this.allProducts = this.tempProduct
        this.isNew = false
      } else if (status === 'delete') {
      }
    },
    closeModal(status) {
      if (status === 'new') {
        this.addModal.hide()
      }
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style scope lang="scss"></style>
