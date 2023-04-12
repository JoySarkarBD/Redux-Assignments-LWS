import axios from "../../utilities/axios";

const getRelatedBlogs = async ({ id, tags }) => {
    const limit = 5;
    let queryString =
        tags?.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join('&') + `&id_ne=${id}&limit=${limit}` : `&id_ne=${id}&limit=${limit}`

    const response = await axios.get(`/blogs?${queryString}`)
    return response.data;
}

export default getRelatedBlogs;