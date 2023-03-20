import { updateBook } from './../actions';

const updateBookInfoThunk = (id, bookData) => {
    return async (dispatch) => {
        const response = await fetch(
            `http://localhost:9000/books/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bookData)
            }
        );
        const data = await response.json();
        if (data?.id) {
            dispatch(updateBook(id, bookData))
        }
    }
}

export default updateBookInfoThunk;