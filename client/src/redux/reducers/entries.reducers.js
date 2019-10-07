import {
  ENTRIES_FETCH_START,
  ENTRIES_FETCH_SUCCESS,
  ENTRIES_FETCH_FAILURE
} from "../actions/entries.actions";

const initialState = {
  entries: [],
  isFetching: false,
  error: ""
};

const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENTRIES_FETCH_START:
      return {
        ...state,
        entries: [],
        isFetching: true,
        error: ""
      };
    case ENTRIES_FETCH_SUCCESS:
      return {
        ...state,
        entries: action.payload,
        isFetching: false,
        error: ""
      };
    case ENTRIES_FETCH_FAILURE:
      return {
        ...state,
        entries: [],
        isFetching: false,
        error: "There was an error."
      };
    default:
      return state;
  }
};

export default entriesReducer;
