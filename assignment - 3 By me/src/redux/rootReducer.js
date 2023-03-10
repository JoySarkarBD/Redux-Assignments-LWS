import { combineReducers } from "redux";
import { addProductReducer } from "./addProduct/addProductReducer";
import { addToCartReducer } from "./cart/addProductReducer";

export const rootReducer = combineReducers({
    productList: addProductReducer,
    addToCart: addToCartReducer,
})