<template>
  <Loading :isLoading="isLoading" />
  <BannerSwiper />
  <div class="container position-relative py-15">
    <div class="d-none d-lg-block line"></div>
    <div class="row align-items-center flex-column-reverse flex-lg-row pb-15">
      <div class="wow animate__animated animate__fadeInLeft col-12 col-lg-4">
        <div class="d-flex align-items-center mb-7">
          <h3 class="title d-inline-block">珍珠系列</h3>
          <p class="text-lg opacity-6">Pearl</p>
        </div>
        <p class="mb-7">
          珍珠是從一粒細沙開始的，<br />
          所有的美好都值得慢慢等待，<br />
          自然珍珠光澤，閃耀自然光輝，<br />
          完美襯托出時尚品味與典雅氣質。
        </p>
        <a href="#" @click.prevent="goToSeries('珍珠系列')" class="btn btn-dashed"><span>前往</span></a>
      </div>
      <div class="col-12 col-lg-5 offset-lg-3">
        <div class="position-relative bg-ring py-lg-11 mb-15 mb-lg-0">
          <div class="bg-mask"></div>
          <img
            class="wow animate__animated animate__zoomIn position-relative z-1 w-80 w-lg-100
             -ms-lg-offset-4 rounded-3 shadow translate-left-hover top-3"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625319903781.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mzk1w6ZKrwnsx%2BLQrmWZX1sD4F8UjExVKwE4%2B2gF8wgsMxWrOlfHp4NP85hnXJTBXB8Nb6uiINoNiSyFMz%2Fdmh2MSY9lU5NnES5rpaPKwHfK8jCiJYb8jMQDjrjPHEMkCl7ZuNxb5VwWK%2Bsh5zKKBkuozzZHdaczYTl1LL6dhROv6%2FOpOpJkO%2Bo%2FwMjHbNY6CGR0D5KkxhvVBCHZww7WUcmrxGoqclQ2zHIkhnn4IExRoG9iM3zK%2BYhg6d0H3kkHj9kSu2HWuogEK9JJ71zSsbxoaukNS3brjn%2F4Tr9LusX9laVE8Dy434Aq38%2FKsYY4flZk6m650G4ZkKA45eZ0cA%3D%3D"
            alt="珍珠系列"/>
        </div>
      </div>
    </div>
    <div
      class="row align-items-center flex-column flex-lg-row pb-15">
      <div class="col-12 col-lg-5">
        <div class="position-relative bg-crystal py-lg-11 mb-15 mb-lg-0">
          <div class="bg-mask"></div>
          <img
            class="wow animate__animated animate__zoomIn position-relative z-1
            ms-lg-offset-4 shadow rounded-3 translate-right-hover w-80 w-lg-100 top-3"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625321205605.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=X4vC%2BGwGh%2Bfd8dbY9PdsyxK4RBbZVnbo9EXUTZ%2FH2es0WjjRHZGFEtHCdpZzoLinp81DE3iNFw7os6Vy8I0KOu%2Fq1G4iB%2FfgFIX4B2WEq%2FDgedT442BaZ8iWMwMYs06dRbRgMgwVBljuiS6rKablTc63amsb8wzFPkYrKZzg5OXr2lYaYCWQZ50padM4fNoNiwn8czJDzSiRIGZCmd2rEV4eFf7sPMiMnFoGVgML4HHJNDLyuXh%2FqdrENwgQWg4oyPh1QKmgi%2Fz%2B52x%2FwM3qW7LOX8N4UTokYuFIweOjhd2FQ9zhCYMhS8f5itBtGzkz7fHSiJujzGF7M0QFMQC2aQ%3D%3D"
            alt="水晶系列"/>
        </div>
      </div>
      <div class="wow animate__animated animate__fadeInRight col-12 col-lg-4 offset-lg-3">
        <div class="d-flex align-items-center mb-7">
          <h3 class="title d-inline-block">水晶系列</h3>
          <p class="text-lg opacity-6">Crystal</p>
        </div>
        <p class="mb-7">
          天然水晶經過粹煉，<br />
          蘊含著無限的能量波，<br />
          選擇代表妳的能量石，<br />
          散發無與倫比的美麗。
        </p>
        <a href="#" @click.prevent="goToSeries('水晶系列')" class="btn btn-dashed"><span>前往</span></a>
      </div>
    </div>
    <div class="row align-items-center flex-column-reverse flex-lg-row">
      <div class="wow animate__animated animate__fadeInLeft col-12 col-lg-4">
        <div class="d-flex align-items-center mb-7">
          <h3 class="title d-inline-block">鎖骨鏈系列</h3>
          <p class="text-lg opacity-6">Necklace</p>
        </div>
        <p class="mb-7">
          我們知道妳喜歡與眾不同，<br />
          混搭風格更顯個人品味，<br />
          穿戴上對的鎖骨項鍊，為空蕩頸部畫龍點睛<br />
          氣質直接贏在起跑線。
        </p>
        <a href="#" @click.prevent="goToSeries('鎖骨鏈系列')" class="btn btn-dashed"><span>前往</span></a>
      </div>
      <div class="col-12 col-lg-5 offset-lg-3">
        <div class="position-relative bg-earring py-lg-11 mb-15 mb-lg-0">
          <div class="bg-mask"></div>
          <img
            class="wow animate__animated animate__zoomIn position-relative z-1
            -ms-lg-offset-4 rounded-3 shadow translate-left-hover w-80 w-lg-100 top-3"
            src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625322060288.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fNvEeVRsBZ56b5cJvK5l16IPjpVK1H7G0UcVKqureR10yDoFMyHrBecxNtgLhCKIwq48Y4WdJTkrIlGrgFqFyGvOO%2FV%2BtR7YhP4cq4jYKJw9%2B5CVnQimk6ULbF5Y5U2g0oeghCY7gMlBnPeIr9xXWqRcJgmPfaWLc2ruZsBdyDgyo8tuTjKW%2FDXozC4qft6b%2FqGcAOV3l5l5jyodO66QJecyU%2BF55m8B4Ltolv89LETE2MXJB1EuftTAa0yUkU1iZGX8SBIN1T5HcJ4Epan%2Fe33FZnetnfUTTuOVC1bxG8frqtAJ%2BI7YxmvRqhXGbd5Tm94%2B67yyIZleCz1IIy1NAg%3D%3D"
            alt="鎖骨鏈系列"/>
        </div>
      </div>
    </div>
  </div>
  <div class="container pb-15 py-lg-15">
    <div class="wow animate__animated animate__lightSpeedInLeft d-flex align-items-center mb-10">
      <h3 class="title text-3xl">限時特價</h3>
      <p class="text-lg opacity-6">On Sale</p>
    </div>
    <swiper
      :loop="true"
      :breakpoints="breakpoints"
      :spaceBetween="24"
      :autoplay="{
        delay: 2000,
        pauseOnMouseEnter: true
      }"
      :pagination="{ clickable: true }"
      :slidesPerView="1"
      data-wow-delay="0.5s"
      class="sale-container wow animate__animated animate__zoomIn">
      <swiper-slide v-for="item in saleProduct" :key="item.id">
        <div class="sale-item">
          <div class="sale-tag">Hot Issue</div>
          <router-link class="home-swiper-img" :to="`/product/${item.id}`">
            <img :src="item.imageUrl" :alt="item.title" />
          </router-link>
          <div
            class="d-flex align-items-center justify-content-between border-top
            border-light mt-5 pt-5">
            <div>
              <router-link :to="`/product/${item.id}`">
                <p class="fw-normal mb-2">{{ item.title }}</p>
              </router-link>
              <p>
                NT${{ item.price }}
                <span class="text-light text-decoration-line-through ms-2">
                  NT${{ item.origin_price }}
                </span>
              </p>
            </div>
            <div class="d-flex align-items-center">
              <a
                v-if="myFavorite.includes(item.id)"
                href="#"
                class="border bg-white text-secondary rounded-circle p-2 me-4 icon-active-hover"
                @click.prevent="addMyFavorite(item.id)">
                <span class="material-icons"> favorite </span>
              </a>
              <a
                v-else
                href="#"
                class="border rounded-circle p-2 me-4 icon-hover"
                @click.prevent="addMyFavorite(item.id)">
                <span class="material-icons"> favorite_border </span>
              </a>
              <div v-if="addLoading" class="add-loading border rounded-circle p-2">
                <div class="spinner-border spinner-border-sm text-dark" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <div class="position-relative">
                <a
                  v-if="!addLoading"
                  href="#"
                  class="border rounded-circle p-2 icon-hover"
                  @click.prevent="addCart(item.id)">
                  <span class="material-icons"> shopping_cart </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="container pb-15 py-lg-15">
    <div class="wow animate__animated animate__lightSpeedInLeft d-flex align-items-center mb-10">
      <h3 class="title text-3xl">商品專區</h3>
      <p class="text-lg opacity-6">Products</p>
    </div>
    <div class="row row-cols-3">
      <div data-wow-delay="0.5s" class="col-12 col-lg wow animate__animated animate__flipInY">
        <a
          href="#"
          @click.prevent="goToCategory('戒指')"
          class="bg-topic mb-7">
          <img
            class="position-absolute w-100 top-0 rounded-3"
            src="@/assets/images/topic-ring.jpg"
            alt="戒指"/>
          <div class="bg-topic-mask rounded-3"></div>
          <p class="text-2xl position-absolute">戒指</p>
        </a>
        <a
          href="#"
          @click.prevent="goToCategory('手錶')"
          class="bg-topic rounded-3 mb-7 mb-lg-0">
          <img
            class="position-absolute w-100 top-0 rounded-3"
            src="@/assets/images/topic-watch.jpg"
            alt="手錶"/>
          <div class="bg-topic-mask rounded-3"></div>
          <p class="text-2xl position-absolute">手錶</p>
        </a>
      </div>
      <div data-wow-delay="1s" class="col-12 col-lg wow animate__animated animate__flipInY">
        <a
          href="#"
          @click.prevent="goToCategory('項鍊')"
          class="bg-topic bg-topic-necklace mb-7 mb-lg-0 rounded-3">
          <img
            class="position-absolute top-0 w-100 rounded-3"
            src="@/assets/images/topic-necklace.jpg"
            alt="項鍊"/>
          <div class="bg-topic-mask rounded-3"></div>
          <p class="text-2xl position-absolute">項鍊</p>
        </a>
      </div>
      <div data-wow-delay="1.5s" class="col-12 col-lg wow animate__animated animate__flipInY">
        <a
          href="#"
          @click.prevent="goToCategory('耳環')"
          class="bg-topic rounded-3 mb-7">
          <img
            class="position-absolute top-0 w-100 rounded-3"
            src="@/assets/images/topic-earring.jpg"
            alt="耳環"/>
          <div class="bg-topic-mask rounded-3"></div>
          <p class="text-2xl position-absolute">耳環</p>
        </a>
        <a
          href="#"
          @click.prevent="goToCategory('手鍊')"
          class="bg-topic rounded-3">
          <img
            class="position-absolute top-0 w-100 rounded-3"
            src="@/assets/images/topic-bracelet.jpg"
            alt="手鍊"/>
          <div class="bg-topic-mask rounded-3"></div>
          <p class="text-2xl position-absolute">手鍊</p>
        </a>
      </div>
    </div>
  </div>
  <div class="container pb-15 py-lg-15">
    <div class="wow animate__animated animate__lightSpeedInLeft d-flex align-items-center mb-10">
      <h3 class="title text-3xl">關於品牌</h3>
      <p class="text-lg opacity-6">About Us</p>
    </div>
    <div
      class="row row-cols-2 align-items-center flex-column-reverse flex-lg-row
      pb-10 mb-10 border-bottom border-light">
      <div
        class="col-12 col-lg position-relative d-flex flex-column
        flex-md-row d-lg-block wow animate__animated animate__fadeInLeft">
        <h1 class="about-title font-design mb-10 w-50">RingRing</h1>
        <p class="lh-lg letter-spacing-1">
          我們的目標是提供平價但不平凡的飾品，<br />
          讓女孩們追求漂亮的道路變得簡單，<br />
          Ring不僅代表著飾品也代表著環，<br />願你的美麗與RingRing環環相扣。
        </p>
        <div class="home-ellipse">
          <svg viewBox="0 0 340 200" height="200">
            <ellipse
              fill="none"
              stroke="#fff"
              stroke-width="1"
              stroke-dasharray="2"
              cx="160"
              cy="100"
              rx="160"
              ry="70"
              transform="rotate(-15,150,80)"
            />
          </svg>
        </div>
      </div>
      <div class="col-12 col-lg wow animate__animated animate__fadeInRight">
        <img
          class="rounded-3 about-img"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/chiayu/1625342978859.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DdnzFv7qNR1mc288VJSaHBzzcPSAHPygNkPgzgtcHizFyWYvHIjdClYNz9ihNEyRf7PHOoCgTVc%2FzxZ4wi9IK7T%2BfwULMeEJUfEp5yBWY%2FTqiPNnKZOBYFHhWGDWS8RAEDeb%2FD%2FcB4OW9FVpdH4Bjn7s58B222eCVmB7ZbFD6sNUA6b6CXcq5%2FXV1sSpy4%2FuHY22MFvZmWvUx0PZI60LcOMOnqOEvfm1dlNTrncsEbznLNzGuU7XT2Z0EPoTdGfw%2FgJYypKhCpVgBSoUMlW0rdpuJH3u7wSYd96ryzw8AnU%2BuaylW115DFXNdFMArhvJLXVbT68Fz0NOic3cvKQQHw%3D%3D"
          alt="RingRing"/>
      </div>
    </div>
    <ul class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5 pb-10 border-bottom border-light">
      <li
        class="col border-bottom border-md-end border-bottom-md-0 border-light pb-9 pb-md-0
        wow animate__animated animate__zoomIn" >
        <span class="material-icons text-4xl mb-4 mb-md-7">
          local_shipping
        </span>
        <h3 class="text-xl mb-4">交貨快速</h3>
        <p>
          在商品庫存充足下，我們允諾下單三天內會出貨，如您所訂購的商品庫存不足，我們將盡快以電子郵件通知您。
        </p>
      </li>
      <li
        data-wow-delay="0.5s"
        class="col border-bottom border-lg-end border-bottom-md-0 border-light pb-9 pb-md-0
        wow animate__animated animate__zoomIn">
        <span class="material-icons text-4xl mb-4 mb-md-7">
          lock
        </span>
        <h3 class="text-xl mb-4">售後服務</h3>
        <p>為保障買家權益， 所有商品皆享有30日的售後服務。</p>
      </li>
      <li
        data-wow-delay="1s"
        class="col border-bottom border-md-end border-bottom-md-0 border-light pb-9 pb-md-0
         wow animate__animated animate__zoomIn">
        <span class="material-icons text-4xl mb-4 mb-md-7">
          question_answer
        </span>
        <h3 class="text-xl mb-4">客服服務</h3>
        <p>如購買過程及收到商品有任何問題，歡迎聯繫我們， 我們會盡快回覆您。</p>
      </li>
      <li data-wow-delay="1.5s" class="col wow animate__animated animate__zoomIn">
        <span class="material-icons text-4xl mb-4 mb-md-7">
          card_giftcard
        </span>
        <h3 class="text-xl mb-4">包裝服務</h3>
        <p>如需額外包裝，可再下訂後通知我們，會有專人協助處理相關事宜。</p>
      </li>
    </ul>
  </div>
