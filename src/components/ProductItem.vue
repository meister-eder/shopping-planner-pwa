<template>
  <div>
    <v-checkbox></v-checkbox>
    <h4>{{ product.name }}</h4>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products'

defineProps({
  product: {
    type: Object,
    required: true
  }
})

const store = useProductsStore()
</script>

<style scoped></style>
