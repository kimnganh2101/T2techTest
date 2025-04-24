<script>
import { ref, onMounted } from "vue"; 
import { getProducts } from "@/utils/fakeApi"; 
export default {
  name: "ProductListMeat",
  setup() {
    const products = ref([]); 
    const loading = ref(true); 
    const error = ref(null); 

    // Dùng onMounted để thực thi sau khi component được render
    onMounted(async () => {
      try {
        products.value = await getProducts(); 
      } catch (err) {
        error.value = err.message || "An error occurred"; 
      } finally {
        loading.value = false; 
      }
    });

    return {
      products,
      loading,
      error,
    };
  },
};
</script>


<template>
  <div v-if="loading" class="loading-container">Loading...</div>
  <div v-if="error" class="error">   
    <p>Error: {{ error }}</p>
  </div>
  <div v-if="!loading && !error" class="list-item">
    <div v-for="(product, index) in products" :key="index" class="">
      <div class="item-info">
        <div class="item-function">
          <div class="item-img cursor-pointer">
            <img :src="product.image" :alt="product.name" loading="lazy"/>
          </div>
          <div class="group-quantity">
            <div class="btn-plus bg-primary">
              <img class="icon-white w-100" src="https://yenmarket.vn/images/icon-cart.svg" alt="Add to cart"  loading="lazy"/>
            </div>
          </div>
        </div>
        <div class="item-name">
          <span class="span-name cursor-pointer hover-primary limit-line-2 fw-bolder fz-lg color-text">
            {{ product.name }}
          </span>
          <div class="item-price">
            <span class="span-price cursor-pointer color-primary fw-bold">
              {{ product.price }}
            </span>
            <span class="span-price cursor-pointer color-primary">
              {{ product.unit }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


