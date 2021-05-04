import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { save, load } from "redux-localstorage-simple"
import { rootReducer, rootSaga } from 'store';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  load({ states: ['jokes.jokesList'] }),
  composeWithDevTools(applyMiddleware(
    sagaMiddleware,
    save({
      debounce: 300,
      states: ['jokes.jokesList']
    })
  ))
);

sagaMiddleware.run(rootSaga);

export default store;
