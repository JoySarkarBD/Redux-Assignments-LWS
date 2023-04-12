import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { updatedIsSaved } from "../blog/blogSlice";



export const fetchSavedBlog = createAsyncThunk("savedBlog/fetchSavedBlog", async (id, store) => {
    const blog = await (await axios.get(`http://localhost:9000/blogs/${id}`)).data;
    console.log(store);

    const response = await fetch(`http://localhost:9000/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...blog, isSaved: !blog.isSaved })
    });

    const modifedBlog = await response.json();
    store.dispatch(updatedIsSaved())
    return modifedBlog;
}) 