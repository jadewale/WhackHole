import React from 'react';
import Proptypes from 'prop-types';
import TimerCountdown from 'react-native-timer-countdown';
import Button from '../button';

class Timer extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Button
        text={<TimerCountdown
          initialSecondsRemaining={this.props.timer}
          onTick={() => {}}
          onTimeElapsed={this.props.endGame}
          allowFontScaling
          style={{ fontSize: 20 }}
        />}
      />
    );
  }
}

Timer.propTypes = {
  endGame: Proptypes.func.isRequired,
  timer: Proptypes.number.isRequired,
};

export default Timer;