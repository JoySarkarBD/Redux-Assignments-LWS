import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlog from "./blogAPI";



// Initial State
const initialState = {
    blog: {},
    isLoading: false,
    isError: false,
    error: ''
};


// Async thunk
export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (id) => {
    const blog = await getBlog(id);
    return blog;
});


// Create slice
const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        updatedIsSaved: (state, action) => {
            state.blog.isSaved = !state.blog.isSaved;
        },
        incrementLikes: (state, action) => {
            state.blog.likes = state.blog.likes += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBlog.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchBlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.blog = action.payload;
            })
            .addCase(fetchBlog.rejected, (state, action) => {
                state.isLoading = false;
                state.blog = {};
                state.isError = true;
                state.error = action?.error?.message;
            })
    },
});


export default blogSlice.reducer;
export const { updatedIsSaved, incrementLikes } = blogSlice.actions;