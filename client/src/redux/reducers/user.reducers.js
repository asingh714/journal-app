import {
  USER_LOGIN_START,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_REGISTER_START,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_SIGNOUT_START,
  USER_SIGNOUT_SUCCESS
} from "../actions/user.actions";

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false || localStorage.getItem("token") ? true : false,
  error: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_START:
    case USER_REGISTER_START:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        error: ""
      };
    case USER_LOGIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        error: ""
      };
    case USER_LOGIN_FAILURE:
    case USER_REGISTER_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: ""
      };
    case USER_SIGNOUT_START: 
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        error: ""
      }
    case USER_SIGNOUT_SUCCESS: 
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        error: ""
      }
    default:
      return state;
  }
};

export default userReducer;
