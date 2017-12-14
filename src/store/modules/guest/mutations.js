/* eslint-disable camelcase */
import * as types from './mutation-types';

export const mutations = {
  [types.GET_GUESTS] (state, payload) {
    state.guests = payload;
  },
  [types.UPDATE_GUEST] (state, payload) {
    let updatedGuestIndex = state.guests.guests.findIndex(g => g.id === payload.id);
    state.guests[updatedGuestIndex] = payload;
  },
  [types.CREATE_GUEST] (state, payload) {
    state.guests = payload;
  },
  [types.DELETE_GUEST] (state, payload) {
    let deletedGuestIndex = state.guests.guests.findIndex(g => g.id === payload.id);
    state.guests[deletedGuestIndex] = payload;
  }
};
