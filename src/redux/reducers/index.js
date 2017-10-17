import { combineReducers } from 'redux';
import eventsReducer from './EventsReducer';
import eventReducer from './EventReducer';

export default combineReducers({
  events: eventsReducer,
  selectedEvent: eventReducer,
});

