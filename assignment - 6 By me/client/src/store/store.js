import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../features/blog/blogSlice';
import blogsReducer from '../features/blogs/blogsSlice';
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice';
import savedBlogsReducer from '../features/savedBlogs/savedBlogsSlice';


// Configuration store
const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        blog: blogReducer,
        relatedBlogs: relatedBlogsReducer,
        savedBlogs: savedBlogsReducer,
    }
})

export default store;