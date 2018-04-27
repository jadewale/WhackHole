import React from 'react';
import Proptypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity, ImageBackground, View, Image } from 'react-native';
import styles from './styles';


class Animation extends React.Component {
  constructor(props) {
    super(props);
    const image = require('../../img/hole.png');

    this.state = {
      display: 'none',
      image,
    };
  }

  componentDidMount() {
    this.startInterval();
  }


  hideAnimation = () => {
    const image = require('../../img/hole.png');
    this.setState({ image });
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
    const image = require('../../img/holeMask.png');
    this.setState({ animation: 'slideOutUp' }, () => setTimeout(() => this.setState({ display: 'flex', image }), 1000));
    setTimeout(() => this.hideAnimation(), 2000);
  }

  whackAmole = () => {
    this.hideAnimation();
    this.props.addCount();
  }

  render() {
    return (
      <View>
        <ImageBackground style={[styles.backgroundImage, { zIndex: 1 }]} source={this.state.image}>
          <TouchableOpacity style={{ zIndex: -2 }} onPress={this.whackAmole}>
            <Animatable.Image
              style={[styles.backgroundMole, { display: this.state.display }]}
              source={require('../../img/mole.png')}
              animation={this.state.animation}
              direction="alternate"
            >
              <Image source={ require('../../img/holeMask.png')} />
            </Animatable.Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

Animation.propTypes = {
  addCount: Proptypes.func.isRequired,
};

export default Animation;
