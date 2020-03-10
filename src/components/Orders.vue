<template>
  <div class="orders">
    <h1 class="orders-title">INFORMACIÓN DE TUS PEDIDOS</h1>
    <hr class="title-separator" />
    <ul class="orders-list">
      <li class="order-item" v-for="order in this.orders" :key="order.id">
        <div class="order-item-container">
          <img class="order-item_icon" :src="order.image" />
          <div>
            <h1 class="order-item_code">Pedido nº: {{ order.code }}</h1>
            <span class="order-item_date">Fecha del pedido:{{ order.orderDate }}</span>
          </div>
        </div>
        <router-link :to="{ name: 'orderDetails', params: { id: order.id }}">
          <button class="order-item_details">VER PEDIDO</button>
        </router-link>
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
    },
    setImagesInOrders() {
      const orders = this.orders.map(order => {
        return { ...order, image: this.image[order.logistics.code] };
      });
      this.orders = orders;
    }
  },
  data() {
    return {
      orders: [],
      image: {
        "PICKUP-DELIVERY": require("@/assets/truck.png"),
        LOCAL: require("@/assets/deliver.png")
      }
    };
  },
  async mounted() {
    await this.getOrders();
    await this.setImagesInOrders();
  }
};
</script>

<style lang="scss">
.orders {
  width: 100%;
}

.orders-title {
  display: flex;
  font-size: 30px;
}

.title-separator {
  margin-top: 20px;
}

.orders-list {
  display: flex;
  flex-direction: column;
  text-align: left;
  list-style: none;
  margin-right: 40px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #888;
  margin-top: 2%;
  padding-bottom: 20px;
}

.order-item-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.order-item_icon {
  width: 50px;
  border: none;
  margin-right: 20px;
}

.order-item_code {
  font-size: 20px;
  margin-bottom: 0%;
}

.order-item_date {
  color: #808080;
  font-size: 17px;
}

.order-item_details {
  border-radius: 10px;
  font-size: 14px;
  padding: 10px 50px 10px 50px;
  border: none;
  border-radius: 5px;
  background-color: #84dade;
  color: white;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
}
</style>