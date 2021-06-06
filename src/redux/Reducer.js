import * as Types from "./Types";

const initializitState = {
  valu: [],
};

function Reducer(state = initializitState, action) {
  switch (action.type) {
    case Types.GET_TASKS:
      console.log(`action.payload`, action.payload);
      return {
        ...state,
        valu: action.payload,
      };
      break;

    default:
      break;
  }
  return state;
}
export default Reducer;
