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

let router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/counter', component: Counter, meta: { title: 'Counter' } },
    { path: '/guests', component: GuestList, meta: { title: 'Liste des invités' } }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = 'WP - ' + to.meta.title;
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
