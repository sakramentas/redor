import { combineReducers } from 'redux';
import eventsReducer from './reducers';

export default combineReducers({
  events: eventsReducer
});

