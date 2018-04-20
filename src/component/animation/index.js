import React from 'react';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import { TouchableOpacity } from 'react-native';

class Animation extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      down: '',
      up: '',
      display: 'none'
    }
    this.whackAmole = this.whackAmole.bind(this);
  }

  showAnimation = () => {
    this.setState({animation: 'slideOutUp', display: 'flex'})
    setTimeout(()=> this.hideAnimation(), 2000);
  }

  hideAnimation = () => {
    this.setState({animation: '', display: 'none'})
  }

  startInterval = () => {
    let timer = Math.floor(Math.random() * 15000);
    if (timer < 4187) {
      this.startInterval();
      return;
    }
    setInterval( () => this.showAnimation(), timer)
  }

  componentDidMount () {
    this.startInterval();
  }

  whackAmole () {
    this.hideAnimation();
    this.props.addCount();
  }

  render () {
    return (
      <TouchableOpacity onPress={ this.whackAmole}>
        <Animatable.Image
          style={ [styles.backgroundMole, { display: this.state.display }] }
          source={require('../../img/mole.png')}
          animation={this.state.animation}
          direction="alternate">
        </Animatable.Image>
      </TouchableOpacity>
    )
  }
}

export default Animation;