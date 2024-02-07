// import Vue from 'vue'
// import { createStore } from 'vuex'

// Vue.use(Vuex)

// export const store = createStore({
//     state: {
//        
//     }
// })

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from '../App.vue'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        products: [
                {id: 1, title: 'toothbrush', price: 12},
                {id: 2, title: 'shampoo', price: 8},
                {id: 3, title: 'soap', price: 25},
                ]
    }
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
  }
})

const app = createApp(App)

// Install the store instance as a plugin
app.use(store)



