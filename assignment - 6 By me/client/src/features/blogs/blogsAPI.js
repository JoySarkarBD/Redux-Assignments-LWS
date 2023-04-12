import axios from "../../utilities/axios";

const getBlogs = async (sorted) => {
    let queryString = "";

    if (sorted === "") {
        queryString = ''
    } else if (sorted === "newest") {
        queryString = `?_sort=createdAt&_order=desc`
    } else if (sorted === "most_liked") {
        queryString = `?_sort=likes&_order=desc`
    }

    const response = await axios.get(`/blogs/${queryString}`);

    return response.data;
}

export default getBlogs;