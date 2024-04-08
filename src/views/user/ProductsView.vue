<template>
  <!-- swiper -->
  <!-- <Swiper-All-Products></Swiper-All-Products> -->
  <SwiperImages>
    <template #firstImage>
      <img
        src="https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="swiperImage"
      />
    </template>
    <template #secondImage>
      <img
        src="https://images.unsplash.com/photo-1450297166380-cabe503887e5?q=80&w=1730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="swiperImage"
      />
    </template>
    <template #thirdImage>
      <img
        src="https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="swiperImage"
      />
    </template>
  </SwiperImages>
  <main class="container">
    <div class="row py-7 py-lg-10">
      <!-- 側邊目錄 -->
      <aside class="d-none d-lg-block col-lg-2 h-bottom-line">
        <ul class="d-none d-md-block list-unstyled text-dark text-start">
          <!-- categoryList -->
          <li v-for="category in categories" :key="category">
            <RouterLink
              :to="{ path: `/products/${category}` }"
              class="d-inline-block py-2 mx-3 position-relative cursor-pointer"
              :class="{ active: this.$route.path === `/products/${category}` }"
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
              <li class="breadcrumb-item">
                <RouterLink :to="`/`">首頁</RouterLink>
              </li>
              <li class="breadcrumb-item">
                <a class="cursor-pointer" @click="changeCategory('全部商品 ALL')">商品</a>
              </li>

              <li class="breadcrumb-item active">
                {{ currentCategory }}
              </li>
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
        <!-- 排序顯示 -->
        <p class="text-end text-primary mb-5">排序方式：{{ showTitle }}</p>
        <!-- 商品列表:卡片 -->
        <template v-if="currentProducts.length !== 0">
          <div
            v-if="isBlock === true"
            class="row row-cols-2 row-cols-lg-4 gx-4 gy-6 mb-10 mb-lg-20"
          >
            <li
              class="col list-unstyled d-flex"
              v-for="product in currentProducts"
              :key="product.id"
            >
              <RouterLink
                :to="{ path: `/products/detail/${product.id}` }"
                class="card border-0 flex-grow-1"
              >
                <div class="h-border position-relative" style="width: 100%; padding-top: 100%">
                  <span
                    v-if="product.discount !== 10"
                    class="position-absolute start-0 bottom-0 z-1 bg-deco p-1 text-dark fs-8"
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
                <div class="card-body text-start d-flex flex-column">
                  <h5 class="card-title flex-grow-1 display-7 text-dark my-2">
                    {{ product.title }}
                  </h5>
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
                      >NT$ {{ product.price }}</span
                    >
                    <br /><span
                      class="card-text display-8 text-grey9F text-decoration-line-through"
                    >
                      NT$ {{ product.origin_price }}
                    </span>
                  </div>

                  <div class="d-flex gap-2">
                    <!-- 加入收藏點擊事件 -->
                    <button
                      type="button"
                      class="custom-btn custom-btn-secondary text-center w-100 border-1 add-to-cart"
                      @click.prevent="isLogin(product.id)"
                    >
                      <!-- 愛心 -->
                      <i
                        class="bi fs-5"
                        :id="product.id"
                        :class="likedProducts.includes(product.id) ? 'bi-heart-fill' : 'bi-heart'"
                      ></i>
                    </button>
                    <button
                      type="button"
                      class="custom-btn custom-btn-toGreen text-center w-100 border-1 add-to-cart"
                      @click.prevent="addToCart(product.id)"
                    >
                      <i class="bi bi-bag-check fs-6"></i>
                    </button>
                  </div>
                </div>
              </RouterLink>
            </li>
          </div>
          <!-- 商品列表:列表 -->
          <div class="container">
            <table v-if="isList === true" class="table mb-10 mb-lg-15">
              <tbody>
                <template v-for="item in currentProducts" :key="item.id">
                  <RouterLink :to="{ path: `/products/detail/${item.id}` }"
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
                            >NT$ {{ item.price }}</span
                          >

                          <br /><span
                            class="d-inline-block card-text display-8 text-grey9F text-decoration-line-through"
                          >
                            NT$ {{ item.origin_price }}
                          </span>
                        </td>

                        <td class="col-12 col-md-3 my-md-auto d-flex gap-2">
                          <!-- 加入收藏點擊事件 -->
                          <button
                            type="button"
                            class="custom-btn custom-btn-secondary text-center w-60 w-lg-100 border-1 add-to-cart"
                            @click.prevent="isLogin(item.id)"
                          >
                            <!-- 愛心 -->
                            <i
                              class="bi fs-5"
                              :id="item.id"
                              :class="[
                                likedProducts.includes(item.id) ? 'bi-heart-fill' : 'bi-heart'
                              ]"
                            ></i>
                          </button>
                          <button
                            href="#"
                            class="custom-btn custom-btn-toGreen text-center w-60 w-lg-100 border-1 add-to-cart"
                            @click.prevent="addToCart(item.id)"
                          >
                            <i class="bi bi-bag-check fs-6"></i>
                          </button>
                        </td>
                      </div></tr
                  ></RouterLink>
                </template>
              </tbody>
            </table>
          </div>
        </template>
        <div v-else-if="searchWord">
          <p class="text-dark text-center">
            搜尋不到「{{ searchWord }}」相關商品，你要不要試試其他關鍵字呢？
          </p>
        </div>
        <div v-else>
          <p class="text-dark text-center">
            目前「{{ currentCategory }}」還沒有上架商品～您可以逛逛其他分類
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
            :backButtonClass="currentProductsPage === 1 ? 'disabled' : 'back-button'"
            :nextButtonClass="
              currentProductsPage === Math.ceil(this.categoryProducts.length / 12)
                ? 'disabled'
                : 'next-button'
            "
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
import likeStore from '@/stores/likeStore'
import SwiperImages from '@/components/SwiperImages.vue'
import { mapState, mapActions } from 'pinia'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isShow: false,
      sortTitle: '',
      isBlock: true,
      isList: false,
      searchWord: '',
      //當前顯示分類
      currentCategory: '',
      //當前顯示分頁
      currentProductsPage: 1,
      //當前顯示關鍵字
      currentSearchWord: ''
    }
  },
  components: {
    SwiperImages
  },
  computed: {
    ...mapState(productStore, [
      'products',
      'categoryProducts',
      'currentProducts',
      'currentPage',
      'category',
      'categories',
      'showTitle',
      'isLoading',
      'loadingStatus'
    ]),
    ...mapState(likeStore, ['isLike', 'likedProducts'])
  },

  watch: {
    //監聽路由變化
    $route() {
      this.currentCategory = this.$route.params.category
      this.searchWord = this.$route.query.keyword
      this.currentProductsPage = 1
      this.getFilterProducts(this.currentCategory, 1, this.sortTitle, this.searchWord)
      this.likeInit()
    },

    currentProductsPage() {
      this.changeCurrentPage()
      this.likeInit()
    }
  },
  methods: {
    ...mapActions(productStore, ['getProducts', 'getFilterProducts', 'getSort']),
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(likeStore, ['likeInit', 'addToLike', 'isLogin']),

    //點選分類改變目前分類
    changeCategory(category) {
      this.currentCategory = category
      this.currentProductsPage = 1
      this.getFilterProducts(this.currentCategory, 1)
    },
    //點擊頁碼改變分頁
    changeCurrentPage() {
      this.getFilterProducts(this.currentCategory, this.currentProductsPage)
    },
    //切換卡片、條列顯示
    toggleDisplay(status) {
      this.likeInit()
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
      this.sortTitle = status
      this.getFilterProducts(this.currentCategory, this.currentProductsPage, status)
    },
    async fetchData() {
      await this.getProducts()
      this.currentCategory = this.$route.params.category
      this.searchWord = this.$route.query.keyword
      this.getFilterProducts(this.currentCategory, 1, 'timeN2O', this.searchWord)
    }
  },
  async mounted() {
    await this.fetchData()
    this.likeInit()
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/utils/_mixin.scss';
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.add-like {
  top: 10px;
  left: 14px;
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
