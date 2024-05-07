<template>
  <h1 class="fs-3 fs-lg-2 text-start mb-6 fw-bold">我的收藏</h1>
  <!-- 商品頁面 -->
  <div class="d-flex flex-wrap row row-cols-2 row-cols-md-4">
    <div
      class="col d-flex flex-column product-item mb-6"
      v-for="product in myFavoriteProducts"
      :key="product.id"
    >
      <!-- 點擊圖片可以連結到產品詳細頁面 -->
      <RouterLink
        :to="`/products/detail/${product.id}`"
        class="position-relative"
        style="width: 100%; padding-top: 100%"
      >
        <img
          :src="product.imageUrl"
          class="card-img-top position-absolute top-0 start-0 object-fit-cover h-100"
        />
      </RouterLink>
      <div class="card-body text-start d-flex flex-column justify-content-between p-1 flex-grow-1">
        <h5 class="card-title display-8 text-dark pt-2">
          <div class="mb-2">{{ product.title }}</div>
          <div class="text-grey66">{{ product.category }}</div>
        </h5>
        <p class="card-text display-8 text-primary py-2">NT${{ product.price }}</p>
      </div>
      <div class="card-footer">
        <button
          class="btn btn-primary w-100"
          type="button"
          @click="deleteFavoriteProduct(product.id)"
        >
          移除最愛
        </button>
      </div>
    </div>
  </div>
  <VueLoading :active="isLoading" />
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data() {
    return {
      isLoading: false,
      myFavoritesId: [],
      myFavoriteProducts: [],
      deleteId: ''
    }
  },
  methods: {
    //檢查是否登入
    checkLogin() {
      let loginUser = localStorage.getItem('userInfo')
      if (loginUser) {
        this.getFavorites()
      } else {
        Swal.fire({
          title: '您尚未登入?',
          icon: 'warning',
          confirmButtonColor: '#d33',
          cancelButtonColor: '#566b5a',
          confirmButtonText: '  是  '
        }).then(() => {
          this.$router.push('/memberLogin')
        })
      }
    },
    //取得該登入使用者的最愛名單(將最愛中UserID是該user的全部找出來放入myFavoritesId中)
    getFavorites() {
      this.isLoading = true
      this.myFavoritesId = []
      //找出使用者ID
      let loginUser = localStorage.getItem('userInfo')
      const loginUserId = JSON.parse(loginUser).id
      //從favorite中篩出該使用者ID
      const getFavoritesUrl = 'https://greensheep-json-server.onrender.com/favorites'
      this.$http
        .get(getFavoritesUrl)
        .then((res) => {
          this.isLoading = false
          res.data.forEach((item) => {
            if (item.userId === loginUserId) {
              this.myFavoritesId.push(item)
            }
          })
          this.getFavoriteProducts()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //找出最愛中的porduct(從所有產品中撈出有在最愛中的產品)
    getFavoriteProducts() {
      this.myFavoriteProducts = []
      const getProductsUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products/all`
      this.isLoading = true
      this.$http
        .get(getProductsUrl)
        .then((res) => {
          this.isLoading = false
          res.data.products.forEach((item) => {
            this.myFavoritesId.forEach((item2) => {
              if (item.id === item2.productId) {
                this.myFavoriteProducts.push(item)
              }
            })
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //刪除最愛功能
    deleteFavoriteProduct(id) {
      this.myFavoritesId.forEach((item) => {
        if (item.productId === id) {
          this.deleteId = item.id
        }
      })
      Swal.fire({
        title: '是否刪除該最愛?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#566b5a',
        cancelButtonText: '  否  ',
        confirmButtonText: '  是  '
      }).then((result) => {
        if (result.isConfirmed) {
          this.isLoading = true
          const deletefavoriteUrl = `https://greensheep-json-server.onrender.com/favorites/${this.deleteId}`
          this.$http
            .delete(deletefavoriteUrl)
            .then(() => {
              this.isLoading = false
              this.getFavorites()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '刪除最愛成功',
                showConfirmButton: false,
                toast: true,
                timer: 1500
              })
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    }
  },
  mounted() {
    this.checkLogin()
  }
}
</script>
