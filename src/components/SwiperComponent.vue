<template>
  <Swiper
    :loop="false"
    :spaceBetween="10"
    :navigation="false"
    :thumbs="{ swiper: thumbsSwiper }"
    class="mySwiper2"
  >
    <SwiperSlide><img :src="product.imageUrl" :alt="product.title"/></SwiperSlide>
    <SwiperSlide v-for="(img, index) in product.imagesUrl" :key="index">
      <img :src="product.imagesUrl[index]" :alt="product.title" />
    </SwiperSlide>
  </Swiper>
  <Swiper
    @swiper="setThumbsSwiper"
    :loop="false"
    :spaceBetween="10"
    :slidesPerView="6"
    :freeMode="true"
    :watchSlidesVisibility="true"
    :watchSlidesProgress="true"
    class="mySwiper"
  >
    <SwiperSlide><img :src="product.imageUrl" :alt="product.title"/></SwiperSlide>
    <SwiperSlide v-for="(img, index) in product.imagesUrl" :key="index">
      <img :src="product.imagesUrl[index]" :alt="product.title" />
    </SwiperSlide>
  </Swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/thumbs/thumbs.min.css';
import SwiperCore, { Navigation, Thumbs } from 'swiper/core';

SwiperCore.use([Navigation, Thumbs]);

export default {
  props: {
    product: Object,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
};
</script>
