<template>
  <div>
    <v-list>
      <v-list-item v-for="(product, index) in store.activeProducts" :key="index">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn
              @click="toggleActive(product.id)"
              :model-value="!product.active"
            ></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <v-list-item-title :class="{ inActive: !product.active }">{{
          product.name
        }}</v-list-item-title>
        <v-list-item-subtitle
          >Quantity: <v-icon @click="decreaseQuantityByOne(product)">mdi-minus</v-icon>
          {{ product.quantity }}
          <v-icon @click="increaseQuantityByOne(product)">mdi-plus</v-icon></v-list-item-subtitle
        >
        <template v-slot:append="{ select }">
          <v-list-item-action end>
            <v-icon @click="store.removeProduct(product.id)">mdi-delete</v-icon>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="(product, index) in store.inactiveProducts" :key="index">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn
              @click="toggleActive(product.id)"
              :model-value="!product.active"
            ></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <v-list-item-title :class="{ inActive: !product.active }">{{
          product.name
        }}</v-list-item-title>
        <v-list-item-subtitle
          >Quantity: <v-icon @click="decreaseQuantityByOne(product)">mdi-minus</v-icon>
          {{ product.quantity }}
          <v-icon @click="increaseQuantityByOne(product)">mdi-plus</v-icon></v-list-item-subtitle
        >
        <template v-slot:append="{ select }">
          <v-list-item-action end>
            <v-icon @click="store.removeProduct(product.id)">mdi-delete</v-icon>
          </v-list-item-action>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { useProductsStore } from '../stores/products'

const store = useProductsStore()

const toggleActive = (id) => {
  store.toggleProductActive(id)
}

const increaseQuantityByOne = (product) => {
  const newQuantity = product.quantity + 1
  store.setQuantity(product.id, newQuantity)
}

const decreaseQuantityByOne = (product) => {
  if (product.quantity > 0) {
    const newQuantity = product.quantity - 1
    store.setQuantity(product.id, newQuantity)
  }
}
</script>

<style scoped>
.inActive {
  text-decoration: line-through;
  color: grey;
}
</style>
