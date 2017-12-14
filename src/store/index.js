import Vue from 'vue';
import Vuex from 'vuex';

import guestModule from './modules/guest/store';
import locationModule from './modules/location/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    guests: guestModule,
    locations: locationModule
  }
});
