import React, { useEffect, useState } from "react";
import CarsForm from "./CarsForm";
import axios from "axios";
import { deleteData, viewData } from "../../Service/Cars";
import { ToastContainer, toast } from "react-toastify";
import Button from '@mui/material/Button';
import { MdDeleteOutline } from "react-icons/md";
import { RxPencil2 } from "react-icons/rx";

const Cars = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setEdit(false);
  };
  const [edit, setEdit] = useState(false);
  const [cars, setCars] = useState([]);
  const [carid, setCarid] = useState(null);
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    console.log("----data--==", data);
    data();
  }, []);
  const data = () => {
    axios
      .get("http://localhost:5000/cars/GetData")
      .then((res) => {
        // setCars(res.data);
        setCars(res.data.reverse()); //reverse ma print karva mate
        console.log("res.data -- get  ====", res.data);
      })
      .catch((error) => {
        console.error("fetching error = = ", error);
      });
  };
  const updateForm = async (id) => {
    await fetchdata(id);
    setShow(true);
    setEdit(true);
    console.log("id = ", id);
    setCarid(id);
    console.log("carid==", carid);
  };

  const fetchdata = async (carId) => {
    const res = await viewData(carId);
    setCarData(res.data);
    console.log(res, "--> res");
  };

  const   DeleteData = async (id) => {
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
  // Handler for changing the number of items to display
  const [displayCount, setDisplayCount] = useState(5);
  const handleSelectChange = (event) => {
    setDisplayCount(Number(event.target.value));
  };
  return (
    <>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <div>
            <div style={{ background: "" }} className="mb-4 bg-light">
              <span className="d-flex justify-content-end  ">
                <Button variant="contained" onClick={handleShow} style={{ backgroundColor: '#6D4A56' }}>ADD CARS</Button>

              </span>
            </div>

            {cars ? (
              <div className="table-container" style={{ overflowX: "auto" }}>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th></th>
                      <th scope="col">plate number</th>
                      <th scope="col">Image</th>
                      <th scope="col">Model</th>
                      <th scope="col">Brand</th>
                      <th scope="col">price</th>
                      <th scope="col">description</th>
                      <th scope="col">mileage</th>
                      <th scope="col">Air_Conditioning_Availability</th>
                      <th scope="col">seats</th>
                      <th scope="col">luggage</th>
                      <th scope="col">fuel</th>
                      <th scope="col">operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {cars.data?.map((car, index) => ( .......data json ma  hoy tai*/}
                    {cars.slice(0, displayCount).map((cars, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{cars.plate_number}</td>
                        <td>
                          {console.log(`http://localhost:5000/${cars?.path}`)}
                          <img
                            src={`http://localhost:5000/${cars.path}`}
                            alt={`car-${index}`}
                            style={{ width: "100px", height: "100px" }}
                          />
                        </td>
                        <td>{cars.model}</td>
                        <td>{cars.brand}</td>
                        <td>{cars.price}</td>
                        <td>{cars.description}</td>
                        <td>{cars.mileage}</td>
                        <td>{cars.Air_Conditioning_Availability}</td>
                        <td>{cars.seats}</td>
                        <td>{cars.luggage}</td>
                        <td>{cars.fuel}</td>
                        <td className="fs-3">
                          <RxPencil2 onClick={() => updateForm(cars._id)} disabled={cars.deletedAt !== null} className="ms-3"/>
                          <MdDeleteOutline onClick={() => DeleteData(cars._id)} disabled={cars.deletedAt !== null} className="ms-3"/>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>Loading users...</p>
            )}
          </div>
          <label htmlFor="recordCount" className="pt-3">
            Select number of records to display:
          </label>
          <div className="pt-3">
            <select
              className="form-select bg-light"
              aria-label="Default select example"
              id="recordCount"
              value={displayCount}
              onChange={handleSelectChange}
            >
              <option value={5}>Five</option>
              <option value={10}>Ten</option>
              <option value={15}>Fifteen</option>
              <option value={20}>Twenty</option>
            </select>
          </div>
        </blockquote>
      </div>

      <CarsForm
        show={show}
        handleClose={handleClose}
        edit={edit}
        setEdit={setEdit}
        carId={carid}
        carData={carData}
        data={data}
      />
      <ToastContainer />
    </>
  );
};

export default Cars;
