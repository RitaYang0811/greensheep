<template>
  <div class="accordion-item my-5 bg-white" v-for="order in orders" :key="order.id">
    <h2 class="accordion-header" @click="toggleCollapse(order.id)">
      <!-- data-bs-target要記得改，綁定order.id -->
      <button
        class="accordion-button fs-6 fw-bold bg-primary text-white"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${order.id}`"
        aria-expanded="true"
      >
        訂單編號：{{ order.create_at }}
        <span
          :class="order.is_paid ? 'text-bg-primary' : 'text-bg-danger'"
          class="ms-10 badge rounded-pill text-bg-primary fs-8 fw-light"
          >{{ order.is_paid ? '已付款' : '未付款' }}</span
        >
        <span
          class="ms-5 badge rounded-pill text-bg-primary fs-8 fw-light"
          v-if="order?.orderStatus?.done"
          >已完成</span
        >
        <span class="ms-5 badge rounded-pill text-bg-danger fs-8 fw-light" v-if="order?.is_deleted"
          >已刪除</span
        >
      </button>
    </h2>

    <div :id="order.id" class="accordion-collapse collapse show" ref="collape">
      <div class="accordion-body p-1">
        <!-- 單筆產品(商品渲染處) -->
        <!-- products為陣列格式，用Object.values來拆開 -->
        <div
          class="d-flex align-items-center justify-content-between my-1"
          v-for="product in Object.values(order.products)"
          :key="product.id"
        >
          <div class="ms-3 d-flex align-items-center">
            <span class="fw-medium text-grey66 fs-8 m-2"> {{ product.product.category }} / </span>
            <h3 class="fs-6 fw-medium text-dark">
              {{ product.product.title }}
            </h3>
          </div>
          <div class="me-7 d-flex text-grey99">
            <span class="mx-3">數量：{{ product.qty }} </span>
            <p>總價：{{ product.total }}</p>
          </div>
        </div>
        <div class="my-4 border border-1"></div>
        <div class="d-flex justify-content-between mx-4 text-grey66">
          <p class="ms-1">
            優惠券：
            <span class="ms-2 fs-8 text-secondary fw-medium">
              {{ Object.values(order.products)[0]?.coupon?.code }}
            </span>
          </p>
          <p class="text-primary fw-medium">
            總金額：NT$
            {{
              Object.values(order.products)[0]?.coupon?.discount_price
                ? parseInt(order.total) - Object.values(order.products)[0]?.coupon?.discount_price
                : parseInt(order.total)
            }}
          </p>
        </div>
        <div class="my-4 border"></div>
        <!-- 用戶資料渲染處 -->
        <div class="mb-4">
          <div class="fs-6 text-primary ms-3">
            <p class="mx-2 mb-3">客戶姓名：{{ order.user.name }}</p>
            <p class="mx-2 mb-3">客戶電話：{{ order.user.tel }}</p>
            <p class="mx-2 mb-3">客戶地址：{{ order.user.address }}</p>
            <p class="mx-2 mb-3">客戶Email：{{ order.user.email }}</p>
            <p class="mx-2 mb-3">備註：{{ order.message }}</p>
            <!-- Button trigger modal -->
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="me-4 btn btn-deco"
                data-bs-target="#adOrderModal"
                @click="deleteOrder(order)"
                v-if="!order.is_deleted"
              >
                刪除訂單</button
              ><button
                type="button"
                class="me-4 btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#adOrderModal"
                @click="openModal(order)"
              >
                修改訂單
              </button>

              <button
                class="btn btn-danger me-4"
                v-if="order.is_deleted"
                @click.prevent="confirmDelete(order.id)"
              >
                確認永久刪除訂單
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['orders', 'openModal', 'deleteOrder', 'confirmDelete'],

  data() {
    return {}
  },

  methods: {
    toggleCollapse(cid) {
      this.$refs.collape.forEach((item) => {
        if (item.attributes.id.value === cid) {
          item.classList.toggle('hide')
        }
      })
    }
  }
}
</script>
<style lang="scss">
.hide {
  display: none;
}
</style>
