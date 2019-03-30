import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './ducks/reducers'
import App from './App'

const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)