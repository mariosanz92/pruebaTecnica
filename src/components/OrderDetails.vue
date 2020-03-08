<template>
  <div id="orderDetails">
    <router-link :to="{name: 'orders'}">
      <button>VOLVER</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "orderDetails",
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>