<template>
  <div>
    <v-list>
      <v-list-item v-for="(product, index) in store.products" :key="index">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-checkbox-btn :model-value="!product.active"></v-checkbox-btn>
          </v-list-item-action>
        </template>
        <v-list-item-title>{{ product.name }}</v-list-item-title>
        <v-list-item-subtitle>Quantity: {{ product.quantity }}</v-list-item-subtitle>
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
</script>

<style scoped></style>
