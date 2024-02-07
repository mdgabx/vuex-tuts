import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from '../App.vue'

// Create a new store instance.
export const store = createStore({
  state () {
    return {
        products: [
                {id: 1, title: 'toothbrush', price: 20},
                {id: 2, title: 'shampoo', price: 30},
                {id: 3, title: 'soap', price: 40},
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
    reducePrice(state, payload) {
        return state.products.forEach((product) => {
            return product.price -= payload
        })
    }
  },
  actions: {
    reducePrice(context, payload) {
        setTimeout(() => {
            context.commit('reducePrice', payload)
        }, 2000)
    }
  }
})



