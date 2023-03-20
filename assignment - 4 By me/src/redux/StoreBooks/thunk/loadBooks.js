import { loadBooks } from './../actions';

const loadBooksThunk = async (dispatch) => {
    const response = await fetch('http://localhost:9000/books');
    const data = await response.json();
    dispatch(loadBooks(data))
}

export default loadBooksThunk;