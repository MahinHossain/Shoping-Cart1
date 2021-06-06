import * as Types from "./Types";

const initializitState = {
  valu: [],
  cartitem: [],
};

function Reducer(state = initializitState, action) {
  switch (action.type) {
    case Types.GET_TASKS:
      return {
        ...state,
        valu: action.payload,
      };
      break;
    case Types.CART_ITEM:
      console.log(`in reducer--`, action.payload);
      return {
        ...state,
        cartitem: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
}
export default Reducer;
