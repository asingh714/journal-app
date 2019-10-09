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
    .post("/entries", journalEntry)
    .then(res => {
      dispatch({ type: ADD_JOURNAL_ENTRY_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: ADD_JOURNAL_ENTRY_FAILURE });
    });
};

export const DELETE_JOURNAL_START = "DELETE_JOURNAL_START";
export const DELETE_JOURNAL_SUCCESS = "DELETE_JOURNAL_SUCCESS";
export const DELETE_JOURNAL_FAILURE = "DELETE_JOURNAL_FAILURE";

export const deleteJournalEntry = id => dispatch => {
  dispatch({ type: DELETE_JOURNAL_START });

  axiosWithAuth()
    .delete(`/entries/${id}`)
    .then(res => {
      dispatch({ type: DELETE_JOURNAL_SUCCESS, payload: id });
    })
    .catch(error => {
      dispatch({ type: ADD_JOURNAL_ENTRY_FAILURE });
    });
};

export const EDIT_JOURNAL_START = "EDIT_JOURNAL_START";
export const EDIT_JOURNAL_SUCCESS = "EDIT_JOURNAL_SUCCESS";
export const EDIT_JOURNAL_FAILURE = "EDIT_JOURNAL_FAILURE";

export const editJournalEntry = (id, journalEntry) => dispatch => {
  dispatch({ type: EDIT_JOURNAL_START })

  axiosWithAuth()
  .put(`/entries/${id}`, journalEntry)
  .then(res => {
    dispatch({ type: EDIT_JOURNAL_SUCCESS, payload: res.data });
  })
  .catch(error => {
    dispatch({ type: EDIT_JOURNAL_FAILURE })
  })
}