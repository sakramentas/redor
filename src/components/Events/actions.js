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
  FETCH_CATEGORY_DATA,
  FETCH_CATEGORY_DATA_SUCCESS,
  FETCH_CATEGORY_DATA_ERROR,
} from './action-types';
import {
  buildFetchEventsTicketmasterEndpoint,
  buildFetchEventsEventbriteEndpoint,
  buildFetchCommonEventbriteEndpoint,
} from '../../api/endpoints';
import { sortEvents } from '../../redux/actions/selectors';


export const fetchEventsData = () => (dispatch) => {
  dispatch({ type: FETCH_EVENTS_DATA });
  buildFetchEventsData(dispatch);
};

export const buildFetchEventsData = (dispatch) => {
  axios
    .all([
      axios(buildFetchEventsTicketmasterEndpoint()),
      axios.get(buildFetchEventsEventbriteEndpoint()),
    ])
    .then(axios
      .spread((ticketmasterRes, eventbriteRes) => {
        fetchEventsDataSuccess(dispatch, sortEvents([...ticketmasterRes.data._embedded.events, ...eventbriteRes.data.events]));
      }))
    .catch(err => fetchEventsDataError(dispatch, err));
};

export const fetchEventsDataSuccess = (dispatch, data) =>
  dispatch({
    type: FETCH_EVENTS_DATA_SUCCESS,
    payload: data,
  });

export const fetchEventsDataError = (dispatch, err) =>
  dispatch({
    type: FETCH_EVENTS_DATA_ERROR,
    payload: err,
  });

export const fetchEventsBestData = () => (dispatch) => {
  dispatch({ type: FETCH_EVENTS_BEST_DATA });
  buildFetchEventsBestData(dispatch);
};

export const buildFetchEventsBestData = (dispatch) => {
  axios
    .all([
      axios(buildFetchEventsTicketmasterEndpoint('10', 'relevance,desc')),
      // axios.get(EVENTBRITE_ENDPOINT)
    ])
    .then(axios
      .spread((ticketmasterRes) => {
        fetchEventsBestDataSuccess(dispatch, sortEvents([...ticketmasterRes.data._embedded.events]));
      }))
    .catch(err => fetchEventsBestDataError(dispatch, err));
};

export const fetchEventsBestDataSuccess = (dispatch, data) =>
  dispatch({
    type: FETCH_EVENTS_BEST_DATA_SUCCESS,
    payload: data,
  });

export const fetchEventsBestDataError = (dispatch, err) =>
  dispatch({
    type: FETCH_EVENTS_BEST_DATA_ERROR,
    payload: err,
  });

export const selectEvent = eventId => (dispatch) => {
  dispatch({
    type: SELECT_EVENT,
    payload: eventId,
  });
  Actions.eventPage();
};

export const fetchVenueData = (venueId, eventId) => (dispatch) => {
  dispatch({ type: FETCH_VENUE_DATA });
  axios.get(buildFetchCommonEventbriteEndpoint(venueId, 'venues'))
    .then(res => fetchVenueDataSuccess(dispatch, res.data, eventId))
    .catch(err => fetchVenueDataError(dispatch, err));
};

export const fetchVenueDataSuccess = (dispatch, data, eventId) =>
  dispatch({
    type: FETCH_VENUE_DATA_SUCCESS,
    payload: { data, eventId },
  });

export const fetchVenueDataError = (dispatch, err) =>
  dispatch({
    type: FETCH_VENUE_DATA_ERROR,
    payload: err,
  });

export const fetchFeesData = id => (dispatch) => {
  dispatch({ type: FETCH_FEES_DATA });
  axios.get(`https://www.eventbriteapi.com/v3/events/${id}/ticket_classes/?token=SV7XRDVTKSTYYJOV4NU4`)
    .then(res => fetchFeesDataSuccess(dispatch, res.data.ticket_classes, id))
    .catch(err => fetchFeesDataError(dispatch, err));
};

export const fetchFeesDataSuccess = (dispatch, data, id) =>
  dispatch({
    type: FETCH_FEES_DATA_SUCCESS,
    payload: {
      data,
      id,
    },
  });

export const fetchFeesDataError = (dispatch, err) =>
  dispatch({
    type: FETCH_FEES_DATA_ERROR,
    payload: err,
  });

export const fetchCategoryData = (eventId, categoryId) => (dispatch) => {
  dispatch({ type: FETCH_CATEGORY_DATA });
  axios.get(buildFetchCommonEventbriteEndpoint(categoryId, 'categories'))
    .then(res => fetchCategoryDataSuccess(dispatch, res.data, eventId))
    .catch(err => fetchCategoryDataError(dispatch, err));
};

export const fetchCategoryDataSuccess = (dispatch, data, eventId) =>
  dispatch({
    type: FETCH_CATEGORY_DATA_SUCCESS,
    payload: {
      data,
      eventId,
    },
  });

export const fetchCategoryDataError = (dispatch, err) =>
  dispatch({
    type: FETCH_CATEGORY_DATA_ERROR,
    payload: err,
  });
