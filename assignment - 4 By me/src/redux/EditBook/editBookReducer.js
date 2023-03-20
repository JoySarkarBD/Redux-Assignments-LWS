import { EDIT_BOOK } from "./actionTypes";

const initialState = {};

const editBookReducer = (state = initialState, action) => {
    const newState = structuredClone(initialState);

    switch (action.type) {
        case EDIT_BOOK:
            // store the book data in the state
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default editBookReducer;