</template>

<script>
import BannerSwiper from '@/components/BannerSwiper.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination } from 'swiper/core';
import localStorage from '@/mixins/localStorage';

SwiperCore.use([Pagination]);

export default {
  components: {
    BannerSwiper,
    Swiper,
    SwiperSlide,
  },
  mixins: [localStorage],
  inject: ['emitter'],
  data() {
    return {
      saleSwiper: '',
      showFirstImg: true,
      isLoading: false,
      addLoading: false,
      saleProduct: [],
      elTop: 0,
      elLeft: 0,
      breakpoints: {
        992: {
          slidesPerView: 3,
        },
        769: {
          slidesPerView: 2,
        },
      },
      myFavorite: this.getLocalStorage() || [],
    };
  },
  methods: {
    getSale() {
      this.isLoading = true;
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            const productsAll = res.data.products;
            this.isLoading = false;
            productsAll.forEach((product) => {
              if (product.price !== product.origin_price) {
                this.saleProduct.push(product);
              }
            });
          } else {
            this.isLoading = false;
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            type: 'error',
            message: '發生錯誤，請重新整理頁面',
          });
        });
    },
    goToCategory(category) {
      this.$router.push({ name: 'shop', query: { category } });
    },
    goToSeries(series) {
      this.$router.push({ name: 'shop', query: { series } });
    },
    addCart(id) {
      this.addLoading = true;
      const data = {
        data: { product_id: id, qty: 1 },
      };
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.emitter.emit('update-cart');
            this.addLoading = false;
          } else {
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
            this.addLoading = false;
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            type: 'error',
            message: '發生錯誤，請重新整理頁面',
          });
        });
    },
  },
  mounted() {
    this.getSale();
  },
};
</script>
