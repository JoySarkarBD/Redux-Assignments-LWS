import { deleteBook } from "../actions";

const deleteBooksThunk = (id) => {
    return async (dispatch) => {
        await fetch(
            `http://localhost:9000/books/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        dispatch(deleteBook(id))
    }
}


export default deleteBooksThunk;