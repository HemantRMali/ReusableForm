/**
 * Filename: Root Reducer index.js
 *
 */

import {combineReducers} from 'redux';

// Imports: Reducers here

import LoginReducer from '../screens/login/reducer';
import RegisterReducer from '../screens/signup/reducer';
// Redux: Root Reducer
const appReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
});

//export default appReducer;

export default (state, action) => appReducer(state, action);
