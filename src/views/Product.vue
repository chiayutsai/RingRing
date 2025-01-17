<template>
  <Loading :isLoading="isLoading" />
  <div class="w-100 vh-100 position-absolute -z-1">
    <div class="img-overlay"></div>
  </div>
  <div class="container pt-15">
    <ol class="breadcrumb mb-5">
      <li class="breadcrumb-item"><router-link :to="`/`">首頁</router-link></li>
      <li class="breadcrumb-item"><router-link :to="`/shop`">產品</router-link></li>
      <li class="breadcrumb-item">
        <router-link
          :to="{
            name: 'shop',
            query: { category: product.category }
          }"
        >
          {{ product.category }}
        </router-link>
      </li>
      <li class="breadcrumb-item active">{{ product.title }}</li>
    </ol>
    <div class="row g-5">
      <div class="col-12 col-lg-6">
        <img
          v-if="!product.imagesUrl"
          class="rounded shadow product-img"
          :src="product.imageUrl"
          :alt="product.title"
        />
        <SwiperComponent v-else :product="product" />
      </div>
      <div class="col-12 col-lg-5 offset-lg-1">
        <p class="text-light mb-3">{{ product.category }}</p>
        <h1 class="text-3xl mb-7">{{ product.title }}</h1>
        <ul class="mb-7 text-sm text-light point">
          <li v-for="(format, index) in product.formats" :key="index" class="mb-2">
            {{ format.format }}： {{ format.content }}
          </li>
        </ul>
        <p class="fw-bold text-xl mb-7">
          NT${{ toCurrency(product.price) }}
          <span
            v-if="product.price !== product.origin_price"
            class="text-light text-lg fw-normal text-decoration-line-through ms-4"
          >
            NT${{ toCurrency(product.origin_price) }}
          </span>
        </p>
        <div class="d-flex w-100 w-lg-75 mb-3" :class="{ 'mb-7': !failQty }">
          <button
            class="quantity-btn remove text-xl"
            type="button"
            @click="minusQty"
            :disabled="qty <= 1"
          >
            -
          </button>
          <input
            class="text-center quantity w-100 text-lg"
            type="number"
            min="1"
            v-model="qty"
            @change="checkQty"
          />
          <button type="button" class="quantity-btn plus text-xl" @click="addQty">+</button>
        </div>
        <p v-if="failQty" class="text-sm text-primary opacity-5 mb-7">商品數量最少為一件!</p>
        <div class="position-relative w-100 w-lg-75">
          <button
            type="button"
            class="w-100 d-flex justify-content-center white-hover
            btn btn-secondary text-white shadow secondary-hover"
            @click="addCart(product.id, qty, $event)"
          >
            <span class="material-icons"> shopping_cart </span>加入購物車
          </button>
          <button
            type="button"
            v-if="addLoading"
            class=" btn d-flex justify-content-center align-items-center position-absolute no-allow
            w-100 h-100 top-0 start-0 bg-light"
          >
            <div class="spinner-border spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </button>
        </div>
        <a
          v-if="myFavorite.includes(product.id)"
          href="#"
          class="d-flex my-7"
          @click.prevent="addMyFavorite(product.id)"
        >
          <span class="material-icons me-3"> favorite </span>已加入收藏清單
        </a>
        <a v-else href="#" class="d-flex my-7" @click.prevent="addMyFavorite(product.id)">
          <span class="material-icons me-3"> favorite_border </span>加入收藏清單
        </a>
        <ul class="border-start border-3 border-secondary text-sm ps-5">
          <li class="mb-2">
            <span class="fw-bold text-primary opacity-8">限時活動</span> 全館$101免運
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container border-bottom border-light pt-15 mb-15">
    <Tab :product="product" />
    <div v-if="relativeProduct.length > 0" class="container mb-15">
      <p class="text-3xl text-center border-bottom border-light pb-4 mb-8">相關產品</p>
      <ul class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-5">
        <li v-for="item in relativeProduct" :key="item.id">
          <Card :product="item" :myFavorite="myFavorite" @emit-add-favorite="addMyFavorite" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card.vue';
import SwiperComponent from '@/components/SwiperComponent.vue';
import localStorage from '@/mixins/localStorage';
import Tab from '@/components/Tab.vue';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default {
  components: {
    SwiperComponent,
    Tab,
    Card,
  },
  mixins: [localStorage],
  data() {
    return {
      allProduct: [],
      product: [],
      thumbsSwiper: null,
      qty: 1,
      failQty: false,
      relativeProduct: [],
      routeID: '',
      addLoading: false,
      isLoading: false,
      myFavorite: this.getLocalStorage() || [],
      elTop: 0,
      elLeft: 0,
    };
  },
  inject: ['emitter'],
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    addQty() {
      this.failQty = false;
      this.qty += 1;
    },
    minusQty() {
      this.qty -= 1;
    },
    checkQty() {
      if (this.qty <= 1) {
        this.failQty = true;
        this.qty = 1;
      }
    },
    getAll() {
      this.$http
        .get(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`)
        .then((res) => {
          if (res.data.success) {
            this.allProduct = res.data.products;
            this.getRelativeProduct();
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            type: 'error',
            message: '發生錯誤，請重新整理頁面',
          });
        });
    },
    getProduct(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.isLoading = false;
            this.getAll();
          } else {
            this.isLoading = false;
            this.$router.push('/shop');
          }
        })
        .catch(() => {
          this.emitter.emit('push-message', {
            type: 'error',
            message: '發生錯誤，請重新整理頁面',
          });
        });
    },
    getRelativeProduct() {
      this.relativeProduct = [];
      const { category } = this.product;
      const { id } = this.product;
      const filterProduct = this.allProduct.filter(
        (item) => item.category === category && item.id !== id,
      );
      const arrSet = new Set([]);
      const maxSize = filterProduct.length < 4 ? filterProduct.length : 4;
      for (let i = 0; arrSet.size < maxSize; i + 1) {
        const num = getRandomInt(filterProduct.length);
        arrSet.add(num);
      }
      arrSet.forEach((item) => {
        this.relativeProduct.push(filterProduct[item]);
      });
    },
    addCart(id, qty) {
      this.addLoading = true;
      const data = {
        data: { product_id: id, qty },
      };
      this.$http
        .post(`${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`, data)
        .then((res) => {
          if (res.data.success) {
            this.qty = 1;
            this.emitter.emit('push-message', {
              type: 'success',
              message: res.data.message,
            });
            this.addLoading = false;
            this.emitter.emit('update-cart');
          } else {
            this.addLoading = false;
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
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
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  watch: {
    id(newID) {
      this.routeID = newID;
      if (this.$route.name === 'product') {
        this.getProduct(this.routeID);
      }
    },
  },
  created() {
    this.routeID = this.$route.params.id;
    this.getProduct(this.routeID);
  },
};
</script>
