import * as types from './mutation-types'
import passport from 'passport-local'

export const getCount = ({commit}) => {
  fetch(`/api/count`, {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => commit(types.GET_COUNT, json))
}

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
  .then(json => commit(types.INC_COUNT, json))
}

export const login = ({commit}) => {
  passport.authenticate('local'),
  (req,res) => {
    res.redirect('/')
  }
};