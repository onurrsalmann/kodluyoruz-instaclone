import React from 'react';

import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import {navigationRef} from './RootNavigation';

const Stack = createStackNavigator();

function Router(props) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Login">
          {(props) => <Login {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
