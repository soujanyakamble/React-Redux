import {
  ADD_DATA_FAIL,
  ADD_DATA_REQUEST,
  ADD_DATA_SUCCESS,
  DELETE_DATA_FAIL,
  DELETE_DATA_REQUEST,
  DELETE_DATA_SUCCESS,
  EDIT_DATA_FAIL,
  EDIT_DATA_REQUEST,
  EDIT_DATA_SUCCESS,
  GET_DATA_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "../constants/constants";

export const userReducer = (state = { userdata: [] }, { type, payload }) => {
  switch (type) {
    case ADD_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        DataAdded: payload,
        loading: true,
      };
    case ADD_DATA_FAIL:
      return {
        ...state,
        loading: false,
        Error: payload,
      };

      // *******************
    case GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        userdata: payload,
        loading: true,
      };
    case GET_DATA_FAIL:
      return {
        ...state,
        loading: false,
        Error: payload,
      };
      // ************************************
      case DELETE_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_DATA_SUCCESS:
        return {
          ...state,
          deleted: payload,
          loading: true,
        };
      case DELETE_DATA_FAIL:
        return {
          ...state,
          loading: false,
          Error: payload,
        };
      // ************************************
      case EDIT_DATA_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case EDIT_DATA_SUCCESS:
        return {
          ...state,
          Editedata: payload,
          loading: true,
        };
      case EDIT_DATA_FAIL:
        return {
          ...state,
          loading: false,
          Error: payload,
        };

    default:
      return state;
  }
};
