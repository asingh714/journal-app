import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE
} from "../actions/user.actions";

const initialState = {
  token: "",
  isLoggingIn: false,
  isLoggedIn: false,
  error: ""
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_START:
      return {
        ...state,
        token: "",
        isLoggingIn: true,
        isLoggedIn: false,
        error: ""
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoggingIn: false,
        isLoggedIn: true,
        error: ""
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        token: "",
        isLoggingIn: false,
        isLoggedIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducers;
