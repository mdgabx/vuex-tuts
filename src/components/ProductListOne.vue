<template>
    <div>
        <h2>Product 1</h2>
        <ul>
            <li v-for="product in products" :key="product.id">
                <span>{{ product.title }}</span>
                <p>{{ product.price }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['products'],
}
</script>

<style>

</style>