import { combineReducers } from "redux";
import { productReducer, selectedProductReducer, cartReducer } from "./productReducers"; // Update the file name here


const rootReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer,
});

export default rootReducer;
