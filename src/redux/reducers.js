import { combineReducers } from 'redux';
import eventsReducer from '../components/Events/reducer';
import eventReducer from './reducers/EventReducer';

export default combineReducers({
  events: eventsReducer,
  selectedEvent: eventReducer,
});

