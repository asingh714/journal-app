import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const USER_LOGIN_START = "USER_LOGIN_START";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

export const loginUser = credentials => dispatch => {
  dispatch({ type: USER_LOGIN_START });

  axiosWithAuth()
    .post("/auth/login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: USER_LOGIN_FAILURE });
    });
};

export const USER_REGISTER_START = "USER_REGISTER_START";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE";

export const registerUser = credentials => dispatch => {
  dispatch({ type: USER_REGISTER_START });

  axiosWithAuth()
  .post("/auth/register", credentials)
  .then(res => {
    localStorage.setItem("token", res.data.token);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: res.data.token })
  })
  .catch(error => {
    console.log(error)
    dispatch({ type: USER_REGISTER_FAILURE });
  })
};
