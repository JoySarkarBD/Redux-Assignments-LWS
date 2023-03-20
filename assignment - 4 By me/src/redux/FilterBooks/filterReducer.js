import { FILTER_BOOKS } from './actionsType'
const initialState = {
    filterType: 'All',
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BOOKS:
            return {
                ...state,
                filterType: action.payload
            }
        default:
            return state
    }
}

export default filterReducer;