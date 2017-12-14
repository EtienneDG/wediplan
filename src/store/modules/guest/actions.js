/* eslint-disable camelcase */
import * as types from './mutation-types';

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
  })
  .then(response => response.json())
  .then(json => commit(types.UPDATE_GUEST, json));
};

export const createGuest = ({commit}, guest) => {
  guest['creationDate'] = new Date();
  fetch(`/api/guest/create`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(guest)
  });
};

export const deleteGuest = ({commit}, guest) => {
  fetch(`/api/guest/delete`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(guest)
  })
  .then(response => response.json())
  .then(json => commit(types.DELETE_GUEST, json));
};
