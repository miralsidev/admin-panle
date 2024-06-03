import axios from "axios";
// import axiosInstance from "../Helper/AxiosInstance";
// export const AddCarsServices =async (userData) => {
//     return await axiosInstance.post('http://localhost:5000/cars/AddCars', userData);
// }
export const AddCarsServices =(userData) => {
    return axios.post('http://localhost:5000/cars/AddCars', userData);
}
export const UpdateCarsServices = (userData, carId) => {
    return axios.put(`http://localhost:5000/cars/UpdateCars/${carId}`, userData)
}
export const viewData = (carId) => {
    return axios.get(`http://localhost:5000/cars/viewData/${carId}`)
}
export const deleteData = (carId)=>{
    return axios.delete(`http://localhost:5000/cars/deleteCars/${carId}`)

}