<template>
  <div class="modal" tabindex="-1" ref="deleteModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content rounded-3">
        <div class="modal-header bg-danger rounded-top-2">
          <h5 class="modal-title fw-medium text-white ps-3 py-2">刪除商品</h5>
        </div>
        <div class="modal-body h6 fw-medium py-4 text-dark text-center">
          <p class="mb-3">刪除後無法復原</p>
          <p>
            是否確定刪除 <span class="text-danger fw-bold">{{ tempProduct.title }} </span> ?
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">離開</button>
          <button
            type="button"
            class="btn btn-danger"
            @click="$emit('confirmDelete', tempProduct.id)"
          >
            確定刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  props: ['temp-Product'],
  data() {
    return {
      deleteModal: null
    }
  },
  methods: {
    open() {
      this.deleteModal.show()
    },

    close() {
      this.deleteModal.hide()
    }
  },
  mounted() {
    this.deleteModal = new Modal(this.$refs.deleteModal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>

<style></style>
