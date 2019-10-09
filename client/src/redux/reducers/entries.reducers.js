import {
  ENTRIES_FETCH_START,
  ENTRIES_FETCH_SUCCESS,
  ENTRIES_FETCH_FAILURE,
  SINGLE_ENTRY_FETCH_START,
  SINGLE_ENTRY_FETCH_SUCCESS,
  SINGLE_ENTRY_FETCH_FAILURE,
  ADD_JOURNAL_ENTRY_START,
  ADD_JOURNAL_ENTRY_SUCCESS,
  ADD_JOURNAL_ENTRY_FAILURE,
  DELETE_JOURNAL_START,
  DELETE_JOURNAL_SUCCESS,
  DELETE_JOURNAL_FAILURE,
  EDIT_JOURNAL_START,
  EDIT_JOURNAL_SUCCESS,
  EDIT_JOURNAL_FAILURE
} from "../actions/entries.actions";

const initialState = {
  entry: {},
  entries: [],
  isFetching: false,
  isFetchingSingleEntry: false,
  isAddingEntry: false,
  isDeletingEntry: false,
  isEditingEntry: false,
  error: "",
  singleEntryError: "",
  addingError: "",
  deletingError: "",
  editingError: ""
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
      };
    case SINGLE_ENTRY_FETCH_SUCCESS:
      return {
        ...state,
        entry: action.payload,
        isFetchingSingleEntry: false,
        singleEntryError: ""
      };
    case SINGLE_ENTRY_FETCH_FAILURE:
      return {
        ...state,
        entry: {},
        isFetchingSingleEntry: false,
        singleEntryError: "There was an error"
      };
    case ADD_JOURNAL_ENTRY_START:
      return {
        ...state,
        isAddingEntry: true,
        addingError: ""
      };
    case ADD_JOURNAL_ENTRY_SUCCESS:
      return {
        ...state,
        isAddingEntry: false,
        entries: [...state.entries, action.payload],
        addingError: ""
      };
    case ADD_JOURNAL_ENTRY_FAILURE:
      return {
        ...state,
        isAddingEntry: false,
        addingError: "there was an error when adding"
      };
    case DELETE_JOURNAL_START:
      return {
        ...state,
        isDeletingEntry: true,
        deletingError: ""
      };
    case DELETE_JOURNAL_SUCCESS:
      return {
        ...state,
        isDeletingEntry: false,
        entries: state.entries.filter(entry => entry.id !== action.payload),
        deletingError: ""
      };
    case DELETE_JOURNAL_FAILURE:
      return {
        ...state,
        isDeletingEntry: false,
        deletingError: "There was an error with deleting"
      };
    case EDIT_JOURNAL_START:
      return {
        ...state,
        isEditingEntry: true,
        editingError: ""
      };
    case EDIT_JOURNAL_SUCCESS:
      return {
        ...state,
        isEditingEntry: false,
        entries: state.entries.map(entry =>
          entry.id === action.payload.id ? action.payload : entry
        )
      };
    case EDIT_JOURNAL_FAILURE:
      return {
        ...state,
        isEditingEntry: false,
        editingError: "There was an error with editing"
      };
    default:
      return state;
  }
};

export default entriesReducer;
