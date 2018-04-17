import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Dashboard from './src/container/dashboard';

const Route =
  StackNavigator({
    Home: { screen : Dashboard }},
    { headerMode: 'none',
      navigationOptions:
      { headerVisible: false,}
    })

const App = () => <Route/>

export default App;