import { EDIT_BOOK } from "./actionTypes"

// edit book
export const editBook = (bookData) => {
    return {
        type: EDIT_BOOK,
        payload: bookData
    }
}