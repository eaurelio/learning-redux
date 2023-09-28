import userActionTypes from "./userActionTypes"

const userLogin = (payload) => ({
  type: userActionTypes.LOGIN,
  payload
})

const userLogOut = () => ({
  type: userActionTypes.LOGOUT
})

export {userLogin, userLogOut}