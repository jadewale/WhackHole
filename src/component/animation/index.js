import React from 'react';
import Proptypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';
import styles from './styles';


class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
    };
  }

  componentDidMount() {
    this.startInterval();
  }

  hideAnimation = () => {
    this.setState({ animation: '', display: 'none' });
  }

  startInterval = () => {
    const timer = Math.floor(Math.random() * 15000);

    if (timer < 4187) {
      this.startInterval();
      return;
    }
    setInterval(() => this.showAnimation(), timer);
  }

  showAnimation = () => {
    this.setState({ animation: 'slideOutUp' }, () => setTimeout(() => this.setState({ display: 'flex' }), 1000));
    setTimeout(() => this.hideAnimation(), 2000);
  }

  whackAmole = () => {
    this.hideAnimation();
    this.props.addCount();
  }

  render() {
    return (
      <TouchableOpacity onPress={this.whackAmole}>
        <Animatable.Image
          style={[styles.backgroundMole, { display: this.state.display }]}
          source={require('../../img/mole.png')}
          animation={this.state.animation}
          direction="alternate"
        >
        </Animatable.Image>
      </TouchableOpacity>
    );
  }
}

Animation.propTypes = {
  addCount: Proptypes.func.isRequired,
};

export default Animation;
