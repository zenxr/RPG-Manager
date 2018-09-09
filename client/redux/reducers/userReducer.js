import { ADD_USER } from "../constants/action-types";

const initialState = {
  user: {}
};

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
