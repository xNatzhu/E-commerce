import { createReducer } from "@reduxjs/toolkit";
import { cart_product } from "../actions/cart.js";
import { cleanCart } from "../actions/cleanCart.js";
// El estado inicial que va a tener este estado
const initialState = {
  listProduct: []
};

const cartProductReducer = createReducer(initialState, (builder) => {
  builder.addCase(cart_product.fulfilled, (state, action) => {
    const newState = [...state.listProduct, action.payload]; 
    console.log("list product", newState);
    return { ...state, listProduct: newState }; 
  })

  .addCase(cleanCart, (state) => {
    return initialState;
  });
});

export default cartProductReducer;
