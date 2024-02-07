<template>
    <div>
        <h2>Product 2</h2>
        <ul>
            <li v-for="product in salesProduct" :key="product.id">
                <span>{{ product.title }}</span>
                <p>{{ product.price }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products
        },
        salesProduct() {
            return this.$store.getters.saleProducts;
        }
    }
}
</script>

<style>

</style>