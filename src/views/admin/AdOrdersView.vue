<template>
  <div class="container px-10 pt-10 text-start">
    <h1 class="fs-3 mb-4">訂單管理</h1>

    <nav>
      <div class="nav nav-tabs border-button border-3" id="nav-tab" role="tablist">
        <button class="nav-link active w-10" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#allOrders"
          type="button" role="tab" aria-controls="nav-home" aria-selected="true">全部訂單</button>
        <button class="nav-link w-10" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#unpaid" type="button"
          role="tab" aria-controls="nav-profile" aria-selected="false">未付款</button>
        <button class="nav-link w-10" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#done" type="button"
          role="tab" aria-controls="nav-contact" aria-selected="false">已付款</button>
      </div>
    </nav>
    <!-- tabs 全部訂單 -->
    <div class="tab-content m-3" id="nav-tabContent">
      <div class="tab-pane fade show active" id="allOrders" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
        <!-- <h2>全部訂單頁面</h2> -->

        <div class="accordion" id="accordionPanelsStayOpenExample">
          <!-- Accordion -->
          <div class="accordion-item my-5" v-for="order in allOrders" :key="order.id">
            <h2 class="accordion-header">
              <!-- data-bs-target要記得改，綁定order.id -->
              <button class="accordion-button fs-7" type="button" data-bs-toggle="collapse"
                :data-bs-target="`#${order.id}`" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                {{ order.create_at }} | {{ order.id }}
                <span class="ms-10 badge rounded-pill text-bg-primary fs-7" v-if="order.is_paid">已付款</span>
                <span class="ms-10 badge rounded-pill text-bg-danger fs-7" v-else>未付款</span>
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
                <div class="my-4 border border-3"></div>
                <!-- 用戶資料渲染處 -->
                <div class="mt-4">
                  <div class="fs-4">
                    <!-- <h3>{{ order.user.name }}</h3> -->
                    <p class="m-2">配送方式：黑貓宅配</p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Accordion -->
        </div>

      </div>
      <!-- tabs 未付款 -->
      <div class="tab-pane fade" id="unpaid" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
        <!-- <h2>未付款頁面</h2> -->
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <!-- Accordion -->
          <div class="accordion-item my-5" v-for="order in unpaidOrders" :key="order.id">
            <h2 class="accordion-header">
              <!-- data-bs-target要記得改，綁定order.id -->
              <button class="accordion-button fs-7" type="button" data-bs-toggle="collapse"
                :data-bs-target="`#${order.id}`" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                {{ order.create_at }} | {{ order.id }}
                <span class="ms-10 badge rounded-pill text-bg-danger fs-7">{{ order.is_paid ? "已付款" : "未付款" }}</span>
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
                <div class="my-4 border border-3"></div>
                <!-- 用戶資料渲染處 -->
                <div class="mt-4">
                  <div class="fs-4">
                    <!-- <h3>{{ order.user.name }}</h3> -->
                    <p class="m-2">配送方式：黑貓宅配</p>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Accordion -->
        </div>
      </div>
      <!-- tabs 已付款 -->
      <div class="tab-pane fade" id="done" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
        <!-- <h2>已完成頁面</h2> -->
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <!-- Accordion -->
          <div class="accordion-item my-5" v-for="order in paidOrders" :key="order.id">
            <h2 class="accordion-header">
              <!-- data-bs-target要記得，綁定order.id -->
              <button class="accordion-button fs-7" type="button" data-bs-toggle="collapse"
                :data-bs-target="`#${order.id}`" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                {{ order.create_at }} | {{ order.id }}
                <span class="ms-10 badge rounded-pill text-bg-primary fs-7">{{ order.is_paid ? "已付款" : "未付款" }}</span>
              </button>
            </h2>
            <!-- id要記得，綁定order.id -->
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
                <div class="my-4 border border-3"></div>
                <!-- 用戶資料渲染處 -->
                <div class="mt-4">
                  <div class="fs-4">
                    <p class="m-2">配送方式：黑貓宅配</p>
                    <p class="m-2">客戶姓名：{{ order.user.name }}</p>
                    <p class="m-2">客戶電話：{{ order.user.tel }}</p>
                    <p class="m-2">客戶地址：{{ order.user.address }}</p>
                    <p class="m-2">客戶Email：{{ order.user.email }}</p>
                    <p class="m-2">備註：{{ order.message }}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#adOrderModal"
                      @click="openModal(order)">
                      修改訂單
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Accordion -->
        </div>
      </div>
    </div>

  </div>

  <!-- Modal -->
  <div class="modal fade rounded-2" id="adOrderModal" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-4 ms-2" id="staticBackdropLabel">訂單詳細資料</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="">
            <h3 class="text-center">客戶資料</h3>
            <div class="border border-light text-start w-75 mx-auto">
              <h5 class="m-2">客戶姓名：{{ modalData?.user?.name }}</h5>
              <h5 class="m-2">客戶地址：{{ modalData?.user?.address }}</h5>
              <h5 class="m-2">客戶Email：{{ modalData?.user?.email }}</h5>
              <h5 class="m-2">客戶電話：{{ modalData?.user?.tel }}</h5>
              <label for="payState" class="fs-5 text-primary m-2">付款狀態：</label>
              <select class="form-select d-inline w-25 fs-5" id="payState" aria-label="付款狀態" v-model="modalData.is_paid">
                <option :value=false>未付款</option>
                <option :value=true>已付款</option>
              </select>
            </div>

          </div>
          <h3 class="my-3">訂單商品</h3>
          <table class="table align-middle border-primary">
            <thead>
              <tr>
                <th scope="col" class="text-primary fw-medium">商品資訊</th>
                <th scope="col" class="text-primary fw-medium">數量</th>
                <th scope="col" class="text-primary fw-medium">價格</th>
                <th scope="col" class="text-primary fw-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in modalProducts" :key="product.id">
                <th scope="row" class="py-4">
                  <div class="card border-0 h-10" style="max-width: 540px">
                    <div class="row g-0 align-items-center">
                      <div class="col-md-4">
                        <div class="ratio ratio-1x1">
                          <img :src="product.product.imageUrl" class="img-fluid object-fit-cover" alt="..." />
                        </div>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="fs-6 card-title text-primary fw-medium">
                            {{ product.product.title }}
                          </h5>
                          <small class="text-start fw-normal">{{ product.product.category }}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </th>
                <td class="py-4">
                  <input type="number" class="p-2 w-25" min="1" v-model="product.qty" disabled />
                </td>
                <td class="py-4 text-primary">NT$ {{ product.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
            @click="updateOrder(modalData)">確認修改</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data() {
    return {
      allOrders: [],
      unpaidOrders: [],
      paidOrders: [],
      // doneOrders: [],
      modalData: {},
      modalProducts: [],
    }
  },

  methods: {
    getAllOrders() {
      this.allOrders = []
      this.unpaidOrders = []
      this.paidOrders = []
      const getOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/orders`;
      axios.get(getOrdersUrl)
        .then((res) => {
          this.allOrders = res.data.orders;
          this.allOrders.forEach((item) => {
            if (item.is_paid) {
              this.paidOrders.push(item)
            } else {
              this.unpaidOrders.push(item)
            }
          })
        })
        .catch((err) => {
          console.log(err);
        })
    },
    updateOrder(data) {
      const updateOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/order/${data.id}`;
      axios.put(updateOrdersUrl, { data })
        .then(() => {
          this.getAllOrders();
        })
        .catch((err) => {
          console.log(err)
        })

    },

    openModal(order) {
      this.modalData = order
      this.modalProducts = Object.values(order.products)
    },
  },

  mounted() {
    this.getAllOrders();
  },

}
</script>

<style lang="scss"></style>