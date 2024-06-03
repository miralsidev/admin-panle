import axios from "axios";

export const AdminLoginServices = (userData) => {
    return axios.post('http://localhost:5000/admin/adminLogin', userData);
};