<template>
  <div>
    <v-list>
      <TransitionGroup name="product-list">
        <v-list-subheader key="subheader-1"
          >Active items: {{ store.activeProducts.length }}</v-list-subheader
        >
        <ProductListItem
          v-for="(product, index) in store.activeProducts"
          :key="index + product.id"
          :product="product"
        />
        <v-divider key="divider-1"></v-divider>
        <v-list-subheader key="subheader-2"
          >Completed: {{ store.inactiveProducts.length }}</v-list-subheader
        >
        <ProductListItem
          v-for="(product, index) in store.inactiveProducts"
          :key="index + product.id"
          :product="product"
        />
      </TransitionGroup>
    </v-list>
  </div>
</template>

<script setup>
import ProductListItem from './ProductListItem.vue'

import { useProductsStore } from '../stores/products'

const store = useProductsStore()
</script>

<style scoped>
.inActive {
  text-decoration: line-through;
  color: grey;
}

.product-list-move,
.product-list-enter-active,
.product-list-leave-active {
  transition: all 0.5s ease;
}
.product-list-enter-from,
.product-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.product-list-leave-active {
  position: absolute;
}
</style>
