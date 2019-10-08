import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const ENTRIES_FETCH_START = "ENTRIES_FETCH_START";
export const ENTRIES_FETCH_SUCCESS = "ENTRIES_FETCH_SUCCESS";
export const ENTRIES_FETCH_FAILURE = "ENTRIES_FETCH_FAILURE";

export const fetchEntries = () => dispatch => {
  dispatch({ type: ENTRIES_FETCH_START });

  axiosWithAuth()
    .get("/entries")
    .then(res => {
      dispatch({ type: ENTRIES_FETCH_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: ENTRIES_FETCH_FAILURE });
    });
};

export const SINGLE_ENTRY_FETCH_START = "SINGLE_ENTRY_FETCH_START";
export const SINGLE_ENTRY_FETCH_SUCCESS = "SINGLE_ENTRY_FETCH_SUCCESS";
export const SINGLE_ENTRY_FETCH_FAILURE = "SINGLE_ENTRY_FETCH_FAILURE";

export const fetchSingleEntry = id => dispatch => {
  dispatch({ type: SINGLE_ENTRY_FETCH_START });

  axiosWithAuth()
    .get(`/entries/${id}`)
    .then(res => {
      dispatch({ type: SINGLE_ENTRY_FETCH_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: SINGLE_ENTRY_FETCH_FAILURE });
    });
};

export const ADD_JOURNAL_ENTRY_START = "ADD_JOURNAL_ENTRY_START";
export const ADD_JOURNAL_ENTRY_SUCCESS = "ADD_JOURNAL_ENTRY_SUCCESS";
export const ADD_JOURNAL_ENTRY_FAILURE = "ADD_JOURNAL_ENTRY_FAILURE";

export const addJournalEntry = journalEntry => dispatch => {
  dispatch({ type: ADD_JOURNAL_ENTRY_START });
  axiosWithAuth()
    .post("entries", journalEntry)
    .then(res => {
      dispatch({ type: ADD_JOURNAL_ENTRY_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: ADD_JOURNAL_ENTRY_FAILURE });
    });
};
