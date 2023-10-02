<template>
  <main>
    <ProductForm />
    <ProductList :products="store.activeProducts" />
    <v-divider></v-divider>
    <ProductList :products="store.inactiveProducts" />
  </main>
</template>
<script setup>
import ProductList from '../components/ProductList.vue'
import ProductForm from '../components/ProductForm.vue'
import { useProductsStore } from '../stores/products'

const store = useProductsStore()
</script>
