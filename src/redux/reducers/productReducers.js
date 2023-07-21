const ActionTypes = {
  SET_PRODUCTS: "SET_PRODUCTS",
  SELECTED_PRODUCTS: "SELECTED_PRODUCTS",
  REMOVE_SELECTED_PRODUCTS: "REMOVE_SELECTED_PRODUCTS",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  SET_SEARCH_TERM : "SET_SEARCH_TERM",
};


const productInitialState = {
  products: [],
  searchTerm: '',
};

export const productReducer = (state = productInitialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

const selectedProductInitialState = {};

export const selectedProductReducer = (state = selectedProductInitialSt
  
};
// productReducers.js

export const cartReducer = (state = cartInitialState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
     
      // Check if the product already exists in the cart
      const existingItemIndex = state.cartItems.findIndex((item) => item.id === payload.id);

      if (existingItemIndex !== -1) {
        // If the product exists, update its quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity++;
        return { ...state, cartItems: updatedCartItems };
      } else {
        // If the product doesn't exist, add it to the cart
        const newItem = { ...payload, quantity: 1 };
        return { ...state, cartItems: [...state.cartItems, newItem] };
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return state;
    case "REMOVE_FROM_CART":
      // Filter out the item with the specified id and update the cartItems
      const updatedCartItems = state.cartItems.filter((item) => item.id !== payload);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      return { ...state, cartItems: updatedCartItems };
    case "INCREASE_QUANTITY":
      // Find the item with the specified id and increase its quantity
      const incrementedItems = state.cartItems.map((item) => {
        if (item.id === payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(incrementedItems));
      return { ...state, cartItems: incrementedItems };
    case "DECREASE_QUANTITY":
      // Find the item with the specified id and decrease its quantity if greater than 1
      const decrementedItems = state.cartItems.map((item) => {
        if (item.id === payload && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(decrementedItems));
      return { ...state, cartItems: decrementedItems };
    default:
      return state;
  }
};

// export const cartReducer = (state = cartInitialState, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.ADD_TO_CART:
//       // Check if the product already exists in the cart
//       const existingItemIndex = state.cartItems.findIndex((item) => item.id === payload.id);

//       if (existingItemIndex !== -1) {
//         // If the product exists, update its quantity
//         const updatedCartItems = [...state.cartItems];
//         updatedCartItems[existingItemIndex].quantity++;
//         return { ...state, cartItems: updatedCartItems };
//       } else {
//         // If the product doesn't exist, add it to the cart
//         const newItem = { ...payload, quantity: 1 };
//         return { ...state, cartItems: [...state.cartItems, newItem] };
//       }
//     case ActionTypes.REMOVE_FROM_CART:
//       // Filter out the item with the specified id and update the cartItems
//       const updatedCartItemsRemove = state.cartItems.filter((item) => item.id !== payload);
//       return { ...state, cartItems: updatedCartItemsRemove };
//     case ActionTypes.INCREASE_QUANTITY:
//       // Find the item with the specified id and increase its quantity
//       const incrementedItems = state.cartItems.map((item) => {
//         if (item.id === payload) {
//           return { ...item, quantity: item.quantity + 1 };
//         }
//         return item;
//       });
//       return { ...state, cartItems: incrementedItems };
//     case ActionTypes.DECREASE_QUANTITY:
//       // Find the item with the specified id and decrease its quantity if greater than 1
//       const decrementedItems = state.cartItems.map((item) => {
//         if (item.id === payload && item.quantity > 1) {
//           return { ...item, quantity: item.quantity - 1 };
//           localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//       return state;
//         }
//         return item;
//       });
//       return { ...state, cartItems: decrementedItems };
//     default:
//       return state;
//   }
// };


