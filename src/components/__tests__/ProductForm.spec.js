import { mount } from '@vue/test-utils'
import { expect, describe, beforeEach, it } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import ProductForm from '../ProductForm.vue'
import { setActivePinia, createPinia } from 'pinia'
import { useProductsStore } from '../../stores/products'

const vuetify = createVuetify({
  components,
  directives
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('product form test', () => {
  let store = null
  let wrapper = null
  beforeEach(() => {
    setActivePinia(createPinia())

    store = useProductsStore()

    wrapper = mount(
      {
        template: '<v-layout><ProductForm></ProductForm></v-layout>'
      },
      {
        props: {},
        global: {
          components: {
            ProductForm
          },
          plugins: [vuetify]
        }
      }
    )
  })

  it('should render properly', () => {
    expect(wrapper.text()).toContain('Add Product')
  })
})
