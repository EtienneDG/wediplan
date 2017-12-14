import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

// Components imports
import App from './components/App.vue';
import Counter from './components/Counter';
import GuestList from './components/GuestList';
import GuestIndicatorCard from './components/GuestIndicatorCard';
import LocationList from './components/LocationList';
import LocationDetail from './components/LocationDetail';

import store from './store';
import vueSmoothScroll from 'vue-smoothscroll';
import VeeValidate from 'vee-validate';
import frenchMessages from '../node_modules/vee-validate/dist/locale/fr.js';

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(vueSmoothScroll);

Vue.use(VeeValidate, {
  locale: 'fr',
  dictionary: {
    fr: {
      messages: frenchMessages.messages
    }
  }
});

Vue.component('guest-indicator-card', GuestIndicatorCard);

let router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/counter', component: Counter, meta: { title: 'Counter' } },
    { path: '/guests', component: GuestList, meta: { title: 'Liste des invités' } },
    { path: '/locations', component: LocationList, meta: { title: 'Choix des salles' } },
    { path: '/location/:name', component: LocationDetail, meta: { title: 'Détail de la salle' } }
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
