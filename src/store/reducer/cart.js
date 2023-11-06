import { createReducer } from "@reduxjs/toolkit";
import {cart_product} from "../actions/cart.js"
//el estado inicial que va tener este estado
const initialStore = {
    productCart: [
      {
        name: "",
        sku: "",
        price: 0,
        description: "",
        quantity: 0,
        category: {
          _id: "",
          name: "",
          __v: 0
        },
        img: "",
        deleted: false,
        important: false,
        __v: 0
      }
    ]
  };
  
  const cartProductReducer = createReducer(initialStore, (builder)=>{
    return builder.addCase(cart_product.fulfilled, (state, action) => {
        state.productCart = action.payload; 
        console.log(state.productCart);
      });      

})
  
export default cartProductReducer