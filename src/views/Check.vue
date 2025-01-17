<template>
  <Loading :isLoading="isLoading" />
  <div class="container pt-15">
    <Progress step="3" />
  </div>
  <div class="container border-bottom border-light mt-10 mt-sm-15 pb-15 mb-15">
    <div class="row bg-linear rounded px-3 py-8 p-sm-8 mx-5">
      <h3 class="text-center mb-10">確認訂單</h3>
      <div class="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 ">
        <div class="row mb-8 gx-1 gx-sm-5">
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">下單日期：</p>
          <p class="col-8 mb-4 pb-4 border-bottom">{{ orderDate }}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">訂單編號：</p>
          <p class="col-8 mb-4 pb-4 border-bottom text-break">{{ order.id }}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">顧客姓名：</p>
          <p class="col-8 mb-4 pb-4 border-bottom">{{ user.name }}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">聯絡電話：</p>
          <p class="col-8 mb-4 pb-4 border-bottom">{{ user.tel }}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">電子郵件：</p>
          <p class="col-8 mb-4 pb-4 border-bottom ">{{ user.email }}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">地址：</p>
          <p class="col-8 mb-4 pb-4 border-bottom">{{ user.address }}</p>
          <p v-if="order.message" class="col-4 fw-bold mb-4 pb-4 border-bottom">備註：</p>
          <p v-if="order.message" class="col-8 mb-4 pb-4 border-bottom">{{ order.message }}</p>
          <p class="col-4 fw-bold mb-4 pb-4 border-bottom">訂單金額：</p>
          <p
            class="col-8 mb-4 pb-4 border-bottom d-flex align-items-center justify-content-between"
          >
            NT${{ toCurrency(order.total) }}
            <a
              href="#"
              @click.prevent="openCollapse"
              class="lh-1"
              :class="{ 'arrow-rotate': open }">
              <span class="material-icons"> arrow_drop_down_circle </span>
            </a>
          </p>
          <div class="collapse" id="collapseExample" ref="collapse">
            <p class="fw-bold mb-6">購買商品</p>
            <div class="row align-items-center mb-4">
              <div class="col-6">
                <p>商品詳情</p>
              </div>
              <div class="col-3">
                <p>數量</p>
              </div>
              <div class="col-3">
                <p>小計</p>
              </div>
            </div>
            <div v-for="item in order.products" :key="item.id" class="row align-items-center mb-5">
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <img class="w-40 me-4" :src="item.product.imageUrl" :alt="item.product.title" />
                  <p>{{ item.product.title }}</p>
                </div>
              </div>
              <div class="col-3">
                <p>{{ item.qty }}</p>
              </div>
              <div class="col-3">
                <p>NT${{ toCurrency(item.final_total) }}</p>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          @click="pay(orderID)"
          class="w-100 text-white btn btn-lg btn-secondary secondary-hover shadow">
          確認結帳
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Progress from '@/components/Progress.vue';
import { Collapse } from 'bootstrap';

export default {
  data() {
    return {
      orderDate: '',
      orderID: '',
      order: {},
      user: {},
      isLoading: false,
      collapse: '',
      open: false,
    };
  },
  components: {
    Progress,
  },
  inject: ['emitter'],
  methods: {
    getOrder(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            const date = new Date(res.data.order.create_at * 1000).toISOString().split('T');
            [this.orderDate] = date;
            this.user = res.data.order.user;
            this.isLoading = false;
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
    openCollapse() {
      this.collapse.toggle();
      this.open = !this.open;
    },
    pay(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${id}`;
      this.$http
        .post(url)
        .then((res) => {
          if (res.data.success) {
            this.$router.push({ name: 'final', params: { order: this.orderID } });
            this.isLoading = false;
          } else {
            this.emitter.emit('push-message', {
              type: 'error',
              message: res.data.message,
            });
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
  },
  mounted() {
    this.orderID = this.$route.params.order;
    this.getOrder(this.orderID);
    this.collapse = new Collapse(this.$refs.collapse, {
      toggle: false,
    });
  },

};
</script>
