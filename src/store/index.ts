import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import jokes from 'store/jokes/reducer';
import jokesSaga from 'store/jokes/saga';

export const rootReducer = combineReducers({
  jokes,
});

export function* rootSaga() {
  yield all([jokesSaga()]);
} 