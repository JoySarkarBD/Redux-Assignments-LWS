import { addBook } from './../actions';

const addBooksThunk = (bookData) => {
    return async (dispatch) => {
        const response = await fetch(
            'http://localhost:9000/books',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookData)
            }
        );
        const data = await response.json();
        dispatch(addBook(data))
    }
}

export default addBooksThunk;