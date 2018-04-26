import { DECREASE_TIMER, END_GAME, MOLE_DECREASE, MOLE_INCREASE, RESTART_GAME, UPDATE_BACKGROUND } from './constants'

export function increaseCount() {
  return {
    type: MOLE_INCREASE,
  };
}

export function decreaseCount() {
  return {
    type: MOLE_DECREASE,
  };
}

export function decreaseTimer() {
  return {
    type: DECREASE_TIMER,
  };
}

export function endGame() {
  return {
    type: END_GAME,
  };
}

export function restartGame() {
  return {
    type: RESTART_GAME,
  };
}

export function updateBackground(id, status) {
  return {
    type: UPDATE_BACKGROUND,
    id,
    status,
  };
}
