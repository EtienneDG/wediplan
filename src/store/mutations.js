/* eslint-disable camelcase */
import * as types from './mutation-types';

export const mutations = {
  [types.GET_COUNT] (state, count_payload) {
    state.counts = count_payload;
  },
  [types.INC_COUNT] (state, count_payload) {
    state.counts.count = count_payload;
  },
  [types.GET_GUESTS] (state, guests_payload) {
    state.guests.guests = guests_payload;
  }
};
