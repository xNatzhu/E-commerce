import { createAsyncThunk } from "@reduxjs/toolkit";

export const cart_product = createAsyncThunk("cart_product", async (product) => {  
    try {
      const cartProduct = product
      console.log("actions", cartProduct);
      return {
        cartProduct,
      };
    } catch (error) {
      console.log(error);
      throw error; // Re-lanza el error para que Redux Toolkit lo maneje
    }
  });  
// va tener una palabra clave para identificar la accion, y el otro parametro lo que va realizar esa accion