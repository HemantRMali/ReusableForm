import {store} from '../store/configureStore';

const getRegisteredUser = () =>
  store.getState().RegisterReducer.registeredUsers || [];

// Multiple export
export {getRegisteredUser};
