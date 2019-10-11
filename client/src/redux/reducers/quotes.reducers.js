import {
  QUOTE_FETCH_START,
  QUOTE_FETCH_SUCCESS,
  QUOTE_FETCH_FAILURE
} from "../actions/quote.actions";

const initialState = {
  quotes: [],
  isFetchingQuotes: false,
  quotesError: ""
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUOTE_FETCH_START:
      return {
        ...state,
        quotes: [],
        isFetchingQuotes: true,
        quotesError: ""
      };
    case QUOTE_FETCH_SUCCESS:
      return {
        ...state,
        quotes: action.payload,
        isFetchingQuotes: false,
        quotesError: ""
      };
    case QUOTE_FETCH_FAILURE:
      return {
        ...state,
        quotes: [],
        isFetchingQuotes: false,
        quotesError: action.payload
      };
    default:
      return state;
  }
};

export default quotesReducer;
