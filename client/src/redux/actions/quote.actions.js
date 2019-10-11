import axios from "axios";

export const QUOTE_FETCH_START = "QUOTE_FETCH_START";
export const QUOTE_FETCH_SUCCESS = "QUOTE_FETCH_SUCCESS";
export const QUOTE_FETCH_FAILURE = "QUOTE_FETCH_FAILURE";

export const fetchQuotes = () => dispatch => {
  dispatch({ type: QUOTE_FETCH_START });

  axios
    .get("https://myjournalapi.herokuapp.com/api/quotes")
    .then(res => {
      dispatch({ type: QUOTE_FETCH_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: QUOTE_FETCH_FAILURE });
    });
};
