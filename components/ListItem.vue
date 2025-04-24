<template>
  <div class="list-category scrollbar-custom">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>

    <template v-else>
        
        
      <div data-v-12865abb
      
        v-for="(category, i) in categories"
        :key="i"
        class="category"
        @click="setActive(i)"
      >
        <div data-v-12865abb class="cate-item cursor-pointer">
          <span data-v-12865abb
            class="cate-name fz-lg"
            :class="{ 'color-primary': activeIndex === i }"
          >
            {{ category.name }}
          </span>
          <img
            
            src="https://yenmarket.vn/images/icon-arrow.svg"
            alt=""
            loading="lazy"
            class="img-arrow rotate--90"
          />
        </div>
      </div>

      <div data-v-12865abb
        class="list-subcate category d-flex h-100 scrollbar-custom overflow-y-scroll d-flex flex-column gap-0 p-0"
        v-if="activeCategory && activeCategory.children.length"
      >
        <div data-v-12865abb
          v-for="(sub, j) in activeCategory.children"
          :key="j"
          class="subcate-item cate-item w-100 cursor-pointer"
        >
          <span data-v-12865abb class="subcate-name cate-name fz-lg">{{ sub }}</span>
          <img data-v-12865abb src="https://yenmarket.vn/images/icon-arrow.svg" alt="" class="img-arrow rotate--90" loading="lazy" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { fetchMenu } from "@/utils/fakeApi";

const categories = ref([]);
const loading = ref(true);
const error = ref(null);
const activeIndex = ref(1); // mặc định OUR PRODUCTS

const activeCategory = computed(() => categories.value[activeIndex.value]);

const setActive = (index) => {
  activeIndex.value = index;
};

onMounted(async () => {
  try {
      categories.value = await fetchMenu();

  


  } catch (err) {
    error.value = "Lỗi khi tải danh mục";
  } finally {
    loading.value = false;
  }
});
</script>
