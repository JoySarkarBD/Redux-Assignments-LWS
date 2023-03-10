import { BOOK_FLIGHT, CANCLE_FLIGHT } from "./actionTypes";

export const bookFlight = (value) => {
    // console.log(value);
    return {
        type: BOOK_FLIGHT,
        payload: value
    }
}

export const cancleFlight = (id) => {
    // console.log(id);
    return {
        type: CANCLE_FLIGHT,
        payload: {
            id
        }
    }
}