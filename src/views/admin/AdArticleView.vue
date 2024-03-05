<template>
  <h1 class="fs-3 mb-4">
    <template v-if="isNew">建立文章</template>
    <template v-else>編輯文章</template>
  </h1>
  <VForm @submit="updateArticle(articleData, activityIsPublic, editIsPublic)" v-slot="{ errors }">
    <div v-if="loadingStatus.loadingItem" class="d-flex justify-content-center align-items-center" style="min-height: 360px;">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else class="row mb-4">
      <div class="col-lg-4">
        <div class="d-md-flex d-lg-block gap-6">
          <div class="mb-3 w-100">
            <label for="articleAuthor" class="form-label">作者</label>
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
            <label for="articleTitle" class="form-label">文章標題</label>
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
            <label for="articleCategory" class="form-label">文章分類</label>
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
              <p class="mb-2">文章狀態</p>
              <div class="d-flex gap-4">
                <div class="form-check">
                  <input class="form-check-input" type="radio" v-model="editIsPublic" value="public" id="public" :checked="articleData.isPublic">
                  <label class="form-check-label" for="public">
                    公開文章
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" v-model="editIsPublic" value="private" id="private" :checked="!articleData.isPublic">
                  <label class="form-check-label" for="private">
                    非公開草稿
                  </label>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="mb-3">
          <label for="articleImageFile" class="form-label">圖片上傳</label>
          <div class="mb-3">
            <input class="form-control border-1" :class="{ 'is-invalid': !formStatus.hasFormImage }" type="file" ref="articleImageFile" id="articleImageFile" @change="uploadImage" accept=".jpg,.jpeg,.png" />
            <span class="invalid-feedback">圖片 為必填</span>
          </div>
          <template v-if="articleData.image">
            <img class="w-100" :src="articleData.image" :alt="articleData.title">
          </template>
        </div>
      </div>
      <div class="col-lg-8">
        <p class="form-label">文章內容</p>
        <ckeditor :class="{ 'is-invalid': !formStatus.hasFormContent }" :editor="editor" v-model.lazy="articleData.content" :config="editorConfig" placeholder="Type the content here!"></ckeditor>
        <span class="invalid-feedback text-end">文章內容 為必填</span>
      </div>
    </div>
    <div v-if="!loadingStatus.loadingItem" class="d-flex justify-content-end gap-4" @click="submitActivity($event)">
      <template v-if="isNew">
        <button type="submit" ref="toPrivate" class="btn btn-outline-primary border-1">儲存草稿</button>
        <button type="submit" ref="toPublic" class="btn btn-primary">建立文章</button>
      </template>
      <template v-else>
        <a href="#" class="btn btn-outline-primary border-1" @click.prevent="$router.go(-1)">取消</a>
        <button type="submit" ref="toSave" class="btn btn-primary">儲存</button>
      </template>
    </div>
  </VForm>
  <VueLoading :active="isLoading" />
</template>
<script>
import adArticlesStore from "@/stores/adArticlesStore.js";
import { mapActions, mapState } from 'pinia';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  data() {
    return {
      activityIsPublic: '',
      articleData: {
        title: '',
        image: '',
        tag: '',
        isPublic: false,
        author: '',
        content: ''
      },
      editIsPublic: '',
      editor: ClassicEditor,
      editorConfig: {
        placeholder: '輸入文字',
        language: 'zh',
        toolbar: ['undo', 'redo', '|','heading', '|', 'bold', 'italic', 'blockQuote', '|', 'link', 'mediaEmbed'],
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
    const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/upload`

    const file = this.$refs.articleImageFile.files[0]

		// file-to-upload 看文件要求
    const formData = new FormData()
    formData.append("file-to-upload", file)

    this.$http.post(url, formData)
      .then((res) => {
        this.articleData.image = res.data.imageUrl
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
    },
    ...mapActions(adArticlesStore, ['updateArticle'])
  },
  watch: {
    article() {
      this.articleData = { ...this.article }
      // 給 radio 選項綁定使用
      if(!this.isNew) {
        this.articleData.isPublic ? this.editIsPublic = "public" : this.editIsPublic = "private"
      }
    },
    'articleData.image'() {
      this.formStatus.hasFormImage = true
    },
    'articleData.content'() {
      this.articleData.content ? this.formStatus.hasFormContent = true : this.formStatus.hasFormContent = false
    },
  },
  computed: {
    ...mapState(adArticlesStore, ['article', 'isLoading', 'loadingStatus','formStatus' , 'isNew'])
  },
  mounted() {
    this.articleData = { ...this.article }
  }
}
</script>
<style scoped>
</style>
