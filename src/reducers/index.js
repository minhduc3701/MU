import { combineReducers } from "redux";

import products from "./products";
import carts from "./carts";

const appReducers = combineReducers({
  carts,
  products
});

export default appReducers;
