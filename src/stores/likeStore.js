import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const serverUrl = 'https://greensheep-json-server.onrender.com'

export default defineStore('likeStore', {
  state: () => ({
    isLike: false,
    likedProducts: []
  }),
  actions: {
    // 收藏初始化
    async likeInit(id) {
      const user = JSON.parse(localStorage.getItem('userInfo'))
      if (user === null) {
        this.isLike = false
        return false
      }
      await axios
        .get(`${serverUrl}/favorites?userId=${user.id}`)
        .then((res) => {
          if (res.data.length) {
            this.likedProducts = res.data.map((item) => item.productId.toString())

            this.isLike = this.likedProducts.includes(id)
          } else {
            this.likedProducts = []
            this.isLike = false
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    // 加入最愛
    async addToLike(productId) {
      const likeProduct = {
        productId: `${productId}`,
        userId: `${JSON.parse(localStorage.getItem('userInfo')).id}`
      }

      // 確認有沒有加入過
      const res = await axios.get(
        `${serverUrl}/favorites?userId=${likeProduct.userId}&&productId=${likeProduct.productId}`
      )
      // 移除最愛
      if (res.data.length) {
        axios.delete(`${serverUrl}/favorites/${res.data[0].id}`).then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '已經移除收藏囉!',
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
          // this.isLike = false
          const index = this.likedProducts.findIndex((product) => product === productId)
          if (index > -1) {
            this.likedProducts.splice(index, 1) // 從索引位置刪除一個元素
          }
          this.isLike = this.likedProducts.includes(productId.toString())
        })
      } else {
        // 加入最愛
        axios
          .post(`${serverUrl}/favorites`, likeProduct)
          .then(() => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: '已加入收藏!',
              showConfirmButton: false,
              toast: true,
              timer: 1500
            })
            // this.isLike = true
            this.likedProducts.push(productId)
            this.isLike = this.likedProducts.includes(productId.toString())
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    // 先判斷有沒有登入會員，沒有會請使用者登入
    async isLogin(productId) {
      const user = JSON.parse(localStorage.getItem('userInfo'))
      if (user === null) {
        Swal.fire({
          icon: 'warning',
          title: '請先登入會員喔！',
          showConfirmButton: false,
          timer: 1500
        })
        this.$router.push({ name: 'MemberLogin' })
        return false
      }

      await axios
        .get(`${serverUrl}/600/users/${user.id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        })
        .then(() => {
          this.addToLike(productId)
        })
        .catch(() => {
          Swal.fire({
            icon: 'warning',
            title: '請先登入會員喔！',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push({ name: 'MemberLogin' })
        })
    }
  }
})
