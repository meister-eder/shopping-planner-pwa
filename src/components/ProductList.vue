<template>
  <div>
    <v-list>
      <TransitionGroup name="product-list">
        <v-list-item v-for="(product, index) in products" :key="index">
          <template v-slot:prepend="{ isActive }">
            <v-list-item-action start>
              <v-checkbox-btn
                @click="toggleActive(product.id)"
                :model-value="product.active"
              ></v-checkbox-btn>
            </v-list-item-action>
          </template>
          <v-list-item-title :class="{ inActive: !product.active }">{{
            product.name
          }}</v-list-item-title>
          <v-list-item-subtitle
            >Quantity: <v-icon @click="setQuantityByOne(product, -1)">mdi-minus</v-icon>
            {{ product.quantity }}
            <v-icon @click="setQuantityByOne(product, +1)">mdi-plus</v-icon></v-list-item-subtitle
          >
          <template v-slot:append="{ select }">
            <v-list-item-action end>
              <v-icon color="red" @click="deleteProduct(product)">mdi-delete</v-icon>
            </v-list-item-action>
          </template>
        </v-list-item>
      </TransitionGroup>
    </v-list>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products'

defineProps({
  products: {
    type: Array,
    required: true
  }
})

const store = useProductsStore()

const toggleActive = (id) => {
  store.toggleProductActive(id)
}

const deleteProduct = (product) => {
  if (window.confirm(`Are you sure you want to delete '${product.name}'?`)) {
    store.removeProduct(product.id)
  }
}

const setQuantityByOne = (product, value) => {
  const newQuantity = product.quantity + value
  if (newQuantity > 0) {
    store.setQuantity(product.id, newQuantity)
  }
}
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
