import { combineReducers } from "redux";
import editBookReducer from "./EditBook/editBookReducer";
import filterReducer from "./FilterBooks/filterReducer";
import searchBookReducer from "./SearchBook/searchReducer";
import storeBookReducer from "./StoreBooks/storeBookReducer";
const rootReducer = combineReducers({
    books: storeBookReducer,
    filter: filterReducer,
    searchBook: searchBookReducer,
    editBook: editBookReducer
});

export default rootReducer;
