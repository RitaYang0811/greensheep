<template>
  <div class="container px-3 px-lg-10 mt-8 mt-lg-10 mb-7 mb-lg-10">
    <div class="row">
      <div class="col-12 col-lg-5 mb-9">
        <h1 class="display-3 fw-bold mb-4 text-start">待辦清單</h1>
        <div class="d-flex">
          <div class="w-50 bg-white m-2">
            <div class="py-8">
              <span class="d-block fs-2 mb-3 text-primary fw-medium">{{ allOrders.length }}</span>
              <span class="d-block fs-6 mb-3 text-primary">全部訂單</span>
            </div>
            <button type="button " class="custom-btn custom-btn-toGreen w-100" @click="toOrderPage">
              查看詳情
            </button>
          </div>
          <div class="w-50 bg-white m-2">
            <div class="py-8">
              <span class="d-block fs-2 mb-3 text-primary fw-medium">{{
                unpaidOrders.length
              }}</span>
              <span class="d-block fs-6 mb-3 text-primary">待付款訂單</span>
            </div>
            <button type="button " class="custom-btn custom-btn-toGreen w-100" @click="toOrderPage">
              查看詳情
            </button>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-7">
        <h2 class="display-3 fw-bold mb-4 text-start">通知</h2>
        <button type="button" class="btn btn-primary my-3" @click="lineGetOrder">
          管理員綁定新訂單通知
        </button>
        <div class="d-flex">
          <div class="notice-board w-100 bg-white m-2">
            <div class="p-3">
              <div
                v-for="newOrder in homeOrderInfo"
                :key="newOrder.id"
                class="card border border-primary rounded-3 mb-4"
                @click="toOrderPage"
              >
                <div class="card-body p-3 text-start cursor-pointer">
                  <div class="fs-6 text-dark fw-medium font-notosans mb-3">
                    訂單編號：{{ newOrder.id }}
                    <span class="float-end">
                      <i class="bi bi-exclamation-circle-fill text-danger"></i
                    ></span>
                  </div>

                  <p class="fs-7 text-primary">
                    恭喜你！{{ newOrder.passedTime }} 收到一筆新訂單喔！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import orderStore from '@/stores/orderStore.js'
import lineNotifyStore from '@/stores/lineNotifyStore.js'
import { mapState, mapActions } from 'pinia'
export default {
  data() {
    return {
      orderCreateTime: null,
      passedTime: null,
      homeOrderInfo: []
    }
  },

  methods: {
    ...mapActions(orderStore, ['getAllOrders', 'getNewOrders']),
    ...mapActions(lineNotifyStore, ['lineGetOrder']),
    toOrderPage() {
      this.$router.push('/admin/orders')
    },
    getHomeOrders() {
      const nowTime = Math.floor(new Date().getTime() / 1000)

      // 使用 map 方法從 allOrders 中提取 id 和 create_at
      const homeOrderInfo = this.unpaidOrders.map((order) => ({
        id: order.create_at,
        createTime: order.create_at,
        passedTime: this.calculatePassedTime(nowTime, order.create_at)
      }))

      // 將組成的新陣列賦值給 homeOrderInfo
      this.homeOrderInfo = homeOrderInfo
    },
    calculatePassedTime(nowTime, createTime) {
      const diff = nowTime - createTime // 計算現在時間與訂單創建時間的差值（秒）

      if (diff < 60) {
        // 如果差值小於60秒，使用秒來表示
        return diff + '秒前'
      } else if (diff >= 60 && diff < 60 * 60) {
        // 如果差值小於一小時（60分鐘），使用分鐘來表示
        const minutesPassed = Math.floor(diff / 60)
        return minutesPassed + '分鐘前'
      } else if (diff >= 60 * 60 && diff < 24 * 60 * 60) {
        // 如果差值小於一天（24小時），使用小時來表示
        const hoursPassed = Math.floor(diff / (60 * 60))
        return hoursPassed + '小時前'
      } else {
        // 否則，使用日和小時來表示
        const daysPassed = Math.floor(diff / (24 * 60 * 60))
        const remainingHours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60))
        return daysPassed + '天' + remainingHours + '小時前'
      }
    }
  },
  computed: {
    ...mapState(orderStore, [
      'allOrders',
      'unpaidOrders',
      'paidOrders',
      'deletedOrders',
      'doneOrders'
    ])
  },
  async mounted() {
    await this.getAllOrders()
    this.getHomeOrders()
  }
}
</script>
<style scoped lang="scss"></style>
