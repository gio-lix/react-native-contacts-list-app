import { LOGIN_SUCCESS } from "../../../constants/actionTypes";

export default ({password, userName: username}) => (dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: {
      firstname: "mollie",
      lastname: "anderson",
      username: "mollie01",
      email: "mollie@gmail.com",
    },
  });
};
