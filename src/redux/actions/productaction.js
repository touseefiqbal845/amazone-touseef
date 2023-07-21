

const ActionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SELECTED_PRODUCTS: "SELECTED_PRODUCTS",
  REMOVE_SELECTED_PRODUCTS: "REMOVE_SELECTED_PRODUCTS",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  // SET_SEARCH_TERM : "SET_SEARCH_TERM",
};




export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
// productActions.js

export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};

export const increaseQuantity = (id) => {
  return {
    type: "INCREASE_QUANTITY",
    payload: id,
  };
};
export const setSearchTerm = (term) => {
  return {
    type: ActionTypes.SET_SEARCH_TERM,
    payload: term,
  };
};
export const decreaseQuantity = (id) => {
  return {
    type: "DECREASE_QUANTITY",
    payload: id,
  };
};

export default ActionTypes;

