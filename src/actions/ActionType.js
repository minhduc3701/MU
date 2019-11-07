import * as Types from "./../constants/ActionType";
import CallApi from "./../ultils/CallApi";

export const actFetchAction = products => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  };
};

export const actFetchActionRequest = () => {
  return dispatch => {
    return CallApi("products", null).then(res => {
      dispatch(actFetchAction(res.data));
    });
  };
};
