import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import App from './components/App.vue'

import store from './store'

Vue.use(VueRouter)
Vue.use(Vuetify)
import Counter from './components/Counter.vue'
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/counter', component: Counter },
    { path: '/test', component: Counter },
  ]
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
