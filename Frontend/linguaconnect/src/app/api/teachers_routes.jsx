import axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});
export const teacher_profile = async (userid) => {
    try {
        const response = await axiosInstance.get(`/api/teacher/${userid}`);
        return response;
    } catch (error) {
        // console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const search_profile = async (name, cost, language, experience) => {
    try {
        const response = await axiosInstance.get(`/api/search/?name=${name}&cost=${cost}&language=${language}&experience=${experience}`);
        return response;
    } catch (error) {
        // console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export const schedule_event = async (req,userId) => {
    try {
        const response = await axiosInstance.put(`/api/teacher/schedule/${userId}`,req);
        return response;
    } catch (error) {
        // console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};