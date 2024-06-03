import React from 'react'
import { Paper, TextField, Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { AddBlog } from '../../Service/Blog';
import { ToastContainer, toast } from 'react-toastify'
const BlogForm = ({show, handleClose}) => {
    const validationSchema = yup.object({

        Image: yup.mixed().required('Image is required'),
        details: yup.string()
            .required('details is required'),
        heading: yup.string()
            .required('heading is required'),
    });
    const hasFormSubmit = async (values, { resetForm }) => {
        try {
            const formData = new FormData();
            formData.append('details', values.details);
            formData.append('heading', values.heading);
            if (values.Image) {
                formData.append('Image', values.Image);
            }
            const response = await AddBlog(formData)
            if (response.data.status === 400) {
                toast.error(response.data.message || 'Something Went Wrong')
            }
            else if (response.data.status === 500) {
                toast.error(response.data.message || 'Something Went Wrong')
            }
            else if (response.data.status === 200) {
             
                resetForm();
               
                function notify(callback) {
                    toast.success(response.data.message || 'Add Blog succesfully', { onClose: callback })
                }
                // notify()
                notify(() => handleClose());

            }
        } catch (error) {

        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    {/* <Modal.Title>{edit ? 'Update Car' : 'Add Car'}</Modal.Title> */}
                    <Modal.Title>Add Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik validationSchema={validationSchema}
                        initialValues={{
                            Image: null,
                            details: '',
                            heading: ''
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

                                                        <input
                                                            type="file"
                                                            name="Image"

                                                            onChange={(event) => {
                                                                setFieldValue("Image", event.currentTarget.files[0]);
                                                            }}
                                                            style={{ marginBottom: '5px' }}
                                                        />

                                                        <ErrorMessage name='Image' />

                                                        <Field as={TextField} name="details" label="Details" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='details' />

                                                        <Field as={TextField} name="heading" label="Heading" sx={{ marginBottom: '5px' }} />

                                                        <ErrorMessage name='heading' />





                                                        <Button variant="contained" color="primary" type="submit" >
                                                            {/* {edit ? 'Update' : 'Submit'} */} add
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
            </Modal >
        </>
    )
}

export default BlogForm
