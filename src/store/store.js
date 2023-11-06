import {configureStore} from "@reduxjs/toolkit";
// store -> almacen donde van estar nuestros estados
import cartProductReducer from "./reducer/cart.js"
export const store = configureStore({
    //el configure store va almacenar un objeto en la cual va tener lo siguiente:
    //reducer: este estado va estar controlando mis estados
    reducer:{
        cartProductReducer,
    }
});