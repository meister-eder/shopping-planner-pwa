import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore(
  'products',
  () => {
    const products = ref([
      { id: 1, name: 'Milch', quantity: 2, active: true, dueDate: null },
      { id: 2, name: 'Brot', quantity: 1, active: true, dueDate: null },
      { id: 3, name: 'Eier', quantity: 12, active: true, dueDate: null },
      { id: 4, name: 'Kaffee', quantity: 1, active: true, dueDate: null },
      { id: 5, name: 'Orangensaft', quantity: 2, active: true, dueDate: null },
      { id: 6, name: 'Schokolade', quantity: 3, active: true, dueDate: null }
    ])

    function addProduct(product) {
      products.value.push(product)
    }

    function removeProduct(id) {
      products.value = products.value.filter((product) => product.id !== id)
    }

    const activeProductsCount = computed(
      () => products.value.filter((product) => product.active).length
    )

    const inactiveProductsCount = computed(
      () => products.value.filter((product) => !product.active).length
    )

    return { products, addProduct, removeProduct, activeProductsCount, inactiveProductsCount }
  },
  {
    persist: true
  }
)
