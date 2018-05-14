import { combineReducers } from 'redux';
import eventsReducer from './Events/reducer';
import eventReducer from './Event/reducer';

export default combineReducers({
  events: eventsReducer,
  selectedEvent: eventReducer,
});

