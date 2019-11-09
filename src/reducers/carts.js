import * as Types from "./../constants/ActionType";

let data = JSON.parse(localStorage.getItem("CART"));

let initialState = data ? data : [];

let findIndex = (product, cart) => {
  let index = -1;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

const carts = (state = initialState, action) => {
  let { product, quantity } = action;
  let index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findIndex(product, state);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case Types.UPDATE_CART:
      index = findIndex(product, state);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case Types.DELETE_CART_ITEM:
      index = findIndex(product, state);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];

    case Types.RESET_CART:
      state = [];
      localStorage.removeItem("CART");
      return [...state];

    default:
      return [...state];
  }
};

export default carts;
