import axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const notifications = async () => {
    try {
        const response = await axiosInstance.post(`/api/notifications/`);
        return response;
    } catch (error) {
        // console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};