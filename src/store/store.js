import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from '../App.vue'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
        products: [
                {id: 1, title: 'toothbrush', price: 12},
                {id: 2, title: 'shampoo', price: 8},
                {id: 3, title: 'soap', price: 25},
                ],
    }
  },
  getters: {
    saleProducts(state) {
        let salesProduct = state.products.map((product) => {
            return {
                title: `**${product.title}**`,
                price: product.price / 2
            }
        })

        return salesProduct
    }
  },
  mutations: {
    reducePrice(state) {
        return state.products.forEach((product) => {
            return product.price -= 1
        })
    }
  }
})



