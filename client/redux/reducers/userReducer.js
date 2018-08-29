import { ADD_USER } from "../constants/action-types";

const initialState = {
  user: []
};
/*
const userReducer = (state = [], action) => {
  switch (action.type) {
      case ADD_USER:
        // search for an user key
        console.log(state);
        if (state){
          // remove this element
          delete state["user"];
          return state;
        }
        else{
          return [...state, action.payload];
        }
      default:
        return state;
  }
};
*/

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    default:
      return state;
  }
};


export default userReducer;
