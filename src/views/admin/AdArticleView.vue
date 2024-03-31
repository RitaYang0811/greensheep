<template>
  <h1 class="fs-3 mb-4">
    <template v-if="isNew">建立文章</template>
    <template v-else>編輯文章</template>
  </h1>
  <VForm
    ref="articleForm"
    @submit="updateArticle(articleData, activityIsPublic, editIsPublic)"
    v-slot="{ errors, meta }"
  >
    <div
      v-if="loadingStatus.loadingItem"
      class="d-flex justify-content-center align-items-center"
      style="min-height: 360px;"
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="row mb-4">
      <div class="col-lg-4">
        <div class="d-md-flex d-lg-block gap-6">
          <div class="mb-3 w-100">
            <label for="articleAuthor" class="form-label h6">*作者</label>
            <VField
              type="text"
              name="作者"
              rules="required"
              class="form-control border-1"
              :class="{ 'is-invalid': errors['作者'] }"
              id="articleAuthor"
              placeholder="輸入作者"
              v-model="articleData.author" />
            <ErrorMessage name="作者" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3 w-100">
            <label for="articleTitle" class="form-label h6">*文章標題</label>
            <VField
              type="text"
              name="標題"
              rules="required"
              class="form-control border-1"
              :class="{ 'is-invalid': errors['標題'] }"
              id="articleTitle"
              placeholder="輸入標題"
              v-model="articleData.title" />
            <ErrorMessage name="標題" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3 w-100">
            <label for="articleCategory" class="form-label h6">*文章分類</label>
            <VField
              type="text"
              name="分類"
              rules="required"
              class="form-control border-1"
              :class="{ 'is-invalid': errors['分類'] }"
              id="articleCategory"
              placeholder="輸入分類"
              v-model="articleData.tag" />
            <ErrorMessage name="分類" class="invalid-feedback"></ErrorMessage>
          </div>
          <template v-if="!isNew">
            <div class="mb-3 w-100">
              <p class="mb-2 h6">文章狀態</p>
              <div class="d-flex gap-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="editIsPublic"
                    value="public"
                    id="public"
                    :checked="articleData.isPublic"
                  />
                  <label class="form-check-label" for="public">
                    公開文章
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="editIsPublic"
                    value="private"
                    id="private"
                    :checked="!articleData.isPublic"
                  />
                  <label class="form-check-label" for="private">
                    非公開草稿
                  </label>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="mb-3">
          <label for="articleImageFile" class="form-label h6">圖片上傳</label>
            <input
              class="form-control border-1"
              type="file"
              ref="articleImageFile"
              id="articleImageFile"
              @change="uploadImage"
              accept=".jpg,.jpeg,.png"
            />
        </div>
        <div class="mb-3">
          <div class="mb-3 d-flex justify-content-between align-items-end">
            <p class="h6">圖片預覽</p>
            <p class="fs-8 fst-italic">*未上傳圖片將使用預設圖片</p>
          </div>
          <template v-if="!loadingUploadImage">
            <img
              class="col-12 col-md-8 col-lg-12 col-xxl-10 object-fit-cover mx-auto d-block"
              :src="articleData.image"
              :alt="articleData.title"
              style="height: 280px;"
            >
          </template>
          <template v-else>
            <div
              class="d-flex flex-column justify-content-center align-items-center"
              style="height: 280px;"
            >
              <div class="spinner-border mb-3" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p>圖片上傳中...</p>
            </div>
          </template>
        </div>
      </div>
      <div class="col-lg-8">
        <p class="form-label h6">*文章內容</p>
        <VField
          name="文章內容"
          v-model.lazy="articleData.content"
          rules="required"
        >
          <Ckeditor
            :editor="editor"
            :config="editorConfig"
            v-model.lazy="articleData.content"
            :class="{ 'is-invalid': errors['文章內容'] }"
            @blur="blurValidate"
          ></Ckeditor>
        </VField>
        <ErrorMessage name="文章內容" class="invalid-feedback text-end mt-2"/>
      </div>
    </div>
    <div
      v-if="!loadingStatus.loadingItem"
      class="d-flex justify-content-end gap-4 mb-4"
      @click="submitActivity($event)"
    >
      <template v-if="isNew">
        <button
          type="submit"
          ref="toPrivate"
          class="btn btn-outline-primary border-1"
          :disabled="!meta.valid"
        >
          儲存草稿
        </button>
        <button
          type="submit"
          ref="toPublic"
          class="btn btn-primary"
          :disabled="!meta.valid"
        >
          建立文章
        </button>
      </template>
      <template v-else>
        <a
          href="#"
          class="btn btn-outline-primary border-1"
          @click.prevent="$router.go(-1)"
        >
          取消
        </a>
        <button
          type="submit"
          ref="toSave"
          class="btn btn-primary"
          :disabled="!meta.valid"
        >
          儲存
        </button>
      </template>
    </div>
  </VForm>
  <VueLoading :active="isLoading" />
