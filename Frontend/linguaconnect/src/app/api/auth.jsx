import axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const register_teacher = async (teacher) => {
    try {
        const response = await axiosInstance.post('/api/auth/teacher/signup',teacher);
        return response;
    } catch (error) {
        // console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};
export const register_student = async (student) => {
    try {
        const response = await axiosInstance.post('/api/auth/student/signup',student);
        return response;
    } catch (error) {
        // console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};
export const signin_teacher = async (req) => {
    try {
        const response = await axiosInstance.post('/api/auth/teacher/login',req);
        return response;
    } catch (error) {
        // console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};
export const signout_teacher = async (teacher) => {
    try {
        const response = await axiosInstance.post('/auth/teacher/',teacher);
        return response;
    } catch (error) {
        // console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
};
