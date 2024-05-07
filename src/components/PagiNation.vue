<template>
  <nav aria-label="Page navigation ">
    <ul class="cus-pagination list-unstyled mb-20 mb-lg-25">
      <li class="page-item text-center" :class="{ disabled: pagination.current_page === 1 }">
        <a class="page-link" aria-label="Previous">
          <span class="material-icons fs-8 p-1"> navigate_before </span>
        </a>
      </li>

      <li
        class="page-item fs-8 text-center"
        v-for="(p, index) in pagination.total_pages"
        :key="index"
        :class="{ active: p === pagination.current_page }"
      >
        <a class="page-link" @click.prevent="updatePage(p)">{{ p }}</a>
      </li>

      <li class="page-item text-center" :class="{ disabled: pagination.has_next === false }">
        <a class="page-link" aria-label="Next">
          <span class="material-icons fs-8 p-1"> navigate_next </span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pagination'],
  data() {
    return {}
  },
  methods: {
    updatePage(p) {
      this.$emit('update-page', p)
    }
  }
}
</script>

<style></style>
