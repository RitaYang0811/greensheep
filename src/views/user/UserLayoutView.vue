<template>
  <Header></Header>
  <CartComponent></CartComponent>
  <div class="main">
    <RouterView />
  </div>
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import CartComponent from '@/components/CartComponent.vue'

export default {
  components: {
    Header,
    Footer,
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
