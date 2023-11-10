import { SET_ACCESS_TOKEN, UPDATE_LASTNAME, UPDATE_AGE } from './actionTypes'

export default function authReducer(state, action) {
  const { payload } = action
  
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return { ...state, accessToken: payload }
    case UPDATE_LASTNAME:
      return { ...state, lastName: payload }
    case UPDATE_AGE:
      return { ...state, age: payload }
    default:
      return state
  }
}


