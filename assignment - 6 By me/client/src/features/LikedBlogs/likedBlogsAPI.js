import axios from "../../utilities/axios";

const likedBlog = async (id, likes) => {
    const response = await axios.get(`/blogs/${id}`);

    return response.data;
}

export default likedBlog;