import axios from "axios";
import * as Types from "./Types";
export const getvalue = (e) => async (dispatch) => {
  let data = [];
  // axios.get("http://todo-app37.herokuapp.com/loadtodo").then((res) => {
  //   data = res.data;

  //   data.sort();
  //   data.reverse();
  //   dispatch({ type: Types.GET_TASKS, payload: data });
  // });
  data = e;

  dispatch({ type: Types.GET_TASKS, payload: data });
};
