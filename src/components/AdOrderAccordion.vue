<template>
  <div class="accordion-item my-5" v-for="order in orders" :key="order.id">
    <h2 class="accordion-header">
      <!-- data-bs-target要記得改，綁定order.id -->
      <button class="accordion-button fs-7" type="button" data-bs-toggle="collapse" :data-bs-target="`#${order.id}`"
        aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        {{ order.create_at }} | {{ order.id }}
        <span :class="order.is_paid ? 'text-bg-primary' : 'text-bg-danger'"
          class="ms-10 badge rounded-pill text-bg-primary fs-7">{{ order.is_paid ? "已付款" : "未付款" }}</span>
        <span class="ms-10 badge rounded-pill text-bg-primary fs-7" v-if="order?.orderStatus?.done">已完成</span>
        <span class="ms-10 badge rounded-pill text-bg-danger fs-7" v-if="order?.is_deleted">已刪除</span>
      </button>
    </h2>
    <!-- id要記得改，綁定order.id -->
    <div :id="order.id" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <!-- 單筆產品(商品渲染處) -->
        <!-- products為陣列格式，用Object.values來拆開 -->
        <div class=" border-bottom border-light d-flex align-items-center justify-content-between my-2"
          v-for="product in Object.values(order.products)" :key="product.id">
          <!-- <img :src="product.product.imageUrl" alt="" class="w-10 img-fluid object-fit-cover m-4 rounded-2"
                    style="height: 100px;width:50px;"> -->
          <div class="ms-7 d-flex align-items-center ">
            <span class="badge rounded-pill text-bg-primary fs-7 m-2">{{ product.product.category }}</span>
            <h3>
              {{ product.product.title }} ({{ product.product.id }})</h3>
          </div>
          <div class=" me-7 d-flex ">
            <span class="mx-3">數量：{{ product.qty }} </span>
            <p> 總價：{{ product.total }}</p>
          </div>

        </div>
        <div class="my-4 border border-1"></div>
        <div class="d-flex justify-content-between mx-4">
          <p class="">優惠券：<span class="ms-2 fs-6 badge rounded-pill text-bg-secondary">{{
    Object.values(order.products)[0]?.coupon?.code }}</span></p>
          <p class="">總金額：{{ parseInt(order.total) }}</p>

        </div>
        <div class="my-4 border border-3 "></div>
        <!-- 用戶資料渲染處 -->
        <div class="mt-4">
          <div class="fs-4">
            <!-- <h3>{{ order.user.name }}</h3> -->
            <!-- <p class="m-2">配送方式：黑貓宅配</p> -->
            <p class="m-2">客戶姓名：{{ order.user.name }}</p>
            <p class="m-2">客戶電話：{{ order.user.tel }}</p>
            <p class="m-2">客戶地址：{{ order.user.address }}</p>
            <p class="m-2">客戶Email：{{ order.user.email }}</p>
            <p class="m-2">備註：{{ order.message }}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adOrderModal"
              @click="openModal(order)">
              修改訂單
            </button>
            <button type="button" class="mx-4 btn btn-danger" data-bs-target="#adOrderModal" @click="deleteOrder(order)"
              v-if="!order.is_deleted">
              刪除訂單
            </button>
            <button class="btn btn-danger mx-4" v-if="order.is_deleted"
              @click.prevent="confirmDelete(order.id)">確認永久刪除訂單</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['orders', 'openModal', 'deleteOrder','confirmDelete'],




}

</script>