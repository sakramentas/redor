import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware
} from 'redux';
import reducers from './reducers';

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, {}, middleware);

export default store;
