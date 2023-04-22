import axios from "../../utilities/axios";

// Get the job
export const getJobs = async () => {
    const response = await axios.get(`/jobs`);

    return response.data;
};


// Add a job
export const addJob = async (data) => {
    const response = await axios.post(`/jobs`, data);

    return response.data;
};


// Edit a job
export const editJob = async (id, data) => {
    const response = await axios.put(`/jobs/${id}`, data);

    return response.data;
};


// Delete a job
export const deleteJob = async (id) => {
    const response = await axios.delete(`/jobs/${id}`);

    return response.data;
}