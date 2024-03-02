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
                      <input
                        class="form-control mb-2"
                        type="file"
                        id="formFile"
                        @change="uploadImage('main1', $event)"
                      />
                      <img
                        v-if="tempProduct.imageUrl"
                        :src="tempProduct.imageUrl"
                        alt=""
                        class="object-fit-cover"
                        style="height: 200px; width: 100%"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="d-flex flex-column gap-2">
                      <div>第二張</div>
                      <input
                        class="form-control mb-2"
                        type="file"
                        id="formFile"
                        @change="uploadImage('main2', $event)"
                      />
                      <img
                        v-if="tempProduct.imageUrl2"
                        :src="tempProduct.imageUrl2"
                        alt=""
                        class="object-fit-cover"
                        style="height: 200px; width: 100%"
                      />
                    </div>
                  </div>
                </div>
                <h6 class="mb-4">商品相簿</h6>

                <div class="row row-cols-2 row-cols-md-4 row-cols-lg-8 g-2">
                  <input
                    class="form-control mb-2"
                    type="file"
                    id="formFile"
                    @change="uploadImage('album', $event)"
                  />
                  <div
                    class="col"
                    v-for="(image, index) in tempProduct.imagesUrl"
                    :key="index + 123"
                  >
                    <img :src="image" alt="" class="add-images object-fit-cover" />
                  </div>
                </div>
                <!-- <button type="button" class="btn btn-primary">新增圖片</button>
                <button type="button" class="btn btn-primary">刪除圖片</button> -->
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
                  <input
                    type="text"
                    class="form-control border border-primary"
                    v-model="tempProduct.title"
                  />
                  <div id="nameHelp" class="form-text font-notosans">
                    商品名稱請不要超過15個字（含中文、英文、數字、空格及符號）
                  </div>
                </div>
                <div class="mb-9">
                  <label for="form-label" class="h6 mb-2">商品分類</label>
                  <select
                    class="form-select border border-primary"
                    aria-label="Default select example"
                    v-model="tempProduct.category"
                  >
                    <option value="" disabled>請選擇商品分類</option>
                    <option value="項鍊 PENDANT">項鍊 PENDANT</option>
                    <option value="戒指 RING">戒指 RING</option>
                    <option value="耳環 EARRINGS">耳環 EARRINGS</option>
                    <option value="手鍊 BRACELET">手鍊 BRACELET</option>
                  </select>
                </div>
                <div class="mb-9">
                  <label for="form-label" class="h6 mb-2">商品購買方式</label>
                  {{ tempProduct.purchaseWay }}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="purchaseWayRadio"
                      id="inStockProduct"
                      value="現貨商品"
                      v-model="tempProduct.purchaseWay"
                      checked
                    />
                    <label class="form-check-label text-grey66" for="inStockProduct">
                      現貨商品
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="purchaseWayRadio"
                      id="bespokeProduct"
                      value="訂製商品，付款後出貨"
                      v-model="tempProduct.purchaseWay"
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
                    v-model="tempProduct.makingDays"
                  >
                    <option selected value="" disabled>請選擇商品出貨天數</option>
                    <option :value="day" v-for="day in 60" :key="day">{{ day }}</option>
                  </select>
                </div>
                <div class="mb-9">
                  <label for="form-label" class="h6 mb-2">商品原價格 (NT$)</label>
                  <input
                    type="number"
                    class="form-control border border-primary mb-3"
                    v-model="tempProduct.origin_price"
                  />
                  <label for="form-label" class="h6 mb-2">商品折扣</label>
                  <select
                    class="form-select border border-primary mb-3"
                    aria-label="Default select example"
                    v-model="tempProduct.discount"
                  >
                    <option selected disabled value="">請選擇折扣比</option>
                    <option :value="10">無折扣</option>
                    <option :value="discount" v-for="discount in discounts" :key="discount">
                      {{ discount }} 折
                    </option>
                  </select>
                  <label for="form-label" class="h6 mb-2">商品折扣後價格 (NT$)</label>

                  <input
                    type="text"
                    class="form-control border border-primary"
                    v-model="discountPrice"
                    disabled
                  />
                </div>
                <div class="mb-9">
                  <label for="form-label" class="h6 mb-2">販售單位</label>

                  <select
                    class="form-select border border-primary"
                    aria-label="Default select example"
                    v-model="tempProduct.unit"
                  >
                    <option selected disabled value="">請選擇單位</option>
                    <option :value="unit" v-for="unit in units" :key="unit">
                      {{ unit }}
                    </option>
                  </select>
                </div>

                <div class="mb-9">
                  <label for="form-label" class="h6 mb-2">庫存數量</label>
                  <input
                    type="number"
                    class="form-control border border-primary"
                    v-model="tempProduct.stockNum"
                  />
                </div>

                <div class="mb-9">
                  <label for="form-label" class="h6 mb-2">商品材質</label>
                  <select
                    class="form-select border border-primary"
                    aria-label="Default select example"
                    v-model="tempProduct.material"
                  >
                    <option selected>請選擇商品材質</option>
                    <option :value="material" v-for="material in materials" :key="material">
                      {{ material }}
                    </option>
                  </select>
                </div>

                <div class="mb-9">
                  <label for="form-label" class="h6 mb-2">贈品</label>
                  {{ tempProduct.gifts }}
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="進口拭銀布"
                      id="silverPolish"
                      v-model="tempProduct.gifts"
                    />

                    <label class="form-check-label text-grey66 mb-1" for="silverPolish">
                      進口拭銀布
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="防潮袋"
                      id="bag"
                      v-model="tempProduct.gifts"
                    />
                    <label class="form-check-label text-grey66 mb-1" for="bag"> 防潮袋 </label>
                  </div>
                </div>
                <div class="mb-9">
                  <label for="form-label" class="h6 mb-2">包裝</label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="品牌經典紙盒包裝"
                      id="paperBox"
                      name="packageWayRadio"
                      checked
                      v-model="tempProduct.wrap"
                    />

                    <label class="form-check-label text-grey66 mb-1" for="paperBox">
                      品牌經典紙盒
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      value="品牌絨布禮盒包裝"
                      id="goodBox"
                      name="packageWayRadio"
                      v-model="tempProduct.wrap"
                    />
                    <label class="form-check-label text-grey66 mb-1" for="goodBox">
                      品牌絨布禮盒
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
                  v-model="tempProduct.content"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer d-block">
          <button type="button" class="btn btn-primary float-start" data-bs-dismiss="modal">
            離開編輯</button
          ><button
            type="button"
            class="btn btn-deco float-end"
            @click="$emit('confirmUpdate', isNew)"
          >
            預覽
          </button>
          <button
            type="button"
            class="btn btn-primary float-end"
            @click="$emit('confirmUpdate', isNew)"
          >
            儲存草稿
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import axios from 'axios'
import draggable from 'vuedraggable'

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env
export default {
  props: ['temp-product', 'is-new'],
  data() {
    return {
      drag: false,
      addModal: null,
      materials: [
        '925銀 925-Silver',
        '14K金 14K-Gold',
        '18K金 18K-Gold',
        '白金 Platinum',
        '黃銅 Brass',
        '異材質 Different Materials'
      ],
      units: ['件', '對/2入', '組', '套'],
      discounts: [
        '9.5',
        '9',
        '8.5',
        '8',
        '7.5',
        '7',
        '6.5',
        '6',
        '5.5',
        '5',
        '4.5',
        '4',
        '3.5',
        '3',
        '2.5',
        '2',
        '1.5',
        '1'
      ],
      discount: null
    }
  },
  components: {
    draggable
  },
  computed: {
    discountPrice() {
      if (!this.tempProduct.origin_price || !this.tempProduct.discount) {
        return ''
      }
      const discountPrice = parseInt(
        this.tempProduct.origin_price * (this.tempProduct.discount / 10)
      )
      this.tempProduct.price = discountPrice
      return discountPrice
    }
  },

  methods: {
    open() {
      this.addModal.show()
    },

    close() {
      this.addModal.hide()
    },
    uploadImage(status, e) {
      const file = e.target.files[0]
      const formData = new FormData()
      const apiUrl = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/upload`
      formData.append('file-to-upload', file)

      axios
        .post(apiUrl, formData)
        .then((res) => {
          if (status === 'main1') {
            console.log(res.data.imageUrl)
            this.tempProduct.imageUrl = res.data.imageUrl
          } else if (status === 'main2') {
            console.log(res.data.imageUrl)
            this.tempProduct.imageUrl2 = res.data.imageUrl
          } else if (status === 'album') {
            console.log(res.data.imageUrl)
            this.tempProduct.imagesUrl.push(res.data.imageUrl)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  watch: {
    tempProduct() {
      console.log('tempProduct內容', this.tempProduct)
    }
  },
  mounted() {
    this.addModal = new Modal(this.$refs.addModal, {
      keyboard: false,
      backdrop: false
    })
  }
}
</script>

<style scope lang="scss">
@import '@/assets/scss/utils/mixin.scss';

.add-images {
  width: 100%;
  height: 150px;
  @include mobile {
    width: 100%;
    height: 100px;
  }
}
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
