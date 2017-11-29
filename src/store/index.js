import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
  counts: {
    count: -1
  },
  guests: {
  }
};

const getters = {
  guests: state => state.guests.guests,
  numberOfAdults: state => {
    if (state.guests.guests) {
      return state.guests.guests
      .map((guest) => guest.adulte)
      .reduce((cur, prev) => cur + prev, 0);
    }
  },
  numberOfChildren: state => {
    if (state.guests.guests) {
      return state.guests.guests
      .map((guest) => guest.enfant)
      .reduce((cur, prev) => cur + prev, 0);
    }
  },
  numberOfGuests: (state, getters) => {
    return getters.numberOfAdults + getters.numberOfChildren;
  },
  numberForCocktail: state => {
    if (state.guests.guests) {
      return state.guests.guests
      .filter((guest) => guest.vindhonneur)
      .map((guest) => guest.adulte + guest.enfant)
      .reduce((cur, prev) => cur + prev, 0);
    }
  },
  numberForMeal: state => {
    if (state.guests.guests) {
      return state.guests.guests
      .filter((guest) => guest.repas)
      .map((guest) => guest.adulte + guest.enfant)
      .reduce((cur, prev) => cur + prev, 0);
    }
  }
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
