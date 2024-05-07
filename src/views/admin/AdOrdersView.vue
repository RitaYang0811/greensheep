<template>
  <div class="container text-start px-3 px-lg-10 mt-8 mt-lg-10 mb-7 mb-lg-10">
    <h1 class="fs-3 mb-4 fw-bold">訂單管理</h1>

    <nav>
      <div class="nav nav-tabs border-button border-3" id="nav-tab" role="tablist">
        <button
          class="nav-link active w-10"
          id="nav-home-tab"
          data-bs-toggle="tab"
          data-bs-target="#allOrders"
          type="button"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          @click="changeCategory(allOrders)"
        >
          全部訂單
        </button>
        <button
          class="nav-link w-10"
          id="nav-profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#unpaid"
          type="button"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
          @click="changeCategory(unpaidOrders)"
        >
          未付款
        </button>
        <button
          class="nav-link w-10"
          id="nav-contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#paid"
          type="button"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
          @click="changeCategory(paidOrders)"
        >
          已付款
        </button>
        <button
          class="nav-link w-10"
          id="nav-contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#delete"
          type="button"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
          @click="changeCategory(deletedOrders)"
        >
          已刪除
        </button>
        <button
          class="nav-link w-10"
          id="nav-contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#done"
          type="button"
          role="tab"
          aria-controls="nav-contact"
          aria-selected="false"
          @click="changeCategory(doneOrders)"
        >
          已完成
        </button>
      </div>
    </nav>

    <div class="tab-content m-3" id="nav-tabContent">
      <!-- tabs 全部訂單 -->
      <div
        class="tab-pane fade show active"
        id="allOrders"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
        tabindex="0"
      >
        <button type="button" class="btn btn-deco" @click="deleteAllOrders">刪除全部訂單</button>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <!-- Accordion -->
          <Accordion
            :orders="allOrdersPage"
            :openModal="openModal"
            :deleteOrder="deleteOrder"
            :confirmDelete="confirmDelete"
          ></Accordion>
          <!-- pagination -->
          <AdOrderPagination :pagination="pagination" @update-page="changePage"></AdOrderPagination>
        </div>
      </div>
      <!-- tabs 未付款 -->
      <div
        class="tab-pane fade"
        id="unpaid"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
        tabindex="0"
      >
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <!-- Accordion -->
          <Accordion
            :orders="unpaidOrders"
            :openModal="openModal"
            :deleteOrder="deleteOrder"
          ></Accordion>
          <!-- pagination -->
          <AdOrderPagination
            :pagination="paginations"
            @update-page="changePage"
          ></AdOrderPagination>
        </div>
      </div>
      <!-- tabs 已付款 -->
      <div
        class="tab-pane fade"
        id="paid"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
        tabindex="0"
      >
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <!-- Accordion -->
          <Accordion
            :orders="paidOrders"
            :openModal="openModal"
            :deleteOrder="deleteOrder"
          ></Accordion>
          <!-- pagination -->
          <AdOrderPagination
            :pagination="paginations"
            @update-page="changePage"
          ></AdOrderPagination>
        </div>
      </div>
      <!-- tab 已刪除 -->
      <div
        class="tab-pane fade"
        id="delete"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
        tabindex="0"
      >
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <!-- Accordion -->
          <Accordion
            :orders="deletedOrders"
            :openModal="openModal"
            :deleteOrder="deleteOrder"
            :confirmDelete="confirmDelete"
          ></Accordion>
          <!-- pagination -->
          <AdOrderPagination
            :pagination="paginations"
            @update-page="changePage"
          ></AdOrderPagination>
        </div>
      </div>
      <!-- tab 已完成 -->
      <div
        class="tab-pane fade"
        id="done"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
        tabindex="0"
      >
        <!-- <h2>已完成頁面</h2> -->
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <!-- Accordion -->
          <Accordion
            :orders="doneOrders"
            :openModal="openModal"
            :deleteOrder="deleteOrder"
          ></Accordion>
          <!-- pagination -->
          <AdOrderPagination
            :pagination="paginations"
            @update-page="changePage"
          ></AdOrderPagination>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade rounded-2"
    id="adOrderModal"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h1 class="modal-title h5 fw-medium text-white ps-3 py-2" id="staticBackdropLabel">
            訂單詳細資料
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- checkbox -->
          <div>
            <div class="p-10 d-flex justify-content-center" style="z-index: 10">
              <div class="">
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck1"
                  autocomplete="off"
                  checked
                  disabled
                />
                <label class="btn btn-outline-primary border-2 rounded-circle" for="btncheck1"
                  ><i class="bi bi-check-lg fs-2 text-light"></i
                ></label>
                <p class="mt-3 fs-6">收到訂單</p>
              </div>
              <div
                :class="orderStatus?.making ? `bg-primary` : `bg-light`"
                class="mt-5"
                style="height: 10px; width: 20%"
              ></div>
              <div class="">
                <!-- disabled綁定後一個checkbox，如果後一個checkbox勾選，前一個就不能取消。 -->
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck2"
                  autocomplete="off"
                  v-model="orderStatus.making"
                  :disabled="orderStatus?.sendProduct"
                />
                <label class="btn btn-outline-primary border-2 rounded-circle" for="btncheck2"
                  ><i class="bi bi-check-lg fs-2 text-light"></i
                ></label>
                <p class="mt-3 fs-6">製作中</p>
              </div>
              <div
                class="mt-5"
                :class="orderStatus?.sendProduct ? `bg-primary` : `bg-light`"
                style="height: 10px; width: 20%"
              ></div>
              <div class="">
                <!-- disabled綁定後一個checkbox，如果後一個checkbox勾選，前一個就不能取消。 -->
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck3"
                  autocomplete="off"
                  v-model="orderStatus.sendProduct"
                  :disabled="!orderStatus?.making || orderStatus?.done"
                />
                <label
                  class="btn btn-outline-primary border-2 rounded-circle"
                  :class="orderStatus.making ? '' : 'btn-outline-light'"
                  for="btncheck3"
                  ><i class="bi bi-check-lg fs-2 text-light"></i
                ></label>
                <p class="mt-3 fs-6">已出貨</p>
              </div>
              <div
                class="mt-5"
                :class="orderStatus.done ? `bg-primary` : `bg-light`"
                style="height: 10px; width: 20%"
              ></div>
              <div class="">
                <!-- disabled綁定是否付款，未付款則不能完成訂單。 -->
                <input
                  type="checkbox"
                  class="btn-check"
                  id="btncheck4"
                  autocomplete="off"
                  v-model="orderStatus.done"
                  :disabled="!modalData.is_paid || !orderStatus.sendProduct"
                />
                <label
                  class="btn border-2 rounded-circle"
                  :class="[
                    modalData.is_paid && orderStatus.sendProduct
                      ? 'btn-outline-primary'
                      : 'btn-outline-light'
                  ]"
                  for="btncheck4"
                  ><i class="bi bi-check-lg fs-2 text-light"></i
                ></label>
                <p class="mt-3 fs-6">已完成</p>
              </div>
            </div>
          </div>

          <div class="mb-9">
            <h3 class="h4 text-center mb-3 fw-medium">客戶資料</h3>
            <div class="border border-light text-start w-75 mx-auto p-2">
              <p class="fs-6 text-primary m-3">客戶姓名：{{ modalData?.user?.name }}</p>
              <p class="fs-6 text-primary m-3">客戶地址：{{ modalData?.user?.address }}</p>
              <p class="fs-6 text-primary m-3">客戶Email：{{ modalData?.user?.email }}</p>
              <p class="fs-6 text-primary m-3">客戶電話：{{ modalData?.user?.tel }}</p>
              <label for="payState" class="fs-6 text-primary m-3">付款狀態：</label>
              <select
                class="form-select d-inline w-25 fs-6"
                id="payState"
                aria-label="付款狀態"
                v-model="modalData.is_paid"
                :disabled="orderStatus.done"
              >
                <option :value="false">未付款</option>
                <option :value="true">已付款</option>
              </select>
              <button
                type="button"
                class="d-flex mx-1 my-1 btn btn-danger"
                data-bs-target="#adOrderModal"
                data-bs-dismiss="modal"
                v-if="modalData?.is_deleted"
                @click="recoverDelete(modalData)"
              >
                回復刪除
              </button>
            </div>
          </div>
          <h3 class="h4 text-center mb-3 fw-medium">訂單商品</h3>
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
                          <img
                            :src="product.product.imageUrl"
                            class="img-fluid object-fit-cover"
                            :alt="product.product.title"
                          />
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
          <div class="d-flex justify-content-between mx-4 my-5">
            <p class="fs-6">
              優惠券：
              <span class="ms-2 fs-6 badge rounded-pill text-bg-deco" v-if="modalData?.products">{{
                Object.values(modalData?.products)[0]?.coupon?.code
              }}</span>
            </p>
            <p class="fs-5 me-4 text-primary fw-bold">總金額：{{ parseInt(modalData?.total) }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="updateOrder(modalData)"
          >
            確認修改
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
import Accordion from '@/components/AdOrderAccordion.vue'
import AdOrderPagination from '@/components/AdOrderPagination.vue'
import Swal from 'sweetalert2'

export default {
  components: {
    Accordion,
    AdOrderPagination
  },
  data() {
    return {
      allOrders: [],
      unpaidOrders: [],
      paidOrders: [],
      deletedOrders: [],
      doneOrders: [],
      pagination: {},
      allOrdersPage: [],
      nowOrders: [],
      modalData: {},
      modalProducts: [],
      //訂單狀態資料
      orderStatus: {
        getOrder: true,
        making: false,
        sendProduct: false,
        done: false
      }
    }
  },
  computed: {
    paginations() {
      let pagination = {}
      if (this.nowOrders.length > 10) {
        if (this.nowOrders.length % 10) {
          pagination.total_pages = Math.floor(this.nowOrders.length / 10) + 1
        } else {
          pagination.total_pages = Math.floor(this.nowOrders.length / 10)
        }
        pagination.has_next = true
      } else {
        pagination.total_pages = 1
        pagination.has_next = false
      }
      pagination.current_page = 1
      pagination.has_pre = false
      return pagination
    }
  },

  methods: {
    getAllOrders() {
      this.allOrders = []
      this.unpaidOrders = []
      this.paidOrders = []
      this.nowPage = []
      const getOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/orders`
      axios
        .get(getOrdersUrl)
        .then((res) => {
          this.pagination = res.data.pagination
          res.data.orders.forEach((item) => {
            this.allOrders.push(item)
            this.allOrdersPage.push(item)
          })
          if (res.data.pagination.current_page < res.data.pagination.total_pages) {
            const times = res.data.pagination.total_pages
            for (let i = 2; i <= times; i++) {
              axios
                .get(`${getOrdersUrl}?page=${i}`)
                .then((res) => {
                  res.data.orders.forEach((item) => {
                    this.allOrders.push(item)
                  })
                })
                .catch((err) => {
                  console.log(err)
                })
            }
          }
          this.allOrders.forEach((item) => {
            //若該訂單沒有orderStatus時，代表為新訂單，加入orderStatus。
            if (!item.orderStatus) {
              item.orderStatus = {
                getOrder: true,
                making: false,
                sendProduct: false,
                done: false
              }
            }
            //先篩出刪除訂單
            if (item.is_deleted) {
              this.deletedOrders.push(item)
            } else {
              //未刪除訂單中篩出付款和未付款
              if (item.is_paid) {
                this.paidOrders.push(item)
              } else {
                this.unpaidOrders.push(item)
              }
            }
            //篩出完成訂單
            if (item.orderStatus.done) {
              this.doneOrders.push(item)
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateOrder(data) {
      const updateOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/order/${data.id}`
      //更新訂單中塞入訂單狀態，用以處理訂單狀態
      data.orderStatus = this.orderStatus

      axios
        .put(updateOrdersUrl, { data })
        .then(() => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '訂單修改成功',
            showConfirmButton: false,
            toast: true,
            timer: 1500
          })
          location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteOrder(data) {
      const updateOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/order/${data.id}`
      Swal.fire({
        title: '是否刪除該訂單?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#566b5a',
        cancelButtonText: '  否  ',
        confirmButtonText: '  是  '
      }).then((result) => {
        if (result.isConfirmed) {
          data.is_deleted = true
          axios
            .put(updateOrdersUrl, { data })
            .then(() => {
              location.reload()
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },
    recoverDelete(data) {
      const updateOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/order/${data.id}`
      data.is_deleted = false
      axios
        .put(updateOrdersUrl, { data })
        .then(() => {
          location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    confirmDelete(data) {
      const deleteOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/order/${data}`
      Swal.fire({
        title: '確認永久刪除該訂單?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#566b5a',
        cancelButtonText: '  否  ',
        confirmButtonText: '  是  '
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(deleteOrdersUrl)
            .then(() => {
              location.reload()
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },
    deleteAllOrders() {
      const deleteAllOrdersUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/orders/all`
      Swal.fire({
        title: '確認永久刪除全部訂單?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#566b5a',
        cancelButtonText: '  否  ',
        confirmButtonText: '  是  '
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(deleteAllOrdersUrl)
            .then(() => {
              location.reload()
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },

    changeCategory(category) {
      this.nowOrders = category
    },
    changePage(page) {
      this.allOrdersPage = []
      const url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/orders?page=${page}`
      axios
        .get(url)
        .then((res) => {
          res.data.orders.forEach((item) => {
            this.allOrdersPage.push(item)
          })
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          console.log(err)
        })
    },
    openModal(order) {
      this.modalData = { ...order }
      this.modalProducts = Object.values(order.products)
      //將訂單狀態塞入
      this.orderStatus = { ...order.orderStatus }
    }
  },

  mounted() {
    this.getAllOrders()
  }
}
</script>

<style lang="scss"></style>
