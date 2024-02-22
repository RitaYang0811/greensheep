<template>
  <Header></Header>
  <CartComponent></CartComponent>
  <RouterView />
  <Footer></Footer>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import CartComponent from '@/components/CartComponent.vue';

export default {
  components: {
    Header,
    Footer,
    CartComponent
  }
}
</script>