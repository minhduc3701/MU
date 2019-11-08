import * as Types from "./../constants/ActionType";

let data = JSON.parse(localStorage.getItem("CART"));

let initialState = data ? data : [];

const carts = (state = initialState, action) => {
  let { product, quantity } = action;
  switch (action.type) {
    case Types.ADD_TO_CART:
      state.push({
        product,
        quantity
      });
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    default:
      return [...state];
  }
};

export default carts;
