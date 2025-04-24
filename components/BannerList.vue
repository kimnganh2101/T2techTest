<script>
import { getBanners } from "@/utils/fakeApi";

export default {
  name: "BannerList",
  data() {
    return {
      banners: [],
      loading: true,
      error: null
    };
  },
  async mounted() {
    try {
      this.banners = await getBanners();
    } catch (err) {
      this.error = "Không thể tải banner. Vui lòng thử lại sau.";
      console.error(err);
    } finally {
      this.loading = false;
    }
  }
};



</script>


<template>
  <div class="pt-3 align-items-center msb d-flex overflow-x-auto">
    <div
      v-for="banner in banners"
      :key="banner.id"
      class="effect-ming col-10 col-sm-8 col-md-7 col-lg-4"
    >
      <a
        class="rounded modal-open position-relative w-100 ratio2by1 has-edge aspect d-block sitdown"
        href="#"
        :title="banner.title"
      >
        <img
          class="d-block img img-cover"
          loading="lazy"
          :src="banner.src"
          :alt="banner.title"
        />
      </a>
    </div>
  </div>
</template>


