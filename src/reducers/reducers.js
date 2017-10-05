import {
  FETCH_EVENTS_DATA,
  FETCH_EVENTS_DATA_SUCCESS,
  FETCH_EVENTS_DATA_ERROR,
  SELECT_EVENT,
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
      const newList = payload.reduce((all, item) => {
        all[item.id] = item;
        return all;
      }, {});
      return {
        ...state,
        loading: false,
        list: newList,
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
          ...state.list[payload]
        },
      };
    default:
      return state;
  }
};

export default eventsReducer;