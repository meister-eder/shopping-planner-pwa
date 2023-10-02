import { describe, it, expect, beforeEach } from 'vitest'

import { setActivePinia, createPinia } from 'pinia'
import { useProductsStore } from '../products'

describe('products store test', () => {
  let store = null
  beforeEach(() => {
    setActivePinia(createPinia())

    store = useProductsStore()
  })

  it('should have 0 initial values', () => {
    expect(store.products.length).toBe(0)
  })

  it('should add a new product ', () => {
    store.addProduct('Banana')
    expect(store.products.length).toBe(1)
    expect(store.products[0].name).toEqual('Banana')
  })
})
