/**
 * Filename: LOGIN PAGE reducer.js
 *
 */

/**
 * Constants
 */
import {LoginAction} from './contants';
//import {stat} from 'fs';

// Initial State
const initialState = {
  loading: false,
  loginDetails: {},
};

// Redux: Counter Reducer
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginAction.LOGIN:
      return {
        ...state,
        loading: action.payload.loading,
      };

    case LoginAction.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.payload.details,
      };
    case LoginAction.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };

    default: {
      return state;
    }
  }
};

// Exports
export default LoginReducer;
