import axios from "axios";

export const AddBlog = (userData) => {
    return axios.post('http://localhost:5000/blog/addblog', userData);
};
export const deleteData = (blogId)=>{
    return axios.delete(`http://localhost:5000/blog/DeleteBlog/${blogId}`)

}