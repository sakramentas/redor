import React from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Router from './config/routes';
import reducers from './src/redux/reducers/index'

const logger = createLogger();
const middleware = applyMiddleware(thunk);
let store = createStore(reducers, {}, middleware);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}