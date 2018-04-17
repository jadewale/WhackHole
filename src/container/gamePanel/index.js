import React from 'react';
import { Dimensions, View, Text } from 'react-native';
let { height, width } = Dimensions.get('window');
import { Double, Single } from '../../component/rows';

const percentage = ( 30 / 100) * width;

class GamePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [1, 2, 3, 4, 5, 6]
    }
  }
  render () {
    return (
      <View style={{ flex: 1, backgroundColor: '#C9BF9C' }}>
        { this.state.grid.map((obj, index) =>
          (index % 2 === 0) ? <Double width={ percentage } /> : <Single width={ percentage } />
        ) }
      </View>
    )
  }
}

export default GamePanel;
