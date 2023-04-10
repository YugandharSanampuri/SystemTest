import {SET_TOKEN, TOKEN_FUNCTION,MEDICAL_DATA} from '../actionTypes';

let initialState = {
  token: '',
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {...state, token: action.payload};
    case TOKEN_FUNCTION:
      return {...state, token_func: action.payload};
   
    default:
      return state;
  }
};
export default AuthReducer;
