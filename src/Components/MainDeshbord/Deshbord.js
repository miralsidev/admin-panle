// import React, { useEffect, useState } from "react";
// import "./Deshbord.css";
// import { MdOutlineWeekend } from "react-icons/md";
// import { FaUser } from "react-icons/fa";
// import { IoMail } from "react-icons/io5";

// import axios from "axios";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";
// import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
// const Dashboard = () => {
//   const [userData, setUserData] = useState(Array(12).fill(0));

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/displayUser"
//         );
//         const users = response.data.data; // Assuming response.data.data contains the users array
//         const userRegistrationCounts = Array(12).fill(0); // Initialize an array with 12 zeros (one for each month)

//         // Loop through each user and count the registrations per month
//         users.forEach((user) => {
//           const month = new Date(user.createdAt).getMonth(); // Get the month of user registration
//           userRegistrationCounts[month] += 1; // Increment the count for the respective month
//         });

//         setUserData(userRegistrationCounts);
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     fetchUserData();
//   }, []);
//   const data = {
//     labels: [
//       "Jan",
//       "Feb",
//       "Mar",
//       "Apr",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sep",
//       "Oct",
//       "Nov",
//       "Dec",
//     ],
//     datasets: [
//       {
//         label: "User Registrations",
//         data: userData,
//         backgroundColor: "rgb(0, 123, 255)",
//         borderColor: "rgba(75, 192, 192, 0.2)",
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       x: {
//         ticks: {
//           maxRotation: 0,
//           minRotation: 0,
//         },
//       },
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <>
//       <p>Dashboard</p>

//       <div className="container-fluid py-4">
//         <div className="row">
//           <div className="col-xl-3 col-sm-6 mb-xl-0 mb-5">
//             <div className="card">
//               <div className="card-icon bg-dark text-light fs-3 ">
//                 <MdOutlineWeekend />
//               </div>
//               <div class="card-header">
//                 <div className="icon icon-lg icon-shape bg-gradient-dark  text-center border-radius-xl mt-n4 position-absolute">
//                   <i class="fa fa-address-book" aria-hidden="true"></i>
//                 </div>
//                 <div className="text-end">
//                   <p>Today's Money</p>
//                   <h4>$53k</h4>
//                 </div>
//               </div>
//               <hr className="dark horizontal my-0" />
//               <div class="card-footer p-3">
//                 <p className="mb-0">
//                   <span className="text-success text-sm font-weight-bolder">
//                     +55%
//                   </span>{" "}
//                   then last week
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-6 mb-xl-0 mb-5">
//             <div className="card">
//               <div className="card-icon bg-dark text-light fs-3">
//                 <FaUser />
//               </div>
//               <div class="card-header">
//                 <div className="icon icon-lg icon-shape bg-gradient-dark  text-center border-radius-xl mt-n4 position-absolute">
//                   <i class="fa fa-address-book" aria-hidden="true"></i>
//                 </div>
//                 <div className="text-end">
//                   <p>Today's Money</p>
//                   <h4>$53k</h4>
//                 </div>
//               </div>
//               <hr className="dark horizontal my-0" />
//               <div class="card-footer p-3">
//                 <p className="mb-0">
//                   <span className="text-success text-sm font-weight-bolder">
//                     +55%
//                   </span>{" "}
//                   then last week
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-6 mb-xl-0 mb-5">
//             <div className="card">
//               <div className="card-icon bg-dark text-light fs-3">
//                 <FaUser />
//               </div>
//               <div class="card-header">
//                 <div className="icon icon-lg icon-shape bg-gradient-dark  text-center border-radius-xl mt-n4 position-absolute">
//                   <i class="fa fa-address-book" aria-hidden="true"></i>
//                 </div>
//                 <div className="text-end">
//                   <p>Today's Money</p>
//                   <h4>$53k</h4>
//                 </div>
//               </div>
//               <hr className="dark horizontal my-0" />
//               <div class="card-footer p-3">
//                 <p className="mb-0">
//                   <span className="text-success text-sm font-weight-bolder">
//                     +55%
//                   </span>{" "}
//                   then last week
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
//             <div className="card">
//               <div className="card-icon bg-dark text-light fs-3">
//                 <IoMail />
//               </div>
//               <div class="card-header">
//                 <div className="icon icon-lg icon-shape bg-gradient-dark  text-center border-radius-xl mt-n4 position-absolute">
//                   <i class="fa fa-address-book" aria-hidden="true"></i>
//                 </div>
//                 <div className="text-end">
//                   <p>Today's Money</p>
//                   <h4>$53k</h4>
//                 </div>
//               </div>
//               <hr className="dark horizontal my-0" />
//               <div class="card-footer p-3">
//                 <p className="mb-0">
//                   <span className="text-success text-sm font-weight-bolder">
//                     +55%
//                   </span>{" "}
//                   then last week
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//       <div>
//         <h2>Bar Chart of User Registrations</h2>
//         <div className="row">
//           <div className="col-6" style={{height:''}}>
//           <Bar data={data} options={options} />
//           </div>
//           <div className="col-6" style={{height:''}}>
//           <Bar data={data} options={options} />
//           </div>

//         </div>

//         {/* <Bar data={data} options={options} width={200} height={100} /> */}
//       </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from "react";
import "./Deshbord.css";
import { MdOutlineWeekend } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,

  BarElement
);

