import React from 'react';
import { View, ImageBackground } from 'react-native';
import Button from '../button';
import TimerCountdown from 'react-native-timer-countdown';


class Timer extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render () {
    return (
      <Button text={<TimerCountdown
        initialSecondsRemaining={this.props.timer}
        onTick={() => {}}
        onTimeElapsed={this.props.endGame}
        allowFontScaling={true}
        style={{fontSize: 20}}
      />}/>
    )
  }
}

class Header extends React.Component {

  constructor (props) {
    super(props);
    console.log(props)
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.count !== this.props.count){
      return true;
    }
    return false;
  }

  render () {
    return (
      <View style={{
        flex: 0, flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
      }}>
          <Button onClick={() => {}} text={this.props.count}/>
          <Timer timer={this.props.timer} onClick={() => {}} endGame={this.props.endGame}/>s
      </View>
    )
  }
}

export default Header;