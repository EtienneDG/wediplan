/* eslint-disable camelcase */
import * as types from './mutation-types';

export const mutations = {
  [types.GET_LOCATIONS] (state, payload) {
    state.locations = payload;
  },
  [types.UPDATE_LOCATION] (state, payload) {
    let updateLocationIndex = state.locations.locations.findIndex(l => l.id === payload.id);
    state.guests[updateLocationIndex] = payload;
  },
  [types.CREATE_LOCATION] (state, payload) {
    state.locations.locations.append(payload);
  },
  [types.DELETE_LOCATION] (state, payload) {
    let deleteLocationIndex = state.locations.locations.findIndex(l => l.id === payload.id);
    state.guests[deleteLocationIndex] = payload;
  }
};
