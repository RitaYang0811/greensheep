<template>
  <div class="px-10 pt-10 text-start">
    <h1 class="fs-3 mb-6">優惠管理</h1>
    <ul class="nav border-bottom border-primary mb-4">
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '所有優惠券'}"
          href="#"
          @click.prevent="getCoupons('所有優惠券')">
          所有優惠券
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '有效'}" 
          href="#"
          @click.prevent="getCoupons('有效')">
          有效
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link px-6 py-4"
          :class="{ active: currentTab === '尚未生效'}"
          href="#"
          @click.prevent="getCoupons('尚未生效')">
          尚未生效
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link px-6 py-4"
          :class="{ active: currentTab === '已失效'}"
          href="#"
          @click.prevent="getCoupons('已失效')">
          已失效
        </a>
      </li>
    </ul>
    <a href="#" class="btn btn-primary mb-4">新增優惠券</a>
    <table class="table">
      <thead>
        <tr>
          <th>優惠碼</th>
          <th>優惠型式</th>
          <th>開始日期</th>
          <th>結束日期</th>
          <th>狀態</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  <VueLoading :active="isLoading" />
</template>

<script>
export default {
  data () {
    return {
      currentTab: '所有優惠券',
      coupons: [],
      isLoading: false
    }
  },
  methods: {
    getCoupons(tab) {
      this.currentTab = tab
      const url = `${import.meta.env.VITE_APP_API_URL}/admin/signin`
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/scss/all.scss';
.nav-link{
  background-color: transparent;
  color: $primary;
  &.active{
    background-color: $primary;
    color: #fff;
  }
}
</style>