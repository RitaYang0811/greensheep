<template>
  <div class="container text-start px-10 pt-10">
    <h1 class="display-3 fw-bold mb-4">所有商品</h1>

    <!-- search bar -->
    <div class="border border-1 border-primary rounded-3 mb-4" style="height: 40px">
      <i class="bi bi-search float-end fs-5 text-primary pe-2 mt-2"></i>
    </div>
    <!-- tab bar -->

    <ul class="tab-bar nav border-bottom border-primary mb-4">
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '所有優惠券' }"
          href="#"
          @click.prevent="getCoupons('所有優惠券')"
        >
          所有商品
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '有效' }"
          href="#"
          @click.prevent="getCoupons('有效')"
        >
          已售完
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '尚未生效' }"
          href="#"
          @click.prevent="getCoupons('尚未生效')"
        >
          未啟用
        </a>
      </li>
    </ul>
    <!-- button -->
    <div class="mb-5">
      <a
        href="#"
        class="btn btn-deco btn-md border border-1 border-primary text-primary me-4 py-3 px-6 rounded-3"
        @click.prevent="openModal('new')"
        >建 立 商 品</a
      >
      <a
        href="#"
        class="btn border border-1 border-primary btn-md text-primary py-3 px-5 rounded-3"
        @click.prevent="openModal('highlight')"
        >主打商品管理</a
      >

      <a
        href="#"
        class="btn border border-1 border-primary btn-md text-primary p-3 rounded-3 float-end align-middle"
        @click.prevent="openModal('new')"
        >排序</a
      >
      <a
        href="#"
        class="btn border border-1 border-primary btn-md text-primary me-4 p-2 rounded-3 float-end"
        @click.prevent="openModal('new')"
        ><i class="bi bi-ui-checks fs-5"></i
      ></a>
      <a
        href="#"
        class="btn border border-1 border-primary btn-md text-primary me-4 p-2 rounded-3 float-end"
        @click.prevent="openModal('new')"
        ><i class="bi bi-ui-checks-grid fs-5"></i
      ></a>
    </div>
    <!-- 排序方式 -->
    <div class="text-primary mb-2 text-end">排序：最近更新</div>
    <!-- 商品列表 - 卡片 -->
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <div class="col">
        <div class="card border border-1 border-primary position-relative">
          <span class="check-box bg-white" style="width: 16px; height: 16px"></span>

          <img src="@/assets/images/product-10.jpg" class="card-img-top" alt="..." />
          <div class="card-body p-0 px-2 pt-2">
            <h5 class="card-title display-6 text-dark mb-2">
              <span class="float-end bg-primary text-white py-1 px-2 fs-8">主打商品</span>經典鑽戒
            </h5>
            <p class="card-text fs-7 text-dark mb-2">5 件商品</p>
            <p class="card-text fs-7 text-dark mb-2">NT $2580</p>
            <div
              class="card-foot d-flex justify-content-evenly border-top border-1 border-primary py-2"
            >
              <a class="cursor-pointer"><i class="bi bi-pencil-fill text-dark fs-6"></i></a>
              <a class="cursor-pointer"><i class="bi bi-trash3-fill text-dark fs-6"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品列表 - 列表 -->
    <table class="table table-hover align-middle">
      <thead>
        <tr>
          <th style="width: 10%"></th>
          <th style="width: 35%">商品名</th>
          <th style="width: 10%">庫存</th>
          <th style="width: 10%">價格</th>
          <th style="width: 10%"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <img
              src="@/assets/images/product-12.jpg"
              class="img-fluid rounded object-fit-cover"
              alt="..."
              style="width: 98px; height: 98px"
            />
          </th>
          <td>
            <h5 class="card-title display-6 text-dark">
              <span class="bg-primary text-white py-1 px-2 fs-8 me-4">主打商品</span>經典鑽戒
            </h5>
          </td>
          <td><p class="card-text fs-7 text-dark">5 件商品</p></td>
          <td><p class="card-text fs-7 text-dark">NT $2580</p></td>
          <td>
            <a class="cursor-pointer mx-6"><i class="bi bi-pencil-fill fs-6"></i></a>
            <a class="cursor-pointer mx-6"><i class="bi bi-trash3-fill fs-6"></i></a>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th scope="row">
            <img
              src="@/assets/images/product-12.jpg"
              class="img-fluid rounded object-fit-cover"
              alt="..."
              style="width: 98px; height: 98px"
            />
          </th>
          <td>
            <h5 class="card-title display-6 text-dark">
              <span class="bg-primary text-white py-1 px-2 fs-8 me-4">主打商品</span>經典鑽戒
            </h5>
          </td>
          <td><p class="card-text fs-7 text-dark">5 件商品</p></td>
          <td><p class="card-text fs-7 text-dark">NT $2580</p></td>
          <td>
            <a class="cursor-pointer mx-6"><i class="bi bi-pencil-fill fs-6"></i></a>
            <a class="cursor-pointer mx-6"><i class="bi bi-trash3-fill fs-6"></i></a>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th scope="row">
            <img
              src="@/assets/images/product-12.jpg"
              class="img-fluid rounded object-fit-cover"
              alt="..."
              style="width: 98px; height: 98px"
            />
          </th>
          <td>
            <h5 class="card-title display-6 text-dark">
              <span class="bg-primary text-white py-1 px-2 fs-8 me-4">主打商品</span>經典鑽戒
            </h5>
          </td>
          <td><p class="card-text fs-7 text-dark">5 件商品</p></td>
          <td><p class="card-text fs-7 text-dark">NT $2580</p></td>
          <td>
            <a class="cursor-pointer mx-6"><i class="bi bi-pencil-fill fs-6"></i></a>
            <a class="cursor-pointer mx-6"><i class="bi bi-trash3-fill fs-6"></i></a>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th scope="row">
            <img
              src="@/assets/images/product-12.jpg"
              class="img-fluid rounded object-fit-cover"
              alt="..."
              style="width: 98px; height: 98px"
            />
          </th>
          <td>
            <h5 class="card-title display-6 text-dark">
              <span class="bg-primary text-white py-1 px-2 fs-8 me-4">主打商品</span>經典鑽戒
            </h5>
          </td>
          <td><p class="card-text fs-7 text-dark">5 件商品</p></td>
          <td><p class="card-text fs-7 text-dark">NT $2580</p></td>
          <td>
            <a class="cursor-pointer mx-6"><i class="bi bi-pencil-fill fs-6"></i></a>
            <a class="cursor-pointer mx-6"><i class="bi bi-trash3-fill fs-6"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- add new modal -->
    <div class="modal modal-xl" tabindex="-1" ref="addModal">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 v-if="isNew === true" class="modal-title fw-medium text-white ps-3 py-2">
              新增商品
            </h5>
            <h5 v-else class="modal-title fw-medium text-white ps-3 py-2">編輯商品</h5>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row my-4">
                <div class="col-3">
                  <h6 class="fw-medium mb-2">商品圖片</h6>

                  <span class="font-notosans fs-8">最多上傳10張照片</span>
                </div>
                <div class="col-9">
                  <h6 class="mb-4">商品首圖</h6>
                  <div class="row row-cols-1 row-cols-md-2 g-4 mb-8">
                    <div class="col">
                      <div class="d-flex flex-column gap-2">
                        <div>第一張</div>

                        <img
                          src="@/assets/images/product-4.jpg"
                          alt=""
                          class="object-fit-cover"
                          style="width: 80px; height: 80px"
                        /><input
                          type="text"
                          class="form-control border border-primary"
                          placeholder="請輸入主圖網址"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex flex-column gap-2">
                        <div>第二張</div>

                        <img
                          src="@/assets/images/product-4.jpg"
                          alt=""
                          class="object-fit-cover"
                          style="width: 80px; height: 80px"
                        /><input
                          type="text"
                          class="form-control border border-primary"
                          placeholder="請輸入主圖網址"
                        />
                      </div>
                    </div>
                  </div>
                  <h6 class="mb-4">商品相簿</h6>

                  <div class="row row-cols-2 row-cols-md-4 g-4 mb-9">
                    <div class="col">
                      <div class="d-flex flex-column gap-2 mb-3">
                        <div>第一張</div>

                        <img
                          src="@/assets/images/product-4.jpg"
                          alt=""
                          class="object-fit-cover"
                          style="width: 80px; height: 80px"
                        /><input
                          type="text"
                          class="form-control border border-primary"
                          placeholder="請輸入照片網址"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex flex-column gap-2">
                        <div>第二張</div>

                        <img
                          src="@/assets/images/product-4.jpg"
                          alt=""
                          class="object-fit-cover"
                          style="width: 80px; height: 80px"
                        />
                        <input
                          type="text"
                          class="form-control border border-primary"
                          placeholder="請輸入照片網址"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex flex-column gap-2">
                        <div>第三張</div>

                        <img
                          src="@/assets/images/product-4.jpg"
                          alt=""
                          class="object-fit-cover"
                          style="width: 80px; height: 80px"
                        />
                        <input
                          type="text"
                          class="form-control border border-primary"
                          placeholder="請輸入照片網址"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex flex-column gap-2">
                        <div>第四張</div>

                        <img
                          src="@/assets/images/product-4.jpg"
                          alt=""
                          class="object-fit-cover"
                          style="width: 80px; height: 80px"
                        />
                        <input
                          type="text"
                          class="form-control border border-primary"
                          placeholder="請輸入照片網址"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <div class="d-flex flex-column gap-2">
                        <div>第五張</div>

                        <img
                          src="@/assets/images/product-4.jpg"
                          alt=""
                          class="object-fit-cover"
                          style="width: 80px; height: 80px"
                        />
                        <input
                          type="text"
                          class="form-control border border-primary"
                          placeholder="請輸入照片網址"
                        />
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary">新增圖片</button>
                  <button type="button" class="btn btn-primary">刪除圖片</button>
                  <input class="form-control mb-9" type="file" id="formFile" />
                </div>
              </div>
              <hr />
              <div class="row my-4">
                <div class="col-3">
                  <h6 class="fw-medium">商品資訊</h6>
                </div>
                <div class="col-9">
                  <div class="mb-9">
                    <label for="form-label " class="h6 mb-2">商品名稱</label>
                    <input type="text" class="form-control border border-primary" />
                    <div id="emailHelp" class="form-text font-notosans">
                      商品名稱請不要超過15個字（含中文、英文、數字、空格及符號）
                    </div>
                  </div>
                  <div class="mb-9">
                    <label for="form-label" class="h6 mb-2">商品分類</label>
                    <select
                      class="form-select border border-primary"
                      aria-label="Default select example"
                    >
                      <option selected>請選擇商品分類</option>
                      <option value="項鍊 PENDANT">項鍊 PENDANT</option>
                      <option value="戒指 RING">戒指 RING</option>
                      <option value="耳環 EARRINGS">耳環 EARRINGS</option>
                      <option value="手鍊 BRACELET">手鍊 BRACELET</option>
                    </select>
                  </div>
                  <div class="mb-9">
                    <label for="form-label" class="h6 mb-2">商品購買方式</label>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value=""
                        name="purchaseWayRadio"
                        id="availableProduct"
                      />
                      <label class="form-check-label text-grey66" for="availableProduct" checked>
                        現貨商品
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value=""
                        name="purchaseWayRadio"
                        id="bespokeProduct"
                      />
                      <label class="form-check-label text-grey66" for="bespokeProduct">
                        訂製商品，付款後出貨
                      </label>
                    </div>
                  </div>
                  <div class="mb-9">
                    <label for="form-label" class="h6 mb-2">商品出貨天數</label>
                    <select
                      class="form-select border border-primary"
                      aria-label="Default select example"
                    >
                      <option selected>請選擇商品出貨天數</option>
                      <option value="1">1</option>
                    </select>
                  </div>
                  <div class="mb-9">
                    <label for="form-label" class="h6 mb-2">商品價格 (NT$)</label>
                    <input type="number" class="form-control border border-primary" />
                  </div>

                  <div class="mb-9">
                    <label for="form-label" class="h6 mb-2">庫存數量</label>
                    <input type="number" class="form-control border border-primary" />
                  </div>

                  <div class="mb-9">
                    <label for="form-label" class="h6 mb-2">商品材質</label>
                    <select
                      class="form-select border border-primary"
                      aria-label="Default select example"
                    >
                      <option selected>請選擇商品材質</option>
                      <option value="925銀">925銀</option>
                    </select>
                  </div>

                  <div class="mb-9">
                    <label for="form-label" class="h6 mb-2">贈品</label>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="silverPolish" />

                      <label class="form-check-label text-grey66 mb-1" for="silverPolish">
                        進口拭銀布
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="bag" />
                      <label class="form-check-label text-grey66 mb-1" for="bag"> 防朝袋 </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value=""
                        id="paperBox"
                        name="packageWayRadio"
                        checked
                      />
                      <label class="form-check-label text-grey66 mb-1" for="paperBox">
                        品牌經典紙盒包裝
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        value=""
                        id="goodBox"
                        name="packageWayRadio"
                      />
                      <label class="form-check-label text-grey66 mb-1" for="goodBox">
                        品牌絨布禮盒包裝
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="row my-4">
                <div class="col-3"><h6 class="fw-medium mb-2">商品描述</h6></div>
                <div class="col-9">
                  <textarea
                    class="form-control border border-primary mb-9"
                    id="exampleFormControlTextarea1"
                    rows="10"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer d-block">
            <button type="button" class="btn btn-primary float-start" data-bs-dismiss="modal">
              離開編輯</button
            ><button type="button" class="btn btn-deco float-end">預覽</button>
            <button type="button" class="btn btn-primary float-end">儲存草稿</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data() {
    return {
      addModal: null,
      isNew: true
    }
  },
  methods: {
    openModal(status) {
      if (status === 'new') {
        this.addModal.show()
      } else if (status === 'edit') {
        this.addModal.show()
        this.isNew = false
      }
    },
    closeModal(status) {
      if (status === 'new') {
        this.addModal.hide()
      }
    }
  },
  mounted() {
    this.addModal = new Modal(this.$refs.addModal, {
      keyboard: false,
      backdrop: false
    })
    console.log(this.addModal)
  }
}
</script>

<style scope lang="scss">
.check-box {
  position: absolute;
  top: 8px;
  left: 8px;
}
.hight-light-product {
  position: absolute;
  top: -8px;
  right: -8px;
}
.form-select,
.form-control {
  color: #666666;
  font-size: 18px;
}
</style>
