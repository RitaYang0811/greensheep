<template>
  <div class="container text-start px-3 px-lg-10 mt-8 mt-lg-10 mb-7 mb-lg-10">
    <h1 class="display-3 fw-bold mb-4">所有商品</h1>

    <!-- search bar -->
    <div class="position-relative">
      <input
        class="form-control mb-4 rounded-3 border border-primary bg-transparent"
        type="text"
        placeholder="請輸入要搜尋的商品"
        v-model="searchWords"
      />
      <i
        class="bi bi-search float-end fs-5 text-primary pe-2 mt-2 position-absolute top-0 end-0"
      ></i>
    </div>

    <!-- tab bar -->

    <ul
      class="tab-bar nav border-bottom border-primary mb-4 justify-content-center justify-content-lg-start"
    >
      <li class="nav-item">
        <a
          class="nav-link px-3 px-md-6 py-2 py-lg-4"
          :class="{ active: currentTab === '所有商品' }"
          href="#"
          @click.prevent="getProducts('所有商品')"
        >
          所有商品
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-3 px-md-6 py-2 py-lg-4"
          :class="{ active: currentTab === '已售完' }"
          href="#"
          @click.prevent="getProducts('已售完')"
        >
          已售完
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-3 px-md-6 py-2 py-lg-4"
          :class="{ active: currentTab === '未上架' }"
          href="#"
          @click.prevent="getProducts('未上架')"
          >未上架
        </a>
      </li>
    </ul>

    <!-- button -->
    <div class="d-flex flex-column flex-md-row justify-content-md-between">
      <div class="mb-3 mb-lg-5">
        <a
          href="#"
          class="btn btn-deco btn-md border border-1 border-primary text-primary me-4 py-3 px-6 rounded-3"
          @click.prevent="openModal('new')"
          >建 立 商 品</a
        >
        <!-- <a
          href="#"
          class="btn border border-1 border-primary btn-md text-primary py-3 px-5 rounded-3"
          @click.prevent="highLight"
          >編輯主打商品</a
        > -->
      </div>
      <div class="mb-3 position-relative">
        <a
          href="#"
          class="btn border border-1 border-primary btn-md text-primary p-3 rounded-3 float-end align-middle"
          @click.prevent="isShow = !isShow"
          >排序</a
        >
        <!-- 排序選單 -->
        <ul
          v-if="isShow === true"
          class="sort-list border border-primary bg-white rounded-2 text-primary list-unstyled position-absolute top-100 end-0 z-3"
          style="width: 150px"
        >
          <li class="px-4 py-2 border-bottom border-primary" @click.prevent="sort('new')">
            最近更新
          </li>
          <li class="px-4 py-2 border-bottom border-primary" @click.prevent="sort('priceL2H')">
            價格 由低至高
          </li>
          <li class="px-4 py-2 border-bottom border-primary" @click.prevent="sort('priceH2L')">
            價格 由高至低
          </li>
          <li class="px-4 py-2 border-bottom border-primary" @click.prevent="sort('timeN2O')">
            上架時間 由新到舊
          </li>
          <li class="px-4 py-2" @click.prevent="sort('timeO2N')">上架時間 由舊到新</li>
        </ul>
        <a
          href="#"
          class="btn border border-1 border-primary btn-md text-primary me-2 me-md-4 p-2 rounded-3 float-end"
          @click.prevent="toggleDisplay('isList')"
          ><i class="bi bi-ui-checks fs-5"></i
        ></a>
        <a
          href="#"
          class="btn border border-1 border-primary btn-md text-primary me-2 me-md-4 p-2 rounded-3 float-end"
          @click.prevent="toggleDisplay('isBlock')"
          ><i class="bi bi-ui-checks-grid fs-5"></i
        ></a>
      </div>
    </div>

    <!-- 排序方式 -->
    <div class="text-primary mb-2 text-start">排序：{{ showTitle }}</div>
    <!-- 商品列表 - 卡片 -->
    <div v-if="isBlock === true" class="row row-cols-2 row-cols-lg-5 g-2 g-md-3 mb-10 mb-lg-15">
      <div class="col" v-for="item in filterAllProducts" :key="item.id">
        <div class="card h-100 border border-1 border-primary position-relative">
          <input
            v-if="item.highLight"
            class="form-check-input"
            type="checkbox"
            value=""
            id=""
            v-model="item.highLight"
          />

          <img
            :src="item.imageUrl"
            class="block-img card-img-top h-100 w-100 object-fit-cover"
            :alt="item.title"
          />
          <div class="card-body p-0 px-2 pt-2">
            <h5 class="card-title block-title text-dark mb-1" style="height: 45px">
              <span
                v-if="item.highLight"
                class="float-end block-highlight bg-primary text-white py-1 px-2 rounded-pill"
                >主打</span
              >{{ item.title }}
            </h5>
            <p class="card-text fs-8 text-dark mb-1">{{ item.stockNum }} {{ item.unit }} 商品</p>

            <p class="card-text fs-7 text-dark mb-2">NT$ {{ item.origin_price }}</p>

            <div
              class="card-foot d-flex justify-content-evenly border-top border-1 border-primary py-2"
            >
              <a class="cursor-pointer" @click="openModal('edit', item)"
                ><i class="bi bi-pencil-fill text-dark fs-6"></i
              ></a>
              <a class="cursor-pointer" @click="openModal('delete', item)"
                ><i class="bi bi-trash3-fill text-dark fs-6"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品列表 - 列表 -->
    <table v-if="isList === true" class="table mb-10 mb-lg-15">
      <tbody>
        <template v-for="item in filterAllProducts" :key="item.id">
          <tr class="product-item row mb-3 bg-white rounded-3 align-content-center">
            <th class="col-4 col-md-2 my-auto px-4 py-4 border-bottom-0">
              <img
                :src="item.imageUrl"
                class="img-fluid rounded object-fit-cover"
                :alt="item.title"
                style="width: 98px; height: 98px"
              />
            </th>
            <div class="col-8 col-md-10 row flex-wrap justify-content-between">
              <td class="col-12 col-md-6 my-auto">
                <span class="bg-primary text-white py-1 px-2 rounded-pill fs-9 float-end"
                  >主打</span
                >
                <h5 class="card-title display-6 text-dark">
                  {{ item.title }}
                </h5>
              </td>
              <td class="col-12 col-md-auto my-auto">
                <p class="card-text fs-7 text-dark">5 件</p>
              </td>
              <td class="col-12 col-md-auto my-auto">
                <p class="card-text fs-7 text-dark">NT ${{ item.origin_price }}</p>
              </td>
              <td class="col-12 col-md-auto my-auto">
                <a class="d-inline-block cursor-pointer mx-2 py-2" @click="openModal('edit', item)"
                  ><i class="bi bi-pencil-fill fs-7"></i
                ></a>
                <a
                  class="d-inline-block cursor-pointer mx-2 py-2"
                  @click="openModal('delete', item)"
                  ><i class="bi bi-trash3-fill fs-7"></i
                ></a>
              </td>
            </div>
          </tr>
        </template>
      </tbody>
    </table>
    <!-- add new modal -->
    <AddProductModal
      ref="addModal"
      :temp-product="tempProduct"
      :is-New="isNew"
      @confirm-update="confirmUpdate"
    ></AddProductModal>
    <!-- delete modal -->
    <DeleteProductModal
      ref="deleteModal"
      :temp-product="tempProduct"
      @confirm-delete="confirmDelete"
    ></DeleteProductModal>
    <!-- pagiNation -->
    <PagiNation :pagination="allPagination" @update-page="updatePage" />
    <VueLoading v-model:active="isLoading" />
  </div>
