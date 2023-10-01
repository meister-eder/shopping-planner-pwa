import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore(
  'products',
  () => {
    const products = ref([])
    return { products }
  },
  {
    persist: true
  }
)
