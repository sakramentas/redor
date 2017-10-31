import {
  FETCH_EVENTS_DATA,
  FETCH_EVENTS_DATA_SUCCESS,
  FETCH_EVENTS_DATA_ERROR,
  FETCH_EVENTS_BEST_DATA,
  FETCH_EVENTS_BEST_DATA_SUCCESS,
  FETCH_EVENTS_BEST_DATA_ERROR,
  SELECT_EVENT,
  FETCH_FEES_DATA,
  FETCH_FEES_DATA_SUCCESS,
  FETCH_FEES_DATA_ERROR,
  FETCH_VENUE_DATA,
  FETCH_VENUE_DATA_SUCCESS,
  FETCH_VENUE_DATA_ERROR,
  FETCH_CATEGORY_DATA,
  FETCH_CATEGORY_DATA_SUCCESS,
  FETCH_CATEGORY_DATA_ERROR,
} from './action-types';

const initialState = {
  loading: false,
  list: {},
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
        hashList: newList,
      };
    case FETCH_EVENTS_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case FETCH_EVENTS_BEST_DATA:
      return {
        ...state,
        // loading: true,
      };
    case FETCH_EVENTS_BEST_DATA_SUCCESS:
      const newList2 = payload
        .reduce((all, item) => {
          all[item.id] = item;
          return all;
        }, {});
      return {
        ...state,
        // loading: false,
        listBest: payload,
        hashListBest: newList2,
      };
    case FETCH_EVENTS_BEST_DATA_ERROR:
      return {
        ...state,
        // loading: false,
        error: payload,
      };
    case SELECT_EVENT:
      return {
        ...state,
        selected: {
          ...state.hashList[payload],
        },
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
            fees: payload.data,
          },
        },
      };
    case FETCH_FEES_DATA_ERROR:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VENUE_DATA:
      return {
        ...state,
        selected: {
          ...state.selected,
          loading: true,
        },
      };
    case FETCH_VENUE_DATA_SUCCESS:
      return {
        ...state,
        hashList: {
          ...state.hashList,
          [payload.eventId]: {
            ...state.hashList[payload.eventId],
            venueInfo: payload.data,
          },
        },
        selected: {
          ...state.selected,
          loading: false,
          venueInfo: payload.data,
        },
      };
    case FETCH_VENUE_DATA_ERROR:
      return {
        ...state,
        selected: {
          ...state.selected,
          loading: true,
        },
      };
    // case FETCH_CATEGORY_DATA:
    case FETCH_CATEGORY_DATA_SUCCESS:
      return {
        ...state,
        hashList: {
          ...state.hashList,
          [payload.eventId]: {
            ...state.hashList[payload.eventId],
            categoryInfo: payload.data,
          },
        },
        selected: {
          ...state.selected,
          loading: false,
          categoryInfo: payload.data,
        },
      };
    // case FETCH_CATEGORY_DATA_ERROR:
    default:
      return state;
  }
};

export default eventsReducer;
