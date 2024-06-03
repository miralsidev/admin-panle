
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogForm from '../Blog/BlogForm'
import  {deleteData}  from '../../Service/Blog';
import { MdDeleteOutline } from "react-icons/md";

// import {Blog} 
const Blogs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [Blogs, setBlog] = useState([]);
  const handleShow = () => {
    setShow(true);
  };
  const data = () => {
    axios
      .get("http://localhost:5000/blog/displayBlog")
      .then((res) => {
        setBlog(res.data.reverse()); //reverse ma print karva mate
        // data()
        console.log("res.data -- get  ====", res.data);
      })
      .catch((error) => {
        console.error("fetching error = = ", error);
      });
  };
  useEffect(() => {
    console.log("----data--==", data);
    data();
  }, []);
    
  const DeleteData = async (id) => {
    try {
      const response = await deleteData(id);
      console.log(response);
      if (response.data.status === 400) {
        toast.error(response.data.message || "Something Went Wrong");
      } else if (response.data.status === 200) {
        toast.success(response.data.message || "Something Went Wrong");
      }
      data(); // Refresh the data after deletion
    } catch (error) {
      console.error("Error deleting car: ", error);
    }
  };
  return (
    <>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <div>
            <div style={{ background: "" }} className="mb-4 bg-light">
              <span className="d-flex justify-content-end  ">
                <button
                  type="button"
                  onClick={handleShow}
                  className="btn btn-primary"
                  style= {{backgroundColor: '#6D4A56' ,border:'#6D4A56'}}
                >
                  add blog
                </button>
              </span>
            </div>
          </div>
          {Blogs ? (
            <div className="table-container" style={{ overflowX: "auto" }}>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col">Image</th>
                    <th scope="col"> Details</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {Blogs.filter(Blogs => Blogs.deletedAt === null).map((Blogs, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {console.log(`http://localhost:5000/${Blogs?.path}`)}
                        <img
                          src={`http://localhost:5000/${Blogs.path}`}
                          alt={`car-${index}`}
                          style={{ width: "60px", height: "50px" }}
                        />
                      </td>
                      <td>{Blogs.details}</td>
                      <td>{Blogs.heading}</td>
         
                      <td className='d-flex justify-content-center'>
                      <MdDeleteOutline  onClick={() => DeleteData(Blogs._id)}/>
                  
                      </td>
                    </tr>
                  ))}


                </tbody>
              </table>
            </div>
          ) : (
            <p>Loading users...</p>
          )}


        </blockquote>
      </div>
      <BlogForm show={show} handleClose={handleClose} />
      <ToastContainer />
    </>
  )
}

export default Blogs