import { UPDATE_NAME, UPDATE_LASTNAME, UPDATE_AGE } from './actionTypes'

export default function authReducer(state, action) {

  switch (state.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload }
    case UPDATE_LASTNAME:
      return { ...state, lastName: action.payload }
    case UPDATE_AGE:
      return { ...state, age: action.payload }
    default:
      return state
  }
}


