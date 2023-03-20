import { ADD_BOOK, DELETE_BOOK, LOADED, SEARCH_BOOK, UPDATE_BOOK } from "./actionTypes"


// fetch all books data
export const loadBooks = (value) => {
    return {
        type: LOADED,
        payload: value
    }
}

// add new book
export const addBook = (bookName) => {
    return {
        type: ADD_BOOK,
        payload: bookName
    }
}

// delete book
export const deleteBook = (id) => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

// update book information
export const updateBook = (id, bookInfo) => {
    return {
        type: UPDATE_BOOK,
        payload: {
            id,
            bookInfo
        }
    }
}


// search book
export const searchBook = (bookName) => {
    return {
        type: SEARCH_BOOK,
        payload: bookName
    }
}