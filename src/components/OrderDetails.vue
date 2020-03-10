<template>
  <div class="orderDetails">
    <h1 class="order-detail-title">INFORMACIÓN DE TUS PEDIDOS</h1>
    <hr class="title-separator" />
    <div class="title-details-container">
      <h2 class="detail-title">Datos del pedido: {{this.order.code}}</h2>
      <h3 class="detail-date">Fecha del pedido: {{this.order.orderDate}}</h3>
    </div>
    <div class="list-order-details">
      <h3 class="product-title">Productos</h3>
      <hr class="title-separator-items" />
      <div class="detail-item" v-for="product in this.products" :key="product.id">
        <span>{{product.name}}</span>
        <span>${{product.price}}</span>
      </div>
      <hr />
      <div>
        <span class="total-price">Total:</span>
        <span class="total-price">${{this.order.totalPrice}}</span>
      </div>
    </div>
    <router-link :to="{name: 'orders'}">
      <button class="detail-item_details" id="BACK">← VOLVER</button>
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

<style lang="scss">
.orderDetails {
  width: 100%;
}

.list-order-details {
  margin: 20px auto;
  width: 400px;
  border: 1px solid gray;
  border-radius: 8px;
  margin-top: 17px;
  & > div {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  }
}

.order-detail-title {
  font-size: 30px;
  text-align: left;
}

.title-separator-items {
  margin-top: 5px;
  margin-bottom: 10px;
}

.product-title {
  text-align: left;
  margin-left: 20px;
  margin-bottom: 10px;
}

.detail-item {
  color: gray;
}

.detail-item > span::first-letter {
  text-transform: uppercase;
}

.total-price {
  font-weight: bold;
}

.title-separator {
  margin-top: 5px;
  margin-bottom: 40px;
}

.title-details-container {
  width: 400px;
  margin: 20px auto;
  text-align: left;
  margin-bottom: 3px;
}

.detail-title {
  font-size: 18px;
  margin-bottom: 3px;
}

.detail-date {
  color: #808080;
  font-size: 17px;
  margin-top: 3px;
  margin-bottom: 3px;
}

hr {
  border-top: 1px solid gray;
  margin: 0px;
}

.detail-item_details {
  border-radius: 10px;
  font-size: 14px;
  padding: 10px 30px 10px 30px;
  border: 1px black solid;
  border-radius: 5px;
  background-color: white;
  color: black;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
}

</style>