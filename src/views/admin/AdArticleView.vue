<template>
  <h1 class="fs-3 mb-4">
    <template v-if="isNewData">建立文章</template>
    <template v-else>編輯文章</template>
  </h1>
  <div v-if="loadingStatusData.loadingItem" class="d-flex justify-content-center align-items-center" style="min-height: 360px;">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div v-else class="row mb-4">
    <div class="col-lg-4">
      <div class="d-md-flex d-lg-block gap-6">
        <div class="mb-3 w-100">
          <label for="articleAuthor" class="form-label">作者</label>
          <input type="email" class="form-control" id="articleAuthor" placeholder="輸入作者" v-model="article.author">
        </div>
        <div class="mb-3 w-100">
          <label for="articleTitle" class="form-label">文章標題</label>
          <input type="email" class="form-control" id="articleTitle" placeholder="輸入標題" v-model="article.title">
        </div>
        <div class="mb-3 w-100">
          <label for="articleCategory" class="form-label">文章分類</label>
          <input type="email" class="form-control" id="articleCategory" placeholder="輸入分類" v-model="article.tag">
        </div>
        <template v-if="!isNewData">
          <div class="mb-3 w-100">
            <p class="mb-2">文章狀態</p>
            <div class="d-flex gap-4">
              <div class="form-check">
                <input class="form-check-input" type="radio" v-model="article.isPublic" value="private" id="private" :checked="!article.isPublic">
                <label class="form-check-label" for="private">
                  非公開草稿
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" v-model="article.isPublic" value="public" id="public" :checked="article.isPublic">
                <label class="form-check-label" for="public">
                  公開文章
                </label>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="mb-3">
        <label for="articleImageFile" class="form-label">圖片上傳</label>
        <input class="form-control mb-3" type="file" ref="articleImageFile" id="articleImageFile" @change="uploadImage" accept=".jpg,.jpeg,.png" />
        <template v-if="article.image">
          <img class="w-100" :src="article.image" :alt="article.title">
        </template>
      </div>
    </div>
    <div class="col-lg-8">
      <p class="form-label">文章內容</p>
      <ckeditor :editor="editor" v-model="article.content" :config="editorConfig" placeholder="Type the content here!"></ckeditor>
    </div>
  </div>
  <div v-if="!loadingStatusData.loadingItem" class="d-flex justify-content-end gap-4">
    <template v-if="isNewData">
      <a href="#" class="btn btn-outline-primary border-1" @click.prevent="updateArticle(article, false)">儲存草稿</a>
      <a href="#" class="btn btn-primary" @click.prevent="updateArticle(article, true)">建立文章</a>
    </template>
    <template v-else>
      <a href="#" class="btn btn-outline-primary border-1" @click.prevent="$router.go(-1)">取消</a>
      <a href="#" class="btn btn-primary" @click.prevent="updateArticle(article)">儲存</a>
    </template>
  </div>
  <VueLoading :active="isLoadingData" />
</template>
<script>
import adArticlesStore from "@/stores/adArticlesStore.js";
import { mapActions, mapState } from 'pinia';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  data() {
    return {
      article: {
        title: '',
        image: '',
        tag: '',
        isPublic: false,
        author: '',
        content: ''
      },
      editor: ClassicEditor,
      editorConfig: {
        placeholder: '輸入文字',
        language: 'zh',
        toolbar: ['undo', 'redo', '|','heading', '|', 'bold', 'italic', 'blockQuote', '|', 'link', 'mediaEmbed'],
      }
    }
  },
  methods: {
    uploadImage() {
    const url = `${import.meta.env.VITE_APP_API_URL}/api/${import.meta.env.VITE_APP_API_NAME}/admin/upload`

    const file = this.$refs.articleImageFile.files[0]

		// file-to-upload 看文件要求
    const formData = new FormData()
    formData.append("file-to-upload", file)

    this.$http.post(url, formData)
      .then((res) => {
        this.article.image = res.data.imageUrl
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
    },
    ...mapActions(adArticlesStore, ['updateArticle'])
  },
  watch: {
    articleData() {
      this.article = { ...this.articleData }
    }
  },
  computed: {
    ...mapState(adArticlesStore, ['articleData', 'isLoadingData', 'loadingStatusData', 'isNewData'])
  },
  mounted() {
    this.article = { ...this.articleData }
  }
}
</script>
<style scoped>
</style>
