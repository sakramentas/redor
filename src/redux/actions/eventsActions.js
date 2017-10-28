import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  FETCH_EVENTS_DATA,
  FETCH_EVENTS_DATA_SUCCESS,
  FETCH_EVENTS_DATA_ERROR,
  FETCH_EVENTS_BEST_DATA,
  FETCH_EVENTS_BEST_DATA_SUCCESS,
  FETCH_EVENTS_BEST_DATA_ERROR,
  SELECT_EVENT,
  FETCH_VENUE_DATA,
  FETCH_VENUE_DATA_SUCCESS,
  FETCH_VENUE_DATA_ERROR,
  FETCH_FEES_DATA,
  FETCH_FEES_DATA_SUCCESS,
  FETCH_FEES_DATA_ERROR,
} from './action-types';
import {
  TICKETMASTER_ENDPOINT,
  TICKETMASTER_BEST_ENDPOINT,
  buildEventbriteVenueEndpoint,
  EVENTBRITE_ENDPOINT
} from '../../api/endpoints';
import { createEventsDataObject } from '../../api/dataBuilders';
import { sortEvents } from './selectors';

export const fetchEventsData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_EVENTS_DATA });
    buildFetchEventsData(dispatch);
  }
};

export const buildFetchEventsData = (dispatch) => {
  axios
    .all([
      axios.get(TICKETMASTER_ENDPOINT),
      axios.get(EVENTBRITE_ENDPOINT)
    ])
    .then(axios
      .spread((ticketmasterRes, eventbriteRes) => {
        fetchEventsDataSuccess(dispatch, sortEvents([...ticketmasterRes.data._embedded.events, ...eventbriteRes.data.events]))
      })
    )
    .catch(err => fetchEventsDataError(dispatch, err))
};

export const fetchEventsDataSuccess = (dispatch, data) =>
  dispatch({
    type: FETCH_EVENTS_DATA_SUCCESS,
    payload: data,
  });

export const fetchEventsDataError = (dispatch, err) =>
  dispatch({
    type: FETCH_EVENTS_DATA_ERROR,
    payload: err
  });

export const fetchEventsBestData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_EVENTS_BEST_DATA });
    buildFetchEventsBestData(dispatch);
  }
};

export const buildFetchEventsBestData = (dispatch) => {
  axios
    .all([
      axios.get(TICKETMASTER_BEST_ENDPOINT),
      // axios.get(EVENTBRITE_ENDPOINT)
    ])
    .then(axios
      .spread((ticketmasterRes) => {
        fetchEventsBestDataSuccess(dispatch, sortEvents([...ticketmasterRes.data._embedded.events]))
      })
    )
    .catch(err => fetchEventsBestDataError(dispatch, err))
};

export const fetchEventsBestDataSuccess = (dispatch, data) =>
  dispatch({
    type: FETCH_EVENTS_BEST_DATA_SUCCESS,
    payload: data,
  });

export const fetchEventsBestDataError = (dispatch, err) =>
  dispatch({
    type: FETCH_EVENTS_BEST_DATA_ERROR,
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

export const fetchVenueData = (venueId, eventId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_VENUE_DATA });
    axios.get(buildEventbriteVenueEndpoint(venueId))
      .then(res => fetchVenueDataSuccess(dispatch, res.data, eventId))
      .catch(err => fetchVenueDataError(dispatch, err))
  }
};

export const fetchVenueDataSuccess = (dispatch, data, eventId) =>
  dispatch({
    type: FETCH_VENUE_DATA_SUCCESS,
    payload: { data, eventId }
  });

export const fetchVenueDataError = (dispatch, err) =>
  dispatch({
    type: FETCH_VENUE_DATA_ERROR,
    payload: err
  });

export const fetchFeesData = (id) => {
  return (dispatch) => {
    dispatch({ type: FETCH_FEES_DATA });
    // axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=TLAdwV0eyURqxMPWSG8lnw9IvLH37GEZ&city=dublin&size=50&sort=date,name,asc')
    axios.get(`https://www.eventbriteapi.com/v3/events/${id}/ticket_classes/?token=SV7XRDVTKSTYYJOV4NU4`)
      .then(res => fetchFeesDataSuccess(dispatch, res.data.ticket_classes, id))
      .catch(err => fetchFeesDataError(dispatch, err))
  }
};

export const fetchFeesDataSuccess = (dispatch, data, id) =>
  dispatch({
    type: FETCH_FEES_DATA_SUCCESS,
    payload: {
      data,
      id
    }
  });

export const fetchFeesDataError = (dispatch, err) =>
  dispatch({
    type: FETCH_FEES_DATA_ERROR,
    payload: err
  });