import React from 'react';
import { AddCarsServices, UpdateCarsServices } from '../../Service/Cars';
import { Paper, TextField, Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify'


const CarsForm = ({ show, handleClose, edit, carId, carData, data }) => {
    console.log("===================cars id = ========", carId);

    const validationSchema = yup.object({
        PlateNo: yup.string().required('PlateNo is required'),
        Image: yup.mixed().required('Image is required'),
        AC: yup.string()
            .required('AC is required'),
        Brand: yup.string()
            .required('Brand is required'),
        Model: yup.string()
            .required('Model is required'),
        Price: yup.string()
            .required('Price is required'),
        Description: yup.string()
            .required('Description is required'),
        mileage: yup.string()
            .required('mileage is required'),
        Seats: yup.string()
            .required('Seats is required'),
        Luggage: yup.string()
            .required('Luggage is required'),
        Fuel: yup.string()
            .required('fuel is required'),
    });
    const hasFormSubmit = async (values, { resetForm }) => {
        console.log(values, "=======values");
        try {
            const formData = new FormData();
            formData.append('plate_number', values.PlateNo);
            formData.append('model', values.Model);
            formData.append('price', values.Price);
            formData.append('description', values.Description);
            formData.append('mileage', values.mileage);
            formData.append('Air_Conditioning_Availability', values.AC);
            formData.append('seats', values.Seats);
            formData.append('luggage', values.Luggage);
            formData.append('fuel', values.Fuel);
            formData.append('brand', values.Brand);

            if (values.Image) {
                formData.append('Image', values.Image);
            }
            const response = edit ? await UpdateCarsServices(formData, carId) : await AddCarsServices(formData)
            // setEdit(false)
            console.log("edit ---", edit);
            data()
            // const response = await axios.post('http://localhost:5000/cars/AddCars', formData);

            if (response.data.status === 500) {
                toast.error(response.data.message || 'Something Went Wrong');
            }
            else if (response.data.status === 400) {
                toast.error(response.data.message || 'Something Went Wrong')
            }
            else if (response.data.status === 404) {
                toast.error(response.data.message || 'Something Went Wrong')
            }
            else if (response.data.status === 200) {
                // notify();
                resetForm();
                // toast.success(response.data.message || 'Add Cars succesfully');
                function notify(callback) {
                    toast.success(response.data.message || 'Add Cars succesfully', { onClose: callback })
                }
                notify(() => handleClose());

            }
        } catch (error) {
            // console.error(error);
            console.error('There was an error submitting the form!', error);
        }
    }

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{edit ? 'Update Car' : 'Add Car'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik validationSchema={validationSchema}
                        initialValues={{
                            PlateNo: edit ? carData?.plate_number : '',
                            Image: edit ? carData?.filename : null,
                            Brand: edit ? carData?.brand : '',
                            Model: edit ? carData?.model : '',
                            Price: edit ? carData?.price : '',
                            Description: edit ? carData?.description : '',
                            mileage: edit ? carData?.mileage : '',
                            Seats: edit ? carData?.seats : '',
                            Luggage: edit ? carData?.luggage : '',
                            Fuel: edit ? carData?.fuel : '',
                            AC: edit ? carData?.Air_Conditioning_Availability : ''


                        }}
                        onSubmit={hasFormSubmit} >
                        {({ setFieldValue }) => (
                            <div className=' main-container-reg'>
                                <div className="container-fluid  reg-main-form">
                                    <div className='row justify-content-center'>
                                        <div className=' '>
                                            <Paper elevation={2} sx={{ width: '100%' }}  >
                                                <Form action="" className='main-form-div'>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }} className='gap-3 p-3'>
                                                        {/* <p className='text-center fs-3'>Register Account Form</p> */}
                                                        <Field as={TextField} name="PlateNo" label="Plate Number" sx={{ marginBottom: '5px' }} xs={3} />

                                                        <ErrorMessage name='PlateNo' />
                                                        <input
                                                            type="file"
                                                            name="Image"

                                                            onChange={(event) => {
                                                                setFieldValue("Image", event.currentTarget.files[0]);
                                                            }}
                                                            style={{ marginBottom: '5px' }}
                                                        />

                                                        <ErrorMessage name='Image' />

                                                        <Field as={TextField} name="Brand" label="Brand" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Brand' />

                                                        <Field as={TextField} name="Model" label="Model" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Model' />

                                                        <Field as={TextField} name="Price" label="Price" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Price' />

                                                        <Field as={TextField} name="Description" label="Description" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Description' />


                                                        <Field as={TextField} name="mileage" label="mileage" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='mileage' />


                                                        <Field as={TextField} name="AC" label="AC" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='AC' />

                                                        <Field as={TextField} name="Seats" label="Seats" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Seats' />

                                                        <Field as={TextField} name="Luggage" label="Luggage" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Luggage' />

                                                        <Field as={TextField} name="Fuel" label="Fuel" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='Fuel' />
                                                        <Button variant="contained" color="primary" type="submit" >
                                                            {edit ? 'Update' : 'Submit'}
                                                        </Button>
                                                        <ToastContainer />

                                                    </div>
                                                </Form>
                                            </Paper>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CarsForm
