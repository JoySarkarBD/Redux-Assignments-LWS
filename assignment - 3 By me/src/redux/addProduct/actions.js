import { ADD_PRODUCT } from "./actionType";

export const addProduct = (value) => {
    return {
        type: ADD_PRODUCT,
        payload: value
    }
} 