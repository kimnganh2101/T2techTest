<script>
import { fetchProducts } from '~/utils/fakeApi';

export default {
  data() {
    return {
      products: [],
      loading: true,
      error: null,
    };
  },
  async mounted() {
  try {
    this.loading = true;
    this.products = await fetchProducts();
  } catch (err) {
    this.error = err.message || 'Đã xảy ra lỗi khi tải sản phẩm';
  } finally {
    this.loading = false;
  }
}
};
</script>

<template>
  <div v-if="loading" class="loading-container">Loading...</div>
  <div v-if="error" class="error">   
    <p>Error: {{ error }}</p>
  </div>
  <div v-if="!loading && !error" class="list-item">
    <div v-for="product in products" :key="product.name" class="item-info">
      <div class="item-function">
        <div class="item-img cursor-pointer">
          <img :src="product.image" alt="product.name" loading="lazy">
        </div>
        <div class="group-quantity">
          <div class="btn-plus bg-primary">
            <img class="icon-white w-100" src="https://yenmarket.vn/images/icon-cart.svg" alt="" loading="lazy">
          </div>
        </div>
      </div>
      <div class="item-name">
        <span class="span-name cursor-pointer hover-primary limit-line-2 fw-bolder fz-lg color-text">
          {{ product.name }}
        </span>
        <div class="item-price">
          <span class="span-price cursor-pointer color-primary fw-bold">{{ product.price }}</span>
          <span class="span-price cursor-pointer color-primary">{{ product.unit }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


