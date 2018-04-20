import { call , takeEvery } from 'redux-saga/effects';
import { SHOW_MOLE } from './constants'

function* showMole (action) {

}

export default [].concat(
  takeEvery(SHOW_MOLE, showMole), // eslint-disable-line
)