import * as guestActions from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

export default {
  state: {
    guests: {}
  },
  actions: guestActions,
  getters: getters,
  mutations: mutations
};
