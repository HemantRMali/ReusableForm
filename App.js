import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';

import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Dashboard from './src/screens/dashboard';
import {createAppContainer} from 'react-navigation';

enableScreens();
const Stack = createNativeStackNavigator();
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/store/configureStore';
import Details from './src/screens/Details';

const navigationOptions = {
  headerShown: false,
  header: null,
};
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
const stackNavigator = createSharedElementStackNavigator(
  {
    Dashboard: Dashboard,
    Details: Details,
  },
  {
    initialRouteName: 'Dashboard',
  },
);
const AppContainer = createAppContainer(stackNavigator);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
