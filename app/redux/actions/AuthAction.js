import {TOKEN_FUNCTION,MEDICAL_DATA} from '../actionTypes';

export const setTokenFunction = data => {
  return {type: TOKEN_FUNCTION, payload: data};
};
