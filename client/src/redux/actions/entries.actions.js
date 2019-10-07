import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const ENTRIES_FETCH_START = "ENTRIES_FETCH_START";
export const ENTRIES_FETCH_SUCCESS = "ENTRIES_FETCH_SUCCESS";
export const ENTRIES_FETCH_FAILURE = "ENTRIES_FETCH_FAILURE";

export const fetchEntries = () => dispatch => {
  dispatch({ type: ENTRIES_FETCH_START });

  axiosWithAuth()
    .get("/entries")
    .then(res => {
      console.log(res);
      dispatch({ type: ENTRIES_FETCH_SUCCESS });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: ENTRIES_FETCH_FAILURE });
    });
};
