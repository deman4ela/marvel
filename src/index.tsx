import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { connect, Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers/rootReducer';
import App from './App';
import { fetchHeroes, fetchComics } from './redux/actions';
import rootSaga from './redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
