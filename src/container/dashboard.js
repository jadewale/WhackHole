import React from 'react';
import { View } from 'react-native';
import Header from '../component/header';
import GamePanel from '../container/gamePanel';
import { connect } from 'react-redux';
import { increaseCount, decreaseCount, decreaseTimer, endGame } from '../../actions'

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
    console.log('game ended');
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Header endGame={this.endGame} decreaseTimer={this.decreaseTimer} timer={this.props.timer} count={this.props.count}/>
        {this.props.run ? <GamePanel decreaseCount={this.decreaseCount} addCount={this.addTotalCount}/>: null }

      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    count: state.root.count,
    timer: state.root.timer,
    run: state.root.run
  }
}

function mapDispatchToProps (dispatch) {
  return {
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
    decreaseTimer: () => dispatch(decreaseTimer()),
    endGame: () => dispatch(endGame()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)