import React from 'react';
import { render } from 'react-dom'
import App from './components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import products from './reducers'
import { fetchProducts } from './actions'

const loggerMiddleware = createLogger()


const store = createStore(
  products,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  ))


store.dispatch(fetchProducts()).then(() => console.log(store.getState()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
