<template>
<div class="modal fade" ref="adCouponCompModal" role="dialog">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">建立優惠券</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary">確定</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  data() {
    return {
      modal: ''
    }
  },
  methods: {
    openModal() {
      this.modal.show()
    },
    closeModal() {
      this.modal.hide()
    }
  },
  mounted() {
    this.modal = new Modal(this.$refs.adCouponCompModal,{
      backdrop: false
    })
  }
}
</script>