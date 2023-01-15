import {
  CLEAR_AUTH_STATE,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from "../../constants/actionTypes";

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: {},
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
