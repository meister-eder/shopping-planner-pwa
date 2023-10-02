<template>
  <div>
    <v-form ref="addProductForm" validate-on="submit" @submit.prevent="submitForm">
      <v-container fluid>
        <v-row>
          <v-col cols="8">
            <v-text-field
              v-model="productName"
              required
              :rules="nameRules"
              label="Product name"
              density="compact"
            ></v-text-field>
          </v-col>

          <v-col cols="4">
            <v-btn color="primary" type="submit" class="">Add Product</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductsStore } from '../stores/products'

const store = useProductsStore()

const productName = ref('')
const addProductForm = ref(null)

const nameRules = [
  (value) => {
    if (value) return true

    return 'Name is required.'
  }
]

const submitForm = async () => {
  const isValid = await addProductForm.value.validate()
  if (isValid.valid) {
    store.addProduct(productName.value)
    productName.value = ''
  } else {
    return false
  }
}
</script>

<style scoped></style>
