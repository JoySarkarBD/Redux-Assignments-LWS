import { ADD_TO_CART, DECREMENT_QUANTITY_CART, REMOVE_TO_CART } from "./actionType";

export const addToCart = (value) => {
    // console.log(value);
    return {
        type: ADD_TO_CART,
        payload: value
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_TO_CART,
        payload: id
    }
}

export const decrementQuantity = (id) => {
    return {
        type: DECREMENT_QUANTITY_CART,
        payload: id
    }
}