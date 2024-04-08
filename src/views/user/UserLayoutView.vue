<template>
  <HeaderComp />
  <CartComponent />
  <div class="main">
    <RouterView />
  </div>
  <FooterComp />
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import FooterComp from '@/components/FooterComp.vue'
import CartComponent from '@/components/CartComponent.vue'

export default {
  components: {
    HeaderComp,
    FooterComp,
    CartComponent
  }
}
</script>
<style scoped lang="scss">
@import '@/assets/scss/utils/mixin.scss';

.main {
  min-height: calc(100vh - 185.4px);

  @include mobile {
    min-height: calc(100vh - 270.19px);
  }
}
</style>
