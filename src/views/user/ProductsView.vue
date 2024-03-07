<template>
  <!-- swiper -->
  <Swiper-All-Products></Swiper-All-Products>
  <main class="container">
    <div class="row py-7 py-lg-10">
      <!-- 側邊目錄 -->
      <aside class="d-none d-lg-block col-lg-2 h-bottom-line">
        <ul class="d-none d-md-block list-unstyled text-dark text-start">
          <li>
            <RouterLink
              to="/products/productsAll"
              class="d-inline-block py-2 mx-3 position-relative cursor-pointer"
              @click="changeCategory('all')"
              >全部商品 ALL</RouterLink
            >
          </li>
          <!-- categoryList -->
          <li v-for="category in categories" :key="category + 123">
            <RouterLink
              :to="`/products/${category}?category=${category}`"
              class="d-inline-block py-2 mx-3 position-relative cursor-pointer"
              @click="changeCategory(category)"
              >{{ category }}
            </RouterLink>
          </li>
        </ul>
      </aside>
      <div class="col-lg-10 py-2">
        <!-- 麵包屑導航+排序按鈕 -->
        <div class="d-flex justify-content-between mb-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link :to="`/`">首頁</router-link></li>
              <li class="breadcrumb-item">
                <routerLink to="/products" class="cursor-pointer" @click="changeCategory('all')"
                  >商品</routerLink
                >
              </li>

              <li
                v-if="currentCategory"
                class="breadcrumb-item active"
                @click="changeCategory(currentCategory)"
              >
                {{ currentCategory }}
              </li>
              <li v-else class="breadcrumb-item active">全部商品 ALL</li>
            </ol>
          </nav>
          <div class="mb-3 position-relative">
            <a
              href="#"
              class="btn fs-8 border border-primary btn-md text-primary py-2 px-3 float-end align-middle"
              @click.prevent="isShow = !isShow"
              >排序</a
            >
            <!-- 排序選單 -->
            <ul
              v-if="isShow === true"
              class="sort-list border border-primary bg-white rounded-2 text-primary list-unstyled position-absolute top-100 end-0 z-3"
              style="width: 200px"
            >
              <li
                class="px-4 py-2 border-bottom border-primary cursor-pointer"
                @click.prevent="sort('new')"
              >
                最近更新
              </li>
              <li
                class="px-4 py-2 border-bottom border-primary cursor-pointer"
                @click.prevent="sort('priceL2H')"
              >
                價格 由低至高
              </li>
              <li
                class="px-4 py-2 border-bottom border-primary cursor-pointer"
                @click.prevent="sort('priceH2L')"
              >
                價格 由高至低
              </li>
              <li
                class="px-4 py-2 border-bottom border-primary cursor-pointer"
                @click.prevent="sort('timeN2O')"
              >
                上架時間 由新到舊
              </li>
              <li class="px-4 py-2 cursor-pointer" @click.prevent="sort('timeO2N')">
                上架時間 由舊到新
              </li>
            </ul>
            <a
              href="#"
              class="btn border border-primary btn-md text-primary me-2 me-md-4 py-1 px-2 float-end"
              :class="[{ 'bg-primary': isList }, { 'text-white': isList }]"
              @click.prevent="toggleDisplay('isList')"
            >
              <i class="bi bi-list fs-5"></i>
            </a>
            <a
              href="#"
              class="btn border border-primary btn-md text-primary me-2 me-md-4 py-1 px-2 float-end"
              :class="[{ 'bg-primary': isBlock }, { 'text-white': isBlock }]"
              @click.prevent="toggleDisplay('isBlock')"
              ><i class="bi bi-grid-3x2-gap-fill fs-5"></i>
            </a>
          </div>
        </div>
        <!-- 商品列表:卡片 -->
        <template v-if="currentProducts.length !== 0">
          <div
            v-if="isBlock === true"
            class="row row-cols-2 row-cols-lg-4 gx-4 gy-6 mb-10 mb-lg-20"
          >
            <li
              class="col list-unstyled h-100 column"
              v-for="product in currentProducts"
              :key="product.id"
            >
              <router-link :to="`/products/${product.id}`" class="card border-0">
                <div class="h-border position-relative" style="width: 100%; padding-top: 100%">
                  <span
                    v-if="product.discount !== 10"
                    class="position-absolute start-0 bottom-0 z-2 bg-deco p-1 text-dark fs-8"
                    >{{ product.discount }}折</span
                  >
                  <img
                    :src="product.imageUrl"
                    class="show position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                  />
                  <img
                    :src="product.imageUrl2"
                    class="change position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                  />
                </div>
                <div class="card-body text-start">
                  <h5 class="card-title display-7 text-dark my-2">{{ product.title }}</h5>
                  <!-- v-if 無折扣 -->
                  <p
                    v-if="product.origin_price === product.price"
                    class="card-text display-8 text-primary mt-3 mb-6"
                  >
                    NT$ {{ product.origin_price }}
                  </p>

                  <!-- v-else 打折 -->
                  <div v-else class="mt-3 mb-1">
                    <span class="card-text display-8 text-primary my-2 me-2"
                      >NT$ {{ product.origin_price }}</span
                    >
                    <br /><span
                      class="card-text display-8 text-grey9F text-decoration-line-through"
                    >
                      NT$ {{ product.price }}
                    </span>
                  </div>
                  <button
                    href="#"
                    class="custom-btn custom-btn-toGreen text-center w-100 border-1 add-to-cart"
                    @click.prevent="addToCart(product.id)"
                  >
                    <i class="bi bi-bag-check fs-6"></i>
                  </button>
                </div>
              </router-link>
            </li>
          </div>
          <!-- 商品列表:列表 -->
          <div class="container">
            <table v-if="isList === true" class="table mb-10 mb-lg-15">
              <tbody>
                <template v-for="item in currentProducts" :key="item.id">
                  <router-link :to="`/products/${item.id}`"
                    ><tr
                      class="product-item row mb-3 bg-white rounded-3 align-content-center py-2 py-lg-1"
                    >
                      <th class="col-5 col-md-3 my-auto px-4 py-4 border-bottom-0">
                        <img
                          :src="item.imageUrl"
                          class="list-img img-fluid rounded object-fit-cover"
                          :alt="item.title"
                        />
                      </th>
                      <div class="col-7 col-md-9 row flex-wrap justify-content-between">
                        <td class="col-12 col-md-4 mb-3 my-md-auto">
                          <span
                            v-if="item.highLight"
                            class="bg-primary text-white py-1 px-2 rounded-pill fs-9 float-end"
                            >主打</span
                          >
                          <h5 class="card-title display-6 text-dark">
                            {{ item.title }}
                          </h5>
                        </td>

                        <!-- v-if 無折扣 -->

                        <td
                          v-if="item.origin_price === item.price"
                          class="col-12 col-md-auto my-md-auto"
                        >
                          <p class="card-text fs-7 text-dark">NT ${{ item.origin_price }}</p>
                        </td>

                        <!-- v-else 打折 -->
                        <td v-else class="col-12 col-md-auto my-auto">
                          <span
                            v-if="item.discount !== 10"
                            class="card-text fs-8 bg-deco py-1 px-1 me-2"
                            >{{ item.discount }}折</span
                          >

                          <span class="d-inline-block card-text fs-7 text-dark mb-2"
                            >NT$ {{ item.origin_price }}</span
                          >

                          <br /><span
                            class="d-inline-block card-text display-8 text-grey9F text-decoration-line-through"
                          >
                            NT$ {{ item.price }}
                          </span>
                        </td>

                        <td class="col-12 col-md-2 my-md-auto">
                          <button
                            href="#"
                            class="custom-btn custom-btn-toGreen text-center w-60 w-lg-100 border-1 add-to-cart"
                            @click.prevent="addToCart(item.id)"
                          >
                            <i class="bi bi-bag-check fs-6"></i>
                          </button>
                        </td>
                      </div></tr
                  ></router-link>
                </template>
              </tbody>
            </table>
          </div>
        </template>
        <div v-else>
          <p class="text-dark text-center">
            目前分類「{{ currentCategory }}」還沒有商品～你可以逛逛其他分類
          </p>
        </div>
        <!-- 分頁 -->

        <div v-if="currentProducts.length !== 0" class="text-center va-pagination">
          <vue-awesome-paginate
            :total-items="categoryProducts.length"
            :items-per-page="12"
            :max-pages-shown="3"
            v-model="currentProductsPage"
            @click="changeCurrentPage"
            pagination-container-class="cus-pagination "
            paginate-buttons-class="page-link"
            number-buttons-class="fs-8"
            active-page-class="active"
          >
            <template #prev-button>
              <span class="material-icons fs-8 p-1"> navigate_before </span>
            </template>
            <template #next-button>
              <span class="material-icons fs-8 p-1"> navigate_next </span>
            </template>
          </vue-awesome-paginate>
        </div>
        <div
          v-if="loadingStatus.loadingGetProducts"
          class="d-flex justify-content-center align-items-center"
          style="min-height: 360px"
        >
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <!-- loading -->
        <VueLoading v-model:active="isLoading" />
      </div>
    </div>
  </main>
