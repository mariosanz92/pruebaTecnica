<template>
  <div id="orderDetails">
    <ul class="list-order">
      <li v-for="product in this.products" :key="product.id">
        <span>{{product.name}}</span>
        <span>${{product.price}}</span>
      </li>
      <span>total price: {{this.order.totalPrice}}</span>
    </ul>
    <router-link :to="{name: 'orders'}">
      <button>VOLVER</button>
    </router-link>
  </div>
</template>

<script>
import Order from "../services/order";

export default {
  name: "orderDetails",
  methods: {
    async setOrder(id) {
      const orders = this.data.orders;
      const currentOrder = orders._embedded.orders.filter(order => {
        return order.id === id;
      });
      this.order = currentOrder[0];
    },

    async getData() {
      const service = new Order();
      const data = await service.getOrders();
      this.data = data;
      console.log(this.data);
    },

    async getProducts() {
      const orderedProducts = this.order.productsOrder;
      const products = orderedProducts.map(product => {
        return this.getProductDetails(product.productId);
      });
      this.products = products;
    },

    getProductDetails(productId) {
      const products = this.data.products._embedded.products;
      const product = products.filter(product => {
        return product.id === productId;
      });
      return product[0];
    }
  },

  async mounted() {
    await this.getData(this.id);
    await this.setOrder(this.id);
    await this.getProducts();
    console.log(this.order);
  },

  data() {
    return {
      id: this.$route.params.id,
      data: [],
      order: {},
      products: []
    };
  }
};
</script>