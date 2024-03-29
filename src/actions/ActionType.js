import * as Types from "./../constants/ActionType";
// import CallApi from "./../ultils/CallApi";

export const actShowProduct = products => {
  return {
    type: Types.SHOW_PRODUCTS,
    products
  };
};
// export const actFetchAction = products => {
//   return {
//     type: Types.FETCH_PRODUCTS,
//     products
//   };
// };

// export const actFetchActionRequest = () => {
//   return dispatch => {
//     return CallApi("products", null).then(res => {
//       dispatch(actFetchAction(res.data));
//     });
//   };
// };

export const actAddToCart = (product, quantity) => {
  return {
    type: Types.ADD_TO_CART,
    product,
    quantity
  };
};

export const actUpdateCart = (product, quantity) => {
  return {
    type: Types.UPDATE_CART,
    product,
    quantity
  };
};

export const actDeleteCartItem = product => {
  return {
    type: Types.DELETE_CART_ITEM,
    product
  };
};

export const actResetCart = () => {
  return {
    type: Types.RESET_CART
  };
};