</template>
<script>
import adArticlesStore from "@/stores/adArticlesStore.js"
import { mapActions, mapState } from 'pinia'
import { toastError } from "@/utils/sweetalertToast.js"

import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import MyUploadAdapter from '@/utils/uploadImage.js';

const { VITE_APP_API_URL, VITE_APP_API_NAME } = import.meta.env

export default {
  data() {
    return {
      activityIsPublic: '',
      // 新增文章的初始資料
      articleData: {
        title: '',
        image: 'https://storage.googleapis.com/vue-course-api.appspot.com/greensheep/1710324018252.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Q8VnQrrKs2bPdV%2FLE8AvdHwtbfs8JJ4yypDmzlfHe%2BnYNqTRbjHyaBnw7F0ytLootayj4rg8uFvlAp5S1cpB3l2130r71eoZnqJblCsDvUQFLtq6G%2FKZBang5b%2FCkmf37IEn1kkNpbwGQgAbLeb87Ms0AUgPyWP0Hb89HEeOe9KtsHBow7rHcBcvt6mV2YNsLFmLmk5ezOsvxpH4rj0vROfTMiHopBuK3Nixp7DoT0mG0vrzm3mEqHjmqRlQ470dU03hxgtufm0TAuKN0mrdGSgezBvaMhKGKvJrl4vJuB53vAiZJsmd92FMMz5Ck4umW6e3jCjm%2Fc0%2BS9JOgFKemA%3D%3D',
        tag: '',
        isPublic: false,
        author: '',
        content: ''
      },
      loadingUploadImage: false,
      editIsPublic: '',
      editor: ClassicEditor,
      editorConfig: {
        placeholder: '輸入文字',
        language: 'zh',
        toolbar: {
          items: [
            'undo', 'redo', '|','heading', '|',
            'bold', 'italic', 'blockQuote', '|',
            'bulletedList', 'numberedList', '|',
            'link','imageUpload', 'mediaEmbed', '|',
          ],
          shouldNotGroupWhenFull: true // 工具列寬度不足時換行
        },
        image: {
          toolbar: [
            {
              name: 'imageStyle:矩形',
              title: '矩形',
              items: [ 'imageStyle:alignLeft', 'imageStyle:alignRight' ],
              defaultItem: 'imageStyle:alignLeft'
            },
            {
              name: 'imageStyle:上及下',
              title: '上及下',
              items: [ 'imageStyle:alignBlockLeft', 'imageStyle:alignCenter', 'imageStyle:alignBlockRight' ],
              defaultItem: 'imageStyle:alignBlockLeft'
            },
            '|', 'imageTextAlternative',
            '|', 'toggleImageCaption']
        },
        extraPlugins: [
          function(editor) {
            editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
              return new MyUploadAdapter(loader);
          }}
        ]
      }
    }
  },
  methods: {
    // 提交為公開文章或草稿
    submitActivity(e) {
      if(e.target.innerText === '儲存草稿') this.activityIsPublic = false
      if(e.target.innerText === '建立文章') this.activityIsPublic = true
    },
    // 上傳圖片
    uploadImage() {
      const file = this.$refs.articleImageFile.files[0]
      // 當上傳圖片後，若再次開啟選擇檔案視窗但未選擇檔案的話會觸發此方法，
      // 因此判斷是否有選擇到檔案來決定是否繼續執行
      if(!file) return
      
      const url = `${VITE_APP_API_URL}/api/${VITE_APP_API_NAME}/admin/upload`
      this.loadingUploadImage = true

      // file-to-upload 看文件要求
      const formData = new FormData()
      formData.append("file-to-upload", file)

      this.$http.post(url, formData)
        .then((res) => {
          this.articleData.image = res.data.imageUrl
        })
        .catch((err) => {
          toastError(err.response.data.message)
        })
        .finally(() => {
          this.loadingUploadImage = false
        })
    },
    // 手動觸發 ckeditor 驗證
    blurValidate() {
      this.$refs.articleForm.validateField('文章內容')
    },
    ...mapActions(adArticlesStore, ['updateArticle', 'getArticle'])
  },
  watch: {
    // 編輯時觸發 mounted 的 getArticle(id)，取得 id 的 data
    article() {
      this.articleData = { ...this.article }
      // 給 radio 選項綁定使用
      this.articleData.isPublic ? this.editIsPublic = "public" : this.editIsPublic = "private"
    },
  },
  computed: {
    ...mapState(adArticlesStore, ['article', 'isLoading', 'loadingStatus','formStatus' , 'isNew'])
  },
  mounted() {
    // 在編輯/新增頁面重整時的 isNew 為初始值(true)，所以不能用 isNew 做判斷
    // $route.name 如果不是 新增頁面 的 pathname，即為編輯
    if(this.$route.name !== 'AdminCreateArticle') {
      const id = this.$route.params.id
      this.getArticle(id)
    }
  }
}
</script>
