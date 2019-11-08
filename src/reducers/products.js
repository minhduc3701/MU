import * as Types from "./../constants/ActionType";

let initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_PRODUCTS:
      console.log(action);
      state = action.products;
      return [...state];
    default:
      return [...state];
  }
};

export default products;
