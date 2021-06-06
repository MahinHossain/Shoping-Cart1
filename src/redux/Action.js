import axios from "axios";
import * as Types from "./Types";
export const getvalue = () => async (dispatch) => {
  let data = [];
  let isloading = false;
  await axios.get("https://fakestoreapi.com/products").then((res) => {
    data = res.data;
    isloading = true;
    dispatch({ type: Types.GET_TASKS, payload: { data, isloading } });
  });
};
export const cartItemAc = (cartItem) => (dispatch) => {
  dispatch({ type: Types.CART_ITEM, payload: cartItem });
};
