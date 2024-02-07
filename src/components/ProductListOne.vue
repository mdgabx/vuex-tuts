<template>
    <div>
        <h2>Product 1</h2>
        <ul>
            <li v-for="product in salesProduct" :key="product.id">
                <span>{{ product.title }}</span>
                <p>{{ product.price }}</p>
            </li>
        </ul>
        <button @click="reducePrice">Reduce Price</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        
        // products() {
        //     return this.$store.state.products
        // }

        ...mapState(['products']),
        salesProduct() {
            return this.$store.getters.saleProducts;
        }
    },
    mounted() {
        console.log(this.products)
    },
    methods: {
        reducePrice() {
            this.$store.commit('reducePrice')
        }
    },  
}
</script>

<style>

</style>