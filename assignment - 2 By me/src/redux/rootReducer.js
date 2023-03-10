import { combineReducers } from "redux";
import bookFlightAndCancleReducer from "./BookTicketAndCancle/bookFlightAndCancleReducer";

const rootReducer = combineReducers({
    bookFlightReducer: bookFlightAndCancleReducer,
})

export default rootReducer;