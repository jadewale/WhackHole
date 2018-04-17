import React from 'react';
import { View } from 'react-native';
import Header from '../component/header';
import GamePanel from '../container/gamePanel';

class Dashboard extends React.Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Header/>
        <GamePanel/>
      </View>
    )
  }
}

export default Dashboard;