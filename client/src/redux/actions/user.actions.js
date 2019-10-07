import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const loginUser = () => dispatch => {
  dispatch({ type: USER_LOGIN_START });

  axiosWithAuth()
    .post("/auth/login")
    .then(res => {
      console.log(res);
      dispatch({ type: USER_LOGIN_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: USER_LOGIN_FAILURE });
    });
};
