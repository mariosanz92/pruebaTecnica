<template>
  <div id="orderDetails">
    <pre style="text-align:left">Pedido nº: {{ JSON.stringify(this.order, 0, 2) }}</pre>
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
      const orders = this.data.orders
      const currentOrder = orders._embedded.orders.filter(order => {
        return order.id === id
      });
      this.order = currentOrder[0]
    },

    async getData(){
      const service = new Order();
      const data = await service.getOrders();
      this.data = data
    },

    async getExampleProduct(productId){
      const products = this.data.products._embedded.products
      const product = products.filter(product => {
        return product.id === productId
      })
      console.log({product})
    }
  },

  async mounted() {
    await this.getData(this.id);
    await this.setOrder(this.id);
    await this.getExampleProduct(this.order.productsOrder[0].productId)
  },

  data() {
    return {
      id: this.$route.params.id,
      data: [],
      order: {}
    };    
  }
};
</script>