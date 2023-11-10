import { SET_ACCESS_TOKEN, UPDATE_LASTNAME, UPDATE_AGE } from './actionTypes'

export const setAccessToken = (token) => ({ type: SET_ACCESS_TOKEN, payload: token })

export const updateLastName = (lastName) => ({
  type: UPDATE_LASTNAME,
  payload: lastName
})

export const updateAge = (age) => ({ type: UPDATE_AGE, payload: age })
