<template>

  <!-- <nav aria-label="breadcrumb">
    <ol class="breadcrumb mb-7 mb-md-15">
      <li class="breadcrumb-item"><a href="index.html">首頁</a></li>
      <li class="breadcrumb-item">
        <a href="9-1.memberInfo.html"> 會員資料</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">我的收藏</li>
    </ol>
  </nav> -->

  <h1 class="fs-3 fs-lg-2 text-start mb-6">我的收藏</h1>
  <!-- 商品頁面 -->
  <div class="d-flex flex-wrap mb-8 ">
    {{ console.log(myFavoriteProducts) }}
    <router-link :to="`/products/${product.id}`" target="_blank"
      class="d-flex flex-column product-item me-6 mb-6 w-25 m-4" v-for="product in myFavoriteProducts"
      :key="product.id">
      <div class="position-relative" style="width: 100%; padding-top: 100%">
        <img :src="product.imageUrl" class="card-img-top position-absolute top-0 start-0 object-fit-cover"
          alt="蔚藍海洋 - Freedom | 拉利瑪海紋石純銀項鍊" />
      </div>
      <div class="card-body text-start d-flex flex-column justify-content-between p-1 flex-grow-1">
        <h5 class="card-title display-8 text-dark pt-2">
          <div class="badge rounded-pill text-bg-warning">{{ product.category }}</div>
          <div class="mt-2">{{ product.title }}</div>
        </h5>
        <p class="card-text display-8 text-primary py-2">NT${{ product.price }}</p>
      </div>
    </router-link>


  </div>

  <!-- <nav aria-label="Page navigation ">
    <ul class="cus-pagination list-unstyled mb-20 mb-lg-25">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span class="material-icons fs-8 p-1"> navigate_before </span>
        </a>
      </li>
      <li class="page-item fs-8">
        <a class="page-link active" href="#" aria-current="page">1</a>
      </li>
      <li class="page-item fs-8">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item fs-8">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span class="material-icons fs-8 p-1"> navigate_next </span>
        </a>
      </li>
    </ul>
  </nav> -->
</template>

<script>
import Swal from 'sweetalert2'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data() {
    return {
      myFavoritesId: [],
      myFavoriteProducts: []
    }
  },
  methods: {
    checkLogin() {
      let loginUser = localStorage.getItem("userInfo")
      if (loginUser) {
        this.getFavorites()
        // return
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

    getFavorites() {
      let loginUser = localStorage.getItem("userInfo")
      const loginUserId = JSON.parse(loginUser).id
      // console.log(loginUserId)
      const getFavoritesUrl = 'https://greensheep-json-server.onrender.com/favorites'
      this.$http.get(getFavoritesUrl)
        .then((res) => {
          // console.log(res.data)
          res.data.forEach((item) => {
            if (item.userId == loginUserId) {
              this.myFavoritesId.push(item)
            }
          })
          // console.log(this.myFavoritesId)
          this.getFavoriteProducts()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getFavoriteProducts() {
      const getProductsUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/products/all`
      this.$http.get(getProductsUrl)
        .then((res) => {
          // console.log(res.data.products)
          res.data.products.forEach((item) => {
            this.myFavoritesId.forEach((item2) => {
              if (item.id == item2.productId) {
                this.myFavoriteProducts.push(item)
              }
            })
          })
          // console.log(this.myFavoriteProducts)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  mounted() {
    this.checkLogin()
    // this.getFavorites()

  }
}
</script>
