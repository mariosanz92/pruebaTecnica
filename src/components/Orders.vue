<template>
  <div class="orders">
    <h1 class="title-text--align">INFORMACIÓN DE TUS PEDIDOS</h1>
    <hr />
    <ul class="list-order">
      <li v-for="(order) in this.orders" :key="order.id">
        <span>Pedido nº: {{ order.code }}</span>

        <br />
        <span>Fecha del pedido:{{ order.orderDate }}</span>
        <router-link :to="{ name: 'orderDetails', params: { id: order.id }}">
          <button class="button-order-detail">VER PEDIDO</button>
        </router-link>

        <hr />
      </li>
    </ul>
  </div>
</template>
<script>
import Order from "../services/order";

export default {
  name: "orders",

  methods: {
    async getOrders() {
      const service = new Order();
      const orders = await service.getOrders();
      this.orders = orders.orders._embedded.orders;
    }
  },

  data() {
    return {
      orders: []
    };
  },

  async mounted() {
    await this.getOrders();
    console.log(this.orders);
  }
};
</script>

<style lang="scss">
.orders {
  width: 100%;
}

.title-text--align {
  display: flex;
  font-size: 30px;
  padding-left: 3%;
}

.list-order {
  display: flex;
  flex-direction: column;
  text-align: left;
  list-style: none;
}

.button-order-detail {
  display: flex;
}
</style>