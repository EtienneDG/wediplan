import Vue from 'vue';
// import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import App from './components/App.vue';
import Counter from './components/Counter';
import GuestList from './components/GuestList';
import GuestIndicatorCard from './components/GuestIndicatorCard';
import store from './store';
import vueSmoothScroll from 'vue-smoothscroll';

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(vueSmoothScroll);

Vue.component('guest-indicator-card', GuestIndicatorCard);

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
