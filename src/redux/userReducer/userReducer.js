import userActionTypes from "./userActionTypes";

const initialState = {
  currentUser: null
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return { ...state, currentUser: action.payload }
    case userActionTypes.LOGOUT:
      return { ...state, currentUser: null }
    default:
      return state
  }
}