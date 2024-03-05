import { defineStore } from 'pinia'

export default defineStore('searchStore', {
  state: () => ({
    searchQuery: ''
  }),
  actions: {
    setSearchWord(word) {
      this.searchQuery = word
      console.log('store搜索詞', this.searchQuery)
    }
  }
})
