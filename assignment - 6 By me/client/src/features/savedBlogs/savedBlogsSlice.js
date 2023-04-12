import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filterSort: "all",
}

const savedBlogsSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterSorting: (state, action) => {
            console.log(action.payload);
            state.filterSort = action.payload;
        }
    }
})

export default savedBlogsSlice.reducer;

export const { filterSorting } = savedBlogsSlice.actions;