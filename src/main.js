import Vue from 'vue';
// import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import App from './components/App.vue';
import Counter from './components/Counter';
import GuestList from './components/GuestList';
import store from './store';

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/counter', component: Counter },
    { path: '/guests', component: GuestList }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