</template>

<script>
import productStore from '@/stores/productStore'
import cartStore from '@/stores/cartStore'
import searchStore from '@/stores/searchStore'
import SwiperAllProducts from '@/components/SwiperAllProducts.vue'
import PagiNation from '@/components/PagiNation.vue'
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {
      isShow: false,
      showTitle: '',
      isBlock: true,
      isList: false,
      searchWord: '',
      isLoading: false,
      currentCategory: '',
      currentProductsPage: 1
    }
  },
  components: {
    SwiperAllProducts
  },
  computed: {
    ...mapState(productStore, [
      'products',
      'categoryProducts',
      'currentProducts',
      'currentPage',
      'category',
      'categories',
      'loadingStatus'
    ]),
    ...mapState(searchStore, ['searchQuery'])
  },

  watch: {
    //監聽路由變化後重新取得分類產品
    $route(to, from) {
      this.currentCategory = this.category
      this.loadData()
      console.log('路由變化後重新取得分類產品')
    },
    currentProductsPage(newVal) {
      console.log(newVal)
      this.changeCurrentPage()
    }
  },
  methods: {
    ...mapActions(productStore, [
      'getProducts',
      'getFilterProducts', //分類頁數關鍵字過濾產品
      'getSort'
    ]),
    ...mapActions(cartStore, ['addToCart']),

    loadData() {
      this.getFilterProducts()
    },
    //點選分類改變目前分類
    changeCategory(category) {
      this.currentProductsPage = 1
      category === 'all' ? (this.currentCategory = '') : (this.currentCategory = category)
      this.getFilterProducts(this.currentCategory, 1)
    },
    //改變頁碼分頁
    changeCurrentPage() {
      this.getFilterProducts(this.currentCategory, this.currentProductsPage)
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
      this.getFilterProducts(this.currentCategory, this.currentProductsPage, status)
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/_mixin.scss';
.card-title {
  height: 16px;
}
.list-img {
  width: 150px;
  height: 150px;
  @include pad {
    width: 120px;
    height: 120px;
  }
}
</style>
