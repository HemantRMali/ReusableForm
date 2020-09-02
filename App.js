import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';

import Login from './src/screens/login';
import Signup from './src/screens/signup';
import Dashboard from './src/screens/dashboard';

enableScreens();
const Stack = createNativeStackNavigator();
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/store/configureStore';

const navigationOptions = {
  headerShown: false,
  header: null,
};
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
              name="Login"
              options={navigationOptions}
              component={Login}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={navigationOptions}
            />
            <Stack.Screen
              name="Dashboard"
              options={{headerHideBackButton: true, gestureEnabled: false}}
              component={Dashboard}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
