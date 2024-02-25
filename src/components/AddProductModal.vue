<template>
  <div class="modal modal-xl" tabindex="-1" ref="addModal">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-primary">
          <h5 v-if="isNew === true" class="modal-title fw-medium text-white ps-3 py-2">新增商品</h5>
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
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['temp-product:'],
  data() {
    return {
      addModal: null
    }
  },
  methods: {
    open() {
      this.addModal.show()
    },

    close() {
      this.addModal.hide()
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
