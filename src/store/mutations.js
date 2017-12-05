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
    state.guests = payload;
  },
  [types.CREATE_GUEST] (state, payload) {
    state.guests = payload;
  }
};
