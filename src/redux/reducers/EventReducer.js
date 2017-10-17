import {
  FETCH_FEES_DATA,
  FETCH_FEES_DATA_SUCCESS,
  FETCH_FEES_DATA_ERROR,
} from '../actions/action-types';

const initialState = {
  loading: false,
  list: {}
};

export const eventReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_FEES_DATA:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FEES_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        [state.list.venue]: payload,
      };
    case FETCH_FEES_DATA_ERROR:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default eventReducer;