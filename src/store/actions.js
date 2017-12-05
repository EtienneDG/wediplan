/* eslint-disable camelcase */
import * as types from './mutation-types';
// import passport from 'passport-local';

export const getCount = ({commit}) => {
  fetch(`/api/count`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => commit(types.GET_COUNT, json));
};

export const incCount = ({commit}, count_payload) => {
  fetch(`/api/count`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ count: ++count_payload })
  })
  .then(response => response.json())
  .then(json => commit(types.INC_COUNT, json));
};

export const getGuests = ({commit}) => {
  fetch(`/api/guest/all`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => commit(types.GET_GUESTS, json));
};

export const updateGuest = ({commit}, guest) => {
  guest['lastUpdate'] = new Date();
  fetch(`/api/guest/autosave`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(guest)
  });
};

export const createGuest = ({commit}, guest) => {
  guest['creationDate'] = new Date();
  debugger;
  fetch(`/api/guest/create`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(guest)
  });
};
