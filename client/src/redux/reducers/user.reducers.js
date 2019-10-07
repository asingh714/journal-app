import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE
} from "../actions/user.actions";

const initialState = {
  token: "",
  isLoggingIn: false,
  isLoggedIn: false,
  error: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_START:
    case USER_REGISTER_START:
      return {
        ...state,
        token: "",
        isLoggingIn: true,
        isLoggedIn: false,
        error: ""
      };
    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isLoggingIn: false,
        isLoggedIn: true,
        error: ""
      };
    case USER_LOGIN_FAILURE:
    case USER_REGISTER_FAILURE:
      return {
        ...state,
        token: "",
        isLoggingIn: false,
        isLoggedIn: false,
        error: ""
      };
    default:
      return state;
  }
};

export default userReducer;
