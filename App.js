import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Dashboard from './src/container/dashboard';
import Home from './src/container/home';
import store from './store';

const Route =
  StackNavigator({ Home: { screen: Home }, Dashboard: { screen: Dashboard } },
    {
      headerMode: 'none',
      navigationOptions:
      { headerVisible: false },
    });

const App = () => <Route />;

export default Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
