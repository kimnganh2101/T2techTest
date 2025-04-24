<template>
  <swiper
    :cssMode="true"
    :navigation="true"
    :pagination="true"
    :mousewheel="true"
    :keyboard="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide ><img src="https://mastererp.mylifecompany.com/Resources/Images/banner%201.jpg" alt="" loading="lazy"></swiper-slide>
    <swiper-slide><img src="https://mastererp.mylifecompany.com/Resources/Images/Banner%208.jpg" alt="" loading="lazy"></swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
import 'swiper/css';

  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  import '../assets/styles/swiper.scss';

  // import required modules
  import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Navigation, Pagination, Mousewheel, Keyboard],
      };
    },
  };
</script>
