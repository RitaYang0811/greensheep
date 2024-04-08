<template>
  <div class="modal modal-xl" tabindex="-1" ref="addModal">
    <div class="modal-dialog modal-dialog-scrollable">
      <VForm class="modal-content" @submit="$emit('confirmUpdate', isNew)" v-slot="{ errors }">
        <div class="modal-header bg-primary">
          <h5 v-if="isNew === true" class="modal-title fw-medium text-white ps-3 py-2">新增商品</h5>
          <h5 v-else class="modal-title fw-medium text-white ps-3 py-2">編輯商品</h5>
        </div>
        <div class="modal-body">
          <div class="container-fluid">
            <div class="row my-4">
              <div class="col-3">
                <h6 class="fw-medium mb-2">商品圖片</h6>

                <span class="font-notosans fs-8">最多總共可上傳10張照片</span>
              </div>
              <div class="col-9">
                <h6 class="mb-4">商品首圖</h6>
                <div class="row row-cols-1 row-cols-md-2 g-4 mb-8">
                  <div class="col">
                    <div class="d-flex flex-column gap-2">
                      <div>第一張</div>
                      <input
                        name="商品首圖-1"
                        rules="required"
                        class="form-control mb-2"
                        type="file"
                        id="formFile"
                        @change="uploadImage('main1', $event)"
                      />
                      <!-- <ErrorMessage name="商品首圖-1" class="invalid-feedback" /> -->
                      <img
                        v-if="tempProduct.imageUrl"
                        :src="tempProduct.imageUrl"
                        :alt="tempProduct.title"
                        class="object-fit-cover"
                        style="height: 200px; width: 100%"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="d-flex flex-column gap-2">
                      <div>第二張</div>
                      <input
                        name="商品首圖-2"
                        rules="required"
                        class="form-control mb-2"
                        type="file"
                        id="formFile"
                        @change="uploadImage('main2', $event)"
                      />
                      <!-- <ErrorMessage name="商品首圖-2" class="invalid-feedback" /> -->
                      <img
                        v-if="tempProduct.imageUrl2"
                        :src="tempProduct.imageUrl2"
                        :alt="tempProduct.title"
                        class="object-fit-cover"
                        style="height: 200px; width: 100%"
                      />
                    </div>
                  </div>
                </div>
                <h6 class="mb-1">商品相簿</h6>
                <div class="mb-1">可拖曳改變照片順序</div>
                <input
                  class="form-control mb-2"
                  type="file"
                  id="formFile"
                  @change="uploadImage('album', $event)"
                />
                <!--使用draggable组件-->

                <draggable
                  v-model="tempProduct.imagesUrl"
                  item-key="id"
                  class="row row-cols-2 row-cols-md-4 row-cols-lg-8 g-2 mb-4"
                  ghost-class="ghost"
                  @start="drag = true"
                  @end="drag = false"
                >
                  <template v-slot:item="{ element, index }">
                    <div class="col position-relative">
                      <img :src="element" alt="photos" class="add-images object-fit-cover" />
                      <button
                        @click="deleteImage(index)"
                        class="btn rounded-circle btn-sm btn-light position-absolute top-0 end-0 z-3"
                      >
                        X
                      </button>
                    </div>
                  </template>
                </draggable>
              </div>
            </div>
            <hr />
            <div class="row my-4">
              <div class="col-3">
                <h6 class="fw-medium">商品資訊</h6>
              </div>
              <div class="col-9">
                <div class="mb-9">
                  <label for="productTitle" class="h6 mb-2">*商品名稱</label>
                  <VField
                    type="text"
                    name="商品名稱"
                    rules="required|max:15"
                    class="form-control border border-primary"
                    :class="{ 'is-invalid': errors['商品名稱'] }"
                    id="productTitle"
                    v-model="tempProduct.title"
                  />
                  <ErrorMessage name="商品名稱" class="invalid-feedback" />
                  <div id="nameHelp" class="form-text font-notosans">
                    商品名稱請不要超過15個字（含中文、英文、數字、空格及符號）
                  </div>
                </div>
                <div class="mb-9">
                  <label for="productCategory" class="h6 mb-2">*商品分類</label>
                  <VField
                    id="productCategory"
                    name="商品分類"
                    class="form-select border border-primary"
                    :class="{ 'is-invalid': errors['商品分類'] }"
                    rules="required"
                    aria-label="Default select example"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                    as="select"
                  >
                    <option value="" disabled>請選擇商品分類</option>
                    <option v-for="category in categories" :key="category" :value="category">
                      {{ category }}
                    </option>
                  </VField>
                  <ErrorMessage name="商品分類" class="invalid-feedback" />
                </div>
                <div class="mb-9">
                  <label for="form-label" class="h6 mb-2">*商品購買方式</label>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="purchaseWayRadio"
                      id="inStockProduct"
                      value="現貨商品"
                      v-model="tempProduct.purchaseWay"
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
                  <label for="makingDays" class="h6 mb-2">*商品出貨天數</label>
                  <VField
                    as="select"
                    name="出貨天數"
                    id="makingDays"
                    rules="required"
                    class="form-select border border-primary"
                    :class="{ 'is-invalid': errors['出貨天數'] }"
                    placeholder="請選擇商品出貨天數"
                    aria-label="Default select example"
                    v-model="tempProduct.makingDays"
                  >
                    <option selected value="" disabled>請選擇商品出貨天數</option>
                    <option :value="day" v-for="day in 60" :key="day">{{ day }}</option>
                  </VField>
                  <ErrorMessage name="出貨天數" class="invalid-feedback" />
                </div>
                <div class="mb-3">
                  <label for="productPrice" class="h6 mb-2">*商品原價格 (NT$)</label>
                  <VField
                    id="productPrice"
                    name="商品原價"
                    type="number"
                    rules="required"
                    class="form-control border border-primary"
                    :class="{ 'is-invalid': errors['商品原價'] }"
                    v-model="tempProduct.origin_price"
                  />
                  <ErrorMessage name="商品原價" class="invalid-feedback" />
                </div>
                <div class="mb-3">
                  <label for="productDiscount" class="h6 mb-2">*商品折扣</label>
                  <VField
                    as="select"
                    id="productDiscount"
                    name="商品折扣"
                    rules="required"
                    class="form-select border border-primary"
                    :class="{ 'is-invalid': errors['商品折扣'] }"
                    aria-label="Default select example"
                    placeholder="請選擇商品折扣"
                    v-model="tempProduct.discount"
                  >
                    <option selected disabled value="">*請選擇折扣比</option>
                    <option :value="10">無折扣</option>
                    <option :value="discount" v-for="discount in discounts" :key="discount">
                      {{ discount }} 折
                    </option>
                  </VField>
                  <ErrorMessage name="商品折扣" class="invalid-feedback" />
                </div>
                <div class="mb-9">
                  <label for="form-label" class="h6 mb-2">商品折扣後價格 (NT$)</label>
                  <input
                    type="text"
                    class="form-control border border-primary"
                    v-model="discountPrice"
                    disabled
                  />
                </div>
                <div class="mb-9">
                  <label for="productUnit" class="h6 mb-2">*販售單位</label>
                  <VField
                    as="select"
                    id="productUnit"
                    name="單位"
                    rules="required"
                    :class="{ 'is-invalid': errors['單位'] }"
                    class="form-select border border-primary"
                    aria-label="Default select example"
                    v-model="tempProduct.unit"
                  >
                    <option selected disabled value="">請選擇單位</option>
                    <option :value="unit" v-for="unit in units" :key="unit">
                      {{ unit }}
                    </option>
                  </VField>
                  <ErrorMessage name="單位" class="invalid-feedback" />
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
                    placeholder="請選擇商品材質"
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
                <div class="mb-9">
                  <label for="form-label" class="h6 mb-2">*是否上架</label>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      name="isEnabled"
                      id="isEnabled"
                      v-model="tempProduct.is_enabled"
                    />
                    <label class="form-check-label text-grey66" for="isEnabled">
                      {{ tempProduct.is_enabled ? '上架' : '未上架' }}
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
                  style="white-space: pre-wrap"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer d-block">
          <button type="button" class="btn btn-primary float-start" @click="close()">
            離開編輯
          </button>

          <button v-if="isNew === true" type="submit" class="btn btn-deco float-end">
            新增儲存
          </button>
          <button v-else type="submit" class="btn btn-deco float-end">修改儲存</button>
        </div>
      </VForm>
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
      categories: [
        '項鍊 PENDANT',
        '戒指 RING',
        '耳環 EARRINGS',
        '手鍊 BRACELET',
        '客製設計 CUSTOMIZED'
      ],
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

      return discountPrice
    }
  },
  watch: {
    discountPrice() {
      this.tempProduct.price = this.discountPrice
    }
  },

  methods: {
    open() {
      this.addModal.show()
    },

    close() {
      this.addModal.hide()
    },
    deleteImage(index) {
      this.tempProduct.imagesUrl.splice(index, 1)
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
            this.tempProduct.imageUrl = res.data.imageUrl
          } else if (status === 'main2') {
            this.tempProduct.imageUrl2 = res.data.imageUrl
          } else if (status === 'album') {
            this.tempProduct.imagesUrl.push(res.data.imageUrl)
          }
        })
        .catch((err) => {
          alert(err)
        })
    }
  },

  mounted() {
    this.addModal = new Modal(this.$refs.addModal, {
      keyboard: false,
      backdrop: 'static'
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
    height: 100px;
  }
  &:hover {
    border: solid 1px #eee;
    opacity: 50%;
    cursor: move;
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
