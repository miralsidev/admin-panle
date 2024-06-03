import React, { useEffect, useState } from "react";
import axios from "axios";
function User() {
  const [users, setUser] = useState();
  useEffect(() => {
    data();
  }, []);
  const data = () => {
    axios
      .get("http://localhost:5000/api/displayUser")
      .then((res) => {
        setUser(res.data);
        console.log("res.data = ", res.data);
      })
      .catch((error) => {
        console.error("fetching error == ", error);
      });
  };
  return (
    <>
      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12">
            <div className="card my-4" >
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2" style={{ top: "-25px", marginLeft: "-1.5rem", marginRight: "-1.5rem" }}>
              <div className=" shadow-primary rounded-3 pt-4 pb-3" style={{ backgroundColor: '#6D4A56' }}>
                <h6 className="text-white text-capitalize ps-3 fs-5">
                  User Details
                </h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                {users ? (
                  <table className="table table-bordered fs-5" style={{ overflowX: 'auto' }}>
                    {/* <thead> */}
                      <tr className="text-center">
                        <th style={{ padding: '20px'}}>User Id</th>
                        <th style={{ padding: '20px'}}>First Name</th>
                        <th style={{ padding: '20px'}}>Last Name</th>
                        <th style={{ padding: '20px'}}>Email</th>
                      </tr>
                    {/* </thead> */}
                    {users.data?.map((user, index) => (
                      <tr key={index} className="text-center">
                        <td style={{ padding: '20px'}}>{index + 1}</td>
                        <td style={{ padding: '20px'}}>{user.fname}</td>
                        <td style={{ padding: '20px'}}>{user.lname}</td>
                        <td style={{ padding: '20px'}}>{user.email}</td>
                      </tr>
                     
                    ))}
                  </table>
                ) : (
                  <p>Loading users...</p>
                )}
              </div>

            </div>
            </div>
            
          </div>
        </div>
      </div>

    </>
  );
}

export default User;
