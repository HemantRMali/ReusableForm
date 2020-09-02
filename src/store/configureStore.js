/**

 * Filename: configureStore.js
 *
 */

import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// Imports: Redux Root Reducer
import appReducer from '../reducers';

// Imports: Redux Root
//import PDPReducer from '../pages/ProductDetailPage/reducer';

// Middleware: Redux Persist Config
const persistConfig = {
  timeout: 0,
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['RegisterReducer'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, appReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(createLogger()));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};
