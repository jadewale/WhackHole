import { combineReducers } from 'redux';
import { SHOW_MOLE, HIDE_MOLE, MOLE_INCREASE, MOLE_DECREASE, DECREASE_TIMER, END_GAME, RESTART_GAME } from './constants'

export function root (state = { count: 0, timer: 120000, run: true }, action) {
  switch (action.type) {
    case MOLE_DECREASE: {
      let count = state.count;
      if(count === 0)
        return state;
      count = count -= 3;
      return { ...state, count }
    }

    case MOLE_INCREASE:
      let count = state.count;
      count = count+=10;
      return { ...state, count };

    case DECREASE_TIMER:
      let timer = state.timer;
      timer = --timer;
      return { ...state, timer };

    case END_GAME:
      return { ...state, run: false, count: 0, timer: 0 };

    case RESTART_GAME:
      return { ...state, run: true, timer: 120000 };
    case SHOW_MOLE:
      return state;
    case HIDE_MOLE:
      return state;
    default:
      return state;
  }
}

export default combineReducers({
   root,
});