</template>

<script>
import adProductStore from '@/stores/adProductStore.js'
import AddProductModal from '@/components/AddProductModal.vue'
import DeleteProductModal from '@/components/DeleteProductModal.vue'
import PagiNation from '@/components/PagiNation.vue'
import Swal from 'sweetalert2'
import axios from 'axios'
import { mapState, mapActions } from 'pinia'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
export default {
  data() {
    return {
      searchWords: '',
      isNew: true,
      isShow: false,
      showTitle: '',
      isBlock: true,
      isList: false,
      isLoading: false,
      tempProduct: { imagesUrl: [], gifts: [] },
      highLightInput: false,
      currentPage: null
    }
  },
  components: {
    AddProductModal,
    DeleteProductModal,
    PagiNation
  },
  computed: {
    ...mapState(adProductStore, ['allProducts', 'currentTab', 'allPagination']),
    filterAllProducts() {
      return this.allProducts.filter((product) => product.title.match(this.searchWords))
    }
  },
  methods: {
    ...mapActions(adProductStore, ['getProducts']),
    openModal(status, item) {
      if (status === 'new') {
        this.tempProduct = { imagesUrl: [], gifts: [] }
        this.$refs.addModal.open()
      } else if (status === 'edit') {
        this.$refs.addModal.open()
        this.tempProduct = item
        this.isNew = false
      } else if (status === 'delete') {
        this.$refs.deleteModal.open()
        this.tempProduct = item
      }
    },
    closeModal(status) {
      if (status === 'new') {
        this.addModal.hide()
      }
    },
    //切換卡片、條列顯示
    toggleDisplay(status) {
      if (status === 'isBlock') {
        this.isBlock = true
        this.isList = false
      } else if (status === 'isList') {
        this.isBlock = false
        this.isList = true
      }
    },
    //排列順序切換
    sort(status) {
      this.isShow = false
      if (status === 'new') {
        this.showTitle = '最近更新'
        return this.allProducts.sort((a, b) => b.updateTime - a.updateTime)
      } else if (status === 'priceH2L') {
        this.showTitle = '價格 - 由高到低'
        return this.allProducts.sort((a, b) => b.price - a.price)
      } else if (status === 'priceL2H') {
        this.showTitle = '價格 - 由低到高'
        return this.allProducts.sort((a, b) => a.price - b.price)
      } else if (status === 'timeN2O') {
        this.showTitle = '上架時間 - 由新到舊'
        return this.allProducts.sort((a, b) => b.createTime - a.createTime)
      } else if (status === 'timeO2N') {
        this.showTitle = '上架時間 - 由舊到新'
        return this.allProducts.sort((a, b) => a.createTime - b.createTime)
      }
    },
    //確認編輯
    confirmUpdate(isNew) {
      const apiUrl = isNew
        ? `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/product`
        : `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/product/${this.tempProduct.id}`
      const axiosMethod = isNew ? axios.post : axios.put
      if (isNew) {
        const createTime = Date.now()
        this.tempProduct.createTime = createTime
      } else {
        const updateTime = Date.now()
        this.tempProduct.updateTime = updateTime
      }
      axiosMethod(apiUrl, {
        data: this.tempProduct
      })
        .then(() => {
          this.getProducts(this.currentTab, this.currentPage)
          this.$refs.addModal.close()
          this.tempProduct = { imagesUrl: [], gifts: [] }
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '更新商品成功',
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //確認刪除
    confirmDelete(id) {
      axios
        .delete(`${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/product/${id}`)
        .then((res) => {
          console.log(res)
          this.getProducts(this.currentTab)
          this.$refs.deleteModal.close()
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '刪除成功!',
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //點擊分頁
    updatePage(page) {
      this.currentPage = page
      this.getProducts(this.currentTab, page)
    }
  },
  mounted() {
    this.getProducts('所有商品')
  }
}
</script>

<style scope lang="scss">
@import '@/assets/scss/utils/mixin.scss';
.block {
  &-img {
    height: 250px;
    @include pad {
      height: 200px;
    }
  }
  &-title {
    font-size: 20px;
    @include mobile {
      font-size: 16px;
    }
  }
  &-highlight {
    font-size: 14px;
  }
}
.sort-list {
  overflow: hidden;
  li:hover {
    background-color: #e6e6e1;
    cursor: pointer;
  }
}
.product-item {
  cursor: pointer;
  &:hover {
    background: red;
  }
}
</style>
