import { BOOK_FLIGHT, CANCLE_FLIGHT } from "./actionTypes";

const initialState = [];

const bookFlightAndCancleReducer = (state = initialState, action) => {
    const { type, payload } = action;

    const imutableState = structuredClone(state);

    switch (type) {
        case BOOK_FLIGHT:
            imutableState.push(payload);
            return imutableState;

        case CANCLE_FLIGHT:
            return imutableState.filter(ticket => ticket.id !== payload.id)

        default:
            return state;
    }
}

export default bookFlightAndCancleReducer;