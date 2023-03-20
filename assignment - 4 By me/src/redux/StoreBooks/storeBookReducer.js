import { ADD_BOOK, DELETE_BOOK, LOADED, SEARCH_BOOK, UPDATE_BOOK } from "./actionTypes";

const initialState = [];

const storeBookReducer = (state = initialState, action) => {
    const newState = structuredClone(state);
    const { type, payload } = action;

    switch (type) {

        case LOADED:
            return [
                ...newState,
                ...payload
            ];

        case ADD_BOOK:
            return [
                ...newState,
                payload
            ];

        case DELETE_BOOK:
            return newState.filter(book => book.id !== payload);

        case SEARCH_BOOK:
            return payload;

        case UPDATE_BOOK:
            // new data
            const updateBook = payload.bookInfo;

            // find the value by index
            const index = newState.findIndex(book => book.id === payload.id);

            if (index || !index) {
                newState[index] = updateBook;
            }

            return newState;

        default:
            return state
    }
}

export default storeBookReducer;