import axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const student_profile = async (userid) => {
    try {
        const response = await axiosInstance.get(`/api/student/${userid}`);
        return response;
    } catch (error) {
        // console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};