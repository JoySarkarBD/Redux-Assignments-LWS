import { FILTER_BOOKS } from "./actionsType";

export const filterBooksAction = (filterType) => {
    return {
        type: FILTER_BOOKS,
        payload: filterType,
    }
};