import axios from "axios";
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

export const addDataAction = (userdata) => async (dispatch) => {
  try {
    dispatch({ type: ADD_DATA_REQUEST });
    const {data} = await axios.post("http://localhost:5000/user" , userdata)
    dispatch({ type: ADD_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ADD_DATA_FAIL, payload: error });
  }
};
export const getDataAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_DATA_REQUEST });
    const {data} = await axios.get("http://localhost:5000/user" )
    dispatch({ type: GET_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_DATA_FAIL, payload: error });
  }
};


export const deleteAction = (id)=> async(dispatch)=>{
  try {
    dispatch({type : DELETE_DATA_REQUEST})
    const {data} = await axios.delete(`http://localhost:5000/user/${id}` )
    dispatch({type : DELETE_DATA_SUCCESS , payload : data})
  } catch (error) {
    dispatch({type : DELETE_DATA_FAIL , payload : error})
    
  }
}
export const EditeAction = (item)=> async(dispatch)=>{
  try {
    dispatch({type : EDIT_DATA_REQUEST})
    const {data} = await axios.put(`http://localhost:5000/user/${item.id}` , item )
    dispatch({type : EDIT_DATA_SUCCESS , payload : data})
  } catch (error) {
    dispatch({type : EDIT_DATA_FAIL , payload : error})
    
  }
}