const Dashboard = () => {
  const [userData, setUserData] = useState(Array(12).fill(0));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/displayUser"
        );
        const users = response.data.data; // Assuming response.data.data contains the users array
        const userRegistrationCounts = Array(12).fill(0); // Initialize an array with 12 zeros (one for each month)

        // Loop through each user and count the registrations per month
        users.forEach((user) => {
          const month = new Date(user.createdAt).getMonth(); // Get the month of user registration
          userRegistrationCounts[month] += 1; // Increment the count for the respective month
        });

        setUserData(userRegistrationCounts);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const Linedata = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "User Registrations",
        data: userData,
     
        borderColor: '#6D4A56',
        backgroundColor: "rgba(109, 74, 86,0.5)",
      },
    ],
  };
  const Bardata = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "User Registrations",
        data: userData,
        backgroundColor:  '#6D4A56', 
        borderColor: "rgba(75, 192, 192, 0.2)",  
       
       
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <p>Dashboard</p>

      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-5">
            <div className="card">
              <div className="card-icon  text-light fs-3" style={{ backgroundColor: '#6D4A56' }}>
                <MdOutlineWeekend />
              </div>
              <div className="card-header">
              
                <div className="text-end">
                  <p>Today's Money</p>
                  <h4>$53k</h4>
                </div>
              </div>
              <hr className="dark horizontal my-0" />
              <div className="card-footer p-3">
                <p className="mb-0">
                  <span className="text-success text-sm font-weight-bolder">
                    +55%
                  </span>{" "}
                  then last week
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-5">
            <div className="card">
              <div className="card-icon text-light fs-3" style={{ backgroundColor: '#6D4A56' }}>
                <FaUser />
              </div>
              <div className="card-header">
                
                <div className="text-end">
                  <p>Today's Money</p>
                  <h4>$53k</h4>
                </div>
              </div>
              <hr className="dark horizontal my-0" />
              <div className="card-footer p-3">
                <p className="mb-0">
                  <span className="text-success text-sm font-weight-bolder">
                    +55%
                  </span>{" "}
                  then last week
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-5">
            <div className="card">
              <div className="card-icon text-light fs-3" style={{ backgroundColor: '#6D4A56' }}>
                <FaUser />
              </div>
              <div className="card-header">
                
                <div className="text-end">
                  <p>Today's Money</p>
                  <h4>$53k</h4>
                </div>
              </div>
              <hr className="dark horizontal my-0" />
              <div className="card-footer p-3">
                <p className="mb-0">
                  <span className="text-success text-sm font-weight-bolder">
                    +55%
                  </span>{" "}
                  then last week
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
              <div className="card-icon text-light fs-3" style={{ backgroundColor: '#6D4A56' }}>
           
                <IoMail />
              </div>
              <div className="card-header">
                
                <div className="text-end">
                  <p>Today's Money</p>
                  <h4>$53k</h4>
                </div>
              </div>
              <hr className="dark horizontal my-0" />
              <div className="card-footer p-3">
                <p className="mb-0">
                  <span className="text-success text-sm font-weight-bolder">
                    +55%
                  </span>{" "}
                  then last week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2>Line Chart of User Registrations</h2>
        <div className="row ">
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
            <Line data={Linedata} options={options} />
          </div>
          <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
            <Bar data={Bardata} options={options} width={200} height={100} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
