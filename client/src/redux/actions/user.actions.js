import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { bindActionCreators } from "redux";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const loginUser = (credentials) => dispatch => {
  dispatch({ type: USER_LOGIN_START });

  axiosWithAuth()
    .post("/auth/login", credentials)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.token});
    })
    .catch(err => {
      console.log(err)
      // dispatch({ type: USER_LOGIN_FAILURE, payload: err.error});
    });
};
