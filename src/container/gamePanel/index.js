import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';
import { Double, Single } from '../../component/rows';
const { width } = Dimensions.get('window');

const percentage = (30 / 100) * width;

class GamePanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [1, 2, 3, 4, 5, 6],
    };
  }

  onClick = (e) => {
    console.log('The key Path is ', e);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#C9BF9C' }}>
        { this.state.grid.map((obj, index) =>
          (index % 2 === 0) ? <Double
            key={index.toString()}
            background={this.props.background}
            decreaseCount={this.props.decreaseCount}
            addCount={this.props.addCount}
            keyPath={index}
            onClick={this.onClick}
            updateBackground={this.props.updateBackground}
            width={percentage}
          />
            : <Single key={index.toString()} keyPath={index} updateBackground={this.props.updateBackground} background={this.props.background} decreaseCount={this.props.decreaseCount} addCount={this.props.addCount} onClick={this.onClick} width={percentage} />
        ) }
      </View>
    );
  }
}

GamePanel.propTypes = {
  addCount: PropTypes.func.isRequired,
  background: PropTypes.object.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  updateBackground: PropTypes.func.isRequired,
};

export default GamePanel;
