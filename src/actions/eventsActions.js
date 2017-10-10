import {
  FETCH_EVENTS_DATA,
  FETCH_EVENTS_DATA_SUCCESS,
  FETCH_EVENTS_DATA_ERROR,
  SELECT_EVENT
} from './action-types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const fetchEventsData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_EVENTS_DATA });
    axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=TLAdwV0eyURqxMPWSG8lnw9IvLH37GEZ&city=dublin&size=50&sort=date,name,asc')
      .then(res => fetchEventsDataSuccess(dispatch, res.data._embedded.events))
      .catch(err => fetchEventsDataError(dispatch, err))
  }
};

export const fetchEventsDataSuccess = (dispatch, data) =>
  dispatch({
    type: FETCH_EVENTS_DATA_SUCCESS,
    payload: data
  });

export const fetchEventsDataError = (dispatch, err) =>
  dispatch({
    type: FETCH_EVENTS_DATA_ERROR,
    payload: err
  });

export const selectEvent = (eventId) => {
  return dispatch => {
    dispatch({
      type: SELECT_EVENT,
      payload: eventId
    });
    Actions.eventPage();
  };

};