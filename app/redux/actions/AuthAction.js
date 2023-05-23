import {TOKEN_FUNCTION,DATA} from '../actionTypes';

export const setTokenFunction = data => {
  return {type: TOKEN_FUNCTION, payload: data};
};
export const setdata = data => {
  return {type: DATA, payload: data};
};