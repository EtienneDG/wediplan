/* eslint-disable camelcase */
import * as types from './mutation-types';

export const mutations = {
  [types.GET_COUNT] (state, count_payload) {
    state.counts = count_payload;
  },
  [types.INC_COUNT] (state, count_payload) {
    state.counts.count = count_payload;
  },
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
  },
  [types.GET_LOCATIONS] (state, payload) {
    state.locations = payload;
  },
  [types.UPDATE_LOCATION] (state, payload) {
    let updateLocationIndex = state.locations.locations.findIndex(l => l.id === payload.id);
    state.guests[updateLocationIndex] = payload;
  },
  [types.CREATE_LOCATION] (state, payload) {
    state.locations.append(payload);
  },
  [types.DELETE_LOCATION] (state, payload) {
    let deleteLocationIndex = state.locations.locations.findIndex(l => l.id === payload.id);
    state.guests[deleteLocationIndex] = payload;
  }
};
