import { SEARCH_BOOK } from "./actionsTypes"

export const searchBookByName = (bookName) => {
    return {
        type: SEARCH_BOOK,
        payload: bookName
    }
}