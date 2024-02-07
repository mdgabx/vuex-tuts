<template>
  <div id="app">
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOneVue from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue';

export default {
  name: 'App',
  components: {
    'product-list-one' : ProductListOneVue,
    'product-list-two' : ProductListTwo
  },
  data() {
    return {
      products: [
        {id: 1, title: 'toothbrush', price: 12},
        {id: 2, title: 'shampoo', price: 8},
        {id: 1, title: 'soap', price: 25},
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
