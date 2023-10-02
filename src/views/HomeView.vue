<template>
  <main>
    <ProductForm />
    <v-expansion-panels variant="accordion" multiple>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <h4>Active Products: {{ store.activeProducts.length }}</h4>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <ProductList :products="store.activeProducts" />
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          Inactive Products: {{ store.inactiveProducts.length }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <ProductList :products="store.inactiveProducts" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </main>
</template>
<script setup>
import ProductList from '../components/ProductList.vue'
import ProductForm from '../components/ProductForm.vue'
import { useProductsStore } from '../stores/products'

const store = useProductsStore()
</script>
