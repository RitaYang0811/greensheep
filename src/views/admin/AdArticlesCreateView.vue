<template>
  <h1 class="fs-3 mb-4">建立文章</h1>
  <div class="row mb-4">
    <div class="col-lg-4">
      <div class="d-md-flex d-lg-block gap-6">
        <div class="mb-3 w-100">
          <label for="exampleFormControlInput1" class="form-label">作者</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="輸入作者" v-model="article.author">
        </div>
        <div class="mb-3 w-100">
          <label for="exampleFormControlInput1" class="form-label">文章標題</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="輸入標題" v-model="article.title">
        </div>
        <div class="mb-3 w-100">
          <label for="exampleFormControlInput2" class="form-label">文章分類</label>
          <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="輸入分類" v-model="article.tag[0]">
        </div>
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
  <div class="d-flex justify-content-end gap-4">
    <a href="#" class="btn btn-outline-primary border-1" @click.prevent="updateArticle(article, false)">儲存草稿</a>
    <a href="#" class="btn btn-primary" @click.prevent="updateArticle(article, true)">建立文章</a>
  </div>
  <VueLoading :active="isLoadingData" />
</template>
<script>
import adminArticlesStore from "@/stores/adminArticlesStore.js";
import { mapActions, mapState } from 'pinia';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  data() {
    return {
      article: {
        title: '',
        image: '',
        tag: [],
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
    ...mapActions(adminArticlesStore, ['updateArticle'])
  },
  computed: {
    ...mapState(adminArticlesStore, ['articleData', 'isLoadingData'])
  },
  mounted() {
    this.article = { ...this.articleData }
  }
}
</script>
<style scoped>
</style>
