import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    type: "All",
    salaryType: "",
    search: '',
}

// Create Slice
const filterJobSlice = createSlice({
    name: 'filterType',
    initialState,
    reducers: {
        changeType: (state, action) => {
            state.type = action.payload;
        },
        changeSalary: (state, action) => {
            state.salaryType = action.payload;
        },
        searched: (state, action) => {
            state.search = action.payload;
        }
    }
});

export default filterJobSlice.reducer;
export const { changeType, changeSalary, searched } = filterJobSlice.actions;