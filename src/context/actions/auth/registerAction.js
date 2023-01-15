import Axios from "../../../helpers/axiosInterceptor";
import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes";

export const clearAuthState = () => dispatch => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
                  email,
                  password,
                  username,
                  first_name: firstname,
                  last_name: lastname,
                }) => (dispatch) => {
  dispatch({
    type: REGISTER_LOADING,
  });
  Axios.post("/auth/register", {
    email,
    password,
    username,
    firstname,
    lastname,
  })
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response ? err.response.data : { error: "Something went wrong!" },
      });
    });
};
