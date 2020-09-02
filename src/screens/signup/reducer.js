/**
 * Filename: LOGIN PAGE reducer.js
 *
 */

/**
 * Constants
 */
import {RegisterAction} from './constants';
//import {stat} from 'fs';

// Initial State
const initialState = {
  loading: false,
  registeredUsers: [],
  user: {},
};

// Redux: Counter Reducer
const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case RegisterAction.REGISTER:
      return {
        ...state,
        loading: true,
        registeredUsers: [...state.registeredUsers, action.payload.user],
      };
    default: {
      return state;
    }
  }
};

// Exports
export default RegisterReducer;
