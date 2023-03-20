import { SEARCH_BOOK } from "./actionsTypes";

const initaialState = {
    bookName: ''
}

const searchBookReducer = (state = initaialState, action) => {
    switch (action.type) {
        case SEARCH_BOOK:
            return {
                ...state,
                bookName: action.payload
            }
        default:
            return state
    }
}

export default searchBookReducer;