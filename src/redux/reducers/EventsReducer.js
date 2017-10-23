import {
  FETCH_EVENTS_DATA,
  FETCH_EVENTS_DATA_SUCCESS,
  FETCH_EVENTS_DATA_ERROR,
  SELECT_EVENT,
  FETCH_FEES_DATA,
  FETCH_FEES_DATA_SUCCESS,
  FETCH_FEES_DATA_ERROR,
  FETCH_VENUE_DATA,
  FETCH_VENUE_DATA_SUCCESS,
  FETCH_VENUE_DATA_ERROR
} from '../actions/action-types';

const initialState = {
  loading: false,
  list: {}
};

export const eventsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_EVENTS_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EVENTS_DATA_SUCCESS:
      const newList = payload
        .reduce((all, item) => {
          all[item.id] = item;
          return all;
        }, {});
      return {
        ...state,
        loading: false,
        list: payload,
        hashList: newList
      };
    case FETCH_EVENTS_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SELECT_EVENT:
      return {
        ...state,
        selected: {
          ...state.hashList[payload]
        }
      };
    case FETCH_FEES_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FEES_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        list: {
          ...state.list,
          [payload.id]: {
            ...state.list[payload.id],
            fees: payload.data
          }
        }
      };
    case FETCH_FEES_DATA_ERROR:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VENUE_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VENUE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        selected: {
          ...state.selected,
          venueInfo: payload
        }
      };
    case FETCH_VENUE_DATA_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default eventsReducer;