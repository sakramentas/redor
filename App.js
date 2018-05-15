import React from 'react';
import { Provider } from 'react-redux';
import store from './src/core/redux/store';
import Router from './config/routes';

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

console.disableYellowBox = true; //eslint-disable-line no-console

export default App;
