import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { incrementLikes } from "../blog/blogSlice";




export const fetchLikesUpdated = createAsyncThunk("updateLikes/fetchLikesUpdated", async (id, store) => {
    const blog = await (await axios.get(`http://localhost:9000/blogs/${id}`)).data;


    const response = await fetch(`http://localhost:9000/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...blog, likes: blog.likes += 1 })
    });

    const modifedLikes = await response.json();
    store.dispatch(incrementLikes())
    return modifedLikes;
}) 