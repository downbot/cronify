import { UPDATE_NAME, UPDATE_LASTNAME, UPDATE_AGE } from ''./actionTypes'

export const updateName = (name) => ({ type: UPDATE_NAME, payload: name })

export const updateLastName = (lastName) => ({
  type: UPDATE_LASTNAME,
  payload: lastName
})

export const updateAge = (age) => ({ type: UPDATE_AGE, payload: age })
