import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore(
  'products',
  () => {
    const products = ref([])
    function findProductById(id) {
      const product = products.value.find((p) => p.id === id)
      return product
    }

    function addProduct(productName) {
      const newProduct = {
        id: new Date().toString(),
        name: productName,
        quantity: 1,
        active: true
      }
      products.value.push(newProduct)
    }

    function removeProduct(id) {
      products.value = products.value.filter((product) => product.id !== id)
    }

    function toggleProductActive(id) {
      const product = findProductById(id)
      if (product) {
        product.active = !product.active
      }
    }

    function setQuantity(id, quantity) {
      const product = findProductById(id)
      if (product) {
        product.quantity = quantity
      }
    }

    const activeProducts = computed(() => products.value.filter((product) => product.active))

    const inactiveProducts = computed(() => products.value.filter((product) => !product.active))

    return {
      products,
      addProduct,
      removeProduct,
      toggleProductActive,
      setQuantity,
      activeProducts,
      inactiveProducts
    }
  },
  {
    persist: true
  }
)
