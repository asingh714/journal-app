import {
  ENTRIES_FETCH_START,
  ENTRIES_FETCH_SUCCESS,
  ENTRIES_FETCH_FAILURE,
  SINGLE_ENTRY_FETCH_START,
  SINGLE_ENTRY_FETCH_SUCCESS,
  SINGLE_ENTRY_FETCH_FAILURE
} from "../actions/entries.actions";

const initialState = {
  entry: {},
  isFetchingSingleEntry: false,
  singleEntryError: "",
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
    case SINGLE_ENTRY_FETCH_START: 
      return {
        ...state,
        entry: {},
        isFetchingSingleEntry: true,
        singleEntryError: ""
      }
    case SINGLE_ENTRY_FETCH_SUCCESS: 
      return {
        ...state,
        entry: action.payload,
        isFetchingSingleEntry: false,
        singleEntryError: ""
      }
    case SINGLE_ENTRY_FETCH_FAILURE: 
      return {
        ...state,
        entry: {},
        isFetchingSingleEntry: false,
        singleEntryError: "There was an error" 
      }
    
    default:
      return state;
  }
};

export default entriesReducer;
