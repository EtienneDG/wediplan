/* eslint-disable camelcase */
import * as types from './mutation-types';

export const getLocations = ({commit}) => {
  fetch(`/api/location/all`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => commit(types.GET_LOCATIONS, json));
};

export const updateLocation = ({commit}, location) => {
  location['lastUpdate'] = new Date();
  fetch(`/api/location/autosave`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(location)
  })
  .then(response => response.json())
  .then(json => commit(types.UPDATE_LOCATION, json));
};

export const createLocation = ({commit}, location) => {
  location['creationDate'] = new Date();
  fetch(`/api/location/create`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(location)
  });
};

export const deleteLocation = ({commit}, location) => {
  fetch(`/api/location/delete`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(location)
  })
  .then(response => response.json())
  .then(json => commit(types.DELETE_LOCATION, json));
};
