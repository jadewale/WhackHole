import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Header from '../component/header';
import GamePanel from '../container/gamePanel';
import { increaseCount, decreaseCount, decreaseTimer, endGame, restartGame } from '../../actions';
import Button from '../component/button/index';

const RestartButton = ({ onClick }) => (
  <Button onClick={onClick} text="Restart Game" />
);

RestartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

class Dashboard extends React.Component {
  addTotalCount = () => {
    this.props.increaseCount();
  }

  decreaseCount = () => {
    this.props.decreaseCount();
  }

  decreaseTimer = () => {
    this.props.decreaseTimer();
  }

  endGame = () => {
    this.props.endGame();
  }

  restartGame = () => {
    this.props.restartGame();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        { this.props.run ? <Header endGame={this.endGame} decreaseTimer={this.decreaseTimer} timer={this.props.timer} count={this.props.count} /> : null }

        { this.props.run ?
          <GamePanel decreaseCount={this.decreaseCount} addCount={this.addTotalCount} /> :
          <RestartButton onClick={this.restartGame} />
        }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.root.count,
    timer: state.root.timer,
    run: state.root.run,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
    decreaseTimer: () => dispatch(decreaseTimer()),
    endGame: () => dispatch(endGame()),
    restartGame: () => dispatch(restartGame()),
  };
}

Dashboard.propTypes = {
  count: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
  run: PropTypes.bool.isRequired,
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  decreaseTimer: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,
  restartGame: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
